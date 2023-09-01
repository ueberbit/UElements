import { t as m, b as k, k as B } from "./index-f2c466ab.mjs";
import { s as q } from "./chunk-757FFUVQ-f6cb7e19.mjs";
import "./DocsRenderer-3PUGWF3O-79d1f7f3.mjs";
import { g as F } from "./index-36ec6e8e.mjs";
import { f as H } from "./index-48d82811.mjs";
import { i as N, s as G, e as V, r as Y, b as J } from "./lit-element-c68fb12d.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
var A = "DARK_MODE", W = function t(e, r) {
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
      var i = o[a];
      if (!t(e[i], r[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const T = /* @__PURE__ */ F(W);
function h(t) {
  "@babel/helpers - typeof";
  return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, h(t);
}
var S;
function P(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function j(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? P(Object(r), !0).forEach(function(n) {
      Z(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Z(t, e, r) {
  return e = Q(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Q(t) {
  var e = X(t, "string");
  return h(e) === "symbol" ? e : String(e);
}
function X(t, e) {
  if (h(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (h(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function b(t) {
  return ne(t) || re(t) || te(t) || ee();
}
function ee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function te(t, e) {
  if (t) {
    if (typeof t == "string")
      return E(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return E(t, e);
  }
}
function re(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function ne(t) {
  if (Array.isArray(t))
    return E(t);
}
function E(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
const { global: ae } = __STORYBOOK_MODULE_GLOBAL__;
__STORYBOOK_MODULE_CORE_EVENTS__;
var I = ae, oe = I.document, w = I.window, M = "sb-addon-themes-3";
(S = w.matchMedia) === null || S === void 0 || S.call(w, "(prefers-color-scheme: dark)");
var C = {
  classTarget: "body",
  dark: m.dark,
  darkClass: ["dark"],
  light: m.light,
  lightClass: ["light"],
  stylePreview: !1,
  userHasExplicitlySetTheTheme: !1
}, x = function(e) {
  w.localStorage.setItem(M, JSON.stringify(e));
}, ie = function(e, r) {
  var n = r.current, a = r.darkClass, o = a === void 0 ? C.darkClass : a, i = r.lightClass, s = i === void 0 ? C.lightClass : i;
  if (n === "dark") {
    var u, c;
    (u = e.classList).remove.apply(u, b(g(s))), (c = e.classList).add.apply(c, b(g(o)));
  } else {
    var d, f;
    (d = e.classList).remove.apply(d, b(g(o))), (f = e.classList).add.apply(f, b(g(s)));
  }
}, g = function(e) {
  var r = [];
  return r.concat(e).map(function(n) {
    return n;
  });
}, se = function(e) {
  var r = oe.querySelector(e.classTarget);
  r && ie(r, e);
}, U = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = w.localStorage.getItem(M);
  if (typeof r == "string") {
    var n = JSON.parse(r);
    return e && (e.dark && !T(n.dark, e.dark) && (n.dark = e.dark, x(n)), e.light && !T(n.light, e.light) && (n.light = e.light, x(n))), n;
  }
  return j(j({}, C), e);
};
se(U());
function le(t, e) {
  return pe(t) || de(t, e) || ce(t, e) || ue();
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ce(t, e) {
  if (t) {
    if (typeof t == "string")
      return $(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $(t, e);
  }
}
function $(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function de(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (n = o.call(r)).done) && (s.push(n.value), s.length !== e); u = !0)
          ;
    } catch (d) {
      c = !0, a = d;
    } finally {
      try {
        if (!u && r.return != null && (i = r.return(), Object(i) !== i))
          return;
      } finally {
        if (c)
          throw a;
      }
    }
    return s;
  }
}
function pe(t) {
  if (Array.isArray(t))
    return t;
}
const { addons: fe } = __STORYBOOK_MODULE_ADDONS__;
function me() {
  var t = k.useState(U().current === "dark"), e = le(t, 2), r = e[0], n = e[1];
  return k.useEffect(function() {
    var a = fe.getChannel();
    return a.on(A, n), function() {
      return a.off(A, n);
    };
  }, []), r;
}
const he = "experimental", ye = [
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
        name: "base"
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
], _ = {
  version: he,
  tags: ye
};
const be = N`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`, ge = (t, e) => {
  if (V)
    t.adoptedStyleSheets = [
      ...t.adoptedStyleSheets,
      ...e.map(
        (r) => r instanceof CSSStyleSheet ? r : r.styleSheet
      )
    ];
  else
    for (const r of e) {
      const n = document.createElement("style"), a = global.litNonce;
      a !== void 0 && n.setAttribute("nonce", a), n.textContent = r.cssText, t.appendChild(n);
    }
};
class R extends G {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot && ge(
      this.shadowRoot,
      [be]
    );
  }
  /**
   * Emit a custom event with better defaults.
   */
  emit(e, r) {
    const n = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {},
      ...r
    });
    return this.dispatchEvent(n), n;
  }
}
function v(t, e, r) {
  return new Promise((n) => {
    function a(o) {
      o.target === t && (t.removeEventListener(e, a), n());
    }
    t.addEventListener(e, a, r);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = (t) => (e) => typeof e == "function" ? ((r, n) => (customElements.define(r, n), n))(t, e) : ((r, n) => {
  const { kind: a, elements: o } = n;
  return { kind: a, elements: o, finisher(i) {
    customElements.define(r, i);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(r) {
  r.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(r) {
  r.createProperty(e.key, t);
} }, we = (t, e, r) => {
  e.constructor.createProperty(r, t);
};
function O(t) {
  return (e, r) => r !== void 0 ? we(t, e, r) : ve(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oe = ({ finisher: t, descriptor: e }) => (r, n) => {
  if (n === void 0) {
    const a = r.originalKey ?? r.key, o = e != null ? { kind: "method", placement: "prototype", key: a, descriptor: e(r.key) } : { ...r, key: a };
    return t != null && (o.finisher = function(i) {
      t(i, a);
    }), o;
  }
  {
    const a = r.constructor;
    e !== void 0 && Object.defineProperty(r, n, e(n)), t?.(a, n);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function K(t, e) {
  return Oe({ descriptor: (r) => {
    const n = { get() {
      return this.renderRoot?.querySelector(t) ?? null;
    }, enumerable: !0, configurable: !0 };
    if (e) {
      const a = Symbol();
      n.get = function() {
        return this[a] === void 0 && (this[a] = this.renderRoot?.querySelector(t) ?? null), this[a];
      };
    }
    return n;
  } });
}
function z(t, e) {
  const r = {
    waitUntilFirstUpdate: !1,
    ...e
  };
  return (n, a) => {
    const { update: o } = n, i = Array.isArray(t) ? t : [t];
    n.update = function(s) {
      i.forEach((u) => {
        const c = u;
        if (s.has(c)) {
          const d = s.get(c), f = this[c];
          d !== f && (!r.waitUntilFirstUpdate || this.hasUpdated) && this[a](d, f);
        }
      }), o.call(this, s);
    };
  };
}
const Se = `:host{--icon: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/%3E%3C/svg%3E');--duration: .25s;--padding: .5em 1em;display:inline-block}:host([open]) [part=base]{grid-template-rows:min-content 1fr}:host([open]) [part=summary]:after,:host([open]) [part=icon],:host([open]) slot[name=icon]{transform:rotate(-180deg)}:host([open]) [part=body]{opacity:1}slot[name=icon]{display:inline-grid;flex:0 0 1em;place-items:center}slot[name=icon]>*{display:block;width:1em;height:1em;background-color:currentcolor;-webkit-mask-image:var(--icon);mask-image:var(--icon);-webkit-mask-size:100% 100%;mask-size:100% 100%;background-repeat:no-repeat}@media (prefers-reduced-motion: no-preference){slot[name=icon]{transition:transform var(--duration) ease}}[part=summary]{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:color-mix(in hsl,currentcolor 5%,transparent);border-radius:.5em;outline-color:currentcolor}@media (prefers-reduced-motion: no-preference){[part=summary]:after,[part=summary] [part=icon]{transition:transform var(--duration) ease}}[part=base]{display:grid;grid-template-rows:min-content 0fr;transition:all var(--duration) ease;will-change:grid-template-rows}[part=body]{min-height:0;overflow:hidden;opacity:0;transition:opacity var(--duration) ease}[part=content]{padding:var(--padding)}
`;
var ke = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, p = (t, e, r, n) => {
  for (var a = n > 1 ? void 0 : n ? Ee(e, r) : e, o = t.length - 1, i; o >= 0; o--)
    (i = t[o]) && (a = (n ? i(e, r, a) : i(a)) || a);
  return n && a && ke(e, r, a), a;
};
let l = class extends R {
  constructor() {
    super(...arguments), this.open = !1, this.disabled = !1, this.summary = "";
  }
  async handleOpenChange() {
    this.abortController?.abort(), this.abortController = new AbortController(), this.open ? (this.emit("ue-show", { cancelable: !0 }), await v(this.base, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-show")) : (this.emit("ue-hide", { cancelable: !0 }), await v(this.base, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-hide"));
  }
  async show() {
    return this.open = !0, this.header.focus(), v(this, "ue-after-show");
  }
  async hide() {
    return this.open = !1, v(this, "ue-after-hide");
  }
  _handleSummaryClick(t) {
    t.preventDefault(), this.disabled || (this.open ? this.hide() : this.show());
  }
  _handleSummaryKeyUp(t) {
    !this.disabled && ["Space", "Enter"].includes(t.code) && (t.preventDefault(), this.open ? this.hide() : this.show());
  }
  render() {
    return J`
      <div part="base">
        <header
          aria-controls="content"
          aria-expanded="${this.open}"
          part="summary"
          tabindex="0"
          role="button"
          @click="${this._handleSummaryClick}"
          @keydown="${this._handleSummaryKeyUp}"
          >
          <slot name="summary">${this.summary}</slot>
          <slot name="icon"><i></i></slot>
        </header>
        <div part="body">
          <div part="content" id="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
l.styles = Y(Se);
p([
  K("header")
], l.prototype, "header", 2);
p([
  K("[part=base]")
], l.prototype, "base", 2);
p([
  O({ type: Boolean, reflect: !0 })
], l.prototype, "open", 2);
p([
  O({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 2);
p([
  O()
], l.prototype, "summary", 2);
p([
  z("open", { waitUntilFirstUpdate: !0 })
], l.prototype, "handleOpenChange", 1);
l = p([
  L("ue-details")
], l);
var Ce = Object.defineProperty, _e = Object.getOwnPropertyDescriptor, D = (t, e, r, n) => {
  for (var a = n > 1 ? void 0 : n ? _e(e, r) : e, o = t.length - 1, i; o >= 0; o--)
    (i = t[o]) && (a = (n ? i(e, r, a) : i(a)) || a);
  return n && a && Ce(e, r, a), a;
};
let y = class extends R {
  constructor() {
    super(...arguments), this.details = [], this.multiple = !1;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.details = Array.from(this.children).filter(y.isDetails), this.addEventListener("ue-show", this.handleDetailsChange);
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
    return t instanceof l;
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
D([
  O({ type: Boolean, reflect: !0 })
], y.prototype, "multiple", 2);
D([
  z("multiple", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleMultipleChange", 1);
y = D([
  L("ue-detailsgroup")
], y);
H.seed(1337);
_.tags = _.tags.map((t) => (t.properties = t.properties?.filter((e) => e.name !== "styles" && Object.keys(e).length > 1), t.slots = t.slots?.map((e) => ({
  ...e,
  name: e.name === "" ? "default " : `${e.name} `
})), t.cssParts = t.cssParts?.map((e) => ({
  ...e,
  name: `${e.name}  `
})), t));
q(_);
const Me = {
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
      light: { ...m.dark }
    },
    docs: {
      container: (t) => {
        const e = me(), r = { ...t };
        return r.theme = e ? m.dark : m.light, k.createElement(B, r);
      }
    }
  }
};
export {
  Me as default
};
//# sourceMappingURL=preview-feec338d.mjs.map
