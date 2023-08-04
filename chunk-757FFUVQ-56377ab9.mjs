import { s as n } from "./index-51e7740f.mjs";
import { d as l } from "./index-398c73a4.mjs";
import { j as u } from "./lit-element-c68fb12d.mjs";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c = (e, r) => r === void 0 ? e?._$litType$ !== void 0 : e?._$litType$ === r, { start: m, simulatePageLoad: f, simulateDOMContentLoaded: O } = __STORYBOOK_MODULE_PREVIEW_API__;
var { window: T } = n;
T.STORYBOOK_ENV = "web-components";
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
  if (i(), c(t)) {
    (s || !o.querySelector('[id="root-inner"]')) && (o.innerHTML = '<div id="root-inner"></div>');
    let _ = o.querySelector('[id="root-inner"]');
    u(t, _), f(o);
  } else if (typeof t == "string")
    o.innerHTML = t, f(o);
  else if (t instanceof y) {
    if (o.firstChild === t && !s)
      return;
    o.innerHTML = "", o.appendChild(t), O();
  } else
    d({ title: `Expecting an HTML snippet or DOM node from the story: "${a}" of "${r}".`, description: l`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      ` });
}
var p = m(h);
p.forceReRender;
p.clientApi.raw;
function C(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return !0;
  throw new Error('Provided component needs to be a string. e.g. component: "my-element"');
}
function b(e) {
  if (!e)
    return !1;
  if (e.tags && Array.isArray(e.tags) || e.modules && Array.isArray(e.modules))
    return !0;
  throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`);
}
function A(e) {
  n.__STORYBOOK_CUSTOM_ELEMENTS__ = e;
}
function R() {
  return n.__STORYBOOK_CUSTOM_ELEMENTS__ || n.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;
}
var { window: w, EventSource: S } = n;
typeof module < "u" && module?.hot?.decline && (module.hot.decline(), new S("__webpack_hmr").addEventListener("message", function(e) {
  try {
    let { action: r } = JSON.parse(e.data);
    r === "built" && w.location.reload();
  } catch {
  }
}));
export {
  b as a,
  h as b,
  R as g,
  C as i,
  L as r,
  A as s
};
//# sourceMappingURL=chunk-757FFUVQ-56377ab9.mjs.map
