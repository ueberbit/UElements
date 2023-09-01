var A = "actions", g = "storybook/actions", D = `${g}/action-event`;
let c;
const O = new Uint8Array(16);
function h() {
  if (!c && (c = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !c))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return c(O);
}
const e = [];
for (let t = 0; t < 256; ++t)
  e.push((t + 256).toString(16).slice(1));
function v(t, n = 0) {
  return (e[t[n + 0]] + e[t[n + 1]] + e[t[n + 2]] + e[t[n + 3]] + "-" + e[t[n + 4]] + e[t[n + 5]] + "-" + e[t[n + 6]] + e[t[n + 7]] + "-" + e[t[n + 8]] + e[t[n + 9]] + "-" + e[t[n + 10]] + e[t[n + 11]] + e[t[n + 12]] + e[t[n + 13]] + e[t[n + 14]] + e[t[n + 15]]).toLowerCase();
}
const w = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), a = {
  randomUUID: w
};
function U(t, n, o) {
  if (a.randomUUID && !n && !t)
    return a.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || h)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    o = o || 0;
    for (let i = 0; i < 16; ++i)
      n[o + i] = r[i];
    return n;
  }
  return v(r);
}
const { addons: E } = __STORYBOOK_MODULE_PREVIEW_API__;
var _ = { depth: 10, clearOnStoryChange: !0, limit: 50 }, u = (t, n) => {
  let o = Object.getPrototypeOf(t);
  return !o || n(o) ? o : u(o, n);
}, b = (t) => !!(typeof t == "object" && t && u(t, (n) => /^Synthetic(?:Base)?Event$/.test(n.constructor.name)) && typeof t.persist == "function"), j = (t) => {
  if (b(t)) {
    let n = Object.create(t.constructor.prototype, Object.getOwnPropertyDescriptors(t));
    n.persist();
    let o = Object.getOwnPropertyDescriptor(n, "view"), r = o?.value;
    return typeof r == "object" && r?.constructor.name === "Window" && Object.defineProperty(n, "view", { ...o, value: Object.create(r.constructor.prototype) }), n;
  }
  return t;
};
function I(t, n = {}) {
  let o = { ..._, ...n }, r = function(...i) {
    let d = E.getChannel(), s = U(), l = 5, p = i.map(j), y = i.length > 1 ? p : p[0], m = { id: s, count: 0, data: { name: t, args: y }, options: { ...o, maxDepth: l + (o.depth || 3), allowFunction: o.allowFunction || !1 } };
    d.emit(D, m);
  };
  return r.isAction = !0, r;
}
export {
  A as P,
  I as a,
  _ as c
};
//# sourceMappingURL=chunk-AY7I2SME-1f99da15.mjs.map
