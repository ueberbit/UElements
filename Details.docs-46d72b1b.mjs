import { r as v, M as E, T as C, d as S, D as M, C as _, e as d, f as T } from "./index-1b2f9b8d.mjs";
import m from "./Details.stories-89dd9586.mjs";
import { u as b } from "./index-517abb59.mjs";
import "./index-51e7740f.mjs";
import "./index-36ec6e8e.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
import "./lit-element-c68fb12d.mjs";
import "./index-48d82811.mjs";
var j = { exports: {} }, s = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f;
function D() {
  if (f)
    return s;
  f = 1;
  var n = v, o = Symbol.for("react.element"), y = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(i, t, c) {
    var r, a = {}, p = null, l = null;
    c !== void 0 && (p = "" + c), t.key !== void 0 && (p = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t)
      O.call(t, r) && !h.hasOwnProperty(r) && (a[r] = t[r]);
    if (i && i.defaultProps)
      for (r in t = i.defaultProps, t)
        a[r] === void 0 && (a[r] = t[r]);
    return { $$typeof: o, type: i, key: p, ref: l, props: a, _owner: R.current };
  }
  return s.Fragment = y, s.jsx = u, s.jsxs = u, s;
}
j.exports = D();
var e = j.exports;
function x(n) {
  return e.jsxs(e.Fragment, {
    children: [e.jsx(E, {
      of: m
    }), `
`, e.jsx(C, {
      children: m.title.split("/").at(-1)
    }), `
`, e.jsxs(S, {
      children: ["<", m.component, ">"]
    }), `
`, e.jsx(M, {
      children: __STORYBOOK_CUSTOM_ELEMENTS__.tags.find((o) => o.name === m.component).description
    }), `
`, e.jsx(_, {
      children: e.jsx(d, {
        id: "custom-elements-details--default"
      })
    }), `
`, e.jsx(T, {}), `
`, e.jsx(_, {
      children: e.jsx(d, {
        id: "custom-elements-details--htmlsummary"
      })
    })]
  });
}
function J(n = {}) {
  const { wrapper: o } = Object.assign({}, b(), n.components);
  return o ? e.jsx(o, Object.assign({}, n, {
    children: e.jsx(x, n)
  })) : x();
}
export {
  J as default
};
//# sourceMappingURL=Details.docs-46d72b1b.mjs.map
