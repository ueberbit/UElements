import { r as E, M as S, T as C, d as M, D as T, C as _, e as f, f as b } from "./index-1b2f9b8d.mjs";
import a from "./Details.stories-2eb5340a.mjs";
import { u as h } from "./index-517abb59.mjs";
import "./index-51e7740f.mjs";
import "./index-36ec6e8e.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
import "./lit-element-c68fb12d.mjs";
import "./index-48d82811.mjs";
import "./v4-333bbb31.mjs";
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
var x;
function D() {
  if (x)
    return s;
  x = 1;
  var n = E, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(i, e, l) {
    var r, m = {}, u = null, d = null;
    l !== void 0 && (u = "" + l), e.key !== void 0 && (u = "" + e.key), e.ref !== void 0 && (d = e.ref);
    for (r in e)
      O.call(e, r) && !v.hasOwnProperty(r) && (m[r] = e[r]);
    if (i && i.defaultProps)
      for (r in e = i.defaultProps, e)
        m[r] === void 0 && (m[r] = e[r]);
    return { $$typeof: o, type: i, key: u, ref: d, props: m, _owner: R.current };
  }
  return s.Fragment = c, s.jsx = p, s.jsxs = p, s;
}
y.exports = D();
var t = y.exports;
function j(n) {
  const o = Object.assign({
    h2: "h2"
  }, h(), n.components);
  return t.jsxs(t.Fragment, {
    children: [t.jsx(S, {
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
`, t.jsx(_, {
      children: t.jsx(f, {
        id: "custom-elements-details--default"
      })
    }), `
`, t.jsx(b, {}), `
`, t.jsx(o.h2, {
      id: "with-html-summary",
      children: "With HTML Summary"
    }), `
`, t.jsx(_, {
      children: t.jsx(f, {
        id: "custom-elements-details--html-summary"
      })
    })]
  });
}
function U(n = {}) {
  const { wrapper: o } = Object.assign({}, h(), n.components);
  return o ? t.jsx(o, Object.assign({}, n, {
    children: t.jsx(j, n)
  })) : j(n);
}
export {
  U as default
};
//# sourceMappingURL=Details.docs-3490f84a.mjs.map
