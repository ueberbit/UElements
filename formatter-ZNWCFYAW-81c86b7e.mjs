import { _ as ea, m as pl, b as ta } from "./index-1b2f9b8d.mjs";
import "./index-51e7740f.mjs";
import "./index-36ec6e8e.mjs";
import "./index-d79fba58.mjs";
import "./index-398c73a4.mjs";
var cl = ta({ "node_modules/prettier/parser-html.js"(Ur, Jr) {
  (function(Fe) {
    if (typeof Ur == "object" && typeof Jr == "object")
      Jr.exports = Fe();
    else if (typeof define == "function" && define.amd)
      define(Fe);
    else {
      var Yt = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      Yt.prettierPlugins = Yt.prettierPlugins || {}, Yt.prettierPlugins.html = Fe();
    }
  })(function() {
    var Fe = (ot, we) => () => (we || ot((we = { exports: {} }).exports, we), we.exports), Yt = Fe((ot, we) => {
      var be = function(Le) {
        return Le && Le.Math == Math && Le;
      };
      we.exports = be(typeof globalThis == "object" && globalThis) || be(typeof window == "object" && window) || be(typeof self == "object" && self) || be(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), hr = Fe((ot, we) => {
      we.exports = function(be) {
        try {
          return !!be();
        } catch {
          return !0;
        }
      };
    }), br = Fe((ot, we) => {
      var be = hr();
      we.exports = !be(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Hr = Fe((ot, we) => {
      var be = hr();
      we.exports = !be(function() {
        var Le = function() {
        }.bind();
        return typeof Le != "function" || Le.hasOwnProperty("prototype");
      });
    }), gr = Fe((ot, we) => {
      var be = Hr(), Le = Function.prototype.call;
      we.exports = be ? Le.bind(Le) : function() {
        return Le.apply(Le, arguments);
      };
    }), Dn = Fe((ot) => {
      var we = {}.propertyIsEnumerable, be = Object.getOwnPropertyDescriptor, Le = be && !we.call({ 1: 2 }, 1);
      ot.f = Le ? function(Z) {
        var V = be(this, Z);
        return !!V && V.enumerable;
      } : we;
    }), jr = Fe((ot, we) => {
      we.exports = function(be, Le) {
        return { enumerable: !(be & 1), configurable: !(be & 2), writable: !(be & 4), value: Le };
      };
    }), Dr = Fe((ot, we) => {
      var be = Hr(), Le = Function.prototype, Z = Le.call, V = be && Le.bind.bind(Z, Z);
      we.exports = be ? V : function(W) {
        return function() {
          return Z.apply(W, arguments);
        };
      };
    }), Tr = Fe((ot, we) => {
      var be = Dr(), Le = be({}.toString), Z = be("".slice);
      we.exports = function(V) {
        return Z(Le(V), 8, -1);
      };
    }), Zr = Fe((ot, we) => {
      var be = Dr(), Le = hr(), Z = Tr(), V = Object, W = be("".split);
      we.exports = Le(function() {
        return !V("z").propertyIsEnumerable(0);
      }) ? function(Q) {
        return Z(Q) == "String" ? W(Q, "") : V(Q);
      } : V;
    }), nn = Fe((ot, we) => {
      we.exports = function(be) {
        return be == null;
      };
    }), qn = Fe((ot, we) => {
      var be = nn(), Le = TypeError;
      we.exports = function(Z) {
        if (be(Z))
          throw Le("Can't call method on " + Z);
        return Z;
      };
    }), dn = Fe((ot, we) => {
      var be = Zr(), Le = qn();
      we.exports = function(Z) {
        return be(Le(Z));
      };
    }), Vn = Fe((ot, we) => {
      var be = typeof document == "object" && document.all, Le = typeof be > "u" && be !== void 0;
      we.exports = { all: be, IS_HTMLDDA: Le };
    }), dr = Fe((ot, we) => {
      var be = Vn(), Le = be.all;
      we.exports = be.IS_HTMLDDA ? function(Z) {
        return typeof Z == "function" || Z === Le;
      } : function(Z) {
        return typeof Z == "function";
      };
    }), Lr = Fe((ot, we) => {
      var be = dr(), Le = Vn(), Z = Le.all;
      we.exports = Le.IS_HTMLDDA ? function(V) {
        return typeof V == "object" ? V !== null : be(V) || V === Z;
      } : function(V) {
        return typeof V == "object" ? V !== null : be(V);
      };
    }), un = Fe((ot, we) => {
      var be = Yt(), Le = dr(), Z = function(V) {
        return Le(V) ? V : void 0;
      };
      we.exports = function(V, W) {
        return arguments.length < 2 ? Z(be[V]) : be[V] && be[V][W];
      };
    }), Gn = Fe((ot, we) => {
      var be = Dr();
      we.exports = be({}.isPrototypeOf);
    }), ii = Fe((ot, we) => {
      var be = un();
      we.exports = be("navigator", "userAgent") || "";
    }), si = Fe((ot, we) => {
      var be = Yt(), Le = ii(), Z = be.process, V = be.Deno, W = Z && Z.versions || V && V.version, Q = W && W.v8, Y, re;
      Q && (Y = Q.split("."), re = Y[0] > 0 && Y[0] < 4 ? 1 : +(Y[0] + Y[1])), !re && Le && (Y = Le.match(/Edge\/(\d+)/), (!Y || Y[1] >= 74) && (Y = Le.match(/Chrome\/(\d+)/), Y && (re = +Y[1]))), we.exports = re;
    }), Un = Fe((ot, we) => {
      var be = si(), Le = hr();
      we.exports = !!Object.getOwnPropertySymbols && !Le(function() {
        var Z = Symbol();
        return !String(Z) || !(Object(Z) instanceof Symbol) || !Symbol.sham && be && be < 41;
      });
    }), Jn = Fe((ot, we) => {
      var be = Un();
      we.exports = be && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Xn = Fe((ot, we) => {
      var be = un(), Le = dr(), Z = Gn(), V = Jn(), W = Object;
      we.exports = V ? function(Q) {
        return typeof Q == "symbol";
      } : function(Q) {
        var Y = be("Symbol");
        return Le(Y) && Z(Y.prototype, W(Q));
      };
    }), fn = Fe((ot, we) => {
      var be = String;
      we.exports = function(Le) {
        try {
          return be(Le);
        } catch {
          return "Object";
        }
      };
    }), sn = Fe((ot, we) => {
      var be = dr(), Le = fn(), Z = TypeError;
      we.exports = function(V) {
        if (be(V))
          return V;
        throw Z(Le(V) + " is not a function");
      };
    }), mn = Fe((ot, we) => {
      var be = sn(), Le = nn();
      we.exports = function(Z, V) {
        var W = Z[V];
        return Le(W) ? void 0 : be(W);
      };
    }), ai = Fe((ot, we) => {
      var be = gr(), Le = dr(), Z = Lr(), V = TypeError;
      we.exports = function(W, Q) {
        var Y, re;
        if (Q === "string" && Le(Y = W.toString) && !Z(re = be(Y, W)) || Le(Y = W.valueOf) && !Z(re = be(Y, W)) || Q !== "string" && Le(Y = W.toString) && !Z(re = be(Y, W)))
          return re;
        throw V("Can't convert object to primitive value");
      };
    }), oi = Fe((ot, we) => {
      we.exports = !1;
    }), hn = Fe((ot, we) => {
      var be = Yt(), Le = Object.defineProperty;
      we.exports = function(Z, V) {
        try {
          Le(be, Z, { value: V, configurable: !0, writable: !0 });
        } catch {
          be[Z] = V;
        }
        return V;
      };
    }), gn = Fe((ot, we) => {
      var be = Yt(), Le = hn(), Z = "__core-js_shared__", V = be[Z] || Le(Z, {});
      we.exports = V;
    }), Wn = Fe((ot, we) => {
      var be = oi(), Le = gn();
      (we.exports = function(Z, V) {
        return Le[Z] || (Le[Z] = V !== void 0 ? V : {});
      })("versions", []).push({ version: "3.26.1", mode: be ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), Sn = Fe((ot, we) => {
      var be = qn(), Le = Object;
      we.exports = function(Z) {
        return Le(be(Z));
      };
    }), _r = Fe((ot, we) => {
      var be = Dr(), Le = Sn(), Z = be({}.hasOwnProperty);
      we.exports = Object.hasOwn || function(V, W) {
        return Z(Le(V), W);
      };
    }), zn = Fe((ot, we) => {
      var be = Dr(), Le = 0, Z = Math.random(), V = be(1 .toString);
      we.exports = function(W) {
        return "Symbol(" + (W === void 0 ? "" : W) + ")_" + V(++Le + Z, 36);
      };
    }), Or = Fe((ot, we) => {
      var be = Yt(), Le = Wn(), Z = _r(), V = zn(), W = Un(), Q = Jn(), Y = Le("wks"), re = be.Symbol, Ce = re && re.for, Ie = Q ? re : re && re.withoutSetter || V;
      we.exports = function(me) {
        if (!Z(Y, me) || !(W || typeof Y[me] == "string")) {
          var qe = "Symbol." + me;
          W && Z(re, me) ? Y[me] = re[me] : Q && Ce ? Y[me] = Ce(qe) : Y[me] = Ie(qe);
        }
        return Y[me];
      };
    }), li = Fe((ot, we) => {
      var be = gr(), Le = Lr(), Z = Xn(), V = mn(), W = ai(), Q = Or(), Y = TypeError, re = Q("toPrimitive");
      we.exports = function(Ce, Ie) {
        if (!Le(Ce) || Z(Ce))
          return Ce;
        var me = V(Ce, re), qe;
        if (me) {
          if (Ie === void 0 && (Ie = "default"), qe = be(me, Ce, Ie), !Le(qe) || Z(qe))
            return qe;
          throw Y("Can't convert object to primitive value");
        }
        return Ie === void 0 && (Ie = "number"), W(Ce, Ie);
      };
    }), yn = Fe((ot, we) => {
      var be = li(), Le = Xn();
      we.exports = function(Z) {
        var V = be(Z, "string");
        return Le(V) ? V : V + "";
      };
    }), pi = Fe((ot, we) => {
      var be = Yt(), Le = Lr(), Z = be.document, V = Le(Z) && Le(Z.createElement);
      we.exports = function(W) {
        return V ? Z.createElement(W) : {};
      };
    }), Hn = Fe((ot, we) => {
      var be = br(), Le = hr(), Z = pi();
      we.exports = !be && !Le(function() {
        return Object.defineProperty(Z("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Yn = Fe((ot) => {
      var we = br(), be = gr(), Le = Dn(), Z = jr(), V = dn(), W = yn(), Q = _r(), Y = Hn(), re = Object.getOwnPropertyDescriptor;
      ot.f = we ? re : function(Ce, Ie) {
        if (Ce = V(Ce), Ie = W(Ie), Y)
          try {
            return re(Ce, Ie);
          } catch {
          }
        if (Q(Ce, Ie))
          return Z(!be(Le.f, Ce, Ie), Ce[Ie]);
      };
    }), ci = Fe((ot, we) => {
      var be = br(), Le = hr();
      we.exports = be && Le(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }), Xr = Fe((ot, we) => {
      var be = Lr(), Le = String, Z = TypeError;
      we.exports = function(V) {
        if (be(V))
          return V;
        throw Z(Le(V) + " is not an object");
      };
    }), en = Fe((ot) => {
      var we = br(), be = Hn(), Le = ci(), Z = Xr(), V = yn(), W = TypeError, Q = Object.defineProperty, Y = Object.getOwnPropertyDescriptor, re = "enumerable", Ce = "configurable", Ie = "writable";
      ot.f = we ? Le ? function(me, qe, et) {
        if (Z(me), qe = V(qe), Z(et), typeof me == "function" && qe === "prototype" && "value" in et && Ie in et && !et[Ie]) {
          var Ze = Y(me, qe);
          Ze && Ze[Ie] && (me[qe] = et.value, et = { configurable: Ce in et ? et[Ce] : Ze[Ce], enumerable: re in et ? et[re] : Ze[re], writable: !1 });
        }
        return Q(me, qe, et);
      } : Q : function(me, qe, et) {
        if (Z(me), qe = V(qe), Z(et), be)
          try {
            return Q(me, qe, et);
          } catch {
          }
        if ("get" in et || "set" in et)
          throw W("Accessors not supported");
        return "value" in et && (me[qe] = et.value), me;
      };
    }), Kn = Fe((ot, we) => {
      var be = br(), Le = en(), Z = jr();
      we.exports = be ? function(V, W, Q) {
        return Le.f(V, W, Z(1, Q));
      } : function(V, W, Q) {
        return V[W] = Q, V;
      };
    }), Di = Fe((ot, we) => {
      var be = br(), Le = _r(), Z = Function.prototype, V = be && Object.getOwnPropertyDescriptor, W = Le(Z, "name"), Q = W && function() {
      }.name === "something", Y = W && (!be || be && V(Z, "name").configurable);
      we.exports = { EXISTS: W, PROPER: Q, CONFIGURABLE: Y };
    }), Qn = Fe((ot, we) => {
      var be = Dr(), Le = dr(), Z = gn(), V = be(Function.toString);
      Le(Z.inspectSource) || (Z.inspectSource = function(W) {
        return V(W);
      }), we.exports = Z.inspectSource;
    }), di = Fe((ot, we) => {
      var be = Yt(), Le = dr(), Z = be.WeakMap;
      we.exports = Le(Z) && /native code/.test(String(Z));
    }), fi = Fe((ot, we) => {
      var be = Wn(), Le = zn(), Z = be("keys");
      we.exports = function(V) {
        return Z[V] || (Z[V] = Le(V));
      };
    }), Zn = Fe((ot, we) => {
      we.exports = {};
    }), mi = Fe((ot, we) => {
      var be = di(), Le = Yt(), Z = Lr(), V = Kn(), W = _r(), Q = gn(), Y = fi(), re = Zn(), Ce = "Object already initialized", Ie = Le.TypeError, me = Le.WeakMap, qe, et, Ze, nt = function(At) {
        return Ze(At) ? et(At) : qe(At, {});
      }, rt = function(At) {
        return function(Lt) {
          var qt;
          if (!Z(Lt) || (qt = et(Lt)).type !== At)
            throw Ie("Incompatible receiver, " + At + " required");
          return qt;
        };
      };
      be || Q.state ? (O = Q.state || (Q.state = new me()), O.get = O.get, O.has = O.has, O.set = O.set, qe = function(At, Lt) {
        if (O.has(At))
          throw Ie(Ce);
        return Lt.facade = At, O.set(At, Lt), Lt;
      }, et = function(At) {
        return O.get(At) || {};
      }, Ze = function(At) {
        return O.has(At);
      }) : (Ft = Y("state"), re[Ft] = !0, qe = function(At, Lt) {
        if (W(At, Ft))
          throw Ie(Ce);
        return Lt.facade = At, V(At, Ft, Lt), Lt;
      }, et = function(At) {
        return W(At, Ft) ? At[Ft] : {};
      }, Ze = function(At) {
        return W(At, Ft);
      });
      var O, Ft;
      we.exports = { set: qe, get: et, has: Ze, enforce: nt, getterFor: rt };
    }), gu = Fe((ot, we) => {
      var be = hr(), Le = dr(), Z = _r(), V = br(), W = Di().CONFIGURABLE, Q = Qn(), Y = mi(), re = Y.enforce, Ce = Y.get, Ie = Object.defineProperty, me = V && !be(function() {
        return Ie(function() {
        }, "length", { value: 8 }).length !== 8;
      }), qe = String(String).split("String"), et = we.exports = function(Ze, nt, rt) {
        String(nt).slice(0, 7) === "Symbol(" && (nt = "[" + String(nt).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), rt && rt.getter && (nt = "get " + nt), rt && rt.setter && (nt = "set " + nt), (!Z(Ze, "name") || W && Ze.name !== nt) && (V ? Ie(Ze, "name", { value: nt, configurable: !0 }) : Ze.name = nt), me && rt && Z(rt, "arity") && Ze.length !== rt.arity && Ie(Ze, "length", { value: rt.arity });
        try {
          rt && Z(rt, "constructor") && rt.constructor ? V && Ie(Ze, "prototype", { writable: !1 }) : Ze.prototype && (Ze.prototype = void 0);
        } catch {
        }
        var O = re(Ze);
        return Z(O, "source") || (O.source = qe.join(typeof nt == "string" ? nt : "")), Ze;
      };
      Function.prototype.toString = et(function() {
        return Le(this) && Ce(this).source || Q(this);
      }, "toString");
    }), hi = Fe((ot, we) => {
      var be = dr(), Le = en(), Z = gu(), V = hn();
      we.exports = function(W, Q, Y, re) {
        re || (re = {});
        var Ce = re.enumerable, Ie = re.name !== void 0 ? re.name : Q;
        if (be(Y) && Z(Y, Ie, re), re.global)
          Ce ? W[Q] = Y : V(Q, Y);
        else {
          try {
            re.unsafe ? W[Q] && (Ce = !0) : delete W[Q];
          } catch {
          }
          Ce ? W[Q] = Y : Le.f(W, Q, { value: Y, enumerable: !1, configurable: !re.nonConfigurable, writable: !re.nonWritable });
        }
        return W;
      };
    }), gi = Fe((ot, we) => {
      var be = Math.ceil, Le = Math.floor;
      we.exports = Math.trunc || function(Z) {
        var V = +Z;
        return (V > 0 ? Le : be)(V);
      };
    }), xn = Fe((ot, we) => {
      var be = gi();
      we.exports = function(Le) {
        var Z = +Le;
        return Z !== Z || Z === 0 ? 0 : be(Z);
      };
    }), yi = Fe((ot, we) => {
      var be = xn(), Le = Math.max, Z = Math.min;
      we.exports = function(V, W) {
        var Q = be(V);
        return Q < 0 ? Le(Q + W, 0) : Z(Q, W);
      };
    }), Ei = Fe((ot, we) => {
      var be = xn(), Le = Math.min;
      we.exports = function(Z) {
        return Z > 0 ? Le(be(Z), 9007199254740991) : 0;
      };
    }), tn = Fe((ot, we) => {
      var be = Ei();
      we.exports = function(Le) {
        return be(Le.length);
      };
    }), Ci = Fe((ot, we) => {
      var be = dn(), Le = yi(), Z = tn(), V = function(W) {
        return function(Q, Y, re) {
          var Ce = be(Q), Ie = Z(Ce), me = Le(re, Ie), qe;
          if (W && Y != Y) {
            for (; Ie > me; )
              if (qe = Ce[me++], qe != qe)
                return !0;
          } else
            for (; Ie > me; me++)
              if ((W || me in Ce) && Ce[me] === Y)
                return W || me || 0;
          return !W && -1;
        };
      };
      we.exports = { includes: V(!0), indexOf: V(!1) };
    }), Fi = Fe((ot, we) => {
      var be = Dr(), Le = _r(), Z = dn(), V = Ci().indexOf, W = Zn(), Q = be([].push);
      we.exports = function(Y, re) {
        var Ce = Z(Y), Ie = 0, me = [], qe;
        for (qe in Ce)
          !Le(W, qe) && Le(Ce, qe) && Q(me, qe);
        for (; re.length > Ie; )
          Le(Ce, qe = re[Ie++]) && (~V(me, qe) || Q(me, qe));
        return me;
      };
    }), Ai = Fe((ot, we) => {
      we.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), vi = Fe((ot) => {
      var we = Fi(), be = Ai(), Le = be.concat("length", "prototype");
      ot.f = Object.getOwnPropertyNames || function(Z) {
        return we(Z, Le);
      };
    }), bi = Fe((ot) => {
      ot.f = Object.getOwnPropertySymbols;
    }), Si = Fe((ot, we) => {
      var be = un(), Le = Dr(), Z = vi(), V = bi(), W = Xr(), Q = Le([].concat);
      we.exports = be("Reflect", "ownKeys") || function(Y) {
        var re = Z.f(W(Y)), Ce = V.f;
        return Ce ? Q(re, Ce(Y)) : re;
      };
    }), xi = Fe((ot, we) => {
      var be = _r(), Le = Si(), Z = Yn(), V = en();
      we.exports = function(W, Q, Y) {
        for (var re = Le(Q), Ce = V.f, Ie = Z.f, me = 0; me < re.length; me++) {
          var qe = re[me];
          !be(W, qe) && !(Y && be(Y, qe)) && Ce(W, qe, Ie(Q, qe));
        }
      };
    }), Ti = Fe((ot, we) => {
      var be = hr(), Le = dr(), Z = /#|\.prototype\./, V = function(Ce, Ie) {
        var me = Q[W(Ce)];
        return me == re ? !0 : me == Y ? !1 : Le(Ie) ? be(Ie) : !!Ie;
      }, W = V.normalize = function(Ce) {
        return String(Ce).replace(Z, ".").toLowerCase();
      }, Q = V.data = {}, Y = V.NATIVE = "N", re = V.POLYFILL = "P";
      we.exports = V;
    }), an = Fe((ot, we) => {
      var be = Yt(), Le = Yn().f, Z = Kn(), V = hi(), W = hn(), Q = xi(), Y = Ti();
      we.exports = function(re, Ce) {
        var Ie = re.target, me = re.global, qe = re.stat, et, Ze, nt, rt, O, Ft;
        if (me ? Ze = be : qe ? Ze = be[Ie] || W(Ie, {}) : Ze = (be[Ie] || {}).prototype, Ze)
          for (nt in Ce) {
            if (O = Ce[nt], re.dontCallGetSet ? (Ft = Le(Ze, nt), rt = Ft && Ft.value) : rt = Ze[nt], et = Y(me ? nt : Ie + (qe ? "." : "#") + nt, re.forced), !et && rt !== void 0) {
              if (typeof O == typeof rt)
                continue;
              Q(O, rt);
            }
            (re.sham || rt && rt.sham) && Z(O, "sham", !0), V(Ze, nt, O, re);
          }
      };
    }), yu = Fe(() => {
      var ot = an(), we = Yt();
      ot({ global: !0, forced: we.globalThis !== we }, { globalThis: we });
    }), Bi = Fe(() => {
      yu();
    }), Eu = Fe((ot, we) => {
      var be = Tr();
      we.exports = Array.isArray || function(Le) {
        return be(Le) == "Array";
      };
    }), Cu = Fe((ot, we) => {
      var be = TypeError, Le = 9007199254740991;
      we.exports = function(Z) {
        if (Z > Le)
          throw be("Maximum allowed index exceeded");
        return Z;
      };
    }), Fu = Fe((ot, we) => {
      var be = Tr(), Le = Dr();
      we.exports = function(Z) {
        if (be(Z) === "Function")
          return Le(Z);
      };
    }), Au = Fe((ot, we) => {
      var be = Fu(), Le = sn(), Z = Hr(), V = be(be.bind);
      we.exports = function(W, Q) {
        return Le(W), Q === void 0 ? W : Z ? V(W, Q) : function() {
          return W.apply(Q, arguments);
        };
      };
    }), vu = Fe((ot, we) => {
      var be = Eu(), Le = tn(), Z = Cu(), V = Au(), W = function(Q, Y, re, Ce, Ie, me, qe, et) {
        for (var Ze = Ie, nt = 0, rt = qe ? V(qe, et) : !1, O, Ft; nt < Ce; )
          nt in re && (O = rt ? rt(re[nt], nt, Y) : re[nt], me > 0 && be(O) ? (Ft = Le(O), Ze = W(Q, Y, O, Ft, Ze, me - 1) - 1) : (Z(Ze + 1), Q[Ze] = O), Ze++), nt++;
        return Ze;
      };
      we.exports = W;
    }), wi = Fe((ot, we) => {
      var be = Or(), Le = be("toStringTag"), Z = {};
      Z[Le] = "z", we.exports = String(Z) === "[object z]";
    }), bu = Fe((ot, we) => {
      var be = wi(), Le = dr(), Z = Tr(), V = Or(), W = V("toStringTag"), Q = Object, Y = Z(function() {
        return arguments;
      }()) == "Arguments", re = function(Ce, Ie) {
        try {
          return Ce[Ie];
        } catch {
        }
      };
      we.exports = be ? Z : function(Ce) {
        var Ie, me, qe;
        return Ce === void 0 ? "Undefined" : Ce === null ? "Null" : typeof (me = re(Ie = Q(Ce), W)) == "string" ? me : Y ? Z(Ie) : (qe = Z(Ie)) == "Object" && Le(Ie.callee) ? "Arguments" : qe;
      };
    }), Su = Fe((ot, we) => {
      var be = Dr(), Le = hr(), Z = dr(), V = bu(), W = un(), Q = Qn(), Y = function() {
      }, re = [], Ce = W("Reflect", "construct"), Ie = /^\s*(?:class|function)\b/, me = be(Ie.exec), qe = !Ie.exec(Y), et = function(nt) {
        if (!Z(nt))
          return !1;
        try {
          return Ce(Y, re, nt), !0;
        } catch {
          return !1;
        }
      }, Ze = function(nt) {
        if (!Z(nt))
          return !1;
        switch (V(nt)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return qe || !!me(Ie, Q(nt));
        } catch {
          return !0;
        }
      };
      Ze.sham = !0, we.exports = !Ce || Le(function() {
        var nt;
        return et(et.call) || !et(Object) || !et(function() {
          nt = !0;
        }) || nt;
      }) ? Ze : et;
    }), Ni = Fe((ot, we) => {
      var be = Eu(), Le = Su(), Z = Lr(), V = Or(), W = V("species"), Q = Array;
      we.exports = function(Y) {
        var re;
        return be(Y) && (re = Y.constructor, Le(re) && (re === Q || be(re.prototype)) ? re = void 0 : Z(re) && (re = re[W], re === null && (re = void 0))), re === void 0 ? Q : re;
      };
    }), xu = Fe((ot, we) => {
      var be = Ni();
      we.exports = function(Le, Z) {
        return new (be(Le))(Z === 0 ? 0 : Z);
      };
    }), _i = Fe(() => {
      var ot = an(), we = vu(), be = sn(), Le = Sn(), Z = tn(), V = xu();
      ot({ target: "Array", proto: !0 }, { flatMap: function(W) {
        var Q = Le(this), Y = Z(Q), re;
        return be(W), re = V(Q, 0), re.length = we(re, Q, Q, Y, 0, 1, W, arguments.length > 1 ? arguments[1] : void 0), re;
      } });
    }), eu = Fe((ot, we) => {
      we.exports = {};
    }), ki = Fe((ot, we) => {
      var be = Or(), Le = eu(), Z = be("iterator"), V = Array.prototype;
      we.exports = function(W) {
        return W !== void 0 && (Le.Array === W || V[Z] === W);
      };
    }), Tu = Fe((ot, we) => {
      var be = bu(), Le = mn(), Z = nn(), V = eu(), W = Or(), Q = W("iterator");
      we.exports = function(Y) {
        if (!Z(Y))
          return Le(Y, Q) || Le(Y, "@@iterator") || V[be(Y)];
      };
    }), Pi = Fe((ot, we) => {
      var be = gr(), Le = sn(), Z = Xr(), V = fn(), W = Tu(), Q = TypeError;
      we.exports = function(Y, re) {
        var Ce = arguments.length < 2 ? W(Y) : re;
        if (Le(Ce))
          return Z(be(Ce, Y));
        throw Q(V(Y) + " is not iterable");
      };
    }), Ii = Fe((ot, we) => {
      var be = gr(), Le = Xr(), Z = mn();
      we.exports = function(V, W, Q) {
        var Y, re;
        Le(V);
        try {
          if (Y = Z(V, "return"), !Y) {
            if (W === "throw")
              throw Q;
            return Q;
          }
          Y = be(Y, V);
        } catch (Ce) {
          re = !0, Y = Ce;
        }
        if (W === "throw")
          throw Q;
        if (re)
          throw Y;
        return Le(Y), Q;
      };
    }), ji = Fe((ot, we) => {
      var be = Au(), Le = gr(), Z = Xr(), V = fn(), W = ki(), Q = tn(), Y = Gn(), re = Pi(), Ce = Tu(), Ie = Ii(), me = TypeError, qe = function(Ze, nt) {
        this.stopped = Ze, this.result = nt;
      }, et = qe.prototype;
      we.exports = function(Ze, nt, rt) {
        var O = rt && rt.that, Ft = !!(rt && rt.AS_ENTRIES), At = !!(rt && rt.IS_RECORD), Lt = !!(rt && rt.IS_ITERATOR), qt = !!(rt && rt.INTERRUPTED), Zt = be(nt, O), ne, yr, Pr, Wr, fr, $r, mr, rn = function(Fr) {
          return ne && Ie(ne, "normal", Fr), new qe(!0, Fr);
        }, Br = function(Fr) {
          return Ft ? (Z(Fr), qt ? Zt(Fr[0], Fr[1], rn) : Zt(Fr[0], Fr[1])) : qt ? Zt(Fr, rn) : Zt(Fr);
        };
        if (At)
          ne = Ze.iterator;
        else if (Lt)
          ne = Ze;
        else {
          if (yr = Ce(Ze), !yr)
            throw me(V(Ze) + " is not iterable");
          if (W(yr)) {
            for (Pr = 0, Wr = Q(Ze); Wr > Pr; Pr++)
              if (fr = Br(Ze[Pr]), fr && Y(et, fr))
                return fr;
            return new qe(!1);
          }
          ne = re(Ze, yr);
        }
        for ($r = At ? Ze.next : ne.next; !(mr = Le($r, ne)).done; ) {
          try {
            fr = Br(mr.value);
          } catch (Fr) {
            Ie(ne, "throw", Fr);
          }
          if (typeof fr == "object" && fr && Y(et, fr))
            return fr;
        }
        return new qe(!1);
      };
    }), Li = Fe((ot, we) => {
      var be = yn(), Le = en(), Z = jr();
      we.exports = function(V, W, Q) {
        var Y = be(W);
        Y in V ? Le.f(V, Y, Z(0, Q)) : V[Y] = Q;
      };
    }), Oi = Fe(() => {
      var ot = an(), we = ji(), be = Li();
      ot({ target: "Object", stat: !0 }, { fromEntries: function(Le) {
        var Z = {};
        return we(Le, function(V, W) {
          be(Z, V, W);
        }, { AS_ENTRIES: !0 }), Z;
      } });
    }), $i = Fe((ot, we) => {
      var be = ["cliName", "cliCategory", "cliDescription"];
      function Le(L, te) {
        if (L == null)
          return {};
        var he = Z(L, te), ye, ke;
        if (Object.getOwnPropertySymbols) {
          var ue = Object.getOwnPropertySymbols(L);
          for (ke = 0; ke < ue.length; ke++)
            ye = ue[ke], !(te.indexOf(ye) >= 0) && Object.prototype.propertyIsEnumerable.call(L, ye) && (he[ye] = L[ye]);
        }
        return he;
      }
      function Z(L, te) {
        if (L == null)
          return {};
        var he = {}, ye = Object.keys(L), ke, ue;
        for (ue = 0; ue < ye.length; ue++)
          ke = ye[ue], !(te.indexOf(ke) >= 0) && (he[ke] = L[ke]);
        return he;
      }
      Bi(), _i(), Oi();
      var V = Object.create, W = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, Y = Object.getOwnPropertyNames, re = Object.getPrototypeOf, Ce = Object.prototype.hasOwnProperty, Ie = (L, te) => function() {
        return L && (te = (0, L[Y(L)[0]])(L = 0)), te;
      }, me = (L, te) => function() {
        return te || (0, L[Y(L)[0]])((te = { exports: {} }).exports, te), te.exports;
      }, qe = (L, te) => {
        for (var he in te)
          W(L, he, { get: te[he], enumerable: !0 });
      }, et = (L, te, he, ye) => {
        if (te && typeof te == "object" || typeof te == "function")
          for (let ke of Y(te))
            !Ce.call(L, ke) && ke !== he && W(L, ke, { get: () => te[ke], enumerable: !(ye = Q(te, ke)) || ye.enumerable });
        return L;
      }, Ze = (L, te, he) => (he = L != null ? V(re(L)) : {}, et(te || !L || !L.__esModule ? W(he, "default", { value: L, enumerable: !0 }) : he, L)), nt = (L) => et(W({}, "__esModule", { value: !0 }), L), rt, O = Ie({ "<define:process>"() {
        rt = { env: {}, argv: [] };
      } }), Ft = me({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 }), L.$EOF = 0, L.$BSPACE = 8, L.$TAB = 9, L.$LF = 10, L.$VTAB = 11, L.$FF = 12, L.$CR = 13, L.$SPACE = 32, L.$BANG = 33, L.$DQ = 34, L.$HASH = 35, L.$$ = 36, L.$PERCENT = 37, L.$AMPERSAND = 38, L.$SQ = 39, L.$LPAREN = 40, L.$RPAREN = 41, L.$STAR = 42, L.$PLUS = 43, L.$COMMA = 44, L.$MINUS = 45, L.$PERIOD = 46, L.$SLASH = 47, L.$COLON = 58, L.$SEMICOLON = 59, L.$LT = 60, L.$EQ = 61, L.$GT = 62, L.$QUESTION = 63, L.$0 = 48, L.$7 = 55, L.$9 = 57, L.$A = 65, L.$E = 69, L.$F = 70, L.$X = 88, L.$Z = 90, L.$LBRACKET = 91, L.$BACKSLASH = 92, L.$RBRACKET = 93, L.$CARET = 94, L.$_ = 95, L.$a = 97, L.$b = 98, L.$e = 101, L.$f = 102, L.$n = 110, L.$r = 114, L.$t = 116, L.$u = 117, L.$v = 118, L.$x = 120, L.$z = 122, L.$LBRACE = 123, L.$BAR = 124, L.$RBRACE = 125, L.$NBSP = 160, L.$PIPE = 124, L.$TILDA = 126, L.$AT = 64, L.$BT = 96;
        function te(Ge) {
          return Ge >= L.$TAB && Ge <= L.$SPACE || Ge == L.$NBSP;
        }
        L.isWhitespace = te;
        function he(Ge) {
          return L.$0 <= Ge && Ge <= L.$9;
        }
        L.isDigit = he;
        function ye(Ge) {
          return Ge >= L.$a && Ge <= L.$z || Ge >= L.$A && Ge <= L.$Z;
        }
        L.isAsciiLetter = ye;
        function ke(Ge) {
          return Ge >= L.$a && Ge <= L.$f || Ge >= L.$A && Ge <= L.$F || he(Ge);
        }
        L.isAsciiHexDigit = ke;
        function ue(Ge) {
          return Ge === L.$LF || Ge === L.$CR;
        }
        L.isNewLine = ue;
        function de(Ge) {
          return L.$0 <= Ge && Ge <= L.$7;
        }
        L.isOctalDigit = de;
      } }), At = me({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = class {
          constructor(ye, ke, ue) {
            this.filePath = ye, this.name = ke, this.members = ue;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        L.StaticSymbol = te;
        var he = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(ye, ke, ue) {
            ue = ue || [];
            let de = ue.length ? `.${ue.join(".")}` : "", Ge = `"${ye}".${ke}${de}`, Ue = this.cache.get(Ge);
            return Ue || (Ue = new te(ye, ke, ue), this.cache.set(Ge, Ue)), Ue;
          }
        };
        L.StaticSymbolCache = he;
      } }), Lt = me({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = /-+([a-z0-9])/g;
        function he(le) {
          return le.replace(te, function() {
            for (var We = arguments.length, Me = new Array(We), at = 0; at < We; at++)
              Me[at] = arguments[at];
            return Me[1].toUpperCase();
          });
        }
        L.dashCaseToCamelCase = he;
        function ye(le, We) {
          return ue(le, ":", We);
        }
        L.splitAtColon = ye;
        function ke(le, We) {
          return ue(le, ".", We);
        }
        L.splitAtPeriod = ke;
        function ue(le, We, Me) {
          let at = le.indexOf(We);
          return at == -1 ? Me : [le.slice(0, at).trim(), le.slice(at + 1).trim()];
        }
        function de(le, We, Me) {
          return Array.isArray(le) ? We.visitArray(le, Me) : ct(le) ? We.visitStringMap(le, Me) : le == null || typeof le == "string" || typeof le == "number" || typeof le == "boolean" ? We.visitPrimitive(le, Me) : We.visitOther(le, Me);
        }
        L.visitValue = de;
        function Ge(le) {
          return le != null;
        }
        L.isDefined = Ge;
        function Ue(le) {
          return le === void 0 ? null : le;
        }
        L.noUndefined = Ue;
        var gt = class {
          visitArray(le, We) {
            return le.map((Me) => de(Me, this, We));
          }
          visitStringMap(le, We) {
            let Me = {};
            return Object.keys(le).forEach((at) => {
              Me[at] = de(le[at], this, We);
            }), Me;
          }
          visitPrimitive(le, We) {
            return le;
          }
          visitOther(le, We) {
            return le;
          }
        };
        L.ValueTransformer = gt, L.SyncAsync = { assertSync: (le) => {
          if (st(le))
            throw new Error("Illegal state: value cannot be a promise");
          return le;
        }, then: (le, We) => st(le) ? le.then(We) : We(le), all: (le) => le.some(st) ? Promise.all(le) : le };
        function ce(le) {
          throw new Error(`Internal Error: ${le}`);
        }
        L.error = ce;
        function Ae(le, We) {
          let Me = Error(le);
          return Me[Ve] = !0, We && (Me[ze] = We), Me;
        }
        L.syntaxError = Ae;
        var Ve = "ngSyntaxError", ze = "ngParseErrors";
        function Je(le) {
          return le[Ve];
        }
        L.isSyntaxError = Je;
        function Qe(le) {
          return le[ze] || [];
        }
        L.getParseErrors = Qe;
        function yt(le) {
          return le.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        L.escapeRegExp = yt;
        var _t = Object.getPrototypeOf({});
        function ct(le) {
          return typeof le == "object" && le !== null && Object.getPrototypeOf(le) === _t;
        }
        function kt(le) {
          let We = "";
          for (let Me = 0; Me < le.length; Me++) {
            let at = le.charCodeAt(Me);
            if (at >= 55296 && at <= 56319 && le.length > Me + 1) {
              let Jt = le.charCodeAt(Me + 1);
              Jt >= 56320 && Jt <= 57343 && (Me++, at = (at - 55296 << 10) + Jt - 56320 + 65536);
            }
            at <= 127 ? We += String.fromCharCode(at) : at <= 2047 ? We += String.fromCharCode(at >> 6 & 31 | 192, at & 63 | 128) : at <= 65535 ? We += String.fromCharCode(at >> 12 | 224, at >> 6 & 63 | 128, at & 63 | 128) : at <= 2097151 && (We += String.fromCharCode(at >> 18 & 7 | 240, at >> 12 & 63 | 128, at >> 6 & 63 | 128, at & 63 | 128));
          }
          return We;
        }
        L.utf8Encode = kt;
        function $t(le) {
          if (typeof le == "string")
            return le;
          if (le instanceof Array)
            return "[" + le.map($t).join(", ") + "]";
          if (le == null)
            return "" + le;
          if (le.overriddenName)
            return `${le.overriddenName}`;
          if (le.name)
            return `${le.name}`;
          if (!le.toString)
            return "object";
          let We = le.toString();
          if (We == null)
            return "" + We;
          let Me = We.indexOf(`
`);
          return Me === -1 ? We : We.substring(0, Me);
        }
        L.stringify = $t;
        function ir(le) {
          return typeof le == "function" && le.hasOwnProperty("__forward_ref__") ? le() : le;
        }
        L.resolveForwardRef = ir;
        function st(le) {
          return !!le && typeof le.then == "function";
        }
        L.isPromise = st;
        var Ot = class {
          constructor(le) {
            this.full = le;
            let We = le.split(".");
            this.major = We[0], this.minor = We[1], this.patch = We.slice(2).join(".");
          }
        };
        L.Version = Ot;
        var Vt = typeof window < "u" && window, Gt = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, rr = typeof globalThis < "u" && globalThis, z = rr || Vt || Gt;
        L.global = z;
      } }), qt = me({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = At(), he = Lt(), ye = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function ke(Me) {
          return Me.replace(/\W/g, "_");
        }
        L.sanitizeIdentifier = ke;
        var ue = 0;
        function de(Me) {
          if (!Me || !Me.reference)
            return null;
          let at = Me.reference;
          if (at instanceof te.StaticSymbol)
            return at.name;
          if (at.__anonymousType)
            return at.__anonymousType;
          let Jt = he.stringify(at);
          return Jt.indexOf("(") >= 0 ? (Jt = `anonymous_${ue++}`, at.__anonymousType = Jt) : Jt = ke(Jt), Jt;
        }
        L.identifierName = de;
        function Ge(Me) {
          let at = Me.reference;
          return at instanceof te.StaticSymbol ? at.filePath : `./${he.stringify(at)}`;
        }
        L.identifierModuleUrl = Ge;
        function Ue(Me, at) {
          return `View_${de({ reference: Me })}_${at}`;
        }
        L.viewClassName = Ue;
        function gt(Me) {
          return `RenderType_${de({ reference: Me })}`;
        }
        L.rendererTypeName = gt;
        function ce(Me) {
          return `HostView_${de({ reference: Me })}`;
        }
        L.hostViewClassName = ce;
        function Ae(Me) {
          return `${de({ reference: Me })}NgFactory`;
        }
        L.componentFactoryName = Ae;
        var Ve;
        (function(Me) {
          Me[Me.Pipe = 0] = "Pipe", Me[Me.Directive = 1] = "Directive", Me[Me.NgModule = 2] = "NgModule", Me[Me.Injectable = 3] = "Injectable";
        })(Ve = L.CompileSummaryKind || (L.CompileSummaryKind = {}));
        function ze(Me) {
          return Me.value != null ? ke(Me.value) : de(Me.identifier);
        }
        L.tokenName = ze;
        function Je(Me) {
          return Me.identifier != null ? Me.identifier.reference : Me.value;
        }
        L.tokenReference = Je;
        var Qe = class {
          constructor() {
            let { moduleUrl: Me, styles: at, styleUrls: Jt } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = Me || null, this.styles = st(at), this.styleUrls = st(Jt);
          }
        };
        L.CompileStylesheetMetadata = Qe;
        var yt = class {
          constructor(Me) {
            let { encapsulation: at, template: Jt, templateUrl: er, htmlAst: Ar, styles: Er, styleUrls: Nr, externalStylesheets: kr, animations: zr, ngContentSelectors: Rr, interpolation: or, isInline: lt, preserveWhitespaces: mt } = Me;
            if (this.encapsulation = at, this.template = Jt, this.templateUrl = er, this.htmlAst = Ar, this.styles = st(Er), this.styleUrls = st(Nr), this.externalStylesheets = st(kr), this.animations = zr ? Vt(zr) : [], this.ngContentSelectors = Rr || [], or && or.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = or, this.isInline = lt, this.preserveWhitespaces = mt;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        L.CompileTemplateMetadata = yt;
        var _t = class {
          static create(Me) {
            let { isHost: at, type: Jt, isComponent: er, selector: Ar, exportAs: Er, changeDetection: Nr, inputs: kr, outputs: zr, host: Rr, providers: or, viewProviders: lt, queries: mt, guards: St, viewQueries: xt, entryComponents: Kt, template: sr, componentViewType: lr, rendererType: Qt, componentFactory: Kr } = Me, Pn = {}, In = {}, Hu = {};
            Rr != null && Object.keys(Rr).forEach((vr) => {
              let Qr = Rr[vr], cn = vr.match(ye);
              cn === null ? Hu[vr] = Qr : cn[1] != null ? In[cn[1]] = Qr : cn[2] != null && (Pn[cn[2]] = Qr);
            });
            let Yu = {};
            kr?.forEach((vr) => {
              let Qr = he.splitAtColon(vr, [vr, vr]);
              Yu[Qr[0]] = Qr[1];
            });
            let Ku = {};
            return zr?.forEach((vr) => {
              let Qr = he.splitAtColon(vr, [vr, vr]);
              Ku[Qr[0]] = Qr[1];
            }), new _t({ isHost: at, type: Jt, isComponent: !!er, selector: Ar, exportAs: Er, changeDetection: Nr, inputs: Yu, outputs: Ku, hostListeners: Pn, hostProperties: In, hostAttributes: Hu, providers: or, viewProviders: lt, queries: mt, guards: St, viewQueries: xt, entryComponents: Kt, template: sr, componentViewType: lr, rendererType: Qt, componentFactory: Kr });
          }
          constructor(Me) {
            let { isHost: at, type: Jt, isComponent: er, selector: Ar, exportAs: Er, changeDetection: Nr, inputs: kr, outputs: zr, hostListeners: Rr, hostProperties: or, hostAttributes: lt, providers: mt, viewProviders: St, queries: xt, guards: Kt, viewQueries: sr, entryComponents: lr, template: Qt, componentViewType: Kr, rendererType: Pn, componentFactory: In } = Me;
            this.isHost = !!at, this.type = Jt, this.isComponent = er, this.selector = Ar, this.exportAs = Er, this.changeDetection = Nr, this.inputs = kr, this.outputs = zr, this.hostListeners = Rr, this.hostProperties = or, this.hostAttributes = lt, this.providers = st(mt), this.viewProviders = st(St), this.queries = st(xt), this.guards = Kt, this.viewQueries = st(sr), this.entryComponents = st(lr), this.template = Qt, this.componentViewType = Kr, this.rendererType = Pn, this.componentFactory = In;
          }
          toSummary() {
            return { summaryKind: Ve.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        L.CompileDirectiveMetadata = _t;
        var ct = class {
          constructor(Me) {
            let { type: at, name: Jt, pure: er } = Me;
            this.type = at, this.name = Jt, this.pure = !!er;
          }
          toSummary() {
            return { summaryKind: Ve.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        L.CompilePipeMetadata = ct;
        var kt = class {
        };
        L.CompileShallowModuleMetadata = kt;
        var $t = class {
          constructor(Me) {
            let { type: at, providers: Jt, declaredDirectives: er, exportedDirectives: Ar, declaredPipes: Er, exportedPipes: Nr, entryComponents: kr, bootstrapComponents: zr, importedModules: Rr, exportedModules: or, schemas: lt, transitiveModule: mt, id: St } = Me;
            this.type = at || null, this.declaredDirectives = st(er), this.exportedDirectives = st(Ar), this.declaredPipes = st(Er), this.exportedPipes = st(Nr), this.providers = st(Jt), this.entryComponents = st(kr), this.bootstrapComponents = st(zr), this.importedModules = st(Rr), this.exportedModules = st(or), this.schemas = st(lt), this.id = St || null, this.transitiveModule = mt || null;
          }
          toSummary() {
            let Me = this.transitiveModule;
            return { summaryKind: Ve.NgModule, type: this.type, entryComponents: Me.entryComponents, providers: Me.providers, modules: Me.modules, exportedDirectives: Me.exportedDirectives, exportedPipes: Me.exportedPipes };
          }
        };
        L.CompileNgModuleMetadata = $t;
        var ir = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(Me, at) {
            this.providers.push({ provider: Me, module: at });
          }
          addDirective(Me) {
            this.directivesSet.has(Me.reference) || (this.directivesSet.add(Me.reference), this.directives.push(Me));
          }
          addExportedDirective(Me) {
            this.exportedDirectivesSet.has(Me.reference) || (this.exportedDirectivesSet.add(Me.reference), this.exportedDirectives.push(Me));
          }
          addPipe(Me) {
            this.pipesSet.has(Me.reference) || (this.pipesSet.add(Me.reference), this.pipes.push(Me));
          }
          addExportedPipe(Me) {
            this.exportedPipesSet.has(Me.reference) || (this.exportedPipesSet.add(Me.reference), this.exportedPipes.push(Me));
          }
          addModule(Me) {
            this.modulesSet.has(Me.reference) || (this.modulesSet.add(Me.reference), this.modules.push(Me));
          }
          addEntryComponent(Me) {
            this.entryComponentsSet.has(Me.componentType) || (this.entryComponentsSet.add(Me.componentType), this.entryComponents.push(Me));
          }
        };
        L.TransitiveCompileNgModuleMetadata = ir;
        function st(Me) {
          return Me || [];
        }
        var Ot = class {
          constructor(Me, at) {
            let { useClass: Jt, useValue: er, useExisting: Ar, useFactory: Er, deps: Nr, multi: kr } = at;
            this.token = Me, this.useClass = Jt || null, this.useValue = er, this.useExisting = Ar, this.useFactory = Er || null, this.dependencies = Nr || null, this.multi = !!kr;
          }
        };
        L.ProviderMeta = Ot;
        function Vt(Me) {
          return Me.reduce((at, Jt) => {
            let er = Array.isArray(Jt) ? Vt(Jt) : Jt;
            return at.concat(er);
          }, []);
        }
        L.flatten = Vt;
        function Gt(Me) {
          return Me.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function rr(Me, at, Jt) {
          let er;
          return Jt.isInline ? at.type.reference instanceof te.StaticSymbol ? er = `${at.type.reference.filePath}.${at.type.reference.name}.html` : er = `${de(Me)}/${de(at.type)}.html` : er = Jt.templateUrl, at.type.reference instanceof te.StaticSymbol ? er : Gt(er);
        }
        L.templateSourceUrl = rr;
        function z(Me, at) {
          let Jt = Me.moduleUrl.split(/\/\\/g), er = Jt[Jt.length - 1];
          return Gt(`css/${at}${er}.ngstyle.js`);
        }
        L.sharedStylesheetJitUrl = z;
        function le(Me) {
          return Gt(`${de(Me.type)}/module.ngfactory.js`);
        }
        L.ngModuleJitUrl = le;
        function We(Me, at) {
          return Gt(`${de(Me)}/${de(at.type)}.ngfactory.js`);
        }
        L.templateJitUrl = We;
      } }), Zt = me({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Ft(), he = qt(), ye = class {
          constructor(ce, Ae, Ve, ze) {
            this.file = ce, this.offset = Ae, this.line = Ve, this.col = ze;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(ce) {
            let Ae = this.file.content, Ve = Ae.length, ze = this.offset, Je = this.line, Qe = this.col;
            for (; ze > 0 && ce < 0; )
              if (ze--, ce++, Ae.charCodeAt(ze) == te.$LF) {
                Je--;
                let yt = Ae.substr(0, ze - 1).lastIndexOf(String.fromCharCode(te.$LF));
                Qe = yt > 0 ? ze - yt : ze;
              } else
                Qe--;
            for (; ze < Ve && ce > 0; ) {
              let yt = Ae.charCodeAt(ze);
              ze++, ce--, yt == te.$LF ? (Je++, Qe = 0) : Qe++;
            }
            return new ye(this.file, ze, Je, Qe);
          }
          getContext(ce, Ae) {
            let Ve = this.file.content, ze = this.offset;
            if (ze != null) {
              ze > Ve.length - 1 && (ze = Ve.length - 1);
              let Je = ze, Qe = 0, yt = 0;
              for (; Qe < ce && ze > 0 && (ze--, Qe++, !(Ve[ze] == `
` && ++yt == Ae)); )
                ;
              for (Qe = 0, yt = 0; Qe < ce && Je < Ve.length - 1 && (Je++, Qe++, !(Ve[Je] == `
` && ++yt == Ae)); )
                ;
              return { before: Ve.substring(ze, this.offset), after: Ve.substring(this.offset, Je + 1) };
            }
            return null;
          }
        };
        L.ParseLocation = ye;
        var ke = class {
          constructor(ce, Ae) {
            this.content = ce, this.url = Ae;
          }
        };
        L.ParseSourceFile = ke;
        var ue = class {
          constructor(ce, Ae) {
            let Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = ce, this.end = Ae, this.details = Ve;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        L.ParseSourceSpan = ue, L.EMPTY_PARSE_LOCATION = new ye(new ke("", ""), 0, 0, 0), L.EMPTY_SOURCE_SPAN = new ue(L.EMPTY_PARSE_LOCATION, L.EMPTY_PARSE_LOCATION);
        var de;
        (function(ce) {
          ce[ce.WARNING = 0] = "WARNING", ce[ce.ERROR = 1] = "ERROR";
        })(de = L.ParseErrorLevel || (L.ParseErrorLevel = {}));
        var Ge = class {
          constructor(ce, Ae) {
            let Ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : de.ERROR;
            this.span = ce, this.msg = Ae, this.level = Ve;
          }
          contextualMessage() {
            let ce = this.span.start.getContext(100, 3);
            return ce ? `${this.msg} ("${ce.before}[${de[this.level]} ->]${ce.after}")` : this.msg;
          }
          toString() {
            let ce = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${ce}`;
          }
        };
        L.ParseError = Ge;
        function Ue(ce, Ae) {
          let Ve = he.identifierModuleUrl(Ae), ze = Ve != null ? `in ${ce} ${he.identifierName(Ae)} in ${Ve}` : `in ${ce} ${he.identifierName(Ae)}`, Je = new ke("", ze);
          return new ue(new ye(Je, -1, -1, -1), new ye(Je, -1, -1, -1));
        }
        L.typeSourceSpan = Ue;
        function gt(ce, Ae, Ve) {
          let ze = `in ${ce} ${Ae} in ${Ve}`, Je = new ke("", ze);
          return new ue(new ye(Je, -1, -1, -1), new ye(Je, -1, -1, -1));
        }
        L.r3JitTypeSourceSpan = gt;
      } }), ne = me({ "src/utils/front-matter/parse.js"(L, te) {
        O();
        var he = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function ye(ke) {
          let ue = ke.match(he);
          if (!ue)
            return { content: ke };
          let { startDelimiter: de, language: Ge, value: Ue = "", endDelimiter: gt } = ue.groups, ce = Ge.trim() || "yaml";
          if (de === "+++" && (ce = "toml"), ce !== "yaml" && de !== gt)
            return { content: ke };
          let [Ae] = ue;
          return { frontMatter: { type: "front-matter", lang: ce, value: Ue, startDelimiter: de, endDelimiter: gt, raw: Ae.replace(/\n$/, "") }, content: Ae.replace(/[^\n]/g, " ") + ke.slice(Ae.length) };
        }
        te.exports = ye;
      } }), yr = me({ "src/utils/get-last.js"(L, te) {
        O();
        var he = (ye) => ye[ye.length - 1];
        te.exports = he;
      } }), Pr = me({ "src/common/parser-create-error.js"(L, te) {
        O();
        function he(ye, ke) {
          let ue = new SyntaxError(ye + " (" + ke.start.line + ":" + ke.start.column + ")");
          return ue.loc = ke, ue;
        }
        te.exports = he;
      } }), Wr = {};
      qe(Wr, { default: () => fr });
      function fr(L) {
        if (typeof L != "string")
          throw new TypeError("Expected a string");
        return L.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var $r = Ie({ "node_modules/escape-string-regexp/index.js"() {
        O();
      } }), mr = me({ "node_modules/semver/internal/debug.js"(L, te) {
        O();
        var he = typeof rt == "object" && rt.env && rt.env.NODE_DEBUG && /\bsemver\b/i.test(rt.env.NODE_DEBUG) ? function() {
          for (var ye = arguments.length, ke = new Array(ye), ue = 0; ue < ye; ue++)
            ke[ue] = arguments[ue];
          return console.error("SEMVER", ...ke);
        } : () => {
        };
        te.exports = he;
      } }), rn = me({ "node_modules/semver/internal/constants.js"(L, te) {
        O();
        var he = "2.0.0", ye = 256, ke = Number.MAX_SAFE_INTEGER || 9007199254740991, ue = 16;
        te.exports = { SEMVER_SPEC_VERSION: he, MAX_LENGTH: ye, MAX_SAFE_INTEGER: ke, MAX_SAFE_COMPONENT_LENGTH: ue };
      } }), Br = me({ "node_modules/semver/internal/re.js"(L, te) {
        O();
        var { MAX_SAFE_COMPONENT_LENGTH: he } = rn(), ye = mr();
        L = te.exports = {};
        var ke = L.re = [], ue = L.src = [], de = L.t = {}, Ge = 0, Ue = (gt, ce, Ae) => {
          let Ve = Ge++;
          ye(gt, Ve, ce), de[gt] = Ve, ue[Ve] = ce, ke[Ve] = new RegExp(ce, Ae ? "g" : void 0);
        };
        Ue("NUMERICIDENTIFIER", "0|[1-9]\\d*"), Ue("NUMERICIDENTIFIERLOOSE", "[0-9]+"), Ue("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), Ue("MAINVERSION", `(${ue[de.NUMERICIDENTIFIER]})\\.(${ue[de.NUMERICIDENTIFIER]})\\.(${ue[de.NUMERICIDENTIFIER]})`), Ue("MAINVERSIONLOOSE", `(${ue[de.NUMERICIDENTIFIERLOOSE]})\\.(${ue[de.NUMERICIDENTIFIERLOOSE]})\\.(${ue[de.NUMERICIDENTIFIERLOOSE]})`), Ue("PRERELEASEIDENTIFIER", `(?:${ue[de.NUMERICIDENTIFIER]}|${ue[de.NONNUMERICIDENTIFIER]})`), Ue("PRERELEASEIDENTIFIERLOOSE", `(?:${ue[de.NUMERICIDENTIFIERLOOSE]}|${ue[de.NONNUMERICIDENTIFIER]})`), Ue("PRERELEASE", `(?:-(${ue[de.PRERELEASEIDENTIFIER]}(?:\\.${ue[de.PRERELEASEIDENTIFIER]})*))`), Ue("PRERELEASELOOSE", `(?:-?(${ue[de.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${ue[de.PRERELEASEIDENTIFIERLOOSE]})*))`), Ue("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), Ue("BUILD", `(?:\\+(${ue[de.BUILDIDENTIFIER]}(?:\\.${ue[de.BUILDIDENTIFIER]})*))`), Ue("FULLPLAIN", `v?${ue[de.MAINVERSION]}${ue[de.PRERELEASE]}?${ue[de.BUILD]}?`), Ue("FULL", `^${ue[de.FULLPLAIN]}$`), Ue("LOOSEPLAIN", `[v=\\s]*${ue[de.MAINVERSIONLOOSE]}${ue[de.PRERELEASELOOSE]}?${ue[de.BUILD]}?`), Ue("LOOSE", `^${ue[de.LOOSEPLAIN]}$`), Ue("GTLT", "((?:<|>)?=?)"), Ue("XRANGEIDENTIFIERLOOSE", `${ue[de.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), Ue("XRANGEIDENTIFIER", `${ue[de.NUMERICIDENTIFIER]}|x|X|\\*`), Ue("XRANGEPLAIN", `[v=\\s]*(${ue[de.XRANGEIDENTIFIER]})(?:\\.(${ue[de.XRANGEIDENTIFIER]})(?:\\.(${ue[de.XRANGEIDENTIFIER]})(?:${ue[de.PRERELEASE]})?${ue[de.BUILD]}?)?)?`), Ue("XRANGEPLAINLOOSE", `[v=\\s]*(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:\\.(${ue[de.XRANGEIDENTIFIERLOOSE]})(?:${ue[de.PRERELEASELOOSE]})?${ue[de.BUILD]}?)?)?`), Ue("XRANGE", `^${ue[de.GTLT]}\\s*${ue[de.XRANGEPLAIN]}$`), Ue("XRANGELOOSE", `^${ue[de.GTLT]}\\s*${ue[de.XRANGEPLAINLOOSE]}$`), Ue("COERCE", `(^|[^\\d])(\\d{1,${he}})(?:\\.(\\d{1,${he}}))?(?:\\.(\\d{1,${he}}))?(?:$|[^\\d])`), Ue("COERCERTL", ue[de.COERCE], !0), Ue("LONETILDE", "(?:~>?)"), Ue("TILDETRIM", `(\\s*)${ue[de.LONETILDE]}\\s+`, !0), L.tildeTrimReplace = "$1~", Ue("TILDE", `^${ue[de.LONETILDE]}${ue[de.XRANGEPLAIN]}$`), Ue("TILDELOOSE", `^${ue[de.LONETILDE]}${ue[de.XRANGEPLAINLOOSE]}$`), Ue("LONECARET", "(?:\\^)"), Ue("CARETTRIM", `(\\s*)${ue[de.LONECARET]}\\s+`, !0), L.caretTrimReplace = "$1^", Ue("CARET", `^${ue[de.LONECARET]}${ue[de.XRANGEPLAIN]}$`), Ue("CARETLOOSE", `^${ue[de.LONECARET]}${ue[de.XRANGEPLAINLOOSE]}$`), Ue("COMPARATORLOOSE", `^${ue[de.GTLT]}\\s*(${ue[de.LOOSEPLAIN]})$|^$`), Ue("COMPARATOR", `^${ue[de.GTLT]}\\s*(${ue[de.FULLPLAIN]})$|^$`), Ue("COMPARATORTRIM", `(\\s*)${ue[de.GTLT]}\\s*(${ue[de.LOOSEPLAIN]}|${ue[de.XRANGEPLAIN]})`, !0), L.comparatorTrimReplace = "$1$2$3", Ue("HYPHENRANGE", `^\\s*(${ue[de.XRANGEPLAIN]})\\s+-\\s+(${ue[de.XRANGEPLAIN]})\\s*$`), Ue("HYPHENRANGELOOSE", `^\\s*(${ue[de.XRANGEPLAINLOOSE]})\\s+-\\s+(${ue[de.XRANGEPLAINLOOSE]})\\s*$`), Ue("STAR", "(<|>)?=?\\s*\\*"), Ue("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), Ue("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), Fr = me({ "node_modules/semver/internal/parse-options.js"(L, te) {
        O();
        var he = ["includePrerelease", "loose", "rtl"], ye = (ke) => ke ? typeof ke != "object" ? { loose: !0 } : he.filter((ue) => ke[ue]).reduce((ue, de) => (ue[de] = !0, ue), {}) : {};
        te.exports = ye;
      } }), Tn = me({ "node_modules/semver/internal/identifiers.js"(L, te) {
        O();
        var he = /^[0-9]+$/, ye = (ue, de) => {
          let Ge = he.test(ue), Ue = he.test(de);
          return Ge && Ue && (ue = +ue, de = +de), ue === de ? 0 : Ge && !Ue ? -1 : Ue && !Ge ? 1 : ue < de ? -1 : 1;
        }, ke = (ue, de) => ye(de, ue);
        te.exports = { compareIdentifiers: ye, rcompareIdentifiers: ke };
      } }), Bn = me({ "node_modules/semver/classes/semver.js"(L, te) {
        O();
        var he = mr(), { MAX_LENGTH: ye, MAX_SAFE_INTEGER: ke } = rn(), { re: ue, t: de } = Br(), Ge = Fr(), { compareIdentifiers: Ue } = Tn(), gt = class {
          constructor(ce, Ae) {
            if (Ae = Ge(Ae), ce instanceof gt) {
              if (ce.loose === !!Ae.loose && ce.includePrerelease === !!Ae.includePrerelease)
                return ce;
              ce = ce.version;
            } else if (typeof ce != "string")
              throw new TypeError(`Invalid Version: ${ce}`);
            if (ce.length > ye)
              throw new TypeError(`version is longer than ${ye} characters`);
            he("SemVer", ce, Ae), this.options = Ae, this.loose = !!Ae.loose, this.includePrerelease = !!Ae.includePrerelease;
            let Ve = ce.trim().match(Ae.loose ? ue[de.LOOSE] : ue[de.FULL]);
            if (!Ve)
              throw new TypeError(`Invalid Version: ${ce}`);
            if (this.raw = ce, this.major = +Ve[1], this.minor = +Ve[2], this.patch = +Ve[3], this.major > ke || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > ke || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > ke || this.patch < 0)
              throw new TypeError("Invalid patch version");
            Ve[4] ? this.prerelease = Ve[4].split(".").map((ze) => {
              if (/^[0-9]+$/.test(ze)) {
                let Je = +ze;
                if (Je >= 0 && Je < ke)
                  return Je;
              }
              return ze;
            }) : this.prerelease = [], this.build = Ve[5] ? Ve[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(ce) {
            if (he("SemVer.compare", this.version, this.options, ce), !(ce instanceof gt)) {
              if (typeof ce == "string" && ce === this.version)
                return 0;
              ce = new gt(ce, this.options);
            }
            return ce.version === this.version ? 0 : this.compareMain(ce) || this.comparePre(ce);
          }
          compareMain(ce) {
            return ce instanceof gt || (ce = new gt(ce, this.options)), Ue(this.major, ce.major) || Ue(this.minor, ce.minor) || Ue(this.patch, ce.patch);
          }
          comparePre(ce) {
            if (ce instanceof gt || (ce = new gt(ce, this.options)), this.prerelease.length && !ce.prerelease.length)
              return -1;
            if (!this.prerelease.length && ce.prerelease.length)
              return 1;
            if (!this.prerelease.length && !ce.prerelease.length)
              return 0;
            let Ae = 0;
            do {
              let Ve = this.prerelease[Ae], ze = ce.prerelease[Ae];
              if (he("prerelease compare", Ae, Ve, ze), Ve === void 0 && ze === void 0)
                return 0;
              if (ze === void 0)
                return 1;
              if (Ve === void 0)
                return -1;
              if (Ve !== ze)
                return Ue(Ve, ze);
            } while (++Ae);
          }
          compareBuild(ce) {
            ce instanceof gt || (ce = new gt(ce, this.options));
            let Ae = 0;
            do {
              let Ve = this.build[Ae], ze = ce.build[Ae];
              if (he("prerelease compare", Ae, Ve, ze), Ve === void 0 && ze === void 0)
                return 0;
              if (ze === void 0)
                return 1;
              if (Ve === void 0)
                return -1;
              if (Ve !== ze)
                return Ue(Ve, ze);
            } while (++Ae);
          }
          inc(ce, Ae) {
            switch (ce) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", Ae);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", Ae);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", Ae), this.inc("pre", Ae);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", Ae), this.inc("pre", Ae);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let Ve = this.prerelease.length;
                  for (; --Ve >= 0; )
                    typeof this.prerelease[Ve] == "number" && (this.prerelease[Ve]++, Ve = -2);
                  Ve === -1 && this.prerelease.push(0);
                }
                Ae && (Ue(this.prerelease[0], Ae) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [Ae, 0]) : this.prerelease = [Ae, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${ce}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        te.exports = gt;
      } }), on = me({ "node_modules/semver/functions/compare.js"(L, te) {
        O();
        var he = Bn(), ye = (ke, ue, de) => new he(ke, de).compare(new he(ue, de));
        te.exports = ye;
      } }), wr = me({ "node_modules/semver/functions/lt.js"(L, te) {
        O();
        var he = on(), ye = (ke, ue, de) => he(ke, ue, de) < 0;
        te.exports = ye;
      } }), Bu = me({ "node_modules/semver/functions/gte.js"(L, te) {
        O();
        var he = on(), ye = (ke, ue, de) => he(ke, ue, de) >= 0;
        te.exports = ye;
      } }), Ri = me({ "src/utils/arrayify.js"(L, te) {
        O(), te.exports = (he, ye) => Object.entries(he).map((ke) => {
          let [ue, de] = ke;
          return Object.assign({ [ye]: ue }, de);
        });
      } }), wu = me({ "package.json"(L, te) {
        te.exports = { version: "2.8.8" };
      } }), Mi = me({ "node_modules/outdent/lib/index.js"(L, te) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 }), L.outdent = void 0;
        function he() {
          for (var ct = [], kt = 0; kt < arguments.length; kt++)
            ct[kt] = arguments[kt];
        }
        function ye() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : ke();
        }
        function ke() {
          return { add: he, delete: he, get: he, set: he, has: function(ct) {
            return !1;
          } };
        }
        var ue = Object.prototype.hasOwnProperty, de = function(ct, kt) {
          return ue.call(ct, kt);
        };
        function Ge(ct, kt) {
          for (var $t in kt)
            de(kt, $t) && (ct[$t] = kt[$t]);
          return ct;
        }
        var Ue = /^[ \t]*(?:\r\n|\r|\n)/, gt = /(?:\r\n|\r|\n)[ \t]*$/, ce = /^(?:[\r\n]|$)/, Ae = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, Ve = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function ze(ct, kt, $t) {
          var ir = 0, st = ct[0].match(Ae);
          st && (ir = st[1].length);
          var Ot = "(\\r\\n|\\r|\\n).{0," + ir + "}", Vt = new RegExp(Ot, "g");
          kt && (ct = ct.slice(1));
          var Gt = $t.newline, rr = $t.trimLeadingNewline, z = $t.trimTrailingNewline, le = typeof Gt == "string", We = ct.length, Me = ct.map(function(at, Jt) {
            return at = at.replace(Vt, "$1"), Jt === 0 && rr && (at = at.replace(Ue, "")), Jt === We - 1 && z && (at = at.replace(gt, "")), le && (at = at.replace(/\r\n|\n|\r/g, function(er) {
              return Gt;
            })), at;
          });
          return Me;
        }
        function Je(ct, kt) {
          for (var $t = "", ir = 0, st = ct.length; ir < st; ir++)
            $t += ct[ir], ir < st - 1 && ($t += kt[ir]);
          return $t;
        }
        function Qe(ct) {
          return de(ct, "raw") && de(ct, "length");
        }
        function yt(ct) {
          var kt = ye(), $t = ye();
          function ir(Ot) {
            for (var Vt = [], Gt = 1; Gt < arguments.length; Gt++)
              Vt[Gt - 1] = arguments[Gt];
            if (Qe(Ot)) {
              var rr = Ot, z = (Vt[0] === ir || Vt[0] === _t) && Ve.test(rr[0]) && ce.test(rr[1]), le = z ? $t : kt, We = le.get(rr);
              if (We || (We = ze(rr, z, ct), le.set(rr, We)), Vt.length === 0)
                return We[0];
              var Me = Je(We, z ? Vt.slice(1) : Vt);
              return Me;
            } else
              return yt(Ge(Ge({}, ct), Ot || {}));
          }
          var st = Ge(ir, { string: function(Ot) {
            return ze([Ot], !1, ct)[0];
          } });
          return st;
        }
        var _t = yt({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (L.outdent = _t, L.default = _t, typeof te < "u")
          try {
            te.exports = _t, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.default = _t, _t.outdent = _t;
          } catch {
          }
      } }), Nu = me({ "src/main/core-options.js"(L, te) {
        O();
        var { outdent: he } = Mi(), ye = "Config", ke = "Editor", ue = "Format", de = "Other", Ge = "Output", Ue = "Global", gt = "Special", ce = { cursorOffset: { since: "1.4.0", category: gt, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: he`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: ke }, endOfLine: { since: "1.15.0", category: Ue, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: he`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: gt, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: de, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: gt, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: de }, parser: { since: "0.0.10", category: Ue, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (Ae) => typeof Ae == "string" || typeof Ae == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: Ue, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (Ae) => typeof Ae == "string" || typeof Ae == "object", cliName: "plugin", cliCategory: ye }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: Ue, description: he`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (Ae) => typeof Ae == "string" || typeof Ae == "object", cliName: "plugin-search-dir", cliCategory: ye }, printWidth: { since: "0.0.0", category: Ue, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: gt, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: he`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: ke }, rangeStart: { since: "1.4.0", category: gt, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: he`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: ke }, requirePragma: { since: "1.7.0", category: gt, type: "boolean", default: !1, description: he`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: de }, tabWidth: { type: "int", category: Ue, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: Ue, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: Ue, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        te.exports = { CATEGORY_CONFIG: ye, CATEGORY_EDITOR: ke, CATEGORY_FORMAT: ue, CATEGORY_OTHER: de, CATEGORY_OUTPUT: Ge, CATEGORY_GLOBAL: Ue, CATEGORY_SPECIAL: gt, options: ce };
      } }), En = me({ "src/main/support.js"(L, te) {
        O();
        var he = { compare: on(), lt: wr(), gte: Bu() }, ye = Ri(), ke = wu().version, ue = Nu().options;
        function de() {
          let { plugins: Ue = [], showUnreleased: gt = !1, showDeprecated: ce = !1, showInternal: Ae = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, Ve = ke.split("-", 1)[0], ze = Ue.flatMap((ct) => ct.languages || []).filter(Qe), Je = ye(Object.assign({}, ...Ue.map((ct) => {
            let { options: kt } = ct;
            return kt;
          }), ue), "name").filter((ct) => Qe(ct) && yt(ct)).sort((ct, kt) => ct.name === kt.name ? 0 : ct.name < kt.name ? -1 : 1).map(_t).map((ct) => {
            ct = Object.assign({}, ct), Array.isArray(ct.default) && (ct.default = ct.default.length === 1 ? ct.default[0].value : ct.default.filter(Qe).sort(($t, ir) => he.compare(ir.since, $t.since))[0].value), Array.isArray(ct.choices) && (ct.choices = ct.choices.filter(($t) => Qe($t) && yt($t)), ct.name === "parser" && Ge(ct, ze, Ue));
            let kt = Object.fromEntries(Ue.filter(($t) => $t.defaultOptions && $t.defaultOptions[ct.name] !== void 0).map(($t) => [$t.name, $t.defaultOptions[ct.name]]));
            return Object.assign(Object.assign({}, ct), {}, { pluginDefaults: kt });
          });
          return { languages: ze, options: Je };
          function Qe(ct) {
            return gt || !("since" in ct) || ct.since && he.gte(Ve, ct.since);
          }
          function yt(ct) {
            return ce || !("deprecated" in ct) || ct.deprecated && he.lt(Ve, ct.deprecated);
          }
          function _t(ct) {
            return Ae ? ct : Le(ct, be);
          }
        }
        function Ge(Ue, gt, ce) {
          let Ae = new Set(Ue.choices.map((Ve) => Ve.value));
          for (let Ve of gt)
            if (Ve.parsers) {
              for (let ze of Ve.parsers)
                if (!Ae.has(ze)) {
                  Ae.add(ze);
                  let Je = ce.find((yt) => yt.parsers && yt.parsers[ze]), Qe = Ve.name;
                  Je && Je.name && (Qe += ` (plugin: ${Je.name})`), Ue.choices.push({ value: ze, description: Qe });
                }
            }
        }
        te.exports = { getSupportInfo: de };
      } }), qi = me({ "src/utils/is-non-empty-array.js"(L, te) {
        O();
        function he(ye) {
          return Array.isArray(ye) && ye.length > 0;
        }
        te.exports = he;
      } });
      function Vi() {
        let { onlyFirst: L = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, te = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(te, L ? void 0 : "g");
      }
      var wt = Ie({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        O();
      } });
      function _u(L) {
        if (typeof L != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof L}\``);
        return L.replace(Vi(), "");
      }
      var Gi = Ie({ "node_modules/strip-ansi/index.js"() {
        O(), wt();
      } });
      function Ui(L) {
        return Number.isInteger(L) ? L >= 4352 && (L <= 4447 || L === 9001 || L === 9002 || 11904 <= L && L <= 12871 && L !== 12351 || 12880 <= L && L <= 19903 || 19968 <= L && L <= 42182 || 43360 <= L && L <= 43388 || 44032 <= L && L <= 55203 || 63744 <= L && L <= 64255 || 65040 <= L && L <= 65049 || 65072 <= L && L <= 65131 || 65281 <= L && L <= 65376 || 65504 <= L && L <= 65510 || 110592 <= L && L <= 110593 || 127488 <= L && L <= 127569 || 131072 <= L && L <= 262141) : !1;
      }
      var ku = Ie({ "node_modules/is-fullwidth-code-point/index.js"() {
        O();
      } }), Pu = me({ "node_modules/emoji-regex/index.js"(L, te) {
        O(), te.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Iu = {};
      qe(Iu, { default: () => Ji });
      function Ji(L) {
        if (typeof L != "string" || L.length === 0 || (L = _u(L), L.length === 0))
          return 0;
        L = L.replace((0, ju.default)(), "  ");
        let te = 0;
        for (let he = 0; he < L.length; he++) {
          let ye = L.codePointAt(he);
          ye <= 31 || ye >= 127 && ye <= 159 || ye >= 768 && ye <= 879 || (ye > 65535 && he++, te += Ui(ye) ? 2 : 1);
        }
        return te;
      }
      var ju, Xi = Ie({ "node_modules/string-width/index.js"() {
        O(), Gi(), ku(), ju = Ze(Pu());
      } }), tu = me({ "src/utils/get-string-width.js"(L, te) {
        O();
        var he = (Xi(), nt(Iu)).default, ye = /[^\x20-\x7F]/;
        function ke(ue) {
          return ue ? ye.test(ue) ? he(ue) : ue.length : 0;
        }
        te.exports = ke;
      } }), ru = me({ "src/utils/text/skip.js"(L, te) {
        O();
        function he(Ge) {
          return (Ue, gt, ce) => {
            let Ae = ce && ce.backwards;
            if (gt === !1)
              return !1;
            let { length: Ve } = Ue, ze = gt;
            for (; ze >= 0 && ze < Ve; ) {
              let Je = Ue.charAt(ze);
              if (Ge instanceof RegExp) {
                if (!Ge.test(Je))
                  return ze;
              } else if (!Ge.includes(Je))
                return ze;
              Ae ? ze-- : ze++;
            }
            return ze === -1 || ze === Ve ? ze : !1;
          };
        }
        var ye = he(/\s/), ke = he(" 	"), ue = he(",; 	"), de = he(/[^\n\r]/);
        te.exports = { skipWhitespace: ye, skipSpaces: ke, skipToLineEnd: ue, skipEverythingButNewLine: de };
      } }), Lu = me({ "src/utils/text/skip-inline-comment.js"(L, te) {
        O();
        function he(ye, ke) {
          if (ke === !1)
            return !1;
          if (ye.charAt(ke) === "/" && ye.charAt(ke + 1) === "*") {
            for (let ue = ke + 2; ue < ye.length; ++ue)
              if (ye.charAt(ue) === "*" && ye.charAt(ue + 1) === "/")
                return ue + 2;
          }
          return ke;
        }
        te.exports = he;
      } }), Ou = me({ "src/utils/text/skip-trailing-comment.js"(L, te) {
        O();
        var { skipEverythingButNewLine: he } = ru();
        function ye(ke, ue) {
          return ue === !1 ? !1 : ke.charAt(ue) === "/" && ke.charAt(ue + 1) === "/" ? he(ke, ue) : ue;
        }
        te.exports = ye;
      } }), $u = me({ "src/utils/text/skip-newline.js"(L, te) {
        O();
        function he(ye, ke, ue) {
          let de = ue && ue.backwards;
          if (ke === !1)
            return !1;
          let Ge = ye.charAt(ke);
          if (de) {
            if (ye.charAt(ke - 1) === "\r" && Ge === `
`)
              return ke - 2;
            if (Ge === `
` || Ge === "\r" || Ge === "\u2028" || Ge === "\u2029")
              return ke - 1;
          } else {
            if (Ge === "\r" && ye.charAt(ke + 1) === `
`)
              return ke + 2;
            if (Ge === `
` || Ge === "\r" || Ge === "\u2028" || Ge === "\u2029")
              return ke + 1;
          }
          return ke;
        }
        te.exports = he;
      } }), Wi = me({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(L, te) {
        O();
        var he = Lu(), ye = $u(), ke = Ou(), { skipSpaces: ue } = ru();
        function de(Ge, Ue) {
          let gt = null, ce = Ue;
          for (; ce !== gt; )
            gt = ce, ce = ue(Ge, ce), ce = he(Ge, ce), ce = ke(Ge, ce), ce = ye(Ge, ce);
          return ce;
        }
        te.exports = de;
      } }), nu = me({ "src/common/util.js"(L, te) {
        O();
        var { default: he } = ($r(), nt(Wr)), ye = yr(), { getSupportInfo: ke } = En(), ue = qi(), de = tu(), { skipWhitespace: Ge, skipSpaces: Ue, skipToLineEnd: gt, skipEverythingButNewLine: ce } = ru(), Ae = Lu(), Ve = Ou(), ze = $u(), Je = Wi(), Qe = (lt) => lt[lt.length - 2];
        function yt(lt) {
          return (mt, St, xt) => {
            let Kt = xt && xt.backwards;
            if (St === !1)
              return !1;
            let { length: sr } = mt, lr = St;
            for (; lr >= 0 && lr < sr; ) {
              let Qt = mt.charAt(lr);
              if (lt instanceof RegExp) {
                if (!lt.test(Qt))
                  return lr;
              } else if (!lt.includes(Qt))
                return lr;
              Kt ? lr-- : lr++;
            }
            return lr === -1 || lr === sr ? lr : !1;
          };
        }
        function _t(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, xt = Ue(lt, St.backwards ? mt - 1 : mt, St), Kt = ze(lt, xt, St);
          return xt !== Kt;
        }
        function ct(lt, mt, St) {
          for (let xt = mt; xt < St; ++xt)
            if (lt.charAt(xt) === `
`)
              return !0;
          return !1;
        }
        function kt(lt, mt, St) {
          let xt = St(mt) - 1;
          xt = Ue(lt, xt, { backwards: !0 }), xt = ze(lt, xt, { backwards: !0 }), xt = Ue(lt, xt, { backwards: !0 });
          let Kt = ze(lt, xt, { backwards: !0 });
          return xt !== Kt;
        }
        function $t(lt, mt) {
          let St = null, xt = mt;
          for (; xt !== St; )
            St = xt, xt = gt(lt, xt), xt = Ae(lt, xt), xt = Ue(lt, xt);
          return xt = Ve(lt, xt), xt = ze(lt, xt), xt !== !1 && _t(lt, xt);
        }
        function ir(lt, mt, St) {
          return $t(lt, St(mt));
        }
        function st(lt, mt, St) {
          return Je(lt, St(mt));
        }
        function Ot(lt, mt, St) {
          return lt.charAt(st(lt, mt, St));
        }
        function Vt(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Ue(lt, St.backwards ? mt - 1 : mt, St) !== mt;
        }
        function Gt(lt, mt) {
          let St = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, xt = 0;
          for (let Kt = St; Kt < lt.length; ++Kt)
            lt[Kt] === "	" ? xt = xt + mt - xt % mt : xt++;
          return xt;
        }
        function rr(lt, mt) {
          let St = lt.lastIndexOf(`
`);
          return St === -1 ? 0 : Gt(lt.slice(St + 1).match(/^[\t ]*/)[0], mt);
        }
        function z(lt, mt) {
          let St = { quote: '"', regex: /"/g, escaped: "&quot;" }, xt = { quote: "'", regex: /'/g, escaped: "&apos;" }, Kt = mt === "'" ? xt : St, sr = Kt === xt ? St : xt, lr = Kt;
          if (lt.includes(Kt.quote) || lt.includes(sr.quote)) {
            let Qt = (lt.match(Kt.regex) || []).length, Kr = (lt.match(sr.regex) || []).length;
            lr = Qt > Kr ? sr : Kt;
          }
          return lr;
        }
        function le(lt, mt) {
          let St = lt.slice(1, -1), xt = mt.parser === "json" || mt.parser === "json5" && mt.quoteProps === "preserve" && !mt.singleQuote ? '"' : mt.__isInHtmlAttribute ? "'" : z(St, mt.singleQuote ? "'" : '"').quote;
          return We(St, xt, !(mt.parser === "css" || mt.parser === "less" || mt.parser === "scss" || mt.__embeddedInHtml));
        }
        function We(lt, mt, St) {
          let xt = mt === '"' ? "'" : '"', Kt = /\\(.)|(["'])/gs, sr = lt.replace(Kt, (lr, Qt, Kr) => Qt === xt ? Qt : Kr === mt ? "\\" + Kr : Kr || (St && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Qt) ? Qt : "\\" + Qt));
          return mt + sr + mt;
        }
        function Me(lt) {
          return lt.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function at(lt, mt) {
          let St = lt.match(new RegExp(`(${he(mt)})+`, "g"));
          return St === null ? 0 : St.reduce((xt, Kt) => Math.max(xt, Kt.length / mt.length), 0);
        }
        function Jt(lt, mt) {
          let St = lt.match(new RegExp(`(${he(mt)})+`, "g"));
          if (St === null)
            return 0;
          let xt = /* @__PURE__ */ new Map(), Kt = 0;
          for (let sr of St) {
            let lr = sr.length / mt.length;
            xt.set(lr, !0), lr > Kt && (Kt = lr);
          }
          for (let sr = 1; sr < Kt; sr++)
            if (!xt.get(sr))
              return sr;
          return Kt + 1;
        }
        function er(lt, mt) {
          (lt.comments || (lt.comments = [])).push(mt), mt.printed = !1, mt.nodeDescription = or(lt);
        }
        function Ar(lt, mt) {
          mt.leading = !0, mt.trailing = !1, er(lt, mt);
        }
        function Er(lt, mt, St) {
          mt.leading = !1, mt.trailing = !1, St && (mt.marker = St), er(lt, mt);
        }
        function Nr(lt, mt) {
          mt.leading = !1, mt.trailing = !0, er(lt, mt);
        }
        function kr(lt, mt) {
          let { languages: St } = ke({ plugins: mt.plugins }), xt = St.find((Kt) => {
            let { name: sr } = Kt;
            return sr.toLowerCase() === lt;
          }) || St.find((Kt) => {
            let { aliases: sr } = Kt;
            return Array.isArray(sr) && sr.includes(lt);
          }) || St.find((Kt) => {
            let { extensions: sr } = Kt;
            return Array.isArray(sr) && sr.includes(`.${lt}`);
          });
          return xt && xt.parsers[0];
        }
        function zr(lt) {
          return lt && lt.type === "front-matter";
        }
        function Rr(lt) {
          let mt = /* @__PURE__ */ new WeakMap();
          return function(St) {
            return mt.has(St) || mt.set(St, Symbol(lt)), mt.get(St);
          };
        }
        function or(lt) {
          let mt = lt.type || lt.kind || "(unknown type)", St = String(lt.name || lt.id && (typeof lt.id == "object" ? lt.id.name : lt.id) || lt.key && (typeof lt.key == "object" ? lt.key.name : lt.key) || lt.value && (typeof lt.value == "object" ? "" : String(lt.value)) || lt.operator || "");
          return St.length > 20 && (St = St.slice(0, 19) + "…"), mt + (St ? " " + St : "");
        }
        te.exports = { inferParserByLanguage: kr, getStringWidth: de, getMaxContinuousCount: at, getMinNotPresentContinuousCount: Jt, getPenultimate: Qe, getLast: ye, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Je, getNextNonSpaceNonCommentCharacterIndex: st, getNextNonSpaceNonCommentCharacter: Ot, skip: yt, skipWhitespace: Ge, skipSpaces: Ue, skipToLineEnd: gt, skipEverythingButNewLine: ce, skipInlineComment: Ae, skipTrailingComment: Ve, skipNewline: ze, isNextLineEmptyAfterIndex: $t, isNextLineEmpty: ir, isPreviousLineEmpty: kt, hasNewline: _t, hasNewlineInRange: ct, hasSpaces: Vt, getAlignmentSize: Gt, getIndentSize: rr, getPreferredQuote: z, printString: le, printNumber: Me, makeString: We, addLeadingComment: Ar, addDanglingComment: Er, addTrailingComment: Nr, isFrontMatterNode: zr, isNonEmptyArray: ue, createGroupIdMapper: Rr };
      } }), uu = me({ "vendors/html-tag-names.json"(L, te) {
        te.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), Cn = me({ "src/language-html/utils/array-to-map.js"(L, te) {
        O();
        function he(ye) {
          let ke = /* @__PURE__ */ Object.create(null);
          for (let ue of ye)
            ke[ue] = !0;
          return ke;
        }
        te.exports = he;
      } }), Ru = me({ "src/language-html/utils/html-tag-names.js"(L, te) {
        O();
        var { htmlTagNames: he } = uu(), ye = Cn(), ke = ye(he);
        te.exports = ke;
      } }), Mu = me({ "vendors/html-element-attributes.json"(L, te) {
        te.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), qu = me({ "src/language-html/utils/map-object.js"(L, te) {
        O();
        function he(ye, ke) {
          let ue = /* @__PURE__ */ Object.create(null);
          for (let [de, Ge] of Object.entries(ye))
            ue[de] = ke(Ge, de);
          return ue;
        }
        te.exports = he;
      } }), zi = me({ "src/language-html/utils/html-elements-attributes.js"(L, te) {
        O();
        var { htmlElementAttributes: he } = Mu(), ye = qu(), ke = Cn(), ue = ye(he, ke);
        te.exports = ue;
      } }), Ut = me({ "src/language-html/utils/is-unknown-namespace.js"(L, te) {
        O();
        function he(ye) {
          return ye.type === "element" && !ye.hasExplicitNamespace && !["html", "svg"].includes(ye.namespace);
        }
        te.exports = he;
      } }), Vu = me({ "src/language-html/pragma.js"(L, te) {
        O();
        function he(ke) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(ke);
        }
        function ye(ke) {
          return `<!-- @format -->

` + ke.replace(/^\s*\n/, "");
        }
        te.exports = { hasPragma: he, insertPragma: ye };
      } }), Gu = me({ "src/language-html/ast.js"(L, te) {
        O();
        var he = { attrs: !0, children: !0 }, ye = /* @__PURE__ */ new Set(["parent"]), ke = class {
          constructor() {
            let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let Ge of /* @__PURE__ */ new Set([...ye, ...Object.keys(de)]))
              this.setProperty(Ge, de[Ge]);
          }
          setProperty(de, Ge) {
            if (this[de] !== Ge) {
              if (de in he && (Ge = Ge.map((Ue) => this.createChild(Ue))), !ye.has(de)) {
                this[de] = Ge;
                return;
              }
              Object.defineProperty(this, de, { value: Ge, enumerable: !1, configurable: !0 });
            }
          }
          map(de) {
            let Ge;
            for (let Ue in he) {
              let gt = this[Ue];
              if (gt) {
                let ce = ue(gt, (Ae) => Ae.map(de));
                Ge !== gt && (Ge || (Ge = new ke({ parent: this.parent })), Ge.setProperty(Ue, ce));
              }
            }
            if (Ge)
              for (let Ue in this)
                Ue in he || (Ge[Ue] = this[Ue]);
            return de(Ge || this);
          }
          walk(de) {
            for (let Ge in he) {
              let Ue = this[Ge];
              if (Ue)
                for (let gt = 0; gt < Ue.length; gt++)
                  Ue[gt].walk(de);
            }
            de(this);
          }
          createChild(de) {
            let Ge = de instanceof ke ? de.clone() : new ke(de);
            return Ge.setProperty("parent", this), Ge;
          }
          insertChildBefore(de, Ge) {
            this.children.splice(this.children.indexOf(de), 0, this.createChild(Ge));
          }
          removeChild(de) {
            this.children.splice(this.children.indexOf(de), 1);
          }
          replaceChild(de, Ge) {
            this.children[this.children.indexOf(de)] = this.createChild(Ge);
          }
          clone() {
            return new ke(this);
          }
          get firstChild() {
            var de;
            return (de = this.children) === null || de === void 0 ? void 0 : de[0];
          }
          get lastChild() {
            var de;
            return (de = this.children) === null || de === void 0 ? void 0 : de[this.children.length - 1];
          }
          get prev() {
            var de;
            return (de = this.parent) === null || de === void 0 ? void 0 : de.children[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var de;
            return (de = this.parent) === null || de === void 0 ? void 0 : de.children[this.parent.children.indexOf(this) + 1];
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
          get attrMap() {
            return Object.fromEntries(this.attrs.map((de) => [de.fullName, de.value]));
          }
        };
        function ue(de, Ge) {
          let Ue = de.map(Ge);
          return Ue.some((gt, ce) => gt !== de[ce]) ? Ue : de;
        }
        te.exports = { Node: ke };
      } }), wn = me({ "src/language-html/conditional-comment.js"(L, te) {
        O();
        var { ParseSourceSpan: he } = Zt(), ye = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: ue }, { regex: /^\[if([^\]]*)]><!$/, parse: de }, { regex: /^<!\s*\[endif]$/, parse: Ge }];
        function ke(Ue, gt) {
          if (Ue.value)
            for (let { regex: ce, parse: Ae } of ye) {
              let Ve = Ue.value.match(ce);
              if (Ve)
                return Ae(Ue, gt, Ve);
            }
          return null;
        }
        function ue(Ue, gt, ce) {
          let [, Ae, Ve, ze] = ce, Je = 4 + Ae.length, Qe = Ue.sourceSpan.start.moveBy(Je), yt = Qe.moveBy(ze.length), [_t, ct] = (() => {
            try {
              return [!0, gt(ze, Qe).children];
            } catch {
              return [!1, [{ type: "text", value: ze, sourceSpan: new he(Qe, yt) }]];
            }
          })();
          return { type: "ieConditionalComment", complete: _t, children: ct, condition: Ve.trim().replace(/\s+/g, " "), sourceSpan: Ue.sourceSpan, startSourceSpan: new he(Ue.sourceSpan.start, Qe), endSourceSpan: new he(yt, Ue.sourceSpan.end) };
        }
        function de(Ue, gt, ce) {
          let [, Ae] = ce;
          return { type: "ieConditionalStartComment", condition: Ae.trim().replace(/\s+/g, " "), sourceSpan: Ue.sourceSpan };
        }
        function Ge(Ue) {
          return { type: "ieConditionalEndComment", sourceSpan: Ue.sourceSpan };
        }
        te.exports = { parseIeConditionalComment: ke };
      } }), iu = me({ "src/language-html/loc.js"(L, te) {
        O();
        function he(ke) {
          return ke.sourceSpan.start.offset;
        }
        function ye(ke) {
          return ke.sourceSpan.end.offset;
        }
        te.exports = { locStart: he, locEnd: ye };
      } }), ln = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 }), function(Ge) {
          Ge[Ge.RAW_TEXT = 0] = "RAW_TEXT", Ge[Ge.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", Ge[Ge.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        }(L.TagContentType || (L.TagContentType = {}));
        function te(Ge) {
          if (Ge[0] != ":")
            return [null, Ge];
          let Ue = Ge.indexOf(":", 1);
          if (Ue == -1)
            throw new Error(`Unsupported format "${Ge}" expecting ":namespace:name"`);
          return [Ge.slice(1, Ue), Ge.slice(Ue + 1)];
        }
        L.splitNsName = te;
        function he(Ge) {
          return te(Ge)[1] === "ng-container";
        }
        L.isNgContainer = he;
        function ye(Ge) {
          return te(Ge)[1] === "ng-content";
        }
        L.isNgContent = ye;
        function ke(Ge) {
          return te(Ge)[1] === "ng-template";
        }
        L.isNgTemplate = ke;
        function ue(Ge) {
          return Ge === null ? null : te(Ge)[0];
        }
        L.getNsPrefix = ue;
        function de(Ge, Ue) {
          return Ge ? `:${Ge}:${Ue}` : Ue;
        }
        L.mergeNsAndName = de, L.NAMED_ENTITIES = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", GT: ">", Gt: "≫", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", LT: "<", Lt: "≪", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, L.NGSP_UNICODE = "", L.NAMED_ENTITIES.ngsp = L.NGSP_UNICODE;
      } }), su = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = ln(), he = class {
          constructor() {
            let { closedByChildren: de, implicitNamespacePrefix: Ge, contentType: Ue = te.TagContentType.PARSABLE_DATA, closedByParent: gt = !1, isVoid: ce = !1, ignoreFirstLf: Ae = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = !1, this.canSelfClose = !1, de && de.length > 0 && de.forEach((Ve) => this.closedByChildren[Ve] = !0), this.isVoid = ce, this.closedByParent = gt || ce, this.implicitNamespacePrefix = Ge || null, this.contentType = Ue, this.ignoreFirstLf = Ae;
          }
          isClosedByChild(de) {
            return this.isVoid || de.toLowerCase() in this.closedByChildren;
          }
        };
        L.HtmlTagDefinition = he;
        var ye, ke;
        function ue(de) {
          return ke || (ye = new he(), ke = { base: new he({ isVoid: !0 }), meta: new he({ isVoid: !0 }), area: new he({ isVoid: !0 }), embed: new he({ isVoid: !0 }), link: new he({ isVoid: !0 }), img: new he({ isVoid: !0 }), input: new he({ isVoid: !0 }), param: new he({ isVoid: !0 }), hr: new he({ isVoid: !0 }), br: new he({ isVoid: !0 }), source: new he({ isVoid: !0 }), track: new he({ isVoid: !0 }), wbr: new he({ isVoid: !0 }), p: new he({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new he({ closedByChildren: ["tbody", "tfoot"] }), tbody: new he({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new he({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new he({ closedByChildren: ["tr"], closedByParent: !0 }), td: new he({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new he({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new he({ isVoid: !0 }), svg: new he({ implicitNamespacePrefix: "svg" }), math: new he({ implicitNamespacePrefix: "math" }), li: new he({ closedByChildren: ["li"], closedByParent: !0 }), dt: new he({ closedByChildren: ["dt", "dd"] }), dd: new he({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new he({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new he({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new he({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new he({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new he({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new he({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new he({ ignoreFirstLf: !0 }), listing: new he({ ignoreFirstLf: !0 }), style: new he({ contentType: te.TagContentType.RAW_TEXT }), script: new he({ contentType: te.TagContentType.RAW_TEXT }), title: new he({ contentType: te.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new he({ contentType: te.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), ke[de] || ye;
        }
        L.getHtmlTagDefinition = ue;
      } }), Uu = me({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = class {
          constructor(he) {
            let ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = he, this.position = ye;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(he) {
            return he && this.path[this.path.indexOf(he) - 1];
          }
          childOf(he) {
            return this.path[this.path.indexOf(he) + 1];
          }
          first(he) {
            for (let ye = this.path.length - 1; ye >= 0; ye--) {
              let ke = this.path[ye];
              if (ke instanceof he)
                return ke;
            }
          }
          push(he) {
            this.path.push(he);
          }
          pop() {
            return this.path.pop();
          }
        };
        L.AstPath = te;
      } }), au = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Uu(), he = class {
          constructor(Je, Qe, yt) {
            this.value = Je, this.sourceSpan = Qe, this.i18n = yt, this.type = "text";
          }
          visit(Je, Qe) {
            return Je.visitText(this, Qe);
          }
        };
        L.Text = he;
        var ye = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "cdata";
          }
          visit(Je, Qe) {
            return Je.visitCdata(this, Qe);
          }
        };
        L.CDATA = ye;
        var ke = class {
          constructor(Je, Qe, yt, _t, ct, kt) {
            this.switchValue = Je, this.type = Qe, this.cases = yt, this.sourceSpan = _t, this.switchValueSourceSpan = ct, this.i18n = kt;
          }
          visit(Je, Qe) {
            return Je.visitExpansion(this, Qe);
          }
        };
        L.Expansion = ke;
        var ue = class {
          constructor(Je, Qe, yt, _t, ct) {
            this.value = Je, this.expression = Qe, this.sourceSpan = yt, this.valueSourceSpan = _t, this.expSourceSpan = ct;
          }
          visit(Je, Qe) {
            return Je.visitExpansionCase(this, Qe);
          }
        };
        L.ExpansionCase = ue;
        var de = class {
          constructor(Je, Qe, yt) {
            let _t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, ct = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, kt = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = Je, this.value = Qe, this.sourceSpan = yt, this.valueSpan = _t, this.nameSpan = ct, this.i18n = kt, this.type = "attribute";
          }
          visit(Je, Qe) {
            return Je.visitAttribute(this, Qe);
          }
        };
        L.Attribute = de;
        var Ge = class {
          constructor(Je, Qe, yt, _t) {
            let ct = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, kt = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, $t = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, ir = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = Je, this.attrs = Qe, this.children = yt, this.sourceSpan = _t, this.startSourceSpan = ct, this.endSourceSpan = kt, this.nameSpan = $t, this.i18n = ir, this.type = "element";
          }
          visit(Je, Qe) {
            return Je.visitElement(this, Qe);
          }
        };
        L.Element = Ge;
        var Ue = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "comment";
          }
          visit(Je, Qe) {
            return Je.visitComment(this, Qe);
          }
        };
        L.Comment = Ue;
        var gt = class {
          constructor(Je, Qe) {
            this.value = Je, this.sourceSpan = Qe, this.type = "docType";
          }
          visit(Je, Qe) {
            return Je.visitDocType(this, Qe);
          }
        };
        L.DocType = gt;
        function ce(Je, Qe) {
          let yt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, _t = [], ct = Je.visit ? (kt) => Je.visit(kt, yt) || kt.visit(Je, yt) : (kt) => kt.visit(Je, yt);
          return Qe.forEach((kt) => {
            let $t = ct(kt);
            $t && _t.push($t);
          }), _t;
        }
        L.visitAll = ce;
        var Ae = class {
          constructor() {
          }
          visitElement(Je, Qe) {
            this.visitChildren(Qe, (yt) => {
              yt(Je.attrs), yt(Je.children);
            });
          }
          visitAttribute(Je, Qe) {
          }
          visitText(Je, Qe) {
          }
          visitCdata(Je, Qe) {
          }
          visitComment(Je, Qe) {
          }
          visitDocType(Je, Qe) {
          }
          visitExpansion(Je, Qe) {
            return this.visitChildren(Qe, (yt) => {
              yt(Je.cases);
            });
          }
          visitExpansionCase(Je, Qe) {
          }
          visitChildren(Je, Qe) {
            let yt = [], _t = this;
            function ct(kt) {
              kt && yt.push(ce(_t, kt, Je));
            }
            return Qe(ct), Array.prototype.concat.apply([], yt);
          }
        };
        L.RecursiveVisitor = Ae;
        function Ve(Je) {
          let Qe = Je.sourceSpan.start.offset, yt = Je.sourceSpan.end.offset;
          return Je instanceof Ge && (Je.endSourceSpan ? yt = Je.endSourceSpan.end.offset : Je.children && Je.children.length && (yt = Ve(Je.children[Je.children.length - 1]).end)), { start: Qe, end: yt };
        }
        function ze(Je, Qe) {
          let yt = [], _t = new class extends Ae {
            visit(ct, kt) {
              let $t = Ve(ct);
              if ($t.start <= Qe && Qe < $t.end)
                yt.push(ct);
              else
                return !0;
            }
          }();
          return ce(_t, Je), new te.AstPath(yt, Qe);
        }
        L.findNode = ze;
      } }), Ju = me({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        function te(ke, ue) {
          if (ue != null) {
            if (!Array.isArray(ue))
              throw new Error(`Expected '${ke}' to be an array of strings.`);
            for (let de = 0; de < ue.length; de += 1)
              if (typeof ue[de] != "string")
                throw new Error(`Expected '${ke}' to be an array of strings.`);
          }
        }
        L.assertArrayOfStrings = te;
        var he = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function ye(ke, ue) {
          if (ue != null && !(Array.isArray(ue) && ue.length == 2))
            throw new Error(`Expected '${ke}' to be an array, [start, end].`);
          if (ue != null) {
            let de = ue[0], Ge = ue[1];
            he.forEach((Ue) => {
              if (Ue.test(de) || Ue.test(Ge))
                throw new Error(`['${de}', '${Ge}'] contains unusable interpolation symbol.`);
            });
          }
        }
        L.assertInterpolationSymbols = ye;
      } }), Xu = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Ju(), he = class {
          constructor(ye, ke) {
            this.start = ye, this.end = ke;
          }
          static fromArray(ye) {
            return ye ? (te.assertInterpolationSymbols("interpolation", ye), new he(ye[0], ye[1])) : L.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        L.InterpolationConfig = he, L.DEFAULT_INTERPOLATION_CONFIG = new he("{{", "}}");
      } }), ou = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Ft(), he = Zt(), ye = Xu(), ke = ln(), ue;
        (function(z) {
          z[z.TAG_OPEN_START = 0] = "TAG_OPEN_START", z[z.TAG_OPEN_END = 1] = "TAG_OPEN_END", z[z.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", z[z.TAG_CLOSE = 3] = "TAG_CLOSE", z[z.TEXT = 4] = "TEXT", z[z.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", z[z.RAW_TEXT = 6] = "RAW_TEXT", z[z.COMMENT_START = 7] = "COMMENT_START", z[z.COMMENT_END = 8] = "COMMENT_END", z[z.CDATA_START = 9] = "CDATA_START", z[z.CDATA_END = 10] = "CDATA_END", z[z.ATTR_NAME = 11] = "ATTR_NAME", z[z.ATTR_QUOTE = 12] = "ATTR_QUOTE", z[z.ATTR_VALUE = 13] = "ATTR_VALUE", z[z.DOC_TYPE_START = 14] = "DOC_TYPE_START", z[z.DOC_TYPE_END = 15] = "DOC_TYPE_END", z[z.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", z[z.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", z[z.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", z[z.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", z[z.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", z[z.EOF = 21] = "EOF";
        })(ue = L.TokenType || (L.TokenType = {}));
        var de = class {
          constructor(z, le, We) {
            this.type = z, this.parts = le, this.sourceSpan = We;
          }
        };
        L.Token = de;
        var Ge = class extends he.ParseError {
          constructor(z, le, We) {
            super(We, z), this.tokenType = le;
          }
        };
        L.TokenError = Ge;
        var Ue = class {
          constructor(z, le) {
            this.tokens = z, this.errors = le;
          }
        };
        L.TokenizeResult = Ue;
        function gt(z, le, We) {
          let Me = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new Je(new he.ParseSourceFile(z, le), We, Me).tokenize();
        }
        L.tokenize = gt;
        var ce = /\r\n?/g;
        function Ae(z) {
          return `Unexpected character "${z === te.$EOF ? "EOF" : String.fromCharCode(z)}"`;
        }
        function Ve(z) {
          return `Unknown entity "${z}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        var ze = class {
          constructor(z) {
            this.error = z;
          }
        }, Je = class {
          constructor(z, le, We) {
            this._getTagContentType = le, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = We.tokenizeExpansionForms || !1, this._interpolationConfig = We.interpolationConfig || ye.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = We.leadingTriviaChars && We.leadingTriviaChars.map((at) => at.codePointAt(0) || 0), this._canSelfClose = We.canSelfClose || !1, this._allowHtmComponentClosingTags = We.allowHtmComponentClosingTags || !1;
            let Me = We.range || { endPos: z.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = We.escapedString ? new Gt(z, Me) : new Vt(z, Me);
            try {
              this._cursor.init();
            } catch (at) {
              this.handleError(at);
            }
          }
          _processCarriageReturns(z) {
            return z.replace(ce, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== te.$EOF; ) {
              let z = this._cursor.clone();
              try {
                if (this._attemptCharCode(te.$LT))
                  if (this._attemptCharCode(te.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(z) : this._attemptStr("--") ? this._consumeComment(z) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(z) : this._consumeBogusComment(z);
                  else if (this._attemptCharCode(te.$SLASH))
                    this._consumeTagClose(z);
                  else {
                    let le = this._cursor.clone();
                    this._attemptCharCode(te.$QUESTION) ? (this._cursor = le, this._consumeBogusComment(z)) : this._consumeTagOpen(z);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (le) {
                this.handleError(le);
              }
            }
            return this._beginToken(ue.EOF), this._endToken([]), new Ue(Ot(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), !0;
            if ($t(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), !0;
            if (this._cursor.peek() === te.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), !0;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), !0;
            }
            return !1;
          }
          _beginToken(z) {
            let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = le, this._currentTokenType = z;
          }
          _endToken(z) {
            let le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new Ge("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(le));
            if (this._currentTokenType === null)
              throw new Ge("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let We = new de(this._currentTokenType, z, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(We), this._currentTokenStart = null, this._currentTokenType = null, We;
          }
          _createError(z, le) {
            this._isInExpansionForm() && (z += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let We = new Ge(z, this._currentTokenType, le);
            return this._currentTokenStart = null, this._currentTokenType = null, new ze(We);
          }
          handleError(z) {
            if (z instanceof rr && (z = this._createError(z.msg, this._cursor.getSpan(z.cursor))), z instanceof ze)
              this.errors.push(z.error);
            else
              throw z;
          }
          _attemptCharCode(z) {
            return this._cursor.peek() === z ? (this._cursor.advance(), !0) : !1;
          }
          _attemptCharCodeCaseInsensitive(z) {
            return ir(this._cursor.peek(), z) ? (this._cursor.advance(), !0) : !1;
          }
          _requireCharCode(z) {
            let le = this._cursor.clone();
            if (!this._attemptCharCode(z))
              throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _attemptStr(z) {
            let le = z.length;
            if (this._cursor.charsLeft() < le)
              return !1;
            let We = this._cursor.clone();
            for (let Me = 0; Me < le; Me++)
              if (!this._attemptCharCode(z.charCodeAt(Me)))
                return this._cursor = We, !1;
            return !0;
          }
          _attemptStrCaseInsensitive(z) {
            for (let le = 0; le < z.length; le++)
              if (!this._attemptCharCodeCaseInsensitive(z.charCodeAt(le)))
                return !1;
            return !0;
          }
          _requireStr(z) {
            let le = this._cursor.clone();
            if (!this._attemptStr(z))
              throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _requireStrCaseInsensitive(z) {
            let le = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(z))
              throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan(le));
          }
          _attemptCharCodeUntilFn(z) {
            for (; !z(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(z, le) {
            let We = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(z), this._cursor.clone().diff(We) < le)
              throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan(We));
          }
          _attemptUntilChar(z) {
            for (; this._cursor.peek() !== z; )
              this._cursor.advance();
          }
          _readChar(z) {
            if (z && this._cursor.peek() === te.$AMPERSAND)
              return this._decodeEntity();
            {
              let le = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), le;
            }
          }
          _decodeEntity() {
            let z = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(te.$HASH)) {
              let le = this._attemptCharCode(te.$x) || this._attemptCharCode(te.$X), We = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(ct), this._cursor.peek() != te.$SEMICOLON)
                throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan());
              let Me = this._cursor.getChars(We);
              this._cursor.advance();
              try {
                let at = parseInt(Me, le ? 16 : 10);
                return String.fromCharCode(at);
              } catch {
                throw this._createError(Ve(this._cursor.getChars(z)), this._cursor.getSpan());
              }
            } else {
              let le = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(kt), this._cursor.peek() != te.$SEMICOLON)
                return this._cursor = le, "&";
              let We = this._cursor.getChars(le);
              this._cursor.advance();
              let Me = ke.NAMED_ENTITIES[We];
              if (!Me)
                throw this._createError(Ve(We), this._cursor.getSpan(z));
              return Me;
            }
          }
          _consumeRawText(z, le) {
            this._beginToken(z ? ue.ESCAPABLE_RAW_TEXT : ue.RAW_TEXT);
            let We = [];
            for (; ; ) {
              let Me = this._cursor.clone(), at = le();
              if (this._cursor = Me, at)
                break;
              We.push(this._readChar(z));
            }
            return this._endToken([this._processCarriageReturns(We.join(""))]);
          }
          _consumeComment(z) {
            this._beginToken(ue.COMMENT_START, z), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(ue.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(z) {
            this._beginToken(ue.COMMENT_START, z), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === te.$GT), this._beginToken(ue.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(z) {
            this._beginToken(ue.CDATA_START, z), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(ue.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(z) {
            this._beginToken(ue.DOC_TYPE_START, z), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === te.$GT), this._beginToken(ue.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let z = this._cursor.clone(), le = "";
            for (; this._cursor.peek() !== te.$COLON && !_t(this._cursor.peek()); )
              this._cursor.advance();
            let We;
            this._cursor.peek() === te.$COLON ? (le = this._cursor.getChars(z), this._cursor.advance(), We = this._cursor.clone()) : We = z, this._requireCharCodeUntilFn(yt, le === "" ? 0 : 1);
            let Me = this._cursor.getChars(We);
            return [le, Me];
          }
          _consumeTagOpen(z) {
            let le, We, Me, at = this.tokens.length, Jt = this._cursor.clone(), er = [];
            try {
              if (!te.isAsciiLetter(this._cursor.peek()))
                throw this._createError(Ae(this._cursor.peek()), this._cursor.getSpan(z));
              for (Me = this._consumeTagOpenStart(z), We = Me.parts[0], le = Me.parts[1], this._attemptCharCodeUntilFn(Qe); this._cursor.peek() !== te.$SLASH && this._cursor.peek() !== te.$GT; ) {
                let [Er, Nr] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(Qe), this._attemptCharCode(te.$EQ)) {
                  this._attemptCharCodeUntilFn(Qe);
                  let kr = this._consumeAttributeValue();
                  er.push({ prefix: Er, name: Nr, value: kr });
                } else
                  er.push({ prefix: Er, name: Nr });
                this._attemptCharCodeUntilFn(Qe);
              }
              this._consumeTagOpenEnd();
            } catch (Er) {
              if (Er instanceof ze) {
                this._cursor = Jt, Me && (this.tokens.length = at), this._beginToken(ue.TEXT, z), this._endToken(["<"]);
                return;
              }
              throw Er;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === ue.TAG_OPEN_END_VOID)
              return;
            let Ar = this._getTagContentType(le, We, this._fullNameStack.length > 0, er);
            this._handleFullNameStackForTagOpen(We, le), Ar === ke.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(We, le, !1) : Ar === ke.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(We, le, !0);
          }
          _consumeRawTextWithTagClose(z, le, We) {
            this._consumeRawText(We, () => !this._attemptCharCode(te.$LT) || !this._attemptCharCode(te.$SLASH) || (this._attemptCharCodeUntilFn(Qe), !this._attemptStrCaseInsensitive(z ? `${z}:${le}` : le)) ? !1 : (this._attemptCharCodeUntilFn(Qe), this._attemptCharCode(te.$GT))), this._beginToken(ue.TAG_CLOSE), this._requireCharCodeUntilFn((Me) => Me === te.$GT, 3), this._cursor.advance(), this._endToken([z, le]), this._handleFullNameStackForTagClose(z, le);
          }
          _consumeTagOpenStart(z) {
            this._beginToken(ue.TAG_OPEN_START, z);
            let le = this._consumePrefixAndName();
            return this._endToken(le);
          }
          _consumeAttributeName() {
            let z = this._cursor.peek();
            if (z === te.$SQ || z === te.$DQ)
              throw this._createError(Ae(z), this._cursor.getSpan());
            this._beginToken(ue.ATTR_NAME);
            let le = this._consumePrefixAndName();
            return this._endToken(le), le;
          }
          _consumeAttributeValue() {
            let z;
            if (this._cursor.peek() === te.$SQ || this._cursor.peek() === te.$DQ) {
              this._beginToken(ue.ATTR_QUOTE);
              let le = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(le)]), this._beginToken(ue.ATTR_VALUE);
              let We = [];
              for (; this._cursor.peek() !== le; )
                We.push(this._readChar(!0));
              z = this._processCarriageReturns(We.join("")), this._endToken([z]), this._beginToken(ue.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(le)]);
            } else {
              this._beginToken(ue.ATTR_VALUE);
              let le = this._cursor.clone();
              this._requireCharCodeUntilFn(yt, 1), z = this._processCarriageReturns(this._cursor.getChars(le)), this._endToken([z]);
            }
            return z;
          }
          _consumeTagOpenEnd() {
            let z = this._attemptCharCode(te.$SLASH) ? ue.TAG_OPEN_END_VOID : ue.TAG_OPEN_END;
            this._beginToken(z), this._requireCharCode(te.$GT), this._endToken([]);
          }
          _consumeTagClose(z) {
            if (this._beginToken(ue.TAG_CLOSE, z), this._attemptCharCodeUntilFn(Qe), this._allowHtmComponentClosingTags && this._attemptCharCode(te.$SLASH))
              this._attemptCharCodeUntilFn(Qe), this._requireCharCode(te.$GT), this._endToken([]);
            else {
              let [le, We] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(Qe), this._requireCharCode(te.$GT), this._endToken([le, We]), this._handleFullNameStackForTagClose(le, We);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(ue.EXPANSION_FORM_START), this._requireCharCode(te.$LBRACE), this._endToken([]), this._expansionCaseStack.push(ue.EXPANSION_FORM_START), this._beginToken(ue.RAW_TEXT);
            let z = this._readUntil(te.$COMMA);
            this._endToken([z]), this._requireCharCode(te.$COMMA), this._attemptCharCodeUntilFn(Qe), this._beginToken(ue.RAW_TEXT);
            let le = this._readUntil(te.$COMMA);
            this._endToken([le]), this._requireCharCode(te.$COMMA), this._attemptCharCodeUntilFn(Qe);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(ue.EXPANSION_CASE_VALUE);
            let z = this._readUntil(te.$LBRACE).trim();
            this._endToken([z]), this._attemptCharCodeUntilFn(Qe), this._beginToken(ue.EXPANSION_CASE_EXP_START), this._requireCharCode(te.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(Qe), this._expansionCaseStack.push(ue.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(ue.EXPANSION_CASE_EXP_END), this._requireCharCode(te.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(Qe), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(ue.EXPANSION_FORM_END), this._requireCharCode(te.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let z = this._cursor.clone();
            this._beginToken(ue.TEXT, z);
            let le = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (le.push(this._interpolationConfig.start), this._inInterpolation = !0) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (le.push(this._interpolationConfig.end), this._inInterpolation = !1) : le.push(this._readChar(!0));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(le.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === te.$LT || this._cursor.peek() === te.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === te.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(z) {
            let le = this._cursor.clone();
            return this._attemptUntilChar(z), this._cursor.getChars(le);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === ue.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === ue.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== te.$LBRACE)
              return !1;
            if (this._interpolationConfig) {
              let z = this._cursor.clone(), le = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = z, !le;
            }
            return !0;
          }
          _handleFullNameStackForTagOpen(z, le) {
            let We = ke.mergeNsAndName(z, le);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === We) && this._fullNameStack.push(We);
          }
          _handleFullNameStackForTagClose(z, le) {
            let We = ke.mergeNsAndName(z, le);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === We && this._fullNameStack.pop();
          }
        };
        function Qe(z) {
          return !te.isWhitespace(z) || z === te.$EOF;
        }
        function yt(z) {
          return te.isWhitespace(z) || z === te.$GT || z === te.$SLASH || z === te.$SQ || z === te.$DQ || z === te.$EQ;
        }
        function _t(z) {
          return (z < te.$a || te.$z < z) && (z < te.$A || te.$Z < z) && (z < te.$0 || z > te.$9);
        }
        function ct(z) {
          return z == te.$SEMICOLON || z == te.$EOF || !te.isAsciiHexDigit(z);
        }
        function kt(z) {
          return z == te.$SEMICOLON || z == te.$EOF || !te.isAsciiLetter(z);
        }
        function $t(z) {
          return z === te.$EQ || te.isAsciiLetter(z) || te.isDigit(z);
        }
        function ir(z, le) {
          return st(z) == st(le);
        }
        function st(z) {
          return z >= te.$a && z <= te.$z ? z - te.$a + te.$A : z;
        }
        function Ot(z) {
          let le = [], We;
          for (let Me = 0; Me < z.length; Me++) {
            let at = z[Me];
            We && We.type == ue.TEXT && at.type == ue.TEXT ? (We.parts[0] += at.parts[0], We.sourceSpan.end = at.sourceSpan.end) : (We = at, le.push(We));
          }
          return le;
        }
        var Vt = class {
          constructor(z, le) {
            if (z instanceof Vt)
              this.file = z.file, this.input = z.input, this.end = z.end, this.state = Object.assign({}, z.state);
            else {
              if (!le)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = z, this.input = z.content, this.end = le.endPos, this.state = { peek: -1, offset: le.startPos, line: le.startLine, column: le.startCol };
            }
          }
          clone() {
            return new Vt(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(z) {
            return this.state.offset - z.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(z, le) {
            if (z = z || this, le)
              for (z = z.clone(); this.diff(z) > 0 && le.indexOf(z.peek()) !== -1; )
                z.advance();
            return new he.ParseSourceSpan(new he.ParseLocation(z.file, z.state.offset, z.state.line, z.state.column), new he.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(z) {
            return this.input.substring(z.state.offset, this.state.offset);
          }
          charAt(z) {
            return this.input.charCodeAt(z);
          }
          advanceState(z) {
            if (z.offset >= this.end)
              throw this.state = z, new rr('Unexpected character "EOF"', this);
            let le = this.charAt(z.offset);
            le === te.$LF ? (z.line++, z.column = 0) : te.isNewLine(le) || z.column++, z.offset++, this.updatePeek(z);
          }
          updatePeek(z) {
            z.peek = z.offset >= this.end ? te.$EOF : this.charAt(z.offset);
          }
        }, Gt = class extends Vt {
          constructor(z, le) {
            z instanceof Gt ? (super(z), this.internalState = Object.assign({}, z.internalState)) : (super(z, le), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new Gt(this);
          }
          getChars(z) {
            let le = z.clone(), We = "";
            for (; le.internalState.offset < this.internalState.offset; )
              We += String.fromCodePoint(le.peek()), le.advance();
            return We;
          }
          processEscapeSequence() {
            let z = () => this.internalState.peek;
            if (z() === te.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), z() === te.$n)
                this.state.peek = te.$LF;
              else if (z() === te.$r)
                this.state.peek = te.$CR;
              else if (z() === te.$v)
                this.state.peek = te.$VTAB;
              else if (z() === te.$t)
                this.state.peek = te.$TAB;
              else if (z() === te.$b)
                this.state.peek = te.$BSPACE;
              else if (z() === te.$f)
                this.state.peek = te.$FF;
              else if (z() === te.$u)
                if (this.advanceState(this.internalState), z() === te.$LBRACE) {
                  this.advanceState(this.internalState);
                  let le = this.clone(), We = 0;
                  for (; z() !== te.$RBRACE; )
                    this.advanceState(this.internalState), We++;
                  this.state.peek = this.decodeHexDigits(le, We);
                } else {
                  let le = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(le, 4);
                }
              else if (z() === te.$x) {
                this.advanceState(this.internalState);
                let le = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(le, 2);
              } else if (te.isOctalDigit(z())) {
                let le = "", We = 0, Me = this.clone();
                for (; te.isOctalDigit(z()) && We < 3; )
                  Me = this.clone(), le += String.fromCodePoint(z()), this.advanceState(this.internalState), We++;
                this.state.peek = parseInt(le, 8), this.internalState = Me.internalState;
              } else
                te.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(z, le) {
            let We = this.input.substr(z.internalState.offset, le), Me = parseInt(We, 16);
            if (isNaN(Me))
              throw z.state = z.internalState, new rr("Invalid hexadecimal escape sequence", z);
            return Me;
          }
        }, rr = class {
          constructor(z, le) {
            this.msg = z, this.cursor = le;
          }
        };
        L.CursorError = rr;
      } }), lu = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Zt(), he = au(), ye = ou(), ke = ln(), ue = class extends te.ParseError {
          constructor(ce, Ae, Ve) {
            super(Ae, Ve), this.elementName = ce;
          }
          static create(ce, Ae, Ve) {
            return new ue(ce, Ae, Ve);
          }
        };
        L.TreeError = ue;
        var de = class {
          constructor(ce, Ae) {
            this.rootNodes = ce, this.errors = Ae;
          }
        };
        L.ParseTreeResult = de;
        var Ge = class {
          constructor(ce) {
            this.getTagDefinition = ce;
          }
          parse(ce, Ae, Ve) {
            let ze = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, Je = arguments.length > 4 ? arguments[4] : void 0, Qe = (Vt) => function(Gt) {
              for (var rr = arguments.length, z = new Array(rr > 1 ? rr - 1 : 0), le = 1; le < rr; le++)
                z[le - 1] = arguments[le];
              return Vt(Gt.toLowerCase(), ...z);
            }, yt = ze ? this.getTagDefinition : Qe(this.getTagDefinition), _t = (Vt) => yt(Vt).contentType, ct = ze ? Je : Qe(Je), kt = Je ? (Vt, Gt, rr, z) => {
              let le = ct(Vt, Gt, rr, z);
              return le !== void 0 ? le : _t(Vt);
            } : _t, $t = ye.tokenize(ce, Ae, kt, Ve), ir = Ve && Ve.canSelfClose || !1, st = Ve && Ve.allowHtmComponentClosingTags || !1, Ot = new Ue($t.tokens, yt, ir, st, ze).build();
            return new de(Ot.rootNodes, $t.errors.concat(Ot.errors));
          }
        };
        L.Parser = Ge;
        var Ue = class {
          constructor(ce, Ae, Ve, ze, Je) {
            this.tokens = ce, this.getTagDefinition = Ae, this.canSelfClose = Ve, this.allowHtmComponentClosingTags = ze, this.isTagNameCaseSensitive = Je, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== ye.TokenType.EOF; )
              this._peek.type === ye.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === ye.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === ye.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === ye.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === ye.TokenType.TEXT || this._peek.type === ye.TokenType.RAW_TEXT || this._peek.type === ye.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === ye.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === ye.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new de(this._rootNodes, this._errors);
          }
          _advance() {
            let ce = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], ce;
          }
          _advanceIf(ce) {
            return this._peek.type === ce ? this._advance() : null;
          }
          _consumeCdata(ce) {
            let Ae = this._advance(), Ve = this._getText(Ae), ze = this._advanceIf(ye.TokenType.CDATA_END);
            this._addToParent(new he.CDATA(Ve, new te.ParseSourceSpan(ce.sourceSpan.start, (ze || Ae).sourceSpan.end)));
          }
          _consumeComment(ce) {
            let Ae = this._advanceIf(ye.TokenType.RAW_TEXT), Ve = this._advanceIf(ye.TokenType.COMMENT_END), ze = Ae != null ? Ae.parts[0].trim() : null, Je = new te.ParseSourceSpan(ce.sourceSpan.start, (Ve || Ae || ce).sourceSpan.end);
            this._addToParent(new he.Comment(ze, Je));
          }
          _consumeDocType(ce) {
            let Ae = this._advanceIf(ye.TokenType.RAW_TEXT), Ve = this._advanceIf(ye.TokenType.DOC_TYPE_END), ze = Ae != null ? Ae.parts[0].trim() : null, Je = new te.ParseSourceSpan(ce.sourceSpan.start, (Ve || Ae || ce).sourceSpan.end);
            this._addToParent(new he.DocType(ze, Je));
          }
          _consumeExpansion(ce) {
            let Ae = this._advance(), Ve = this._advance(), ze = [];
            for (; this._peek.type === ye.TokenType.EXPANSION_CASE_VALUE; ) {
              let Qe = this._parseExpansionCase();
              if (!Qe)
                return;
              ze.push(Qe);
            }
            if (this._peek.type !== ye.TokenType.EXPANSION_FORM_END) {
              this._errors.push(ue.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let Je = new te.ParseSourceSpan(ce.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new he.Expansion(Ae.parts[0], Ve.parts[0], ze, Je, Ae.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let ce = this._advance();
            if (this._peek.type !== ye.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(ue.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let Ae = this._advance(), Ve = this._collectExpansionExpTokens(Ae);
            if (!Ve)
              return null;
            let ze = this._advance();
            Ve.push(new ye.Token(ye.TokenType.EOF, [], ze.sourceSpan));
            let Je = new Ue(Ve, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (Je.errors.length > 0)
              return this._errors = this._errors.concat(Je.errors), null;
            let Qe = new te.ParseSourceSpan(ce.sourceSpan.start, ze.sourceSpan.end), yt = new te.ParseSourceSpan(Ae.sourceSpan.start, ze.sourceSpan.end);
            return new he.ExpansionCase(ce.parts[0], Je.rootNodes, Qe, ce.sourceSpan, yt);
          }
          _collectExpansionExpTokens(ce) {
            let Ae = [], Ve = [ye.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === ye.TokenType.EXPANSION_FORM_START || this._peek.type === ye.TokenType.EXPANSION_CASE_EXP_START) && Ve.push(this._peek.type), this._peek.type === ye.TokenType.EXPANSION_CASE_EXP_END)
                if (gt(Ve, ye.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (Ve.pop(), Ve.length == 0)
                    return Ae;
                } else
                  return this._errors.push(ue.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === ye.TokenType.EXPANSION_FORM_END)
                if (gt(Ve, ye.TokenType.EXPANSION_FORM_START))
                  Ve.pop();
                else
                  return this._errors.push(ue.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === ye.TokenType.EOF)
                return this._errors.push(ue.create(null, ce.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              Ae.push(this._advance());
            }
          }
          _getText(ce) {
            let Ae = ce.parts[0];
            if (Ae.length > 0 && Ae[0] == `
`) {
              let Ve = this._getParentElement();
              Ve != null && Ve.children.length == 0 && this.getTagDefinition(Ve.name).ignoreFirstLf && (Ae = Ae.substring(1));
            }
            return Ae;
          }
          _consumeText(ce) {
            let Ae = this._getText(ce);
            Ae.length > 0 && this._addToParent(new he.Text(Ae, ce.sourceSpan));
          }
          _closeVoidElement() {
            let ce = this._getParentElement();
            ce && this.getTagDefinition(ce.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(ce) {
            let Ae = ce.parts[0], Ve = ce.parts[1], ze = [];
            for (; this._peek.type === ye.TokenType.ATTR_NAME; )
              ze.push(this._consumeAttr(this._advance()));
            let Je = this._getElementFullName(Ae, Ve, this._getParentElement()), Qe = !1;
            if (this._peek.type === ye.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), Qe = !0;
              let $t = this.getTagDefinition(Je);
              this.canSelfClose || $t.canSelfClose || ke.getNsPrefix(Je) !== null || $t.isVoid || this._errors.push(ue.create(Je, ce.sourceSpan, `Only void and foreign elements can be self closed "${ce.parts[1]}"`));
            } else
              this._peek.type === ye.TokenType.TAG_OPEN_END && (this._advance(), Qe = !1);
            let yt = this._peek.sourceSpan.start, _t = new te.ParseSourceSpan(ce.sourceSpan.start, yt), ct = new te.ParseSourceSpan(ce.sourceSpan.start.moveBy(1), ce.sourceSpan.end), kt = new he.Element(Je, ze, [], _t, _t, void 0, ct);
            this._pushElement(kt), Qe && (this._popElement(Je), kt.endSourceSpan = _t);
          }
          _pushElement(ce) {
            let Ae = this._getParentElement();
            Ae && this.getTagDefinition(Ae.name).isClosedByChild(ce.name) && this._elementStack.pop(), this._addToParent(ce), this._elementStack.push(ce);
          }
          _consumeEndTag(ce) {
            let Ae = this.allowHtmComponentClosingTags && ce.parts.length === 0 ? null : this._getElementFullName(ce.parts[0], ce.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = ce.sourceSpan), Ae && this.getTagDefinition(Ae).isVoid)
              this._errors.push(ue.create(Ae, ce.sourceSpan, `Void elements do not have end tags "${ce.parts[1]}"`));
            else if (!this._popElement(Ae)) {
              let Ve = `Unexpected closing tag "${Ae}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this._errors.push(ue.create(Ae, ce.sourceSpan, Ve));
            }
          }
          _popElement(ce) {
            for (let Ae = this._elementStack.length - 1; Ae >= 0; Ae--) {
              let Ve = this._elementStack[Ae];
              if (!ce || (ke.getNsPrefix(Ve.name) ? Ve.name == ce : Ve.name.toLowerCase() == ce.toLowerCase()))
                return this._elementStack.splice(Ae, this._elementStack.length - Ae), !0;
              if (!this.getTagDefinition(Ve.name).closedByParent)
                return !1;
            }
            return !1;
          }
          _consumeAttr(ce) {
            let Ae = ke.mergeNsAndName(ce.parts[0], ce.parts[1]), Ve = ce.sourceSpan.end, ze = "", Je, Qe;
            if (this._peek.type === ye.TokenType.ATTR_QUOTE && (Qe = this._advance().sourceSpan.start), this._peek.type === ye.TokenType.ATTR_VALUE) {
              let yt = this._advance();
              ze = yt.parts[0], Ve = yt.sourceSpan.end, Je = yt.sourceSpan;
            }
            return this._peek.type === ye.TokenType.ATTR_QUOTE && (Ve = this._advance().sourceSpan.end, Je = new te.ParseSourceSpan(Qe, Ve)), new he.Attribute(Ae, ze, new te.ParseSourceSpan(ce.sourceSpan.start, Ve), Je, ce.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let ce = null;
            for (let Ae = this._elementStack.length - 1; Ae >= 0; Ae--) {
              if (!ke.isNgContainer(this._elementStack[Ae].name))
                return { parent: this._elementStack[Ae], container: ce };
              ce = this._elementStack[Ae];
            }
            return { parent: null, container: ce };
          }
          _addToParent(ce) {
            let Ae = this._getParentElement();
            Ae != null ? Ae.children.push(ce) : this._rootNodes.push(ce);
          }
          _insertBeforeContainer(ce, Ae, Ve) {
            if (!Ae)
              this._addToParent(Ve), this._elementStack.push(Ve);
            else {
              if (ce) {
                let ze = ce.children.indexOf(Ae);
                ce.children[ze] = Ve;
              } else
                this._rootNodes.push(Ve);
              Ve.children.push(Ae), this._elementStack.splice(this._elementStack.indexOf(Ae), 0, Ve);
            }
          }
          _getElementFullName(ce, Ae, Ve) {
            return ce === "" && (ce = this.getTagDefinition(Ae).implicitNamespacePrefix || "", ce === "" && Ve != null && (ce = ke.getNsPrefix(Ve.name))), ke.mergeNsAndName(ce, Ae);
          }
        };
        function gt(ce, Ae) {
          return ce.length > 0 && ce[ce.length - 1] === Ae;
        }
      } }), Nn = me({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = su(), he = lu(), ye = lu();
        L.ParseTreeResult = ye.ParseTreeResult, L.TreeError = ye.TreeError;
        var ke = class extends he.Parser {
          constructor() {
            super(te.getHtmlTagDefinition);
          }
          parse(ue, de, Ge) {
            let Ue = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, gt = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(ue, de, Ge, Ue, gt);
          }
        };
        L.HtmlParser = ke;
      } }), _n = me({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(L) {
        O(), Object.defineProperty(L, "__esModule", { value: !0 });
        var te = Nn(), he = ln();
        L.TagContentType = he.TagContentType;
        var ye = null, ke = () => (ye || (ye = new te.HtmlParser()), ye);
        function ue(de) {
          let Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: Ue = !1, allowHtmComponentClosingTags: gt = !1, isTagNameCaseSensitive: ce = !1, getTagContentType: Ae } = Ge;
          return ke().parse(de, "angular-html-parser", { tokenizeExpansionForms: !1, interpolationConfig: void 0, canSelfClose: Ue, allowHtmComponentClosingTags: gt }, ce, Ae);
        }
        L.parse = ue;
      } });
      O();
      var { ParseSourceSpan: pn, ParseLocation: pu, ParseSourceFile: Wu } = Zt(), Hi = ne(), Yi = yr(), Fn = Pr(), { inferParserByLanguage: Yr } = nu(), Ki = Ru(), cu = zi(), zu = Ut(), { hasPragma: Qi } = Vu(), { Node: Zi } = Gu(), { parseIeConditionalComment: es } = wn(), { locStart: ts, locEnd: rs } = iu();
      function ns(L, te, he) {
        let { canSelfClose: ye, normalizeTagName: ke, normalizeAttributeName: ue, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ge, getTagContentType: Ue } = te, gt = _n(), { RecursiveVisitor: ce, visitAll: Ae } = au(), { ParseSourceSpan: Ve } = Zt(), { getHtmlTagDefinition: ze } = su(), { rootNodes: Je, errors: Qe } = gt.parse(L, { canSelfClose: ye, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ge, getTagContentType: Ue });
        if (he.parser === "vue")
          if (Je.some((st) => st.type === "docType" && st.value === "html" || st.type === "element" && st.name.toLowerCase() === "html")) {
            ye = !0, ke = !0, ue = !0, de = !0, Ge = !1;
            let st = gt.parse(L, { canSelfClose: ye, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ge });
            Je = st.rootNodes, Qe = st.errors;
          } else {
            let st = (Ot) => {
              if (!Ot || Ot.type !== "element" || Ot.name !== "template")
                return !1;
              let Vt = Ot.attrs.find((rr) => rr.name === "lang"), Gt = Vt && Vt.value;
              return !Gt || Yr(Gt, he) === "html";
            };
            if (Je.some(st)) {
              let Ot, Vt = () => gt.parse(L, { canSelfClose: ye, allowHtmComponentClosingTags: de, isTagNameCaseSensitive: Ge }), Gt = () => Ot || (Ot = Vt()), rr = (z) => Gt().rootNodes.find((le) => {
                let { startSourceSpan: We } = le;
                return We && We.start.offset === z.startSourceSpan.start.offset;
              });
              for (let z = 0; z < Je.length; z++) {
                let le = Je[z], { endSourceSpan: We, startSourceSpan: Me } = le;
                if (We === null)
                  Qe = Gt().errors, Je[z] = rr(le) || le;
                else if (st(le)) {
                  let at = Gt(), Jt = Me.end.offset, er = We.start.offset;
                  for (let Ar of at.errors) {
                    let { offset: Er } = Ar.span.start;
                    if (Jt < Er && Er < er) {
                      Qe = [Ar];
                      break;
                    }
                  }
                  Je[z] = rr(le) || le;
                }
              }
            }
          }
        if (Qe.length > 0) {
          let { msg: st, span: { start: Ot, end: Vt } } = Qe[0];
          throw Fn(st, { start: { line: Ot.line + 1, column: Ot.col + 1 }, end: { line: Vt.line + 1, column: Vt.col + 1 } });
        }
        let yt = (st) => {
          let Ot = st.name.startsWith(":") ? st.name.slice(1).split(":")[0] : null, Vt = st.nameSpan.toString(), Gt = Ot !== null && Vt.startsWith(`${Ot}:`), rr = Gt ? Vt.slice(Ot.length + 1) : Vt;
          st.name = rr, st.namespace = Ot, st.hasExplicitNamespace = Gt;
        }, _t = (st) => {
          switch (st.type) {
            case "element":
              yt(st);
              for (let Ot of st.attrs)
                yt(Ot), Ot.valueSpan ? (Ot.value = Ot.valueSpan.toString(), /["']/.test(Ot.value[0]) && (Ot.value = Ot.value.slice(1, -1))) : Ot.value = null;
              break;
            case "comment":
              st.value = st.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              st.value = st.sourceSpan.toString();
              break;
          }
        }, ct = (st, Ot) => {
          let Vt = st.toLowerCase();
          return Ot(Vt) ? Vt : st;
        }, kt = (st) => {
          if (st.type === "element" && (ke && (!st.namespace || st.namespace === st.tagDefinition.implicitNamespacePrefix || zu(st)) && (st.name = ct(st.name, (Ot) => Ot in Ki)), ue)) {
            let Ot = cu[st.name] || /* @__PURE__ */ Object.create(null);
            for (let Vt of st.attrs)
              Vt.namespace || (Vt.name = ct(Vt.name, (Gt) => st.name in cu && (Gt in cu["*"] || Gt in Ot)));
          }
        }, $t = (st) => {
          st.sourceSpan && st.endSourceSpan && (st.sourceSpan = new Ve(st.sourceSpan.start, st.endSourceSpan.end));
        }, ir = (st) => {
          if (st.type === "element") {
            let Ot = ze(Ge ? st.name : st.name.toLowerCase());
            !st.namespace || st.namespace === Ot.implicitNamespacePrefix || zu(st) ? st.tagDefinition = Ot : st.tagDefinition = ze("");
          }
        };
        return Ae(new class extends ce {
          visit(st) {
            _t(st), ir(st), kt(st), $t(st);
          }
        }(), Je), Je;
      }
      function kn(L, te, he) {
        let ye = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, { frontMatter: ke, content: ue } = ye ? Hi(L) : { frontMatter: null, content: L }, de = new Wu(L, te.filepath), Ge = new pu(de, 0, 0, 0), Ue = Ge.moveBy(L.length), gt = { type: "root", sourceSpan: new pn(Ge, Ue), children: ns(ue, he, te) };
        if (ke) {
          let Ve = new pu(de, 0, 0, 0), ze = Ve.moveBy(ke.raw.length);
          ke.sourceSpan = new pn(Ve, ze), gt.children.unshift(ke);
        }
        let ce = new Zi(gt), Ae = (Ve, ze) => {
          let { offset: Je } = ze, Qe = L.slice(0, Je).replace(/[^\n\r]/g, " "), yt = kn(Qe + Ve, te, he, !1);
          yt.sourceSpan = new pn(ze, Yi(yt.children).sourceSpan.end);
          let _t = yt.children[0];
          return _t.length === Je ? yt.children.shift() : (_t.sourceSpan = new pn(_t.sourceSpan.start.moveBy(Je), _t.sourceSpan.end), _t.value = _t.value.slice(Je)), yt;
        };
        return ce.walk((Ve) => {
          if (Ve.type === "comment") {
            let ze = es(Ve, Ae);
            ze && Ve.parent.replaceChild(Ve, ze);
          }
        }), ce;
      }
      function An() {
        let { name: L, canSelfClose: te = !1, normalizeTagName: he = !1, normalizeAttributeName: ye = !1, allowHtmComponentClosingTags: ke = !1, isTagNameCaseSensitive: ue = !1, getTagContentType: de } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (Ge, Ue, gt) => kn(Ge, Object.assign({ parser: L }, gt), { canSelfClose: te, normalizeTagName: he, normalizeAttributeName: ye, allowHtmComponentClosingTags: ke, isTagNameCaseSensitive: ue, getTagContentType: de }), hasPragma: Qi, astFormat: "html", locStart: ts, locEnd: rs };
      }
      we.exports = { parsers: { html: An({ name: "html", canSelfClose: !0, normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }), angular: An({ name: "angular", canSelfClose: !0 }), vue: An({ name: "vue", canSelfClose: !0, isTagNameCaseSensitive: !0, getTagContentType: (L, te, he, ye) => {
        if (L.toLowerCase() !== "html" && !he && (L !== "template" || ye.some((ke) => {
          let { name: ue, value: de } = ke;
          return ue === "lang" && de !== "html" && de !== "" && de !== void 0;
        })))
          return _n().TagContentType.RAW_TEXT;
      } }), lwc: An({ name: "lwc" }) } };
    });
    return $i();
  });
} }), Dl = ta({ "node_modules/prettier/standalone.js"(Ur, Jr) {
  (function(Fe) {
    if (typeof Ur == "object" && typeof Jr == "object")
      Jr.exports = Fe();
    else if (typeof define == "function" && define.amd)
      define(Fe);
    else {
      var Yt = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      Yt.prettier = Fe();
    }
  })(function() {
    var Fe = (Z, V) => () => (V || Z((V = { exports: {} }).exports, V), V.exports), Yt = Fe((Z, V) => {
      var W = function(Q) {
        return Q && Q.Math == Math && Q;
      };
      V.exports = W(typeof globalThis == "object" && globalThis) || W(typeof window == "object" && window) || W(typeof self == "object" && self) || W(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), hr = Fe((Z, V) => {
      V.exports = function(W) {
        try {
          return !!W();
        } catch {
          return !0;
        }
      };
    }), br = Fe((Z, V) => {
      var W = hr();
      V.exports = !W(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Hr = Fe((Z, V) => {
      var W = hr();
      V.exports = !W(function() {
        var Q = function() {
        }.bind();
        return typeof Q != "function" || Q.hasOwnProperty("prototype");
      });
    }), gr = Fe((Z, V) => {
      var W = Hr(), Q = Function.prototype.call;
      V.exports = W ? Q.bind(Q) : function() {
        return Q.apply(Q, arguments);
      };
    }), Dn = Fe((Z) => {
      var V = {}.propertyIsEnumerable, W = Object.getOwnPropertyDescriptor, Q = W && !V.call({ 1: 2 }, 1);
      Z.f = Q ? function(Y) {
        var re = W(this, Y);
        return !!re && re.enumerable;
      } : V;
    }), jr = Fe((Z, V) => {
      V.exports = function(W, Q) {
        return { enumerable: !(W & 1), configurable: !(W & 2), writable: !(W & 4), value: Q };
      };
    }), Dr = Fe((Z, V) => {
      var W = Hr(), Q = Function.prototype, Y = Q.call, re = W && Q.bind.bind(Y, Y);
      V.exports = W ? re : function(Ce) {
        return function() {
          return Y.apply(Ce, arguments);
        };
      };
    }), Tr = Fe((Z, V) => {
      var W = Dr(), Q = W({}.toString), Y = W("".slice);
      V.exports = function(re) {
        return Y(Q(re), 8, -1);
      };
    }), Zr = Fe((Z, V) => {
      var W = Dr(), Q = hr(), Y = Tr(), re = Object, Ce = W("".split);
      V.exports = Q(function() {
        return !re("z").propertyIsEnumerable(0);
      }) ? function(Ie) {
        return Y(Ie) == "String" ? Ce(Ie, "") : re(Ie);
      } : re;
    }), nn = Fe((Z, V) => {
      V.exports = function(W) {
        return W == null;
      };
    }), qn = Fe((Z, V) => {
      var W = nn(), Q = TypeError;
      V.exports = function(Y) {
        if (W(Y))
          throw Q("Can't call method on " + Y);
        return Y;
      };
    }), dn = Fe((Z, V) => {
      var W = Zr(), Q = qn();
      V.exports = function(Y) {
        return W(Q(Y));
      };
    }), Vn = Fe((Z, V) => {
      var W = typeof document == "object" && document.all, Q = typeof W > "u" && W !== void 0;
      V.exports = { all: W, IS_HTMLDDA: Q };
    }), dr = Fe((Z, V) => {
      var W = Vn(), Q = W.all;
      V.exports = W.IS_HTMLDDA ? function(Y) {
        return typeof Y == "function" || Y === Q;
      } : function(Y) {
        return typeof Y == "function";
      };
    }), Lr = Fe((Z, V) => {
      var W = dr(), Q = Vn(), Y = Q.all;
      V.exports = Q.IS_HTMLDDA ? function(re) {
        return typeof re == "object" ? re !== null : W(re) || re === Y;
      } : function(re) {
        return typeof re == "object" ? re !== null : W(re);
      };
    }), un = Fe((Z, V) => {
      var W = Yt(), Q = dr(), Y = function(re) {
        return Q(re) ? re : void 0;
      };
      V.exports = function(re, Ce) {
        return arguments.length < 2 ? Y(W[re]) : W[re] && W[re][Ce];
      };
    }), Gn = Fe((Z, V) => {
      var W = Dr();
      V.exports = W({}.isPrototypeOf);
    }), ii = Fe((Z, V) => {
      var W = un();
      V.exports = W("navigator", "userAgent") || "";
    }), si = Fe((Z, V) => {
      var W = Yt(), Q = ii(), Y = W.process, re = W.Deno, Ce = Y && Y.versions || re && re.version, Ie = Ce && Ce.v8, me, qe;
      Ie && (me = Ie.split("."), qe = me[0] > 0 && me[0] < 4 ? 1 : +(me[0] + me[1])), !qe && Q && (me = Q.match(/Edge\/(\d+)/), (!me || me[1] >= 74) && (me = Q.match(/Chrome\/(\d+)/), me && (qe = +me[1]))), V.exports = qe;
    }), Un = Fe((Z, V) => {
      var W = si(), Q = hr();
      V.exports = !!Object.getOwnPropertySymbols && !Q(function() {
        var Y = Symbol();
        return !String(Y) || !(Object(Y) instanceof Symbol) || !Symbol.sham && W && W < 41;
      });
    }), Jn = Fe((Z, V) => {
      var W = Un();
      V.exports = W && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Xn = Fe((Z, V) => {
      var W = un(), Q = dr(), Y = Gn(), re = Jn(), Ce = Object;
      V.exports = re ? function(Ie) {
        return typeof Ie == "symbol";
      } : function(Ie) {
        var me = W("Symbol");
        return Q(me) && Y(me.prototype, Ce(Ie));
      };
    }), fn = Fe((Z, V) => {
      var W = String;
      V.exports = function(Q) {
        try {
          return W(Q);
        } catch {
          return "Object";
        }
      };
    }), sn = Fe((Z, V) => {
      var W = dr(), Q = fn(), Y = TypeError;
      V.exports = function(re) {
        if (W(re))
          return re;
        throw Y(Q(re) + " is not a function");
      };
    }), mn = Fe((Z, V) => {
      var W = sn(), Q = nn();
      V.exports = function(Y, re) {
        var Ce = Y[re];
        return Q(Ce) ? void 0 : W(Ce);
      };
    }), ai = Fe((Z, V) => {
      var W = gr(), Q = dr(), Y = Lr(), re = TypeError;
      V.exports = function(Ce, Ie) {
        var me, qe;
        if (Ie === "string" && Q(me = Ce.toString) && !Y(qe = W(me, Ce)) || Q(me = Ce.valueOf) && !Y(qe = W(me, Ce)) || Ie !== "string" && Q(me = Ce.toString) && !Y(qe = W(me, Ce)))
          return qe;
        throw re("Can't convert object to primitive value");
      };
    }), oi = Fe((Z, V) => {
      V.exports = !1;
    }), hn = Fe((Z, V) => {
      var W = Yt(), Q = Object.defineProperty;
      V.exports = function(Y, re) {
        try {
          Q(W, Y, { value: re, configurable: !0, writable: !0 });
        } catch {
          W[Y] = re;
        }
        return re;
      };
    }), gn = Fe((Z, V) => {
      var W = Yt(), Q = hn(), Y = "__core-js_shared__", re = W[Y] || Q(Y, {});
      V.exports = re;
    }), Wn = Fe((Z, V) => {
      var W = oi(), Q = gn();
      (V.exports = function(Y, re) {
        return Q[Y] || (Q[Y] = re !== void 0 ? re : {});
      })("versions", []).push({ version: "3.26.1", mode: W ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), Sn = Fe((Z, V) => {
      var W = qn(), Q = Object;
      V.exports = function(Y) {
        return Q(W(Y));
      };
    }), _r = Fe((Z, V) => {
      var W = Dr(), Q = Sn(), Y = W({}.hasOwnProperty);
      V.exports = Object.hasOwn || function(re, Ce) {
        return Y(Q(re), Ce);
      };
    }), zn = Fe((Z, V) => {
      var W = Dr(), Q = 0, Y = Math.random(), re = W(1 .toString);
      V.exports = function(Ce) {
        return "Symbol(" + (Ce === void 0 ? "" : Ce) + ")_" + re(++Q + Y, 36);
      };
    }), Or = Fe((Z, V) => {
      var W = Yt(), Q = Wn(), Y = _r(), re = zn(), Ce = Un(), Ie = Jn(), me = Q("wks"), qe = W.Symbol, et = qe && qe.for, Ze = Ie ? qe : qe && qe.withoutSetter || re;
      V.exports = function(nt) {
        if (!Y(me, nt) || !(Ce || typeof me[nt] == "string")) {
          var rt = "Symbol." + nt;
          Ce && Y(qe, nt) ? me[nt] = qe[nt] : Ie && et ? me[nt] = et(rt) : me[nt] = Ze(rt);
        }
        return me[nt];
      };
    }), li = Fe((Z, V) => {
      var W = gr(), Q = Lr(), Y = Xn(), re = mn(), Ce = ai(), Ie = Or(), me = TypeError, qe = Ie("toPrimitive");
      V.exports = function(et, Ze) {
        if (!Q(et) || Y(et))
          return et;
        var nt = re(et, qe), rt;
        if (nt) {
          if (Ze === void 0 && (Ze = "default"), rt = W(nt, et, Ze), !Q(rt) || Y(rt))
            return rt;
          throw me("Can't convert object to primitive value");
        }
        return Ze === void 0 && (Ze = "number"), Ce(et, Ze);
      };
    }), yn = Fe((Z, V) => {
      var W = li(), Q = Xn();
      V.exports = function(Y) {
        var re = W(Y, "string");
        return Q(re) ? re : re + "";
      };
    }), pi = Fe((Z, V) => {
      var W = Yt(), Q = Lr(), Y = W.document, re = Q(Y) && Q(Y.createElement);
      V.exports = function(Ce) {
        return re ? Y.createElement(Ce) : {};
      };
    }), Hn = Fe((Z, V) => {
      var W = br(), Q = hr(), Y = pi();
      V.exports = !W && !Q(function() {
        return Object.defineProperty(Y("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Yn = Fe((Z) => {
      var V = br(), W = gr(), Q = Dn(), Y = jr(), re = dn(), Ce = yn(), Ie = _r(), me = Hn(), qe = Object.getOwnPropertyDescriptor;
      Z.f = V ? qe : function(et, Ze) {
        if (et = re(et), Ze = Ce(Ze), me)
          try {
            return qe(et, Ze);
          } catch {
          }
        if (Ie(et, Ze))
          return Y(!W(Q.f, et, Ze), et[Ze]);
      };
    }), ci = Fe((Z, V) => {
      var W = br(), Q = hr();
      V.exports = W && Q(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }), Xr = Fe((Z, V) => {
      var W = Lr(), Q = String, Y = TypeError;
      V.exports = function(re) {
        if (W(re))
          return re;
        throw Y(Q(re) + " is not an object");
      };
    }), en = Fe((Z) => {
      var V = br(), W = Hn(), Q = ci(), Y = Xr(), re = yn(), Ce = TypeError, Ie = Object.defineProperty, me = Object.getOwnPropertyDescriptor, qe = "enumerable", et = "configurable", Ze = "writable";
      Z.f = V ? Q ? function(nt, rt, O) {
        if (Y(nt), rt = re(rt), Y(O), typeof nt == "function" && rt === "prototype" && "value" in O && Ze in O && !O[Ze]) {
          var Ft = me(nt, rt);
          Ft && Ft[Ze] && (nt[rt] = O.value, O = { configurable: et in O ? O[et] : Ft[et], enumerable: qe in O ? O[qe] : Ft[qe], writable: !1 });
        }
        return Ie(nt, rt, O);
      } : Ie : function(nt, rt, O) {
        if (Y(nt), rt = re(rt), Y(O), W)
          try {
            return Ie(nt, rt, O);
          } catch {
          }
        if ("get" in O || "set" in O)
          throw Ce("Accessors not supported");
        return "value" in O && (nt[rt] = O.value), nt;
      };
    }), Kn = Fe((Z, V) => {
      var W = br(), Q = en(), Y = jr();
      V.exports = W ? function(re, Ce, Ie) {
        return Q.f(re, Ce, Y(1, Ie));
      } : function(re, Ce, Ie) {
        return re[Ce] = Ie, re;
      };
    }), Di = Fe((Z, V) => {
      var W = br(), Q = _r(), Y = Function.prototype, re = W && Object.getOwnPropertyDescriptor, Ce = Q(Y, "name"), Ie = Ce && function() {
      }.name === "something", me = Ce && (!W || W && re(Y, "name").configurable);
      V.exports = { EXISTS: Ce, PROPER: Ie, CONFIGURABLE: me };
    }), Qn = Fe((Z, V) => {
      var W = Dr(), Q = dr(), Y = gn(), re = W(Function.toString);
      Q(Y.inspectSource) || (Y.inspectSource = function(Ce) {
        return re(Ce);
      }), V.exports = Y.inspectSource;
    }), di = Fe((Z, V) => {
      var W = Yt(), Q = dr(), Y = W.WeakMap;
      V.exports = Q(Y) && /native code/.test(String(Y));
    }), fi = Fe((Z, V) => {
      var W = Wn(), Q = zn(), Y = W("keys");
      V.exports = function(re) {
        return Y[re] || (Y[re] = Q(re));
      };
    }), Zn = Fe((Z, V) => {
      V.exports = {};
    }), mi = Fe((Z, V) => {
      var W = di(), Q = Yt(), Y = Lr(), re = Kn(), Ce = _r(), Ie = gn(), me = fi(), qe = Zn(), et = "Object already initialized", Ze = Q.TypeError, nt = Q.WeakMap, rt, O, Ft, At = function(ne) {
        return Ft(ne) ? O(ne) : rt(ne, {});
      }, Lt = function(ne) {
        return function(yr) {
          var Pr;
          if (!Y(yr) || (Pr = O(yr)).type !== ne)
            throw Ze("Incompatible receiver, " + ne + " required");
          return Pr;
        };
      };
      W || Ie.state ? (qt = Ie.state || (Ie.state = new nt()), qt.get = qt.get, qt.has = qt.has, qt.set = qt.set, rt = function(ne, yr) {
        if (qt.has(ne))
          throw Ze(et);
        return yr.facade = ne, qt.set(ne, yr), yr;
      }, O = function(ne) {
        return qt.get(ne) || {};
      }, Ft = function(ne) {
        return qt.has(ne);
      }) : (Zt = me("state"), qe[Zt] = !0, rt = function(ne, yr) {
        if (Ce(ne, Zt))
          throw Ze(et);
        return yr.facade = ne, re(ne, Zt, yr), yr;
      }, O = function(ne) {
        return Ce(ne, Zt) ? ne[Zt] : {};
      }, Ft = function(ne) {
        return Ce(ne, Zt);
      });
      var qt, Zt;
      V.exports = { set: rt, get: O, has: Ft, enforce: At, getterFor: Lt };
    }), gu = Fe((Z, V) => {
      var W = hr(), Q = dr(), Y = _r(), re = br(), Ce = Di().CONFIGURABLE, Ie = Qn(), me = mi(), qe = me.enforce, et = me.get, Ze = Object.defineProperty, nt = re && !W(function() {
        return Ze(function() {
        }, "length", { value: 8 }).length !== 8;
      }), rt = String(String).split("String"), O = V.exports = function(Ft, At, Lt) {
        String(At).slice(0, 7) === "Symbol(" && (At = "[" + String(At).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), Lt && Lt.getter && (At = "get " + At), Lt && Lt.setter && (At = "set " + At), (!Y(Ft, "name") || Ce && Ft.name !== At) && (re ? Ze(Ft, "name", { value: At, configurable: !0 }) : Ft.name = At), nt && Lt && Y(Lt, "arity") && Ft.length !== Lt.arity && Ze(Ft, "length", { value: Lt.arity });
        try {
          Lt && Y(Lt, "constructor") && Lt.constructor ? re && Ze(Ft, "prototype", { writable: !1 }) : Ft.prototype && (Ft.prototype = void 0);
        } catch {
        }
        var qt = qe(Ft);
        return Y(qt, "source") || (qt.source = rt.join(typeof At == "string" ? At : "")), Ft;
      };
      Function.prototype.toString = O(function() {
        return Q(this) && et(this).source || Ie(this);
      }, "toString");
    }), hi = Fe((Z, V) => {
      var W = dr(), Q = en(), Y = gu(), re = hn();
      V.exports = function(Ce, Ie, me, qe) {
        qe || (qe = {});
        var et = qe.enumerable, Ze = qe.name !== void 0 ? qe.name : Ie;
        if (W(me) && Y(me, Ze, qe), qe.global)
          et ? Ce[Ie] = me : re(Ie, me);
        else {
          try {
            qe.unsafe ? Ce[Ie] && (et = !0) : delete Ce[Ie];
          } catch {
          }
          et ? Ce[Ie] = me : Q.f(Ce, Ie, { value: me, enumerable: !1, configurable: !qe.nonConfigurable, writable: !qe.nonWritable });
        }
        return Ce;
      };
    }), gi = Fe((Z, V) => {
      var W = Math.ceil, Q = Math.floor;
      V.exports = Math.trunc || function(Y) {
        var re = +Y;
        return (re > 0 ? Q : W)(re);
      };
    }), xn = Fe((Z, V) => {
      var W = gi();
      V.exports = function(Q) {
        var Y = +Q;
        return Y !== Y || Y === 0 ? 0 : W(Y);
      };
    }), yi = Fe((Z, V) => {
      var W = xn(), Q = Math.max, Y = Math.min;
      V.exports = function(re, Ce) {
        var Ie = W(re);
        return Ie < 0 ? Q(Ie + Ce, 0) : Y(Ie, Ce);
      };
    }), Ei = Fe((Z, V) => {
      var W = xn(), Q = Math.min;
      V.exports = function(Y) {
        return Y > 0 ? Q(W(Y), 9007199254740991) : 0;
      };
    }), tn = Fe((Z, V) => {
      var W = Ei();
      V.exports = function(Q) {
        return W(Q.length);
      };
    }), Ci = Fe((Z, V) => {
      var W = dn(), Q = yi(), Y = tn(), re = function(Ce) {
        return function(Ie, me, qe) {
          var et = W(Ie), Ze = Y(et), nt = Q(qe, Ze), rt;
          if (Ce && me != me) {
            for (; Ze > nt; )
              if (rt = et[nt++], rt != rt)
                return !0;
          } else
            for (; Ze > nt; nt++)
              if ((Ce || nt in et) && et[nt] === me)
                return Ce || nt || 0;
          return !Ce && -1;
        };
      };
      V.exports = { includes: re(!0), indexOf: re(!1) };
    }), Fi = Fe((Z, V) => {
      var W = Dr(), Q = _r(), Y = dn(), re = Ci().indexOf, Ce = Zn(), Ie = W([].push);
      V.exports = function(me, qe) {
        var et = Y(me), Ze = 0, nt = [], rt;
        for (rt in et)
          !Q(Ce, rt) && Q(et, rt) && Ie(nt, rt);
        for (; qe.length > Ze; )
          Q(et, rt = qe[Ze++]) && (~re(nt, rt) || Ie(nt, rt));
        return nt;
      };
    }), Ai = Fe((Z, V) => {
      V.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), vi = Fe((Z) => {
      var V = Fi(), W = Ai(), Q = W.concat("length", "prototype");
      Z.f = Object.getOwnPropertyNames || function(Y) {
        return V(Y, Q);
      };
    }), bi = Fe((Z) => {
      Z.f = Object.getOwnPropertySymbols;
    }), Si = Fe((Z, V) => {
      var W = un(), Q = Dr(), Y = vi(), re = bi(), Ce = Xr(), Ie = Q([].concat);
      V.exports = W("Reflect", "ownKeys") || function(me) {
        var qe = Y.f(Ce(me)), et = re.f;
        return et ? Ie(qe, et(me)) : qe;
      };
    }), xi = Fe((Z, V) => {
      var W = _r(), Q = Si(), Y = Yn(), re = en();
      V.exports = function(Ce, Ie, me) {
        for (var qe = Q(Ie), et = re.f, Ze = Y.f, nt = 0; nt < qe.length; nt++) {
          var rt = qe[nt];
          !W(Ce, rt) && !(me && W(me, rt)) && et(Ce, rt, Ze(Ie, rt));
        }
      };
    }), Ti = Fe((Z, V) => {
      var W = hr(), Q = dr(), Y = /#|\.prototype\./, re = function(et, Ze) {
        var nt = Ie[Ce(et)];
        return nt == qe ? !0 : nt == me ? !1 : Q(Ze) ? W(Ze) : !!Ze;
      }, Ce = re.normalize = function(et) {
        return String(et).replace(Y, ".").toLowerCase();
      }, Ie = re.data = {}, me = re.NATIVE = "N", qe = re.POLYFILL = "P";
      V.exports = re;
    }), an = Fe((Z, V) => {
      var W = Yt(), Q = Yn().f, Y = Kn(), re = hi(), Ce = hn(), Ie = xi(), me = Ti();
      V.exports = function(qe, et) {
        var Ze = qe.target, nt = qe.global, rt = qe.stat, O, Ft, At, Lt, qt, Zt;
        if (nt ? Ft = W : rt ? Ft = W[Ze] || Ce(Ze, {}) : Ft = (W[Ze] || {}).prototype, Ft)
          for (At in et) {
            if (qt = et[At], qe.dontCallGetSet ? (Zt = Q(Ft, At), Lt = Zt && Zt.value) : Lt = Ft[At], O = me(nt ? At : Ze + (rt ? "." : "#") + At, qe.forced), !O && Lt !== void 0) {
              if (typeof qt == typeof Lt)
                continue;
              Ie(qt, Lt);
            }
            (qe.sham || Lt && Lt.sham) && Y(qt, "sham", !0), re(Ft, At, qt, qe);
          }
      };
    }), yu = Fe((Z, V) => {
      var W = Tr();
      V.exports = Array.isArray || function(Q) {
        return W(Q) == "Array";
      };
    }), Bi = Fe((Z, V) => {
      var W = TypeError, Q = 9007199254740991;
      V.exports = function(Y) {
        if (Y > Q)
          throw W("Maximum allowed index exceeded");
        return Y;
      };
    }), Eu = Fe((Z, V) => {
      var W = Tr(), Q = Dr();
      V.exports = function(Y) {
        if (W(Y) === "Function")
          return Q(Y);
      };
    }), Cu = Fe((Z, V) => {
      var W = Eu(), Q = sn(), Y = Hr(), re = W(W.bind);
      V.exports = function(Ce, Ie) {
        return Q(Ce), Ie === void 0 ? Ce : Y ? re(Ce, Ie) : function() {
          return Ce.apply(Ie, arguments);
        };
      };
    }), Fu = Fe((Z, V) => {
      var W = yu(), Q = tn(), Y = Bi(), re = Cu(), Ce = function(Ie, me, qe, et, Ze, nt, rt, O) {
        for (var Ft = Ze, At = 0, Lt = rt ? re(rt, O) : !1, qt, Zt; At < et; )
          At in qe && (qt = Lt ? Lt(qe[At], At, me) : qe[At], nt > 0 && W(qt) ? (Zt = Q(qt), Ft = Ce(Ie, me, qt, Zt, Ft, nt - 1) - 1) : (Y(Ft + 1), Ie[Ft] = qt), Ft++), At++;
        return Ft;
      };
      V.exports = Ce;
    }), Au = Fe((Z, V) => {
      var W = Or(), Q = W("toStringTag"), Y = {};
      Y[Q] = "z", V.exports = String(Y) === "[object z]";
    }), vu = Fe((Z, V) => {
      var W = Au(), Q = dr(), Y = Tr(), re = Or(), Ce = re("toStringTag"), Ie = Object, me = Y(function() {
        return arguments;
      }()) == "Arguments", qe = function(et, Ze) {
        try {
          return et[Ze];
        } catch {
        }
      };
      V.exports = W ? Y : function(et) {
        var Ze, nt, rt;
        return et === void 0 ? "Undefined" : et === null ? "Null" : typeof (nt = qe(Ze = Ie(et), Ce)) == "string" ? nt : me ? Y(Ze) : (rt = Y(Ze)) == "Object" && Q(Ze.callee) ? "Arguments" : rt;
      };
    }), wi = Fe((Z, V) => {
      var W = Dr(), Q = hr(), Y = dr(), re = vu(), Ce = un(), Ie = Qn(), me = function() {
      }, qe = [], et = Ce("Reflect", "construct"), Ze = /^\s*(?:class|function)\b/, nt = W(Ze.exec), rt = !Ze.exec(me), O = function(At) {
        if (!Y(At))
          return !1;
        try {
          return et(me, qe, At), !0;
        } catch {
          return !1;
        }
      }, Ft = function(At) {
        if (!Y(At))
          return !1;
        switch (re(At)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return rt || !!nt(Ze, Ie(At));
        } catch {
          return !0;
        }
      };
      Ft.sham = !0, V.exports = !et || Q(function() {
        var At;
        return O(O.call) || !O(Object) || !O(function() {
          At = !0;
        }) || At;
      }) ? Ft : O;
    }), bu = Fe((Z, V) => {
      var W = yu(), Q = wi(), Y = Lr(), re = Or(), Ce = re("species"), Ie = Array;
      V.exports = function(me) {
        var qe;
        return W(me) && (qe = me.constructor, Q(qe) && (qe === Ie || W(qe.prototype)) ? qe = void 0 : Y(qe) && (qe = qe[Ce], qe === null && (qe = void 0))), qe === void 0 ? Ie : qe;
      };
    }), Su = Fe((Z, V) => {
      var W = bu();
      V.exports = function(Q, Y) {
        return new (W(Q))(Y === 0 ? 0 : Y);
      };
    }), Ni = Fe(() => {
      var Z = an(), V = Fu(), W = sn(), Q = Sn(), Y = tn(), re = Su();
      Z({ target: "Array", proto: !0 }, { flatMap: function(Ce) {
        var Ie = Q(this), me = Y(Ie), qe;
        return W(Ce), qe = re(Ie, 0), qe.length = V(qe, Ie, Ie, me, 0, 1, Ce, arguments.length > 1 ? arguments[1] : void 0), qe;
      } });
    }), xu = Fe((Z, V) => {
      V.exports = {};
    }), _i = Fe((Z, V) => {
      var W = Or(), Q = xu(), Y = W("iterator"), re = Array.prototype;
      V.exports = function(Ce) {
        return Ce !== void 0 && (Q.Array === Ce || re[Y] === Ce);
      };
    }), eu = Fe((Z, V) => {
      var W = vu(), Q = mn(), Y = nn(), re = xu(), Ce = Or(), Ie = Ce("iterator");
      V.exports = function(me) {
        if (!Y(me))
          return Q(me, Ie) || Q(me, "@@iterator") || re[W(me)];
      };
    }), ki = Fe((Z, V) => {
      var W = gr(), Q = sn(), Y = Xr(), re = fn(), Ce = eu(), Ie = TypeError;
      V.exports = function(me, qe) {
        var et = arguments.length < 2 ? Ce(me) : qe;
        if (Q(et))
          return Y(W(et, me));
        throw Ie(re(me) + " is not iterable");
      };
    }), Tu = Fe((Z, V) => {
      var W = gr(), Q = Xr(), Y = mn();
      V.exports = function(re, Ce, Ie) {
        var me, qe;
        Q(re);
        try {
          if (me = Y(re, "return"), !me) {
            if (Ce === "throw")
              throw Ie;
            return Ie;
          }
          me = W(me, re);
        } catch (et) {
          qe = !0, me = et;
        }
        if (Ce === "throw")
          throw Ie;
        if (qe)
          throw me;
        return Q(me), Ie;
      };
    }), Pi = Fe((Z, V) => {
      var W = Cu(), Q = gr(), Y = Xr(), re = fn(), Ce = _i(), Ie = tn(), me = Gn(), qe = ki(), et = eu(), Ze = Tu(), nt = TypeError, rt = function(Ft, At) {
        this.stopped = Ft, this.result = At;
      }, O = rt.prototype;
      V.exports = function(Ft, At, Lt) {
        var qt = Lt && Lt.that, Zt = !!(Lt && Lt.AS_ENTRIES), ne = !!(Lt && Lt.IS_RECORD), yr = !!(Lt && Lt.IS_ITERATOR), Pr = !!(Lt && Lt.INTERRUPTED), Wr = W(At, qt), fr, $r, mr, rn, Br, Fr, Tn, Bn = function(wr) {
          return fr && Ze(fr, "normal", wr), new rt(!0, wr);
        }, on = function(wr) {
          return Zt ? (Y(wr), Pr ? Wr(wr[0], wr[1], Bn) : Wr(wr[0], wr[1])) : Pr ? Wr(wr, Bn) : Wr(wr);
        };
        if (ne)
          fr = Ft.iterator;
        else if (yr)
          fr = Ft;
        else {
          if ($r = et(Ft), !$r)
            throw nt(re(Ft) + " is not iterable");
          if (Ce($r)) {
            for (mr = 0, rn = Ie(Ft); rn > mr; mr++)
              if (Br = on(Ft[mr]), Br && me(O, Br))
                return Br;
            return new rt(!1);
          }
          fr = qe(Ft, $r);
        }
        for (Fr = ne ? Ft.next : fr.next; !(Tn = Q(Fr, fr)).done; ) {
          try {
            Br = on(Tn.value);
          } catch (wr) {
            Ze(fr, "throw", wr);
          }
          if (typeof Br == "object" && Br && me(O, Br))
            return Br;
        }
        return new rt(!1);
      };
    }), Ii = Fe((Z, V) => {
      var W = yn(), Q = en(), Y = jr();
      V.exports = function(re, Ce, Ie) {
        var me = W(Ce);
        me in re ? Q.f(re, me, Y(0, Ie)) : re[me] = Ie;
      };
    }), ji = Fe(() => {
      var Z = an(), V = Pi(), W = Ii();
      Z({ target: "Object", stat: !0 }, { fromEntries: function(Q) {
        var Y = {};
        return V(Q, function(re, Ce) {
          W(Y, re, Ce);
        }, { AS_ENTRIES: !0 }), Y;
      } });
    }), Li = Fe((Z, V) => {
      var W = gu(), Q = en();
      V.exports = function(Y, re, Ce) {
        return Ce.get && W(Ce.get, re, { getter: !0 }), Ce.set && W(Ce.set, re, { setter: !0 }), Q.f(Y, re, Ce);
      };
    }), Oi = Fe((Z, V) => {
      var W = Xr();
      V.exports = function() {
        var Q = W(this), Y = "";
        return Q.hasIndices && (Y += "d"), Q.global && (Y += "g"), Q.ignoreCase && (Y += "i"), Q.multiline && (Y += "m"), Q.dotAll && (Y += "s"), Q.unicode && (Y += "u"), Q.unicodeSets && (Y += "v"), Q.sticky && (Y += "y"), Y;
      };
    }), $i = Fe(() => {
      var Z = Yt(), V = br(), W = Li(), Q = Oi(), Y = hr(), re = Z.RegExp, Ce = re.prototype, Ie = V && Y(function() {
        var me = !0;
        try {
          re(".", "d");
        } catch {
          me = !1;
        }
        var qe = {}, et = "", Ze = me ? "dgimsy" : "gimsy", nt = function(At, Lt) {
          Object.defineProperty(qe, At, { get: function() {
            return et += Lt, !0;
          } });
        }, rt = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        me && (rt.hasIndices = "d");
        for (var O in rt)
          nt(O, rt[O]);
        var Ft = Object.getOwnPropertyDescriptor(Ce, "flags").get.call(qe);
        return Ft !== Ze || et !== Ze;
      });
      Ie && W(Ce, "flags", { configurable: !0, get: Q });
    }), ot = Fe(() => {
      var Z = an(), V = Yt();
      Z({ global: !0, forced: V.globalThis !== V }, { globalThis: V });
    }), we = Fe(() => {
      ot();
    }), be = Fe(() => {
      var Z = an(), V = Fu(), W = Sn(), Q = tn(), Y = xn(), re = Su();
      Z({ target: "Array", proto: !0 }, { flat: function() {
        var Ce = arguments.length ? arguments[0] : void 0, Ie = W(this), me = Q(Ie), qe = re(Ie, 0);
        return qe.length = V(qe, Ie, Ie, me, 0, Ce === void 0 ? 1 : Y(Ce)), qe;
      } });
    }), Le = Fe((Z, V) => {
      var W = ["cliName", "cliCategory", "cliDescription"], Q = ["_"], Y = ["languageId"];
      function re(u, l) {
        if (u == null)
          return {};
        var t = Ce(u, l), a, s;
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(u);
          for (s = 0; s < e.length; s++)
            a = e[s], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(u, a) && (t[a] = u[a]);
        }
        return t;
      }
      function Ce(u, l) {
        if (u == null)
          return {};
        var t = {}, a = Object.keys(u), s, e;
        for (e = 0; e < a.length; e++)
          s = a[e], !(l.indexOf(s) >= 0) && (t[s] = u[s]);
        return t;
      }
      Ni(), ji(), $i(), we(), be();
      var Ie = Object.create, me = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, et = Object.getOwnPropertyNames, Ze = Object.getPrototypeOf, nt = Object.prototype.hasOwnProperty, rt = (u, l) => function() {
        return u && (l = (0, u[et(u)[0]])(u = 0)), l;
      }, O = (u, l) => function() {
        return l || (0, u[et(u)[0]])((l = { exports: {} }).exports, l), l.exports;
      }, Ft = (u, l) => {
        for (var t in l)
          me(u, t, { get: l[t], enumerable: !0 });
      }, At = (u, l, t, a) => {
        if (l && typeof l == "object" || typeof l == "function")
          for (let s of et(l))
            !nt.call(u, s) && s !== t && me(u, s, { get: () => l[s], enumerable: !(a = qe(l, s)) || a.enumerable });
        return u;
      }, Lt = (u, l, t) => (t = u != null ? Ie(Ze(u)) : {}, At(l || !u || !u.__esModule ? me(t, "default", { value: u, enumerable: !0 }) : t, u)), qt = (u) => At(me({}, "__esModule", { value: !0 }), u), Zt, ne = rt({ "<define:process>"() {
        Zt = { env: {}, argv: [] };
      } }), yr = O({ "package.json"(u, l) {
        l.exports = { version: "2.8.8" };
      } }), Pr = O({ "node_modules/diff/lib/diff/base.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.default = l;
        function l() {
        }
        l.prototype = { diff: function(s, e) {
          var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.callback;
          typeof r == "function" && (n = r, r = {}), this.options = r;
          var o = this;
          function c(A) {
            return n ? (setTimeout(function() {
              n(void 0, A);
            }, 0), !0) : A;
          }
          s = this.castInput(s), e = this.castInput(e), s = this.removeEmpty(this.tokenize(s)), e = this.removeEmpty(this.tokenize(e));
          var y = e.length, m = s.length, g = 1, p = y + m, D = [{ newPos: -1, components: [] }], C = this.extractCommon(D[0], e, s, 0);
          if (D[0].newPos + 1 >= y && C + 1 >= m)
            return c([{ value: this.join(e), count: e.length }]);
          function w() {
            for (var A = -1 * g; A <= g; A += 2) {
              var N = void 0, x = D[A - 1], P = D[A + 1], _ = (P ? P.newPos : 0) - A;
              x && (D[A - 1] = void 0);
              var J = x && x.newPos + 1 < y, f = P && 0 <= _ && _ < m;
              if (!J && !f) {
                D[A] = void 0;
                continue;
              }
              if (!J || f && x.newPos < P.newPos ? (N = a(P), o.pushComponent(N.components, void 0, !0)) : (N = x, N.newPos++, o.pushComponent(N.components, !0, void 0)), _ = o.extractCommon(N, e, s, A), N.newPos + 1 >= y && _ + 1 >= m)
                return c(t(o, N.components, e, s, o.useLongestToken));
              D[A] = N;
            }
            g++;
          }
          if (n)
            (function A() {
              setTimeout(function() {
                if (g > p)
                  return n();
                w() || A();
              }, 0);
            })();
          else
            for (; g <= p; ) {
              var k = w();
              if (k)
                return k;
            }
        }, pushComponent: function(s, e, r) {
          var n = s[s.length - 1];
          n && n.added === e && n.removed === r ? s[s.length - 1] = { count: n.count + 1, added: e, removed: r } : s.push({ count: 1, added: e, removed: r });
        }, extractCommon: function(s, e, r, n) {
          for (var o = e.length, c = r.length, y = s.newPos, m = y - n, g = 0; y + 1 < o && m + 1 < c && this.equals(e[y + 1], r[m + 1]); )
            y++, m++, g++;
          return g && s.components.push({ count: g }), s.newPos = y, m;
        }, equals: function(s, e) {
          return this.options.comparator ? this.options.comparator(s, e) : s === e || this.options.ignoreCase && s.toLowerCase() === e.toLowerCase();
        }, removeEmpty: function(s) {
          for (var e = [], r = 0; r < s.length; r++)
            s[r] && e.push(s[r]);
          return e;
        }, castInput: function(s) {
          return s;
        }, tokenize: function(s) {
          return s.split("");
        }, join: function(s) {
          return s.join("");
        } };
        function t(s, e, r, n, o) {
          for (var c = 0, y = e.length, m = 0, g = 0; c < y; c++) {
            var p = e[c];
            if (p.removed) {
              if (p.value = s.join(n.slice(g, g + p.count)), g += p.count, c && e[c - 1].added) {
                var D = e[c - 1];
                e[c - 1] = e[c], e[c] = D;
              }
            } else {
              if (!p.added && o) {
                var C = r.slice(m, m + p.count);
                C = C.map(function(k, A) {
                  var N = n[g + A];
                  return N.length > k.length ? N : k;
                }), p.value = s.join(C);
              } else
                p.value = s.join(r.slice(m, m + p.count));
              m += p.count, p.added || (g += p.count);
            }
          }
          var w = e[y - 1];
          return y > 1 && typeof w.value == "string" && (w.added || w.removed) && s.equals("", w.value) && (e[y - 2].value += w.value, e.pop()), e;
        }
        function a(s) {
          return { newPos: s.newPos, components: s.components.slice(0) };
        }
      } }), Wr = O({ "node_modules/diff/lib/diff/array.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.diffArrays = s, u.arrayDiff = void 0;
        var l = t(Pr());
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = new l.default();
        u.arrayDiff = a, a.tokenize = function(e) {
          return e.slice();
        }, a.join = a.removeEmpty = function(e) {
          return e;
        };
        function s(e, r, n) {
          return a.diff(e, r, n);
        }
      } }), fr = O({ "src/document/doc-builders.js"(u, l) {
        ne();
        function t(F) {
          return { type: "concat", parts: F };
        }
        function a(F) {
          return { type: "indent", contents: F };
        }
        function s(F, i) {
          return { type: "align", contents: i, n: F };
        }
        function e(F) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: i.id, contents: F, break: !!i.shouldBreak, expandedStates: i.expandedStates };
        }
        function r(F) {
          return s(Number.NEGATIVE_INFINITY, F);
        }
        function n(F) {
          return s({ type: "root" }, F);
        }
        function o(F) {
          return s(-1, F);
        }
        function c(F, i) {
          return e(F[0], Object.assign(Object.assign({}, i), {}, { expandedStates: F }));
        }
        function y(F) {
          return { type: "fill", parts: F };
        }
        function m(F, i) {
          let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: F, flatContents: i, groupId: h.groupId };
        }
        function g(F, i) {
          return { type: "indent-if-break", contents: F, groupId: i.groupId, negate: i.negate };
        }
        function p(F) {
          return { type: "line-suffix", contents: F };
        }
        var D = { type: "line-suffix-boundary" }, C = { type: "break-parent" }, w = { type: "trim" }, k = { type: "line", hard: !0 }, A = { type: "line", hard: !0, literal: !0 }, N = { type: "line" }, x = { type: "line", soft: !0 }, P = t([k, C]), _ = t([A, C]), J = { type: "cursor", placeholder: Symbol("cursor") };
        function f(F, i) {
          let h = [];
          for (let E = 0; E < i.length; E++)
            E !== 0 && h.push(F), h.push(i[E]);
          return t(h);
        }
        function T(F, i, h) {
          let E = F;
          if (i > 0) {
            for (let b = 0; b < Math.floor(i / h); ++b)
              E = a(E);
            E = s(i % h, E), E = s(Number.NEGATIVE_INFINITY, E);
          }
          return E;
        }
        function d(F, i) {
          return { type: "label", label: F, contents: i };
        }
        l.exports = { concat: t, join: f, line: N, softline: x, hardline: P, literalline: _, group: e, conditionalGroup: c, fill: y, lineSuffix: p, lineSuffixBoundary: D, cursor: J, breakParent: C, ifBreak: m, trim: w, indent: a, indentIfBreak: g, align: s, addAlignmentToDoc: T, markAsRoot: n, dedentToRoot: r, dedent: o, hardlineWithoutBreakParent: k, literallineWithoutBreakParent: A, label: d };
      } }), $r = O({ "src/common/end-of-line.js"(u, l) {
        ne();
        function t(r) {
          let n = r.indexOf("\r");
          return n >= 0 ? r.charAt(n + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function a(r) {
          switch (r) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function s(r, n) {
          let o;
          switch (n) {
            case `
`:
              o = /\n/g;
              break;
            case "\r":
              o = /\r/g;
              break;
            case `\r
`:
              o = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(n)}.`);
          }
          let c = r.match(o);
          return c ? c.length : 0;
        }
        function e(r) {
          return r.replace(/\r\n?/g, `
`);
        }
        l.exports = { guessEndOfLine: t, convertEndOfLineToChars: a, countEndOfLineChars: s, normalizeEndOfLine: e };
      } }), mr = O({ "src/utils/get-last.js"(u, l) {
        ne();
        var t = (a) => a[a.length - 1];
        l.exports = t;
      } });
      function rn() {
        let { onlyFirst: u = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(l, u ? void 0 : "g");
      }
      var Br = rt({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        ne();
      } });
      function Fr(u) {
        if (typeof u != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof u}\``);
        return u.replace(rn(), "");
      }
      var Tn = rt({ "node_modules/strip-ansi/index.js"() {
        ne(), Br();
      } });
      function Bn(u) {
        return Number.isInteger(u) ? u >= 4352 && (u <= 4447 || u === 9001 || u === 9002 || 11904 <= u && u <= 12871 && u !== 12351 || 12880 <= u && u <= 19903 || 19968 <= u && u <= 42182 || 43360 <= u && u <= 43388 || 44032 <= u && u <= 55203 || 63744 <= u && u <= 64255 || 65040 <= u && u <= 65049 || 65072 <= u && u <= 65131 || 65281 <= u && u <= 65376 || 65504 <= u && u <= 65510 || 110592 <= u && u <= 110593 || 127488 <= u && u <= 127569 || 131072 <= u && u <= 262141) : !1;
      }
      var on = rt({ "node_modules/is-fullwidth-code-point/index.js"() {
        ne();
      } }), wr = O({ "node_modules/emoji-regex/index.js"(u, l) {
        ne(), l.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Bu = {};
      Ft(Bu, { default: () => Ri });
      function Ri(u) {
        if (typeof u != "string" || u.length === 0 || (u = Fr(u), u.length === 0))
          return 0;
        u = u.replace((0, wu.default)(), "  ");
        let l = 0;
        for (let t = 0; t < u.length; t++) {
          let a = u.codePointAt(t);
          a <= 31 || a >= 127 && a <= 159 || a >= 768 && a <= 879 || (a > 65535 && t++, l += Bn(a) ? 2 : 1);
        }
        return l;
      }
      var wu, Mi = rt({ "node_modules/string-width/index.js"() {
        ne(), Tn(), on(), wu = Lt(wr());
      } }), Nu = O({ "src/utils/get-string-width.js"(u, l) {
        ne();
        var t = (Mi(), qt(Bu)).default, a = /[^\x20-\x7F]/;
        function s(e) {
          return e ? a.test(e) ? t(e) : e.length : 0;
        }
        l.exports = s;
      } }), En = O({ "src/document/doc-utils.js"(u, l) {
        ne();
        var t = mr(), { literalline: a, join: s } = fr(), e = (i) => Array.isArray(i) || i && i.type === "concat", r = (i) => {
          if (Array.isArray(i))
            return i;
          if (i.type !== "concat" && i.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return i.parts;
        }, n = {};
        function o(i, h, E, b) {
          let S = [i];
          for (; S.length > 0; ) {
            let B = S.pop();
            if (B === n) {
              E(S.pop());
              continue;
            }
            if (E && S.push(B, n), !h || h(B) !== !1)
              if (e(B) || B.type === "fill") {
                let I = r(B);
                for (let M = I.length, U = M - 1; U >= 0; --U)
                  S.push(I[U]);
              } else if (B.type === "if-break")
                B.flatContents && S.push(B.flatContents), B.breakContents && S.push(B.breakContents);
              else if (B.type === "group" && B.expandedStates)
                if (b)
                  for (let I = B.expandedStates.length, M = I - 1; M >= 0; --M)
                    S.push(B.expandedStates[M]);
                else
                  S.push(B.contents);
              else
                B.contents && S.push(B.contents);
          }
        }
        function c(i, h) {
          let E = /* @__PURE__ */ new Map();
          return b(i);
          function b(B) {
            if (E.has(B))
              return E.get(B);
            let I = S(B);
            return E.set(B, I), I;
          }
          function S(B) {
            if (Array.isArray(B))
              return h(B.map(b));
            if (B.type === "concat" || B.type === "fill") {
              let I = B.parts.map(b);
              return h(Object.assign(Object.assign({}, B), {}, { parts: I }));
            }
            if (B.type === "if-break") {
              let I = B.breakContents && b(B.breakContents), M = B.flatContents && b(B.flatContents);
              return h(Object.assign(Object.assign({}, B), {}, { breakContents: I, flatContents: M }));
            }
            if (B.type === "group" && B.expandedStates) {
              let I = B.expandedStates.map(b), M = I[0];
              return h(Object.assign(Object.assign({}, B), {}, { contents: M, expandedStates: I }));
            }
            if (B.contents) {
              let I = b(B.contents);
              return h(Object.assign(Object.assign({}, B), {}, { contents: I }));
            }
            return h(B);
          }
        }
        function y(i, h, E) {
          let b = E, S = !1;
          function B(I) {
            let M = h(I);
            if (M !== void 0 && (S = !0, b = M), S)
              return !1;
          }
          return o(i, B), b;
        }
        function m(i) {
          if (i.type === "group" && i.break || i.type === "line" && i.hard || i.type === "break-parent")
            return !0;
        }
        function g(i) {
          return y(i, m, !1);
        }
        function p(i) {
          if (i.length > 0) {
            let h = t(i);
            !h.expandedStates && !h.break && (h.break = "propagated");
          }
          return null;
        }
        function D(i) {
          let h = /* @__PURE__ */ new Set(), E = [];
          function b(B) {
            if (B.type === "break-parent" && p(E), B.type === "group") {
              if (E.push(B), h.has(B))
                return !1;
              h.add(B);
            }
          }
          function S(B) {
            B.type === "group" && E.pop().break && p(E);
          }
          o(i, b, S, !0);
        }
        function C(i) {
          return i.type === "line" && !i.hard ? i.soft ? "" : " " : i.type === "if-break" ? i.flatContents || "" : i;
        }
        function w(i) {
          return c(i, C);
        }
        var k = (i, h) => i && i.type === "line" && i.hard && h && h.type === "break-parent";
        function A(i) {
          if (!i)
            return i;
          if (e(i) || i.type === "fill") {
            let h = r(i);
            for (; h.length > 1 && k(...h.slice(-2)); )
              h.length -= 2;
            if (h.length > 0) {
              let E = A(t(h));
              h[h.length - 1] = E;
            }
            return Array.isArray(i) ? h : Object.assign(Object.assign({}, i), {}, { parts: h });
          }
          switch (i.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let h = A(i.contents);
              return Object.assign(Object.assign({}, i), {}, { contents: h });
            }
            case "if-break": {
              let h = A(i.breakContents), E = A(i.flatContents);
              return Object.assign(Object.assign({}, i), {}, { breakContents: h, flatContents: E });
            }
          }
          return i;
        }
        function N(i) {
          return A(P(i));
        }
        function x(i) {
          switch (i.type) {
            case "fill":
              if (i.parts.every((E) => E === ""))
                return "";
              break;
            case "group":
              if (!i.contents && !i.id && !i.break && !i.expandedStates)
                return "";
              if (i.contents.type === "group" && i.contents.id === i.id && i.contents.break === i.break && i.contents.expandedStates === i.expandedStates)
                return i.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!i.contents)
                return "";
              break;
            case "if-break":
              if (!i.flatContents && !i.breakContents)
                return "";
              break;
          }
          if (!e(i))
            return i;
          let h = [];
          for (let E of r(i)) {
            if (!E)
              continue;
            let [b, ...S] = e(E) ? r(E) : [E];
            typeof b == "string" && typeof t(h) == "string" ? h[h.length - 1] += b : h.push(b), h.push(...S);
          }
          return h.length === 0 ? "" : h.length === 1 ? h[0] : Array.isArray(i) ? h : Object.assign(Object.assign({}, i), {}, { parts: h });
        }
        function P(i) {
          return c(i, (h) => x(h));
        }
        function _(i) {
          let h = [], E = i.filter(Boolean);
          for (; E.length > 0; ) {
            let b = E.shift();
            if (b) {
              if (e(b)) {
                E.unshift(...r(b));
                continue;
              }
              if (h.length > 0 && typeof t(h) == "string" && typeof b == "string") {
                h[h.length - 1] += b;
                continue;
              }
              h.push(b);
            }
          }
          return h;
        }
        function J(i) {
          return c(i, (h) => Array.isArray(h) ? _(h) : h.parts ? Object.assign(Object.assign({}, h), {}, { parts: _(h.parts) }) : h);
        }
        function f(i) {
          return c(i, (h) => typeof h == "string" && h.includes(`
`) ? T(h) : h);
        }
        function T(i) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
          return s(h, i.split(`
`)).parts;
        }
        function d(i) {
          if (i.type === "line")
            return !0;
        }
        function F(i) {
          return y(i, d, !1);
        }
        l.exports = { isConcat: e, getDocParts: r, willBreak: g, traverseDoc: o, findInDoc: y, mapDoc: c, propagateBreaks: D, removeLines: w, stripTrailingHardline: N, normalizeParts: _, normalizeDoc: J, cleanDoc: P, replaceTextEndOfLine: T, replaceEndOfLine: f, canBreak: F };
      } }), qi = O({ "src/document/doc-printer.js"(u, l) {
        ne();
        var { convertEndOfLineToChars: t } = $r(), a = mr(), s = Nu(), { fill: e, cursor: r, indent: n } = fr(), { isConcat: o, getDocParts: c } = En(), y, m = 1, g = 2;
        function p() {
          return { value: "", length: 0, queue: [] };
        }
        function D(x, P) {
          return w(x, { type: "indent" }, P);
        }
        function C(x, P, _) {
          return P === Number.NEGATIVE_INFINITY ? x.root || p() : P < 0 ? w(x, { type: "dedent" }, _) : P ? P.type === "root" ? Object.assign(Object.assign({}, x), {}, { root: x }) : w(x, { type: typeof P == "string" ? "stringAlign" : "numberAlign", n: P }, _) : x;
        }
        function w(x, P, _) {
          let J = P.type === "dedent" ? x.queue.slice(0, -1) : [...x.queue, P], f = "", T = 0, d = 0, F = 0;
          for (let I of J)
            switch (I.type) {
              case "indent":
                E(), _.useTabs ? i(1) : h(_.tabWidth);
                break;
              case "stringAlign":
                E(), f += I.n, T += I.n.length;
                break;
              case "numberAlign":
                d += 1, F += I.n;
                break;
              default:
                throw new Error(`Unexpected type '${I.type}'`);
            }
          return S(), Object.assign(Object.assign({}, x), {}, { value: f, length: T, queue: J });
          function i(I) {
            f += "	".repeat(I), T += _.tabWidth * I;
          }
          function h(I) {
            f += " ".repeat(I), T += I;
          }
          function E() {
            _.useTabs ? b() : S();
          }
          function b() {
            d > 0 && i(d), B();
          }
          function S() {
            F > 0 && h(F), B();
          }
          function B() {
            d = 0, F = 0;
          }
        }
        function k(x) {
          if (x.length === 0)
            return 0;
          let P = 0;
          for (; x.length > 0 && typeof a(x) == "string" && /^[\t ]*$/.test(a(x)); )
            P += x.pop().length;
          if (x.length > 0 && typeof a(x) == "string") {
            let _ = a(x).replace(/[\t ]*$/, "");
            P += a(x).length - _.length, x[x.length - 1] = _;
          }
          return P;
        }
        function A(x, P, _, J, f) {
          let T = P.length, d = [x], F = [];
          for (; _ >= 0; ) {
            if (d.length === 0) {
              if (T === 0)
                return !0;
              d.push(P[--T]);
              continue;
            }
            let { mode: i, doc: h } = d.pop();
            if (typeof h == "string")
              F.push(h), _ -= s(h);
            else if (o(h) || h.type === "fill") {
              let E = c(h);
              for (let b = E.length - 1; b >= 0; b--)
                d.push({ mode: i, doc: E[b] });
            } else
              switch (h.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  d.push({ mode: i, doc: h.contents });
                  break;
                case "trim":
                  _ += k(F);
                  break;
                case "group": {
                  if (f && h.break)
                    return !1;
                  let E = h.break ? m : i, b = h.expandedStates && E === m ? a(h.expandedStates) : h.contents;
                  d.push({ mode: E, doc: b });
                  break;
                }
                case "if-break": {
                  let E = (h.groupId ? y[h.groupId] || g : i) === m ? h.breakContents : h.flatContents;
                  E && d.push({ mode: i, doc: E });
                  break;
                }
                case "line":
                  if (i === m || h.hard)
                    return !0;
                  h.soft || (F.push(" "), _--);
                  break;
                case "line-suffix":
                  J = !0;
                  break;
                case "line-suffix-boundary":
                  if (J)
                    return !1;
                  break;
              }
          }
          return !1;
        }
        function N(x, P) {
          y = {};
          let _ = P.printWidth, J = t(P.endOfLine), f = 0, T = [{ ind: p(), mode: m, doc: x }], d = [], F = !1, i = [];
          for (; T.length > 0; ) {
            let { ind: E, mode: b, doc: S } = T.pop();
            if (typeof S == "string") {
              let B = J !== `
` ? S.replace(/\n/g, J) : S;
              d.push(B), f += s(B);
            } else if (o(S)) {
              let B = c(S);
              for (let I = B.length - 1; I >= 0; I--)
                T.push({ ind: E, mode: b, doc: B[I] });
            } else
              switch (S.type) {
                case "cursor":
                  d.push(r.placeholder);
                  break;
                case "indent":
                  T.push({ ind: D(E, P), mode: b, doc: S.contents });
                  break;
                case "align":
                  T.push({ ind: C(E, S.n, P), mode: b, doc: S.contents });
                  break;
                case "trim":
                  f -= k(d);
                  break;
                case "group":
                  switch (b) {
                    case g:
                      if (!F) {
                        T.push({ ind: E, mode: S.break ? m : g, doc: S.contents });
                        break;
                      }
                    case m: {
                      F = !1;
                      let B = { ind: E, mode: g, doc: S.contents }, I = _ - f, M = i.length > 0;
                      if (!S.break && A(B, T, I, M))
                        T.push(B);
                      else if (S.expandedStates) {
                        let U = a(S.expandedStates);
                        if (S.break) {
                          T.push({ ind: E, mode: m, doc: U });
                          break;
                        } else
                          for (let q = 1; q < S.expandedStates.length + 1; q++)
                            if (q >= S.expandedStates.length) {
                              T.push({ ind: E, mode: m, doc: U });
                              break;
                            } else {
                              let ee = S.expandedStates[q], j = { ind: E, mode: g, doc: ee };
                              if (A(j, T, I, M)) {
                                T.push(j);
                                break;
                              }
                            }
                      } else
                        T.push({ ind: E, mode: m, doc: S.contents });
                      break;
                    }
                  }
                  S.id && (y[S.id] = a(T).mode);
                  break;
                case "fill": {
                  let B = _ - f, { parts: I } = S;
                  if (I.length === 0)
                    break;
                  let [M, U] = I, q = { ind: E, mode: g, doc: M }, ee = { ind: E, mode: m, doc: M }, j = A(q, [], B, i.length > 0, !0);
                  if (I.length === 1) {
                    j ? T.push(q) : T.push(ee);
                    break;
                  }
                  let De = { ind: E, mode: g, doc: U }, G = { ind: E, mode: m, doc: U };
                  if (I.length === 2) {
                    j ? T.push(De, q) : T.push(G, ee);
                    break;
                  }
                  I.splice(0, 2);
                  let R = { ind: E, mode: b, doc: e(I) }, pe = I[0];
                  A({ ind: E, mode: g, doc: [M, U, pe] }, [], B, i.length > 0, !0) ? T.push(R, De, q) : j ? T.push(R, G, q) : T.push(R, G, ee);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let B = S.groupId ? y[S.groupId] : b;
                  if (B === m) {
                    let I = S.type === "if-break" ? S.breakContents : S.negate ? S.contents : n(S.contents);
                    I && T.push({ ind: E, mode: b, doc: I });
                  }
                  if (B === g) {
                    let I = S.type === "if-break" ? S.flatContents : S.negate ? n(S.contents) : S.contents;
                    I && T.push({ ind: E, mode: b, doc: I });
                  }
                  break;
                }
                case "line-suffix":
                  i.push({ ind: E, mode: b, doc: S.contents });
                  break;
                case "line-suffix-boundary":
                  i.length > 0 && T.push({ ind: E, mode: b, doc: { type: "line", hard: !0 } });
                  break;
                case "line":
                  switch (b) {
                    case g:
                      if (S.hard)
                        F = !0;
                      else {
                        S.soft || (d.push(" "), f += 1);
                        break;
                      }
                    case m:
                      if (i.length > 0) {
                        T.push({ ind: E, mode: b, doc: S }, ...i.reverse()), i.length = 0;
                        break;
                      }
                      S.literal ? E.root ? (d.push(J, E.root.value), f = E.root.length) : (d.push(J), f = 0) : (f -= k(d), d.push(J + E.value), f = E.length);
                      break;
                  }
                  break;
                case "label":
                  T.push({ ind: E, mode: b, doc: S.contents });
                  break;
              }
            T.length === 0 && i.length > 0 && (T.push(...i.reverse()), i.length = 0);
          }
          let h = d.indexOf(r.placeholder);
          if (h !== -1) {
            let E = d.indexOf(r.placeholder, h + 1), b = d.slice(0, h).join(""), S = d.slice(h + 1, E).join(""), B = d.slice(E + 1).join("");
            return { formatted: b + S + B, cursorNodeStart: b.length, cursorNodeText: S };
          }
          return { formatted: d.join("") };
        }
        l.exports = { printDocToString: N };
      } }), Vi = O({ "src/document/doc-debug.js"(u, l) {
        ne();
        var { isConcat: t, getDocParts: a } = En();
        function s(r) {
          if (!r)
            return "";
          if (t(r)) {
            let n = [];
            for (let o of a(r))
              if (t(o))
                n.push(...s(o).parts);
              else {
                let c = s(o);
                c !== "" && n.push(c);
              }
            return { type: "concat", parts: n };
          }
          return r.type === "if-break" ? Object.assign(Object.assign({}, r), {}, { breakContents: s(r.breakContents), flatContents: s(r.flatContents) }) : r.type === "group" ? Object.assign(Object.assign({}, r), {}, { contents: s(r.contents), expandedStates: r.expandedStates && r.expandedStates.map(s) }) : r.type === "fill" ? { type: "fill", parts: r.parts.map(s) } : r.contents ? Object.assign(Object.assign({}, r), {}, { contents: s(r.contents) }) : r;
        }
        function e(r) {
          let n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Set();
          return c(s(r));
          function c(m, g, p) {
            if (typeof m == "string")
              return JSON.stringify(m);
            if (t(m)) {
              let D = a(m).map(c).filter(Boolean);
              return D.length === 1 ? D[0] : `[${D.join(", ")}]`;
            }
            if (m.type === "line") {
              let D = Array.isArray(p) && p[g + 1] && p[g + 1].type === "break-parent";
              return m.literal ? D ? "literalline" : "literallineWithoutBreakParent" : m.hard ? D ? "hardline" : "hardlineWithoutBreakParent" : m.soft ? "softline" : "line";
            }
            if (m.type === "break-parent")
              return Array.isArray(p) && p[g - 1] && p[g - 1].type === "line" && p[g - 1].hard ? void 0 : "breakParent";
            if (m.type === "trim")
              return "trim";
            if (m.type === "indent")
              return "indent(" + c(m.contents) + ")";
            if (m.type === "align")
              return m.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + c(m.contents) + ")" : m.n < 0 ? "dedent(" + c(m.contents) + ")" : m.n.type === "root" ? "markAsRoot(" + c(m.contents) + ")" : "align(" + JSON.stringify(m.n) + ", " + c(m.contents) + ")";
            if (m.type === "if-break")
              return "ifBreak(" + c(m.breakContents) + (m.flatContents ? ", " + c(m.flatContents) : "") + (m.groupId ? (m.flatContents ? "" : ', ""') + `, { groupId: ${y(m.groupId)} }` : "") + ")";
            if (m.type === "indent-if-break") {
              let D = [];
              m.negate && D.push("negate: true"), m.groupId && D.push(`groupId: ${y(m.groupId)}`);
              let C = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return `indentIfBreak(${c(m.contents)}${C})`;
            }
            if (m.type === "group") {
              let D = [];
              m.break && m.break !== "propagated" && D.push("shouldBreak: true"), m.id && D.push(`id: ${y(m.id)}`);
              let C = D.length > 0 ? `, { ${D.join(", ")} }` : "";
              return m.expandedStates ? `conditionalGroup([${m.expandedStates.map((w) => c(w)).join(",")}]${C})` : `group(${c(m.contents)}${C})`;
            }
            if (m.type === "fill")
              return `fill([${m.parts.map((D) => c(D)).join(", ")}])`;
            if (m.type === "line-suffix")
              return "lineSuffix(" + c(m.contents) + ")";
            if (m.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (m.type === "label")
              return `label(${JSON.stringify(m.label)}, ${c(m.contents)})`;
            throw new Error("Unknown doc type " + m.type);
          }
          function y(m) {
            if (typeof m != "symbol")
              return JSON.stringify(String(m));
            if (m in n)
              return n[m];
            let g = String(m).slice(7, -1) || "symbol";
            for (let p = 0; ; p++) {
              let D = g + (p > 0 ? ` #${p}` : "");
              if (!o.has(D))
                return o.add(D), n[m] = `Symbol.for(${JSON.stringify(D)})`;
            }
          }
        }
        l.exports = { printDocToDebug: e };
      } }), wt = O({ "src/document/index.js"(u, l) {
        ne(), l.exports = { builders: fr(), printer: qi(), utils: En(), debug: Vi() };
      } }), _u = {};
      Ft(_u, { default: () => Gi });
      function Gi(u) {
        if (typeof u != "string")
          throw new TypeError("Expected a string");
        return u.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var Ui = rt({ "node_modules/escape-string-regexp/index.js"() {
        ne();
      } }), ku = O({ "node_modules/semver/internal/debug.js"(u, l) {
        ne();
        var t = typeof Zt == "object" && Zt.env && Zt.env.NODE_DEBUG && /\bsemver\b/i.test(Zt.env.NODE_DEBUG) ? function() {
          for (var a = arguments.length, s = new Array(a), e = 0; e < a; e++)
            s[e] = arguments[e];
          return console.error("SEMVER", ...s);
        } : () => {
        };
        l.exports = t;
      } }), Pu = O({ "node_modules/semver/internal/constants.js"(u, l) {
        ne();
        var t = "2.0.0", a = 256, s = Number.MAX_SAFE_INTEGER || 9007199254740991, e = 16;
        l.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: a, MAX_SAFE_INTEGER: s, MAX_SAFE_COMPONENT_LENGTH: e };
      } }), Iu = O({ "node_modules/semver/internal/re.js"(u, l) {
        ne();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = Pu(), a = ku();
        u = l.exports = {};
        var s = u.re = [], e = u.src = [], r = u.t = {}, n = 0, o = (c, y, m) => {
          let g = n++;
          a(c, g, y), r[c] = g, e[g] = y, s[g] = new RegExp(y, m ? "g" : void 0);
        };
        o("NUMERICIDENTIFIER", "0|[1-9]\\d*"), o("NUMERICIDENTIFIERLOOSE", "[0-9]+"), o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), o("MAINVERSION", `(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})`), o("MAINVERSIONLOOSE", `(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})`), o("PRERELEASEIDENTIFIER", `(?:${e[r.NUMERICIDENTIFIER]}|${e[r.NONNUMERICIDENTIFIER]})`), o("PRERELEASEIDENTIFIERLOOSE", `(?:${e[r.NUMERICIDENTIFIERLOOSE]}|${e[r.NONNUMERICIDENTIFIER]})`), o("PRERELEASE", `(?:-(${e[r.PRERELEASEIDENTIFIER]}(?:\\.${e[r.PRERELEASEIDENTIFIER]})*))`), o("PRERELEASELOOSE", `(?:-?(${e[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[r.PRERELEASEIDENTIFIERLOOSE]})*))`), o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), o("BUILD", `(?:\\+(${e[r.BUILDIDENTIFIER]}(?:\\.${e[r.BUILDIDENTIFIER]})*))`), o("FULLPLAIN", `v?${e[r.MAINVERSION]}${e[r.PRERELEASE]}?${e[r.BUILD]}?`), o("FULL", `^${e[r.FULLPLAIN]}$`), o("LOOSEPLAIN", `[v=\\s]*${e[r.MAINVERSIONLOOSE]}${e[r.PRERELEASELOOSE]}?${e[r.BUILD]}?`), o("LOOSE", `^${e[r.LOOSEPLAIN]}$`), o("GTLT", "((?:<|>)?=?)"), o("XRANGEIDENTIFIERLOOSE", `${e[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), o("XRANGEIDENTIFIER", `${e[r.NUMERICIDENTIFIER]}|x|X|\\*`), o("XRANGEPLAIN", `[v=\\s]*(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:${e[r.PRERELEASE]})?${e[r.BUILD]}?)?)?`), o("XRANGEPLAINLOOSE", `[v=\\s]*(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:${e[r.PRERELEASELOOSE]})?${e[r.BUILD]}?)?)?`), o("XRANGE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAIN]}$`), o("XRANGELOOSE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAINLOOSE]}$`), o("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), o("COERCERTL", e[r.COERCE], !0), o("LONETILDE", "(?:~>?)"), o("TILDETRIM", `(\\s*)${e[r.LONETILDE]}\\s+`, !0), u.tildeTrimReplace = "$1~", o("TILDE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAIN]}$`), o("TILDELOOSE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAINLOOSE]}$`), o("LONECARET", "(?:\\^)"), o("CARETTRIM", `(\\s*)${e[r.LONECARET]}\\s+`, !0), u.caretTrimReplace = "$1^", o("CARET", `^${e[r.LONECARET]}${e[r.XRANGEPLAIN]}$`), o("CARETLOOSE", `^${e[r.LONECARET]}${e[r.XRANGEPLAINLOOSE]}$`), o("COMPARATORLOOSE", `^${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]})$|^$`), o("COMPARATOR", `^${e[r.GTLT]}\\s*(${e[r.FULLPLAIN]})$|^$`), o("COMPARATORTRIM", `(\\s*)${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]}|${e[r.XRANGEPLAIN]})`, !0), u.comparatorTrimReplace = "$1$2$3", o("HYPHENRANGE", `^\\s*(${e[r.XRANGEPLAIN]})\\s+-\\s+(${e[r.XRANGEPLAIN]})\\s*$`), o("HYPHENRANGELOOSE", `^\\s*(${e[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[r.XRANGEPLAINLOOSE]})\\s*$`), o("STAR", "(<|>)?=?\\s*\\*"), o("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), o("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), Ji = O({ "node_modules/semver/internal/parse-options.js"(u, l) {
        ne();
        var t = ["includePrerelease", "loose", "rtl"], a = (s) => s ? typeof s != "object" ? { loose: !0 } : t.filter((e) => s[e]).reduce((e, r) => (e[r] = !0, e), {}) : {};
        l.exports = a;
      } }), ju = O({ "node_modules/semver/internal/identifiers.js"(u, l) {
        ne();
        var t = /^[0-9]+$/, a = (e, r) => {
          let n = t.test(e), o = t.test(r);
          return n && o && (e = +e, r = +r), e === r ? 0 : n && !o ? -1 : o && !n ? 1 : e < r ? -1 : 1;
        }, s = (e, r) => a(r, e);
        l.exports = { compareIdentifiers: a, rcompareIdentifiers: s };
      } }), Xi = O({ "node_modules/semver/classes/semver.js"(u, l) {
        ne();
        var t = ku(), { MAX_LENGTH: a, MAX_SAFE_INTEGER: s } = Pu(), { re: e, t: r } = Iu(), n = Ji(), { compareIdentifiers: o } = ju(), c = class {
          constructor(y, m) {
            if (m = n(m), y instanceof c) {
              if (y.loose === !!m.loose && y.includePrerelease === !!m.includePrerelease)
                return y;
              y = y.version;
            } else if (typeof y != "string")
              throw new TypeError(`Invalid Version: ${y}`);
            if (y.length > a)
              throw new TypeError(`version is longer than ${a} characters`);
            t("SemVer", y, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
            let g = y.trim().match(m.loose ? e[r.LOOSE] : e[r.FULL]);
            if (!g)
              throw new TypeError(`Invalid Version: ${y}`);
            if (this.raw = y, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > s || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > s || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > s || this.patch < 0)
              throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map((p) => {
              if (/^[0-9]+$/.test(p)) {
                let D = +p;
                if (D >= 0 && D < s)
                  return D;
              }
              return p;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(y) {
            if (t("SemVer.compare", this.version, this.options, y), !(y instanceof c)) {
              if (typeof y == "string" && y === this.version)
                return 0;
              y = new c(y, this.options);
            }
            return y.version === this.version ? 0 : this.compareMain(y) || this.comparePre(y);
          }
          compareMain(y) {
            return y instanceof c || (y = new c(y, this.options)), o(this.major, y.major) || o(this.minor, y.minor) || o(this.patch, y.patch);
          }
          comparePre(y) {
            if (y instanceof c || (y = new c(y, this.options)), this.prerelease.length && !y.prerelease.length)
              return -1;
            if (!this.prerelease.length && y.prerelease.length)
              return 1;
            if (!this.prerelease.length && !y.prerelease.length)
              return 0;
            let m = 0;
            do {
              let g = this.prerelease[m], p = y.prerelease[m];
              if (t("prerelease compare", m, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return o(g, p);
            } while (++m);
          }
          compareBuild(y) {
            y instanceof c || (y = new c(y, this.options));
            let m = 0;
            do {
              let g = this.build[m], p = y.build[m];
              if (t("prerelease compare", m, g, p), g === void 0 && p === void 0)
                return 0;
              if (p === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== p)
                return o(g, p);
            } while (++m);
          }
          inc(y, m) {
            switch (y) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", m), this.inc("pre", m);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", m), this.inc("pre", m);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let g = this.prerelease.length;
                  for (; --g >= 0; )
                    typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                  g === -1 && this.prerelease.push(0);
                }
                m && (o(this.prerelease[0], m) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [m, 0]) : this.prerelease = [m, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${y}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        l.exports = c;
      } }), tu = O({ "node_modules/semver/functions/compare.js"(u, l) {
        ne();
        var t = Xi(), a = (s, e, r) => new t(s, r).compare(new t(e, r));
        l.exports = a;
      } }), ru = O({ "node_modules/semver/functions/lt.js"(u, l) {
        ne();
        var t = tu(), a = (s, e, r) => t(s, e, r) < 0;
        l.exports = a;
      } }), Lu = O({ "node_modules/semver/functions/gte.js"(u, l) {
        ne();
        var t = tu(), a = (s, e, r) => t(s, e, r) >= 0;
        l.exports = a;
      } }), Ou = O({ "src/utils/arrayify.js"(u, l) {
        ne(), l.exports = (t, a) => Object.entries(t).map((s) => {
          let [e, r] = s;
          return Object.assign({ [a]: e }, r);
        });
      } }), $u = O({ "node_modules/outdent/lib/index.js"(u, l) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.outdent = void 0;
        function t() {
          for (var A = [], N = 0; N < arguments.length; N++)
            A[N] = arguments[N];
        }
        function a() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : s();
        }
        function s() {
          return { add: t, delete: t, get: t, set: t, has: function(A) {
            return !1;
          } };
        }
        var e = Object.prototype.hasOwnProperty, r = function(A, N) {
          return e.call(A, N);
        };
        function n(A, N) {
          for (var x in N)
            r(N, x) && (A[x] = N[x]);
          return A;
        }
        var o = /^[ \t]*(?:\r\n|\r|\n)/, c = /(?:\r\n|\r|\n)[ \t]*$/, y = /^(?:[\r\n]|$)/, m = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function p(A, N, x) {
          var P = 0, _ = A[0].match(m);
          _ && (P = _[1].length);
          var J = "(\\r\\n|\\r|\\n).{0," + P + "}", f = new RegExp(J, "g");
          N && (A = A.slice(1));
          var T = x.newline, d = x.trimLeadingNewline, F = x.trimTrailingNewline, i = typeof T == "string", h = A.length, E = A.map(function(b, S) {
            return b = b.replace(f, "$1"), S === 0 && d && (b = b.replace(o, "")), S === h - 1 && F && (b = b.replace(c, "")), i && (b = b.replace(/\r\n|\n|\r/g, function(B) {
              return T;
            })), b;
          });
          return E;
        }
        function D(A, N) {
          for (var x = "", P = 0, _ = A.length; P < _; P++)
            x += A[P], P < _ - 1 && (x += N[P]);
          return x;
        }
        function C(A) {
          return r(A, "raw") && r(A, "length");
        }
        function w(A) {
          var N = a(), x = a();
          function P(J) {
            for (var f = [], T = 1; T < arguments.length; T++)
              f[T - 1] = arguments[T];
            if (C(J)) {
              var d = J, F = (f[0] === P || f[0] === k) && g.test(d[0]) && y.test(d[1]), i = F ? x : N, h = i.get(d);
              if (h || (h = p(d, F, A), i.set(d, h)), f.length === 0)
                return h[0];
              var E = D(h, F ? f.slice(1) : f);
              return E;
            } else
              return w(n(n({}, A), J || {}));
          }
          var _ = n(P, { string: function(J) {
            return p([J], !1, A)[0];
          } });
          return _;
        }
        var k = w({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (u.outdent = k, u.default = k, typeof l < "u")
          try {
            l.exports = k, Object.defineProperty(k, "__esModule", { value: !0 }), k.default = k, k.outdent = k;
          } catch {
          }
      } }), Wi = O({ "src/main/core-options.js"(u, l) {
        ne();
        var { outdent: t } = $u(), a = "Config", s = "Editor", e = "Format", r = "Other", n = "Output", o = "Global", c = "Special", y = { cursorOffset: { since: "1.4.0", category: c, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: s }, endOfLine: { since: "1.15.0", category: o, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: c, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: r, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: c, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: r }, parser: { since: "0.0.10", category: o, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (m) => typeof m == "string" || typeof m == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: o, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin", cliCategory: a }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: o, description: t`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (m) => typeof m == "string" || typeof m == "object", cliName: "plugin-search-dir", cliCategory: a }, printWidth: { since: "0.0.0", category: o, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: c, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: s }, rangeStart: { since: "1.4.0", category: c, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: s }, requirePragma: { since: "1.7.0", category: c, type: "boolean", default: !1, description: t`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: r }, tabWidth: { type: "int", category: o, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: o, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: o, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        l.exports = { CATEGORY_CONFIG: a, CATEGORY_EDITOR: s, CATEGORY_FORMAT: e, CATEGORY_OTHER: r, CATEGORY_OUTPUT: n, CATEGORY_GLOBAL: o, CATEGORY_SPECIAL: c, options: y };
      } }), nu = O({ "src/main/support.js"(u, l) {
        ne();
        var t = { compare: tu(), lt: ru(), gte: Lu() }, a = Ou(), s = yr().version, e = Wi().options;
        function r() {
          let { plugins: o = [], showUnreleased: c = !1, showDeprecated: y = !1, showInternal: m = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = s.split("-", 1)[0], p = o.flatMap((A) => A.languages || []).filter(C), D = a(Object.assign({}, ...o.map((A) => {
            let { options: N } = A;
            return N;
          }), e), "name").filter((A) => C(A) && w(A)).sort((A, N) => A.name === N.name ? 0 : A.name < N.name ? -1 : 1).map(k).map((A) => {
            A = Object.assign({}, A), Array.isArray(A.default) && (A.default = A.default.length === 1 ? A.default[0].value : A.default.filter(C).sort((x, P) => t.compare(P.since, x.since))[0].value), Array.isArray(A.choices) && (A.choices = A.choices.filter((x) => C(x) && w(x)), A.name === "parser" && n(A, p, o));
            let N = Object.fromEntries(o.filter((x) => x.defaultOptions && x.defaultOptions[A.name] !== void 0).map((x) => [x.name, x.defaultOptions[A.name]]));
            return Object.assign(Object.assign({}, A), {}, { pluginDefaults: N });
          });
          return { languages: p, options: D };
          function C(A) {
            return c || !("since" in A) || A.since && t.gte(g, A.since);
          }
          function w(A) {
            return y || !("deprecated" in A) || A.deprecated && t.lt(g, A.deprecated);
          }
          function k(A) {
            return m ? A : re(A, W);
          }
        }
        function n(o, c, y) {
          let m = new Set(o.choices.map((g) => g.value));
          for (let g of c)
            if (g.parsers) {
              for (let p of g.parsers)
                if (!m.has(p)) {
                  m.add(p);
                  let D = y.find((w) => w.parsers && w.parsers[p]), C = g.name;
                  D && D.name && (C += ` (plugin: ${D.name})`), o.choices.push({ value: p, description: C });
                }
            }
        }
        l.exports = { getSupportInfo: r };
      } }), uu = O({ "src/utils/is-non-empty-array.js"(u, l) {
        ne();
        function t(a) {
          return Array.isArray(a) && a.length > 0;
        }
        l.exports = t;
      } }), Cn = O({ "src/utils/text/skip.js"(u, l) {
        ne();
        function t(n) {
          return (o, c, y) => {
            let m = y && y.backwards;
            if (c === !1)
              return !1;
            let { length: g } = o, p = c;
            for (; p >= 0 && p < g; ) {
              let D = o.charAt(p);
              if (n instanceof RegExp) {
                if (!n.test(D))
                  return p;
              } else if (!n.includes(D))
                return p;
              m ? p-- : p++;
            }
            return p === -1 || p === g ? p : !1;
          };
        }
        var a = t(/\s/), s = t(" 	"), e = t(",; 	"), r = t(/[^\n\r]/);
        l.exports = { skipWhitespace: a, skipSpaces: s, skipToLineEnd: e, skipEverythingButNewLine: r };
      } }), Ru = O({ "src/utils/text/skip-inline-comment.js"(u, l) {
        ne();
        function t(a, s) {
          if (s === !1)
            return !1;
          if (a.charAt(s) === "/" && a.charAt(s + 1) === "*") {
            for (let e = s + 2; e < a.length; ++e)
              if (a.charAt(e) === "*" && a.charAt(e + 1) === "/")
                return e + 2;
          }
          return s;
        }
        l.exports = t;
      } }), Mu = O({ "src/utils/text/skip-trailing-comment.js"(u, l) {
        ne();
        var { skipEverythingButNewLine: t } = Cn();
        function a(s, e) {
          return e === !1 ? !1 : s.charAt(e) === "/" && s.charAt(e + 1) === "/" ? t(s, e) : e;
        }
        l.exports = a;
      } }), qu = O({ "src/utils/text/skip-newline.js"(u, l) {
        ne();
        function t(a, s, e) {
          let r = e && e.backwards;
          if (s === !1)
            return !1;
          let n = a.charAt(s);
          if (r) {
            if (a.charAt(s - 1) === "\r" && n === `
`)
              return s - 2;
            if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029")
              return s - 1;
          } else {
            if (n === "\r" && a.charAt(s + 1) === `
`)
              return s + 2;
            if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029")
              return s + 1;
          }
          return s;
        }
        l.exports = t;
      } }), zi = O({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(u, l) {
        ne();
        var t = Ru(), a = qu(), s = Mu(), { skipSpaces: e } = Cn();
        function r(n, o) {
          let c = null, y = o;
          for (; y !== c; )
            c = y, y = e(n, y), y = t(n, y), y = s(n, y), y = a(n, y);
          return y;
        }
        l.exports = r;
      } }), Ut = O({ "src/common/util.js"(u, l) {
        ne();
        var { default: t } = (Ui(), qt(_u)), a = mr(), { getSupportInfo: s } = nu(), e = uu(), r = Nu(), { skipWhitespace: n, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: y } = Cn(), m = Ru(), g = Mu(), p = qu(), D = zi(), C = (G) => G[G.length - 2];
        function w(G) {
          return (R, pe, ve) => {
            let fe = ve && ve.backwards;
            if (pe === !1)
              return !1;
            let { length: Pe } = R, X = pe;
            for (; X >= 0 && X < Pe; ) {
              let ie = R.charAt(X);
              if (G instanceof RegExp) {
                if (!G.test(ie))
                  return X;
              } else if (!G.includes(ie))
                return X;
              fe ? X-- : X++;
            }
            return X === -1 || X === Pe ? X : !1;
          };
        }
        function k(G, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ve = o(G, pe.backwards ? R - 1 : R, pe), fe = p(G, ve, pe);
          return ve !== fe;
        }
        function A(G, R, pe) {
          for (let ve = R; ve < pe; ++ve)
            if (G.charAt(ve) === `
`)
              return !0;
          return !1;
        }
        function N(G, R, pe) {
          let ve = pe(R) - 1;
          ve = o(G, ve, { backwards: !0 }), ve = p(G, ve, { backwards: !0 }), ve = o(G, ve, { backwards: !0 });
          let fe = p(G, ve, { backwards: !0 });
          return ve !== fe;
        }
        function x(G, R) {
          let pe = null, ve = R;
          for (; ve !== pe; )
            pe = ve, ve = c(G, ve), ve = m(G, ve), ve = o(G, ve);
          return ve = g(G, ve), ve = p(G, ve), ve !== !1 && k(G, ve);
        }
        function P(G, R, pe) {
          return x(G, pe(R));
        }
        function _(G, R, pe) {
          return D(G, pe(R));
        }
        function J(G, R, pe) {
          return G.charAt(_(G, R, pe));
        }
        function f(G, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return o(G, pe.backwards ? R - 1 : R, pe) !== R;
        }
        function T(G, R) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ve = 0;
          for (let fe = pe; fe < G.length; ++fe)
            G[fe] === "	" ? ve = ve + R - ve % R : ve++;
          return ve;
        }
        function d(G, R) {
          let pe = G.lastIndexOf(`
`);
          return pe === -1 ? 0 : T(G.slice(pe + 1).match(/^[\t ]*/)[0], R);
        }
        function F(G, R) {
          let pe = { quote: '"', regex: /"/g, escaped: "&quot;" }, ve = { quote: "'", regex: /'/g, escaped: "&apos;" }, fe = R === "'" ? ve : pe, Pe = fe === ve ? pe : ve, X = fe;
          if (G.includes(fe.quote) || G.includes(Pe.quote)) {
            let ie = (G.match(fe.regex) || []).length, Be = (G.match(Pe.regex) || []).length;
            X = ie > Be ? Pe : fe;
          }
          return X;
        }
        function i(G, R) {
          let pe = G.slice(1, -1), ve = R.parser === "json" || R.parser === "json5" && R.quoteProps === "preserve" && !R.singleQuote ? '"' : R.__isInHtmlAttribute ? "'" : F(pe, R.singleQuote ? "'" : '"').quote;
          return h(pe, ve, !(R.parser === "css" || R.parser === "less" || R.parser === "scss" || R.__embeddedInHtml));
        }
        function h(G, R, pe) {
          let ve = R === '"' ? "'" : '"', fe = /\\(.)|(["'])/gs, Pe = G.replace(fe, (X, ie, Be) => ie === ve ? ie : Be === R ? "\\" + Be : Be || (pe && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(ie) ? ie : "\\" + ie));
          return R + Pe + R;
        }
        function E(G) {
          return G.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function b(G, R) {
          let pe = G.match(new RegExp(`(${t(R)})+`, "g"));
          return pe === null ? 0 : pe.reduce((ve, fe) => Math.max(ve, fe.length / R.length), 0);
        }
        function S(G, R) {
          let pe = G.match(new RegExp(`(${t(R)})+`, "g"));
          if (pe === null)
            return 0;
          let ve = /* @__PURE__ */ new Map(), fe = 0;
          for (let Pe of pe) {
            let X = Pe.length / R.length;
            ve.set(X, !0), X > fe && (fe = X);
          }
          for (let Pe = 1; Pe < fe; Pe++)
            if (!ve.get(Pe))
              return Pe;
          return fe + 1;
        }
        function B(G, R) {
          (G.comments || (G.comments = [])).push(R), R.printed = !1, R.nodeDescription = De(G);
        }
        function I(G, R) {
          R.leading = !0, R.trailing = !1, B(G, R);
        }
        function M(G, R, pe) {
          R.leading = !1, R.trailing = !1, pe && (R.marker = pe), B(G, R);
        }
        function U(G, R) {
          R.leading = !1, R.trailing = !0, B(G, R);
        }
        function q(G, R) {
          let { languages: pe } = s({ plugins: R.plugins }), ve = pe.find((fe) => {
            let { name: Pe } = fe;
            return Pe.toLowerCase() === G;
          }) || pe.find((fe) => {
            let { aliases: Pe } = fe;
            return Array.isArray(Pe) && Pe.includes(G);
          }) || pe.find((fe) => {
            let { extensions: Pe } = fe;
            return Array.isArray(Pe) && Pe.includes(`.${G}`);
          });
          return ve && ve.parsers[0];
        }
        function ee(G) {
          return G && G.type === "front-matter";
        }
        function j(G) {
          let R = /* @__PURE__ */ new WeakMap();
          return function(pe) {
            return R.has(pe) || R.set(pe, Symbol(G)), R.get(pe);
          };
        }
        function De(G) {
          let R = G.type || G.kind || "(unknown type)", pe = String(G.name || G.id && (typeof G.id == "object" ? G.id.name : G.id) || G.key && (typeof G.key == "object" ? G.key.name : G.key) || G.value && (typeof G.value == "object" ? "" : String(G.value)) || G.operator || "");
          return pe.length > 20 && (pe = pe.slice(0, 19) + "…"), R + (pe ? " " + pe : "");
        }
        l.exports = { inferParserByLanguage: q, getStringWidth: r, getMaxContinuousCount: b, getMinNotPresentContinuousCount: S, getPenultimate: C, getLast: a, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: D, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: J, skip: w, skipWhitespace: n, skipSpaces: o, skipToLineEnd: c, skipEverythingButNewLine: y, skipInlineComment: m, skipTrailingComment: g, skipNewline: p, isNextLineEmptyAfterIndex: x, isNextLineEmpty: P, isPreviousLineEmpty: N, hasNewline: k, hasNewlineInRange: A, hasSpaces: f, getAlignmentSize: T, getIndentSize: d, getPreferredQuote: F, printString: i, printNumber: E, makeString: h, addLeadingComment: I, addDanglingComment: M, addTrailingComment: U, isFrontMatterNode: ee, isNonEmptyArray: e, createGroupIdMapper: j };
      } }), Vu = {};
      Ft(Vu, { basename: () => Ju, default: () => pu, delimiter: () => pn, dirname: () => au, extname: () => Xu, isAbsolute: () => ln, join: () => su, normalize: () => iu, relative: () => Uu, resolve: () => wn, sep: () => _n });
      function Gu(u, l) {
        for (var t = 0, a = u.length - 1; a >= 0; a--) {
          var s = u[a];
          s === "." ? u.splice(a, 1) : s === ".." ? (u.splice(a, 1), t++) : t && (u.splice(a, 1), t--);
        }
        if (l)
          for (; t--; t)
            u.unshift("..");
        return u;
      }
      function wn() {
        for (var u = "", l = !1, t = arguments.length - 1; t >= -1 && !l; t--) {
          var a = t >= 0 ? arguments[t] : "/";
          if (typeof a != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          a && (u = a + "/" + u, l = a.charAt(0) === "/");
        }
        return u = Gu(ou(u.split("/"), function(s) {
          return !!s;
        }), !l).join("/"), (l ? "/" : "") + u || ".";
      }
      function iu(u) {
        var l = ln(u), t = Wu(u, -1) === "/";
        return u = Gu(ou(u.split("/"), function(a) {
          return !!a;
        }), !l).join("/"), !u && !l && (u = "."), u && t && (u += "/"), (l ? "/" : "") + u;
      }
      function ln(u) {
        return u.charAt(0) === "/";
      }
      function su() {
        var u = Array.prototype.slice.call(arguments, 0);
        return iu(ou(u, function(l, t) {
          if (typeof l != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return l;
        }).join("/"));
      }
      function Uu(u, l) {
        u = wn(u).substr(1), l = wn(l).substr(1);
        function t(c) {
          for (var y = 0; y < c.length && c[y] === ""; y++)
            ;
          for (var m = c.length - 1; m >= 0 && c[m] === ""; m--)
            ;
          return y > m ? [] : c.slice(y, m - y + 1);
        }
        for (var a = t(u.split("/")), s = t(l.split("/")), e = Math.min(a.length, s.length), r = e, n = 0; n < e; n++)
          if (a[n] !== s[n]) {
            r = n;
            break;
          }
        for (var o = [], n = r; n < a.length; n++)
          o.push("..");
        return o = o.concat(s.slice(r)), o.join("/");
      }
      function au(u) {
        var l = Nn(u), t = l[0], a = l[1];
        return !t && !a ? "." : (a && (a = a.substr(0, a.length - 1)), t + a);
      }
      function Ju(u, l) {
        var t = Nn(u)[2];
        return l && t.substr(-1 * l.length) === l && (t = t.substr(0, t.length - l.length)), t;
      }
      function Xu(u) {
        return Nn(u)[3];
      }
      function ou(u, l) {
        if (u.filter)
          return u.filter(l);
        for (var t = [], a = 0; a < u.length; a++)
          l(u[a], a, u) && t.push(u[a]);
        return t;
      }
      var lu, Nn, _n, pn, pu, Wu, Hi = rt({ "node-modules-polyfills:path"() {
        ne(), lu = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Nn = function(u) {
          return lu.exec(u).slice(1);
        }, _n = "/", pn = ":", pu = { extname: Xu, basename: Ju, dirname: au, sep: _n, delimiter: pn, relative: Uu, join: su, isAbsolute: ln, normalize: iu, resolve: wn }, Wu = "ab".substr(-1) === "b" ? function(u, l, t) {
          return u.substr(l, t);
        } : function(u, l, t) {
          return l < 0 && (l = u.length + l), u.substr(l, t);
        };
      } }), Yi = O({ "node-modules-polyfills-commonjs:path"(u, l) {
        ne();
        var t = (Hi(), qt(Vu));
        if (t && t.default) {
          l.exports = t.default;
          for (let a in t)
            l.exports[a] = t[a];
        } else
          t && (l.exports = t);
      } }), Fn = O({ "src/common/errors.js"(u, l) {
        ne();
        var t = class extends Error {
        }, a = class extends Error {
        }, s = class extends Error {
        }, e = class extends Error {
        };
        l.exports = { ConfigError: t, DebugError: a, UndefinedParserError: s, ArgExpansionBailout: e };
      } }), Yr = {};
      Ft(Yr, { __assign: () => Ve, __asyncDelegator: () => ke, __asyncGenerator: () => ye, __asyncValues: () => ue, __await: () => he, __awaiter: () => es, __classPrivateFieldGet: () => gt, __classPrivateFieldSet: () => ce, __createBinding: () => rs, __decorate: () => zu, __exportStar: () => ns, __extends: () => Ki, __generator: () => ts, __importDefault: () => Ue, __importStar: () => Ge, __makeTemplateObject: () => de, __metadata: () => Zi, __param: () => Qi, __read: () => An, __rest: () => cu, __spread: () => L, __spreadArrays: () => te, __values: () => kn });
      function Ki(u, l) {
        Ae(u, l);
        function t() {
          this.constructor = u;
        }
        u.prototype = l === null ? Object.create(l) : (t.prototype = l.prototype, new t());
      }
      function cu(u, l) {
        var t = {};
        for (var a in u)
          Object.prototype.hasOwnProperty.call(u, a) && l.indexOf(a) < 0 && (t[a] = u[a]);
        if (u != null && typeof Object.getOwnPropertySymbols == "function")
          for (var s = 0, a = Object.getOwnPropertySymbols(u); s < a.length; s++)
            l.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(u, a[s]) && (t[a[s]] = u[a[s]]);
        return t;
      }
      function zu(u, l, t, a) {
        var s = arguments.length, e = s < 3 ? l : a === null ? a = Object.getOwnPropertyDescriptor(l, t) : a, r;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          e = Reflect.decorate(u, l, t, a);
        else
          for (var n = u.length - 1; n >= 0; n--)
            (r = u[n]) && (e = (s < 3 ? r(e) : s > 3 ? r(l, t, e) : r(l, t)) || e);
        return s > 3 && e && Object.defineProperty(l, t, e), e;
      }
      function Qi(u, l) {
        return function(t, a) {
          l(t, a, u);
        };
      }
      function Zi(u, l) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(u, l);
      }
      function es(u, l, t, a) {
        function s(e) {
          return e instanceof t ? e : new t(function(r) {
            r(e);
          });
        }
        return new (t || (t = Promise))(function(e, r) {
          function n(y) {
            try {
              c(a.next(y));
            } catch (m) {
              r(m);
            }
          }
          function o(y) {
            try {
              c(a.throw(y));
            } catch (m) {
              r(m);
            }
          }
          function c(y) {
            y.done ? e(y.value) : s(y.value).then(n, o);
          }
          c((a = a.apply(u, l || [])).next());
        });
      }
      function ts(u, l) {
        var t = { label: 0, sent: function() {
          if (e[0] & 1)
            throw e[1];
          return e[1];
        }, trys: [], ops: [] }, a, s, e, r;
        return r = { next: n(0), throw: n(1), return: n(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
          return this;
        }), r;
        function n(c) {
          return function(y) {
            return o([c, y]);
          };
        }
        function o(c) {
          if (a)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (a = 1, s && (e = c[0] & 2 ? s.return : c[0] ? s.throw || ((e = s.return) && e.call(s), 0) : s.next) && !(e = e.call(s, c[1])).done)
                return e;
              switch (s = 0, e && (c = [c[0] & 2, e.value]), c[0]) {
                case 0:
                case 1:
                  e = c;
                  break;
                case 4:
                  return t.label++, { value: c[1], done: !1 };
                case 5:
                  t.label++, s = c[1], c = [0];
                  continue;
                case 7:
                  c = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!e || c[1] > e[0] && c[1] < e[3])) {
                    t.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && t.label < e[1]) {
                    t.label = e[1], e = c;
                    break;
                  }
                  if (e && t.label < e[2]) {
                    t.label = e[2], t.ops.push(c);
                    break;
                  }
                  e[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              c = l.call(u, t);
            } catch (y) {
              c = [6, y], s = 0;
            } finally {
              a = e = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        }
      }
      function rs(u, l, t, a) {
        a === void 0 && (a = t), u[a] = l[t];
      }
      function ns(u, l) {
        for (var t in u)
          t !== "default" && !l.hasOwnProperty(t) && (l[t] = u[t]);
      }
      function kn(u) {
        var l = typeof Symbol == "function" && Symbol.iterator, t = l && u[l], a = 0;
        if (t)
          return t.call(u);
        if (u && typeof u.length == "number")
          return { next: function() {
            return u && a >= u.length && (u = void 0), { value: u && u[a++], done: !u };
          } };
        throw new TypeError(l ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function An(u, l) {
        var t = typeof Symbol == "function" && u[Symbol.iterator];
        if (!t)
          return u;
        var a = t.call(u), s, e = [], r;
        try {
          for (; (l === void 0 || l-- > 0) && !(s = a.next()).done; )
            e.push(s.value);
        } catch (n) {
          r = { error: n };
        } finally {
          try {
            s && !s.done && (t = a.return) && t.call(a);
          } finally {
            if (r)
              throw r.error;
          }
        }
        return e;
      }
      function L() {
        for (var u = [], l = 0; l < arguments.length; l++)
          u = u.concat(An(arguments[l]));
        return u;
      }
      function te() {
        for (var u = 0, l = 0, t = arguments.length; l < t; l++)
          u += arguments[l].length;
        for (var a = Array(u), s = 0, l = 0; l < t; l++)
          for (var e = arguments[l], r = 0, n = e.length; r < n; r++, s++)
            a[s] = e[r];
        return a;
      }
      function he(u) {
        return this instanceof he ? (this.v = u, this) : new he(u);
      }
      function ye(u, l, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var a = t.apply(u, l || []), s, e = [];
        return s = {}, r("next"), r("throw"), r("return"), s[Symbol.asyncIterator] = function() {
          return this;
        }, s;
        function r(g) {
          a[g] && (s[g] = function(p) {
            return new Promise(function(D, C) {
              e.push([g, p, D, C]) > 1 || n(g, p);
            });
          });
        }
        function n(g, p) {
          try {
            o(a[g](p));
          } catch (D) {
            m(e[0][3], D);
          }
        }
        function o(g) {
          g.value instanceof he ? Promise.resolve(g.value.v).then(c, y) : m(e[0][2], g);
        }
        function c(g) {
          n("next", g);
        }
        function y(g) {
          n("throw", g);
        }
        function m(g, p) {
          g(p), e.shift(), e.length && n(e[0][0], e[0][1]);
        }
      }
      function ke(u) {
        var l, t;
        return l = {}, a("next"), a("throw", function(s) {
          throw s;
        }), a("return"), l[Symbol.iterator] = function() {
          return this;
        }, l;
        function a(s, e) {
          l[s] = u[s] ? function(r) {
            return (t = !t) ? { value: he(u[s](r)), done: s === "return" } : e ? e(r) : r;
          } : e;
        }
      }
      function ue(u) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var l = u[Symbol.asyncIterator], t;
        return l ? l.call(u) : (u = typeof kn == "function" ? kn(u) : u[Symbol.iterator](), t = {}, a("next"), a("throw"), a("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function a(e) {
          t[e] = u[e] && function(r) {
            return new Promise(function(n, o) {
              r = u[e](r), s(n, o, r.done, r.value);
            });
          };
        }
        function s(e, r, n, o) {
          Promise.resolve(o).then(function(c) {
            e({ value: c, done: n });
          }, r);
        }
      }
      function de(u, l) {
        return Object.defineProperty ? Object.defineProperty(u, "raw", { value: l }) : u.raw = l, u;
      }
      function Ge(u) {
        if (u && u.__esModule)
          return u;
        var l = {};
        if (u != null)
          for (var t in u)
            Object.hasOwnProperty.call(u, t) && (l[t] = u[t]);
        return l.default = u, l;
      }
      function Ue(u) {
        return u && u.__esModule ? u : { default: u };
      }
      function gt(u, l) {
        if (!l.has(u))
          throw new TypeError("attempted to get private field on non-instance");
        return l.get(u);
      }
      function ce(u, l, t) {
        if (!l.has(u))
          throw new TypeError("attempted to set private field on non-instance");
        return l.set(u, t), t;
      }
      var Ae, Ve, ze = rt({ "node_modules/tslib/tslib.es6.js"() {
        ne(), Ae = function(u, l) {
          return Ae = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, a) {
            t.__proto__ = a;
          } || function(t, a) {
            for (var s in a)
              a.hasOwnProperty(s) && (t[s] = a[s]);
          }, Ae(u, l);
        }, Ve = function() {
          return Ve = Object.assign || function(u) {
            for (var l, t = 1, a = arguments.length; t < a; t++) {
              l = arguments[t];
              for (var s in l)
                Object.prototype.hasOwnProperty.call(l, s) && (u[s] = l[s]);
            }
            return u;
          }, Ve.apply(this, arguments);
        };
      } }), Je = O({ "node_modules/vnopts/lib/descriptors/api.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.apiDescriptor = { key: (l) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(l) ? l : JSON.stringify(l), value(l) {
          if (l === null || typeof l != "object")
            return JSON.stringify(l);
          if (Array.isArray(l))
            return `[${l.map((a) => u.apiDescriptor.value(a)).join(", ")}]`;
          let t = Object.keys(l);
          return t.length === 0 ? "{}" : `{ ${t.map((a) => `${u.apiDescriptor.key(a)}: ${u.apiDescriptor.value(l[a])}`).join(", ")} }`;
        }, pair: (l) => {
          let { key: t, value: a } = l;
          return u.apiDescriptor.value({ [t]: a });
        } };
      } }), Qe = O({ "node_modules/vnopts/lib/descriptors/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(Je(), u);
      } }), yt = O({ "scripts/build/shims/chalk.cjs"(u, l) {
        ne();
        var t = (a) => a;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, l.exports = t;
      } }), _t = O({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt();
        u.commonDeprecatedHandler = (t, a, s) => {
          let { descriptor: e } = s, r = [`${l.default.yellow(typeof t == "string" ? e.key(t) : e.pair(t))} is deprecated`];
          return a && r.push(`we now treat it as ${l.default.blue(typeof a == "string" ? e.key(a) : e.pair(a))}`), r.join("; ") + ".";
        };
      } }), ct = O({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(_t(), u);
      } }), kt = O({ "node_modules/vnopts/lib/handlers/invalid/common.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt();
        u.commonInvalidHandler = (t, a, s) => [`Invalid ${l.default.red(s.descriptor.key(t))} value.`, `Expected ${l.default.blue(s.schemas[t].expected(s))},`, `but received ${l.default.red(s.descriptor.value(a))}.`].join(" ");
      } }), $t = O({ "node_modules/vnopts/lib/handlers/invalid/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(kt(), u);
      } }), ir = O({ "node_modules/vnopts/node_modules/leven/index.js"(u, l) {
        ne();
        var t = [], a = [];
        l.exports = function(s, e) {
          if (s === e)
            return 0;
          var r = s;
          s.length > e.length && (s = e, e = r);
          var n = s.length, o = e.length;
          if (n === 0)
            return o;
          if (o === 0)
            return n;
          for (; n > 0 && s.charCodeAt(~-n) === e.charCodeAt(~-o); )
            n--, o--;
          if (n === 0)
            return o;
          for (var c = 0; c < n && s.charCodeAt(c) === e.charCodeAt(c); )
            c++;
          if (n -= c, o -= c, n === 0)
            return o;
          for (var y, m, g, p, D = 0, C = 0; D < n; )
            a[c + D] = s.charCodeAt(c + D), t[D] = ++D;
          for (; C < o; )
            for (y = e.charCodeAt(c + C), g = C++, m = C, D = 0; D < n; D++)
              p = y === a[c + D] ? g : g + 1, g = t[D], m = t[D] = g > m ? p > m ? m + 1 : p : p > g ? g + 1 : p;
          return m;
        };
      } }), st = O({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = yt(), t = ir();
        u.levenUnknownHandler = (a, s, e) => {
          let { descriptor: r, logger: n, schemas: o } = e, c = [`Ignored unknown option ${l.default.yellow(r.pair({ key: a, value: s }))}.`], y = Object.keys(o).sort().find((m) => t(a, m) < 3);
          y && c.push(`Did you mean ${l.default.blue(r.key(y))}?`), n.warn(c.join(" "));
        };
      } }), Ot = O({ "node_modules/vnopts/lib/handlers/unknown/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(st(), u);
      } }), Vt = O({ "node_modules/vnopts/lib/handlers/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(ct(), u), l.__exportStar($t(), u), l.__exportStar(Ot(), u);
      } }), Gt = O({ "node_modules/vnopts/lib/schema.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(e, r) {
          let n = new e(r), o = Object.create(n);
          for (let c of l)
            c in r && (o[c] = s(r[c], n, a.prototype[c].length));
          return o;
        }
        u.createSchema = t;
        var a = class {
          constructor(e) {
            this.name = e.name;
          }
          static create(e) {
            return t(this, e);
          }
          default(e) {
          }
          expected(e) {
            return "nothing";
          }
          validate(e, r) {
            return !1;
          }
          deprecated(e, r) {
            return !1;
          }
          forward(e, r) {
          }
          redirect(e, r) {
          }
          overlap(e, r, n) {
            return e;
          }
          preprocess(e, r) {
            return e;
          }
          postprocess(e, r) {
            return e;
          }
        };
        u.Schema = a;
        function s(e, r, n) {
          return typeof e == "function" ? function() {
            for (var o = arguments.length, c = new Array(o), y = 0; y < o; y++)
              c[y] = arguments[y];
            return e(...c.slice(0, n - 1), r, ...c.slice(n - 1));
          } : () => e;
        }
      } }), rr = O({ "node_modules/vnopts/lib/schemas/alias.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = class extends l.Schema {
          constructor(a) {
            super(a), this._sourceName = a.sourceName;
          }
          expected(a) {
            return a.schemas[this._sourceName].expected(a);
          }
          validate(a, s) {
            return s.schemas[this._sourceName].validate(a, s);
          }
          redirect(a, s) {
            return this._sourceName;
          }
        };
        u.AliasSchema = t;
      } }), z = O({ "node_modules/vnopts/lib/schemas/any.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = class extends l.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return !0;
          }
        };
        u.AnySchema = t;
      } }), le = O({ "node_modules/vnopts/lib/schemas/array.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr)), t = Gt(), a = class extends t.Schema {
          constructor(e) {
            var { valueSchema: r, name: n = r.name } = e, o = l.__rest(e, ["valueSchema", "name"]);
            super(Object.assign({}, o, { name: n })), this._valueSchema = r;
          }
          expected(e) {
            return `an array of ${this._valueSchema.expected(e)}`;
          }
          validate(e, r) {
            if (!Array.isArray(e))
              return !1;
            let n = [];
            for (let o of e) {
              let c = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
              c !== !0 && n.push(c.value);
            }
            return n.length === 0 ? !0 : { value: n };
          }
          deprecated(e, r) {
            let n = [];
            for (let o of e) {
              let c = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
              c !== !1 && n.push(...c.map((y) => {
                let { value: m } = y;
                return { value: [m] };
              }));
            }
            return n;
          }
          forward(e, r) {
            let n = [];
            for (let o of e) {
              let c = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
              n.push(...c.map(s));
            }
            return n;
          }
          redirect(e, r) {
            let n = [], o = [];
            for (let c of e) {
              let y = r.normalizeRedirectResult(this._valueSchema.redirect(c, r), c);
              "remain" in y && n.push(y.remain), o.push(...y.redirect.map(s));
            }
            return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
          }
          overlap(e, r) {
            return e.concat(r);
          }
        };
        u.ArraySchema = a;
        function s(e) {
          let { from: r, to: n } = e;
          return { from: [r], to: n };
        }
      } }), We = O({ "node_modules/vnopts/lib/schemas/boolean.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = class extends l.Schema {
          expected() {
            return "true or false";
          }
          validate(a) {
            return typeof a == "boolean";
          }
        };
        u.BooleanSchema = t;
      } }), Me = O({ "node_modules/vnopts/lib/utils.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        function l(p, D) {
          let C = /* @__PURE__ */ Object.create(null);
          for (let w of p) {
            let k = w[D];
            if (C[k])
              throw new Error(`Duplicate ${D} ${JSON.stringify(k)}`);
            C[k] = w;
          }
          return C;
        }
        u.recordFromArray = l;
        function t(p, D) {
          let C = /* @__PURE__ */ new Map();
          for (let w of p) {
            let k = w[D];
            if (C.has(k))
              throw new Error(`Duplicate ${D} ${JSON.stringify(k)}`);
            C.set(k, w);
          }
          return C;
        }
        u.mapFromArray = t;
        function a() {
          let p = /* @__PURE__ */ Object.create(null);
          return (D) => {
            let C = JSON.stringify(D);
            return p[C] ? !0 : (p[C] = !0, !1);
          };
        }
        u.createAutoChecklist = a;
        function s(p, D) {
          let C = [], w = [];
          for (let k of p)
            D(k) ? C.push(k) : w.push(k);
          return [C, w];
        }
        u.partition = s;
        function e(p) {
          return p === Math.floor(p);
        }
        u.isInt = e;
        function r(p, D) {
          if (p === D)
            return 0;
          let C = typeof p, w = typeof D, k = ["undefined", "object", "boolean", "number", "string"];
          return C !== w ? k.indexOf(C) - k.indexOf(w) : C !== "string" ? Number(p) - Number(D) : p.localeCompare(D);
        }
        u.comparePrimitive = r;
        function n(p) {
          return p === void 0 ? {} : p;
        }
        u.normalizeDefaultResult = n;
        function o(p, D) {
          return p === !0 ? !0 : p === !1 ? { value: D } : p;
        }
        u.normalizeValidateResult = o;
        function c(p, D) {
          let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return p === !1 ? !1 : p === !0 ? C ? !0 : [{ value: D }] : "value" in p ? [p] : p.length === 0 ? !1 : p;
        }
        u.normalizeDeprecatedResult = c;
        function y(p, D) {
          return typeof p == "string" || "key" in p ? { from: D, to: p } : "from" in p ? { from: p.from, to: p.to } : { from: D, to: p.to };
        }
        u.normalizeTransferResult = y;
        function m(p, D) {
          return p === void 0 ? [] : Array.isArray(p) ? p.map((C) => y(C, D)) : [y(p, D)];
        }
        u.normalizeForwardResult = m;
        function g(p, D) {
          let C = m(typeof p == "object" && "redirect" in p ? p.redirect : p, D);
          return C.length === 0 ? { remain: D, redirect: C } : typeof p == "object" && "remain" in p ? { remain: p.remain, redirect: C } : { redirect: C };
        }
        u.normalizeRedirectResult = g;
      } }), at = O({ "node_modules/vnopts/lib/schemas/choice.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = Me(), a = class extends l.Schema {
          constructor(s) {
            super(s), this._choices = t.mapFromArray(s.choices.map((e) => e && typeof e == "object" ? e : { value: e }), "value");
          }
          expected(s) {
            let { descriptor: e } = s, r = Array.from(this._choices.keys()).map((c) => this._choices.get(c)).filter((c) => !c.deprecated).map((c) => c.value).sort(t.comparePrimitive).map(e.value), n = r.slice(0, -2), o = r.slice(-2);
            return n.concat(o.join(" or ")).join(", ");
          }
          validate(s) {
            return this._choices.has(s);
          }
          deprecated(s) {
            let e = this._choices.get(s);
            return e && e.deprecated ? { value: s } : !1;
          }
          forward(s) {
            let e = this._choices.get(s);
            return e ? e.forward : void 0;
          }
          redirect(s) {
            let e = this._choices.get(s);
            return e ? e.redirect : void 0;
          }
        };
        u.ChoiceSchema = a;
      } }), Jt = O({ "node_modules/vnopts/lib/schemas/number.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = class extends l.Schema {
          expected() {
            return "a number";
          }
          validate(a, s) {
            return typeof a == "number";
          }
        };
        u.NumberSchema = t;
      } }), er = O({ "node_modules/vnopts/lib/schemas/integer.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Me(), t = Jt(), a = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(s, e) {
            return e.normalizeValidateResult(super.validate(s, e), s) === !0 && l.isInt(s);
          }
        };
        u.IntegerSchema = a;
      } }), Ar = O({ "node_modules/vnopts/lib/schemas/string.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Gt(), t = class extends l.Schema {
          expected() {
            return "a string";
          }
          validate(a) {
            return typeof a == "string";
          }
        };
        u.StringSchema = t;
      } }), Er = O({ "node_modules/vnopts/lib/schemas/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(rr(), u), l.__exportStar(z(), u), l.__exportStar(le(), u), l.__exportStar(We(), u), l.__exportStar(at(), u), l.__exportStar(er(), u), l.__exportStar(Jt(), u), l.__exportStar(Ar(), u);
      } }), Nr = O({ "node_modules/vnopts/lib/defaults.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Je(), t = _t(), a = $t(), s = st();
        u.defaultDescriptor = l.apiDescriptor, u.defaultUnknownHandler = s.levenUnknownHandler, u.defaultInvalidHandler = a.commonInvalidHandler, u.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      } }), kr = O({ "node_modules/vnopts/lib/normalize.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Nr(), t = Me();
        u.normalize = (s, e, r) => new a(e, r).normalize(s);
        var a = class {
          constructor(s, e) {
            let { logger: r = console, descriptor: n = l.defaultDescriptor, unknown: o = l.defaultUnknownHandler, invalid: c = l.defaultInvalidHandler, deprecated: y = l.defaultDeprecatedHandler } = e || {};
            this._utils = { descriptor: n, logger: r || { warn: () => {
            } }, schemas: t.recordFromArray(s, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = o, this._invalidHandler = c, this._deprecatedHandler = y, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(s) {
            let e = {}, r = [s], n = () => {
              for (; r.length !== 0; ) {
                let o = r.shift(), c = this._applyNormalization(o, e);
                r.push(...c);
              }
            };
            n();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              if (!(o in e)) {
                let y = t.normalizeDefaultResult(c.default(this._utils));
                "value" in y && r.push({ [o]: y.value });
              }
            }
            n();
            for (let o of Object.keys(this._utils.schemas)) {
              let c = this._utils.schemas[o];
              o in e && (e[o] = c.postprocess(e[o], this._utils));
            }
            return e;
          }
          _applyNormalization(s, e) {
            let r = [], [n, o] = t.partition(Object.keys(s), (c) => c in this._utils.schemas);
            for (let c of n) {
              let y = this._utils.schemas[c], m = y.preprocess(s[c], this._utils), g = t.normalizeValidateResult(y.validate(m, this._utils), m);
              if (g !== !0) {
                let { value: w } = g, k = this._invalidHandler(c, w, this._utils);
                throw typeof k == "string" ? new Error(k) : k;
              }
              let p = (w) => {
                let { from: k, to: A } = w;
                r.push(typeof A == "string" ? { [A]: k } : { [A.key]: A.value });
              }, D = (w) => {
                let { value: k, redirectTo: A } = w, N = t.normalizeDeprecatedResult(y.deprecated(k, this._utils), m, !0);
                if (N !== !1)
                  if (N === !0)
                    this._hasDeprecationWarned(c) || this._utils.logger.warn(this._deprecatedHandler(c, A, this._utils));
                  else
                    for (let { value: x } of N) {
                      let P = { key: c, value: x };
                      if (!this._hasDeprecationWarned(P)) {
                        let _ = typeof A == "string" ? { key: A, value: x } : A;
                        this._utils.logger.warn(this._deprecatedHandler(P, _, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(y.forward(m, this._utils), m).forEach(p);
              let C = t.normalizeRedirectResult(y.redirect(m, this._utils), m);
              if (C.redirect.forEach(p), "remain" in C) {
                let w = C.remain;
                e[c] = c in e ? y.overlap(e[c], w, this._utils) : w, D({ value: w });
              }
              for (let { from: w, to: k } of C.redirect)
                D({ value: w, redirectTo: k });
            }
            for (let c of o) {
              let y = s[c], m = this._unknownHandler(c, y, this._utils);
              if (m)
                for (let g of Object.keys(m)) {
                  let p = { [g]: m[g] };
                  g in this._utils.schemas ? r.push(p) : Object.assign(e, p);
                }
            }
            return r;
          }
        };
        u.Normalizer = a;
      } }), zr = O({ "node_modules/vnopts/lib/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = (ze(), qt(Yr));
        l.__exportStar(Qe(), u), l.__exportStar(Vt(), u), l.__exportStar(Er(), u), l.__exportStar(kr(), u), l.__exportStar(Gt(), u);
      } }), Rr = O({ "src/main/options-normalizer.js"(u, l) {
        ne();
        var t = zr(), a = mr(), s = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t.apiDescriptor.value(g), pair: (g) => {
          let { key: p, value: D } = g;
          return D === !1 ? `--no-${p}` : D === !0 ? s.key(p) : D === "" ? `${s.key(p)} without an argument` : `${s.key(p)}=${D}`;
        } }, e = (g) => {
          let { colorsModule: p, levenshteinDistance: D } = g;
          return class extends t.ChoiceSchema {
            constructor(C) {
              let { name: w, flags: k } = C;
              super({ name: w, choices: k }), this._flags = [...k].sort();
            }
            preprocess(C, w) {
              if (typeof C == "string" && C.length > 0 && !this._flags.includes(C)) {
                let k = this._flags.find((A) => D(A, C) < 3);
                if (k)
                  return w.logger.warn([`Unknown flag ${p.yellow(w.descriptor.value(C))},`, `did you mean ${p.blue(w.descriptor.value(k))}?`].join(" ")), k;
              }
              return C;
            }
            expected() {
              return "a flag";
            }
          };
        }, r;
        function n(g, p) {
          let { logger: D = !1, isCLI: C = !1, passThrough: w = !1, colorsModule: k = null, levenshteinDistance: A = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, N = w ? Array.isArray(w) ? (T, d) => w.includes(T) ? { [T]: d } : void 0 : (T, d) => ({ [T]: d }) : (T, d, F) => {
            let i = F.schemas, h = re(i, Q);
            return t.levenUnknownHandler(T, d, Object.assign(Object.assign({}, F), {}, { schemas: h }));
          }, x = C ? s : t.apiDescriptor, P = o(p, { isCLI: C, colorsModule: k, levenshteinDistance: A }), _ = new t.Normalizer(P, { logger: D, unknown: N, descriptor: x }), J = D !== !1;
          J && r && (_._hasDeprecationWarned = r);
          let f = _.normalize(g);
          return J && (r = _._hasDeprecationWarned), C && f["plugin-search"] === !1 && (f["plugin-search-dir"] = !1), f;
        }
        function o(g, p) {
          let { isCLI: D, colorsModule: C, levenshteinDistance: w } = p, k = [];
          D && k.push(t.AnySchema.create({ name: "_" }));
          for (let A of g)
            k.push(c(A, { isCLI: D, optionInfos: g, colorsModule: C, levenshteinDistance: w })), A.alias && D && k.push(t.AliasSchema.create({ name: A.alias, sourceName: A.name }));
          return k;
        }
        function c(g, p) {
          let { isCLI: D, optionInfos: C, colorsModule: w, levenshteinDistance: k } = p, { name: A } = g;
          if (A === "plugin-search-dir" || A === "pluginSearchDirs")
            return t.AnySchema.create({ name: A, preprocess(_) {
              return _ === !1 || (_ = Array.isArray(_) ? _ : [_]), _;
            }, validate(_) {
              return _ === !1 ? !0 : _.every((J) => typeof J == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let N = { name: A }, x, P = {};
          switch (g.type) {
            case "int":
              x = t.IntegerSchema, D && (N.preprocess = Number);
              break;
            case "string":
              x = t.StringSchema;
              break;
            case "choice":
              x = t.ChoiceSchema, N.choices = g.choices.map((_) => typeof _ == "object" && _.redirect ? Object.assign(Object.assign({}, _), {}, { redirect: { to: { key: g.name, value: _.redirect } } }) : _);
              break;
            case "boolean":
              x = t.BooleanSchema;
              break;
            case "flag":
              x = e({ colorsModule: w, levenshteinDistance: k }), N.flags = C.flatMap((_) => [_.alias, _.description && _.name, _.oppositeDescription && `no-${_.name}`].filter(Boolean));
              break;
            case "path":
              x = t.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${g.type}`);
          }
          if (g.exception ? N.validate = (_, J, f) => g.exception(_) || J.validate(_, f) : N.validate = (_, J, f) => _ === void 0 || J.validate(_, f), g.redirect && (P.redirect = (_) => _ ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (P.deprecated = !0), D && !g.array) {
            let _ = N.preprocess || ((J) => J);
            N.preprocess = (J, f, T) => f.preprocess(_(Array.isArray(J) ? a(J) : J), T);
          }
          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, D ? { preprocess: (_) => Array.isArray(_) ? _ : [_] } : {}), P), {}, { valueSchema: x.create(N) })) : x.create(Object.assign(Object.assign({}, N), P));
        }
        function y(g, p, D) {
          return n(g, p, D);
        }
        function m(g, p, D) {
          return n(g, p, Object.assign({ isCLI: !0 }, D));
        }
        l.exports = { normalizeApiOptions: y, normalizeCliOptions: m };
      } }), or = O({ "src/language-js/loc.js"(u, l) {
        ne();
        var t = uu();
        function a(o) {
          var c, y;
          let m = o.range ? o.range[0] : o.start, g = (c = (y = o.declaration) === null || y === void 0 ? void 0 : y.decorators) !== null && c !== void 0 ? c : o.decorators;
          return t(g) ? Math.min(a(g[0]), m) : m;
        }
        function s(o) {
          return o.range ? o.range[1] : o.end;
        }
        function e(o, c) {
          let y = a(o);
          return Number.isInteger(y) && y === a(c);
        }
        function r(o, c) {
          let y = s(o);
          return Number.isInteger(y) && y === s(c);
        }
        function n(o, c) {
          return e(o, c) && r(o, c);
        }
        l.exports = { locStart: a, locEnd: s, hasSameLocStart: e, hasSameLoc: n };
      } }), lt = O({ "src/main/load-parser.js"(u, l) {
        ne(), l.exports = () => {
        };
      } }), mt = O({ "scripts/build/shims/babel-highlight.cjs"(u, l) {
        ne();
        var t = yt(), a = { shouldHighlight: () => !1, getChalk: () => t };
        l.exports = a;
      } }), St = O({ "node_modules/@babel/code-frame/lib/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.codeFrameColumns = r, u.default = n;
        var l = mt(), t = !1;
        function a(o) {
          return { gutter: o.grey, marker: o.red.bold, message: o.red.bold };
        }
        var s = /\r\n|[\n\r\u2028\u2029]/;
        function e(o, c, y) {
          let m = Object.assign({ column: 0, line: -1 }, o.start), g = Object.assign({}, m, o.end), { linesAbove: p = 2, linesBelow: D = 3 } = y || {}, C = m.line, w = m.column, k = g.line, A = g.column, N = Math.max(C - (p + 1), 0), x = Math.min(c.length, k + D);
          C === -1 && (N = 0), k === -1 && (x = c.length);
          let P = k - C, _ = {};
          if (P)
            for (let J = 0; J <= P; J++) {
              let f = J + C;
              if (!w)
                _[f] = !0;
              else if (J === 0) {
                let T = c[f - 1].length;
                _[f] = [w, T - w + 1];
              } else if (J === P)
                _[f] = [0, A];
              else {
                let T = c[f - J].length;
                _[f] = [0, T];
              }
            }
          else
            w === A ? w ? _[C] = [w, 0] : _[C] = !0 : _[C] = [w, A - w];
          return { start: N, end: x, markerLines: _ };
        }
        function r(o, c) {
          let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, m = (y.highlightCode || y.forceColor) && (0, l.shouldHighlight)(y), g = (0, l.getChalk)(y), p = a(g), D = (_, J) => m ? _(J) : J, C = o.split(s), { start: w, end: k, markerLines: A } = e(c, C, y), N = c.start && typeof c.start.column == "number", x = String(k).length, P = (m ? (0, l.default)(o, y) : o).split(s, k).slice(w, k).map((_, J) => {
            let f = w + 1 + J, T = ` ${` ${f}`.slice(-x)} |`, d = A[f], F = !A[f + 1];
            if (d) {
              let i = "";
              if (Array.isArray(d)) {
                let h = _.slice(0, Math.max(d[0] - 1, 0)).replace(/[^\t]/g, " "), E = d[1] || 1;
                i = [`
 `, D(p.gutter, T.replace(/\d/g, " ")), " ", h, D(p.marker, "^").repeat(E)].join(""), F && y.message && (i += " " + D(p.message, y.message));
              }
              return [D(p.marker, ">"), D(p.gutter, T), _.length > 0 ? ` ${_}` : "", i].join("");
            } else
              return ` ${D(p.gutter, T)}${_.length > 0 ? ` ${_}` : ""}`;
          }).join(`
`);
          return y.message && !N && (P = `${" ".repeat(x + 1)}${y.message}
${P}`), m ? g.reset(P) : P;
        }
        function n(o, c, y) {
          let m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = !0;
            let g = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Zt.emitWarning)
              Zt.emitWarning(g, "DeprecationWarning");
            else {
              let p = new Error(g);
              p.name = "DeprecationWarning", console.warn(new Error(g));
            }
          }
          return y = Math.max(y, 0), r(o, { start: { column: y, line: c } }, m);
        }
      } }), xt = O({ "src/main/parser.js"(u, l) {
        ne();
        var { ConfigError: t } = Fn(), a = or();
        lt();
        var { locStart: s, locEnd: e } = a, r = Object.getOwnPropertyNames, n = Object.getOwnPropertyDescriptor;
        function o(m) {
          let g = {};
          for (let p of m.plugins)
            if (p.parsers)
              for (let D of r(p.parsers))
                Object.defineProperty(g, D, n(p.parsers, D));
          return g;
        }
        function c(m) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o(m);
          if (typeof m.parser == "function")
            return { parse: m.parser, astFormat: "estree", locStart: s, locEnd: e };
          if (typeof m.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(g, m.parser))
              return g[m.parser];
            throw new t(`Couldn't resolve parser "${m.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function y(m, g) {
          let p = o(g), D = Object.defineProperties({}, Object.fromEntries(Object.keys(p).map((w) => [w, { enumerable: !0, get() {
            return p[w].parse;
          } }]))), C = c(g, p);
          try {
            return C.preprocess && (m = C.preprocess(m, g)), { text: m, ast: C.parse(m, D, g) };
          } catch (w) {
            let { loc: k } = w;
            if (k) {
              let { codeFrameColumns: A } = St();
              throw w.codeFrame = A(m, k, { highlightCode: !0 }), w.message += `
` + w.codeFrame, w;
            }
            throw w;
          }
        }
        l.exports = { parse: y, resolveParser: c };
      } }), Kt = O({ "src/main/options.js"(u, l) {
        ne();
        var t = Yi(), { UndefinedParserError: a } = Fn(), { getSupportInfo: s } = nu(), e = Rr(), { resolveParser: r } = xt(), n = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function o(m) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = Object.assign({}, m), D = s({ plugins: m.plugins, showUnreleased: !0, showDeprecated: !0 }).options, C = Object.assign(Object.assign({}, n), Object.fromEntries(D.filter((x) => x.default !== void 0).map((x) => [x.name, x.default])));
          if (!p.parser) {
            if (!p.filepath)
              (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), p.parser = "babel";
            else if (p.parser = y(p.filepath, p.plugins), !p.parser)
              throw new a(`No parser could be inferred for file: ${p.filepath}`);
          }
          let w = r(e.normalizeApiOptions(p, [D.find((x) => x.name === "parser")], { passThrough: !0, logger: !1 }));
          p.astFormat = w.astFormat, p.locEnd = w.locEnd, p.locStart = w.locStart;
          let k = c(p);
          p.printer = k.printers[p.astFormat];
          let A = Object.fromEntries(D.filter((x) => x.pluginDefaults && x.pluginDefaults[k.name] !== void 0).map((x) => [x.name, x.pluginDefaults[k.name]])), N = Object.assign(Object.assign({}, C), A);
          for (let [x, P] of Object.entries(N))
            (p[x] === null || p[x] === void 0) && (p[x] = P);
          return p.parser === "json" && (p.trailingComma = "none"), e.normalizeApiOptions(p, D, Object.assign({ passThrough: Object.keys(n) }, g));
        }
        function c(m) {
          let { astFormat: g } = m;
          if (!g)
            throw new Error("getPlugin() requires astFormat to be set");
          let p = m.plugins.find((D) => D.printers && D.printers[g]);
          if (!p)
            throw new Error(`Couldn't find plugin for AST format "${g}"`);
          return p;
        }
        function y(m, g) {
          let p = t.basename(m).toLowerCase(), D = s({ plugins: g }).languages.filter((C) => C.since !== null).find((C) => C.extensions && C.extensions.some((w) => p.endsWith(w)) || C.filenames && C.filenames.some((w) => w.toLowerCase() === p));
          return D && D.parsers[0];
        }
        l.exports = { normalize: o, hiddenDefaults: n, inferParser: y };
      } }), sr = O({ "src/main/massage-ast.js"(u, l) {
        ne();
        function t(a, s, e) {
          if (Array.isArray(a))
            return a.map((c) => t(c, s, e)).filter(Boolean);
          if (!a || typeof a != "object")
            return a;
          let r = s.printer.massageAstNode, n;
          r && r.ignoredProperties ? n = r.ignoredProperties : n = /* @__PURE__ */ new Set();
          let o = {};
          for (let [c, y] of Object.entries(a))
            !n.has(c) && typeof y != "function" && (o[c] = t(y, s, a));
          if (r) {
            let c = r(a, o, e);
            if (c === null)
              return;
            if (c)
              return c;
          }
          return o;
        }
        l.exports = t;
      } }), lr = O({ "scripts/build/shims/assert.cjs"(u, l) {
        ne();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, l.exports = t;
      } }), Qt = O({ "src/main/comments.js"(u, l) {
        ne();
        var t = lr(), { builders: { line: a, hardline: s, breakParent: e, indent: r, lineSuffix: n, join: o, cursor: c } } = wt(), { hasNewline: y, skipNewline: m, skipSpaces: g, isPreviousLineEmpty: p, addLeadingComment: D, addDanglingComment: C, addTrailingComment: w } = Ut(), k = /* @__PURE__ */ new WeakMap();
        function A(I, M, U) {
          if (!I)
            return;
          let { printer: q, locStart: ee, locEnd: j } = M;
          if (U) {
            if (q.canAttachComment && q.canAttachComment(I)) {
              let G;
              for (G = U.length - 1; G >= 0 && !(ee(U[G]) <= ee(I) && j(U[G]) <= j(I)); --G)
                ;
              U.splice(G + 1, 0, I);
              return;
            }
          } else if (k.has(I))
            return k.get(I);
          let De = q.getCommentChildNodes && q.getCommentChildNodes(I, M) || typeof I == "object" && Object.entries(I).filter((G) => {
            let [R] = G;
            return R !== "enclosingNode" && R !== "precedingNode" && R !== "followingNode" && R !== "tokens" && R !== "comments" && R !== "parent";
          }).map((G) => {
            let [, R] = G;
            return R;
          });
          if (De) {
            U || (U = [], k.set(I, U));
            for (let G of De)
              A(G, M, U);
            return U;
          }
        }
        function N(I, M, U, q) {
          let { locStart: ee, locEnd: j } = U, De = ee(M), G = j(M), R = A(I, U), pe, ve, fe = 0, Pe = R.length;
          for (; fe < Pe; ) {
            let X = fe + Pe >> 1, ie = R[X], Be = ee(ie), Ne = j(ie);
            if (Be <= De && G <= Ne)
              return N(ie, M, U, ie);
            if (Ne <= De) {
              pe = ie, fe = X + 1;
              continue;
            }
            if (G <= Be) {
              ve = ie, Pe = X;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (q && q.type === "TemplateLiteral") {
            let { quasis: X } = q, ie = F(X, M, U);
            pe && F(X, pe, U) !== ie && (pe = null), ve && F(X, ve, U) !== ie && (ve = null);
          }
          return { enclosingNode: q, precedingNode: pe, followingNode: ve };
        }
        var x = () => !1;
        function P(I, M, U, q) {
          if (!Array.isArray(I))
            return;
          let ee = [], { locStart: j, locEnd: De, printer: { handleComments: G = {} } } = q, { avoidAstMutation: R, ownLine: pe = x, endOfLine: ve = x, remaining: fe = x } = G, Pe = I.map((X, ie) => Object.assign(Object.assign({}, N(M, X, q)), {}, { comment: X, text: U, options: q, ast: M, isLastComment: I.length - 1 === ie }));
          for (let [X, ie] of Pe.entries()) {
            let { comment: Be, precedingNode: Ne, enclosingNode: it, followingNode: ae, text: K, options: ge, ast: Ee, isLastComment: Oe } = ie;
            if (ge.parser === "json" || ge.parser === "json5" || ge.parser === "__js_expression" || ge.parser === "__vue_expression" || ge.parser === "__vue_ts_expression") {
              if (j(Be) - j(Ee) <= 0) {
                D(Ee, Be);
                continue;
              }
              if (De(Be) - De(Ee) >= 0) {
                w(Ee, Be);
                continue;
              }
            }
            let Xe;
            if (R ? Xe = [ie] : (Be.enclosingNode = it, Be.precedingNode = Ne, Be.followingNode = ae, Xe = [Be, K, ge, Ee, Oe]), J(K, ge, Pe, X))
              Be.placement = "ownLine", pe(...Xe) || (ae ? D(ae, Be) : Ne ? w(Ne, Be) : C(it || Ee, Be));
            else if (f(K, ge, Pe, X))
              Be.placement = "endOfLine", ve(...Xe) || (Ne ? w(Ne, Be) : ae ? D(ae, Be) : C(it || Ee, Be));
            else if (Be.placement = "remaining", !fe(...Xe))
              if (Ne && ae) {
                let He = ee.length;
                He > 0 && ee[He - 1].followingNode !== ae && T(ee, K, ge), ee.push(ie);
              } else
                Ne ? w(Ne, Be) : ae ? D(ae, Be) : C(it || Ee, Be);
          }
          if (T(ee, U, q), !R)
            for (let X of I)
              delete X.precedingNode, delete X.enclosingNode, delete X.followingNode;
        }
        var _ = (I) => !/[\S\n\u2028\u2029]/.test(I);
        function J(I, M, U, q) {
          let { comment: ee, precedingNode: j } = U[q], { locStart: De, locEnd: G } = M, R = De(ee);
          if (j)
            for (let pe = q - 1; pe >= 0; pe--) {
              let { comment: ve, precedingNode: fe } = U[pe];
              if (fe !== j || !_(I.slice(G(ve), R)))
                break;
              R = De(ve);
            }
          return y(I, R, { backwards: !0 });
        }
        function f(I, M, U, q) {
          let { comment: ee, followingNode: j } = U[q], { locStart: De, locEnd: G } = M, R = G(ee);
          if (j)
            for (let pe = q + 1; pe < U.length; pe++) {
              let { comment: ve, followingNode: fe } = U[pe];
              if (fe !== j || !_(I.slice(R, De(ve))))
                break;
              R = G(ve);
            }
          return y(I, R);
        }
        function T(I, M, U) {
          let q = I.length;
          if (q === 0)
            return;
          let { precedingNode: ee, followingNode: j, enclosingNode: De } = I[0], G = U.printer.getGapRegex && U.printer.getGapRegex(De) || /^[\s(]*$/, R = U.locStart(j), pe;
          for (pe = q; pe > 0; --pe) {
            let { comment: ve, precedingNode: fe, followingNode: Pe } = I[pe - 1];
            t.strictEqual(fe, ee), t.strictEqual(Pe, j);
            let X = M.slice(U.locEnd(ve), R);
            if (G.test(X))
              R = U.locStart(ve);
            else
              break;
          }
          for (let [ve, { comment: fe }] of I.entries())
            ve < pe ? w(ee, fe) : D(j, fe);
          for (let ve of [ee, j])
            ve.comments && ve.comments.length > 1 && ve.comments.sort((fe, Pe) => U.locStart(fe) - U.locStart(Pe));
          I.length = 0;
        }
        function d(I, M) {
          let U = I.getValue();
          return U.printed = !0, M.printer.printComment(I, M);
        }
        function F(I, M, U) {
          let q = U.locStart(M) - 1;
          for (let ee = 1; ee < I.length; ++ee)
            if (q < U.locStart(I[ee]))
              return ee - 1;
          return 0;
        }
        function i(I, M) {
          let U = I.getValue(), q = [d(I, M)], { printer: ee, originalText: j, locStart: De, locEnd: G } = M;
          if (ee.isBlockComment && ee.isBlockComment(U)) {
            let pe = y(j, G(U)) ? y(j, De(U), { backwards: !0 }) ? s : a : " ";
            q.push(pe);
          } else
            q.push(s);
          let R = m(j, g(j, G(U)));
          return R !== !1 && y(j, R) && q.push(s), q;
        }
        function h(I, M) {
          let U = I.getValue(), q = d(I, M), { printer: ee, originalText: j, locStart: De } = M, G = ee.isBlockComment && ee.isBlockComment(U);
          if (y(j, De(U), { backwards: !0 })) {
            let pe = p(j, U, De);
            return n([s, pe ? s : "", q]);
          }
          let R = [" ", q];
          return G || (R = [n(R), e]), R;
        }
        function E(I, M, U, q) {
          let ee = [], j = I.getValue();
          return !j || !j.comments || (I.each(() => {
            let De = I.getValue();
            !De.leading && !De.trailing && (!q || q(De)) && ee.push(d(I, M));
          }, "comments"), ee.length === 0) ? "" : U ? o(s, ee) : r([s, o(s, ee)]);
        }
        function b(I, M, U) {
          let q = I.getValue();
          if (!q)
            return {};
          let ee = q.comments || [];
          U && (ee = ee.filter((R) => !U.has(R)));
          let j = q === M.cursorNode;
          if (ee.length === 0) {
            let R = j ? c : "";
            return { leading: R, trailing: R };
          }
          let De = [], G = [];
          return I.each(() => {
            let R = I.getValue();
            if (U && U.has(R))
              return;
            let { leading: pe, trailing: ve } = R;
            pe ? De.push(i(I, M)) : ve && G.push(h(I, M));
          }, "comments"), j && (De.unshift(c), G.push(c)), { leading: De, trailing: G };
        }
        function S(I, M, U, q) {
          let { leading: ee, trailing: j } = b(I, U, q);
          return !ee && !j ? M : [ee, M, j];
        }
        function B(I) {
          if (I)
            for (let M of I) {
              if (!M.printed)
                throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
              delete M.printed;
            }
        }
        l.exports = { attach: P, printComments: S, printCommentsSeparately: b, printDanglingComments: E, getSortedChildNodes: A, ensureAllCommentsPrinted: B };
      } }), Kr = O({ "src/common/ast-path.js"(u, l) {
        ne();
        var t = mr();
        function a(r, n) {
          let o = s(r.stack, n);
          return o === -1 ? null : r.stack[o];
        }
        function s(r, n) {
          for (let o = r.length - 1; o >= 0; o -= 2) {
            let c = r[o];
            if (c && !Array.isArray(c) && --n < 0)
              return o;
          }
          return -1;
        }
        var e = class {
          constructor(r) {
            this.stack = [r];
          }
          getName() {
            let { stack: r } = this, { length: n } = r;
            return n > 1 ? r[n - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return a(this, r);
          }
          getParentNode() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return a(this, r + 1);
          }
          call(r) {
            let { stack: n } = this, { length: o } = n, c = t(n);
            for (var y = arguments.length, m = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              m[g - 1] = arguments[g];
            for (let D of m)
              c = c[D], n.push(D, c);
            let p = r(this);
            return n.length = o, p;
          }
          callParent(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = s(this.stack, n + 1), c = this.stack.splice(o + 1), y = r(this);
            return this.stack.push(...c), y;
          }
          each(r) {
            let { stack: n } = this, { length: o } = n, c = t(n);
            for (var y = arguments.length, m = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              m[g - 1] = arguments[g];
            for (let p of m)
              c = c[p], n.push(p, c);
            for (let p = 0; p < c.length; ++p)
              n.push(p, c[p]), r(this, p, c), n.length -= 2;
            n.length = o;
          }
          map(r) {
            let n = [];
            for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), y = 1; y < o; y++)
              c[y - 1] = arguments[y];
            return this.each((m, g, p) => {
              n[g] = r(m, g, p);
            }, ...c), n;
          }
          try(r) {
            let { stack: n } = this, o = [...n];
            try {
              return r();
            } finally {
              n.length = 0, n.push(...o);
            }
          }
          match() {
            let r = this.stack.length - 1, n = null, o = this.stack[r--];
            for (var c = arguments.length, y = new Array(c), m = 0; m < c; m++)
              y[m] = arguments[m];
            for (let g of y) {
              if (o === void 0)
                return !1;
              let p = null;
              if (typeof n == "number" && (p = n, n = this.stack[r--], o = this.stack[r--]), g && !g(o, n, p))
                return !1;
              n = this.stack[r--], o = this.stack[r--];
            }
            return !0;
          }
          findAncestor(r) {
            let n = this.stack.length - 1, o = null, c = this.stack[n--];
            for (; c; ) {
              let y = null;
              if (typeof o == "number" && (y = o, o = this.stack[n--], c = this.stack[n--]), o !== null && r(c, o, y))
                return c;
              o = this.stack[n--], c = this.stack[n--];
            }
          }
        };
        l.exports = e;
      } }), Pn = O({ "src/main/multiparser.js"(u, l) {
        ne();
        var { utils: { stripTrailingHardline: t } } = wt(), { normalize: a } = Kt(), s = Qt();
        function e(n, o, c, y) {
          if (c.printer.embed && c.embeddedLanguageFormatting === "auto")
            return c.printer.embed(n, o, (m, g, p) => r(m, g, c, y, p), c);
        }
        function r(n, o, c, y) {
          let { stripTrailingHardline: m = !1 } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = a(Object.assign(Object.assign(Object.assign({}, c), o), {}, { parentParser: c.parser, originalText: n }), { passThrough: !0 }), p = xt().parse(n, g), { ast: D } = p;
          n = p.text;
          let C = D.comments;
          delete D.comments, s.attach(C, D, n, g), g[Symbol.for("comments")] = C || [], g[Symbol.for("tokens")] = D.tokens || [];
          let w = y(D, g);
          return s.ensureAllCommentsPrinted(C), m ? typeof w == "string" ? w.replace(/(?:\r?\n)*$/, "") : t(w) : w;
        }
        l.exports = { printSubtree: e };
      } }), In = O({ "src/main/ast-to-doc.js"(u, l) {
        ne();
        var t = Kr(), { builders: { hardline: a, addAlignmentToDoc: s }, utils: { propagateBreaks: e } } = wt(), { printComments: r } = Qt(), n = Pn();
        function o(m, g) {
          let p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: D } = g;
          D.preprocess && (m = D.preprocess(m, g));
          let C = /* @__PURE__ */ new Map(), w = new t(m), k = A();
          return p > 0 && (k = s([a, k], p, g.tabWidth)), e(k), k;
          function A(x, P) {
            return x === void 0 || x === w ? N(P) : Array.isArray(x) ? w.call(() => N(P), ...x) : w.call(() => N(P), x);
          }
          function N(x) {
            let P = w.getValue(), _ = P && typeof P == "object" && x === void 0;
            if (_ && C.has(P))
              return C.get(P);
            let J = y(w, g, A, x);
            return _ && C.set(P, J), J;
          }
        }
        function c(m, g) {
          let { originalText: p, [Symbol.for("comments")]: D, locStart: C, locEnd: w } = g, k = C(m), A = w(m), N = /* @__PURE__ */ new Set();
          for (let x of D)
            C(x) >= k && w(x) <= A && (x.printed = !0, N.add(x));
          return { doc: p.slice(k, A), printedComments: N };
        }
        function y(m, g, p, D) {
          let C = m.getValue(), { printer: w } = g, k, A;
          if (w.hasPrettierIgnore && w.hasPrettierIgnore(m))
            ({ doc: k, printedComments: A } = c(C, g));
          else {
            if (C)
              try {
                k = n.printSubtree(m, p, g, o);
              } catch (N) {
                if (globalThis.PRETTIER_DEBUG)
                  throw N;
              }
            k || (k = w.print(m, g, p, D));
          }
          return (!w.willPrintOwnComments || !w.willPrintOwnComments(m, g)) && (k = r(m, k, g, A)), k;
        }
        l.exports = o;
      } }), Hu = O({ "src/main/range-util.js"(u, l) {
        ne();
        var t = lr(), a = Qt(), s = (D) => {
          let { parser: C } = D;
          return C === "json" || C === "json5" || C === "json-stringify";
        };
        function e(D, C) {
          let w = [D.node, ...D.parentNodes], k = /* @__PURE__ */ new Set([C.node, ...C.parentNodes]);
          return w.find((A) => y.has(A.type) && k.has(A));
        }
        function r(D) {
          let C = D.length - 1;
          for (; ; ) {
            let w = D[C];
            if (w && (w.type === "Program" || w.type === "File"))
              C--;
            else
              break;
          }
          return D.slice(0, C + 1);
        }
        function n(D, C, w) {
          let { locStart: k, locEnd: A } = w, N = D.node, x = C.node;
          if (N === x)
            return { startNode: N, endNode: x };
          let P = k(D.node);
          for (let J of r(C.parentNodes))
            if (k(J) >= P)
              x = J;
            else
              break;
          let _ = A(C.node);
          for (let J of r(D.parentNodes)) {
            if (A(J) <= _)
              N = J;
            else
              break;
            if (N === x)
              break;
          }
          return { startNode: N, endNode: x };
        }
        function o(D, C, w, k) {
          let A = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], N = arguments.length > 5 ? arguments[5] : void 0, { locStart: x, locEnd: P } = w, _ = x(D), J = P(D);
          if (!(C > J || C < _ || N === "rangeEnd" && C === _ || N === "rangeStart" && C === J)) {
            for (let f of a.getSortedChildNodes(D, w)) {
              let T = o(f, C, w, k, [D, ...A], N);
              if (T)
                return T;
            }
            if (!k || k(D, A[0]))
              return { node: D, parentNodes: A };
          }
        }
        function c(D, C) {
          return C !== "DeclareExportDeclaration" && D !== "TypeParameterDeclaration" && (D === "Directive" || D === "TypeAlias" || D === "TSExportAssignment" || D.startsWith("Declare") || D.startsWith("TSDeclare") || D.endsWith("Statement") || D.endsWith("Declaration"));
        }
        var y = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), m = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(D, C, w) {
          if (!C)
            return !1;
          switch (D.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return c(C.type, w && w.type);
            case "json":
            case "json5":
            case "json-stringify":
              return y.has(C.type);
            case "graphql":
              return m.has(C.kind);
            case "vue":
              return C.tag !== "root";
          }
          return !1;
        }
        function p(D, C, w) {
          let { rangeStart: k, rangeEnd: A, locStart: N, locEnd: x } = C;
          t.ok(A > k);
          let P = D.slice(k, A).search(/\S/), _ = P === -1;
          if (!_)
            for (k += P; A > k && !/\S/.test(D[A - 1]); --A)
              ;
          let J = o(w, k, C, (F, i) => g(C, F, i), [], "rangeStart"), f = _ ? J : o(w, A, C, (F) => g(C, F), [], "rangeEnd");
          if (!J || !f)
            return { rangeStart: 0, rangeEnd: 0 };
          let T, d;
          if (s(C)) {
            let F = e(J, f);
            T = F, d = F;
          } else
            ({ startNode: T, endNode: d } = n(J, f, C));
          return { rangeStart: Math.min(N(T), N(d)), rangeEnd: Math.max(x(T), x(d)) };
        }
        l.exports = { calculateRange: p, findNodeAtOffset: o };
      } }), Yu = O({ "src/main/core.js"(u, l) {
        ne();
        var { diffArrays: t } = Wr(), { printer: { printDocToString: a }, debug: { printDocToDebug: s } } = wt(), { getAlignmentSize: e } = Ut(), { guessEndOfLine: r, convertEndOfLineToChars: n, countEndOfLineChars: o, normalizeEndOfLine: c } = $r(), y = Kt().normalize, m = sr(), g = Qt(), p = xt(), D = In(), C = Hu(), w = "\uFEFF", k = Symbol("cursor");
        function A(d, F, i) {
          let h = F.comments;
          return h && (delete F.comments, g.attach(h, F, d, i)), i[Symbol.for("comments")] = h || [], i[Symbol.for("tokens")] = F.tokens || [], i.originalText = d, h;
        }
        function N(d, F) {
          let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!d || d.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: h, text: E } = p.parse(d, F);
          if (F.cursorOffset >= 0) {
            let I = C.findNodeAtOffset(h, F.cursorOffset, F);
            I && I.node && (F.cursorNode = I.node);
          }
          let b = A(E, h, F), S = D(h, F, i), B = a(S, F);
          if (g.ensureAllCommentsPrinted(b), i > 0) {
            let I = B.formatted.trim();
            B.cursorNodeStart !== void 0 && (B.cursorNodeStart -= B.formatted.indexOf(I)), B.formatted = I + n(F.endOfLine);
          }
          if (F.cursorOffset >= 0) {
            let I, M, U, q, ee;
            if (F.cursorNode && B.cursorNodeText ? (I = F.locStart(F.cursorNode), M = E.slice(I, F.locEnd(F.cursorNode)), U = F.cursorOffset - I, q = B.cursorNodeStart, ee = B.cursorNodeText) : (I = 0, M = E, U = F.cursorOffset, q = 0, ee = B.formatted), M === ee)
              return { formatted: B.formatted, cursorOffset: q + U, comments: b };
            let j = [...M];
            j.splice(U, 0, k);
            let De = [...ee], G = t(j, De), R = q;
            for (let pe of G)
              if (pe.removed) {
                if (pe.value.includes(k))
                  break;
              } else
                R += pe.count;
            return { formatted: B.formatted, cursorOffset: R, comments: b };
          }
          return { formatted: B.formatted, cursorOffset: -1, comments: b };
        }
        function x(d, F) {
          let { ast: i, text: h } = p.parse(d, F), { rangeStart: E, rangeEnd: b } = C.calculateRange(h, F, i), S = h.slice(E, b), B = Math.min(E, h.lastIndexOf(`
`, E) + 1), I = h.slice(B, E).match(/^\s*/)[0], M = e(I, F.tabWidth), U = N(S, Object.assign(Object.assign({}, F), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: F.cursorOffset > E && F.cursorOffset <= b ? F.cursorOffset - E : -1, endOfLine: "lf" }), M), q = U.formatted.trimEnd(), { cursorOffset: ee } = F;
          ee > b ? ee += q.length - S.length : U.cursorOffset >= 0 && (ee = U.cursorOffset + E);
          let j = h.slice(0, E) + q + h.slice(b);
          if (F.endOfLine !== "lf") {
            let De = n(F.endOfLine);
            ee >= 0 && De === `\r
` && (ee += o(j.slice(0, ee), `
`)), j = j.replace(/\n/g, De);
          }
          return { formatted: j, cursorOffset: ee, comments: U.comments };
        }
        function P(d, F, i) {
          return typeof F != "number" || Number.isNaN(F) || F < 0 || F > d.length ? i : F;
        }
        function _(d, F) {
          let { cursorOffset: i, rangeStart: h, rangeEnd: E } = F;
          return i = P(d, i, -1), h = P(d, h, 0), E = P(d, E, d.length), Object.assign(Object.assign({}, F), {}, { cursorOffset: i, rangeStart: h, rangeEnd: E });
        }
        function J(d, F) {
          let { cursorOffset: i, rangeStart: h, rangeEnd: E, endOfLine: b } = _(d, F), S = d.charAt(0) === w;
          if (S && (d = d.slice(1), i--, h--, E--), b === "auto" && (b = r(d)), d.includes("\r")) {
            let B = (I) => o(d.slice(0, Math.max(I, 0)), `\r
`);
            i -= B(i), h -= B(h), E -= B(E), d = c(d);
          }
          return { hasBOM: S, text: d, options: _(d, Object.assign(Object.assign({}, F), {}, { cursorOffset: i, rangeStart: h, rangeEnd: E, endOfLine: b })) };
        }
        function f(d, F) {
          let i = p.resolveParser(F);
          return !i.hasPragma || i.hasPragma(d);
        }
        function T(d, F) {
          let { hasBOM: i, text: h, options: E } = J(d, y(F));
          if (E.rangeStart >= E.rangeEnd && h !== "" || E.requirePragma && !f(h, E))
            return { formatted: d, cursorOffset: F.cursorOffset, comments: [] };
          let b;
          return E.rangeStart > 0 || E.rangeEnd < h.length ? b = x(h, E) : (!E.requirePragma && E.insertPragma && E.printer.insertPragma && !f(h, E) && (h = E.printer.insertPragma(h)), b = N(h, E)), i && (b.formatted = w + b.formatted, b.cursorOffset >= 0 && b.cursorOffset++), b;
        }
        l.exports = { formatWithCursor: T, parse(d, F, i) {
          let { text: h, options: E } = J(d, y(F)), b = p.parse(h, E);
          return i && (b.ast = m(b.ast, E)), b;
        }, formatAST(d, F) {
          F = y(F);
          let i = D(d, F);
          return a(i, F);
        }, formatDoc(d, F) {
          return T(s(d), Object.assign(Object.assign({}, F), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(d, F) {
          F = y(F);
          let { ast: i, text: h } = p.parse(d, F);
          return A(h, i, F), D(i, F);
        }, printDocToString(d, F) {
          return a(d, y(F));
        } };
      } }), Ku = O({ "src/common/util-shared.js"(u, l) {
        ne();
        var { getMaxContinuousCount: t, getStringWidth: a, getAlignmentSize: s, getIndentSize: e, skip: r, skipWhitespace: n, skipSpaces: o, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: m, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: C, hasSpaces: w, isNextLineEmpty: k, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: P, addLeadingComment: _, addDanglingComment: J, addTrailingComment: f } = Ut();
        l.exports = { getMaxContinuousCount: t, getStringWidth: a, getAlignmentSize: s, getIndentSize: e, skip: r, skipWhitespace: n, skipSpaces: o, skipNewline: c, skipToLineEnd: y, skipEverythingButNewLine: m, skipInlineComment: g, skipTrailingComment: p, hasNewline: D, hasNewlineInRange: C, hasSpaces: w, isNextLineEmpty: k, isNextLineEmptyAfterIndex: A, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: P, addLeadingComment: _, addDanglingComment: J, addTrailingComment: f };
      } }), vr = O({ "src/utils/create-language.js"(u, l) {
        ne(), l.exports = function(t, a) {
          let { languageId: s } = t, e = re(t, Y);
          return Object.assign(Object.assign({ linguistLanguageId: s }, e), a(t));
        };
      } }), Qr = O({ "node_modules/esutils/lib/ast.js"(u, l) {
        ne(), function() {
          function t(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return !0;
            }
            return !1;
          }
          function a(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return !0;
            }
            return !1;
          }
          function s(o) {
            if (o == null)
              return !1;
            switch (o.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return !0;
            }
            return !1;
          }
          function e(o) {
            return s(o) || o != null && o.type === "FunctionDeclaration";
          }
          function r(o) {
            switch (o.type) {
              case "IfStatement":
                return o.alternate != null ? o.alternate : o.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return o.body;
            }
            return null;
          }
          function n(o) {
            var c;
            if (o.type !== "IfStatement" || o.alternate == null)
              return !1;
            c = o.consequent;
            do {
              if (c.type === "IfStatement" && c.alternate == null)
                return !0;
              c = r(c);
            } while (c);
            return !1;
          }
          l.exports = { isExpression: t, isStatement: s, isIterationStatement: a, isSourceElement: e, isProblematicIfStatement: n, trailingStatement: r };
        }();
      } }), cn = O({ "node_modules/esutils/lib/code.js"(u, l) {
        ne(), function() {
          var t, a, s, e, r, n;
          a = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function o(A) {
            return 48 <= A && A <= 57;
          }
          function c(A) {
            return 48 <= A && A <= 57 || 97 <= A && A <= 102 || 65 <= A && A <= 70;
          }
          function y(A) {
            return A >= 48 && A <= 55;
          }
          s = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function m(A) {
            return A === 32 || A === 9 || A === 11 || A === 12 || A === 160 || A >= 5760 && s.indexOf(A) >= 0;
          }
          function g(A) {
            return A === 10 || A === 13 || A === 8232 || A === 8233;
          }
          function p(A) {
            if (A <= 65535)
              return String.fromCharCode(A);
            var N = String.fromCharCode(Math.floor((A - 65536) / 1024) + 55296), x = String.fromCharCode((A - 65536) % 1024 + 56320);
            return N + x;
          }
          for (e = new Array(128), n = 0; n < 128; ++n)
            e[n] = n >= 97 && n <= 122 || n >= 65 && n <= 90 || n === 36 || n === 95;
          for (r = new Array(128), n = 0; n < 128; ++n)
            r[n] = n >= 97 && n <= 122 || n >= 65 && n <= 90 || n >= 48 && n <= 57 || n === 36 || n === 95;
          function D(A) {
            return A < 128 ? e[A] : a.NonAsciiIdentifierStart.test(p(A));
          }
          function C(A) {
            return A < 128 ? r[A] : a.NonAsciiIdentifierPart.test(p(A));
          }
          function w(A) {
            return A < 128 ? e[A] : t.NonAsciiIdentifierStart.test(p(A));
          }
          function k(A) {
            return A < 128 ? r[A] : t.NonAsciiIdentifierPart.test(p(A));
          }
          l.exports = { isDecimalDigit: o, isHexDigit: c, isOctalDigit: y, isWhiteSpace: m, isLineTerminator: g, isIdentifierStartES5: D, isIdentifierPartES5: C, isIdentifierStartES6: w, isIdentifierPartES6: k };
        }();
      } }), ra = O({ "node_modules/esutils/lib/keyword.js"(u, l) {
        ne(), function() {
          var t = cn();
          function a(D) {
            switch (D) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return !0;
              default:
                return !1;
            }
          }
          function s(D, C) {
            return !C && D === "yield" ? !1 : e(D, C);
          }
          function e(D, C) {
            if (C && a(D))
              return !0;
            switch (D.length) {
              case 2:
                return D === "if" || D === "in" || D === "do";
              case 3:
                return D === "var" || D === "for" || D === "new" || D === "try";
              case 4:
                return D === "this" || D === "else" || D === "case" || D === "void" || D === "with" || D === "enum";
              case 5:
                return D === "while" || D === "break" || D === "catch" || D === "throw" || D === "const" || D === "yield" || D === "class" || D === "super";
              case 6:
                return D === "return" || D === "typeof" || D === "delete" || D === "switch" || D === "export" || D === "import";
              case 7:
                return D === "default" || D === "finally" || D === "extends";
              case 8:
                return D === "function" || D === "continue" || D === "debugger";
              case 10:
                return D === "instanceof";
              default:
                return !1;
            }
          }
          function r(D, C) {
            return D === "null" || D === "true" || D === "false" || s(D, C);
          }
          function n(D, C) {
            return D === "null" || D === "true" || D === "false" || e(D, C);
          }
          function o(D) {
            return D === "eval" || D === "arguments";
          }
          function c(D) {
            var C, w, k;
            if (D.length === 0 || (k = D.charCodeAt(0), !t.isIdentifierStartES5(k)))
              return !1;
            for (C = 1, w = D.length; C < w; ++C)
              if (k = D.charCodeAt(C), !t.isIdentifierPartES5(k))
                return !1;
            return !0;
          }
          function y(D, C) {
            return (D - 55296) * 1024 + (C - 56320) + 65536;
          }
          function m(D) {
            var C, w, k, A, N;
            if (D.length === 0)
              return !1;
            for (N = t.isIdentifierStartES6, C = 0, w = D.length; C < w; ++C) {
              if (k = D.charCodeAt(C), 55296 <= k && k <= 56319) {
                if (++C, C >= w || (A = D.charCodeAt(C), !(56320 <= A && A <= 57343)))
                  return !1;
                k = y(k, A);
              }
              if (!N(k))
                return !1;
              N = t.isIdentifierPartES6;
            }
            return !0;
          }
          function g(D, C) {
            return c(D) && !r(D, C);
          }
          function p(D, C) {
            return m(D) && !n(D, C);
          }
          l.exports = { isKeywordES5: s, isKeywordES6: e, isReservedWordES5: r, isReservedWordES6: n, isRestrictedWord: o, isIdentifierNameES5: c, isIdentifierNameES6: m, isIdentifierES5: g, isIdentifierES6: p };
        }();
      } }), na = O({ "node_modules/esutils/lib/utils.js"(u) {
        ne(), function() {
          u.ast = Qr(), u.code = cn(), u.keyword = ra();
        }();
      } }), vn = O({ "src/language-js/utils/is-block-comment.js"(u, l) {
        ne();
        var t = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), a = (s) => t.has(s?.type);
        l.exports = a;
      } }), ua = O({ "src/language-js/utils/is-node-matches.js"(u, l) {
        ne();
        function t(s, e) {
          let r = e.split(".");
          for (let n = r.length - 1; n >= 0; n--) {
            let o = r[n];
            if (n === 0)
              return s.type === "Identifier" && s.name === o;
            if (s.type !== "MemberExpression" || s.optional || s.computed || s.property.type !== "Identifier" || s.property.name !== o)
              return !1;
            s = s.object;
          }
        }
        function a(s, e) {
          return e.some((r) => t(s, r));
        }
        l.exports = a;
      } }), ur = O({ "src/language-js/utils/index.js"(u, l) {
        ne();
        var t = na().keyword.isIdentifierNameES5, { getLast: a, hasNewline: s, skipWhitespace: e, isNonEmptyArray: r, isNextLineEmptyAfterIndex: n, getStringWidth: o } = Ut(), { locStart: c, locEnd: y, hasSameLocStart: m } = or(), g = vn(), p = ua(), D = "(?:(?=.)\\s)", C = new RegExp(`^${D}*:`), w = new RegExp(`^${D}*::`);
        function k($) {
          var Re, vt;
          return ((Re = $.extra) === null || Re === void 0 ? void 0 : Re.parenthesized) && g((vt = $.trailingComments) === null || vt === void 0 ? void 0 : vt[0]) && C.test($.trailingComments[0].value);
        }
        function A($) {
          let Re = $?.[0];
          return g(Re) && w.test(Re.value);
        }
        function N($, Re) {
          if (!$ || typeof $ != "object")
            return !1;
          if (Array.isArray($))
            return $.some((zt) => N(zt, Re));
          let vt = Re($);
          return typeof vt == "boolean" ? vt : Object.values($).some((zt) => N(zt, Re));
        }
        function x($) {
          return $.type === "AssignmentExpression" || $.type === "BinaryExpression" || $.type === "LogicalExpression" || $.type === "NGPipeExpression" || $.type === "ConditionalExpression" || Be($) || Ne($) || $.type === "SequenceExpression" || $.type === "TaggedTemplateExpression" || $.type === "BindExpression" || $.type === "UpdateExpression" && !$.prefix || Vr($) || $.type === "TSNonNullExpression";
        }
        function P($) {
          var Re, vt, zt, Ht, Ir, cr;
          return $.expressions ? $.expressions[0] : (Re = (vt = (zt = (Ht = (Ir = (cr = $.left) !== null && cr !== void 0 ? cr : $.test) !== null && Ir !== void 0 ? Ir : $.callee) !== null && Ht !== void 0 ? Ht : $.object) !== null && zt !== void 0 ? zt : $.tag) !== null && vt !== void 0 ? vt : $.argument) !== null && Re !== void 0 ? Re : $.expression;
        }
        function _($, Re) {
          if (Re.expressions)
            return ["expressions", 0];
          if (Re.left)
            return ["left"];
          if (Re.test)
            return ["test"];
          if (Re.object)
            return ["object"];
          if (Re.callee)
            return ["callee"];
          if (Re.tag)
            return ["tag"];
          if (Re.argument)
            return ["argument"];
          if (Re.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function J($) {
          return $ = new Set($), (Re) => $.has(Re?.type);
        }
        var f = J(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), T = J(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function d($) {
          let Re = $.getParentNode();
          return $.getName() === "declaration" && T(Re) ? Re : null;
        }
        var F = J(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function i($) {
          return $.type === "NumericLiteral" || $.type === "Literal" && typeof $.value == "number";
        }
        function h($) {
          return $.type === "UnaryExpression" && ($.operator === "+" || $.operator === "-") && i($.argument);
        }
        function E($) {
          return $.type === "StringLiteral" || $.type === "Literal" && typeof $.value == "string";
        }
        var b = J(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), S = J(["FunctionExpression", "ArrowFunctionExpression"]);
        function B($) {
          return $.type === "FunctionExpression" || $.type === "ArrowFunctionExpression" && $.body.type === "BlockStatement";
        }
        function I($) {
          return Be($) && $.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes($.callee.name);
        }
        var M = J(["JSXElement", "JSXFragment"]);
        function U($, Re) {
          if ($.parentParser !== "markdown" && $.parentParser !== "mdx")
            return !1;
          let vt = Re.getNode();
          if (!vt.expression || !M(vt.expression))
            return !1;
          let zt = Re.getParentNode();
          return zt.type === "Program" && zt.body.length === 1;
        }
        function q($) {
          return $.kind === "get" || $.kind === "set";
        }
        function ee($) {
          return q($) || m($, $.value);
        }
        function j($) {
          return ($.type === "ObjectTypeProperty" || $.type === "ObjectTypeInternalSlot") && $.value.type === "FunctionTypeAnnotation" && !$.static && !ee($);
        }
        function De($) {
          return ($.type === "TypeAnnotation" || $.type === "TSTypeAnnotation") && $.typeAnnotation.type === "FunctionTypeAnnotation" && !$.static && !m($, $.typeAnnotation);
        }
        var G = J(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function R($) {
          return Ne($) || $.type === "BindExpression" && !!$.object;
        }
        var pe = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function ve($) {
          return $ ? !!(($.type === "GenericTypeAnnotation" || $.type === "TSTypeReference") && !$.typeParameters || pe.has($.type)) : !1;
        }
        function fe($) {
          let Re = /^(?:before|after)(?:Each|All)$/;
          return $.callee.type === "Identifier" && Re.test($.callee.name) && $.arguments.length === 1;
        }
        var Pe = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function X($) {
          return p($, Pe);
        }
        function ie($, Re) {
          if ($.type !== "CallExpression")
            return !1;
          if ($.arguments.length === 1) {
            if (I($) && Re && ie(Re))
              return S($.arguments[0]);
            if (fe($))
              return I($.arguments[0]);
          } else if (($.arguments.length === 2 || $.arguments.length === 3) && ($.arguments[0].type === "TemplateLiteral" || E($.arguments[0])) && X($.callee))
            return $.arguments[2] && !i($.arguments[2]) ? !1 : ($.arguments.length === 2 ? S($.arguments[1]) : B($.arguments[1]) && Ye($.arguments[1]).length <= 1) || I($.arguments[1]);
          return !1;
        }
        var Be = J(["CallExpression", "OptionalCallExpression"]), Ne = J(["MemberExpression", "OptionalMemberExpression"]);
        function it($) {
          let Re = "expressions";
          $.type === "TSTemplateLiteralType" && (Re = "types");
          let vt = $[Re];
          return vt.length === 0 ? !1 : vt.every((zt) => {
            if (Bt(zt))
              return !1;
            if (zt.type === "Identifier" || zt.type === "ThisExpression")
              return !0;
            if (Ne(zt)) {
              let Ht = zt;
              for (; Ne(Ht); )
                if (Ht.property.type !== "Identifier" && Ht.property.type !== "Literal" && Ht.property.type !== "StringLiteral" && Ht.property.type !== "NumericLiteral" || (Ht = Ht.object, Bt(Ht)))
                  return !1;
              return Ht.type === "Identifier" || Ht.type === "ThisExpression";
            }
            return !1;
          });
        }
        function ae($, Re) {
          return $ === "+" || $ === "-" ? $ + Re : Re;
        }
        function K($, Re) {
          let vt = c(Re), zt = e($, y(Re));
          return zt !== !1 && $.slice(vt, vt + 2) === "/*" && $.slice(zt, zt + 2) === "*/";
        }
        function ge($, Re) {
          return M(Re) ? jt(Re) : Bt(Re, ft.Leading, (vt) => s($, y(vt)));
        }
        function Ee($, Re) {
          return Re.parser !== "json" && E($.key) && Se($.key).slice(1, -1) === $.key.value && (t($.key.value) && !(Re.parser === "babel-ts" && $.type === "ClassProperty" || Re.parser === "typescript" && $.type === "PropertyDefinition") || Oe($.key.value) && String(Number($.key.value)) === $.key.value && (Re.parser === "babel" || Re.parser === "acorn" || Re.parser === "espree" || Re.parser === "meriyah" || Re.parser === "__babel_estree"));
        }
        function Oe($) {
          return /^(?:\d+|\d+\.\d+)$/.test($);
        }
        function Xe($, Re) {
          let vt = /^[fx]?(?:describe|it|test)$/;
          return Re.type === "TaggedTemplateExpression" && Re.quasi === $ && Re.tag.type === "MemberExpression" && Re.tag.property.type === "Identifier" && Re.tag.property.name === "each" && (Re.tag.object.type === "Identifier" && vt.test(Re.tag.object.name) || Re.tag.object.type === "MemberExpression" && Re.tag.object.property.type === "Identifier" && (Re.tag.object.property.name === "only" || Re.tag.object.property.name === "skip") && Re.tag.object.object.type === "Identifier" && vt.test(Re.tag.object.object.name));
        }
        function He($) {
          return $.quasis.some((Re) => Re.value.raw.includes(`
`));
        }
        function Ct($, Re) {
          return ($.type === "TemplateLiteral" && He($) || $.type === "TaggedTemplateExpression" && He($.quasi)) && !s(Re, c($), { backwards: !0 });
        }
        function Rt($) {
          if (!Bt($))
            return !1;
          let Re = a(xe($, ft.Dangling));
          return Re && !g(Re);
        }
        function It($) {
          if ($.length <= 1)
            return !1;
          let Re = 0;
          for (let vt of $)
            if (S(vt)) {
              if (Re += 1, Re > 1)
                return !0;
            } else if (Be(vt)) {
              for (let zt of vt.arguments)
                if (S(zt))
                  return !0;
            }
          return !1;
        }
        function Et($) {
          let Re = $.getValue(), vt = $.getParentNode();
          return Be(Re) && Be(vt) && vt.callee === Re && Re.arguments.length > vt.arguments.length && vt.arguments.length > 0;
        }
        function bt($, Re) {
          if (Re >= 2)
            return !1;
          let vt = (cr) => bt(cr, Re + 1), zt = $.type === "Literal" && "regex" in $ && $.regex.pattern || $.type === "RegExpLiteral" && $.pattern;
          if (zt && o(zt) > 5)
            return !1;
          if ($.type === "Literal" || $.type === "BigIntLiteral" || $.type === "DecimalLiteral" || $.type === "BooleanLiteral" || $.type === "NullLiteral" || $.type === "NumericLiteral" || $.type === "RegExpLiteral" || $.type === "StringLiteral" || $.type === "Identifier" || $.type === "ThisExpression" || $.type === "Super" || $.type === "PrivateName" || $.type === "PrivateIdentifier" || $.type === "ArgumentPlaceholder" || $.type === "Import")
            return !0;
          if ($.type === "TemplateLiteral")
            return $.quasis.every((cr) => !cr.value.raw.includes(`
`)) && $.expressions.every(vt);
          if ($.type === "ObjectExpression")
            return $.properties.every((cr) => !cr.computed && (cr.shorthand || cr.value && vt(cr.value)));
          if ($.type === "ArrayExpression")
            return $.elements.every((cr) => cr === null || vt(cr));
          if (Sr($))
            return ($.type === "ImportExpression" || bt($.callee, Re)) && ar($).every(vt);
          if (Ne($))
            return bt($.object, Re) && bt($.property, Re);
          let Ht = { "!": !0, "-": !0, "+": !0, "~": !0 };
          if ($.type === "UnaryExpression" && Ht[$.operator])
            return bt($.argument, Re);
          let Ir = { "++": !0, "--": !0 };
          return $.type === "UpdateExpression" && Ir[$.operator] ? bt($.argument, Re) : $.type === "TSNonNullExpression" ? bt($.expression, Re) : !1;
        }
        function Se($) {
          var Re, vt;
          return (Re = (vt = $.extra) === null || vt === void 0 ? void 0 : vt.raw) !== null && Re !== void 0 ? Re : $.raw;
        }
        function H($) {
          return $;
        }
        function _e($) {
          return $.filepath && /\.tsx$/i.test($.filepath);
        }
        function se($) {
          let Re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return $.trailingComma === "es5" && Re === "es5" || $.trailingComma === "all" && (Re === "all" || Re === "es5");
        }
        function Te($, Re) {
          switch ($.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression":
              return Te($.left, Re);
            case "MemberExpression":
            case "OptionalMemberExpression":
              return Te($.object, Re);
            case "TaggedTemplateExpression":
              return $.tag.type === "FunctionExpression" ? !1 : Te($.tag, Re);
            case "CallExpression":
            case "OptionalCallExpression":
              return $.callee.type === "FunctionExpression" ? !1 : Te($.callee, Re);
            case "ConditionalExpression":
              return Te($.test, Re);
            case "UpdateExpression":
              return !$.prefix && Te($.argument, Re);
            case "BindExpression":
              return $.object && Te($.object, Re);
            case "SequenceExpression":
              return Te($.expressions[0], Re);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return Te($.expression, Re);
            default:
              return Re($);
          }
        }
        var pt = { "==": !0, "!=": !0, "===": !0, "!==": !0 }, ut = { "*": !0, "/": !0, "%": !0 }, je = { ">>": !0, ">>>": !0, "<<": !0 };
        function v($, Re) {
          return !($e(Re) !== $e($) || $ === "**" || pt[$] && pt[Re] || Re === "%" && ut[$] || $ === "%" && ut[Re] || Re !== $ && ut[Re] && ut[$] || je[$] && je[Re]);
        }
        var oe = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap(($, Re) => $.map((vt) => [vt, Re])));
        function $e($) {
          return oe.get($);
        }
        function Ke($) {
          return !!je[$] || $ === "|" || $ === "^" || $ === "&";
        }
        function tt($) {
          var Re;
          if ($.rest)
            return !0;
          let vt = Ye($);
          return ((Re = a(vt)) === null || Re === void 0 ? void 0 : Re.type) === "RestElement";
        }
        var ht = /* @__PURE__ */ new WeakMap();
        function Ye($) {
          if (ht.has($))
            return ht.get($);
          let Re = [];
          return $.this && Re.push($.this), Array.isArray($.parameters) ? Re.push(...$.parameters) : Array.isArray($.params) && Re.push(...$.params), $.rest && Re.push($.rest), ht.set($, Re), Re;
        }
        function pr($, Re) {
          let vt = $.getValue(), zt = 0, Ht = (Ir) => Re(Ir, zt++);
          vt.this && $.call(Ht, "this"), Array.isArray(vt.parameters) ? $.each(Ht, "parameters") : Array.isArray(vt.params) && $.each(Ht, "params"), vt.rest && $.call(Ht, "rest");
        }
        var dt = /* @__PURE__ */ new WeakMap();
        function ar($) {
          if (dt.has($))
            return dt.get($);
          let Re = $.arguments;
          return $.type === "ImportExpression" && (Re = [$.source], $.attributes && Re.push($.attributes)), dt.set($, Re), Re;
        }
        function Dt($, Re) {
          let vt = $.getValue();
          vt.type === "ImportExpression" ? ($.call((zt) => Re(zt, 0), "source"), vt.attributes && $.call((zt) => Re(zt, 1), "attributes")) : $.each(Re, "arguments");
        }
        function Tt($) {
          return $.value.trim() === "prettier-ignore" && !$.unignore;
        }
        function jt($) {
          return $ && ($.prettierIgnore || Bt($, ft.PrettierIgnore));
        }
        function tr($) {
          let Re = $.getValue();
          return jt(Re);
        }
        var ft = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Pt = ($, Re) => {
          if (typeof $ == "function" && (Re = $, $ = 0), $ || Re)
            return (vt, zt, Ht) => !($ & ft.Leading && !vt.leading || $ & ft.Trailing && !vt.trailing || $ & ft.Dangling && (vt.leading || vt.trailing) || $ & ft.Block && !g(vt) || $ & ft.Line && !f(vt) || $ & ft.First && zt !== 0 || $ & ft.Last && zt !== Ht.length - 1 || $ & ft.PrettierIgnore && !Tt(vt) || Re && !Re(vt));
        };
        function Bt($, Re, vt) {
          if (!r($?.comments))
            return !1;
          let zt = Pt(Re, vt);
          return zt ? $.comments.some(zt) : !0;
        }
        function xe($, Re, vt) {
          if (!Array.isArray($?.comments))
            return [];
          let zt = Pt(Re, vt);
          return zt ? $.comments.filter(zt) : $.comments;
        }
        var qr = ($, Re) => {
          let { originalText: vt } = Re;
          return n(vt, y($));
        };
        function Sr($) {
          return Be($) || $.type === "NewExpression" || $.type === "ImportExpression";
        }
        function Xt($) {
          return $ && ($.type === "ObjectProperty" || $.type === "Property" && !$.method && $.kind === "init");
        }
        function Wt($) {
          return !!$.__isUsingHackPipeline;
        }
        var nr = Symbol("ifWithoutBlockAndSameLineComment");
        function Vr($) {
          return $.type === "TSAsExpression" || $.type === "TSSatisfiesExpression";
        }
        l.exports = { getFunctionParameters: Ye, iterateFunctionParametersPath: pr, getCallArguments: ar, iterateCallArgumentsPath: Dt, hasRestParameter: tt, getLeftSide: P, getLeftSidePathName: _, getParentExportDeclaration: d, getTypeScriptMappedTypeModifier: ae, hasFlowAnnotationComment: A, hasFlowShorthandAnnotationComment: k, hasLeadingOwnLineComment: ge, hasNakedLeftSide: x, hasNode: N, hasIgnoreComment: tr, hasNodeIgnoreComment: jt, identity: H, isBinaryish: G, isCallLikeExpression: Sr, isEnabledHackPipeline: Wt, isLineComment: f, isPrettierIgnoreComment: Tt, isCallExpression: Be, isMemberExpression: Ne, isExportDeclaration: T, isFlowAnnotationComment: K, isFunctionCompositionArgs: It, isFunctionNotation: ee, isFunctionOrArrowExpression: S, isGetterOrSetter: q, isJestEachTemplateLiteral: Xe, isJsxNode: M, isLiteral: F, isLongCurriedCallExpression: Et, isSimpleCallArgument: bt, isMemberish: R, isNumericLiteral: i, isSignedNumericLiteral: h, isObjectProperty: Xt, isObjectType: b, isObjectTypePropertyAFunction: j, isSimpleType: ve, isSimpleNumber: Oe, isSimpleTemplateLiteral: it, isStringLiteral: E, isStringPropSafeToUnquote: Ee, isTemplateOnItsOwnLine: Ct, isTestCall: ie, isTheOnlyJsxElementInMarkdown: U, isTSXFile: _e, isTypeAnnotationAFunction: De, isNextLineEmpty: qr, needsHardlineAfterDanglingComment: Rt, rawText: Se, shouldPrintComma: se, isBitwiseOperator: Ke, shouldFlatten: v, startsWithNoLookaheadToken: Te, getPrecedence: $e, hasComment: Bt, getComments: xe, CommentCheckFlags: ft, markerForIfWithoutBlockAndSameLineComment: nr, isTSTypeExpression: Vr };
      } }), jn = O({ "src/language-js/print/template-literal.js"(u, l) {
        ne();
        var t = mr(), { getStringWidth: a, getIndentSize: s } = Ut(), { builders: { join: e, hardline: r, softline: n, group: o, indent: c, align: y, lineSuffixBoundary: m, addAlignmentToDoc: g }, printer: { printDocToString: p }, utils: { mapDoc: D } } = wt(), { isBinaryish: C, isJestEachTemplateLiteral: w, isSimpleTemplateLiteral: k, hasComment: A, isMemberExpression: N, isTSTypeExpression: x } = ur();
        function P(F, i, h) {
          let E = F.getValue();
          if (E.type === "TemplateLiteral" && w(E, F.getParentNode())) {
            let M = _(F, h, i);
            if (M)
              return M;
          }
          let b = "expressions";
          E.type === "TSTemplateLiteralType" && (b = "types");
          let S = [], B = F.map(i, b), I = k(E);
          return I && (B = B.map((M) => p(M, Object.assign(Object.assign({}, h), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), S.push(m, "`"), F.each((M) => {
            let U = M.getName();
            if (S.push(i()), U < B.length) {
              let { tabWidth: q } = h, ee = M.getValue(), j = s(ee.value.raw, q), De = B[U];
              if (!I) {
                let R = E[b][U];
                (A(R) || N(R) || R.type === "ConditionalExpression" || R.type === "SequenceExpression" || x(R) || C(R)) && (De = [c([n, De]), n]);
              }
              let G = j === 0 && ee.value.raw.endsWith(`
`) ? y(Number.NEGATIVE_INFINITY, De) : g(De, j, q);
              S.push(o(["${", G, m, "}"]));
            }
          }, "quasis"), S.push("`"), S;
        }
        function _(F, i, h) {
          let E = F.getNode(), b = E.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (b.length > 1 || b.some((S) => S.length > 0)) {
            i.__inJestEach = !0;
            let S = F.map(h, "expressions");
            i.__inJestEach = !1;
            let B = [], I = S.map((j) => "${" + p(j, Object.assign(Object.assign({}, i), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), M = [{ hasLineBreak: !1, cells: [] }];
            for (let j = 1; j < E.quasis.length; j++) {
              let De = t(M), G = I[j - 1];
              De.cells.push(G), G.includes(`
`) && (De.hasLineBreak = !0), E.quasis[j].value.raw.includes(`
`) && M.push({ hasLineBreak: !1, cells: [] });
            }
            let U = Math.max(b.length, ...M.map((j) => j.cells.length)), q = Array.from({ length: U }).fill(0), ee = [{ cells: b }, ...M.filter((j) => j.cells.length > 0)];
            for (let { cells: j } of ee.filter((De) => !De.hasLineBreak))
              for (let [De, G] of j.entries())
                q[De] = Math.max(q[De], a(G));
            return B.push(m, "`", c([r, e(r, ee.map((j) => e(" | ", j.cells.map((De, G) => j.hasLineBreak ? De : De + " ".repeat(q[G] - a(De))))))]), r, "`"), B;
          }
        }
        function J(F, i) {
          let h = F.getValue(), E = i();
          return A(h) && (E = o([c([n, E]), n])), ["${", E, m, "}"];
        }
        function f(F, i) {
          return F.map((h) => J(h, i), "expressions");
        }
        function T(F, i) {
          return D(F, (h) => typeof h == "string" ? i ? h.replace(/(\\*)`/g, "$1$1\\`") : d(h) : h);
        }
        function d(F) {
          return F.replace(/([\\`]|\${)/g, "\\$1");
        }
        l.exports = { printTemplateLiteral: P, printTemplateExpressions: f, escapeTemplateCharacters: T, uncookTemplateElementValue: d };
      } }), ia = O({ "src/language-js/embed/markdown.js"(u, l) {
        ne();
        var { builders: { indent: t, softline: a, literalline: s, dedentToRoot: e } } = wt(), { escapeTemplateCharacters: r } = jn();
        function n(c, y, m) {
          let g = c.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (w, k) => "\\".repeat(k.length / 2) + "`"), p = o(g), D = p !== "";
          D && (g = g.replace(new RegExp(`^${p}`, "gm"), ""));
          let C = r(m(g, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
          return ["`", D ? t([a, C]) : [s, e(C)], a, "`"];
        }
        function o(c) {
          let y = c.match(/^([^\S\n]*)\S/m);
          return y === null ? "" : y[1];
        }
        l.exports = n;
      } }), sa = O({ "src/language-js/embed/css.js"(u, l) {
        ne();
        var { isNonEmptyArray: t } = Ut(), { builders: { indent: a, hardline: s, softline: e }, utils: { mapDoc: r, replaceEndOfLine: n, cleanDoc: o } } = wt(), { printTemplateExpressions: c } = jn();
        function y(p, D, C) {
          let w = p.getValue(), k = w.quasis.map((_) => _.value.raw), A = 0, N = k.reduce((_, J, f) => f === 0 ? J : _ + "@prettier-placeholder-" + A++ + "-id" + J, ""), x = C(N, { parser: "scss" }, { stripTrailingHardline: !0 }), P = c(p, D);
          return m(x, w, P);
        }
        function m(p, D, C) {
          if (D.quasis.length === 1 && !D.quasis[0].value.raw.trim())
            return "``";
          let w = g(p, C);
          if (!w)
            throw new Error("Couldn't insert all the expressions");
          return ["`", a([s, w]), e, "`"];
        }
        function g(p, D) {
          if (!t(D))
            return p;
          let C = 0, w = r(o(p), (k) => typeof k != "string" || !k.includes("@prettier-placeholder") ? k : k.split(/@prettier-placeholder-(\d+)-id/).map((A, N) => N % 2 === 0 ? n(A) : (C++, D[A])));
          return D.length === C ? w : null;
        }
        l.exports = y;
      } }), aa = O({ "src/language-js/embed/graphql.js"(u, l) {
        ne();
        var { builders: { indent: t, join: a, hardline: s } } = wt(), { escapeTemplateCharacters: e, printTemplateExpressions: r } = jn();
        function n(c, y, m) {
          let g = c.getValue(), p = g.quasis.length;
          if (p === 1 && g.quasis[0].value.raw.trim() === "")
            return "``";
          let D = r(c, y), C = [];
          for (let w = 0; w < p; w++) {
            let k = g.quasis[w], A = w === 0, N = w === p - 1, x = k.value.cooked, P = x.split(`
`), _ = P.length, J = D[w], f = _ > 2 && P[0].trim() === "" && P[1].trim() === "", T = _ > 2 && P[_ - 1].trim() === "" && P[_ - 2].trim() === "", d = P.every((i) => /^\s*(?:#[^\n\r]*)?$/.test(i));
            if (!N && /#[^\n\r]*$/.test(P[_ - 1]))
              return null;
            let F = null;
            d ? F = o(P) : F = m(x, { parser: "graphql" }, { stripTrailingHardline: !0 }), F ? (F = e(F, !1), !A && f && C.push(""), C.push(F), !N && T && C.push("")) : !A && !N && f && C.push(""), J && C.push(J);
          }
          return ["`", t([s, a(s, C)]), s, "`"];
        }
        function o(c) {
          let y = [], m = !1, g = c.map((p) => p.trim());
          for (let [p, D] of g.entries())
            D !== "" && (g[p - 1] === "" && m ? y.push([s, D]) : y.push(D), m = !0);
          return y.length === 0 ? null : a(s, y);
        }
        l.exports = n;
      } }), oa = O({ "src/language-js/embed/html.js"(u, l) {
        ne();
        var { builders: { indent: t, line: a, hardline: s, group: e }, utils: { mapDoc: r } } = wt(), { printTemplateExpressions: n, uncookTemplateElementValue: o } = jn(), c = 0;
        function y(m, g, p, D, C) {
          let { parser: w } = C, k = m.getValue(), A = c;
          c = c + 1 >>> 0;
          let N = (h) => `PRETTIER_HTML_PLACEHOLDER_${h}_${A}_IN_JS`, x = k.quasis.map((h, E, b) => E === b.length - 1 ? h.value.cooked : h.value.cooked + N(E)).join(""), P = n(m, g);
          if (P.length === 0 && x.trim().length === 0)
            return "``";
          let _ = new RegExp(N("(\\d+)"), "g"), J = 0, f = p(x, { parser: w, __onHtmlRoot(h) {
            J = h.children.length;
          } }, { stripTrailingHardline: !0 }), T = r(f, (h) => {
            if (typeof h != "string")
              return h;
            let E = [], b = h.split(_);
            for (let S = 0; S < b.length; S++) {
              let B = b[S];
              if (S % 2 === 0) {
                B && (B = o(B), D.__embeddedInHtml && (B = B.replace(/<\/(script)\b/gi, "<\\/$1")), E.push(B));
                continue;
              }
              let I = Number(B);
              E.push(P[I]);
            }
            return E;
          }), d = /^\s/.test(x) ? " " : "", F = /\s$/.test(x) ? " " : "", i = D.htmlWhitespaceSensitivity === "ignore" ? s : d && F ? a : null;
          return e(i ? ["`", t([i, e(T)]), i, "`"] : ["`", d, J > 1 ? t(e(T)) : e(T), F, "`"]);
        }
        l.exports = y;
      } }), la = O({ "src/language-js/embed.js"(u, l) {
        ne();
        var { hasComment: t, CommentCheckFlags: a, isObjectProperty: s } = ur(), e = ia(), r = sa(), n = aa(), o = oa();
        function c(f) {
          if (g(f) || w(f) || k(f) || p(f))
            return "css";
          if (x(f))
            return "graphql";
          if (_(f))
            return "html";
          if (D(f))
            return "angular";
          if (m(f))
            return "markdown";
        }
        function y(f, T, d, F) {
          let i = f.getValue();
          if (i.type !== "TemplateLiteral" || J(i))
            return;
          let h = c(f);
          if (h) {
            if (h === "markdown")
              return e(f, T, d);
            if (h === "css")
              return r(f, T, d);
            if (h === "graphql")
              return n(f, T, d);
            if (h === "html" || h === "angular")
              return o(f, T, d, F, { parser: h });
          }
        }
        function m(f) {
          let T = f.getValue(), d = f.getParentNode();
          return d && d.type === "TaggedTemplateExpression" && T.quasis.length === 1 && d.tag.type === "Identifier" && (d.tag.name === "md" || d.tag.name === "markdown");
        }
        function g(f) {
          let T = f.getValue(), d = f.getParentNode(), F = f.getParentNode(1);
          return F && T.quasis && d.type === "JSXExpressionContainer" && F.type === "JSXElement" && F.openingElement.name.name === "style" && F.openingElement.attributes.some((i) => i.name.name === "jsx") || d && d.type === "TaggedTemplateExpression" && d.tag.type === "Identifier" && d.tag.name === "css" || d && d.type === "TaggedTemplateExpression" && d.tag.type === "MemberExpression" && d.tag.object.name === "css" && (d.tag.property.name === "global" || d.tag.property.name === "resolve");
        }
        function p(f) {
          return f.match((T) => T.type === "TemplateLiteral", (T, d) => T.type === "ArrayExpression" && d === "elements", (T, d) => s(T) && T.key.type === "Identifier" && T.key.name === "styles" && d === "value", ...C);
        }
        function D(f) {
          return f.match((T) => T.type === "TemplateLiteral", (T, d) => s(T) && T.key.type === "Identifier" && T.key.name === "template" && d === "value", ...C);
        }
        var C = [(f, T) => f.type === "ObjectExpression" && T === "properties", (f, T) => f.type === "CallExpression" && f.callee.type === "Identifier" && f.callee.name === "Component" && T === "arguments", (f, T) => f.type === "Decorator" && T === "expression"];
        function w(f) {
          let T = f.getParentNode();
          if (!T || T.type !== "TaggedTemplateExpression")
            return !1;
          let d = T.tag.type === "ParenthesizedExpression" ? T.tag.expression : T.tag;
          switch (d.type) {
            case "MemberExpression":
              return A(d.object) || N(d);
            case "CallExpression":
              return A(d.callee) || d.callee.type === "MemberExpression" && (d.callee.object.type === "MemberExpression" && (A(d.callee.object.object) || N(d.callee.object)) || d.callee.object.type === "CallExpression" && A(d.callee.object.callee));
            case "Identifier":
              return d.name === "css";
            default:
              return !1;
          }
        }
        function k(f) {
          let T = f.getParentNode(), d = f.getParentNode(1);
          return d && T.type === "JSXExpressionContainer" && d.type === "JSXAttribute" && d.name.type === "JSXIdentifier" && d.name.name === "css";
        }
        function A(f) {
          return f.type === "Identifier" && f.name === "styled";
        }
        function N(f) {
          return /^[A-Z]/.test(f.object.name) && f.property.name === "extend";
        }
        function x(f) {
          let T = f.getValue(), d = f.getParentNode();
          return P(T, "GraphQL") || d && (d.type === "TaggedTemplateExpression" && (d.tag.type === "MemberExpression" && d.tag.object.name === "graphql" && d.tag.property.name === "experimental" || d.tag.type === "Identifier" && (d.tag.name === "gql" || d.tag.name === "graphql")) || d.type === "CallExpression" && d.callee.type === "Identifier" && d.callee.name === "graphql");
        }
        function P(f, T) {
          return t(f, a.Block | a.Leading, (d) => {
            let { value: F } = d;
            return F === ` ${T} `;
          });
        }
        function _(f) {
          return P(f.getValue(), "HTML") || f.match((T) => T.type === "TemplateLiteral", (T, d) => T.type === "TaggedTemplateExpression" && T.tag.type === "Identifier" && T.tag.name === "html" && d === "quasi");
        }
        function J(f) {
          let { quasis: T } = f;
          return T.some((d) => {
            let { value: { cooked: F } } = d;
            return F === null;
          });
        }
        l.exports = y;
      } }), pa = O({ "src/language-js/clean.js"(u, l) {
        ne();
        var t = vn(), a = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), s = (r) => {
          for (let n of r.quasis)
            delete n.value;
        };
        function e(r, n, o) {
          if (r.type === "Program" && delete n.sourceType, (r.type === "BigIntLiteral" || r.type === "BigIntLiteralTypeAnnotation") && n.value && (n.value = n.value.toLowerCase()), (r.type === "BigIntLiteral" || r.type === "Literal") && n.bigint && (n.bigint = n.bigint.toLowerCase()), r.type === "DecimalLiteral" && (n.value = Number(n.value)), r.type === "Literal" && n.decimal && (n.decimal = Number(n.decimal)), r.type === "EmptyStatement" || r.type === "JSXText" || r.type === "JSXExpressionContainer" && (r.expression.type === "Literal" || r.expression.type === "StringLiteral") && r.expression.value === " ")
            return null;
          if ((r.type === "Property" || r.type === "ObjectProperty" || r.type === "MethodDefinition" || r.type === "ClassProperty" || r.type === "ClassMethod" || r.type === "PropertyDefinition" || r.type === "TSDeclareMethod" || r.type === "TSPropertySignature" || r.type === "ObjectTypeProperty") && typeof r.key == "object" && r.key && (r.key.type === "Literal" || r.key.type === "NumericLiteral" || r.key.type === "StringLiteral" || r.key.type === "Identifier") && delete n.key, r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((m) => m.name.name === "jsx"))
            for (let { type: m, expression: g } of n.children)
              m === "JSXExpressionContainer" && g.type === "TemplateLiteral" && s(g);
          r.type === "JSXAttribute" && r.name.name === "css" && r.value.type === "JSXExpressionContainer" && r.value.expression.type === "TemplateLiteral" && s(n.value.expression), r.type === "JSXAttribute" && r.value && r.value.type === "Literal" && /["']|&quot;|&apos;/.test(r.value.value) && (n.value.value = n.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let c = r.expression || r.callee;
          if (r.type === "Decorator" && c.type === "CallExpression" && c.callee.name === "Component" && c.arguments.length === 1) {
            let m = r.expression.arguments[0].properties;
            for (let [g, p] of n.expression.arguments[0].properties.entries())
              switch (m[g].key.name) {
                case "styles":
                  p.value.type === "ArrayExpression" && s(p.value.elements[0]);
                  break;
                case "template":
                  p.value.type === "TemplateLiteral" && s(p.value);
                  break;
              }
          }
          if (r.type === "TaggedTemplateExpression" && (r.tag.type === "MemberExpression" || r.tag.type === "Identifier" && (r.tag.name === "gql" || r.tag.name === "graphql" || r.tag.name === "css" || r.tag.name === "md" || r.tag.name === "markdown" || r.tag.name === "html") || r.tag.type === "CallExpression") && s(n.quasi), r.type === "TemplateLiteral") {
            var y;
            (!((y = r.leadingComments) === null || y === void 0) && y.some((m) => t(m) && ["GraphQL", "HTML"].some((g) => m.value === ` ${g} `)) || o.type === "CallExpression" && o.callee.name === "graphql" || !r.leadingComments) && s(n);
          }
          if (r.type === "InterpreterDirective" && (n.value = n.value.trimEnd()), (r.type === "TSIntersectionType" || r.type === "TSUnionType") && r.types.length === 1)
            return n.types[0];
        }
        e.ignoredProperties = a, l.exports = e;
      } }), Es = {};
      Ft(Es, { EOL: () => ss, arch: () => ca, cpus: () => xs, default: () => _s, endianness: () => Cs, freemem: () => bs, getNetworkInterfaces: () => Ns, hostname: () => Fs, loadavg: () => As, networkInterfaces: () => ws, platform: () => Da, release: () => Bs, tmpDir: () => us, tmpdir: () => is, totalmem: () => Ss, type: () => Ts, uptime: () => vs });
      function Cs() {
        if (typeof Qu > "u") {
          var u = new ArrayBuffer(2), l = new Uint8Array(u), t = new Uint16Array(u);
          if (l[0] = 1, l[1] = 2, t[0] === 258)
            Qu = "BE";
          else if (t[0] === 513)
            Qu = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Qu;
      }
      function Fs() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function As() {
        return [];
      }
      function vs() {
        return 0;
      }
      function bs() {
        return Number.MAX_VALUE;
      }
      function Ss() {
        return Number.MAX_VALUE;
      }
      function xs() {
        return [];
      }
      function Ts() {
        return "Browser";
      }
      function Bs() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function ws() {
      }
      function Ns() {
      }
      function ca() {
        return "javascript";
      }
      function Da() {
        return "browser";
      }
      function us() {
        return "/tmp";
      }
      var Qu, is, ss, _s, da = rt({ "node-modules-polyfills:os"() {
        ne(), is = us, ss = `
`, _s = { EOL: ss, tmpdir: is, tmpDir: us, networkInterfaces: ws, getNetworkInterfaces: Ns, release: Bs, type: Ts, cpus: xs, totalmem: Ss, freemem: bs, uptime: vs, loadavg: As, hostname: Fs, endianness: Cs };
      } }), fa = O({ "node-modules-polyfills-commonjs:os"(u, l) {
        ne();
        var t = (da(), qt(Es));
        if (t && t.default) {
          l.exports = t.default;
          for (let a in t)
            l.exports[a] = t[a];
        } else
          t && (l.exports = t);
      } }), ma = O({ "node_modules/detect-newline/index.js"(u, l) {
        ne();
        var t = (a) => {
          if (typeof a != "string")
            throw new TypeError("Expected a string");
          let s = a.match(/(?:\r?\n)/g) || [];
          if (s.length === 0)
            return;
          let e = s.filter((n) => n === `\r
`).length, r = s.length - e;
          return e > r ? `\r
` : `
`;
        };
        l.exports = t, l.exports.graceful = (a) => typeof a == "string" && t(a) || `
`;
      } }), ha = O({ "node_modules/jest-docblock/build/index.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.extract = p, u.parse = C, u.parseWithComments = w, u.print = k, u.strip = D;
        function l() {
          let N = fa();
          return l = function() {
            return N;
          }, N;
        }
        function t() {
          let N = a(ma());
          return t = function() {
            return N;
          }, N;
        }
        function a(N) {
          return N && N.__esModule ? N : { default: N };
        }
        var s = /\*\/$/, e = /^\/\*\*?/, r = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, n = /(^|\s+)\/\/([^\r\n]*)/g, o = /^(\r?\n)+/, c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, y = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, m = /(\r?\n|^) *\* ?/g, g = [];
        function p(N) {
          let x = N.match(r);
          return x ? x[0].trimLeft() : "";
        }
        function D(N) {
          let x = N.match(r);
          return x && x[0] ? N.substring(x[0].length) : N;
        }
        function C(N) {
          return w(N).pragmas;
        }
        function w(N) {
          let x = (0, t().default)(N) || l().EOL;
          N = N.replace(e, "").replace(s, "").replace(m, "$1");
          let P = "";
          for (; P !== N; )
            P = N, N = N.replace(c, `${x}$1 $2${x}`);
          N = N.replace(o, "").trimRight();
          let _ = /* @__PURE__ */ Object.create(null), J = N.replace(y, "").replace(o, "").trimRight(), f;
          for (; f = y.exec(N); ) {
            let T = f[2].replace(n, "");
            typeof _[f[1]] == "string" || Array.isArray(_[f[1]]) ? _[f[1]] = g.concat(_[f[1]], T) : _[f[1]] = T;
          }
          return { comments: J, pragmas: _ };
        }
        function k(N) {
          let { comments: x = "", pragmas: P = {} } = N, _ = (0, t().default)(x) || l().EOL, J = "/**", f = " *", T = " */", d = Object.keys(P), F = d.map((h) => A(h, P[h])).reduce((h, E) => h.concat(E), []).map((h) => `${f} ${h}${_}`).join("");
          if (!x) {
            if (d.length === 0)
              return "";
            if (d.length === 1 && !Array.isArray(P[d[0]])) {
              let h = P[d[0]];
              return `${J} ${A(d[0], h)[0]}${T}`;
            }
          }
          let i = x.split(_).map((h) => `${f} ${h}`).join(_) + _;
          return J + _ + (x ? i : "") + (x && d.length ? f + _ : "") + F + T;
        }
        function A(N, x) {
          return g.concat(x).map((P) => `@${N} ${P}`.trim());
        }
      } }), ga = O({ "src/language-js/utils/get-shebang.js"(u, l) {
        ne();
        function t(a) {
          if (!a.startsWith("#!"))
            return "";
          let s = a.indexOf(`
`);
          return s === -1 ? a : a.slice(0, s);
        }
        l.exports = t;
      } }), ks = O({ "src/language-js/pragma.js"(u, l) {
        ne();
        var { parseWithComments: t, strip: a, extract: s, print: e } = ha(), { normalizeEndOfLine: r } = $r(), n = ga();
        function o(m) {
          let g = n(m);
          g && (m = m.slice(g.length + 1));
          let p = s(m), { pragmas: D, comments: C } = t(p);
          return { shebang: g, text: m, pragmas: D, comments: C };
        }
        function c(m) {
          let g = Object.keys(o(m).pragmas);
          return g.includes("prettier") || g.includes("format");
        }
        function y(m) {
          let { shebang: g, text: p, pragmas: D, comments: C } = o(m), w = a(p), k = e({ pragmas: Object.assign({ format: "" }, D), comments: C.trimStart() });
          return (g ? `${g}
` : "") + r(k) + (w.startsWith(`
`) ? `
` : `

`) + w;
        }
        l.exports = { hasPragma: c, insertPragma: y };
      } }), ya = O({ "src/language-js/utils/is-type-cast-comment.js"(u, l) {
        ne();
        var t = vn();
        function a(s) {
          return t(s) && s.value[0] === "*" && /@(?:type|satisfies)\b/.test(s.value);
        }
        l.exports = a;
      } }), Ps = O({ "src/language-js/comments.js"(u, l) {
        ne();
        var { getLast: t, hasNewline: a, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: s, getNextNonSpaceNonCommentCharacter: e, hasNewlineInRange: r, addLeadingComment: n, addTrailingComment: o, addDanglingComment: c, getNextNonSpaceNonCommentCharacterIndex: y, isNonEmptyArray: m } = Ut(), { getFunctionParameters: g, isPrettierIgnoreComment: p, isJsxNode: D, hasFlowShorthandAnnotationComment: C, hasFlowAnnotationComment: w, hasIgnoreComment: k, isCallLikeExpression: A, getCallArguments: N, isCallExpression: x, isMemberExpression: P, isObjectProperty: _, isLineComment: J, getComments: f, CommentCheckFlags: T, markerForIfWithoutBlockAndSameLineComment: d } = ur(), { locStart: F, locEnd: i } = or(), h = vn(), E = ya();
        function b(je) {
          return [H, it, De, q, ee, j, ve, He, Ee, Xe, Ct, Rt, Pe, ae, K].some((v) => v(je));
        }
        function S(je) {
          return [U, it, G, Ct, q, ee, j, ve, ae, ge, Oe, Xe, bt, K, se].some((v) => v(je));
        }
        function B(je) {
          return [H, q, ee, R, Ne, Pe, Xe, Be, ie, _e, K, Se].some((v) => v(je));
        }
        function I(je, v) {
          let oe = (je.body || je.properties).find(($e) => {
            let { type: Ke } = $e;
            return Ke !== "EmptyStatement";
          });
          oe ? n(oe, v) : c(je, v);
        }
        function M(je, v) {
          je.type === "BlockStatement" ? I(je, v) : n(je, v);
        }
        function U(je) {
          let { comment: v, followingNode: oe } = je;
          return oe && E(v) ? (n(oe, v), !0) : !1;
        }
        function q(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke, text: tt } = je;
          if ($e?.type !== "IfStatement" || !Ke)
            return !1;
          if (e(tt, v, i) === ")")
            return o(oe, v), !0;
          if (oe === $e.consequent && Ke === $e.alternate) {
            if (oe.type === "BlockStatement")
              o(oe, v);
            else {
              let ht = v.type === "SingleLine" || v.loc.start.line === v.loc.end.line, Ye = v.loc.start.line === oe.loc.start.line;
              ht && Ye ? c(oe, v, d) : c($e, v);
            }
            return !0;
          }
          return Ke.type === "BlockStatement" ? (I(Ke, v), !0) : Ke.type === "IfStatement" ? (M(Ke.consequent, v), !0) : $e.consequent === Ke ? (n(Ke, v), !0) : !1;
        }
        function ee(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke, text: tt } = je;
          return $e?.type !== "WhileStatement" || !Ke ? !1 : e(tt, v, i) === ")" ? (o(oe, v), !0) : Ke.type === "BlockStatement" ? (I(Ke, v), !0) : $e.body === Ke ? (n(Ke, v), !0) : !1;
        }
        function j(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke } = je;
          return $e?.type !== "TryStatement" && $e?.type !== "CatchClause" || !Ke ? !1 : $e.type === "CatchClause" && oe ? (o(oe, v), !0) : Ke.type === "BlockStatement" ? (I(Ke, v), !0) : Ke.type === "TryStatement" ? (M(Ke.finalizer, v), !0) : Ke.type === "CatchClause" ? (M(Ke.body, v), !0) : !1;
        }
        function De(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e } = je;
          return P(oe) && $e?.type === "Identifier" ? (n(oe, v), !0) : !1;
        }
        function G(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke, text: tt } = je, ht = oe && !r(tt, i(oe), F(v));
          return (!oe || !ht) && ($e?.type === "ConditionalExpression" || $e?.type === "TSConditionalType") && Ke ? (n(Ke, v), !0) : !1;
        }
        function R(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e } = je;
          return _($e) && $e.shorthand && $e.key === oe && $e.value.type === "AssignmentPattern" ? (o($e.value.left, v), !0) : !1;
        }
        var pe = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function ve(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke } = je;
          if (pe.has($e?.type)) {
            if (m($e.decorators) && !(Ke && Ke.type === "Decorator"))
              return o(t($e.decorators), v), !0;
            if ($e.body && Ke === $e.body)
              return I($e.body, v), !0;
            if (Ke) {
              if ($e.superClass && Ke === $e.superClass && oe && (oe === $e.id || oe === $e.typeParameters))
                return o(oe, v), !0;
              for (let tt of ["implements", "extends", "mixins"])
                if ($e[tt] && Ke === $e[tt][0])
                  return oe && (oe === $e.id || oe === $e.typeParameters || oe === $e.superClass) ? o(oe, v) : c($e, v, tt), !0;
            }
          }
          return !1;
        }
        var fe = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function Pe(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, text: Ke } = je;
          return $e && oe && e(Ke, v, i) === "(" && ($e.type === "Property" || $e.type === "TSDeclareMethod" || $e.type === "TSAbstractMethodDefinition") && oe.type === "Identifier" && $e.key === oe && e(Ke, oe, i) !== ":" || oe?.type === "Decorator" && fe.has($e?.type) ? (o(oe, v), !0) : !1;
        }
        var X = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function ie(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, text: Ke } = je;
          return e(Ke, v, i) !== "(" ? !1 : oe && X.has($e?.type) ? (o(oe, v), !0) : !1;
        }
        function Be(je) {
          let { comment: v, enclosingNode: oe, text: $e } = je;
          if (oe?.type !== "ArrowFunctionExpression")
            return !1;
          let Ke = y($e, v, i);
          return Ke !== !1 && $e.slice(Ke, Ke + 2) === "=>" ? (c(oe, v), !0) : !1;
        }
        function Ne(je) {
          let { comment: v, enclosingNode: oe, text: $e } = je;
          return e($e, v, i) !== ")" ? !1 : oe && (Te(oe) && g(oe).length === 0 || A(oe) && N(oe).length === 0) ? (c(oe, v), !0) : (oe?.type === "MethodDefinition" || oe?.type === "TSAbstractMethodDefinition") && g(oe.value).length === 0 ? (c(oe.value, v), !0) : !1;
        }
        function it(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke, text: tt } = je;
          if (oe?.type === "FunctionTypeParam" && $e?.type === "FunctionTypeAnnotation" && Ke?.type !== "FunctionTypeParam" || (oe?.type === "Identifier" || oe?.type === "AssignmentPattern") && $e && Te($e) && e(tt, v, i) === ")")
            return o(oe, v), !0;
          if ($e?.type === "FunctionDeclaration" && Ke?.type === "BlockStatement") {
            let ht = (() => {
              let Ye = g($e);
              if (Ye.length > 0)
                return s(tt, i(t(Ye)));
              let pr = s(tt, i($e.id));
              return pr !== !1 && s(tt, pr + 1);
            })();
            if (F(v) > ht)
              return I(Ke, v), !0;
          }
          return !1;
        }
        function ae(je) {
          let { comment: v, enclosingNode: oe } = je;
          return oe?.type === "LabeledStatement" ? (n(oe, v), !0) : !1;
        }
        function K(je) {
          let { comment: v, enclosingNode: oe } = je;
          return (oe?.type === "ContinueStatement" || oe?.type === "BreakStatement") && !oe.label ? (o(oe, v), !0) : !1;
        }
        function ge(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e } = je;
          return x($e) && oe && $e.callee === oe && $e.arguments.length > 0 ? (n($e.arguments[0], v), !0) : !1;
        }
        function Ee(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke } = je;
          return $e?.type === "UnionTypeAnnotation" || $e?.type === "TSUnionType" ? (p(v) && (Ke.prettierIgnore = !0, v.unignore = !0), oe ? (o(oe, v), !0) : !1) : ((Ke?.type === "UnionTypeAnnotation" || Ke?.type === "TSUnionType") && p(v) && (Ke.types[0].prettierIgnore = !0, v.unignore = !0), !1);
        }
        function Oe(je) {
          let { comment: v, enclosingNode: oe } = je;
          return _(oe) ? (n(oe, v), !0) : !1;
        }
        function Xe(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e, ast: Ke, isLastComment: tt } = je;
          return Ke && Ke.body && Ke.body.length === 0 ? (tt ? c(Ke, v) : n(Ke, v), !0) : oe?.type === "Program" && oe?.body.length === 0 && !m(oe.directives) ? (tt ? c(oe, v) : n(oe, v), !0) : $e?.type === "Program" && $e?.body.length === 0 && oe?.type === "ModuleExpression" ? (c($e, v), !0) : !1;
        }
        function He(je) {
          let { comment: v, enclosingNode: oe } = je;
          return oe?.type === "ForInStatement" || oe?.type === "ForOfStatement" ? (n(oe, v), !0) : !1;
        }
        function Ct(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, text: Ke } = je;
          if ($e?.type === "ImportSpecifier" || $e?.type === "ExportSpecifier")
            return n($e, v), !0;
          let tt = oe?.type === "ImportSpecifier" && $e?.type === "ImportDeclaration", ht = oe?.type === "ExportSpecifier" && $e?.type === "ExportNamedDeclaration";
          return (tt || ht) && a(Ke, i(v)) ? (o(oe, v), !0) : !1;
        }
        function Rt(je) {
          let { comment: v, enclosingNode: oe } = je;
          return oe?.type === "AssignmentPattern" ? (n(oe, v), !0) : !1;
        }
        var It = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Et = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function bt(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e } = je;
          return It.has(oe?.type) && $e && (Et.has($e.type) || h(v)) ? (n($e, v), !0) : !1;
        }
        function Se(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e, text: Ke } = je;
          return !$e && (oe?.type === "TSMethodSignature" || oe?.type === "TSDeclareFunction" || oe?.type === "TSAbstractMethodDefinition") && e(Ke, v, i) === ";" ? (o(oe, v), !0) : !1;
        }
        function H(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e } = je;
          if (p(v) && oe?.type === "TSMappedType" && $e?.type === "TSTypeParameter" && $e.constraint)
            return oe.prettierIgnore = !0, v.unignore = !0, !0;
        }
        function _e(je) {
          let { comment: v, precedingNode: oe, enclosingNode: $e, followingNode: Ke } = je;
          return $e?.type !== "TSMappedType" ? !1 : Ke?.type === "TSTypeParameter" && Ke.name ? (n(Ke.name, v), !0) : oe?.type === "TSTypeParameter" && oe.constraint ? (o(oe.constraint, v), !0) : !1;
        }
        function se(je) {
          let { comment: v, enclosingNode: oe, followingNode: $e } = je;
          return !oe || oe.type !== "SwitchCase" || oe.test || !$e || $e !== oe.consequent[0] ? !1 : ($e.type === "BlockStatement" && J(v) ? I($e, v) : c(oe, v), !0);
        }
        function Te(je) {
          return je.type === "ArrowFunctionExpression" || je.type === "FunctionExpression" || je.type === "FunctionDeclaration" || je.type === "ObjectMethod" || je.type === "ClassMethod" || je.type === "TSDeclareFunction" || je.type === "TSCallSignatureDeclaration" || je.type === "TSConstructSignatureDeclaration" || je.type === "TSMethodSignature" || je.type === "TSConstructorType" || je.type === "TSFunctionType" || je.type === "TSDeclareMethod";
        }
        function pt(je, v) {
          if ((v.parser === "typescript" || v.parser === "flow" || v.parser === "acorn" || v.parser === "espree" || v.parser === "meriyah" || v.parser === "__babel_estree") && je.type === "MethodDefinition" && je.value && je.value.type === "FunctionExpression" && g(je.value).length === 0 && !je.value.returnType && !m(je.value.typeParameters) && je.value.body)
            return [...je.decorators || [], je.key, je.value.body];
        }
        function ut(je) {
          let v = je.getValue(), oe = je.getParentNode(), $e = (Ke) => w(f(Ke, T.Leading)) || w(f(Ke, T.Trailing));
          return (v && (D(v) || C(v) || x(oe) && $e(v)) || oe && (oe.type === "JSXSpreadAttribute" || oe.type === "JSXSpreadChild" || oe.type === "UnionTypeAnnotation" || oe.type === "TSUnionType" || (oe.type === "ClassDeclaration" || oe.type === "ClassExpression") && oe.superClass === v)) && (!k(je) || oe.type === "UnionTypeAnnotation" || oe.type === "TSUnionType");
        }
        l.exports = { handleOwnLineComment: b, handleEndOfLineComment: S, handleRemainingComment: B, getCommentChildNodes: pt, willPrintOwnComments: ut };
      } }), Ln = O({ "src/language-js/needs-parens.js"(u, l) {
        ne();
        var t = mr(), a = uu(), { getFunctionParameters: s, getLeftSidePathName: e, hasFlowShorthandAnnotationComment: r, hasNakedLeftSide: n, hasNode: o, isBitwiseOperator: c, startsWithNoLookaheadToken: y, shouldFlatten: m, getPrecedence: g, isCallExpression: p, isMemberExpression: D, isObjectProperty: C, isTSTypeExpression: w } = ur();
        function k(f, T) {
          let d = f.getParentNode();
          if (!d)
            return !1;
          let F = f.getName(), i = f.getNode();
          if (T.__isInHtmlInterpolation && !T.bracketSpacing && P(i) && _(f))
            return !0;
          if (A(i))
            return !1;
          if (T.parser !== "flow" && r(f.getValue()))
            return !0;
          if (i.type === "Identifier") {
            if (i.extra && i.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(i.name) || F === "left" && (i.name === "async" && !d.await || i.name === "let") && d.type === "ForOfStatement")
              return !0;
            if (i.name === "let") {
              var h;
              let b = (h = f.findAncestor((S) => S.type === "ForOfStatement")) === null || h === void 0 ? void 0 : h.left;
              if (b && y(b, (S) => S === i))
                return !0;
            }
            if (F === "object" && i.name === "let" && d.type === "MemberExpression" && d.computed && !d.optional) {
              let b = f.findAncestor((B) => B.type === "ExpressionStatement" || B.type === "ForStatement" || B.type === "ForInStatement"), S = b ? b.type === "ExpressionStatement" ? b.expression : b.type === "ForStatement" ? b.init : b.left : void 0;
              if (S && y(S, (B) => B === i))
                return !0;
            }
            return !1;
          }
          if (i.type === "ObjectExpression" || i.type === "FunctionExpression" || i.type === "ClassExpression" || i.type === "DoExpression") {
            var E;
            let b = (E = f.findAncestor((S) => S.type === "ExpressionStatement")) === null || E === void 0 ? void 0 : E.expression;
            if (b && y(b, (S) => S === i))
              return !0;
          }
          switch (d.type) {
            case "ParenthesizedExpression":
              return !1;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (F === "superClass" && (i.type === "ArrowFunctionExpression" || i.type === "AssignmentExpression" || i.type === "AwaitExpression" || i.type === "BinaryExpression" || i.type === "ConditionalExpression" || i.type === "LogicalExpression" || i.type === "NewExpression" || i.type === "ObjectExpression" || i.type === "SequenceExpression" || i.type === "TaggedTemplateExpression" || i.type === "UnaryExpression" || i.type === "UpdateExpression" || i.type === "YieldExpression" || i.type === "TSNonNullExpression"))
                return !0;
              break;
            }
            case "ExportDefaultDeclaration":
              return J(f, T) || i.type === "SequenceExpression";
            case "Decorator": {
              if (F === "expression") {
                if (D(i) && i.computed)
                  return !0;
                let b = !1, S = !1, B = i;
                for (; B; )
                  switch (B.type) {
                    case "MemberExpression":
                      S = !0, B = B.object;
                      break;
                    case "CallExpression":
                      if (S || b)
                        return T.parser !== "typescript";
                      b = !0, B = B.callee;
                      break;
                    case "Identifier":
                      return !1;
                    case "TaggedTemplateExpression":
                      return T.parser !== "typescript";
                    default:
                      return !0;
                  }
                return !0;
              }
              break;
            }
            case "ArrowFunctionExpression": {
              if (F === "body" && i.type !== "SequenceExpression" && y(i, (b) => b.type === "ObjectExpression"))
                return !0;
              break;
            }
          }
          switch (i.type) {
            case "UpdateExpression":
              if (d.type === "UnaryExpression")
                return i.prefix && (i.operator === "++" && d.operator === "+" || i.operator === "--" && d.operator === "-");
            case "UnaryExpression":
              switch (d.type) {
                case "UnaryExpression":
                  return i.operator === d.operator && (i.operator === "+" || i.operator === "-");
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "TaggedTemplateExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "BinaryExpression":
                  return F === "left" && d.operator === "**";
                case "TSNonNullExpression":
                  return !0;
                default:
                  return !1;
              }
            case "BinaryExpression": {
              if (d.type === "UpdateExpression" || i.operator === "in" && N(f))
                return !0;
              if (i.operator === "|>" && i.extra && i.extra.parenthesized) {
                let b = f.getParentNode(1);
                if (b.type === "BinaryExpression" && b.operator === "|>")
                  return !0;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (d.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !w(i);
                case "ConditionalExpression":
                  return w(i);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return F === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return F === "left" && (i.type === "TSTypeAssertion" || w(i));
                case "LogicalExpression":
                  if (i.type === "LogicalExpression")
                    return d.operator !== i.operator;
                case "BinaryExpression": {
                  let { operator: b, type: S } = i;
                  if (!b && S !== "TSTypeAssertion")
                    return !0;
                  let B = g(b), I = d.operator, M = g(I);
                  return M > B || F === "right" && M === B || M === B && !m(I, b) ? !0 : M < B && b === "%" ? I === "+" || I === "-" : !!c(I);
                }
                default:
                  return !1;
              }
            case "SequenceExpression":
              switch (d.type) {
                case "ReturnStatement":
                  return !1;
                case "ForStatement":
                  return !1;
                case "ExpressionStatement":
                  return F !== "expression";
                case "ArrowFunctionExpression":
                  return F !== "body";
                default:
                  return !0;
              }
            case "YieldExpression":
              if (d.type === "UnaryExpression" || d.type === "AwaitExpression" || w(d) || d.type === "TSNonNullExpression")
                return !0;
            case "AwaitExpression":
              switch (d.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ConditionalExpression":
                  return F === "test";
                case "BinaryExpression":
                  return !(!i.argument && d.operator === "|>");
                default:
                  return !1;
              }
            case "TSConditionalType":
            case "TSFunctionType":
            case "TSConstructorType":
              if (F === "extendsType" && d.type === "TSConditionalType") {
                if (i.type === "TSConditionalType")
                  return !0;
                let { typeAnnotation: b } = i.returnType || i.typeAnnotation;
                if (b.type === "TSTypePredicate" && b.typeAnnotation && (b = b.typeAnnotation.typeAnnotation), b.type === "TSInferType" && b.typeParameter.constraint)
                  return !0;
              }
              if (F === "checkType" && d.type === "TSConditionalType")
                return !0;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((d.type === "TSUnionType" || d.type === "TSIntersectionType") && d.types.length > 1 && (!i.types || i.types.length > 1))
                return !0;
            case "TSInferType":
              if (i.type === "TSInferType" && d.type === "TSRestType")
                return !1;
            case "TSTypeOperator":
              return d.type === "TSArrayType" || d.type === "TSOptionalType" || d.type === "TSRestType" || F === "objectType" && d.type === "TSIndexedAccessType" || d.type === "TSTypeOperator" || d.type === "TSTypeAnnotation" && f.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery":
              return F === "objectType" && d.type === "TSIndexedAccessType" || F === "elementType" && d.type === "TSArrayType";
            case "TypeofTypeAnnotation":
              return F === "objectType" && (d.type === "IndexedAccessType" || d.type === "OptionalIndexedAccessType") || F === "elementType" && d.type === "ArrayTypeAnnotation";
            case "ArrayTypeAnnotation":
              return d.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return d.type === "ArrayTypeAnnotation" || d.type === "NullableTypeAnnotation" || d.type === "IntersectionTypeAnnotation" || d.type === "UnionTypeAnnotation" || F === "objectType" && (d.type === "IndexedAccessType" || d.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return d.type === "ArrayTypeAnnotation" || F === "objectType" && (d.type === "IndexedAccessType" || d.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let b = d.type === "NullableTypeAnnotation" ? f.getParentNode(1) : d;
              return b.type === "UnionTypeAnnotation" || b.type === "IntersectionTypeAnnotation" || b.type === "ArrayTypeAnnotation" || F === "objectType" && (b.type === "IndexedAccessType" || b.type === "OptionalIndexedAccessType") || b.type === "NullableTypeAnnotation" || d.type === "FunctionTypeParam" && d.name === null && s(i).some((S) => S.typeAnnotation && S.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return F === "objectType" && d.type === "IndexedAccessType";
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof i.value == "string" && d.type === "ExpressionStatement" && !d.directive) {
                let b = f.getParentNode(1);
                return b.type === "Program" || b.type === "BlockStatement";
              }
              return F === "object" && d.type === "MemberExpression" && typeof i.value == "number";
            case "AssignmentExpression": {
              let b = f.getParentNode(1);
              return F === "body" && d.type === "ArrowFunctionExpression" ? !0 : F === "key" && (d.type === "ClassProperty" || d.type === "PropertyDefinition") && d.computed || (F === "init" || F === "update") && d.type === "ForStatement" ? !1 : d.type === "ExpressionStatement" ? i.left.type === "ObjectPattern" : !(F === "key" && d.type === "TSPropertySignature" || d.type === "AssignmentExpression" || d.type === "SequenceExpression" && b && b.type === "ForStatement" && (b.init === d || b.update === d) || F === "value" && d.type === "Property" && b && b.type === "ObjectPattern" && b.properties.includes(d) || d.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (d.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "ConditionalExpression":
                  return F === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                default:
                  return !1;
              }
            case "FunctionExpression":
              switch (d.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "TaggedTemplateExpression":
                  return !0;
                default:
                  return !1;
              }
            case "ArrowFunctionExpression":
              switch (d.type) {
                case "BinaryExpression":
                  return d.operator !== "|>" || i.extra && i.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return F === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return F === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return !0;
                case "ConditionalExpression":
                  return F === "test";
                default:
                  return !1;
              }
            case "ClassExpression":
              if (a(i.decorators))
                return !0;
              switch (d.type) {
                case "NewExpression":
                  return F === "callee";
                default:
                  return !1;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let b = f.getParentNode(1);
              if (F === "object" && d.type === "MemberExpression" || F === "callee" && (d.type === "CallExpression" || d.type === "NewExpression") || d.type === "TSNonNullExpression" && b.type === "MemberExpression" && b.object === d)
                return !0;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (F === "callee" && (d.type === "BindExpression" || d.type === "NewExpression")) {
                let b = i;
                for (; b; )
                  switch (b.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return !0;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      b = b.object;
                      break;
                    case "TaggedTemplateExpression":
                      b = b.tag;
                      break;
                    case "TSNonNullExpression":
                      b = b.expression;
                      break;
                    default:
                      return !1;
                  }
              }
              return !1;
            case "BindExpression":
              return F === "callee" && (d.type === "BindExpression" || d.type === "NewExpression") || F === "object" && D(d);
            case "NGPipeExpression":
              return !(d.type === "NGRoot" || d.type === "NGMicrosyntaxExpression" || d.type === "ObjectProperty" && !(i.extra && i.extra.parenthesized) || d.type === "ArrayExpression" || p(d) && d.arguments[F] === i || F === "right" && d.type === "NGPipeExpression" || F === "property" && d.type === "MemberExpression" || d.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return F === "callee" || F === "left" && d.type === "BinaryExpression" && d.operator === "<" || d.type !== "ArrayExpression" && d.type !== "ArrowFunctionExpression" && d.type !== "AssignmentExpression" && d.type !== "AssignmentPattern" && d.type !== "BinaryExpression" && d.type !== "NewExpression" && d.type !== "ConditionalExpression" && d.type !== "ExpressionStatement" && d.type !== "JsExpressionRoot" && d.type !== "JSXAttribute" && d.type !== "JSXElement" && d.type !== "JSXExpressionContainer" && d.type !== "JSXFragment" && d.type !== "LogicalExpression" && !p(d) && !C(d) && d.type !== "ReturnStatement" && d.type !== "ThrowStatement" && d.type !== "TypeCastExpression" && d.type !== "VariableDeclarator" && d.type !== "YieldExpression";
            case "TypeAnnotation":
              return F === "returnType" && d.type === "ArrowFunctionExpression" && x(i);
          }
          return !1;
        }
        function A(f) {
          return f.type === "BlockStatement" || f.type === "BreakStatement" || f.type === "ClassBody" || f.type === "ClassDeclaration" || f.type === "ClassMethod" || f.type === "ClassProperty" || f.type === "PropertyDefinition" || f.type === "ClassPrivateProperty" || f.type === "ContinueStatement" || f.type === "DebuggerStatement" || f.type === "DeclareClass" || f.type === "DeclareExportAllDeclaration" || f.type === "DeclareExportDeclaration" || f.type === "DeclareFunction" || f.type === "DeclareInterface" || f.type === "DeclareModule" || f.type === "DeclareModuleExports" || f.type === "DeclareVariable" || f.type === "DoWhileStatement" || f.type === "EnumDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportDefaultDeclaration" || f.type === "ExportNamedDeclaration" || f.type === "ExpressionStatement" || f.type === "ForInStatement" || f.type === "ForOfStatement" || f.type === "ForStatement" || f.type === "FunctionDeclaration" || f.type === "IfStatement" || f.type === "ImportDeclaration" || f.type === "InterfaceDeclaration" || f.type === "LabeledStatement" || f.type === "MethodDefinition" || f.type === "ReturnStatement" || f.type === "SwitchStatement" || f.type === "ThrowStatement" || f.type === "TryStatement" || f.type === "TSDeclareFunction" || f.type === "TSEnumDeclaration" || f.type === "TSImportEqualsDeclaration" || f.type === "TSInterfaceDeclaration" || f.type === "TSModuleDeclaration" || f.type === "TSNamespaceExportDeclaration" || f.type === "TypeAlias" || f.type === "VariableDeclaration" || f.type === "WhileStatement" || f.type === "WithStatement";
        }
        function N(f) {
          let T = 0, d = f.getValue();
          for (; d; ) {
            let F = f.getParentNode(T++);
            if (F && F.type === "ForStatement" && F.init === d)
              return !0;
            d = F;
          }
          return !1;
        }
        function x(f) {
          return o(f, (T) => T.type === "ObjectTypeAnnotation" && o(T, (d) => d.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function P(f) {
          switch (f.type) {
            case "ObjectExpression":
              return !0;
            default:
              return !1;
          }
        }
        function _(f) {
          let T = f.getValue(), d = f.getParentNode(), F = f.getName();
          switch (d.type) {
            case "NGPipeExpression":
              if (typeof F == "number" && d.arguments[F] === T && d.arguments.length - 1 === F)
                return f.callParent(_);
              break;
            case "ObjectProperty":
              if (F === "value") {
                let i = f.getParentNode(1);
                return t(i.properties) === d;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (F === "right")
                return f.callParent(_);
              break;
            case "ConditionalExpression":
              if (F === "alternate")
                return f.callParent(_);
              break;
            case "UnaryExpression":
              if (d.prefix)
                return f.callParent(_);
              break;
          }
          return !1;
        }
        function J(f, T) {
          let d = f.getValue(), F = f.getParentNode();
          return d.type === "FunctionExpression" || d.type === "ClassExpression" ? F.type === "ExportDefaultDeclaration" || !k(f, T) : !n(d) || F.type !== "ExportDefaultDeclaration" && k(f, T) ? !1 : f.call((i) => J(i, T), ...e(f, d));
        }
        l.exports = k;
      } }), Is = O({ "src/language-js/print-preprocess.js"(u, l) {
        ne();
        function t(a, s) {
          switch (s.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, a), {}, { type: s.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: a, comments: [], rootMarker: s.rootMarker });
            default:
              return a;
          }
        }
        l.exports = t;
      } }), Ea = O({ "src/language-js/print/html-binding.js"(u, l) {
        ne();
        var { builders: { join: t, line: a, group: s, softline: e, indent: r } } = wt();
        function n(c, y, m) {
          let g = c.getValue();
          if (y.__onHtmlBindingRoot && c.getName() === null && y.__onHtmlBindingRoot(g, y), g.type === "File") {
            if (y.__isVueForBindingLeft)
              return c.call((p) => {
                let D = t([",", a], p.map(m, "params")), { params: C } = p.getValue();
                return C.length === 1 ? D : ["(", r([e, s(D)]), e, ")"];
              }, "program", "body", 0);
            if (y.__isVueBindings)
              return c.call((p) => t([",", a], p.map(m, "params")), "program", "body", 0);
          }
        }
        function o(c) {
          switch (c.type) {
            case "MemberExpression":
              switch (c.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return o(c.object);
              }
              return !1;
            case "Identifier":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = { isVueEventBindingExpression: o, printHtmlBinding: n };
      } }), as = O({ "src/language-js/print/binaryish.js"(u, l) {
        ne();
        var { printComments: t } = Qt(), { getLast: a } = Ut(), { builders: { join: s, line: e, softline: r, group: n, indent: o, align: c, indentIfBreak: y }, utils: { cleanDoc: m, getDocParts: g, isConcat: p } } = wt(), { hasLeadingOwnLineComment: D, isBinaryish: C, isJsxNode: w, shouldFlatten: k, hasComment: A, CommentCheckFlags: N, isCallExpression: x, isMemberExpression: P, isObjectProperty: _, isEnabledHackPipeline: J } = ur(), f = 0;
        function T(i, h, E) {
          let b = i.getValue(), S = i.getParentNode(), B = i.getParentNode(1), I = b !== S.body && (S.type === "IfStatement" || S.type === "WhileStatement" || S.type === "SwitchStatement" || S.type === "DoWhileStatement"), M = J(h) && b.operator === "|>", U = d(i, E, h, !1, I);
          if (I)
            return U;
          if (M)
            return n(U);
          if (x(S) && S.callee === b || S.type === "UnaryExpression" || P(S) && !S.computed)
            return n([o([r, ...U]), r]);
          let q = S.type === "ReturnStatement" || S.type === "ThrowStatement" || S.type === "JSXExpressionContainer" && B.type === "JSXAttribute" || b.operator !== "|" && S.type === "JsExpressionRoot" || b.type !== "NGPipeExpression" && (S.type === "NGRoot" && h.parser === "__ng_binding" || S.type === "NGMicrosyntaxExpression" && B.type === "NGMicrosyntax" && B.body.length === 1) || b === S.body && S.type === "ArrowFunctionExpression" || b !== S.body && S.type === "ForStatement" || S.type === "ConditionalExpression" && B.type !== "ReturnStatement" && B.type !== "ThrowStatement" && !x(B) || S.type === "TemplateLiteral", ee = S.type === "AssignmentExpression" || S.type === "VariableDeclarator" || S.type === "ClassProperty" || S.type === "PropertyDefinition" || S.type === "TSAbstractPropertyDefinition" || S.type === "ClassPrivateProperty" || _(S), j = C(b.left) && k(b.operator, b.left.operator);
          if (q || F(b) && !j || !F(b) && ee)
            return n(U);
          if (U.length === 0)
            return "";
          let De = w(b.right), G = U.findIndex((X) => typeof X != "string" && !Array.isArray(X) && X.type === "group"), R = U.slice(0, G === -1 ? 1 : G + 1), pe = U.slice(R.length, De ? -1 : void 0), ve = Symbol("logicalChain-" + ++f), fe = n([...R, o(pe)], { id: ve });
          if (!De)
            return fe;
          let Pe = a(U);
          return n([fe, y(Pe, { groupId: ve })]);
        }
        function d(i, h, E, b, S) {
          let B = i.getValue();
          if (!C(B))
            return [n(h())];
          let I = [];
          k(B.operator, B.left.operator) ? I = i.call((pe) => d(pe, h, E, !0, S), "left") : I.push(n(h("left")));
          let M = F(B), U = (B.operator === "|>" || B.type === "NGPipeExpression" || B.operator === "|" && E.parser === "__vue_expression") && !D(E.originalText, B.right), q = B.type === "NGPipeExpression" ? "|" : B.operator, ee = B.type === "NGPipeExpression" && B.arguments.length > 0 ? n(o([e, ": ", s([e, ": "], i.map(h, "arguments").map((pe) => c(2, n(pe))))])) : "", j;
          if (M)
            j = [q, " ", h("right"), ee];
          else {
            let pe = J(E) && q === "|>" ? i.call((ve) => d(ve, h, E, !0, S), "right") : h("right");
            j = [U ? e : "", q, U ? " " : e, pe, ee];
          }
          let De = i.getParentNode(), G = A(B.left, N.Trailing | N.Line), R = G || !(S && B.type === "LogicalExpression") && De.type !== B.type && B.left.type !== B.type && B.right.type !== B.type;
          if (I.push(U ? "" : " ", R ? n(j, { shouldBreak: G }) : j), b && A(B)) {
            let pe = m(t(i, I, E));
            return p(pe) || pe.type === "fill" ? g(pe) : [pe];
          }
          return I;
        }
        function F(i) {
          return i.type !== "LogicalExpression" ? !1 : !!(i.right.type === "ObjectExpression" && i.right.properties.length > 0 || i.right.type === "ArrayExpression" && i.right.elements.length > 0 || w(i.right));
        }
        l.exports = { printBinaryishExpression: T, shouldInlineLogicalExpression: F };
      } }), Ca = O({ "src/language-js/print/angular.js"(u, l) {
        ne();
        var { builders: { join: t, line: a, group: s } } = wt(), { hasNode: e, hasComment: r, getComments: n } = ur(), { printBinaryishExpression: o } = as();
        function c(g, p, D) {
          let C = g.getValue();
          if (C.type.startsWith("NG"))
            switch (C.type) {
              case "NGRoot":
                return [D("node"), r(C.node) ? " //" + n(C.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return o(g, p, D);
              case "NGChainedExpression":
                return s(t([";", a], g.map((w) => m(w) ? D() : ["(", D(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [C.prefix, ": ", C.value.trim()];
              case "NGMicrosyntax":
                return g.map((w, k) => [k === 0 ? "" : y(w.getValue(), k, C) ? " " : [";", a], D()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(C.name) ? C.name : JSON.stringify(C.name);
              case "NGMicrosyntaxExpression":
                return [D("expression"), C.alias === null ? "" : [" as ", D("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let w = g.getName(), k = g.getParentNode(), A = y(C, w, k) || (w === 1 && (C.key.name === "then" || C.key.name === "else") || w === 2 && C.key.name === "else" && k.body[w - 1].type === "NGMicrosyntaxKeyedExpression" && k.body[w - 1].key.name === "then") && k.body[0].type === "NGMicrosyntaxExpression";
                return [D("key"), A ? " " : ": ", D("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", D("key"), C.value === null ? "" : [" = ", D("value")]];
              case "NGMicrosyntaxAs":
                return [D("key"), " as ", D("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(C.type)}.`);
            }
        }
        function y(g, p, D) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && p === 1 && D.body[0].type === "NGMicrosyntaxLet" && D.body[0].value === null;
        }
        function m(g) {
          return e(g.getValue(), (p) => {
            switch (p.type) {
              case void 0:
                return !1;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return !0;
            }
          });
        }
        l.exports = { printAngular: c };
      } }), Fa = O({ "src/language-js/print/jsx.js"(u, l) {
        ne();
        var { printComments: t, printDanglingComments: a, printCommentsSeparately: s } = Qt(), { builders: { line: e, hardline: r, softline: n, group: o, indent: c, conditionalGroup: y, fill: m, ifBreak: g, lineSuffixBoundary: p, join: D }, utils: { willBreak: C } } = wt(), { getLast: w, getPreferredQuote: k } = Ut(), { isJsxNode: A, rawText: N, isCallExpression: x, isStringLiteral: P, isBinaryish: _, hasComment: J, CommentCheckFlags: f, hasNodeIgnoreComment: T } = ur(), d = Ln(), { willPrintOwnComments: F } = Ps(), i = (K) => K === "" || K === e || K === r || K === n;
        function h(K, ge, Ee) {
          let Oe = K.getValue();
          if (Oe.type === "JSXElement" && Be(Oe))
            return [Ee("openingElement"), Ee("closingElement")];
          let Xe = Oe.type === "JSXElement" ? Ee("openingElement") : Ee("openingFragment"), He = Oe.type === "JSXElement" ? Ee("closingElement") : Ee("closingFragment");
          if (Oe.children.length === 1 && Oe.children[0].type === "JSXExpressionContainer" && (Oe.children[0].expression.type === "TemplateLiteral" || Oe.children[0].expression.type === "TaggedTemplateExpression"))
            return [Xe, ...K.map(Ee, "children"), He];
          Oe.children = Oe.children.map((v) => it(v) ? { type: "JSXText", value: " ", raw: " " } : v);
          let Ct = Oe.children.some(A), Rt = Oe.children.filter((v) => v.type === "JSXExpressionContainer").length > 1, It = Oe.type === "JSXElement" && Oe.openingElement.attributes.length > 1, Et = C(Xe) || Ct || It || Rt, bt = K.getParentNode().rootMarker === "mdx", Se = ge.singleQuote ? "{' '}" : '{" "}', H = bt ? " " : g([Se, n], " "), _e = Oe.openingElement && Oe.openingElement.name && Oe.openingElement.name.name === "fbt", se = E(K, ge, Ee, H, _e), Te = Oe.children.some((v) => Ne(v));
          for (let v = se.length - 2; v >= 0; v--) {
            let oe = se[v] === "" && se[v + 1] === "", $e = se[v] === r && se[v + 1] === "" && se[v + 2] === r, Ke = (se[v] === n || se[v] === r) && se[v + 1] === "" && se[v + 2] === H, tt = se[v] === H && se[v + 1] === "" && (se[v + 2] === n || se[v + 2] === r), ht = se[v] === H && se[v + 1] === "" && se[v + 2] === H, Ye = se[v] === n && se[v + 1] === "" && se[v + 2] === r || se[v] === r && se[v + 1] === "" && se[v + 2] === n;
            $e && Te || oe || Ke || ht || Ye ? se.splice(v, 2) : tt && se.splice(v + 1, 2);
          }
          for (; se.length > 0 && i(w(se)); )
            se.pop();
          for (; se.length > 1 && i(se[0]) && i(se[1]); )
            se.shift(), se.shift();
          let pt = [];
          for (let [v, oe] of se.entries()) {
            if (oe === H) {
              if (v === 1 && se[v - 1] === "") {
                if (se.length === 2) {
                  pt.push(Se);
                  continue;
                }
                pt.push([Se, r]);
                continue;
              } else if (v === se.length - 1) {
                pt.push(Se);
                continue;
              } else if (se[v - 1] === "" && se[v - 2] === r) {
                pt.push(Se);
                continue;
              }
            }
            pt.push(oe), C(oe) && (Et = !0);
          }
          let ut = Te ? m(pt) : o(pt, { shouldBreak: !0 });
          if (bt)
            return ut;
          let je = o([Xe, c([r, ut]), r, He]);
          return Et ? je : y([o([Xe, ...se, He]), je]);
        }
        function E(K, ge, Ee, Oe, Xe) {
          let He = [];
          return K.each((Ct, Rt, It) => {
            let Et = Ct.getValue();
            if (Et.type === "JSXText") {
              let bt = N(Et);
              if (Ne(Et)) {
                let Se = bt.split(Pe);
                if (Se[0] === "") {
                  if (He.push(""), Se.shift(), /\n/.test(Se[0])) {
                    let _e = It[Rt + 1];
                    He.push(S(Xe, Se[1], Et, _e));
                  } else
                    He.push(Oe);
                  Se.shift();
                }
                let H;
                if (w(Se) === "" && (Se.pop(), H = Se.pop()), Se.length === 0)
                  return;
                for (let [_e, se] of Se.entries())
                  _e % 2 === 1 ? He.push(e) : He.push(se);
                if (H !== void 0)
                  if (/\n/.test(H)) {
                    let _e = It[Rt + 1];
                    He.push(S(Xe, w(He), Et, _e));
                  } else
                    He.push(Oe);
                else {
                  let _e = It[Rt + 1];
                  He.push(b(Xe, w(He), Et, _e));
                }
              } else
                /\n/.test(bt) ? bt.match(/\n/g).length > 1 && He.push("", r) : He.push("", Oe);
            } else {
              let bt = Ee();
              He.push(bt);
              let Se = It[Rt + 1];
              if (Se && Ne(Se)) {
                let H = ie(N(Se)).split(Pe)[0];
                He.push(b(Xe, H, Et, Se));
              } else
                He.push(r);
            }
          }, "children"), He;
        }
        function b(K, ge, Ee, Oe) {
          return K ? "" : Ee.type === "JSXElement" && !Ee.closingElement || Oe && Oe.type === "JSXElement" && !Oe.closingElement ? ge.length === 1 ? n : r : n;
        }
        function S(K, ge, Ee, Oe) {
          return K ? r : ge.length === 1 ? Ee.type === "JSXElement" && !Ee.closingElement || Oe && Oe.type === "JSXElement" && !Oe.closingElement ? r : n : r;
        }
        function B(K, ge, Ee) {
          let Oe = K.getParentNode();
          if (!Oe || { ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[Oe.type])
            return ge;
          let Xe = K.match(void 0, (Ct) => Ct.type === "ArrowFunctionExpression", x, (Ct) => Ct.type === "JSXExpressionContainer"), He = d(K, Ee);
          return o([He ? "" : g("("), c([n, ge]), n, He ? "" : g(")")], { shouldBreak: Xe });
        }
        function I(K, ge, Ee) {
          let Oe = K.getValue(), Xe = [];
          if (Xe.push(Ee("name")), Oe.value) {
            let He;
            if (P(Oe.value)) {
              let Ct = N(Oe.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: Rt, quote: It, regex: Et } = k(Ct, ge.jsxSingleQuote ? "'" : '"');
              Ct = Ct.replace(Et, Rt);
              let { leading: bt, trailing: Se } = K.call(() => s(K, ge), "value");
              He = [bt, It, Ct, It, Se];
            } else
              He = Ee("value");
            Xe.push("=", He);
          }
          return Xe;
        }
        function M(K, ge, Ee) {
          let Oe = K.getValue(), Xe = (He, Ct) => He.type === "JSXEmptyExpression" || !J(He) && (He.type === "ArrayExpression" || He.type === "ObjectExpression" || He.type === "ArrowFunctionExpression" || He.type === "AwaitExpression" && (Xe(He.argument, He) || He.argument.type === "JSXElement") || x(He) || He.type === "FunctionExpression" || He.type === "TemplateLiteral" || He.type === "TaggedTemplateExpression" || He.type === "DoExpression" || A(Ct) && (He.type === "ConditionalExpression" || _(He)));
          return Xe(Oe.expression, K.getParentNode(0)) ? o(["{", Ee("expression"), p, "}"]) : o(["{", c([n, Ee("expression")]), n, p, "}"]);
        }
        function U(K, ge, Ee) {
          let Oe = K.getValue(), Xe = Oe.name && J(Oe.name) || Oe.typeParameters && J(Oe.typeParameters);
          if (Oe.selfClosing && Oe.attributes.length === 0 && !Xe)
            return ["<", Ee("name"), Ee("typeParameters"), " />"];
          if (Oe.attributes && Oe.attributes.length === 1 && Oe.attributes[0].value && P(Oe.attributes[0].value) && !Oe.attributes[0].value.value.includes(`
`) && !Xe && !J(Oe.attributes[0]))
            return o(["<", Ee("name"), Ee("typeParameters"), " ", ...K.map(Ee, "attributes"), Oe.selfClosing ? " />" : ">"]);
          let He = Oe.attributes && Oe.attributes.some((Rt) => Rt.value && P(Rt.value) && Rt.value.value.includes(`
`)), Ct = ge.singleAttributePerLine && Oe.attributes.length > 1 ? r : e;
          return o(["<", Ee("name"), Ee("typeParameters"), c(K.map(() => [Ct, Ee()], "attributes")), ...q(Oe, ge, Xe)], { shouldBreak: He });
        }
        function q(K, ge, Ee) {
          return K.selfClosing ? [e, "/>"] : ee(K, ge, Ee) ? [">"] : [n, ">"];
        }
        function ee(K, ge, Ee) {
          let Oe = K.attributes.length > 0 && J(w(K.attributes), f.Trailing);
          return K.attributes.length === 0 && !Ee || (ge.bracketSameLine || ge.jsxBracketSameLine) && (!Ee || K.attributes.length > 0) && !Oe;
        }
        function j(K, ge, Ee) {
          let Oe = K.getValue(), Xe = [];
          Xe.push("</");
          let He = Ee("name");
          return J(Oe.name, f.Leading | f.Line) ? Xe.push(c([r, He]), r) : J(Oe.name, f.Leading | f.Block) ? Xe.push(" ", He) : Xe.push(He), Xe.push(">"), Xe;
        }
        function De(K, ge) {
          let Ee = K.getValue(), Oe = J(Ee), Xe = J(Ee, f.Line), He = Ee.type === "JSXOpeningFragment";
          return [He ? "<" : "</", c([Xe ? r : Oe && !He ? " " : "", a(K, ge, !0)]), Xe ? r : "", ">"];
        }
        function G(K, ge, Ee) {
          let Oe = t(K, h(K, ge, Ee), ge);
          return B(K, Oe, ge);
        }
        function R(K, ge) {
          let Ee = K.getValue(), Oe = J(Ee, f.Line);
          return [a(K, ge, !Oe), Oe ? r : ""];
        }
        function pe(K, ge, Ee) {
          let Oe = K.getValue();
          return ["{", K.call((Xe) => {
            let He = ["...", Ee()], Ct = Xe.getValue();
            return !J(Ct) || !F(Xe) ? He : [c([n, t(Xe, He, ge)]), n];
          }, Oe.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function ve(K, ge, Ee) {
          let Oe = K.getValue();
          if (Oe.type.startsWith("JSX"))
            switch (Oe.type) {
              case "JSXAttribute":
                return I(K, ge, Ee);
              case "JSXIdentifier":
                return String(Oe.name);
              case "JSXNamespacedName":
                return D(":", [Ee("namespace"), Ee("name")]);
              case "JSXMemberExpression":
                return D(".", [Ee("object"), Ee("property")]);
              case "JSXSpreadAttribute":
                return pe(K, ge, Ee);
              case "JSXSpreadChild":
                return pe(K, ge, Ee);
              case "JSXExpressionContainer":
                return M(K, ge, Ee);
              case "JSXFragment":
              case "JSXElement":
                return G(K, ge, Ee);
              case "JSXOpeningElement":
                return U(K, ge, Ee);
              case "JSXClosingElement":
                return j(K, ge, Ee);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return De(K, ge);
              case "JSXEmptyExpression":
                return R(K, ge);
              case "JSXText":
                throw new Error("JSXText should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(Oe.type)}.`);
            }
        }
        var fe = ` 
\r	`, Pe = new RegExp("([" + fe + "]+)"), X = new RegExp("[^" + fe + "]"), ie = (K) => K.replace(new RegExp("(?:^" + Pe.source + "|" + Pe.source + "$)"), "");
        function Be(K) {
          if (K.children.length === 0)
            return !0;
          if (K.children.length > 1)
            return !1;
          let ge = K.children[0];
          return ge.type === "JSXText" && !Ne(ge);
        }
        function Ne(K) {
          return K.type === "JSXText" && (X.test(N(K)) || !/\n/.test(N(K)));
        }
        function it(K) {
          return K.type === "JSXExpressionContainer" && P(K.expression) && K.expression.value === " " && !J(K.expression);
        }
        function ae(K) {
          let ge = K.getValue(), Ee = K.getParentNode();
          if (!Ee || !ge || !A(ge) || !A(Ee))
            return !1;
          let Oe = Ee.children.indexOf(ge), Xe = null;
          for (let He = Oe; He > 0; He--) {
            let Ct = Ee.children[He - 1];
            if (!(Ct.type === "JSXText" && !Ne(Ct))) {
              Xe = Ct;
              break;
            }
          }
          return Xe && Xe.type === "JSXExpressionContainer" && Xe.expression.type === "JSXEmptyExpression" && T(Xe.expression);
        }
        l.exports = { hasJsxIgnoreComment: ae, printJsx: ve };
      } }), Mr = O({ "src/language-js/print/misc.js"(u, l) {
        ne();
        var { isNonEmptyArray: t } = Ut(), { builders: { indent: a, join: s, line: e } } = wt(), { isFlowAnnotationComment: r } = ur();
        function n(w) {
          let k = w.getValue();
          return !k.optional || k.type === "Identifier" && k === w.getParentNode().key ? "" : k.type === "OptionalCallExpression" || k.type === "OptionalMemberExpression" && k.computed ? "?." : "?";
        }
        function o(w) {
          return w.getValue().definite || w.match(void 0, (k, A) => A === "id" && k.type === "VariableDeclarator" && k.definite) ? "!" : "";
        }
        function c(w, k, A) {
          let N = w.getValue();
          return N.typeArguments ? A("typeArguments") : N.typeParameters ? A("typeParameters") : "";
        }
        function y(w, k, A) {
          let N = w.getValue();
          if (!N.typeAnnotation)
            return "";
          let x = w.getParentNode(), P = x.type === "DeclareFunction" && x.id === N;
          return r(k.originalText, N.typeAnnotation) ? [" /*: ", A("typeAnnotation"), " */"] : [P ? "" : ": ", A("typeAnnotation")];
        }
        function m(w, k, A) {
          return ["::", A("callee")];
        }
        function g(w, k, A) {
          let N = w.getValue();
          return t(N.modifiers) ? [s(" ", w.map(A, "modifiers")), " "] : "";
        }
        function p(w, k, A) {
          return w.type === "EmptyStatement" ? ";" : w.type === "BlockStatement" || A ? [" ", k] : a([e, k]);
        }
        function D(w, k, A) {
          return ["...", A("argument"), y(w, k, A)];
        }
        function C(w, k) {
          let A = w.slice(1, -1);
          if (A.includes('"') || A.includes("'"))
            return w;
          let N = k.singleQuote ? "'" : '"';
          return N + A + N;
        }
        l.exports = { printOptionalToken: n, printDefiniteToken: o, printFunctionTypeParameters: c, printBindExpressionCallee: m, printTypeScriptModifiers: g, printTypeAnnotation: y, printRestSpread: D, adjustClause: p, printDirective: C };
      } }), Du = O({ "src/language-js/print/array.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { builders: { line: a, softline: s, hardline: e, group: r, indent: n, ifBreak: o, fill: c } } = wt(), { getLast: y, hasNewline: m } = Ut(), { shouldPrintComma: g, hasComment: p, CommentCheckFlags: D, isNextLineEmpty: C, isNumericLiteral: w, isSignedNumericLiteral: k } = ur(), { locStart: A } = or(), { printOptionalToken: N, printTypeAnnotation: x } = Mr();
        function P(T, d, F) {
          let i = T.getValue(), h = [], E = i.type === "TupleExpression" ? "#[" : "[", b = "]";
          if (i.elements.length === 0)
            p(i, D.Dangling) ? h.push(r([E, t(T, d), s, b])) : h.push(E, b);
          else {
            let S = y(i.elements), B = !(S && S.type === "RestElement"), I = S === null, M = Symbol("array"), U = !d.__inJestEach && i.elements.length > 1 && i.elements.every((j, De, G) => {
              let R = j && j.type;
              if (R !== "ArrayExpression" && R !== "ObjectExpression")
                return !1;
              let pe = G[De + 1];
              if (pe && R !== pe.type)
                return !1;
              let ve = R === "ArrayExpression" ? "elements" : "properties";
              return j[ve] && j[ve].length > 1;
            }), q = _(i, d), ee = B ? I ? "," : g(d) ? q ? o(",", "", { groupId: M }) : o(",") : "" : "";
            h.push(r([E, n([s, q ? f(T, d, F, ee) : [J(T, d, "elements", F), ee], t(T, d, !0)]), s, b], { shouldBreak: U, id: M }));
          }
          return h.push(N(T), x(T, d, F)), h;
        }
        function _(T, d) {
          return T.elements.length > 1 && T.elements.every((F) => F && (w(F) || k(F) && !p(F.argument)) && !p(F, D.Trailing | D.Line, (i) => !m(d.originalText, A(i), { backwards: !0 })));
        }
        function J(T, d, F, i) {
          let h = [], E = [];
          return T.each((b) => {
            h.push(E, r(i())), E = [",", a], b.getValue() && C(b.getValue(), d) && E.push(s);
          }, F), h;
        }
        function f(T, d, F, i) {
          let h = [];
          return T.each((E, b, S) => {
            let B = b === S.length - 1;
            h.push([F(), B ? i : ","]), B || h.push(C(E.getValue(), d) ? [e, e] : p(S[b + 1], D.Leading | D.Line) ? e : a);
          }, "elements"), c(h);
        }
        l.exports = { printArray: P, printArrayItems: J, isConciselyPrintedArray: _ };
      } }), js = O({ "src/language-js/print/call-arguments.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { getLast: a, getPenultimate: s } = Ut(), { getFunctionParameters: e, hasComment: r, CommentCheckFlags: n, isFunctionCompositionArgs: o, isJsxNode: c, isLongCurriedCallExpression: y, shouldPrintComma: m, getCallArguments: g, iterateCallArgumentsPath: p, isNextLineEmpty: D, isCallExpression: C, isStringLiteral: w, isObjectProperty: k, isTSTypeExpression: A } = ur(), { builders: { line: N, hardline: x, softline: P, group: _, indent: J, conditionalGroup: f, ifBreak: T, breakParent: d }, utils: { willBreak: F } } = wt(), { ArgExpansionBailout: i } = Fn(), { isConciselyPrintedArray: h } = Du();
        function E(q, ee, j) {
          let De = q.getValue(), G = De.type === "ImportExpression", R = g(De);
          if (R.length === 0)
            return ["(", t(q, ee, !0), ")"];
          if (I(R))
            return ["(", j(["arguments", 0]), ", ", j(["arguments", 1]), ")"];
          let pe = !1, ve = !1, fe = R.length - 1, Pe = [];
          p(q, (ae, K) => {
            let ge = ae.getNode(), Ee = [j()];
            K === fe || (D(ge, ee) ? (K === 0 && (ve = !0), pe = !0, Ee.push(",", x, x)) : Ee.push(",", N)), Pe.push(Ee);
          });
          let X = !(G || De.callee && De.callee.type === "Import") && m(ee, "all") ? "," : "";
          function ie() {
            return _(["(", J([N, ...Pe]), X, N, ")"], { shouldBreak: !0 });
          }
          if (pe || q.getParentNode().type !== "Decorator" && o(R))
            return ie();
          let Be = B(R), Ne = S(R, ee);
          if (Be || Ne) {
            if (Be ? Pe.slice(1).some(F) : Pe.slice(0, -1).some(F))
              return ie();
            let ae = [];
            try {
              q.try(() => {
                p(q, (K, ge) => {
                  Be && ge === 0 && (ae = [[j([], { expandFirstArg: !0 }), Pe.length > 1 ? "," : "", ve ? x : N, ve ? x : ""], ...Pe.slice(1)]), Ne && ge === fe && (ae = [...Pe.slice(0, -1), j([], { expandLastArg: !0 })]);
                });
              });
            } catch (K) {
              if (K instanceof i)
                return ie();
              throw K;
            }
            return [Pe.some(F) ? d : "", f([["(", ...ae, ")"], Be ? ["(", _(ae[0], { shouldBreak: !0 }), ...ae.slice(1), ")"] : ["(", ...Pe.slice(0, -1), _(a(ae), { shouldBreak: !0 }), ")"], ie()])];
          }
          let it = ["(", J([P, ...Pe]), T(X), P, ")"];
          return y(q) ? it : _(it, { shouldBreak: Pe.some(F) || pe });
        }
        function b(q) {
          let ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return q.type === "ObjectExpression" && (q.properties.length > 0 || r(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || r(q)) || q.type === "TSTypeAssertion" && b(q.expression) || A(q) && b(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || M(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && b(q.body, !0) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !ee && (C(q.body) || q.body.type === "ConditionalExpression") || c(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression";
        }
        function S(q, ee) {
          let j = a(q), De = s(q);
          return !r(j, n.Leading) && !r(j, n.Trailing) && b(j) && (!De || De.type !== j.type) && (q.length !== 2 || De.type !== "ArrowFunctionExpression" || j.type !== "ArrayExpression") && !(q.length > 1 && j.type === "ArrayExpression" && h(j, ee));
        }
        function B(q) {
          if (q.length !== 2)
            return !1;
          let [ee, j] = q;
          return ee.type === "ModuleExpression" && U(j) ? !0 : !r(ee) && (ee.type === "FunctionExpression" || ee.type === "ArrowFunctionExpression" && ee.body.type === "BlockStatement") && j.type !== "FunctionExpression" && j.type !== "ArrowFunctionExpression" && j.type !== "ConditionalExpression" && !b(j);
        }
        function I(q) {
          return q.length === 2 && q[0].type === "ArrowFunctionExpression" && e(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some((ee) => r(ee));
        }
        function M(q) {
          return q.type === "BlockStatement" && (q.body.some((ee) => ee.type !== "EmptyStatement") || r(q, n.Dangling));
        }
        function U(q) {
          return q.type === "ObjectExpression" && q.properties.length === 1 && k(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && w(q.properties[0].value) && q.properties[0].value.value === "module";
        }
        l.exports = E;
      } }), Ls = O({ "src/language-js/print/member.js"(u, l) {
        ne();
        var { builders: { softline: t, group: a, indent: s, label: e } } = wt(), { isNumericLiteral: r, isMemberExpression: n, isCallExpression: o } = ur(), { printOptionalToken: c } = Mr();
        function y(g, p, D) {
          let C = g.getValue(), w = g.getParentNode(), k, A = 0;
          do
            k = g.getParentNode(A), A++;
          while (k && (n(k) || k.type === "TSNonNullExpression"));
          let N = D("object"), x = m(g, p, D), P = k && (k.type === "NewExpression" || k.type === "BindExpression" || k.type === "AssignmentExpression" && k.left.type !== "Identifier") || C.computed || C.object.type === "Identifier" && C.property.type === "Identifier" && !n(w) || (w.type === "AssignmentExpression" || w.type === "VariableDeclarator") && (o(C.object) && C.object.arguments.length > 0 || C.object.type === "TSNonNullExpression" && o(C.object.expression) && C.object.expression.arguments.length > 0 || N.label === "member-chain");
          return e(N.label === "member-chain" ? "member-chain" : "member", [N, P ? x : a(s([t, x]))]);
        }
        function m(g, p, D) {
          let C = D("property"), w = g.getValue(), k = c(g);
          return w.computed ? !w.property || r(w.property) ? [k, "[", C, "]"] : a([k, "[", s([t, C]), t, "]"]) : [k, ".", C];
        }
        l.exports = { printMemberExpression: y, printMemberLookup: m };
      } }), Aa = O({ "src/language-js/print/member-chain.js"(u, l) {
        ne();
        var { printComments: t } = Qt(), { getLast: a, isNextLineEmptyAfterIndex: s, getNextNonSpaceNonCommentCharacterIndex: e } = Ut(), r = Ln(), { isCallExpression: n, isMemberExpression: o, isFunctionOrArrowExpression: c, isLongCurriedCallExpression: y, isMemberish: m, isNumericLiteral: g, isSimpleCallArgument: p, hasComment: D, CommentCheckFlags: C, isNextLineEmpty: w } = ur(), { locEnd: k } = or(), { builders: { join: A, hardline: N, group: x, indent: P, conditionalGroup: _, breakParent: J, label: f }, utils: { willBreak: T } } = wt(), d = js(), { printMemberLookup: F } = Ls(), { printOptionalToken: i, printFunctionTypeParameters: h, printBindExpressionCallee: E } = Mr();
        function b(S, B, I) {
          let M = S.getParentNode(), U = !M || M.type === "ExpressionStatement", q = [];
          function ee(Et) {
            let { originalText: bt } = B, Se = e(bt, Et, k);
            return bt.charAt(Se) === ")" ? Se !== !1 && s(bt, Se + 1) : w(Et, B);
          }
          function j(Et) {
            let bt = Et.getValue();
            n(bt) && (m(bt.callee) || n(bt.callee)) ? (q.unshift({ node: bt, printed: [t(Et, [i(Et), h(Et, B, I), d(Et, B, I)], B), ee(bt) ? N : ""] }), Et.call((Se) => j(Se), "callee")) : m(bt) ? (q.unshift({ node: bt, needsParens: r(Et, B), printed: t(Et, o(bt) ? F(Et, B, I) : E(Et, B, I), B) }), Et.call((Se) => j(Se), "object")) : bt.type === "TSNonNullExpression" ? (q.unshift({ node: bt, printed: t(Et, "!", B) }), Et.call((Se) => j(Se), "expression")) : q.unshift({ node: bt, printed: I() });
          }
          let De = S.getValue();
          q.unshift({ node: De, printed: [i(S), h(S, B, I), d(S, B, I)] }), De.callee && S.call((Et) => j(Et), "callee");
          let G = [], R = [q[0]], pe = 1;
          for (; pe < q.length && (q[pe].node.type === "TSNonNullExpression" || n(q[pe].node) || o(q[pe].node) && q[pe].node.computed && g(q[pe].node.property)); ++pe)
            R.push(q[pe]);
          if (!n(q[0].node))
            for (; pe + 1 < q.length && m(q[pe].node) && m(q[pe + 1].node); ++pe)
              R.push(q[pe]);
          G.push(R), R = [];
          let ve = !1;
          for (; pe < q.length; ++pe) {
            if (ve && m(q[pe].node)) {
              if (q[pe].node.computed && g(q[pe].node.property)) {
                R.push(q[pe]);
                continue;
              }
              G.push(R), R = [], ve = !1;
            }
            (n(q[pe].node) || q[pe].node.type === "ImportExpression") && (ve = !0), R.push(q[pe]), D(q[pe].node, C.Trailing) && (G.push(R), R = [], ve = !1);
          }
          R.length > 0 && G.push(R);
          function fe(Et) {
            return /^[A-Z]|^[$_]+$/.test(Et);
          }
          function Pe(Et) {
            return Et.length <= B.tabWidth;
          }
          function X(Et) {
            let bt = Et[1].length > 0 && Et[1][0].node.computed;
            if (Et[0].length === 1) {
              let H = Et[0][0].node;
              return H.type === "ThisExpression" || H.type === "Identifier" && (fe(H.name) || U && Pe(H.name) || bt);
            }
            let Se = a(Et[0]).node;
            return o(Se) && Se.property.type === "Identifier" && (fe(Se.property.name) || bt);
          }
          let ie = G.length >= 2 && !D(G[1][0].node) && X(G);
          function Be(Et) {
            let bt = Et.map((Se) => Se.printed);
            return Et.length > 0 && a(Et).needsParens ? ["(", ...bt, ")"] : bt;
          }
          function Ne(Et) {
            return Et.length === 0 ? "" : P(x([N, A(N, Et.map(Be))]));
          }
          let it = G.map(Be), ae = it, K = ie ? 3 : 2, ge = G.flat(), Ee = ge.slice(1, -1).some((Et) => D(Et.node, C.Leading)) || ge.slice(0, -1).some((Et) => D(Et.node, C.Trailing)) || G[K] && D(G[K][0].node, C.Leading);
          if (G.length <= K && !Ee)
            return y(S) ? ae : x(ae);
          let Oe = a(G[ie ? 1 : 0]).node, Xe = !n(Oe) && ee(Oe), He = [Be(G[0]), ie ? G.slice(1, 2).map(Be) : "", Xe ? N : "", Ne(G.slice(ie ? 2 : 1))], Ct = q.map((Et) => {
            let { node: bt } = Et;
            return bt;
          }).filter(n);
          function Rt() {
            let Et = a(a(G)).node, bt = a(it);
            return n(Et) && T(bt) && Ct.slice(0, -1).some((Se) => Se.arguments.some(c));
          }
          let It;
          return Ee || Ct.length > 2 && Ct.some((Et) => !Et.arguments.every((bt) => p(bt, 0))) || it.slice(0, -1).some(T) || Rt() ? It = x(He) : It = [T(ae) || Xe ? J : "", _([ae, He])], f("member-chain", It);
        }
        l.exports = b;
      } }), Os = O({ "src/language-js/print/call-expression.js"(u, l) {
        ne();
        var { builders: { join: t, group: a } } = wt(), s = Ln(), { getCallArguments: e, hasFlowAnnotationComment: r, isCallExpression: n, isMemberish: o, isStringLiteral: c, isTemplateOnItsOwnLine: y, isTestCall: m, iterateCallArgumentsPath: g } = ur(), p = Aa(), D = js(), { printOptionalToken: C, printFunctionTypeParameters: w } = Mr();
        function k(N, x, P) {
          let _ = N.getValue(), J = N.getParentNode(), f = _.type === "NewExpression", T = _.type === "ImportExpression", d = C(N), F = e(_);
          if (F.length > 0 && (!T && !f && A(_, J) || F.length === 1 && y(F[0], x.originalText) || !f && m(_, J))) {
            let E = [];
            return g(N, () => {
              E.push(P());
            }), [f ? "new " : "", P("callee"), d, w(N, x, P), "(", t(", ", E), ")"];
          }
          let i = (x.parser === "babel" || x.parser === "babel-flow") && _.callee && _.callee.type === "Identifier" && r(_.callee.trailingComments);
          if (i && (_.callee.trailingComments[0].printed = !0), !T && !f && o(_.callee) && !N.call((E) => s(E, x), "callee"))
            return p(N, x, P);
          let h = [f ? "new " : "", T ? "import" : P("callee"), d, i ? `/*:: ${_.callee.trailingComments[0].value.slice(2).trim()} */` : "", w(N, x, P), D(N, x, P)];
          return T || n(_.callee) ? a(h) : h;
        }
        function A(N, x) {
          if (N.callee.type !== "Identifier")
            return !1;
          if (N.callee.name === "require")
            return !0;
          if (N.callee.name === "define") {
            let P = e(N);
            return x.type === "ExpressionStatement" && (P.length === 1 || P.length === 2 && P[0].type === "ArrayExpression" || P.length === 3 && c(P[0]) && P[1].type === "ArrayExpression");
          }
          return !1;
        }
        l.exports = { printCallExpression: k };
      } }), du = O({ "src/language-js/print/assignment.js"(u, l) {
        ne();
        var { isNonEmptyArray: t, getStringWidth: a } = Ut(), { builders: { line: s, group: e, indent: r, indentIfBreak: n, lineSuffixBoundary: o }, utils: { cleanDoc: c, willBreak: y, canBreak: m } } = wt(), { hasLeadingOwnLineComment: g, isBinaryish: p, isStringLiteral: D, isLiteral: C, isNumericLiteral: w, isCallExpression: k, isMemberExpression: A, getCallArguments: N, rawText: x, hasComment: P, isSignedNumericLiteral: _, isObjectProperty: J } = ur(), { shouldInlineLogicalExpression: f } = as(), { printCallExpression: T } = Os();
        function d(X, ie, Be, Ne, it, ae) {
          let K = h(X, ie, Be, Ne, ae), ge = Be(ae, { assignmentLayout: K });
          switch (K) {
            case "break-after-operator":
              return e([e(Ne), it, e(r([s, ge]))]);
            case "never-break-after-operator":
              return e([e(Ne), it, " ", ge]);
            case "fluid": {
              let Ee = Symbol("assignment");
              return e([e(Ne), it, e(r(s), { id: Ee }), o, n(ge, { groupId: Ee })]);
            }
            case "break-lhs":
              return e([Ne, it, " ", e(ge)]);
            case "chain":
              return [e(Ne), it, s, ge];
            case "chain-tail":
              return [e(Ne), it, r([s, ge])];
            case "chain-tail-arrow-chain":
              return [e(Ne), it, ge];
            case "only-left":
              return Ne;
          }
        }
        function F(X, ie, Be) {
          let Ne = X.getValue();
          return d(X, ie, Be, Be("left"), [" ", Ne.operator], "right");
        }
        function i(X, ie, Be) {
          return d(X, ie, Be, Be("id"), " =", "init");
        }
        function h(X, ie, Be, Ne, it) {
          let ae = X.getValue(), K = ae[it];
          if (!K)
            return "only-left";
          let ge = !S(K);
          if (X.match(S, B, (Oe) => !ge || Oe.type !== "ExpressionStatement" && Oe.type !== "VariableDeclaration"))
            return ge ? K.type === "ArrowFunctionExpression" && K.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!ge && S(K.right) || g(ie.originalText, K))
            return "break-after-operator";
          if (K.type === "CallExpression" && K.callee.name === "require" || ie.parser === "json5" || ie.parser === "json")
            return "never-break-after-operator";
          if (b(ae) || I(ae) || q(ae) || ee(ae) && m(Ne))
            return "break-lhs";
          let Ee = ve(ae, Ne, ie);
          return X.call(() => E(X, ie, Be, Ee), it) ? "break-after-operator" : Ee || K.type === "TemplateLiteral" || K.type === "TaggedTemplateExpression" || K.type === "BooleanLiteral" || w(K) || K.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function E(X, ie, Be, Ne) {
          let it = X.getValue();
          if (p(it) && !f(it))
            return !0;
          switch (it.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return !0;
            case "ConditionalExpression": {
              let { test: ge } = it;
              return p(ge) && !f(ge);
            }
            case "ClassExpression":
              return t(it.decorators);
          }
          if (Ne)
            return !1;
          let ae = it, K = [];
          for (; ; )
            if (ae.type === "UnaryExpression")
              ae = ae.argument, K.push("argument");
            else if (ae.type === "TSNonNullExpression")
              ae = ae.expression, K.push("expression");
            else
              break;
          return !!(D(ae) || X.call(() => G(X, ie, Be), ...K));
        }
        function b(X) {
          if (B(X)) {
            let ie = X.left || X.id;
            return ie.type === "ObjectPattern" && ie.properties.length > 2 && ie.properties.some((Be) => J(Be) && (!Be.shorthand || Be.value && Be.value.type === "AssignmentPattern"));
          }
          return !1;
        }
        function S(X) {
          return X.type === "AssignmentExpression";
        }
        function B(X) {
          return S(X) || X.type === "VariableDeclarator";
        }
        function I(X) {
          let ie = M(X);
          if (t(ie)) {
            let Be = X.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (ie.length > 1 && ie.some((Ne) => Ne[Be] || Ne.default))
              return !0;
          }
          return !1;
        }
        function M(X) {
          return U(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function U(X) {
          return X.type === "TSTypeAliasDeclaration" || X.type === "TypeAlias";
        }
        function q(X) {
          if (X.type !== "VariableDeclarator")
            return !1;
          let { typeAnnotation: ie } = X.id;
          if (!ie || !ie.typeAnnotation)
            return !1;
          let Be = j(ie.typeAnnotation);
          return t(Be) && Be.length > 1 && Be.some((Ne) => t(j(Ne)) || Ne.type === "TSConditionalType");
        }
        function ee(X) {
          return X.type === "VariableDeclarator" && X.init && X.init.type === "ArrowFunctionExpression";
        }
        function j(X) {
          return De(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function De(X) {
          return X.type === "TSTypeReference" || X.type === "GenericTypeAnnotation";
        }
        function G(X, ie, Be) {
          let Ne = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, it = X.getValue(), ae = () => G(X, ie, Be, !0);
          if (it.type === "TSNonNullExpression")
            return X.call(ae, "expression");
          if (k(it)) {
            if (T(X, ie, Be).label === "member-chain")
              return !1;
            let K = N(it);
            return !(K.length === 0 || K.length === 1 && pe(K[0], ie)) || fe(it, Be) ? !1 : X.call(ae, "callee");
          }
          return A(it) ? X.call(ae, "object") : Ne && (it.type === "Identifier" || it.type === "ThisExpression");
        }
        var R = 0.25;
        function pe(X, ie) {
          let { printWidth: Be } = ie;
          if (P(X))
            return !1;
          let Ne = Be * R;
          if (X.type === "ThisExpression" || X.type === "Identifier" && X.name.length <= Ne || _(X) && !P(X.argument))
            return !0;
          let it = X.type === "Literal" && "regex" in X && X.regex.pattern || X.type === "RegExpLiteral" && X.pattern;
          return it ? it.length <= Ne : D(X) ? x(X).length <= Ne : X.type === "TemplateLiteral" ? X.expressions.length === 0 && X.quasis[0].value.raw.length <= Ne && !X.quasis[0].value.raw.includes(`
`) : C(X);
        }
        function ve(X, ie, Be) {
          if (!J(X))
            return !1;
          ie = c(ie);
          let Ne = 3;
          return typeof ie == "string" && a(ie) < Be.tabWidth + Ne;
        }
        function fe(X, ie) {
          let Be = Pe(X);
          if (t(Be)) {
            if (Be.length > 1)
              return !0;
            if (Be.length === 1) {
              let it = Be[0];
              if (it.type === "TSUnionType" || it.type === "UnionTypeAnnotation" || it.type === "TSIntersectionType" || it.type === "IntersectionTypeAnnotation" || it.type === "TSTypeLiteral" || it.type === "ObjectTypeAnnotation")
                return !0;
            }
            let Ne = X.typeParameters ? "typeParameters" : "typeArguments";
            if (y(ie(Ne)))
              return !0;
          }
          return !1;
        }
        function Pe(X) {
          return X.typeParameters && X.typeParameters.params || X.typeArguments && X.typeArguments.params;
        }
        l.exports = { printVariableDeclarator: i, printAssignmentExpression: F, printAssignment: d, isArrowFunctionVariableDeclarator: ee };
      } }), Zu = O({ "src/language-js/print/function-parameters.js"(u, l) {
        ne();
        var { getNextNonSpaceNonCommentCharacter: t } = Ut(), { printDanglingComments: a } = Qt(), { builders: { line: s, hardline: e, softline: r, group: n, indent: o, ifBreak: c }, utils: { removeLines: y, willBreak: m } } = wt(), { getFunctionParameters: g, iterateFunctionParametersPath: p, isSimpleType: D, isTestCall: C, isTypeAnnotationAFunction: w, isObjectType: k, isObjectTypePropertyAFunction: A, hasRestParameter: N, shouldPrintComma: x, hasComment: P, isNextLineEmpty: _ } = ur(), { locEnd: J } = or(), { ArgExpansionBailout: f } = Fn(), { printFunctionTypeParameters: T } = Mr();
        function d(E, b, S, B, I) {
          let M = E.getValue(), U = g(M), q = I ? T(E, S, b) : "";
          if (U.length === 0)
            return [q, "(", a(E, S, !0, (pe) => t(S.originalText, pe, J) === ")"), ")"];
          let ee = E.getParentNode(), j = C(ee), De = F(M), G = [];
          if (p(E, (pe, ve) => {
            let fe = ve === U.length - 1;
            fe && M.rest && G.push("..."), G.push(b()), !fe && (G.push(","), j || De ? G.push(" ") : _(U[ve], S) ? G.push(e, e) : G.push(s));
          }), B) {
            if (m(q) || m(G))
              throw new f();
            return n([y(q), "(", y(G), ")"]);
          }
          let R = U.every((pe) => !pe.decorators);
          return De && R ? [q, "(", ...G, ")"] : j ? [q, "(", ...G, ")"] : (A(ee) || w(ee) || ee.type === "TypeAlias" || ee.type === "UnionTypeAnnotation" || ee.type === "TSUnionType" || ee.type === "IntersectionTypeAnnotation" || ee.type === "FunctionTypeAnnotation" && ee.returnType === M) && U.length === 1 && U[0].name === null && M.this !== U[0] && U[0].typeAnnotation && M.typeParameters === null && D(U[0].typeAnnotation) && !M.rest ? S.arrowParens === "always" ? ["(", ...G, ")"] : G : [q, "(", o([r, ...G]), c(!N(M) && x(S, "all") ? "," : ""), r, ")"];
        }
        function F(E) {
          if (!E)
            return !1;
          let b = g(E);
          if (b.length !== 1)
            return !1;
          let [S] = b;
          return !P(S) && (S.type === "ObjectPattern" || S.type === "ArrayPattern" || S.type === "Identifier" && S.typeAnnotation && (S.typeAnnotation.type === "TypeAnnotation" || S.typeAnnotation.type === "TSTypeAnnotation") && k(S.typeAnnotation.typeAnnotation) || S.type === "FunctionTypeParam" && k(S.typeAnnotation) || S.type === "AssignmentPattern" && (S.left.type === "ObjectPattern" || S.left.type === "ArrayPattern") && (S.right.type === "Identifier" || S.right.type === "ObjectExpression" && S.right.properties.length === 0 || S.right.type === "ArrayExpression" && S.right.elements.length === 0));
        }
        function i(E) {
          let b;
          return E.returnType ? (b = E.returnType, b.typeAnnotation && (b = b.typeAnnotation)) : E.typeAnnotation && (b = E.typeAnnotation), b;
        }
        function h(E, b) {
          let S = i(E);
          if (!S)
            return !1;
          let B = E.typeParameters && E.typeParameters.params;
          if (B) {
            if (B.length > 1)
              return !1;
            if (B.length === 1) {
              let I = B[0];
              if (I.constraint || I.default)
                return !1;
            }
          }
          return g(E).length === 1 && (k(S) || m(b));
        }
        l.exports = { printFunctionParameters: d, shouldHugFunctionParameters: F, shouldGroupFunctionParameters: h };
      } }), ei = O({ "src/language-js/print/type-annotation.js"(u, l) {
        ne();
        var { printComments: t, printDanglingComments: a } = Qt(), { isNonEmptyArray: s } = Ut(), { builders: { group: e, join: r, line: n, softline: o, indent: c, align: y, ifBreak: m } } = wt(), g = Ln(), { locStart: p } = or(), { isSimpleType: D, isObjectType: C, hasLeadingOwnLineComment: w, isObjectTypePropertyAFunction: k, shouldPrintComma: A } = ur(), { printAssignment: N } = du(), { printFunctionParameters: x, shouldGroupFunctionParameters: P } = Zu(), { printArrayItems: _ } = Du();
        function J(S) {
          if (D(S) || C(S))
            return !0;
          if (S.type === "UnionTypeAnnotation" || S.type === "TSUnionType") {
            let B = S.types.filter((M) => M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword").length, I = S.types.some((M) => M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference");
            if (S.types.length - 1 === B && I)
              return !0;
          }
          return !1;
        }
        function f(S, B, I) {
          let M = B.semi ? ";" : "", U = S.getValue(), q = [];
          return q.push("opaque type ", I("id"), I("typeParameters")), U.supertype && q.push(": ", I("supertype")), U.impltype && q.push(" = ", I("impltype")), q.push(M), q;
        }
        function T(S, B, I) {
          let M = B.semi ? ";" : "", U = S.getValue(), q = [];
          U.declare && q.push("declare "), q.push("type ", I("id"), I("typeParameters"));
          let ee = U.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [N(S, B, I, q, " =", ee), M];
        }
        function d(S, B, I) {
          let M = S.getValue(), U = S.map(I, "types"), q = [], ee = !1;
          for (let j = 0; j < U.length; ++j)
            j === 0 ? q.push(U[j]) : C(M.types[j - 1]) && C(M.types[j]) ? q.push([" & ", ee ? c(U[j]) : U[j]]) : !C(M.types[j - 1]) && !C(M.types[j]) ? q.push(c([" &", n, U[j]])) : (j > 1 && (ee = !0), q.push(" & ", j > 1 ? c(U[j]) : U[j]));
          return e(q);
        }
        function F(S, B, I) {
          let M = S.getValue(), U = S.getParentNode(), q = U.type !== "TypeParameterInstantiation" && U.type !== "TSTypeParameterInstantiation" && U.type !== "GenericTypeAnnotation" && U.type !== "TSTypeReference" && U.type !== "TSTypeAssertion" && U.type !== "TupleTypeAnnotation" && U.type !== "TSTupleType" && !(U.type === "FunctionTypeParam" && !U.name && S.getParentNode(1).this !== U) && !((U.type === "TypeAlias" || U.type === "VariableDeclarator" || U.type === "TSTypeAliasDeclaration") && w(B.originalText, M)), ee = J(M), j = S.map((R) => {
            let pe = I();
            return ee || (pe = y(2, pe)), t(R, pe, B);
          }, "types");
          if (ee)
            return r(" | ", j);
          let De = q && !w(B.originalText, M), G = [m([De ? n : "", "| "]), r([n, "| "], j)];
          return g(S, B) ? e([c(G), o]) : U.type === "TupleTypeAnnotation" && U.types.length > 1 || U.type === "TSTupleType" && U.elementTypes.length > 1 ? e([c([m(["(", o]), G]), o, m(")")]) : e(q ? c(G) : G);
        }
        function i(S, B, I) {
          let M = S.getValue(), U = [], q = S.getParentNode(0), ee = S.getParentNode(1), j = S.getParentNode(2), De = M.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && p(q) === p(M) || q.type === "ObjectTypeCallProperty" || j && j.type === "DeclareFunction"), G = De && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), R = G && De && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && ee.type === "ArrowFunctionExpression";
          k(q) && (De = !0, G = !0), R && U.push("(");
          let pe = x(S, I, B, !1, !0), ve = M.returnType || M.predicate || M.typeAnnotation ? [De ? " => " : ": ", I("returnType"), I("predicate"), I("typeAnnotation")] : "", fe = P(M, ve);
          return U.push(fe ? e(pe) : pe), ve && U.push(ve), R && U.push(")"), e(U);
        }
        function h(S, B, I) {
          let M = S.getValue(), U = M.type === "TSTupleType" ? "elementTypes" : "types", q = M[U], ee = s(q), j = ee ? o : "";
          return e(["[", c([j, _(S, B, U, I)]), m(ee && A(B, "all") ? "," : ""), a(S, B, !0), j, "]"]);
        }
        function E(S, B, I) {
          let M = S.getValue(), U = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "[";
          return [I("objectType"), U, I("indexType"), "]"];
        }
        function b(S, B, I) {
          let M = S.getValue();
          return [M.postfix ? "" : I, B("typeAnnotation"), M.postfix ? I : ""];
        }
        l.exports = { printOpaqueType: f, printTypeAlias: T, printIntersectionType: d, printUnionType: F, printFunctionType: i, printTupleType: h, printIndexedAccessType: E, shouldHugType: J, printJSDocType: b };
      } }), ti = O({ "src/language-js/print/type-parameters.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { builders: { join: a, line: s, hardline: e, softline: r, group: n, indent: o, ifBreak: c } } = wt(), { isTestCall: y, hasComment: m, CommentCheckFlags: g, isTSXFile: p, shouldPrintComma: D, getFunctionParameters: C, isObjectType: w, getTypeScriptMappedTypeModifier: k } = ur(), { createGroupIdMapper: A } = Ut(), { shouldHugType: N } = ei(), { isArrowFunctionVariableDeclarator: x } = du(), P = A("typeParameters");
        function _(T, d, F, i) {
          let h = T.getValue();
          if (!h[i])
            return "";
          if (!Array.isArray(h[i]))
            return F(i);
          let E = T.getNode(2), b = E && y(E), S = T.match((I) => !(I[i].length === 1 && w(I[i][0])), void 0, (I, M) => M === "typeAnnotation", (I) => I.type === "Identifier", x);
          if (h[i].length === 0 || !S && (b || h[i].length === 1 && (h[i][0].type === "NullableTypeAnnotation" || N(h[i][0]))))
            return ["<", a(", ", T.map(F, i)), J(T, d), ">"];
          let B = h.type === "TSTypeParameterInstantiation" ? "" : C(h).length === 1 && p(d) && !h[i][0].constraint && T.getParentNode().type === "ArrowFunctionExpression" ? "," : D(d, "all") ? c(",") : "";
          return n(["<", o([r, a([",", s], T.map(F, i))]), B, r, ">"], { id: P(h) });
        }
        function J(T, d) {
          let F = T.getValue();
          if (!m(F, g.Dangling))
            return "";
          let i = !m(F, g.Line), h = t(T, d, i);
          return i ? h : [h, e];
        }
        function f(T, d, F) {
          let i = T.getValue(), h = [i.type === "TSTypeParameter" && i.const ? "const " : ""], E = T.getParentNode();
          return E.type === "TSMappedType" ? (E.readonly && h.push(k(E.readonly, "readonly"), " "), h.push("[", F("name")), i.constraint && h.push(" in ", F("constraint")), E.nameType && h.push(" as ", T.callParent(() => F("nameType"))), h.push("]"), h) : (i.variance && h.push(F("variance")), i.in && h.push("in "), i.out && h.push("out "), h.push(F("name")), i.bound && h.push(": ", F("bound")), i.constraint && h.push(" extends ", F("constraint")), i.default && h.push(" = ", F("default")), h);
        }
        l.exports = { printTypeParameter: f, printTypeParameters: _, getTypeParametersGroupId: P };
      } }), fu = O({ "src/language-js/print/property.js"(u, l) {
        ne();
        var { printComments: t } = Qt(), { printString: a, printNumber: s } = Ut(), { isNumericLiteral: e, isSimpleNumber: r, isStringLiteral: n, isStringPropSafeToUnquote: o, rawText: c } = ur(), { printAssignment: y } = du(), m = /* @__PURE__ */ new WeakMap();
        function g(D, C, w) {
          let k = D.getNode();
          if (k.computed)
            return ["[", w("key"), "]"];
          let A = D.getParentNode(), { key: N } = k;
          if (C.quoteProps === "consistent" && !m.has(A)) {
            let x = (A.properties || A.body || A.members).some((P) => !P.computed && P.key && n(P.key) && !o(P, C));
            m.set(A, x);
          }
          if ((N.type === "Identifier" || e(N) && r(s(c(N))) && String(N.value) === s(c(N)) && !(C.parser === "typescript" || C.parser === "babel-ts")) && (C.parser === "json" || C.quoteProps === "consistent" && m.get(A))) {
            let x = a(JSON.stringify(N.type === "Identifier" ? N.name : N.value.toString()), C);
            return D.call((P) => t(P, x, C), "key");
          }
          return o(k, C) && (C.quoteProps === "as-needed" || C.quoteProps === "consistent" && !m.get(A)) ? D.call((x) => t(x, /^\d/.test(N.value) ? s(N.value) : N.value, C), "key") : w("key");
        }
        function p(D, C, w) {
          return D.getValue().shorthand ? w("value") : y(D, C, w, g(D, C, w), ":", "value");
        }
        l.exports = { printProperty: p, printPropertyKey: g };
      } }), ri = O({ "src/language-js/print/function.js"(u, l) {
        ne();
        var t = lr(), { printDanglingComments: a, printCommentsSeparately: s } = Qt(), e = mr(), { getNextNonSpaceNonCommentCharacterIndex: r } = Ut(), { builders: { line: n, softline: o, group: c, indent: y, ifBreak: m, hardline: g, join: p, indentIfBreak: D }, utils: { removeLines: C, willBreak: w } } = wt(), { ArgExpansionBailout: k } = Fn(), { getFunctionParameters: A, hasLeadingOwnLineComment: N, isFlowAnnotationComment: x, isJsxNode: P, isTemplateOnItsOwnLine: _, shouldPrintComma: J, startsWithNoLookaheadToken: f, isBinaryish: T, isLineComment: d, hasComment: F, getComments: i, CommentCheckFlags: h, isCallLikeExpression: E, isCallExpression: b, getCallArguments: S, hasNakedLeftSide: B, getLeftSide: I } = ur(), { locEnd: M } = or(), { printFunctionParameters: U, shouldGroupFunctionParameters: q } = Zu(), { printPropertyKey: ee } = fu(), { printFunctionTypeParameters: j } = Mr();
        function De(K, ge, Ee, Oe) {
          let Xe = K.getValue(), He = !1;
          if ((Xe.type === "FunctionDeclaration" || Xe.type === "FunctionExpression") && Oe && Oe.expandLastArg) {
            let bt = K.getParentNode();
            b(bt) && S(bt).length > 1 && (He = !0);
          }
          let Ct = [];
          Xe.type === "TSDeclareFunction" && Xe.declare && Ct.push("declare "), Xe.async && Ct.push("async "), Xe.generator ? Ct.push("function* ") : Ct.push("function "), Xe.id && Ct.push(ge("id"));
          let Rt = U(K, ge, Ee, He), It = ie(K, ge, Ee), Et = q(Xe, It);
          return Ct.push(j(K, Ee, ge), c([Et ? c(Rt) : Rt, It]), Xe.body ? " " : "", ge("body")), Ee.semi && (Xe.declare || !Xe.body) && Ct.push(";"), Ct;
        }
        function G(K, ge, Ee) {
          let Oe = K.getNode(), { kind: Xe } = Oe, He = Oe.value || Oe, Ct = [];
          return !Xe || Xe === "init" || Xe === "method" || Xe === "constructor" ? He.async && Ct.push("async ") : (t.ok(Xe === "get" || Xe === "set"), Ct.push(Xe, " ")), He.generator && Ct.push("*"), Ct.push(ee(K, ge, Ee), Oe.optional || Oe.key.optional ? "?" : ""), Oe === He ? Ct.push(R(K, ge, Ee)) : He.type === "FunctionExpression" ? Ct.push(K.call((Rt) => R(Rt, ge, Ee), "value")) : Ct.push(Ee("value")), Ct;
        }
        function R(K, ge, Ee) {
          let Oe = K.getNode(), Xe = U(K, Ee, ge), He = ie(K, Ee, ge), Ct = q(Oe, He), Rt = [j(K, ge, Ee), c([Ct ? c(Xe) : Xe, He])];
          return Oe.body ? Rt.push(" ", Ee("body")) : Rt.push(ge.semi ? ";" : ""), Rt;
        }
        function pe(K, ge, Ee, Oe) {
          let Xe = K.getValue(), He = [];
          if (Xe.async && He.push("async "), X(K, ge))
            He.push(Ee(["params", 0]));
          else {
            let Rt = Oe && (Oe.expandLastArg || Oe.expandFirstArg), It = ie(K, Ee, ge);
            if (Rt) {
              if (w(It))
                throw new k();
              It = c(C(It));
            }
            He.push(c([U(K, Ee, ge, Rt, !0), It]));
          }
          let Ct = a(K, ge, !0, (Rt) => {
            let It = r(ge.originalText, Rt, M);
            return It !== !1 && ge.originalText.slice(It, It + 2) === "=>";
          });
          return Ct && He.push(" ", Ct), He;
        }
        function ve(K, ge, Ee, Oe, Xe, He) {
          let Ct = K.getName(), Rt = K.getParentNode(), It = E(Rt) && Ct === "callee", Et = !!(ge && ge.assignmentLayout), bt = He.body.type !== "BlockStatement" && He.body.type !== "ObjectExpression" && He.body.type !== "SequenceExpression", Se = It && bt || ge && ge.assignmentLayout === "chain-tail-arrow-chain", H = Symbol("arrow-chain");
          return He.body.type === "SequenceExpression" && (Xe = c(["(", y([o, Xe]), o, ")"])), c([c(y([It || Et ? o : "", c(p([" =>", n], Ee), { shouldBreak: Oe })]), { id: H, shouldBreak: Se }), " =>", D(bt ? y([n, Xe]) : [" ", Xe], { groupId: H }), It ? m(o, "", { groupId: H }) : ""]);
        }
        function fe(K, ge, Ee, Oe) {
          let Xe = K.getValue(), He = [], Ct = [], Rt = !1;
          if (function H() {
            let _e = pe(K, ge, Ee, Oe);
            if (He.length === 0)
              He.push(_e);
            else {
              let { leading: se, trailing: Te } = s(K, ge);
              He.push([se, _e]), Ct.unshift(Te);
            }
            Rt = Rt || Xe.returnType && A(Xe).length > 0 || Xe.typeParameters || A(Xe).some((se) => se.type !== "Identifier"), Xe.body.type !== "ArrowFunctionExpression" || Oe && Oe.expandLastArg ? Ct.unshift(Ee("body", Oe)) : (Xe = Xe.body, K.call(H, "body"));
          }(), He.length > 1)
            return ve(K, Oe, He, Rt, Ct, Xe);
          let It = He;
          if (It.push(" =>"), !N(ge.originalText, Xe.body) && (Xe.body.type === "ArrayExpression" || Xe.body.type === "ObjectExpression" || Xe.body.type === "BlockStatement" || P(Xe.body) || _(Xe.body, ge.originalText) || Xe.body.type === "ArrowFunctionExpression" || Xe.body.type === "DoExpression"))
            return c([...It, " ", Ct]);
          if (Xe.body.type === "SequenceExpression")
            return c([...It, c([" (", y([o, Ct]), o, ")"])]);
          let Et = (Oe && Oe.expandLastArg || K.getParentNode().type === "JSXExpressionContainer") && !F(Xe), bt = Oe && Oe.expandLastArg && J(ge, "all"), Se = Xe.body.type === "ConditionalExpression" && !f(Xe.body, (H) => H.type === "ObjectExpression");
          return c([...It, c([y([n, Se ? m("", "(") : "", Ct, Se ? m("", ")") : ""]), Et ? [m(bt ? "," : ""), o] : ""])]);
        }
        function Pe(K) {
          let ge = A(K);
          return ge.length === 1 && !K.typeParameters && !F(K, h.Dangling) && ge[0].type === "Identifier" && !ge[0].typeAnnotation && !F(ge[0]) && !ge[0].optional && !K.predicate && !K.returnType;
        }
        function X(K, ge) {
          if (ge.arrowParens === "always")
            return !1;
          if (ge.arrowParens === "avoid") {
            let Ee = K.getValue();
            return Pe(Ee);
          }
          return !1;
        }
        function ie(K, ge, Ee) {
          let Oe = K.getValue(), Xe = ge("returnType");
          if (Oe.returnType && x(Ee.originalText, Oe.returnType))
            return [" /*: ", Xe, " */"];
          let He = [Xe];
          return Oe.returnType && Oe.returnType.typeAnnotation && He.unshift(": "), Oe.predicate && He.push(Oe.returnType ? " " : ": ", ge("predicate")), He;
        }
        function Be(K, ge, Ee) {
          let Oe = K.getValue(), Xe = ge.semi ? ";" : "", He = [];
          Oe.argument && (ae(ge, Oe.argument) ? He.push([" (", y([g, Ee("argument")]), g, ")"]) : T(Oe.argument) || Oe.argument.type === "SequenceExpression" ? He.push(c([m(" (", " "), y([o, Ee("argument")]), o, m(")")])) : He.push(" ", Ee("argument")));
          let Ct = i(Oe), Rt = e(Ct), It = Rt && d(Rt);
          return It && He.push(Xe), F(Oe, h.Dangling) && He.push(" ", a(K, ge, !0)), It || He.push(Xe), He;
        }
        function Ne(K, ge, Ee) {
          return ["return", Be(K, ge, Ee)];
        }
        function it(K, ge, Ee) {
          return ["throw", Be(K, ge, Ee)];
        }
        function ae(K, ge) {
          if (N(K.originalText, ge))
            return !0;
          if (B(ge)) {
            let Ee = ge, Oe;
            for (; Oe = I(Ee); )
              if (Ee = Oe, N(K.originalText, Ee))
                return !0;
          }
          return !1;
        }
        l.exports = { printFunction: De, printArrowFunction: fe, printMethod: G, printReturnStatement: Ne, printThrowStatement: it, printMethodInternal: R, shouldPrintParamsWithoutParens: X };
      } }), os = O({ "src/language-js/print/decorators.js"(u, l) {
        ne();
        var { isNonEmptyArray: t, hasNewline: a } = Ut(), { builders: { line: s, hardline: e, join: r, breakParent: n, group: o } } = wt(), { locStart: c, locEnd: y } = or(), { getParentExportDeclaration: m } = ur();
        function g(k, A, N) {
          let x = k.getValue();
          return o([r(s, k.map(N, "decorators")), C(x, A) ? e : s]);
        }
        function p(k, A, N) {
          return [r(e, k.map(N, "declaration", "decorators")), e];
        }
        function D(k, A, N) {
          let x = k.getValue(), { decorators: P } = x;
          if (!t(P) || w(k.getParentNode()))
            return;
          let _ = x.type === "ClassExpression" || x.type === "ClassDeclaration" || C(x, A);
          return [m(k) ? e : _ ? n : "", r(s, k.map(N, "decorators")), s];
        }
        function C(k, A) {
          return k.decorators.some((N) => a(A.originalText, y(N)));
        }
        function w(k) {
          if (k.type !== "ExportDefaultDeclaration" && k.type !== "ExportNamedDeclaration" && k.type !== "DeclareExportDeclaration")
            return !1;
          let A = k.declaration && k.declaration.decorators;
          return t(A) && c(k) === c(A[0]);
        }
        l.exports = { printDecorators: D, printClassMemberDecorators: g, printDecoratorsBeforeExport: p, hasDecoratorsBeforeExport: w };
      } }), mu = O({ "src/language-js/print/class.js"(u, l) {
        ne();
        var { isNonEmptyArray: t, createGroupIdMapper: a } = Ut(), { printComments: s, printDanglingComments: e } = Qt(), { builders: { join: r, line: n, hardline: o, softline: c, group: y, indent: m, ifBreak: g } } = wt(), { hasComment: p, CommentCheckFlags: D } = ur(), { getTypeParametersGroupId: C } = ti(), { printMethod: w } = ri(), { printOptionalToken: k, printTypeAnnotation: A, printDefiniteToken: N } = Mr(), { printPropertyKey: x } = fu(), { printAssignment: P } = du(), { printClassMemberDecorators: _ } = os();
        function J(S, B, I) {
          let M = S.getValue(), U = [];
          M.declare && U.push("declare "), M.abstract && U.push("abstract "), U.push("class");
          let q = M.id && p(M.id, D.Trailing) || M.typeParameters && p(M.typeParameters, D.Trailing) || M.superClass && p(M.superClass) || t(M.extends) || t(M.mixins) || t(M.implements), ee = [], j = [];
          if (M.id && ee.push(" ", I("id")), ee.push(I("typeParameters")), M.superClass) {
            let De = [h(S, B, I), I("superTypeParameters")], G = S.call((R) => ["extends ", s(R, De, B)], "superClass");
            q ? j.push(n, y(G)) : j.push(" ", G);
          } else
            j.push(i(S, B, I, "extends"));
          if (j.push(i(S, B, I, "mixins"), i(S, B, I, "implements")), q) {
            let De;
            F(M) ? De = [...ee, m(j)] : De = m([...ee, j]), U.push(y(De, { id: f(M) }));
          } else
            U.push(...ee, ...j);
          return U.push(" ", I("body")), U;
        }
        var f = a("heritageGroup");
        function T(S) {
          return g(o, "", { groupId: f(S) });
        }
        function d(S) {
          return ["superClass", "extends", "mixins", "implements"].filter((B) => !!S[B]).length > 1;
        }
        function F(S) {
          return S.typeParameters && !p(S.typeParameters, D.Trailing | D.Line) && !d(S);
        }
        function i(S, B, I, M) {
          let U = S.getValue();
          if (!t(U[M]))
            return "";
          let q = e(S, B, !0, (ee) => {
            let { marker: j } = ee;
            return j === M;
          });
          return [F(U) ? g(" ", n, { groupId: C(U.typeParameters) }) : n, q, q && o, M, y(m([n, r([",", n], S.map(I, M))]))];
        }
        function h(S, B, I) {
          let M = I("superClass");
          return S.getParentNode().type === "AssignmentExpression" ? y(g(["(", m([c, M]), c, ")"], M)) : M;
        }
        function E(S, B, I) {
          let M = S.getValue(), U = [];
          return t(M.decorators) && U.push(_(S, B, I)), M.accessibility && U.push(M.accessibility + " "), M.readonly && U.push("readonly "), M.declare && U.push("declare "), M.static && U.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && U.push("abstract "), M.override && U.push("override "), U.push(w(S, B, I)), U;
        }
        function b(S, B, I) {
          let M = S.getValue(), U = [], q = B.semi ? ";" : "";
          return t(M.decorators) && U.push(_(S, B, I)), M.accessibility && U.push(M.accessibility + " "), M.declare && U.push("declare "), M.static && U.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.type === "TSAbstractAccessorProperty" || M.abstract) && U.push("abstract "), M.override && U.push("override "), M.readonly && U.push("readonly "), M.variance && U.push(I("variance")), (M.type === "ClassAccessorProperty" || M.type === "AccessorProperty" || M.type === "TSAbstractAccessorProperty") && U.push("accessor "), U.push(x(S, B, I), k(S), N(S), A(S, B, I)), [P(S, B, I, U, " =", "value"), q];
        }
        l.exports = { printClass: J, printClassMethod: E, printClassProperty: b, printHardlineAfterHeritage: T };
      } }), $s = O({ "src/language-js/print/interface.js"(u, l) {
        ne();
        var { isNonEmptyArray: t } = Ut(), { builders: { join: a, line: s, group: e, indent: r, ifBreak: n } } = wt(), { hasComment: o, identity: c, CommentCheckFlags: y } = ur(), { getTypeParametersGroupId: m } = ti(), { printTypeScriptModifiers: g } = Mr();
        function p(D, C, w) {
          let k = D.getValue(), A = [];
          k.declare && A.push("declare "), k.type === "TSInterfaceDeclaration" && A.push(k.abstract ? "abstract " : "", g(D, C, w)), A.push("interface");
          let N = [], x = [];
          k.type !== "InterfaceTypeAnnotation" && N.push(" ", w("id"), w("typeParameters"));
          let P = k.typeParameters && !o(k.typeParameters, y.Trailing | y.Line);
          return t(k.extends) && x.push(P ? n(" ", s, { groupId: m(k.typeParameters) }) : s, "extends ", (k.extends.length === 1 ? c : r)(a([",", s], D.map(w, "extends")))), k.id && o(k.id, y.Trailing) || t(k.extends) ? P ? A.push(e([...N, r(x)])) : A.push(e(r([...N, ...x]))) : A.push(...N, ...x), A.push(" ", w("body")), e(A);
        }
        l.exports = { printInterface: p };
      } }), Rs = O({ "src/language-js/print/module.js"(u, l) {
        ne();
        var { isNonEmptyArray: t } = Ut(), { builders: { softline: a, group: s, indent: e, join: r, line: n, ifBreak: o, hardline: c } } = wt(), { printDanglingComments: y } = Qt(), { hasComment: m, CommentCheckFlags: g, shouldPrintComma: p, needsHardlineAfterDanglingComment: D, isStringLiteral: C, rawText: w } = ur(), { locStart: k, hasSameLoc: A } = or(), { hasDecoratorsBeforeExport: N, printDecoratorsBeforeExport: x } = os();
        function P(b, S, B) {
          let I = b.getValue(), M = S.semi ? ";" : "", U = [], { importKind: q } = I;
          return U.push("import"), q && q !== "value" && U.push(" ", q), U.push(d(b, S, B), T(b, S, B), i(b, S, B), M), U;
        }
        function _(b, S, B) {
          let I = b.getValue(), M = [];
          N(I) && M.push(x(b, S, B));
          let { type: U, exportKind: q, declaration: ee } = I;
          return M.push("export"), (I.default || U === "ExportDefaultDeclaration") && M.push(" default"), m(I, g.Dangling) && (M.push(" ", y(b, S, !0)), D(I) && M.push(c)), ee ? M.push(" ", B("declaration")) : M.push(q === "type" ? " type" : "", d(b, S, B), T(b, S, B), i(b, S, B)), f(I, S) && M.push(";"), M;
        }
        function J(b, S, B) {
          let I = b.getValue(), M = S.semi ? ";" : "", U = [], { exportKind: q, exported: ee } = I;
          return U.push("export"), q === "type" && U.push(" type"), U.push(" *"), ee && U.push(" as ", B("exported")), U.push(T(b, S, B), i(b, S, B), M), U;
        }
        function f(b, S) {
          if (!S.semi)
            return !1;
          let { type: B, declaration: I } = b, M = b.default || B === "ExportDefaultDeclaration";
          if (!I)
            return !0;
          let { type: U } = I;
          return !!(M && U !== "ClassDeclaration" && U !== "FunctionDeclaration" && U !== "TSInterfaceDeclaration" && U !== "DeclareClass" && U !== "DeclareFunction" && U !== "TSDeclareFunction" && U !== "EnumDeclaration");
        }
        function T(b, S, B) {
          let I = b.getValue();
          if (!I.source)
            return "";
          let M = [];
          return F(I, S) || M.push(" from"), M.push(" ", B("source")), M;
        }
        function d(b, S, B) {
          let I = b.getValue();
          if (F(I, S))
            return "";
          let M = [" "];
          if (t(I.specifiers)) {
            let U = [], q = [];
            b.each(() => {
              let ee = b.getValue().type;
              if (ee === "ExportNamespaceSpecifier" || ee === "ExportDefaultSpecifier" || ee === "ImportNamespaceSpecifier" || ee === "ImportDefaultSpecifier")
                U.push(B());
              else if (ee === "ExportSpecifier" || ee === "ImportSpecifier")
                q.push(B());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(ee)}`);
            }, "specifiers"), M.push(r(", ", U)), q.length > 0 && (U.length > 0 && M.push(", "), q.length > 1 || U.length > 0 || I.specifiers.some((ee) => m(ee)) ? M.push(s(["{", e([S.bracketSpacing ? n : a, r([",", n], q)]), o(p(S) ? "," : ""), S.bracketSpacing ? n : a, "}"])) : M.push(["{", S.bracketSpacing ? " " : "", ...q, S.bracketSpacing ? " " : "", "}"]));
          } else
            M.push("{}");
          return M;
        }
        function F(b, S) {
          let { type: B, importKind: I, source: M, specifiers: U } = b;
          return B !== "ImportDeclaration" || t(U) || I === "type" ? !1 : !/{\s*}/.test(S.originalText.slice(k(b), k(M)));
        }
        function i(b, S, B) {
          let I = b.getNode();
          return t(I.assertions) ? [" assert {", S.bracketSpacing ? " " : "", r(", ", b.map(B, "assertions")), S.bracketSpacing ? " " : "", "}"] : "";
        }
        function h(b, S, B) {
          let I = b.getNode(), { type: M } = I, U = [], q = M === "ImportSpecifier" ? I.importKind : I.exportKind;
          q && q !== "value" && U.push(q, " ");
          let ee = M.startsWith("Import"), j = ee ? "imported" : "local", De = ee ? "local" : "exported", G = I[j], R = I[De], pe = "", ve = "";
          return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? pe = "*" : G && (pe = B(j)), R && !E(I) && (ve = B(De)), U.push(pe, pe && ve ? " as " : "", ve), U;
        }
        function E(b) {
          if (b.type !== "ImportSpecifier" && b.type !== "ExportSpecifier")
            return !1;
          let { local: S, [b.type === "ImportSpecifier" ? "imported" : "exported"]: B } = b;
          if (S.type !== B.type || !A(S, B))
            return !1;
          if (C(S))
            return S.value === B.value && w(S) === w(B);
          switch (S.type) {
            case "Identifier":
              return S.name === B.name;
            default:
              return !1;
          }
        }
        l.exports = { printImportDeclaration: P, printExportDeclaration: _, printExportAllDeclaration: J, printModuleSpecifier: h };
      } }), ls = O({ "src/language-js/print/object.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { builders: { line: a, softline: s, group: e, indent: r, ifBreak: n, hardline: o } } = wt(), { getLast: c, hasNewlineInRange: y, hasNewline: m, isNonEmptyArray: g } = Ut(), { shouldPrintComma: p, hasComment: D, getComments: C, CommentCheckFlags: w, isNextLineEmpty: k } = ur(), { locStart: A, locEnd: N } = or(), { printOptionalToken: x, printTypeAnnotation: P } = Mr(), { shouldHugFunctionParameters: _ } = Zu(), { shouldHugType: J } = ei(), { printHardlineAfterHeritage: f } = mu();
        function T(d, F, i) {
          let h = F.semi ? ";" : "", E = d.getValue(), b;
          E.type === "TSTypeLiteral" ? b = "members" : E.type === "TSInterfaceBody" ? b = "body" : b = "properties";
          let S = E.type === "ObjectTypeAnnotation", B = [b];
          S && B.push("indexers", "callProperties", "internalSlots");
          let I = B.map((X) => E[X][0]).sort((X, ie) => A(X) - A(ie))[0], M = d.getParentNode(0), U = S && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && d.getName() === "body", q = E.type === "TSInterfaceBody" || U || E.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && E.properties.some((X) => X.value && (X.value.type === "ObjectPattern" || X.value.type === "ArrayPattern")) || E.type !== "ObjectPattern" && I && y(F.originalText, A(E), A(I)), ee = U ? ";" : E.type === "TSInterfaceBody" || E.type === "TSTypeLiteral" ? n(h, ";") : ",", j = E.type === "RecordExpression" ? "#{" : E.exact ? "{|" : "{", De = E.exact ? "|}" : "}", G = [];
          for (let X of B)
            d.each((ie) => {
              let Be = ie.getValue();
              G.push({ node: Be, printed: i(), loc: A(Be) });
            }, X);
          B.length > 1 && G.sort((X, ie) => X.loc - ie.loc);
          let R = [], pe = G.map((X) => {
            let ie = [...R, e(X.printed)];
            return R = [ee, a], (X.node.type === "TSPropertySignature" || X.node.type === "TSMethodSignature" || X.node.type === "TSConstructSignatureDeclaration") && D(X.node, w.PrettierIgnore) && R.shift(), k(X.node, F) && R.push(o), ie;
          });
          if (E.inexact) {
            let X;
            if (D(E, w.Dangling)) {
              let ie = D(E, w.Line);
              X = [t(d, F, !0), ie || m(F.originalText, N(c(C(E)))) ? o : a, "..."];
            } else
              X = ["..."];
            pe.push([...R, ...X]);
          }
          let ve = c(E[b]), fe = !(E.inexact || ve && ve.type === "RestElement" || ve && (ve.type === "TSPropertySignature" || ve.type === "TSCallSignatureDeclaration" || ve.type === "TSMethodSignature" || ve.type === "TSConstructSignatureDeclaration") && D(ve, w.PrettierIgnore)), Pe;
          if (pe.length === 0) {
            if (!D(E, w.Dangling))
              return [j, De, P(d, F, i)];
            Pe = e([j, t(d, F), s, De, x(d), P(d, F, i)]);
          } else
            Pe = [U && g(E.properties) ? f(M) : "", j, r([F.bracketSpacing ? a : s, ...pe]), n(fe && (ee !== "," || p(F)) ? ee : ""), F.bracketSpacing ? a : s, De, x(d), P(d, F, i)];
          return d.match((X) => X.type === "ObjectPattern" && !X.decorators, (X, ie, Be) => _(X) && (ie === "params" || ie === "parameters" || ie === "this" || ie === "rest") && Be === 0) || d.match(J, (X, ie) => ie === "typeAnnotation", (X, ie) => ie === "typeAnnotation", (X, ie, Be) => _(X) && (ie === "params" || ie === "parameters" || ie === "this" || ie === "rest") && Be === 0) || !q && d.match((X) => X.type === "ObjectPattern", (X) => X.type === "AssignmentExpression" || X.type === "VariableDeclarator") ? Pe : e(Pe, { shouldBreak: q });
        }
        l.exports = { printObject: T };
      } }), va = O({ "src/language-js/print/flow.js"(u, l) {
        ne();
        var t = lr(), { printDanglingComments: a } = Qt(), { printString: s, printNumber: e } = Ut(), { builders: { hardline: r, softline: n, group: o, indent: c } } = wt(), { getParentExportDeclaration: y, isFunctionNotation: m, isGetterOrSetter: g, rawText: p, shouldPrintComma: D } = ur(), { locStart: C, locEnd: w } = or(), { replaceTextEndOfLine: k } = En(), { printClass: A } = mu(), { printOpaqueType: N, printTypeAlias: x, printIntersectionType: P, printUnionType: _, printFunctionType: J, printTupleType: f, printIndexedAccessType: T } = ei(), { printInterface: d } = $s(), { printTypeParameter: F, printTypeParameters: i } = ti(), { printExportDeclaration: h, printExportAllDeclaration: E } = Rs(), { printArrayItems: b } = Du(), { printObject: S } = ls(), { printPropertyKey: B } = fu(), { printOptionalToken: I, printTypeAnnotation: M, printRestSpread: U } = Mr();
        function q(j, De, G) {
          let R = j.getValue(), pe = De.semi ? ";" : "", ve = [];
          switch (R.type) {
            case "DeclareClass":
              return ee(j, A(j, De, G));
            case "DeclareFunction":
              return ee(j, ["function ", G("id"), R.predicate ? " " : "", G("predicate"), pe]);
            case "DeclareModule":
              return ee(j, ["module ", G("id"), " ", G("body")]);
            case "DeclareModuleExports":
              return ee(j, ["module.exports", ": ", G("typeAnnotation"), pe]);
            case "DeclareVariable":
              return ee(j, ["var ", G("id"), pe]);
            case "DeclareOpaqueType":
              return ee(j, N(j, De, G));
            case "DeclareInterface":
              return ee(j, d(j, De, G));
            case "DeclareTypeAlias":
              return ee(j, x(j, De, G));
            case "DeclareExportDeclaration":
              return ee(j, h(j, De, G));
            case "DeclareExportAllDeclaration":
              return ee(j, E(j, De, G));
            case "OpaqueType":
              return N(j, De, G);
            case "TypeAlias":
              return x(j, De, G);
            case "IntersectionTypeAnnotation":
              return P(j, De, G);
            case "UnionTypeAnnotation":
              return _(j, De, G);
            case "FunctionTypeAnnotation":
              return J(j, De, G);
            case "TupleTypeAnnotation":
              return f(j, De, G);
            case "GenericTypeAnnotation":
              return [G("id"), i(j, De, G, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return T(j, De, G);
            case "TypeAnnotation":
              return G("typeAnnotation");
            case "TypeParameter":
              return F(j, De, G);
            case "TypeofTypeAnnotation":
              return ["typeof ", G("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [G("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(R.value);
            case "EnumDeclaration":
              return ["enum ", G("id"), " ", G("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (R.type === "EnumSymbolBody" || R.explicitType) {
                let fe = null;
                switch (R.type) {
                  case "EnumBooleanBody":
                    fe = "boolean";
                    break;
                  case "EnumNumberBody":
                    fe = "number";
                    break;
                  case "EnumStringBody":
                    fe = "string";
                    break;
                  case "EnumSymbolBody":
                    fe = "symbol";
                    break;
                }
                ve.push("of ", fe, " ");
              }
              if (R.members.length === 0 && !R.hasUnknownMembers)
                ve.push(o(["{", a(j, De), n, "}"]));
              else {
                let fe = R.members.length > 0 ? [r, b(j, De, "members", G), R.hasUnknownMembers || D(De) ? "," : ""] : [];
                ve.push(o(["{", c([...fe, ...R.hasUnknownMembers ? [r, "..."] : []]), a(j, De, !0), r, "}"]));
              }
              return ve;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [G("id"), " = ", typeof R.init == "object" ? G("init") : String(R.init)];
            case "EnumDefaultedMember":
              return G("id");
            case "FunctionTypeParam": {
              let fe = R.name ? G("name") : j.getParentNode().this === R ? "this" : "";
              return [fe, I(j), fe ? ": " : "", G("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return d(j, De, G);
            case "ClassImplements":
            case "InterfaceExtends":
              return [G("id"), G("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", G("typeAnnotation")];
            case "Variance": {
              let { kind: fe } = R;
              return t.ok(fe === "plus" || fe === "minus"), fe === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return R.static && ve.push("static "), ve.push(G("value")), ve;
            case "ObjectTypeIndexer":
              return [R.static ? "static " : "", R.variance ? G("variance") : "", "[", G("id"), R.id ? ": " : "", G("key"), "]: ", G("value")];
            case "ObjectTypeProperty": {
              let fe = "";
              return R.proto ? fe = "proto " : R.static && (fe = "static "), [fe, g(R) ? R.kind + " " : "", R.variance ? G("variance") : "", B(j, De, G), I(j), m(R) ? "" : ": ", G("value")];
            }
            case "ObjectTypeAnnotation":
              return S(j, De, G);
            case "ObjectTypeInternalSlot":
              return [R.static ? "static " : "", "[[", G("id"), "]]", I(j), R.method ? "" : ": ", G("value")];
            case "ObjectTypeSpreadProperty":
              return U(j, De, G);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [G("qualification"), ".", G("id")];
            case "StringLiteralTypeAnnotation":
              return k(s(p(R), De));
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof R.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return R.extra ? e(R.extra.raw) : e(R.raw);
            case "TypeCastExpression":
              return ["(", G("expression"), M(j, De, G), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let fe = i(j, De, G, "params");
              if (De.parser === "flow") {
                let Pe = C(R), X = w(R), ie = De.originalText.lastIndexOf("/*", Pe), Be = De.originalText.indexOf("*/", X);
                if (ie !== -1 && Be !== -1) {
                  let Ne = De.originalText.slice(ie + 2, Be).trim();
                  if (Ne.startsWith("::") && !Ne.includes("/*") && !Ne.includes("*/"))
                    return ["/*:: ", fe, " */"];
                }
              }
              return fe;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", G("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(R.type));
          }
        }
        function ee(j, De) {
          let G = y(j);
          return G ? (t.strictEqual(G.type, "DeclareExportDeclaration"), De) : ["declare ", De];
        }
        l.exports = { printFlow: q };
      } }), ba = O({ "src/language-js/utils/is-ts-keyword-type.js"(u, l) {
        ne();
        function t(a) {
          let { type: s } = a;
          return s.startsWith("TS") && s.endsWith("Keyword");
        }
        l.exports = t;
      } }), Ms = O({ "src/language-js/print/ternary.js"(u, l) {
        ne();
        var { hasNewlineInRange: t } = Ut(), { isJsxNode: a, getComments: s, isCallExpression: e, isMemberExpression: r, isTSTypeExpression: n } = ur(), { locStart: o, locEnd: c } = or(), y = vn(), { builders: { line: m, softline: g, group: p, indent: D, align: C, ifBreak: w, dedent: k, breakParent: A } } = wt();
        function N(f) {
          let T = [f];
          for (let d = 0; d < T.length; d++) {
            let F = T[d];
            for (let i of ["test", "consequent", "alternate"]) {
              let h = F[i];
              if (a(h))
                return !0;
              h.type === "ConditionalExpression" && T.push(h);
            }
          }
          return !1;
        }
        function x(f, T, d) {
          let F = f.getValue(), i = F.type === "ConditionalExpression", h = i ? "alternate" : "falseType", E = f.getParentNode(), b = i ? d("test") : [d("checkType"), " ", "extends", " ", d("extendsType")];
          return E.type === F.type && E[h] === F ? C(2, b) : b;
        }
        var P = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function _(f) {
          let T = f.getValue();
          if (T.type !== "ConditionalExpression")
            return !1;
          let d, F = T;
          for (let i = 0; !d; i++) {
            let h = f.getParentNode(i);
            if (e(h) && h.callee === F || r(h) && h.object === F || h.type === "TSNonNullExpression" && h.expression === F) {
              F = h;
              continue;
            }
            h.type === "NewExpression" && h.callee === F || n(h) && h.expression === F ? (d = f.getParentNode(i + 1), F = h) : d = h;
          }
          return F === T ? !1 : d[P.get(d.type)] === F;
        }
        function J(f, T, d) {
          let F = f.getValue(), i = F.type === "ConditionalExpression", h = i ? "consequent" : "trueType", E = i ? "alternate" : "falseType", b = i ? ["test"] : ["checkType", "extendsType"], S = F[h], B = F[E], I = [], M = !1, U = f.getParentNode(), q = U.type === F.type && b.some((Be) => U[Be] === F), ee = U.type === F.type && !q, j, De, G = 0;
          do
            De = j || F, j = f.getParentNode(G), G++;
          while (j && j.type === F.type && b.every((Be) => j[Be] !== De));
          let R = j || U, pe = De;
          if (i && (a(F[b[0]]) || a(S) || a(B) || N(pe))) {
            M = !0, ee = !0;
            let Be = (it) => [w("("), D([g, it]), g, w(")")], Ne = (it) => it.type === "NullLiteral" || it.type === "Literal" && it.value === null || it.type === "Identifier" && it.name === "undefined";
            I.push(" ? ", Ne(S) ? d(h) : Be(d(h)), " : ", B.type === F.type || Ne(B) ? d(E) : Be(d(E)));
          } else {
            let Be = [m, "? ", S.type === F.type ? w("", "(") : "", C(2, d(h)), S.type === F.type ? w("", ")") : "", m, ": ", B.type === F.type ? d(E) : C(2, d(E))];
            I.push(U.type !== F.type || U[E] === F || q ? Be : T.useTabs ? k(D(Be)) : C(Math.max(0, T.tabWidth - 2), Be));
          }
          let ve = [...b.map((Be) => s(F[Be])), s(S), s(B)].flat().some((Be) => y(Be) && t(T.originalText, o(Be), c(Be))), fe = (Be) => U === R ? p(Be, { shouldBreak: ve }) : ve ? [Be, A] : Be, Pe = !M && (r(U) || U.type === "NGPipeExpression" && U.left === F) && !U.computed, X = _(f), ie = fe([x(f, T, d), ee ? I : D(I), i && Pe && !X ? g : ""]);
          return q || X ? p([D([g, ie]), g]) : ie;
        }
        l.exports = { printTernary: J };
      } }), qs = O({ "src/language-js/print/statement.js"(u, l) {
        ne();
        var { builders: { hardline: t } } = wt(), a = Ln(), { getLeftSidePathName: s, hasNakedLeftSide: e, isJsxNode: r, isTheOnlyJsxElementInMarkdown: n, hasComment: o, CommentCheckFlags: c, isNextLineEmpty: y } = ur(), { shouldPrintParamsWithoutParens: m } = ri();
        function g(x, P, _, J) {
          let f = x.getValue(), T = [], d = f.type === "ClassBody", F = p(f[J]);
          return x.each((i, h, E) => {
            let b = i.getValue();
            if (b.type === "EmptyStatement")
              return;
            let S = _();
            !P.semi && !d && !n(P, i) && D(i, P) ? o(b, c.Leading) ? T.push(_([], { needsSemi: !0 })) : T.push(";", S) : T.push(S), !P.semi && d && A(b) && N(b, E[h + 1]) && T.push(";"), b !== F && (T.push(t), y(b, P) && T.push(t));
          }, J), T;
        }
        function p(x) {
          for (let P = x.length - 1; P >= 0; P--) {
            let _ = x[P];
            if (_.type !== "EmptyStatement")
              return _;
          }
        }
        function D(x, P) {
          return x.getNode().type !== "ExpressionStatement" ? !1 : x.call((_) => C(_, P), "expression");
        }
        function C(x, P) {
          let _ = x.getValue();
          switch (_.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return !0;
            case "ArrowFunctionExpression": {
              if (!m(x, P))
                return !0;
              break;
            }
            case "UnaryExpression": {
              let { prefix: J, operator: f } = _;
              if (J && (f === "+" || f === "-"))
                return !0;
              break;
            }
            case "BindExpression": {
              if (!_.object)
                return !0;
              break;
            }
            case "Literal": {
              if (_.regex)
                return !0;
              break;
            }
            default:
              if (r(_))
                return !0;
          }
          return a(x, P) ? !0 : e(_) ? x.call((J) => C(J, P), ...s(x, _)) : !1;
        }
        function w(x, P, _) {
          return g(x, P, _, "body");
        }
        function k(x, P, _) {
          return g(x, P, _, "consequent");
        }
        var A = (x) => {
          let { type: P } = x;
          return P === "ClassProperty" || P === "PropertyDefinition" || P === "ClassPrivateProperty" || P === "ClassAccessorProperty" || P === "AccessorProperty" || P === "TSAbstractPropertyDefinition" || P === "TSAbstractAccessorProperty";
        };
        function N(x, P) {
          let { type: _, name: J } = x.key;
          if (!x.computed && _ === "Identifier" && (J === "static" || J === "get" || J === "set" || J === "accessor") && !x.value && !x.typeAnnotation)
            return !0;
          if (!P || P.static || P.accessibility)
            return !1;
          if (!P.computed) {
            let f = P.key && P.key.name;
            if (f === "in" || f === "instanceof")
              return !0;
          }
          if (A(P) && P.variance && !P.static && !P.declare)
            return !0;
          switch (P.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return P.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((P.value ? P.value.async : P.async) || P.kind === "get" || P.kind === "set")
                return !1;
              let f = P.value ? P.value.generator : P.generator;
              return !!(P.computed || f);
            }
            case "TSIndexSignature":
              return !0;
          }
          return !1;
        }
        l.exports = { printBody: w, printSwitchCaseConsequent: k };
      } }), Vs = O({ "src/language-js/print/block.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { isNonEmptyArray: a } = Ut(), { builders: { hardline: s, indent: e } } = wt(), { hasComment: r, CommentCheckFlags: n, isNextLineEmpty: o } = ur(), { printHardlineAfterHeritage: c } = mu(), { printBody: y } = qs();
        function m(p, D, C) {
          let w = p.getValue(), k = [];
          if (w.type === "StaticBlock" && k.push("static "), w.type === "ClassBody" && a(w.body)) {
            let N = p.getParentNode();
            k.push(c(N));
          }
          k.push("{");
          let A = g(p, D, C);
          if (A)
            k.push(e([s, A]), s);
          else {
            let N = p.getParentNode(), x = p.getParentNode(1);
            N.type === "ArrowFunctionExpression" || N.type === "FunctionExpression" || N.type === "FunctionDeclaration" || N.type === "ObjectMethod" || N.type === "ClassMethod" || N.type === "ClassPrivateMethod" || N.type === "ForStatement" || N.type === "WhileStatement" || N.type === "DoWhileStatement" || N.type === "DoExpression" || N.type === "CatchClause" && !x.finalizer || N.type === "TSModuleDeclaration" || N.type === "TSDeclareFunction" || w.type === "StaticBlock" || w.type === "ClassBody" || k.push(s);
          }
          return k.push("}"), k;
        }
        function g(p, D, C) {
          let w = p.getValue(), k = a(w.directives), A = w.body.some((P) => P.type !== "EmptyStatement"), N = r(w, n.Dangling);
          if (!k && !A && !N)
            return "";
          let x = [];
          if (k && p.each((P, _, J) => {
            x.push(C()), (_ < J.length - 1 || A || N) && (x.push(s), o(P.getValue(), D) && x.push(s));
          }, "directives"), A && x.push(y(p, D, C)), N && x.push(t(p, D, !0)), w.type === "Program") {
            let P = p.getParentNode();
            (!P || P.type !== "ModuleExpression") && x.push(s);
          }
          return x;
        }
        l.exports = { printBlock: m, printBlockBody: g };
      } }), Sa = O({ "src/language-js/print/typescript.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { hasNewlineInRange: a } = Ut(), { builders: { join: s, line: e, hardline: r, softline: n, group: o, indent: c, conditionalGroup: y, ifBreak: m } } = wt(), { isStringLiteral: g, getTypeScriptMappedTypeModifier: p, shouldPrintComma: D, isCallExpression: C, isMemberExpression: w } = ur(), k = ba(), { locStart: A, locEnd: N } = or(), { printOptionalToken: x, printTypeScriptModifiers: P } = Mr(), { printTernary: _ } = Ms(), { printFunctionParameters: J, shouldGroupFunctionParameters: f } = Zu(), { printTemplateLiteral: T } = jn(), { printArrayItems: d } = Du(), { printObject: F } = ls(), { printClassProperty: i, printClassMethod: h } = mu(), { printTypeParameter: E, printTypeParameters: b } = ti(), { printPropertyKey: S } = fu(), { printFunction: B, printMethodInternal: I } = ri(), { printInterface: M } = $s(), { printBlock: U } = Vs(), { printTypeAlias: q, printIntersectionType: ee, printUnionType: j, printFunctionType: De, printTupleType: G, printIndexedAccessType: R, printJSDocType: pe } = ei();
        function ve(fe, Pe, X) {
          let ie = fe.getValue();
          if (!ie.type.startsWith("TS"))
            return;
          if (k(ie))
            return ie.type.slice(2, -7).toLowerCase();
          let Be = Pe.semi ? ";" : "", Ne = [];
          switch (ie.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let it = !(ie.expression.type === "ArrayExpression" || ie.expression.type === "ObjectExpression"), ae = o(["<", c([n, X("typeAnnotation")]), n, ">"]), K = [m("("), c([n, X("expression")]), n, m(")")];
              return it ? y([[ae, X("expression")], [ae, o(K, { shouldBreak: !0 })], [ae, X("expression")]]) : o([ae, X("expression")]);
            }
            case "TSDeclareFunction":
              return B(fe, X, Pe);
            case "TSExportAssignment":
              return ["export = ", X("expression"), Be];
            case "TSModuleBlock":
              return U(fe, Pe, X);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return F(fe, Pe, X);
            case "TSTypeAliasDeclaration":
              return q(fe, Pe, X);
            case "TSQualifiedName":
              return s(".", [X("left"), X("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return h(fe, Pe, X);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition":
              return i(fe, Pe, X);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return Ne.push(X("expression")), ie.typeParameters && Ne.push(X("typeParameters")), Ne;
            case "TSTemplateLiteralType":
              return T(fe, X, Pe);
            case "TSNamedTupleMember":
              return [X("label"), ie.optional ? "?" : "", ": ", X("elementType")];
            case "TSRestType":
              return ["...", X("typeAnnotation")];
            case "TSOptionalType":
              return [X("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return M(fe, Pe, X);
            case "TSClassImplements":
              return [X("expression"), X("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return b(fe, Pe, X, "params");
            case "TSTypeParameter":
              return E(fe, Pe, X);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let it = ie.type === "TSAsExpression" ? "as" : "satisfies";
              Ne.push(X("expression"), ` ${it} `, X("typeAnnotation"));
              let ae = fe.getParentNode();
              return C(ae) && ae.callee === ie || w(ae) && ae.object === ie ? o([c([n, ...Ne]), n]) : Ne;
            }
            case "TSArrayType":
              return [X("elementType"), "[]"];
            case "TSPropertySignature":
              return ie.readonly && Ne.push("readonly "), Ne.push(S(fe, Pe, X), x(fe)), ie.typeAnnotation && Ne.push(": ", X("typeAnnotation")), ie.initializer && Ne.push(" = ", X("initializer")), Ne;
            case "TSParameterProperty":
              return ie.accessibility && Ne.push(ie.accessibility + " "), ie.export && Ne.push("export "), ie.static && Ne.push("static "), ie.override && Ne.push("override "), ie.readonly && Ne.push("readonly "), Ne.push(X("parameter")), Ne;
            case "TSTypeQuery":
              return ["typeof ", X("exprName"), X("typeParameters")];
            case "TSIndexSignature": {
              let it = fe.getParentNode(), ae = ie.parameters.length > 1 ? m(D(Pe) ? "," : "") : "", K = o([c([n, s([", ", n], fe.map(X, "parameters"))]), ae, n]);
              return [ie.export ? "export " : "", ie.accessibility ? [ie.accessibility, " "] : "", ie.static ? "static " : "", ie.readonly ? "readonly " : "", ie.declare ? "declare " : "", "[", ie.parameters ? K : "", ie.typeAnnotation ? "]: " : "]", ie.typeAnnotation ? X("typeAnnotation") : "", it.type === "ClassBody" ? Be : ""];
            }
            case "TSTypePredicate":
              return [ie.asserts ? "asserts " : "", X("parameterName"), ie.typeAnnotation ? [" is ", X("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [X("expression"), "!"];
            case "TSImportType":
              return [ie.isTypeOf ? "typeof " : "", "import(", X(ie.parameter ? "parameter" : "argument"), ")", ie.qualifier ? [".", X("qualifier")] : "", b(fe, Pe, X, "typeParameters")];
            case "TSLiteralType":
              return X("literal");
            case "TSIndexedAccessType":
              return R(fe, Pe, X);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (ie.type === "TSConstructorType" && ie.abstract && Ne.push("abstract "), ie.type !== "TSCallSignatureDeclaration" && Ne.push("new "), Ne.push(o(J(fe, X, Pe, !1, !0))), ie.returnType || ie.typeAnnotation) {
                let it = ie.type === "TSConstructorType";
                Ne.push(it ? " => " : ": ", X("returnType"), X("typeAnnotation"));
              }
              return Ne;
            }
            case "TSTypeOperator":
              return [ie.operator, " ", X("typeAnnotation")];
            case "TSMappedType": {
              let it = a(Pe.originalText, A(ie), N(ie));
              return o(["{", c([Pe.bracketSpacing ? e : n, X("typeParameter"), ie.optional ? p(ie.optional, "?") : "", ie.typeAnnotation ? ": " : "", X("typeAnnotation"), m(Be)]), t(fe, Pe, !0), Pe.bracketSpacing ? e : n, "}"], { shouldBreak: it });
            }
            case "TSMethodSignature": {
              let it = ie.kind && ie.kind !== "method" ? `${ie.kind} ` : "";
              Ne.push(ie.accessibility ? [ie.accessibility, " "] : "", it, ie.export ? "export " : "", ie.static ? "static " : "", ie.readonly ? "readonly " : "", ie.abstract ? "abstract " : "", ie.declare ? "declare " : "", ie.computed ? "[" : "", X("key"), ie.computed ? "]" : "", x(fe));
              let ae = J(fe, X, Pe, !1, !0), K = ie.returnType ? "returnType" : "typeAnnotation", ge = ie[K], Ee = ge ? X(K) : "", Oe = f(ie, Ee);
              return Ne.push(Oe ? o(ae) : ae), ge && Ne.push(": ", o(Ee)), o(Ne);
            }
            case "TSNamespaceExportDeclaration":
              return Ne.push("export as namespace ", X("id")), Pe.semi && Ne.push(";"), o(Ne);
            case "TSEnumDeclaration":
              return ie.declare && Ne.push("declare "), ie.modifiers && Ne.push(P(fe, Pe, X)), ie.const && Ne.push("const "), Ne.push("enum ", X("id"), " "), ie.members.length === 0 ? Ne.push(o(["{", t(fe, Pe), n, "}"])) : Ne.push(o(["{", c([r, d(fe, Pe, "members", X), D(Pe, "es5") ? "," : ""]), t(fe, Pe, !0), r, "}"])), Ne;
            case "TSEnumMember":
              return ie.computed ? Ne.push("[", X("id"), "]") : Ne.push(X("id")), ie.initializer && Ne.push(" = ", X("initializer")), Ne;
            case "TSImportEqualsDeclaration":
              return ie.isExport && Ne.push("export "), Ne.push("import "), ie.importKind && ie.importKind !== "value" && Ne.push(ie.importKind, " "), Ne.push(X("id"), " = ", X("moduleReference")), Pe.semi && Ne.push(";"), o(Ne);
            case "TSExternalModuleReference":
              return ["require(", X("expression"), ")"];
            case "TSModuleDeclaration": {
              let it = fe.getParentNode(), ae = g(ie.id), K = it.type === "TSModuleDeclaration", ge = ie.body && ie.body.type === "TSModuleDeclaration";
              if (K)
                Ne.push(".");
              else {
                ie.declare && Ne.push("declare "), Ne.push(P(fe, Pe, X));
                let Ee = Pe.originalText.slice(A(ie), A(ie.id));
                ie.id.type === "Identifier" && ie.id.name === "global" && !/namespace|module/.test(Ee) || Ne.push(ae || /(?:^|\s)module(?:\s|$)/.test(Ee) ? "module " : "namespace ");
              }
              return Ne.push(X("id")), ge ? Ne.push(X("body")) : ie.body ? Ne.push(" ", o(X("body"))) : Ne.push(Be), Ne;
            }
            case "TSConditionalType":
              return _(fe, Pe, X);
            case "TSInferType":
              return ["infer", " ", X("typeParameter")];
            case "TSIntersectionType":
              return ee(fe, Pe, X);
            case "TSUnionType":
              return j(fe, Pe, X);
            case "TSFunctionType":
              return De(fe, Pe, X);
            case "TSTupleType":
              return G(fe, Pe, X);
            case "TSTypeReference":
              return [X("typeName"), b(fe, Pe, X, "typeParameters")];
            case "TSTypeAnnotation":
              return X("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return I(fe, Pe, X);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return pe(fe, X, "?");
            case "TSJSDocNonNullableType":
              return pe(fe, X, "!");
            case "TSInstantiationExpression":
              return [X("expression"), X("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(ie.type)}.`);
          }
        }
        l.exports = { printTypescript: ve };
      } }), xa = O({ "src/language-js/print/comment.js"(u, l) {
        ne();
        var { hasNewline: t } = Ut(), { builders: { join: a, hardline: s }, utils: { replaceTextEndOfLine: e } } = wt(), { isLineComment: r } = ur(), { locStart: n, locEnd: o } = or(), c = vn();
        function y(p, D) {
          let C = p.getValue();
          if (r(C))
            return D.originalText.slice(n(C), o(C)).trimEnd();
          if (c(C)) {
            if (m(C)) {
              let A = g(C);
              return C.trailing && !t(D.originalText, n(C), { backwards: !0 }) ? [s, A] : A;
            }
            let w = o(C), k = D.originalText.slice(w - 3, w) === "*-/";
            return ["/*", e(C.value), k ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(C));
        }
        function m(p) {
          let D = `*${p.value}*`.split(`
`);
          return D.length > 1 && D.every((C) => C.trim()[0] === "*");
        }
        function g(p) {
          let D = p.value.split(`
`);
          return ["/*", a(s, D.map((C, w) => w === 0 ? C.trimEnd() : " " + (w < D.length - 1 ? C.trim() : C.trimStart()))), "*/"];
        }
        l.exports = { printComment: y };
      } }), Ta = O({ "src/language-js/print/literal.js"(u, l) {
        ne();
        var { printString: t, printNumber: a } = Ut(), { replaceTextEndOfLine: s } = En(), { printDirective: e } = Mr();
        function r(y, m) {
          let g = y.getNode();
          switch (g.type) {
            case "RegExpLiteral":
              return c(g);
            case "BigIntLiteral":
              return o(g.bigint || g.extra.raw);
            case "NumericLiteral":
              return a(g.extra.raw);
            case "StringLiteral":
              return s(t(g.extra.raw, m));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(g.value);
            case "DecimalLiteral":
              return a(g.value) + "m";
            case "Literal": {
              if (g.regex)
                return c(g.regex);
              if (g.bigint)
                return o(g.raw);
              if (g.decimal)
                return a(g.decimal) + "m";
              let { value: p } = g;
              return typeof p == "number" ? a(g.raw) : typeof p == "string" ? n(y) ? e(g.raw, m) : s(t(g.raw, m)) : String(p);
            }
          }
        }
        function n(y) {
          if (y.getName() !== "expression")
            return;
          let m = y.getParentNode();
          return m.type === "ExpressionStatement" && m.directive;
        }
        function o(y) {
          return y.toLowerCase();
        }
        function c(y) {
          let { pattern: m, flags: g } = y;
          return g = [...g].sort().join(""), `/${m}/${g}`;
        }
        l.exports = { printLiteral: r };
      } }), Ba = O({ "src/language-js/printer-estree.js"(u, l) {
        ne();
        var { printDanglingComments: t } = Qt(), { hasNewline: a } = Ut(), { builders: { join: s, line: e, hardline: r, softline: n, group: o, indent: c }, utils: { replaceTextEndOfLine: y } } = wt(), m = la(), g = pa(), { insertPragma: p } = ks(), D = Ps(), C = Ln(), w = Is(), { hasFlowShorthandAnnotationComment: k, hasComment: A, CommentCheckFlags: N, isTheOnlyJsxElementInMarkdown: x, isLineComment: P, isNextLineEmpty: _, needsHardlineAfterDanglingComment: J, hasIgnoreComment: f, isCallExpression: T, isMemberExpression: d, markerForIfWithoutBlockAndSameLineComment: F } = ur(), { locStart: i, locEnd: h } = or(), E = vn(), { printHtmlBinding: b, isVueEventBindingExpression: S } = Ea(), { printAngular: B } = Ca(), { printJsx: I, hasJsxIgnoreComment: M } = Fa(), { printFlow: U } = va(), { printTypescript: q } = Sa(), { printOptionalToken: ee, printBindExpressionCallee: j, printTypeAnnotation: De, adjustClause: G, printRestSpread: R, printDefiniteToken: pe, printDirective: ve } = Mr(), { printImportDeclaration: fe, printExportDeclaration: Pe, printExportAllDeclaration: X, printModuleSpecifier: ie } = Rs(), { printTernary: Be } = Ms(), { printTemplateLiteral: Ne } = jn(), { printArray: it } = Du(), { printObject: ae } = ls(), { printClass: K, printClassMethod: ge, printClassProperty: Ee } = mu(), { printProperty: Oe } = fu(), { printFunction: Xe, printArrowFunction: He, printMethod: Ct, printReturnStatement: Rt, printThrowStatement: It } = ri(), { printCallExpression: Et } = Os(), { printVariableDeclarator: bt, printAssignmentExpression: Se } = du(), { printBinaryishExpression: H } = as(), { printSwitchCaseConsequent: _e } = qs(), { printMemberExpression: se } = Ls(), { printBlock: Te, printBlockBody: pt } = Vs(), { printComment: ut } = xa(), { printLiteral: je } = Ta(), { printDecorators: v } = os();
        function oe(tt, ht, Ye, pr) {
          let dt = $e(tt, ht, Ye, pr);
          if (!dt)
            return "";
          let ar = tt.getValue(), { type: Dt } = ar;
          if (Dt === "ClassMethod" || Dt === "ClassPrivateMethod" || Dt === "ClassProperty" || Dt === "ClassAccessorProperty" || Dt === "AccessorProperty" || Dt === "TSAbstractAccessorProperty" || Dt === "PropertyDefinition" || Dt === "TSAbstractPropertyDefinition" || Dt === "ClassPrivateProperty" || Dt === "MethodDefinition" || Dt === "TSAbstractMethodDefinition" || Dt === "TSDeclareMethod")
            return dt;
          let Tt = [dt], jt = v(tt, ht, Ye), tr = ar.type === "ClassExpression" && jt;
          if (jt && (Tt = [...jt, dt], !tr))
            return o(Tt);
          if (!C(tt, ht))
            return pr && pr.needsSemi && Tt.unshift(";"), Tt.length === 1 && Tt[0] === dt ? dt : Tt;
          if (tr && (Tt = [c([e, ...Tt])]), Tt.unshift("("), pr && pr.needsSemi && Tt.unshift(";"), k(ar)) {
            let [ft] = ar.trailingComments;
            Tt.push(" /*", ft.value.trimStart(), "*/"), ft.printed = !0;
          }
          return tr && Tt.push(e), Tt.push(")"), Tt;
        }
        function $e(tt, ht, Ye, pr) {
          let dt = tt.getValue(), ar = ht.semi ? ";" : "";
          if (!dt)
            return "";
          if (typeof dt == "string")
            return dt;
          for (let Tt of [je, b, B, I, U, q]) {
            let jt = Tt(tt, ht, Ye);
            if (typeof jt < "u")
              return jt;
          }
          let Dt = [];
          switch (dt.type) {
            case "JsExpressionRoot":
              return Ye("node");
            case "JsonRoot":
              return [Ye("node"), r];
            case "File":
              return dt.program && dt.program.interpreter && Dt.push(Ye(["program", "interpreter"])), Dt.push(Ye("program")), Dt;
            case "Program":
              return pt(tt, ht, Ye);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (ht.parser === "__vue_event_binding" || ht.parser === "__vue_ts_event_binding") {
                let jt = tt.getParentNode();
                if (jt.type === "Program" && jt.body.length === 1 && jt.body[0] === dt)
                  return [Ye("expression"), S(dt.expression) ? ";" : ""];
              }
              let Tt = t(tt, ht, !0, (jt) => {
                let { marker: tr } = jt;
                return tr === F;
              });
              return [Ye("expression"), x(ht, tt) ? "" : ar, Tt ? [" ", Tt] : ""];
            }
            case "ParenthesizedExpression":
              return !A(dt.expression) && (dt.expression.type === "ObjectExpression" || dt.expression.type === "ArrayExpression") ? ["(", Ye("expression"), ")"] : o(["(", c([n, Ye("expression")]), n, ")"]);
            case "AssignmentExpression":
              return Se(tt, ht, Ye);
            case "VariableDeclarator":
              return bt(tt, ht, Ye);
            case "BinaryExpression":
            case "LogicalExpression":
              return H(tt, ht, Ye);
            case "AssignmentPattern":
              return [Ye("left"), " = ", Ye("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return se(tt, ht, Ye);
            case "MetaProperty":
              return [Ye("meta"), ".", Ye("property")];
            case "BindExpression":
              return dt.object && Dt.push(Ye("object")), Dt.push(o(c([n, j(tt, ht, Ye)]))), Dt;
            case "Identifier":
              return [dt.name, ee(tt), pe(tt), De(tt, ht, Ye)];
            case "V8IntrinsicIdentifier":
              return ["%", dt.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return R(tt, ht, Ye);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return Xe(tt, Ye, ht, pr);
            case "ArrowFunctionExpression":
              return He(tt, ht, Ye, pr);
            case "YieldExpression":
              return Dt.push("yield"), dt.delegate && Dt.push("*"), dt.argument && Dt.push(" ", Ye("argument")), Dt;
            case "AwaitExpression": {
              if (Dt.push("await"), dt.argument) {
                Dt.push(" ", Ye("argument"));
                let Tt = tt.getParentNode();
                if (T(Tt) && Tt.callee === dt || d(Tt) && Tt.object === dt) {
                  Dt = [c([n, ...Dt]), n];
                  let jt = tt.findAncestor((tr) => tr.type === "AwaitExpression" || tr.type === "BlockStatement");
                  if (!jt || jt.type !== "AwaitExpression")
                    return o(Dt);
                }
              }
              return Dt;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return Pe(tt, ht, Ye);
            case "ExportAllDeclaration":
              return X(tt, ht, Ye);
            case "ImportDeclaration":
              return fe(tt, ht, Ye);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return ie(tt, ht, Ye);
            case "ImportAttribute":
              return [Ye("key"), ": ", Ye("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return Te(tt, ht, Ye);
            case "ThrowStatement":
              return It(tt, ht, Ye);
            case "ReturnStatement":
              return Rt(tt, ht, Ye);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return Et(tt, ht, Ye);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return ae(tt, ht, Ye);
            case "ObjectProperty":
            case "Property":
              return dt.method || dt.kind === "get" || dt.kind === "set" ? Ct(tt, ht, Ye) : Oe(tt, ht, Ye);
            case "ObjectMethod":
              return Ct(tt, ht, Ye);
            case "Decorator":
              return ["@", Ye("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return it(tt, ht, Ye);
            case "SequenceExpression": {
              let Tt = tt.getParentNode(0);
              if (Tt.type === "ExpressionStatement" || Tt.type === "ForStatement") {
                let jt = [];
                return tt.each((tr, ft) => {
                  ft === 0 ? jt.push(Ye()) : jt.push(",", c([e, Ye()]));
                }, "expressions"), o(jt);
              }
              return o(s([",", e], tt.map(Ye, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [Ye("value"), ar];
            case "DirectiveLiteral":
              return ve(dt.extra.raw, ht);
            case "UnaryExpression":
              return Dt.push(dt.operator), /[a-z]$/.test(dt.operator) && Dt.push(" "), A(dt.argument) ? Dt.push(o(["(", c([n, Ye("argument")]), n, ")"])) : Dt.push(Ye("argument")), Dt;
            case "UpdateExpression":
              return Dt.push(Ye("argument"), dt.operator), dt.prefix && Dt.reverse(), Dt;
            case "ConditionalExpression":
              return Be(tt, ht, Ye);
            case "VariableDeclaration": {
              let Tt = tt.map(Ye, "declarations"), jt = tt.getParentNode(), tr = jt.type === "ForStatement" || jt.type === "ForInStatement" || jt.type === "ForOfStatement", ft = dt.declarations.some((Bt) => Bt.init), Pt;
              return Tt.length === 1 && !A(dt.declarations[0]) ? Pt = Tt[0] : Tt.length > 0 && (Pt = c(Tt[0])), Dt = [dt.declare ? "declare " : "", dt.kind, Pt ? [" ", Pt] : "", c(Tt.slice(1).map((Bt) => [",", ft && !tr ? r : e, Bt]))], tr && jt.body !== dt || Dt.push(ar), o(Dt);
            }
            case "WithStatement":
              return o(["with (", Ye("object"), ")", G(dt.body, Ye("body"))]);
            case "IfStatement": {
              let Tt = G(dt.consequent, Ye("consequent")), jt = o(["if (", o([c([n, Ye("test")]), n]), ")", Tt]);
              if (Dt.push(jt), dt.alternate) {
                let tr = A(dt.consequent, N.Trailing | N.Line) || J(dt), ft = dt.consequent.type === "BlockStatement" && !tr;
                Dt.push(ft ? " " : r), A(dt, N.Dangling) && Dt.push(t(tt, ht, !0), tr ? r : " "), Dt.push("else", o(G(dt.alternate, Ye("alternate"), dt.alternate.type === "IfStatement")));
              }
              return Dt;
            }
            case "ForStatement": {
              let Tt = G(dt.body, Ye("body")), jt = t(tt, ht, !0), tr = jt ? [jt, n] : "";
              return !dt.init && !dt.test && !dt.update ? [tr, o(["for (;;)", Tt])] : [tr, o(["for (", o([c([n, Ye("init"), ";", e, Ye("test"), ";", e, Ye("update")]), n]), ")", Tt])];
            }
            case "WhileStatement":
              return o(["while (", o([c([n, Ye("test")]), n]), ")", G(dt.body, Ye("body"))]);
            case "ForInStatement":
              return o(["for (", Ye("left"), " in ", Ye("right"), ")", G(dt.body, Ye("body"))]);
            case "ForOfStatement":
              return o(["for", dt.await ? " await" : "", " (", Ye("left"), " of ", Ye("right"), ")", G(dt.body, Ye("body"))]);
            case "DoWhileStatement": {
              let Tt = G(dt.body, Ye("body"));
              return Dt = [o(["do", Tt])], dt.body.type === "BlockStatement" ? Dt.push(" ") : Dt.push(r), Dt.push("while (", o([c([n, Ye("test")]), n]), ")", ar), Dt;
            }
            case "DoExpression":
              return [dt.async ? "async " : "", "do ", Ye("body")];
            case "BreakStatement":
              return Dt.push("break"), dt.label && Dt.push(" ", Ye("label")), Dt.push(ar), Dt;
            case "ContinueStatement":
              return Dt.push("continue"), dt.label && Dt.push(" ", Ye("label")), Dt.push(ar), Dt;
            case "LabeledStatement":
              return dt.body.type === "EmptyStatement" ? [Ye("label"), ":;"] : [Ye("label"), ": ", Ye("body")];
            case "TryStatement":
              return ["try ", Ye("block"), dt.handler ? [" ", Ye("handler")] : "", dt.finalizer ? [" finally ", Ye("finalizer")] : ""];
            case "CatchClause":
              if (dt.param) {
                let Tt = A(dt.param, (tr) => !E(tr) || tr.leading && a(ht.originalText, h(tr)) || tr.trailing && a(ht.originalText, i(tr), { backwards: !0 })), jt = Ye("param");
                return ["catch ", Tt ? ["(", c([n, jt]), n, ") "] : ["(", jt, ") "], Ye("body")];
              }
              return ["catch ", Ye("body")];
            case "SwitchStatement":
              return [o(["switch (", c([n, Ye("discriminant")]), n, ")"]), " {", dt.cases.length > 0 ? c([r, s(r, tt.map((Tt, jt, tr) => {
                let ft = Tt.getValue();
                return [Ye(), jt !== tr.length - 1 && _(ft, ht) ? r : ""];
              }, "cases"))]) : "", r, "}"];
            case "SwitchCase": {
              dt.test ? Dt.push("case ", Ye("test"), ":") : Dt.push("default:"), A(dt, N.Dangling) && Dt.push(" ", t(tt, ht, !0));
              let Tt = dt.consequent.filter((jt) => jt.type !== "EmptyStatement");
              if (Tt.length > 0) {
                let jt = _e(tt, ht, Ye);
                Dt.push(Tt.length === 1 && Tt[0].type === "BlockStatement" ? [" ", jt] : c([r, jt]));
              }
              return Dt;
            }
            case "DebuggerStatement":
              return ["debugger", ar];
            case "ClassDeclaration":
            case "ClassExpression":
              return K(tt, ht, Ye);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return ge(tt, ht, Ye);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
            case "AccessorProperty":
              return Ee(tt, ht, Ye);
            case "TemplateElement":
              return y(dt.value.raw);
            case "TemplateLiteral":
              return Ne(tt, Ye, ht);
            case "TaggedTemplateExpression":
              return [Ye("tag"), Ye("typeParameters"), Ye("quasi")];
            case "PrivateIdentifier":
              return ["#", Ye("name")];
            case "PrivateName":
              return ["#", Ye("id")];
            case "InterpreterDirective":
              return Dt.push("#!", dt.value, r), _(dt, ht) && Dt.push(r), Dt;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              Dt.push("module {");
              let Tt = Ye("body");
              return Tt && Dt.push(c([r, Tt]), r), Dt.push("}"), Dt;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(dt.type));
          }
        }
        function Ke(tt) {
          return tt.type && !E(tt) && !P(tt) && tt.type !== "EmptyStatement" && tt.type !== "TemplateElement" && tt.type !== "Import" && tt.type !== "TSEmptyBodyFunctionExpression";
        }
        l.exports = { preprocess: w, print: oe, embed: m, insertPragma: p, massageAstNode: g, hasPrettierIgnore(tt) {
          return f(tt) || M(tt);
        }, willPrintOwnComments: D.willPrintOwnComments, canAttachComment: Ke, printComment: ut, isBlockComment: E, handleComments: { avoidAstMutation: !0, ownLine: D.handleOwnLineComment, endOfLine: D.handleEndOfLineComment, remaining: D.handleRemainingComment }, getCommentChildNodes: D.getCommentChildNodes };
      } }), wa = O({ "src/language-js/printer-estree-json.js"(u, l) {
        ne();
        var { builders: { hardline: t, indent: a, join: s } } = wt(), e = Is();
        function r(y, m, g) {
          let p = y.getValue();
          switch (p.type) {
            case "JsonRoot":
              return [g("node"), t];
            case "ArrayExpression": {
              if (p.elements.length === 0)
                return "[]";
              let D = y.map(() => y.getValue() === null ? "null" : g(), "elements");
              return ["[", a([t, s([",", t], D)]), t, "]"];
            }
            case "ObjectExpression":
              return p.properties.length === 0 ? "{}" : ["{", a([t, s([",", t], y.map(g, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [g("key"), ": ", g("value")];
            case "UnaryExpression":
              return [p.operator === "+" ? "" : p.operator, g("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return p.value ? "true" : "false";
            case "StringLiteral":
              return JSON.stringify(p.value);
            case "NumericLiteral":
              return n(y) ? JSON.stringify(String(p.value)) : JSON.stringify(p.value);
            case "Identifier":
              return n(y) ? JSON.stringify(p.name) : p.name;
            case "TemplateLiteral":
              return g(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(p.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(p.type));
          }
        }
        function n(y) {
          return y.getName() === "key" && y.getParentNode().type === "ObjectProperty";
        }
        var o = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function c(y, m) {
          let { type: g } = y;
          if (g === "ObjectProperty") {
            let { key: p } = y;
            p.type === "Identifier" ? m.key = { type: "StringLiteral", value: p.name } : p.type === "NumericLiteral" && (m.key = { type: "StringLiteral", value: String(p.value) });
            return;
          }
          if (g === "UnaryExpression" && y.operator === "+")
            return m.argument;
          if (g === "ArrayExpression") {
            for (let [p, D] of y.elements.entries())
              D === null && m.elements.splice(p, 0, { type: "NullLiteral" });
            return;
          }
          if (g === "TemplateLiteral")
            return { type: "StringLiteral", value: y.quasis[0].value.cooked };
        }
        c.ignoredProperties = o, l.exports = { preprocess: e, print: r, massageAstNode: c };
      } }), On = O({ "src/common/common-options.js"(u, l) {
        ne();
        var t = "Common";
        l.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), Na = O({ "src/language-js/options.js"(u, l) {
        ne();
        var t = On(), a = "JavaScript";
        l.exports = { arrowParens: { since: "1.9.0", category: a, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: a, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: a, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: a, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: a, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: a, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
      } }), _a = O({ "src/language-js/parse/parsers.js"() {
        ne();
      } }), ps = O({ "node_modules/linguist-languages/data/JavaScript.json"(u, l) {
        l.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), ka = O({ "node_modules/linguist-languages/data/TypeScript.json"(u, l) {
        l.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), Pa = O({ "node_modules/linguist-languages/data/TSX.json"(u, l) {
        l.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), Gs = O({ "node_modules/linguist-languages/data/JSON.json"(u, l) {
        l.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), Ia = O({ "node_modules/linguist-languages/data/JSON with Comments.json"(u, l) {
        l.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), ja = O({ "node_modules/linguist-languages/data/JSON5.json"(u, l) {
        l.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), La = O({ "src/language-js/index.js"(u, l) {
        ne();
        var t = vr(), a = Ba(), s = wa(), e = Na(), r = _a(), n = [t(ps(), (c) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...c.interpreters, "zx"], extensions: [...c.extensions.filter((y) => y !== ".jsx"), ".wxs"] })), t(ps(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t(ps(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t(ka(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t(Pa(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t(Gs(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t(Gs(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: c.extensions.filter((y) => y !== ".jsonl") })), t(Ia(), (c) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...c.filenames, ".eslintrc", ".swcrc"] })), t(ja(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], o = { estree: a, "estree-json": s };
        l.exports = { languages: n, options: e, printers: o, parsers: r };
      } }), Oa = O({ "src/language-css/clean.js"(u, l) {
        ne();
        var { isFrontMatterNode: t } = Ut(), a = mr(), s = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function e(n, o, c) {
          if (t(n) && n.lang === "yaml" && delete o.value, n.type === "css-comment" && c.type === "css-root" && c.nodes.length > 0 && ((c.nodes[0] === n || t(c.nodes[0]) && c.nodes[1] === n) && (delete o.text, /^\*\s*@(?:format|prettier)\s*$/.test(n.text)) || c.type === "css-root" && a(c.nodes) === n))
            return null;
          if (n.type === "value-root" && delete o.text, (n.type === "media-query" || n.type === "media-query-list" || n.type === "media-feature-expression") && delete o.value, n.type === "css-rule" && delete o.params, n.type === "selector-combinator" && (o.value = o.value.replace(/\s+/g, " ")), n.type === "media-feature" && (o.value = o.value.replace(/ /g, "")), (n.type === "value-word" && (n.isColor && n.isHex || ["initial", "inherit", "unset", "revert"].includes(o.value.replace().toLowerCase())) || n.type === "media-feature" || n.type === "selector-root-invalid" || n.type === "selector-pseudo") && (o.value = o.value.toLowerCase()), n.type === "css-decl" && (o.prop = o.prop.toLowerCase()), (n.type === "css-atrule" || n.type === "css-import") && (o.name = o.name.toLowerCase()), n.type === "value-number" && (o.unit = o.unit.toLowerCase()), (n.type === "media-feature" || n.type === "media-keyword" || n.type === "media-type" || n.type === "media-unknown" || n.type === "media-url" || n.type === "media-value" || n.type === "selector-attribute" || n.type === "selector-string" || n.type === "selector-class" || n.type === "selector-combinator" || n.type === "value-string") && o.value && (o.value = r(o.value)), n.type === "selector-attribute" && (o.attribute = o.attribute.trim(), o.namespace && typeof o.namespace == "string" && (o.namespace = o.namespace.trim(), o.namespace.length === 0 && (o.namespace = !0)), o.value && (o.value = o.value.trim().replace(/^["']|["']$/g, ""), delete o.quoted)), (n.type === "media-value" || n.type === "media-type" || n.type === "value-number" || n.type === "selector-root-invalid" || n.type === "selector-class" || n.type === "selector-combinator" || n.type === "selector-tag") && o.value && (o.value = o.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (y, m, g) => {
            let p = Number(m);
            return Number.isNaN(p) ? y : p + g.toLowerCase();
          })), n.type === "selector-tag") {
            let y = n.value.toLowerCase();
            ["from", "to"].includes(y) && (o.value = y);
          }
          if (n.type === "css-atrule" && n.name.toLowerCase() === "supports" && delete o.value, n.type === "selector-unknown" && delete o.value, n.type === "value-comma_group") {
            let y = n.groups.findIndex((m) => m.type === "value-number" && m.unit === "...");
            y !== -1 && (o.groups[y].unit = "", o.groups.splice(y + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
          }
          if (n.type === "value-comma_group" && n.groups.some((y) => y.type === "value-atword" && y.value.endsWith("[") || y.type === "value-word" && y.value.startsWith("]")))
            return { type: "value-atword", value: n.groups.map((y) => y.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
        }
        e.ignoredProperties = s;
        function r(n) {
          return n.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        l.exports = e;
      } }), cs = O({ "src/utils/front-matter/print.js"(u, l) {
        ne();
        var { builders: { hardline: t, markAsRoot: a } } = wt();
        function s(e, r) {
          if (e.lang === "yaml") {
            let n = e.value.trim(), o = n ? r(n, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
            return a([e.startDelimiter, t, o, o ? t : "", e.endDelimiter]);
          }
        }
        l.exports = s;
      } }), $a = O({ "src/language-css/embed.js"(u, l) {
        ne();
        var { builders: { hardline: t } } = wt(), a = cs();
        function s(e, r, n) {
          let o = e.getValue();
          if (o.type === "front-matter") {
            let c = a(o, n);
            return c ? [c, t] : "";
          }
        }
        l.exports = s;
      } }), Us = O({ "src/utils/front-matter/parse.js"(u, l) {
        ne();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function a(s) {
          let e = s.match(t);
          if (!e)
            return { content: s };
          let { startDelimiter: r, language: n, value: o = "", endDelimiter: c } = e.groups, y = n.trim() || "yaml";
          if (r === "+++" && (y = "toml"), y !== "yaml" && r !== c)
            return { content: s };
          let [m] = e;
          return { frontMatter: { type: "front-matter", lang: y, value: o, startDelimiter: r, endDelimiter: c, raw: m.replace(/\n$/, "") }, content: m.replace(/[^\n]/g, " ") + s.slice(m.length) };
        }
        l.exports = a;
      } }), Ra = O({ "src/language-css/pragma.js"(u, l) {
        ne();
        var t = ks(), a = Us();
        function s(r) {
          return t.hasPragma(a(r).content);
        }
        function e(r) {
          let { frontMatter: n, content: o } = a(r);
          return (n ? n.raw + `

` : "") + t.insertPragma(o);
        }
        l.exports = { hasPragma: s, insertPragma: e };
      } }), Ma = O({ "src/language-css/utils/index.js"(u, l) {
        ne();
        var t = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function a(ae, K) {
          let ge = Array.isArray(K) ? K : [K], Ee = -1, Oe;
          for (; Oe = ae.getParentNode(++Ee); )
            if (ge.includes(Oe.type))
              return Ee;
          return -1;
        }
        function s(ae, K) {
          let ge = a(ae, K);
          return ge === -1 ? null : ae.getParentNode(ge);
        }
        function e(ae) {
          var K;
          let ge = s(ae, "css-decl");
          return ge == null || (K = ge.prop) === null || K === void 0 ? void 0 : K.toLowerCase();
        }
        var r = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function n(ae) {
          return r.has(ae.toLowerCase());
        }
        function o(ae, K) {
          let ge = s(ae, "css-atrule");
          return ge?.name && ge.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(K.toLowerCase());
        }
        function c(ae) {
          return ae.includes("$") || ae.includes("@") || ae.includes("#") || ae.startsWith("%") || ae.startsWith("--") || ae.startsWith(":--") || ae.includes("(") && ae.includes(")") ? ae : ae.toLowerCase();
        }
        function y(ae, K) {
          var ge;
          let Ee = s(ae, "value-func");
          return (Ee == null || (ge = Ee.value) === null || ge === void 0 ? void 0 : ge.toLowerCase()) === K;
        }
        function m(ae) {
          var K;
          let ge = s(ae, "css-rule"), Ee = ge == null || (K = ge.raws) === null || K === void 0 ? void 0 : K.selector;
          return Ee && (Ee.startsWith(":import") || Ee.startsWith(":export"));
        }
        function g(ae, K) {
          let ge = Array.isArray(K) ? K : [K], Ee = s(ae, "css-atrule");
          return Ee && ge.includes(Ee.name.toLowerCase());
        }
        function p(ae) {
          let K = ae.getValue();
          return s(ae, "css-atrule")?.name === "import" && K.groups[0].value === "url" && K.groups.length === 2;
        }
        function D(ae) {
          return ae.type === "value-func" && ae.value.toLowerCase() === "url";
        }
        function C(ae, K) {
          var ge;
          let Ee = (ge = ae.getParentNode()) === null || ge === void 0 ? void 0 : ge.nodes;
          return Ee && Ee.indexOf(K) === Ee.length - 1;
        }
        function w(ae) {
          let { selector: K } = ae;
          return K ? typeof K == "string" && /^@.+:.*$/.test(K) || K.value && /^@.+:.*$/.test(K.value) : !1;
        }
        function k(ae) {
          return ae.type === "value-word" && ["from", "through", "end"].includes(ae.value);
        }
        function A(ae) {
          return ae.type === "value-word" && ["and", "or", "not"].includes(ae.value);
        }
        function N(ae) {
          return ae.type === "value-word" && ae.value === "in";
        }
        function x(ae) {
          return ae.type === "value-operator" && ae.value === "*";
        }
        function P(ae) {
          return ae.type === "value-operator" && ae.value === "/";
        }
        function _(ae) {
          return ae.type === "value-operator" && ae.value === "+";
        }
        function J(ae) {
          return ae.type === "value-operator" && ae.value === "-";
        }
        function f(ae) {
          return ae.type === "value-operator" && ae.value === "%";
        }
        function T(ae) {
          return x(ae) || P(ae) || _(ae) || J(ae) || f(ae);
        }
        function d(ae) {
          return ae.type === "value-word" && ["==", "!="].includes(ae.value);
        }
        function F(ae) {
          return ae.type === "value-word" && ["<", ">", "<=", ">="].includes(ae.value);
        }
        function i(ae) {
          return ae.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(ae.name);
        }
        function h(ae) {
          var K;
          return ((K = ae.raws) === null || K === void 0 ? void 0 : K.params) && /^\(\s*\)$/.test(ae.raws.params);
        }
        function E(ae) {
          return ae.name.startsWith("prettier-placeholder");
        }
        function b(ae) {
          return ae.prop.startsWith("@prettier-placeholder");
        }
        function S(ae, K) {
          return ae.value === "$$" && ae.type === "value-func" && K?.type === "value-word" && !K.raws.before;
        }
        function B(ae) {
          var K, ge;
          return ((K = ae.value) === null || K === void 0 ? void 0 : K.type) === "value-root" && ((ge = ae.value.group) === null || ge === void 0 ? void 0 : ge.type) === "value-value" && ae.prop.toLowerCase() === "composes";
        }
        function I(ae) {
          var K, ge, Ee;
          return ((K = ae.value) === null || K === void 0 || (ge = K.group) === null || ge === void 0 || (Ee = ge.group) === null || Ee === void 0 ? void 0 : Ee.type) === "value-paren_group" && ae.value.group.group.open !== null && ae.value.group.group.close !== null;
        }
        function M(ae) {
          var K;
          return ((K = ae.raws) === null || K === void 0 ? void 0 : K.before) === "";
        }
        function U(ae) {
          var K, ge;
          return ae.type === "value-comma_group" && ((K = ae.groups) === null || K === void 0 || (ge = K[1]) === null || ge === void 0 ? void 0 : ge.type) === "value-colon";
        }
        function q(ae) {
          var K;
          return ae.type === "value-paren_group" && ((K = ae.groups) === null || K === void 0 ? void 0 : K[0]) && U(ae.groups[0]);
        }
        function ee(ae) {
          var K;
          let ge = ae.getValue();
          if (ge.groups.length === 0)
            return !1;
          let Ee = ae.getParentNode(1);
          if (!q(ge) && !(Ee && q(Ee)))
            return !1;
          let Oe = s(ae, "css-decl");
          return !!(Oe != null && (K = Oe.prop) !== null && K !== void 0 && K.startsWith("$") || q(Ee) || Ee.type === "value-func");
        }
        function j(ae) {
          return ae.type === "value-comment" && ae.inline;
        }
        function De(ae) {
          return ae.type === "value-word" && ae.value === "#";
        }
        function G(ae) {
          return ae.type === "value-word" && ae.value === "{";
        }
        function R(ae) {
          return ae.type === "value-word" && ae.value === "}";
        }
        function pe(ae) {
          return ["value-word", "value-atword"].includes(ae.type);
        }
        function ve(ae) {
          return ae?.type === "value-colon";
        }
        function fe(ae, K) {
          if (!U(K))
            return !1;
          let { groups: ge } = K, Ee = ge.indexOf(ae);
          return Ee === -1 ? !1 : ve(ge[Ee + 1]);
        }
        function Pe(ae) {
          return ae.value && ["not", "and", "or"].includes(ae.value.toLowerCase());
        }
        function X(ae) {
          return ae.type !== "value-func" ? !1 : t.has(ae.value.toLowerCase());
        }
        function ie(ae) {
          return /\/\//.test(ae.split(/[\n\r]/).pop());
        }
        function Be(ae) {
          return ae?.type === "value-atword" && ae.value.startsWith("prettier-placeholder-");
        }
        function Ne(ae, K) {
          var ge, Ee;
          if (((ge = ae.open) === null || ge === void 0 ? void 0 : ge.value) !== "(" || ((Ee = ae.close) === null || Ee === void 0 ? void 0 : Ee.value) !== ")" || ae.groups.some((Oe) => Oe.type !== "value-comma_group"))
            return !1;
          if (K.type === "value-comma_group") {
            let Oe = K.groups.indexOf(ae) - 1, Xe = K.groups[Oe];
            if (Xe?.type === "value-word" && Xe.value === "with")
              return !0;
          }
          return !1;
        }
        function it(ae) {
          var K, ge;
          return ae.type === "value-paren_group" && ((K = ae.open) === null || K === void 0 ? void 0 : K.value) === "(" && ((ge = ae.close) === null || ge === void 0 ? void 0 : ge.value) === ")";
        }
        l.exports = { getAncestorCounter: a, getAncestorNode: s, getPropOfDeclNode: e, maybeToLowerCase: c, insideValueFunctionNode: y, insideICSSRuleNode: m, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: p, isKeyframeAtRuleKeywords: o, isWideKeywords: n, isLastNode: C, isSCSSControlDirectiveNode: i, isDetachedRulesetDeclarationNode: w, isRelationalOperatorNode: F, isEqualityOperatorNode: d, isMultiplicationNode: x, isDivisionNode: P, isAdditionNode: _, isSubtractionNode: J, isModuloNode: f, isMathOperatorNode: T, isEachKeywordNode: N, isForKeywordNode: k, isURLFunctionNode: D, isIfElseKeywordNode: A, hasComposesNode: B, hasParensAroundNode: I, hasEmptyRawBefore: M, isDetachedRulesetCallNode: h, isTemplatePlaceholderNode: E, isTemplatePropNode: b, isPostcssSimpleVarNode: S, isKeyValuePairNode: U, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: fe, isSCSSMapItemNode: ee, isInlineValueCommentNode: j, isHashNode: De, isLeftCurlyBraceNode: G, isRightCurlyBraceNode: R, isWordNode: pe, isColonNode: ve, isMediaAndSupportsKeywords: Pe, isColorAdjusterFuncNode: X, lastLineHasInlineComment: ie, isAtWordPlaceholderNode: Be, isConfigurationNode: Ne, isParenGroupNode: it };
      } }), qa = O({ "src/utils/line-column-to-index.js"(u, l) {
        ne(), l.exports = function(t, a) {
          let s = 0;
          for (let e = 0; e < t.line - 1; ++e)
            s = a.indexOf(`
`, s) + 1;
          return s + t.column;
        };
      } }), Va = O({ "src/language-css/loc.js"(u, l) {
        ne();
        var { skipEverythingButNewLine: t } = Cn(), a = mr(), s = qa();
        function e(p, D) {
          return typeof p.sourceIndex == "number" ? p.sourceIndex : p.source ? s(p.source.start, D) - 1 : null;
        }
        function r(p, D) {
          if (p.type === "css-comment" && p.inline)
            return t(D, p.source.startOffset);
          let C = p.nodes && a(p.nodes);
          return C && p.source && !p.source.end && (p = C), p.source && p.source.end ? s(p.source.end, D) : null;
        }
        function n(p, D) {
          p.source && (p.source.startOffset = e(p, D), p.source.endOffset = r(p, D));
          for (let C in p) {
            let w = p[C];
            C === "source" || !w || typeof w != "object" || (w.type === "value-root" || w.type === "value-unknown" ? o(w, c(p), w.text || w.value) : n(w, D));
          }
        }
        function o(p, D, C) {
          p.source && (p.source.startOffset = e(p, C) + D, p.source.endOffset = r(p, C) + D);
          for (let w in p) {
            let k = p[w];
            w === "source" || !k || typeof k != "object" || o(k, D, C);
          }
        }
        function c(p) {
          let D = p.source.startOffset;
          return typeof p.prop == "string" && (D += p.prop.length), p.type === "css-atrule" && typeof p.name == "string" && (D += 1 + p.name.length + p.raws.afterName.match(/^\s*:?\s*/)[0].length), p.type !== "css-atrule" && p.raws && typeof p.raws.between == "string" && (D += p.raws.between.length), D;
        }
        function y(p) {
          let D = "initial", C = "initial", w, k = !1, A = [];
          for (let N = 0; N < p.length; N++) {
            let x = p[N];
            switch (D) {
              case "initial":
                if (x === "'") {
                  D = "single-quotes";
                  continue;
                }
                if (x === '"') {
                  D = "double-quotes";
                  continue;
                }
                if ((x === "u" || x === "U") && p.slice(N, N + 4).toLowerCase() === "url(") {
                  D = "url", N += 3;
                  continue;
                }
                if (x === "*" && p[N - 1] === "/") {
                  D = "comment-block";
                  continue;
                }
                if (x === "/" && p[N - 1] === "/") {
                  D = "comment-inline", w = N - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (x === "'" && p[N - 1] !== "\\" && (D = C, C = "initial"), x === `
` || x === "\r")
                  return p;
                continue;
              case "double-quotes":
                if (x === '"' && p[N - 1] !== "\\" && (D = C, C = "initial"), x === `
` || x === "\r")
                  return p;
                continue;
              case "url":
                if (x === ")" && (D = "initial"), x === `
` || x === "\r")
                  return p;
                if (x === "'") {
                  D = "single-quotes", C = "url";
                  continue;
                }
                if (x === '"') {
                  D = "double-quotes", C = "url";
                  continue;
                }
                continue;
              case "comment-block":
                x === "/" && p[N - 1] === "*" && (D = "initial");
                continue;
              case "comment-inline":
                (x === '"' || x === "'" || x === "*") && (k = !0), (x === `
` || x === "\r") && (k && A.push([w, N]), D = "initial", k = !1);
                continue;
            }
          }
          for (let [N, x] of A)
            p = p.slice(0, N) + p.slice(N, x).replace(/["'*]/g, " ") + p.slice(x);
          return p;
        }
        function m(p) {
          return p.source.startOffset;
        }
        function g(p) {
          return p.source.endOffset;
        }
        l.exports = { locStart: m, locEnd: g, calculateLoc: n, replaceQuotesInInlineComments: y };
      } }), Ga = O({ "src/language-css/utils/is-less-parser.js"(u, l) {
        ne();
        function t(a) {
          return a.parser === "css" || a.parser === "less";
        }
        l.exports = t;
      } }), Ua = O({ "src/language-css/utils/is-scss.js"(u, l) {
        ne();
        function t(a, s) {
          return a === "less" || a === "scss" ? a === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(s);
        }
        l.exports = t;
      } }), Ja = O({ "src/language-css/utils/css-units.evaluate.js"(u, l) {
        l.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), Xa = O({ "src/language-css/utils/print-unit.js"(u, l) {
        ne();
        var t = Ja();
        function a(s) {
          let e = s.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : s;
        }
        l.exports = a;
      } }), Wa = O({ "src/language-css/printer-postcss.js"(u, l) {
        ne();
        var t = mr(), { printNumber: a, printString: s, hasNewline: e, isFrontMatterNode: r, isNextLineEmpty: n, isNonEmptyArray: o } = Ut(), { builders: { join: c, line: y, hardline: m, softline: g, group: p, fill: D, indent: C, dedent: w, ifBreak: k, breakParent: A }, utils: { removeLines: N, getDocParts: x } } = wt(), P = Oa(), _ = $a(), { insertPragma: J } = Ra(), { getAncestorNode: f, getPropOfDeclNode: T, maybeToLowerCase: d, insideValueFunctionNode: F, insideICSSRuleNode: i, insideAtRuleNode: h, insideURLFunctionInImportAtRuleNode: E, isKeyframeAtRuleKeywords: b, isWideKeywords: S, isLastNode: B, isSCSSControlDirectiveNode: I, isDetachedRulesetDeclarationNode: M, isRelationalOperatorNode: U, isEqualityOperatorNode: q, isMultiplicationNode: ee, isDivisionNode: j, isAdditionNode: De, isSubtractionNode: G, isMathOperatorNode: R, isEachKeywordNode: pe, isForKeywordNode: ve, isURLFunctionNode: fe, isIfElseKeywordNode: Pe, hasComposesNode: X, hasParensAroundNode: ie, hasEmptyRawBefore: Be, isKeyValuePairNode: Ne, isKeyInValuePairNode: it, isDetachedRulesetCallNode: ae, isTemplatePlaceholderNode: K, isTemplatePropNode: ge, isPostcssSimpleVarNode: Ee, isSCSSMapItemNode: Oe, isInlineValueCommentNode: Xe, isHashNode: He, isLeftCurlyBraceNode: Ct, isRightCurlyBraceNode: Rt, isWordNode: It, isColonNode: Et, isMediaAndSupportsKeywords: bt, isColorAdjusterFuncNode: Se, lastLineHasInlineComment: H, isAtWordPlaceholderNode: _e, isConfigurationNode: se, isParenGroupNode: Te } = Ma(), { locStart: pt, locEnd: ut } = Va(), je = Ga(), v = Ua(), oe = Xa();
        function $e(ft) {
          return ft.trailingComma === "es5" || ft.trailingComma === "all";
        }
        function Ke(ft, Pt, Bt) {
          let xe = ft.getValue();
          if (!xe)
            return "";
          if (typeof xe == "string")
            return xe;
          switch (xe.type) {
            case "front-matter":
              return [xe.raw, m];
            case "css-root": {
              let Xt = tt(ft, Pt, Bt), Wt = xe.raws.after.trim();
              return Wt.startsWith(";") && (Wt = Wt.slice(1).trim()), [Xt, Wt ? ` ${Wt}` : "", x(Xt).length > 0 ? m : ""];
            }
            case "css-comment": {
              let Xt = xe.inline || xe.raws.inline, Wt = Pt.originalText.slice(pt(xe), ut(xe));
              return Xt ? Wt.trimEnd() : Wt;
            }
            case "css-rule":
              return [Bt("selector"), xe.important ? " !important" : "", xe.nodes ? [xe.selector && xe.selector.type === "selector-unknown" && H(xe.selector.value) ? y : " ", "{", xe.nodes.length > 0 ? C([m, tt(ft, Pt, Bt)]) : "", m, "}", M(xe) ? ";" : ""] : ";"];
            case "css-decl": {
              let Xt = ft.getParentNode(), { between: Wt } = xe.raws, nr = Wt.trim(), Vr = nr === ":", $ = X(xe) ? N(Bt("value")) : Bt("value");
              return !Vr && H(nr) && ($ = C([m, w($)])), [xe.raws.before.replace(/[\s;]/g, ""), Xt.type === "css-atrule" && Xt.variable || i(ft) ? xe.prop : d(xe.prop), nr.startsWith("//") ? " " : "", nr, xe.extend ? "" : " ", je(Pt) && xe.extend && xe.selector ? ["extend(", Bt("selector"), ")"] : "", $, xe.raws.important ? xe.raws.important.replace(/\s*!\s*important/i, " !important") : xe.important ? " !important" : "", xe.raws.scssDefault ? xe.raws.scssDefault.replace(/\s*!default/i, " !default") : xe.scssDefault ? " !default" : "", xe.raws.scssGlobal ? xe.raws.scssGlobal.replace(/\s*!global/i, " !global") : xe.scssGlobal ? " !global" : "", xe.nodes ? [" {", C([g, tt(ft, Pt, Bt)]), g, "}"] : ge(xe) && !Xt.raws.semicolon && Pt.originalText[ut(xe) - 1] !== ";" ? "" : Pt.__isHTMLStyleAttribute && B(ft, xe) ? k(";") : ";"];
            }
            case "css-atrule": {
              let Xt = ft.getParentNode(), Wt = K(xe) && !Xt.raws.semicolon && Pt.originalText[ut(xe) - 1] !== ";";
              if (je(Pt)) {
                if (xe.mixin)
                  return [Bt("selector"), xe.important ? " !important" : "", Wt ? "" : ";"];
                if (xe.function)
                  return [xe.name, Bt("params"), Wt ? "" : ";"];
                if (xe.variable)
                  return ["@", xe.name, ": ", xe.value ? Bt("value") : "", xe.raws.between.trim() ? xe.raws.between.trim() + " " : "", xe.nodes ? ["{", C([xe.nodes.length > 0 ? g : "", tt(ft, Pt, Bt)]), g, "}"] : "", Wt ? "" : ";"];
              }
              return ["@", ae(xe) || xe.name.endsWith(":") ? xe.name : d(xe.name), xe.params ? [ae(xe) ? "" : K(xe) ? xe.raws.afterName === "" ? "" : xe.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(xe.raws.afterName) ? [m, m] : /^\s*\n/.test(xe.raws.afterName) ? m : " " : " ", Bt("params")] : "", xe.selector ? C([" ", Bt("selector")]) : "", xe.value ? p([" ", Bt("value"), I(xe) ? ie(xe) ? " " : y : ""]) : xe.name === "else" ? " " : "", xe.nodes ? [I(xe) ? "" : xe.selector && !xe.selector.nodes && typeof xe.selector.value == "string" && H(xe.selector.value) || !xe.selector && typeof xe.params == "string" && H(xe.params) ? y : " ", "{", C([xe.nodes.length > 0 ? g : "", tt(ft, Pt, Bt)]), g, "}"] : Wt ? "" : ";"];
            }
            case "media-query-list": {
              let Xt = [];
              return ft.each((Wt) => {
                let nr = Wt.getValue();
                nr.type === "media-query" && nr.value === "" || Xt.push(Bt());
              }, "nodes"), p(C(c(y, Xt)));
            }
            case "media-query":
              return [c(" ", ft.map(Bt, "nodes")), B(ft, xe) ? "" : ","];
            case "media-type":
              return jt(Dt(xe.value, Pt));
            case "media-feature-expression":
              return xe.nodes ? ["(", ...ft.map(Bt, "nodes"), ")"] : xe.value;
            case "media-feature":
              return d(Dt(xe.value.replace(/ +/g, " "), Pt));
            case "media-colon":
              return [xe.value, " "];
            case "media-value":
              return jt(Dt(xe.value, Pt));
            case "media-keyword":
              return Dt(xe.value, Pt);
            case "media-url":
              return Dt(xe.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), Pt);
            case "media-unknown":
              return xe.value;
            case "selector-root":
              return p([h(ft, "custom-selector") ? [f(ft, "css-atrule").customSelector, y] : "", c([",", h(ft, ["extend", "custom-selector", "nest"]) ? y : m], ft.map(Bt, "nodes"))]);
            case "selector-selector":
              return p(C(ft.map(Bt, "nodes")));
            case "selector-comment":
              return xe.value;
            case "selector-string":
              return Dt(xe.value, Pt);
            case "selector-tag": {
              let Xt = ft.getParentNode(), Wt = Xt && Xt.nodes.indexOf(xe), nr = Wt && Xt.nodes[Wt - 1];
              return [xe.namespace ? [xe.namespace === !0 ? "" : xe.namespace.trim(), "|"] : "", nr.type === "selector-nesting" ? xe.value : jt(b(ft, xe.value) ? xe.value.toLowerCase() : xe.value)];
            }
            case "selector-id":
              return ["#", xe.value];
            case "selector-class":
              return [".", jt(Dt(xe.value, Pt))];
            case "selector-attribute": {
              var qr;
              return ["[", xe.namespace ? [xe.namespace === !0 ? "" : xe.namespace.trim(), "|"] : "", xe.attribute.trim(), (qr = xe.operator) !== null && qr !== void 0 ? qr : "", xe.value ? Tt(Dt(xe.value.trim(), Pt), Pt) : "", xe.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (xe.value === "+" || xe.value === ">" || xe.value === "~" || xe.value === ">>>") {
                let nr = ft.getParentNode();
                return [nr.type === "selector-selector" && nr.nodes[0] === xe ? "" : y, xe.value, B(ft, xe) ? "" : " "];
              }
              let Xt = xe.value.trim().startsWith("(") ? y : "", Wt = jt(Dt(xe.value.trim(), Pt)) || y;
              return [Xt, Wt];
            }
            case "selector-universal":
              return [xe.namespace ? [xe.namespace === !0 ? "" : xe.namespace.trim(), "|"] : "", xe.value];
            case "selector-pseudo":
              return [d(xe.value), o(xe.nodes) ? p(["(", C([g, c([",", y], ft.map(Bt, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting":
              return xe.value;
            case "selector-unknown": {
              let Xt = f(ft, "css-rule");
              if (Xt && Xt.isSCSSNesterProperty)
                return jt(Dt(d(xe.value), Pt));
              let Wt = ft.getParentNode();
              if (Wt.raws && Wt.raws.selector) {
                let Vr = pt(Wt), $ = Vr + Wt.raws.selector.length;
                return Pt.originalText.slice(Vr, $).trim();
              }
              let nr = ft.getParentNode(1);
              if (Wt.type === "value-paren_group" && nr && nr.type === "value-func" && nr.value === "selector") {
                let Vr = ut(Wt.open) + 1, $ = pt(Wt.close), Re = Pt.originalText.slice(Vr, $).trim();
                return H(Re) ? [A, Re] : Re;
              }
              return xe.value;
            }
            case "value-value":
            case "value-root":
              return Bt("group");
            case "value-comment":
              return Pt.originalText.slice(pt(xe), ut(xe));
            case "value-comma_group": {
              let Xt = ft.getParentNode(), Wt = ft.getParentNode(1), nr = T(ft), Vr = nr && Xt.type === "value-value" && (nr === "grid" || nr.startsWith("grid-template")), $ = f(ft, "css-atrule"), Re = $ && I($), vt = xe.groups.some((Gr) => Xe(Gr)), zt = ft.map(Bt, "groups"), Ht = [], Ir = F(ft, "url"), cr = !1, xr = !1;
              for (let Gr = 0; Gr < xe.groups.length; ++Gr) {
                var Sr;
                Ht.push(zt[Gr]);
                let Cr = xe.groups[Gr - 1], Nt = xe.groups[Gr], Mt = xe.groups[Gr + 1], ui = xe.groups[Gr + 2];
                if (Ir) {
                  (Mt && De(Mt) || De(Nt)) && Ht.push(" ");
                  continue;
                }
                if (h(ft, "forward") && Nt.type === "value-word" && Nt.value && Cr !== void 0 && Cr.type === "value-word" && Cr.value === "as" && Mt.type === "value-operator" && Mt.value === "*" || !Mt || Nt.type === "value-word" && Nt.value.endsWith("-") && _e(Mt))
                  continue;
                if (Nt.type === "value-string" && Nt.quoted) {
                  let gs = Nt.value.lastIndexOf("#{"), ys = Nt.value.lastIndexOf("}");
                  gs !== -1 && ys !== -1 ? cr = gs > ys : gs !== -1 ? cr = !0 : ys !== -1 && (cr = !1);
                }
                if (cr || Et(Nt) || Et(Mt) || Nt.type === "value-atword" && (Nt.value === "" || Nt.value.endsWith("[")) || Mt.type === "value-word" && Mt.value.startsWith("]") || Nt.value === "~" || Nt.value && Nt.value.includes("\\") && Mt && Mt.type !== "value-comment" || Cr && Cr.value && Cr.value.indexOf("\\") === Cr.value.length - 1 && Nt.type === "value-operator" && Nt.value === "/" || Nt.value === "\\" || Ee(Nt, Mt) || He(Nt) || Ct(Nt) || Rt(Mt) || Ct(Mt) && Be(Mt) || Rt(Nt) && Be(Mt) || Nt.value === "--" && He(Mt))
                  continue;
                let hs = R(Nt), Ks = R(Mt);
                if ((hs && He(Mt) || Ks && Rt(Nt)) && Be(Mt) || !Cr && j(Nt) || F(ft, "calc") && (De(Nt) || De(Mt) || G(Nt) || G(Mt)) && Be(Mt))
                  continue;
                let ll = (De(Nt) || G(Nt)) && Gr === 0 && (Mt.type === "value-number" || Mt.isHex) && Wt && Se(Wt) && !Be(Mt), Qs = ui && ui.type === "value-func" || ui && It(ui) || Nt.type === "value-func" || It(Nt), Zs = Mt.type === "value-func" || It(Mt) || Cr && Cr.type === "value-func" || Cr && It(Cr);
                if (!(!(ee(Mt) || ee(Nt)) && !F(ft, "calc") && !ll && (j(Mt) && !Qs || j(Nt) && !Zs || De(Mt) && !Qs || De(Nt) && !Zs || G(Mt) || G(Nt)) && (Be(Mt) || hs && (!Cr || Cr && R(Cr)))) && !((Pt.parser === "scss" || Pt.parser === "less") && hs && Nt.value === "-" && Te(Mt) && ut(Nt) === pt(Mt.open) && Mt.open.value === "(")) {
                  if (Xe(Nt)) {
                    if (Xt.type === "value-paren_group") {
                      Ht.push(w(m));
                      continue;
                    }
                    Ht.push(m);
                    continue;
                  }
                  if (Re && (q(Mt) || U(Mt) || Pe(Mt) || pe(Nt) || ve(Nt))) {
                    Ht.push(" ");
                    continue;
                  }
                  if ($ && $.name.toLowerCase() === "namespace") {
                    Ht.push(" ");
                    continue;
                  }
                  if (Vr) {
                    Nt.source && Mt.source && Nt.source.start.line !== Mt.source.start.line ? (Ht.push(m), xr = !0) : Ht.push(" ");
                    continue;
                  }
                  if (Ks) {
                    Ht.push(" ");
                    continue;
                  }
                  if (!(Mt && Mt.value === "...") && !(_e(Nt) && _e(Mt) && ut(Nt) === pt(Mt))) {
                    if (_e(Nt) && Te(Mt) && ut(Nt) === pt(Mt.open)) {
                      Ht.push(g);
                      continue;
                    }
                    if (Nt.value === "with" && Te(Mt)) {
                      Ht.push(" ");
                      continue;
                    }
                    (Sr = Nt.value) !== null && Sr !== void 0 && Sr.endsWith("#") && Mt.value === "{" && Te(Mt.group) || Ht.push(y);
                  }
                }
              }
              return vt && Ht.push(A), xr && Ht.unshift(m), Re ? p(C(Ht)) : E(ft) ? p(D(Ht)) : p(C(D(Ht)));
            }
            case "value-paren_group": {
              let Xt = ft.getParentNode();
              if (Xt && fe(Xt) && (xe.groups.length === 1 || xe.groups.length > 0 && xe.groups[0].type === "value-comma_group" && xe.groups[0].groups.length > 0 && xe.groups[0].groups[0].type === "value-word" && xe.groups[0].groups[0].value.startsWith("data:")))
                return [xe.open ? Bt("open") : "", c(",", ft.map(Bt, "groups")), xe.close ? Bt("close") : ""];
              if (!xe.open) {
                let Ir = ft.map(Bt, "groups"), cr = [];
                for (let xr = 0; xr < Ir.length; xr++)
                  xr !== 0 && cr.push([",", y]), cr.push(Ir[xr]);
                return p(C(D(cr)));
              }
              let Wt = Oe(ft), nr = t(xe.groups), Vr = nr && nr.type === "value-comment", $ = it(xe, Xt), Re = se(xe, Xt), vt = Re || Wt && !$, zt = Re || $, Ht = p([xe.open ? Bt("open") : "", C([g, c([y], ft.map((Ir, cr) => {
                let xr = Ir.getValue(), Gr = cr === xe.groups.length - 1, Cr = [Bt(), Gr ? "" : ","];
                if (Ne(xr) && xr.type === "value-comma_group" && xr.groups && xr.groups[0].type !== "value-paren_group" && xr.groups[2] && xr.groups[2].type === "value-paren_group") {
                  let Nt = x(Cr[0].contents.contents);
                  Nt[1] = p(Nt[1]), Cr = [p(w(Cr))];
                }
                if (!Gr && xr.type === "value-comma_group" && o(xr.groups)) {
                  let Nt = t(xr.groups);
                  !Nt.source && Nt.close && (Nt = Nt.close), Nt.source && n(Pt.originalText, Nt, ut) && Cr.push(m);
                }
                return Cr;
              }, "groups"))]), k(!Vr && v(Pt.parser, Pt.originalText) && Wt && $e(Pt) ? "," : ""), g, xe.close ? Bt("close") : ""], { shouldBreak: vt });
              return zt ? w(Ht) : Ht;
            }
            case "value-func":
              return [xe.value, h(ft, "supports") && bt(xe) ? " " : "", Bt("group")];
            case "value-paren":
              return xe.value;
            case "value-number":
              return [tr(xe.value), oe(xe.unit)];
            case "value-operator":
              return xe.value;
            case "value-word":
              return xe.isColor && xe.isHex || S(xe.value) ? xe.value.toLowerCase() : xe.value;
            case "value-colon": {
              let Xt = ft.getParentNode(), Wt = Xt && Xt.groups.indexOf(xe), nr = Wt && Xt.groups[Wt - 1];
              return [xe.value, nr && typeof nr.value == "string" && t(nr.value) === "\\" || F(ft, "url") ? "" : y];
            }
            case "value-comma":
              return [xe.value, " "];
            case "value-string":
              return s(xe.raws.quote + xe.value + xe.raws.quote, Pt);
            case "value-atword":
              return ["@", xe.value];
            case "value-unicode-range":
              return xe.value;
            case "value-unknown":
              return xe.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(xe.type)}`);
          }
        }
        function tt(ft, Pt, Bt) {
          let xe = [];
          return ft.each((qr, Sr, Xt) => {
            let Wt = Xt[Sr - 1];
            if (Wt && Wt.type === "css-comment" && Wt.text.trim() === "prettier-ignore") {
              let nr = qr.getValue();
              xe.push(Pt.originalText.slice(pt(nr), ut(nr)));
            } else
              xe.push(Bt());
            Sr !== Xt.length - 1 && (Xt[Sr + 1].type === "css-comment" && !e(Pt.originalText, pt(Xt[Sr + 1]), { backwards: !0 }) && !r(Xt[Sr]) || Xt[Sr + 1].type === "css-atrule" && Xt[Sr + 1].name === "else" && Xt[Sr].type !== "css-comment" ? xe.push(" ") : (xe.push(Pt.__isHTMLStyleAttribute ? y : m), n(Pt.originalText, qr.getValue(), ut) && !r(Xt[Sr]) && xe.push(m)));
          }, "nodes"), xe;
        }
        var ht = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, Ye = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, pr = /[A-Za-z]+/g, dt = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, ar = new RegExp(ht.source + `|(${dt.source})?(${Ye.source})(${pr.source})?`, "g");
        function Dt(ft, Pt) {
          return ft.replace(ht, (Bt) => s(Bt, Pt));
        }
        function Tt(ft, Pt) {
          let Bt = Pt.singleQuote ? "'" : '"';
          return ft.includes('"') || ft.includes("'") ? ft : Bt + ft + Bt;
        }
        function jt(ft) {
          return ft.replace(ar, (Pt, Bt, xe, qr, Sr) => !xe && qr ? tr(qr) + d(Sr || "") : Pt);
        }
        function tr(ft) {
          return a(ft).replace(/\.0(?=$|e)/, "");
        }
        l.exports = { print: Ke, embed: _, insertPragma: J, massageAstNode: P };
      } }), za = O({ "src/language-css/options.js"(u, l) {
        ne();
        var t = On();
        l.exports = { singleQuote: t.singleQuote };
      } }), Ha = O({ "src/language-css/parsers.js"() {
        ne();
      } }), Ya = O({ "node_modules/linguist-languages/data/CSS.json"(u, l) {
        l.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), Ka = O({ "node_modules/linguist-languages/data/PostCSS.json"(u, l) {
        l.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), Qa = O({ "node_modules/linguist-languages/data/Less.json"(u, l) {
        l.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), Za = O({ "node_modules/linguist-languages/data/SCSS.json"(u, l) {
        l.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), eo = O({ "src/language-css/index.js"(u, l) {
        ne();
        var t = vr(), a = Wa(), s = za(), e = Ha(), r = [t(Ya(), (o) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...o.extensions, ".wxss"] })), t(Ka(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t(Qa(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t(Za(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], n = { postcss: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), to = O({ "src/language-handlebars/loc.js"(u, l) {
        ne();
        function t(s) {
          return s.loc.start.offset;
        }
        function a(s) {
          return s.loc.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), ro = O({ "src/language-handlebars/clean.js"(u, l) {
        ne();
        function t(a, s) {
          if (a.type === "TextNode") {
            let e = a.chars.trim();
            if (!e)
              return null;
            s.chars = e.replace(/[\t\n\f\r ]+/g, " ");
          }
          a.type === "AttrNode" && a.name.toLowerCase() === "class" && delete s.value;
        }
        t.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), l.exports = t;
      } }), no = O({ "src/language-handlebars/html-void-elements.evaluate.js"(u, l) {
        l.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      } }), uo = O({ "src/language-handlebars/utils.js"(u, l) {
        ne();
        var t = mr(), a = no();
        function s(x) {
          let P = x.getValue(), _ = x.getParentNode(0);
          return !!(g(x, ["ElementNode"]) && t(_.children) === P || g(x, ["Block"]) && t(_.body) === P);
        }
        function e(x) {
          return x.toUpperCase() === x;
        }
        function r(x) {
          return m(x, ["ElementNode"]) && typeof x.tag == "string" && !x.tag.startsWith(":") && (e(x.tag[0]) || x.tag.includes("."));
        }
        var n = new Set(a);
        function o(x) {
          return n.has(x.toLowerCase()) && !e(x[0]);
        }
        function c(x) {
          return x.selfClosing === !0 || o(x.tag) || r(x) && x.children.every((P) => y(P));
        }
        function y(x) {
          return m(x, ["TextNode"]) && !/\S/.test(x.chars);
        }
        function m(x, P) {
          return x && P.includes(x.type);
        }
        function g(x, P) {
          let _ = x.getParentNode(0);
          return m(_, P);
        }
        function p(x, P) {
          let _ = w(x);
          return m(_, P);
        }
        function D(x, P) {
          let _ = k(x);
          return m(_, P);
        }
        function C(x, P) {
          var _, J, f, T;
          let d = x.getValue(), F = (_ = x.getParentNode(0)) !== null && _ !== void 0 ? _ : {}, i = (J = (f = (T = F.children) !== null && T !== void 0 ? T : F.body) !== null && f !== void 0 ? f : F.parts) !== null && J !== void 0 ? J : [], h = i.indexOf(d);
          return h !== -1 && i[h + P];
        }
        function w(x) {
          let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return C(x, -P);
        }
        function k(x) {
          return C(x, 1);
        }
        function A(x) {
          return m(x, ["MustacheCommentStatement"]) && typeof x.value == "string" && x.value.trim() === "prettier-ignore";
        }
        function N(x) {
          let P = x.getValue(), _ = w(x, 2);
          return A(P) || A(_);
        }
        l.exports = { getNextNode: k, getPreviousNode: w, hasPrettierIgnore: N, isLastNodeOfSiblings: s, isNextNodeOfSomeType: D, isNodeOfSomeType: m, isParentOfSomeType: g, isPreviousNodeOfSomeType: p, isVoid: c, isWhitespaceNode: y };
      } }), io = O({ "src/language-handlebars/printer-glimmer.js"(u, l) {
        ne();
        var { builders: { dedent: t, fill: a, group: s, hardline: e, ifBreak: r, indent: n, join: o, line: c, softline: y }, utils: { getDocParts: m, replaceTextEndOfLine: g } } = wt(), { getPreferredQuote: p, isNonEmptyArray: D } = Ut(), { locStart: C, locEnd: w } = to(), k = ro(), { getNextNode: A, getPreviousNode: N, hasPrettierIgnore: x, isLastNodeOfSiblings: P, isNextNodeOfSomeType: _, isNodeOfSomeType: J, isParentOfSomeType: f, isPreviousNodeOfSomeType: T, isVoid: d, isWhitespaceNode: F } = uo(), i = 2;
        function h(H, _e, se) {
          let Te = H.getValue();
          if (!Te)
            return "";
          if (x(H))
            return _e.originalText.slice(C(Te), w(Te));
          let pt = _e.singleQuote ? "'" : '"';
          switch (Te.type) {
            case "Block":
            case "Program":
            case "Template":
              return s(H.map(se, "body"));
            case "ElementNode": {
              let ut = s(b(H, se)), je = _e.htmlWhitespaceSensitivity === "ignore" && _(H, ["ElementNode"]) ? y : "";
              if (d(Te))
                return [ut, je];
              let v = ["</", Te.tag, ">"];
              return Te.children.length === 0 ? [ut, n(v), je] : _e.htmlWhitespaceSensitivity === "ignore" ? [ut, n(S(H, _e, se)), e, n(v), je] : [ut, n(s(S(H, _e, se))), n(v), je];
            }
            case "BlockStatement": {
              let ut = H.getParentNode(1);
              return ut && ut.inverse && ut.inverse.body.length === 1 && ut.inverse.body[0] === Te && ut.inverse.body[0].path.parts[0] === ut.path.parts[0] ? [ve(H, se, ut.inverse.body[0].path.parts[0]), Be(H, se, _e), Ne(H, se, _e)] : [R(H, se), s([Be(H, se, _e), Ne(H, se, _e), fe(H, se, _e)])];
            }
            case "ElementModifierStatement":
              return s(["{{", It(H, se), "}}"]);
            case "MustacheStatement":
              return s([I(Te), It(H, se), M(Te)]);
            case "SubExpression":
              return s(["(", Rt(H, se), y, ")"]);
            case "AttrNode": {
              let ut = Te.value.type === "TextNode";
              if (ut && Te.value.chars === "" && C(Te.value) === w(Te.value))
                return Te.name;
              let je = ut ? p(Te.value.chars, pt).quote : Te.value.type === "ConcatStatement" ? p(Te.value.parts.filter((oe) => oe.type === "TextNode").map((oe) => oe.chars).join(""), pt).quote : "", v = se("value");
              return [Te.name, "=", je, Te.name === "class" && je ? s(n(v)) : v, je];
            }
            case "ConcatStatement":
              return H.map(se, "parts");
            case "Hash":
              return o(c, H.map(se, "pairs"));
            case "HashPair":
              return [Te.key, "=", se("value")];
            case "TextNode": {
              let ut = Te.chars.replace(/{{/g, "\\{{"), je = K(H);
              if (je) {
                if (je === "class") {
                  let dt = ut.trim().split(/\s+/).join(" "), ar = !1, Dt = !1;
                  return f(H, ["ConcatStatement"]) && (T(H, ["MustacheStatement"]) && /^\s/.test(ut) && (ar = !0), _(H, ["MustacheStatement"]) && /\s$/.test(ut) && dt !== "" && (Dt = !0)), [ar ? c : "", dt, Dt ? c : ""];
                }
                return g(ut);
              }
              let v = /^[\t\n\f\r ]*$/.test(ut), oe = !N(H), $e = !A(H);
              if (_e.htmlWhitespaceSensitivity !== "ignore") {
                let dt = /^[\t\n\f\r ]*/, ar = /[\t\n\f\r ]*$/, Dt = $e && f(H, ["Template"]), Tt = oe && f(H, ["Template"]);
                if (v) {
                  if (Tt || Dt)
                    return "";
                  let Bt = [c], xe = ge(ut);
                  return xe && (Bt = Xe(xe)), P(H) && (Bt = Bt.map((qr) => t(qr))), Bt;
                }
                let [jt] = ut.match(dt), [tr] = ut.match(ar), ft = [];
                if (jt) {
                  ft = [c];
                  let Bt = ge(jt);
                  Bt && (ft = Xe(Bt)), ut = ut.replace(dt, "");
                }
                let Pt = [];
                if (tr) {
                  if (!Dt) {
                    Pt = [c];
                    let Bt = ge(tr);
                    Bt && (Pt = Xe(Bt)), P(H) && (Pt = Pt.map((xe) => t(xe)));
                  }
                  ut = ut.replace(ar, "");
                }
                return [...ft, a(it(ut)), ...Pt];
              }
              let Ke = ge(ut), tt = Ee(ut), ht = Oe(ut);
              if ((oe || $e) && v && f(H, ["Block", "ElementNode", "Template"]))
                return "";
              v && Ke ? (tt = Math.min(Ke, i), ht = 0) : (_(H, ["BlockStatement", "ElementNode"]) && (ht = Math.max(ht, 1)), T(H, ["BlockStatement", "ElementNode"]) && (tt = Math.max(tt, 1)));
              let Ye = "", pr = "";
              return ht === 0 && _(H, ["MustacheStatement"]) && (pr = " "), tt === 0 && T(H, ["MustacheStatement"]) && (Ye = " "), oe && (tt = 0, Ye = ""), $e && (ht = 0, pr = ""), ut = ut.replace(/^[\t\n\f\r ]+/g, Ye).replace(/[\t\n\f\r ]+$/, pr), [...Xe(tt), a(it(ut)), ...Xe(ht)];
            }
            case "MustacheCommentStatement": {
              let ut = C(Te), je = w(Te), v = _e.originalText.charAt(ut + 2) === "~", oe = _e.originalText.charAt(je - 3) === "~", $e = Te.value.includes("}}") ? "--" : "";
              return ["{{", v ? "~" : "", "!", $e, Te.value, $e, oe ? "~" : "", "}}"];
            }
            case "PathExpression":
              return Te.original;
            case "BooleanLiteral":
              return String(Te.value);
            case "CommentStatement":
              return ["<!--", Te.value, "-->"];
            case "StringLiteral": {
              if (Ct(H)) {
                let ut = _e.singleQuote ? '"' : "'";
                return He(Te.value, ut);
              }
              return He(Te.value, pt);
            }
            case "NumberLiteral":
              return String(Te.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(Te.type));
          }
        }
        function E(H, _e) {
          return C(H) - C(_e);
        }
        function b(H, _e) {
          let se = H.getValue(), Te = ["attributes", "modifiers", "comments"].filter((ut) => D(se[ut])), pt = Te.flatMap((ut) => se[ut]).sort(E);
          for (let ut of Te)
            H.each((je) => {
              let v = pt.indexOf(je.getValue());
              pt.splice(v, 1, [c, _e()]);
            }, ut);
          return D(se.blockParams) && pt.push(c, Se(se)), ["<", se.tag, n(pt), B(se)];
        }
        function S(H, _e, se) {
          let Te = H.getValue().children.every((pt) => F(pt));
          return _e.htmlWhitespaceSensitivity === "ignore" && Te ? "" : H.map((pt, ut) => {
            let je = se();
            return ut === 0 && _e.htmlWhitespaceSensitivity === "ignore" ? [y, je] : je;
          }, "children");
        }
        function B(H) {
          return d(H) ? r([y, "/>"], [" />", y]) : r([y, ">"], ">");
        }
        function I(H) {
          let _e = H.escaped === !1 ? "{{{" : "{{", se = H.strip && H.strip.open ? "~" : "";
          return [_e, se];
        }
        function M(H) {
          let _e = H.escaped === !1 ? "}}}" : "}}";
          return [H.strip && H.strip.close ? "~" : "", _e];
        }
        function U(H) {
          let _e = I(H), se = H.openStrip.open ? "~" : "";
          return [_e, se, "#"];
        }
        function q(H) {
          let _e = M(H);
          return [H.openStrip.close ? "~" : "", _e];
        }
        function ee(H) {
          let _e = I(H), se = H.closeStrip.open ? "~" : "";
          return [_e, se, "/"];
        }
        function j(H) {
          let _e = M(H);
          return [H.closeStrip.close ? "~" : "", _e];
        }
        function De(H) {
          let _e = I(H), se = H.inverseStrip.open ? "~" : "";
          return [_e, se];
        }
        function G(H) {
          let _e = M(H);
          return [H.inverseStrip.close ? "~" : "", _e];
        }
        function R(H, _e) {
          let se = H.getValue(), Te = [], pt = bt(H, _e);
          return pt && Te.push(s(pt)), D(se.program.blockParams) && Te.push(Se(se.program)), s([U(se), Et(H, _e), Te.length > 0 ? n([c, o(c, Te)]) : "", y, q(se)]);
        }
        function pe(H, _e) {
          return [_e.htmlWhitespaceSensitivity === "ignore" ? e : "", De(H), "else", G(H)];
        }
        function ve(H, _e, se) {
          let Te = H.getValue(), pt = H.getParentNode(1);
          return s([De(pt), ["else", " ", se], n([c, s(bt(H, _e)), ...D(Te.program.blockParams) ? [c, Se(Te.program)] : []]), y, G(pt)]);
        }
        function fe(H, _e, se) {
          let Te = H.getValue();
          return se.htmlWhitespaceSensitivity === "ignore" ? [Pe(Te) ? y : e, ee(Te), _e("path"), j(Te)] : [ee(Te), _e("path"), j(Te)];
        }
        function Pe(H) {
          return J(H, ["BlockStatement"]) && H.program.body.every((_e) => F(_e));
        }
        function X(H) {
          return ie(H) && H.inverse.body.length === 1 && J(H.inverse.body[0], ["BlockStatement"]) && H.inverse.body[0].path.parts[0] === H.path.parts[0];
        }
        function ie(H) {
          return J(H, ["BlockStatement"]) && H.inverse;
        }
        function Be(H, _e, se) {
          let Te = H.getValue();
          if (Pe(Te))
            return "";
          let pt = _e("program");
          return se.htmlWhitespaceSensitivity === "ignore" ? n([e, pt]) : n(pt);
        }
        function Ne(H, _e, se) {
          let Te = H.getValue(), pt = _e("inverse"), ut = se.htmlWhitespaceSensitivity === "ignore" ? [e, pt] : pt;
          return X(Te) ? ut : ie(Te) ? [pe(Te, se), n(ut)] : "";
        }
        function it(H) {
          return m(o(c, ae(H)));
        }
        function ae(H) {
          return H.split(/[\t\n\f\r ]+/);
        }
        function K(H) {
          for (let _e = 0; _e < 2; _e++) {
            let se = H.getParentNode(_e);
            if (se && se.type === "AttrNode")
              return se.name.toLowerCase();
          }
        }
        function ge(H) {
          return H = typeof H == "string" ? H : "", H.split(`
`).length - 1;
        }
        function Ee(H) {
          H = typeof H == "string" ? H : "";
          let _e = (H.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return ge(_e);
        }
        function Oe(H) {
          H = typeof H == "string" ? H : "";
          let _e = (H.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return ge(_e);
        }
        function Xe() {
          let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(H, i) }).fill(e);
        }
        function He(H, _e) {
          let { quote: se, regex: Te } = p(H, _e);
          return [se, H.replace(Te, `\\${se}`), se];
        }
        function Ct(H) {
          let _e = 0, se = H.getParentNode(_e);
          for (; se && J(se, ["SubExpression"]); )
            _e++, se = H.getParentNode(_e);
          return !!(se && J(H.getParentNode(_e + 1), ["ConcatStatement"]) && J(H.getParentNode(_e + 2), ["AttrNode"]));
        }
        function Rt(H, _e) {
          let se = Et(H, _e), Te = bt(H, _e);
          return Te ? n([se, c, s(Te)]) : se;
        }
        function It(H, _e) {
          let se = Et(H, _e), Te = bt(H, _e);
          return Te ? [n([se, c, Te]), y] : se;
        }
        function Et(H, _e) {
          return _e("path");
        }
        function bt(H, _e) {
          let se = H.getValue(), Te = [];
          if (se.params.length > 0) {
            let pt = H.map(_e, "params");
            Te.push(...pt);
          }
          if (se.hash && se.hash.pairs.length > 0) {
            let pt = _e("hash");
            Te.push(pt);
          }
          return Te.length === 0 ? "" : o(c, Te);
        }
        function Se(H) {
          return ["as |", H.blockParams.join(" "), "|"];
        }
        l.exports = { print: h, massageAstNode: k };
      } }), so = O({ "src/language-handlebars/parsers.js"() {
        ne();
      } }), ao = O({ "node_modules/linguist-languages/data/Handlebars.json"(u, l) {
        l.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), oo = O({ "src/language-handlebars/index.js"(u, l) {
        ne();
        var t = vr(), a = io(), s = so(), e = [t(ao(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], r = { glimmer: a };
        l.exports = { languages: e, printers: r, parsers: s };
      } }), lo = O({ "src/language-graphql/pragma.js"(u, l) {
        ne();
        function t(s) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(s);
        }
        function a(s) {
          return `# @format

` + s;
        }
        l.exports = { hasPragma: t, insertPragma: a };
      } }), po = O({ "src/language-graphql/loc.js"(u, l) {
        ne();
        function t(s) {
          return typeof s.start == "number" ? s.start : s.loc && s.loc.start;
        }
        function a(s) {
          return typeof s.end == "number" ? s.end : s.loc && s.loc.end;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), co = O({ "src/language-graphql/printer-graphql.js"(u, l) {
        ne();
        var { builders: { join: t, hardline: a, line: s, softline: e, group: r, indent: n, ifBreak: o } } = wt(), { isNextLineEmpty: c, isNonEmptyArray: y } = Ut(), { insertPragma: m } = lo(), { locStart: g, locEnd: p } = po();
        function D(_, J, f) {
          let T = _.getValue();
          if (!T)
            return "";
          if (typeof T == "string")
            return T;
          switch (T.kind) {
            case "Document": {
              let d = [];
              return _.each((F, i, h) => {
                d.push(f()), i !== h.length - 1 && (d.push(a), c(J.originalText, F.getValue(), p) && d.push(a));
              }, "definitions"), [...d, a];
            }
            case "OperationDefinition": {
              let d = J.originalText[g(T)] !== "{", F = !!T.name;
              return [d ? T.operation : "", d && F ? [" ", f("name")] : "", d && !F && y(T.variableDefinitions) ? " " : "", y(T.variableDefinitions) ? r(["(", n([e, t([o("", ", "), e], _.map(f, "variableDefinitions"))]), e, ")"]) : "", C(_, f, T), T.selectionSet ? !d && !F ? "" : " " : "", f("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", f("name"), y(T.variableDefinitions) ? r(["(", n([e, t([o("", ", "), e], _.map(f, "variableDefinitions"))]), e, ")"]) : "", " on ", f("typeCondition"), C(_, f, T), " ", f("selectionSet")];
            case "SelectionSet":
              return ["{", n([a, t(a, w(_, J, f, "selections"))]), a, "}"];
            case "Field":
              return r([T.alias ? [f("alias"), ": "] : "", f("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, f, "arguments"))]), e, ")"]) : "", C(_, f, T), T.selectionSet ? " " : "", f("selectionSet")]);
            case "Name":
              return T.value;
            case "StringValue": {
              if (T.block) {
                let d = T.value.replace(/"""/g, "\\$&").split(`
`);
                return d.length === 1 && (d[0] = d[0].trim()), d.every((F) => F === "") && (d.length = 0), t(a, ['"""', ...d, '"""']);
              }
              return ['"', T.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return T.value;
            case "BooleanValue":
              return T.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", f("name")];
            case "ListValue":
              return r(["[", n([e, t([o("", ", "), e], _.map(f, "values"))]), e, "]"]);
            case "ObjectValue":
              return r(["{", J.bracketSpacing && T.fields.length > 0 ? " " : "", n([e, t([o("", ", "), e], _.map(f, "fields"))]), e, o("", J.bracketSpacing && T.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [f("name"), ": ", f("value")];
            case "Directive":
              return ["@", f("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, f, "arguments"))]), e, ")"]) : ""];
            case "NamedType":
              return f("name");
            case "VariableDefinition":
              return [f("variable"), ": ", f("type"), T.defaultValue ? [" = ", f("defaultValue")] : "", C(_, f, T)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [f("description"), T.description ? a : "", T.kind === "ObjectTypeExtension" ? "extend " : "", "type ", f("name"), T.interfaces.length > 0 ? [" implements ", ...N(_, J, f)] : "", C(_, f, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, f, "fields"))]), a, "}"] : ""];
            case "FieldDefinition":
              return [f("description"), T.description ? a : "", f("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, f, "arguments"))]), e, ")"]) : "", ": ", f("type"), C(_, f, T)];
            case "DirectiveDefinition":
              return [f("description"), T.description ? a : "", "directive ", "@", f("name"), T.arguments.length > 0 ? r(["(", n([e, t([o("", ", "), e], w(_, J, f, "arguments"))]), e, ")"]) : "", T.repeatable ? " repeatable" : "", " on ", t(" | ", _.map(f, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [f("description"), T.description ? a : "", T.kind === "EnumTypeExtension" ? "extend " : "", "enum ", f("name"), C(_, f, T), T.values.length > 0 ? [" {", n([a, t(a, w(_, J, f, "values"))]), a, "}"] : ""];
            case "EnumValueDefinition":
              return [f("description"), T.description ? a : "", f("name"), C(_, f, T)];
            case "InputValueDefinition":
              return [f("description"), T.description ? T.description.block ? a : s : "", f("name"), ": ", f("type"), T.defaultValue ? [" = ", f("defaultValue")] : "", C(_, f, T)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [f("description"), T.description ? a : "", T.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", f("name"), C(_, f, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, f, "fields"))]), a, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", C(_, f, T), ...T.operationTypes.length > 0 ? [" {", n([a, t(a, w(_, J, f, "operationTypes"))]), a, "}"] : []];
            case "SchemaDefinition":
              return [f("description"), T.description ? a : "", "schema", C(_, f, T), " {", T.operationTypes.length > 0 ? n([a, t(a, w(_, J, f, "operationTypes"))]) : "", a, "}"];
            case "OperationTypeDefinition":
              return [f("operation"), ": ", f("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [f("description"), T.description ? a : "", T.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", f("name"), T.interfaces.length > 0 ? [" implements ", ...N(_, J, f)] : "", C(_, f, T), T.fields.length > 0 ? [" {", n([a, t(a, w(_, J, f, "fields"))]), a, "}"] : ""];
            case "FragmentSpread":
              return ["...", f("name"), C(_, f, T)];
            case "InlineFragment":
              return ["...", T.typeCondition ? [" on ", f("typeCondition")] : "", C(_, f, T), " ", f("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return r([f("description"), T.description ? a : "", r([T.kind === "UnionTypeExtension" ? "extend " : "", "union ", f("name"), C(_, f, T), T.types.length > 0 ? [" =", o("", " "), n([o([s, "  "]), t([s, "| "], _.map(f, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [f("description"), T.description ? a : "", T.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", f("name"), C(_, f, T)];
            case "NonNullType":
              return [f("type"), "!"];
            case "ListType":
              return ["[", f("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(T.kind));
          }
        }
        function C(_, J, f) {
          if (f.directives.length === 0)
            return "";
          let T = t(s, _.map(J, "directives"));
          return f.kind === "FragmentDefinition" || f.kind === "OperationDefinition" ? r([s, T]) : [" ", r(n([e, T]))];
        }
        function w(_, J, f, T) {
          return _.map((d, F, i) => {
            let h = f();
            return F < i.length - 1 && c(J.originalText, d.getValue(), p) ? [h, a] : h;
          }, T);
        }
        function k(_) {
          return _.kind && _.kind !== "Comment";
        }
        function A(_) {
          let J = _.getValue();
          if (J.kind === "Comment")
            return "#" + J.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(J));
        }
        function N(_, J, f) {
          let T = _.getNode(), d = [], { interfaces: F } = T, i = _.map((h) => f(h), "interfaces");
          for (let h = 0; h < F.length; h++) {
            let E = F[h];
            d.push(i[h]);
            let b = F[h + 1];
            if (b) {
              let S = J.originalText.slice(E.loc.end, b.loc.start), B = S.includes("#"), I = S.replace(/#.*/g, "").trim();
              d.push(I === "," ? "," : " &", B ? s : " ");
            }
          }
          return d;
        }
        function x(_, J) {
          _.kind === "StringValue" && _.block && !_.value.includes(`
`) && (J.value = J.value.trim());
        }
        x.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function P(_) {
          var J;
          let f = _.getValue();
          return f == null || (J = f.comments) === null || J === void 0 ? void 0 : J.some((T) => T.value.trim() === "prettier-ignore");
        }
        l.exports = { print: D, massageAstNode: x, hasPrettierIgnore: P, insertPragma: m, printComment: A, canAttachComment: k };
      } }), Do = O({ "src/language-graphql/options.js"(u, l) {
        ne();
        var t = On();
        l.exports = { bracketSpacing: t.bracketSpacing };
      } }), fo = O({ "src/language-graphql/parsers.js"() {
        ne();
      } }), mo = O({ "node_modules/linguist-languages/data/GraphQL.json"(u, l) {
        l.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), ho = O({ "src/language-graphql/index.js"(u, l) {
        ne();
        var t = vr(), a = co(), s = Do(), e = fo(), r = [t(mo(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], n = { graphql: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), Js = O({ "node_modules/collapse-white-space/index.js"(u, l) {
        ne(), l.exports = t;
        function t(a) {
          return String(a).replace(/\s+/g, " ");
        }
      } }), Xs = O({ "src/language-markdown/loc.js"(u, l) {
        ne();
        function t(s) {
          return s.position.start.offset;
        }
        function a(s) {
          return s.position.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), go = O({ "src/language-markdown/constants.evaluate.js"(u, l) {
        l.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), Ds = O({ "src/language-markdown/utils.js"(u, l) {
        ne();
        var { getLast: t } = Ut(), { locStart: a, locEnd: s } = Xs(), { cjkPattern: e, kPattern: r, punctuationPattern: n } = go(), o = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], c = [...o, "tableCell", "paragraph", "heading"], y = new RegExp(r), m = new RegExp(n);
        function g(A, N) {
          let x = "non-cjk", P = "cj-letter", _ = "k-letter", J = "cjk-punctuation", f = [], T = (N.proseWrap === "preserve" ? A : A.replace(new RegExp(`(${e})
(${e})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [F, i] of T.entries()) {
            if (F % 2 === 1) {
              f.push({ type: "whitespace", value: /\n/.test(i) ? `
` : " " });
              continue;
            }
            if ((F === 0 || F === T.length - 1) && i === "")
              continue;
            let h = i.split(new RegExp(`(${e})`));
            for (let [E, b] of h.entries())
              if (!((E === 0 || E === h.length - 1) && b === "")) {
                if (E % 2 === 0) {
                  b !== "" && d({ type: "word", value: b, kind: x, hasLeadingPunctuation: m.test(b[0]), hasTrailingPunctuation: m.test(t(b)) });
                  continue;
                }
                d(m.test(b) ? { type: "word", value: b, kind: J, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: b, kind: y.test(b) ? _ : P, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 });
              }
          }
          return f;
          function d(F) {
            let i = t(f);
            i && i.type === "word" && (i.kind === x && F.kind === P && !i.hasTrailingPunctuation || i.kind === P && F.kind === x && !F.hasLeadingPunctuation ? f.push({ type: "whitespace", value: " " }) : !h(x, J) && ![i.value, F.value].some((E) => /\u3000/.test(E)) && f.push({ type: "whitespace", value: "" })), f.push(F);
            function h(E, b) {
              return i.kind === E && F.kind === b || i.kind === b && F.kind === E;
            }
          }
        }
        function p(A, N) {
          let [, x, P, _] = N.slice(A.position.start.offset, A.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: x, marker: P, leadingSpaces: _ };
        }
        function D(A, N) {
          if (!A.ordered || A.children.length < 2)
            return !1;
          let x = Number(p(A.children[0], N.originalText).numberText), P = Number(p(A.children[1], N.originalText).numberText);
          if (x === 0 && A.children.length > 2) {
            let _ = Number(p(A.children[2], N.originalText).numberText);
            return P === 1 && _ === 1;
          }
          return P === 1;
        }
        function C(A, N) {
          let { value: x } = A;
          return A.position.end.offset === N.length && x.endsWith(`
`) && N.endsWith(`
`) ? x.slice(0, -1) : x;
        }
        function w(A, N) {
          return function x(P, _, J) {
            let f = Object.assign({}, N(P, _, J));
            return f.children && (f.children = f.children.map((T, d) => x(T, d, [f, ...J]))), f;
          }(A, null, []);
        }
        function k(A) {
          if (A?.type !== "link" || A.children.length !== 1)
            return !1;
          let [N] = A.children;
          return a(A) === a(N) && s(A) === s(N);
        }
        l.exports = { mapAst: w, splitText: g, punctuationPattern: n, getFencedCodeBlockValue: C, getOrderedListItemInfo: p, hasGitDiffFriendlyOrderedList: D, INLINE_NODE_TYPES: o, INLINE_NODE_WRAPPER_TYPES: c, isAutolink: k };
      } }), yo = O({ "src/language-markdown/embed.js"(u, l) {
        ne();
        var { inferParserByLanguage: t, getMaxContinuousCount: a } = Ut(), { builders: { hardline: s, markAsRoot: e }, utils: { replaceEndOfLine: r } } = wt(), n = cs(), { getFencedCodeBlockValue: o } = Ds();
        function c(y, m, g, p) {
          let D = y.getValue();
          if (D.type === "code" && D.lang !== null) {
            let C = t(D.lang, p);
            if (C) {
              let w = p.__inJsTemplate ? "~" : "`", k = w.repeat(Math.max(3, a(D.value, w) + 1)), A = { parser: C };
              D.lang === "tsx" && (A.filepath = "dummy.tsx");
              let N = g(o(D, p.originalText), A, { stripTrailingHardline: !0 });
              return e([k, D.lang, D.meta ? " " + D.meta : "", s, r(N), s, k]);
            }
          }
          switch (D.type) {
            case "front-matter":
              return n(D, g);
            case "importExport":
              return [g(D.value, { parser: "babel" }, { stripTrailingHardline: !0 }), s];
            case "jsx":
              return g(`<$>${D.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });
          }
          return null;
        }
        l.exports = c;
      } }), Ws = O({ "src/language-markdown/pragma.js"(u, l) {
        ne();
        var t = Us(), a = ["format", "prettier"];
        function s(e) {
          let r = `@(${a.join("|")})`, n = new RegExp([`<!--\\s*${r}\\s*-->`, `{\\s*\\/\\*\\s*${r}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${r}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m");
          return e.match(n)?.index === 0;
        }
        l.exports = { startWithPragma: s, hasPragma: (e) => s(t(e).content.trimStart()), insertPragma: (e) => {
          let r = t(e), n = `<!-- @${a[0]} -->`;
          return r.frontMatter ? `${r.frontMatter.raw}

${n}

${r.content}` : `${n}

${r.content}`;
        } };
      } }), Eo = O({ "src/language-markdown/print-preprocess.js"(u, l) {
        ne();
        var t = mr(), { getOrderedListItemInfo: a, mapAst: s, splitText: e } = Ds(), r = /^.$/su;
        function n(k, A) {
          return k = y(k, A), k = p(k), k = c(k, A), k = C(k, A), k = w(k, A), k = D(k, A), k = o(k), k = m(k), k;
        }
        function o(k) {
          return s(k, (A) => A.type !== "import" && A.type !== "export" ? A : Object.assign(Object.assign({}, A), {}, { type: "importExport" }));
        }
        function c(k, A) {
          return s(k, (N) => N.type !== "inlineCode" || A.proseWrap === "preserve" ? N : Object.assign(Object.assign({}, N), {}, { value: N.value.replace(/\s+/g, " ") }));
        }
        function y(k, A) {
          return s(k, (N) => N.type !== "text" || N.value === "*" || N.value === "_" || !r.test(N.value) || N.position.end.offset - N.position.start.offset === N.value.length ? N : Object.assign(Object.assign({}, N), {}, { value: A.originalText.slice(N.position.start.offset, N.position.end.offset) }));
        }
        function m(k) {
          return g(k, (A, N) => A.type === "importExport" && N.type === "importExport", (A, N) => ({ type: "importExport", value: A.value + `

` + N.value, position: { start: A.position.start, end: N.position.end } }));
        }
        function g(k, A, N) {
          return s(k, (x) => {
            if (!x.children)
              return x;
            let P = x.children.reduce((_, J) => {
              let f = t(_);
              return f && A(f, J) ? _.splice(-1, 1, N(f, J)) : _.push(J), _;
            }, []);
            return Object.assign(Object.assign({}, x), {}, { children: P });
          });
        }
        function p(k) {
          return g(k, (A, N) => A.type === "text" && N.type === "text", (A, N) => ({ type: "text", value: A.value + N.value, position: { start: A.position.start, end: N.position.end } }));
        }
        function D(k, A) {
          return s(k, (N, x, P) => {
            let [_] = P;
            if (N.type !== "text")
              return N;
            let { value: J } = N;
            return _.type === "paragraph" && (x === 0 && (J = J.trimStart()), x === _.children.length - 1 && (J = J.trimEnd())), { type: "sentence", position: N.position, children: e(J, A) };
          });
        }
        function C(k, A) {
          return s(k, (N, x, P) => {
            if (N.type === "code") {
              let _ = /^\n?(?: {4,}|\t)/.test(A.originalText.slice(N.position.start.offset, N.position.end.offset));
              if (N.isIndented = _, _)
                for (let J = 0; J < P.length; J++) {
                  let f = P[J];
                  if (f.hasIndentedCodeblock)
                    break;
                  f.type === "list" && (f.hasIndentedCodeblock = !0);
                }
            }
            return N;
          });
        }
        function w(k, A) {
          return s(k, (P, _, J) => {
            if (P.type === "list" && P.children.length > 0) {
              for (let f = 0; f < J.length; f++) {
                let T = J[f];
                if (T.type === "list" && !T.isAligned)
                  return P.isAligned = !1, P;
              }
              P.isAligned = x(P);
            }
            return P;
          });
          function N(P) {
            return P.children.length === 0 ? -1 : P.children[0].position.start.column - 1;
          }
          function x(P) {
            if (!P.ordered)
              return !0;
            let [_, J] = P.children;
            if (a(_, A.originalText).leadingSpaces.length > 1)
              return !0;
            let f = N(_);
            if (f === -1)
              return !1;
            if (P.children.length === 1)
              return f % A.tabWidth === 0;
            let T = N(J);
            return f !== T ? !1 : f % A.tabWidth === 0 ? !0 : a(J, A.originalText).leadingSpaces.length > 1;
          }
        }
        l.exports = n;
      } }), Co = O({ "src/language-markdown/clean.js"(u, l) {
        ne();
        var t = Js(), { isFrontMatterNode: a } = Ut(), { startWithPragma: s } = Ws(), e = /* @__PURE__ */ new Set(["position", "raw"]);
        function r(n, o, c) {
          if ((n.type === "front-matter" || n.type === "code" || n.type === "yaml" || n.type === "import" || n.type === "export" || n.type === "jsx") && delete o.value, n.type === "list" && delete o.isAligned, (n.type === "list" || n.type === "listItem") && (delete o.spread, delete o.loose), n.type === "text" || (n.type === "inlineCode" && (o.value = n.value.replace(/[\t\n ]+/g, " ")), n.type === "wikiLink" && (o.value = n.value.trim().replace(/[\t\n]+/g, " ")), (n.type === "definition" || n.type === "linkReference" || n.type === "imageReference") && (o.label = t(n.label)), (n.type === "definition" || n.type === "link" || n.type === "image") && n.title && (o.title = n.title.replace(/\\(["')])/g, "$1")), c && c.type === "root" && c.children.length > 0 && (c.children[0] === n || a(c.children[0]) && c.children[1] === n) && n.type === "html" && s(n.value)))
            return null;
        }
        r.ignoredProperties = e, l.exports = r;
      } }), Fo = O({ "src/language-markdown/printer-markdown.js"(u, l) {
        ne();
        var t = Js(), { getLast: a, getMinNotPresentContinuousCount: s, getMaxContinuousCount: e, getStringWidth: r, isNonEmptyArray: n } = Ut(), { builders: { breakParent: o, join: c, line: y, literalline: m, markAsRoot: g, hardline: p, softline: D, ifBreak: C, fill: w, align: k, indent: A, group: N, hardlineWithoutBreakParent: x }, utils: { normalizeDoc: P, replaceTextEndOfLine: _ }, printer: { printDocToString: J } } = wt(), f = yo(), { insertPragma: T } = Ws(), { locStart: d, locEnd: F } = Xs(), i = Eo(), h = Co(), { getFencedCodeBlockValue: E, hasGitDiffFriendlyOrderedList: b, splitText: S, punctuationPattern: B, INLINE_NODE_TYPES: I, INLINE_NODE_WRAPPER_TYPES: M, isAutolink: U } = Ds(), q = /* @__PURE__ */ new Set(["importExport"]), ee = ["heading", "tableCell", "link", "wikiLink"], j = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function De(Se, H, _e) {
          let se = Se.getValue();
          if (Xe(Se))
            return S(H.originalText.slice(se.position.start.offset, se.position.end.offset), H).map((Te) => Te.type === "word" ? Te.value : Te.value === "" ? "" : X(Se, Te.value, H));
          switch (se.type) {
            case "front-matter":
              return H.originalText.slice(se.position.start.offset, se.position.end.offset);
            case "root":
              return se.children.length === 0 ? "" : [P(Be(Se, H, _e)), q.has(ae(se).type) ? "" : p];
            case "paragraph":
              return Ne(Se, H, _e, { postprocessor: w });
            case "sentence":
              return Ne(Se, H, _e);
            case "word": {
              let Te = se.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${B})(_+)`, `(_+)(${B}|$)`].join("|"), "g"), (je, v, oe, $e, Ke) => (oe ? `${v}${oe}` : `${$e}${Ke}`).replace(/_/g, "\\_")), pt = (je, v, oe) => je.type === "sentence" && oe === 0, ut = (je, v, oe) => U(je.children[oe - 1]);
              return Te !== se.value && (Se.match(void 0, pt, ut) || Se.match(void 0, pt, (je, v, oe) => je.type === "emphasis" && oe === 0, ut)) && (Te = Te.replace(/^(\\?[*_])+/, (je) => je.replace(/\\/g, ""))), Te;
            }
            case "whitespace": {
              let Te = Se.getParentNode(), pt = Te.children.indexOf(se), ut = Te.children[pt + 1], je = ut && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(ut.value) ? "never" : H.proseWrap;
              return X(Se, se.value, { proseWrap: je });
            }
            case "emphasis": {
              let Te;
              if (U(se.children[0]))
                Te = H.originalText[se.position.start.offset];
              else {
                let pt = Se.getParentNode(), ut = pt.children.indexOf(se), je = pt.children[ut - 1], v = pt.children[ut + 1];
                Te = je && je.type === "sentence" && je.children.length > 0 && a(je.children).type === "word" && !a(je.children).hasTrailingPunctuation || v && v.type === "sentence" && v.children.length > 0 && v.children[0].type === "word" && !v.children[0].hasLeadingPunctuation || Pe(Se, "emphasis") ? "*" : "_";
              }
              return [Te, Ne(Se, H, _e), Te];
            }
            case "strong":
              return ["**", Ne(Se, H, _e), "**"];
            case "delete":
              return ["~~", Ne(Se, H, _e), "~~"];
            case "inlineCode": {
              let Te = s(se.value, "`"), pt = "`".repeat(Te || 1), ut = Te && !/^\s/.test(se.value) ? " " : "";
              return [pt, ut, se.value, ut, pt];
            }
            case "wikiLink": {
              let Te = "";
              return H.proseWrap === "preserve" ? Te = se.value : Te = se.value.replace(/[\t\n]+/g, " "), ["[[", Te, "]]"];
            }
            case "link":
              switch (H.originalText[se.position.start.offset]) {
                case "<": {
                  let Te = "mailto:";
                  return ["<", se.url.startsWith(Te) && H.originalText.slice(se.position.start.offset + 1, se.position.start.offset + 1 + Te.length) !== Te ? se.url.slice(Te.length) : se.url, ">"];
                }
                case "[":
                  return ["[", Ne(Se, H, _e), "](", He(se.url, ")"), Ct(se.title, H), ")"];
                default:
                  return H.originalText.slice(se.position.start.offset, se.position.end.offset);
              }
            case "image":
              return ["![", se.alt || "", "](", He(se.url, ")"), Ct(se.title, H), ")"];
            case "blockquote":
              return ["> ", k("> ", Ne(Se, H, _e))];
            case "heading":
              return ["#".repeat(se.depth) + " ", Ne(Se, H, _e)];
            case "code": {
              if (se.isIndented) {
                let ut = " ".repeat(4);
                return k(ut, [ut, ..._(se.value, p)]);
              }
              let Te = H.__inJsTemplate ? "~" : "`", pt = Te.repeat(Math.max(3, e(se.value, Te) + 1));
              return [pt, se.lang || "", se.meta ? " " + se.meta : "", p, ..._(E(se, H.originalText), p), p, pt];
            }
            case "html": {
              let Te = Se.getParentNode(), pt = Te.type === "root" && a(Te.children) === se ? se.value.trimEnd() : se.value, ut = /^<!--.*-->$/s.test(pt);
              return _(pt, ut ? p : g(m));
            }
            case "list": {
              let Te = pe(se, Se.getParentNode()), pt = b(se, H);
              return Ne(Se, H, _e, { processor: (ut, je) => {
                let v = $e(), oe = ut.getValue();
                if (oe.children.length === 2 && oe.children[1].type === "html" && oe.children[0].position.start.column !== oe.children[1].position.start.column)
                  return [v, G(ut, H, _e, v)];
                return [v, k(" ".repeat(v.length), G(ut, H, _e, v))];
                function $e() {
                  let Ke = se.ordered ? (je === 0 ? se.start : pt ? 1 : se.start + je) + (Te % 2 === 0 ? ". " : ") ") : Te % 2 === 0 ? "- " : "* ";
                  return se.isAligned || se.hasIndentedCodeblock ? R(Ke, H) : Ke;
                }
              } });
            }
            case "thematicBreak": {
              let Te = fe(Se, "list");
              return Te === -1 ? "---" : pe(Se.getParentNode(Te), Se.getParentNode(Te + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", Ne(Se, H, _e), "]", se.referenceType === "full" ? Et(se) : se.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (se.referenceType) {
                case "full":
                  return ["![", se.alt || "", "]", Et(se)];
                default:
                  return ["![", se.alt, "]", se.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let Te = H.proseWrap === "always" ? y : " ";
              return N([Et(se), ":", A([Te, He(se.url), se.title === null ? "" : [Te, Ct(se.title, H, !1)]])]);
            }
            case "footnote":
              return ["[^", Ne(Se, H, _e), "]"];
            case "footnoteReference":
              return bt(se);
            case "footnoteDefinition": {
              let Te = Se.getParentNode().children[Se.getName() + 1], pt = se.children.length === 1 && se.children[0].type === "paragraph" && (H.proseWrap === "never" || H.proseWrap === "preserve" && se.children[0].position.start.line === se.children[0].position.end.line);
              return [bt(se), ": ", pt ? Ne(Se, H, _e) : N([k(" ".repeat(4), Ne(Se, H, _e, { processor: (ut, je) => je === 0 ? N([D, _e()]) : _e() })), Te && Te.type === "footnoteDefinition" ? D : ""])];
            }
            case "table":
              return ie(Se, H, _e);
            case "tableCell":
              return Ne(Se, H, _e);
            case "break":
              return /\s/.test(H.originalText[se.position.start.offset]) ? ["  ", g(m)] : ["\\", p];
            case "liquidNode":
              return _(se.value, p);
            case "importExport":
              return [se.value, p];
            case "esComment":
              return ["{/* ", se.value, " */}"];
            case "jsx":
              return se.value;
            case "math":
              return ["$$", p, se.value ? [..._(se.value, p), p] : "", "$$"];
            case "inlineMath":
              return H.originalText.slice(d(se), F(se));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(se.type)}`);
          }
        }
        function G(Se, H, _e, se) {
          let Te = Se.getValue(), pt = Te.checked === null ? "" : Te.checked ? "[x] " : "[ ] ";
          return [pt, Ne(Se, H, _e, { processor: (ut, je) => {
            if (je === 0 && ut.getValue().type !== "list")
              return k(" ".repeat(pt.length), _e());
            let v = " ".repeat(Rt(H.tabWidth - se.length, 0, 3));
            return [v, k(v, _e())];
          } })];
        }
        function R(Se, H) {
          let _e = se();
          return Se + " ".repeat(_e >= 4 ? 0 : _e);
          function se() {
            let Te = Se.length % H.tabWidth;
            return Te === 0 ? 0 : H.tabWidth - Te;
          }
        }
        function pe(Se, H) {
          return ve(Se, H, (_e) => _e.ordered === Se.ordered);
        }
        function ve(Se, H, _e) {
          let se = -1;
          for (let Te of H.children)
            if (Te.type === Se.type && _e(Te) ? se++ : se = -1, Te === Se)
              return se;
        }
        function fe(Se, H) {
          let _e = Array.isArray(H) ? H : [H], se = -1, Te;
          for (; Te = Se.getParentNode(++se); )
            if (_e.includes(Te.type))
              return se;
          return -1;
        }
        function Pe(Se, H) {
          let _e = fe(Se, H);
          return _e === -1 ? null : Se.getParentNode(_e);
        }
        function X(Se, H, _e) {
          if (_e.proseWrap === "preserve" && H === `
`)
            return p;
          let se = _e.proseWrap === "always" && !Pe(Se, ee);
          return H !== "" ? se ? y : " " : se ? D : "";
        }
        function ie(Se, H, _e) {
          let se = Se.getValue(), Te = [], pt = Se.map((Ke) => Ke.map((tt, ht) => {
            let Ye = J(_e(), H).formatted, pr = r(Ye);
            return Te[ht] = Math.max(Te[ht] || 3, pr), { text: Ye, width: pr };
          }, "children"), "children"), ut = v(!1);
          if (H.proseWrap !== "never")
            return [o, ut];
          let je = v(!0);
          return [o, N(C(je, ut))];
          function v(Ke) {
            let tt = [$e(pt[0], Ke), oe(Ke)];
            return pt.length > 1 && tt.push(c(x, pt.slice(1).map((ht) => $e(ht, Ke)))), c(x, tt);
          }
          function oe(Ke) {
            return `| ${Te.map((tt, ht) => {
              let Ye = se.align[ht], pr = Ye === "center" || Ye === "left" ? ":" : "-", dt = Ye === "center" || Ye === "right" ? ":" : "-", ar = Ke ? "-" : "-".repeat(tt - 2);
              return `${pr}${ar}${dt}`;
            }).join(" | ")} |`;
          }
          function $e(Ke, tt) {
            return `| ${Ke.map((ht, Ye) => {
              let { text: pr, width: dt } = ht;
              if (tt)
                return pr;
              let ar = Te[Ye] - dt, Dt = se.align[Ye], Tt = 0;
              Dt === "right" ? Tt = ar : Dt === "center" && (Tt = Math.floor(ar / 2));
              let jt = ar - Tt;
              return `${" ".repeat(Tt)}${pr}${" ".repeat(jt)}`;
            }).join(" | ")} |`;
          }
        }
        function Be(Se, H, _e) {
          let se = [], Te = null, { children: pt } = Se.getValue();
          for (let [ut, je] of pt.entries())
            switch (K(je)) {
              case "start":
                Te === null && (Te = { index: ut, offset: je.position.end.offset });
                break;
              case "end":
                Te !== null && (se.push({ start: Te, end: { index: ut, offset: je.position.start.offset } }), Te = null);
                break;
            }
          return Ne(Se, H, _e, { processor: (ut, je) => {
            if (se.length > 0) {
              let v = se[0];
              if (je === v.start.index)
                return [it(pt[v.start.index]), H.originalText.slice(v.start.offset, v.end.offset), it(pt[v.end.index])];
              if (v.start.index < je && je < v.end.index)
                return !1;
              if (je === v.end.index)
                return se.shift(), !1;
            }
            return _e();
          } });
        }
        function Ne(Se, H, _e) {
          let se = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: Te } = se, pt = se.processor || (() => _e()), ut = Se.getValue(), je = [], v;
          return Se.each((oe, $e) => {
            let Ke = oe.getValue(), tt = pt(oe, $e);
            if (tt !== !1) {
              let ht = { parts: je, prevNode: v, parentNode: ut, options: H };
              ge(Ke, ht) && (je.push(p), v && q.has(v.type) || (Ee(Ke, ht) || Oe(Ke, ht)) && je.push(p), Oe(Ke, ht) && je.push(p)), je.push(tt), v = Ke;
            }
          }, "children"), Te ? Te(je) : je;
        }
        function it(Se) {
          if (Se.type === "html")
            return Se.value;
          if (Se.type === "paragraph" && Array.isArray(Se.children) && Se.children.length === 1 && Se.children[0].type === "esComment")
            return ["{/* ", Se.children[0].value, " */}"];
        }
        function ae(Se) {
          let H = Se;
          for (; n(H.children); )
            H = a(H.children);
          return H;
        }
        function K(Se) {
          let H;
          if (Se.type === "html")
            H = Se.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let _e;
            Se.type === "esComment" ? _e = Se : Se.type === "paragraph" && Se.children.length === 1 && Se.children[0].type === "esComment" && (_e = Se.children[0]), _e && (H = _e.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return H ? H[1] || "next" : !1;
        }
        function ge(Se, H) {
          let _e = H.parts.length === 0, se = I.includes(Se.type), Te = Se.type === "html" && M.includes(H.parentNode.type);
          return !_e && !se && !Te;
        }
        function Ee(Se, H) {
          var _e, se, Te;
          let pt = (H.prevNode && H.prevNode.type) === Se.type && j.has(Se.type), ut = H.parentNode.type === "listItem" && !H.parentNode.loose, je = ((_e = H.prevNode) === null || _e === void 0 ? void 0 : _e.type) === "listItem" && H.prevNode.loose, v = K(H.prevNode) === "next", oe = Se.type === "html" && ((se = H.prevNode) === null || se === void 0 ? void 0 : se.type) === "html" && H.prevNode.position.end.line + 1 === Se.position.start.line, $e = Se.type === "html" && H.parentNode.type === "listItem" && ((Te = H.prevNode) === null || Te === void 0 ? void 0 : Te.type) === "paragraph" && H.prevNode.position.end.line + 1 === Se.position.start.line;
          return je || !(pt || ut || v || oe || $e);
        }
        function Oe(Se, H) {
          let _e = H.prevNode && H.prevNode.type === "list", se = Se.type === "code" && Se.isIndented;
          return _e && se;
        }
        function Xe(Se) {
          let H = Pe(Se, ["linkReference", "imageReference"]);
          return H && (H.type !== "linkReference" || H.referenceType !== "full");
        }
        function He(Se) {
          let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], _e = [" ", ...Array.isArray(H) ? H : [H]];
          return new RegExp(_e.map((se) => `\\${se}`).join("|")).test(Se) ? `<${Se}>` : Se;
        }
        function Ct(Se, H) {
          let _e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!Se)
            return "";
          if (_e)
            return " " + Ct(Se, H, !1);
          if (Se = Se.replace(/\\(["')])/g, "$1"), Se.includes('"') && Se.includes("'") && !Se.includes(")"))
            return `(${Se})`;
          let se = Se.split("'").length - 1, Te = Se.split('"').length - 1, pt = se > Te ? '"' : Te > se || H.singleQuote ? "'" : '"';
          return Se = Se.replace(/\\/, "\\\\"), Se = Se.replace(new RegExp(`(${pt})`, "g"), "\\$1"), `${pt}${Se}${pt}`;
        }
        function Rt(Se, H, _e) {
          return Se < H ? H : Se > _e ? _e : Se;
        }
        function It(Se) {
          let H = Number(Se.getName());
          if (H === 0)
            return !1;
          let _e = Se.getParentNode().children[H - 1];
          return K(_e) === "next";
        }
        function Et(Se) {
          return `[${t(Se.label)}]`;
        }
        function bt(Se) {
          return `[^${Se.label}]`;
        }
        l.exports = { preprocess: i, print: De, embed: f, massageAstNode: h, hasPrettierIgnore: It, insertPragma: T };
      } }), Ao = O({ "src/language-markdown/options.js"(u, l) {
        ne();
        var t = On();
        l.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
      } }), vo = O({ "src/language-markdown/parsers.js"() {
        ne();
      } }), zs = O({ "node_modules/linguist-languages/data/Markdown.json"(u, l) {
        l.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), bo = O({ "src/language-markdown/index.js"(u, l) {
        ne();
        var t = vr(), a = Fo(), s = Ao(), e = vo(), r = [t(zs(), (o) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...o.filenames, "README"], extensions: o.extensions.filter((c) => c !== ".mdx") })), t(zs(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], n = { mdast: a };
        l.exports = { languages: r, options: s, printers: n, parsers: e };
      } }), So = O({ "src/language-html/clean.js"(u, l) {
        ne();
        var { isFrontMatterNode: t } = Ut(), a = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function s(e, r) {
          if (e.type === "text" || e.type === "comment" || t(e) || e.type === "yaml" || e.type === "toml")
            return null;
          e.type === "attribute" && delete r.value, e.type === "docType" && delete r.value;
        }
        s.ignoredProperties = a, l.exports = s;
      } }), xo = O({ "src/language-html/constants.evaluate.js"(u, l) {
        l.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), To = O({ "src/language-html/utils/is-unknown-namespace.js"(u, l) {
        ne();
        function t(a) {
          return a.type === "element" && !a.hasExplicitNamespace && !["html", "svg"].includes(a.namespace);
        }
        l.exports = t;
      } }), $n = O({ "src/language-html/utils/index.js"(u, l) {
        ne();
        var { inferParserByLanguage: t, isFrontMatterNode: a } = Ut(), { builders: { line: s, hardline: e, join: r }, utils: { getDocParts: n, replaceTextEndOfLine: o } } = wt(), { CSS_DISPLAY_TAGS: c, CSS_DISPLAY_DEFAULT: y, CSS_WHITE_SPACE_TAGS: m, CSS_WHITE_SPACE_DEFAULT: g } = xo(), p = To(), D = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), C = (v) => v.replace(/^[\t\n\f\r ]+/, ""), w = (v) => v.replace(/[\t\n\f\r ]+$/, ""), k = (v) => C(w(v)), A = (v) => v.replace(/^[\t\f\r ]*\n/g, ""), N = (v) => A(w(v)), x = (v) => v.split(/[\t\n\f\r ]+/), P = (v) => v.match(/^[\t\n\f\r ]*/)[0], _ = (v) => {
          let [, oe, $e, Ke] = v.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: oe, trailingWhitespace: Ke, text: $e };
        }, J = (v) => /[\t\n\f\r ]/.test(v);
        function f(v, oe) {
          return !!(v.type === "ieConditionalComment" && v.lastChild && !v.lastChild.isSelfClosing && !v.lastChild.endSourceSpan || v.type === "ieConditionalComment" && !v.complete || Ee(v) && v.children.some(($e) => $e.type !== "text" && $e.type !== "interpolation") || se(v, oe) && !i(v) && v.type !== "interpolation");
        }
        function T(v) {
          return v.type === "attribute" || !v.parent || !v.prev ? !1 : d(v.prev);
        }
        function d(v) {
          return v.type === "comment" && v.value.trim() === "prettier-ignore";
        }
        function F(v) {
          return v.type === "text" || v.type === "comment";
        }
        function i(v) {
          return v.type === "element" && (v.fullName === "script" || v.fullName === "style" || v.fullName === "svg:style" || p(v) && (v.name === "script" || v.name === "style"));
        }
        function h(v) {
          return v.children && !i(v);
        }
        function E(v) {
          return i(v) || v.type === "interpolation" || b(v);
        }
        function b(v) {
          return Ct(v).startsWith("pre");
        }
        function S(v, oe) {
          let $e = Ke();
          if ($e && !v.prev && v.parent && v.parent.tagDefinition && v.parent.tagDefinition.ignoreFirstLf)
            return v.type === "interpolation";
          return $e;
          function Ke() {
            return a(v) ? !1 : (v.type === "text" || v.type === "interpolation") && v.prev && (v.prev.type === "text" || v.prev.type === "interpolation") ? !0 : !v.parent || v.parent.cssDisplay === "none" ? !1 : Ee(v.parent) ? !0 : !(!v.prev && (v.parent.type === "root" || Ee(v) && v.parent || i(v.parent) || H(v.parent, oe) || !Ne(v.parent.cssDisplay)) || v.prev && !K(v.prev.cssDisplay));
          }
        }
        function B(v, oe) {
          return a(v) ? !1 : (v.type === "text" || v.type === "interpolation") && v.next && (v.next.type === "text" || v.next.type === "interpolation") ? !0 : !v.parent || v.parent.cssDisplay === "none" ? !1 : Ee(v.parent) ? !0 : !(!v.next && (v.parent.type === "root" || Ee(v) && v.parent || i(v.parent) || H(v.parent, oe) || !it(v.parent.cssDisplay)) || v.next && !ae(v.next.cssDisplay));
        }
        function I(v) {
          return ge(v.cssDisplay) && !i(v);
        }
        function M(v) {
          return a(v) || v.next && v.sourceSpan.end && v.sourceSpan.end.line + 1 < v.next.sourceSpan.start.line;
        }
        function U(v) {
          return q(v) || v.type === "element" && v.children.length > 0 && (["body", "script", "style"].includes(v.name) || v.children.some((oe) => fe(oe))) || v.firstChild && v.firstChild === v.lastChild && v.firstChild.type !== "text" && G(v.firstChild) && (!v.lastChild.isTrailingSpaceSensitive || R(v.lastChild));
        }
        function q(v) {
          return v.type === "element" && v.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(v.name) || v.cssDisplay.startsWith("table") && v.cssDisplay !== "table-cell");
        }
        function ee(v) {
          return pe(v) || v.prev && j(v.prev) || De(v);
        }
        function j(v) {
          return pe(v) || v.type === "element" && v.fullName === "br" || De(v);
        }
        function De(v) {
          return G(v) && R(v);
        }
        function G(v) {
          return v.hasLeadingSpaces && (v.prev ? v.prev.sourceSpan.end.line < v.sourceSpan.start.line : v.parent.type === "root" || v.parent.startSourceSpan.end.line < v.sourceSpan.start.line);
        }
        function R(v) {
          return v.hasTrailingSpaces && (v.next ? v.next.sourceSpan.start.line > v.sourceSpan.end.line : v.parent.type === "root" || v.parent.endSourceSpan && v.parent.endSourceSpan.start.line > v.sourceSpan.end.line);
        }
        function pe(v) {
          switch (v.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return !0;
            case "element":
              return ["script", "select"].includes(v.name);
          }
          return !1;
        }
        function ve(v) {
          return v.lastChild ? ve(v.lastChild) : v;
        }
        function fe(v) {
          return v.children && v.children.some((oe) => oe.type !== "text");
        }
        function Pe(v) {
          let { type: oe, lang: $e } = v.attrMap;
          if (oe === "module" || oe === "text/javascript" || oe === "text/babel" || oe === "application/javascript" || $e === "jsx")
            return "babel";
          if (oe === "application/x-typescript" || $e === "ts" || $e === "tsx")
            return "typescript";
          if (oe === "text/markdown")
            return "markdown";
          if (oe === "text/html")
            return "html";
          if (oe && (oe.endsWith("json") || oe.endsWith("importmap")) || oe === "speculationrules")
            return "json";
          if (oe === "text/x-handlebars-template")
            return "glimmer";
        }
        function X(v, oe) {
          let { lang: $e } = v.attrMap;
          if (!$e || $e === "postcss" || $e === "css")
            return "css";
          if ($e === "scss")
            return "scss";
          if ($e === "less")
            return "less";
          if ($e === "stylus")
            return t("stylus", oe);
        }
        function ie(v, oe) {
          if (v.name === "script" && !v.attrMap.src)
            return !v.attrMap.lang && !v.attrMap.type ? "babel" : Pe(v);
          if (v.name === "style")
            return X(v, oe);
          if (oe && se(v, oe))
            return Pe(v) || !("src" in v.attrMap) && t(v.attrMap.lang, oe);
        }
        function Be(v) {
          return v === "block" || v === "list-item" || v.startsWith("table");
        }
        function Ne(v) {
          return !Be(v) && v !== "inline-block";
        }
        function it(v) {
          return !Be(v) && v !== "inline-block";
        }
        function ae(v) {
          return !Be(v);
        }
        function K(v) {
          return !Be(v);
        }
        function ge(v) {
          return !Be(v) && v !== "inline-block";
        }
        function Ee(v) {
          return Ct(v).startsWith("pre");
        }
        function Oe(v, oe) {
          let $e = 0;
          for (let Ke = v.stack.length - 1; Ke >= 0; Ke--) {
            let tt = v.stack[Ke];
            tt && typeof tt == "object" && !Array.isArray(tt) && oe(tt) && $e++;
          }
          return $e;
        }
        function Xe(v, oe) {
          let $e = v;
          for (; $e; ) {
            if (oe($e))
              return !0;
            $e = $e.parent;
          }
          return !1;
        }
        function He(v, oe) {
          if (v.prev && v.prev.type === "comment") {
            let Ke = v.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (Ke)
              return Ke[1];
          }
          let $e = !1;
          if (v.type === "element" && v.namespace === "svg")
            if (Xe(v, (Ke) => Ke.fullName === "svg:foreignObject"))
              $e = !0;
            else
              return v.name === "svg" ? "inline-block" : "block";
          switch (oe.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return oe.parser === "vue" && v.parent && v.parent.type === "root" ? "block" : v.type === "element" && (!v.namespace || $e || p(v)) && c[v.name] || y;
          }
        }
        function Ct(v) {
          return v.type === "element" && (!v.namespace || p(v)) && m[v.name] || g;
        }
        function Rt(v) {
          let oe = Number.POSITIVE_INFINITY;
          for (let $e of v.split(`
`)) {
            if ($e.length === 0)
              continue;
            if (!D.has($e[0]))
              return 0;
            let Ke = P($e).length;
            $e.length !== Ke && Ke < oe && (oe = Ke);
          }
          return oe === Number.POSITIVE_INFINITY ? 0 : oe;
        }
        function It(v) {
          let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt(v);
          return oe === 0 ? v : v.split(`
`).map(($e) => $e.slice(oe)).join(`
`);
        }
        function Et(v, oe) {
          let $e = 0;
          for (let Ke = 0; Ke < v.length; Ke++)
            v[Ke] === oe && $e++;
          return $e;
        }
        function bt(v) {
          return v.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var Se = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function H(v, oe) {
          return _e(v, oe) && !Se.has(v.fullName);
        }
        function _e(v, oe) {
          return oe.parser === "vue" && v.type === "element" && v.parent.type === "root" && v.fullName.toLowerCase() !== "html";
        }
        function se(v, oe) {
          return _e(v, oe) && (H(v, oe) || v.attrMap.lang && v.attrMap.lang !== "html");
        }
        function Te(v) {
          let oe = v.fullName;
          return oe.charAt(0) === "#" || oe === "slot-scope" || oe === "v-slot" || oe.startsWith("v-slot:");
        }
        function pt(v, oe) {
          let $e = v.parent;
          if (!_e($e, oe))
            return !1;
          let Ke = $e.fullName, tt = v.fullName;
          return Ke === "script" && tt === "setup" || Ke === "style" && tt === "vars";
        }
        function ut(v) {
          let oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v.value;
          return v.parent.isWhitespaceSensitive ? v.parent.isIndentationSensitive ? o(oe) : o(It(N(oe)), e) : n(r(s, x(oe)));
        }
        function je(v, oe) {
          return _e(v, oe) && v.name === "script";
        }
        l.exports = { htmlTrim: k, htmlTrimPreserveIndentation: N, hasHtmlWhitespace: J, getLeadingAndTrailingHtmlWhitespace: _, canHaveInterpolation: h, countChars: Et, countParents: Oe, dedentString: It, forceBreakChildren: q, forceBreakContent: U, forceNextEmptyLine: M, getLastDescendant: ve, getNodeCssStyleDisplay: He, getNodeCssStyleWhiteSpace: Ct, hasPrettierIgnore: T, inferScriptParser: ie, isVueCustomBlock: H, isVueNonHtmlBlock: se, isVueScriptTag: je, isVueSlotAttribute: Te, isVueSfcBindingsAttribute: pt, isVueSfcBlock: _e, isDanglingSpaceSensitiveNode: I, isIndentationSensitiveNode: b, isLeadingSpaceSensitiveNode: S, isPreLikeNode: Ee, isScriptLikeTag: i, isTextLikeNode: F, isTrailingSpaceSensitiveNode: B, isWhitespaceSensitiveNode: E, isUnknownNamespace: p, preferHardlineAsLeadingSpaces: ee, preferHardlineAsTrailingSpaces: j, shouldPreserveContent: f, unescapeQuoteEntities: bt, getTextValueParts: ut };
      } }), Bo = O({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 }), u.$EOF = 0, u.$BSPACE = 8, u.$TAB = 9, u.$LF = 10, u.$VTAB = 11, u.$FF = 12, u.$CR = 13, u.$SPACE = 32, u.$BANG = 33, u.$DQ = 34, u.$HASH = 35, u.$$ = 36, u.$PERCENT = 37, u.$AMPERSAND = 38, u.$SQ = 39, u.$LPAREN = 40, u.$RPAREN = 41, u.$STAR = 42, u.$PLUS = 43, u.$COMMA = 44, u.$MINUS = 45, u.$PERIOD = 46, u.$SLASH = 47, u.$COLON = 58, u.$SEMICOLON = 59, u.$LT = 60, u.$EQ = 61, u.$GT = 62, u.$QUESTION = 63, u.$0 = 48, u.$7 = 55, u.$9 = 57, u.$A = 65, u.$E = 69, u.$F = 70, u.$X = 88, u.$Z = 90, u.$LBRACKET = 91, u.$BACKSLASH = 92, u.$RBRACKET = 93, u.$CARET = 94, u.$_ = 95, u.$a = 97, u.$b = 98, u.$e = 101, u.$f = 102, u.$n = 110, u.$r = 114, u.$t = 116, u.$u = 117, u.$v = 118, u.$x = 120, u.$z = 122, u.$LBRACE = 123, u.$BAR = 124, u.$RBRACE = 125, u.$NBSP = 160, u.$PIPE = 124, u.$TILDA = 126, u.$AT = 64, u.$BT = 96;
        function l(n) {
          return n >= u.$TAB && n <= u.$SPACE || n == u.$NBSP;
        }
        u.isWhitespace = l;
        function t(n) {
          return u.$0 <= n && n <= u.$9;
        }
        u.isDigit = t;
        function a(n) {
          return n >= u.$a && n <= u.$z || n >= u.$A && n <= u.$Z;
        }
        u.isAsciiLetter = a;
        function s(n) {
          return n >= u.$a && n <= u.$f || n >= u.$A && n <= u.$F || t(n);
        }
        u.isAsciiHexDigit = s;
        function e(n) {
          return n === u.$LF || n === u.$CR;
        }
        u.isNewLine = e;
        function r(n) {
          return u.$0 <= n && n <= u.$7;
        }
        u.isOctalDigit = r;
      } }), wo = O({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = class {
          constructor(a, s, e) {
            this.filePath = a, this.name = s, this.members = e;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        u.StaticSymbol = l;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(a, s, e) {
            e = e || [];
            let r = e.length ? `.${e.join(".")}` : "", n = `"${a}".${s}${r}`, o = this.cache.get(n);
            return o || (o = new l(a, s, e), this.cache.set(n, o)), o;
          }
        };
        u.StaticSymbolCache = t;
      } }), No = O({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = /-+([a-z0-9])/g;
        function t(i) {
          return i.replace(l, function() {
            for (var h = arguments.length, E = new Array(h), b = 0; b < h; b++)
              E[b] = arguments[b];
            return E[1].toUpperCase();
          });
        }
        u.dashCaseToCamelCase = t;
        function a(i, h) {
          return e(i, ":", h);
        }
        u.splitAtColon = a;
        function s(i, h) {
          return e(i, ".", h);
        }
        u.splitAtPeriod = s;
        function e(i, h, E) {
          let b = i.indexOf(h);
          return b == -1 ? E : [i.slice(0, b).trim(), i.slice(b + 1).trim()];
        }
        function r(i, h, E) {
          return Array.isArray(i) ? h.visitArray(i, E) : A(i) ? h.visitStringMap(i, E) : i == null || typeof i == "string" || typeof i == "number" || typeof i == "boolean" ? h.visitPrimitive(i, E) : h.visitOther(i, E);
        }
        u.visitValue = r;
        function n(i) {
          return i != null;
        }
        u.isDefined = n;
        function o(i) {
          return i === void 0 ? null : i;
        }
        u.noUndefined = o;
        var c = class {
          visitArray(i, h) {
            return i.map((E) => r(E, this, h));
          }
          visitStringMap(i, h) {
            let E = {};
            return Object.keys(i).forEach((b) => {
              E[b] = r(i[b], this, h);
            }), E;
          }
          visitPrimitive(i, h) {
            return i;
          }
          visitOther(i, h) {
            return i;
          }
        };
        u.ValueTransformer = c, u.SyncAsync = { assertSync: (i) => {
          if (_(i))
            throw new Error("Illegal state: value cannot be a promise");
          return i;
        }, then: (i, h) => _(i) ? i.then(h) : h(i), all: (i) => i.some(_) ? Promise.all(i) : i };
        function y(i) {
          throw new Error(`Internal Error: ${i}`);
        }
        u.error = y;
        function m(i, h) {
          let E = Error(i);
          return E[g] = !0, h && (E[p] = h), E;
        }
        u.syntaxError = m;
        var g = "ngSyntaxError", p = "ngParseErrors";
        function D(i) {
          return i[g];
        }
        u.isSyntaxError = D;
        function C(i) {
          return i[p] || [];
        }
        u.getParseErrors = C;
        function w(i) {
          return i.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        u.escapeRegExp = w;
        var k = Object.getPrototypeOf({});
        function A(i) {
          return typeof i == "object" && i !== null && Object.getPrototypeOf(i) === k;
        }
        function N(i) {
          let h = "";
          for (let E = 0; E < i.length; E++) {
            let b = i.charCodeAt(E);
            if (b >= 55296 && b <= 56319 && i.length > E + 1) {
              let S = i.charCodeAt(E + 1);
              S >= 56320 && S <= 57343 && (E++, b = (b - 55296 << 10) + S - 56320 + 65536);
            }
            b <= 127 ? h += String.fromCharCode(b) : b <= 2047 ? h += String.fromCharCode(b >> 6 & 31 | 192, b & 63 | 128) : b <= 65535 ? h += String.fromCharCode(b >> 12 | 224, b >> 6 & 63 | 128, b & 63 | 128) : b <= 2097151 && (h += String.fromCharCode(b >> 18 & 7 | 240, b >> 12 & 63 | 128, b >> 6 & 63 | 128, b & 63 | 128));
          }
          return h;
        }
        u.utf8Encode = N;
        function x(i) {
          if (typeof i == "string")
            return i;
          if (i instanceof Array)
            return "[" + i.map(x).join(", ") + "]";
          if (i == null)
            return "" + i;
          if (i.overriddenName)
            return `${i.overriddenName}`;
          if (i.name)
            return `${i.name}`;
          if (!i.toString)
            return "object";
          let h = i.toString();
          if (h == null)
            return "" + h;
          let E = h.indexOf(`
`);
          return E === -1 ? h : h.substring(0, E);
        }
        u.stringify = x;
        function P(i) {
          return typeof i == "function" && i.hasOwnProperty("__forward_ref__") ? i() : i;
        }
        u.resolveForwardRef = P;
        function _(i) {
          return !!i && typeof i.then == "function";
        }
        u.isPromise = _;
        var J = class {
          constructor(i) {
            this.full = i;
            let h = i.split(".");
            this.major = h[0], this.minor = h[1], this.patch = h.slice(2).join(".");
          }
        };
        u.Version = J;
        var f = typeof window < "u" && window, T = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, d = typeof globalThis < "u" && globalThis, F = d || f || T;
        u.global = F;
      } }), _o = O({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = wo(), t = No(), a = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function s(E) {
          return E.replace(/\W/g, "_");
        }
        u.sanitizeIdentifier = s;
        var e = 0;
        function r(E) {
          if (!E || !E.reference)
            return null;
          let b = E.reference;
          if (b instanceof l.StaticSymbol)
            return b.name;
          if (b.__anonymousType)
            return b.__anonymousType;
          let S = t.stringify(b);
          return S.indexOf("(") >= 0 ? (S = `anonymous_${e++}`, b.__anonymousType = S) : S = s(S), S;
        }
        u.identifierName = r;
        function n(E) {
          let b = E.reference;
          return b instanceof l.StaticSymbol ? b.filePath : `./${t.stringify(b)}`;
        }
        u.identifierModuleUrl = n;
        function o(E, b) {
          return `View_${r({ reference: E })}_${b}`;
        }
        u.viewClassName = o;
        function c(E) {
          return `RenderType_${r({ reference: E })}`;
        }
        u.rendererTypeName = c;
        function y(E) {
          return `HostView_${r({ reference: E })}`;
        }
        u.hostViewClassName = y;
        function m(E) {
          return `${r({ reference: E })}NgFactory`;
        }
        u.componentFactoryName = m;
        var g;
        (function(E) {
          E[E.Pipe = 0] = "Pipe", E[E.Directive = 1] = "Directive", E[E.NgModule = 2] = "NgModule", E[E.Injectable = 3] = "Injectable";
        })(g = u.CompileSummaryKind || (u.CompileSummaryKind = {}));
        function p(E) {
          return E.value != null ? s(E.value) : r(E.identifier);
        }
        u.tokenName = p;
        function D(E) {
          return E.identifier != null ? E.identifier.reference : E.value;
        }
        u.tokenReference = D;
        var C = class {
          constructor() {
            let { moduleUrl: E, styles: b, styleUrls: S } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = E || null, this.styles = _(b), this.styleUrls = _(S);
          }
        };
        u.CompileStylesheetMetadata = C;
        var w = class {
          constructor(E) {
            let { encapsulation: b, template: S, templateUrl: B, htmlAst: I, styles: M, styleUrls: U, externalStylesheets: q, animations: ee, ngContentSelectors: j, interpolation: De, isInline: G, preserveWhitespaces: R } = E;
            if (this.encapsulation = b, this.template = S, this.templateUrl = B, this.htmlAst = I, this.styles = _(M), this.styleUrls = _(U), this.externalStylesheets = _(q), this.animations = ee ? f(ee) : [], this.ngContentSelectors = j || [], De && De.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = De, this.isInline = G, this.preserveWhitespaces = R;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        u.CompileTemplateMetadata = w;
        var k = class {
          static create(E) {
            let { isHost: b, type: S, isComponent: B, selector: I, exportAs: M, changeDetection: U, inputs: q, outputs: ee, host: j, providers: De, viewProviders: G, queries: R, guards: pe, viewQueries: ve, entryComponents: fe, template: Pe, componentViewType: X, rendererType: ie, componentFactory: Be } = E, Ne = {}, it = {}, ae = {};
            j != null && Object.keys(j).forEach((Ee) => {
              let Oe = j[Ee], Xe = Ee.match(a);
              Xe === null ? ae[Ee] = Oe : Xe[1] != null ? it[Xe[1]] = Oe : Xe[2] != null && (Ne[Xe[2]] = Oe);
            });
            let K = {};
            q?.forEach((Ee) => {
              let Oe = t.splitAtColon(Ee, [Ee, Ee]);
              K[Oe[0]] = Oe[1];
            });
            let ge = {};
            return ee?.forEach((Ee) => {
              let Oe = t.splitAtColon(Ee, [Ee, Ee]);
              ge[Oe[0]] = Oe[1];
            }), new k({ isHost: b, type: S, isComponent: !!B, selector: I, exportAs: M, changeDetection: U, inputs: K, outputs: ge, hostListeners: Ne, hostProperties: it, hostAttributes: ae, providers: De, viewProviders: G, queries: R, guards: pe, viewQueries: ve, entryComponents: fe, template: Pe, componentViewType: X, rendererType: ie, componentFactory: Be });
          }
          constructor(E) {
            let { isHost: b, type: S, isComponent: B, selector: I, exportAs: M, changeDetection: U, inputs: q, outputs: ee, hostListeners: j, hostProperties: De, hostAttributes: G, providers: R, viewProviders: pe, queries: ve, guards: fe, viewQueries: Pe, entryComponents: X, template: ie, componentViewType: Be, rendererType: Ne, componentFactory: it } = E;
            this.isHost = !!b, this.type = S, this.isComponent = B, this.selector = I, this.exportAs = M, this.changeDetection = U, this.inputs = q, this.outputs = ee, this.hostListeners = j, this.hostProperties = De, this.hostAttributes = G, this.providers = _(R), this.viewProviders = _(pe), this.queries = _(ve), this.guards = fe, this.viewQueries = _(Pe), this.entryComponents = _(X), this.template = ie, this.componentViewType = Be, this.rendererType = Ne, this.componentFactory = it;
          }
          toSummary() {
            return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        u.CompileDirectiveMetadata = k;
        var A = class {
          constructor(E) {
            let { type: b, name: S, pure: B } = E;
            this.type = b, this.name = S, this.pure = !!B;
          }
          toSummary() {
            return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        u.CompilePipeMetadata = A;
        var N = class {
        };
        u.CompileShallowModuleMetadata = N;
        var x = class {
          constructor(E) {
            let { type: b, providers: S, declaredDirectives: B, exportedDirectives: I, declaredPipes: M, exportedPipes: U, entryComponents: q, bootstrapComponents: ee, importedModules: j, exportedModules: De, schemas: G, transitiveModule: R, id: pe } = E;
            this.type = b || null, this.declaredDirectives = _(B), this.exportedDirectives = _(I), this.declaredPipes = _(M), this.exportedPipes = _(U), this.providers = _(S), this.entryComponents = _(q), this.bootstrapComponents = _(ee), this.importedModules = _(j), this.exportedModules = _(De), this.schemas = _(G), this.id = pe || null, this.transitiveModule = R || null;
          }
          toSummary() {
            let E = this.transitiveModule;
            return { summaryKind: g.NgModule, type: this.type, entryComponents: E.entryComponents, providers: E.providers, modules: E.modules, exportedDirectives: E.exportedDirectives, exportedPipes: E.exportedPipes };
          }
        };
        u.CompileNgModuleMetadata = x;
        var P = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(E, b) {
            this.providers.push({ provider: E, module: b });
          }
          addDirective(E) {
            this.directivesSet.has(E.reference) || (this.directivesSet.add(E.reference), this.directives.push(E));
          }
          addExportedDirective(E) {
            this.exportedDirectivesSet.has(E.reference) || (this.exportedDirectivesSet.add(E.reference), this.exportedDirectives.push(E));
          }
          addPipe(E) {
            this.pipesSet.has(E.reference) || (this.pipesSet.add(E.reference), this.pipes.push(E));
          }
          addExportedPipe(E) {
            this.exportedPipesSet.has(E.reference) || (this.exportedPipesSet.add(E.reference), this.exportedPipes.push(E));
          }
          addModule(E) {
            this.modulesSet.has(E.reference) || (this.modulesSet.add(E.reference), this.modules.push(E));
          }
          addEntryComponent(E) {
            this.entryComponentsSet.has(E.componentType) || (this.entryComponentsSet.add(E.componentType), this.entryComponents.push(E));
          }
        };
        u.TransitiveCompileNgModuleMetadata = P;
        function _(E) {
          return E || [];
        }
        var J = class {
          constructor(E, b) {
            let { useClass: S, useValue: B, useExisting: I, useFactory: M, deps: U, multi: q } = b;
            this.token = E, this.useClass = S || null, this.useValue = B, this.useExisting = I, this.useFactory = M || null, this.dependencies = U || null, this.multi = !!q;
          }
        };
        u.ProviderMeta = J;
        function f(E) {
          return E.reduce((b, S) => {
            let B = Array.isArray(S) ? f(S) : S;
            return b.concat(B);
          }, []);
        }
        u.flatten = f;
        function T(E) {
          return E.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function d(E, b, S) {
          let B;
          return S.isInline ? b.type.reference instanceof l.StaticSymbol ? B = `${b.type.reference.filePath}.${b.type.reference.name}.html` : B = `${r(E)}/${r(b.type)}.html` : B = S.templateUrl, b.type.reference instanceof l.StaticSymbol ? B : T(B);
        }
        u.templateSourceUrl = d;
        function F(E, b) {
          let S = E.moduleUrl.split(/\/\\/g), B = S[S.length - 1];
          return T(`css/${b}${B}.ngstyle.js`);
        }
        u.sharedStylesheetJitUrl = F;
        function i(E) {
          return T(`${r(E.type)}/module.ngfactory.js`);
        }
        u.ngModuleJitUrl = i;
        function h(E, b) {
          return T(`${r(E)}/${r(b.type)}.ngfactory.js`);
        }
        u.templateJitUrl = h;
      } }), ko = O({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(u) {
        ne(), Object.defineProperty(u, "__esModule", { value: !0 });
        var l = Bo(), t = _o(), a = class {
          constructor(y, m, g, p) {
            this.file = y, this.offset = m, this.line = g, this.col = p;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(y) {
            let m = this.file.content, g = m.length, p = this.offset, D = this.line, C = this.col;
            for (; p > 0 && y < 0; )
              if (p--, y++, m.charCodeAt(p) == l.$LF) {
                D--;
                let w = m.substr(0, p - 1).lastIndexOf(String.fromCharCode(l.$LF));
                C = w > 0 ? p - w : p;
              } else
                C--;
            for (; p < g && y > 0; ) {
              let w = m.charCodeAt(p);
              p++, y--, w == l.$LF ? (D++, C = 0) : C++;
            }
            return new a(this.file, p, D, C);
          }
          getContext(y, m) {
            let g = this.file.content, p = this.offset;
            if (p != null) {
              p > g.length - 1 && (p = g.length - 1);
              let D = p, C = 0, w = 0;
              for (; C < y && p > 0 && (p--, C++, !(g[p] == `
` && ++w == m)); )
                ;
              for (C = 0, w = 0; C < y && D < g.length - 1 && (D++, C++, !(g[D] == `
` && ++w == m)); )
                ;
              return { before: g.substring(p, this.offset), after: g.substring(this.offset, D + 1) };
            }
            return null;
          }
        };
        u.ParseLocation = a;
        var s = class {
          constructor(y, m) {
            this.content = y, this.url = m;
          }
        };
        u.ParseSourceFile = s;
        var e = class {
          constructor(y, m) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = y, this.end = m, this.details = g;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        u.ParseSourceSpan = e, u.EMPTY_PARSE_LOCATION = new a(new s("", ""), 0, 0, 0), u.EMPTY_SOURCE_SPAN = new e(u.EMPTY_PARSE_LOCATION, u.EMPTY_PARSE_LOCATION);
        var r;
        (function(y) {
          y[y.WARNING = 0] = "WARNING", y[y.ERROR = 1] = "ERROR";
        })(r = u.ParseErrorLevel || (u.ParseErrorLevel = {}));
        var n = class {
          constructor(y, m) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : r.ERROR;
            this.span = y, this.msg = m, this.level = g;
          }
          contextualMessage() {
            let y = this.span.start.getContext(100, 3);
            return y ? `${this.msg} ("${y.before}[${r[this.level]} ->]${y.after}")` : this.msg;
          }
          toString() {
            let y = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${y}`;
          }
        };
        u.ParseError = n;
        function o(y, m) {
          let g = t.identifierModuleUrl(m), p = g != null ? `in ${y} ${t.identifierName(m)} in ${g}` : `in ${y} ${t.identifierName(m)}`, D = new s("", p);
          return new e(new a(D, -1, -1, -1), new a(D, -1, -1, -1));
        }
        u.typeSourceSpan = o;
        function c(y, m, g) {
          let p = `in ${y} ${m} in ${g}`, D = new s("", p);
          return new e(new a(D, -1, -1, -1), new a(D, -1, -1, -1));
        }
        u.r3JitTypeSourceSpan = c;
      } }), Po = O({ "src/language-html/print-preprocess.js"(u, l) {
        ne();
        var { ParseSourceSpan: t } = ko(), { htmlTrim: a, getLeadingAndTrailingHtmlWhitespace: s, hasHtmlWhitespace: e, canHaveInterpolation: r, getNodeCssStyleDisplay: n, isDanglingSpaceSensitiveNode: o, isIndentationSensitiveNode: c, isLeadingSpaceSensitiveNode: y, isTrailingSpaceSensitiveNode: m, isWhitespaceSensitiveNode: g, isVueScriptTag: p } = $n(), D = [w, k, N, P, _, T, J, f, d, x, F];
        function C(i, h) {
          for (let E of D)
            E(i, h);
          return i;
        }
        function w(i) {
          i.walk((h) => {
            if (h.type === "element" && h.tagDefinition.ignoreFirstLf && h.children.length > 0 && h.children[0].type === "text" && h.children[0].value[0] === `
`) {
              let E = h.children[0];
              E.value.length === 1 ? h.removeChild(E) : E.value = E.value.slice(1);
            }
          });
        }
        function k(i) {
          let h = (E) => E.type === "element" && E.prev && E.prev.type === "ieConditionalStartComment" && E.prev.sourceSpan.end.offset === E.startSourceSpan.start.offset && E.firstChild && E.firstChild.type === "ieConditionalEndComment" && E.firstChild.sourceSpan.start.offset === E.startSourceSpan.end.offset;
          i.walk((E) => {
            if (E.children)
              for (let b = 0; b < E.children.length; b++) {
                let S = E.children[b];
                if (!h(S))
                  continue;
                let B = S.prev, I = S.firstChild;
                E.removeChild(B), b--;
                let M = new t(B.sourceSpan.start, I.sourceSpan.end), U = new t(M.start, S.sourceSpan.end);
                S.condition = B.condition, S.sourceSpan = U, S.startSourceSpan = M, S.removeChild(I);
              }
          });
        }
        function A(i, h, E) {
          i.walk((b) => {
            if (b.children)
              for (let S = 0; S < b.children.length; S++) {
                let B = b.children[S];
                if (B.type !== "text" && !h(B))
                  continue;
                B.type !== "text" && (B.type = "text", B.value = E(B));
                let I = B.prev;
                !I || I.type !== "text" || (I.value += B.value, I.sourceSpan = new t(I.sourceSpan.start, B.sourceSpan.end), b.removeChild(B), S--);
              }
          });
        }
        function N(i) {
          return A(i, (h) => h.type === "cdata", (h) => `<![CDATA[${h.value}]]>`);
        }
        function x(i) {
          let h = (E) => E.type === "element" && E.attrs.length === 0 && E.children.length === 1 && E.firstChild.type === "text" && !e(E.children[0].value) && !E.firstChild.hasLeadingSpaces && !E.firstChild.hasTrailingSpaces && E.isLeadingSpaceSensitive && !E.hasLeadingSpaces && E.isTrailingSpaceSensitive && !E.hasTrailingSpaces && E.prev && E.prev.type === "text" && E.next && E.next.type === "text";
          i.walk((E) => {
            if (E.children)
              for (let b = 0; b < E.children.length; b++) {
                let S = E.children[b];
                if (!h(S))
                  continue;
                let B = S.prev, I = S.next;
                B.value += `<${S.rawName}>` + S.firstChild.value + `</${S.rawName}>` + I.value, B.sourceSpan = new t(B.sourceSpan.start, I.sourceSpan.end), B.isTrailingSpaceSensitive = I.isTrailingSpaceSensitive, B.hasTrailingSpaces = I.hasTrailingSpaces, E.removeChild(S), b--, E.removeChild(I);
              }
          });
        }
        function P(i, h) {
          if (h.parser === "html")
            return;
          let E = /{{(.+?)}}/s;
          i.walk((b) => {
            if (r(b))
              for (let S of b.children) {
                if (S.type !== "text")
                  continue;
                let B = S.sourceSpan.start, I = null, M = S.value.split(E);
                for (let U = 0; U < M.length; U++, B = I) {
                  let q = M[U];
                  if (U % 2 === 0) {
                    I = B.moveBy(q.length), q.length > 0 && b.insertChildBefore(S, { type: "text", value: q, sourceSpan: new t(B, I) });
                    continue;
                  }
                  I = B.moveBy(q.length + 4), b.insertChildBefore(S, { type: "interpolation", sourceSpan: new t(B, I), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t(B.moveBy(2), I.moveBy(-2)) }] });
                }
                b.removeChild(S);
              }
          });
        }
        function _(i) {
          i.walk((h) => {
            if (!h.children)
              return;
            if (h.children.length === 0 || h.children.length === 1 && h.children[0].type === "text" && a(h.children[0].value).length === 0) {
              h.hasDanglingSpaces = h.children.length > 0, h.children = [];
              return;
            }
            let E = g(h), b = c(h);
            if (!E)
              for (let S = 0; S < h.children.length; S++) {
                let B = h.children[S];
                if (B.type !== "text")
                  continue;
                let { leadingWhitespace: I, text: M, trailingWhitespace: U } = s(B.value), q = B.prev, ee = B.next;
                M ? (B.value = M, B.sourceSpan = new t(B.sourceSpan.start.moveBy(I.length), B.sourceSpan.end.moveBy(-U.length)), I && (q && (q.hasTrailingSpaces = !0), B.hasLeadingSpaces = !0), U && (B.hasTrailingSpaces = !0, ee && (ee.hasLeadingSpaces = !0))) : (h.removeChild(B), S--, (I || U) && (q && (q.hasTrailingSpaces = !0), ee && (ee.hasLeadingSpaces = !0)));
              }
            h.isWhitespaceSensitive = E, h.isIndentationSensitive = b;
          });
        }
        function J(i) {
          i.walk((h) => {
            h.isSelfClosing = !h.children || h.type === "element" && (h.tagDefinition.isVoid || h.startSourceSpan === h.endSourceSpan);
          });
        }
        function f(i, h) {
          i.walk((E) => {
            E.type === "element" && (E.hasHtmComponentClosingTag = E.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(h.originalText.slice(E.endSourceSpan.start.offset, E.endSourceSpan.end.offset)));
          });
        }
        function T(i, h) {
          i.walk((E) => {
            E.cssDisplay = n(E, h);
          });
        }
        function d(i, h) {
          i.walk((E) => {
            let { children: b } = E;
            if (b) {
              if (b.length === 0) {
                E.isDanglingSpaceSensitive = o(E);
                return;
              }
              for (let S of b)
                S.isLeadingSpaceSensitive = y(S, h), S.isTrailingSpaceSensitive = m(S, h);
              for (let S = 0; S < b.length; S++) {
                let B = b[S];
                B.isLeadingSpaceSensitive = (S === 0 || B.prev.isTrailingSpaceSensitive) && B.isLeadingSpaceSensitive, B.isTrailingSpaceSensitive = (S === b.length - 1 || B.next.isLeadingSpaceSensitive) && B.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function F(i, h) {
          if (h.parser === "vue") {
            let E = i.children.find((S) => p(S, h));
            if (!E)
              return;
            let { lang: b } = E.attrMap;
            (b === "ts" || b === "typescript") && (h.__should_parse_vue_template_with_ts = !0);
          }
        }
        l.exports = C;
      } }), Io = O({ "src/language-html/pragma.js"(u, l) {
        ne();
        function t(s) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(s);
        }
        function a(s) {
          return `<!-- @format -->

` + s.replace(/^\s*\n/, "");
        }
        l.exports = { hasPragma: t, insertPragma: a };
      } }), ds = O({ "src/language-html/loc.js"(u, l) {
        ne();
        function t(s) {
          return s.sourceSpan.start.offset;
        }
        function a(s) {
          return s.sourceSpan.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), hu = O({ "src/language-html/print/tag.js"(u, l) {
        ne();
        var t = lr(), { isNonEmptyArray: a } = Ut(), { builders: { indent: s, join: e, line: r, softline: n, hardline: o }, utils: { replaceTextEndOfLine: c } } = wt(), { locStart: y, locEnd: m } = ds(), { isTextLikeNode: g, getLastDescendant: p, isPreLikeNode: D, hasPrettierIgnore: C, shouldPreserveContent: w, isVueSfcBlock: k } = $n();
        function A(j, De) {
          return [j.isSelfClosing ? "" : N(j, De), x(j, De)];
        }
        function N(j, De) {
          return j.lastChild && i(j.lastChild) ? "" : [P(j, De), J(j, De)];
        }
        function x(j, De) {
          return (j.next ? d(j.next) : F(j.parent)) ? "" : [f(j, De), _(j, De)];
        }
        function P(j, De) {
          return F(j) ? f(j.lastChild, De) : "";
        }
        function _(j, De) {
          return i(j) ? J(j.parent, De) : h(j) ? q(j.next) : "";
        }
        function J(j, De) {
          if (t(!j.isSelfClosing), T(j, De))
            return "";
          switch (j.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (j.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${j.rawName}`;
          }
        }
        function f(j, De) {
          if (T(j, De))
            return "";
          switch (j.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (j.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function T(j, De) {
          return !j.isSelfClosing && !j.endSourceSpan && (C(j) || w(j.parent, De));
        }
        function d(j) {
          return j.prev && j.prev.type !== "docType" && !g(j.prev) && j.isLeadingSpaceSensitive && !j.hasLeadingSpaces;
        }
        function F(j) {
          return j.lastChild && j.lastChild.isTrailingSpaceSensitive && !j.lastChild.hasTrailingSpaces && !g(p(j.lastChild)) && !D(j);
        }
        function i(j) {
          return !j.next && !j.hasTrailingSpaces && j.isTrailingSpaceSensitive && g(p(j));
        }
        function h(j) {
          return j.next && !g(j.next) && g(j) && j.isTrailingSpaceSensitive && !j.hasTrailingSpaces;
        }
        function E(j) {
          let De = j.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return De ? De[1] ? De[1].split(/\s+/) : !0 : !1;
        }
        function b(j) {
          return !j.prev && j.isLeadingSpaceSensitive && !j.hasLeadingSpaces;
        }
        function S(j, De, G) {
          let R = j.getValue();
          if (!a(R.attrs))
            return R.isSelfClosing ? " " : "";
          let pe = R.prev && R.prev.type === "comment" && E(R.prev.value), ve = typeof pe == "boolean" ? () => pe : Array.isArray(pe) ? (Be) => pe.includes(Be.rawName) : () => !1, fe = j.map((Be) => {
            let Ne = Be.getValue();
            return ve(Ne) ? c(De.originalText.slice(y(Ne), m(Ne))) : G();
          }, "attrs"), Pe = R.type === "element" && R.fullName === "script" && R.attrs.length === 1 && R.attrs[0].fullName === "src" && R.children.length === 0, X = De.singleAttributePerLine && R.attrs.length > 1 && !k(R, De) ? o : r, ie = [s([Pe ? " " : r, e(X, fe)])];
          return R.firstChild && b(R.firstChild) || R.isSelfClosing && F(R.parent) || Pe ? ie.push(R.isSelfClosing ? " " : "") : ie.push(De.bracketSameLine ? R.isSelfClosing ? " " : "" : R.isSelfClosing ? r : n), ie;
        }
        function B(j) {
          return j.firstChild && b(j.firstChild) ? "" : ee(j);
        }
        function I(j, De, G) {
          let R = j.getValue();
          return [M(R, De), S(j, De, G), R.isSelfClosing ? "" : B(R)];
        }
        function M(j, De) {
          return j.prev && h(j.prev) ? "" : [U(j, De), q(j)];
        }
        function U(j, De) {
          return b(j) ? ee(j.parent) : d(j) ? f(j.prev, De) : "";
        }
        function q(j) {
          switch (j.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${j.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (j.condition)
                return `<!--[if ${j.condition}]><!--><${j.rawName}`;
            default:
              return `<${j.rawName}`;
          }
        }
        function ee(j) {
          switch (t(!j.isSelfClosing), j.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (j.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        l.exports = { printClosingTag: A, printClosingTagStart: N, printClosingTagStartMarker: J, printClosingTagEndMarker: f, printClosingTagSuffix: _, printClosingTagEnd: x, needsToBorrowLastChildClosingTagEndMarker: F, needsToBorrowParentClosingTagStartMarker: i, needsToBorrowPrevClosingTagEndMarker: d, printOpeningTag: I, printOpeningTagStart: M, printOpeningTagPrefix: U, printOpeningTagStartMarker: q, printOpeningTagEndMarker: ee, needsToBorrowNextOpeningTagStartMarker: h, needsToBorrowParentOpeningTagEndMarker: b };
      } }), jo = O({ "node_modules/parse-srcset/src/parse-srcset.js"(u, l) {
        ne(), function(t, a) {
          typeof define == "function" && define.amd ? define([], a) : typeof l == "object" && l.exports ? l.exports = a() : t.parseSrcset = a();
        }(u, function() {
          return function(t, a) {
            var s = a && a.logger || console;
            function e(J) {
              return J === " " || J === "	" || J === `
` || J === "\f" || J === "\r";
            }
            function r(J) {
              var f, T = J.exec(t.substring(N));
              if (T)
                return f = T[0], N += f.length, f;
            }
            for (var n = t.length, o = /^[ \t\n\r\u000c]+/, c = /^[, \t\n\r\u000c]+/, y = /^[^ \t\n\r\u000c]+/, m = /[,]+$/, g = /^\d+$/, p = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D, C, w, k, A, N = 0, x = []; ; ) {
              if (r(c), N >= n)
                return x;
              D = r(y), C = [], D.slice(-1) === "," ? (D = D.replace(m, ""), _()) : P();
            }
            function P() {
              for (r(o), w = "", k = "in descriptor"; ; ) {
                if (A = t.charAt(N), k === "in descriptor")
                  if (e(A))
                    w && (C.push(w), w = "", k = "after descriptor");
                  else if (A === ",") {
                    N += 1, w && C.push(w), _();
                    return;
                  } else if (A === "(")
                    w = w + A, k = "in parens";
                  else if (A === "") {
                    w && C.push(w), _();
                    return;
                  } else
                    w = w + A;
                else if (k === "in parens")
                  if (A === ")")
                    w = w + A, k = "in descriptor";
                  else if (A === "") {
                    C.push(w), _();
                    return;
                  } else
                    w = w + A;
                else if (k === "after descriptor" && !e(A))
                  if (A === "") {
                    _();
                    return;
                  } else
                    k = "in descriptor", N -= 1;
                N += 1;
              }
            }
            function _() {
              var J = !1, f, T, d, F, i = {}, h, E, b, S, B;
              for (F = 0; F < C.length; F++)
                h = C[F], E = h[h.length - 1], b = h.substring(0, h.length - 1), S = parseInt(b, 10), B = parseFloat(b), g.test(b) && E === "w" ? ((f || T) && (J = !0), S === 0 ? J = !0 : f = S) : p.test(b) && E === "x" ? ((f || T || d) && (J = !0), B < 0 ? J = !0 : T = B) : g.test(b) && E === "h" ? ((d || T) && (J = !0), S === 0 ? J = !0 : d = S) : J = !0;
              J ? s && s.error && s.error("Invalid srcset descriptor found in '" + t + "' at '" + h + "'.") : (i.url = D, f && (i.w = f), T && (i.d = T), d && (i.h = d), x.push(i));
            }
          };
        });
      } }), Lo = O({ "src/language-html/syntax-attribute.js"(u, l) {
        ne();
        var t = jo(), { builders: { ifBreak: a, join: s, line: e } } = wt();
        function r(o) {
          let c = t(o, { logger: { error(P) {
            throw new Error(P);
          } } }), y = c.some((P) => {
            let { w: _ } = P;
            return _;
          }), m = c.some((P) => {
            let { h: _ } = P;
            return _;
          }), g = c.some((P) => {
            let { d: _ } = P;
            return _;
          });
          if (y + m + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let p = y ? "w" : m ? "h" : "d", D = y ? "w" : m ? "h" : "x", C = (P) => Math.max(...P), w = c.map((P) => P.url), k = C(w.map((P) => P.length)), A = c.map((P) => P[p]).map((P) => P ? P.toString() : ""), N = A.map((P) => {
            let _ = P.indexOf(".");
            return _ === -1 ? P.length : _;
          }), x = C(N);
          return s([",", e], w.map((P, _) => {
            let J = [P], f = A[_];
            if (f) {
              let T = k - P.length + 1, d = x - N[_], F = " ".repeat(T + d);
              J.push(a(F, " "), f + D);
            }
            return J;
          }));
        }
        function n(o) {
          return o.trim().split(/\s+/).join(" ");
        }
        l.exports = { printImgSrcset: r, printClassNames: n };
      } }), Oo = O({ "src/language-html/syntax-vue.js"(u, l) {
        ne();
        var { builders: { group: t } } = wt();
        function a(n, o) {
          let { left: c, operator: y, right: m } = s(n);
          return [t(o(`function _(${c}) {}`, { parser: "babel", __isVueForBindingLeft: !0 })), " ", y, " ", o(m, { parser: "__js_expression" }, { stripTrailingHardline: !0 })];
        }
        function s(n) {
          let o = /(.*?)\s+(in|of)\s+(.*)/s, c = /,([^,\]}]*)(?:,([^,\]}]*))?$/, y = /^\(|\)$/g, m = n.match(o);
          if (!m)
            return;
          let g = {};
          if (g.for = m[3].trim(), !g.for)
            return;
          let p = m[1].trim().replace(y, ""), D = p.match(c);
          D ? (g.alias = p.replace(c, ""), g.iterator1 = D[1].trim(), D[2] && (g.iterator2 = D[2].trim())) : g.alias = p;
          let C = [g.alias, g.iterator1, g.iterator2];
          if (!C.some((w, k) => !w && (k === 0 || C.slice(k + 1).some(Boolean))))
            return { left: C.filter(Boolean).join(","), operator: m[2], right: g.for };
        }
        function e(n, o) {
          return o(`function _(${n}) {}`, { parser: "babel", __isVueBindings: !0 });
        }
        function r(n) {
          let o = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, c = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, y = n.trim();
          return o.test(y) || c.test(y);
        }
        l.exports = { isVueEventBindingExpression: r, printVueFor: a, printVueBindings: e };
      } }), Hs = O({ "src/language-html/get-node-content.js"(u, l) {
        ne();
        var { needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: a, needsToBorrowLastChildClosingTagEndMarker: s, printClosingTagEndMarker: e, needsToBorrowParentOpeningTagEndMarker: r, printOpeningTagEndMarker: n } = hu();
        function o(c, y) {
          let m = c.startSourceSpan.end.offset;
          c.firstChild && r(c.firstChild) && (m -= n(c).length);
          let g = c.endSourceSpan.start.offset;
          return c.lastChild && t(c.lastChild) ? g += a(c, y).length : s(c) && (g -= e(c.lastChild, y).length), y.originalText.slice(m, g);
        }
        l.exports = o;
      } }), $o = O({ "src/language-html/embed.js"(u, l) {
        ne();
        var { builders: { breakParent: t, group: a, hardline: s, indent: e, line: r, fill: n, softline: o }, utils: { mapDoc: c, replaceTextEndOfLine: y } } = wt(), m = cs(), { printClosingTag: g, printClosingTagSuffix: p, needsToBorrowPrevClosingTagEndMarker: D, printOpeningTagPrefix: C, printOpeningTag: w } = hu(), { printImgSrcset: k, printClassNames: A } = Lo(), { printVueFor: N, printVueBindings: x, isVueEventBindingExpression: P } = Oo(), { isScriptLikeTag: _, isVueNonHtmlBlock: J, inferScriptParser: f, htmlTrimPreserveIndentation: T, dedentString: d, unescapeQuoteEntities: F, isVueSlotAttribute: i, isVueSfcBindingsAttribute: h, getTextValueParts: E } = $n(), b = Hs();
        function S(I, M, U) {
          let q = (fe) => new RegExp(fe.join("|")).test(I.fullName), ee = () => F(I.value), j = !1, De = (fe, Pe) => {
            let X = fe.type === "NGRoot" ? fe.node.type === "NGMicrosyntax" && fe.node.body.length === 1 && fe.node.body[0].type === "NGMicrosyntaxExpression" ? fe.node.body[0].expression : fe.node : fe.type === "JsExpressionRoot" ? fe.node : fe;
            X && (X.type === "ObjectExpression" || X.type === "ArrayExpression" || Pe.parser === "__vue_expression" && (X.type === "TemplateLiteral" || X.type === "StringLiteral")) && (j = !0);
          }, G = (fe) => a(fe), R = function(fe) {
            let Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return a([e([o, fe]), Pe ? o : ""]);
          }, pe = (fe) => j ? G(fe) : R(fe), ve = (fe, Pe) => M(fe, Object.assign({ __onHtmlBindingRoot: De, __embeddedInHtml: !0 }, Pe));
          if (I.fullName === "srcset" && (I.parent.fullName === "img" || I.parent.fullName === "source"))
            return R(k(ee()));
          if (I.fullName === "class" && !U.parentParser) {
            let fe = ee();
            if (!fe.includes("{{"))
              return A(fe);
          }
          if (I.fullName === "style" && !U.parentParser) {
            let fe = ee();
            if (!fe.includes("{{"))
              return R(ve(fe, { parser: "css", __isHTMLStyleAttribute: !0 }));
          }
          if (U.parser === "vue") {
            if (I.fullName === "v-for")
              return N(ee(), ve);
            if (i(I) || h(I, U))
              return x(ee(), ve);
            let fe = ["^@", "^v-on:"], Pe = ["^:", "^v-bind:"], X = ["^v-"];
            if (q(fe)) {
              let ie = ee(), Be = P(ie) ? "__js_expression" : U.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return pe(ve(ie, { parser: Be }));
            }
            if (q(Pe))
              return pe(ve(ee(), { parser: "__vue_expression" }));
            if (q(X))
              return pe(ve(ee(), { parser: "__js_expression" }));
          }
          if (U.parser === "angular") {
            let fe = (ae, K) => ve(ae, Object.assign(Object.assign({}, K), {}, { trailingComma: "none" })), Pe = ["^\\*"], X = ["^\\(.+\\)$", "^on-"], ie = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], Be = ["^i18n(-.+)?$"];
            if (q(X))
              return pe(fe(ee(), { parser: "__ng_action" }));
            if (q(ie))
              return pe(fe(ee(), { parser: "__ng_binding" }));
            if (q(Be)) {
              let ae = ee().trim();
              return R(n(E(I, ae)), !ae.includes("@@"));
            }
            if (q(Pe))
              return pe(fe(ee(), { parser: "__ng_directive" }));
            let Ne = /{{(.+?)}}/s, it = ee();
            if (Ne.test(it)) {
              let ae = [];
              for (let [K, ge] of it.split(Ne).entries())
                if (K % 2 === 0)
                  ae.push(y(ge));
                else
                  try {
                    ae.push(a(["{{", e([r, fe(ge, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), r, "}}"]));
                  } catch {
                    ae.push("{{", y(ge), "}}");
                  }
              return a(ae);
            }
          }
          return null;
        }
        function B(I, M, U, q) {
          let ee = I.getValue();
          switch (ee.type) {
            case "element": {
              if (_(ee) || ee.type === "interpolation")
                return;
              if (!ee.isSelfClosing && J(ee, q)) {
                let j = f(ee, q);
                if (!j)
                  return;
                let De = b(ee, q), G = /^\s*$/.test(De), R = "";
                return G || (R = U(T(De), { parser: j, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }), G = R === ""), [C(ee, q), a(w(I, q, M)), G ? "" : s, R, G ? "" : s, g(ee, q), p(ee, q)];
              }
              break;
            }
            case "text": {
              if (_(ee.parent)) {
                let j = f(ee.parent, q);
                if (j) {
                  let De = j === "markdown" ? d(ee.value.replace(/^[^\S\n]*\n/, "")) : ee.value, G = { parser: j, __embeddedInHtml: !0 };
                  if (q.parser === "html" && j === "babel") {
                    let R = "script", { attrMap: pe } = ee.parent;
                    pe && (pe.type === "module" || pe.type === "text/babel" && pe["data-type"] === "module") && (R = "module"), G.__babelSourceType = R;
                  }
                  return [t, C(ee, q), U(De, G, { stripTrailingHardline: !0 }), p(ee, q)];
                }
              } else if (ee.parent.type === "interpolation") {
                let j = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                return q.parser === "angular" ? (j.parser = "__ng_interpolation", j.trailingComma = "none") : q.parser === "vue" ? j.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : j.parser = "__js_expression", [e([r, U(ee.value, j, { stripTrailingHardline: !0 })]), ee.parent.next && D(ee.parent.next) ? " " : r];
              }
              break;
            }
            case "attribute": {
              if (!ee.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(ee.valueSpan.start.offset, ee.valueSpan.end.offset)))
                return [ee.rawName, "=", ee.value];
              if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(ee.valueSpan.start.offset, ee.valueSpan.end.offset)))
                return [ee.rawName, "=", ee.value];
              let j = S(ee, (De, G) => U(De, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, G), { stripTrailingHardline: !0 }), q);
              if (j)
                return [ee.rawName, '="', a(c(j, (De) => typeof De == "string" ? De.replace(/"/g, "&quot;") : De)), '"'];
              break;
            }
            case "front-matter":
              return m(ee, U);
          }
        }
        l.exports = B;
      } }), Ys = O({ "src/language-html/print/children.js"(u, l) {
        ne();
        var { builders: { breakParent: t, group: a, ifBreak: s, line: e, softline: r, hardline: n }, utils: { replaceTextEndOfLine: o } } = wt(), { locStart: c, locEnd: y } = ds(), { forceBreakChildren: m, forceNextEmptyLine: g, isTextLikeNode: p, hasPrettierIgnore: D, preferHardlineAsLeadingSpaces: C } = $n(), { printOpeningTagPrefix: w, needsToBorrowNextOpeningTagStartMarker: k, printOpeningTagStartMarker: A, needsToBorrowPrevClosingTagEndMarker: N, printClosingTagEndMarker: x, printClosingTagSuffix: P, needsToBorrowParentClosingTagStartMarker: _ } = hu();
        function J(d, F, i) {
          let h = d.getValue();
          return D(h) ? [w(h, F), ...o(F.originalText.slice(c(h) + (h.prev && k(h.prev) ? A(h).length : 0), y(h) - (h.next && N(h.next) ? x(h, F).length : 0))), P(h, F)] : i();
        }
        function f(d, F) {
          return p(d) && p(F) ? d.isTrailingSpaceSensitive ? d.hasTrailingSpaces ? C(F) ? n : e : "" : C(F) ? n : r : k(d) && (D(F) || F.firstChild || F.isSelfClosing || F.type === "element" && F.attrs.length > 0) || d.type === "element" && d.isSelfClosing && N(F) ? "" : !F.isLeadingSpaceSensitive || C(F) || N(F) && d.lastChild && _(d.lastChild) && d.lastChild.lastChild && _(d.lastChild.lastChild) ? n : F.hasLeadingSpaces ? e : r;
        }
        function T(d, F, i) {
          let h = d.getValue();
          if (m(h))
            return [t, ...d.map((b) => {
              let S = b.getValue(), B = S.prev ? f(S.prev, S) : "";
              return [B ? [B, g(S.prev) ? n : ""] : "", J(b, F, i)];
            }, "children")];
          let E = h.children.map(() => Symbol(""));
          return d.map((b, S) => {
            let B = b.getValue();
            if (p(B)) {
              if (B.prev && p(B.prev)) {
                let De = f(B.prev, B);
                if (De)
                  return g(B.prev) ? [n, n, J(b, F, i)] : [De, J(b, F, i)];
              }
              return J(b, F, i);
            }
            let I = [], M = [], U = [], q = [], ee = B.prev ? f(B.prev, B) : "", j = B.next ? f(B, B.next) : "";
            return ee && (g(B.prev) ? I.push(n, n) : ee === n ? I.push(n) : p(B.prev) ? M.push(ee) : M.push(s("", r, { groupId: E[S - 1] }))), j && (g(B) ? p(B.next) && q.push(n, n) : j === n ? p(B.next) && q.push(n) : U.push(j)), [...I, a([...M, a([J(b, F, i), ...U], { id: E[S] })]), ...q];
          }, "children");
        }
        l.exports = { printChildren: T };
      } }), Ro = O({ "src/language-html/print/element.js"(u, l) {
        ne();
        var { builders: { breakParent: t, dedentToRoot: a, group: s, ifBreak: e, indentIfBreak: r, indent: n, line: o, softline: c }, utils: { replaceTextEndOfLine: y } } = wt(), m = Hs(), { shouldPreserveContent: g, isScriptLikeTag: p, isVueCustomBlock: D, countParents: C, forceBreakContent: w } = $n(), { printOpeningTagPrefix: k, printOpeningTag: A, printClosingTagSuffix: N, printClosingTag: x, needsToBorrowPrevClosingTagEndMarker: P, needsToBorrowLastChildClosingTagEndMarker: _ } = hu(), { printChildren: J } = Ys();
        function f(T, d, F) {
          let i = T.getValue();
          if (g(i, d))
            return [k(i, d), s(A(T, d, F)), ...y(m(i, d)), ...x(i, d), N(i, d)];
          let h = i.children.length === 1 && i.firstChild.type === "interpolation" && i.firstChild.isLeadingSpaceSensitive && !i.firstChild.hasLeadingSpaces && i.lastChild.isTrailingSpaceSensitive && !i.lastChild.hasTrailingSpaces, E = Symbol("element-attr-group-id"), b = (M) => s([s(A(T, d, F), { id: E }), M, x(i, d)]), S = (M) => h ? r(M, { groupId: E }) : (p(i) || D(i, d)) && i.parent.type === "root" && d.parser === "vue" && !d.vueIndentScriptAndStyle ? M : n(M), B = () => h ? e(c, "", { groupId: E }) : i.firstChild.hasLeadingSpaces && i.firstChild.isLeadingSpaceSensitive ? o : i.firstChild.type === "text" && i.isWhitespaceSensitive && i.isIndentationSensitive ? a(c) : c, I = () => (i.next ? P(i.next) : _(i.parent)) ? i.lastChild.hasTrailingSpaces && i.lastChild.isTrailingSpaceSensitive ? " " : "" : h ? e(c, "", { groupId: E }) : i.lastChild.hasTrailingSpaces && i.lastChild.isTrailingSpaceSensitive ? o : (i.lastChild.type === "comment" || i.lastChild.type === "text" && i.isWhitespaceSensitive && i.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${d.tabWidth * C(T, (M) => M.parent && M.parent.type !== "root")}}$`).test(i.lastChild.value) ? "" : c;
          return i.children.length === 0 ? b(i.hasDanglingSpaces && i.isDanglingSpaceSensitive ? o : "") : b([w(i) ? t : "", S([B(), J(T, d, F)]), I()]);
        }
        l.exports = { printElement: f };
      } }), Mo = O({ "src/language-html/printer-html.js"(u, l) {
        ne();
        var { builders: { fill: t, group: a, hardline: s, literalline: e }, utils: { cleanDoc: r, getDocParts: n, isConcat: o, replaceTextEndOfLine: c } } = wt(), y = So(), { countChars: m, unescapeQuoteEntities: g, getTextValueParts: p } = $n(), D = Po(), { insertPragma: C } = Io(), { locStart: w, locEnd: k } = ds(), A = $o(), { printClosingTagSuffix: N, printClosingTagEnd: x, printOpeningTagPrefix: P, printOpeningTagStart: _ } = hu(), { printElement: J } = Ro(), { printChildren: f } = Ys();
        function T(d, F, i) {
          let h = d.getValue();
          switch (h.type) {
            case "front-matter":
              return c(h.raw);
            case "root":
              return F.__onHtmlRoot && F.__onHtmlRoot(h), [a(f(d, F, i)), s];
            case "element":
            case "ieConditionalComment":
              return J(d, F, i);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [_(h), x(h)];
            case "interpolation":
              return [_(h, F), ...d.map(i, "children"), x(h, F)];
            case "text": {
              if (h.parent.type === "interpolation") {
                let b = /\n[^\S\n]*$/, S = b.test(h.value), B = S ? h.value.replace(b, "") : h.value;
                return [...c(B), S ? s : ""];
              }
              let E = r([P(h, F), ...p(h), N(h, F)]);
              return o(E) || E.type === "fill" ? t(n(E)) : E;
            }
            case "docType":
              return [a([_(h, F), " ", h.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), x(h, F)];
            case "comment":
              return [P(h, F), ...c(F.originalText.slice(w(h), k(h)), e), N(h, F)];
            case "attribute": {
              if (h.value === null)
                return h.rawName;
              let E = g(h.value), b = m(E, "'"), S = m(E, '"'), B = b < S ? "'" : '"';
              return [h.rawName, "=", B, ...c(B === '"' ? E.replace(/"/g, "&quot;") : E.replace(/'/g, "&apos;")), B];
            }
            default:
              throw new Error(`Unexpected node type ${h.type}`);
          }
        }
        l.exports = { preprocess: D, print: T, insertPragma: C, massageAstNode: y, embed: A };
      } }), qo = O({ "src/language-html/options.js"(u, l) {
        ne();
        var t = On(), a = "HTML";
        l.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: a, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: a, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } };
      } }), Vo = O({ "src/language-html/parsers.js"() {
        ne();
      } }), fs = O({ "node_modules/linguist-languages/data/HTML.json"(u, l) {
        l.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), Go = O({ "node_modules/linguist-languages/data/Vue.json"(u, l) {
        l.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), Uo = O({ "src/language-html/index.js"(u, l) {
        ne();
        var t = vr(), a = Mo(), s = qo(), e = Vo(), r = [t(fs(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t(fs(), (o) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...o.extensions, ".mjml"] })), t(fs(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t(Go(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], n = { html: a };
        l.exports = { languages: r, printers: n, options: s, parsers: e };
      } }), Jo = O({ "src/language-yaml/pragma.js"(u, l) {
        ne();
        function t(e) {
          return /^\s*@(?:prettier|format)\s*$/.test(e);
        }
        function a(e) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e);
        }
        function s(e) {
          return `# @format

${e}`;
        }
        l.exports = { isPragma: t, hasPragma: a, insertPragma: s };
      } }), Xo = O({ "src/language-yaml/loc.js"(u, l) {
        ne();
        function t(s) {
          return s.position.start.offset;
        }
        function a(s) {
          return s.position.end.offset;
        }
        l.exports = { locStart: t, locEnd: a };
      } }), Wo = O({ "src/language-yaml/embed.js"(u, l) {
        ne();
        function t(a, s, e, r) {
          if (a.getValue().type === "root" && r.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(r.filepath))
            return e(r.originalText, Object.assign(Object.assign({}, r), {}, { parser: "json" }));
        }
        l.exports = t;
      } }), Rn = O({ "src/language-yaml/utils.js"(u, l) {
        ne();
        var { getLast: t, isNonEmptyArray: a } = Ut();
        function s(f, T) {
          let d = 0, F = f.stack.length - 1;
          for (let i = 0; i < F; i++) {
            let h = f.stack[i];
            e(h) && T(h) && d++;
          }
          return d;
        }
        function e(f, T) {
          return f && typeof f.type == "string" && (!T || T.includes(f.type));
        }
        function r(f, T, d) {
          return T("children" in f ? Object.assign(Object.assign({}, f), {}, { children: f.children.map((F) => r(F, T, f)) }) : f, d);
        }
        function n(f, T, d) {
          Object.defineProperty(f, T, { get: d, enumerable: !1 });
        }
        function o(f, T) {
          let d = 0, F = T.length;
          for (let i = f.position.end.offset - 1; i < F; i++) {
            let h = T[i];
            if (h === `
` && d++, d === 1 && /\S/.test(h))
              return !1;
            if (d === 2)
              return !0;
          }
          return !1;
        }
        function c(f) {
          switch (f.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return !1;
          }
          let T = f.stack.length;
          for (let d = 1; d < T; d++) {
            let F = f.stack[d], i = f.stack[d - 1];
            if (Array.isArray(i) && typeof F == "number" && F !== i.length - 1)
              return !1;
          }
          return !0;
        }
        function y(f) {
          return a(f.children) ? y(t(f.children)) : f;
        }
        function m(f) {
          return f.value.trim() === "prettier-ignore";
        }
        function g(f) {
          let T = f.getValue();
          if (T.type === "documentBody") {
            let d = f.getParentNode();
            return N(d.head) && m(t(d.head.endComments));
          }
          return C(T) && m(t(T.leadingComments));
        }
        function p(f) {
          return !a(f.children) && !D(f);
        }
        function D(f) {
          return C(f) || w(f) || k(f) || A(f) || N(f);
        }
        function C(f) {
          return a(f?.leadingComments);
        }
        function w(f) {
          return a(f?.middleComments);
        }
        function k(f) {
          return f?.indicatorComment;
        }
        function A(f) {
          return f?.trailingComment;
        }
        function N(f) {
          return a(f?.endComments);
        }
        function x(f) {
          let T = [], d;
          for (let F of f.split(/( +)/))
            F !== " " ? d === " " ? T.push(F) : T.push((T.pop() || "") + F) : d === void 0 && T.unshift(""), d = F;
          return d === " " && T.push((T.pop() || "") + " "), T[0] === "" && (T.shift(), T.unshift(" " + (T.shift() || ""))), T;
        }
        function P(f, T, d) {
          let F = T.split(`
`).map((i, h, E) => h === 0 && h === E.length - 1 ? i : h !== 0 && h !== E.length - 1 ? i.trim() : h === 0 ? i.trimEnd() : i.trimStart());
          return d.proseWrap === "preserve" ? F.map((i) => i.length === 0 ? [] : [i]) : F.map((i) => i.length === 0 ? [] : x(i)).reduce((i, h, E) => E !== 0 && F[E - 1].length > 0 && h.length > 0 && !(f === "quoteDouble" && t(t(i)).endsWith("\\")) ? [...i.slice(0, -1), [...t(i), ...h]] : [...i, h], []).map((i) => d.proseWrap === "never" ? [i.join(" ")] : i);
        }
        function _(f, T) {
          let { parentIndent: d, isLastDescendant: F, options: i } = T, h = f.position.start.line === f.position.end.line ? "" : i.originalText.slice(f.position.start.offset, f.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], E;
          if (f.indent === null) {
            let B = h.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            E = B ? B.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            E = f.indent - 1 + d;
          let b = h.split(`
`).map((B) => B.slice(E));
          if (i.proseWrap === "preserve" || f.type === "blockLiteral")
            return S(b.map((B) => B.length === 0 ? [] : [B]));
          return S(b.map((B) => B.length === 0 ? [] : x(B)).reduce((B, I, M) => M !== 0 && b[M - 1].length > 0 && I.length > 0 && !/^\s/.test(I[0]) && !/^\s|\s$/.test(t(B)) ? [...B.slice(0, -1), [...t(B), ...I]] : [...B, I], []).map((B) => B.reduce((I, M) => I.length > 0 && /\s$/.test(t(I)) ? [...I.slice(0, -1), t(I) + " " + M] : [...I, M], [])).map((B) => i.proseWrap === "never" ? [B.join(" ")] : B));
          function S(B) {
            if (f.chomping === "keep")
              return t(B).length === 0 ? B.slice(0, -1) : B;
            let I = 0;
            for (let M = B.length - 1; M >= 0 && B[M].length === 0; M--)
              I++;
            return I === 0 ? B : I >= 2 && !F ? B.slice(0, -(I - 1)) : B.slice(0, -I);
          }
        }
        function J(f) {
          if (!f)
            return !0;
          switch (f.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = { getLast: t, getAncestorCount: s, isNode: e, isEmptyNode: p, isInlineNode: J, mapNode: r, defineShortcut: n, isNextLineEmpty: o, isLastDescendantNode: c, getBlockValueLineContents: _, getFlowScalarLineContents: P, getLastDescendantNode: y, hasPrettierIgnore: g, hasLeadingComments: C, hasMiddleComments: w, hasIndicatorComment: k, hasTrailingComment: A, hasEndComments: N };
      } }), zo = O({ "src/language-yaml/print-preprocess.js"(u, l) {
        ne();
        var { defineShortcut: t, mapNode: a } = Rn();
        function s(r) {
          return a(r, e);
        }
        function e(r) {
          switch (r.type) {
            case "document":
              t(r, "head", () => r.children[0]), t(r, "body", () => r.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(r, "content", () => r.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(r, "key", () => r.children[0]), t(r, "value", () => r.children[1]);
              break;
          }
          return r;
        }
        l.exports = s;
      } }), ni = O({ "src/language-yaml/print/misc.js"(u, l) {
        ne();
        var { builders: { softline: t, align: a } } = wt(), { hasEndComments: s, isNextLineEmpty: e, isNode: r } = Rn(), n = /* @__PURE__ */ new WeakMap();
        function o(m, g) {
          let p = m.getValue(), D = m.stack[0], C;
          return n.has(D) ? C = n.get(D) : (C = /* @__PURE__ */ new Set(), n.set(D, C)), !C.has(p.position.end.line) && (C.add(p.position.end.line), e(p, g) && !c(m.getParentNode())) ? t : "";
        }
        function c(m) {
          return s(m) && !r(m, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function y(m, g) {
          return a(" ".repeat(m), g);
        }
        l.exports = { alignWithSpaces: y, shouldPrintEndComments: c, printNextEmptyLine: o };
      } }), Ho = O({ "src/language-yaml/print/flow-mapping-sequence.js"(u, l) {
        ne();
        var { builders: { ifBreak: t, line: a, softline: s, hardline: e, join: r } } = wt(), { isEmptyNode: n, getLast: o, hasEndComments: c } = Rn(), { printNextEmptyLine: y, alignWithSpaces: m } = ni();
        function g(D, C, w) {
          let k = D.getValue(), A = k.type === "flowMapping", N = A ? "{" : "[", x = A ? "}" : "]", P = s;
          A && k.children.length > 0 && w.bracketSpacing && (P = a);
          let _ = o(k.children), J = _ && _.type === "flowMappingItem" && n(_.key) && n(_.value);
          return [N, m(w.tabWidth, [P, p(D, C, w), w.trailingComma === "none" ? "" : t(","), c(k) ? [e, r(e, D.map(C, "endComments"))] : ""]), J ? "" : P, x];
        }
        function p(D, C, w) {
          let k = D.getValue();
          return D.map((A, N) => [C(), N === k.children.length - 1 ? "" : [",", a, k.children[N].position.start.line !== k.children[N + 1].position.start.line ? y(A, w.originalText) : ""]], "children");
        }
        l.exports = { printFlowMapping: g, printFlowSequence: g };
      } }), Yo = O({ "src/language-yaml/print/mapping-item.js"(u, l) {
        ne();
        var { builders: { conditionalGroup: t, group: a, hardline: s, ifBreak: e, join: r, line: n } } = wt(), { hasLeadingComments: o, hasMiddleComments: c, hasTrailingComment: y, hasEndComments: m, isNode: g, isEmptyNode: p, isInlineNode: D } = Rn(), { alignWithSpaces: C } = ni();
        function w(x, P, _, J, f) {
          let { key: T, value: d } = x, F = p(T), i = p(d);
          if (F && i)
            return ": ";
          let h = J("key"), E = A(x) ? " " : "";
          if (i)
            return x.type === "flowMappingItem" && P.type === "flowMapping" ? h : x.type === "mappingItem" && k(T.content, f) && !y(T.content) && (!P.tag || P.tag.value !== "tag:yaml.org,2002:set") ? [h, E, ":"] : ["? ", C(2, h)];
          let b = J("value");
          if (F)
            return [": ", C(2, b)];
          if (o(d) || !D(T.content))
            return ["? ", C(2, h), s, r("", _.map(J, "value", "leadingComments").map((q) => [q, s])), ": ", C(2, b)];
          if (N(T.content) && !o(T.content) && !c(T.content) && !y(T.content) && !m(T) && !o(d.content) && !c(d.content) && !m(d) && k(d.content, f))
            return [h, E, ": ", b];
          let S = Symbol("mappingKey"), B = a([e("? "), a(C(2, h), { id: S })]), I = [s, ": ", C(2, b)], M = [E, ":"];
          o(d.content) || m(d) && d.content && !g(d.content, ["mapping", "sequence"]) || P.type === "mapping" && y(T.content) && D(d.content) || g(d.content, ["mapping", "sequence"]) && d.content.tag === null && d.content.anchor === null ? M.push(s) : d.content && M.push(n), M.push(b);
          let U = C(f.tabWidth, M);
          return k(T.content, f) && !o(T.content) && !c(T.content) && !m(T) ? t([[h, U]]) : t([[B, e(I, U, { groupId: S })]]);
        }
        function k(x, P) {
          if (!x)
            return !0;
          switch (x.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return !0;
            default:
              return !1;
          }
          if (P.proseWrap === "preserve")
            return x.position.start.line === x.position.end.line;
          if (/\\$/m.test(P.originalText.slice(x.position.start.offset, x.position.end.offset)))
            return !1;
          switch (P.proseWrap) {
            case "never":
              return !x.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(x.value);
            default:
              return !1;
          }
        }
        function A(x) {
          return x.key.content && x.key.content.type === "alias";
        }
        function N(x) {
          if (!x)
            return !0;
          switch (x.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return x.position.start.line === x.position.end.line;
            case "alias":
              return !0;
            default:
              return !1;
          }
        }
        l.exports = w;
      } }), Ko = O({ "src/language-yaml/print/block.js"(u, l) {
        ne();
        var { builders: { dedent: t, dedentToRoot: a, fill: s, hardline: e, join: r, line: n, literalline: o, markAsRoot: c }, utils: { getDocParts: y } } = wt(), { getAncestorCount: m, getBlockValueLineContents: g, hasIndicatorComment: p, isLastDescendantNode: D, isNode: C } = Rn(), { alignWithSpaces: w } = ni();
        function k(A, N, x) {
          let P = A.getValue(), _ = m(A, (F) => C(F, ["sequence", "mapping"])), J = D(A), f = [P.type === "blockFolded" ? ">" : "|"];
          P.indent !== null && f.push(P.indent.toString()), P.chomping !== "clip" && f.push(P.chomping === "keep" ? "+" : "-"), p(P) && f.push(" ", N("indicatorComment"));
          let T = g(P, { parentIndent: _, isLastDescendant: J, options: x }), d = [];
          for (let [F, i] of T.entries())
            F === 0 && d.push(e), d.push(s(y(r(n, i)))), F !== T.length - 1 ? d.push(i.length === 0 ? e : c(o)) : P.chomping === "keep" && J && d.push(a(i.length === 0 ? e : o));
          return P.indent === null ? f.push(t(w(x.tabWidth, d))) : f.push(a(w(P.indent - 1 + _, d))), f;
        }
        l.exports = k;
      } }), Qo = O({ "src/language-yaml/printer-yaml.js"(u, l) {
        ne();
        var { builders: { breakParent: t, fill: a, group: s, hardline: e, join: r, line: n, lineSuffix: o, literalline: c }, utils: { getDocParts: y, replaceTextEndOfLine: m } } = wt(), { isPreviousLineEmpty: g } = Ut(), { insertPragma: p, isPragma: D } = Jo(), { locStart: C } = Xo(), w = Wo(), { getFlowScalarLineContents: k, getLastDescendantNode: A, hasLeadingComments: N, hasMiddleComments: x, hasTrailingComment: P, hasEndComments: _, hasPrettierIgnore: J, isLastDescendantNode: f, isNode: T, isInlineNode: d } = Rn(), F = zo(), { alignWithSpaces: i, printNextEmptyLine: h, shouldPrintEndComments: E } = ni(), { printFlowMapping: b, printFlowSequence: S } = Ho(), B = Yo(), I = Ko();
        function M(R, pe, ve) {
          let fe = R.getValue(), Pe = [];
          fe.type !== "mappingValue" && N(fe) && Pe.push([r(e, R.map(ve, "leadingComments")), e]);
          let { tag: X, anchor: ie } = fe;
          X && Pe.push(ve("tag")), X && ie && Pe.push(" "), ie && Pe.push(ve("anchor"));
          let Be = "";
          T(fe, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !f(R) && (Be = h(R, pe.originalText)), (X || ie) && (T(fe, ["sequence", "mapping"]) && !x(fe) ? Pe.push(e) : Pe.push(" ")), x(fe) && Pe.push([fe.middleComments.length === 1 ? "" : e, r(e, R.map(ve, "middleComments")), e]);
          let Ne = R.getParentNode();
          return J(R) ? Pe.push(m(pe.originalText.slice(fe.position.start.offset, fe.position.end.offset).trimEnd(), c)) : Pe.push(s(U(fe, Ne, R, pe, ve))), P(fe) && !T(fe, ["document", "documentHead"]) && Pe.push(o([fe.type === "mappingValue" && !fe.content ? "" : " ", Ne.type === "mappingKey" && R.getParentNode(2).type === "mapping" && d(fe) ? "" : t, ve("trailingComment")])), E(fe) && Pe.push(i(fe.type === "sequenceItem" ? 2 : 0, [e, r(e, R.map((it) => [g(pe.originalText, it.getValue(), C) ? e : "", ve()], "endComments"))])), Pe.push(Be), Pe;
        }
        function U(R, pe, ve, fe, Pe) {
          switch (R.type) {
            case "root": {
              let { children: X } = R, ie = [];
              ve.each((Ne, it) => {
                let ae = X[it], K = X[it + 1];
                it !== 0 && ie.push(e), ie.push(Pe()), ee(ae, K) ? (ie.push(e, "..."), P(ae) && ie.push(" ", Pe("trailingComment"))) : K && !P(K.head) && ie.push(e, "---");
              }, "children");
              let Be = A(R);
              return (!T(Be, ["blockLiteral", "blockFolded"]) || Be.chomping !== "keep") && ie.push(e), ie;
            }
            case "document": {
              let X = pe.children[ve.getName() + 1], ie = [];
              return j(R, X, pe, fe) === "head" && ((R.head.children.length > 0 || R.head.endComments.length > 0) && ie.push(Pe("head")), P(R.head) ? ie.push(["---", " ", Pe(["head", "trailingComment"])]) : ie.push("---")), q(R) && ie.push(Pe("body")), r(e, ie);
            }
            case "documentHead":
              return r(e, [...ve.map(Pe, "children"), ...ve.map(Pe, "endComments")]);
            case "documentBody": {
              let { children: X, endComments: ie } = R, Be = "";
              if (X.length > 0 && ie.length > 0) {
                let Ne = A(R);
                T(Ne, ["blockFolded", "blockLiteral"]) ? Ne.chomping !== "keep" && (Be = [e, e]) : Be = e;
              }
              return [r(e, ve.map(Pe, "children")), Be, r(e, ve.map(Pe, "endComments"))];
            }
            case "directive":
              return ["%", r(" ", [R.name, ...R.parameters])];
            case "comment":
              return ["#", R.value];
            case "alias":
              return ["*", R.value];
            case "tag":
              return fe.originalText.slice(R.position.start.offset, R.position.end.offset);
            case "anchor":
              return ["&", R.value];
            case "plain":
              return De(R.type, fe.originalText.slice(R.position.start.offset, R.position.end.offset), fe);
            case "quoteDouble":
            case "quoteSingle": {
              let X = "'", ie = '"', Be = fe.originalText.slice(R.position.start.offset + 1, R.position.end.offset - 1);
              if (R.type === "quoteSingle" && Be.includes("\\") || R.type === "quoteDouble" && /\\[^"]/.test(Be)) {
                let it = R.type === "quoteDouble" ? ie : X;
                return [it, De(R.type, Be, fe), it];
              }
              if (Be.includes(ie))
                return [X, De(R.type, R.type === "quoteDouble" ? Be.replace(/\\"/g, ie).replace(/'/g, X.repeat(2)) : Be, fe), X];
              if (Be.includes(X))
                return [ie, De(R.type, R.type === "quoteSingle" ? Be.replace(/''/g, X) : Be, fe), ie];
              let Ne = fe.singleQuote ? X : ie;
              return [Ne, De(R.type, Be, fe), Ne];
            }
            case "blockFolded":
            case "blockLiteral":
              return I(ve, Pe, fe);
            case "mapping":
            case "sequence":
              return r(e, ve.map(Pe, "children"));
            case "sequenceItem":
              return ["- ", i(2, R.content ? Pe("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return R.content ? Pe("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return B(R, pe, ve, Pe, fe);
            case "flowMapping":
              return b(ve, Pe, fe);
            case "flowSequence":
              return S(ve, Pe, fe);
            case "flowSequenceItem":
              return Pe("content");
            default:
              throw new Error(`Unexpected node type ${R.type}`);
          }
        }
        function q(R) {
          return R.body.children.length > 0 || _(R.body);
        }
        function ee(R, pe) {
          return P(R) || pe && (pe.head.children.length > 0 || _(pe.head));
        }
        function j(R, pe, ve, fe) {
          return ve.children[0] === R && /---(?:\s|$)/.test(fe.originalText.slice(C(R), C(R) + 4)) || R.head.children.length > 0 || _(R.head) || P(R.head) ? "head" : ee(R, pe) ? !1 : pe ? "root" : !1;
        }
        function De(R, pe, ve) {
          let fe = k(R, pe, ve);
          return r(e, fe.map((Pe) => a(y(r(n, Pe)))));
        }
        function G(R, pe) {
          if (T(pe))
            switch (delete pe.position, pe.type) {
              case "comment":
                if (D(pe.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                pe.type = "quote";
                break;
            }
        }
        l.exports = { preprocess: F, embed: w, print: M, massageAstNode: G, insertPragma: p };
      } }), Zo = O({ "src/language-yaml/options.js"(u, l) {
        ne();
        var t = On();
        l.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
      } }), el = O({ "src/language-yaml/parsers.js"() {
        ne();
      } }), tl = O({ "node_modules/linguist-languages/data/YAML.json"(u, l) {
        l.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), rl = O({ "src/language-yaml/index.js"(u, l) {
        ne();
        var t = vr(), a = Qo(), s = Zo(), e = el(), r = [t(tl(), (n) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...n.filenames.filter((o) => o !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        l.exports = { languages: r, printers: { yaml: a }, options: s, parsers: e };
      } }), nl = O({ "src/languages.js"(u, l) {
        ne(), l.exports = [La(), eo(), oo(), ho(), bo(), Uo(), rl()];
      } });
      ne();
      var { version: ul } = yr(), Mn = Yu(), { getSupportInfo: il } = nu(), sl = Ku(), al = nl(), ol = wt();
      function bn(u) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++)
            a[s] = arguments[s];
          let e = a[l] || {}, r = e.plugins || [];
          return a[l] = Object.assign(Object.assign({}, e), {}, { plugins: [...al, ...Array.isArray(r) ? r : Object.values(r)] }), u(...a);
        };
      }
      var ms = bn(Mn.formatWithCursor);
      V.exports = { formatWithCursor: ms, format(u, l) {
        return ms(u, l).formatted;
      }, check(u, l) {
        let { formatted: t } = ms(u, l);
        return t === u;
      }, doc: ol, getSupportInfo: bn(il, 0), version: ul, util: sl, __debug: { parse: bn(Mn.parse), formatAST: bn(Mn.formatAST), formatDoc: bn(Mn.formatDoc), printToDoc: bn(Mn.printToDoc), printDocToString: bn(Mn.printDocToString) } };
    });
    return Le();
  });
} }), dl = ea(cl()), fl = ea(Dl());
function ml(Ur) {
  for (var Jr = [], Fe = 1; Fe < arguments.length; Fe++)
    Jr[Fe - 1] = arguments[Fe];
  var Yt = Array.from(typeof Ur == "string" ? [Ur] : Ur);
  Yt[Yt.length - 1] = Yt[Yt.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var hr = Yt.reduce(function(gr, Dn) {
    var jr = Dn.match(/\n([\t ]+|(?!\s).)/g);
    return jr ? gr.concat(jr.map(function(Dr) {
      var Tr, Zr;
      return (Zr = (Tr = Dr.match(/[\t ]/g)) === null || Tr === void 0 ? void 0 : Tr.length) !== null && Zr !== void 0 ? Zr : 0;
    })) : gr;
  }, []);
  if (hr.length) {
    var br = new RegExp(`
[	 ]{` + Math.min.apply(Math, hr) + "}", "g");
    Yt = Yt.map(function(gr) {
      return gr.replace(br, `
`);
    });
  }
  Yt[0] = Yt[0].replace(/^\r?\n/, "");
  var Hr = Yt[0];
  return Jr.forEach(function(gr, Dn) {
    var jr = Hr.match(/(?:^|\n)( *)$/), Dr = jr ? jr[1] : "", Tr = gr;
    typeof gr == "string" && gr.includes(`
`) && (Tr = String(gr).split(`
`).map(function(Zr, nn) {
      return nn === 0 ? Zr : "" + Dr + Zr;
    }).join(`
`)), Hr += Tr + Yt[Dn + 1];
  }), Hr;
}
var Fl = pl(2)((Ur, Jr) => Ur === !1 ? Jr : Ur === "dedent" || Ur === !0 ? ml(Jr) : fl.default.format(Jr, { parser: Ur, plugins: [dl.default], htmlWhitespaceSensitivity: "ignore" }).trim());
export {
  Fl as formatter
};
//# sourceMappingURL=formatter-ZNWCFYAW-81c86b7e.mjs.map
