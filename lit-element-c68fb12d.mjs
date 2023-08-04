/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U = globalThis, k = U.ShadowRoot && (U.ShadyCSS === void 0 || U.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, j = Symbol(), z = /* @__PURE__ */ new WeakMap();
let F = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== j)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (k && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = z.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && z.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const et = (n) => new F(typeof n == "string" ? n : n + "", void 0, j), gt = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, r) => s + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[r + 1], n[0]);
  return new F(e, n, j);
}, st = (n, t) => {
  if (k)
    n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (const e of t) {
      const s = document.createElement("style"), i = U.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
    }
}, B = k ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return et(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis, D = L.trustedTypes, it = D ? D.emptyScript : "", nt = L.reactiveElementPolyfillSupport, R = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? it : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, G = (n, t) => t !== n && (t == t || n == n), N = { attribute: !0, type: String, converter: R, reflect: !1, hasChanged: G }, M = "finalized";
let f = class extends HTMLElement {
  static addInitializer(t) {
    this.finalize(), (this.i ??= []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    for (const [e, s] of this.elementProperties) {
      const i = this._$El(e, s);
      i !== void 0 && (this._$Eh.set(i, e), t.push(i));
    }
    return t;
  }
  static createProperty(t, e = N) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(i) {
      const r = this[t];
      this[e] = i, this.requestUpdate(t, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || N;
  }
  static finalize() {
    if (this.hasOwnProperty(M))
      return !1;
    this[M] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.i !== void 0 && (this.i = [...t.i]), this.elementProperties = new Map(t.elementProperties), this._$Eh = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(B(i));
    } else
      t !== void 0 && e.push(B(t));
    return e;
  }
  static _$El(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this.v();
  }
  v() {
    this._$E_ = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), this.constructor.i?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$ES ??= []).push(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$ES?.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    const t = this.constructor.elementProperties;
    for (const e of t.keys())
      this.hasOwnProperty(e) && (this._$Ep.set(e, this[e]), delete this[e]);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return st(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$ES?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$ES?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = N) {
    const i = this.constructor._$El(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : R).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : R;
      this._$Em = i, this[i] = o.fromAttribute(e, r.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    let i = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || G)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ep &&= this._$Ep.forEach((s, i) => this[i] = s);
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$ES?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$Ek();
    } catch (s) {
      throw t = !1, this._$Ek(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$ES?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC &&= this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
f[M] = !0, f.elementProperties = /* @__PURE__ */ new Map(), f.elementStyles = [], f.shadowRootOptions = { mode: "open" }, nt?.({ ReactiveElement: f }), (L.reactiveElementVersions ??= []).push("2.0.0-pre.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = globalThis, H = I.trustedTypes, V = H ? H.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Q = "$lit$", u = `lit$${(Math.random() + "").slice(9)}$`, X = "?" + u, rt = `<${X}>`, m = document, S = () => m.createComment(""), b = (n) => n === null || typeof n != "object" && typeof n != "function", Y = Array.isArray, ot = (n) => Y(n) || typeof n?.[Symbol.iterator] == "function", O = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, W = /-->/g, q = />/g, A = RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Z = /'/g, J = /"/g, tt = /^(?:script|style|textarea|title)$/i, ht = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), yt = ht(1), y = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), K = /* @__PURE__ */ new WeakMap(), g = m.createTreeWalker(m, 129), lt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : "", o = E;
  for (let h = 0; h < e; h++) {
    const a = n[h];
    let x, l, d = -1, p = 0;
    for (; p < a.length && (o.lastIndex = p, l = o.exec(a), l !== null); )
      p = o.lastIndex, o === E ? l[1] === "!--" ? o = W : l[1] !== void 0 ? o = q : l[2] !== void 0 ? (tt.test(l[2]) && (i = RegExp("</" + l[2], "g")), o = A) : l[3] !== void 0 && (o = A) : o === A ? l[0] === ">" ? (o = i ?? E, d = -1) : l[1] === void 0 ? d = -2 : (d = o.lastIndex - l[2].length, x = l[1], o = l[3] === void 0 ? A : l[3] === '"' ? J : Z) : o === J || o === Z ? o = A : o === W || o === q ? o = E : (o = A, i = void 0);
    const _ = o === A && n[h + 1].startsWith("/>") ? " " : "";
    r += o === E ? a + rt : d >= 0 ? (s.push(x), a.slice(0, d) + Q + a.slice(d) + u + _) : a + u + (d === -2 ? h : _);
  }
  const $ = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [V !== void 0 ? V.createHTML($) : $, s];
};
class C {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const $ = t.length - 1, h = this.parts, [a, x] = lt(t, e);
    if (this.el = C.createElement(a, s), g.currentNode = this.el.content, e === 2) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = g.nextNode()) !== null && h.length < $; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const l of i.getAttributeNames())
            if (l.endsWith(Q)) {
              const d = x[o++], p = i.getAttribute(l).split(u), _ = /([.?@])?(.*)/.exec(d);
              h.push({ type: 1, index: r, name: _[2], strings: p, ctor: _[1] === "." ? ct : _[1] === "?" ? dt : _[1] === "@" ? pt : T }), i.removeAttribute(l);
            } else
              l.startsWith(u) && (h.push({ type: 6, index: r }), i.removeAttribute(l));
        if (tt.test(i.tagName)) {
          const l = i.textContent.split(u), d = l.length - 1;
          if (d > 0) {
            i.textContent = H ? H.emptyScript : "";
            for (let p = 0; p < d; p++)
              i.append(l[p], S()), g.nextNode(), h.push({ type: 2, index: ++r });
            i.append(l[d], S());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === X)
          h.push({ type: 2, index: r });
        else {
          let l = -1;
          for (; (l = i.data.indexOf(u, l + 1)) !== -1; )
            h.push({ type: 7, index: r }), l += u.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = m.createElement("template");
    return s.innerHTML = t, s;
  }
}
function v(n, t, e = n, s) {
  if (t === y)
    return t;
  let i = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = b(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== r && (i?._$AO?.(!1), r === void 0 ? i = void 0 : (i = new r(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i), i !== void 0 && (t = v(n, i._$AS(n, t.values), i, s)), t;
}
class at {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? m).importNode(e, !0);
    g.currentNode = i;
    let r = g.nextNode(), o = 0, $ = 0, h = s[0];
    for (; h !== void 0; ) {
      if (o === h.index) {
        let a;
        h.type === 2 ? a = new w(r, r.nextSibling, this, t) : h.type === 1 ? a = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (a = new $t(r, this, t)), this._$AV.push(a), h = s[++$];
      }
      o !== h?.index && (r = g.nextNode(), o++);
    }
    return i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class w {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = v(this, t, e), b(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : ot(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    if (this._$AH !== c && b(this._$AH)) {
      const e = this._$AA.nextSibling;
      e.data = t;
    } else
      this.$(m.createTextNode(t));
    this._$AH = t;
  }
  g(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = C.createElement(s.h, this.options)), s);
    if (this._$AH?._$AD === i)
      this._$AH.p(e);
    else {
      const r = new at(i, this), o = r.u(this.options);
      r.p(e), this.$(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = K.get(t.strings);
    return e === void 0 && K.set(t.strings, e = new C(t)), e;
  }
  T(t) {
    Y(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t)
      i === e.length ? e.push(s = new w(this.k(S()), this.k(S()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class T {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = c;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = v(this, t, e, 0), o = !b(t) || t !== this._$AH && t !== y, o && (this._$AH = t);
    else {
      const $ = t;
      let h, a;
      for (t = r[0], h = 0; h < r.length - 1; h++)
        a = v(this, $[s + h], e, h), a === y && (a = this._$AH[h]), o ||= !b(a) || a !== this._$AH[h], a === c ? t = c : t !== c && (t += (a ?? "") + r[h + 1]), this._$AH[h] = a;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ct extends T {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class dt extends T {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class pt extends T {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = v(this, t, e, 0) ?? c) === y)
      return;
    const s = this._$AH, i = t === c && s !== c || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== c && (s === c || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class $t {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    v(this, t);
  }
}
const ut = I.litHtmlPolyfillSupport;
ut?.(C, w), (I.litHtmlVersions ??= []).push("3.0.0-pre.0");
const _t = (n, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = i = new w(t.insertBefore(S(), r), r, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class P extends f {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = _t(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return y;
  }
}
P.finalized = !0, P._$litElement$ = !0, globalThis.litElementHydrateSupport?.({ LitElement: P });
const At = globalThis.litElementPolyfillSupport;
At?.({ LitElement: P });
(globalThis.litElementVersions ??= []).push("4.0.0-pre.0");
export {
  yt as b,
  k as e,
  gt as i,
  _t as j,
  et as r,
  P as s
};
//# sourceMappingURL=lit-element-c68fb12d.mjs.map
