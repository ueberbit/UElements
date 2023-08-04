var s = !0, n = "Invariant failed";
function r(o, e) {
  if (!o) {
    if (s)
      throw new Error(n);
    var _ = typeof e == "function" ? e() : e, p = _ ? "".concat(n, ": ").concat(_) : n;
    throw new Error(p);
  }
}
export {
  r as i
};
//# sourceMappingURL=tiny-invariant-2dc8ba63.mjs.map
