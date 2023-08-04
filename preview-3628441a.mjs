import { s as h } from "./index-51e7740f.mjs";
import { d as E } from "./index-398c73a4.mjs";
const { logger: M } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var p = "backgrounds", { document: l, window: x } = h, B = () => x.matchMedia("(prefers-reduced-motion: reduce)").matches, S = (r, e = [], n) => {
  if (r === "transparent")
    return "transparent";
  if (e.find((a) => a.value === r))
    return r;
  let t = e.find((a) => a.name === n);
  if (t)
    return t.value;
  if (n) {
    let a = e.map((i) => i.name).join(", ");
    M.warn(E`
        Backgrounds Addon: could not find the default color "${n}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `);
  }
  return "transparent";
}, y = (r) => {
  (Array.isArray(r) ? r : [r]).forEach(_);
}, _ = (r) => {
  let e = l.getElementById(r);
  e && e.parentElement.removeChild(e);
}, w = (r, e) => {
  let n = l.getElementById(r);
  if (n)
    n.innerHTML !== e && (n.innerHTML = e);
  else {
    let t = l.createElement("style");
    t.setAttribute("id", r), t.innerHTML = e, l.head.appendChild(t);
  }
}, A = (r, e, n) => {
  let t = l.getElementById(r);
  if (t)
    t.innerHTML !== e && (t.innerHTML = e);
  else {
    let a = l.createElement("style");
    a.setAttribute("id", r), a.innerHTML = e;
    let i = `addon-backgrounds-grid${n ? `-docs-${n}` : ""}`, d = l.getElementById(i);
    d ? d.parentElement.insertBefore(a, d) : l.head.appendChild(a);
  }
};
const { useMemo: b, useEffect: v } = __STORYBOOK_MODULE_PREVIEW_API__;
var L = (r, e) => {
  let { globals: n, parameters: t } = e, a = n[p]?.value, i = t[p], d = b(() => i.disable ? "transparent" : S(a, i.values, i.default), [i, a]), o = b(() => d && d !== "transparent", [d]), s = e.viewMode === "docs" ? `#anchor--${e.id} .docs-story` : ".sb-show-main", u = b(() => {
    let g = "transition: background-color 0.3s;";
    return `
      ${s} {
        background: ${d} !important;
        ${B() ? "" : g}
      }
    `;
  }, [d, s]);
  return v(() => {
    let g = e.viewMode === "docs" ? `addon-backgrounds-docs-${e.id}` : "addon-backgrounds-color";
    if (!o) {
      y(g);
      return;
    }
    A(g, u, e.viewMode === "docs" ? e.id : null);
  }, [o, u, e]), r();
}, O = (r, e) => {
  let { globals: n, parameters: t } = e, a = t[p].grid, i = n[p]?.grid === !0 && a.disable !== !0, { cellAmount: d, cellSize: o, opacity: s } = a, u = e.viewMode === "docs", g = t.layout === void 0 || t.layout === "padded" ? 16 : 0, c = a.offsetX ?? (u ? 20 : g), m = a.offsetY ?? (u ? 20 : g), $ = b(() => {
    let f = e.viewMode === "docs" ? `#anchor--${e.id} .docs-story` : ".sb-show-main", k = [`${o * d}px ${o * d}px`, `${o * d}px ${o * d}px`, `${o}px ${o}px`, `${o}px ${o}px`].join(", ");
    return `
      ${f} {
        background-size: ${k} !important;
        background-position: ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px, ${c}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s / 2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s / 2}) 1px, transparent 1px) !important;
      }
    `;
  }, [o]);
  return v(() => {
    let f = e.viewMode === "docs" ? `addon-backgrounds-grid-docs-${e.id}` : "addon-backgrounds-grid";
    if (!i) {
      y(f);
      return;
    }
    w(f, $);
  }, [i, $, e]), r();
}, I = [O, L], H = { [p]: { grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 }, values: [{ name: "light", value: "#F8F8F8" }, { name: "dark", value: "#333333" }] } }, R = { [p]: null };
export {
  I as decorators,
  R as globals,
  H as parameters
};
//# sourceMappingURL=preview-3628441a.mjs.map
