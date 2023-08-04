var Cu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function An(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function oe(u, e) {
  for (var D = -1, A = u == null ? 0 : u.length, s = Array(A); ++D < A; )
    s[D] = e(u[D], D, u);
  return s;
}
var Ee = oe;
function ce() {
  this.__data__ = [], this.size = 0;
}
var Be = ce;
function pe(u, e) {
  return u === e || u !== u && e !== e;
}
var Xu = pe, le = Xu;
function fe(u, e) {
  for (var D = u.length; D--; )
    if (le(u[D][0], e))
      return D;
  return -1;
}
var Bu = fe, he = Bu, de = Array.prototype, ye = de.splice;
function ge(u) {
  var e = this.__data__, D = he(e, u);
  if (D < 0)
    return !1;
  var A = e.length - 1;
  return D == A ? e.pop() : ye.call(e, D, 1), --this.size, !0;
}
var ve = ge, xe = Bu;
function me(u) {
  var e = this.__data__, D = xe(e, u);
  return D < 0 ? void 0 : e[D][1];
}
var _e = me, Te = Bu;
function be(u) {
  return Te(this.__data__, u) > -1;
}
var Se = be, Ne = Bu;
function we(u, e) {
  var D = this.__data__, A = Ne(D, u);
  return A < 0 ? (++this.size, D.push([u, e])) : D[A][1] = e, this;
}
var Oe = we, $e = Be, Re = ve, Ie = _e, Pe = Se, Le = Oe;
function J(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
J.prototype.clear = $e;
J.prototype.delete = Re;
J.prototype.get = Ie;
J.prototype.has = Pe;
J.prototype.set = Le;
var pu = J, ke = pu;
function Me() {
  this.__data__ = new ke(), this.size = 0;
}
var je = Me;
function Ue(u) {
  var e = this.__data__, D = e.delete(u);
  return this.size = e.size, D;
}
var Ge = Ue;
function ze(u) {
  return this.__data__.get(u);
}
var He = ze;
function We(u) {
  return this.__data__.has(u);
}
var Ke = We, qe = typeof Cu == "object" && Cu && Cu.Object === Object && Cu, ue = qe, Ve = ue, Qe = typeof self == "object" && self && self.Object === Object && self, Je = Ve || Qe || Function("return this")(), z = Je, Ye = z, Ze = Ye.Symbol, lu = Ze, $u = lu, ee = Object.prototype, Xe = ee.hasOwnProperty, u0 = ee.toString, tu = $u ? $u.toStringTag : void 0;
function e0(u) {
  var e = Xe.call(u, tu), D = u[tu];
  try {
    u[tu] = void 0;
    var A = !0;
  } catch {
  }
  var s = u0.call(u);
  return A && (e ? u[tu] = D : delete u[tu]), s;
}
var r0 = e0, t0 = Object.prototype, a0 = t0.toString;
function D0(u) {
  return a0.call(u);
}
var n0 = D0, Ru = lu, i0 = r0, s0 = n0, A0 = "[object Null]", F0 = "[object Undefined]", Iu = Ru ? Ru.toStringTag : void 0;
function C0(u) {
  return u == null ? u === void 0 ? F0 : A0 : Iu && Iu in Object(u) ? i0(u) : s0(u);
}
var nu = C0;
function o0(u) {
  var e = typeof u;
  return u != null && (e == "object" || e == "function");
}
var re = o0, E0 = nu, c0 = re, B0 = "[object AsyncFunction]", p0 = "[object Function]", l0 = "[object GeneratorFunction]", f0 = "[object Proxy]";
function h0(u) {
  if (!c0(u))
    return !1;
  var e = E0(u);
  return e == p0 || e == l0 || e == B0 || e == f0;
}
var d0 = h0, y0 = z, g0 = y0["__core-js_shared__"], v0 = g0, vu = v0, Pu = function() {
  var u = /[^.]+$/.exec(vu && vu.keys && vu.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function x0(u) {
  return !!Pu && Pu in u;
}
var m0 = x0, _0 = Function.prototype, T0 = _0.toString;
function b0(u) {
  if (u != null) {
    try {
      return T0.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var te = b0, S0 = d0, N0 = m0, w0 = re, O0 = te, $0 = /[\\^$.*+?()[\]{}|]/g, R0 = /^\[object .+?Constructor\]$/, I0 = Function.prototype, P0 = Object.prototype, L0 = I0.toString, k0 = P0.hasOwnProperty, M0 = RegExp(
  "^" + L0.call(k0).replace($0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function j0(u) {
  if (!w0(u) || N0(u))
    return !1;
  var e = S0(u) ? M0 : R0;
  return e.test(O0(u));
}
var U0 = j0;
function G0(u, e) {
  return u?.[e];
}
var z0 = G0, H0 = U0, W0 = z0;
function K0(u, e) {
  var D = W0(u, e);
  return H0(D) ? D : void 0;
}
var V = K0, q0 = V, V0 = z, Q0 = q0(V0, "Map"), Nu = Q0, J0 = V, Y0 = J0(Object, "create"), fu = Y0, Lu = fu;
function Z0() {
  this.__data__ = Lu ? Lu(null) : {}, this.size = 0;
}
var X0 = Z0;
function ur(u) {
  var e = this.has(u) && delete this.__data__[u];
  return this.size -= e ? 1 : 0, e;
}
var er = ur, rr = fu, tr = "__lodash_hash_undefined__", ar = Object.prototype, Dr = ar.hasOwnProperty;
function nr(u) {
  var e = this.__data__;
  if (rr) {
    var D = e[u];
    return D === tr ? void 0 : D;
  }
  return Dr.call(e, u) ? e[u] : void 0;
}
var ir = nr, sr = fu, Ar = Object.prototype, Fr = Ar.hasOwnProperty;
function Cr(u) {
  var e = this.__data__;
  return sr ? e[u] !== void 0 : Fr.call(e, u);
}
var or = Cr, Er = fu, cr = "__lodash_hash_undefined__";
function Br(u, e) {
  var D = this.__data__;
  return this.size += this.has(u) ? 0 : 1, D[u] = Er && e === void 0 ? cr : e, this;
}
var pr = Br, lr = X0, fr = er, hr = ir, dr = or, yr = pr;
function Y(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
Y.prototype.clear = lr;
Y.prototype.delete = fr;
Y.prototype.get = hr;
Y.prototype.has = dr;
Y.prototype.set = yr;
var gr = Y, ku = gr, vr = pu, xr = Nu;
function mr() {
  this.size = 0, this.__data__ = {
    hash: new ku(),
    map: new (xr || vr)(),
    string: new ku()
  };
}
var _r = mr;
function Tr(u) {
  var e = typeof u;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? u !== "__proto__" : u === null;
}
var br = Tr, Sr = br;
function Nr(u, e) {
  var D = u.__data__;
  return Sr(e) ? D[typeof e == "string" ? "string" : "hash"] : D.map;
}
var hu = Nr, wr = hu;
function Or(u) {
  var e = wr(this, u).delete(u);
  return this.size -= e ? 1 : 0, e;
}
var $r = Or, Rr = hu;
function Ir(u) {
  return Rr(this, u).get(u);
}
var Pr = Ir, Lr = hu;
function kr(u) {
  return Lr(this, u).has(u);
}
var Mr = kr, jr = hu;
function Ur(u, e) {
  var D = jr(this, u), A = D.size;
  return D.set(u, e), this.size += D.size == A ? 0 : 1, this;
}
var Gr = Ur, zr = _r, Hr = $r, Wr = Pr, Kr = Mr, qr = Gr;
function Z(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var A = u[e];
    this.set(A[0], A[1]);
  }
}
Z.prototype.clear = zr;
Z.prototype.delete = Hr;
Z.prototype.get = Wr;
Z.prototype.has = Kr;
Z.prototype.set = qr;
var wu = Z, Vr = pu, Qr = Nu, Jr = wu, Yr = 200;
function Zr(u, e) {
  var D = this.__data__;
  if (D instanceof Vr) {
    var A = D.__data__;
    if (!Qr || A.length < Yr - 1)
      return A.push([u, e]), this.size = ++D.size, this;
    D = this.__data__ = new Jr(A);
  }
  return D.set(u, e), this.size = D.size, this;
}
var Xr = Zr, ut = pu, et = je, rt = Ge, tt = He, at = Ke, Dt = Xr;
function X(u) {
  var e = this.__data__ = new ut(u);
  this.size = e.size;
}
X.prototype.clear = et;
X.prototype.delete = rt;
X.prototype.get = tt;
X.prototype.has = at;
X.prototype.set = Dt;
var Fn = X, nt = "__lodash_hash_undefined__";
function it(u) {
  return this.__data__.set(u, nt), this;
}
var st = it;
function At(u) {
  return this.__data__.has(u);
}
var Ft = At, Ct = wu, ot = st, Et = Ft;
function ou(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.__data__ = new Ct(); ++e < D; )
    this.add(u[e]);
}
ou.prototype.add = ou.prototype.push = ot;
ou.prototype.has = Et;
var ct = ou;
function Bt(u, e) {
  for (var D = -1, A = u == null ? 0 : u.length; ++D < A; )
    if (e(u[D], D, u))
      return !0;
  return !1;
}
var pt = Bt;
function lt(u, e) {
  return u.has(e);
}
var ft = lt, ht = ct, dt = pt, yt = ft, gt = 1, vt = 2;
function xt(u, e, D, A, s, F) {
  var t = D & gt, l = u.length, g = e.length;
  if (l != g && !(t && g > l))
    return !1;
  var x = F.get(u), R = F.get(e);
  if (x && R)
    return x == e && R == u;
  var S = -1, o = !0, v = D & vt ? new ht() : void 0;
  for (F.set(u, e), F.set(e, u); ++S < l; ) {
    var y = u[S], E = e[S];
    if (A)
      var p = t ? A(E, y, S, e, u, F) : A(y, E, S, u, e, F);
    if (p !== void 0) {
      if (p)
        continue;
      o = !1;
      break;
    }
    if (v) {
      if (!dt(e, function(P, k) {
        if (!yt(v, k) && (y === P || s(y, P, D, A, F)))
          return v.push(k);
      })) {
        o = !1;
        break;
      }
    } else if (!(y === E || s(y, E, D, A, F))) {
      o = !1;
      break;
    }
  }
  return F.delete(u), F.delete(e), o;
}
var mt = xt, _t = z, Tt = _t.Uint8Array, bt = Tt;
function St(u) {
  var e = -1, D = Array(u.size);
  return u.forEach(function(A, s) {
    D[++e] = [s, A];
  }), D;
}
var Nt = St;
function wt(u) {
  var e = -1, D = Array(u.size);
  return u.forEach(function(A) {
    D[++e] = A;
  }), D;
}
var Ot = wt, Mu = lu, ju = bt, $t = Xu, Rt = mt, It = Nt, Pt = Ot, Lt = 1, kt = 2, Mt = "[object Boolean]", jt = "[object Date]", Ut = "[object Error]", Gt = "[object Map]", zt = "[object Number]", Ht = "[object RegExp]", Wt = "[object Set]", Kt = "[object String]", qt = "[object Symbol]", Vt = "[object ArrayBuffer]", Qt = "[object DataView]", Uu = Mu ? Mu.prototype : void 0, xu = Uu ? Uu.valueOf : void 0;
function Jt(u, e, D, A, s, F, t) {
  switch (D) {
    case Qt:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset)
        return !1;
      u = u.buffer, e = e.buffer;
    case Vt:
      return !(u.byteLength != e.byteLength || !F(new ju(u), new ju(e)));
    case Mt:
    case jt:
    case zt:
      return $t(+u, +e);
    case Ut:
      return u.name == e.name && u.message == e.message;
    case Ht:
    case Kt:
      return u == e + "";
    case Gt:
      var l = It;
    case Wt:
      var g = A & Lt;
      if (l || (l = Pt), u.size != e.size && !g)
        return !1;
      var x = t.get(u);
      if (x)
        return x == e;
      A |= kt, t.set(u, e);
      var R = Rt(l(u), l(e), A, s, F, t);
      return t.delete(u), R;
    case qt:
      if (xu)
        return xu.call(u) == xu.call(e);
  }
  return !1;
}
var Cn = Jt, Yt = Array.isArray, Zt = Yt;
function Xt(u) {
  return u != null && typeof u == "object";
}
var du = Xt, ua = nu, ea = du, ra = "[object Arguments]";
function ta(u) {
  return ea(u) && ua(u) == ra;
}
var aa = ta, Gu = aa, Da = du, ae = Object.prototype, na = ae.hasOwnProperty, ia = ae.propertyIsEnumerable, sa = Gu(function() {
  return arguments;
}()) ? Gu : function(u) {
  return Da(u) && na.call(u, "callee") && !ia.call(u, "callee");
}, on = sa, Eu = { exports: {} };
function Aa() {
  return !1;
}
var Fa = Aa;
Eu.exports;
(function(u, e) {
  var D = z, A = Fa, s = e && !e.nodeType && e, F = s && !0 && u && !u.nodeType && u, t = F && F.exports === s, l = t ? D.Buffer : void 0, g = l ? l.isBuffer : void 0, x = g || A;
  u.exports = x;
})(Eu, Eu.exports);
var En = Eu.exports, Ca = 9007199254740991;
function oa(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Ca;
}
var Ea = oa, ca = nu, Ba = Ea, pa = du, la = "[object Arguments]", fa = "[object Array]", ha = "[object Boolean]", da = "[object Date]", ya = "[object Error]", ga = "[object Function]", va = "[object Map]", xa = "[object Number]", ma = "[object Object]", _a = "[object RegExp]", Ta = "[object Set]", ba = "[object String]", Sa = "[object WeakMap]", Na = "[object ArrayBuffer]", wa = "[object DataView]", Oa = "[object Float32Array]", $a = "[object Float64Array]", Ra = "[object Int8Array]", Ia = "[object Int16Array]", Pa = "[object Int32Array]", La = "[object Uint8Array]", ka = "[object Uint8ClampedArray]", Ma = "[object Uint16Array]", ja = "[object Uint32Array]", T = {};
T[Oa] = T[$a] = T[Ra] = T[Ia] = T[Pa] = T[La] = T[ka] = T[Ma] = T[ja] = !0;
T[la] = T[fa] = T[Na] = T[ha] = T[wa] = T[da] = T[ya] = T[ga] = T[va] = T[xa] = T[ma] = T[_a] = T[Ta] = T[ba] = T[Sa] = !1;
function Ua(u) {
  return pa(u) && Ba(u.length) && !!T[ca(u)];
}
var Ga = Ua;
function za(u) {
  return function(e) {
    return u(e);
  };
}
var Ha = za, cu = { exports: {} };
cu.exports;
(function(u, e) {
  var D = ue, A = e && !e.nodeType && e, s = A && !0 && u && !u.nodeType && u, F = s && s.exports === A, t = F && D.process, l = function() {
    try {
      var g = s && s.require && s.require("util").types;
      return g || t && t.binding && t.binding("util");
    } catch {
    }
  }();
  u.exports = l;
})(cu, cu.exports);
var Wa = cu.exports, Ka = Ga, qa = Ha, zu = Wa, Hu = zu && zu.isTypedArray, Va = Hu ? qa(Hu) : Ka, cn = Va, Qa = V, Ja = z, Ya = Qa(Ja, "DataView"), Za = Ya, Xa = V, uD = z, eD = Xa(uD, "Promise"), rD = eD, tD = V, aD = z, DD = tD(aD, "Set"), nD = DD, iD = V, sD = z, AD = iD(sD, "WeakMap"), FD = AD, mu = Za, _u = Nu, Tu = rD, bu = nD, Su = FD, De = nu, uu = te, Wu = "[object Map]", CD = "[object Object]", Ku = "[object Promise]", qu = "[object Set]", Vu = "[object WeakMap]", Qu = "[object DataView]", oD = uu(mu), ED = uu(_u), cD = uu(Tu), BD = uu(bu), pD = uu(Su), q = De;
(mu && q(new mu(new ArrayBuffer(1))) != Qu || _u && q(new _u()) != Wu || Tu && q(Tu.resolve()) != Ku || bu && q(new bu()) != qu || Su && q(new Su()) != Vu) && (q = function(u) {
  var e = De(u), D = e == CD ? u.constructor : void 0, A = D ? uu(D) : "";
  if (A)
    switch (A) {
      case oD:
        return Qu;
      case ED:
        return Wu;
      case cD:
        return Ku;
      case BD:
        return qu;
      case pD:
        return Vu;
    }
  return e;
});
var Bn = q, lD = nu, fD = du, hD = "[object Symbol]";
function dD(u) {
  return typeof u == "symbol" || fD(u) && lD(u) == hD;
}
var yD = dD, ne = wu, gD = "Expected a function";
function Ou(u, e) {
  if (typeof u != "function" || e != null && typeof e != "function")
    throw new TypeError(gD);
  var D = function() {
    var A = arguments, s = e ? e.apply(this, A) : A[0], F = D.cache;
    if (F.has(s))
      return F.get(s);
    var t = u.apply(this, A);
    return D.cache = F.set(s, t) || F, t;
  };
  return D.cache = new (Ou.Cache || ne)(), D;
}
Ou.Cache = ne;
var vD = Ou, xD = vD, mD = 500;
function _D(u) {
  var e = xD(u, function(A) {
    return D.size === mD && D.clear(), A;
  }), D = e.cache;
  return e;
}
var TD = _D, bD = TD, SD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ND = /\\(\\)?/g, wD = bD(function(u) {
  var e = [];
  return u.charCodeAt(0) === 46 && e.push(""), u.replace(SD, function(D, A, s, F) {
    e.push(s ? F.replace(ND, "$1") : A || D);
  }), e;
}), pn = wD, Ju = lu, OD = Ee, $D = Zt, RD = yD, ID = 1 / 0, Yu = Ju ? Ju.prototype : void 0, Zu = Yu ? Yu.toString : void 0;
function ie(u) {
  if (typeof u == "string")
    return u;
  if ($D(u))
    return OD(u, ie) + "";
  if (RD(u))
    return Zu ? Zu.call(u) : "";
  var e = u + "";
  return e == "0" && 1 / u == -ID ? "-0" : e;
}
var ln = ie, PD = V, LD = function() {
  try {
    var u = PD(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
}(), fn = LD, kD = {}, Du = {}, se = { exports: {} };
(function() {
  function u(t) {
    if (t == null)
      return !1;
    switch (t.type) {
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
  function e(t) {
    if (t == null)
      return !1;
    switch (t.type) {
      case "DoWhileStatement":
      case "ForInStatement":
      case "ForStatement":
      case "WhileStatement":
        return !0;
    }
    return !1;
  }
  function D(t) {
    if (t == null)
      return !1;
    switch (t.type) {
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
  function A(t) {
    return D(t) || t != null && t.type === "FunctionDeclaration";
  }
  function s(t) {
    switch (t.type) {
      case "IfStatement":
        return t.alternate != null ? t.alternate : t.consequent;
      case "LabeledStatement":
      case "ForStatement":
      case "ForInStatement":
      case "WhileStatement":
      case "WithStatement":
        return t.body;
    }
    return null;
  }
  function F(t) {
    var l;
    if (t.type !== "IfStatement" || t.alternate == null)
      return !1;
    l = t.consequent;
    do {
      if (l.type === "IfStatement" && l.alternate == null)
        return !0;
      l = s(l);
    } while (l);
    return !1;
  }
  se.exports = {
    isExpression: u,
    isStatement: D,
    isIterationStatement: e,
    isSourceElement: A,
    isProblematicIfStatement: F,
    trailingStatement: s
  };
})();
var MD = se.exports, Ae = { exports: {} };
(function() {
  var u, e, D, A, s, F;
  e = {
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }, u = {
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
    // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
  };
  function t(p) {
    return 48 <= p && p <= 57;
  }
  function l(p) {
    return 48 <= p && p <= 57 || // 0..9
    97 <= p && p <= 102 || // a..f
    65 <= p && p <= 70;
  }
  function g(p) {
    return p >= 48 && p <= 55;
  }
  D = [
    5760,
    8192,
    8193,
    8194,
    8195,
    8196,
    8197,
    8198,
    8199,
    8200,
    8201,
    8202,
    8239,
    8287,
    12288,
    65279
  ];
  function x(p) {
    return p === 32 || p === 9 || p === 11 || p === 12 || p === 160 || p >= 5760 && D.indexOf(p) >= 0;
  }
  function R(p) {
    return p === 10 || p === 13 || p === 8232 || p === 8233;
  }
  function S(p) {
    if (p <= 65535)
      return String.fromCharCode(p);
    var P = String.fromCharCode(Math.floor((p - 65536) / 1024) + 55296), k = String.fromCharCode((p - 65536) % 1024 + 56320);
    return P + k;
  }
  for (A = new Array(128), F = 0; F < 128; ++F)
    A[F] = F >= 97 && F <= 122 || // a..z
    F >= 65 && F <= 90 || // A..Z
    F === 36 || F === 95;
  for (s = new Array(128), F = 0; F < 128; ++F)
    s[F] = F >= 97 && F <= 122 || // a..z
    F >= 65 && F <= 90 || // A..Z
    F >= 48 && F <= 57 || // 0..9
    F === 36 || F === 95;
  function o(p) {
    return p < 128 ? A[p] : e.NonAsciiIdentifierStart.test(S(p));
  }
  function v(p) {
    return p < 128 ? s[p] : e.NonAsciiIdentifierPart.test(S(p));
  }
  function y(p) {
    return p < 128 ? A[p] : u.NonAsciiIdentifierStart.test(S(p));
  }
  function E(p) {
    return p < 128 ? s[p] : u.NonAsciiIdentifierPart.test(S(p));
  }
  Ae.exports = {
    isDecimalDigit: t,
    isHexDigit: l,
    isOctalDigit: g,
    isWhiteSpace: x,
    isLineTerminator: R,
    isIdentifierStartES5: o,
    isIdentifierPartES5: v,
    isIdentifierStartES6: y,
    isIdentifierPartES6: E
  };
})();
var Fe = Ae.exports, Ce = { exports: {} };
(function() {
  var u = Fe;
  function e(o) {
    switch (o) {
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
  function D(o, v) {
    return !v && o === "yield" ? !1 : A(o, v);
  }
  function A(o, v) {
    if (v && e(o))
      return !0;
    switch (o.length) {
      case 2:
        return o === "if" || o === "in" || o === "do";
      case 3:
        return o === "var" || o === "for" || o === "new" || o === "try";
      case 4:
        return o === "this" || o === "else" || o === "case" || o === "void" || o === "with" || o === "enum";
      case 5:
        return o === "while" || o === "break" || o === "catch" || o === "throw" || o === "const" || o === "yield" || o === "class" || o === "super";
      case 6:
        return o === "return" || o === "typeof" || o === "delete" || o === "switch" || o === "export" || o === "import";
      case 7:
        return o === "default" || o === "finally" || o === "extends";
      case 8:
        return o === "function" || o === "continue" || o === "debugger";
      case 10:
        return o === "instanceof";
      default:
        return !1;
    }
  }
  function s(o, v) {
    return o === "null" || o === "true" || o === "false" || D(o, v);
  }
  function F(o, v) {
    return o === "null" || o === "true" || o === "false" || A(o, v);
  }
  function t(o) {
    return o === "eval" || o === "arguments";
  }
  function l(o) {
    var v, y, E;
    if (o.length === 0 || (E = o.charCodeAt(0), !u.isIdentifierStartES5(E)))
      return !1;
    for (v = 1, y = o.length; v < y; ++v)
      if (E = o.charCodeAt(v), !u.isIdentifierPartES5(E))
        return !1;
    return !0;
  }
  function g(o, v) {
    return (o - 55296) * 1024 + (v - 56320) + 65536;
  }
  function x(o) {
    var v, y, E, p, P;
    if (o.length === 0)
      return !1;
    for (P = u.isIdentifierStartES6, v = 0, y = o.length; v < y; ++v) {
      if (E = o.charCodeAt(v), 55296 <= E && E <= 56319) {
        if (++v, v >= y || (p = o.charCodeAt(v), !(56320 <= p && p <= 57343)))
          return !1;
        E = g(E, p);
      }
      if (!P(E))
        return !1;
      P = u.isIdentifierPartES6;
    }
    return !0;
  }
  function R(o, v) {
    return l(o) && !s(o, v);
  }
  function S(o, v) {
    return x(o) && !F(o, v);
  }
  Ce.exports = {
    isKeywordES5: D,
    isKeywordES6: A,
    isReservedWordES5: s,
    isReservedWordES6: F,
    isRestrictedWord: t,
    isIdentifierNameES5: l,
    isIdentifierNameES6: x,
    isIdentifierES5: R,
    isIdentifierES6: S
  };
})();
var jD = Ce.exports;
(function() {
  Du.ast = MD, Du.code = Fe, Du.keyword = jD;
})();
var au = {}, Q = {};
const UD = "doctrine", GD = "JSDoc parser", zD = "https://github.com/eslint/doctrine", HD = "lib/doctrine.js", WD = "3.0.0", KD = {
  node: ">=6.0.0"
}, qD = {
  lib: "./lib"
}, VD = [
  "lib"
], QD = [
  {
    name: "Nicholas C. Zakas",
    email: "nicholas+npm@nczconsulting.com",
    web: "https://www.nczonline.net"
  },
  {
    name: "Yusuke Suzuki",
    email: "utatane.tea@gmail.com",
    web: "https://github.com/Constellation"
  }
], JD = "eslint/doctrine", YD = {
  coveralls: "^3.0.1",
  dateformat: "^1.0.11",
  eslint: "^1.10.3",
  "eslint-release": "^1.0.0",
  linefix: "^0.1.1",
  mocha: "^3.4.2",
  "npm-license": "^0.3.1",
  nyc: "^10.3.2",
  semver: "^5.0.3",
  shelljs: "^0.5.3",
  "shelljs-nodecli": "^0.1.1",
  should: "^5.0.1"
}, ZD = "Apache-2.0", XD = {
  pretest: "npm run lint",
  test: "nyc mocha",
  coveralls: "nyc report --reporter=text-lcov | coveralls",
  lint: "eslint lib/",
  "generate-release": "eslint-generate-release",
  "generate-alpharelease": "eslint-generate-prerelease alpha",
  "generate-betarelease": "eslint-generate-prerelease beta",
  "generate-rcrelease": "eslint-generate-prerelease rc",
  "publish-release": "eslint-publish-release"
}, un = {
  esutils: "^2.0.2"
}, en = {
  name: UD,
  description: GD,
  homepage: zD,
  main: HD,
  version: WD,
  engines: KD,
  directories: qD,
  files: VD,
  maintainers: QD,
  repository: JD,
  devDependencies: YD,
  license: ZD,
  scripts: XD,
  dependencies: un
};
function rn(u, e) {
  if (!u)
    throw new Error(e || "unknown assertion error");
}
var tn = rn;
(function() {
  var u;
  u = en.version, Q.VERSION = u;
  function e(A) {
    this.name = "DoctrineError", this.message = A;
  }
  e.prototype = function() {
    var A = function() {
    };
    return A.prototype = Error.prototype, new A();
  }(), e.prototype.constructor = e, Q.DoctrineError = e;
  function D(A) {
    throw new e(A);
  }
  Q.throwError = D, Q.assert = tn;
})();
(function() {
  var u, e, D, A, s, F, t, l, g, x, R, S;
  g = Du, x = Q, u = {
    NullableLiteral: "NullableLiteral",
    AllLiteral: "AllLiteral",
    NullLiteral: "NullLiteral",
    UndefinedLiteral: "UndefinedLiteral",
    VoidLiteral: "VoidLiteral",
    UnionType: "UnionType",
    ArrayType: "ArrayType",
    RecordType: "RecordType",
    FieldType: "FieldType",
    FunctionType: "FunctionType",
    ParameterType: "ParameterType",
    RestType: "RestType",
    NonNullableType: "NonNullableType",
    OptionalType: "OptionalType",
    NullableType: "NullableType",
    NameExpression: "NameExpression",
    TypeApplication: "TypeApplication",
    StringLiteralType: "StringLiteralType",
    NumericLiteralType: "NumericLiteralType",
    BooleanLiteralType: "BooleanLiteralType"
  }, e = {
    ILLEGAL: 0,
    // ILLEGAL
    DOT_LT: 1,
    // .<
    REST: 2,
    // ...
    LT: 3,
    // <
    GT: 4,
    // >
    LPAREN: 5,
    // (
    RPAREN: 6,
    // )
    LBRACE: 7,
    // {
    RBRACE: 8,
    // }
    LBRACK: 9,
    // [
    RBRACK: 10,
    // ]
    COMMA: 11,
    // ,
    COLON: 12,
    // :
    STAR: 13,
    // *
    PIPE: 14,
    // |
    QUESTION: 15,
    // ?
    BANG: 16,
    // !
    EQUAL: 17,
    // =
    NAME: 18,
    // name token
    STRING: 19,
    // string
    NUMBER: 20,
    // number
    EOF: 21
  };
  function o(r) {
    return "><(){}[],:*|?!=".indexOf(String.fromCharCode(r)) === -1 && !g.code.isWhiteSpace(r) && !g.code.isLineTerminator(r);
  }
  function v(r, a, f, i) {
    this._previous = r, this._index = a, this._token = f, this._value = i;
  }
  v.prototype.restore = function() {
    F = this._previous, s = this._index, t = this._token, l = this._value;
  }, v.save = function() {
    return new v(F, s, t, l);
  };
  function y(r, a) {
    return S && (r.range = [a[0] + R, a[1] + R]), r;
  }
  function E() {
    var r = D.charAt(s);
    return s += 1, r;
  }
  function p(r) {
    var a, f, i, n = 0;
    for (f = r === "u" ? 4 : 2, a = 0; a < f; ++a)
      if (s < A && g.code.isHexDigit(D.charCodeAt(s)))
        i = E(), n = n * 16 + "0123456789abcdef".indexOf(i.toLowerCase());
      else
        return "";
    return String.fromCharCode(n);
  }
  function P() {
    var r = "", a, f, i, n, B;
    for (a = D.charAt(s), ++s; s < A; )
      if (f = E(), f === a) {
        a = "";
        break;
      } else if (f === "\\")
        if (f = E(), g.code.isLineTerminator(f.charCodeAt(0)))
          f === "\r" && D.charCodeAt(s) === 10 && ++s;
        else
          switch (f) {
            case "n":
              r += `
`;
              break;
            case "r":
              r += "\r";
              break;
            case "t":
              r += "	";
              break;
            case "u":
            case "x":
              B = s, n = p(f), n ? r += n : (s = B, r += f);
              break;
            case "b":
              r += "\b";
              break;
            case "f":
              r += "\f";
              break;
            case "v":
              r += "\v";
              break;
            default:
              g.code.isOctalDigit(f.charCodeAt(0)) ? (i = "01234567".indexOf(f), s < A && g.code.isOctalDigit(D.charCodeAt(s)) && (i = i * 8 + "01234567".indexOf(E()), "0123".indexOf(f) >= 0 && s < A && g.code.isOctalDigit(D.charCodeAt(s)) && (i = i * 8 + "01234567".indexOf(E()))), r += String.fromCharCode(i)) : r += f;
              break;
          }
      else {
        if (g.code.isLineTerminator(f.charCodeAt(0)))
          break;
        r += f;
      }
    return a !== "" && x.throwError("unexpected quote"), l = r, e.STRING;
  }
  function k() {
    var r, a;
    if (r = "", a = D.charCodeAt(s), a !== 46) {
      if (r = E(), a = D.charCodeAt(s), r === "0") {
        if (a === 120 || a === 88) {
          for (r += E(); s < A && (a = D.charCodeAt(s), !!g.code.isHexDigit(a)); )
            r += E();
          return r.length <= 2 && x.throwError("unexpected token"), s < A && (a = D.charCodeAt(s), g.code.isIdentifierStartES5(a) && x.throwError("unexpected token")), l = parseInt(r, 16), e.NUMBER;
        }
        if (g.code.isOctalDigit(a)) {
          for (r += E(); s < A && (a = D.charCodeAt(s), !!g.code.isOctalDigit(a)); )
            r += E();
          return s < A && (a = D.charCodeAt(s), (g.code.isIdentifierStartES5(a) || g.code.isDecimalDigit(a)) && x.throwError("unexpected token")), l = parseInt(r, 8), e.NUMBER;
        }
        g.code.isDecimalDigit(a) && x.throwError("unexpected token");
      }
      for (; s < A && (a = D.charCodeAt(s), !!g.code.isDecimalDigit(a)); )
        r += E();
    }
    if (a === 46)
      for (r += E(); s < A && (a = D.charCodeAt(s), !!g.code.isDecimalDigit(a)); )
        r += E();
    if (a === 101 || a === 69)
      if (r += E(), a = D.charCodeAt(s), (a === 43 || a === 45) && (r += E()), a = D.charCodeAt(s), g.code.isDecimalDigit(a))
        for (r += E(); s < A && (a = D.charCodeAt(s), !!g.code.isDecimalDigit(a)); )
          r += E();
      else
        x.throwError("unexpected token");
    return s < A && (a = D.charCodeAt(s), g.code.isIdentifierStartES5(a) && x.throwError("unexpected token")), l = parseFloat(r), e.NUMBER;
  }
  function iu() {
    var r, a;
    for (l = E(); s < A && o(D.charCodeAt(s)); ) {
      if (r = D.charCodeAt(s), r === 46) {
        if (s + 1 >= A)
          return e.ILLEGAL;
        if (a = D.charCodeAt(s + 1), a === 60)
          break;
      }
      l += E();
    }
    return e.NAME;
  }
  function M() {
    var r;
    for (F = s; s < A && g.code.isWhiteSpace(D.charCodeAt(s)); )
      E();
    if (s >= A)
      return t = e.EOF, t;
    switch (r = D.charCodeAt(s), r) {
      case 39:
      case 34:
        return t = P(), t;
      case 58:
        return E(), t = e.COLON, t;
      case 44:
        return E(), t = e.COMMA, t;
      case 40:
        return E(), t = e.LPAREN, t;
      case 41:
        return E(), t = e.RPAREN, t;
      case 91:
        return E(), t = e.LBRACK, t;
      case 93:
        return E(), t = e.RBRACK, t;
      case 123:
        return E(), t = e.LBRACE, t;
      case 125:
        return E(), t = e.RBRACE, t;
      case 46:
        if (s + 1 < A) {
          if (r = D.charCodeAt(s + 1), r === 60)
            return E(), E(), t = e.DOT_LT, t;
          if (r === 46 && s + 2 < A && D.charCodeAt(s + 2) === 46)
            return E(), E(), E(), t = e.REST, t;
          if (g.code.isDecimalDigit(r))
            return t = k(), t;
        }
        return t = e.ILLEGAL, t;
      case 60:
        return E(), t = e.LT, t;
      case 62:
        return E(), t = e.GT, t;
      case 42:
        return E(), t = e.STAR, t;
      case 124:
        return E(), t = e.PIPE, t;
      case 63:
        return E(), t = e.QUESTION, t;
      case 33:
        return E(), t = e.BANG, t;
      case 61:
        return E(), t = e.EQUAL, t;
      case 45:
        return t = k(), t;
      default:
        return g.code.isDecimalDigit(r) ? (t = k(), t) : (x.assert(o(r)), t = iu(), t);
    }
  }
  function m(r, a) {
    x.assert(t === r, a || "consumed token not matched"), M();
  }
  function C(r, a) {
    t !== r && x.throwError(a || "unexpected token"), M();
  }
  function I() {
    var r, a = s - 1;
    if (m(e.LPAREN, "UnionType should start with ("), r = [], t !== e.RPAREN)
      for (; r.push(L()), t !== e.RPAREN; )
        C(e.PIPE);
    return m(e.RPAREN, "UnionType should end with )"), y({
      type: u.UnionType,
      elements: r
    }, [a, F]);
  }
  function c() {
    var r, a = s - 1, f;
    for (m(e.LBRACK, "ArrayType should start with ["), r = []; t !== e.RBRACK; ) {
      if (t === e.REST) {
        f = s - 3, m(e.REST), r.push(y({
          type: u.RestType,
          expression: L()
        }, [f, F]));
        break;
      } else
        r.push(L());
      t !== e.RBRACK && C(e.COMMA);
    }
    return C(e.RBRACK), y({
      type: u.ArrayType,
      elements: r
    }, [a, F]);
  }
  function j() {
    var r = l;
    if (t === e.NAME || t === e.STRING)
      return M(), r;
    if (t === e.NUMBER)
      return m(e.NUMBER), String(r);
    x.throwError("unexpected token");
  }
  function U() {
    var r, a = F;
    return r = j(), t === e.COLON ? (m(e.COLON), y({
      type: u.FieldType,
      key: r,
      value: L()
    }, [a, F])) : y({
      type: u.FieldType,
      key: r,
      value: null
    }, [a, F]);
  }
  function d() {
    var r, a = s - 1, f;
    if (m(e.LBRACE, "RecordType should start with {"), r = [], t === e.COMMA)
      m(e.COMMA);
    else
      for (; t !== e.RBRACE; )
        r.push(U()), t !== e.RBRACE && C(e.COMMA);
    return f = s, C(e.RBRACE), y({
      type: u.RecordType,
      fields: r
    }, [a, f]);
  }
  function eu() {
    var r = l, a = s - r.length;
    return C(e.NAME), t === e.COLON && (r === "module" || r === "external" || r === "event") && (m(e.COLON), r += ":" + l, C(e.NAME)), y({
      type: u.NameExpression,
      name: r
    }, [a, F]);
  }
  function su() {
    var r = [];
    for (r.push(G()); t === e.COMMA; )
      m(e.COMMA), r.push(G());
    return r;
  }
  function W() {
    var r, a, f = s - l.length;
    return r = eu(), t === e.DOT_LT || t === e.LT ? (M(), a = su(), C(e.GT), y({
      type: u.TypeApplication,
      expression: r,
      applications: a
    }, [f, F])) : r;
  }
  function Au() {
    return m(e.COLON, "ResultType should start with :"), t === e.NAME && l === "void" ? (m(e.NAME), {
      type: u.VoidLiteral
    }) : L();
  }
  function b() {
    for (var r = [], a = !1, f, i = !1, n, B = s - 3, h; t !== e.RPAREN; )
      t === e.REST && (m(e.REST), i = !0), n = F, f = L(), f.type === u.NameExpression && t === e.COLON && (h = F - f.name.length, m(e.COLON), f = y({
        type: u.ParameterType,
        name: f.name,
        expression: L()
      }, [h, F])), t === e.EQUAL ? (m(e.EQUAL), f = y({
        type: u.OptionalType,
        expression: f
      }, [n, F]), a = !0) : a && x.throwError("unexpected token"), i && (f = y({
        type: u.RestType,
        expression: f
      }, [B, F])), r.push(f), t !== e.RPAREN && C(e.COMMA);
    return r;
  }
  function yu() {
    var r, a, f, i, n, B = s - l.length;
    return x.assert(t === e.NAME && l === "function", "FunctionType should start with 'function'"), m(e.NAME), C(e.LPAREN), r = !1, f = [], a = null, t !== e.RPAREN && (t === e.NAME && (l === "this" || l === "new") ? (r = l === "new", m(e.NAME), C(e.COLON), a = W(), t === e.COMMA && (m(e.COMMA), f = b())) : f = b()), C(e.RPAREN), i = null, t === e.COLON && (i = Au()), n = y({
      type: u.FunctionType,
      params: f,
      result: i
    }, [B, F]), a && (n.this = a, r && (n.new = !0)), n;
  }
  function ru() {
    var r, a;
    switch (t) {
      case e.STAR:
        return m(e.STAR), y({
          type: u.AllLiteral
        }, [F - 1, F]);
      case e.LPAREN:
        return I();
      case e.LBRACK:
        return c();
      case e.LBRACE:
        return d();
      case e.NAME:
        if (a = s - l.length, l === "null")
          return m(e.NAME), y({
            type: u.NullLiteral
          }, [a, F]);
        if (l === "undefined")
          return m(e.NAME), y({
            type: u.UndefinedLiteral
          }, [a, F]);
        if (l === "true" || l === "false")
          return m(e.NAME), y({
            type: u.BooleanLiteralType,
            value: l === "true"
          }, [a, F]);
        if (r = v.save(), l === "function")
          try {
            return yu();
          } catch {
            r.restore();
          }
        return W();
      case e.STRING:
        return M(), y({
          type: u.StringLiteralType,
          value: l
        }, [F - l.length - 2, F]);
      case e.NUMBER:
        return M(), y({
          type: u.NumericLiteralType,
          value: l
        }, [F - String(l).length, F]);
      default:
        x.throwError("unexpected token");
    }
  }
  function L() {
    var r, a;
    return t === e.QUESTION ? (a = s - 1, m(e.QUESTION), t === e.COMMA || t === e.EQUAL || t === e.RBRACE || t === e.RPAREN || t === e.PIPE || t === e.EOF || t === e.RBRACK || t === e.GT ? y({
      type: u.NullableLiteral
    }, [a, F]) : y({
      type: u.NullableType,
      expression: ru(),
      prefix: !0
    }, [a, F])) : t === e.BANG ? (a = s - 1, m(e.BANG), y({
      type: u.NonNullableType,
      expression: ru(),
      prefix: !0
    }, [a, F])) : (a = F, r = ru(), t === e.BANG ? (m(e.BANG), y({
      type: u.NonNullableType,
      expression: r,
      prefix: !1
    }, [a, F])) : t === e.QUESTION ? (m(e.QUESTION), y({
      type: u.NullableType,
      expression: r,
      prefix: !1
    }, [a, F])) : t === e.LBRACK ? (m(e.LBRACK), C(e.RBRACK, "expected an array-style type declaration (" + l + "[])"), y({
      type: u.TypeApplication,
      expression: y({
        type: u.NameExpression,
        name: "Array"
      }, [a, F]),
      applications: [r]
    }, [a, F])) : r);
  }
  function G() {
    var r, a;
    if (r = L(), t !== e.PIPE)
      return r;
    for (a = [r], m(e.PIPE); a.push(L()), t === e.PIPE; )
      m(e.PIPE);
    return y({
      type: u.UnionType,
      elements: a
    }, [0, s]);
  }
  function K() {
    var r;
    return t === e.REST ? (m(e.REST), y({
      type: u.RestType,
      expression: G()
    }, [0, s])) : (r = G(), t === e.EQUAL ? (m(e.EQUAL), y({
      type: u.OptionalType,
      expression: r
    }, [0, s])) : r);
  }
  function Fu(r, a) {
    var f;
    return D = r, A = D.length, s = 0, F = 0, S = a && a.range, R = a && a.startIndex || 0, M(), f = G(), a && a.midstream ? {
      expression: f,
      index: F
    } : (t !== e.EOF && x.throwError("not reach to EOF"), f);
  }
  function gu(r, a) {
    var f;
    return D = r, A = D.length, s = 0, F = 0, S = a && a.range, R = a && a.startIndex || 0, M(), f = K(), a && a.midstream ? {
      expression: f,
      index: F
    } : (t !== e.EOF && x.throwError("not reach to EOF"), f);
  }
  function N(r, a, f) {
    var i, n, B;
    switch (r.type) {
      case u.NullableLiteral:
        i = "?";
        break;
      case u.AllLiteral:
        i = "*";
        break;
      case u.NullLiteral:
        i = "null";
        break;
      case u.UndefinedLiteral:
        i = "undefined";
        break;
      case u.VoidLiteral:
        i = "void";
        break;
      case u.UnionType:
        for (f ? i = "" : i = "(", n = 0, B = r.elements.length; n < B; ++n)
          i += N(r.elements[n], a), n + 1 !== B && (i += a ? "|" : " | ");
        f || (i += ")");
        break;
      case u.ArrayType:
        for (i = "[", n = 0, B = r.elements.length; n < B; ++n)
          i += N(r.elements[n], a), n + 1 !== B && (i += a ? "," : ", ");
        i += "]";
        break;
      case u.RecordType:
        for (i = "{", n = 0, B = r.fields.length; n < B; ++n)
          i += N(r.fields[n], a), n + 1 !== B && (i += a ? "," : ", ");
        i += "}";
        break;
      case u.FieldType:
        r.value ? i = r.key + (a ? ":" : ": ") + N(r.value, a) : i = r.key;
        break;
      case u.FunctionType:
        for (i = a ? "function(" : "function (", r.this && (r.new ? i += a ? "new:" : "new: " : i += a ? "this:" : "this: ", i += N(r.this, a), r.params.length !== 0 && (i += a ? "," : ", ")), n = 0, B = r.params.length; n < B; ++n)
          i += N(r.params[n], a), n + 1 !== B && (i += a ? "," : ", ");
        i += ")", r.result && (i += (a ? ":" : ": ") + N(r.result, a));
        break;
      case u.ParameterType:
        i = r.name + (a ? ":" : ": ") + N(r.expression, a);
        break;
      case u.RestType:
        i = "...", r.expression && (i += N(r.expression, a));
        break;
      case u.NonNullableType:
        r.prefix ? i = "!" + N(r.expression, a) : i = N(r.expression, a) + "!";
        break;
      case u.OptionalType:
        i = N(r.expression, a) + "=";
        break;
      case u.NullableType:
        r.prefix ? i = "?" + N(r.expression, a) : i = N(r.expression, a) + "?";
        break;
      case u.NameExpression:
        i = r.name;
        break;
      case u.TypeApplication:
        for (i = N(r.expression, a) + ".<", n = 0, B = r.applications.length; n < B; ++n)
          i += N(r.applications[n], a), n + 1 !== B && (i += a ? "," : ", ");
        i += ">";
        break;
      case u.StringLiteralType:
        i = '"' + r.value + '"';
        break;
      case u.NumericLiteralType:
        i = String(r.value);
        break;
      case u.BooleanLiteralType:
        i = String(r.value);
        break;
      default:
        x.throwError("Unknown type " + r.type);
    }
    return i;
  }
  function w(r, a) {
    return a == null && (a = {}), N(r, a.compact, a.topLevel);
  }
  au.parseType = Fu, au.parseParamType = gu, au.stringify = w, au.Syntax = u;
})();
(function(u) {
  (function() {
    var e, D, A, s, F;
    s = Du, e = au, D = Q;
    function t(C, I, c) {
      return C.slice(I, c);
    }
    F = function() {
      var C = Object.prototype.hasOwnProperty;
      return function(c, j) {
        return C.call(c, j);
      };
    }();
    function l(C) {
      var I = {}, c;
      for (c in C)
        C.hasOwnProperty(c) && (I[c] = C[c]);
      return I;
    }
    function g(C) {
      return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57;
    }
    function x(C) {
      return C === "param" || C === "argument" || C === "arg";
    }
    function R(C) {
      return C === "return" || C === "returns";
    }
    function S(C) {
      return C === "property" || C === "prop";
    }
    function o(C) {
      return x(C) || S(C) || C === "alias" || C === "this" || C === "mixes" || C === "requires";
    }
    function v(C) {
      return o(C) || C === "const" || C === "constant";
    }
    function y(C) {
      return S(C) || x(C);
    }
    function E(C) {
      return S(C) || x(C);
    }
    function p(C) {
      return x(C) || R(C) || C === "define" || C === "enum" || C === "implements" || C === "this" || C === "type" || C === "typedef" || S(C);
    }
    function P(C) {
      return p(C) || C === "throws" || C === "const" || C === "constant" || C === "namespace" || C === "member" || C === "var" || C === "module" || C === "constructor" || C === "class" || C === "extends" || C === "augments" || C === "public" || C === "private" || C === "protected";
    }
    var k = "[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]", iu = "(" + k + "*(?:\\*" + k + `?)?)(.+|[\r
\u2028\u2029])`;
    function M(C) {
      return C.replace(/^\/\*\*?/, "").replace(/\*\/$/, "").replace(new RegExp(iu, "g"), "$2").replace(/\s*$/, "");
    }
    function m(C, I) {
      for (var c = C.replace(/^\/\*\*?/, ""), j = 0, U = new RegExp(iu, "g"), d; d = U.exec(c); )
        if (j += d[1].length, d.index + d[0].length > I + j)
          return I + j + C.length - c.length;
      return C.replace(/\*\/$/, "").replace(/\s*$/, "").length;
    }
    (function(C) {
      var I, c, j, U, d, eu, su, W, Au;
      function b() {
        var i = d.charCodeAt(c);
        return c += 1, s.code.isLineTerminator(i) && !(i === 13 && d.charCodeAt(c) === 10) && (j += 1), String.fromCharCode(i);
      }
      function yu() {
        var i = "";
        for (b(); c < U && g(d.charCodeAt(c)); )
          i += b();
        return i;
      }
      function ru() {
        var i, n, B = c;
        for (n = !1; B < U; ) {
          if (i = d.charCodeAt(B), s.code.isLineTerminator(i) && !(i === 13 && d.charCodeAt(B + 1) === 10))
            n = !0;
          else if (n) {
            if (i === 64)
              break;
            s.code.isWhiteSpace(i) || (n = !1);
          }
          B += 1;
        }
        return B;
      }
      function L(i, n, B) {
        for (var h, O, _, $, H = !1; c < n; )
          if (h = d.charCodeAt(c), s.code.isWhiteSpace(h))
            b();
          else if (h === 123) {
            b();
            break;
          } else {
            H = !0;
            break;
          }
        if (H)
          return null;
        for (O = 1, _ = ""; c < n; )
          if (h = d.charCodeAt(c), s.code.isLineTerminator(h))
            b();
          else {
            if (h === 125) {
              if (O -= 1, O === 0) {
                b();
                break;
              }
            } else
              h === 123 && (O += 1);
            _ === "" && ($ = c), _ += b();
          }
        return O !== 0 ? D.throwError("Braces are not balanced") : E(i) ? e.parseParamType(_, { startIndex: N($), range: B }) : e.parseType(_, { startIndex: N($), range: B });
      }
      function G(i) {
        var n;
        if (!s.code.isIdentifierStartES5(d.charCodeAt(c)) && !d[c].match(/[0-9]/))
          return null;
        for (n = b(); c < i && s.code.isIdentifierPartES5(d.charCodeAt(c)); )
          n += b();
        return n;
      }
      function K(i) {
        for (; c < i && (s.code.isWhiteSpace(d.charCodeAt(c)) || s.code.isLineTerminator(d.charCodeAt(c))); )
          b();
      }
      function Fu(i, n, B) {
        var h = "", O, _;
        if (K(i), c >= i)
          return null;
        if (d.charCodeAt(c) === 91)
          if (n)
            O = !0, h = b();
          else
            return null;
        if (h += G(i), B)
          for (d.charCodeAt(c) === 58 && (h === "module" || h === "external" || h === "event") && (h += b(), h += G(i)), d.charCodeAt(c) === 91 && d.charCodeAt(c + 1) === 93 && (h += b(), h += b()); d.charCodeAt(c) === 46 || d.charCodeAt(c) === 47 || d.charCodeAt(c) === 35 || d.charCodeAt(c) === 45 || d.charCodeAt(c) === 126; )
            h += b(), h += G(i);
        if (O) {
          if (K(i), d.charCodeAt(c) === 61) {
            h += b(), K(i);
            for (var $, H = 1; c < i; ) {
              if ($ = d.charCodeAt(c), s.code.isWhiteSpace($) && (_ || (K(i), $ = d.charCodeAt(c))), $ === 39 && (_ ? _ === "'" && (_ = "") : _ = "'"), $ === 34 && (_ ? _ === '"' && (_ = "") : _ = '"'), $ === 91)
                H++;
              else if ($ === 93 && --H === 0)
                break;
              h += b();
            }
          }
          if (K(i), c >= i || d.charCodeAt(c) !== 93)
            return null;
          h += b();
        }
        return h;
      }
      function gu() {
        for (; c < U && d.charCodeAt(c) !== 64; )
          b();
        return c >= U ? !1 : (D.assert(
          d.charCodeAt(c) === 64
          /* '@' */
        ), !0);
      }
      function N(i) {
        return d === eu ? i : m(eu, i);
      }
      function w(i, n) {
        this._options = i, this._title = n.toLowerCase(), this._tag = {
          title: n,
          description: null
        }, this._options.lineNumbers && (this._tag.lineNumber = j), this._first = c - n.length - 1, this._last = 0, this._extra = {};
      }
      w.prototype.addError = function(n) {
        var B = Array.prototype.slice.call(arguments, 1), h = n.replace(
          /%(\d)/g,
          function(O, _) {
            return D.assert(_ < B.length, "Message reference must be in range"), B[_];
          }
        );
        return this._tag.errors || (this._tag.errors = []), Au && D.throwError(h), this._tag.errors.push(h), su;
      }, w.prototype.parseType = function() {
        if (p(this._title))
          try {
            if (this._tag.type = L(this._title, this._last, this._options.range), !this._tag.type && !x(this._title) && !R(this._title) && !this.addError("Missing or invalid tag type"))
              return !1;
          } catch (i) {
            if (this._tag.type = null, !this.addError(i.message))
              return !1;
          }
        else if (P(this._title))
          try {
            this._tag.type = L(this._title, this._last, this._options.range);
          } catch {
          }
        return !0;
      }, w.prototype._parseNamePath = function(i) {
        var n;
        return n = Fu(this._last, W && E(this._title), !0), !n && !i && !this.addError("Missing or invalid tag name") ? !1 : (this._tag.name = n, !0);
      }, w.prototype.parseNamePath = function() {
        return this._parseNamePath(!1);
      }, w.prototype.parseNamePathOptional = function() {
        return this._parseNamePath(!0);
      }, w.prototype.parseName = function() {
        var i, n;
        if (v(this._title))
          if (this._tag.name = Fu(this._last, W && E(this._title), y(this._title)), this._tag.name)
            n = this._tag.name, n.charAt(0) === "[" && n.charAt(n.length - 1) === "]" && (i = n.substring(1, n.length - 1).split("="), i.length > 1 && (this._tag.default = i.slice(1).join("=")), this._tag.name = i[0], this._tag.type && this._tag.type.type !== "OptionalType" && (this._tag.type = {
              type: "OptionalType",
              expression: this._tag.type
            }));
          else {
            if (!o(this._title))
              return !0;
            if (x(this._title) && this._tag.type && this._tag.type.name)
              this._extra.name = this._tag.type, this._tag.name = this._tag.type.name, this._tag.type = null;
            else if (!this.addError("Missing or invalid tag name"))
              return !1;
          }
        return !0;
      }, w.prototype.parseDescription = function() {
        var n = t(d, c, this._last).trim();
        return n && (/^-\s+/.test(n) && (n = n.substring(2)), this._tag.description = n), !0;
      }, w.prototype.parseCaption = function() {
        var n = t(d, c, this._last).trim(), B = "<caption>", h = "</caption>", O = n.indexOf(B), _ = n.indexOf(h);
        return O >= 0 && _ >= 0 ? (this._tag.caption = n.substring(
          O + B.length,
          _
        ).trim(), this._tag.description = n.substring(_ + h.length).trim()) : this._tag.description = n, !0;
      }, w.prototype.parseKind = function() {
        var n, B;
        return B = {
          class: !0,
          constant: !0,
          event: !0,
          external: !0,
          file: !0,
          function: !0,
          member: !0,
          mixin: !0,
          module: !0,
          namespace: !0,
          typedef: !0
        }, n = t(d, c, this._last).trim(), this._tag.kind = n, !(!F(B, n) && !this.addError("Invalid kind name '%0'", n));
      }, w.prototype.parseAccess = function() {
        var n;
        return n = t(d, c, this._last).trim(), this._tag.access = n, !(n !== "private" && n !== "protected" && n !== "public" && !this.addError("Invalid access name '%0'", n));
      }, w.prototype.parseThis = function() {
        var n = t(d, c, this._last).trim();
        if (n && n.charAt(0) === "{") {
          var B = this.parseType();
          return B && this._tag.type.type === "NameExpression" || this._tag.type.type === "UnionType" ? (this._tag.name = this._tag.type.name, !0) : this.addError("Invalid name for this");
        } else
          return this.parseNamePath();
      }, w.prototype.parseVariation = function() {
        var n, B;
        return B = t(d, c, this._last).trim(), n = parseFloat(B, 10), this._tag.variation = n, !(isNaN(n) && !this.addError("Invalid variation '%0'", B));
      }, w.prototype.ensureEnd = function() {
        var i = t(d, c, this._last).trim();
        return !(i && !this.addError("Unknown content '%0'", i));
      }, w.prototype.epilogue = function() {
        var n;
        return n = this._tag.description, !(E(this._title) && !this._tag.type && n && n.charAt(0) === "[" && (this._tag.type = this._extra.name, this._tag.name || (this._tag.name = void 0), !W && !this.addError("Missing or invalid tag name")));
      }, I = {
        // http://usejsdoc.org/tags-access.html
        access: ["parseAccess"],
        // http://usejsdoc.org/tags-alias.html
        alias: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-augments.html
        augments: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-constructor.html
        constructor: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-constructor.html
        class: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-extends.html
        extends: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-example.html
        example: ["parseCaption"],
        // http://usejsdoc.org/tags-deprecated.html
        deprecated: ["parseDescription"],
        // http://usejsdoc.org/tags-global.html
        global: ["ensureEnd"],
        // http://usejsdoc.org/tags-inner.html
        inner: ["ensureEnd"],
        // http://usejsdoc.org/tags-instance.html
        instance: ["ensureEnd"],
        // http://usejsdoc.org/tags-kind.html
        kind: ["parseKind"],
        // http://usejsdoc.org/tags-mixes.html
        mixes: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-mixin.html
        mixin: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-member.html
        member: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-method.html
        method: ["parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-module.html
        module: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        func: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-method.html
        function: ["parseNamePathOptional", "ensureEnd"],
        // Synonym: http://usejsdoc.org/tags-member.html
        var: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-name.html
        name: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-namespace.html
        namespace: ["parseType", "parseNamePathOptional", "ensureEnd"],
        // http://usejsdoc.org/tags-private.html
        private: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-protected.html
        protected: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-public.html
        public: ["parseType", "parseDescription"],
        // http://usejsdoc.org/tags-readonly.html
        readonly: ["ensureEnd"],
        // http://usejsdoc.org/tags-requires.html
        requires: ["parseNamePath", "ensureEnd"],
        // http://usejsdoc.org/tags-since.html
        since: ["parseDescription"],
        // http://usejsdoc.org/tags-static.html
        static: ["ensureEnd"],
        // http://usejsdoc.org/tags-summary.html
        summary: ["parseDescription"],
        // http://usejsdoc.org/tags-this.html
        this: ["parseThis", "ensureEnd"],
        // http://usejsdoc.org/tags-todo.html
        todo: ["parseDescription"],
        // http://usejsdoc.org/tags-typedef.html
        typedef: ["parseType", "parseNamePathOptional"],
        // http://usejsdoc.org/tags-variation.html
        variation: ["parseVariation"],
        // http://usejsdoc.org/tags-version.html
        version: ["parseDescription"]
      }, w.prototype.parse = function() {
        var n, B, h, O;
        if (!this._title && !this.addError("Missing or invalid title"))
          return null;
        for (this._last = ru(this._title), this._options.range && (this._tag.range = [this._first, d.slice(0, this._last).replace(/\s*$/, "").length].map(N)), F(I, this._title) ? h = I[this._title] : h = ["parseType", "parseName", "parseDescription", "epilogue"], n = 0, B = h.length; n < B; ++n)
          if (O = h[n], !this[O]())
            return null;
        return this._tag;
      };
      function r(i) {
        var n, B, h;
        if (!gu())
          return null;
        for (n = yu(), B = new w(i, n), h = B.parse(); c < B._last; )
          b();
        return h;
      }
      function a(i) {
        var n = "", B, h;
        for (h = !0; c < U && (B = d.charCodeAt(c), !(h && B === 64)); )
          s.code.isLineTerminator(B) ? h = !0 : h && !s.code.isWhiteSpace(B) && (h = !1), n += b();
        return i ? n : n.trim();
      }
      function f(i, n) {
        var B = [], h, O, _, $, H;
        if (n === void 0 && (n = {}), typeof n.unwrap == "boolean" && n.unwrap ? d = M(i) : d = i, eu = i, n.tags)
          if (Array.isArray(n.tags))
            for (_ = {}, $ = 0, H = n.tags.length; $ < H; $++)
              typeof n.tags[$] == "string" ? _[n.tags[$]] = !0 : D.throwError('Invalid "tags" parameter: ' + n.tags);
          else
            D.throwError('Invalid "tags" parameter: ' + n.tags);
        for (U = d.length, c = 0, j = 0, su = n.recoverable, W = n.sloppy, Au = n.strict, O = a(n.preserveWhitespace); h = r(n), !!h; )
          (!_ || _.hasOwnProperty(h.title)) && B.push(h);
        return {
          description: O,
          tags: B
        };
      }
      C.parse = f;
    })(A = {}), u.version = D.VERSION, u.parse = A.parse, u.parseType = e.parseType, u.parseParamType = e.parseParamType, u.unwrapComment = M, u.Syntax = l(e.Syntax), u.Error = D.DoctrineError, u.type = {
      Syntax: u.Syntax,
      parseType: e.parseType,
      parseParamType: e.parseParamType,
      stringify: e.stringify
    };
  })();
})(kD);
const { combineParameters: an } = __STORYBOOK_MODULE_PREVIEW_API__;
var Dn = ((u) => (u.JAVASCRIPT = "JavaScript", u.FLOW = "Flow", u.TYPESCRIPT = "TypeScript", u.UNKNOWN = "Unknown", u))(Dn || {}), hn = (u) => {
  if (!u)
    return "";
  if (typeof u == "string")
    return u;
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`);
}, dn = (u) => {
  let { component: e, argTypes: D, parameters: { docs: A = {} } } = u, { extractArgTypes: s } = A, F = s && e ? s(e) : {};
  return F ? an(F, D) : D;
}, nn = "storybook/docs", yn = `${nn}/snippet-rendered`, sn = ((u) => (u.AUTO = "auto", u.CODE = "code", u.DYNAMIC = "dynamic", u))(sn || {});
export {
  lu as A,
  Wa as B,
  Ha as C,
  Cu as D,
  hn as E,
  sn as S,
  z as _,
  yn as a,
  yD as b,
  Zt as c,
  on as d,
  dn as e,
  En as f,
  An as g,
  cn as h,
  re as i,
  d0 as j,
  Ea as k,
  Fn as l,
  mt as m,
  Cn as n,
  Bn as o,
  du as p,
  ln as q,
  pn as r,
  fn as s,
  Xu as t,
  Ee as u,
  nD as v,
  Ot as w,
  ct as x,
  ft as y,
  bt as z
};
//# sourceMappingURL=index-36ec6e8e.mjs.map
