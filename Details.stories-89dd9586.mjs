import { i as y, s as h, e as f, r as v, b as c } from "./lit-element-c68fb12d.mjs";
import { f as u } from "./index-48d82811.mjs";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const g = (t) => (e) => typeof e == "function" ? ((r, o) => (customElements.define(r, o), o))(t, e) : ((r, o) => {
  const { kind: a, elements: s } = o;
  return { kind: a, elements: s, finisher(i) {
    customElements.define(r, i);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(r) {
  r.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(r) {
  r.createProperty(e.key, t);
} }, w = (t, e, r) => {
  e.constructor.createProperty(r, t);
};
function m(t) {
  return (e, r) => r !== void 0 ? w(t, e, r) : b(t, e);
}
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
`, S = (t, e) => {
  if (f)
    t.adoptedStyleSheets = [
      ...t.adoptedStyleSheets,
      ...e.map(
        (r) => r instanceof CSSStyleSheet ? r : r.styleSheet
      )
    ];
  else
    for (const r of e) {
      const o = document.createElement("style"), a = global.litNonce;
      a !== void 0 && o.setAttribute("nonce", a), o.textContent = r.cssText, t.appendChild(o);
    }
};
class x extends h {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback(), this.shadowRoot && S(
      this.shadowRoot,
      [k]
    );
  }
}
const $ = `:host{--icon: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/%3E%3C/svg%3E');--duration: .25s;--padding: .5em 1em;display:inline-block}:host([open]) [part=base]{grid-template-rows:min-content 1fr}:host([open]) [part=summary]:after,:host([open]) [part=icon]{transform:rotate(-180deg)}:host([open]) [part=body]{opacity:1}[part=summary]{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:color-mix(in hsl,currentcolor 5%,transparent);border-radius:.5em;outline-color:currentcolor}[part=summary]:after{flex:0 0 1em;height:1em;content:"";background-color:currentcolor;-webkit-mask-image:var(--icon);mask-image:var(--icon);-webkit-mask-size:100% 100%;mask-size:100% 100%;background-repeat:no-repeat}@media (prefers-reduced-motion: no-preference){[part=summary]:after,[part=summary] [part=icon]{transition:transform var(--duration) ease}}[part=base]{display:grid;grid-template-rows:min-content 0fr;transition:all var(--duration) ease;will-change:grid-template-rows}[part=body]{min-height:0;overflow:hidden;opacity:0;transition:opacity var(--duration) ease}[part=content]{padding:var(--padding)}
`;
var C = Object.defineProperty, E = Object.getOwnPropertyDescriptor, p = (t, e, r, o) => {
  for (var a = o > 1 ? void 0 : o ? E(e, r) : e, s = t.length - 1, i; s >= 0; s--)
    (i = t[s]) && (a = (o ? i(e, r, a) : i(a)) || a);
  return o && a && C(e, r, a), a;
};
let n = class extends x {
  constructor() {
    super(...arguments), this.open = !1, this.disabled = !1, this.summary = "";
  }
  render() {
    return c`
      <div part="base">
        <header
          aria-controls="content"
          aria-expanded="${this.open}"
          part="summary"
          tabindex="0"
          role="button"
          @click="${() => this.open = !this.open}"
          @keydown="${(t) => ["Space", "Enter"].includes(t.code) && (this.open = !this.open)}"
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
n.styles = v($);
p([
  m({ type: Boolean, reflect: !0 })
], n.prototype, "open", 2);
p([
  m({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 2);
p([
  m()
], n.prototype, "summary", 2);
n = p([
  g("ue-details")
], n);
const P = {
  title: "Custom Elements/Details",
  component: "ue-details"
}, l = {
  render: ({
    open: t,
    summary: e = "Summary"
  }) => c`
<ue-details ?open="${t}" summary="${e}">
  <div>${u.lorem.paragraph(2)}</div>
</ue-details>
  `
}, d = {
  render: ({
    open: t
  }) => c`
<ue-details ?open="${t}">
  <div slot="summary">Summary with HTML</div>
  <div>${u.lorem.paragraph(10)}</div>
</ue-details>
  `
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
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
      ...l.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
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
      ...d.parameters?.docs?.source
    }
  }
};
const D = ["Default", "HTMLSummary"];
export {
  l as Default,
  d as HTMLSummary,
  D as __namedExportsOrder,
  P as default
};
//# sourceMappingURL=Details.stories-89dd9586.mjs.map
