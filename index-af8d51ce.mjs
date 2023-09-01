import { b as r } from "./index-6d191841.mjs";
const o = r.createContext({});
function a(e) {
  const t = r.useContext(o);
  return r.useMemo(() => typeof e == "function" ? e(t) : { ...t, ...e }, [t, e]);
}
const f = {};
function s({ components: e, children: t, disableParentContext: u }) {
  let n;
  return u ? n = typeof e == "function" ? e({}) : e || f : n = a(e), r.createElement(
    o.Provider,
    { value: n },
    t
  );
}
export {
  o as M,
  s as a,
  a as u
};
//# sourceMappingURL=index-af8d51ce.mjs.map
