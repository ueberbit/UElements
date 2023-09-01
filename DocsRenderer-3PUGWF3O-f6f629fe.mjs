import { l as h, b as o, r as a, o as l, A as E, H as R, p as x } from "./index-6d191841.mjs";
import "./index-36ec6e8e.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
var c = {}, u = h;
c.createRoot = u.createRoot, c.hydrateRoot = u.hydrateRoot;
var n = /* @__PURE__ */ new Map(), y = ({ callback: e, children: t }) => {
  let r = a.useRef();
  return a.useLayoutEffect(() => {
    r.current !== e && (r.current = e, e());
  }, [e]), t;
}, w = async (e, t) => {
  let r = await f(t);
  return new Promise((s) => {
    r.render(o.createElement(y, { callback: () => s(null) }, e));
  });
}, D = (e, t) => {
  let r = n.get(e);
  r && (r.unmount(), n.delete(e));
}, f = async (e) => {
  let t = n.get(e);
  return t || (t = c.createRoot(e), n.set(e, t)), t;
}, g = { code: l, a: E, ...R }, v = class extends a.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    let { showException: t } = this.props;
    t(e);
  }
  render() {
    let { hasError: e } = this.state, { children: t } = this.props;
    return e ? null : t;
  }
}, S = class {
  constructor() {
    this.render = async (e, t, r) => {
      let s = { ...g, ...t?.components }, m = x;
      return new Promise((i, p) => {
        import("./index-14ddf3f2.mjs").then(({ MDXProvider: d }) => w(o.createElement(v, { showException: p, key: Math.random() }, o.createElement(d, { components: s }, o.createElement(m, { context: e, docsParameter: t }))), r)).then(() => i());
      });
    }, this.unmount = (e) => {
      D(e);
    };
  }
};
export {
  S as DocsRenderer,
  g as defaultComponents
};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-f6f629fe.mjs.map
