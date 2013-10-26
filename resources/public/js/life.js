;(function(){
function aa() {
  return function(a) {
    return a
  }
}
function g(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var p, r = this;
function ca(a) {
  a = a.split(".");
  for(var b = r, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function da() {
}
function t(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ea(a) {
  return"array" == t(a)
}
function fa(a) {
  var b = t(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function ga(a) {
  return"function" == t(a)
}
function ha(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function v(a, b, c) {
  v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return v.apply(null, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var pa = Date.now || function() {
  return+new Date
};
function qa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ia = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ra(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ua, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(va, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(wa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "\x26quot;"));
  return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/;
function ya(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function za(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, za) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
qa(za, Error);
za.prototype.name = "CustomError";
function Aa(a, b) {
  b.unshift(a);
  za.call(this, ra.apply(null, b));
  b.shift();
  this.Kf = a
}
qa(Aa, za);
Aa.prototype.name = "AssertionError";
function Ba(a, b) {
  throw new Aa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ca = Array.prototype, Da = Ca.indexOf ? function(a, b, c) {
  return Ca.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return u(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ea = Ca.forEach ? function(a, b, c) {
  Ca.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Fa = Ca.filter ? function(a, b, c) {
  return Ca.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
}, Ga = Ca.some ? function(a, b, c) {
  return Ca.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
function Ha(a, b) {
  var c = Da(a, b);
  0 <= c && Ca.splice.call(a, c, 1)
}
function Ia(a) {
  return Ca.concat.apply(Ca, arguments)
}
function Ka(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function La(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function Ma(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Na(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Pa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Oa.length;f++) {
      c = Oa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Qa(a, b) {
  null != a && this.append.apply(this, arguments)
}
Qa.prototype.ib = "";
Qa.prototype.set = function(a) {
  this.ib = "" + a
};
Qa.prototype.append = function(a, b, c) {
  this.ib += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.ib += arguments[d]
    }
  }
  return this
};
Qa.prototype.toString = g("ib");
var Ra;
function w(a) {
  return null != a && !1 !== a
}
function Sa(a) {
  return w(a) ? !1 : !0
}
function x(a, b) {
  return a[t(null == b ? null : b)] ? !0 : a._ ? !0 : y ? !1 : null
}
function Ta(a) {
  return null == a ? null : a.constructor
}
function z(a, b) {
  var c = Ta(b), c = w(w(c) ? c.Cd : c) ? c.Bd : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Ua(a) {
  var b = a.Bd;
  return w(b) ? b : "" + A(a)
}
function Va(a) {
  return Array.prototype.slice.call(arguments)
}
var Wa = {}, Xa = {};
function Ya(a) {
  if(a ? a.K : a) {
    return a.K(a)
  }
  var b;
  b = Ya[t(null == a ? null : a)];
  if(!b && (b = Ya._, !b)) {
    throw z("ICounted.-count", a);
  }
  return b.call(null, a)
}
function Za(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  b = Za[t(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw z("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var $a = {};
function ab(a, b) {
  if(a ? a.J : a) {
    return a.J(a, b)
  }
  var c;
  c = ab[t(null == a ? null : a)];
  if(!c && (c = ab._, !c)) {
    throw z("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var bb = {}, B = function() {
  function a(a, b, c) {
    if(a ? a.U : a) {
      return a.U(a, b, c)
    }
    var h;
    h = B[t(null == a ? null : a)];
    if(!h && (h = B._, !h)) {
      throw z("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.G : a) {
      return a.G(a, b)
    }
    var c;
    c = B[t(null == a ? null : a)];
    if(!c && (c = B._, !c)) {
      throw z("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), cb = {};
function D(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = D[t(null == a ? null : a)];
  if(!b && (b = D._, !b)) {
    throw z("ISeq.-first", a);
  }
  return b.call(null, a)
}
function E(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = E[t(null == a ? null : a)];
  if(!b && (b = E._, !b)) {
    throw z("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var db = {}, eb = {}, fb = function() {
  function a(a, b, c) {
    if(a ? a.L : a) {
      return a.L(a, b, c)
    }
    var h;
    h = fb[t(null == a ? null : a)];
    if(!h && (h = fb._, !h)) {
      throw z("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.Y : a) {
      return a.Y(a, b)
    }
    var c;
    c = fb[t(null == a ? null : a)];
    if(!c && (c = fb._, !c)) {
      throw z("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function gb(a, b) {
  if(a ? a.vc : a) {
    return a.vc(a, b)
  }
  var c;
  c = gb[t(null == a ? null : a)];
  if(!c && (c = gb._, !c)) {
    throw z("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function hb(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  d = hb[t(null == a ? null : a)];
  if(!d && (d = hb._, !d)) {
    throw z("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var ib = {}, jb = {};
function kb(a) {
  if(a ? a.Lc : a) {
    return a.Lc(a)
  }
  var b;
  b = kb[t(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw z("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function lb(a) {
  if(a ? a.xd : a) {
    return a.xd(a)
  }
  var b;
  b = lb[t(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw z("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var mb = {}, nb = {};
function ob(a, b, c) {
  if(a ? a.Mc : a) {
    return a.Mc(a, b, c)
  }
  var d;
  d = ob[t(null == a ? null : a)];
  if(!d && (d = ob._, !d)) {
    throw z("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function pb(a) {
  if(a ? a.Ce : a) {
    return a.state
  }
  var b;
  b = pb[t(null == a ? null : a)];
  if(!b && (b = pb._, !b)) {
    throw z("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var qb = {};
function rb(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  b = rb[t(null == a ? null : a)];
  if(!b && (b = rb._, !b)) {
    throw z("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var sb = {};
function tb(a, b) {
  if(a ? a.O : a) {
    return a.O(a, b)
  }
  var c;
  c = tb[t(null == a ? null : a)];
  if(!c && (c = tb._, !c)) {
    throw z("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var ub = {}, vb = function() {
  function a(a, b, c) {
    if(a ? a.W : a) {
      return a.W(a, b, c)
    }
    var h;
    h = vb[t(null == a ? null : a)];
    if(!h && (h = vb._, !h)) {
      throw z("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.V : a) {
      return a.V(a, b)
    }
    var c;
    c = vb[t(null == a ? null : a)];
    if(!c && (c = vb._, !c)) {
      throw z("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function wb(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  c = wb[t(null == a ? null : a)];
  if(!c && (c = wb._, !c)) {
    throw z("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function xb(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var b;
  b = xb[t(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw z("IHash.-hash", a);
  }
  return b.call(null, a)
}
var yb = {};
function zb(a) {
  if(a ? a.w : a) {
    return a.w(a)
  }
  var b;
  b = zb[t(null == a ? null : a)];
  if(!b && (b = zb._, !b)) {
    throw z("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Ab = {};
function G(a, b) {
  if(a ? a.Ad : a) {
    return a.Ad(0, b)
  }
  var c;
  c = G[t(null == a ? null : a)];
  if(!c && (c = G._, !c)) {
    throw z("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function Bb(a) {
  if(a ? a.He : a) {
    return null
  }
  var b;
  b = Bb[t(null == a ? null : a)];
  if(!b && (b = Bb._, !b)) {
    throw z("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Cb = {};
function Db(a, b, c) {
  if(a ? a.C : a) {
    return a.C(a, b, c)
  }
  var d;
  d = Db[t(null == a ? null : a)];
  if(!d && (d = Db._, !d)) {
    throw z("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Eb(a, b, c) {
  if(a ? a.zd : a) {
    return a.zd(a, b, c)
  }
  var d;
  d = Eb[t(null == a ? null : a)];
  if(!d && (d = Eb._, !d)) {
    throw z("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Fb(a) {
  if(a ? a.Ab : a) {
    return a.Ab(a)
  }
  var b;
  b = Fb[t(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw z("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Gb(a, b) {
  if(a ? a.La : a) {
    return a.La(a, b)
  }
  var c;
  c = Gb[t(null == a ? null : a)];
  if(!c && (c = Gb._, !c)) {
    throw z("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Hb(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  b = Hb[t(null == a ? null : a)];
  if(!b && (b = Hb._, !b)) {
    throw z("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Ib(a, b, c) {
  if(a ? a.kb : a) {
    return a.kb(a, b, c)
  }
  var d;
  d = Ib[t(null == a ? null : a)];
  if(!d && (d = Ib._, !d)) {
    throw z("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Jb(a) {
  if(a ? a.sd : a) {
    return a.sd()
  }
  var b;
  b = Jb[t(null == a ? null : a)];
  if(!b && (b = Jb._, !b)) {
    throw z("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Kb(a) {
  if(a ? a.wc : a) {
    return a.wc(a)
  }
  var b;
  b = Kb[t(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw z("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Lb(a) {
  if(a ? a.Wb : a) {
    return a.Wb(a)
  }
  var b;
  b = Lb[t(null == a ? null : a)];
  if(!b && (b = Lb._, !b)) {
    throw z("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Mb(a) {
  this.ff = a;
  this.q = 0;
  this.e = 1073741824
}
Mb.prototype.Ad = function(a, b) {
  return this.ff.append(b)
};
Mb.prototype.He = ba(null);
function Nb(a) {
  var b = new Qa, c = new Mb(b);
  a.C(a, c, Ob([Pb, !0, Qb, !0, Rb, !1, Sb, !1]));
  Bb(c);
  return"" + A(b)
}
function Tb(a, b, c, d, e) {
  this.bb = a;
  this.name = b;
  this.fb = c;
  this.Xa = d;
  this.ja = e;
  this.e = 2154168321;
  this.q = 4096
}
p = Tb.prototype;
p.C = function(a, b) {
  return G(b, this.fb)
};
p.F = function(a) {
  var b = this.Xa;
  return null != b ? b : this.Xa = a = Ub.a ? Ub.a(H.b ? H.b(a.bb) : H.call(null, a.bb), H.b ? H.b(a.name) : H.call(null, a.name)) : Ub.call(null, H.b ? H.b(a.bb) : H.call(null, a.bb), H.b ? H.b(a.name) : H.call(null, a.name))
};
p.O = function(a, b) {
  return new Tb(this.bb, this.name, this.fb, this.Xa, b)
};
p.N = g("ja");
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return fb.c(c, this, null);
      case 3:
        return fb.c(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.B = function(a, b) {
  return b instanceof Tb ? this.fb === b.fb : !1
};
p.toString = g("fb");
function I(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 8388608) ? b : a.Cf) ? !0 : !1 : !1;
  if(b) {
    return a.w(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Vb(a, 0)
  }
  if(x(yb, a)) {
    return zb(a)
  }
  if(y) {
    throw Error([A(a), A("is not ISeqable")].join(""));
  }
  return null
}
function J(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
  if(b) {
    return a.T(a)
  }
  a = I(a);
  return null == a ? null : D(a)
}
function L(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
    if(b) {
      return a.aa(a)
    }
    a = I(a);
    return null != a ? E(a) : M
  }
  return M
}
function O(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.e & 128) ? b : a.yd) ? !0 : !1 : !1;
    a = b ? a.$(a) : I(L(a))
  }
  return a
}
var Wb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : wb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(w(b.a(a, d))) {
          if(O(e)) {
            a = d, d = J(e), e = O(e)
          }else {
            return b.a(d, J(e))
          }
        }else {
          return!1
        }
      }
    }
    a.n = 2;
    a.i = function(a) {
      var b = J(a);
      a = O(a);
      var d = J(a);
      a = L(a);
      return c(b, d, a)
    };
    a.f = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.i = c.i;
  b.b = ba(!0);
  b.a = a;
  b.f = c.f;
  return b
}();
xb["null"] = ba(0);
db["null"] = !0;
mb["null"] = !0;
Xa["null"] = !0;
Ya["null"] = ba(0);
wb["null"] = function(a, b) {
  return null == b
};
sb["null"] = !0;
tb["null"] = ba(null);
qb["null"] = !0;
rb["null"] = ba(null);
Za["null"] = ba(null);
ib["null"] = !0;
Date.prototype.B = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
xb.number = function(a) {
  return Math.floor(a) % 2147483647
};
wb.number = function(a, b) {
  return a === b
};
xb["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
qb["function"] = !0;
rb["function"] = ba(null);
Wa["function"] = !0;
xb._ = function(a) {
  return ia(a)
};
var Xb = function() {
  function a(a, b, c, d) {
    for(var l = Ya(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, B.a(a, d)) : b.call(null, c, B.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Ya(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, B.a(a, l)) : b.call(null, c, B.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Ya(a);
    if(0 === c) {
      return b.r ? b.r() : b.call(null)
    }
    for(var d = B.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, B.a(a, l)) : b.call(null, d, B.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d
}(), Yb = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.r ? b.r() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d
}();
function Zb(a) {
  if(a) {
    var b = a.e & 2;
    a = (b ? b : a.Be) ? !0 : a.e ? !1 : x(Xa, a)
  }else {
    a = x(Xa, a)
  }
  return a
}
function $b(a) {
  if(a) {
    var b = a.e & 16;
    a = (b ? b : a.wd) ? !0 : a.e ? !1 : x(bb, a)
  }else {
    a = x(bb, a)
  }
  return a
}
function Vb(a, b) {
  this.d = a;
  this.l = b;
  this.q = 0;
  this.e = 166199550
}
p = Vb.prototype;
p.F = function(a) {
  return bc.b ? bc.b(a) : bc.call(null, a)
};
p.$ = function() {
  return this.l + 1 < this.d.length ? new Vb(this.d, this.l + 1) : null
};
p.J = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(null, b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Yb.m(this.d, b, this.d[this.l], this.l + 1)
};
p.W = function(a, b, c) {
  return Yb.m(this.d, b, c, this.l)
};
p.w = aa();
p.K = function() {
  return this.d.length - this.l
};
p.T = function() {
  return this.d[this.l]
};
p.aa = function() {
  return this.l + 1 < this.d.length ? new Vb(this.d, this.l + 1) : cc.r ? cc.r() : cc.call(null)
};
p.B = function(a, b) {
  return dc.a ? dc.a(a, b) : dc.call(null, a, b)
};
p.G = function(a, b) {
  var c = b + this.l;
  return c < this.d.length ? this.d[c] : null
};
p.U = function(a, b, c) {
  a = b + this.l;
  return a < this.d.length ? this.d[a] : c
};
p.Q = function() {
  return M
};
var ec = function() {
  function a(a, b) {
    return b < a.length ? new Vb(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), P = function() {
  function a(a, b) {
    return ec.a(a, b)
  }
  function b(a) {
    return ec.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
wb._ = function(a, b) {
  return a === b
};
var fc = function() {
  function a(a, b) {
    return null != a ? ab(a, b) : cc.b ? cc.b(b) : cc.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(w(e)) {
          a = b.a(a, d), d = J(e), e = O(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.n = 2;
    a.i = function(a) {
      var b = J(a);
      a = O(a);
      var d = J(a);
      a = L(a);
      return c(b, d, a)
    };
    a.f = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.i = c.i;
  b.a = a;
  b.f = c.f;
  return b
}();
function R(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 2) ? b : a.Be) ? !0 : !1 : !1;
    if(b) {
      a = a.K(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(x(Xa, a)) {
            a = Ya(a)
          }else {
            if(y) {
              a: {
                a = I(a);
                for(b = 0;;) {
                  if(Zb(a)) {
                    a = b + Ya(a);
                    break a
                  }
                  a = O(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var gc = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return I(a) ? J(a) : c
      }
      if($b(a)) {
        return B.c(a, b, c)
      }
      if(I(a)) {
        a = O(a), b -= 1
      }else {
        return y ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(I(a)) {
          return J(a)
        }
        throw Error("Index out of bounds");
      }
      if($b(a)) {
        return B.a(a, b)
      }
      if(I(a)) {
        var c = O(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(y) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), S = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 16) ? b : a.wd) ? !0 : !1 : !1;
        return b
      }()) {
        return a.U(a, Math.floor(b), c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(x(bb, a)) {
        return B.a(a, b)
      }
      if(y) {
        if(function() {
          var b;
          b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : x(cb, a) : x(cb, a);
          return b
        }()) {
          return gc.c(a, Math.floor(b), c)
        }
        throw Error([A("nth not supported on this type "), A(Ua(Ta(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(function() {
      var b;
      b = a ? ((b = a.e & 16) ? b : a.wd) ? !0 : !1 : !1;
      return b
    }()) {
      return a.G(a, Math.floor(b))
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(x(bb, a)) {
      return B.a(a, b)
    }
    if(y) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : x(cb, a) : x(cb, a);
        return b
      }()) {
        return gc.a(a, Math.floor(b))
      }
      throw Error([A("nth not supported on this type "), A(Ua(Ta(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), hc = function() {
  function a(a, b, c) {
    if(null != a) {
      var h;
      h = a ? ((h = a.e & 256) ? h : a.Kc) ? !0 : !1 : !1;
      a = h ? a.L(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : x(eb, a) ? fb.c(a, b, c) : y ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.e & 256) ? c : a.Kc) ? !0 : !1 : !1, c = c ? a.Y(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : x(eb, a) ? fb.a(a, b) : null);
    return c
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), jc = function() {
  function a(a, b, c) {
    return null != a ? hb(a, b, c) : ic.a ? ic.a(b, c) : ic.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = P(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.c(a, d, e), w(l)) {
          d = J(l), e = J(O(l)), l = O(O(l))
        }else {
          return a
        }
      }
    }
    a.n = 3;
    a.i = function(a) {
      var b = J(a);
      a = O(a);
      var d = J(a);
      a = O(a);
      var l = J(a);
      a = L(a);
      return c(b, d, l, a)
    };
    a.f = c;
    return a
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.f(b, e, f, P(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 3;
  b.i = c.i;
  b.c = a;
  b.f = c.f;
  return b
}();
function kc(a) {
  var b = ga(a);
  return b ? b : a ? w(w(null) ? null : a.Ae) ? !0 : a.Je ? !1 : x(Wa, a) : x(Wa, a)
}
var nc = function lc(b, c) {
  return function() {
    var c = kc(b);
    c && (c = b ? ((c = b.e & 262144) ? c : b.Gf) ? !0 : b.e ? !1 : x(sb, b) : x(sb, b), c = !c);
    return c
  }() ? lc(function() {
    "undefined" === typeof Ra && (Ra = {}, Ra = function(b, c, f, h) {
      this.h = b;
      this.Wc = c;
      this.nf = f;
      this.Ye = h;
      this.q = 0;
      this.e = 393217
    }, Ra.Cd = !0, Ra.Bd = "cljs.core/t5285", Ra.Ie = function(b) {
      return G(b, "cljs.core/t5285")
    }, Ra.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return mc.a ? mc.a(b.Wc, d) : mc.call(null, b.Wc, d)
      }
      b.n = 1;
      b.i = function(b) {
        var d = J(b);
        b = L(b);
        return c(d, b)
      };
      b.f = c;
      return b
    }(), Ra.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, Ra.prototype.Ae = !0, Ra.prototype.N = g("Ye"), Ra.prototype.O = function(b, c) {
      return new Ra(this.h, this.Wc, this.nf, c)
    });
    return new Ra(c, b, lc, null)
  }(), c) : tb(b, c)
};
function oc(a) {
  var b;
  b = a ? ((b = a.e & 131072) ? b : a.Fe) ? !0 : a.e ? !1 : x(qb, a) : x(qb, a);
  return b ? rb(a) : null
}
var pc = {}, qc = 0, H = function() {
  function a(a, b) {
    var c = u(a);
    (c ? b : c) ? (255 < qc && (pc = {}, qc = 0), c = pc[a], "number" !== typeof c && (c = ya(a), pc[a] = c, qc += 1)) : c = xb(a);
    return c
  }
  function b(a) {
    return c.a(a, !0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function rc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 8;
      a = (b ? b : a.xf) ? !0 : a.e ? !1 : x($a, a)
    }else {
      a = x($a, a)
    }
  }
  return a
}
function sc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 4096;
      a = (b ? b : a.Ef) ? !0 : a.e ? !1 : x(mb, a)
    }else {
      a = x(mb, a)
    }
  }
  return a
}
function tc(a) {
  if(a) {
    var b = a.e & 16777216;
    a = (b ? b : a.Df) ? !0 : a.e ? !1 : x(Ab, a)
  }else {
    a = x(Ab, a)
  }
  return a
}
function uc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 1024;
      a = (b ? b : a.Af) ? !0 : a.e ? !1 : x(ib, a)
    }else {
      a = x(ib, a)
    }
  }
  return a
}
function vc(a) {
  if(a) {
    var b = a.e & 16384;
    a = (b ? b : a.Ff) ? !0 : a.e ? !1 : x(nb, a)
  }else {
    a = x(nb, a)
  }
  return a
}
function wc(a) {
  if(a) {
    var b = a.q & 512;
    a = (b ? b : a.wf) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function xc(a) {
  var b = [];
  La(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function yc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var zc = {};
function Ac(a) {
  return!0 === a
}
function Cc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 64;
      a = (b ? b : a.Bb) ? !0 : a.e ? !1 : x(cb, a)
    }else {
      a = x(cb, a)
    }
  }
  return a
}
function Dc(a) {
  return w(a) ? !0 : !1
}
function Ec(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ta(a) === Ta(b)) {
    var c;
    c = a ? ((c = a.q & 2048) ? c : a.ud) ? !0 : !1 : !1;
    return c ? a.vd(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(y) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Fc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = Ec(S.a(a, h), S.a(b, h)), l = 0 === k;
      if(l ? h + 1 < c : l) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = R(a), h = R(b);
    return f < h ? -1 : f > h ? 1 : y ? c.m(a, b, f, 0) : null
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c
}(), Hc = function() {
  function a(a, b, c) {
    for(c = I(c);;) {
      if(c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = O(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? Gc.c ? Gc.c(a, J(c), O(c)) : Gc.call(null, a, J(c), O(c)) : a.r ? a.r() : a.call(null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}(), Gc = function() {
  function a(a, b, c) {
    var h;
    h = c ? ((h = c.e & 524288) ? h : c.Ge) ? !0 : !1 : !1;
    return h ? c.W(c, a, b) : c instanceof Array ? Yb.c(c, a, b) : "string" === typeof c ? Yb.c(c, a, b) : x(ub, c) ? vb.c(c, a, b) : y ? Hc.c(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.e & 524288) ? c : b.Ge) ? !0 : !1 : !1;
    return c ? b.V(b, a) : b instanceof Array ? Yb.a(b, a) : "string" === typeof b ? Yb.a(b, a) : x(ub, b) ? vb.a(b, a) : y ? Hc.a(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Ic(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a)
}
function Jc(a, b) {
  return Ic((a - a % b) / b)
}
var Kc = function() {
  function a(a) {
    return a * c.r()
  }
  function b() {
    return Math.random.r ? Math.random.r() : Math.random.call(null)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.b = a;
  return c
}();
function Lc(a) {
  return Ic(Kc.b(a))
}
function Mc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var A = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(w(c)) {
            var d = a.append(b.b(J(c))), e = O(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new Qa(b.b(a)), d)
    }
    a.n = 1;
    a.i = function(a) {
      var b = J(a);
      a = L(a);
      return c(b, a)
    };
    a.f = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.i = c.i;
  b.r = ba("");
  b.b = a;
  b.f = c.f;
  return b
}();
function dc(a, b) {
  return Dc(tc(b) ? function() {
    for(var c = I(a), d = I(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(Wb.a(J(c), J(d))) {
        c = O(c), d = O(d)
      }else {
        return y ? !1 : null
      }
    }
  }() : null)
}
function Ub(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function bc(a) {
  return Gc.c(function(a, c) {
    return Ub(a, H.a(c, !1))
  }, H.a(J(a), !1), O(a))
}
function Nc(a) {
  var b = 0;
  for(a = I(a);;) {
    if(a) {
      var c = J(a), b = (b + (H.b(Oc.b ? Oc.b(c) : Oc.call(null, c)) ^ H.b(Pc.b ? Pc.b(c) : Pc.call(null, c)))) % 4503599627370496;
      a = O(a)
    }else {
      return b
    }
  }
}
function Qc(a, b, c, d, e) {
  this.h = a;
  this.Fb = b;
  this.Ha = c;
  this.count = d;
  this.j = e;
  this.q = 0;
  this.e = 65937646
}
p = Qc.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function() {
  return 1 === this.count ? null : this.Ha
};
p.J = function(a, b) {
  return new Qc(this.h, b, a, this.count + 1, null)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.K = g("count");
p.T = g("Fb");
p.aa = function() {
  return 1 === this.count ? M : this.Ha
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new Qc(b, this.Fb, this.Ha, this.count, this.j)
};
p.N = g("h");
p.Q = function() {
  return M
};
function Rc(a) {
  this.h = a;
  this.q = 0;
  this.e = 65937614
}
p = Rc.prototype;
p.F = ba(0);
p.$ = ba(null);
p.J = function(a, b) {
  return new Qc(this.h, b, null, 1, null)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = ba(null);
p.K = ba(0);
p.T = ba(null);
p.aa = function() {
  return M
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new Rc(b)
};
p.N = g("h");
p.Q = aa();
var M = new Rc(null), cc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Vb) {
      b = a.d
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.T(a)), a = a.$(a)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = M;;) {
      if(0 < a) {
        var f = a - 1, e = e.J(e, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.n = 0;
  a.i = function(a) {
    a = I(a);
    return b(a)
  };
  a.f = b;
  return a
}();
function Sc(a, b, c, d) {
  this.h = a;
  this.Fb = b;
  this.Ha = c;
  this.j = d;
  this.q = 0;
  this.e = 65929452
}
p = Sc.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function() {
  return null == this.Ha ? null : I(this.Ha)
};
p.J = function(a, b) {
  return new Sc(null, b, a, this.j)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.T = g("Fb");
p.aa = function() {
  return null == this.Ha ? M : this.Ha
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new Sc(b, this.Fb, this.Ha, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(M, this.h)
};
function Q(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.e & 64) ? c : b.Bb) ? !0 : !1 : !1);
  return c ? new Sc(null, a, b, null) : new Sc(null, a, I(b), null)
}
xb.string = function(a) {
  return ya(a)
};
function T(a, b, c, d) {
  this.bb = a;
  this.name = b;
  this.Pa = c;
  this.Xa = d;
  this.e = 2153775105;
  this.q = 4096
}
p = T.prototype;
p.C = function(a, b) {
  return G(b, [A(":"), A(this.Pa)].join(""))
};
p.F = function() {
  null == this.Xa && (this.Xa = Ub(H.b(this.bb), H.b(this.name)) + 2654435769);
  return this.Xa
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.e & 256) ? e : c.Kc) ? !0 : c.e ? !1 : x(eb, c) : x(eb, c), e = e ? fb.c(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.e & 256) ? e : c.Kc) ? !0 : c.e ? !1 : x(eb, c) : x(eb, c), e = e ? fb.c(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.B = function(a, b) {
  return b instanceof T ? this.Pa === b.Pa : !1
};
p.toString = function() {
  return[A(":"), A(this.Pa)].join("")
};
var Uc = function() {
  function a(a, b) {
    return new T(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null)
  }
  function b(a) {
    return a instanceof T ? a : a instanceof Tb ? new T(null, Tc.b ? Tc.b(a) : Tc.call(null, a), Tc.b ? Tc.b(a) : Tc.call(null, a), null) : y ? new T(null, a, a, null) : null
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function U(a, b, c, d) {
  this.h = a;
  this.pb = b;
  this.v = c;
  this.j = d;
  this.q = 0;
  this.e = 32374988
}
p = U.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function(a) {
  a.w(a);
  return null == this.v ? null : O(this.v)
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
function Vc(a) {
  null != a.pb && (a.v = a.pb.r ? a.pb.r() : a.pb.call(null), a.pb = null);
  return a.v
}
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = function(a) {
  Vc(a);
  if(null == this.v) {
    return null
  }
  for(a = this.v;;) {
    if(a instanceof U) {
      a = Vc(a)
    }else {
      return this.v = a, I(this.v)
    }
  }
};
p.T = function(a) {
  a.w(a);
  return null == this.v ? null : J(this.v)
};
p.aa = function(a) {
  a.w(a);
  return null != this.v ? L(this.v) : M
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new U(b, this.pb, this.v, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(M, this.h)
};
function Wc(a, b) {
  this.tc = a;
  this.end = b;
  this.q = 0;
  this.e = 2
}
Wc.prototype.K = g("end");
Wc.prototype.add = function(a) {
  this.tc[this.end] = a;
  return this.end += 1
};
Wc.prototype.P = function() {
  var a = new Xc(this.tc, 0, this.end);
  this.tc = null;
  return a
};
function Yc(a) {
  return new Wc(Array(a), 0)
}
function Xc(a, b, c) {
  this.d = a;
  this.A = b;
  this.end = c;
  this.q = 0;
  this.e = 524306
}
p = Xc.prototype;
p.V = function(a, b) {
  return Yb.m(this.d, b, this.d[this.A], this.A + 1)
};
p.W = function(a, b, c) {
  return Yb.m(this.d, b, c, this.A)
};
p.sd = function() {
  if(this.A === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Xc(this.d, this.A + 1, this.end)
};
p.G = function(a, b) {
  return this.d[this.A + b]
};
p.U = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.A : a) ? this.d[this.A + b] : c
};
p.K = function() {
  return this.end - this.A
};
var Zc = function() {
  function a(a, b, c) {
    return new Xc(a, b, c)
  }
  function b(a, b) {
    return new Xc(a, b, a.length)
  }
  function c(a) {
    return new Xc(a, 0, a.length)
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function $c(a, b, c, d) {
  this.P = a;
  this.va = b;
  this.h = c;
  this.j = d;
  this.e = 31850732;
  this.q = 1536
}
p = $c.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function() {
  if(1 < Ya(this.P)) {
    return new $c(Jb(this.P), this.va, this.h, null)
  }
  var a = zb(this.va);
  return null == a ? null : a
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.w = aa();
p.T = function() {
  return B.a(this.P, 0)
};
p.aa = function() {
  return 1 < Ya(this.P) ? new $c(Jb(this.P), this.va, this.h, null) : null == this.va ? M : this.va
};
p.td = function() {
  return null == this.va ? null : this.va
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new $c(this.P, this.va, b, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(M, this.h)
};
p.wc = g("P");
p.Wb = function() {
  return null == this.va ? M : this.va
};
function ad(a, b) {
  return 0 === Ya(a) ? b : new $c(a, b, null, null)
}
function bd(a, b) {
  a.add(b)
}
function cd(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(J(a)), a = O(a)
    }else {
      return b
    }
  }
}
function dd(a, b) {
  if(Zb(a)) {
    return R(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? I(c) : f;
    if(w(f)) {
      c = O(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var fd = function ed(b) {
  return null == b ? null : null == O(b) ? I(J(b)) : y ? Q(J(b), ed(O(b))) : null
}, gd = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = I(a);
      return c ? wc(c) ? ad(Kb(c), d.a(Lb(c), b)) : Q(J(c), d.a(L(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new U(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new U(null, ba(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = P(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f)
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new U(null, function() {
          var c = I(a);
          return c ? wc(c) ? ad(Kb(c), q(Lb(c), b)) : Q(J(c), q(L(c), b)) : w(b) ? q(J(b), O(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.n = 2;
    a.i = function(a) {
      var c = J(a);
      a = O(a);
      var d = J(a);
      a = L(a);
      return b(c, d, a)
    };
    a.f = b;
    return a
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.f(d, h, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 2;
  d.i = e.i;
  d.r = c;
  d.b = b;
  d.a = a;
  d.f = e.f;
  return d
}(), hd = function() {
  function a(a, b, c, d) {
    return Q(a, Q(b, Q(c, d)))
  }
  function b(a, b, c) {
    return Q(a, Q(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var q = null;
      4 < arguments.length && (q = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q)
    }
    function b(a, c, d, e, f) {
      return Q(a, Q(c, Q(d, Q(e, fd(f)))))
    }
    a.n = 4;
    a.i = function(a) {
      var c = J(a);
      a = O(a);
      var d = J(a);
      a = O(a);
      var e = J(a);
      a = O(a);
      var n = J(a);
      a = L(a);
      return b(c, d, e, n, a)
    };
    a.f = b;
    return a
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return Q(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.f(c, f, h, k, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = 4;
  c.i = d.i;
  c.b = function(a) {
    return I(a)
  };
  c.a = function(a, b) {
    return Q(a, b)
  };
  c.c = b;
  c.m = a;
  c.f = d.f;
  return c
}();
function id(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.r ? a.r() : a.call(null)
  }
  c = D(d);
  var e = E(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
  }
  var d = D(e), f = E(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = D(f), h = E(f);
  if(3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e)
  }
  var f = D(h), k = E(h);
  if(4 === b) {
    return a.m ? a.m(c, d, e, f) : a.m ? a.m(c, d, e, f) : a.call(null, c, d, e, f)
  }
  h = D(k);
  k = E(k);
  if(5 === b) {
    return a.S ? a.S(c, d, e, f, h) : a.S ? a.S(c, d, e, f, h) : a.call(null, c, d, e, f, h)
  }
  a = D(k);
  var l = E(k);
  if(6 === b) {
    return a.ra ? a.ra(c, d, e, f, h, a) : a.ra ? a.ra(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a)
  }
  var k = D(l), m = E(l);
  if(7 === b) {
    return a.jb ? a.jb(c, d, e, f, h, a, k) : a.jb ? a.jb(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k)
  }
  var l = D(m), n = E(m);
  if(8 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, a, k, l) : a.Ic ? a.Ic(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l)
  }
  var m = D(n), q = E(n);
  if(9 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m) : a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m) : a.call(null, c, d, e, f, h, a, k, l, m)
  }
  var n = D(q), s = E(q);
  if(10 === b) {
    return a.xc ? a.xc(c, d, e, f, h, a, k, l, m, n) : a.xc ? a.xc(c, d, e, f, h, a, k, l, m, n) : a.call(null, c, d, e, f, h, a, k, l, m, n)
  }
  var q = D(s), C = E(s);
  if(11 === b) {
    return a.yc ? a.yc(c, d, e, f, h, a, k, l, m, n, q) : a.yc ? a.yc(c, d, e, f, h, a, k, l, m, n, q) : a.call(null, c, d, e, f, h, a, k, l, m, n, q)
  }
  var s = D(C), F = E(C);
  if(12 === b) {
    return a.zc ? a.zc(c, d, e, f, h, a, k, l, m, n, q, s) : a.zc ? a.zc(c, d, e, f, h, a, k, l, m, n, q, s) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s)
  }
  var C = D(F), N = E(F);
  if(13 === b) {
    return a.Ac ? a.Ac(c, d, e, f, h, a, k, l, m, n, q, s, C) : a.Ac ? a.Ac(c, d, e, f, h, a, k, l, m, n, q, s, C) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C)
  }
  var F = D(N), K = E(N);
  if(14 === b) {
    return a.Bc ? a.Bc(c, d, e, f, h, a, k, l, m, n, q, s, C, F) : a.Bc ? a.Bc(c, d, e, f, h, a, k, l, m, n, q, s, C, F) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F)
  }
  var N = D(K), Y = E(K);
  if(15 === b) {
    return a.Cc ? a.Cc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N) : a.Cc ? a.Cc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N)
  }
  var K = D(Y), oa = E(Y);
  if(16 === b) {
    return a.Dc ? a.Dc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K) : a.Dc ? a.Dc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K)
  }
  var Y = D(oa), Ja = E(oa);
  if(17 === b) {
    return a.Ec ? a.Ec(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y) : a.Ec ? a.Ec(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y)
  }
  var oa = D(Ja), Bc = E(Ja);
  if(18 === b) {
    return a.Fc ? a.Fc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa) : a.Fc ? a.Fc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa)
  }
  Ja = D(Bc);
  Bc = E(Bc);
  if(19 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja) : a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja)
  }
  var ac = D(Bc);
  E(Bc);
  if(20 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja, ac) : a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja, ac) : a.call(null, c, d, e, f, h, a, k, l, m, n, q, s, C, F, N, K, Y, oa, Ja, ac)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var mc = function() {
  function a(a, b, c, d, e) {
    b = hd.m(b, c, d, e);
    c = a.n;
    return a.i ? (d = dd(b, c + 1), d <= c ? id(a, d, b) : a.i(b)) : a.apply(a, cd(b))
  }
  function b(a, b, c, d) {
    b = hd.c(b, c, d);
    c = a.n;
    return a.i ? (d = dd(b, c + 1), d <= c ? id(a, d, b) : a.i(b)) : a.apply(a, cd(b))
  }
  function c(a, b, c) {
    b = hd.a(b, c);
    c = a.n;
    if(a.i) {
      var d = dd(b, c + 1);
      return d <= c ? id(a, d, b) : a.i(b)
    }
    return a.apply(a, cd(b))
  }
  function d(a, b) {
    var c = a.n;
    if(a.i) {
      var d = dd(b, c + 1);
      return d <= c ? id(a, d, b) : a.i(b)
    }
    return a.apply(a, cd(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, C) {
      var F = null;
      5 < arguments.length && (F = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, F)
    }
    function b(a, c, d, e, f, h) {
      c = Q(c, Q(d, Q(e, Q(f, fd(h)))));
      d = a.n;
      return a.i ? (e = dd(c, d + 1), e <= d ? id(a, e, c) : a.i(c)) : a.apply(a, cd(c))
    }
    a.n = 5;
    a.i = function(a) {
      var c = J(a);
      a = O(a);
      var d = J(a);
      a = O(a);
      var e = J(a);
      a = O(a);
      var f = J(a);
      a = O(a);
      var h = J(a);
      a = L(a);
      return b(c, d, e, f, h, a)
    };
    a.f = b;
    return a
  }(), e = function(e, k, l, m, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.f(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 5;
  e.i = f.i;
  e.a = d;
  e.c = c;
  e.m = b;
  e.S = a;
  e.f = f.f;
  return e
}();
function jd(a, b) {
  for(;;) {
    if(null == I(b)) {
      return!0
    }
    if(w(a.b ? a.b(J(b)) : a.call(null, J(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d
    }else {
      return y ? !1 : null
    }
  }
}
function kd(a) {
  for(var b = ld;;) {
    if(I(a)) {
      var c = b.b ? b.b(J(a)) : b.call(null, J(a));
      if(w(c)) {
        return c
      }
      a = O(a)
    }else {
      return null
    }
  }
}
function ld(a) {
  return a
}
function md(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l)
      }
      function c(b, d, e) {
        return Sa(mc.m(a, b, d, e))
      }
      b.n = 2;
      b.i = function(a) {
        var b = J(a);
        a = O(a);
        var d = J(a);
        a = L(a);
        return c(b, d, a)
      };
      b.f = c;
      return b
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return Sa(a.r ? a.r() : a.call(null));
        case 1:
          return Sa(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return Sa(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.f(b, e, P(arguments, 2))
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.n = 2;
    b.i = c.i;
    return b
  }()
}
function nd(a) {
  return function() {
    function b(b) {
      0 < arguments.length && P(Array.prototype.slice.call(arguments, 0), 0);
      return a
    }
    b.n = 0;
    b.i = function(b) {
      I(b);
      return a
    };
    b.f = function() {
      return a
    };
    return b
  }()
}
var od = function() {
  function a(a, b, c, e) {
    return new U(null, function() {
      var m = I(b), n = I(c), q = I(e);
      return(m ? n ? q : n : m) ? Q(a.c ? a.c(J(m), J(n), J(q)) : a.call(null, J(m), J(n), J(q)), d.m(a, L(m), L(n), L(q))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new U(null, function() {
      var e = I(b), m = I(c);
      return(e ? m : e) ? Q(a.a ? a.a(J(e), J(m)) : a.call(null, J(e), J(m)), d.c(a, L(e), L(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new U(null, function() {
      var c = I(b);
      if(c) {
        if(wc(c)) {
          for(var e = Kb(c), m = R(e), n = Yc(m), q = 0;;) {
            if(q < m) {
              var s = a.b ? a.b(B.a(e, q)) : a.call(null, B.a(e, q));
              n.add(s);
              q += 1
            }else {
              break
            }
          }
          return ad(n.P(), d.a(a, Lb(c)))
        }
        return Q(a.b ? a.b(J(c)) : a.call(null, J(c)), d.a(a, L(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var s = null;
      4 < arguments.length && (s = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, s)
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return mc.a(a, b)
      }, function C(a) {
        return new U(null, function() {
          var b = d.a(I, a);
          return jd(ld, b) ? Q(d.a(J, b), C(d.a(L, b))) : null
        }, null, null)
      }(fc.f(h, f, P([e, c], 0))))
    }
    a.n = 4;
    a.i = function(a) {
      var c = J(a);
      a = O(a);
      var d = J(a);
      a = O(a);
      var e = J(a);
      a = O(a);
      var f = J(a);
      a = L(a);
      return b(c, d, e, f, a)
    };
    a.f = b;
    return a
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.f(d, h, k, l, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.n = 4;
  d.i = e.i;
  d.a = c;
  d.c = b;
  d.m = a;
  d.f = e.f;
  return d
}(), qd = function pd(b, c) {
  return new U(null, function() {
    if(0 < b) {
      var d = I(c);
      return d ? Q(J(d), pd(b - 1, L(d))) : null
    }
    return null
  }, null, null)
};
function rd(a) {
  return new U(null, function() {
    var b;
    a: {
      b = 1;
      for(var c = a;;) {
        var c = I(c), d = 0 < b;
        if(w(d ? c : d)) {
          b -= 1, c = L(c)
        }else {
          b = c;
          break a
        }
      }
      b = void 0
    }
    return b
  }, null, null)
}
var sd = function() {
  function a(a, b) {
    return qd(a, c.b(b))
  }
  function b(a) {
    return new U(null, function() {
      return Q(a, c.b(a))
    }, null, null)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), td = function() {
  function a(a, b) {
    return qd(a, c.b(b))
  }
  function b(a) {
    return new U(null, function() {
      return Q(a.r ? a.r() : a.call(null), c.b(a))
    }, null, null)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), ud = function() {
  function a(a, c) {
    return new U(null, function() {
      var f = I(a), h = I(c);
      return(f ? h : f) ? Q(J(f), Q(J(h), b.a(L(f), L(h)))) : null
    }, null, null)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return new U(null, function() {
        var c = od.a(I, fc.f(e, d, P([a], 0)));
        return jd(ld, c) ? gd.a(od.a(J, c), mc.a(b, od.a(L, c))) : null
      }, null, null)
    }
    a.n = 2;
    a.i = function(a) {
      var b = J(a);
      a = O(a);
      var d = J(a);
      a = L(a);
      return c(b, d, a)
    };
    a.f = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 2;
  b.i = c.i;
  b.a = a;
  b.f = c.f;
  return b
}(), wd = function vd(b, c) {
  return new U(null, function() {
    var d = I(c);
    if(d) {
      if(wc(d)) {
        for(var e = Kb(d), f = R(e), h = Yc(f), k = 0;;) {
          if(k < f) {
            if(w(b.b ? b.b(B.a(e, k)) : b.call(null, B.a(e, k)))) {
              var l = B.a(e, k);
              h.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return ad(h.P(), vd(b, Lb(d)))
      }
      e = J(d);
      d = L(d);
      return w(b.b ? b.b(e) : b.call(null, e)) ? Q(e, vd(b, d)) : vd(b, d)
    }
    return null
  }, null, null)
};
function xd(a, b) {
  return wd(md(a), b)
}
function yd(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.q & 4) ? c : a.yf) ? !0 : !1 : !1, c ? (c = Gc.c(Gb, Fb(a), b), c = Hb(c)) : c = Gc.c(ab, a, b)) : c = Gc.c(fc, M, b);
  return c
}
function zd(a, b) {
  this.p = a;
  this.d = b
}
function Ad(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Bd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new zd(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var Dd = function Cd(b, c, d, e) {
  var f = new zd(d.p, d.d.slice()), h = b.g - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? Cd(b, c - 5, d, e) : Bd(null, c - 5, e), f.d[h] = b);
  return f
};
function Ed(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function Fd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= Ad(a)) {
      return a.X
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return Ed(b, a.g)
  }
}
var Hd = function Gd(b, c, d, e, f) {
  var h = new zd(d.p, d.d.slice());
  if(0 === c) {
    h.d[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = Gd(b, c - 5, d.d[k], e, f);
    h.d[k] = b
  }
  return h
};
function Id(a, b, c, d, e, f) {
  this.h = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.X = e;
  this.j = f;
  this.q = 4;
  this.e = 167668511
}
p = Id.prototype;
p.Ab = function() {
  return new Jd(this.g, this.shift, Kd.b ? Kd.b(this.root) : Kd.call(null, this.root), Ld.b ? Ld.b(this.X) : Ld.call(null, this.X))
};
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.Y = function(a, b) {
  return a.U(a, b, null)
};
p.L = function(a, b, c) {
  return a.U(a, b, c)
};
p.za = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return Ad(a) <= b ? (a = this.X.slice(), a[b & 31] = c, new Id(this.h, this.g, this.shift, this.root, a, null)) : new Id(this.h, this.g, this.shift, Hd(a, this.shift, this.root, b, c), this.X, null)
  }
  if(b === this.g) {
    return a.J(a, c)
  }
  if(y) {
    throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.g), A("]")].join(""));
  }
  return null
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(this, c);
      case 3:
        return this.U(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.J = function(a, b) {
  if(32 > this.g - Ad(a)) {
    var c = this.X.slice();
    c.push(b);
    return new Id(this.h, this.g + 1, this.shift, this.root, c, null)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new zd(null, Array(32));
    d.d[0] = this.root;
    var e = Bd(null, this.shift, new zd(null, this.X));
    d.d[1] = e
  }else {
    d = Dd(a, this.shift, this.root, new zd(null, this.X))
  }
  return new Id(this.h, this.g + 1, c, d, [b], null)
};
p.Lc = function(a) {
  return a.G(a, 0)
};
p.xd = function(a) {
  return a.G(a, 1)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Xb.a(a, b)
};
p.W = function(a, b, c) {
  return Xb.c(a, b, c)
};
p.w = function(a) {
  return 0 === this.g ? null : 32 > this.g ? P.b(this.X) : y ? Md.c ? Md.c(a, 0, 0) : Md.call(null, a, 0, 0) : null
};
p.K = g("g");
p.Mc = function(a, b, c) {
  return a.za(a, b, c)
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new Id(b, this.g, this.shift, this.root, this.X, this.j)
};
p.N = g("h");
p.G = function(a, b) {
  return Fd(a, b)[b & 31]
};
p.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.G(a, b) : c
};
p.Q = function() {
  return nc(Nd, this.h)
};
var Od = new zd(null, Array(32)), Nd = new Id(null, 0, 5, Od, [], 0);
function V(a) {
  var b = a.length;
  if(32 > b) {
    return new Id(null, b, 5, Od, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Fb(new Id(null, 32, 5, Od, c, null));;) {
    if(d < b) {
      c = d + 1, e = Gb(e, a[d]), d = c
    }else {
      return Hb(e)
    }
  }
}
function Pd(a) {
  return Hb(Gc.c(Gb, Fb(Nd), a))
}
function Qd(a, b, c, d, e, f) {
  this.M = a;
  this.ha = b;
  this.l = c;
  this.A = d;
  this.h = e;
  this.j = f;
  this.e = 32243948;
  this.q = 1536
}
p = Qd.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function(a) {
  return this.A + 1 < this.ha.length ? (a = Md.m ? Md.m(this.M, this.ha, this.l, this.A + 1) : Md.call(null, this.M, this.ha, this.l, this.A + 1), null == a ? null : a) : a.td(a)
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Xb.a(Rd.c ? Rd.c(this.M, this.l + this.A, R(this.M)) : Rd.call(null, this.M, this.l + this.A, R(this.M)), b)
};
p.W = function(a, b, c) {
  return Xb.c(Rd.c ? Rd.c(this.M, this.l + this.A, R(this.M)) : Rd.call(null, this.M, this.l + this.A, R(this.M)), b, c)
};
p.w = aa();
p.T = function() {
  return this.ha[this.A]
};
p.aa = function(a) {
  return this.A + 1 < this.ha.length ? (a = Md.m ? Md.m(this.M, this.ha, this.l, this.A + 1) : Md.call(null, this.M, this.ha, this.l, this.A + 1), null == a ? M : a) : a.Wb(a)
};
p.td = function() {
  var a = this.ha.length, a = this.l + a < Ya(this.M) ? Md.c ? Md.c(this.M, this.l + a, 0) : Md.call(null, this.M, this.l + a, 0) : null;
  return null == a ? null : a
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return Md.S ? Md.S(this.M, this.ha, this.l, this.A, b) : Md.call(null, this.M, this.ha, this.l, this.A, b)
};
p.Q = function() {
  return nc(Nd, this.h)
};
p.wc = function() {
  return Zc.a(this.ha, this.A)
};
p.Wb = function() {
  var a = this.ha.length, a = this.l + a < Ya(this.M) ? Md.c ? Md.c(this.M, this.l + a, 0) : Md.call(null, this.M, this.l + a, 0) : null;
  return null == a ? M : a
};
var Md = function() {
  function a(a, b, c, d, l) {
    return new Qd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Qd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Qd(a, Fd(a, b), b, c, null, null)
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.m = b;
  d.S = a;
  return d
}();
function Sd(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.q = 0;
  this.e = 32400159
}
p = Sd.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.Y = function(a, b) {
  return a.U(a, b, null)
};
p.L = function(a, b, c) {
  return a.U(a, b, c)
};
p.za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Td.S ? Td.S(d.h, jc.c(d.xa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Td.call(null, d.h, jc.c(d.xa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(this, c);
      case 3:
        return this.U(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.J = function(a, b) {
  return Td.S ? Td.S(this.h, ob(this.xa, this.end, b), this.start, this.end + 1, null) : Td.call(null, this.h, ob(this.xa, this.end, b), this.start, this.end + 1, null)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Xb.a(a, b)
};
p.W = function(a, b, c) {
  return Xb.c(a, b, c)
};
p.w = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : Q(B.a(a.xa, d), new U(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
p.K = function() {
  return this.end - this.start
};
p.Mc = function(a, b, c) {
  return a.za(a, b, c)
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return Td.S ? Td.S(b, this.xa, this.start, this.end, this.j) : Td.call(null, b, this.xa, this.start, this.end, this.j)
};
p.N = g("h");
p.G = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? Ed(b, this.end - this.start) : B.a(this.xa, this.start + b)
};
p.U = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : B.c(this.xa, this.start + b, c)
};
p.Q = function() {
  return nc(Nd, this.h)
};
function Td(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Sd) {
      var f = b.start + c, h = b.start + d;
      b = b.xa;
      c = f;
      d = h
    }else {
      var k = R(b);
      if(function() {
        var a = 0 > c;
        return a || (a = 0 > d) ? a : (a = c > k) ? a : d > k
      }()) {
        throw Error("Index out of bounds");
      }
      return new Sd(a, b, c, d, e)
    }
  }
}
var Rd = function() {
  function a(a, b, c) {
    return Td(null, a, b, c, null)
  }
  function b(a, b) {
    return c.c(a, b, R(a))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c
}();
function Kd(a) {
  return new zd({}, a.d.slice())
}
function Ld(a) {
  var b = Array(32);
  yc(a, 0, b, 0, a.length);
  return b
}
var Vd = function Ud(b, c, d, e) {
  d = b.root.p === d.p ? d : new zd(b.root.p, d.d.slice());
  var f = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[f];
    b = null != h ? Ud(b, c - 5, h, e) : Bd(b.root.p, c - 5, e)
  }
  d.d[f] = b;
  return d
};
function Jd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.X = d;
  this.e = 275;
  this.q = 88
}
p = Jd.prototype;
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.L(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.Y = function(a, b) {
  return a.U(a, b, null)
};
p.L = function(a, b, c) {
  return a.U(a, b, c)
};
p.G = function(a, b) {
  if(this.root.p) {
    return Fd(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
p.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.G(a, b) : c
};
p.K = function() {
  if(this.root.p) {
    return this.g
  }
  throw Error("count after persistent!");
};
function Wd(a, b, c, d) {
  if(a.root.p) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.g : b
    }()) {
      if(Ad(b) <= c) {
        a.X[c & 31] = d
      }else {
        var e = function h(b, e) {
          var m = a.root.p === e.p ? e : new zd(a.root.p, e.d.slice());
          if(0 === b) {
            m.d[c & 31] = d
          }else {
            var n = c >>> b & 31, q = h(b - 5, m.d[n]);
            m.d[n] = q
          }
          return m
        }.call(null, a.shift, a.root);
        a.root = e
      }
      return b
    }
    if(c === a.g) {
      return b.La(b, d)
    }
    if(y) {
      throw Error([A("Index "), A(c), A(" out of bounds for TransientVector of length"), A(a.g)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
p.kb = function(a, b, c) {
  return Wd(a, a, b, c)
};
p.La = function(a, b) {
  if(this.root.p) {
    if(32 > this.g - Ad(a)) {
      this.X[this.g & 31] = b
    }else {
      var c = new zd(this.root.p, this.X), d = Array(32);
      d[0] = b;
      this.X = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Bd(this.root.p, this.shift, c);
        this.root = new zd(this.root.p, d);
        this.shift = e
      }else {
        this.root = Vd(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
p.Ya = function(a) {
  if(this.root.p) {
    this.root.p = null;
    a = this.g - Ad(a);
    var b = Array(a);
    yc(this.X, 0, b, 0, a);
    return new Id(null, this.g, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Xd() {
  this.q = 0;
  this.e = 2097152
}
Xd.prototype.B = ba(!1);
var Yd = new Xd;
function Zd(a, b) {
  return Dc(uc(b) ? R(a) === R(b) ? jd(ld, od.a(function(a) {
    return Wb.a(hc.c(b, J(a), Yd), J(O(a)))
  }, a)) : null : null)
}
function $d(a, b) {
  var c = a.d;
  if(b instanceof T) {
    a: {
      for(var d = c.length, e = b.Pa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var h = c[f], k = h instanceof T;
        if(k ? e === h.Pa : k) {
          c = f;
          break a
        }
        if(y) {
          f += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if((d = u(b)) ? d : "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(y) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof Tb) {
        a: {
          d = c.length;
          e = b.fb;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            h = c[f];
            if((k = h instanceof Tb) ? e === h.fb : k) {
              c = f;
              break a
            }
            if(y) {
              f += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(y) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(y) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(Wb.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(y) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function ae(a, b, c) {
  this.d = a;
  this.l = b;
  this.ja = c;
  this.q = 0;
  this.e = 32374990
}
p = ae.prototype;
p.F = function(a) {
  return bc(a)
};
p.$ = function() {
  return this.l < this.d.length - 2 ? new ae(this.d, this.l + 2, this.ja) : null
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.K = function() {
  return(this.d.length - this.l) / 2
};
p.T = function() {
  return V([this.d[this.l], this.d[this.l + 1]])
};
p.aa = function() {
  return this.l < this.d.length - 2 ? new ae(this.d, this.l + 2, this.ja) : M
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new ae(this.d, this.l, b)
};
p.N = g("ja");
p.Q = function() {
  return nc(M, this.ja)
};
function be(a, b, c, d) {
  this.h = a;
  this.g = b;
  this.d = c;
  this.j = d;
  this.q = 4;
  this.e = 16123663
}
p = be.prototype;
p.Ab = function() {
  return new ce({}, this.d.length, this.d.slice())
};
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = Nc(a)
};
p.Y = function(a, b) {
  return a.L(a, b, null)
};
p.L = function(a, b, c) {
  a = $d(a, b);
  return-1 === a ? c : this.d[a + 1]
};
p.za = function(a, b, c) {
  var d = $d(a, b);
  if(-1 === d) {
    if(this.g < de) {
      d = a.d;
      a = d.length;
      for(var e = Array(a + 2), f = 0;;) {
        if(f < a) {
          e[f] = d[f], f += 1
        }else {
          break
        }
      }
      e[a] = b;
      e[a + 1] = c;
      return new be(this.h, this.g + 1, e, null)
    }
    return tb(hb(yd(ee, a), b, c), this.h)
  }
  return c === this.d[d + 1] ? a : y ? (b = this.d.slice(), b[d + 1] = c, new be(this.h, this.g, b, null)) : null
};
p.vc = function(a, b) {
  return-1 !== $d(a, b)
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.L(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.J = function(a, b) {
  return vc(b) ? a.za(a, B.a(b, 0), B.a(b, 1)) : Gc.c(ab, a, b)
};
p.toString = function() {
  return Nb(this)
};
p.w = function() {
  return 0 <= this.d.length - 2 ? new ae(this.d, 0, null) : null
};
p.K = g("g");
p.B = function(a, b) {
  return Zd(a, b)
};
p.O = function(a, b) {
  return new be(b, this.g, this.d, this.j)
};
p.N = g("h");
p.Q = function() {
  return tb(fe, this.h)
};
var fe = new be(null, 0, [], null), de = 8;
function Ob(a) {
  return new be(null, a.length / 2, a, null)
}
function ce(a, b, c) {
  this.nb = a;
  this.ab = b;
  this.d = c;
  this.q = 56;
  this.e = 258
}
p = ce.prototype;
p.kb = function(a, b, c) {
  if(w(this.nb)) {
    var d = $d(a, b);
    if(-1 === d) {
      if(this.ab + 2 <= 2 * de) {
        return this.ab += 2, this.d.push(b), this.d.push(c), a
      }
      a = ge.a ? ge.a(this.ab, this.d) : ge.call(null, this.ab, this.d);
      return Ib(a, b, c)
    }
    c !== this.d[d + 1] && (this.d[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
p.La = function(a, b) {
  if(w(this.nb)) {
    var c;
    c = b ? ((c = b.e & 2048) ? c : b.Ee) ? !0 : b.e ? !1 : x(jb, b) : x(jb, b);
    if(c) {
      return a.kb(a, Oc.b ? Oc.b(b) : Oc.call(null, b), Pc.b ? Pc.b(b) : Pc.call(null, b))
    }
    c = I(b);
    for(var d = a;;) {
      var e = J(c);
      if(w(e)) {
        c = O(c), d = d.kb(d, Oc.b ? Oc.b(e) : Oc.call(null, e), Pc.b ? Pc.b(e) : Pc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
p.Ya = function() {
  if(w(this.nb)) {
    return this.nb = !1, new be(null, Jc(this.ab, 2), this.d, null)
  }
  throw Error("persistent! called twice");
};
p.Y = function(a, b) {
  return a.L(a, b, null)
};
p.L = function(a, b, c) {
  if(w(this.nb)) {
    return a = $d(a, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
p.K = function() {
  if(w(this.nb)) {
    return Jc(this.ab, 2)
  }
  throw Error("count after persistent!");
};
function ge(a, b) {
  for(var c = Fb(ee), d = 0;;) {
    if(d < a) {
      c = Ib(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function he() {
  this.ya = !1
}
function ie(a, b) {
  var c;
  a === b ? c = !0 : (c = a === b ? !0 : ((c = a instanceof T) ? b instanceof T : c) ? a.Pa === b.Pa : !1, c = c ? !0 : y ? Wb.a(a, b) : null);
  return c
}
var je = function() {
  function a(a, b, c, h, k) {
    a = a.slice();
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.S = a;
  return c
}(), ke = function() {
  function a(a, b, c, h, k, l) {
    a = a.ob(b);
    a.d[c] = h;
    a.d[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.ob(b);
    a.d[c] = h;
    return a
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.ra = a;
  return c
}();
function le(a, b, c) {
  this.p = a;
  this.I = b;
  this.d = c
}
p = le.prototype;
p.la = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Mc(this.I & h - 1);
  if(0 === (this.I & h)) {
    var l = Mc(this.I);
    if(2 * l < this.d.length) {
      a = this.ob(a);
      b = a.d;
      f.ya = !0;
      a: {
        for(c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = me.la(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.d[e] ? me.la(a, b + 5, H.b(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new ne(a, l + 1, k)
    }
    return y ? (b = Array(2 * (l + 4)), yc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, yc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ya = !0, a = this.ob(a), a.d = b, a.I |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.la(a, b + 5, c, d, e, f), l === h ? this : ke.m(this, a, 2 * k + 1, l)) : ie(d, l) ? e === h ? this : ke.m(this, a, 2 * k + 1, e) : y ? (f.ya = !0, ke.ra(this, a, 2 * k, null, 2 * k + 1, oe.jb ? oe.jb(a, b + 5, l, h, c, d, e) : oe.call(null, a, b + 5, l, h, c, d, e))) : null
};
p.Jb = function() {
  return pe.b ? pe.b(this.d) : pe.call(null, this.d)
};
p.ob = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Mc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  yc(this.d, 0, c, 0, 2 * b);
  return new le(a, this.I, c)
};
p.ka = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Mc(this.I & f - 1);
  if(0 === (this.I & f)) {
    var k = Mc(this.I);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = me.ka(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.d[d] ? me.ka(a + 5, H.b(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ne(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    yc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    yc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ya = !0;
    return new le(null, this.I | f, a)
  }
  k = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == k ? (k = f.ka(a + 5, b, c, d, e), k === f ? this : new le(null, this.I, je.c(this.d, 2 * h + 1, k))) : ie(c, k) ? d === f ? this : new le(null, this.I, je.c(this.d, 2 * h + 1, d)) : y ? (e.ya = !0, new le(null, this.I, je.S(this.d, 2 * h, null, 2 * h + 1, oe.ra ? oe.ra(a + 5, k, f, b, c, d) : oe.call(null, a + 5, k, f, b, c, d)))) : null
};
p.Qa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.I & e)) {
    return d
  }
  var f = Mc(this.I & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.Qa(a + 5, b, c, d) : ie(c, e) ? f : y ? d : null
};
var me = new le(null, 0, []);
function ne(a, b, c) {
  this.p = a;
  this.g = b;
  this.d = c
}
p = ne.prototype;
p.la = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = ke.m(this, a, h, me.la(a, b + 5, c, d, e, f)), a.g += 1, a
  }
  b = k.la(a, b + 5, c, d, e, f);
  return b === k ? this : ke.m(this, a, h, b)
};
p.Jb = function() {
  return qe.b ? qe.b(this.d) : qe.call(null, this.d)
};
p.ob = function(a) {
  return a === this.p ? this : new ne(a, this.g, this.d.slice())
};
p.ka = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if(null == h) {
    return new ne(null, this.g + 1, je.c(this.d, f, me.ka(a + 5, b, c, d, e)))
  }
  a = h.ka(a + 5, b, c, d, e);
  return a === h ? this : new ne(null, this.g, je.c(this.d, f, a))
};
p.Qa = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Qa(a + 5, b, c, d) : d
};
function re(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(ie(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function se(a, b, c, d) {
  this.p = a;
  this.Ma = b;
  this.g = c;
  this.d = d
}
p = se.prototype;
p.la = function(a, b, c, d, e, f) {
  if(c === this.Ma) {
    b = re(this.d, this.g, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.g) {
        return a = ke.ra(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.ya = !0, a.g += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      yc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ya = !0;
      f = this.g + 1;
      a === this.p ? (this.d = b, this.g = f, a = this) : a = new se(this.p, this.Ma, f, b);
      return a
    }
    return this.d[b + 1] === e ? this : ke.m(this, a, b + 1, e)
  }
  return(new le(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).la(a, b, c, d, e, f)
};
p.Jb = function() {
  return pe.b ? pe.b(this.d) : pe.call(null, this.d)
};
p.ob = function(a) {
  if(a === this.p) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  yc(this.d, 0, b, 0, 2 * this.g);
  return new se(a, this.Ma, this.g, b)
};
p.ka = function(a, b, c, d, e) {
  return b === this.Ma ? (a = re(this.d, this.g, c), -1 === a ? (a = this.d.length, b = Array(a + 2), yc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ya = !0, new se(null, this.Ma, this.g + 1, b)) : Wb.a(this.d[a], d) ? this : new se(null, this.Ma, this.g, je.c(this.d, a + 1, d))) : (new le(null, 1 << (this.Ma >>> a & 31), [null, this])).ka(a, b, c, d, e)
};
p.Qa = function(a, b, c, d) {
  a = re(this.d, this.g, c);
  return 0 > a ? d : ie(c, this.d[a]) ? this.d[a + 1] : y ? d : null
};
var oe = function() {
  function a(a, b, c, h, k, l, m) {
    var n = H.b(c);
    if(n === k) {
      return new se(null, n, 2, [c, h, l, m])
    }
    var q = new he;
    return me.la(a, b, n, c, h, q).la(a, b, k, l, m, q)
  }
  function b(a, b, c, h, k, l) {
    var m = H.b(b);
    if(m === h) {
      return new se(null, m, 2, [b, c, k, l])
    }
    var n = new he;
    return me.ka(a, m, b, c, n).ka(a, h, k, l, n)
  }
  var c = null, c = function(c, e, f, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ra = b;
  c.jb = a;
  return c
}();
function te(a, b, c, d, e) {
  this.h = a;
  this.na = b;
  this.l = c;
  this.v = d;
  this.j = e;
  this.q = 0;
  this.e = 32374860
}
p = te.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.T = function() {
  return null == this.v ? V([this.na[this.l], this.na[this.l + 1]]) : J(this.v)
};
p.aa = function() {
  return null == this.v ? pe.c ? pe.c(this.na, this.l + 2, null) : pe.call(null, this.na, this.l + 2, null) : pe.c ? pe.c(this.na, this.l, O(this.v)) : pe.call(null, this.na, this.l, O(this.v))
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new te(b, this.na, this.l, this.v, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(M, this.h)
};
var pe = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new te(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(w(h) && (h = h.Jb(), w(h))) {
            return new te(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new te(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.c(a, 0, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c
}();
function ue(a, b, c, d, e) {
  this.h = a;
  this.na = b;
  this.l = c;
  this.v = d;
  this.j = e;
  this.q = 0;
  this.e = 32374860
}
p = ue.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.T = function() {
  return J(this.v)
};
p.aa = function() {
  return qe.m ? qe.m(null, this.na, this.l, O(this.v)) : qe.call(null, null, this.na, this.l, O(this.v))
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new ue(b, this.na, this.l, this.v, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(M, this.h)
};
var qe = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(w(k) && (k = k.Jb(), w(k))) {
            return new ue(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new ue(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.m(null, a, 0, null)
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.m = a;
  return c
}();
function ve(a, b, c, d, e, f) {
  this.h = a;
  this.g = b;
  this.root = c;
  this.ba = d;
  this.ga = e;
  this.j = f;
  this.q = 4;
  this.e = 16123663
}
p = ve.prototype;
p.Ab = function() {
  return new we({}, this.root, this.g, this.ba, this.ga)
};
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = Nc(a)
};
p.Y = function(a, b) {
  return a.L(a, b, null)
};
p.L = function(a, b, c) {
  return null == b ? this.ba ? this.ga : c : null == this.root ? c : y ? this.root.Qa(0, H.b(b), b, c) : null
};
p.za = function(a, b, c) {
  if(null == b) {
    var d = this.ba;
    return(d ? c === this.ga : d) ? a : new ve(this.h, this.ba ? this.g : this.g + 1, this.root, !0, c, null)
  }
  d = new he;
  c = (null == this.root ? me : this.root).ka(0, H.b(b), b, c, d);
  return c === this.root ? a : new ve(this.h, d.ya ? this.g + 1 : this.g, c, this.ba, this.ga, null)
};
p.vc = function(a, b) {
  return null == b ? this.ba : null == this.root ? !1 : y ? this.root.Qa(0, H.b(b), b, zc) !== zc : null
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.L(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.J = function(a, b) {
  return vc(b) ? a.za(a, B.a(b, 0), B.a(b, 1)) : Gc.c(ab, a, b)
};
p.toString = function() {
  return Nb(this)
};
p.w = function() {
  if(0 < this.g) {
    var a = null != this.root ? this.root.Jb() : null;
    return this.ba ? Q(V([null, this.ga]), a) : a
  }
  return null
};
p.K = g("g");
p.B = function(a, b) {
  return Zd(a, b)
};
p.O = function(a, b) {
  return new ve(b, this.g, this.root, this.ba, this.ga, this.j)
};
p.N = g("h");
p.Q = function() {
  return tb(ee, this.h)
};
var ee = new ve(null, 0, null, !1, null, 0);
function we(a, b, c, d, e) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.ba = d;
  this.ga = e;
  this.q = 56;
  this.e = 258
}
p = we.prototype;
p.kb = function(a, b, c) {
  return xe(a, b, c)
};
p.La = function(a, b) {
  var c;
  a: {
    if(a.p) {
      c = b ? ((c = b.e & 2048) ? c : b.Ee) ? !0 : b.e ? !1 : x(jb, b) : x(jb, b);
      if(c) {
        c = xe(a, Oc.b ? Oc.b(b) : Oc.call(null, b), Pc.b ? Pc.b(b) : Pc.call(null, b));
        break a
      }
      c = I(b);
      for(var d = a;;) {
        var e = J(c);
        if(w(e)) {
          c = O(c), d = xe(d, Oc.b ? Oc.b(e) : Oc.call(null, e), Pc.b ? Pc.b(e) : Pc.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
p.Ya = function(a) {
  if(a.p) {
    a.p = null, a = new ve(null, a.count, a.root, a.ba, a.ga, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
p.Y = function(a, b) {
  return null == b ? this.ba ? this.ga : null : null == this.root ? null : this.root.Qa(0, H.b(b), b)
};
p.L = function(a, b, c) {
  return null == b ? this.ba ? this.ga : c : null == this.root ? c : this.root.Qa(0, H.b(b), b, c)
};
p.K = function() {
  if(this.p) {
    return this.count
  }
  throw Error("count after persistent!");
};
function xe(a, b, c) {
  if(a.p) {
    if(null == b) {
      a.ga !== c && (a.ga = c), a.ba || (a.count += 1, a.ba = !0)
    }else {
      var d = new he;
      b = (null == a.root ? me : a.root).la(a.p, 0, H.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ya && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var ic = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = I(a), e = Fb(ee);;) {
      if(b) {
        a = O(O(b));
        var f = J(b), b = J(O(b)), e = Ib(e, f, b), b = a
      }else {
        return Hb(e)
      }
    }
  }
  a.n = 0;
  a.i = function(a) {
    a = I(a);
    return b(a)
  };
  a.f = b;
  return a
}(), ye = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new be(null, Jc(R(a), 2), mc.a(Va, a), null)
  }
  a.n = 0;
  a.i = function(a) {
    a = I(a);
    return b(a)
  };
  a.f = b;
  return a
}();
function ze(a, b) {
  this.ma = a;
  this.ja = b;
  this.q = 0;
  this.e = 32374988
}
p = ze.prototype;
p.F = function(a) {
  return bc(a)
};
p.$ = function() {
  var a = this.ma;
  if(a) {
    var b = a.e & 128, a = (b ? b : a.yd) ? !0 : a.e ? !1 : x(db, a)
  }else {
    a = x(db, a)
  }
  a = a ? this.ma.$(this.ma) : O(this.ma);
  return null == a ? null : new ze(a, this.ja)
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Hc.a(b, a)
};
p.W = function(a, b, c) {
  return Hc.c(b, c, a)
};
p.w = aa();
p.T = function() {
  var a = this.ma.T(this.ma);
  return a.Lc(a)
};
p.aa = function() {
  var a = this.ma;
  if(a) {
    var b = a.e & 128, a = (b ? b : a.yd) ? !0 : a.e ? !1 : x(db, a)
  }else {
    a = x(db, a)
  }
  a = a ? this.ma.$(this.ma) : O(this.ma);
  return null != a ? new ze(a, this.ja) : M
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new ze(this.ma, b)
};
p.N = g("ja");
p.Q = function() {
  return nc(M, this.ja)
};
function Oc(a) {
  return kb(a)
}
function Pc(a) {
  return lb(a)
}
var Ae = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return w(kd(a)) ? Gc.a(function(a, b) {
      return fc.a(w(a) ? a : fe, b)
    }, a) : null
  }
  a.n = 0;
  a.i = function(a) {
    a = I(a);
    return b(a)
  };
  a.f = b;
  return a
}();
function Be(a, b, c) {
  this.h = a;
  this.rb = b;
  this.j = c;
  this.q = 4;
  this.e = 15077647
}
p = Be.prototype;
p.Ab = function() {
  return new Ce(Fb(this.rb))
};
p.F = function(a) {
  var b = this.j;
  if(null != b) {
    return b
  }
  a: {
    b = 0;
    for(a = I(a);;) {
      if(a) {
        var c = J(a), b = (b + H.b(c)) % 4503599627370496;
        a = O(a)
      }else {
        break a
      }
    }
    b = void 0
  }
  return this.j = b
};
p.Y = function(a, b) {
  return a.L(a, b, null)
};
p.L = function(a, b, c) {
  return w(gb(this.rb, b)) ? b : c
};
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Y(this, c);
      case 3:
        return this.L(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.J = function(a, b) {
  return new Be(this.h, jc.c(this.rb, b, null), null)
};
p.toString = function() {
  return Nb(this)
};
p.w = function() {
  var a = I(this.rb);
  return a ? new ze(a, null) : null
};
p.K = function() {
  return Ya(this.rb)
};
p.B = function(a, b) {
  var c = sc(b);
  return c ? (c = R(a) === R(b)) ? jd(function(b) {
    return hc.c(a, b, zc) === zc ? !1 : !0
  }, b) : c : c
};
p.O = function(a, b) {
  return new Be(b, this.rb, this.j)
};
p.N = g("h");
p.Q = function() {
  return nc(De, this.h)
};
var De = new Be(null, fe, 0);
function Ce(a) {
  this.gb = a;
  this.e = 259;
  this.q = 136
}
p = Ce.prototype;
p.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return fb.c(this.gb, c, zc) === zc ? null : c;
      case 3:
        return fb.c(this.gb, c, zc) === zc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
p.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
p.Y = function(a, b) {
  return a.L(a, b, null)
};
p.L = function(a, b, c) {
  return fb.c(this.gb, b, zc) === zc ? c : b
};
p.K = function() {
  return R(this.gb)
};
p.La = function(a, b) {
  this.gb = Ib(this.gb, b, null);
  return a
};
p.Ya = function() {
  return new Be(null, Hb(this.gb), null)
};
function Ee(a) {
  a = I(a);
  if(null == a) {
    return De
  }
  if(a instanceof Vb) {
    a = a.d;
    a: {
      for(var b = 0, c = Fb(De);;) {
        if(b < a.length) {
          var d = b + 1, c = c.La(c, a[b]), b = d
        }else {
          a = c;
          break a
        }
      }
      a = void 0
    }
    return a.Ya(a)
  }
  if(y) {
    for(d = Fb(De);;) {
      if(null != a) {
        b = a.$(a), d = d.La(d, a.T(a)), a = b
      }else {
        return d.Ya(d)
      }
    }
  }else {
    return null
  }
}
function Tc(a) {
  var b;
  b = a ? ((b = a.q & 4096) ? b : a.Bf) ? !0 : !1 : !1;
  if(b) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function Fe(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.q = 0;
  this.e = 32375006
}
p = Fe.prototype;
p.F = function(a) {
  var b = this.j;
  return null != b ? b : this.j = a = bc(a)
};
p.$ = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Fe(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Fe(this.h, this.start + this.step, this.end, this.step, null) : null
};
p.J = function(a, b) {
  return Q(b, a)
};
p.toString = function() {
  return Nb(this)
};
p.V = function(a, b) {
  return Xb.a(a, b)
};
p.W = function(a, b, c) {
  return Xb.c(a, b, c)
};
p.w = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
p.K = function(a) {
  return Sa(a.w(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
p.T = g("start");
p.aa = function(a) {
  return null != a.w(a) ? new Fe(this.h, this.start + this.step, this.end, this.step, null) : M
};
p.B = function(a, b) {
  return dc(a, b)
};
p.O = function(a, b) {
  return new Fe(b, this.start, this.end, this.step, this.j)
};
p.N = g("h");
p.G = function(a, b) {
  if(b < a.K(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
p.U = function(a, b, c) {
  c = b < a.K(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
p.Q = function() {
  return nc(M, this.h)
};
var Ge = function() {
  function a(a, b, c) {
    return new Fe(null, a, b, c, null)
  }
  function b(a, b) {
    return e.c(a, b, 1)
  }
  function c(a) {
    return e.c(0, a, 1)
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.r = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e
}(), He = function() {
  function a(a, b) {
    for(;;) {
      var c = I(b);
      if(w(c ? 0 < a : c)) {
        var c = a - 1, h = O(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(I(a)) {
        a = O(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}(), Ie = function() {
  function a(a, b) {
    He.a(a, b);
    return b
  }
  function b(a) {
    He.b(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
function W(a, b, c, d, e, f, h) {
  G(a, c);
  I(h) && (b.c ? b.c(J(h), a, f) : b.call(null, J(h), a, f));
  c = I(O(h));
  h = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = h.G(h, l);
      G(a, d);
      b.c ? b.c(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = I(c)) {
        h = c, wc(h) ? (c = Kb(h), l = Lb(h), h = c, k = R(c), c = l) : (c = J(h), G(a, d), b.c ? b.c(c, a, f) : b.call(null, c, a, f), c = O(h), h = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return G(a, e)
}
var Je = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = I(b), f = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = f.G(f, k);
        G(a, l);
        k += 1
      }else {
        if(e = I(e)) {
          f = e, wc(f) ? (e = Kb(f), h = Lb(f), f = e, l = R(e), e = h, h = l) : (l = J(f), G(a, l), e = O(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.n = 1;
  a.i = function(a) {
    var d = J(a);
    a = L(a);
    return b(d, a)
  };
  a.f = b;
  return a
}(), Ke = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Le(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ke[a]
  })), A('"')].join("")
}
var X = function Me(b, c, d) {
  if(null == b) {
    return G(c, "nil")
  }
  if(void 0 === b) {
    return G(c, "#\x3cundefined\x3e")
  }
  if(y) {
    w(function() {
      var c = hc.a(d, Rb);
      return w(c) ? (c = b ? ((c = b.e & 131072) ? c : b.Fe) ? !0 : b.e ? !1 : x(qb, b) : x(qb, b), w(c) ? oc(b) : c) : c
    }()) && (G(c, "^"), Me(oc(b), c, d), G(c, " "));
    if(null == b) {
      return G(c, "nil")
    }
    if(b.Cd) {
      return b.Ie(c)
    }
    if(function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.R) ? !0 : !1 : !1;
      return c
    }()) {
      return b.C(b, c, d)
    }
    if(function() {
      var c = Ta(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return G(c, "" + A(b))
    }
    if(b instanceof Array) {
      return W(c, Me, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(u(b)) {
      return w(Qb.call(null, d)) ? G(c, Le(b)) : G(c, b)
    }
    if(kc(b)) {
      return Je.f(c, P(["#\x3c", "" + A(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + A(b);;) {
          if(R(d) < c) {
            d = [A("0"), A(d)].join("")
          }else {
            return d
          }
        }
      };
      return Je.f(c, P(['#inst "', "" + A(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return w(b instanceof RegExp) ? Je.f(c, P(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.R) ? !0 : b.e ? !1 : x(Cb, b) : x(Cb, b);
      return c
    }() ? Db(b, c, d) : y ? Je.f(c, P(["#\x3c", "" + A(b), "\x3e"], 0)) : null
  }
  return null
}, Ne = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Ob([Pb, !0, Qb, !0, Rb, !1, Sb, !1]), e = null == a;
    if(e ? e : Sa(I(a))) {
      b = ""
    }else {
      var e = A, f = new Qa, h = new Mb(f);
      a: {
        X(J(a), h, b);
        a = I(O(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var n = k.G(k, m);
            G(h, " ");
            X(n, h, b);
            m += 1
          }else {
            if(a = I(a)) {
              k = a, wc(k) ? (a = Kb(k), l = Lb(k), k = a, n = R(a), a = l, l = n) : (n = J(k), G(h, " "), X(n, h, b), a = O(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      Bb(h);
      b = "" + e(f)
    }
    return b
  }
  a.n = 0;
  a.i = function(a) {
    a = I(a);
    return b(a)
  };
  a.f = b;
  return a
}();
ze.prototype.R = !0;
ze.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Vb.prototype.R = !0;
Vb.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Sd.prototype.R = !0;
Sd.prototype.C = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
$c.prototype.R = !0;
$c.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
be.prototype.R = !0;
be.prototype.C = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
U.prototype.R = !0;
U.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
te.prototype.R = !0;
te.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Qd.prototype.R = !0;
Qd.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
ve.prototype.R = !0;
ve.prototype.C = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Be.prototype.R = !0;
Be.prototype.C = function(a, b, c) {
  return W(b, X, "#{", " ", "}", c, a)
};
Id.prototype.R = !0;
Id.prototype.C = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
Qc.prototype.R = !0;
Qc.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
ae.prototype.R = !0;
ae.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Rc.prototype.R = !0;
Rc.prototype.C = function(a, b) {
  return G(b, "()")
};
Sc.prototype.R = !0;
Sc.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Fe.prototype.R = !0;
Fe.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
ue.prototype.R = !0;
ue.prototype.C = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Id.prototype.ud = !0;
Id.prototype.vd = function(a, b) {
  return Fc.a(a, b)
};
Sd.prototype.ud = !0;
Sd.prototype.vd = function(a, b) {
  return Fc.a(a, b)
};
function Oe(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.lf = c;
  this.mf = d;
  this.e = 2153938944;
  this.q = 2
}
p = Oe.prototype;
p.F = function(a) {
  return ia(a)
};
p.zd = function(a, b, c) {
  for(var d = I(this.mf), e = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = e.G(e, h), l = S.c(k, 0, null), k = S.c(k, 1, null);
      k.m ? k.m(l, a, b, c) : k.call(null, l, a, b, c);
      h += 1
    }else {
      if(d = I(d)) {
        wc(d) ? (e = Kb(d), d = Lb(d), l = e, f = R(e), e = l) : (e = J(d), l = S.c(e, 0, null), k = S.c(e, 1, null), k.m ? k.m(l, a, b, c) : k.call(null, l, a, b, c), d = O(d), e = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
p.C = function(a, b, c) {
  G(b, "#\x3cAtom: ");
  X(this.state, b, c);
  return G(b, "\x3e")
};
p.N = g("h");
p.Ce = g("state");
p.B = function(a, b) {
  return a === b
};
var Qe = function() {
  function a(a) {
    return new Oe(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = Cc(c) ? mc.a(ic, c) : c, e = hc.a(d, Pe), d = hc.a(d, Rb);
      return new Oe(a, d, e, null)
    }
    a.n = 1;
    a.i = function(a) {
      var c = J(a);
      a = L(a);
      return b(c, a)
    };
    a.f = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.i = c.i;
  b.b = a;
  b.f = c.f;
  return b
}();
function Re(a, b) {
  var c = a.lf;
  if(w(c) && !w(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(Ne.f(P([cc(new Tb(null, "validate", "validate", 1233162959, null), new Tb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Eb(a, c, b);
  return b
}
var Se = function() {
  function a(a, b, c, d, e) {
    return Re(a, b.m ? b.m(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return Re(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return Re(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return Re(a, b.b ? b.b(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, C) {
      var F = null;
      5 < arguments.length && (F = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, F)
    }
    function b(a, c, d, e, f, h) {
      return Re(a, mc.f(c, a.state, d, e, f, P([h], 0)))
    }
    a.n = 5;
    a.i = function(a) {
      var c = J(a);
      a = O(a);
      var d = J(a);
      a = O(a);
      var e = J(a);
      a = O(a);
      var f = J(a);
      a = O(a);
      var h = J(a);
      a = L(a);
      return b(c, d, e, f, h, a)
    };
    a.f = b;
    return a
  }(), e = function(e, k, l, m, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.f(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = 5;
  e.i = f.i;
  e.a = d;
  e.c = c;
  e.m = b;
  e.S = a;
  e.f = f.f;
  return e
}(), Te = {};
function Ue(a, b) {
  if(a ? a.De : a) {
    return a.De(a, b)
  }
  var c;
  c = Ue[t(null == a ? null : a)];
  if(!c && (c = Ue._, !c)) {
    throw z("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var We = function() {
  function a(a) {
    return b.f(a, P([Ob([Ve, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? w(w(null) ? null : a.zf) || (a.Je ? 0 : x(Te, a)) : x(Te, a)) {
        return Ue(a, mc.a(ye, c))
      }
      if(I(c)) {
        var d = Cc(c) ? mc.a(ic, c) : c, e = hc.a(d, Ve);
        return function(a, b, c, d) {
          return function F(e) {
            return Cc(e) ? Ie.b(od.a(F, e)) : rc(e) ? yd(Za(e), od.a(F, e)) : e instanceof Array ? Pd(od.a(F, e)) : Ta(e) === Object ? yd(fe, function() {
              return function(a, b, c, d) {
                return function ac(f) {
                  return new U(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = I(f);
                        if(a) {
                          if(wc(a)) {
                            var b = Kb(a), c = R(b), h = Yc(c);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = B.a(b, k), l = V([d.b ? d.b(l) : d.call(null, l), F(e[l])]);
                                  h.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? ad(h.P(), ac(Lb(a))) : ad(h.P(), null)
                          }
                          h = J(a);
                          return Q(V([d.b ? d.b(h) : d.call(null, h), F(e[h])]), ac(L(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(xc(e))
            }()) : y ? e : null
          }
        }(c, d, e, w(e) ? Uc : A)(a)
      }
      return null
    }
    a.n = 1;
    a.i = function(a) {
      var c = J(a);
      a = L(a);
      return b(c, a)
    };
    a.f = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.n = 1;
  b.i = c.i;
  b.b = a;
  b.f = c.f;
  return b
}(), Kc = function() {
  function a(a) {
    return(Math.random.r ? Math.random.r() : Math.random.call(null)) * a
  }
  function b() {
    return c.b(1)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.b = a;
  return c
}(), Lc = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.r ? Math.random.r() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.r ? Math.random.r() : Math.random.call(null)) * a)
};
var Sb = new T(null, "dup", "dup"), Xe = new T(null, "generation", "generation"), Ye = new T(null, "status", "status"), Ze = new T(null, "handle", "handle"), $e = new T(null, "y", "y"), af = new T(null, "x", "x"), Ve = new T(null, "keywordize-keys", "keywordize-keys"), bf = new T(null, "peer_uri", "peer_uri"), Pb = new T(null, "flush-on-newline", "flush-on-newline"), cf = new T(null, "board", "board"), df = new T(null, "stacktrace", "stacktrace"), ef = new T(null, "success", "success"), ff = new T(null, 
"send-result", "send-result"), y = new T(null, "else", "else"), Qb = new T(null, "readably", "readably"), Pe = new T(null, "validator", "validator"), Rb = new T(null, "meta", "meta"), gf = new T(null, "evaluate-javascript", "evaluate-javascript"), hf = new T(null, "exception", "exception"), jf = new T(null, "value", "value");
function kf(a) {
  var b = R(a), c = R(J(a)), d = function(a, b) {
    return function(c) {
      var d = S.c(c, 0, null), e = S.c(c, 0, null), n = S.c(c, 1, null);
      return xd(function(a, b, c, d, e) {
        return function(a) {
          return Wb.a(a, V([d, e]))
        }
      }(c, d, c, e, n, a, b), function() {
        return function(a, b, c, d, e, f, h) {
          return function Ja(k) {
            return new U(null, function(a, b, c, d, e, f, h) {
              return function() {
                for(var l = k;;) {
                  var m = I(l);
                  if(m) {
                    var n = m, q = J(n);
                    if(m = I(function(a, b, c, d, e, f, h, k, l, m, n) {
                      return function gg(q) {
                        return new U(null, function(a, b) {
                          return function() {
                            for(;;) {
                              var a = I(q);
                              if(a) {
                                if(wc(a)) {
                                  var c = Kb(a), d = R(c), e = Yc(d);
                                  a: {
                                    for(var f = 0;;) {
                                      if(f < d) {
                                        var h = B.a(c, f), h = V([b, h]);
                                        e.add(h);
                                        f += 1
                                      }else {
                                        c = !0;
                                        break a
                                      }
                                    }
                                    c = void 0
                                  }
                                  return c ? ad(e.P(), gg(Lb(a))) : ad(e.P(), null)
                                }
                                e = J(a);
                                return Q(V([b, e]), gg(L(a)))
                              }
                              return null
                            }
                          }
                        }(a, b, c, d, e, f, h, k, l, m, n), null, null)
                      }
                    }(l, q, n, m, a, b, c, d, e, f, h)(wd(Ee(Ge.b(h)), Ge.a(e - 1, 2 + e))))) {
                      return gd.a(m, Ja(L(l)))
                    }
                    l = L(l)
                  }else {
                    return null
                  }
                }
              }
            }(a, b, c, d, e, f, h), null, null)
          }
        }(c, d, c, e, n, a, b)(wd(Ee(Ge.b(a)), Ge.a(e - 1, 2 + e)))
      }())
    }
  }(b, c), e = function() {
    return function(b) {
      S.c(b, 0, null);
      var c = S.c(b, 0, null);
      b = S.c(b, 1, null);
      return S.a(S.a(a, c), b)
    }
  }(b, c, d);
  return od.a(function(a, b, c, d, e) {
    return function(n) {
      return od.a(e, function() {
        return function(a, b, c, d, e) {
          return function Y(f) {
            return new U(null, function() {
              return function() {
                for(;;) {
                  var a = I(f);
                  if(a) {
                    if(wc(a)) {
                      var b = Kb(a), c = R(b), d = Yc(c);
                      a: {
                        for(var e = 0;;) {
                          if(e < c) {
                            var h = B.a(b, e), h = V([n, h]);
                            d.add(h);
                            e += 1
                          }else {
                            b = !0;
                            break a
                          }
                        }
                        b = void 0
                      }
                      return b ? ad(d.P(), Y(Lb(a))) : ad(d.P(), null)
                    }
                    d = J(a);
                    return Q(V([n, d]), Y(L(a)))
                  }
                  return null
                }
              }
            }(a, b, c, d, e), null, null)
          }
        }(a, b, c, d, e)(Ge.b(b))
      }())
    }
  }(b, c, d, e, function(a, b, c, d) {
    return function(a) {
      var b = R(wd(Ac, od.a(d, c(a)))), e = Wb.a(3, b);
      if(e) {
        return e
      }
      a = d(a);
      return w(a) ? Wb.a(2, b) : a
    }
  }(b, c, d, e)), Ge.b(b))
}
function lf(a, b) {
  return function d(a) {
    return new U(null, function() {
      for(;;) {
        var f = I(a);
        if(f) {
          var h = f;
          if(wc(h)) {
            var k = Kb(h), l = R(k), m = Yc(l);
            return function() {
              for(var a = 0;;) {
                if(a < l) {
                  var d = B.a(k, a);
                  bd(m, qd(b, td.b(function() {
                    return function() {
                      return 0 === Lc(5)
                    }
                  }(a, d, k, l, m, h, f))));
                  a += 1
                }else {
                  return!0
                }
              }
            }() ? ad(m.P(), d(Lb(h))) : ad(m.P(), null)
          }
          var n = J(h);
          return Q(qd(b, td.b(function() {
            return function() {
              return 0 === Lc(5)
            }
          }(n, h, f))), d(L(h)))
        }
        return null
      }
    }, null, null)
  }(Ge.b(a))
}
;function mf() {
  0 != nf && (this.Hf = Error().stack, of[ia(this)] = this)
}
var nf = 0, of = {};
mf.prototype.mb = !1;
mf.prototype.Pc = function() {
  if(!this.mb && (this.mb = !0, this.u(), 0 != nf)) {
    var a = ia(this);
    delete of[a]
  }
};
mf.prototype.u = function() {
  if(this.he) {
    for(;this.he.length;) {
      this.he.shift()()
    }
  }
};
function pf(a) {
  a && "function" == typeof a.Pc && a.Pc()
}
;var qf, rf, sf, tf;
function uf() {
  return r.navigator ? r.navigator.userAgent : null
}
tf = sf = rf = qf = !1;
var vf;
if(vf = uf()) {
  var wf = r.navigator;
  qf = 0 == vf.indexOf("Opera");
  rf = !qf && -1 != vf.indexOf("MSIE");
  sf = !qf && -1 != vf.indexOf("WebKit");
  tf = !qf && !sf && "Gecko" == wf.product
}
var xf = qf, yf = rf, zf = tf, Af = sf, Bf = r.navigator, Cf = -1 != (Bf && Bf.platform || "").indexOf("Mac");
function Df() {
  var a = r.document;
  return a ? a.documentMode : void 0
}
var Ef;
a: {
  var Ff = "", Gf;
  if(xf && r.opera) {
    var Hf = r.opera.version, Ff = "function" == typeof Hf ? Hf() : Hf
  }else {
    if(zf ? Gf = /rv\:([^\);]+)(\)|;)/ : yf ? Gf = /MSIE\s+([^\);]+)(\)|;)/ : Af && (Gf = /WebKit\/(\S+)/), Gf) {
      var If = Gf.exec(uf()), Ff = If ? If[1] : ""
    }
  }
  if(yf) {
    var Jf = Df();
    if(Jf > parseFloat(Ff)) {
      Ef = String(Jf);
      break a
    }
  }
  Ef = Ff
}
var Kf = {};
function Mf(a) {
  var b;
  if(!(b = Kf[a])) {
    b = 0;
    for(var c = String(Ef).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if(0 == n[0].length && 0 == q[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == q[2].length) ? -1 : (0 == n[2].length) > (0 == q[2].length) ? 1 : 0) || (n[2] < q[2] ? -1 : n[2] > q[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Kf[a] = 0 <= b
  }
  return b
}
var Nf = r.document, Of = Nf && yf ? Df() || ("CSS1Compat" == Nf.compatMode ? parseInt(Ef, 10) : 5) : void 0;
var Pf = !yf || yf && 9 <= Of, Qf = yf && !Mf("9");
!Af || Mf("528");
zf && Mf("1.9b") || yf && Mf("8") || xf && Mf("9.5") || Af && Mf("528");
zf && !Mf("8") || yf && Mf("9");
function Rf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
p = Rf.prototype;
p.u = function() {
};
p.Pc = function() {
};
p.vb = !1;
p.defaultPrevented = !1;
p.ic = !0;
p.preventDefault = function() {
  this.defaultPrevented = !0;
  this.ic = !1
};
function Sf(a) {
  Sf[" "](a);
  return a
}
Sf[" "] = da;
function Tf(a, b) {
  try {
    return Sf(a[b]), !0
  }catch(c) {
  }
  return!1
}
;function Uf(a, b) {
  a && this.ac(a, b)
}
qa(Uf, Rf);
p = Uf.prototype;
p.target = null;
p.relatedTarget = null;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = !1;
p.altKey = !1;
p.shiftKey = !1;
p.metaKey = !1;
p.af = !1;
p.Zb = null;
p.ac = function(a, b) {
  var c = this.type = a.type;
  Rf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? zf && (Tf(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = Af || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Af || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.af = Cf ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Zb = a;
  a.defaultPrevented && this.preventDefault();
  delete this.vb
};
p.preventDefault = function() {
  Uf.ia.preventDefault.call(this);
  var a = this.Zb;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Qf) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
p.u = function() {
};
var Vf = 0;
function Wf() {
}
p = Wf.prototype;
p.key = 0;
p.eb = !1;
p.Vb = !1;
p.ac = function(a, b, c, d, e, f) {
  if(ga(a)) {
    this.Zd = !0
  }else {
    if(a && a.handleEvent && ga(a.handleEvent)) {
      this.Zd = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ra = a;
  this.ke = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Rc = f;
  this.Vb = !1;
  this.key = ++Vf;
  this.eb = !1
};
p.handleEvent = function(a) {
  return this.Zd ? this.Ra.call(this.Rc || this.src, a) : this.Ra.handleEvent.call(this.Ra, a)
};
var Xf = {}, Yf = {}, Zf = {}, $f = {};
function ag(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      ag(a, b[f], c, d, e)
    }
    return null
  }
  a = bg(a, b, c, !1, d, e);
  b = a.key;
  Xf[b] = a;
  return b
}
function bg(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = Yf;
  b in h || (h[b] = {s:0, ca:0});
  h = h[b];
  e in h || (h[e] = {s:0, ca:0}, h.s++);
  var h = h[e], k = ia(a), l;
  h.ca++;
  if(h[k]) {
    l = h[k];
    for(var m = 0;m < l.length;m++) {
      if(h = l[m], h.Ra == c && h.Rc == f) {
        if(h.eb) {
          break
        }
        d || (l[m].Vb = !1);
        return l[m]
      }
    }
  }else {
    l = h[k] = [], h.s++
  }
  m = cg();
  h = new Wf;
  h.ac(c, m, a, b, e, f);
  h.Vb = d;
  m.src = a;
  m.Ra = h;
  l.push(h);
  Zf[k] || (Zf[k] = []);
  Zf[k].push(h);
  a.addEventListener ? a != r && a.Nd || a.addEventListener(b, m, e) : a.attachEvent(b in $f ? $f[b] : $f[b] = "on" + b, m);
  return h
}
function cg() {
  var a = dg, b = Pf ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function eg(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      eg(a, b[f], c, d, e)
    }
    return null
  }
  a = bg(a, b, c, !0, d, e);
  b = a.key;
  Xf[b] = a;
  return b
}
function fg(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      fg(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = Yf;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ra == c && a[f].capture == d && a[f].Rc == e) {
          hg(a[f].key);
          break
        }
      }
    }
  }
}
function hg(a) {
  var b = Xf[a];
  if(!b || b.eb) {
    return!1
  }
  var c = b.src, d = b.type, e = b.ke, f = b.capture;
  c.removeEventListener ? c != r && c.Nd || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in $f ? $f[d] : $f[d] = "on" + d, e);
  c = ia(c);
  Zf[c] && (e = Zf[c], Ha(e, b), 0 == e.length && delete Zf[c]);
  b.eb = !0;
  if(b = Yf[d][f][c]) {
    b.de = !0, ig(d, f, c, b)
  }
  delete Xf[a];
  return!0
}
function ig(a, b, c, d) {
  if(!d.bc && d.de) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].eb ? d[e].ke.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.de = !1;
    0 == f && (delete Yf[a][b][c], Yf[a][b].s--, 0 == Yf[a][b].s && (delete Yf[a][b], Yf[a].s--), 0 == Yf[a].s && delete Yf[a])
  }
}
function jg(a) {
  var b = 0;
  if(null != a) {
    if(a = ia(a), Zf[a]) {
      a = Zf[a];
      for(var c = a.length - 1;0 <= c;c--) {
        hg(a[c].key), b++
      }
    }
  }else {
    La(Xf, function(a, c) {
      hg(c);
      b++
    })
  }
}
function kg(a, b, c, d, e) {
  var f = 1;
  b = ia(b);
  if(a[b]) {
    var h = --a.ca, k = a[b];
    k.bc ? k.bc++ : k.bc = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var n = k[m];
        n && !n.eb && (f &= !1 !== lg(n, e))
      }
    }finally {
      a.ca = Math.max(h, a.ca), k.bc--, ig(c, d, b, k)
    }
  }
  return Boolean(f)
}
function lg(a, b) {
  a.Vb && hg(a.key);
  return a.handleEvent(b)
}
function dg(a, b) {
  if(a.eb) {
    return!0
  }
  var c = a.type, d = Yf;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!Pf) {
    e = b || ca("window.event");
    var h = !0 in d, k = !1 in d;
    if(h) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var l = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(m) {
            l = !0
          }
        }
        if(l || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    l = new Uf;
    l.ac(e, this);
    e = !0;
    try {
      if(h) {
        for(var n = [], q = l.currentTarget;q;q = q.parentNode) {
          n.push(q)
        }
        f = d[!0];
        f.ca = f.s;
        for(var s = n.length - 1;!l.vb && 0 <= s && f.ca;s--) {
          l.currentTarget = n[s], e &= kg(f, n[s], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.ca = f.s, s = 0;!l.vb && s < n.length && f.ca;s++) {
            l.currentTarget = n[s], e &= kg(f, n[s], c, !1, l)
          }
        }
      }else {
        e = lg(a, l)
      }
    }finally {
      n && (n.length = 0)
    }
    return e
  }
  c = new Uf(b, this);
  return e = lg(a, c)
}
;function mg() {
  mf.call(this)
}
qa(mg, mf);
p = mg.prototype;
p.Nd = !0;
p.Yc = null;
p.addEventListener = function(a, b, c, d) {
  ag(this, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  fg(this, a, b, c, d)
};
p.dispatchEvent = function(a) {
  var b = a.type || a, c = Yf;
  if(b in c) {
    if(u(a)) {
      a = new Rf(a, this)
    }else {
      if(a instanceof Rf) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new Rf(b, this);
        Pa(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.Yc) {
        e.push(f)
      }
      f = c[!0];
      f.ca = f.s;
      for(var h = e.length - 1;!a.vb && 0 <= h && f.ca;h--) {
        a.currentTarget = e[h], d &= kg(f, e[h], a.type, !0, a) && !1 != a.ic
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.ca = f.s, b) {
        for(h = 0;!a.vb && h < e.length && f.ca;h++) {
          a.currentTarget = e[h], d &= kg(f, e[h], a.type, !1, a) && !1 != a.ic
        }
      }else {
        for(e = this;!a.vb && e && f.ca;e = e.Yc) {
          a.currentTarget = e, d &= kg(f, e, a.type, !1, a) && !1 != a.ic
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
p.u = function() {
  mg.ia.u.call(this);
  jg(this);
  this.Yc = null
};
function ng(a, b) {
  mf.call(this);
  this.$a = a || 1;
  this.Pb = b || r;
  this.sc = v(this.kf, this);
  this.Sc = pa()
}
qa(ng, mg);
p = ng.prototype;
p.enabled = !1;
p.pa = null;
p.setInterval = function(a) {
  this.$a = a;
  this.pa && this.enabled ? (this.stop(), this.start()) : this.pa && this.stop()
};
p.kf = function() {
  if(this.enabled) {
    var a = pa() - this.Sc;
    0 < a && a < 0.8 * this.$a ? this.pa = this.Pb.setTimeout(this.sc, this.$a - a) : (this.dispatchEvent(og), this.enabled && (this.pa = this.Pb.setTimeout(this.sc, this.$a), this.Sc = pa()))
  }
};
p.start = function() {
  this.enabled = !0;
  this.pa || (this.pa = this.Pb.setTimeout(this.sc, this.$a), this.Sc = pa())
};
p.stop = function() {
  this.enabled = !1;
  this.pa && (this.Pb.clearTimeout(this.pa), this.pa = null)
};
p.u = function() {
  ng.ia.u.call(this);
  this.stop();
  delete this.Pb
};
var og = "tick";
function pg(a, b) {
  if(!ga(a)) {
    if(a && "function" == typeof a.handleEvent) {
      a = v(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : r.setTimeout(a, b || 0)
}
;function qg(a) {
  if("function" == typeof a.Ba) {
    return a.Ba()
  }
  if(u(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ma(a)
}
function rg(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || u(a)) {
      Ea(a, b, c)
    }else {
      var d;
      if("function" == typeof a.qb) {
        d = a.qb()
      }else {
        if("function" != typeof a.Ba) {
          if(fa(a) || u(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Na(a)
          }
        }else {
          d = void 0
        }
      }
      for(var e = qg(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
;function sg(a, b) {
  this.Da = {};
  this.D = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof sg ? (c = a.qb(), d = a.Ba()) : (c = Na(a), d = Ma(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
p = sg.prototype;
p.s = 0;
p.se = 0;
p.Ba = function() {
  tg(this);
  for(var a = [], b = 0;b < this.D.length;b++) {
    a.push(this.Da[this.D[b]])
  }
  return a
};
p.qb = function() {
  tg(this);
  return this.D.concat()
};
p.Cb = function(a) {
  return ug(this.Da, a)
};
p.remove = function(a) {
  return ug(this.Da, a) ? (delete this.Da[a], this.s--, this.se++, this.D.length > 2 * this.s && tg(this), !0) : !1
};
function tg(a) {
  if(a.s != a.D.length) {
    for(var b = 0, c = 0;b < a.D.length;) {
      var d = a.D[b];
      ug(a.Da, d) && (a.D[c++] = d);
      b++
    }
    a.D.length = c
  }
  if(a.s != a.D.length) {
    for(var e = {}, c = b = 0;b < a.D.length;) {
      d = a.D[b], ug(e, d) || (a.D[c++] = d, e[d] = 1), b++
    }
    a.D.length = c
  }
}
p.get = function(a, b) {
  return ug(this.Da, a) ? this.Da[a] : b
};
p.set = function(a, b) {
  ug(this.Da, a) || (this.s++, this.D.push(a), this.se++);
  this.Da[a] = b
};
p.Xb = function() {
  return new sg(this)
};
function ug(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function vg(a) {
  return wg(a || arguments.callee.caller, [])
}
function wg(a, b) {
  var c = [];
  if(0 <= Da(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(xg(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = xg(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(wg(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function xg(a) {
  if(yg[a]) {
    return yg[a]
  }
  a = String(a);
  if(!yg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    yg[a] = b ? b[1] : "[Anonymous]"
  }
  return yg[a]
}
var yg = {};
function zg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
zg.prototype.gf = 0;
zg.prototype.Sd = null;
zg.prototype.Rd = null;
var Ag = 0;
zg.prototype.reset = function(a, b, c, d, e) {
  this.gf = "number" == typeof e ? e : Ag++;
  this.Nf = d || pa();
  this.Kb = a;
  this.Ze = b;
  this.Jf = c;
  delete this.Sd;
  delete this.Rd
};
zg.prototype.re = function(a) {
  this.Kb = a
};
function Bg(a) {
  this.ce = a
}
Bg.prototype.oa = null;
Bg.prototype.Kb = null;
Bg.prototype.uc = null;
Bg.prototype.Wd = null;
function Cg(a, b) {
  this.name = a;
  this.value = b
}
Cg.prototype.toString = g("name");
var Dg = new Cg("SEVERE", 1E3), Eg = new Cg("WARNING", 900), Fg = new Cg("INFO", 800), Gg = new Cg("CONFIG", 700), Hg = new Cg("FINE", 500), Ig = new Cg("FINEST", 300);
p = Bg.prototype;
p.getName = g("ce");
p.getParent = g("oa");
p.Vd = function() {
  this.uc || (this.uc = {});
  return this.uc
};
p.re = function(a) {
  this.Kb = a
};
function Jg(a) {
  if(a.Kb) {
    return a.Kb
  }
  if(a.oa) {
    return Jg(a.oa)
  }
  Ba("Root logger has no level set.");
  return null
}
p.log = function(a, b, c) {
  if(a.value >= Jg(this).value) {
    for(a = this.Ue(a, b, c), b = "log:" + a.Ze, r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b)), r.msWriteProfilerMark && r.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.Wd) {
        for(var e = 0, f = void 0;f = c.Wd[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
p.Ue = function(a, b, c) {
  var d = new zg(a, String(b), this.ce);
  if(c) {
    d.Sd = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var l, m, n = !1;
        try {
          l = c.lineNumber || c.If || "Not available"
        }catch(q) {
          l = "Not available", n = !0
        }
        try {
          m = c.fileName || c.filename || c.sourceURL || r.$googDebugFname || k
        }catch(s) {
          m = "Not available", n = !0
        }
        h = !n && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:m, stack:c.stack || "Not available"}
      }
      e = "Message: " + sa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + sa(vg(f) + "-\x3e ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Rd = e
  }
  return d
};
p.info = function(a, b) {
  this.log(Fg, a, b)
};
function Kg(a) {
  Z.log(Hg, a, void 0)
}
function Lg(a) {
  Z.log(Ig, a, void 0)
}
var Mg = {}, Ng = null;
function Og(a) {
  Ng || (Ng = new Bg(""), Mg[""] = Ng, Ng.re(Gg));
  var b;
  if(!(b = Mg[a])) {
    b = new Bg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Og(a.substr(0, c));
    c.Vd()[d] = b;
    b.oa = c;
    Mg[a] = b
  }
  return b
}
;function Pg(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Qg(a) {
  var b = [];
  Rg(new Sg, a, b);
  return b.join("")
}
function Sg() {
  this.hc = void 0
}
function Rg(a, b, c) {
  switch(typeof b) {
    case "string":
      Tg(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(null == b) {
        c.push("null");
        break
      }
      if(ea(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Rg(a, a.hc ? a.hc.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Tg(f, c), c.push(":"), Rg(a, a.hc ? a.hc.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var Ug = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Vg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Tg(a, b) {
  b.push('"', a.replace(Vg, function(a) {
    if(a in Ug) {
      return Ug[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Ug[a] = e + b.toString(16)
  }), '"')
}
;var Wg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Xg(a) {
  var b = a.match(Wg);
  a = b[1];
  var c = b[2], d = b[3], b = b[4], e = "";
  a && (e += a + ":");
  d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
  return e
}
;Og("goog.net.XhrIo");
var Yg = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {jd:"cn", te:"at", ve:"rat", Sb:"pu", Ka:"ifrid", zb:"tp", mc:"lru", Rb:"pru", Va:"lpu", Wa:"ppu", oc:"ph", nc:"osh", pc:"role", ue:"nativeProtocolVersion"}, Zg = [$.Sb, $.mc, $.Rb, $.Va, $.Wa], $g = {};
function ah(a) {
  for(var b = bh, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var bh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = Og("goog.net.xpc");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ch(a, b) {
  this.Ia = [];
  this.ge = a;
  this.Od = b || null
}
p = ch.prototype;
p.ta = !1;
p.Gb = !1;
p.rc = !1;
p.we = !1;
p.ed = !1;
p.Ub = 0;
p.cancel = function(a) {
  if(this.ta) {
    this.Nb instanceof ch && this.Nb.cancel()
  }else {
    if(this.oa) {
      var b = this.oa;
      delete this.oa;
      a ? b.cancel(a) : (b.Ub--, 0 >= b.Ub && b.cancel())
    }
    this.ge ? this.ge.call(this.Od, this) : this.ed = !0;
    this.ta || this.Qd(new dh(this))
  }
};
p.Ld = function(a, b) {
  this.rc = !1;
  eh(this, a, b)
};
function eh(a, b, c) {
  a.ta = !0;
  a.Nb = c;
  a.Gb = !b;
  fh(a)
}
function gh(a) {
  if(a.ta) {
    if(!a.ed) {
      throw new hh(a);
    }
    a.ed = !1
  }
}
p.qa = function(a) {
  gh(this);
  eh(this, !0, a)
};
p.Qd = function(a) {
  gh(this);
  eh(this, !1, a)
};
function ih(a, b, c, d) {
  a.Ia.push([b, c, d]);
  a.ta && fh(a)
}
function jh(a, b) {
  var c = v(b.xe, b);
  ih(a, c, null, void 0)
}
p.xe = function(a) {
  var b = new ch;
  ih(this, b.qa, b.Qd, b);
  a && (b.oa = this, this.Ub++);
  return b
};
function kh(a) {
  return Ga(a.Ia, function(a) {
    return ga(a[1])
  })
}
function fh(a) {
  a.hd && (a.ta && kh(a)) && (r.clearTimeout(a.hd), delete a.hd);
  a.oa && (a.oa.Ub--, delete a.oa);
  for(var b = a.Nb, c = !1, d = !1;a.Ia.length && !a.rc;) {
    var e = a.Ia.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Gb ? h : f) {
      try {
        var k = f.call(e || a.Od, b);
        void 0 !== k && (a.Gb = a.Gb && (k == b || k instanceof Error), a.Nb = b = k);
        b instanceof ch && (d = !0, a.rc = !0)
      }catch(l) {
        b = l, a.Gb = !0, kh(a) || (c = !0)
      }
    }
  }
  a.Nb = b;
  d && (ih(b, v(a.Ld, a, !0), v(a.Ld, a, !1)), b.we = !0);
  c && (a.hd = r.setTimeout(function() {
    throw b;
  }, 0))
}
function hh(a) {
  za.call(this);
  this.Pe = a
}
qa(hh, za);
hh.prototype.message = "Deferred has already fired";
hh.prototype.name = "AlreadyCalledError";
function dh(a) {
  za.call(this);
  this.Pe = a
}
qa(dh, za);
dh.prototype.message = "Deferred was cancelled";
dh.prototype.name = "CancelledError";
function lh(a, b) {
  var c;
  if(a instanceof lh) {
    this.fa = void 0 !== b ? b : a.fa, mh(this, a.wb), c = a.lc, nh(this), this.lc = c, c = a.Eb, nh(this), this.Eb = c, oh(this, a.gc), c = a.dc, nh(this), this.dc = c, ph(this, a.Ga.Xb()), c = a.$b, nh(this), this.$b = c
  }else {
    if(a && (c = String(a).match(Wg))) {
      this.fa = !!b;
      mh(this, c[1] || "", !0);
      var d = c[2] || "";
      nh(this);
      this.lc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      nh(this);
      this.Eb = d ? decodeURIComponent(d) : "";
      oh(this, c[4]);
      d = c[5] || "";
      nh(this);
      this.dc = d ? decodeURIComponent(d) : "";
      ph(this, c[6] || "", !0);
      c = c[7] || "";
      nh(this);
      this.$b = c ? decodeURIComponent(c) : ""
    }else {
      this.fa = !!b, this.Ga = new qh(null, 0, this.fa)
    }
  }
}
p = lh.prototype;
p.wb = "";
p.lc = "";
p.Eb = "";
p.gc = null;
p.dc = "";
p.$b = "";
p.Xe = !1;
p.fa = !1;
p.toString = function() {
  var a = [], b = this.wb;
  b && a.push(rh(b, sh), ":");
  if(b = this.Eb) {
    a.push("//");
    var c = this.lc;
    c && a.push(rh(c, sh), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.gc;
    null != b && a.push(":", String(b))
  }
  if(b = this.dc) {
    this.Eb && "/" != b.charAt(0) && a.push("/"), a.push(rh(b, "/" == b.charAt(0) ? th : uh))
  }
  (b = this.Ga.toString()) && a.push("?", b);
  (b = this.$b) && a.push("#", rh(b, vh));
  return a.join("")
};
p.Xb = function() {
  return new lh(this)
};
function mh(a, b, c) {
  nh(a);
  a.wb = c ? b ? decodeURIComponent(b) : "" : b;
  a.wb && (a.wb = a.wb.replace(/:$/, ""))
}
function oh(a, b) {
  nh(a);
  if(b) {
    b = Number(b);
    if(isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.gc = b
  }else {
    a.gc = null
  }
}
function ph(a, b, c) {
  nh(a);
  b instanceof qh ? (a.Ga = b, a.Ga.dd(a.fa)) : (c || (b = rh(b, wh)), a.Ga = new qh(b, 0, a.fa))
}
function nh(a) {
  if(a.Xe) {
    throw Error("Tried to modify a read-only Uri");
  }
}
p.dd = function(a) {
  this.fa = a;
  this.Ga && this.Ga.dd(a);
  return this
};
function rh(a, b) {
  return u(a) ? encodeURI(a).replace(b, xh) : null
}
function xh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var sh = /[#\/\?@]/g, uh = /[\#\?:]/g, th = /[\#\?]/g, wh = /[\#\?@]/g, vh = /#/g;
function qh(a, b, c) {
  this.ea = a || null;
  this.fa = !!c
}
function yh(a) {
  if(!a.H && (a.H = new sg, a.s = 0, a.ea)) {
    for(var b = a.ea.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = zh(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
p = qh.prototype;
p.H = null;
p.s = null;
p.add = function(a, b) {
  yh(this);
  this.ea = null;
  a = zh(this, a);
  var c = this.H.get(a);
  c || this.H.set(a, c = []);
  c.push(b);
  this.s++;
  return this
};
p.remove = function(a) {
  yh(this);
  a = zh(this, a);
  return this.H.Cb(a) ? (this.ea = null, this.s -= this.H.get(a).length, this.H.remove(a)) : !1
};
p.Cb = function(a) {
  yh(this);
  a = zh(this, a);
  return this.H.Cb(a)
};
p.qb = function() {
  yh(this);
  for(var a = this.H.Ba(), b = this.H.qb(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
p.Ba = function(a) {
  yh(this);
  var b = [];
  if(a) {
    this.Cb(a) && (b = Ia(b, this.H.get(zh(this, a))))
  }else {
    a = this.H.Ba();
    for(var c = 0;c < a.length;c++) {
      b = Ia(b, a[c])
    }
  }
  return b
};
p.set = function(a, b) {
  yh(this);
  this.ea = null;
  a = zh(this, a);
  this.Cb(a) && (this.s -= this.H.get(a).length);
  this.H.set(a, [b]);
  this.s++;
  return this
};
p.get = function(a, b) {
  var c = a ? this.Ba(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
p.toString = function() {
  if(this.ea) {
    return this.ea
  }
  if(!this.H) {
    return""
  }
  for(var a = [], b = this.H.qb(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent(String(d)), d = this.Ba(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(h)
    }
  }
  return this.ea = a.join("\x26")
};
p.Xb = function() {
  var a = new qh;
  a.ea = this.ea;
  this.H && (a.H = this.H.Xb(), a.s = this.s);
  return a
};
function zh(a, b) {
  var c = String(b);
  a.fa && (c = c.toLowerCase());
  return c
}
p.dd = function(a) {
  a && !this.fa && (yh(this), this.ea = null, rg(this.H, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.ea = null, this.H.set(zh(this, d), Ka(a)), this.s += a.length))
  }, this));
  this.fa = a
};
function Ah(a, b, c) {
  mf.call(this);
  this.Tc = a;
  this.$a = b || 0;
  this.Hb = c;
  this.ye = v(this.Se, this)
}
qa(Ah, mf);
p = Ah.prototype;
p.Ib = 0;
p.u = function() {
  Ah.ia.u.call(this);
  this.stop();
  delete this.Tc;
  delete this.Hb
};
p.start = function(a) {
  this.stop();
  this.Ib = pg(this.ye, void 0 !== a ? a : this.$a)
};
p.stop = function() {
  this.Yd() && r.clearTimeout(this.Ib);
  this.Ib = 0
};
p.Yd = function() {
  return 0 != this.Ib
};
p.Se = function() {
  this.Ib = 0;
  this.Tc && this.Tc.call(this.Hb)
};
var Bh, Ch = !zf && !yf || yf && yf && 9 <= Of || zf && Mf("1.9.1");
yf && Mf("9");
function Dh(a) {
  return a ? new Eh(9 == a.nodeType ? a : a.ownerDocument || a.document) : Bh || (Bh = new Eh)
}
function Fh(a) {
  return u(a) ? document.getElementById(a) : a
}
function Gh(a, b, c) {
  function d(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ha(f) && 0 < f.nodeType ? d(f) : Ea(Hh(f) ? Ka(f) : f, d)
  }
}
function Ih(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Hh(a) {
  if(a && "number" == typeof a.length) {
    if(ha(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ga(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function Eh(a) {
  this.Db = a || r.document || document
}
p = Eh.prototype;
p.createElement = function(a) {
  return this.Db.createElement(a)
};
p.createTextNode = function(a) {
  return this.Db.createTextNode(String(a))
};
p.t = function() {
  return this.Db.parentWindow || this.Db.defaultView
};
p.appendChild = function(a, b) {
  a.appendChild(b)
};
p.append = function(a, b) {
  Gh(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
p.Vd = function(a) {
  return Ch && void 0 != a.children ? a.children : Fa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function Jh(a) {
  mf.call(this);
  this.Aa = a || Dh()
}
qa(Jh, mf);
Jh.prototype.xb = 0;
Jh.prototype.t = function() {
  return this.Aa.t()
};
Jh.prototype.getName = function() {
  return Yg[this.xb] || ""
};
function Kh() {
  mf.call(this);
  this.cd = {}
}
qa(Kh, mf);
Kh.prototype.Uc = Og("goog.messaging.AbstractChannel");
Kh.prototype.sa = function(a) {
  a && a()
};
Kh.prototype.ua = ba(!0);
Kh.prototype.u = function() {
  Kh.ia.u.call(this);
  delete this.Uc;
  delete this.cd;
  delete this.Pd
};
function Lh(a, b) {
  Jh.call(this, b);
  this.k = a;
  this.Ob = this.k.o[$.Wa];
  this.ef = this.k.o[$.Va];
  this.jc = []
}
var Mh, Nh;
qa(Lh, Jh);
p = Lh.prototype;
p.bf = 5;
p.xb = 4;
p.Ia = 0;
p.yb = !1;
p.Za = !1;
p.oe = null;
function Oh(a) {
  return"googlexpc_" + a.k.name + "_msg"
}
function Ph(a) {
  return"googlexpc_" + a.k.name + "_ack"
}
function Qh(a) {
  try {
    if(!a.mb && Rh(a.k)) {
      return a.k.Fa.frames || {}
    }
  }catch(b) {
    Kg("error retrieving peer frames")
  }
  return{}
}
p.sa = function() {
  if(!this.mb && Rh(this.k)) {
    Kg("transport connect called");
    if(!this.Za) {
      Kg("initializing...");
      var a = Oh(this);
      this.ub = Sh(this, a);
      this.Vc = this.t().frames[a];
      a = Ph(this);
      this.hb = Sh(this, a);
      this.qc = this.t().frames[a];
      this.Za = !0
    }
    if(Th(this, Oh(this)) && Th(this, Ph(this))) {
      Kg("foreign frames present"), this.ae = new Uh(this, Qh(this)[Oh(this)], v(this.df, this)), this.kd = new Uh(this, Qh(this)[Ph(this)], v(this.cf, this)), this.rd()
    }else {
      Lg("foreign frames not (yet) present");
      if(1 == Vh(this.k)) {
        this.oe || 0 < this.bf-- || (Lg("Inner peer reconnect triggered."), this.k.name = ah(10), Lg("switching channels: " + this.k.name), Wh(this), this.Za = !1, this.oe = Sh(this, "googlexpc_reconnect_" + this.k.name))
      }else {
        if(0 == Vh(this.k)) {
          Lg("outerPeerReconnect called");
          for(var a = Qh(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(e) {
            }
            if(d) {
              var f = d.split("_");
              if(3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                this.k.name = f[2];
                Wh(this);
                this.Za = !1;
                break
              }
            }
          }
        }
      }
      this.t().setTimeout(v(this.sa, this), 100)
    }
  }
};
function Sh(a, b) {
  Lg("constructing sender frame: " + b);
  var c;
  c = document.createElement("iframe");
  var d = c.style;
  d.position = "absolute";
  d.top = "-10px";
  d.left = "10px";
  d.width = "1px";
  d.height = "1px";
  c.id = c.name = b;
  c.src = a.Ob + "#INITIAL";
  a.t().document.body.appendChild(c);
  return c
}
function Wh(a) {
  Lg("deconstructSenderFrames called");
  a.ub && (a.ub.parentNode.removeChild(a.ub), a.ub = null, a.Vc = null);
  a.hb && (a.hb.parentNode.removeChild(a.hb), a.hb = null, a.qc = null)
}
function Th(a, b) {
  Lg("checking for receive frame: " + b);
  try {
    var c = Qh(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.ef)) {
      return!1
    }
  }catch(d) {
    return!1
  }
  return!0
}
p.rd = function() {
  var a = Qh(this);
  a[Ph(this)] && a[Oh(this)] ? (this.be = new Xh(this.Ob, this.Vc), this.Tb = new Xh(this.Ob, this.qc), Kg("local frames ready"), this.t().setTimeout(v(function() {
    this.be.send("SETUP");
    this.yb = this.Mf = !0;
    Kg("SETUP sent")
  }, this), 100)) : (this.qd || (this.qd = v(this.rd, this)), this.t().setTimeout(this.qd, 100), Kg("local frames not (yet) present"))
};
function Yh(a) {
  if(a.bd && a.me) {
    if(a.k.Ea(), a.lb) {
      Kg("delivering queued messages (" + a.lb.length + ")");
      for(var b = 0, c;b < a.lb.length;b++) {
        c = a.lb[b], a.k.Ja(c.hf, c.$c)
      }
      delete a.lb
    }
  }else {
    Lg("checking if connected: ack sent:" + a.bd + ", ack rcvd: " + a.me)
  }
}
p.df = function(a) {
  Lg("msg received: " + a);
  if("SETUP" == a) {
    this.Tb && (this.Tb.send("SETUP_ACK"), Lg("SETUP_ACK sent"), this.bd = !0, Yh(this))
  }else {
    if(this.k.ua() || this.bd) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Tb.send("ACK:" + c);
        Zh(this, a)
      }else {
        d = c.substring(0, b), this.Tb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.Zc = []), this.Zc.push(a), b == c && (Zh(this, this.Zc.join("")), delete this.Zc)
      }
    }else {
      Z.log(Eg, "received msg, but channel is not connected", void 0)
    }
  }
};
p.cf = function(a) {
  Lg("ack received: " + a);
  "SETUP_ACK" == a ? (this.yb = !1, this.me = !0, Yh(this)) : this.k.ua() ? this.yb ? parseInt(a.split(":")[1], 10) == this.Ia ? (this.yb = !1, $h(this)) : Z.log(Eg, "got ack with wrong sequence", void 0) : Z.log(Eg, "got unexpected ack", void 0) : Z.log(Eg, "received ack, but channel not connected", void 0)
};
function $h(a) {
  if(!a.yb && a.jc.length) {
    var b = a.jc.shift();
    ++a.Ia;
    a.be.send(a.Ia + b);
    Lg("msg sent: " + a.Ia + b);
    a.yb = !0
  }
}
function Zh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.k.ua() ? a.k.Ja(d, c) : ((a.lb || (a.lb = [])).push({hf:d, $c:c}), Lg("queued delivery"))
}
p.Qb = 3800;
p.send = function(a, b) {
  var c = a + ":" + b;
  if(!yf || b.length <= this.Qb) {
    this.jc.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.Qb), f = 0, h = 1;f < d;) {
      this.jc.push("," + h + "/" + e + "|" + c.substr(f, this.Qb)), h++, f += this.Qb
    }
  }
  $h(this)
};
p.u = function() {
  Lh.ia.u.call(this);
  var a = ai;
  Ha(a, this.ae);
  Ha(a, this.kd);
  this.ae = this.kd = null;
  Ih(this.ub);
  Ih(this.hb);
  this.Vc = this.qc = this.ub = this.hb = null
};
var ai = [], bi = v(function() {
  var a = ai, b, c = !1;
  try {
    for(var d = 0;b = a[d];d++) {
      var e;
      if(!(e = c)) {
        var f = b, h = f.le.location.href;
        if(h != f.Md) {
          f.Md = h;
          var k = h.split("#")[1];
          k && (k = k.substr(1), f.ze(decodeURIComponent(k)));
          e = !0
        }else {
          e = !1
        }
      }
      c = e
    }
  }catch(l) {
    if(Z.info("receive_() failed: " + l), b = b.Z.k, Z.info("Transport Error"), b.close(), !a.length) {
      return
    }
  }
  a = pa();
  c && (Mh = a);
  Nh = window.setTimeout(bi, 1E3 > a - Mh ? 10 : 100)
}, Lh);
function ci() {
  Kg("starting receive-timer");
  Mh = pa();
  Nh && window.clearTimeout(Nh);
  Nh = window.setTimeout(bi, 10)
}
function Xh(a, b) {
  this.Ob = a;
  this.qe = b;
  this.Oc = 0
}
Xh.prototype.send = function(a) {
  this.Oc = ++this.Oc % 2;
  a = this.Ob + "#" + this.Oc + encodeURIComponent(a);
  try {
    Af ? this.qe.location.href = a : this.qe.location.replace(a)
  }catch(b) {
    Z.log(Dg, "sending failed", b)
  }
  ci()
};
function Uh(a, b, c) {
  this.Z = a;
  this.le = b;
  this.ze = c;
  this.Md = this.le.location.href.split("#")[0] + "#INITIAL";
  ai.push(this);
  ci()
}
;function di(a) {
  mf.call(this);
  this.Hb = a;
  this.D = []
}
qa(di, mf);
var ei = [];
function fi(a, b, c, d, e, f) {
  if(ea(c)) {
    for(var h = 0;h < c.length;h++) {
      fi(a, b, c[h], d, e, f)
    }
  }else {
    b = eg(b, c, d || a, e, f || a.Hb || a), a.D.push(b)
  }
}
di.prototype.u = function() {
  di.ia.u.call(this);
  Ea(this.D, hg);
  this.D.length = 0
};
di.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function gi(a, b) {
  Jh.call(this, b);
  this.k = a;
  this.Mb = [];
  this.Qe = v(this.Re, this)
}
qa(gi, Jh);
p = gi.prototype;
p.xb = 2;
p.ad = !1;
p.pa = 0;
p.sa = function() {
  0 == Vh(this.k) ? (this.Ca = this.k.sb, this.Ca.XPC_toOuter = v(this.Xd, this)) : this.od()
};
p.od = function() {
  var a = !0;
  try {
    this.Ca || (this.Ca = this.t().frameElement), this.Ca && this.Ca.XPC_toOuter && (this.Xc = this.Ca.XPC_toOuter, this.Ca.XPC_toOuter.XPC_toInner = v(this.Xd, this), a = !1, this.send("tp", "SETUP_ACK"), this.k.Ea())
  }catch(b) {
    Z.log(Dg, "exception caught while attempting setup: " + b, void 0)
  }
  a && (this.nd || (this.nd = v(this.od, this)), this.t().setTimeout(this.nd, 100))
};
p.gd = function(a) {
  if(0 != Vh(this.k) || this.k.ua() || "SETUP_ACK" != a) {
    throw Error("Got unexpected transport message.");
  }
  this.Xc = this.Ca.XPC_toOuter.XPC_toInner;
  this.k.Ea()
};
p.Xd = function(a, b) {
  this.ad || 0 != this.Mb.length ? (this.Mb.push({jf:a, $c:b}), 1 == this.Mb.length && (this.pa = this.t().setTimeout(this.Qe, 1))) : this.k.Ja(a, b)
};
p.Re = function() {
  for(;this.Mb.length;) {
    var a = this.Mb.shift();
    this.k.Ja(a.jf, a.$c)
  }
};
p.send = function(a, b) {
  this.ad = !0;
  this.Xc(a, b);
  this.ad = !1
};
p.u = function() {
  gi.ia.u.call(this);
  this.Ca = this.Xc = null
};
function hi(a, b) {
  Jh.call(this, b);
  this.k = a;
  this.$e = this.k.o[$.Rb];
  this.je = this.k.o[$.Ka];
  Af && ii()
}
qa(hi, Jh);
if(Af) {
  var ji = [], ki = 0, ii = function() {
    ki || (ki = window.setTimeout(function() {
      li()
    }, 1E3))
  }, li = function(a) {
    var b = pa();
    for(a = a || 3E3;ji.length && b - ji[0].timestamp >= a;) {
      var c = ji.shift().We;
      Ih(c);
      Lg("iframe removed")
    }
    ki = window.setTimeout(mi, 1E3)
  }, mi = function() {
    li()
  }
}
var ni = {};
p = hi.prototype;
p.xb = 3;
p.sa = function() {
  this.t().xpcRelay || (this.t().xpcRelay = oi);
  this.send("tp", "SETUP")
};
function oi(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(yf && -1 != (c = d.indexOf("|"))) {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), h = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), k = ni[h];
    k || (k = ni[h] = {Ud:[], ne:0, Td:0});
    -1 != d.indexOf("++") && (k.Td = c + 1);
    k.Ud[c] = e;
    k.ne++;
    if(k.ne != k.Td) {
      return
    }
    e = k.Ud.join("");
    delete ni[h]
  }else {
    var f = d
  }
  $g[a].Ja(f, decodeURIComponent(e))
}
p.gd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.k.Ea()) : "SETUP_ACK" == a && this.k.Ea()
};
p.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(yf && 1800 < d) {
    for(var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ pa()).toString(36), f = 0, h = 0;f < d;h++) {
      var k = c.substr(f, 1800), f = f + 1800;
      pi(this, a, k, e + (f >= d ? "++" : "+") + h)
    }
  }else {
    pi(this, a, c)
  }
};
function pi(a, b, c, d) {
  if(yf) {
    var e = a.t().document.createElement("div");
    e.innerHTML = '\x3ciframe onload\x3d"this.xpcOnload()"\x3e\x3c/iframe\x3e';
    e = e.childNodes[0];
    e.xpcOnload = qi
  }else {
    e = a.t().document.createElement("iframe"), Af ? ji.push({timestamp:pa(), We:e}) : ag(e, "load", qi)
  }
  var f = e.style;
  f.visibility = "hidden";
  f.width = e.style.height = "0px";
  f.position = "absolute";
  f = a.$e;
  f += "#" + a.k.name;
  a.je && (f += "," + a.je);
  f += "|" + b;
  d && (f += "|" + d);
  f += ":" + c;
  e.src = f;
  a.t().document.body.appendChild(e);
  Lg("msg sent: " + f)
}
function qi() {
  Lg("iframe-load");
  Ih(this);
  this.Of = null
}
p.u = function() {
  hi.ia.u.call(this);
  Af && li(0)
};
function ri(a, b, c, d, e) {
  Jh.call(this, c);
  this.k = a;
  this.cb = e || 2;
  this.ie = b || "*";
  this.Qc = new di(this);
  this.Lb = new ng(100, this.t());
  this.cc = !!d;
  this.Ta = new ch;
  this.Ua = new ch;
  this.Na = new ch;
  this.Te = ah(10);
  this.ec = null;
  this.cc ? 1 == Vh(this.k) ? jh(this.Na, this.Ta) : jh(this.Na, this.Ua) : (jh(this.Na, this.Ta), 2 == this.cb && jh(this.Na, this.Ua));
  ih(this.Na, this.ee, null, this);
  this.Na.qa(!0);
  a = this.Qc;
  b = this.Lb;
  c = this.$d;
  d = og;
  ea(d) || (ei[0] = d, d = ei);
  for(e = 0;e < d.length;e++) {
    var f = ag(b, d[e], c || a, !1, a.Hb || a);
    a.D.push(f)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion\x3d" + this.cb + ", oneSidedHandshake\x3d" + this.cc + ", role\x3d" + Vh(this.k))
}
qa(ri, Jh);
ri.prototype.da = null;
ri.prototype.Za = !1;
ri.prototype.xb = 1;
var si = {};
function ti(a) {
  var b = a.Zb.data;
  if(!u(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  Kg("messageReceived: channel\x3d" + e + ", service\x3d" + c + ", payload\x3d" + b);
  if(d = $g[e]) {
    return d.Ja(c, b, a.Zb.origin), !0
  }
  a = ui(b)[0];
  for(var f in $g) {
    if(d = $g[f], 1 == Vh(d) && !d.ua() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return Kg("changing channel name to " + e), d.name = e, delete $g[f], $g[e] = d, d.Ja(c, b), !0
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return!1
}
p = ri.prototype;
p.gd = function(a) {
  var b = ui(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      vi(this, 1);
      this.Ta.ta || this.Ta.qa(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.cb && (vi(this, 2), this.Ta.ta || this.Ta.qa(!0));
      break;
    case "SETUP":
      vi(this, 1);
      wi(this, 1);
      break;
    case "SETUP_NTPV2":
      2 == this.cb && (b = this.da, vi(this, 2), wi(this, 2), 1 != b && null == this.ec || this.ec == a || (Z.info("Sending SETUP and changing peer ID to: " + a), xi(this)), this.ec = a)
  }
};
function xi(a) {
  if(2 == a.cb && (null == a.da || 2 == a.da)) {
    var b;
    b = "SETUP_NTPV2," + a.Te;
    a.send("tp", b)
  }
  null != a.da && 1 != a.da || a.send("tp", "SETUP")
}
function wi(a, b) {
  if(2 != a.cb || null != a.da && 2 != a.da || 2 != b) {
    if(null != a.da && 1 != a.da || 1 != b) {
      return
    }
    a.send("tp", "SETUP_ACK")
  }else {
    a.send("tp", "SETUP_ACK_NTPV2")
  }
  a.Ua.ta || a.Ua.qa(!0)
}
function vi(a, b) {
  b > a.da && (a.da = b);
  1 == a.da && (a.Ua.ta || a.cc || a.Ua.qa(!0), a.ec = null)
}
p.sa = function() {
  var a = this.t(), b = ia(a), c = si[b];
  "number" == typeof c || (c = 0);
  0 == c && ag(a.postMessage ? a : a.document, "message", ti, !1, ri);
  si[b] = c + 1;
  this.Za = !0;
  this.$d()
};
p.$d = function() {
  var a = 0 == Vh(this.k);
  this.cc && a || this.k.ua() || this.mb ? this.Lb.stop() : (this.Lb.start(), xi(this))
};
p.send = function(a, b) {
  var c = this.k.Fa;
  c ? (this.send = function(a, b) {
    var f = this, h = this.k.name;
    this.kc = pg(function() {
      f.kc = 0;
      try {
        var k = c.postMessage ? c : c.document;
        k.postMessage ? (k.postMessage(h + "|" + a + ":" + b, f.ie), Kg("send(): service\x3d" + a + " payload\x3d" + b + " to hostname\x3d" + f.ie)) : Z.log(Eg, "Peer window had no postMessage function.", void 0)
      }catch(l) {
        Z.log(Eg, "Error performing postMessage, ignoring.", l)
      }
    }, 0)
  }, this.send(a, b)) : Kg("send(): window not ready")
};
p.ee = function() {
  this.k.Ea(1 == this.cb || 1 == this.da ? 200 : void 0)
};
p.u = function() {
  if(this.Za) {
    var a = this.t(), b = ia(a), c = si[b];
    si[b] = c - 1;
    1 == c && fg(a.postMessage ? a : a.document, "message", ti, !1, ri)
  }
  this.kc && (r.clearTimeout(this.kc), this.kc = 0);
  pf(this.Qc);
  delete this.Qc;
  pf(this.Lb);
  delete this.Lb;
  this.Ta.cancel();
  delete this.Ta;
  this.Ua.cancel();
  delete this.Ua;
  this.Na.cancel();
  delete this.Na;
  delete this.send;
  ri.ia.u.call(this)
};
function ui(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a
}
;function yi(a, b) {
  Jh.call(this, b);
  this.k = a;
  this.pd = a[$.te] || "";
  this.pe = a[$.ve] || "";
  var c = this.t();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport \x3d transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth \x3d auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken \x3d m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + zi + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Ai + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap \x3d New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper \x3d wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = !0
    }catch(e) {
      Z.log(Dg, "exception caught while attempting global setup: " + e, void 0)
    }
  }
  this[zi] = this.Ve;
  this[Ai] = this.Oe
}
qa(yi, Jh);
var zi = "GCXPC____NIXJS_handle_message", Ai = "GCXPC____NIXJS_create_channel";
p = yi.prototype;
p.xb = 6;
p.tb = !1;
p.Sa = null;
p.sa = function() {
  0 == Vh(this.k) ? this.md() : this.ld()
};
p.md = function() {
  if(!this.tb) {
    var a = this.k.sb;
    try {
      a.contentWindow.opener = (0,this.t().GCXPC____NIXVBS_get_wrapper)(this, this.pd), this.tb = !0
    }catch(b) {
      Z.log(Dg, "exception caught while attempting setup: " + b, void 0)
    }
    this.tb || this.t().setTimeout(v(this.md, this), 100)
  }
};
p.ld = function() {
  if(!this.tb) {
    try {
      var a = this.t().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Sa = a;
        if(this.Sa.GetAuthToken() != this.pe) {
          Z.log(Dg, "Invalid auth token from other party", void 0);
          return
        }
        this.Sa.CreateChannel((0,this.t().GCXPC____NIXVBS_get_wrapper)(this, this.pd));
        this.tb = !0;
        this.k.Ea()
      }
    }catch(b) {
      Z.log(Dg, "exception caught while attempting setup: " + b, void 0);
      return
    }
    this.tb || this.t().setTimeout(v(this.ld, this), 100)
  }
};
p.Oe = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || Z.log(Dg, "Invalid NIX channel given to createChannel_", void 0);
  this.Sa = a;
  this.Sa.GetAuthToken() != this.pe ? Z.log(Dg, "Invalid auth token from other party", void 0) : this.k.Ea()
};
p.Ve = function(a, b) {
  this.t().setTimeout(v(function() {
    this.k.Ja(a, b)
  }, this), 1)
};
p.send = function(a, b) {
  "unknown" !== typeof this.Sa && Z.log(Dg, "NIX channel not connected", void 0);
  this.Sa.SendMessage(a, b)
};
p.u = function() {
  yi.ia.u.call(this);
  this.Sa = null
};
function Bi(a, b) {
  Kh.call(this);
  for(var c = 0, d;d = Zg[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.o = a;
  this.name = this.o[$.jd] || ah(10);
  this.Aa = b || Dh();
  this.Yb = [];
  this.fc = new di(this);
  a[$.Va] = a[$.Va] || Xg(this.Aa.t().location.href) + "/robots.txt";
  a[$.Wa] = a[$.Wa] || Xg(a[$.Sb] || "") + "/robots.txt";
  $g[this.name] = this;
  ag(window, "unload", Ci);
  Z.info("CrossPageChannel created: " + this.name)
}
qa(Bi, Kh);
var Di = /^%*tp$/, Ei = /^%+tp$/;
p = Bi.prototype;
p.Oa = null;
p.wa = null;
p.Z = null;
p.fd = 1;
p.ua = function() {
  return 2 == this.fd
};
p.Fa = null;
p.sb = null;
function Rh(a) {
  try {
    return!!a.Fa && !Boolean(a.Fa.closed)
  }catch(b) {
    return!1
  }
}
function Fi(a, b, c) {
  Z.info("createPeerIframe()");
  var d = a.o[$.Ka];
  d || (d = a.o[$.Ka] = "xpcpeer" + ah(4));
  var e = Dh(b).createElement("IFRAME");
  e.id = e.name = d;
  c ? c(e) : e.style.width = e.style.height = "100%";
  Gi(a);
  a.wa = new ch(void 0, a);
  var f = Hi(a);
  fi(a.fc, e, "load", a.wa.qa, !1, a.wa);
  zf || Af ? window.setTimeout(v(function() {
    b.appendChild(e);
    e.src = f.toString();
    Z.info("peer iframe created (" + d + ")")
  }, a), 1) : (e.src = f.toString(), b.appendChild(e), Z.info("peer iframe created (" + d + ")"))
}
function Gi(a) {
  a.wa && (a.wa.cancel(), a.wa = null);
  a.Yb.length = 0;
  a = a.fc;
  Ea(a.D, hg);
  a.D.length = 0
}
function Hi(a) {
  var b = a.o[$.Sb];
  u(b) && (b = a.o[$.Sb] = new lh(b));
  var c = {};
  c[$.jd] = a.name;
  c[$.zb] = a.o[$.zb];
  c[$.nc] = a.o[$.nc];
  a.o[$.mc] && (c[$.Rb] = a.o[$.mc]);
  a.o[$.Va] && (c[$.Wa] = a.o[$.Va]);
  a.o[$.Wa] && (c[$.Va] = a.o[$.Wa]);
  (a = a.o[$.pc]) && (c[$.pc] = 1 == a ? 0 : 1);
  a = b;
  c = Qg(c);
  nh(a);
  a.Ga.set("xpc", c);
  return b
}
p.sa = function(a) {
  this.Nc = a || da;
  this.wa ? ih(this.wa, this.Kd, null, void 0) : this.Kd()
};
p.Kd = function() {
  Z.info("continueConnection_()");
  this.wa = null;
  this.o[$.Ka] && (this.sb = u(this.o[$.Ka]) ? this.Aa.Db.getElementById(this.o[$.Ka]) : this.o[$.Ka]);
  if(this.sb) {
    var a = this.sb.contentWindow;
    a || (a = window.frames[this.o[$.Ka]]);
    this.Fa = a
  }
  if(!this.Fa) {
    if(window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.Fa = window.parent
  }
  if(!this.Z) {
    if(!this.o[$.zb]) {
      var a = this.o, b = $.zb, c;
      if(ga(document.postMessage) || ga(window.postMessage) || yf && window.postMessage) {
        c = 1
      }else {
        if(zf) {
          c = 2
        }else {
          if(yf && this.o[$.Rb]) {
            c = 3
          }else {
            var d;
            if(d = yf) {
              d = !1;
              try {
                c = window.opener, window.opener = {}, d = Tf(window, "opener"), window.opener = c
              }catch(e) {
              }
            }
            c = d ? 6 : 4
          }
        }
      }
      a[b] = c
    }
    switch(this.o[$.zb]) {
      case 1:
        this.Z = new ri(this, this.o[$.oc], this.Aa, !!this.o[$.nc], this.o[$.ue] || 2);
        break;
      case 6:
        this.Z = new yi(this, this.Aa);
        break;
      case 2:
        this.Z = new gi(this, this.Aa);
        break;
      case 3:
        this.Z = new hi(this, this.Aa);
        break;
      case 4:
        this.Z = new Lh(this, this.Aa)
    }
    if(this.Z) {
      Z.info("Transport created: " + this.Z.getName())
    }else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
  for(this.Z.sa();0 < this.Yb.length;) {
    this.Yb.shift()()
  }
};
p.close = function() {
  Gi(this);
  this.fd = 3;
  pf(this.Z);
  this.Nc = this.Z = null;
  pf(this.Oa);
  this.Oa = null;
  Z.info('Channel "' + this.name + '" closed')
};
p.Ea = function(a) {
  this.ua() || this.Oa && this.Oa.Yd() || (this.fd = 2, Z.info('Channel "' + this.name + '" connected'), pf(this.Oa), a ? (this.Oa = new Ah(this.Nc, a), this.Oa.start()) : (this.Oa = null, this.Nc()))
};
p.ee = Bi.prototype.Ea;
p.send = function(a, b) {
  this.ua() ? Rh(this) ? (ha(b) && (b = Qg(b)), this.Z.send(Ii(a), b)) : (Z.log(Dg, "Peer has disappeared.", void 0), this.close()) : Z.log(Dg, "Can't send. Channel not connected.", void 0)
};
p.Ja = function(a, b, c) {
  if(this.wa) {
    this.Yb.push(v(this.Ja, this, a, b, c))
  }else {
    var d = this.o[$.oc];
    if(/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.o[$.oc]) {
      if(this.mb) {
        Z.log(Eg, "CrossPageChannel::xpcDeliver(): Disposed.", void 0)
      }else {
        if(a && "tp" != a) {
          if(this.ua()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Ei.test(a) ? a.substring(1) : a, c = this.cd[a], c || (this.Pd ? c = {qa:na(this.Pd, a), fe:ha(b)} : (this.Uc.log(Eg, 'Unknown service name "' + a + '"', void 0), c = null)), c) {
              var e;
              a: {
                if((d = c.fe) && u(b)) {
                  try {
                    e = Pg(b);
                    break a
                  }catch(f) {
                    this.Uc.log(Eg, "Expected JSON payload for " + a + ', was "' + b + '"', void 0);
                    e = null;
                    break a
                  }
                }else {
                  if(!d && !u(b)) {
                    e = Qg(b);
                    break a
                  }
                }
                e = b
              }
              null != e && c.qa(e)
            }
          }else {
            Z.info("CrossPageChannel::xpcDeliver(): Not connected.")
          }
        }else {
          this.Z.gd(b)
        }
      }
    }else {
      Z.log(Eg, 'Message received from unapproved origin "' + c + '" - rejected.', void 0)
    }
  }
};
function Ii(a) {
  Di.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function Vh(a) {
  var b = a.o[$.pc];
  return b ? b : window.parent == a.Fa ? 1 : 0
}
p.u = function() {
  this.close();
  this.sb = this.Fa = null;
  delete $g[this.name];
  pf(this.fc);
  delete this.fc;
  Bi.ia.u.call(this)
};
function Ci() {
  for(var a in $g) {
    pf($g[a])
  }
}
;yd(fe, od.a(function(a) {
  var b = S.c(a, 0, null);
  a = S.c(a, 1, null);
  return V([Uc.b(b.toLowerCase()), a])
}, Ae.f(P([We.b({pf:"complete", vf:"success", qf:"error", of:"abort", tf:"ready", uf:"readystatechange", TIMEOUT:"timeout", rf:"incrementaldata", sf:"progress"})], 0))));
var Ji = function() {
  function a(a, b, c, d) {
    if(a ? a.Gd : a) {
      return a.Gd(a, b, c, d)
    }
    var e;
    e = Ji[t(null == a ? null : a)];
    if(!e && (e = Ji._, !e)) {
      throw z("IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }
  function b(a, b, c) {
    if(a ? a.Fd : a) {
      return a.Fd(a, b, c)
    }
    var d;
    d = Ji[t(null == a ? null : a)];
    if(!d && (d = Ji._, !d)) {
      throw z("IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }
  function c(a, b) {
    if(a ? a.Ed : a) {
      return a.Ed(a, b)
    }
    var c;
    c = Ji[t(null == a ? null : a)];
    if(!c && (c = Ji._, !c)) {
      throw z("IConnection.connect", a);
    }
    return c.call(null, a, b)
  }
  function d(a) {
    if(a ? a.Dd : a) {
      return a.Dd(a)
    }
    var b;
    b = Ji[t(null == a ? null : a)];
    if(!b && (b = Ji._, !b)) {
      throw z("IConnection.connect", a);
    }
    return b.call(null, a)
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, k);
      case 4:
        return a.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.a = c;
  e.c = b;
  e.m = a;
  return e
}(), Ki = function() {
  function a(a, b, c, d, e, f) {
    if(a ? a.Ne : a) {
      return a.Ne(a, b, c, d, e, f)
    }
    var s;
    s = Ki[t(null == a ? null : a)];
    if(!s && (s = Ki._, !s)) {
      throw z("IConnection.transmit", a);
    }
    return s.call(null, a, b, c, d, e, f)
  }
  function b(a, b, c, d, e) {
    if(a ? a.Me : a) {
      return a.Me(a, b, c, d, e)
    }
    var f;
    f = Ki[t(null == a ? null : a)];
    if(!f && (f = Ki._, !f)) {
      throw z("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }
  function c(a, b, c, d) {
    if(a ? a.Le : a) {
      return a.Le(a, b, c, d)
    }
    var e;
    e = Ki[t(null == a ? null : a)];
    if(!e && (e = Ki._, !e)) {
      throw z("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }
  function d(a, b, c) {
    if(a ? a.Hd : a) {
      return a.Hd(a, b, c)
    }
    var d;
    d = Ki[t(null == a ? null : a)];
    if(!d && (d = Ki._, !d)) {
      throw z("IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }
  function e(a, b) {
    if(a ? a.Ke : a) {
      return a.Ke(a, b)
    }
    var c;
    c = Ki[t(null == a ? null : a)];
    if(!c && (c = Ki._, !c)) {
      throw z("IConnection.transmit", a);
    }
    return c.call(null, a, b)
  }
  var f = null, f = function(f, k, l, m, n, q) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, m);
      case 5:
        return b.call(this, f, k, l, m, n);
      case 6:
        return a.call(this, f, k, l, m, n, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = e;
  f.c = d;
  f.m = c;
  f.S = b;
  f.ra = a;
  return f
}(), Li = yd(fe, od.a(function(a) {
  var b = S.c(a, 0, null);
  a = S.c(a, 1, null);
  return V([Uc.b(b.toLowerCase()), a])
}, We.b($))), Mi = function() {
  function a(a, b, c, h) {
    if(a ? a.Jd : a) {
      return a.Jd(a, b, c, h)
    }
    var k;
    k = Mi[t(null == a ? null : a)];
    if(!k && (k = Mi._, !k)) {
      throw z("ICrossPageChannel.register-service", a);
    }
    return k.call(null, a, b, c, h)
  }
  function b(a, b, c) {
    if(a ? a.Id : a) {
      return a.Id(a, b, c)
    }
    var h;
    h = Mi[t(null == a ? null : a)];
    if(!h && (h = Mi._, !h)) {
      throw z("ICrossPageChannel.register-service", a);
    }
    return h.call(null, a, b, c)
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.m = a;
  return c
}();
p = Bi.prototype;
p.Dd = function(a) {
  return Ji.a(a, null)
};
p.Ed = function(a, b) {
  return a.sa(b)
};
p.Fd = function(a, b, c) {
  return Ji.m(a, b, c, document.body)
};
p.Gd = function(a, b, c, d) {
  Fi(a, d, c);
  return a.sa(b)
};
p.Hd = function(a, b, c) {
  return a.send(Tc(b), c)
};
p.Id = function(a, b, c) {
  return Mi.m(a, b, c, !1)
};
p.Jd = function(a, b, c, d) {
  b = Tc(b);
  a.cd[b] = {qa:c, fe:!!d}
};
var Ni = function() {
  function a(a) {
    return new Bi(Gc.c(function(a, b) {
      var c = S.c(b, 0, null), d = S.c(b, 1, null), c = hc.a(Li, c);
      w(c) && (a[c] = d);
      return a
    }, {}, a))
  }
  function b() {
    var a;
    a = (new lh(window.location.href)).Ga.get("xpc");
    return w(a) ? new Bi(Pg(a)) : null
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.b = a;
  return c
}();
var Oi = function() {
  function a(a, b) {
    return mc.a(A, rd(ud.a(sd.b(a), b)))
  }
  function b(a) {
    return mc.a(A, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c
}();
var Pi = Qe.b(null);
function Qi(a) {
  var b = function() {
    try {
      return Ob([Ye, ef, jf, "" + A(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Ob([Ye, hf, jf, Ne.f(P([b], 0)), df, w(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      if(y) {
        throw b;
      }
      return null
    }
  }();
  return Ne.f(P([b], 0))
}
Qe.b(0);
function Ri() {
  var a = Ni.b(Ob([bf, "http://localhost:9000/repl"]));
  Se.a(Pi, nd(a));
  Mi.c(a, gf, function(b) {
    return Ki.c(a, ff, Qi(b))
  });
  return Ji.c(a, nd(null), function(a) {
    return a.style.display = "none"
  })
}
;window.Lf = function() {
  return Ri()
};
function Si(a, b, c) {
  return[A("rgb("), A(Oi.a(",", V([a, b, c]))), A(")")].join("")
}
var Ti = Si(255, 255, 255), Ui = Si(169, 169, 169), Vi = Si(0, 0, 0);
function Wi() {
  var a = Fh("surface");
  return V([a.getContext("2d"), a.width, a.height])
}
function Xi(a, b, c) {
  a = S.c(a, 0, null);
  var d = S.c(b, 0, null), e = S.c(b, 1, null), f = S.c(b, 2, null);
  b = S.c(b, 3, null);
  a.fillStyle = c;
  a.fillRect(d, e, f, b)
}
function Yi(a, b, c) {
  a = S.c(a, 0, null);
  var d = S.c(b, 0, null), e = S.c(b, 1, null), f = S.c(b, 2, null);
  b = S.c(b, 3, null);
  a.strokeStyle = c;
  a.lineWidth = 2;
  a.strokeRect(d, e, f, b)
}
function Zi(a, b) {
  S.c(b, 0, null);
  var c = S.c(b, 1, null), d = S.c(b, 2, null), e = cf.call(null, a), f = Xe.call(null, a), h = Fh("gens");
  Xi(b, V([0, 0, c, d]), Ti);
  Yi(b, V([0, 0, c, d]), Vi);
  h.innerHTML = f;
  for(var h = I(Ge.b(R(e))), k = null, l = 0, m = 0;;) {
    if(m < l) {
      for(var f = k.G(k, m), n = I(Ge.b(R(J(e)))), q = null, s = 0, C = 0;;) {
        if(C < s) {
          var F = q.G(q, C), N = Jc(d, R(e)), K = Jc(c, R(J(e))), Y = K * f, oa = K * F, F = S.a(S.a(e, f), F);
          w(F) && Xi(b, V([Y, oa, K, N]), Vi);
          Yi(b, V([Y, oa, K, N]), Ui);
          C += 1
        }else {
          if(n = I(n)) {
            wc(n) ? (s = Kb(n), n = Lb(n), q = s, s = R(s)) : (K = J(n), q = Jc(d, R(e)), s = Jc(c, R(J(e))), C = s * f, N = s * K, K = S.a(S.a(e, f), K), w(K) && Xi(b, V([C, N, s, q]), Vi), Yi(b, V([C, N, s, q]), Ui), n = O(n), q = null, s = 0), C = 0
          }else {
            break
          }
        }
      }
      m += 1
    }else {
      if(f = I(h)) {
        h = f;
        if(wc(h)) {
          k = Kb(h), h = Lb(h), f = k, l = R(k), k = f
        }else {
          f = J(h);
          k = I(Ge.b(R(J(e))));
          l = null;
          for(n = m = 0;;) {
            if(n < m) {
              K = l.G(l, n), q = Jc(d, R(e)), s = Jc(c, R(J(e))), C = s * f, N = s * K, K = S.a(S.a(e, f), K), w(K) && Xi(b, V([C, N, s, q]), Vi), Yi(b, V([C, N, s, q]), Ui), n += 1
            }else {
              if(k = I(k)) {
                wc(k) ? (m = Kb(k), k = Lb(k), l = m, m = R(m)) : (s = J(k), l = Jc(d, R(e)), m = Jc(c, R(J(e))), n = m * f, q = m * s, s = S.a(S.a(e, f), s), w(s) && Xi(b, V([n, q, m, l]), Vi), Yi(b, V([n, q, m, l]), Ui), k = O(k), l = null, m = 0), n = 0
              }else {
                break
              }
            }
          }
          h = O(h);
          k = null;
          l = 0
        }
        m = 0
      }else {
        return null
      }
    }
  }
}
function $i(a, b) {
  return Se.a(a, function(a) {
    Zi(a, b);
    return Ae.f(P([a, Ob([cf, kf(cf.call(null, a)), Xe, Xe.call(null, a) + 1])], 0))
  })
}
function aj(a, b) {
  Se.a(a, function(a) {
    var b = af.call(null, a), e = $e.call(null, a);
    return Ae.f(P([a, Ob([cf, lf(b, e), Xe, 0])], 0))
  });
  return Zi(pb(a), b)
}
function bj(a, b, c) {
  c = c.target.id;
  var d = Ze.call(null, pb(a));
  if(Wb.a(c, "start")) {
    if(null == d) {
      return c = window.setInterval(function() {
        return $i(a, b)
      }, 250), Se.c(a, Ae, Ob([Ze, c])), Fh("start").innerHTML = "Pause game"
    }
    window.clearInterval(d);
    Fh("start").innerHTML = "Run game";
    return Se.c(a, Ae, Ob([Ze, null]))
  }
  return Wb.a(c, "reset") ? aj(a, b) : null
}
function cj(a, b) {
  var c = Wi(), d = Qe.b(Ob([af, a, $e, b]));
  aj(d, c);
  return ag(window, "click", function(a) {
    return bj(d, c, a)
  })
}
var dj = ["life", "client", "init"], ej = r;
dj[0] in ej || !ej.execScript || ej.execScript("var " + dj[0]);
for(var fj;dj.length && (fj = dj.shift());) {
  dj.length || void 0 === cj ? ej = ej[fj] ? ej[fj] : ej[fj] = {} : ej[fj] = cj
}
;
})();
