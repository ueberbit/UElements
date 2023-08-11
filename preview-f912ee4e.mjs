import { t as c, R as g, g as P } from "./index-1b2f9b8d.mjs";
import { s as I } from "./chunk-757FFUVQ-56377ab9.mjs";
import "./DocsRenderer-3PUGWF3O-7fdcef2b.mjs";
import { s as M } from "./index-51e7740f.mjs";
import { g as R } from "./index-36ec6e8e.mjs";
import { f as $ } from "./index-48d82811.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
import "./lit-element-c68fb12d.mjs";
var w = "DARK_MODE", x = function t(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, a, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!t(e[a], r[a]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var s = o[a];
      if (!t(e[s], r[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const T = /* @__PURE__ */ R(x);
function f(t) {
  "@babel/helpers - typeof";
  return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, f(t);
}
var h;
function A(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? A(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function K(t, e, r) {
  return e = N(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function N(t) {
  var e = H(t, "string");
  return f(e) === "symbol" ? e : String(e);
}
function H(t, e) {
  if (f(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (f(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function d(t) {
  return Y(t) || U(t) || q(t) || L();
}
function L() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q(t, e) {
  if (t) {
    if (typeof t == "string")
      return b(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return b(t, e);
  }
}
function U(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Y(t) {
  if (Array.isArray(t))
    return b(t);
}
function b(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
__STORYBOOK_MODULE_CORE_EVENTS__;
var j = M, B = j.document, y = j.window, k = "sb-addon-themes-3";
(h = y.matchMedia) === null || h === void 0 || h.call(y, "(prefers-color-scheme: dark)");
var v = {
  classTarget: "body",
  dark: c.dark,
  darkClass: ["dark"],
  light: c.light,
  lightClass: ["light"],
  stylePreview: !1,
  userHasExplicitlySetTheTheme: !1
}, D = function(e) {
  y.localStorage.setItem(k, JSON.stringify(e));
}, J = function(e, r) {
  var n = r.current, a = r.darkClass, o = a === void 0 ? v.darkClass : a, s = r.lightClass, l = s === void 0 ? v.lightClass : s;
  if (n === "dark") {
    var i, u;
    (i = e.classList).remove.apply(i, d(p(l))), (u = e.classList).add.apply(u, d(p(o)));
  } else {
    var m, S;
    (m = e.classList).remove.apply(m, d(p(o))), (S = e.classList).add.apply(S, d(p(l)));
  }
}, p = function(e) {
  var r = [];
  return r.concat(e).map(function(n) {
    return n;
  });
}, V = function(e) {
  var r = B.querySelector(e.classTarget);
  r && J(r, e);
}, C = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = y.localStorage.getItem(k);
  if (typeof r == "string") {
    var n = JSON.parse(r);
    return e && (e.dark && !T(n.dark, e.dark) && (n.dark = e.dark, D(n)), e.light && !T(n.light, e.light) && (n.light = e.light, D(n))), n;
  }
  return E(E({}, v), e);
};
V(C());
function W(t, e) {
  return z(t) || Z(t, e) || G(t, e) || F();
}
function F() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(t, e) {
  if (t) {
    if (typeof t == "string")
      return _(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _(t, e);
  }
}
function _(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Z(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, o, s, l = [], i = !0, u = !1;
    try {
      if (o = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        i = !1;
      } else
        for (; !(i = (n = o.call(r)).done) && (l.push(n.value), l.length !== e); i = !0)
          ;
    } catch (m) {
      u = !0, a = m;
    } finally {
      try {
        if (!i && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (u)
          throw a;
      }
    }
    return l;
  }
}
function z(t) {
  if (Array.isArray(t))
    return t;
}
const { addons: Q } = __STORYBOOK_MODULE_ADDONS__;
function X() {
  var t = g.useState(C().current === "dark"), e = W(t, 2), r = e[0], n = e[1];
  return g.useEffect(function() {
    var a = Q.getChannel();
    return a.on(w, n), function() {
      return a.off(w, n);
    };
  }, []), r;
}
const ee = "experimental", te = [
  {
    name: "ue-details",
    description: "Details show a brief summary and expand to show additional content..",
    attributes: [
      {
        name: "open",
        description: "If the details is open or closed.",
        type: "boolean",
        default: "false"
      },
      {
        name: "disabled",
        description: "Disables the details so it can’t be toggled.",
        type: "boolean",
        default: "false"
      },
      {
        name: "summary",
        description: "The summary to show in the header. If you need to display HTML, use the summary slot instead.",
        type: "string",
        default: '""'
      }
    ],
    properties: [
      {
        name: "header"
      },
      {
        name: "open",
        attribute: "open",
        description: "If the details is open or closed.",
        type: "boolean",
        default: "false"
      },
      {
        name: "disabled",
        attribute: "disabled",
        description: "Disables the details so it can’t be toggled.",
        type: "boolean",
        default: "false"
      },
      {
        name: "summary",
        attribute: "summary",
        description: "The summary to show in the header. If you need to display HTML, use the summary slot instead.",
        type: "string",
        default: '""'
      },
      {
        name: "styles",
        default: '"unsafeCSS(styles)"'
      }
    ],
    events: [
      {
        name: "ue-show",
        description: "Emitted when the details opens."
      },
      {
        name: "ue-after-show",
        description: "Emitted after the details opens and all animations are complete."
      },
      {
        name: "ue-hide",
        description: "Emitted when the details closes."
      },
      {
        name: "ue-after-hide",
        description: "Emitted after the details closes and all animations are complete."
      }
    ],
    slots: [
      {
        name: "",
        description: "The details' main content."
      },
      {
        name: "summary",
        description: "The details' summary. Alternatively, you can use the `summary` attribute."
      }
    ],
    cssParts: [
      {
        name: "base",
        description: "The component’s base wrapper."
      },
      {
        name: "summary",
        description: "The header that wraps both the summary and the expand/collapse icon."
      },
      {
        name: "body",
        description: "The component’s content wrapper."
      },
      {
        name: "content",
        description: "The details content."
      }
    ]
  }
], O = {
  version: ee,
  tags: te
};
$.seed(1337);
O.tags = O.tags.map((t) => (t.properties = t.properties.filter((e) => e.name !== "styles" && Object.keys(e).length > 1), t.slots = t.slots.map((e) => ({
  ...e,
  name: e.name === "" ? "default " : `${e.name} `
})), t.cssParts = t.cssParts.map((e) => ({
  ...e,
  name: `${e.name}  `
})), t));
I(O);
const fe = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    darkMode: {
      classTarget: "html",
      stylePreview: !0,
      light: { ...c.dark }
    },
    docs: {
      container: (t) => {
        const e = X(), r = { ...t };
        return r.theme = e ? c.dark : c.light, g.createElement(P, r);
      }
    }
  }
};
export {
  fe as default
};
//# sourceMappingURL=preview-f912ee4e.mjs.map
