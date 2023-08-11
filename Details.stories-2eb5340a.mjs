import { i as _, s as C, e as $, r as D, b as v } from "./lit-element-c68fb12d.mjs";
import { f as O } from "./index-48d82811.mjs";
import { v as P } from "./v4-333bbb31.mjs";
import { s as x } from "./index-51e7740f.mjs";
function h(t, r, e) {
  return new Promise((n) => {
    function o(a) {
      a.target === t && (t.removeEventListener(r, o), n());
    }
    t.addEventListener(r, o, e);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = (t) => (r) => typeof r == "function" ? ((e, n) => (customElements.define(e, n), n))(t, r) : ((e, n) => {
  const { kind: o, elements: a } = n;
  return { kind: o, elements: a, finisher(s) {
    customElements.define(e, s);
  } };
})(t, r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = (t, r) => r.kind === "method" && r.descriptor && !("value" in r.descriptor) ? { ...r, finisher(e) {
  e.createProperty(r.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: r.key, initializer() {
  typeof r.initializer == "function" && (this[r.key] = r.initializer.call(this));
}, finisher(e) {
  e.createProperty(r.key, t);
} }, U = (t, r, e) => {
  r.constructor.createProperty(e, t);
};
function g(t) {
  return (r, e) => e !== void 0 ? U(t, r, e) : j(t, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = ({ finisher: t, descriptor: r }) => (e, n) => {
  if (n === void 0) {
    const o = e.originalKey ?? e.key, a = r != null ? { kind: "method", placement: "prototype", key: o, descriptor: r(e.key) } : { ...e, key: o };
    return t != null && (a.finisher = function(s) {
      t(s, o);
    }), a;
  }
  {
    const o = e.constructor;
    r !== void 0 && Object.defineProperty(e, n, r(n)), t?.(o, n);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(t, r) {
  return L({ descriptor: (e) => {
    const n = { get() {
      return this.renderRoot?.querySelector(t) ?? null;
    }, enumerable: !0, configurable: !0 };
    if (r) {
      const o = Symbol();
      n.get = function() {
        return this[o] === void 0 && (this[o] = this.renderRoot?.querySelector(t) ?? null), this[o];
      };
    }
    return n;
  } });
}
function M(t, r) {
  const e = {
    waitUntilFirstUpdate: !1,
    ...r
  };
  return (n, o) => {
    const { update: a } = n, s = Array.isArray(t) ? t : [t];
    n.update = function(i) {
      s.forEach((c) => {
        const p = c;
        if (i.has(p)) {
          const u = i.get(p), b = this[p];
          u !== b && (!e.waitUntilFirstUpdate || this.hasUpdated) && this[o](u, b);
        }
      }), a.call(this, i);
    };
  };
}
const I = _`
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
`, T = (t, r) => {
  if ($)
    t.adoptedStyleSheets = [
      ...t.adoptedStyleSheets,
      ...r.map(
        (e) => e instanceof CSSStyleSheet ? e : e.styleSheet
      )
    ];
  else
    for (const e of r) {
      const n = document.createElement("style"), o = global.litNonce;
      o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, t.appendChild(n);
    }
};
class R extends C {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot && T(
      this.shadowRoot,
      [I]
    );
  }
  /**
   * Emit a custom event with better defaults.
   */
  emit(r, e) {
    const n = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {},
      ...e
    });
    return this.dispatchEvent(n), n;
  }
}
const B = `:host{--icon: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/%3E%3C/svg%3E');--duration: .25s;--padding: .5em 1em;display:inline-block}:host([open]) [part=base]{grid-template-rows:min-content 1fr}:host([open]) [part=summary]:after,:host([open]) [part=icon]{transform:rotate(-180deg)}:host([open]) [part=body]{opacity:1}[part=summary]{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:color-mix(in hsl,currentcolor 5%,transparent);border-radius:.5em;outline-color:currentcolor}[part=summary]:after{flex:0 0 1em;height:1em;content:"";background-color:currentcolor;-webkit-mask-image:var(--icon);mask-image:var(--icon);-webkit-mask-size:100% 100%;mask-size:100% 100%;background-repeat:no-repeat}@media (prefers-reduced-motion: no-preference){[part=summary]:after,[part=summary] [part=icon]{transition:transform var(--duration) ease}}[part=base]{display:grid;grid-template-rows:min-content 0fr;transition:all var(--duration) ease;will-change:grid-template-rows}[part=body]{min-height:0;overflow:hidden;opacity:0;transition:opacity var(--duration) ease}[part=content]{padding:var(--padding)}
`;
var K = Object.defineProperty, H = Object.getOwnPropertyDescriptor, d = (t, r, e, n) => {
  for (var o = n > 1 ? void 0 : n ? H(r, e) : r, a = t.length - 1, s; a >= 0; a--)
    (s = t[a]) && (o = (n ? s(r, e, o) : s(o)) || o);
  return n && o && K(r, e, o), o;
};
let l = class extends R {
  constructor() {
    super(...arguments), this.open = !1, this.disabled = !1, this.summary = "";
  }
  async handleOpenChange() {
    this.abortController?.abort(), this.abortController = new AbortController(), this.open ? (this.emit("ue-show", { cancelable: !0 }), await h(this.header, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-show")) : (this.emit("ue-hide", { cancelable: !0 }), await h(this.header, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-hide"));
  }
  async show() {
    return this.open = !0, this.header.focus(), h(this, "ue-after-show");
  }
  async hide() {
    return this.open = !1, h(this, "ue-after-hide");
  }
  _handleSummaryClick(t) {
    t.preventDefault(), this.disabled || (this.open ? this.hide() : this.show());
  }
  _handleSummaryKeyUp(t) {
    !this.disabled && ["Space", "Enter"].includes(t.code) && (t.preventDefault(), this.open ? this.hide() : this.show());
  }
  render() {
    return v`
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
l.styles = D(B);
d([
  z("header")
], l.prototype, "header", 2);
d([
  g({ type: Boolean, reflect: !0 })
], l.prototype, "open", 2);
d([
  g({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 2);
d([
  g()
], l.prototype, "summary", 2);
d([
  M("open", { waitUntilFirstUpdate: !0 })
], l.prototype, "handleOpenChange", 1);
l = d([
  A("ue-details")
], l);
var F = "actions", V = "storybook/actions", N = `${V}/action-event`;
const { addons: W } = __STORYBOOK_MODULE_PREVIEW_API__;
var y = { depth: 10, clearOnStoryChange: !0, limit: 50 }, S = (t, r) => {
  let e = Object.getPrototypeOf(t);
  return !e || r(e) ? e : S(e, r);
}, Y = (t) => !!(typeof t == "object" && t && S(t, (r) => /^Synthetic(?:Base)?Event$/.test(r.constructor.name)) && typeof t.persist == "function"), q = (t) => {
  if (Y(t)) {
    let r = Object.create(t.constructor.prototype, Object.getOwnPropertyDescriptors(t));
    r.persist();
    let e = Object.getOwnPropertyDescriptor(r, "view"), n = e?.value;
    return typeof n == "object" && n?.constructor.name === "Window" && Object.defineProperty(r, "view", { ...e, value: Object.create(n.constructor.prototype) }), r;
  }
  return t;
};
function Z(t, r = {}) {
  let e = { ...y, ...r }, n = function(...o) {
    let a = W.getChannel(), s = P(), i = 5, c = o.map(q), p = o.length > 1 ? c : c[0], u = { id: s, count: 0, data: { name: t, args: p }, options: { ...e, maxDepth: i + (e.depth || 3), allowFunction: e.allowFunction || !1 } };
    a.emit(N, u);
  };
  return n.isAction = !0, n;
}
var G = (...t) => {
  let r = y, e = t;
  e.length === 1 && Array.isArray(e[0]) && ([e] = e), e.length !== 1 && typeof e[e.length - 1] != "string" && (r = { ...y, ...e.pop() });
  let n = e[0];
  (e.length !== 1 || typeof n == "string") && (n = {}, e.forEach((a) => {
    n[a] = a;
  }));
  let o = {};
  return Object.keys(n).forEach((a) => {
    o[a] = Z(n[a], r);
  }), o;
};
const { makeDecorator: J, useEffect: Q } = __STORYBOOK_MODULE_PREVIEW_API__;
var { document: w, Element: E } = x, X = /^(\S+)\s*(.*)$/, ee = E != null && !E.prototype.matches, te = ee ? "msMatchesSelector" : "matches", k = (t, r) => {
  if (t[te](r))
    return !0;
  let e = t.parentElement;
  return e ? k(e, r) : !1;
}, re = (t, ...r) => {
  let e = t(...r);
  return Object.entries(e).map(([n, o]) => {
    let [a, s, i] = n.match(X) || [];
    return { eventName: s, handler: (c) => {
      (!i || k(c.target, i)) && o(c);
    } };
  });
}, ne = (t, ...r) => {
  let e = w && w.getElementById("storybook-root");
  Q(() => {
    if (e != null) {
      let n = re(t, ...r);
      return n.forEach(({ eventName: o, handler: a }) => e.addEventListener(o, a)), () => n.forEach(({ eventName: o, handler: a }) => e.removeEventListener(o, a));
    }
  }, [e, t, r]);
}, oe = J({ name: "withActions", parameterName: F, skipIfNoParametersOrOptions: !0, wrapper: (t, r, { parameters: e }) => (e?.handles && ne(G, ...e.handles), t(r)) });
const ce = {
  title: "Custom Elements/Details",
  component: "ue-details",
  parameters: {
    actions: {
      handles: ["ue-show", "ue-hide", "ue-after-show", "ue-after-hide"]
    }
  },
  // @ts-expect-error actions
  decorators: [oe]
}, m = {
  render: ({
    open: t,
    summary: r = "Summary"
  }) => v`
<ue-details ?open="${t}" summary="${r}">
  <div>${O.lorem.paragraph(2)}</div>
</ue-details>
  `
}, f = {
  render: ({
    open: t
  }) => v`
<ue-details ?open="${t}">
  <div slot="summary">Summary with HTML</div>
  <div>${O.lorem.paragraph(10)}</div>
</ue-details>
  `
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    open,
    summary = 'Summary'
  }) => html\`
<ue-details ?open="\${open}" summary="\${summary}">
  <div>\${faker.lorem.paragraph(2)}</div>
</ue-details>
  \`
}`,
      ...m.parameters?.docs?.source
    }
  }
};
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    open
  }) => html\`
<ue-details ?open="\${open}">
  <div slot="summary">Summary with HTML</div>
  <div>\${faker.lorem.paragraph(10)}</div>
</ue-details>
  \`
}`,
      ...f.parameters?.docs?.source
    }
  }
};
const de = ["Default", "HTMLSummary"];
export {
  m as Default,
  f as HTMLSummary,
  de as __namedExportsOrder,
  ce as default
};
//# sourceMappingURL=Details.stories-2eb5340a.mjs.map
