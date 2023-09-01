import { g as i, i as l, a as m } from "./chunk-757FFUVQ-f6cb7e19.mjs";
import { r as Y, b as j } from "./chunk-757FFUVQ-f6cb7e19.mjs";
import { S as p, e as _, a as D } from "./index-36ec6e8e.mjs";
import { i as y } from "./tiny-invariant-9065c551.mjs";
import { j as u } from "./lit-element-c68fb12d.mjs";
import "./index-398c73a4.mjs";
const { logger: c } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { useEffect: C, addons: g } = __STORYBOOK_MODULE_PREVIEW_API__;
function d(e, r) {
  let t;
  switch (r) {
    case "attributes":
    case "properties":
      t = { name: e.type?.text || e.type };
      break;
    case "slots":
      t = { name: "string" };
      break;
    default:
      t = { name: "void" };
      break;
  }
  return { name: e.name, required: !1, description: e.description, type: t, table: { category: r, type: { summary: e.type?.text || e.type }, defaultValue: { summary: e.default !== void 0 ? e.default : e.defaultValue } } };
}
function v(e) {
  let r = e.name.replace(/(-|_|:|\.|\s)+(.)?/g, (t, s, a) => a ? a.toUpperCase() : "").replace(/^([A-Z])/, (t) => t.toLowerCase());
  return r = `on${r.charAt(0).toUpperCase() + r.substr(1)}`, [{ name: r, action: { name: e.name }, table: { disable: !0 } }, d(e, "events")];
}
function n(e, r) {
  return e && e.filter((t) => t && t.name).reduce((t, s) => {
    if (s.kind === "method")
      return t;
    switch (r) {
      case "events":
        v(s).forEach((a) => {
          y(a.name, `${a} should have a name property.`), t[a.name] = a;
        });
        break;
      default:
        t[s.name] = d(s, r);
        break;
    }
    return t;
  }, {});
}
var b = (e, r) => {
  if (!l(e) || !m(r))
    return null;
  let t = r.tags.find((s) => s.name.toUpperCase() === e.toUpperCase());
  return t || c.warn(`Component not found in custom-elements.json: ${e}`), t;
}, h = (e, r) => {
  if (!l(e) || !m(r))
    return null;
  let t;
  return r?.modules?.forEach((s) => {
    s?.declarations?.forEach((a) => {
      a.tagName === e && (t = a);
    });
  }), t || c.warn(`Component not found in custom-elements.json: ${e}`), t;
}, f = (e, r) => r?.version === "experimental" ? b(e, r) : h(e, r), S = (e, r) => {
  let t = f(e, r);
  return t && { ...n(t.members ?? [], "properties"), ...n(t.properties ?? [], "properties"), ...n(t.attributes ?? [], "attributes"), ...n(t.events ?? [], "events"), ...n(t.slots ?? [], "slots"), ...n(t.cssProperties ?? [], "css custom properties"), ...n(t.cssParts ?? [], "css shadow parts") };
}, O = (e) => {
  let r = i();
  return S(e, r);
}, A = (e) => {
  let r = f(e, i());
  return r && r.description;
}, M = /<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;
function T(e) {
  let r = e?.parameters.docs?.source, t = e?.parameters.__isArgsStory;
  return r?.type === p.DYNAMIC ? !1 : !t || r?.code || r?.type === p.CODE;
}
function w(e, r) {
  let t = e(), s = r?.parameters.docs?.source?.excludeDecorators ? r.originalStoryFn(r.args, r) : t, a;
  if (C(() => {
    let { id: o, unmappedArgs: E } = r;
    a && g.getChannel().emit(D, { id: o, source: a, args: E });
  }), !T(r)) {
    let o = window.document.createElement("div");
    s instanceof DocumentFragment ? u(s.cloneNode(!0), o) : u(s, o), a = o.innerHTML.replace(M, "");
  }
  return t;
}
var V = [w], I = { docs: { extractArgTypes: O, extractComponentDescription: A, story: { inline: !0 }, source: { type: p.DYNAMIC, language: "html" } } }, $ = [_], x = { renderer: "web-components", ...I };
export {
  $ as argTypesEnhancers,
  V as decorators,
  x as parameters,
  Y as render,
  j as renderToCanvas
};
//# sourceMappingURL=config-0222ee67.mjs.map
