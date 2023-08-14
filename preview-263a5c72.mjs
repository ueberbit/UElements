import { t as c, R as b, g as M } from "./index-1b2f9b8d.mjs";
import { s as R } from "./chunk-757FFUVQ-56377ab9.mjs";
import "./DocsRenderer-3PUGWF3O-7fdcef2b.mjs";
import { s as U } from "./index-51e7740f.mjs";
import { g as x } from "./index-36ec6e8e.mjs";
import { f as $ } from "./index-48d82811.mjs";
import { w as K, n as L, e as N, U as H, a as q } from "./details-ed079cc5.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
import "./lit-element-c68fb12d.mjs";
var E = "DARK_MODE", B = function t(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var a, n, o;
    if (Array.isArray(e)) {
      if (a = e.length, a != r.length)
        return !1;
      for (n = a; n-- !== 0; )
        if (!t(e[n], r[n]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), a = o.length, a !== Object.keys(r).length)
      return !1;
    for (n = a; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[n]))
        return !1;
    for (n = a; n-- !== 0; ) {
      var s = o[n];
      if (!t(e[s], r[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const A = /* @__PURE__ */ x(B);
function f(t) {
  "@babel/helpers - typeof";
  return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, f(t);
}
var g;
function T(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function C(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? T(Object(r), !0).forEach(function(a) {
      G(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function G(t, e, r) {
  return e = Y(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Y(t) {
  var e = F(t, "string");
  return f(e) === "symbol" ? e : String(e);
}
function F(t, e) {
  if (f(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(t, e || "default");
    if (f(a) !== "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function m(t) {
  return Z(t) || W(t) || V(t) || J();
}
function J() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(t, e) {
  if (t) {
    if (typeof t == "string")
      return v(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return v(t, e);
  }
}
function W(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Z(t) {
  if (Array.isArray(t))
    return v(t);
}
function v(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++)
    a[r] = t[r];
  return a;
}
__STORYBOOK_MODULE_CORE_EVENTS__;
var P = U, z = P.document, y = P.window, k = "sb-addon-themes-3";
(g = y.matchMedia) === null || g === void 0 || g.call(y, "(prefers-color-scheme: dark)");
var O = {
  classTarget: "body",
  dark: c.dark,
  darkClass: ["dark"],
  light: c.light,
  lightClass: ["light"],
  stylePreview: !1,
  userHasExplicitlySetTheTheme: !1
}, _ = function(e) {
  y.localStorage.setItem(k, JSON.stringify(e));
}, Q = function(e, r) {
  var a = r.current, n = r.darkClass, o = n === void 0 ? O.darkClass : n, s = r.lightClass, l = s === void 0 ? O.lightClass : s;
  if (a === "dark") {
    var i, u;
    (i = e.classList).remove.apply(i, m(h(l))), (u = e.classList).add.apply(u, m(h(o)));
  } else {
    var d, D;
    (d = e.classList).remove.apply(d, m(h(o))), (D = e.classList).add.apply(D, m(h(l)));
  }
}, h = function(e) {
  var r = [];
  return r.concat(e).map(function(a) {
    return a;
  });
}, X = function(e) {
  var r = z.querySelector(e.classTarget);
  r && Q(r, e);
}, I = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = y.localStorage.getItem(k);
  if (typeof r == "string") {
    var a = JSON.parse(r);
    return e && (e.dark && !A(a.dark, e.dark) && (a.dark = e.dark, _(a)), e.light && !A(a.light, e.light) && (a.light = e.light, _(a))), a;
  }
  return C(C({}, O), e);
};
X(I());
function ee(t, e) {
  return ne(t) || ae(t, e) || re(t, e) || te();
}
function te() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function re(t, e) {
  if (t) {
    if (typeof t == "string")
      return j(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return j(t, e);
  }
}
function j(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++)
    a[r] = t[r];
  return a;
}
function ae(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var a, n, o, s, l = [], i = !0, u = !1;
    try {
      if (o = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        i = !1;
      } else
        for (; !(i = (a = o.call(r)).done) && (l.push(a.value), l.length !== e); i = !0)
          ;
    } catch (d) {
      u = !0, n = d;
    } finally {
      try {
        if (!i && r.return != null && (s = r.return(), Object(s) !== s))
          return;
      } finally {
        if (u)
          throw n;
      }
    }
    return l;
  }
}
function ne(t) {
  if (Array.isArray(t))
    return t;
}
const { addons: oe } = __STORYBOOK_MODULE_ADDONS__;
function se() {
  var t = b.useState(I().current === "dark"), e = ee(t, 2), r = e[0], a = e[1];
  return b.useEffect(function() {
    var n = oe.getChannel();
    return n.on(E, a), function() {
      return n.off(E, a);
    };
  }, []), r;
}
const ie = "experimental", le = [
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
  },
  {
    name: "ue-detailsgroup",
    description: "Details Groups allow grouping of Details. Setting the `multiple` attribute\nallows multiple Details to be open at the same time.",
    attributes: [
      {
        name: "multiple",
        description: "If the details is open or closed.",
        type: "boolean",
        default: "false"
      }
    ],
    properties: [
      {
        name: "multiple",
        attribute: "multiple",
        description: "If the details is open or closed.",
        type: "boolean",
        default: "false"
      }
    ]
  }
], w = {
  version: ie,
  tags: le
};
var ue = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, S = (t, e, r, a) => {
  for (var n = a > 1 ? void 0 : a ? ce(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (n = (a ? s(e, r, n) : s(n)) || n);
  return a && n && ue(e, r, n), n;
};
let p = class extends H {
  constructor() {
    super(...arguments), this.details = [], this.multiple = !1;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.details = Array.from(this.children).filter(p.isDetails), this.addEventListener("ue-show", this.handleDetailsChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("ue-show", this.handleDetailsChange);
  }
  handleMultipleChange() {
    if (!this.multiple) {
      const t = this.details.filter((e) => e.open);
      t.shift(), t.forEach((e) => e.hide());
    }
  }
  static isDetails(t) {
    return t instanceof q;
  }
  handleDetailsChange(t) {
    this.multiple || this.details.find((e) => e === t.target) && this.details.forEach(
      (e) => e !== t.target && e.hide()
    );
  }
  hideAll() {
    this.details.forEach((t) => t.hide());
  }
  showAll() {
    this.details.forEach((t) => t.show());
  }
};
S([
  L({ type: Boolean, reflect: !0 })
], p.prototype, "multiple", 2);
S([
  K("multiple", { waitUntilFirstUpdate: !0 })
], p.prototype, "handleMultipleChange", 1);
p = S([
  N("ue-detailsgroup")
], p);
$.seed(1337);
w.tags = w.tags.map((t) => (t.properties = t.properties?.filter((e) => e.name !== "styles" && Object.keys(e).length > 1), t.slots = t.slots?.map((e) => ({
  ...e,
  name: e.name === "" ? "default " : `${e.name} `
})), t.cssParts = t.cssParts?.map((e) => ({
  ...e,
  name: `${e.name}  `
})), t));
R(w);
const we = {
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
        const e = se(), r = { ...t };
        return r.theme = e ? c.dark : c.light, b.createElement(M, r);
      }
    }
  }
};
export {
  we as default
};
//# sourceMappingURL=preview-263a5c72.mjs.map
