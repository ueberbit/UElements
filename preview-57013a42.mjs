import { a as g } from "./chunk-AY7I2SME-1f99da15.mjs";
var o = (r, t) => typeof t[r] > "u" && !(r in t), p = (r) => {
  let { initialArgs: t, argTypes: a, parameters: { actions: i } } = r;
  if (!i || i.disable || !i.argTypesRegex || !a)
    return {};
  let n = new RegExp(i.argTypesRegex);
  return Object.entries(a).filter(([e]) => !!n.test(e)).reduce((e, [s, l]) => (o(s, t) && (e[s] = g(s)), e), {});
}, c = (r) => {
  let { initialArgs: t, argTypes: a, parameters: { actions: i } } = r;
  return i?.disable || !a ? {} : Object.entries(a).filter(([n, e]) => !!e.action).reduce((n, [e, s]) => (o(e, t) && (n[e] = g(typeof s.action == "string" ? s.action : e)), n), {});
}, f = [c, p];
export {
  f as argsEnhancers
};
//# sourceMappingURL=preview-57013a42.mjs.map
