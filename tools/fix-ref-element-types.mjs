/**
 * Types each component's ref to the element that actually carries it.
 *
 * add-forward-refs infers the element from the props interface's
 * `React.XAttributes<T>` clause, which is right most of the time and wrong twice:
 * when the interface has no such clause (the inference falls back to a bare
 * HTMLElement, so `ref.current.value` does not type-check on an input), and when
 * the ref was moved off the root by hand — every form control's ref points at
 * its `<input>`/`<select>`, not the wrapper it renders.
 *
 * So this reads the truth from the JSX: find the element holding `ref={ref}`,
 * map its tag to a DOM interface, and correct the declaration. A component
 * forwarding its ref to another component (SearchInput -> TextInput) inherits
 * that component's element.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS = join(ROOT, 'project/components');

/* Only tags that have their own interface in lib.dom; section, aside, header and
   friends really are plain HTMLElement, so they are deliberately absent. */
const TAG_TYPES = {
  a: 'HTMLAnchorElement', button: 'HTMLButtonElement', div: 'HTMLDivElement',
  form: 'HTMLFormElement', img: 'HTMLImageElement', input: 'HTMLInputElement',
  label: 'HTMLLabelElement', li: 'HTMLLIElement', ol: 'HTMLOListElement',
  option: 'HTMLOptionElement', p: 'HTMLParagraphElement', select: 'HTMLSelectElement',
  span: 'HTMLSpanElement', table: 'HTMLTableElement', tbody: 'HTMLTableSectionElement',
  td: 'HTMLTableCellElement', textarea: 'HTMLTextAreaElement', th: 'HTMLTableCellElement',
  tr: 'HTMLTableRowElement', ul: 'HTMLUListElement', svg: 'SVGSVGElement',
  h1: 'HTMLHeadingElement', h2: 'HTMLHeadingElement', h3: 'HTMLHeadingElement',
  pre: 'HTMLPreElement', dialog: 'HTMLDialogElement', canvas: 'HTMLCanvasElement',
};

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) walk(f, out);
    else out.push(f);
  }
  return out;
};

/** The element each component hands its ref to, read from the source. */
const holder = {};
const delegates = {};

for (const file of walk(COMPONENTS).filter((f) => f.endsWith('.jsx'))) {
  const src = readFileSync(file, 'utf8');
  const re = /export const ([A-Z][A-Za-z0-9]*) = React\.forwardRef\(/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1];
    /* Scan forward to this component's own `ref={ref}` — the next one in the
       file always belongs to it, because each component is fully written before
       the next begins. */
    const from = m.index;
    /* Search past the END of this match — searching from `from + 1` finds this
       same `React.forwardRef(` again and slices an empty body. */
    const next = src.indexOf('React.forwardRef(', from + m[0].length);
    const body = src.slice(from, next === -1 ? src.length : next);
    const at = body.indexOf('ref={ref}');
    if (at === -1) continue;
    const open = body.lastIndexOf('<', at);
    const tag = body.slice(open + 1, at).trim().split(/\s/)[0];
    if (/^[A-Z]/.test(tag)) delegates[name] = tag;
    else if (TAG_TYPES[tag]) holder[name] = TAG_TYPES[tag];
  }
}

/* SearchInput -> TextInput -> input. Resolve the chain, guarding against a cycle. */
for (const [name, target] of Object.entries(delegates)) {
  let seen = new Set([name]);
  let cur = target;
  while (cur && !holder[cur] && delegates[cur] && !seen.has(cur)) { seen.add(cur); cur = delegates[cur]; }
  if (cur && holder[cur]) holder[name] = holder[cur];
}

let fixed = 0;
const changes = [];
for (const file of walk(COMPONENTS).filter((f) => f.endsWith('.d.ts'))) {
  const src = readFileSync(file, 'utf8');
  let out = src;
  out = out.replace(
    /export declare const ([A-Z][A-Za-z0-9]*): React\.ForwardRefExoticComponent<([\s\S]*?) & React\.RefAttributes<(\w+)>>;/g,
    (whole, name, props, current) => {
      const real = holder[name];
      if (!real || real === current) return whole;
      changes.push(name + ': ' + current + ' -> ' + real);
      fixed++;
      return 'export declare const ' + name
        + ': React.ForwardRefExoticComponent<' + props + ' & React.RefAttributes<' + real + '>>;';
    },
  );
  if (out !== src) writeFileSync(file, out);
}

console.log('ref types  ' + fixed + ' corrected from the JSX');
for (const c of changes) console.log('  ' + c);
void existsSync;
