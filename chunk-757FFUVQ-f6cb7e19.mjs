import { d as p } from "./index-398c73a4.mjs";
import { j as u } from "./lit-element-c68fb12d.mjs";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = (e, r) => r === void 0 ? e?._$litType$ !== void 0 : e?._$litType$ === r, { global: n } = __STORYBOOK_MODULE_GLOBAL__, { start: c, simulatePageLoad: _, simulateDOMContentLoaded: T } = __STORYBOOK_MODULE_PREVIEW_API__;
var { window: m } = n;
m.STORYBOOK_ENV = "web-components";
var { Node: y } = n, L = (e, r) => {
  let { id: a, component: i } = r;
  if (!i)
    throw new Error(`Unable to render story ${a} as the component annotation is missing from the default export`);
  let d = document.createElement(i);
  return Object.entries(e).forEach(([s, o]) => {
    d[s] = o;
  }), d;
};
function h({ storyFn: e, kind: r, name: a, showMain: i, showError: d, forceRemount: s }, o) {
  let t = e();
  if (i(), O(t)) {
    (s || !o.querySelector('[id="root-inner"]')) && (o.innerHTML = '<div id="root-inner"></div>');
    let l = o.querySelector('[id="root-inner"]');
    u(t, l), _(o);
  } else if (typeof t == "string")
    o.innerHTML = t, _(o);
  else if (t instanceof y) {
    if (o.firstChild === t && !s)
      return;
    o.innerHTML = "", o.appendChild(t), T();
  } else
    d({ title: `Expecting an HTML snippet or DOM node from the story: "${a}" of "${r}".`, description: p`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      ` });
}
var f = c(h);
f.forceReRender;
f.clientApi.raw;
function E(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return !0;
  throw new Error('Provided component needs to be a string. e.g. component: "my-element"');
}
function C(e) {
  if (!e)
    return !1;
  if (e.tags && Array.isArray(e.tags) || e.modules && Array.isArray(e.modules))
    return !0;
  throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`);
}
function b(e) {
  n.__STORYBOOK_CUSTOM_ELEMENTS__ = e;
}
function A() {
  return n.__STORYBOOK_CUSTOM_ELEMENTS__ || n.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;
}
var { window: S, EventSource: w } = n;
typeof module < "u" && module?.hot?.decline && (module.hot.decline(), new w("__webpack_hmr").addEventListener("message", function(e) {
  try {
    let { action: r } = JSON.parse(e.data);
    r === "built" && S.location.reload();
  } catch {
  }
}));
export {
  C as a,
  h as b,
  A as g,
  E as i,
  L as r,
  b as s
};
//# sourceMappingURL=chunk-757FFUVQ-f6cb7e19.mjs.map
