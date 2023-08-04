import { s as gt } from "./index-51e7740f.mjs";
import { g as ta, c as Tn, d as c5, f as w0, h as d5, j as wv, k as p5, l as S0, m as Sv, n as Av, o as Ki, p as A0, i as ol, b as f5, q as Cv, r as kv, s as _v, t as Ov, u as Tv, v as Fv, w as m5, x as Rv, y as Lv, _ as Dv, z as Mv, A as $v, B as g5, C as h5, D as ic, a as ff, S as uc, E as Vc } from "./index-36ec6e8e.mjs";
import { L as y5, v as Bv } from "./index-d79fba58.mjs";
import { d as Tt } from "./index-398c73a4.mjs";
function Iv(e, r) {
  for (var a = 0; a < r.length; a++) {
    const l = r[a];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const i in l)
        if (i !== "default" && !(i in e)) {
          const c = Object.getOwnPropertyDescriptor(l, i);
          c && Object.defineProperty(e, i, c.get ? c : {
            enumerable: !0,
            get: () => l[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var v5 = { exports: {} }, we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function Pv() {
  if (mf)
    return we;
  mf = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.iterator;
  function x(F) {
    return F === null || typeof F != "object" ? null : (F = w && F[w] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var v = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, b = {};
  function C(F, U, ne) {
    this.props = F, this.context = U, this.refs = b, this.updater = ne || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(F, U) {
    if (typeof F != "object" && typeof F != "function" && F != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, U, "setState");
  }, C.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function A() {
  }
  A.prototype = C.prototype;
  function T(F, U, ne) {
    this.props = F, this.context = U, this.refs = b, this.updater = ne || v;
  }
  var k = T.prototype = new A();
  k.constructor = T, E(k, C.prototype), k.isPureReactComponent = !0;
  var _ = Array.isArray, O = Object.prototype.hasOwnProperty, L = { current: null }, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(F, U, ne) {
    var ce, ue = {}, te = null, le = null;
    if (U != null)
      for (ce in U.ref !== void 0 && (le = U.ref), U.key !== void 0 && (te = "" + U.key), U)
        O.call(U, ce) && !$.hasOwnProperty(ce) && (ue[ce] = U[ce]);
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
    return { $$typeof: e, type: F, key: te, ref: le, props: ue, _owner: L.current };
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
    else if (ve = x(F), typeof ve == "function")
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
  var ae = { current: null }, q = { transition: null }, W = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: q, ReactCurrentOwner: L };
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
  } }, we.Component = C, we.Fragment = a, we.Profiler = i, we.PureComponent = T, we.StrictMode = l, we.Suspense = p, we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, we.cloneElement = function(F, U, ne) {
    if (F == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var ce = E({}, F.props), ue = F.key, te = F.ref, le = F._owner;
    if (U != null) {
      if (U.ref !== void 0 && (te = U.ref, le = L.current), U.key !== void 0 && (ue = "" + U.key), F.type && F.type.defaultProps)
        var fe = F.type.defaultProps;
      for (ve in U)
        O.call(U, ve) && !$.hasOwnProperty(ve) && (ce[ve] = U[ve] === void 0 && fe !== void 0 ? fe[ve] : U[ve]);
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
v5.exports = Pv();
var D = v5.exports;
const u = /* @__PURE__ */ ta(D), gf = /* @__PURE__ */ Iv({
  __proto__: null,
  default: u
}, [D]);
var hr = (e) => `control-${e.replace(/\s+/g, "-")}`, Yi = (e) => `set-${e.replace(/\s+/g, "-")}`;
const { logger: Nv } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var jv = Object.create, b5 = Object.defineProperty, Hv = Object.getOwnPropertyDescriptor, E5 = Object.getOwnPropertyNames, Zv = Object.getPrototypeOf, zv = Object.prototype.hasOwnProperty, C0 = (e, r) => function() {
  return r || (0, e[E5(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, Vv = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let i of E5(r))
      !zv.call(e, i) && i !== a && b5(e, i, { get: () => r[i], enumerable: !(l = Hv(r, i)) || l.enumerable });
  return e;
}, x5 = (e, r, a) => (a = e != null ? jv(Zv(e)) : {}, Vv(r || !e || !e.__esModule ? b5(a, "default", { value: e, enumerable: !0 }) : a, e));
function _n() {
  return _n = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, _n.apply(this, arguments);
}
function Uv(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zo(e, r) {
  return zo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, l) {
    return a.__proto__ = l, a;
  }, zo(e, r);
}
function qv(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, zo(e, r);
}
function Uc(e) {
  return Uc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Uc(e);
}
function Wv(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Gv() {
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
function Oi(e, r, a) {
  return Gv() ? Oi = Reflect.construct.bind() : Oi = function(l, i, c) {
    var d = [null];
    d.push.apply(d, i);
    var m = Function.bind.apply(l, d), p = new m();
    return c && zo(p, c.prototype), p;
  }, Oi.apply(null, arguments);
}
function qc(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return qc = function(a) {
    if (a === null || !Wv(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(a))
        return r.get(a);
      r.set(a, l);
    }
    function l() {
      return Oi(a, arguments, Uc(this).constructor);
    }
    return l.prototype = Object.create(a.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), zo(l, a);
  }, qc(e);
}
var Kv = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

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
function Yv() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  var l = r[0], i = [], c;
  for (c = 1; c < r.length; c += 1)
    i.push(r[c]);
  return i.forEach(function(d) {
    l = l.replace(/%[a-z]/, d);
  }), l;
}
var Tr = function(e) {
  qv(r, e);
  function r(a) {
    for (var l, i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
      c[d - 1] = arguments[d];
    return l = e.call(this, Yv.apply(void 0, [Kv[a]].concat(c))) || this, Uv(l);
  }
  return r;
}(qc(Error));
function sc(e) {
  return Math.round(e * 255);
}
function Xv(e, r, a) {
  return sc(e) + "," + sc(r) + "," + sc(a);
}
function Vo(e, r, a, l) {
  if (l === void 0 && (l = Xv), r === 0)
    return l(a, a, a);
  var i = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(i % 2 - 1)), m = 0, p = 0, h = 0;
  i >= 0 && i < 1 ? (m = c, p = d) : i >= 1 && i < 2 ? (m = d, p = c) : i >= 2 && i < 3 ? (p = c, h = d) : i >= 3 && i < 4 ? (p = d, h = c) : i >= 4 && i < 5 ? (m = d, h = c) : i >= 5 && i < 6 && (m = c, h = d);
  var y = a - c / 2, w = m + y, x = p + y, v = h + y;
  return l(w, x, v);
}
var hf = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function Qv(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return hf[r] ? "#" + hf[r] : e;
}
var Jv = /^#[a-fA-F0-9]{6}$/, e3 = /^#[a-fA-F0-9]{8}$/, t3 = /^#[a-fA-F0-9]{3}$/, r3 = /^#[a-fA-F0-9]{4}$/, cc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, n3 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, a3 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, o3 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Xi(e) {
  if (typeof e != "string")
    throw new Tr(3);
  var r = Qv(e);
  if (r.match(Jv))
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16) };
  if (r.match(e3)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16), alpha: a };
  }
  if (r.match(t3))
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16) };
  if (r.match(r3)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16), alpha: l };
  }
  var i = cc.exec(r);
  if (i)
    return { red: parseInt("" + i[1], 10), green: parseInt("" + i[2], 10), blue: parseInt("" + i[3], 10) };
  var c = n3.exec(r.substring(0, 50));
  if (c)
    return { red: parseInt("" + c[1], 10), green: parseInt("" + c[2], 10), blue: parseInt("" + c[3], 10), alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4]) };
  var d = a3.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + Vo(m, p, h) + ")", w = cc.exec(y);
    if (!w)
      throw new Tr(4, r, y);
    return { red: parseInt("" + w[1], 10), green: parseInt("" + w[2], 10), blue: parseInt("" + w[3], 10) };
  }
  var x = o3.exec(r.substring(0, 50));
  if (x) {
    var v = parseInt("" + x[1], 10), E = parseInt("" + x[2], 10) / 100, b = parseInt("" + x[3], 10) / 100, C = "rgb(" + Vo(v, E, b) + ")", A = cc.exec(C);
    if (!A)
      throw new Tr(4, r, C);
    return { red: parseInt("" + A[1], 10), green: parseInt("" + A[2], 10), blue: parseInt("" + A[3], 10), alpha: parseFloat("" + x[4]) > 1 ? parseFloat("" + x[4]) / 100 : parseFloat("" + x[4]) };
  }
  throw new Tr(5);
}
function l3(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, i = Math.max(r, a, l), c = Math.min(r, a, l), d = (i + c) / 2;
  if (i === c)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: d, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: d };
  var m, p = i - c, h = d > 0.5 ? p / (2 - i - c) : p / (i + c);
  switch (i) {
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
function w5(e) {
  return l3(Xi(e));
}
var i3 = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Wc = i3;
function qn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function dc(e) {
  return qn(Math.round(e * 255));
}
function u3(e, r, a) {
  return Wc("#" + dc(e) + dc(r) + dc(a));
}
function ji(e, r, a) {
  return Vo(e, r, a, u3);
}
function s3(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return ji(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return ji(e.hue, e.saturation, e.lightness);
  throw new Tr(1);
}
function c3(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? ji(e, r, a) : "rgba(" + Vo(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? ji(e.hue, e.saturation, e.lightness) : "rgba(" + Vo(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Tr(2);
}
function Gc(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Wc("#" + qn(e) + qn(r) + qn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Wc("#" + qn(e.red) + qn(e.green) + qn(e.blue));
  throw new Tr(6);
}
function Uo(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var i = Xi(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? Gc(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? Gc(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Tr(7);
}
var d3 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, p3 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, f3 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, m3 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function S5(e) {
  if (typeof e != "object")
    throw new Tr(8);
  if (p3(e))
    return Uo(e);
  if (d3(e))
    return Gc(e);
  if (m3(e))
    return c3(e);
  if (f3(e))
    return s3(e);
  throw new Tr(8);
}
function A5(e, r, a) {
  return function() {
    var l = a.concat(Array.prototype.slice.call(arguments));
    return l.length >= r ? e.apply(this, l) : A5(e, r, l);
  };
}
function Qi(e) {
  return A5(e, e.length, []);
}
function Ji(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function g3(e, r) {
  if (r === "transparent")
    return r;
  var a = w5(r);
  return S5(_n({}, a, { lightness: Ji(0, 1, a.lightness - parseFloat(e)) }));
}
var h3 = Qi(g3), y3 = h3;
function v3(e, r) {
  if (r === "transparent")
    return r;
  var a = w5(r);
  return S5(_n({}, a, { lightness: Ji(0, 1, a.lightness + parseFloat(e)) }));
}
var b3 = Qi(v3), E3 = b3;
function x3(e, r) {
  if (r === "transparent")
    return r;
  var a = Xi(r), l = typeof a.alpha == "number" ? a.alpha : 1, i = _n({}, a, { alpha: Ji(0, 1, (l * 100 + parseFloat(e) * 100) / 100) });
  return Uo(i);
}
var w3 = Qi(x3), S3 = w3;
function A3(e, r) {
  if (r === "transparent")
    return r;
  var a = Xi(r), l = typeof a.alpha == "number" ? a.alpha : 1, i = _n({}, a, { alpha: Ji(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return Uo(i);
}
var C3 = Qi(A3), k3 = C3, xe = { primary: "#FF4785", secondary: "#029CFD", tertiary: "#FAFBFC", ancillary: "#22a699", orange: "#FC521F", gold: "#FFAE00", green: "#66BF3C", seafoam: "#37D5D3", purple: "#6F2CAC", ultraviolet: "#2A0481", lightest: "#FFFFFF", lighter: "#F7FAFC", light: "#EEF3F6", mediumlight: "#ECF4F9", medium: "#D9E8F2", mediumdark: "#73828C", dark: "#5C6870", darker: "#454E54", darkest: "#2E3438", border: "hsla(203, 50%, 30%, 0.15)", positive: "#66BF3C", negative: "#FF4400", warning: "#E69D00", critical: "#FFFFFF", defaultText: "#2E3438", inverseText: "#FFFFFF", positiveText: "#448028", negativeText: "#D43900", warningText: "#A15C20" }, Cn = { app: "#F6F9FC", bar: xe.lightest, content: xe.lightest, gridCellSize: 10, hoverable: k3(0.93, xe.secondary), positive: "#E1FFD4", negative: "#FEDED2", warning: "#FFF5CF", critical: "#FF4400" }, Fr = { fonts: { base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "), mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ") }, weight: { regular: 400, bold: 700 }, size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 } }, _3 = { base: "light", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: Cn.app, appContentBg: xe.lightest, appBorderColor: xe.border, appBorderRadius: 4, fontBase: Fr.fonts.base, fontCode: Fr.fonts.mono, textColor: xe.darkest, textInverseColor: xe.lightest, textMutedColor: xe.mediumdark, barTextColor: xe.mediumdark, barSelectedColor: xe.secondary, barBg: xe.lightest, buttonBg: Cn.app, buttonBorder: xe.medium, booleanBg: xe.mediumlight, booleanSelectedBg: xe.lightest, inputBg: xe.lightest, inputBorder: xe.border, inputTextColor: xe.darkest, inputBorderRadius: 4 }, Hi = _3, O3 = { base: "dark", colorPrimary: "#FF4785", colorSecondary: "#029CFD", appBg: "#222425", appContentBg: "#1B1C1D", appBorderColor: "rgba(255,255,255,.1)", appBorderRadius: 4, fontBase: Fr.fonts.base, fontCode: Fr.fonts.mono, textColor: "#C9CDCF", textInverseColor: "#222425", textMutedColor: "#798186", barTextColor: "#798186", barSelectedColor: xe.secondary, barBg: "#292C2E", buttonBg: "#222425", buttonBorder: "rgba(255,255,255,.1)", booleanBg: "#222425", booleanSelectedBg: "#2E3438", inputBg: "#1B1C1D", inputBorder: "rgba(255,255,255,.1)", inputTextColor: xe.lightest, inputBorderRadius: 4 }, T3 = O3, { window: pc } = gt, F3 = (e) => ({ color: e }), R3 = (e) => typeof e != "string" ? (Nv.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`), !1) : !0, L3 = (e) => !/(gradient|var|calc)/.test(e), D3 = (e, r) => e === "darken" ? Uo(`${y3(1, r)}`, 0.95) : e === "lighten" ? Uo(`${E3(1, r)}`, 0.95) : r, M3 = (e) => (r) => {
  if (!R3(r) || !L3(r))
    return r;
  try {
    return D3(e, r);
  } catch {
    return r;
  }
}, jo = M3("lighten"), C5 = () => !pc || !pc.matchMedia ? "light" : pc.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", Kc = { light: Hi, dark: T3, normal: Hi };
C5();
var $3 = function(r) {
  return r();
}, k5 = gf["useInsertionEffect"] ? gf["useInsertionEffect"] : !1, k0 = k5 || $3, yf = k5 || D.useLayoutEffect;
function xi(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var _5 = { exports: {} };
(function(e, r) {
  (function(a) {
    e.exports = a();
  })(function() {
    return function a(l, i, c) {
      function d(h, y) {
        if (!i[h]) {
          if (!l[h]) {
            var w = typeof xi == "function" && xi;
            if (!y && w)
              return w(h, !0);
            if (m)
              return m(h, !0);
            var x = new Error("Cannot find module '" + h + "'");
            throw x.code = "MODULE_NOT_FOUND", x;
          }
          var v = i[h] = { exports: {} };
          l[h][0].call(v.exports, function(E) {
            var b = l[h][1][E];
            return d(b || E);
          }, v, v.exports, a, l, i, c);
        }
        return i[h].exports;
      }
      for (var m = typeof xi == "function" && xi, p = 0; p < c.length; p++)
        d(c[p]);
      return d;
    }({ 1: [function(a, l, i) {
      l.exports = function(c) {
        if (typeof Map != "function" || c) {
          var d = a("./similar");
          return new d();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(a, l, i) {
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
    }, {}], 3: [function(a, l, i) {
      var c = a("map-or-similar");
      l.exports = function(h) {
        var y = new c(!1), w = [];
        return function(x) {
          var v = function() {
            var E = y, b, C, A = arguments.length - 1, T = Array(A + 1), k = !0, _;
            if ((v.numArgs || v.numArgs === 0) && v.numArgs !== A + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (_ = 0; _ < A; _++) {
              if (T[_] = {
                cacheItem: E,
                arg: arguments[_]
              }, E.has(arguments[_])) {
                E = E.get(arguments[_]);
                continue;
              }
              k = !1, b = new c(!1), E.set(arguments[_], b), E = b;
            }
            return k && (E.has(arguments[A]) ? C = E.get(arguments[A]) : k = !1), k || (C = x.apply(null, arguments), E.set(arguments[A], C)), h > 0 && (T[A] = {
              cacheItem: E,
              arg: arguments[A]
            }, k ? d(w, T) : w.push(T), w.length > h && m(w.shift())), v.wasMemoized = k, v.numArgs = A + 1, C;
          };
          return v.limit = h, v.wasMemoized = !1, v.cache = y, v.lru = w, v;
        };
      };
      function d(h, y) {
        var w = h.length, x = y.length, v, E, b;
        for (E = 0; E < w; E++) {
          for (v = !0, b = 0; b < x; b++)
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
        var y = h.length, w = h[y - 1], x, v;
        for (w.cacheItem.delete(w.arg), v = y - 2; v >= 0 && (w = h[v], x = w.cacheItem.get(w.arg), !x || !x.size); v--)
          w.cacheItem.delete(w.arg);
      }
      function p(h, y) {
        return h === y || h !== h && y !== y;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(_5);
var B3 = _5.exports;
const ra = /* @__PURE__ */ ta(B3), { logger: I3 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var P3 = C0({ "../../node_modules/react-is/cjs/react-is.development.js"(e) {
  (function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, l = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, y = r ? Symbol.for("react.concurrent_mode") : 60111, w = r ? Symbol.for("react.forward_ref") : 60112, x = r ? Symbol.for("react.suspense") : 60113, v = r ? Symbol.for("react.suspense_list") : 60120, E = r ? Symbol.for("react.memo") : 60115, b = r ? Symbol.for("react.lazy") : 60116, C = r ? Symbol.for("react.block") : 60121, A = r ? Symbol.for("react.fundamental") : 60117, T = r ? Symbol.for("react.responder") : 60118, k = r ? Symbol.for("react.scope") : 60119;
    function _(se) {
      return typeof se == "string" || typeof se == "function" || se === i || se === y || se === d || se === c || se === x || se === v || typeof se == "object" && se !== null && (se.$$typeof === b || se.$$typeof === E || se.$$typeof === m || se.$$typeof === p || se.$$typeof === w || se.$$typeof === A || se.$$typeof === T || se.$$typeof === k || se.$$typeof === C);
    }
    function O(se) {
      if (typeof se == "object" && se !== null) {
        var ht = se.$$typeof;
        switch (ht) {
          case a:
            var Bt = se.type;
            switch (Bt) {
              case h:
              case y:
              case i:
              case d:
              case c:
              case x:
                return Bt;
              default:
                var yr = Bt && Bt.$$typeof;
                switch (yr) {
                  case p:
                  case w:
                  case b:
                  case E:
                  case m:
                    return yr;
                  default:
                    return ht;
                }
            }
          case l:
            return ht;
        }
      }
    }
    var L = h, $ = y, M = p, j = m, Z = a, V = w, Q = i, Y = b, pe = E, J = l, re = d, ae = c, q = x, W = !1;
    function F(se) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(se) || O(se) === h;
    }
    function U(se) {
      return O(se) === y;
    }
    function ne(se) {
      return O(se) === p;
    }
    function ce(se) {
      return O(se) === m;
    }
    function ue(se) {
      return typeof se == "object" && se !== null && se.$$typeof === a;
    }
    function te(se) {
      return O(se) === w;
    }
    function le(se) {
      return O(se) === i;
    }
    function fe(se) {
      return O(se) === b;
    }
    function ve(se) {
      return O(se) === E;
    }
    function Oe(se) {
      return O(se) === l;
    }
    function lr(se) {
      return O(se) === d;
    }
    function rt(se) {
      return O(se) === c;
    }
    function $t(se) {
      return O(se) === x;
    }
    e.AsyncMode = L, e.ConcurrentMode = $, e.ContextConsumer = M, e.ContextProvider = j, e.Element = Z, e.ForwardRef = V, e.Fragment = Q, e.Lazy = Y, e.Memo = pe, e.Portal = J, e.Profiler = re, e.StrictMode = ae, e.Suspense = q, e.isAsyncMode = F, e.isConcurrentMode = U, e.isContextConsumer = ne, e.isContextProvider = ce, e.isElement = ue, e.isForwardRef = te, e.isFragment = le, e.isLazy = fe, e.isMemo = ve, e.isPortal = Oe, e.isProfiler = lr, e.isStrictMode = rt, e.isSuspense = $t, e.isValidElementType = _, e.typeOf = O;
  })();
} }), N3 = C0({ "../../node_modules/react-is/index.js"(e, r) {
  r.exports = P3();
} }), O5 = C0({ "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, r) {
  var a = N3(), l = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, c = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, d = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, m = {};
  m[a.ForwardRef] = c, m[a.Memo] = d;
  function p(C) {
    return a.isMemo(C) ? d : m[C.$$typeof] || l;
  }
  var h = Object.defineProperty, y = Object.getOwnPropertyNames, w = Object.getOwnPropertySymbols, x = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, E = Object.prototype;
  function b(C, A, T) {
    if (typeof A != "string") {
      if (E) {
        var k = v(A);
        k && k !== E && b(C, k, T);
      }
      var _ = y(A);
      w && (_ = _.concat(w(A)));
      for (var O = p(C), L = p(A), $ = 0; $ < _.length; ++$) {
        var M = _[$];
        if (!i[M] && !(T && T[M]) && !(L && L[M]) && !(O && O[M])) {
          var j = x(A, M);
          try {
            h(C, M, j);
          } catch {
          }
        }
      }
    }
    return C;
  }
  r.exports = b;
} });
function T5(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return r[a] === void 0 && (r[a] = e(a)), r[a];
  };
}
var j3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _0 = T5(function(e) {
  return j3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
});
function H3(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Z3(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var z3 = function() {
  function e(a) {
    var l = this;
    this._insertTag = function(i) {
      var c;
      l.tags.length === 0 ? l.insertionPoint ? c = l.insertionPoint.nextSibling : l.prepend ? c = l.container.firstChild : c = l.before : c = l.tags[l.tags.length - 1].nextSibling, l.container.insertBefore(i, c), l.tags.push(i);
    }, this.isSpeedy = a.speedy === void 0 ? !1 : a.speedy, this.tags = [], this.ctr = 0, this.nonce = a.nonce, this.key = a.key, this.container = a.container, this.prepend = a.prepend, this.insertionPoint = a.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Z3(this));
    var l = this.tags[this.tags.length - 1], i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
    if (i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i, this.isSpeedy) {
      var c = H3(l);
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
}(), mt = "-ms-", Zi = "-moz-", ke = "-webkit-", O0 = "comm", T0 = "rule", F0 = "decl", V3 = "@import", F5 = "@keyframes", U3 = "@layer", q3 = Math.abs, eu = String.fromCharCode, W3 = Object.assign;
function G3(e, r) {
  return lt(e, 0) ^ 45 ? (((r << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function R5(e) {
  return e.trim();
}
function K3(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function _e(e, r, a) {
  return e.replace(r, a);
}
function Yc(e, r) {
  return e.indexOf(r);
}
function lt(e, r) {
  return e.charCodeAt(r) | 0;
}
function qo(e, r, a) {
  return e.slice(r, a);
}
function kr(e) {
  return e.length;
}
function R0(e) {
  return e.length;
}
function wi(e, r) {
  return r.push(e), e;
}
function Y3(e, r) {
  return e.map(r).join("");
}
var tu = 1, Ma = 1, L5 = 0, Dt = 0, Ke = 0, za = "";
function ru(e, r, a, l, i, c, d) {
  return { value: e, root: r, parent: a, type: l, props: i, children: c, line: tu, column: Ma, length: d, return: "" };
}
function $o(e, r) {
  return W3(ru("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function X3() {
  return Ke;
}
function Q3() {
  return Ke = Dt > 0 ? lt(za, --Dt) : 0, Ma--, Ke === 10 && (Ma = 1, tu--), Ke;
}
function Ut() {
  return Ke = Dt < L5 ? lt(za, Dt++) : 0, Ma++, Ke === 10 && (Ma = 1, tu++), Ke;
}
function Dr() {
  return lt(za, Dt);
}
function Ti() {
  return Dt;
}
function ll(e, r) {
  return qo(za, e, r);
}
function Wo(e) {
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
function D5(e) {
  return tu = Ma = 1, L5 = kr(za = e), Dt = 0, [];
}
function M5(e) {
  return za = "", e;
}
function Fi(e) {
  return R5(ll(Dt - 1, Xc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function J3(e) {
  for (; (Ke = Dr()) && Ke < 33; )
    Ut();
  return Wo(e) > 2 || Wo(Ke) > 3 ? "" : " ";
}
function e4(e, r) {
  for (; --r && Ut() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return ll(e, Ti() + (r < 6 && Dr() == 32 && Ut() == 32));
}
function Xc(e) {
  for (; Ut(); )
    switch (Ke) {
      case e:
        return Dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xc(Ke);
        break;
      case 40:
        e === 41 && Xc(e);
        break;
      case 92:
        Ut();
        break;
    }
  return Dt;
}
function t4(e, r) {
  for (; Ut() && e + Ke !== 47 + 10 && !(e + Ke === 42 + 42 && Dr() === 47); )
    ;
  return "/*" + ll(r, Dt - 1) + "*" + eu(e === 47 ? e : Ut());
}
function r4(e) {
  for (; !Wo(Dr()); )
    Ut();
  return ll(e, Dt);
}
function n4(e) {
  return M5(Ri("", null, null, null, [""], e = D5(e), 0, [0], e));
}
function Ri(e, r, a, l, i, c, d, m, p) {
  for (var h = 0, y = 0, w = d, x = 0, v = 0, E = 0, b = 1, C = 1, A = 1, T = 0, k = "", _ = i, O = c, L = l, $ = k; C; )
    switch (E = T, T = Ut()) {
      case 40:
        if (E != 108 && lt($, w - 1) == 58) {
          Yc($ += _e(Fi(T), "&", "&\f"), "&\f") != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Fi(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += J3(E);
        break;
      case 92:
        $ += e4(Ti() - 1, 7);
        continue;
      case 47:
        switch (Dr()) {
          case 42:
          case 47:
            wi(a4(t4(Ut(), Ti()), r, a), p);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * b:
        m[h++] = kr($) * A;
      case 125 * b:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            C = 0;
          case 59 + y:
            A == -1 && ($ = _e($, /\f/g, "")), v > 0 && kr($) - w && wi(v > 32 ? bf($ + ";", l, a, w - 1) : bf(_e($, " ", "") + ";", l, a, w - 2), p);
            break;
          case 59:
            $ += ";";
          default:
            if (wi(L = vf($, r, a, h, y, i, m, k, _ = [], O = [], w), c), T === 123)
              if (y === 0)
                Ri($, r, L, L, _, c, w, m, O);
              else
                switch (x === 99 && lt($, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ri(e, L, L, l && wi(vf(e, L, L, 0, 0, i, m, k, i, _ = [], w), O), i, O, w, m, l ? _ : O);
                    break;
                  default:
                    Ri($, L, L, L, [""], O, 0, m, O);
                }
        }
        h = y = v = 0, b = A = 1, k = $ = "", w = d;
        break;
      case 58:
        w = 1 + kr($), v = E;
      default:
        if (b < 1) {
          if (T == 123)
            --b;
          else if (T == 125 && b++ == 0 && Q3() == 125)
            continue;
        }
        switch ($ += eu(T), T * b) {
          case 38:
            A = y > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            m[h++] = (kr($) - 1) * A, A = 1;
            break;
          case 64:
            Dr() === 45 && ($ += Fi(Ut())), x = Dr(), y = w = kr(k = $ += r4(Ti())), T++;
            break;
          case 45:
            E === 45 && kr($) == 2 && (b = 0);
        }
    }
  return c;
}
function vf(e, r, a, l, i, c, d, m, p, h, y) {
  for (var w = i - 1, x = i === 0 ? c : [""], v = R0(x), E = 0, b = 0, C = 0; E < l; ++E)
    for (var A = 0, T = qo(e, w + 1, w = q3(b = d[E])), k = e; A < v; ++A)
      (k = R5(b > 0 ? x[A] + " " + T : _e(T, /&\f/g, x[A]))) && (p[C++] = k);
  return ru(e, r, a, i === 0 ? T0 : m, p, h, y);
}
function a4(e, r, a) {
  return ru(e, r, a, O0, eu(X3()), qo(e, 2, -2), 0);
}
function bf(e, r, a, l) {
  return ru(e, r, a, F0, qo(e, 0, l), qo(e, l + 1, -1), l);
}
function Da(e, r) {
  for (var a = "", l = R0(e), i = 0; i < l; i++)
    a += r(e[i], i, e, r) || "";
  return a;
}
function o4(e, r, a, l) {
  switch (e.type) {
    case U3:
      if (e.children.length)
        break;
    case V3:
    case F0:
      return e.return = e.return || e.value;
    case O0:
      return "";
    case F5:
      return e.return = e.value + "{" + Da(e.children, l) + "}";
    case T0:
      e.value = e.props.join(",");
  }
  return kr(a = Da(e.children, l)) ? e.return = e.value + "{" + a + "}" : "";
}
function l4(e) {
  var r = R0(e);
  return function(a, l, i, c) {
    for (var d = "", m = 0; m < r; m++)
      d += e[m](a, l, i, c) || "";
    return d;
  };
}
var Ef = function(e) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(a) {
    if (r.has(a))
      return r.get(a);
    var l = e(a);
    return r.set(a, l), l;
  };
}, i4 = function(e, r, a) {
  for (var l = 0, i = 0; l = i, i = Dr(), l === 38 && i === 12 && (r[a] = 1), !Wo(i); )
    Ut();
  return ll(e, Dt);
}, u4 = function(e, r) {
  var a = -1, l = 44;
  do
    switch (Wo(l)) {
      case 0:
        l === 38 && Dr() === 12 && (r[a] = 1), e[a] += i4(Dt - 1, r, a);
        break;
      case 2:
        e[a] += Fi(l);
        break;
      case 4:
        if (l === 44) {
          e[++a] = Dr() === 58 ? "&\f" : "", r[a] = e[a].length;
          break;
        }
      default:
        e[a] += eu(l);
    }
  while (l = Ut());
  return e;
}, s4 = function(e, r) {
  return M5(u4(D5(e), r));
}, xf = /* @__PURE__ */ new WeakMap(), c4 = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var r = e.value, a = e.parent, l = e.column === a.column && e.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a)
        return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !xf.get(a)) && !l) {
      xf.set(e, !0);
      for (var i = [], c = s4(r, i), d = a.props, m = 0, p = 0; m < c.length; m++)
        for (var h = 0; h < d.length; h++, p++)
          e.props[p] = i[m] ? c[m].replace(/&\f/g, d[h]) : d[h] + " " + c[m];
    }
  }
}, d4 = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, p4 = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", f4 = function(e) {
  return e.type === "comm" && e.children.indexOf(p4) > -1;
}, m4 = function(e) {
  return function(r, a, l) {
    if (!(r.type !== "rule" || e.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var c = !!r.parent, d = c ? r.parent.children : l, m = d.length - 1; m >= 0; m--) {
          var p = d[m];
          if (p.line < r.line)
            break;
          if (p.column < r.column) {
            if (f4(p))
              return;
            break;
          }
        }
        i.forEach(function(h) {
          console.error('The pseudo class "' + h + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + h.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, $5 = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, g4 = function(e, r) {
  for (var a = e - 1; a >= 0; a--)
    if (!$5(r[a]))
      return !0;
  return !1;
}, wf = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, h4 = function(e, r, a) {
  $5(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), wf(e)) : g4(r, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), wf(e)));
};
function B5(e, r) {
  switch (G3(e, r)) {
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
      return ke + e + Zi + e + mt + e + e;
    case 6828:
    case 4268:
      return ke + e + mt + e + e;
    case 6165:
      return ke + e + mt + "flex-" + e + e;
    case 5187:
      return ke + e + _e(e, /(\w+).+(:[^]+)/, ke + "box-$1$2" + mt + "flex-$1$2") + e;
    case 5443:
      return ke + e + mt + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return ke + e + mt + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ke + e + mt + _e(e, "shrink", "negative") + e;
    case 5292:
      return ke + e + mt + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return ke + "box-" + _e(e, "-grow", "") + ke + e + mt + _e(e, "grow", "positive") + e;
    case 4554:
      return ke + _e(e, /([^-])(transform)/g, "$1" + ke + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, ke + "$1"), /(image-set)/, ke + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, ke + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, ke + "box-pack:$3" + mt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ke + e + e;
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
      if (kr(e) - 1 - r > 6)
        switch (lt(e, r + 1)) {
          case 109:
            if (lt(e, r + 4) !== 45)
              break;
          case 102:
            return _e(e, /(.+:)(.+)-([^]+)/, "$1" + ke + "$2-$3$1" + Zi + (lt(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Yc(e, "stretch") ? B5(_e(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (lt(e, r + 1) !== 115)
        break;
    case 6444:
      switch (lt(e, kr(e) - 3 - (~Yc(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + ke) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ke + (lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ke + "$2$3$1" + mt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (lt(e, r + 11)) {
        case 114:
          return ke + e + mt + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ke + e + mt + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ke + e + mt + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ke + e + mt + e + e;
  }
  return e;
}
var y4 = function(e, r, a, l) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case F0:
        e.return = B5(e.value, e.length);
        break;
      case F5:
        return Da([$o(e, { value: _e(e.value, "@", "@" + ke) })], l);
      case T0:
        if (e.length)
          return Y3(e.props, function(i) {
            switch (K3(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Da([$o(e, { props: [_e(i, /:(read-\w+)/, ":" + Zi + "$1")] })], l);
              case "::placeholder":
                return Da([$o(e, { props: [_e(i, /:(plac\w+)/, ":" + ke + "input-$1")] }), $o(e, { props: [_e(i, /:(plac\w+)/, ":" + Zi + "$1")] }), $o(e, { props: [_e(i, /:(plac\w+)/, mt + "input-$1")] })], l);
            }
            return "";
          });
    }
}, v4 = [y4], b4 = function(e) {
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
  var l = e.stylisPlugins || v4;
  if (/[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, c, d = [];
  c = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(E) {
    for (var b = E.getAttribute("data-emotion").split(" "), C = 1; C < b.length; C++)
      i[b[C]] = !0;
    d.push(E);
  });
  var m, p = [c4, d4];
  p.push(m4({ get compat() {
    return v.compat;
  } }), h4);
  {
    var h, y = [o4, function(E) {
      E.root || (E.return ? h.insert(E.return) : E.value && E.type !== O0 && h.insert(E.value + "{}"));
    }], w = l4(p.concat(l, y)), x = function(E) {
      return Da(n4(E), w);
    };
    m = function(E, b, C, A) {
      h = C, b.map !== void 0 && (h = { insert: function(T) {
        C.insert(T + b.map);
      } }), x(E ? E + "{" + b.styles + "}" : b.styles), A && (v.inserted[b.name] = !0);
    };
  }
  var v = { key: r, sheet: new z3({ key: r, container: c, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: i, registered: {}, insert: m };
  return v.sheet.hydrate(d), v;
};
x5(O5());
var E4 = !0;
function L0(e, r, a) {
  var l = "";
  return a.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : l += i + " ";
  }), l;
}
var nu = function(e, r, a) {
  var l = e.key + "-" + r.name;
  (a === !1 || E4 === !1) && e.registered[l] === void 0 && (e.registered[l] = r.styles);
}, au = function(e, r, a) {
  nu(e, r, a);
  var l = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var i = r;
    do
      e.insert(r === i ? "." + l : "", i, e.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function x4(e) {
  for (var r = 0, a, l = 0, i = e.length; i >= 4; ++l, i -= 4)
    a = e.charCodeAt(l) & 255 | (e.charCodeAt(++l) & 255) << 8 | (e.charCodeAt(++l) & 255) << 16 | (e.charCodeAt(++l) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, r = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      r ^= (e.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(l + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(l) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var w4 = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, Sf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, S4 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", A4 = /[A-Z]|^ms/g, I5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, D0 = function(e) {
  return e.charCodeAt(1) === 45;
}, Af = function(e) {
  return e != null && typeof e != "boolean";
}, fc = T5(function(e) {
  return D0(e) ? e : e.replace(A4, "-$&").toLowerCase();
}), zi = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(I5, function(a, l, i) {
          return _r = { name: l, styles: i, next: _r }, l;
        });
  }
  return w4[e] !== 1 && !D0(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
Cf = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, kf = ["normal", "none", "initial", "inherit", "unset"], _f = zi, Of = /^-ms-/, Tf = /-(.)/g, mc = {}, zi = function(e, r) {
  if (e === "content" && (typeof r != "string" || kf.indexOf(r) === -1 && !Cf.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
  var a = _f(e, r);
  return a !== "" && !D0(e) && e.indexOf("-") !== -1 && mc[e] === void 0 && (mc[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Of, "ms-").replace(Tf, function(l, i) {
    return i.toUpperCase();
  }) + "?")), a;
};
var Cf, kf, _f, Of, Tf, mc, P5 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Go(e, r, a) {
  if (a == null)
    return "";
  if (a.__emotion_styles !== void 0) {
    if (a.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(P5);
    return a;
  }
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      if (a.anim === 1)
        return _r = { name: a.name, styles: a.styles, next: _r }, a.name;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            _r = { name: l.name, styles: l.styles, next: _r }, l = l.next;
        var i = a.styles + ";";
        return a.map !== void 0 && (i += a.map), i;
      }
      return C4(e, r, a);
    }
    case "function": {
      if (e !== void 0) {
        var c = _r, d = a(e);
        return _r = c, Go(e, r, d);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var m = [], p = a.replace(I5, function(y, w, x) {
        var v = "animation" + m.length;
        return m.push("const " + v + " = keyframes`" + x.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
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
function C4(e, r, a) {
  var l = "";
  if (Array.isArray(a))
    for (var i = 0; i < a.length; i++)
      l += Go(e, r, a[i]) + ";";
  else
    for (var c in a) {
      var d = a[c];
      if (typeof d != "object")
        r != null && r[d] !== void 0 ? l += c + "{" + r[d] + "}" : Af(d) && (l += fc(c) + ":" + zi(c, d) + ";");
      else {
        if (c === "NO_COMPONENT_SELECTOR")
          throw new Error(P5);
        if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
          for (var m = 0; m < d.length; m++)
            Af(d[m]) && (l += fc(c) + ":" + zi(c, d[m]) + ";");
        else {
          var p = Go(e, r, d);
          switch (c) {
            case "animation":
            case "animationName": {
              l += fc(c) + ":" + p + ";";
              break;
            }
            default:
              c === "undefined" && console.error(S4), l += c + "{" + p + "}";
          }
        }
      }
    }
  return l;
}
var Ff = /label:\s*([^\s;\n{]+)\s*(;|$)/g, N5;
N5 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var _r, $a = function(e, r, a) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var l = !0, i = "";
  _r = void 0;
  var c = e[0];
  c == null || c.raw === void 0 ? (l = !1, i += Go(a, r, c)) : (c[0] === void 0 && console.error(Sf), i += c[0]);
  for (var d = 1; d < e.length; d++)
    i += Go(a, r, e[d]), l && (c[d] === void 0 && console.error(Sf), i += c[d]);
  var m;
  i = i.replace(N5, function(w) {
    return m = w, "";
  }), Ff.lastIndex = 0;
  for (var p = "", h; (h = Ff.exec(i)) !== null; )
    p += "-" + h[1];
  var y = x4(i) + p;
  return { name: y, styles: i, map: m, next: _r, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
}, k4 = {}.hasOwnProperty, M0 = D.createContext(typeof HTMLElement < "u" ? b4({ key: "css" }) : null);
M0.displayName = "EmotionCacheContext";
M0.Provider;
var ou = function(e) {
  return D.forwardRef(function(r, a) {
    var l = D.useContext(M0);
    return e(r, l, a);
  });
}, On = D.createContext({});
On.displayName = "EmotionThemeContext";
var _4 = function() {
  return D.useContext(On);
}, O4 = function(e, r) {
  if (typeof r == "function") {
    var a = r(e);
    if (a == null || typeof a != "object" || Array.isArray(a))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return a;
  }
  if (r == null || typeof r != "object" || Array.isArray(r))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return _n({}, e, r);
}, T4 = Ef(function(e) {
  return Ef(function(r) {
    return O4(e, r);
  });
}), j5 = function(e) {
  var r = D.useContext(On);
  return e.theme !== r && (r = T4(r)(e.theme)), D.createElement(On.Provider, { value: r }, e.children);
}, Rf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Lf = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", F4 = function(e) {
  var r = e.cache, a = e.serialized, l = e.isStringTag;
  return nu(r, a, l), k0(function() {
    return au(r, a, l);
  }), null;
}, R4 = ou(function(e, r, a) {
  var l = e.css;
  typeof l == "string" && r.registered[l] !== void 0 && (l = r.registered[l]);
  var i = e[Rf], c = [l], d = "";
  typeof e.className == "string" ? d = L0(r.registered, c, e.className) : e.className != null && (d = e.className + " ");
  var m = $a(c, void 0, D.useContext(On));
  if (m.name.indexOf("-") === -1) {
    var p = e[Lf];
    p && (m = $a([m, "label:" + p + ";"]));
  }
  d += r.key + "-" + m.name;
  var h = {};
  for (var y in e)
    k4.call(e, y) && y !== "css" && y !== Rf && y !== Lf && (h[y] = e[y]);
  return h.ref = a, h.className = d, D.createElement(D.Fragment, null, D.createElement(F4, { cache: r, serialized: m, isStringTag: typeof i == "string" }), D.createElement(i, h));
});
R4.displayName = "EmotionCssPropInternal";
x5(O5());
var L4 = { name: "@emotion/react", version: "11.11.1", main: "dist/emotion-react.cjs.js", module: "dist/emotion-react.esm.js", browser: { "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js" }, exports: { ".": { module: { worker: "./dist/emotion-react.worker.esm.js", browser: "./dist/emotion-react.browser.esm.js", default: "./dist/emotion-react.esm.js" }, import: "./dist/emotion-react.cjs.mjs", default: "./dist/emotion-react.cjs.js" }, "./jsx-runtime": { module: { worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js", browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js" }, import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs", default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js" }, "./_isolated-hnrs": { module: { worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js", browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js" }, import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs", default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js" }, "./jsx-dev-runtime": { module: { worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js", browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js" }, import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs", default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js" }, "./package.json": "./package.json", "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } }, types: "types/index.d.ts", files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"], sideEffects: !1, author: "Emotion Contributors", license: "MIT", scripts: { "test:typescript": "dtslint types" }, dependencies: { "@babel/runtime": "^7.18.3", "@emotion/babel-plugin": "^11.11.0", "@emotion/cache": "^11.11.0", "@emotion/serialize": "^1.1.2", "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1", "@emotion/utils": "^1.2.1", "@emotion/weak-memoize": "^0.3.1", "hoist-non-react-statics": "^3.3.1" }, peerDependencies: { react: ">=16.8.0" }, peerDependenciesMeta: { "@types/react": { optional: !0 } }, devDependencies: { "@definitelytyped/dtslint": "0.0.112", "@emotion/css": "11.11.0", "@emotion/css-prettifier": "1.1.3", "@emotion/server": "11.11.0", "@emotion/styled": "11.11.0", "html-tag-names": "^1.1.2", react: "16.14.0", "svg-tag-names": "^1.1.1", typescript: "^4.5.5" }, repository: "https://github.com/emotion-js/emotion/tree/main/packages/react", publishConfig: { access: "public" }, "umd:main": "dist/emotion-react.umd.min.js", preconstruct: { entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"], umdName: "emotionReact", exports: { envConditions: ["browser", "worker"], extra: { "./types/css-prop": "./types/css-prop.d.ts", "./macro": { types: { import: "./macro.d.mts", default: "./macro.d.ts" }, default: "./macro.js" } } } } }, Df = !1, D4 = ou(function(e, r) {
  !Df && (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Df = !0);
  var a = e.styles, l = $a([a], void 0, D.useContext(On)), i = D.useRef();
  return yf(function() {
    var c = r.key + "-global", d = new r.sheet.constructor({ key: c, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy }), m = !1, p = document.querySelector('style[data-emotion="' + c + " " + l.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), p !== null && (m = !0, p.setAttribute("data-emotion", c), d.hydrate([p])), i.current = [d, m], function() {
      d.flush();
    };
  }, [r]), yf(function() {
    var c = i.current, d = c[0], m = c[1];
    if (m) {
      c[1] = !1;
      return;
    }
    if (l.next !== void 0 && au(r, l.next, !0), d.tags.length) {
      var p = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = p, d.flush();
    }
    r.insert("", l, d, !1);
  }, [r, l.name]), null;
});
D4.displayName = "EmotionGlobal";
function $0() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return $a(r);
}
var Va = function() {
  var e = $0.apply(void 0, arguments), r = "animation-" + e.name;
  return { name: r, styles: "@keyframes " + r + "{" + e.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}, M4 = function e(r) {
  for (var a = r.length, l = 0, i = ""; l < a; l++) {
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
      d && (i && (i += " "), i += d);
    }
  }
  return i;
};
function $4(e, r, a) {
  var l = [], i = L0(e, l, a);
  return l.length < 2 ? a : i + r(l);
}
var B4 = function(e) {
  var r = e.cache, a = e.serializedArr;
  return k0(function() {
    for (var l = 0; l < a.length; l++)
      au(r, a[l], !1);
  }), null;
}, I4 = ou(function(e, r) {
  var a = !1, l = [], i = function() {
    if (a)
      throw new Error("css can only be used during render");
    for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++)
      h[y] = arguments[y];
    var w = $a(h, r.registered);
    return l.push(w), nu(r, w, !1), r.key + "-" + w.name;
  }, c = function() {
    if (a)
      throw new Error("cx can only be used during render");
    for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++)
      h[y] = arguments[y];
    return $4(r.registered, i, M4(h));
  }, d = { css: i, cx: c, theme: D.useContext(On) }, m = e.children(d);
  return a = !0, D.createElement(D.Fragment, null, D.createElement(B4, { cache: r, serializedArr: l }), m);
});
I4.displayName = "EmotionClassNames";
gc = !0, Mf = typeof jest < "u" || typeof vi < "u", gc && !Mf && (hc = typeof globalThis < "u" ? globalThis : gc ? window : global, yc = "__EMOTION_REACT_" + L4.version.split(".")[0] + "__", hc[yc] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), hc[yc] = !0);
var gc, Mf, hc, yc, P4 = _0, N4 = function(e) {
  return e !== "theme";
}, $f = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? P4 : N4;
}, Bf = function(e, r, a) {
  var l;
  if (r) {
    var i = r.shouldForwardProp;
    l = e.__emotion_forwardProp && i ? function(c) {
      return e.__emotion_forwardProp(c) && i(c);
    } : i;
  }
  return typeof l != "function" && a && (l = e.__emotion_forwardProp), l;
}, If = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, j4 = function(e) {
  var r = e.cache, a = e.serialized, l = e.isStringTag;
  return nu(r, a, l), k0(function() {
    return au(r, a, l);
  }), null;
}, H4 = function e(r, a) {
  if (r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var l = r.__emotion_real === r, i = l && r.__emotion_base || r, c, d;
  a !== void 0 && (c = a.label, d = a.target);
  var m = Bf(r, a, l), p = m || $f(i), h = !p("as");
  return function() {
    var y = arguments, w = l && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (c !== void 0 && w.push("label:" + c + ";"), y[0] == null || y[0].raw === void 0)
      w.push.apply(w, y);
    else {
      y[0][0] === void 0 && console.error(If), w.push(y[0][0]);
      for (var x = y.length, v = 1; v < x; v++)
        y[0][v] === void 0 && console.error(If), w.push(y[v], y[0][v]);
    }
    var E = ou(function(b, C, A) {
      var T = h && b.as || i, k = "", _ = [], O = b;
      if (b.theme == null) {
        O = {};
        for (var L in b)
          O[L] = b[L];
        O.theme = D.useContext(On);
      }
      typeof b.className == "string" ? k = L0(C.registered, _, b.className) : b.className != null && (k = b.className + " ");
      var $ = $a(w.concat(_), C.registered, O);
      k += C.key + "-" + $.name, d !== void 0 && (k += " " + d);
      var M = h && m === void 0 ? $f(T) : p, j = {};
      for (var Z in b)
        h && Z === "as" || M(Z) && (j[Z] = b[Z]);
      return j.className = k, j.ref = A, D.createElement(D.Fragment, null, D.createElement(j4, { cache: C, serialized: $, isStringTag: typeof T == "string" }), D.createElement(T, j));
    });
    return E.displayName = c !== void 0 ? c : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", E.defaultProps = r.defaultProps, E.__emotion_real = E, E.__emotion_base = i, E.__emotion_styles = w, E.__emotion_forwardProp = m, Object.defineProperty(E, "toString", { value: function() {
      return d === void 0 ? "NO_COMPONENT_SELECTOR" : "." + d;
    } }), E.withComponent = function(b, C) {
      return e(b, _n({}, a, C, { shouldForwardProp: Bf(E, C, !0) })).apply(void 0, w);
    }, E;
  };
}, Z4 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], P = H4.bind();
Z4.forEach(function(e) {
  P[e] = P(e);
});
var z4 = ra(1)(({ typography: e }) => ({ body: { fontFamily: e.fonts.base, fontSize: e.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, "*": { boxSizing: "border-box" }, "h1, h2, h3, h4, h5, h6": { fontWeight: e.weight.regular, margin: 0, padding: 0 }, "button, input, textarea, select": { fontFamily: "inherit", fontSize: "inherit", boxSizing: "border-box" }, sub: { fontSize: "0.8em", bottom: "-0.2em" }, sup: { fontSize: "0.8em", top: "-0.2em" }, "b, strong": { fontWeight: e.weight.bold }, hr: { border: "none", borderTop: "1px solid silver", clear: "both", marginBottom: "1.25rem" }, code: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }, pre: { fontFamily: e.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0" } }));
ra(1)(({ color: e, background: r, typography: a }) => {
  let l = z4({ typography: a });
  return { ...l, body: { ...l.body, color: e.defaultText, background: r.app, overflow: "hidden" }, hr: { ...l.hr, borderTop: `1px solid ${e.border}` } };
});
var V4 = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" }, U4 = Va`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, H5 = Va`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, q4 = Va`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, W4 = Va`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, G4 = $0`
  animation: ${H5} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, K4 = $0`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, Y4 = { rotate360: U4, glow: H5, float: q4, jiggle: W4, inlineGlow: G4, hoverable: K4 }, X4 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)", BASE_COLOR: "rgb(213, 213, 213)", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(227, 110, 236)", OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)", OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)", OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)", HTML_TAG_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_COLOR: "rgb(93, 176, 215)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)", HTML_COMMENT_COLOR: "rgb(137, 137, 137)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "rgb(145, 145, 145)", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "rgb(85, 85, 85)", TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)", TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)", TABLE_SORT_ICON_COLOR: "black", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, Q4 = { BASE_FONT_FAMILY: "Menlo, monospace", BASE_FONT_SIZE: "11px", BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: "white", BASE_COLOR: "black", OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: "rgb(136, 19, 145)", OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)", OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)", OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)", OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)", HTML_TAG_COLOR: "rgb(168, 148, 166)", HTML_TAGNAME_COLOR: "rgb(136, 18, 128)", HTML_TAGNAME_TEXT_TRANSFORM: "lowercase", HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)", HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)", HTML_COMMENT_COLOR: "rgb(35, 110, 37)", HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)", ARROW_COLOR: "#6e6e6e", ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: "0", TREENODE_FONT_FAMILY: "Menlo, monospace", TREENODE_FONT_SIZE: "11px", TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: "#aaa", TABLE_TH_BACKGROUND_COLOR: "#eee", TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)", TABLE_SORT_ICON_COLOR: "#6e6e6e", TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))", TABLE_DATA_BACKGROUND_SIZE: "128px 32px" }, J4 = (e) => Object.entries(e).reduce((r, [a, l]) => ({ ...r, [a]: F3(l) }), {}), eb = ({ colors: e, mono: r }) => {
  let a = J4(e);
  return { token: { fontFamily: r, WebkitFontSmoothing: "antialiased", "&.tag": a.red3, "&.comment": { ...a.green1, fontStyle: "italic" }, "&.prolog": { ...a.green1, fontStyle: "italic" }, "&.doctype": { ...a.green1, fontStyle: "italic" }, "&.cdata": { ...a.green1, fontStyle: "italic" }, "&.string": a.red1, "&.url": a.cyan1, "&.symbol": a.cyan1, "&.number": a.cyan1, "&.boolean": a.cyan1, "&.variable": a.cyan1, "&.constant": a.cyan1, "&.inserted": a.cyan1, "&.atrule": a.blue1, "&.keyword": a.blue1, "&.attr-value": a.blue1, "&.punctuation": a.gray1, "&.operator": a.gray1, "&.function": a.gray1, "&.deleted": a.red2, "&.important": { fontWeight: "bold" }, "&.bold": { fontWeight: "bold" }, "&.italic": { fontStyle: "italic" }, "&.class-name": a.cyan2, "&.selector": a.red3, "&.attr-name": a.red4, "&.property": a.red4, "&.regex": a.red4, "&.entity": a.red4, "&.directive.tag .tag": { background: "#ffff00", ...a.gray1 } }, "language-json .token.boolean": a.blue1, "language-json .token.number": a.blue1, "language-json .token.property": a.cyan2, namespace: { opacity: 0.7 } };
}, tb = { green1: "#008000", red1: "#A31515", red2: "#9a050f", red3: "#800000", red4: "#ff0000", gray1: "#393A34", cyan1: "#36acaa", cyan2: "#2B91AF", blue1: "#0000ff", blue2: "#00009f" }, rb = { green1: "#7C7C7C", red1: "#92C379", red2: "#9a050f", red3: "#A8FF60", red4: "#96CBFE", gray1: "#EDEDED", cyan1: "#C6C5FE", cyan2: "#FFFFB6", blue1: "#B474DD", blue2: "#00009f" }, nb = (e) => ({ primary: e.colorPrimary, secondary: e.colorSecondary, tertiary: xe.tertiary, ancillary: xe.ancillary, orange: xe.orange, gold: xe.gold, green: xe.green, seafoam: xe.seafoam, purple: xe.purple, ultraviolet: xe.ultraviolet, lightest: xe.lightest, lighter: xe.lighter, light: xe.light, mediumlight: xe.mediumlight, medium: xe.medium, mediumdark: xe.mediumdark, dark: xe.dark, darker: xe.darker, darkest: xe.darkest, border: xe.border, positive: xe.positive, negative: xe.negative, warning: xe.warning, critical: xe.critical, defaultText: e.textColor || xe.darkest, inverseText: e.textInverseColor || xe.lightest, positiveText: xe.positiveText, negativeText: xe.negativeText, warningText: xe.warningText }), Qc = (e = Kc[C5()]) => {
  let { base: r, colorPrimary: a, colorSecondary: l, appBg: i, appContentBg: c, appBorderColor: d, appBorderRadius: m, fontBase: p, fontCode: h, textColor: y, textInverseColor: w, barTextColor: x, barSelectedColor: v, barBg: E, buttonBg: b, buttonBorder: C, booleanBg: A, booleanSelectedBg: T, inputBg: k, inputBorder: _, inputTextColor: O, inputBorderRadius: L, brandTitle: $, brandUrl: M, brandImage: j, brandTarget: Z, gridCellSize: V, ...Q } = e;
  return { ...Q, base: r, color: nb(e), background: { app: i, bar: E, content: c, gridCellSize: V || Cn.gridCellSize, hoverable: Cn.hoverable, positive: Cn.positive, negative: Cn.negative, warning: Cn.warning, critical: Cn.critical }, typography: { fonts: { base: p, mono: h }, weight: Fr.weight, size: Fr.size }, animation: Y4, easing: V4, input: { background: k, border: _, borderRadius: L, color: O }, button: { background: b || k, border: C || _ }, boolean: { background: A || _, selectedBackground: T || k }, layoutMargin: 10, appBorderColor: d, appBorderRadius: m, barTextColor: x, barSelectedColor: v || l, barBg: E, brand: { title: $, url: M, image: j || ($ ? null : void 0), target: Z }, code: eb({ colors: r === "light" ? tb : rb, mono: h }), addonActionsTheme: { ...r === "light" ? Q4 : X4, BASE_FONT_FAMILY: h, BASE_FONT_SIZE: Fr.size.s2 - 1, BASE_LINE_HEIGHT: "18px", BASE_BACKGROUND_COLOR: "transparent", BASE_COLOR: y, ARROW_COLOR: S3(0.2, d), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: h, TREENODE_FONT_SIZE: Fr.size.s2 - 1, TREENODE_LINE_HEIGHT: "18px", TREENODE_PADDING_LEFT: 12 } };
}, ab = (e) => Object.keys(e).length === 0, vc = (e) => e != null && typeof e == "object", ob = (e, ...r) => Object.prototype.hasOwnProperty.call(e, ...r), lb = () => /* @__PURE__ */ Object.create(null), Z5 = (e, r) => e === r || !vc(e) || !vc(r) ? {} : Object.keys(e).reduce((a, l) => {
  if (ob(r, l)) {
    let i = Z5(e[l], r[l]);
    return vc(i) && ab(i) || (a[l] = i), a;
  }
  return a[l] = void 0, a;
}, lb()), ib = Z5;
function ub(e) {
  for (var r = [], a = 1; a < arguments.length; a++)
    r[a - 1] = arguments[a];
  var l = Array.from(typeof e == "string" ? [e] : e);
  l[l.length - 1] = l[l.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var i = l.reduce(function(m, p) {
    var h = p.match(/\n([\t ]+|(?!\s).)/g);
    return h ? m.concat(h.map(function(y) {
      var w, x;
      return (x = (w = y.match(/[\t ]/g)) === null || w === void 0 ? void 0 : w.length) !== null && x !== void 0 ? x : 0;
    })) : m;
  }, []);
  if (i.length) {
    var c = new RegExp(`
[	 ]{` + Math.min.apply(Math, i) + "}", "g");
    l = l.map(function(m) {
      return m.replace(c, `
`);
    });
  }
  l[0] = l[0].replace(/^\r?\n/, "");
  var d = l[0];
  return r.forEach(function(m, p) {
    var h = d.match(/(?:^|\n)( *)$/), y = h ? h[1] : "", w = m;
    typeof m == "string" && m.includes(`
`) && (w = String(m).split(`
`).map(function(x, v) {
      return v === 0 ? x : "" + y + x;
    }).join(`
`)), d += w + l[p + 1];
  }), d;
}
var sb = (e) => {
  if (!e)
    return Qc(Hi);
  let r = ib(Hi, e);
  return Object.keys(r).length && I3.warn(ub`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, r), Qc(e);
}, Jc = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
function B0(e, r) {
  if (e == null)
    return {};
  var a = {}, l = Object.keys(e), i, c;
  for (c = 0; c < l.length; c++)
    i = l[c], !(r.indexOf(i) >= 0) && (a[i] = e[i]);
  return a;
}
var cb = Object.create, z5 = Object.defineProperty, db = Object.getOwnPropertyDescriptor, V5 = Object.getOwnPropertyNames, pb = Object.getPrototypeOf, fb = Object.prototype.hasOwnProperty, be = (e, r) => function() {
  return r || (0, e[V5(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, mb = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let i of V5(r))
      !fb.call(e, i) && i !== a && z5(e, i, { get: () => r[i], enumerable: !(l = db(r, i)) || l.enumerable });
  return e;
}, Wt = (e, r, a) => (a = e != null ? cb(pb(e)) : {}, mb(r || !e || !e.__esModule ? z5(a, "default", { value: e, enumerable: !0 }) : a, e)), gb = be({ "../../node_modules/refractor/lang/markdown.js"(e, r) {
  r.exports = a, a.displayName = "markdown", a.aliases = ["md"];
  function a(l) {
    (function(i) {
      var c = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function d(E) {
        return E = E.replace(/<inner>/g, function() {
          return c;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + E + ")");
      }
      var m = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, p = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
        return m;
      }), h = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      i.languages.markdown = i.languages.extend("markup", {}), i.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: i.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + p + h + "(?:" + p + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + p + h + ")(?:" + p + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(m), inside: i.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + p + ")" + h + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + p + "$"), inside: { "table-header": { pattern: RegExp(m), alias: "important", inside: i.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: d(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(E) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(b) {
          E !== b && (i.languages.markdown[E].inside.content.inside[b] = i.languages.markdown[b]);
        });
      }), i.hooks.add("after-tokenize", function(E) {
        if (E.language !== "markdown" && E.language !== "md")
          return;
        function b(C) {
          if (!(!C || typeof C == "string"))
            for (var A = 0, T = C.length; A < T; A++) {
              var k = C[A];
              if (k.type !== "code") {
                b(k.content);
                continue;
              }
              var _ = k.content[1], O = k.content[3];
              if (_ && O && _.type === "code-language" && O.type === "code-block" && typeof _.content == "string") {
                var L = _.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                L = (/[a-z][\w-]*/i.exec(L) || [""])[0].toLowerCase();
                var $ = "language-" + L;
                O.alias ? typeof O.alias == "string" ? O.alias = [O.alias, $] : O.alias.push($) : O.alias = [$];
              }
            }
        }
        b(E.tokens);
      }), i.hooks.add("wrap", function(E) {
        if (E.type === "code-block") {
          for (var b = "", C = 0, A = E.classes.length; C < A; C++) {
            var T = E.classes[C], k = /language-(.+)/.exec(T);
            if (k) {
              b = k[1];
              break;
            }
          }
          var _ = i.languages[b];
          if (_)
            E.content = i.highlight(v(E.content.value), _, b);
          else if (b && b !== "none" && i.plugins.autoloader) {
            var O = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            E.attributes.id = O, i.plugins.autoloader.loadLanguages(b, function() {
              var L = document.getElementById(O);
              L && (L.innerHTML = i.highlight(L.textContent, i.languages[b], b));
            });
          }
        }
      });
      var y = RegExp(i.languages.markup.tag.pattern.source, "gi"), w = { amp: "&", lt: "<", gt: ">", quot: '"' }, x = String.fromCodePoint || String.fromCharCode;
      function v(E) {
        var b = E.replace(y, "");
        return b = b.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(C, A) {
          if (A = A.toLowerCase(), A[0] === "#") {
            var T;
            return A[1] === "x" ? T = parseInt(A.slice(2), 16) : T = Number(A.slice(1)), x(T);
          } else {
            var k = w[A];
            return k || C;
          }
        }), b;
      }
      i.languages.md = i.languages.markdown;
    })(l);
  }
} }), hb = be({ "../../node_modules/refractor/lang/yaml.js"(e, r) {
  r.exports = a, a.displayName = "yaml", a.aliases = ["yml"];
  function a(l) {
    (function(i) {
      var c = /[*&][^\s[\]{},]+/, d = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, m = "(?:" + d.source + "(?:[ 	]+" + c.source + ")?|" + c.source + "(?:[ 	]+" + d.source + ")?)", p = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
        return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
      }), h = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function y(w, x) {
        x = (x || "").replace(/m/g, "") + "m";
        var v = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return m;
        }).replace(/<<value>>/g, function() {
          return w;
        });
        return RegExp(v, x);
      }
      i.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return m;
      })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return m;
      }).replace(/<<key>>/g, function() {
        return "(?:" + p + "|" + h + ")";
      })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: y(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: y(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: y(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: y(h), lookbehind: !0, greedy: !0 }, number: { pattern: y(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: d, important: c, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, i.languages.yml = i.languages.yaml;
    })(l);
  }
} }), U5 = be({ "../../node_modules/refractor/lang/typescript.js"(e, r) {
  r.exports = a, a.displayName = "typescript", a.aliases = ["ts"];
  function a(l) {
    (function(i) {
      i.languages.typescript = i.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), i.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete i.languages.typescript.parameter, delete i.languages.typescript["literal-property"];
      var c = i.languages.extend("typescript", {});
      delete c["class-name"], i.languages.typescript["class-name"].inside = c, i.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: c } } } }), i.languages.ts = i.languages.typescript;
    })(l);
  }
} }), q5 = be({ "../../node_modules/refractor/lang/jsx.js"(e, r) {
  r.exports = a, a.displayName = "jsx", a.aliases = [];
  function a(l) {
    (function(i) {
      var c = i.util.clone(i.languages.javascript), d = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, m = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, p = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function h(x, v) {
        return x = x.replace(/<S>/g, function() {
          return d;
        }).replace(/<BRACES>/g, function() {
          return m;
        }).replace(/<SPREAD>/g, function() {
          return p;
        }), RegExp(x, v);
      }
      p = h(p).source, i.languages.jsx = i.languages.extend("markup", c), i.languages.jsx.tag.pattern = h(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.jsx.tag.inside.comment = c.comment, i.languages.insertBefore("inside", "attr-name", { spread: { pattern: h(/<SPREAD>/.source), inside: i.languages.jsx } }, i.languages.jsx.tag), i.languages.insertBefore("inside", "special-attr", { script: { pattern: h(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: i.languages.jsx } } }, i.languages.jsx.tag);
      var y = function(x) {
        return x ? typeof x == "string" ? x : typeof x.content == "string" ? x.content : x.content.map(y).join("") : "";
      }, w = function(x) {
        for (var v = [], E = 0; E < x.length; E++) {
          var b = x[E], C = !1;
          if (typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? v.length > 0 && v[v.length - 1].tagName === y(b.content[0].content[1]) && v.pop() : b.content[b.content.length - 1].content === "/>" || v.push({ tagName: y(b.content[0].content[1]), openedBraces: 0 }) : v.length > 0 && b.type === "punctuation" && b.content === "{" ? v[v.length - 1].openedBraces++ : v.length > 0 && v[v.length - 1].openedBraces > 0 && b.type === "punctuation" && b.content === "}" ? v[v.length - 1].openedBraces-- : C = !0), (C || typeof b == "string") && v.length > 0 && v[v.length - 1].openedBraces === 0) {
            var A = y(b);
            E < x.length - 1 && (typeof x[E + 1] == "string" || x[E + 1].type === "plain-text") && (A += y(x[E + 1]), x.splice(E + 1, 1)), E > 0 && (typeof x[E - 1] == "string" || x[E - 1].type === "plain-text") && (A = y(x[E - 1]) + A, x.splice(E - 1, 1), E--), x[E] = new i.Token("plain-text", A, null, A);
          }
          b.content && typeof b.content != "string" && w(b.content);
        }
      };
      i.hooks.add("after-tokenize", function(x) {
        x.language !== "jsx" && x.language !== "tsx" || w(x.tokens);
      });
    })(l);
  }
} }), yb = be({ "../../node_modules/refractor/lang/tsx.js"(e, r) {
  var a = q5(), l = U5();
  r.exports = i, i.displayName = "tsx", i.aliases = [];
  function i(c) {
    c.register(a), c.register(l), function(d) {
      var m = d.util.clone(d.languages.typescript);
      d.languages.tsx = d.languages.extend("jsx", m), delete d.languages.tsx.parameter, delete d.languages.tsx["literal-property"];
      var p = d.languages.tsx.tag;
      p.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + p.pattern.source + ")", p.pattern.flags), p.lookbehind = !0;
    }(c);
  }
} }), W5 = be({ "../../node_modules/refractor/lang/markup.js"(e, r) {
  r.exports = a, a.displayName = "markup", a.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function a(l) {
    l.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, l.languages.markup.tag.inside["attr-value"].inside.entity = l.languages.markup.entity, l.languages.markup.doctype.inside["internal-subset"].inside = l.languages.markup, l.hooks.add("wrap", function(i) {
      i.type === "entity" && (i.attributes.title = i.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(l.languages.markup.tag, "addInlined", { value: function(i, c) {
      var d = {};
      d["language-" + c] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: l.languages[c] }, d.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var m = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: d } };
      m["language-" + c] = { pattern: /[\s\S]+/, inside: l.languages[c] };
      var p = {};
      p[i] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return i;
      }), "i"), lookbehind: !0, greedy: !0, inside: m }, l.languages.insertBefore("markup", "cdata", p);
    } }), Object.defineProperty(l.languages.markup.tag, "addAttribute", { value: function(i, c) {
      l.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [c, "language-" + c], inside: l.languages[c] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
    } }), l.languages.html = l.languages.markup, l.languages.mathml = l.languages.markup, l.languages.svg = l.languages.markup, l.languages.xml = l.languages.extend("markup", {}), l.languages.ssml = l.languages.xml, l.languages.atom = l.languages.xml, l.languages.rss = l.languages.xml;
  }
} }), vb = be({ "../../node_modules/refractor/lang/clike.js"(e, r) {
  r.exports = a, a.displayName = "clike", a.aliases = [];
  function a(l) {
    l.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  }
} }), bb = be({ "../../node_modules/refractor/lang/javascript.js"(e, r) {
  r.exports = a, a.displayName = "javascript", a.aliases = ["js"];
  function a(l) {
    l.languages.javascript = l.languages.extend("clike", { "class-name": [l.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), l.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, l.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: l.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: l.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: l.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: l.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: l.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), l.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: l.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), l.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), l.languages.markup && (l.languages.markup.tag.addInlined("script", "javascript"), l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), l.languages.js = l.languages.javascript;
  }
} }), G5 = be({ "../../node_modules/refractor/lang/css.js"(e, r) {
  r.exports = a, a.displayName = "css", a.aliases = [];
  function a(l) {
    (function(i) {
      var c = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      i.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + c.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + c.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + c.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: c, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, i.languages.css.atrule.inside.rest = i.languages.css;
      var d = i.languages.markup;
      d && (d.tag.addInlined("style", "css"), d.tag.addAttribute("style", "css"));
    })(l);
  }
} }), Eb = be({ "../../node_modules/xtend/immutable.js"(e, r) {
  r.exports = l;
  var a = Object.prototype.hasOwnProperty;
  function l() {
    for (var i = {}, c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      for (var m in d)
        a.call(d, m) && (i[m] = d[m]);
    }
    return i;
  }
} }), K5 = be({ "../../node_modules/property-information/lib/util/schema.js"(e, r) {
  r.exports = l;
  var a = l.prototype;
  a.space = null, a.normal = {}, a.property = {};
  function l(i, c, d) {
    this.property = i, this.normal = c, d && (this.space = d);
  }
} }), xb = be({ "../../node_modules/property-information/lib/util/merge.js"(e, r) {
  var a = Eb(), l = K5();
  r.exports = i;
  function i(c) {
    for (var d = c.length, m = [], p = [], h = -1, y, w; ++h < d; )
      y = c[h], m.push(y.property), p.push(y.normal), w = y.space;
    return new l(a.apply(null, m), a.apply(null, p), w);
  }
} }), I0 = be({ "../../node_modules/property-information/normalize.js"(e, r) {
  r.exports = a;
  function a(l) {
    return l.toLowerCase();
  }
} }), Y5 = be({ "../../node_modules/property-information/lib/util/info.js"(e, r) {
  r.exports = l;
  var a = l.prototype;
  a.space = null, a.attribute = null, a.property = null, a.boolean = !1, a.booleanish = !1, a.overloadedBoolean = !1, a.number = !1, a.commaSeparated = !1, a.spaceSeparated = !1, a.commaOrSpaceSeparated = !1, a.mustUseProperty = !1, a.defined = !1;
  function l(i, c) {
    this.property = i, this.attribute = c;
  }
} }), P0 = be({ "../../node_modules/property-information/lib/util/types.js"(e) {
  var r = 0;
  e.boolean = a(), e.booleanish = a(), e.overloadedBoolean = a(), e.number = a(), e.spaceSeparated = a(), e.commaSeparated = a(), e.commaOrSpaceSeparated = a();
  function a() {
    return Math.pow(2, ++r);
  }
} }), X5 = be({ "../../node_modules/property-information/lib/util/defined-info.js"(e, r) {
  var a = Y5(), l = P0();
  r.exports = d, d.prototype = new a(), d.prototype.defined = !0;
  var i = ["boolean", "booleanish", "overloadedBoolean", "number", "commaSeparated", "spaceSeparated", "commaOrSpaceSeparated"], c = i.length;
  function d(p, h, y, w) {
    var x = -1, v;
    for (m(this, "space", w), a.call(this, p, h); ++x < c; )
      v = i[x], m(this, v, (y & l[v]) === l[v]);
  }
  function m(p, h, y) {
    y && (p[h] = y);
  }
} }), il = be({ "../../node_modules/property-information/lib/util/create.js"(e, r) {
  var a = I0(), l = K5(), i = X5();
  r.exports = c;
  function c(d) {
    var m = d.space, p = d.mustUseProperty || [], h = d.attributes || {}, y = d.properties, w = d.transform, x = {}, v = {}, E, b;
    for (E in y)
      b = new i(E, w(h, E), y[E], m), p.indexOf(E) !== -1 && (b.mustUseProperty = !0), x[E] = b, v[a(E)] = E, v[a(b.attribute)] = E;
    return new l(x, v, m);
  }
} }), wb = be({ "../../node_modules/property-information/lib/xlink.js"(e, r) {
  var a = il();
  r.exports = a({ space: "xlink", transform: l, properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null } });
  function l(i, c) {
    return "xlink:" + c.slice(5).toLowerCase();
  }
} }), Sb = be({ "../../node_modules/property-information/lib/xml.js"(e, r) {
  var a = il();
  r.exports = a({ space: "xml", transform: l, properties: { xmlLang: null, xmlBase: null, xmlSpace: null } });
  function l(i, c) {
    return "xml:" + c.slice(3).toLowerCase();
  }
} }), Ab = be({ "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(e, r) {
  r.exports = a;
  function a(l, i) {
    return i in l ? l[i] : i;
  }
} }), Q5 = be({ "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(e, r) {
  var a = Ab();
  r.exports = l;
  function l(i, c) {
    return a(i, c.toLowerCase());
  }
} }), Cb = be({ "../../node_modules/property-information/lib/xmlns.js"(e, r) {
  var a = il(), l = Q5();
  r.exports = a({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: l, properties: { xmlns: null, xmlnsXLink: null } });
} }), kb = be({ "../../node_modules/property-information/lib/aria.js"(e, r) {
  var a = P0(), l = il(), i = a.booleanish, c = a.number, d = a.spaceSeparated;
  r.exports = l({ transform: m, properties: { ariaActiveDescendant: null, ariaAtomic: i, ariaAutoComplete: null, ariaBusy: i, ariaChecked: i, ariaColCount: c, ariaColIndex: c, ariaColSpan: c, ariaControls: d, ariaCurrent: null, ariaDescribedBy: d, ariaDetails: null, ariaDisabled: i, ariaDropEffect: d, ariaErrorMessage: null, ariaExpanded: i, ariaFlowTo: d, ariaGrabbed: i, ariaHasPopup: null, ariaHidden: i, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: d, ariaLevel: c, ariaLive: null, ariaModal: i, ariaMultiLine: i, ariaMultiSelectable: i, ariaOrientation: null, ariaOwns: d, ariaPlaceholder: null, ariaPosInSet: c, ariaPressed: i, ariaReadOnly: i, ariaRelevant: null, ariaRequired: i, ariaRoleDescription: d, ariaRowCount: c, ariaRowIndex: c, ariaRowSpan: c, ariaSelected: i, ariaSetSize: c, ariaSort: null, ariaValueMax: c, ariaValueMin: c, ariaValueNow: c, ariaValueText: null, role: null } });
  function m(p, h) {
    return h === "role" ? h : "aria-" + h.slice(4).toLowerCase();
  }
} }), _b = be({ "../../node_modules/property-information/lib/html.js"(e, r) {
  var a = P0(), l = il(), i = Q5(), c = a.boolean, d = a.overloadedBoolean, m = a.booleanish, p = a.number, h = a.spaceSeparated, y = a.commaSeparated;
  r.exports = l({ space: "html", attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, transform: i, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: y, acceptCharset: h, accessKey: h, action: null, allow: null, allowFullScreen: c, allowPaymentRequest: c, allowUserMedia: c, alt: null, as: null, async: c, autoCapitalize: null, autoComplete: h, autoFocus: c, autoPlay: c, capture: c, charSet: null, checked: c, cite: null, className: h, cols: p, colSpan: null, content: null, contentEditable: m, controls: c, controlsList: h, coords: p | y, crossOrigin: null, data: null, dateTime: null, decoding: null, default: c, defer: c, dir: null, dirName: null, disabled: c, download: d, draggable: m, encType: null, enterKeyHint: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: c, formTarget: null, headers: h, height: p, hidden: c, high: p, href: null, hrefLang: null, htmlFor: h, httpEquiv: h, id: null, imageSizes: null, imageSrcSet: y, inputMode: null, integrity: null, is: null, isMap: c, itemId: null, itemProp: h, itemRef: h, itemScope: c, itemType: h, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: c, low: p, manifest: null, max: null, maxLength: p, media: null, method: null, min: null, minLength: p, multiple: c, muted: c, name: null, nonce: null, noModule: c, noValidate: c, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforePrint: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextMenu: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: c, optimum: p, pattern: null, ping: h, placeholder: null, playsInline: c, poster: null, preload: null, readOnly: c, referrerPolicy: null, rel: h, required: c, reversed: c, rows: p, rowSpan: p, sandbox: h, scope: null, scoped: c, seamless: c, selected: c, shape: null, size: p, sizes: null, slot: null, span: p, spellCheck: m, src: null, srcDoc: null, srcLang: null, srcSet: y, start: p, step: null, style: null, tabIndex: p, target: null, title: null, translate: null, type: null, typeMustMatch: c, useMap: null, value: m, width: p, wrap: null, align: null, aLink: null, archive: h, axis: null, background: null, bgColor: null, border: p, borderColor: null, bottomMargin: p, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: c, declare: c, event: null, face: null, frame: null, frameBorder: null, hSpace: p, leftMargin: p, link: null, longDesc: null, lowSrc: null, marginHeight: p, marginWidth: p, noResize: c, noHref: c, noShade: c, noWrap: c, object: null, profile: null, prompt: null, rev: null, rightMargin: p, rules: null, scheme: null, scrolling: m, standby: null, summary: null, text: null, topMargin: p, valueType: null, version: null, vAlign: null, vLink: null, vSpace: p, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: c, disableRemotePlayback: c, prefix: null, property: null, results: p, security: null, unselectable: null } });
} }), Ob = be({ "../../node_modules/property-information/html.js"(e, r) {
  var a = xb(), l = wb(), i = Sb(), c = Cb(), d = kb(), m = _b();
  r.exports = a([i, l, c, d, m]);
} }), Tb = be({ "../../node_modules/property-information/find.js"(e, r) {
  var a = I0(), l = X5(), i = Y5(), c = "data";
  r.exports = h;
  var d = /^data[-\w.:]+$/i, m = /-[a-z]/g, p = /[A-Z]/g;
  function h(E, b) {
    var C = a(b), A = b, T = i;
    return C in E.normal ? E.property[E.normal[C]] : (C.length > 4 && C.slice(0, 4) === c && d.test(b) && (b.charAt(4) === "-" ? A = y(b) : b = w(b), T = l), new T(A, b));
  }
  function y(E) {
    var b = E.slice(5).replace(m, v);
    return c + b.charAt(0).toUpperCase() + b.slice(1);
  }
  function w(E) {
    var b = E.slice(4);
    return m.test(b) ? E : (b = b.replace(p, x), b.charAt(0) !== "-" && (b = "-" + b), c + b);
  }
  function x(E) {
    return "-" + E.toLowerCase();
  }
  function v(E) {
    return E.charAt(1).toUpperCase();
  }
} }), Fb = be({ "../../node_modules/hast-util-parse-selector/index.js"(e, r) {
  r.exports = l;
  var a = /[#.]/g;
  function l(i, c) {
    for (var d = i || "", m = c || "div", p = {}, h = 0, y, w, x; h < d.length; )
      a.lastIndex = h, x = a.exec(d), y = d.slice(h, x ? x.index : d.length), y && (w ? w === "#" ? p.id = y : p.className ? p.className.push(y) : p.className = [y] : m = y, h += y.length), x && (w = x[0], h++);
    return { type: "element", tagName: m, properties: p, children: [] };
  }
} }), Rb = be({ "../../node_modules/space-separated-tokens/index.js"(e) {
  e.parse = i, e.stringify = c;
  var r = "", a = " ", l = /[ \t\n\r\f]+/g;
  function i(d) {
    var m = String(d || r).trim();
    return m === r ? [] : m.split(l);
  }
  function c(d) {
    return d.join(a).trim();
  }
} }), Lb = be({ "../../node_modules/comma-separated-tokens/index.js"(e) {
  e.parse = i, e.stringify = c;
  var r = ",", a = " ", l = "";
  function i(d) {
    for (var m = [], p = String(d || l), h = p.indexOf(r), y = 0, w = !1, x; !w; )
      h === -1 && (h = p.length, w = !0), x = p.slice(y, h).trim(), (x || !w) && m.push(x), y = h + 1, h = p.indexOf(r, y);
    return m;
  }
  function c(d, m) {
    var p = m || {}, h = p.padLeft === !1 ? l : a, y = p.padRight ? a : l;
    return d[d.length - 1] === l && (d = d.concat(l)), d.join(y + r + h).trim();
  }
} }), Db = be({ "../../node_modules/hastscript/factory.js"(e, r) {
  var a = Tb(), l = I0(), i = Fb(), c = Rb().parse, d = Lb().parse;
  r.exports = p;
  var m = {}.hasOwnProperty;
  function p(C, A, T) {
    var k = T ? b(T) : null;
    return _;
    function _(L, $) {
      var M = i(L, A), j = Array.prototype.slice.call(arguments, 2), Z = M.tagName.toLowerCase(), V;
      if (M.tagName = k && m.call(k, Z) ? k[Z] : Z, $ && h($, M) && (j.unshift($), $ = null), $)
        for (V in $)
          O(M.properties, V, $[V]);
      return w(M.children, j), M.tagName === "template" && (M.content = { type: "root", children: M.children }, M.children = []), M;
    }
    function O(L, $, M) {
      var j, Z, V;
      M == null || M !== M || (j = a(C, $), Z = j.property, V = M, typeof V == "string" && (j.spaceSeparated ? V = c(V) : j.commaSeparated ? V = d(V) : j.commaOrSpaceSeparated && (V = c(d(V).join(" ")))), Z === "style" && typeof M != "string" && (V = E(V)), Z === "className" && L.className && (V = L.className.concat(V)), L[Z] = x(j, Z, V));
    }
  }
  function h(C, A) {
    return typeof C == "string" || "length" in C || y(A.tagName, C);
  }
  function y(C, A) {
    var T = A.type;
    return C === "input" || !T || typeof T != "string" ? !1 : typeof A.children == "object" && "length" in A.children ? !0 : (T = T.toLowerCase(), C === "button" ? T !== "menu" && T !== "submit" && T !== "reset" && T !== "button" : "value" in A);
  }
  function w(C, A) {
    var T, k;
    if (typeof A == "string" || typeof A == "number") {
      C.push({ type: "text", value: String(A) });
      return;
    }
    if (typeof A == "object" && "length" in A) {
      for (T = -1, k = A.length; ++T < k; )
        w(C, A[T]);
      return;
    }
    if (typeof A != "object" || !("type" in A))
      throw new Error("Expected node, nodes, or string, got `" + A + "`");
    C.push(A);
  }
  function x(C, A, T) {
    var k, _, O;
    if (typeof T != "object" || !("length" in T))
      return v(C, A, T);
    for (_ = T.length, k = -1, O = []; ++k < _; )
      O[k] = v(C, A, T[k]);
    return O;
  }
  function v(C, A, T) {
    var k = T;
    return C.number || C.positiveNumber ? !isNaN(k) && k !== "" && (k = Number(k)) : (C.boolean || C.overloadedBoolean) && typeof k == "string" && (k === "" || l(T) === l(A)) && (k = !0), k;
  }
  function E(C) {
    var A = [], T;
    for (T in C)
      A.push([T, C[T]].join(": "));
    return A.join("; ");
  }
  function b(C) {
    for (var A = C.length, T = -1, k = {}, _; ++T < A; )
      _ = C[T], k[_.toLowerCase()] = _;
    return k;
  }
} }), Mb = be({ "../../node_modules/hastscript/html.js"(e, r) {
  var a = Ob(), l = Db(), i = l(a, "div");
  i.displayName = "html", r.exports = i;
} }), $b = be({ "../../node_modules/hastscript/index.js"(e, r) {
  r.exports = Mb();
} }), Bb = be({ "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(e, r) {
  r.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
} }), Ib = be({ "../../node_modules/character-reference-invalid/index.json"(e, r) {
  r.exports = { 0: "�", 128: "€", 130: "‚", 131: "ƒ", 132: "„", 133: "…", 134: "†", 135: "‡", 136: "ˆ", 137: "‰", 138: "Š", 139: "‹", 140: "Œ", 142: "Ž", 145: "‘", 146: "’", 147: "“", 148: "”", 149: "•", 150: "–", 151: "—", 152: "˜", 153: "™", 154: "š", 155: "›", 156: "œ", 158: "ž", 159: "Ÿ" };
} }), J5 = be({ "../../node_modules/is-decimal/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var i = typeof l == "string" ? l.charCodeAt(0) : l;
    return i >= 48 && i <= 57;
  }
} }), Pb = be({ "../../node_modules/is-hexadecimal/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var i = typeof l == "string" ? l.charCodeAt(0) : l;
    return i >= 97 && i <= 102 || i >= 65 && i <= 70 || i >= 48 && i <= 57;
  }
} }), Nb = be({ "../../node_modules/is-alphabetical/index.js"(e, r) {
  r.exports = a;
  function a(l) {
    var i = typeof l == "string" ? l.charCodeAt(0) : l;
    return i >= 97 && i <= 122 || i >= 65 && i <= 90;
  }
} }), jb = be({ "../../node_modules/is-alphanumerical/index.js"(e, r) {
  var a = Nb(), l = J5();
  r.exports = i;
  function i(c) {
    return a(c) || l(c);
  }
} }), Hb = be({ "../../node_modules/parse-entities/node_modules/character-entities/index.json"(e, r) {
  r.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
} }), Zb = be({ "../../node_modules/parse-entities/decode-entity.js"(e, r) {
  var a = Hb();
  r.exports = i;
  var l = {}.hasOwnProperty;
  function i(c) {
    return l.call(a, c) ? a[c] : !1;
  }
} }), zb = be({ "../../node_modules/parse-entities/index.js"(e, r) {
  var a = Bb(), l = Ib(), i = J5(), c = Pb(), d = jb(), m = Zb();
  r.exports = U;
  var p = {}.hasOwnProperty, h = String.fromCharCode, y = Function.prototype, w = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: !1, nonTerminated: !0 }, x = 9, v = 10, E = 12, b = 32, C = 38, A = 59, T = 60, k = 61, _ = 35, O = 88, L = 120, $ = 65533, M = "named", j = "hexadecimal", Z = "decimal", V = {};
  V[j] = 16, V[Z] = 10;
  var Q = {};
  Q[M] = d, Q[Z] = i, Q[j] = c;
  var Y = 1, pe = 2, J = 3, re = 4, ae = 5, q = 6, W = 7, F = {};
  F[Y] = "Named character references must be terminated by a semicolon", F[pe] = "Numeric character references must be terminated by a semicolon", F[J] = "Named character references cannot be empty", F[re] = "Numeric character references cannot be empty", F[ae] = "Named character references must be known", F[q] = "Numeric character references cannot be disallowed", F[W] = "Numeric character references cannot be outside the permissible Unicode range";
  function U(te, le) {
    var fe = {}, ve, Oe;
    le || (le = {});
    for (Oe in w)
      ve = le[Oe], fe[Oe] = ve ?? w[Oe];
    return (fe.position.indent || fe.position.start) && (fe.indent = fe.position.indent || [], fe.position = fe.position.start), ne(te, fe);
  }
  function ne(te, le) {
    var fe = le.additional, ve = le.nonTerminated, Oe = le.text, lr = le.reference, rt = le.warning, $t = le.textContext, se = le.referenceContext, ht = le.warningContext, Bt = le.position, yr = le.indent || [], vr = te.length, It = 0, Qr = -1, ze = Bt.column || 1, bt = Bt.line || 1, Et = "", Br = [], Pt, Ir, Nt, We, ut, Ve, Fe, st, aa, oa, br, Rn, ir, jt, la, Pr, Jr, nt, De;
    for (typeof fe == "string" && (fe = fe.charCodeAt(0)), Pr = en(), st = rt ? pl : y, It--, vr++; ++It < vr; )
      if (ut === v && (ze = yr[Qr] || 1), ut = te.charCodeAt(It), ut === C) {
        if (Fe = te.charCodeAt(It + 1), Fe === x || Fe === v || Fe === E || Fe === b || Fe === C || Fe === T || Fe !== Fe || fe && Fe === fe) {
          Et += h(ut), ze++;
          continue;
        }
        for (ir = It + 1, Rn = ir, De = ir, Fe === _ ? (De = ++Rn, Fe = te.charCodeAt(De), Fe === O || Fe === L ? (jt = j, De = ++Rn) : jt = Z) : jt = M, Pt = "", br = "", We = "", la = Q[jt], De--; ++De < vr && (Fe = te.charCodeAt(De), !!la(Fe)); )
          We += h(Fe), jt === M && p.call(a, We) && (Pt = We, br = a[We]);
        Nt = te.charCodeAt(De) === A, Nt && (De++, Ir = jt === M ? m(We) : !1, Ir && (Pt = We, br = Ir)), nt = 1 + De - ir, !Nt && !ve || (We ? jt === M ? (Nt && !br ? st(ae, 1) : (Pt !== We && (De = Rn + Pt.length, nt = 1 + De - Rn, Nt = !1), Nt || (aa = Pt ? Y : J, le.attribute ? (Fe = te.charCodeAt(De), Fe === k ? (st(aa, nt), br = null) : d(Fe) ? br = null : st(aa, nt)) : st(aa, nt))), Ve = br) : (Nt || st(pe, nt), Ve = parseInt(We, V[jt]), ce(Ve) ? (st(W, nt), Ve = h($)) : Ve in l ? (st(q, nt), Ve = l[Ve]) : (oa = "", ue(Ve) && st(q, nt), Ve > 65535 && (Ve -= 65536, oa += h(Ve >>> 10 | 55296), Ve = 56320 | Ve & 1023), Ve = oa + h(Ve))) : jt !== M && st(re, nt)), Ve ? (Ka(), Pr = en(), It = De - 1, ze += De - ir + 1, Br.push(Ve), Jr = en(), Jr.offset++, lr && lr.call(se, Ve, { start: Pr, end: Jr }, te.slice(ir - 1, De)), Pr = Jr) : (We = te.slice(ir - 1, De), Et += We, ze += We.length, It = De - 1);
      } else
        ut === 10 && (bt++, Qr++, ze = 0), ut === ut ? (Et += h(ut), ze++) : Ka();
    return Br.join("");
    function en() {
      return { line: bt, column: ze, offset: It + (Bt.offset || 0) };
    }
    function pl(Ya, Xa) {
      var Ln = en();
      Ln.column += Xa, Ln.offset += Xa, rt.call(ht, F[Ya], Ln, Ya);
    }
    function Ka() {
      Et && (Br.push(Et), Oe && Oe.call($t, Et, { start: Pr, end: en() }), Et = "");
    }
  }
  function ce(te) {
    return te >= 55296 && te <= 57343 || te > 1114111;
  }
  function ue(te) {
    return te >= 1 && te <= 8 || te === 11 || te >= 13 && te <= 31 || te >= 127 && te <= 159 || te >= 64976 && te <= 65007 || (te & 65535) === 65535 || (te & 65535) === 65534;
  }
} }), Vb = be({ "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(e, r) {
  var a = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, l = function(i) {
    var c = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, d = 0, m = {}, p = { manual: i.Prism && i.Prism.manual, disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler, util: { encode: function k(_) {
      return _ instanceof h ? new h(_.type, k(_.content), _.alias) : Array.isArray(_) ? _.map(k) : _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(k) {
      return Object.prototype.toString.call(k).slice(8, -1);
    }, objId: function(k) {
      return k.__id || Object.defineProperty(k, "__id", { value: ++d }), k.__id;
    }, clone: function k(_, O) {
      O = O || {};
      var L, $;
      switch (p.util.type(_)) {
        case "Object":
          if ($ = p.util.objId(_), O[$])
            return O[$];
          L = {}, O[$] = L;
          for (var M in _)
            _.hasOwnProperty(M) && (L[M] = k(_[M], O));
          return L;
        case "Array":
          return $ = p.util.objId(_), O[$] ? O[$] : (L = [], O[$] = L, _.forEach(function(j, Z) {
            L[Z] = k(j, O);
          }), L);
        default:
          return _;
      }
    }, getLanguage: function(k) {
      for (; k; ) {
        var _ = c.exec(k.className);
        if (_)
          return _[1].toLowerCase();
        k = k.parentElement;
      }
      return "none";
    }, setLanguage: function(k, _) {
      k.className = k.className.replace(RegExp(c, "gi"), ""), k.classList.add("language-" + _);
    }, currentScript: function() {
      if (typeof document > "u")
        return null;
      if ("currentScript" in document && 1 < 2)
        return document.currentScript;
      try {
        throw new Error();
      } catch (L) {
        var k = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack) || [])[1];
        if (k) {
          var _ = document.getElementsByTagName("script");
          for (var O in _)
            if (_[O].src == k)
              return _[O];
        }
        return null;
      }
    }, isActive: function(k, _, O) {
      for (var L = "no-" + _; k; ) {
        var $ = k.classList;
        if ($.contains(_))
          return !0;
        if ($.contains(L))
          return !1;
        k = k.parentElement;
      }
      return !!O;
    } }, languages: { plain: m, plaintext: m, text: m, txt: m, extend: function(k, _) {
      var O = p.util.clone(p.languages[k]);
      for (var L in _)
        O[L] = _[L];
      return O;
    }, insertBefore: function(k, _, O, L) {
      L = L || p.languages;
      var $ = L[k], M = {};
      for (var j in $)
        if ($.hasOwnProperty(j)) {
          if (j == _)
            for (var Z in O)
              O.hasOwnProperty(Z) && (M[Z] = O[Z]);
          O.hasOwnProperty(j) || (M[j] = $[j]);
        }
      var V = L[k];
      return L[k] = M, p.languages.DFS(p.languages, function(Q, Y) {
        Y === V && Q != k && (this[Q] = M);
      }), M;
    }, DFS: function k(_, O, L, $) {
      $ = $ || {};
      var M = p.util.objId;
      for (var j in _)
        if (_.hasOwnProperty(j)) {
          O.call(_, j, _[j], L || j);
          var Z = _[j], V = p.util.type(Z);
          V === "Object" && !$[M(Z)] ? ($[M(Z)] = !0, k(Z, O, null, $)) : V === "Array" && !$[M(Z)] && ($[M(Z)] = !0, k(Z, O, j, $));
        }
    } }, plugins: {}, highlightAll: function(k, _) {
      p.highlightAllUnder(document, k, _);
    }, highlightAllUnder: function(k, _, O) {
      var L = { callback: O, container: k, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      p.hooks.run("before-highlightall", L), L.elements = Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)), p.hooks.run("before-all-elements-highlight", L);
      for (var $ = 0, M; M = L.elements[$++]; )
        p.highlightElement(M, _ === !0, L.callback);
    }, highlightElement: function(k, _, O) {
      var L = p.util.getLanguage(k), $ = p.languages[L];
      p.util.setLanguage(k, L);
      var M = k.parentElement;
      M && M.nodeName.toLowerCase() === "pre" && p.util.setLanguage(M, L);
      var j = k.textContent, Z = { element: k, language: L, grammar: $, code: j };
      function V(Y) {
        Z.highlightedCode = Y, p.hooks.run("before-insert", Z), Z.element.innerHTML = Z.highlightedCode, p.hooks.run("after-highlight", Z), p.hooks.run("complete", Z), O && O.call(Z.element);
      }
      if (p.hooks.run("before-sanity-check", Z), M = Z.element.parentElement, M && M.nodeName.toLowerCase() === "pre" && !M.hasAttribute("tabindex") && M.setAttribute("tabindex", "0"), !Z.code) {
        p.hooks.run("complete", Z), O && O.call(Z.element);
        return;
      }
      if (p.hooks.run("before-highlight", Z), !Z.grammar) {
        V(p.util.encode(Z.code));
        return;
      }
      if (_ && i.Worker) {
        var Q = new Worker(p.filename);
        Q.onmessage = function(Y) {
          V(Y.data);
        }, Q.postMessage(JSON.stringify({ language: Z.language, code: Z.code, immediateClose: !0 }));
      } else
        V(p.highlight(Z.code, Z.grammar, Z.language));
    }, highlight: function(k, _, O) {
      var L = { code: k, grammar: _, language: O };
      if (p.hooks.run("before-tokenize", L), !L.grammar)
        throw new Error('The language "' + L.language + '" has no grammar.');
      return L.tokens = p.tokenize(L.code, L.grammar), p.hooks.run("after-tokenize", L), h.stringify(p.util.encode(L.tokens), L.language);
    }, tokenize: function(k, _) {
      var O = _.rest;
      if (O) {
        for (var L in O)
          _[L] = O[L];
        delete _.rest;
      }
      var $ = new x();
      return v($, $.head, k), w(k, $, _, $.head, 0), b($);
    }, hooks: { all: {}, add: function(k, _) {
      var O = p.hooks.all;
      O[k] = O[k] || [], O[k].push(_);
    }, run: function(k, _) {
      var O = p.hooks.all[k];
      if (!(!O || !O.length))
        for (var L = 0, $; $ = O[L++]; )
          $(_);
    } }, Token: h };
    i.Prism = p;
    function h(k, _, O, L) {
      this.type = k, this.content = _, this.alias = O, this.length = (L || "").length | 0;
    }
    h.stringify = function k(_, O) {
      if (typeof _ == "string")
        return _;
      if (Array.isArray(_)) {
        var L = "";
        return _.forEach(function(V) {
          L += k(V, O);
        }), L;
      }
      var $ = { type: _.type, content: k(_.content, O), tag: "span", classes: ["token", _.type], attributes: {}, language: O }, M = _.alias;
      M && (Array.isArray(M) ? Array.prototype.push.apply($.classes, M) : $.classes.push(M)), p.hooks.run("wrap", $);
      var j = "";
      for (var Z in $.attributes)
        j += " " + Z + '="' + ($.attributes[Z] || "").replace(/"/g, "&quot;") + '"';
      return "<" + $.tag + ' class="' + $.classes.join(" ") + '"' + j + ">" + $.content + "</" + $.tag + ">";
    };
    function y(k, _, O, L) {
      k.lastIndex = _;
      var $ = k.exec(O);
      if ($ && L && $[1]) {
        var M = $[1].length;
        $.index += M, $[0] = $[0].slice(M);
      }
      return $;
    }
    function w(k, _, O, L, $, M) {
      for (var j in O)
        if (!(!O.hasOwnProperty(j) || !O[j])) {
          var Z = O[j];
          Z = Array.isArray(Z) ? Z : [Z];
          for (var V = 0; V < Z.length; ++V) {
            if (M && M.cause == j + "," + V)
              return;
            var Q = Z[V], Y = Q.inside, pe = !!Q.lookbehind, J = !!Q.greedy, re = Q.alias;
            if (J && !Q.pattern.global) {
              var ae = Q.pattern.toString().match(/[imsuy]*$/)[0];
              Q.pattern = RegExp(Q.pattern.source, ae + "g");
            }
            for (var q = Q.pattern || Q, W = L.next, F = $; W !== _.tail && !(M && F >= M.reach); F += W.value.length, W = W.next) {
              var U = W.value;
              if (_.length > k.length)
                return;
              if (!(U instanceof h)) {
                var ne = 1, ce;
                if (J) {
                  if (ce = y(q, F, k, pe), !ce || ce.index >= k.length)
                    break;
                  var fe = ce.index, ue = ce.index + ce[0].length, te = F;
                  for (te += W.value.length; fe >= te; )
                    W = W.next, te += W.value.length;
                  if (te -= W.value.length, F = te, W.value instanceof h)
                    continue;
                  for (var le = W; le !== _.tail && (te < ue || typeof le.value == "string"); le = le.next)
                    ne++, te += le.value.length;
                  ne--, U = k.slice(F, te), ce.index -= F;
                } else if (ce = y(q, 0, U, pe), !ce)
                  continue;
                var fe = ce.index, ve = ce[0], Oe = U.slice(0, fe), lr = U.slice(fe + ve.length), rt = F + U.length;
                M && rt > M.reach && (M.reach = rt);
                var $t = W.prev;
                Oe && ($t = v(_, $t, Oe), F += Oe.length), E(_, $t, ne);
                var se = new h(j, Y ? p.tokenize(ve, Y) : ve, re, ve);
                if (W = v(_, $t, se), lr && v(_, W, lr), ne > 1) {
                  var ht = { cause: j + "," + V, reach: rt };
                  w(k, _, O, W.prev, F, ht), M && ht.reach > M.reach && (M.reach = ht.reach);
                }
              }
            }
          }
        }
    }
    function x() {
      var k = { value: null, prev: null, next: null }, _ = { value: null, prev: k, next: null };
      k.next = _, this.head = k, this.tail = _, this.length = 0;
    }
    function v(k, _, O) {
      var L = _.next, $ = { value: O, prev: _, next: L };
      return _.next = $, L.prev = $, k.length++, $;
    }
    function E(k, _, O) {
      for (var L = _.next, $ = 0; $ < O && L !== k.tail; $++)
        L = L.next;
      _.next = L, L.prev = _, k.length -= $;
    }
    function b(k) {
      for (var _ = [], O = k.head.next; O !== k.tail; )
        _.push(O.value), O = O.next;
      return _;
    }
    if (!i.document)
      return i.addEventListener && (p.disableWorkerMessageHandler || i.addEventListener("message", function(k) {
        var _ = JSON.parse(k.data), O = _.language, L = _.code, $ = _.immediateClose;
        i.postMessage(p.highlight(L, p.languages[O], O)), $ && i.close();
      }, !1)), p;
    var C = p.util.currentScript();
    C && (p.filename = C.src, C.hasAttribute("data-manual") && (p.manual = !0));
    function A() {
      p.manual || p.highlightAll();
    }
    if (!p.manual) {
      var T = document.readyState;
      T === "loading" || T === "interactive" && C && C.defer ? document.addEventListener("DOMContentLoaded", A) : window.requestAnimationFrame ? window.requestAnimationFrame(A) : window.setTimeout(A, 16);
    }
    return p;
  }(a);
  typeof r < "u" && r.exports && (r.exports = l), typeof global < "u" && (global.Prism = l);
} }), Ub = be({ "../../node_modules/refractor/core.js"(e, r) {
  var a = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, l = $();
  a.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var i = $b(), c = zb(), d = Vb(), m = W5(), p = G5(), h = vb(), y = bb();
  l();
  var w = {}.hasOwnProperty;
  function x() {
  }
  x.prototype = d;
  var v = new x();
  r.exports = v, v.highlight = C, v.register = E, v.alias = b, v.registered = A, v.listLanguages = T, E(m), E(p), E(h), E(y), v.util.encode = O, v.Token.stringify = k;
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
  function C(M, j) {
    var Z = d.highlight, V;
    if (typeof M != "string")
      throw new Error("Expected `string` for `value`, got `" + M + "`");
    if (v.util.type(j) === "Object")
      V = j, j = null;
    else {
      if (typeof j != "string")
        throw new Error("Expected `string` for `name`, got `" + j + "`");
      if (w.call(v.languages, j))
        V = v.languages[j];
      else
        throw new Error("Unknown language: `" + j + "` is not registered");
    }
    return Z.call(this, M, V, j);
  }
  function A(M) {
    if (typeof M != "string")
      throw new Error("Expected `string` for `language`, got `" + M + "`");
    return w.call(v.languages, M);
  }
  function T() {
    var M = v.languages, j = [], Z;
    for (Z in M)
      w.call(M, Z) && typeof M[Z] == "object" && j.push(Z);
    return j;
  }
  function k(M, j, Z) {
    var V;
    return typeof M == "string" ? { type: "text", value: M } : v.util.type(M) === "Array" ? _(M, j) : (V = { type: M.type, content: v.Token.stringify(M.content, j, Z), tag: "span", classes: ["token", M.type], attributes: {}, language: j, parent: Z }, M.alias && (V.classes = V.classes.concat(M.alias)), v.hooks.run("wrap", V), i(V.tag + "." + V.classes.join("."), L(V.attributes), V.content));
  }
  function _(M, j) {
    for (var Z = [], V = M.length, Q = -1, Y; ++Q < V; )
      Y = M[Q], Y !== "" && Y !== null && Y !== void 0 && Z.push(Y);
    for (Q = -1, V = Z.length; ++Q < V; )
      Y = Z[Q], Z[Q] = v.Token.stringify(Y, j, Z);
    return Z;
  }
  function O(M) {
    return M;
  }
  function L(M) {
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
} });
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, _t.apply(this, arguments);
}
var qb = be({ "../../node_modules/refractor/lang/bash.js"(e, r) {
  r.exports = a, a.displayName = "bash", a.aliases = ["shell"];
  function a(l) {
    (function(i) {
      var c = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", d = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null }, m = { bash: d, environment: { pattern: RegExp("\\$" + c), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + c), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/ };
      i.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + c), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: m }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: d } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: m }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: m.entity } }], environment: { pattern: RegExp("\\$?" + c), alias: "constant" }, variable: m.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }, d.inside = i.languages.bash;
      for (var p = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], h = m.variable[1].inside, y = 0; y < p.length; y++)
        h[p[y]] = i.languages.bash[p[y]];
      i.languages.shell = i.languages.bash;
    })(l);
  }
} }), Wb = be({ "../../node_modules/refractor/lang/js-extras.js"(e, r) {
  r.exports = a, a.displayName = "jsExtras", a.aliases = [];
  function a(l) {
    (function(i) {
      i.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + i.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), i.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + i.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), i.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] });
      function c(w, x) {
        return RegExp(w.replace(/<ID>/g, function() {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }), x);
      }
      i.languages.insertBefore("javascript", "keyword", { imports: { pattern: c(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: i.languages.javascript }, exports: { pattern: c(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: i.languages.javascript } }), i.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), i.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), i.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: c(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
      for (var d = ["function", "function-variable", "method", "method-variable", "property-access"], m = 0; m < d.length; m++) {
        var p = d[m], h = i.languages.javascript[p];
        i.util.type(h) === "RegExp" && (h = i.languages.javascript[p] = { pattern: h });
        var y = h.inside || {};
        h.inside = y, y["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(l);
  }
} }), Gb = be({ "../../node_modules/refractor/lang/json.js"(e, r) {
  r.exports = a, a.displayName = "json", a.aliases = ["webmanifest"];
  function a(l) {
    l.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, l.languages.webmanifest = l.languages.json;
  }
} }), Kb = be({ "../../node_modules/refractor/lang/graphql.js"(e, r) {
  r.exports = a, a.displayName = "graphql", a.aliases = [];
  function a(l) {
    l.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: l.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, l.hooks.add("after-tokenize", function(i) {
      if (i.language !== "graphql")
        return;
      var c = i.tokens.filter(function(T) {
        return typeof T != "string" && T.type !== "comment" && T.type !== "scalar";
      }), d = 0;
      function m(T) {
        return c[d + T];
      }
      function p(T, k) {
        k = k || 0;
        for (var _ = 0; _ < T.length; _++) {
          var O = m(_ + k);
          if (!O || O.type !== T[_])
            return !1;
        }
        return !0;
      }
      function h(T, k) {
        for (var _ = 1, O = d; O < c.length; O++) {
          var L = c[O], $ = L.content;
          if (L.type === "punctuation" && typeof $ == "string") {
            if (T.test($))
              _++;
            else if (k.test($) && (_--, _ === 0))
              return O;
          }
        }
        return -1;
      }
      function y(T, k) {
        var _ = T.alias;
        _ ? Array.isArray(_) || (T.alias = _ = [_]) : T.alias = _ = [], _.push(k);
      }
      for (; d < c.length; ) {
        var w = c[d++];
        if (w.type === "keyword" && w.content === "mutation") {
          var x = [];
          if (p(["definition-mutation", "punctuation"]) && m(1).content === "(") {
            d += 2;
            var v = h(/^\($/, /^\)$/);
            if (v === -1)
              continue;
            for (; d < v; d++) {
              var E = m(0);
              E.type === "variable" && (y(E, "variable-input"), x.push(E.content));
            }
            d = v + 1;
          }
          if (p(["punctuation", "property-query"]) && m(0).content === "{" && (d++, y(m(0), "property-mutation"), x.length > 0)) {
            var b = h(/^\{$/, /^\}$/);
            if (b === -1)
              continue;
            for (var C = d; C < b; C++) {
              var A = c[C];
              A.type === "variable" && x.indexOf(A.content) >= 0 && y(A, "variable-input");
            }
          }
        }
      }
    });
  }
} });
const { logger: Yb } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var Xb = Wt(q5()), Qb = Xb.default, Jb = Wt(qb()), e7 = Jb.default, t7 = Wt(G5()), r7 = t7.default, n7 = Wt(Wb()), a7 = n7.default, o7 = Wt(Gb()), l7 = o7.default, i7 = Wt(Kb()), u7 = i7.default, s7 = Wt(W5()), c7 = s7.default, d7 = Wt(gb()), p7 = d7.default, f7 = Wt(hb()), m7 = f7.default, g7 = Wt(yb()), h7 = g7.default, y7 = Wt(U5()), v7 = y7.default;
function b7(e, r) {
  if (e == null)
    return {};
  var a = B0(e, r), l, i;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (i = 0; i < c.length; i++)
      l = c[i], !(r.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
  }
  return a;
}
function e0(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var a = 0, l = new Array(r); a < r; a++)
    l[a] = e[a];
  return l;
}
function E7(e) {
  if (Array.isArray(e))
    return e0(e);
}
function x7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function w7(e, r) {
  if (e) {
    if (typeof e == "string")
      return e0(e, r);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return e0(e, r);
  }
}
function S7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A7(e) {
  return E7(e) || x7(e) || w7(e) || S7();
}
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ko(e);
}
function C7(e, r) {
  if (Ko(e) !== "object" || e === null)
    return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var l = a.call(e, r || "default");
    if (Ko(l) !== "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function k7(e) {
  var r = C7(e, "string");
  return Ko(r) === "symbol" ? r : String(r);
}
function em(e, r, a) {
  return r = k7(r), r in e ? Object.defineProperty(e, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = a, e;
}
function Pf(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    r && (l = l.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, l);
  }
  return a;
}
function Ra(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Pf(Object(a), !0).forEach(function(l) {
      em(e, l, a[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Pf(Object(a)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
    });
  }
  return e;
}
function _7(e) {
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
var bc = {};
function O7(e) {
  if (e.length === 0 || e.length === 1)
    return e;
  var r = e.join(".");
  return bc[r] || (bc[r] = _7(e)), bc[r];
}
function T7(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, l = e.filter(function(c) {
    return c !== "token";
  }), i = O7(l);
  return i.reduce(function(c, d) {
    return Ra(Ra({}, c), a[d]);
  }, r);
}
function Nf(e) {
  return e.join(" ");
}
function F7(e, r) {
  var a = 0;
  return function(l) {
    return a += 1, l.map(function(i, c) {
      return N0({ node: i, stylesheet: e, useInlineStyles: r, key: "code-segment-".concat(a, "-").concat(c) });
    });
  };
}
function N0(e) {
  var r = e.node, a = e.stylesheet, l = e.style, i = l === void 0 ? {} : l, c = e.useInlineStyles, d = e.key, m = r.properties, p = r.type, h = r.tagName, y = r.value;
  if (p === "text")
    return y;
  if (h) {
    var w = F7(a, c), x;
    if (!c)
      x = Ra(Ra({}, m), {}, { className: Nf(m.className) });
    else {
      var v = Object.keys(a).reduce(function(A, T) {
        return T.split(".").forEach(function(k) {
          A.includes(k) || A.push(k);
        }), A;
      }, []), E = m.className && m.className.includes("token") ? ["token"] : [], b = m.className && E.concat(m.className.filter(function(A) {
        return !v.includes(A);
      }));
      x = Ra(Ra({}, m), {}, { className: Nf(b) || void 0, style: T7(m.className, Object.assign({}, m.style, i), a) });
    }
    var C = w(r.children);
    return u.createElement(h, _t({ key: d }, x), C);
  }
}
var R7 = function(e, r) {
  var a = e.listLanguages();
  return a.indexOf(r) !== -1;
}, L7 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function jf(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    r && (l = l.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, l);
  }
  return a;
}
function Or(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? jf(Object(a), !0).forEach(function(l) {
      em(e, l, a[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : jf(Object(a)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l));
    });
  }
  return e;
}
var D7 = /\n/g;
function M7(e) {
  return e.match(D7);
}
function $7(e) {
  var r = e.lines, a = e.startingLineNumber, l = e.style;
  return r.map(function(i, c) {
    var d = c + a;
    return u.createElement("span", { key: "line-".concat(c), className: "react-syntax-highlighter-line-number", style: typeof l == "function" ? l(d) : l }, "".concat(d, `
`));
  });
}
function B7(e) {
  var r = e.codeString, a = e.codeStyle, l = e.containerStyle, i = l === void 0 ? { float: "left", paddingRight: "10px" } : l, c = e.numberStyle, d = c === void 0 ? {} : c, m = e.startingLineNumber;
  return u.createElement("code", { style: Object.assign({}, a, i) }, $7({ lines: r.replace(/\n$/, "").split(`
`), style: d, startingLineNumber: m }));
}
function I7(e) {
  return "".concat(e.toString().length, ".25em");
}
function tm(e, r) {
  return { type: "element", tagName: "span", properties: { key: "line-number--".concat(e), className: ["comment", "linenumber", "react-syntax-highlighter-line-number"], style: r }, children: [{ type: "text", value: e }] };
}
function rm(e, r, a) {
  var l = { display: "inline-block", minWidth: I7(a), paddingRight: "1em", textAlign: "right", userSelect: "none" }, i = typeof e == "function" ? e(r) : e, c = Or(Or({}, l), i);
  return c;
}
function Li(e) {
  var r = e.children, a = e.lineNumber, l = e.lineNumberStyle, i = e.largestLineNumber, c = e.showInlineLineNumbers, d = e.lineProps, m = d === void 0 ? {} : d, p = e.className, h = p === void 0 ? [] : p, y = e.showLineNumbers, w = e.wrapLongLines, x = typeof m == "function" ? m(a) : m;
  if (x.className = h, a && c) {
    var v = rm(l, a, i);
    r.unshift(tm(a, v));
  }
  return w & y && (x.style = Or(Or({}, x.style), {}, { display: "flex" })), { type: "element", tagName: "span", properties: x, children: r };
}
function nm(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], l = 0; l < e.length; l++) {
    var i = e[l];
    if (i.type === "text")
      a.push(Li({ children: [i], className: A7(new Set(r)) }));
    else if (i.children) {
      var c = r.concat(i.properties.className);
      nm(i.children, c).forEach(function(d) {
        return a.push(d);
      });
    }
  }
  return a;
}
function P7(e, r, a, l, i, c, d, m, p) {
  var h, y = nm(e.value), w = [], x = -1, v = 0;
  function E(O, L) {
    var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Li({ children: O, lineNumber: L, lineNumberStyle: m, largestLineNumber: d, showInlineLineNumbers: i, lineProps: a, className: $, showLineNumbers: l, wrapLongLines: p });
  }
  function b(O, L) {
    if (l && L && i) {
      var $ = rm(m, L, d);
      O.unshift(tm(L, $));
    }
    return O;
  }
  function C(O, L) {
    var $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return r || $.length > 0 ? E(O, L, $) : b(O, L);
  }
  for (var A = function() {
    var O = y[v], L = O.children[0].value, $ = M7(L);
    if ($) {
      var M = L.split(`
`);
      M.forEach(function(j, Z) {
        var V = l && w.length + c, Q = { type: "text", value: "".concat(j, `
`) };
        if (Z === 0) {
          var Y = y.slice(x + 1, v).concat(Li({ children: [Q], className: O.properties.className })), pe = C(Y, V);
          w.push(pe);
        } else if (Z === M.length - 1) {
          var J = y[v + 1] && y[v + 1].children && y[v + 1].children[0], re = { type: "text", value: "".concat(j) };
          if (J) {
            var ae = Li({ children: [re], className: O.properties.className });
            y.splice(v + 1, 0, ae);
          } else {
            var q = [re], W = C(q, V, O.properties.className);
            w.push(W);
          }
        } else {
          var F = [Q], U = C(F, V, O.properties.className);
          w.push(U);
        }
      }), x = v;
    }
    v++;
  }; v < y.length; )
    A();
  if (x !== y.length - 1) {
    var T = y.slice(x + 1, y.length);
    if (T && T.length) {
      var k = l && w.length + c, _ = C(T, k);
      w.push(_);
    }
  }
  return r ? w : (h = []).concat.apply(h, w);
}
function N7(e) {
  var r = e.rows, a = e.stylesheet, l = e.useInlineStyles;
  return r.map(function(i, c) {
    return N0({ node: i, stylesheet: a, useInlineStyles: l, key: "code-segement".concat(c) });
  });
}
function am(e) {
  return e && typeof e.highlightAuto < "u";
}
function j7(e) {
  var r = e.astGenerator, a = e.language, l = e.code, i = e.defaultCodeValue;
  if (am(r)) {
    var c = R7(r, a);
    return a === "text" ? { value: i, language: "text" } : c ? r.highlight(a, l) : r.highlightAuto(l);
  }
  try {
    return a && a !== "text" ? { value: r.highlight(l, a) } : { value: i };
  } catch {
    return { value: i };
  }
}
function H7(e, r) {
  return function(a) {
    var l = a.language, i = a.children, c = a.style, d = c === void 0 ? r : c, m = a.customStyle, p = m === void 0 ? {} : m, h = a.codeTagProps, y = h === void 0 ? { className: l ? "language-".concat(l) : void 0, style: Or(Or({}, d['code[class*="language-"]']), d['code[class*="language-'.concat(l, '"]')]) } : h, w = a.useInlineStyles, x = w === void 0 ? !0 : w, v = a.showLineNumbers, E = v === void 0 ? !1 : v, b = a.showInlineLineNumbers, C = b === void 0 ? !0 : b, A = a.startingLineNumber, T = A === void 0 ? 1 : A, k = a.lineNumberContainerStyle, _ = a.lineNumberStyle, O = _ === void 0 ? {} : _, L = a.wrapLines, $ = a.wrapLongLines, M = $ === void 0 ? !1 : $, j = a.lineProps, Z = j === void 0 ? {} : j, V = a.renderer, Q = a.PreTag, Y = Q === void 0 ? "pre" : Q, pe = a.CodeTag, J = pe === void 0 ? "code" : pe, re = a.code, ae = re === void 0 ? (Array.isArray(i) ? i[0] : i) || "" : re, q = a.astGenerator, W = b7(a, L7);
    q = q || e;
    var F = E ? u.createElement(B7, { containerStyle: k, codeStyle: y.style || {}, numberStyle: O, startingLineNumber: T, codeString: ae }) : null, U = d.hljs || d['pre[class*="language-"]'] || { backgroundColor: "#fff" }, ne = am(q) ? "hljs" : "prismjs", ce = x ? Object.assign({}, W, { style: Object.assign({}, U, p) }) : Object.assign({}, W, { className: W.className ? "".concat(ne, " ").concat(W.className) : ne, style: Object.assign({}, p) });
    if (M ? y.style = Or(Or({}, y.style), {}, { whiteSpace: "pre-wrap" }) : y.style = Or(Or({}, y.style), {}, { whiteSpace: "pre" }), !q)
      return u.createElement(Y, ce, F, u.createElement(J, y, ae));
    (L === void 0 && V || M) && (L = !0), V = V || N7;
    var ue = [{ type: "text", value: ae }], te = j7({ astGenerator: q, language: l, code: ae, defaultCodeValue: ue });
    te.language === null && (te.value = ue);
    var le = te.value.length + T, fe = P7(te, L, Z, E, C, T, le, O, M);
    return u.createElement(Y, ce, u.createElement(J, y, !C && F, V({ rows: fe, stylesheet: d, useInlineStyles: x })));
  };
}
var j0 = Wt(Ub()), H0 = H7(j0.default, {});
H0.registerLanguage = function(e, r) {
  return j0.default.register(r);
};
H0.alias = function(e, r) {
  return j0.default.alias(e, r);
};
var Gt = H0, Z7 = P.div(({ theme: e }) => ({ position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: e.background.content, zIndex: 1 })), om = P.button(({ theme: e }) => ({ margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: e.color.defaultText, background: e.background.content, fontSize: 12, lineHeight: "16px", fontFamily: e.typography.fonts.base, fontWeight: e.typography.weight.bold, borderTop: `1px solid ${e.appBorderColor}`, borderLeft: `1px solid ${e.appBorderColor}`, marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` }, "& + *": { borderLeft: `1px solid ${e.appBorderColor}`, borderRadius: 0 }, "&:focus": { boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`, outline: "0 none" } }), ({ disabled: e }) => e && { cursor: "not-allowed", opacity: 0.5 });
om.displayName = "ActionButton";
var Z0 = ({ actionItems: e, ...r }) => u.createElement(Z7, { ...r }, e.map(({ title: a, className: l, onClick: i, disabled: c }, d) => u.createElement(om, { key: d, className: l, onClick: i, disabled: c }, a))), z7 = D.lazy(() => import("./GlobalScrollAreaStyles-4LLX2B3H-369c3ecf.mjs")), V7 = D.lazy(() => import("./OverlayScrollbars-OL4C4TVX-9517ce12.mjs")), U7 = ({ horizontal: e, vertical: r, ...a }) => u.createElement(D.Suspense, { fallback: u.createElement("div", { ...a }) }, u.createElement(z7, null), u.createElement(V7, { defer: !0, options: { scrollbars: { autoHide: "leave", visibility: "auto" } }, ...a })), lu = P(U7)(({ vertical: e }) => e ? { overflowY: "auto", height: "100%" } : { overflowY: "hidden" }, ({ horizontal: e }) => e ? { overflowX: "auto", width: "100%" } : { overflowX: "hidden" });
lu.defaultProps = { horizontal: !1, vertical: !1 };
var { navigator: Hf, document: Bo, window: q7 } = gt;
Gt.registerLanguage("jsextra", a7);
Gt.registerLanguage("jsx", Qb);
Gt.registerLanguage("json", l7);
Gt.registerLanguage("yml", m7);
Gt.registerLanguage("md", p7);
Gt.registerLanguage("bash", e7);
Gt.registerLanguage("css", r7);
Gt.registerLanguage("html", c7);
Gt.registerLanguage("tsx", h7);
Gt.registerLanguage("typescript", v7);
Gt.registerLanguage("graphql", u7);
var W7 = ra(2)((e) => Object.entries(e.code || {}).reduce((r, [a, l]) => ({ ...r, [`* .${a}`]: l }), {})), G7 = lm();
function lm() {
  return Hf?.clipboard ? (e) => Hf.clipboard.writeText(e) : async (e) => {
    let r = Bo.createElement("TEXTAREA"), a = Bo.activeElement;
    r.value = e, Bo.body.appendChild(r), r.select(), Bo.execCommand("copy"), Bo.body.removeChild(r), a.focus();
  };
}
var K7 = P.div(({ theme: e }) => ({ position: "relative", overflow: "hidden", color: e.color.defaultText }), ({ theme: e, bordered: r }) => r ? { border: `1px solid ${e.appBorderColor}`, borderRadius: e.borderRadius, background: e.background.content } : {}, ({ showLineNumbers: e }) => e ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {}), Y7 = ({ children: e, className: r }) => u.createElement(lu, { horizontal: !0, vertical: !0, className: r }, e), X7 = P(Y7)({ position: "relative" }, ({ theme: e }) => W7(e)), Q7 = P.pre(({ theme: e, padded: r }) => ({ display: "flex", justifyContent: "flex-start", margin: 0, padding: r ? e.layoutMargin : 0 })), J7 = P.div(({ theme: e }) => ({ flex: 1, paddingLeft: 2, paddingRight: e.layoutMargin, opacity: 1 })), im = (e) => {
  let r = [...e.children], a = r[0], l = a.children[0].value, i = { ...a, children: [], properties: { ...a.properties, "data-line-number": l, style: { ...a.properties.style, userSelect: "auto" } } };
  return r[0] = i, { ...e, children: r };
}, eE = ({ rows: e, stylesheet: r, useInlineStyles: a }) => e.map((l, i) => N0({ node: im(l), stylesheet: r, useInlineStyles: a, key: `code-segement${i}` })), tE = (e, r) => r ? e ? ({ rows: a, ...l }) => e({ rows: a.map((i) => im(i)), ...l }) : eE : e, z0 = ({ children: e, language: r = "jsx", copyable: a = !1, bordered: l = !1, padded: i = !1, format: c = !0, formatter: d = null, className: m = null, showLineNumbers: p = !1, ...h }) => {
  if (typeof e != "string" || !e.trim())
    return null;
  let y = d ? d(c, e) : e.trim(), [w, x] = D.useState(!1), v = D.useCallback((b) => {
    b.preventDefault(), G7(y).then(() => {
      x(!0), q7.setTimeout(() => x(!1), 1500);
    }).catch(Yb.error);
  }, [y]), E = tE(h.renderer, p);
  return u.createElement(K7, { bordered: l, padded: i, showLineNumbers: p, className: m }, u.createElement(X7, null, u.createElement(Gt, { padded: i || l, language: r, showLineNumbers: p, showInlineLineNumbers: p, useInlineStyles: !1, PreTag: Q7, CodeTag: J7, lineNumberContainerStyle: {}, ...h, renderer: E }, y)), a ? u.createElement(Z0, { actionItems: [{ title: w ? "Copied" : "Copy", onClick: v }] }) : null);
};
z0.registerLanguage = (...e) => Gt.registerLanguage(...e);
var HM = z0, um = { exports: {} }, kt = {}, Ec = { exports: {} }, xc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf;
function rE() {
  return Zf || (Zf = 1, function(e) {
    function r(q, W) {
      var F = q.length;
      q.push(W);
      e:
        for (; 0 < F; ) {
          var U = F - 1 >>> 1, ne = q[U];
          if (0 < i(ne, W))
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
            if (0 > i(te, F))
              le < ne && 0 > i(fe, te) ? (q[U] = fe, q[le] = F, U = le) : (q[U] = te, q[ue] = F, U = ue);
            else if (le < ne && 0 > i(fe, F))
              q[U] = fe, q[le] = F, U = le;
            else
              break e;
          }
      }
      return W;
    }
    function i(q, W) {
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
    var p = [], h = [], y = 1, w = null, x = 3, v = !1, E = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function k(q) {
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
      if (b = !1, k(q), !E)
        if (a(p) !== null)
          E = !0, re(O);
        else {
          var W = a(h);
          W !== null && ae(_, W.startTime - q);
        }
    }
    function O(q, W) {
      E = !1, b && (b = !1, A(M), M = -1), v = !0;
      var F = x;
      try {
        for (k(W), w = a(p); w !== null && (!(w.expirationTime > W) || q && !V()); ) {
          var U = w.callback;
          if (typeof U == "function") {
            w.callback = null, x = w.priorityLevel;
            var ne = U(w.expirationTime <= W);
            W = e.unstable_now(), typeof ne == "function" ? w.callback = ne : w === a(p) && l(p), k(W);
          } else
            l(p);
          w = a(p);
        }
        if (w !== null)
          var ce = !0;
        else {
          var ue = a(h);
          ue !== null && ae(_, ue.startTime - W), ce = !1;
        }
        return ce;
      } finally {
        w = null, x = F, v = !1;
      }
    }
    var L = !1, $ = null, M = -1, j = 5, Z = -1;
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
          W ? Y() : (L = !1, $ = null);
        }
      } else
        L = !1;
    }
    var Y;
    if (typeof T == "function")
      Y = function() {
        T(Q);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), J = pe.port2;
      pe.port1.onmessage = Q, Y = function() {
        J.postMessage(null);
      };
    } else
      Y = function() {
        C(Q, 0);
      };
    function re(q) {
      $ = q, L || (L = !0, Y());
    }
    function ae(q, W) {
      M = C(function() {
        q(e.unstable_now());
      }, W);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, e.unstable_continueExecution = function() {
      E || v || (E = !0, re(O));
    }, e.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < q ? Math.floor(1e3 / q) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, e.unstable_getFirstCallbackNode = function() {
      return a(p);
    }, e.unstable_next = function(q) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = x;
      }
      var F = x;
      x = W;
      try {
        return q();
      } finally {
        x = F;
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
      var F = x;
      x = q;
      try {
        return W();
      } finally {
        x = F;
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
      return ne = F + ne, q = { id: y++, callback: W, priorityLevel: q, startTime: F, expirationTime: ne, sortIndex: -1 }, F > U ? (q.sortIndex = F, r(h, q), a(p) === null && q === a(h) && (b ? (A(M), M = -1) : b = !0, ae(_, F - U))) : (q.sortIndex = ne, r(p, q), E || v || (E = !0, re(O))), q;
    }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(q) {
      var W = x;
      return function() {
        var F = x;
        x = W;
        try {
          return q.apply(this, arguments);
        } finally {
          x = F;
        }
      };
    };
  }(xc)), xc;
}
var zf;
function nE() {
  return zf || (zf = 1, Ec.exports = rE()), Ec.exports;
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
var Vf;
function aE() {
  if (Vf)
    return kt;
  Vf = 1;
  var e = D, r = nE();
  function a(t) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, o = 1; o < arguments.length; o++)
      n += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var l = /* @__PURE__ */ new Set(), i = {};
  function c(t, n) {
    d(t, n), d(t + "Capture", n);
  }
  function d(t, n) {
    for (i[t] = n, t = 0; t < n.length; t++)
      l.add(n[t]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, w = {};
  function x(t) {
    return p.call(w, t) ? !0 : p.call(y, t) ? !1 : h.test(t) ? w[t] = !0 : (y[t] = !0, !1);
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
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    C[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var n = t[0];
    C[n] = new b(n, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    C[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    C[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    C[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    C[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    C[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    C[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    C[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function T(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var n = t.replace(
      A,
      T
    );
    C[n] = new b(n, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var n = t.replace(A, T);
    C[n] = new b(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var n = t.replace(A, T);
    C[n] = new b(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    C[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    C[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function k(t, n, o, s) {
    var f = C.hasOwnProperty(n) ? C[n] : null;
    (f !== null ? f.type !== 0 : s || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (E(n, o, f, s) && (o = null), s || f === null ? x(n) && (o === null ? t.removeAttribute(n) : t.setAttribute(n, "" + o)) : f.mustUseProperty ? t[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (n = f.attributeName, s = f.attributeNamespace, o === null ? t.removeAttribute(n) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, s ? t.setAttributeNS(s, n, o) : t.setAttribute(n, o))));
  }
  var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = Symbol.for("react.element"), L = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), V = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), q = Symbol.iterator;
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
`), S = f.length - 1, R = g.length - 1; 1 <= S && 0 <= R && f[S] !== g[R]; )
          R--;
        for (; 1 <= S && 0 <= R; S--, R--)
          if (f[S] !== g[R]) {
            if (S !== 1 || R !== 1)
              do
                if (S--, R--, 0 > R || f[S] !== g[R]) {
                  var B = `
` + f[S].replace(" at new ", " at ");
                  return t.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", t.displayName)), B;
                }
              while (1 <= S && 0 <= R);
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
      case L:
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
  function lr(t) {
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
  function rt(t) {
    t._valueTracker || (t._valueTracker = lr(t));
  }
  function $t(t) {
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
  function ht(t, n) {
    var o = n.checked;
    return F({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? t._wrapperState.initialChecked });
  }
  function Bt(t, n) {
    var o = n.defaultValue == null ? "" : n.defaultValue, s = n.checked != null ? n.checked : n.defaultChecked;
    o = ve(n.value != null ? n.value : o), t._wrapperState = { initialChecked: s, initialValue: o, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function yr(t, n) {
    n = n.checked, n != null && k(t, "checked", n, !1);
  }
  function vr(t, n) {
    yr(t, n);
    var o = ve(n.value), s = n.type;
    if (o != null)
      s === "number" ? (o === 0 && t.value === "" || t.value != o) && (t.value = "" + o) : t.value !== "" + o && (t.value = "" + o);
    else if (s === "submit" || s === "reset") {
      t.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Qr(t, n.type, o) : n.hasOwnProperty("defaultValue") && Qr(t, n.type, ve(n.defaultValue)), n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked);
  }
  function It(t, n, o) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var s = n.type;
      if (!(s !== "submit" && s !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + t._wrapperState.initialValue, o || n === t.value || (t.value = n), t.defaultValue = n;
    }
    o = t.name, o !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, o !== "" && (t.name = o);
  }
  function Qr(t, n, o) {
    (n !== "number" || se(t.ownerDocument) !== t) && (o == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + o && (t.defaultValue = "" + o));
  }
  var ze = Array.isArray;
  function bt(t, n, o, s) {
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
  function Et(t, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(a(91));
    return F({}, n, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Br(t, n) {
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
  function Pt(t, n) {
    var o = ve(n.value), s = ve(n.defaultValue);
    o != null && (o = "" + o, o !== t.value && (t.value = o), n.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)), s != null && (t.defaultValue = "" + s);
  }
  function Ir(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
  }
  function Nt(t) {
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
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Nt(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var ut, Ve = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, o, s, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(n, o, s, f);
      });
    } : t;
  }(function(t, n) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = n;
    else {
      for (ut = ut || document.createElement("div"), ut.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ut.firstChild; t.firstChild; )
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
  var st = {
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
  }, aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(st).forEach(function(t) {
    aa.forEach(function(n) {
      n = n + t.charAt(0).toUpperCase() + t.substring(1), st[n] = st[t];
    });
  });
  function oa(t, n, o) {
    return n == null || typeof n == "boolean" || n === "" ? "" : o || typeof n != "number" || n === 0 || st.hasOwnProperty(t) && st[t] ? ("" + n).trim() : n + "px";
  }
  function br(t, n) {
    t = t.style;
    for (var o in n)
      if (n.hasOwnProperty(o)) {
        var s = o.indexOf("--") === 0, f = oa(o, n[o], s);
        o === "float" && (o = "cssFloat"), s ? t.setProperty(o, f) : t[o] = f;
      }
  }
  var Rn = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ir(t, n) {
    if (n) {
      if (Rn[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
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
  function jt(t, n) {
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
  var la = null;
  function Pr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Jr = null, nt = null, De = null;
  function en(t) {
    if (t = Eo(t)) {
      if (typeof Jr != "function")
        throw Error(a(280));
      var n = t.stateNode;
      n && (n = $l(n), Jr(t.stateNode, t.type, n));
    }
  }
  function pl(t) {
    nt ? De ? De.push(t) : De = [t] : nt = t;
  }
  function Ka() {
    if (nt) {
      var t = nt, n = De;
      if (De = nt = null, en(t), n)
        for (t = 0; t < n.length; t++)
          en(n[t]);
    }
  }
  function Ya(t, n) {
    return t(n);
  }
  function Xa() {
  }
  var Ln = !1;
  function Dd(t, n, o) {
    if (Ln)
      return t(n, o);
    Ln = !0;
    try {
      return Ya(t, n, o);
    } finally {
      Ln = !1, (nt !== null || De !== null) && (Xa(), Ka());
    }
  }
  function Qa(t, n) {
    var o = t.stateNode;
    if (o === null)
      return null;
    var s = $l(o);
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
  var Cu = !1;
  if (m)
    try {
      var Ja = {};
      Object.defineProperty(Ja, "passive", { get: function() {
        Cu = !0;
      } }), window.addEventListener("test", Ja, Ja), window.removeEventListener("test", Ja, Ja);
    } catch {
      Cu = !1;
    }
  function Oh(t, n, o, s, f, g, S, R, B) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(o, z);
    } catch (K) {
      this.onError(K);
    }
  }
  var eo = !1, fl = null, ml = !1, ku = null, Th = { onError: function(t) {
    eo = !0, fl = t;
  } };
  function Fh(t, n, o, s, f, g, S, R, B) {
    eo = !1, fl = null, Oh.apply(Th, arguments);
  }
  function Rh(t, n, o, s, f, g, S, R, B) {
    if (Fh.apply(this, arguments), eo) {
      if (eo) {
        var z = fl;
        eo = !1, fl = null;
      } else
        throw Error(a(198));
      ml || (ml = !0, ku = z);
    }
  }
  function Dn(t) {
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
  function Md(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate, t !== null && (n = t.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function $d(t) {
    if (Dn(t) !== t)
      throw Error(a(188));
  }
  function Lh(t) {
    var n = t.alternate;
    if (!n) {
      if (n = Dn(t), n === null)
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
            return $d(f), t;
          if (g === s)
            return $d(f), n;
          g = g.sibling;
        }
        throw Error(a(188));
      }
      if (o.return !== s.return)
        o = f, s = g;
      else {
        for (var S = !1, R = f.child; R; ) {
          if (R === o) {
            S = !0, o = f, s = g;
            break;
          }
          if (R === s) {
            S = !0, s = f, o = g;
            break;
          }
          R = R.sibling;
        }
        if (!S) {
          for (R = g.child; R; ) {
            if (R === o) {
              S = !0, o = g, s = f;
              break;
            }
            if (R === s) {
              S = !0, s = g, o = f;
              break;
            }
            R = R.sibling;
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
  function Bd(t) {
    return t = Lh(t), t !== null ? Id(t) : null;
  }
  function Id(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var n = Id(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  var Pd = r.unstable_scheduleCallback, Nd = r.unstable_cancelCallback, Dh = r.unstable_shouldYield, Mh = r.unstable_requestPaint, Ue = r.unstable_now, $h = r.unstable_getCurrentPriorityLevel, _u = r.unstable_ImmediatePriority, jd = r.unstable_UserBlockingPriority, gl = r.unstable_NormalPriority, Bh = r.unstable_LowPriority, Hd = r.unstable_IdlePriority, hl = null, Er = null;
  function Ih(t) {
    if (Er && typeof Er.onCommitFiberRoot == "function")
      try {
        Er.onCommitFiberRoot(hl, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
  }
  var ur = Math.clz32 ? Math.clz32 : jh, Ph = Math.log, Nh = Math.LN2;
  function jh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ph(t) / Nh | 0) | 0;
  }
  var yl = 64, vl = 4194304;
  function to(t) {
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
  function bl(t, n) {
    var o = t.pendingLanes;
    if (o === 0)
      return 0;
    var s = 0, f = t.suspendedLanes, g = t.pingedLanes, S = o & 268435455;
    if (S !== 0) {
      var R = S & ~f;
      R !== 0 ? s = to(R) : (g &= S, g !== 0 && (s = to(g)));
    } else
      S = o & ~f, S !== 0 ? s = to(S) : g !== 0 && (s = to(g));
    if (s === 0)
      return 0;
    if (n !== 0 && n !== s && !(n & f) && (f = s & -s, g = n & -n, f >= g || f === 16 && (g & 4194240) !== 0))
      return n;
    if (s & 4 && (s |= o & 16), n = t.entangledLanes, n !== 0)
      for (t = t.entanglements, n &= s; 0 < n; )
        o = 31 - ur(n), f = 1 << o, s |= t[o], n &= ~f;
    return s;
  }
  function Hh(t, n) {
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
  function Zh(t, n) {
    for (var o = t.suspendedLanes, s = t.pingedLanes, f = t.expirationTimes, g = t.pendingLanes; 0 < g; ) {
      var S = 31 - ur(g), R = 1 << S, B = f[S];
      B === -1 ? (!(R & o) || R & s) && (f[S] = Hh(R, n)) : B <= n && (t.expiredLanes |= R), g &= ~R;
    }
  }
  function Ou(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function Zd() {
    var t = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), t;
  }
  function Tu(t) {
    for (var n = [], o = 0; 31 > o; o++)
      n.push(t);
    return n;
  }
  function ro(t, n, o) {
    t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, n = 31 - ur(n), t[n] = o;
  }
  function zh(t, n) {
    var o = t.pendingLanes & ~n;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n, n = t.entanglements;
    var s = t.eventTimes;
    for (t = t.expirationTimes; 0 < o; ) {
      var f = 31 - ur(o), g = 1 << f;
      n[f] = 0, s[f] = -1, t[f] = -1, o &= ~g;
    }
  }
  function Fu(t, n) {
    var o = t.entangledLanes |= n;
    for (t = t.entanglements; o; ) {
      var s = 31 - ur(o), f = 1 << s;
      f & n | t[s] & n && (t[s] |= n), o &= ~f;
    }
  }
  var Te = 0;
  function zd(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vd, Ru, Ud, qd, Wd, Lu = !1, El = [], tn = null, rn = null, nn = null, no = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Map(), an = [], Vh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gd(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        rn = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
        break;
      case "pointerover":
      case "pointerout":
        no.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ao.delete(n.pointerId);
    }
  }
  function oo(t, n, o, s, f, g) {
    return t === null || t.nativeEvent !== g ? (t = { blockedOn: n, domEventName: o, eventSystemFlags: s, nativeEvent: g, targetContainers: [f] }, n !== null && (n = Eo(n), n !== null && Ru(n)), t) : (t.eventSystemFlags |= s, n = t.targetContainers, f !== null && n.indexOf(f) === -1 && n.push(f), t);
  }
  function Uh(t, n, o, s, f) {
    switch (n) {
      case "focusin":
        return tn = oo(tn, t, n, o, s, f), !0;
      case "dragenter":
        return rn = oo(rn, t, n, o, s, f), !0;
      case "mouseover":
        return nn = oo(nn, t, n, o, s, f), !0;
      case "pointerover":
        var g = f.pointerId;
        return no.set(g, oo(no.get(g) || null, t, n, o, s, f)), !0;
      case "gotpointercapture":
        return g = f.pointerId, ao.set(g, oo(ao.get(g) || null, t, n, o, s, f)), !0;
    }
    return !1;
  }
  function Kd(t) {
    var n = Mn(t.target);
    if (n !== null) {
      var o = Dn(n);
      if (o !== null) {
        if (n = o.tag, n === 13) {
          if (n = Md(o), n !== null) {
            t.blockedOn = n, Wd(t.priority, function() {
              Ud(o);
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
  function xl(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var o = Mu(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (o === null) {
        o = t.nativeEvent;
        var s = new o.constructor(o.type, o);
        la = s, o.target.dispatchEvent(s), la = null;
      } else
        return n = Eo(o), n !== null && Ru(n), t.blockedOn = o, !1;
      n.shift();
    }
    return !0;
  }
  function Yd(t, n, o) {
    xl(t) && o.delete(n);
  }
  function qh() {
    Lu = !1, tn !== null && xl(tn) && (tn = null), rn !== null && xl(rn) && (rn = null), nn !== null && xl(nn) && (nn = null), no.forEach(Yd), ao.forEach(Yd);
  }
  function lo(t, n) {
    t.blockedOn === n && (t.blockedOn = null, Lu || (Lu = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, qh)));
  }
  function io(t) {
    function n(f) {
      return lo(f, t);
    }
    if (0 < El.length) {
      lo(El[0], t);
      for (var o = 1; o < El.length; o++) {
        var s = El[o];
        s.blockedOn === t && (s.blockedOn = null);
      }
    }
    for (tn !== null && lo(tn, t), rn !== null && lo(rn, t), nn !== null && lo(nn, t), no.forEach(n), ao.forEach(n), o = 0; o < an.length; o++)
      s = an[o], s.blockedOn === t && (s.blockedOn = null);
    for (; 0 < an.length && (o = an[0], o.blockedOn === null); )
      Kd(o), o.blockedOn === null && an.shift();
  }
  var ia = _.ReactCurrentBatchConfig, wl = !0;
  function Wh(t, n, o, s) {
    var f = Te, g = ia.transition;
    ia.transition = null;
    try {
      Te = 1, Du(t, n, o, s);
    } finally {
      Te = f, ia.transition = g;
    }
  }
  function Gh(t, n, o, s) {
    var f = Te, g = ia.transition;
    ia.transition = null;
    try {
      Te = 4, Du(t, n, o, s);
    } finally {
      Te = f, ia.transition = g;
    }
  }
  function Du(t, n, o, s) {
    if (wl) {
      var f = Mu(t, n, o, s);
      if (f === null)
        Xu(t, n, s, Sl, o), Gd(t, s);
      else if (Uh(f, t, n, o, s))
        s.stopPropagation();
      else if (Gd(t, s), n & 4 && -1 < Vh.indexOf(t)) {
        for (; f !== null; ) {
          var g = Eo(f);
          if (g !== null && Vd(g), g = Mu(t, n, o, s), g === null && Xu(t, n, s, Sl, o), g === f)
            break;
          f = g;
        }
        f !== null && s.stopPropagation();
      } else
        Xu(t, n, s, null, o);
    }
  }
  var Sl = null;
  function Mu(t, n, o, s) {
    if (Sl = null, t = Pr(s), t = Mn(t), t !== null)
      if (n = Dn(t), n === null)
        t = null;
      else if (o = n.tag, o === 13) {
        if (t = Md(n), t !== null)
          return t;
        t = null;
      } else if (o === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else
        n !== t && (t = null);
    return Sl = t, null;
  }
  function Xd(t) {
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
        switch ($h()) {
          case _u:
            return 1;
          case jd:
            return 4;
          case gl:
          case Bh:
            return 16;
          case Hd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null, $u = null, Al = null;
  function Qd() {
    if (Al)
      return Al;
    var t, n = $u, o = n.length, s, f = "value" in on ? on.value : on.textContent, g = f.length;
    for (t = 0; t < o && n[t] === f[t]; t++)
      ;
    var S = o - t;
    for (s = 1; s <= S && n[o - s] === f[g - s]; s++)
      ;
    return Al = f.slice(t, 1 < s ? 1 - s : void 0);
  }
  function Cl(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function kl() {
    return !0;
  }
  function Jd() {
    return !1;
  }
  function Ht(t) {
    function n(o, s, f, g, S) {
      this._reactName = o, this._targetInst = f, this.type = s, this.nativeEvent = g, this.target = S, this.currentTarget = null;
      for (var R in t)
        t.hasOwnProperty(R) && (o = t[R], this[R] = o ? o(g) : g[R]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? kl : Jd, this.isPropagationStopped = Jd, this;
    }
    return F(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = kl);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = kl);
    }, persist: function() {
    }, isPersistent: kl }), n;
  }
  var ua = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Bu = Ht(ua), uo = F({}, ua, { view: 0, detail: 0 }), Kh = Ht(uo), Iu, Pu, so, _l = F({}, uo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ju, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== so && (so && t.type === "mousemove" ? (Iu = t.screenX - so.screenX, Pu = t.screenY - so.screenY) : Pu = Iu = 0, so = t), Iu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Pu;
  } }), e1 = Ht(_l), Yh = F({}, _l, { dataTransfer: 0 }), Xh = Ht(Yh), Qh = F({}, uo, { relatedTarget: 0 }), Nu = Ht(Qh), Jh = F({}, ua, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ey = Ht(Jh), ty = F({}, ua, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), ry = Ht(ty), ny = F({}, ua, { data: 0 }), t1 = Ht(ny), ay = {
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
  }, oy = {
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
  }, ly = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function iy(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = ly[t]) ? !!n[t] : !1;
  }
  function ju() {
    return iy;
  }
  var uy = F({}, uo, { key: function(t) {
    if (t.key) {
      var n = ay[t.key] || t.key;
      if (n !== "Unidentified")
        return n;
    }
    return t.type === "keypress" ? (t = Cl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? oy[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ju, charCode: function(t) {
    return t.type === "keypress" ? Cl(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Cl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), sy = Ht(uy), cy = F({}, _l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), r1 = Ht(cy), dy = F({}, uo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ju }), py = Ht(dy), fy = F({}, ua, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), my = Ht(fy), gy = F({}, _l, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hy = Ht(gy), yy = [9, 13, 27, 32], Hu = m && "CompositionEvent" in window, co = null;
  m && "documentMode" in document && (co = document.documentMode);
  var vy = m && "TextEvent" in window && !co, n1 = m && (!Hu || co && 8 < co && 11 >= co), a1 = String.fromCharCode(32), o1 = !1;
  function l1(t, n) {
    switch (t) {
      case "keyup":
        return yy.indexOf(n.keyCode) !== -1;
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
  function i1(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var sa = !1;
  function by(t, n) {
    switch (t) {
      case "compositionend":
        return i1(n);
      case "keypress":
        return n.which !== 32 ? null : (o1 = !0, a1);
      case "textInput":
        return t = n.data, t === a1 && o1 ? null : t;
      default:
        return null;
    }
  }
  function Ey(t, n) {
    if (sa)
      return t === "compositionend" || !Hu && l1(t, n) ? (t = Qd(), Al = $u = on = null, sa = !1, t) : null;
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
        return n1 && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var xy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function u1(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!xy[t.type] : n === "textarea";
  }
  function s1(t, n, o, s) {
    pl(s), n = Ll(n, "onChange"), 0 < n.length && (o = new Bu("onChange", "change", null, o, s), t.push({ event: o, listeners: n }));
  }
  var po = null, fo = null;
  function wy(t) {
    _1(t, 0);
  }
  function Ol(t) {
    var n = ma(t);
    if ($t(n))
      return t;
  }
  function Sy(t, n) {
    if (t === "change")
      return n;
  }
  var c1 = !1;
  if (m) {
    var Zu;
    if (m) {
      var zu = "oninput" in document;
      if (!zu) {
        var d1 = document.createElement("div");
        d1.setAttribute("oninput", "return;"), zu = typeof d1.oninput == "function";
      }
      Zu = zu;
    } else
      Zu = !1;
    c1 = Zu && (!document.documentMode || 9 < document.documentMode);
  }
  function p1() {
    po && (po.detachEvent("onpropertychange", f1), fo = po = null);
  }
  function f1(t) {
    if (t.propertyName === "value" && Ol(fo)) {
      var n = [];
      s1(n, fo, t, Pr(t)), Dd(wy, n);
    }
  }
  function Ay(t, n, o) {
    t === "focusin" ? (p1(), po = n, fo = o, po.attachEvent("onpropertychange", f1)) : t === "focusout" && p1();
  }
  function Cy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ol(fo);
  }
  function ky(t, n) {
    if (t === "click")
      return Ol(n);
  }
  function _y(t, n) {
    if (t === "input" || t === "change")
      return Ol(n);
  }
  function Oy(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
  }
  var sr = typeof Object.is == "function" ? Object.is : Oy;
  function mo(t, n) {
    if (sr(t, n))
      return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null)
      return !1;
    var o = Object.keys(t), s = Object.keys(n);
    if (o.length !== s.length)
      return !1;
    for (s = 0; s < o.length; s++) {
      var f = o[s];
      if (!p.call(n, f) || !sr(t[f], n[f]))
        return !1;
    }
    return !0;
  }
  function m1(t) {
    for (; t && t.firstChild; )
      t = t.firstChild;
    return t;
  }
  function g1(t, n) {
    var o = m1(t);
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
      o = m1(o);
    }
  }
  function h1(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? h1(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function y1() {
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
  function Vu(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  function Ty(t) {
    var n = y1(), o = t.focusedElem, s = t.selectionRange;
    if (n !== o && o && o.ownerDocument && h1(o.ownerDocument.documentElement, o)) {
      if (s !== null && Vu(o)) {
        if (n = s.start, t = s.end, t === void 0 && (t = n), "selectionStart" in o)
          o.selectionStart = n, o.selectionEnd = Math.min(t, o.value.length);
        else if (t = (n = o.ownerDocument || document) && n.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = o.textContent.length, g = Math.min(s.start, f);
          s = s.end === void 0 ? g : Math.min(s.end, f), !t.extend && g > s && (f = s, s = g, g = f), f = g1(o, g);
          var S = g1(
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
  var Fy = m && "documentMode" in document && 11 >= document.documentMode, ca = null, Uu = null, go = null, qu = !1;
  function v1(t, n, o) {
    var s = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    qu || ca == null || ca !== se(s) || (s = ca, "selectionStart" in s && Vu(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), go && mo(go, s) || (go = s, s = Ll(Uu, "onSelect"), 0 < s.length && (n = new Bu("onSelect", "select", null, n, o), t.push({ event: n, listeners: s }), n.target = ca)));
  }
  function Tl(t, n) {
    var o = {};
    return o[t.toLowerCase()] = n.toLowerCase(), o["Webkit" + t] = "webkit" + n, o["Moz" + t] = "moz" + n, o;
  }
  var da = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, Wu = {}, b1 = {};
  m && (b1 = document.createElement("div").style, "AnimationEvent" in window || (delete da.animationend.animation, delete da.animationiteration.animation, delete da.animationstart.animation), "TransitionEvent" in window || delete da.transitionend.transition);
  function Fl(t) {
    if (Wu[t])
      return Wu[t];
    if (!da[t])
      return t;
    var n = da[t], o;
    for (o in n)
      if (n.hasOwnProperty(o) && o in b1)
        return Wu[t] = n[o];
    return t;
  }
  var E1 = Fl("animationend"), x1 = Fl("animationiteration"), w1 = Fl("animationstart"), S1 = Fl("transitionend"), A1 = /* @__PURE__ */ new Map(), C1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ln(t, n) {
    A1.set(t, n), c(n, [t]);
  }
  for (var Gu = 0; Gu < C1.length; Gu++) {
    var Ku = C1[Gu], Ry = Ku.toLowerCase(), Ly = Ku[0].toUpperCase() + Ku.slice(1);
    ln(Ry, "on" + Ly);
  }
  ln(E1, "onAnimationEnd"), ln(x1, "onAnimationIteration"), ln(w1, "onAnimationStart"), ln("dblclick", "onDoubleClick"), ln("focusin", "onFocus"), ln("focusout", "onBlur"), ln(S1, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));
  function k1(t, n, o) {
    var s = t.type || "unknown-event";
    t.currentTarget = o, Rh(s, n, void 0, t), t.currentTarget = null;
  }
  function _1(t, n) {
    n = (n & 4) !== 0;
    for (var o = 0; o < t.length; o++) {
      var s = t[o], f = s.event;
      s = s.listeners;
      e: {
        var g = void 0;
        if (n)
          for (var S = s.length - 1; 0 <= S; S--) {
            var R = s[S], B = R.instance, z = R.currentTarget;
            if (R = R.listener, B !== g && f.isPropagationStopped())
              break e;
            k1(f, R, z), g = B;
          }
        else
          for (S = 0; S < s.length; S++) {
            if (R = s[S], B = R.instance, z = R.currentTarget, R = R.listener, B !== g && f.isPropagationStopped())
              break e;
            k1(f, R, z), g = B;
          }
      }
    }
    if (ml)
      throw t = ku, ml = !1, ku = null, t;
  }
  function Me(t, n) {
    var o = n[ns];
    o === void 0 && (o = n[ns] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    o.has(s) || (O1(n, t, 2, !1), o.add(s));
  }
  function Yu(t, n, o) {
    var s = 0;
    n && (s |= 4), O1(o, t, s, n);
  }
  var Rl = "_reactListening" + Math.random().toString(36).slice(2);
  function yo(t) {
    if (!t[Rl]) {
      t[Rl] = !0, l.forEach(function(o) {
        o !== "selectionchange" && (Dy.has(o) || Yu(o, !1, t), Yu(o, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Rl] || (n[Rl] = !0, Yu("selectionchange", !1, n));
    }
  }
  function O1(t, n, o, s) {
    switch (Xd(n)) {
      case 1:
        var f = Wh;
        break;
      case 4:
        f = Gh;
        break;
      default:
        f = Du;
    }
    o = f.bind(null, n, o, t), f = void 0, !Cu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (f = !0), s ? f !== void 0 ? t.addEventListener(n, o, { capture: !0, passive: f }) : t.addEventListener(n, o, !0) : f !== void 0 ? t.addEventListener(n, o, { passive: f }) : t.addEventListener(n, o, !1);
  }
  function Xu(t, n, o, s, f) {
    var g = s;
    if (!(n & 1) && !(n & 2) && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var S = s.tag;
          if (S === 3 || S === 4) {
            var R = s.stateNode.containerInfo;
            if (R === f || R.nodeType === 8 && R.parentNode === f)
              break;
            if (S === 4)
              for (S = s.return; S !== null; ) {
                var B = S.tag;
                if ((B === 3 || B === 4) && (B = S.stateNode.containerInfo, B === f || B.nodeType === 8 && B.parentNode === f))
                  return;
                S = S.return;
              }
            for (; R !== null; ) {
              if (S = Mn(R), S === null)
                return;
              if (B = S.tag, B === 5 || B === 6) {
                s = g = S;
                continue e;
              }
              R = R.parentNode;
            }
          }
          s = s.return;
        }
    Dd(function() {
      var z = g, K = Pr(o), X = [];
      e: {
        var G = A1.get(t);
        if (G !== void 0) {
          var oe = Bu, de = t;
          switch (t) {
            case "keypress":
              if (Cl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = sy;
              break;
            case "focusin":
              de = "focus", oe = Nu;
              break;
            case "focusout":
              de = "blur", oe = Nu;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Nu;
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
              oe = e1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = py;
              break;
            case E1:
            case x1:
            case w1:
              oe = ey;
              break;
            case S1:
              oe = my;
              break;
            case "scroll":
              oe = Kh;
              break;
            case "wheel":
              oe = hy;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = r1;
          }
          var me = (n & 4) !== 0, qe = !me && t === "scroll", N = me ? G !== null ? G + "Capture" : null : G;
          me = [];
          for (var I = z, H; I !== null; ) {
            H = I;
            var ee = H.stateNode;
            if (H.tag === 5 && ee !== null && (H = ee, N !== null && (ee = Qa(I, N), ee != null && me.push(vo(I, ee, H)))), qe)
              break;
            I = I.return;
          }
          0 < me.length && (G = new oe(G, de, null, o, K), X.push({ event: G, listeners: me }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (G = t === "mouseover" || t === "pointerover", oe = t === "mouseout" || t === "pointerout", G && o !== la && (de = o.relatedTarget || o.fromElement) && (Mn(de) || de[Nr]))
            break e;
          if ((oe || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, oe ? (de = o.relatedTarget || o.toElement, oe = z, de = de ? Mn(de) : null, de !== null && (qe = Dn(de), de !== qe || de.tag !== 5 && de.tag !== 6) && (de = null)) : (oe = null, de = z), oe !== de)) {
            if (me = e1, ee = "onMouseLeave", N = "onMouseEnter", I = "mouse", (t === "pointerout" || t === "pointerover") && (me = r1, ee = "onPointerLeave", N = "onPointerEnter", I = "pointer"), qe = oe == null ? G : ma(oe), H = de == null ? G : ma(de), G = new me(ee, I + "leave", oe, o, K), G.target = qe, G.relatedTarget = H, ee = null, Mn(K) === z && (me = new me(N, I + "enter", de, o, K), me.target = H, me.relatedTarget = qe, ee = me), qe = ee, oe && de)
              t: {
                for (me = oe, N = de, I = 0, H = me; H; H = pa(H))
                  I++;
                for (H = 0, ee = N; ee; ee = pa(ee))
                  H++;
                for (; 0 < I - H; )
                  me = pa(me), I--;
                for (; 0 < H - I; )
                  N = pa(N), H--;
                for (; I--; ) {
                  if (me === N || N !== null && me === N.alternate)
                    break t;
                  me = pa(me), N = pa(N);
                }
                me = null;
              }
            else
              me = null;
            oe !== null && T1(X, G, oe, me, !1), de !== null && qe !== null && T1(X, qe, de, me, !0);
          }
        }
        e: {
          if (G = z ? ma(z) : window, oe = G.nodeName && G.nodeName.toLowerCase(), oe === "select" || oe === "input" && G.type === "file")
            var ge = Sy;
          else if (u1(G))
            if (c1)
              ge = _y;
            else {
              ge = Cy;
              var he = Ay;
            }
          else
            (oe = G.nodeName) && oe.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (ge = ky);
          if (ge && (ge = ge(t, z))) {
            s1(X, ge, o, K);
            break e;
          }
          he && he(t, G, z), t === "focusout" && (he = G._wrapperState) && he.controlled && G.type === "number" && Qr(G, "number", G.value);
        }
        switch (he = z ? ma(z) : window, t) {
          case "focusin":
            (u1(he) || he.contentEditable === "true") && (ca = he, Uu = z, go = null);
            break;
          case "focusout":
            go = Uu = ca = null;
            break;
          case "mousedown":
            qu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qu = !1, v1(X, o, K);
            break;
          case "selectionchange":
            if (Fy)
              break;
          case "keydown":
          case "keyup":
            v1(X, o, K);
        }
        var ye;
        if (Hu)
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
          sa ? l1(t, o) && (Ee = "onCompositionEnd") : t === "keydown" && o.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (n1 && o.locale !== "ko" && (sa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && sa && (ye = Qd()) : (on = K, $u = "value" in on ? on.value : on.textContent, sa = !0)), he = Ll(z, Ee), 0 < he.length && (Ee = new t1(Ee, t, null, o, K), X.push({ event: Ee, listeners: he }), ye ? Ee.data = ye : (ye = i1(o), ye !== null && (Ee.data = ye)))), (ye = vy ? by(t, o) : Ey(t, o)) && (z = Ll(z, "onBeforeInput"), 0 < z.length && (K = new t1("onBeforeInput", "beforeinput", null, o, K), X.push({ event: K, listeners: z }), K.data = ye));
      }
      _1(X, n);
    });
  }
  function vo(t, n, o) {
    return { instance: t, listener: n, currentTarget: o };
  }
  function Ll(t, n) {
    for (var o = n + "Capture", s = []; t !== null; ) {
      var f = t, g = f.stateNode;
      f.tag === 5 && g !== null && (f = g, g = Qa(t, o), g != null && s.unshift(vo(t, g, f)), g = Qa(t, n), g != null && s.push(vo(t, g, f))), t = t.return;
    }
    return s;
  }
  function pa(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function T1(t, n, o, s, f) {
    for (var g = n._reactName, S = []; o !== null && o !== s; ) {
      var R = o, B = R.alternate, z = R.stateNode;
      if (B !== null && B === s)
        break;
      R.tag === 5 && z !== null && (R = z, f ? (B = Qa(o, g), B != null && S.unshift(vo(o, B, R))) : f || (B = Qa(o, g), B != null && S.push(vo(o, B, R)))), o = o.return;
    }
    S.length !== 0 && t.push({ event: n, listeners: S });
  }
  var My = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function F1(t) {
    return (typeof t == "string" ? t : "" + t).replace(My, `
`).replace($y, "");
  }
  function Dl(t, n, o) {
    if (n = F1(n), F1(t) !== n && o)
      throw Error(a(425));
  }
  function Ml() {
  }
  var Qu = null, Ju = null;
  function es(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var ts = typeof setTimeout == "function" ? setTimeout : void 0, By = typeof clearTimeout == "function" ? clearTimeout : void 0, R1 = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof R1 < "u" ? function(t) {
    return R1.resolve(null).then(t).catch(Py);
  } : ts;
  function Py(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function rs(t, n) {
    var o = n, s = 0;
    do {
      var f = o.nextSibling;
      if (t.removeChild(o), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (s === 0) {
            t.removeChild(f), io(n);
            return;
          }
          s--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || s++;
      o = f;
    } while (o);
    io(n);
  }
  function un(t) {
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
  function L1(t) {
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
  var fa = Math.random().toString(36).slice(2), xr = "__reactFiber$" + fa, bo = "__reactProps$" + fa, Nr = "__reactContainer$" + fa, ns = "__reactEvents$" + fa, Ny = "__reactListeners$" + fa, jy = "__reactHandles$" + fa;
  function Mn(t) {
    var n = t[xr];
    if (n)
      return n;
    for (var o = t.parentNode; o; ) {
      if (n = o[Nr] || o[xr]) {
        if (o = n.alternate, n.child !== null || o !== null && o.child !== null)
          for (t = L1(t); t !== null; ) {
            if (o = t[xr])
              return o;
            t = L1(t);
          }
        return n;
      }
      t = o, o = t.parentNode;
    }
    return null;
  }
  function Eo(t) {
    return t = t[xr] || t[Nr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function ma(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(a(33));
  }
  function $l(t) {
    return t[bo] || null;
  }
  var as = [], ga = -1;
  function sn(t) {
    return { current: t };
  }
  function $e(t) {
    0 > ga || (t.current = as[ga], as[ga] = null, ga--);
  }
  function Re(t, n) {
    ga++, as[ga] = t.current, t.current = n;
  }
  var cn = {}, ct = sn(cn), xt = sn(!1), $n = cn;
  function ha(t, n) {
    var o = t.type.contextTypes;
    if (!o)
      return cn;
    var s = t.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === n)
      return s.__reactInternalMemoizedMaskedChildContext;
    var f = {}, g;
    for (g in o)
      f[g] = n[g];
    return s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function wt(t) {
    return t = t.childContextTypes, t != null;
  }
  function Bl() {
    $e(xt), $e(ct);
  }
  function D1(t, n, o) {
    if (ct.current !== cn)
      throw Error(a(168));
    Re(ct, n), Re(xt, o);
  }
  function M1(t, n, o) {
    var s = t.stateNode;
    if (n = n.childContextTypes, typeof s.getChildContext != "function")
      return o;
    s = s.getChildContext();
    for (var f in s)
      if (!(f in n))
        throw Error(a(108, fe(t) || "Unknown", f));
    return F({}, o, s);
  }
  function Il(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || cn, $n = ct.current, Re(ct, t), Re(xt, xt.current), !0;
  }
  function $1(t, n, o) {
    var s = t.stateNode;
    if (!s)
      throw Error(a(169));
    o ? (t = M1(t, n, $n), s.__reactInternalMemoizedMergedChildContext = t, $e(xt), $e(ct), Re(ct, t)) : $e(xt), Re(xt, o);
  }
  var jr = null, Pl = !1, os = !1;
  function B1(t) {
    jr === null ? jr = [t] : jr.push(t);
  }
  function Hy(t) {
    Pl = !0, B1(t);
  }
  function dn() {
    if (!os && jr !== null) {
      os = !0;
      var t = 0, n = Te;
      try {
        var o = jr;
        for (Te = 1; t < o.length; t++) {
          var s = o[t];
          do
            s = s(!0);
          while (s !== null);
        }
        jr = null, Pl = !1;
      } catch (f) {
        throw jr !== null && (jr = jr.slice(t + 1)), Pd(_u, dn), f;
      } finally {
        Te = n, os = !1;
      }
    }
    return null;
  }
  var ya = [], va = 0, Nl = null, jl = 0, Kt = [], Yt = 0, Bn = null, Hr = 1, Zr = "";
  function In(t, n) {
    ya[va++] = jl, ya[va++] = Nl, Nl = t, jl = n;
  }
  function I1(t, n, o) {
    Kt[Yt++] = Hr, Kt[Yt++] = Zr, Kt[Yt++] = Bn, Bn = t;
    var s = Hr;
    t = Zr;
    var f = 32 - ur(s) - 1;
    s &= ~(1 << f), o += 1;
    var g = 32 - ur(n) + f;
    if (30 < g) {
      var S = f - f % 5;
      g = (s & (1 << S) - 1).toString(32), s >>= S, f -= S, Hr = 1 << 32 - ur(n) + f | o << f | s, Zr = g + t;
    } else
      Hr = 1 << g | o << f | s, Zr = t;
  }
  function ls(t) {
    t.return !== null && (In(t, 1), I1(t, 1, 0));
  }
  function is(t) {
    for (; t === Nl; )
      Nl = ya[--va], ya[va] = null, jl = ya[--va], ya[va] = null;
    for (; t === Bn; )
      Bn = Kt[--Yt], Kt[Yt] = null, Zr = Kt[--Yt], Kt[Yt] = null, Hr = Kt[--Yt], Kt[Yt] = null;
  }
  var Zt = null, zt = null, Be = !1, cr = null;
  function P1(t, n) {
    var o = er(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = n, o.return = t, n = t.deletions, n === null ? (t.deletions = [o], t.flags |= 16) : n.push(o);
  }
  function N1(t, n) {
    switch (t.tag) {
      case 5:
        var o = t.type;
        return n = n.nodeType !== 1 || o.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (t.stateNode = n, Zt = t, zt = un(n.firstChild), !0) : !1;
      case 6:
        return n = t.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (t.stateNode = n, Zt = t, zt = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (o = Bn !== null ? { id: Hr, overflow: Zr } : null, t.memoizedState = { dehydrated: n, treeContext: o, retryLane: 1073741824 }, o = er(18, null, null, 0), o.stateNode = n, o.return = t, t.child = o, Zt = t, zt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function us(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function ss(t) {
    if (Be) {
      var n = zt;
      if (n) {
        var o = n;
        if (!N1(t, n)) {
          if (us(t))
            throw Error(a(418));
          n = un(o.nextSibling);
          var s = Zt;
          n && N1(t, n) ? P1(s, o) : (t.flags = t.flags & -4097 | 2, Be = !1, Zt = t);
        }
      } else {
        if (us(t))
          throw Error(a(418));
        t.flags = t.flags & -4097 | 2, Be = !1, Zt = t;
      }
    }
  }
  function j1(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    Zt = t;
  }
  function Hl(t) {
    if (t !== Zt)
      return !1;
    if (!Be)
      return j1(t), Be = !0, !1;
    var n;
    if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = t.type, n = n !== "head" && n !== "body" && !es(t.type, t.memoizedProps)), n && (n = zt)) {
      if (us(t))
        throw H1(), Error(a(418));
      for (; n; )
        P1(t, n), n = un(n.nextSibling);
    }
    if (j1(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
        throw Error(a(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var o = t.data;
            if (o === "/$") {
              if (n === 0) {
                zt = un(t.nextSibling);
                break e;
              }
              n--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || n++;
          }
          t = t.nextSibling;
        }
        zt = null;
      }
    } else
      zt = Zt ? un(t.stateNode.nextSibling) : null;
    return !0;
  }
  function H1() {
    for (var t = zt; t; )
      t = un(t.nextSibling);
  }
  function ba() {
    zt = Zt = null, Be = !1;
  }
  function cs(t) {
    cr === null ? cr = [t] : cr.push(t);
  }
  var Zy = _.ReactCurrentBatchConfig;
  function dr(t, n) {
    if (t && t.defaultProps) {
      n = F({}, n), t = t.defaultProps;
      for (var o in t)
        n[o] === void 0 && (n[o] = t[o]);
      return n;
    }
    return n;
  }
  var Zl = sn(null), zl = null, Ea = null, ds = null;
  function ps() {
    ds = Ea = zl = null;
  }
  function fs(t) {
    var n = Zl.current;
    $e(Zl), t._currentValue = n;
  }
  function ms(t, n, o) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), t === o)
        break;
      t = t.return;
    }
  }
  function xa(t, n) {
    zl = t, ds = Ea = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & n && (St = !0), t.firstContext = null);
  }
  function Xt(t) {
    var n = t._currentValue;
    if (ds !== t)
      if (t = { context: t, memoizedValue: n, next: null }, Ea === null) {
        if (zl === null)
          throw Error(a(308));
        Ea = t, zl.dependencies = { lanes: 0, firstContext: t };
      } else
        Ea = Ea.next = t;
    return n;
  }
  var Pn = null;
  function gs(t) {
    Pn === null ? Pn = [t] : Pn.push(t);
  }
  function Z1(t, n, o, s) {
    var f = n.interleaved;
    return f === null ? (o.next = o, gs(n)) : (o.next = f.next, f.next = o), n.interleaved = o, zr(t, s);
  }
  function zr(t, n) {
    t.lanes |= n;
    var o = t.alternate;
    for (o !== null && (o.lanes |= n), o = t, t = t.return; t !== null; )
      t.childLanes |= n, o = t.alternate, o !== null && (o.childLanes |= n), o = t, t = t.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var pn = !1;
  function hs(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function z1(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Vr(t, n) {
    return { eventTime: t, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(t, n, o) {
    var s = t.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, Ae & 2) {
      var f = s.pending;
      return f === null ? n.next = n : (n.next = f.next, f.next = n), s.pending = n, zr(t, o);
    }
    return f = s.interleaved, f === null ? (n.next = n, gs(s)) : (n.next = f.next, f.next = n), s.interleaved = n, zr(t, o);
  }
  function Vl(t, n, o) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194240) !== 0)) {
      var s = n.lanes;
      s &= t.pendingLanes, o |= s, n.lanes = o, Fu(t, o);
    }
  }
  function V1(t, n) {
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
  function Ul(t, n, o, s) {
    var f = t.updateQueue;
    pn = !1;
    var g = f.firstBaseUpdate, S = f.lastBaseUpdate, R = f.shared.pending;
    if (R !== null) {
      f.shared.pending = null;
      var B = R, z = B.next;
      B.next = null, S === null ? g = z : S.next = z, S = B;
      var K = t.alternate;
      K !== null && (K = K.updateQueue, R = K.lastBaseUpdate, R !== S && (R === null ? K.firstBaseUpdate = z : R.next = z, K.lastBaseUpdate = B));
    }
    if (g !== null) {
      var X = f.baseState;
      S = 0, K = z = B = null, R = g;
      do {
        var G = R.lane, oe = R.eventTime;
        if ((s & G) === G) {
          K !== null && (K = K.next = {
            eventTime: oe,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var de = t, me = R;
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
                pn = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (t.flags |= 64, G = f.effects, G === null ? f.effects = [R] : G.push(R));
        } else
          oe = { eventTime: oe, lane: G, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, K === null ? (z = K = oe, B = X) : K = K.next = oe, S |= G;
        if (R = R.next, R === null) {
          if (R = f.shared.pending, R === null)
            break;
          G = R, R = G.next, G.next = null, f.lastBaseUpdate = G, f.shared.pending = null;
        }
      } while (1);
      if (K === null && (B = X), f.baseState = B, f.firstBaseUpdate = z, f.lastBaseUpdate = K, n = f.shared.interleaved, n !== null) {
        f = n;
        do
          S |= f.lane, f = f.next;
        while (f !== n);
      } else
        g === null && (f.shared.lanes = 0);
      Hn |= S, t.lanes = S, t.memoizedState = X;
    }
  }
  function U1(t, n, o) {
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
  var q1 = new e.Component().refs;
  function ys(t, n, o, s) {
    n = t.memoizedState, o = o(s, n), o = o == null ? n : F({}, n, o), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
  }
  var ql = { isMounted: function(t) {
    return (t = t._reactInternals) ? Dn(t) === t : !1;
  }, enqueueSetState: function(t, n, o) {
    t = t._reactInternals;
    var s = vt(), f = yn(t), g = Vr(s, f);
    g.payload = n, o != null && (g.callback = o), n = fn(t, g, f), n !== null && (mr(n, t, f, s), Vl(n, t, f));
  }, enqueueReplaceState: function(t, n, o) {
    t = t._reactInternals;
    var s = vt(), f = yn(t), g = Vr(s, f);
    g.tag = 1, g.payload = n, o != null && (g.callback = o), n = fn(t, g, f), n !== null && (mr(n, t, f, s), Vl(n, t, f));
  }, enqueueForceUpdate: function(t, n) {
    t = t._reactInternals;
    var o = vt(), s = yn(t), f = Vr(o, s);
    f.tag = 2, n != null && (f.callback = n), n = fn(t, f, s), n !== null && (mr(n, t, s, o), Vl(n, t, s));
  } };
  function W1(t, n, o, s, f, g, S) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, g, S) : n.prototype && n.prototype.isPureReactComponent ? !mo(o, s) || !mo(f, g) : !0;
  }
  function G1(t, n, o) {
    var s = !1, f = cn, g = n.contextType;
    return typeof g == "object" && g !== null ? g = Xt(g) : (f = wt(n) ? $n : ct.current, s = n.contextTypes, g = (s = s != null) ? ha(t, f) : cn), n = new n(o, g), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ql, t.stateNode = n, n._reactInternals = t, s && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = g), n;
  }
  function K1(t, n, o, s) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== t && ql.enqueueReplaceState(n, n.state, null);
  }
  function vs(t, n, o, s) {
    var f = t.stateNode;
    f.props = o, f.state = t.memoizedState, f.refs = q1, hs(t);
    var g = n.contextType;
    typeof g == "object" && g !== null ? f.context = Xt(g) : (g = wt(n) ? $n : ct.current, f.context = ha(t, g)), f.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (ys(t, n, g, o), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (n = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), n !== f.state && ql.enqueueReplaceState(f, f.state, null), Ul(t, o, f, s), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function xo(t, n, o) {
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
          var R = f.refs;
          R === q1 && (R = f.refs = {}), S === null ? delete R[g] : R[g] = S;
        }, n._stringRef = g, n);
      }
      if (typeof t != "string")
        throw Error(a(284));
      if (!o._owner)
        throw Error(a(290, t));
    }
    return t;
  }
  function Wl(t, n) {
    throw t = Object.prototype.toString.call(n), Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
  }
  function Y1(t) {
    var n = t._init;
    return n(t._payload);
  }
  function X1(t) {
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
      return N = bn(N, I), N.index = 0, N.sibling = null, N;
    }
    function g(N, I, H) {
      return N.index = H, t ? (H = N.alternate, H !== null ? (H = H.index, H < I ? (N.flags |= 2, I) : H) : (N.flags |= 2, I)) : (N.flags |= 1048576, I);
    }
    function S(N) {
      return t && N.alternate === null && (N.flags |= 2), N;
    }
    function R(N, I, H, ee) {
      return I === null || I.tag !== 6 ? (I = tc(H, N.mode, ee), I.return = N, I) : (I = f(I, H), I.return = N, I);
    }
    function B(N, I, H, ee) {
      var ge = H.type;
      return ge === $ ? K(N, I, H.props.children, ee, H.key) : I !== null && (I.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === re && Y1(ge) === I.type) ? (ee = f(I, H.props), ee.ref = xo(N, I, H), ee.return = N, ee) : (ee = pi(H.type, H.key, H.props, null, N.mode, ee), ee.ref = xo(N, I, H), ee.return = N, ee);
    }
    function z(N, I, H, ee) {
      return I === null || I.tag !== 4 || I.stateNode.containerInfo !== H.containerInfo || I.stateNode.implementation !== H.implementation ? (I = rc(H, N.mode, ee), I.return = N, I) : (I = f(I, H.children || []), I.return = N, I);
    }
    function K(N, I, H, ee, ge) {
      return I === null || I.tag !== 7 ? (I = Un(H, N.mode, ee, ge), I.return = N, I) : (I = f(I, H), I.return = N, I);
    }
    function X(N, I, H) {
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return I = tc("" + I, N.mode, H), I.return = N, I;
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case O:
            return H = pi(I.type, I.key, I.props, null, N.mode, H), H.ref = xo(N, null, I), H.return = N, H;
          case L:
            return I = rc(I, N.mode, H), I.return = N, I;
          case re:
            var ee = I._init;
            return X(N, ee(I._payload), H);
        }
        if (ze(I) || W(I))
          return I = Un(I, N.mode, H, null), I.return = N, I;
        Wl(N, I);
      }
      return null;
    }
    function G(N, I, H, ee) {
      var ge = I !== null ? I.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return ge !== null ? null : R(N, I, "" + H, ee);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case O:
            return H.key === ge ? B(N, I, H, ee) : null;
          case L:
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
        Wl(N, H);
      }
      return null;
    }
    function oe(N, I, H, ee, ge) {
      if (typeof ee == "string" && ee !== "" || typeof ee == "number")
        return N = N.get(H) || null, R(I, N, "" + ee, ge);
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case O:
            return N = N.get(ee.key === null ? H : ee.key) || null, B(I, N, ee, ge);
          case L:
            return N = N.get(ee.key === null ? H : ee.key) || null, z(I, N, ee, ge);
          case re:
            var he = ee._init;
            return oe(N, I, H, he(ee._payload), ge);
        }
        if (ze(ee) || W(ee))
          return N = N.get(H) || null, K(I, N, ee, ge, null);
        Wl(I, ee);
      }
      return null;
    }
    function de(N, I, H, ee) {
      for (var ge = null, he = null, ye = I, Ee = I = 0, tt = null; ye !== null && Ee < H.length; Ee++) {
        ye.index > Ee ? (tt = ye, ye = null) : tt = ye.sibling;
        var Ce = G(N, ye, H[Ee], ee);
        if (Ce === null) {
          ye === null && (ye = tt);
          break;
        }
        t && ye && Ce.alternate === null && n(N, ye), I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce, ye = tt;
      }
      if (Ee === H.length)
        return o(N, ye), Be && In(N, Ee), ge;
      if (ye === null) {
        for (; Ee < H.length; Ee++)
          ye = X(N, H[Ee], ee), ye !== null && (I = g(ye, I, Ee), he === null ? ge = ye : he.sibling = ye, he = ye);
        return Be && In(N, Ee), ge;
      }
      for (ye = s(N, ye); Ee < H.length; Ee++)
        tt = oe(ye, N, Ee, H[Ee], ee), tt !== null && (t && tt.alternate !== null && ye.delete(tt.key === null ? Ee : tt.key), I = g(tt, I, Ee), he === null ? ge = tt : he.sibling = tt, he = tt);
      return t && ye.forEach(function(En) {
        return n(N, En);
      }), Be && In(N, Ee), ge;
    }
    function me(N, I, H, ee) {
      var ge = W(H);
      if (typeof ge != "function")
        throw Error(a(150));
      if (H = ge.call(H), H == null)
        throw Error(a(151));
      for (var he = ge = null, ye = I, Ee = I = 0, tt = null, Ce = H.next(); ye !== null && !Ce.done; Ee++, Ce = H.next()) {
        ye.index > Ee ? (tt = ye, ye = null) : tt = ye.sibling;
        var En = G(N, ye, Ce.value, ee);
        if (En === null) {
          ye === null && (ye = tt);
          break;
        }
        t && ye && En.alternate === null && n(N, ye), I = g(En, I, Ee), he === null ? ge = En : he.sibling = En, he = En, ye = tt;
      }
      if (Ce.done)
        return o(
          N,
          ye
        ), Be && In(N, Ee), ge;
      if (ye === null) {
        for (; !Ce.done; Ee++, Ce = H.next())
          Ce = X(N, Ce.value, ee), Ce !== null && (I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce);
        return Be && In(N, Ee), ge;
      }
      for (ye = s(N, ye); !Ce.done; Ee++, Ce = H.next())
        Ce = oe(ye, N, Ee, Ce.value, ee), Ce !== null && (t && Ce.alternate !== null && ye.delete(Ce.key === null ? Ee : Ce.key), I = g(Ce, I, Ee), he === null ? ge = Ce : he.sibling = Ce, he = Ce);
      return t && ye.forEach(function(xv) {
        return n(N, xv);
      }), Be && In(N, Ee), ge;
    }
    function qe(N, I, H, ee) {
      if (typeof H == "object" && H !== null && H.type === $ && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case O:
            e: {
              for (var ge = H.key, he = I; he !== null; ) {
                if (he.key === ge) {
                  if (ge = H.type, ge === $) {
                    if (he.tag === 7) {
                      o(N, he.sibling), I = f(he, H.props.children), I.return = N, N = I;
                      break e;
                    }
                  } else if (he.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === re && Y1(ge) === he.type) {
                    o(N, he.sibling), I = f(he, H.props), I.ref = xo(N, he, H), I.return = N, N = I;
                    break e;
                  }
                  o(N, he);
                  break;
                } else
                  n(N, he);
                he = he.sibling;
              }
              H.type === $ ? (I = Un(H.props.children, N.mode, ee, H.key), I.return = N, N = I) : (ee = pi(H.type, H.key, H.props, null, N.mode, ee), ee.ref = xo(N, I, H), ee.return = N, N = ee);
            }
            return S(N);
          case L:
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
              I = rc(H, N.mode, ee), I.return = N, N = I;
            }
            return S(N);
          case re:
            return he = H._init, qe(N, I, he(H._payload), ee);
        }
        if (ze(H))
          return de(N, I, H, ee);
        if (W(H))
          return me(N, I, H, ee);
        Wl(N, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, I !== null && I.tag === 6 ? (o(N, I.sibling), I = f(I, H), I.return = N, N = I) : (o(N, I), I = tc(H, N.mode, ee), I.return = N, N = I), S(N)) : o(N, I);
    }
    return qe;
  }
  var wa = X1(!0), Q1 = X1(!1), wo = {}, wr = sn(wo), So = sn(wo), Ao = sn(wo);
  function Nn(t) {
    if (t === wo)
      throw Error(a(174));
    return t;
  }
  function bs(t, n) {
    switch (Re(Ao, n), Re(So, t), Re(wr, wo), t = n.nodeType, t) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : We(null, "");
        break;
      default:
        t = t === 8 ? n.parentNode : n, n = t.namespaceURI || null, t = t.tagName, n = We(n, t);
    }
    $e(wr), Re(wr, n);
  }
  function Sa() {
    $e(wr), $e(So), $e(Ao);
  }
  function J1(t) {
    Nn(Ao.current);
    var n = Nn(wr.current), o = We(n, t.type);
    n !== o && (Re(So, t), Re(wr, o));
  }
  function Es(t) {
    So.current === t && ($e(wr), $e(So));
  }
  var Pe = sn(0);
  function Gl(t) {
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
  var xs = [];
  function ws() {
    for (var t = 0; t < xs.length; t++)
      xs[t]._workInProgressVersionPrimary = null;
    xs.length = 0;
  }
  var Kl = _.ReactCurrentDispatcher, Ss = _.ReactCurrentBatchConfig, jn = 0, Ne = null, Ye = null, Je = null, Yl = !1, Co = !1, ko = 0, zy = 0;
  function dt() {
    throw Error(a(321));
  }
  function As(t, n) {
    if (n === null)
      return !1;
    for (var o = 0; o < n.length && o < t.length; o++)
      if (!sr(t[o], n[o]))
        return !1;
    return !0;
  }
  function Cs(t, n, o, s, f, g) {
    if (jn = g, Ne = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Kl.current = t === null || t.memoizedState === null ? Wy : Gy, t = o(s, f), Co) {
      g = 0;
      do {
        if (Co = !1, ko = 0, 25 <= g)
          throw Error(a(301));
        g += 1, Je = Ye = null, n.updateQueue = null, Kl.current = Ky, t = o(s, f);
      } while (Co);
    }
    if (Kl.current = Jl, n = Ye !== null && Ye.next !== null, jn = 0, Je = Ye = Ne = null, Yl = !1, n)
      throw Error(a(300));
    return t;
  }
  function ks() {
    var t = ko !== 0;
    return ko = 0, t;
  }
  function Sr() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? Ne.memoizedState = Je = t : Je = Je.next = t, Je;
  }
  function Qt() {
    if (Ye === null) {
      var t = Ne.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = Ye.next;
    var n = Je === null ? Ne.memoizedState : Je.next;
    if (n !== null)
      Je = n, Ye = t;
    else {
      if (t === null)
        throw Error(a(310));
      Ye = t, t = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, Je === null ? Ne.memoizedState = Je = t : Je = Je.next = t;
    }
    return Je;
  }
  function _o(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function _s(t) {
    var n = Qt(), o = n.queue;
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
      var R = S = null, B = null, z = g;
      do {
        var K = z.lane;
        if ((jn & K) === K)
          B !== null && (B = B.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), s = z.hasEagerState ? z.eagerState : t(s, z.action);
        else {
          var X = {
            lane: K,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          B === null ? (R = B = X, S = s) : B = B.next = X, Ne.lanes |= K, Hn |= K;
        }
        z = z.next;
      } while (z !== null && z !== g);
      B === null ? S = s : B.next = R, sr(s, n.memoizedState) || (St = !0), n.memoizedState = s, n.baseState = S, n.baseQueue = B, o.lastRenderedState = s;
    }
    if (t = o.interleaved, t !== null) {
      f = t;
      do
        g = f.lane, Ne.lanes |= g, Hn |= g, f = f.next;
      while (f !== t);
    } else
      f === null && (o.lanes = 0);
    return [n.memoizedState, o.dispatch];
  }
  function Os(t) {
    var n = Qt(), o = n.queue;
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
      sr(g, n.memoizedState) || (St = !0), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), o.lastRenderedState = g;
    }
    return [g, s];
  }
  function ep() {
  }
  function tp(t, n) {
    var o = Ne, s = Qt(), f = n(), g = !sr(s.memoizedState, f);
    if (g && (s.memoizedState = f, St = !0), s = s.queue, Ts(ap.bind(null, o, s, t), [t]), s.getSnapshot !== n || g || Je !== null && Je.memoizedState.tag & 1) {
      if (o.flags |= 2048, Oo(9, np.bind(null, o, s, f, n), void 0, null), et === null)
        throw Error(a(349));
      jn & 30 || rp(o, n, f);
    }
    return f;
  }
  function rp(t, n, o) {
    t.flags |= 16384, t = { getSnapshot: n, value: o }, n = Ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ne.updateQueue = n, n.stores = [t]) : (o = n.stores, o === null ? n.stores = [t] : o.push(t));
  }
  function np(t, n, o, s) {
    n.value = o, n.getSnapshot = s, op(n) && lp(t);
  }
  function ap(t, n, o) {
    return o(function() {
      op(n) && lp(t);
    });
  }
  function op(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var o = n();
      return !sr(t, o);
    } catch {
      return !0;
    }
  }
  function lp(t) {
    var n = zr(t, 1);
    n !== null && mr(n, t, 1, -1);
  }
  function ip(t) {
    var n = Sr();
    return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _o, lastRenderedState: t }, n.queue = t, t = t.dispatch = qy.bind(null, Ne, t), [n.memoizedState, t];
  }
  function Oo(t, n, o, s) {
    return t = { tag: t, create: n, destroy: o, deps: s, next: null }, n = Ne.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Ne.updateQueue = n, n.lastEffect = t.next = t) : (o = n.lastEffect, o === null ? n.lastEffect = t.next = t : (s = o.next, o.next = t, t.next = s, n.lastEffect = t)), t;
  }
  function up() {
    return Qt().memoizedState;
  }
  function Xl(t, n, o, s) {
    var f = Sr();
    Ne.flags |= t, f.memoizedState = Oo(1 | n, o, void 0, s === void 0 ? null : s);
  }
  function Ql(t, n, o, s) {
    var f = Qt();
    s = s === void 0 ? null : s;
    var g = void 0;
    if (Ye !== null) {
      var S = Ye.memoizedState;
      if (g = S.destroy, s !== null && As(s, S.deps)) {
        f.memoizedState = Oo(n, o, g, s);
        return;
      }
    }
    Ne.flags |= t, f.memoizedState = Oo(1 | n, o, g, s);
  }
  function sp(t, n) {
    return Xl(8390656, 8, t, n);
  }
  function Ts(t, n) {
    return Ql(2048, 8, t, n);
  }
  function cp(t, n) {
    return Ql(4, 2, t, n);
  }
  function dp(t, n) {
    return Ql(4, 4, t, n);
  }
  function pp(t, n) {
    if (typeof n == "function")
      return t = t(), n(t), function() {
        n(null);
      };
    if (n != null)
      return t = t(), n.current = t, function() {
        n.current = null;
      };
  }
  function fp(t, n, o) {
    return o = o != null ? o.concat([t]) : null, Ql(4, 4, pp.bind(null, n, t), o);
  }
  function Fs() {
  }
  function mp(t, n) {
    var o = Qt();
    n = n === void 0 ? null : n;
    var s = o.memoizedState;
    return s !== null && n !== null && As(n, s[1]) ? s[0] : (o.memoizedState = [t, n], t);
  }
  function gp(t, n) {
    var o = Qt();
    n = n === void 0 ? null : n;
    var s = o.memoizedState;
    return s !== null && n !== null && As(n, s[1]) ? s[0] : (t = t(), o.memoizedState = [t, n], t);
  }
  function hp(t, n, o) {
    return jn & 21 ? (sr(o, n) || (o = Zd(), Ne.lanes |= o, Hn |= o, t.baseState = !0), n) : (t.baseState && (t.baseState = !1, St = !0), t.memoizedState = o);
  }
  function Vy(t, n) {
    var o = Te;
    Te = o !== 0 && 4 > o ? o : 4, t(!0);
    var s = Ss.transition;
    Ss.transition = {};
    try {
      t(!1), n();
    } finally {
      Te = o, Ss.transition = s;
    }
  }
  function yp() {
    return Qt().memoizedState;
  }
  function Uy(t, n, o) {
    var s = yn(t);
    if (o = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null }, vp(t))
      bp(n, o);
    else if (o = Z1(t, n, o, s), o !== null) {
      var f = vt();
      mr(o, t, s, f), Ep(o, n, s);
    }
  }
  function qy(t, n, o) {
    var s = yn(t), f = { lane: s, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (vp(t))
      bp(n, f);
    else {
      var g = t.alternate;
      if (t.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null))
        try {
          var S = n.lastRenderedState, R = g(S, o);
          if (f.hasEagerState = !0, f.eagerState = R, sr(R, S)) {
            var B = n.interleaved;
            B === null ? (f.next = f, gs(n)) : (f.next = B.next, B.next = f), n.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      o = Z1(t, n, f, s), o !== null && (f = vt(), mr(o, t, s, f), Ep(o, n, s));
    }
  }
  function vp(t) {
    var n = t.alternate;
    return t === Ne || n !== null && n === Ne;
  }
  function bp(t, n) {
    Co = Yl = !0;
    var o = t.pending;
    o === null ? n.next = n : (n.next = o.next, o.next = n), t.pending = n;
  }
  function Ep(t, n, o) {
    if (o & 4194240) {
      var s = n.lanes;
      s &= t.pendingLanes, o |= s, n.lanes = o, Fu(t, o);
    }
  }
  var Jl = { readContext: Xt, useCallback: dt, useContext: dt, useEffect: dt, useImperativeHandle: dt, useInsertionEffect: dt, useLayoutEffect: dt, useMemo: dt, useReducer: dt, useRef: dt, useState: dt, useDebugValue: dt, useDeferredValue: dt, useTransition: dt, useMutableSource: dt, useSyncExternalStore: dt, useId: dt, unstable_isNewReconciler: !1 }, Wy = { readContext: Xt, useCallback: function(t, n) {
    return Sr().memoizedState = [t, n === void 0 ? null : n], t;
  }, useContext: Xt, useEffect: sp, useImperativeHandle: function(t, n, o) {
    return o = o != null ? o.concat([t]) : null, Xl(
      4194308,
      4,
      pp.bind(null, n, t),
      o
    );
  }, useLayoutEffect: function(t, n) {
    return Xl(4194308, 4, t, n);
  }, useInsertionEffect: function(t, n) {
    return Xl(4, 2, t, n);
  }, useMemo: function(t, n) {
    var o = Sr();
    return n = n === void 0 ? null : n, t = t(), o.memoizedState = [t, n], t;
  }, useReducer: function(t, n, o) {
    var s = Sr();
    return n = o !== void 0 ? o(n) : n, s.memoizedState = s.baseState = n, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: n }, s.queue = t, t = t.dispatch = Uy.bind(null, Ne, t), [s.memoizedState, t];
  }, useRef: function(t) {
    var n = Sr();
    return t = { current: t }, n.memoizedState = t;
  }, useState: ip, useDebugValue: Fs, useDeferredValue: function(t) {
    return Sr().memoizedState = t;
  }, useTransition: function() {
    var t = ip(!1), n = t[0];
    return t = Vy.bind(null, t[1]), Sr().memoizedState = t, [n, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, n, o) {
    var s = Ne, f = Sr();
    if (Be) {
      if (o === void 0)
        throw Error(a(407));
      o = o();
    } else {
      if (o = n(), et === null)
        throw Error(a(349));
      jn & 30 || rp(s, n, o);
    }
    f.memoizedState = o;
    var g = { value: o, getSnapshot: n };
    return f.queue = g, sp(ap.bind(
      null,
      s,
      g,
      t
    ), [t]), s.flags |= 2048, Oo(9, np.bind(null, s, g, o, n), void 0, null), o;
  }, useId: function() {
    var t = Sr(), n = et.identifierPrefix;
    if (Be) {
      var o = Zr, s = Hr;
      o = (s & ~(1 << 32 - ur(s) - 1)).toString(32) + o, n = ":" + n + "R" + o, o = ko++, 0 < o && (n += "H" + o.toString(32)), n += ":";
    } else
      o = zy++, n = ":" + n + "r" + o.toString(32) + ":";
    return t.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, Gy = {
    readContext: Xt,
    useCallback: mp,
    useContext: Xt,
    useEffect: Ts,
    useImperativeHandle: fp,
    useInsertionEffect: cp,
    useLayoutEffect: dp,
    useMemo: gp,
    useReducer: _s,
    useRef: up,
    useState: function() {
      return _s(_o);
    },
    useDebugValue: Fs,
    useDeferredValue: function(t) {
      var n = Qt();
      return hp(n, Ye.memoizedState, t);
    },
    useTransition: function() {
      var t = _s(_o)[0], n = Qt().memoizedState;
      return [t, n];
    },
    useMutableSource: ep,
    useSyncExternalStore: tp,
    useId: yp,
    unstable_isNewReconciler: !1
  }, Ky = { readContext: Xt, useCallback: mp, useContext: Xt, useEffect: Ts, useImperativeHandle: fp, useInsertionEffect: cp, useLayoutEffect: dp, useMemo: gp, useReducer: Os, useRef: up, useState: function() {
    return Os(_o);
  }, useDebugValue: Fs, useDeferredValue: function(t) {
    var n = Qt();
    return Ye === null ? n.memoizedState = t : hp(n, Ye.memoizedState, t);
  }, useTransition: function() {
    var t = Os(_o)[0], n = Qt().memoizedState;
    return [t, n];
  }, useMutableSource: ep, useSyncExternalStore: tp, useId: yp, unstable_isNewReconciler: !1 };
  function Aa(t, n) {
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
  function Rs(t, n, o) {
    return { value: t, source: null, stack: o ?? null, digest: n ?? null };
  }
  function Ls(t, n) {
    try {
      console.error(n.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Yy = typeof WeakMap == "function" ? WeakMap : Map;
  function xp(t, n, o) {
    o = Vr(-1, o), o.tag = 3, o.payload = { element: null };
    var s = n.value;
    return o.callback = function() {
      li || (li = !0, Ws = s), Ls(t, n);
    }, o;
  }
  function wp(t, n, o) {
    o = Vr(-1, o), o.tag = 3;
    var s = t.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = n.value;
      o.payload = function() {
        return s(f);
      }, o.callback = function() {
        Ls(t, n);
      };
    }
    var g = t.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
      Ls(t, n), typeof s != "function" && (gn === null ? gn = /* @__PURE__ */ new Set([this]) : gn.add(this));
      var S = n.stack;
      this.componentDidCatch(n.value, { componentStack: S !== null ? S : "" });
    }), o;
  }
  function Sp(t, n, o) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new Yy();
      var f = /* @__PURE__ */ new Set();
      s.set(n, f);
    } else
      f = s.get(n), f === void 0 && (f = /* @__PURE__ */ new Set(), s.set(n, f));
    f.has(o) || (f.add(o), t = cv.bind(null, t, n, o), n.then(t, t));
  }
  function Ap(t) {
    do {
      var n;
      if ((n = t.tag === 13) && (n = t.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Cp(t, n, o, s, f) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = f, t) : (t === n ? t.flags |= 65536 : (t.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (n = Vr(-1, 1), n.tag = 2, fn(o, n, 1))), o.lanes |= 1), t);
  }
  var Xy = _.ReactCurrentOwner, St = !1;
  function yt(t, n, o, s) {
    n.child = t === null ? Q1(n, null, o, s) : wa(n, t.child, o, s);
  }
  function kp(t, n, o, s, f) {
    o = o.render;
    var g = n.ref;
    return xa(n, f), s = Cs(t, n, o, s, g, f), o = ks(), t !== null && !St ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, Ur(t, n, f)) : (Be && o && ls(n), n.flags |= 1, yt(t, n, s, f), n.child);
  }
  function _p(t, n, o, s, f) {
    if (t === null) {
      var g = o.type;
      return typeof g == "function" && !ec(g) && g.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (n.tag = 15, n.type = g, Op(t, n, g, s, f)) : (t = pi(o.type, null, s, n, n.mode, f), t.ref = n.ref, t.return = n, n.child = t);
    }
    if (g = t.child, !(t.lanes & f)) {
      var S = g.memoizedProps;
      if (o = o.compare, o = o !== null ? o : mo, o(S, s) && t.ref === n.ref)
        return Ur(t, n, f);
    }
    return n.flags |= 1, t = bn(g, s), t.ref = n.ref, t.return = n, n.child = t;
  }
  function Op(t, n, o, s, f) {
    if (t !== null) {
      var g = t.memoizedProps;
      if (mo(g, s) && t.ref === n.ref)
        if (St = !1, n.pendingProps = s = g, (t.lanes & f) !== 0)
          t.flags & 131072 && (St = !0);
        else
          return n.lanes = t.lanes, Ur(t, n, f);
    }
    return Ds(t, n, o, s, f);
  }
  function Tp(t, n, o) {
    var s = n.pendingProps, f = s.children, g = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Re(ka, Vt), Vt |= o;
      else {
        if (!(o & 1073741824))
          return t = g !== null ? g.baseLanes | o : o, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, n.updateQueue = null, Re(ka, Vt), Vt |= t, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = g !== null ? g.baseLanes : o, Re(ka, Vt), Vt |= s;
      }
    else
      g !== null ? (s = g.baseLanes | o, n.memoizedState = null) : s = o, Re(ka, Vt), Vt |= s;
    return yt(t, n, f, o), n.child;
  }
  function Fp(t, n) {
    var o = n.ref;
    (t === null && o !== null || t !== null && t.ref !== o) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Ds(t, n, o, s, f) {
    var g = wt(o) ? $n : ct.current;
    return g = ha(n, g), xa(n, f), o = Cs(t, n, o, s, g, f), s = ks(), t !== null && !St ? (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~f, Ur(t, n, f)) : (Be && s && ls(n), n.flags |= 1, yt(t, n, o, f), n.child);
  }
  function Rp(t, n, o, s, f) {
    if (wt(o)) {
      var g = !0;
      Il(n);
    } else
      g = !1;
    if (xa(n, f), n.stateNode === null)
      ti(t, n), G1(n, o, s), vs(n, o, s, f), s = !0;
    else if (t === null) {
      var S = n.stateNode, R = n.memoizedProps;
      S.props = R;
      var B = S.context, z = o.contextType;
      typeof z == "object" && z !== null ? z = Xt(z) : (z = wt(o) ? $n : ct.current, z = ha(n, z));
      var K = o.getDerivedStateFromProps, X = typeof K == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      X || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (R !== s || B !== z) && K1(n, S, s, z), pn = !1;
      var G = n.memoizedState;
      S.state = G, Ul(n, s, S, f), B = n.memoizedState, R !== s || G !== B || xt.current || pn ? (typeof K == "function" && (ys(n, o, K, s), B = n.memoizedState), (R = pn || W1(n, o, R, s, G, B, z)) ? (X || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = B), S.props = s, S.state = B, S.context = z, s = R) : (typeof S.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
    } else {
      S = n.stateNode, z1(t, n), R = n.memoizedProps, z = n.type === n.elementType ? R : dr(n.type, R), S.props = z, X = n.pendingProps, G = S.context, B = o.contextType, typeof B == "object" && B !== null ? B = Xt(B) : (B = wt(o) ? $n : ct.current, B = ha(n, B));
      var oe = o.getDerivedStateFromProps;
      (K = typeof oe == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (R !== X || G !== B) && K1(n, S, s, B), pn = !1, G = n.memoizedState, S.state = G, Ul(n, s, S, f);
      var de = n.memoizedState;
      R !== X || G !== de || xt.current || pn ? (typeof oe == "function" && (ys(n, o, oe, s), de = n.memoizedState), (z = pn || W1(n, o, z, s, G, de, B) || !1) ? (K || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(s, de, B), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(s, de, B)), typeof S.componentDidUpdate == "function" && (n.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || R === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || R === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = de), S.props = s, S.state = de, S.context = B, s = z) : (typeof S.componentDidUpdate != "function" || R === t.memoizedProps && G === t.memoizedState || (n.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || R === t.memoizedProps && G === t.memoizedState || (n.flags |= 1024), s = !1);
    }
    return Ms(t, n, o, s, g, f);
  }
  function Ms(t, n, o, s, f, g) {
    Fp(t, n);
    var S = (n.flags & 128) !== 0;
    if (!s && !S)
      return f && $1(n, o, !1), Ur(t, n, g);
    s = n.stateNode, Xy.current = n;
    var R = S && typeof o.getDerivedStateFromError != "function" ? null : s.render();
    return n.flags |= 1, t !== null && S ? (n.child = wa(n, t.child, null, g), n.child = wa(n, null, R, g)) : yt(t, n, R, g), n.memoizedState = s.state, f && $1(n, o, !0), n.child;
  }
  function Lp(t) {
    var n = t.stateNode;
    n.pendingContext ? D1(t, n.pendingContext, n.pendingContext !== n.context) : n.context && D1(t, n.context, !1), bs(t, n.containerInfo);
  }
  function Dp(t, n, o, s, f) {
    return ba(), cs(f), n.flags |= 256, yt(t, n, o, s), n.child;
  }
  var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bs(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Mp(t, n, o) {
    var s = n.pendingProps, f = Pe.current, g = !1, S = (n.flags & 128) !== 0, R;
    if ((R = S) || (R = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), R ? (g = !0, n.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Re(Pe, f & 1), t === null)
      return ss(n), t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (n.mode & 1 ? t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (S = s.children, t = s.fallback, g ? (s = n.mode, g = n.child, S = { mode: "hidden", children: S }, !(s & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = S) : g = fi(S, s, 0, null), t = Un(t, s, o, null), g.return = n, t.return = n, g.sibling = t, n.child = g, n.child.memoizedState = Bs(o), n.memoizedState = $s, t) : Is(n, S));
    if (f = t.memoizedState, f !== null && (R = f.dehydrated, R !== null))
      return Qy(t, n, S, s, R, f, o);
    if (g) {
      g = s.fallback, S = n.mode, f = t.child, R = f.sibling;
      var B = { mode: "hidden", children: s.children };
      return !(S & 1) && n.child !== f ? (s = n.child, s.childLanes = 0, s.pendingProps = B, n.deletions = null) : (s = bn(f, B), s.subtreeFlags = f.subtreeFlags & 14680064), R !== null ? g = bn(R, g) : (g = Un(g, S, o, null), g.flags |= 2), g.return = n, s.return = n, s.sibling = g, n.child = s, s = g, g = n.child, S = t.child.memoizedState, S = S === null ? Bs(o) : { baseLanes: S.baseLanes | o, cachePool: null, transitions: S.transitions }, g.memoizedState = S, g.childLanes = t.childLanes & ~o, n.memoizedState = $s, s;
    }
    return g = t.child, t = g.sibling, s = bn(g, { mode: "visible", children: s.children }), !(n.mode & 1) && (s.lanes = o), s.return = n, s.sibling = null, t !== null && (o = n.deletions, o === null ? (n.deletions = [t], n.flags |= 16) : o.push(t)), n.child = s, n.memoizedState = null, s;
  }
  function Is(t, n) {
    return n = fi({ mode: "visible", children: n }, t.mode, 0, null), n.return = t, t.child = n;
  }
  function ei(t, n, o, s) {
    return s !== null && cs(s), wa(n, t.child, null, o), t = Is(n, n.pendingProps.children), t.flags |= 2, n.memoizedState = null, t;
  }
  function Qy(t, n, o, s, f, g, S) {
    if (o)
      return n.flags & 256 ? (n.flags &= -257, s = Rs(Error(a(422))), ei(t, n, S, s)) : n.memoizedState !== null ? (n.child = t.child, n.flags |= 128, null) : (g = s.fallback, f = n.mode, s = fi({ mode: "visible", children: s.children }, f, 0, null), g = Un(g, f, S, null), g.flags |= 2, s.return = n, g.return = n, s.sibling = g, n.child = s, n.mode & 1 && wa(n, t.child, null, S), n.child.memoizedState = Bs(S), n.memoizedState = $s, g);
    if (!(n.mode & 1))
      return ei(t, n, S, null);
    if (f.data === "$!") {
      if (s = f.nextSibling && f.nextSibling.dataset, s)
        var R = s.dgst;
      return s = R, g = Error(a(419)), s = Rs(g, s, void 0), ei(t, n, S, s);
    }
    if (R = (S & t.childLanes) !== 0, St || R) {
      if (s = et, s !== null) {
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
        f = f & (s.suspendedLanes | S) ? 0 : f, f !== 0 && f !== g.retryLane && (g.retryLane = f, zr(t, f), mr(s, t, f, -1));
      }
      return Js(), s = Rs(Error(a(421))), ei(t, n, S, s);
    }
    return f.data === "$?" ? (n.flags |= 128, n.child = t.child, n = dv.bind(null, t), f._reactRetry = n, null) : (t = g.treeContext, zt = un(f.nextSibling), Zt = n, Be = !0, cr = null, t !== null && (Kt[Yt++] = Hr, Kt[Yt++] = Zr, Kt[Yt++] = Bn, Hr = t.id, Zr = t.overflow, Bn = n), n = Is(n, s.children), n.flags |= 4096, n);
  }
  function $p(t, n, o) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n), ms(t.return, n, o);
  }
  function Ps(t, n, o, s, f) {
    var g = t.memoizedState;
    g === null ? t.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: s, tail: o, tailMode: f } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = s, g.tail = o, g.tailMode = f);
  }
  function Bp(t, n, o) {
    var s = n.pendingProps, f = s.revealOrder, g = s.tail;
    if (yt(t, n, s.children, o), s = Pe.current, s & 2)
      s = s & 1 | 2, n.flags |= 128;
    else {
      if (t !== null && t.flags & 128)
        e:
          for (t = n.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && $p(t, o, n);
            else if (t.tag === 19)
              $p(t, o, n);
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
            t = o.alternate, t !== null && Gl(t) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = n.child, n.child = null) : (f = o.sibling, o.sibling = null), Ps(n, !1, f, o, g);
          break;
        case "backwards":
          for (o = null, f = n.child, n.child = null; f !== null; ) {
            if (t = f.alternate, t !== null && Gl(t) === null) {
              n.child = f;
              break;
            }
            t = f.sibling, f.sibling = o, o = f, f = t;
          }
          Ps(n, !0, o, null, g);
          break;
        case "together":
          Ps(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function ti(t, n) {
    !(n.mode & 1) && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Ur(t, n, o) {
    if (t !== null && (n.dependencies = t.dependencies), Hn |= n.lanes, !(o & n.childLanes))
      return null;
    if (t !== null && n.child !== t.child)
      throw Error(a(153));
    if (n.child !== null) {
      for (t = n.child, o = bn(t, t.pendingProps), n.child = o, o.return = n; t.sibling !== null; )
        t = t.sibling, o = o.sibling = bn(t, t.pendingProps), o.return = n;
      o.sibling = null;
    }
    return n.child;
  }
  function Jy(t, n, o) {
    switch (n.tag) {
      case 3:
        Lp(n), ba();
        break;
      case 5:
        J1(n);
        break;
      case 1:
        wt(n.type) && Il(n);
        break;
      case 4:
        bs(n, n.stateNode.containerInfo);
        break;
      case 10:
        var s = n.type._context, f = n.memoizedProps.value;
        Re(Zl, s._currentValue), s._currentValue = f;
        break;
      case 13:
        if (s = n.memoizedState, s !== null)
          return s.dehydrated !== null ? (Re(Pe, Pe.current & 1), n.flags |= 128, null) : o & n.child.childLanes ? Mp(t, n, o) : (Re(Pe, Pe.current & 1), t = Ur(t, n, o), t !== null ? t.sibling : null);
        Re(Pe, Pe.current & 1);
        break;
      case 19:
        if (s = (o & n.childLanes) !== 0, t.flags & 128) {
          if (s)
            return Bp(t, n, o);
          n.flags |= 128;
        }
        if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Re(Pe, Pe.current), s)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Tp(t, n, o);
    }
    return Ur(t, n, o);
  }
  var Ip, Ns, Pp, Np;
  Ip = function(t, n) {
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
  }, Ns = function() {
  }, Pp = function(t, n, o, s) {
    var f = t.memoizedProps;
    if (f !== s) {
      t = n.stateNode, Nn(wr.current);
      var g = null;
      switch (o) {
        case "input":
          f = ht(t, f), s = ht(t, s), g = [];
          break;
        case "select":
          f = F({}, f, { value: void 0 }), s = F({}, s, { value: void 0 }), g = [];
          break;
        case "textarea":
          f = Et(t, f), s = Et(t, s), g = [];
          break;
        default:
          typeof f.onClick != "function" && typeof s.onClick == "function" && (t.onclick = Ml);
      }
      ir(o, s);
      var S;
      o = null;
      for (z in f)
        if (!s.hasOwnProperty(z) && f.hasOwnProperty(z) && f[z] != null)
          if (z === "style") {
            var R = f[z];
            for (S in R)
              R.hasOwnProperty(S) && (o || (o = {}), o[S] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (i.hasOwnProperty(z) ? g || (g = []) : (g = g || []).push(z, null));
      for (z in s) {
        var B = s[z];
        if (R = f?.[z], s.hasOwnProperty(z) && B !== R && (B != null || R != null))
          if (z === "style")
            if (R) {
              for (S in R)
                !R.hasOwnProperty(S) || B && B.hasOwnProperty(S) || (o || (o = {}), o[S] = "");
              for (S in B)
                B.hasOwnProperty(S) && R[S] !== B[S] && (o || (o = {}), o[S] = B[S]);
            } else
              o || (g || (g = []), g.push(
                z,
                o
              )), o = B;
          else
            z === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, R = R ? R.__html : void 0, B != null && R !== B && (g = g || []).push(z, B)) : z === "children" ? typeof B != "string" && typeof B != "number" || (g = g || []).push(z, "" + B) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (i.hasOwnProperty(z) ? (B != null && z === "onScroll" && Me("scroll", t), g || R === B || (g = [])) : (g = g || []).push(z, B));
      }
      o && (g = g || []).push("style", o);
      var z = g;
      (n.updateQueue = z) && (n.flags |= 4);
    }
  }, Np = function(t, n, o, s) {
    o !== s && (n.flags |= 4);
  };
  function To(t, n) {
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
  function pt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, o = 0, s = 0;
    if (n)
      for (var f = t.child; f !== null; )
        o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 14680064, s |= f.flags & 14680064, f.return = t, f = f.sibling;
    else
      for (f = t.child; f !== null; )
        o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= s, t.childLanes = o, n;
  }
  function ev(t, n, o) {
    var s = n.pendingProps;
    switch (is(n), n.tag) {
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
        return pt(n), null;
      case 1:
        return wt(n.type) && Bl(), pt(n), null;
      case 3:
        return s = n.stateNode, Sa(), $e(xt), $e(ct), ws(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (t === null || t.child === null) && (Hl(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, cr !== null && (Ys(cr), cr = null))), Ns(t, n), pt(n), null;
      case 5:
        Es(n);
        var f = Nn(Ao.current);
        if (o = n.type, t !== null && n.stateNode != null)
          Pp(t, n, o, s, f), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!s) {
            if (n.stateNode === null)
              throw Error(a(166));
            return pt(n), null;
          }
          if (t = Nn(wr.current), Hl(n)) {
            s = n.stateNode, o = n.type;
            var g = n.memoizedProps;
            switch (s[xr] = n, s[bo] = g, t = (n.mode & 1) !== 0, o) {
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
                for (f = 0; f < ho.length; f++)
                  Me(ho[f], s);
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
                Bt(s, g), Me("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!g.multiple }, Me("invalid", s);
                break;
              case "textarea":
                Br(s, g), Me("invalid", s);
            }
            ir(o, g), f = null;
            for (var S in g)
              if (g.hasOwnProperty(S)) {
                var R = g[S];
                S === "children" ? typeof R == "string" ? s.textContent !== R && (g.suppressHydrationWarning !== !0 && Dl(s.textContent, R, t), f = ["children", R]) : typeof R == "number" && s.textContent !== "" + R && (g.suppressHydrationWarning !== !0 && Dl(
                  s.textContent,
                  R,
                  t
                ), f = ["children", "" + R]) : i.hasOwnProperty(S) && R != null && S === "onScroll" && Me("scroll", s);
              }
            switch (o) {
              case "input":
                rt(s), It(s, g, !0);
                break;
              case "textarea":
                rt(s), Ir(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (s.onclick = Ml);
            }
            s = f, n.updateQueue = s, s !== null && (n.flags |= 4);
          } else {
            S = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Nt(o)), t === "http://www.w3.org/1999/xhtml" ? o === "script" ? (t = S.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof s.is == "string" ? t = S.createElement(o, { is: s.is }) : (t = S.createElement(o), o === "select" && (S = t, s.multiple ? S.multiple = !0 : s.size && (S.size = s.size))) : t = S.createElementNS(t, o), t[xr] = n, t[bo] = s, Ip(t, n, !1, !1), n.stateNode = t;
            e: {
              switch (S = jt(o, s), o) {
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
                  for (f = 0; f < ho.length; f++)
                    Me(ho[f], t);
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
                  Bt(t, s), f = ht(t, s), Me("invalid", t);
                  break;
                case "option":
                  f = s;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!s.multiple }, f = F({}, s, { value: void 0 }), Me("invalid", t);
                  break;
                case "textarea":
                  Br(t, s), f = Et(t, s), Me("invalid", t);
                  break;
                default:
                  f = s;
              }
              ir(o, f), R = f;
              for (g in R)
                if (R.hasOwnProperty(g)) {
                  var B = R[g];
                  g === "style" ? br(t, B) : g === "dangerouslySetInnerHTML" ? (B = B ? B.__html : void 0, B != null && Ve(t, B)) : g === "children" ? typeof B == "string" ? (o !== "textarea" || B !== "") && Fe(t, B) : typeof B == "number" && Fe(t, "" + B) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (i.hasOwnProperty(g) ? B != null && g === "onScroll" && Me("scroll", t) : B != null && k(t, g, B, S));
                }
              switch (o) {
                case "input":
                  rt(t), It(t, s, !1);
                  break;
                case "textarea":
                  rt(t), Ir(t);
                  break;
                case "option":
                  s.value != null && t.setAttribute("value", "" + ve(s.value));
                  break;
                case "select":
                  t.multiple = !!s.multiple, g = s.value, g != null ? bt(t, !!s.multiple, g, !1) : s.defaultValue != null && bt(
                    t,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = Ml);
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
        return pt(n), null;
      case 6:
        if (t && n.stateNode != null)
          Np(t, n, t.memoizedProps, s);
        else {
          if (typeof s != "string" && n.stateNode === null)
            throw Error(a(166));
          if (o = Nn(Ao.current), Nn(wr.current), Hl(n)) {
            if (s = n.stateNode, o = n.memoizedProps, s[xr] = n, (g = s.nodeValue !== o) && (t = Zt, t !== null))
              switch (t.tag) {
                case 3:
                  Dl(s.nodeValue, o, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && Dl(s.nodeValue, o, (t.mode & 1) !== 0);
              }
            g && (n.flags |= 4);
          } else
            s = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(s), s[xr] = n, n.stateNode = s;
        }
        return pt(n), null;
      case 13:
        if ($e(Pe), s = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Be && zt !== null && n.mode & 1 && !(n.flags & 128))
            H1(), ba(), n.flags |= 98560, g = !1;
          else if (g = Hl(n), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!g)
                throw Error(a(318));
              if (g = n.memoizedState, g = g !== null ? g.dehydrated : null, !g)
                throw Error(a(317));
              g[xr] = n;
            } else
              ba(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            pt(n), g = !1;
          } else
            cr !== null && (Ys(cr), cr = null), g = !0;
          if (!g)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = o, n) : (s = s !== null, s !== (t !== null && t.memoizedState !== null) && s && (n.child.flags |= 8192, n.mode & 1 && (t === null || Pe.current & 1 ? Xe === 0 && (Xe = 3) : Js())), n.updateQueue !== null && (n.flags |= 4), pt(n), null);
      case 4:
        return Sa(), Ns(t, n), t === null && yo(n.stateNode.containerInfo), pt(n), null;
      case 10:
        return fs(n.type._context), pt(n), null;
      case 17:
        return wt(n.type) && Bl(), pt(n), null;
      case 19:
        if ($e(Pe), g = n.memoizedState, g === null)
          return pt(n), null;
        if (s = (n.flags & 128) !== 0, S = g.rendering, S === null)
          if (s)
            To(g, !1);
          else {
            if (Xe !== 0 || t !== null && t.flags & 128)
              for (t = n.child; t !== null; ) {
                if (S = Gl(t), S !== null) {
                  for (n.flags |= 128, To(g, !1), s = S.updateQueue, s !== null && (n.updateQueue = s, n.flags |= 4), n.subtreeFlags = 0, s = o, o = n.child; o !== null; )
                    g = o, t = s, g.flags &= 14680066, S = g.alternate, S === null ? (g.childLanes = 0, g.lanes = t, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = S.childLanes, g.lanes = S.lanes, g.child = S.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = S.memoizedProps, g.memoizedState = S.memoizedState, g.updateQueue = S.updateQueue, g.type = S.type, t = S.dependencies, g.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), o = o.sibling;
                  return Re(Pe, Pe.current & 1 | 2), n.child;
                }
                t = t.sibling;
              }
            g.tail !== null && Ue() > _a && (n.flags |= 128, s = !0, To(g, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = Gl(S), t !== null) {
              if (n.flags |= 128, s = !0, o = t.updateQueue, o !== null && (n.updateQueue = o, n.flags |= 4), To(g, !0), g.tail === null && g.tailMode === "hidden" && !S.alternate && !Be)
                return pt(n), null;
            } else
              2 * Ue() - g.renderingStartTime > _a && o !== 1073741824 && (n.flags |= 128, s = !0, To(g, !1), n.lanes = 4194304);
          g.isBackwards ? (S.sibling = n.child, n.child = S) : (o = g.last, o !== null ? o.sibling = S : n.child = S, g.last = S);
        }
        return g.tail !== null ? (n = g.tail, g.rendering = n, g.tail = n.sibling, g.renderingStartTime = Ue(), n.sibling = null, o = Pe.current, Re(Pe, s ? o & 1 | 2 : o & 1), n) : (pt(n), null);
      case 22:
      case 23:
        return Qs(), s = n.memoizedState !== null, t !== null && t.memoizedState !== null !== s && (n.flags |= 8192), s && n.mode & 1 ? Vt & 1073741824 && (pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : pt(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, n.tag));
  }
  function tv(t, n) {
    switch (is(n), n.tag) {
      case 1:
        return wt(n.type) && Bl(), t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 3:
        return Sa(), $e(xt), $e(ct), ws(), t = n.flags, t & 65536 && !(t & 128) ? (n.flags = t & -65537 | 128, n) : null;
      case 5:
        return Es(n), null;
      case 13:
        if ($e(Pe), t = n.memoizedState, t !== null && t.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(a(340));
          ba();
        }
        return t = n.flags, t & 65536 ? (n.flags = t & -65537 | 128, n) : null;
      case 19:
        return $e(Pe), null;
      case 4:
        return Sa(), null;
      case 10:
        return fs(n.type._context), null;
      case 22:
      case 23:
        return Qs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ri = !1, ft = !1, rv = typeof WeakSet == "function" ? WeakSet : Set, ie = null;
  function Ca(t, n) {
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
  function js(t, n, o) {
    try {
      o();
    } catch (s) {
      Ze(t, n, s);
    }
  }
  var jp = !1;
  function nv(t, n) {
    if (Qu = wl, t = y1(), Vu(t)) {
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
            var S = 0, R = -1, B = -1, z = 0, K = 0, X = t, G = null;
            t:
              for (; ; ) {
                for (var oe; X !== o || f !== 0 && X.nodeType !== 3 || (R = S + f), X !== g || s !== 0 && X.nodeType !== 3 || (B = S + s), X.nodeType === 3 && (S += X.nodeValue.length), (oe = X.firstChild) !== null; )
                  G = X, X = oe;
                for (; ; ) {
                  if (X === t)
                    break t;
                  if (G === o && ++z === f && (R = S), G === g && ++K === s && (B = S), (oe = X.nextSibling) !== null)
                    break;
                  X = G, G = X.parentNode;
                }
                X = oe;
              }
            o = R === -1 || B === -1 ? null : { start: R, end: B };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (Ju = { focusedElem: t, selectionRange: o }, wl = !1, ie = n; ie !== null; )
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
                    var me = de.memoizedProps, qe = de.memoizedState, N = n.stateNode, I = N.getSnapshotBeforeUpdate(n.elementType === n.type ? me : dr(n.type, me), qe);
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
    return de = jp, jp = !1, de;
  }
  function Fo(t, n, o) {
    var s = n.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var f = s = s.next;
      do {
        if ((f.tag & t) === t) {
          var g = f.destroy;
          f.destroy = void 0, g !== void 0 && js(n, o, g);
        }
        f = f.next;
      } while (f !== s);
    }
  }
  function ni(t, n) {
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
  function Hs(t) {
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
  function Hp(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, Hp(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode, n !== null && (delete n[xr], delete n[bo], delete n[ns], delete n[Ny], delete n[jy])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function Zp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function zp(t) {
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Zp(t.return))
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
  function Zs(t, n, o) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? o.nodeType === 8 ? o.parentNode.insertBefore(t, n) : o.insertBefore(t, n) : (o.nodeType === 8 ? (n = o.parentNode, n.insertBefore(t, o)) : (n = o, n.appendChild(t)), o = o._reactRootContainer, o != null || n.onclick !== null || (n.onclick = Ml));
    else if (s !== 4 && (t = t.child, t !== null))
      for (Zs(t, n, o), t = t.sibling; t !== null; )
        Zs(t, n, o), t = t.sibling;
  }
  function zs(t, n, o) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? o.insertBefore(t, n) : o.appendChild(t);
    else if (s !== 4 && (t = t.child, t !== null))
      for (zs(t, n, o), t = t.sibling; t !== null; )
        zs(t, n, o), t = t.sibling;
  }
  var at = null, pr = !1;
  function mn(t, n, o) {
    for (o = o.child; o !== null; )
      Vp(t, n, o), o = o.sibling;
  }
  function Vp(t, n, o) {
    if (Er && typeof Er.onCommitFiberUnmount == "function")
      try {
        Er.onCommitFiberUnmount(hl, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        ft || Ca(o, n);
      case 6:
        var s = at, f = pr;
        at = null, mn(t, n, o), at = s, pr = f, at !== null && (pr ? (t = at, o = o.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o)) : at.removeChild(o.stateNode));
        break;
      case 18:
        at !== null && (pr ? (t = at, o = o.stateNode, t.nodeType === 8 ? rs(t.parentNode, o) : t.nodeType === 1 && rs(t, o), io(t)) : rs(at, o.stateNode));
        break;
      case 4:
        s = at, f = pr, at = o.stateNode.containerInfo, pr = !0, mn(t, n, o), at = s, pr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ft && (s = o.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          f = s = s.next;
          do {
            var g = f, S = g.destroy;
            g = g.tag, S !== void 0 && (g & 2 || g & 4) && js(o, n, S), f = f.next;
          } while (f !== s);
        }
        mn(t, n, o);
        break;
      case 1:
        if (!ft && (Ca(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function"))
          try {
            s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
          } catch (R) {
            Ze(o, n, R);
          }
        mn(t, n, o);
        break;
      case 21:
        mn(t, n, o);
        break;
      case 22:
        o.mode & 1 ? (ft = (s = ft) || o.memoizedState !== null, mn(t, n, o), ft = s) : mn(t, n, o);
        break;
      default:
        mn(t, n, o);
    }
  }
  function Up(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var o = t.stateNode;
      o === null && (o = t.stateNode = new rv()), n.forEach(function(s) {
        var f = pv.bind(null, t, s);
        o.has(s) || (o.add(s), s.then(f, f));
      });
    }
  }
  function fr(t, n) {
    var o = n.deletions;
    if (o !== null)
      for (var s = 0; s < o.length; s++) {
        var f = o[s];
        try {
          var g = t, S = n, R = S;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  at = R.stateNode, pr = !1;
                  break e;
                case 3:
                  at = R.stateNode.containerInfo, pr = !0;
                  break e;
                case 4:
                  at = R.stateNode.containerInfo, pr = !0;
                  break e;
              }
              R = R.return;
            }
          if (at === null)
            throw Error(a(160));
          Vp(g, S, f), at = null, pr = !1;
          var B = f.alternate;
          B !== null && (B.return = null), f.return = null;
        } catch (z) {
          Ze(f, n, z);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        qp(n, t), n = n.sibling;
  }
  function qp(t, n) {
    var o = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fr(n, t), Ar(t), s & 4) {
          try {
            Fo(3, t, t.return), ni(3, t);
          } catch (me) {
            Ze(t, t.return, me);
          }
          try {
            Fo(5, t, t.return);
          } catch (me) {
            Ze(t, t.return, me);
          }
        }
        break;
      case 1:
        fr(n, t), Ar(t), s & 512 && o !== null && Ca(o, o.return);
        break;
      case 5:
        if (fr(n, t), Ar(t), s & 512 && o !== null && Ca(o, o.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            Fe(f, "");
          } catch (me) {
            Ze(t, t.return, me);
          }
        }
        if (s & 4 && (f = t.stateNode, f != null)) {
          var g = t.memoizedProps, S = o !== null ? o.memoizedProps : g, R = t.type, B = t.updateQueue;
          if (t.updateQueue = null, B !== null)
            try {
              R === "input" && g.type === "radio" && g.name != null && yr(f, g), jt(R, S);
              var z = jt(R, g);
              for (S = 0; S < B.length; S += 2) {
                var K = B[S], X = B[S + 1];
                K === "style" ? br(f, X) : K === "dangerouslySetInnerHTML" ? Ve(f, X) : K === "children" ? Fe(f, X) : k(f, K, X, z);
              }
              switch (R) {
                case "input":
                  vr(f, g);
                  break;
                case "textarea":
                  Pt(f, g);
                  break;
                case "select":
                  var G = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!g.multiple;
                  var oe = g.value;
                  oe != null ? bt(f, !!g.multiple, oe, !1) : G !== !!g.multiple && (g.defaultValue != null ? bt(
                    f,
                    !!g.multiple,
                    g.defaultValue,
                    !0
                  ) : bt(f, !!g.multiple, g.multiple ? [] : "", !1));
              }
              f[bo] = g;
            } catch (me) {
              Ze(t, t.return, me);
            }
        }
        break;
      case 6:
        if (fr(n, t), Ar(t), s & 4) {
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
        if (fr(n, t), Ar(t), s & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            io(n.containerInfo);
          } catch (me) {
            Ze(t, t.return, me);
          }
        break;
      case 4:
        fr(n, t), Ar(t);
        break;
      case 13:
        fr(n, t), Ar(t), f = t.child, f.flags & 8192 && (g = f.memoizedState !== null, f.stateNode.isHidden = g, !g || f.alternate !== null && f.alternate.memoizedState !== null || (qs = Ue())), s & 4 && Up(t);
        break;
      case 22:
        if (K = o !== null && o.memoizedState !== null, t.mode & 1 ? (ft = (z = ft) || K, fr(n, t), ft = z) : fr(n, t), Ar(t), s & 8192) {
          if (z = t.memoizedState !== null, (t.stateNode.isHidden = z) && !K && t.mode & 1)
            for (ie = t, K = t.child; K !== null; ) {
              for (X = ie = K; ie !== null; ) {
                switch (G = ie, oe = G.child, G.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Fo(4, G, G.return);
                    break;
                  case 1:
                    Ca(G, G.return);
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
                    Ca(G, G.return);
                    break;
                  case 22:
                    if (G.memoizedState !== null) {
                      Kp(X);
                      continue;
                    }
                }
                oe !== null ? (oe.return = G, ie = oe) : Kp(X);
              }
              K = K.sibling;
            }
          e:
            for (K = null, X = t; ; ) {
              if (X.tag === 5) {
                if (K === null) {
                  K = X;
                  try {
                    f = X.stateNode, z ? (g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (R = X.stateNode, B = X.memoizedProps.style, S = B != null && B.hasOwnProperty("display") ? B.display : null, R.style.display = oa("display", S));
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
        fr(n, t), Ar(t), s & 4 && Up(t);
        break;
      case 21:
        break;
      default:
        fr(
          n,
          t
        ), Ar(t);
    }
  }
  function Ar(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        e: {
          for (var o = t.return; o !== null; ) {
            if (Zp(o)) {
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
            var g = zp(t);
            zs(t, g, f);
            break;
          case 3:
          case 4:
            var S = s.stateNode.containerInfo, R = zp(t);
            Zs(t, R, S);
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
  function av(t, n, o) {
    ie = t, Wp(t);
  }
  function Wp(t, n, o) {
    for (var s = (t.mode & 1) !== 0; ie !== null; ) {
      var f = ie, g = f.child;
      if (f.tag === 22 && s) {
        var S = f.memoizedState !== null || ri;
        if (!S) {
          var R = f.alternate, B = R !== null && R.memoizedState !== null || ft;
          R = ri;
          var z = ft;
          if (ri = S, (ft = B) && !z)
            for (ie = f; ie !== null; )
              S = ie, B = S.child, S.tag === 22 && S.memoizedState !== null ? Yp(f) : B !== null ? (B.return = S, ie = B) : Yp(f);
          for (; g !== null; )
            ie = g, Wp(g), g = g.sibling;
          ie = f, ri = R, ft = z;
        }
        Gp(t);
      } else
        f.subtreeFlags & 8772 && g !== null ? (g.return = f, ie = g) : Gp(t);
    }
  }
  function Gp(t) {
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
                ft || ni(5, n);
                break;
              case 1:
                var s = n.stateNode;
                if (n.flags & 4 && !ft)
                  if (o === null)
                    s.componentDidMount();
                  else {
                    var f = n.elementType === n.type ? o.memoizedProps : dr(n.type, o.memoizedProps);
                    s.componentDidUpdate(f, o.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var g = n.updateQueue;
                g !== null && U1(n, g, s);
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
                  U1(n, S, o);
                }
                break;
              case 5:
                var R = n.stateNode;
                if (o === null && n.flags & 4) {
                  o = R;
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
                      X !== null && io(X);
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
          ft || n.flags & 512 && Hs(n);
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
  function Kp(t) {
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
  function Yp(t) {
    for (; ie !== null; ) {
      var n = ie;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var o = n.return;
            try {
              ni(4, n);
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
              Hs(n);
            } catch (B) {
              Ze(n, g, B);
            }
            break;
          case 5:
            var S = n.return;
            try {
              Hs(n);
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
      var R = n.sibling;
      if (R !== null) {
        R.return = n.return, ie = R;
        break;
      }
      ie = n.return;
    }
  }
  var ov = Math.ceil, ai = _.ReactCurrentDispatcher, Vs = _.ReactCurrentOwner, Jt = _.ReactCurrentBatchConfig, Ae = 0, et = null, Ge = null, ot = 0, Vt = 0, ka = sn(0), Xe = 0, Ro = null, Hn = 0, oi = 0, Us = 0, Lo = null, At = null, qs = 0, _a = 1 / 0, qr = null, li = !1, Ws = null, gn = null, ii = !1, hn = null, ui = 0, Do = 0, Gs = null, si = -1, ci = 0;
  function vt() {
    return Ae & 6 ? Ue() : si !== -1 ? si : si = Ue();
  }
  function yn(t) {
    return t.mode & 1 ? Ae & 2 && ot !== 0 ? ot & -ot : Zy.transition !== null ? (ci === 0 && (ci = Zd()), ci) : (t = Te, t !== 0 || (t = window.event, t = t === void 0 ? 16 : Xd(t.type)), t) : 1;
  }
  function mr(t, n, o, s) {
    if (50 < Do)
      throw Do = 0, Gs = null, Error(a(185));
    ro(t, o, s), (!(Ae & 2) || t !== et) && (t === et && (!(Ae & 2) && (oi |= o), Xe === 4 && vn(t, ot)), Ct(t, s), o === 1 && Ae === 0 && !(n.mode & 1) && (_a = Ue() + 500, Pl && dn()));
  }
  function Ct(t, n) {
    var o = t.callbackNode;
    Zh(t, n);
    var s = bl(t, t === et ? ot : 0);
    if (s === 0)
      o !== null && Nd(o), t.callbackNode = null, t.callbackPriority = 0;
    else if (n = s & -s, t.callbackPriority !== n) {
      if (o != null && Nd(o), n === 1)
        t.tag === 0 ? Hy(Qp.bind(null, t)) : B1(Qp.bind(null, t)), Iy(function() {
          !(Ae & 6) && dn();
        }), o = null;
      else {
        switch (zd(s)) {
          case 1:
            o = _u;
            break;
          case 4:
            o = jd;
            break;
          case 16:
            o = gl;
            break;
          case 536870912:
            o = Hd;
            break;
          default:
            o = gl;
        }
        o = lf(o, Xp.bind(null, t));
      }
      t.callbackPriority = n, t.callbackNode = o;
    }
  }
  function Xp(t, n) {
    if (si = -1, ci = 0, Ae & 6)
      throw Error(a(327));
    var o = t.callbackNode;
    if (Oa() && t.callbackNode !== o)
      return null;
    var s = bl(t, t === et ? ot : 0);
    if (s === 0)
      return null;
    if (s & 30 || s & t.expiredLanes || n)
      n = di(t, s);
    else {
      n = s;
      var f = Ae;
      Ae |= 2;
      var g = ef();
      (et !== t || ot !== n) && (qr = null, _a = Ue() + 500, zn(t, n));
      do
        try {
          uv();
          break;
        } catch (R) {
          Jp(t, R);
        }
      while (1);
      ps(), ai.current = g, Ae = f, Ge !== null ? n = 0 : (et = null, ot = 0, n = Xe);
    }
    if (n !== 0) {
      if (n === 2 && (f = Ou(t), f !== 0 && (s = f, n = Ks(t, f))), n === 1)
        throw o = Ro, zn(t, 0), vn(t, s), Ct(t, Ue()), o;
      if (n === 6)
        vn(t, s);
      else {
        if (f = t.current.alternate, !(s & 30) && !lv(f) && (n = di(t, s), n === 2 && (g = Ou(t), g !== 0 && (s = g, n = Ks(t, g))), n === 1))
          throw o = Ro, zn(t, 0), vn(t, s), Ct(t, Ue()), o;
        switch (t.finishedWork = f, t.finishedLanes = s, n) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Vn(t, At, qr);
            break;
          case 3:
            if (vn(t, s), (s & 130023424) === s && (n = qs + 500 - Ue(), 10 < n)) {
              if (bl(t, 0) !== 0)
                break;
              if (f = t.suspendedLanes, (f & s) !== s) {
                vt(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = ts(Vn.bind(null, t, At, qr), n);
              break;
            }
            Vn(t, At, qr);
            break;
          case 4:
            if (vn(t, s), (s & 4194240) === s)
              break;
            for (n = t.eventTimes, f = -1; 0 < s; ) {
              var S = 31 - ur(s);
              g = 1 << S, S = n[S], S > f && (f = S), s &= ~g;
            }
            if (s = f, s = Ue() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * ov(s / 1960)) - s, 10 < s) {
              t.timeoutHandle = ts(Vn.bind(null, t, At, qr), s);
              break;
            }
            Vn(t, At, qr);
            break;
          case 5:
            Vn(t, At, qr);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ct(t, Ue()), t.callbackNode === o ? Xp.bind(null, t) : null;
  }
  function Ks(t, n) {
    var o = Lo;
    return t.current.memoizedState.isDehydrated && (zn(t, n).flags |= 256), t = di(t, n), t !== 2 && (n = At, At = o, n !== null && Ys(n)), t;
  }
  function Ys(t) {
    At === null ? At = t : At.push.apply(At, t);
  }
  function lv(t) {
    for (var n = t; ; ) {
      if (n.flags & 16384) {
        var o = n.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var s = 0; s < o.length; s++) {
            var f = o[s], g = f.getSnapshot;
            f = f.value;
            try {
              if (!sr(g(), f))
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
  function vn(t, n) {
    for (n &= ~Us, n &= ~oi, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
      var o = 31 - ur(n), s = 1 << o;
      t[o] = -1, n &= ~s;
    }
  }
  function Qp(t) {
    if (Ae & 6)
      throw Error(a(327));
    Oa();
    var n = bl(t, 0);
    if (!(n & 1))
      return Ct(t, Ue()), null;
    var o = di(t, n);
    if (t.tag !== 0 && o === 2) {
      var s = Ou(t);
      s !== 0 && (n = s, o = Ks(t, s));
    }
    if (o === 1)
      throw o = Ro, zn(t, 0), vn(t, n), Ct(t, Ue()), o;
    if (o === 6)
      throw Error(a(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = n, Vn(t, At, qr), Ct(t, Ue()), null;
  }
  function Xs(t, n) {
    var o = Ae;
    Ae |= 1;
    try {
      return t(n);
    } finally {
      Ae = o, Ae === 0 && (_a = Ue() + 500, Pl && dn());
    }
  }
  function Zn(t) {
    hn !== null && hn.tag === 0 && !(Ae & 6) && Oa();
    var n = Ae;
    Ae |= 1;
    var o = Jt.transition, s = Te;
    try {
      if (Jt.transition = null, Te = 1, t)
        return t();
    } finally {
      Te = s, Jt.transition = o, Ae = n, !(Ae & 6) && dn();
    }
  }
  function Qs() {
    Vt = ka.current, $e(ka);
  }
  function zn(t, n) {
    t.finishedWork = null, t.finishedLanes = 0;
    var o = t.timeoutHandle;
    if (o !== -1 && (t.timeoutHandle = -1, By(o)), Ge !== null)
      for (o = Ge.return; o !== null; ) {
        var s = o;
        switch (is(s), s.tag) {
          case 1:
            s = s.type.childContextTypes, s != null && Bl();
            break;
          case 3:
            Sa(), $e(xt), $e(ct), ws();
            break;
          case 5:
            Es(s);
            break;
          case 4:
            Sa();
            break;
          case 13:
            $e(Pe);
            break;
          case 19:
            $e(Pe);
            break;
          case 10:
            fs(s.type._context);
            break;
          case 22:
          case 23:
            Qs();
        }
        o = o.return;
      }
    if (et = t, Ge = t = bn(t.current, null), ot = Vt = n, Xe = 0, Ro = null, Us = oi = Hn = 0, At = Lo = null, Pn !== null) {
      for (n = 0; n < Pn.length; n++)
        if (o = Pn[n], s = o.interleaved, s !== null) {
          o.interleaved = null;
          var f = s.next, g = o.pending;
          if (g !== null) {
            var S = g.next;
            g.next = f, s.next = S;
          }
          o.pending = s;
        }
      Pn = null;
    }
    return t;
  }
  function Jp(t, n) {
    do {
      var o = Ge;
      try {
        if (ps(), Kl.current = Jl, Yl) {
          for (var s = Ne.memoizedState; s !== null; ) {
            var f = s.queue;
            f !== null && (f.pending = null), s = s.next;
          }
          Yl = !1;
        }
        if (jn = 0, Je = Ye = Ne = null, Co = !1, ko = 0, Vs.current = null, o === null || o.return === null) {
          Xe = 1, Ro = n, Ge = null;
          break;
        }
        e: {
          var g = t, S = o.return, R = o, B = n;
          if (n = ot, R.flags |= 32768, B !== null && typeof B == "object" && typeof B.then == "function") {
            var z = B, K = R, X = K.tag;
            if (!(K.mode & 1) && (X === 0 || X === 11 || X === 15)) {
              var G = K.alternate;
              G ? (K.updateQueue = G.updateQueue, K.memoizedState = G.memoizedState, K.lanes = G.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var oe = Ap(S);
            if (oe !== null) {
              oe.flags &= -257, Cp(oe, S, R, g, n), oe.mode & 1 && Sp(g, z, n), n = oe, B = z;
              var de = n.updateQueue;
              if (de === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(B), n.updateQueue = me;
              } else
                de.add(B);
              break e;
            } else {
              if (!(n & 1)) {
                Sp(g, z, n), Js();
                break e;
              }
              B = Error(a(426));
            }
          } else if (Be && R.mode & 1) {
            var qe = Ap(S);
            if (qe !== null) {
              !(qe.flags & 65536) && (qe.flags |= 256), Cp(qe, S, R, g, n), cs(Aa(B, R));
              break e;
            }
          }
          g = B = Aa(B, R), Xe !== 4 && (Xe = 2), Lo === null ? Lo = [g] : Lo.push(g), g = S;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, n &= -n, g.lanes |= n;
                var N = xp(g, B, n);
                V1(g, N);
                break e;
              case 1:
                R = B;
                var I = g.type, H = g.stateNode;
                if (!(g.flags & 128) && (typeof I.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (gn === null || !gn.has(H)))) {
                  g.flags |= 65536, n &= -n, g.lanes |= n;
                  var ee = wp(g, R, n);
                  V1(g, ee);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        rf(o);
      } catch (ge) {
        n = ge, Ge === o && o !== null && (Ge = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function ef() {
    var t = ai.current;
    return ai.current = Jl, t === null ? Jl : t;
  }
  function Js() {
    (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), et === null || !(Hn & 268435455) && !(oi & 268435455) || vn(et, ot);
  }
  function di(t, n) {
    var o = Ae;
    Ae |= 2;
    var s = ef();
    (et !== t || ot !== n) && (qr = null, zn(t, n));
    do
      try {
        iv();
        break;
      } catch (f) {
        Jp(t, f);
      }
    while (1);
    if (ps(), Ae = o, ai.current = s, Ge !== null)
      throw Error(a(261));
    return et = null, ot = 0, Xe;
  }
  function iv() {
    for (; Ge !== null; )
      tf(Ge);
  }
  function uv() {
    for (; Ge !== null && !Dh(); )
      tf(Ge);
  }
  function tf(t) {
    var n = of(t.alternate, t, Vt);
    t.memoizedProps = t.pendingProps, n === null ? rf(t) : Ge = n, Vs.current = null;
  }
  function rf(t) {
    var n = t;
    do {
      var o = n.alternate;
      if (t = n.return, n.flags & 32768) {
        if (o = tv(o, n), o !== null) {
          o.flags &= 32767, Ge = o;
          return;
        }
        if (t !== null)
          t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          Xe = 6, Ge = null;
          return;
        }
      } else if (o = ev(o, n, Vt), o !== null) {
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
  function Vn(t, n, o) {
    var s = Te, f = Jt.transition;
    try {
      Jt.transition = null, Te = 1, sv(t, n, o, s);
    } finally {
      Jt.transition = f, Te = s;
    }
    return null;
  }
  function sv(t, n, o, s) {
    do
      Oa();
    while (hn !== null);
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
    if (zh(t, g), t === et && (Ge = et = null, ot = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || ii || (ii = !0, lf(gl, function() {
      return Oa(), null;
    })), g = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || g) {
      g = Jt.transition, Jt.transition = null;
      var S = Te;
      Te = 1;
      var R = Ae;
      Ae |= 4, Vs.current = null, nv(t, o), qp(o, t), Ty(Ju), wl = !!Qu, Ju = Qu = null, t.current = o, av(o), Mh(), Ae = R, Te = S, Jt.transition = g;
    } else
      t.current = o;
    if (ii && (ii = !1, hn = t, ui = f), g = t.pendingLanes, g === 0 && (gn = null), Ih(o.stateNode), Ct(t, Ue()), n !== null)
      for (s = t.onRecoverableError, o = 0; o < n.length; o++)
        f = n[o], s(f.value, { componentStack: f.stack, digest: f.digest });
    if (li)
      throw li = !1, t = Ws, Ws = null, t;
    return ui & 1 && t.tag !== 0 && Oa(), g = t.pendingLanes, g & 1 ? t === Gs ? Do++ : (Do = 0, Gs = t) : Do = 0, dn(), null;
  }
  function Oa() {
    if (hn !== null) {
      var t = zd(ui), n = Jt.transition, o = Te;
      try {
        if (Jt.transition = null, Te = 16 > t ? 16 : t, hn === null)
          var s = !1;
        else {
          if (t = hn, hn = null, ui = 0, Ae & 6)
            throw Error(a(331));
          var f = Ae;
          for (Ae |= 4, ie = t.current; ie !== null; ) {
            var g = ie, S = g.child;
            if (ie.flags & 16) {
              var R = g.deletions;
              if (R !== null) {
                for (var B = 0; B < R.length; B++) {
                  var z = R[B];
                  for (ie = z; ie !== null; ) {
                    var K = ie;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(8, K, g);
                    }
                    var X = K.child;
                    if (X !== null)
                      X.return = K, ie = X;
                    else
                      for (; ie !== null; ) {
                        K = ie;
                        var G = K.sibling, oe = K.return;
                        if (Hp(K), K === z) {
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
                        Fo(9, g, g.return);
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
                  if (R = ie, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ni(9, R);
                      }
                    } catch (ge) {
                      Ze(R, R.return, ge);
                    }
                  if (R === S) {
                    ie = null;
                    break e;
                  }
                  var ee = R.sibling;
                  if (ee !== null) {
                    ee.return = R.return, ie = ee;
                    break e;
                  }
                  ie = R.return;
                }
          }
          if (Ae = f, dn(), Er && typeof Er.onPostCommitFiberRoot == "function")
            try {
              Er.onPostCommitFiberRoot(hl, t);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Te = o, Jt.transition = n;
      }
    }
    return !1;
  }
  function nf(t, n, o) {
    n = Aa(o, n), n = xp(t, n, 1), t = fn(t, n, 1), n = vt(), t !== null && (ro(t, 1, n), Ct(t, n));
  }
  function Ze(t, n, o) {
    if (t.tag === 3)
      nf(t, t, o);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          nf(n, t, o);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (gn === null || !gn.has(s))) {
            t = Aa(o, t), t = wp(n, t, 1), n = fn(n, t, 1), t = vt(), n !== null && (ro(n, 1, t), Ct(n, t));
            break;
          }
        }
        n = n.return;
      }
  }
  function cv(t, n, o) {
    var s = t.pingCache;
    s !== null && s.delete(n), n = vt(), t.pingedLanes |= t.suspendedLanes & o, et === t && (ot & o) === o && (Xe === 4 || Xe === 3 && (ot & 130023424) === ot && 500 > Ue() - qs ? zn(t, 0) : Us |= o), Ct(t, n);
  }
  function af(t, n) {
    n === 0 && (t.mode & 1 ? (n = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : n = 1);
    var o = vt();
    t = zr(t, n), t !== null && (ro(t, n, o), Ct(t, o));
  }
  function dv(t) {
    var n = t.memoizedState, o = 0;
    n !== null && (o = n.retryLane), af(t, o);
  }
  function pv(t, n) {
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
    s !== null && s.delete(n), af(t, o);
  }
  var of;
  of = function(t, n, o) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || xt.current)
        St = !0;
      else {
        if (!(t.lanes & o) && !(n.flags & 128))
          return St = !1, Jy(t, n, o);
        St = !!(t.flags & 131072);
      }
    else
      St = !1, Be && n.flags & 1048576 && I1(n, jl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var s = n.type;
        ti(t, n), t = n.pendingProps;
        var f = ha(n, ct.current);
        xa(n, o), f = Cs(null, n, s, t, f, o);
        var g = ks();
        return n.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, wt(s) ? (g = !0, Il(n)) : g = !1, n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, hs(n), f.updater = ql, n.stateNode = f, f._reactInternals = n, vs(n, s, t, o), n = Ms(null, n, s, !0, g, o)) : (n.tag = 0, Be && g && ls(n), yt(null, n, f, o), n = n.child), n;
      case 16:
        s = n.elementType;
        e: {
          switch (ti(t, n), t = n.pendingProps, f = s._init, s = f(s._payload), n.type = s, f = n.tag = mv(s), t = dr(s, t), f) {
            case 0:
              n = Ds(null, n, s, t, o);
              break e;
            case 1:
              n = Rp(null, n, s, t, o);
              break e;
            case 11:
              n = kp(null, n, s, t, o);
              break e;
            case 14:
              n = _p(null, n, s, dr(s.type, t), o);
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
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : dr(s, f), Ds(t, n, s, f, o);
      case 1:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : dr(s, f), Rp(t, n, s, f, o);
      case 3:
        e: {
          if (Lp(n), t === null)
            throw Error(a(387));
          s = n.pendingProps, g = n.memoizedState, f = g.element, z1(t, n), Ul(n, s, null, o);
          var S = n.memoizedState;
          if (s = S.element, g.isDehydrated)
            if (g = { element: s, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              f = Aa(Error(a(423)), n), n = Dp(t, n, s, o, f);
              break e;
            } else if (s !== f) {
              f = Aa(Error(a(424)), n), n = Dp(t, n, s, o, f);
              break e;
            } else
              for (zt = un(n.stateNode.containerInfo.firstChild), Zt = n, Be = !0, cr = null, o = Q1(n, null, s, o), n.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (ba(), s === f) {
              n = Ur(t, n, o);
              break e;
            }
            yt(t, n, s, o);
          }
          n = n.child;
        }
        return n;
      case 5:
        return J1(n), t === null && ss(n), s = n.type, f = n.pendingProps, g = t !== null ? t.memoizedProps : null, S = f.children, es(s, f) ? S = null : g !== null && es(s, g) && (n.flags |= 32), Fp(t, n), yt(t, n, S, o), n.child;
      case 6:
        return t === null && ss(n), null;
      case 13:
        return Mp(t, n, o);
      case 4:
        return bs(n, n.stateNode.containerInfo), s = n.pendingProps, t === null ? n.child = wa(n, null, s, o) : yt(t, n, s, o), n.child;
      case 11:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : dr(s, f), kp(t, n, s, f, o);
      case 7:
        return yt(t, n, n.pendingProps, o), n.child;
      case 8:
        return yt(t, n, n.pendingProps.children, o), n.child;
      case 12:
        return yt(t, n, n.pendingProps.children, o), n.child;
      case 10:
        e: {
          if (s = n.type._context, f = n.pendingProps, g = n.memoizedProps, S = f.value, Re(Zl, s._currentValue), s._currentValue = S, g !== null)
            if (sr(g.value, S)) {
              if (g.children === f.children && !xt.current) {
                n = Ur(t, n, o);
                break e;
              }
            } else
              for (g = n.child, g !== null && (g.return = n); g !== null; ) {
                var R = g.dependencies;
                if (R !== null) {
                  S = g.child;
                  for (var B = R.firstContext; B !== null; ) {
                    if (B.context === s) {
                      if (g.tag === 1) {
                        B = Vr(-1, o & -o), B.tag = 2;
                        var z = g.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var K = z.pending;
                          K === null ? B.next = B : (B.next = K.next, K.next = B), z.pending = B;
                        }
                      }
                      g.lanes |= o, B = g.alternate, B !== null && (B.lanes |= o), ms(
                        g.return,
                        o,
                        n
                      ), R.lanes |= o;
                      break;
                    }
                    B = B.next;
                  }
                } else if (g.tag === 10)
                  S = g.type === n.type ? null : g.child;
                else if (g.tag === 18) {
                  if (S = g.return, S === null)
                    throw Error(a(341));
                  S.lanes |= o, R = S.alternate, R !== null && (R.lanes |= o), ms(S, o, n), S = g.sibling;
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
          yt(t, n, f.children, o), n = n.child;
        }
        return n;
      case 9:
        return f = n.type, s = n.pendingProps.children, xa(n, o), f = Xt(f), s = s(f), n.flags |= 1, yt(t, n, s, o), n.child;
      case 14:
        return s = n.type, f = dr(s, n.pendingProps), f = dr(s.type, f), _p(t, n, s, f, o);
      case 15:
        return Op(t, n, n.type, n.pendingProps, o);
      case 17:
        return s = n.type, f = n.pendingProps, f = n.elementType === s ? f : dr(s, f), ti(t, n), n.tag = 1, wt(s) ? (t = !0, Il(n)) : t = !1, xa(n, o), G1(n, s, f), vs(n, s, f, o), Ms(null, n, s, !0, t, o);
      case 19:
        return Bp(t, n, o);
      case 22:
        return Tp(t, n, o);
    }
    throw Error(a(156, n.tag));
  };
  function lf(t, n) {
    return Pd(t, n);
  }
  function fv(t, n, o, s) {
    this.tag = t, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function er(t, n, o, s) {
    return new fv(t, n, o, s);
  }
  function ec(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function mv(t) {
    if (typeof t == "function")
      return ec(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === Q)
        return 11;
      if (t === J)
        return 14;
    }
    return 2;
  }
  function bn(t, n) {
    var o = t.alternate;
    return o === null ? (o = er(t.tag, n, t.key, t.mode), o.elementType = t.elementType, o.type = t.type, o.stateNode = t.stateNode, o.alternate = t, t.alternate = o) : (o.pendingProps = n, o.type = t.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = t.flags & 14680064, o.childLanes = t.childLanes, o.lanes = t.lanes, o.child = t.child, o.memoizedProps = t.memoizedProps, o.memoizedState = t.memoizedState, o.updateQueue = t.updateQueue, n = t.dependencies, o.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, o.sibling = t.sibling, o.index = t.index, o.ref = t.ref, o;
  }
  function pi(t, n, o, s, f, g) {
    var S = 2;
    if (s = t, typeof t == "function")
      ec(t) && (S = 1);
    else if (typeof t == "string")
      S = 5;
    else
      e:
        switch (t) {
          case $:
            return Un(o.children, f, g, n);
          case M:
            S = 8, f |= 8;
            break;
          case j:
            return t = er(12, o, n, f | 2), t.elementType = j, t.lanes = g, t;
          case Y:
            return t = er(13, o, n, f), t.elementType = Y, t.lanes = g, t;
          case pe:
            return t = er(19, o, n, f), t.elementType = pe, t.lanes = g, t;
          case ae:
            return fi(o, f, g, n);
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
    return n = er(S, o, n, f), n.elementType = t, n.type = s, n.lanes = g, n;
  }
  function Un(t, n, o, s) {
    return t = er(7, t, s, n), t.lanes = o, t;
  }
  function fi(t, n, o, s) {
    return t = er(22, t, s, n), t.elementType = ae, t.lanes = o, t.stateNode = { isHidden: !1 }, t;
  }
  function tc(t, n, o) {
    return t = er(6, t, null, n), t.lanes = o, t;
  }
  function rc(t, n, o) {
    return n = er(4, t.children !== null ? t.children : [], t.key, n), n.lanes = o, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n;
  }
  function gv(t, n, o, s, f) {
    this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tu(0), this.expirationTimes = Tu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tu(0), this.identifierPrefix = s, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function nc(t, n, o, s, f, g, S, R, B) {
    return t = new gv(t, n, o, R, B), n === 1 ? (n = 1, g === !0 && (n |= 8)) : n = 0, g = er(3, null, null, n), t.current = g, g.stateNode = t, g.memoizedState = { element: s, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hs(g), t;
  }
  function hv(t, n, o) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: L, key: s == null ? null : "" + s, children: t, containerInfo: n, implementation: o };
  }
  function uf(t) {
    if (!t)
      return cn;
    t = t._reactInternals;
    e: {
      if (Dn(t) !== t || t.tag !== 1)
        throw Error(a(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (wt(n.type)) {
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
      if (wt(o))
        return M1(t, o, n);
    }
    return n;
  }
  function sf(t, n, o, s, f, g, S, R, B) {
    return t = nc(o, s, !0, t, f, g, S, R, B), t.context = uf(null), o = t.current, s = vt(), f = yn(o), g = Vr(s, f), g.callback = n ?? null, fn(o, g, f), t.current.lanes = f, ro(t, f, s), Ct(t, s), t;
  }
  function mi(t, n, o, s) {
    var f = n.current, g = vt(), S = yn(f);
    return o = uf(o), n.context === null ? n.context = o : n.pendingContext = o, n = Vr(g, S), n.payload = { element: t }, s = s === void 0 ? null : s, s !== null && (n.callback = s), t = fn(f, n, S), t !== null && (mr(t, f, S, g), Vl(t, f, S)), S;
  }
  function gi(t) {
    if (t = t.current, !t.child)
      return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function cf(t, n) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var o = t.retryLane;
      t.retryLane = o !== 0 && o < n ? o : n;
    }
  }
  function ac(t, n) {
    cf(t, n), (t = t.alternate) && cf(t, n);
  }
  function yv() {
    return null;
  }
  var df = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function oc(t) {
    this._internalRoot = t;
  }
  hi.prototype.render = oc.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(a(409));
    mi(t, n, null, null);
  }, hi.prototype.unmount = oc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      Zn(function() {
        mi(null, t, null, null);
      }), n[Nr] = null;
    }
  };
  function hi(t) {
    this._internalRoot = t;
  }
  hi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = qd();
      t = { blockedOn: null, target: t, priority: n };
      for (var o = 0; o < an.length && n !== 0 && n < an[o].priority; o++)
        ;
      an.splice(o, 0, t), o === 0 && Kd(t);
    }
  };
  function lc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function yi(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function pf() {
  }
  function vv(t, n, o, s, f) {
    if (f) {
      if (typeof s == "function") {
        var g = s;
        s = function() {
          var z = gi(S);
          g.call(z);
        };
      }
      var S = sf(n, s, t, 0, null, !1, !1, "", pf);
      return t._reactRootContainer = S, t[Nr] = S.current, yo(t.nodeType === 8 ? t.parentNode : t), Zn(), S;
    }
    for (; f = t.lastChild; )
      t.removeChild(f);
    if (typeof s == "function") {
      var R = s;
      s = function() {
        var z = gi(B);
        R.call(z);
      };
    }
    var B = nc(t, 0, !1, null, null, !1, !1, "", pf);
    return t._reactRootContainer = B, t[Nr] = B.current, yo(t.nodeType === 8 ? t.parentNode : t), Zn(function() {
      mi(n, B, o, s);
    }), B;
  }
  function bi(t, n, o, s, f) {
    var g = o._reactRootContainer;
    if (g) {
      var S = g;
      if (typeof f == "function") {
        var R = f;
        f = function() {
          var B = gi(S);
          R.call(B);
        };
      }
      mi(n, S, t, f);
    } else
      S = vv(o, n, t, f, s);
    return gi(S);
  }
  Vd = function(t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var o = to(n.pendingLanes);
          o !== 0 && (Fu(n, o | 1), Ct(n, Ue()), !(Ae & 6) && (_a = Ue() + 500, dn()));
        }
        break;
      case 13:
        Zn(function() {
          var s = zr(t, 1);
          if (s !== null) {
            var f = vt();
            mr(s, t, 1, f);
          }
        }), ac(t, 1);
    }
  }, Ru = function(t) {
    if (t.tag === 13) {
      var n = zr(t, 134217728);
      if (n !== null) {
        var o = vt();
        mr(n, t, 134217728, o);
      }
      ac(t, 134217728);
    }
  }, Ud = function(t) {
    if (t.tag === 13) {
      var n = yn(t), o = zr(t, n);
      if (o !== null) {
        var s = vt();
        mr(o, t, n, s);
      }
      ac(t, n);
    }
  }, qd = function() {
    return Te;
  }, Wd = function(t, n) {
    var o = Te;
    try {
      return Te = t, n();
    } finally {
      Te = o;
    }
  }, Jr = function(t, n, o) {
    switch (n) {
      case "input":
        if (vr(t, o), n = o.name, o.type === "radio" && n != null) {
          for (o = t; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < o.length; n++) {
            var s = o[n];
            if (s !== t && s.form === t.form) {
              var f = $l(s);
              if (!f)
                throw Error(a(90));
              $t(s), vr(s, f);
            }
          }
        }
        break;
      case "textarea":
        Pt(t, o);
        break;
      case "select":
        n = o.value, n != null && bt(t, !!o.multiple, n, !1);
    }
  }, Ya = Xs, Xa = Zn;
  var bv = { usingClientEntryPoint: !1, Events: [Eo, ma, $l, pl, Ka, Xs] }, Mo = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ev = { bundleType: Mo.bundleType, version: Mo.version, rendererPackageName: Mo.rendererPackageName, rendererConfig: Mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = Bd(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Mo.findFiberByHostInstance || yv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
      try {
        hl = Ei.inject(Ev), Er = Ei;
      } catch {
      }
  }
  return kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv, kt.createPortal = function(t, n) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lc(n))
      throw Error(a(200));
    return hv(t, n, null, o);
  }, kt.createRoot = function(t, n) {
    if (!lc(t))
      throw Error(a(299));
    var o = !1, s = "", f = df;
    return n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), n = nc(t, 1, !1, null, null, o, !1, s, f), t[Nr] = n.current, yo(t.nodeType === 8 ? t.parentNode : t), new oc(n);
  }, kt.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","), Error(a(268, t)));
    return t = Bd(n), t = t === null ? null : t.stateNode, t;
  }, kt.flushSync = function(t) {
    return Zn(t);
  }, kt.hydrate = function(t, n, o) {
    if (!yi(n))
      throw Error(a(200));
    return bi(null, t, n, !0, o);
  }, kt.hydrateRoot = function(t, n, o) {
    if (!lc(t))
      throw Error(a(405));
    var s = o != null && o.hydratedSources || null, f = !1, g = "", S = df;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (g = o.identifierPrefix), o.onRecoverableError !== void 0 && (S = o.onRecoverableError)), n = sf(n, null, t, 1, o ?? null, f, !1, g, S), t[Nr] = n.current, yo(t), s)
      for (t = 0; t < s.length; t++)
        o = s[t], f = o._getVersion, f = f(o._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [o, f] : n.mutableSourceEagerHydrationData.push(
          o,
          f
        );
    return new hi(n);
  }, kt.render = function(t, n, o) {
    if (!yi(n))
      throw Error(a(200));
    return bi(null, t, n, !1, o);
  }, kt.unmountComponentAtNode = function(t) {
    if (!yi(t))
      throw Error(a(40));
    return t._reactRootContainer ? (Zn(function() {
      bi(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Nr] = null;
      });
    }), !0) : !1;
  }, kt.unstable_batchedUpdates = Xs, kt.unstable_renderSubtreeIntoContainer = function(t, n, o, s) {
    if (!yi(o))
      throw Error(a(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(a(38));
    return bi(t, n, o, !1, s);
  }, kt.version = "18.2.0-next-9e3b772b8-20220608", kt;
}
function sm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm);
    } catch (e) {
      console.error(e);
    }
}
sm(), um.exports = aE();
var cm = um.exports;
const oE = /* @__PURE__ */ ta(cm);
var lE = be({ "../../node_modules/react-fast-compare/index.js"(e, r) {
  var a = typeof Element < "u", l = typeof Map == "function", i = typeof Set == "function", c = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function d(m, p) {
    if (m === p)
      return !0;
    if (m && p && typeof m == "object" && typeof p == "object") {
      if (m.constructor !== p.constructor)
        return !1;
      var h, y, w;
      if (Array.isArray(m)) {
        if (h = m.length, h != p.length)
          return !1;
        for (y = h; y-- !== 0; )
          if (!d(m[y], p[y]))
            return !1;
        return !0;
      }
      var x;
      if (l && m instanceof Map && p instanceof Map) {
        if (m.size !== p.size)
          return !1;
        for (x = m.entries(); !(y = x.next()).done; )
          if (!p.has(y.value[0]))
            return !1;
        for (x = m.entries(); !(y = x.next()).done; )
          if (!d(y.value[1], p.get(y.value[0])))
            return !1;
        return !0;
      }
      if (i && m instanceof Set && p instanceof Set) {
        if (m.size !== p.size)
          return !1;
        for (x = m.entries(); !(y = x.next()).done; )
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
      if (w = Object.keys(m), h = w.length, h !== Object.keys(p).length)
        return !1;
      for (y = h; y-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(p, w[y]))
          return !1;
      if (a && m instanceof Element)
        return !1;
      for (y = h; y-- !== 0; )
        if (!((w[y] === "_owner" || w[y] === "__v" || w[y] === "__o") && m.$$typeof) && !d(m[w[y]], p[w[y]]))
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
} }), Uf = function(e) {
  return e.reduce(function(r, a) {
    var l = a[0], i = a[1];
    return r[l] = i, r;
  }, {});
}, qf = typeof window < "u" && window.document && window.document.createElement ? D.useLayoutEffect : D.useEffect, Ft = "top", nr = "bottom", ar = "right", Rt = "left", iu = "auto", ul = [Ft, nr, ar, Rt], Ba = "start", Yo = "end", iE = "clippingParents", dm = "viewport", Io = "popper", uE = "reference", Wf = ul.reduce(function(e, r) {
  return e.concat([r + "-" + Ba, r + "-" + Yo]);
}, []), pm = [].concat(ul, [iu]).reduce(function(e, r) {
  return e.concat([r, r + "-" + Ba, r + "-" + Yo]);
}, []), sE = "beforeRead", cE = "read", dE = "afterRead", pE = "beforeMain", fE = "main", mE = "afterMain", gE = "beforeWrite", hE = "write", yE = "afterWrite", vE = [sE, cE, dE, pE, fE, mE, gE, hE, yE];
function $r(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
function ea(e) {
  var r = qt(e).Element;
  return e instanceof r || e instanceof Element;
}
function rr(e) {
  var r = qt(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function V0(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = qt(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function bE(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(a) {
    var l = r.styles[a] || {}, i = r.attributes[a] || {}, c = r.elements[a];
    !rr(c) || !$r(c) || (Object.assign(c.style, l), Object.keys(i).forEach(function(d) {
      var m = i[d];
      m === !1 ? c.removeAttribute(d) : c.setAttribute(d, m === !0 ? "" : m);
    }));
  });
}
function EE(e) {
  var r = e.state, a = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, a.popper), r.styles = a, r.elements.arrow && Object.assign(r.elements.arrow.style, a.arrow), function() {
    Object.keys(r.elements).forEach(function(l) {
      var i = r.elements[l], c = r.attributes[l] || {}, d = Object.keys(r.styles.hasOwnProperty(l) ? r.styles[l] : a[l]), m = d.reduce(function(p, h) {
        return p[h] = "", p;
      }, {});
      !rr(i) || !$r(i) || (Object.assign(i.style, m), Object.keys(c).forEach(function(p) {
        i.removeAttribute(p);
      }));
    });
  };
}
var xE = { name: "applyStyles", enabled: !0, phase: "write", fn: bE, effect: EE, requires: ["computeStyles"] };
function Mr(e) {
  return e.split("-")[0];
}
var Xn = Math.max, Vi = Math.min, Ia = Math.round;
function t0() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function fm() {
  return !/^((?!chrome|android).)*safari/i.test(t0());
}
function Pa(e, r, a) {
  r === void 0 && (r = !1), a === void 0 && (a = !1);
  var l = e.getBoundingClientRect(), i = 1, c = 1;
  r && rr(e) && (i = e.offsetWidth > 0 && Ia(l.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && Ia(l.height) / e.offsetHeight || 1);
  var d = ea(e) ? qt(e) : window, m = d.visualViewport, p = !fm() && a, h = (l.left + (p && m ? m.offsetLeft : 0)) / i, y = (l.top + (p && m ? m.offsetTop : 0)) / c, w = l.width / i, x = l.height / c;
  return { width: w, height: x, top: y, right: h + w, bottom: y + x, left: h, x: h, y };
}
function U0(e) {
  var r = Pa(e), a = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(r.width - a) <= 1 && (a = r.width), Math.abs(r.height - l) <= 1 && (l = r.height), { x: e.offsetLeft, y: e.offsetTop, width: a, height: l };
}
function mm(e, r) {
  var a = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (a && V0(a)) {
    var l = r;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Yr(e) {
  return qt(e).getComputedStyle(e);
}
function wE(e) {
  return ["table", "td", "th"].indexOf($r(e)) >= 0;
}
function Fn(e) {
  return ((ea(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function uu(e) {
  return $r(e) === "html" ? e : e.assignedSlot || e.parentNode || (V0(e) ? e.host : null) || Fn(e);
}
function Gf(e) {
  return !rr(e) || Yr(e).position === "fixed" ? null : e.offsetParent;
}
function SE(e) {
  var r = /firefox/i.test(t0()), a = /Trident/i.test(t0());
  if (a && rr(e)) {
    var l = Yr(e);
    if (l.position === "fixed")
      return null;
  }
  var i = uu(e);
  for (V0(i) && (i = i.host); rr(i) && ["html", "body"].indexOf($r(i)) < 0; ) {
    var c = Yr(i);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || r && c.willChange === "filter" || r && c.filter && c.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function sl(e) {
  for (var r = qt(e), a = Gf(e); a && wE(a) && Yr(a).position === "static"; )
    a = Gf(a);
  return a && ($r(a) === "html" || $r(a) === "body" && Yr(a).position === "static") ? r : a || SE(e) || r;
}
function q0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ho(e, r, a) {
  return Xn(e, Vi(r, a));
}
function AE(e, r, a) {
  var l = Ho(e, r, a);
  return l > a ? a : l;
}
function gm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function hm(e) {
  return Object.assign({}, gm(), e);
}
function ym(e, r) {
  return r.reduce(function(a, l) {
    return a[l] = e, a;
  }, {});
}
var CE = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, { placement: r.placement })) : e, hm(typeof e != "number" ? e : ym(e, ul));
};
function kE(e) {
  var r, a = e.state, l = e.name, i = e.options, c = a.elements.arrow, d = a.modifiersData.popperOffsets, m = Mr(a.placement), p = q0(m), h = [Rt, ar].indexOf(m) >= 0, y = h ? "height" : "width";
  if (!(!c || !d)) {
    var w = CE(i.padding, a), x = U0(c), v = p === "y" ? Ft : Rt, E = p === "y" ? nr : ar, b = a.rects.reference[y] + a.rects.reference[p] - d[p] - a.rects.popper[y], C = d[p] - a.rects.reference[p], A = sl(c), T = A ? p === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, k = b / 2 - C / 2, _ = w[v], O = T - x[y] - w[E], L = T / 2 - x[y] / 2 + k, $ = Ho(_, L, O), M = p;
    a.modifiersData[l] = (r = {}, r[M] = $, r.centerOffset = $ - L, r);
  }
}
function _E(e) {
  var r = e.state, a = e.options, l = a.element, i = l === void 0 ? "[data-popper-arrow]" : l;
  i != null && (typeof i == "string" && (i = r.elements.popper.querySelector(i), !i) || mm(r.elements.popper, i) && (r.elements.arrow = i));
}
var OE = { name: "arrow", enabled: !0, phase: "main", fn: kE, effect: _E, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Na(e) {
  return e.split("-")[1];
}
var TE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function FE(e, r) {
  var a = e.x, l = e.y, i = r.devicePixelRatio || 1;
  return { x: Ia(a * i) / i || 0, y: Ia(l * i) / i || 0 };
}
function Kf(e) {
  var r, a = e.popper, l = e.popperRect, i = e.placement, c = e.variation, d = e.offsets, m = e.position, p = e.gpuAcceleration, h = e.adaptive, y = e.roundOffsets, w = e.isFixed, x = d.x, v = x === void 0 ? 0 : x, E = d.y, b = E === void 0 ? 0 : E, C = typeof y == "function" ? y({ x: v, y: b }) : { x: v, y: b };
  v = C.x, b = C.y;
  var A = d.hasOwnProperty("x"), T = d.hasOwnProperty("y"), k = Rt, _ = Ft, O = window;
  if (h) {
    var L = sl(a), $ = "clientHeight", M = "clientWidth";
    if (L === qt(a) && (L = Fn(a), Yr(L).position !== "static" && m === "absolute" && ($ = "scrollHeight", M = "scrollWidth")), L = L, i === Ft || (i === Rt || i === ar) && c === Yo) {
      _ = nr;
      var j = w && L === O && O.visualViewport ? O.visualViewport.height : L[$];
      b -= j - l.height, b *= p ? 1 : -1;
    }
    if (i === Rt || (i === Ft || i === nr) && c === Yo) {
      k = ar;
      var Z = w && L === O && O.visualViewport ? O.visualViewport.width : L[M];
      v -= Z - l.width, v *= p ? 1 : -1;
    }
  }
  var V = Object.assign({ position: m }, h && TE), Q = y === !0 ? FE({ x: v, y: b }, qt(a)) : { x: v, y: b };
  if (v = Q.x, b = Q.y, p) {
    var Y;
    return Object.assign({}, V, (Y = {}, Y[_] = T ? "0" : "", Y[k] = A ? "0" : "", Y.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", Y));
  }
  return Object.assign({}, V, (r = {}, r[_] = T ? b + "px" : "", r[k] = A ? v + "px" : "", r.transform = "", r));
}
function RE(e) {
  var r = e.state, a = e.options, l = a.gpuAcceleration, i = l === void 0 ? !0 : l, c = a.adaptive, d = c === void 0 ? !0 : c, m = a.roundOffsets, p = m === void 0 ? !0 : m, h = { placement: Mr(r.placement), variation: Na(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: i, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Kf(Object.assign({}, h, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: d, roundOffsets: p })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Kf(Object.assign({}, h, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: p })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
var LE = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: RE, data: {} }, Si = { passive: !0 };
function DE(e) {
  var r = e.state, a = e.instance, l = e.options, i = l.scroll, c = i === void 0 ? !0 : i, d = l.resize, m = d === void 0 ? !0 : d, p = qt(r.elements.popper), h = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return c && h.forEach(function(y) {
    y.addEventListener("scroll", a.update, Si);
  }), m && p.addEventListener("resize", a.update, Si), function() {
    c && h.forEach(function(y) {
      y.removeEventListener("scroll", a.update, Si);
    }), m && p.removeEventListener("resize", a.update, Si);
  };
}
var ME = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: DE, data: {} }, $E = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Di(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return $E[r];
  });
}
var BE = { start: "end", end: "start" };
function Yf(e) {
  return e.replace(/start|end/g, function(r) {
    return BE[r];
  });
}
function W0(e) {
  var r = qt(e), a = r.pageXOffset, l = r.pageYOffset;
  return { scrollLeft: a, scrollTop: l };
}
function G0(e) {
  return Pa(Fn(e)).left + W0(e).scrollLeft;
}
function IE(e, r) {
  var a = qt(e), l = Fn(e), i = a.visualViewport, c = l.clientWidth, d = l.clientHeight, m = 0, p = 0;
  if (i) {
    c = i.width, d = i.height;
    var h = fm();
    (h || !h && r === "fixed") && (m = i.offsetLeft, p = i.offsetTop);
  }
  return { width: c, height: d, x: m + G0(e), y: p };
}
function PE(e) {
  var r, a = Fn(e), l = W0(e), i = (r = e.ownerDocument) == null ? void 0 : r.body, c = Xn(a.scrollWidth, a.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), d = Xn(a.scrollHeight, a.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), m = -l.scrollLeft + G0(e), p = -l.scrollTop;
  return Yr(i || a).direction === "rtl" && (m += Xn(a.clientWidth, i ? i.clientWidth : 0) - c), { width: c, height: d, x: m, y: p };
}
function K0(e) {
  var r = Yr(e), a = r.overflow, l = r.overflowX, i = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + i + l);
}
function vm(e) {
  return ["html", "body", "#document"].indexOf($r(e)) >= 0 ? e.ownerDocument.body : rr(e) && K0(e) ? e : vm(uu(e));
}
function Zo(e, r) {
  var a;
  r === void 0 && (r = []);
  var l = vm(e), i = l === ((a = e.ownerDocument) == null ? void 0 : a.body), c = qt(l), d = i ? [c].concat(c.visualViewport || [], K0(l) ? l : []) : l, m = r.concat(d);
  return i ? m : m.concat(Zo(uu(d)));
}
function r0(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function NE(e, r) {
  var a = Pa(e, !1, r === "fixed");
  return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
}
function Xf(e, r, a) {
  return r === dm ? r0(IE(e, a)) : ea(r) ? NE(r, a) : r0(PE(Fn(e)));
}
function jE(e) {
  var r = Zo(uu(e)), a = ["absolute", "fixed"].indexOf(Yr(e).position) >= 0, l = a && rr(e) ? sl(e) : e;
  return ea(l) ? r.filter(function(i) {
    return ea(i) && mm(i, l) && $r(i) !== "body";
  }) : [];
}
function HE(e, r, a, l) {
  var i = r === "clippingParents" ? jE(e) : [].concat(r), c = [].concat(i, [a]), d = c[0], m = c.reduce(function(p, h) {
    var y = Xf(e, h, l);
    return p.top = Xn(y.top, p.top), p.right = Vi(y.right, p.right), p.bottom = Vi(y.bottom, p.bottom), p.left = Xn(y.left, p.left), p;
  }, Xf(e, d, l));
  return m.width = m.right - m.left, m.height = m.bottom - m.top, m.x = m.left, m.y = m.top, m;
}
function bm(e) {
  var r = e.reference, a = e.element, l = e.placement, i = l ? Mr(l) : null, c = l ? Na(l) : null, d = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, p;
  switch (i) {
    case Ft:
      p = { x: d, y: r.y - a.height };
      break;
    case nr:
      p = { x: d, y: r.y + r.height };
      break;
    case ar:
      p = { x: r.x + r.width, y: m };
      break;
    case Rt:
      p = { x: r.x - a.width, y: m };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  var h = i ? q0(i) : null;
  if (h != null) {
    var y = h === "y" ? "height" : "width";
    switch (c) {
      case Ba:
        p[h] = p[h] - (r[y] / 2 - a[y] / 2);
        break;
      case Yo:
        p[h] = p[h] + (r[y] / 2 - a[y] / 2);
        break;
    }
  }
  return p;
}
function Xo(e, r) {
  r === void 0 && (r = {});
  var a = r, l = a.placement, i = l === void 0 ? e.placement : l, c = a.strategy, d = c === void 0 ? e.strategy : c, m = a.boundary, p = m === void 0 ? iE : m, h = a.rootBoundary, y = h === void 0 ? dm : h, w = a.elementContext, x = w === void 0 ? Io : w, v = a.altBoundary, E = v === void 0 ? !1 : v, b = a.padding, C = b === void 0 ? 0 : b, A = hm(typeof C != "number" ? C : ym(C, ul)), T = x === Io ? uE : Io, k = e.rects.popper, _ = e.elements[E ? T : x], O = HE(ea(_) ? _ : _.contextElement || Fn(e.elements.popper), p, y, d), L = Pa(e.elements.reference), $ = bm({ reference: L, element: k, strategy: "absolute", placement: i }), M = r0(Object.assign({}, k, $)), j = x === Io ? M : L, Z = { top: O.top - j.top + A.top, bottom: j.bottom - O.bottom + A.bottom, left: O.left - j.left + A.left, right: j.right - O.right + A.right }, V = e.modifiersData.offset;
  if (x === Io && V) {
    var Q = V[i];
    Object.keys(Z).forEach(function(Y) {
      var pe = [ar, nr].indexOf(Y) >= 0 ? 1 : -1, J = [Ft, nr].indexOf(Y) >= 0 ? "y" : "x";
      Z[Y] += Q[J] * pe;
    });
  }
  return Z;
}
function ZE(e, r) {
  r === void 0 && (r = {});
  var a = r, l = a.placement, i = a.boundary, c = a.rootBoundary, d = a.padding, m = a.flipVariations, p = a.allowedAutoPlacements, h = p === void 0 ? pm : p, y = Na(l), w = y ? m ? Wf : Wf.filter(function(E) {
    return Na(E) === y;
  }) : ul, x = w.filter(function(E) {
    return h.indexOf(E) >= 0;
  });
  x.length === 0 && (x = w);
  var v = x.reduce(function(E, b) {
    return E[b] = Xo(e, { placement: b, boundary: i, rootBoundary: c, padding: d })[Mr(b)], E;
  }, {});
  return Object.keys(v).sort(function(E, b) {
    return v[E] - v[b];
  });
}
function zE(e) {
  if (Mr(e) === iu)
    return [];
  var r = Di(e);
  return [Yf(e), r, Yf(r)];
}
function VE(e) {
  var r = e.state, a = e.options, l = e.name;
  if (!r.modifiersData[l]._skip) {
    for (var i = a.mainAxis, c = i === void 0 ? !0 : i, d = a.altAxis, m = d === void 0 ? !0 : d, p = a.fallbackPlacements, h = a.padding, y = a.boundary, w = a.rootBoundary, x = a.altBoundary, v = a.flipVariations, E = v === void 0 ? !0 : v, b = a.allowedAutoPlacements, C = r.options.placement, A = Mr(C), T = A === C, k = p || (T || !E ? [Di(C)] : zE(C)), _ = [C].concat(k).reduce(function(ue, te) {
      return ue.concat(Mr(te) === iu ? ZE(r, { placement: te, boundary: y, rootBoundary: w, padding: h, flipVariations: E, allowedAutoPlacements: b }) : te);
    }, []), O = r.rects.reference, L = r.rects.popper, $ = /* @__PURE__ */ new Map(), M = !0, j = _[0], Z = 0; Z < _.length; Z++) {
      var V = _[Z], Q = Mr(V), Y = Na(V) === Ba, pe = [Ft, nr].indexOf(Q) >= 0, J = pe ? "width" : "height", re = Xo(r, { placement: V, boundary: y, rootBoundary: w, altBoundary: x, padding: h }), ae = pe ? Y ? ar : Rt : Y ? nr : Ft;
      O[J] > L[J] && (ae = Di(ae));
      var q = Di(ae), W = [];
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
var UE = { name: "flip", enabled: !0, phase: "main", fn: VE, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Qf(e, r, a) {
  return a === void 0 && (a = { x: 0, y: 0 }), { top: e.top - r.height - a.y, right: e.right - r.width + a.x, bottom: e.bottom - r.height + a.y, left: e.left - r.width - a.x };
}
function Jf(e) {
  return [Ft, ar, nr, Rt].some(function(r) {
    return e[r] >= 0;
  });
}
function qE(e) {
  var r = e.state, a = e.name, l = r.rects.reference, i = r.rects.popper, c = r.modifiersData.preventOverflow, d = Xo(r, { elementContext: "reference" }), m = Xo(r, { altBoundary: !0 }), p = Qf(d, l), h = Qf(m, i, c), y = Jf(p), w = Jf(h);
  r.modifiersData[a] = { referenceClippingOffsets: p, popperEscapeOffsets: h, isReferenceHidden: y, hasPopperEscaped: w }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": y, "data-popper-escaped": w });
}
var WE = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: qE };
function GE(e, r, a) {
  var l = Mr(e), i = [Rt, Ft].indexOf(l) >= 0 ? -1 : 1, c = typeof a == "function" ? a(Object.assign({}, r, { placement: e })) : a, d = c[0], m = c[1];
  return d = d || 0, m = (m || 0) * i, [Rt, ar].indexOf(l) >= 0 ? { x: m, y: d } : { x: d, y: m };
}
function KE(e) {
  var r = e.state, a = e.options, l = e.name, i = a.offset, c = i === void 0 ? [0, 0] : i, d = pm.reduce(function(y, w) {
    return y[w] = GE(w, r.rects, c), y;
  }, {}), m = d[r.placement], p = m.x, h = m.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += p, r.modifiersData.popperOffsets.y += h), r.modifiersData[l] = d;
}
var YE = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: KE };
function XE(e) {
  var r = e.state, a = e.name;
  r.modifiersData[a] = bm({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
var QE = { name: "popperOffsets", enabled: !0, phase: "read", fn: XE, data: {} };
function JE(e) {
  return e === "x" ? "y" : "x";
}
function e6(e) {
  var r = e.state, a = e.options, l = e.name, i = a.mainAxis, c = i === void 0 ? !0 : i, d = a.altAxis, m = d === void 0 ? !1 : d, p = a.boundary, h = a.rootBoundary, y = a.altBoundary, w = a.padding, x = a.tether, v = x === void 0 ? !0 : x, E = a.tetherOffset, b = E === void 0 ? 0 : E, C = Xo(r, { boundary: p, rootBoundary: h, padding: w, altBoundary: y }), A = Mr(r.placement), T = Na(r.placement), k = !T, _ = q0(A), O = JE(_), L = r.modifiersData.popperOffsets, $ = r.rects.reference, M = r.rects.popper, j = typeof b == "function" ? b(Object.assign({}, r.rects, { placement: r.placement })) : b, Z = typeof j == "number" ? { mainAxis: j, altAxis: j } : Object.assign({ mainAxis: 0, altAxis: 0 }, j), V = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, Q = { x: 0, y: 0 };
  if (L) {
    if (c) {
      var Y, pe = _ === "y" ? Ft : Rt, J = _ === "y" ? nr : ar, re = _ === "y" ? "height" : "width", ae = L[_], q = ae + C[pe], W = ae - C[J], F = v ? -M[re] / 2 : 0, U = T === Ba ? $[re] : M[re], ne = T === Ba ? -M[re] : -$[re], ce = r.elements.arrow, ue = v && ce ? U0(ce) : { width: 0, height: 0 }, te = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : gm(), le = te[pe], fe = te[J], ve = Ho(0, $[re], ue[re]), Oe = k ? $[re] / 2 - F - ve - le - Z.mainAxis : U - ve - le - Z.mainAxis, lr = k ? -$[re] / 2 + F + ve + fe + Z.mainAxis : ne + ve + fe + Z.mainAxis, rt = r.elements.arrow && sl(r.elements.arrow), $t = rt ? _ === "y" ? rt.clientTop || 0 : rt.clientLeft || 0 : 0, se = (Y = V?.[_]) != null ? Y : 0, ht = ae + Oe - se - $t, Bt = ae + lr - se, yr = Ho(v ? Vi(q, ht) : q, ae, v ? Xn(W, Bt) : W);
      L[_] = yr, Q[_] = yr - ae;
    }
    if (m) {
      var vr, It = _ === "x" ? Ft : Rt, Qr = _ === "x" ? nr : ar, ze = L[O], bt = O === "y" ? "height" : "width", Et = ze + C[It], Br = ze - C[Qr], Pt = [Ft, Rt].indexOf(A) !== -1, Ir = (vr = V?.[O]) != null ? vr : 0, Nt = Pt ? Et : ze - $[bt] - M[bt] - Ir + Z.altAxis, We = Pt ? ze + $[bt] + M[bt] - Ir - Z.altAxis : Br, ut = v && Pt ? AE(Nt, ze, We) : Ho(v ? Nt : Et, ze, v ? We : Br);
      L[O] = ut, Q[O] = ut - ze;
    }
    r.modifiersData[l] = Q;
  }
}
var t6 = { name: "preventOverflow", enabled: !0, phase: "main", fn: e6, requiresIfExists: ["offset"] };
function r6(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function n6(e) {
  return e === qt(e) || !rr(e) ? W0(e) : r6(e);
}
function a6(e) {
  var r = e.getBoundingClientRect(), a = Ia(r.width) / e.offsetWidth || 1, l = Ia(r.height) / e.offsetHeight || 1;
  return a !== 1 || l !== 1;
}
function o6(e, r, a) {
  a === void 0 && (a = !1);
  var l = rr(r), i = rr(r) && a6(r), c = Fn(r), d = Pa(e, i, a), m = { scrollLeft: 0, scrollTop: 0 }, p = { x: 0, y: 0 };
  return (l || !l && !a) && (($r(r) !== "body" || K0(c)) && (m = n6(r)), rr(r) ? (p = Pa(r, !0), p.x += r.clientLeft, p.y += r.clientTop) : c && (p.x = G0(c))), { x: d.left + m.scrollLeft - p.x, y: d.top + m.scrollTop - p.y, width: d.width, height: d.height };
}
function l6(e) {
  var r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(c) {
    r.set(c.name, c);
  });
  function i(c) {
    a.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(m) {
      if (!a.has(m)) {
        var p = r.get(m);
        p && i(p);
      }
    }), l.push(c);
  }
  return e.forEach(function(c) {
    a.has(c.name) || i(c);
  }), l;
}
function i6(e) {
  var r = l6(e);
  return vE.reduce(function(a, l) {
    return a.concat(r.filter(function(i) {
      return i.phase === l;
    }));
  }, []);
}
function u6(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(a) {
      Promise.resolve().then(function() {
        r = void 0, a(e());
      });
    })), r;
  };
}
function s6(e) {
  var r = e.reduce(function(a, l) {
    var i = a[l.name];
    return a[l.name] = i ? Object.assign({}, i, l, { options: Object.assign({}, i.options, l.options), data: Object.assign({}, i.data, l.data) }) : l, a;
  }, {});
  return Object.keys(r).map(function(a) {
    return r[a];
  });
}
var e2 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function t2() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
    r[a] = arguments[a];
  return !r.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function c6(e) {
  e === void 0 && (e = {});
  var r = e, a = r.defaultModifiers, l = a === void 0 ? [] : a, i = r.defaultOptions, c = i === void 0 ? e2 : i;
  return function(d, m, p) {
    p === void 0 && (p = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, e2, c), modifiersData: {}, elements: { reference: d, popper: m }, attributes: {}, styles: {} }, y = [], w = !1, x = { state: h, setOptions: function(b) {
      var C = typeof b == "function" ? b(h.options) : b;
      E(), h.options = Object.assign({}, c, h.options, C), h.scrollParents = { reference: ea(d) ? Zo(d) : d.contextElement ? Zo(d.contextElement) : [], popper: Zo(m) };
      var A = i6(s6([].concat(l, h.options.modifiers)));
      return h.orderedModifiers = A.filter(function(T) {
        return T.enabled;
      }), v(), x.update();
    }, forceUpdate: function() {
      if (!w) {
        var b = h.elements, C = b.reference, A = b.popper;
        if (t2(C, A)) {
          h.rects = { reference: o6(C, sl(A), h.options.strategy === "fixed"), popper: U0(A) }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(M) {
            return h.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var T = 0; T < h.orderedModifiers.length; T++) {
            if (h.reset === !0) {
              h.reset = !1, T = -1;
              continue;
            }
            var k = h.orderedModifiers[T], _ = k.fn, O = k.options, L = O === void 0 ? {} : O, $ = k.name;
            typeof _ == "function" && (h = _({ state: h, options: L, name: $, instance: x }) || h);
          }
        }
      }
    }, update: u6(function() {
      return new Promise(function(b) {
        x.forceUpdate(), b(h);
      });
    }), destroy: function() {
      E(), w = !0;
    } };
    if (!t2(d, m))
      return x;
    x.setOptions(p).then(function(b) {
      !w && p.onFirstUpdate && p.onFirstUpdate(b);
    });
    function v() {
      h.orderedModifiers.forEach(function(b) {
        var C = b.name, A = b.options, T = A === void 0 ? {} : A, k = b.effect;
        if (typeof k == "function") {
          var _ = k({ state: h, name: C, instance: x, options: T }), O = function() {
          };
          y.push(_ || O);
        }
      });
    }
    function E() {
      y.forEach(function(b) {
        return b();
      }), y = [];
    }
    return x;
  };
}
var d6 = [ME, QE, LE, xE, YE, UE, t6, OE, WE], p6 = c6({ defaultModifiers: d6 }), f6 = Wt(lE()), m6 = [], g6 = function(e, r, a) {
  a === void 0 && (a = {});
  var l = D.useRef(null), i = { onFirstUpdate: a.onFirstUpdate, placement: a.placement || "bottom", strategy: a.strategy || "absolute", modifiers: a.modifiers || m6 }, c = D.useState({ styles: { popper: { position: i.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } }, attributes: {} }), d = c[0], m = c[1], p = D.useMemo(function() {
    return { name: "updateState", enabled: !0, phase: "write", fn: function(w) {
      var x = w.state, v = Object.keys(x.elements);
      cm.flushSync(function() {
        m({ styles: Uf(v.map(function(E) {
          return [E, x.styles[E] || {}];
        })), attributes: Uf(v.map(function(E) {
          return [E, x.attributes[E]];
        })) });
      });
    }, requires: ["computeStyles"] };
  }, []), h = D.useMemo(function() {
    var w = { onFirstUpdate: i.onFirstUpdate, placement: i.placement, strategy: i.strategy, modifiers: [].concat(i.modifiers, [p, { name: "applyStyles", enabled: !1 }]) };
    return (0, f6.default)(l.current, w) ? l.current || w : (l.current = w, w);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, p]), y = D.useRef();
  return qf(function() {
    y.current && y.current.setOptions(h);
  }, [h]), qf(function() {
    if (!(e == null || r == null)) {
      var w = a.createPopper || p6, x = w(e, r, h);
      return y.current = x, function() {
        x.destroy(), y.current = null;
      };
    }
  }, [e, r, a.createPopper]), { state: y.current ? y.current.state : null, styles: d.styles, attributes: d.attributes, update: y.current ? y.current.update : null, forceUpdate: y.current ? y.current.forceUpdate : null };
};
function Em(e) {
  var r = D.useRef(e);
  return r.current = e, D.useCallback(function() {
    return r.current;
  }, []);
}
var h6 = function() {
};
function y6(e) {
  var r = e.initial, a = e.value, l = e.onChange, i = l === void 0 ? h6 : l;
  if (r === void 0 && a === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var c = D.useState(r), d = c[0], m = c[1], p = Em(d), h = D.useCallback(function(w) {
    var x = p(), v = typeof w == "function" ? w(x) : w;
    typeof v.persist == "function" && v.persist(), m(v), typeof i == "function" && i(v);
  }, [p, i]), y = a !== void 0;
  return [y ? a : d, y ? i : h];
}
function xm(e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = 0), function() {
    return { width: 0, height: 0, top: r, right: e, bottom: r, left: e, x: 0, y: 0, toJSON: function() {
      return null;
    } };
  };
}
var v6 = ["styles", "attributes"], r2 = { getBoundingClientRect: xm() }, n2 = { closeOnOutsideClick: !0, closeOnTriggerHidden: !1, defaultVisible: !1, delayHide: 0, delayShow: 0, followCursor: !1, interactive: !1, mutationObserverOptions: { attributes: !0, childList: !0, subtree: !0 }, offset: [0, 6], trigger: "hover" };
function b6(e, r) {
  var a, l, i;
  e === void 0 && (e = {}), r === void 0 && (r = {});
  var c = Object.keys(n2).reduce(function(J, re) {
    var ae;
    return _t({}, J, (ae = {}, ae[re] = J[re] !== void 0 ? J[re] : n2[re], ae));
  }, e), d = D.useMemo(function() {
    return [{ name: "offset", options: { offset: c.offset } }];
  }, Array.isArray(c.offset) ? c.offset : []), m = _t({}, r, { placement: r.placement || c.placement, modifiers: r.modifiers || d }), p = D.useState(null), h = p[0], y = p[1], w = D.useState(null), x = w[0], v = w[1], E = y6({ initial: c.defaultVisible, value: c.visible, onChange: c.onVisibleChange }), b = E[0], C = E[1], A = D.useRef();
  D.useEffect(function() {
    return function() {
      return clearTimeout(A.current);
    };
  }, []);
  var T = g6(c.followCursor ? r2 : h, x, m), k = T.styles, _ = T.attributes, O = B0(T, v6), L = O.update, $ = Em({ visible: b, triggerRef: h, tooltipRef: x, finalConfig: c }), M = D.useCallback(function(J) {
    return Array.isArray(c.trigger) ? c.trigger.includes(J) : c.trigger === J;
  }, Array.isArray(c.trigger) ? c.trigger : [c.trigger]), j = D.useCallback(function() {
    clearTimeout(A.current), A.current = window.setTimeout(function() {
      return C(!1);
    }, c.delayHide);
  }, [c.delayHide, C]), Z = D.useCallback(function() {
    clearTimeout(A.current), A.current = window.setTimeout(function() {
      return C(!0);
    }, c.delayShow);
  }, [c.delayShow, C]), V = D.useCallback(function() {
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
    if (!(x == null || !M("hover") || !$().finalConfig.interactive))
      return x.addEventListener("mouseenter", Z), x.addEventListener("mouseleave", j), function() {
        x.removeEventListener("mouseenter", Z), x.removeEventListener("mouseleave", j);
      };
  }, [x, M, Z, j, $]);
  var Q = O == null || (a = O.state) == null || (l = a.modifiersData) == null || (i = l.hide) == null ? void 0 : i.isReferenceHidden;
  D.useEffect(function() {
    c.closeOnTriggerHidden && Q && j();
  }, [c.closeOnTriggerHidden, j, Q]), D.useEffect(function() {
    if (!c.followCursor || h == null)
      return;
    function J(re) {
      var ae = re.clientX, q = re.clientY;
      r2.getBoundingClientRect = xm(ae, q), L?.();
    }
    return h.addEventListener("mousemove", J), function() {
      return h.removeEventListener("mousemove", J);
    };
  }, [c.followCursor, h, L]), D.useEffect(function() {
    if (!(x == null || L == null || c.mutationObserverOptions == null)) {
      var J = new MutationObserver(L);
      return J.observe(x, c.mutationObserverOptions), function() {
        return J.disconnect();
      };
    }
  }, [c.mutationObserverOptions, x, L]);
  var Y = function(J) {
    return J === void 0 && (J = {}), _t({}, J, { style: _t({}, J.style, k.popper) }, _.popper, { "data-popper-interactive": c.interactive });
  }, pe = function(J) {
    return J === void 0 && (J = {}), _t({}, J, _.arrow, { style: _t({}, J.style, k.arrow), "data-popper-arrow": !0 });
  };
  return _t({ getArrowProps: pe, getTooltipProps: Y, setTooltipRef: v, setTriggerRef: y, tooltipRef: x, triggerRef: h, visible: b }, O);
}
var tr = ra(1e3)((e, r, a, l = 0) => r.split("-")[0] === e ? a : l), xn = 8, E6 = P.div({ position: "absolute", borderStyle: "solid" }, ({ placement: e }) => {
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
}, ({ theme: e, color: r, placement: a }) => ({ bottom: `${tr("top", a, `${xn * -1}px`, "auto")}`, top: `${tr("bottom", a, `${xn * -1}px`, "auto")}`, right: `${tr("left", a, `${xn * -1}px`, "auto")}`, left: `${tr("right", a, `${xn * -1}px`, "auto")}`, borderBottomWidth: `${tr("top", a, "0", xn)}px`, borderTopWidth: `${tr("bottom", a, "0", xn)}px`, borderRightWidth: `${tr("left", a, "0", xn)}px`, borderLeftWidth: `${tr("right", a, "0", xn)}px`, borderTopColor: tr("top", a, e.color[r] || r || e.base === "light" ? jo(e.background.app) : e.background.app, "transparent"), borderBottomColor: tr("bottom", a, e.color[r] || r || e.base === "light" ? jo(e.background.app) : e.background.app, "transparent"), borderLeftColor: tr("left", a, e.color[r] || r || e.base === "light" ? jo(e.background.app) : e.background.app, "transparent"), borderRightColor: tr("right", a, e.color[r] || r || e.base === "light" ? jo(e.background.app) : e.background.app, "transparent") })), x6 = P.div(({ hidden: e }) => ({ display: e ? "none" : "inline-block", zIndex: 2147483647 }), ({ theme: e, color: r, hasChrome: a }) => a ? { background: e.color[r] || r || e.base === "light" ? jo(e.background.app) : e.background.app, filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `, borderRadius: e.appBorderRadius, fontSize: e.typography.size.s1 } : {}), Y0 = u.forwardRef(({ placement: e, hasChrome: r, children: a, arrowProps: l, tooltipRef: i, color: c, withArrows: d, ...m }, p) => u.createElement(x6, { "data-testid": "tooltip", hasChrome: r, ref: p, ...m, color: c }, r && d && u.createElement(E6, { placement: e, ...l, color: c }), a));
Y0.displayName = "Tooltip";
Y0.defaultProps = { color: void 0, tooltipRef: void 0, hasChrome: !0, placement: "top", arrowProps: {} };
var { document: Mi } = gt, w6 = P.div`
  display: inline-block;
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, S6 = P.g`
  cursor: ${(e) => e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"};
`, wm = ({ svg: e, trigger: r, closeOnOutsideClick: a, placement: l, hasChrome: i, withArrows: c, offset: d, tooltip: m, children: p, closeOnTriggerHidden: h, mutationObserverOptions: y, closeOnClick: w, tooltipShown: x, onVisibilityChange: v, defaultVisible: E, delayHide: b, visible: C, interactive: A, delayShow: T, modifiers: k, strategy: _, followCursor: O, onVisibleChange: L, ...$ }) => {
  let M = e ? S6 : w6, { getArrowProps: j, getTooltipProps: Z, setTooltipRef: V, setTriggerRef: Q, visible: Y, state: pe } = b6({ trigger: r, placement: l, defaultVisible: E ?? x, delayHide: b, interactive: A, closeOnOutsideClick: a ?? w, closeOnTriggerHidden: h, onVisibleChange: (re) => {
    v?.(re), L?.(re);
  }, delayShow: T, followCursor: O, mutationObserverOptions: y, visible: C, offset: d }, { modifiers: k, strategy: _ }), J = u.createElement(Y0, { placement: pe?.placement, ref: V, hasChrome: i, arrowProps: j(), withArrows: c, ...Z() }, typeof m == "function" ? m({ onHide: () => L(!1) }) : m);
  return u.createElement(u.Fragment, null, u.createElement(M, { trigger: r, ref: Q, ...$ }, p), Y && oE.createPortal(J, Mi.body));
};
wm.defaultProps = { svg: !1, trigger: "click", closeOnOutsideClick: !1, placement: "top", modifiers: [{ name: "preventOverflow", options: { padding: 8 } }, { name: "offset", options: { offset: [8, 8] } }, { name: "arrow", options: { padding: 8 } }], hasChrome: !0, defaultVisible: !1 };
var A6 = ({ startOpen: e = !1, onVisibleChange: r, ...a }) => {
  let [l, i] = D.useState(e), c = D.useCallback((d) => {
    r && r(d) === !1 || i(d);
  }, [r]);
  return D.useEffect(() => {
    let d = () => c(!1);
    Mi.addEventListener("keydown", d, !1);
    let m = Array.from(Mi.getElementsByTagName("iframe")), p = [];
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
      Mi.removeEventListener("keydown", d), p.forEach((h) => {
        h();
      });
    };
  }), u.createElement(wm, { ...a, visible: l, onVisibleChange: c });
};
function C6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qo(e, r) {
  return Qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, l) {
    return a.__proto__ = l, a;
  }, Qo(e, r);
}
function k6(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Qo(e, r);
}
function n0(e) {
  return n0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, n0(e);
}
function _6(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function O6() {
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
function $i(e, r, a) {
  return O6() ? $i = Reflect.construct.bind() : $i = function(l, i, c) {
    var d = [null];
    d.push.apply(d, i);
    var m = Function.bind.apply(l, d), p = new m();
    return c && Qo(p, c.prototype), p;
  }, $i.apply(null, arguments);
}
function a0(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return a0 = function(a) {
    if (a === null || !_6(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(a))
        return r.get(a);
      r.set(a, l);
    }
    function l() {
      return $i(a, arguments, n0(this).constructor);
    }
    return l.prototype = Object.create(a.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), Qo(l, a);
  }, a0(e);
}
var Rr = function(e) {
  k6(r, e);
  function r(a) {
    var l;
    return l = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + a + " for more information.") || this, C6(l);
  }
  return r;
}(a0(Error));
function wc(e) {
  return Math.round(e * 255);
}
function T6(e, r, a) {
  return wc(e) + "," + wc(r) + "," + wc(a);
}
function Jo(e, r, a, l) {
  if (l === void 0 && (l = T6), r === 0)
    return l(a, a, a);
  var i = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(i % 2 - 1)), m = 0, p = 0, h = 0;
  i >= 0 && i < 1 ? (m = c, p = d) : i >= 1 && i < 2 ? (m = d, p = c) : i >= 2 && i < 3 ? (p = c, h = d) : i >= 3 && i < 4 ? (p = d, h = c) : i >= 4 && i < 5 ? (m = d, h = c) : i >= 5 && i < 6 && (m = c, h = d);
  var y = a - c / 2, w = m + y, x = p + y, v = h + y;
  return l(w, x, v);
}
var a2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function F6(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return a2[r] ? "#" + a2[r] : e;
}
var R6 = /^#[a-fA-F0-9]{6}$/, L6 = /^#[a-fA-F0-9]{8}$/, D6 = /^#[a-fA-F0-9]{3}$/, M6 = /^#[a-fA-F0-9]{4}$/, Sc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, $6 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, B6 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, I6 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function X0(e) {
  if (typeof e != "string")
    throw new Rr(3);
  var r = F6(e);
  if (r.match(R6))
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16) };
  if (r.match(L6)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[2], 16), green: parseInt("" + r[3] + r[4], 16), blue: parseInt("" + r[5] + r[6], 16), alpha: a };
  }
  if (r.match(D6))
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16) };
  if (r.match(M6)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + r[1] + r[1], 16), green: parseInt("" + r[2] + r[2], 16), blue: parseInt("" + r[3] + r[3], 16), alpha: l };
  }
  var i = Sc.exec(r);
  if (i)
    return { red: parseInt("" + i[1], 10), green: parseInt("" + i[2], 10), blue: parseInt("" + i[3], 10) };
  var c = $6.exec(r.substring(0, 50));
  if (c)
    return { red: parseInt("" + c[1], 10), green: parseInt("" + c[2], 10), blue: parseInt("" + c[3], 10), alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4]) };
  var d = B6.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + Jo(m, p, h) + ")", w = Sc.exec(y);
    if (!w)
      throw new Rr(4, r, y);
    return { red: parseInt("" + w[1], 10), green: parseInt("" + w[2], 10), blue: parseInt("" + w[3], 10) };
  }
  var x = I6.exec(r.substring(0, 50));
  if (x) {
    var v = parseInt("" + x[1], 10), E = parseInt("" + x[2], 10) / 100, b = parseInt("" + x[3], 10) / 100, C = "rgb(" + Jo(v, E, b) + ")", A = Sc.exec(C);
    if (!A)
      throw new Rr(4, r, C);
    return { red: parseInt("" + A[1], 10), green: parseInt("" + A[2], 10), blue: parseInt("" + A[3], 10), alpha: parseFloat("" + x[4]) > 1 ? parseFloat("" + x[4]) / 100 : parseFloat("" + x[4]) };
  }
  throw new Rr(5);
}
function P6(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, i = Math.max(r, a, l), c = Math.min(r, a, l), d = (i + c) / 2;
  if (i === c)
    return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: d, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: d };
  var m, p = i - c, h = d > 0.5 ? p / (2 - i - c) : p / (i + c);
  switch (i) {
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
  return P6(X0(e));
}
var N6 = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, o0 = N6;
function Wn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function Ac(e) {
  return Wn(Math.round(e * 255));
}
function j6(e, r, a) {
  return o0("#" + Ac(e) + Ac(r) + Ac(a));
}
function Ui(e, r, a) {
  return Jo(e, r, a, j6);
}
function H6(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Ui(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Ui(e.hue, e.saturation, e.lightness);
  throw new Rr(1);
}
function Z6(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? Ui(e, r, a) : "rgba(" + Jo(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? Ui(e.hue, e.saturation, e.lightness) : "rgba(" + Jo(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Rr(2);
}
function l0(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return o0("#" + Wn(e) + Wn(r) + Wn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return o0("#" + Wn(e.red) + Wn(e.green) + Wn(e.blue));
  throw new Rr(6);
}
function Gr(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var i = X0(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? l0(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? l0(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Rr(7);
}
var z6 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, V6 = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, U6 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, q6 = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Am(e) {
  if (typeof e != "object")
    throw new Rr(8);
  if (V6(e))
    return Gr(e);
  if (z6(e))
    return l0(e);
  if (q6(e))
    return Z6(e);
  if (U6(e))
    return H6(e);
  throw new Rr(8);
}
function Cm(e, r, a) {
  return function() {
    var l = a.concat(Array.prototype.slice.call(arguments));
    return l.length >= r ? e.apply(this, l) : Cm(e, r, l);
  };
}
function Q0(e) {
  return Cm(e, e.length, []);
}
function J0(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function W6(e, r) {
  if (r === "transparent")
    return r;
  var a = Sm(r);
  return Am(_t({}, a, { lightness: J0(0, 1, a.lightness - parseFloat(e)) }));
}
var G6 = Q0(W6), La = G6;
function K6(e, r) {
  if (r === "transparent")
    return r;
  var a = Sm(r);
  return Am(_t({}, a, { lightness: J0(0, 1, a.lightness + parseFloat(e)) }));
}
var Y6 = Q0(K6), X6 = Y6;
function Q6(e, r) {
  if (r === "transparent")
    return r;
  var a = X0(r), l = typeof a.alpha == "number" ? a.alpha : 1, i = _t({}, a, { alpha: J0(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return Gr(i);
}
var J6 = Q0(Q6), Ot = J6;
function ex(e, r) {
  var a = D.useRef(null), l = D.useRef(null);
  l.current = r;
  var i = D.useRef(null);
  D.useEffect(function() {
    c();
  });
  var c = D.useCallback(function() {
    var d = i.current, m = l.current, p = d || (m ? m instanceof Element ? m : m.current : null);
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
    i.current = d, c();
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
function km(e) {
  e === void 0 && (e = {});
  var r = e.onResize, a = D.useRef(void 0);
  a.current = r;
  var l = e.round || Math.round, i = D.useRef(), c = D.useState({
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
  }), y = ex(D.useCallback(function(w) {
    return (!i.current || i.current.box !== e.box || i.current.round !== l) && (i.current = {
      box: e.box,
      round: l,
      instance: new ResizeObserver(function(x) {
        var v = x[0], E = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", b = o2(v, E, "inlineSize"), C = o2(v, E, "blockSize"), A = b ? l(b) : void 0, T = C ? l(C) : void 0;
        if (h.current.width !== A || h.current.height !== T) {
          var k = {
            width: A,
            height: T
          };
          h.current.width = A, h.current.height = T, a.current ? a.current(k) : p.current || m(k);
        }
      })
    }), i.current.instance.observe(w, {
      box: e.box
    }), function() {
      i.current && i.current.instance.unobserve(w);
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
var Ie = ({ ...e }, r) => {
  let a = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${r}`, ...a].filter(Boolean).join(" "), e;
}, Ua = ({ theme: e }) => ({ margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }), Xr = ({ theme: e }) => ({ lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? Ot(0.1, e.color.defaultText) : Ot(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border }), He = ({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }), na = { margin: "16px 0" }, tx = ({ href: e, children: r, ...a }) => {
  let l = /^\//.test(e), i = /^#.*/.test(e), c = l ? `./?path=${e}` : e;
  return u.createElement("a", { href: c, target: i ? "_self" : "_top", ...a }, r);
}, _m = P(tx)(He, ({ theme: e }) => ({ fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } })), Om = P.blockquote(He, na, ({ theme: e }) => ({ borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } })), rx = (e) => typeof e == "string", nx = /[\n\r]/g, ax = P.code(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", display: "inline-block", paddingLeft: 2, paddingRight: 2, verticalAlign: "baseline", color: "inherit" }), Xr), ox = P(z0)(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), ed = ({ className: e, children: r, ...a }) => {
  let l = (e || "").match(/lang-(\S+)/), i = D.Children.toArray(r);
  return i.filter(rx).some((c) => c.match(nx)) ? u.createElement(ox, { bordered: !0, copyable: !0, language: l?.[1] ?? "plaintext", format: !1, ...a }, r) : u.createElement(ax, { ...a, className: e }, i);
}, Tm = P.div(He), Fm = P.dl(He, { ...na, padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }), Rm = P.h1(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold })), td = P.h2(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` })), rd = P.h3(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.m1}px` })), Lm = P.h4(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.s3}px` })), Dm = P.h5(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px` })), Mm = P.h6(He, Ua, ({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, color: e.color.dark })), $m = P.hr(({ theme: e }) => ({ border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 })), Bm = P.img({ maxWidth: "100%" }), Im = P.li(He, ({ theme: e }) => ({ fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": Xr({ theme: e }) })), lx = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Pm = P.ol(He, na, { ...lx, listStyle: "decimal" }), Nm = P.p(He, na, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": Xr({ theme: e }) })), jm = P.pre(He, na, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } })), Hm = P.span(He, ({ theme: e }) => ({ "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } })), Zm = P.table(He, na, ({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } })), zm = P.title(Xr), ix = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, Vm = P.ul(He, na, { ...ix, listStyle: "disc" }), nd = P.div(He), Um = { h1: (e) => u.createElement(Rm, { ...Ie(e, "h1") }), h2: (e) => u.createElement(td, { ...Ie(e, "h2") }), h3: (e) => u.createElement(rd, { ...Ie(e, "h3") }), h4: (e) => u.createElement(Lm, { ...Ie(e, "h4") }), h5: (e) => u.createElement(Dm, { ...Ie(e, "h5") }), h6: (e) => u.createElement(Mm, { ...Ie(e, "h6") }), pre: (e) => u.createElement(jm, { ...Ie(e, "pre") }), a: (e) => u.createElement(_m, { ...Ie(e, "a") }), hr: (e) => u.createElement($m, { ...Ie(e, "hr") }), dl: (e) => u.createElement(Fm, { ...Ie(e, "dl") }), blockquote: (e) => u.createElement(Om, { ...Ie(e, "blockquote") }), table: (e) => u.createElement(Zm, { ...Ie(e, "table") }), img: (e) => u.createElement(Bm, { ...Ie(e, "img") }), div: (e) => u.createElement(Tm, { ...Ie(e, "div") }), span: (e) => u.createElement(Hm, { ...Ie(e, "span") }), li: (e) => u.createElement(Im, { ...Ie(e, "li") }), ul: (e) => u.createElement(Vm, { ...Ie(e, "ul") }), ol: (e) => u.createElement(Pm, { ...Ie(e, "ol") }), p: (e) => u.createElement(Nm, { ...Ie(e, "p") }), code: (e) => u.createElement(ed, { ...Ie(e, "code") }), tt: (e) => u.createElement(zm, { ...Ie(e, "tt") }), resetwrapper: (e) => u.createElement(nd, { ...Ie(e, "resetwrapper") }) };
P.div(({ theme: e }) => ({ display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: e.typography.weight.bold }), { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, ({ theme: e, status: r }) => {
  switch (r) {
    case "critical":
      return { color: e.color.critical, background: e.background.critical };
    case "negative":
      return { color: e.color.negativeText, background: e.background.negative, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ot(0.9, e.color.negativeText)}` : "none" };
    case "warning":
      return { color: e.color.warningText, background: e.background.warning, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ot(0.9, e.color.warningText)}` : "none" };
    case "neutral":
      return { color: e.color.dark, background: e.color.mediumlight, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ot(0.9, e.color.dark)}` : "none" };
    case "positive":
      return { color: e.color.positiveText, background: e.background.positive, boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Ot(0.9, e.color.positiveText)}` : "none" };
    default:
      return {};
  }
});
var el = { user: u.createElement(u.Fragment, null, u.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z" })), useralt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z" })), useradd: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z" })), users: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z" }), u.createElement("path", { d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z" })), profile: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z" })), facehappy: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), faceneutral: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), facesad: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), accessibility: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" }), u.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), accessibilityalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z" })), arrowup: u.createElement(u.Fragment, null, u.createElement("path", { d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z" })), arrowdown: u.createElement(u.Fragment, null, u.createElement("path", { d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z" })), arrowleft: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z" })), arrowright: u.createElement(u.Fragment, null, u.createElement("path", { d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" })), arrowupalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z" })), arrowdownalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z" })), arrowleftalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z" })), arrowrightalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z" })), expandalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z" })), collapse: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z" })), expand: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z" })), unfold: u.createElement(u.Fragment, null, u.createElement("path", { d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z" }), u.createElement("path", { d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z" }), u.createElement("path", { d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" })), transfer: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z" })), redirect: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z" })), undo: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z" })), reply: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z" })), sync: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z" })), upload: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), download: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z" }), u.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z" })), back: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z" })), proceed: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z" })), refresh: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z" })), globe: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z" })), compass: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), location: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z" })), pin: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z" })), time: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), dashboard: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z" }), u.createElement("path", { fillRule: "evenodd", d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z" })), timer: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z" })), home: u.createElement(u.Fragment, null, u.createElement("path", { d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z" })), admin: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z" }), u.createElement("path", { d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z" })), info: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), question: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), support: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })), alert: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z" })), email: u.createElement(u.Fragment, null, u.createElement("path", { d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z" })), phone: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z" })), link: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z" }), u.createElement("path", { d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z" })), unlink: u.createElement(u.Fragment, null, u.createElement("path", { d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), bell: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z" })), rss: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" })), sharealt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z" }), u.createElement("path", { d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z" })), share: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z" }), u.createElement("path", { d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z" })), circlehollow: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" })), circle: u.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }), bookmarkhollow: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z" })), bookmark: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z" })), hearthollow: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2" })), heart: u.createElement(u.Fragment, null, u.createElement("path", { d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z" })), starhollow: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z" })), star: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z" })), certificate: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z" })), verified: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), thumbsup: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), shield: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z" })), basket: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }), u.createElement("path", { d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z" }), u.createElement("path", { d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z" })), beaker: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z" })), hourglass: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z" })), flag: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z" })), cloudhollow: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z" })), cloud: u.createElement("path", { d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z" }), edit: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z" })), cog: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z", fill: "#333" }), u.createElement("path", { fillRule: "evenodd", d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z" })), nut: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z" }), u.createElement("path", { fillRule: "evenodd", d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z" })), wrench: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), ellipsis: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" })), check: u.createElement(u.Fragment, null, u.createElement("path", { d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z" })), form: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z" }), u.createElement("path", { d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z" })), batchdeny: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), batchaccept: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z" })), controls: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z" })), plus: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z" })), closeAlt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z" })), cross: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z" })), trash: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z" })), pinalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z" })), unpin: u.createElement(u.Fragment, null, u.createElement("path", { d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), add: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), subtract: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), close: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z" })), delete: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z" })), passed: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z" })), changed: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" })), failed: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z" })), clear: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z" })), comment: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z" })), commentadd: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), requestchange: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z" })), comments: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z" })), lock: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z" }), u.createElement("path", { fillRule: "evenodd", d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z" })), unlock: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }), u.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z" })), key: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z" })), outbox: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z" }), u.createElement("path", { d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z" })), credit: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }), u.createElement("path", { fillRule: "evenodd", d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z" })), button: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z" }), u.createElement("path", { d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z" })), type: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z" })), pointerdefault: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z" })), pointerhand: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z" })), browser: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), tablet: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z" })), mobile: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z" })), watch: u.createElement(u.Fragment, null, u.createElement("path", { key: "watch", fillRule: "evenodd", d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" })), sidebar: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z" })), sidebaralt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z" })), sidebaralttoggle: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z" })), sidebartoggle: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z" })), bottombar: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z" })), bottombartoggle: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z" })), cpu: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z" }), u.createElement("path", { fillRule: "evenodd", d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z" })), database: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z" })), memory: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z" })), structure: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z" })), box: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z" })), power: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }), u.createElement("path", { d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z" })), photo: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z" })), component: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z" })), grid: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z" })), outline: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" })), photodrag: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z" }), u.createElement("path", { d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z" })), search: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoom: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" })), zoomout: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }), u.createElement("path", { fillRule: "evenodd", d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" })), zoomreset: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z" })), eye: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }), u.createElement("path", { fillRule: "evenodd", d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z" })), eyeclose: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z" }), u.createElement("path", { d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z" })), lightning: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z" })), lightningoff: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z" })), contrast: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z" })), switchalt: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z" })), mirror: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z" })), grow: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z" }), u.createElement("path", { d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z" })), paintbrush: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z" })), ruler: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z" })), stop: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z" })), camera: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" }), u.createElement("path", { fillRule: "evenodd", d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z" })), video: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }), u.createElement("path", { fillRule: "evenodd", d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" })), speaker: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z" }), u.createElement("path", { d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z" }), u.createElement("path", { d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z" })), play: u.createElement(u.Fragment, null, u.createElement("path", { d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z" })), playback: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z" })), playnext: u.createElement(u.Fragment, null, u.createElement("path", { d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z" })), rewind: u.createElement(u.Fragment, null, u.createElement("path", { d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z" })), fastforward: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z" })), stopalt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z" })), sidebyside: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z" })), stacked: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z" })), sun: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), u.createElement("path", { d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z" })), moon: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z" })), book: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z" })), document: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z" })), copy: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z" })), category: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z" })), folder: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z" })), print: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z" })), graphline: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z" })), calendar: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z" })), graphbar: u.createElement(u.Fragment, null, u.createElement("path", { d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z" })), menu: u.createElement(u.Fragment, null, u.createElement("path", { d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z" })), menualt: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z" })), filter: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" })), docchart: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z" })), doclist: u.createElement(u.Fragment, null, u.createElement("path", { d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z" }), u.createElement("path", { fillRule: "evenodd", d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z" })), markup: u.createElement(u.Fragment, null, u.createElement("path", { d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z" })), bold: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z" })), italic: u.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }), paperclip: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z" })), listordered: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z" })), listunordered: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" })), paragraph: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z" })), markdown: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z" })), repository: u.createElement(u.Fragment, null, u.createElement("path", { d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z" }), u.createElement("path", { d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z" }), u.createElement("path", { d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z" }), u.createElement("path", { fillRule: "evenodd", d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z" })), commit: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })), branch: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), pullrequest: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" })), merge: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" })), apple: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z" })), linux: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z" })), ubuntu: u.createElement(u.Fragment, null, u.createElement("path", { d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z" })), windows: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z" })), storybook: u.createElement(u.Fragment, null, u.createElement("path", { d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z" })), azuredevops: u.createElement(u.Fragment, null, u.createElement("path", { d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z" })), bitbucket: u.createElement(u.Fragment, null, u.createElement("path", { d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z" })), chrome: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z" })), chromatic: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z" })), componentdriven: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z" })), discord: u.createElement(u.Fragment, null, u.createElement("path", { d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z" })), facebook: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z" })), figma: u.createElement(u.Fragment, null, u.createElement("path", { fillRule: "evenodd", d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z" })), gdrive: u.createElement(u.Fragment, null, u.createElement("path", { d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z" })), github: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z" })), gitlab: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z" })), google: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z" })), graphql: u.createElement(u.Fragment, null, u.createElement("path", { d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z" })), medium: u.createElement(u.Fragment, null, u.createElement("path", { d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z" })), redux: u.createElement(u.Fragment, null, u.createElement("path", { d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z" })), twitter: u.createElement(u.Fragment, null, u.createElement("path", { d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z" })), youtube: u.createElement(u.Fragment, null, u.createElement("path", { d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z" })), vscode: u.createElement(u.Fragment, null, u.createElement("path", { d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z" })) }, qm = P.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`, Lt = ({ icon: e, useSymbol: r, ...a }) => u.createElement(qm, { viewBox: "0 0 14 14", width: "14px", height: "14px", ...a }, r ? u.createElement("use", { xlinkHref: `#icon--${e}` }) : el[e]);
D.memo(function({ icons: e = Object.keys(el) }) {
  return u.createElement(qm, { viewBox: "0 0 14 14", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, e.map((r) => u.createElement("symbol", { id: `icon--${r}`, key: r }, el[r])));
});
var ux = 0, sx = (e) => e.button === ux && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, cx = (e, r) => {
  sx(e) && (e.preventDefault(), r(e));
}, dx = P.span(({ withArrow: e }) => e ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {}, ({ containsIcon: e }) => e ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {}), px = P.a(({ theme: e }) => ({ display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: e.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: La(0.07, e.color.secondary), "svg path": { fill: La(0.07, e.color.secondary) } }, "&:active": { color: La(0.1, e.color.secondary), "svg path": { fill: La(0.1, e.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: e.color.secondary } } }), ({ theme: e, secondary: r, tertiary: a }) => {
  let l;
  return r && (l = [e.textMutedColor, e.color.dark, e.color.darker]), a && (l = [e.color.dark, e.color.darkest, e.textMutedColor]), l ? { color: l[0], "svg path": { fill: l[0] }, "&:hover": { color: l[1], "svg path": { fill: l[1] } }, "&:active": { color: l[2], "svg path": { fill: l[2] } } } : {};
}, ({ nochrome: e }) => e ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {}, ({ theme: e, inverse: r }) => r ? { color: e.color.lightest, "svg path": { fill: e.color.lightest }, "&:hover": { color: e.color.lighter, "svg path": { fill: e.color.lighter } }, "&:active": { color: e.color.light, "svg path": { fill: e.color.light } } } : {}, ({ isButton: e }) => e ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {}), qi = ({ cancel: e, children: r, onClick: a, withArrow: l, containsIcon: i, className: c, ...d }) => u.createElement(px, { ...d, onClick: a && e ? (m) => cx(m, a) : a, className: c }, u.createElement(dx, { withArrow: l, containsIcon: i }, r, l && u.createElement(Lt, { icon: "arrowright" })));
qi.defaultProps = { cancel: !0, className: void 0, style: void 0, onClick: void 0, withArrow: !1, containsIcon: !1 };
P.div(({ theme: e }) => ({ fontSize: `${e.typography.size.s2}px`, lineHeight: "1.6", h1: { fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, h2: { fontSize: `${e.typography.size.m2}px`, borderBottom: `1px solid ${e.appBorderColor}` }, h3: { fontSize: `${e.typography.size.m1}px` }, h4: { fontSize: `${e.typography.size.s3}px` }, h5: { fontSize: `${e.typography.size.s2}px` }, h6: { fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: e.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: `1px solid ${e.appBorderColor}`, textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: e.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: `1px solid ${e.color.mediumlight}`, backgroundColor: e.color.lighter, borderRadius: 3, color: e.base === "dark" && e.color.darkest } }));
var Qn = [], ja = null, fx = D.lazy(async () => {
  let { SyntaxHighlighter: e } = await import("./syntaxhighlighter-4OVWVELQ-9043c2f0.mjs");
  return Qn.length > 0 && (Qn.forEach((r) => {
    e.registerLanguage(...r);
  }), Qn = []), ja === null && (ja = e), { default: (r) => u.createElement(e, { ...r }) };
}), mx = D.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: r }] = await Promise.all([import("./syntaxhighlighter-4OVWVELQ-9043c2f0.mjs"), import("./formatter-ZNWCFYAW-81c86b7e.mjs")]);
  return Qn.length > 0 && (Qn.forEach((a) => {
    e.registerLanguage(...a);
  }), Qn = []), ja === null && (ja = e), { default: (a) => u.createElement(e, { ...a, formatter: r }) };
}), su = (e) => u.createElement(D.Suspense, { fallback: u.createElement("div", null) }, e.format !== !1 ? u.createElement(mx, { ...e }) : u.createElement(fx, { ...e }));
su.registerLanguage = (...e) => {
  if (ja !== null) {
    ja.registerLanguage(...e);
    return;
  }
  Qn.push(e);
};
P.div(({ theme: e, col: r, row: a = 1 }) => r ? { display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: r * e.layoutMargin, verticalAlign: "inherit" }, [`& > *:first-child${Jc}`]: { marginLeft: 0 } } : { "& > *": { marginTop: a * e.layoutMargin }, [`& > *:first-child${Jc}`]: { marginTop: 0 } }, ({ theme: e, outer: r, col: a, row: l }) => {
  switch (!0) {
    case !!(r && a):
      return { marginLeft: r * e.layoutMargin, marginRight: r * e.layoutMargin };
    case !!(r && l):
      return { marginTop: r * e.layoutMargin, marginBottom: r * e.layoutMargin };
    default:
      return {};
  }
});
var gx = P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold })), hx = P.div(), yx = P.div(({ theme: e }) => ({ padding: 30, textAlign: "center", color: e.color.defaultText, fontSize: e.typography.size.s2 - 1 })), Wm = ({ children: e, ...r }) => {
  let [a, l] = D.Children.toArray(e);
  return u.createElement(yx, { ...r }, u.createElement(gx, null, a), l && u.createElement(hx, null, l));
}, vx = P.div(({ scale: e = 1, elementHeight: r }) => ({ height: r || "auto", transformOrigin: "top left", transform: `scale(${1 / e})` }));
function bx({ scale: e, children: r }) {
  let a = D.useRef(null), [l, i] = D.useState(0), c = D.useCallback(({ height: d }) => {
    d && i(d / e);
  }, [e]);
  return D.useEffect(() => {
    a.current && i(a.current.getBoundingClientRect().height);
  }, [e]), km({ ref: a, onResize: c }), u.createElement(vx, { scale: e, elementHeight: l }, u.createElement("div", { ref: a, className: "innerZoomElementWrapper" }, r));
}
var Ex = class extends D.Component {
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
}, Gm = { Element: bx, IFrame: Ex }, { document: xx } = gt, wx = P.strong(({ theme: e }) => ({ color: e.color.orange })), Sx = P.strong(({ theme: e }) => ({ color: e.color.ancillary, textDecoration: "underline" })), l2 = P.em(({ theme: e }) => ({ color: e.textMutedColor })), Ax = /(Error): (.*)\n/, Cx = /at (?:(.*) )?\(?(.+)\)?/, kx = /([^@]+)?(?:\/<)?@(.+)?/, _x = /([^@]+)?@(.+)?/, Km = ({ error: e }) => {
  if (!e)
    return u.createElement(D.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return u.createElement(D.Fragment, null, e.message || "This error has no stack or message");
  let r = e.stack.toString();
  r && e.message && !r.includes(e.message) && (r = `Error: ${e.message}

${r}`);
  let a = r.match(Ax);
  if (!a)
    return u.createElement(D.Fragment, null, r);
  let [, l, i] = a, c = r.split(/\n/).slice(1), [, ...d] = c.map((m) => {
    let p = m.match(Cx) || m.match(kx) || m.match(_x);
    return p ? { name: (p[1] || "").replace("/<", ""), location: p[2].replace(xx.location.origin, "") } : null;
  }).filter(Boolean);
  return u.createElement(D.Fragment, null, u.createElement("span", null, l), ": ", u.createElement(wx, null, i), u.createElement("br", null), d.map((m, p) => m.name ? u.createElement(D.Fragment, { key: p }, "  ", "at ", u.createElement(Sx, null, m.name), " (", u.createElement(l2, null, m.location), ")", u.createElement("br", null)) : u.createElement(D.Fragment, { key: p }, "  ", "at ", u.createElement(l2, null, m.location), u.createElement("br", null))));
}, Ym = P.button(({ small: e, theme: r }) => ({ border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: e ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transitionProperty: "background, box-shadow", transitionDuration: "150ms", transitionTimingFunction: "ease-out", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: `${e ? r.typography.size.s1 : r.typography.size.s2 - 1}px`, fontWeight: r.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: e ? 12 : 14, width: e ? 12 : 14, verticalAlign: "top", marginRight: e ? 4 : 6, marginTop: e ? 0 : -1, marginBottom: e ? 0 : -1, pointerEvents: "none", path: { fill: "currentColor" } } }), ({ disabled: e }) => e ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {}, ({ containsIcon: e, small: r }) => e ? { svg: { display: "block", margin: 0 }, ...r ? { padding: 10 } : { padding: 13 } } : {}, ({ theme: e, primary: r, secondary: a, gray: l }) => {
  let i;
  return l ? i = e.color.mediumlight : a ? i = e.color.secondary : r && (i = e.color.primary), i ? { background: i, color: l ? e.color.darkest : e.color.lightest, "&:hover": { background: La(0.05, i) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: `${Gr(i, 1)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${Gr(i, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, tertiary: r, inForm: a, small: l }) => r ? { background: e.button.background, color: e.input.color, boxShadow: `${e.button.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, ...a && l ? { padding: "10px 16px" } : {}, "&:hover": { background: e.base === "light" ? La(0.02, e.button.background) : X6(0.03, e.button.background), ...a ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" } }, "&:active": { background: e.button.background }, "&:focus": { boxShadow: `${Gr(e.color.secondary, 1)} 0 0 0 1px inset`, outline: "none" } } : {}, ({ theme: e, outline: r }) => r ? { boxShadow: `${Ot(0.8, e.color.defaultText)} 0 0 0 1px inset`, color: Ot(0.3, e.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: `${Ot(0.5, e.color.defaultText)} 0 0 0 1px inset`, outline: "none" }, "&:active": { boxShadow: `${Ot(0.5, e.color.defaultText)} 0 0 0 2px inset`, color: Ot(0, e.color.defaultText) } } : {}, ({ theme: e, outline: r, primary: a }) => {
  let l = e.color.primary;
  return r && a ? { boxShadow: `${l} 0 0 0 1px inset`, color: l, "svg path": { fill: l }, "&:hover": { boxShadow: `${l} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: l, boxShadow: `${l} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${l} 0 0 0 1px inset, ${Gr(l, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${l} 0 0 0 1px inset, ${Gr(l, 0.2)} 0 8px 18px 0px` } } : {};
}, ({ theme: e, outline: r, primary: a, secondary: l }) => {
  let i;
  return l ? i = e.color.secondary : a && (i = e.color.primary), r && i ? { boxShadow: `${i} 0 0 0 1px inset`, color: i, "svg path": { fill: i }, "&:hover": { boxShadow: `${i} 0 0 0 1px inset`, background: "transparent" }, "&:active": { background: i, boxShadow: `${i} 0 0 0 1px inset`, color: e.color.tertiary }, "&:focus": { boxShadow: `${i} 0 0 0 1px inset, ${Gr(i, 0.4)} 0 1px 9px 2px`, outline: "none" }, "&:focus:hover": { boxShadow: `${i} 0 0 0 1px inset, ${Gr(i, 0.2)} 0 8px 18px 0px` } } : {};
}), Ox = Ym.withComponent("a"), Xm = Object.assign(D.forwardRef(function({ isLink: e, children: r, ...a }, l) {
  return e ? u.createElement(Ox, { ...a, ref: l }, r) : u.createElement(Ym, { ...a, ref: l }, r);
}), { defaultProps: { isLink: !1 } }), Tx = P.label(({ theme: e }) => ({ display: "flex", borderBottom: `1px solid ${e.appBorderColor}`, margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } })), Fx = P.span(({ theme: e }) => ({ minWidth: 100, fontWeight: e.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" })), Qm = ({ label: e, children: r, ...a }) => u.createElement(Tx, { ...a }, e ? u.createElement(Fx, null, u.createElement("span", null, e)) : null, r);
Qm.defaultProps = { label: void 0 };
var i2 = function(e, r) {
  if (typeof e == "function") {
    e(r);
    return;
  }
  e.current = r;
}, Rx = function(e, r) {
  var a = D.useRef();
  return D.useCallback(function(l) {
    e.current = l, a.current && i2(a.current, null), a.current = r, r && i2(r, l);
  }, [r]);
}, Lx = Rx, Dx = function() {
}, Mx = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], $x = function(e, r) {
  e.cacheMeasurements, e.maxRows, e.minRows;
  var a = e.onChange, l = a === void 0 ? Dx : a;
  e.onHeightChange;
  var i = B0(e, Mx);
  i.value;
  var c = D.useRef(null), d = Lx(c, r);
  return D.useRef(0), D.useRef(), D.createElement("textarea", _t({}, i, { onChange: l, ref: d }));
}, Bx = D.forwardRef($x), Ix = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, ad = ({ theme: e }) => ({ ...Ix, transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: e.input.color || "inherit", background: e.input.background, boxShadow: `${e.input.border} 0 0 0 1px inset`, borderRadius: e.input.borderRadius, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", boxSizing: "border-box", height: 32, '&[type="file"]': { height: "auto" }, "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` }, "&::placeholder": { color: e.textMutedColor, opacity: 1 } }), cu = ({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, Jm = ({ align: e }) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, du = ({ valid: e, theme: r }) => {
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
}, Px = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, i) {
  return u.createElement("input", { ...l, ref: i });
}))(ad, cu, Jm, du, { minHeight: 32 }), { displayName: "Input" }), Nx = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, i) {
  return u.createElement("select", { ...l, ref: i });
}))(ad, cu, du, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" }), jx = Object.assign(P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, i) {
  return u.createElement(Bx, { ...l, ref: i });
}))(ad, cu, Jm, du, ({ height: e = 400 }) => ({ overflow: "visible", maxHeight: e })), { displayName: "Textarea" }), Hx = P(D.forwardRef(function({ size: e, valid: r, align: a, ...l }, i) {
  return u.createElement(Xm, { ...l, ref: i });
}))(cu, du, { userSelect: "none", overflow: "visible", zIndex: 2, "&:hover": { transform: "none" } }), Zx = Object.assign(D.forwardRef(function(e, r) {
  return u.createElement(Hx, { ...e, tertiary: !0, small: !0, inForm: !0, ref: r });
}), { displayName: "Button" }), gr = Object.assign(P.form({ boxSizing: "border-box", width: "100%" }), { Field: Qm, Input: Px, Select: Nx, Textarea: jx, Button: Zx }), zx = D.lazy(() => import("./WithTooltip-YBG737T3-ca3cbe01.mjs").then((e) => ({ default: e.WithTooltip }))), Vx = (e) => u.createElement(D.Suspense, { fallback: u.createElement("div", null) }, u.createElement(zx, { ...e })), Ux = D.lazy(() => import("./WithTooltip-YBG737T3-ca3cbe01.mjs").then((e) => ({ default: e.WithTooltipPure }))), eg = (e) => u.createElement(D.Suspense, { fallback: u.createElement("div", null) }, u.createElement(Ux, { ...e }));
P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold }));
P.span();
P.div(({ theme: e }) => ({ marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: e.typography.weight.bold } }));
P.div(({ theme: e }) => ({ color: e.color.defaultText, lineHeight: "18px" }));
P.div({ padding: 15, width: 280, boxSizing: "border-box" });
var qx = P.div(({ theme: e }) => ({ padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: e.typography.weight.bold, color: e.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)", margin: 6 })), Wx = ({ note: e, ...r }) => u.createElement(qx, { ...r }, e), Gx = P(({ active: e, loading: r, disabled: a, ...l }) => u.createElement("span", { ...l }))(({ theme: e }) => ({ color: e.color.defaultText, fontWeight: e.typography.weight.regular }), ({ active: e, theme: r }) => e ? { color: r.color.secondary, fontWeight: r.typography.weight.bold } : {}, ({ loading: e, theme: r }) => e ? { display: "inline-block", flex: "none", ...r.animation.inlineGlow } : {}, ({ disabled: e, theme: r }) => e ? { color: Ot(0.7, r.color.defaultText) } : {}), Kx = P.span({ display: "flex", "& svg": { height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }), Yx = P.span({ flex: 1, textAlign: "left", display: "flex", flexDirection: "column" }, ({ isIndented: e }) => e ? { marginLeft: 24 } : {}), Xx = P.span(({ theme: e }) => ({ fontSize: "11px", lineHeight: "14px" }), ({ active: e, theme: r }) => e ? { color: r.color.secondary } : {}, ({ theme: e, disabled: r }) => r ? { color: e.textMutedColor } : {}), u2 = P.span(({ active: e, theme: r }) => e ? { "& svg": { opacity: 1 }, "& svg path": { fill: r.color.secondary } } : {}, () => ({ display: "flex", maxWidth: 14 })), Qx = P.a(({ theme: e }) => ({ fontSize: e.typography.size.s1, transition: "all 150ms ease-out", color: e.color.dark, textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 10px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: e.background.hoverable }, "&:hover svg": { opacity: 1 } }), ({ disabled: e }) => e ? { cursor: "not-allowed" } : {}), Jx = ra(100)((e, r, a) => {
  let l = {};
  return e && Object.assign(l, { onClick: e }), r && Object.assign(l, { href: r }), a && r && Object.assign(l, { to: r, as: a }), l;
}), tg = ({ loading: e, left: r, title: a, center: l, right: i, icon: c, active: d, disabled: m, isIndented: p, href: h, onClick: y, LinkWrapper: w, ...x }) => {
  let v = Jx(y, h, w), E = { active: d, disabled: m }, b = typeof c == "string" && el[c];
  return u.createElement(Qx, { ...E, ...x, ...v }, c ? u.createElement(u2, { ...E }, b ? u.createElement(Lt, { icon: c }) : c) : r && u.createElement(u2, { ...E }, r), a || l ? u.createElement(Yx, { isIndented: !r && !c && p }, a && u.createElement(Gx, { ...E, loading: e }, a), l && u.createElement(Xx, { ...E }, l)) : null, i && u.createElement(Kx, { ...E }, i));
};
tg.defaultProps = { loading: !1, left: null, title: u.createElement("span", null, "Loading state"), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null };
var od = tg, e8 = P.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 15.5 * 32 }, ({ theme: e }) => ({ borderRadius: e.appBorderRadius })), t8 = (e) => {
  let { LinkWrapper: r, onClick: a, id: l, isIndented: i, ...c } = e, { title: d, href: m, active: p } = c, h = D.useCallback((w) => {
    a(w, c);
  }, [a]), y = !!a;
  return u.createElement(od, { title: d, active: p, href: m, id: `list-item-${l}`, LinkWrapper: r, isIndented: i, ...c, ...y ? { onClick: h } : {} });
}, ld = ({ links: e, LinkWrapper: r }) => {
  let a = e.some((l) => l.left || l.icon);
  return u.createElement(e8, null, e.map(({ isGatsby: l, ...i }) => u.createElement(t8, { key: i.id, LinkWrapper: l ? r : null, isIndented: a, ...i })));
};
ld.defaultProps = { LinkWrapper: od.defaultProps.LinkWrapper };
var id = u.forwardRef(({ children: e, ...r }, a) => r.href != null ? u.createElement("a", { ref: a, ...r }, e) : u.createElement("button", { ref: a, type: "button", ...r }, e));
id.displayName = "ButtonOrLink";
var cl = P(id, { shouldForwardProp: _0 })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, ({ theme: e }) => ({ padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: e.color.secondary } }), ({ active: e, textColor: r, theme: a }) => e ? { color: r || a.barSelectedColor, borderBottomColor: a.barSelectedColor } : { color: r || a.barTextColor, borderBottomColor: "transparent" });
cl.displayName = "TabButton";
var Jn = P(id, { shouldForwardProp: _0 })(() => ({ alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } }), ({ active: e, theme: r }) => e ? { backgroundColor: r.background.hoverable, color: r.color.secondary } : {}, ({ disabled: e, theme: r }) => e ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: Ot(0.88, r.color.secondary), color: r.color.secondary }, "&:focus-visible": { outline: iu }, "&:focus:not(:focus-visible)": { outline: "none" } });
Jn.displayName = "IconButton";
var r8 = P.div(({ theme: e }) => ({ width: 14, height: 14, backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), n8 = P.div(() => ({ marginTop: 6, padding: 7, height: 28 })), rg = () => u.createElement(n8, null, u.createElement(r8, null)), i0 = P.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", marginLeft: 3, marginRight: 3 }, ({ scrollable: e }) => e ? { flexShrink: 0 } : {}, ({ left: e }) => e ? { "& > *": { marginLeft: 4 } } : {}, ({ right: e }) => e ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {});
i0.displayName = "Side";
var a8 = ({ children: e, className: r, scrollable: a }) => a ? u.createElement(lu, { vertical: !1, className: r }, e) : u.createElement("div", { className: r }, e), ud = P(a8)(({ theme: e, scrollable: r = !0 }) => ({ color: e.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: r ? "auto" : "hidden", overflowY: "hidden" }), ({ theme: e, border: r = !1 }) => r ? { boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`, background: e.barBg } : {});
ud.displayName = "Bar";
var o8 = P.div(({ bgColor: e }) => ({ display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: e || "" })), pu = ({ children: e, backgroundColor: r, ...a }) => {
  let [l, i] = D.Children.toArray(e);
  return u.createElement(ud, { ...a }, u.createElement(o8, { bgColor: r }, u.createElement(i0, { scrollable: a.scrollable, left: !0 }, l), i ? u.createElement(i0, { right: !0 }, i) : null));
};
pu.displayName = "FlexBar";
var l8 = P.div(({ active: e }) => e ? { display: "block" } : { display: "none" }), s2 = (e) => D.Children.toArray(e).map(({ props: { title: r, id: a, color: l, children: i } }) => {
  let c = Array.isArray(i) ? i[0] : i;
  return { title: r, id: a, ...l ? { color: l } : {}, render: typeof c == "function" ? c : ({ active: d, key: m }) => u.createElement(l8, { key: m, active: d, role: "tabpanel" }, c) };
}), i8 = P.span(({ theme: e, isActive: r }) => ({ display: "inline-block", width: 0, height: 0, marginLeft: 8, color: r ? e.color.secondary : e.color.mediumdark, borderRight: "3px solid transparent", borderLeft: "3px solid transparent", borderTop: "3px solid", transition: "transform .1s ease-out" })), u8 = P(cl)(({ active: e, theme: r, preActive: a }) => `
    color: ${a || e ? r.color.secondary : r.color.mediumdark};
    &:hover {
      color: ${r.color.secondary};
      .addon-collapsible-icon {
        color: ${r.color.secondary};
      }
    }
  `);
function s8(e) {
  let r = D.useRef(), a = D.useRef(), l = D.useRef(/* @__PURE__ */ new Map()), { width: i = 1 } = km({ ref: r }), [c, d] = D.useState(e), [m, p] = D.useState([]), h = D.useRef(e), y = D.useCallback(({ menuName: x, actions: v }) => {
    let E = m.some(({ active: A }) => A), [b, C] = D.useState(!1);
    return u.createElement(u.Fragment, null, u.createElement(A6, { interactive: !0, visible: b, onVisibleChange: C, placement: "bottom", delayHide: 100, tooltip: u.createElement(ld, { links: m.map(({ title: A, id: T, color: k, active: _ }) => ({ id: T, title: A, color: k, active: _, onClick: (O) => {
      O.preventDefault(), v.onSelect(T);
    } })) }) }, u.createElement(u8, { ref: a, active: E, preActive: b, style: { visibility: m.length ? "visible" : "hidden" }, "aria-hidden": !m.length, className: "tabbutton", type: "button", role: "tab" }, x, u.createElement(i8, { className: "addon-collapsible-icon", isActive: E || b }))), m.map(({ title: A, id: T, color: k }, _) => {
      let O = `index-${_}`;
      return u.createElement(cl, { id: `tabbutton-${y5(T) ?? O}`, style: { visibility: "hidden" }, "aria-hidden": !0, tabIndex: -1, ref: (L) => {
        l.current.set(T, L);
      }, className: "tabbutton", type: "button", key: T, textColor: k, role: "tab" }, A);
    }));
  }, [m]), w = D.useCallback(() => {
    if (!r.current || !a.current)
      return;
    let { x, width: v } = r.current.getBoundingClientRect(), { width: E } = a.current.getBoundingClientRect(), b = m.length ? x + v - E : x + v, C = [], A = 0, T = e.filter((k) => {
      let { id: _ } = k, O = l.current.get(_), { width: L = 0 } = O?.getBoundingClientRect() || {}, $ = x + A + L > b;
      return (!$ || !O) && C.push(k), A += L, $;
    });
    (C.length !== c.length || h.current !== e) && (d(C), p(T), h.current = e);
  }, [m.length, e, c]);
  return D.useLayoutEffect(w, [w, i]), { tabRefs: l, addonsRef: a, tabBarRef: r, visibleList: c, invisibleList: m, AddonTab: y };
}
var c8 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", d8 = P.div(({ theme: e, bordered: r }) => r ? { backgroundClip: "padding-box", border: `1px solid ${e.appBorderColor}`, borderRadius: e.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {}, ({ absolute: e }) => e ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" }), sd = P.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 }, whiteSpace: "nowrap", flexGrow: 1 });
sd.displayName = "TabBar";
var p8 = P.div({ display: "block", position: "relative" }, ({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, background: e.background.content }), ({ bordered: e, theme: r }) => e ? { borderRadius: `0 0 ${r.appBorderRadius - 1}px ${r.appBorderRadius - 1}px` } : {}, ({ absolute: e, bordered: r }) => e ? { height: `calc(100% - ${r ? 42 : 40}px)`, position: "absolute", left: 0 + (r ? 1 : 0), right: 0 + (r ? 1 : 0), bottom: 0 + (r ? 1 : 0), top: 40 + (r ? 1 : 0), overflow: "auto", [`& > *:first-child${c8}`]: { position: "absolute", left: 0 + (r ? 1 : 0), right: 0 + (r ? 1 : 0), bottom: 0 + (r ? 1 : 0), top: 0 + (r ? 1 : 0), height: `calc(100% - ${r ? 2 : 0}px)`, overflow: "auto" } } : {}), fu = D.memo(({ children: e, selected: r, actions: a, absolute: l, bordered: i, tools: c, backgroundColor: d, id: m, menuName: p }) => {
  let h = s2(e).map((b) => b.id), y = D.useMemo(() => s2(e).map((b, C) => ({ ...b, active: r ? b.id === r : C === 0 })), [r, ...h]), { visibleList: w, tabBarRef: x, tabRefs: v, AddonTab: E } = s8(y);
  return y.length ? u.createElement(d8, { absolute: l, bordered: i, id: m }, u.createElement(pu, { scrollable: !1, border: !0, backgroundColor: d }, u.createElement(sd, { style: { whiteSpace: "normal" }, ref: x, role: "tablist" }, w.map(({ title: b, id: C, active: A, color: T }, k) => {
    let _ = `index-${k}`;
    return u.createElement(cl, { id: `tabbutton-${y5(C) ?? _}`, ref: (O) => {
      v.current.set(C, O);
    }, className: `tabbutton ${A ? "tabbutton-active" : ""}`, type: "button", key: C, active: A, textColor: T, onClick: (O) => {
      O.preventDefault(), a.onSelect(C);
    }, role: "tab" }, typeof b == "function" ? u.createElement("title", null) : b);
  }), u.createElement(E, { menuName: p, actions: a })), c), u.createElement(p8, { id: "panel-tab-content", bordered: i, absolute: l }, y.map(({ id: b, active: C, render: A }) => u.createElement(A, { key: b, active: C }, null)))) : u.createElement(Wm, null, u.createElement(D.Fragment, { key: "title" }, "Nothing found"));
});
fu.displayName = "Tabs";
fu.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1, menuName: "Tabs" };
var al;
al = class extends D.Component {
  constructor(r) {
    super(r), this.handlers = { onSelect: (a) => this.setState({ selected: a }) }, this.state = { selected: r.initial };
  }
  render() {
    let { bordered: r = !1, absolute: a = !1, children: l, backgroundColor: i, menuName: c } = this.props, { selected: d } = this.state;
    return u.createElement(fu, { bordered: r, absolute: a, selected: d, backgroundColor: i, menuName: c, actions: this.handlers }, l);
  }
}, al.defaultProps = { children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: "", menuName: void 0 };
var ng = P.span(({ theme: e }) => ({ width: 1, height: 20, background: e.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 }), ({ force: e }) => e ? {} : { "& + &": { display: "none" } });
ng.displayName = "Separator";
var f8 = Va`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, m8 = P.div(({ size: e = 32 }) => ({ borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(e / 2), marginLeft: -(e / 2), height: e, width: e, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: `${f8} 0.7s linear infinite`, mixBlendMode: "difference" })), c2 = P.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }), g8 = P.div(({ theme: e }) => ({ position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: Ot(0.8, e.color.secondary), overflow: "hidden", cursor: "progress" })), h8 = P.div(({ theme: e }) => ({ position: "absolute", top: 0, left: 0, height: "100%", background: e.color.secondary })), d2 = P.div(({ theme: e }) => ({ minHeight: "2em", fontSize: `${e.typography.size.s1}px`, color: e.barTextColor })), y8 = P(Lt)(({ theme: e }) => ({ width: 20, height: 20, marginBottom: "0.5rem", color: e.textMutedColor })), v8 = Va`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, b8 = P.span({ "&::after": { content: "'...'", animation: `${v8} 1s linear infinite`, animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } }), ag = ({ progress: e, error: r, size: a, ...l }) => {
  if (r)
    return u.createElement(c2, { "aria-label": r.toString(), "aria-live": "polite", role: "status", ...l }, u.createElement(y8, { icon: "lightningoff" }), u.createElement(d2, null, r.message));
  if (e) {
    let { value: i, modules: c } = e, { message: d } = e;
    return c && (d += ` ${c.complete} / ${c.total} modules`), u.createElement(c2, { "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": i * 100, "aria-valuetext": d, role: "progressbar", ...l }, u.createElement(g8, null, u.createElement(h8, { style: { width: `${i * 100}%` } })), u.createElement(d2, null, d, i < 1 && u.createElement(b8, { key: d })));
  }
  return u.createElement(m8, { "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size: a, ...l });
};
function E8(e) {
  let r = {}, a = e.split("&");
  for (let l = 0; l < a.length; l++) {
    let i = a[l].split("=");
    r[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "");
  }
  return r;
}
var og = (e, r, a = {}) => {
  let [l, i] = e.split("?"), c = i ? { ...E8(i), ...a, id: r } : { ...a, id: r };
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
  font-family: ${Fr.fonts.mono};
  font-size: ${Fr.size.s2 - 1}px;
`;
var lg = Um;
Object.keys(Um).forEach((e) => {
  D.forwardRef((r, a) => D.createElement(e, { ...r, ref: a }));
});
const x8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: _m,
  ActionBar: Z0,
  Bar: ud,
  Blockquote: Om,
  Button: Xm,
  Code: ed,
  DL: Fm,
  Div: Tm,
  ErrorFormatter: Km,
  FlexBar: pu,
  Form: gr,
  H1: Rm,
  H2: td,
  H3: rd,
  H4: Lm,
  H5: Dm,
  H6: Mm,
  HR: $m,
  IconButton: Jn,
  IconButtonSkeleton: rg,
  Icons: Lt,
  Img: Bm,
  LI: Im,
  Link: qi,
  ListItem: od,
  Loader: ag,
  OL: Pm,
  P: Nm,
  Placeholder: Wm,
  Pre: jm,
  ResetWrapper: nd,
  ScrollArea: lu,
  Separator: ng,
  Span: Hm,
  SyntaxHighlighter: su,
  TT: zm,
  TabBar: sd,
  TabButton: cl,
  Table: Zm,
  Tabs: fu,
  TooltipLinkList: ld,
  TooltipNote: Wx,
  UL: Vm,
  WithTooltip: Vx,
  WithTooltipPure: eg,
  Zoom: Gm,
  codeCommon: Xr,
  components: lg,
  createCopyToClipboardFunction: lm,
  getStoryHref: og,
  icons: el,
  nameSpaceClassNames: Ie,
  withReset: He
}, Symbol.toStringTag, { value: "Module" }));
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function w8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tl(e, r) {
  return tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, i) {
    return l.__proto__ = i, l;
  }, tl(e, r);
}
function S8(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, tl(e, r);
}
function u0(e) {
  return u0 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
    return a.__proto__ || Object.getPrototypeOf(a);
  }, u0(e);
}
function A8(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function C8() {
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
function Bi(e, r, a) {
  return C8() ? Bi = Reflect.construct.bind() : Bi = function(i, c, d) {
    var m = [null];
    m.push.apply(m, c);
    var p = Function.bind.apply(i, m), h = new p();
    return d && tl(h, d.prototype), h;
  }, Bi.apply(null, arguments);
}
function s0(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return s0 = function(l) {
    if (l === null || !A8(l))
      return l;
    if (typeof l != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(l))
        return r.get(l);
      r.set(l, i);
    }
    function i() {
      return Bi(l, arguments, u0(this).constructor);
    }
    return i.prototype = Object.create(l.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), tl(i, l);
  }, s0(e);
}
var Lr = /* @__PURE__ */ function(e) {
  S8(r, e);
  function r(a) {
    var l;
    return l = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + a + " for more information.") || this, w8(l);
  }
  return r;
}(/* @__PURE__ */ s0(Error));
function Cc(e) {
  return Math.round(e * 255);
}
function k8(e, r, a) {
  return Cc(e) + "," + Cc(r) + "," + Cc(a);
}
function rl(e, r, a, l) {
  if (l === void 0 && (l = k8), r === 0)
    return l(a, a, a);
  var i = (e % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * a - 1)) * r, d = c * (1 - Math.abs(i % 2 - 1)), m = 0, p = 0, h = 0;
  i >= 0 && i < 1 ? (m = c, p = d) : i >= 1 && i < 2 ? (m = d, p = c) : i >= 2 && i < 3 ? (p = c, h = d) : i >= 3 && i < 4 ? (p = d, h = c) : i >= 4 && i < 5 ? (m = d, h = c) : i >= 5 && i < 6 && (m = c, h = d);
  var y = a - c / 2, w = m + y, x = p + y, v = h + y;
  return l(w, x, v);
}
var p2 = {
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
function _8(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return p2[r] ? "#" + p2[r] : e;
}
var O8 = /^#[a-fA-F0-9]{6}$/, T8 = /^#[a-fA-F0-9]{8}$/, F8 = /^#[a-fA-F0-9]{3}$/, R8 = /^#[a-fA-F0-9]{4}$/, kc = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, L8 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, D8 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, M8 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function mu(e) {
  if (typeof e != "string")
    throw new Lr(3);
  var r = _8(e);
  if (r.match(O8))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(T8)) {
    var a = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: a
    };
  }
  if (r.match(F8))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(R8)) {
    var l = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: l
    };
  }
  var i = kc.exec(r);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10)
    };
  var c = L8.exec(r.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var d = D8.exec(r);
  if (d) {
    var m = parseInt("" + d[1], 10), p = parseInt("" + d[2], 10) / 100, h = parseInt("" + d[3], 10) / 100, y = "rgb(" + rl(m, p, h) + ")", w = kc.exec(y);
    if (!w)
      throw new Lr(4, r, y);
    return {
      red: parseInt("" + w[1], 10),
      green: parseInt("" + w[2], 10),
      blue: parseInt("" + w[3], 10)
    };
  }
  var x = M8.exec(r.substring(0, 50));
  if (x) {
    var v = parseInt("" + x[1], 10), E = parseInt("" + x[2], 10) / 100, b = parseInt("" + x[3], 10) / 100, C = "rgb(" + rl(v, E, b) + ")", A = kc.exec(C);
    if (!A)
      throw new Lr(4, r, C);
    return {
      red: parseInt("" + A[1], 10),
      green: parseInt("" + A[2], 10),
      blue: parseInt("" + A[3], 10),
      alpha: parseFloat("" + x[4]) > 1 ? parseFloat("" + x[4]) / 100 : parseFloat("" + x[4])
    };
  }
  throw new Lr(5);
}
function $8(e) {
  var r = e.red / 255, a = e.green / 255, l = e.blue / 255, i = Math.max(r, a, l), c = Math.min(r, a, l), d = (i + c) / 2;
  if (i === c)
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
  var m, p = i - c, h = d > 0.5 ? p / (2 - i - c) : p / (i + c);
  switch (i) {
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
function ig(e) {
  return $8(mu(e));
}
var B8 = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, c0 = B8;
function Gn(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function _c(e) {
  return Gn(Math.round(e * 255));
}
function I8(e, r, a) {
  return c0("#" + _c(e) + _c(r) + _c(a));
}
function Wi(e, r, a) {
  return rl(e, r, a, I8);
}
function P8(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return Wi(e, r, a);
  if (typeof e == "object" && r === void 0 && a === void 0)
    return Wi(e.hue, e.saturation, e.lightness);
  throw new Lr(1);
}
function N8(e, r, a, l) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
    return l >= 1 ? Wi(e, r, a) : "rgba(" + rl(e, r, a) + "," + l + ")";
  if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
    return e.alpha >= 1 ? Wi(e.hue, e.saturation, e.lightness) : "rgba(" + rl(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Lr(2);
}
function d0(e, r, a) {
  if (typeof e == "number" && typeof r == "number" && typeof a == "number")
    return c0("#" + Gn(e) + Gn(r) + Gn(a));
  if (typeof e == "object" && r === void 0 && a === void 0)
    return c0("#" + Gn(e.red) + Gn(e.green) + Gn(e.blue));
  throw new Lr(6);
}
function Kr(e, r, a, l) {
  if (typeof e == "string" && typeof r == "number") {
    var i = mu(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof a == "number" && typeof l == "number")
      return l >= 1 ? d0(e, r, a) : "rgba(" + e + "," + r + "," + a + "," + l + ")";
    if (typeof e == "object" && r === void 0 && a === void 0 && l === void 0)
      return e.alpha >= 1 ? d0(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Lr(7);
}
var j8 = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, H8 = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, Z8 = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, z8 = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function ug(e) {
  if (typeof e != "object")
    throw new Lr(8);
  if (H8(e))
    return Kr(e);
  if (j8(e))
    return d0(e);
  if (z8(e))
    return N8(e);
  if (Z8(e))
    return P8(e);
  throw new Lr(8);
}
function sg(e, r, a) {
  return function() {
    var i = a.concat(Array.prototype.slice.call(arguments));
    return i.length >= r ? e.apply(this, i) : sg(e, r, i);
  };
}
function gu(e) {
  return sg(e, e.length, []);
}
function hu(e, r, a) {
  return Math.max(e, Math.min(r, a));
}
function V8(e, r) {
  if (r === "transparent")
    return r;
  var a = ig(r);
  return ug(Ha({}, a, {
    lightness: hu(0, 1, a.lightness - parseFloat(e))
  }));
}
var U8 = /* @__PURE__ */ gu(V8), Cr = U8;
function q8(e, r) {
  if (r === "transparent")
    return r;
  var a = ig(r);
  return ug(Ha({}, a, {
    lightness: hu(0, 1, a.lightness + parseFloat(e))
  }));
}
var W8 = /* @__PURE__ */ gu(q8), Kn = W8;
function G8(e, r) {
  if (r === "transparent")
    return r;
  var a = mu(r), l = typeof a.alpha == "number" ? a.alpha : 1, i = Ha({}, a, {
    alpha: hu(0, 1, (l * 100 + parseFloat(e) * 100) / 100)
  });
  return Kr(i);
}
var K8 = /* @__PURE__ */ gu(G8), Ai = K8;
function Y8(e, r) {
  if (r === "transparent")
    return r;
  var a = mu(r), l = typeof a.alpha == "number" ? a.alpha : 1, i = Ha({}, a, {
    alpha: hu(0, 1, +(l * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return Kr(i);
}
var X8 = /* @__PURE__ */ gu(Y8), je = X8;
function Q8(e, r) {
  for (var a = -1, l = r.length, i = e.length; ++a < l; )
    e[i + a] = r[a];
  return e;
}
var cg = Q8, J8 = cg, ew = Tn;
function tw(e, r, a) {
  var l = r(e);
  return ew(e) ? l : J8(l, a(e));
}
var dg = tw;
function rw(e, r) {
  for (var a = -1, l = e == null ? 0 : e.length, i = 0, c = []; ++a < l; ) {
    var d = e[a];
    r(d, a, e) && (c[i++] = d);
  }
  return c;
}
var nw = rw;
function aw() {
  return [];
}
var pg = aw, ow = nw, lw = pg, iw = Object.prototype, uw = iw.propertyIsEnumerable, f2 = Object.getOwnPropertySymbols, sw = f2 ? function(e) {
  return e == null ? [] : (e = Object(e), ow(f2(e), function(r) {
    return uw.call(e, r);
  }));
} : lw, cd = sw;
function cw(e, r) {
  for (var a = -1, l = Array(e); ++a < e; )
    l[a] = r(a);
  return l;
}
var dw = cw, pw = 9007199254740991, fw = /^(?:0|[1-9]\d*)$/;
function mw(e, r) {
  var a = typeof e;
  return r = r ?? pw, !!r && (a == "number" || a != "symbol" && fw.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var dd = mw, gw = dw, hw = c5, yw = Tn, vw = w0, bw = dd, Ew = d5, xw = Object.prototype, ww = xw.hasOwnProperty;
function Sw(e, r) {
  var a = yw(e), l = !a && hw(e), i = !a && !l && vw(e), c = !a && !l && !i && Ew(e), d = a || l || i || c, m = d ? gw(e.length, String) : [], p = m.length;
  for (var h in e)
    (r || ww.call(e, h)) && !(d && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    bw(h, p))) && m.push(h);
  return m;
}
var fg = Sw, Aw = Object.prototype;
function Cw(e) {
  var r = e && e.constructor, a = typeof r == "function" && r.prototype || Aw;
  return e === a;
}
var pd = Cw;
function kw(e, r) {
  return function(a) {
    return e(r(a));
  };
}
var mg = kw, _w = mg, Ow = _w(Object.keys, Object), Tw = Ow, Fw = pd, Rw = Tw, Lw = Object.prototype, Dw = Lw.hasOwnProperty;
function Mw(e) {
  if (!Fw(e))
    return Rw(e);
  var r = [];
  for (var a in Object(e))
    Dw.call(e, a) && a != "constructor" && r.push(a);
  return r;
}
var $w = Mw, Bw = wv, Iw = p5;
function Pw(e) {
  return e != null && Iw(e.length) && !Bw(e);
}
var gg = Pw, Nw = fg, jw = $w, Hw = gg;
function Zw(e) {
  return Hw(e) ? Nw(e) : jw(e);
}
var yu = Zw, zw = dg, Vw = cd, Uw = yu;
function qw(e) {
  return zw(e, Uw, Vw);
}
var hg = qw, m2 = hg, Ww = 1, Gw = Object.prototype, Kw = Gw.hasOwnProperty;
function Yw(e, r, a, l, i, c) {
  var d = a & Ww, m = m2(e), p = m.length, h = m2(r), y = h.length;
  if (p != y && !d)
    return !1;
  for (var w = p; w--; ) {
    var x = m[w];
    if (!(d ? x in r : Kw.call(r, x)))
      return !1;
  }
  var v = c.get(e), E = c.get(r);
  if (v && E)
    return v == r && E == e;
  var b = !0;
  c.set(e, r), c.set(r, e);
  for (var C = d; ++w < p; ) {
    x = m[w];
    var A = e[x], T = r[x];
    if (l)
      var k = d ? l(T, A, x, r, e, c) : l(A, T, x, e, r, c);
    if (!(k === void 0 ? A === T || i(A, T, a, l, c) : k)) {
      b = !1;
      break;
    }
    C || (C = x == "constructor");
  }
  if (b && !C) {
    var _ = e.constructor, O = r.constructor;
    _ != O && "constructor" in e && "constructor" in r && !(typeof _ == "function" && _ instanceof _ && typeof O == "function" && O instanceof O) && (b = !1);
  }
  return c.delete(e), c.delete(r), b;
}
var Xw = Yw, Oc = S0, Qw = Sv, Jw = Av, eS = Xw, g2 = Ki, h2 = Tn, y2 = w0, tS = d5, rS = 1, v2 = "[object Arguments]", b2 = "[object Array]", Ci = "[object Object]", nS = Object.prototype, E2 = nS.hasOwnProperty;
function aS(e, r, a, l, i, c) {
  var d = h2(e), m = h2(r), p = d ? b2 : g2(e), h = m ? b2 : g2(r);
  p = p == v2 ? Ci : p, h = h == v2 ? Ci : h;
  var y = p == Ci, w = h == Ci, x = p == h;
  if (x && y2(e)) {
    if (!y2(r))
      return !1;
    d = !0, y = !1;
  }
  if (x && !y)
    return c || (c = new Oc()), d || tS(e) ? Qw(e, r, a, l, i, c) : Jw(e, r, p, a, l, i, c);
  if (!(a & rS)) {
    var v = y && E2.call(e, "__wrapped__"), E = w && E2.call(r, "__wrapped__");
    if (v || E) {
      var b = v ? e.value() : e, C = E ? r.value() : r;
      return c || (c = new Oc()), i(b, C, a, l, c);
    }
  }
  return x ? (c || (c = new Oc()), eS(e, r, a, l, i, c)) : !1;
}
var oS = aS, lS = oS, x2 = A0;
function yg(e, r, a, l, i) {
  return e === r ? !0 : e == null || r == null || !x2(e) && !x2(r) ? e !== e && r !== r : lS(e, r, a, l, yg, i);
}
var vg = yg, iS = S0, uS = vg, sS = 1, cS = 2;
function dS(e, r, a, l) {
  var i = a.length, c = i, d = !l;
  if (e == null)
    return !c;
  for (e = Object(e); i--; ) {
    var m = a[i];
    if (d && m[2] ? m[1] !== e[m[0]] : !(m[0] in e))
      return !1;
  }
  for (; ++i < c; ) {
    m = a[i];
    var p = m[0], h = e[p], y = m[1];
    if (d && m[2]) {
      if (h === void 0 && !(p in e))
        return !1;
    } else {
      var w = new iS();
      if (l)
        var x = l(h, y, p, e, r, w);
      if (!(x === void 0 ? uS(y, h, sS | cS, l, w) : x))
        return !1;
    }
  }
  return !0;
}
var pS = dS, fS = ol;
function mS(e) {
  return e === e && !fS(e);
}
var bg = mS, gS = bg, hS = yu;
function yS(e) {
  for (var r = hS(e), a = r.length; a--; ) {
    var l = r[a], i = e[l];
    r[a] = [l, i, gS(i)];
  }
  return r;
}
var vS = yS;
function bS(e, r) {
  return function(a) {
    return a == null ? !1 : a[e] === r && (r !== void 0 || e in Object(a));
  };
}
var Eg = bS, ES = pS, xS = vS, wS = Eg;
function SS(e) {
  var r = xS(e);
  return r.length == 1 && r[0][2] ? wS(r[0][0], r[0][1]) : function(a) {
    return a === e || ES(a, e, r);
  };
}
var AS = SS, CS = Tn, kS = f5, _S = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, OS = /^\w*$/;
function TS(e, r) {
  if (CS(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || kS(e) ? !0 : OS.test(e) || !_S.test(e) || r != null && e in Object(r);
}
var fd = TS, FS = Cv;
function RS(e) {
  return e == null ? "" : FS(e);
}
var LS = RS, DS = Tn, MS = fd, $S = kv, BS = LS;
function IS(e, r) {
  return DS(e) ? e : MS(e, r) ? [e] : $S(BS(e));
}
var vu = IS, PS = f5, NS = 1 / 0;
function jS(e) {
  if (typeof e == "string" || PS(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -NS ? "-0" : r;
}
var dl = jS, HS = vu, ZS = dl;
function zS(e, r) {
  r = HS(r, e);
  for (var a = 0, l = r.length; e != null && a < l; )
    e = e[ZS(r[a++])];
  return a && a == l ? e : void 0;
}
var md = zS, VS = md;
function US(e, r, a) {
  var l = e == null ? void 0 : VS(e, r);
  return l === void 0 ? a : l;
}
var qS = US;
function WS(e, r) {
  return e != null && r in Object(e);
}
var GS = WS, KS = vu, YS = c5, XS = Tn, QS = dd, JS = p5, e9 = dl;
function t9(e, r, a) {
  r = KS(r, e);
  for (var l = -1, i = r.length, c = !1; ++l < i; ) {
    var d = e9(r[l]);
    if (!(c = e != null && a(e, d)))
      break;
    e = e[d];
  }
  return c || ++l != i ? c : (i = e == null ? 0 : e.length, !!i && JS(i) && QS(d, i) && (XS(e) || YS(e)));
}
var r9 = t9, n9 = GS, a9 = r9;
function o9(e, r) {
  return e != null && a9(e, r, n9);
}
var l9 = o9, i9 = vg, u9 = qS, s9 = l9, c9 = fd, d9 = bg, p9 = Eg, f9 = dl, m9 = 1, g9 = 2;
function h9(e, r) {
  return c9(e) && d9(r) ? p9(f9(e), r) : function(a) {
    var l = u9(a, e);
    return l === void 0 && l === r ? s9(a, e) : i9(r, l, m9 | g9);
  };
}
var y9 = h9;
function v9(e) {
  return e;
}
var b9 = v9;
function E9(e) {
  return function(r) {
    return r?.[e];
  };
}
var x9 = E9, w9 = md;
function S9(e) {
  return function(r) {
    return w9(r, e);
  };
}
var A9 = S9, C9 = x9, k9 = A9, _9 = fd, O9 = dl;
function T9(e) {
  return _9(e) ? C9(O9(e)) : k9(e);
}
var F9 = T9, R9 = AS, L9 = y9, D9 = b9, M9 = Tn, $9 = F9;
function B9(e) {
  return typeof e == "function" ? e : e == null ? D9 : typeof e == "object" ? M9(e) ? L9(e[0], e[1]) : R9(e) : $9(e);
}
var I9 = B9, w2 = _v;
function P9(e, r, a) {
  r == "__proto__" && w2 ? w2(e, r, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : e[r] = a;
}
var xg = P9, N9 = xg, j9 = Ov, H9 = Object.prototype, Z9 = H9.hasOwnProperty;
function z9(e, r, a) {
  var l = e[r];
  (!(Z9.call(e, r) && j9(l, a)) || a === void 0 && !(r in e)) && N9(e, r, a);
}
var gd = z9, V9 = gd, U9 = vu, q9 = dd, S2 = ol, W9 = dl;
function G9(e, r, a, l) {
  if (!S2(e))
    return e;
  r = U9(r, e);
  for (var i = -1, c = r.length, d = c - 1, m = e; m != null && ++i < c; ) {
    var p = W9(r[i]), h = a;
    if (p === "__proto__" || p === "constructor" || p === "prototype")
      return e;
    if (i != d) {
      var y = m[p];
      h = l ? l(y, p, m) : void 0, h === void 0 && (h = S2(y) ? y : q9(r[i + 1]) ? [] : {});
    }
    V9(m, p, h), m = m[p];
  }
  return e;
}
var K9 = G9, Y9 = md, X9 = K9, Q9 = vu;
function J9(e, r, a) {
  for (var l = -1, i = r.length, c = {}; ++l < i; ) {
    var d = r[l], m = Y9(e, d);
    a(m, d) && X9(c, Q9(d, e), m);
  }
  return c;
}
var eA = J9, tA = mg, rA = tA(Object.getPrototypeOf, Object), wg = rA, nA = cg, aA = wg, oA = cd, lA = pg, iA = Object.getOwnPropertySymbols, uA = iA ? function(e) {
  for (var r = []; e; )
    nA(r, oA(e)), e = aA(e);
  return r;
} : lA, Sg = uA;
function sA(e) {
  var r = [];
  if (e != null)
    for (var a in Object(e))
      r.push(a);
  return r;
}
var cA = sA, dA = ol, pA = pd, fA = cA, mA = Object.prototype, gA = mA.hasOwnProperty;
function hA(e) {
  if (!dA(e))
    return fA(e);
  var r = pA(e), a = [];
  for (var l in e)
    l == "constructor" && (r || !gA.call(e, l)) || a.push(l);
  return a;
}
var yA = hA, vA = fg, bA = yA, EA = gg;
function xA(e) {
  return EA(e) ? vA(e, !0) : bA(e);
}
var hd = xA, wA = dg, SA = Sg, AA = hd;
function CA(e) {
  return wA(e, AA, SA);
}
var Ag = CA, kA = Tv, _A = I9, OA = eA, TA = Ag;
function FA(e, r) {
  if (e == null)
    return {};
  var a = kA(TA(e), function(l) {
    return [l];
  });
  return r = _A(r), OA(e, a, function(l, i) {
    return r(l, i[0]);
  });
}
var RA = FA;
const LA = /* @__PURE__ */ ta(RA);
function Yn() {
  return Yn = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
const DA = ["children", "options"], A2 = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), { for: "htmlFor" }), C2 = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, MA = ["style", "script"], $A = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, BA = /mailto:/i, IA = /\n{2,}$/, Cg = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, PA = /^ *> ?/gm, NA = /^ {2,}\n/, jA = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, kg = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, _g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, HA = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, ZA = /^(?:\n *)*\n/, zA = /\r\n?/g, VA = /^\[\^([^\]]+)](:.*)\n/, UA = /^\[\^([^\]]+)]/, qA = /\f/g, WA = /^\s*?\[(x|\s)\]/, Og = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Tg = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, p0 = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, GA = /&([a-zA-Z]+);/g, Fg = /^<!--[\s\S]*?(?:-->)/, KA = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, f0 = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, YA = /^\{.*\}$/, XA = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, QA = /^<([^ >]+@[^ >]+)>/, JA = /^<([^ >]+:\/[^ >]+)>/, eC = /-([a-z])?/gi, Rg = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, tC = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, rC = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, nC = /^\[([^\]]*)\] ?\[([^\]]*)\]/, aC = /(\[|\])/g, oC = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, lC = /\t/g, iC = /^ *\| */, uC = /(^ *\||\| *$)/g, sC = / *$/, cC = /^ *:-+: *$/, dC = /^ *:-+ *$/, pC = /^ *-+: *$/, fC = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, mC = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, gC = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/, hC = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, yC = /^\\([^0-9A-Za-z\s])/, vC = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, bC = /^\n+/, EC = /^([ \t]*)/, xC = /\\([^\\])/g, k2 = / *\n+$/, wC = /(?:^|\n)( *)$/, yd = "(?:\\d+\\.)", vd = "(?:[*+-])";
function Lg(e) {
  return "( *)(" + (e === 1 ? yd : vd) + ") +";
}
const Dg = Lg(1), Mg = Lg(2);
function $g(e) {
  return new RegExp("^" + (e === 1 ? Dg : Mg));
}
const SC = $g(1), AC = $g(2);
function Bg(e) {
  return new RegExp("^" + (e === 1 ? Dg : Mg) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? yd : vd) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Ig = Bg(1), Pg = Bg(2);
function Ng(e) {
  const r = e === 1 ? yd : vd;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const jg = Ng(1), Hg = Ng(2);
function _2(e, r) {
  const a = r === 1, l = a ? jg : Hg, i = a ? Ig : Pg, c = a ? SC : AC;
  return { t(d, m, p) {
    const h = wC.exec(p);
    return h && (m.o || !m._ && !m.u) ? l.exec(d = h[1] + d) : null;
  }, i: Se.HIGH, l(d, m, p) {
    const h = a ? +d[2] : void 0, y = d[0].replace(IA, `
`).match(i);
    let w = !1;
    return { p: y.map(function(x, v) {
      const E = c.exec(x)[0].length, b = new RegExp("^ {1," + E + "}", "gm"), C = x.replace(b, "").replace(c, ""), A = v === y.length - 1, T = C.indexOf(`

`) !== -1 || A && w;
      w = T;
      const k = p._, _ = p.o;
      let O;
      p.o = !0, T ? (p._ = !1, O = C.replace(k2, `

`)) : (p._ = !0, O = C.replace(k2, ""));
      const L = m(O, p);
      return p._ = k, p.o = _, L;
    }), m: a, g: h };
  }, h: (d, m, p) => e(d.m ? "ol" : "ul", { key: p.k, start: d.g }, d.p.map(function(h, y) {
    return e("li", { key: y }, m(h, p));
  })) };
}
const CC = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, kC = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Zg = [Cg, kg, _g, Og, Tg, Fg, Rg, Ig, jg, Pg, Hg], _C = [...Zg, /^[^\n]+(?:  \n|\n{2,})/, p0, f0];
function OC(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function TC(e) {
  return pC.test(e) ? "right" : cC.test(e) ? "center" : dC.test(e) ? "left" : null;
}
function O2(e, r, a) {
  const l = a.v;
  a.v = !0;
  const i = r(e.trim(), a);
  a.v = l;
  let c = [[]];
  return i.forEach(function(d, m) {
    d.type === "tableSeparator" ? m !== 0 && m !== i.length - 1 && c.push([]) : (d.type !== "text" || i[m + 1] != null && i[m + 1].type !== "tableSeparator" || (d.$ = d.$.replace(sC, "")), c[c.length - 1].push(d));
  }), c;
}
function FC(e, r, a) {
  a._ = !0;
  const l = O2(e[1], r, a), i = e[2].replace(uC, "").split("|").map(TC), c = function(d, m, p) {
    return d.trim().split(`
`).map(function(h) {
      return O2(h, m, p);
    });
  }(e[3], r, a);
  return a._ = !1, { S: i, A: c, L: l, type: "table" };
}
function T2(e, r) {
  return e.S[r] == null ? {} : { textAlign: e.S[r] };
}
function wn(e) {
  return function(r, a) {
    return a._ ? e.exec(r) : null;
  };
}
function Sn(e) {
  return function(r, a) {
    return a._ || a.u ? e.exec(r) : null;
  };
}
function Wr(e) {
  return function(r, a) {
    return a._ || a.u ? null : e.exec(r);
  };
}
function Po(e) {
  return function(r) {
    return e.exec(r);
  };
}
function RC(e, r, a) {
  if (r._ || r.u || a && !a.endsWith(`
`))
    return null;
  let l = "";
  e.split(`
`).every((c) => !Zg.some((d) => d.test(c)) && (l += c + `
`, c.trim()));
  const i = l.trimEnd();
  return i == "" ? null : [l, i];
}
function Ta(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i))
      return null;
  } catch {
    return null;
  }
  return e;
}
function F2(e) {
  return e.replace(xC, "$1");
}
function Ii(e, r, a) {
  const l = a._ || !1, i = a.u || !1;
  a._ = !0, a.u = !0;
  const c = e(r, a);
  return a._ = l, a.u = i, c;
}
function LC(e, r, a) {
  const l = a._ || !1, i = a.u || !1;
  a._ = !1, a.u = !0;
  const c = e(r, a);
  return a._ = l, a.u = i, c;
}
function DC(e, r, a) {
  return a._ = !1, e(r + `

`, a);
}
const Tc = (e, r, a) => ({ $: Ii(r, e[1], a) });
function Fc() {
  return {};
}
function Rc() {
  return null;
}
function MC(...e) {
  return e.filter(Boolean).join(" ");
}
function Lc(e, r, a) {
  let l = e;
  const i = r.split(".");
  for (; i.length && (l = l[i[0]], l !== void 0); )
    i.shift();
  return l || a;
}
var Se;
function $C(e, r = {}) {
  r.overrides = r.overrides || {}, r.slugify = r.slugify || OC, r.namedCodesToUnicode = r.namedCodesToUnicode ? Yn({}, C2, r.namedCodesToUnicode) : C2;
  const a = r.createElement || D.createElement;
  function l(v, E, ...b) {
    const C = Lc(r.overrides, `${v}.props`, {});
    return a(function(A, T) {
      const k = Lc(T, A);
      return k ? typeof k == "function" || typeof k == "object" && "render" in k ? k : Lc(T, `${A}.component`, A) : A;
    }(v, r.overrides), Yn({}, E, C, { className: MC(E?.className, C.className) || void 0 }), ...b);
  }
  function i(v) {
    let E = !1;
    r.forceInline ? E = !0 : r.forceBlock || (E = oC.test(v) === !1);
    const b = y(h(E ? v : `${v.trimEnd().replace(bC, "")}

`, { _: E }));
    for (; typeof b[b.length - 1] == "string" && !b[b.length - 1].trim(); )
      b.pop();
    if (r.wrapper === null)
      return b;
    const C = r.wrapper || (E ? "span" : "div");
    let A;
    if (b.length > 1 || r.forceWrapper)
      A = b;
    else {
      if (b.length === 1)
        return A = b[0], typeof A == "string" ? l("span", { key: "outer" }, A) : A;
      A = null;
    }
    return D.createElement(C, { key: "outer" }, A);
  }
  function c(v) {
    const E = v.match($A);
    return E ? E.reduce(function(b, C, A) {
      const T = C.indexOf("=");
      if (T !== -1) {
        const k = function($) {
          return $.indexOf("-") !== -1 && $.match(KA) === null && ($ = $.replace(eC, function(M, j) {
            return j.toUpperCase();
          })), $;
        }(C.slice(0, T)).trim(), _ = function($) {
          const M = $[0];
          return (M === '"' || M === "'") && $.length >= 2 && $[$.length - 1] === M ? $.slice(1, -1) : $;
        }(C.slice(T + 1).trim()), O = A2[k] || k, L = b[O] = function($, M) {
          return $ === "style" ? M.split(/;\s?/).reduce(function(j, Z) {
            const V = Z.slice(0, Z.indexOf(":"));
            return j[V.replace(/(-[a-z])/g, (Q) => Q[1].toUpperCase())] = Z.slice(V.length + 1).trim(), j;
          }, {}) : $ === "href" ? Ta(M) : (M.match(YA) && (M = M.slice(1, M.length - 1)), M === "true" || M !== "false" && M);
        }(k, _);
        typeof L == "string" && (p0.test(L) || f0.test(L)) && (b[O] = D.cloneElement(i(L.trim()), { key: A }));
      } else
        C !== "style" && (b[A2[C] || C] = !0);
      return b;
    }, {}) : null;
  }
  const d = [], m = {}, p = { blockQuote: { t: Wr(Cg), i: Se.HIGH, l: (v, E, b) => ({ $: E(v[0].replace(PA, ""), b) }), h: (v, E, b) => l("blockquote", { key: b.k }, E(v.$, b)) }, breakLine: { t: Po(NA), i: Se.HIGH, l: Fc, h: (v, E, b) => l("br", { key: b.k }) }, breakThematic: { t: Wr(jA), i: Se.HIGH, l: Fc, h: (v, E, b) => l("hr", { key: b.k }) }, codeBlock: { t: Wr(_g), i: Se.MAX, l: (v) => ({ $: v[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), M: void 0 }), h: (v, E, b) => l("pre", { key: b.k }, l("code", Yn({}, v.I, { className: v.M ? `lang-${v.M}` : "" }), v.$)) }, codeFenced: { t: Wr(kg), i: Se.MAX, l: (v) => ({ I: c(v[3] || ""), $: v[4], M: v[2] || void 0, type: "codeBlock" }) }, codeInline: { t: Sn(HA), i: Se.LOW, l: (v) => ({ $: v[2] }), h: (v, E, b) => l("code", { key: b.k }, v.$) }, footnote: { t: Wr(VA), i: Se.MAX, l: (v) => (d.push({ O: v[2], B: v[1] }), {}), h: Rc }, footnoteReference: { t: wn(UA), i: Se.HIGH, l: (v) => ({ $: v[1], R: `#${r.slugify(v[1])}` }), h: (v, E, b) => l("a", { key: b.k, href: Ta(v.R) }, l("sup", { key: b.k }, v.$)) }, gfmTask: { t: wn(WA), i: Se.HIGH, l: (v) => ({ T: v[1].toLowerCase() === "x" }), h: (v, E, b) => l("input", { checked: v.T, key: b.k, readOnly: !0, type: "checkbox" }) }, heading: { t: Wr(Og), i: Se.HIGH, l: (v, E, b) => ({ $: Ii(E, v[2], b), j: r.slugify(v[2]), C: v[1].length }), h: (v, E, b) => l(`h${v.C}`, { id: v.j, key: b.k }, E(v.$, b)) }, headingSetext: { t: Wr(Tg), i: Se.MAX, l: (v, E, b) => ({ $: Ii(E, v[1], b), C: v[2] === "=" ? 1 : 2, type: "heading" }) }, htmlComment: { t: Po(Fg), i: Se.HIGH, l: () => ({}), h: Rc }, image: { t: Sn(kC), i: Se.HIGH, l: (v) => ({ D: v[1], R: F2(v[2]), N: v[3] }), h: (v, E, b) => l("img", { key: b.k, alt: v.D || void 0, title: v.N || void 0, src: Ta(v.R) }) }, link: { t: wn(CC), i: Se.LOW, l: (v, E, b) => ({ $: LC(E, v[1], b), R: F2(v[2]), N: v[3] }), h: (v, E, b) => l("a", { key: b.k, href: Ta(v.R), title: v.N }, E(v.$, b)) }, linkAngleBraceStyleDetector: { t: wn(JA), i: Se.MAX, l: (v) => ({ $: [{ $: v[1], type: "text" }], R: v[1], type: "link" }) }, linkBareUrlDetector: { t: (v, E) => E.Z ? null : wn(XA)(v, E), i: Se.MAX, l: (v) => ({ $: [{ $: v[1], type: "text" }], R: v[1], N: void 0, type: "link" }) }, linkMailtoDetector: { t: wn(QA), i: Se.MAX, l(v) {
    let E = v[1], b = v[1];
    return BA.test(b) || (b = "mailto:" + b), { $: [{ $: E.replace("mailto:", ""), type: "text" }], R: b, type: "link" };
  } }, orderedList: _2(l, 1), unorderedList: _2(l, 2), newlineCoalescer: { t: Wr(ZA), i: Se.LOW, l: Fc, h: () => `
` }, paragraph: { t: RC, i: Se.LOW, l: Tc, h: (v, E, b) => l("p", { key: b.k }, E(v.$, b)) }, ref: { t: wn(tC), i: Se.MAX, l: (v) => (m[v[1]] = { R: v[2], N: v[4] }, {}), h: Rc }, refImage: { t: Sn(rC), i: Se.MAX, l: (v) => ({ D: v[1] || void 0, F: v[2] }), h: (v, E, b) => l("img", { key: b.k, alt: v.D, src: Ta(m[v.F].R), title: m[v.F].N }) }, refLink: { t: wn(nC), i: Se.MAX, l: (v, E, b) => ({ $: E(v[1], b), P: E(v[0].replace(aC, "\\$1"), b), F: v[2] }), h: (v, E, b) => m[v.F] ? l("a", { key: b.k, href: Ta(m[v.F].R), title: m[v.F].N }, E(v.$, b)) : l("span", { key: b.k }, E(v.P, b)) }, table: { t: Wr(Rg), i: Se.HIGH, l: FC, h: (v, E, b) => l("table", { key: b.k }, l("thead", null, l("tr", null, v.L.map(function(C, A) {
    return l("th", { key: A, style: T2(v, A) }, E(C, b));
  }))), l("tbody", null, v.A.map(function(C, A) {
    return l("tr", { key: A }, C.map(function(T, k) {
      return l("td", { key: k, style: T2(v, k) }, E(T, b));
    }));
  }))) }, tableSeparator: { t: function(v, E) {
    return E.v ? iC.exec(v) : null;
  }, i: Se.HIGH, l: function() {
    return { type: "tableSeparator" };
  }, h: () => " | " }, text: { t: Po(vC), i: Se.MIN, l: (v) => ({ $: v[0].replace(GA, (E, b) => r.namedCodesToUnicode[b] ? r.namedCodesToUnicode[b] : E) }), h: (v) => v.$ }, textBolded: { t: Sn(fC), i: Se.MED, l: (v, E, b) => ({ $: E(v[2], b) }), h: (v, E, b) => l("strong", { key: b.k }, E(v.$, b)) }, textEmphasized: { t: Sn(mC), i: Se.LOW, l: (v, E, b) => ({ $: E(v[2], b) }), h: (v, E, b) => l("em", { key: b.k }, E(v.$, b)) }, textEscaped: { t: Sn(yC), i: Se.HIGH, l: (v) => ({ $: v[1], type: "text" }) }, textMarked: { t: Sn(gC), i: Se.LOW, l: Tc, h: (v, E, b) => l("mark", { key: b.k }, E(v.$, b)) }, textStrikethroughed: { t: Sn(hC), i: Se.LOW, l: Tc, h: (v, E, b) => l("del", { key: b.k }, E(v.$, b)) } };
  r.disableParsingRawHTML !== !0 && (p.htmlBlock = { t: Po(p0), i: Se.HIGH, l(v, E, b) {
    const [, C] = v[3].match(EC), A = new RegExp(`^${C}`, "gm"), T = v[3].replace(A, ""), k = (_ = T, _C.some((M) => M.test(_)) ? DC : Ii);
    var _;
    const O = v[1].toLowerCase(), L = MA.indexOf(O) !== -1;
    b.Z = b.Z || O === "a";
    const $ = L ? v[3] : k(E, T, b);
    return b.Z = !1, { I: c(v[2]), $, G: L, H: L ? O : v[1] };
  }, h: (v, E, b) => l(v.H, Yn({ key: b.k }, v.I), v.G ? v.$ : E(v.$, b)) }, p.htmlSelfClosing = { t: Po(f0), i: Se.HIGH, l: (v) => ({ I: c(v[2] || ""), H: v[1] }), h: (v, E, b) => l(v.H, Yn({}, v.I, { key: b.k })) });
  const h = function(v) {
    let E = Object.keys(v);
    function b(C, A) {
      let T = [], k = "";
      for (; C; ) {
        let _ = 0;
        for (; _ < E.length; ) {
          const O = E[_], L = v[O], $ = L.t(C, A, k);
          if ($) {
            const M = $[0];
            C = C.substring(M.length);
            const j = L.l($, b, A);
            j.type == null && (j.type = O), T.push(j), k = M;
            break;
          }
          _++;
        }
      }
      return T;
    }
    return E.sort(function(C, A) {
      let T = v[C].i, k = v[A].i;
      return T !== k ? T - k : C < A ? -1 : 1;
    }), function(C, A) {
      return b(function(T) {
        return T.replace(zA, `
`).replace(qA, "").replace(lC, "    ");
      }(C), A);
    };
  }(p), y = (w = function(v) {
    return function(E, b, C) {
      return v[E.type].h(E, b, C);
    };
  }(p), function v(E, b = {}) {
    if (Array.isArray(E)) {
      const C = b.k, A = [];
      let T = !1;
      for (let k = 0; k < E.length; k++) {
        b.k = k;
        const _ = v(E[k], b), O = typeof _ == "string";
        O && T ? A[A.length - 1] += _ : _ !== null && A.push(_), T = O;
      }
      return b.k = C, A;
    }
    return w(E, v, b);
  });
  var w;
  const x = i(e);
  return d.length ? l("div", null, x, l("footer", { key: "footer" }, d.map(function(v) {
    return l("div", { id: r.slugify(v.B), key: v.B }, v.B, y(h(v.O, { _: !0 })));
  }))) : x;
}
(function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
})(Se || (Se = {}));
const zg = (e) => {
  let { children: r, options: a } = e, l = function(i, c) {
    if (i == null)
      return {};
    var d, m, p = {}, h = Object.keys(i);
    for (m = 0; m < h.length; m++)
      c.indexOf(d = h[m]) >= 0 || (p[d] = i[d]);
    return p;
  }(e, DA);
  return D.cloneElement($C(r, a), l);
};
function BC(e, r, a, l) {
  for (var i = e.length, c = a + (l ? 1 : -1); l ? c-- : ++c < i; )
    if (r(e[c], c, e))
      return c;
  return -1;
}
var IC = BC;
function PC(e) {
  return e !== e;
}
var NC = PC;
function jC(e, r, a) {
  for (var l = a - 1, i = e.length; ++l < i; )
    if (e[l] === r)
      return l;
  return -1;
}
var HC = jC, ZC = IC, zC = NC, VC = HC;
function UC(e, r, a) {
  return r === r ? VC(e, r, a) : ZC(e, zC, a);
}
var qC = UC, WC = qC;
function GC(e, r) {
  var a = e == null ? 0 : e.length;
  return !!a && WC(e, r, 0) > -1;
}
var KC = GC;
function YC(e, r, a) {
  for (var l = -1, i = e == null ? 0 : e.length; ++l < i; )
    if (a(r, e[l]))
      return !0;
  return !1;
}
var XC = YC;
function QC() {
}
var JC = QC, Dc = Fv, ek = JC, tk = m5, rk = 1 / 0, nk = Dc && 1 / tk(new Dc([, -0]))[1] == rk ? function(e) {
  return new Dc(e);
} : ek, ak = nk, ok = Rv, lk = KC, ik = XC, uk = Lv, sk = ak, ck = m5, dk = 200;
function pk(e, r, a) {
  var l = -1, i = lk, c = e.length, d = !0, m = [], p = m;
  if (a)
    d = !1, i = ik;
  else if (c >= dk) {
    var h = r ? null : sk(e);
    if (h)
      return ck(h);
    d = !1, i = uk, p = new ok();
  } else
    p = r ? [] : m;
  e:
    for (; ++l < c; ) {
      var y = e[l], w = r ? r(y) : y;
      if (y = a || y !== 0 ? y : 0, d && w === w) {
        for (var x = p.length; x--; )
          if (p[x] === w)
            continue e;
        r && p.push(w), m.push(y);
      } else
        i(p, w, a) || (p !== m && p.push(w), m.push(y));
    }
  return m;
}
var fk = pk, mk = fk;
function gk(e) {
  return e && e.length ? mk(e) : [];
}
var hk = gk;
const yk = /* @__PURE__ */ ta(hk);
function vk(e, r) {
  for (var a = -1, l = e == null ? 0 : e.length; ++a < l && r(e[a], a, e) !== !1; )
    ;
  return e;
}
var bk = vk, Ek = gd, xk = xg;
function wk(e, r, a, l) {
  var i = !a;
  a || (a = {});
  for (var c = -1, d = r.length; ++c < d; ) {
    var m = r[c], p = l ? l(a[m], e[m], m, a, e) : void 0;
    p === void 0 && (p = e[m]), i ? xk(a, m, p) : Ek(a, m, p);
  }
  return a;
}
var bu = wk, Sk = bu, Ak = yu;
function Ck(e, r) {
  return e && Sk(r, Ak(r), e);
}
var kk = Ck, _k = bu, Ok = hd;
function Tk(e, r) {
  return e && _k(r, Ok(r), e);
}
var Fk = Tk, Gi = { exports: {} };
Gi.exports;
(function(e, r) {
  var a = Dv, l = r && !r.nodeType && r, i = l && !0 && e && !e.nodeType && e, c = i && i.exports === l, d = c ? a.Buffer : void 0, m = d ? d.allocUnsafe : void 0;
  function p(h, y) {
    if (y)
      return h.slice();
    var w = h.length, x = m ? m(w) : new h.constructor(w);
    return h.copy(x), x;
  }
  e.exports = p;
})(Gi, Gi.exports);
var Rk = Gi.exports;
function Lk(e, r) {
  var a = -1, l = e.length;
  for (r || (r = Array(l)); ++a < l; )
    r[a] = e[a];
  return r;
}
var Dk = Lk, Mk = bu, $k = cd;
function Bk(e, r) {
  return Mk(e, $k(e), r);
}
var Ik = Bk, Pk = bu, Nk = Sg;
function jk(e, r) {
  return Pk(e, Nk(e), r);
}
var Hk = jk, Zk = Object.prototype, zk = Zk.hasOwnProperty;
function Vk(e) {
  var r = e.length, a = new e.constructor(r);
  return r && typeof e[0] == "string" && zk.call(e, "index") && (a.index = e.index, a.input = e.input), a;
}
var Uk = Vk, R2 = Mv;
function qk(e) {
  var r = new e.constructor(e.byteLength);
  return new R2(r).set(new R2(e)), r;
}
var bd = qk, Wk = bd;
function Gk(e, r) {
  var a = r ? Wk(e.buffer) : e.buffer;
  return new e.constructor(a, e.byteOffset, e.byteLength);
}
var Kk = Gk, Yk = /\w*$/;
function Xk(e) {
  var r = new e.constructor(e.source, Yk.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var Qk = Xk, L2 = $v, D2 = L2 ? L2.prototype : void 0, M2 = D2 ? D2.valueOf : void 0;
function Jk(e) {
  return M2 ? Object(M2.call(e)) : {};
}
var e_ = Jk, t_ = bd;
function r_(e, r) {
  var a = r ? t_(e.buffer) : e.buffer;
  return new e.constructor(a, e.byteOffset, e.length);
}
var n_ = r_, a_ = bd, o_ = Kk, l_ = Qk, i_ = e_, u_ = n_, s_ = "[object Boolean]", c_ = "[object Date]", d_ = "[object Map]", p_ = "[object Number]", f_ = "[object RegExp]", m_ = "[object Set]", g_ = "[object String]", h_ = "[object Symbol]", y_ = "[object ArrayBuffer]", v_ = "[object DataView]", b_ = "[object Float32Array]", E_ = "[object Float64Array]", x_ = "[object Int8Array]", w_ = "[object Int16Array]", S_ = "[object Int32Array]", A_ = "[object Uint8Array]", C_ = "[object Uint8ClampedArray]", k_ = "[object Uint16Array]", __ = "[object Uint32Array]";
function O_(e, r, a) {
  var l = e.constructor;
  switch (r) {
    case y_:
      return a_(e);
    case s_:
    case c_:
      return new l(+e);
    case v_:
      return o_(e, a);
    case b_:
    case E_:
    case x_:
    case w_:
    case S_:
    case A_:
    case C_:
    case k_:
    case __:
      return u_(e, a);
    case d_:
      return new l();
    case p_:
    case g_:
      return new l(e);
    case f_:
      return l_(e);
    case m_:
      return new l();
    case h_:
      return i_(e);
  }
}
var T_ = O_, F_ = ol, $2 = Object.create, R_ = function() {
  function e() {
  }
  return function(r) {
    if (!F_(r))
      return {};
    if ($2)
      return $2(r);
    e.prototype = r;
    var a = new e();
    return e.prototype = void 0, a;
  };
}(), L_ = R_, D_ = L_, M_ = wg, $_ = pd;
function B_(e) {
  return typeof e.constructor == "function" && !$_(e) ? D_(M_(e)) : {};
}
var I_ = B_, P_ = Ki, N_ = A0, j_ = "[object Map]";
function H_(e) {
  return N_(e) && P_(e) == j_;
}
var Z_ = H_, z_ = Z_, V_ = h5, B2 = g5, I2 = B2 && B2.isMap, U_ = I2 ? V_(I2) : z_, q_ = U_, W_ = Ki, G_ = A0, K_ = "[object Set]";
function Y_(e) {
  return G_(e) && W_(e) == K_;
}
var X_ = Y_, Q_ = X_, J_ = h5, P2 = g5, N2 = P2 && P2.isSet, eO = N2 ? J_(N2) : Q_, tO = eO, rO = S0, nO = bk, aO = gd, oO = kk, lO = Fk, iO = Rk, uO = Dk, sO = Ik, cO = Hk, dO = hg, pO = Ag, fO = Ki, mO = Uk, gO = T_, hO = I_, yO = Tn, vO = w0, bO = q_, EO = ol, xO = tO, wO = yu, SO = hd, AO = 1, CO = 2, kO = 4, Vg = "[object Arguments]", _O = "[object Array]", OO = "[object Boolean]", TO = "[object Date]", FO = "[object Error]", Ug = "[object Function]", RO = "[object GeneratorFunction]", LO = "[object Map]", DO = "[object Number]", qg = "[object Object]", MO = "[object RegExp]", $O = "[object Set]", BO = "[object String]", IO = "[object Symbol]", PO = "[object WeakMap]", NO = "[object ArrayBuffer]", jO = "[object DataView]", HO = "[object Float32Array]", ZO = "[object Float64Array]", zO = "[object Int8Array]", VO = "[object Int16Array]", UO = "[object Int32Array]", qO = "[object Uint8Array]", WO = "[object Uint8ClampedArray]", GO = "[object Uint16Array]", KO = "[object Uint32Array]", Le = {};
Le[Vg] = Le[_O] = Le[NO] = Le[jO] = Le[OO] = Le[TO] = Le[HO] = Le[ZO] = Le[zO] = Le[VO] = Le[UO] = Le[LO] = Le[DO] = Le[qg] = Le[MO] = Le[$O] = Le[BO] = Le[IO] = Le[qO] = Le[WO] = Le[GO] = Le[KO] = !0;
Le[FO] = Le[Ug] = Le[PO] = !1;
function Pi(e, r, a, l, i, c) {
  var d, m = r & AO, p = r & CO, h = r & kO;
  if (a && (d = i ? a(e, l, i, c) : a(e)), d !== void 0)
    return d;
  if (!EO(e))
    return e;
  var y = yO(e);
  if (y) {
    if (d = mO(e), !m)
      return uO(e, d);
  } else {
    var w = fO(e), x = w == Ug || w == RO;
    if (vO(e))
      return iO(e, m);
    if (w == qg || w == Vg || x && !i) {
      if (d = p || x ? {} : hO(e), !m)
        return p ? cO(e, lO(d, e)) : sO(e, oO(d, e));
    } else {
      if (!Le[w])
        return i ? e : {};
      d = gO(e, w, m);
    }
  }
  c || (c = new rO());
  var v = c.get(e);
  if (v)
    return v;
  c.set(e, d), xO(e) ? e.forEach(function(C) {
    d.add(Pi(C, r, a, C, e, c));
  }) : bO(e) && e.forEach(function(C, A) {
    d.set(A, Pi(C, r, a, A, e, c));
  });
  var E = h ? p ? pO : dO : p ? SO : wO, b = y ? void 0 : E(e);
  return nO(b || e, function(C, A) {
    b && (A = C, C = e[A]), aO(d, A, Pi(C, r, a, A, e, c));
  }), d;
}
var YO = Pi, XO = YO, QO = 1, JO = 4;
function eT(e) {
  return XO(e, QO | JO);
}
var tT = eT;
const rT = /* @__PURE__ */ ta(tT);
var nT = Object.create, Wg = Object.defineProperty, aT = Object.getOwnPropertyDescriptor, Gg = Object.getOwnPropertyNames, oT = Object.getPrototypeOf, lT = Object.prototype.hasOwnProperty, or = (e, r) => function() {
  return r || (0, e[Gg(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, iT = (e, r, a, l) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let i of Gg(r))
      !lT.call(e, i) && i !== a && Wg(e, i, { get: () => r[i], enumerable: !(l = aT(r, i)) || l.enumerable });
  return e;
}, Ed = (e, r, a) => (a = e != null ? nT(oT(e)) : {}, iT(
  r || !e || !e.__esModule ? Wg(a, "default", { value: e, enumerable: !0 }) : a,
  e
)), uT = [
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
], sT = ["detail"];
function cT(e) {
  const r = uT.filter((a) => e[a] !== void 0).reduce((a, l) => ({ ...a, [l]: e[l] }), {});
  return e instanceof CustomEvent && sT.filter((a) => e[a] !== void 0).forEach((a) => {
    r[a] = e[a];
  }), r;
}
var Kg = or({
  "node_modules/has-symbols/shams.js"(e, r) {
    r.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var l = {}, i = Symbol("test"), c = Object(i);
      if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(c) !== "[object Symbol]")
        return !1;
      var d = 42;
      l[i] = d;
      for (i in l)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(l).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(l).length !== 0)
        return !1;
      var m = Object.getOwnPropertySymbols(l);
      if (m.length !== 1 || m[0] !== i || !Object.prototype.propertyIsEnumerable.call(l, i))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var p = Object.getOwnPropertyDescriptor(l, i);
        if (p.value !== d || p.enumerable !== !0)
          return !1;
      }
      return !0;
    };
  }
}), Yg = or({
  "node_modules/has-symbols/index.js"(e, r) {
    var a = typeof Symbol < "u" && Symbol, l = Kg();
    r.exports = function() {
      return typeof a != "function" || typeof Symbol != "function" || typeof a("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : l();
    };
  }
}), dT = or({
  "node_modules/function-bind/implementation.js"(e, r) {
    var a = "Function.prototype.bind called on incompatible ", l = Array.prototype.slice, i = Object.prototype.toString, c = "[object Function]";
    r.exports = function(m) {
      var p = this;
      if (typeof p != "function" || i.call(p) !== c)
        throw new TypeError(a + p);
      for (var h = l.call(arguments, 1), y, w = function() {
        if (this instanceof y) {
          var C = p.apply(
            this,
            h.concat(l.call(arguments))
          );
          return Object(C) === C ? C : this;
        } else
          return p.apply(
            m,
            h.concat(l.call(arguments))
          );
      }, x = Math.max(0, p.length - h.length), v = [], E = 0; E < x; E++)
        v.push("$" + E);
      if (y = Function("binder", "return function (" + v.join(",") + "){ return binder.apply(this,arguments); }")(w), p.prototype) {
        var b = function() {
        };
        b.prototype = p.prototype, y.prototype = new b(), b.prototype = null;
      }
      return y;
    };
  }
}), xd = or({
  "node_modules/function-bind/index.js"(e, r) {
    var a = dT();
    r.exports = Function.prototype.bind || a;
  }
}), pT = or({
  "node_modules/has/src/index.js"(e, r) {
    var a = xd();
    r.exports = a.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), Xg = or({
  "node_modules/get-intrinsic/index.js"(e, r) {
    var a, l = SyntaxError, i = Function, c = TypeError, d = function(Q) {
      try {
        return i('"use strict"; return (' + Q + ").constructor;")();
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
    }() : p, y = Yg()(), w = Object.getPrototypeOf || function(Q) {
      return Q.__proto__;
    }, x = {}, v = typeof Uint8Array > "u" ? a : w(Uint8Array), E = {
      "%AggregateError%": typeof AggregateError > "u" ? a : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? a : ArrayBuffer,
      "%ArrayIteratorPrototype%": y ? w([][Symbol.iterator]()) : a,
      "%AsyncFromSyncIteratorPrototype%": a,
      "%AsyncFunction%": x,
      "%AsyncGenerator%": x,
      "%AsyncGeneratorFunction%": x,
      "%AsyncIteratorPrototype%": x,
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
      "%Function%": i,
      "%GeneratorFunction%": x,
      "%Int8Array%": typeof Int8Array > "u" ? a : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? a : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? a : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": y ? w(w([][Symbol.iterator]())) : a,
      "%JSON%": typeof JSON == "object" ? JSON : a,
      "%Map%": typeof Map > "u" ? a : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !y ? a : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
      "%SetIteratorPrototype%": typeof Set > "u" || !y ? a : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? a : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": y ? w(""[Symbol.iterator]()) : a,
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
        re && (pe = w(re.prototype));
      }
      return E[Y] = pe, pe;
    }, C = {
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
    }, A = xd(), T = pT(), k = A.call(Function.call, Array.prototype.concat), _ = A.call(Function.apply, Array.prototype.splice), O = A.call(Function.call, String.prototype.replace), L = A.call(Function.call, String.prototype.slice), $ = A.call(Function.call, RegExp.prototype.exec), M = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, j = /\\(\\)?/g, Z = function(Y) {
      var pe = L(Y, 0, 1), J = L(Y, -1);
      if (pe === "%" && J !== "%")
        throw new l("invalid intrinsic syntax, expected closing `%`");
      if (J === "%" && pe !== "%")
        throw new l("invalid intrinsic syntax, expected opening `%`");
      var re = [];
      return O(Y, M, function(ae, q, W, F) {
        re[re.length] = W ? O(F, j, "$1") : q || ae;
      }), re;
    }, V = function(Y, pe) {
      var J = Y, re;
      if (T(C, J) && (re = C[J], J = "%" + re[0] + "%"), T(E, J)) {
        var ae = E[J];
        if (ae === x && (ae = b(J)), typeof ae > "u" && !pe)
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
      U && (re = U[0], _(J, k([0, 1], U)));
      for (var ne = 1, ce = !0; ne < J.length; ne += 1) {
        var ue = J[ne], te = L(ue, 0, 1), le = L(ue, -1);
        if ((te === '"' || te === "'" || te === "`" || le === '"' || le === "'" || le === "`") && te !== le)
          throw new l("property names with quotes must have matching quotes");
        if ((ue === "constructor" || !ce) && (F = !0), re += "." + ue, q = "%" + re + "%", T(E, q))
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
            ce = T(W, ue), W = W[ue];
          ce && !F && (E[q] = W);
        }
      }
      return W;
    };
  }
}), fT = or({
  "node_modules/call-bind/index.js"(e, r) {
    var a = xd(), l = Xg(), i = l("%Function.prototype.apply%"), c = l("%Function.prototype.call%"), d = l("%Reflect.apply%", !0) || a.call(c, i), m = l("%Object.getOwnPropertyDescriptor%", !0), p = l("%Object.defineProperty%", !0), h = l("%Math.max%");
    if (p)
      try {
        p({}, "a", { value: 1 });
      } catch {
        p = null;
      }
    r.exports = function(x) {
      var v = d(a, c, arguments);
      if (m && p) {
        var E = m(v, "length");
        E.configurable && p(
          v,
          "length",
          { value: 1 + h(0, x.length - (arguments.length - 1)) }
        );
      }
      return v;
    };
    var y = function() {
      return d(a, i, arguments);
    };
    p ? p(r.exports, "apply", { value: y }) : r.exports.apply = y;
  }
}), mT = or({
  "node_modules/call-bind/callBound.js"(e, r) {
    var a = Xg(), l = fT(), i = l(a("String.prototype.indexOf"));
    r.exports = function(d, m) {
      var p = a(d, !!m);
      return typeof p == "function" && i(d, ".prototype.") > -1 ? l(p) : p;
    };
  }
}), gT = or({
  "node_modules/has-tostringtag/shams.js"(e, r) {
    var a = Kg();
    r.exports = function() {
      return a() && !!Symbol.toStringTag;
    };
  }
}), hT = or({
  "node_modules/is-regex/index.js"(e, r) {
    var a = mT(), l = gT()(), i, c, d, m;
    l && (i = a("Object.prototype.hasOwnProperty"), c = a("RegExp.prototype.exec"), d = {}, p = function() {
      throw d;
    }, m = {
      toString: p,
      valueOf: p
    }, typeof Symbol.toPrimitive == "symbol" && (m[Symbol.toPrimitive] = p));
    var p, h = a("Object.prototype.toString"), y = Object.getOwnPropertyDescriptor, w = "[object RegExp]";
    r.exports = l ? function(v) {
      if (!v || typeof v != "object")
        return !1;
      var E = y(v, "lastIndex"), b = E && i(E, "value");
      if (!b)
        return !1;
      try {
        c(v, m);
      } catch (C) {
        return C === d;
      }
    } : function(v) {
      return !v || typeof v != "object" && typeof v != "function" ? !1 : h(v) === w;
    };
  }
}), yT = or({
  "node_modules/is-function/index.js"(e, r) {
    r.exports = l;
    var a = Object.prototype.toString;
    function l(i) {
      if (!i)
        return !1;
      var c = a.call(i);
      return c === "[object Function]" || typeof i == "function" && c !== "[object RegExp]" || typeof window < "u" && (i === window.setTimeout || i === window.alert || i === window.confirm || i === window.prompt);
    }
  }
}), vT = or({
  "node_modules/is-symbol/index.js"(e, r) {
    var a = Object.prototype.toString, l = Yg()();
    l ? (i = Symbol.prototype.toString, c = /^Symbol\(.*\)$/, d = function(p) {
      return typeof p.valueOf() != "symbol" ? !1 : c.test(i.call(p));
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
    var i, c, d;
  }
}), bT = Ed(hT()), ET = Ed(yT()), xT = Ed(vT());
function wT(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var ST = typeof global == "object" && global && global.Object === Object && global, AT = ST, CT = typeof self == "object" && self && self.Object === Object && self, kT = AT || CT || Function("return this")(), wd = kT, _T = wd.Symbol, Za = _T, Qg = Object.prototype, OT = Qg.hasOwnProperty, TT = Qg.toString, No = Za ? Za.toStringTag : void 0;
function FT(e) {
  var r = OT.call(e, No), a = e[No];
  try {
    e[No] = void 0;
    var l = !0;
  } catch {
  }
  var i = TT.call(e);
  return l && (r ? e[No] = a : delete e[No]), i;
}
var RT = FT, LT = Object.prototype, DT = LT.toString;
function MT(e) {
  return DT.call(e);
}
var $T = MT, BT = "[object Null]", IT = "[object Undefined]", j2 = Za ? Za.toStringTag : void 0;
function PT(e) {
  return e == null ? e === void 0 ? IT : BT : j2 && j2 in Object(e) ? RT(e) : $T(e);
}
var NT = PT, H2 = Za ? Za.prototype : void 0;
H2 && H2.toString;
function jT(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Jg = jT, HT = "[object AsyncFunction]", ZT = "[object Function]", zT = "[object GeneratorFunction]", VT = "[object Proxy]";
function UT(e) {
  if (!Jg(e))
    return !1;
  var r = NT(e);
  return r == ZT || r == zT || r == HT || r == VT;
}
var qT = UT, WT = wd["__core-js_shared__"], Mc = WT, Z2 = function() {
  var e = /[^.]+$/.exec(Mc && Mc.keys && Mc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function GT(e) {
  return !!Z2 && Z2 in e;
}
var KT = GT, YT = Function.prototype, XT = YT.toString;
function QT(e) {
  if (e != null) {
    try {
      return XT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var JT = QT, eF = /[\\^$.*+?()[\]{}|]/g, tF = /^\[object .+?Constructor\]$/, rF = Function.prototype, nF = Object.prototype, aF = rF.toString, oF = nF.hasOwnProperty, lF = RegExp(
  "^" + aF.call(oF).replace(eF, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function iF(e) {
  if (!Jg(e) || KT(e))
    return !1;
  var r = qT(e) ? lF : tF;
  return r.test(JT(e));
}
var uF = iF;
function sF(e, r) {
  return e?.[r];
}
var cF = sF;
function dF(e, r) {
  var a = cF(e, r);
  return uF(a) ? a : void 0;
}
var eh = dF;
function pF(e, r) {
  return e === r || e !== e && r !== r;
}
var fF = pF, mF = eh(Object, "create"), nl = mF;
function gF() {
  this.__data__ = nl ? nl(null) : {}, this.size = 0;
}
var hF = gF;
function yF(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var vF = yF, bF = "__lodash_hash_undefined__", EF = Object.prototype, xF = EF.hasOwnProperty;
function wF(e) {
  var r = this.__data__;
  if (nl) {
    var a = r[e];
    return a === bF ? void 0 : a;
  }
  return xF.call(r, e) ? r[e] : void 0;
}
var SF = wF, AF = Object.prototype, CF = AF.hasOwnProperty;
function kF(e) {
  var r = this.__data__;
  return nl ? r[e] !== void 0 : CF.call(r, e);
}
var _F = kF, OF = "__lodash_hash_undefined__";
function TF(e, r) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = nl && r === void 0 ? OF : r, this;
}
var FF = TF;
function qa(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
qa.prototype.clear = hF;
qa.prototype.delete = vF;
qa.prototype.get = SF;
qa.prototype.has = _F;
qa.prototype.set = FF;
var z2 = qa;
function RF() {
  this.__data__ = [], this.size = 0;
}
var LF = RF;
function DF(e, r) {
  for (var a = e.length; a--; )
    if (fF(e[a][0], r))
      return a;
  return -1;
}
var Eu = DF, MF = Array.prototype, $F = MF.splice;
function BF(e) {
  var r = this.__data__, a = Eu(r, e);
  if (a < 0)
    return !1;
  var l = r.length - 1;
  return a == l ? r.pop() : $F.call(r, a, 1), --this.size, !0;
}
var IF = BF;
function PF(e) {
  var r = this.__data__, a = Eu(r, e);
  return a < 0 ? void 0 : r[a][1];
}
var NF = PF;
function jF(e) {
  return Eu(this.__data__, e) > -1;
}
var HF = jF;
function ZF(e, r) {
  var a = this.__data__, l = Eu(a, e);
  return l < 0 ? (++this.size, a.push([e, r])) : a[l][1] = r, this;
}
var zF = ZF;
function Wa(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
Wa.prototype.clear = LF;
Wa.prototype.delete = IF;
Wa.prototype.get = NF;
Wa.prototype.has = HF;
Wa.prototype.set = zF;
var VF = Wa, UF = eh(wd, "Map"), qF = UF;
function WF() {
  this.size = 0, this.__data__ = {
    hash: new z2(),
    map: new (qF || VF)(),
    string: new z2()
  };
}
var GF = WF;
function KF(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var YF = KF;
function XF(e, r) {
  var a = e.__data__;
  return YF(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
var xu = XF;
function QF(e) {
  var r = xu(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var JF = QF;
function eR(e) {
  return xu(this, e).get(e);
}
var tR = eR;
function rR(e) {
  return xu(this, e).has(e);
}
var nR = rR;
function aR(e, r) {
  var a = xu(this, e), l = a.size;
  return a.set(e, r), this.size += a.size == l ? 0 : 1, this;
}
var oR = aR;
function Ga(e) {
  var r = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++r < a; ) {
    var l = e[r];
    this.set(l[0], l[1]);
  }
}
Ga.prototype.clear = GF;
Ga.prototype.delete = JF;
Ga.prototype.get = tR;
Ga.prototype.has = nR;
Ga.prototype.set = oR;
var th = Ga, lR = "Expected a function";
function Sd(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(lR);
  var a = function() {
    var l = arguments, i = r ? r.apply(this, l) : l[0], c = a.cache;
    if (c.has(i))
      return c.get(i);
    var d = e.apply(this, l);
    return a.cache = c.set(i, d) || c, d;
  };
  return a.cache = new (Sd.Cache || th)(), a;
}
Sd.Cache = th;
var iR = Sd, uR = 500;
function sR(e) {
  var r = iR(e, function(l) {
    return a.size === uR && a.clear(), l;
  }), a = r.cache;
  return r;
}
var cR = sR, dR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pR = /\\(\\)?/g;
cR(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(dR, function(a, l, i, c) {
    r.push(i ? c.replace(pR, "$1") : l || a);
  }), r;
});
var fR = wT, mR = (e) => {
  let r = null, a = !1, l = !1, i = !1, c = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0)
    for (let d = 0; d < e.length; d += 1)
      !r && !a && !l && !i ? e[d] === '"' || e[d] === "'" || e[d] === "`" ? r = e[d] : e[d] === "/" && e[d + 1] === "*" ? a = !0 : e[d] === "/" && e[d + 1] === "/" ? l = !0 : e[d] === "/" && e[d + 1] !== "/" && (i = !0) : (r && (e[d] === r && e[d - 1] !== "\\" || e[d] === `
` && r !== "`") && (r = null), i && (e[d] === "/" && e[d - 1] !== "\\" || e[d] === `
`) && (i = !1), a && e[d - 1] === "/" && e[d - 2] === "*" && (a = !1), l && e[d] === `
` && (l = !1)), !a && !l && (c += e[d]);
  else
    c = e;
  return c;
}, gR = ra(1e4)(
  (e) => mR(e).replace(/\n\s*/g, "").trim()
), hR = function(r, a) {
  const l = a.slice(0, a.indexOf("{")), i = a.slice(a.indexOf("{"));
  if (l.includes("=>") || l.includes("function"))
    return a;
  let c = l;
  return c = c.replace(r, "function"), c + i;
}, yR = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function rh(e) {
  if (!fR(e))
    return e;
  let r = e, a = !1;
  return typeof Event < "u" && e instanceof Event && (r = cT(r), a = !0), r = Object.keys(r).reduce((l, i) => {
    try {
      r[i] && r[i].toJSON, l[i] = r[i];
    } catch {
      a = !0;
    }
    return l;
  }, {}), a ? r : e;
}
var vR = function(r) {
  let a, l, i, c;
  return function(m, p) {
    try {
      if (m === "")
        return c = [], a = /* @__PURE__ */ new Map([[p, "[]"]]), l = /* @__PURE__ */ new Map(), i = [], p;
      const h = l.get(this) || this;
      for (; i.length && h !== i[0]; )
        i.shift(), c.pop();
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
        return yR.test(p) ? r.allowDate ? `_date_${p}` : void 0 : p;
      if ((0, bT.default)(p))
        return r.allowRegExp ? `_regexp_${p.flags}|${p.source}` : void 0;
      if ((0, ET.default)(p)) {
        if (!r.allowFunction)
          return;
        const { name: w } = p, x = p.toString();
        return x.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${w}|${(() => {
        }).toString()}` : `_function_${w}|${gR(hR(m, x))}`;
      }
      if ((0, xT.default)(p)) {
        if (!r.allowSymbol)
          return;
        const w = Symbol.keyFor(p);
        return w !== void 0 ? `_gsymbol_${w}` : `_symbol_${p.toString().slice(7, -1)}`;
      }
      if (i.length >= r.maxDepth)
        return Array.isArray(p) ? `[Array(${p.length})]` : "[Object]";
      if (p === this)
        return `_duplicate_${JSON.stringify(c)}`;
      if (p.constructor && p.constructor.name && p.constructor.name !== "Object" && !Array.isArray(p) && !r.allowClass)
        return;
      const y = a.get(p);
      if (!y) {
        const w = Array.isArray(p) ? p : rh(p);
        if (p.constructor && p.constructor.name && p.constructor.name !== "Object" && !Array.isArray(p) && r.allowClass)
          try {
            Object.assign(w, { "_constructor-name_": p.constructor.name });
          } catch {
          }
        return c.push(m), i.unshift(w), a.set(p, JSON.stringify(c)), p !== w && l.set(p, w), w;
      }
      return `_duplicate_${y}`;
    } catch {
      return;
    }
  };
}, bR = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, ER = (e, r = {}) => {
  const a = { ...bR, ...r };
  return JSON.stringify(rh(e), vR(a), r.space);
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
var nh = { exports: {} }, $c, V2;
function xR() {
  return V2 || (V2 = 1, $c = {
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
  }), $c;
}
var Bc, U2;
function wR() {
  return U2 || (U2 = 1, Bc = function(e) {
    var r = [].forEach, a = [].some, l = document.body, i, c = !0, d = " ";
    function m(A, T) {
      var k = T.appendChild(h(A));
      if (A.children.length) {
        var _ = y(A.isCollapsed);
        A.children.forEach(function(O) {
          m(O, _);
        }), k.appendChild(_);
      }
    }
    function p(A, T) {
      var k = !1, _ = y(k);
      if (T.forEach(function(O) {
        m(O, _);
      }), i = A || i, i !== null)
        return i.firstChild && i.removeChild(i.firstChild), T.length === 0 ? i : i.appendChild(_);
    }
    function h(A) {
      var T = document.createElement("li"), k = document.createElement("a");
      return e.listItemClass && T.setAttribute("class", e.listItemClass), e.onClick && (k.onclick = e.onClick), e.includeTitleTags && k.setAttribute("title", A.textContent), e.includeHtml && A.childNodes.length ? r.call(A.childNodes, function(_) {
        k.appendChild(_.cloneNode(!0));
      }) : k.textContent = A.textContent, k.setAttribute("href", e.basePath + "#" + A.id), k.setAttribute("class", e.linkClass + d + "node-name--" + A.nodeName + d + e.extraLinkClasses), T.appendChild(k), T;
    }
    function y(A) {
      var T = e.orderedList ? "ol" : "ul", k = document.createElement(T), _ = e.listClass + d + e.extraListClasses;
      return A && (_ = _ + d + e.collapsibleClass, _ = _ + d + e.isCollapsedClass), k.setAttribute("class", _), k;
    }
    function w() {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var A;
        A = document.querySelector(e.scrollContainer).scrollTop;
      } else
        A = document.documentElement.scrollTop || l.scrollTop;
      var T = document.querySelector(e.positionFixedSelector);
      e.fixedSidebarOffset === "auto" && (e.fixedSidebarOffset = i.offsetTop), A > e.fixedSidebarOffset ? T.className.indexOf(e.positionFixedClass) === -1 && (T.className += d + e.positionFixedClass) : T.className = T.className.split(d + e.positionFixedClass).join("");
    }
    function x(A) {
      var T = 0;
      return A !== null && (T = A.offsetTop, e.hasInnerContainers && (T += x(A.offsetParent))), T;
    }
    function v(A) {
      if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
        var T;
        T = document.querySelector(e.scrollContainer).scrollTop;
      } else
        T = document.documentElement.scrollTop || l.scrollTop;
      e.positionFixedSelector && w();
      var k = A, _;
      if (c && i !== null && k.length > 0) {
        a.call(k, function(V, Q) {
          if (x(V) > T + e.headingsOffset + 10) {
            var Y = Q === 0 ? Q : Q - 1;
            return _ = k[Y], !0;
          } else if (Q === k.length - 1)
            return _ = k[k.length - 1], !0;
        });
        var O = i.querySelector("." + e.activeLinkClass), L = i.querySelector("." + e.linkClass + ".node-name--" + _.nodeName + '[href="' + e.basePath + "#" + _.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (O === L)
          return;
        var $ = i.querySelectorAll("." + e.linkClass);
        r.call($, function(V) {
          V.className = V.className.split(d + e.activeLinkClass).join("");
        });
        var M = i.querySelectorAll("." + e.listItemClass);
        r.call(M, function(V) {
          V.className = V.className.split(d + e.activeListItemClass).join("");
        }), L && L.className.indexOf(e.activeLinkClass) === -1 && (L.className += d + e.activeLinkClass);
        var j = L && L.parentNode;
        j && j.className.indexOf(e.activeListItemClass) === -1 && (j.className += d + e.activeListItemClass);
        var Z = i.querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
        r.call(Z, function(V) {
          V.className.indexOf(e.isCollapsedClass) === -1 && (V.className += d + e.isCollapsedClass);
        }), L && L.nextSibling && L.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 && (L.nextSibling.className = L.nextSibling.className.split(d + e.isCollapsedClass).join("")), E(L && L.parentNode.parentNode);
      }
    }
    function E(A) {
      return A && A.className.indexOf(e.collapsibleClass) !== -1 && A.className.indexOf(e.isCollapsedClass) !== -1 ? (A.className = A.className.split(d + e.isCollapsedClass).join(""), E(A.parentNode.parentNode)) : A;
    }
    function b(A) {
      var T = A.target || A.srcElement;
      typeof T.className != "string" || T.className.indexOf(e.linkClass) === -1 || (c = !1);
    }
    function C() {
      c = !0;
    }
    return {
      enableTocAnimation: C,
      disableTocAnimation: b,
      render: p,
      updateToc: v
    };
  }), Bc;
}
var Ic, q2;
function SR() {
  return q2 || (q2 = 1, Ic = function(r) {
    var a = [].reduce;
    function l(y) {
      return y[y.length - 1];
    }
    function i(y) {
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
      const w = y.getAttribute("data-heading-label") || (r.headingLabelCallback ? String(r.headingLabelCallback(y.textContent)) : y.textContent.trim());
      var x = {
        id: y.id,
        children: [],
        nodeName: y.nodeName,
        headingLevel: i(y),
        textContent: w
      };
      return r.includeHtml && (x.childNodes = y.childNodes), r.headingObjectCallback ? r.headingObjectCallback(x, y) : x;
    }
    function m(y, w) {
      for (var x = d(y), v = x.headingLevel, E = w, b = l(E), C = b ? b.headingLevel : 0, A = v - C; A > 0 && (b = l(E), !(b && v === b.headingLevel)); )
        b && b.children !== void 0 && (E = b.children), A--;
      return v >= r.collapseDepth && (x.isCollapsed = !0), E.push(x), E;
    }
    function p(y, w) {
      var x = w;
      r.ignoreSelector && (x = w.split(",").map(function(E) {
        return E.trim() + ":not(" + r.ignoreSelector + ")";
      }));
      try {
        return y.querySelectorAll(x);
      } catch {
        return console.warn("Headers not found with selector: " + x), null;
      }
    }
    function h(y) {
      return a.call(y, function(x, v) {
        var E = d(v);
        return E && m(E, x.nest), x;
      }, {
        nest: []
      });
    }
    return {
      nestHeadingsArray: h,
      selectHeadings: p
    };
  }), Ic;
}
var Pc, W2;
function AR() {
  return W2 || (W2 = 1, Pc = function(r) {
    var a = r.tocElement || document.querySelector(r.tocSelector);
    if (a && a.scrollHeight > a.clientHeight) {
      var l = a.querySelector("." + r.activeListItemClass);
      l && (a.scrollTop = l.offsetTop - r.tocScrollOffset);
    }
  }), Pc;
}
var Nc = {}, G2;
function CR() {
  if (G2)
    return Nc;
  G2 = 1, Nc.initSmoothScrolling = e;
  function e(a) {
    var l = a.duration, i = a.offset, c = location.hash ? p(location.href) : location.href;
    d();
    function d() {
      document.body.addEventListener("click", y, !1);
      function y(w) {
        !m(w.target) || w.target.className.indexOf("no-smooth-scroll") > -1 || w.target.href.charAt(w.target.href.length - 2) === "#" && w.target.href.charAt(w.target.href.length - 1) === "!" || w.target.className.indexOf(a.linkClass) === -1 || r(w.target.hash, {
          duration: l,
          offset: i,
          callback: function() {
            h(w.target.hash);
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
      var w = document.getElementById(y.substring(1));
      w && (/^(?:a|select|input|button|textarea)$/i.test(w.tagName) || (w.tabIndex = -1), w.focus());
    }
  }
  function r(a, l) {
    var i = window.pageYOffset, c = {
      duration: l.duration,
      offset: l.offset || 0,
      callback: l.callback,
      easing: l.easing || v
    }, d = document.querySelector('[id="' + decodeURI(a).split("#").join("") + '"]') || document.querySelector('[id="' + a.split("#").join("") + '"]'), m = typeof a == "string" ? c.offset + (a ? d && d.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : a, p = typeof c.duration == "function" ? c.duration(m) : c.duration, h, y;
    requestAnimationFrame(function(E) {
      h = E, w(E);
    });
    function w(E) {
      y = E - h, window.scrollTo(0, c.easing(y, i, m, p)), y < p ? requestAnimationFrame(w) : x();
    }
    function x() {
      window.scrollTo(0, i + m), typeof c.callback == "function" && c.callback();
    }
    function v(E, b, C, A) {
      return E /= A / 2, E < 1 ? C / 2 * E * E + b : (E--, -C / 2 * (E * (E - 2) - 1) + b);
    }
  }
  return Nc;
}
(function(e, r) {
  (function(a, l) {
    e.exports = l(a);
  })(typeof ic < "u" ? ic : window || ic, function(a) {
    var l = xR(), i = {}, c = {}, d = wR(), m = SR(), p = AR(), h, y, w = !!a && !!a.document && !!a.document.querySelector && !!a.addEventListener;
    if (typeof window > "u" && !w)
      return;
    var x, v = Object.prototype.hasOwnProperty;
    function E() {
      for (var T = {}, k = 0; k < arguments.length; k++) {
        var _ = arguments[k];
        for (var O in _)
          v.call(_, O) && (T[O] = _[O]);
      }
      return T;
    }
    function b(T, k, _) {
      k || (k = 250);
      var O, L;
      return function() {
        var $ = _ || this, M = +/* @__PURE__ */ new Date(), j = arguments;
        O && M < O + k ? (clearTimeout(L), L = setTimeout(function() {
          O = M, T.apply($, j);
        }, k)) : (O = M, T.apply($, j));
      };
    }
    function C(T) {
      try {
        return T.contentElement || document.querySelector(T.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + T.contentSelector), null;
      }
    }
    function A(T) {
      try {
        return T.tocElement || document.querySelector(T.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + T.tocSelector), null;
      }
    }
    return c.destroy = function() {
      var T = A(i);
      T !== null && (i.skipRendering || T && (T.innerHTML = ""), i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).removeEventListener("resize", this._scrollListener, !1), h && document.querySelector(i.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), h && document.removeEventListener("click", this._clickListener, !1)));
    }, c.init = function(T) {
      if (w) {
        i = E(l, T || {}), this.options = i, this.state = {}, i.scrollSmooth && (i.duration = i.scrollSmoothDuration, i.offset = i.scrollSmoothOffset, c.scrollSmooth = CR().initSmoothScrolling(i)), h = d(i), y = m(i), this._buildHtml = h, this._parseContent = y, this._headingsArray = x, c.destroy();
        var k = C(i);
        if (k !== null) {
          var _ = A(i);
          if (_ !== null && (x = y.selectHeadings(k, i.headingSelector), x !== null)) {
            var O = y.nestHeadingsArray(x), L = O.nest;
            i.skipRendering || h.render(_, L), this._scrollListener = b(function(M) {
              h.updateToc(x), !i.disableTocScrollSync && p(i);
              var j = M && M.target && M.target.scrollingElement && M.target.scrollingElement.scrollTop === 0;
              (M && (M.eventPhase === 0 || M.currentTarget === null) || j) && (h.updateToc(x), i.scrollEndCallback && i.scrollEndCallback(M));
            }, i.throttleTimeout), this._scrollListener(), i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var $ = null;
            return this._clickListener = b(function(M) {
              i.scrollSmooth && h.disableTocAnimation(M), h.updateToc(x), $ && clearTimeout($), $ = setTimeout(function() {
                h.enableTocAnimation();
              }, i.scrollSmoothDuration);
            }, i.throttleTimeout), i.scrollContainer && document.querySelector(i.scrollContainer) ? document.querySelector(i.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, c.refresh = function(T) {
      c.destroy(), c.init(T || this.options);
    }, a.tocbot = c, c;
  });
})(nh);
var kR = nh.exports;
const K2 = /* @__PURE__ */ ta(kR), { deprecate: it, once: _R, logger: Ad } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: OR, composeConfigs: ZM, Preview: zM, DocsContext: VM } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: Y2, UPDATE_STORY_ARGS: TR, RESET_STORY_ARGS: FR, GLOBALS_UPDATED: X2, NAVIGATE_URL: RR } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var LR = P.div(He, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: je(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), m0 = (e) => u.createElement(LR, { ...e, className: "docblock-emptyblock sb-unstyled" }), DR = P(su)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), MR = P.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), ki = P.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${Jc}`]: { margin: 0 } })), $R = () => u.createElement(MR, null, u.createElement(ki, null), u.createElement(ki, { style: { width: "80%" } }), u.createElement(ki, { style: { width: "30%" } }), u.createElement(ki, { style: { width: "80%" } })), Cd = ({ isLoading: e, error: r, language: a, code: l, dark: i, format: c, ...d }) => {
  if (e)
    return u.createElement($R, null);
  if (r)
    return u.createElement(m0, null, r);
  let m = u.createElement(DR, { bordered: !0, copyable: !0, format: c, language: a, className: "docblock-source sb-unstyled", ...d }, l);
  if (typeof i > "u")
    return m;
  let p = i ? Kc.dark : Kc.light;
  return u.createElement(j5, { theme: Qc(p) }, m);
};
Cd.defaultProps = { format: !1 };
var Qe = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, kd = 600, BR = P.h1(He, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${kd}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), IR = P.h2(He, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${kd}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: je(0.25, e.color.defaultText) })), PR = P.div(({ theme: e }) => {
  let r = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, a = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, l = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [Qe("a")]: { ...r, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [Qe("blockquote")]: { ...r, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [Qe("div")]: r, [Qe("dl")]: { ...r, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [Qe("h1")]: { ...r, ...a, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [Qe("h2")]: { ...r, ...a, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [Qe("h3")]: { ...r, ...a, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [Qe("h4")]: { ...r, ...a, fontSize: `${e.typography.size.s3}px` }, [Qe("h5")]: { ...r, ...a, fontSize: `${e.typography.size.s2}px` }, [Qe("h6")]: { ...r, ...a, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [Qe("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [Qe("img")]: { maxWidth: "100%" }, [Qe("li")]: { ...r, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": l }, [Qe("ol")]: { ...r, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [Qe("p")]: { ...r, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": l }, [Qe("pre")]: { ...r, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [Qe("span")]: { ...r, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [Qe("table")]: { ...r, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [Qe("ul")]: { ...r, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), NR = P.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${kd}px)`]: {} })), jR = ({ children: e, toc: r }) => u.createElement(NR, { className: "sbdocs sbdocs-wrapper" }, u.createElement(PR, { className: "sbdocs sbdocs-content" }, e), r), wu = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), HR = ({ zoom: e, resetZoom: r }) => u.createElement(u.Fragment, null, u.createElement(Jn, { key: "zoomin", onClick: (a) => {
  a.preventDefault(), e(0.8);
}, title: "Zoom in" }, u.createElement(Lt, { icon: "zoom" })), u.createElement(Jn, { key: "zoomout", onClick: (a) => {
  a.preventDefault(), e(1.25);
}, title: "Zoom out" }, u.createElement(Lt, { icon: "zoomout" })), u.createElement(Jn, { key: "zoomreset", onClick: (a) => {
  a.preventDefault(), r();
}, title: "Reset zoom" }, u.createElement(Lt, { icon: "zoomreset" }))), ZR = P(pu)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), zR = ({ isLoading: e, storyId: r, baseUrl: a, zoom: l, resetZoom: i, ...c }) => u.createElement(ZR, { ...c }, u.createElement(D.Fragment, { key: "left" }, e ? [1, 2, 3].map((d) => u.createElement(rg, { key: d })) : u.createElement(HR, { zoom: l, resetZoom: i }))), ah = D.createContext({ scale: 1 }), { window: VR } = gt, UR = class extends D.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = VR.document.getElementById(e);
  }
  shouldComponentUpdate(e) {
    let { scale: r } = e;
    return r !== this.props.scale && this.setIframeBodyStyle({ width: `${r * 100}%`, height: `${r * 100}%`, transform: `scale(${1 / r})`, transformOrigin: "top left" }), !1;
  }
  setIframeBodyStyle(e) {
    return Object.assign(this.iframe.contentDocument.body.style, e);
  }
  render() {
    let { id: e, title: r, src: a, allowFullScreen: l, scale: i, ...c } = this.props;
    return u.createElement("iframe", { id: e, title: r, src: a, ...l ? { allow: "fullscreen" } : {}, loading: "lazy", ...c });
  }
}, { PREVIEW_URL: qR } = gt, WR = qR || "iframe.html", g0 = ({ story: e, primary: r }) => `story--${e.id}${r ? "--primary" : ""}`, GR = (e) => {
  let r = D.useRef(), [a, l] = D.useState(!0), [i, c] = D.useState(), { story: d, height: m, autoplay: p, forceInitialArgs: h, renderStoryToElement: y } = e;
  D.useEffect(() => {
    if (!(d && r.current))
      return () => {
      };
    let x = r.current, v = y(d, x, { showMain: () => {
    }, showError: ({ title: E, description: b }) => c(new Error(`${E} - ${b}`)), showException: (E) => c(E) }, { autoplay: p, forceInitialArgs: h });
    return l(!1), () => {
      Promise.resolve().then(() => v());
    };
  }, [p, y, d]);
  let w = "<span></span>";
  return i ? u.createElement("pre", null, u.createElement(Km, { error: i })) : u.createElement(u.Fragment, null, m ? u.createElement("style", null, `#${g0(e)} { min-height: ${m}; transform: translateZ(0); overflow: auto }`) : null, a && u.createElement(_d, null), u.createElement("div", { ref: r, id: `${g0(e)}-inner`, "data-name": d.name, dangerouslySetInnerHTML: { __html: w } }));
}, KR = ({ story: e, height: r = "500px" }) => u.createElement("div", { style: { width: "100%", height: r } }, u.createElement(ah.Consumer, null, ({ scale: a }) => u.createElement(UR, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: og(WR, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: a, style: { width: "100%", height: "100%", border: "0 none" } }))), YR = (e) => {
  let { inline: r } = e;
  return u.createElement("div", { id: g0(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, r ? u.createElement(GR, { ...e }) : u.createElement(KR, { ...e }));
}, _d = () => u.createElement(ag, null), XR = P.div(({ isColumn: e, columns: r, layout: a }) => ({ display: e || !r ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: a !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: a !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), Q2 = P(Cd)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Cr(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : Cr(0.05, e.background.content) } })), QR = P.div(({ theme: e, withSource: r, isExpanded: a }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...wu(e), borderBottomLeftRadius: r && a && 0, borderBottomRightRadius: r && a && 0, borderBottomWidth: a && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), JR = (e, r, a) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => a(!1) } };
    case r:
      return { source: u.createElement(Q2, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => a(!1) } };
    default:
      return { source: u.createElement(Q2, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => a(!0) } };
  }
};
function eL(e) {
  if (D.Children.count(e) === 1) {
    let r = e;
    if (r.props)
      return r.props.id;
  }
  return null;
}
var tL = P(zR)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), rL = P.div({ overflow: "hidden", position: "relative" }), h0 = ({ isLoading: e, isColumn: r, columns: a, children: l, withSource: i, withToolbar: c = !1, isExpanded: d = !1, additionalActions: m, className: p, layout: h = "padded", ...y }) => {
  let [w, x] = D.useState(d), { source: v, actionItem: E } = JR(i, w, x), [b, C] = D.useState(1), A = [p].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), T = i ? [E] : [], [k, _] = D.useState(m ? [...m] : []), O = [...T, ...k], { window: L } = gt, $ = D.useCallback(async (j) => {
    let { createCopyToClipboardFunction: Z } = await Promise.resolve().then(() => x8);
    Z();
  }, []), M = (j) => {
    let Z = L.getSelection();
    Z && Z.type === "Range" || (j.preventDefault(), k.filter((V) => V.title === "Copied").length === 0 && $(v.props.code).then(() => {
      _([...k, { title: "Copied", onClick: () => {
      } }]), L.setTimeout(() => _(k.filter((V) => V.title !== "Copied")), 1500);
    }));
  };
  return u.createElement(QR, { withSource: i, withToolbar: c, ...y, className: A.join(" ") }, c && u.createElement(tL, { isLoading: e, border: !0, zoom: (j) => C(b * j), resetZoom: () => C(1), storyId: eL(l), baseUrl: "./iframe.html" }), u.createElement(ah.Provider, { value: { scale: b } }, u.createElement(rL, { className: "docs-story", onCopyCapture: i && M }, u.createElement(XR, { isColumn: r || !Array.isArray(l), columns: a, layout: h }, u.createElement(Gm.Element, { scale: b }, Array.isArray(l) ? l.map((j, Z) => u.createElement("div", { key: Z }, j)) : u.createElement("div", null, l))), u.createElement(Z0, { actionItems: O }))), i && w && v);
}, nL = P(h0)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } })), aL = () => u.createElement(nL, { isLoading: !0, withToolbar: !0 }, u.createElement(_d, null)), oL = P.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: Xr({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), lL = ({ tags: e }) => {
  let r = (e.params || []).filter((c) => c.description), a = r.length !== 0, l = e.deprecated != null, i = e.returns != null && e.returns.description != null;
  return !a && !i && !l ? null : u.createElement(u.Fragment, null, u.createElement(oL, null, u.createElement("tbody", null, l && u.createElement("tr", { key: "deprecated" }, u.createElement("td", { colSpan: 2 }, u.createElement("strong", null, "Deprecated"), ": ", e.deprecated)), a && r.map((c) => u.createElement("tr", { key: c.name }, u.createElement("td", null, u.createElement("code", null, c.name)), u.createElement("td", null, c.description))), i && u.createElement("tr", { key: "returns" }, u.createElement("td", null, u.createElement("code", null, "Returns")), u.createElement("td", null, e.returns.description)))));
}, y0 = 8, J2 = P.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), iL = P.span(Xr, ({ theme: e, simple: r = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...r && { background: "transparent", border: "0 none", paddingLeft: 0 } })), uL = P.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), sL = P.div(Xr, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), cL = P.div(({ theme: e, width: r }) => ({ width: r, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), dL = P(Lt)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }), pL = () => u.createElement("span", null, "-"), oh = ({ text: e, simple: r }) => u.createElement(iL, { simple: r }, e), fL = ra(1e3)((e) => {
  let r = e.split(/\r?\n/);
  return `${Math.max(...r.map((a) => a.length))}ch`;
}), mL = (e) => {
  if (!e)
    return [e];
  let r = e.split("|").map((a) => a.trim());
  return yk(r);
}, e5 = (e, r = !0) => {
  let a = e;
  return r || (a = e.slice(0, y0)), a.map((l) => u.createElement(oh, { key: l, text: l === "" ? '""' : l }));
}, gL = ({ value: e, initialExpandedArgs: r }) => {
  let { summary: a, detail: l } = e, [i, c] = D.useState(!1), [d, m] = D.useState(r || !1);
  if (a == null)
    return null;
  let p = typeof a.toString == "function" ? a.toString() : a;
  if (l == null) {
    if (/[(){}[\]<>]/.test(p))
      return u.createElement(oh, { text: p });
    let h = mL(p), y = h.length;
    return y > y0 ? u.createElement(J2, { isExpanded: d }, e5(h, d), u.createElement(uL, { onClick: () => m(!d) }, d ? "Show less..." : `Show ${y - y0} more...`)) : u.createElement(J2, null, e5(h));
  }
  return u.createElement(eg, { closeOnOutsideClick: !0, placement: "bottom", visible: i, onVisibleChange: (h) => {
    c(h);
  }, tooltip: u.createElement(cL, { width: fL(l) }, u.createElement(su, { language: "jsx", format: !1 }, l)) }, u.createElement(sL, { className: "sbdocs-expandable" }, u.createElement("span", null, p), u.createElement(dL, { icon: i ? "arrowup" : "arrowdown" })));
}, jc = ({ value: e, initialExpandedArgs: r }) => e == null ? u.createElement(pL, null) : u.createElement(gL, { value: e, initialExpandedArgs: r }), hL = P.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: je(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${Ai(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${Ai(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Ai(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${Ai(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), yL = (e) => e === "true", vL = ({ name: e, value: r, onChange: a, onBlur: l, onFocus: i }) => {
  let c = D.useCallback(() => a(!1), [a]);
  if (r === void 0)
    return u.createElement(gr.Button, { id: Yi(e), onClick: c }, "Set boolean");
  let d = hr(e), m = typeof r == "string" ? yL(r) : r;
  return u.createElement(hL, { htmlFor: d, title: m ? "Change to false" : "Change to true" }, u.createElement("input", { id: d, type: "checkbox", onChange: (p) => a(p.target.checked), checked: m, name: e, onBlur: l, onFocus: i }), u.createElement("span", null, "False"), u.createElement("span", null, "True"));
}, bL = (e) => {
  let [r, a, l] = e.split("-"), i = /* @__PURE__ */ new Date();
  return i.setFullYear(parseInt(r, 10), parseInt(a, 10) - 1, parseInt(l, 10)), i;
}, EL = (e) => {
  let [r, a] = e.split(":"), l = /* @__PURE__ */ new Date();
  return l.setHours(parseInt(r, 10)), l.setMinutes(parseInt(a, 10)), l;
}, xL = (e) => {
  let r = new Date(e), a = `000${r.getFullYear()}`.slice(-4), l = `0${r.getMonth() + 1}`.slice(-2), i = `0${r.getDate()}`.slice(-2);
  return `${a}-${l}-${i}`;
}, wL = (e) => {
  let r = new Date(e), a = `0${r.getHours()}`.slice(-2), l = `0${r.getMinutes()}`.slice(-2);
  return `${a}:${l}`;
}, SL = P.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), AL = ({ name: e, value: r, onChange: a, onFocus: l, onBlur: i }) => {
  let [c, d] = D.useState(!0), m = D.useRef(), p = D.useRef();
  D.useEffect(() => {
    c !== !1 && (m && m.current && (m.current.value = xL(r)), p && p.current && (p.current.value = wL(r)));
  }, [r]);
  let h = (x) => {
    let v = bL(x.target.value), E = new Date(r);
    E.setFullYear(v.getFullYear(), v.getMonth(), v.getDate());
    let b = E.getTime();
    b && a(b), d(!!b);
  }, y = (x) => {
    let v = EL(x.target.value), E = new Date(r);
    E.setHours(v.getHours()), E.setMinutes(v.getMinutes());
    let b = E.getTime();
    b && a(b), d(!!b);
  }, w = hr(e);
  return u.createElement(SL, null, u.createElement(gr.Input, { type: "date", max: "9999-12-31", ref: m, id: `${w}-date`, name: `${w}-date`, onChange: h, onFocus: l, onBlur: i }), u.createElement(gr.Input, { type: "time", id: `${w}-time`, name: `${w}-time`, ref: p, onChange: y, onFocus: l, onBlur: i }), c ? null : u.createElement("div", null, "invalid"));
}, CL = P.label({ display: "flex" }), kL = (e) => {
  let r = parseFloat(e);
  return Number.isNaN(r) ? void 0 : r;
}, _L = ({ name: e, value: r, onChange: a, min: l, max: i, step: c, onBlur: d, onFocus: m }) => {
  let [p, h] = D.useState(typeof r == "number" ? r : ""), [y, w] = D.useState(!1), [x, v] = D.useState(null), E = D.useCallback((A) => {
    h(A.target.value);
    let T = parseFloat(A.target.value);
    Number.isNaN(T) ? v(new Error(`'${A.target.value}' is not a number`)) : (a(T), v(null));
  }, [a, v]), b = D.useCallback(() => {
    h("0"), a(0), w(!0);
  }, [w]), C = D.useRef(null);
  return D.useEffect(() => {
    y && C.current && C.current.select();
  }, [y]), D.useEffect(() => {
    p !== (typeof r == "number" ? r : "") && h(r);
  }, [r]), !y && r === void 0 ? u.createElement(gr.Button, { id: Yi(e), onClick: b }, "Set number") : u.createElement(CL, null, u.createElement(gr.Input, { ref: C, id: hr(e), type: "number", onChange: E, size: "flex", placeholder: "Edit number...", value: p, valid: x ? "error" : null, autoFocus: y, name: e, min: l, max: i, step: c, onFocus: m, onBlur: d }));
}, lh = (e, r) => {
  let a = r && Object.entries(r).find(([l, i]) => i === e);
  return a ? a[0] : void 0;
}, v0 = (e, r) => e && r ? Object.entries(r).filter((a) => e.includes(a[1])).map((a) => a[0]) : [], ih = (e, r) => e && r && e.map((a) => r[a]), OL = P.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), TL = P.span({}), FL = P.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), t5 = ({ name: e, options: r, value: a, onChange: l, isInline: i }) => {
  if (!r)
    return Ad.warn(`Checkbox with no options: ${e}`), u.createElement(u.Fragment, null, "-");
  let c = v0(a, r), [d, m] = D.useState(c), p = (y) => {
    let w = y.target.value, x = [...d];
    x.includes(w) ? x.splice(x.indexOf(w), 1) : x.push(w), l(ih(x, r)), m(x);
  };
  D.useEffect(() => {
    m(v0(a, r));
  }, [a]);
  let h = hr(e);
  return u.createElement(OL, { isInline: i }, Object.keys(r).map((y, w) => {
    let x = `${h}-${w}`;
    return u.createElement(FL, { key: x, htmlFor: x }, u.createElement("input", { type: "checkbox", id: x, name: x, value: y, onChange: p, checked: d?.includes(y) }), u.createElement(TL, null, y));
  }));
}, RL = P.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }), LL = P.span({}), DL = P.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), r5 = ({ name: e, options: r, value: a, onChange: l, isInline: i }) => {
  if (!r)
    return Ad.warn(`Radio with no options: ${e}`), u.createElement(u.Fragment, null, "-");
  let c = lh(a, r), d = hr(e);
  return u.createElement(RL, { isInline: i }, Object.keys(r).map((m, p) => {
    let h = `${d}-${p}`;
    return u.createElement(DL, { key: h, htmlFor: h }, u.createElement("input", { type: "radio", id: h, name: h, value: m, onChange: (y) => l(r[y.currentTarget.value]), checked: m === c }), u.createElement(LL, null, m));
  }));
}, ML = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, uh = P.select(({ theme: e }) => ({ ...ML, boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), sh = P.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), n5 = "Choose option...", $L = ({ name: e, value: r, options: a, onChange: l }) => {
  let i = (m) => {
    l(a[m.currentTarget.value]);
  }, c = lh(r, a) || n5, d = hr(e);
  return u.createElement(sh, null, u.createElement(Lt, { icon: "arrowdown" }), u.createElement(uh, { id: d, value: c, onChange: i }, u.createElement("option", { key: "no-selection", disabled: !0 }, n5), Object.keys(a).map((m) => u.createElement("option", { key: m }, m))));
}, BL = ({ name: e, value: r, options: a, onChange: l }) => {
  let i = (m) => {
    let p = Array.from(m.currentTarget.options).filter((h) => h.selected).map((h) => h.value);
    l(ih(p, a));
  }, c = v0(r, a), d = hr(e);
  return u.createElement(sh, null, u.createElement(uh, { id: d, multiple: !0, value: c, onChange: i }, Object.keys(a).map((m) => u.createElement("option", { key: m }, m))));
}, a5 = (e) => {
  let { name: r, options: a } = e;
  return a ? e.isMulti ? u.createElement(BL, { ...e }) : u.createElement($L, { ...e }) : (Ad.warn(`Select with no options: ${r}`), u.createElement(u.Fragment, null, "-"));
}, IL = (e, r) => Array.isArray(e) ? e.reduce((a, l) => (a[r?.[l] || String(l)] = l, a), {}) : e, PL = { check: t5, "inline-check": t5, radio: r5, "inline-radio": r5, select: a5, "multi-select": a5 }, Fa = (e) => {
  let { type: r = "select", labels: a, argType: l } = e, i = { ...e, options: l ? IL(l.options, a) : {}, isInline: r.includes("inline"), isMulti: r.includes("multi") }, c = PL[r];
  if (c)
    return u.createElement(c, { ...i });
  throw new Error(`Unknown options type: ${r}`);
}, Od = "value", NL = "key", jL = "Error", HL = "Object", ZL = "Array", zL = "String", VL = "Number", UL = "Boolean", qL = "Date", WL = "Null", GL = "Undefined", KL = "Function", YL = "Symbol", ch = "ADD_DELTA_TYPE", dh = "REMOVE_DELTA_TYPE", ph = "UPDATE_DELTA_TYPE";
function kn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function fh(e, r) {
  let a = kn(e), l = kn(r);
  return (a === "Function" || l === "Function") && l !== a;
}
var Td = class extends D.Component {
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
    let { handleAdd: e, onlyValue: r, onSubmitValueParser: a, keyPath: l, deep: i } = this.props, { inputRefKey: c, inputRefValue: d } = this.state, m = {};
    if (!r) {
      if (!c.value)
        return;
      m.key = c.value;
    }
    m.newValue = a(!1, l, i, m.key, d.value), e(m);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: r, addButtonElement: a, cancelButtonElement: l, inputElementGenerator: i, keyPath: c, deep: d } = this.props, m = D.cloneElement(a, { onClick: this.onSubmit }), p = D.cloneElement(l, { onClick: e }), h = i(Od, c, d), y = D.cloneElement(h, { placeholder: "Value", ref: this.refInputValue }), w = null;
    if (!r) {
      let x = i(NL, c, d);
      w = D.cloneElement(x, { placeholder: "Key", ref: this.refInputKey });
    }
    return u.createElement("span", { className: "rejt-add-value-node" }, w, y, p, m);
  }
};
Td.defaultProps = { onlyValue: !1, addButtonElement: u.createElement("button", null, "+"), cancelButtonElement: u.createElement("button", null, "c") };
var mh = class extends D.Component {
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
    let { onUpdate: i } = this.props, c = l.length;
    i(l[c - 1], a);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: r, logger: a } = this.props, { data: l, keyPath: i, nextDeep: c } = this.state, d = l[e];
      r(e, i, c, d).then(() => {
        let m = { keyPath: i, deep: c, key: e, oldValue: d, type: dh };
        l.splice(e, 1), this.setState({ data: l });
        let { onUpdate: p, onDeltaUpdate: h } = this.props;
        p(i[i.length - 1], l), h(m);
      }).catch(a.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: r, keyPath: a, nextDeep: l } = this.state, { beforeAddAction: i, logger: c } = this.props;
    i(r.length, a, l, e).then(() => {
      let d = [...r, e];
      this.setState({ data: d }), this.handleAddValueCancel();
      let { onUpdate: m, onDeltaUpdate: p } = this.props;
      m(a[a.length - 1], d), p({ type: ch, keyPath: a, deep: l, key: d.length - 1, newValue: e });
    }).catch(c.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: r }) {
    return new Promise((a, l) => {
      let { beforeUpdateAction: i } = this.props, { data: c, keyPath: d, nextDeep: m } = this.state, p = c[e];
      i(e, d, m, p, r).then(() => {
        c[e] = r, this.setState({ data: c });
        let { onUpdate: h, onDeltaUpdate: y } = this.props;
        h(d[d.length - 1], c), y({ type: ph, keyPath: d, deep: m, key: e, newValue: r, oldValue: p }), a(void 0);
      }).catch(l);
    });
  }
  renderCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l } = this.state, { handleRemove: i, readOnly: c, getStyle: d, dataType: m, minusMenuElement: p } = this.props, { minus: h, collapsed: y } = d(e, r, a, l, m), w = c(e, r, a, l, m), x = D.cloneElement(p, { onClick: i, className: "rejt-minus-menu", style: h });
    return u.createElement("span", { className: "rejt-collapsed" }, u.createElement("span", { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode }, "[...] ", r.length, " ", r.length === 1 ? "item" : "items"), !w && x);
  }
  renderNotCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l, addFormVisible: i, nextDeep: c } = this.state, { isCollapsed: d, handleRemove: m, onDeltaUpdate: p, readOnly: h, getStyle: y, dataType: w, addButtonElement: x, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: C, minusMenuElement: A, plusMenuElement: T, beforeRemoveAction: k, beforeAddAction: _, beforeUpdateAction: O, logger: L, onSubmitValueParser: $ } = this.props, { minus: M, plus: j, delimiter: Z, ul: V, addForm: Q } = y(e, r, a, l, w), Y = h(e, r, a, l, w), pe = D.cloneElement(T, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: j }), J = D.cloneElement(A, { onClick: m, className: "rejt-minus-menu", style: M }), re = !0, ae = "[", q = "]";
    return u.createElement("span", { className: "rejt-not-collapsed" }, u.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, ae), !i && pe, u.createElement("ul", { className: "rejt-not-collapsed-list", style: V }, r.map((W, F) => u.createElement(Su, { key: F, name: F.toString(), data: W, keyPath: a, deep: c, isCollapsed: d, handleRemove: this.handleRemoveItem(F), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: x, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: C, minusMenuElement: A, plusMenuElement: T, beforeRemoveAction: k, beforeAddAction: _, beforeUpdateAction: O, logger: L, onSubmitValueParser: $ }))), !Y && i && u.createElement("div", { className: "rejt-add-form", style: Q }, u.createElement(Td, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: re, addButtonElement: x, cancelButtonElement: v, inputElementGenerator: b, keyPath: a, deep: l, onSubmitValueParser: $ })), u.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Z }, q), !Y && J);
  }
  render() {
    let { name: e, collapsed: r, data: a, keyPath: l, deep: i } = this.state, { dataType: c, getStyle: d } = this.props, m = r ? this.renderCollapsed() : this.renderNotCollapsed(), p = d(e, a, l, i, c);
    return u.createElement("div", { className: "rejt-array-node" }, u.createElement("span", { onClick: this.handleCollapseMode }, u.createElement("span", { className: "rejt-name", style: p.name }, e, " :", " ")), m);
  }
};
mh.defaultProps = { keyPath: [], deep: 0, minusMenuElement: u.createElement("span", null, " - "), plusMenuElement: u.createElement("span", null, " + ") };
var gh = class extends D.Component {
  constructor(e) {
    super(e);
    let r = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: r, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.value !== r.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: r, name: a, value: l, keyPath: i, deep: c } = this.state, { readOnly: d, dataType: m } = this.props, p = d(a, l, i, c, m);
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
    let { handleUpdateValue: e, originalValue: r, logger: a, onSubmitValueParser: l, keyPath: i } = this.props, { inputRef: c, name: d, deep: m } = this.state;
    if (!c)
      return;
    let p = l(!0, i, m, d, c.value);
    e({ value: p, key: d }).then(() => {
      fh(r, p) || this.handleCancelEdit();
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
    let { name: e, value: r, editEnabled: a, keyPath: l, deep: i } = this.state, { handleRemove: c, originalValue: d, readOnly: m, dataType: p, getStyle: h, editButtonElement: y, cancelButtonElement: w, textareaElementGenerator: x, minusMenuElement: v, keyPath: E } = this.props, b = h(e, d, l, i, p), C = null, A = null, T = m(e, d, l, i, p);
    if (a && !T) {
      let k = x(Od, E, i, e, d, p), _ = D.cloneElement(y, { onClick: this.handleEdit }), O = D.cloneElement(w, { onClick: this.handleCancelEdit }), L = D.cloneElement(k, { ref: this.refInput, defaultValue: d });
      C = u.createElement("span", { className: "rejt-edit-form", style: b.editForm }, L, " ", O, _), A = null;
    } else {
      C = u.createElement("span", { className: "rejt-value", style: b.value, onClick: T ? null : this.handleEditMode }, r);
      let k = D.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: b.minus });
      A = T ? null : k;
    }
    return u.createElement("li", { className: "rejt-function-value-node", style: b.li }, u.createElement("span", { className: "rejt-name", style: b.name }, e, " :", " "), C, A);
  }
};
gh.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: u.createElement("button", null, "e"), cancelButtonElement: u.createElement("button", null, "c"), minusMenuElement: u.createElement("span", null, " - ") };
var Su = class extends D.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, r) {
    return e.data !== r.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: r, keyPath: a, deep: l } = this.state, { isCollapsed: i, handleRemove: c, handleUpdateValue: d, onUpdate: m, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: w, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: C, plusMenuElement: A, beforeRemoveAction: T, beforeAddAction: k, beforeUpdateAction: _, logger: O, onSubmitValueParser: L } = this.props, $ = () => !0, M = kn(e);
    switch (M) {
      case jL:
        return u.createElement(b0, { data: e, name: r, isCollapsed: i, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: $, dataType: M, getStyle: y, addButtonElement: w, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: C, plusMenuElement: A, beforeRemoveAction: T, beforeAddAction: k, beforeUpdateAction: _, logger: O, onSubmitValueParser: L });
      case HL:
        return u.createElement(b0, { data: e, name: r, isCollapsed: i, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: h, dataType: M, getStyle: y, addButtonElement: w, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: C, plusMenuElement: A, beforeRemoveAction: T, beforeAddAction: k, beforeUpdateAction: _, logger: O, onSubmitValueParser: L });
      case ZL:
        return u.createElement(mh, { data: e, name: r, isCollapsed: i, keyPath: a, deep: l, handleRemove: c, onUpdate: m, onDeltaUpdate: p, readOnly: h, dataType: M, getStyle: y, addButtonElement: w, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, textareaElementGenerator: b, minusMenuElement: C, plusMenuElement: A, beforeRemoveAction: T, beforeAddAction: k, beforeUpdateAction: _, logger: O, onSubmitValueParser: L });
      case zL:
        return u.createElement(An, { name: r, value: `"${e}"`, originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case VL:
        return u.createElement(An, { name: r, value: e, originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case UL:
        return u.createElement(An, { name: r, value: e ? "true" : "false", originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case qL:
        return u.createElement(An, { name: r, value: e.toISOString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: $, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case WL:
        return u.createElement(An, { name: r, value: "null", originalValue: "null", keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case GL:
        return u.createElement(An, { name: r, value: "undefined", originalValue: "undefined", keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case KL:
        return u.createElement(gh, { name: r, value: e.toString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: h, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, textareaElementGenerator: b, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      case YL:
        return u.createElement(An, { name: r, value: e.toString(), originalValue: e, keyPath: a, deep: l, handleRemove: c, handleUpdateValue: d, readOnly: $, dataType: M, getStyle: y, cancelButtonElement: x, editButtonElement: v, inputElementGenerator: E, minusMenuElement: C, logger: O, onSubmitValueParser: L });
      default:
        return null;
    }
  }
};
Su.defaultProps = { keyPath: [], deep: 0 };
var b0 = class extends D.Component {
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
    let { onUpdate: i } = this.props, c = l.length;
    i(l[c - 1], a);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: r }) {
    let { data: a, keyPath: l, nextDeep: i } = this.state, { beforeAddAction: c, logger: d } = this.props;
    c(e, l, i, r).then(() => {
      a[e] = r, this.setState({ data: a }), this.handleAddValueCancel();
      let { onUpdate: m, onDeltaUpdate: p } = this.props;
      m(l[l.length - 1], a), p({ type: ch, keyPath: l, deep: i, key: e, newValue: r });
    }).catch(d.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: r, logger: a } = this.props, { data: l, keyPath: i, nextDeep: c } = this.state, d = l[e];
      r(e, i, c, d).then(() => {
        let m = { keyPath: i, deep: c, key: e, oldValue: d, type: dh };
        delete l[e], this.setState({ data: l });
        let { onUpdate: p, onDeltaUpdate: h } = this.props;
        p(i[i.length - 1], l), h(m);
      }).catch(a.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: r }) {
    return new Promise((a, l) => {
      let { beforeUpdateAction: i } = this.props, { data: c, keyPath: d, nextDeep: m } = this.state, p = c[e];
      i(e, d, m, p, r).then(() => {
        c[e] = r, this.setState({ data: c });
        let { onUpdate: h, onDeltaUpdate: y } = this.props;
        h(d[d.length - 1], c), y({ type: ph, keyPath: d, deep: m, key: e, newValue: r, oldValue: p }), a();
      }).catch(l);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: r, deep: a, data: l } = this.state, { handleRemove: i, readOnly: c, dataType: d, getStyle: m, minusMenuElement: p } = this.props, { minus: h, collapsed: y } = m(e, l, r, a, d), w = Object.getOwnPropertyNames(l), x = c(e, l, r, a, d), v = D.cloneElement(p, { onClick: i, className: "rejt-minus-menu", style: h });
    return u.createElement("span", { className: "rejt-collapsed" }, u.createElement("span", { className: "rejt-collapsed-text", style: y, onClick: this.handleCollapseMode }, "{...}", " ", w.length, " ", w.length === 1 ? "key" : "keys"), !x && v);
  }
  renderNotCollapsed() {
    let { name: e, data: r, keyPath: a, deep: l, nextDeep: i, addFormVisible: c } = this.state, { isCollapsed: d, handleRemove: m, onDeltaUpdate: p, readOnly: h, getStyle: y, dataType: w, addButtonElement: x, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: C, minusMenuElement: A, plusMenuElement: T, beforeRemoveAction: k, beforeAddAction: _, beforeUpdateAction: O, logger: L, onSubmitValueParser: $ } = this.props, { minus: M, plus: j, addForm: Z, ul: V, delimiter: Q } = y(e, r, a, l, w), Y = Object.getOwnPropertyNames(r), pe = h(e, r, a, l, w), J = D.cloneElement(T, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: j }), re = D.cloneElement(A, { onClick: m, className: "rejt-minus-menu", style: M }), ae = Y.map((F) => u.createElement(Su, { key: F, name: F, data: r[F], keyPath: a, deep: i, isCollapsed: d, handleRemove: this.handleRemoveValue(F), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: p, readOnly: h, getStyle: y, addButtonElement: x, cancelButtonElement: v, editButtonElement: E, inputElementGenerator: b, textareaElementGenerator: C, minusMenuElement: A, plusMenuElement: T, beforeRemoveAction: k, beforeAddAction: _, beforeUpdateAction: O, logger: L, onSubmitValueParser: $ })), q = "{", W = "}";
    return u.createElement("span", { className: "rejt-not-collapsed" }, u.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Q }, q), !pe && J, u.createElement("ul", { className: "rejt-not-collapsed-list", style: V }, ae), !pe && c && u.createElement("div", { className: "rejt-add-form", style: Z }, u.createElement(Td, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: x, cancelButtonElement: v, inputElementGenerator: b, keyPath: a, deep: l, onSubmitValueParser: $ })), u.createElement("span", { className: "rejt-not-collapsed-delimiter", style: Q }, W), !pe && re);
  }
  render() {
    let { name: e, collapsed: r, data: a, keyPath: l, deep: i } = this.state, { getStyle: c, dataType: d } = this.props, m = r ? this.renderCollapsed() : this.renderNotCollapsed(), p = c(e, a, l, i, d);
    return u.createElement("div", { className: "rejt-object-node" }, u.createElement("span", { onClick: this.handleCollapseMode }, u.createElement("span", { className: "rejt-name", style: p.name }, e, " :", " ")), m);
  }
};
b0.defaultProps = { keyPath: [], deep: 0, minusMenuElement: u.createElement("span", null, " - "), plusMenuElement: u.createElement("span", null, " + ") };
var An = class extends D.Component {
  constructor(e) {
    super(e);
    let r = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: r, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, r) {
    return e.value !== r.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: r, name: a, value: l, keyPath: i, deep: c } = this.state, { readOnly: d, dataType: m } = this.props, p = d(a, l, i, c, m);
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
    let { handleUpdateValue: e, originalValue: r, logger: a, onSubmitValueParser: l, keyPath: i } = this.props, { inputRef: c, name: d, deep: m } = this.state;
    if (!c)
      return;
    let p = l(!0, i, m, d, c.value);
    e({ value: p, key: d }).then(() => {
      fh(r, p) || this.handleCancelEdit();
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
    let { name: e, value: r, editEnabled: a, keyPath: l, deep: i } = this.state, { handleRemove: c, originalValue: d, readOnly: m, dataType: p, getStyle: h, editButtonElement: y, cancelButtonElement: w, inputElementGenerator: x, minusMenuElement: v, keyPath: E } = this.props, b = h(e, d, l, i, p), C = m(e, d, l, i, p), A = a && !C, T = x(Od, E, i, e, d, p), k = D.cloneElement(y, { onClick: this.handleEdit }), _ = D.cloneElement(w, { onClick: this.handleCancelEdit }), O = D.cloneElement(T, { ref: this.refInput, defaultValue: JSON.stringify(d) }), L = D.cloneElement(v, { onClick: c, className: "rejt-minus-menu", style: b.minus });
    return u.createElement("li", { className: "rejt-value-node", style: b.li }, u.createElement("span", { className: "rejt-name", style: b.name }, e, " : "), A ? u.createElement("span", { className: "rejt-edit-form", style: b.editForm }, O, " ", _, k) : u.createElement("span", { className: "rejt-value", style: b.value, onClick: C ? null : this.handleEditMode }, String(r)), !C && !A && L);
  }
};
An.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: u.createElement("button", null, "e"), cancelButtonElement: u.createElement("button", null, "c"), minusMenuElement: u.createElement("span", null, " - ") };
var XL = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, QL = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, JL = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function eD(e) {
  let r = e;
  if (r.indexOf("function") === 0)
    return (0, eval)(`(${r})`);
  try {
    r = JSON.parse(e);
  } catch {
  }
  return r;
}
var hh = class extends D.Component {
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
    let { data: e, rootName: r } = this.state, { isCollapsed: a, onDeltaUpdate: l, readOnly: i, getStyle: c, addButtonElement: d, cancelButtonElement: m, editButtonElement: p, inputElement: h, textareaElement: y, minusMenuElement: w, plusMenuElement: x, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: b, logger: C, onSubmitValueParser: A, fallback: T = null } = this.props, k = kn(e), _ = i;
    kn(i) === "Boolean" && (_ = () => i);
    let O = h;
    h && kn(h) !== "Function" && (O = () => h);
    let L = y;
    return y && kn(y) !== "Function" && (L = () => y), k === "Object" || k === "Array" ? u.createElement("div", { className: "rejt-tree" }, u.createElement(Su, { data: e, name: r, deep: -1, isCollapsed: a, onUpdate: this.onUpdate, onDeltaUpdate: l, readOnly: _, getStyle: c, addButtonElement: d, cancelButtonElement: m, editButtonElement: p, inputElementGenerator: O, textareaElementGenerator: L, minusMenuElement: w, plusMenuElement: x, handleRemove: this.removeRoot, beforeRemoveAction: v, beforeAddAction: E, beforeUpdateAction: b, logger: C, onSubmitValueParser: A })) : T;
  }
};
hh.defaultProps = { rootName: "root", isCollapsed: (e, r) => r !== -1, getStyle: (e, r, a, l, i) => {
  switch (i) {
    case "Object":
    case "Error":
      return XL;
    case "Array":
      return QL;
    default:
      return JL;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, r, a, l, i) => eD(i), inputElement: () => u.createElement("input", null), textareaElement: () => u.createElement("textarea", null), fallback: null };
var { window: tD } = gt, rD = P.div(({ theme: e }) => ({ position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), Hc = P.button(({ theme: e, primary: r }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: r ? e.color.secondary : "transparent", color: r ? e.color.lightest : e.color.dark, fontWeight: r ? "bold" : "normal", cursor: "pointer", order: r ? "initial" : 9 })), o5 = P(Lt)(({ theme: e, icon: r, disabled: a }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: a ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": a ? {} : { color: r === "subtract" ? e.color.negative : e.color.ancillary }, "svg + &": { marginLeft: 0 } })), l5 = P.input(({ theme: e, placeholder: r }) => ({ outline: 0, margin: r ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: r === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), nD = P(Jn)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), aD = P(gr.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), oD = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, lD = (e) => {
  e.currentTarget.dispatchEvent(new tD.KeyboardEvent("keydown", oD));
}, iD = (e) => {
  e.currentTarget.select();
}, uD = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), i5 = ({ name: e, value: r, onChange: a }) => {
  let l = _4(), i = D.useMemo(() => r && rT(r), [r]), c = i != null, [d, m] = D.useState(!c), [p, h] = D.useState(null), y = D.useCallback((C) => {
    try {
      C && a(JSON.parse(C)), h(void 0);
    } catch (A) {
      h(A);
    }
  }, [a]), [w, x] = D.useState(!1), v = D.useCallback(() => {
    a({}), x(!0);
  }, [x]), E = D.useRef(null);
  if (D.useEffect(() => {
    w && E.current && E.current.select();
  }, [w]), !c)
    return u.createElement(gr.Button, { id: Yi(e), onClick: v }, "Set object");
  let b = u.createElement(aD, { ref: E, id: hr(e), name: e, defaultValue: r === null ? "" : JSON.stringify(r, null, 2), onBlur: (C) => y(C.target.value), placeholder: "Edit JSON string...", autoFocus: w, valid: p ? "error" : null });
  return u.createElement(rD, null, ["Object", "Array"].includes(kn(i)) && u.createElement(nD, { href: "#", onClick: (C) => {
    C.preventDefault(), m((A) => !A);
  } }, u.createElement(Lt, { icon: d ? "eyeclose" : "eye" }), u.createElement("span", null, "RAW")), d ? b : u.createElement(hh, { data: i, rootName: e, onFullyUpdate: a, getStyle: uD(l), cancelButtonElement: u.createElement(Hc, { type: "button" }, "Cancel"), editButtonElement: u.createElement(Hc, { type: "submit" }, "Save"), addButtonElement: u.createElement(Hc, { type: "submit", primary: !0 }, "Save"), plusMenuElement: u.createElement(o5, { icon: "add" }), minusMenuElement: u.createElement(o5, { icon: "subtract" }), inputElement: (C, A, T, k) => k ? u.createElement(l5, { onFocus: iD, onBlur: lD }) : u.createElement(l5, null), fallback: b }));
}, sD = P.input(({ theme: e, min: r, max: a, value: l }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${Kr(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${Kr(e.appBorderColor, 0.2)}`, cursor: "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Cr(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: Kr(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${Kr(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${Kr(e.appBorderColor, 0.2)}`, cursor: "grab", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${Cr(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Cr(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} ${(l - r) / (a - r) * 100}%, 
            ${Kn(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${Kr(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), yh = P.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" }), cD = P(yh)(({ numberOFDecimalsPlaces: e, max: r }) => ({ width: `${e + r.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), dD = P.div({ display: "flex", alignItems: "center", width: "100%" });
function pD(e) {
  let r = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return r ? Math.max(0, (r[1] ? r[1].length : 0) - (r[2] ? +r[2] : 0)) : 0;
}
var fD = ({ name: e, value: r, onChange: a, min: l = 0, max: i = 100, step: c = 1, onBlur: d, onFocus: m }) => {
  let p = (w) => {
    a(kL(w.target.value));
  }, h = r !== void 0, y = D.useMemo(() => pD(c), [c]);
  return u.createElement(dD, null, u.createElement(yh, null, l), u.createElement(sD, { id: hr(e), type: "range", onChange: p, name: e, value: r, min: l, max: i, step: c, onFocus: m, onBlur: d }), u.createElement(cD, { numberOFDecimalsPlaces: y, max: i }, h ? r.toFixed(y) : "--", " / ", i));
}, mD = P.label({ display: "flex" }), gD = P.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), hD = ({ name: e, value: r, onChange: a, onFocus: l, onBlur: i, maxLength: c }) => {
  let d = (w) => {
    a(w.target.value);
  }, [m, p] = D.useState(!1), h = D.useCallback(() => {
    a(""), p(!0);
  }, [p]);
  if (r === void 0)
    return u.createElement(gr.Button, { id: Yi(e), onClick: h }, "Set string");
  let y = typeof r == "string";
  return u.createElement(mD, null, u.createElement(gr.Textarea, { id: hr(e), maxLength: c, onChange: d, size: "flex", placeholder: "Edit string...", autoFocus: m, valid: y ? null : "error", name: e, value: y ? r : "", onFocus: l, onBlur: i }), c && u.createElement(gD, { isMaxed: r?.length === c }, r?.length ?? 0, " / ", c));
}, yD = P(gr.Input)({ padding: 10 });
function vD(e) {
  e.forEach((r) => {
    r.startsWith("blob:") && URL.revokeObjectURL(r);
  });
}
var bD = ({ onChange: e, name: r, accept: a = "image/*", value: l }) => {
  let i = D.useRef(null);
  function c(d) {
    if (!d.target.files)
      return;
    let m = Array.from(d.target.files).map((p) => URL.createObjectURL(p));
    e(m), vD(l);
  }
  return D.useEffect(() => {
    l == null && i.current && (i.current.value = null);
  }, [l, r]), u.createElement(yD, { ref: i, id: hr(r), type: "file", name: r, multiple: !0, onChange: c, accept: a, size: "flex" });
}, ED = D.lazy(() => import("./Color-6VNJS4EI-eff9d6f4.mjs")), xD = (e) => u.createElement(D.Suspense, { fallback: u.createElement("div", null) }, u.createElement(ED, { ...e })), wD = { array: i5, object: i5, boolean: vL, color: xD, date: AL, number: _L, check: Fa, "inline-check": Fa, radio: Fa, "inline-radio": Fa, select: Fa, "multi-select": Fa, range: fD, text: hD, file: bD }, u5 = () => u.createElement(u.Fragment, null, "-"), SD = ({ row: e, arg: r, updateArgs: a }) => {
  let { key: l, control: i } = e, [c, d] = D.useState(!1), [m, p] = D.useState({ value: r });
  D.useEffect(() => {
    c || p({ value: r });
  }, [c, r]);
  let h = D.useCallback((E) => (p({ value: E }), a({ [l]: E }), E), [a, l]), y = D.useCallback(() => d(!1), []), w = D.useCallback(() => d(!0), []);
  if (!i || i.disable)
    return u.createElement(u5, null);
  let x = { name: l, argType: e, value: m.value, onChange: h, onBlur: y, onFocus: w }, v = wD[i.type] || u5;
  return u.createElement(v, { ...x, ...i, controlType: i.type });
}, AD = P.span({ fontWeight: "bold" }), CD = P.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), kD = P.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...Xr({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), _D = P.div(({ theme: e, hasDescription: r }) => ({ color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.2, e.color.defaultText), marginTop: r ? 4 : 0 })), OD = P.div(({ theme: e, hasDescription: r }) => ({ color: e.base === "light" ? je(0.1, e.color.defaultText) : je(0.2, e.color.defaultText), marginTop: r ? 12 : 0, marginBottom: 12 })), TD = P.td(({ theme: e, expandable: r }) => ({ paddingLeft: r ? "40px !important" : "20px !important" })), _i = (e) => {
  let { row: r, updateArgs: a, compact: l, expandable: i, initialExpandedArgs: c } = e, { name: d, description: m } = r, p = r.table || {}, h = p.type || r.type, y = p.defaultValue || r.defaultValue, w = r.type?.required, x = m != null && m !== "";
  return u.createElement("tr", null, u.createElement(TD, { expandable: i }, u.createElement(AD, null, d), w ? u.createElement(CD, { title: "Required" }, "*") : null), l ? null : u.createElement("td", null, x && u.createElement(kD, null, u.createElement(zg, null, m)), p.jsDocTags != null ? u.createElement(u.Fragment, null, u.createElement(OD, { hasDescription: x }, u.createElement(jc, { value: h, initialExpandedArgs: c })), u.createElement(lL, { tags: p.jsDocTags })) : u.createElement(_D, { hasDescription: x }, u.createElement(jc, { value: h, initialExpandedArgs: c }))), l ? null : u.createElement("td", null, u.createElement(jc, { value: y, initialExpandedArgs: c })), a ? u.createElement("td", null, u.createElement(SD, { ...e })) : null);
}, FD = P(Lt)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? je(0.25, e.color.defaultText) : je(0.3, e.color.defaultText), border: "none", display: "inline-block" })), RD = P.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), LD = P.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), DD = P.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), MD = P.td(() => ({ position: "relative" })), $D = P.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${Kn(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), s5 = P.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), Zc = ({ level: e = "section", label: r, children: a, initialExpanded: l = !0, colSpan: i = 3 }) => {
  let [c, d] = D.useState(l), m = e === "subsection" ? DD : LD, p = a?.length || 0, h = e === "subsection" ? `${p} item${p !== 1 ? "s" : ""}` : "", y = c ? "arrowdown" : "arrowright", w = `${c ? "Hide" : "Show"} ${e === "subsection" ? p : r} item${p !== 1 ? "s" : ""}`;
  return u.createElement(u.Fragment, null, u.createElement($D, { title: w }, u.createElement(m, { colSpan: 1 }, u.createElement(s5, { onClick: (x) => d(!c), tabIndex: 0 }, w), u.createElement(RD, null, u.createElement(FD, { icon: y }), r)), u.createElement(MD, { colSpan: i - 1 }, u.createElement(s5, { onClick: (x) => d(!c), tabIndex: -1, style: { outline: "none" } }, w), c ? null : h)), c ? a : null);
}, BD = P.table(({ theme: e, compact: r, inAddonPanel: a }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: a ? 0 : 25, marginBottom: a ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...r ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...r ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...r ? null : { width: "25%" } }, th: { color: e.base === "light" ? je(0.25, e.color.defaultText) : je(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: a ? 0 : 1, marginRight: a ? 0 : 1, tbody: { ...a ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...a ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } }), ({ isLoading: e, theme: r }) => e ? { "th span, td span, td button": { display: "inline", backgroundColor: r.appBorderColor, animation: `${r.animation.glow} 1.5s ease-in-out infinite`, color: "transparent", boxShadow: "none", borderRadius: 0 } } : {}), ID = P(Jn)(({ theme: e }) => ({ color: e.barTextColor, margin: "-4px -12px -4px 0" })), PD = P.span({ display: "flex", justifyContent: "space-between" }), ND = { alpha: (e, r) => e.name.localeCompare(r.name), requiredFirst: (e, r) => +!!r.type?.required - +!!e.type?.required || e.name.localeCompare(r.name), none: void 0 }, zc = (e) => ({ key: e, name: "propertyName", description: "This is a short description", control: { type: "text" }, table: { type: { summary: "summary" }, defaultValue: { summary: "defaultValue" } } }), jD = { rows: { row1: zc("row1"), row2: zc("row2"), row3: zc("row3") } }, HD = (e, r) => {
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
  let l = ND[r], i = (c) => l ? Object.keys(c).reduce((d, m) => ({ ...d, [m]: c[m].sort(l) }), {}) : c;
  return { ungrouped: a.ungrouped.sort(l), ungroupedSubsections: i(a.ungroupedSubsections), sections: Object.keys(a.sections).reduce((c, d) => ({ ...c, [d]: { ungrouped: a.sections[d].ungrouped.sort(l), subsections: i(a.sections[d].subsections) } }), {}) };
}, ZD = (e, r, a) => {
  try {
    return Bv(e, r, a);
  } catch (l) {
    return _R.warn(l.message), !1;
  }
}, zD = (e) => {
  if ("error" in e)
    return u.createElement(m0, null, e.error, " ", u.createElement(qi, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  let { updateArgs: r, resetArgs: a, compact: l, inAddonPanel: i, initialExpandedArgs: c, sort: d = "none" } = e, m = "isLoading" in e, { rows: p, args: h, globals: y } = "rows" in e ? e : jD, w = HD(LA(p, (b) => !b?.table?.disable && ZD(b, h || {}, y || {})), d);
  if (w.ungrouped.length === 0 && Object.entries(w.sections).length === 0 && Object.entries(w.ungroupedSubsections).length === 0)
    return u.createElement(m0, null, "No inputs found for this component. ", u.createElement(qi, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, "Read the docs"));
  let x = 1;
  r && (x += 1), l || (x += 2);
  let v = Object.keys(w.sections).length > 0, E = { updateArgs: r, compact: l, inAddonPanel: i, initialExpandedArgs: c };
  return u.createElement(nd, null, u.createElement(BD, { "aria-hidden": m, compact: l, inAddonPanel: i, isLoading: m, className: "docblock-argstable sb-unstyled" }, u.createElement("thead", { className: "docblock-argstable-head" }, u.createElement("tr", null, u.createElement("th", null, u.createElement("span", null, "Name")), l ? null : u.createElement("th", null, u.createElement("span", null, "Description")), l ? null : u.createElement("th", null, u.createElement("span", null, "Default")), r ? u.createElement("th", null, u.createElement(PD, null, "Control", " ", !m && a && u.createElement(ID, { onClick: () => a(), title: "Reset controls" }, u.createElement(Lt, { icon: "undo", "aria-hidden": !0 })))) : null)), u.createElement("tbody", { className: "docblock-argstable-body" }, w.ungrouped.map((b) => u.createElement(_i, { key: b.key, row: b, arg: h && h[b.key], ...E })), Object.entries(w.ungroupedSubsections).map(([b, C]) => u.createElement(Zc, { key: b, label: b, level: "subsection", colSpan: x }, C.map((A) => u.createElement(_i, { key: A.key, row: A, arg: h && h[A.key], expandable: v, ...E })))), Object.entries(w.sections).map(([b, C]) => u.createElement(Zc, { key: b, label: b, level: "section", colSpan: x }, C.ungrouped.map((A) => u.createElement(_i, { key: A.key, row: A, arg: h && h[A.key], ...E })), Object.entries(C.subsections).map(([A, T]) => u.createElement(Zc, { key: A, label: A, level: "subsection", colSpan: x }, T.map((k) => u.createElement(_i, { key: k.key, row: k, arg: h && h[k.key], expandable: v, ...E })))))))));
};
P.div(({ theme: e }) => ({ background: e.background.warning, color: e.color.darkest, padding: "10px 15px", lineHeight: "20px", boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset` }));
P.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
P.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
P.div(He, ({ theme: e }) => ({ ...wu(e), margin: "25px 0 40px", padding: "30px 20px" }));
P.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
P.div(({ theme: e }) => ({ color: e.base === "light" ? je(0.2, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
P.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
P.div({ display: "flex", flexDirection: "row" });
P.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
P.div(({ theme: e }) => ({ ...wu(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
P.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
P.div({ flex: 1, display: "flex", flexDirection: "row" });
P.div({ display: "flex", alignItems: "flex-start" });
P.div({ flex: "0 0 30%" });
P.div({ flex: 1 });
P.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? je(0.4, e.color.defaultText) : je(0.6, e.color.defaultText) }));
P.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
P.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
P.div(({ theme: e }) => ({ ...wu(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
P.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
P.div({ display: "flex", flexFlow: "row wrap" });
var VD = (e) => `anchor--${e}`, vh = ({ storyId: e, children: r }) => u.createElement("div", { id: VD(e), className: "sb-anchor" }, r);
gt && gt.__DOCS_CONTEXT__ === void 0 && (gt.__DOCS_CONTEXT__ = D.createContext(null), gt.__DOCS_CONTEXT__.displayName = "DocsContext");
var Mt = gt ? gt.__DOCS_CONTEXT__ : D.createContext(null), Au = (e, r) => D.useContext(Mt).resolveOf(e, r);
function UD(e, r = "start") {
  e.scrollIntoView({ behavior: "smooth", block: r, inline: "nearest" });
}
function qD(e, r) {
  let a = Fd([e], r);
  return a && a[0];
}
function Fd(e, r) {
  let [a, l] = D.useState({});
  return D.useEffect(() => {
    Promise.all(e.map(async (i) => {
      let c = await r.loadStory(i);
      l((d) => d[i] === c ? d : { ...d, [i]: c });
    }));
  }), e.map((i) => {
    if (a[i])
      return a[i];
    try {
      return r.storyById(i);
    } catch {
      return null;
    }
  });
}
function bh(e) {
  return ER(e);
}
var Eh = D.createContext({ sources: {} }), xh = "--unknown--", WD = ({ children: e, channel: r }) => {
  let [a, l] = D.useState({});
  return D.useEffect(() => {
    let i = (c, d = null, m = !1) => {
      let { id: p, args: h = void 0, source: y, format: w } = typeof c == "string" ? { id: c, source: d, format: m } : c, x = h ? bh(h) : xh;
      l((v) => ({ ...v, [p]: { ...v[p], [x]: { code: y, format: w } } }));
    };
    return r.on(ff, i), () => r.off(ff, i);
  }, []), u.createElement(Eh.Provider, { value: { sources: a } }, e);
}, GD = ((e) => (e.OPEN = "open", e.CLOSED = "closed", e.NONE = "none", e))(GD || {}), KD = (e) => {
  let r = e.map((a) => a.parameters.docs?.source?.state).filter(Boolean);
  return r.length === 0 ? "closed" : r[0];
}, YD = (e, r, a) => {
  let { sources: l } = a, i = l?.[e];
  return i?.[bh(r)] || i?.[xh] || { code: "" };
}, XD = ({ snippet: e, storyContext: r, typeFromProps: a, transformFromProps: l }) => {
  let { __isArgsStory: i } = r.parameters, c = r.parameters.docs?.source || {}, d = a || c.type || uc.AUTO;
  if (c.code !== void 0)
    return c.code;
  let m = d === uc.DYNAMIC || d === uc.AUTO && e && i ? e : c.originalSource || "";
  return c.transformSource && it(Tt`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), r.parameters.docs?.transformSource && it(Tt`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), r.parameters.jsx?.transformSource && it(Tt`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `), (l ?? c.transform ?? c.transformSource ?? r.parameters.docs?.transformSource ?? r.parameters.jsx?.transformSource)?.(m, r) || m;
}, wh = (e, r, a) => {
  let l = e.ids || (e.id ? [e.id] : []), i = Fd(l, r), c = i, { of: d } = e;
  if ("of" in e && d === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (d)
    c = [r.resolveOf(d, ["story"]).story];
  else if (c.length === 0)
    try {
      c = [r.storyById()];
    } catch {
    }
  if (!i.every(Boolean))
    return { error: "Oh no! The source is not available.", state: "none" };
  let m = c[0]?.parameters?.docs?.source || {}, { code: p } = e, h = e.format ?? m.format, y = e.language ?? m.language ?? "jsx", w = e.dark ?? m.dark ?? !1;
  p || (p = c.map((v, E) => {
    if (!v)
      return "";
    let b = r.getStoryContext(v), C = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs, A = YD(v.id, C, a);
    return E === 0 && (h = A.format ?? v.parameters.docs?.source?.format ?? !1), XD({ snippet: A.code, storyContext: { ...b, args: C }, typeFromProps: e.type, transformFromProps: e.transform });
  }).join(`

`));
  let x = KD(c);
  return p ? { code: p, format: h, language: y, dark: w, state: x } : { error: "Oh no! The source is not available.", state: x };
}, Sh = (e, r) => {
  let { id: a, of: l, meta: i, story: c } = e;
  if ("of" in e && l === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (a)
    return it(Tt`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), a;
  let { name: d } = e;
  return d ? (it(Tt`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), r.storyIdByName(d)) : (c && it(Tt`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`), i && r.referenceMeta(i, !1), r.resolveOf(l || c || "story", ["story"]).story.id);
}, QD = (e, r, a) => {
  let { parameters: l = {} } = r || {}, { docs: i = {} } = l, c = i.story || {};
  if (i.disable)
    return null;
  let { inlineStories: d, iframeHeight: m } = i;
  typeof d < "u" && it(Tt`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  let p = e.inline ?? c.inline ?? d ?? !1;
  if (typeof m < "u" && it(Tt`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `), p) {
    let y = e.height ?? c.height, w = e.autoplay ?? c.autoplay ?? !1;
    return { story: r, inline: !0, height: y, autoplay: w, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: a.renderStoryToElement };
  }
  let h = e.height ?? c.height ?? c.iframeHeight ?? m ?? "100px";
  return { story: r, inline: !1, height: h, primary: !!e.__primary };
}, JD = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let r = D.useContext(Mt), a = Sh(e, r), l = qD(a, r);
  if (!l)
    return u.createElement(_d, null);
  let i = QD(e, l, r);
  return i ? u.createElement(YR, { ...i }) : null;
}, eM = ({ withSource: e, mdxSource: r, children: a, layout: l, ...i }, c, d) => {
  let m = D.Children.toArray(a).filter((x) => x.props && (x.props.id || x.props.name || x.props.of)).map((x) => Sh(x.props, c)), p = Fd(m, c), h = p.some((x) => !x), y = wh({ ...r ? { code: decodeURI(r) } : { ids: m }, ...i.of && { of: i.of } }, c, d);
  if (e === "none")
    return { isLoading: h, previewProps: i };
  let w = l;
  return D.Children.forEach(a, (x) => {
    w || (w = x?.props?.parameters?.layout);
  }), p.forEach((x) => {
    w || !x || (w = x?.parameters.layout ?? x.parameters.docs?.canvas?.layout);
  }), { isLoading: h, previewProps: { ...i, layout: w ?? "padded", withSource: y, isExpanded: (e || y.state) === "open" } };
}, tM = (e) => {
  let r = D.useContext(Mt), a = D.useContext(Eh), { children: l, of: i, source: c } = e;
  if ("of" in e && i === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { isLoading: d, previewProps: m } = eM(e, r, a), p, h, y;
  try {
    ({ story: p } = Au(i || "story", ["story"]));
  } catch (C) {
    l || (y = C);
  }
  try {
    h = wh({ ...c, ...i && { of: i } }, r, a);
  } catch (C) {
    l || (y = C);
  }
  if (y)
    throw y;
  if (e.withSource && it(Tt`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), e.mdxSource && it(Tt`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), (e.isColumn !== void 0 || e.columns !== void 0) && it(Tt`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `), l)
    return it(Tt`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `), d ? u.createElement(aL, null) : u.createElement(h0, { ...m }, l);
  let w = e.layout ?? p.parameters.layout ?? p.parameters.docs?.canvas?.layout ?? "padded", x = e.withToolbar ?? p.parameters.docs?.canvas?.withToolbar ?? !1, v = e.additionalActions ?? p.parameters.docs?.canvas?.additionalActions, E = e.sourceState ?? p.parameters.docs?.canvas?.sourceState ?? "hidden", b = e.className ?? p.parameters.docs?.canvas?.className;
  return u.createElement(h0, { withSource: E === "none" ? void 0 : h, isExpanded: E === "shown", withToolbar: x, additionalActions: v, className: b, layout: w }, u.createElement(JD, { of: i || p.moduleExport, meta: e.meta, ...e.story }));
}, rM = (e, r) => {
  let a = r.getStoryContext(e), [l, i] = D.useState(a.globals);
  return D.useEffect(() => {
    let c = (d) => {
      i(d.globals);
    };
    return r.channel.on(X2, c), () => r.channel.off(X2, c);
  }, [r.channel]), [l];
}, nM = (e, r) => {
  let a = aM(e, r);
  if (!a)
    throw new Error("No result when story was defined");
  return a;
}, aM = (e, r) => {
  let a = e ? r.getStoryContext(e) : { args: {} }, { id: l } = e || { id: "none" }, [i, c] = D.useState(a.args);
  D.useEffect(() => {
    let p = (h) => {
      h.storyId === l && c(h.args);
    };
    return r.channel.on(Y2, p), () => r.channel.off(Y2, p);
  }, [l, r.channel]);
  let d = D.useCallback((p) => r.channel.emit(TR, { storyId: l, updatedArgs: p }), [l, r.channel]), m = D.useCallback((p) => r.channel.emit(FR, { storyId: l, argNames: p }), [l, r.channel]);
  return e && [i, d, m];
}, oM = (e) => {
  let { of: r } = e;
  if ("of" in e && r === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let a = D.useContext(Mt), { story: l } = a.resolveOf(r || "story", ["story"]), { parameters: i, argTypes: c } = l, d = i.docs?.controls || {}, m = e.include ?? d.include, p = e.exclude ?? d.exclude, h = e.sort ?? d.sort, [y, w, x] = nM(l, a), [v] = rM(l, a), E = OR(c, m, p);
  return u.createElement(zD, { rows: E, args: y, globals: v, updateArgs: w, resetArgs: x, sort: h });
}, { document: Ah } = gt, lM = ({ className: e, children: r, ...a }) => {
  if (typeof e != "string" && (typeof r != "string" || !r.match(/[\n\r]/g)))
    return u.createElement(ed, null, r);
  let l = e && e.split("-");
  return u.createElement(Cd, { language: l && l[1] || "plaintext", format: !1, code: r, ...a });
};
function Rd(e, r) {
  e.channel.emit(RR, r);
}
var E0 = lg.a, iM = ({ hash: e, children: r }) => {
  let a = D.useContext(Mt);
  return u.createElement(E0, { href: e, target: "_self", onClick: (l) => {
    let i = e.substring(1);
    Ah.getElementById(i) && Rd(a, e);
  } }, r);
}, uM = (e) => {
  let { href: r, target: a, children: l, ...i } = e, c = D.useContext(Mt);
  if (r) {
    if (r.startsWith("#"))
      return u.createElement(iM, { hash: r }, l);
    if (a !== "_blank" && !r.startsWith("https://"))
      return u.createElement(E0, { href: r, onClick: (d) => {
        d.button === 0 && !d.altKey && !d.ctrlKey && !d.metaKey && !d.shiftKey && (d.preventDefault(), Rd(c, d.currentTarget.getAttribute("href")));
      }, target: a, ...i }, l);
  }
  return u.createElement(E0, { ...e });
}, Ch = ["h1", "h2", "h3", "h4", "h5", "h6"], sM = Ch.reduce((e, r) => ({ ...e, [r]: P(r)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), cM = P.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), dM = ({ as: e, id: r, children: a, ...l }) => {
  let i = D.useContext(Mt), c = sM[e], d = `#${r}`;
  return u.createElement(c, { id: r, ...l }, u.createElement(cM, { "aria-hidden": "true", href: d, tabIndex: -1, target: "_self", onClick: (m) => {
    Ah.getElementById(r) && Rd(i, d);
  } }, u.createElement(Lt, { icon: "link" })), a);
}, Ld = (e) => {
  let { as: r, id: a, children: l, ...i } = e;
  if (a)
    return u.createElement(dM, { as: r, id: a, ...i }, l);
  let c = r, { as: d, ...m } = e;
  return u.createElement(c, { ...Ie(m, r) });
}, pM = Ch.reduce((e, r) => ({ ...e, [r]: (a) => u.createElement(Ld, { as: r, ...a }) }), {}), fM = (e) => {
  if (!e.children)
    return null;
  if (typeof e.children != "string")
    throw new Error(Tt`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
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
  return u.createElement(zg, { ...e, options: { forceBlock: !0, overrides: { code: lM, a: uM, ...pM, ...e?.options?.overrides }, ...e?.options } });
}, mM = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(mM || {}), Ni = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo", gM = (e) => e && (typeof e == "string" ? e : Vc(e.markdown) || Vc(e.text)), hM = (e) => e && (typeof e == "string" ? e : Vc(e.text)), yM = (e) => null, vM = (e) => {
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
}, bM = ({ type: e, markdown: r, children: a }, { storyById: l }) => {
  let { component: i, parameters: c } = l();
  if (a || r)
    return a || r;
  let { notes: d, info: m, docs: p } = c;
  (d || m) && it(`Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${Ni}`);
  let { extractComponentDescription: h = yM, description: y } = p || {}, w = y?.component;
  if (w)
    return w;
  switch (e) {
    case "info":
      return hM(m);
    case "notes":
      return gM(d);
    case "docgen":
    case "auto":
    default:
      return h(i, { component: i, ...c });
  }
}, x0 = (e) => {
  let { of: r, type: a, markdown: l, children: i } = e;
  if ("of" in e && r === void 0)
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let c = D.useContext(Mt), d = Au(r || "meta"), m;
  return a || l || i ? m = bM(e, c) : m = vM(d), a && it(`Manually specifying description type is deprecated. See ${Ni}`), l && it(`The 'markdown' prop on the Description block is deprecated. See ${Ni}`), i && it(`The 'children' prop on the Description block is deprecated. See ${Ni}`), m ? u.createElement(fM, null, m) : null;
}, EM = P.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), xM = P.div(({ theme: e }) => ({ position: "fixed", top: 0, width: "10rem", paddingTop: "4rem", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), wM = P.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), SM = ({ title: e }) => e === null ? null : typeof e == "string" ? u.createElement(wM, null, e) : e, AM = ({ title: e, disable: r, headingSelector: a, contentsSelector: l, ignoreSelector: i, unsafeTocbotOptions: c }) => (D.useEffect(() => {
  let d = { tocSelector: ".toc-wrapper", contentSelector: l ?? ".sbdocs-content", headingSelector: a ?? "h3", ignoreSelector: i ?? ".skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...c }, m = setTimeout(() => K2.init(d), 100);
  return () => {
    clearTimeout(m), K2.destroy();
  };
}, [r]), u.createElement(u.Fragment, null, u.createElement(EM, null, r ? null : u.createElement(xM, null, u.createElement(SM, { title: e || null }), u.createElement("div", { className: "toc-wrapper" }))))), { document: CM, window: kM } = gt, _M = ({ context: e, theme: r, children: a }) => {
  let l;
  try {
    l = e.resolveOf("meta", ["meta"]).preparedMeta.parameters?.docs?.toc;
  } catch {
    l = e?.projectAnnotations?.parameters?.docs?.toc;
  }
  return D.useEffect(() => {
    let i;
    try {
      if (i = new URL(kM.parent.location.toString()), i.hash) {
        let c = CM.getElementById(i.hash.substring(1));
        c && setTimeout(() => {
          UD(c);
        }, 200);
      }
    } catch {
    }
  }), u.createElement(Mt.Provider, { value: e }, u.createElement(WD, { channel: e.channel }, u.createElement(j5, { theme: sb(r) }, u.createElement(jR, { toc: l ? u.createElement(AM, { className: "sbdocs sbdocs-toc--custom", ...l }) : null }, a))));
}, OM = /\s*\/\s*/, TM = (e) => {
  let r = e.trim().split(OM);
  return r && r[r.length - 1] || e;
}, FM = ({ children: e }) => {
  let r = D.useContext(Mt), a = e || TM(r.storyById().title);
  return a ? u.createElement(BR, { className: "sbdocs-title sb-unstyled" }, a) : null;
}, RM = ({ children: e }) => {
  let r = D.useContext(Mt), { parameters: a } = r.storyById(), l = e || a?.componentSubtitle;
  return l ? u.createElement(IR, { className: "sbdocs-subtitle sb-unstyled" }, l) : null;
}, LM = ({ children: e, disableAnchor: r }) => {
  if (r || typeof e != "string")
    return u.createElement(rd, null, e);
  let a = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return u.createElement(Ld, { as: "h3", id: a }, e);
}, kh = ({ of: e, expanded: r = !0, withToolbar: a = !1, __forceInitialArgs: l = !1, __primary: i = !1 }) => {
  let { story: c } = Au(e || "story", ["story"]), d = c.parameters.docs?.canvas?.withToolbar ?? a;
  return u.createElement(vh, { storyId: c.id }, r && u.createElement(u.Fragment, null, u.createElement(LM, null, c.name), u.createElement(x0, { of: e })), u.createElement(tM, { of: e, withToolbar: d, story: { __forceInitialArgs: l, __primary: i }, source: { __forceInitialArgs: l } }));
}, DM = ({ name: e }) => {
  let r = D.useContext(Mt);
  e && it(Tt`\`name\` prop is deprecated on the Primary block.
    The Primary block should only be used to render the primary story, which is automatically found.
    `);
  let a = e && r.storyIdByName(e), l = r.storyById(a);
  return l ? u.createElement(kh, { of: l.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, MM = ({ children: e, disableAnchor: r, ...a }) => {
  if (r || typeof e != "string")
    return u.createElement(td, null, e);
  let l = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return u.createElement(Ld, { as: "h2", id: l, ...a }, e);
}, $M = P(MM)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), _h = ({ title: e, includePrimary: r = !0 }) => {
  let { componentStories: a } = D.useContext(Mt), l = a().filter((i) => !i.parameters?.docs?.disable);
  return r || (l = l.slice(1)), !l || l.length === 0 ? null : u.createElement(u.Fragment, null, u.createElement($M, null, e), l.map((i) => i && u.createElement(kh, { key: i.id, of: i.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
};
_h.defaultProps = { title: "Stories" };
var BM = () => {
  let e = Au("meta", ["meta"]), { stories: r } = e.csfFile, a = Object.keys(r).length === 1;
  return u.createElement(u.Fragment, null, u.createElement(FM, null), u.createElement(RM, null), u.createElement(x0, { of: "meta" }), a ? u.createElement(x0, { of: "story" }) : null, u.createElement(DM, null), u.createElement(oM, null), a ? null : u.createElement(_h, null));
};
function UM({ context: e, docsParameter: r }) {
  let a = r.container || _M, l = r.page || BM;
  return u.createElement(a, { context: e, theme: r.theme }, u.createElement(l, null));
}
var qM = ({ of: e }) => {
  let r = D.useContext(Mt);
  e && r.referenceMeta(e, !0);
  try {
    let a = r.storyById();
    return u.createElement(vh, { storyId: a.id });
  } catch {
    return null;
  }
};
export {
  uM as A,
  tM as C,
  x0 as D,
  gr as F,
  D4 as G,
  pM as H,
  Lt as I,
  qM as M,
  u as R,
  z0 as S,
  FM as T,
  A6 as W,
  Wt as _,
  wm as a,
  be as b,
  lm as c,
  RM as d,
  JD as e,
  oM as f,
  _M as g,
  Vx as h,
  Wx as i,
  hr as j,
  cm as k,
  lM as l,
  ra as m,
  P as n,
  UM as o,
  D as r,
  HM as s,
  Kc as t
};
//# sourceMappingURL=index-1b2f9b8d.mjs.map
