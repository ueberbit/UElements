import { v as d } from "./v4-333bbb31.mjs";
var f = "storybook/actions", O = `${f}/action-event`;
const { addons: v } = __STORYBOOK_MODULE_PREVIEW_API__;
var b = { depth: 10, clearOnStoryChange: !0, limit: 50 }, p = (t, e) => {
  let r = Object.getPrototypeOf(t);
  return !r || e(r) ? r : p(r, e);
}, h = (t) => !!(typeof t == "object" && t && p(t, (e) => /^Synthetic(?:Base)?Event$/.test(e.constructor.name)) && typeof t.persist == "function"), A = (t) => {
  if (h(t)) {
    let e = Object.create(t.constructor.prototype, Object.getOwnPropertyDescriptors(t));
    e.persist();
    let r = Object.getOwnPropertyDescriptor(e, "view"), o = r?.value;
    return typeof o == "object" && o?.constructor.name === "Window" && Object.defineProperty(e, "view", { ...r, value: Object.create(o.constructor.prototype) }), e;
  }
  return t;
};
function l(t, e = {}) {
  let r = { ...b, ...e }, o = function(...i) {
    let n = v.getChannel(), s = d(), c = 5, a = i.map(A), y = i.length > 1 ? a : a[0], u = { id: s, count: 0, data: { name: t, args: y }, options: { ...r, maxDepth: c + (r.depth || 3), allowFunction: r.allowFunction || !1 } };
    n.emit(O, u);
  };
  return o.isAction = !0, o;
}
var g = (t, e) => typeof e[t] > "u" && !(t in e), m = (t) => {
  let { initialArgs: e, argTypes: r, parameters: { actions: o } } = t;
  if (!o || o.disable || !o.argTypesRegex || !r)
    return {};
  let i = new RegExp(o.argTypesRegex);
  return Object.entries(r).filter(([n]) => !!i.test(n)).reduce((n, [s, c]) => (g(s, e) && (n[s] = l(s)), n), {});
}, D = (t) => {
  let { initialArgs: e, argTypes: r, parameters: { actions: o } } = t;
  return o?.disable || !r ? {} : Object.entries(r).filter(([i, n]) => !!n.action).reduce((i, [n, s]) => (g(n, e) && (i[n] = l(typeof s.action == "string" ? s.action : n)), i), {});
}, w = [D, m];
export {
  w as argsEnhancers
};
//# sourceMappingURL=preview-0822076e.mjs.map
