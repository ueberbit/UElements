var s = !0, n = "Invariant failed";
function m(o, e) {
  if (!o) {
    if (s)
      throw new Error(n);
    var _ = typeof e == "function" ? e() : e, p = _ ? "".concat(n, ": ").concat(_) : n;
    throw new Error(p);
  }
}
export {
  m as i
};
//# sourceMappingURL=tiny-invariant-9065c551.mjs.map
