/* Serves project/ so the cards, kits and templates can be opened in a browser.
   There is no build step for the design system itself — `npm run build`
   regenerates _ds_bundle.js, which is what the pages load. */
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'project');

export default {
  root,
  server: { port: 5173, open: '/thumbnail.html' },
  /* .jsx files in the kits are served as text/babel and compiled in the browser,
     exactly as they are in the design tool. Vite must not pre-transform them. */
  optimizeDeps: { entries: [] },
};
