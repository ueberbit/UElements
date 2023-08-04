var v = "storybook/actions", h = `${v}/action-event`;
let s;
const D = new Uint8Array(16);
function w() {
  if (!s && (s = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !s))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return s(D);
}
const o = [];
for (let t = 0; t < 256; ++t)
  o.push((t + 256).toString(16).slice(1));
function b(t, e = 0) {
  return (o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]).toLowerCase();
}
const x = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), d = {
  randomUUID: x
};
function A(t, e, n) {
  if (d.randomUUID && !e && !t)
    return d.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || w)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      e[n + i] = r[i];
    return e;
  }
  return b(r);
}
const { addons: R } = __STORYBOOK_MODULE_PREVIEW_API__;
var U = { depth: 10, clearOnStoryChange: !0, limit: 50 }, l = (t, e) => {
  let n = Object.getPrototypeOf(t);
  return !n || e(n) ? n : l(n, e);
}, j = (t) => !!(typeof t == "object" && t && l(t, (e) => /^Synthetic(?:Base)?Event$/.test(e.constructor.name)) && typeof t.persist == "function"), E = (t) => {
  if (j(t)) {
    let e = Object.create(t.constructor.prototype, Object.getOwnPropertyDescriptors(t));
    e.persist();
    let n = Object.getOwnPropertyDescriptor(e, "view"), r = n?.value;
    return typeof r == "object" && r?.constructor.name === "Window" && Object.defineProperty(e, "view", { ...n, value: Object.create(r.constructor.prototype) }), e;
  }
  return t;
};
function y(t, e = {}) {
  let n = { ...U, ...e }, r = function(...i) {
    let c = R.getChannel(), p = A(), a = 5, u = i.map(E), m = i.length > 1 ? u : u[0], O = { id: p, count: 0, data: { name: t, args: m }, options: { ...n, maxDepth: a + (n.depth || 3), allowFunction: n.allowFunction || !1 } };
    c.emit(h, O);
  };
  return r.isAction = !0, r;
}
var g = (t, e) => typeof e[t] > "u" && !(t in e), I = (t) => {
  let { initialArgs: e, argTypes: n, parameters: { actions: r } } = t;
  if (!r || r.disable || !r.argTypesRegex || !n)
    return {};
  let i = new RegExp(r.argTypesRegex);
  return Object.entries(n).filter(([c]) => !!i.test(c)).reduce((c, [p, a]) => (g(p, e) && (c[p] = y(p)), c), {});
}, T = (t) => {
  let { initialArgs: e, argTypes: n, parameters: { actions: r } } = t;
  return r?.disable || !n ? {} : Object.entries(n).filter(([i, c]) => !!c.action).reduce((i, [c, p]) => (g(c, e) && (i[c] = y(typeof p.action == "string" ? p.action : c)), i), {});
}, _ = [T, I];
export {
  _ as argsEnhancers
};
//# sourceMappingURL=preview-b6b15887.mjs.map
