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
  "./src/custom-elements/details/details.docs.mdx": async () => import("./details.docs-eb5dec22.mjs"),
  "./src/custom-elements/details-group/details-group.stories.ts": async () => import("./details-group.stories-a0869e5d.mjs"),
  "./src/custom-elements/details/details.stories.ts": async () => import("./details.stories-eeb098b4.mjs")
};
async function l(o) {
  return d[o]();
}
const { composeConfigs: a, PreviewWeb: m, ClientApi: p } = __STORYBOOK_MODULE_PREVIEW_API__, u = async () => {
  const o = await Promise.all([
    import("./config-0222ee67.mjs"),
    import("./preview-37264ad7.mjs"),
    import("./preview-6530fadf.mjs"),
    import("./preview-57013a42.mjs"),
    import("./preview-db0007be.mjs"),
    import("./preview-057fcb2a.mjs"),
    import("./preview-5d78766f.mjs"),
    import("./preview-a9def41a.mjs"),
    import("./preview-feec338d.mjs")
  ]);
  return a(o);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new m();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new p({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: l, getProjectAnnotations: u });
//# sourceMappingURL=index.mjs.map
