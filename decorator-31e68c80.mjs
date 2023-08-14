import { v as f } from "./v4-333bbb31.mjs";
import { s as y } from "./index-51e7740f.mjs";
var d = "actions", v = "storybook/actions", g = `${v}/action-event`;
const { addons: _ } = __STORYBOOK_MODULE_PREVIEW_API__;
var l = { depth: 10, clearOnStoryChange: !0, limit: 50 }, m = (e, r) => {
  let t = Object.getPrototypeOf(e);
  return !t || r(t) ? t : m(t, r);
}, b = (e) => !!(typeof e == "object" && e && m(e, (r) => /^Synthetic(?:Base)?Event$/.test(r.constructor.name)) && typeof e.persist == "function"), A = (e) => {
  if (b(e)) {
    let r = Object.create(e.constructor.prototype, Object.getOwnPropertyDescriptors(e));
    r.persist();
    let t = Object.getOwnPropertyDescriptor(r, "view"), n = t?.value;
    return typeof n == "object" && n?.constructor.name === "Window" && Object.defineProperty(r, "view", { ...t, value: Object.create(n.constructor.prototype) }), r;
  }
  return e;
};
function j(e, r = {}) {
  let t = { ...l, ...r }, n = function(...a) {
    let o = _.getChannel(), s = f(), i = 5, c = a.map(A), u = a.length > 1 ? c : c[0], E = { id: s, count: 0, data: { name: e, args: u }, options: { ...t, maxDepth: i + (t.depth || 3), allowFunction: t.allowFunction || !1 } };
    o.emit(g, E);
  };
  return n.isAction = !0, n;
}
var w = (...e) => {
  let r = l, t = e;
  t.length === 1 && Array.isArray(t[0]) && ([t] = t), t.length !== 1 && typeof t[t.length - 1] != "string" && (r = { ...l, ...t.pop() });
  let n = t[0];
  (t.length !== 1 || typeof n == "string") && (n = {}, t.forEach((o) => {
    n[o] = o;
  }));
  let a = {};
  return Object.keys(n).forEach((o) => {
    a[o] = j(n[o], r);
  }), a;
};
const { makeDecorator: D, useEffect: P } = __STORYBOOK_MODULE_PREVIEW_API__;
var { document: p, Element: h } = y, I = /^(\S+)\s*(.*)$/, S = h != null && !h.prototype.matches, M = S ? "msMatchesSelector" : "matches", O = (e, r) => {
  if (e[M](r))
    return !0;
  let t = e.parentElement;
  return t ? O(t, r) : !1;
}, R = (e, ...r) => {
  let t = e(...r);
  return Object.entries(t).map(([n, a]) => {
    let [o, s, i] = n.match(I) || [];
    return { eventName: s, handler: (c) => {
      (!i || O(c.target, i)) && a(c);
    } };
  });
}, N = (e, ...r) => {
  let t = p && p.getElementById("storybook-root");
  P(() => {
    if (t != null) {
      let n = R(e, ...r);
      return n.forEach(({ eventName: a, handler: o }) => t.addEventListener(a, o)), () => n.forEach(({ eventName: a, handler: o }) => t.removeEventListener(a, o));
    }
  }, [t, e, r]);
}, L = D({ name: "withActions", parameterName: d, skipIfNoParametersOrOptions: !0, wrapper: (e, r, { parameters: t }) => (t?.handles && N(w, ...t.handles), e(r)) });
export {
  L as w
};
//# sourceMappingURL=decorator-31e68c80.mjs.map
