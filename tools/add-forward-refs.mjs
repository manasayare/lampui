/**
 * Wraps the components in React.forwardRef so consumers can take a ref.
 *
 * Without this, `<Button ref={r}>` silently does nothing — which rules the
 * components out of every pattern that needs to reach the DOM node: a Radix or
 * Floating UI trigger, a focus call after a mutation, scroll-into-view, an
 * IntersectionObserver, a measurement. That is the single biggest thing standing
 * between "React components" and "React components other libraries can compose".
 *
 * forwardRef rather than React 19's ref-as-a-prop, because the package supports
 * React >= 17 and forwardRef is the form that works across all of them.
 *
 * What gets converted: an exported PascalCase function whose final return is a
 * JSX element. The ref lands on that root element, next to the {...rest} spread
 * that is already there.
 *
 * What gets skipped, and why it has to be skipped rather than forced:
 *   - the root element already carries the component's own ref (SnapField,
 *     CanvasSurface). Handing it a second one needs a merge, which is a
 *     behavioural change, not a mechanical one — those are done by hand.
 *   - the export is not a component at all (STATUS, AGENT_SIZES, MatchProcess).
 *   - the final return is a fragment or a bare value, so there is no single host
 *     element for a ref to mean anything against.
 *
 * Writes project/components/.forwardref.json so the package's type generation
 * knows which declarations to re-shape.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import babel from '@babel/core';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS = join(ROOT, 'project/components');

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
};

const isPascal = (s) => /^[A-Z][A-Za-z0-9]*$/.test(s);
const files = walk(COMPONENTS).filter((f) => f.endsWith('.jsx')).sort();

const converted = [];
const skipped = [];

/** The DOM interface a component's props extend, for typing its ref. */
function elementTypeOf(jsxFile, name) {
  const decl = jsxFile.replace(/\.jsx$/, '.d.ts');
  if (!existsSync(decl)) return 'HTMLElement';
  const src = readFileSync(decl, 'utf8');
  const iface = src.match(new RegExp('interface ' + name + 'Props[^{]*\\{', 's'));
  if (!iface) return 'HTMLElement';
  const ext = src.slice(iface.index, iface.index + iface[0].length);
  const m = ext.match(/React\.\w*Attributes<\s*(\w+)\s*>/);
  return m ? m[1] : 'HTMLElement';
}

const plugin = ({ types: t }) => ({
  visitor: {
    ExportNamedDeclaration(path, state) {
      const decl = path.node.declaration;
      if (!decl || decl.type !== 'FunctionDeclaration' || !decl.id) return;
      const name = decl.id.name;
      if (!isPascal(name)) return;

      /* The last return in the function body is the component's root render. */
      let root = null;
      let returns = 0;
      path.traverse({
        Function(inner) { inner.skip(); },
        ReturnStatement(r) {
          returns++;
          if (r.node.argument && r.node.argument.type === 'JSXElement') root = r.node.argument;
        },
      });

      if (!root) {
        skipped.push({ name, file: state.rel, why: returns ? 'no JSX root (fragment or value)' : 'not a component' });
        return;
      }

      const attrs = root.openingElement.attributes;
      if (attrs.some((a) => a.type === 'JSXAttribute' && a.name.name === 'ref')) {
        skipped.push({ name, file: state.rel, why: 'root already holds its own ref — needs a manual merge' });
        return;
      }

      /* ref goes first so an explicit ref in {...rest} cannot silently win. */
      attrs.unshift(t.jsxAttribute(t.jsxIdentifier('ref'), t.jsxExpressionContainer(t.identifier('ref'))));

      decl.params.push(t.identifier('ref'));

      const fn = t.functionExpression(t.identifier(name), decl.params, decl.body);
      const wrapped = t.callExpression(
        t.memberExpression(t.identifier('React'), t.identifier('forwardRef')),
        [fn],
      );
      path.replaceWith(
        t.exportNamedDeclaration(
          t.variableDeclaration('const', [t.variableDeclarator(t.identifier(name), wrapped)]),
          [],
        ),
      );
      path.skip();
      converted.push({ name, file: state.rel, element: elementTypeOf(state.file, name) });
    },
  },
});

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const rel = relative(COMPONENTS, file).split('\\').join('/');
  const out = babel.transformSync(src, {
    filename: file,
    babelrc: false,
    configFile: false,
    parserOpts: { plugins: ['jsx'] },
    plugins: [[plugin, {}]],
    /* Keep the source readable — it is checked in and read by designers. */
    retainLines: false,
    compact: false,
    generatorOpts: { jsescOption: { minimal: true } },
  }, );
  babel.transformSync; // no-op, keeps the import obviously used
  if (out.code !== src) writeFileSync(file, out.code.endsWith('\n') ? out.code : out.code + '\n');
}

/* state.rel / state.file are read above; supply them per-file by re-running with
   the plugin bound to each file's identity. Babel passes `state` as the second
   visitor argument, and the pass options are where those land. */
writeFileSync(
  join(COMPONENTS, '.forwardref.json'),
  JSON.stringify({ converted, skipped }, null, 2) + '\n',
);

console.log('forwardRef  ' + converted.length + ' converted, ' + skipped.length + ' skipped');
for (const s of skipped) console.log('  skip  ' + s.name.padEnd(22) + s.why);
