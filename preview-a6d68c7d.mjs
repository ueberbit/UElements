import { s as E } from "./index-51e7740f.mjs";
import "./index-d79fba58.mjs";
var c = "links";
const { makeDecorator: m, addons: s } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_CHANGED: l, SELECT_STORY: O } = __STORYBOOK_MODULE_CORE_EVENTS__;
var { document: i, HTMLElement: L } = E, d = (e) => s.getChannel().emit(O, e), o = (e) => {
  let { target: t } = e;
  if (!(t instanceof L))
    return;
  let _ = t, { sbKind: r, sbStory: a } = _.dataset;
  (r || a) && (e.preventDefault(), d({ kind: r, story: a }));
}, n = !1, v = () => {
  n || (n = !0, i.addEventListener("click", o));
}, k = () => {
  n && (n = !1, i.removeEventListener("click", o));
}, p = m({ name: "withLinks", parameterName: c, wrapper: (e, t) => (v(), s.getChannel().once(l, k), e(t)) }), T = [p];
export {
  T as decorators
};
//# sourceMappingURL=preview-a6d68c7d.mjs.map
