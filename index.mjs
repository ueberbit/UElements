import "./sb-preview/runtime.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const { createBrowserChannel: O } = __STORYBOOK_MODULE_CHANNELS__, { addons: c } = __STORYBOOK_MODULE_PREVIEW_API__, _ = O({ page: "preview" });
c.setChannel(_);
window.__STORYBOOK_ADDONS_CHANNEL__ = _;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = _);
const d = {
  "./src/CustomElements/Details/Details.docs.mdx": async () => import("./Details.docs-46d72b1b.mjs"),
  "./src/CustomElements/Details/Details.stories.ts": async () => import("./Details.stories-89dd9586.mjs")
};
async function l(o) {
  return d[o]();
}
const { composeConfigs: a, PreviewWeb: m, ClientApi: p } = __STORYBOOK_MODULE_PREVIEW_API__, E = async () => {
  const o = await Promise.all([
    import("./config-189b8fe9.mjs"),
    import("./preview-a6d68c7d.mjs"),
    import("./preview-96092e5b.mjs"),
    import("./preview-b6b15887.mjs"),
    import("./preview-3628441a.mjs"),
    import("./preview-e19ebd82.mjs"),
    import("./preview-8e61b561.mjs"),
    import("./preview-e28ef412.mjs"),
    import("./preview-4c201cbb.mjs")
  ]);
  return a(o);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new m();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new p({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: l, getProjectAnnotations: E });
//# sourceMappingURL=index.mjs.map
