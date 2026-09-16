import * as React from 'react';
import { createRoot } from 'react-dom/client';

/* One stylesheet, once, at the app root. Tokens, themes and every component. */
import '@lamp/design-system/styles.css';

/* GSAP is an optional peer: import it yourself and hand it to the canvas. That
   keeps it out of the dependency graph of an app that only wants a Button, and
   it is why @lamp/design-system has no gsap import of its own. */
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { setGsap } from '@lamp/design-system';

import { App } from './App';

setGsap({ gsap, Draggable });

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
