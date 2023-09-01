import { c as l, a as m, P as O } from "./chunk-AY7I2SME-1f99da15.mjs";
var _ = (...r) => {
  let t = l, e = r;
  e.length === 1 && Array.isArray(e[0]) && ([e] = e), e.length !== 1 && typeof e[e.length - 1] != "string" && (t = { ...l, ...e.pop() });
  let a = e[0];
  (e.length !== 1 || typeof a == "string") && (a = {}, e.forEach((n) => {
    a[n] = n;
  }));
  let o = {};
  return Object.keys(a).forEach((n) => {
    o[n] = m(a[n], t);
  }), o;
};
const { global: f } = __STORYBOOK_MODULE_GLOBAL__, { makeDecorator: d, useEffect: g } = __STORYBOOK_MODULE_PREVIEW_API__;
var { document: i, Element: h } = f, u = /^(\S+)\s*(.*)$/, y = h != null && !h.prototype.matches, A = y ? "msMatchesSelector" : "matches", p = (r, t) => {
  if (r[A](t))
    return !0;
  let e = r.parentElement;
  return e ? p(e, t) : !1;
}, v = (r, ...t) => {
  let e = r(...t);
  return Object.entries(e).map(([a, o]) => {
    let [n, E, s] = a.match(u) || [];
    return { eventName: E, handler: (c) => {
      (!s || p(c.target, s)) && o(c);
    } };
  });
}, b = (r, ...t) => {
  let e = i && i.getElementById("storybook-root");
  g(() => {
    if (e != null) {
      let a = v(r, ...t);
      return a.forEach(({ eventName: o, handler: n }) => e.addEventListener(o, n)), () => a.forEach(({ eventName: o, handler: n }) => e.removeEventListener(o, n));
    }
  }, [e, r, t]);
}, L = d({ name: "withActions", parameterName: O, skipIfNoParametersOrOptions: !0, wrapper: (r, t, { parameters: e }) => (e?.handles && b(_, ...e.handles), r(t)) });
export {
  L as w
};
//# sourceMappingURL=decorator-8ef0d1cb.mjs.map
