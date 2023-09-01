import { r as v, M as E, T as C, e as M, D as T, C as u, f as d, g as b } from "./index-6d191841.mjs";
import a from "./details.stories-ee678318.mjs";
import { u as j } from "./index-af8d51ce.mjs";
import "./index-36ec6e8e.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
import "./lit-element-c68fb12d.mjs";
import "./index-48d82811.mjs";
import "./details-9c2b2761.mjs";
import "./decorator-8ef0d1cb.mjs";
import "./chunk-AY7I2SME-1f99da15.mjs";
var y = { exports: {} }, s = {};
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
function g() {
  if (f)
    return s;
  f = 1;
  var r = v, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(i, e, x) {
    var n, m = {}, l = null, _ = null;
    x !== void 0 && (l = "" + x), e.key !== void 0 && (l = "" + e.key), e.ref !== void 0 && (_ = e.ref);
    for (n in e)
      O.call(e, n) && !S.hasOwnProperty(n) && (m[n] = e[n]);
    if (i && i.defaultProps)
      for (n in e = i.defaultProps, e)
        m[n] === void 0 && (m[n] = e[n]);
    return { $$typeof: o, type: i, key: l, ref: _, props: m, _owner: R.current };
  }
  return s.Fragment = c, s.jsx = p, s.jsxs = p, s;
}
y.exports = g();
var t = y.exports;
function h(r) {
  const o = Object.assign({
    h2: "h2"
  }, j(), r.components);
  return t.jsxs(t.Fragment, {
    children: [t.jsx(E, {
      of: a
    }), `
`, t.jsx(C, {
      children: a.title.split("/").at(-1)
    }), `
`, t.jsxs(M, {
      children: ["<", a.component, ">"]
    }), `
`, t.jsx(T, {
      children: __STORYBOOK_CUSTOM_ELEMENTS__.tags.find((c) => c.name === a.component).description
    }), `
`, t.jsx(u, {
      children: t.jsx(d, {
        id: "custom-elements-details--default"
      })
    }), `
`, t.jsx(b, {}), `
`, t.jsx(o.h2, {
      id: "with-html-summary",
      children: "With HTML Summary"
    }), `
`, t.jsx(u, {
      children: t.jsx(d, {
        id: "custom-elements-details--html-summary"
      })
    }), `
`, t.jsx(o.h2, {
      id: "with-slotted-icon",
      children: "With Slotted Icon"
    }), `
`, t.jsx(u, {
      children: t.jsx(d, {
        id: "custom-elements-details--slotted-icon"
      })
    })]
  });
}
function W(r = {}) {
  const { wrapper: o } = Object.assign({}, j(), r.components);
  return o ? t.jsx(o, Object.assign({}, r, {
    children: t.jsx(h, r)
  })) : h(r);
}
export {
  W as default
};
//# sourceMappingURL=details.docs-236dfa98.mjs.map
