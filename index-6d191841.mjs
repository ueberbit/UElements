import { g as oa, c as Ln, d as dm, f as S0, h as pm, j as kv, k as fm, l as A0, m as _v, n as Ov, o as Qi, p as C0, i as ul, b as mm, q as Tv, r as Fv, s as Rv, t as Lv, u as Dv, v as Mv, w as gm, x as $v, y as Bv, _ as Iv, z as Pv, A as Nv, B as hm, C as ym, D as cc, a as mf, S as dc, E as qc } from "./index-36ec6e8e.mjs";
import { L as vm, v as jv } from "./index-d79fba58.mjs";
import { d as Lt } from "./index-398c73a4.mjs";
function Hv(e, r) {
  for (var a = 0; a < r.length; a++) {
    const l = r[a];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const u in l)
        if (u !== "default" && !(u in e)) {
          const c = Object.getOwnPropertyDescriptor(l, u);
          c && Object.defineProperty(e, u, c.get ? c : {
            enumerable: !0,
            get: () => l[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var bm = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function Zv() {
  if (gf)
    return we;
  gf = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;
  function w(F) {
    return F === null || typeof F != "object" ? null : (F = x && F[x] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, b = {};
  function k(F, U, ne) {
    this.props = F, this.context = U, this.refs = b, this.updater = ne || v;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(F, U) {
    if (typeof F != "object" && typeof F != "function" && F != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, U, "setState");
  }, k.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function A() {
  }
  A.prototype = k.prototype;
  function O(F, U, ne) {
    this.props = F, this.context = U, this.refs = b, this.updater = ne || v;
  }
  var C = O.prototype = new A();
  C.constructor = O, E(C, k.prototype), C.isPureReactComponent = !0;
  var _ = Array.isArray, T = Object.prototype.hasOwnProperty, R = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(F, U, ne) {
    var ce, ue = {}, te = null, le = null;
    if (U != null)
      for (ce in U.ref !== void 0 && (le = U.ref), U.key !== void 0 && (te = "" + U.key), U)
        T.call(U, ce) && !$.hasOwnProperty(ce) && (ue[ce] = U[ce]);
    var fe = arguments.length - 2;
    if (fe === 1)
      ue.children = ne;
    else if (1 < fe) {
      for (var ve = Array(fe), Oe = 0; Oe < fe; Oe++)
        ve[Oe] = arguments[Oe + 2];
      ue.children = ve;
    }
    if (F && F.defaultProps)
      for (ce in fe = F.defaultProps, fe)
        ue[ce] === void 0 && (ue[ce] = fe[ce]);
    return { $$typeof: e, type: F, key: te, ref: le, props: ue, _owner: R.current };
  }
  function j(F, U) {
    return { $$typeof: e, type: F.type, key: U, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function Z(F) {
    return typeof F == "object" && F !== null && F.$$typeof === e;
  }
  function V(F) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function(ne) {
      return U[ne];
    });
  }
  var Q = /\/+/g;
  function Y(F, U) {
    return typeof F == "object" && F !== null && F.key != null ? V("" + F.key) : U.toString(36);
  }
  function pe(F, U, ne, ce, ue) {
    var te = typeof F;
    (te === "undefined" || te === "boolean") && (F = null);
    var le = !1;
    if (F === null)
      le = !0;
    else
      switch (te) {
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (F.$$typeof) {
            case e:
            case r:
              le = !0;
          }
      }
    if (le)
      return le = F, ue = ue(le), F = ce === "" ? "." + Y(le, 0) : ce, _(ue) ? (ne = "", F != null && (ne = F.replace(Q, "$&/") + "/"), pe(ue, U, ne, "", function(Oe) {
        return Oe;
      })) : ue != null && (Z(ue) && (ue = j(ue, ne + (!ue.key || le && le.key === ue.key ? "" : ("" + ue.key).replace(Q, "$&/") + "/") + F)), U.push(ue)), 1;
    if (le = 0, ce = ce === "" ? "." : ce + ":", _(F))
      for (var fe = 0; fe < F.length; fe++) {
        te = F[fe];
        var ve = ce + Y(te, fe);
        le += pe(te, U, ne, ve, ue);
      }
    else if (ve = w(F), typeof ve == "function")
      for (F = ve.call(F), fe = 0; !(te = F.next()).done; )
        te = te.value, ve = ce + Y(te, fe++), le += pe(te, U, ne, ve, ue);
    else if (te === "object")
      throw U = String(F), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return le;
  }
  function J(F, U, ne) {
    if (F == null)
      return F;
    var ce = [], ue = 0;
    return pe(F, ce, "", "", function(te) {
      return U.call(ne, te, ue++);
    }), ce;
  }
  function re(F) {
    if (F._status === -1) {
      var U = F._result;
      U = U(), U.then(function(ne) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = ne);
      }, function(ne) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = ne);
      }), F._status === -1 && (F._status = 0, F._result = U);
    }
    if (F._status === 1)
      return F._result.default;
    throw F._result;
  }
  var ae = { current: null }, q = { transition: null }, W = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: q, ReactCurrentOwner: R };
  return we.Children = { map: J, forEach: function(F, U, ne) {
    J(F, function() {
      U.apply(this, arguments);
    }, ne);
  }, count: function(F) {
    var U = 0;
    return J(F, function() {
      U++;
    }), U;
  }, toArray: function(F) {
    return J(F, function(U) {
      return U;
    }) || [];
  }, only: function(F) {
    if (!Z(F))
      throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, we.Component = k, we.Fragment = a, we.Profiler = u, we.PureComponent = O, we.StrictMode = l, we.Suspense = p, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, we.cloneElement = function(F, U, ne) {
    if (F == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var ce = E({}, F.props), ue = F.key, te = F.ref, le = F._owner;
    if (U != null) {
      if (U.ref !== void 0 && (te = U.ref, le = R.current), U.key !== void 0 && (ue = "" + U.key), F.type && F.type.defaultProps)
        var fe = F.type.defaultProps;
      for (ve in U)
        T.call(U, ve) && !$.hasOwnProperty(ve) && (ce[ve] = U[ve] === void 0 && fe !== void 0 ? fe[ve] : U[ve]);
    }
    var ve = arguments.length - 2;
    if (ve === 1)
      ce.children = ne;
    else if (1 < ve) {
      fe = Array(ve);
      for (var Oe = 0; Oe < ve; Oe++)
        fe[Oe] = arguments[Oe + 2];
      ce.children = fe;
    }
    return { $$typeof: e, type: F.type, key: ue, ref: te, props: ce, _owner: le };
  }, we.createContext = function(F) {
    return F = { $$typeof: d, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: c, _context: F }, F.Consumer = F;
  }, we.createElement = M, we.createFactory = function(F) {
    var U = M.bind(null, F);
    return U.type = F, U;
  }, we.createRef = function() {
    return { current: null };
  }, we.forwardRef = function(F) {
    return { $$typeof: m, render: F };
  }, we.isValidElement = Z, we.lazy = function(F) {
    return { $$typeof: y, _payload: { _status: -1, _result: F }, _init: re };
  }, we.memo = function(F, U) {
    return { $$typeof: h, type: F, compare: U === void 0 ? null : U };
  }, we.startTransition = function(F) {
    var U = q.transition;
    q.transition = {};
    try {
      F();
    } finally {
      q.transition = U;
    }
  }, we.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, we.useCallback = function(F, U) {
    return ae.current.useCallback(F, U);
  }, we.useContext = function(F) {
    return ae.current.useContext(F);
  }, we.useDebugValue = function() {
  }, we.useDeferredValue = function(F) {
    return ae.current.useDeferredValue(F);
  }, we.useEffect = function(F, U) {
    return ae.current.useEffect(F, U);
  }, we.useId = function() {
    return ae.current.useId();
  }, we.useImperativeHandle = function(F, U, ne) {
    return ae.current.useImperativeHandle(F, U, ne);
  }, we.useInsertionEffect = function(F, U) {
    return ae.current.useInsertionEffect(F, U);
  }, we.useLayoutEffect = function(F, U) {
    return ae.current.useLayoutEffect(F, U);
  }, we.useMemo = function(F, U) {
    return ae.current.useMemo(F, U);
  }, we.useReducer = function(F, U, ne) {
    return ae.current.useReducer(F, U, ne);
  }, we.useRef = function(F) {
    return ae.current.useRef(F);
  }, we.useState = function(F) {
    return ae.current.useState(F);
  }, we.useSyncExternalStore = function(F, U, ne) {
    return ae.current.useSyncExternalStore(F, U, ne);
  }, we.useTransition = function() {
    return ae.current.useTransition();
  }, we.version = "18.2.0", we;
}
bm.exports = Zv();
var D = bm.exports;
const i = /* @__PURE__ */ oa(D), hf = /* @__PURE__ */ Hv({
  __proto__: null,
  default: i
}, [D]);
var br = (e) => `control-${e.replace(/\s+/g, "-")}`, Ji = (e) => `set-${e.replace(/\s+/g, "-")}`;
const { global: zv } = __STORYBOOK_MODULE_GLOBAL__, { logger: Vv } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var Uv = Object.create, Em = Object.defineProperty, qv = Object.getOwnPropertyDescriptor, xm = Object.getOwnPropertyNames, Wv = Object.getPrototypeOf, Gv = Object.prototype.hasOwnProperty, k0 = (e, r) => function() {
  return r || (0, e[xm(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, Kv = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of xm(r))
      !Gv.call(e, u) && u !== a && Em(e, u, { get: () => r[u], enumerable: !(l = qv(r, u)) || l.enumerable });
  return e;
}, wm = (e, r, a) => (a = e != null ? Uv(Wv(e)) : {}, Kv(r || !e || !e.__esModule ? Em(a, "default", { value: e, enumerable: !0 }) : a, e));
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Fn.apply(this, arguments);
}
function Yv(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wo(e, r) {
  return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, l) {
    return a.__proto__ = l, a;
  }, Wo(e, r);
}
function Xv(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Wo(e, r);
}
function Wc(e) {
  return Wc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wc(e);
}
function Qv(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Jv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Li(e, r, a) {
  return Jv() ? Li = Reflect.construct.bind() : Li = function(l, u, c) {
    var d = [null];
    d.push.apply(d, u);
    var m = Function.bind.apply(l, d), p = new m();
    return c && Wo(p, c.prototype), p;
  }, Li.apply(null, arguments);
}
function Gc(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Gc = function(a) {
    if (a === null || !Qv(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(a))
        return r.get(a);
      r.set(a, l);
    }
    function l() {
      return Li(a, arguments, Wc(this).constructor);
    }
    return l.prototype = Object.create(a.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), Wo(l, a);
  }, Gc(e);
}
var e3 = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function t3() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  var l = r[0], u = [], c;
  for (c = 1; c < r.length; c += 1)
    u.push(r[c]);
  return u.forEach(function(d) {
    l = l.replace(/%[a-z]/, d);
  }), l;
}
var Lr = function(e) {
  Xv(r, e);
  function r(a) {
    for (var l, u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
      c[d - 1] = arguments[d];
    return l = e.call(this, t3.apply(void 0, [e3[a]].concat(c))) || this, Yv(l);
  }
  return r;
}(Gc(Error));
function pc(e) {
  return Math.round(e * 255);
}
function r3(e, r, a) {
  return pc(e) + "," + pc(r) + "," + pc(a);
}
function Go(e, r, a, l) {
  if (l === void 0 && (l = r3), r === 0)
    return l(a, a, a);
  var u = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(u % 2 - 1)), m = 0, p = 0, h = 0;
  u >= 0 && u < 1 ? (m = c, p = d) : u >= 1 && u < 2 ? (m = d, p = c) : u >= 2 && u < 3 ? (p = c, h = d) : u >= 3 && u < 4 ? (p = d, h = c) : u >= 4 && u < 5 ? (m = d, h = c) : u >= 5 && u < 6 && (m = c, h = d);
  var y = a - c / 2, x = m + y, w = p + y, v = h + y;
  return l(x, w, v);
}
var yf = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function n3(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return yf[r] ? "#" + yf[r] : e;
}
var a3 = /^#[a-fA-F0-9]{6}$/, o3 = /^#[a-fA-F0-9]{8}$/, l3 = /^#[a-fA-F0-9]{3}$/, i3 = /^#[a-fA-F0-9]{4}$/, fc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, u3 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, s3 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, c3 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function eu(e) {
  if (typeof e != "string")
    throw new Lr(3);
  var r = n3(e);
  if (r.match(a3))
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16) };
  if (r.match(o3)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16), alpha: a };
  }
  if (r.match(l3))
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16) };
  if (r.match(i3)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16), alpha: l };
  }
  var u = fc.exec(r);
  if (u)
    return { red: parseInt("" + u[1], 10), green: parseInt("" + u[2], 10), blue: parseInt("" + u[3], 10) };
  var c = u3.exec(r.substring(0, 50));
  if (c)
    return { red: parseInt("" + c[1], 10), green: parseInt("" + c[2], 10), blue: parseInt("" + c[3], 10), alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4]) };
  var d = s3.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + Go(m, p, h) + ")", x = fc.exec(y);
    if (!x)
      throw new Lr(4, r, y);
    return { red: parseInt("" + x[1], 10), green: parseInt("" + x[2], 10), blue: parseInt("" + x[3], 10) };
  }
  var w = c3.exec(r.substring(0, 50));
  if (w) {
    var v = parseInt("" + w[1], 10), E = parseInt("" + w[2], 10) / 100, b = parseInt("" + w[3], 10) / 100, k = "rgb(" + Go(v, E, b) + ")", A = fc.exec(k);
    if (!A)
      throw new Lr(4, r, k);
    return { red: parseInt("" + A[1], 10), green: parseInt("" + A[2], 10), blue: parseInt("" + A[3], 10), alpha: parseFloat("" + w[4]) > 1 ? parseFloat("" + w[4]) / 100 : parseFloat("" + w[4]) };
  }
  throw new Lr(5);
}
function d3(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, u = Math.max(r, a, l), c = Math.min(r, a, l), d = (u + c) / 2;
  if (u === c)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: d, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: d };
  var m, p = u - c, h = d > 0.5 ? p / (2 - u - c) : p / (u + c);
  switch (u) {
    case r:
      m = (a - l) / p + (a < l ? 6 : 0);
      break;
    case a:
      m = (l - r) / p + 2;
      break;
    default:
      m = (r - a) / p + 4;
      break;
  }
  return m *= 60, e.alpha !== void 0 ? { hue: m, saturation: h, lightness: d, alpha: e.alpha } : { hue: m, saturation: h, lightness: d };
}
function Sm(e) {
  return d3(eu(e));
}
var p3 = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Kc = p3;
function Kn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function mc(e) {
  return Kn(Math.round(e * 255));
}
function f3(e, r, a) {
  return Kc("#" + mc(e) + mc(r) + mc(a));
}
function Vi(e, r, a) {
  return Go(e, r, a, f3);
}
function m3(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Vi(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Vi(e.hue, e.saturation, e.lightness);
  throw new Lr(1);
}
function g3(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? Vi(e, r, a) : "rgba(" + Go(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? Vi(e.hue, e.saturation, e.lightness) : "rgba(" + Go(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Lr(2);
}
function Yc(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Kc("#" + Kn(e) + Kn(r) + Kn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Kc("#" + Kn(e.red) + Kn(e.green) + Kn(e.blue));
  throw new Lr(6);
}
function Ko(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var u = eu(e);
    return "rgba(" + u.red + "," + u.green + "," + u.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? Yc(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? Yc(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Lr(7);
}
var h3 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, y3 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, v3 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, b3 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Am(e) {
  if (typeof e != "object")
    throw new Lr(8);
  if (y3(e))
    return Ko(e);
  if (h3(e))
    return Yc(e);
  if (b3(e))
    return g3(e);
  if (v3(e))
    return m3(e);
  throw new Lr(8);
}
function Cm(e, r, a) {
  return function() {
    var l = a.concat(Array.prototype.slice.call(arguments));
    return l.length >= r ? e.apply(this, l) : Cm(e, r, l);
  };
}
function tu(e) {
  return Cm(e, e.length, []);
}
function ru(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function E3(e, r) {
  if (r === "transparent")
    return r;
  var a = Sm(r);
  return Am(Fn({}, a, { lightness: ru(0, 1, a.lightness - parseFloat(e)) }));
}
var x3 = tu(E3), w3 = x3;
function S3(e, r) {
  if (r === "transparent")
    return r;
  var a = Sm(r);
  return Am(Fn({}, a, { lightness: ru(0, 1, a.lightness + parseFloat(e)) }));
}
var A3 = tu(S3), C3 = A3;
function k3(e, r) {
  if (r === "transparent")
    return r;
  var a = eu(r), l = typeof a.alpha == "number" ? a.alpha : 1, u = Fn({}, a, { alpha: ru(0, 1, (l * 100 + parseFloat(e) * 100) / 100) });
  return Ko(u);
}
var _3 = tu(k3), O3 = _3;
function T3(e, r) {
  if (r === "transparent")
    return r;
  var a = eu(r), l = typeof a.alpha == "number" ? a.alpha : 1, u = Fn({}, a, { alpha: ru(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return Ko(u);
}
var F3 = tu(T3), R3 = F3, xe = { primary: "#FF4785", secondary: "#029CFD", tertiary: "#FAFBFC", ancillary: "#22a699", orange: "#FC521F", gold: "#FFAE00", green: "#66BF3C", seafoam: "#37D5D3", purple: "#6F2CAC", ultraviolet: "#2A0481", lightest: "#FFFFFF", lighter: "#F7FAFC", light: "#EEF3F6", mediumlight: "#ECF4F9", medium: "#D9E8F2", mediumdark: "#73828C", dark: "#5C6870", darker: "#454E54", darkest: "#2E3438", border: "hsla(203, 50%, 30%, 0.15)", positive: "#66BF3C", negative: "#FF4400", warning: "#E69D00", critical: "#FFFFFF", defaultText: "#2E3438", inverseText: "#FFFFFF", positiveText: "#448028", negativeText: "#D43900", warningText: "#A15C20" }, On = { app: "#F6F9FC", bar: xe.lightest, content: xe.lightest, gridCellSize: 10, hoverable: R3(0.93, xe.secondary), positive: "#E1FFD4", negative: "#FEDED2", warning: "#FFF5CF", critical: "#FF4400" }, Dr = { fonts: { base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "), mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ") }, weight: { regular: 400, bold: 700 }, size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 } }, L3 = { base: "light", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: On.app, appContentBg: xe.lightest, appBorderColor: xe.border, appBorderRadius: 4, fontBase: Dr.fonts.base, fontCode: Dr.fonts.mono, textColor: xe.darkest, textInverseColor: xe.lightest, textMutedColor: xe.mediumdark, barTextColor: xe.mediumdark, barSelectedColor: xe.secondary, barBg: xe.lightest, buttonBg: On.app, buttonBorder: xe.medium, booleanBg: xe.mediumlight, booleanSelectedBg: xe.lightest, inputBg: xe.lightest, inputBorder: xe.border, inputTextColor: xe.darkest, inputBorderRadius: 4 }, Ui = L3, D3 = { base: "dark", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: "#222425", appContentBg: "#1B1C1D", appBorderColor: "rgba(255,255,255,.1)", appBorderRadius: 4, fontBase: Dr.fonts.base, fontCode: Dr.fonts.mono, textColor: "#C9CDCF", textInverseColor: "#222425", textMutedColor: "#798186", barTextColor: "#798186", barSelectedColor: xe.secondary, barBg: "#292C2E", buttonBg: "#222425", buttonBorder: "rgba(255,255,255,.1)", booleanBg: "#222425", booleanSelectedBg: "#2E3438", inputBg: "#1B1C1D", inputBorder: "rgba(255,255,255,.1)", inputTextColor: xe.lightest, inputBorderRadius: 4 }, M3 = D3, { window: gc } = zv, $3 = (e) => ({ color: e }), B3 = (e) => typeof e != "string" ? (Vv.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`), !1) : !0, I3 = (e) => !/(gradient|var|calc)/.test(e), P3 = (e, r) => e === "darken" ? Ko(`${w3(1, r)}`, 0.95) : e === "lighten" ? Ko(`${C3(1, r)}`, 0.95) : r, N3 = (e) => (r) => {
  if (!B3(r) || !I3(r))
    return r;
  try {
    return P3(e, r);
  } catch {
    return r;
  }
}, Vo = N3("lighten"), km = () => !gc || !gc.matchMedia ? "light" : gc.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", Xc = { light: Ui, dark: M3, normal: Ui };
km();
var j3 = function(r) {
  return r();
}, _m = hf["useInsertionEffect"] ? hf["useInsertionEffect"] : !1, _0 = _m || j3, vf = _m || D.useLayoutEffect;
function Ai(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Om = { exports: {} };
(function(e, r) {
  (function(a) {
    e.exports = a();
  })(function() {
    return function a(l, u, c) {
      function d(h, y) {
        if (!u[h]) {
          if (!l[h]) {
            var x = typeof Ai == "function" && Ai;
            if (!y && x)
              return x(h, !0);
            if (m)
              return m(h, !0);
            var w = new Error("Cannot find module '" + h + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var v = u[h] = { exports: {} };
          l[h][0].call(v.exports, function(E) {
            var b = l[h][1][E];
            return d(b || E);
          }, v, v.exports, a, l, u, c);
        }
        return u[h].exports;
      }
      for (var m = typeof Ai == "function" && Ai, p = 0; p < c.length; p++)
        d(c[p]);
      return d;
    }({ 1: [function(a, l, u) {
      l.exports = function(c) {
        if (typeof Map != "function" || c) {
          var d = a("./similar");
          return new d();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(a, l, u) {
      function c() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      c.prototype.get = function(d) {
        var m;
        if (this.lastItem && this.isEqual(this.lastItem.key, d))
          return this.lastItem.val;
        if (m = this.indexOf(d), m >= 0)
          return this.lastItem = this.list[m], this.list[m].val;
      }, c.prototype.set = function(d, m) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, d) ? (this.lastItem.val = m, this) : (p = this.indexOf(d), p >= 0 ? (this.lastItem = this.list[p], this.list[p].val = m, this) : (this.lastItem = { key: d, val: m }, this.list.push(this.lastItem), this.size++, this));
      }, c.prototype.delete = function(d) {
        var m;
        if (this.lastItem && this.isEqual(this.lastItem.key, d) && (this.lastItem = void 0), m = this.indexOf(d), m >= 0)
          return this.size--, this.list.splice(m, 1)[0];
      }, c.prototype.has = function(d) {
        var m;
        return this.lastItem && this.isEqual(this.lastItem.key, d) ? !0 : (m = this.indexOf(d), m >= 0 ? (this.lastItem = this.list[m], !0) : !1);
      }, c.prototype.forEach = function(d, m) {
        var p;
        for (p = 0; p < this.size; p++)
          d.call(m || this, this.list[p].val, this.list[p].key, this);
      }, c.prototype.indexOf = function(d) {
        var m;
        for (m = 0; m < this.size; m++)
          if (this.isEqual(this.list[m].key, d))
            return m;
        return -1;
      }, c.prototype.isEqual = function(d, m) {
        return d === m || d !== d && m !== m;
      }, l.exports = c;
    }, {}], 3: [function(a, l, u) {
      var c = a("map-or-similar");
      l.exports = function(h) {
        var y = new c(!1), x = [];
        return function(w) {
          var v = function() {
            var E = y, b, k, A = arguments.length - 1, O = Array(A + 1), C = !0, _;
            if ((v.numArgs || v.numArgs === 0) && v.numArgs !== A + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (_ = 0; _ < A; _++) {
              if (O[_] = {
                cacheItem: E,
                arg: arguments[_]
              }, E.has(arguments[_])) {
                E = E.get(arguments[_]);
                continue;
              }
              C = !1, b = new c(!1), E.set(arguments[_], b), E = b;
            }
            return C && (E.has(arguments[A]) ? k = E.get(arguments[A]) : C = !1), C || (k = w.apply(null, arguments), E.set(arguments[A], k)), h > 0 && (O[A] = {
              cacheItem: E,
              arg: arguments[A]
            }, C ? d(x, O) : x.push(O), x.length > h && m(x.shift())), v.wasMemoized = C, v.numArgs = A + 1, k;
          };
          return v.limit = h, v.wasMemoized = !1, v.cache = y, v.lru = x, v;
        };
      };
      function d(h, y) {
        var x = h.length, w = y.length, v, E, b;
        for (E = 0; E < x; E++) {
          for (v = !0, b = 0; b < w; b++)
            if (!p(h[E][b].arg, y[b].arg)) {
              v = !1;
              break;
            }
          if (v)
            break;
        }
        h.push(h.splice(E, 1)[0]);
      }
      function m(h) {
        var y = h.length, x = h[y - 1], w, v;
        for (x.cacheItem.delete(x.arg), v = y - 2; v >= 0 && (x = h[v], w = x.cacheItem.get(x.arg), !w || !w.size); v--)
          x.cacheItem.delete(x.arg);
      }
      function p(h, y) {
        return h === y || h !== h && y !== y;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(Om);
var H3 = Om.exports;
const la = /* @__PURE__ */ oa(H3), { logger: Z3 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var z3 = k0({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, y = r ? Symbol.for("react.concurrent_mode") : 60111, x = r ? Symbol.for("react.forward_ref") : 60112, w = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, E = r ? Symbol.for("react.memo") : 60115, b = r ? Symbol.for("react.lazy") : 60116, k = r ? Symbol.for("react.block") : 60121, A = r ? Symbol.for("react.fundamental") : 60117, O = r ? Symbol.for("react.responder") : 60118, C = r ? Symbol.for("react.scope") : 60119;
    function _(se) {
      return typeof se == "string" || typeof se == "function" || se === u || se === y || se === d || se === c || se === w || se === v || typeof se == "object" && se !== null && (se.$$typeof === b || se.$$typeof === E || se.$$typeof === m || se.$$typeof === p || se.$$typeof === x || se.$$typeof === A || se.$$typeof === O || se.$$typeof === C || se.$$typeof === k);
    }
    function T(se) {
      if (typeof se == "object" && se !== null) {
        var vt = se.$$typeof;
        switch (vt) {
          case a:
            var Pt = se.type;
            switch (Pt) {
              case h:
              case y:
              case u:
              case d:
              case c:
              case w:
                return Pt;
              default:
                var Er = Pt && Pt.$$typeof;
                switch (Er) {
                  case p:
                  case x:
                  case b:
                  case E:
                  case m:
                    return Er;
                  default:
                    return vt;
                }
            }
          case l:
            return vt;
        }
      }
    }
    var R = h, $ = y, M = p, j = m, Z = a, V = x, Q = u, Y = b, pe = E, J = l, re = d, ae = c, q = w, W = !1;
    function F(se) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(se) || T(se) === h;
    }
    function U(se) {
      return T(se) === y;
    }
    function ne(se) {
      return T(se) === p;
    }
    function ce(se) {
      return T(se) === m;
    }
    function ue(se) {
      return typeof se == "object" && se !== null && se.$$typeof === a;
    }
    function te(se) {
      return T(se) === x;
    }
    function le(se) {
      return T(se) === u;
    }
    function fe(se) {
      return T(se) === b;
    }
    function ve(se) {
      return T(se) === E;
    }
    function Oe(se) {
      return T(se) === l;
    }
    function sr(se) {
      return T(se) === d;
    }
    function nt(se) {
      return T(se) === c;
    }
    function It(se) {
      return T(se) === w;
    }
    e.AsyncMode = R, e.ConcurrentMode = $, e.ContextConsumer = M, e.ContextProvider = j, e.Element = Z, e.ForwardRef = V, e.Fragment = Q, e.Lazy = Y, e.Memo = pe, e.Portal = J, e.Profiler = re, e.StrictMode = ae, e.Suspense = q, e.isAsyncMode = F, e.isConcurrentMode = U, e.isContextConsumer = ne, e.isContextProvider = ce, e.isElement = ue, e.isForwardRef = te, e.isFragment = le, e.isLazy = fe, e.isMemo = ve, e.isPortal = Oe, e.isProfiler = sr, e.isStrictMode = nt, e.isSuspense = It, e.isValidElementType = _, e.typeOf = T;
  })();
} }), V3 = k0({ "../../node_modules/react-is/index.js"(e, r) {
  r.exports = z3();
} }), Tm = k0({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, r) {
  var a = V3(), l = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, u = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, c = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, d = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, m = {};
  m[a.ForwardRef] = c, m[a.Memo] = d;
  function p(k) {
    return a.isMemo(k) ? d : m[k.$$typeof] || l;
  }
  var h = Object.defineProperty, y = Object.getOwnPropertyNames, x = Object.getOwnPropertySymbols, w = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, E = Object.prototype;
  function b(k, A, O) {
    if (typeof A != "string") {
      if (E) {
        var C = v(A);
        C && C !== E && b(k, C, O);
      }
      var _ = y(A);
      x && (_ = _.concat(x(A)));
      for (var T = p(k), R = p(A), $ = 0; $ < _.length; ++$) {
        var M = _[$];
        if (!u[M] && !(O && O[M]) && !(R && R[M]) && !(T && T[M])) {
          var j = w(A, M);
          try {
            h(k, M, j);
          } catch {
          }
        }
      }
    }
    return k;
  }
  r.exports = b;
} });
function Fm(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return r[a] === void 0 && (r[a] = e(a)), r[a];
  };
}
var U3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, O0 = Fm(function(e) {
  return U3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function q3(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function W3(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var G3 = function() {
  function e(a) {
    var l = this;
    this._insertTag = function(u) {
      var c;
      l.tags.length === 0 ? l.insertionPoint ? c = l.insertionPoint.nextSibling : l.prepend ? c = l.container.firstChild : c = l.before : c = l.tags[l.tags.length - 1].nextSibling, l.container.insertBefore(u, c), l.tags.push(u);
    }, this.isSpeedy = a.speedy === void 0 ? !1 : a.speedy, this.tags = [], this.ctr = 0, this.nonce = a.nonce, this.key = a.key, this.container = a.container, this.prepend = a.prepend, this.insertionPoint = a.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(W3(this));
    var l = this.tags[this.tags.length - 1], u = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
    if (u && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !u, this.isSpeedy) {
      var c = q3(l);
      try {
        c.insertRule(a, c.cssRules.length);
      } catch (d) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) || console.error('There was a problem inserting the following rule: "' + a + '"', d);
      }
    } else
      l.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, e;
}(), yt = "-ms-", qi = "-moz-", ke = "-webkit-", T0 = "comm", F0 = "rule", R0 = "decl", K3 = "@import", Rm = "@keyframes", Y3 = "@layer", X3 = Math.abs, nu = String.fromCharCode, Q3 = Object.assign;
function J3(e, r) {
  return it(e, 0) ^ 45 ? (((r << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function Lm(e) {
  return e.trim();
}
function e4(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function _e(e, r, a) {
  return e.replace(r, a);
}
function Qc(e, r) {
  return e.indexOf(r);
}
function it(e, r) {
  return e.charCodeAt(r) | 0;
}
function Yo(e, r, a) {
  return e.slice(r, a);
}
function Tr(e) {
  return e.length;
}
function L0(e) {
  return e.length;
}
function Ci(e, r) {
  return r.push(e), e;
}
function t4(e, r) {
  return e.map(r).join("");
}
var au = 1, Pa = 1, Dm = 0, $t = 0, Ke = 0, Wa = "";
function ou(e, r, a, l, u, c, d) {
  return { value: e, root: r, parent: a, type: l, props: u, children: c, line: au, column: Pa, length: d, return: "" };
}
function No(e, r) {
  return Q3(ou("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function r4() {
  return Ke;
}
function n4() {
  return Ke = $t > 0 ? it(Wa, --$t) : 0, Pa--, Ke === 10 && (Pa = 1, au--), Ke;
}
function Wt() {
  return Ke = $t < Dm ? it(Wa, $t++) : 0, Pa++, Ke === 10 && (Pa = 1, au++), Ke;
}
function Br() {
  return it(Wa, $t);
}
function Di() {
  return $t;
}
function sl(e, r) {
  return Yo(Wa, e, r);
}
function Xo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Mm(e) {
  return au = Pa = 1, Dm = Tr(Wa = e), $t = 0, [];
}
function $m(e) {
  return Wa = "", e;
}
function Mi(e) {
  return Lm(sl($t - 1, Jc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function a4(e) {
  for (; (Ke = Br()) && Ke < 33; )
    Wt();
  return Xo(e) > 2 || Xo(Ke) > 3 ? "" : " ";
}
function o4(e, r) {
  for (; --r && Wt() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return sl(e, Di() + (r < 6 && Br() == 32 && Wt() == 32));
}
function Jc(e) {
  for (; Wt(); )
    switch (Ke) {
      case e:
        return $t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jc(Ke);
        break;
      case 40:
        e === 41 && Jc(e);
        break;
      case 92:
        Wt();
        break;
    }
  return $t;
}
function l4(e, r) {
  for (; Wt() && e + Ke !== 47 + 10 && !(e + Ke === 42 + 42 && Br() === 47); )
    ;
  return "/*" + sl(r, $t - 1) + "*" + nu(e === 47 ? e : Wt());
}
function i4(e) {
  for (; !Xo(Br()); )
    Wt();
  return sl(e, $t);
}
function u4(e) {
  return $m($i("", null, null, null, [""], e = Mm(e), 0, [0], e));
}
function $i(e, r, a, l, u, c, d, m, p) {
  for (var h = 0, y = 0, x = d, w = 0, v = 0, E = 0, b = 1, k = 1, A = 1, O = 0, C = "", _ = u, T = c, R = l, $ = C; k; )
    switch (E = O, O = Wt()) {
      case 40:
        if (E != 108 && it($, x - 1) == 58) {
          Qc($ += _e(Mi(O), "&", "&\f"), "&\f") != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Mi(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += a4(E);
        break;
      case 92:
        $ += o4(Di() - 1, 7);
        continue;
      case 47:
        switch (Br()) {
          case 42:
          case 47:
            Ci(s4(l4(Wt(), Di()), r, a), p);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * b:
        m[h++] = Tr($) * A;
      case 125 * b:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            k = 0;
          case 59 + y:
            A == -1 && ($ = _e($, /\f/g, "")), v > 0 && Tr($) - x && Ci(v > 32 ? Ef($ + ";", l, a, x - 1) : Ef(_e($, " ", "") + ";", l, a, x - 2), p);
            break;
          case 59:
            $ += ";";
          default:
            if (Ci(R = bf($, r, a, h, y, u, m, C, _ = [], T = [], x), c), O === 123)
              if (y === 0)
                $i($, r, R, R, _, c, x, m, T);
              else
                switch (w === 99 && it($, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $i(e, R, R, l && Ci(bf(e, R, R, 0, 0, u, m, C, u, _ = [], x), T), u, T, x, m, l ? _ : T);
                    break;
                  default:
                    $i($, R, R, R, [""], T, 0, m, T);
                }
        }
        h = y = v = 0, b = A = 1, C = $ = "", x = d;
        break;
      case 58:
        x = 1 + Tr($), v = E;
      default:
        if (b < 1) {
          if (O == 123)
            --b;
          else if (O == 125 && b++ == 0 && n4() == 125)
            continue;
        }
        switch ($ += nu(O), O * b) {
          case 38:
            A = y > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            m[h++] = (Tr($) - 1) * A, A = 1;
            break;
          case 64:
            Br() === 45 && ($ += Mi(Wt())), w = Br(), y = x = Tr(C = $ += i4(Di())), O++;
            break;
          case 45:
            E === 45 && Tr($) == 2 && (b = 0);
        }
    }
  return c;
}
function bf(e, r, a, l, u, c, d, m, p, h, y) {
  for (var x = u - 1, w = u === 0 ? c : [""], v = L0(w), E = 0, b = 0, k = 0; E < l; ++E)
    for (var A = 0, O = Yo(e, x + 1, x = X3(b = d[E])), C = e; A < v; ++A)
      (C = Lm(b > 0 ? w[A] + " " + O : _e(O, /&\f/g, w[A]))) && (p[k++] = C);
  return ou(e, r, a, u === 0 ? F0 : m, p, h, y);
}
function s4(e, r, a) {
  return ou(e, r, a, T0, nu(r4()), Yo(e, 2, -2), 0);
}
function Ef(e, r, a, l) {
  return ou(e, r, a, R0, Yo(e, 0, l), Yo(e, l + 1, -1), l);
}
function Ia(e, r) {
  for (var a = "", l = L0(e), u = 0; u < l; u++)
    a += r(e[u], u, e, r) || "";
  return a;
}
function c4(e, r, a, l) {
  switch (e.type) {
    case Y3:
      if (e.children.length)
        break;
    case K3:
    case R0:
      return e.return = e.return || e.value;
    case T0:
      return "";
    case Rm:
      return e.return = e.value + "{" + Ia(e.children, l) + "}";
    case F0:
      e.value = e.props.join(",");
  }
  return Tr(a = Ia(e.children, l)) ? e.return = e.value + "{" + a + "}" : "";
}
function d4(e) {
  var r = L0(e);
  return function(a, l, u, c) {
    for (var d = "", m = 0; m < r; m++)
      d += e[m](a, l, u, c) || "";
    return d;
  };
}
var xf = function(e) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(a) {
    if (r.has(a))
      return r.get(a);
    var l = e(a);
    return r.set(a, l), l;
  };
}, p4 = function(e, r, a) {
  for (var l = 0, u = 0; l = u, u = Br(), l === 38 && u === 12 && (r[a] = 1), !Xo(u); )
    Wt();
  return sl(e, $t);
}, f4 = function(e, r) {
  var a = -1, l = 44;
  do
    switch (Xo(l)) {
      case 0:
        l === 38 && Br() === 12 && (r[a] = 1), e[a] += p4($t - 1, r, a);
        break;
      case 2:
        e[a] += Mi(l);
        break;
      case 4:
        if (l === 44) {
          e[++a] = Br() === 58 ? "&\f" : "", r[a] = e[a].length;
          break;
        }
      default:
        e[a] += nu(l);
    }
  while (l = Wt());
  return e;
}, m4 = function(e, r) {
  return $m(f4(Mm(e), r));
}, wf = /* @__PURE__ */ new WeakMap(), g4 = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var r = e.value, a = e.parent, l = e.column === a.column && e.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !wf.get(a)) && !l) {
      wf.set(e, !0);
      for (var u = [], c = m4(r, u), d = a.props, m = 0, p = 0; m < c.length; m++)
        for (var h = 0; h < d.length; h++, p++)
          e.props[p] = u[m] ? c[m].replace(/&\f/g, d[h]) : d[h] + " " + c[m];
    }
  }
}, h4 = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, y4 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", v4 = function(e) {
  return e.type === "comm" && e.children.indexOf(y4) > -1;
}, b4 = function(e) {
  return function(r, a, l) {
    if (!(r.type !== "rule" || e.compat)) {
      var u = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (u) {
        for (var c = !!r.parent, d = c ? r.parent.children : l, m = d.length - 1; m >= 0; m--) {
          var p = d[m];
          if (p.line < r.line)
            break;
          if (p.column < r.column) {
            if (v4(p))
              return;
            break;
          }
        }
        u.forEach(function(h) {
          console.error('The pseudo class "' + h + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + h.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Bm = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, E4 = function(e, r) {
  for (var a = e - 1; a >= 0; a--)
    if (!Bm(r[a]))
      return !0;
  return !1;
}, Sf = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, x4 = function(e, r, a) {
  Bm(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Sf(e)) : E4(r, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Sf(e)));
};
function Im(e, r) {
  switch (J3(e, r)) {
    case 5103:
      return ke + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ke + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ke + e + qi + e + yt + e + e;
    case 6828:
    case 4268:
      return ke + e + yt + e + e;
    case 6165:
      return ke + e + yt + "flex-" + e + e;
    case 5187:
      return ke + e + _e(e, /(\w+).+(:[^]+)/, ke + "box-$1$2" + yt + "flex-$1$2") + e;
    case 5443:
      return ke + e + yt + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return ke + e + yt + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ke + e + yt + _e(e, "shrink", "negative") + e;
    case 5292:
      return ke + e + yt + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return ke + "box-" + _e(e, "-grow", "") + ke + e + yt + _e(e, "grow", "positive") + e;
    case 4554:
      return ke + _e(e, /([^-])(transform)/g, "$1" + ke + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, ke + "$1"), /(image-set)/, ke + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, ke + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, ke + "box-pack:$3" + yt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ke + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, ke + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Tr(e) - 1 - r > 6)
        switch (it(e, r + 1)) {
          case 109:
            if (it(e, r + 4) !== 45)
              break;
          case 102:
            return _e(e, /(.+:)(.+)-([^]+)/, "$1" + ke + "$2-$3$1" + qi + (it(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qc(e, "stretch") ? Im(_e(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (it(e, r + 1) !== 115)
        break;
    case 6444:
      switch (it(e, Tr(e) - 3 - (~Qc(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + ke) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ke + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ke + "$2$3$1" + yt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (it(e, r + 11)) {
        case 114:
          return ke + e + yt + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ke + e + yt + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ke + e + yt + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ke + e + yt + e + e;
  }
  return e;
}
var w4 = function(e, r, a, l) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case R0:
        e.return = Im(e.value, e.length);
        break;
      case Rm:
        return Ia([No(e, { value: _e(e.value, "@", "@" + ke) })], l);
      case F0:
        if (e.length)
          return t4(e.props, function(u) {
            switch (e4(u, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ia([No(e, { props: [_e(u, /:(read-\w+)/, ":" + qi + "$1")] })], l);
              case "::placeholder":
                return Ia([No(e, { props: [_e(u, /:(plac\w+)/, ":" + ke + "input-$1")] }), No(e, { props: [_e(u, /:(plac\w+)/, ":" + qi + "$1")] }), No(e, { props: [_e(u, /:(plac\w+)/, yt + "input-$1")] })], l);
            }
            return "";
          });
    }
}, S4 = [w4], A4 = function(e) {
  var r = e.key;
  if (!r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(E) {
      var b = E.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(E), E.setAttribute("data-s", ""));
    });
  }
  var l = e.stylisPlugins || S4;
  if (/[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var u = {}, c, d = [];
  c = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(E) {
    for (var b = E.getAttribute("data-emotion").split(" "), k = 1; k < b.length; k++)
      u[b[k]] = !0;
    d.push(E);
  });
  var m, p = [g4, h4];
  p.push(b4({ get compat() {
    return v.compat;
  } }), x4);
  {
    var h, y = [c4, function(E) {
      E.root || (E.return ? h.insert(E.return) : E.value && E.type !== T0 && h.insert(E.value + "{}"));
    }], x = d4(p.concat(l, y)), w = function(E) {
      return Ia(u4(E), x);
    };
    m = function(E, b, k, A) {
      h = k, b.map !== void 0 && (h = { insert: function(O) {
        k.insert(O + b.map);
      } }), w(E ? E + "{" + b.styles + "}" : b.styles), A && (v.inserted[b.name] = !0);
    };
  }
  var v = { key: r, sheet: new G3({ key: r, container: c, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: u, registered: {}, insert: m };
  return v.sheet.hydrate(d), v;
};
wm(Tm());
var C4 = !0;
function D0(e, r, a) {
  var l = "";
  return a.split(" ").forEach(function(u) {
    e[u] !== void 0 ? r.push(e[u] + ";") : l += u + " ";
  }), l;
}
var lu = function(e, r, a) {
  var l = e.key + "-" + r.name;
  (a === !1 || C4 === !1) && e.registered[l] === void 0 && (e.registered[l] = r.styles);
}, iu = function(e, r, a) {
  lu(e, r, a);
  var l = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var u = r;
    do
      e.insert(r === u ? "." + l : "", u, e.sheet, !0), u = u.next;
    while (u !== void 0);
  }
};
function k4(e) {
  for (var r = 0, a, l = 0, u = e.length; u >= 4; ++l, u -= 4)
    a = e.charCodeAt(l) & 255 | (e.charCodeAt(++l) & 255) << 8 | (e.charCodeAt(++l) & 255) << 16 | (e.charCodeAt(++l) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, r = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (u) {
    case 3:
      r ^= (e.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(l + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(l) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var _4 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Af = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, O4 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", T4 = /[A-Z]|^ms/g, Pm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, M0 = function(e) {
  return e.charCodeAt(1) === 45;
}, Cf = function(e) {
  return e != null && typeof e != "boolean";
}, hc = Fm(function(e) {
  return M0(e) ? e : e.replace(T4, "-$&").toLowerCase();
}), Wi = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Pm, function(a, l, u) {
          return Fr = { name: l, styles: u, next: Fr }, l;
        });
  }
  return _4[e] !== 1 && !M0(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
kf = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, _f = ["normal", "none", "initial", "inherit", "unset"], Of = Wi, Tf = /^-ms-/, Ff = /-(.)/g, yc = {}, Wi = function(e, r) {
  if (e === "content" && (typeof r != "string" || _f.indexOf(r) === -1 && !kf.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
  var a = Of(e, r);
  return a !== "" && !M0(e) && e.indexOf("-") !== -1 && yc[e] === void 0 && (yc[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Tf, "ms-").replace(Ff, function(l, u) {
    return u.toUpperCase();
  }) + "?")), a;
};
var kf, _f, Of, Tf, Ff, yc, Nm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Qo(e, r, a) {
  if (a == null)
    return "";
  if (a.__emotion_styles !== void 0) {
    if (a.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Nm);
    return a;
  }
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      if (a.anim === 1)
        return Fr = { name: a.name, styles: a.styles, next: Fr }, a.name;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Fr = { name: l.name, styles: l.styles, next: Fr }, l = l.next;
        var u = a.styles + ";";
        return a.map !== void 0 && (u += a.map), u;
      }
      return F4(e, r, a);
    }
    case "function": {
      if (e !== void 0) {
        var c = Fr, d = a(e);
        return Fr = c, Qo(e, r, d);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var m = [], p = a.replace(Pm, function(y, x, w) {
        var v = "animation" + m.length;
        return m.push("const " + v + " = keyframes`" + w.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
      });
      m.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(m, ["`" + p + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + p + "`"));
      break;
  }
  if (r == null)
    return a;
  var h = r[a];
  return h !== void 0 ? h : a;
}
function F4(e, r, a) {
  var l = "";
  if (Array.isArray(a))
    for (var u = 0; u < a.length; u++)
      l += Qo(e, r, a[u]) + ";";
  else
    for (var c in a) {
      var d = a[c];
      if (typeof d != "object")
        r != null && r[d] !== void 0 ? l += c + "{" + r[d] + "}" : Cf(d) && (l += hc(c) + ":" + Wi(c, d) + ";");
      else {
        if (c === "NO_COMPONENT_SELECTOR")
          throw new Error(Nm);
        if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
          for (var m = 0; m < d.length; m++)
            Cf(d[m]) && (l += hc(c) + ":" + Wi(c, d[m]) + ";");
        else {
          var p = Qo(e, r, d);
          switch (c) {
            case "animation":
            case "animationName": {
              l += hc(c) + ":" + p + ";";
              break;
            }
            default:
              c === "undefined" && console.error(O4), l += c + "{" + p + "}";
          }
        }
      }
    }
  return l;
}
var Rf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, jm;
jm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Fr, Na = function(e, r, a) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var l = !0, u = "";
  Fr = void 0;
  var c = e[0];
  c == null || c.raw === void 0 ? (l = !1, u += Qo(a, r, c)) : (c[0] === void 0 && console.error(Af), u += c[0]);
  for (var d = 1; d < e.length; d++)
    u += Qo(a, r, e[d]), l && (c[d] === void 0 && console.error(Af), u += c[d]);
  var m;
  u = u.replace(jm, function(x) {
    return m = x, "";
  }), Rf.lastIndex = 0;
  for (var p = "", h; (h = Rf.exec(u)) !== null; )
    p += "-" + h[1];
  var y = k4(u) + p;
  return { name: y, styles: u, map: m, next: Fr, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, R4 = {}.hasOwnProperty, $0 = D.createContext(typeof HTMLElement < "u" ? A4({ key: "css" }) : null);
$0.displayName = "EmotionCacheContext";
$0.Provider;
var uu = function(e) {
  return D.forwardRef(function(r, a) {
    var l = D.useContext($0);
    return e(r, l, a);
  });
}, Rn = D.createContext({});
Rn.displayName = "EmotionThemeContext";
var L4 = function() {
  return D.useContext(Rn);
}, D4 = function(e, r) {
  if (typeof r == "function") {
    var a = r(e);
    if (a == null || typeof a != "object" || Array.isArray(a))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return a;
  }
  if (r == null || typeof r != "object" || Array.isArray(r))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Fn({}, e, r);
}, M4 = xf(function(e) {
  return xf(function(r) {
    return D4(e, r);
  });
}), Hm = function(e) {
  var r = D.useContext(Rn);
  return e.theme !== r && (r = M4(r)(e.theme)), D.createElement(Rn.Provider, { value: r }, e.children);
}, Lf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Df = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", $4 = function(e) {
  var r = e.cache, a = e.serialized, l = e.isStringTag;
  return lu(r, a, l), _0(function() {
    return iu(r, a, l);
  }), null;
}, B4 = uu(function(e, r, a) {
  var l = e.css;
  typeof l == "string" && r.registered[l] !== void 0 && (l = r.registered[l]);
  var u = e[Lf], c = [l], d = "";
  typeof e.className == "string" ? d = D0(r.registered, c, e.className) : e.className != null && (d = e.className + " ");
  var m = Na(c, void 0, D.useContext(Rn));
  if (m.name.indexOf("-") === -1) {
    var p = e[Df];
    p && (m = Na([m, "label:" + p + ";"]));
  }
  d += r.key + "-" + m.name;
  var h = {};
  for (var y in e)
    R4.call(e, y) && y !== "css" && y !== Lf && y !== Df && (h[y] = e[y]);
  return h.ref = a, h.className = d, D.createElement(D.Fragment, null, D.createElement($4, { cache: r, serialized: m, isStringTag: typeof u == "string" }), D.createElement(u, h));
});
B4.displayName = "EmotionCssPropInternal";
wm(Tm());
var I4 = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, Mf = !1, P4 = uu(function(e, r) {
  !Mf && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Mf = !0);
  var a = e.styles, l = Na([a], void 0, D.useContext(Rn)), u = D.useRef();
  return vf(function() {
    var c = r.key + "-global", d = new r.sheet.constructor({ key: c, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy }), m = !1, p = document.querySelector('style[data-emotion="' + c + " " + l.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), p !== null && (m = !0, p.setAttribute("data-emotion", c), d.hydrate([p])), u.current = [d, m], function() {
      d.flush();
    };
  }, [r]), vf(function() {
    var c = u.current, d = c[0], m = c[1];
    if (m) {
      c[1] = !1;
      return;
    }
    if (l.next !== void 0 && iu(r, l.next, !0), d.tags.length) {
      var p = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = p, d.flush();
    }
    r.insert("", l, d, !1);
  }, [r, l.name]), null;
});
P4.displayName = "EmotionGlobal";
function B0() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return Na(r);
}
var Ga = function() {
  var e = B0.apply(void 0, arguments), r = "animation-" + e.name;
  return { name: r, styles: "@keyframes " + r + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, N4 = function e(r) {
  for (var a = r.length, l = 0, u = ""; l < a; l++) {
    var c = r[l];
    if (c != null) {
      var d = void 0;
      switch (typeof c) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(c))
            d = e(c);
          else {
            c.styles !== void 0 && c.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), d = "";
            for (var m in c)
              c[m] && m && (d && (d += " "), d += m);
          }
          break;
        }
        default:
          d = c;
      }
      d && (u && (u += " "), u += d);
    }
  }
  return u;
};
function j4(e, r, a) {
  var l = [], u = D0(e, l, a);
  return l.length < 2 ? a : u + r(l);
}
var H4 = function(e) {
  var r = e.cache, a = e.serializedArr;
  return _0(function() {
    for (var l = 0; l < a.length; l++)
      iu(r, a[l], !1);
  }), null;
}, Z4 = uu(function(e, r) {
  var a = !1, l = [], u = function() {
    if (a)
      throw new Error("css can only be used during render");
    for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++)
      h[y] = arguments[y];
    var x = Na(h, r.registered);
    return l.push(x), lu(r, x, !1), r.key + "-" + x.name;
  }, c = function() {
    if (a)
      throw new Error("cx can only be used during render");
    for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++)
      h[y] = arguments[y];
    return j4(r.registered, u, N4(h));
  }, d = { css: u, cx: c, theme: D.useContext(Rn) }, m = e.children(d);
  return a = !0, D.createElement(D.Fragment, null, D.createElement(H4, { cache: r, serializedArr: l }), m);
});
Z4.displayName = "EmotionClassNames";
vc = !0, $f = typeof jest < "u" || typeof vi < "u", vc && !$f && (bc = typeof globalThis < "u" ? globalThis : vc ? window : global, Ec = "__EMOTION_REACT_" + I4.version.split(".")[0] + "__", bc[Ec] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bc[Ec] = !0);
var vc, $f, bc, Ec, z4 = O0, V4 = function(e) {
  return e !== "theme";
}, Bf = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? z4 : V4;
}, If = function(e, r, a) {
  var l;
  if (r) {
    var u = r.shouldForwardProp;
    l = e.__emotion_forwardProp && u ? function(c) {
      return e.__emotion_forwardProp(c) && u(c);
    } : u;
  }
  return typeof l != "function" && a && (l = e.__emotion_forwardProp), l;
}, Pf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, U4 = function(e) {
  var r = e.cache, a = e.serialized, l = e.isStringTag;
  return lu(r, a, l), _0(function() {
    return iu(r, a, l);
  }), null;
}, q4 = function e(r, a) {
  if (r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var l = r.__emotion_real === r, u = l && r.__emotion_base || r, c, d;
  a !== void 0 && (c = a.label, d = a.target);
  var m = If(r, a, l), p = m || Bf(u), h = !p("as");
  return function() {
    var y = arguments, x = l && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && x.push("label:" + c + ";"), y[0] == null || y[0].raw === void 0)
      x.push.apply(x, y);
    else {
      y[0][0] === void 0 && console.error(Pf), x.push(y[0][0]);
      for (var w = y.length, v = 1; v < w; v++)
        y[0][v] === void 0 && console.error(Pf), x.push(y[v], y[0][v]);
    }
    var E = uu(function(b, k, A) {
      var O = h && b.as || u, C = "", _ = [], T = b;
      if (b.theme == null) {
        T = {};
        for (var R in b)
          T[R] = b[R];
        T.theme = D.useContext(Rn);
      }
      typeof b.className == "string" ? C = D0(k.registered, _, b.className) : b.className != null && (C = b.className + " ");
      var $ = Na(x.concat(_), k.registered, T);
      C += k.key + "-" + $.name, d !== void 0 && (C += " " + d);
      var M = h && m === void 0 ? Bf(O) : p, j = {};
      for (var Z in b)
        h && Z === "as" || M(Z) && (j[Z] = b[Z]);
      return j.className = C, j.ref = A, D.createElement(D.Fragment, null, D.createElement(U4, { cache: k, serialized: $, isStringTag: typeof O == "string" }), D.createElement(O, j));
    });
    return E.displayName = c !== void 0 ? c : "Styled(" + (typeof u == "string" ? u : u.displayName || u.name || "Component") + ")", E.defaultProps = r.defaultProps, E.__emotion_real = E, E.__emotion_base = u, E.__emotion_styles = x, E.__emotion_forwardProp = m, Object.defineProperty(E, "toString", { value: function() {
      return d === void 0 ? "NO_COMPONENT_SELECTOR" : "." + d;
    } }), E.withComponent = function(b, k) {
      return e(b, Fn({}, a, k, { shouldForwardProp: If(E, k, !0) })).apply(void 0, x);
    }, E;
  };
}, W4 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], P = q4.bind();
W4.forEach(function(e) {
  P[e] = P(e);
});
var G4 = la(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
la(1)(({ color: e, background: r, typography: a }) => {
  let l = G4({ typography: a });
  return { ...l, body: { ...l.body, color: e.defaultText, background: r.app, overflow: "hidden" }, hr: { ...l.hr, borderTop: `1px solid ${e.border}` } };
});
var K4 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, Y4 = Ga`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, Zm = Ga`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, X4 = Ga`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, Q4 = Ga`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, J4 = B0`
  animation: ${Zm} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, eb = B0`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, tb = { rotate360: Y4, glow: Zm, float: X4, jiggle: Q4, inlineGlow: J4, hoverable: eb }, rb = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, nb = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, ab = (e) => Object.entries(e).reduce((r, [a, l]) => ({ ...r, [a]: $3(l) }), {}), ob = ({ colors: e, mono: r }) => {
  let a = ab(e);
  return { token: { fontFamily: r, WebkitFontSmoothing: "antialiased", "&.tag": a.red3, "&.comment": { ...a.green1, fontStyle: "italic" }, "&.prolog": { ...a.green1, fontStyle: "italic" }, "&.doctype": { ...a.green1, fontStyle: "italic" }, "&.cdata": { ...a.green1, fontStyle: "italic" }, "&.string": a.red1, "&.url": a.cyan1, "&.symbol": a.cyan1, "&.number": a.cyan1, "&.boolean": a.cyan1, "&.variable": a.cyan1, "&.constant": a.cyan1, "&.inserted": a.cyan1, "&.atrule": a.blue1, "&.keyword": a.blue1, "&.attr-value": a.blue1, "&.punctuation": a.gray1, "&.operator": a.gray1, "&.function": a.gray1, "&.deleted": a.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": a.cyan2, "&.selector": a.red3, "&.attr-name": a.red4, "&.property": a.red4, "&.regex": a.red4, "&.entity": a.red4, "&.directive.tag .tag": { background: "#ffff00", ...a.gray1 } }, "language-json .token.boolean": a.blue1, "language-json .token.number": a.blue1, "language-json .token.property": a.cyan2, namespace: { opacity: 0.7 } };
}, lb = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, ib = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, ub = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: xe.tertiary, ancillary: xe.ancillary, orange: xe.orange, gold: xe.gold, green: xe.green, seafoam: xe.seafoam, purple: xe.purple, ultraviolet: xe.ultraviolet, lightest: xe.lightest, lighter: xe.lighter, light: xe.light, mediumlight: xe.mediumlight, medium: xe.medium, mediumdark: xe.mediumdark, dark: xe.dark, darker: xe.darker, darkest: xe.darkest, border: xe.border, positive: xe.positive, negative: xe.negative, warning: xe.warning, critical: xe.critical, defaultText: e.textColor || xe.darkest, inverseText: e.textInverseColor || xe.lightest, positiveText: xe.positiveText, negativeText: xe.negativeText, warningText: xe.warningText }), e0 = (e = Xc[km()]) => {
  let { base: r, colorPrimary: a, colorSecondary: l, appBg: u, appContentBg: c, appBorderColor: d, appBorderRadius: m, fontBase: p, fontCode: h, textColor: y, textInverseColor: x, barTextColor: w, barSelectedColor: v, barBg: E, buttonBg: b, buttonBorder: k, booleanBg: A, booleanSelectedBg: O, inputBg: C, inputBorder: _, inputTextColor: T, inputBorderRadius: R, brandTitle: $, brandUrl: M, brandImage: j, brandTarget: Z, gridCellSize: V, ...Q } = e;
  return { ...Q, base: r, color: ub(e), background: { app: u, bar: E, content: c, gridCellSize: V || On.gridCellSize, hoverable: On.hoverable, positive: On.positive, negative: On.negative, warning: On.warning, critical: On.critical }, typography: { fonts: { base: p, mono: h }, weight: Dr.weight, size: Dr.size }, animation: tb, easing: K4, input: { background: C, border: _, borderRadius: R, color: T }, button: { background: b || C, border: k || _ }, boolean: { background: A || _, selectedBackground: O || C }, layoutMargin: 10, appBorderColor: d, appBorderRadius: m, barTextColor: w, barSelectedColor: v || l, barBg: E, brand: { title: $, url: M, image: j || ($ ? null : void 0), target: Z }, code: ob({ colors: r === "light" ? lb : ib, mono: h }), addonActionsTheme: { ...r === "light" ? nb : rb, BASE_FONT_FAMILY: h, BASE_FONT_SIZE: Dr.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: y, ARROW_COLOR: O3(0.2, d), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: h, TREENODE_FONT_SIZE: Dr.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, sb = (e) => Object.keys(e).length === 0, xc = (e) => e != null && typeof e == "object", cb = (e, ...r) => Object.prototype.hasOwnProperty.call(e, ...r), db = () => /* @__PURE__ */ Object.create(null), zm = (e, r) => e === r || !xc(e) || !xc(r) ? {} : Object.keys(e).reduce((a, l) => {
  if (cb(r, l)) {
    let u = zm(e[l], r[l]);
    return xc(u) && sb(u) || (a[l] = u), a;
  }
  return a[l] = void 0, a;
}, db()), pb = zm;
function fb(e) {
  for (var r = [], a = 1; a < arguments.length; a++)
    r[a - 1] = arguments[a];
  var l = Array.from(typeof e == "string" ? [e] : e);
  l[l.length - 1] = l[l.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var u = l.reduce(function(m, p) {
    var h = p.match(/\n([\t ]+|(?!\s).)/g);
    return h ? m.concat(h.map(function(y) {
      var x, w;
      return (w = (x = y.match(/[\t ]/g)) === null || x === void 0 ? void 0 : x.length) !== null && w !== void 0 ? w : 0;
    })) : m;
  }, []);
  if (u.length) {
    var c = new RegExp(`
[	 ]{` + Math.min.apply(Math, u) + "}", "g");
    l = l.map(function(m) {
      return m.replace(c, `
`);
    });
  }
  l[0] = l[0].replace(/^\r?\n/, "");
  var d = l[0];
  return r.forEach(function(m, p) {
    var h = d.match(/(?:^|\n)( *)$/), y = h ? h[1] : "", x = m;
    typeof m == "string" && m.includes(`
`) && (x = String(m).split(`
`).map(function(w, v) {
      return v === 0 ? w : "" + y + w;
    }).join(`
`)), d += x + l[p + 1];
  }), d;
}
var mb = (e) => {
  if (!e)
    return e0(Ui);
  let r = pb(Ui, e);
  return Object.keys(r).length && Z3.warn(fb`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, r), e0(e);
}, t0 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function I0(e, r) {
  if (e == null)
    return {};
  var a = {}, l = Object.keys(e), u, c;
  for (c = 0; c < l.length; c++)
    u = l[c], !(r.indexOf(u) >= 0) && (a[u] = e[u]);
  return a;
}
var gb = Object.create, Vm = Object.defineProperty, hb = Object.getOwnPropertyDescriptor, Um = Object.getOwnPropertyNames, yb = Object.getPrototypeOf, vb = Object.prototype.hasOwnProperty, be = (e, r) => function() {
  return r || (0, e[Um(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, bb = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of Um(r))
      !vb.call(e, u) && u !== a && Vm(e, u, { get: () => r[u], enumerable: !(l = hb(r, u)) || l.enumerable });
  return e;
}, Kt = (e, r, a) => (a = e != null ? gb(yb(e)) : {}, bb(r || !e || !e.__esModule ? Vm(a, "default", { value: e, enumerable: !0 }) : a, e)), Eb = be({ "../../node_modules/refractor/lang/markdown.js"(e, r) {
  r.exports = a, a.displayName = "markdown", a.aliases = ["md"];
  function a(l) {
    (function(u) {
      var c = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function d(E) {
        return E = E.replace(/<inner>/g, function() {
          return c;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + E + ")");
      }
      var m = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, p = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return m;
      }), h = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      u.languages.markdown = u.languages.extend("markup", {}), u.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: u.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + p + h + "(?:" + p + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + p + h + ")(?:" + p + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(m), inside: u.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + p + ")" + h + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + p + "$"), inside: { "table-header": { pattern: RegExp(m), alias: "important", inside: u.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: d(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(E) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(b) {
          E !== b && (u.languages.markdown[E].inside.content.inside[b] = u.languages.markdown[b]);
        });
      }), u.hooks.add("after-tokenize", function(E) {
        if (E.language !== "markdown" && E.language !== "md")
          return;
        function b(k) {
          if (!(!k || typeof k == "string"))
            for (var A = 0, O = k.length; A < O; A++) {
              var C = k[A];
              if (C.type !== "code") {
                b(C.content);
                continue;
              }
              var _ = C.content[1], T = C.content[3];
              if (_ && T && _.type === "code-language" && T.type === "code-block" && typeof _.content == "string") {
                var R = _.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                R = (/[a-z][\w-]*/i.exec(R) || [""])[0].toLowerCase();
                var $ = "language-" + R;
                T.alias ? typeof T.alias == "string" ? T.alias = [T.alias, $] : T.alias.push($) : T.alias = [$];
              }
            }
        }
        b(E.tokens);
      }), u.hooks.add("wrap", function(E) {
        if (E.type === "code-block") {
          for (var b = "", k = 0, A = E.classes.length; k < A; k++) {
            var O = E.classes[k], C = /language-(.+)/.exec(O);
            if (C) {
              b = C[1];
              break;
            }
          }
          var _ = u.languages[b];
          if (_)
            E.content = u.highlight(v(E.content.value), _, b);
          else if (b && b !== "none" && u.plugins.autoloader) {
            var T = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            E.attributes.id = T, u.plugins.autoloader.loadLanguages(b, function() {
              var R = document.getElementById(T);
              R && (R.innerHTML = u.highlight(R.textContent, u.languages[b], b));
            });
          }
        }
      });
      var y = RegExp(u.languages.markup.tag.pattern.source, "gi"), x = { amp: "&", lt: "<", gt: ">", quot: '"' }, w = String.fromCodePoint || String.fromCharCode;
      function v(E) {
        var b = E.replace(y, "");
        return b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(k, A) {
          if (A = A.toLowerCase(), A[0] === "#") {
            var O;
            return A[1] === "x" ? O = parseInt(A.slice(2), 16) : O = Number(A.slice(1)), w(O);
          } else {
            var C = x[A];
            return C || k;
          }
        }), b;
      }
      u.languages.md = u.languages.markdown;
    })(l);
  }
} }), xb = be({ "../../node_modules/refractor/lang/yaml.js"(e, r) {
  r.exports = a, a.displayName = "yaml", a.aliases = ["yml"];
  function a(l) {
    (function(u) {
      var c = /[*&][^\s[\]{},]+/, d = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, m = "(?:" + d.source + "(?:[ 	]+" + c.source + ")?|" + c.source + "(?:[ 	]+" + d.source + ")?)", p = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), h = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function y(x, w) {
        w = (w || "").replace(/m/g, "") + "m";
        var v = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return m;
        }).replace(/<<value>>/g, function() {
          return x;
        });
        return RegExp(v, w);
      }
      u.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return m;
      })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return m;
      }).replace(/<<key>>/g, function() {
        return "(?:" + p + "|" + h + ")";
      })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: y(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: y(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: y(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: y(h), lookbehind: !0, greedy: !0 }, number: { pattern: y(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: d, important: c, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, u.languages.yml = u.languages.yaml;
    })(l);
  }
} }), qm = be({ "../../node_modules/refractor/lang/typescript.js"(e, r) {
  r.exports = a, a.displayName = "typescript", a.aliases = ["ts"];
  function a(l) {
    (function(u) {
      u.languages.typescript = u.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), u.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete u.languages.typescript.parameter, delete u.languages.typescript["literal-property"];
      var c = u.languages.extend("typescript", {});
      delete c["class-name"], u.languages.typescript["class-name"].inside = c, u.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: c } } } }), u.languages.ts = u.languages.typescript;
    })(l);
  }
} }), Wm = be({ "../../node_modules/refractor/lang/jsx.js"(e, r) {
  r.exports = a, a.displayName = "jsx", a.aliases = [];
  function a(l) {
    (function(u) {
      var c = u.util.clone(u.languages.javascript), d = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, m = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, p = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function h(w, v) {
        return w = w.replace(/<S>/g, function() {
          return d;
        }).replace(/<BRACES>/g, function() {
          return m;
        }).replace(/<SPREAD>/g, function() {
          return p;
        }), RegExp(w, v);
      }
      p = h(p).source, u.languages.jsx = u.languages.extend("markup", c), u.languages.jsx.tag.pattern = h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), u.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, u.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, u.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, u.languages.jsx.tag.inside.comment = c.comment, u.languages.insertBefore("inside", "attr-name", { spread: { pattern: h(/<SPREAD>/.source), inside: u.languages.jsx } }, u.languages.jsx.tag), u.languages.insertBefore("inside", "special-attr", { script: { pattern: h(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: u.languages.jsx } } }, u.languages.jsx.tag);
      var y = function(w) {
        return w ? typeof w == "string" ? w : typeof w.content == "string" ? w.content : w.content.map(y).join("") : "";
      }, x = function(w) {
        for (var v = [], E = 0; E < w.length; E++) {
          var b = w[E], k = !1;
          if (typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? v.length > 0 && v[v.length - 1].tagName === y(b.content[0].content[1]) && v.pop() : b.content[b.content.length - 1].content === "/>" || v.push({ tagName: y(b.content[0].content[1]), openedBraces: 0 }) : v.length > 0 && b.type === "punctuation" && b.content === "{" ? v[v.length - 1].openedBraces++ : v.length > 0 && v[v.length - 1].openedBraces > 0 && b.type === "punctuation" && b.content === "}" ? v[v.length - 1].openedBraces-- : k = !0), (k || typeof b == "string") && v.length > 0 && v[v.length - 1].openedBraces === 0) {
            var A = y(b);
            E < w.length - 1 && (typeof w[E + 1] == "string" || w[E + 1].type === "plain-text") && (A += y(w[E + 1]), w.splice(E + 1, 1)), E > 0 && (typeof w[E - 1] == "string" || w[E - 1].type === "plain-text") && (A = y(w[E - 1]) + A, w.splice(E - 1, 1), E--), w[E] = new u.Token("plain-text", A, null, A);
          }
          b.content && typeof b.content != "string" && x(b.content);
        }
      };
      u.hooks.add("after-tokenize", function(w) {
        w.language !== "jsx" && w.language !== "tsx" || x(w.tokens);
      });
    })(l);
  }
} }), wb = be({ "../../node_modules/refractor/lang/tsx.js"(e, r) {
  var a = Wm(), l = qm();
  r.exports = u, u.displayName = "tsx", u.aliases = [];
  function u(c) {
    c.register(a), c.register(l), function(d) {
      var m = d.util.clone(d.languages.typescript);
      d.languages.tsx = d.languages.extend("jsx", m), delete d.languages.tsx.parameter, delete d.languages.tsx["literal-property"];
      var p = d.languages.tsx.tag;
      p.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + p.pattern.source + ")", p.pattern.flags), p.lookbehind = !0;
    }(c);
  }
} }), Sb = be({ "../../node_modules/refractor/lang/clike.js"(e, r) {
  r.exports = a, a.displayName = "clike", a.aliases = [];
  function a(l) {
    l.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), Ab = be({ "../../node_modules/refractor/lang/javascript.js"(e, r) {
  r.exports = a, a.displayName = "javascript", a.aliases = ["js"];
  function a(l) {
    l.languages.javascript = l.languages.extend("clike", { "class-name": [l.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), l.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, l.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: l.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: l.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: l.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: l.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: l.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), l.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: l.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), l.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), l.languages.markup && (l.languages.markup.tag.addInlined("script", "javascript"), l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), l.languages.js = l.languages.javascript;
  }
} }), Gm = be({ "../../node_modules/refractor/lang/css.js"(e, r) {
  r.exports = a, a.displayName = "css", a.aliases = [];
  function a(l) {
    (function(u) {
      var c = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      u.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + c.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + c.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + c.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: c, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, u.languages.css.atrule.inside.rest = u.languages.css;
      var d = u.languages.markup;
      d && (d.tag.addInlined("style", "css"), d.tag.addAttribute("style", "css"));
    })(l);
  }
} }), Km = be({ "../../node_modules/refractor/lang/markup.js"(e, r) {
  r.exports = a, a.displayName = "markup", a.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function a(l) {
    l.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, l.languages.markup.tag.inside["attr-value"].inside.entity = l.languages.markup.entity, l.languages.markup.doctype.inside["internal-subset"].inside = l.languages.markup, l.hooks.add("wrap", function(u) {
      u.type === "entity" && (u.attributes.title = u.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(l.languages.markup.tag, "addInlined", { value: function(u, c) {
      var d = {};
      d["language-" + c] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: l.languages[c] }, d.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var m = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: d } };
      m["language-" + c] = { pattern: /[\s\S]+/, inside: l.languages[c] };
      var p = {};
      p[u] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return u;
      }), "i"), lookbehind: !0, greedy: !0, inside: m }, l.languages.insertBefore("markup", "cdata", p);
    } }), Object.defineProperty(l.languages.markup.tag, "addAttribute", { value: function(u, c) {
      l.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + u + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [c, "language-" + c], inside: l.languages[c] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), l.languages.html = l.languages.markup, l.languages.mathml = l.languages.markup, l.languages.svg = l.languages.markup, l.languages.xml = l.languages.extend("markup", {}), l.languages.ssml = l.languages.xml, l.languages.atom = l.languages.xml, l.languages.rss = l.languages.xml;
  }
} }), Cb = be({ "../../node_modules/xtend/immutable.js"(e, r) {
  r.exports = l;
  var a = Object.prototype.hasOwnProperty;
  function l() {
    for (var u = {}, c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      for (var m in d)
        a.call(d, m) && (u[m] = d[m]);
    }
    return u;
  }
} }), Ym = be({ "../../node_modules/property-information/lib/util/schema.js"(e, r) {
  r.exports = l;
  var a = l.prototype;
  a.space = null, a.normal = {}, a.property = {};
  function l(u, c, d) {
    this.property = u, this.normal = c, d && (this.space = d);
  }
} }), kb = be({ "../../node_modules/property-information/lib/util/merge.js"(e, r) {
  var a = Cb(), l = Ym();
  r.exports = u;
  function u(c) {
    for (var d = c.length, m = [], p = [], h = -1, y, x; ++h < d; )
      y = c[h], m.push(y.property), p.push(y.normal), x = y.space;
    return new l(a.apply(null, m), a.apply(null, p), x);
  }
} }), P0 = be({ "../../node_modules/property-information/normalize.js"(e, r) {
  r.exports = a;
  function a(l) {
    return l.toLowerCase();
  }
} }), Xm = be({ "../../node_modules/property-information/lib/util/info.js"(e, r) {
  r.exports = l;
  var a = l.prototype;
  a.space = null, a.attribute = null, a.property = null, a.boolean = !1, a.booleanish = !1, a.overloadedBoolean = !1, a.number = !1, a.commaSeparated = !1, a.spaceSeparated = !1, a.commaOrSpaceSeparated = !1, a.mustUseProperty = !1, a.defined = !1;
  function l(u, c) {
    this.property = u, this.attribute = c;
  }
} }), N0 = be({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var r = 0;
  e.boolean = a(), e.booleanish = a(), e.overloadedBoolean = a(), e.number = a(), e.spaceSeparated = a(), e.commaSeparated = a(), e.commaOrSpaceSeparated = a();
  function a() {
    return Math.pow(2, ++r);
  }
} }), Qm = be({ "../../node_modules/property-information/lib/util/defined-info.js"(e, r) {
  var a = Xm(), l = N0();
  r.exports = d, d.prototype = new a(), d.prototype.defined = !0;
  var u = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], c = u.length;
  function d(p, h, y, x) {
    var w = -1, v;
    for (m(this, "space", x), a.call(this, p, h); ++w < c; )
      v = u[w], m(this, v, (y & l[v]) === l[v]);
  }
  function m(p, h, y) {
    y && (p[h] = y);
  }
} }), cl = be({ "../../node_modules/property-information/lib/util/create.js"(e, r) {
  var a = P0(), l = Ym(), u = Qm();
  r.exports = c;
  function c(d) {
    var m = d.space, p = d.mustUseProperty || [], h = d.attributes || {}, y = d.properties, x = d.transform, w = {}, v = {}, E, b;
    for (E in y)
      b = new u(E, x(h, E), y[E], m), p.indexOf(E) !== -1 && (b.mustUseProperty = !0), w[E] = b, v[a(E)] = E, v[a(b.attribute)] = E;
    return new l(w, v, m);
  }
} }), _b = be({ "../../node_modules/property-information/lib/xlink.js"(e, r) {
  var a = cl();
  r.exports = a({ space: "xlink", transform: l, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function l(u, c) {
    return "xlink:" + c.slice(5).toLowerCase();
  }
} }), Ob = be({ "../../node_modules/property-information/lib/xml.js"(e, r) {
  var a = cl();
  r.exports = a({ space: "xml", transform: l, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function l(u, c) {
    return "xml:" + c.slice(3).toLowerCase();
  }
} }), Tb = be({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, r) {
  r.exports = a;
  function a(l, u) {
    return u in l ? l[u] : u;
  }
} }), Jm = be({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, r) {
  var a = Tb();
  r.exports = l;
  function l(u, c) {
    return a(u, c.toLowerCase());
  }
} }), Fb = be({ "../../node_modules/property-information/lib/xmlns.js"(e, r) {
  var a = cl(), l = Jm();
  r.exports = a({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: l, properties: { xmlns: null, xmlnsXLink: null } });
} }), Rb = be({ "../../node_modules/property-information/lib/aria.js"(e, r) {
  var a = N0(), l = cl(), u = a.booleanish, c = a.number, d = a.spaceSeparated;
  r.exports = l({ transform: m, properties: { ariaActiveDescendant: null, ariaAtomic: u, ariaAutoComplete: null, ariaBusy: u, ariaChecked: u, ariaColCount: c, ariaColIndex: c, ariaColSpan: c, ariaControls: d, ariaCurrent: null, ariaDescribedBy: d, ariaDetails: null, ariaDisabled: u, ariaDropEffect: d, ariaErrorMessage: null, ariaExpanded: u, ariaFlowTo: d, ariaGrabbed: u, ariaHasPopup: null, ariaHidden: u, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: d, ariaLevel: c, ariaLive: null, ariaModal: u, ariaMultiLine: u, ariaMultiSelectable: u, ariaOrientation: null, ariaOwns: d, ariaPlaceholder: null, ariaPosInSet: c, ariaPressed: u, ariaReadOnly: u, ariaRelevant: null, ariaRequired: u, ariaRoleDescription: d, ariaRowCount: c, ariaRowIndex: c, ariaRowSpan: c, ariaSelected: u, ariaSetSize: c, ariaSort: null, ariaValueMax: c, ariaValueMin: c, ariaValueNow: c, ariaValueText: null, role: null } });
  function m(p, h) {
    return h === "role" ? h : "aria-" + h.slice(4).toLowerCase();
  }
} }), Lb = be({ "../../node_modules/property-information/lib/html.js"(e, r) {
  var a = N0(), l = cl(), u = Jm(), c = a.boolean, d = a.overloadedBoolean, m = a.booleanish, p = a.number, h = a.spaceSeparated, y = a.commaSeparated;
  r.exports = l({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: u, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: y, acceptCharset: h, accessKey: h, action: null, allow: null, allowFullScreen: c, allowPaymentRequest: c, allowUserMedia: c, alt: null, as: null, async: c, autoCapitalize: null, autoComplete: h, autoFocus: c, autoPlay: c, capture: c, charSet: null, checked: c, cite: null, className: h, cols: p, colSpan: null, content: null, contentEditable: m, controls: c, controlsList: h, coords: p | y, crossOrigin: null, data: null, dateTime: null, decoding: null, default: c, defer: c, dir: null, dirName: null, disabled: c, download: d, draggable: m, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: c, formTarget: null, headers: h, height: p, hidden: c, high: p, href: null, hrefLang: null, htmlFor: h, httpEquiv: h, id: null, imageSizes: null, imageSrcSet: y, inputMode: null, integrity: null, is: null, isMap: c, itemId: null, itemProp: h, itemRef: h, itemScope: c, itemType: h, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: c, low: p, manifest: null, max: null, maxLength: p, media: null, method: null, min: null, minLength: p, multiple: c, muted: c, name: null, nonce: null, noModule: c, noValidate: c, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: c, optimum: p, pattern: null, ping: h, placeholder: null, playsInline: c, poster: null, preload: null, readOnly: c, referrerPolicy: null, rel: h, required: c, reversed: c, rows: p, rowSpan: p, sandbox: h, scope: null, scoped: c, seamless: c, selected: c, shape: null, size: p, sizes: null, slot: null, span: p, spellCheck: m, src: null, srcDoc: null, srcLang: null, srcSet: y, start: p, step: null, style: null, tabIndex: p, target: null, title: null, translate: null, type: null, typeMustMatch: c, useMap: null, value: m, width: p, wrap: null, align: null, aLink: null, archive: h, axis: null, background: null, bgColor: null, border: p, borderColor: null, bottomMargin: p, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: c, declare: c, event: null, face: null, frame: null, frameBorder: null, hSpace: p, leftMargin: p, link: null, longDesc: null, lowSrc: null, marginHeight: p, marginWidth: p, noResize: c, noHref: c, noShade: c, noWrap: c, object: null, profile: null, prompt: null, rev: null, rightMargin: p, rules: null, scheme: null, scrolling: m, standby: null, summary: null, text: null, topMargin: p, valueType: null, version: null, vAlign: null, vLink: null, vSpace: p, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: c, disableRemotePlayback: c, prefix: null, property: null, results: p, security: null, unselectable: null } });
} }), Db = be({ "../../node_modules/property-information/html.js"(e, r) {
  var a = kb(), l = _b(), u = Ob(), c = Fb(), d = Rb(), m = Lb();
  r.exports = a([u, l, c, d, m]);
} }), Mb = be({ "../../node_modules/property-information/find.js"(e, r) {
  var a = P0(), l = Qm(), u = Xm(), c = "data";
  r.exports = h;
  var d = /^data[-\w.:]+$/i, m = /-[a-z]/g, p = /[A-Z]/g;
  function h(E, b) {
    var k = a(b), A = b, O = u;
    return k in E.normal ? E.property[E.normal[k]] : (k.length > 4 && k.slice(0, 4) === c && d.test(b) && (b.charAt(4) === "-" ? A = y(b) : b = x(b), O = l), new O(A, b));
  }
  function y(E) {
    var b = E.slice(5).replace(m, v);
    return c + b.charAt(0).toUpperCase() + b.slice(1);
  }
  function x(E) {
    var b = E.slice(4);
    return m.test(b) ? E : (b = b.replace(p, w), b.charAt(0) !== "-" && (b = "-" + b), c + b);
  }
  function w(E) {
    return "-" + E.toLowerCase();
  }
  function v(E) {
    return E.charAt(1).toUpperCase();
  }
} }), $b = be({ "../../node_modules/hast-util-parse-selector/index.js"(e, r) {
  r.exports = l;
  var a = /[#.]/g;
  function l(u, c) {
    for (var d = u || "", m = c || "div", p = {}, h = 0, y, x, w; h < d.length; )
      a.lastIndex = h, w = a.exec(d), y = d.slice(h, w ? w.index : d.length), y && (x ? x === "#" ? p.id = y : p.className ? p.className.push(y) : p.className = [y] : m = y, h += y.length), w && (x = w[0], h++);
    return { type: "element", tagName: m, properties: p, children: [] };
  }
} }), Bb = be({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = u, e.stringify = c;
  var r = "", a = " ", l = /[ \t\n\r\f]+/g;
  function u(d) {
    var m = String(d || r).trim();
    return m === r ? [] : m.split(l);
  }
  function c(d) {
    return d.join(a).trim();
  }
} }), Ib = be({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = u, e.stringify = c;
  var r = ",", a = " ", l = "";
  function u(d) {
    for (var m = [], p = String(d || l), h = p.indexOf(r), y = 0, x = !1, w; !x; )
      h === -1 && (h = p.length, x = !0), w = p.slice(y, h).trim(), (w || !x) && m.push(w), y = h + 1, h = p.indexOf(r, y);
    return m;
  }
  function c(d, m) {
    var p = m || {}, h = p.padLeft === !1 ? l : a, y = p.padRight ? a : l;
    return d[d.length - 1] === l && (d = d.concat(l)), d.join(y + r + h).trim();
  }
} }), Pb = be({ "../../node_modules/hastscript/factory.js"(e, r) {
  var a = Mb(), l = P0(), u = $b(), c = Bb().parse, d = Ib().parse;
  r.exports = p;
  var m = {}.hasOwnProperty;
  function p(k, A, O) {
    var C = O ? b(O) : null;
    return _;
    function _(R, $) {
      var M = u(R, A), j = Array.prototype.slice.call(arguments, 2), Z = M.tagName.toLowerCase(), V;
      if (M.tagName = C && m.call(C, Z) ? C[Z] : Z, $ && h($, M) && (j.unshift($), $ = null), $)
        for (V in $)
          T(M.properties, V, $[V]);
      return x(M.children, j), M.tagName === "template" && (M.content = { type: "root", children: M.children }, M.children = []), M;
    }
    function T(R, $, M) {
      var j, Z, V;
      M == null || M !== M || (j = a(k, $), Z = j.property, V = M, typeof V == "string" && (j.spaceSeparated ? V = c(V) : j.commaSeparated ? V = d(V) : j.commaOrSpaceSeparated && (V = c(d(V).join(" ")))), Z === "style" && typeof M != "string" && (V = E(V)), Z === "className" && R.className && (V = R.className.concat(V)), R[Z] = w(j, Z, V));
    }
  }
  function h(k, A) {
    return typeof k == "string" || "length" in k || y(A.tagName, k);
  }
  function y(k, A) {
    var O = A.type;
    return k === "input" || !O || typeof O != "string" ? !1 : typeof A.children == "object" && "length" in A.children ? !0 : (O = O.toLowerCase(), k === "button" ? O !== "menu" && O !== "submit" && O !== "reset" && O !== "button" : "value" in A);
  }
  function x(k, A) {
    var O, C;
    if (typeof A == "string" || typeof A == "number") {
      k.push({ type: "text", value: String(A) });
      return;
    }
    if (typeof A == "object" && "length" in A) {
      for (O = -1, C = A.length; ++O < C; )
        x(k, A[O]);
      return;
    }
    if (typeof A != "object" || !("type" in A))
      throw new Error("Expected node, nodes, or string, got `" + A + "`");
    k.push(A);
  }
  function w(k, A, O) {
    var C, _, T;
    if (typeof O != "object" || !("length" in O))
      return v(k, A, O);
    for (_ = O.length, C = -1, T = []; ++C < _; )
      T[C] = v(k, A, O[C]);
    return T;
  }
  function v(k, A, O) {
    var C = O;
    return k.number || k.positiveNumber ? !isNaN(C) && C !== "" && (C = Number(C)) : (k.boolean || k.overloadedBoolean) && typeof C == "string" && (C === "" || l(O) === l(A)) && (C = !0), C;
  }
  function E(k) {
    var A = [], O;
    for (O in k)
      A.push([O, k[O]].join(": "));
    return A.join("; ");
  }
  function b(k) {
    for (var A = k.length, O = -1, C = {}, _; ++O < A; )
      _ = k[O], C[_.toLowerCase()] = _;
    return C;
  }
} }), Nb = be({ "../../node_modules/hastscript/html.js"(e, r) {
  var a = Db(), l = Pb(), u = l(a, "div");
  u.displayName = "html", r.exports = u;
} }), jb = be({ "../../node_modules/hastscript/index.js"(e, r) {
  r.exports = Nb();
} }), Hb = be({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, r) {
  r.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), Zb = be({ "../../node_modules/character-reference-invalid/index.json"(e, r) {
  r.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), e5 = be({ "../../node_modules/is-decimal/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var u = typeof l == "string" ? l.charCodeAt(0) : l;
    return u >= 48 && u <= 57;
  }
} }), zb = be({ "../../node_modules/is-hexadecimal/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var u = typeof l == "string" ? l.charCodeAt(0) : l;
    return u >= 97 && u <= 102 || u >= 65 && u <= 70 || u >= 48 && u <= 57;
  }
} }), Vb = be({ "../../node_modules/is-alphabetical/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var u = typeof l == "string" ? l.charCodeAt(0) : l;
    return u >= 97 && u <= 122 || u >= 65 && u <= 90;
  }
} }), Ub = be({ "../../node_modules/is-alphanumerical/index.js"(e, r) {
  var a = Vb(), l = e5();
  r.exports = u;
  function u(c) {
    return a(c) || l(c);
  }
} }), qb = be({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, r) {
  r.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), Wb = be({ "../../node_modules/parse-entities/decode-entity.js"(e, r) {
  var a = qb();
  r.exports = u;
  var l = {}.hasOwnProperty;
  function u(c) {
    return l.call(a, c) ? a[c] : !1;
  }
} }), Gb = be({ "../../node_modules/parse-entities/index.js"(e, r) {
  var a = Hb(), l = Zb(), u = e5(), c = zb(), d = Ub(), m = Wb();
  r.exports = U;
  var p = {}.hasOwnProperty, h = String.fromCharCode, y = Function.prototype, x = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, w = 9, v = 10, E = 12, b = 32, k = 38, A = 59, O = 60, C = 61, _ = 35, T = 88, R = 120, $ = 65533, M = "named", j = "hexadecimal", Z = "decimal", V = {};
  V[j] = 16, V[Z] = 10;
  var Q = {};
  Q[M] = d, Q[Z] = u, Q[j] = c;
  var Y = 1, pe = 2, J = 3, re = 4, ae = 5, q = 6, W = 7, F = {};
  F[Y] = "Named character references must be terminated by a semicolon", F[pe] = "Numeric character references must be terminated by a semicolon", F[J] = "Named character references cannot be empty", F[re] = "Numeric character references cannot be empty", F[ae] = "Named character references must be known", F[q] = "Numeric character references cannot be disallowed", F[W] = "Numeric character references cannot be outside the permissible Unicode range";
  function U(te, le) {
    var fe = {}, ve, Oe;
    le || (le = {});
    for (Oe in x)
      ve = le[Oe], fe[Oe] = ve ?? x[Oe];
    return (fe.position.indent || fe.position.start) && (fe.indent = fe.position.indent || [], fe.position = fe.position.start), ne(te, fe);
  }
  function ne(te, le) {
    var fe = le.additional, ve = le.nonTerminated, Oe = le.text, sr = le.reference, nt = le.warning, It = le.textContext, se = le.referenceContext, vt = le.warningContext, Pt = le.position, Er = le.indent || [], xr = te.length, Nt = 0, tn = -1, ze = Pt.column || 1, wt = Pt.line || 1, St = "", Nr = [], jt, jr, Ht, We, st, Ve, Fe, ct, ua, sa, wr, Mn, cr, Zt, ca, Hr, rn, at, De;
    for (typeof fe == "string" && (fe = fe.charCodeAt(0)), Hr = nn(), ct = nt ? gl : y, Nt--, xr++; ++Nt < xr; )
      if (st === v && (ze = Er[tn] || 1), st = te.charCodeAt(Nt), st === k) {
        if (Fe = te.charCodeAt(Nt + 1), Fe === w || Fe === v || Fe === E || Fe === b || Fe === k || Fe === O || Fe !== Fe || fe && Fe === fe) {
          St += h(st), ze++;
          continue;
        }
        for (cr = Nt + 1, Mn = cr, De = cr, Fe === _ ? (De = ++Mn, Fe = te.charCodeAt(De), Fe === T || Fe === R ? (Zt = j, De = ++Mn) : Zt = Z) : Zt = M, jt = "", wr = "", We = "", ca = Q[Zt], De--; ++De < xr && (Fe = te.charCodeAt(De), !!ca(Fe)); )
          We += h(Fe), Zt === M && p.call(a, We) && (jt = We, wr = a[We]);
        Ht = te.charCodeAt(De) === A, Ht && (De++, jr = Zt === M ? m(We) : !1, jr && (jt = We, wr = jr)), at = 1 + De - cr, !Ht && !ve || (We ? Zt === M ? (Ht && !wr ? ct(ae, 1) : (jt !== We && (De = Mn + jt.length, at = 1 + De - Mn, Ht = !1), Ht || (ua = jt ? Y : J, le.attribute ? (Fe = te.charCodeAt(De), Fe === C ? (ct(ua, at), wr = null) : d(Fe) ? wr = null : ct(ua, at)) : ct(ua, at))), Ve = wr) : (Ht || ct(pe, at), Ve = parseInt(We, V[Zt]), ce(Ve) ? (ct(W, at), Ve = h($)) : Ve in l ? (ct(q, at), Ve = l[Ve]) : (sa = "", ue(Ve) && ct(q, at), Ve > 65535 && (Ve -= 65536, sa += h(Ve >>> 10 | 55296), Ve = 56320 | Ve & 1023), Ve = sa + h(Ve))) : Zt !== M && ct(re, at)), Ve ? (Ja(), Hr = nn(), Nt = De - 1, ze += De - cr + 1, Nr.push(Ve), rn = nn(), rn.offset++, sr && sr.call(se, Ve, { start: Hr, end: rn }, te.slice(cr - 1, De)), Hr = rn) : (We = te.slice(cr - 1, De), St += We, ze += We.length, Nt = De - 1);
      } else
        st === 10 && (wt++, tn++, ze = 0), st === st ? (St += h(st), ze++) : Ja();
    return Nr.join("");
    function nn() {
      return { line: wt, column: ze, offset: Nt + (Pt.offset || 0) };
    }
    function gl(eo, to) {
      var $n = nn();
      $n.column += to, $n.offset += to, nt.call(vt, F[eo], $n, eo);
    }
    function Ja() {
      St && (Nr.push(St), Oe && Oe.call(It, St, { start: Hr, end: nn() }), St = "");
    }
  }
  function ce(te) {
    return te >= 55296 && te <= 57343 || te > 1114111;
  }
  function ue(te) {
    return te >= 1 && te <= 8 || te === 11 || te >= 13 && te <= 31 || te >= 127 && te <= 159 || te >= 64976 && te <= 65007 || (te & 65535) === 65535 || (te & 65535) === 65534;
  }
} }), Kb = be({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, r) {
  var a = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, l = function(u) {
    var c = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, d = 0, m = {}, p = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function C(_) {
      return _ instanceof h ? new h(_.type, C(_.content), _.alias) : Array.isArray(_) ? _.map(C) : _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(C) {
      return Object.prototype.toString.call(C).slice(8, -1);
    }, objId: function(C) {
      return C.__id || Object.defineProperty(C, "__id", { value: ++d }), C.__id;
    }, clone: function C(_, T) {
      T = T || {};
      var R, $;
      switch (p.util.type(_)) {
        case "Object":
          if ($ = p.util.objId(_), T[$])
            return T[$];
          R = {}, T[$] = R;
          for (var M in _)
            _.hasOwnProperty(M) && (R[M] = C(_[M], T));
          return R;
        case "Array":
          return $ = p.util.objId(_), T[$] ? T[$] : (R = [], T[$] = R, _.forEach(function(j, Z) {
            R[Z] = C(j, T);
          }), R);
        default:
          return _;
      }
    }, getLanguage: function(C) {
      for (; C; ) {
        var _ = c.exec(C.className);
        if (_)
          return _[1].toLowerCase();
        C = C.parentElement;
      }
      return "none";
    }, setLanguage: function(C, _) {
      C.className = C.className.replace(RegExp(c, "gi"), ""), C.classList.add("language-" + _);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (R) {
        var C = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(R.stack) || [])[1];
        if (C) {
          var _ = document.getElementsByTagName("script");
          for (var T in _)
            if (_[T].src == C)
              return _[T];
        }
        return null;
      }
    }, isActive: function(C, _, T) {
      for (var R = "no-" + _; C; ) {
        var $ = C.classList;
        if ($.contains(_))
          return !0;
        if ($.contains(R))
          return !1;
        C = C.parentElement;
      }
      return !!T;
    } }, languages: { plain: m, plaintext: m, text: m, txt: m, extend: function(C, _) {
      var T = p.util.clone(p.languages[C]);
      for (var R in _)
        T[R] = _[R];
      return T;
    }, insertBefore: function(C, _, T, R) {
      R = R || p.languages;
      var $ = R[C], M = {};
      for (var j in $)
        if ($.hasOwnProperty(j)) {
          if (j == _)
            for (var Z in T)
              T.hasOwnProperty(Z) && (M[Z] = T[Z]);
          T.hasOwnProperty(j) || (M[j] = $[j]);
        }
      var V = R[C];
      return R[C] = M, p.languages.DFS(p.languages, function(Q, Y) {
        Y === V && Q != C && (this[Q] = M);
      }), M;
    }, DFS: function C(_, T, R, $) {
      $ = $ || {};
      var M = p.util.objId;
      for (var j in _)
        if (_.hasOwnProperty(j)) {
          T.call(_, j, _[j], R || j);
          var Z = _[j], V = p.util.type(Z);
          V === "Object" && !$[M(Z)] ? ($[M(Z)] = !0, C(Z, T, null, $)) : V === "Array" && !$[M(Z)] && ($[M(Z)] = !0, C(Z, T, j, $));
        }
    } }, plugins: {}, highlightAll: function(C, _) {
      p.highlightAllUnder(document, C, _);
    }, highlightAllUnder: function(C, _, T) {
      var R = { callback: T, container: C, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      p.hooks.run("before-highlightall", R), R.elements = Array.prototype.slice.apply(R.container.querySelectorAll(R.selector)), p.hooks.run("before-all-elements-highlight", R);
      for (var $ = 0, M; M = R.elements[$++]; )
        p.highlightElement(M, _ === !0, R.callback);
    }, highlightElement: function(C, _, T) {
      var R = p.util.getLanguage(C), $ = p.languages[R];
      p.util.setLanguage(C, R);
      var M = C.parentElement;
      M && M.nodeName.toLowerCase() === "pre" && p.util.setLanguage(M, R);
      var j = C.textContent, Z = { element: C, language: R, grammar: $, code: j };
      function V(Y) {
        Z.highlightedCode = Y, p.hooks.run("before-insert", Z), Z.element.innerHTML = Z.highlightedCode, p.hooks.run("after-highlight", Z), p.hooks.run("complete", Z), T && T.call(Z.element);
      }
      if (p.hooks.run("before-sanity-check", Z), M = Z.element.parentElement, M && M.nodeName.toLowerCase() === "pre" && !M.hasAttribute("tabindex") && M.setAttribute("tabindex", "0"), !Z.code) {
        p.hooks.run("complete", Z), T && T.call(Z.element);
        return;
      }
      if (p.hooks.run("before-highlight", Z), !Z.grammar) {
        V(p.util.encode(Z.code));
        return;
      }
      if (_ && u.Worker) {
        var Q = new Worker(p.filename);
        Q.onmessage = function(Y) {
          V(Y.data);
        }, Q.postMessage(JSON.stringify({ language: Z.language, code: Z.code, immediateClose: !0 }));
      } else
        V(p.highlight(Z.code, Z.grammar, Z.language));
    }, highlight: function(C, _, T) {
      var R = { code: C, grammar: _, language: T };
      if (p.hooks.run("before-tokenize", R), !R.grammar)
        throw new Error('The language "' + R.language + '" has no grammar.');
      return R.tokens = p.tokenize(R.code, R.grammar), p.hooks.run("after-tokenize", R), h.stringify(p.util.encode(R.tokens), R.language);
    }, tokenize: function(C, _) {
      var T = _.rest;
      if (T) {
        for (var R in T)
          _[R] = T[R];
        delete _.rest;
      }
      var $ = new w();
      return v($, $.head, C), x(C, $, _, $.head, 0), b($);
    }, hooks: { all: {}, add: function(C, _) {
      var T = p.hooks.all;
      T[C] = T[C] || [], T[C].push(_);
    }, run: function(C, _) {
      var T = p.hooks.all[C];
      if (!(!T || !T.length))
        for (var R = 0, $; $ = T[R++]; )
          $(_);
    } }, Token: h };
    u.Prism = p;
    function h(C, _, T, R) {
      this.type = C, this.content = _, this.alias = T, this.length = (R || "").length | 0;
    }
    h.stringify = function C(_, T) {
      if (typeof _ == "string")
        return _;
      if (Array.isArray(_)) {
        var R = "";
        return _.forEach(function(V) {
          R += C(V, T);
        }), R;
      }
      var $ = { type: _.type, content: C(_.content, T), tag: "span", classes: ["token", _.type], attributes: {}, language: T }, M = _.alias;
      M && (Array.isArray(M) ? Array.prototype.push.apply($.classes, M) : $.classes.push(M)), p.hooks.run("wrap", $);
      var j = "";
      for (var Z in $.attributes)
        j += " " + Z + '="' + ($.attributes[Z] || "").replace(/"/g, "&quot;") + '"';
      return "<" + $.tag + ' class="' + $.classes.join(" ") + '"' + j + ">" + $.content + "</" + $.tag + ">";
    };
    function y(C, _, T, R) {
      C.lastIndex = _;
      var $ = C.exec(T);
      if ($ && R && $[1]) {
        var M = $[1].length;
        $.index += M, $[0] = $[0].slice(M);
      }
      return $;
    }
    function x(C, _, T, R, $, M) {
      for (var j in T)
        if (!(!T.hasOwnProperty(j) || !T[j])) {
          var Z = T[j];
          Z = Array.isArray(Z) ? Z : [Z];
          for (var V = 0; V < Z.length; ++V) {
            if (M && M.cause == j + "," + V)
              return;
            var Q = Z[V], Y = Q.inside, pe = !!Q.lookbehind, J = !!Q.greedy, re = Q.alias;
            if (J && !Q.pattern.global) {
              var ae = Q.pattern.toString().match(/[imsuy]*$/)[0];
              Q.pattern = RegExp(Q.pattern.source, ae + "g");
            }
            for (var q = Q.pattern || Q, W = R.next, F = $; W !== _.tail && !(M && F >= M.reach); F += W.value.length, W = W.next) {
              var U = W.value;
              if (_.length > C.length)
                return;
              if (!(U instanceof h)) {
                var ne = 1, ce;
                if (J) {
                  if (ce = y(q, F, C, pe), !ce || ce.index >= C.length)
                    break;
                  var fe = ce.index, ue = ce.index + ce[0].length, te = F;
                  for (te += W.value.length; fe >= te; )
                    W = W.next, te += W.value.length;
                  if (te -= W.value.length, F = te, W.value instanceof h)
                    continue;
                  for (var le = W; le !== _.tail && (te < ue || typeof le.value == "string"); le = le.next)
                    ne++, te += le.value.length;
                  ne--, U = C.slice(F, te), ce.index -= F;
                } else if (ce = y(q, 0, U, pe), !ce)
                  continue;
                var fe = ce.index, ve = ce[0], Oe = U.slice(0, fe), sr = U.slice(fe + ve.length), nt = F + U.length;
                M && nt > M.reach && (M.reach = nt);
                var It = W.prev;
                Oe && (It = v(_, It, Oe), F += Oe.length), E(_, It, ne);
                var se = new h(j, Y ? p.tokenize(ve, Y) : ve, re, ve);
                if (W = v(_, It, se), sr && v(_, W, sr), ne > 1) {
                  var vt = { cause: j + "," + V, reach: nt };
                  x(C, _, T, W.prev, F, vt), M && vt.reach > M.reach && (M.reach = vt.reach);
                }
              }
            }
          }
        }
    }
    function w() {
      var C = { value: null, prev: null, next: null }, _ = { value: null, prev: C, next: null };
      C.next = _, this.head = C, this.tail = _, this.length = 0;
    }
    function v(C, _, T) {
      var R = _.next, $ = { value: T, prev: _, next: R };
      return _.next = $, R.prev = $, C.length++, $;
    }
    function E(C, _, T) {
      for (var R = _.next, $ = 0; $ < T && R !== C.tail; $++)
        R = R.next;
      _.next = R, R.prev = _, C.length -= $;
    }
    function b(C) {
      for (var _ = [], T = C.head.next; T !== C.tail; )
        _.push(T.value), T = T.next;
      return _;
    }
    if (!u.document)
      return u.addEventListener && (p.disableWorkerMessageHandler || u.addEventListener("message", function(C) {
        var _ = JSON.parse(C.data), T = _.language, R = _.code, $ = _.immediateClose;
        u.postMessage(p.highlight(R, p.languages[T], T)), $ && u.close();
      }, !1)), p;
    var k = p.util.currentScript();
    k && (p.filename = k.src, k.hasAttribute("data-manual") && (p.manual = !0));
    function A() {
      p.manual || p.highlightAll();
    }
    if (!p.manual) {
      var O = document.readyState;
      O === "loading" || O === "interactive" && k && k.defer ? document.addEventListener("DOMContentLoaded", A) : window.requestAnimationFrame ? window.requestAnimationFrame(A) : window.setTimeout(A, 16);
    }
    return p;
  }(a);
  typeof r < "u" && r.exports && (r.exports = l), typeof global < "u" && (global.Prism = l);
} }), Yb = be({ "../../node_modules/refractor/core.js"(e, r) {
  var a = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, l = $();
  a.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var u = jb(), c = Gb(), d = Kb(), m = Km(), p = Gm(), h = Sb(), y = Ab();
  l();
  var x = {}.hasOwnProperty;
  function w() {
  }
  w.prototype = d;
  var v = new w();
  r.exports = v, v.highlight = k, v.register = E, v.alias = b, v.registered = A, v.listLanguages = O, E(m), E(p), E(h), E(y), v.util.encode = T, v.Token.stringify = C;
  function E(M) {
    if (typeof M != "function" || !M.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + M + "`");
    v.languages[M.displayName] === void 0 && M(v);
  }
  function b(M, j) {
    var Z = v.languages, V = M, Q, Y, pe, J;
    j && (V = {}, V[M] = j);
    for (Q in V)
      for (Y = V[Q], Y = typeof Y == "string" ? [Y] : Y, pe = Y.length, J = -1; ++J < pe; )
        Z[Y[J]] = Z[Q];
  }
  function k(M, j) {
    var Z = d.highlight, V;
    if (typeof M != "string")
      throw new Error("Expected `string` for `value`, got `" + M + "`");
    if (v.util.type(j) === "Object")
      V = j, j = null;
    else {
      if (typeof j != "string")
        throw new Error("Expected `string` for `name`, got `" + j + "`");
      if (x.call(v.languages, j))
        V = v.languages[j];
      else
        throw new Error("Unknown language: `" + j + "` is not registered");
    }
    return Z.call(this, M, V, j);
  }
  function A(M) {
    if (typeof M != "string")
      throw new Error("Expected `string` for `language`, got `" + M + "`");
    return x.call(v.languages, M);
  }
  function O() {
    var M = v.languages, j = [], Z;
    for (Z in M)
      x.call(M, Z) && typeof M[Z] == "object" && j.push(Z);
    return j;
  }
  function C(M, j, Z) {
    var V;
    return typeof M == "string" ? { type: "text", value: M } : v.util.type(M) === "Array" ? _(M, j) : (V = { type: M.type, content: v.Token.stringify(M.content, j, Z), tag: "span", classes: ["token", M.type], attributes: {}, language: j, parent: Z }, M.alias && (V.classes = V.classes.concat(M.alias)), v.hooks.run("wrap", V), u(V.tag + "." + V.classes.join("."), R(V.attributes), V.content));
  }
  function _(M, j) {
    for (var Z = [], V = M.length, Q = -1, Y; ++Q < V; )
      Y = M[Q], Y !== "" && Y !== null && Y !== void 0 && Z.push(Y);
    for (Q = -1, V = Z.length; ++Q < V; )
      Y = Z[Q], Z[Q] = v.Token.stringify(Y, j, Z);
    return Z;
  }
  function T(M) {
    return M;
  }
  function R(M) {
    var j;
    for (j in M)
      M[j] = c(M[j]);
    return M;
  }
  function $() {
    var M = "Prism" in a, j = M ? a.Prism : void 0;
    return Z;
    function Z() {
      M ? a.Prism = j : delete a.Prism, M = void 0, j = void 0;
    }
  }
} }), Xb = be({ "../../node_modules/refractor/lang/bash.js"(e, r) {
  r.exports = a, a.displayName = "bash", a.aliases = ["shell"];
  function a(l) {
    (function(u) {
      var c = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", d = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null }, m = { bash: d, environment: { pattern: RegExp("\\$" + c), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + c), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      u.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + c), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: m }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: d } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: m }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: m.entity } }], environment: { pattern: RegExp("\\$?" + c), alias: "constant" }, variable: m.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }, d.inside = u.languages.bash;
      for (var p = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], h = m.variable[1].inside, y = 0; y < p.length; y++)
        h[p[y]] = u.languages.bash[p[y]];
      u.languages.shell = u.languages.bash;
    })(l);
  }
} }), Qb = be({ "../../node_modules/refractor/lang/js-extras.js"(e, r) {
  r.exports = a, a.displayName = "jsExtras", a.aliases = [];
  function a(l) {
    (function(u) {
      u.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + u.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), u.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + u.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), u.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function c(x, w) {
        return RegExp(x.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), w);
      }
      u.languages.insertBefore("javascript", "keyword", { imports: { pattern: c(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: u.languages.javascript }, exports: { pattern: c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: u.languages.javascript } }), u.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), u.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), u.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: c(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var d = ["function", "function-variable", "method", "method-variable", "property-access"], m = 0; m < d.length; m++) {
        var p = d[m], h = u.languages.javascript[p];
        u.util.type(h) === "RegExp" && (h = u.languages.javascript[p] = { pattern: h });
        var y = h.inside || {};
        h.inside = y, y["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(l);
  }
} }), Jb = be({ "../../node_modules/refractor/lang/json.js"(e, r) {
  r.exports = a, a.displayName = "json", a.aliases = ["webmanifest"];
  function a(l) {
    l.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, l.languages.webmanifest = l.languages.json;
  }
} }), e7 = be({ "../../node_modules/refractor/lang/graphql.js"(e, r) {
  r.exports = a, a.displayName = "graphql", a.aliases = [];
  function a(l) {
    l.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: l.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, l.hooks.add("after-tokenize", function(u) {
      if (u.language !== "graphql")
        return;
      var c = u.tokens.filter(function(O) {
        return typeof O != "string" && O.type !== "comment" && O.type !== "scalar";
      }), d = 0;
      function m(O) {
        return c[d + O];
      }
      function p(O, C) {
        C = C || 0;
        for (var _ = 0; _ < O.length; _++) {
          var T = m(_ + C);
          if (!T || T.type !== O[_])
            return !1;
        }
        return !0;
      }
      function h(O, C) {
        for (var _ = 1, T = d; T < c.length; T++) {
          var R = c[T], $ = R.content;
          if (R.type === "punctuation" && typeof $ == "string") {
            if (O.test($))
              _++;
            else if (C.test($) && (_--, _ === 0))
              return T;
          }
        }
        return -1;
      }
      function y(O, C) {
        var _ = O.alias;
        _ ? Array.isArray(_) || (O.alias = _ = [_]) : O.alias = _ = [], _.push(C);
      }
      for (; d < c.length; ) {
        var x = c[d++];
        if (x.type === "keyword" && x.content === "mutation") {
          var w = [];
          if (p(["definition-mutation", "punctuation"]) && m(1).content === "(") {
            d += 2;
            var v = h(/^\($/, /^\)$/);
            if (v === -1)
              continue;
            for (; d < v; d++) {
              var E = m(0);
              E.type === "variable" && (y(E, "variable-input"), w.push(E.content));
            }
            d = v + 1;
          }
          if (p(["punctuation", "property-query"]) && m(0).content === "{" && (d++, y(m(0), "property-mutation"), w.length > 0)) {
            var b = h(/^\{$/, /^\}$/);
            if (b === -1)
              continue;
            for (var k = d; k < b; k++) {
              var A = c[k];
              A.type === "variable" && w.indexOf(A.content) >= 0 && y(A, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: t7 } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { global: r7 } = __STORYBOOK_MODULE_GLOBAL__;
var n7 = Kt(Wm()), a7 = n7.default, o7 = Kt(Xb()), l7 = o7.default, i7 = Kt(Gm()), u7 = i7.default, s7 = Kt(Qb()), c7 = s7.default, d7 = Kt(Jb()), p7 = d7.default, f7 = Kt(e7()), m7 = f7.default, g7 = Kt(Km()), h7 = g7.default, y7 = Kt(Eb()), v7 = y7.default, b7 = Kt(xb()), E7 = b7.default, x7 = Kt(wb()), w7 = x7.default, S7 = Kt(qm()), A7 = S7.default;
function C7(e, r) {
  if (e == null)
    return {};
  var a = I0(e, r), l, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (u = 0; u < c.length; u++)
      l = c[u], !(r.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
  }
  return a;
}
function r0(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var a = 0, l = new Array(r); a < r; a++)
    l[a] = e[a];
  return l;
}
function k7(e) {
  if (Array.isArray(e))
    return r0(e);
}
function _7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function O7(e, r) {
  if (e) {
    if (typeof e == "string")
      return r0(e, r);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return r0(e, r);
  }
}
function T7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F7(e) {
  return k7(e) || _7(e) || O7(e) || T7();
}
function Jo(e) {
  "@babel/helpers - typeof";
  return Jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Jo(e);
}
function R7(e, r) {
  if (Jo(e) !== "object" || e === null)
    return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var l = a.call(e, r || "default");
    if (Jo(l) !== "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function L7(e) {
  var r = R7(e, "string");
  return Jo(r) === "symbol" ? r : String(r);
}
function t5(e, r, a) {
  return r = L7(r), r in e ? Object.defineProperty(e, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = a, e;
}
function Nf(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    r && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), a.push.apply(a, l);
  }
  return a;
}
function $a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Nf(Object(a), !0).forEach(function(l) {
      t5(e, l, a[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Nf(Object(a)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
    });
  }
  return e;
}
function D7(e) {
  var r = e.length;
  if (r === 0 || r === 1)
    return e;
  if (r === 2)
    return [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])];
  if (r === 3)
    return [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])];
  if (r >= 4)
    return [e[0], e[1], e[2], e[3], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3]), "".concat(e[3], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]), "".concat(e[0], ".").concat(e[1], ".").concat(e[3], ".").concat(e[2]), "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]), "".concat(e[0], ".").concat(e[2], ".").concat(e[3], ".").concat(e[1]), "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]), "".concat(e[0], ".").concat(e[3], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]), "".concat(e[1], ".").concat(e[0], ".").concat(e[3], ".").concat(e[2]), "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]), "".concat(e[1], ".").concat(e[2], ".").concat(e[3], ".").concat(e[0]), "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[3], ".").concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]), "".concat(e[2], ".").concat(e[0], ".").concat(e[3], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]), "".concat(e[2], ".").concat(e[1], ".").concat(e[3], ".").concat(e[0]), "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[3], ".").concat(e[1], ".").concat(e[0]), "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]), "".concat(e[3], ".").concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[3], ".").concat(e[1], ".").concat(e[2], ".").concat(e[0]), "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[3], ".").concat(e[2], ".").concat(e[1], ".").concat(e[0])];
}
var wc = {};
function M7(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var r = e.join(".");
  return wc[r] || (wc[r] = D7(e)), wc[r];
}
function $7(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, l = e.filter(function(c) {
    return c !== "token";
  }), u = M7(l);
  return u.reduce(function(c, d) {
    return $a($a({}, c), a[d]);
  }, r);
}
function jf(e) {
  return e.join(" ");
}
function B7(e, r) {
  var a = 0;
  return function(l) {
    return a += 1, l.map(function(u, c) {
      return j0({ node: u, stylesheet: e, useInlineStyles: r, key: "code-segment-".concat(a, "-").concat(c) });
    });
  };
}
function j0(e) {
  var r = e.node, a = e.stylesheet, l = e.style, u = l === void 0 ? {} : l, c = e.useInlineStyles, d = e.key, m = r.properties, p = r.type, h = r.tagName, y = r.value;
  if (p === "text")
    return y;
  if (h) {
    var x = B7(a, c), w;
    if (!c)
      w = $a($a({}, m), {}, { className: jf(m.className) });
    else {
      var v = Object.keys(a).reduce(function(A, O) {
        return O.split(".").forEach(function(C) {
          A.includes(C) || A.push(C);
        }), A;
      }, []), E = m.className && m.className.includes("token") ? ["token"] : [], b = m.className && E.concat(m.className.filter(function(A) {
        return !v.includes(A);
      }));
      w = $a($a({}, m), {}, { className: jf(b) || void 0, style: $7(m.className, Object.assign({}, m.style, u), a) });
    }
    var k = x(r.children);
    return i.createElement(h, Ft({ key: d }, w), k);
  }
}
var I7 = function(e, r) {
  var a = e.listLanguages();
  return a.indexOf(r) !== -1;
}, P7 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function Hf(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    r && (l = l.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), a.push.apply(a, l);
  }
  return a;
}
function Rr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Hf(Object(a), !0).forEach(function(l) {
      t5(e, l, a[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Hf(Object(a)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
    });
  }
  return e;
}
var N7 = /\n/g;
function j7(e) {
  return e.match(N7);
}
function H7(e) {
  var r = e.lines, a = e.startingLineNumber, l = e.style;
  return r.map(function(u, c) {
    var d = c + a;
    return i.createElement("span", { key: "line-".concat(c), className: "react-syntax-highlighter-line-number", style: typeof l == "function" ? l(d) : l }, "".concat(d, `
`));
  });
}
function Z7(e) {
  var r = e.codeString, a = e.codeStyle, l = e.containerStyle, u = l === void 0 ? { float: "left", paddingRight: "10px" } : l, c = e.numberStyle, d = c === void 0 ? {} : c, m = e.startingLineNumber;
  return i.createElement("code", { style: Object.assign({}, a, u) }, H7({ lines: r.replace(/\n$/, "").split(`
`), style: d, startingLineNumber: m }));
}
function z7(e) {
  return "".concat(e.toString().length, ".25em");
}
function r5(e, r) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: r }, children: [{ type: "text", value: e }] };
}
function n5(e, r, a) {
  var l = { display: "inline-block", minWidth: z7(a), paddingRight: "1em", textAlign: "right", userSelect: "none" }, u = typeof e == "function" ? e(r) : e, c = Rr(Rr({}, l), u);
  return c;
}
function Bi(e) {
  var r = e.children, a = e.lineNumber, l = e.lineNumberStyle, u = e.largestLineNumber, c = e.showInlineLineNumbers, d = e.lineProps, m = d === void 0 ? {} : d, p = e.className, h = p === void 0 ? [] : p, y = e.showLineNumbers, x = e.wrapLongLines, w = typeof m == "function" ? m(a) : m;
  if (w.className = h, a && c) {
    var v = n5(l, a, u);
    r.unshift(r5(a, v));
  }
  return x & y && (w.style = Rr(Rr({}, w.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: w, children: r };
}
function a5(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], l = 0; l < e.length; l++) {
    var u = e[l];
    if (u.type === "text")
      a.push(Bi({ children: [u], className: F7(new Set(r)) }));
    else if (u.children) {
      var c = r.concat(u.properties.className);
      a5(u.children, c).forEach(function(d) {
        return a.push(d);
      });
    }
  }
  return a;
}
function V7(e, r, a, l, u, c, d, m, p) {
  var h, y = a5(e.value), x = [], w = -1, v = 0;
  function E(T, R) {
    var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Bi({ children: T, lineNumber: R, lineNumberStyle: m, largestLineNumber: d, showInlineLineNumbers: u, lineProps: a, className: $, showLineNumbers: l, wrapLongLines: p });
  }
  function b(T, R) {
    if (l && R && u) {
      var $ = n5(m, R, d);
      T.unshift(r5(R, $));
    }
    return T;
  }
  function k(T, R) {
    var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return r || $.length > 0 ? E(T, R, $) : b(T, R);
  }
  for (var A = function() {
    var T = y[v], R = T.children[0].value, $ = j7(R);
    if ($) {
      var M = R.split(`
`);
      M.forEach(function(j, Z) {
        var V = l && x.length + c, Q = { type: "text", value: "".concat(j, `
`) };
        if (Z === 0) {
          var Y = y.slice(w + 1, v).concat(Bi({ children: [Q], className: T.properties.className })), pe = k(Y, V);
          x.push(pe);
        } else if (Z === M.length - 1) {
          var J = y[v + 1] && y[v + 1].children && y[v + 1].children[0], re = { type: "text", value: "".concat(j) };
          if (J) {
            var ae = Bi({ children: [re], className: T.properties.className });
            y.splice(v + 1, 0, ae);
          } else {
            var q = [re], W = k(q, V, T.properties.className);
            x.push(W);
          }
        } else {
          var F = [Q], U = k(F, V, T.properties.className);
          x.push(U);
        }
      }), w = v;
    }
    v++;
  }; v < y.length; )
    A();
  if (w !== y.length - 1) {
    var O = y.slice(w + 1, y.length);
    if (O && O.length) {
      var C = l && x.length + c, _ = k(O, C);
      x.push(_);
    }
  }
  return r ? x : (h = []).concat.apply(h, x);
}
function U7(e) {
  var r = e.rows, a = e.stylesheet, l = e.useInlineStyles;
  return r.map(function(u, c) {
    return j0({ node: u, stylesheet: a, useInlineStyles: l, key: "code-segement".concat(c) });
  });
}
function o5(e) {
  return e && typeof e.highlightAuto < "u";
}
function q7(e) {
  var r = e.astGenerator, a = e.language, l = e.code, u = e.defaultCodeValue;
  if (o5(r)) {
    var c = I7(r, a);
    return a === "text" ? { value: u, language: "text" } : c ? r.highlight(a, l) : r.highlightAuto(l);
  }
  try {
    return a && a !== "text" ? { value: r.highlight(l, a) } : { value: u };
  } catch {
    return { value: u };
  }
}
function W7(e, r) {
  return function(a) {
    var l = a.language, u = a.children, c = a.style, d = c === void 0 ? r : c, m = a.customStyle, p = m === void 0 ? {} : m, h = a.codeTagProps, y = h === void 0 ? { className: l ? "language-".concat(l) : void 0, style: Rr(Rr({}, d['code[class*="language-"]']), d['code[class*="language-'.concat(l, '"]')]) } : h, x = a.useInlineStyles, w = x === void 0 ? !0 : x, v = a.showLineNumbers, E = v === void 0 ? !1 : v, b = a.showInlineLineNumbers, k = b === void 0 ? !0 : b, A = a.startingLineNumber, O = A === void 0 ? 1 : A, C = a.lineNumberContainerStyle, _ = a.lineNumberStyle, T = _ === void 0 ? {} : _, R = a.wrapLines, $ = a.wrapLongLines, M = $ === void 0 ? !1 : $, j = a.lineProps, Z = j === void 0 ? {} : j, V = a.renderer, Q = a.PreTag, Y = Q === void 0 ? "pre" : Q, pe = a.CodeTag, J = pe === void 0 ? "code" : pe, re = a.code, ae = re === void 0 ? (Array.isArray(u) ? u[0] : u) || "" : re, q = a.astGenerator, W = C7(a, P7);
    q = q || e;
    var F = E ? i.createElement(Z7, { containerStyle: C, codeStyle: y.style || {}, numberStyle: T, startingLineNumber: O, codeString: ae }) : null, U = d.hljs || d['pre[class*="language-"]'] || { backgroundColor: "#fff" }, ne = o5(q) ? "hljs" : "prismjs", ce = w ? Object.assign({}, W, { style: Object.assign({}, U, p) }) : Object.assign({}, W, { className: W.className ? "".concat(ne, " ").concat(W.className) : ne, style: Object.assign({}, p) });
    if (M ? y.style = Rr(Rr({}, y.style), {}, { whiteSpace: "pre-wrap" }) : y.style = Rr(Rr({}, y.style), {}, { whiteSpace: "pre" }), !q)
      return i.createElement(Y, ce, F, i.createElement(J, y, ae));
    (R === void 0 && V || M) && (R = !0), V = V || U7;
    var ue = [{ type: "text", value: ae }], te = q7({ astGenerator: q, language: l, code: ae, defaultCodeValue: ue });
    te.language === null && (te.value = ue);
    var le = te.value.length + O, fe = V7(te, R, Z, E, k, O, le, T, M);
    return i.createElement(Y, ce, i.createElement(J, y, !k && F, V({ rows: fe, stylesheet: d, useInlineStyles: w })));
  };
}
var H0 = Kt(Yb()), Z0 = W7(H0.default, {});
Z0.registerLanguage = function(e, r) {
  return H0.default.register(r);
};
Z0.alias = function(e, r) {
  return H0.default.alias(e, r);
};
var Yt = Z0, G7 = P.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), l5 = P.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
l5.displayName = "ActionButton";
var z0 = ({ actionItems: e, ...r }) => i.createElement(G7, { ...r }, e.map(({ title: a, className: l, onClick: u, disabled: c }, d) => i.createElement(l5, { key: d, className: l, onClick: u, disabled: c }, a))), K7 = D.lazy(() => import("./GlobalScrollAreaStyles-UY5SB7EJ-a0305618.mjs")), Y7 = D.lazy(() => import("./OverlayScrollbars-GZGLA7DL-ee5355e5.mjs")), X7 = ({ horizontal: e, vertical: r, ...a }) => i.createElement(D.Suspense, { fallback: i.createElement("div", { ...a }) }, i.createElement(K7, null), i.createElement(Y7, { defer: !0, options: { scrollbars: { autoHide: "leave", visibility: "auto" } }, ...a })), su = P(X7)(({ vertical: e }) => e ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" }, ({ horizontal: e }) => e ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" });
su.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: Zf, document: jo, window: Q7 } = r7;
Yt.registerLanguage("jsextra", c7);
Yt.registerLanguage("jsx", a7);
Yt.registerLanguage("json", p7);
Yt.registerLanguage("yml", E7);
Yt.registerLanguage("md", v7);
Yt.registerLanguage("bash", l7);
Yt.registerLanguage("css", u7);
Yt.registerLanguage("html", h7);
Yt.registerLanguage("tsx", w7);
Yt.registerLanguage("typescript", A7);
Yt.registerLanguage("graphql", m7);
var J7 = la(2)((e) => Object.entries(e.code || {}).reduce((r, [a, l]) => ({ ...r, [`* .${a}`]: l }), {})), eE = i5();
function i5() {
  return Zf?.clipboard ? (e) => Zf.clipboard.writeText(e) : async (e) => {
    let r = jo.createElement("TEXTAREA"), a = jo.activeElement;
    r.value = e, jo.body.appendChild(r), r.select(), jo.execCommand("copy"), jo.body.removeChild(r), a.focus();
  };
}
var tE = P.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: r }) => r ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), rE = ({ children: e, className: r }) => i.createElement(su, { horizontal: !0, vertical: !0, className: r }, e), nE = P(rE)({ position: "relative" }, ({ theme: e }) => J7(e)), aE = P.pre(({ theme: e, padded: r }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: r ? e.layoutMargin : 0 })), oE = P.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), u5 = (e) => {
  let r = [...e.children], a = r[0], l = a.children[0].value, u = { ...a, children: [], properties: { ...a.properties, "data-line-number": l, style: { ...a.properties.style, userSelect: "auto" } } };
  return r[0] = u, { ...e, children: r };
}, lE = ({ rows: e, stylesheet: r, useInlineStyles: a }) => e.map((l, u) => j0({ node: u5(l), stylesheet: r, useInlineStyles: a, key: `code-segement${u}` })), iE = (e, r) => r ? e ? ({ rows: a, ...l }) => e({ rows: a.map((u) => u5(u)), ...l }) : lE : e, V0 = ({ children: e, language: r = "jsx", copyable: a = !1, bordered: l = !1, padded: u = !1, format: c = !0, formatter: d = null, className: m = null, showLineNumbers: p = !1, ...h }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let y = d ? d(c, e) : e.trim(), [x, w] = D.useState(!1), v = D.useCallback((b) => {
    b.preventDefault(), eE(y).then(() => {
      w(!0), Q7.setTimeout(() => w(!1), 1500);
    }).catch(t7.error);
  }, [y]), E = iE(h.renderer, p);
  return i.createElement(tE, { bordered: l, padded: u, showLineNumbers: p, className: m }, i.createElement(nE, null, i.createElement(Yt, { padded: u || l, language: r, showLineNumbers: p, showInlineLineNumbers: p, useInlineStyles: !1, PreTag: aE, CodeTag: oE, lineNumberContainerStyle: {}, ...h, renderer: E }, y)), a ? i.createElement(z0, { actionItems: [{ title: x ? "Copied" : "Copy", onClick: v }] }) : null);
};
V0.registerLanguage = (...e) => Yt.registerLanguage(...e);
var t$ = V0, s5 = { exports: {} }, Tt = {}, Sc = { exports: {} }, Ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf;
function uE() {
  return zf || (zf = 1, function(e) {
    function r(q, W) {
      var F = q.length;
      q.push(W);
      e:
        for (; 0 < F; ) {
          var U = F - 1 >>> 1, ne = q[U];
          if (0 < u(ne, W))
            q[U] = W, q[F] = ne, F = U;
          else
            break e;
        }
    }
    function a(q) {
      return q.length === 0 ? null : q[0];
    }
    function l(q) {
      if (q.length === 0)
        return null;
      var W = q[0], F = q.pop();
      if (F !== W) {
        q[0] = F;
        e:
          for (var U = 0, ne = q.length, ce = ne >>> 1; U < ce; ) {
            var ue = 2 * (U + 1) - 1, te = q[ue], le = ue + 1, fe = q[le];
            if (0 > u(te, F))
              le < ne && 0 > u(fe, te) ? (q[U] = fe, q[le] = F, U = le) : (q[U] = te, q[ue] = F, U = ue);
            else if (le < ne && 0 > u(fe, F))
              q[U] = fe, q[le] = F, U = le;
            else
              break e;
          }
      }
      return W;
    }
    function u(q, W) {
      var F = q.sortIndex - W.sortIndex;
      return F !== 0 ? F : q.id - W.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      e.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, m = d.now();
      e.unstable_now = function() {
        return d.now() - m;
      };
    }
    var p = [], h = [], y = 1, x = null, w = 3, v = !1, E = !1, b = !1, k = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function C(q) {
      for (var W = a(h); W !== null; ) {
        if (W.callback === null)
          l(h);
        else if (W.startTime <= q)
          l(h), W.sortIndex = W.expirationTime, r(p, W);
        else
          break;
        W = a(h);
      }
    }
    function _(q) {
      if (b = !1, C(q), !E)
        if (a(p) !== null)
          E = !0, re(T);
        else {
          var W = a(h);
          W !== null && ae(_, W.startTime - q);
        }
    }
    function T(q, W) {
      E = !1, b && (b = !1, A(M), M = -1), v = !0;
      var F = w;
      try {
        for (C(W), x = a(p); x !== null && (!(x.expirationTime > W) || q && !V()); ) {
          var U = x.callback;
          if (typeof U == "function") {
            x.callback = null, w = x.priorityLevel;
            var ne = U(x.expirationTime <= W);
            W = e.unstable_now(), typeof ne == "function" ? x.callback = ne : x === a(p) && l(p), C(W);
          } else
            l(p);
          x = a(p);
        }
        if (x !== null)
          var ce = !0;
        else {
          var ue = a(h);
          ue !== null && ae(_, ue.startTime - W), ce = !1;
        }
        return ce;
      } finally {
        x = null, w = F, v = !1;
      }
    }
    var R = !1, $ = null, M = -1, j = 5, Z = -1;
    function V() {
      return !(e.unstable_now() - Z < j);
    }
    function Q() {
      if ($ !== null) {
        var q = e.unstable_now();
        Z = q;
        var W = !0;
        try {
          W = $(!0, q);
        } finally {
          W ? Y() : (R = !1, $ = null);
        }
      } else
        R = !1;
    }
    var Y;
    if (typeof O == "function")
      Y = function() {
        O(Q);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), J = pe.port2;
      pe.port1.onmessage = Q, Y = function() {
        J.postMessage(null);
      };
    } else
      Y = function() {
        k(Q, 0);
      };
    function re(q) {
      $ = q, R || (R = !0, Y());
    }
    function ae(q, W) {
      M = k(function() {
        q(e.unstable_now());
      }, W);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, e.unstable_continueExecution = function() {
      E || v || (E = !0, re(T));
    }, e.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < q ? Math.floor(1e3 / q) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, e.unstable_getFirstCallbackNode = function() {
      return a(p);
    }, e.unstable_next = function(q) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = w;
      }
      var F = w;
      w = W;
      try {
        return q();
      } finally {
        w = F;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(q, W) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var F = w;
      w = q;
      try {
        return W();
      } finally {
        w = F;
      }
    }, e.unstable_scheduleCallback = function(q, W, F) {
      var U = e.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? U + F : U) : F = U, q) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = F + ne, q = { id: y++, callback: W, priorityLevel: q, startTime: F, expirationTime: ne, sortIndex: -1 }, F > U ? (q.sortIndex = F, r(h, q), a(p) === null && q === a(h) && (b ? (A(M), M = -1) : b = !0, ae(_, F - U))) : (q.sortIndex = ne, r(p, q), E || v || (E = !0, re(T))), q;
    }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(q) {
      var W = w;
      return function() {
        var F = w;
        w = W;
        try {
          return q.apply(this, arguments);
        } finally {
          w = F;
        }
      };
    };
  }(Ac)), Ac;
}
var Vf;
function sE() {
  return Vf || (Vf = 1, Sc.exports = uE()), Sc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uf;
function cE() {
  if (Uf)
    return Tt;
  Uf = 1;
  var e = D, r = sE();
  function a(t) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++)
      n += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = /* @__PURE__ */ new Set(), u = {};
  function c(t, n) {
    d(t, n), d(t + "Capture", n);
  }
  function d(t, n) {
    for (u[t] = n, t = 0; t < n.length; t++)
      l.add(n[t]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, x = {};
  function w(t) {
    return p.call(x, t) ? !0 : p.call(y, t) ? !1 : h.test(t) ? x[t] = !0 : (y[t] = !0, !1);
  }
  function v(t, n, o, s) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : o !== null ? !o.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function E(t, n, o, s) {
    if (n === null || typeof n > "u" || v(t, n, o, s))
      return !0;
    if (s)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function b(t, n, o, s, f, g, S) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = s, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = t, this.type = n, this.sanitizeURL = g, this.removeEmptyString = S;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    k[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var n = t[0];
    k[n] = new b(n, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    k[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    k[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    k[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    k[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    k[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    k[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    k[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function O(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var n = t.replace(
      A,
      O
    );
    k[n] = new b(n, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var n = t.replace(A, O);
    k[n] = new b(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var n = t.replace(A, O);
    k[n] = new b(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    k[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    k[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function C(t, n, o, s) {
    var f = k.hasOwnProperty(n) ? k[n] : null;
    (f !== null ? f.type !== 0 : s || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (E(n, o, f, s) && (o = null), s || f === null ? w(n) && (o === null ? t.removeAttribute(n) : t.setAttribute(n, "" + o)) : f.mustUseProperty ? t[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (n = f.attributeName, s = f.attributeNamespace, o === null ? t.removeAttribute(n) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, s ? t.setAttributeNS(s, n, o) : t.setAttribute(n, o))));
  }
  var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = Symbol.for("react.element"), R = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), q = Symbol.iterator;
  function W(t) {
    return t === null || typeof t != "object" ? null : (t = q && t[q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = Object.assign, U;
  function ne(t) {
    if (U === void 0)
      try {
        throw Error();
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/);
        U = n && n[1] || "";
      }
    return `
` + U + t;
  }
  var ce = !1;
  function ue(t, n) {
    if (!t || ce)
      return "";
    ce = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (z) {
            var s = z;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (z) {
            s = z;
          }
          t.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          s = z;
        }
        t();
      }
    } catch (z) {
      if (z && s && typeof z.stack == "string") {
        for (var f = z.stack.split(`
`), g = s.stack.split(`
`), S = f.length - 1, L = g.length - 1; 1 <= S && 0 <= L && f[S] !== g[L]; )
          L--;
        for (; 1 <= S && 0 <= L; S--, L--)
          if (f[S] !== g[L]) {
            if (S !== 1 || L !== 1)
              do
                if (S--, L--, 0 > L || f[S] !== g[L]) {
                  var B = `
` + f[S].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= S && 0 <= L);
            break;
          }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = o;
    }
    return (t = t ? t.displayName || t.name : "") ? ne(t) : "";
  }
  function te(t) {
    switch (t.tag) {
      case 5:
        return ne(t.type);
      case 16:
        return ne("Lazy");
      case 13:
        return ne("Suspense");
      case 19:
        return ne("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = ue(t.type, !1), t;
      case 11:
        return t = ue(t.type.render, !1), t;
      case 1:
        return t = ue(t.type, !0), t;
      default:
        return "";
    }
  }
  function le(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case $:
        return "Fragment";
      case R:
        return "Portal";
      case j:
        return "Profiler";
      case M:
        return "StrictMode";
      case Y:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return (t.displayName || "Context") + ".Consumer";
        case Z:
          return (t._context.displayName || "Context") + ".Provider";
        case Q:
          var n = t.render;
          return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case J:
          return n = t.displayName || null, n !== null ? n : le(t.type) || "Memo";
        case re:
          n = t._payload, t = t._init;
          try {
            return le(t(n));
          } catch {
          }
      }
    return null;
  }
  function fe(t) {
    var n = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = n.render, t = t.displayName || t.name || "", n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(n);
      case 8:
        return n === M ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function ve(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Oe(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function sr(t) {
    var n = Oe(t) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(t.constructor.prototype, n), s = "" + t[n];
    if (!t.hasOwnProperty(n) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, g = o.set;
      return Object.defineProperty(t, n, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(S) {
        s = "" + S, g.call(this, S);
      } }), Object.defineProperty(t, n, { enumerable: o.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(S) {
        s = "" + S;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[n];
      } };
    }
  }
  function nt(t) {
    t._valueTracker || (t._valueTracker = sr(t));
  }
  function It(t) {
    if (!t)
      return !1;
    var n = t._valueTracker;
    if (!n)
      return !0;
    var o = n.getValue(), s = "";
    return t && (s = Oe(t) ? t.checked ? "true" : "false" : t.value), t = s, t !== o ? (n.setValue(t), !0) : !1;
  }
  function se(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function vt(t, n) {
    var o = n.checked;
    return F({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? t._wrapperState.initialChecked });
  }
  function Pt(t, n) {
    var o = n.defaultValue == null ? "" : n.defaultValue, s = n.checked != null ? n.checked : n.defaultChecked;
    o = ve(n.value != null ? n.value : o), t._wrapperState = { initialChecked: s, initialValue: o, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Er(t, n) {
    n = n.checked, n != null && C(t, "checked", n, !1);
  }
  function xr(t, n) {
    Er(t, n);
    var o = ve(n.value), s = n.type;
    if (o != null)
      s === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
    else if (s === "submit" || s === "reset") {
      t.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? tn(t, n.type, o) : n.hasOwnProperty("defaultValue") && tn(t, n.type, ve(n.defaultValue)), n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked);
  }
  function Nt(t, n, o) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var s = n.type;
      if (!(s !== "submit" && s !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + t._wrapperState.initialValue, o || n === t.value || (t.value = n), t.defaultValue = n;
    }
    o = t.name, o !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, o !== "" && (t.name = o);
  }
  function tn(t, n, o) {
    (n !== "number" || se(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o));
  }
  var ze = Array.isArray;
  function wt(t, n, o, s) {
    if (t = t.options, n) {
      n = {};
      for (var f = 0; f < o.length; f++)
        n["$" + o[f]] = !0;
      for (o = 0; o < t.length; o++)
        f = n.hasOwnProperty("$" + t[o].value), t[o].selected !== f && (t[o].selected = f), f && s && (t[o].defaultSelected = !0);
    } else {
      for (o = "" + ve(o), n = null, f = 0; f < t.length; f++) {
        if (t[f].value === o) {
          t[f].selected = !0, s && (t[f].defaultSelected = !0);
          return;
        }
        n !== null || t[f].disabled || (n = t[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function St(t, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(a(91));
    return F({}, n, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Nr(t, n) {
    var o = n.value;
    if (o == null) {
      if (o = n.children, n = n.defaultValue, o != null) {
        if (n != null)
          throw Error(a(92));
        if (ze(o)) {
          if (1 < o.length)
            throw Error(a(93));
          o = o[0];
        }
        n = o;
      }
      n == null && (n = ""), o = n;
    }
    t._wrapperState = { initialValue: ve(o) };
  }
  function jt(t, n) {
    var o = ve(n.value), s = ve(n.defaultValue);
    o != null && (o = "" + o, o !== t.value && (t.value = o), n.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)), s != null && (t.defaultValue = "" + s);
  }
  function jr(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
  }
  function Ht(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function We(t, n) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Ht(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var st, Ve = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, o, s, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(n, o, s, f);
      });
    } : t;
  }(function(t, n) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = n;
    else {
      for (st = st || document.createElement("div"), st.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = st.firstChild; t.firstChild; )
        t.removeChild(t.firstChild);
      for (; n.firstChild; )
        t.appendChild(n.firstChild);
    }
  });
  function Fe(t, n) {
    if (n) {
      var o = t.firstChild;
      if (o && o === t.lastChild && o.nodeType === 3) {
        o.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var ct = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ua = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ct).forEach(function(t) {
    ua.forEach(function(n) {
      n = n + t.charAt(0).toUpperCase() + t.substring(1), ct[n] = ct[t];
    });
  });
  function sa(t, n, o) {
    return n == null || typeof n == "boolean" || n === "" ? "" : o || typeof n != "number" || n === 0 || ct.hasOwnProperty(t) && ct[t] ? ("" + n).trim() : n + "px";
  }
  function wr(t, n) {
    t = t.style;
    for (var o in n)
      if (n.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, f = sa(o, n[o], s);
        o === "float" && (o = "cssFloat"), s ? t.setProperty(o, f) : t[o] = f;
      }
  }
  var Mn = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cr(t, n) {
    if (n) {
      if (Mn[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(a(137, t));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(a(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(a(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(a(62));
    }
  }
  function Zt(t, n) {
    if (t.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ca = null;
  function Hr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var rn = null, at = null, De = null;
  function nn(t) {
    if (t = Ao(t)) {
      if (typeof rn != "function")
        throw Error(a(280));
      var n = t.stateNode;
      n && (n = Pl(n), rn(t.stateNode, t.type, n));
    }
  }
  function gl(t) {
    at ? De ? De.push(t) : De = [t] : at = t;
  }
  function Ja() {
    if (at) {
      var t = at, n = De;
      if (De = at = null, nn(t), n)
        for (t = 0; t < n.length; t++)
          nn(n[t]);
    }
  }
  function eo(t, n) {
    return t(n);
  }
  function to() {
  }
  var $n = !1;
  function Md(t, n, o) {
    if ($n)
      return t(n, o);
    $n = !0;
    try {
      return eo(t, n, o);
    } finally {
      $n = !1, (at !== null || De !== null) && (to(), Ja());
    }
  }
  function ro(t, n) {
    var o = t.stateNode;
    if (o === null)
      return null;
    var s = Pl(o);
    if (s === null)
      return null;
    o = s[n];
    e:
      switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (s = !s.disabled) || (t = t.type, s = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !s;
          break e;
        default:
          t = !1;
      }
    if (t)
      return null;
    if (o && typeof o != "function")
      throw Error(a(231, n, typeof o));
    return o;
  }
  var Ou = !1;
  if (m)
    try {
      var no = {};
      Object.defineProperty(no, "passive", { get: function() {
        Ou = !0;
      } }), window.addEventListener("test", no, no), window.removeEventListener("test", no, no);
    } catch {
      Ou = !1;
    }
  function Lh(t, n, o, s, f, g, S, L, B) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(o, z);
    } catch (K) {
      this.onError(K);
    }
  }
  var ao = !1, hl = null, yl = !1, Tu = null, Dh = { onError: function(t) {
    ao = !0, hl = t;
  } };
  function Mh(t, n, o, s, f, g, S, L, B) {
    ao = !1, hl = null, Lh.apply(Dh, arguments);
  }
  function $h(t, n, o, s, f, g, S, L, B) {
    if (Mh.apply(this, arguments), ao) {
      if (ao) {
        var z = hl;
        ao = !1, hl = null;
      } else
        throw Error(a(198));
      yl || (yl = !0, Tu = z);
    }
  }
  function Bn(t) {
    var n = t, o = t;
    if (t.alternate)
      for (; n.return; )
        n = n.return;
    else {
      t = n;
      do
        n = t, n.flags & 4098 && (o = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? o : null;
  }
  function $d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Bd(t) {
    if (Bn(t) !== t)
      throw Error(a(188));
  }
  function Bh(t) {
    var n = t.alternate;
    if (!n) {
      if (n = Bn(t), n === null)
        throw Error(a(188));
      return n !== t ? null : t;
    }
    for (var o = t, s = n; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var g = f.alternate;
      if (g === null) {
        if (s = f.return, s !== null) {
          o = s;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === o)
            return Bd(f), t;
          if (g === s)
            return Bd(f), n;
          g = g.sibling;
        }
        throw Error(a(188));
      }
      if (o.return !== s.return)
        o = f, s = g;
      else {
        for (var S = !1, L = f.child; L; ) {
          if (L === o) {
            S = !0, o = f, s = g;
            break;
          }
          if (L === s) {
            S = !0, s = f, o = g;
            break;
          }
          L = L.sibling;
        }
        if (!S) {
          for (L = g.child; L; ) {
            if (L === o) {
              S = !0, o = g, s = f;
              break;
            }
            if (L === s) {
              S = !0, s = g, o = f;
              break;
            }
            L = L.sibling;
          }
          if (!S)
            throw Error(a(189));
        }
      }
      if (o.alternate !== s)
        throw Error(a(190));
    }
    if (o.tag !== 3)
      throw Error(a(188));
    return o.stateNode.current === o ? t : n;
  }
  function Id(t) {
    return t = Bh(t), t !== null ? Pd(t) : null;
  }
  function Pd(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var n = Pd(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  var Nd = r.unstable_scheduleCallback, jd = r.unstable_cancelCallback, Ih = r.unstable_shouldYield, Ph = r.unstable_requestPaint, Ue = r.unstable_now, Nh = r.unstable_getCurrentPriorityLevel, Fu = r.unstable_ImmediatePriority, Hd = r.unstable_UserBlockingPriority, vl = r.unstable_NormalPriority, jh = r.unstable_LowPriority, Zd = r.unstable_IdlePriority, bl = null, Sr = null;
  function Hh(t) {
    if (Sr && typeof Sr.onCommitFiberRoot == "function")
      try {
        Sr.onCommitFiberRoot(bl, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  var dr = Math.clz32 ? Math.clz32 : Vh, Zh = Math.log, zh = Math.LN2;
  function Vh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Zh(t) / zh | 0) | 0;
  }
  var El = 64, xl = 4194304;
  function oo(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function wl(t, n) {
    var o = t.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, f = t.suspendedLanes, g = t.pingedLanes, S = o & 268435455;
    if (S !== 0) {
      var L = S & ~f;
      L !== 0 ? s = oo(L) : (g &= S, g !== 0 && (s = oo(g)));
    } else
      S = o & ~f, S !== 0 ? s = oo(S) : g !== 0 && (s = oo(g));
    if (s === 0)
      return 0;
    if (n !== 0 && n !== s && !(n & f) && (f = s & -s, g = n & -n, f >= g || f === 16 && (g & 4194240) !== 0))
      return n;
    if (s & 4 && (s |= o & 16), n = t.entangledLanes, n !== 0)
      for (t = t.entanglements, n &= s; 0 < n; )
        o = 31 - dr(n), f = 1 << o, s |= t[o], n &= ~f;
    return s;
  }
  function Uh(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qh(t, n) {
    for (var o = t.suspendedLanes, s = t.pingedLanes, f = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
      var S = 31 - dr(g), L = 1 << S, B = f[S];
      B === -1 ? (!(L & o) || L & s) && (f[S] = Uh(L, n)) : B <= n && (t.expiredLanes |= L), g &= ~L;
    }
  }
  function Ru(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function zd() {
    var t = El;
    return El <<= 1, !(El & 4194240) && (El = 64), t;
  }
  function Lu(t) {
    for (var n = [], o = 0; 31 > o; o++)
      n.push(t);
    return n;
  }
  function lo(t, n, o) {
    t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - dr(n), t[n] = o;
  }
  function Wh(t, n) {
    var o = t.pendingLanes & ~n;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n, n = t.entanglements;
    var s = t.eventTimes;
    for (t = t.expirationTimes; 0 < o; ) {
      var f = 31 - dr(o), g = 1 << f;
      n[f] = 0, s[f] = -1, t[f] = -1, o &= ~g;
    }
  }
  function Du(t, n) {
    var o = t.entangledLanes |= n;
    for (t = t.entanglements; o; ) {
      var s = 31 - dr(o), f = 1 << s;
      f & n | t[s] & n && (t[s] |= n), o &= ~f;
    }
  }
  var Te = 0;
  function Vd(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ud, Mu, qd, Wd, Gd, $u = !1, Sl = [], an = null, on = null, ln = null, io = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), un = [], Gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Kd(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        an = null;
        break;
      case "dragenter":
      case "dragleave":
        on = null;
        break;
      case "mouseover":
      case "mouseout":
        ln = null;
        break;
      case "pointerover":
      case "pointerout":
        io.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        uo.delete(n.pointerId);
    }
  }
  function so(t, n, o, s, f, g) {
    return t === null || t.nativeEvent !== g ? (t = { blockedOn: n, domEventName: o, eventSystemFlags: s, nativeEvent: g, targetContainers: [f] }, n !== null && (n = Ao(n), n !== null && Mu(n)), t) : (t.eventSystemFlags |= s, n = t.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), t);
  }
  function Kh(t, n, o, s, f) {
    switch (n) {
      case "focusin":
        return an = so(an, t, n, o, s, f), !0;
      case "dragenter":
        return on = so(on, t, n, o, s, f), !0;
      case "mouseover":
        return ln = so(ln, t, n, o, s, f), !0;
      case "pointerover":
        var g = f.pointerId;
        return io.set(g, so(io.get(g) || null, t, n, o, s, f)), !0;
      case "gotpointercapture":
        return g = f.pointerId, uo.set(g, so(uo.get(g) || null, t, n, o, s, f)), !0;
    }
    return !1;
  }
  function Yd(t) {
    var n = In(t.target);
    if (n !== null) {
      var o = Bn(n);
      if (o !== null) {
        if (n = o.tag, n === 13) {
          if (n = $d(o), n !== null) {
            t.blockedOn = n, Gd(t.priority, function() {
              qd(o);
            });
            return;
          }
        } else if (n === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Al(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var o = Iu(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var s = new o.constructor(o.type, o);
        ca = s, o.target.dispatchEvent(s), ca = null;
      } else
        return n = Ao(o), n !== null && Mu(n), t.blockedOn = o, !1;
      n.shift();
    }
    return !0;
  }
  function Xd(t, n, o) {
    Al(t) && o.delete(n);
  }
  function Yh() {
    $u = !1, an !== null && Al(an) && (an = null), on !== null && Al(on) && (on = null), ln !== null && Al(ln) && (ln = null), io.forEach(Xd), uo.forEach(Xd);
  }
  function co(t, n) {
    t.blockedOn === n && (t.blockedOn = null, $u || ($u = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Yh)));
  }
  function po(t) {
    function n(f) {
      return co(f, t);
    }
    if (0 < Sl.length) {
      co(Sl[0], t);
      for (var o = 1; o < Sl.length; o++) {
        var s = Sl[o];
        s.blockedOn === t && (s.blockedOn = null);
      }
    }
    for (an !== null && co(an, t), on !== null && co(on, t), ln !== null && co(ln, t), io.forEach(n), uo.forEach(n), o = 0; o < un.length; o++)
      s = un[o], s.blockedOn === t && (s.blockedOn = null);
    for (; 0 < un.length && (o = un[0], o.blockedOn === null); )
      Yd(o), o.blockedOn === null && un.shift();
  }
  var da = _.ReactCurrentBatchConfig, Cl = !0;
  function Xh(t, n, o, s) {
    var f = Te, g = da.transition;
    da.transition = null;
    try {
      Te = 1, Bu(t, n, o, s);
    } finally {
      Te = f, da.transition = g;
    }
  }
  function Qh(t, n, o, s) {
    var f = Te, g = da.transition;
    da.transition = null;
    try {
      Te = 4, Bu(t, n, o, s);
    } finally {
      Te = f, da.transition = g;
    }
  }
  function Bu(t, n, o, s) {
    if (Cl) {
      var f = Iu(t, n, o, s);
      if (f === null)
        es(t, n, s, kl, o), Kd(t, s);
      else if (Kh(f, t, n, o, s))
        s.stopPropagation();
      else if (Kd(t, s), n & 4 && -1 < Gh.indexOf(t)) {
        for (; f !== null; ) {
          var g = Ao(f);
          if (g !== null && Ud(g), g = Iu(t, n, o, s), g === null && es(t, n, s, kl, o), g === f)
            break;
          f = g;
        }
        f !== null && s.stopPropagation();
      } else
        es(t, n, s, null, o);
    }
  }
  var kl = null;
  function Iu(t, n, o, s) {
    if (kl = null, t = Hr(s), t = In(t), t !== null)
      if (n = Bn(t), n === null)
        t = null;
      else if (o = n.tag, o === 13) {
        if (t = $d(n), t !== null)
          return t;
        t = null;
      } else if (o === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else
        n !== t && (t = null);
    return kl = t, null;
  }
  function Qd(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Nh()) {
          case Fu:
            return 1;
          case Hd:
            return 4;
          case vl:
          case jh:
            return 16;
          case Zd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var sn = null, Pu = null, _l = null;
  function Jd() {
    if (_l)
      return _l;
    var t, n = Pu, o = n.length, s, f = "value" in sn ? sn.value : sn.textContent, g = f.length;
    for (t = 0; t < o && n[t] === f[t]; t++)
      ;
    var S = o - t;
    for (s = 1; s <= S && n[o - s] === f[g - s]; s++)
      ;
    return _l = f.slice(t, 1 < s ? 1 - s : void 0);
  }
  function Ol(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Tl() {
    return !0;
  }
  function e1() {
    return !1;
  }
  function zt(t) {
    function n(o, s, f, g, S) {
      this._reactName = o, this._targetInst = f, this.type = s, this.nativeEvent = g, this.target = S, this.currentTarget = null;
      for (var L in t)
        t.hasOwnProperty(L) && (o = t[L], this[L] = o ? o(g) : g[L]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? Tl : e1, this.isPropagationStopped = e1, this;
    }
    return F(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Tl);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Tl);
    }, persist: function() {
    }, isPersistent: Tl }), n;
  }
  var pa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nu = zt(pa), fo = F({}, pa, { view: 0, detail: 0 }), Jh = zt(fo), ju, Hu, mo, Fl = F({}, fo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== mo && (mo && t.type === "mousemove" ? (ju = t.screenX - mo.screenX, Hu = t.screenY - mo.screenY) : Hu = ju = 0, mo = t), ju);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Hu;
  } }), t1 = zt(Fl), ey = F({}, Fl, { dataTransfer: 0 }), ty = zt(ey), ry = F({}, fo, { relatedTarget: 0 }), Zu = zt(ry), ny = F({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ay = zt(ny), oy = F({}, pa, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), ly = zt(oy), iy = F({}, pa, { data: 0 }), r1 = zt(iy), uy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, cy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dy(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = cy[t]) ? !!n[t] : !1;
  }
  function zu() {
    return dy;
  }
  var py = F({}, fo, { key: function(t) {
    if (t.key) {
      var n = uy[t.key] || t.key;
      if (n !== "Unidentified")
        return n;
    }
    return t.type === "keypress" ? (t = Ol(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? sy[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zu, charCode: function(t) {
    return t.type === "keypress" ? Ol(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Ol(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), fy = zt(py), my = F({}, Fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), n1 = zt(my), gy = F({}, fo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zu }), hy = zt(gy), yy = F({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vy = zt(yy), by = F({}, Fl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ey = zt(by), xy = [9, 13, 27, 32], Vu = m && "CompositionEvent" in window, go = null;
  m && "documentMode" in document && (go = document.documentMode);
  var wy = m && "TextEvent" in window && !go, a1 = m && (!Vu || go && 8 < go && 11 >= go), o1 = String.fromCharCode(32), l1 = !1;
  function i1(t, n) {
    switch (t) {
      case "keyup":
        return xy.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function u1(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var fa = !1;
  function Sy(t, n) {
    switch (t) {
      case "compositionend":
        return u1(n);
      case "keypress":
        return n.which !== 32 ? null : (l1 = !0, o1);
      case "textInput":
        return t = n.data, t === o1 && l1 ? null : t;
      default:
        return null;
    }
  }
  function Ay(t, n) {
    if (fa)
      return t === "compositionend" || !Vu && i1(t, n) ? (t = Jd(), _l = Pu = sn = null, fa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return a1 && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function s1(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!Cy[t.type] : n === "textarea";
  }
  function c1(t, n, o, s) {
    gl(s), n = $l(n, "onChange"), 0 < n.length && (o = new Nu("onChange", "change", null, o, s), t.push({ event: o, listeners: n }));
  }
  var ho = null, yo = null;
  function ky(t) {
    O1(t, 0);
  }
  function Rl(t) {
    var n = va(t);
    if (It(n))
      return t;
  }
  function _y(t, n) {
    if (t === "change")
      return n;
  }
  var d1 = !1;
  if (m) {
    var Uu;
    if (m) {
      var qu = "oninput" in document;
      if (!qu) {
        var p1 = document.createElement("div");
        p1.setAttribute("oninput", "return;"), qu = typeof p1.oninput == "function";
      }
      Uu = qu;
    } else
      Uu = !1;
    d1 = Uu && (!document.documentMode || 9 < document.documentMode);
  }
  function f1() {
    ho && (ho.detachEvent("onpropertychange", m1), yo = ho = null);
  }
  function m1(t) {
    if (t.propertyName === "value" && Rl(yo)) {
      var n = [];
      c1(n, yo, t, Hr(t)), Md(ky, n);
    }
  }
  function Oy(t, n, o) {
    t === "focusin" ? (f1(), ho = n, yo = o, ho.attachEvent("onpropertychange", m1)) : t === "focusout" && f1();
  }
  function Ty(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Rl(yo);
  }
  function Fy(t, n) {
    if (t === "click")
      return Rl(n);
  }
  function Ry(t, n) {
    if (t === "input" || t === "change")
      return Rl(n);
  }
  function Ly(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var pr = typeof Object.is == "function" ? Object.is : Ly;
  function vo(t, n) {
    if (pr(t, n))
      return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null)
      return !1;
    var o = Object.keys(t), s = Object.keys(n);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var f = o[s];
      if (!p.call(n, f) || !pr(t[f], n[f]))
        return !1;
    }
    return !0;
  }
  function g1(t) {
    for (; t && t.firstChild; )
      t = t.firstChild;
    return t;
  }
  function h1(t, n) {
    var o = g1(t);
    t = 0;
    for (var s; o; ) {
      if (o.nodeType === 3) {
        if (s = t + o.textContent.length, t <= n && s >= n)
          return { node: o, offset: n - t };
        t = s;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = g1(o);
    }
  }
  function y1(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? y1(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function v1() {
    for (var t = window, n = se(); n instanceof t.HTMLIFrameElement; ) {
      try {
        var o = typeof n.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        t = n.contentWindow;
      else
        break;
      n = se(t.document);
    }
    return n;
  }
  function Wu(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  function Dy(t) {
    var n = v1(), o = t.focusedElem, s = t.selectionRange;
    if (n !== o && o && o.ownerDocument && y1(o.ownerDocument.documentElement, o)) {
      if (s !== null && Wu(o)) {
        if (n = s.start, t = s.end, t === void 0 && (t = n), "selectionStart" in o)
          o.selectionStart = n, o.selectionEnd = Math.min(t, o.value.length);
        else if (t = (n = o.ownerDocument || document) && n.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = o.textContent.length, g = Math.min(s.start, f);
          s = s.end === void 0 ? g : Math.min(s.end, f), !t.extend && g > s && (f = s, s = g, g = f), f = h1(o, g);
          var S = h1(
            o,
            s
          );
          f && S && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== S.node || t.focusOffset !== S.offset) && (n = n.createRange(), n.setStart(f.node, f.offset), t.removeAllRanges(), g > s ? (t.addRange(n), t.extend(S.node, S.offset)) : (n.setEnd(S.node, S.offset), t.addRange(n)));
        }
      }
      for (n = [], t = o; t = t.parentNode; )
        t.nodeType === 1 && n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < n.length; o++)
        t = n[o], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var My = m && "documentMode" in document && 11 >= document.documentMode, ma = null, Gu = null, bo = null, Ku = !1;
  function b1(t, n, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Ku || ma == null || ma !== se(s) || (s = ma, "selectionStart" in s && Wu(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), bo && vo(bo, s) || (bo = s, s = $l(Gu, "onSelect"), 0 < s.length && (n = new Nu("onSelect", "select", null, n, o), t.push({ event: n, listeners: s }), n.target = ma)));
  }
  function Ll(t, n) {
    var o = {};
    return o[t.toLowerCase()] = n.toLowerCase(), o["Webkit" + t] = "webkit" + n, o["Moz" + t] = "moz" + n, o;
  }
  var ga = { animationend: Ll("Animation", "AnimationEnd"), animationiteration: Ll("Animation", "AnimationIteration"), animationstart: Ll("Animation", "AnimationStart"), transitionend: Ll("Transition", "TransitionEnd") }, Yu = {}, E1 = {};
  m && (E1 = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
  function Dl(t) {
    if (Yu[t])
      return Yu[t];
    if (!ga[t])
      return t;
    var n = ga[t], o;
    for (o in n)
      if (n.hasOwnProperty(o) && o in E1)
        return Yu[t] = n[o];
    return t;
  }
  var x1 = Dl("animationend"), w1 = Dl("animationiteration"), S1 = Dl("animationstart"), A1 = Dl("transitionend"), C1 = /* @__PURE__ */ new Map(), k1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cn(t, n) {
    C1.set(t, n), c(n, [t]);
  }
  for (var Xu = 0; Xu < k1.length; Xu++) {
    var Qu = k1[Xu], $y = Qu.toLowerCase(), By = Qu[0].toUpperCase() + Qu.slice(1);
    cn($y, "on" + By);
  }
  cn(x1, "onAnimationEnd"), cn(w1, "onAnimationIteration"), cn(S1, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(A1, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Iy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));
  function _1(t, n, o) {
    var s = t.type || "unknown-event";
    t.currentTarget = o, $h(s, n, void 0, t), t.currentTarget = null;
  }
  function O1(t, n) {
    n = (n & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var s = t[o], f = s.event;
      s = s.listeners;
      e: {
        var g = void 0;
        if (n)
          for (var S = s.length - 1; 0 <= S; S--) {
            var L = s[S], B = L.instance, z = L.currentTarget;
            if (L = L.listener, B !== g && f.isPropagationStopped())
              break e;
            _1(f, L, z), g = B;
          }
        else
          for (S = 0; S < s.length; S++) {
            if (L = s[S], B = L.instance, z = L.currentTarget, L = L.listener, B !== g && f.isPropagationStopped())
              break e;
            _1(f, L, z), g = B;
          }
      }
    }
    if (yl)
      throw t = Tu, yl = !1, Tu = null, t;
  }
  function Me(t, n) {
    var o = n[ls];
    o === void 0 && (o = n[ls] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    o.has(s) || (T1(n, t, 2, !1), o.add(s));
  }
  function Ju(t, n, o) {
    var s = 0;
    n && (s |= 4), T1(o, t, s, n);
  }
  var Ml = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(t) {
    if (!t[Ml]) {
      t[Ml] = !0, l.forEach(function(o) {
        o !== "selectionchange" && (Iy.has(o) || Ju(o, !1, t), Ju(o, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Ml] || (n[Ml] = !0, Ju("selectionchange", !1, n));
    }
  }
  function T1(t, n, o, s) {
    switch (Qd(n)) {
      case 1:
        var f = Xh;
        break;
      case 4:
        f = Qh;
        break;
      default:
        f = Bu;
    }
    o = f.bind(null, n, o, t), f = void 0, !Ou || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), s ? f !== void 0 ? t.addEventListener(n, o, { capture: !0, passive: f }) : t.addEventListener(n, o, !0) : f !== void 0 ? t.addEventListener(n, o, { passive: f }) : t.addEventListener(n, o, !1);
  }
  function es(t, n, o, s, f) {
    var g = s;
    if (!(n & 1) && !(n & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var S = s.tag;
          if (S === 3 || S === 4) {
            var L = s.stateNode.containerInfo;
            if (L === f || L.nodeType === 8 && L.parentNode === f)
              break;
            if (S === 4)
              for (S = s.return; S !== null; ) {
                var B = S.tag;
                if ((B === 3 || B === 4) && (B = S.stateNode.containerInfo, B === f || B.nodeType === 8 && B.parentNode === f))
                  return;
                S = S.return;
              }
            for (; L !== null; ) {
              if (S = In(L), S === null)
                return;
              if (B = S.tag, B === 5 || B === 6) {
                s = g = S;
                continue e;
              }
              L = L.parentNode;
            }
          }
          s = s.return;
        }
    Md(function() {
      var z = g, K = Hr(o), X = [];
      e: {
        var G = C1.get(t);
        if (G !== void 0) {
          var oe = Nu, de = t;
          switch (t) {
            case "keypress":
              if (Ol(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = fy;
              break;
            case "focusin":
              de = "focus", oe = Zu;
              break;
            case "focusout":
              de = "blur", oe = Zu;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Zu;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = t1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = ty;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = hy;
              break;
            case x1:
            case w1:
            case S1:
              oe = ay;
              break;
            case A1:
              oe = vy;
              break;
            case "scroll":
              oe = Jh;
              break;
            case "wheel":
              oe = Ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = n1;
          }
          var me = (n & 4) !== 0, qe = !me && t === "scroll", N = me ? G !== null ? G + "Capture" : null : G;
          me = [];
          for (var I = z, H; I !== null; ) {
            H = I;
            var ee = H.stateNode;
            if (H.tag === 5 && ee !== null && (H = ee, N !== null && (ee = ro(I, N), ee != null && me.push(wo(I, ee, H)))), qe)
              break;
            I = I.return;
          }
          0 < me.length && (G = new oe(G, de, null, o, K), X.push({ event: G, listeners: me }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (G = t === "mouseover" || t === "pointerover", oe = t === "mouseout" || t === "pointerout", G && o !== ca && (de = o.relatedTarget || o.fromElement) && (In(de) || de[Zr]))
            break e;
          if ((oe || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, oe ? (de = o.relatedTarget || o.toElement, oe = z, de = de ? In(de) : null, de !== null && (qe = Bn(de), de !== qe || de.tag !== 5 && de.tag !== 6) && (de = null)) : (oe = null, de = z), oe !== de)) {
            if (me = t1, ee = "onMouseLeave", N = "onMouseEnter", I = "mouse", (t === "pointerout" || t === "pointerover") && (me = n1, ee = "onPointerLeave", N = "onPointerEnter", I = "pointer"), qe = oe == null ? G : va(oe), H = de == null ? G : va(de), G = new me(ee, I + "leave", oe, o, K), G.target = qe, G.relatedTarget = H, ee = null, In(K) === z && (me = new me(N, I + "enter", de, o, K), me.target = H, me.relatedTarget = qe, ee = me), qe = ee, oe && de)
              t: {
                for (me = oe, N = de, I = 0, H = me; H; H = ha(H))
                  I++;
                for (H = 0, ee = N; ee; ee = ha(ee))
                  H++;
                for (; 0 < I - H; )
                  me = ha(me), I--;
                for (; 0 < H - I; )
                  N = ha(N), H--;
                for (; I--; ) {
                  if (me === N || N !== null && me === N.alternate)
                    break t;
                  me = ha(me), N = ha(N);
                }
                me = null;
              }
            else
              me = null;
            oe !== null && F1(X, G, oe, me, !1), de !== null && qe !== null && F1(X, qe, de, me, !0);
          }
        }
        e: {
          if (G = z ? va(z) : window, oe = G.nodeName && G.nodeName.toLowerCase(), oe === "select" || oe === "input" && G.type === "file")
            var ge = _y;
          else if (s1(G))
            if (d1)
              ge = Ry;
            else {
              ge = Ty;
              var he = Oy;
            }
          else
            (oe = G.nodeName) && oe.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (ge = Fy);
          if (ge && (ge = ge(t, z))) {
            c1(X, ge, o, K);
            break e;
          }
          he && he(t, G, z), t === "focusout" && (he = G._wrapperState) && he.controlled && G.type === "number" && tn(G, "number", G.value);
        }
        switch (he = z ? va(z) : window, t) {
          case "focusin":
            (s1(he) || he.contentEditable === "true") && (ma = he, Gu = z, bo = null);
            break;
          case "focusout":
            bo = Gu = ma = null;
            break;
          case "mousedown":
            Ku = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ku = !1, b1(X, o, K);
            break;
          case "selectionchange":
            if (My)
              break;
          case "keydown":
          case "keyup":
            b1(X, o, K);
        }
        var ye;
        if (Vu)
          e: {
            switch (t) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          fa ? i1(t, o) && (Ee = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (a1 && o.locale !== "ko" && (fa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && fa && (ye = Jd()) : (sn = K, Pu = "value" in sn ? sn.value : sn.textContent, fa = !0)), he = $l(z, Ee), 0 < he.length && (Ee = new r1(Ee, t, null, o, K), X.push({ event: Ee, listeners: he }), ye ? Ee.data = ye : (ye = u1(o), ye !== null && (Ee.data = ye)))), (ye = wy ? Sy(t, o) : Ay(t, o)) && (z = $l(z, "onBeforeInput"), 0 < z.length && (K = new r1("onBeforeInput", "beforeinput", null, o, K), X.push({ event: K, listeners: z }), K.data = ye));
      }
      O1(X, n);
    });
  }
  function wo(t, n, o) {
    return { instance: t, listener: n, currentTarget: o };
  }
  function $l(t, n) {
    for (var o = n + "Capture", s = []; t !== null; ) {
      var f = t, g = f.stateNode;
      f.tag === 5 && g !== null && (f = g, g = ro(t, o), g != null && s.unshift(wo(t, g, f)), g = ro(t, n), g != null && s.push(wo(t, g, f))), t = t.return;
    }
    return s;
  }
  function ha(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function F1(t, n, o, s, f) {
    for (var g = n._reactName, S = []; o !== null && o !== s; ) {
      var L = o, B = L.alternate, z = L.stateNode;
      if (B !== null && B === s)
        break;
      L.tag === 5 && z !== null && (L = z, f ? (B = ro(o, g), B != null && S.unshift(wo(o, B, L))) : f || (B = ro(o, g), B != null && S.push(wo(o, B, L)))), o = o.return;
    }
    S.length !== 0 && t.push({ event: n, listeners: S });
  }
  var Py = /\r\n?/g, Ny = /\u0000|\uFFFD/g;
  function R1(t) {
    return (typeof t == "string" ? t : "" + t).replace(Py, `
`).replace(Ny, "");
  }
  function Bl(t, n, o) {
    if (n = R1(n), R1(t) !== n && o)
      throw Error(a(425));
  }
  function Il() {
  }
  var ts = null, rs = null;
  function ns(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var as = typeof setTimeout == "function" ? setTimeout : void 0, jy = typeof clearTimeout == "function" ? clearTimeout : void 0, L1 = typeof Promise == "function" ? Promise : void 0, Hy = typeof queueMicrotask == "function" ? queueMicrotask : typeof L1 < "u" ? function(t) {
    return L1.resolve(null).then(t).catch(Zy);
  } : as;
  function Zy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function os(t, n) {
    var o = n, s = 0;
    do {
      var f = o.nextSibling;
      if (t.removeChild(o), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (s === 0) {
            t.removeChild(f), po(n);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = f;
    } while (o);
    po(n);
  }
  function dn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = t.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return t;
  }
  function D1(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var o = t.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (n === 0)
            return t;
          n--;
        } else
          o === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var ya = Math.random().toString(36).slice(2), Ar = "__reactFiber$" + ya, So = "__reactProps$" + ya, Zr = "__reactContainer$" + ya, ls = "__reactEvents$" + ya, zy = "__reactListeners$" + ya, Vy = "__reactHandles$" + ya;
  function In(t) {
    var n = t[Ar];
    if (n)
      return n;
    for (var o = t.parentNode; o; ) {
      if (n = o[Zr] || o[Ar]) {
        if (o = n.alternate, n.child !== null || o !== null && o.child !== null)
          for (t = D1(t); t !== null; ) {
            if (o = t[Ar])
              return o;
            t = D1(t);
          }
        return n;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function Ao(t) {
    return t = t[Ar] || t[Zr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function va(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(a(33));
  }
  function Pl(t) {
    return t[So] || null;
  }
  var is = [], ba = -1;
  function pn(t) {
    return { current: t };
  }
  function $e(t) {
    0 > ba || (t.current = is[ba], is[ba] = null, ba--);
  }
  function Re(t, n) {
    ba++, is[ba] = t.current, t.current = n;
  }
  var fn = {}, dt = pn(fn), At = pn(!1), Pn = fn;
  function Ea(t, n) {
    var o = t.type.contextTypes;
    if (!o)
      return fn;
    var s = t.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === n)
      return s.__reactInternalMemoizedMaskedChildContext;
    var f = {}, g;
    for (g in o)
      f[g] = n[g];
    return s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Ct(t) {
    return t = t.childContextTypes, t != null;
  }
  function Nl() {
    $e(At), $e(dt);
  }
  function M1(t, n, o) {
    if (dt.current !== fn)
      throw Error(a(168));
    Re(dt, n), Re(At, o);
  }
  function $1(t, n, o) {
    var s = t.stateNode;
    if (n = n.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var f in s)
      if (!(f in n))
        throw Error(a(108, fe(t) || "Unknown", f));
    return F({}, o, s);
  }
  function jl(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || fn, Pn = dt.current, Re(dt, t), Re(At, At.current), !0;
  }
  function B1(t, n, o) {
    var s = t.stateNode;
    if (!s)
      throw Error(a(169));
    o ? (t = $1(t, n, Pn), s.__reactInternalMemoizedMergedChildContext = t, $e(At), $e(dt), Re(dt, t)) : $e(At), Re(At, o);
  }
  var zr = null, Hl = !1, us = !1;
  function I1(t) {
    zr === null ? zr = [t] : zr.push(t);
  }
  function Uy(t) {
    Hl = !0, I1(t);
  }
  function mn() {
    if (!us && zr !== null) {
      us = !0;
      var t = 0, n = Te;
      try {
        var o = zr;
        for (Te = 1; t < o.length; t++) {
          var s = o[t];
          do
            s = s(!0);
          while (s !== null);
        }
        zr = null, Hl = !1;
      } catch (f) {
        throw zr !== null && (zr = zr.slice(t + 1)), Nd(Fu, mn), f;
      } finally {
        Te = n, us = !1;
      }
    }
    return null;
  }
  var xa = [], wa = 0, Zl = null, zl = 0, Xt = [], Qt = 0, Nn = null, Vr = 1, Ur = "";
  function jn(t, n) {
    xa[wa++] = zl, xa[wa++] = Zl, Zl = t, zl = n;
  }
  function P1(t, n, o) {
    Xt[Qt++] = Vr, Xt[Qt++] = Ur, Xt[Qt++] = Nn, Nn = t;
    var s = Vr;
    t = Ur;
    var f = 32 - dr(s) - 1;
    s &= ~(1 << f), o += 1;
    var g = 32 - dr(n) + f;
    if (30 < g) {
      var S = f - f % 5;
      g = (s & (1 << S) - 1).toString(32), s >>= S, f -= S, Vr = 1 << 32 - dr(n) + f | o << f | s, Ur = g + t;
    } else
      Vr = 1 << g | o << f | s, Ur = t;
  }
  function ss(t) {
    t.return !== null && (jn(t, 1), P1(t, 1, 0));
  }
  function cs(t) {
    for (; t === Zl; )
      Zl = xa[--wa], xa[wa] = null, zl = xa[--wa], xa[wa] = null;
    for (; t === Nn; )
      Nn = Xt[--Qt], Xt[Qt] = null, Ur = Xt[--Qt], Xt[Qt] = null, Vr = Xt[--Qt], Xt[Qt] = null;
  }
  var Vt = null, Ut = null, Be = !1, fr = null;
  function N1(t, n) {
    var o = rr(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = n, o.return = t, n = t.deletions, n === null ? (t.deletions = [o], t.flags |= 16) : n.push(o);
  }
  function j1(t, n) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, Vt = t, Ut = dn(n.firstChild), !0) : !1;
      case 6:
        return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, Vt = t, Ut = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (o = Nn !== null ? { id: Vr, overflow: Ur } : null, t.memoizedState = { dehydrated: n, treeContext: o, retryLane: 1073741824 }, o = rr(18, null, null, 0), o.stateNode = n, o.return = t, t.child = o, Vt = t, Ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ds(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function ps(t) {
    if (Be) {
      var n = Ut;
      if (n) {
        var o = n;
        if (!j1(t, n)) {
          if (ds(t))
            throw Error(a(418));
          n = dn(o.nextSibling);
          var s = Vt;
          n && j1(t, n) ? N1(s, o) : (t.flags = t.flags & -4097 | 2, Be = !1, Vt = t);
        }
      } else {
        if (ds(t))
          throw Error(a(418));
        t.flags = t.flags & -4097 | 2, Be = !1, Vt = t;
      }
    }
  }
  function H1(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    Vt = t;
  }
  function Vl(t) {
    if (t !== Vt)
      return !1;
    if (!Be)
      return H1(t), Be = !0, !1;
    var n;
    if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !ns(t.type, t.memoizedProps)), n && (n = Ut)) {
      if (ds(t))
        throw Z1(), Error(a(418));
      for (; n; )
        N1(t, n), n = dn(n.nextSibling);
    }
    if (H1(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
        throw Error(a(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (n === 0) {
                Ut = dn(t.nextSibling);
                break e;
              }
              n--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || n++;
          }
          t = t.nextSibling;
        }
        Ut = null;
      }
    } else
      Ut = Vt ? dn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Z1() {
    for (var t = Ut; t; )
      t = dn(t.nextSibling);
  }
  function Sa() {
    Ut = Vt = null, Be = !1;
  }
  function fs(t) {
    fr === null ? fr = [t] : fr.push(t);
  }
  var qy = _.ReactCurrentBatchConfig;
  function mr(t, n) {
    if (t && t.defaultProps) {
      n = F({}, n), t = t.defaultProps;
      for (var o in t)
        n[o] === void 0 && (n[o] = t[o]);
      return n;
    }
    return n;
  }
  var Ul = pn(null), ql = null, Aa = null, ms = null;
  function gs() {
    ms = Aa = ql = null;
  }
  function hs(t) {
    var n = Ul.current;
    $e(Ul), t._currentValue = n;
  }
  function ys(t, n, o) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), t === o)
        break;
      t = t.return;
    }
  }
  function Ca(t, n) {
    ql = t, ms = Aa = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & n && (kt = !0), t.firstContext = null);
  }
  function Jt(t) {
    var n = t._currentValue;
    if (ms !== t)
      if (t = { context: t, memoizedValue: n, next: null }, Aa === null) {
        if (ql === null)
          throw Error(a(308));
        Aa = t, ql.dependencies = { lanes: 0, firstContext: t };
      } else
        Aa = Aa.next = t;
    return n;
  }
  var Hn = null;
  function vs(t) {
    Hn === null ? Hn = [t] : Hn.push(t);
  }
  function z1(t, n, o, s) {
    var f = n.interleaved;
    return f === null ? (o.next = o, vs(n)) : (o.next = f.next, f.next = o), n.interleaved = o, qr(t, s);
  }
  function qr(t, n) {
    t.lanes |= n;
    var o = t.alternate;
    for (o !== null && (o.lanes |= n), o = t, t = t.return; t !== null; )
      t.childLanes |= n, o = t.alternate, o !== null && (o.childLanes |= n), o = t, t = t.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var gn = !1;
  function bs(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function V1(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Wr(t, n) {
    return { eventTime: t, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function hn(t, n, o) {
    var s = t.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Ae & 2) {
      var f = s.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), s.pending = n, qr(t, o);
    }
    return f = s.interleaved, f === null ? (n.next = n, vs(s)) : (n.next = f.next, f.next = n), s.interleaved = n, qr(t, o);
  }
  function Wl(t, n, o) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194240) !== 0)) {
      var s = n.lanes;
      s &= t.pendingLanes, o |= s, n.lanes = o, Du(t, o);
    }
  }
  function U1(t, n) {
    var o = t.updateQueue, s = t.alternate;
    if (s !== null && (s = s.updateQueue, o === s)) {
      var f = null, g = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var S = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          g === null ? f = g = S : g = g.next = S, o = o.next;
        } while (o !== null);
        g === null ? f = g = n : g = g.next = n;
      } else
        f = g = n;
      o = { baseState: s.baseState, firstBaseUpdate: f, lastBaseUpdate: g, shared: s.shared, effects: s.effects }, t.updateQueue = o;
      return;
    }
    t = o.lastBaseUpdate, t === null ? o.firstBaseUpdate = n : t.next = n, o.lastBaseUpdate = n;
  }
  function Gl(t, n, o, s) {
    var f = t.updateQueue;
    gn = !1;
    var g = f.firstBaseUpdate, S = f.lastBaseUpdate, L = f.shared.pending;
    if (L !== null) {
      f.shared.pending = null;
      var B = L, z = B.next;
      B.next = null, S === null ? g = z : S.next = z, S = B;
      var K = t.alternate;
      K !== null && (K = K.updateQueue, L = K.lastBaseUpdate, L !== S && (L === null ? K.firstBaseUpdate = z : L.next = z, K.lastBaseUpdate = B));
    }
    if (g !== null) {
      var X = f.baseState;
      S = 0, K = z = B = null, L = g;
      do {
        var G = L.lane, oe = L.eventTime;
        if ((s & G) === G) {
          K !== null && (K = K.next = {
            eventTime: oe,
            lane: 0,
            tag: L.tag,
            payload: L.payload,
            callback: L.callback,
            next: null
          });
          e: {
            var de = t, me = L;
            switch (G = n, oe = o, me.tag) {
              case 1:
                if (de = me.payload, typeof de == "function") {
                  X = de.call(oe, X, G);
                  break e;
                }
                X = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = me.payload, G = typeof de == "function" ? de.call(oe, X, G) : de, G == null)
                  break e;
                X = F({}, X, G);
                break e;
              case 2:
                gn = !0;
            }
          }
          L.callback !== null && L.lane !== 0 && (t.flags |= 64, G = f.effects, G === null ? f.effects = [L] : G.push(L));
        } else
          oe = { eventTime: oe, lane: G, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, K === null ? (z = K = oe, B = X) : K = K.next = oe, S |= G;
        if (L = L.next, L === null) {
          if (L = f.shared.pending, L === null)
            break;
          G = L, L = G.next, G.next = null, f.lastBaseUpdate = G, f.shared.pending = null;
        }
      } while (1);
      if (K === null && (B = X), f.baseState = B, f.firstBaseUpdate = z, f.lastBaseUpdate = K, n = f.shared.interleaved, n !== null) {
        f = n;
        do
          S |= f.lane, f = f.next;
        while (f !== n);
      } else
        g === null && (f.shared.lanes = 0);
      Vn |= S, t.lanes = S, t.memoizedState = X;
    }
  }
  function q1(t, n, o) {
    if (t = n.effects, n.effects = null, t !== null)
      for (n = 0; n < t.length; n++) {
        var s = t[n], f = s.callback;
        if (f !== null) {
          if (s.callback = null, s = o, typeof f != "function")
            throw Error(a(191, f));
          f.call(s);
        }
      }
  }
  var W1 = new e.Component().refs;
  function Es(t, n, o, s) {
    n = t.memoizedState, o = o(s, n), o = o == null ? n : F({}, n, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var Kl = { isMounted: function(t) {
    return (t = t._reactInternals) ? Bn(t) === t : !1;
  }, enqueueSetState: function(t, n, o) {
    t = t._reactInternals;
    var s = Et(), f = En(t), g = Wr(s, f);
    g.payload = n, o != null && (g.callback = o), n = hn(t, g, f), n !== null && (yr(n, t, f, s), Wl(n, t, f));
  }, enqueueReplaceState: function(t, n, o) {
    t = t._reactInternals;
    var s = Et(), f = En(t), g = Wr(s, f);
    g.tag = 1, g.payload = n, o != null && (g.callback = o), n = hn(t, g, f), n !== null && (yr(n, t, f, s), Wl(n, t, f));
  }, enqueueForceUpdate: function(t, n) {
    t = t._reactInternals;
    var o = Et(), s = En(t), f = Wr(o, s);
    f.tag = 2, n != null && (f.callback = n), n = hn(t, f, s), n !== null && (yr(n, t, s, o), Wl(n, t, s));
  } };
  function G1(t, n, o, s, f, g, S) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, g, S) : n.prototype && n.prototype.isPureReactComponent ? !vo(o, s) || !vo(f, g) : !0;
  }
  function K1(t, n, o) {
    var s = !1, f = fn, g = n.contextType;
    return typeof g == "object" && g !== null ? g = Jt(g) : (f = Ct(n) ? Pn : dt.current, s = n.contextTypes, g = (s = s != null) ? Ea(t, f) : fn), n = new n(o, g), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Kl, t.stateNode = n, n._reactInternals = t, s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = g), n;
  }
  function Y1(t, n, o, s) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== t && Kl.enqueueReplaceState(n, n.state, null);
  }
  function xs(t, n, o, s) {
    var f = t.stateNode;
    f.props = o, f.state = t.memoizedState, f.refs = W1, bs(t);
    var g = n.contextType;
    typeof g == "object" && g !== null ? f.context = Jt(g) : (g = Ct(n) ? Pn : dt.current, f.context = Ea(t, g)), f.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (Es(t, n, g, o), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (n = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), n !== f.state && Kl.enqueueReplaceState(f, f.state, null), Gl(t, o, f, s), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Co(t, n, o) {
    if (t = o.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(a(309));
          var s = o.stateNode;
        }
        if (!s)
          throw Error(a(147, t));
        var f = s, g = "" + t;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === g ? n.ref : (n = function(S) {
          var L = f.refs;
          L === W1 && (L = f.refs = {}), S === null ? delete L[g] : L[g] = S;
        }, n._stringRef = g, n);
      }
      if (typeof t != "string")
        throw Error(a(284));
      if (!o._owner)
        throw Error(a(290, t));
    }
    return t;
  }
  function Yl(t, n) {
    throw t = Object.prototype.toString.call(n), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
  }
  function X1(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Q1(t) {
    function n(N, I) {
      if (t) {
        var H = N.deletions;
        H === null ? (N.deletions = [I], N.flags |= 16) : H.push(I);
      }
    }
    function o(N, I) {
      if (!t)
        return null;
      for (; I !== null; )
        n(N, I), I = I.sibling;
      return null;
    }
    function s(N, I) {
      for (N = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? N.set(I.key, I) : N.set(I.index, I), I = I.sibling;
      return N;
    }
    function f(N, I) {
      return N = wn(N, I), N.index = 0, N.sibling = null, N;
    }
    function g(N, I, H) {
      return N.index = H, t ? (H = N.alternate, H !== null ? (H = H.index, H < I ? (N.flags |= 2, I) : H) : (N.flags |= 2, I)) : (N.flags |= 1048576, I);
    }
    function S(N) {
      return t && N.alternate === null && (N.flags |= 2), N;
    }
    function L(N, I, H, ee) {
      return I === null || I.tag !== 6 ? (I = ac(H, N.mode, ee), I.return = N, I) : (I = f(I, H), I.return = N, I);
    }
    function B(N, I, H, ee) {
      var ge = H.type;
      return ge === $ ? K(N, I, H.props.children, ee, H.key) : I !== null && (I.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === re && X1(ge) === I.type) ? (ee = f(I, H.props), ee.ref = Co(N, I, H), ee.return = N, ee) : (ee = gi(H.type, H.key, H.props, null, N.mode, ee), ee.ref = Co(N, I, H), ee.return = N, ee);
    }
    function z(N, I, H, ee) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== H.containerInfo || I.stateNode.implementation !== H.implementation ? (I = oc(H, N.mode, ee), I.return = N, I) : (I = f(I, H.children || []), I.return = N, I);
    }
    function K(N, I, H, ee, ge) {
      return I === null || I.tag !== 7 ? (I = Gn(H, N.mode, ee, ge), I.return = N, I) : (I = f(I, H), I.return = N, I);
    }
    function X(N, I, H) {
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return I = ac("" + I, N.mode, H), I.return = N, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case T:
            return H = gi(I.type, I.key, I.props, null, N.mode, H), H.ref = Co(N, null, I), H.return = N, H;
          case R:
            return I = oc(I, N.mode, H), I.return = N, I;
          case re:
            var ee = I._init;
            return X(N, ee(I._payload), H);
        }
        if (ze(I) || W(I))
          return I = Gn(I, N.mode, H, null), I.return = N, I;
        Yl(N, I);
      }
      return null;
    }
    function G(N, I, H, ee) {
      var ge = I !== null ? I.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return ge !== null ? null : L(N, I, "" + H, ee);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case T:
            return H.key === ge ? B(N, I, H, ee) : null;
          case R:
            return H.key === ge ? z(N, I, H, ee) : null;
          case re:
            return ge = H._init, G(
              N,
              I,
              ge(H._payload),
              ee
            );
        }
        if (ze(H) || W(H))
          return ge !== null ? null : K(N, I, H, ee, null);
        Yl(N, H);
      }
      return null;
    }
    function oe(N, I, H, ee, ge) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number")
        return N = N.get(H) || null, L(I, N, "" + ee, ge);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case T:
            return N = N.get(ee.key === null ? H : ee.key) || null, B(I, N, ee, ge);
          case R:
            return N = N.get(ee.key === null ? H : ee.key) || null, z(I, N, ee, ge);
          case re:
            var he = ee._init;
            return oe(N, I, H, he(ee._payload), ge);
        }
        if (ze(ee) || W(ee))
          return N = N.get(H) || null, K(I, N, ee, ge, null);
        Yl(I, ee);
      }
      return null;
    }
    function de(N, I, H, ee) {
      for (var ge = null, he = null, ye = I, Ee = I = 0, rt = null; ye !== null && Ee < H.length; Ee++) {
        ye.index > Ee ? (rt = ye, ye = null) : rt = ye.sibling;
        var Ce = G(N, ye, H[Ee], ee);
        if (Ce === null) {
          ye === null && (ye = rt);
          break;
        }
        t && ye && Ce.alternate === null && n(N, ye), I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce, ye = rt;
      }
      if (Ee === H.length)
        return o(N, ye), Be && jn(N, Ee), ge;
      if (ye === null) {
        for (; Ee < H.length; Ee++)
          ye = X(N, H[Ee], ee), ye !== null && (I = g(ye, I, Ee), he === null ? ge = ye : he.sibling = ye, he = ye);
        return Be && jn(N, Ee), ge;
      }
      for (ye = s(N, ye); Ee < H.length; Ee++)
        rt = oe(ye, N, Ee, H[Ee], ee), rt !== null && (t && rt.alternate !== null && ye.delete(rt.key === null ? Ee : rt.key), I = g(rt, I, Ee), he === null ? ge = rt : he.sibling = rt, he = rt);
      return t && ye.forEach(function(Sn) {
        return n(N, Sn);
      }), Be && jn(N, Ee), ge;
    }
    function me(N, I, H, ee) {
      var ge = W(H);
      if (typeof ge != "function")
        throw Error(a(150));
      if (H = ge.call(H), H == null)
        throw Error(a(151));
      for (var he = ge = null, ye = I, Ee = I = 0, rt = null, Ce = H.next(); ye !== null && !Ce.done; Ee++, Ce = H.next()) {
        ye.index > Ee ? (rt = ye, ye = null) : rt = ye.sibling;
        var Sn = G(N, ye, Ce.value, ee);
        if (Sn === null) {
          ye === null && (ye = rt);
          break;
        }
        t && ye && Sn.alternate === null && n(N, ye), I = g(Sn, I, Ee), he === null ? ge = Sn : he.sibling = Sn, he = Sn, ye = rt;
      }
      if (Ce.done)
        return o(
          N,
          ye
        ), Be && jn(N, Ee), ge;
      if (ye === null) {
        for (; !Ce.done; Ee++, Ce = H.next())
          Ce = X(N, Ce.value, ee), Ce !== null && (I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce);
        return Be && jn(N, Ee), ge;
      }
      for (ye = s(N, ye); !Ce.done; Ee++, Ce = H.next())
        Ce = oe(ye, N, Ee, Ce.value, ee), Ce !== null && (t && Ce.alternate !== null && ye.delete(Ce.key === null ? Ee : Ce.key), I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce);
      return t && ye.forEach(function(Cv) {
        return n(N, Cv);
      }), Be && jn(N, Ee), ge;
    }
    function qe(N, I, H, ee) {
      if (typeof H == "object" && H !== null && H.type === $ && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case T:
            e: {
              for (var ge = H.key, he = I; he !== null; ) {
                if (he.key === ge) {
                  if (ge = H.type, ge === $) {
                    if (he.tag === 7) {
                      o(N, he.sibling), I = f(he, H.props.children), I.return = N, N = I;
                      break e;
                    }
                  } else if (he.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === re && X1(ge) === he.type) {
                    o(N, he.sibling), I = f(he, H.props), I.ref = Co(N, he, H), I.return = N, N = I;
                    break e;
                  }
                  o(N, he);
                  break;
                } else
                  n(N, he);
                he = he.sibling;
              }
              H.type === $ ? (I = Gn(H.props.children, N.mode, ee, H.key), I.return = N, N = I) : (ee = gi(H.type, H.key, H.props, null, N.mode, ee), ee.ref = Co(N, I, H), ee.return = N, N = ee);
            }
            return S(N);
          case R:
            e: {
              for (he = H.key; I !== null; ) {
                if (I.key === he)
                  if (I.tag === 4 && I.stateNode.containerInfo === H.containerInfo && I.stateNode.implementation === H.implementation) {
                    o(N, I.sibling), I = f(I, H.children || []), I.return = N, N = I;
                    break e;
                  } else {
                    o(N, I);
                    break;
                  }
                else
                  n(N, I);
                I = I.sibling;
              }
              I = oc(H, N.mode, ee), I.return = N, N = I;
            }
            return S(N);
          case re:
            return he = H._init, qe(N, I, he(H._payload), ee);
        }
        if (ze(H))
          return de(N, I, H, ee);
        if (W(H))
          return me(N, I, H, ee);
        Yl(N, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, I !== null && I.tag === 6 ? (o(N, I.sibling), I = f(I, H), I.return = N, N = I) : (o(N, I), I = ac(H, N.mode, ee), I.return = N, N = I), S(N)) : o(N, I);
    }
    return qe;
  }
  var ka = Q1(!0), J1 = Q1(!1), ko = {}, Cr = pn(ko), _o = pn(ko), Oo = pn(ko);
  function Zn(t) {
    if (t === ko)
      throw Error(a(174));
    return t;
  }
  function ws(t, n) {
    switch (Re(Oo, n), Re(_o, t), Re(Cr, ko), t = n.nodeType, t) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : We(null, "");
        break;
      default:
        t = t === 8 ? n.parentNode : n, n = t.namespaceURI || null, t = t.tagName, n = We(n, t);
    }
    $e(Cr), Re(Cr, n);
  }
  function _a() {
    $e(Cr), $e(_o), $e(Oo);
  }
  function ep(t) {
    Zn(Oo.current);
    var n = Zn(Cr.current), o = We(n, t.type);
    n !== o && (Re(_o, t), Re(Cr, o));
  }
  function Ss(t) {
    _o.current === t && ($e(Cr), $e(_o));
  }
  var Pe = pn(0);
  function Xl(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var o = n.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var As = [];
  function Cs() {
    for (var t = 0; t < As.length; t++)
      As[t]._workInProgressVersionPrimary = null;
    As.length = 0;
  }
  var Ql = _.ReactCurrentDispatcher, ks = _.ReactCurrentBatchConfig, zn = 0, Ne = null, Ye = null, et = null, Jl = !1, To = !1, Fo = 0, Wy = 0;
  function pt() {
    throw Error(a(321));
  }
  function _s(t, n) {
    if (n === null)
      return !1;
    for (var o = 0; o < n.length && o < t.length; o++)
      if (!pr(t[o], n[o]))
        return !1;
    return !0;
  }
  function Os(t, n, o, s, f, g) {
    if (zn = g, Ne = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Ql.current = t === null || t.memoizedState === null ? Xy : Qy, t = o(s, f), To) {
      g = 0;
      do {
        if (To = !1, Fo = 0, 25 <= g)
          throw Error(a(301));
        g += 1, et = Ye = null, n.updateQueue = null, Ql.current = Jy, t = o(s, f);
      } while (To);
    }
    if (Ql.current = ri, n = Ye !== null && Ye.next !== null, zn = 0, et = Ye = Ne = null, Jl = !1, n)
      throw Error(a(300));
    return t;
  }
  function Ts() {
    var t = Fo !== 0;
    return Fo = 0, t;
  }
  function kr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return et === null ? Ne.memoizedState = et = t : et = et.next = t, et;
  }
  function er() {
    if (Ye === null) {
      var t = Ne.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = Ye.next;
    var n = et === null ? Ne.memoizedState : et.next;
    if (n !== null)
      et = n, Ye = t;
    else {
      if (t === null)
        throw Error(a(310));
      Ye = t, t = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, et === null ? Ne.memoizedState = et = t : et = et.next = t;
    }
    return et;
  }
  function Ro(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Fs(t) {
    var n = er(), o = n.queue;
    if (o === null)
      throw Error(a(311));
    o.lastRenderedReducer = t;
    var s = Ye, f = s.baseQueue, g = o.pending;
    if (g !== null) {
      if (f !== null) {
        var S = f.next;
        f.next = g.next, g.next = S;
      }
      s.baseQueue = f = g, o.pending = null;
    }
    if (f !== null) {
      g = f.next, s = s.baseState;
      var L = S = null, B = null, z = g;
      do {
        var K = z.lane;
        if ((zn & K) === K)
          B !== null && (B = B.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), s = z.hasEagerState ? z.eagerState : t(s, z.action);
        else {
          var X = {
            lane: K,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          B === null ? (L = B = X, S = s) : B = B.next = X, Ne.lanes |= K, Vn |= K;
        }
        z = z.next;
      } while (z !== null && z !== g);
      B === null ? S = s : B.next = L, pr(s, n.memoizedState) || (kt = !0), n.memoizedState = s, n.baseState = S, n.baseQueue = B, o.lastRenderedState = s;
    }
    if (t = o.interleaved, t !== null) {
      f = t;
      do
        g = f.lane, Ne.lanes |= g, Vn |= g, f = f.next;
      while (f !== t);
    } else
      f === null && (o.lanes = 0);
    return [n.memoizedState, o.dispatch];
  }
  function Rs(t) {
    var n = er(), o = n.queue;
    if (o === null)
      throw Error(a(311));
    o.lastRenderedReducer = t;
    var s = o.dispatch, f = o.pending, g = n.memoizedState;
    if (f !== null) {
      o.pending = null;
      var S = f = f.next;
      do
        g = t(g, S.action), S = S.next;
      while (S !== f);
      pr(g, n.memoizedState) || (kt = !0), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), o.lastRenderedState = g;
    }
    return [g, s];
  }
  function tp() {
  }
  function rp(t, n) {
    var o = Ne, s = er(), f = n(), g = !pr(s.memoizedState, f);
    if (g && (s.memoizedState = f, kt = !0), s = s.queue, Ls(op.bind(null, o, s, t), [t]), s.getSnapshot !== n || g || et !== null && et.memoizedState.tag & 1) {
      if (o.flags |= 2048, Lo(9, ap.bind(null, o, s, f, n), void 0, null), tt === null)
        throw Error(a(349));
      zn & 30 || np(o, n, f);
    }
    return f;
  }
  function np(t, n, o) {
    t.flags |= 16384, t = { getSnapshot: n, value: o }, n = Ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ne.updateQueue = n, n.stores = [t]) : (o = n.stores, o === null ? n.stores = [t] : o.push(t));
  }
  function ap(t, n, o, s) {
    n.value = o, n.getSnapshot = s, lp(n) && ip(t);
  }
  function op(t, n, o) {
    return o(function() {
      lp(n) && ip(t);
    });
  }
  function lp(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var o = n();
      return !pr(t, o);
    } catch {
      return !0;
    }
  }
  function ip(t) {
    var n = qr(t, 1);
    n !== null && yr(n, t, 1, -1);
  }
  function up(t) {
    var n = kr();
    return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ro, lastRenderedState: t }, n.queue = t, t = t.dispatch = Yy.bind(null, Ne, t), [n.memoizedState, t];
  }
  function Lo(t, n, o, s) {
    return t = { tag: t, create: n, destroy: o, deps: s, next: null }, n = Ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ne.updateQueue = n, n.lastEffect = t.next = t) : (o = n.lastEffect, o === null ? n.lastEffect = t.next = t : (s = o.next, o.next = t, t.next = s, n.lastEffect = t)), t;
  }
  function sp() {
    return er().memoizedState;
  }
  function ei(t, n, o, s) {
    var f = kr();
    Ne.flags |= t, f.memoizedState = Lo(1 | n, o, void 0, s === void 0 ? null : s);
  }
  function ti(t, n, o, s) {
    var f = er();
    s = s === void 0 ? null : s;
    var g = void 0;
    if (Ye !== null) {
      var S = Ye.memoizedState;
      if (g = S.destroy, s !== null && _s(s, S.deps)) {
        f.memoizedState = Lo(n, o, g, s);
        return;
      }
    }
    Ne.flags |= t, f.memoizedState = Lo(1 | n, o, g, s);
  }
  function cp(t, n) {
    return ei(8390656, 8, t, n);
  }
  function Ls(t, n) {
    return ti(2048, 8, t, n);
  }
  function dp(t, n) {
    return ti(4, 2, t, n);
  }
  function pp(t, n) {
    return ti(4, 4, t, n);
  }
  function fp(t, n) {
    if (typeof n == "function")
      return t = t(), n(t), function() {
        n(null);
      };
    if (n != null)
      return t = t(), n.current = t, function() {
        n.current = null;
      };
  }
  function mp(t, n, o) {
    return o = o != null ? o.concat([t]) : null, ti(4, 4, fp.bind(null, n, t), o);
  }
  function Ds() {
  }
  function gp(t, n) {
    var o = er();
    n = n === void 0 ? null : n;
    var s = o.memoizedState;
    return s !== null && n !== null && _s(n, s[1]) ? s[0] : (o.memoizedState = [t, n], t);
  }
  function hp(t, n) {
    var o = er();
    n = n === void 0 ? null : n;
    var s = o.memoizedState;
    return s !== null && n !== null && _s(n, s[1]) ? s[0] : (t = t(), o.memoizedState = [t, n], t);
  }
  function yp(t, n, o) {
    return zn & 21 ? (pr(o, n) || (o = zd(), Ne.lanes |= o, Vn |= o, t.baseState = !0), n) : (t.baseState && (t.baseState = !1, kt = !0), t.memoizedState = o);
  }
  function Gy(t, n) {
    var o = Te;
    Te = o !== 0 && 4 > o ? o : 4, t(!0);
    var s = ks.transition;
    ks.transition = {};
    try {
      t(!1), n();
    } finally {
      Te = o, ks.transition = s;
    }
  }
  function vp() {
    return er().memoizedState;
  }
  function Ky(t, n, o) {
    var s = En(t);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, bp(t))
      Ep(n, o);
    else if (o = z1(t, n, o, s), o !== null) {
      var f = Et();
      yr(o, t, s, f), xp(o, n, s);
    }
  }
  function Yy(t, n, o) {
    var s = En(t), f = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (bp(t))
      Ep(n, f);
    else {
      var g = t.alternate;
      if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null))
        try {
          var S = n.lastRenderedState, L = g(S, o);
          if (f.hasEagerState = !0, f.eagerState = L, pr(L, S)) {
            var B = n.interleaved;
            B === null ? (f.next = f, vs(n)) : (f.next = B.next, B.next = f), n.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      o = z1(t, n, f, s), o !== null && (f = Et(), yr(o, t, s, f), xp(o, n, s));
    }
  }
  function bp(t) {
    var n = t.alternate;
    return t === Ne || n !== null && n === Ne;
  }
  function Ep(t, n) {
    To = Jl = !0;
    var o = t.pending;
    o === null ? n.next = n : (n.next = o.next, o.next = n), t.pending = n;
  }
  function xp(t, n, o) {
    if (o & 4194240) {
      var s = n.lanes;
      s &= t.pendingLanes, o |= s, n.lanes = o, Du(t, o);
    }
  }
  var ri = { readContext: Jt, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useInsertionEffect: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useSyncExternalStore: pt, useId: pt, unstable_isNewReconciler: !1 }, Xy = { readContext: Jt, useCallback: function(t, n) {
    return kr().memoizedState = [t, n === void 0 ? null : n], t;
  }, useContext: Jt, useEffect: cp, useImperativeHandle: function(t, n, o) {
    return o = o != null ? o.concat([t]) : null, ei(
      4194308,
      4,
      fp.bind(null, n, t),
      o
    );
  }, useLayoutEffect: function(t, n) {
    return ei(4194308, 4, t, n);
  }, useInsertionEffect: function(t, n) {
    return ei(4, 2, t, n);
  }, useMemo: function(t, n) {
    var o = kr();
    return n = n === void 0 ? null : n, t = t(), o.memoizedState = [t, n], t;
  }, useReducer: function(t, n, o) {
    var s = kr();
    return n = o !== void 0 ? o(n) : n, s.memoizedState = s.baseState = n, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: n }, s.queue = t, t = t.dispatch = Ky.bind(null, Ne, t), [s.memoizedState, t];
  }, useRef: function(t) {
    var n = kr();
    return t = { current: t }, n.memoizedState = t;
  }, useState: up, useDebugValue: Ds, useDeferredValue: function(t) {
    return kr().memoizedState = t;
  }, useTransition: function() {
    var t = up(!1), n = t[0];
    return t = Gy.bind(null, t[1]), kr().memoizedState = t, [n, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, n, o) {
    var s = Ne, f = kr();
    if (Be) {
      if (o === void 0)
        throw Error(a(407));
      o = o();
    } else {
      if (o = n(), tt === null)
        throw Error(a(349));
      zn & 30 || np(s, n, o);
    }
    f.memoizedState = o;
    var g = { value: o, getSnapshot: n };
    return f.queue = g, cp(op.bind(
      null,
      s,
      g,
      t
    ), [t]), s.flags |= 2048, Lo(9, ap.bind(null, s, g, o, n), void 0, null), o;
  }, useId: function() {
    var t = kr(), n = tt.identifierPrefix;
    if (Be) {
      var o = Ur, s = Vr;
      o = (s & ~(1 << 32 - dr(s) - 1)).toString(32) + o, n = ":" + n + "R" + o, o = Fo++, 0 < o && (n += "H" + o.toString(32)), n += ":";
    } else
      o = Wy++, n = ":" + n + "r" + o.toString(32) + ":";
    return t.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, Qy = {
    readContext: Jt,
    useCallback: gp,
    useContext: Jt,
    useEffect: Ls,
    useImperativeHandle: mp,
    useInsertionEffect: dp,
    useLayoutEffect: pp,
    useMemo: hp,
    useReducer: Fs,
    useRef: sp,
    useState: function() {
      return Fs(Ro);
    },
    useDebugValue: Ds,
    useDeferredValue: function(t) {
      var n = er();
      return yp(n, Ye.memoizedState, t);
    },
    useTransition: function() {
      var t = Fs(Ro)[0], n = er().memoizedState;
      return [t, n];
    },
    useMutableSource: tp,
    useSyncExternalStore: rp,
    useId: vp,
    unstable_isNewReconciler: !1
  }, Jy = { readContext: Jt, useCallback: gp, useContext: Jt, useEffect: Ls, useImperativeHandle: mp, useInsertionEffect: dp, useLayoutEffect: pp, useMemo: hp, useReducer: Rs, useRef: sp, useState: function() {
    return Rs(Ro);
  }, useDebugValue: Ds, useDeferredValue: function(t) {
    var n = er();
    return Ye === null ? n.memoizedState = t : yp(n, Ye.memoizedState, t);
  }, useTransition: function() {
    var t = Rs(Ro)[0], n = er().memoizedState;
    return [t, n];
  }, useMutableSource: tp, useSyncExternalStore: rp, useId: vp, unstable_isNewReconciler: !1 };
  function Oa(t, n) {
    try {
      var o = "", s = n;
      do
        o += te(s), s = s.return;
      while (s);
      var f = o;
    } catch (g) {
      f = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: t, source: n, stack: f, digest: null };
  }
  function Ms(t, n, o) {
    return { value: t, source: null, stack: o ?? null, digest: n ?? null };
  }
  function $s(t, n) {
    try {
      console.error(n.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var ev = typeof WeakMap == "function" ? WeakMap : Map;
  function wp(t, n, o) {
    o = Wr(-1, o), o.tag = 3, o.payload = { element: null };
    var s = n.value;
    return o.callback = function() {
      si || (si = !0, Ys = s), $s(t, n);
    }, o;
  }
  function Sp(t, n, o) {
    o = Wr(-1, o), o.tag = 3;
    var s = t.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = n.value;
      o.payload = function() {
        return s(f);
      }, o.callback = function() {
        $s(t, n);
      };
    }
    var g = t.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
      $s(t, n), typeof s != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
      var S = n.stack;
      this.componentDidCatch(n.value, { componentStack: S !== null ? S : "" });
    }), o;
  }
  function Ap(t, n, o) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new ev();
      var f = /* @__PURE__ */ new Set();
      s.set(n, f);
    } else
      f = s.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(n, f));
    f.has(o) || (f.add(o), t = mv.bind(null, t, n, o), n.then(t, t));
  }
  function Cp(t) {
    do {
      var n;
      if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function kp(t, n, o, s, f) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = f, t) : (t === n ? t.flags |= 65536 : (t.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (n = Wr(-1, 1), n.tag = 2, hn(o, n, 1))), o.lanes |= 1), t);
  }
  var tv = _.ReactCurrentOwner, kt = !1;
  function bt(t, n, o, s) {
    n.child = t === null ? J1(n, null, o, s) : ka(n, t.child, o, s);
  }
  function _p(t, n, o, s, f) {
    o = o.render;
    var g = n.ref;
    return Ca(n, f), s = Os(t, n, o, s, g, f), o = Ts(), t !== null && !kt ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, Gr(t, n, f)) : (Be && o && ss(n), n.flags |= 1, bt(t, n, s, f), n.child);
  }
  function Op(t, n, o, s, f) {
    if (t === null) {
      var g = o.type;
      return typeof g == "function" && !nc(g) && g.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (n.tag = 15, n.type = g, Tp(t, n, g, s, f)) : (t = gi(o.type, null, s, n, n.mode, f), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (g = t.child, !(t.lanes & f)) {
      var S = g.memoizedProps;
      if (o = o.compare, o = o !== null ? o : vo, o(S, s) && t.ref === n.ref)
        return Gr(t, n, f);
    }
    return n.flags |= 1, t = wn(g, s), t.ref = n.ref, t.return = n, n.child = t;
  }
  function Tp(t, n, o, s, f) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (vo(g, s) && t.ref === n.ref)
        if (kt = !1, n.pendingProps = s = g, (t.lanes & f) !== 0)
          t.flags & 131072 && (kt = !0);
        else
          return n.lanes = t.lanes, Gr(t, n, f);
    }
    return Bs(t, n, o, s, f);
  }
  function Fp(t, n, o) {
    var s = n.pendingProps, f = s.children, g = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(Fa, qt), qt |= o;
      else {
        if (!(o & 1073741824))
          return t = g !== null ? g.baseLanes | o : o, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, n.updateQueue = null, Re(Fa, qt), qt |= t, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = g !== null ? g.baseLanes : o, Re(Fa, qt), qt |= s;
      }
    else
      g !== null ? (s = g.baseLanes | o, n.memoizedState = null) : s = o, Re(Fa, qt), qt |= s;
    return bt(t, n, f, o), n.child;
  }
  function Rp(t, n) {
    var o = n.ref;
    (t === null && o !== null || t !== null && t.ref !== o) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Bs(t, n, o, s, f) {
    var g = Ct(o) ? Pn : dt.current;
    return g = Ea(n, g), Ca(n, f), o = Os(t, n, o, s, g, f), s = Ts(), t !== null && !kt ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, Gr(t, n, f)) : (Be && s && ss(n), n.flags |= 1, bt(t, n, o, f), n.child);
  }
  function Lp(t, n, o, s, f) {
    if (Ct(o)) {
      var g = !0;
      jl(n);
    } else
      g = !1;
    if (Ca(n, f), n.stateNode === null)
      ai(t, n), K1(n, o, s), xs(n, o, s, f), s = !0;
    else if (t === null) {
      var S = n.stateNode, L = n.memoizedProps;
      S.props = L;
      var B = S.context, z = o.contextType;
      typeof z == "object" && z !== null ? z = Jt(z) : (z = Ct(o) ? Pn : dt.current, z = Ea(n, z));
      var K = o.getDerivedStateFromProps, X = typeof K == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      X || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (L !== s || B !== z) && Y1(n, S, s, z), gn = !1;
      var G = n.memoizedState;
      S.state = G, Gl(n, s, S, f), B = n.memoizedState, L !== s || G !== B || At.current || gn ? (typeof K == "function" && (Es(n, o, K, s), B = n.memoizedState), (L = gn || G1(n, o, L, s, G, B, z)) ? (X || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = B), S.props = s, S.state = B, S.context = z, s = L) : (typeof S.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
    } else {
      S = n.stateNode, V1(t, n), L = n.memoizedProps, z = n.type === n.elementType ? L : mr(n.type, L), S.props = z, X = n.pendingProps, G = S.context, B = o.contextType, typeof B == "object" && B !== null ? B = Jt(B) : (B = Ct(o) ? Pn : dt.current, B = Ea(n, B));
      var oe = o.getDerivedStateFromProps;
      (K = typeof oe == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (L !== X || G !== B) && Y1(n, S, s, B), gn = !1, G = n.memoizedState, S.state = G, Gl(n, s, S, f);
      var de = n.memoizedState;
      L !== X || G !== de || At.current || gn ? (typeof oe == "function" && (Es(n, o, oe, s), de = n.memoizedState), (z = gn || G1(n, o, z, s, G, de, B) || !1) ? (K || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(s, de, B), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(s, de, B)), typeof S.componentDidUpdate == "function" && (n.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || L === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = de), S.props = s, S.state = de, S.context = B, s = z) : (typeof S.componentDidUpdate != "function" || L === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), s = !1);
    }
    return Is(t, n, o, s, g, f);
  }
  function Is(t, n, o, s, f, g) {
    Rp(t, n);
    var S = (n.flags & 128) !== 0;
    if (!s && !S)
      return f && B1(n, o, !1), Gr(t, n, g);
    s = n.stateNode, tv.current = n;
    var L = S && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return n.flags |= 1, t !== null && S ? (n.child = ka(n, t.child, null, g), n.child = ka(n, null, L, g)) : bt(t, n, L, g), n.memoizedState = s.state, f && B1(n, o, !0), n.child;
  }
  function Dp(t) {
    var n = t.stateNode;
    n.pendingContext ? M1(t, n.pendingContext, n.pendingContext !== n.context) : n.context && M1(t, n.context, !1), ws(t, n.containerInfo);
  }
  function Mp(t, n, o, s, f) {
    return Sa(), fs(f), n.flags |= 256, bt(t, n, o, s), n.child;
  }
  var Ps = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ns(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function $p(t, n, o) {
    var s = n.pendingProps, f = Pe.current, g = !1, S = (n.flags & 128) !== 0, L;
    if ((L = S) || (L = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), L ? (g = !0, n.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Re(Pe, f & 1), t === null)
      return ps(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (n.mode & 1 ? t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (S = s.children, t = s.fallback, g ? (s = n.mode, g = n.child, S = { mode: "hidden", children: S }, !(s & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = S) : g = hi(S, s, 0, null), t = Gn(t, s, o, null), g.return = n, t.return = n, g.sibling = t, n.child = g, n.child.memoizedState = Ns(o), n.memoizedState = Ps, t) : js(n, S));
    if (f = t.memoizedState, f !== null && (L = f.dehydrated, L !== null))
      return rv(t, n, S, s, L, f, o);
    if (g) {
      g = s.fallback, S = n.mode, f = t.child, L = f.sibling;
      var B = { mode: "hidden", children: s.children };
      return !(S & 1) && n.child !== f ? (s = n.child, s.childLanes = 0, s.pendingProps = B, n.deletions = null) : (s = wn(f, B), s.subtreeFlags = f.subtreeFlags & 14680064), L !== null ? g = wn(L, g) : (g = Gn(g, S, o, null), g.flags |= 2), g.return = n, s.return = n, s.sibling = g, n.child = s, s = g, g = n.child, S = t.child.memoizedState, S = S === null ? Ns(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, g.memoizedState = S, g.childLanes = t.childLanes & ~o, n.memoizedState = Ps, s;
    }
    return g = t.child, t = g.sibling, s = wn(g, { mode: "visible", children: s.children }), !(n.mode & 1) && (s.lanes = o), s.return = n, s.sibling = null, t !== null && (o = n.deletions, o === null ? (n.deletions = [t], n.flags |= 16) : o.push(t)), n.child = s, n.memoizedState = null, s;
  }
  function js(t, n) {
    return n = hi({ mode: "visible", children: n }, t.mode, 0, null), n.return = t, t.child = n;
  }
  function ni(t, n, o, s) {
    return s !== null && fs(s), ka(n, t.child, null, o), t = js(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
  }
  function rv(t, n, o, s, f, g, S) {
    if (o)
      return n.flags & 256 ? (n.flags &= -257, s = Ms(Error(a(422))), ni(t, n, S, s)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (g = s.fallback, f = n.mode, s = hi({ mode: "visible", children: s.children }, f, 0, null), g = Gn(g, f, S, null), g.flags |= 2, s.return = n, g.return = n, s.sibling = g, n.child = s, n.mode & 1 && ka(n, t.child, null, S), n.child.memoizedState = Ns(S), n.memoizedState = Ps, g);
    if (!(n.mode & 1))
      return ni(t, n, S, null);
    if (f.data === "$!") {
      if (s = f.nextSibling && f.nextSibling.dataset, s)
        var L = s.dgst;
      return s = L, g = Error(a(419)), s = Ms(g, s, void 0), ni(t, n, S, s);
    }
    if (L = (S & t.childLanes) !== 0, kt || L) {
      if (s = tt, s !== null) {
        switch (S & -S) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (s.suspendedLanes | S) ? 0 : f, f !== 0 && f !== g.retryLane && (g.retryLane = f, qr(t, f), yr(s, t, f, -1));
      }
      return rc(), s = Ms(Error(a(421))), ni(t, n, S, s);
    }
    return f.data === "$?" ? (n.flags |= 128, n.child = t.child, n = gv.bind(null, t), f._reactRetry = n, null) : (t = g.treeContext, Ut = dn(f.nextSibling), Vt = n, Be = !0, fr = null, t !== null && (Xt[Qt++] = Vr, Xt[Qt++] = Ur, Xt[Qt++] = Nn, Vr = t.id, Ur = t.overflow, Nn = n), n = js(n, s.children), n.flags |= 4096, n);
  }
  function Bp(t, n, o) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n), ys(t.return, n, o);
  }
  function Hs(t, n, o, s, f) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: f } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = s, g.tail = o, g.tailMode = f);
  }
  function Ip(t, n, o) {
    var s = n.pendingProps, f = s.revealOrder, g = s.tail;
    if (bt(t, n, s.children, o), s = Pe.current, s & 2)
      s = s & 1 | 2, n.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        e:
          for (t = n.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && Bp(t, o, n);
            else if (t.tag === 19)
              Bp(t, o, n);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === n)
              break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === n)
                break e;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      s &= 1;
    }
    if (Re(Pe, s), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = n.child, f = null; o !== null; )
            t = o.alternate, t !== null && Xl(t) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = n.child, n.child = null) : (f = o.sibling, o.sibling = null), Hs(n, !1, f, o, g);
          break;
        case "backwards":
          for (o = null, f = n.child, n.child = null; f !== null; ) {
            if (t = f.alternate, t !== null && Xl(t) === null) {
              n.child = f;
              break;
            }
            t = f.sibling, f.sibling = o, o = f, f = t;
          }
          Hs(n, !0, o, null, g);
          break;
        case "together":
          Hs(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function ai(t, n) {
    !(n.mode & 1) && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Gr(t, n, o) {
    if (t !== null && (n.dependencies = t.dependencies), Vn |= n.lanes, !(o & n.childLanes))
      return null;
    if (t !== null && n.child !== t.child)
      throw Error(a(153));
    if (n.child !== null) {
      for (t = n.child, o = wn(t, t.pendingProps), n.child = o, o.return = n; t.sibling !== null; )
        t = t.sibling, o = o.sibling = wn(t, t.pendingProps), o.return = n;
      o.sibling = null;
    }
    return n.child;
  }
  function nv(t, n, o) {
    switch (n.tag) {
      case 3:
        Dp(n), Sa();
        break;
      case 5:
        ep(n);
        break;
      case 1:
        Ct(n.type) && jl(n);
        break;
      case 4:
        ws(n, n.stateNode.containerInfo);
        break;
      case 10:
        var s = n.type._context, f = n.memoizedProps.value;
        Re(Ul, s._currentValue), s._currentValue = f;
        break;
      case 13:
        if (s = n.memoizedState, s !== null)
          return s.dehydrated !== null ? (Re(Pe, Pe.current & 1), n.flags |= 128, null) : o & n.child.childLanes ? $p(t, n, o) : (Re(Pe, Pe.current & 1), t = Gr(t, n, o), t !== null ? t.sibling : null);
        Re(Pe, Pe.current & 1);
        break;
      case 19:
        if (s = (o & n.childLanes) !== 0, t.flags & 128) {
          if (s)
            return Ip(t, n, o);
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Re(Pe, Pe.current), s)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Fp(t, n, o);
    }
    return Gr(t, n, o);
  }
  var Pp, Zs, Np, jp;
  Pp = function(t, n) {
    for (var o = n.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        t.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === n)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Zs = function() {
  }, Np = function(t, n, o, s) {
    var f = t.memoizedProps;
    if (f !== s) {
      t = n.stateNode, Zn(Cr.current);
      var g = null;
      switch (o) {
        case "input":
          f = vt(t, f), s = vt(t, s), g = [];
          break;
        case "select":
          f = F({}, f, { value: void 0 }), s = F({}, s, { value: void 0 }), g = [];
          break;
        case "textarea":
          f = St(t, f), s = St(t, s), g = [];
          break;
        default:
          typeof f.onClick != "function" && typeof s.onClick == "function" && (t.onclick = Il);
      }
      cr(o, s);
      var S;
      o = null;
      for (z in f)
        if (!s.hasOwnProperty(z) && f.hasOwnProperty(z) && f[z] != null)
          if (z === "style") {
            var L = f[z];
            for (S in L)
              L.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (u.hasOwnProperty(z) ? g || (g = []) : (g = g || []).push(z, null));
      for (z in s) {
        var B = s[z];
        if (L = f?.[z], s.hasOwnProperty(z) && B !== L && (B != null || L != null))
          if (z === "style")
            if (L) {
              for (S in L)
                !L.hasOwnProperty(S) || B && B.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
              for (S in B)
                B.hasOwnProperty(S) && L[S] !== B[S] && (o || (o = {}), o[S] = B[S]);
            } else
              o || (g || (g = []), g.push(
                z,
                o
              )), o = B;
          else
            z === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, L = L ? L.__html : void 0, B != null && L !== B && (g = g || []).push(z, B)) : z === "children" ? typeof B != "string" && typeof B != "number" || (g = g || []).push(z, "" + B) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (u.hasOwnProperty(z) ? (B != null && z === "onScroll" && Me("scroll", t), g || L === B || (g = [])) : (g = g || []).push(z, B));
      }
      o && (g = g || []).push("style", o);
      var z = g;
      (n.updateQueue = z) && (n.flags |= 4);
    }
  }, jp = function(t, n, o, s) {
    o !== s && (n.flags |= 4);
  };
  function Do(t, n) {
    if (!Be)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var o = null; n !== null; )
            n.alternate !== null && (o = n), n = n.sibling;
          o === null ? t.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = t.tail;
          for (var s = null; o !== null; )
            o.alternate !== null && (s = o), o = o.sibling;
          s === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null;
      }
  }
  function ft(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, o = 0, s = 0;
    if (n)
      for (var f = t.child; f !== null; )
        o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 14680064, s |= f.flags & 14680064, f.return = t, f = f.sibling;
    else
      for (f = t.child; f !== null; )
        o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= s, t.childLanes = o, n;
  }
  function av(t, n, o) {
    var s = n.pendingProps;
    switch (cs(n), n.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(n), null;
      case 1:
        return Ct(n.type) && Nl(), ft(n), null;
      case 3:
        return s = n.stateNode, _a(), $e(At), $e(dt), Cs(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && (Vl(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, fr !== null && (Js(fr), fr = null))), Zs(t, n), ft(n), null;
      case 5:
        Ss(n);
        var f = Zn(Oo.current);
        if (o = n.type, t !== null && n.stateNode != null)
          Np(t, n, o, s, f), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!s) {
            if (n.stateNode === null)
              throw Error(a(166));
            return ft(n), null;
          }
          if (t = Zn(Cr.current), Vl(n)) {
            s = n.stateNode, o = n.type;
            var g = n.memoizedProps;
            switch (s[Ar] = n, s[So] = g, t = (n.mode & 1) !== 0, o) {
              case "dialog":
                Me("cancel", s), Me("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", s);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Eo.length; f++)
                  Me(Eo[f], s);
                break;
              case "source":
                Me("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Me(
                  "error",
                  s
                ), Me("load", s);
                break;
              case "details":
                Me("toggle", s);
                break;
              case "input":
                Pt(s, g), Me("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!g.multiple }, Me("invalid", s);
                break;
              case "textarea":
                Nr(s, g), Me("invalid", s);
            }
            cr(o, g), f = null;
            for (var S in g)
              if (g.hasOwnProperty(S)) {
                var L = g[S];
                S === "children" ? typeof L == "string" ? s.textContent !== L && (g.suppressHydrationWarning !== !0 && Bl(s.textContent, L, t), f = ["children", L]) : typeof L == "number" && s.textContent !== "" + L && (g.suppressHydrationWarning !== !0 && Bl(
                  s.textContent,
                  L,
                  t
                ), f = ["children", "" + L]) : u.hasOwnProperty(S) && L != null && S === "onScroll" && Me("scroll", s);
              }
            switch (o) {
              case "input":
                nt(s), Nt(s, g, !0);
                break;
              case "textarea":
                nt(s), jr(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (s.onclick = Il);
            }
            s = f, n.updateQueue = s, s !== null && (n.flags |= 4);
          } else {
            S = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Ht(o)), t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = S.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof s.is == "string" ? t = S.createElement(o, { is: s.is }) : (t = S.createElement(o), o === "select" && (S = t, s.multiple ? S.multiple = !0 : s.size && (S.size = s.size))) : t = S.createElementNS(t, o), t[Ar] = n, t[So] = s, Pp(t, n, !1, !1), n.stateNode = t;
            e: {
              switch (S = Zt(o, s), o) {
                case "dialog":
                  Me("cancel", t), Me("close", t), f = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Me("load", t), f = s;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Eo.length; f++)
                    Me(Eo[f], t);
                  f = s;
                  break;
                case "source":
                  Me("error", t), f = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Me(
                    "error",
                    t
                  ), Me("load", t), f = s;
                  break;
                case "details":
                  Me("toggle", t), f = s;
                  break;
                case "input":
                  Pt(t, s), f = vt(t, s), Me("invalid", t);
                  break;
                case "option":
                  f = s;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!s.multiple }, f = F({}, s, { value: void 0 }), Me("invalid", t);
                  break;
                case "textarea":
                  Nr(t, s), f = St(t, s), Me("invalid", t);
                  break;
                default:
                  f = s;
              }
              cr(o, f), L = f;
              for (g in L)
                if (L.hasOwnProperty(g)) {
                  var B = L[g];
                  g === "style" ? wr(t, B) : g === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, B != null && Ve(t, B)) : g === "children" ? typeof B == "string" ? (o !== "textarea" || B !== "") && Fe(t, B) : typeof B == "number" && Fe(t, "" + B) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (u.hasOwnProperty(g) ? B != null && g === "onScroll" && Me("scroll", t) : B != null && C(t, g, B, S));
                }
              switch (o) {
                case "input":
                  nt(t), Nt(t, s, !1);
                  break;
                case "textarea":
                  nt(t), jr(t);
                  break;
                case "option":
                  s.value != null && t.setAttribute("value", "" + ve(s.value));
                  break;
                case "select":
                  t.multiple = !!s.multiple, g = s.value, g != null ? wt(t, !!s.multiple, g, !1) : s.defaultValue != null && wt(
                    t,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = Il);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ft(n), null;
      case 6:
        if (t && n.stateNode != null)
          jp(t, n, t.memoizedProps, s);
        else {
          if (typeof s != "string" && n.stateNode === null)
            throw Error(a(166));
          if (o = Zn(Oo.current), Zn(Cr.current), Vl(n)) {
            if (s = n.stateNode, o = n.memoizedProps, s[Ar] = n, (g = s.nodeValue !== o) && (t = Vt, t !== null))
              switch (t.tag) {
                case 3:
                  Bl(s.nodeValue, o, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && Bl(s.nodeValue, o, (t.mode & 1) !== 0);
              }
            g && (n.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[Ar] = n, n.stateNode = s;
        }
        return ft(n), null;
      case 13:
        if ($e(Pe), s = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Be && Ut !== null && n.mode & 1 && !(n.flags & 128))
            Z1(), Sa(), n.flags |= 98560, g = !1;
          else if (g = Vl(n), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!g)
                throw Error(a(318));
              if (g = n.memoizedState, g = g !== null ? g.dehydrated : null, !g)
                throw Error(a(317));
              g[Ar] = n;
            } else
              Sa(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ft(n), g = !1;
          } else
            fr !== null && (Js(fr), fr = null), g = !0;
          if (!g)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = o, n) : (s = s !== null, s !== (t !== null && t.memoizedState !== null) && s && (n.child.flags |= 8192, n.mode & 1 && (t === null || Pe.current & 1 ? Xe === 0 && (Xe = 3) : rc())), n.updateQueue !== null && (n.flags |= 4), ft(n), null);
      case 4:
        return _a(), Zs(t, n), t === null && xo(n.stateNode.containerInfo), ft(n), null;
      case 10:
        return hs(n.type._context), ft(n), null;
      case 17:
        return Ct(n.type) && Nl(), ft(n), null;
      case 19:
        if ($e(Pe), g = n.memoizedState, g === null)
          return ft(n), null;
        if (s = (n.flags & 128) !== 0, S = g.rendering, S === null)
          if (s)
            Do(g, !1);
          else {
            if (Xe !== 0 || t !== null && t.flags & 128)
              for (t = n.child; t !== null; ) {
                if (S = Xl(t), S !== null) {
                  for (n.flags |= 128, Do(g, !1), s = S.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), n.subtreeFlags = 0, s = o, o = n.child; o !== null; )
                    g = o, t = s, g.flags &= 14680066, S = g.alternate, S === null ? (g.childLanes = 0, g.lanes = t, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = S.childLanes, g.lanes = S.lanes, g.child = S.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = S.memoizedProps, g.memoizedState = S.memoizedState, g.updateQueue = S.updateQueue, g.type = S.type, t = S.dependencies, g.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), o = o.sibling;
                  return Re(Pe, Pe.current & 1 | 2), n.child;
                }
                t = t.sibling;
              }
            g.tail !== null && Ue() > Ra && (n.flags |= 128, s = !0, Do(g, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = Xl(S), t !== null) {
              if (n.flags |= 128, s = !0, o = t.updateQueue, o !== null && (n.updateQueue = o, n.flags |= 4), Do(g, !0), g.tail === null && g.tailMode === "hidden" && !S.alternate && !Be)
                return ft(n), null;
            } else
              2 * Ue() - g.renderingStartTime > Ra && o !== 1073741824 && (n.flags |= 128, s = !0, Do(g, !1), n.lanes = 4194304);
          g.isBackwards ? (S.sibling = n.child, n.child = S) : (o = g.last, o !== null ? o.sibling = S : n.child = S, g.last = S);
        }
        return g.tail !== null ? (n = g.tail, g.rendering = n, g.tail = n.sibling, g.renderingStartTime = Ue(), n.sibling = null, o = Pe.current, Re(Pe, s ? o & 1 | 2 : o & 1), n) : (ft(n), null);
      case 22:
      case 23:
        return tc(), s = n.memoizedState !== null, t !== null && t.memoizedState !== null !== s && (n.flags |= 8192), s && n.mode & 1 ? qt & 1073741824 && (ft(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ft(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function ov(t, n) {
    switch (cs(n), n.tag) {
      case 1:
        return Ct(n.type) && Nl(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return _a(), $e(At), $e(dt), Cs(), t = n.flags, t & 65536 && !(t & 128) ? (n.flags = t & -65537 | 128, n) : null;
      case 5:
        return Ss(n), null;
      case 13:
        if ($e(Pe), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(a(340));
          Sa();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return $e(Pe), null;
      case 4:
        return _a(), null;
      case 10:
        return hs(n.type._context), null;
      case 22:
      case 23:
        return tc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oi = !1, mt = !1, lv = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
  function Ta(t, n) {
    var o = t.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (s) {
          Ze(t, n, s);
        }
      else
        o.current = null;
  }
  function zs(t, n, o) {
    try {
      o();
    } catch (s) {
      Ze(t, n, s);
    }
  }
  var Hp = !1;
  function iv(t, n) {
    if (ts = Cl, t = v1(), Wu(t)) {
      if ("selectionStart" in t)
        var o = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          o = (o = t.ownerDocument) && o.defaultView || window;
          var s = o.getSelection && o.getSelection();
          if (s && s.rangeCount !== 0) {
            o = s.anchorNode;
            var f = s.anchorOffset, g = s.focusNode;
            s = s.focusOffset;
            try {
              o.nodeType, g.nodeType;
            } catch {
              o = null;
              break e;
            }
            var S = 0, L = -1, B = -1, z = 0, K = 0, X = t, G = null;
            t:
              for (; ; ) {
                for (var oe; X !== o || f !== 0 && X.nodeType !== 3 || (L = S + f), X !== g || s !== 0 && X.nodeType !== 3 || (B = S + s), X.nodeType === 3 && (S += X.nodeValue.length), (oe = X.firstChild) !== null; )
                  G = X, X = oe;
                for (; ; ) {
                  if (X === t)
                    break t;
                  if (G === o && ++z === f && (L = S), G === g && ++K === s && (B = S), (oe = X.nextSibling) !== null)
                    break;
                  X = G, G = X.parentNode;
                }
                X = oe;
              }
            o = L === -1 || B === -1 ? null : { start: L, end: B };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (rs = { focusedElem: t, selectionRange: o }, Cl = !1, ie = n; ie !== null; )
      if (n = ie, t = n.child, (n.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = n, ie = t;
      else
        for (; ie !== null; ) {
          n = ie;
          try {
            var de = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (de !== null) {
                    var me = de.memoizedProps, qe = de.memoizedState, N = n.stateNode, I = N.getSnapshotBeforeUpdate(n.elementType === n.type ? me : mr(n.type, me), qe);
                    N.__reactInternalSnapshotBeforeUpdate = I;
                  }
                  break;
                case 3:
                  var H = n.stateNode.containerInfo;
                  H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (ee) {
            Ze(n, n.return, ee);
          }
          if (t = n.sibling, t !== null) {
            t.return = n.return, ie = t;
            break;
          }
          ie = n.return;
        }
    return de = Hp, Hp = !1, de;
  }
  function Mo(t, n, o) {
    var s = n.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var f = s = s.next;
      do {
        if ((f.tag & t) === t) {
          var g = f.destroy;
          f.destroy = void 0, g !== void 0 && zs(n, o, g);
        }
        f = f.next;
      } while (f !== s);
    }
  }
  function li(t, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var o = n = n.next;
      do {
        if ((o.tag & t) === t) {
          var s = o.create;
          o.destroy = s();
        }
        o = o.next;
      } while (o !== n);
    }
  }
  function Vs(t) {
    var n = t.ref;
    if (n !== null) {
      var o = t.stateNode;
      switch (t.tag) {
        case 5:
          t = o;
          break;
        default:
          t = o;
      }
      typeof n == "function" ? n(t) : n.current = t;
    }
  }
  function Zp(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, Zp(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[Ar], delete n[So], delete n[ls], delete n[zy], delete n[Vy])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function zp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Vp(t) {
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zp(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.flags & 2 || t.child === null || t.tag === 4)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2))
          return t.stateNode;
      }
  }
  function Us(t, n, o) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? o.nodeType === 8 ? o.parentNode.insertBefore(t, n) : o.insertBefore(t, n) : (o.nodeType === 8 ? (n = o.parentNode, n.insertBefore(t, o)) : (n = o, n.appendChild(t)), o = o._reactRootContainer, o != null || n.onclick !== null || (n.onclick = Il));
    else if (s !== 4 && (t = t.child, t !== null))
      for (Us(t, n, o), t = t.sibling; t !== null; )
        Us(t, n, o), t = t.sibling;
  }
  function qs(t, n, o) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? o.insertBefore(t, n) : o.appendChild(t);
    else if (s !== 4 && (t = t.child, t !== null))
      for (qs(t, n, o), t = t.sibling; t !== null; )
        qs(t, n, o), t = t.sibling;
  }
  var ot = null, gr = !1;
  function yn(t, n, o) {
    for (o = o.child; o !== null; )
      Up(t, n, o), o = o.sibling;
  }
  function Up(t, n, o) {
    if (Sr && typeof Sr.onCommitFiberUnmount == "function")
      try {
        Sr.onCommitFiberUnmount(bl, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        mt || Ta(o, n);
      case 6:
        var s = ot, f = gr;
        ot = null, yn(t, n, o), ot = s, gr = f, ot !== null && (gr ? (t = ot, o = o.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : ot.removeChild(o.stateNode));
        break;
      case 18:
        ot !== null && (gr ? (t = ot, o = o.stateNode, t.nodeType === 8 ? os(t.parentNode, o) : t.nodeType === 1 && os(t, o), po(t)) : os(ot, o.stateNode));
        break;
      case 4:
        s = ot, f = gr, ot = o.stateNode.containerInfo, gr = !0, yn(t, n, o), ot = s, gr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mt && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          f = s = s.next;
          do {
            var g = f, S = g.destroy;
            g = g.tag, S !== void 0 && (g & 2 || g & 4) && zs(o, n, S), f = f.next;
          } while (f !== s);
        }
        yn(t, n, o);
        break;
      case 1:
        if (!mt && (Ta(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (L) {
            Ze(o, n, L);
          }
        yn(t, n, o);
        break;
      case 21:
        yn(t, n, o);
        break;
      case 22:
        o.mode & 1 ? (mt = (s = mt) || o.memoizedState !== null, yn(t, n, o), mt = s) : yn(t, n, o);
        break;
      default:
        yn(t, n, o);
    }
  }
  function qp(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new lv()), n.forEach(function(s) {
        var f = hv.bind(null, t, s);
        o.has(s) || (o.add(s), s.then(f, f));
      });
    }
  }
  function hr(t, n) {
    var o = n.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var f = o[s];
        try {
          var g = t, S = n, L = S;
          e:
            for (; L !== null; ) {
              switch (L.tag) {
                case 5:
                  ot = L.stateNode, gr = !1;
                  break e;
                case 3:
                  ot = L.stateNode.containerInfo, gr = !0;
                  break e;
                case 4:
                  ot = L.stateNode.containerInfo, gr = !0;
                  break e;
              }
              L = L.return;
            }
          if (ot === null)
            throw Error(a(160));
          Up(g, S, f), ot = null, gr = !1;
          var B = f.alternate;
          B !== null && (B.return = null), f.return = null;
        } catch (z) {
          Ze(f, n, z);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        Wp(n, t), n = n.sibling;
  }
  function Wp(t, n) {
    var o = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hr(n, t), _r(t), s & 4) {
          try {
            Mo(3, t, t.return), li(3, t);
          } catch (me) {
            Ze(t, t.return, me);
          }
          try {
            Mo(5, t, t.return);
          } catch (me) {
            Ze(t, t.return, me);
          }
        }
        break;
      case 1:
        hr(n, t), _r(t), s & 512 && o !== null && Ta(o, o.return);
        break;
      case 5:
        if (hr(n, t), _r(t), s & 512 && o !== null && Ta(o, o.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            Fe(f, "");
          } catch (me) {
            Ze(t, t.return, me);
          }
        }
        if (s & 4 && (f = t.stateNode, f != null)) {
          var g = t.memoizedProps, S = o !== null ? o.memoizedProps : g, L = t.type, B = t.updateQueue;
          if (t.updateQueue = null, B !== null)
            try {
              L === "input" && g.type === "radio" && g.name != null && Er(f, g), Zt(L, S);
              var z = Zt(L, g);
              for (S = 0; S < B.length; S += 2) {
                var K = B[S], X = B[S + 1];
                K === "style" ? wr(f, X) : K === "dangerouslySetInnerHTML" ? Ve(f, X) : K === "children" ? Fe(f, X) : C(f, K, X, z);
              }
              switch (L) {
                case "input":
                  xr(f, g);
                  break;
                case "textarea":
                  jt(f, g);
                  break;
                case "select":
                  var G = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!g.multiple;
                  var oe = g.value;
                  oe != null ? wt(f, !!g.multiple, oe, !1) : G !== !!g.multiple && (g.defaultValue != null ? wt(
                    f,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  ) : wt(f, !!g.multiple, g.multiple ? [] : "", !1));
              }
              f[So] = g;
            } catch (me) {
              Ze(t, t.return, me);
            }
        }
        break;
      case 6:
        if (hr(n, t), _r(t), s & 4) {
          if (t.stateNode === null)
            throw Error(a(162));
          f = t.stateNode, g = t.memoizedProps;
          try {
            f.nodeValue = g;
          } catch (me) {
            Ze(t, t.return, me);
          }
        }
        break;
      case 3:
        if (hr(n, t), _r(t), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            po(n.containerInfo);
          } catch (me) {
            Ze(t, t.return, me);
          }
        break;
      case 4:
        hr(n, t), _r(t);
        break;
      case 13:
        hr(n, t), _r(t), f = t.child, f.flags & 8192 && (g = f.memoizedState !== null, f.stateNode.isHidden = g, !g || f.alternate !== null && f.alternate.memoizedState !== null || (Ks = Ue())), s & 4 && qp(t);
        break;
      case 22:
        if (K = o !== null && o.memoizedState !== null, t.mode & 1 ? (mt = (z = mt) || K, hr(n, t), mt = z) : hr(n, t), _r(t), s & 8192) {
          if (z = t.memoizedState !== null, (t.stateNode.isHidden = z) && !K && t.mode & 1)
            for (ie = t, K = t.child; K !== null; ) {
              for (X = ie = K; ie !== null; ) {
                switch (G = ie, oe = G.child, G.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Mo(4, G, G.return);
                    break;
                  case 1:
                    Ta(G, G.return);
                    var de = G.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      s = G, o = G.return;
                      try {
                        n = s, de.props = n.memoizedProps, de.state = n.memoizedState, de.componentWillUnmount();
                      } catch (me) {
                        Ze(s, o, me);
                      }
                    }
                    break;
                  case 5:
                    Ta(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      Yp(X);
                      continue;
                    }
                }
                oe !== null ? (oe.return = G, ie = oe) : Yp(X);
              }
              K = K.sibling;
            }
          e:
            for (K = null, X = t; ; ) {
              if (X.tag === 5) {
                if (K === null) {
                  K = X;
                  try {
                    f = X.stateNode, z ? (g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (L = X.stateNode, B = X.memoizedProps.style, S = B != null && B.hasOwnProperty("display") ? B.display : null, L.style.display = sa("display", S));
                  } catch (me) {
                    Ze(t, t.return, me);
                  }
                }
              } else if (X.tag === 6) {
                if (K === null)
                  try {
                    X.stateNode.nodeValue = z ? "" : X.memoizedProps;
                  } catch (me) {
                    Ze(t, t.return, me);
                  }
              } else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === t) && X.child !== null) {
                X.child.return = X, X = X.child;
                continue;
              }
              if (X === t)
                break e;
              for (; X.sibling === null; ) {
                if (X.return === null || X.return === t)
                  break e;
                K === X && (K = null), X = X.return;
              }
              K === X && (K = null), X.sibling.return = X.return, X = X.sibling;
            }
        }
        break;
      case 19:
        hr(n, t), _r(t), s & 4 && qp(t);
        break;
      case 21:
        break;
      default:
        hr(
          n,
          t
        ), _r(t);
    }
  }
  function _r(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        e: {
          for (var o = t.return; o !== null; ) {
            if (zp(o)) {
              var s = o;
              break e;
            }
            o = o.return;
          }
          throw Error(a(160));
        }
        switch (s.tag) {
          case 5:
            var f = s.stateNode;
            s.flags & 32 && (Fe(f, ""), s.flags &= -33);
            var g = Vp(t);
            qs(t, g, f);
            break;
          case 3:
          case 4:
            var S = s.stateNode.containerInfo, L = Vp(t);
            Us(t, L, S);
            break;
          default:
            throw Error(a(161));
        }
      } catch (B) {
        Ze(t, t.return, B);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function uv(t, n, o) {
    ie = t, Gp(t);
  }
  function Gp(t, n, o) {
    for (var s = (t.mode & 1) !== 0; ie !== null; ) {
      var f = ie, g = f.child;
      if (f.tag === 22 && s) {
        var S = f.memoizedState !== null || oi;
        if (!S) {
          var L = f.alternate, B = L !== null && L.memoizedState !== null || mt;
          L = oi;
          var z = mt;
          if (oi = S, (mt = B) && !z)
            for (ie = f; ie !== null; )
              S = ie, B = S.child, S.tag === 22 && S.memoizedState !== null ? Xp(f) : B !== null ? (B.return = S, ie = B) : Xp(f);
          for (; g !== null; )
            ie = g, Gp(g), g = g.sibling;
          ie = f, oi = L, mt = z;
        }
        Kp(t);
      } else
        f.subtreeFlags & 8772 && g !== null ? (g.return = f, ie = g) : Kp(t);
    }
  }
  function Kp(t) {
    for (; ie !== null; ) {
      var n = ie;
      if (n.flags & 8772) {
        var o = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                mt || li(5, n);
                break;
              case 1:
                var s = n.stateNode;
                if (n.flags & 4 && !mt)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var f = n.elementType === n.type ? o.memoizedProps : mr(n.type, o.memoizedProps);
                    s.componentDidUpdate(f, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var g = n.updateQueue;
                g !== null && q1(n, g, s);
                break;
              case 3:
                var S = n.updateQueue;
                if (S !== null) {
                  if (o = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        o = n.child.stateNode;
                        break;
                      case 1:
                        o = n.child.stateNode;
                    }
                  q1(n, S, o);
                }
                break;
              case 5:
                var L = n.stateNode;
                if (o === null && n.flags & 4) {
                  o = L;
                  var B = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      B.autoFocus && o.focus();
                      break;
                    case "img":
                      B.src && (o.src = B.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var z = n.alternate;
                  if (z !== null) {
                    var K = z.memoizedState;
                    if (K !== null) {
                      var X = K.dehydrated;
                      X !== null && po(X);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          mt || n.flags & 512 && Vs(n);
        } catch (G) {
          Ze(n, n.return, G);
        }
      }
      if (n === t) {
        ie = null;
        break;
      }
      if (o = n.sibling, o !== null) {
        o.return = n.return, ie = o;
        break;
      }
      ie = n.return;
    }
  }
  function Yp(t) {
    for (; ie !== null; ) {
      var n = ie;
      if (n === t) {
        ie = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return, ie = o;
        break;
      }
      ie = n.return;
    }
  }
  function Xp(t) {
    for (; ie !== null; ) {
      var n = ie;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var o = n.return;
            try {
              li(4, n);
            } catch (B) {
              Ze(n, o, B);
            }
            break;
          case 1:
            var s = n.stateNode;
            if (typeof s.componentDidMount == "function") {
              var f = n.return;
              try {
                s.componentDidMount();
              } catch (B) {
                Ze(n, f, B);
              }
            }
            var g = n.return;
            try {
              Vs(n);
            } catch (B) {
              Ze(n, g, B);
            }
            break;
          case 5:
            var S = n.return;
            try {
              Vs(n);
            } catch (B) {
              Ze(n, S, B);
            }
        }
      } catch (B) {
        Ze(n, n.return, B);
      }
      if (n === t) {
        ie = null;
        break;
      }
      var L = n.sibling;
      if (L !== null) {
        L.return = n.return, ie = L;
        break;
      }
      ie = n.return;
    }
  }
  var sv = Math.ceil, ii = _.ReactCurrentDispatcher, Ws = _.ReactCurrentOwner, tr = _.ReactCurrentBatchConfig, Ae = 0, tt = null, Ge = null, lt = 0, qt = 0, Fa = pn(0), Xe = 0, $o = null, Vn = 0, ui = 0, Gs = 0, Bo = null, _t = null, Ks = 0, Ra = 1 / 0, Kr = null, si = !1, Ys = null, vn = null, ci = !1, bn = null, di = 0, Io = 0, Xs = null, pi = -1, fi = 0;
  function Et() {
    return Ae & 6 ? Ue() : pi !== -1 ? pi : pi = Ue();
  }
  function En(t) {
    return t.mode & 1 ? Ae & 2 && lt !== 0 ? lt & -lt : qy.transition !== null ? (fi === 0 && (fi = zd()), fi) : (t = Te, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Qd(t.type)), t) : 1;
  }
  function yr(t, n, o, s) {
    if (50 < Io)
      throw Io = 0, Xs = null, Error(a(185));
    lo(t, o, s), (!(Ae & 2) || t !== tt) && (t === tt && (!(Ae & 2) && (ui |= o), Xe === 4 && xn(t, lt)), Ot(t, s), o === 1 && Ae === 0 && !(n.mode & 1) && (Ra = Ue() + 500, Hl && mn()));
  }
  function Ot(t, n) {
    var o = t.callbackNode;
    qh(t, n);
    var s = wl(t, t === tt ? lt : 0);
    if (s === 0)
      o !== null && jd(o), t.callbackNode = null, t.callbackPriority = 0;
    else if (n = s & -s, t.callbackPriority !== n) {
      if (o != null && jd(o), n === 1)
        t.tag === 0 ? Uy(Jp.bind(null, t)) : I1(Jp.bind(null, t)), Hy(function() {
          !(Ae & 6) && mn();
        }), o = null;
      else {
        switch (Vd(s)) {
          case 1:
            o = Fu;
            break;
          case 4:
            o = Hd;
            break;
          case 16:
            o = vl;
            break;
          case 536870912:
            o = Zd;
            break;
          default:
            o = vl;
        }
        o = uf(o, Qp.bind(null, t));
      }
      t.callbackPriority = n, t.callbackNode = o;
    }
  }
  function Qp(t, n) {
    if (pi = -1, fi = 0, Ae & 6)
      throw Error(a(327));
    var o = t.callbackNode;
    if (La() && t.callbackNode !== o)
      return null;
    var s = wl(t, t === tt ? lt : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & t.expiredLanes || n)
      n = mi(t, s);
    else {
      n = s;
      var f = Ae;
      Ae |= 2;
      var g = tf();
      (tt !== t || lt !== n) && (Kr = null, Ra = Ue() + 500, qn(t, n));
      do
        try {
          pv();
          break;
        } catch (L) {
          ef(t, L);
        }
      while (1);
      gs(), ii.current = g, Ae = f, Ge !== null ? n = 0 : (tt = null, lt = 0, n = Xe);
    }
    if (n !== 0) {
      if (n === 2 && (f = Ru(t), f !== 0 && (s = f, n = Qs(t, f))), n === 1)
        throw o = $o, qn(t, 0), xn(t, s), Ot(t, Ue()), o;
      if (n === 6)
        xn(t, s);
      else {
        if (f = t.current.alternate, !(s & 30) && !cv(f) && (n = mi(t, s), n === 2 && (g = Ru(t), g !== 0 && (s = g, n = Qs(t, g))), n === 1))
          throw o = $o, qn(t, 0), xn(t, s), Ot(t, Ue()), o;
        switch (t.finishedWork = f, t.finishedLanes = s, n) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Wn(t, _t, Kr);
            break;
          case 3:
            if (xn(t, s), (s & 130023424) === s && (n = Ks + 500 - Ue(), 10 < n)) {
              if (wl(t, 0) !== 0)
                break;
              if (f = t.suspendedLanes, (f & s) !== s) {
                Et(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = as(Wn.bind(null, t, _t, Kr), n);
              break;
            }
            Wn(t, _t, Kr);
            break;
          case 4:
            if (xn(t, s), (s & 4194240) === s)
              break;
            for (n = t.eventTimes, f = -1; 0 < s; ) {
              var S = 31 - dr(s);
              g = 1 << S, S = n[S], S > f && (f = S), s &= ~g;
            }
            if (s = f, s = Ue() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * sv(s / 1960)) - s, 10 < s) {
              t.timeoutHandle = as(Wn.bind(null, t, _t, Kr), s);
              break;
            }
            Wn(t, _t, Kr);
            break;
          case 5:
            Wn(t, _t, Kr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ot(t, Ue()), t.callbackNode === o ? Qp.bind(null, t) : null;
  }
  function Qs(t, n) {
    var o = Bo;
    return t.current.memoizedState.isDehydrated && (qn(t, n).flags |= 256), t = mi(t, n), t !== 2 && (n = _t, _t = o, n !== null && Js(n)), t;
  }
  function Js(t) {
    _t === null ? _t = t : _t.push.apply(_t, t);
  }
  function cv(t) {
    for (var n = t; ; ) {
      if (n.flags & 16384) {
        var o = n.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var f = o[s], g = f.getSnapshot;
            f = f.value;
            try {
              if (!pr(g(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = n.child, n.subtreeFlags & 16384 && o !== null)
        o.return = n, n = o;
      else {
        if (n === t)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function xn(t, n) {
    for (n &= ~Gs, n &= ~ui, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
      var o = 31 - dr(n), s = 1 << o;
      t[o] = -1, n &= ~s;
    }
  }
  function Jp(t) {
    if (Ae & 6)
      throw Error(a(327));
    La();
    var n = wl(t, 0);
    if (!(n & 1))
      return Ot(t, Ue()), null;
    var o = mi(t, n);
    if (t.tag !== 0 && o === 2) {
      var s = Ru(t);
      s !== 0 && (n = s, o = Qs(t, s));
    }
    if (o === 1)
      throw o = $o, qn(t, 0), xn(t, n), Ot(t, Ue()), o;
    if (o === 6)
      throw Error(a(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = n, Wn(t, _t, Kr), Ot(t, Ue()), null;
  }
  function ec(t, n) {
    var o = Ae;
    Ae |= 1;
    try {
      return t(n);
    } finally {
      Ae = o, Ae === 0 && (Ra = Ue() + 500, Hl && mn());
    }
  }
  function Un(t) {
    bn !== null && bn.tag === 0 && !(Ae & 6) && La();
    var n = Ae;
    Ae |= 1;
    var o = tr.transition, s = Te;
    try {
      if (tr.transition = null, Te = 1, t)
        return t();
    } finally {
      Te = s, tr.transition = o, Ae = n, !(Ae & 6) && mn();
    }
  }
  function tc() {
    qt = Fa.current, $e(Fa);
  }
  function qn(t, n) {
    t.finishedWork = null, t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1 && (t.timeoutHandle = -1, jy(o)), Ge !== null)
      for (o = Ge.return; o !== null; ) {
        var s = o;
        switch (cs(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Nl();
            break;
          case 3:
            _a(), $e(At), $e(dt), Cs();
            break;
          case 5:
            Ss(s);
            break;
          case 4:
            _a();
            break;
          case 13:
            $e(Pe);
            break;
          case 19:
            $e(Pe);
            break;
          case 10:
            hs(s.type._context);
            break;
          case 22:
          case 23:
            tc();
        }
        o = o.return;
      }
    if (tt = t, Ge = t = wn(t.current, null), lt = qt = n, Xe = 0, $o = null, Gs = ui = Vn = 0, _t = Bo = null, Hn !== null) {
      for (n = 0; n < Hn.length; n++)
        if (o = Hn[n], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var f = s.next, g = o.pending;
          if (g !== null) {
            var S = g.next;
            g.next = f, s.next = S;
          }
          o.pending = s;
        }
      Hn = null;
    }
    return t;
  }
  function ef(t, n) {
    do {
      var o = Ge;
      try {
        if (gs(), Ql.current = ri, Jl) {
          for (var s = Ne.memoizedState; s !== null; ) {
            var f = s.queue;
            f !== null && (f.pending = null), s = s.next;
          }
          Jl = !1;
        }
        if (zn = 0, et = Ye = Ne = null, To = !1, Fo = 0, Ws.current = null, o === null || o.return === null) {
          Xe = 1, $o = n, Ge = null;
          break;
        }
        e: {
          var g = t, S = o.return, L = o, B = n;
          if (n = lt, L.flags |= 32768, B !== null && typeof B == "object" && typeof B.then == "function") {
            var z = B, K = L, X = K.tag;
            if (!(K.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var G = K.alternate;
              G ? (K.updateQueue = G.updateQueue, K.memoizedState = G.memoizedState, K.lanes = G.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var oe = Cp(S);
            if (oe !== null) {
              oe.flags &= -257, kp(oe, S, L, g, n), oe.mode & 1 && Ap(g, z, n), n = oe, B = z;
              var de = n.updateQueue;
              if (de === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(B), n.updateQueue = me;
              } else
                de.add(B);
              break e;
            } else {
              if (!(n & 1)) {
                Ap(g, z, n), rc();
                break e;
              }
              B = Error(a(426));
            }
          } else if (Be && L.mode & 1) {
            var qe = Cp(S);
            if (qe !== null) {
              !(qe.flags & 65536) && (qe.flags |= 256), kp(qe, S, L, g, n), fs(Oa(B, L));
              break e;
            }
          }
          g = B = Oa(B, L), Xe !== 4 && (Xe = 2), Bo === null ? Bo = [g] : Bo.push(g), g = S;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, n &= -n, g.lanes |= n;
                var N = wp(g, B, n);
                U1(g, N);
                break e;
              case 1:
                L = B;
                var I = g.type, H = g.stateNode;
                if (!(g.flags & 128) && (typeof I.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (vn === null || !vn.has(H)))) {
                  g.flags |= 65536, n &= -n, g.lanes |= n;
                  var ee = Sp(g, L, n);
                  U1(g, ee);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        nf(o);
      } catch (ge) {
        n = ge, Ge === o && o !== null && (Ge = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function tf() {
    var t = ii.current;
    return ii.current = ri, t === null ? ri : t;
  }
  function rc() {
    (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), tt === null || !(Vn & 268435455) && !(ui & 268435455) || xn(tt, lt);
  }
  function mi(t, n) {
    var o = Ae;
    Ae |= 2;
    var s = tf();
    (tt !== t || lt !== n) && (Kr = null, qn(t, n));
    do
      try {
        dv();
        break;
      } catch (f) {
        ef(t, f);
      }
    while (1);
    if (gs(), Ae = o, ii.current = s, Ge !== null)
      throw Error(a(261));
    return tt = null, lt = 0, Xe;
  }
  function dv() {
    for (; Ge !== null; )
      rf(Ge);
  }
  function pv() {
    for (; Ge !== null && !Ih(); )
      rf(Ge);
  }
  function rf(t) {
    var n = lf(t.alternate, t, qt);
    t.memoizedProps = t.pendingProps, n === null ? nf(t) : Ge = n, Ws.current = null;
  }
  function nf(t) {
    var n = t;
    do {
      var o = n.alternate;
      if (t = n.return, n.flags & 32768) {
        if (o = ov(o, n), o !== null) {
          o.flags &= 32767, Ge = o;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          Xe = 6, Ge = null;
          return;
        }
      } else if (o = av(o, n, qt), o !== null) {
        Ge = o;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ge = n;
        return;
      }
      Ge = n = t;
    } while (n !== null);
    Xe === 0 && (Xe = 5);
  }
  function Wn(t, n, o) {
    var s = Te, f = tr.transition;
    try {
      tr.transition = null, Te = 1, fv(t, n, o, s);
    } finally {
      tr.transition = f, Te = s;
    }
    return null;
  }
  function fv(t, n, o, s) {
    do
      La();
    while (bn !== null);
    if (Ae & 6)
      throw Error(a(327));
    o = t.finishedWork;
    var f = t.finishedLanes;
    if (o === null)
      return null;
    if (t.finishedWork = null, t.finishedLanes = 0, o === t.current)
      throw Error(a(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var g = o.lanes | o.childLanes;
    if (Wh(t, g), t === tt && (Ge = tt = null, lt = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || ci || (ci = !0, uf(vl, function() {
      return La(), null;
    })), g = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || g) {
      g = tr.transition, tr.transition = null;
      var S = Te;
      Te = 1;
      var L = Ae;
      Ae |= 4, Ws.current = null, iv(t, o), Wp(o, t), Dy(rs), Cl = !!ts, rs = ts = null, t.current = o, uv(o), Ph(), Ae = L, Te = S, tr.transition = g;
    } else
      t.current = o;
    if (ci && (ci = !1, bn = t, di = f), g = t.pendingLanes, g === 0 && (vn = null), Hh(o.stateNode), Ot(t, Ue()), n !== null)
      for (s = t.onRecoverableError, o = 0; o < n.length; o++)
        f = n[o], s(f.value, { componentStack: f.stack, digest: f.digest });
    if (si)
      throw si = !1, t = Ys, Ys = null, t;
    return di & 1 && t.tag !== 0 && La(), g = t.pendingLanes, g & 1 ? t === Xs ? Io++ : (Io = 0, Xs = t) : Io = 0, mn(), null;
  }
  function La() {
    if (bn !== null) {
      var t = Vd(di), n = tr.transition, o = Te;
      try {
        if (tr.transition = null, Te = 16 > t ? 16 : t, bn === null)
          var s = !1;
        else {
          if (t = bn, bn = null, di = 0, Ae & 6)
            throw Error(a(331));
          var f = Ae;
          for (Ae |= 4, ie = t.current; ie !== null; ) {
            var g = ie, S = g.child;
            if (ie.flags & 16) {
              var L = g.deletions;
              if (L !== null) {
                for (var B = 0; B < L.length; B++) {
                  var z = L[B];
                  for (ie = z; ie !== null; ) {
                    var K = ie;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(8, K, g);
                    }
                    var X = K.child;
                    if (X !== null)
                      X.return = K, ie = X;
                    else
                      for (; ie !== null; ) {
                        K = ie;
                        var G = K.sibling, oe = K.return;
                        if (Zp(K), K === z) {
                          ie = null;
                          break;
                        }
                        if (G !== null) {
                          G.return = oe, ie = G;
                          break;
                        }
                        ie = oe;
                      }
                  }
                }
                var de = g.alternate;
                if (de !== null) {
                  var me = de.child;
                  if (me !== null) {
                    de.child = null;
                    do {
                      var qe = me.sibling;
                      me.sibling = null, me = qe;
                    } while (me !== null);
                  }
                }
                ie = g;
              }
            }
            if (g.subtreeFlags & 2064 && S !== null)
              S.return = g, ie = S;
            else
              e:
                for (; ie !== null; ) {
                  if (g = ie, g.flags & 2048)
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mo(9, g, g.return);
                    }
                  var N = g.sibling;
                  if (N !== null) {
                    N.return = g.return, ie = N;
                    break e;
                  }
                  ie = g.return;
                }
          }
          var I = t.current;
          for (ie = I; ie !== null; ) {
            S = ie;
            var H = S.child;
            if (S.subtreeFlags & 2064 && H !== null)
              H.return = S, ie = H;
            else
              e:
                for (S = I; ie !== null; ) {
                  if (L = ie, L.flags & 2048)
                    try {
                      switch (L.tag) {
                        case 0:
                        case 11:
                        case 15:
                          li(9, L);
                      }
                    } catch (ge) {
                      Ze(L, L.return, ge);
                    }
                  if (L === S) {
                    ie = null;
                    break e;
                  }
                  var ee = L.sibling;
                  if (ee !== null) {
                    ee.return = L.return, ie = ee;
                    break e;
                  }
                  ie = L.return;
                }
          }
          if (Ae = f, mn(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
            try {
              Sr.onPostCommitFiberRoot(bl, t);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Te = o, tr.transition = n;
      }
    }
    return !1;
  }
  function af(t, n, o) {
    n = Oa(o, n), n = wp(t, n, 1), t = hn(t, n, 1), n = Et(), t !== null && (lo(t, 1, n), Ot(t, n));
  }
  function Ze(t, n, o) {
    if (t.tag === 3)
      af(t, t, o);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          af(n, t, o);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (vn === null || !vn.has(s))) {
            t = Oa(o, t), t = Sp(n, t, 1), n = hn(n, t, 1), t = Et(), n !== null && (lo(n, 1, t), Ot(n, t));
            break;
          }
        }
        n = n.return;
      }
  }
  function mv(t, n, o) {
    var s = t.pingCache;
    s !== null && s.delete(n), n = Et(), t.pingedLanes |= t.suspendedLanes & o, tt === t && (lt & o) === o && (Xe === 4 || Xe === 3 && (lt & 130023424) === lt && 500 > Ue() - Ks ? qn(t, 0) : Gs |= o), Ot(t, n);
  }
  function of(t, n) {
    n === 0 && (t.mode & 1 ? (n = xl, xl <<= 1, !(xl & 130023424) && (xl = 4194304)) : n = 1);
    var o = Et();
    t = qr(t, n), t !== null && (lo(t, n, o), Ot(t, o));
  }
  function gv(t) {
    var n = t.memoizedState, o = 0;
    n !== null && (o = n.retryLane), of(t, o);
  }
  function hv(t, n) {
    var o = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode, f = t.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    s !== null && s.delete(n), of(t, o);
  }
  var lf;
  lf = function(t, n, o) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || At.current)
        kt = !0;
      else {
        if (!(t.lanes & o) && !(n.flags & 128))
          return kt = !1, nv(t, n, o);
        kt = !!(t.flags & 131072);
      }
    else
      kt = !1, Be && n.flags & 1048576 && P1(n, zl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var s = n.type;
        ai(t, n), t = n.pendingProps;
        var f = Ea(n, dt.current);
        Ca(n, o), f = Os(null, n, s, t, f, o);
        var g = Ts();
        return n.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ct(s) ? (g = !0, jl(n)) : g = !1, n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, bs(n), f.updater = Kl, n.stateNode = f, f._reactInternals = n, xs(n, s, t, o), n = Is(null, n, s, !0, g, o)) : (n.tag = 0, Be && g && ss(n), bt(null, n, f, o), n = n.child), n;
      case 16:
        s = n.elementType;
        e: {
          switch (ai(t, n), t = n.pendingProps, f = s._init, s = f(s._payload), n.type = s, f = n.tag = vv(s), t = mr(s, t), f) {
            case 0:
              n = Bs(null, n, s, t, o);
              break e;
            case 1:
              n = Lp(null, n, s, t, o);
              break e;
            case 11:
              n = _p(null, n, s, t, o);
              break e;
            case 14:
              n = Op(null, n, s, mr(s.type, t), o);
              break e;
          }
          throw Error(a(
            306,
            s,
            ""
          ));
        }
        return n;
      case 0:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : mr(s, f), Bs(t, n, s, f, o);
      case 1:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : mr(s, f), Lp(t, n, s, f, o);
      case 3:
        e: {
          if (Dp(n), t === null)
            throw Error(a(387));
          s = n.pendingProps, g = n.memoizedState, f = g.element, V1(t, n), Gl(n, s, null, o);
          var S = n.memoizedState;
          if (s = S.element, g.isDehydrated)
            if (g = { element: s, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              f = Oa(Error(a(423)), n), n = Mp(t, n, s, o, f);
              break e;
            } else if (s !== f) {
              f = Oa(Error(a(424)), n), n = Mp(t, n, s, o, f);
              break e;
            } else
              for (Ut = dn(n.stateNode.containerInfo.firstChild), Vt = n, Be = !0, fr = null, o = J1(n, null, s, o), n.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Sa(), s === f) {
              n = Gr(t, n, o);
              break e;
            }
            bt(t, n, s, o);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ep(n), t === null && ps(n), s = n.type, f = n.pendingProps, g = t !== null ? t.memoizedProps : null, S = f.children, ns(s, f) ? S = null : g !== null && ns(s, g) && (n.flags |= 32), Rp(t, n), bt(t, n, S, o), n.child;
      case 6:
        return t === null && ps(n), null;
      case 13:
        return $p(t, n, o);
      case 4:
        return ws(n, n.stateNode.containerInfo), s = n.pendingProps, t === null ? n.child = ka(n, null, s, o) : bt(t, n, s, o), n.child;
      case 11:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : mr(s, f), _p(t, n, s, f, o);
      case 7:
        return bt(t, n, n.pendingProps, o), n.child;
      case 8:
        return bt(t, n, n.pendingProps.children, o), n.child;
      case 12:
        return bt(t, n, n.pendingProps.children, o), n.child;
      case 10:
        e: {
          if (s = n.type._context, f = n.pendingProps, g = n.memoizedProps, S = f.value, Re(Ul, s._currentValue), s._currentValue = S, g !== null)
            if (pr(g.value, S)) {
              if (g.children === f.children && !At.current) {
                n = Gr(t, n, o);
                break e;
              }
            } else
              for (g = n.child, g !== null && (g.return = n); g !== null; ) {
                var L = g.dependencies;
                if (L !== null) {
                  S = g.child;
                  for (var B = L.firstContext; B !== null; ) {
                    if (B.context === s) {
                      if (g.tag === 1) {
                        B = Wr(-1, o & -o), B.tag = 2;
                        var z = g.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var K = z.pending;
                          K === null ? B.next = B : (B.next = K.next, K.next = B), z.pending = B;
                        }
                      }
                      g.lanes |= o, B = g.alternate, B !== null && (B.lanes |= o), ys(
                        g.return,
                        o,
                        n
                      ), L.lanes |= o;
                      break;
                    }
                    B = B.next;
                  }
                } else if (g.tag === 10)
                  S = g.type === n.type ? null : g.child;
                else if (g.tag === 18) {
                  if (S = g.return, S === null)
                    throw Error(a(341));
                  S.lanes |= o, L = S.alternate, L !== null && (L.lanes |= o), ys(S, o, n), S = g.sibling;
                } else
                  S = g.child;
                if (S !== null)
                  S.return = g;
                else
                  for (S = g; S !== null; ) {
                    if (S === n) {
                      S = null;
                      break;
                    }
                    if (g = S.sibling, g !== null) {
                      g.return = S.return, S = g;
                      break;
                    }
                    S = S.return;
                  }
                g = S;
              }
          bt(t, n, f.children, o), n = n.child;
        }
        return n;
      case 9:
        return f = n.type, s = n.pendingProps.children, Ca(n, o), f = Jt(f), s = s(f), n.flags |= 1, bt(t, n, s, o), n.child;
      case 14:
        return s = n.type, f = mr(s, n.pendingProps), f = mr(s.type, f), Op(t, n, s, f, o);
      case 15:
        return Tp(t, n, n.type, n.pendingProps, o);
      case 17:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : mr(s, f), ai(t, n), n.tag = 1, Ct(s) ? (t = !0, jl(n)) : t = !1, Ca(n, o), K1(n, s, f), xs(n, s, f, o), Is(null, n, s, !0, t, o);
      case 19:
        return Ip(t, n, o);
      case 22:
        return Fp(t, n, o);
    }
    throw Error(a(156, n.tag));
  };
  function uf(t, n) {
    return Nd(t, n);
  }
  function yv(t, n, o, s) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function rr(t, n, o, s) {
    return new yv(t, n, o, s);
  }
  function nc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function vv(t) {
    if (typeof t == "function")
      return nc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === Q)
        return 11;
      if (t === J)
        return 14;
    }
    return 2;
  }
  function wn(t, n) {
    var o = t.alternate;
    return o === null ? (o = rr(t.tag, n, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = n, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 14680064, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, n = t.dependencies, o.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o;
  }
  function gi(t, n, o, s, f, g) {
    var S = 2;
    if (s = t, typeof t == "function")
      nc(t) && (S = 1);
    else if (typeof t == "string")
      S = 5;
    else
      e:
        switch (t) {
          case $:
            return Gn(o.children, f, g, n);
          case M:
            S = 8, f |= 8;
            break;
          case j:
            return t = rr(12, o, n, f | 2), t.elementType = j, t.lanes = g, t;
          case Y:
            return t = rr(13, o, n, f), t.elementType = Y, t.lanes = g, t;
          case pe:
            return t = rr(19, o, n, f), t.elementType = pe, t.lanes = g, t;
          case ae:
            return hi(o, f, g, n);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Z:
                  S = 10;
                  break e;
                case V:
                  S = 9;
                  break e;
                case Q:
                  S = 11;
                  break e;
                case J:
                  S = 14;
                  break e;
                case re:
                  S = 16, s = null;
                  break e;
              }
            throw Error(a(130, t == null ? t : typeof t, ""));
        }
    return n = rr(S, o, n, f), n.elementType = t, n.type = s, n.lanes = g, n;
  }
  function Gn(t, n, o, s) {
    return t = rr(7, t, s, n), t.lanes = o, t;
  }
  function hi(t, n, o, s) {
    return t = rr(22, t, s, n), t.elementType = ae, t.lanes = o, t.stateNode = { isHidden: !1 }, t;
  }
  function ac(t, n, o) {
    return t = rr(6, t, null, n), t.lanes = o, t;
  }
  function oc(t, n, o) {
    return n = rr(4, t.children !== null ? t.children : [], t.key, n), n.lanes = o, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n;
  }
  function bv(t, n, o, s, f) {
    this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Lu(0), this.expirationTimes = Lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.identifierPrefix = s, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function lc(t, n, o, s, f, g, S, L, B) {
    return t = new bv(t, n, o, L, B), n === 1 ? (n = 1, g === !0 && (n |= 8)) : n = 0, g = rr(3, null, null, n), t.current = g, g.stateNode = t, g.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bs(g), t;
  }
  function Ev(t, n, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: R, key: s == null ? null : "" + s, children: t, containerInfo: n, implementation: o };
  }
  function sf(t) {
    if (!t)
      return fn;
    t = t._reactInternals;
    e: {
      if (Bn(t) !== t || t.tag !== 1)
        throw Error(a(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ct(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(a(171));
    }
    if (t.tag === 1) {
      var o = t.type;
      if (Ct(o))
        return $1(t, o, n);
    }
    return n;
  }
  function cf(t, n, o, s, f, g, S, L, B) {
    return t = lc(o, s, !0, t, f, g, S, L, B), t.context = sf(null), o = t.current, s = Et(), f = En(o), g = Wr(s, f), g.callback = n ?? null, hn(o, g, f), t.current.lanes = f, lo(t, f, s), Ot(t, s), t;
  }
  function yi(t, n, o, s) {
    var f = n.current, g = Et(), S = En(f);
    return o = sf(o), n.context === null ? n.context = o : n.pendingContext = o, n = Wr(g, S), n.payload = { element: t }, s = s === void 0 ? null : s, s !== null && (n.callback = s), t = hn(f, n, S), t !== null && (yr(t, f, S, g), Wl(t, f, S)), S;
  }
  function bi(t) {
    if (t = t.current, !t.child)
      return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function df(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < n ? o : n;
    }
  }
  function ic(t, n) {
    df(t, n), (t = t.alternate) && df(t, n);
  }
  function xv() {
    return null;
  }
  var pf = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function uc(t) {
    this._internalRoot = t;
  }
  Ei.prototype.render = uc.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(a(409));
    yi(t, n, null, null);
  }, Ei.prototype.unmount = uc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      Un(function() {
        yi(null, t, null, null);
      }), n[Zr] = null;
    }
  };
  function Ei(t) {
    this._internalRoot = t;
  }
  Ei.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = Wd();
      t = { blockedOn: null, target: t, priority: n };
      for (var o = 0; o < un.length && n !== 0 && n < un[o].priority; o++)
        ;
      un.splice(o, 0, t), o === 0 && Yd(t);
    }
  };
  function sc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function xi(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function ff() {
  }
  function wv(t, n, o, s, f) {
    if (f) {
      if (typeof s == "function") {
        var g = s;
        s = function() {
          var z = bi(S);
          g.call(z);
        };
      }
      var S = cf(n, s, t, 0, null, !1, !1, "", ff);
      return t._reactRootContainer = S, t[Zr] = S.current, xo(t.nodeType === 8 ? t.parentNode : t), Un(), S;
    }
    for (; f = t.lastChild; )
      t.removeChild(f);
    if (typeof s == "function") {
      var L = s;
      s = function() {
        var z = bi(B);
        L.call(z);
      };
    }
    var B = lc(t, 0, !1, null, null, !1, !1, "", ff);
    return t._reactRootContainer = B, t[Zr] = B.current, xo(t.nodeType === 8 ? t.parentNode : t), Un(function() {
      yi(n, B, o, s);
    }), B;
  }
  function wi(t, n, o, s, f) {
    var g = o._reactRootContainer;
    if (g) {
      var S = g;
      if (typeof f == "function") {
        var L = f;
        f = function() {
          var B = bi(S);
          L.call(B);
        };
      }
      yi(n, S, t, f);
    } else
      S = wv(o, n, t, f, s);
    return bi(S);
  }
  Ud = function(t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var o = oo(n.pendingLanes);
          o !== 0 && (Du(n, o | 1), Ot(n, Ue()), !(Ae & 6) && (Ra = Ue() + 500, mn()));
        }
        break;
      case 13:
        Un(function() {
          var s = qr(t, 1);
          if (s !== null) {
            var f = Et();
            yr(s, t, 1, f);
          }
        }), ic(t, 1);
    }
  }, Mu = function(t) {
    if (t.tag === 13) {
      var n = qr(t, 134217728);
      if (n !== null) {
        var o = Et();
        yr(n, t, 134217728, o);
      }
      ic(t, 134217728);
    }
  }, qd = function(t) {
    if (t.tag === 13) {
      var n = En(t), o = qr(t, n);
      if (o !== null) {
        var s = Et();
        yr(o, t, n, s);
      }
      ic(t, n);
    }
  }, Wd = function() {
    return Te;
  }, Gd = function(t, n) {
    var o = Te;
    try {
      return Te = t, n();
    } finally {
      Te = o;
    }
  }, rn = function(t, n, o) {
    switch (n) {
      case "input":
        if (xr(t, o), n = o.name, o.type === "radio" && n != null) {
          for (o = t; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < o.length; n++) {
            var s = o[n];
            if (s !== t && s.form === t.form) {
              var f = Pl(s);
              if (!f)
                throw Error(a(90));
              It(s), xr(s, f);
            }
          }
        }
        break;
      case "textarea":
        jt(t, o);
        break;
      case "select":
        n = o.value, n != null && wt(t, !!o.multiple, n, !1);
    }
  }, eo = ec, to = Un;
  var Sv = { usingClientEntryPoint: !1, Events: [Ao, va, Pl, gl, Ja, ec] }, Po = { findFiberByHostInstance: In, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Av = { bundleType: Po.bundleType, version: Po.version, rendererPackageName: Po.rendererPackageName, rendererConfig: Po.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = Id(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Po.findFiberByHostInstance || xv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
      try {
        bl = Si.inject(Av), Sr = Si;
      } catch {
      }
  }
  return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv, Tt.createPortal = function(t, n) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sc(n))
      throw Error(a(200));
    return Ev(t, n, null, o);
  }, Tt.createRoot = function(t, n) {
    if (!sc(t))
      throw Error(a(299));
    var o = !1, s = "", f = pf;
    return n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), n = lc(t, 1, !1, null, null, o, !1, s, f), t[Zr] = n.current, xo(t.nodeType === 8 ? t.parentNode : t), new uc(n);
  }, Tt.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","), Error(a(268, t)));
    return t = Id(n), t = t === null ? null : t.stateNode, t;
  }, Tt.flushSync = function(t) {
    return Un(t);
  }, Tt.hydrate = function(t, n, o) {
    if (!xi(n))
      throw Error(a(200));
    return wi(null, t, n, !0, o);
  }, Tt.hydrateRoot = function(t, n, o) {
    if (!sc(t))
      throw Error(a(405));
    var s = o != null && o.hydratedSources || null, f = !1, g = "", S = pf;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (g = o.identifierPrefix), o.onRecoverableError !== void 0 && (S = o.onRecoverableError)), n = cf(n, null, t, 1, o ?? null, f, !1, g, S), t[Zr] = n.current, xo(t), s)
      for (t = 0; t < s.length; t++)
        o = s[t], f = o._getVersion, f = f(o._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [o, f] : n.mutableSourceEagerHydrationData.push(
          o,
          f
        );
    return new Ei(n);
  }, Tt.render = function(t, n, o) {
    if (!xi(n))
      throw Error(a(200));
    return wi(null, t, n, !1, o);
  }, Tt.unmountComponentAtNode = function(t) {
    if (!xi(t))
      throw Error(a(40));
    return t._reactRootContainer ? (Un(function() {
      wi(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Zr] = null;
      });
    }), !0) : !1;
  }, Tt.unstable_batchedUpdates = ec, Tt.unstable_renderSubtreeIntoContainer = function(t, n, o, s) {
    if (!xi(o))
      throw Error(a(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(a(38));
    return wi(t, n, o, !1, s);
  }, Tt.version = "18.2.0-next-9e3b772b8-20220608", Tt;
}
function c5() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c5);
    } catch (e) {
      console.error(e);
    }
}
c5(), s5.exports = cE();
var d5 = s5.exports;
const dE = /* @__PURE__ */ oa(d5), { global: pE } = __STORYBOOK_MODULE_GLOBAL__;
var fE = be({ "../../node_modules/react-fast-compare/index.js"(e, r) {
  var a = typeof Element < "u", l = typeof Map == "function", u = typeof Set == "function", c = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function d(m, p) {
    if (m === p)
      return !0;
    if (m && p && typeof m == "object" && typeof p == "object") {
      if (m.constructor !== p.constructor)
        return !1;
      var h, y, x;
      if (Array.isArray(m)) {
        if (h = m.length, h != p.length)
          return !1;
        for (y = h; y-- !== 0; )
          if (!d(m[y], p[y]))
            return !1;
        return !0;
      }
      var w;
      if (l && m instanceof Map && p instanceof Map) {
        if (m.size !== p.size)
          return !1;
        for (w = m.entries(); !(y = w.next()).done; )
          if (!p.has(y.value[0]))
            return !1;
        for (w = m.entries(); !(y = w.next()).done; )
          if (!d(y.value[1], p.get(y.value[0])))
            return !1;
        return !0;
      }
      if (u && m instanceof Set && p instanceof Set) {
        if (m.size !== p.size)
          return !1;
        for (w = m.entries(); !(y = w.next()).done; )
          if (!p.has(y.value[0]))
            return !1;
        return !0;
      }
      if (c && ArrayBuffer.isView(m) && ArrayBuffer.isView(p)) {
        if (h = m.length, h != p.length)
          return !1;
        for (y = h; y-- !== 0; )
          if (m[y] !== p[y])
            return !1;
        return !0;
      }
      if (m.constructor === RegExp)
        return m.source === p.source && m.flags === p.flags;
      if (m.valueOf !== Object.prototype.valueOf && typeof m.valueOf == "function" && typeof p.valueOf == "function")
        return m.valueOf() === p.valueOf();
      if (m.toString !== Object.prototype.toString && typeof m.toString == "function" && typeof p.toString == "function")
        return m.toString() === p.toString();
      if (x = Object.keys(m), h = x.length, h !== Object.keys(p).length)
        return !1;
      for (y = h; y-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(p, x[y]))
          return !1;
      if (a && m instanceof Element)
        return !1;
      for (y = h; y-- !== 0; )
        if (!((x[y] === "_owner" || x[y] === "__v" || x[y] === "__o") && m.$$typeof) && !d(m[x[y]], p[x[y]]))
          return !1;
      return !0;
    }
    return m !== m && p !== p;
  }
  r.exports = function(m, p) {
    try {
      return d(m, p);
    } catch (h) {
      if ((h.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw h;
    }
  };
} }), qf = function(e) {
  return e.reduce(function(r, a) {
    var l = a[0], u = a[1];
    return r[l] = u, r;
  }, {});
}, Wf = typeof window < "u" && window.document && window.document.createElement ? D.useLayoutEffect : D.useEffect, Dt = "top", lr = "bottom", ir = "right", Mt = "left", cu = "auto", dl = [Dt, lr, ir, Mt], ja = "start", el = "end", mE = "clippingParents", p5 = "viewport", Ho = "popper", gE = "reference", Gf = dl.reduce(function(e, r) {
  return e.concat([r + "-" + ja, r + "-" + el]);
}, []), f5 = [].concat(dl, [cu]).reduce(function(e, r) {
  return e.concat([r, r + "-" + ja, r + "-" + el]);
}, []), hE = "beforeRead", yE = "read", vE = "afterRead", bE = "beforeMain", EE = "main", xE = "afterMain", wE = "beforeWrite", SE = "write", AE = "afterWrite", CE = [hE, yE, vE, bE, EE, xE, wE, SE, AE];
function Pr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Gt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
function aa(e) {
  var r = Gt(e).Element;
  return e instanceof r || e instanceof Element;
}
function or(e) {
  var r = Gt(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function U0(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Gt(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function kE(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(a) {
    var l = r.styles[a] || {}, u = r.attributes[a] || {}, c = r.elements[a];
    !or(c) || !Pr(c) || (Object.assign(c.style, l), Object.keys(u).forEach(function(d) {
      var m = u[d];
      m === !1 ? c.removeAttribute(d) : c.setAttribute(d, m === !0 ? "" : m);
    }));
  });
}
function _E(e) {
  var r = e.state, a = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, a.popper), r.styles = a, r.elements.arrow && Object.assign(r.elements.arrow.style, a.arrow), function() {
    Object.keys(r.elements).forEach(function(l) {
      var u = r.elements[l], c = r.attributes[l] || {}, d = Object.keys(r.styles.hasOwnProperty(l) ? r.styles[l] : a[l]), m = d.reduce(function(p, h) {
        return p[h] = "", p;
      }, {});
      !or(u) || !Pr(u) || (Object.assign(u.style, m), Object.keys(c).forEach(function(p) {
        u.removeAttribute(p);
      }));
    });
  };
}
var OE = { name: "applyStyles", enabled: !0, phase: "write", fn: kE, effect: _E, requires: ["computeStyles"] };
function Ir(e) {
  return e.split("-")[0];
}
var ea = Math.max, Gi = Math.min, Ha = Math.round;
function n0() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function m5() {
  return !/^((?!chrome|android).)*safari/i.test(n0());
}
function Za(e, r, a) {
  r === void 0 && (r = !1), a === void 0 && (a = !1);
  var l = e.getBoundingClientRect(), u = 1, c = 1;
  r && or(e) && (u = e.offsetWidth > 0 && Ha(l.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && Ha(l.height) / e.offsetHeight || 1);
  var d = aa(e) ? Gt(e) : window, m = d.visualViewport, p = !m5() && a, h = (l.left + (p && m ? m.offsetLeft : 0)) / u, y = (l.top + (p && m ? m.offsetTop : 0)) / c, x = l.width / u, w = l.height / c;
  return { width: x, height: w, top: y, right: h + x, bottom: y + w, left: h, x: h, y };
}
function q0(e) {
  var r = Za(e), a = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(r.width - a) <= 1 && (a = r.width), Math.abs(r.height - l) <= 1 && (l = r.height), { x: e.offsetLeft, y: e.offsetTop, width: a, height: l };
}
function g5(e, r) {
  var a = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (a && U0(a)) {
    var l = r;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Jr(e) {
  return Gt(e).getComputedStyle(e);
}
function TE(e) {
  return ["table", "td", "th"].indexOf(Pr(e)) >= 0;
}
function Dn(e) {
  return ((aa(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function du(e) {
  return Pr(e) === "html" ? e : e.assignedSlot || e.parentNode || (U0(e) ? e.host : null) || Dn(e);
}
function Kf(e) {
  return !or(e) || Jr(e).position === "fixed" ? null : e.offsetParent;
}
function FE(e) {
  var r = /firefox/i.test(n0()), a = /Trident/i.test(n0());
  if (a && or(e)) {
    var l = Jr(e);
    if (l.position === "fixed")
      return null;
  }
  var u = du(e);
  for (U0(u) && (u = u.host); or(u) && ["html", "body"].indexOf(Pr(u)) < 0; ) {
    var c = Jr(u);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || r && c.willChange === "filter" || r && c.filter && c.filter !== "none")
      return u;
    u = u.parentNode;
  }
  return null;
}
function pl(e) {
  for (var r = Gt(e), a = Kf(e); a && TE(a) && Jr(a).position === "static"; )
    a = Kf(a);
  return a && (Pr(a) === "html" || Pr(a) === "body" && Jr(a).position === "static") ? r : a || FE(e) || r;
}
function W0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Uo(e, r, a) {
  return ea(e, Gi(r, a));
}
function RE(e, r, a) {
  var l = Uo(e, r, a);
  return l > a ? a : l;
}
function h5() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function y5(e) {
  return Object.assign({}, h5(), e);
}
function v5(e, r) {
  return r.reduce(function(a, l) {
    return a[l] = e, a;
  }, {});
}
var LE = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, { placement: r.placement })) : e, y5(typeof e != "number" ? e : v5(e, dl));
};
function DE(e) {
  var r, a = e.state, l = e.name, u = e.options, c = a.elements.arrow, d = a.modifiersData.popperOffsets, m = Ir(a.placement), p = W0(m), h = [Mt, ir].indexOf(m) >= 0, y = h ? "height" : "width";
  if (!(!c || !d)) {
    var x = LE(u.padding, a), w = q0(c), v = p === "y" ? Dt : Mt, E = p === "y" ? lr : ir, b = a.rects.reference[y] + a.rects.reference[p] - d[p] - a.rects.popper[y], k = d[p] - a.rects.reference[p], A = pl(c), O = A ? p === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, C = b / 2 - k / 2, _ = x[v], T = O - w[y] - x[E], R = O / 2 - w[y] / 2 + C, $ = Uo(_, R, T), M = p;
    a.modifiersData[l] = (r = {}, r[M] = $, r.centerOffset = $ - R, r);
  }
}
function ME(e) {
  var r = e.state, a = e.options, l = a.element, u = l === void 0 ? "[data-popper-arrow]" : l;
  u != null && (typeof u == "string" && (u = r.elements.popper.querySelector(u), !u) || g5(r.elements.popper, u) && (r.elements.arrow = u));
}
var $E = { name: "arrow", enabled: !0, phase: "main", fn: DE, effect: ME, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function za(e) {
  return e.split("-")[1];
}
var BE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function IE(e, r) {
  var a = e.x, l = e.y, u = r.devicePixelRatio || 1;
  return { x: Ha(a * u) / u || 0, y: Ha(l * u) / u || 0 };
}
function Yf(e) {
  var r, a = e.popper, l = e.popperRect, u = e.placement, c = e.variation, d = e.offsets, m = e.position, p = e.gpuAcceleration, h = e.adaptive, y = e.roundOffsets, x = e.isFixed, w = d.x, v = w === void 0 ? 0 : w, E = d.y, b = E === void 0 ? 0 : E, k = typeof y == "function" ? y({ x: v, y: b }) : { x: v, y: b };
  v = k.x, b = k.y;
  var A = d.hasOwnProperty("x"), O = d.hasOwnProperty("y"), C = Mt, _ = Dt, T = window;
  if (h) {
    var R = pl(a), $ = "clientHeight", M = "clientWidth";
    if (R === Gt(a) && (R = Dn(a), Jr(R).position !== "static" && m === "absolute" && ($ = "scrollHeight", M = "scrollWidth")), R = R, u === Dt || (u === Mt || u === ir) && c === el) {
      _ = lr;
      var j = x && R === T && T.visualViewport ? T.visualViewport.height : R[$];
      b -= j - l.height, b *= p ? 1 : -1;
    }
    if (u === Mt || (u === Dt || u === lr) && c === el) {
      C = ir;
      var Z = x && R === T && T.visualViewport ? T.visualViewport.width : R[M];
      v -= Z - l.width, v *= p ? 1 : -1;
    }
  }
  var V = Object.assign({ position: m }, h && BE), Q = y === !0 ? IE({ x: v, y: b }, Gt(a)) : { x: v, y: b };
  if (v = Q.x, b = Q.y, p) {
    var Y;
    return Object.assign({}, V, (Y = {}, Y[_] = O ? "0" : "", Y[C] = A ? "0" : "", Y.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", Y));
  }
  return Object.assign({}, V, (r = {}, r[_] = O ? b + "px" : "", r[C] = A ? v + "px" : "", r.transform = "", r));
}
function PE(e) {
  var r = e.state, a = e.options, l = a.gpuAcceleration, u = l === void 0 ? !0 : l, c = a.adaptive, d = c === void 0 ? !0 : c, m = a.roundOffsets, p = m === void 0 ? !0 : m, h = { placement: Ir(r.placement), variation: za(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: u, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Yf(Object.assign({}, h, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: d, roundOffsets: p })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Yf(Object.assign({}, h, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: p })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
var NE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: PE, data: {} }, ki = { passive: !0 };
function jE(e) {
  var r = e.state, a = e.instance, l = e.options, u = l.scroll, c = u === void 0 ? !0 : u, d = l.resize, m = d === void 0 ? !0 : d, p = Gt(r.elements.popper), h = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return c && h.forEach(function(y) {
    y.addEventListener("scroll", a.update, ki);
  }), m && p.addEventListener("resize", a.update, ki), function() {
    c && h.forEach(function(y) {
      y.removeEventListener("scroll", a.update, ki);
    }), m && p.removeEventListener("resize", a.update, ki);
  };
}
var HE = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: jE, data: {} }, ZE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ii(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return ZE[r];
  });
}
var zE = { start: "end", end: "start" };
function Xf(e) {
  return e.replace(/start|end/g, function(r) {
    return zE[r];
  });
}
function G0(e) {
  var r = Gt(e), a = r.pageXOffset, l = r.pageYOffset;
  return { scrollLeft: a, scrollTop: l };
}
function K0(e) {
  return Za(Dn(e)).left + G0(e).scrollLeft;
}
function VE(e, r) {
  var a = Gt(e), l = Dn(e), u = a.visualViewport, c = l.clientWidth, d = l.clientHeight, m = 0, p = 0;
  if (u) {
    c = u.width, d = u.height;
    var h = m5();
    (h || !h && r === "fixed") && (m = u.offsetLeft, p = u.offsetTop);
  }
  return { width: c, height: d, x: m + K0(e), y: p };
}
function UE(e) {
  var r, a = Dn(e), l = G0(e), u = (r = e.ownerDocument) == null ? void 0 : r.body, c = ea(a.scrollWidth, a.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0), d = ea(a.scrollHeight, a.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0), m = -l.scrollLeft + K0(e), p = -l.scrollTop;
  return Jr(u || a).direction === "rtl" && (m += ea(a.clientWidth, u ? u.clientWidth : 0) - c), { width: c, height: d, x: m, y: p };
}
function Y0(e) {
  var r = Jr(e), a = r.overflow, l = r.overflowX, u = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + u + l);
}
function b5(e) {
  return ["html", "body", "#document"].indexOf(Pr(e)) >= 0 ? e.ownerDocument.body : or(e) && Y0(e) ? e : b5(du(e));
}
function qo(e, r) {
  var a;
  r === void 0 && (r = []);
  var l = b5(e), u = l === ((a = e.ownerDocument) == null ? void 0 : a.body), c = Gt(l), d = u ? [c].concat(c.visualViewport || [], Y0(l) ? l : []) : l, m = r.concat(d);
  return u ? m : m.concat(qo(du(d)));
}
function a0(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function qE(e, r) {
  var a = Za(e, !1, r === "fixed");
  return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
}
function Qf(e, r, a) {
  return r === p5 ? a0(VE(e, a)) : aa(r) ? qE(r, a) : a0(UE(Dn(e)));
}
function WE(e) {
  var r = qo(du(e)), a = ["absolute", "fixed"].indexOf(Jr(e).position) >= 0, l = a && or(e) ? pl(e) : e;
  return aa(l) ? r.filter(function(u) {
    return aa(u) && g5(u, l) && Pr(u) !== "body";
  }) : [];
}
function GE(e, r, a, l) {
  var u = r === "clippingParents" ? WE(e) : [].concat(r), c = [].concat(u, [a]), d = c[0], m = c.reduce(function(p, h) {
    var y = Qf(e, h, l);
    return p.top = ea(y.top, p.top), p.right = Gi(y.right, p.right), p.bottom = Gi(y.bottom, p.bottom), p.left = ea(y.left, p.left), p;
  }, Qf(e, d, l));
  return m.width = m.right - m.left, m.height = m.bottom - m.top, m.x = m.left, m.y = m.top, m;
}
function E5(e) {
  var r = e.reference, a = e.element, l = e.placement, u = l ? Ir(l) : null, c = l ? za(l) : null, d = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, p;
  switch (u) {
    case Dt:
      p = { x: d, y: r.y - a.height };
      break;
    case lr:
      p = { x: d, y: r.y + r.height };
      break;
    case ir:
      p = { x: r.x + r.width, y: m };
      break;
    case Mt:
      p = { x: r.x - a.width, y: m };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  var h = u ? W0(u) : null;
  if (h != null) {
    var y = h === "y" ? "height" : "width";
    switch (c) {
      case ja:
        p[h] = p[h] - (r[y] / 2 - a[y] / 2);
        break;
      case el:
        p[h] = p[h] + (r[y] / 2 - a[y] / 2);
        break;
    }
  }
  return p;
}
function tl(e, r) {
  r === void 0 && (r = {});
  var a = r, l = a.placement, u = l === void 0 ? e.placement : l, c = a.strategy, d = c === void 0 ? e.strategy : c, m = a.boundary, p = m === void 0 ? mE : m, h = a.rootBoundary, y = h === void 0 ? p5 : h, x = a.elementContext, w = x === void 0 ? Ho : x, v = a.altBoundary, E = v === void 0 ? !1 : v, b = a.padding, k = b === void 0 ? 0 : b, A = y5(typeof k != "number" ? k : v5(k, dl)), O = w === Ho ? gE : Ho, C = e.rects.popper, _ = e.elements[E ? O : w], T = GE(aa(_) ? _ : _.contextElement || Dn(e.elements.popper), p, y, d), R = Za(e.elements.reference), $ = E5({ reference: R, element: C, strategy: "absolute", placement: u }), M = a0(Object.assign({}, C, $)), j = w === Ho ? M : R, Z = { top: T.top - j.top + A.top, bottom: j.bottom - T.bottom + A.bottom, left: T.left - j.left + A.left, right: j.right - T.right + A.right }, V = e.modifiersData.offset;
  if (w === Ho && V) {
    var Q = V[u];
    Object.keys(Z).forEach(function(Y) {
      var pe = [ir, lr].indexOf(Y) >= 0 ? 1 : -1, J = [Dt, lr].indexOf(Y) >= 0 ? "y" : "x";
      Z[Y] += Q[J] * pe;
    });
  }
  return Z;
}
function KE(e, r) {
  r === void 0 && (r = {});
  var a = r, l = a.placement, u = a.boundary, c = a.rootBoundary, d = a.padding, m = a.flipVariations, p = a.allowedAutoPlacements, h = p === void 0 ? f5 : p, y = za(l), x = y ? m ? Gf : Gf.filter(function(E) {
    return za(E) === y;
  }) : dl, w = x.filter(function(E) {
    return h.indexOf(E) >= 0;
  });
  w.length === 0 && (w = x);
  var v = w.reduce(function(E, b) {
    return E[b] = tl(e, { placement: b, boundary: u, rootBoundary: c, padding: d })[Ir(b)], E;
  }, {});
  return Object.keys(v).sort(function(E, b) {
    return v[E] - v[b];
  });
}
function YE(e) {
  if (Ir(e) === cu)
    return [];
  var r = Ii(e);
  return [Xf(e), r, Xf(r)];
}
function XE(e) {
  var r = e.state, a = e.options, l = e.name;
  if (!r.modifiersData[l]._skip) {
    for (var u = a.mainAxis, c = u === void 0 ? !0 : u, d = a.altAxis, m = d === void 0 ? !0 : d, p = a.fallbackPlacements, h = a.padding, y = a.boundary, x = a.rootBoundary, w = a.altBoundary, v = a.flipVariations, E = v === void 0 ? !0 : v, b = a.allowedAutoPlacements, k = r.options.placement, A = Ir(k), O = A === k, C = p || (O || !E ? [Ii(k)] : YE(k)), _ = [k].concat(C).reduce(function(ue, te) {
      return ue.concat(Ir(te) === cu ? KE(r, { placement: te, boundary: y, rootBoundary: x, padding: h, flipVariations: E, allowedAutoPlacements: b }) : te);
    }, []), T = r.rects.reference, R = r.rects.popper, $ = /* @__PURE__ */ new Map(), M = !0, j = _[0], Z = 0; Z < _.length; Z++) {
      var V = _[Z], Q = Ir(V), Y = za(V) === ja, pe = [Dt, lr].indexOf(Q) >= 0, J = pe ? "width" : "height", re = tl(r, { placement: V, boundary: y, rootBoundary: x, altBoundary: w, padding: h }), ae = pe ? Y ? ir : Mt : Y ? lr : Dt;
      T[J] > R[J] && (ae = Ii(ae));
      var q = Ii(ae), W = [];
      if (c && W.push(re[Q] <= 0), m && W.push(re[ae] <= 0, re[q] <= 0), W.every(function(ue) {
        return ue;
      })) {
        j = V, M = !1;
        break;
      }
      $.set(V, W);
    }
    if (M)
      for (var F = E ? 3 : 1, U = function(ue) {
        var te = _.find(function(le) {
          var fe = $.get(le);
          if (fe)
            return fe.slice(0, ue).every(function(ve) {
              return ve;
            });
        });
        if (te)
          return j = te, "break";
      }, ne = F; ne > 0; ne--) {
        var ce = U(ne);
        if (ce === "break")
          break;
      }
    r.placement !== j && (r.modifiersData[l]._skip = !0, r.placement = j, r.reset = !0);
  }
}
var QE = { name: "flip", enabled: !0, phase: "main", fn: XE, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Jf(e, r, a) {
  return a === void 0 && (a = { x: 0, y: 0 }), { top: e.top - r.height - a.y, right: e.right - r.width + a.x, bottom: e.bottom - r.height + a.y, left: e.left - r.width - a.x };
}
function e2(e) {
  return [Dt, ir, lr, Mt].some(function(r) {
    return e[r] >= 0;
  });
}
function JE(e) {
  var r = e.state, a = e.name, l = r.rects.reference, u = r.rects.popper, c = r.modifiersData.preventOverflow, d = tl(r, { elementContext: "reference" }), m = tl(r, { altBoundary: !0 }), p = Jf(d, l), h = Jf(m, u, c), y = e2(p), x = e2(h);
  r.modifiersData[a] = { referenceClippingOffsets: p, popperEscapeOffsets: h, isReferenceHidden: y, hasPopperEscaped: x }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": y, "data-popper-escaped": x });
}
var e6 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: JE };
function t6(e, r, a) {
  var l = Ir(e), u = [Mt, Dt].indexOf(l) >= 0 ? -1 : 1, c = typeof a == "function" ? a(Object.assign({}, r, { placement: e })) : a, d = c[0], m = c[1];
  return d = d || 0, m = (m || 0) * u, [Mt, ir].indexOf(l) >= 0 ? { x: m, y: d } : { x: d, y: m };
}
function r6(e) {
  var r = e.state, a = e.options, l = e.name, u = a.offset, c = u === void 0 ? [0, 0] : u, d = f5.reduce(function(y, x) {
    return y[x] = t6(x, r.rects, c), y;
  }, {}), m = d[r.placement], p = m.x, h = m.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += p, r.modifiersData.popperOffsets.y += h), r.modifiersData[l] = d;
}
var n6 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: r6 };
function a6(e) {
  var r = e.state, a = e.name;
  r.modifiersData[a] = E5({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
var o6 = { name: "popperOffsets", enabled: !0, phase: "read", fn: a6, data: {} };
function l6(e) {
  return e === "x" ? "y" : "x";
}
function i6(e) {
  var r = e.state, a = e.options, l = e.name, u = a.mainAxis, c = u === void 0 ? !0 : u, d = a.altAxis, m = d === void 0 ? !1 : d, p = a.boundary, h = a.rootBoundary, y = a.altBoundary, x = a.padding, w = a.tether, v = w === void 0 ? !0 : w, E = a.tetherOffset, b = E === void 0 ? 0 : E, k = tl(r, { boundary: p, rootBoundary: h, padding: x, altBoundary: y }), A = Ir(r.placement), O = za(r.placement), C = !O, _ = W0(A), T = l6(_), R = r.modifiersData.popperOffsets, $ = r.rects.reference, M = r.rects.popper, j = typeof b == "function" ? b(Object.assign({}, r.rects, { placement: r.placement })) : b, Z = typeof j == "number" ? { mainAxis: j, altAxis: j } : Object.assign({ mainAxis: 0, altAxis: 0 }, j), V = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, Q = { x: 0, y: 0 };
  if (R) {
    if (c) {
      var Y, pe = _ === "y" ? Dt : Mt, J = _ === "y" ? lr : ir, re = _ === "y" ? "height" : "width", ae = R[_], q = ae + k[pe], W = ae - k[J], F = v ? -M[re] / 2 : 0, U = O === ja ? $[re] : M[re], ne = O === ja ? -M[re] : -$[re], ce = r.elements.arrow, ue = v && ce ? q0(ce) : { width: 0, height: 0 }, te = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : h5(), le = te[pe], fe = te[J], ve = Uo(0, $[re], ue[re]), Oe = C ? $[re] / 2 - F - ve - le - Z.mainAxis : U - ve - le - Z.mainAxis, sr = C ? -$[re] / 2 + F + ve + fe + Z.mainAxis : ne + ve + fe + Z.mainAxis, nt = r.elements.arrow && pl(r.elements.arrow), It = nt ? _ === "y" ? nt.clientTop || 0 : nt.clientLeft || 0 : 0, se = (Y = V?.[_]) != null ? Y : 0, vt = ae + Oe - se - It, Pt = ae + sr - se, Er = Uo(v ? Gi(q, vt) : q, ae, v ? ea(W, Pt) : W);
      R[_] = Er, Q[_] = Er - ae;
    }
    if (m) {
      var xr, Nt = _ === "x" ? Dt : Mt, tn = _ === "x" ? lr : ir, ze = R[T], wt = T === "y" ? "height" : "width", St = ze + k[Nt], Nr = ze - k[tn], jt = [Dt, Mt].indexOf(A) !== -1, jr = (xr = V?.[T]) != null ? xr : 0, Ht = jt ? St : ze - $[wt] - M[wt] - jr + Z.altAxis, We = jt ? ze + $[wt] + M[wt] - jr - Z.altAxis : Nr, st = v && jt ? RE(Ht, ze, We) : Uo(v ? Ht : St, ze, v ? We : Nr);
      R[T] = st, Q[T] = st - ze;
    }
    r.modifiersData[l] = Q;
  }
}
var u6 = { name: "preventOverflow", enabled: !0, phase: "main", fn: i6, requiresIfExists: ["offset"] };
function s6(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function c6(e) {
  return e === Gt(e) || !or(e) ? G0(e) : s6(e);
}
function d6(e) {
  var r = e.getBoundingClientRect(), a = Ha(r.width) / e.offsetWidth || 1, l = Ha(r.height) / e.offsetHeight || 1;
  return a !== 1 || l !== 1;
}
function p6(e, r, a) {
  a === void 0 && (a = !1);
  var l = or(r), u = or(r) && d6(r), c = Dn(r), d = Za(e, u, a), m = { scrollLeft: 0, scrollTop: 0 }, p = { x: 0, y: 0 };
  return (l || !l && !a) && ((Pr(r) !== "body" || Y0(c)) && (m = c6(r)), or(r) ? (p = Za(r, !0), p.x += r.clientLeft, p.y += r.clientTop) : c && (p.x = K0(c))), { x: d.left + m.scrollLeft - p.x, y: d.top + m.scrollTop - p.y, width: d.width, height: d.height };
}
function f6(e) {
  var r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(c) {
    r.set(c.name, c);
  });
  function u(c) {
    a.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(m) {
      if (!a.has(m)) {
        var p = r.get(m);
        p && u(p);
      }
    }), l.push(c);
  }
  return e.forEach(function(c) {
    a.has(c.name) || u(c);
  }), l;
}
function m6(e) {
  var r = f6(e);
  return CE.reduce(function(a, l) {
    return a.concat(r.filter(function(u) {
      return u.phase === l;
    }));
  }, []);
}
function g6(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(a) {
      Promise.resolve().then(function() {
        r = void 0, a(e());
      });
    })), r;
  };
}
function h6(e) {
  var r = e.reduce(function(a, l) {
    var u = a[l.name];
    return a[l.name] = u ? Object.assign({}, u, l, { options: Object.assign({}, u.options, l.options), data: Object.assign({}, u.data, l.data) }) : l, a;
  }, {});
  return Object.keys(r).map(function(a) {
    return r[a];
  });
}
var t2 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function r2() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return !r.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function y6(e) {
  e === void 0 && (e = {});
  var r = e, a = r.defaultModifiers, l = a === void 0 ? [] : a, u = r.defaultOptions, c = u === void 0 ? t2 : u;
  return function(d, m, p) {
    p === void 0 && (p = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, t2, c), modifiersData: {}, elements: { reference: d, popper: m }, attributes: {}, styles: {} }, y = [], x = !1, w = { state: h, setOptions: function(b) {
      var k = typeof b == "function" ? b(h.options) : b;
      E(), h.options = Object.assign({}, c, h.options, k), h.scrollParents = { reference: aa(d) ? qo(d) : d.contextElement ? qo(d.contextElement) : [], popper: qo(m) };
      var A = m6(h6([].concat(l, h.options.modifiers)));
      return h.orderedModifiers = A.filter(function(O) {
        return O.enabled;
      }), v(), w.update();
    }, forceUpdate: function() {
      if (!x) {
        var b = h.elements, k = b.reference, A = b.popper;
        if (r2(k, A)) {
          h.rects = { reference: p6(k, pl(A), h.options.strategy === "fixed"), popper: q0(A) }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(M) {
            return h.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var O = 0; O < h.orderedModifiers.length; O++) {
            if (h.reset === !0) {
              h.reset = !1, O = -1;
              continue;
            }
            var C = h.orderedModifiers[O], _ = C.fn, T = C.options, R = T === void 0 ? {} : T, $ = C.name;
            typeof _ == "function" && (h = _({ state: h, options: R, name: $, instance: w }) || h);
          }
        }
      }
    }, update: g6(function() {
      return new Promise(function(b) {
        w.forceUpdate(), b(h);
      });
    }), destroy: function() {
      E(), x = !0;
    } };
    if (!r2(d, m))
      return w;
    w.setOptions(p).then(function(b) {
      !x && p.onFirstUpdate && p.onFirstUpdate(b);
    });
    function v() {
      h.orderedModifiers.forEach(function(b) {
        var k = b.name, A = b.options, O = A === void 0 ? {} : A, C = b.effect;
        if (typeof C == "function") {
          var _ = C({ state: h, name: k, instance: w, options: O }), T = function() {
          };
          y.push(_ || T);
        }
      });
    }
    function E() {
      y.forEach(function(b) {
        return b();
      }), y = [];
    }
    return w;
  };
}
var v6 = [HE, o6, NE, OE, n6, QE, u6, $E, e6], b6 = y6({ defaultModifiers: v6 }), E6 = Kt(fE()), x6 = [], w6 = function(e, r, a) {
  a === void 0 && (a = {});
  var l = D.useRef(null), u = { onFirstUpdate: a.onFirstUpdate, placement: a.placement || "bottom", strategy: a.strategy || "absolute", modifiers: a.modifiers || x6 }, c = D.useState({ styles: { popper: { position: u.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), d = c[0], m = c[1], p = D.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(x) {
      var w = x.state, v = Object.keys(w.elements);
      d5.flushSync(function() {
        m({ styles: qf(v.map(function(E) {
          return [E, w.styles[E] || {}];
        })), attributes: qf(v.map(function(E) {
          return [E, w.attributes[E]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), h = D.useMemo(function() {
    var x = { onFirstUpdate: u.onFirstUpdate, placement: u.placement, strategy: u.strategy, modifiers: [].concat(u.modifiers, [p, { name: "applyStyles", enabled: !1 }]) };
    return (0, E6.default)(l.current, x) ? l.current || x : (l.current = x, x);
  }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, p]), y = D.useRef();
  return Wf(function() {
    y.current && y.current.setOptions(h);
  }, [h]), Wf(function() {
    if (!(e == null || r == null)) {
      var x = a.createPopper || b6, w = x(e, r, h);
      return y.current = w, function() {
        w.destroy(), y.current = null;
      };
    }
  }, [e, r, a.createPopper]), { state: y.current ? y.current.state : null, styles: d.styles, attributes: d.attributes, update: y.current ? y.current.update : null, forceUpdate: y.current ? y.current.forceUpdate : null };
};
function x5(e) {
  var r = D.useRef(e);
  return r.current = e, D.useCallback(function() {
    return r.current;
  }, []);
}
var S6 = function() {
};
function A6(e) {
  var r = e.initial, a = e.value, l = e.onChange, u = l === void 0 ? S6 : l;
  if (r === void 0 && a === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var c = D.useState(r), d = c[0], m = c[1], p = x5(d), h = D.useCallback(function(x) {
    var w = p(), v = typeof x == "function" ? x(w) : x;
    typeof v.persist == "function" && v.persist(), m(v), typeof u == "function" && u(v);
  }, [p, u]), y = a !== void 0;
  return [y ? a : d, y ? u : h];
}
function w5(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = 0), function() {
    return { width: 0, height: 0, top: r, right: e, bottom: r, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var C6 = ["styles", "attributes"], n2 = { getBoundingClientRect: w5() }, a2 = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function k6(e, r) {
  var a, l, u;
  e === void 0 && (e = {}), r === void 0 && (r = {});
  var c = Object.keys(a2).reduce(function(J, re) {
    var ae;
    return Ft({}, J, (ae = {}, ae[re] = J[re] !== void 0 ? J[re] : a2[re], ae));
  }, e), d = D.useMemo(function() {
    return [{ name: "offset", options: { offset: c.offset } }];
  }, Array.isArray(c.offset) ? c.offset : []), m = Ft({}, r, { placement: r.placement || c.placement, modifiers: r.modifiers || d }), p = D.useState(null), h = p[0], y = p[1], x = D.useState(null), w = x[0], v = x[1], E = A6({ initial: c.defaultVisible, value: c.visible, onChange: c.onVisibleChange }), b = E[0], k = E[1], A = D.useRef();
  D.useEffect(function() {
    return function() {
      return clearTimeout(A.current);
    };
  }, []);
  var O = w6(c.followCursor ? n2 : h, w, m), C = O.styles, _ = O.attributes, T = I0(O, C6), R = T.update, $ = x5({ visible: b, triggerRef: h, tooltipRef: w, finalConfig: c }), M = D.useCallback(function(J) {
    return Array.isArray(c.trigger) ? c.trigger.includes(J) : c.trigger === J;
  }, Array.isArray(c.trigger) ? c.trigger : [c.trigger]), j = D.useCallback(function() {
    clearTimeout(A.current), A.current = window.setTimeout(function() {
      return k(!1);
    }, c.delayHide);
  }, [c.delayHide, k]), Z = D.useCallback(function() {
    clearTimeout(A.current), A.current = window.setTimeout(function() {
      return k(!0);
    }, c.delayShow);
  }, [c.delayShow, k]), V = D.useCallback(function() {
    $().visible ? j() : Z();
  }, [$, j, Z]);
  D.useEffect(function() {
    if ($().finalConfig.closeOnOutsideClick) {
      var J = function(re) {
        var ae, q = $(), W = q.tooltipRef, F = q.triggerRef, U = (re.composedPath == null || (ae = re.composedPath()) == null ? void 0 : ae[0]) || re.target;
        U instanceof Node && W != null && F != null && !W.contains(U) && !F.contains(U) && j();
      };
      return document.addEventListener("mousedown", J), function() {
        return document.removeEventListener("mousedown", J);
      };
    }
  }, [$, j]), D.useEffect(function() {
    if (!(h == null || !M("click")))
      return h.addEventListener("click", V), function() {
        return h.removeEventListener("click", V);
      };
  }, [h, M, V]), D.useEffect(function() {
    if (!(h == null || !M("double-click")))
      return h.addEventListener("dblclick", V), function() {
        return h.removeEventListener("dblclick", V);
      };
  }, [h, M, V]), D.useEffect(function() {
    if (!(h == null || !M("right-click"))) {
      var J = function(re) {
        re.preventDefault(), V();
      };
      return h.addEventListener("contextmenu", J), function() {
        return h.removeEventListener("contextmenu", J);
      };
    }
  }, [h, M, V]), D.useEffect(function() {
    if (!(h == null || !M("focus")))
      return h.addEventListener("focus", Z), h.addEventListener("blur", j), function() {
        h.removeEventListener("focus", Z), h.removeEventListener("blur", j);
      };
  }, [h, M, Z, j]), D.useEffect(function() {
    if (!(h == null || !M("hover")))
      return h.addEventListener("mouseenter", Z), h.addEventListener("mouseleave", j), function() {
        h.removeEventListener("mouseenter", Z), h.removeEventListener("mouseleave", j);
      };
  }, [h, M, Z, j]), D.useEffect(function() {
    if (!(w == null || !M("hover") || !$().finalConfig.interactive))
      return w.addEventListener("mouseenter", Z), w.addEventListener("mouseleave", j), function() {
        w.removeEventListener("mouseenter", Z), w.removeEventListener("mouseleave", j);
      };
  }, [w, M, Z, j, $]);
  var Q = T == null || (a = T.state) == null || (l = a.modifiersData) == null || (u = l.hide) == null ? void 0 : u.isReferenceHidden;
  D.useEffect(function() {
    c.closeOnTriggerHidden && Q && j();
  }, [c.closeOnTriggerHidden, j, Q]), D.useEffect(function() {
    if (!c.followCursor || h == null)
      return;
    function J(re) {
      var ae = re.clientX, q = re.clientY;
      n2.getBoundingClientRect = w5(ae, q), R?.();
    }
    return h.addEventListener("mousemove", J), function() {
      return h.removeEventListener("mousemove", J);
    };
  }, [c.followCursor, h, R]), D.useEffect(function() {
    if (!(w == null || R == null || c.mutationObserverOptions == null)) {
      var J = new MutationObserver(R);
      return J.observe(w, c.mutationObserverOptions), function() {
        return J.disconnect();
      };
    }
  }, [c.mutationObserverOptions, w, R]);
  var Y = function(J) {
    return J === void 0 && (J = {}), Ft({}, J, { style: Ft({}, J.style, C.popper) }, _.popper, { "data-popper-interactive": c.interactive });
  }, pe = function(J) {
    return J === void 0 && (J = {}), Ft({}, J, _.arrow, { style: Ft({}, J.style, C.arrow), "data-popper-arrow": !0 });
  };
  return Ft({ getArrowProps: pe, getTooltipProps: Y, setTooltipRef: v, setTriggerRef: y, tooltipRef: w, triggerRef: h, visible: b }, T);
}
var nr = la(1e3)((e, r, a, l = 0) => r.split("-")[0] === e ? a : l), An = 8, _6 = P.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
  let r = 0, a = 0;
  switch (!0) {
    case (e.startsWith("left") || e.startsWith("right")): {
      a = 8;
      break;
    }
    case (e.startsWith("top") || e.startsWith("bottom")): {
      r = 8;
      break;
    }
  }
  return { transform: `translate3d(${r}px, ${a}px, 0px)` };
}, ({ theme: e, color: r, placement: a }) => ({ bottom: `${nr("top", a, `${An * -1}px`, "auto")}`, top: `${nr("bottom", a, `${An * -1}px`, "auto")}`, right: `${nr("left", a, `${An * -1}px`, "auto")}`, left: `${nr("right", a, `${An * -1}px`, "auto")}`, borderBottomWidth: `${nr("top", a, "0", An)}px`, borderTopWidth: `${nr("bottom", a, "0", An)}px`, borderRightWidth: `${nr("left", a, "0", An)}px`, borderLeftWidth: `${nr("right", a, "0", An)}px`, borderTopColor: nr("top", a, e.color[r] || r || e.base === "light" ? Vo(e.background.app) : e.background.app, "transparent"), borderBottomColor: nr("bottom", a, e.color[r] || r || e.base === "light" ? Vo(e.background.app) : e.background.app, "transparent"), borderLeftColor: nr("left", a, e.color[r] || r || e.base === "light" ? Vo(e.background.app) : e.background.app, "transparent"), borderRightColor: nr("right", a, e.color[r] || r || e.base === "light" ? Vo(e.background.app) : e.background.app, "transparent") })), O6 = P.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: r, hasChrome: a }) => a ? { background: e.color[r] || r || e.base === "light" ? Vo(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), X0 = i.forwardRef(({ placement: e, hasChrome: r, children: a, arrowProps: l, tooltipRef: u, color: c, withArrows: d, ...m }, p) => i.createElement(O6, { "data-testid": "tooltip", hasChrome: r, ref: p, ...m, color: c }, r && d && i.createElement(_6, { placement: e, ...l, color: c }), a));
X0.displayName = "Tooltip";
X0.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: Pi } = pE, T6 = P.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, F6 = P.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, S5 = ({ svg: e, trigger: r, closeOnOutsideClick: a, placement: l, hasChrome: u, withArrows: c, offset: d, tooltip: m, children: p, closeOnTriggerHidden: h, mutationObserverOptions: y, closeOnClick: x, tooltipShown: w, onVisibilityChange: v, defaultVisible: E, delayHide: b, visible: k, interactive: A, delayShow: O, modifiers: C, strategy: _, followCursor: T, onVisibleChange: R, ...$ }) => {
  let M = e ? F6 : T6, { getArrowProps: j, getTooltipProps: Z, setTooltipRef: V, setTriggerRef: Q, visible: Y, state: pe } = k6({ trigger: r, placement: l, defaultVisible: E ?? w, delayHide: b, interactive: A, closeOnOutsideClick: a ?? x, closeOnTriggerHidden: h, onVisibleChange: (re) => {
    v?.(re), R?.(re);
  }, delayShow: O, followCursor: T, mutationObserverOptions: y, visible: k, offset: d }, { modifiers: C, strategy: _ }), J = i.createElement(X0, { placement: pe?.placement, ref: V, hasChrome: u, arrowProps: j(), withArrows: c, ...Z() }, typeof m == "function" ? m({ onHide: () => R(!1) }) : m);
  return i.createElement(i.Fragment, null, i.createElement(M, { trigger: r, ref: Q, ...$ }, p), Y && dE.createPortal(J, Pi.body));
};
S5.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var R6 = ({ startOpen: e = !1, onVisibleChange: r, ...a }) => {
  let [l, u] = D.useState(e), c = D.useCallback((d) => {
    r && r(d) === !1 || u(d);
  }, [r]);
  return D.useEffect(() => {
    let d = () => c(!1);
    Pi.addEventListener("keydown", d, !1);
    let m = Array.from(Pi.getElementsByTagName("iframe")), p = [];
    return m.forEach((h) => {
      let y = () => {
        try {
          h.contentWindow.document && (h.contentWindow.document.addEventListener("click", d), p.push(() => {
            try {
              h.contentWindow.document.removeEventListener("click", d);
            } catch {
            }
          }));
        } catch {
        }
      };
      y(), h.addEventListener("load", y), p.push(() => {
        h.removeEventListener("load", y);
      });
    }), () => {
      Pi.removeEventListener("keydown", d), p.forEach((h) => {
        h();
      });
    };
  }), i.createElement(S5, { ...a, visible: l, onVisibleChange: c });
};
function L6(e, r) {
  var a = D.useRef(null), l = D.useRef(null);
  l.current = r;
  var u = D.useRef(null);
  D.useEffect(function() {
    c();
  });
  var c = D.useCallback(function() {
    var d = u.current, m = l.current, p = d || (m ? m instanceof Element ? m : m.current : null);
    a.current && a.current.element === p && a.current.subscriber === e || (a.current && a.current.cleanup && a.current.cleanup(), a.current = {
      element: p,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: p ? e(p) : void 0
    });
  }, [e]);
  return D.useEffect(function() {
    return function() {
      a.current && a.current.cleanup && (a.current.cleanup(), a.current = null);
    };
  }, []), D.useCallback(function(d) {
    u.current = d, c();
  }, [c]);
}
function o2(e, r, a) {
  return e[r] ? e[r][0] ? e[r][0][a] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[r][a]
  ) : r === "contentBoxSize" ? e.contentRect[a === "inlineSize" ? "width" : "height"] : void 0;
}
function A5(e) {
  e === void 0 && (e = {});
  var r = e.onResize, a = D.useRef(void 0);
  a.current = r;
  var l = e.round || Math.round, u = D.useRef(), c = D.useState({
    width: void 0,
    height: void 0
  }), d = c[0], m = c[1], p = D.useRef(!1);
  D.useEffect(function() {
    return p.current = !1, function() {
      p.current = !0;
    };
  }, []);
  var h = D.useRef({
    width: void 0,
    height: void 0
  }), y = L6(D.useCallback(function(x) {
    return (!u.current || u.current.box !== e.box || u.current.round !== l) && (u.current = {
      box: e.box,
      round: l,
      instance: new ResizeObserver(function(w) {
        var v = w[0], E = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", b = o2(v, E, "inlineSize"), k = o2(v, E, "blockSize"), A = b ? l(b) : void 0, O = k ? l(k) : void 0;
        if (h.current.width !== A || h.current.height !== O) {
          var C = {
            width: A,
            height: O
          };
          h.current.width = A, h.current.height = O, a.current ? a.current(C) : p.current || m(C);
        }
      })
    }), u.current.instance.observe(x, {
      box: e.box
    }), function() {
      u.current && u.current.instance.unobserve(x);
    };
  }, [e.box, l]), e.ref);
  return D.useMemo(function() {
    return {
      ref: y,
      width: d.width,
      height: d.height
    };
  }, [y, d.width, d.height]);
}
const { global: D6 } = __STORYBOOK_MODULE_GLOBAL__;
var Ie = ({ ...e }, r) => {
  let a = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${r}`, ...a].filter(Boolean).join(" "), e;
};
function M6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rl(e, r) {
  return rl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, l) {
    return a.__proto__ = l, a;
  }, rl(e, r);
}
function $6(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, rl(e, r);
}
function o0(e) {
  return o0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, o0(e);
}
function B6(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function I6() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ni(e, r, a) {
  return I6() ? Ni = Reflect.construct.bind() : Ni = function(l, u, c) {
    var d = [null];
    d.push.apply(d, u);
    var m = Function.bind.apply(l, d), p = new m();
    return c && rl(p, c.prototype), p;
  }, Ni.apply(null, arguments);
}
function l0(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return l0 = function(a) {
    if (a === null || !B6(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(a))
        return r.get(a);
      r.set(a, l);
    }
    function l() {
      return Ni(a, arguments, o0(this).constructor);
    }
    return l.prototype = Object.create(a.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), rl(l, a);
  }, l0(e);
}
var Mr = function(e) {
  $6(r, e);
  function r(a) {
    var l;
    return l = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + a + " for more information.") || this, M6(l);
  }
  return r;
}(l0(Error));
function Cc(e) {
  return Math.round(e * 255);
}
function P6(e, r, a) {
  return Cc(e) + "," + Cc(r) + "," + Cc(a);
}
function nl(e, r, a, l) {
  if (l === void 0 && (l = P6), r === 0)
    return l(a, a, a);
  var u = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(u % 2 - 1)), m = 0, p = 0, h = 0;
  u >= 0 && u < 1 ? (m = c, p = d) : u >= 1 && u < 2 ? (m = d, p = c) : u >= 2 && u < 3 ? (p = c, h = d) : u >= 3 && u < 4 ? (p = d, h = c) : u >= 4 && u < 5 ? (m = d, h = c) : u >= 5 && u < 6 && (m = c, h = d);
  var y = a - c / 2, x = m + y, w = p + y, v = h + y;
  return l(x, w, v);
}
var l2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function N6(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return l2[r] ? "#" + l2[r] : e;
}
var j6 = /^#[a-fA-F0-9]{6}$/, H6 = /^#[a-fA-F0-9]{8}$/, Z6 = /^#[a-fA-F0-9]{3}$/, z6 = /^#[a-fA-F0-9]{4}$/, kc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, V6 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, U6 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, q6 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Q0(e) {
  if (typeof e != "string")
    throw new Mr(3);
  var r = N6(e);
  if (r.match(j6))
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16) };
  if (r.match(H6)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16), alpha: a };
  }
  if (r.match(Z6))
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16) };
  if (r.match(z6)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16), alpha: l };
  }
  var u = kc.exec(r);
  if (u)
    return { red: parseInt("" + u[1], 10), green: parseInt("" + u[2], 10), blue: parseInt("" + u[3], 10) };
  var c = V6.exec(r.substring(0, 50));
  if (c)
    return { red: parseInt("" + c[1], 10), green: parseInt("" + c[2], 10), blue: parseInt("" + c[3], 10), alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4]) };
  var d = U6.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + nl(m, p, h) + ")", x = kc.exec(y);
    if (!x)
      throw new Mr(4, r, y);
    return { red: parseInt("" + x[1], 10), green: parseInt("" + x[2], 10), blue: parseInt("" + x[3], 10) };
  }
  var w = q6.exec(r.substring(0, 50));
  if (w) {
    var v = parseInt("" + w[1], 10), E = parseInt("" + w[2], 10) / 100, b = parseInt("" + w[3], 10) / 100, k = "rgb(" + nl(v, E, b) + ")", A = kc.exec(k);
    if (!A)
      throw new Mr(4, r, k);
    return { red: parseInt("" + A[1], 10), green: parseInt("" + A[2], 10), blue: parseInt("" + A[3], 10), alpha: parseFloat("" + w[4]) > 1 ? parseFloat("" + w[4]) / 100 : parseFloat("" + w[4]) };
  }
  throw new Mr(5);
}
function W6(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, u = Math.max(r, a, l), c = Math.min(r, a, l), d = (u + c) / 2;
  if (u === c)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: d, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: d };
  var m, p = u - c, h = d > 0.5 ? p / (2 - u - c) : p / (u + c);
  switch (u) {
    case r:
      m = (a - l) / p + (a < l ? 6 : 0);
      break;
    case a:
      m = (l - r) / p + 2;
      break;
    default:
      m = (r - a) / p + 4;
      break;
  }
  return m *= 60, e.alpha !== void 0 ? { hue: m, saturation: h, lightness: d, alpha: e.alpha } : { hue: m, saturation: h, lightness: d };
}
function C5(e) {
  return W6(Q0(e));
}
var G6 = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, i0 = G6;
function Yn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function _c(e) {
  return Yn(Math.round(e * 255));
}
function K6(e, r, a) {
  return i0("#" + _c(e) + _c(r) + _c(a));
}
function Ki(e, r, a) {
  return nl(e, r, a, K6);
}
function Y6(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Ki(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Ki(e.hue, e.saturation, e.lightness);
  throw new Mr(1);
}
function X6(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? Ki(e, r, a) : "rgba(" + nl(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? Ki(e.hue, e.saturation, e.lightness) : "rgba(" + nl(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Mr(2);
}
function u0(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return i0("#" + Yn(e) + Yn(r) + Yn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return i0("#" + Yn(e.red) + Yn(e.green) + Yn(e.blue));
  throw new Mr(6);
}
function Xr(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var u = Q0(e);
    return "rgba(" + u.red + "," + u.green + "," + u.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? u0(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? u0(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Mr(7);
}
var Q6 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, J6 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, ex = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, tx = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function k5(e) {
  if (typeof e != "object")
    throw new Mr(8);
  if (J6(e))
    return Xr(e);
  if (Q6(e))
    return u0(e);
  if (tx(e))
    return X6(e);
  if (ex(e))
    return Y6(e);
  throw new Mr(8);
}
function _5(e, r, a) {
  return function() {
    var l = a.concat(Array.prototype.slice.call(arguments));
    return l.length >= r ? e.apply(this, l) : _5(e, r, l);
  };
}
function J0(e) {
  return _5(e, e.length, []);
}
function ed(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function rx(e, r) {
  if (r === "transparent")
    return r;
  var a = C5(r);
  return k5(Ft({}, a, { lightness: ed(0, 1, a.lightness - parseFloat(e)) }));
}
var nx = J0(rx), Ba = nx;
function ax(e, r) {
  if (r === "transparent")
    return r;
  var a = C5(r);
  return k5(Ft({}, a, { lightness: ed(0, 1, a.lightness + parseFloat(e)) }));
}
var ox = J0(ax), lx = ox;
function ix(e, r) {
  if (r === "transparent")
    return r;
  var a = Q0(r), l = typeof a.alpha == "number" ? a.alpha : 1, u = Ft({}, a, { alpha: ed(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return Xr(u);
}
var ux = J0(ix), Rt = ux, Ka = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), en = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? Rt(0.1, e.color.defaultText) : Rt(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), He = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), ia = { margin: "16px 0" }, sx = ({ href: e, children: r, ...a }) => {
  let l = /^\//.test(e), u = /^#.*/.test(e), c = l ? `./?path=${e}` : e;
  return i.createElement("a", { href: c, target: u ? "_self" : "_top", ...a }, r);
}, O5 = P(sx)(He, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), T5 = P.blockquote(He, ia, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), cx = (e) => typeof e == "string", dx = /[\n\r]/g, px = P.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), en), fx = P(V0)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), td = ({ className: e, children: r, ...a }) => {
  let l = (e || "").match(/lang-(\S+)/), u = D.Children.toArray(r);
  return u.filter(cx).some((c) => c.match(dx)) ? i.createElement(fx, { bordered: !0, copyable: !0, language: l?.[1] ?? "plaintext", format: !1, ...a }, r) : i.createElement(px, { ...a, className: e }, u);
}, F5 = P.div(He), R5 = P.dl(He, { ...ia, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), L5 = P.h1(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), rd = P.h2(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), nd = P.h3(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), D5 = P.h4(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), M5 = P.h5(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), $5 = P.h6(He, Ka, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), B5 = P.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), I5 = P.img({ maxWidth: "100%" }), P5 = P.li(He, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": en({ theme: e }) })), mx = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, N5 = P.ol(He, ia, { ...mx, listStyle: "decimal" }), j5 = P.p(He, ia, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": en({ theme: e }) })), H5 = P.pre(He, ia, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), Z5 = P.span(He, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), z5 = P.table(He, ia, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), V5 = P.title(en), gx = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, U5 = P.ul(He, ia, { ...gx, listStyle: "disc" }), ad = P.div(He), q5 = { h1: (e) => i.createElement(L5, { ...Ie(e, "h1") }), h2: (e) => i.createElement(rd, { ...Ie(e, "h2") }), h3: (e) => i.createElement(nd, { ...Ie(e, "h3") }), h4: (e) => i.createElement(D5, { ...Ie(e, "h4") }), h5: (e) => i.createElement(M5, { ...Ie(e, "h5") }), h6: (e) => i.createElement($5, { ...Ie(e, "h6") }), pre: (e) => i.createElement(H5, { ...Ie(e, "pre") }), a: (e) => i.createElement(O5, { ...Ie(e, "a") }), hr: (e) => i.createElement(B5, { ...Ie(e, "hr") }), dl: (e) => i.createElement(R5, { ...Ie(e, "dl") }), blockquote: (e) => i.createElement(T5, { ...Ie(e, "blockquote") }), table: (e) => i.createElement(z5, { ...Ie(e, "table") }), img: (e) => i.createElement(I5, { ...Ie(e, "img") }), div: (e) => i.createElement(F5, { ...Ie(e, "div") }), span: (e) => i.createElement(Z5, { ...Ie(e, "span") }), li: (e) => i.createElement(P5, { ...Ie(e, "li") }), ul: (e) => i.createElement(U5, { ...Ie(e, "ul") }), ol: (e) => i.createElement(N5, { ...Ie(e, "ol") }), p: (e) => i.createElement(j5, { ...Ie(e, "p") }), code: (e) => i.createElement(td, { ...Ie(e, "code") }), tt: (e) => i.createElement(V5, { ...Ie(e, "tt") }), resetwrapper: (e) => i.createElement(ad, { ...Ie(e, "resetwrapper") }) };
P.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: r }) => {
  switch (r) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Rt(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Rt(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Rt(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Rt(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var al = { user: i.createElement(i.Fragment, null, i.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), i.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), i.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: i.createElement(i.Fragment, null, i.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: i.createElement(i.Fragment, null, i.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: i.createElement(i.Fragment, null, i.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: i.createElement(i.Fragment, null, i.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), i.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), i.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), i.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), i.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: i.createElement(i.Fragment, null, i.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), i.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: i.createElement(i.Fragment, null, i.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), i.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: i.createElement(i.Fragment, null, i.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), i.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), i.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: i.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: i.createElement(i.Fragment, null, i.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), i.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), i.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: i.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), i.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), i.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: i.createElement(i.Fragment, null, i.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), i.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: i.createElement(i.Fragment, null, i.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), i.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), i.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), i.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), i.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), i.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: i.createElement(i.Fragment, null, i.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), i.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), i.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), i.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), i.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), i.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), i.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), i.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), i.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), i.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), i.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), i.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: i.createElement(i.Fragment, null, i.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: i.createElement(i.Fragment, null, i.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: i.createElement(i.Fragment, null, i.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), i.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: i.createElement(i.Fragment, null, i.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: i.createElement(i.Fragment, null, i.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: i.createElement(i.Fragment, null, i.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), i.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: i.createElement(i.Fragment, null, i.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: i.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: i.createElement(i.Fragment, null, i.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), i.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), i.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), i.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: i.createElement(i.Fragment, null, i.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: i.createElement(i.Fragment, null, i.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: i.createElement(i.Fragment, null, i.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: i.createElement(i.Fragment, null, i.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: i.createElement(i.Fragment, null, i.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: i.createElement(i.Fragment, null, i.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: i.createElement(i.Fragment, null, i.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: i.createElement(i.Fragment, null, i.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: i.createElement(i.Fragment, null, i.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: i.createElement(i.Fragment, null, i.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: i.createElement(i.Fragment, null, i.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: i.createElement(i.Fragment, null, i.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: i.createElement(i.Fragment, null, i.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, W5 = P.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, xt = ({ icon: e, useSymbol: r, ...a }) => i.createElement(W5, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...a }, r ? i.createElement("use", { xlinkHref: `#icon--${e}` }) : al[e]);
D.memo(function({ icons: e = Object.keys(al) }) {
  return i.createElement(W5, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((r) => i.createElement("symbol", { id: `icon--${r}`, key: r }, al[r])));
});
var hx = 0, yx = (e) => e.button === hx && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, vx = (e, r) => {
  yx(e) && (e.preventDefault(), r(e));
}, bx = P.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), Ex = P.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: Ba(0.07, e.color.secondary), "svg path": { fill: Ba(0.07, e.color.secondary) } }, "&:active": { color: Ba(0.1, e.color.secondary), "svg path": { fill: Ba(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: r, tertiary: a }) => {
  let l;
  return r && (l = [e.textMutedColor, e.color.dark, e.color.darker]), a && (l = [e.color.dark, e.color.darkest, e.textMutedColor]), l ? { color: l[0], "svg path": { fill: l[0] }, "&:hover": { color: l[1], "svg path": { fill: l[1] } }, "&:active": { color: l[2], "svg path": { fill: l[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: r }) => r ? { color: e.color.lightest, "svg path": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), ta = ({ cancel: e, children: r, onClick: a, withArrow: l, containsIcon: u, className: c, ...d }) => i.createElement(Ex, { ...d, onClick: a && e ? (m) => vx(m, a) : a, className: c }, i.createElement(bx, { withArrow: l, containsIcon: u }, r, l && i.createElement(xt, { icon: "arrowright" })));
ta.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
P.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var ra = [], Va = null, xx = D.lazy(async () => {
  let { SyntaxHighlighter: e } = await import("./syntaxhighlighter-PONEFOSF-0f582e9f.mjs");
  return ra.length > 0 && (ra.forEach((r) => {
    e.registerLanguage(...r);
  }), ra = []), Va === null && (Va = e), { default: (r) => i.createElement(e, { ...r }) };
}), wx = D.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: r }] = await Promise.all([import("./syntaxhighlighter-PONEFOSF-0f582e9f.mjs"), import("./formatter-SWP5E3XI-4664334b.mjs")]);
  return ra.length > 0 && (ra.forEach((a) => {
    e.registerLanguage(...a);
  }), ra = []), Va === null && (Va = e), { default: (a) => i.createElement(e, { ...a, formatter: r }) };
}), pu = (e) => i.createElement(D.Suspense, { fallback: i.createElement("div", null) }, e.format !== !1 ? i.createElement(wx, { ...e }) : i.createElement(xx, { ...e }));
pu.registerLanguage = (...e) => {
  if (Va !== null) {
    Va.registerLanguage(...e);
    return;
  }
  ra.push(e);
};
P.div(({ theme: e, col: r, row: a = 1 }) => r ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: r * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${t0}`]: { marginLeft: 0 } } : { "& > *": { marginTop: a * e.layoutMargin }, [`& > *:first-child${t0}`]: { marginTop: 0 } }, ({ theme: e, outer: r, col: a, row: l }) => {
  switch (!0) {
    case !!(r && a):
      return { marginLeft: r * e.layoutMargin, marginRight: r * e.layoutMargin };
    case !!(r && l):
      return { marginTop: r * e.layoutMargin, marginBottom: r * e.layoutMargin };
    default:
      return {};
  }
});
var Sx = P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), Ax = P.div(), Cx = P.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), G5 = ({ children: e, ...r }) => {
  let [a, l] = D.Children.toArray(e);
  return i.createElement(Cx, { ...r }, i.createElement(Sx, null, a), l && i.createElement(Ax, null, l));
}, kx = P.div(({ scale: e = 1, elementHeight: r }) => ({ height: r || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function _x({ scale: e, children: r }) {
  let a = D.useRef(null), [l, u] = D.useState(0), c = D.useCallback(({ height: d }) => {
    d && u(d / e);
  }, [e]);
  return D.useEffect(() => {
    a.current && u(a.current.getBoundingClientRect().height);
  }, [e]), A5({ ref: a, onResize: c }), i.createElement(kx, { scale: e, elementHeight: l }, i.createElement("div", { ref: a, className: "innerZoomElementWrapper" }, r));
}
var Ox = class extends D.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: e } = this.props;
    this.iframe = e.current;
  }
  shouldComponentUpdate(e) {
    let { scale: r, active: a } = this.props;
    return r !== e.scale && this.setIframeInnerZoom(e.scale), a !== e.active && this.iframe.setAttribute("data-is-storybook", e.active ? "true" : "false"), e.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(e) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
    } catch {
      this.setIframeZoom(e);
    }
  }
  setIframeZoom(e) {
    Object.assign(this.iframe.style, { width: `${e * 100}%`, height: `${e * 100}%`, transform: `scale(${1 / e})`, transformOrigin: "top left" });
  }
  render() {
    let { children: e } = this.props;
    return e;
  }
}, K5 = { Element: _x, IFrame: Ox }, { document: Tx } = D6, Fx = P.strong(({ theme: e }) => ({ color: e.color.orange })), Rx = P.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), i2 = P.em(({ theme: e }) => ({ color: e.textMutedColor })), Lx = /(Error): (.*)\n/, Dx = /at (?:(.*) )?\(?(.+)\)?/, Mx = /([^@]+)?(?:\/<)?@(.+)?/, $x = /([^@]+)?@(.+)?/, Y5 = ({ error: e }) => {
  if (!e)
    return i.createElement(D.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return i.createElement(D.Fragment, null, e.message || "This error has no stack or message");
  let r = e.stack.toString();
  r && e.message && !r.includes(e.message) && (r = `Error: ${e.message}

${r}`);
  let a = r.match(Lx);
  if (!a)
    return i.createElement(D.Fragment, null, r);
  let [, l, u] = a, c = r.split(/\n/).slice(1), [, ...d] = c.map((m) => {
    let p = m.match(Dx) || m.match(Mx) || m.match($x);
    return p ? { name: (p[1] || "").replace("/<", ""), location: p[2].replace(Tx.location.origin, "") } : null;
  }).filter(Boolean);
  return i.createElement(D.Fragment, null, i.createElement("span", null, l), ": ", i.createElement(Fx, null, u), i.createElement("br", null), d.map((m, p) => m.name ? i.createElement(D.Fragment, { key: p }, "  ", "at ", i.createElement(Rx, null, m.name), " (", i.createElement(i2, null, m.location), ")", i.createElement("br", null)) : i.createElement(D.Fragment, { key: p }, "  ", "at ", i.createElement(i2, null, m.location), i.createElement("br", null))));
}, X5 = P.button(({ small: e, theme: r }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? r.typography.size.s1 : r.typography.size.s2 - 1}px`, fontWeight: r.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: r }) => e ? { svg: { display: "block", margin: 0 }, ...r ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: r, secondary: a, gray: l }) => {
  let u;
  return l ? u = e.color.mediumlight : a ? u = e.color.secondary : r && (u = e.color.primary), u ? { background: u, color: l ? e.color.darkest : e.color.lightest, "&:hover": { background: Ba(0.05, u) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${Xr(u, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${Xr(u, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: r, inForm: a, small: l }) => r ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...a && l ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? Ba(0.02, e.button.background) : lx(0.03, e.button.background), ...a ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${Xr(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: r }) => r ? { boxShadow: `${Rt(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: Rt(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${Rt(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${Rt(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: Rt(0, e.color.defaultText) } } : {}, ({ theme: e, outline: r, primary: a }) => {
  let l = e.color.primary;
  return r && a ? { boxShadow: `${l} 0 0 0 1px inset`, color: l, "svg path": { fill: l }, "&:hover": { boxShadow: `${l} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: l, boxShadow: `${l} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${l} 0 0 0 1px inset, ${Xr(l, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${l} 0 0 0 1px inset, ${Xr(l, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: r, primary: a, secondary: l }) => {
  let u;
  return l ? u = e.color.secondary : a && (u = e.color.primary), r && u ? { boxShadow: `${u} 0 0 0 1px inset`, color: u, "svg path": { fill: u }, "&:hover": { boxShadow: `${u} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: u, boxShadow: `${u} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${u} 0 0 0 1px inset, ${Xr(u, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${u} 0 0 0 1px inset, ${Xr(u, 0.2)} 0 8px 18px 0px` } } : {};
}), Bx = X5.withComponent("a"), Q5 = Object.assign(D.forwardRef(function({ isLink: e, children: r, ...a }, l) {
  return e ? i.createElement(Bx, { ...a, ref: l }, r) : i.createElement(X5, { ...a, ref: l }, r);
}), { defaultProps: { isLink: !1 } }), Ix = P.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Px = P.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), J5 = ({ label: e, children: r, ...a }) => i.createElement(Ix, { ...a }, e ? i.createElement(Px, null, i.createElement("span", null, e)) : null, r);
J5.defaultProps = { label: void 0 };
var u2 = function(e, r) {
  if (typeof e == "function") {
    e(r);
    return;
  }
  e.current = r;
}, Nx = function(e, r) {
  var a = D.useRef();
  return D.useCallback(function(l) {
    e.current = l, a.current && u2(a.current, null), a.current = r, r && u2(r, l);
  }, [r]);
}, jx = Nx, Hx = function() {
}, Zx = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], zx = function(e, r) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var a = e.onChange, l = a === void 0 ? Hx : a;
  e.onHeightChange;
  var u = I0(e, Zx);
  u.value;
  var c = D.useRef(null), d = jx(c, r);
  return D.useRef(0), D.useRef(), D.createElement("textarea", Ft({}, u, { onChange: l, ref: d }));
}, Vx = D.forwardRef(zx), Ux = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, od = ({ theme: e }) => ({ ...Ux, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), fu = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, eg = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, mu = ({ valid: e, theme: r }) => {
  switch (e) {
    case "valid":
      return { boxShadow: `${r.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${r.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return { boxShadow: `${r.color.warning} 0 0 0 1px inset` };
    case void 0:
    case null:
    default:
      return {};
  }
}, qx = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, u) {
  return i.createElement("input", { ...l, ref: u });
}))(od, fu, eg, mu, { minHeight: 32 }), { displayName: "Input" }), Wx = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, u) {
  return i.createElement("select", { ...l, ref: u });
}))(od, fu, mu, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), Gx = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, u) {
  return i.createElement(Vx, { ...l, ref: u });
}))(od, fu, eg, mu, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Kx = P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, u) {
  return i.createElement(Q5, { ...l, ref: u });
}))(fu, mu, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Yx = Object.assign(D.forwardRef(function(e, r) {
  return i.createElement(Kx, { ...e, tertiary: !0, small: !0, inForm: !0, ref: r });
}), { displayName: "Button" }), vr = Object.assign(P.form({ boxSizing: "border-box", width: "100%" }), { Field: J5, Input: qx, Select: Wx, Textarea: Gx, Button: Yx }), Xx = D.lazy(() => import("./WithTooltip-J57HCPYA-afbe9823.mjs").then((e) => ({ default: e.WithTooltip }))), Qx = (e) => i.createElement(D.Suspense, { fallback: i.createElement("div", null) }, i.createElement(Xx, { ...e })), Jx = D.lazy(() => import("./WithTooltip-J57HCPYA-afbe9823.mjs").then((e) => ({ default: e.WithTooltipPure }))), tg = (e) => i.createElement(D.Suspense, { fallback: i.createElement("div", null) }, i.createElement(Jx, { ...e }));
P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
P.span();
P.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
P.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
P.div({ padding: 15, width: 280, boxSizing: "border-box" });
var e8 = P.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), t8 = ({ note: e, ...r }) => i.createElement(e8, { ...r }, e), r8 = P(({ active: e, loading: r, disabled: a, ...l }) => i.createElement("span", { ...l }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: r }) => e ? { color: r.color.secondary, fontWeight: r.typography.weight.bold } : {}, ({ loading: e, theme: r }) => e ? { display: "inline-block", flex: "none", ...r.animation.inlineGlow } : {}, ({ disabled: e, theme: r }) => e ? { color: Rt(0.7, r.color.defaultText) } : {}), n8 = P.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), a8 = P.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), o8 = P.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: r }) => e ? { color: r.color.secondary } : {}, ({ theme: e, disabled: r }) => r ? { color: e.textMutedColor } : {}), s2 = P.span(({ active: e, theme: r }) => e ? { "& svg": { opacity: 1 }, "& svg path": { fill: r.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), l8 = P.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), i8 = la(100)((e, r, a) => {
  let l = {};
  return e && Object.assign(l, { onClick: e }), r && Object.assign(l, { href: r }), a && r && Object.assign(l, { to: r, as: a }), l;
}), rg = ({ loading: e, left: r, title: a, center: l, right: u, icon: c, active: d, disabled: m, isIndented: p, href: h, onClick: y, LinkWrapper: x, ...w }) => {
  let v = i8(y, h, x), E = { active: d, disabled: m }, b = typeof c == "string" && al[c];
  return i.createElement(l8, { ...E, ...w, ...v }, c ? i.createElement(s2, { ...E }, b ? i.createElement(xt, { icon: c }) : c) : r && i.createElement(s2, { ...E }, r), a || l ? i.createElement(a8, { isIndented: !r && !c && p }, a && i.createElement(r8, { ...E, loading: e }, a), l && i.createElement(o8, { ...E }, l)) : null, u && i.createElement(n8, { ...E }, u));
};
rg.defaultProps = { loading: !1, left: null, title: i.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var ld = rg, u8 = P.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), s8 = (e) => {
  let { LinkWrapper: r, onClick: a, id: l, isIndented: u, ...c } = e, { title: d, href: m, active: p } = c, h = D.useCallback((x) => {
    a(x, c);
  }, [a]), y = !!a;
  return i.createElement(ld, { title: d, active: p, href: m, id: `list-item-${l}`, LinkWrapper: r, isIndented: u, ...c, ...y ? { onClick: h } : {} });
}, id = ({ links: e, LinkWrapper: r }) => {
  let a = e.some((l) => l.left || l.icon);
  return i.createElement(u8, null, e.map(({ isGatsby: l, ...u }) => i.createElement(s8, { key: u.id, LinkWrapper: l ? r : null, isIndented: a, ...u })));
};
id.defaultProps = { LinkWrapper: ld.defaultProps.LinkWrapper };
var ud = i.forwardRef(({ children: e, ...r }, a) => r.href != null ? i.createElement("a", { ref: a, ...r }, e) : i.createElement("button", { ref: a, type: "button", ...r }, e));
ud.displayName = "ButtonOrLink";
var fl = P(ud, { shouldForwardProp: O0 })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: r, theme: a }) => e ? { color: r || a.barSelectedColor, borderBottomColor: a.barSelectedColor } : { color: r || a.barTextColor, borderBottomColor: "transparent" });
fl.displayName = "TabButton";
var na = P(ud, { shouldForwardProp: O0 })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: r }) => e ? { backgroundColor: r.background.hoverable, color: r.color.secondary } : {}, ({ disabled: e, theme: r }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: Rt(0.88, r.color.secondary), color: r.color.secondary }, "&:focus-visible": { outline: cu }, "&:focus:not(:focus-visible)": { outline: "none" } });
na.displayName = "IconButton";
var c8 = P.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), d8 = P.div(() => ({ marginTop: 6, padding: 7, height: 28 })), ng = () => i.createElement(d8, null, i.createElement(c8, null)), s0 = P.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
s0.displayName = "Side";
var p8 = ({ children: e, className: r, scrollable: a }) => a ? i.createElement(su, { vertical: !1, className: r }, e) : i.createElement("div", { className: r }, e), sd = P(p8)(({ theme: e, scrollable: r = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: r ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: r = !1 }) => r ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
sd.displayName = "Bar";
var f8 = P.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), gu = ({ children: e, backgroundColor: r, ...a }) => {
  let [l, u] = D.Children.toArray(e);
  return i.createElement(sd, { ...a }, i.createElement(f8, { bgColor: r }, i.createElement(s0, { scrollable: a.scrollable, left: !0 }, l), u ? i.createElement(s0, { right: !0 }, u) : null));
};
gu.displayName = "FlexBar";
var m8 = P.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), c2 = (e) => D.Children.toArray(e).map(({ props: { title: r, id: a, color: l, children: u } }) => {
  let c = Array.isArray(u) ? u[0] : u;
  return { title: r, id: a, ...l ? { color: l } : {}, render: typeof c == "function" ? c : ({ active: d }) => i.createElement(m8, { active: d, role: "tabpanel" }, c) };
}), g8 = P.span(({ theme: e, isActive: r }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: r ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), h8 = P(fl)(({ active: e, theme: r, preActive: a }) => `
    color: ${a || e ? r.color.secondary : r.color.mediumdark};
    &:hover {
      color: ${r.color.secondary};
      .addon-collapsible-icon {
        color: ${r.color.secondary};
      }
    }
  `);
function y8(e) {
  let r = D.useRef(), a = D.useRef(), l = D.useRef(/* @__PURE__ */ new Map()), { width: u = 1 } = A5({ ref: r }), [c, d] = D.useState(e), [m, p] = D.useState([]), h = D.useRef(e), y = D.useCallback(({ menuName: w, actions: v }) => {
    let E = m.some(({ active: A }) => A), [b, k] = D.useState(!1);
    return i.createElement(i.Fragment, null, i.createElement(R6, { interactive: !0, visible: b, onVisibleChange: k, placement: "bottom", delayHide: 100, tooltip: i.createElement(id, { links: m.map(({ title: A, id: O, color: C, active: _ }) => ({ id: O, title: A, color: C, active: _, onClick: (T) => {
      T.preventDefault(), v.onSelect(O);
    } })) }) }, i.createElement(h8, { ref: a, active: E, preActive: b, style: { visibility: m.length ? "visible" : "hidden" }, "aria-hidden": !m.length, className: "tabbutton", type: "button", role: "tab" }, w, i.createElement(g8, { className: "addon-collapsible-icon", isActive: E || b }))), m.map(({ title: A, id: O, color: C }, _) => {
      let T = `index-${_}`;
      return i.createElement(fl, { id: `tabbutton-${vm(O) ?? T}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (R) => {
        l.current.set(O, R);
      }, className: "tabbutton", type: "button", key: O, textColor: C, role: "tab" }, A);
    }));
  }, [m]), x = D.useCallback(() => {
    if (!r.current || !a.current)
      return;
    let { x: w, width: v } = r.current.getBoundingClientRect(), { width: E } = a.current.getBoundingClientRect(), b = m.length ? w + v - E : w + v, k = [], A = 0, O = e.filter((C) => {
      let { id: _ } = C, T = l.current.get(_), { width: R = 0 } = T?.getBoundingClientRect() || {}, $ = w + A + R > b;
      return (!$ || !T) && k.push(C), A += R, $;
    });
    (k.length !== c.length || h.current !== e) && (d(k), p(O), h.current = e);
  }, [m.length, e, c]);
  return D.useLayoutEffect(x, [x, u]), { tabRefs: l, addonsRef: a, tabBarRef: r, visibleList: c, invisibleList: m, AddonTab: y };
}
var v8 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", b8 = P.div(({ theme: e, bordered: r }) => r ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), cd = P.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
cd.displayName = "TabBar";
var E8 = P.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: r }) => e ? { borderRadius: `0 0 ${r.appBorderRadius - 1}px ${r.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: r }) => e ? { height: `calc(100% - ${r ? 42 : 40}px)`, position: "absolute", left: 0 + (r ? 1 : 0), right: 0 + (r ? 1 : 0), bottom: 0 + (r ? 1 : 0), top: 40 + (r ? 1 : 0), overflow: "auto", [`& > *:first-child${v8}`]: { position: "absolute", left: 0 + (r ? 1 : 0), right: 0 + (r ? 1 : 0), bottom: 0 + (r ? 1 : 0), top: 0 + (r ? 1 : 0), height: `calc(100% - ${r ? 2 : 0}px)`, overflow: "auto" } } : {}), hu = D.memo(({ children: e, selected: r, actions: a, absolute: l, bordered: u, tools: c, backgroundColor: d, id: m, menuName: p }) => {
  let h = c2(e).map((b) => b.id), y = D.useMemo(() => c2(e).map((b, k) => ({ ...b, active: r ? b.id === r : k === 0 })), [r, ...h]), { visibleList: x, tabBarRef: w, tabRefs: v, AddonTab: E } = y8(y);
  return y.length ? i.createElement(b8, { absolute: l, bordered: u, id: m }, i.createElement(gu, { scrollable: !1, border: !0, backgroundColor: d }, i.createElement(cd, { style: { whiteSpace: "normal" }, ref: w, role: "tablist" }, x.map(({ title: b, id: k, active: A, color: O }, C) => {
    let _ = `index-${C}`;
    return i.createElement(fl, { id: `tabbutton-${vm(k) ?? _}`, ref: (T) => {
      v.current.set(k, T);
    }, className: `tabbutton ${A ? "tabbutton-active" : ""}`, type: "button", key: k, active: A, textColor: O, onClick: (T) => {
      T.preventDefault(), a.onSelect(k);
    }, role: "tab" }, typeof b == "function" ? i.createElement("title", null) : b);
  }), i.createElement(E, { menuName: p, actions: a })), c), i.createElement(E8, { id: "panel-tab-content", bordered: u, absolute: l }, y.map(({ id: b, active: k, render: A }) => i.createElement(A, { key: b, active: k }, null)))) : i.createElement(G5, null, i.createElement(D.Fragment, { key: "title" }, "Nothing found"));
});
hu.displayName = "Tabs";
hu.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var ag = class extends D.Component {
  constructor(e) {
    super(e), this.handlers = { onSelect: (r) => this.setState({ selected: r }) }, this.state = { selected: e.initial };
  }
  render() {
    let { bordered: e = !1, absolute: r = !1, children: a, backgroundColor: l, menuName: u } = this.props, { selected: c } = this.state;
    return i.createElement(hu, { bordered: e, absolute: r, selected: c, backgroundColor: l, menuName: u, actions: this.handlers }, a);
  }
};
ag.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var og = P.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
og.displayName = "Separator";
var x8 = Ga`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, w8 = P.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${x8} 0.7s linear infinite`, mixBlendMode: "difference" })), d2 = P.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), S8 = P.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: Rt(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), A8 = P.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), p2 = P.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), C8 = P(xt)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), k8 = Ga`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, _8 = P.span({ "&::after": { content: "'...'", animation: `${k8} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), lg = ({ progress: e, error: r, size: a, ...l }) => {
  if (r)
    return i.createElement(d2, { "aria-label": r.toString(), "aria-live": "polite", role: "status", ...l }, i.createElement(C8, { icon: "lightningoff" }), i.createElement(p2, null, r.message));
  if (e) {
    let { value: u, modules: c } = e, { message: d } = e;
    return c && (d += ` ${c.complete} / ${c.total} modules`), i.createElement(d2, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": u * 100, "aria-valuetext": d, role: "progressbar", ...l }, i.createElement(S8, null, i.createElement(A8, { style: { width: `${u * 100}%` } })), i.createElement(p2, null, d, u < 1 && i.createElement(_8, { key: d })));
  }
  return i.createElement(w8, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: a, ...l });
};
function O8(e) {
  let r = {}, a = e.split("&");
  for (let l = 0; l < a.length; l++) {
    let u = a[l].split("=");
    r[decodeURIComponent(u[0])] = decodeURIComponent(u[1] || "");
  }
  return r;
}
var ig = (e, r, a = {}) => {
  let [l, u] = e.split("?"), c = u ? { ...O8(u), ...a, id: r } : { ...a, id: r };
  return `${l}?${Object.entries(c).map((d) => `${d[0]}=${d[1]}`).join("&")}`;
};
P.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${xe.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${Dr.fonts.mono};
  font-size: ${Dr.size.s2 - 1}px;
`;
var ug = q5;
Object.keys(q5).forEach((e) => {
  D.forwardRef((r, a) => D.createElement(e, { ...r, ref: a }));
});
const T8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: O5,
  ActionBar: z0,
  Bar: sd,
  Blockquote: T5,
  Button: Q5,
  Code: td,
  DL: R5,
  Div: F5,
  ErrorFormatter: Y5,
  FlexBar: gu,
  Form: vr,
  H1: L5,
  H2: rd,
  H3: nd,
  H4: D5,
  H5: M5,
  H6: $5,
  HR: B5,
  IconButton: na,
  IconButtonSkeleton: ng,
  Icons: xt,
  Img: I5,
  LI: P5,
  Link: ta,
  ListItem: ld,
  Loader: lg,
  OL: N5,
  P: j5,
  Placeholder: G5,
  Pre: H5,
  ResetWrapper: ad,
  ScrollArea: su,
  Separator: og,
  Span: Z5,
  SyntaxHighlighter: pu,
  TT: V5,
  TabBar: cd,
  TabButton: fl,
  Table: z5,
  Tabs: hu,
  TabsState: ag,
  TooltipLinkList: id,
  TooltipNote: t8,
  UL: U5,
  WithTooltip: Qx,
  WithTooltipPure: tg,
  Zoom: K5,
  codeCommon: en,
  components: ug,
  createCopyToClipboardFunction: i5,
  getStoryHref: ig,
  icons: al,
  nameSpaceClassNames: Ie,
  withReset: He
}, Symbol.toStringTag, { value: "Module" }));
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Ua.apply(this, arguments);
}
function F8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ol(e, r) {
  return ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
    return l.__proto__ = u, l;
  }, ol(e, r);
}
function R8(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, ol(e, r);
}
function c0(e) {
  return c0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, c0(e);
}
function L8(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function D8() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ji(e, r, a) {
  return D8() ? ji = Reflect.construct.bind() : ji = function(u, c, d) {
    var m = [null];
    m.push.apply(m, c);
    var p = Function.bind.apply(u, m), h = new p();
    return d && ol(h, d.prototype), h;
  }, ji.apply(null, arguments);
}
function d0(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return d0 = function(l) {
    if (l === null || !L8(l))
      return l;
    if (typeof l != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(l))
        return r.get(l);
      r.set(l, u);
    }
    function u() {
      return ji(l, arguments, c0(this).constructor);
    }
    return u.prototype = Object.create(l.prototype, {
      constructor: {
        value: u,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ol(u, l);
  }, d0(e);
}
var $r = /* @__PURE__ */ function(e) {
  R8(r, e);
  function r(a) {
    var l;
    return l = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + a + " for more information.") || this, F8(l);
  }
  return r;
}(/* @__PURE__ */ d0(Error));
function Oc(e) {
  return Math.round(e * 255);
}
function M8(e, r, a) {
  return Oc(e) + "," + Oc(r) + "," + Oc(a);
}
function ll(e, r, a, l) {
  if (l === void 0 && (l = M8), r === 0)
    return l(a, a, a);
  var u = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(u % 2 - 1)), m = 0, p = 0, h = 0;
  u >= 0 && u < 1 ? (m = c, p = d) : u >= 1 && u < 2 ? (m = d, p = c) : u >= 2 && u < 3 ? (p = c, h = d) : u >= 3 && u < 4 ? (p = d, h = c) : u >= 4 && u < 5 ? (m = d, h = c) : u >= 5 && u < 6 && (m = c, h = d);
  var y = a - c / 2, x = m + y, w = p + y, v = h + y;
  return l(x, w, v);
}
var f2 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function $8(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return f2[r] ? "#" + f2[r] : e;
}
var B8 = /^#[a-fA-F0-9]{6}$/, I8 = /^#[a-fA-F0-9]{8}$/, P8 = /^#[a-fA-F0-9]{3}$/, N8 = /^#[a-fA-F0-9]{4}$/, Tc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, j8 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, H8 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Z8 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function yu(e) {
  if (typeof e != "string")
    throw new $r(3);
  var r = $8(e);
  if (r.match(B8))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(I8)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: a
    };
  }
  if (r.match(P8))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(N8)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: l
    };
  }
  var u = Tc.exec(r);
  if (u)
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10)
    };
  var c = j8.exec(r.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var d = H8.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + ll(m, p, h) + ")", x = Tc.exec(y);
    if (!x)
      throw new $r(4, r, y);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10)
    };
  }
  var w = Z8.exec(r.substring(0, 50));
  if (w) {
    var v = parseInt("" + w[1], 10), E = parseInt("" + w[2], 10) / 100, b = parseInt("" + w[3], 10) / 100, k = "rgb(" + ll(v, E, b) + ")", A = Tc.exec(k);
    if (!A)
      throw new $r(4, r, k);
    return {
      red: parseInt("" + A[1], 10),
      green: parseInt("" + A[2], 10),
      blue: parseInt("" + A[3], 10),
      alpha: parseFloat("" + w[4]) > 1 ? parseFloat("" + w[4]) / 100 : parseFloat("" + w[4])
    };
  }
  throw new $r(5);
}
function z8(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, u = Math.max(r, a, l), c = Math.min(r, a, l), d = (u + c) / 2;
  if (u === c)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: d,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: d
    };
  var m, p = u - c, h = d > 0.5 ? p / (2 - u - c) : p / (u + c);
  switch (u) {
    case r:
      m = (a - l) / p + (a < l ? 6 : 0);
      break;
    case a:
      m = (l - r) / p + 2;
      break;
    default:
      m = (r - a) / p + 4;
      break;
  }
  return m *= 60, e.alpha !== void 0 ? {
    hue: m,
    saturation: h,
    lightness: d,
    alpha: e.alpha
  } : {
    hue: m,
    saturation: h,
    lightness: d
  };
}
function sg(e) {
  return z8(yu(e));
}
var V8 = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, p0 = V8;
function Xn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function Fc(e) {
  return Xn(Math.round(e * 255));
}
function U8(e, r, a) {
  return p0("#" + Fc(e) + Fc(r) + Fc(a));
}
function Yi(e, r, a) {
  return ll(e, r, a, U8);
}
function q8(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Yi(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Yi(e.hue, e.saturation, e.lightness);
  throw new $r(1);
}
function W8(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? Yi(e, r, a) : "rgba(" + ll(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? Yi(e.hue, e.saturation, e.lightness) : "rgba(" + ll(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new $r(2);
}
function f0(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return p0("#" + Xn(e) + Xn(r) + Xn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return p0("#" + Xn(e.red) + Xn(e.green) + Xn(e.blue));
  throw new $r(6);
}
function Qr(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var u = yu(e);
    return "rgba(" + u.red + "," + u.green + "," + u.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? f0(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? f0(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new $r(7);
}
var G8 = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, K8 = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, Y8 = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, X8 = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function cg(e) {
  if (typeof e != "object")
    throw new $r(8);
  if (K8(e))
    return Qr(e);
  if (G8(e))
    return f0(e);
  if (X8(e))
    return W8(e);
  if (Y8(e))
    return q8(e);
  throw new $r(8);
}
function dg(e, r, a) {
  return function() {
    var u = a.concat(Array.prototype.slice.call(arguments));
    return u.length >= r ? e.apply(this, u) : dg(e, r, u);
  };
}
function vu(e) {
  return dg(e, e.length, []);
}
function bu(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function Q8(e, r) {
  if (r === "transparent")
    return r;
  var a = sg(r);
  return cg(Ua({}, a, {
    lightness: bu(0, 1, a.lightness - parseFloat(e))
  }));
}
var J8 = /* @__PURE__ */ vu(Q8), Or = J8;
function ew(e, r) {
  if (r === "transparent")
    return r;
  var a = sg(r);
  return cg(Ua({}, a, {
    lightness: bu(0, 1, a.lightness + parseFloat(e))
  }));
}
var tw = /* @__PURE__ */ vu(ew), Qn = tw;
function rw(e, r) {
  if (r === "transparent")
    return r;
  var a = yu(r), l = typeof a.alpha == "number" ? a.alpha : 1, u = Ua({}, a, {
    alpha: bu(0, 1, (l * 100 + parseFloat(e) * 100) / 100)
  });
  return Qr(u);
}
var nw = /* @__PURE__ */ vu(rw), _i = nw;
function aw(e, r) {
  if (r === "transparent")
    return r;
  var a = yu(r), l = typeof a.alpha == "number" ? a.alpha : 1, u = Ua({}, a, {
    alpha: bu(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return Qr(u);
}
var ow = /* @__PURE__ */ vu(aw), je = ow;
function lw(e, r) {
  for (var a = -1, l = r.length, u = e.length; ++a < l; )
    e[u + a] = r[a];
  return e;
}
var pg = lw, iw = pg, uw = Ln;
function sw(e, r, a) {
  var l = r(e);
  return uw(e) ? l : iw(l, a(e));
}
var fg = sw;
function cw(e, r) {
  for (var a = -1, l = e == null ? 0 : e.length, u = 0, c = []; ++a < l; ) {
    var d = e[a];
    r(d, a, e) && (c[u++] = d);
  }
  return c;
}
var dw = cw;
function pw() {
  return [];
}
var mg = pw, fw = dw, mw = mg, gw = Object.prototype, hw = gw.propertyIsEnumerable, m2 = Object.getOwnPropertySymbols, yw = m2 ? function(e) {
  return e == null ? [] : (e = Object(e), fw(m2(e), function(r) {
    return hw.call(e, r);
  }));
} : mw, dd = yw;
function vw(e, r) {
  for (var a = -1, l = Array(e); ++a < e; )
    l[a] = r(a);
  return l;
}
var bw = vw, Ew = 9007199254740991, xw = /^(?:0|[1-9]\d*)$/;
function ww(e, r) {
  var a = typeof e;
  return r = r ?? Ew, !!r && (a == "number" || a != "symbol" && xw.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var pd = ww, Sw = bw, Aw = dm, Cw = Ln, kw = S0, _w = pd, Ow = pm, Tw = Object.prototype, Fw = Tw.hasOwnProperty;
function Rw(e, r) {
  var a = Cw(e), l = !a && Aw(e), u = !a && !l && kw(e), c = !a && !l && !u && Ow(e), d = a || l || u || c, m = d ? Sw(e.length, String) : [], p = m.length;
  for (var h in e)
    (r || Fw.call(e, h)) && !(d && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    _w(h, p))) && m.push(h);
  return m;
}
var gg = Rw, Lw = Object.prototype;
function Dw(e) {
  var r = e && e.constructor, a = typeof r == "function" && r.prototype || Lw;
  return e === a;
}
var fd = Dw;
function Mw(e, r) {
  return function(a) {
    return e(r(a));
  };
}
var hg = Mw, $w = hg, Bw = $w(Object.keys, Object), Iw = Bw, Pw = fd, Nw = Iw, jw = Object.prototype, Hw = jw.hasOwnProperty;
function Zw(e) {
  if (!Pw(e))
    return Nw(e);
  var r = [];
  for (var a in Object(e))
    Hw.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
var zw = Zw, Vw = kv, Uw = fm;
function qw(e) {
  return e != null && Uw(e.length) && !Vw(e);
}
var yg = qw, Ww = gg, Gw = zw, Kw = yg;
function Yw(e) {
  return Kw(e) ? Ww(e) : Gw(e);
}
var Eu = Yw, Xw = fg, Qw = dd, Jw = Eu;
function eS(e) {
  return Xw(e, Jw, Qw);
}
var vg = eS, g2 = vg, tS = 1, rS = Object.prototype, nS = rS.hasOwnProperty;
function aS(e, r, a, l, u, c) {
  var d = a & tS, m = g2(e), p = m.length, h = g2(r), y = h.length;
  if (p != y && !d)
    return !1;
  for (var x = p; x--; ) {
    var w = m[x];
    if (!(d ? w in r : nS.call(r, w)))
      return !1;
  }
  var v = c.get(e), E = c.get(r);
  if (v && E)
    return v == r && E == e;
  var b = !0;
  c.set(e, r), c.set(r, e);
  for (var k = d; ++x < p; ) {
    w = m[x];
    var A = e[w], O = r[w];
    if (l)
      var C = d ? l(O, A, w, r, e, c) : l(A, O, w, e, r, c);
    if (!(C === void 0 ? A === O || u(A, O, a, l, c) : C)) {
      b = !1;
      break;
    }
    k || (k = w == "constructor");
  }
  if (b && !k) {
    var _ = e.constructor, T = r.constructor;
    _ != T && "constructor" in e && "constructor" in r && !(typeof _ == "function" && _ instanceof _ && typeof T == "function" && T instanceof T) && (b = !1);
  }
  return c.delete(e), c.delete(r), b;
}
var oS = aS, Rc = A0, lS = _v, iS = Ov, uS = oS, h2 = Qi, y2 = Ln, v2 = S0, sS = pm, cS = 1, b2 = "[object Arguments]", E2 = "[object Array]", Oi = "[object Object]", dS = Object.prototype, x2 = dS.hasOwnProperty;
function pS(e, r, a, l, u, c) {
  var d = y2(e), m = y2(r), p = d ? E2 : h2(e), h = m ? E2 : h2(r);
  p = p == b2 ? Oi : p, h = h == b2 ? Oi : h;
  var y = p == Oi, x = h == Oi, w = p == h;
  if (w && v2(e)) {
    if (!v2(r))
      return !1;
    d = !0, y = !1;
  }
  if (w && !y)
    return c || (c = new Rc()), d || sS(e) ? lS(e, r, a, l, u, c) : iS(e, r, p, a, l, u, c);
  if (!(a & cS)) {
    var v = y && x2.call(e, "__wrapped__"), E = x && x2.call(r, "__wrapped__");
    if (v || E) {
      var b = v ? e.value() : e, k = E ? r.value() : r;
      return c || (c = new Rc()), u(b, k, a, l, c);
    }
  }
  return w ? (c || (c = new Rc()), uS(e, r, a, l, u, c)) : !1;
}
var fS = pS, mS = fS, w2 = C0;
function bg(e, r, a, l, u) {
  return e === r ? !0 : e == null || r == null || !w2(e) && !w2(r) ? e !== e && r !== r : mS(e, r, a, l, bg, u);
}
var Eg = bg, gS = A0, hS = Eg, yS = 1, vS = 2;
function bS(e, r, a, l) {
  var u = a.length, c = u, d = !l;
  if (e == null)
    return !c;
  for (e = Object(e); u--; ) {
    var m = a[u];
    if (d && m[2] ? m[1] !== e[m[0]] : !(m[0] in e))
      return !1;
  }
  for (; ++u < c; ) {
    m = a[u];
    var p = m[0], h = e[p], y = m[1];
    if (d && m[2]) {
      if (h === void 0 && !(p in e))
        return !1;
    } else {
      var x = new gS();
      if (l)
        var w = l(h, y, p, e, r, x);
      if (!(w === void 0 ? hS(y, h, yS | vS, l, x) : w))
        return !1;
    }
  }
  return !0;
}
var ES = bS, xS = ul;
function wS(e) {
  return e === e && !xS(e);
}
var xg = wS, SS = xg, AS = Eu;
function CS(e) {
  for (var r = AS(e), a = r.length; a--; ) {
    var l = r[a], u = e[l];
    r[a] = [l, u, SS(u)];
  }
  return r;
}
var kS = CS;
function _S(e, r) {
  return function(a) {
    return a == null ? !1 : a[e] === r && (r !== void 0 || e in Object(a));
  };
}
var wg = _S, OS = ES, TS = kS, FS = wg;
function RS(e) {
  var r = TS(e);
  return r.length == 1 && r[0][2] ? FS(r[0][0], r[0][1]) : function(a) {
    return a === e || OS(a, e, r);
  };
}
var LS = RS, DS = Ln, MS = mm, $S = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, BS = /^\w*$/;
function IS(e, r) {
  if (DS(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || MS(e) ? !0 : BS.test(e) || !$S.test(e) || r != null && e in Object(r);
}
var md = IS, PS = Tv;
function NS(e) {
  return e == null ? "" : PS(e);
}
var jS = NS, HS = Ln, ZS = md, zS = Fv, VS = jS;
function US(e, r) {
  return HS(e) ? e : ZS(e, r) ? [e] : zS(VS(e));
}
var xu = US, qS = mm, WS = 1 / 0;
function GS(e) {
  if (typeof e == "string" || qS(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -WS ? "-0" : r;
}
var ml = GS, KS = xu, YS = ml;
function XS(e, r) {
  r = KS(r, e);
  for (var a = 0, l = r.length; e != null && a < l; )
    e = e[YS(r[a++])];
  return a && a == l ? e : void 0;
}
var gd = XS, QS = gd;
function JS(e, r, a) {
  var l = e == null ? void 0 : QS(e, r);
  return l === void 0 ? a : l;
}
var e9 = JS;
function t9(e, r) {
  return e != null && r in Object(e);
}
var r9 = t9, n9 = xu, a9 = dm, o9 = Ln, l9 = pd, i9 = fm, u9 = ml;
function s9(e, r, a) {
  r = n9(r, e);
  for (var l = -1, u = r.length, c = !1; ++l < u; ) {
    var d = u9(r[l]);
    if (!(c = e != null && a(e, d)))
      break;
    e = e[d];
  }
  return c || ++l != u ? c : (u = e == null ? 0 : e.length, !!u && i9(u) && l9(d, u) && (o9(e) || a9(e)));
}
var c9 = s9, d9 = r9, p9 = c9;
function f9(e, r) {
  return e != null && p9(e, r, d9);
}
var m9 = f9, g9 = Eg, h9 = e9, y9 = m9, v9 = md, b9 = xg, E9 = wg, x9 = ml, w9 = 1, S9 = 2;
function A9(e, r) {
  return v9(e) && b9(r) ? E9(x9(e), r) : function(a) {
    var l = h9(a, e);
    return l === void 0 && l === r ? y9(a, e) : g9(r, l, w9 | S9);
  };
}
var C9 = A9;
function k9(e) {
  return e;
}
var _9 = k9;
function O9(e) {
  return function(r) {
    return r?.[e];
  };
}
var T9 = O9, F9 = gd;
function R9(e) {
  return function(r) {
    return F9(r, e);
  };
}
var L9 = R9, D9 = T9, M9 = L9, $9 = md, B9 = ml;
function I9(e) {
  return $9(e) ? D9(B9(e)) : M9(e);
}
var P9 = I9, N9 = LS, j9 = C9, H9 = _9, Z9 = Ln, z9 = P9;
function V9(e) {
  return typeof e == "function" ? e : e == null ? H9 : typeof e == "object" ? Z9(e) ? j9(e[0], e[1]) : N9(e) : z9(e);
}
var U9 = V9, S2 = Rv;
function q9(e, r, a) {
  r == "__proto__" && S2 ? S2(e, r, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : e[r] = a;
}
var Sg = q9, W9 = Sg, G9 = Lv, K9 = Object.prototype, Y9 = K9.hasOwnProperty;
function X9(e, r, a) {
  var l = e[r];
  (!(Y9.call(e, r) && G9(l, a)) || a === void 0 && !(r in e)) && W9(e, r, a);
}
var hd = X9, Q9 = hd, J9 = xu, eA = pd, A2 = ul, tA = ml;
function rA(e, r, a, l) {
  if (!A2(e))
    return e;
  r = J9(r, e);
  for (var u = -1, c = r.length, d = c - 1, m = e; m != null && ++u < c; ) {
    var p = tA(r[u]), h = a;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (u != d) {
      var y = m[p];
      h = l ? l(y, p, m) : void 0, h === void 0 && (h = A2(y) ? y : eA(r[u + 1]) ? [] : {});
    }
    Q9(m, p, h), m = m[p];
  }
  return e;
}
var nA = rA, aA = gd, oA = nA, lA = xu;
function iA(e, r, a) {
  for (var l = -1, u = r.length, c = {}; ++l < u; ) {
    var d = r[l], m = aA(e, d);
    a(m, d) && oA(c, lA(d, e), m);
  }
  return c;
}
var uA = iA, sA = hg, cA = sA(Object.getPrototypeOf, Object), Ag = cA, dA = pg, pA = Ag, fA = dd, mA = mg, gA = Object.getOwnPropertySymbols, hA = gA ? function(e) {
  for (var r = []; e; )
    dA(r, fA(e)), e = pA(e);
  return r;
} : mA, Cg = hA;
function yA(e) {
  var r = [];
  if (e != null)
    for (var a in Object(e))
      r.push(a);
  return r;
}
var vA = yA, bA = ul, EA = fd, xA = vA, wA = Object.prototype, SA = wA.hasOwnProperty;
function AA(e) {
  if (!bA(e))
    return xA(e);
  var r = EA(e), a = [];
  for (var l in e)
    l == "constructor" && (r || !SA.call(e, l)) || a.push(l);
  return a;
}
var CA = AA, kA = gg, _A = CA, OA = yg;
function TA(e) {
  return OA(e) ? kA(e, !0) : _A(e);
}
var yd = TA, FA = fg, RA = Cg, LA = yd;
function DA(e) {
  return FA(e, LA, RA);
}
var kg = DA, MA = Dv, $A = U9, BA = uA, IA = kg;
function PA(e, r) {
  if (e == null)
    return {};
  var a = MA(IA(e), function(l) {
    return [l];
  });
  return r = $A(r), BA(e, a, function(l, u) {
    return r(l, u[0]);
  });
}
var NA = PA;
const jA = /* @__PURE__ */ oa(NA);
function Jn() {
  return Jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Jn.apply(this, arguments);
}
const HA = ["children", "options"], C2 = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), k2 = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, ZA = ["style", "script"], zA = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, VA = /mailto:/i, UA = /\n{2,}$/, _g = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, qA = /^ *> ?/gm, WA = /^ {2,}\n/, GA = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, Og = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, Tg = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, KA = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, YA = /^(?:\n *)*\n/, XA = /\r\n?/g, QA = /^\[\^([^\]]+)](:.*)\n/, JA = /^\[\^([^\]]+)]/, eC = /\f/g, tC = /^\s*?\[(x|\s)\]/, Fg = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Rg = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Lg = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, m0 = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, rC = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Dg = /^<!--[\s\S]*?(?:-->)/, nC = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, g0 = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, aC = /^\{.*\}$/, oC = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, lC = /^<([^ >]+@[^ >]+)>/, iC = /^<([^ >]+:\/[^ >]+)>/, uC = /-([a-z])?/gi, Mg = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, sC = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, cC = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, dC = /^\[([^\]]*)\] ?\[([^\]]*)\]/, pC = /(\[|\])/g, fC = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, mC = /\t/g, gC = /^ *\| */, hC = /(^ *\||\| *$)/g, yC = / *$/, vC = /^ *:-+: *$/, bC = /^ *:-+ *$/, EC = /^ *-+: *$/, xC = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, wC = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, SC = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, AC = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, CC = /^\\([^0-9A-Za-z\s])/, kC = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, _C = /^\n+/, OC = /^([ \t]*)/, TC = /\\([^\\])/g, _2 = / *\n+$/, FC = /(?:^|\n)( *)$/, vd = "(?:\\d+\\.)", bd = "(?:[*+-])";
function $g(e) {
  return "( *)(" + (e === 1 ? vd : bd) + ") +";
}
const Bg = $g(1), Ig = $g(2);
function Pg(e) {
  return new RegExp("^" + (e === 1 ? Bg : Ig));
}
const RC = Pg(1), LC = Pg(2);
function Ng(e) {
  return new RegExp("^" + (e === 1 ? Bg : Ig) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? vd : bd) + " )[^\\n]*)*(\\n|$)", "gm");
}
const jg = Ng(1), Hg = Ng(2);
function Zg(e) {
  const r = e === 1 ? vd : bd;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const zg = Zg(1), Vg = Zg(2);
function O2(e, r) {
  const a = r === 1, l = a ? zg : Vg, u = a ? jg : Hg, c = a ? RC : LC;
  return { t(d, m, p) {
    const h = FC.exec(p);
    return h && (m.o || !m._ && !m.u) ? l.exec(d = h[1] + d) : null;
  }, i: Se.HIGH, l(d, m, p) {
    const h = a ? +d[2] : void 0, y = d[0].replace(UA, `
`).match(u);
    let x = !1;
    return { p: y.map(function(w, v) {
      const E = c.exec(w)[0].length, b = new RegExp("^ {1," + E + "}", "gm"), k = w.replace(b, "").replace(c, ""), A = v === y.length - 1, O = k.indexOf(`

`) !== -1 || A && x;
      x = O;
      const C = p._, _ = p.o;
      let T;
      p.o = !0, O ? (p._ = !1, T = k.replace(_2, `

`)) : (p._ = !0, T = k.replace(_2, ""));
      const R = m(T, p);
      return p._ = C, p.o = _, R;
    }), m: a, g: h };
  }, h: (d, m, p) => e(d.m ? "ol" : "ul", { key: p.k, start: d.g }, d.p.map(function(h, y) {
    return e("li", { key: y }, m(h, p));
  })) };
}
const DC = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, MC = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Ug = [_g, Og, Tg, Fg, Lg, Rg, Dg, Mg, jg, zg, Hg, Vg], $C = [...Ug, /^[^\n]+(?:  \n|\n{2,})/, m0, g0];
function BC(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function IC(e) {
  return EC.test(e) ? "right" : vC.test(e) ? "center" : bC.test(e) ? "left" : null;
}
function T2(e, r, a) {
  const l = a.$;
  a.$ = !0;
  const u = r(e.trim(), a);
  a.$ = l;
  let c = [[]];
  return u.forEach(function(d, m) {
    d.type === "tableSeparator" ? m !== 0 && m !== u.length - 1 && c.push([]) : (d.type !== "text" || u[m + 1] != null && u[m + 1].type !== "tableSeparator" || (d.v = d.v.replace(yC, "")), c[c.length - 1].push(d));
  }), c;
}
function PC(e, r, a) {
  a._ = !0;
  const l = T2(e[1], r, a), u = e[2].replace(hC, "").split("|").map(IC), c = function(d, m, p) {
    return d.trim().split(`
`).map(function(h) {
      return T2(h, m, p);
    });
  }(e[3], r, a);
  return a._ = !1, { S: u, A: c, L: l, type: "table" };
}
function F2(e, r) {
  return e.S[r] == null ? {} : { textAlign: e.S[r] };
}
function Cn(e) {
  return function(r, a) {
    return a._ ? e.exec(r) : null;
  };
}
function kn(e) {
  return function(r, a) {
    return a._ || a.u ? e.exec(r) : null;
  };
}
function Yr(e) {
  return function(r, a) {
    return a._ || a.u ? null : e.exec(r);
  };
}
function Zo(e) {
  return function(r) {
    return e.exec(r);
  };
}
function NC(e, r, a) {
  if (r._ || r.u || a && !a.endsWith(`
`))
    return null;
  let l = "";
  e.split(`
`).every((c) => !Ug.some((d) => d.test(c)) && (l += c + `
`, c.trim()));
  const u = l.trimEnd();
  return u == "" ? null : [l, u];
}
function Da(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return;
  } catch {
    return null;
  }
  return e;
}
function R2(e) {
  return e.replace(TC, "$1");
}
function Hi(e, r, a) {
  const l = a._ || !1, u = a.u || !1;
  a._ = !0, a.u = !0;
  const c = e(r, a);
  return a._ = l, a.u = u, c;
}
function jC(e, r, a) {
  const l = a._ || !1, u = a.u || !1;
  a._ = !1, a.u = !0;
  const c = e(r, a);
  return a._ = l, a.u = u, c;
}
function HC(e, r, a) {
  return a._ = !1, e(r, a);
}
const Lc = (e, r, a) => ({ v: Hi(r, e[1], a) });
function Dc() {
  return {};
}
function Mc() {
  return null;
}
function ZC(...e) {
  return e.filter(Boolean).join(" ");
}
function $c(e, r, a) {
  let l = e;
  const u = r.split(".");
  for (; u.length && (l = l[u[0]], l !== void 0); )
    u.shift();
  return l || a;
}
var Se;
function zC(e, r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || BC, r.namedCodesToUnicode = r.namedCodesToUnicode ? Jn({}, k2, r.namedCodesToUnicode) : k2;
  const a = r.createElement || D.createElement;
  function l(v, E, ...b) {
    const k = $c(r.overrides, `${v}.props`, {});
    return a(function(A, O) {
      const C = $c(O, A);
      return C ? typeof C == "function" || typeof C == "object" && "render" in C ? C : $c(O, `${A}.component`, A) : A;
    }(v, r.overrides), Jn({}, E, k, { className: ZC(E?.className, k.className) || void 0 }), ...b);
  }
  function u(v) {
    let E = !1;
    r.forceInline ? E = !0 : r.forceBlock || (E = fC.test(v) === !1);
    const b = y(h(E ? v : `${v.trimEnd().replace(_C, "")}

`, { _: E }));
    for (; typeof b[b.length - 1] == "string" && !b[b.length - 1].trim(); )
      b.pop();
    if (r.wrapper === null)
      return b;
    const k = r.wrapper || (E ? "span" : "div");
    let A;
    if (b.length > 1 || r.forceWrapper)
      A = b;
    else {
      if (b.length === 1)
        return A = b[0], typeof A == "string" ? l("span", { key: "outer" }, A) : A;
      A = null;
    }
    return D.createElement(k, { key: "outer" }, A);
  }
  function c(v) {
    const E = v.match(zA);
    return E ? E.reduce(function(b, k, A) {
      const O = k.indexOf("=");
      if (O !== -1) {
        const C = function($) {
          return $.indexOf("-") !== -1 && $.match(nC) === null && ($ = $.replace(uC, function(M, j) {
            return j.toUpperCase();
          })), $;
        }(k.slice(0, O)).trim(), _ = function($) {
          const M = $[0];
          return (M === '"' || M === "'") && $.length >= 2 && $[$.length - 1] === M ? $.slice(1, -1) : $;
        }(k.slice(O + 1).trim()), T = C2[C] || C, R = b[T] = function($, M) {
          return $ === "style" ? M.split(/;\s?/).reduce(function(j, Z) {
            const V = Z.slice(0, Z.indexOf(":"));
            return j[V.replace(/(-[a-z])/g, (Q) => Q[1].toUpperCase())] = Z.slice(V.length + 1).trim(), j;
          }, {}) : $ === "href" ? Da(M) : (M.match(aC) && (M = M.slice(1, M.length - 1)), M === "true" || M !== "false" && M);
        }(C, _);
        typeof R == "string" && (m0.test(R) || g0.test(R)) && (b[T] = D.cloneElement(u(R.trim()), { key: A }));
      } else
        k !== "style" && (b[C2[k] || k] = !0);
      return b;
    }, {}) : null;
  }
  const d = [], m = {}, p = { blockQuote: { t: Yr(_g), i: Se.HIGH, l: (v, E, b) => ({ v: E(v[0].replace(qA, ""), b) }), h: (v, E, b) => l("blockquote", { key: b.k }, E(v.v, b)) }, breakLine: { t: Zo(WA), i: Se.HIGH, l: Dc, h: (v, E, b) => l("br", { key: b.k }) }, breakThematic: { t: Yr(GA), i: Se.HIGH, l: Dc, h: (v, E, b) => l("hr", { key: b.k }) }, codeBlock: { t: Yr(Tg), i: Se.MAX, l: (v) => ({ v: v[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (v, E, b) => l("pre", { key: b.k }, l("code", Jn({}, v.O, { className: v.M ? `lang-${v.M}` : "" }), v.v)) }, codeFenced: { t: Yr(Og), i: Se.MAX, l: (v) => ({ O: c(v[3] || ""), v: v[4], M: v[2] || void 0, type: "codeBlock" }) }, codeInline: { t: kn(KA), i: Se.LOW, l: (v) => ({ v: v[2] }), h: (v, E, b) => l("code", { key: b.k }, v.v) }, footnote: { t: Yr(QA), i: Se.MAX, l: (v) => (d.push({ I: v[2], j: v[1] }), {}), h: Mc }, footnoteReference: { t: Cn(JA), i: Se.HIGH, l: (v) => ({ v: v[1], B: `#${r.slugify(v[1])}` }), h: (v, E, b) => l("a", { key: b.k, href: Da(v.B) }, l("sup", { key: b.k }, v.v)) }, gfmTask: { t: Cn(tC), i: Se.HIGH, l: (v) => ({ R: v[1].toLowerCase() === "x" }), h: (v, E, b) => l("input", { checked: v.R, key: b.k, readOnly: !0, type: "checkbox" }) }, heading: { t: Yr(r.enforceAtxHeadings ? Rg : Fg), i: Se.HIGH, l: (v, E, b) => ({ v: Hi(E, v[2], b), T: r.slugify(v[2]), C: v[1].length }), h: (v, E, b) => l(`h${v.C}`, { id: v.T, key: b.k }, E(v.v, b)) }, headingSetext: { t: Yr(Lg), i: Se.MAX, l: (v, E, b) => ({ v: Hi(E, v[1], b), C: v[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { t: Zo(Dg), i: Se.HIGH, l: () => ({}), h: Mc }, image: { t: kn(MC), i: Se.HIGH, l: (v) => ({ D: v[1], B: R2(v[2]), F: v[3] }), h: (v, E, b) => l("img", { key: b.k, alt: v.D || void 0, title: v.F || void 0, src: Da(v.B) }) }, link: { t: Cn(DC), i: Se.LOW, l: (v, E, b) => ({ v: jC(E, v[1], b), B: R2(v[2]), F: v[3] }), h: (v, E, b) => l("a", { key: b.k, href: Da(v.B), title: v.F }, E(v.v, b)) }, linkAngleBraceStyleDetector: { t: Cn(iC), i: Se.MAX, l: (v) => ({ v: [{ v: v[1], type: "text" }], B: v[1], type: "link" }) }, linkBareUrlDetector: { t: (v, E) => E.N ? null : Cn(oC)(v, E), i: Se.MAX, l: (v) => ({ v: [{ v: v[1], type: "text" }], B: v[1], F: void 0, type: "link" }) }, linkMailtoDetector: { t: Cn(lC), i: Se.MAX, l(v) {
    let E = v[1], b = v[1];
    return VA.test(b) || (b = "mailto:" + b), { v: [{ v: E.replace("mailto:", ""), type: "text" }], B: b, type: "link" };
  } }, orderedList: O2(l, 1), unorderedList: O2(l, 2), newlineCoalescer: { t: Yr(YA), i: Se.LOW, l: Dc, h: () => `
` }, paragraph: { t: NC, i: Se.LOW, l: Lc, h: (v, E, b) => l("p", { key: b.k }, E(v.v, b)) }, ref: { t: Cn(sC), i: Se.MAX, l: (v) => (m[v[1]] = { B: v[2], F: v[4] }, {}), h: Mc }, refImage: { t: kn(cC), i: Se.MAX, l: (v) => ({ D: v[1] || void 0, P: v[2] }), h: (v, E, b) => l("img", { key: b.k, alt: v.D, src: Da(m[v.P].B), title: m[v.P].F }) }, refLink: { t: Cn(dC), i: Se.MAX, l: (v, E, b) => ({ v: E(v[1], b), Z: E(v[0].replace(pC, "\\$1"), b), P: v[2] }), h: (v, E, b) => m[v.P] ? l("a", { key: b.k, href: Da(m[v.P].B), title: m[v.P].F }, E(v.v, b)) : l("span", { key: b.k }, E(v.Z, b)) }, table: { t: Yr(Mg), i: Se.HIGH, l: PC, h: (v, E, b) => l("table", { key: b.k }, l("thead", null, l("tr", null, v.L.map(function(k, A) {
    return l("th", { key: A, style: F2(v, A) }, E(k, b));
  }))), l("tbody", null, v.A.map(function(k, A) {
    return l("tr", { key: A }, k.map(function(O, C) {
      return l("td", { key: C, style: F2(v, C) }, E(O, b));
    }));
  }))) }, tableSeparator: { t: function(v, E) {
    return E.$ ? (E._ = !0, gC.exec(v)) : null;
  }, i: Se.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: Zo(kC), i: Se.MIN, l: (v) => ({ v: v[0].replace(rC, (E, b) => r.namedCodesToUnicode[b] ? r.namedCodesToUnicode[b] : E) }), h: (v) => v.v }, textBolded: { t: kn(xC), i: Se.MED, l: (v, E, b) => ({ v: E(v[2], b) }), h: (v, E, b) => l("strong", { key: b.k }, E(v.v, b)) }, textEmphasized: { t: kn(wC), i: Se.LOW, l: (v, E, b) => ({ v: E(v[2], b) }), h: (v, E, b) => l("em", { key: b.k }, E(v.v, b)) }, textEscaped: { t: kn(CC), i: Se.HIGH, l: (v) => ({ v: v[1], type: "text" }) }, textMarked: { t: kn(SC), i: Se.LOW, l: Lc, h: (v, E, b) => l("mark", { key: b.k }, E(v.v, b)) }, textStrikethroughed: { t: kn(AC), i: Se.LOW, l: Lc, h: (v, E, b) => l("del", { key: b.k }, E(v.v, b)) } };
  r.disableParsingRawHTML !== !0 && (p.htmlBlock = { t: Zo(m0), i: Se.HIGH, l(v, E, b) {
    const [, k] = v[3].match(OC), A = new RegExp(`^${k}`, "gm"), O = v[3].replace(A, ""), C = (_ = O, $C.some((M) => M.test(_)) ? HC : Hi);
    var _;
    const T = v[1].toLowerCase(), R = ZA.indexOf(T) !== -1;
    b.N = b.N || T === "a";
    const $ = R ? v[3] : C(E, O, b);
    return b.N = !1, { O: c(v[2]), v: $, G: R, H: R ? T : v[1] };
  }, h: (v, E, b) => l(v.H, Jn({ key: b.k }, v.O), v.G ? v.v : E(v.v, b)) }, p.htmlSelfClosing = { t: Zo(g0), i: Se.HIGH, l: (v) => ({ O: c(v[2] || ""), H: v[1] }), h: (v, E, b) => l(v.H, Jn({}, v.O, { key: b.k })) });
  const h = function(v) {
    let E = Object.keys(v);
    function b(k, A) {
      let O = [], C = "";
      for (; k; ) {
        let _ = 0;
        for (; _ < E.length; ) {
          const T = E[_], R = v[T], $ = R.t(k, A, C);
          if ($) {
            const M = $[0];
            k = k.substring(M.length);
            const j = R.l($, b, A);
            j.type == null && (j.type = T), O.push(j), C = M;
            break;
          }
          _++;
        }
      }
      return O;
    }
    return E.sort(function(k, A) {
      let O = v[k].i, C = v[A].i;
      return O !== C ? O - C : k < A ? -1 : 1;
    }), function(k, A) {
      return b(function(O) {
        return O.replace(XA, `
`).replace(eC, "").replace(mC, "    ");
      }(k), A);
    };
  }(p), y = (x = function(v) {
    return function(E, b, k) {
      return v[E.type].h(E, b, k);
    };
  }(p), function v(E, b = {}) {
    if (Array.isArray(E)) {
      const k = b.k, A = [];
      let O = !1;
      for (let C = 0; C < E.length; C++) {
        b.k = C;
        const _ = v(E[C], b), T = typeof _ == "string";
        T && O ? A[A.length - 1] += _ : _ !== null && A.push(_), O = T;
      }
      return b.k = k, A;
    }
    return x(E, v, b);
  });
  var x;
  const w = u(e);
  return d.length ? l("div", null, w, l("footer", { key: "footer" }, d.map(function(v) {
    return l("div", { id: r.slugify(v.j), key: v.j }, v.j, y(h(v.I, { _: !0 })));
  }))) : w;
}
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(Se || (Se = {}));
const qg = (e) => {
  let { children: r, options: a } = e, l = function(u, c) {
    if (u == null)
      return {};
    var d, m, p = {}, h = Object.keys(u);
    for (m = 0; m < h.length; m++)
      c.indexOf(d = h[m]) >= 0 || (p[d] = u[d]);
    return p;
  }(e, HA);
  return D.cloneElement(zC(r, a), l);
};
function VC(e, r, a, l) {
  for (var u = e.length, c = a + (l ? 1 : -1); l ? c-- : ++c < u; )
    if (r(e[c], c, e))
      return c;
  return -1;
}
var UC = VC;
function qC(e) {
  return e !== e;
}
var WC = qC;
function GC(e, r, a) {
  for (var l = a - 1, u = e.length; ++l < u; )
    if (e[l] === r)
      return l;
  return -1;
}
var KC = GC, YC = UC, XC = WC, QC = KC;
function JC(e, r, a) {
  return r === r ? QC(e, r, a) : YC(e, XC, a);
}
var ek = JC, tk = ek;
function rk(e, r) {
  var a = e == null ? 0 : e.length;
  return !!a && tk(e, r, 0) > -1;
}
var nk = rk;
function ak(e, r, a) {
  for (var l = -1, u = e == null ? 0 : e.length; ++l < u; )
    if (a(r, e[l]))
      return !0;
  return !1;
}
var ok = ak;
function lk() {
}
var ik = lk, Bc = Mv, uk = ik, sk = gm, ck = 1 / 0, dk = Bc && 1 / sk(new Bc([, -0]))[1] == ck ? function(e) {
  return new Bc(e);
} : uk, pk = dk, fk = $v, mk = nk, gk = ok, hk = Bv, yk = pk, vk = gm, bk = 200;
function Ek(e, r, a) {
  var l = -1, u = mk, c = e.length, d = !0, m = [], p = m;
  if (a)
    d = !1, u = gk;
  else if (c >= bk) {
    var h = r ? null : yk(e);
    if (h)
      return vk(h);
    d = !1, u = hk, p = new fk();
  } else
    p = r ? [] : m;
  e:
    for (; ++l < c; ) {
      var y = e[l], x = r ? r(y) : y;
      if (y = a || y !== 0 ? y : 0, d && x === x) {
        for (var w = p.length; w--; )
          if (p[w] === x)
            continue e;
        r && p.push(x), m.push(y);
      } else
        u(p, x, a) || (p !== m && p.push(x), m.push(y));
    }
  return m;
}
var xk = Ek, wk = xk;
function Sk(e) {
  return e && e.length ? wk(e) : [];
}
var Ak = Sk;
const Ck = /* @__PURE__ */ oa(Ak);
function kk(e, r) {
  for (var a = -1, l = e == null ? 0 : e.length; ++a < l && r(e[a], a, e) !== !1; )
    ;
  return e;
}
var _k = kk, Ok = hd, Tk = Sg;
function Fk(e, r, a, l) {
  var u = !a;
  a || (a = {});
  for (var c = -1, d = r.length; ++c < d; ) {
    var m = r[c], p = l ? l(a[m], e[m], m, a, e) : void 0;
    p === void 0 && (p = e[m]), u ? Tk(a, m, p) : Ok(a, m, p);
  }
  return a;
}
var wu = Fk, Rk = wu, Lk = Eu;
function Dk(e, r) {
  return e && Rk(r, Lk(r), e);
}
var Mk = Dk, $k = wu, Bk = yd;
function Ik(e, r) {
  return e && $k(r, Bk(r), e);
}
var Pk = Ik, Xi = { exports: {} };
Xi.exports;
(function(e, r) {
  var a = Iv, l = r && !r.nodeType && r, u = l && !0 && e && !e.nodeType && e, c = u && u.exports === l, d = c ? a.Buffer : void 0, m = d ? d.allocUnsafe : void 0;
  function p(h, y) {
    if (y)
      return h.slice();
    var x = h.length, w = m ? m(x) : new h.constructor(x);
    return h.copy(w), w;
  }
  e.exports = p;
})(Xi, Xi.exports);
var Nk = Xi.exports;
function jk(e, r) {
  var a = -1, l = e.length;
  for (r || (r = Array(l)); ++a < l; )
    r[a] = e[a];
  return r;
}
var Hk = jk, Zk = wu, zk = dd;
function Vk(e, r) {
  return Zk(e, zk(e), r);
}
var Uk = Vk, qk = wu, Wk = Cg;
function Gk(e, r) {
  return qk(e, Wk(e), r);
}
var Kk = Gk, Yk = Object.prototype, Xk = Yk.hasOwnProperty;
function Qk(e) {
  var r = e.length, a = new e.constructor(r);
  return r && typeof e[0] == "string" && Xk.call(e, "index") && (a.index = e.index, a.input = e.input), a;
}
var Jk = Qk, L2 = Pv;
function e_(e) {
  var r = new e.constructor(e.byteLength);
  return new L2(r).set(new L2(e)), r;
}
var Ed = e_, t_ = Ed;
function r_(e, r) {
  var a = r ? t_(e.buffer) : e.buffer;
  return new e.constructor(a, e.byteOffset, e.byteLength);
}
var n_ = r_, a_ = /\w*$/;
function o_(e) {
  var r = new e.constructor(e.source, a_.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var l_ = o_, D2 = Nv, M2 = D2 ? D2.prototype : void 0, $2 = M2 ? M2.valueOf : void 0;
function i_(e) {
  return $2 ? Object($2.call(e)) : {};
}
var u_ = i_, s_ = Ed;
function c_(e, r) {
  var a = r ? s_(e.buffer) : e.buffer;
  return new e.constructor(a, e.byteOffset, e.length);
}
var d_ = c_, p_ = Ed, f_ = n_, m_ = l_, g_ = u_, h_ = d_, y_ = "[object Boolean]", v_ = "[object Date]", b_ = "[object Map]", E_ = "[object Number]", x_ = "[object RegExp]", w_ = "[object Set]", S_ = "[object String]", A_ = "[object Symbol]", C_ = "[object ArrayBuffer]", k_ = "[object DataView]", __ = "[object Float32Array]", O_ = "[object Float64Array]", T_ = "[object Int8Array]", F_ = "[object Int16Array]", R_ = "[object Int32Array]", L_ = "[object Uint8Array]", D_ = "[object Uint8ClampedArray]", M_ = "[object Uint16Array]", $_ = "[object Uint32Array]";
function B_(e, r, a) {
  var l = e.constructor;
  switch (r) {
    case C_:
      return p_(e);
    case y_:
    case v_:
      return new l(+e);
    case k_:
      return f_(e, a);
    case __:
    case O_:
    case T_:
    case F_:
    case R_:
    case L_:
    case D_:
    case M_:
    case $_:
      return h_(e, a);
    case b_:
      return new l();
    case E_:
    case S_:
      return new l(e);
    case x_:
      return m_(e);
    case w_:
      return new l();
    case A_:
      return g_(e);
  }
}
var I_ = B_, P_ = ul, B2 = Object.create, N_ = function() {
  function e() {
  }
  return function(r) {
    if (!P_(r))
      return {};
    if (B2)
      return B2(r);
    e.prototype = r;
    var a = new e();
    return e.prototype = void 0, a;
  };
}(), j_ = N_, H_ = j_, Z_ = Ag, z_ = fd;
function V_(e) {
  return typeof e.constructor == "function" && !z_(e) ? H_(Z_(e)) : {};
}
var U_ = V_, q_ = Qi, W_ = C0, G_ = "[object Map]";
function K_(e) {
  return W_(e) && q_(e) == G_;
}
var Y_ = K_, X_ = Y_, Q_ = ym, I2 = hm, P2 = I2 && I2.isMap, J_ = P2 ? Q_(P2) : X_, eO = J_, tO = Qi, rO = C0, nO = "[object Set]";
function aO(e) {
  return rO(e) && tO(e) == nO;
}
var oO = aO, lO = oO, iO = ym, N2 = hm, j2 = N2 && N2.isSet, uO = j2 ? iO(j2) : lO, sO = uO, cO = A0, dO = _k, pO = hd, fO = Mk, mO = Pk, gO = Nk, hO = Hk, yO = Uk, vO = Kk, bO = vg, EO = kg, xO = Qi, wO = Jk, SO = I_, AO = U_, CO = Ln, kO = S0, _O = eO, OO = ul, TO = sO, FO = Eu, RO = yd, LO = 1, DO = 2, MO = 4, Wg = "[object Arguments]", $O = "[object Array]", BO = "[object Boolean]", IO = "[object Date]", PO = "[object Error]", Gg = "[object Function]", NO = "[object GeneratorFunction]", jO = "[object Map]", HO = "[object Number]", Kg = "[object Object]", ZO = "[object RegExp]", zO = "[object Set]", VO = "[object String]", UO = "[object Symbol]", qO = "[object WeakMap]", WO = "[object ArrayBuffer]", GO = "[object DataView]", KO = "[object Float32Array]", YO = "[object Float64Array]", XO = "[object Int8Array]", QO = "[object Int16Array]", JO = "[object Int32Array]", eT = "[object Uint8Array]", tT = "[object Uint8ClampedArray]", rT = "[object Uint16Array]", nT = "[object Uint32Array]", Le = {};
Le[Wg] = Le[$O] = Le[WO] = Le[GO] = Le[BO] = Le[IO] = Le[KO] = Le[YO] = Le[XO] = Le[QO] = Le[JO] = Le[jO] = Le[HO] = Le[Kg] = Le[ZO] = Le[zO] = Le[VO] = Le[UO] = Le[eT] = Le[tT] = Le[rT] = Le[nT] = !0;
Le[PO] = Le[Gg] = Le[qO] = !1;
function Zi(e, r, a, l, u, c) {
  var d, m = r & LO, p = r & DO, h = r & MO;
  if (a && (d = u ? a(e, l, u, c) : a(e)), d !== void 0)
    return d;
  if (!OO(e))
    return e;
  var y = CO(e);
  if (y) {
    if (d = wO(e), !m)
      return hO(e, d);
  } else {
    var x = xO(e), w = x == Gg || x == NO;
    if (kO(e))
      return gO(e, m);
    if (x == Kg || x == Wg || w && !u) {
      if (d = p || w ? {} : AO(e), !m)
        return p ? vO(e, mO(d, e)) : yO(e, fO(d, e));
    } else {
      if (!Le[x])
        return u ? e : {};
      d = SO(e, x, m);
    }
  }
  c || (c = new cO());
  var v = c.get(e);
  if (v)
    return v;
  c.set(e, d), TO(e) ? e.forEach(function(k) {
    d.add(Zi(k, r, a, k, e, c));
  }) : _O(e) && e.forEach(function(k, A) {
    d.set(A, Zi(k, r, a, A, e, c));
  });
  var E = h ? p ? EO : bO : p ? RO : FO, b = y ? void 0 : E(e);
  return dO(b || e, function(k, A) {
    b && (A = k, k = e[A]), pO(d, A, Zi(k, r, a, A, e, c));
  }), d;
}
var aT = Zi, oT = aT, lT = 1, iT = 4;
function uT(e) {
  return oT(e, lT | iT);
}
var sT = uT;
const cT = /* @__PURE__ */ oa(sT);
var dT = Object.create, Yg = Object.defineProperty, pT = Object.getOwnPropertyDescriptor, Xg = Object.getOwnPropertyNames, fT = Object.getPrototypeOf, mT = Object.prototype.hasOwnProperty, ur = (e, r) => function() {
  return r || (0, e[Xg(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, gT = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let u of Xg(r))
      !mT.call(e, u) && u !== a && Yg(e, u, { get: () => r[u], enumerable: !(l = pT(r, u)) || l.enumerable });
  return e;
}, xd = (e, r, a) => (a = e != null ? dT(fT(e)) : {}, gT(
  r || !e || !e.__esModule ? Yg(a, "default", { value: e, enumerable: !0 }) : a,
  e
)), hT = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], yT = ["detail"];
function vT(e) {
  const r = hT.filter((a) => e[a] !== void 0).reduce((a, l) => ({ ...a, [l]: e[l] }), {});
  return e instanceof CustomEvent && yT.filter((a) => e[a] !== void 0).forEach((a) => {
    r[a] = e[a];
  }), r;
}
var Qg = ur({
  "node_modules/has-symbols/shams.js"(e, r) {
    r.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var l = {}, u = Symbol("test"), c = Object(u);
      if (typeof u == "string" || Object.prototype.toString.call(u) !== "[object Symbol]" || Object.prototype.toString.call(c) !== "[object Symbol]")
        return !1;
      var d = 42;
      l[u] = d;
      for (u in l)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(l).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(l).length !== 0)
        return !1;
      var m = Object.getOwnPropertySymbols(l);
      if (m.length !== 1 || m[0] !== u || !Object.prototype.propertyIsEnumerable.call(l, u))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var p = Object.getOwnPropertyDescriptor(l, u);
        if (p.value !== d || p.enumerable !== !0)
          return !1;
      }
      return !0;
    };
  }
}), Jg = ur({
  "node_modules/has-symbols/index.js"(e, r) {
    var a = typeof Symbol < "u" && Symbol, l = Qg();
    r.exports = function() {
      return typeof a != "function" || typeof Symbol != "function" || typeof a("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : l();
    };
  }
}), bT = ur({
  "node_modules/function-bind/implementation.js"(e, r) {
    var a = "Function.prototype.bind called on incompatible ", l = Array.prototype.slice, u = Object.prototype.toString, c = "[object Function]";
    r.exports = function(m) {
      var p = this;
      if (typeof p != "function" || u.call(p) !== c)
        throw new TypeError(a + p);
      for (var h = l.call(arguments, 1), y, x = function() {
        if (this instanceof y) {
          var k = p.apply(
            this,
            h.concat(l.call(arguments))
          );
          return Object(k) === k ? k : this;
        } else
          return p.apply(
            m,
            h.concat(l.call(arguments))
          );
      }, w = Math.max(0, p.length - h.length), v = [], E = 0; E < w; E++)
        v.push("$" + E);
      if (y = Function("binder", "return function (" + v.join(",") + "){ return binder.apply(this,arguments); }")(x), p.prototype) {
        var b = function() {
        };
        b.prototype = p.prototype, y.prototype = new b(), b.prototype = null;
      }
      return y;
    };
  }
}), wd = ur({
  "node_modules/function-bind/index.js"(e, r) {
    var a = bT();
    r.exports = Function.prototype.bind || a;
  }
}), ET = ur({
  "node_modules/has/src/index.js"(e, r) {
    var a = wd();
    r.exports = a.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), eh = ur({
  "node_modules/get-intrinsic/index.js"(e, r) {
    var a, l = SyntaxError, u = Function, c = TypeError, d = function(Q) {
      try {
        return u('"use strict"; return (' + Q + ").constructor;")();
      } catch {
      }
    }, m = Object.getOwnPropertyDescriptor;
    if (m)
      try {
        m({}, "");
      } catch {
        m = null;
      }
    var p = function() {
      throw new c();
    }, h = m ? function() {
      try {
        return arguments.callee, p;
      } catch {
        try {
          return m(arguments, "callee").get;
        } catch {
          return p;
        }
      }
    }() : p, y = Jg()(), x = Object.getPrototypeOf || function(Q) {
      return Q.__proto__;
    }, w = {}, v = typeof Uint8Array > "u" ? a : x(Uint8Array), E = {
      "%AggregateError%": typeof AggregateError > "u" ? a : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? a : ArrayBuffer,
      "%ArrayIteratorPrototype%": y ? x([][Symbol.iterator]()) : a,
      "%AsyncFromSyncIteratorPrototype%": a,
      "%AsyncFunction%": w,
      "%AsyncGenerator%": w,
      "%AsyncGeneratorFunction%": w,
      "%AsyncIteratorPrototype%": w,
      "%Atomics%": typeof Atomics > "u" ? a : Atomics,
      "%BigInt%": typeof BigInt > "u" ? a : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? a : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? a : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? a : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? a : FinalizationRegistry,
      "%Function%": u,
      "%GeneratorFunction%": w,
      "%Int8Array%": typeof Int8Array > "u" ? a : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? a : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? a : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": y ? x(x([][Symbol.iterator]())) : a,
      "%JSON%": typeof JSON == "object" ? JSON : a,
      "%Map%": typeof Map > "u" ? a : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !y ? a : x((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? a : Promise,
      "%Proxy%": typeof Proxy > "u" ? a : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? a : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? a : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !y ? a : x((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? a : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": y ? x(""[Symbol.iterator]()) : a,
      "%Symbol%": y ? Symbol : a,
      "%SyntaxError%": l,
      "%ThrowTypeError%": h,
      "%TypedArray%": v,
      "%TypeError%": c,
      "%Uint8Array%": typeof Uint8Array > "u" ? a : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? a : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? a : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? a : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? a : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? a : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? a : WeakSet
    }, b = function Q(Y) {
      var pe;
      if (Y === "%AsyncFunction%")
        pe = d("async function () {}");
      else if (Y === "%GeneratorFunction%")
        pe = d("function* () {}");
      else if (Y === "%AsyncGeneratorFunction%")
        pe = d("async function* () {}");
      else if (Y === "%AsyncGenerator%") {
        var J = Q("%AsyncGeneratorFunction%");
        J && (pe = J.prototype);
      } else if (Y === "%AsyncIteratorPrototype%") {
        var re = Q("%AsyncGenerator%");
        re && (pe = x(re.prototype));
      }
      return E[Y] = pe, pe;
    }, k = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, A = wd(), O = ET(), C = A.call(Function.call, Array.prototype.concat), _ = A.call(Function.apply, Array.prototype.splice), T = A.call(Function.call, String.prototype.replace), R = A.call(Function.call, String.prototype.slice), $ = A.call(Function.call, RegExp.prototype.exec), M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, j = /\\(\\)?/g, Z = function(Y) {
      var pe = R(Y, 0, 1), J = R(Y, -1);
      if (pe === "%" && J !== "%")
        throw new l("invalid intrinsic syntax, expected closing `%`");
      if (J === "%" && pe !== "%")
        throw new l("invalid intrinsic syntax, expected opening `%`");
      var re = [];
      return T(Y, M, function(ae, q, W, F) {
        re[re.length] = W ? T(F, j, "$1") : q || ae;
      }), re;
    }, V = function(Y, pe) {
      var J = Y, re;
      if (O(k, J) && (re = k[J], J = "%" + re[0] + "%"), O(E, J)) {
        var ae = E[J];
        if (ae === w && (ae = b(J)), typeof ae > "u" && !pe)
          throw new c("intrinsic " + Y + " exists, but is not available. Please file an issue!");
        return {
          alias: re,
          name: J,
          value: ae
        };
      }
      throw new l("intrinsic " + Y + " does not exist!");
    };
    r.exports = function(Y, pe) {
      if (typeof Y != "string" || Y.length === 0)
        throw new c("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof pe != "boolean")
        throw new c('"allowMissing" argument must be a boolean');
      if ($(/^%?[^%]*%?$/, Y) === null)
        throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var J = Z(Y), re = J.length > 0 ? J[0] : "", ae = V("%" + re + "%", pe), q = ae.name, W = ae.value, F = !1, U = ae.alias;
      U && (re = U[0], _(J, C([0, 1], U)));
      for (var ne = 1, ce = !0; ne < J.length; ne += 1) {
        var ue = J[ne], te = R(ue, 0, 1), le = R(ue, -1);
        if ((te === '"' || te === "'" || te === "`" || le === '"' || le === "'" || le === "`") && te !== le)
          throw new l("property names with quotes must have matching quotes");
        if ((ue === "constructor" || !ce) && (F = !0), re += "." + ue, q = "%" + re + "%", O(E, q))
          W = E[q];
        else if (W != null) {
          if (!(ue in W)) {
            if (!pe)
              throw new c("base intrinsic for " + Y + " exists, but the property is not available.");
            return;
          }
          if (m && ne + 1 >= J.length) {
            var fe = m(W, ue);
            ce = !!fe, ce && "get" in fe && !("originalValue" in fe.get) ? W = fe.get : W = W[ue];
          } else
            ce = O(W, ue), W = W[ue];
          ce && !F && (E[q] = W);
        }
      }
      return W;
    };
  }
}), xT = ur({
  "node_modules/call-bind/index.js"(e, r) {
    var a = wd(), l = eh(), u = l("%Function.prototype.apply%"), c = l("%Function.prototype.call%"), d = l("%Reflect.apply%", !0) || a.call(c, u), m = l("%Object.getOwnPropertyDescriptor%", !0), p = l("%Object.defineProperty%", !0), h = l("%Math.max%");
    if (p)
      try {
        p({}, "a", { value: 1 });
      } catch {
        p = null;
      }
    r.exports = function(w) {
      var v = d(a, c, arguments);
      if (m && p) {
        var E = m(v, "length");
        E.configurable && p(
          v,
          "length",
          { value: 1 + h(0, w.length - (arguments.length - 1)) }
        );
      }
      return v;
    };
    var y = function() {
      return d(a, u, arguments);
    };
    p ? p(r.exports, "apply", { value: y }) : r.exports.apply = y;
  }
}), wT = ur({
  "node_modules/call-bind/callBound.js"(e, r) {
    var a = eh(), l = xT(), u = l(a("String.prototype.indexOf"));
    r.exports = function(d, m) {
      var p = a(d, !!m);
      return typeof p == "function" && u(d, ".prototype.") > -1 ? l(p) : p;
    };
  }
}), ST = ur({
  "node_modules/has-tostringtag/shams.js"(e, r) {
    var a = Qg();
    r.exports = function() {
      return a() && !!Symbol.toStringTag;
    };
  }
}), AT = ur({
  "node_modules/is-regex/index.js"(e, r) {
    var a = wT(), l = ST()(), u, c, d, m;
    l && (u = a("Object.prototype.hasOwnProperty"), c = a("RegExp.prototype.exec"), d = {}, p = function() {
      throw d;
    }, m = {
      toString: p,
      valueOf: p
    }, typeof Symbol.toPrimitive == "symbol" && (m[Symbol.toPrimitive] = p));
    var p, h = a("Object.prototype.toString"), y = Object.getOwnPropertyDescriptor, x = "[object RegExp]";
    r.exports = l ? function(v) {
      if (!v || typeof v != "object")
        return !1;
      var E = y(v, "lastIndex"), b = E && u(E, "value");
      if (!b)
        return !1;
      try {
        c(v, m);
      } catch (k) {
        return k === d;
      }
    } : function(v) {
      return !v || typeof v != "object" && typeof v != "function" ? !1 : h(v) === x;
    };
  }
}), CT = ur({
  "node_modules/is-function/index.js"(e, r) {
    r.exports = l;
    var a = Object.prototype.toString;
    function l(u) {
      if (!u)
        return !1;
      var c = a.call(u);
      return c === "[object Function]" || typeof u == "function" && c !== "[object RegExp]" || typeof window < "u" && (u === window.setTimeout || u === window.alert || u === window.confirm || u === window.prompt);
    }
  }
}), kT = ur({
  "node_modules/is-symbol/index.js"(e, r) {
    var a = Object.prototype.toString, l = Jg()();
    l ? (u = Symbol.prototype.toString, c = /^Symbol\(.*\)$/, d = function(p) {
      return typeof p.valueOf() != "symbol" ? !1 : c.test(u.call(p));
    }, r.exports = function(p) {
      if (typeof p == "symbol")
        return !0;
      if (a.call(p) !== "[object Symbol]")
        return !1;
      try {
        return d(p);
      } catch {
        return !1;
      }
    }) : r.exports = function(p) {
      return !1;
    };
    var u, c, d;
  }
}), _T = xd(AT()), OT = xd(CT()), TT = xd(kT());
function FT(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var RT = typeof global == "object" && global && global.Object === Object && global, LT = RT, DT = typeof self == "object" && self && self.Object === Object && self, MT = LT || DT || Function("return this")(), Sd = MT, $T = Sd.Symbol, qa = $T, th = Object.prototype, BT = th.hasOwnProperty, IT = th.toString, zo = qa ? qa.toStringTag : void 0;
function PT(e) {
  var r = BT.call(e, zo), a = e[zo];
  try {
    e[zo] = void 0;
    var l = !0;
  } catch {
  }
  var u = IT.call(e);
  return l && (r ? e[zo] = a : delete e[zo]), u;
}
var NT = PT, jT = Object.prototype, HT = jT.toString;
function ZT(e) {
  return HT.call(e);
}
var zT = ZT, VT = "[object Null]", UT = "[object Undefined]", H2 = qa ? qa.toStringTag : void 0;
function qT(e) {
  return e == null ? e === void 0 ? UT : VT : H2 && H2 in Object(e) ? NT(e) : zT(e);
}
var WT = qT, Z2 = qa ? qa.prototype : void 0;
Z2 && Z2.toString;
function GT(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var rh = GT, KT = "[object AsyncFunction]", YT = "[object Function]", XT = "[object GeneratorFunction]", QT = "[object Proxy]";
function JT(e) {
  if (!rh(e))
    return !1;
  var r = WT(e);
  return r == YT || r == XT || r == KT || r == QT;
}
var eF = JT, tF = Sd["__core-js_shared__"], Ic = tF, z2 = function() {
  var e = /[^.]+$/.exec(Ic && Ic.keys && Ic.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function rF(e) {
  return !!z2 && z2 in e;
}
var nF = rF, aF = Function.prototype, oF = aF.toString;
function lF(e) {
  if (e != null) {
    try {
      return oF.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var iF = lF, uF = /[\\^$.*+?()[\]{}|]/g, sF = /^\[object .+?Constructor\]$/, cF = Function.prototype, dF = Object.prototype, pF = cF.toString, fF = dF.hasOwnProperty, mF = RegExp(
  "^" + pF.call(fF).replace(uF, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gF(e) {
  if (!rh(e) || nF(e))
    return !1;
  var r = eF(e) ? mF : sF;
  return r.test(iF(e));
}
var hF = gF;
function yF(e, r) {
  return e?.[r];
}
var vF = yF;
function bF(e, r) {
  var a = vF(e, r);
  return hF(a) ? a : void 0;
}
var nh = bF;
function EF(e, r) {
  return e === r || e !== e && r !== r;
}
var xF = EF, wF = nh(Object, "create"), il = wF;
function SF() {
  this.__data__ = il ? il(null) : {}, this.size = 0;
}
var AF = SF;
function CF(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var kF = CF, _F = "__lodash_hash_undefined__", OF = Object.prototype, TF = OF.hasOwnProperty;
function FF(e) {
  var r = this.__data__;
  if (il) {
    var a = r[e];
    return a === _F ? void 0 : a;
  }
  return TF.call(r, e) ? r[e] : void 0;
}
var RF = FF, LF = Object.prototype, DF = LF.hasOwnProperty;
function MF(e) {
  var r = this.__data__;
  return il ? r[e] !== void 0 : DF.call(r, e);
}
var $F = MF, BF = "__lodash_hash_undefined__";
function IF(e, r) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = il && r === void 0 ? BF : r, this;
}
var PF = IF;
function Ya(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
Ya.prototype.clear = AF;
Ya.prototype.delete = kF;
Ya.prototype.get = RF;
Ya.prototype.has = $F;
Ya.prototype.set = PF;
var V2 = Ya;
function NF() {
  this.__data__ = [], this.size = 0;
}
var jF = NF;
function HF(e, r) {
  for (var a = e.length; a--; )
    if (xF(e[a][0], r))
      return a;
  return -1;
}
var Su = HF, ZF = Array.prototype, zF = ZF.splice;
function VF(e) {
  var r = this.__data__, a = Su(r, e);
  if (a < 0)
    return !1;
  var l = r.length - 1;
  return a == l ? r.pop() : zF.call(r, a, 1), --this.size, !0;
}
var UF = VF;
function qF(e) {
  var r = this.__data__, a = Su(r, e);
  return a < 0 ? void 0 : r[a][1];
}
var WF = qF;
function GF(e) {
  return Su(this.__data__, e) > -1;
}
var KF = GF;
function YF(e, r) {
  var a = this.__data__, l = Su(a, e);
  return l < 0 ? (++this.size, a.push([e, r])) : a[l][1] = r, this;
}
var XF = YF;
function Xa(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
Xa.prototype.clear = jF;
Xa.prototype.delete = UF;
Xa.prototype.get = WF;
Xa.prototype.has = KF;
Xa.prototype.set = XF;
var QF = Xa, JF = nh(Sd, "Map"), eR = JF;
function tR() {
  this.size = 0, this.__data__ = {
    hash: new V2(),
    map: new (eR || QF)(),
    string: new V2()
  };
}
var rR = tR;
function nR(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var aR = nR;
function oR(e, r) {
  var a = e.__data__;
  return aR(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
var Au = oR;
function lR(e) {
  var r = Au(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var iR = lR;
function uR(e) {
  return Au(this, e).get(e);
}
var sR = uR;
function cR(e) {
  return Au(this, e).has(e);
}
var dR = cR;
function pR(e, r) {
  var a = Au(this, e), l = a.size;
  return a.set(e, r), this.size += a.size == l ? 0 : 1, this;
}
var fR = pR;
function Qa(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
Qa.prototype.clear = rR;
Qa.prototype.delete = iR;
Qa.prototype.get = sR;
Qa.prototype.has = dR;
Qa.prototype.set = fR;
var ah = Qa, mR = "Expected a function";
function Ad(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(mR);
  var a = function() {
    var l = arguments, u = r ? r.apply(this, l) : l[0], c = a.cache;
    if (c.has(u))
      return c.get(u);
    var d = e.apply(this, l);
    return a.cache = c.set(u, d) || c, d;
  };
  return a.cache = new (Ad.Cache || ah)(), a;
}
Ad.Cache = ah;
var gR = Ad, hR = 500;
function yR(e) {
  var r = gR(e, function(l) {
    return a.size === hR && a.clear(), l;
  }), a = r.cache;
  return r;
}
var vR = yR, bR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ER = /\\(\\)?/g;
vR(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(bR, function(a, l, u, c) {
    r.push(u ? c.replace(ER, "$1") : l || a);
  }), r;
});
var xR = FT, wR = (e) => {
  let r = null, a = !1, l = !1, u = !1, c = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
    for (let d = 0; d < e.length; d += 1)
      !r && !a && !l && !u ? e[d] === '"' || e[d] === "'" || e[d] === "`" ? r = e[d] : e[d] === "/" && e[d + 1] === "*" ? a = !0 : e[d] === "/" && e[d + 1] === "/" ? l = !0 : e[d] === "/" && e[d + 1] !== "/" && (u = !0) : (r && (e[d] === r && e[d - 1] !== "\\" || e[d] === `
` && r !== "`") && (r = null), u && (e[d] === "/" && e[d - 1] !== "\\" || e[d] === `
`) && (u = !1), a && e[d - 1] === "/" && e[d - 2] === "*" && (a = !1), l && e[d] === `
` && (l = !1)), !a && !l && (c += e[d]);
  else
    c = e;
  return c;
}, SR = la(1e4)(
  (e) => wR(e).replace(/\n\s*/g, "").trim()
), AR = function(r, a) {
  const l = a.slice(0, a.indexOf("{")), u = a.slice(a.indexOf("{"));
  if (l.includes("=>") || l.includes("function"))
    return a;
  let c = l;
  return c = c.replace(r, "function"), c + u;
}, CR = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function oh(e) {
  if (!xR(e))
    return e;
  let r = e, a = !1;
  return typeof Event < "u" && e instanceof Event && (r = vT(r), a = !0), r = Object.keys(r).reduce((l, u) => {
    try {
      r[u] && r[u].toJSON, l[u] = r[u];
    } catch {
      a = !0;
    }
    return l;
  }, {}), a ? r : e;
}
var kR = function(r) {
  let a, l, u, c;
  return function(m, p) {
    try {
      if (m === "")
        return c = [], a = /* @__PURE__ */ new Map([[p, "[]"]]), l = /* @__PURE__ */ new Map(), u = [], p;
      const h = l.get(this) || this;
      for (; u.length && h !== u[0]; )
        u.shift(), c.pop();
      if (typeof p == "boolean")
        return p;
      if (p === void 0)
        return r.allowUndefined ? "_undefined_" : void 0;
      if (p === null)
        return null;
      if (typeof p == "number")
        return p === -1 / 0 ? "_-Infinity_" : p === 1 / 0 ? "_Infinity_" : Number.isNaN(p) ? "_NaN_" : p;
      if (typeof p == "bigint")
        return `_bigint_${p.toString()}`;
      if (typeof p == "string")
        return CR.test(p) ? r.allowDate ? `_date_${p}` : void 0 : p;
      if ((0, _T.default)(p))
        return r.allowRegExp ? `_regexp_${p.flags}|${p.source}` : void 0;
      if ((0, OT.default)(p)) {
        if (!r.allowFunction)
          return;
        const { name: x } = p, w = p.toString();
        return w.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${x}|${(() => {
        }).toString()}` : `_function_${x}|${SR(AR(m, w))}`;
      }
      if ((0, TT.default)(p)) {
        if (!r.allowSymbol)
          return;
        const x = Symbol.keyFor(p);
        return x !== void 0 ? `_gsymbol_${x}` : `_symbol_${p.toString().slice(7, -1)}`;
      }
      if (u.length >= r.maxDepth)
        return Array.isArray(p) ? `[Array(${p.length})]` : "[Object]";
      if (p === this)
        return `_duplicate_${JSON.stringify(c)}`;
      if (p instanceof Error && r.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...p.cause ? { cause: p.cause } : {},
            ...p,
            name: p.name,
            message: p.message,
            stack: p.stack,
            "_constructor-name_": p.constructor.name
          }
        };
      if (p.constructor && p.constructor.name && p.constructor.name !== "Object" && !Array.isArray(p) && !r.allowClass)
        return;
      const y = a.get(p);
      if (!y) {
        const x = Array.isArray(p) ? p : oh(p);
        if (p.constructor && p.constructor.name && p.constructor.name !== "Object" && !Array.isArray(p) && r.allowClass)
          try {
            Object.assign(x, { "_constructor-name_": p.constructor.name });
          } catch {
          }
        return c.push(m), u.unshift(x), a.set(p, JSON.stringify(c)), p !== x && l.set(p, x), x;
      }
      return `_duplicate_${y}`;
    } catch {
      return;
    }
  };
}, _R = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, OR = (e, r = {}) => {
  const a = { ..._R, ...r };
  return JSON.stringify(oh(e), kR(a), r.space);
};
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lh = { exports: {} }, Pc, U2;
function TR() {
  return U2 || (U2 = 1, Pc = {
    // Where to render the table of contents.
    tocSelector: ".js-toc",
    // Where to grab the headings to build the table of contents.
    contentSelector: ".js-toc-content",
    // Which headings to grab inside of the contentSelector element.
    headingSelector: "h1, h2, h3",
    // Headings that match the ignoreSelector will be skipped.
    ignoreSelector: ".js-toc-ignore",
    // For headings inside relative or absolute positioned containers within content
    hasInnerContainers: !1,
    // Main class to add to links.
    linkClass: "toc-link",
    // Extra classes to add to links.
    extraLinkClasses: "",
    // Class to add to active links,
    // the link corresponding to the top most heading on the page.
    activeLinkClass: "is-active-link",
    // Main class to add to lists.
    listClass: "toc-list",
    // Extra classes to add to lists.
    extraListClasses: "",
    // Class that gets added when a list should be collapsed.
    isCollapsedClass: "is-collapsed",
    // Class that gets added when a list should be able
    // to be collapsed but isn't necessarily collapsed.
    collapsibleClass: "is-collapsible",
    // Class to add to list items.
    listItemClass: "toc-list-item",
    // Class to add to active list items.
    activeListItemClass: "is-active-li",
    // How many heading levels should not be collapsed.
    // For example, number 6 will show everything since
    // there are only 6 heading levels and number 0 will collapse them all.
    // The sections that are hidden will open
    // and close as you scroll to headings within them.
    collapseDepth: 0,
    // Smooth scrolling enabled.
    scrollSmooth: !0,
    // Smooth scroll duration.
    scrollSmoothDuration: 420,
    // Smooth scroll offset.
    scrollSmoothOffset: 0,
    // Callback for scroll end.
    scrollEndCallback: function(e) {
    },
    // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
    headingsOffset: 1,
    // Timeout between events firing to make sure it's
    // not too rapid (for performance reasons).
    throttleTimeout: 50,
    // Element to add the positionFixedClass to.
    positionFixedSelector: null,
    // Fixed position class to add to make sidebar fixed after scrolling
    // down past the fixedSidebarOffset.
    positionFixedClass: "is-position-fixed",
    // fixedSidebarOffset can be any number but by default is set
    // to auto which sets the fixedSidebarOffset to the sidebar
    // element's offsetTop from the top of the document on init.
    fixedSidebarOffset: "auto",
    // includeHtml can be set to true to include the HTML markup from the
    // heading node instead of just including the textContent.
    includeHtml: !1,
    // includeTitleTags automatically sets the html title tag of the link
    // to match the title. This can be useful for SEO purposes or
    // when truncating titles.
    includeTitleTags: !1,
    // onclick function to apply to all links in toc. will be called with
    // the event as the first parameter, and this can be used to stop,
    // propagation, prevent default or perform action
    onClick: function(e) {
    },
    // orderedList can be set to false to generate unordered lists (ul)
    // instead of ordered lists (ol)
    orderedList: !0,
    // If there is a fixed article scroll container, set to calculate titles' offset
    scrollContainer: null,
    // prevent ToC DOM rendering if it's already rendered by an external system
    skipRendering: !1,
    // Optional callback to change heading labels.
    // For example it can be used to cut down and put ellipses on multiline headings you deem too long.
    // Called each time a heading is parsed. Expects a string and returns the modified label to display.
    // Additionally, the attribute `data-heading-label` may be used on a heading to specify
    // a shorter string to be used in the TOC.
    // function (string) => string
    headingLabelCallback: !1,
    // ignore headings that are hidden in DOM
    ignoreHiddenElements: !1,
    // Optional callback to modify properties of parsed headings.
    // The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
    // Function has to return the same or modified obj.
    // The heading will be excluded from TOC if nothing is returned.
    // function (object, HTMLElement) => object | void
    headingObjectCallback: null,
    // Set the base path, useful if you use a `base` tag in `head`.
    basePath: "",
    // Only takes affect when `tocSelector` is scrolling,
    // keep the toc scroll position in sync with the content.
    disableTocScrollSync: !1,
    // Offset for the toc scroll (top) position when scrolling the page.
    // Only effective if `disableTocScrollSync` is false.
    tocScrollOffset: 0
  }), Pc;
}
var Nc, q2;
function FR() {
  return q2 || (q2 = 1, Nc = function(e) {
    var r = [].forEach, a = [].some, l = document.body, u, c = !0, d = " ";
    function m(A, O) {
      var C = O.appendChild(h(A));
      if (A.children.length) {
        var _ = y(A.isCollapsed);
        A.children.forEach(function(T) {
          m(T, _);
        }), C.appendChild(_);
      }
    }
    function p(A, O) {
      var C = !1, _ = y(C);
      if (O.forEach(function(T) {
        m(T, _);
      }), u = A || u, u !== null)
        return u.firstChild && u.removeChild(u.firstChild), O.length === 0 ? u : u.appendChild(_);
    }
    function h(A) {
      var O = document.createElement("li"), C = document.createElement("a");
      return e.listItemClass && O.setAttribute("class", e.listItemClass), e.onClick && (C.onclick = e.onClick), e.includeTitleTags && C.setAttribute("title", A.textContent), e.includeHtml && A.childNodes.length ? r.call(A.childNodes, function(_) {
        C.appendChild(_.cloneNode(!0));
      }) : C.textContent = A.textContent, C.setAttribute("href", e.basePath + "#" + A.id), C.setAttribute("class", e.linkClass + d + "node-name--" + A.nodeName + d + e.extraLinkClasses), O.appendChild(C), O;
    }
    function y(A) {
      var O = e.orderedList ? "ol" : "ul", C = document.createElement(O), _ = e.listClass + d + e.extraListClasses;
      return A && (_ = _ + d + e.collapsibleClass, _ = _ + d + e.isCollapsedClass), C.setAttribute("class", _), C;
    }
    function x() {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var A;
        A = document.querySelector(e.scrollContainer).scrollTop;
      } else
        A = document.documentElement.scrollTop || l.scrollTop;
      var O = document.querySelector(e.positionFixedSelector);
      e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = u.offsetTop), A > e.fixedSidebarOffset ? O.className.indexOf(e.positionFixedClass) === -1 && (O.className += d + e.positionFixedClass) : O.className = O.className.split(d + e.positionFixedClass).join("");
    }
    function w(A) {
      var O = 0;
      return A !== null && (O = A.offsetTop, e.hasInnerContainers && (O += w(A.offsetParent))), O;
    }
    function v(A) {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var O;
        O = document.querySelector(e.scrollContainer).scrollTop;
      } else
        O = document.documentElement.scrollTop || l.scrollTop;
      e.positionFixedSelector && x();
      var C = A, _;
      if (c && u !== null && C.length > 0) {
        a.call(C, function(V, Q) {
          if (w(V) > O + e.headingsOffset + 10) {
            var Y = Q === 0 ? Q : Q - 1;
            return _ = C[Y], !0;
          } else if (Q === C.length - 1)
            return _ = C[C.length - 1], !0;
        });
        var T = u.querySelector("." + e.activeLinkClass), R = u.querySelector("." + e.linkClass + ".node-name--" + _.nodeName + '[href="' + e.basePath + "#" + _.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (T === R)
          return;
        var $ = u.querySelectorAll("." + e.linkClass);
        r.call($, function(V) {
          V.className = V.className.split(d + e.activeLinkClass).join("");
        });
        var M = u.querySelectorAll("." + e.listItemClass);
        r.call(M, function(V) {
          V.className = V.className.split(d + e.activeListItemClass).join("");
        }), R && R.className.indexOf(e.activeLinkClass) === -1 && (R.className += d + e.activeLinkClass);
        var j = R && R.parentNode;
        j && j.className.indexOf(e.activeListItemClass) === -1 && (j.className += d + e.activeListItemClass);
        var Z = u.querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
        r.call(Z, function(V) {
          V.className.indexOf(e.isCollapsedClass) === -1 && (V.className += d + e.isCollapsedClass);
        }), R && R.nextSibling && R.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 && (R.nextSibling.className = R.nextSibling.className.split(d + e.isCollapsedClass).join("")), E(R && R.parentNode.parentNode);
      }
    }
    function E(A) {
      return A && A.className.indexOf(e.collapsibleClass) !== -1 && A.className.indexOf(e.isCollapsedClass) !== -1 ? (A.className = A.className.split(d + e.isCollapsedClass).join(""), E(A.parentNode.parentNode)) : A;
    }
    function b(A) {
      var O = A.target || A.srcElement;
      typeof O.className != "string" || O.className.indexOf(e.linkClass) === -1 || (c = !1);
    }
    function k() {
      c = !0;
    }
    return {
      enableTocAnimation: k,
      disableTocAnimation: b,
      render: p,
      updateToc: v
    };
  }), Nc;
}
var jc, W2;
function RR() {
  return W2 || (W2 = 1, jc = function(r) {
    var a = [].reduce;
    function l(y) {
      return y[y.length - 1];
    }
    function u(y) {
      return +y.nodeName.toUpperCase().replace("H", "");
    }
    function c(y) {
      try {
        return y instanceof window.HTMLElement || y instanceof window.parent.HTMLElement;
      } catch {
        return y instanceof window.HTMLElement;
      }
    }
    function d(y) {
      if (!c(y))
        return y;
      if (r.ignoreHiddenElements && (!y.offsetHeight || !y.offsetParent))
        return null;
      const x = y.getAttribute("data-heading-label") || (r.headingLabelCallback ? String(r.headingLabelCallback(y.textContent)) : y.textContent.trim());
      var w = {
        id: y.id,
        children: [],
        nodeName: y.nodeName,
        headingLevel: u(y),
        textContent: x
      };
      return r.includeHtml && (w.childNodes = y.childNodes), r.headingObjectCallback ? r.headingObjectCallback(w, y) : w;
    }
    function m(y, x) {
      for (var w = d(y), v = w.headingLevel, E = x, b = l(E), k = b ? b.headingLevel : 0, A = v - k; A > 0 && (b = l(E), !(b && v === b.headingLevel)); )
        b && b.children !== void 0 && (E = b.children), A--;
      return v >= r.collapseDepth && (w.isCollapsed = !0), E.push(w), E;
    }
    function p(y, x) {
      var w = x;
      r.ignoreSelector && (w = x.split(",").map(function(E) {
        return E.trim() + ":not(" + r.ignoreSelector + ")";
      }));
      try {
        return y.querySelectorAll(w);
      } catch {
        return console.warn("Headers not found with selector: " + w), null;
      }
    }
    function h(y) {
      return a.call(y, function(w, v) {
        var E = d(v);
        return E && m(E, w.nest), w;
      }, {
        nest: []
      });
    }
    return {
      nestHeadingsArray: h,
      selectHeadings: p
    };
  }), jc;
}
var Hc, G2;
function LR() {
  return G2 || (G2 = 1, Hc = function(r) {
    var a = r.tocElement || document.querySelector(r.tocSelector);
    if (a && a.scrollHeight > a.clientHeight) {
      var l = a.querySelector("." + r.activeListItemClass);
      l && (a.scrollTop = l.offsetTop - r.tocScrollOffset);
    }
  }), Hc;
}
var Zc = {}, K2;
function DR() {
  if (K2)
    return Zc;
  K2 = 1, Zc.initSmoothScrolling = e;
  function e(a) {
    var l = a.duration, u = a.offset, c = location.hash ? p(location.href) : location.href;
    d();
    function d() {
      document.body.addEventListener("click", y, !1);
      function y(x) {
        !m(x.target) || x.target.className.indexOf("no-smooth-scroll") > -1 || x.target.href.charAt(x.target.href.length - 2) === "#" && x.target.href.charAt(x.target.href.length - 1) === "!" || x.target.className.indexOf(a.linkClass) === -1 || r(x.target.hash, {
          duration: l,
          offset: u,
          callback: function() {
            h(x.target.hash);
          }
        });
      }
    }
    function m(y) {
      return y.tagName.toLowerCase() === "a" && (y.hash.length > 0 || y.href.charAt(y.href.length - 1) === "#") && (p(y.href) === c || p(y.href) + "#" === c);
    }
    function p(y) {
      return y.slice(0, y.lastIndexOf("#"));
    }
    function h(y) {
      var x = document.getElementById(y.substring(1));
      x && (/^(?:a|select|input|button|textarea)$/i.test(x.tagName) || (x.tabIndex = -1), x.focus());
    }
  }
  function r(a, l) {
    var u = window.pageYOffset, c = {
      duration: l.duration,
      offset: l.offset || 0,
      callback: l.callback,
      easing: l.easing || v
    }, d = document.querySelector('[id="' + decodeURI(a).split("#").join("") + '"]') || document.querySelector('[id="' + a.split("#").join("") + '"]'), m = typeof a == "string" ? c.offset + (a ? d && d.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : a, p = typeof c.duration == "function" ? c.duration(m) : c.duration, h, y;
    requestAnimationFrame(function(E) {
      h = E, x(E);
    });
    function x(E) {
      y = E - h, window.scrollTo(0, c.easing(y, u, m, p)), y < p ? requestAnimationFrame(x) : w();
    }
    function w() {
      window.scrollTo(0, u + m), typeof c.callback == "function" && c.callback();
    }
    function v(E, b, k, A) {
      return E /= A / 2, E < 1 ? k / 2 * E * E + b : (E--, -k / 2 * (E * (E - 2) - 1) + b);
    }
  }
  return Zc;
}
(function(e, r) {
  (function(a, l) {
    e.exports = l(a);
  })(typeof cc < "u" ? cc : window || cc, function(a) {
    var l = TR(), u = {}, c = {}, d = FR(), m = RR(), p = LR(), h, y, x = !!a && !!a.document && !!a.document.querySelector && !!a.addEventListener;
    if (typeof window > "u" && !x)
      return;
    var w, v = Object.prototype.hasOwnProperty;
    function E() {
      for (var O = {}, C = 0; C < arguments.length; C++) {
        var _ = arguments[C];
        for (var T in _)
          v.call(_, T) && (O[T] = _[T]);
      }
      return O;
    }
    function b(O, C, _) {
      C || (C = 250);
      var T, R;
      return function() {
        var $ = _ || this, M = +/* @__PURE__ */ new Date(), j = arguments;
        T && M < T + C ? (clearTimeout(R), R = setTimeout(function() {
          T = M, O.apply($, j);
        }, C)) : (T = M, O.apply($, j));
      };
    }
    function k(O) {
      try {
        return O.contentElement || document.querySelector(O.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + O.contentSelector), null;
      }
    }
    function A(O) {
      try {
        return O.tocElement || document.querySelector(O.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + O.tocSelector), null;
      }
    }
    return c.destroy = function() {
      var O = A(u);
      O !== null && (u.skipRendering || O && (O.innerHTML = ""), u.scrollContainer && document.querySelector(u.scrollContainer) ? (document.querySelector(u.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(u.scrollContainer).removeEventListener("resize", this._scrollListener, !1), h && document.querySelector(u.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), h && document.removeEventListener("click", this._clickListener, !1)));
    }, c.init = function(O) {
      if (x) {
        u = E(l, O || {}), this.options = u, this.state = {}, u.scrollSmooth && (u.duration = u.scrollSmoothDuration, u.offset = u.scrollSmoothOffset, c.scrollSmooth = DR().initSmoothScrolling(u)), h = d(u), y = m(u), this._buildHtml = h, this._parseContent = y, this._headingsArray = w, c.destroy();
        var C = k(u);
        if (C !== null) {
          var _ = A(u);
          if (_ !== null && (w = y.selectHeadings(C, u.headingSelector), w !== null)) {
            var T = y.nestHeadingsArray(w), R = T.nest;
            u.skipRendering || h.render(_, R), this._scrollListener = b(function(M) {
              h.updateToc(w), !u.disableTocScrollSync && p(u);
              var j = M && M.target && M.target.scrollingElement && M.target.scrollingElement.scrollTop === 0;
              (M && (M.eventPhase === 0 || M.currentTarget === null) || j) && (h.updateToc(w), u.scrollEndCallback && u.scrollEndCallback(M));
            }, u.throttleTimeout), this._scrollListener(), u.scrollContainer && document.querySelector(u.scrollContainer) ? (document.querySelector(u.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(u.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var $ = null;
            return this._clickListener = b(function(M) {
              u.scrollSmooth && h.disableTocAnimation(M), h.updateToc(w), $ && clearTimeout($), $ = setTimeout(function() {
                h.enableTocAnimation();
              }, u.scrollSmoothDuration);
            }, u.throttleTimeout), u.scrollContainer && document.querySelector(u.scrollContainer) ? document.querySelector(u.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, c.refresh = function(O) {
      c.destroy(), c.init(O || this.options);
    }, a.tocbot = c, c;
  });
})(lh);
var MR = lh.exports;
const Y2 = /* @__PURE__ */ oa(MR), { global: ar } = __STORYBOOK_MODULE_GLOBAL__, { deprecate: ut, once: $R, logger: Cd } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: BR, composeConfigs: r$, Preview: n$, DocsContext: a$ } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: X2, UPDATE_STORY_ARGS: IR, RESET_STORY_ARGS: PR, GLOBALS_UPDATED: Q2, NAVIGATE_URL: NR } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var jR = P.div(He, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: je(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), ih = (e) => i.createElement(jR, { ...e, className: "docblock-emptyblock sb-unstyled" }), HR = P(pu)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), ZR = P.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), Ti = P.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${t0}`]: { margin: 0 } })), zR = () => i.createElement(ZR, null, i.createElement(Ti, null), i.createElement(Ti, { style: { width: "80%" } }), i.createElement(Ti, { style: { width: "30%" } }), i.createElement(Ti, { style: { width: "80%" } })), kd = ({ isLoading: e, error: r, language: a, code: l, dark: u, format: c, ...d }) => {
  if (e)
    return i.createElement(zR, null);
  if (r)
    return i.createElement(ih, null, r);
  let m = i.createElement(HR, { bordered: !0, copyable: !0, format: c, language: a, className: "docblock-source sb-unstyled", ...d }, l);
  if (typeof u > "u")
    return m;
  let p = u ? Xc.dark : Xc.light;
  return i.createElement(Hm, { theme: e0(p) }, m);
};
kd.defaultProps = { format: !1 };
var Qe = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, _d = 600, VR = P.h1(He, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${_d}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), UR = P.h2(He, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${_d}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: je(0.25, e.color.defaultText) })), qR = P.div(({ theme: e }) => {
  let r = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, a = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, l = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [Qe("a")]: { ...r, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [Qe("blockquote")]: { ...r, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [Qe("div")]: r, [Qe("dl")]: { ...r, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [Qe("h1")]: { ...r, ...a, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [Qe("h2")]: { ...r, ...a, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [Qe("h3")]: { ...r, ...a, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [Qe("h4")]: { ...r, ...a, fontSize: `${e.typography.size.s3}px` }, [Qe("h5")]: { ...r, ...a, fontSize: `${e.typography.size.s2}px` }, [Qe("h6")]: { ...r, ...a, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [Qe("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [Qe("img")]: { maxWidth: "100%" }, [Qe("li")]: { ...r, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": l }, [Qe("ol")]: { ...r, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [Qe("p")]: { ...r, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": l }, [Qe("pre")]: { ...r, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [Qe("span")]: { ...r, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [Qe("table")]: { ...r, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [Qe("ul")]: { ...r, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), WR = P.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${_d}px)`]: {} })), GR = ({ children: e, toc: r }) => i.createElement(WR, { className: "sbdocs sbdocs-wrapper" }, i.createElement(qR, { className: "sbdocs sbdocs-content" }, e), r), Cu = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), KR = ({ zoom: e, resetZoom: r }) => i.createElement(i.Fragment, null, i.createElement(na, { key: "zoomin", onClick: (a) => {
  a.preventDefault(), e(0.8);
}, title: "Zoom in" }, i.createElement(xt, { icon: "zoom" })), i.createElement(na, { key: "zoomout", onClick: (a) => {
  a.preventDefault(), e(1.25);
}, title: "Zoom out" }, i.createElement(xt, { icon: "zoomout" })), i.createElement(na, { key: "zoomreset", onClick: (a) => {
  a.preventDefault(), r();
}, title: "Reset zoom" }, i.createElement(xt, { icon: "zoomreset" }))), YR = P(gu)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), XR = ({ isLoading: e, storyId: r, baseUrl: a, zoom: l, resetZoom: u, ...c }) => i.createElement(YR, { ...c }, i.createElement(D.Fragment, { key: "left" }, e ? [1, 2, 3].map((d) => i.createElement(ng, { key: d })) : i.createElement(KR, { zoom: l, resetZoom: u }))), uh = D.createContext({ scale: 1 }), { window: QR } = ar, JR = class extends D.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = QR.document.getElementById(e);
  }
  shouldComponentUpdate(e) {
    let { scale: r } = e;
    return r !== this.props.scale && this.setIframeBodyStyle({ width: `${r * 100}%`, height: `${r * 100}%`, transform: `scale(${1 / r})`, transformOrigin: "top left" }), !1;
  }
  setIframeBodyStyle(e) {
    return Object.assign(this.iframe.contentDocument.body.style, e);
  }
  render() {
    let { id: e, title: r, src: a, allowFullScreen: l, scale: u, ...c } = this.props;
    return i.createElement("iframe", { id: e, title: r, src: a, ...l ? { allow: "fullscreen" } : {}, loading: "lazy", ...c });
  }
}, { PREVIEW_URL: eL } = ar, tL = eL || "iframe.html", h0 = ({ story: e, primary: r }) => `story--${e.id}${r ? "--primary" : ""}`, rL = (e) => {
  let r = D.useRef(), [a, l] = D.useState(!0), [u, c] = D.useState(), { story: d, height: m, autoplay: p, forceInitialArgs: h, renderStoryToElement: y } = e;
  D.useEffect(() => {
    if (!(d && r.current))
      return () => {
      };
    let w = r.current, v = y(d, w, { showMain: () => {
    }, showError: ({ title: E, description: b }) => c(new Error(`${E} - ${b}`)), showException: (E) => c(E) }, { autoplay: p, forceInitialArgs: h });
    return l(!1), () => {
      Promise.resolve().then(() => v());
    };
  }, [p, y, d]);
  let x = "<span></span>";
  return u ? i.createElement("pre", null, i.createElement(Y5, { error: u })) : i.createElement(i.Fragment, null, m ? i.createElement("style", null, `#${h0(e)} { min-height: ${m}; transform: translateZ(0); overflow: auto }`) : null, a && i.createElement(Od, null), i.createElement("div", { ref: r, id: `${h0(e)}-inner`, "data-name": d.name, dangerouslySetInnerHTML: { __html: x } }));
}, nL = ({ story: e, height: r = "500px" }) => i.createElement("div", { style: { width: "100%", height: r } }, i.createElement(uh.Consumer, null, ({ scale: a }) => i.createElement(JR, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: ig(tL, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: a, style: { width: "100%", height: "100%", border: "0 none" } }))), aL = (e) => {
  let { inline: r } = e;
  return i.createElement("div", { id: h0(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, r ? i.createElement(rL, { ...e }) : i.createElement(nL, { ...e }));
}, Od = () => i.createElement(lg, null), oL = P.div(({ isColumn: e, columns: r, layout: a }) => ({ display: e || !r ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: a !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: a !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), J2 = P(kd)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Or(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Or(0.05, e.background.content) } })), lL = P.div(({ theme: e, withSource: r, isExpanded: a }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...Cu(e), borderBottomLeftRadius: r && a && 0, borderBottomRightRadius: r && a && 0, borderBottomWidth: a && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), iL = (e, r, a) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => a(!1) } };
    case r:
      return { source: i.createElement(J2, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => a(!1) } };
    default:
      return { source: i.createElement(J2, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => a(!0) } };
  }
};
function uL(e) {
  if (D.Children.count(e) === 1) {
    let r = e;
    if (r.props)
      return r.props.id;
  }
  return null;
}
var sL = P(XR)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), cL = P.div({ overflow: "hidden", position: "relative" }), y0 = ({ isLoading: e, isColumn: r, columns: a, children: l, withSource: u, withToolbar: c = !1, isExpanded: d = !1, additionalActions: m, className: p, layout: h = "padded", ...y }) => {
  let [x, w] = D.useState(d), { source: v, actionItem: E } = iL(u, x, w), [b, k] = D.useState(1), A = [p].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), O = u ? [E] : [], [C, _] = D.useState(m ? [...m] : []), T = [...O, ...C], { window: R } = ar, $ = D.useCallback(async (j) => {
    let { createCopyToClipboardFunction: Z } = await Promise.resolve().then(() => T8);
    Z();
  }, []), M = (j) => {
    let Z = R.getSelection();
    Z && Z.type === "Range" || (j.preventDefault(), C.filter((V) => V.title === "Copied").length === 0 && $(v.props.code).then(() => {
      _([...C, { title: "Copied", onClick: () => {
      } }]), R.setTimeout(() => _(C.filter((V) => V.title !== "Copied")), 1500);
    }));
  };
  return i.createElement(lL, { withSource: u, withToolbar: c, ...y, className: A.join(" ") }, c && i.createElement(sL, { isLoading: e, border: !0, zoom: (j) => k(b * j), resetZoom: () => k(1), storyId: uL(l), baseUrl: "./iframe.html" }), i.createElement(uh.Provider, { value: { scale: b } }, i.createElement(cL, { className: "docs-story", onCopyCapture: u && M }, i.createElement(oL, { isColumn: r || !Array.isArray(l), columns: a, layout: h }, i.createElement(K5.Element, { scale: b }, Array.isArray(l) ? l.map((j, Z) => i.createElement("div", { key: Z }, j)) : i.createElement("div", null, l))), i.createElement(z0, { actionItems: T }))), u && x && v);
}, dL = P(y0)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), pL = () => i.createElement(dL, { isLoading: !0, withToolbar: !0 }, i.createElement(Od, null)), fL = P.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: en({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), mL = ({ tags: e }) => {
  let r = (e.params || []).filter((c) => c.description), a = r.length !== 0, l = e.deprecated != null, u = e.returns != null && e.returns.description != null;
  return !a && !u && !l ? null : i.createElement(i.Fragment, null, i.createElement(fL, null, i.createElement("tbody", null, l && i.createElement("tr", { key: "deprecated" }, i.createElement("td", { colSpan: 2 }, i.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), a && r.map((c) => i.createElement("tr", { key: c.name }, i.createElement("td", null, i.createElement("code", null, c.name)), i.createElement("td", null, c.description))), u && i.createElement("tr", { key: "returns" }, i.createElement("td", null, i.createElement("code", null, "Returns")), i.createElement("td", null, e.returns.description)))));
}, v0 = 8, em = P.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), gL = P.span(en, ({ theme: e, simple: r = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...r && { background: "transparent", border: "0 none", paddingLeft: 0 } })), hL = P.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), yL = P.div(en, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), vL = P.div(({ theme: e, width: r }) => ({ width: r, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), bL = P(xt)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), EL = () => i.createElement("span", null, "-"), sh = ({ text: e, simple: r }) => i.createElement(gL, { simple: r }, e), xL = la(1e3)((e) => {
  let r = e.split(/\r?\n/);
  return `${Math.max(...r.map((a) => a.length))}ch`;
}), wL = (e) => {
  if (!e)
    return [e];
  let r = e.split("|").map((a) => a.trim());
  return Ck(r);
}, tm = (e, r = !0) => {
  let a = e;
  return r || (a = e.slice(0, v0)), a.map((l) => i.createElement(sh, { key: l, text: l === "" ? '""' : l }));
}, SL = ({ value: e, initialExpandedArgs: r }) => {
  let { summary: a, detail: l } = e, [u, c] = D.useState(!1), [d, m] = D.useState(r || !1);
  if (a == null)
    return null;
  let p = typeof a.toString == "function" ? a.toString() : a;
  if (l == null) {
    if (/[(){}[\]<>]/.test(p))
      return i.createElement(sh, { text: p });
    let h = wL(p), y = h.length;
    return y > v0 ? i.createElement(em, { isExpanded: d }, tm(h, d), i.createElement(hL, { onClick: () => m(!d) }, d ? "Show less..." : `Show ${y - v0} more...`)) : i.createElement(em, null, tm(h));
  }
  return i.createElement(tg, { closeOnOutsideClick: !0, placement: "bottom", visible: u, onVisibleChange: (h) => {
    c(h);
  }, tooltip: i.createElement(vL, { width: xL(l) }, i.createElement(pu, { language: "jsx", format: !1 }, l)) }, i.createElement(yL, { className: "sbdocs-expandable" }, i.createElement("span", null, p), i.createElement(bL, { icon: u ? "arrowup" : "arrowdown" })));
}, zc = ({ value: e, initialExpandedArgs: r }) => e == null ? i.createElement(EL, null) : i.createElement(SL, { value: e, initialExpandedArgs: r }), AL = P.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: je(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${_i(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${_i(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: _i(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${_i(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), CL = (e) => e === "true", kL = ({ name: e, value: r, onChange: a, onBlur: l, onFocus: u }) => {
  let c = D.useCallback(() => a(!1), [a]);
  if (r === void 0)
    return i.createElement(vr.Button, { id: Ji(e), onClick: c }, "Set boolean");
  let d = br(e), m = typeof r == "string" ? CL(r) : r;
  return i.createElement(AL, { htmlFor: d, title: m ? "Change to false" : "Change to true" }, i.createElement("input", { id: d, type: "checkbox", onChange: (p) => a(p.target.checked), checked: m, name: e, onBlur: l, onFocus: u }), i.createElement("span", null, "False"), i.createElement("span", null, "True"));
}, _L = (e) => {
  let [r, a, l] = e.split("-"), u = /* @__PURE__ */ new Date();
  return u.setFullYear(parseInt(r, 10), parseInt(a, 10) - 1, parseInt(l, 10)), u;
}, OL = (e) => {
  let [r, a] = e.split(":"), l = /* @__PURE__ */ new Date();
  return l.setHours(parseInt(r, 10)), l.setMinutes(parseInt(a, 10)), l;
}, TL = (e) => {
  let r = new Date(e), a = `000${r.getFullYear()}`.slice(-4), l = `0${r.getMonth() + 1}`.slice(-2), u = `0${r.getDate()}`.slice(-2);
  return `${a}-${l}-${u}`;
}, FL = (e) => {
  let r = new Date(e), a = `0${r.getHours()}`.slice(-2), l = `0${r.getMinutes()}`.slice(-2);
  return `${a}:${l}`;
}, RL = P.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), LL = ({ name: e, value: r, onChange: a, onFocus: l, onBlur: u }) => {
  let [c, d] = D.useState(!0), m = D.useRef(), p = D.useRef();
  D.useEffect(() => {
    c !== !1 && (m && m.current && (m.current.value = TL(r)), p && p.current && (p.current.value = FL(r)));
  }, [r]);
  let h = (w) => {
    let v = _L(w.target.value), E = new Date(r);
    E.setFullYear(v.getFullYear(), v.getMonth(), v.getDate());
    let b = E.getTime();
    b && a(b), d(!!b);
  }, y = (w) => {
    let v = OL(w.target.value), E = new Date(r);
    E.setHours(v.getHours()), E.setMinutes(v.getMinutes());
    let b = E.getTime();
    b && a(b), d(!!b);
  }, x = br(e);
  return i.createElement(RL, null, i.createElement(vr.Input, { type: "date", max: "9999-12-31", ref: m, id: `${x}-date`, name: `${x}-date`, onChange: h, onFocus: l, onBlur: u }), i.createElement(vr.Input, { type: "time", id: `${x}-time`, name: `${x}-time`, ref: p, onChange: y, onFocus: l, onBlur: u }), c ? null : i.createElement("div", null, "invalid"));
}, DL = P.label({ display: "flex" }), ML = (e) => {
  let r = parseFloat(e);
  return Number.isNaN(r) ? void 0 : r;
}, $L = ({ name: e, value: r, onChange: a, min: l, max: u, step: c, onBlur: d, onFocus: m }) => {
  let [p, h] = D.useState(typeof r == "number" ? r : ""), [y, x] = D.useState(!1), [w, v] = D.useState(null), E = D.useCallback((A) => {
    h(A.target.value);
    let O = parseFloat(A.target.value);
    Number.isNaN(O) ? v(new Error(`'${A.target.value}' is not a number`)) : (a(O), v(null));
  }, [a, v]), b = D.useCallback(() => {
    h("0"), a(0), x(!0);
  }, [x]), k = D.useRef(null);
  return D.useEffect(() => {
    y && k.current && k.current.select();
  }, [y]), D.useEffect(() => {
    p !== (typeof r == "number" ? r : "") && h(r);
  }, [r]), !y && r === void 0 ? i.createElement(vr.Button, { id: Ji(e), onClick: b }, "Set number") : i.createElement(DL, null, i.createElement(vr.Input, { ref: k, id: br(e), type: "number", onChange: E, size: "flex", placeholder: "Edit number...", value: p, valid: w ? "error" : null, autoFocus: y, name: e, min: l, max: u, step: c, onFocus: m, onBlur: d }));
}, ch = (e, r) => {
  let a = r && Object.entries(r).find(([l, u]) => u === e);
  return a ? a[0] : void 0;
}, b0 = (e, r) => e && r ? Object.entries(r).filter((a) => e.includes(a[1])).map((a) => a[0]) : [], dh = (e, r) => e && r && e.map((a) => r[a]), BL = P.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), IL = P.span({}), PL = P.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), rm = ({ name: e, options: r, value: a, onChange: l, isInline: u }) => {
  if (!r)
    return Cd.warn(`Checkbox with no options: ${e}`), i.createElement(i.Fragment, null, "-");
  let c = b0(a, r), [d, m] = D.useState(c), p = (y) => {
    let x = y.target.value, w = [...d];
    w.includes(x) ? w.splice(w.indexOf(x), 1) : w.push(x), l(dh(w, r)), m(w);
  };
  D.useEffect(() => {
    m(b0(a, r));
  }, [a]);
  let h = br(e);
  return i.createElement(BL, { isInline: u }, Object.keys(r).map((y, x) => {
    let w = `${h}-${x}`;
    return i.createElement(PL, { key: w, htmlFor: w }, i.createElement("input", { type: "checkbox", id: w, name: w, value: y, onChange: p, checked: d?.includes(y) }), i.createElement(IL, null, y));
  }));
}, NL = P.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), jL = P.span({}), HL = P.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), nm = ({ name: e, options: r, value: a, onChange: l, isInline: u }) => {
  if (!r)
    return Cd.warn(`Radio with no options: ${e}`), i.createElement(i.Fragment, null, "-");
  let c = ch(a, r), d = br(e);
  return i.createElement(NL, { isInline: u }, Object.keys(r).map((m, p) => {
    let h = `${d}-${p}`;
    return i.createElement(HL, { key: h, htmlFor: h }, i.createElement("input", { type: "radio", id: h, name: h, value: m, onChange: (y) => l(r[y.currentTarget.value]), checked: m === c }), i.createElement(jL, null, m));
  }));
}, ZL = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, ph = P.select(({ theme: e }) => ({ ...ZL, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), fh = P.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), am = "Choose option...", zL = ({ name: e, value: r, options: a, onChange: l }) => {
  let u = (m) => {
    l(a[m.currentTarget.value]);
  }, c = ch(r, a) || am, d = br(e);
  return i.createElement(fh, null, i.createElement(xt, { icon: "arrowdown" }), i.createElement(ph, { id: d, value: c, onChange: u }, i.createElement("option", { key: "no-selection", disabled: !0 }, am), Object.keys(a).map((m) => i.createElement("option", { key: m }, m))));
}, VL = ({ name: e, value: r, options: a, onChange: l }) => {
  let u = (m) => {
    let p = Array.from(m.currentTarget.options).filter((h) => h.selected).map((h) => h.value);
    l(dh(p, a));
  }, c = b0(r, a), d = br(e);
  return i.createElement(fh, null, i.createElement(ph, { id: d, multiple: !0, value: c, onChange: u }, Object.keys(a).map((m) => i.createElement("option", { key: m }, m))));
}, om = (e) => {
  let { name: r, options: a } = e;
  return a ? e.isMulti ? i.createElement(VL, { ...e }) : i.createElement(zL, { ...e }) : (Cd.warn(`Select with no options: ${r}`), i.createElement(i.Fragment, null, "-"));
}, UL = (e, r) => Array.isArray(e) ? e.reduce((a, l) => (a[r?.[l] || String(l)] = l, a), {}) : e, qL = { check: rm, "inline-check": rm, radio: nm, "inline-radio": nm, select: om, "multi-select": om }, Ma = (e) => {
  let { type: r = "select", labels: a, argType: l } = e, u = { ...e, options: l ? UL(l.options, a) : {}, isInline: r.includes("inline"), isMulti: r.includes("multi") }, c = qL[r];
  if (c)
    return i.createElement(c, { ...u });
  throw new Error(`Unknown options type: ${r}`);
}, Td = "value", WL = "key", GL = "Error", KL = "Object", YL = "Array", XL = "String", QL = "Number", JL = "Boolean", eD = "Date", tD = "Null", rD = "Undefined", nD = "Function", aD = "Symbol", mh = "ADD_DELTA_TYPE", gh = "REMOVE_DELTA_TYPE", hh = "UPDATE_DELTA_TYPE";
function Tn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function yh(e, r) {
  let a = Tn(e), l = Tn(r);
  return (a === "Function" || l === "Function") && l !== a;
}
var Fd = class extends D.Component {
  constructor(e) {
    super(e), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: r } = this.state, { onlyValue: a } = this.props;
    e && typeof e.focus == "function" && e.focus(), a && r && typeof r.focus == "function" && r.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.onSubmit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd: e, onlyValue: r, onSubmitValueParser: a, keyPath: l, deep: u } = this.props, { inputRefKey: c, inputRefValue: d } = this.state, m = {};
    if (!r) {
      if (!c.value)
        return;
      m.key = c.value;
    }
    m.newValue = a(!1, l, u, m.key, d.value), e(m);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: r, addButtonElement: a, cancelButtonElement: l, inputElementGenerator: u, keyPath: c, deep: d } = this.props, m = D.cloneElement(a, { onClick: this.onSubmit }), p = D.cloneElement(l, { onClick: e }), h = u(Td, c, d), y = D.cloneElement(h, { placeholder: "Value", ref: this.refInputValue }), x = null;
    if (!r) {
      let w = u(WL, c, d);
      x = D.cloneElement(w, { placeholder: "Key", ref: this.refInputKey });
    }
    return i.createElement("span", { className: "rejt-add-value-node" }, x, y, p, m);
  }
};
Fd.defaultProps = { onlyValue: !1, addButtonElement: i.createElement("button", null, "+"), cancelButtonElement: i.createElement("button", null, "c") };
var vh = class extends D.Component {
  constructor(e) {
    super(e);
    let r = [...e.keyPath, e.name];
    this.state = { data: e.data, name: e.name, keyPath: r, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(r, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.data !== r.data ? { data: e.data } : null;
  }
  onChildUpdate(e, r) {
    let { data: a, keyPath: l } = this.state;
    a[e] = r, this.setState({ data: a });
    let { onUpdate: u } = this.props, c = l.length;
    u(l[c - 1], a);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: r, logger: a } = this.props, { data: l, keyPath: u, nextDeep: c } = this.state, d = l[e];
      r(e, u, c, d).then(() => {
        let m = { keyPath: u, deep: c, key: e, oldValue: d, type: gh };
        l.splice(e, 1), this.setState({ data: l });
        let { onUpdate: p, onDeltaUpdate: h } = this.props;
        p(u[u.length - 1], l), h(m);
      }).catch(a.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: r, keyPath: a, nextDeep: l } = this.state, { beforeAddAction: u, logger: c } = this.props;
    u(r.length, a, l, e).then(() => {
      let d = [...r, e];
      this.setState({ data: d }), this.handleAddValueCancel();
      let { onUpdate: m, onDeltaUpdate: p } = this.props;
      m(a[a.length - 1], d), p({ type: mh, keyPath: a, deep: l, key: d.length - 1, newValue: e });
    }).catch(c.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: r }) {
    return new Promise((a, l) => {
      let { beforeUpdateAction: u } = this.props, { data: c, keyPath: d, nextDeep: m } = this.state, p = c[e];
      u(e, d, m, p, r).then(() => {
        c[e] = r, this.setState({ data: c });
        let { onUpdate: h, onDeltaUpdate: y } = this.props;
        h(d[d.length - 1], c), y({ type: hh, keyPath: d, deep: m, key: e, newValue: r, oldValue: p }), a(void 0);
      }).catch(l);
    });
  }
  renderCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l } = this.state, { handleRemove: u, readOnly: c, getStyle: d, dataType: m, minusMenuElement: p } = this.props, { minus: h, collapsed: y } = d(e, r, a, l, m), x = c(e, r, a, l, m), w = D.cloneElement(p, { onClick: u, className: "rejt-minus-menu", style: h });
    return i.createElement("span", { className: "rejt-collapsed" }, i.createElement("span", { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode }, "[...] ", r.length, " ", r.length === 1 ? "item" : "items"), !x && w);
  }
  renderNotCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l, addFormVisible: u, nextDeep: c } = this.state, { isCollapsed: d, handleRemove: m, onDeltaUpdate: p, readOnly: h, getStyle: y, dataType: x, addButtonElement: w, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: k, minusMenuElement: A, plusMenuElement: O, beforeRemoveAction: C, beforeAddAction: _, beforeUpdateAction: T, logger: R, onSubmitValueParser: $ } = this.props, { minus: M, plus: j, delimiter: Z, ul: V, addForm: Q } = y(e, r, a, l, x), Y = h(e, r, a, l, x), pe = D.cloneElement(O, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: j }), J = D.cloneElement(A, { onClick: m, className: "rejt-minus-menu", style: M }), re = !0, ae = "[", q = "]";
    return i.createElement("span", { className: "rejt-not-collapsed" }, i.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, ae), !u && pe, i.createElement("ul", { className: "rejt-not-collapsed-list", style: V }, r.map((W, F) => i.createElement(ku, { key: F, name: F.toString(), data: W, keyPath: a, deep: c, isCollapsed: d, handleRemove: this.handleRemoveItem(F), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: w, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: k, minusMenuElement: A, plusMenuElement: O, beforeRemoveAction: C, beforeAddAction: _, beforeUpdateAction: T, logger: R, onSubmitValueParser: $ }))), !Y && u && i.createElement("div", { className: "rejt-add-form", style: Q }, i.createElement(Fd, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: re, addButtonElement: w, cancelButtonElement: v, inputElementGenerator: b, keyPath: a, deep: l, onSubmitValueParser: $ })), i.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, q), !Y && J);
  }
  render() {
    let { name: e, collapsed: r, data: a, keyPath: l, deep: u } = this.state, { dataType: c, getStyle: d } = this.props, m = r ? this.renderCollapsed() : this.renderNotCollapsed(), p = d(e, a, l, u, c);
    return i.createElement("div", { className: "rejt-array-node" }, i.createElement("span", { onClick: this.handleCollapseMode }, i.createElement("span", { className: "rejt-name", style: p.name }, e, " :", " ")), m);
  }
};
vh.defaultProps = { keyPath: [], deep: 0, minusMenuElement: i.createElement("span", null, " - "), plusMenuElement: i.createElement("span", null, " + ") };
var bh = class extends D.Component {
  constructor(e) {
    super(e);
    let r = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: r, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.value !== r.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: r, name: a, value: l, keyPath: u, deep: c } = this.state, { readOnly: d, dataType: m } = this.props, p = d(a, l, u, c, m);
    e && !p && typeof r.focus == "function" && r.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: r, logger: a, onSubmitValueParser: l, keyPath: u } = this.props, { inputRef: c, name: d, deep: m } = this.state;
    if (!c)
      return;
    let p = l(!0, u, m, d, c.value);
    e({ value: p, key: d }).then(() => {
      yh(r, p) || this.handleCancelEdit();
    }).catch(a.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: r, editEnabled: a, keyPath: l, deep: u } = this.state, { handleRemove: c, originalValue: d, readOnly: m, dataType: p, getStyle: h, editButtonElement: y, cancelButtonElement: x, textareaElementGenerator: w, minusMenuElement: v, keyPath: E } = this.props, b = h(e, d, l, u, p), k = null, A = null, O = m(e, d, l, u, p);
    if (a && !O) {
      let C = w(Td, E, u, e, d, p), _ = D.cloneElement(y, { onClick: this.handleEdit }), T = D.cloneElement(x, { onClick: this.handleCancelEdit }), R = D.cloneElement(C, { ref: this.refInput, defaultValue: d });
      k = i.createElement("span", { className: "rejt-edit-form", style: b.editForm }, R, " ", T, _), A = null;
    } else {
      k = i.createElement("span", { className: "rejt-value", style: b.value, onClick: O ? null : this.handleEditMode }, r);
      let C = D.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: b.minus });
      A = O ? null : C;
    }
    return i.createElement("li", { className: "rejt-function-value-node", style: b.li }, i.createElement("span", { className: "rejt-name", style: b.name }, e, " :", " "), k, A);
  }
};
bh.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: i.createElement("button", null, "e"), cancelButtonElement: i.createElement("button", null, "c"), minusMenuElement: i.createElement("span", null, " - ") };
var ku = class extends D.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, r) {
    return e.data !== r.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: r, keyPath: a, deep: l } = this.state, { isCollapsed: u, handleRemove: c, handleUpdateValue: d, onUpdate: m, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: x, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: k, plusMenuElement: A, beforeRemoveAction: O, beforeAddAction: C, beforeUpdateAction: _, logger: T, onSubmitValueParser: R } = this.props, $ = () => !0, M = Tn(e);
    switch (M) {
      case GL:
        return i.createElement(E0, { data: e, name: r, isCollapsed: u, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: $, dataType: M, getStyle: y, addButtonElement: x, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: k, plusMenuElement: A, beforeRemoveAction: O, beforeAddAction: C, beforeUpdateAction: _, logger: T, onSubmitValueParser: R });
      case KL:
        return i.createElement(E0, { data: e, name: r, isCollapsed: u, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: h, dataType: M, getStyle: y, addButtonElement: x, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: k, plusMenuElement: A, beforeRemoveAction: O, beforeAddAction: C, beforeUpdateAction: _, logger: T, onSubmitValueParser: R });
      case YL:
        return i.createElement(vh, { data: e, name: r, isCollapsed: u, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: h, dataType: M, getStyle: y, addButtonElement: x, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: k, plusMenuElement: A, beforeRemoveAction: O, beforeAddAction: C, beforeUpdateAction: _, logger: T, onSubmitValueParser: R });
      case XL:
        return i.createElement(_n, { name: r, value: `"${e}"`, originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case QL:
        return i.createElement(_n, { name: r, value: e, originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case JL:
        return i.createElement(_n, { name: r, value: e ? "true" : "false", originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case eD:
        return i.createElement(_n, { name: r, value: e.toISOString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: $, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case tD:
        return i.createElement(_n, { name: r, value: "null", originalValue: "null", keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case rD:
        return i.createElement(_n, { name: r, value: "undefined", originalValue: "undefined", keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case nD:
        return i.createElement(bh, { name: r, value: e.toString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, textareaElementGenerator: b, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      case aD:
        return i.createElement(_n, { name: r, value: e.toString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: $, dataType: M, getStyle: y, cancelButtonElement: w, editButtonElement: v, inputElementGenerator: E, minusMenuElement: k, logger: T, onSubmitValueParser: R });
      default:
        return null;
    }
  }
};
ku.defaultProps = { keyPath: [], deep: 0 };
var E0 = class extends D.Component {
  constructor(e) {
    super(e);
    let r = e.deep === -1 ? [] : [...e.keyPath, e.name];
    this.state = { name: e.name, data: e.data, keyPath: r, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(r, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.data !== r.data ? { data: e.data } : null;
  }
  onChildUpdate(e, r) {
    let { data: a, keyPath: l } = this.state;
    a[e] = r, this.setState({ data: a });
    let { onUpdate: u } = this.props, c = l.length;
    u(l[c - 1], a);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: r }) {
    let { data: a, keyPath: l, nextDeep: u } = this.state, { beforeAddAction: c, logger: d } = this.props;
    c(e, l, u, r).then(() => {
      a[e] = r, this.setState({ data: a }), this.handleAddValueCancel();
      let { onUpdate: m, onDeltaUpdate: p } = this.props;
      m(l[l.length - 1], a), p({ type: mh, keyPath: l, deep: u, key: e, newValue: r });
    }).catch(d.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: r, logger: a } = this.props, { data: l, keyPath: u, nextDeep: c } = this.state, d = l[e];
      r(e, u, c, d).then(() => {
        let m = { keyPath: u, deep: c, key: e, oldValue: d, type: gh };
        delete l[e], this.setState({ data: l });
        let { onUpdate: p, onDeltaUpdate: h } = this.props;
        p(u[u.length - 1], l), h(m);
      }).catch(a.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: r }) {
    return new Promise((a, l) => {
      let { beforeUpdateAction: u } = this.props, { data: c, keyPath: d, nextDeep: m } = this.state, p = c[e];
      u(e, d, m, p, r).then(() => {
        c[e] = r, this.setState({ data: c });
        let { onUpdate: h, onDeltaUpdate: y } = this.props;
        h(d[d.length - 1], c), y({ type: hh, keyPath: d, deep: m, key: e, newValue: r, oldValue: p }), a();
      }).catch(l);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: r, deep: a, data: l } = this.state, { handleRemove: u, readOnly: c, dataType: d, getStyle: m, minusMenuElement: p } = this.props, { minus: h, collapsed: y } = m(e, l, r, a, d), x = Object.getOwnPropertyNames(l), w = c(e, l, r, a, d), v = D.cloneElement(p, { onClick: u, className: "rejt-minus-menu", style: h });
    return i.createElement("span", { className: "rejt-collapsed" }, i.createElement("span", { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode }, "{...}", " ", x.length, " ", x.length === 1 ? "key" : "keys"), !w && v);
  }
  renderNotCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l, nextDeep: u, addFormVisible: c } = this.state, { isCollapsed: d, handleRemove: m, onDeltaUpdate: p, readOnly: h, getStyle: y, dataType: x, addButtonElement: w, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: k, minusMenuElement: A, plusMenuElement: O, beforeRemoveAction: C, beforeAddAction: _, beforeUpdateAction: T, logger: R, onSubmitValueParser: $ } = this.props, { minus: M, plus: j, addForm: Z, ul: V, delimiter: Q } = y(e, r, a, l, x), Y = Object.getOwnPropertyNames(r), pe = h(e, r, a, l, x), J = D.cloneElement(O, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: j }), re = D.cloneElement(A, { onClick: m, className: "rejt-minus-menu", style: M }), ae = Y.map((F) => i.createElement(ku, { key: F, name: F, data: r[F], keyPath: a, deep: u, isCollapsed: d, handleRemove: this.handleRemoveValue(F), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: w, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: k, minusMenuElement: A, plusMenuElement: O, beforeRemoveAction: C, beforeAddAction: _, beforeUpdateAction: T, logger: R, onSubmitValueParser: $ })), q = "{", W = "}";
    return i.createElement("span", { className: "rejt-not-collapsed" }, i.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Q }, q), !pe && J, i.createElement("ul", { className: "rejt-not-collapsed-list", style: V }, ae), !pe && c && i.createElement("div", { className: "rejt-add-form", style: Z }, i.createElement(Fd, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: w, cancelButtonElement: v, inputElementGenerator: b, keyPath: a, deep: l, onSubmitValueParser: $ })), i.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Q }, W), !pe && re);
  }
  render() {
    let { name: e, collapsed: r, data: a, keyPath: l, deep: u } = this.state, { getStyle: c, dataType: d } = this.props, m = r ? this.renderCollapsed() : this.renderNotCollapsed(), p = c(e, a, l, u, d);
    return i.createElement("div", { className: "rejt-object-node" }, i.createElement("span", { onClick: this.handleCollapseMode }, i.createElement("span", { className: "rejt-name", style: p.name }, e, " :", " ")), m);
  }
};
E0.defaultProps = { keyPath: [], deep: 0, minusMenuElement: i.createElement("span", null, " - "), plusMenuElement: i.createElement("span", null, " + ") };
var _n = class extends D.Component {
  constructor(e) {
    super(e);
    let r = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: r, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.value !== r.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: r, name: a, value: l, keyPath: u, deep: c } = this.state, { readOnly: d, dataType: m } = this.props, p = d(a, l, u, c, m);
    e && !p && typeof r.focus == "function" && r.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: r, logger: a, onSubmitValueParser: l, keyPath: u } = this.props, { inputRef: c, name: d, deep: m } = this.state;
    if (!c)
      return;
    let p = l(!0, u, m, d, c.value);
    e({ value: p, key: d }).then(() => {
      yh(r, p) || this.handleCancelEdit();
    }).catch(a.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: r, editEnabled: a, keyPath: l, deep: u } = this.state, { handleRemove: c, originalValue: d, readOnly: m, dataType: p, getStyle: h, editButtonElement: y, cancelButtonElement: x, inputElementGenerator: w, minusMenuElement: v, keyPath: E } = this.props, b = h(e, d, l, u, p), k = m(e, d, l, u, p), A = a && !k, O = w(Td, E, u, e, d, p), C = D.cloneElement(y, { onClick: this.handleEdit }), _ = D.cloneElement(x, { onClick: this.handleCancelEdit }), T = D.cloneElement(O, { ref: this.refInput, defaultValue: JSON.stringify(d) }), R = D.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: b.minus });
    return i.createElement("li", { className: "rejt-value-node", style: b.li }, i.createElement("span", { className: "rejt-name", style: b.name }, e, " : "), A ? i.createElement("span", { className: "rejt-edit-form", style: b.editForm }, T, " ", _, C) : i.createElement("span", { className: "rejt-value", style: b.value, onClick: k ? null : this.handleEditMode }, String(r)), !k && !A && R);
  }
};
_n.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: i.createElement("button", null, "e"), cancelButtonElement: i.createElement("button", null, "c"), minusMenuElement: i.createElement("span", null, " - ") };
var oD = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, lD = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, iD = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function uD(e) {
  let r = e;
  if (r.indexOf("function") === 0)
    return (0, eval)(`(${r})`);
  try {
    r = JSON.parse(e);
  } catch {
  }
  return r;
}
var Eh = class extends D.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, rootName: e.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.data !== r.data || e.rootName !== r.rootName ? { data: e.data, rootName: e.rootName } : null;
  }
  onUpdate(e, r) {
    this.setState({ data: r }), this.props.onFullyUpdate(r);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: r } = this.state, { isCollapsed: a, onDeltaUpdate: l, readOnly: u, getStyle: c, addButtonElement: d, cancelButtonElement: m, editButtonElement: p, inputElement: h, textareaElement: y, minusMenuElement: x, plusMenuElement: w, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: b, logger: k, onSubmitValueParser: A, fallback: O = null } = this.props, C = Tn(e), _ = u;
    Tn(u) === "Boolean" && (_ = () => u);
    let T = h;
    h && Tn(h) !== "Function" && (T = () => h);
    let R = y;
    return y && Tn(y) !== "Function" && (R = () => y), C === "Object" || C === "Array" ? i.createElement("div", { className: "rejt-tree" }, i.createElement(ku, { data: e, name: r, deep: -1, isCollapsed: a, onUpdate: this.onUpdate, onDeltaUpdate: l, readOnly: _, getStyle: c, addButtonElement: d, cancelButtonElement: m, editButtonElement: p, inputElementGenerator: T, textareaElementGenerator: R, minusMenuElement: x, plusMenuElement: w, handleRemove: this.removeRoot, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: b, logger: k, onSubmitValueParser: A })) : O;
  }
};
Eh.defaultProps = { rootName: "root", isCollapsed: (e, r) => r !== -1, getStyle: (e, r, a, l, u) => {
  switch (u) {
    case "Object":
    case "Error":
      return oD;
    case "Array":
      return lD;
    default:
      return iD;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, r, a, l, u) => uD(u), inputElement: () => i.createElement("input", null), textareaElement: () => i.createElement("textarea", null), fallback: null };
var { window: sD } = ar, cD = P.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), Vc = P.button(({ theme: e, primary: r }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: r ? e.color.secondary : "transparent", color: r ? e.color.lightest : e.color.dark, fontWeight: r ? "bold" : "normal", cursor: "pointer", order: r ? "initial" : 9 })), lm = P(xt)(({ theme: e, icon: r, disabled: a }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: a ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": a ? {} : { color: r === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), im = P.input(({ theme: e, placeholder: r }) => ({ outline: 0, margin: r ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: r === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), dD = P(na)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), pD = P(vr.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), fD = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, mD = (e) => {
  e.currentTarget.dispatchEvent(new sD.KeyboardEvent("keydown", fD));
}, gD = (e) => {
  e.currentTarget.select();
}, hD = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), um = ({ name: e, value: r, onChange: a }) => {
  let l = L4(), u = D.useMemo(() => r && cT(r), [r]), c = u != null, [d, m] = D.useState(!c), [p, h] = D.useState(null), y = D.useCallback((k) => {
    try {
      k && a(JSON.parse(k)), h(void 0);
    } catch (A) {
      h(A);
    }
  }, [a]), [x, w] = D.useState(!1), v = D.useCallback(() => {
    a({}), w(!0);
  }, [w]), E = D.useRef(null);
  if (D.useEffect(() => {
    x && E.current && E.current.select();
  }, [x]), !c)
    return i.createElement(vr.Button, { id: Ji(e), onClick: v }, "Set object");
  let b = i.createElement(pD, { ref: E, id: br(e), name: e, defaultValue: r === null ? "" : JSON.stringify(r, null, 2), onBlur: (k) => y(k.target.value), placeholder: "Edit JSON string...", autoFocus: x, valid: p ? "error" : null });
  return i.createElement(cD, null, ["Object", "Array"].includes(Tn(u)) && i.createElement(dD, { href: "#", onClick: (k) => {
    k.preventDefault(), m((A) => !A);
  } }, i.createElement(xt, { icon: d ? "eyeclose" : "eye" }), i.createElement("span", null, "RAW")), d ? b : i.createElement(Eh, { data: u, rootName: e, onFullyUpdate: a, getStyle: hD(l), cancelButtonElement: i.createElement(Vc, { type: "button" }, "Cancel"), editButtonElement: i.createElement(Vc, { type: "submit" }, "Save"), addButtonElement: i.createElement(Vc, { type: "submit", primary: !0 }, "Save"), plusMenuElement: i.createElement(lm, { icon: "add" }), minusMenuElement: i.createElement(lm, { icon: "subtract" }), inputElement: (k, A, O, C) => C ? i.createElement(im, { onFocus: gD, onBlur: mD }) : i.createElement(im, null), fallback: b }));
}, yD = P.input(({ theme: e, min: r, max: a, value: l }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${Qr(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${Qr(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Or(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: Qr(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${Qr(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${Qr(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Or(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Or(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Qn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${Qr(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), xh = P.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), vD = P(xh)(({ numberOFDecimalsPlaces: e, max: r }) => ({ width: `${e + r.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), bD = P.div({ display: "flex", alignItems: "center", width: "100%" });
function ED(e) {
  let r = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return r ? Math.max(0, (r[1] ? r[1].length : 0) - (r[2] ? +r[2] : 0)) : 0;
}
var xD = ({ name: e, value: r, onChange: a, min: l = 0, max: u = 100, step: c = 1, onBlur: d, onFocus: m }) => {
  let p = (x) => {
    a(ML(x.target.value));
  }, h = r !== void 0, y = D.useMemo(() => ED(c), [c]);
  return i.createElement(bD, null, i.createElement(xh, null, l), i.createElement(yD, { id: br(e), type: "range", onChange: p, name: e, value: r, min: l, max: u, step: c, onFocus: m, onBlur: d }), i.createElement(vD, { numberOFDecimalsPlaces: y, max: u }, h ? r.toFixed(y) : "--", " / ", u));
}, wD = P.label({ display: "flex" }), SD = P.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), AD = ({ name: e, value: r, onChange: a, onFocus: l, onBlur: u, maxLength: c }) => {
  let d = (x) => {
    a(x.target.value);
  }, [m, p] = D.useState(!1), h = D.useCallback(() => {
    a(""), p(!0);
  }, [p]);
  if (r === void 0)
    return i.createElement(vr.Button, { id: Ji(e), onClick: h }, "Set string");
  let y = typeof r == "string";
  return i.createElement(wD, null, i.createElement(vr.Textarea, { id: br(e), maxLength: c, onChange: d, size: "flex", placeholder: "Edit string...", autoFocus: m, valid: y ? null : "error", name: e, value: y ? r : "", onFocus: l, onBlur: u }), c && i.createElement(SD, { isMaxed: r?.length === c }, r?.length ?? 0, " / ", c));
}, CD = P(vr.Input)({ padding: 10 });
function kD(e) {
  e.forEach((r) => {
    r.startsWith("blob:") && URL.revokeObjectURL(r);
  });
}
var _D = ({ onChange: e, name: r, accept: a = "image/*", value: l }) => {
  let u = D.useRef(null);
  function c(d) {
    if (!d.target.files)
      return;
    let m = Array.from(d.target.files).map((p) => URL.createObjectURL(p));
    e(m), kD(l);
  }
  return D.useEffect(() => {
    l == null && u.current && (u.current.value = null);
  }, [l, r]), i.createElement(CD, { ref: u, id: br(r), type: "file", name: r, multiple: !0, onChange: c, accept: a, size: "flex" });
}, OD = D.lazy(() => import("./Color-6VNJS4EI-399ebff5.mjs")), TD = (e) => i.createElement(D.Suspense, { fallback: i.createElement("div", null) }, i.createElement(OD, { ...e })), FD = { array: um, object: um, boolean: kL, color: TD, date: LL, number: $L, check: Ma, "inline-check": Ma, radio: Ma, "inline-radio": Ma, select: Ma, "multi-select": Ma, range: xD, text: AD, file: _D }, sm = () => i.createElement(i.Fragment, null, "-"), RD = ({ row: e, arg: r, updateArgs: a, isHovered: l }) => {
  let { key: u, control: c } = e, [d, m] = D.useState(!1), [p, h] = D.useState({ value: r });
  D.useEffect(() => {
    d || h({ value: r });
  }, [d, r]);
  let y = D.useCallback((b) => (h({ value: b }), a({ [u]: b }), b), [a, u]), x = D.useCallback(() => m(!1), []), w = D.useCallback(() => m(!0), []);
  if (!c || c.disable)
    return l ? i.createElement(ta, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : i.createElement(sm, null);
  let v = { name: u, argType: e, value: p.value, onChange: y, onBlur: x, onFocus: w }, E = FD[c.type] || sm;
  return i.createElement(E, { ...v, ...c, controlType: c.type });
}, LD = P.span({ fontWeight: "bold" }), DD = P.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), MD = P.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...en({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), $D = P.div(({ theme: e, hasDescription: r }) => ({ color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.2, e.color.defaultText), marginTop: r ? 4 : 0 })), BD = P.div(({ theme: e, hasDescription: r }) => ({ color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.2, e.color.defaultText), marginTop: r ? 12 : 0, marginBottom: 12 })), ID = P.td(({ theme: e, expandable: r }) => ({ paddingLeft: r ? "40px !important" : "20px !important" })), Fi = (e) => {
  let [r, a] = D.useState(!1), { row: l, updateArgs: u, compact: c, expandable: d, initialExpandedArgs: m } = e, { name: p, description: h } = l, y = l.table || {}, x = y.type || l.type, w = y.defaultValue || l.defaultValue, v = l.type?.required, E = h != null && h !== "";
  return i.createElement("tr", { onMouseEnter: () => a(!0), onMouseLeave: () => a(!1) }, i.createElement(ID, { expandable: d }, i.createElement(LD, null, p), v ? i.createElement(DD, { title: "Required" }, "*") : null), c ? null : i.createElement("td", null, E && i.createElement(MD, null, i.createElement(qg, null, h)), y.jsDocTags != null ? i.createElement(i.Fragment, null, i.createElement(BD, { hasDescription: E }, i.createElement(zc, { value: x, initialExpandedArgs: m })), i.createElement(mL, { tags: y.jsDocTags })) : i.createElement($D, { hasDescription: E }, i.createElement(zc, { value: x, initialExpandedArgs: m }))), c ? null : i.createElement("td", null, i.createElement(zc, { value: w, initialExpandedArgs: m })), u ? i.createElement("td", null, i.createElement(RD, { ...e, isHovered: r })) : null);
}, PD = P(xt)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? je(0.25, e.color.defaultText) : je(0.3, e.color.defaultText), border: "none", display: "inline-block" })), ND = P.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), jD = P.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), HD = P.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), ZD = P.td(() => ({ position: "relative" })), zD = P.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${Qn(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), cm = P.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), Uc = ({ level: e = "section", label: r, children: a, initialExpanded: l = !0, colSpan: u = 3 }) => {
  let [c, d] = D.useState(l), m = e === "subsection" ? HD : jD, p = a?.length || 0, h = e === "subsection" ? `${p} item${p !== 1 ? "s" : ""}` : "", y = c ? "arrowdown" : "arrowright", x = `${c ? "Hide" : "Show"} ${e === "subsection" ? p : r} item${p !== 1 ? "s" : ""}`;
  return i.createElement(i.Fragment, null, i.createElement(zD, { title: x }, i.createElement(m, { colSpan: 1 }, i.createElement(cm, { onClick: (w) => d(!c), tabIndex: 0 }, x), i.createElement(ND, null, i.createElement(PD, { icon: y }), r)), i.createElement(ZD, { colSpan: u - 1 }, i.createElement(cm, { onClick: (w) => d(!c), tabIndex: -1, style: { outline: "none" } }, x), c ? null : h)), c ? a : null);
}, Ri = P.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), gt = P.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), Je = P.div(({ theme: e, width: r, height: a }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: r || "100%", height: a || 16, borderRadius: 3 })), ht = [2, 4, 2, 2], VD = () => i.createElement(i.Fragment, null, i.createElement(Ri, null, i.createElement(gt, { numColumn: ht[0] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[1] }, i.createElement(Je, { width: "30%" })), i.createElement(gt, { numColumn: ht[2] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[3] }, i.createElement(Je, { width: "60%" }))), i.createElement(Ri, null, i.createElement(gt, { numColumn: ht[0] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[1] }, i.createElement(Je, { width: "80%" }), i.createElement(Je, { width: "30%" })), i.createElement(gt, { numColumn: ht[2] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[3] }, i.createElement(Je, { width: "60%" }))), i.createElement(Ri, null, i.createElement(gt, { numColumn: ht[0] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[1] }, i.createElement(Je, { width: "80%" }), i.createElement(Je, { width: "30%" })), i.createElement(gt, { numColumn: ht[2] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[3] }, i.createElement(Je, { width: "60%" }))), i.createElement(Ri, null, i.createElement(gt, { numColumn: ht[0] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[1] }, i.createElement(Je, { width: "80%" }), i.createElement(Je, { width: "30%" })), i.createElement(gt, { numColumn: ht[2] }, i.createElement(Je, { width: "60%" })), i.createElement(gt, { numColumn: ht[3] }, i.createElement(Je, { width: "60%" })))), UD = P.div(({ inAddonPanel: e, theme: r }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${r.appBorderColor}`, borderRadius: e ? 0 : r.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: r.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), qD = P.div({ display: "flex", flexDirection: "column", gap: 4, maxWidth: 415 }), WD = P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textColor })), GD = P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s2 - 1, textAlign: "center", color: e.textMutedColor })), KD = P.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), YD = P.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), XD = ({ inAddonPanel: e }) => {
  let [r, a] = D.useState(!0);
  return D.useEffect(() => {
    let l = setTimeout(() => {
      a(!1);
    }, 100);
    return () => clearTimeout(l);
  }, []), r ? null : i.createElement(UD, { inAddonPanel: e }, i.createElement(qD, null, i.createElement(WD, null, e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated"), i.createElement(GD, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.")), i.createElement(KD, null, e && i.createElement(i.Fragment, null, i.createElement(ta, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, i.createElement(xt, { icon: "video" }), " Watch 5m video"), i.createElement(YD, null), i.createElement(ta, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Read docs")), !e && i.createElement(ta, { href: "https://storybook.js.org/docs/react/essentials/controls", target: "_blank", withArrow: !0 }, "Learn how to set that up")));
}, QD = P.table(({ theme: e, compact: r, inAddonPanel: a }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: a ? 0 : 25, marginBottom: a ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...r ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...r ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...r ? null : { width: "25%" } }, th: { color: e.base === "light" ? je(0.25, e.color.defaultText) : je(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: a ? 0 : 1, marginRight: a ? 0 : 1, tbody: { ...a ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...a ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), JD = P(na)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), eM = P.span({ display: "flex", justifyContent: "space-between" }), tM = { alpha: (e, r) => e.name.localeCompare(r.name), requiredFirst: (e, r) => +!!r.type?.required - +!!e.type?.required || e.name.localeCompare(r.name), none: void 0 }, rM = (e, r) => {
  let a = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!e)
    return a;
  Object.entries(e).forEach(([c, d]) => {
    let { category: m, subcategory: p } = d?.table || {};
    if (m) {
      let h = a.sections[m] || { ungrouped: [], subsections: {} };
      if (!p)
        h.ungrouped.push({ key: c, ...d });
      else {
        let y = h.subsections[p] || [];
        y.push({ key: c, ...d }), h.subsections[p] = y;
      }
      a.sections[m] = h;
    } else if (p) {
      let h = a.ungroupedSubsections[p] || [];
      h.push({ key: c, ...d }), a.ungroupedSubsections[p] = h;
    } else
      a.ungrouped.push({ key: c, ...d });
  });
  let l = tM[r], u = (c) => l ? Object.keys(c).reduce((d, m) => ({ ...d, [m]: c[m].sort(l) }), {}) : c;
  return { ungrouped: a.ungrouped.sort(l), ungroupedSubsections: u(a.ungroupedSubsections), sections: Object.keys(a.sections).reduce((c, d) => ({ ...c, [d]: { ungrouped: a.sections[d].ungrouped.sort(l), subsections: u(a.sections[d].subsections) } }), {}) };
}, nM = (e, r, a) => {
  try {
    return jv(e, r, a);
  } catch (l) {
    return $R.warn(l.message), !1;
  }
}, aM = (e) => {
  let { updateArgs: r, resetArgs: a, compact: l, inAddonPanel: u, initialExpandedArgs: c, sort: d = "none", isLoading: m } = e;
  if ("error" in e) {
    let { error: O } = e;
    return i.createElement(ih, null, O, " ", i.createElement(ta, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  }
  if (m)
    return i.createElement(VD, null);
  let { rows: p, args: h, globals: y } = "rows" in e && e, x = rM(jA(p, (O) => !O?.table?.disable && nM(O, h || {}, y || {})), d), w = x.ungrouped.length === 0, v = Object.entries(x.sections).length === 0, E = Object.entries(x.ungroupedSubsections).length === 0;
  if (w && v && E)
    return i.createElement(XD, { inAddonPanel: u });
  let b = 1;
  r && (b += 1), l || (b += 2);
  let k = Object.keys(x.sections).length > 0, A = { updateArgs: r, compact: l, inAddonPanel: u, initialExpandedArgs: c };
  return i.createElement(ad, null, i.createElement(QD, { compact: l, inAddonPanel: u, className: "docblock-argstable sb-unstyled" }, i.createElement("thead", { className: "docblock-argstable-head" }, i.createElement("tr", null, i.createElement("th", null, i.createElement("span", null, "Name")), l ? null : i.createElement("th", null, i.createElement("span", null, "Description")), l ? null : i.createElement("th", null, i.createElement("span", null, "Default")), r ? i.createElement("th", null, i.createElement(eM, null, "Control", " ", !m && a && i.createElement(JD, { onClick: () => a(), title: "Reset controls" }, i.createElement(xt, { icon: "undo", "aria-hidden": !0 })))) : null)), i.createElement("tbody", { className: "docblock-argstable-body" }, x.ungrouped.map((O) => i.createElement(Fi, { key: O.key, row: O, arg: h && h[O.key], ...A })), Object.entries(x.ungroupedSubsections).map(([O, C]) => i.createElement(Uc, { key: O, label: O, level: "subsection", colSpan: b }, C.map((_) => i.createElement(Fi, { key: _.key, row: _, arg: h && h[_.key], expandable: k, ...A })))), Object.entries(x.sections).map(([O, C]) => i.createElement(Uc, { key: O, label: O, level: "section", colSpan: b }, C.ungrouped.map((_) => i.createElement(Fi, { key: _.key, row: _, arg: h && h[_.key], ...A })), Object.entries(C.subsections).map(([_, T]) => i.createElement(Uc, { key: _, label: _, level: "subsection", colSpan: b }, T.map((R) => i.createElement(Fi, { key: R.key, row: R, arg: h && h[R.key], expandable: k, ...A })))))))));
};
P.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
P.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
P.div(He, ({ theme: e }) => ({ ...Cu(e), margin: "25px 0 40px", padding: "30px 20px" }));
P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
P.div(({ theme: e }) => ({ color: e.base === "light" ? je(0.2, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
P.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
P.div({ display: "flex", flexDirection: "row" });
P.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
P.div(({ theme: e }) => ({ ...Cu(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
P.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
P.div({ flex: 1, display: "flex", flexDirection: "row" });
P.div({ display: "flex", alignItems: "flex-start" });
P.div({ flex: "0 0 30%" });
P.div({ flex: 1 });
P.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
P.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
P.div(({ theme: e }) => ({ ...Cu(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
P.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
P.div({ display: "flex", flexFlow: "row wrap" });
var oM = (e) => `anchor--${e}`, wh = ({ storyId: e, children: r }) => i.createElement("div", { id: oM(e), className: "sb-anchor" }, r);
ar && ar.__DOCS_CONTEXT__ === void 0 && (ar.__DOCS_CONTEXT__ = D.createContext(null), ar.__DOCS_CONTEXT__.displayName = "DocsContext");
var Bt = ar ? ar.__DOCS_CONTEXT__ : D.createContext(null), _u = (e, r) => D.useContext(Bt).resolveOf(e, r);
function lM(e, r = "start") {
  e.scrollIntoView({ behavior: "smooth", block: r, inline: "nearest" });
}
function iM(e, r) {
  let a = Rd([e], r);
  return a && a[0];
}
function Rd(e, r) {
  let [a, l] = D.useState({});
  return D.useEffect(() => {
    Promise.all(e.map(async (u) => {
      let c = await r.loadStory(u);
      l((d) => d[u] === c ? d : { ...d, [u]: c });
    }));
  }), e.map((u) => {
    if (a[u])
      return a[u];
    try {
      return r.storyById(u);
    } catch {
      return null;
    }
  });
}
function Sh(e) {
  return OR(e);
}
var Ah = D.createContext({ sources: {} }), Ch = "--unknown--", uM = ({ children: e, channel: r }) => {
  let [a, l] = D.useState({});
  return D.useEffect(() => {
    let u = (c, d = null, m = !1) => {
      let { id: p, args: h = void 0, source: y, format: x } = typeof c == "string" ? { id: c, source: d, format: m } : c, w = h ? Sh(h) : Ch;
      l((v) => ({ ...v, [p]: { ...v[p], [w]: { code: y, format: x } } }));
    };
    return r.on(mf, u), () => r.off(mf, u);
  }, []), i.createElement(Ah.Provider, { value: { sources: a } }, e);
}, sM = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(sM || {}), cM = (e) => {
  let r = e.map((a) => a.parameters.docs?.source?.state).filter(Boolean);
  return r.length === 0 ? "closed" : r[0];
}, dM = (e, r, a) => {
  let { sources: l } = a, u = l?.[e];
  return u?.[Sh(r)] || u?.[Ch] || { code: "" };
}, pM = ({ snippet: e, storyContext: r, typeFromProps: a, transformFromProps: l }) => {
  let { __isArgsStory: u } = r.parameters, c = r.parameters.docs?.source || {}, d = a || c.type || dc.AUTO;
  if (c.code !== void 0)
    return c.code;
  let m = d === dc.DYNAMIC || d === dc.AUTO && e && u ? e : c.originalSource || "";
  return c.transformSource && ut(Lt`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), r.parameters.docs?.transformSource && ut(Lt`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), r.parameters.jsx?.transformSource && ut(Lt`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (l ?? c.transform ?? c.transformSource ?? r.parameters.docs?.transformSource ?? r.parameters.jsx?.transformSource)?.(m, r) || m;
}, kh = (e, r, a) => {
  let l = e.ids || (e.id ? [e.id] : []), u = Rd(l, r), c = u, { of: d } = e;
  if ("of" in e && d === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (d)
    c = [r.resolveOf(d, ["story"]).story];
  else if (c.length === 0)
    try {
      c = [r.storyById()];
    } catch {
    }
  if (!u.every(Boolean))
    return { error: "Oh no! The source is not available.", state: "none" };
  let m = c[0]?.parameters?.docs?.source || {}, { code: p } = e, h = e.format ?? m.format, y = e.language ?? m.language ?? "jsx", x = e.dark ?? m.dark ?? !1;
  p || (p = c.map((v, E) => {
    if (!v)
      return "";
    let b = r.getStoryContext(v), k = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs, A = dM(v.id, k, a);
    return E === 0 && (h = A.format ?? v.parameters.docs?.source?.format ?? !1), pM({ snippet: A.code, storyContext: { ...b, args: k }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let w = cM(c);
  return p ? { code: p, format: h, language: y, dark: x, state: w } : { error: "Oh no! The source is not available.", state: w };
}, _h = (e, r) => {
  let { id: a, of: l, meta: u, story: c } = e;
  if ("of" in e && l === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (a)
    return ut(Lt`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), a;
  let { name: d } = e;
  return d ? (ut(Lt`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r.storyIdByName(d)) : (c && ut(Lt`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), u && r.referenceMeta(u, !1), r.resolveOf(l || c || "story", ["story"]).story.id);
}, fM = (e, r, a) => {
  let { parameters: l = {} } = r || {}, { docs: u = {} } = l, c = u.story || {};
  if (u.disable)
    return null;
  let { inlineStories: d, iframeHeight: m } = u;
  typeof d < "u" && ut(Lt`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let p = e.inline ?? c.inline ?? d ?? !1;
  if (typeof m < "u" && ut(Lt`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), p) {
    let y = e.height ?? c.height, x = e.autoplay ?? c.autoplay ?? !1;
    return { story: r, inline: !0, height: y, autoplay: x, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: a.renderStoryToElement };
  }
  let h = e.height ?? c.height ?? c.iframeHeight ?? m ?? "100px";
  return { story: r, inline: !1, height: h, primary: !!e.__primary };
}, mM = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let r = D.useContext(Bt), a = _h(e, r), l = iM(a, r);
  if (!l)
    return i.createElement(Od, null);
  let u = fM(e, l, r);
  return u ? i.createElement(aL, { ...u }) : null;
}, gM = ({ withSource: e, mdxSource: r, children: a, layout: l, ...u }, c, d) => {
  let m = D.Children.toArray(a).filter((w) => w.props && (w.props.id || w.props.name || w.props.of)).map((w) => _h(w.props, c)), p = Rd(m, c), h = p.some((w) => !w), y = kh({ ...r ? { code: decodeURI(r) } : { ids: m }, ...u.of && { of: u.of } }, c, d);
  if (e === "none")
    return { isLoading: h, previewProps: u };
  let x = l;
  return D.Children.forEach(a, (w) => {
    x || (x = w?.props?.parameters?.layout);
  }), p.forEach((w) => {
    x || !w || (x = w?.parameters.layout ?? w.parameters.docs?.canvas?.layout);
  }), { isLoading: h, previewProps: { ...u, layout: x ?? "padded", withSource: y, isExpanded: (e || y.state) === "open" } };
}, hM = (e) => {
  let r = D.useContext(Bt), a = D.useContext(Ah), { children: l, of: u, source: c } = e;
  if ("of" in e && u === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: d, previewProps: m } = gM(e, r, a), p, h, y;
  try {
    ({ story: p } = _u(u || "story", ["story"]));
  } catch (k) {
    l || (y = k);
  }
  try {
    h = kh({ ...c, ...u && { of: u } }, r, a);
  } catch (k) {
    l || (y = k);
  }
  if (y)
    throw y;
  if (e.withSource && ut(Lt`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && ut(Lt`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && ut(Lt`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), l)
    return ut(Lt`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), d ? i.createElement(pL, null) : i.createElement(y0, { ...m }, l);
  let x = e.layout ?? p.parameters.layout ?? p.parameters.docs?.canvas?.layout ?? "padded", w = e.withToolbar ?? p.parameters.docs?.canvas?.withToolbar ?? !1, v = e.additionalActions ?? p.parameters.docs?.canvas?.additionalActions, E = e.sourceState ?? p.parameters.docs?.canvas?.sourceState ?? "hidden", b = e.className ?? p.parameters.docs?.canvas?.className;
  return i.createElement(y0, { withSource: E === "none" ? void 0 : h, isExpanded: E === "shown", withToolbar: w, additionalActions: v, className: b, layout: x }, i.createElement(mM, { of: u || p.moduleExport, meta: e.meta, ...e.story }));
}, yM = (e, r) => {
  let a = r.getStoryContext(e), [l, u] = D.useState(a.globals);
  return D.useEffect(() => {
    let c = (d) => {
      u(d.globals);
    };
    return r.channel.on(Q2, c), () => r.channel.off(Q2, c);
  }, [r.channel]), [l];
}, vM = (e, r) => {
  let a = bM(e, r);
  if (!a)
    throw new Error("No result when story was defined");
  return a;
}, bM = (e, r) => {
  let a = e ? r.getStoryContext(e) : { args: {} }, { id: l } = e || { id: "none" }, [u, c] = D.useState(a.args);
  D.useEffect(() => {
    let p = (h) => {
      h.storyId === l && c(h.args);
    };
    return r.channel.on(X2, p), () => r.channel.off(X2, p);
  }, [l, r.channel]);
  let d = D.useCallback((p) => r.channel.emit(IR, { storyId: l, updatedArgs: p }), [l, r.channel]), m = D.useCallback((p) => r.channel.emit(PR, { storyId: l, argNames: p }), [l, r.channel]);
  return e && [u, d, m];
}, EM = (e) => {
  let { of: r } = e;
  if ("of" in e && r === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let a = D.useContext(Bt), { story: l } = a.resolveOf(r || "story", ["story"]), { parameters: u, argTypes: c } = l, d = u.docs?.controls || {}, m = e.include ?? d.include, p = e.exclude ?? d.exclude, h = e.sort ?? d.sort, [y, x, w] = vM(l, a), [v] = yM(l, a), E = BR(c, m, p);
  return i.createElement(aM, { rows: E, args: y, globals: v, updateArgs: x, resetArgs: w, sort: h });
}, { document: Oh } = ar, xM = ({ className: e, children: r, ...a }) => {
  if (typeof e != "string" && (typeof r != "string" || !r.match(/[\n\r]/g)))
    return i.createElement(td, null, r);
  let l = e && e.split("-");
  return i.createElement(kd, { language: l && l[1] || "plaintext", format: !1, code: r, ...a });
};
function Ld(e, r) {
  e.channel.emit(NR, r);
}
var x0 = ug.a, wM = ({ hash: e, children: r }) => {
  let a = D.useContext(Bt);
  return i.createElement(x0, { href: e, target: "_self", onClick: (l) => {
    let u = e.substring(1);
    Oh.getElementById(u) && Ld(a, e);
  } }, r);
}, SM = (e) => {
  let { href: r, target: a, children: l, ...u } = e, c = D.useContext(Bt);
  if (r) {
    if (r.startsWith("#"))
      return i.createElement(wM, { hash: r }, l);
    if (a !== "_blank" && !r.startsWith("https://"))
      return i.createElement(x0, { href: r, onClick: (d) => {
        d.button === 0 && !d.altKey && !d.ctrlKey && !d.metaKey && !d.shiftKey && (d.preventDefault(), Ld(c, d.currentTarget.getAttribute("href")));
      }, target: a, ...u }, l);
  }
  return i.createElement(x0, { ...e });
}, Th = ["h1", "h2", "h3", "h4", "h5", "h6"], AM = Th.reduce((e, r) => ({ ...e, [r]: P(r)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), CM = P.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), kM = ({ as: e, id: r, children: a, ...l }) => {
  let u = D.useContext(Bt), c = AM[e], d = `#${r}`;
  return i.createElement(c, { id: r, ...l }, i.createElement(CM, { "aria-hidden": "true", href: d, tabIndex: -1, target: "_self", onClick: (m) => {
    Oh.getElementById(r) && Ld(u, d);
  } }, i.createElement(xt, { icon: "link" })), a);
}, Dd = (e) => {
  let { as: r, id: a, children: l, ...u } = e;
  if (a)
    return i.createElement(kM, { as: r, id: a, ...u }, l);
  let c = r, { as: d, ...m } = e;
  return i.createElement(c, { ...Ie(m, r) });
}, _M = Th.reduce((e, r) => ({ ...e, [r]: (a) => i.createElement(Dd, { as: r, ...a }) }), {}), OM = (e) => {
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(Lt`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return i.createElement(qg, { ...e, options: { forceBlock: !0, overrides: { code: xM, a: SM, ..._M, ...e?.options?.overrides }, ...e?.options } });
}, TM = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(TM || {}), zi = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", FM = (e) => e && (typeof e == "string" ? e : qc(e.markdown) || qc(e.text)), RM = (e) => e && (typeof e == "string" ? e : qc(e.text)), LM = (e) => null, DM = (e) => {
  switch (e.type) {
    case "story":
      return e.story.parameters.docs?.description?.story || null;
    case "meta": {
      let { parameters: r, component: a } = e.preparedMeta;
      return r.docs?.description?.component || r.docs?.extractComponentDescription?.(a, { component: a, parameters: r }) || null;
    }
    case "component": {
      let { component: r, projectAnnotations: { parameters: a } } = e;
      return a.docs?.extractComponentDescription?.(r, { component: r, parameters: a }) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
  }
}, MM = ({ type: e, markdown: r, children: a }, { storyById: l }) => {
  let { component: u, parameters: c } = l();
  if (a || r)
    return a || r;
  let { notes: d, info: m, docs: p } = c;
  (d || m) && ut(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${zi}`);
  let { extractComponentDescription: h = LM, description: y } = p || {}, x = y?.component;
  if (x)
    return x;
  switch (e) {
    case "info":
      return RM(m);
    case "notes":
      return FM(d);
    case "docgen":
    case "auto":
    default:
      return h(u, { component: u, ...c });
  }
}, w0 = (e) => {
  let { of: r, type: a, markdown: l, children: u } = e;
  if ("of" in e && r === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let c = D.useContext(Bt), d = _u(r || "meta"), m;
  return a || l || u ? m = MM(e, c) : m = DM(d), a && ut(`Manually specifying description type is deprecated. See ${zi}`), l && ut(`The 'markdown' prop on the Description block is deprecated. See ${zi}`), u && ut(`The 'children' prop on the Description block is deprecated. See ${zi}`), m ? i.createElement(OM, null, m) : null;
}, $M = P.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), BM = P.div(({ theme: e }) => ({ position: "fixed", top: 0, width: "10rem", paddingTop: "4rem", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), IM = P.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), PM = ({ title: e }) => e === null ? null : typeof e == "string" ? i.createElement(IM, null, e) : e, NM = ({ title: e, disable: r, headingSelector: a, contentsSelector: l, ignoreSelector: u, unsafeTocbotOptions: c }) => (D.useEffect(() => {
  let d = { tocSelector: ".toc-wrapper", contentSelector: l ?? ".sbdocs-content", headingSelector: a ?? "h3", ignoreSelector: u ?? ".skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...c }, m = setTimeout(() => Y2.init(d), 100);
  return () => {
    clearTimeout(m), Y2.destroy();
  };
}, [r]), i.createElement(i.Fragment, null, i.createElement($M, null, r ? null : i.createElement(BM, null, i.createElement(PM, { title: e || null }), i.createElement("div", { className: "toc-wrapper" }))))), { document: jM, window: HM } = ar, ZM = ({ context: e, theme: r, children: a }) => {
  let l;
  try {
    l = e.resolveOf("meta", ["meta"]).preparedMeta.parameters?.docs?.toc;
  } catch {
    l = e?.projectAnnotations?.parameters?.docs?.toc;
  }
  return D.useEffect(() => {
    let u;
    try {
      if (u = new URL(HM.parent.location.toString()), u.hash) {
        let c = jM.getElementById(u.hash.substring(1));
        c && setTimeout(() => {
          lM(c);
        }, 200);
      }
    } catch {
    }
  }), i.createElement(Bt.Provider, { value: e }, i.createElement(uM, { channel: e.channel }, i.createElement(Hm, { theme: mb(r) }, i.createElement(GR, { toc: l ? i.createElement(NM, { className: "sbdocs sbdocs-toc--custom", ...l }) : null }, a))));
}, zM = /\s*\/\s*/, VM = (e) => {
  let r = e.trim().split(zM);
  return r && r[r.length - 1] || e;
}, UM = ({ children: e }) => {
  let r = D.useContext(Bt), a = e || VM(r.storyById().title);
  return a ? i.createElement(VR, { className: "sbdocs-title sb-unstyled" }, a) : null;
}, qM = ({ children: e }) => {
  let r = D.useContext(Bt), { parameters: a } = r.storyById(), l = e || a?.componentSubtitle;
  return l ? i.createElement(UR, { className: "sbdocs-subtitle sb-unstyled" }, l) : null;
}, WM = ({ children: e, disableAnchor: r }) => {
  if (r || typeof e != "string")
    return i.createElement(nd, null, e);
  let a = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return i.createElement(Dd, { as: "h3", id: a }, e);
}, Fh = ({ of: e, expanded: r = !0, withToolbar: a = !1, __forceInitialArgs: l = !1, __primary: u = !1 }) => {
  let { story: c } = _u(e || "story", ["story"]), d = c.parameters.docs?.canvas?.withToolbar ?? a;
  return i.createElement(wh, { storyId: c.id }, r && i.createElement(i.Fragment, null, i.createElement(WM, null, c.name), i.createElement(w0, { of: e })), i.createElement(hM, { of: e, withToolbar: d, story: { __forceInitialArgs: l, __primary: u }, source: { __forceInitialArgs: l } }));
}, GM = ({ name: e }) => {
  let r = D.useContext(Bt);
  e && ut(Lt`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  let a = e && r.storyIdByName(e), l = r.storyById(a);
  return l ? i.createElement(Fh, { of: l.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, KM = ({ children: e, disableAnchor: r, ...a }) => {
  if (r || typeof e != "string")
    return i.createElement(rd, null, e);
  let l = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return i.createElement(Dd, { as: "h2", id: l, ...a }, e);
}, YM = P(KM)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), Rh = ({ title: e, includePrimary: r = !0 }) => {
  let { componentStories: a } = D.useContext(Bt), l = a().filter((u) => !u.parameters?.docs?.disable);
  return r || (l = l.slice(1)), !l || l.length === 0 ? null : i.createElement(i.Fragment, null, i.createElement(YM, null, e), l.map((u) => u && i.createElement(Fh, { key: u.id, of: u.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
};
Rh.defaultProps = { title: "Stories" };
var XM = () => {
  let e = _u("meta", ["meta"]), { stories: r } = e.csfFile, a = Object.keys(r).length === 1;
  return i.createElement(i.Fragment, null, i.createElement(UM, null), i.createElement(qM, null), i.createElement(w0, { of: "meta" }), a ? i.createElement(w0, { of: "story" }) : null, i.createElement(GM, null), i.createElement(EM, null), a ? null : i.createElement(Rh, null));
};
function o$({ context: e, docsParameter: r }) {
  let a = r.container || ZM, l = r.page || XM;
  return i.createElement(a, { context: e, theme: r.theme }, i.createElement(l, null));
}
var l$ = ({ of: e }) => {
  let r = D.useContext(Bt);
  e && r.referenceMeta(e, !0);
  try {
    let a = r.storyById();
    return i.createElement(wh, { storyId: a.id });
  } catch {
    return null;
  }
};
export {
  SM as A,
  hM as C,
  w0 as D,
  vr as F,
  P4 as G,
  _M as H,
  xt as I,
  l$ as M,
  V0 as S,
  UM as T,
  R6 as W,
  Kt as _,
  S5 as a,
  i as b,
  i5 as c,
  be as d,
  qM as e,
  mM as f,
  EM as g,
  ZM as h,
  Qx as i,
  t8 as j,
  br as k,
  d5 as l,
  la as m,
  P as n,
  xM as o,
  o$ as p,
  D as r,
  t$ as s,
  Xc as t
};
//# sourceMappingURL=index-6d191841.mjs.map
