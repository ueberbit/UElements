import { i as y, s as b, e as g, r as v, b as w } from "./lit-element-c68fb12d.mjs";
const k = y`
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
`, C = (t, e) => {
  if (g)
    t.adoptedStyleSheets = [
      ...t.adoptedStyleSheets,
      ...e.map(
        (r) => r instanceof CSSStyleSheet ? r : r.styleSheet
      )
    ];
  else
    for (const r of e) {
      const n = document.createElement("style"), i = global.litNonce;
      i !== void 0 && n.setAttribute("nonce", i), n.textContent = r.cssText, t.appendChild(n);
    }
};
class S extends b {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot && C(
      this.shadowRoot,
      [k]
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
function c(t, e, r) {
  return new Promise((n) => {
    function i(o) {
      o.target === t && (t.removeEventListener(e, i), n());
    }
    t.addEventListener(e, i, r);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = (t) => (e) => typeof e == "function" ? ((r, n) => (customElements.define(r, n), n))(t, e) : ((r, n) => {
  const { kind: i, elements: o } = n;
  return { kind: i, elements: o, finisher(s) {
    customElements.define(r, s);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(r) {
  r.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(r) {
  r.createProperty(e.key, t);
} }, U = (t, e, r) => {
  e.constructor.createProperty(r, t);
};
function p(t) {
  return (e, r) => r !== void 0 ? U(t, e, r) : E(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = ({ finisher: t, descriptor: e }) => (r, n) => {
  if (n === void 0) {
    const i = r.originalKey ?? r.key, o = e != null ? { kind: "method", placement: "prototype", key: i, descriptor: e(r.key) } : { ...r, key: i };
    return t != null && (o.finisher = function(s) {
      t(s, i);
    }), o;
  }
  {
    const i = r.constructor;
    e !== void 0 && Object.defineProperty(r, n, e(n)), t?.(i, n);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function z(t, e) {
  return _({ descriptor: (r) => {
    const n = { get() {
      return this.renderRoot?.querySelector(t) ?? null;
    }, enumerable: !0, configurable: !0 };
    if (e) {
      const i = Symbol();
      n.get = function() {
        return this[i] === void 0 && (this[i] = this.renderRoot?.querySelector(t) ?? null), this[i];
      };
    }
    return n;
  } });
}
function O(t, e) {
  const r = {
    waitUntilFirstUpdate: !1,
    ...e
  };
  return (n, i) => {
    const { update: o } = n, s = Array.isArray(t) ? t : [t];
    n.update = function(d) {
      s.forEach((f) => {
        const h = f;
        if (d.has(h)) {
          const u = d.get(h), m = this[h];
          u !== m && (!r.waitUntilFirstUpdate || this.hasUpdated) && this[i](u, m);
        }
      }), o.call(this, d);
    };
  };
}
const P = `:host{--icon: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/%3E%3C/svg%3E');--duration: .25s;--padding: .5em 1em;display:inline-block}:host([open]) [part=base]{grid-template-rows:min-content 1fr}:host([open]) [part=summary]:after,:host([open]) [part=icon],:host([open]) slot[name=icon]{transform:rotate(-180deg)}:host([open]) [part=body]{opacity:1}slot[name=icon]{display:inline-grid;flex:0 0 1em;place-items:center}slot[name=icon]>*{display:block;width:1em;height:1em;background-color:currentcolor;-webkit-mask-image:var(--icon);mask-image:var(--icon);-webkit-mask-size:100% 100%;mask-size:100% 100%;background-repeat:no-repeat}@media (prefers-reduced-motion: no-preference){slot[name=icon]{transition:transform var(--duration) ease}}[part=summary]{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:color-mix(in hsl,currentcolor 5%,transparent);border-radius:.5em;outline-color:currentcolor}@media (prefers-reduced-motion: no-preference){[part=summary]:after,[part=summary] [part=icon]{transition:transform var(--duration) ease}}[part=base]{display:grid;grid-template-rows:min-content 0fr;transition:all var(--duration) ease;will-change:grid-template-rows}[part=body]{min-height:0;overflow:hidden;opacity:0;transition:opacity var(--duration) ease}[part=content]{padding:var(--padding)}
`;
var $ = Object.defineProperty, D = Object.getOwnPropertyDescriptor, l = (t, e, r, n) => {
  for (var i = n > 1 ? void 0 : n ? D(e, r) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = (n ? s(e, r, i) : s(i)) || i);
  return n && i && $(e, r, i), i;
};
let a = class extends S {
  constructor() {
    super(...arguments), this.open = !1, this.disabled = !1, this.summary = "";
  }
  async handleOpenChange() {
    this.abortController?.abort(), this.abortController = new AbortController(), this.open ? (this.emit("ue-show", { cancelable: !0 }), await c(this.header, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-show")) : (this.emit("ue-hide", { cancelable: !0 }), await c(this.header, "transitionend", {
      signal: this.abortController.signal
    }), this.emit("ue-after-hide"));
  }
  async show() {
    return this.open = !0, this.header.focus(), c(this, "ue-after-show");
  }
  async hide() {
    return this.open = !1, c(this, "ue-after-hide");
  }
  _handleSummaryClick(t) {
    t.preventDefault(), this.disabled || (this.open ? this.hide() : this.show());
  }
  _handleSummaryKeyUp(t) {
    !this.disabled && ["Space", "Enter"].includes(t.code) && (t.preventDefault(), this.open ? this.hide() : this.show());
  }
  render() {
    return w`
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
a.styles = v(P);
l([
  z("header")
], a.prototype, "header", 2);
l([
  p({ type: Boolean, reflect: !0 })
], a.prototype, "open", 2);
l([
  p({ type: Boolean, reflect: !0 })
], a.prototype, "disabled", 2);
l([
  p()
], a.prototype, "summary", 2);
l([
  O("open", { waitUntilFirstUpdate: !0 })
], a.prototype, "handleOpenChange", 1);
a = l([
  x("ue-details")
], a);
export {
  S as U,
  a,
  x as e,
  p as n,
  O as w
};
//# sourceMappingURL=details-9c2b2761.mjs.map
