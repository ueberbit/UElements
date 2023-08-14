import "./sb-preview/runtime.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    _(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && _(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function _(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
const { createBrowserChannel: O } = __STORYBOOK_MODULE_CHANNELS__, { addons: c } = __STORYBOOK_MODULE_PREVIEW_API__, s = O({ page: "preview" });
c.setChannel(s);
window.__STORYBOOK_ADDONS_CHANNEL__ = s;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = s);
const d = {
  "./src/custom-elements/details/details.docs.mdx": async () => import("./details.docs-d1a0f25a.mjs"),
  "./src/custom-elements/details-group/details-group.stories.ts": async () => import("./details-group.stories-2170bf02.mjs"),
  "./src/custom-elements/details/details.stories.ts": async () => import("./details.stories-4b62dc7d.mjs")
};
async function l(o) {
  return d[o]();
}
const { composeConfigs: a, PreviewWeb: m, ClientApi: p } = __STORYBOOK_MODULE_PREVIEW_API__, u = async () => {
  const o = await Promise.all([
    import("./config-b4ffbb9c.mjs"),
    import("./preview-a6d68c7d.mjs"),
    import("./preview-96092e5b.mjs"),
    import("./preview-0822076e.mjs"),
    import("./preview-3628441a.mjs"),
    import("./preview-2e66ddd2.mjs"),
    import("./preview-8e61b561.mjs"),
    import("./preview-e28ef412.mjs"),
    import("./preview-263a5c72.mjs")
  ]);
  return a(o);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new m();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new p({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: l, getProjectAnnotations: u });
//# sourceMappingURL=index.mjs.map
