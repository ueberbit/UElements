import "./index-d79fba58.mjs";
var O = "links";
const { global: E } = __STORYBOOK_MODULE_GLOBAL__, { makeDecorator: l, addons: _ } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_CHANGED: L, SELECT_STORY: c } = __STORYBOOK_MODULE_CORE_EVENTS__;
var { document: i, HTMLElement: m } = E, d = (e) => _.getChannel().emit(c, e), o = (e) => {
  let { target: t } = e;
  if (!(t instanceof m))
    return;
  let s = t, { sbKind: a, sbStory: r } = s.dataset;
  (a || r) && (e.preventDefault(), d({ kind: a, story: r }));
}, n = !1, v = () => {
  n || (n = !0, i.addEventListener("click", o));
}, k = () => {
  n && (n = !1, i.removeEventListener("click", o));
}, R = l({ name: "withLinks", parameterName: O, wrapper: (e, t) => (v(), _.getChannel().once(L, k), e(t)) }), T = [R];
export {
  T as decorators
};
//# sourceMappingURL=preview-37264ad7.mjs.map
