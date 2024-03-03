import {
    g as Re,
    c as mn,
    C as Gt,
    a as Sm
} from "./auth-72H9TcpW.js";
import {
    e as $m,
    a as Lw,
    b as Fw,
    r as Dw,
    p as jw,
    c as Uw
} from "./caption-parsing-BGqd6Hpv.js";

function Mw(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const a in n)
                if (a !== "default" && !(a in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, a);
                    i && Object.defineProperty(e, a, i.get ? i : {
                        enumerable: !0,
                        get: () => n[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Am = {
        exports: {}
    },
    is = {},
    Om = {
        exports: {}
    },
    X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na = Symbol.for("react.element"),
    Bw = Symbol.for("react.portal"),
    Vw = Symbol.for("react.fragment"),
    zw = Symbol.for("react.strict_mode"),
    qw = Symbol.for("react.profiler"),
    Ww = Symbol.for("react.provider"),
    Gw = Symbol.for("react.context"),
    Hw = Symbol.for("react.forward_ref"),
    Kw = Symbol.for("react.suspense"),
    Xw = Symbol.for("react.memo"),
    Yw = Symbol.for("react.lazy"),
    pf = Symbol.iterator;

function Jw(e) {
    return e === null || typeof e != "object" ? null : (e = pf && e[pf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Rm = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    _m = Object.assign,
    Cm = {};

function Vr(e, t, r) {
    this.props = e, this.context = t, this.refs = Cm, this.updater = r || Rm
}
Vr.prototype.isReactComponent = {};
Vr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Vr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Nm() {}
Nm.prototype = Vr.prototype;

function wc(e, t, r) {
    this.props = e, this.context = t, this.refs = Cm, this.updater = r || Rm
}
var Ec = wc.prototype = new Nm;
Ec.constructor = wc;
_m(Ec, Vr.prototype);
Ec.isPureReactComponent = !0;
var mf = Array.isArray,
    xm = Object.prototype.hasOwnProperty,
    Sc = {
        current: null
    },
    Tm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Im(e, t, r) {
    var n, a = {},
        i = null,
        s = null;
    if (t != null)
        for (n in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) xm.call(t, n) && !Tm.hasOwnProperty(n) && (a[n] = t[n]);
    var o = arguments.length - 2;
    if (o === 1) a.children = r;
    else if (1 < o) {
        for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
        a.children = u
    }
    if (e && e.defaultProps)
        for (n in o = e.defaultProps, o) a[n] === void 0 && (a[n] = o[n]);
    return {
        $$typeof: na,
        type: e,
        key: i,
        ref: s,
        props: a,
        _owner: Sc.current
    }
}

function Qw(e, t) {
    return {
        $$typeof: na,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function $c(e) {
    return typeof e == "object" && e !== null && e.$$typeof === na
}

function Zw(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var gf = /\/+/g;

function Js(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Zw("" + e.key) : t.toString(36)
}

function Ha(e, t, r, n, a) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case na:
                case Bw:
                    s = !0
            }
    }
    if (s) return s = e, a = a(s), e = n === "" ? "." + Js(s, 0) : n, mf(a) ? (r = "", e != null && (r = e.replace(gf, "$&/") + "/"), Ha(a, t, r, "", function(c) {
        return c
    })) : a != null && ($c(a) && (a = Qw(a, r + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(gf, "$&/") + "/") + e)), t.push(a)), 1;
    if (s = 0, n = n === "" ? "." : n + ":", mf(e))
        for (var o = 0; o < e.length; o++) {
            i = e[o];
            var u = n + Js(i, o);
            s += Ha(i, t, r, u, a)
        } else if (u = Jw(e), typeof u == "function")
            for (e = u.call(e), o = 0; !(i = e.next()).done;) i = i.value, u = n + Js(i, o++), s += Ha(i, t, r, u, a);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Sa(e, t, r) {
    if (e == null) return e;
    var n = [],
        a = 0;
    return Ha(e, n, "", "", function(i) {
        return t.call(r, i, a++)
    }), n
}

function e0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ge = {
        current: null
    },
    Ka = {
        transition: null
    },
    t0 = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Ka,
        ReactCurrentOwner: Sc
    };
X.Children = {
    map: Sa,
    forEach: function(e, t, r) {
        Sa(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Sa(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Sa(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!$c(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = Vr;
X.Fragment = Vw;
X.Profiler = qw;
X.PureComponent = wc;
X.StrictMode = zw;
X.Suspense = Kw;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t0;
X.cloneElement = function(e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = _m({}, e.props),
        a = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Sc.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
        for (u in t) xm.call(t, u) && !Tm.hasOwnProperty(u) && (n[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) n.children = r;
    else if (1 < u) {
        o = Array(u);
        for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
        n.children = o
    }
    return {
        $$typeof: na,
        type: e.type,
        key: a,
        ref: i,
        props: n,
        _owner: s
    }
};
X.createContext = function(e) {
    return e = {
        $$typeof: Gw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Ww,
        _context: e
    }, e.Consumer = e
};
X.createElement = Im;
X.createFactory = function(e) {
    var t = Im.bind(null, e);
    return t.type = e, t
};
X.createRef = function() {
    return {
        current: null
    }
};
X.forwardRef = function(e) {
    return {
        $$typeof: Hw,
        render: e
    }
};
X.isValidElement = $c;
X.lazy = function(e) {
    return {
        $$typeof: Yw,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: e0
    }
};
X.memo = function(e, t) {
    return {
        $$typeof: Xw,
        type: e,
        compare: t === void 0 ? null : t
    }
};
X.startTransition = function(e) {
    var t = Ka.transition;
    Ka.transition = {};
    try {
        e()
    } finally {
        Ka.transition = t
    }
};
X.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
X.useCallback = function(e, t) {
    return ge.current.useCallback(e, t)
};
X.useContext = function(e) {
    return ge.current.useContext(e)
};
X.useDebugValue = function() {};
X.useDeferredValue = function(e) {
    return ge.current.useDeferredValue(e)
};
X.useEffect = function(e, t) {
    return ge.current.useEffect(e, t)
};
X.useId = function() {
    return ge.current.useId()
};
X.useImperativeHandle = function(e, t, r) {
    return ge.current.useImperativeHandle(e, t, r)
};
X.useInsertionEffect = function(e, t) {
    return ge.current.useInsertionEffect(e, t)
};
X.useLayoutEffect = function(e, t) {
    return ge.current.useLayoutEffect(e, t)
};
X.useMemo = function(e, t) {
    return ge.current.useMemo(e, t)
};
X.useReducer = function(e, t, r) {
    return ge.current.useReducer(e, t, r)
};
X.useRef = function(e) {
    return ge.current.useRef(e)
};
X.useState = function(e) {
    return ge.current.useState(e)
};
X.useSyncExternalStore = function(e, t, r) {
    return ge.current.useSyncExternalStore(e, t, r)
};
X.useTransition = function() {
    return ge.current.useTransition()
};
X.version = "18.2.0";
Om.exports = X;
var T = Om.exports;
const Pm = Re(T),
    bB = Mw({
        __proto__: null,
        default: Pm
    }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r0 = T,
    n0 = Symbol.for("react.element"),
    a0 = Symbol.for("react.fragment"),
    i0 = Object.prototype.hasOwnProperty,
    s0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function km(e, t, r) {
    var n, a = {},
        i = null,
        s = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) i0.call(t, n) && !o0.hasOwnProperty(n) && (a[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
    return {
        $$typeof: n0,
        type: e,
        key: i,
        ref: s,
        props: a,
        _owner: s0.current
    }
}
is.Fragment = a0;
is.jsx = km;
is.jsxs = km;
Am.exports = is;
var wB = Am.exports,
    nn = function(e) {
        return e && e.Math === Math && e
    },
    te = nn(typeof globalThis == "object" && globalThis) || nn(typeof window == "object" && window) || nn(typeof self == "object" && self) || nn(typeof mn == "object" && mn) || nn(typeof mn == "object" && mn) || function() {
        return this
    }() || Function("return this")(),
    Ac = {},
    ie = function(e) {
        try {
            return !!e()
        } catch {
            return !0
        }
    },
    u0 = ie,
    ve = !u0(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1] !== 7
    }),
    c0 = ie,
    ss = !c0(function() {
        var e = (function() {}).bind();
        return typeof e != "function" || e.hasOwnProperty("prototype")
    }),
    l0 = ss,
    $a = Function.prototype.call,
    nt = l0 ? $a.bind($a) : function() {
        return $a.apply($a, arguments)
    },
    Lm = {},
    Fm = {}.propertyIsEnumerable,
    Dm = Object.getOwnPropertyDescriptor,
    f0 = Dm && !Fm.call({
        1: 2
    }, 1);
Lm.f = f0 ? function(t) {
    var r = Dm(this, t);
    return !!r && r.enumerable
} : Fm;
var aa = function(e, t) {
        return {
            enumerable: !(e & 1),
            configurable: !(e & 2),
            writable: !(e & 4),
            value: t
        }
    },
    jm = ss,
    Um = Function.prototype,
    lu = Um.call,
    d0 = jm && Um.bind.bind(lu, lu),
    ee = jm ? d0 : function(e) {
        return function() {
            return lu.apply(e, arguments)
        }
    },
    Mm = ee,
    h0 = Mm({}.toString),
    p0 = Mm("".slice),
    ia = function(e) {
        return p0(h0(e), 8, -1)
    },
    m0 = ee,
    g0 = ie,
    v0 = ia,
    Qs = Object,
    y0 = m0("".split),
    Bm = g0(function() {
        return !Qs("z").propertyIsEnumerable(0)
    }) ? function(e) {
        return v0(e) === "String" ? y0(e, "") : Qs(e)
    } : Qs,
    os = function(e) {
        return e == null
    },
    b0 = os,
    w0 = TypeError,
    nr = function(e) {
        if (b0(e)) throw new w0("Can't call method on " + e);
        return e
    },
    E0 = Bm,
    S0 = nr,
    kt = function(e) {
        return E0(S0(e))
    },
    fu = typeof document == "object" && document.all,
    $0 = typeof fu > "u" && fu !== void 0,
    Vm = {
        all: fu,
        IS_HTMLDDA: $0
    },
    zm = Vm,
    A0 = zm.all,
    oe = zm.IS_HTMLDDA ? function(e) {
        return typeof e == "function" || e === A0
    } : function(e) {
        return typeof e == "function"
    },
    vf = oe,
    qm = Vm,
    O0 = qm.all,
    vt = qm.IS_HTMLDDA ? function(e) {
        return typeof e == "object" ? e !== null : vf(e) || e === O0
    } : function(e) {
        return typeof e == "object" ? e !== null : vf(e)
    },
    Zs = te,
    R0 = oe,
    _0 = function(e) {
        return R0(e) ? e : void 0
    },
    at = function(e, t) {
        return arguments.length < 2 ? _0(Zs[e]) : Zs[e] && Zs[e][t]
    },
    C0 = ee,
    zr = C0({}.isPrototypeOf),
    Oc = typeof navigator < "u" && String(navigator.userAgent) || "",
    Wm = te,
    eo = Oc,
    yf = Wm.process,
    bf = Wm.Deno,
    wf = yf && yf.versions || bf && bf.version,
    Ef = wf && wf.v8,
    Me, li;
Ef && (Me = Ef.split("."), li = Me[0] > 0 && Me[0] < 4 ? 1 : +(Me[0] + Me[1]));
!li && eo && (Me = eo.match(/Edge\/(\d+)/), (!Me || Me[1] >= 74) && (Me = eo.match(/Chrome\/(\d+)/), Me && (li = +Me[1])));
var Gm = li,
    Sf = Gm,
    N0 = ie,
    x0 = te,
    T0 = x0.String,
    Hm = !!Object.getOwnPropertySymbols && !N0(function() {
        var e = Symbol("symbol detection");
        return !T0(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Sf && Sf < 41
    }),
    I0 = Hm,
    Km = I0 && !Symbol.sham && typeof Symbol.iterator == "symbol",
    P0 = at,
    k0 = oe,
    L0 = zr,
    F0 = Km,
    D0 = Object,
    Rc = F0 ? function(e) {
        return typeof e == "symbol"
    } : function(e) {
        var t = P0("Symbol");
        return k0(t) && L0(t.prototype, D0(e))
    },
    j0 = String,
    sa = function(e) {
        try {
            return j0(e)
        } catch {
            return "Object"
        }
    },
    U0 = oe,
    M0 = sa,
    B0 = TypeError,
    yt = function(e) {
        if (U0(e)) return e;
        throw new B0(M0(e) + " is not a function")
    },
    V0 = yt,
    z0 = os,
    _c = function(e, t) {
        var r = e[t];
        return z0(r) ? void 0 : V0(r)
    },
    to = nt,
    ro = oe,
    no = vt,
    q0 = TypeError,
    W0 = function(e, t) {
        var r, n;
        if (t === "string" && ro(r = e.toString) && !no(n = to(r, e)) || ro(r = e.valueOf) && !no(n = to(r, e)) || t !== "string" && ro(r = e.toString) && !no(n = to(r, e))) return n;
        throw new q0("Can't convert object to primitive value")
    },
    Xm = {
        exports: {}
    },
    Ym = !1,
    $f = te,
    G0 = Object.defineProperty,
    Cc = function(e, t) {
        try {
            G0($f, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch {
            $f[e] = t
        }
        return t
    },
    H0 = te,
    K0 = Cc,
    Af = "__core-js_shared__",
    X0 = H0[Af] || K0(Af, {}),
    Nc = X0,
    Of = Nc;
(Xm.exports = function(e, t) {
    return Of[e] || (Of[e] = t !== void 0 ? t : {})
})("versions", []).push({
    version: "3.34.0",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Jm = Xm.exports,
    Y0 = nr,
    J0 = Object,
    ar = function(e) {
        return J0(Y0(e))
    },
    Q0 = ee,
    Z0 = ar,
    e1 = Q0({}.hasOwnProperty),
    ye = Object.hasOwn || function(t, r) {
        return e1(Z0(t), r)
    },
    t1 = ee,
    r1 = 0,
    n1 = Math.random(),
    a1 = t1(1 .toString),
    us = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + a1(++r1 + n1, 36)
    },
    i1 = te,
    s1 = Jm,
    Rf = ye,
    o1 = us,
    u1 = Hm,
    c1 = Km,
    br = i1.Symbol,
    ao = s1("wks"),
    l1 = c1 ? br.for || br : br && br.withoutSetter || o1,
    Lt = function(e) {
        return Rf(ao, e) || (ao[e] = u1 && Rf(br, e) ? br[e] : l1("Symbol." + e)), ao[e]
    },
    f1 = nt,
    _f = vt,
    Cf = Rc,
    d1 = _c,
    h1 = W0,
    p1 = Lt,
    m1 = TypeError,
    g1 = p1("toPrimitive"),
    Qm = function(e, t) {
        if (!_f(e) || Cf(e)) return e;
        var r = d1(e, g1),
            n;
        if (r) {
            if (t === void 0 && (t = "default"), n = f1(r, e, t), !_f(n) || Cf(n)) return n;
            throw new m1("Can't convert object to primitive value")
        }
        return t === void 0 && (t = "number"), h1(e, t)
    },
    v1 = Qm,
    y1 = Rc,
    cs = function(e) {
        var t = v1(e, "string");
        return y1(t) ? t : t + ""
    },
    b1 = te,
    Nf = vt,
    du = b1.document,
    w1 = Nf(du) && Nf(du.createElement),
    xc = function(e) {
        return w1 ? du.createElement(e) : {}
    },
    E1 = ve,
    S1 = ie,
    $1 = xc,
    Zm = !E1 && !S1(function() {
        return Object.defineProperty($1("div"), "a", {
            get: function() {
                return 7
            }
        }).a !== 7
    }),
    A1 = ve,
    O1 = nt,
    R1 = Lm,
    _1 = aa,
    C1 = kt,
    N1 = cs,
    x1 = ye,
    T1 = Zm,
    xf = Object.getOwnPropertyDescriptor;
Ac.f = A1 ? xf : function(t, r) {
    if (t = C1(t), r = N1(r), T1) try {
        return xf(t, r)
    } catch {}
    if (x1(t, r)) return _1(!O1(R1.f, t, r), t[r])
};
var it = {},
    I1 = ve,
    P1 = ie,
    eg = I1 && P1(function() {
        return Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype !== 42
    }),
    k1 = vt,
    L1 = String,
    F1 = TypeError,
    st = function(e) {
        if (k1(e)) return e;
        throw new F1(L1(e) + " is not an object")
    },
    D1 = ve,
    j1 = Zm,
    U1 = eg,
    Aa = st,
    Tf = cs,
    M1 = TypeError,
    io = Object.defineProperty,
    B1 = Object.getOwnPropertyDescriptor,
    so = "enumerable",
    oo = "configurable",
    uo = "writable";
it.f = D1 ? U1 ? function(t, r, n) {
    if (Aa(t), r = Tf(r), Aa(n), typeof t == "function" && r === "prototype" && "value" in n && uo in n && !n[uo]) {
        var a = B1(t, r);
        a && a[uo] && (t[r] = n.value, n = {
            configurable: oo in n ? n[oo] : a[oo],
            enumerable: so in n ? n[so] : a[so],
            writable: !1
        })
    }
    return io(t, r, n)
} : io : function(t, r, n) {
    if (Aa(t), r = Tf(r), Aa(n), j1) try {
        return io(t, r, n)
    } catch {}
    if ("get" in n || "set" in n) throw new M1("Accessors not supported");
    return "value" in n && (t[r] = n.value), t
};
var V1 = ve,
    z1 = it,
    q1 = aa,
    ir = V1 ? function(e, t, r) {
        return z1.f(e, t, q1(1, r))
    } : function(e, t, r) {
        return e[t] = r, e
    },
    tg = {
        exports: {}
    },
    hu = ve,
    W1 = ye,
    rg = Function.prototype,
    G1 = hu && Object.getOwnPropertyDescriptor,
    Tc = W1(rg, "name"),
    H1 = Tc && (function() {}).name === "something",
    K1 = Tc && (!hu || hu && G1(rg, "name").configurable),
    X1 = {
        EXISTS: Tc,
        PROPER: H1,
        CONFIGURABLE: K1
    },
    Y1 = ee,
    J1 = oe,
    pu = Nc,
    Q1 = Y1(Function.toString);
J1(pu.inspectSource) || (pu.inspectSource = function(e) {
    return Q1(e)
});
var ng = pu.inspectSource,
    Z1 = te,
    eE = oe,
    If = Z1.WeakMap,
    tE = eE(If) && /native code/.test(String(If)),
    rE = Jm,
    nE = us,
    Pf = rE("keys"),
    Ic = function(e) {
        return Pf[e] || (Pf[e] = nE(e))
    },
    Pc = {},
    aE = tE,
    ag = te,
    iE = vt,
    sE = ir,
    co = ye,
    lo = Nc,
    oE = Ic,
    uE = Pc,
    kf = "Object already initialized",
    mu = ag.TypeError,
    cE = ag.WeakMap,
    fi, Tn, di, lE = function(e) {
        return di(e) ? Tn(e) : fi(e, {})
    },
    fE = function(e) {
        return function(t) {
            var r;
            if (!iE(t) || (r = Tn(t)).type !== e) throw new mu("Incompatible receiver, " + e + " required");
            return r
        }
    };
if (aE || lo.state) {
    var He = lo.state || (lo.state = new cE);
    He.get = He.get, He.has = He.has, He.set = He.set, fi = function(e, t) {
        if (He.has(e)) throw new mu(kf);
        return t.facade = e, He.set(e, t), t
    }, Tn = function(e) {
        return He.get(e) || {}
    }, di = function(e) {
        return He.has(e)
    }
} else {
    var hr = oE("state");
    uE[hr] = !0, fi = function(e, t) {
        if (co(e, hr)) throw new mu(kf);
        return t.facade = e, sE(e, hr, t), t
    }, Tn = function(e) {
        return co(e, hr) ? e[hr] : {}
    }, di = function(e) {
        return co(e, hr)
    }
}
var ig = {
        set: fi,
        get: Tn,
        has: di,
        enforce: lE,
        getterFor: fE
    },
    kc = ee,
    dE = ie,
    hE = oe,
    Oa = ye,
    gu = ve,
    pE = X1.CONFIGURABLE,
    mE = ng,
    sg = ig,
    gE = sg.enforce,
    vE = sg.get,
    Lf = String,
    Xa = Object.defineProperty,
    yE = kc("".slice),
    bE = kc("".replace),
    wE = kc([].join),
    EE = gu && !dE(function() {
        return Xa(function() {}, "length", {
            value: 8
        }).length !== 8
    }),
    SE = String(String).split("String"),
    $E = tg.exports = function(e, t, r) {
        yE(Lf(t), 0, 7) === "Symbol(" && (t = "[" + bE(Lf(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Oa(e, "name") || pE && e.name !== t) && (gu ? Xa(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), EE && r && Oa(r, "arity") && e.length !== r.arity && Xa(e, "length", {
            value: r.arity
        });
        try {
            r && Oa(r, "constructor") && r.constructor ? gu && Xa(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch {}
        var n = gE(e);
        return Oa(n, "source") || (n.source = wE(SE, typeof t == "string" ? t : "")), e
    };
Function.prototype.toString = $E(function() {
    return hE(this) && vE(this).source || mE(this)
}, "toString");
var og = tg.exports,
    AE = oe,
    OE = it,
    RE = og,
    _E = Cc,
    ls = function(e, t, r, n) {
        n || (n = {});
        var a = n.enumerable,
            i = n.name !== void 0 ? n.name : t;
        if (AE(r) && RE(r, i, n), n.global) a ? e[t] = r : _E(t, r);
        else {
            try {
                n.unsafe ? e[t] && (a = !0) : delete e[t]
            } catch {}
            a ? e[t] = r : OE.f(e, t, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return e
    },
    ug = {},
    CE = Math.ceil,
    NE = Math.floor,
    xE = Math.trunc || function(t) {
        var r = +t;
        return (r > 0 ? NE : CE)(r)
    },
    TE = xE,
    bt = function(e) {
        var t = +e;
        return t !== t || t === 0 ? 0 : TE(t)
    },
    IE = bt,
    PE = Math.max,
    kE = Math.min,
    cg = function(e, t) {
        var r = IE(e);
        return r < 0 ? PE(r + t, 0) : kE(r, t)
    },
    LE = bt,
    FE = Math.min,
    DE = function(e) {
        return e > 0 ? FE(LE(e), 9007199254740991) : 0
    },
    jE = DE,
    Ie = function(e) {
        return jE(e.length)
    },
    UE = kt,
    ME = cg,
    BE = Ie,
    Ff = function(e) {
        return function(t, r, n) {
            var a = UE(t),
                i = BE(a),
                s = ME(n, i),
                o;
            if (e && r !== r) {
                for (; i > s;)
                    if (o = a[s++], o !== o) return !0
            } else
                for (; i > s; s++)
                    if ((e || s in a) && a[s] === r) return e || s || 0;
            return !e && -1
        }
    },
    VE = {
        includes: Ff(!0),
        indexOf: Ff(!1)
    },
    zE = ee,
    fo = ye,
    qE = kt,
    WE = VE.indexOf,
    GE = Pc,
    Df = zE([].push),
    lg = function(e, t) {
        var r = qE(e),
            n = 0,
            a = [],
            i;
        for (i in r) !fo(GE, i) && fo(r, i) && Df(a, i);
        for (; t.length > n;) fo(r, i = t[n++]) && (~WE(a, i) || Df(a, i));
        return a
    },
    Lc = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    HE = lg,
    KE = Lc,
    XE = KE.concat("length", "prototype");
ug.f = Object.getOwnPropertyNames || function(t) {
    return HE(t, XE)
};
var fg = {};
fg.f = Object.getOwnPropertySymbols;
var YE = at,
    JE = ee,
    QE = ug,
    ZE = fg,
    eS = st,
    tS = JE([].concat),
    rS = YE("Reflect", "ownKeys") || function(t) {
        var r = QE.f(eS(t)),
            n = ZE.f;
        return n ? tS(r, n(t)) : r
    },
    jf = ye,
    nS = rS,
    aS = Ac,
    iS = it,
    dg = function(e, t, r) {
        for (var n = nS(t), a = iS.f, i = aS.f, s = 0; s < n.length; s++) {
            var o = n[s];
            !jf(e, o) && !(r && jf(r, o)) && a(e, o, i(t, o))
        }
    },
    sS = ie,
    oS = oe,
    uS = /#|\.prototype\./,
    oa = function(e, t) {
        var r = lS[cS(e)];
        return r === dS ? !0 : r === fS ? !1 : oS(t) ? sS(t) : !!t
    },
    cS = oa.normalize = function(e) {
        return String(e).replace(uS, ".").toLowerCase()
    },
    lS = oa.data = {},
    fS = oa.NATIVE = "N",
    dS = oa.POLYFILL = "P",
    hS = oa,
    ho = te,
    pS = Ac.f,
    mS = ir,
    gS = ls,
    vS = Cc,
    yS = dg,
    bS = hS,
    ne = function(e, t) {
        var r = e.target,
            n = e.global,
            a = e.stat,
            i, s, o, u, c, l;
        if (n ? s = ho : a ? s = ho[r] || vS(r, {}) : s = (ho[r] || {}).prototype, s)
            for (o in t) {
                if (c = t[o], e.dontCallGetSet ? (l = pS(s, o), u = l && l.value) : u = s[o], i = bS(n ? o : r + (a ? "." : "#") + o, e.forced), !i && u !== void 0) {
                    if (typeof c == typeof u) continue;
                    yS(c, u)
                }(e.sham || u && u.sham) && mS(c, "sham", !0), gS(s, o, c, e)
            }
    },
    wS = ss,
    hg = Function.prototype,
    Uf = hg.apply,
    Mf = hg.call,
    fs = typeof Reflect == "object" && Reflect.apply || (wS ? Mf.bind(Uf) : function() {
        return Mf.apply(Uf, arguments)
    }),
    ES = ee,
    SS = yt,
    $S = function(e, t, r) {
        try {
            return ES(SS(Object.getOwnPropertyDescriptor(e, t)[r]))
        } catch {}
    },
    AS = oe,
    OS = String,
    RS = TypeError,
    _S = function(e) {
        if (typeof e == "object" || AS(e)) return e;
        throw new RS("Can't set " + OS(e) + " as a prototype")
    },
    CS = $S,
    NS = st,
    xS = _S,
    Fc = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var e = !1,
            t = {},
            r;
        try {
            r = CS(Object.prototype, "__proto__", "set"), r(t, []), e = t instanceof Array
        } catch {}
        return function(a, i) {
            return NS(a), xS(i), e ? r(a, i) : a.__proto__ = i, a
        }
    }() : void 0),
    TS = it.f,
    IS = function(e, t, r) {
        r in e || TS(e, r, {
            configurable: !0,
            get: function() {
                return t[r]
            },
            set: function(n) {
                t[r] = n
            }
        })
    },
    PS = oe,
    kS = vt,
    Bf = Fc,
    pg = function(e, t, r) {
        var n, a;
        return Bf && PS(n = t.constructor) && n !== r && kS(a = n.prototype) && a !== r.prototype && Bf(e, a), e
    },
    LS = Lt,
    FS = LS("toStringTag"),
    mg = {};
mg[FS] = "z";
var DS = String(mg) === "[object z]",
    jS = DS,
    US = oe,
    Ya = ia,
    MS = Lt,
    BS = MS("toStringTag"),
    VS = Object,
    zS = Ya(function() {
        return arguments
    }()) === "Arguments",
    qS = function(e, t) {
        try {
            return e[t]
        } catch {}
    },
    qr = jS ? Ya : function(e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = qS(t = VS(e), BS)) == "string" ? r : zS ? Ya(t) : (n = Ya(t)) === "Object" && US(t.callee) ? "Arguments" : n
    },
    WS = qr,
    GS = String,
    sr = function(e) {
        if (WS(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return GS(e)
    },
    HS = sr,
    gg = function(e, t) {
        return e === void 0 ? arguments.length < 2 ? "" : t : HS(e)
    },
    KS = vt,
    XS = ir,
    YS = function(e, t) {
        KS(t) && "cause" in t && XS(e, "cause", t.cause)
    },
    JS = ee,
    vg = Error,
    QS = JS("".replace),
    ZS = function(e) {
        return String(new vg(e).stack)
    }("zxcasd"),
    yg = /\n\s*at [^:]*:[^\n]*/,
    e$ = yg.test(ZS),
    bg = function(e, t) {
        if (e$ && typeof e == "string" && !vg.prepareStackTrace)
            for (; t--;) e = QS(e, yg, "");
        return e
    },
    t$ = ie,
    r$ = aa,
    wg = !t$(function() {
        var e = new Error("a");
        return "stack" in e ? (Object.defineProperty(e, "stack", r$(1, 7)), e.stack !== 7) : !0
    }),
    n$ = ir,
    a$ = bg,
    i$ = wg,
    Vf = Error.captureStackTrace,
    s$ = function(e, t, r, n) {
        i$ && (Vf ? Vf(e, t) : n$(e, "stack", a$(r, n)))
    },
    zf = at,
    o$ = ye,
    qf = ir,
    u$ = zr,
    Wf = Fc,
    Gf = dg,
    Hf = IS,
    c$ = pg,
    l$ = gg,
    f$ = YS,
    d$ = s$,
    h$ = ve,
    Eg = function(e, t, r, n) {
        var a = "stackTraceLimit",
            i = n ? 2 : 1,
            s = e.split("."),
            o = s[s.length - 1],
            u = zf.apply(null, s);
        if (u) {
            var c = u.prototype;
            if (o$(c, "cause") && delete c.cause, !r) return u;
            var l = zf("Error"),
                f = t(function(d, h) {
                    var p = l$(n ? h : d, void 0),
                        v = n ? new u(d) : new u;
                    return p !== void 0 && qf(v, "message", p), d$(v, f, v.stack, 2), this && u$(c, this) && c$(v, this, f), arguments.length > i && f$(v, arguments[i]), v
                });
            f.prototype = c, o !== "Error" ? Wf ? Wf(f, l) : Gf(f, l, {
                name: !0
            }) : h$ && a in u && (Hf(f, u, a), Hf(f, u, "prepareStackTrace")), Gf(f, u);
            try {
                c.name !== o && qf(c, "name", o), c.constructor = f
            } catch {}
            return f
        }
    },
    Sg = ne,
    p$ = te,
    ot = fs,
    $g = Eg,
    vu = "WebAssembly",
    Kf = p$[vu],
    hi = new Error("e", {
        cause: 7
    }).cause !== 7,
    or = function(e, t) {
        var r = {};
        r[e] = $g(e, t, hi), Sg({
            global: !0,
            constructor: !0,
            arity: 1,
            forced: hi
        }, r)
    },
    Dc = function(e, t) {
        if (Kf && Kf[e]) {
            var r = {};
            r[e] = $g(vu + "." + e, t, hi), Sg({
                target: vu,
                stat: !0,
                constructor: !0,
                arity: 1,
                forced: hi
            }, r)
        }
    };
or("Error", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("EvalError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("RangeError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("ReferenceError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("SyntaxError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("TypeError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
or("URIError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
Dc("CompileError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
Dc("LinkError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
Dc("RuntimeError", function(e) {
    return function(r) {
        return ot(e, this, arguments)
    }
});
var m$ = ne,
    g$ = at,
    v$ = fs,
    Xf = ie,
    y$ = Eg,
    jc = "AggregateError",
    Yf = g$(jc),
    Jf = !Xf(function() {
        return Yf([1]).errors[0] !== 1
    }) && Xf(function() {
        return Yf([1], jc, {
            cause: 7
        }).cause !== 7
    });
m$({
    global: !0,
    constructor: !0,
    arity: 2,
    forced: Jf
}, {
    AggregateError: y$(jc, function(e) {
        return function(r, n) {
            return v$(e, this, arguments)
        }
    }, Jf, !0)
});
var Ag = {},
    b$ = lg,
    w$ = Lc,
    E$ = Object.keys || function(t) {
        return b$(t, w$)
    },
    S$ = ve,
    $$ = eg,
    A$ = it,
    O$ = st,
    R$ = kt,
    _$ = E$;
Ag.f = S$ && !$$ ? Object.defineProperties : function(t, r) {
    O$(t);
    for (var n = R$(r), a = _$(r), i = a.length, s = 0, o; i > s;) A$.f(t, o = a[s++], n[o]);
    return t
};
var C$ = at,
    Og = C$("document", "documentElement"),
    N$ = st,
    x$ = Ag,
    Qf = Lc,
    T$ = Pc,
    I$ = Og,
    P$ = xc,
    k$ = Ic,
    Zf = ">",
    ed = "<",
    yu = "prototype",
    bu = "script",
    Rg = k$("IE_PROTO"),
    po = function() {},
    _g = function(e) {
        return ed + bu + Zf + e + ed + "/" + bu + Zf
    },
    td = function(e) {
        e.write(_g("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
    },
    L$ = function() {
        var e = P$("iframe"),
            t = "java" + bu + ":",
            r;
        return e.style.display = "none", I$.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(_g("document.F=Object")), r.close(), r.F
    },
    Ra, Ja = function() {
        try {
            Ra = new ActiveXObject("htmlfile")
        } catch {}
        Ja = typeof document < "u" ? document.domain && Ra ? td(Ra) : L$() : td(Ra);
        for (var e = Qf.length; e--;) delete Ja[yu][Qf[e]];
        return Ja()
    };
T$[Rg] = !0;
var F$ = Object.create || function(t, r) {
        var n;
        return t !== null ? (po[yu] = N$(t), n = new po, po[yu] = null, n[Rg] = t) : n = Ja(), r === void 0 ? n : x$.f(n, r)
    },
    D$ = Lt,
    j$ = F$,
    U$ = it.f,
    wu = D$("unscopables"),
    Eu = Array.prototype;
Eu[wu] === void 0 && U$(Eu, wu, {
    configurable: !0,
    value: j$(null)
});
var Wr = function(e) {
        Eu[wu][e] = !0
    },
    M$ = ne,
    B$ = ar,
    V$ = Ie,
    z$ = bt,
    q$ = Wr;
M$({
    target: "Array",
    proto: !0
}, {
    at: function(t) {
        var r = B$(this),
            n = V$(r),
            a = z$(t),
            i = a >= 0 ? a : n + a;
        return i < 0 || i >= n ? void 0 : r[i]
    }
});
q$("at");
var W$ = ia,
    G$ = ee,
    H$ = function(e) {
        if (W$(e) === "Function") return G$(e)
    },
    rd = H$,
    K$ = yt,
    X$ = ss,
    Y$ = rd(rd.bind),
    Uc = function(e, t) {
        return K$(e), t === void 0 ? e : X$ ? Y$(e, t) : function() {
            return e.apply(t, arguments)
        }
    },
    J$ = Uc,
    Q$ = Bm,
    Z$ = ar,
    eA = Ie,
    nd = function(e) {
        var t = e === 1;
        return function(r, n, a) {
            for (var i = Z$(r), s = Q$(i), o = eA(s), u = J$(n, a), c, l; o-- > 0;)
                if (c = s[o], l = u(c, o, i), l) switch (e) {
                    case 0:
                        return c;
                    case 1:
                        return o
                }
            return t ? -1 : void 0
        }
    },
    ds = {
        findLast: nd(0),
        findLastIndex: nd(1)
    },
    tA = ne,
    rA = ds.findLast,
    nA = Wr;
tA({
    target: "Array",
    proto: !0
}, {
    findLast: function(t) {
        return rA(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
});
nA("findLast");
var aA = ne,
    iA = ds.findLastIndex,
    sA = Wr;
aA({
    target: "Array",
    proto: !0
}, {
    findLastIndex: function(t) {
        return iA(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
});
sA("findLastIndex");
var oA = ia,
    uA = Array.isArray || function(t) {
        return oA(t) === "Array"
    },
    cA = ve,
    lA = uA,
    fA = TypeError,
    dA = Object.getOwnPropertyDescriptor,
    hA = cA && ! function() {
        if (this !== void 0) return !0;
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).length = 1
        } catch (e) {
            return e instanceof TypeError
        }
    }(),
    Cg = hA ? function(e, t) {
        if (lA(e) && !dA(e, "length").writable) throw new fA("Cannot set read only .length");
        return e.length = t
    } : function(e, t) {
        return e.length = t
    },
    pA = TypeError,
    mA = 9007199254740991,
    Mc = function(e) {
        if (e > mA) throw pA("Maximum allowed index exceeded");
        return e
    },
    gA = ne,
    vA = ar,
    yA = Ie,
    bA = Cg,
    wA = Mc,
    EA = ie,
    SA = EA(function() {
        return [].push.call({
            length: 4294967296
        }, 1) !== 4294967297
    }),
    $A = function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (e) {
            return e instanceof TypeError
        }
    },
    AA = SA || !$A();
gA({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: AA
}, {
    push: function(t) {
        var r = vA(this),
            n = yA(r),
            a = arguments.length;
        wA(n + a);
        for (var i = 0; i < a; i++) r[n] = arguments[i], n++;
        return bA(r, n), n
    }
});
var OA = Ie,
    Ng = function(e, t) {
        for (var r = OA(e), n = new t(r), a = 0; a < r; a++) n[a] = e[r - a - 1];
        return n
    },
    RA = ne,
    _A = Ng,
    CA = kt,
    NA = Wr,
    xA = Array;
RA({
    target: "Array",
    proto: !0
}, {
    toReversed: function() {
        return _A(CA(this), xA)
    }
});
NA("toReversed");
var TA = Ie,
    xg = function(e, t, r) {
        for (var n = 0, a = arguments.length > 2 ? r : TA(t), i = new e(a); a > n;) i[n] = t[n++];
        return i
    },
    IA = te,
    PA = function(e, t) {
        var r = IA[e],
            n = r && r.prototype;
        return n && n[t]
    },
    kA = ne,
    LA = ee,
    FA = yt,
    DA = kt,
    jA = xg,
    UA = PA,
    MA = Wr,
    BA = Array,
    VA = LA(UA("Array", "sort"));
kA({
    target: "Array",
    proto: !0
}, {
    toSorted: function(t) {
        t !== void 0 && FA(t);
        var r = DA(this),
            n = jA(BA, r);
        return VA(n, t)
    }
});
MA("toSorted");
var zA = ne,
    qA = Wr,
    WA = Mc,
    GA = Ie,
    HA = cg,
    KA = kt,
    XA = bt,
    YA = Array,
    JA = Math.max,
    QA = Math.min;
zA({
    target: "Array",
    proto: !0
}, {
    toSpliced: function(t, r) {
        var n = KA(this),
            a = GA(n),
            i = HA(t, a),
            s = arguments.length,
            o = 0,
            u, c, l, f;
        for (s === 0 ? u = c = 0 : s === 1 ? (u = 0, c = a - i) : (u = s - 2, c = QA(JA(XA(r), 0), a - i)), l = WA(a + u - c), f = YA(l); o < i; o++) f[o] = n[o];
        for (; o < i + u; o++) f[o] = arguments[o - i + 2];
        for (; o < l; o++) f[o] = n[o + c - u];
        return f
    }
});
qA("toSpliced");
var ad = sa,
    ZA = TypeError,
    eO = function(e, t) {
        if (!delete e[t]) throw new ZA("Cannot delete property " + ad(t) + " of " + ad(e))
    },
    tO = ne,
    rO = ar,
    nO = Ie,
    aO = Cg,
    iO = eO,
    sO = Mc,
    oO = [].unshift(0) !== 1,
    uO = function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).unshift()
        } catch (e) {
            return e instanceof TypeError
        }
    },
    cO = oO || !uO();
tO({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: cO
}, {
    unshift: function(t) {
        var r = rO(this),
            n = nO(r),
            a = arguments.length;
        if (a) {
            sO(n + a);
            for (var i = n; i--;) {
                var s = i + a;
                i in r ? r[s] = r[i] : iO(r, s)
            }
            for (var o = 0; o < a; o++) r[o] = arguments[o]
        }
        return aO(r, n + a)
    }
});
var lO = Ie,
    fO = bt,
    dO = RangeError,
    Tg = function(e, t, r, n) {
        var a = lO(e),
            i = fO(r),
            s = i < 0 ? a + i : i;
        if (s >= a || s < 0) throw new dO("Incorrect index");
        for (var o = new t(a), u = 0; u < a; u++) o[u] = u === s ? n : e[u];
        return o
    },
    hO = ne,
    pO = Tg,
    mO = kt,
    gO = Array;
hO({
    target: "Array",
    proto: !0
}, {
    with: function(e, t) {
        return pO(mO(this), gO, e, t)
    }
});
var Ig = {},
    vO = Lt,
    yO = Ig,
    bO = vO("iterator"),
    wO = Array.prototype,
    EO = function(e) {
        return e !== void 0 && (yO.Array === e || wO[bO] === e)
    },
    SO = qr,
    id = _c,
    $O = os,
    AO = Ig,
    OO = Lt,
    RO = OO("iterator"),
    Pg = function(e) {
        if (!$O(e)) return id(e, RO) || id(e, "@@iterator") || AO[SO(e)]
    },
    _O = nt,
    CO = yt,
    NO = st,
    xO = sa,
    TO = Pg,
    IO = TypeError,
    PO = function(e, t) {
        var r = arguments.length < 2 ? TO(e) : t;
        if (CO(r)) return NO(_O(r, e));
        throw new IO(xO(e) + " is not iterable")
    },
    kO = nt,
    sd = st,
    LO = _c,
    FO = function(e, t, r) {
        var n, a;
        sd(e);
        try {
            if (n = LO(e, "return"), !n) {
                if (t === "throw") throw r;
                return r
            }
            n = kO(n, e)
        } catch (i) {
            a = !0, n = i
        }
        if (t === "throw") throw r;
        if (a) throw n;
        return sd(n), r
    },
    DO = Uc,
    jO = nt,
    UO = st,
    MO = sa,
    BO = EO,
    VO = Ie,
    od = zr,
    zO = PO,
    qO = Pg,
    ud = FO,
    WO = TypeError,
    Qa = function(e, t) {
        this.stopped = e, this.result = t
    },
    cd = Qa.prototype,
    Bc = function(e, t, r) {
        var n = r && r.that,
            a = !!(r && r.AS_ENTRIES),
            i = !!(r && r.IS_RECORD),
            s = !!(r && r.IS_ITERATOR),
            o = !!(r && r.INTERRUPTED),
            u = DO(t, n),
            c, l, f, d, h, p, v, y = function(m) {
                return c && ud(c, "normal", m), new Qa(!0, m)
            },
            A = function(m) {
                return a ? (UO(m), o ? u(m[0], m[1], y) : u(m[0], m[1])) : o ? u(m, y) : u(m)
            };
        if (i) c = e.iterator;
        else if (s) c = e;
        else {
            if (l = qO(e), !l) throw new WO(MO(e) + " is not iterable");
            if (BO(l)) {
                for (f = 0, d = VO(e); d > f; f++)
                    if (h = A(e[f]), h && od(cd, h)) return h;
                return new Qa(!1)
            }
            c = zO(e, l)
        }
        for (p = i ? e.next : c.next; !(v = jO(p, c)).done;) {
            try {
                h = A(v.value)
            } catch (m) {
                ud(c, "throw", m)
            }
            if (typeof h == "object" && h && od(cd, h)) return h
        }
        return new Qa(!1)
    },
    _a = ee,
    an = Map.prototype,
    kg = {
        Map,
        set: _a(an.set),
        get: _a(an.get),
        has: _a(an.has),
        remove: _a(an.delete),
        proto: an
    },
    GO = ne,
    HO = ee,
    KO = yt,
    XO = nr,
    YO = Bc,
    hs = kg,
    JO = Ym,
    QO = hs.Map,
    ZO = hs.has,
    eR = hs.get,
    tR = hs.set,
    rR = HO([].push);
GO({
    target: "Map",
    stat: !0,
    forced: JO
}, {
    groupBy: function(t, r) {
        XO(t), KO(r);
        var n = new QO,
            a = 0;
        return YO(t, function(i) {
            var s = r(i, a++);
            ZO(n, s) ? rR(eR(n, s), i) : tR(n, s, [i])
        }), n
    }
});
var nR = ne,
    aR = at,
    iR = ee,
    sR = yt,
    oR = nr,
    uR = cs,
    cR = Bc,
    lR = aR("Object", "create"),
    fR = iR([].push);
nR({
    target: "Object",
    stat: !0
}, {
    groupBy: function(t, r) {
        oR(t), sR(r);
        var n = lR(null),
            a = 0;
        return cR(t, function(i) {
            var s = uR(r(i, a++));
            s in n ? fR(n[s], i) : n[s] = [i]
        }), n
    }
});
var dR = ne,
    hR = ye;
dR({
    target: "Object",
    stat: !0
}, {
    hasOwn: hR
});
var Lg = {},
    ld = yt,
    pR = TypeError,
    mR = function(e) {
        var t, r;
        this.promise = new e(function(n, a) {
            if (t !== void 0 || r !== void 0) throw new pR("Bad Promise constructor");
            t = n, r = a
        }), this.resolve = ld(t), this.reject = ld(r)
    };
Lg.f = function(e) {
    return new mR(e)
};
var gR = ne,
    vR = Lg;
gR({
    target: "Promise",
    stat: !0
}, {
    withResolvers: function() {
        var t = vR.f(this);
        return {
            promise: t.promise,
            resolve: t.resolve,
            reject: t.reject
        }
    }
});
var fd = og,
    yR = it,
    Vc = function(e, t, r) {
        return r.get && fd(r.get, t, {
            getter: !0
        }), r.set && fd(r.set, t, {
            setter: !0
        }), yR.f(e, t, r)
    },
    bR = st,
    Fg = function() {
        var e = bR(this),
            t = "";
        return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
    },
    wR = te,
    ER = ve,
    SR = Vc,
    $R = Fg,
    AR = ie,
    Dg = wR.RegExp,
    jg = Dg.prototype,
    OR = ER && AR(function() {
        var e = !0;
        try {
            Dg(".", "d")
        } catch {
            e = !1
        }
        var t = {},
            r = "",
            n = e ? "dgimsy" : "gimsy",
            a = function(u, c) {
                Object.defineProperty(t, u, {
                    get: function() {
                        return r += c, !0
                    }
                })
            },
            i = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
        e && (i.hasIndices = "d");
        for (var s in i) a(s, i[s]);
        var o = Object.getOwnPropertyDescriptor(jg, "flags").get.call(t);
        return o !== n || r !== n
    });
OR && SR(jg, "flags", {
    configurable: !0,
    get: $R
});
var RR = ne,
    _R = ee,
    CR = nr,
    NR = bt,
    xR = sr,
    TR = ie,
    IR = _R("".charAt),
    PR = TR(function() {
        return "𠮷".at(-2) !== "\uD842"
    });
RR({
    target: "String",
    proto: !0,
    forced: PR
}, {
    at: function(t) {
        var r = xR(CR(this)),
            n = r.length,
            a = NR(t),
            i = a >= 0 ? a : n + a;
        return i < 0 || i >= n ? void 0 : IR(r, i)
    }
});
var kR = ne,
    LR = ee,
    FR = nr,
    DR = sr,
    dd = LR("".charCodeAt);
kR({
    target: "String",
    proto: !0
}, {
    isWellFormed: function() {
        for (var t = DR(FR(this)), r = t.length, n = 0; n < r; n++) {
            var a = dd(t, n);
            if ((a & 63488) === 55296 && (a >= 56320 || ++n >= r || (dd(t, n) & 64512) !== 56320)) return !1
        }
        return !0
    }
});
var jR = ne,
    Ug = nt,
    zc = ee,
    UR = nr,
    MR = sr,
    BR = ie,
    VR = Array,
    mo = zc("".charAt),
    hd = zc("".charCodeAt),
    zR = zc([].join),
    Su = "".toWellFormed,
    qR = "�",
    pd = Su && BR(function() {
        return Ug(Su, 1) !== "1"
    });
jR({
    target: "String",
    proto: !0,
    forced: pd
}, {
    toWellFormed: function() {
        var t = MR(UR(this));
        if (pd) return Ug(Su, t);
        for (var r = t.length, n = VR(r), a = 0; a < r; a++) {
            var i = hd(t, a);
            (i & 63488) !== 55296 ? n[a] = mo(t, a) : i >= 56320 || a + 1 >= r || (hd(t, a + 1) & 64512) !== 56320 ? n[a] = qR : (n[a] = mo(t, a), n[++a] = mo(t, a))
        }
        return zR(n, "")
    }
});
var WR = typeof ArrayBuffer < "u" && typeof DataView < "u",
    GR = ie,
    HR = !GR(function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }),
    KR = ye,
    XR = oe,
    YR = ar,
    JR = Ic,
    QR = HR,
    md = JR("IE_PROTO"),
    $u = Object,
    ZR = $u.prototype,
    e_ = QR ? $u.getPrototypeOf : function(e) {
        var t = YR(e);
        if (KR(t, md)) return t[md];
        var r = t.constructor;
        return XR(r) && t instanceof r ? r.prototype : t instanceof $u ? ZR : null
    },
    t_ = WR,
    qc = ve,
    me = te,
    Mg = oe,
    ps = vt,
    It = ye,
    Wc = qr,
    r_ = sa,
    n_ = ir,
    Au = ls,
    a_ = Vc,
    i_ = zr,
    ms = e_,
    Gr = Fc,
    s_ = Lt,
    o_ = us,
    Bg = ig,
    Vg = Bg.enforce,
    u_ = Bg.get,
    pi = me.Int8Array,
    Ou = pi && pi.prototype,
    gd = me.Uint8ClampedArray,
    vd = gd && gd.prototype,
    Ze = pi && ms(pi),
    ze = Ou && ms(Ou),
    c_ = Object.prototype,
    Gc = me.TypeError,
    yd = s_("toStringTag"),
    Ru = o_("TYPED_ARRAY_TAG"),
    mi = "TypedArrayConstructor",
    ht = t_ && !!Gr && Wc(me.opera) !== "Opera",
    zg = !1,
    Ae, Ot, Ar, pt = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    Hc = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    l_ = function(t) {
        if (!ps(t)) return !1;
        var r = Wc(t);
        return r === "DataView" || It(pt, r) || It(Hc, r)
    },
    qg = function(e) {
        var t = ms(e);
        if (ps(t)) {
            var r = u_(t);
            return r && It(r, mi) ? r[mi] : qg(t)
        }
    },
    Wg = function(e) {
        if (!ps(e)) return !1;
        var t = Wc(e);
        return It(pt, t) || It(Hc, t)
    },
    f_ = function(e) {
        if (Wg(e)) return e;
        throw new Gc("Target is not a typed array")
    },
    d_ = function(e) {
        if (Mg(e) && (!Gr || i_(Ze, e))) return e;
        throw new Gc(r_(e) + " is not a typed array constructor")
    },
    h_ = function(e, t, r, n) {
        if (qc) {
            if (r)
                for (var a in pt) {
                    var i = me[a];
                    if (i && It(i.prototype, e)) try {
                        delete i.prototype[e]
                    } catch {
                        try {
                            i.prototype[e] = t
                        } catch {}
                    }
                }(!ze[e] || r) && Au(ze, e, r ? t : ht && Ou[e] || t, n)
        }
    },
    p_ = function(e, t, r) {
        var n, a;
        if (qc) {
            if (Gr) {
                if (r) {
                    for (n in pt)
                        if (a = me[n], a && It(a, e)) try {
                            delete a[e]
                        } catch {}
                }
                if (!Ze[e] || r) try {
                    return Au(Ze, e, r ? t : ht && Ze[e] || t)
                } catch {} else return
            }
            for (n in pt) a = me[n], a && (!a[e] || r) && Au(a, e, t)
        }
    };
for (Ae in pt) Ot = me[Ae], Ar = Ot && Ot.prototype, Ar ? Vg(Ar)[mi] = Ot : ht = !1;
for (Ae in Hc) Ot = me[Ae], Ar = Ot && Ot.prototype, Ar && (Vg(Ar)[mi] = Ot);
if ((!ht || !Mg(Ze) || Ze === Function.prototype) && (Ze = function() {
        throw new Gc("Incorrect invocation")
    }, ht))
    for (Ae in pt) me[Ae] && Gr(me[Ae], Ze);
if ((!ht || !ze || ze === c_) && (ze = Ze.prototype, ht))
    for (Ae in pt) me[Ae] && Gr(me[Ae].prototype, ze);
ht && ms(vd) !== ze && Gr(vd, ze);
if (qc && !It(ze, yd)) {
    zg = !0, a_(ze, yd, {
        configurable: !0,
        get: function() {
            return ps(this) ? this[Ru] : void 0
        }
    });
    for (Ae in pt) me[Ae] && n_(me[Ae], Ru, Ae)
}
var ur = {
        NATIVE_ARRAY_BUFFER_VIEWS: ht,
        TYPED_ARRAY_TAG: zg && Ru,
        aTypedArray: f_,
        aTypedArrayConstructor: d_,
        exportTypedArrayMethod: h_,
        exportTypedArrayStaticMethod: p_,
        getTypedArrayConstructor: qg,
        isView: l_,
        isTypedArray: Wg,
        TypedArray: Ze,
        TypedArrayPrototype: ze
    },
    Gg = ur,
    m_ = Ie,
    g_ = bt,
    v_ = Gg.aTypedArray,
    y_ = Gg.exportTypedArrayMethod;
y_("at", function(t) {
    var r = v_(this),
        n = m_(r),
        a = g_(t),
        i = a >= 0 ? a : n + a;
    return i < 0 || i >= n ? void 0 : r[i]
});
var Hg = ur,
    b_ = ds.findLast,
    w_ = Hg.aTypedArray,
    E_ = Hg.exportTypedArrayMethod;
E_("findLast", function(t) {
    return b_(w_(this), t, arguments.length > 1 ? arguments[1] : void 0)
});
var Kg = ur,
    S_ = ds.findLastIndex,
    $_ = Kg.aTypedArray,
    A_ = Kg.exportTypedArrayMethod;
A_("findLastIndex", function(t) {
    return S_($_(this), t, arguments.length > 1 ? arguments[1] : void 0)
});
var O_ = bt,
    R_ = RangeError,
    __ = function(e) {
        var t = O_(e);
        if (t < 0) throw new R_("The argument can't be less than 0");
        return t
    },
    C_ = __,
    N_ = RangeError,
    x_ = function(e, t) {
        var r = C_(e);
        if (r % t) throw new N_("Wrong offset");
        return r
    },
    Xg = te,
    Yg = nt,
    Kc = ur,
    T_ = Ie,
    I_ = x_,
    P_ = ar,
    Jg = ie,
    k_ = Xg.RangeError,
    _u = Xg.Int8Array,
    bd = _u && _u.prototype,
    Qg = bd && bd.set,
    L_ = Kc.aTypedArray,
    F_ = Kc.exportTypedArrayMethod,
    Cu = !Jg(function() {
        var e = new Uint8ClampedArray(2);
        return Yg(Qg, e, {
            length: 1,
            0: 3
        }, 1), e[1] !== 3
    }),
    D_ = Cu && Kc.NATIVE_ARRAY_BUFFER_VIEWS && Jg(function() {
        var e = new _u(2);
        return e.set(1), e.set("2", 1), e[0] !== 0 || e[1] !== 2
    });
F_("set", function(t) {
    L_(this);
    var r = I_(arguments.length > 1 ? arguments[1] : void 0, 1),
        n = P_(t);
    if (Cu) return Yg(Qg, this, n, r);
    var a = this.length,
        i = T_(n),
        s = 0;
    if (i + r > a) throw new k_("Wrong length");
    for (; s < i;) this[r + s] = n[s++]
}, !Cu || D_);
var j_ = Ng,
    Xc = ur,
    U_ = Xc.aTypedArray,
    M_ = Xc.exportTypedArrayMethod,
    B_ = Xc.getTypedArrayConstructor;
M_("toReversed", function() {
    return j_(U_(this), B_(this))
});
var gs = ur,
    V_ = ee,
    z_ = yt,
    q_ = xg,
    W_ = gs.aTypedArray,
    G_ = gs.getTypedArrayConstructor,
    H_ = gs.exportTypedArrayMethod,
    K_ = V_(gs.TypedArrayPrototype.sort);
H_("toSorted", function(t) {
    t !== void 0 && z_(t);
    var r = W_(this),
        n = q_(G_(r), r);
    return K_(n, t)
});
var X_ = qr,
    Y_ = function(e) {
        var t = X_(e);
        return t === "BigInt64Array" || t === "BigUint64Array"
    },
    J_ = Qm,
    Q_ = TypeError,
    Z_ = function(e) {
        var t = J_(e, "number");
        if (typeof t == "number") throw new Q_("Can't convert number to bigint");
        return BigInt(t)
    },
    eC = Tg,
    Yc = ur,
    tC = Y_,
    rC = bt,
    nC = Z_,
    aC = Yc.aTypedArray,
    iC = Yc.getTypedArrayConstructor,
    sC = Yc.exportTypedArrayMethod,
    oC = !! function() {
        try {
            new Int8Array(1).with(2, {
                valueOf: function() {
                    throw 8
                }
            })
        } catch (e) {
            return e === 8
        }
    }();
sC("with", function(e, t) {
    var r = aC(this),
        n = rC(e),
        a = tC(r) ? nC(t) : +t;
    return eC(r, iC(r), n, a)
}, !oC);
var uC = zr,
    cC = TypeError,
    lC = function(e, t) {
        if (uC(t, e)) return e;
        throw new cC("Incorrect invocation")
    },
    fC = {
        IndexSizeError: {
            s: "INDEX_SIZE_ERR",
            c: 1,
            m: 1
        },
        DOMStringSizeError: {
            s: "DOMSTRING_SIZE_ERR",
            c: 2,
            m: 0
        },
        HierarchyRequestError: {
            s: "HIERARCHY_REQUEST_ERR",
            c: 3,
            m: 1
        },
        WrongDocumentError: {
            s: "WRONG_DOCUMENT_ERR",
            c: 4,
            m: 1
        },
        InvalidCharacterError: {
            s: "INVALID_CHARACTER_ERR",
            c: 5,
            m: 1
        },
        NoDataAllowedError: {
            s: "NO_DATA_ALLOWED_ERR",
            c: 6,
            m: 0
        },
        NoModificationAllowedError: {
            s: "NO_MODIFICATION_ALLOWED_ERR",
            c: 7,
            m: 1
        },
        NotFoundError: {
            s: "NOT_FOUND_ERR",
            c: 8,
            m: 1
        },
        NotSupportedError: {
            s: "NOT_SUPPORTED_ERR",
            c: 9,
            m: 1
        },
        InUseAttributeError: {
            s: "INUSE_ATTRIBUTE_ERR",
            c: 10,
            m: 1
        },
        InvalidStateError: {
            s: "INVALID_STATE_ERR",
            c: 11,
            m: 1
        },
        SyntaxError: {
            s: "SYNTAX_ERR",
            c: 12,
            m: 1
        },
        InvalidModificationError: {
            s: "INVALID_MODIFICATION_ERR",
            c: 13,
            m: 1
        },
        NamespaceError: {
            s: "NAMESPACE_ERR",
            c: 14,
            m: 1
        },
        InvalidAccessError: {
            s: "INVALID_ACCESS_ERR",
            c: 15,
            m: 1
        },
        ValidationError: {
            s: "VALIDATION_ERR",
            c: 16,
            m: 0
        },
        TypeMismatchError: {
            s: "TYPE_MISMATCH_ERR",
            c: 17,
            m: 1
        },
        SecurityError: {
            s: "SECURITY_ERR",
            c: 18,
            m: 1
        },
        NetworkError: {
            s: "NETWORK_ERR",
            c: 19,
            m: 1
        },
        AbortError: {
            s: "ABORT_ERR",
            c: 20,
            m: 1
        },
        URLMismatchError: {
            s: "URL_MISMATCH_ERR",
            c: 21,
            m: 1
        },
        QuotaExceededError: {
            s: "QUOTA_EXCEEDED_ERR",
            c: 22,
            m: 1
        },
        TimeoutError: {
            s: "TIMEOUT_ERR",
            c: 23,
            m: 1
        },
        InvalidNodeTypeError: {
            s: "INVALID_NODE_TYPE_ERR",
            c: 24,
            m: 1
        },
        DataCloneError: {
            s: "DATA_CLONE_ERR",
            c: 25,
            m: 1
        }
    },
    dC = ne,
    hC = te,
    Jc = at,
    Nu = aa,
    xu = it.f,
    wd = ye,
    pC = lC,
    mC = pg,
    Ed = gg,
    go = fC,
    gC = bg,
    vC = ve,
    ua = "DOMException",
    Zg = Jc("Error"),
    ca = Jc(ua),
    Qc = function() {
        pC(this, yC);
        var t = arguments.length,
            r = Ed(t < 1 ? void 0 : arguments[0]),
            n = Ed(t < 2 ? void 0 : arguments[1], "Error"),
            a = new ca(r, n),
            i = new Zg(r);
        return i.name = ua, xu(a, "stack", Nu(1, gC(i.stack, 1))), mC(a, this, Qc), a
    },
    yC = Qc.prototype = ca.prototype,
    bC = "stack" in new Zg(ua),
    wC = "stack" in new ca(1, 2),
    vo = ca && vC && Object.getOwnPropertyDescriptor(hC, ua),
    EC = !!vo && !(vo.writable && vo.configurable),
    Sd = bC && !EC && !wC;
dC({
    global: !0,
    constructor: !0,
    forced: Sd
}, {
    DOMException: Sd ? Qc : ca
});
var gn = Jc(ua),
    $d = gn.prototype;
if ($d.constructor !== gn) {
    xu($d, "constructor", Nu(1, gn));
    for (var Ad in go)
        if (wd(go, Ad)) {
            var Od = go[Ad],
                Rd = Od.s;
            wd(gn, Rd) || xu(gn, Rd, Nu(6, Od.c))
        }
}
var SC = ee,
    ev = SC([].slice),
    $C = TypeError,
    Hr = function(e, t) {
        if (e < t) throw new $C("Not enough arguments");
        return e
    },
    AC = Oc,
    OC = /(?:ipad|iphone|ipod).*applewebkit/i.test(AC),
    RC = te,
    _C = ia,
    vs = _C(RC.process) === "process",
    Ne = te,
    CC = fs,
    NC = Uc,
    _d = oe,
    xC = ye,
    tv = ie,
    Cd = Og,
    TC = ev,
    Nd = xc,
    IC = Hr,
    PC = OC,
    kC = vs,
    Tu = Ne.setImmediate,
    Iu = Ne.clearImmediate,
    LC = Ne.process,
    yo = Ne.Dispatch,
    FC = Ne.Function,
    xd = Ne.MessageChannel,
    DC = Ne.String,
    bo = 0,
    Sn = {},
    Td = "onreadystatechange",
    In, Dt, wo, Eo;
tv(function() {
    In = Ne.location
});
var Zc = function(e) {
        if (xC(Sn, e)) {
            var t = Sn[e];
            delete Sn[e], t()
        }
    },
    So = function(e) {
        return function() {
            Zc(e)
        }
    },
    Id = function(e) {
        Zc(e.data)
    },
    Pd = function(e) {
        Ne.postMessage(DC(e), In.protocol + "//" + In.host)
    };
(!Tu || !Iu) && (Tu = function(t) {
    IC(arguments.length, 1);
    var r = _d(t) ? t : FC(t),
        n = TC(arguments, 1);
    return Sn[++bo] = function() {
        CC(r, void 0, n)
    }, Dt(bo), bo
}, Iu = function(t) {
    delete Sn[t]
}, kC ? Dt = function(e) {
    LC.nextTick(So(e))
} : yo && yo.now ? Dt = function(e) {
    yo.now(So(e))
} : xd && !PC ? (wo = new xd, Eo = wo.port2, wo.port1.onmessage = Id, Dt = NC(Eo.postMessage, Eo)) : Ne.addEventListener && _d(Ne.postMessage) && !Ne.importScripts && In && In.protocol !== "file:" && !tv(Pd) ? (Dt = Pd, Ne.addEventListener("message", Id, !1)) : Td in Nd("script") ? Dt = function(e) {
    Cd.appendChild(Nd("script"))[Td] = function() {
        Cd.removeChild(this), Zc(e)
    }
} : Dt = function(e) {
    setTimeout(So(e), 0)
});
var rv = {
        set: Tu,
        clear: Iu
    },
    jC = ne,
    UC = te,
    kd = rv.clear;
jC({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: UC.clearImmediate !== kd
}, {
    clearImmediate: kd
});
var MC = typeof Bun == "function" && Bun && typeof Bun.version == "string",
    nv = te,
    BC = fs,
    VC = oe,
    zC = MC,
    qC = Oc,
    WC = ev,
    GC = Hr,
    HC = nv.Function,
    KC = /MSIE .\./.test(qC) || zC && function() {
        var e = nv.Bun.version.split(".");
        return e.length < 3 || e[0] === "0" && (e[1] < 3 || e[1] === "3" && e[2] === "0")
    }(),
    XC = function(e, t) {
        var r = t ? 2 : 1;
        return KC ? function(n, a) {
            var i = GC(arguments.length, 1) > r,
                s = VC(n) ? n : HC(n),
                o = i ? WC(arguments, r) : [],
                u = i ? function() {
                    BC(s, this, o)
                } : s;
            return t ? e(u, a) : e(u)
        } : e
    },
    YC = ne,
    av = te,
    Ld = rv.set,
    JC = XC,
    Fd = av.setImmediate ? JC(Ld, !1) : Ld;
YC({
    global: !0,
    bind: !0,
    enumerable: !0,
    forced: av.setImmediate !== Fd
}, {
    setImmediate: Fd
});
var QC = ee,
    ZC = ie,
    iv = oe,
    eN = qr,
    tN = at,
    rN = ng,
    sv = function() {},
    nN = [],
    ov = tN("Reflect", "construct"),
    el = /^\s*(?:class|function)\b/,
    aN = QC(el.exec),
    iN = !el.test(sv),
    sn = function(t) {
        if (!iv(t)) return !1;
        try {
            return ov(sv, nN, t), !0
        } catch {
            return !1
        }
    },
    uv = function(t) {
        if (!iv(t)) return !1;
        switch (eN(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return iN || !!aN(el, rN(t))
        } catch {
            return !0
        }
    };
uv.sham = !0;
var sN = !ov || ZC(function() {
        var e;
        return sn(sn.call) || !sn(Object) || !sn(function() {
            e = !0
        }) || e
    }) ? uv : sn,
    oN = cs,
    uN = it,
    cN = aa,
    lN = function(e, t, r) {
        var n = oN(t);
        n in e ? uN.f(e, n, cN(0, r)) : e[n] = r
    },
    fN = nt,
    dN = ye,
    hN = zr,
    pN = Fg,
    Dd = RegExp.prototype,
    mN = function(e) {
        var t = e.flags;
        return t === void 0 && !("flags" in Dd) && !dN(e, "flags") && hN(Dd, e) ? fN(pN, e) : t
    },
    $o = ee,
    Ca = Set.prototype,
    cv = {
        Set,
        add: $o(Ca.add),
        has: $o(Ca.has),
        remove: $o(Ca.delete),
        proto: Ca
    },
    gN = nt,
    vN = function(e, t, r) {
        for (var n = r ? e : e.iterator, a = e.next, i, s; !(i = gN(a, n)).done;)
            if (s = t(i.value), s !== void 0) return s
    },
    lv = ee,
    yN = vN,
    fv = cv,
    bN = fv.Set,
    dv = fv.proto,
    wN = lv(dv.forEach),
    hv = lv(dv.keys),
    EN = hv(new bN).next,
    SN = function(e, t, r) {
        return r ? yN({
            iterator: hv(e),
            next: EN
        }, t) : wN(e, t)
    },
    $N = vs,
    AN = function(e) {
        try {
            if ($N) return Function('return require("' + e + '")')()
        } catch {}
    },
    pv = typeof Deno == "object" && Deno && typeof Deno.version == "object",
    ON = pv,
    RN = vs,
    _N = !ON && !RN && typeof window == "object" && typeof document == "object",
    CN = te,
    NN = ie,
    Ao = Gm,
    xN = _N,
    TN = pv,
    IN = vs,
    jd = CN.structuredClone,
    mv = !!jd && !NN(function() {
        if (TN && Ao > 92 || IN && Ao > 94 || xN && Ao > 97) return !1;
        var e = new ArrayBuffer(8),
            t = jd(e, {
                transfer: [e]
            });
        return e.byteLength !== 0 || t.byteLength !== 8
    }),
    tl = te,
    PN = AN,
    kN = mv,
    LN = tl.structuredClone,
    Ud = tl.ArrayBuffer,
    Na = tl.MessageChannel,
    Pu = !1,
    Oo, Md, xa, Ro;
if (kN) Pu = function(e) {
    LN(e, {
        transfer: [e]
    })
};
else if (Ud) try {
    Na || (Oo = PN("worker_threads"), Oo && (Na = Oo.MessageChannel)), Na && (Md = new Na, xa = new Ud(2), Ro = function(e) {
        Md.port1.postMessage(null, [e])
    }, xa.byteLength === 2 && (Ro(xa), xa.byteLength === 0 && (Pu = Ro)))
} catch {}
var FN = Pu,
    DN = ne,
    de = te,
    $n = at,
    la = ee,
    rl = ie,
    jN = us,
    Pr = oe,
    UN = sN,
    MN = os,
    ys = vt,
    BN = Rc,
    VN = Bc,
    gv = st,
    gi = qr,
    zN = ye,
    qN = lN,
    _o = ir,
    Za = Ie,
    WN = Hr,
    GN = mN,
    bs = kg,
    nl = cv,
    HN = SN,
    Bd = FN,
    KN = wg,
    al = mv,
    vn = de.Object,
    XN = de.Array,
    vv = de.Date,
    yv = de.Error,
    YN = de.TypeError,
    JN = de.PerformanceMark,
    Ht = $n("DOMException"),
    ku = bs.Map,
    il = bs.has,
    bv = bs.get,
    vi = bs.set,
    wv = nl.Set,
    Ev = nl.add,
    QN = nl.has,
    ZN = $n("Object", "keys"),
    ex = la([].push),
    tx = la((!0).valueOf),
    rx = la(1 .valueOf),
    nx = la("".valueOf),
    ax = la(vv.prototype.getTime),
    Lu = jN("structuredClone"),
    Pn = "DataCloneError",
    ei = "Transferring",
    Sv = function(e) {
        return !rl(function() {
            var t = new de.Set([7]),
                r = e(t),
                n = e(vn(7));
            return r === t || !r.has(7) || !ys(n) || +n != 7
        }) && e
    },
    Vd = function(e, t) {
        return !rl(function() {
            var r = new t,
                n = e({
                    a: r,
                    b: r
                });
            return !(n && n.a === n.b && n.a instanceof t && n.a.stack === r.stack)
        })
    },
    ix = function(e) {
        return !rl(function() {
            var t = e(new de.AggregateError([1], Lu, {
                cause: 3
            }));
            return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== Lu || t.cause !== 3
        })
    },
    Or = de.structuredClone,
    sx = !Vd(Or, yv) || !Vd(Or, Ht) || !ix(Or),
    ox = !Or && Sv(function(e) {
        return new JN(Lu, {
            detail: e
        }).detail
    }),
    ft = Sv(Or) || ox,
    Co = function(e) {
        throw new Ht("Uncloneable type: " + e, Pn)
    },
    $e = function(e, t) {
        throw new Ht((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", Pn)
    },
    No = function(e, t) {
        return ft || $e(t), ft(e)
    },
    ux = function() {
        var e;
        try {
            e = new de.DataTransfer
        } catch {
            try {
                e = new de.ClipboardEvent("").clipboardData
            } catch {}
        }
        return e && e.items && e.files ? e : null
    },
    $v = function(e, t, r) {
        if (il(t, e)) return bv(t, e);
        var n = r || gi(e),
            a, i, s, o, u, c;
        if (n === "SharedArrayBuffer") ft ? a = ft(e) : a = e;
        else {
            var l = de.DataView;
            !l && !Pr(e.slice) && $e("ArrayBuffer");
            try {
                if (Pr(e.slice) && !e.resizable) a = e.slice(0);
                else
                    for (i = e.byteLength, s = ("maxByteLength" in e) ? {
                            maxByteLength: e.maxByteLength
                        } : void 0, a = new ArrayBuffer(i, s), o = new l(e), u = new l(a), c = 0; c < i; c++) u.setUint8(c, o.getUint8(c))
            } catch {
                throw new Ht("ArrayBuffer is detached", Pn)
            }
        }
        return vi(t, e, a), a
    },
    cx = function(e, t, r, n, a) {
        var i = de[t];
        return ys(i) || $e(t), new i($v(e.buffer, a), r, n)
    },
    fe = function(e, t) {
        if (BN(e) && Co("Symbol"), !ys(e)) return e;
        if (t) {
            if (il(t, e)) return bv(t, e)
        } else t = new ku;
        var r = gi(e),
            n, a, i, s, o, u, c, l;
        switch (r) {
            case "Array":
                i = XN(Za(e));
                break;
            case "Object":
                i = {};
                break;
            case "Map":
                i = new ku;
                break;
            case "Set":
                i = new wv;
                break;
            case "RegExp":
                i = new RegExp(e.source, GN(e));
                break;
            case "Error":
                switch (a = e.name, a) {
                    case "AggregateError":
                        i = new($n(a))([]);
                        break;
                    case "EvalError":
                    case "RangeError":
                    case "ReferenceError":
                    case "SuppressedError":
                    case "SyntaxError":
                    case "TypeError":
                    case "URIError":
                        i = new($n(a));
                        break;
                    case "CompileError":
                    case "LinkError":
                    case "RuntimeError":
                        i = new($n("WebAssembly", a));
                        break;
                    default:
                        i = new yv
                }
                break;
            case "DOMException":
                i = new Ht(e.message, e.name);
                break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
                i = $v(e, t, r);
                break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
                u = r === "DataView" ? e.byteLength : e.length, i = cx(e, r, e.byteOffset, u, t);
                break;
            case "DOMQuad":
                try {
                    i = new DOMQuad(fe(e.p1, t), fe(e.p2, t), fe(e.p3, t), fe(e.p4, t))
                } catch {
                    i = No(e, r)
                }
                break;
            case "File":
                if (ft) try {
                    i = ft(e), gi(i) !== r && (i = void 0)
                } catch {}
                if (!i) try {
                    i = new File([e], e.name, e)
                } catch {}
                i || $e(r);
                break;
            case "FileList":
                if (s = ux(), s) {
                    for (o = 0, u = Za(e); o < u; o++) s.items.add(fe(e[o], t));
                    i = s.files
                } else i = No(e, r);
                break;
            case "ImageData":
                try {
                    i = new ImageData(fe(e.data, t), e.width, e.height, {
                        colorSpace: e.colorSpace
                    })
                } catch {
                    i = No(e, r)
                }
                break;
            default:
                if (ft) i = ft(e);
                else switch (r) {
                    case "BigInt":
                        i = vn(e.valueOf());
                        break;
                    case "Boolean":
                        i = vn(tx(e));
                        break;
                    case "Number":
                        i = vn(rx(e));
                        break;
                    case "String":
                        i = vn(nx(e));
                        break;
                    case "Date":
                        i = new vv(ax(e));
                        break;
                    case "Blob":
                        try {
                            i = e.slice(0, e.size, e.type)
                        } catch {
                            $e(r)
                        }
                        break;
                    case "DOMPoint":
                    case "DOMPointReadOnly":
                        n = de[r];
                        try {
                            i = n.fromPoint ? n.fromPoint(e) : new n(e.x, e.y, e.z, e.w)
                        } catch {
                            $e(r)
                        }
                        break;
                    case "DOMRect":
                    case "DOMRectReadOnly":
                        n = de[r];
                        try {
                            i = n.fromRect ? n.fromRect(e) : new n(e.x, e.y, e.width, e.height)
                        } catch {
                            $e(r)
                        }
                        break;
                    case "DOMMatrix":
                    case "DOMMatrixReadOnly":
                        n = de[r];
                        try {
                            i = n.fromMatrix ? n.fromMatrix(e) : new n(e)
                        } catch {
                            $e(r)
                        }
                        break;
                    case "AudioData":
                    case "VideoFrame":
                        Pr(e.clone) || $e(r);
                        try {
                            i = e.clone()
                        } catch {
                            Co(r)
                        }
                        break;
                    case "CropTarget":
                    case "CryptoKey":
                    case "FileSystemDirectoryHandle":
                    case "FileSystemFileHandle":
                    case "FileSystemHandle":
                    case "GPUCompilationInfo":
                    case "GPUCompilationMessage":
                    case "ImageBitmap":
                    case "RTCCertificate":
                    case "WebAssembly.Module":
                        $e(r);
                    default:
                        Co(r)
                }
        }
        switch (vi(t, e, i), r) {
            case "Array":
            case "Object":
                for (c = ZN(e), o = 0, u = Za(c); o < u; o++) l = c[o], qN(i, l, fe(e[l], t));
                break;
            case "Map":
                e.forEach(function(f, d) {
                    vi(i, fe(d, t), fe(f, t))
                });
                break;
            case "Set":
                e.forEach(function(f) {
                    Ev(i, fe(f, t))
                });
                break;
            case "Error":
                _o(i, "message", fe(e.message, t)), zN(e, "cause") && _o(i, "cause", fe(e.cause, t)), a === "AggregateError" ? i.errors = fe(e.errors, t) : a === "SuppressedError" && (i.error = fe(e.error, t), i.suppressed = fe(e.suppressed, t));
            case "DOMException":
                KN && _o(i, "stack", fe(e.stack, t))
        }
        return i
    },
    lx = function(e, t) {
        if (!ys(e)) throw new YN("Transfer option cannot be converted to a sequence");
        var r = [];
        VN(e, function(d) {
            ex(r, gv(d))
        });
        for (var n = 0, a = Za(r), i = new wv, s, o, u, c, l, f; n < a;) {
            if (s = r[n++], o = gi(s), o === "ArrayBuffer" ? QN(i, s) : il(t, s)) throw new Ht("Duplicate transferable", Pn);
            if (o === "ArrayBuffer") {
                Ev(i, s);
                continue
            }
            if (al) c = Or(s, {
                transfer: [s]
            });
            else switch (o) {
                case "ImageBitmap":
                    u = de.OffscreenCanvas, UN(u) || $e(o, ei);
                    try {
                        l = new u(s.width, s.height), f = l.getContext("bitmaprenderer"), f.transferFromImageBitmap(s), c = l.transferToImageBitmap()
                    } catch {}
                    break;
                case "AudioData":
                case "VideoFrame":
                    (!Pr(s.clone) || !Pr(s.close)) && $e(o, ei);
                    try {
                        c = s.clone(), s.close()
                    } catch {}
                    break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                    $e(o, ei)
            }
            if (c === void 0) throw new Ht("This object cannot be transferred: " + o, Pn);
            vi(t, s, c)
        }
        return i
    },
    fx = function(e) {
        HN(e, function(t) {
            al ? ft(t, {
                transfer: [t]
            }) : Pr(t.transfer) ? t.transfer() : Bd ? Bd(t) : $e("ArrayBuffer", ei)
        })
    };
DN({
    global: !0,
    enumerable: !0,
    sham: !al,
    forced: sx
}, {
    structuredClone: function(t) {
        var r = WN(arguments.length, 1) > 1 && !MN(arguments[1]) ? gv(arguments[1]) : void 0,
            n = r ? r.transfer : void 0,
            a, i;
        n !== void 0 && (a = new ku, i = lx(n, a));
        var s = fe(t, a);
        return i && fx(i), s
    }
});
var dx = ie,
    hx = Lt,
    px = ve,
    zd = Ym,
    mx = hx("iterator"),
    gx = !dx(function() {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
            t = e.searchParams,
            r = new URLSearchParams("a=1&a=2&b=3"),
            n = "";
        return e.pathname = "c%20d", t.forEach(function(a, i) {
            t.delete("b"), n += i + a
        }), r.delete("a", 2), r.delete("b", void 0), zd && (!e.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", void 0) || r.has("b")) || !t.size && (zd || !px) || !t.sort || e.href !== "http://a/c%20d?a=1&c=3" || t.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !t[mx] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("http://x", void 0).host !== "x"
    }),
    vx = ne,
    yx = at,
    bx = ie,
    wx = Hr,
    qd = sr,
    Ex = gx,
    Av = yx("URL"),
    Sx = Ex && bx(function() {
        Av.canParse()
    });
vx({
    target: "URL",
    stat: !0,
    forced: !Sx
}, {
    canParse: function(t) {
        var r = wx(arguments.length, 1),
            n = qd(t),
            a = r < 2 || arguments[1] === void 0 ? void 0 : qd(arguments[1]);
        try {
            return !!new Av(n, a)
        } catch {
            return !1
        }
    }
});
var $x = ls,
    ws = ee,
    Wd = sr,
    Ax = Hr,
    Ov = URLSearchParams,
    Es = Ov.prototype,
    Ox = ws(Es.append),
    Gd = ws(Es.delete),
    Rx = ws(Es.forEach),
    _x = ws([].push),
    sl = new Ov("a=1&a=2&b=3");
sl.delete("a", 1);
sl.delete("b", void 0);
sl + "" != "a=2" && $x(Es, "delete", function(e) {
    var t = arguments.length,
        r = t < 2 ? void 0 : arguments[1];
    if (t && r === void 0) return Gd(this, e);
    var n = [];
    Rx(this, function(f, d) {
        _x(n, {
            key: d,
            value: f
        })
    }), Ax(t, 1);
    for (var a = Wd(e), i = Wd(r), s = 0, o = 0, u = !1, c = n.length, l; s < c;) l = n[s++], u || l.key === a ? (u = !0, Gd(this, l.key)) : o++;
    for (; o < c;) l = n[o++], l.key === a && l.value === i || Ox(this, l.key, l.value)
}, {
    enumerable: !0,
    unsafe: !0
});
var Cx = ls,
    Rv = ee,
    Nx = sr,
    xx = Hr,
    _v = URLSearchParams,
    ol = _v.prototype,
    Tx = Rv(ol.getAll),
    Ix = Rv(ol.has),
    Hd = new _v("a=1");
(Hd.has("a", 2) || !Hd.has("a", void 0)) && Cx(ol, "has", function(t) {
    var r = arguments.length,
        n = r < 2 ? void 0 : arguments[1];
    if (r && n === void 0) return Ix(this, t);
    var a = Tx(this, t);
    xx(r, 1);
    for (var i = Nx(n), s = 0; s < a.length;)
        if (a[s++] === i) return !0;
    return !1
}, {
    enumerable: !0,
    unsafe: !0
});
var Px = ve,
    kx = ee,
    Lx = Vc,
    Fu = URLSearchParams.prototype,
    Fx = kx(Fu.forEach);
Px && !("size" in Fu) && Lx(Fu, "size", {
    get: function() {
        var t = 0;
        return Fx(this, function() {
            t++
        }), t
    },
    configurable: !0,
    enumerable: !0
});
var Dx = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.4.2"
};
const Kd = e => {
        let t;
        const r = new Set,
            n = (u, c) => {
                const l = typeof u == "function" ? u(t) : u;
                if (!Object.is(l, t)) {
                    const f = t;
                    t = c ?? (typeof l != "object" || l === null) ? l : Object.assign({}, t, l), r.forEach(d => d(t, f))
                }
            },
            a = () => t,
            o = {
                setState: n,
                getState: a,
                subscribe: u => (r.add(u), () => r.delete(u)),
                destroy: () => {
                    (Dx ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                }
            };
        return t = e(n, a, o), o
    },
    jx = e => e ? Kd(e) : Kd;
var Cv = {
        exports: {}
    },
    Nv = {},
    xv = {
        exports: {}
    },
    Tv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr = T;

function Ux(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Mx = typeof Object.is == "function" ? Object.is : Ux,
    Bx = kr.useState,
    Vx = kr.useEffect,
    zx = kr.useLayoutEffect,
    qx = kr.useDebugValue;

function Wx(e, t) {
    var r = t(),
        n = Bx({
            inst: {
                value: r,
                getSnapshot: t
            }
        }),
        a = n[0].inst,
        i = n[1];
    return zx(function() {
        a.value = r, a.getSnapshot = t, xo(a) && i({
            inst: a
        })
    }, [e, r, t]), Vx(function() {
        return xo(a) && i({
            inst: a
        }), e(function() {
            xo(a) && i({
                inst: a
            })
        })
    }, [e]), qx(r), r
}

function xo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !Mx(e, r)
    } catch {
        return !0
    }
}

function Gx(e, t) {
    return t()
}
var Hx = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Gx : Wx;
Tv.useSyncExternalStore = kr.useSyncExternalStore !== void 0 ? kr.useSyncExternalStore : Hx;
xv.exports = Tv;
var Kx = xv.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss = T,
    Xx = Kx;

function Yx(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Jx = typeof Object.is == "function" ? Object.is : Yx,
    Qx = Xx.useSyncExternalStore,
    Zx = Ss.useRef,
    eT = Ss.useEffect,
    tT = Ss.useMemo,
    rT = Ss.useDebugValue;
Nv.useSyncExternalStoreWithSelector = function(e, t, r, n, a) {
    var i = Zx(null);
    if (i.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        i.current = s
    } else s = i.current;
    i = tT(function() {
        function u(h) {
            if (!c) {
                if (c = !0, l = h, h = n(h), a !== void 0 && s.hasValue) {
                    var p = s.value;
                    if (a(p, h)) return f = p
                }
                return f = h
            }
            if (p = f, Jx(l, h)) return p;
            var v = n(h);
            return a !== void 0 && a(p, v) ? p : (l = h, f = v)
        }
        var c = !1,
            l, f, d = r === void 0 ? null : r;
        return [function() {
            return u(t())
        }, d === null ? void 0 : function() {
            return u(d())
        }]
    }, [t, r, n, a]);
    var o = Qx(e, i[0], i[1]);
    return eT(function() {
        s.hasValue = !0, s.value = o
    }, [o]), rT(o), o
};
Cv.exports = Nv;
var nT = Cv.exports;
const aT = Re(nT);
var Iv = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.4.2"
};
const {
    useDebugValue: iT
} = Pm, {
    useSyncExternalStoreWithSelector: sT
} = aT;
let Xd = !1;

function oT(e, t = e.getState, r) {
    (Iv ? "production" : void 0) !== "production" && r && !Xd && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Xd = !0);
    const n = sT(e.subscribe, e.getState, e.getServerState || e.getState, t, r);
    return iT(n), n
}
const Yd = e => {
        (Iv ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? jx(e) : e,
            r = (n, a) => oT(t, n, a);
        return Object.assign(r, t), r
    },
    EB = e => e ? Yd(e) : Yd;
var uT = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    PACKAGE_VERSION: "4.4.2"
};

function cT(e, t) {
    let r;
    try {
        r = e()
    } catch {
        return
    }
    return {
        getItem: a => {
            var i;
            const s = u => u === null ? null : JSON.parse(u, t == null ? void 0 : t.reviver),
                o = (i = r.getItem(a)) != null ? i : null;
            return o instanceof Promise ? o.then(s) : s(o)
        },
        setItem: (a, i) => r.setItem(a, JSON.stringify(i, t == null ? void 0 : t.replacer)),
        removeItem: a => r.removeItem(a)
    }
}
const kn = e => t => {
        try {
            const r = e(t);
            return r instanceof Promise ? r : {
                then(n) {
                    return kn(n)(r)
                },
                catch (n) {
                    return this
                }
            }
        } catch (r) {
            return {
                then(n) {
                    return this
                },
                catch (n) {
                    return kn(n)(r)
                }
            }
        }
    },
    lT = (e, t) => (r, n, a) => {
        let i = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: y => y,
                version: 0,
                merge: (y, A) => ({
                    ...A,
                    ...y
                }),
                ...t
            },
            s = !1;
        const o = new Set,
            u = new Set;
        let c;
        try {
            c = i.getStorage()
        } catch {}
        if (!c) return e((...y) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), r(...y)
        }, n, a);
        const l = kn(i.serialize),
            f = () => {
                const y = i.partialize({
                    ...n()
                });
                let A;
                const m = l({
                    state: y,
                    version: i.version
                }).then(R => c.setItem(i.name, R)).catch(R => {
                    A = R
                });
                if (A) throw A;
                return m
            },
            d = a.setState;
        a.setState = (y, A) => {
            d(y, A), f()
        };
        const h = e((...y) => {
            r(...y), f()
        }, n, a);
        let p;
        const v = () => {
            var y;
            if (!c) return;
            s = !1, o.forEach(m => m(n()));
            const A = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, n())) || void 0;
            return kn(c.getItem.bind(c))(i.name).then(m => {
                if (m) return i.deserialize(m)
            }).then(m => {
                if (m)
                    if (typeof m.version == "number" && m.version !== i.version) {
                        if (i.migrate) return i.migrate(m.state, m.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return m.state
            }).then(m => {
                var R;
                return p = i.merge(m, (R = n()) != null ? R : h), r(p, !0), f()
            }).then(() => {
                A == null || A(p, void 0), s = !0, u.forEach(m => m(p))
            }).catch(m => {
                A == null || A(void 0, m)
            })
        };
        return a.persist = {
            setOptions: y => {
                i = {
                    ...i,
                    ...y
                }, y.getStorage && (c = y.getStorage())
            },
            clearStorage: () => {
                c == null || c.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => v(),
            hasHydrated: () => s,
            onHydrate: y => (o.add(y), () => {
                o.delete(y)
            }),
            onFinishHydration: y => (u.add(y), () => {
                u.delete(y)
            })
        }, v(), p || h
    },
    fT = (e, t) => (r, n, a) => {
        let i = {
                storage: cT(() => localStorage),
                partialize: v => v,
                version: 0,
                merge: (v, y) => ({
                    ...y,
                    ...v
                }),
                ...t
            },
            s = !1;
        const o = new Set,
            u = new Set;
        let c = i.storage;
        if (!c) return e((...v) => {
            console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), r(...v)
        }, n, a);
        const l = () => {
                const v = i.partialize({
                    ...n()
                });
                return c.setItem(i.name, {
                    state: v,
                    version: i.version
                })
            },
            f = a.setState;
        a.setState = (v, y) => {
            f(v, y), l()
        };
        const d = e((...v) => {
            r(...v), l()
        }, n, a);
        let h;
        const p = () => {
            var v, y;
            if (!c) return;
            s = !1, o.forEach(m => {
                var R;
                return m((R = n()) != null ? R : d)
            });
            const A = ((y = i.onRehydrateStorage) == null ? void 0 : y.call(i, (v = n()) != null ? v : d)) || void 0;
            return kn(c.getItem.bind(c))(i.name).then(m => {
                if (m)
                    if (typeof m.version == "number" && m.version !== i.version) {
                        if (i.migrate) return i.migrate(m.state, m.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return m.state
            }).then(m => {
                var R;
                return h = i.merge(m, (R = n()) != null ? R : d), r(h, !0), l()
            }).then(() => {
                A == null || A(h, void 0), h = n(), s = !0, u.forEach(m => m(h))
            }).catch(m => {
                A == null || A(void 0, m)
            })
        };
        return a.persist = {
            setOptions: v => {
                i = {
                    ...i,
                    ...v
                }, v.storage && (c = v.storage)
            },
            clearStorage: () => {
                c == null || c.removeItem(i.name)
            },
            getOptions: () => i,
            rehydrate: () => p(),
            hasHydrated: () => s,
            onHydrate: v => (o.add(v), () => {
                o.delete(v)
            }),
            onFinishHydration: v => (u.add(v), () => {
                u.delete(v)
            })
        }, i.skipHydration || p(), h || d
    },
    dT = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((uT ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), lT(e, t)) : fT(e, t),
    SB = dT;
var Pv = Symbol.for("immer-nothing"),
    Jd = Symbol.for("immer-draftable"),
    xe = Symbol.for("immer-state");

function Ve(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var Lr = Object.getPrototypeOf;

function Fr(e) {
    return !!e && !!e[xe]
}

function Kt(e) {
    var t;
    return e ? kv(e) || Array.isArray(e) || !!e[Jd] || !!((t = e.constructor) != null && t[Jd]) || As(e) || Os(e) : !1
}
var hT = Object.prototype.constructor.toString();

function kv(e) {
    if (!e || typeof e != "object") return !1;
    const t = Lr(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === hT
}

function Ln(e, t) {
    $s(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
        t(r, n, e)
    }) : e.forEach((r, n) => t(n, r, e))
}

function $s(e) {
    const t = e[xe];
    return t ? t.type_ : Array.isArray(e) ? 1 : As(e) ? 2 : Os(e) ? 3 : 0
}

function Du(e, t) {
    return $s(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Lv(e, t, r) {
    const n = $s(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}

function pT(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function As(e) {
    return e instanceof Map
}

function Os(e) {
    return e instanceof Set
}

function Ut(e) {
    return e.copy_ || e.base_
}

function ju(e, t) {
    if (As(e)) return new Map(e);
    if (Os(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && kv(e)) return Lr(e) ? {
        ...e
    } : Object.assign(Object.create(null), e);
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[xe];
    let n = Reflect.ownKeys(r);
    for (let a = 0; a < n.length; a++) {
        const i = n[a],
            s = r[i];
        s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[i]
        })
    }
    return Object.create(Lr(e), r)
}

function ul(e, t = !1) {
    return Rs(e) || Fr(e) || !Kt(e) || ($s(e) > 1 && (e.set = e.add = e.clear = e.delete = mT), Object.freeze(e), t && Ln(e, (r, n) => ul(n, !0))), e
}

function mT() {
    Ve(2)
}

function Rs(e) {
    return Object.isFrozen(e)
}
var gT = {};

function Xt(e) {
    const t = gT[e];
    return t || Ve(0, e), t
}
var Fn;

function Fv() {
    return Fn
}

function vT(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function Qd(e, t) {
    t && (Xt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Uu(e) {
    Mu(e), e.drafts_.forEach(yT), e.drafts_ = null
}

function Mu(e) {
    e === Fn && (Fn = e.parent_)
}

function Zd(e) {
    return Fn = vT(Fn, e)
}

function yT(e) {
    const t = e[xe];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function eh(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return e !== void 0 && e !== r ? (r[xe].modified_ && (Uu(t), Ve(4)), Kt(e) && (e = yi(t, e), t.parent_ || bi(t, e)), t.patches_ && Xt("Patches").generateReplacementPatches_(r[xe].base_, e, t.patches_, t.inversePatches_)) : e = yi(t, r, []), Uu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Pv ? e : void 0
}

function yi(e, t, r) {
    if (Rs(t)) return t;
    const n = t[xe];
    if (!n) return Ln(t, (a, i) => th(e, n, t, a, i, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return bi(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
        n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
        const a = n.copy_;
        let i = a,
            s = !1;
        n.type_ === 3 && (i = new Set(a), a.clear(), s = !0), Ln(i, (o, u) => th(e, n, a, o, u, r, s)), bi(e, a, !1), r && e.patches_ && Xt("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_)
    }
    return n.copy_
}

function th(e, t, r, n, a, i, s) {
    if (Fr(a)) {
        const o = i && t && t.type_ !== 3 && !Du(t.assigned_, n) ? i.concat(n) : void 0,
            u = yi(e, a, o);
        if (Lv(r, n, u), Fr(u)) e.canAutoFreeze_ = !1;
        else return
    } else s && r.add(a);
    if (Kt(a) && !Rs(a)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        yi(e, a), (!t || !t.scope_.parent_) && bi(e, a)
    }
}

function bi(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ul(t, r)
}

function bT(e, t) {
    const r = Array.isArray(e),
        n = {
            type_: r ? 1 : 0,
            scope_: t ? t.scope_ : Fv(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let a = n,
        i = cl;
    r && (a = [n], i = Dn);
    const {
        revoke: s,
        proxy: o
    } = Proxy.revocable(a, i);
    return n.draft_ = o, n.revoke_ = s, o
}
var cl = {
        get(e, t) {
            if (t === xe) return e;
            const r = Ut(e);
            if (!Du(r, t)) return wT(e, r, t);
            const n = r[t];
            return e.finalized_ || !Kt(n) ? n : n === To(e.base_, t) ? (Io(e), e.copy_[t] = Vu(n, e)) : n
        },
        has(e, t) {
            return t in Ut(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(Ut(e))
        },
        set(e, t, r) {
            const n = Dv(Ut(e), t);
            if (n != null && n.set) return n.set.call(e.draft_, r), !0;
            if (!e.modified_) {
                const a = To(Ut(e), t),
                    i = a == null ? void 0 : a[xe];
                if (i && i.base_ === r) return e.copy_[t] = r, e.assigned_[t] = !1, !0;
                if (pT(r, a) && (r !== void 0 || Du(e.base_, t))) return !0;
                Io(e), Bu(e)
            }
            return e.copy_[t] === r && (r !== void 0 || t in e.copy_) || Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return To(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Io(e), Bu(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const r = Ut(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: n.enumerable,
                value: r[t]
            }
        },
        defineProperty() {
            Ve(11)
        },
        getPrototypeOf(e) {
            return Lr(e.base_)
        },
        setPrototypeOf() {
            Ve(12)
        }
    },
    Dn = {};
Ln(cl, (e, t) => {
    Dn[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
Dn.deleteProperty = function(e, t) {
    return Dn.set.call(this, e, t, void 0)
};
Dn.set = function(e, t, r) {
    return cl.set.call(this, e[0], t, r, e[0])
};

function To(e, t) {
    const r = e[xe];
    return (r ? Ut(r) : e)[t]
}

function wT(e, t, r) {
    var a;
    const n = Dv(t, r);
    return n ? "value" in n ? n.value : (a = n.get) == null ? void 0 : a.call(e.draft_) : void 0
}

function Dv(e, t) {
    if (!(t in e)) return;
    let r = Lr(e);
    for (; r;) {
        const n = Object.getOwnPropertyDescriptor(r, t);
        if (n) return n;
        r = Lr(r)
    }
}

function Bu(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && Bu(e.parent_))
}

function Io(e) {
    e.copy_ || (e.copy_ = ju(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var ET = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
            if (typeof t == "function" && typeof r != "function") {
                const i = r;
                r = t;
                const s = this;
                return function(u = i, ...c) {
                    return s.produce(u, l => r.call(this, l, ...c))
                }
            }
            typeof r != "function" && Ve(6), n !== void 0 && typeof n != "function" && Ve(7);
            let a;
            if (Kt(t)) {
                const i = Zd(this),
                    s = Vu(t, void 0);
                let o = !0;
                try {
                    a = r(s), o = !1
                } finally {
                    o ? Uu(i) : Mu(i)
                }
                return Qd(i, n), eh(a, i)
            } else if (!t || typeof t != "object") {
                if (a = r(t), a === void 0 && (a = t), a === Pv && (a = void 0), this.autoFreeze_ && ul(a, !0), n) {
                    const i = [],
                        s = [];
                    Xt("Patches").generateReplacementPatches_(t, a, i, s), n(i, s)
                }
                return a
            } else Ve(1, t)
        }, this.produceWithPatches = (t, r) => {
            if (typeof t == "function") return (s, ...o) => this.produceWithPatches(s, u => t(u, ...o));
            let n, a;
            return [this.produce(t, r, (s, o) => {
                n = s, a = o
            }), n, a]
        }, typeof(e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof(e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        Kt(e) || Ve(8), Fr(e) && (e = ST(e));
        const t = Zd(this),
            r = Vu(e, void 0);
        return r[xe].isManual_ = !0, Mu(t), r
    }
    finishDraft(e, t) {
        const r = e && e[xe];
        (!r || !r.isManual_) && Ve(9);
        const {
            scope_: n
        } = r;
        return Qd(n, t), eh(void 0, n)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let r;
        for (r = t.length - 1; r >= 0; r--) {
            const a = t[r];
            if (a.path.length === 0 && a.op === "replace") {
                e = a.value;
                break
            }
        }
        r > -1 && (t = t.slice(r + 1));
        const n = Xt("Patches").applyPatches_;
        return Fr(e) ? n(e, t) : this.produce(e, a => n(a, t))
    }
};

function Vu(e, t) {
    const r = As(e) ? Xt("MapSet").proxyMap_(e, t) : Os(e) ? Xt("MapSet").proxySet_(e, t) : bT(e, t);
    return (t ? t.scope_ : Fv()).drafts_.push(r), r
}

function ST(e) {
    return Fr(e) || Ve(10, e), jv(e)
}

function jv(e) {
    if (!Kt(e) || Rs(e)) return e;
    const t = e[xe];
    let r;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, r = ju(e, t.scope_.immer_.useStrictShallowCopy_)
    } else r = ju(e, !0);
    return Ln(r, (n, a) => {
        Lv(r, n, jv(a))
    }), t && (t.finalized_ = !1), r
}
var Te = new ET,
    $T = Te.produce;
Te.produceWithPatches.bind(Te);
Te.setAutoFreeze.bind(Te);
Te.setUseStrictShallowCopy.bind(Te);
Te.applyPatches.bind(Te);
Te.createDraft.bind(Te);
Te.finishDraft.bind(Te);
const AT = e => (t, r, n) => (n.setState = (a, i, ...s) => {
        const o = typeof a == "function" ? $T(a) : a;
        return t(o, i, ...s)
    }, e(n.setState, r, n)),
    $B = AT,
    OT = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    RT = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    _T = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function CT(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        NT(e);
        return
    }
    return t
}

function NT(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function xT(e, t = {}) {
    if (typeof e != "string") return e;
    const r = e.trim();
    if (e[0] === '"' && e[e.length - 1] === '"') return r.slice(1, -1);
    if (r.length <= 9) {
        const n = r.toLowerCase();
        if (n === "true") return !0;
        if (n === "false") return !1;
        if (n === "undefined") return;
        if (n === "null") return null;
        if (n === "nan") return Number.NaN;
        if (n === "infinity") return Number.POSITIVE_INFINITY;
        if (n === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!_T.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (OT.test(e) || RT.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, CT)
        }
        return JSON.parse(e)
    } catch (n) {
        if (t.strict) throw n;
        return e
    }
}
const TT = /#/g,
    IT = /&/g,
    PT = /=/g,
    ll = /\+/g,
    kT = /%5e/gi,
    LT = /%60/gi,
    FT = /%7c/gi,
    DT = /%20/gi;

function jT(e) {
    return encodeURI("" + e).replace(FT, "|")
}

function zu(e) {
    return jT(typeof e == "string" ? e : JSON.stringify(e)).replace(ll, "%2B").replace(DT, "+").replace(TT, "%23").replace(IT, "%26").replace(LT, "`").replace(kT, "^")
}

function Po(e) {
    return zu(e).replace(PT, "%3D")
}

function Uv(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function UT(e) {
    return Uv(e.replace(ll, " "))
}

function MT(e) {
    return Uv(e.replace(ll, " "))
}

function BT(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const r of e.split("&")) {
        const n = r.match(/([^=]+)=?(.*)/) || [];
        if (n.length < 2) continue;
        const a = UT(n[1]);
        if (a === "__proto__" || a === "constructor") continue;
        const i = MT(n[2] || "");
        t[a] === void 0 ? t[a] = i : Array.isArray(t[a]) ? t[a].push(i) : t[a] = [t[a], i]
    }
    return t
}

function VT(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(r => `${Po(e)}=${zu(r)}`).join("&") : `${Po(e)}=${zu(t)}` : Po(e)
}

function zT(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => VT(t, e[t])).filter(Boolean).join("&")
}
const qT = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    WT = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    GT = /^([/\\]\s*){2,}[^/\\]/;

function Mv(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? qT.test(e) : WT.test(e) || (t.acceptRelative ? GT.test(e) : !1)
}
const HT = /\/$|\/\?/;

function qu(e = "", t = !1) {
    return t ? HT.test(e) : e.endsWith("/")
}

function KT(e = "", t = !1) {
    if (!t) return (qu(e) ? e.slice(0, -1) : e) || "/";
    if (!qu(e, !0)) return e || "/";
    const [r, ...n] = e.split("?");
    return (r.slice(0, -1) || "/") + (n.length > 0 ? `?${n.join("?")}` : "")
}

function XT(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (qu(e, !0)) return e || "/";
    const [r, ...n] = e.split("?");
    return r + "/" + (n.length > 0 ? `?${n.join("?")}` : "")
}

function YT(e, t) {
    if (QT(t) || Mv(e)) return e;
    const r = KT(t);
    return e.startsWith(r) ? e : tI(r, e)
}

function JT(e, t) {
    const r = Bv(e),
        n = {
            ...BT(r.search),
            ...t
        };
    return r.search = zT(n), rI(r)
}

function QT(e) {
    return !e || e === "/"
}

function ZT(e) {
    return e && e !== "/"
}
const eI = /^\.?\//;

function tI(e, ...t) {
    let r = e || "";
    for (const n of t.filter(a => ZT(a)))
        if (r) {
            const a = n.replace(eI, "");
            r = XT(r) + a
        } else r = n;
    return r
}

function Bv(e = "", t) {
    const r = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
    if (r) {
        const [, f, d = ""] = r;
        return {
            protocol: f,
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!Mv(e, {
            acceptRelative: !0
        })) return t ? Bv(t + e) : rh(e);
    const [, n = "", a, i = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, s = "", o = ""] = i.match(/([^#/?]*)(.*)?/) || [], {
        pathname: u,
        search: c,
        hash: l
    } = rh(o.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: a ? a.slice(0, Math.max(0, a.length - 1)) : "",
        host: s,
        pathname: u,
        search: c,
        hash: l
    }
}

function rh(e = "") {
    const [t = "", r = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: r,
        hash: n
    }
}

function rI(e) {
    const t = e.pathname || "",
        r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        n = e.hash || "",
        a = e.auth ? e.auth + "@" : "",
        i = e.host || "";
    return (e.protocol ? e.protocol + "//" : "") + a + i + t + r + n
}
class nI extends Error {
    constructor(t, r) {
        super(t, r), this.name = "FetchError", r != null && r.cause && !this.cause && (this.cause = r.cause)
    }
}

function aI(e) {
    var u, c, l, f, d;
    const t = ((u = e.error) == null ? void 0 : u.message) || ((c = e.error) == null ? void 0 : c.toString()) || "",
        r = ((l = e.request) == null ? void 0 : l.method) || ((f = e.options) == null ? void 0 : f.method) || "GET",
        n = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
        a = `[${r}] ${JSON.stringify(n)}`,
        i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        s = `${a}: ${i}${t?` ${t}`:""}`,
        o = new nI(s, e.error ? {
            cause: e.error
        } : void 0);
    for (const h of ["request", "options", "response"]) Object.defineProperty(o, h, {
        get() {
            return e[h]
        }
    });
    for (const [h, p] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(o, h, {
        get() {
            return e.response && e.response[p]
        }
    });
    return o
}
const iI = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function nh(e = "GET") {
    return iI.has(e.toUpperCase())
}

function sI(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const oI = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    uI = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function cI(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return uI.test(t) ? "json" : oI.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function lI(e, t, r = globalThis.Headers) {
    const n = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (n.params = {
            ...t == null ? void 0 : t.params,
            ...e == null ? void 0 : e.params
        }), t != null && t.query && (e != null && e.query) && (n.query = {
            ...t == null ? void 0 : t.query,
            ...e == null ? void 0 : e.query
        }), t != null && t.headers && (e != null && e.headers)) {
        n.headers = new r((t == null ? void 0 : t.headers) || {});
        for (const [a, i] of new r((e == null ? void 0 : e.headers) || {})) n.headers.set(a, i)
    }
    return n
}
const fI = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    dI = new Set([101, 204, 205, 304]);

function Vv(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: r = globalThis.Headers,
        AbortController: n = globalThis.AbortController
    } = e;
    async function a(o) {
        const u = o.error && o.error.name === "AbortError" && !o.options.timeout || !1;
        if (o.options.retry !== !1 && !u) {
            let l;
            typeof o.options.retry == "number" ? l = o.options.retry : l = nh(o.options.method) ? 0 : 1;
            const f = o.response && o.response.status || 500;
            if (l > 0 && (Array.isArray(o.options.retryStatusCodes) ? o.options.retryStatusCodes.includes(f) : fI.has(f))) {
                const d = o.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)), i(o.request, {
                    ...o.options,
                    retry: l - 1,
                    timeout: o.options.timeout
                })
            }
        }
        const c = aI(o);
        throw Error.captureStackTrace && Error.captureStackTrace(c, i), c
    }
    const i = async function(u, c = {}) {
        var d;
        const l = {
            request: u,
            options: lI(c, e.defaults, r),
            response: void 0,
            error: void 0
        };
        if (l.options.method = (d = l.options.method) == null ? void 0 : d.toUpperCase(), l.options.onRequest && await l.options.onRequest(l), typeof l.request == "string" && (l.options.baseURL && (l.request = YT(l.request, l.options.baseURL)), (l.options.query || l.options.params) && (l.request = JT(l.request, {
                ...l.options.params,
                ...l.options.query
            }))), l.options.body && nh(l.options.method) && (sI(l.options.body) ? (l.options.body = typeof l.options.body == "string" ? l.options.body : JSON.stringify(l.options.body), l.options.headers = new r(l.options.headers || {}), l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"), l.options.headers.has("accept") || l.options.headers.set("accept", "application/json")) : ("pipeTo" in l.options.body && typeof l.options.body.pipeTo == "function" || typeof l.options.body.pipe == "function") && ("duplex" in l.options || (l.options.duplex = "half"))), !l.options.signal && l.options.timeout) {
            const h = new n;
            setTimeout(() => h.abort(), l.options.timeout), l.options.signal = h.signal
        }
        try {
            l.response = await t(l.request, l.options)
        } catch (h) {
            return l.error = h, l.options.onRequestError && await l.options.onRequestError(l), await a(l)
        }
        if (l.response.body && !dI.has(l.response.status) && l.options.method !== "HEAD") {
            const h = (l.options.parseResponse ? "json" : l.options.responseType) || cI(l.response.headers.get("content-type") || "");
            switch (h) {
                case "json": {
                    const p = await l.response.text(),
                        v = l.options.parseResponse || xT;
                    l.response._data = v(p);
                    break
                }
                case "stream": {
                    l.response._data = l.response.body;
                    break
                }
                default:
                    l.response._data = await l.response[h]()
            }
        }
        return l.options.onResponse && await l.options.onResponse(l), !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l), await a(l)) : l.response
    }, s = async function(u, c) {
        return (await i(u, c))._data
    };
    return s.raw = i, s.native = (...o) => t(...o), s.create = (o = {}) => Vv({
        ...e,
        defaults: {
            ...e.defaults,
            ...o
        }
    }), s
}
const fl = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    hI = fl.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    pI = fl.Headers,
    mI = fl.AbortController,
    AB = Vv({
        fetch: hI,
        Headers: pI,
        AbortController: mI
    });
var zv = {
    exports: {}
};
(function(e, t) {
    (function(r, n, a) {
        e.exports = a(), e.exports.default = a()
    })("slugify", mn, function() {
        var r = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),
            n = JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');

        function a(i, s) {
            if (typeof i != "string") throw new Error("slugify: string argument expected");
            s = typeof s == "string" ? {
                replacement: s
            } : s || {};
            var o = n[s.locale] || {},
                u = s.replacement === void 0 ? "-" : s.replacement,
                c = s.trim === void 0 ? !0 : s.trim,
                l = i.normalize().split("").reduce(function(f, d) {
                    var h = o[d];
                    return h === void 0 && (h = r[d]), h === void 0 && (h = d), h === u && (h = " "), f + h.replace(s.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
                }, "");
            return s.strict && (l = l.replace(/[^A-Za-z0-9\s]/g, "")), c && (l = l.trim()), l = l.replace(/\s+/g, u), s.lower && (l = l.toLowerCase()), l
        }
        return a.extend = function(i) {
            Object.assign(r, i)
        }, a
    })
})(zv);
var gI = zv.exports;
const OB = Re(gI);
let vI = e => crypto.getRandomValues(new Uint8Array(e)),
    yI = (e, t, r) => {
        let n = (2 << Math.log(e.length - 1) / Math.LN2) - 1,
            a = -~(1.6 * n * t / e.length);
        return (i = t) => {
            let s = "";
            for (;;) {
                let o = r(a),
                    u = a;
                for (; u--;)
                    if (s += e[o[u] & n] || "", s.length === i) return s
            }
        }
    },
    qv = (e, t = 21) => yI(e, t, vI);
const bI = {
    aa: {
        name: "Afar",
        nativeName: "Afaraf"
    },
    ab: {
        name: "Abkhaz",
        nativeName: "аҧсуа бызшәа"
    },
    ae: {
        name: "Avestan",
        nativeName: "avesta"
    },
    af: {
        name: "Afrikaans",
        nativeName: "Afrikaans"
    },
    ak: {
        name: "Akan",
        nativeName: "Akan"
    },
    am: {
        name: "Amharic",
        nativeName: "አማርኛ"
    },
    an: {
        name: "Aragonese",
        nativeName: "aragonés"
    },
    ar: {
        name: "Arabic",
        nativeName: "اَلْعَرَبِيَّةُ"
    },
    as: {
        name: "Assamese",
        nativeName: "অসমীয়া"
    },
    av: {
        name: "Avaric",
        nativeName: "авар мацӀ"
    },
    ay: {
        name: "Aymara",
        nativeName: "aymar aru"
    },
    az: {
        name: "Azerbaijani",
        nativeName: "azərbaycan dili"
    },
    ba: {
        name: "Bashkir",
        nativeName: "башҡорт теле"
    },
    be: {
        name: "Belarusian",
        nativeName: "беларуская мова"
    },
    bg: {
        name: "Bulgarian",
        nativeName: "български език"
    },
    bi: {
        name: "Bislama",
        nativeName: "Bislama"
    },
    bm: {
        name: "Bambara",
        nativeName: "bamanankan"
    },
    bn: {
        name: "Bengali",
        nativeName: "বাংলা"
    },
    bo: {
        name: "Tibetan",
        nativeName: "བོད་ཡིག"
    },
    br: {
        name: "Breton",
        nativeName: "brezhoneg"
    },
    bs: {
        name: "Bosnian",
        nativeName: "bosanski jezik"
    },
    ca: {
        name: "Catalan",
        nativeName: "Català"
    },
    ce: {
        name: "Chechen",
        nativeName: "нохчийн мотт"
    },
    ch: {
        name: "Chamorro",
        nativeName: "Chamoru"
    },
    co: {
        name: "Corsican",
        nativeName: "corsu"
    },
    cr: {
        name: "Cree",
        nativeName: "ᓀᐦᐃᔭᐍᐏᐣ"
    },
    cs: {
        name: "Czech",
        nativeName: "čeština"
    },
    cu: {
        name: "Old Church Slavonic",
        nativeName: "ѩзыкъ словѣньскъ"
    },
    cv: {
        name: "Chuvash",
        nativeName: "чӑваш чӗлхи"
    },
    cy: {
        name: "Welsh",
        nativeName: "Cymraeg"
    },
    da: {
        name: "Danish",
        nativeName: "dansk"
    },
    de: {
        name: "German",
        nativeName: "Deutsch"
    },
    dv: {
        name: "Divehi",
        nativeName: "ދިވެހި"
    },
    dz: {
        name: "Dzongkha",
        nativeName: "རྫོང་ཁ"
    },
    ee: {
        name: "Ewe",
        nativeName: "Eʋegbe"
    },
    el: {
        name: "Greek",
        nativeName: "Ελληνικά"
    },
    en: {
        name: "English",
        nativeName: "English"
    },
    eo: {
        name: "Esperanto",
        nativeName: "Esperanto"
    },
    es: {
        name: "Spanish",
        nativeName: "Español"
    },
    et: {
        name: "Estonian",
        nativeName: "eesti"
    },
    eu: {
        name: "Basque",
        nativeName: "euskara"
    },
    fa: {
        name: "Persian",
        nativeName: "فارسی"
    },
    ff: {
        name: "Fula",
        nativeName: "Fulfulde"
    },
    fi: {
        name: "Finnish",
        nativeName: "suomi"
    },
    fj: {
        name: "Fijian",
        nativeName: "vosa Vakaviti"
    },
    fo: {
        name: "Faroese",
        nativeName: "føroyskt"
    },
    fr: {
        name: "French",
        nativeName: "Français"
    },
    fy: {
        name: "Western Frisian",
        nativeName: "Frysk"
    },
    ga: {
        name: "Irish",
        nativeName: "Gaeilge"
    },
    gd: {
        name: "Scottish Gaelic",
        nativeName: "Gàidhlig"
    },
    gl: {
        name: "Galician",
        nativeName: "galego"
    },
    gn: {
        name: "Guaraní",
        nativeName: "Avañe'ẽ"
    },
    gu: {
        name: "Gujarati",
        nativeName: "ગુજરાતી"
    },
    gv: {
        name: "Manx",
        nativeName: "Gaelg"
    },
    ha: {
        name: "Hausa",
        nativeName: "هَوُسَ"
    },
    he: {
        name: "Hebrew",
        nativeName: "עברית"
    },
    hi: {
        name: "Hindi",
        nativeName: "हिन्दी"
    },
    ho: {
        name: "Hiri Motu",
        nativeName: "Hiri Motu"
    },
    hr: {
        name: "Croatian",
        nativeName: "Hrvatski"
    },
    ht: {
        name: "Haitian",
        nativeName: "Kreyòl ayisyen"
    },
    hu: {
        name: "Hungarian",
        nativeName: "magyar"
    },
    hy: {
        name: "Armenian",
        nativeName: "Հայերեն"
    },
    hz: {
        name: "Herero",
        nativeName: "Otjiherero"
    },
    ia: {
        name: "Interlingua",
        nativeName: "Interlingua"
    },
    id: {
        name: "Indonesian",
        nativeName: "Bahasa Indonesia"
    },
    ie: {
        name: "Interlingue",
        nativeName: "Interlingue"
    },
    ig: {
        name: "Igbo",
        nativeName: "Asụsụ Igbo"
    },
    ii: {
        name: "Nuosu",
        nativeName: "ꆈꌠ꒿ Nuosuhxop"
    },
    ik: {
        name: "Inupiaq",
        nativeName: "Iñupiaq"
    },
    io: {
        name: "Ido",
        nativeName: "Ido"
    },
    is: {
        name: "Icelandic",
        nativeName: "Íslenska"
    },
    it: {
        name: "Italian",
        nativeName: "Italiano"
    },
    iu: {
        name: "Inuktitut",
        nativeName: "ᐃᓄᒃᑎᑐᑦ"
    },
    ja: {
        name: "Japanese",
        nativeName: "日本語"
    },
    jv: {
        name: "Javanese",
        nativeName: "basa Jawa"
    },
    ka: {
        name: "Georgian",
        nativeName: "ქართული"
    },
    kg: {
        name: "Kongo",
        nativeName: "Kikongo"
    },
    ki: {
        name: "Kikuyu",
        nativeName: "Gĩkũyũ"
    },
    kj: {
        name: "Kwanyama",
        nativeName: "Kuanyama"
    },
    kk: {
        name: "Kazakh",
        nativeName: "қазақ тілі"
    },
    kl: {
        name: "Kalaallisut",
        nativeName: "kalaallisut"
    },
    km: {
        name: "Khmer",
        nativeName: "ខេមរភាសា"
    },
    kn: {
        name: "Kannada",
        nativeName: "ಕನ್ನಡ"
    },
    ko: {
        name: "Korean",
        nativeName: "한국어"
    },
    kr: {
        name: "Kanuri",
        nativeName: "Kanuri"
    },
    ks: {
        name: "Kashmiri",
        nativeName: "कश्मीरी"
    },
    ku: {
        name: "Kurdish",
        nativeName: "Kurdî"
    },
    kv: {
        name: "Komi",
        nativeName: "коми кыв"
    },
    kw: {
        name: "Cornish",
        nativeName: "Kernewek"
    },
    ky: {
        name: "Kyrgyz",
        nativeName: "Кыргызча"
    },
    la: {
        name: "Latin",
        nativeName: "latine"
    },
    lb: {
        name: "Luxembourgish",
        nativeName: "Lëtzebuergesch"
    },
    lg: {
        name: "Ganda",
        nativeName: "Luganda"
    },
    li: {
        name: "Limburgish",
        nativeName: "Limburgs"
    },
    ln: {
        name: "Lingala",
        nativeName: "Lingála"
    },
    lo: {
        name: "Lao",
        nativeName: "ພາສາລາວ"
    },
    lt: {
        name: "Lithuanian",
        nativeName: "lietuvių kalba"
    },
    lu: {
        name: "Luba-Katanga",
        nativeName: "Kiluba"
    },
    lv: {
        name: "Latvian",
        nativeName: "latviešu valoda"
    },
    mg: {
        name: "Malagasy",
        nativeName: "fiteny malagasy"
    },
    mh: {
        name: "Marshallese",
        nativeName: "Kajin M̧ajeļ"
    },
    mi: {
        name: "Māori",
        nativeName: "te reo Māori"
    },
    mk: {
        name: "Macedonian",
        nativeName: "македонски јазик"
    },
    ml: {
        name: "Malayalam",
        nativeName: "മലയാളം"
    },
    mn: {
        name: "Mongolian",
        nativeName: "Монгол хэл"
    },
    mr: {
        name: "Marathi",
        nativeName: "मराठी"
    },
    ms: {
        name: "Malay",
        nativeName: "Bahasa Melayu"
    },
    mt: {
        name: "Maltese",
        nativeName: "Malti"
    },
    my: {
        name: "Burmese",
        nativeName: "ဗမာစာ"
    },
    na: {
        name: "Nauru",
        nativeName: "Dorerin Naoero"
    },
    nb: {
        name: "Norwegian Bokmål",
        nativeName: "Norsk bokmål"
    },
    nd: {
        name: "Northern Ndebele",
        nativeName: "isiNdebele"
    },
    ne: {
        name: "Nepali",
        nativeName: "नेपाली"
    },
    ng: {
        name: "Ndonga",
        nativeName: "Owambo"
    },
    nl: {
        name: "Dutch",
        nativeName: "Nederlands"
    },
    nn: {
        name: "Norwegian Nynorsk",
        nativeName: "Norsk nynorsk"
    },
    no: {
        name: "Norwegian",
        nativeName: "Norsk"
    },
    nr: {
        name: "Southern Ndebele",
        nativeName: "isiNdebele"
    },
    nv: {
        name: "Navajo",
        nativeName: "Diné bizaad"
    },
    ny: {
        name: "Chichewa",
        nativeName: "chiCheŵa"
    },
    oc: {
        name: "Occitan",
        nativeName: "occitan"
    },
    oj: {
        name: "Ojibwe",
        nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    om: {
        name: "Oromo",
        nativeName: "Afaan Oromoo"
    },
    or: {
        name: "Oriya",
        nativeName: "ଓଡ଼ିଆ"
    },
    os: {
        name: "Ossetian",
        nativeName: "ирон æвзаг"
    },
    pa: {
        name: "Panjabi",
        nativeName: "ਪੰਜਾਬੀ"
    },
    pi: {
        name: "Pāli",
        nativeName: "पाऴि"
    },
    pl: {
        name: "Polish",
        nativeName: "Polski"
    },
    ps: {
        name: "Pashto",
        nativeName: "پښتو"
    },
    pt: {
        name: "Portuguese",
        nativeName: "Português"
    },
    qu: {
        name: "Quechua",
        nativeName: "Runa Simi"
    },
    rm: {
        name: "Romansh",
        nativeName: "rumantsch grischun"
    },
    rn: {
        name: "Kirundi",
        nativeName: "Ikirundi"
    },
    ro: {
        name: "Romanian",
        nativeName: "Română"
    },
    ru: {
        name: "Russian",
        nativeName: "Русский"
    },
    rw: {
        name: "Kinyarwanda",
        nativeName: "Ikinyarwanda"
    },
    sa: {
        name: "Sanskrit",
        nativeName: "संस्कृतम्"
    },
    sc: {
        name: "Sardinian",
        nativeName: "sardu"
    },
    sd: {
        name: "Sindhi",
        nativeName: "सिन्धी"
    },
    se: {
        name: "Northern Sami",
        nativeName: "Davvisámegiella"
    },
    sg: {
        name: "Sango",
        nativeName: "yângâ tî sängö"
    },
    si: {
        name: "Sinhala",
        nativeName: "සිංහල"
    },
    sk: {
        name: "Slovak",
        nativeName: "slovenčina"
    },
    sl: {
        name: "Slovenian",
        nativeName: "slovenščina"
    },
    sm: {
        name: "Samoan",
        nativeName: "gagana fa'a Samoa"
    },
    sn: {
        name: "Shona",
        nativeName: "chiShona"
    },
    so: {
        name: "Somali",
        nativeName: "Soomaaliga"
    },
    sq: {
        name: "Albanian",
        nativeName: "Shqip"
    },
    sr: {
        name: "Serbian",
        nativeName: "српски језик"
    },
    ss: {
        name: "Swati",
        nativeName: "SiSwati"
    },
    st: {
        name: "Southern Sotho",
        nativeName: "Sesotho"
    },
    su: {
        name: "Sundanese",
        nativeName: "Basa Sunda"
    },
    sv: {
        name: "Swedish",
        nativeName: "Svenska"
    },
    sw: {
        name: "Swahili",
        nativeName: "Kiswahili"
    },
    ta: {
        name: "Tamil",
        nativeName: "தமிழ்"
    },
    te: {
        name: "Telugu",
        nativeName: "తెలుగు"
    },
    tg: {
        name: "Tajik",
        nativeName: "тоҷикӣ"
    },
    th: {
        name: "Thai",
        nativeName: "ไทย"
    },
    ti: {
        name: "Tigrinya",
        nativeName: "ትግርኛ"
    },
    tk: {
        name: "Turkmen",
        nativeName: "Türkmençe"
    },
    tl: {
        name: "Tagalog",
        nativeName: "Wikang Tagalog"
    },
    tn: {
        name: "Tswana",
        nativeName: "Setswana"
    },
    to: {
        name: "Tonga",
        nativeName: "faka Tonga"
    },
    tr: {
        name: "Turkish",
        nativeName: "Türkçe"
    },
    ts: {
        name: "Tsonga",
        nativeName: "Xitsonga"
    },
    tt: {
        name: "Tatar",
        nativeName: "татар теле"
    },
    tw: {
        name: "Twi",
        nativeName: "Twi"
    },
    ty: {
        name: "Tahitian",
        nativeName: "Reo Tahiti"
    },
    ug: {
        name: "Uyghur",
        nativeName: "ئۇيغۇرچە‎"
    },
    uk: {
        name: "Ukrainian",
        nativeName: "Українська"
    },
    ur: {
        name: "Urdu",
        nativeName: "اردو"
    },
    uz: {
        name: "Uzbek",
        nativeName: "Ўзбек"
    },
    ve: {
        name: "Venda",
        nativeName: "Tshivenḓa"
    },
    vi: {
        name: "Vietnamese",
        nativeName: "Tiếng Việt"
    },
    vo: {
        name: "Volapük",
        nativeName: "Volapük"
    },
    wa: {
        name: "Walloon",
        nativeName: "walon"
    },
    wo: {
        name: "Wolof",
        nativeName: "Wollof"
    },
    xh: {
        name: "Xhosa",
        nativeName: "isiXhosa"
    },
    yi: {
        name: "Yiddish",
        nativeName: "ייִדיש"
    },
    yo: {
        name: "Yoruba",
        nativeName: "Yorùbá"
    },
    za: {
        name: "Zhuang",
        nativeName: "Saɯ cueŋƅ"
    },
    zh: {
        name: "Chinese",
        nativeName: "中文"
    },
    zu: {
        name: "Zulu",
        nativeName: "isiZulu"
    }
};
var wI = bI;
const An = wI,
    Wv = {},
    wi = {},
    Gv = [],
    Hv = [],
    Kv = [];
for (const e in An) {
    const {
        name: t,
        nativeName: r
    } = An[e];
    Wv[e] = wi[t.toLowerCase()] = wi[r.toLowerCase()] = {
        code: e,
        name: t,
        nativeName: r
    }, Gv.push(e), Hv.push(t), Kv.push(r)
}
var EI = class ti {
    static getLanguages(t = []) {
        return t.map(r => ti.validate(r) ? Object.assign({}, Wv[r]) : {
            code: r,
            name: "",
            nativeName: ""
        })
    }
    static getName(t) {
        return ti.validate(t) ? An[t].name : ""
    }
    static getAllNames() {
        return Hv.slice()
    }
    static getNativeName(t) {
        return ti.validate(t) ? An[t].nativeName : ""
    }
    static getAllNativeNames() {
        return Kv.slice()
    }
    static getCode(t) {
        return t = t.toLowerCase(), wi.hasOwnProperty(t) ? wi[t].code : ""
    }
    static getAllCodes() {
        return Gv.slice()
    }
    static validate(t) {
        return An.hasOwnProperty(t)
    }
};
const Xv = Re(EI);
var jn = {};
Object.defineProperty(jn, "__esModule", {
    value: !0
});
var fa = jn.unpack = jn.detect = void 0;

function SI(e) {
    return e.replace(" ", "").startsWith("eval(function(p,a,c,k,e,")
}
jn.detect = SI;

function $I(e) {
    let {
        payload: t,
        symtab: r,
        radix: n,
        count: a
    } = o(e);
    if (a != r.length) throw Error("Malformed p.a.c.k.e.r. symtab.");
    let i;
    try {
        i = new AI(n)
    } catch {
        throw Error("Unknown p.a.c.k.e.r. encoding.")
    }

    function s(c) {
        const l = c;
        let f;
        return n == 1 ? f = r[parseInt(l)] : f = r[i.unbase(l)], f || l
    }
    return e = t.replace(/\b\w+\b/g, s), e;

    function o(c) {
        const l = [/}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\), *(\d+), *(.*)\)\)/, /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\)/];
        for (const f of l) {
            const d = f.exec(c);
            if (d) {
                let h = d;
                h[2] == "[]";
                try {
                    return {
                        payload: h[1],
                        symtab: h[4].split("|"),
                        radix: parseInt(h[2]),
                        count: parseInt(h[3])
                    }
                } catch {
                    throw Error("Corrupted p.a.c.k.e.r. data.")
                }
            }
        }
        throw Error("Could not make sense of p.a.c.k.e.r data (unexpected code structure)")
    }

    function u(c) {
        return c
    }
}
fa = jn.unpack = $I;
class AI {
    constructor(t) {
        if (this.ALPHABET = {
                62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                95: "' !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'"
            }, this.dictionary = {}, this.base = t, 36 < t && t < 62 && (this.ALPHABET[t] = this.ALPHABET[t] || this.ALPHABET[62].substr(0, t)), 2 <= t && t <= 36) this.unbase = r => parseInt(r, t);
        else {
            try {
                [...this.ALPHABET[t]].forEach((r, n) => {
                    this.dictionary[r] = n
                })
            } catch {
                throw Error("Unsupported base encoding.")
            }
            this.unbase = this._dictunbaser
        }
    }
    _dictunbaser(t) {
        let r = 0;
        return [...t].reverse().forEach((n, a) => {
            r = r + Math.pow(this.base, a) * this.dictionary[n]
        }), r
    }
}
const dl = {
        xml: !1,
        decodeEntities: !0
    },
    ah = {
        _useHtmlParser2: !0,
        xmlMode: !0
    };

function Wu(e) {
    return e != null && e.xml ? typeof e.xml == "boolean" ? ah : {
        ...ah,
        ...e.xml
    } : e ?? void 0
}
var J;
(function(e) {
    e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
})(J || (J = {}));

function OI(e) {
    return e.type === J.Tag || e.type === J.Script || e.type === J.Style
}
const RI = J.Root,
    _I = J.Text,
    CI = J.Directive,
    NI = J.Comment,
    xI = J.Script,
    TI = J.Style,
    II = J.Tag,
    PI = J.CDATA,
    kI = J.Doctype;
let Yv = class {
    constructor() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
    }
    get parentNode() {
        return this.parent
    }
    set parentNode(t) {
        this.parent = t
    }
    get previousSibling() {
        return this.prev
    }
    set previousSibling(t) {
        this.prev = t
    }
    get nextSibling() {
        return this.next
    }
    set nextSibling(t) {
        this.next = t
    }
    cloneNode(t = !1) {
        return Si(this, t)
    }
};
class hl extends Yv {
    constructor(t) {
        super(), this.data = t
    }
    get nodeValue() {
        return this.data
    }
    set nodeValue(t) {
        this.data = t
    }
}
class Ei extends hl {
    constructor() {
        super(...arguments), this.type = J.Text
    }
    get nodeType() {
        return 3
    }
}
class Jv extends hl {
    constructor() {
        super(...arguments), this.type = J.Comment
    }
    get nodeType() {
        return 8
    }
}
class Qv extends hl {
    constructor(t, r) {
        super(r), this.name = t, this.type = J.Directive
    }
    get nodeType() {
        return 1
    }
}
class pl extends Yv {
    constructor(t) {
        super(), this.children = t
    }
    get firstChild() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null
    }
    get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null
    }
    get childNodes() {
        return this.children
    }
    set childNodes(t) {
        this.children = t
    }
}
class Zv extends pl {
    constructor() {
        super(...arguments), this.type = J.CDATA
    }
    get nodeType() {
        return 4
    }
}
let Un = class extends pl {
        constructor() {
            super(...arguments), this.type = J.Root
        }
        get nodeType() {
            return 9
        }
    },
    ey = class extends pl {
        constructor(t, r, n = [], a = t === "script" ? J.Script : t === "style" ? J.Style : J.Tag) {
            super(n), this.name = t, this.attribs = r, this.type = a
        }
        get nodeType() {
            return 1
        }
        get tagName() {
            return this.name
        }
        set tagName(t) {
            this.name = t
        }
        get attributes() {
            return Object.keys(this.attribs).map(t => {
                var r, n;
                return {
                    name: t,
                    value: this.attribs[t],
                    namespace: (r = this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[t],
                    prefix: (n = this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[t]
                }
            })
        }
    };

function z(e) {
    return OI(e)
}

function _s(e) {
    return e.type === J.CDATA
}

function Yt(e) {
    return e.type === J.Text
}

function ml(e) {
    return e.type === J.Comment
}

function LI(e) {
    return e.type === J.Directive
}

function Kr(e) {
    return e.type === J.Root
}

function ce(e) {
    return Object.prototype.hasOwnProperty.call(e, "children")
}

function Si(e, t = !1) {
    let r;
    if (Yt(e)) r = new Ei(e.data);
    else if (ml(e)) r = new Jv(e.data);
    else if (z(e)) {
        const n = t ? ko(e.children) : [],
            a = new ey(e.name, {
                ...e.attribs
            }, n);
        n.forEach(i => i.parent = a), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = {
            ...e["x-attribsNamespace"]
        }), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = {
            ...e["x-attribsPrefix"]
        }), r = a
    } else if (_s(e)) {
        const n = t ? ko(e.children) : [],
            a = new Zv(n);
        n.forEach(i => i.parent = a), r = a
    } else if (Kr(e)) {
        const n = t ? ko(e.children) : [],
            a = new Un(n);
        n.forEach(i => i.parent = a), e["x-mode"] && (a["x-mode"] = e["x-mode"]), r = a
    } else if (LI(e)) {
        const n = new Qv(e.name, e.data);
        e["x-name"] != null && (n["x-name"] = e["x-name"], n["x-publicId"] = e["x-publicId"], n["x-systemId"] = e["x-systemId"]), r = n
    } else throw new Error(`Not implemented yet: ${e.type}`);
    return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r
}

function ko(e) {
    const t = e.map(r => Si(r, !0));
    for (let r = 1; r < t.length; r++) t[r].prev = t[r - 1], t[r - 1].next = t[r];
    return t
}
const ih = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
};
class NB {
    constructor(t, r, n) {
        this.dom = [], this.root = new Un(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (n = r, r = ih), typeof t == "object" && (r = t, t = void 0), this.callback = t ?? null, this.options = r ?? ih, this.elementCB = n ?? null
    }
    onparserinit(t) {
        this.parser = t
    }
    onreset() {
        this.dom = [], this.root = new Un(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
    }
    onend() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
    }
    onerror(t) {
        this.handleCallback(t)
    }
    onclosetag() {
        this.lastNode = null;
        const t = this.tagStack.pop();
        this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t)
    }
    onopentag(t, r) {
        const n = this.options.xmlMode ? J.Tag : void 0,
            a = new ey(t, r, void 0, n);
        this.addNode(a), this.tagStack.push(a)
    }
    ontext(t) {
        const {
            lastNode: r
        } = this;
        if (r && r.type === J.Text) r.data += t, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
        else {
            const n = new Ei(t);
            this.addNode(n), this.lastNode = n
        }
    }
    oncomment(t) {
        if (this.lastNode && this.lastNode.type === J.Comment) {
            this.lastNode.data += t;
            return
        }
        const r = new Jv(t);
        this.addNode(r), this.lastNode = r
    }
    oncommentend() {
        this.lastNode = null
    }
    oncdatastart() {
        const t = new Ei(""),
            r = new Zv([t]);
        this.addNode(r), t.parent = r, this.lastNode = t
    }
    oncdataend() {
        this.lastNode = null
    }
    onprocessinginstruction(t, r) {
        const n = new Qv(t, r);
        this.addNode(n)
    }
    handleCallback(t) {
        if (typeof this.callback == "function") this.callback(t, this.dom);
        else if (t) throw t
    }
    addNode(t) {
        const r = this.tagStack[this.tagStack.length - 1],
            n = r.children[r.children.length - 1];
        this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), r.children.push(t), n && (t.prev = n, n.next = t), t.parent = r, this.lastNode = null
    }
}
const FI = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(e => [e.toLowerCase(), e])),
    DI = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(e => [e.toLowerCase(), e])),
    jI = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);

function UI(e) {
    return e.replace(/"/g, "&quot;")
}

function MI(e, t) {
    var r;
    if (!e) return;
    const n = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? UI : t.xmlMode || t.encodeEntities !== "utf8" ? $m : Fw;
    return Object.keys(e).map(a => {
        var i, s;
        const o = (i = e[a]) !== null && i !== void 0 ? i : "";
        return t.xmlMode === "foreign" && (a = (s = DI.get(a)) !== null && s !== void 0 ? s : a), !t.emptyAttrs && !t.xmlMode && o === "" ? a : `${a}="${n(o)}"`
    }).join(" ")
}
const sh = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

function Cs(e, t = {}) {
    const r = "length" in e ? e : [e];
    let n = "";
    for (let a = 0; a < r.length; a++) n += BI(r[a], t);
    return n
}

function BI(e, t) {
    switch (e.type) {
        case RI:
            return Cs(e.children, t);
        case kI:
        case CI:
            return WI(e);
        case NI:
            return KI(e);
        case PI:
            return HI(e);
        case xI:
        case TI:
        case II:
            return qI(e, t);
        case _I:
            return GI(e, t)
    }
}
const VI = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
    zI = new Set(["svg", "math"]);

function qI(e, t) {
    var r;
    t.xmlMode === "foreign" && (e.name = (r = FI.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && VI.has(e.parent.name) && (t = {
        ...t,
        xmlMode: !1
    })), !t.xmlMode && zI.has(e.name) && (t = {
        ...t,
        xmlMode: "foreign"
    });
    let n = `<${e.name}`;
    const a = MI(e.attribs, t);
    return a && (n += ` ${a}`), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && sh.has(e.name)) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += Cs(e.children, t)), (t.xmlMode || !sh.has(e.name)) && (n += `</${e.name}>`)), n
}

function WI(e) {
    return `<${e.data}>`
}

function GI(e, t) {
    var r;
    let n = e.data || "";
    return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && jI.has(e.parent.name)) && (n = t.xmlMode || t.encodeEntities !== "utf8" ? $m(n) : Lw(n)), n
}

function HI(e) {
    return `<![CDATA[${e.children[0].data}]]>`
}

function KI(e) {
    return `<!--${e.data}-->`
}

function ty(e, t) {
    return Cs(e, t)
}

function XI(e, t) {
    return ce(e) ? e.children.map(r => ty(r, t)).join("") : ""
}

function ri(e) {
    return Array.isArray(e) ? e.map(ri).join("") : z(e) ? e.name === "br" ? `
` : ri(e.children) : _s(e) ? ri(e.children) : Yt(e) ? e.data : ""
}

function Dr(e) {
    return Array.isArray(e) ? e.map(Dr).join("") : ce(e) && !ml(e) ? Dr(e.children) : Yt(e) ? e.data : ""
}

function $i(e) {
    return Array.isArray(e) ? e.map($i).join("") : ce(e) && (e.type === J.Tag || _s(e)) ? $i(e.children) : Yt(e) ? e.data : ""
}

function Ns(e) {
    return ce(e) ? e.children : []
}

function ry(e) {
    return e.parent || null
}

function ny(e) {
    const t = ry(e);
    if (t != null) return Ns(t);
    const r = [e];
    let {
        prev: n,
        next: a
    } = e;
    for (; n != null;) r.unshift(n), {
        prev: n
    } = n;
    for (; a != null;) r.push(a), {
        next: a
    } = a;
    return r
}

function YI(e, t) {
    var r;
    return (r = e.attribs) === null || r === void 0 ? void 0 : r[t]
}

function JI(e, t) {
    return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null
}

function QI(e) {
    return e.name
}

function gl(e) {
    let {
        next: t
    } = e;
    for (; t !== null && !z(t);)({
        next: t
    } = t);
    return t
}

function vl(e) {
    let {
        prev: t
    } = e;
    for (; t !== null && !z(t);)({
        prev: t
    } = t);
    return t
}

function cr(e) {
    if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
        const t = e.parent.children,
            r = t.lastIndexOf(e);
        r >= 0 && t.splice(r, 1)
    }
    e.next = null, e.prev = null, e.parent = null
}

function ZI(e, t) {
    const r = t.prev = e.prev;
    r && (r.next = t);
    const n = t.next = e.next;
    n && (n.prev = t);
    const a = t.parent = e.parent;
    if (a) {
        const i = a.children;
        i[i.lastIndexOf(e)] = t, e.parent = null
    }
}

function eP(e, t) {
    if (cr(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
        const r = e.children[e.children.length - 2];
        r.next = t, t.prev = r
    } else t.prev = null
}

function tP(e, t) {
    cr(t);
    const {
        parent: r
    } = e, n = e.next;
    if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
        if (n.prev = t, r) {
            const a = r.children;
            a.splice(a.lastIndexOf(n), 0, t)
        }
    } else r && r.children.push(t)
}

function rP(e, t) {
    if (cr(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
        const r = e.children[1];
        r.prev = t, t.next = r
    } else t.next = null
}

function nP(e, t) {
    cr(t);
    const {
        parent: r
    } = e;
    if (r) {
        const n = r.children;
        n.splice(n.indexOf(e), 0, t)
    }
    e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t
}

function xs(e, t, r = !0, n = 1 / 0) {
    return yl(e, Array.isArray(t) ? t : [t], r, n)
}

function yl(e, t, r, n) {
    const a = [],
        i = [t],
        s = [0];
    for (;;) {
        if (s[0] >= i[0].length) {
            if (s.length === 1) return a;
            i.shift(), s.shift();
            continue
        }
        const o = i[0][s[0]++];
        if (e(o) && (a.push(o), --n <= 0)) return a;
        r && ce(o) && o.children.length > 0 && (s.unshift(0), i.unshift(o.children))
    }
}

function aP(e, t) {
    return t.find(e)
}

function bl(e, t, r = !0) {
    let n = null;
    for (let a = 0; a < t.length && !n; a++) {
        const i = t[a];
        if (z(i)) e(i) ? n = i : r && i.children.length > 0 && (n = bl(e, i.children, !0));
        else continue
    }
    return n
}

function ay(e, t) {
    return t.some(r => z(r) && (e(r) || ay(e, r.children)))
}

function iP(e, t) {
    const r = [],
        n = [t],
        a = [0];
    for (;;) {
        if (a[0] >= n[0].length) {
            if (n.length === 1) return r;
            n.shift(), a.shift();
            continue
        }
        const i = n[0][a[0]++];
        z(i) && (e(i) && r.push(i), i.children.length > 0 && (a.unshift(0), n.unshift(i.children)))
    }
}
const Ai = {
    tag_name(e) {
        return typeof e == "function" ? t => z(t) && e(t.name) : e === "*" ? z : t => z(t) && t.name === e
    },
    tag_type(e) {
        return typeof e == "function" ? t => e(t.type) : t => t.type === e
    },
    tag_contains(e) {
        return typeof e == "function" ? t => Yt(t) && e(t.data) : t => Yt(t) && t.data === e
    }
};

function iy(e, t) {
    return typeof t == "function" ? r => z(r) && t(r.attribs[e]) : r => z(r) && r.attribs[e] === t
}

function sP(e, t) {
    return r => e(r) || t(r)
}

function sy(e) {
    const t = Object.keys(e).map(r => {
        const n = e[r];
        return Object.prototype.hasOwnProperty.call(Ai, r) ? Ai[r](n) : iy(r, n)
    });
    return t.length === 0 ? null : t.reduce(sP)
}

function oP(e, t) {
    const r = sy(e);
    return r ? r(t) : !0
}

function uP(e, t, r, n = 1 / 0) {
    const a = sy(e);
    return a ? xs(a, t, r, n) : []
}

function cP(e, t, r = !0) {
    return Array.isArray(t) || (t = [t]), bl(iy("id", e), t, r)
}

function Xr(e, t, r = !0, n = 1 / 0) {
    return xs(Ai.tag_name(e), t, r, n)
}

function lP(e, t, r = !0, n = 1 / 0) {
    return xs(Ai.tag_type(e), t, r, n)
}

function fP(e) {
    let t = e.length;
    for (; --t >= 0;) {
        const r = e[t];
        if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
            e.splice(t, 1);
            continue
        }
        for (let n = r.parent; n; n = n.parent)
            if (e.includes(n)) {
                e.splice(t, 1);
                break
            }
    }
    return e
}
var Le;
(function(e) {
    e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"
})(Le || (Le = {}));

function oy(e, t) {
    const r = [],
        n = [];
    if (e === t) return 0;
    let a = ce(e) ? e : e.parent;
    for (; a;) r.unshift(a), a = a.parent;
    for (a = ce(t) ? t : t.parent; a;) n.unshift(a), a = a.parent;
    const i = Math.min(r.length, n.length);
    let s = 0;
    for (; s < i && r[s] === n[s];) s++;
    if (s === 0) return Le.DISCONNECTED;
    const o = r[s - 1],
        u = o.children,
        c = r[s],
        l = n[s];
    return u.indexOf(c) > u.indexOf(l) ? o === t ? Le.FOLLOWING | Le.CONTAINED_BY : Le.FOLLOWING : o === e ? Le.PRECEDING | Le.CONTAINS : Le.PRECEDING
}

function Yr(e) {
    return e = e.filter((t, r, n) => !n.includes(t, r + 1)), e.sort((t, r) => {
        const n = oy(t, r);
        return n & Le.PRECEDING ? -1 : n & Le.FOLLOWING ? 1 : 0
    }), e
}

function dP(e) {
    const t = Oi(vP, e);
    return t ? t.name === "feed" ? hP(t) : pP(t) : null
}

function hP(e) {
    var t;
    const r = e.children,
        n = {
            type: "atom",
            items: Xr("entry", r).map(s => {
                var o;
                const {
                    children: u
                } = s, c = {
                    media: uy(u)
                };
                Se(c, "id", "id", u), Se(c, "title", "title", u);
                const l = (o = Oi("link", u)) === null || o === void 0 ? void 0 : o.attribs.href;
                l && (c.link = l);
                const f = Rt("summary", u) || Rt("content", u);
                f && (c.description = f);
                const d = Rt("updated", u);
                return d && (c.pubDate = new Date(d)), c
            })
        };
    Se(n, "id", "id", r), Se(n, "title", "title", r);
    const a = (t = Oi("link", r)) === null || t === void 0 ? void 0 : t.attribs.href;
    a && (n.link = a), Se(n, "description", "subtitle", r);
    const i = Rt("updated", r);
    return i && (n.updated = new Date(i)), Se(n, "author", "email", r, !0), n
}

function pP(e) {
    var t, r;
    const n = (r = (t = Oi("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [],
        a = {
            type: e.name.substr(0, 3),
            id: "",
            items: Xr("item", e.children).map(s => {
                const {
                    children: o
                } = s, u = {
                    media: uy(o)
                };
                Se(u, "id", "guid", o), Se(u, "title", "title", o), Se(u, "link", "link", o), Se(u, "description", "description", o);
                const c = Rt("pubDate", o) || Rt("dc:date", o);
                return c && (u.pubDate = new Date(c)), u
            })
        };
    Se(a, "title", "title", n), Se(a, "link", "link", n), Se(a, "description", "description", n);
    const i = Rt("lastBuildDate", n);
    return i && (a.updated = new Date(i)), Se(a, "author", "managingEditor", n, !0), a
}
const mP = ["url", "type", "lang"],
    gP = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

function uy(e) {
    return Xr("media:content", e).map(t => {
        const {
            attribs: r
        } = t, n = {
            medium: r.medium,
            isDefault: !!r.isDefault
        };
        for (const a of mP) r[a] && (n[a] = r[a]);
        for (const a of gP) r[a] && (n[a] = parseInt(r[a], 10));
        return r.expression && (n.expression = r.expression), n
    })
}

function Oi(e, t) {
    return Xr(e, t, !0, 1)[0]
}

function Rt(e, t, r = !1) {
    return Dr(Xr(e, t, r, 1)).trim()
}

function Se(e, t, r, n, a = !1) {
    const i = Rt(r, n, a);
    i && (e[t] = i)
}

function vP(e) {
    return e === "rss" || e === "feed" || e === "rdf:RDF"
}
const Ts = Object.freeze(Object.defineProperty({
    __proto__: null,
    get DocumentPosition() {
        return Le
    },
    append: tP,
    appendChild: eP,
    compareDocumentPosition: oy,
    existsOne: ay,
    filter: xs,
    find: yl,
    findAll: iP,
    findOne: bl,
    findOneChild: aP,
    getAttributeValue: YI,
    getChildren: Ns,
    getElementById: cP,
    getElements: uP,
    getElementsByTagName: Xr,
    getElementsByTagType: lP,
    getFeed: dP,
    getInnerHTML: XI,
    getName: QI,
    getOuterHTML: ty,
    getParent: ry,
    getSiblings: ny,
    getText: ri,
    hasAttrib: JI,
    hasChildren: ce,
    innerText: $i,
    isCDATA: _s,
    isComment: ml,
    isDocument: Kr,
    isTag: z,
    isText: Yt,
    nextElementSibling: gl,
    prepend: nP,
    prependChild: rP,
    prevElementSibling: vl,
    removeElement: cr,
    removeSubsets: fP,
    replaceElement: ZI,
    testElement: oP,
    textContent: Dr,
    uniqueSort: Yr
}, Symbol.toStringTag, {
    value: "Module"
}));

function cy(e, t, r) {
    return e ? e(t ?? e._root.children, null, void 0, r).toString() : ""
}

function yP(e, t) {
    return !t && typeof e == "object" && e != null && !("length" in e) && !("type" in e)
}

function bP(e, t) {
    const r = yP(e) ? (t = e, void 0) : e,
        n = {
            ...dl,
            ...this === null || this === void 0 ? void 0 : this._options,
            ...Wu(t ?? {})
        };
    return cy(this, r, n)
}

function wP(e) {
    const t = {
        ...this._options,
        xmlMode: !0
    };
    return cy(this, e, t)
}

function Mn(e) {
    const t = e || (this ? this.root() : []);
    let r = "";
    for (let n = 0; n < t.length; n++) r += Dr(t[n]);
    return r
}

function EP(e, t, r = typeof t == "boolean" ? t : !1) {
    if (!e || typeof e != "string") return null;
    typeof t == "boolean" && (r = t);
    const n = this.load(e, dl, !1);
    return r || n("script").remove(), n.root()[0].children.slice()
}

function SP() {
    return this(this._root)
}

function ly(e, t) {
    if (t === e) return !1;
    let r = t;
    for (; r && r !== r.parent;)
        if (r = r.parent, r === e) return !0;
    return !1
}

function $P(e, t) {
    if (!oh(e) || !oh(t)) return;
    let r = e.length;
    const n = +t.length;
    for (let a = 0; a < n; a++) e[r++] = t[a];
    return e.length = r, e
}

function oh(e) {
    if (Array.isArray(e)) return !0;
    if (typeof e != "object" || !Object.prototype.hasOwnProperty.call(e, "length") || typeof e.length != "number" || e.length < 0) return !1;
    for (let t = 0; t < e.length; t++)
        if (!(t in e)) return !1;
    return !0
}
const AP = Object.freeze(Object.defineProperty({
    __proto__: null,
    contains: ly,
    html: bP,
    merge: $P,
    parseHTML: EP,
    root: SP,
    text: Mn,
    xml: wP
}, Symbol.toStringTag, {
    value: "Module"
}));

function tt(e) {
    return e.cheerio != null
}

function OP(e) {
    return e.replace(/[_.-](\w|$)/g, (t, r) => r.toUpperCase())
}

function RP(e) {
    return e.replace(/[A-Z]/g, "-$&").toLowerCase()
}

function re(e, t) {
    const r = e.length;
    for (let n = 0; n < r; n++) t(e[n], n);
    return e
}

function Gu(e) {
    const t = "length" in e ? Array.prototype.map.call(e, n => Si(n, !0)) : [Si(e, !0)],
        r = new Un(t);
    return t.forEach(n => {
        n.parent = r
    }), t
}
var Vt;
(function(e) {
    e[e.LowerA = 97] = "LowerA", e[e.LowerZ = 122] = "LowerZ", e[e.UpperA = 65] = "UpperA", e[e.UpperZ = 90] = "UpperZ", e[e.Exclamation = 33] = "Exclamation"
})(Vt || (Vt = {}));

function Hu(e) {
    const t = e.indexOf("<");
    if (t < 0 || t > e.length - 3) return !1;
    const r = e.charCodeAt(t + 1);
    return (r >= Vt.LowerA && r <= Vt.LowerZ || r >= Vt.UpperA && r <= Vt.UpperZ || r === Vt.Exclamation) && e.includes(">", t + 2)
}
const Rr = Object.prototype.hasOwnProperty,
    Bn = /\s+/,
    Lo = "data-",
    uh = {
        null: null,
        true: !0,
        false: !1
    },
    wl = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    _P = /^{[^]*}$|^\[[^]*]$/;

function Ri(e, t, r) {
    var n;
    if (!(!e || !z(e))) {
        if ((n = e.attribs) !== null && n !== void 0 || (e.attribs = {}), !t) return e.attribs;
        if (Rr.call(e.attribs, t)) return !r && wl.test(t) ? t : e.attribs[t];
        if (e.name === "option" && t === "value") return Mn(e.children);
        if (e.name === "input" && (e.attribs.type === "radio" || e.attribs.type === "checkbox") && t === "value") return "on"
    }
}

function _r(e, t, r) {
    r === null ? fy(e, t) : e.attribs[t] = `${r}`
}

function CP(e, t) {
    if (typeof e == "object" || t !== void 0) {
        if (typeof t == "function") {
            if (typeof e != "string") throw new Error("Bad combination of arguments.");
            return re(this, (r, n) => {
                z(r) && _r(r, e, t.call(r, n, r.attribs[e]))
            })
        }
        return re(this, r => {
            z(r) && (typeof e == "object" ? Object.keys(e).forEach(n => {
                const a = e[n];
                _r(r, n, a)
            }) : _r(r, e, t))
        })
    }
    return arguments.length > 1 ? this : Ri(this[0], e, this.options.xmlMode)
}

function ch(e, t, r) {
    return t in e ? e[t] : !r && wl.test(t) ? Ri(e, t, !1) !== void 0 : Ri(e, t, r)
}

function Fo(e, t, r, n) {
    t in e ? e[t] = r : _r(e, t, !n && wl.test(t) ? r ? "" : null : `${r}`)
}

function NP(e, t) {
    var r;
    if (typeof e == "string" && t === void 0) {
        const n = this[0];
        if (!n || !z(n)) return;
        switch (e) {
            case "style": {
                const a = this.css(),
                    i = Object.keys(a);
                return i.forEach((s, o) => {
                    a[o] = s
                }), a.length = i.length, a
            }
            case "tagName":
            case "nodeName":
                return n.name.toUpperCase();
            case "href":
            case "src": {
                const a = (r = n.attribs) === null || r === void 0 ? void 0 : r[e];
                return typeof URL < "u" && (e === "href" && (n.tagName === "a" || n.name === "link") || e === "src" && (n.tagName === "img" || n.tagName === "iframe" || n.tagName === "audio" || n.tagName === "video" || n.tagName === "source")) && a !== void 0 && this.options.baseURI ? new URL(a, this.options.baseURI).href : a
            }
            case "innerText":
                return $i(n);
            case "textContent":
                return Dr(n);
            case "outerHTML":
                return this.clone().wrap("<container />").parent().html();
            case "innerHTML":
                return this.html();
            default:
                return ch(n, e, this.options.xmlMode)
        }
    }
    if (typeof e == "object" || t !== void 0) {
        if (typeof t == "function") {
            if (typeof e == "object") throw new Error("Bad combination of arguments.");
            return re(this, (n, a) => {
                z(n) && Fo(n, e, t.call(n, a, ch(n, e, this.options.xmlMode)), this.options.xmlMode)
            })
        }
        return re(this, n => {
            z(n) && (typeof e == "object" ? Object.keys(e).forEach(a => {
                const i = e[a];
                Fo(n, a, i, this.options.xmlMode)
            }) : Fo(n, e, t, this.options.xmlMode))
        })
    }
}

function lh(e, t, r) {
    var n;
    const a = e;
    (n = a.data) !== null && n !== void 0 || (a.data = {}), typeof t == "object" ? Object.assign(a.data, t) : typeof t == "string" && r !== void 0 && (a.data[t] = r)
}

function fh(e, t) {
    let r, n, a;
    t == null ? (r = Object.keys(e.attribs).filter(i => i.startsWith(Lo)), n = r.map(i => OP(i.slice(Lo.length)))) : (r = [Lo + RP(t)], n = [t]);
    for (let i = 0; i < r.length; ++i) {
        const s = r[i],
            o = n[i];
        if (Rr.call(e.attribs, s) && !Rr.call(e.data, o)) {
            if (a = e.attribs[s], Rr.call(uh, a)) a = uh[a];
            else if (a === String(Number(a))) a = Number(a);
            else if (_P.test(a)) try {
                a = JSON.parse(a)
            } catch {}
            e.data[o] = a
        }
    }
    return t == null ? e.data : a
}

function xP(e, t) {
    var r;
    const n = this[0];
    if (!n || !z(n)) return;
    const a = n;
    return (r = a.data) !== null && r !== void 0 || (a.data = {}), e ? typeof e == "object" || t !== void 0 ? (re(this, i => {
        z(i) && (typeof e == "object" ? lh(i, e) : lh(i, e, t))
    }), this) : Rr.call(a.data, e) ? a.data[e] : fh(a, e) : fh(a)
}

function TP(e) {
    const t = arguments.length === 0,
        r = this[0];
    if (!r || !z(r)) return t ? void 0 : this;
    switch (r.name) {
        case "textarea":
            return this.text(e);
        case "select": {
            const n = this.find("option:selected");
            if (!t) {
                if (this.attr("multiple") == null && typeof e == "object") return this;
                this.find("option").removeAttr("selected");
                const a = typeof e != "object" ? [e] : e;
                for (let i = 0; i < a.length; i++) this.find(`option[value="${a[i]}"]`).attr("selected", "");
                return this
            }
            return this.attr("multiple") ? n.toArray().map(a => Mn(a.children)) : n.attr("value")
        }
        case "input":
        case "option":
            return t ? this.attr("value") : this.attr("value", e)
    }
}

function fy(e, t) {
    !e.attribs || !Rr.call(e.attribs, t) || delete e.attribs[t]
}

function _i(e) {
    return e ? e.trim().split(Bn) : []
}

function IP(e) {
    const t = _i(e);
    for (let r = 0; r < t.length; r++) re(this, n => {
        z(n) && fy(n, t[r])
    });
    return this
}

function PP(e) {
    return this.toArray().some(t => {
        const r = z(t) && t.attribs.class;
        let n = -1;
        if (r && e.length)
            for (;
                (n = r.indexOf(e, n + 1)) > -1;) {
                const a = n + e.length;
                if ((n === 0 || Bn.test(r[n - 1])) && (a === r.length || Bn.test(r[a]))) return !0
            }
        return !1
    })
}

function dy(e) {
    if (typeof e == "function") return re(this, (n, a) => {
        if (z(n)) {
            const i = n.attribs.class || "";
            dy.call([n], e.call(n, a, i))
        }
    });
    if (!e || typeof e != "string") return this;
    const t = e.split(Bn),
        r = this.length;
    for (let n = 0; n < r; n++) {
        const a = this[n];
        if (!z(a)) continue;
        const i = Ri(a, "class", !1);
        if (!i) _r(a, "class", t.join(" ").trim());
        else {
            let s = ` ${i} `;
            for (let o = 0; o < t.length; o++) {
                const u = `${t[o]} `;
                s.includes(` ${u}`) || (s += u)
            }
            _r(a, "class", s.trim())
        }
    }
    return this
}

function hy(e) {
    if (typeof e == "function") return re(this, (a, i) => {
        z(a) && hy.call([a], e.call(a, i, a.attribs.class || ""))
    });
    const t = _i(e),
        r = t.length,
        n = arguments.length === 0;
    return re(this, a => {
        if (z(a))
            if (n) a.attribs.class = "";
            else {
                const i = _i(a.attribs.class);
                let s = !1;
                for (let o = 0; o < r; o++) {
                    const u = i.indexOf(t[o]);
                    u >= 0 && (i.splice(u, 1), s = !0, o--)
                }
                s && (a.attribs.class = i.join(" "))
            }
    })
}

function py(e, t) {
    if (typeof e == "function") return re(this, (s, o) => {
        z(s) && py.call([s], e.call(s, o, s.attribs.class || "", t), t)
    });
    if (!e || typeof e != "string") return this;
    const r = e.split(Bn),
        n = r.length,
        a = typeof t == "boolean" ? t ? 1 : -1 : 0,
        i = this.length;
    for (let s = 0; s < i; s++) {
        const o = this[s];
        if (!z(o)) continue;
        const u = _i(o.attribs.class);
        for (let c = 0; c < n; c++) {
            const l = u.indexOf(r[c]);
            a >= 0 && l < 0 ? u.push(r[c]) : a <= 0 && l >= 0 && u.splice(l, 1)
        }
        o.attribs.class = u.join(" ")
    }
    return this
}
const kP = Object.freeze(Object.defineProperty({
    __proto__: null,
    addClass: dy,
    attr: CP,
    data: xP,
    hasClass: PP,
    prop: NP,
    removeAttr: IP,
    removeClass: hy,
    toggleClass: py,
    val: TP
}, Symbol.toStringTag, {
    value: "Module"
}));
var U;
(function(e) {
    e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
})(U || (U = {}));
var se;
(function(e) {
    e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
})(se || (se = {}));
const dh = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
    LP = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    FP = new Map([
        [126, se.Element],
        [94, se.Start],
        [36, se.End],
        [42, se.Any],
        [33, se.Not],
        [124, se.Hyphen]
    ]),
    DP = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);

function On(e) {
    switch (e.type) {
        case U.Adjacent:
        case U.Child:
        case U.Descendant:
        case U.Parent:
        case U.Sibling:
        case U.ColumnCombinator:
            return !0;
        default:
            return !1
    }
}
const jP = new Set(["contains", "icontains"]);

function UP(e, t, r) {
    const n = parseInt(t, 16) - 65536;
    return n !== n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
}

function on(e) {
    return e.replace(LP, UP)
}

function Do(e) {
    return e === 39 || e === 34
}

function hh(e) {
    return e === 32 || e === 9 || e === 10 || e === 12 || e === 13
}

function Is(e) {
    const t = [],
        r = my(t, `${e}`, 0);
    if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
    return t
}

function my(e, t, r) {
    let n = [];

    function a(d) {
        const h = t.slice(r + d).match(dh);
        if (!h) throw new Error(`Expected name, found ${t.slice(r)}`);
        const [p] = h;
        return r += d + p.length, on(p)
    }

    function i(d) {
        for (r += d; r < t.length && hh(t.charCodeAt(r));) r++
    }

    function s() {
        r += 1;
        const d = r;
        let h = 1;
        for (; h > 0 && r < t.length; r++) t.charCodeAt(r) === 40 && !o(r) ? h++ : t.charCodeAt(r) === 41 && !o(r) && h--;
        if (h) throw new Error("Parenthesis not matched");
        return on(t.slice(d, r - 1))
    }

    function o(d) {
        let h = 0;
        for (; t.charCodeAt(--d) === 92;) h++;
        return (h & 1) === 1
    }

    function u() {
        if (n.length > 0 && On(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
    }

    function c(d) {
        if (n.length > 0 && n[n.length - 1].type === U.Descendant) {
            n[n.length - 1].type = d;
            return
        }
        u(), n.push({
            type: d
        })
    }

    function l(d, h) {
        n.push({
            type: U.Attribute,
            name: d,
            action: h,
            value: a(1),
            namespace: null,
            ignoreCase: "quirks"
        })
    }

    function f() {
        if (n.length && n[n.length - 1].type === U.Descendant && n.pop(), n.length === 0) throw new Error("Empty sub-selector");
        e.push(n)
    }
    if (i(0), t.length === r) return r;
    e: for (; r < t.length;) {
        const d = t.charCodeAt(r);
        switch (d) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13: {
                (n.length === 0 || n[0].type !== U.Descendant) && (u(), n.push({
                    type: U.Descendant
                })), i(1);
                break
            }
            case 62: {
                c(U.Child), i(1);
                break
            }
            case 60: {
                c(U.Parent), i(1);
                break
            }
            case 126: {
                c(U.Sibling), i(1);
                break
            }
            case 43: {
                c(U.Adjacent), i(1);
                break
            }
            case 46: {
                l("class", se.Element);
                break
            }
            case 35: {
                l("id", se.Equals);
                break
            }
            case 91: {
                i(1);
                let h, p = null;
                t.charCodeAt(r) === 124 ? h = a(1) : t.startsWith("*|", r) ? (p = "*", h = a(2)) : (h = a(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (p = h, h = a(1))), i(0);
                let v = se.Exists;
                const y = FP.get(t.charCodeAt(r));
                if (y) {
                    if (v = y, t.charCodeAt(r + 1) !== 61) throw new Error("Expected `=`");
                    i(2)
                } else t.charCodeAt(r) === 61 && (v = se.Equals, i(1));
                let A = "",
                    m = null;
                if (v !== "exists") {
                    if (Do(t.charCodeAt(r))) {
                        const x = t.charCodeAt(r);
                        let j = r + 1;
                        for (; j < t.length && (t.charCodeAt(j) !== x || o(j));) j += 1;
                        if (t.charCodeAt(j) !== x) throw new Error("Attribute value didn't end");
                        A = on(t.slice(r + 1, j)), r = j + 1
                    } else {
                        const x = r;
                        for (; r < t.length && (!hh(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || o(r));) r += 1;
                        A = on(t.slice(x, r))
                    }
                    i(0);
                    const N = t.charCodeAt(r) | 32;
                    N === 115 ? (m = !1, i(1)) : N === 105 && (m = !0, i(1))
                }
                if (t.charCodeAt(r) !== 93) throw new Error("Attribute selector didn't terminate");
                r += 1;
                const R = {
                    type: U.Attribute,
                    name: h,
                    action: v,
                    value: A,
                    namespace: p,
                    ignoreCase: m
                };
                n.push(R);
                break
            }
            case 58: {
                if (t.charCodeAt(r + 1) === 58) {
                    n.push({
                        type: U.PseudoElement,
                        name: a(2).toLowerCase(),
                        data: t.charCodeAt(r) === 40 ? s() : null
                    });
                    continue
                }
                const h = a(1).toLowerCase();
                let p = null;
                if (t.charCodeAt(r) === 40)
                    if (DP.has(h)) {
                        if (Do(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${h} cannot be quoted`);
                        if (p = [], r = my(p, t, r + 1), t.charCodeAt(r) !== 41) throw new Error(`Missing closing parenthesis in :${h} (${t})`);
                        r += 1
                    } else {
                        if (p = s(), jP.has(h)) {
                            const v = p.charCodeAt(0);
                            v === p.charCodeAt(p.length - 1) && Do(v) && (p = p.slice(1, -1))
                        }
                        p = on(p)
                    } n.push({
                    type: U.Pseudo,
                    name: h,
                    data: p
                });
                break
            }
            case 44: {
                f(), n = [], i(1);
                break
            }
            default: {
                if (t.startsWith("/*", r)) {
                    const v = t.indexOf("*/", r + 2);
                    if (v < 0) throw new Error("Comment was not terminated");
                    r = v + 2, n.length === 0 && i(0);
                    break
                }
                let h = null,
                    p;
                if (d === 42) r += 1, p = "*";
                else if (d === 124) {
                    if (p = "", t.charCodeAt(r + 1) === 124) {
                        c(U.ColumnCombinator), i(2);
                        break
                    }
                } else if (dh.test(t.slice(r))) p = a(0);
                else break e;
                t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (h = p, t.charCodeAt(r + 1) === 42 ? (p = "*", r += 2) : p = a(1)), n.push(p === "*" ? {
                    type: U.Universal,
                    namespace: h
                } : {
                    type: U.Tag,
                    name: p,
                    namespace: h
                })
            }
        }
    }
    return f(), r
}
var Ci = {
    trueFunc: function() {
        return !0
    },
    falseFunc: function() {
        return !1
    }
};
const K = Re(Ci),
    gy = new Map([
        [U.Universal, 50],
        [U.Tag, 30],
        [U.Attribute, 1],
        [U.Pseudo, 0]
    ]);

function El(e) {
    return !gy.has(e.type)
}
const MP = new Map([
    [se.Exists, 10],
    [se.Equals, 8],
    [se.Not, 7],
    [se.Start, 6],
    [se.End, 6],
    [se.Any, 5]
]);

function BP(e) {
    const t = e.map(vy);
    for (let r = 1; r < e.length; r++) {
        const n = t[r];
        if (!(n < 0))
            for (let a = r - 1; a >= 0 && n < t[a]; a--) {
                const i = e[a + 1];
                e[a + 1] = e[a], e[a] = i, t[a + 1] = t[a], t[a] = n
            }
    }
}

function vy(e) {
    var t, r;
    let n = (t = gy.get(e.type)) !== null && t !== void 0 ? t : -1;
    return e.type === U.Attribute ? (n = (r = MP.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === se.Equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === U.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? n = 0 : Array.isArray(e.data) ? (n = Math.min(...e.data.map(a => Math.min(...a.map(vy)))), n < 0 && (n = 0)) : n = 2 : n = 3), n
}
const VP = /[-[\]{}()*+?.,\\^$|#\s]/g;

function ph(e) {
    return e.replace(VP, "\\$&")
}
const zP = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);

function jt(e, t) {
    return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && zP.has(e.name)
}
const qP = {
        equals(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            return jt(t, r) ? (i = i.toLowerCase(), s => {
                const o = n.getAttributeValue(s, a);
                return o != null && o.length === i.length && o.toLowerCase() === i && e(s)
            }) : s => n.getAttributeValue(s, a) === i && e(s)
        },
        hyphen(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = i.length;
            return jt(t, r) ? (i = i.toLowerCase(), function(u) {
                const c = n.getAttributeValue(u, a);
                return c != null && (c.length === s || c.charAt(s) === "-") && c.substr(0, s).toLowerCase() === i && e(u)
            }) : function(u) {
                const c = n.getAttributeValue(u, a);
                return c != null && (c.length === s || c.charAt(s) === "-") && c.substr(0, s) === i && e(u)
            }
        },
        element(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a,
                value: i
            } = t;
            if (/\s/.test(i)) return K.falseFunc;
            const s = new RegExp(`(?:^|\\s)${ph(i)}(?:$|\\s)`, jt(t, r) ? "i" : "");
            return function(u) {
                const c = n.getAttributeValue(u, a);
                return c != null && c.length >= i.length && s.test(c) && e(u)
            }
        },
        exists(e, {
            name: t
        }, {
            adapter: r
        }) {
            return n => r.hasAttrib(n, t) && e(n)
        },
        start(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = i.length;
            return s === 0 ? K.falseFunc : jt(t, r) ? (i = i.toLowerCase(), o => {
                const u = n.getAttributeValue(o, a);
                return u != null && u.length >= s && u.substr(0, s).toLowerCase() === i && e(o)
            }) : o => {
                var u;
                return !!(!((u = n.getAttributeValue(o, a)) === null || u === void 0) && u.startsWith(i)) && e(o)
            }
        },
        end(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            const s = -i.length;
            return s === 0 ? K.falseFunc : jt(t, r) ? (i = i.toLowerCase(), o => {
                var u;
                return ((u = n.getAttributeValue(o, a)) === null || u === void 0 ? void 0 : u.substr(s).toLowerCase()) === i && e(o)
            }) : o => {
                var u;
                return !!(!((u = n.getAttributeValue(o, a)) === null || u === void 0) && u.endsWith(i)) && e(o)
            }
        },
        any(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a,
                value: i
            } = t;
            if (i === "") return K.falseFunc;
            if (jt(t, r)) {
                const s = new RegExp(ph(i), "i");
                return function(u) {
                    const c = n.getAttributeValue(u, a);
                    return c != null && c.length >= i.length && s.test(c) && e(u)
                }
            }
            return s => {
                var o;
                return !!(!((o = n.getAttributeValue(s, a)) === null || o === void 0) && o.includes(i)) && e(s)
            }
        },
        not(e, t, r) {
            const {
                adapter: n
            } = r, {
                name: a
            } = t;
            let {
                value: i
            } = t;
            return i === "" ? s => !!n.getAttributeValue(s, a) && e(s) : jt(t, r) ? (i = i.toLowerCase(), s => {
                const o = n.getAttributeValue(s, a);
                return (o == null || o.length !== i.length || o.toLowerCase() !== i) && e(s)
            }) : s => n.getAttributeValue(s, a) !== i && e(s)
        }
    },
    WP = new Set([9, 10, 12, 13, 32]),
    mh = 48,
    GP = 57;

function HP(e) {
    if (e = e.trim().toLowerCase(), e === "even") return [2, 0];
    if (e === "odd") return [2, 1];
    let t = 0,
        r = 0,
        n = i(),
        a = s();
    if (t < e.length && e.charAt(t) === "n" && (t++, r = n * (a ?? 1), o(), t < e.length ? (n = i(), o(), a = s()) : n = a = 0), a === null || t < e.length) throw new Error(`n-th rule couldn't be parsed ('${e}')`);
    return [r, n * a];

    function i() {
        return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1)
    }

    function s() {
        const u = t;
        let c = 0;
        for (; t < e.length && e.charCodeAt(t) >= mh && e.charCodeAt(t) <= GP;) c = c * 10 + (e.charCodeAt(t) - mh), t++;
        return t === u ? null : c
    }

    function o() {
        for (; t < e.length && WP.has(e.charCodeAt(t));) t++
    }
}

function KP(e) {
    const t = e[0],
        r = e[1] - 1;
    if (r < 0 && t <= 0) return K.falseFunc;
    if (t === -1) return i => i <= r;
    if (t === 0) return i => i === r;
    if (t === 1) return r < 0 ? K.trueFunc : i => i >= r;
    const n = Math.abs(t),
        a = (r % n + n) % n;
    return t > 1 ? i => i >= r && i % n === a : i => i <= r && i % n === a
}

function Ta(e) {
    return KP(HP(e))
}

function Ia(e, t) {
    return r => {
        const n = t.getParent(r);
        return n != null && t.isTag(n) && e(r)
    }
}
const Ku = {
    contains(e, t, {
        adapter: r
    }) {
        return function(a) {
            return e(a) && r.getText(a).includes(t)
        }
    },
    icontains(e, t, {
        adapter: r
    }) {
        const n = t.toLowerCase();
        return function(i) {
            return e(i) && r.getText(i).toLowerCase().includes(n)
        }
    },
    "nth-child"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = Ta(t);
        return a === K.falseFunc ? K.falseFunc : a === K.trueFunc ? Ia(e, r) : function(s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = 0; c < o.length && !n(s, o[c]); c++) r.isTag(o[c]) && u++;
            return a(u) && e(s)
        }
    },
    "nth-last-child"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = Ta(t);
        return a === K.falseFunc ? K.falseFunc : a === K.trueFunc ? Ia(e, r) : function(s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = o.length - 1; c >= 0 && !n(s, o[c]); c--) r.isTag(o[c]) && u++;
            return a(u) && e(s)
        }
    },
    "nth-of-type"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = Ta(t);
        return a === K.falseFunc ? K.falseFunc : a === K.trueFunc ? Ia(e, r) : function(s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = 0; c < o.length; c++) {
                const l = o[c];
                if (n(s, l)) break;
                r.isTag(l) && r.getName(l) === r.getName(s) && u++
            }
            return a(u) && e(s)
        }
    },
    "nth-last-of-type"(e, t, {
        adapter: r,
        equals: n
    }) {
        const a = Ta(t);
        return a === K.falseFunc ? K.falseFunc : a === K.trueFunc ? Ia(e, r) : function(s) {
            const o = r.getSiblings(s);
            let u = 0;
            for (let c = o.length - 1; c >= 0; c--) {
                const l = o[c];
                if (n(s, l)) break;
                r.isTag(l) && r.getName(l) === r.getName(s) && u++
            }
            return a(u) && e(s)
        }
    },
    root(e, t, {
        adapter: r
    }) {
        return n => {
            const a = r.getParent(n);
            return (a == null || !r.isTag(a)) && e(n)
        }
    },
    scope(e, t, r, n) {
        const {
            equals: a
        } = r;
        return !n || n.length === 0 ? Ku.root(e, t, r) : n.length === 1 ? i => a(n[0], i) && e(i) : i => n.includes(i) && e(i)
    },
    hover: jo("isHovered"),
    visited: jo("isVisited"),
    active: jo("isActive")
};

function jo(e) {
    return function(r, n, {
        adapter: a
    }) {
        const i = a[e];
        return typeof i != "function" ? K.falseFunc : function(o) {
            return i(o) && r(o)
        }
    }
}
const gh = {
    empty(e, {
        adapter: t
    }) {
        return !t.getChildren(e).some(r => t.isTag(r) || t.getText(r) !== "")
    },
    "first-child"(e, {
        adapter: t,
        equals: r
    }) {
        if (t.prevElementSibling) return t.prevElementSibling(e) == null;
        const n = t.getSiblings(e).find(a => t.isTag(a));
        return n != null && r(e, n)
    },
    "last-child"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e);
        for (let a = n.length - 1; a >= 0; a--) {
            if (r(e, n[a])) return !0;
            if (t.isTag(n[a])) break
        }
        return !1
    },
    "first-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e),
            a = t.getName(e);
        for (let i = 0; i < n.length; i++) {
            const s = n[i];
            if (r(e, s)) return !0;
            if (t.isTag(s) && t.getName(s) === a) break
        }
        return !1
    },
    "last-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getSiblings(e),
            a = t.getName(e);
        for (let i = n.length - 1; i >= 0; i--) {
            const s = n[i];
            if (r(e, s)) return !0;
            if (t.isTag(s) && t.getName(s) === a) break
        }
        return !1
    },
    "only-of-type"(e, {
        adapter: t,
        equals: r
    }) {
        const n = t.getName(e);
        return t.getSiblings(e).every(a => r(e, a) || !t.isTag(a) || t.getName(a) !== n)
    },
    "only-child"(e, {
        adapter: t,
        equals: r
    }) {
        return t.getSiblings(e).every(n => r(e, n) || !t.isTag(n))
    }
};

function vh(e, t, r, n) {
    if (r === null) {
        if (e.length > n) throw new Error(`Pseudo-class :${t} requires an argument`)
    } else if (e.length === n) throw new Error(`Pseudo-class :${t} doesn't have any arguments`)
}
const XP = {
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
    },
    yy = {};

function YP(e, t) {
    return e === K.falseFunc ? K.falseFunc : r => t.isTag(r) && e(r)
}

function by(e, t) {
    const r = t.getSiblings(e);
    if (r.length <= 1) return [];
    const n = r.indexOf(e);
    return n < 0 || n === r.length - 1 ? [] : r.slice(n + 1).filter(t.isTag)
}

function Xu(e) {
    return {
        xmlMode: !!e.xmlMode,
        lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
        lowerCaseTags: !!e.lowerCaseTags,
        quirksMode: !!e.quirksMode,
        cacheResults: !!e.cacheResults,
        pseudos: e.pseudos,
        adapter: e.adapter,
        equals: e.equals
    }
}
const Uo = (e, t, r, n, a) => {
        const i = a(t, Xu(r), n);
        return i === K.trueFunc ? e : i === K.falseFunc ? K.falseFunc : s => i(s) && e(s)
    },
    Mo = {
        is: Uo,
        matches: Uo,
        where: Uo,
        not(e, t, r, n, a) {
            const i = a(t, Xu(r), n);
            return i === K.falseFunc ? e : i === K.trueFunc ? K.falseFunc : s => !i(s) && e(s)
        },
        has(e, t, r, n, a) {
            const {
                adapter: i
            } = r, s = Xu(r);
            s.relativeSelector = !0;
            const o = t.some(l => l.some(El)) ? [yy] : void 0,
                u = a(t, s, o);
            if (u === K.falseFunc) return K.falseFunc;
            const c = YP(u, i);
            if (o && u !== K.trueFunc) {
                const {
                    shouldTestNextSiblings: l = !1
                } = u;
                return f => {
                    if (!e(f)) return !1;
                    o[0] = f;
                    const d = i.getChildren(f),
                        h = l ? [...d, ...by(f, i)] : d;
                    return i.existsOne(c, h)
                }
            }
            return l => e(l) && i.existsOne(c, i.getChildren(l))
        }
    };

function JP(e, t, r, n, a) {
    var i;
    const {
        name: s,
        data: o
    } = t;
    if (Array.isArray(o)) {
        if (!(s in Mo)) throw new Error(`Unknown pseudo-class :${s}(${o})`);
        return Mo[s](e, o, r, n, a)
    }
    const u = (i = r.pseudos) === null || i === void 0 ? void 0 : i[s],
        c = typeof u == "string" ? u : XP[s];
    if (typeof c == "string") {
        if (o != null) throw new Error(`Pseudo ${s} doesn't have any arguments`);
        const l = Is(c);
        return Mo.is(e, l, r, n, a)
    }
    if (typeof u == "function") return vh(u, s, o, 1), l => u(l, o) && e(l);
    if (s in Ku) return Ku[s](e, o, r, n);
    if (s in gh) {
        const l = gh[s];
        return vh(l, s, o, 2), f => l(f, r, o) && e(f)
    }
    throw new Error(`Unknown pseudo-class :${s}`)
}

function Bo(e, t) {
    const r = t.getParent(e);
    return r && t.isTag(r) ? r : null
}

function QP(e, t, r, n, a) {
    const {
        adapter: i,
        equals: s
    } = r;
    switch (t.type) {
        case U.PseudoElement:
            throw new Error("Pseudo-elements are not supported by css-select");
        case U.ColumnCombinator:
            throw new Error("Column combinators are not yet supported by css-select");
        case U.Attribute: {
            if (t.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
            return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), qP[t.action](e, t, r)
        }
        case U.Pseudo:
            return JP(e, t, r, n, a);
        case U.Tag: {
            if (t.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
            let {
                name: o
            } = t;
            return (!r.xmlMode || r.lowerCaseTags) && (o = o.toLowerCase()),
                function(c) {
                    return i.getName(c) === o && e(c)
                }
        }
        case U.Descendant: {
            if (r.cacheResults === !1 || typeof WeakSet > "u") return function(c) {
                let l = c;
                for (; l = Bo(l, i);)
                    if (e(l)) return !0;
                return !1
            };
            const o = new WeakSet;
            return function(c) {
                let l = c;
                for (; l = Bo(l, i);)
                    if (!o.has(l)) {
                        if (i.isTag(l) && e(l)) return !0;
                        o.add(l)
                    } return !1
            }
        }
        case "_flexibleDescendant":
            return function(u) {
                let c = u;
                do
                    if (e(c)) return !0; while (c = Bo(c, i));
                return !1
            };
        case U.Parent:
            return function(u) {
                return i.getChildren(u).some(c => i.isTag(c) && e(c))
            };
        case U.Child:
            return function(u) {
                const c = i.getParent(u);
                return c != null && i.isTag(c) && e(c)
            };
        case U.Sibling:
            return function(u) {
                const c = i.getSiblings(u);
                for (let l = 0; l < c.length; l++) {
                    const f = c[l];
                    if (s(u, f)) break;
                    if (i.isTag(f) && e(f)) return !0
                }
                return !1
            };
        case U.Adjacent:
            return i.prevElementSibling ? function(u) {
                const c = i.prevElementSibling(u);
                return c != null && e(c)
            } : function(u) {
                const c = i.getSiblings(u);
                let l;
                for (let f = 0; f < c.length; f++) {
                    const d = c[f];
                    if (s(u, d)) break;
                    i.isTag(d) && (l = d)
                }
                return !!l && e(l)
            };
        case U.Universal: {
            if (t.namespace != null && t.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
            return e
        }
    }
}

function wy(e) {
    return e.type === U.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(t => t.some(wy)))
}
const ZP = {
        type: U.Descendant
    },
    ek = {
        type: "_flexibleDescendant"
    },
    tk = {
        type: U.Pseudo,
        name: "scope",
        data: null
    };

function rk(e, {
    adapter: t
}, r) {
    const n = !!(r != null && r.every(a => {
        const i = t.isTag(a) && t.getParent(a);
        return a === yy || i && t.isTag(i)
    }));
    for (const a of e) {
        if (!(a.length > 0 && El(a[0]) && a[0].type !== U.Descendant))
            if (n && !a.some(wy)) a.unshift(ZP);
            else continue;
        a.unshift(tk)
    }
}

function Ey(e, t, r) {
    var n;
    e.forEach(BP), r = (n = t.context) !== null && n !== void 0 ? n : r;
    const a = Array.isArray(r),
        i = r && (Array.isArray(r) ? r : [r]);
    if (t.relativeSelector !== !1) rk(e, t, i);
    else if (e.some(u => u.length > 0 && El(u[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    let s = !1;
    const o = e.map(u => {
        if (u.length >= 2) {
            const [c, l] = u;
            c.type !== U.Pseudo || c.name !== "scope" || (a && l.type === U.Descendant ? u[1] = ek : (l.type === U.Adjacent || l.type === U.Sibling) && (s = !0))
        }
        return nk(u, t, i)
    }).reduce(ak, K.falseFunc);
    return o.shouldTestNextSiblings = s, o
}

function nk(e, t, r) {
    var n;
    return e.reduce((a, i) => a === K.falseFunc ? K.falseFunc : QP(a, i, t, r, Ey), (n = t.rootFunc) !== null && n !== void 0 ? n : K.trueFunc)
}

function ak(e, t) {
    return t === K.falseFunc || e === K.trueFunc ? e : e === K.falseFunc || t === K.trueFunc ? t : function(n) {
        return e(n) || t(n)
    }
}
const Sy = (e, t) => e === t,
    ik = {
        adapter: Ts,
        equals: Sy
    };

function sk(e) {
    var t, r, n, a;
    const i = e ?? ik;
    return (t = i.adapter) !== null && t !== void 0 || (i.adapter = Ts), (r = i.equals) !== null && r !== void 0 || (i.equals = (a = (n = i.adapter) === null || n === void 0 ? void 0 : n.equals) !== null && a !== void 0 ? a : Sy), i
}

function ok(e) {
    return function(r, n, a) {
        const i = sk(n);
        return e(r, i, a)
    }
}
const Sl = ok(Ey);

function $y(e, t, r = !1) {
    return r && (e = uk(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e)
}

function uk(e, t) {
    const r = Array.isArray(e) ? e.slice(0) : [e],
        n = r.length;
    for (let a = 0; a < n; a++) {
        const i = by(r[a], t);
        r.push(...i)
    }
    return r
}
const ck = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);

function Ni(e) {
    return e.type !== "pseudo" ? !1 : ck.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(t => t.some(Ni)) : !1
}

function lk(e, t, r) {
    const n = t != null ? parseInt(t, 10) : NaN;
    switch (e) {
        case "first":
            return 1;
        case "nth":
        case "eq":
            return isFinite(n) ? n >= 0 ? n + 1 : 1 / 0 : 0;
        case "lt":
            return isFinite(n) ? n >= 0 ? Math.min(n, r) : 1 / 0 : 0;
        case "gt":
            return isFinite(n) ? 1 / 0 : 0;
        case "odd":
            return 2 * r;
        case "even":
            return 2 * r - 1;
        case "last":
        case "not":
            return 1 / 0
    }
}

function fk(e) {
    for (; e.parent;) e = e.parent;
    return e
}

function $l(e) {
    const t = [],
        r = [];
    for (const n of e) n.some(Ni) ? t.push(n) : r.push(n);
    return [r, t]
}
const dk = {
        type: U.Universal,
        namespace: null
    },
    hk = {
        type: U.Pseudo,
        name: "scope",
        data: null
    };

function Ay(e, t, r = {}) {
    return Oy([e], t, r)
}

function Oy(e, t, r = {}) {
    if (typeof t == "function") return e.some(t);
    const [n, a] = $l(Is(t));
    return n.length > 0 && e.some(Sl(n, r)) || a.some(i => Cy(i, e, r).length > 0)
}

function pk(e, t, r, n) {
    const a = typeof r == "string" ? parseInt(r, 10) : NaN;
    switch (e) {
        case "first":
        case "lt":
            return t;
        case "last":
            return t.length > 0 ? [t[t.length - 1]] : t;
        case "nth":
        case "eq":
            return isFinite(a) && Math.abs(a) < t.length ? [a < 0 ? t[t.length + a] : t[a]] : [];
        case "gt":
            return isFinite(a) ? t.slice(a + 1) : [];
        case "even":
            return t.filter((i, s) => s % 2 === 0);
        case "odd":
            return t.filter((i, s) => s % 2 === 1);
        case "not": {
            const i = new Set(_y(r, t, n));
            return t.filter(s => !i.has(s))
        }
    }
}

function Ry(e, t, r = {}) {
    return _y(Is(e), t, r)
}

function _y(e, t, r) {
    if (t.length === 0) return [];
    const [n, a] = $l(e);
    let i;
    if (n.length) {
        const s = Ju(t, n, r);
        if (a.length === 0) return s;
        s.length && (i = new Set(s))
    }
    for (let s = 0; s < a.length && (i == null ? void 0 : i.size) !== t.length; s++) {
        const o = a[s];
        if ((i ? t.filter(l => z(l) && !i.has(l)) : t).length === 0) break;
        const c = Cy(o, t, r);
        if (c.length)
            if (i) c.forEach(l => i.add(l));
            else {
                if (s === a.length - 1) return c;
                i = new Set(c)
            }
    }
    return typeof i < "u" ? i.size === t.length ? t : t.filter(s => i.has(s)) : []
}

function Cy(e, t, r) {
    var n;
    if (e.some(On)) {
        const a = (n = r.root) !== null && n !== void 0 ? n : fk(t[0]),
            i = {
                ...r,
                context: t,
                relativeSelector: !1
            };
        return e.push(hk), xi(a, e, i, !0, t.length)
    }
    return xi(t, e, r, !1, t.length)
}

function mk(e, t, r = {}, n = 1 / 0) {
    if (typeof e == "function") return Ny(t, e);
    const [a, i] = $l(Is(e)), s = i.map(o => xi(t, o, r, !0, n));
    return a.length && s.push(Yu(t, a, r, n)), s.length === 0 ? [] : s.length === 1 ? s[0] : Yr(s.reduce((o, u) => [...o, ...u]))
}

function xi(e, t, r, n, a) {
    const i = t.findIndex(Ni),
        s = t.slice(0, i),
        o = t[i],
        u = t.length - 1 === i ? a : 1 / 0,
        c = lk(o.name, o.data, u);
    if (c === 0) return [];
    const f = (s.length === 0 && !Array.isArray(e) ? Ns(e).filter(z) : s.length === 0 ? (Array.isArray(e) ? e : [e]).filter(z) : n || s.some(On) ? Yu(e, [s], r, c) : Ju(e, [s], r)).slice(0, c);
    let d = pk(o.name, f, o.data, r);
    if (d.length === 0 || t.length === i + 1) return d;
    const h = t.slice(i + 1),
        p = h.some(On);
    if (p) {
        if (On(h[0])) {
            const {
                type: v
            } = h[0];
            (v === U.Sibling || v === U.Adjacent) && (d = $y(d, Ts, !0)), h.unshift(dk)
        }
        r = {
            ...r,
            relativeSelector: !1,
            rootFunc: v => d.includes(v)
        }
    } else r.rootFunc && r.rootFunc !== Ci.trueFunc && (r = {
        ...r,
        rootFunc: Ci.trueFunc
    });
    return h.some(Ni) ? xi(d, h, r, !1, a) : p ? Yu(d, [h], r, a) : Ju(d, [h], r)
}

function Yu(e, t, r, n) {
    const a = Sl(t, r, e);
    return Ny(e, a, n)
}

function Ny(e, t, r = 1 / 0) {
    const n = $y(e, Ts, t.shouldTestNextSiblings);
    return yl(a => z(a) && t(a), n, !0, r)
}

function Ju(e, t, r) {
    const n = (Array.isArray(e) ? e : [e]).filter(z);
    if (n.length === 0) return n;
    const a = Sl(t, r);
    return a === Ci.trueFunc ? n : n.filter(a)
}
const gk = /^\s*[~+]/;

function vk(e) {
    var t;
    if (!e) return this._make([]);
    const r = this.toArray();
    if (typeof e != "string") {
        const i = tt(e) ? e.toArray() : [e];
        return this._make(i.filter(s => r.some(o => ly(o, s))))
    }
    const n = gk.test(e) ? r : this.children().toArray(),
        a = {
            context: r,
            root: (t = this._root) === null || t === void 0 ? void 0 : t[0],
            xmlMode: this.options.xmlMode,
            lowerCaseTags: this.options.lowerCaseTags,
            lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
            pseudos: this.options.pseudos,
            quirksMode: this.options.quirksMode
        };
    return this._make(mk(e, n, a))
}

function Al(e) {
    return function(t, ...r) {
        return function(n) {
            var a;
            let i = e(t, this);
            return n && (i = _l(i, n, this.options.xmlMode, (a = this._root) === null || a === void 0 ? void 0 : a[0])), this._make(this.length > 1 && i.length > 1 ? r.reduce((s, o) => o(s), i) : i)
        }
    }
}
const da = Al((e, t) => {
        const r = [];
        for (let n = 0; n < t.length; n++) {
            const a = e(t[n]);
            r.push(a)
        }
        return new Array().concat(...r)
    }),
    Ol = Al((e, t) => {
        const r = [];
        for (let n = 0; n < t.length; n++) {
            const a = e(t[n]);
            a !== null && r.push(a)
        }
        return r
    });

function Rl(e, ...t) {
    let r = null;
    const n = Al((a, i) => {
        const s = [];
        return re(i, o => {
            for (let u;
                (u = a(o)) && !(r != null && r(u, s.length)); o = u) s.push(u)
        }), s
    })(e, ...t);
    return function(a, i) {
        r = typeof a == "string" ? o => Ay(o, a, this.options) : a ? ha(a) : null;
        const s = n.call(this, i);
        return r = null, s
    }
}

function Jr(e) {
    return Array.from(new Set(e))
}
const yk = Ol(({
        parent: e
    }) => e && !Kr(e) ? e : null, Jr),
    bk = da(e => {
        const t = [];
        for (; e.parent && !Kr(e.parent);) t.push(e.parent), e = e.parent;
        return t
    }, Yr, e => e.reverse()),
    wk = Rl(({
        parent: e
    }) => e && !Kr(e) ? e : null, Yr, e => e.reverse());

function Ek(e) {
    var t;
    const r = [];
    if (!e) return this._make(r);
    const n = {
            xmlMode: this.options.xmlMode,
            root: (t = this._root) === null || t === void 0 ? void 0 : t[0]
        },
        a = typeof e == "string" ? i => Ay(i, e, n) : ha(e);
    return re(this, i => {
        for (; i && z(i);) {
            if (a(i, 0)) {
                r.includes(i) || r.push(i);
                break
            }
            i = i.parent
        }
    }), this._make(r)
}
const Sk = Ol(e => gl(e)),
    $k = da(e => {
        const t = [];
        for (; e.next;) e = e.next, z(e) && t.push(e);
        return t
    }, Jr),
    Ak = Rl(e => gl(e), Jr),
    Ok = Ol(e => vl(e)),
    Rk = da(e => {
        const t = [];
        for (; e.prev;) e = e.prev, z(e) && t.push(e);
        return t
    }, Jr),
    _k = Rl(e => vl(e), Jr),
    Ck = da(e => ny(e).filter(t => z(t) && t !== e), Yr),
    Nk = da(e => Ns(e).filter(z), Jr);

function xk() {
    const e = this.toArray().reduce((t, r) => ce(r) ? t.concat(r.children) : t, []);
    return this._make(e)
}

function Tk(e) {
    let t = 0;
    const r = this.length;
    for (; t < r && e.call(this[t], t, this[t]) !== !1;) ++t;
    return this
}

function Ik(e) {
    let t = [];
    for (let r = 0; r < this.length; r++) {
        const n = this[r],
            a = e.call(n, r, n);
        a != null && (t = t.concat(a))
    }
    return this._make(t)
}

function ha(e) {
    return typeof e == "function" ? (t, r) => e.call(t, r, t) : tt(e) ? t => Array.prototype.includes.call(e, t) : function(t) {
        return e === t
    }
}

function Pk(e) {
    var t;
    return this._make(_l(this.toArray(), e, this.options.xmlMode, (t = this._root) === null || t === void 0 ? void 0 : t[0]))
}

function _l(e, t, r, n) {
    return typeof t == "string" ? Ry(t, e, {
        xmlMode: r,
        root: n
    }) : e.filter(ha(t))
}

function kk(e) {
    const t = this.toArray();
    return typeof e == "string" ? Oy(t.filter(z), e, this.options) : e ? t.some(ha(e)) : !1
}

function Lk(e) {
    let t = this.toArray();
    if (typeof e == "string") {
        const r = new Set(Ry(e, t, this.options));
        t = t.filter(n => !r.has(n))
    } else {
        const r = ha(e);
        t = t.filter((n, a) => !r(n, a))
    }
    return this._make(t)
}

function Fk(e) {
    return this.filter(typeof e == "string" ? `:has(${e})` : (t, r) => this._make(r).find(e).length > 0)
}

function Dk() {
    return this.length > 1 ? this._make(this[0]) : this
}

function jk() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this
}

function Uk(e) {
    var t;
    return e = +e, e === 0 && this.length <= 1 ? this : (e < 0 && (e = this.length + e), this._make((t = this[e]) !== null && t !== void 0 ? t : []))
}

function Mk(e) {
    return e == null ? this.toArray() : this[e < 0 ? this.length + e : e]
}

function Bk() {
    return Array.prototype.slice.call(this)
}

function Vk(e) {
    let t, r;
    return e == null ? (t = this.parent().children(), r = this[0]) : typeof e == "string" ? (t = this._make(e), r = this[0]) : (t = this, r = tt(e) ? e[0] : e), Array.prototype.indexOf.call(t, r)
}

function zk(e, t) {
    return this._make(Array.prototype.slice.call(this, e, t))
}

function qk() {
    var e;
    return (e = this.prevObject) !== null && e !== void 0 ? e : this._make([])
}

function Wk(e, t) {
    const r = this._make(e, t),
        n = Yr([...this.get(), ...r.get()]);
    return this._make(n)
}

function Gk(e) {
    return this.prevObject ? this.add(e ? this.prevObject.filter(e) : this.prevObject) : this
}
const Hk = Object.freeze(Object.defineProperty({
    __proto__: null,
    add: Wk,
    addBack: Gk,
    children: Nk,
    closest: Ek,
    contents: xk,
    each: Tk,
    end: qk,
    eq: Uk,
    filter: Pk,
    filterArray: _l,
    find: vk,
    first: Dk,
    get: Mk,
    has: Fk,
    index: Vk,
    is: kk,
    last: jk,
    map: Ik,
    next: Sk,
    nextAll: $k,
    nextUntil: Ak,
    not: Lk,
    parent: yk,
    parents: bk,
    parentsUntil: wk,
    prev: Ok,
    prevAll: Rk,
    prevUntil: _k,
    siblings: Ck,
    slice: zk,
    toArray: Bk
}, Symbol.toStringTag, {
    value: "Module"
}));

function Kk(e) {
    return function(r, n, a, i) {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) && (r = r.toString()), typeof r == "string") return e(r, n, a, i);
        const s = r;
        if (!Array.isArray(s) && Kr(s)) return s;
        const o = new Un([]);
        return Jt(s, o), o
    }
}

function Jt(e, t) {
    const r = Array.isArray(e) ? e : [e];
    t ? t.children = r : t = null;
    for (let n = 0; n < r.length; n++) {
        const a = r[n];
        a.parent && a.parent.children !== r && cr(a), t ? (a.prev = r[n - 1] || null, a.next = r[n + 1] || null) : a.prev = a.next = null, a.parent = t
    }
    return t
}

function Xk(e, t) {
    return e == null ? [] : tt(e) ? t ? Gu(e.get()) : e.get() : Array.isArray(e) ? e.reduce((r, n) => r.concat(this._makeDomArray(n, t)), []) : typeof e == "string" ? this._parse(e, this.options, !1, null).children : t ? Gu([e]) : [e]
}

function xy(e) {
    return function(...t) {
        const r = this.length - 1;
        return re(this, (n, a) => {
            if (!ce(n)) return;
            const i = typeof t[0] == "function" ? t[0].call(n, a, this._render(n.children)) : t,
                s = this._makeDomArray(i, a < r);
            e(s, n.children, n)
        })
    }
}

function Ft(e, t, r, n, a) {
    var i, s;
    const o = [t, r, ...n],
        u = t === 0 ? null : e[t - 1],
        c = t + r >= e.length ? null : e[t + r];
    for (let l = 0; l < n.length; ++l) {
        const f = n[l],
            d = f.parent;
        if (d) {
            const p = d.children.indexOf(f);
            p > -1 && (d.children.splice(p, 1), a === d && t > p && o[0]--)
        }
        f.parent = a, f.prev && (f.prev.next = (i = f.next) !== null && i !== void 0 ? i : null), f.next && (f.next.prev = (s = f.prev) !== null && s !== void 0 ? s : null), f.prev = l === 0 ? u : n[l - 1], f.next = l === n.length - 1 ? c : n[l + 1]
    }
    return u && (u.next = n[0]), c && (c.prev = n[n.length - 1]), e.splice(...o)
}

function Yk(e) {
    return (tt(e) ? e : this._make(e)).append(this), this
}

function Jk(e) {
    return (tt(e) ? e : this._make(e)).prepend(this), this
}
const Qk = xy((e, t, r) => {
        Ft(t, t.length, 0, e, r)
    }),
    Zk = xy((e, t, r) => {
        Ft(t, 0, 0, e, r)
    });

function Ty(e) {
    return function(t) {
        const r = this.length - 1,
            n = this.parents().last();
        for (let a = 0; a < this.length; a++) {
            const i = this[a],
                s = typeof t == "function" ? t.call(i, a, i) : typeof t == "string" && !Hu(t) ? n.find(t).clone() : t,
                [o] = this._makeDomArray(s, a < r);
            if (!o || !ce(o)) continue;
            let u = o,
                c = 0;
            for (; c < u.children.length;) {
                const l = u.children[c];
                z(l) ? (u = l, c = 0) : c++
            }
            e(i, u, [o])
        }
        return this
    }
}
const e2 = Ty((e, t, r) => {
        const {
            parent: n
        } = e;
        if (!n) return;
        const a = n.children,
            i = a.indexOf(e);
        Jt([e], t), Ft(a, i, 0, r, n)
    }),
    t2 = Ty((e, t, r) => {
        ce(e) && (Jt(e.children, t), Jt(r, e))
    });

function r2(e) {
    return this.parent(e).not("body").each((t, r) => {
        this._make(r).replaceWith(r.children)
    }), this
}

function n2(e) {
    const t = this[0];
    if (t) {
        const r = this._make(typeof e == "function" ? e.call(t, 0, t) : e).insertBefore(t);
        let n;
        for (let i = 0; i < r.length; i++) r[i].type === "tag" && (n = r[i]);
        let a = 0;
        for (; n && a < n.children.length;) {
            const i = n.children[a];
            i.type === "tag" ? (n = i, a = 0) : a++
        }
        n && this._make(n).append(this)
    }
    return this
}

function a2(...e) {
    const t = this.length - 1;
    return re(this, (r, n) => {
        const {
            parent: a
        } = r;
        if (!ce(r) || !a) return;
        const i = a.children,
            s = i.indexOf(r);
        if (s < 0) return;
        const o = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e,
            u = this._makeDomArray(o, n < t);
        Ft(i, s + 1, 0, u, a)
    })
}

function i2(e) {
    typeof e == "string" && (e = this._make(e)), this.remove();
    const t = [];
    return this._makeDomArray(e).forEach(r => {
        const n = this.clone().toArray(),
            {
                parent: a
            } = r;
        if (!a) return;
        const i = a.children,
            s = i.indexOf(r);
        s < 0 || (Ft(i, s + 1, 0, n, a), t.push(...n))
    }), this._make(t)
}

function s2(...e) {
    const t = this.length - 1;
    return re(this, (r, n) => {
        const {
            parent: a
        } = r;
        if (!ce(r) || !a) return;
        const i = a.children,
            s = i.indexOf(r);
        if (s < 0) return;
        const o = typeof e[0] == "function" ? e[0].call(r, n, this._render(r.children)) : e,
            u = this._makeDomArray(o, n < t);
        Ft(i, s, 0, u, a)
    })
}

function o2(e) {
    const t = this._make(e);
    this.remove();
    const r = [];
    return re(t, n => {
        const a = this.clone().toArray(),
            {
                parent: i
            } = n;
        if (!i) return;
        const s = i.children,
            o = s.indexOf(n);
        o < 0 || (Ft(s, o, 0, a, i), r.push(...a))
    }), this._make(r)
}

function u2(e) {
    const t = e ? this.filter(e) : this;
    return re(t, r => {
        cr(r), r.prev = r.next = r.parent = null
    }), this
}

function c2(e) {
    return re(this, (t, r) => {
        const {
            parent: n
        } = t;
        if (!n) return;
        const a = n.children,
            i = typeof e == "function" ? e.call(t, r, t) : e,
            s = this._makeDomArray(i);
        Jt(s, null);
        const o = a.indexOf(t);
        Ft(a, o, 1, s, n), s.includes(t) || (t.parent = t.prev = t.next = null)
    })
}

function l2() {
    return re(this, e => {
        ce(e) && (e.children.forEach(t => {
            t.next = t.prev = t.parent = null
        }), e.children.length = 0)
    })
}

function f2(e) {
    if (e === void 0) {
        const t = this[0];
        return !t || !ce(t) ? null : this._render(t.children)
    }
    return re(this, t => {
        if (!ce(t)) return;
        t.children.forEach(n => {
            n.next = n.prev = n.parent = null
        });
        const r = tt(e) ? e.toArray() : this._parse(`${e}`, this.options, !1, t).children;
        Jt(r, t)
    })
}

function d2() {
    return this._render(this)
}

function h2(e) {
    return e === void 0 ? Mn(this) : typeof e == "function" ? re(this, (t, r) => this._make(t).text(e.call(t, r, Mn([t])))) : re(this, t => {
        if (!ce(t)) return;
        t.children.forEach(n => {
            n.next = n.prev = n.parent = null
        });
        const r = new Ei(`${e}`);
        Jt(r, t)
    })
}

function p2() {
    return this._make(Gu(this.get()))
}
const m2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    _makeDomArray: Xk,
    after: a2,
    append: Qk,
    appendTo: Yk,
    before: s2,
    clone: p2,
    empty: l2,
    html: f2,
    insertAfter: i2,
    insertBefore: o2,
    prepend: Zk,
    prependTo: Jk,
    remove: u2,
    replaceWith: c2,
    text: h2,
    toString: d2,
    unwrap: r2,
    wrap: e2,
    wrapAll: n2,
    wrapInner: t2
}, Symbol.toStringTag, {
    value: "Module"
}));

function g2(e, t) {
    if (e != null && t != null || typeof e == "object" && !Array.isArray(e)) return re(this, (r, n) => {
        z(r) && Iy(r, e, t, n)
    });
    if (this.length !== 0) return Py(this[0], e)
}

function Iy(e, t, r, n) {
    if (typeof t == "string") {
        const a = Py(e),
            i = typeof r == "function" ? r.call(e, n, a[t]) : r;
        i === "" ? delete a[t] : i != null && (a[t] = i), e.attribs.style = v2(a)
    } else typeof t == "object" && Object.keys(t).forEach((a, i) => {
        Iy(e, a, t[a], i)
    })
}

function Py(e, t) {
    if (!e || !z(e)) return;
    const r = y2(e.attribs.style);
    if (typeof t == "string") return r[t];
    if (Array.isArray(t)) {
        const n = {};
        return t.forEach(a => {
            r[a] != null && (n[a] = r[a])
        }), n
    }
    return r
}

function v2(e) {
    return Object.keys(e).reduce((t, r) => `${t}${t?" ":""}${r}: ${e[r]};`, "")
}

function y2(e) {
    if (e = (e || "").trim(), !e) return {};
    const t = {};
    let r;
    for (const n of e.split(";")) {
        const a = n.indexOf(":");
        if (a < 1 || a === n.length - 1) {
            const i = n.trimEnd();
            i.length > 0 && r !== void 0 && (t[r] += `;${i}`)
        } else r = n.slice(0, a).trim(), t[r] = n.slice(a + 1).trim()
    }
    return t
}
const b2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        css: g2
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    yh = "input,select,textarea,keygen",
    w2 = /%20/g,
    bh = /\r?\n/g;

function E2() {
    return this.serializeArray().map(r => `${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&").replace(w2, "+")
}

function S2() {
    return this.map((e, t) => {
        const r = this._make(t);
        return z(t) && t.name === "form" ? r.find(yh).toArray() : r.filter(yh).toArray()
    }).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map((e, t) => {
        var r;
        const n = this._make(t),
            a = n.attr("name"),
            i = (r = n.val()) !== null && r !== void 0 ? r : "";
        return Array.isArray(i) ? i.map(s => ({
            name: a,
            value: s.replace(bh, `\r
`)
        })) : {
            name: a,
            value: i.replace(bh, `\r
`)
        }
    }).toArray()
}
const $2 = Object.freeze(Object.defineProperty({
    __proto__: null,
    serialize: E2,
    serializeArray: S2
}, Symbol.toStringTag, {
    value: "Module"
}));
class pa {
    constructor(t, r, n) {
        if (this.length = 0, this.options = n, this._root = r, t) {
            for (let a = 0; a < t.length; a++) this[a] = t[a];
            this.length = t.length
        }
    }
}
pa.prototype.cheerio = "[cheerio object]";
pa.prototype.splice = Array.prototype.splice;
pa.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(pa.prototype, kP, Hk, m2, b2, $2);

function A2(e, t) {
    return function r(n, a, i = !0) {
        if (n == null) throw new Error("cheerio.load() expects a string");
        const s = {
                ...dl,
                ...Wu(a)
            },
            o = e(n, s, i, null);
        class u extends pa {
            _make(f, d) {
                const h = c(f, d);
                return h.prevObject = this, h
            }
            _parse(f, d, h, p) {
                return e(f, d, h, p)
            }
            _render(f) {
                return t(f, this.options)
            }
        }

        function c(l, f, d = o, h) {
            if (l && tt(l)) return l;
            const p = {
                    ...s,
                    ...Wu(h)
                },
                v = typeof d == "string" ? [e(d, p, !1, null)] : "length" in d ? d : [d],
                y = tt(v) ? v : new u(v, null, p);
            if (y._root = y, !l) return new u(void 0, y, p);
            const A = typeof l == "string" && Hu(l) ? e(l, p, !1, null).children : O2(l) ? [l] : Array.isArray(l) ? l : void 0,
                m = new u(A, y, p);
            if (A) return m;
            if (typeof l != "string") throw new Error("Unexpected type of selector");
            let R = l;
            const N = f ? typeof f == "string" ? Hu(f) ? new u([e(f, p, !1, null)], y, p) : (R = `${f} ${R}`, y) : tt(f) ? f : new u(Array.isArray(f) ? f : [f], y, p) : y;
            return N ? N.find(R) : m
        }
        return Object.assign(c, AP, {
            load: r,
            _root: o,
            _options: s,
            fn: u.prototype,
            prototype: u.prototype
        }), c
    }
}

function O2(e) {
    return !!e.name || e.type === "root" || e.type === "text" || e.type === "comment"
}
const R2 = Kk((e, t, r, n) => t.xmlMode || t._useHtmlParser2 ? jw(e, t) : Uw(e, t, r, n)),
    H = A2(R2, (e, t) => t.xmlMode || t._useHtmlParser2 ? Cs(e, t) : Dw(e));
H([]);
var _2 = typeof self == "object" ? self.FormData : window.FormData;
const Cl = Re(_2);
var Nl = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Nl.parse = N2;
Nl.serialize = x2;
var C2 = Object.prototype.toString,
    Pa = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function N2(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var r = {}, n = t || {}, a = n.decode || T2, i = 0; i < e.length;) {
        var s = e.indexOf("=", i);
        if (s === -1) break;
        var o = e.indexOf(";", i);
        if (o === -1) o = e.length;
        else if (o < s) {
            i = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        var u = e.slice(i, s).trim();
        if (r[u] === void 0) {
            var c = e.slice(s + 1, o).trim();
            c.charCodeAt(0) === 34 && (c = c.slice(1, -1)), r[u] = k2(c, a)
        }
        i = o + 1
    }
    return r
}

function x2(e, t, r) {
    var n = r || {},
        a = n.encode || I2;
    if (typeof a != "function") throw new TypeError("option encode is invalid");
    if (!Pa.test(e)) throw new TypeError("argument name is invalid");
    var i = a(t);
    if (i && !Pa.test(i)) throw new TypeError("argument val is invalid");
    var s = e + "=" + i;
    if (n.maxAge != null) {
        var o = n.maxAge - 0;
        if (isNaN(o) || !isFinite(o)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(o)
    }
    if (n.domain) {
        if (!Pa.test(n.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + n.domain
    }
    if (n.path) {
        if (!Pa.test(n.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + n.path
    }
    if (n.expires) {
        var u = n.expires;
        if (!P2(u) || isNaN(u.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + u.toUTCString()
    }
    if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.partitioned && (s += "; Partitioned"), n.priority) {
        var c = typeof n.priority == "string" ? n.priority.toLowerCase() : n.priority;
        switch (c) {
            case "low":
                s += "; Priority=Low";
                break;
            case "medium":
                s += "; Priority=Medium";
                break;
            case "high":
                s += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid")
        }
    }
    if (n.sameSite) {
        var l = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
        switch (l) {
            case !0:
                s += "; SameSite=Strict";
                break;
            case "lax":
                s += "; SameSite=Lax";
                break;
            case "strict":
                s += "; SameSite=Strict";
                break;
            case "none":
                s += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
    }
    return s
}

function T2(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e
}

function I2(e) {
    return encodeURIComponent(e)
}

function P2(e) {
    return C2.call(e) === "[object Date]" || e instanceof Date
}

function k2(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
var ma = {
        exports: {}
    },
    wr = {
        decodeValues: !0,
        map: !1,
        silent: !1
    };

function Qu(e) {
    return typeof e == "string" && !!e.trim()
}

function Zu(e, t) {
    var r = e.split(";").filter(Qu),
        n = r.shift(),
        a = L2(n),
        i = a.name,
        s = a.value;
    t = t ? Object.assign({}, wr, t) : wr;
    try {
        s = t.decodeValues ? decodeURIComponent(s) : s
    } catch (u) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + s + "'. Set options.decodeValues to false to disable this feature.", u)
    }
    var o = {
        name: i,
        value: s
    };
    return r.forEach(function(u) {
        var c = u.split("="),
            l = c.shift().trimLeft().toLowerCase(),
            f = c.join("=");
        l === "expires" ? o.expires = new Date(f) : l === "max-age" ? o.maxAge = parseInt(f, 10) : l === "secure" ? o.secure = !0 : l === "httponly" ? o.httpOnly = !0 : l === "samesite" ? o.sameSite = f : o[l] = f
    }), o
}

function L2(e) {
    var t = "",
        r = "",
        n = e.split("=");
    return n.length > 1 ? (t = n.shift(), r = n.join("=")) : r = e, {
        name: t,
        value: r
    }
}

function ky(e, t) {
    if (t = t ? Object.assign({}, wr, t) : wr, !e) return t.map ? {} : [];
    if (e.headers)
        if (typeof e.headers.getSetCookie == "function") e = e.headers.getSetCookie();
        else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
    else {
        var r = e.headers[Object.keys(e.headers).find(function(a) {
            return a.toLowerCase() === "set-cookie"
        })];
        !r && e.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = r
    }
    if (Array.isArray(e) || (e = [e]), t = t ? Object.assign({}, wr, t) : wr, t.map) {
        var n = {};
        return e.filter(Qu).reduce(function(a, i) {
            var s = Zu(i, t);
            return a[s.name] = s, a
        }, n)
    } else return e.filter(Qu).map(function(a) {
        return Zu(a, t)
    })
}

function F2(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var t = [],
        r = 0,
        n, a, i, s, o;

    function u() {
        for (; r < e.length && /\s/.test(e.charAt(r));) r += 1;
        return r < e.length
    }

    function c() {
        return a = e.charAt(r), a !== "=" && a !== ";" && a !== ","
    }
    for (; r < e.length;) {
        for (n = r, o = !1; u();)
            if (a = e.charAt(r), a === ",") {
                for (i = r, r += 1, u(), s = r; r < e.length && c();) r += 1;
                r < e.length && e.charAt(r) === "=" ? (o = !0, r = s, t.push(e.substring(n, i)), n = r) : r = i + 1
            } else r += 1;
        (!o || r >= e.length) && t.push(e.substring(n, e.length))
    }
    return t
}
ma.exports = ky;
ma.exports.parse = ky;
ma.exports.parseString = Zu;
ma.exports.splitCookiesString = F2;
var D2 = ma.exports;
const j2 = Re(D2);
class q extends Error {
    constructor(t) {
        super(`Couldn't find a stream: ${t??"not found"}`), this.name = "NotFoundError"
    }
}

function Ly(e) {
    const t = [];
    return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
        type: "source",
        id: e.id,
        rank: e.rank,
        name: e.name,
        mediaTypes: t
    }
}

function Fy(e) {
    return {
        type: "embed",
        id: e.id,
        rank: e.rank,
        name: e.name
    }
}

function U2(e) {
    return e.sources.sort((t, r) => r.rank - t.rank).map(Ly)
}

function M2(e) {
    return e.embeds.sort((t, r) => r.rank - t.rank).map(Fy)
}

function B2(e, t) {
    const r = e.sources.find(a => a.id === t);
    if (r) return Ly(r);
    const n = e.embeds.find(a => a.id === t);
    return n ? Fy(n) : null
}

function xl(e, t) {
    let r = (t == null ? void 0 : t.baseUrl) ?? "",
        n = e;
    r.length > 0 && !r.endsWith("/") && (r += "/"), n.startsWith("/") && (n = n.slice(1));
    const a = r + n;
    if (!a.startsWith("http://") && !a.startsWith("https://")) throw new Error(`Invald URL -- URL doesn't start with a http scheme: '${a}'`);
    const i = new URL(a);
    return Object.entries((t == null ? void 0 : t.query) ?? {}).forEach(([s, o]) => {
        i.searchParams.set(s, o)
    }), i.toString()
}

function wh(e) {
    const t = (n, a) => e(n, {
            headers: (a == null ? void 0 : a.headers) ?? {},
            method: (a == null ? void 0 : a.method) ?? "GET",
            query: (a == null ? void 0 : a.query) ?? {},
            baseUrl: (a == null ? void 0 : a.baseUrl) ?? "",
            readHeaders: (a == null ? void 0 : a.readHeaders) ?? [],
            body: a == null ? void 0 : a.body
        }),
        r = async (n, a) => (await t(n, a)).body;
    return r.full = t, r
}
const Z = {
        CORS_ALLOWED: "cors-allowed",
        IP_LOCKED: "ip-locked",
        CF_BLOCKED: "cf-blocked"
    },
    xB = {
        BROWSER: "browser",
        BROWSER_EXTENSION: "browser-extension",
        NATIVE: "native",
        ANY: "any"
    },
    V2 = {
        browser: {
            requires: [Z.CORS_ALLOWED],
            disallowed: []
        },
        "browser-extension": {
            requires: [],
            disallowed: []
        },
        native: {
            requires: [],
            disallowed: []
        },
        any: {
            requires: [],
            disallowed: []
        }
    };

function z2(e, t) {
    const r = V2[e];
    return t || r.disallowed.push(Z.IP_LOCKED), r
}

function Vn(e, t) {
    return !(!e.requires.every(a => t.includes(a)) || e.disallowed.some(a => t.includes(a)))
}

function Ti(e) {
    return e ? e.type === "hls" ? !!e.playlist : e.type === "file" ? Object.values(e.qualities).filter(r => r.url.length > 0).length !== 0 : !1 : !1
}
async function q2(e, t) {
    const r = e.sources.find(i => t.id === i.id);
    if (!r) throw new Error("Source with ID not found");
    if (t.media.type === "movie" && !r.scrapeMovie) throw new Error("Source is not compatible with movies");
    if (t.media.type === "show" && !r.scrapeShow) throw new Error("Source is not compatible with shows");
    const n = {
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        progress(i) {
            var s, o;
            (o = (s = t.events) == null ? void 0 : s.update) == null || o.call(s, {
                id: r.id,
                percentage: i,
                status: "pending"
            })
        }
    };
    let a = null;
    if (t.media.type === "movie" && r.scrapeMovie ? a = await r.scrapeMovie({
            ...n,
            media: t.media
        }) : t.media.type === "show" && r.scrapeShow && (a = await r.scrapeShow({
            ...n,
            media: t.media
        })), a != null && a.stream && (a.stream = a.stream.filter(i => Ti(i)).filter(i => Vn(t.features, i.flags))), !a) throw new Error("output is null");
    if (a.embeds = a.embeds.filter(i => {
            const s = e.embeds.find(o => o.id === i.embedId);
            return !(!s || s.disabled)
        }), (!a.stream || a.stream.length === 0) && a.embeds.length === 0) throw new q("No streams found");
    return a
}
async function W2(e, t) {
    const r = e.embeds.find(a => t.id === a.id);
    if (!r) throw new Error("Embed with ID not found");
    const n = await r.scrape({
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        url: t.url,
        progress(a) {
            var i, s;
            (s = (i = t.events) == null ? void 0 : i.update) == null || s.call(i, {
                id: r.id,
                percentage: a,
                status: "pending"
            })
        }
    });
    if (n.stream = n.stream.filter(a => Ti(a)).filter(a => Vn(t.features, a.flags)), n.stream.length === 0) throw new q("No streams found");
    return n
}

function Eh(e, t) {
    const r = [...t];
    return r.sort((n, a) => {
        const i = e.indexOf(n.id),
            s = e.indexOf(a.id);
        return i >= 0 && s >= 0 ? i - s : s >= 0 ? 1 : i >= 0 ? -1 : a.rank - n.rank
    }), r
}
async function G2(e, t) {
    var r, n, a, i, s, o, u, c, l, f, d, h, p, v, y, A, m;
    const R = Eh(t.sourceOrder ?? [], e.sources).filter(M => t.media.type === "movie" ? !!M.scrapeMovie : t.media.type === "show" ? !!M.scrapeShow : !1),
        N = Eh(t.embedOrder ?? [], e.embeds),
        x = N.map(M => M.id);
    let j = "";
    const D = {
        fetcher: t.fetcher,
        proxiedFetcher: t.proxiedFetcher,
        progress(M) {
            var k, G;
            (G = (k = t.events) == null ? void 0 : k.update) == null || G.call(k, {
                id: j,
                percentage: M,
                status: "pending"
            })
        }
    };
    (n = (r = t.events) == null ? void 0 : r.init) == null || n.call(r, {
        sourceIds: R.map(M => M.id)
    });
    for (const M of R) {
        (i = (a = t.events) == null ? void 0 : a.start) == null || i.call(a, M.id), j = M.id;
        let k = null;
        try {
            if (t.media.type === "movie" && M.scrapeMovie ? k = await M.scrapeMovie({
                    ...D,
                    media: t.media
                }) : t.media.type === "show" && M.scrapeShow && (k = await M.scrapeShow({
                    ...D,
                    media: t.media
                })), k && (k.stream = (k.stream ?? []).filter(F => Ti(F)).filter(F => Vn(t.features, F.flags))), !k) throw Error("No output");
            if ((!k.stream || k.stream.length === 0) && k.embeds.length === 0) throw new q("No streams found")
        } catch (F) {
            if (F instanceof q) {
                (o = (s = t.events) == null ? void 0 : s.update) == null || o.call(s, {
                    id: M.id,
                    percentage: 100,
                    status: "notfound",
                    reason: F.message
                });
                continue
            }(c = (u = t.events) == null ? void 0 : u.update) == null || c.call(u, {
                id: M.id,
                percentage: 100,
                status: "failure",
                error: F
            });
            continue
        }
        if (!k) throw new Error("Invalid media type");
        if ((l = k.stream) != null && l[0]) return {
            sourceId: M.id,
            stream: k.stream[0]
        };
        const G = k.embeds.filter(F => {
            const _ = e.embeds.find($ => $.id === F.embedId);
            return !(!_ || _.disabled)
        }).sort((F, _) => x.indexOf(F.embedId) - x.indexOf(_.embedId));
        G.length > 0 && ((d = (f = t.events) == null ? void 0 : f.discoverEmbeds) == null || d.call(f, {
            embeds: G.map((F, _) => ({
                id: [M.id, _].join("-"),
                embedScraperId: F.embedId
            })),
            sourceId: M.id
        }));
        for (const F in G) {
            if (!Object.prototype.hasOwnProperty.call(G, F)) continue;
            const _ = G[F],
                $ = N.find(E => E.id === _.embedId);
            if (!$) throw new Error("Invalid embed returned");
            const g = [M.id, F].join("-");
            (p = (h = t.events) == null ? void 0 : h.start) == null || p.call(h, g), j = g;
            let b;
            try {
                if (b = await $.scrape({
                        ...D,
                        url: _.url
                    }), b.stream = b.stream.filter(E => Ti(E)).filter(E => Vn(t.features, E.flags)), b.stream.length === 0) throw new q("No streams found")
            } catch (E) {
                if (E instanceof q) {
                    (y = (v = t.events) == null ? void 0 : v.update) == null || y.call(v, {
                        id: g,
                        percentage: 100,
                        status: "notfound",
                        reason: E.message
                    });
                    continue
                }(m = (A = t.events) == null ? void 0 : A.update) == null || m.call(A, {
                    id: g,
                    percentage: 100,
                    status: "failure",
                    error: E
                });
                continue
            }
            return {
                sourceId: M.id,
                embedId: $.id,
                stream: b.stream[0]
            }
        }
    }
    return null
}

function H2(e) {
    const t = {
            embeds: e.embeds,
            sources: e.sources
        },
        r = {
            features: e.features,
            fetcher: wh(e.fetcher),
            proxiedFetcher: wh(e.proxiedFetcher ?? e.fetcher)
        };
    return {
        runAll(n) {
            return G2(t, {
                ...r,
                ...n
            })
        },
        runSourceScraper(n) {
            return q2(t, {
                ...r,
                ...n
            })
        },
        runEmbedScraper(n) {
            return W2(t, {
                ...r,
                ...n
            })
        },
        getMetadata(n) {
            return B2(t, n)
        },
        listSources() {
            return U2(t)
        },
        listEmbeds() {
            return M2(t)
        }
    }
}

function Pe(e) {
    const t = [];
    return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
        ...e,
        type: "source",
        disabled: e.disabled ?? !1,
        mediaTypes: t
    }
}

function le(e) {
    return {
        ...e,
        type: "embed",
        disabled: e.disabled ?? !1,
        mediaTypes: void 0
    }
}
const K2 = qv("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 10),
    X2 = le({
        id: "dood",
        name: "dood",
        rank: 173,
        async scrape(e) {
            var t, r;
            const n = "https://do0od.com",
                a = e.url.split("/d/")[1] || e.url.split("/e/")[1],
                i = await e.proxiedFetcher(`/e/${a}`, {
                    method: "GET",
                    baseUrl: n
                }),
                s = (t = i.match(/a\+"\?token=([^"]+)/)) == null ? void 0 : t[1],
                o = (r = i.match(/\$\.get\('\/pass_md5([^']+)/)) == null ? void 0 : r[1],
                c = `${await e.proxiedFetcher(`/pass_md5/${o}`,{headers:{referer:`${n}/e/${a}`},method:"GET",baseUrl:n})}${K2()}?token=${s}${Date.now()}`;
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: c,
                            headers: {
                                referer: "https://do0od.com/"
                            }
                        }
                    }
                }]
            }
        }
    }),
    Y2 = "https://www.febbox.com";

function Dy(e) {
    const [t, r, n, a] = e.slice(1).split("/"), i = n ? parseInt(n, 10) : void 0, s = a ? parseInt(a, 10) : void 0;
    return {
        type: t,
        id: r,
        season: i,
        episode: s
    }
}
async function Sh(e, t, r) {
    var n;
    const a = {
        share_key: t,
        pwd: ""
    };
    return r && (a.parent_id = r.toString(), a.page = "1"), ((n = (await e.proxiedFetcher("/file/file_share_list", {
        headers: {
            "accept-language": "en"
        },
        baseUrl: Y2,
        query: a
    })).data) == null ? void 0 : n.file_list) ?? []
}

function $h(e) {
    return e.ext === "mp4" || e.ext === "mkv"
}
async function J2(e, t, r, n, a) {
    const i = await Sh(e, t);
    if (r === "show") {
        const s = i.find(f => f.is_dir ? f.file_name.toLowerCase() === `season ${n}` : !1);
        if (!s) return [];
        const o = await Sh(e, t, s.fid),
            u = (n == null ? void 0 : n.toString()) ?? "0",
            c = (a == null ? void 0 : a.toString()) ?? "0",
            l = new RegExp(`[Ss]0*${u}[Ee]0*${c}`);
        return o.filter(f => !(f.is_dir || !f.file_name.match(l))).filter($h)
    }
    return i.filter(s => !s.is_dir).filter($h)
}
const Q2 = {
    srt: "srt",
    vtt: "vtt"
};

function Qr(e) {
    const r = Object.keys(Q2).find(n => e.endsWith(`.${n}`));
    return r || null
}

function Zr(e) {
    const t = Xv.getCode(e);
    return t.length === 0 ? null : t
}

function Z2(e) {
    return e ? Xv.validate(e) : !1
}

function jy(e) {
    const t = {};
    return e.filter(r => t[r.language] ? !1 : (t[r.language] = !0, !0))
}
const eL = atob("d0VpcGhUbiE="),
    Uy = atob("MTIzZDZjZWRmNjI2ZHk1NDIzM2FhMXc2"),
    Ah = [atob("aHR0cHM6Ly9zaG93Ym94LnNoZWd1Lm5ldC9hcGkvYXBpX2NsaWVudC9pbmRleC8="), atob("aHR0cHM6Ly9tYnBhcGkuc2hlZ3UubmV0L2FwaS9hcGlfY2xpZW50L2luZGV4Lw==")],
    Oh = atob("bW92aWVib3g="),
    tL = atob("Y29tLnRkby5zaG93Ym94"),
    Rh = [atob("bWJwaW1hZ2VzLmNodWF4aW4uY29t"), atob("aW1hZ2VzLnNoZWd1Lm5ldA==")],
    rL = "https://www.showbox.media";

function nL(e) {
    return Gt.TripleDES.encrypt(e, Gt.enc.Utf8.parse(Uy), {
        iv: Gt.enc.Utf8.parse(eL)
    }).toString()
}

function aL(e, t, r) {
    return e ? Gt.MD5(Gt.MD5(t).toString() + r + e).toString() : null
}
const iL = qv("1234567890abcdef"),
    sL = () => Math.floor(Date.now() / 1e3 + 60 * 60 * 12),
    Tl = async (e, t, r = !1) => {
        const n = {
                childmode: "0",
                app_version: "11.5",
                appid: tL,
                lang: "en",
                expired_date: `${sL()}`,
                platform: "android",
                channel: "Website"
            },
            a = nL(JSON.stringify({
                ...n,
                ...t
            })),
            i = Gt.MD5(Oh).toString(),
            s = aL(a, Oh, Uy),
            o = JSON.stringify({
                app_key: i,
                verify: s,
                encrypt_data: a
            }),
            u = btoa(o),
            c = new URLSearchParams;
        c.append("data", u), c.append("appid", "27"), c.append("platform", "android"), c.append("version", "129"), c.append("medium", "Website"), c.append("token", iL(32));
        const l = r ? Ah[1] : Ah[0],
            f = await e.proxiedFetcher(l, {
                method: "POST",
                headers: {
                    Platform: "android",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": "okhttp/3.2.0"
                },
                body: c
            });
        return JSON.parse(f)
    };
async function My(e, t, r, n, a, i) {
    const o = {
            fid: r,
            uid: "",
            module: n === "movie" ? "Movie_srt_list_v2" : "TV_srt_list_v2",
            mid: n === "movie" ? t : void 0,
            tid: n !== "movie" ? t : void 0,
            episode: a == null ? void 0 : a.toString(),
            season: i == null ? void 0 : i.toString()
        },
        c = (await Tl(e, o)).data.list;
    let l = [];
    return c.forEach(f => {
        const d = f.subtitles.sort((y, A) => A.order - y.order)[0];
        if (!d) return;
        const h = d.file_path.replace(Rh[0], Rh[1]).replace(/\s/g, "+").replace(/[()]/g, y => `%${y.charCodeAt(0).toString(16)}`),
            p = Qr(h);
        !p || !Z2(d.lang) || l.push({
            id: h,
            language: d.lang,
            hasCorsRestrictions: !0,
            type: p,
            url: h
        })
    }), l = jy(l), l
}

function oL(e) {
    return new URL(e).pathname.split("/")[2]
}
const uL = le({
        id: "febbox-hls",
        name: "Febbox (HLS)",
        rank: 160,
        disabled: !0,
        async scrape(e) {
            var t;
            const {
                type: r,
                id: n,
                season: a,
                episode: i
            } = Dy(e.url), s = await e.proxiedFetcher("/index/share_link", {
                baseUrl: rL,
                query: {
                    id: n,
                    type: r === "movie" ? "1" : "2"
                }
            });
            if (!((t = s == null ? void 0 : s.data) != null && t.link)) throw new Error("No embed url found");
            e.progress(30);
            const o = oL(s.data.link),
                c = (await J2(e, o, r, a, i))[0];
            if (!c) throw new Error("No playable mp4 stream found");
            return e.progress(70), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    flags: [],
                    captions: await My(e, n, c.fid, r, a, i),
                    playlist: `https://www.febbox.com/hls/main/${c.oss_fid}.m3u8`
                }]
            }
        }
    }),
    By = ["360", "480", "720", "1080", "4k"];

function cL(e) {
    const t = e.real_quality.replace("p", "").toLowerCase();
    return By.includes(t) ? {
        real_quality: t,
        path: e.path,
        fid: e.fid
    } : null
}
async function lL(e, t) {
    var r;
    const n = (await Tl(e, t)).data,
        a = n.list.map(s => cL(s)).filter(s => !!s),
        i = {};
    return By.forEach(s => {
        const o = a.find(u => u.real_quality === s && u.path);
        o && (i[s] = {
            type: "mp4",
            url: o.path
        })
    }), {
        qualities: i,
        fid: (r = n.list[0]) == null ? void 0 : r.fid
    }
}
const Vy = le({
        id: "febbox-mp4",
        name: "Febbox (MP4)",
        rank: 190,
        async scrape(e) {
            const {
                type: t,
                id: r,
                season: n,
                episode: a
            } = Dy(e.url);
            let i = null;
            if (t === "movie" ? i = {
                    uid: "",
                    module: "Movie_downloadurl_v3",
                    mid: r,
                    oss: "1",
                    group: ""
                } : t === "show" && (i = {
                    uid: "",
                    module: "TV_downloadurl_v3",
                    tid: r,
                    season: n,
                    episode: a,
                    oss: "1",
                    group: ""
                }), !i) throw Error("Incorrect type");
            const {
                qualities: s,
                fid: o
            } = await lL(e, i);
            if (o === void 0) throw new Error("No streamable file found");
            return e.progress(70), {
                stream: [{
                    id: "primary",
                    captions: await My(e, r, o, t, a, n),
                    qualities: s,
                    type: "file",
                    flags: [Z.CORS_ALLOWED]
                }]
            }
        }
    }),
    fL = /(eval\(function\(p,a,c,k,e,d\){.*{}\)\))/,
    dL = /MDCore\.wurl="(.*?)";/,
    zy = le({
        id: "mixdrop",
        name: "MixDrop",
        rank: 198,
        async scrape(e) {
            const r = (await e.proxiedFetcher(e.url)).match(fL);
            if (!r) throw new Error("failed to find packed mixdrop JavaScript");
            const a = fa(r[1]).match(dL);
            if (!a) throw new Error("failed to find packed mixdrop source link");
            const i = a[1];
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: i.startsWith("http") ? i : `https:${i}`,
                            headers: {
                                Referer: "https://mixdrop.co/"
                            }
                        }
                    }
                }]
            }
        }
    }),
    qy = le({
        id: "mp4upload",
        name: "mp4upload",
        rank: 170,
        async scrape(e) {
            const t = await e.proxiedFetcher(e.url),
                r = new RegExp('(?<=player\\.src\\()\\s*{\\s*type:\\s*"[^"]+",\\s*src:\\s*"([^"]+)"\\s*}\\s*(?=\\);)', "s"),
                a = (t.match(r) ?? [])[1];
            if (!a) throw new Error("Stream url not found in embed code");
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [Z.CORS_ALLOWED],
                    captions: [],
                    qualities: {
                        1080: {
                            type: "mp4",
                            url: a
                        }
                    }
                }]
            }
        }
    }),
    hL = /eval\(function\(h,u,n,t,e,r\).*?\("(.*?)",\d*?,"(.*?)",(\d*?),(\d*?),\d*?\)\)/,
    pL = /file:"(.*?)"/;

function mL(e, t, r, n) {
    const a = t[n];
    return e.split(a).filter(o => o).map(o => {
        const u = o.split("").reduceRight((c, l, f) => c + t.indexOf(l) * n ** (o.length - 1 - f), 0);
        return String.fromCharCode(u - r)
    }).join("")
}
const Wy = le({
    id: "streambucket",
    name: "StreamBucket",
    rank: 196,
    disabled: !0,
    async scrape(e) {
        const r = await (await fetch(e.url)).text();
        if (r.includes("captcha-checkbox")) throw new Error("StreamBucket got captchaed");
        let n = r.match(hL);
        if (!n) throw new Error("Failed to find StreamBucket hunter JavaScript");
        const a = n[1],
            i = n[2],
            s = Number(n[3]),
            o = Number(n[4]);
        if (Number.isNaN(s)) throw new Error("StreamBucket hunter JavaScript charCodeOffset is not a valid number");
        if (Number.isNaN(o)) throw new Error("StreamBucket hunter JavaScript delimiterOffset is not a valid number");
        if (n = mL(a, i, s, o).match(pL), !n) throw new Error("Failed to find StreamBucket HLS link");
        return {
            stream: [{
                id: "primary",
                type: "hls",
                playlist: n[1],
                flags: [Z.CORS_ALLOWED],
                captions: []
            }]
        }
    }
});
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Gy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function gL(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var a = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, a.get ? a : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), r
}
var Hy = {
    exports: {}
};

function vL(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Vo = {
    exports: {}
};
const yL = {},
    bL = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wL = gL(bL);
var _h;

function Ky() {
    return _h || (_h = 1, function(e, t) {
        (function(r, n) {
            e.exports = n()
        })(Er, function() {
            var r = r || function(n, a) {
                var i;
                if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof Er < "u" && Er.crypto && (i = Er.crypto), !i && typeof vL == "function") try {
                    i = wL
                } catch {}
                var s = function() {
                        if (i) {
                            if (typeof i.getRandomValues == "function") try {
                                return i.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                            if (typeof i.randomBytes == "function") try {
                                return i.randomBytes(4).readInt32LE()
                            } catch {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    },
                    o = Object.create || function() {
                        function m() {}
                        return function(R) {
                            var N;
                            return m.prototype = R, N = new m, m.prototype = null, N
                        }
                    }(),
                    u = {},
                    c = u.lib = {},
                    l = c.Base = function() {
                        return {
                            extend: function(m) {
                                var R = o(this);
                                return m && R.mixIn(m), (!R.hasOwnProperty("init") || this.init === R.init) && (R.init = function() {
                                    R.$super.init.apply(this, arguments)
                                }), R.init.prototype = R, R.$super = this, R
                            },
                            create: function() {
                                var m = this.extend();
                                return m.init.apply(m, arguments), m
                            },
                            init: function() {},
                            mixIn: function(m) {
                                for (var R in m) m.hasOwnProperty(R) && (this[R] = m[R]);
                                m.hasOwnProperty("toString") && (this.toString = m.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(),
                    f = c.WordArray = l.extend({
                        init: function(m, R) {
                            m = this.words = m || [], R != a ? this.sigBytes = R : this.sigBytes = m.length * 4
                        },
                        toString: function(m) {
                            return (m || h).stringify(this)
                        },
                        concat: function(m) {
                            var R = this.words,
                                N = m.words,
                                x = this.sigBytes,
                                j = m.sigBytes;
                            if (this.clamp(), x % 4)
                                for (var D = 0; D < j; D++) {
                                    var M = N[D >>> 2] >>> 24 - D % 4 * 8 & 255;
                                    R[x + D >>> 2] |= M << 24 - (x + D) % 4 * 8
                                } else
                                    for (var k = 0; k < j; k += 4) R[x + k >>> 2] = N[k >>> 2];
                            return this.sigBytes += j, this
                        },
                        clamp: function() {
                            var m = this.words,
                                R = this.sigBytes;
                            m[R >>> 2] &= 4294967295 << 32 - R % 4 * 8, m.length = n.ceil(R / 4)
                        },
                        clone: function() {
                            var m = l.clone.call(this);
                            return m.words = this.words.slice(0), m
                        },
                        random: function(m) {
                            for (var R = [], N = 0; N < m; N += 4) R.push(s());
                            return new f.init(R, m)
                        }
                    }),
                    d = u.enc = {},
                    h = d.Hex = {
                        stringify: function(m) {
                            for (var R = m.words, N = m.sigBytes, x = [], j = 0; j < N; j++) {
                                var D = R[j >>> 2] >>> 24 - j % 4 * 8 & 255;
                                x.push((D >>> 4).toString(16)), x.push((D & 15).toString(16))
                            }
                            return x.join("")
                        },
                        parse: function(m) {
                            for (var R = m.length, N = [], x = 0; x < R; x += 2) N[x >>> 3] |= parseInt(m.substr(x, 2), 16) << 24 - x % 8 * 4;
                            return new f.init(N, R / 2)
                        }
                    },
                    p = d.Latin1 = {
                        stringify: function(m) {
                            for (var R = m.words, N = m.sigBytes, x = [], j = 0; j < N; j++) {
                                var D = R[j >>> 2] >>> 24 - j % 4 * 8 & 255;
                                x.push(String.fromCharCode(D))
                            }
                            return x.join("")
                        },
                        parse: function(m) {
                            for (var R = m.length, N = [], x = 0; x < R; x++) N[x >>> 2] |= (m.charCodeAt(x) & 255) << 24 - x % 4 * 8;
                            return new f.init(N, R)
                        }
                    },
                    v = d.Utf8 = {
                        stringify: function(m) {
                            try {
                                return decodeURIComponent(escape(p.stringify(m)))
                            } catch {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(m) {
                            return p.parse(unescape(encodeURIComponent(m)))
                        }
                    },
                    y = c.BufferedBlockAlgorithm = l.extend({
                        reset: function() {
                            this._data = new f.init, this._nDataBytes = 0
                        },
                        _append: function(m) {
                            typeof m == "string" && (m = v.parse(m)), this._data.concat(m), this._nDataBytes += m.sigBytes
                        },
                        _process: function(m) {
                            var R, N = this._data,
                                x = N.words,
                                j = N.sigBytes,
                                D = this.blockSize,
                                M = D * 4,
                                k = j / M;
                            m ? k = n.ceil(k) : k = n.max((k | 0) - this._minBufferSize, 0);
                            var G = k * D,
                                F = n.min(G * 4, j);
                            if (G) {
                                for (var _ = 0; _ < G; _ += D) this._doProcessBlock(x, _);
                                R = x.splice(0, G), N.sigBytes -= F
                            }
                            return new f.init(R, F)
                        },
                        clone: function() {
                            var m = l.clone.call(this);
                            return m._data = this._data.clone(), m
                        },
                        _minBufferSize: 0
                    });
                c.Hasher = y.extend({
                    cfg: l.extend(),
                    init: function(m) {
                        this.cfg = this.cfg.extend(m), this.reset()
                    },
                    reset: function() {
                        y.reset.call(this), this._doReset()
                    },
                    update: function(m) {
                        return this._append(m), this._process(), this
                    },
                    finalize: function(m) {
                        m && this._append(m);
                        var R = this._doFinalize();
                        return R
                    },
                    blockSize: 16,
                    _createHelper: function(m) {
                        return function(R, N) {
                            return new m.init(N).finalize(R)
                        }
                    },
                    _createHmacHelper: function(m) {
                        return function(R, N) {
                            return new A.HMAC.init(m, N).finalize(R)
                        }
                    }
                });
                var A = u.algo = {};
                return u
            }(Math);
            return r
        })
    }(Vo)), Vo.exports
}(function(e, t) {
    (function(r, n) {
        e.exports = n(Ky())
    })(Er, function(r) {
        return function() {
            var n = r,
                a = n.lib,
                i = a.WordArray,
                s = n.enc;
            s.Base64 = {
                stringify: function(u) {
                    var c = u.words,
                        l = u.sigBytes,
                        f = this._map;
                    u.clamp();
                    for (var d = [], h = 0; h < l; h += 3)
                        for (var p = c[h >>> 2] >>> 24 - h % 4 * 8 & 255, v = c[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, y = c[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, A = p << 16 | v << 8 | y, m = 0; m < 4 && h + m * .75 < l; m++) d.push(f.charAt(A >>> 6 * (3 - m) & 63));
                    var R = f.charAt(64);
                    if (R)
                        for (; d.length % 4;) d.push(R);
                    return d.join("")
                },
                parse: function(u) {
                    var c = u.length,
                        l = this._map,
                        f = this._reverseMap;
                    if (!f) {
                        f = this._reverseMap = [];
                        for (var d = 0; d < l.length; d++) f[l.charCodeAt(d)] = d
                    }
                    var h = l.charAt(64);
                    if (h) {
                        var p = u.indexOf(h);
                        p !== -1 && (c = p)
                    }
                    return o(u, c, f)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };

            function o(u, c, l) {
                for (var f = [], d = 0, h = 0; h < c; h++)
                    if (h % 4) {
                        var p = l[u.charCodeAt(h - 1)] << h % 4 * 2,
                            v = l[u.charCodeAt(h)] >>> 6 - h % 4 * 2,
                            y = p | v;
                        f[d >>> 2] |= y << 24 - d % 4 * 8, d++
                    } return i.create(f, d)
            }
        }(), r.enc.Base64
    })
})(Hy);
var EL = Hy.exports;
const SL = Gy(EL);
var Xy = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n(Ky())
    })(Er, function(r) {
        return r.enc.Utf8
    })
})(Xy);
var $L = Xy.exports;
const AL = Gy($L);
async function OL(e, t, r) {
    const n = SL.stringify(AL.parse(t)).replace(/=/g, "."),
        a = await e.proxiedFetcher("https://www.google.com/recaptcha/api.js", {
            query: {
                render: r
            }
        }),
        i = a.substring(a.indexOf("/releases/") + 10, a.indexOf("/recaptcha__en.js")),
        s = await e.proxiedFetcher("https://www.google.com/recaptcha/api2/anchor?cb=1&hl=en&size=invisible&cb=flicklax", {
            query: {
                k: r,
                co: n,
                v: i
            }
        }),
        o = H(s)("#recaptcha-token").attr("value");
    if (!o) throw new Error("Unable to find cToken");
    const c = (await e.proxiedFetcher("https://www.google.com/recaptcha/api2/reload", {
        query: {
            v: i,
            reason: "q",
            k: r,
            c: o,
            sa: "",
            co: t
        },
        headers: {
            referer: "https://www.google.com/recaptcha/api2/"
        },
        method: "POST"
    })).match('rresp","(.+?)"');
    return c ? c[1] : null
}
const Yy = le({
        id: "streamsb",
        name: "StreamSB",
        rank: 150,
        async scrape(e) {
            const t = e.url.replace(".html", "").replace("embed-", "").replace("e/", "").replace("d/", ""),
                r = new URL(t),
                n = await e.proxiedFetcher(`${r.origin}/d${r.pathname}`);
            e.progress(20);
            const a = H(n),
                i = [];
            a("[onclick^=download_video]").each((u, c) => {
                const l = a(c),
                    f = l.attr("onclick"),
                    h = /download_video\('(.+?)','(.+?)','(.+?)'\)/.exec(f ?? "");
                if (!h) return;
                const p = l.find("span").text(),
                    y = /(.+?) \((.+?)\)/.exec(p ?? "");
                y && i.push({
                    parameters: [h[1], h[2], h[3]],
                    quality: {
                        label: y[1].trim(),
                        size: y[2]
                    }
                })
            }), e.progress(40);
            let s = await Promise.all(i.map(async u => {
                const c = {
                        op: "download_orig",
                        id: u.parameters[0],
                        mode: u.parameters[1],
                        hash: u.parameters[2]
                    },
                    l = await e.proxiedFetcher("/dl", {
                        query: c,
                        baseUrl: r.origin
                    }),
                    d = H(l)(".g-recaptcha").attr("data-sitekey");
                if (!d) throw new Error("Unable to get captcha key");
                const h = await OL(e, r.origin, d);
                if (!h) throw new Error("Unable to get captcha token");
                const p = new Cl;
                p.append("op", "download_orig"), p.append("id", u.parameters[0]), p.append("mode", u.parameters[1]), p.append("hash", u.parameters[2]), p.append("g-recaptcha-response", h);
                const v = await e.proxiedFetcher("/dl", {
                        method: "POST",
                        baseUrl: r.origin,
                        body: p,
                        query: c
                    }),
                    y = H(v)(".btn.btn-light.btn-lg").attr("href");
                return {
                    quality: u.quality.label,
                    url: y
                }
            }));
            s = s.filter(u => !!u.url), e.progress(80);
            const o = s.reduce((u, c) => (u[c.quality] = {
                type: "mp4",
                url: c.url
            }, u), {});
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [Z.CORS_ALLOWED],
                    qualities: o,
                    captions: []
                }]
            }
        }
    }),
    RL = "https://rabbitstream.net",
    _L = "https://rabbitstream.net/",
    {
        AES: CL,
        enc: NL
    } = Gt;

function xL(e) {
    try {
        return JSON.parse(e), !0
    } catch {
        return !1
    }
}

function TL(e) {
    const t = e.lastIndexOf("switch"),
        r = e.indexOf("partKeyStartPosition"),
        n = e.slice(t, r),
        a = [],
        i = n.matchAll(/:[a-zA-Z0-9]+=([a-zA-Z0-9]+),[a-zA-Z0-9]+=([a-zA-Z0-9]+);/g);
    for (const s of i) {
        const o = [];
        for (const u of [s[1], s[2]]) {
            const c = new RegExp(`${u}=0x([a-zA-Z0-9]+)`, "g"),
                l = [...e.matchAll(c)],
                f = l[l.length - 1];
            if (!f) return null;
            const d = parseInt(f[1], 16);
            o.push(d)
        }
        a.push([o[0], o[1]])
    }
    return a
}
const mt = le({
        id: "upcloud",
        name: "UpCloud",
        rank: 200,
        async scrape(e) {
            const t = new URL(e.url.replace("embed-5", "embed-4")),
                r = t.pathname.split("/"),
                n = r[r.length - 1],
                a = await e.proxiedFetcher(`${t.origin}/ajax/embed-4/getSources?id=${n}`, {
                    headers: {
                        Referer: t.origin,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
            let i = null;
            if (!xL(a.sources)) {
                const o = await e.proxiedFetcher("https://rabbitstream.net/js/player/prod/e4-player.min.js", {
                        query: {
                            v: Date.now().toString()
                        }
                    }),
                    u = TL(o);
                if (!u) throw new Error("Key extraction failed");
                let c = "",
                    l = a.sources,
                    f = 0;
                u.forEach(([p, v]) => {
                    const y = p + f,
                        A = y + v;
                    c += a.sources.slice(y, A), l = l.replace(a.sources.substring(y, A), ""), f += v
                });
                const d = CL.decrypt(l, c).toString(NL.Utf8),
                    h = JSON.parse(d)[0];
                if (!h) throw new Error("No stream found");
                i = h
            }
            if (!i) throw new Error("upcloud source not found");
            const s = [];
            return a.tracks.forEach(o => {
                if (o.kind !== "captions") return;
                const u = Qr(o.file);
                if (!u) return;
                const c = Zr(o.label);
                c && s.push({
                    id: o.file,
                    language: c,
                    hasCorsRestrictions: !1,
                    type: u,
                    url: o.file
                })
            }), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: i.file,
                    flags: [Z.CORS_ALLOWED],
                    captions: s,
                    preferredHeaders: {
                        Referer: _L,
                        Origin: RL
                    }
                }]
            }
        }
    }),
    IL = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/,
    PL = /sources:\[{file:"(.*?)"/,
    Jy = le({
        id: "upstream",
        name: "UpStream",
        rank: 199,
        async scrape(e) {
            const r = (await e.proxiedFetcher(e.url)).match(IL);
            if (r) {
                const a = fa(r[1]).match(PL);
                if (a) return {
                    stream: [{
                        id: "primary",
                        type: "hls",
                        playlist: a[1],
                        flags: [Z.CORS_ALLOWED],
                        captions: []
                    }]
                }
            }
            throw new Error("upstream source not found")
        }
    }),
    kL = /file:"(.*?)"/,
    LL = /var pass_path = "(.*set_pass\.php.*)";/;

function Qy(e) {
    const t = e.replace(/\/@#@\/[^=/]+==/g, "");
    return t.match(/\/@#@\/[^=/]+==/) ? Qy(t) : t
}
const Zy = le({
        id: "vidsrcembed",
        name: "VidSrc",
        rank: 197,
        async scrape(e) {
            var t, r, n;
            const a = await e.proxiedFetcher(e.url, {
                headers: {
                    referer: e.url
                }
            });
            let i = (r = (t = a.match(kL)) == null ? void 0 : t[1]) == null ? void 0 : r.slice(2);
            if (!i) throw new Error("Unable to find HLS playlist");
            i = Qy(i);
            const s = atob(i);
            if (!s.includes(".m3u8")) throw new Error("Unable to find HLS playlist");
            let o = (n = a.match(LL)) == null ? void 0 : n[1];
            if (!o) throw new Error("Unable to find set_pass.php link");
            return o.startsWith("//") && (o = `https:${o}`), await e.proxiedFetcher(o, {
                headers: {
                    referer: e.url
                }
            }), {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: s,
                    flags: [Z.CORS_ALLOWED],
                    captions: []
                }]
            }
        }
    }),
    Ii = le({
        id: "vidcloud",
        name: "VidCloud",
        rank: 201,
        async scrape(e) {
            return {
                stream: (await mt.scrape(e)).stream.map(r => ({
                    ...r,
                    flags: []
                }))
            }
        }
    }),
    Cr = "https://flixhq.to";
async function ka(e, t) {
    return (await e.proxiedFetcher(`/ajax/sources/${t}`, {
        baseUrl: Cr
    })).link
}
async function FL(e, t, r) {
    const n = r.split("-"),
        a = n[n.length - 1],
        i = await e.proxiedFetcher(`/ajax/movie/episodes/${a}`, {
            baseUrl: Cr
        }),
        s = H(i);
    return s(".nav-item > a").toArray().map(u => {
        const c = s(u),
            l = c.attr("title"),
            f = c.attr("data-linkid");
        if (!l || !f) throw new Error("invalid sources");
        return {
            embed: l,
            episodeId: f
        }
    })
}
async function DL(e, t, r) {
    var n, a;
    const i = r.split("-"),
        s = i[i.length - 1],
        o = await e.proxiedFetcher(`/ajax/season/list/${s}`, {
            baseUrl: Cr
        }),
        u = H(o),
        c = (n = u(".dropdown-item").toArray().find(y => u(y).text() === `Season ${t.season.number}`)) == null ? void 0 : n.attribs["data-id"];
    if (!c) throw new q("season not found");
    const l = await e.proxiedFetcher(`/ajax/season/episodes/${c}`, {
            baseUrl: Cr
        }),
        f = H(l),
        d = (a = f(".nav-item > a").toArray().map(y => ({
            id: f(y).attr("data-id"),
            title: f(y).attr("title")
        })).find(y => {
            var A;
            return (A = y.title) == null ? void 0 : A.startsWith(`Eps ${t.episode.number}`)
        })) == null ? void 0 : a.id;
    if (!d) throw new q("episode not found");
    const h = await e.proxiedFetcher(`/ajax/episode/servers/${d}`, {
            baseUrl: Cr
        }),
        p = H(h);
    return p(".nav-item > a").toArray().map(y => {
        const A = p(y),
            m = A.attr("title"),
            R = A.attr("data-id");
        if (!m || !R) throw new Error("invalid sources");
        return {
            embed: m,
            episodeId: R
        }
    })
}

function Ch(e) {
    return e.trim().toLowerCase().replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_")
}

function Ps(e, t) {
    return Ch(e) === Ch(t)
}

function Qt(e, t, r) {
    const n = r === void 0 ? !0 : e.releaseYear === r;
    return Ps(e.title, t) && n
}
async function Nh(e, t) {
    const r = await e.proxiedFetcher(`/search/${t.title.replaceAll(/[^a-z0-9A-Z]/g,"-")}`, {
            baseUrl: Cr
        }),
        n = H(r),
        i = n(".film_list-wrap > div.flw-item").toArray().map(s => {
            var o;
            const u = n(s),
                c = (o = u.find("div.film-poster > a").attr("href")) == null ? void 0 : o.slice(1),
                l = u.find("div.film-detail > h2 > a").attr("title"),
                f = u.find("div.film-detail > div.fd-infor > span:nth-child(1)").text(),
                d = f.includes("SS") ? f.split("SS")[1] : "0";
            return !c || !l || !f ? null : {
                id: c,
                title: l,
                year: parseInt(f, 10),
                seasons: parseInt(d, 10)
            }
        }).find(s => s ? t.type === "movie" ? Qt(t, s.title, s.year) : Ps(t.title, s.title) && t.season.number < s.seasons + 1 : !1);
    return i ? i.id : null
}
const jL = Pe({
    id: "flixhq",
    name: "FlixHQ",
    rank: 100,
    flags: [Z.CORS_ALLOWED],
    async scrapeMovie(e) {
        const t = await Nh(e, e.media);
        if (!t) throw new q("no search results match");
        const r = await FL(e, e.media, t),
            n = [];
        for (const a of r) a.embed.toLowerCase() === "upcloud" ? n.push({
            embedId: mt.id,
            url: await ka(e, a.episodeId)
        }) : a.embed.toLowerCase() === "vidcloud" && n.push({
            embedId: Ii.id,
            url: await ka(e, a.episodeId)
        });
        return {
            embeds: n
        }
    },
    async scrapeShow(e) {
        const t = await Nh(e, e.media);
        if (!t) throw new q("no search results match");
        const r = await DL(e, e.media, t),
            n = [];
        for (const a of r) a.embed.toLowerCase() === "server upcloud" ? n.push({
            embedId: mt.id,
            url: await ka(e, a.episodeId)
        }) : a.embed.toLowerCase() === "server vidcloud" && n.push({
            embedId: Ii.id,
            url: await ka(e, a.episodeId)
        });
        return {
            embeds: n
        }
    }
});
async function xh(e, t) {
    const r = H(t)('a[title*="upcloud" i]'),
        n = (r == null ? void 0 : r.attr("data-id")) ?? (r == null ? void 0 : r.attr("data-linkid"));
    if (!n) throw new q("Upcloud source not available");
    const a = await e.proxiedFetcher(`/ajax/sources/${n}`, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        baseUrl: Mt
    });
    if (!a.link || a.type !== "iframe") throw new q("No upcloud stream found");
    return a
}
const Mt = "https://gomovies.sx",
    UL = Pe({
        id: "gomovies",
        name: "GOmovies",
        rank: 110,
        flags: [Z.CORS_ALLOWED],
        async scrapeShow(e) {
            var t;
            const r = await e.proxiedFetcher("/ajax/search", {
                    method: "POST",
                    body: new URLSearchParams({
                        keyword: e.media.title
                    }),
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: Mt
                }),
                n = H(r),
                s = n("a.nav-item").toArray().map(x => {
                    var j, D;
                    const M = (j = n(x).find("h3.film-name")) == null ? void 0 : j.text(),
                        k = (D = n(x).find("div.film-infor span:first-of-type")) == null ? void 0 : D.text(),
                        G = n(x).attr("href");
                    return {
                        name: M,
                        year: k,
                        path: G
                    }
                }).find(x => x.name === e.media.title);
            if (!(s != null && s.path)) throw new q("Media not found");
            let o = (t = s.path.split("-").pop()) == null ? void 0 : t.replace("/", "");
            const u = await e.proxiedFetcher(`/ajax/v2/tv/seasons/${o}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: Mt
                }),
                l = H(u)(".ss-item").toArray().map(x => ({
                    number: H(x).text().replace("Season ", ""),
                    dataId: x.attribs["data-id"]
                })),
                f = e.media.season.number,
                d = l.find(x => +x.number === f);
            if (!d) throw new q("Season not found");
            const h = await e.proxiedFetcher(`/ajax/v2/season/episodes/${d.dataId}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: Mt
                }),
                p = H(h),
                y = p(".eps-item").toArray().map(x => ({
                    dataId: x.attribs["data-id"],
                    number: p(x).find("strong").text().replace("Eps", "").replace(":", "").trim()
                })),
                A = e.media.episode.number,
                m = y.find(x => x.number ? +x.number === A : !1);
            if (!(m != null && m.dataId)) throw new q("Episode not found");
            o = m.dataId;
            const R = await e.proxiedFetcher(`ajax/v2/episode/servers/${o}`, {
                    baseUrl: Mt,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }),
                N = await xh(e, R);
            return {
                embeds: [{
                    embedId: mt.id,
                    url: N.link
                }]
            }
        },
        async scrapeMovie(e) {
            var t;
            const r = await e.proxiedFetcher("ajax/search", {
                    method: "POST",
                    body: new URLSearchParams({
                        keyword: e.media.title
                    }),
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: Mt
                }),
                n = H(r),
                s = n("a.nav-item").toArray().map(l => {
                    var f, d;
                    const h = (f = n(l).find("h3.film-name")) == null ? void 0 : f.text(),
                        p = (d = n(l).find("div.film-infor span:first-of-type")) == null ? void 0 : d.text(),
                        v = n(l).attr("href");
                    return {
                        name: h,
                        year: p,
                        path: v
                    }
                }).find(l => l.name === e.media.title && l.year === e.media.releaseYear.toString());
            if (!(s != null && s.path)) throw new q("Media not found");
            const o = (t = s.path.split("-").pop()) == null ? void 0 : t.replace("/", ""),
                u = await e.proxiedFetcher(`ajax/movie/episodes/${o}`, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    baseUrl: Mt
                }),
                c = await xh(e, u);
            return {
                embeds: [{
                    embedId: mt.id,
                    url: c.link
                }]
            }
        }
    }),
    Pi = "https://kissasian.sh",
    ML = [{
        type: qy.id,
        id: "mp"
    }, {
        type: Yy.id,
        id: "sb"
    }];
async function Th(e, t) {
    let r = await Promise.all(ML.map(async n => {
        if (!t.url) throw new q("Episode not found");
        const a = await e.proxiedFetcher(`${t.url}&s=${n.id}`, {
                baseUrl: Pi,
                headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "en-US,en;q=0.9",
                    "cache-control": "no-cache",
                    pragma: "no-cache",
                    "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"macOS"',
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "cross-site",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1",
                    cookie: "__rd=; ASP.NET_SessionId=jwnl2kmlw5h4mfdaxvpk30q0; k_token=OKbJDFNx3rUtaw7iAA6UxMKSJb79lgZ2X2rVC9aupJhycYQKVSLaW1y2B4K%2f%2fo3i6BuzhXgfkJGmKlKH6LpNlKPPpZUk31n9DapfMdJgjlLExgrPS3jpSKwGnNUI%2bOpNpZu9%2fFnkLZRxvVKCa8APMxrck1tYkKXWqfyJJh8%2b7hQTI1wfAOU%2fLEouHhtQGL%2fReTzElw2LQ0XSL1pjs%2fkWW3rM3of2je7Oo13I%2f7olLFuiJUVWyNbn%2fYKSgNrm%2bQ3p"
                }
            }),
            s = H(a)("#my_video_1").attr("src");
        if (!s) throw new Error("Embed not found");
        return {
            embedId: n.id,
            url: s
        }
    }));
    return r = r.filter(n => !!n.url), r
}

function Ih(e) {
    return e(".episodeSub").toArray().map(r => {
        var n;
        const a = (n = e(r).find(".episodeSub a").text().split("Episode")[1]) == null ? void 0 : n.trim(),
            i = e(r).find(".episodeSub a").attr("href");
        return {
            number: a,
            url: i
        }
    }).filter(r => !!r.url)
}
async function Ph(e, t, r) {
    const n = new Cl;
    n.append("keyword", `${t} ${r??""}`.trim()), n.append("type", "Drama");
    const a = await e.proxiedFetcher("/Search/SearchSuggest", {
            baseUrl: Pi,
            method: "POST",
            body: n
        }),
        i = H(a);
    return Array.from(i("a")).map(s => ({
        name: i(s).text(),
        url: s.attribs.href
    }))
}
const BL = Pe({
    id: "kissasian",
    name: "KissAsian",
    rank: 130,
    flags: [Z.CORS_ALLOWED],
    disabled: !0,
    async scrapeShow(e) {
        const t = e.media.season.number,
            r = e.media.episode.number,
            n = await Ph(e, e.media.title, t),
            a = n.find(l => {
                var f;
                return ((f = l.name) == null ? void 0 : f.toLowerCase()) === e.media.title.toLowerCase()
            }) ?? n[0];
        if (!a) throw new q("Drama not found");
        e.progress(30);
        const i = await e.proxiedFetcher(a.url, {
                baseUrl: Pi
            }),
            s = H(i),
            u = (await Ih(s)).find(l => l.number === `${r}`);
        if (!(u != null && u.url)) throw new q("Episode not found");
        return e.progress(70), {
            embeds: await Th(e, u)
        }
    },
    async scrapeMovie(e) {
        const t = await Ph(e, e.media.title, void 0),
            r = t.find(u => {
                var c;
                return ((c = u.name) == null ? void 0 : c.toLowerCase()) === e.media.title.toLowerCase()
            }) ?? t[0];
        if (!r) throw new q("Drama not found");
        e.progress(30);
        const n = await e.proxiedFetcher(r.url, {
                baseUrl: Pi
            }),
            a = H(n),
            s = Ih(a)[0];
        if (!(s != null && s.url)) throw new q("Episode not found");
        return e.progress(70), {
            embeds: await Th(e, s)
        }
    }
});
async function VL(e, t, r) {
    let n = "";
    return r.type === "show" ? n = "/v1/episodes/view" : r.type === "movie" && (n = "/v1/movies/view"), await e.fetcher(n, {
        baseUrl: zn,
        query: {
            expand: "streams,subtitles",
            id: t
        }
    })
}
async function zL(e, t, r) {
    const n = await VL(e, t, r),
        a = n.streams,
        i = ["auto", "1080p", "1080", "720p", "720", "480p", "480", "240p", "240", "360p", "360", "144", "144p"];
    let s = null;
    for (const u of i) a[u] && !s && (s = a[u]);
    let o = [];
    for (const u of n.subtitles) {
        const c = Zr(u.language);
        c && o.push({
            id: u.url,
            type: "vtt",
            url: `${zn}${u.url}`,
            hasCorsRestrictions: !1,
            language: c
        })
    }
    return o = jy(o), {
        playlist: s,
        captions: o
    }
}
const zn = "https://lmscript.xyz";
async function qL(e, t) {
    if (t.type === "show") return (await e.fetcher("/v1/shows", {
        baseUrl: zn,
        query: {
            "filters[q]": t.title
        }
    })).items.find(i => Qt(t, i.title, Number(i.year)));
    if (t.type === "movie") return (await e.fetcher("/v1/movies", {
        baseUrl: zn,
        query: {
            "filters[q]": t.title
        }
    })).items.find(i => Qt(t, i.title, Number(i.year)))
}
async function WL(e, t, r) {
    var n;
    let a = null;
    if (t.type === "movie") a = r.id_movie;
    else if (t.type === "show") {
        const o = (n = (await e.fetcher("/v1/shows", {
            baseUrl: zn,
            query: {
                expand: "episodes",
                id: r.id_show
            }
        })).episodes) == null ? void 0 : n.find(u => Number(u.season) === Number(t.season.number) && Number(u.episode) === Number(t.episode.number));
        o && (a = o.id)
    }
    if (a === null) throw new q("Not found");
    return await zL(e, a, t)
}
async function kh(e) {
    const t = await qL(e, e.media);
    if (!t) throw new q("Media not found");
    e.progress(30);
    const r = await WL(e, e.media, t);
    if (!r.playlist) throw new q("No video found");
    return e.progress(60), {
        embeds: [],
        stream: [{
            id: "primary",
            playlist: r.playlist,
            type: "hls",
            flags: [Z.IP_LOCKED],
            captions: r.captions
        }]
    }
}
const GL = Pe({
        id: "lookmovie",
        name: "LookMovie",
        disabled: !0,
        rank: 700,
        flags: [Z.IP_LOCKED],
        scrapeShow: kh,
        scrapeMovie: kh
    }),
    Lh = atob("aHR0cHM6Ly9mc2IuOG1ldDNkdGpmcmNxY2hjb25xcGtsd3hzeGIyb2N1bWMuc3RyZWFt"),
    Fh = "https://remotestre.am",
    La = "https://remotestre.am/",
    HL = Pe({
        id: "remotestream",
        name: "Remote Stream",
        rank: 55,
        flags: [Z.CORS_ALLOWED],
        async scrapeShow(e) {
            var t;
            const r = e.media.season.number,
                n = e.media.episode.number,
                a = `${Lh}/Shows/${e.media.tmdbId}/${r}/${n}/${n}.m3u8`;
            if (e.progress(30), !((t = (await e.proxiedFetcher.full(a, {
                    method: "GET",
                    readHeaders: ["content-type"],
                    headers: {
                        Referer: La
                    }
                })).headers.get("content-type")) != null && t.toLowerCase().includes("application/x-mpegurl"))) throw new q("No watchable item found");
            return e.progress(90), {
                embeds: [],
                stream: [{
                    id: "primary",
                    captions: [],
                    playlist: a,
                    type: "hls",
                    flags: [Z.CORS_ALLOWED],
                    preferredHeaders: {
                        Referer: La,
                        Origin: Fh
                    }
                }]
            }
        },
        async scrapeMovie(e) {
            var t;
            const r = `${Lh}/Movies/${e.media.tmdbId}/${e.media.tmdbId}.m3u8`;
            if (e.progress(30), !((t = (await e.proxiedFetcher.full(r, {
                    method: "GET",
                    readHeaders: ["content-type"],
                    headers: {
                        Referer: La
                    }
                })).headers.get("content-type")) != null && t.toLowerCase().includes("application/x-mpegurl"))) throw new q("No watchable item found");
            return e.progress(90), {
                embeds: [],
                stream: [{
                    id: "primary",
                    captions: [],
                    playlist: r,
                    type: "hls",
                    flags: [Z.CORS_ALLOWED],
                    preferredHeaders: {
                        Referer: La,
                        Origin: Fh
                    }
                }]
            }
        }
    });
async function Dh(e) {
    const t = {
            module: "Search4",
            page: "1",
            type: "all",
            keyword: e.media.title,
            pagelimit: "20"
        },
        r = (await Tl(e, t, !0)).data.list;
    e.progress(50);
    const n = r.find(o => Ps(o.title, e.media.title) && o.year === Number(e.media.releaseYear));
    if (!n) throw new q("No entry found");
    const a = n.id,
        i = e.media.type === "show" ? e.media.season.number : "",
        s = e.media.type === "show" ? e.media.episode.number : "";
    return {
        embeds: [{
            embedId: Vy.id,
            url: `/${e.media.type}/${a}/${i}/${s}`
        }]
    }
}
const KL = Pe({
        id: "showbox",
        name: "Showbox",
        rank: 400,
        flags: [Z.CORS_ALLOWED, Z.CF_BLOCKED],
        scrapeShow: Dh,
        scrapeMovie: Dh
    }),
    ni = "https://vidsrc.me",
    XL = "https://rcp.vidsrc.me";

function YL(e, t) {
    let r = "";
    const n = t.length;
    for (let a = 0; a < e.length; a += 2) {
        const i = parseInt(e.substr(a, 2), 16),
            s = t.charCodeAt(a / 2 % n);
        r += String.fromCharCode(i ^ s)
    }
    return r
}
async function eb(e, t) {
    const r = [];
    let n = await e.proxiedFetcher(t, {
            baseUrl: ni
        }),
        a = H(n);
    const i = a(".server[data-hash]").toArray().map(s => a(s).attr("data-hash")).filter(s => s !== void 0);
    for (const s of i) {
        n = await e.proxiedFetcher(`/rcp/${s}`, {
            baseUrl: XL,
            headers: {
                referer: ni
            }
        }), a = H(n);
        const o = a("#hidden").attr("data-h"),
            u = a("body").attr("data-i");
        if (!o || !u) throw new Error("Failed to find encoded iframe src");
        let c = YL(o, u);
        c.startsWith("//") && (c = `https:${c}`);
        const {
            finalUrl: l
        } = await e.proxiedFetcher.full(c, {
            method: "HEAD",
            headers: {
                referer: ni
            }
        }), f = {
            embedId: "",
            url: l
        };
        switch (new URL(l).host) {
            case "vidsrc.stream":
                f.embedId = Zy.id;
                break;
            case "streambucket.net":
                f.embedId = Wy.id;
                break;
            case "2embed.cc":
            case "www.2embed.cc":
                break;
            case "player-cdn.com":
                break;
            default:
                throw new Error(`Failed to find VidSrc embed source for ${l}`)
        }
        f.embedId !== "" && r.push(f)
    }
    return r
}
async function JL(e) {
    return eb(e, `/embed/${e.media.tmdbId}`)
}
async function QL(e) {
    const t = await e.proxiedFetcher(`/embed/${e.media.tmdbId}`, {
            baseUrl: ni
        }),
        n = H(t)(`.ep[data-s="${e.media.season.number}"][data-e="${e.media.episode.number}"]`).first();
    if (n.length === 0) throw new Error("failed to find episode element");
    const a = n.attr("data-iframe");
    if (!a) throw new Error("failed to find episode starting URL");
    return eb(e, a)
}
async function ZL(e) {
    return {
        embeds: await JL(e)
    }
}
async function eF(e) {
    return {
        embeds: await QL(e)
    }
}
const tF = Pe({
    id: "vidsrc",
    name: "VidSrc",
    rank: 120,
    flags: [Z.CORS_ALLOWED],
    scrapeMovie: ZL,
    scrapeShow: eF
});
async function rF(e, t) {
    const r = e.media.type === "movie" ? "list" : "servers",
        n = await e.proxiedFetcher(`/ajax/episode/${r}/${t}`, {
            baseUrl: en
        }),
        a = H(n);
    return a(".nav-item a").toArray().map(i => {
        const s = e.media.type === "movie" ? "data-linkid" : "data-id",
            o = a(i),
            u = o.attr("title"),
            c = o.attr(s);
        if (!u || !c) throw new Error("invalid sources");
        return {
            embed: u,
            episodeId: c
        }
    })
}
async function nF(e, t) {
    const r = await e.proxiedFetcher(`/ajax/sources/${t}`, {
        baseUrl: en
    });
    return r.type !== "iframe" ? null : r.link
}
async function aF(e, t, r) {
    const n = await e.proxiedFetcher(`/ajax/season/list/${r}`, {
            baseUrl: en
        }),
        a = H(n),
        s = a(".dropdown-menu a").toArray().map(o => {
            var u;
            const c = a(o),
                l = c.attr("data-id"),
                f = (u = c.html()) == null ? void 0 : u.split(" ")[1];
            if (!l || !f || Number.isNaN(Number(f))) throw new Error("invalid season");
            return {
                id: l,
                season: Number(f)
            }
        }).find(o => o.season === t.season.number);
    return s ? s.id : null
}
async function iF(e, t, r) {
    const n = /Eps (\d*):/,
        a = await e.proxiedFetcher(`/ajax/season/episodes/${r}`, {
            baseUrl: en
        }),
        i = H(a),
        o = i(".eps-item").toArray().map(u => {
            const c = i(u),
                l = c.attr("data-id"),
                f = c.attr("title");
            if (!l || !f) throw new Error("invalid episode");
            const d = f.match(n);
            if (!d || Number.isNaN(Number(d[1]))) throw new Error("invalid episode");
            return {
                id: l,
                episode: Number(d[1])
            }
        }).find(u => u.episode === t.episode.number);
    return o ? o.id : null
}
const en = "https://zoechip.cc";
async function sF(e, t) {
    const r = await nF(e, t.episodeId);
    if (r) {
        const n = {
            embedId: "",
            url: r
        };
        switch (new URL(r).host) {
            case "rabbitstream.net":
                n.embedId = mt.id;
                break;
            case "upstream.to":
                n.embedId = Jy.id;
                break;
            case "mixdrop.co":
                n.embedId = zy.id;
                break;
            default:
                return null
        }
        return n
    }
}
async function tb(e, t) {
    const r = await rF(e, t),
        n = [];
    for (const a of r) {
        const i = await sF(e, a);
        if (i) {
            const s = n.find(o => o.embedId === mt.id);
            i.embedId === mt.id && s && (i.embedId = Ii.id), n.push(i)
        }
    }
    return {
        embeds: n
    }
}
async function rb(e, t) {
    const r = t.title.toLocaleLowerCase().replace(/ /g, "-"),
        n = await e.proxiedFetcher(`/search/${r}`, {
            baseUrl: en
        }),
        a = H(n);
    return a(".film_list-wrap .flw-item .film-detail").toArray().map(i => {
        const s = a(i),
            o = s.find(".film-name a"),
            u = s.find(".fd-infor"),
            c = o.attr("title"),
            l = o.attr("href"),
            f = u.find(".fdi-type").html();
        let d = u.find(".fdi-item").html();
        const h = l == null ? void 0 : l.split("-").pop();
        if (!c || !l || !f) return null;
        if (!d || Number.isNaN(Number(d)))
            if (f === "TV") d = "0";
            else return null;
        return h ? {
            title: c,
            year: Number(d),
            id: h,
            type: f,
            href: l
        } : null
    })
}
async function oF(e, t) {
    const n = (await rb(e, t)).find(a => a && a.type === "Movie" && Qt(t, a.title, a.year));
    return n ? n.id : null
}
async function uF(e, t) {
    const r = /<\/strong><\/span> (\d.*)-\d.*-\d.*/,
        a = (await rb(e, t)).filter(i => i && i.type === "TV" && Qt(t, i.title));
    for (const i of a) {
        if (!i) continue;
        const o = (await e.proxiedFetcher(i.href, {
            baseUrl: en
        })).match(r);
        if (o) {
            const u = Number(o[1]);
            if (!Number.isNaN(u) && Qt(t, i.title, u)) return i.id
        }
    }
    return null
}
async function cF(e) {
    const t = await oF(e, e.media);
    if (!t) throw new q("no search results match");
    return tb(e, t)
}
async function lF(e) {
    const t = await uF(e, e.media);
    if (!t) throw new q("no search results match");
    const r = await aF(e, e.media, t);
    if (!r) throw new q("no season found");
    const n = await iF(e, e.media, r);
    if (!n) throw new q("no episode found");
    return tb(e, n)
}
const fF = Pe({
        id: "zoechip",
        name: "ZoeChip",
        rank: 200,
        flags: [Z.CORS_ALLOWED],
        scrapeMovie: cF,
        scrapeShow: lF
    }),
    dF = "https://ridomovies.tv/",
    nb = le({
        id: "closeload",
        name: "CloseLoad",
        rank: 106,
        async scrape(e) {
            var t;
            const r = new URL(e.url).origin,
                n = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: dF
                    }
                }),
                a = H(n),
                i = a("track").map((f, d) => {
                    const h = a(d),
                        p = `${r}${h.attr("src")}`,
                        v = h.attr("label") ?? "",
                        y = Zr(v),
                        A = Qr(p);
                    return !y || !A ? null : {
                        id: p,
                        language: y,
                        hasCorsRestrictions: !0,
                        type: A,
                        url: p
                    }
                }).get().filter(f => f !== null),
                s = a("script").filter((f, d) => {
                    var h;
                    const p = a(d);
                    return (p.attr("type") === "text/javascript" && ((h = p.html()) == null ? void 0 : h.includes("eval"))) ?? !1
                }).html();
            if (!s) throw new Error("Couldn't find eval code");
            const o = fa(s),
                c = (t = /var\s+(\w+)\s*=\s*"([^"]+)";/g.exec(o)) == null ? void 0 : t[2];
            if (!c) throw new q("Unable to find source url");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: atob(c),
                    captions: i,
                    flags: [Z.IP_LOCKED],
                    headers: {
                        Referer: "https://closeload.top/",
                        Origin: "https://closeload.top"
                    }
                }]
            }
        }
    }),
    hF = /eval\((.*)\)/g,
    pF = /file:"(.*?)"/g,
    mF = le({
        id: "filemoon",
        name: "Filemoon",
        rank: 400,
        scrape: async e => {
            const t = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: e.url
                    }
                }),
                r = hF.exec(t);
            if (!r) throw new Error("Failed to find eval code");
            const n = fa(r[1]),
                a = pF.exec(n);
            if (!(a != null && a[1])) throw new Error("Failed to find file");
            const s = new URL(e.url).searchParams.get("sub.info"),
                o = [];
            if (s) {
                const u = await e.proxiedFetcher(s);
                for (const c of u) {
                    const l = Zr(c.label),
                        f = Qr(c.file);
                    !l || !f || o.push({
                        id: c.file,
                        url: c.file,
                        type: f,
                        language: l,
                        hasCorsRestrictions: !1
                    })
                }
            }
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: a[1],
                    flags: [],
                    captions: o
                }]
            }
        }
    }),
    gF = "https://ridomovies.tv/",
    ab = le({
        id: "ridoo",
        name: "Ridoo",
        rank: 105,
        async scrape(e) {
            var t;
            const r = await e.proxiedFetcher(e.url, {
                    headers: {
                        referer: gF
                    }
                }),
                a = (t = /file:"([^"]+)"/g.exec(r)) == null ? void 0 : t[1];
            if (!a) throw new q("Unable to find source url");
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: a,
                    captions: [],
                    flags: [Z.CORS_ALLOWED]
                }]
            }
        }
    }),
    ib = le({
        id: "smashystream-d",
        name: "SmashyStream (D)",
        rank: 71,
        async scrape(e) {
            var t, r, n;
            const a = await e.proxiedFetcher(e.url, {
                    headers: {
                        Referer: e.url
                    }
                }),
                s = H(a)("iframe").attr("src");
            if (!s) throw new Error(`[${this.name}] failed to find iframe url`);
            const o = new URL(s),
                u = await e.proxiedFetcher(s, {
                    headers: {
                        Referer: e.url
                    }
                }),
                c = (t = u.match(/"file":"([^"]+)"/)) == null ? void 0 : t[1],
                l = (r = u.match(/"key":"([^"]+)"/)) == null ? void 0 : r[1];
            if (!c || !l) throw new Error(`[${this.name}] failed to find text file url or token`);
            const f = `${o.origin}${c}`,
                h = (n = (await e.proxiedFetcher(f, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-CSRF-TOKEN": l,
                        Referer: s
                    }
                })).find(v => v.title === "English")) == null ? void 0 : n.file;
            if (!h) throw new Error(`[${this.name}] failed to find an english playlist`);
            return {
                stream: [{
                    id: "primary",
                    playlist: await e.proxiedFetcher(`${o.origin}/playlist/${h.slice(1)}.txt`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-CSRF-TOKEN": l,
                            Referer: s
                        }
                    }),
                    type: "hls",
                    flags: [Z.CORS_ALLOWED],
                    captions: []
                }]
            }
        }
    }),
    sb = le({
        id: "smashystream-f",
        name: "SmashyStream (F)",
        rank: 70,
        async scrape(e) {
            var t;
            const r = await e.proxiedFetcher(e.url, {
                    headers: {
                        Referer: e.url
                    }
                }),
                n = ((t = r.subtitleUrls.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/g)) == null ? void 0 : t.map(a => {
                    const i = a.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/);
                    if (i) {
                        const [, s, o] = i;
                        if (s && o) {
                            const u = Zr(s),
                                c = Qr(o);
                            return !u || !c ? null : {
                                id: o,
                                url: o.replace(",", ""),
                                language: u,
                                type: c,
                                hasCorsRestrictions: !1
                            }
                        }
                    }
                    return null
                }).filter(a => a !== null)) ?? [];
            return {
                stream: [{
                    id: "primary",
                    playlist: r.sourceUrls[0],
                    type: "hls",
                    flags: [Z.CORS_ALLOWED],
                    captions: n
                }]
            }
        }
    }),
    vF = "8z5Ag5wgagfsOuhz",
    yF = e => {
        const t = e.replace(/_/g, "/").replace(/-/g, "+"),
            r = atob(t),
            n = new Uint8Array(r.length);
        for (let a = 0; a < n.length; a += 1) n[a] = r.charCodeAt(a);
        return n
    },
    ec = (e, t) => {
        const r = Array.from(Array(256).keys());
        let n = 0;
        for (let s = 0; s < 256; s += 1) {
            n = (n + r[s] + e.charCodeAt(s % e.length)) % 256;
            const o = r[s];
            r[s] = r[n], r[n] = o
        }
        n = 0;
        let a = 0,
            i = "";
        for (let s = 0; s < t.length; s += 1) {
            n = (n + 1) % 256, a = (a + r[n]) % 256;
            const o = r[n];
            r[n] = r[a], r[a] = o, typeof t[s] == "string" ? i += String.fromCharCode(t[s].charCodeAt(0) ^ r[(r[n] + r[a]) % 256]) : typeof t[s] == "number" && (i += String.fromCharCode(t[s] ^ r[(r[n] + r[a]) % 256]))
        }
        return i
    },
    bF = e => {
        const t = yF(e),
            r = ec(vF, t);
        return decodeURIComponent(decodeURIComponent(r))
    },
    Il = "https://vidplay.online",
    jh = `${Il}/`,
    wF = async e => {
        var t;
        const r = await e.proxiedFetcher("https://github.com/Ciarands/vidsrc-keys/blob/main/keys.json"),
            n = /"rawLines":\s*\[([\s\S]*?)\]/,
            a = (t = r.match(n)) == null ? void 0 : t[1];
        if (!a) throw new Error("No keys found");
        return JSON.parse(`${a.substring(1).replace(/\\"/g,'"')}]`)
    }, EF = async e => {
        const r = new URL(e.url).pathname.replace("/e/", ""),
            n = await wF(e),
            a = ec(n[0], r),
            i = ec(n[1], a);
        return btoa(i).replace("/", "_")
    }, SF = async e => {
        var t;
        const r = await EF(e),
            a = (t = (await e.proxiedFetcher("/futoken", {
                baseUrl: Il,
                headers: {
                    referer: e.url
                }
            })).match(/var\s+k\s*=\s*'([^']+)'/)) == null ? void 0 : t[1];
        if (!a) throw new Error("No fuKey found");
        const i = [];
        for (let s = 0; s < r.length; s += 1) i.push(a.charCodeAt(s % a.length) + r.charCodeAt(s));
        return `${a},${i.join(",")}`
    }, $F = async e => {
        const t = await SF(e);
        return xl(`/mediainfo/${t}`, {
            baseUrl: Il,
            query: {
                ...Object.fromEntries(new URL(e.url).searchParams.entries()),
                autostart: "true"
            }
        })
    }, AF = le({
        id: "vidplay",
        name: "VidPlay",
        rank: 401,
        scrape: async e => {
            const t = await $F(e),
                r = await e.proxiedFetcher(t, {
                    headers: {
                        referer: e.url
                    }
                });
            if (typeof r.result == "number") throw new Error("File not found");
            const n = r.result.sources[0].file,
                i = new URL(e.url).searchParams.get("sub.info"),
                s = [];
            if (i) {
                const o = await e.proxiedFetcher(i);
                for (const u of o) {
                    const c = Zr(u.label),
                        l = Qr(u.file);
                    !c || !l || s.push({
                        id: u.file,
                        url: u.file,
                        type: l,
                        language: c,
                        hasCorsRestrictions: !1
                    })
                }
            }
            return {
                stream: [{
                    id: "primary",
                    type: "hls",
                    playlist: n,
                    flags: [],
                    captions: s,
                    preferredHeaders: {
                        Referer: jh,
                        Origin: jh
                    }
                }]
            }
        }
    });

function ai(e) {
    return Object.entries(e).map(([t, r]) => Nl.serialize(t, r)).join("; ")
}

function tc(e) {
    return j2.parse(e, {
        map: !0
    })
}
const OF = le({
        id: "wootly",
        name: "wootly",
        rank: 172,
        async scrape(e) {
            var t, r;
            const n = "https://www.wootly.ch",
                a = await e.proxiedFetcher.full(e.url, {
                    method: "GET",
                    readHeaders: ["Set-Cookie"]
                }),
                s = tc(a.headers.get("Set-Cookie") || "").wootsses.value;
            let o = H(a.body);
            const u = o("iframe").attr("src") ?? "",
                c = await e.proxiedFetcher.full(u, {
                    method: "GET",
                    readHeaders: ["Set-Cookie"],
                    headers: {
                        cookie: ai({
                            wootsses: s
                        })
                    }
                }),
                f = tc(c.headers.get("Set-Cookie") || "").wooz.value,
                d = await e.proxiedFetcher(u, {
                    method: "POST",
                    body: new URLSearchParams({
                        qdf: "1"
                    }),
                    headers: {
                        cookie: ai({
                            wooz: f
                        }),
                        Referer: u
                    }
                });
            o = H(d);
            const h = o("script").html() ?? "",
                p = (t = h.match(/tk=([^;]+)/)) == null ? void 0 : t[0].replace(/tk=|["\s]/g, ""),
                v = (r = h.match(/vd=([^,]+)/)) == null ? void 0 : r[0].replace(/vd=|["\s]/g, "");
            if (!p || !v) throw new Error("wootly source not found");
            const y = await e.proxiedFetcher("/grabd", {
                baseUrl: n,
                query: {
                    t: p,
                    id: v
                },
                method: "GET",
                headers: {
                    cookie: ai({
                        wooz: f,
                        wootsses: s
                    })
                }
            });
            if (!y) throw new Error("wootly source not found");
            return {
                stream: [{
                    id: "primary",
                    type: "file",
                    flags: [Z.IP_LOCKED],
                    captions: [],
                    qualities: {
                        unknown: {
                            type: "mp4",
                            url: y
                        }
                    }
                }]
            }
        }
    }),
    ki = "https://www.goojara.to",
    zo = "https://ww1.goojara.to";
async function RF(e, t) {
    const r = await e.fetcher.full(`/${t}`, {
            baseUrl: zo,
            headers: {
                Referer: ki
            },
            readHeaders: ["Set-Cookie"],
            method: "GET"
        }),
        a = tc(r.headers.get("Set-Cookie") || "").aGooz.value,
        i = H(r.body),
        s = r.body.split("_3chk('")[1].split("'")[0],
        o = r.body.split("_3chk('")[1].split("'")[2],
        u = i("a").map((f, d) => i(d).attr("href")).get().filter(f => f && f.includes(`${zo}/go.php`)),
        c = await Promise.all(u.map(f => e.fetcher.full(f, {
            headers: {
                cookie: ai({
                    aGooz: a,
                    [s]: o
                }),
                Referer: zo
            },
            method: "GET"
        }).catch(() => null))),
        l = [];
    for (const f of c)
        if (f) {
            const d = ["wootly", "upstream", "mixdrop", "dood"].find(h => f.finalUrl.includes(h));
            d && l.push({
                embedId: d,
                url: f.finalUrl
            })
        } return l
}
let Sr;
const rc = {
    cookie: "aGooz=t9pmkdtef1b3lg3pmo1u2re816; bd9aa48e=0d7b89e8c79844e9df07a2; _b414=2151C6B12E2A88379AFF2C0DD65AC8298DEC2BF4; 9d287aaa=8f32ad589e1c4288fe152f",
    Referer: "https://www.goojara.to/"
};
async function _F(e, t) {
    Sr = await e.fetcher("/xhrr.php", {
        baseUrl: ki,
        headers: rc,
        method: "POST",
        body: new URLSearchParams({
            q: t.title
        })
    });
    const r = H(Sr),
        n = [];
    return r(".mfeed > li").each((i, s) => {
        var o;
        const u = r(s).find("strong").text(),
            c = r(s).text().match(/\((\d{4})\)/),
            l = r(s).find("div").attr("class"),
            f = l === "it" ? "show" : l === "im" ? "movie" : "",
            d = c ? c[1] : "",
            h = (o = r(s).find("a").attr("href")) == null ? void 0 : o.split("/")[3];
        if (!h) throw new q("Not found");
        t.type === f && n.push({
            title: u,
            year: d,
            slug: h,
            type: f
        })
    }), n.find(i => Qt(t, i.title, Number(i.year)))
}
async function CF(e, t, r) {
    let n = null;
    if (t.type === "movie") n = r.slug;
    else if (t.type === "show") {
        Sr = await e.fetcher(`/${r.slug}`, {
            baseUrl: ki,
            headers: rc,
            method: "GET"
        });
        const s = H(Sr)("#seon").attr("data-id");
        if (!s) throw new q("Not found");
        Sr = await e.fetcher("/xhrc.php", {
            baseUrl: ki,
            headers: rc,
            method: "POST",
            body: new URLSearchParams({
                s: t.season.number.toString(),
                t: s
            })
        });
        let o = "";
        const u = H(Sr);
        u(".seho").each((c, l) => {
            const f = u(l).find(".seep .sea").text().trim();
            if (parseInt(f, 10) === t.episode.number) {
                const d = u(l).find(".snfo h1 a").attr("href"),
                    h = d == null ? void 0 : d.match(/\/([a-zA-Z0-9]+)$/);
                if (h && h[1]) return o = h[1], !1
            }
        }), n = o
    }
    if (n === null) throw new q("Not found");
    return await RF(e, n)
}
async function Uh(e) {
    const t = await _F(e, e.media);
    if (!t) throw new q("Media not found");
    e.progress(30);
    const r = await CF(e, e.media, t);
    if ((r == null ? void 0 : r.length) === 0) throw new q("No embeds found");
    return e.progress(60), {
        embeds: r
    }
}
const NF = Pe({
        id: "goojara",
        name: "goojara",
        rank: 225,
        flags: [],
        scrapeShow: Uh,
        scrapeMovie: Uh
    }),
    yn = "https://nepu.to",
    xF = `${yn}/`,
    Mh = async e => {
        const t = await e.proxiedFetcher("/ajax/posts", {
                baseUrl: yn,
                query: {
                    q: e.media.title
                }
            }),
            n = JSON.parse(t).data.find(l => !l || e.media.type === "movie" && l.type !== "Movie" || e.media.type === "show" && l.type !== "Serie" ? !1 : Ps(e.media.title, l.name));
        if (!n) throw new q("No watchable item found");
        let a = n.url;
        e.media.type === "show" && (a = `${n.url}/season/${e.media.season.number}/episode/${e.media.episode.number}`);
        const i = await e.proxiedFetcher(a, {
                baseUrl: yn
            }),
            o = H(i)("a[data-embed]").attr("data-embed");
        if (!o) throw new q("No embed found.");
        const c = (await e.proxiedFetcher("/ajax/embed", {
            method: "POST",
            baseUrl: yn,
            body: new URLSearchParams({
                id: o
            })
        })).match(/"file":"(http[^"]+)"/);
        if (!c) throw new q("No stream found.");
        return {
            embeds: [],
            stream: [{
                id: "primary",
                captions: [],
                playlist: c[1],
                type: "hls",
                flags: [],
                headers: {
                    Origin: yn,
                    Referer: xF
                }
            }]
        }
    }, TF = Pe({
        id: "nepu",
        name: "Nepu",
        rank: 111,
        flags: [],
        scrapeMovie: Mh,
        scrapeShow: Mh
    }), ob = "https://ridomovies.tv", Bh = `${ob}/core/api`, Vh = async e => {
        const r = (await e.proxiedFetcher("/search", {
            baseUrl: Bh,
            query: {
                q: e.media.title
            }
        })).data.items[0];
        if (!r) throw new q("No watchable item found");
        let n = `/${r.fullSlug}/videos`;
        if (e.media.type === "show") {
            const u = await e.proxiedFetcher(`/${r.fullSlug}`, {
                    baseUrl: ob
                }),
                c = `${r.fullSlug}/season-${e.media.season.number}/episode-${e.media.episode.number}`,
                l = new RegExp(`\\\\"id\\\\":\\\\"(\\d+)\\\\"(?=.*?\\\\\\"fullSlug\\\\\\":\\\\\\"${c}\\\\\\")`, "g"),
                d = [...u.matchAll(l)].map(p => p[1]);
            if (d.length === 0) throw new q("No watchable item found");
            n = `/episodes/${d.at(-1)}/videos`
        }
        const a = await e.proxiedFetcher(n, {
                baseUrl: Bh
            }),
            s = H(a.data[0].url)("iframe").attr("data-src");
        if (!s) throw new q("No watchable item found");
        const o = [];
        return s.includes("closeload") && o.push({
            embedId: nb.id,
            url: s
        }), s.includes("ridoo") && o.push({
            embedId: ab.id,
            url: s
        }), {
            embeds: o
        }
    }, IF = Pe({
        id: "ridomovies",
        name: "RidoMovies",
        rank: 105,
        flags: [Z.CORS_ALLOWED],
        scrapeMovie: Vh,
        scrapeShow: Vh
    }), PF = "https://embed.smashystream.com", kF = "https://smashystream.com/", zh = async e => {
        const t = await e.proxiedFetcher("/playere.php", {
            query: {
                tmdb: e.media.tmdbId,
                ...e.media.type === "show" && {
                    season: e.media.season.number.toString(),
                    episode: e.media.episode.number.toString()
                }
            },
            headers: {
                Referer: kF
            },
            baseUrl: PF
        });
        e.progress(30);
        const r = H(t),
            n = r(".dropdown-menu a[data-url]").map((i, s) => r(s).attr("data-url")).get(),
            a = [];
        for (const i of n) i.includes("video1d.php") && a.push({
            embedId: sb.id,
            url: i
        }), i.includes("dued.php") && a.push({
            embedId: ib.id,
            url: i
        });
        return e.progress(60), {
            embeds: a
        }
    }, LF = Pe({
        id: "smashystream",
        name: "SmashyStream",
        rank: 70,
        flags: [Z.CORS_ALLOWED],
        scrapeMovie: zh,
        scrapeShow: zh
    }), ii = "https://vidsrc.to", qo = `${ii}/`, qh = async e => {
        const t = e.media.imdbId,
            r = e.media.type === "movie" ? `/embed/movie/${t}` : `/embed/tv/${t}/${e.media.season.number}/${e.media.episode.number}`,
            n = await e.proxiedFetcher(r, {
                baseUrl: ii,
                headers: {
                    referer: qo
                }
            }),
            i = H(n)("a[data-id]").attr("data-id");
        if (!i) throw new Error("No data-id found");
        const s = await e.proxiedFetcher(`/ajax/embed/episode/${i}/sources`, {
            baseUrl: ii,
            headers: {
                referer: qo
            }
        });
        if (s.status !== 200) throw new Error("No sources found");
        const o = [],
            u = [];
        for (const f of s.result) {
            const d = await e.proxiedFetcher(`/ajax/embed/source/${f.id}`, {
                    baseUrl: ii,
                    headers: {
                        referer: qo
                    }
                }),
                h = bF(d.result.url);
            u.push(h)
        }
        const c = u.find(f => f.includes("sub.info"));
        let l = null;
        c && (l = new URL(c).searchParams.get("sub.info"));
        for (const f of s.result) {
            if (f.title === "Vidplay") {
                const d = u.find(h => h.includes("vidplay"));
                if (!d) continue;
                o.push({
                    embedId: "vidplay",
                    url: d
                })
            }
            if (f.title === "Filemoon") {
                const d = u.find(p => p.includes("filemoon"));
                if (!d) continue;
                const h = new URL(d);
                l && h.searchParams.set("sub.info", l), o.push({
                    embedId: "filemoon",
                    url: h.toString()
                })
            }
        }
        return {
            embeds: o
        }
    }, FF = Pe({
        id: "vidsrcto",
        name: "VidSrcTo",
        scrapeMovie: qh,
        scrapeShow: qh,
        flags: [],
        rank: 300
    });

function DF() {
    return [jL, HL, BL, KL, UL, fF, tF, GL, LF, IF, FF, TF, NF]
}

function jF() {
    return [mt, Ii, qy, Yy, Jy, Vy, uL, zy, Zy, Wy, sb, ib, ab, nb, mF, AF, OF, X2]
}

function UF() {
    return DF().filter(e => !e.disabled)
}

function MF() {
    return jF().filter(e => !e.disabled)
}

function Wo(e) {
    return new Set(e).size !== e.length
}

function BF(e, t) {
    const r = t.sources.filter(u => !(u != null && u.disabled)),
        n = t.embeds.filter(u => !(u != null && u.disabled)),
        a = [...r, ...n],
        i = Wo(a.map(u => u.id)),
        s = Wo(r.map(u => u.rank)),
        o = Wo(n.map(u => u.rank));
    if (i) throw new Error("Duplicate id found in sources/embeds");
    if (s) throw new Error("Duplicate rank found in sources");
    if (o) throw new Error("Duplicate rank found in embeds");
    return {
        sources: r.filter(u => Vn(e, u.flags)),
        embeds: n
    }
}

function TB(e) {
    const t = z2(e.target, e.consistentIpForRequests ?? !1),
        r = BF(t, {
            embeds: MF(),
            sources: UF()
        });
    return H2({
        embeds: r.embeds,
        sources: r.sources,
        features: t,
        fetcher: e.fetcher,
        proxiedFetcher: e.proxiedFetcher
    })
}

function VF(e) {
    return e === void 0 || typeof e == "string" || e instanceof URLSearchParams || e instanceof Cl ? {
        headers: {},
        body: e
    } : {
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e)
    }
}

function zF(e, t) {
    const r = new Headers;
    return e.forEach(n => {
        var a;
        const i = n.toLowerCase(),
            s = t.headers.get(i),
            o = (a = t.extraHeaders) == null ? void 0 : a.get(i);
        s && r.set(i, o ?? s)
    }), r
}

function qF(e) {
    return async (r, n) => {
        var a;
        const i = xl(r, n),
            s = VF(n.body),
            o = await e(i, {
                method: n.method,
                headers: {
                    ...s.headers,
                    ...n.headers
                },
                body: s.body
            });
        let u;
        return ((a = o.headers.get("content-type")) == null ? void 0 : a.includes("application/json")) ? u = await o.json() : u = await o.text(), {
            body: u,
            finalUrl: o.extraUrl ?? o.url,
            headers: zF(n.readHeaders, o),
            statusCode: o.status
        }
    }
}
const Wh = {
        cookie: "X-Cookie",
        referer: "X-Referer",
        origin: "X-Origin",
        "user-agent": "X-User-Agent",
        "x-real-ip": "X-X-Real-Ip"
    },
    WF = {
        "x-set-cookie": "Set-Cookie"
    };

function IB(e, t) {
    return async (n, a) => {
        const i = qF(async (u, c) => {
                const l = await t(u, c);
                return l.extraHeaders = new Headers, Object.entries(WF).forEach(f => {
                    var d;
                    const h = l.headers.get(f[0]);
                    h && ((d = l.extraHeaders) == null || d.set(f[0].toLowerCase(), h))
                }), l.extraUrl = l.headers.get("X-Final-Destination") ?? l.url, l
            }),
            s = xl(n, a),
            o = Object.entries(a.headers).map(u => {
                const c = u[0].toLowerCase();
                return Wh[c] ? [Wh[c], u[1]] : u
            });
        return i(e, {
            ...a,
            query: {
                destination: s
            },
            headers: Object.fromEntries(o),
            baseUrl: void 0
        })
    }
}
class bn extends Error {}
bn.prototype.name = "InvalidTokenError";

function GF(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t, r) => {
        let n = r.charCodeAt(0).toString(16).toUpperCase();
        return n.length < 2 && (n = "0" + n), "%" + n
    }))
}

function HF(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
        case 0:
            break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length")
    }
    try {
        return GF(t)
    } catch {
        return atob(t)
    }
}

function PB(e, t) {
    if (typeof e != "string") throw new bn("Invalid token specified: must be a string");
    t || (t = {});
    const r = t.header === !0 ? 0 : 1,
        n = e.split(".")[r];
    if (typeof n != "string") throw new bn(`Invalid token specified: missing part #${r+1}`);
    let a;
    try {
        a = HF(n)
    } catch (i) {
        throw new bn(`Invalid token specified: invalid base64 for part #${r+1} (${i.message})`)
    }
    try {
        return JSON.parse(a)
    } catch (i) {
        throw new bn(`Invalid token specified: invalid json for part #${r+1} (${i.message})`)
    }
}
var ub = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function r() {
            for (var n = [], a = 0; a < arguments.length; a++) {
                var i = arguments[a];
                if (i) {
                    var s = typeof i;
                    if (s === "string" || s === "number") n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var o = r.apply(null, i);
                            o && n.push(o)
                        }
                    } else if (s === "object") {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                            n.push(i.toString());
                            continue
                        }
                        for (var u in i) t.call(i, u) && i[u] && n.push(u)
                    }
                }
            }
            return n.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : window.classNames = r
    })()
})(ub);
var KF = ub.exports;
const kB = Re(KF);
let LB = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), ""),
    XF = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
var ym, bm;
(ym = globalThis.browser) != null && ym.runtime || ((bm = globalThis.chrome) == null || bm.runtime);
var wm, Em;
(wm = globalThis.browser) != null && wm.tabs || ((Em = globalThis.chrome) == null || Em.tabs);
var YF = (e, t) => !t.__internal && e.source === globalThis.window && e.data.name === t.name && (t.relayId === void 0 || e.data.relayId === t.relayId),
    JF = (e, t = globalThis.window) => new Promise((r, n) => {
        let a = XF(),
            i = new AbortController;
        t.addEventListener("message", s => {
            YF(s, e) && s.data.relayed && s.data.instanceId === a && (r(s.data.body), i.abort())
        }, {
            signal: i.signal
        }), t.postMessage({
            ...e,
            instanceId: a
        }, {
            targetOrigin: e.targetOrigin || "/"
        })
    }),
    FB = JF,
    nc = {
        exports: {}
    };
const QF = "2.0.0",
    cb = 256,
    ZF = Number.MAX_SAFE_INTEGER || 9007199254740991,
    eD = 16,
    tD = cb - 6,
    rD = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var ks = {
        MAX_LENGTH: cb,
        MAX_SAFE_COMPONENT_LENGTH: eD,
        MAX_SAFE_BUILD_LENGTH: tD,
        MAX_SAFE_INTEGER: ZF,
        RELEASE_TYPES: rD,
        SEMVER_SPEC_VERSION: QF,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    },
    Go = {};
const nD = typeof process == "object" && Go && Go.NODE_DEBUG && /\bsemver\b/i.test(Go.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
var Ls = nD;
(function(e, t) {
    const {
        MAX_SAFE_COMPONENT_LENGTH: r,
        MAX_SAFE_BUILD_LENGTH: n,
        MAX_LENGTH: a
    } = ks, i = Ls;
    t = e.exports = {};
    const s = t.re = [],
        o = t.safeRe = [],
        u = t.src = [],
        c = t.t = {};
    let l = 0;
    const f = "[a-zA-Z0-9-]",
        d = [
            ["\\s", 1],
            ["\\d", a],
            [f, n]
        ],
        h = v => {
            for (const [y, A] of d) v = v.split(`${y}*`).join(`${y}{0,${A}}`).split(`${y}+`).join(`${y}{1,${A}}`);
            return v
        },
        p = (v, y, A) => {
            const m = h(y),
                R = l++;
            i(v, R, y), c[v] = R, u[R] = y, s[R] = new RegExp(y, A ? "g" : void 0), o[R] = new RegExp(m, A ? "g" : void 0)
        };
    p("NUMERICIDENTIFIER", "0|[1-9]\\d*"), p("NUMERICIDENTIFIERLOOSE", "\\d+"), p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), p("MAINVERSION", `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`), p("MAINVERSIONLOOSE", `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`), p("PRERELEASEIDENTIFIER", `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`), p("PRERELEASEIDENTIFIERLOOSE", `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`), p("PRERELEASE", `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`), p("PRERELEASELOOSE", `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`), p("BUILDIDENTIFIER", `${f}+`), p("BUILD", `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`), p("FULLPLAIN", `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`), p("FULL", `^${u[c.FULLPLAIN]}$`), p("LOOSEPLAIN", `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`), p("LOOSE", `^${u[c.LOOSEPLAIN]}$`), p("GTLT", "((?:<|>)?=?)"), p("XRANGEIDENTIFIERLOOSE", `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), p("XRANGEIDENTIFIER", `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`), p("XRANGEPLAIN", `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`), p("XRANGEPLAINLOOSE", `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`), p("XRANGE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`), p("XRANGELOOSE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`), p("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), p("COERCERTL", u[c.COERCE], !0), p("LONETILDE", "(?:~>?)"), p("TILDETRIM", `(\\s*)${u[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", p("TILDE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`), p("TILDELOOSE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`), p("LONECARET", "(?:\\^)"), p("CARETTRIM", `(\\s*)${u[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", p("CARET", `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`), p("CARETLOOSE", `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`), p("COMPARATORLOOSE", `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`), p("COMPARATOR", `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`), p("COMPARATORTRIM", `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", p("HYPHENRANGE", `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`), p("HYPHENRANGELOOSE", `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`), p("STAR", "(<|>)?=?\\s*\\*"), p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
})(nc, nc.exports);
var ga = nc.exports;
const aD = Object.freeze({
        loose: !0
    }),
    iD = Object.freeze({}),
    sD = e => e ? typeof e != "object" ? aD : e : iD;
var Pl = sD;
const Gh = /^[0-9]+$/,
    lb = (e, t) => {
        const r = Gh.test(e),
            n = Gh.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    },
    oD = (e, t) => lb(t, e);
var fb = {
    compareIdentifiers: lb,
    rcompareIdentifiers: oD
};
const Fa = Ls,
    {
        MAX_LENGTH: Hh,
        MAX_SAFE_INTEGER: Da
    } = ks,
    {
        safeRe: Kh,
        t: Xh
    } = ga,
    uD = Pl,
    {
        compareIdentifiers: pr
    } = fb;
let cD = class Xe {
    constructor(t, r) {
        if (r = uD(r), t instanceof Xe) {
            if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
            t = t.version
        } else if (typeof t != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
        if (t.length > Hh) throw new TypeError(`version is longer than ${Hh} characters`);
        Fa("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
        const n = t.trim().match(r.loose ? Kh[Xh.LOOSE] : Kh[Xh.FULL]);
        if (!n) throw new TypeError(`Invalid Version: ${t}`);
        if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Da || this.major < 0) throw new TypeError("Invalid major version");
        if (this.minor > Da || this.minor < 0) throw new TypeError("Invalid minor version");
        if (this.patch > Da || this.patch < 0) throw new TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(a => {
            if (/^[0-9]+$/.test(a)) {
                const i = +a;
                if (i >= 0 && i < Da) return i
            }
            return a
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
    }
    format() {
        return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
    }
    toString() {
        return this.version
    }
    compare(t) {
        if (Fa("SemVer.compare", this.version, this.options, t), !(t instanceof Xe)) {
            if (typeof t == "string" && t === this.version) return 0;
            t = new Xe(t, this.options)
        }
        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
    }
    compareMain(t) {
        return t instanceof Xe || (t = new Xe(t, this.options)), pr(this.major, t.major) || pr(this.minor, t.minor) || pr(this.patch, t.patch)
    }
    comparePre(t) {
        if (t instanceof Xe || (t = new Xe(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
        if (!this.prerelease.length && t.prerelease.length) return 1;
        if (!this.prerelease.length && !t.prerelease.length) return 0;
        let r = 0;
        do {
            const n = this.prerelease[r],
                a = t.prerelease[r];
            if (Fa("prerelease compare", r, n, a), n === void 0 && a === void 0) return 0;
            if (a === void 0) return 1;
            if (n === void 0) return -1;
            if (n === a) continue;
            return pr(n, a)
        } while (++r)
    }
    compareBuild(t) {
        t instanceof Xe || (t = new Xe(t, this.options));
        let r = 0;
        do {
            const n = this.build[r],
                a = t.build[r];
            if (Fa("prerelease compare", r, n, a), n === void 0 && a === void 0) return 0;
            if (a === void 0) return 1;
            if (n === void 0) return -1;
            if (n === a) continue;
            return pr(n, a)
        } while (++r)
    }
    inc(t, r, n) {
        switch (t) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
                break;
            case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
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
            case "pre": {
                const a = Number(n) ? 1 : 0;
                if (!r && n === !1) throw new Error("invalid increment argument: identifier is empty");
                if (this.prerelease.length === 0) this.prerelease = [a];
                else {
                    let i = this.prerelease.length;
                    for (; --i >= 0;) typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
                    if (i === -1) {
                        if (r === this.prerelease.join(".") && n === !1) throw new Error("invalid increment argument: identifier already exists");
                        this.prerelease.push(a)
                    }
                }
                if (r) {
                    let i = [r, a];
                    n === !1 && (i = [r]), pr(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i
                }
                break
            }
            default:
                throw new Error(`invalid increment argument: ${t}`)
        }
        return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
    }
};
var be = cD;
const Yh = be,
    lD = (e, t, r = !1) => {
        if (e instanceof Yh) return e;
        try {
            return new Yh(e, t)
        } catch (n) {
            if (!r) return null;
            throw n
        }
    };
var tn = lD;
const fD = tn,
    dD = (e, t) => {
        const r = fD(e, t);
        return r ? r.version : null
    };
var hD = dD;
const pD = tn,
    mD = (e, t) => {
        const r = pD(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null
    };
var gD = mD;
const Jh = be,
    vD = (e, t, r, n, a) => {
        typeof r == "string" && (a = n, n = r, r = void 0);
        try {
            return new Jh(e instanceof Jh ? e.version : e, r).inc(t, n, a).version
        } catch {
            return null
        }
    };
var yD = vD;
const Qh = tn,
    bD = (e, t) => {
        const r = Qh(e, null, !0),
            n = Qh(t, null, !0),
            a = r.compare(n);
        if (a === 0) return null;
        const i = a > 0,
            s = i ? r : n,
            o = i ? n : r,
            u = !!s.prerelease.length;
        if (!!o.prerelease.length && !u) return !o.patch && !o.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
        const l = u ? "pre" : "";
        return r.major !== n.major ? l + "major" : r.minor !== n.minor ? l + "minor" : r.patch !== n.patch ? l + "patch" : "prerelease"
    };
var wD = bD;
const ED = be,
    SD = (e, t) => new ED(e, t).major;
var $D = SD;
const AD = be,
    OD = (e, t) => new AD(e, t).minor;
var RD = OD;
const _D = be,
    CD = (e, t) => new _D(e, t).patch;
var ND = CD;
const xD = tn,
    TD = (e, t) => {
        const r = xD(e, t);
        return r && r.prerelease.length ? r.prerelease : null
    };
var ID = TD;
const Zh = be,
    PD = (e, t, r) => new Zh(e, r).compare(new Zh(t, r));
var We = PD;
const kD = We,
    LD = (e, t, r) => kD(t, e, r);
var FD = LD;
const DD = We,
    jD = (e, t) => DD(e, t, !0);
var UD = jD;
const ep = be,
    MD = (e, t, r) => {
        const n = new ep(e, r),
            a = new ep(t, r);
        return n.compare(a) || n.compareBuild(a)
    };
var kl = MD;
const BD = kl,
    VD = (e, t) => e.sort((r, n) => BD(r, n, t));
var zD = VD;
const qD = kl,
    WD = (e, t) => e.sort((r, n) => qD(n, r, t));
var GD = WD;
const HD = We,
    KD = (e, t, r) => HD(e, t, r) > 0;
var Fs = KD;
const XD = We,
    YD = (e, t, r) => XD(e, t, r) < 0;
var Ll = YD;
const JD = We,
    QD = (e, t, r) => JD(e, t, r) === 0;
var db = QD;
const ZD = We,
    ej = (e, t, r) => ZD(e, t, r) !== 0;
var hb = ej;
const tj = We,
    rj = (e, t, r) => tj(e, t, r) >= 0;
var Fl = rj;
const nj = We,
    aj = (e, t, r) => nj(e, t, r) <= 0;
var Dl = aj;
const ij = db,
    sj = hb,
    oj = Fs,
    uj = Fl,
    cj = Ll,
    lj = Dl,
    fj = (e, t, r, n) => {
        switch (t) {
            case "===":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
            case "!==":
                return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
            case "":
            case "=":
            case "==":
                return ij(e, r, n);
            case "!=":
                return sj(e, r, n);
            case ">":
                return oj(e, r, n);
            case ">=":
                return uj(e, r, n);
            case "<":
                return cj(e, r, n);
            case "<=":
                return lj(e, r, n);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
        }
    };
var pb = fj;
const dj = be,
    hj = tn,
    {
        safeRe: ja,
        t: Ua
    } = ga,
    pj = (e, t) => {
        if (e instanceof dj) return e;
        if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
        t = t || {};
        let r = null;
        if (!t.rtl) r = e.match(ja[Ua.COERCE]);
        else {
            let n;
            for (;
                (n = ja[Ua.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), ja[Ua.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
            ja[Ua.COERCERTL].lastIndex = -1
        }
        return r === null ? null : hj(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`, t)
    };
var mj = pj,
    Ho, tp;

function gj() {
    return tp || (tp = 1, Ho = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let t = this.head; t; t = t.next) yield t.value
        }
    }), Ho
}
var vj = Y;
Y.Node = Zt;
Y.create = Y;

function Y(e) {
    var t = this;
    if (t instanceof Y || (t = new Y), t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach == "function") e.forEach(function(a) {
        t.push(a)
    });
    else if (arguments.length > 0)
        for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
    return t
}
Y.prototype.removeNode = function(e) {
    if (e.list !== this) throw new Error("removing node which does not belong to this list");
    var t = e.next,
        r = e.prev;
    return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
};
Y.prototype.unshiftNode = function(e) {
    if (e !== this.head) {
        e.list && e.list.removeNode(e);
        var t = this.head;
        e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
    }
};
Y.prototype.pushNode = function(e) {
    if (e !== this.tail) {
        e.list && e.list.removeNode(e);
        var t = this.tail;
        e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
    }
};
Y.prototype.push = function() {
    for (var e = 0, t = arguments.length; e < t; e++) bj(this, arguments[e]);
    return this.length
};
Y.prototype.unshift = function() {
    for (var e = 0, t = arguments.length; e < t; e++) wj(this, arguments[e]);
    return this.length
};
Y.prototype.pop = function() {
    if (this.tail) {
        var e = this.tail.value;
        return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
    }
};
Y.prototype.shift = function() {
    if (this.head) {
        var e = this.head.value;
        return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
    }
};
Y.prototype.forEach = function(e, t) {
    t = t || this;
    for (var r = this.head, n = 0; r !== null; n++) e.call(t, r.value, n, this), r = r.next
};
Y.prototype.forEachReverse = function(e, t) {
    t = t || this;
    for (var r = this.tail, n = this.length - 1; r !== null; n--) e.call(t, r.value, n, this), r = r.prev
};
Y.prototype.get = function(e) {
    for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
    if (t === e && r !== null) return r.value
};
Y.prototype.getReverse = function(e) {
    for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
    if (t === e && r !== null) return r.value
};
Y.prototype.map = function(e, t) {
    t = t || this;
    for (var r = new Y, n = this.head; n !== null;) r.push(e.call(t, n.value, this)), n = n.next;
    return r
};
Y.prototype.mapReverse = function(e, t) {
    t = t || this;
    for (var r = new Y, n = this.tail; n !== null;) r.push(e.call(t, n.value, this)), n = n.prev;
    return r
};
Y.prototype.reduce = function(e, t) {
    var r, n = this.head;
    if (arguments.length > 1) r = t;
    else if (this.head) n = this.head.next, r = this.head.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var a = 0; n !== null; a++) r = e(r, n.value, a), n = n.next;
    return r
};
Y.prototype.reduceReverse = function(e, t) {
    var r, n = this.tail;
    if (arguments.length > 1) r = t;
    else if (this.tail) n = this.tail.prev, r = this.tail.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var a = this.length - 1; n !== null; a--) r = e(r, n.value, a), n = n.prev;
    return r
};
Y.prototype.toArray = function() {
    for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++) e[t] = r.value, r = r.next;
    return e
};
Y.prototype.toArrayReverse = function() {
    for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++) e[t] = r.value, r = r.prev;
    return e
};
Y.prototype.slice = function(e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new Y;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = 0, a = this.head; a !== null && n < e; n++) a = a.next;
    for (; a !== null && n < t; n++, a = a.next) r.push(a.value);
    return r
};
Y.prototype.sliceReverse = function(e, t) {
    t = t || this.length, t < 0 && (t += this.length), e = e || 0, e < 0 && (e += this.length);
    var r = new Y;
    if (t < e || t < 0) return r;
    e < 0 && (e = 0), t > this.length && (t = this.length);
    for (var n = this.length, a = this.tail; a !== null && n > t; n--) a = a.prev;
    for (; a !== null && n > e; n--, a = a.prev) r.push(a.value);
    return r
};
Y.prototype.splice = function(e, t, ...r) {
    e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
    for (var n = 0, a = this.head; a !== null && n < e; n++) a = a.next;
    for (var i = [], n = 0; a && n < t; n++) i.push(a.value), a = this.removeNode(a);
    a === null && (a = this.tail), a !== this.head && a !== this.tail && (a = a.prev);
    for (var n = 0; n < r.length; n++) a = yj(this, a, r[n]);
    return i
};
Y.prototype.reverse = function() {
    for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
        var n = r.prev;
        r.prev = r.next, r.next = n
    }
    return this.head = t, this.tail = e, this
};

function yj(e, t, r) {
    var n = t === e.head ? new Zt(r, null, t, e) : new Zt(r, t, t.next, e);
    return n.next === null && (e.tail = n), n.prev === null && (e.head = n), e.length++, n
}

function bj(e, t) {
    e.tail = new Zt(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
}

function wj(e, t) {
    e.head = new Zt(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
}

function Zt(e, t, r, n) {
    if (!(this instanceof Zt)) return new Zt(e, t, r, n);
    this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
}
try {
    gj()(Y)
} catch {}
const Ej = vj,
    zt = Symbol("max"),
    lt = Symbol("length"),
    mr = Symbol("lengthCalculator"),
    Rn = Symbol("allowStale"),
    Wt = Symbol("maxAge"),
    ut = Symbol("dispose"),
    rp = Symbol("noDisposeOnSet"),
    ue = Symbol("lruList"),
    Ue = Symbol("cache"),
    mb = Symbol("updateAgeOnGet"),
    Ko = () => 1;
class Sj {
    constructor(t) {
        if (typeof t == "number" && (t = {
                max: t
            }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
        this[zt] = t.max || 1 / 0;
        const r = t.length || Ko;
        if (this[mr] = typeof r != "function" ? Ko : r, this[Rn] = t.stale || !1, t.maxAge && typeof t.maxAge != "number") throw new TypeError("maxAge must be a number");
        this[Wt] = t.maxAge || 0, this[ut] = t.dispose, this[rp] = t.noDisposeOnSet || !1, this[mb] = t.updateAgeOnGet || !1, this.reset()
    }
    set max(t) {
        if (typeof t != "number" || t < 0) throw new TypeError("max must be a non-negative number");
        this[zt] = t || 1 / 0, un(this)
    }
    get max() {
        return this[zt]
    }
    set allowStale(t) {
        this[Rn] = !!t
    }
    get allowStale() {
        return this[Rn]
    }
    set maxAge(t) {
        if (typeof t != "number") throw new TypeError("maxAge must be a non-negative number");
        this[Wt] = t, un(this)
    }
    get maxAge() {
        return this[Wt]
    }
    set lengthCalculator(t) {
        typeof t != "function" && (t = Ko), t !== this[mr] && (this[mr] = t, this[lt] = 0, this[ue].forEach(r => {
            r.length = this[mr](r.value, r.key), this[lt] += r.length
        })), un(this)
    }
    get lengthCalculator() {
        return this[mr]
    }
    get length() {
        return this[lt]
    }
    get itemCount() {
        return this[ue].length
    }
    rforEach(t, r) {
        r = r || this;
        for (let n = this[ue].tail; n !== null;) {
            const a = n.prev;
            np(this, t, n, r), n = a
        }
    }
    forEach(t, r) {
        r = r || this;
        for (let n = this[ue].head; n !== null;) {
            const a = n.next;
            np(this, t, n, r), n = a
        }
    }
    keys() {
        return this[ue].toArray().map(t => t.key)
    }
    values() {
        return this[ue].toArray().map(t => t.value)
    }
    reset() {
        this[ut] && this[ue] && this[ue].length && this[ue].forEach(t => this[ut](t.key, t.value)), this[Ue] = new Map, this[ue] = new Ej, this[lt] = 0
    }
    dump() {
        return this[ue].map(t => Li(this, t) ? !1 : {
            k: t.key,
            v: t.value,
            e: t.now + (t.maxAge || 0)
        }).toArray().filter(t => t)
    }
    dumpLru() {
        return this[ue]
    }
    set(t, r, n) {
        if (n = n || this[Wt], n && typeof n != "number") throw new TypeError("maxAge must be a number");
        const a = n ? Date.now() : 0,
            i = this[mr](r, t);
        if (this[Ue].has(t)) {
            if (i > this[zt]) return Nr(this, this[Ue].get(t)), !1;
            const u = this[Ue].get(t).value;
            return this[ut] && (this[rp] || this[ut](t, u.value)), u.now = a, u.maxAge = n, u.value = r, this[lt] += i - u.length, u.length = i, this.get(t), un(this), !0
        }
        const s = new $j(t, r, i, a, n);
        return s.length > this[zt] ? (this[ut] && this[ut](t, r), !1) : (this[lt] += s.length, this[ue].unshift(s), this[Ue].set(t, this[ue].head), un(this), !0)
    }
    has(t) {
        if (!this[Ue].has(t)) return !1;
        const r = this[Ue].get(t).value;
        return !Li(this, r)
    }
    get(t) {
        return Xo(this, t, !0)
    }
    peek(t) {
        return Xo(this, t, !1)
    }
    pop() {
        const t = this[ue].tail;
        return t ? (Nr(this, t), t.value) : null
    }
    del(t) {
        Nr(this, this[Ue].get(t))
    }
    load(t) {
        this.reset();
        const r = Date.now();
        for (let n = t.length - 1; n >= 0; n--) {
            const a = t[n],
                i = a.e || 0;
            if (i === 0) this.set(a.k, a.v);
            else {
                const s = i - r;
                s > 0 && this.set(a.k, a.v, s)
            }
        }
    }
    prune() {
        this[Ue].forEach((t, r) => Xo(this, r, !1))
    }
}
const Xo = (e, t, r) => {
        const n = e[Ue].get(t);
        if (n) {
            const a = n.value;
            if (Li(e, a)) {
                if (Nr(e, n), !e[Rn]) return
            } else r && (e[mb] && (n.value.now = Date.now()), e[ue].unshiftNode(n));
            return a.value
        }
    },
    Li = (e, t) => {
        if (!t || !t.maxAge && !e[Wt]) return !1;
        const r = Date.now() - t.now;
        return t.maxAge ? r > t.maxAge : e[Wt] && r > e[Wt]
    },
    un = e => {
        if (e[lt] > e[zt])
            for (let t = e[ue].tail; e[lt] > e[zt] && t !== null;) {
                const r = t.prev;
                Nr(e, t), t = r
            }
    },
    Nr = (e, t) => {
        if (t) {
            const r = t.value;
            e[ut] && e[ut](r.key, r.value), e[lt] -= r.length, e[Ue].delete(r.key), e[ue].removeNode(t)
        }
    };
class $j {
    constructor(t, r, n, a, i) {
        this.key = t, this.value = r, this.length = n, this.now = a, this.maxAge = i || 0
    }
}
const np = (e, t, r, n) => {
    let a = r.value;
    Li(e, a) && (Nr(e, r), e[Rn] || (a = void 0)), a && t.call(n, a.value, a.key, e)
};
var Aj = Sj,
    Yo, ap;

function Ge() {
    if (ap) return Yo;
    ap = 1;
    class e {
        constructor(g, b) {
            if (b = n(b), g instanceof e) return g.loose === !!b.loose && g.includePrerelease === !!b.includePrerelease ? g : new e(g.raw, b);
            if (g instanceof a) return this.raw = g.value, this.set = [
                [g]
            ], this.format(), this;
            if (this.options = b, this.loose = !!b.loose, this.includePrerelease = !!b.includePrerelease, this.raw = g.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(E => this.parseRange(E.trim())).filter(E => E.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                const E = this.set[0];
                if (this.set = this.set.filter(S => !p(S[0])), this.set.length === 0) this.set = [E];
                else if (this.set.length > 1) {
                    for (const S of this.set)
                        if (S.length === 1 && v(S[0])) {
                            this.set = [S];
                            break
                        }
                }
            }
            this.format()
        }
        format() {
            return this.range = this.set.map(g => g.join(" ").trim()).join("||").trim(), this.range
        }
        toString() {
            return this.range
        }
        parseRange(g) {
            const E = ((this.options.includePrerelease && d) | (this.options.loose && h)) + ":" + g,
                S = r.get(E);
            if (S) return S;
            const w = this.options.loose,
                O = w ? o[u.HYPHENRANGELOOSE] : o[u.HYPHENRANGE];
            g = g.replace(O, F(this.options.includePrerelease)), i("hyphen replace", g), g = g.replace(o[u.COMPARATORTRIM], c), i("comparator trim", g), g = g.replace(o[u.TILDETRIM], l), i("tilde trim", g), g = g.replace(o[u.CARETTRIM], f), i("caret trim", g);
            let C = g.split(" ").map(B => A(B, this.options)).join(" ").split(/\s+/).map(B => G(B, this.options));
            w && (C = C.filter(B => (i("loose invalid filter", B, this.options), !!B.match(o[u.COMPARATORLOOSE])))), i("range list", C);
            const I = new Map,
                L = C.map(B => new a(B, this.options));
            for (const B of L) {
                if (p(B)) return [B];
                I.set(B.value, B)
            }
            I.size > 1 && I.has("") && I.delete("");
            const V = [...I.values()];
            return r.set(E, V), V
        }
        intersects(g, b) {
            if (!(g instanceof e)) throw new TypeError("a Range is required");
            return this.set.some(E => y(E, b) && g.set.some(S => y(S, b) && E.every(w => S.every(O => w.intersects(O, b)))))
        }
        test(g) {
            if (!g) return !1;
            if (typeof g == "string") try {
                g = new s(g, this.options)
            } catch {
                return !1
            }
            for (let b = 0; b < this.set.length; b++)
                if (_(this.set[b], g, this.options)) return !0;
            return !1
        }
    }
    Yo = e;
    const t = Aj,
        r = new t({
            max: 1e3
        }),
        n = Pl,
        a = Ds(),
        i = Ls,
        s = be,
        {
            safeRe: o,
            t: u,
            comparatorTrimReplace: c,
            tildeTrimReplace: l,
            caretTrimReplace: f
        } = ga,
        {
            FLAG_INCLUDE_PRERELEASE: d,
            FLAG_LOOSE: h
        } = ks,
        p = $ => $.value === "<0.0.0-0",
        v = $ => $.value === "",
        y = ($, g) => {
            let b = !0;
            const E = $.slice();
            let S = E.pop();
            for (; b && E.length;) b = E.every(w => S.intersects(w, g)), S = E.pop();
            return b
        },
        A = ($, g) => (i("comp", $, g), $ = x($, g), i("caret", $), $ = R($, g), i("tildes", $), $ = D($, g), i("xrange", $), $ = k($, g), i("stars", $), $),
        m = $ => !$ || $.toLowerCase() === "x" || $ === "*",
        R = ($, g) => $.trim().split(/\s+/).map(b => N(b, g)).join(" "),
        N = ($, g) => {
            const b = g.loose ? o[u.TILDELOOSE] : o[u.TILDE];
            return $.replace(b, (E, S, w, O, C) => {
                i("tilde", $, E, S, w, O, C);
                let I;
                return m(S) ? I = "" : m(w) ? I = `>=${S}.0.0 <${+S+1}.0.0-0` : m(O) ? I = `>=${S}.${w}.0 <${S}.${+w+1}.0-0` : C ? (i("replaceTilde pr", C), I = `>=${S}.${w}.${O}-${C} <${S}.${+w+1}.0-0`) : I = `>=${S}.${w}.${O} <${S}.${+w+1}.0-0`, i("tilde return", I), I
            })
        },
        x = ($, g) => $.trim().split(/\s+/).map(b => j(b, g)).join(" "),
        j = ($, g) => {
            i("caret", $, g);
            const b = g.loose ? o[u.CARETLOOSE] : o[u.CARET],
                E = g.includePrerelease ? "-0" : "";
            return $.replace(b, (S, w, O, C, I) => {
                i("caret", $, S, w, O, C, I);
                let L;
                return m(w) ? L = "" : m(O) ? L = `>=${w}.0.0${E} <${+w+1}.0.0-0` : m(C) ? w === "0" ? L = `>=${w}.${O}.0${E} <${w}.${+O+1}.0-0` : L = `>=${w}.${O}.0${E} <${+w+1}.0.0-0` : I ? (i("replaceCaret pr", I), w === "0" ? O === "0" ? L = `>=${w}.${O}.${C}-${I} <${w}.${O}.${+C+1}-0` : L = `>=${w}.${O}.${C}-${I} <${w}.${+O+1}.0-0` : L = `>=${w}.${O}.${C}-${I} <${+w+1}.0.0-0`) : (i("no pr"), w === "0" ? O === "0" ? L = `>=${w}.${O}.${C}${E} <${w}.${O}.${+C+1}-0` : L = `>=${w}.${O}.${C}${E} <${w}.${+O+1}.0-0` : L = `>=${w}.${O}.${C} <${+w+1}.0.0-0`), i("caret return", L), L
            })
        },
        D = ($, g) => (i("replaceXRanges", $, g), $.split(/\s+/).map(b => M(b, g)).join(" ")),
        M = ($, g) => {
            $ = $.trim();
            const b = g.loose ? o[u.XRANGELOOSE] : o[u.XRANGE];
            return $.replace(b, (E, S, w, O, C, I) => {
                i("xRange", $, E, S, w, O, C, I);
                const L = m(w),
                    V = L || m(O),
                    B = V || m(C),
                    he = B;
                return S === "=" && he && (S = ""), I = g.includePrerelease ? "-0" : "", L ? S === ">" || S === "<" ? E = "<0.0.0-0" : E = "*" : S && he ? (V && (O = 0), C = 0, S === ">" ? (S = ">=", V ? (w = +w + 1, O = 0, C = 0) : (O = +O + 1, C = 0)) : S === "<=" && (S = "<", V ? w = +w + 1 : O = +O + 1), S === "<" && (I = "-0"), E = `${S+w}.${O}.${C}${I}`) : V ? E = `>=${w}.0.0${I} <${+w+1}.0.0-0` : B && (E = `>=${w}.${O}.0${I} <${w}.${+O+1}.0-0`), i("xRange return", E), E
            })
        },
        k = ($, g) => (i("replaceStars", $, g), $.trim().replace(o[u.STAR], "")),
        G = ($, g) => (i("replaceGTE0", $, g), $.trim().replace(o[g.includePrerelease ? u.GTE0PRE : u.GTE0], "")),
        F = $ => (g, b, E, S, w, O, C, I, L, V, B, he, pe) => (m(E) ? b = "" : m(S) ? b = `>=${E}.0.0${$?"-0":""}` : m(w) ? b = `>=${E}.${S}.0${$?"-0":""}` : O ? b = `>=${b}` : b = `>=${b}${$?"-0":""}`, m(L) ? I = "" : m(V) ? I = `<${+L+1}.0.0-0` : m(B) ? I = `<${L}.${+V+1}.0-0` : he ? I = `<=${L}.${V}.${B}-${he}` : $ ? I = `<${L}.${V}.${+B+1}-0` : I = `<=${I}`, `${b} ${I}`.trim()),
        _ = ($, g, b) => {
            for (let E = 0; E < $.length; E++)
                if (!$[E].test(g)) return !1;
            if (g.prerelease.length && !b.includePrerelease) {
                for (let E = 0; E < $.length; E++)
                    if (i($[E].semver), $[E].semver !== a.ANY && $[E].semver.prerelease.length > 0) {
                        const S = $[E].semver;
                        if (S.major === g.major && S.minor === g.minor && S.patch === g.patch) return !0
                    } return !1
            }
            return !0
        };
    return Yo
}
var Jo, ip;

function Ds() {
    if (ip) return Jo;
    ip = 1;
    const e = Symbol("SemVer ANY");
    class t {
        static get ANY() {
            return e
        }
        constructor(l, f) {
            if (f = r(f), l instanceof t) {
                if (l.loose === !!f.loose) return l;
                l = l.value
            }
            l = l.trim().split(/\s+/).join(" "), s("comparator", l, f), this.options = f, this.loose = !!f.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this)
        }
        parse(l) {
            const f = this.options.loose ? n[a.COMPARATORLOOSE] : n[a.COMPARATOR],
                d = l.match(f);
            if (!d) throw new TypeError(`Invalid comparator: ${l}`);
            this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new o(d[2], this.options.loose) : this.semver = e
        }
        toString() {
            return this.value
        }
        test(l) {
            if (s("Comparator.test", l, this.options.loose), this.semver === e || l === e) return !0;
            if (typeof l == "string") try {
                l = new o(l, this.options)
            } catch {
                return !1
            }
            return i(l, this.operator, this.semver, this.options)
        }
        intersects(l, f) {
            if (!(l instanceof t)) throw new TypeError("a Comparator is required");
            return this.operator === "" ? this.value === "" ? !0 : new u(l.value, f).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new u(this.value, f).test(l.semver) : (f = r(f), f.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || i(this.semver, "<", l.semver, f) && this.operator.startsWith(">") && l.operator.startsWith("<") || i(this.semver, ">", l.semver, f) && this.operator.startsWith("<") && l.operator.startsWith(">")))
        }
    }
    Jo = t;
    const r = Pl,
        {
            safeRe: n,
            t: a
        } = ga,
        i = pb,
        s = Ls,
        o = be,
        u = Ge();
    return Jo
}
const Oj = Ge(),
    Rj = (e, t, r) => {
        try {
            t = new Oj(t, r)
        } catch {
            return !1
        }
        return t.test(e)
    };
var js = Rj;
const _j = Ge(),
    Cj = (e, t) => new _j(e, t).set.map(r => r.map(n => n.value).join(" ").trim().split(" "));
var Nj = Cj;
const xj = be,
    Tj = Ge(),
    Ij = (e, t, r) => {
        let n = null,
            a = null,
            i = null;
        try {
            i = new Tj(t, r)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!n || a.compare(s) === -1) && (n = s, a = new xj(n, r))
        }), n
    };
var Pj = Ij;
const kj = be,
    Lj = Ge(),
    Fj = (e, t, r) => {
        let n = null,
            a = null,
            i = null;
        try {
            i = new Lj(t, r)
        } catch {
            return null
        }
        return e.forEach(s => {
            i.test(s) && (!n || a.compare(s) === 1) && (n = s, a = new kj(n, r))
        }), n
    };
var Dj = Fj;
const Qo = be,
    jj = Ge(),
    sp = Fs,
    Uj = (e, t) => {
        e = new jj(e, t);
        let r = new Qo("0.0.0");
        if (e.test(r) || (r = new Qo("0.0.0-0"), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
            const a = e.set[n];
            let i = null;
            a.forEach(s => {
                const o = new Qo(s.semver.version);
                switch (s.operator) {
                    case ">":
                        o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0), o.raw = o.format();
                    case "":
                    case ">=":
                        (!i || sp(o, i)) && (i = o);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${s.operator}`)
                }
            }), i && (!r || sp(r, i)) && (r = i)
        }
        return r && e.test(r) ? r : null
    };
var Mj = Uj;
const Bj = Ge(),
    Vj = (e, t) => {
        try {
            return new Bj(e, t).range || "*"
        } catch {
            return null
        }
    };
var zj = Vj;
const qj = be,
    gb = Ds(),
    {
        ANY: Wj
    } = gb,
    Gj = Ge(),
    Hj = js,
    op = Fs,
    up = Ll,
    Kj = Dl,
    Xj = Fl,
    Yj = (e, t, r, n) => {
        e = new qj(e, n), t = new Gj(t, n);
        let a, i, s, o, u;
        switch (r) {
            case ">":
                a = op, i = Kj, s = up, o = ">", u = ">=";
                break;
            case "<":
                a = up, i = Xj, s = op, o = "<", u = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (Hj(e, t, n)) return !1;
        for (let c = 0; c < t.set.length; ++c) {
            const l = t.set[c];
            let f = null,
                d = null;
            if (l.forEach(h => {
                    h.semver === Wj && (h = new gb(">=0.0.0")), f = f || h, d = d || h, a(h.semver, f.semver, n) ? f = h : s(h.semver, d.semver, n) && (d = h)
                }), f.operator === o || f.operator === u || (!d.operator || d.operator === o) && i(e, d.semver)) return !1;
            if (d.operator === u && s(e, d.semver)) return !1
        }
        return !0
    };
var jl = Yj;
const Jj = jl,
    Qj = (e, t, r) => Jj(e, t, ">", r);
var Zj = Qj;
const eU = jl,
    tU = (e, t, r) => eU(e, t, "<", r);
var rU = tU;
const cp = Ge(),
    nU = (e, t, r) => (e = new cp(e, r), t = new cp(t, r), e.intersects(t, r));
var aU = nU;
const iU = js,
    sU = We;
var oU = (e, t, r) => {
    const n = [];
    let a = null,
        i = null;
    const s = e.sort((l, f) => sU(l, f, r));
    for (const l of s) iU(l, t, r) ? (i = l, a || (a = l)) : (i && n.push([a, i]), i = null, a = null);
    a && n.push([a, null]);
    const o = [];
    for (const [l, f] of n) l === f ? o.push(l) : !f && l === s[0] ? o.push("*") : f ? l === s[0] ? o.push(`<=${f}`) : o.push(`${l} - ${f}`) : o.push(`>=${l}`);
    const u = o.join(" || "),
        c = typeof t.raw == "string" ? t.raw : String(t);
    return u.length < c.length ? u : t
};
const lp = Ge(),
    Ul = Ds(),
    {
        ANY: Zo
    } = Ul,
    cn = js,
    Ml = We,
    uU = (e, t, r = {}) => {
        if (e === t) return !0;
        e = new lp(e, r), t = new lp(t, r);
        let n = !1;
        e: for (const a of e.set) {
            for (const i of t.set) {
                const s = lU(a, i, r);
                if (n = n || s !== null, s) continue e
            }
            if (n) return !1
        }
        return !0
    },
    cU = [new Ul(">=0.0.0-0")],
    fp = [new Ul(">=0.0.0")],
    lU = (e, t, r) => {
        if (e === t) return !0;
        if (e.length === 1 && e[0].semver === Zo) {
            if (t.length === 1 && t[0].semver === Zo) return !0;
            r.includePrerelease ? e = cU : e = fp
        }
        if (t.length === 1 && t[0].semver === Zo) {
            if (r.includePrerelease) return !0;
            t = fp
        }
        const n = new Set;
        let a, i;
        for (const h of e) h.operator === ">" || h.operator === ">=" ? a = dp(a, h, r) : h.operator === "<" || h.operator === "<=" ? i = hp(i, h, r) : n.add(h.semver);
        if (n.size > 1) return null;
        let s;
        if (a && i) {
            if (s = Ml(a.semver, i.semver, r), s > 0) return null;
            if (s === 0 && (a.operator !== ">=" || i.operator !== "<=")) return null
        }
        for (const h of n) {
            if (a && !cn(h, String(a), r) || i && !cn(h, String(i), r)) return null;
            for (const p of t)
                if (!cn(h, String(p), r)) return !1;
            return !0
        }
        let o, u, c, l, f = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1,
            d = a && !r.includePrerelease && a.semver.prerelease.length ? a.semver : !1;
        f && f.prerelease.length === 1 && i.operator === "<" && f.prerelease[0] === 0 && (f = !1);
        for (const h of t) {
            if (l = l || h.operator === ">" || h.operator === ">=", c = c || h.operator === "<" || h.operator === "<=", a) {
                if (d && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === d.major && h.semver.minor === d.minor && h.semver.patch === d.patch && (d = !1), h.operator === ">" || h.operator === ">=") {
                    if (o = dp(a, h, r), o === h && o !== a) return !1
                } else if (a.operator === ">=" && !cn(a.semver, String(h), r)) return !1
            }
            if (i) {
                if (f && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === f.major && h.semver.minor === f.minor && h.semver.patch === f.patch && (f = !1), h.operator === "<" || h.operator === "<=") {
                    if (u = hp(i, h, r), u === h && u !== i) return !1
                } else if (i.operator === "<=" && !cn(i.semver, String(h), r)) return !1
            }
            if (!h.operator && (i || a) && s !== 0) return !1
        }
        return !(a && c && !i && s !== 0 || i && l && !a && s !== 0 || d || f)
    },
    dp = (e, t, r) => {
        if (!e) return t;
        const n = Ml(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e
    },
    hp = (e, t, r) => {
        if (!e) return t;
        const n = Ml(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e
    };
var fU = uU;
const eu = ga,
    pp = ks,
    dU = be,
    mp = fb,
    hU = tn,
    pU = hD,
    mU = gD,
    gU = yD,
    vU = wD,
    yU = $D,
    bU = RD,
    wU = ND,
    EU = ID,
    SU = We,
    $U = FD,
    AU = UD,
    OU = kl,
    RU = zD,
    _U = GD,
    CU = Fs,
    NU = Ll,
    xU = db,
    TU = hb,
    IU = Fl,
    PU = Dl,
    kU = pb,
    LU = mj,
    FU = Ds(),
    DU = Ge(),
    jU = js,
    UU = Nj,
    MU = Pj,
    BU = Dj,
    VU = Mj,
    zU = zj,
    qU = jl,
    WU = Zj,
    GU = rU,
    HU = aU,
    KU = oU,
    XU = fU;
var DB = {
        parse: hU,
        valid: pU,
        clean: mU,
        inc: gU,
        diff: vU,
        major: yU,
        minor: bU,
        patch: wU,
        prerelease: EU,
        compare: SU,
        rcompare: $U,
        compareLoose: AU,
        compareBuild: OU,
        sort: RU,
        rsort: _U,
        gt: CU,
        lt: NU,
        eq: xU,
        neq: TU,
        gte: IU,
        lte: PU,
        cmp: kU,
        coerce: LU,
        Comparator: FU,
        Range: DU,
        satisfies: jU,
        toComparators: UU,
        maxSatisfying: MU,
        minSatisfying: BU,
        minVersion: VU,
        validRange: zU,
        outside: qU,
        gtr: WU,
        ltr: GU,
        intersects: HU,
        simplifyRange: KU,
        subset: XU,
        SemVer: dU,
        re: eu.re,
        src: eu.src,
        tokens: eu.t,
        SEMVER_SPEC_VERSION: pp.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: pp.RELEASE_TYPES,
        compareIdentifiers: mp.compareIdentifiers,
        rcompareIdentifiers: mp.rcompareIdentifiers
    },
    YU = typeof Element < "u",
    JU = typeof Map == "function",
    QU = typeof Set == "function",
    ZU = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function si(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var r, n, a;
        if (Array.isArray(e)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (!si(e[n], t[n])) return !1;
            return !0
        }
        var i;
        if (JU && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!si(n.value[1], t.get(n.value[0]))) return !1;
            return !0
        }
        if (QU && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(n = i.next()).done;)
                if (!t.has(n.value[0])) return !1;
            return !0
        }
        if (ZU && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; n-- !== 0;)
                if (e[n] !== t[n]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length) return !1;
        for (n = r; n-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, a[n])) return !1;
        if (YU && e instanceof Element) return !1;
        for (n = r; n-- !== 0;)
            if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && e.$$typeof) && !si(e[a[n]], t[a[n]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var eM = function(t, r) {
    try {
        return si(t, r)
    } catch (n) {
        if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw n
    }
};
const jB = Re(eM);
var tM = function(e, t, r, n, a, i, s, o) {
        if (!e) {
            var u;
            if (t === void 0) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [r, n, a, i, s, o],
                    l = 0;
                u = new Error(t.replace(/%s/g, function() {
                    return c[l++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    },
    rM = tM;
const UB = Re(rM);
var nM = function(t, r, n, a) {
    var i = n ? n.call(a, t, r) : void 0;
    if (i !== void 0) return !!i;
    if (t === r) return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r) return !1;
    var s = Object.keys(t),
        o = Object.keys(r);
    if (s.length !== o.length) return !1;
    for (var u = Object.prototype.hasOwnProperty.bind(r), c = 0; c < s.length; c++) {
        var l = s[c];
        if (!u(l)) return !1;
        var f = t[l],
            d = r[l];
        if (i = n ? n.call(a, f, d, l) : void 0, i === !1 || i === void 0 && f !== d) return !1
    }
    return !0
};
const MB = Re(nM),
    aM = {
        type: "logger",
        log(e) {
            this.output("log", e)
        },
        warn(e) {
            this.output("warn", e)
        },
        error(e) {
            this.output("error", e)
        },
        output(e, t) {
            console && console[e] && console[e].apply(console, t)
        }
    };
class Fi {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(t, r)
    }
    init(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = r.prefix || "i18next:", this.logger = t || aM, this.options = r, this.debug = r.debug
    }
    log() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "log", "", !0)
    }
    warn() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "warn", "", !0)
    }
    error() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "error", "")
    }
    deprecate() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return this.forward(r, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(t, r, n, a) {
        return a && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t))
    }
    create(t) {
        return new Fi(this.logger, {
            prefix: `${this.prefix}:${t}:`,
            ...this.options
        })
    }
    clone(t) {
        return t = t || this.options, t.prefix = t.prefix || this.prefix, new Fi(this.logger, t)
    }
}
var et = new Fi;
class Us {
    constructor() {
        this.observers = {}
    }
    on(t, r) {
        return t.split(" ").forEach(n => {
            this.observers[n] = this.observers[n] || [], this.observers[n].push(r)
        }), this
    }
    off(t, r) {
        if (this.observers[t]) {
            if (!r) {
                delete this.observers[t];
                return
            }
            this.observers[t] = this.observers[t].filter(n => n !== r)
        }
    }
    emit(t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
        this.observers[t] && [].concat(this.observers[t]).forEach(s => {
            s(...n)
        }), this.observers["*"] && [].concat(this.observers["*"]).forEach(s => {
            s.apply(s, [t, ...n])
        })
    }
}

function ln() {
    let e, t;
    const r = new Promise((n, a) => {
        e = n, t = a
    });
    return r.resolve = e, r.reject = t, r
}

function gp(e) {
    return e == null ? "" : "" + e
}

function iM(e, t, r) {
    e.forEach(n => {
        t[n] && (r[n] = t[n])
    })
}

function Bl(e, t, r) {
    function n(s) {
        return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s
    }

    function a() {
        return !e || typeof e == "string"
    }
    const i = typeof t != "string" ? [].concat(t) : t.split(".");
    for (; i.length > 1;) {
        if (a()) return {};
        const s = n(i.shift());
        !e[s] && r && (e[s] = new r), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {}
    }
    return a() ? {} : {
        obj: e,
        k: n(i.shift())
    }
}

function vp(e, t, r) {
    const {
        obj: n,
        k: a
    } = Bl(e, t, Object);
    n[a] = r
}

function sM(e, t, r, n) {
    const {
        obj: a,
        k: i
    } = Bl(e, t, Object);
    a[i] = a[i] || [], n && (a[i] = a[i].concat(r)), n || a[i].push(r)
}

function Di(e, t) {
    const {
        obj: r,
        k: n
    } = Bl(e, t);
    if (r) return r[n]
}

function oM(e, t, r) {
    const n = Di(e, r);
    return n !== void 0 ? n : Di(t, r)
}

function vb(e, t, r) {
    for (const n in t) n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n] instanceof String || typeof t[n] == "string" || t[n] instanceof String ? r && (e[n] = t[n]) : vb(e[n], t[n], r) : e[n] = t[n]);
    return e
}

function gr(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var uM = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

function cM(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, t => uM[t]) : e
}
const lM = [" ", ",", "?", "!", ";"];

function fM(e, t, r) {
    t = t || "", r = r || "";
    const n = lM.filter(s => t.indexOf(s) < 0 && r.indexOf(s) < 0);
    if (n.length === 0) return !0;
    const a = new RegExp(`(${n.map(s=>s==="?"?"\\?":s).join("|")})`);
    let i = !a.test(e);
    if (!i) {
        const s = e.indexOf(r);
        s > 0 && !a.test(e.substring(0, s)) && (i = !0)
    }
    return i
}

function ji(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const n = t.split(r);
    let a = e;
    for (let i = 0; i < n.length; ++i) {
        if (!a || typeof a[n[i]] == "string" && i + 1 < n.length) return;
        if (a[n[i]] === void 0) {
            let s = 2,
                o = n.slice(i, i + s).join(r),
                u = a[o];
            for (; u === void 0 && n.length > i + s;) s++, o = n.slice(i, i + s).join(r), u = a[o];
            if (u === void 0) return;
            if (u === null) return null;
            if (t.endsWith(o)) {
                if (typeof u == "string") return u;
                if (o && typeof u[o] == "string") return u[o]
            }
            const c = n.slice(i + s).join(r);
            return c ? ji(u, c, r) : void 0
        }
        a = a[n[i]]
    }
    return a
}

function Ui(e) {
    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
}
class yp extends Us {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(t) {
        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
    }
    removeNamespaces(t) {
        const r = this.options.ns.indexOf(t);
        r > -1 && this.options.ns.splice(r, 1)
    }
    getResource(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
            s = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let o = [t, r];
        n && typeof n != "string" && (o = o.concat(n)), n && typeof n == "string" && (o = o.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (o = t.split("."));
        const u = Di(this.data, o);
        return u || !s || typeof n != "string" ? u : ji(this.data && this.data[t] && this.data[t][r], n, i)
    }
    addResource(t, r, n, a) {
        let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
        let o = [t, r];
        n && (o = o.concat(s ? n.split(s) : n)), t.indexOf(".") > -1 && (o = t.split("."), a = r, r = o[1]), this.addNamespaces(r), vp(this.data, o, a), i.silent || this.emit("added", t, r, n, a)
    }
    addResources(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const i in n)(typeof n[i] == "string" || Object.prototype.toString.apply(n[i]) === "[object Array]") && this.addResource(t, r, i, n[i], {
            silent: !0
        });
        a.silent || this.emit("added", t, r, n)
    }
    addResourceBundle(t, r, n, a, i) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                silent: !1
            },
            o = [t, r];
        t.indexOf(".") > -1 && (o = t.split("."), a = n, n = r, r = o[1]), this.addNamespaces(r);
        let u = Di(this.data, o) || {};
        a ? vb(u, n, i) : u = {
            ...u,
            ...n
        }, vp(this.data, o, u), s.silent || this.emit("added", t, r, n)
    }
    removeResourceBundle(t, r) {
        this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r)
    }
    hasResourceBundle(t, r) {
        return this.getResource(t, r) !== void 0
    }
    getResourceBundle(t, r) {
        return r || (r = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
            ...this.getResource(t, r)
        } : this.getResource(t, r)
    }
    getDataByLanguage(t) {
        return this.data[t]
    }
    hasLanguageSomeTranslations(t) {
        const r = this.getDataByLanguage(t);
        return !!(r && Object.keys(r) || []).find(a => r[a] && Object.keys(r[a]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var yb = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, r, n, a) {
        return e.forEach(i => {
            this.processors[i] && (t = this.processors[i].process(t, r, n, a))
        }), t
    }
};
const bp = {};
class Mi extends Us {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(), iM(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = et.create("translator")
    }
    changeLanguage(t) {
        t && (this.language = t)
    }
    exists(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (t == null) return !1;
        const n = this.resolve(t, r);
        return n && n.res !== void 0
    }
    extractFromKey(t, r) {
        let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
        n === void 0 && (n = ":");
        const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let i = r.ns || this.options.defaultNS || [];
        const s = n && t.indexOf(n) > -1,
            o = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !fM(t, n, a);
        if (s && !o) {
            const u = t.match(this.interpolator.nestingRegexp);
            if (u && u.length > 0) return {
                key: t,
                namespaces: i
            };
            const c = t.split(n);
            (n !== a || n === a && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(a)
        }
        return typeof i == "string" && (i = [i]), {
            key: t,
            namespaces: i
        }
    }
    translate(t, r, n) {
        if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
                ...r
            }), r || (r = {}), t == null) return "";
        Array.isArray(t) || (t = [String(t)]);
        const a = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
            i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
            {
                key: s,
                namespaces: o
            } = this.extractFromKey(t[t.length - 1], r),
            u = o[o.length - 1],
            c = r.lng || this.language,
            l = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (c && c.toLowerCase() === "cimode") {
            if (l) {
                const N = r.nsSeparator || this.options.nsSeparator;
                return a ? {
                    res: `${u}${N}${s}`,
                    usedKey: s,
                    exactUsedKey: s,
                    usedLng: c,
                    usedNS: u,
                    usedParams: this.getUsedParamsDetails(r)
                } : `${u}${N}${s}`
            }
            return a ? {
                res: s,
                usedKey: s,
                exactUsedKey: s,
                usedLng: c,
                usedNS: u,
                usedParams: this.getUsedParamsDetails(r)
            } : s
        }
        const f = this.resolve(t, r);
        let d = f && f.res;
        const h = f && f.usedKey || s,
            p = f && f.exactUsedKey || s,
            v = Object.prototype.toString.apply(d),
            y = ["[object Number]", "[object Function]", "[object RegExp]"],
            A = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (m && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && y.indexOf(v) < 0 && !(typeof A == "string" && v === "[object Array]")) {
            if (!r.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const N = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, d, {
                    ...r,
                    ns: o
                }) : `key '${s} (${this.language})' returned an object instead of string.`;
                return a ? (f.res = N, f.usedParams = this.getUsedParamsDetails(r), f) : N
            }
            if (i) {
                const N = v === "[object Array]",
                    x = N ? [] : {},
                    j = N ? p : h;
                for (const D in d)
                    if (Object.prototype.hasOwnProperty.call(d, D)) {
                        const M = `${j}${i}${D}`;
                        x[D] = this.translate(M, {
                            ...r,
                            joinArrays: !1,
                            ns: o
                        }), x[D] === M && (x[D] = d[D])
                    } d = x
            }
        } else if (m && typeof A == "string" && v === "[object Array]") d = d.join(A), d && (d = this.extendTranslation(d, t, r, n));
        else {
            let N = !1,
                x = !1;
            const j = r.count !== void 0 && typeof r.count != "string",
                D = Mi.hasDefaultValue(r),
                M = j ? this.pluralResolver.getSuffix(c, r.count, r) : "",
                k = r.ordinal && j ? this.pluralResolver.getSuffix(c, r.count, {
                    ordinal: !1
                }) : "",
                G = r[`defaultValue${M}`] || r[`defaultValue${k}`] || r.defaultValue;
            !this.isValidLookup(d) && D && (N = !0, d = G), this.isValidLookup(d) || (x = !0, d = s);
            const _ = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : d,
                $ = D && G !== d && this.options.updateMissing;
            if (x || N || $) {
                if (this.logger.log($ ? "updateKey" : "missingKey", c, u, s, $ ? G : d), i) {
                    const S = this.resolve(s, {
                        ...r,
                        keySeparator: !1
                    });
                    S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let g = [];
                const b = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && b && b[0])
                    for (let S = 0; S < b.length; S++) g.push(b[S]);
                else this.options.saveMissingTo === "all" ? g = this.languageUtils.toResolveHierarchy(r.lng || this.language) : g.push(r.lng || this.language);
                const E = (S, w, O) => {
                    const C = D && O !== d ? O : _;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(S, u, w, C, $, r) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(S, u, w, C, $, r), this.emit("missingKey", S, u, w, d)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && j ? g.forEach(S => {
                    this.pluralResolver.getSuffixes(S, r).forEach(w => {
                        E([S], s + w, r[`defaultValue${w}`] || G)
                    })
                }) : E(g, s, G))
            }
            d = this.extendTranslation(d, t, r, f, n), x && d === s && this.options.appendNamespaceToMissingKey && (d = `${u}:${s}`), (x || N) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s, N ? d : void 0) : d = this.options.parseMissingKeyHandler(d))
        }
        return a ? (f.res = d, f.usedParams = this.getUsedParamsDetails(r), f) : d
    }
    extendTranslation(t, r, n, a, i) {
        var s = this;
        if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, {
            ...this.options.interpolation.defaultVariables,
            ...n
        }, n.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
            resolved: a
        });
        else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({
                ...n,
                interpolation: {
                    ...this.options.interpolation,
                    ...n.interpolation
                }
            });
            const c = typeof t == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let l;
            if (c) {
                const d = t.match(this.interpolator.nestingRegexp);
                l = d && d.length
            }
            let f = n.replace && typeof n.replace != "string" ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (f = {
                    ...this.options.interpolation.defaultVariables,
                    ...f
                }), t = this.interpolator.interpolate(t, f, n.lng || this.language, n), c) {
                const d = t.match(this.interpolator.nestingRegexp),
                    h = d && d.length;
                l < h && (n.nest = !1)
            }!n.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (n.lng = a.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, function() {
                for (var d = arguments.length, h = new Array(d), p = 0; p < d; p++) h[p] = arguments[p];
                return i && i[0] === h[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${r[0]}`), null) : s.translate(...h, r)
            }, n)), n.interpolation && this.interpolator.reset()
        }
        const o = n.postProcess || this.options.postProcess,
            u = typeof o == "string" ? [o] : o;
        return t != null && u && u.length && n.applyPostProcessor !== !1 && (t = yb.handle(u, t, r, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...a,
                usedParams: this.getUsedParamsDetails(n)
            },
            ...n
        } : n, this)), t
    }
    resolve(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            n, a, i, s, o;
        return typeof t == "string" && (t = [t]), t.forEach(u => {
            if (this.isValidLookup(n)) return;
            const c = this.extractFromKey(u, r),
                l = c.key;
            a = l;
            let f = c.namespaces;
            this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
            const d = r.count !== void 0 && typeof r.count != "string",
                h = d && !r.ordinal && r.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                p = r.context !== void 0 && (typeof r.context == "string" || typeof r.context == "number") && r.context !== "",
                v = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
            f.forEach(y => {
                this.isValidLookup(n) || (o = y, !bp[`${v[0]}-${y}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (bp[`${v[0]}-${y}`] = !0, this.logger.warn(`key "${a}" for languages "${v.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach(A => {
                    if (this.isValidLookup(n)) return;
                    s = A;
                    const m = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(m, l, A, y, r);
                    else {
                        let N;
                        d && (N = this.pluralResolver.getSuffix(A, r.count, r));
                        const x = `${this.options.pluralSeparator}zero`,
                            j = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (d && (m.push(l + N), r.ordinal && N.indexOf(j) === 0 && m.push(l + N.replace(j, this.options.pluralSeparator)), h && m.push(l + x)), p) {
                            const D = `${l}${this.options.contextSeparator}${r.context}`;
                            m.push(D), d && (m.push(D + N), r.ordinal && N.indexOf(j) === 0 && m.push(D + N.replace(j, this.options.pluralSeparator)), h && m.push(D + x))
                        }
                    }
                    let R;
                    for (; R = m.pop();) this.isValidLookup(n) || (i = R, n = this.getResource(A, y, R, r))
                }))
            })
        }), {
            res: n,
            usedKey: a,
            exactUsedKey: i,
            usedLng: s,
            usedNS: o
        }
    }
    isValidLookup(t) {
        return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "")
    }
    getResource(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, r, n, a) : this.resourceStore.getResource(t, r, n, a)
    }
    getUsedParamsDetails() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            n = t.replace && typeof t.replace != "string";
        let a = n ? t.replace : t;
        if (n && typeof t.count < "u" && (a.count = t.count), this.options.interpolation.defaultVariables && (a = {
                ...this.options.interpolation.defaultVariables,
                ...a
            }), !n) {
            a = {
                ...a
            };
            for (const i of r) delete a[i]
        }
        return a
    }
    static hasDefaultValue(t) {
        const r = "defaultValue";
        for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n) && r === n.substring(0, r.length) && t[n] !== void 0) return !0;
        return !1
    }
}

function tu(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
class wp {
    constructor(t) {
        this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = et.create("languageUtils")
    }
    getScriptPartFromCode(t) {
        if (t = Ui(t), !t || t.indexOf("-") < 0) return null;
        const r = t.split("-");
        return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"))
    }
    getLanguagePartFromCode(t) {
        if (t = Ui(t), !t || t.indexOf("-") < 0) return t;
        const r = t.split("-");
        return this.formatLanguageCode(r[0])
    }
    formatLanguageCode(t) {
        if (typeof t == "string" && t.indexOf("-") > -1) {
            const r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = t.split("-");
            return this.options.lowerCaseLng ? n = n.map(a => a.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = tu(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), r.indexOf(n[1].toLowerCase()) > -1 && (n[1] = tu(n[1].toLowerCase())), r.indexOf(n[2].toLowerCase()) > -1 && (n[2] = tu(n[2].toLowerCase()))), n.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
    }
    isSupportedCode(t) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    }
    getBestMatchFromCodes(t) {
        if (!t) return null;
        let r;
        return t.forEach(n => {
            if (r) return;
            const a = this.formatLanguageCode(n);
            (!this.options.supportedLngs || this.isSupportedCode(a)) && (r = a)
        }), !r && this.options.supportedLngs && t.forEach(n => {
            if (r) return;
            const a = this.getLanguagePartFromCode(n);
            if (this.isSupportedCode(a)) return r = a;
            r = this.options.supportedLngs.find(i => {
                if (i === a) return i;
                if (!(i.indexOf("-") < 0 && a.indexOf("-") < 0) && i.indexOf(a) === 0) return i
            })
        }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r
    }
    getFallbackCodes(t, r) {
        if (!t) return [];
        if (typeof t == "function" && (t = t(r)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]") return t;
        if (!r) return t.default || [];
        let n = t[r];
        return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || []
    }
    toResolveHierarchy(t, r) {
        const n = this.getFallbackCodes(r || this.options.fallbackLng || [], t),
            a = [],
            i = s => {
                s && (this.isSupportedCode(s) ? a.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
            };
        return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), n.forEach(s => {
            a.indexOf(s) < 0 && i(this.formatLanguageCode(s))
        }), a
    }
}
let dM = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }],
    hM = {
        1: function(e) {
            return +(e > 1)
        },
        2: function(e) {
            return +(e != 1)
        },
        3: function(e) {
            return 0
        },
        4: function(e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        5: function(e) {
            return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
        },
        6: function(e) {
            return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
        },
        7: function(e) {
            return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        8: function(e) {
            return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3
        },
        9: function(e) {
            return +(e >= 2)
        },
        10: function(e) {
            return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
        },
        11: function(e) {
            return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3
        },
        12: function(e) {
            return +(e % 10 != 1 || e % 100 == 11)
        },
        13: function(e) {
            return +(e !== 0)
        },
        14: function(e) {
            return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3
        },
        15: function(e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        16: function(e) {
            return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2
        },
        17: function(e) {
            return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1
        },
        18: function(e) {
            return e == 0 ? 0 : e == 1 ? 1 : 2
        },
        19: function(e) {
            return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3
        },
        20: function(e) {
            return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2
        },
        21: function(e) {
            return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
        },
        22: function(e) {
            return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
        }
    };
const pM = ["v1", "v2", "v3"],
    mM = ["v4"],
    Ep = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    };

function gM() {
    const e = {};
    return dM.forEach(t => {
        t.lngs.forEach(r => {
            e[r] = {
                numbers: t.nr,
                plurals: hM[t.fc]
            }
        })
    }), e
}
class vM {
    constructor(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = t, this.options = r, this.logger = et.create("pluralResolver"), (!this.options.compatibilityJSON || mM.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = gM()
    }
    addRule(t, r) {
        this.rules[t] = r
    }
    getRule(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi()) try {
            return new Intl.PluralRules(Ui(t), {
                type: r.ordinal ? "ordinal" : "cardinal"
            })
        } catch {
            return
        }
        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    }
    needsPlural(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(t, r);
        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
    }
    getPluralFormsOfKey(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(t, n).map(a => `${r}${a}`)
    }
    getSuffixes(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const n = this.getRule(t, r);
        return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((a, i) => Ep[a] - Ep[i]).map(a => `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${a}`) : n.numbers.map(a => this.getSuffix(t, a, r)) : []
    }
    getSuffix(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const a = this.getRule(t, n);
        return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${a.select(r)}` : this.getSuffixRetroCompatible(a, r) : (this.logger.warn(`no plural rule found for: ${t}`), "")
    }
    getSuffixRetroCompatible(t, r) {
        const n = t.noAbs ? t.plurals(r) : t.plurals(Math.abs(r));
        let a = t.numbers[n];
        this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
        const i = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
        return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
    }
    shouldUseIntlApi() {
        return !pM.includes(this.options.compatibilityJSON)
    }
}

function Sp(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        i = oM(e, t, r);
    return !i && a && typeof r == "string" && (i = ji(e, r, n), i === void 0 && (i = ji(t, r, n))), i
}
class yM {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = et.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || (r => r), this.init(t)
    }
    init() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        t.interpolation || (t.interpolation = {
            escapeValue: !0
        });
        const r = t.interpolation;
        this.escape = r.escape !== void 0 ? r.escape : cM, this.escapeValue = r.escapeValue !== void 0 ? r.escapeValue : !0, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 ? r.useRawValueToEscape : !1, this.prefix = r.prefix ? gr(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? gr(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? gr(r.nestingPrefix) : r.nestingPrefixEscaped || gr("$t("), this.nestingSuffix = r.nestingSuffix ? gr(r.nestingSuffix) : r.nestingSuffixEscaped || gr(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 ? r.alwaysFormat : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const t = `${this.prefix}(.+?)${this.suffix}`;
        this.regexp = new RegExp(t, "g");
        const r = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
        this.regexpUnescape = new RegExp(r, "g");
        const n = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
        this.nestingRegexp = new RegExp(n, "g")
    }
    interpolate(t, r, n, a) {
        let i, s, o;
        const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function c(p) {
            return p.replace(/\$/g, "$$$$")
        }
        const l = p => {
            if (p.indexOf(this.formatSeparator) < 0) {
                const m = Sp(r, u, p, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(m, void 0, n, {
                    ...a,
                    ...r,
                    interpolationkey: p
                }) : m
            }
            const v = p.split(this.formatSeparator),
                y = v.shift().trim(),
                A = v.join(this.formatSeparator).trim();
            return this.format(Sp(r, u, y, this.options.keySeparator, this.options.ignoreJSONStructure), A, n, {
                ...a,
                ...r,
                interpolationkey: y
            })
        };
        this.resetRegExp();
        const f = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler,
            d = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: p => c(p)
        }, {
            regex: this.regexp,
            safeValue: p => this.escapeValue ? c(this.escape(p)) : c(p)
        }].forEach(p => {
            for (o = 0; i = p.regex.exec(t);) {
                const v = i[1].trim();
                if (s = l(v), s === void 0)
                    if (typeof f == "function") {
                        const A = f(t, i, a);
                        s = typeof A == "string" ? A : ""
                    } else if (a && Object.prototype.hasOwnProperty.call(a, v)) s = "";
                else if (d) {
                    s = i[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`), s = "";
                else typeof s != "string" && !this.useRawValueToEscape && (s = gp(s));
                const y = p.safeValue(s);
                if (t = t.replace(i[0], y), d ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
            }
        }), t
    }
    nest(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a, i, s;

        function o(u, c) {
            const l = this.nestingOptionsSeparator;
            if (u.indexOf(l) < 0) return u;
            const f = u.split(new RegExp(`${l}[ ]*{`));
            let d = `{${f[1]}`;
            u = f[0], d = this.interpolate(d, s);
            const h = d.match(/'/g),
                p = d.match(/"/g);
            (h && h.length % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
                s = JSON.parse(d), c && (s = {
                    ...c,
                    ...s
                })
            } catch (v) {
                return this.logger.warn(`failed parsing options string in nesting for key ${u}`, v), `${u}${l}${d}`
            }
            return delete s.defaultValue, u
        }
        for (; a = this.nestingRegexp.exec(t);) {
            let u = [];
            s = {
                ...n
            }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
            let c = !1;
            if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
                const l = a[1].split(this.formatSeparator).map(f => f.trim());
                a[1] = l.shift(), u = l, c = !0
            }
            if (i = r(o.call(this, a[1].trim(), s), s), i && a[0] === t && typeof i != "string") return i;
            typeof i != "string" && (i = gp(i)), i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`), i = ""), c && (i = u.reduce((l, f) => this.format(l, f, n.lng, {
                ...n,
                interpolationkey: a[1].trim()
            }), i.trim())), t = t.replace(a[0], i), this.regexp.lastIndex = 0
        }
        return t
    }
}

function bM(e) {
    let t = e.toLowerCase().trim();
    const r = {};
    if (e.indexOf("(") > -1) {
        const n = e.split("(");
        t = n[0].toLowerCase().trim();
        const a = n[1].substring(0, n[1].length - 1);
        t === "currency" && a.indexOf(":") < 0 ? r.currency || (r.currency = a.trim()) : t === "relativetime" && a.indexOf(":") < 0 ? r.range || (r.range = a.trim()) : a.split(";").forEach(s => {
            if (!s) return;
            const [o, ...u] = s.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, "");
            r[o.trim()] || (r[o.trim()] = c), c === "false" && (r[o.trim()] = !1), c === "true" && (r[o.trim()] = !0), isNaN(c) || (r[o.trim()] = parseInt(c, 10))
        })
    }
    return {
        formatName: t,
        formatOptions: r
    }
}

function vr(e) {
    const t = {};
    return function(n, a, i) {
        const s = a + JSON.stringify(i);
        let o = t[s];
        return o || (o = e(Ui(a), i), t[s] = o), o(n)
    }
}
class wM {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = et.create("formatter"), this.options = t, this.formats = {
            number: vr((r, n) => {
                const a = new Intl.NumberFormat(r, {
                    ...n
                });
                return i => a.format(i)
            }),
            currency: vr((r, n) => {
                const a = new Intl.NumberFormat(r, {
                    ...n,
                    style: "currency"
                });
                return i => a.format(i)
            }),
            datetime: vr((r, n) => {
                const a = new Intl.DateTimeFormat(r, {
                    ...n
                });
                return i => a.format(i)
            }),
            relativetime: vr((r, n) => {
                const a = new Intl.RelativeTimeFormat(r, {
                    ...n
                });
                return i => a.format(i, n.range || "day")
            }),
            list: vr((r, n) => {
                const a = new Intl.ListFormat(r, {
                    ...n
                });
                return i => a.format(i)
            })
        }, this.init(t)
    }
    init(t) {
        const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
    }
    add(t, r) {
        this.formats[t.toLowerCase().trim()] = r
    }
    addCached(t, r) {
        this.formats[t.toLowerCase().trim()] = vr(r)
    }
    format(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return r.split(this.formatSeparator).reduce((o, u) => {
            const {
                formatName: c,
                formatOptions: l
            } = bM(u);
            if (this.formats[c]) {
                let f = o;
                try {
                    const d = a && a.formatParams && a.formatParams[a.interpolationkey] || {},
                        h = d.locale || d.lng || a.locale || a.lng || n;
                    f = this.formats[c](o, h, {
                        ...l,
                        ...a,
                        ...d
                    })
                } catch (d) {
                    this.logger.warn(d)
                }
                return f
            } else this.logger.warn(`there was no format function for ${c}`);
            return o
        }, t)
    }
}

function EM(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class SM extends Us {
    constructor(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(), this.backend = t, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = a, this.logger = et.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, a.backend, a)
    }
    queueLoad(t, r, n, a) {
        const i = {},
            s = {},
            o = {},
            u = {};
        return t.forEach(c => {
            let l = !0;
            r.forEach(f => {
                const d = `${c}|${f}`;
                !n.reload && this.store.hasResourceBundle(c, f) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? s[d] === void 0 && (s[d] = !0) : (this.state[d] = 1, l = !1, s[d] === void 0 && (s[d] = !0), i[d] === void 0 && (i[d] = !0), u[f] === void 0 && (u[f] = !0)))
            }), l || (o[c] = !0)
        }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({
            pending: s,
            pendingCount: Object.keys(s).length,
            loaded: {},
            errors: [],
            callback: a
        }), {
            toLoad: Object.keys(i),
            pending: Object.keys(s),
            toLoadLanguages: Object.keys(o),
            toLoadNamespaces: Object.keys(u)
        }
    }
    loaded(t, r, n) {
        const a = t.split("|"),
            i = a[0],
            s = a[1];
        r && this.emit("failedLoading", i, s, r), n && this.store.addResourceBundle(i, s, n), this.state[t] = r ? -1 : 2;
        const o = {};
        this.queue.forEach(u => {
            sM(u.loaded, [i], s), EM(u, t), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach(c => {
                o[c] || (o[c] = {});
                const l = u.loaded[c];
                l.length && l.forEach(f => {
                    o[c][f] === void 0 && (o[c][f] = !0)
                })
            }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback())
        }), this.emit("loaded", o), this.queue = this.queue.filter(u => !u.done)
    }
    read(t, r, n) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0;
        if (!t.length) return s(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: t,
                ns: r,
                fcName: n,
                tried: a,
                wait: i,
                callback: s
            });
            return
        }
        this.readingCalls++;
        const o = (c, l) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const f = this.waitingReads.shift();
                    this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
                }
                if (c && l && a < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, t, r, n, a + 1, i * 2, s)
                    }, i);
                    return
                }
                s(c, l)
            },
            u = this.backend[n].bind(this.backend);
        if (u.length === 2) {
            try {
                const c = u(t, r);
                c && typeof c.then == "function" ? c.then(l => o(null, l)).catch(o) : o(null, c)
            } catch (c) {
                o(c)
            }
            return
        }
        return u(t, r, o)
    }
    prepareLoading(t, r) {
        let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
        typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof r == "string" && (r = [r]);
        const i = this.queueLoad(t, r, n, a);
        if (!i.toLoad.length) return i.pending.length || a(), null;
        i.toLoad.forEach(s => {
            this.loadOne(s)
        })
    }
    load(t, r, n) {
        this.prepareLoading(t, r, {}, n)
    }
    reload(t, r, n) {
        this.prepareLoading(t, r, {
            reload: !0
        }, n)
    }
    loadOne(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const n = t.split("|"),
            a = n[0],
            i = n[1];
        this.read(a, i, "read", void 0, void 0, (s, o) => {
            s && this.logger.warn(`${r}loading namespace ${i} for language ${a} failed`, s), !s && o && this.logger.log(`${r}loaded namespace ${i} for language ${a}`, o), this.loaded(t, s, o)
        })
    }
    saveMissing(t, r, n, a, i) {
        let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(r)) {
            this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(n == null || n === "")) {
            if (this.backend && this.backend.create) {
                const u = {
                        ...s,
                        isUpdate: i
                    },
                    c = this.backend.create.bind(this.backend);
                if (c.length < 6) try {
                    let l;
                    c.length === 5 ? l = c(t, r, n, a, u) : l = c(t, r, n, a), l && typeof l.then == "function" ? l.then(f => o(null, f)).catch(o) : o(null, l)
                } catch (l) {
                    o(l)
                } else c(t, r, n, a, o, u)
            }!t || !t[0] || this.store.addResource(t[0], r, n, a)
        }
    }
}

function $p() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            let r = {};
            if (typeof t[1] == "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
                const n = t[3] || t[2];
                Object.keys(n).forEach(a => {
                    r[a] = n[a]
                })
            }
            return r
        },
        interpolation: {
            escapeValue: !0,
            format: (e, t, r, n) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}

function Ap(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
}

function Ma() {}

function $M(e) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(r => {
        typeof e[r] == "function" && (e[r] = e[r].bind(e))
    })
}
class qn extends Us {
    constructor() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        if (super(), this.options = Ap(t), this.services = {}, this.logger = et, this.modules = {
                external: []
            }, $M(this), r && !this.isInitialized && !t.isClone) {
            if (!this.options.initImmediate) return this.init(t, r), this;
            setTimeout(() => {
                this.init(t, r)
            }, 0)
        }
    }
    init() {
        var t = this;
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
        typeof r == "function" && (n = r, r = {}), !r.defaultNS && r.defaultNS !== !1 && r.ns && (typeof r.ns == "string" ? r.defaultNS = r.ns : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
        const a = $p();
        this.options = {
            ...a,
            ...this.options,
            ...Ap(r)
        }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
            ...a.interpolation,
            ...this.options.interpolation
        }), r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator), r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);

        function i(l) {
            return l ? typeof l == "function" ? new l : l : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? et.init(i(this.modules.logger), this.options) : et.init(null, this.options);
            let l;
            this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = wM);
            const f = new wp(this.options);
            this.store = new yp(this.options.resources, this.options);
            const d = this.services;
            d.logger = et, d.resourceStore = this.store, d.languageUtils = f, d.pluralResolver = new vM(f, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), l && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (d.formatter = i(l), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new yM(this.options), d.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, d.backendConnector = new SM(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(h) {
                for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++) v[y - 1] = arguments[y];
                t.emit(h, ...v)
            }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Mi(this.services, this.options), this.translator.on("*", function(h) {
                for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++) v[y - 1] = arguments[y];
                t.emit(h, ...v)
            }), this.modules.external.forEach(h => {
                h.init && h.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, n || (n = Ma), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(l => {
            this[l] = function() {
                return t.store[l](...arguments)
            }
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(l => {
            this[l] = function() {
                return t.store[l](...arguments), t
            }
        });
        const u = ln(),
            c = () => {
                const l = (f, d) => {
                    this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(d), n(f, d)
                };
                if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return l(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, l)
            };
        return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), u
    }
    loadResources(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma;
        const a = typeof t == "string" ? t : this.language;
        if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
            if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
            const i = [],
                s = o => {
                    if (!o || o === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(o).forEach(c => {
                        c !== "cimode" && i.indexOf(c) < 0 && i.push(c)
                    })
                };
            a ? s(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u => s(u)), this.options.preload && this.options.preload.forEach(o => s(o)), this.services.backendConnector.load(i, this.options.ns, o => {
                !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(o)
            })
        } else n(null)
    }
    reloadResources(t, r, n) {
        const a = ln();
        return t || (t = this.languages), r || (r = this.options.ns), n || (n = Ma), this.services.backendConnector.reload(t, r, i => {
            a.resolve(), n(i)
        }), a
    }
    use(t) {
        if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && yb.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this
    }
    setResolvedLanguage(t) {
        if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
            for (let r = 0; r < this.languages.length; r++) {
                const n = this.languages[r];
                if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                    this.resolvedLanguage = n;
                    break
                }
            }
    }
    changeLanguage(t, r) {
        var n = this;
        this.isLanguageChangingTo = t;
        const a = ln();
        this.emit("languageChanging", t);
        const i = u => {
                this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u)
            },
            s = (u, c) => {
                c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
                    return n.t(...arguments)
                }), r && r(u, function() {
                    return n.t(...arguments)
                })
            },
            o = u => {
                !t && !u && this.services.languageDetector && (u = []);
                const c = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
                c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, l => {
                    s(l, c)
                })
            };
        return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), a
    }
    getFixedT(t, r, n) {
        var a = this;
        const i = function(s, o) {
            let u;
            if (typeof o != "object") {
                for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) l[f - 2] = arguments[f];
                u = a.options.overloadTranslationOptionHandler([s, o].concat(l))
            } else u = {
                ...o
            };
            u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix = u.keyPrefix || n || i.keyPrefix;
            const d = a.options.keySeparator || ".";
            let h;
            return u.keyPrefix && Array.isArray(s) ? h = s.map(p => `${u.keyPrefix}${d}${p}`) : h = u.keyPrefix ? `${u.keyPrefix}${d}${s}` : s, a.t(h, u)
        };
        return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = r, i.keyPrefix = n, i
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(t) {
        this.options.defaultNS = t
    }
    hasLoadedNamespace(t) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const n = r.lng || this.resolvedLanguage || this.languages[0],
            a = this.options ? this.options.fallbackLng : !1,
            i = this.languages[this.languages.length - 1];
        if (n.toLowerCase() === "cimode") return !0;
        const s = (o, u) => {
            const c = this.services.backendConnector.state[`${o}|${u}`];
            return c === -1 || c === 2
        };
        if (r.precheck) {
            const o = r.precheck(this, s);
            if (o !== void 0) return o
        }
        return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, t) && (!a || s(i, t)))
    }
    loadNamespaces(t, r) {
        const n = ln();
        return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach(a => {
            this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
        }), this.loadResources(a => {
            n.resolve(), r && r(a)
        }), n) : (r && r(), Promise.resolve())
    }
    loadLanguages(t, r) {
        const n = ln();
        typeof t == "string" && (t = [t]);
        const a = this.options.preload || [],
            i = t.filter(s => a.indexOf(s) < 0);
        return i.length ? (this.options.preload = a.concat(i), this.loadResources(s => {
            n.resolve(), r && r(s)
        }), n) : (r && r(), Promise.resolve())
    }
    dir(t) {
        if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
        const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            n = this.services && this.services.languageUtils || new wp($p());
        return r.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
        return new qn(t, r)
    }
    cloneInstance() {
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ma;
        const n = t.forkResourceStore;
        n && delete t.forkResourceStore;
        const a = {
                ...this.options,
                ...t,
                isClone: !0
            },
            i = new qn(a);
        return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach(o => {
            i[o] = this[o]
        }), i.services = {
            ...this.services
        }, i.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, n && (i.store = new yp(this.store.data, a), i.services.resourceStore = i.store), i.translator = new Mi(i.services, a), i.translator.on("*", function(o) {
            for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++) c[l - 1] = arguments[l];
            i.emit(o, ...c)
        }), i.init(a, r), i.translator.options = a, i.translator.backendConnector.services.utils = {
            hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
        }, i
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const we = qn.createInstance();
we.createInstance = qn.createInstance;
we.createInstance;
we.dir;
we.init;
we.loadResources;
we.reloadResources;
we.use;
we.changeLanguage;
we.getFixedT;
const BB = we.t;
we.exists;
we.setDefaultNamespace;
we.hasLoadedNamespace;
we.loadNamespaces;
we.loadLanguages;

function Op() {
    return Op = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Op.apply(this, arguments)
}
var AM = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
const OM = Re(AM);
var RM = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

function Rp(e) {
    var t = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: []
        },
        r = e.match(/<\/?([^\s]+?)[/\s>]/);
    if (r && (t.name = r[1], (OM[r[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
        var n = e.indexOf("-->");
        return {
            type: "comment",
            comment: n !== -1 ? e.slice(4, n) : ""
        }
    }
    for (var a = new RegExp(RM), i = null;
        (i = a.exec(e)) !== null;)
        if (i[0].trim())
            if (i[1]) {
                var s = i[1].trim(),
                    o = [s, ""];
                s.indexOf("=") > -1 && (o = s.split("=")), t.attrs[o[0]] = o[1], a.lastIndex--
            } else i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
    return t
}
var _M = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
    CM = /^\s*$/,
    NM = Object.create(null);

function bb(e, t) {
    switch (t.type) {
        case "text":
            return e + t.content;
        case "tag":
            return e += "<" + t.name + (t.attrs ? function(r) {
                var n = [];
                for (var a in r) n.push(a + '="' + r[a] + '"');
                return n.length ? " " + n.join(" ") : ""
            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(bb, "") + "</" + t.name + ">";
        case "comment":
            return e + "<!--" + t.comment + "-->"
    }
}
var VB = {
    parse: function(e, t) {
        t || (t = {}), t.components || (t.components = NM);
        var r, n = [],
            a = [],
            i = -1,
            s = !1;
        if (e.indexOf("<") !== 0) {
            var o = e.indexOf("<");
            n.push({
                type: "text",
                content: o === -1 ? e : e.substring(0, o)
            })
        }
        return e.replace(_M, function(u, c) {
            if (s) {
                if (u !== "</" + r.name + ">") return;
                s = !1
            }
            var l, f = u.charAt(1) !== "/",
                d = u.startsWith("<!--"),
                h = c + u.length,
                p = e.charAt(h);
            if (d) {
                var v = Rp(u);
                return i < 0 ? (n.push(v), n) : ((l = a[i]).children.push(v), n)
            }
            if (f && (i++, (r = Rp(u)).type === "tag" && t.components[r.name] && (r.type = "component", s = !0), r.voidElement || s || !p || p === "<" || r.children.push({
                    type: "text",
                    content: e.slice(h, e.indexOf("<", h))
                }), i === 0 && n.push(r), (l = a[i - 1]) && l.children.push(r), a[i] = r), (!f || r.voidElement) && (i > -1 && (r.voidElement || r.name === u.slice(2, -1)) && (i--, r = i === -1 ? n : a[i]), !s && p !== "<" && p)) {
                l = i === -1 ? n : a[i].children;
                var y = e.indexOf("<", h),
                    A = e.slice(h, y === -1 ? void 0 : y);
                CM.test(A) && (A = " "), (y > -1 && i + l.length >= 0 || A !== " ") && l.push({
                    type: "text",
                    content: A
                })
            }
        }), n
    },
    stringify: function(e) {
        return e.reduce(function(t, r) {
            return t + bb("", r)
        }, "")
    }
};

function xM(e) {
    for (var t = -1, r = e ? e.length : 0, n = 0, a = []; ++t < r;) {
        var i = e[t];
        i && (a[n++] = i)
    }
    return a
}
var zB = xM,
    wb = {},
    Eb = {},
    Sb = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function() {
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            if (typeof window < "u") {
                var o;
                typeof window.gtag > "u" && (window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }), (o = window).gtag.apply(o, i)
            }
        },
        r = t;
    e.default = r
})(Sb);
var $b = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = s;
    var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

    function r(o) {
        return o.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(u, c, l) {
            return c > 0 && c + u.length !== l.length && u.search(t) > -1 && l.charAt(c - 2) !== ":" && (l.charAt(c + u.length) !== "-" || l.charAt(c - 1) === "-") && l.charAt(c - 1).search(/[^\s-]/) < 0 ? u.toLowerCase() : u.substr(1).search(/[A-Z]|\../) > -1 ? u : u.charAt(0).toUpperCase() + u.substr(1)
        })
    }

    function n(o) {
        return typeof o == "string" && o.indexOf("@") !== -1
    }
    var a = "REDACTED (Potential Email Address)";

    function i(o) {
        return n(o) ? (console.warn("This arg looks like an email address, redacting."), a) : o
    }

    function s() {
        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
            u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
            l = o || "";
        return u && (l = r(o)), c && (l = i(l)), l
    }
})($b);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.GA4 = void 0;
    var t = s(Sb),
        r = s($b),
        n = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
        a = ["title", "location"],
        i = ["page", "hitType"];

    function s(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }

    function o(g, b) {
        if (g == null) return {};
        var E = u(g, b),
            S, w;
        if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(g);
            for (w = 0; w < O.length; w++) S = O[w], !(b.indexOf(S) >= 0) && Object.prototype.propertyIsEnumerable.call(g, S) && (E[S] = g[S])
        }
        return E
    }

    function u(g, b) {
        if (g == null) return {};
        var E = {},
            S = Object.keys(g),
            w, O;
        for (O = 0; O < S.length; O++) w = S[O], !(b.indexOf(w) >= 0) && (E[w] = g[w]);
        return E
    }

    function c(g) {
        "@babel/helpers - typeof";
        return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
            return typeof b
        } : function(b) {
            return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
        }, c(g)
    }

    function l(g) {
        return h(g) || d(g) || m(g) || f()
    }

    function f() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function d(g) {
        if (typeof Symbol < "u" && g[Symbol.iterator] != null || g["@@iterator"] != null) return Array.from(g)
    }

    function h(g) {
        if (Array.isArray(g)) return R(g)
    }

    function p(g, b) {
        var E = Object.keys(g);
        if (Object.getOwnPropertySymbols) {
            var S = Object.getOwnPropertySymbols(g);
            b && (S = S.filter(function(w) {
                return Object.getOwnPropertyDescriptor(g, w).enumerable
            })), E.push.apply(E, S)
        }
        return E
    }

    function v(g) {
        for (var b = 1; b < arguments.length; b++) {
            var E = arguments[b] != null ? arguments[b] : {};
            b % 2 ? p(Object(E), !0).forEach(function(S) {
                k(g, S, E[S])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E)) : p(Object(E)).forEach(function(S) {
                Object.defineProperty(g, S, Object.getOwnPropertyDescriptor(E, S))
            })
        }
        return g
    }

    function y(g, b) {
        return x(g) || N(g, b) || m(g, b) || A()
    }

    function A() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function m(g, b) {
        if (g) {
            if (typeof g == "string") return R(g, b);
            var E = Object.prototype.toString.call(g).slice(8, -1);
            if (E === "Object" && g.constructor && (E = g.constructor.name), E === "Map" || E === "Set") return Array.from(g);
            if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return R(g, b)
        }
    }

    function R(g, b) {
        (b == null || b > g.length) && (b = g.length);
        for (var E = 0, S = new Array(b); E < b; E++) S[E] = g[E];
        return S
    }

    function N(g, b) {
        var E = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
        if (E != null) {
            var S, w, O, C, I = [],
                L = !0,
                V = !1;
            try {
                if (O = (E = E.call(g)).next, b === 0) {
                    if (Object(E) !== E) return;
                    L = !1
                } else
                    for (; !(L = (S = O.call(E)).done) && (I.push(S.value), I.length !== b); L = !0);
            } catch (B) {
                V = !0, w = B
            } finally {
                try {
                    if (!L && E.return != null && (C = E.return(), Object(C) !== C)) return
                } finally {
                    if (V) throw w
                }
            }
            return I
        }
    }

    function x(g) {
        if (Array.isArray(g)) return g
    }

    function j(g, b) {
        if (!(g instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function D(g, b) {
        for (var E = 0; E < b.length; E++) {
            var S = b[E];
            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(g, G(S.key), S)
        }
    }

    function M(g, b, E) {
        return b && D(g.prototype, b), E && D(g, E), Object.defineProperty(g, "prototype", {
            writable: !1
        }), g
    }

    function k(g, b, E) {
        return b = G(b), b in g ? Object.defineProperty(g, b, {
            value: E,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[b] = E, g
    }

    function G(g) {
        var b = F(g, "string");
        return c(b) === "symbol" ? b : String(b)
    }

    function F(g, b) {
        if (c(g) !== "object" || g === null) return g;
        var E = g[Symbol.toPrimitive];
        if (E !== void 0) {
            var S = E.call(g, b || "default");
            if (c(S) !== "object") return S;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (b === "string" ? String : Number)(g)
    }
    var _ = function() {
        function g() {
            var b = this;
            j(this, g), k(this, "reset", function() {
                b.isInitialized = !1, b._testMode = !1, b._currentMeasurementId, b._hasLoadedGA = !1, b._isQueuing = !1, b._queueGtag = []
            }), k(this, "_gtag", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                b._testMode || b._isQueuing ? b._queueGtag.push(S) : t.default.apply(void 0, S)
            }), k(this, "_loadGA", function(E, S) {
                var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
                if (!(typeof window > "u" || typeof document > "u") && !b._hasLoadedGA) {
                    var O = document.createElement("script");
                    O.async = !0, O.src = "".concat(w, "?id=").concat(E), S && O.setAttribute("nonce", S), document.body.appendChild(O), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }, b._hasLoadedGA = !0
                }
            }), k(this, "_toGtagOptions", function(E) {
                if (E) {
                    var S = {
                            cookieUpdate: "cookie_update",
                            cookieExpires: "cookie_expires",
                            cookieDomain: "cookie_domain",
                            cookieFlags: "cookie_flags",
                            userId: "user_id",
                            clientId: "client_id",
                            anonymizeIp: "anonymize_ip",
                            contentGroup1: "content_group1",
                            contentGroup2: "content_group2",
                            contentGroup3: "content_group3",
                            contentGroup4: "content_group4",
                            contentGroup5: "content_group5",
                            allowAdFeatures: "allow_google_signals",
                            allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                            nonInteraction: "non_interaction",
                            page: "page_path",
                            hitCallback: "event_callback"
                        },
                        w = Object.entries(E).reduce(function(O, C) {
                            var I = y(C, 2),
                                L = I[0],
                                V = I[1];
                            return S[L] ? O[S[L]] = V : O[L] = V, O
                        }, {});
                    return w
                }
            }), k(this, "initialize", function(E) {
                var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!E) throw new Error("Require GA_MEASUREMENT_ID");
                var w = typeof E == "string" ? [{
                    trackingId: E
                }] : E;
                b._currentMeasurementId = w[0].trackingId;
                var O = S.gaOptions,
                    C = S.gtagOptions,
                    I = S.nonce,
                    L = S.testMode,
                    V = L === void 0 ? !1 : L,
                    B = S.gtagUrl;
                if (b._testMode = V, V || b._loadGA(b._currentMeasurementId, I, B), b.isInitialized || (b._gtag("js", new Date), w.forEach(function(_e) {
                        var hf = v(v(v({}, b._toGtagOptions(v(v({}, O), _e.gaOptions))), C), _e.gtagOptions);
                        Object.keys(hf).length ? b._gtag("config", _e.trackingId, hf) : b._gtag("config", _e.trackingId)
                    })), b.isInitialized = !0, !V) {
                    var he = l(b._queueGtag);
                    for (b._queueGtag = [], b._isQueuing = !1; he.length;) {
                        var pe = he.shift();
                        b._gtag.apply(b, l(pe)), pe[0] === "get" && (b._isQueuing = !0)
                    }
                }
            }), k(this, "set", function(E) {
                if (!E) {
                    console.warn("`fieldsObject` is required in .set()");
                    return
                }
                if (c(E) !== "object") {
                    console.warn("Expected `fieldsObject` arg to be an Object");
                    return
                }
                Object.keys(E).length === 0 && console.warn("empty `fieldsObject` given to .set()"), b._gaCommand("set", E)
            }), k(this, "_gaCommandSendEvent", function(E, S, w, O, C) {
                b._gtag("event", S, v(v({
                    event_category: E,
                    event_label: w,
                    value: O
                }, C && {
                    non_interaction: C.nonInteraction
                }), b._toGtagOptions(C)))
            }), k(this, "_gaCommandSendEventParameters", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                if (typeof S[0] == "string") b._gaCommandSendEvent.apply(b, l(S.slice(1)));
                else {
                    var O = S[0],
                        C = O.eventCategory,
                        I = O.eventAction,
                        L = O.eventLabel,
                        V = O.eventValue;
                    O.hitType;
                    var B = o(O, n);
                    b._gaCommandSendEvent(C, I, L, V, B)
                }
            }), k(this, "_gaCommandSendTiming", function(E, S, w, O) {
                b._gtag("event", "timing_complete", {
                    name: S,
                    value: w,
                    event_category: E,
                    event_label: O
                })
            }), k(this, "_gaCommandSendPageview", function(E, S) {
                if (S && Object.keys(S).length) {
                    var w = b._toGtagOptions(S),
                        O = w.title,
                        C = w.location,
                        I = o(w, a);
                    b._gtag("event", "page_view", v(v(v(v({}, E && {
                        page_path: E
                    }), O && {
                        page_title: O
                    }), C && {
                        page_location: C
                    }), I))
                } else E ? b._gtag("event", "page_view", {
                    page_path: E
                }) : b._gtag("event", "page_view")
            }), k(this, "_gaCommandSendPageviewParameters", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                if (typeof S[0] == "string") b._gaCommandSendPageview.apply(b, l(S.slice(1)));
                else {
                    var O = S[0],
                        C = O.page;
                    O.hitType;
                    var I = o(O, i);
                    b._gaCommandSendPageview(C, I)
                }
            }), k(this, "_gaCommandSend", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                var O = typeof S[0] == "string" ? S[0] : S[0].hitType;
                switch (O) {
                    case "event":
                        b._gaCommandSendEventParameters.apply(b, S);
                        break;
                    case "pageview":
                        b._gaCommandSendPageviewParameters.apply(b, S);
                        break;
                    case "timing":
                        b._gaCommandSendTiming.apply(b, l(S.slice(1)));
                        break;
                    case "screenview":
                    case "transaction":
                    case "item":
                    case "social":
                    case "exception":
                        console.warn("Unsupported send command: ".concat(O));
                        break;
                    default:
                        console.warn("Send command doesn't exist: ".concat(O))
                }
            }), k(this, "_gaCommandSet", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                typeof S[0] == "string" && (S[0] = k({}, S[0], S[1])), b._gtag("set", b._toGtagOptions(S[0]))
            }), k(this, "_gaCommand", function(E) {
                for (var S = arguments.length, w = new Array(S > 1 ? S - 1 : 0), O = 1; O < S; O++) w[O - 1] = arguments[O];
                switch (E) {
                    case "send":
                        b._gaCommandSend.apply(b, w);
                        break;
                    case "set":
                        b._gaCommandSet.apply(b, w);
                        break;
                    default:
                        console.warn("Command doesn't exist: ".concat(E))
                }
            }), k(this, "ga", function() {
                for (var E = arguments.length, S = new Array(E), w = 0; w < E; w++) S[w] = arguments[w];
                if (typeof S[0] == "string") b._gaCommand.apply(b, S);
                else {
                    var O = S[0];
                    b._gtag("get", b._currentMeasurementId, "client_id", function(C) {
                        b._isQueuing = !1;
                        var I = b._queueGtag;
                        for (O({
                                get: function(B) {
                                    return B === "clientId" ? C : B === "trackingId" ? b._currentMeasurementId : B === "apiVersion" ? "1" : void 0
                                }
                            }); I.length;) {
                            var L = I.shift();
                            b._gtag.apply(b, l(L))
                        }
                    }), b._isQueuing = !0
                }
                return b.ga
            }), k(this, "event", function(E, S) {
                if (typeof E == "string") b._gtag("event", E, b._toGtagOptions(S));
                else {
                    var w = E.action,
                        O = E.category,
                        C = E.label,
                        I = E.value,
                        L = E.nonInteraction,
                        V = E.transport;
                    if (!O || !w) {
                        console.warn("args.category AND args.action are required in event()");
                        return
                    }
                    var B = {
                        hitType: "event",
                        eventCategory: (0, r.default)(O),
                        eventAction: (0, r.default)(w)
                    };
                    C && (B.eventLabel = (0, r.default)(C)), typeof I < "u" && (typeof I != "number" ? console.warn("Expected `args.value` arg to be a Number.") : B.eventValue = I), typeof L < "u" && (typeof L != "boolean" ? console.warn("`args.nonInteraction` must be a boolean.") : B.nonInteraction = L), typeof V < "u" && (typeof V != "string" ? console.warn("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(V) === -1 && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), B.transport = V)), b._gaCommand("send", B)
                }
            }), k(this, "send", function(E) {
                b._gaCommand("send", E)
            }), this.reset()
        }
        return M(g, [{
            key: "gtag",
            value: function() {
                this._gtag.apply(this, arguments)
            }
        }]), g
    }();
    e.GA4 = _;
    var $ = new _;
    e.default = $
})(Eb);
(function(e) {
    function t(o) {
        "@babel/helpers - typeof";
        return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
            return typeof u
        } : function(u) {
            return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
        }, t(o)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.ReactGAImplementation = void 0;
    var r = a(Eb);

    function n(o) {
        if (typeof WeakMap != "function") return null;
        var u = new WeakMap,
            c = new WeakMap;
        return (n = function(f) {
            return f ? c : u
        })(o)
    }

    function a(o, u) {
        if (!u && o && o.__esModule) return o;
        if (o === null || t(o) !== "object" && typeof o != "function") return {
            default: o
        };
        var c = n(u);
        if (c && c.has(o)) return c.get(o);
        var l = {},
            f = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var d in o)
            if (d !== "default" && Object.prototype.hasOwnProperty.call(o, d)) {
                var h = f ? Object.getOwnPropertyDescriptor(o, d) : null;
                h && (h.get || h.set) ? Object.defineProperty(l, d, h) : l[d] = o[d]
            } return l.default = o, c && c.set(o, l), l
    }
    var i = r.GA4;
    e.ReactGAImplementation = i;
    var s = r.default;
    e.default = s
})(wb);
const qB = Re(wb);
var Ab = {
        exports: {}
    },
    Ob = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(w, O) {
        var C = w.length;
        w.push(O);
        e: for (; 0 < C;) {
            var I = C - 1 >>> 1,
                L = w[I];
            if (0 < a(L, O)) w[I] = O, w[C] = L, C = I;
            else break e
        }
    }

    function r(w) {
        return w.length === 0 ? null : w[0]
    }

    function n(w) {
        if (w.length === 0) return null;
        var O = w[0],
            C = w.pop();
        if (C !== O) {
            w[0] = C;
            e: for (var I = 0, L = w.length, V = L >>> 1; I < V;) {
                var B = 2 * (I + 1) - 1,
                    he = w[B],
                    pe = B + 1,
                    _e = w[pe];
                if (0 > a(he, C)) pe < L && 0 > a(_e, he) ? (w[I] = _e, w[pe] = C, I = pe) : (w[I] = he, w[B] = C, I = B);
                else if (pe < L && 0 > a(_e, C)) w[I] = _e, w[pe] = C, I = pe;
                else break e
            }
        }
        return O
    }

    function a(w, O) {
        var C = w.sortIndex - O.sortIndex;
        return C !== 0 ? C : w.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            o = s.now();
        e.unstable_now = function() {
            return s.now() - o
        }
    }
    var u = [],
        c = [],
        l = 1,
        f = null,
        d = 3,
        h = !1,
        p = !1,
        v = !1,
        y = typeof setTimeout == "function" ? setTimeout : null,
        A = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function R(w) {
        for (var O = r(c); O !== null;) {
            if (O.callback === null) n(c);
            else if (O.startTime <= w) n(c), O.sortIndex = O.expirationTime, t(u, O);
            else break;
            O = r(c)
        }
    }

    function N(w) {
        if (v = !1, R(w), !p)
            if (r(u) !== null) p = !0, E(x);
            else {
                var O = r(c);
                O !== null && S(N, O.startTime - w)
            }
    }

    function x(w, O) {
        p = !1, v && (v = !1, A(M), M = -1), h = !0;
        var C = d;
        try {
            for (R(O), f = r(u); f !== null && (!(f.expirationTime > O) || w && !F());) {
                var I = f.callback;
                if (typeof I == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var L = I(f.expirationTime <= O);
                    O = e.unstable_now(), typeof L == "function" ? f.callback = L : f === r(u) && n(u), R(O)
                } else n(u);
                f = r(u)
            }
            if (f !== null) var V = !0;
            else {
                var B = r(c);
                B !== null && S(N, B.startTime - O), V = !1
            }
            return V
        } finally {
            f = null, d = C, h = !1
        }
    }
    var j = !1,
        D = null,
        M = -1,
        k = 5,
        G = -1;

    function F() {
        return !(e.unstable_now() - G < k)
    }

    function _() {
        if (D !== null) {
            var w = e.unstable_now();
            G = w;
            var O = !0;
            try {
                O = D(!0, w)
            } finally {
                O ? $() : (j = !1, D = null)
            }
        } else j = !1
    }
    var $;
    if (typeof m == "function") $ = function() {
        m(_)
    };
    else if (typeof MessageChannel < "u") {
        var g = new MessageChannel,
            b = g.port2;
        g.port1.onmessage = _, $ = function() {
            b.postMessage(null)
        }
    } else $ = function() {
        y(_, 0)
    };

    function E(w) {
        D = w, j || (j = !0, $())
    }

    function S(w, O) {
        M = y(function() {
            w(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(w) {
        w.callback = null
    }, e.unstable_continueExecution = function() {
        p || h || (p = !0, E(x))
    }, e.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < w ? Math.floor(1e3 / w) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return d
    }, e.unstable_getFirstCallbackNode = function() {
        return r(u)
    }, e.unstable_next = function(w) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = d
        }
        var C = d;
        d = O;
        try {
            return w()
        } finally {
            d = C
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(w, O) {
        switch (w) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                w = 3
        }
        var C = d;
        d = w;
        try {
            return O()
        } finally {
            d = C
        }
    }, e.unstable_scheduleCallback = function(w, O, C) {
        var I = e.unstable_now();
        switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? I + C : I) : C = I, w) {
            case 1:
                var L = -1;
                break;
            case 2:
                L = 250;
                break;
            case 5:
                L = 1073741823;
                break;
            case 4:
                L = 1e4;
                break;
            default:
                L = 5e3
        }
        return L = C + L, w = {
            id: l++,
            callback: O,
            priorityLevel: w,
            startTime: C,
            expirationTime: L,
            sortIndex: -1
        }, C > I ? (w.sortIndex = C, t(c, w), r(u) === null && w === r(c) && (v ? (A(M), M = -1) : v = !0, S(N, C - I))) : (w.sortIndex = L, t(u, w), p || h || (p = !0, E(x))), w
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(w) {
        var O = d;
        return function() {
            var C = d;
            d = O;
            try {
                return w.apply(this, arguments)
            } finally {
                d = C
            }
        }
    }
})(Ob);
Ab.exports = Ob;
var WB = Ab.exports;
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wn() {
    return Wn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Wn.apply(this, arguments)
}
var _t;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(_t || (_t = {}));
const _p = "popstate";

function GB(e) {
    e === void 0 && (e = {});

    function t(n, a) {
        let {
            pathname: i,
            search: s,
            hash: o
        } = n.location;
        return Bi("", {
            pathname: i,
            search: s,
            hash: o
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(n, a) {
        return typeof a == "string" ? a : Vl(a)
    }
    return Rb(t, r, null, e)
}

function HB(e) {
    e === void 0 && (e = {});

    function t(a, i) {
        let {
            pathname: s = "/",
            search: o = "",
            hash: u = ""
        } = lr(a.location.hash.substr(1));
        return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), Bi("", {
            pathname: s,
            search: o,
            hash: u
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function r(a, i) {
        let s = a.document.querySelector("base"),
            o = "";
        if (s && s.getAttribute("href")) {
            let u = a.location.href,
                c = u.indexOf("#");
            o = c === -1 ? u : u.slice(0, c)
        }
        return o + "#" + (typeof i == "string" ? i : Vl(i))
    }

    function n(a, i) {
        va(a.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(i) + ")")
    }
    return Rb(t, r, n, e)
}

function ae(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function va(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function TM() {
    return Math.random().toString(36).substr(2, 8)
}

function Cp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Bi(e, t, r, n) {
    return r === void 0 && (r = null), Wn({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? lr(t) : t, {
        state: r,
        key: t && t.key || n || TM()
    })
}

function Vl(e) {
    let {
        pathname: t = "/",
        search: r = "",
        hash: n = ""
    } = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t
}

function lr(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
    }
    return t
}

function Rb(e, t, r, n) {
    n === void 0 && (n = {});
    let {
        window: a = document.defaultView,
        v5Compat: i = !1
    } = n, s = a.history, o = _t.Pop, u = null, c = l();
    c == null && (c = 0, s.replaceState(Wn({}, s.state, {
        idx: c
    }), ""));

    function l() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        o = _t.Pop;
        let y = l(),
            A = y == null ? null : y - c;
        c = y, u && u({
            action: o,
            location: v.location,
            delta: A
        })
    }

    function d(y, A) {
        o = _t.Push;
        let m = Bi(v.location, y, A);
        r && r(m, y), c = l() + 1;
        let R = Cp(m, c),
            N = v.createHref(m);
        try {
            s.pushState(R, "", N)
        } catch (x) {
            if (x instanceof DOMException && x.name === "DataCloneError") throw x;
            a.location.assign(N)
        }
        i && u && u({
            action: o,
            location: v.location,
            delta: 1
        })
    }

    function h(y, A) {
        o = _t.Replace;
        let m = Bi(v.location, y, A);
        r && r(m, y), c = l();
        let R = Cp(m, c),
            N = v.createHref(m);
        s.replaceState(R, "", N), i && u && u({
            action: o,
            location: v.location,
            delta: 0
        })
    }

    function p(y) {
        let A = a.location.origin !== "null" ? a.location.origin : a.location.href,
            m = typeof y == "string" ? y : Vl(y);
        return ae(A, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, A)
    }
    let v = {
        get action() {
            return o
        },
        get location() {
            return e(a, s)
        },
        listen(y) {
            if (u) throw new Error("A history only accepts one active listener");
            return a.addEventListener(_p, f), u = y, () => {
                a.removeEventListener(_p, f), u = null
            }
        },
        createHref(y) {
            return t(a, y)
        },
        createURL: p,
        encodeLocation(y) {
            let A = p(y);
            return {
                pathname: A.pathname,
                search: A.search,
                hash: A.hash
            }
        },
        push: d,
        replace: h,
        go(y) {
            return s.go(y)
        }
    };
    return v
}
var Np;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Np || (Np = {}));

function IM(e, t, r) {
    r === void 0 && (r = "/");
    let n = typeof t == "string" ? lr(t) : t,
        a = Nb(n.pathname || "/", r);
    if (a == null) return null;
    let i = _b(e);
    PM(i);
    let s = null;
    for (let o = 0; s == null && o < i.length; ++o) s = VM(i[o], WM(a));
    return s
}

function _b(e, t, r, n) {
    t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
    let a = (i, s, o) => {
        let u = {
            relativePath: o === void 0 ? i.path || "" : o,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        u.relativePath.startsWith("/") && (ae(u.relativePath.startsWith(n), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(n.length));
        let c = xt([n, u.relativePath]),
            l = r.concat(u);
        i.children && i.children.length > 0 && (ae(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), _b(i.children, t, l, c)), !(i.path == null && !i.index) && t.push({
            path: c,
            score: MM(c, i.index),
            routesMeta: l
        })
    };
    return e.forEach((i, s) => {
        var o;
        if (i.path === "" || !((o = i.path) != null && o.includes("?"))) a(i, s);
        else
            for (let u of Cb(i.path)) a(i, s, u)
    }), t
}

function Cb(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [r, ...n] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
    if (n.length === 0) return a ? [i, ""] : [i];
    let s = Cb(n.join("/")),
        o = [];
    return o.push(...s.map(u => u === "" ? i : [i, u].join("/"))), a && o.push(...s), o.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function PM(e) {
    e.sort((t, r) => t.score !== r.score ? r.score - t.score : BM(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const kM = /^:\w+$/,
    LM = 3,
    FM = 2,
    DM = 1,
    jM = 10,
    UM = -2,
    xp = e => e === "*";

function MM(e, t) {
    let r = e.split("/"),
        n = r.length;
    return r.some(xp) && (n += UM), t && (n += FM), r.filter(a => !xp(a)).reduce((a, i) => a + (kM.test(i) ? LM : i === "" ? DM : jM), n)
}

function BM(e, t) {
    return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function VM(e, t) {
    let {
        routesMeta: r
    } = e, n = {}, a = "/", i = [];
    for (let s = 0; s < r.length; ++s) {
        let o = r[s],
            u = s === r.length - 1,
            c = a === "/" ? t : t.slice(a.length) || "/",
            l = zM({
                path: o.relativePath,
                caseSensitive: o.caseSensitive,
                end: u
            }, c);
        if (!l) return null;
        Object.assign(n, l.params);
        let f = o.route;
        i.push({
            params: n,
            pathname: xt([a, l.pathname]),
            pathnameBase: YM(xt([a, l.pathnameBase])),
            route: f
        }), l.pathnameBase !== "/" && (a = xt([a, l.pathnameBase]))
    }
    return i
}

function KB(e, t) {
    t === void 0 && (t = {});
    let r = e;
    r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (va(!1, 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')), r = r.replace(/\*$/, "/*"));
    const n = r.startsWith("/") ? "/" : "",
        a = s => s == null ? "" : typeof s == "string" ? s : String(s),
        i = r.split(/\/+/).map((s, o, u) => {
            if (o === u.length - 1 && s === "*") return a(t["*"]);
            const l = s.match(/^:(\w+)(\??)$/);
            if (l) {
                const [, f, d] = l;
                let h = t[f];
                return ae(d === "?" || h != null, 'Missing ":' + f + '" param'), a(h)
            }
            return s.replace(/\?$/g, "")
        }).filter(s => !!s);
    return n + i.join("/")
}

function zM(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [r, n] = qM(e.path, e.caseSensitive, e.end), a = t.match(r);
    if (!a) return null;
    let i = a[0],
        s = i.replace(/(.)\/+$/, "$1"),
        o = a.slice(1);
    return {
        params: n.reduce((c, l, f) => {
            let {
                paramName: d,
                isOptional: h
            } = l;
            if (d === "*") {
                let v = o[f] || "";
                s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const p = o[f];
            return h && !p ? c[d] = void 0 : c[d] = GM(p || "", d), c
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function qM(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !0), va(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = [],
        a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, o, u) => (n.push({
            paramName: o,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n]
}

function WM(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return va(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function GM(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (r) {
        return va(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e
    }
}

function Nb(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}

function HM(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: r,
        search: n = "",
        hash: a = ""
    } = typeof e == "string" ? lr(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : KM(r, t) : t,
        search: JM(n),
        hash: QM(a)
    }
}

function KM(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(a => {
        a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a)
    }), r.length > 1 ? r.join("/") : "/"
}

function ru(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function XM(e) {
    return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}

function zl(e, t) {
    let r = XM(e);
    return t ? r.map((n, a) => a === e.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}

function ql(e, t, r, n) {
    n === void 0 && (n = !1);
    let a;
    typeof e == "string" ? a = lr(e) : (a = Wn({}, e), ae(!a.pathname || !a.pathname.includes("?"), ru("?", "pathname", "search", a)), ae(!a.pathname || !a.pathname.includes("#"), ru("#", "pathname", "hash", a)), ae(!a.search || !a.search.includes("#"), ru("#", "search", "hash", a)));
    let i = e === "" || a.pathname === "",
        s = i ? "/" : a.pathname,
        o;
    if (s == null) o = r;
    else {
        let f = t.length - 1;
        if (!n && s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === "..";) d.shift(), f -= 1;
            a.pathname = d.join("/")
        }
        o = f >= 0 ? t[f] : "/"
    }
    let u = HM(a, o),
        c = s && s !== "/" && s.endsWith("/"),
        l = (i || s === ".") && r.endsWith("/");
    return !u.pathname.endsWith("/") && (c || l) && (u.pathname += "/"), u
}
const xt = e => e.join("/").replace(/\/\/+/g, "/"),
    YM = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    JM = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    QM = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function ZM(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const xb = ["post", "put", "patch", "delete"];
new Set(xb);
const e3 = ["get", ...xb];
new Set(e3);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gn() {
    return Gn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Gn.apply(this, arguments)
}
const Wl = T.createContext(null),
    t3 = T.createContext(null),
    fr = T.createContext(null),
    Ms = T.createContext(null),
    wt = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Tb = T.createContext(null);

function XB(e, t) {
    let {
        relative: r
    } = t === void 0 ? {} : t;
    rn() || ae(!1);
    let {
        basename: n,
        navigator: a
    } = T.useContext(fr), {
        hash: i,
        pathname: s,
        search: o
    } = a3(e, {
        relative: r
    }), u = s;
    return n !== "/" && (u = s === "/" ? n : xt([n, s])), a.createHref({
        pathname: u,
        search: o,
        hash: i
    })
}

function rn() {
    return T.useContext(Ms) != null
}

function Bs() {
    return rn() || ae(!1), T.useContext(Ms).location
}

function Ib(e) {
    T.useContext(fr).static || T.useLayoutEffect(e)
}

function r3() {
    let {
        isDataRoute: e
    } = T.useContext(wt);
    return e ? g3() : n3()
}

function n3() {
    rn() || ae(!1);
    let e = T.useContext(Wl),
        {
            basename: t,
            future: r,
            navigator: n
        } = T.useContext(fr),
        {
            matches: a
        } = T.useContext(wt),
        {
            pathname: i
        } = Bs(),
        s = JSON.stringify(zl(a, r.v7_relativeSplatPath)),
        o = T.useRef(!1);
    return Ib(() => {
        o.current = !0
    }), T.useCallback(function(c, l) {
        if (l === void 0 && (l = {}), !o.current) return;
        if (typeof c == "number") {
            n.go(c);
            return
        }
        let f = ql(c, JSON.parse(s), i, l.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : xt([t, f.pathname])), (l.replace ? n.replace : n.push)(f, l.state, l)
    }, [t, n, s, i, e])
}

function YB() {
    let {
        matches: e
    } = T.useContext(wt), t = e[e.length - 1];
    return t ? t.params : {}
}

function a3(e, t) {
    let {
        relative: r
    } = t === void 0 ? {} : t, {
        future: n
    } = T.useContext(fr), {
        matches: a
    } = T.useContext(wt), {
        pathname: i
    } = Bs(), s = JSON.stringify(zl(a, n.v7_relativeSplatPath));
    return T.useMemo(() => ql(e, JSON.parse(s), i, r === "path"), [e, s, i, r])
}

function i3(e, t) {
    return s3(e, t)
}

function s3(e, t, r, n) {
    rn() || ae(!1);
    let {
        navigator: a
    } = T.useContext(fr), {
        matches: i
    } = T.useContext(wt), s = i[i.length - 1], o = s ? s.params : {};
    s && s.pathname;
    let u = s ? s.pathnameBase : "/";
    s && s.route;
    let c = Bs(),
        l;
    if (t) {
        var f;
        let y = typeof t == "string" ? lr(t) : t;
        u === "/" || (f = y.pathname) != null && f.startsWith(u) || ae(!1), l = y
    } else l = c;
    let d = l.pathname || "/",
        h = u === "/" ? d : d.slice(u.length) || "/",
        p = IM(e, {
            pathname: h
        }),
        v = f3(p && p.map(y => Object.assign({}, y, {
            params: Object.assign({}, o, y.params),
            pathname: xt([u, a.encodeLocation ? a.encodeLocation(y.pathname).pathname : y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? u : xt([u, a.encodeLocation ? a.encodeLocation(y.pathnameBase).pathname : y.pathnameBase])
        })), i, r, n);
    return t && v ? T.createElement(Ms.Provider, {
        value: {
            location: Gn({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, l),
            navigationType: _t.Pop
        }
    }, v) : v
}

function o3() {
    let e = m3(),
        t = ZM(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        r = e instanceof Error ? e.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        i = null;
    return T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? T.createElement("pre", {
        style: a
    }, r) : null, i)
}
const u3 = T.createElement(o3, null);
class c3 extends T.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? T.createElement(wt.Provider, {
            value: this.props.routeContext
        }, T.createElement(Tb.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function l3(e) {
    let {
        routeContext: t,
        match: r,
        children: n
    } = e, a = T.useContext(Wl);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), T.createElement(wt.Provider, {
        value: t
    }, n)
}

function f3(e, t, r, n) {
    var a;
    if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
        var i;
        if ((i = r) != null && i.errors) e = r.matches;
        else return null
    }
    let s = e,
        o = (a = r) == null ? void 0 : a.errors;
    if (o != null) {
        let l = s.findIndex(f => f.route.id && (o == null ? void 0 : o[f.route.id]));
        l >= 0 || ae(!1), s = s.slice(0, Math.min(s.length, l + 1))
    }
    let u = !1,
        c = -1;
    if (r && n && n.v7_partialHydration)
        for (let l = 0; l < s.length; l++) {
            let f = s[l];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = l), f.route.id) {
                let {
                    loaderData: d,
                    errors: h
                } = r, p = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
                if (f.route.lazy || p) {
                    u = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((l, f, d) => {
        let h, p = !1,
            v = null,
            y = null;
        r && (h = o && f.route.id ? o[f.route.id] : void 0, v = f.route.errorElement || u3, u && (c < 0 && d === 0 ? (v3("route-fallback", !1), p = !0, y = null) : c === d && (p = !0, y = f.route.hydrateFallbackElement || null)));
        let A = t.concat(s.slice(0, d + 1)),
            m = () => {
                let R;
                return h ? R = v : p ? R = y : f.route.Component ? R = T.createElement(f.route.Component, null) : f.route.element ? R = f.route.element : R = l, T.createElement(l3, {
                    match: f,
                    routeContext: {
                        outlet: l,
                        matches: A,
                        isDataRoute: r != null
                    },
                    children: R
                })
            };
        return r && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? T.createElement(c3, {
            location: r.location,
            revalidation: r.revalidation,
            component: v,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: A,
                isDataRoute: !0
            }
        }) : m()
    }, null)
}
var Pb = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(Pb || {}),
    Vi = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Vi || {});

function d3(e) {
    let t = T.useContext(Wl);
    return t || ae(!1), t
}

function h3(e) {
    let t = T.useContext(t3);
    return t || ae(!1), t
}

function p3(e) {
    let t = T.useContext(wt);
    return t || ae(!1), t
}

function kb(e) {
    let t = p3(),
        r = t.matches[t.matches.length - 1];
    return r.route.id || ae(!1), r.route.id
}

function m3() {
    var e;
    let t = T.useContext(Tb),
        r = h3(Vi.UseRouteError),
        n = kb(Vi.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}

function g3() {
    let {
        router: e
    } = d3(Pb.UseNavigateStable), t = kb(Vi.UseNavigateStable), r = T.useRef(!1);
    return Ib(() => {
        r.current = !0
    }), T.useCallback(function(a, i) {
        i === void 0 && (i = {}), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Gn({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
const Tp = {};

function v3(e, t, r) {
    !t && !Tp[e] && (Tp[e] = !0)
}

function JB(e) {
    let {
        to: t,
        replace: r,
        state: n,
        relative: a
    } = e;
    rn() || ae(!1);
    let {
        future: i,
        static: s
    } = T.useContext(fr), {
        matches: o
    } = T.useContext(wt), {
        pathname: u
    } = Bs(), c = r3(), l = ql(t, zl(o, i.v7_relativeSplatPath), u, a === "path"), f = JSON.stringify(l);
    return T.useEffect(() => c(JSON.parse(f), {
        replace: r,
        state: n,
        relative: a
    }), [c, f, a, r, n]), null
}

function y3(e) {
    ae(!1)
}

function QB(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: a = _t.Pop,
        navigator: i,
        static: s = !1,
        future: o
    } = e;
    rn() && ae(!1);
    let u = t.replace(/^\/*/, "/"),
        c = T.useMemo(() => ({
            basename: u,
            navigator: i,
            static: s,
            future: Gn({
                v7_relativeSplatPath: !1
            }, o)
        }), [u, o, i, s]);
    typeof n == "string" && (n = lr(n));
    let {
        pathname: l = "/",
        search: f = "",
        hash: d = "",
        state: h = null,
        key: p = "default"
    } = n, v = T.useMemo(() => {
        let y = Nb(l, u);
        return y == null ? null : {
            location: {
                pathname: y,
                search: f,
                hash: d,
                state: h,
                key: p
            },
            navigationType: a
        }
    }, [u, l, f, d, h, p, a]);
    return v == null ? null : T.createElement(fr.Provider, {
        value: c
    }, T.createElement(Ms.Provider, {
        children: r,
        value: v
    }))
}

function ZB(e) {
    let {
        children: t,
        location: r
    } = e;
    return i3(ac(t), r)
}
new Promise(() => {});

function ac(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return T.Children.forEach(e, (n, a) => {
        if (!T.isValidElement(n)) return;
        let i = [...t, a];
        if (n.type === T.Fragment) {
            r.push.apply(r, ac(n.props.children, i));
            return
        }
        n.type !== y3 && ae(!1), !n.props.index || !n.props.children || ae(!1);
        let s = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (s.children = ac(n.props.children, i)), r.push(s)
    }), r
}
var Ip = function() {
    return Ip = Object.assign || function(t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
            r = arguments[n];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Ip.apply(this, arguments)
};
var b3 = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null;
                break
        }
        return e.removeAllRanges(),
            function() {
                e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(a) {
                    e.addRange(a)
                }), t && t.focus()
            }
    },
    w3 = b3,
    Pp = {
        "text/plain": "Text",
        "text/html": "Url",
        default: "Text"
    },
    E3 = "Copy to clipboard: #{key}, Enter";

function S3(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t)
}

function $3(e, t) {
    var r, n, a, i, s, o, u = !1;
    t || (t = {}), r = t.debug || !1;
    try {
        a = w3(), i = document.createRange(), s = document.getSelection(), o = document.createElement("span"), o.textContent = e, o.ariaHidden = "true", o.style.all = "unset", o.style.position = "fixed", o.style.top = 0, o.style.clip = "rect(0, 0, 0, 0)", o.style.whiteSpace = "pre", o.style.webkitUserSelect = "text", o.style.MozUserSelect = "text", o.style.msUserSelect = "text", o.style.userSelect = "text", o.addEventListener("copy", function(l) {
            if (l.stopPropagation(), t.format)
                if (l.preventDefault(), typeof l.clipboardData > "u") {
                    r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                    var f = Pp[t.format] || Pp.default;
                    window.clipboardData.setData(f, e)
                } else l.clipboardData.clearData(), l.clipboardData.setData(t.format, e);
            t.onCopy && (l.preventDefault(), t.onCopy(l.clipboardData))
        }), document.body.appendChild(o), i.selectNodeContents(o), s.addRange(i);
        var c = document.execCommand("copy");
        if (!c) throw new Error("copy command was unsuccessful");
        u = !0
    } catch (l) {
        r && console.error("unable to copy using execCommand: ", l), r && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
        } catch (f) {
            r && console.error("unable to copy using clipboardData: ", f), r && console.error("falling back to prompt"), n = S3("message" in t ? t.message : E3), window.prompt(n, e)
        }
    } finally {
        s && (typeof s.removeRange == "function" ? s.removeRange(i) : s.removeAllRanges()), o && document.body.removeChild(o), a()
    }
    return u
}
var A3 = $3;
const e8 = Re(A3);

function xr(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error(`Wrong positive integer: ${e}`)
}

function O3(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function Gl(e, ...t) {
    if (!O3(e)) throw new Error("Expected Uint8Array");
    if (t.length > 0 && !t.includes(e.length)) throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
}

function Lb(e) {
    if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    xr(e.outputLen), xr(e.blockLen)
}

function zi(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called")
}

function R3(e, t) {
    Gl(e);
    const r = t.outputLen;
    if (e.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`)
}
const nu = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function _3(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}
const oi = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
    Ke = (e, t) => e << 32 - t | e >>> t,
    C3 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!C3) throw new Error("Non little-endian hardware is not supported");
const N3 = async () => {};
async function x3(e, t, r) {
    let n = Date.now();
    for (let a = 0; a < e; a++) {
        r(a);
        const i = Date.now() - n;
        i >= 0 && i < t || (await N3(), n += i)
    }
}

function T3(e) {
    if (typeof e != "string") throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
    return new Uint8Array(new TextEncoder().encode(e))
}

function Hn(e) {
    if (typeof e == "string" && (e = T3(e)), !_3(e)) throw new Error(`expected Uint8Array, got ${typeof e}`);
    return e
}
class Fb {
    clone() {
        return this._cloneInto()
    }
}
const I3 = {}.toString;

function P3(e, t) {
    if (t !== void 0 && I3.call(t) !== "[object Object]") throw new Error("Options should be object or undefined");
    return Object.assign(e, t)
}

function k3(e) {
    const t = n => e().update(Hn(n)).digest(),
        r = e();
    return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t
}

function L3(e = 32) {
    if (nu && typeof nu.getRandomValues == "function") return nu.getRandomValues(new Uint8Array(e));
    throw new Error("crypto.getRandomValues must be defined")
}
class Db extends Fb {
    constructor(t, r) {
        super(), this.finished = !1, this.destroyed = !1, Lb(t);
        const n = Hn(r);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const a = this.blockLen,
            i = new Uint8Array(a);
        i.set(n.length > a ? t.create().update(n).digest() : n);
        for (let s = 0; s < i.length; s++) i[s] ^= 54;
        this.iHash.update(i), this.oHash = t.create();
        for (let s = 0; s < i.length; s++) i[s] ^= 106;
        this.oHash.update(i), i.fill(0)
    }
    update(t) {
        return zi(this), this.iHash.update(t), this
    }
    digestInto(t) {
        zi(this), Gl(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: r,
            iHash: n,
            finished: a,
            destroyed: i,
            blockLen: s,
            outputLen: o
        } = this;
        return t = t, t.finished = a, t.destroyed = i, t.blockLen = s, t.outputLen = o, t.oHash = r._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const jb = (e, t, r) => new Db(e, t).update(r).digest();
jb.create = (e, t) => new Db(e, t);

function F3(e, t, r, n) {
    Lb(e);
    const a = P3({
            dkLen: 32,
            asyncTick: 10
        }, n),
        {
            c: i,
            dkLen: s,
            asyncTick: o
        } = a;
    if (xr(i), xr(s), xr(o), i < 1) throw new Error("PBKDF2: iterations (c) should be >= 1");
    const u = Hn(t),
        c = Hn(r),
        l = new Uint8Array(s),
        f = jb.create(e, u),
        d = f._cloneInto().update(c);
    return {
        c: i,
        dkLen: s,
        asyncTick: o,
        DK: l,
        PRF: f,
        PRFSalt: d
    }
}

function D3(e, t, r, n, a) {
    return e.destroy(), t.destroy(), n && n.destroy(), a.fill(0), r
}
async function t8(e, t, r, n) {
    const {
        c: a,
        dkLen: i,
        asyncTick: s,
        DK: o,
        PRF: u,
        PRFSalt: c
    } = F3(e, t, r, n);
    let l;
    const f = new Uint8Array(4),
        d = oi(f),
        h = new Uint8Array(u.outputLen);
    for (let p = 1, v = 0; v < i; p++, v += u.outputLen) {
        const y = o.subarray(v, v + u.outputLen);
        d.setInt32(0, p, !1), (l = c._cloneInto(l)).update(f).digestInto(h), y.set(h.subarray(0, y.length)), await x3(a - 1, s, () => {
            u._cloneInto(l).update(h).digestInto(h);
            for (let A = 0; A < y.length; A++) y[A] ^= h[A]
        })
    }
    return D3(u, c, o, l, h)
}

function j3(e, t, r, n) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
    const a = BigInt(32),
        i = BigInt(4294967295),
        s = Number(r >> a & i),
        o = Number(r & i),
        u = n ? 4 : 0,
        c = n ? 0 : 4;
    e.setUint32(t + u, s, n), e.setUint32(t + c, o, n)
}
class U3 extends Fb {
    constructor(t, r, n, a) {
        super(), this.blockLen = t, this.outputLen = r, this.padOffset = n, this.isLE = a, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = oi(this.buffer)
    }
    update(t) {
        zi(this);
        const {
            view: r,
            buffer: n,
            blockLen: a
        } = this;
        t = Hn(t);
        const i = t.length;
        for (let s = 0; s < i;) {
            const o = Math.min(a - this.pos, i - s);
            if (o === a) {
                const u = oi(t);
                for (; a <= i - s; s += a) this.process(u, s);
                continue
            }
            n.set(t.subarray(s, s + o), this.pos), this.pos += o, s += o, this.pos === a && (this.process(r, 0), this.pos = 0)
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        zi(this), R3(t, this), this.finished = !0;
        const {
            buffer: r,
            view: n,
            blockLen: a,
            isLE: i
        } = this;
        let {
            pos: s
        } = this;
        r[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > a - s && (this.process(n, 0), s = 0);
        for (let f = s; f < a; f++) r[f] = 0;
        j3(n, a - 8, BigInt(this.length * 8), i), this.process(n, 0);
        const o = oi(t),
            u = this.outputLen;
        if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const c = u / 4,
            l = this.get();
        if (c > l.length) throw new Error("_sha2: outputLen bigger than state");
        for (let f = 0; f < c; f++) o.setUint32(4 * f, l[f], i)
    }
    digest() {
        const {
            buffer: t,
            outputLen: r
        } = this;
        this.digestInto(t);
        const n = t.slice(0, r);
        return this.destroy(), n
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: r,
            buffer: n,
            length: a,
            finished: i,
            destroyed: s,
            pos: o
        } = this;
        return t.length = a, t.pos = o, t.finished = i, t.destroyed = s, a % r && t.buffer.set(n), t
    }
}
const M3 = (e, t, r) => e & t ^ ~e & r,
    B3 = (e, t, r) => e & t ^ e & r ^ t & r,
    V3 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    Et = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    St = new Uint32Array(64);
class z3 extends U3 {
    constructor() {
        super(64, 32, 8, !1), this.A = Et[0] | 0, this.B = Et[1] | 0, this.C = Et[2] | 0, this.D = Et[3] | 0, this.E = Et[4] | 0, this.F = Et[5] | 0, this.G = Et[6] | 0, this.H = Et[7] | 0
    }
    get() {
        const {
            A: t,
            B: r,
            C: n,
            D: a,
            E: i,
            F: s,
            G: o,
            H: u
        } = this;
        return [t, r, n, a, i, s, o, u]
    }
    set(t, r, n, a, i, s, o, u) {
        this.A = t | 0, this.B = r | 0, this.C = n | 0, this.D = a | 0, this.E = i | 0, this.F = s | 0, this.G = o | 0, this.H = u | 0
    }
    process(t, r) {
        for (let f = 0; f < 16; f++, r += 4) St[f] = t.getUint32(r, !1);
        for (let f = 16; f < 64; f++) {
            const d = St[f - 15],
                h = St[f - 2],
                p = Ke(d, 7) ^ Ke(d, 18) ^ d >>> 3,
                v = Ke(h, 17) ^ Ke(h, 19) ^ h >>> 10;
            St[f] = v + St[f - 7] + p + St[f - 16] | 0
        }
        let {
            A: n,
            B: a,
            C: i,
            D: s,
            E: o,
            F: u,
            G: c,
            H: l
        } = this;
        for (let f = 0; f < 64; f++) {
            const d = Ke(o, 6) ^ Ke(o, 11) ^ Ke(o, 25),
                h = l + d + M3(o, u, c) + V3[f] + St[f] | 0,
                v = (Ke(n, 2) ^ Ke(n, 13) ^ Ke(n, 22)) + B3(n, a, i) | 0;
            l = c, c = u, u = o, o = s + h | 0, s = i, i = a, a = n, n = h + v | 0
        }
        n = n + this.A | 0, a = a + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, o = o + this.E | 0, u = u + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, a, i, s, o, u, c, l)
    }
    roundClean() {
        St.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const q3 = k3(() => new z3); /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function qi(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}

function W3(...e) {
    const t = i => i,
        r = (i, s) => o => i(s(o)),
        n = e.map(i => i.encode).reduceRight(r, t),
        a = e.map(i => i.decode).reduce(r, t);
    return {
        encode: n,
        decode: a
    }
}

function G3(e) {
    return {
        encode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw new Error("alphabet.encode input should be an array of numbers");
            return t.map(r => {
                if (r < 0 || r >= e.length) throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);
                return e[r]
            })
        },
        decode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw new Error("alphabet.decode input should be array of strings");
            return t.map(r => {
                if (typeof r != "string") throw new Error(`alphabet.decode: not string element=${r}`);
                const n = e.indexOf(r);
                if (n === -1) throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);
                return n
            })
        }
    }
}

function H3(e = "") {
    if (typeof e != "string") throw new Error("join separator should be string");
    return {
        encode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "string") throw new Error("join.encode input should be array of strings");
            for (let r of t)
                if (typeof r != "string") throw new Error(`join.encode: non-string input=${r}`);
            return t.join(e)
        },
        decode: t => {
            if (typeof t != "string") throw new Error("join.decode input should be string");
            return t.split(e)
        }
    }
}

function K3(e, t = "=") {
    if (typeof t != "string") throw new Error("padding chr should be string");
    return {
        encode(r) {
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let n of r)
                if (typeof n != "string") throw new Error(`padding.encode: non-string input=${n}`);
            for (; r.length * e % 8;) r.push(t);
            return r
        },
        decode(r) {
            if (!Array.isArray(r) || r.length && typeof r[0] != "string") throw new Error("padding.encode input should be array of strings");
            for (let a of r)
                if (typeof a != "string") throw new Error(`padding.decode: non-string input=${a}`);
            let n = r.length;
            if (n * e % 8) throw new Error("Invalid padding: string should have whole number of bytes");
            for (; n > 0 && r[n - 1] === t; n--)
                if (!((n - 1) * e % 8)) throw new Error("Invalid padding: string has too much padding");
            return r.slice(0, n)
        }
    }
}

function ic(e, t, r) {
    if (t < 2) throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
    if (r < 2) throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
    if (!Array.isArray(e)) throw new Error("convertRadix: data should be array");
    if (!e.length) return [];
    let n = 0;
    const a = [],
        i = Array.from(e);
    for (i.forEach(s => {
            if (s < 0 || s >= t) throw new Error(`Wrong integer: ${s}`)
        });;) {
        let s = 0,
            o = !0;
        for (let u = n; u < i.length; u++) {
            const c = i[u],
                l = t * s + c;
            if (!Number.isSafeInteger(l) || t * s / t !== s || l - c !== t * s) throw new Error("convertRadix: carry overflow");
            s = l % r;
            const f = Math.floor(l / r);
            if (i[u] = f, !Number.isSafeInteger(f) || f * r + s !== l) throw new Error("convertRadix: carry overflow");
            if (o) f ? o = !1 : n = u;
            else continue
        }
        if (a.push(s), o) break
    }
    for (let s = 0; s < e.length - 1 && e[s] === 0; s++) a.push(0);
    return a.reverse()
}
const Ub = (e, t) => t ? Ub(t, e % t) : e,
    Wi = (e, t) => e + (t - Ub(e, t));

function sc(e, t, r, n) {
    if (!Array.isArray(e)) throw new Error("convertRadix2: data should be array");
    if (t <= 0 || t > 32) throw new Error(`convertRadix2: wrong from=${t}`);
    if (r <= 0 || r > 32) throw new Error(`convertRadix2: wrong to=${r}`);
    if (Wi(t, r) > 32) throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Wi(t,r)}`);
    let a = 0,
        i = 0;
    const s = 2 ** r - 1,
        o = [];
    for (const u of e) {
        if (u >= 2 ** t) throw new Error(`convertRadix2: invalid data word=${u} from=${t}`);
        if (a = a << t | u, i + t > 32) throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);
        for (i += t; i >= r; i -= r) o.push((a >> i - r & s) >>> 0);
        a &= 2 ** i - 1
    }
    if (a = a << r - i & s, !n && i >= t) throw new Error("Excess padding");
    if (!n && a) throw new Error(`Non-zero padding: ${a}`);
    return n && i > 0 && o.push(a >>> 0), o
}

function X3(e) {
    return {
        encode: t => {
            if (!qi(t)) throw new Error("radix.encode input should be Uint8Array");
            return ic(Array.from(t), 2 ** 8, e)
        },
        decode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "number") throw new Error("radix.decode input should be array of numbers");
            return Uint8Array.from(ic(t, e, 2 ** 8))
        }
    }
}

function Y3(e, t = !1) {
    if (e <= 0 || e > 32) throw new Error("radix2: bits should be in (0..32]");
    if (Wi(8, e) > 32 || Wi(e, 8) > 32) throw new Error("radix2: carry overflow");
    return {
        encode: r => {
            if (!qi(r)) throw new Error("radix2.encode input should be Uint8Array");
            return sc(Array.from(r), 8, e, !t)
        },
        decode: r => {
            if (!Array.isArray(r) || r.length && typeof r[0] != "number") throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(sc(r, e, 8, t))
        }
    }
}

function J3(e, t) {
    if (typeof t != "function") throw new Error("checksum fn should be function");
    return {
        encode(r) {
            if (!qi(r)) throw new Error("checksum.encode: input should be Uint8Array");
            const n = t(r).slice(0, e),
                a = new Uint8Array(r.length + e);
            return a.set(r), a.set(n, r.length), a
        },
        decode(r) {
            if (!qi(r)) throw new Error("checksum.decode: input should be Uint8Array");
            const n = r.slice(0, -e),
                a = t(n).slice(0, e),
                i = r.slice(-e);
            for (let s = 0; s < e; s++)
                if (a[s] !== i[s]) throw new Error("Invalid checksum");
            return n
        }
    }
}
const Ba = {
    alphabet: G3,
    chain: W3,
    checksum: J3,
    convertRadix: ic,
    convertRadix2: sc,
    radix: X3,
    radix2: Y3,
    join: H3,
    padding: K3
}; /*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */
const Q3 = e => e[0] === "あいこくしん";

function Z3(e) {
    if (typeof e != "string") throw new TypeError(`Invalid mnemonic type: ${typeof e}`);
    return e.normalize("NFKD")
}

function e4(e) {
    const t = Z3(e),
        r = t.split(" ");
    if (![12, 15, 18, 21, 24].includes(r.length)) throw new Error("Invalid mnemonic");
    return {
        nfkd: t,
        words: r
    }
}

function Mb(e) {
    Gl(e, 16, 20, 24, 28, 32)
}

function r8(e, t = 128) {
    if (xr(t), t % 32 !== 0 || t > 256) throw new TypeError("Invalid entropy");
    return n4(L3(t / 8), e)
}
const t4 = e => {
    const t = 8 - e.length / 4;
    return new Uint8Array([q3(e)[0] >> t << t])
};

function Bb(e) {
    if (!Array.isArray(e) || e.length !== 2048 || typeof e[0] != "string") throw new Error("Wordlist: expected array of 2048 strings");
    return e.forEach(t => {
        if (typeof t != "string") throw new Error(`Wordlist: non-string element: ${t}`)
    }), Ba.chain(Ba.checksum(1, t4), Ba.radix2(11, !0), Ba.alphabet(e))
}

function r4(e, t) {
    const {
        words: r
    } = e4(e), n = Bb(t).decode(r);
    return Mb(n), n
}

function n4(e, t) {
    return Mb(e), Bb(t).encode(e).join(Q3(t) ? "　" : " ")
}

function n8(e, t) {
    try {
        r4(e, t)
    } catch {
        return !1
    }
    return !0
}
const a8 = `abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);
var Vb = {
        exports: {}
    },
    a4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    i4 = a4,
    s4 = i4;

function zb() {}

function qb() {}
qb.resetWarningCache = zb;
var o4 = function() {
    function e(n, a, i, s, o, u) {
        if (u !== s4) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: qb,
        resetWarningCache: zb
    };
    return r.PropTypes = r, r
};
Vb.exports = o4();
var i8 = Vb.exports;
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Wb = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Gi = Wb.join(","),
    Gb = typeof Element > "u",
    er = Gb ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Hi = !Gb && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    Ki = function e(t, r) {
        var n;
        r === void 0 && (r = !0);
        var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"),
            i = a === "" || a === "true",
            s = i || r && t && e(t.parentNode);
        return s
    },
    u4 = function(t) {
        var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
        return n === "" || n === "true"
    },
    Hb = function(t, r, n) {
        if (Ki(t)) return [];
        var a = Array.prototype.slice.apply(t.querySelectorAll(Gi));
        return r && er.call(t, Gi) && a.unshift(t), a = a.filter(n), a
    },
    Kb = function e(t, r, n) {
        for (var a = [], i = Array.from(t); i.length;) {
            var s = i.shift();
            if (!Ki(s, !1))
                if (s.tagName === "SLOT") {
                    var o = s.assignedElements(),
                        u = o.length ? o : s.children,
                        c = e(u, !0, n);
                    n.flatten ? a.push.apply(a, c) : a.push({
                        scopeParent: s,
                        candidates: c
                    })
                } else {
                    var l = er.call(s, Gi);
                    l && n.filter(s) && (r || !t.includes(s)) && a.push(s);
                    var f = s.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(s),
                        d = !Ki(f, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
                    if (f && d) {
                        var h = e(f === !0 ? s.children : f.children, !0, n);
                        n.flatten ? a.push.apply(a, h) : a.push({
                            scopeParent: s,
                            candidates: h
                        })
                    } else i.unshift.apply(i, s.children)
                }
        }
        return a
    },
    Xb = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    At = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || u4(t)) && !Xb(t) ? 0 : t.tabIndex
    },
    c4 = function(t, r) {
        var n = At(t);
        return n < 0 && r && !Xb(t) ? 0 : n
    },
    l4 = function(t, r) {
        return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex
    },
    Yb = function(t) {
        return t.tagName === "INPUT"
    },
    f4 = function(t) {
        return Yb(t) && t.type === "hidden"
    },
    d4 = function(t) {
        var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
            return n.tagName === "SUMMARY"
        });
        return r
    },
    h4 = function(t, r) {
        for (var n = 0; n < t.length; n++)
            if (t[n].checked && t[n].form === r) return t[n]
    },
    p4 = function(t) {
        if (!t.name) return !0;
        var r = t.form || Hi(t),
            n = function(o) {
                return r.querySelectorAll('input[type="radio"][name="' + o + '"]')
            },
            a;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") a = n(window.CSS.escape(t.name));
        else try {
            a = n(t.name)
        } catch (s) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1
        }
        var i = h4(a, t.form);
        return !i || i === t
    },
    m4 = function(t) {
        return Yb(t) && t.type === "radio"
    },
    g4 = function(t) {
        return m4(t) && !p4(t)
    },
    v4 = function(t) {
        var r, n = t && Hi(t),
            a = (r = n) === null || r === void 0 ? void 0 : r.host,
            i = !1;
        if (n && n !== t) {
            var s, o, u;
            for (i = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !i && a;) {
                var c, l, f;
                n = Hi(a), a = (c = n) === null || c === void 0 ? void 0 : c.host, i = !!((l = a) !== null && l !== void 0 && (f = l.ownerDocument) !== null && f !== void 0 && f.contains(a))
            }
        }
        return i
    },
    kp = function(t) {
        var r = t.getBoundingClientRect(),
            n = r.width,
            a = r.height;
        return n === 0 && a === 0
    },
    y4 = function(t, r) {
        var n = r.displayCheck,
            a = r.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var i = er.call(t, "details>summary:first-of-type"),
            s = i ? t.parentElement : t;
        if (er.call(s, "details:not([open]) *")) return !0;
        if (!n || n === "full" || n === "legacy-full") {
            if (typeof a == "function") {
                for (var o = t; t;) {
                    var u = t.parentElement,
                        c = Hi(t);
                    if (u && !u.shadowRoot && a(u) === !0) return kp(t);
                    t.assignedSlot ? t = t.assignedSlot : !u && c !== t.ownerDocument ? t = c.host : t = u
                }
                t = o
            }
            if (v4(t)) return !t.getClientRects().length;
            if (n !== "legacy-full") return !0
        } else if (n === "non-zero-area") return kp(t);
        return !1
    },
    b4 = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var r = t.parentElement; r;) {
                if (r.tagName === "FIELDSET" && r.disabled) {
                    for (var n = 0; n < r.children.length; n++) {
                        var a = r.children.item(n);
                        if (a.tagName === "LEGEND") return er.call(r, "fieldset[disabled] *") ? !0 : !a.contains(t)
                    }
                    return !0
                }
                r = r.parentElement
            }
        return !1
    },
    Xi = function(t, r) {
        return !(r.disabled || Ki(r) || f4(r) || y4(r, t) || d4(r) || b4(r))
    },
    oc = function(t, r) {
        return !(g4(r) || At(r) < 0 || !Xi(t, r))
    },
    w4 = function(t) {
        var r = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(r) || r >= 0)
    },
    E4 = function e(t) {
        var r = [],
            n = [];
        return t.forEach(function(a, i) {
            var s = !!a.scopeParent,
                o = s ? a.scopeParent : a,
                u = c4(o, s),
                c = s ? e(a.candidates) : o;
            u === 0 ? s ? r.push.apply(r, c) : r.push(o) : n.push({
                documentOrder: i,
                tabIndex: u,
                item: a,
                isScope: s,
                content: c
            })
        }), n.sort(l4).reduce(function(a, i) {
            return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a
        }, []).concat(r)
    },
    Jb = function(t, r) {
        r = r || {};
        var n;
        return r.getShadowRoot ? n = Kb([t], r.includeContainer, {
            filter: oc.bind(null, r),
            flatten: !1,
            getShadowRoot: r.getShadowRoot,
            shadowRootFilter: w4
        }) : n = Hb(t, r.includeContainer, oc.bind(null, r)), E4(n)
    },
    Qb = function(t, r) {
        r = r || {};
        var n;
        return r.getShadowRoot ? n = Kb([t], r.includeContainer, {
            filter: Xi.bind(null, r),
            flatten: !0,
            getShadowRoot: r.getShadowRoot
        }) : n = Hb(t, r.includeContainer, Xi.bind(null, r)), n
    },
    Bt = function(t, r) {
        if (r = r || {}, !t) throw new Error("No node provided");
        return er.call(t, Gi) === !1 ? !1 : oc(r, t)
    },
    S4 = Wb.concat("iframe").join(","),
    ui = function(t, r) {
        if (r = r || {}, !t) throw new Error("No node provided");
        return er.call(t, S4) === !1 ? !1 : Xi(r, t)
    };
const $4 = Object.freeze(Object.defineProperty({
    __proto__: null,
    focusable: Qb,
    getTabIndex: At,
    isFocusable: ui,
    isTabbable: Bt,
    tabbable: Jb
}, Symbol.toStringTag, {
    value: "Module"
}));
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
function Lp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Fp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Lp(Object(r), !0).forEach(function(n) {
            A4(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function A4(e, t, r) {
    return t = R4(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function O4(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function R4(e) {
    var t = O4(e, "string");
    return typeof t == "symbol" ? t : String(t)
}
var Dp = {
        activateTrap: function(t, r) {
            if (t.length > 0) {
                var n = t[t.length - 1];
                n !== r && n.pause()
            }
            var a = t.indexOf(r);
            a === -1 || t.splice(a, 1), t.push(r)
        },
        deactivateTrap: function(t, r) {
            var n = t.indexOf(r);
            n !== -1 && t.splice(n, 1), t.length > 0 && t[t.length - 1].unpause()
        }
    },
    _4 = function(t) {
        return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function"
    },
    C4 = function(t) {
        return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27
    },
    _n = function(t) {
        return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9
    },
    N4 = function(t) {
        return _n(t) && !t.shiftKey
    },
    x4 = function(t) {
        return _n(t) && t.shiftKey
    },
    jp = function(t) {
        return setTimeout(t, 0)
    },
    Up = function(t, r) {
        var n = -1;
        return t.every(function(a, i) {
            return r(a) ? (n = i, !1) : !0
        }), n
    },
    fn = function(t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
        return typeof t == "function" ? t.apply(void 0, n) : t
    },
    Va = function(t) {
        return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target
    },
    T4 = [],
    I4 = function(t, r) {
        var n = (r == null ? void 0 : r.document) || document,
            a = (r == null ? void 0 : r.trapStack) || T4,
            i = Fp({
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isKeyForward: N4,
                isKeyBackward: x4
            }, r),
            s = {
                containers: [],
                containerGroups: [],
                tabbableGroups: [],
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1,
                delayInitialFocusTimer: void 0,
                recentNavEvent: void 0
            },
            o, u = function(_, $, g) {
                return _ && _[$] !== void 0 ? _[$] : i[g || $]
            },
            c = function(_, $) {
                var g = typeof($ == null ? void 0 : $.composedPath) == "function" ? $.composedPath() : void 0;
                return s.containerGroups.findIndex(function(b) {
                    var E = b.container,
                        S = b.tabbableNodes;
                    return E.contains(_) || (g == null ? void 0 : g.includes(E)) || S.find(function(w) {
                        return w === _
                    })
                })
            },
            l = function(_) {
                var $ = i[_];
                if (typeof $ == "function") {
                    for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++) b[E - 1] = arguments[E];
                    $ = $.apply(void 0, b)
                }
                if ($ === !0 && ($ = void 0), !$) {
                    if ($ === void 0 || $ === !1) return $;
                    throw new Error("`".concat(_, "` was specified but was not a node, or did not return a node"))
                }
                var S = $;
                if (typeof $ == "string" && (S = n.querySelector($), !S)) throw new Error("`".concat(_, "` as selector refers to no known node"));
                return S
            },
            f = function() {
                var _ = l("initialFocus");
                if (_ === !1) return !1;
                if (_ === void 0 || !ui(_, i.tabbableOptions))
                    if (c(n.activeElement) >= 0) _ = n.activeElement;
                    else {
                        var $ = s.tabbableGroups[0],
                            g = $ && $.firstTabbableNode;
                        _ = g || l("fallbackFocus")
                    } if (!_) throw new Error("Your focus-trap needs to have at least one focusable element");
                return _
            },
            d = function() {
                if (s.containerGroups = s.containers.map(function(_) {
                        var $ = Jb(_, i.tabbableOptions),
                            g = Qb(_, i.tabbableOptions),
                            b = $.length > 0 ? $[0] : void 0,
                            E = $.length > 0 ? $[$.length - 1] : void 0,
                            S = g.find(function(C) {
                                return Bt(C)
                            }),
                            w = g.slice().reverse().find(function(C) {
                                return Bt(C)
                            }),
                            O = !!$.find(function(C) {
                                return At(C) > 0
                            });
                        return {
                            container: _,
                            tabbableNodes: $,
                            focusableNodes: g,
                            posTabIndexesFound: O,
                            firstTabbableNode: b,
                            lastTabbableNode: E,
                            firstDomTabbableNode: S,
                            lastDomTabbableNode: w,
                            nextTabbableNode: function(I) {
                                var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                                    V = $.indexOf(I);
                                return V < 0 ? L ? g.slice(g.indexOf(I) + 1).find(function(B) {
                                    return Bt(B)
                                }) : g.slice(0, g.indexOf(I)).reverse().find(function(B) {
                                    return Bt(B)
                                }) : $[V + (L ? 1 : -1)]
                            }
                        }
                    }), s.tabbableGroups = s.containerGroups.filter(function(_) {
                        return _.tabbableNodes.length > 0
                    }), s.tabbableGroups.length <= 0 && !l("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (s.containerGroups.find(function(_) {
                        return _.posTabIndexesFound
                    }) && s.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            },
            h = function F(_) {
                var $ = _.activeElement;
                if ($) return $.shadowRoot && $.shadowRoot.activeElement !== null ? F($.shadowRoot) : $
            },
            p = function F(_) {
                if (_ !== !1 && _ !== h(document)) {
                    if (!_ || !_.focus) {
                        F(f());
                        return
                    }
                    _.focus({
                        preventScroll: !!i.preventScroll
                    }), s.mostRecentlyFocusedNode = _, _4(_) && _.select()
                }
            },
            v = function(_) {
                var $ = l("setReturnFocus", _);
                return $ || ($ === !1 ? !1 : _)
            },
            y = function(_) {
                var $ = _.target,
                    g = _.event,
                    b = _.isBackward,
                    E = b === void 0 ? !1 : b;
                $ = $ || Va(g), d();
                var S = null;
                if (s.tabbableGroups.length > 0) {
                    var w = c($, g),
                        O = w >= 0 ? s.containerGroups[w] : void 0;
                    if (w < 0) E ? S = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : S = s.tabbableGroups[0].firstTabbableNode;
                    else if (E) {
                        var C = Up(s.tabbableGroups, function(pe) {
                            var _e = pe.firstTabbableNode;
                            return $ === _e
                        });
                        if (C < 0 && (O.container === $ || ui($, i.tabbableOptions) && !Bt($, i.tabbableOptions) && !O.nextTabbableNode($, !1)) && (C = w), C >= 0) {
                            var I = C === 0 ? s.tabbableGroups.length - 1 : C - 1,
                                L = s.tabbableGroups[I];
                            S = At($) >= 0 ? L.lastTabbableNode : L.lastDomTabbableNode
                        } else _n(g) || (S = O.nextTabbableNode($, !1))
                    } else {
                        var V = Up(s.tabbableGroups, function(pe) {
                            var _e = pe.lastTabbableNode;
                            return $ === _e
                        });
                        if (V < 0 && (O.container === $ || ui($, i.tabbableOptions) && !Bt($, i.tabbableOptions) && !O.nextTabbableNode($)) && (V = w), V >= 0) {
                            var B = V === s.tabbableGroups.length - 1 ? 0 : V + 1,
                                he = s.tabbableGroups[B];
                            S = At($) >= 0 ? he.firstTabbableNode : he.firstDomTabbableNode
                        } else _n(g) || (S = O.nextTabbableNode($))
                    }
                } else S = l("fallbackFocus");
                return S
            },
            A = function(_) {
                var $ = Va(_);
                if (!(c($, _) >= 0)) {
                    if (fn(i.clickOutsideDeactivates, _)) {
                        o.deactivate({
                            returnFocus: i.returnFocusOnDeactivate
                        });
                        return
                    }
                    fn(i.allowOutsideClick, _) || _.preventDefault()
                }
            },
            m = function(_) {
                var $ = Va(_),
                    g = c($, _) >= 0;
                if (g || $ instanceof Document) g && (s.mostRecentlyFocusedNode = $);
                else {
                    _.stopImmediatePropagation();
                    var b, E = !0;
                    if (s.mostRecentlyFocusedNode)
                        if (At(s.mostRecentlyFocusedNode) > 0) {
                            var S = c(s.mostRecentlyFocusedNode),
                                w = s.containerGroups[S].tabbableNodes;
                            if (w.length > 0) {
                                var O = w.findIndex(function(C) {
                                    return C === s.mostRecentlyFocusedNode
                                });
                                O >= 0 && (i.isKeyForward(s.recentNavEvent) ? O + 1 < w.length && (b = w[O + 1], E = !1) : O - 1 >= 0 && (b = w[O - 1], E = !1))
                            }
                        } else s.containerGroups.some(function(C) {
                            return C.tabbableNodes.some(function(I) {
                                return At(I) > 0
                            })
                        }) || (E = !1);
                    else E = !1;
                    E && (b = y({
                        target: s.mostRecentlyFocusedNode,
                        isBackward: i.isKeyBackward(s.recentNavEvent)
                    })), p(b || s.mostRecentlyFocusedNode || f())
                }
                s.recentNavEvent = void 0
            },
            R = function(_) {
                var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                s.recentNavEvent = _;
                var g = y({
                    event: _,
                    isBackward: $
                });
                g && (_n(_) && _.preventDefault(), p(g))
            },
            N = function(_) {
                if (C4(_) && fn(i.escapeDeactivates, _) !== !1) {
                    _.preventDefault(), o.deactivate();
                    return
                }(i.isKeyForward(_) || i.isKeyBackward(_)) && R(_, i.isKeyBackward(_))
            },
            x = function(_) {
                var $ = Va(_);
                c($, _) >= 0 || fn(i.clickOutsideDeactivates, _) || fn(i.allowOutsideClick, _) || (_.preventDefault(), _.stopImmediatePropagation())
            },
            j = function() {
                if (s.active) return Dp.activateTrap(a, o), s.delayInitialFocusTimer = i.delayInitialFocus ? jp(function() {
                    p(f())
                }) : p(f()), n.addEventListener("focusin", m, !0), n.addEventListener("mousedown", A, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("touchstart", A, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("click", x, {
                    capture: !0,
                    passive: !1
                }), n.addEventListener("keydown", N, {
                    capture: !0,
                    passive: !1
                }), o
            },
            D = function() {
                if (s.active) return n.removeEventListener("focusin", m, !0), n.removeEventListener("mousedown", A, !0), n.removeEventListener("touchstart", A, !0), n.removeEventListener("click", x, !0), n.removeEventListener("keydown", N, !0), o
            },
            M = function(_) {
                var $ = _.some(function(g) {
                    var b = Array.from(g.removedNodes);
                    return b.some(function(E) {
                        return E === s.mostRecentlyFocusedNode
                    })
                });
                $ && p(f())
            },
            k = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(M) : void 0,
            G = function() {
                k && (k.disconnect(), s.active && !s.paused && s.containers.map(function(_) {
                    k.observe(_, {
                        subtree: !0,
                        childList: !0
                    })
                }))
            };
        return o = {
            get active() {
                return s.active
            },
            get paused() {
                return s.paused
            },
            activate: function(_) {
                if (s.active) return this;
                var $ = u(_, "onActivate"),
                    g = u(_, "onPostActivate"),
                    b = u(_, "checkCanFocusTrap");
                b || d(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = n.activeElement, $ == null || $();
                var E = function() {
                    b && d(), j(), G(), g == null || g()
                };
                return b ? (b(s.containers.concat()).then(E, E), this) : (E(), this)
            },
            deactivate: function(_) {
                if (!s.active) return this;
                var $ = Fp({
                    onDeactivate: i.onDeactivate,
                    onPostDeactivate: i.onPostDeactivate,
                    checkCanReturnFocus: i.checkCanReturnFocus
                }, _);
                clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, D(), s.active = !1, s.paused = !1, G(), Dp.deactivateTrap(a, o);
                var g = u($, "onDeactivate"),
                    b = u($, "onPostDeactivate"),
                    E = u($, "checkCanReturnFocus"),
                    S = u($, "returnFocus", "returnFocusOnDeactivate");
                g == null || g();
                var w = function() {
                    jp(function() {
                        S && p(v(s.nodeFocusedBeforeActivation)), b == null || b()
                    })
                };
                return S && E ? (E(v(s.nodeFocusedBeforeActivation)).then(w, w), this) : (w(), this)
            },
            pause: function(_) {
                if (s.paused || !s.active) return this;
                var $ = u(_, "onPause"),
                    g = u(_, "onPostPause");
                return s.paused = !0, $ == null || $(), D(), G(), g == null || g(), this
            },
            unpause: function(_) {
                if (!s.paused || !s.active) return this;
                var $ = u(_, "onUnpause"),
                    g = u(_, "onPostUnpause");
                return s.paused = !1, $ == null || $(), d(), j(), G(), g == null || g(), this
            },
            updateContainerElements: function(_) {
                var $ = [].concat(_).filter(Boolean);
                return s.containers = $.map(function(g) {
                    return typeof g == "string" ? n.querySelector(g) : g
                }), s.active && d(), G(), this
            }
        }, o.updateContainerElements(t), o
    };
const P4 = Object.freeze(Object.defineProperty({
        __proto__: null,
        createFocusTrap: I4
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    s8 = Sm(P4),
    o8 = Sm($4);
var Vs = {};
Object.defineProperty(Vs, "__esModule", {
    value: !0
});
var k4 = Vs.lazyWithPreload = void 0,
    za = T;

function Zb(e) {
    var t = (0, za.lazy)(e),
        r, n, a = (0, za.forwardRef)(function(o, u) {
            var c = (0, za.useRef)(r ?? t);
            return (0, za.createElement)(c.current, Object.assign(u ? {
                ref: u
            } : {}, o))
        }),
        i = a;
    return i.preload = function() {
        return n || (n = e().then(function(s) {
            return r = s.default, r
        })), n
    }, i
}
k4 = Vs.lazyWithPreload = Zb;
Vs.default = Zb;
var Mp = function(e, t, r) {
        if (r || arguments.length === 2)
            for (var n = 0, a = t.length, i; n < a; n++)(i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
        return e.concat(i || Array.prototype.slice.call(t))
    },
    L4 = function() {
        function e(t, r, n) {
            this.name = t, this.version = r, this.os = n, this.type = "browser"
        }
        return e
    }(),
    F4 = function() {
        function e(t) {
            this.version = t, this.type = "node", this.name = "node", this.os = process.platform
        }
        return e
    }(),
    D4 = function() {
        function e(t, r, n, a) {
            this.name = t, this.version = r, this.os = n, this.bot = a, this.type = "bot-device"
        }
        return e
    }(),
    j4 = function() {
        function e() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
        return e
    }(),
    U4 = function() {
        function e() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
        return e
    }(),
    M4 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    B4 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    Bp = 3,
    V4 = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", M4]
    ],
    Vp = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function u8(e) {
    return e ? zp(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new U4 : typeof navigator < "u" ? zp(navigator.userAgent) : W4()
}

function z4(e) {
    return e !== "" && V4.reduce(function(t, r) {
        var n = r[0],
            a = r[1];
        if (t) return t;
        var i = a.exec(e);
        return !!i && [n, i]
    }, !1)
}

function zp(e) {
    var t = z4(e);
    if (!t) return null;
    var r = t[0],
        n = t[1];
    if (r === "searchbot") return new j4;
    var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
    a ? a.length < Bp && (a = Mp(Mp([], a, !0), G4(Bp - a.length), !0)) : a = [];
    var i = a.join("."),
        s = q4(e),
        o = B4.exec(e);
    return o && o[1] ? new D4(r, i, s, o[1]) : new L4(r, i, s)
}

function q4(e) {
    for (var t = 0, r = Vp.length; t < r; t++) {
        var n = Vp[t],
            a = n[0],
            i = n[1],
            s = i.exec(e);
        if (s) return a
    }
    return null
}

function W4() {
    var e = typeof process < "u" && process.version;
    return e ? new F4(process.version.slice(1)) : null
}

function G4(e) {
    for (var t = [], r = 0; r < e; r++) t.push("0");
    return t
}
var Ce = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5,
        fullscreen: 6
    },
    qp = ["webkitFullscreenEnabled", "webkitFullscreenElement", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
    Wp = ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
    Gp = ["msFullscreenEnabled", "msFullscreenElement", "msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"],
    Ee = typeof window < "u" && typeof window.document < "u" ? window.document : {},
    ke = "fullscreenEnabled" in Ee && Object.keys(Ce) || qp[0] in Ee && qp || Wp[0] in Ee && Wp || Gp[0] in Ee && Gp || [],
    c8 = {
        requestFullscreen: function(e) {
            return e[ke[Ce.requestFullscreen]]()
        },
        requestFullscreenFunction: function(e) {
            return e[ke[Ce.requestFullscreen]]
        },
        get exitFullscreen() {
            return Ee[ke[Ce.exitFullscreen]].bind(Ee)
        },
        get fullscreenPseudoClass() {
            return ":" + ke[Ce.fullscreen]
        },
        addEventListener: function(e, t, r) {
            return Ee.addEventListener(ke[Ce[e]], t, r)
        },
        removeEventListener: function(e, t, r) {
            return Ee.removeEventListener(ke[Ce[e]], t, r)
        },
        get fullscreenEnabled() {
            return !!Ee[ke[Ce.fullscreenEnabled]]
        },
        set fullscreenEnabled(e) {},
        get fullscreenElement() {
            return Ee[ke[Ce.fullscreenElement]]
        },
        set fullscreenElement(e) {},
        get onfullscreenchange() {
            return Ee[("on" + ke[Ce.fullscreenchange]).toLowerCase()]
        },
        set onfullscreenchange(e) {
            return Ee[("on" + ke[Ce.fullscreenchange]).toLowerCase()] = e
        },
        get onfullscreenerror() {
            return Ee[("on" + ke[Ce.fullscreenerror]).toLowerCase()]
        },
        set onfullscreenerror(e) {
            return Ee[("on" + ke[Ce.fullscreenerror]).toLowerCase()] = e
        }
    },
    H4 = Object.defineProperty,
    K4 = (e, t) => {
        for (var r in t) H4(e, r, {
            get: t[r],
            enumerable: !0
        })
    },
    rt = {};
K4(rt, {
    assign: () => J4,
    colors: () => Tt,
    createStringInterpolator: () => Zl,
    skipAnimation: () => sw,
    to: () => iw,
    willAdvance: () => ef
});
var Hl = ba(),
    W = e => ya(e, Hl),
    Kl = ba();
W.write = e => ya(e, Kl);
var zs = ba();
W.onStart = e => ya(e, zs);
var Xl = ba();
W.onFrame = e => ya(e, Xl);
var Yl = ba();
W.onFinish = e => ya(e, Yl);
var Tr = [];
W.setTimeout = (e, t) => {
    const r = W.now() + t,
        n = () => {
            const i = Tr.findIndex(s => s.cancel == n);
            ~i && Tr.splice(i, 1), Nt -= ~i ? 1 : 0
        },
        a = {
            time: r,
            handler: e,
            cancel: n
        };
    return Tr.splice(ew(r), 0, a), Nt += 1, tw(), a
};
var ew = e => ~(~Tr.findIndex(t => t.time > e) || ~Tr.length);
W.cancel = e => {
    zs.delete(e), Xl.delete(e), Yl.delete(e), Hl.delete(e), Kl.delete(e)
};
W.sync = e => {
    uc = !0, W.batchedUpdates(e), uc = !1
};
W.throttle = e => {
    let t;

    function r() {
        try {
            e(...t)
        } finally {
            t = null
        }
    }

    function n(...a) {
        t = a, W.onStart(r)
    }
    return n.handler = e, n.cancel = () => {
        zs.delete(r), t = null
    }, n
};
var Jl = typeof window < "u" ? window.requestAnimationFrame : () => {};
W.use = e => Jl = e;
W.now = typeof performance < "u" ? () => performance.now() : Date.now;
W.batchedUpdates = e => e();
W.catch = console.error;
W.frameLoop = "always";
W.advance = () => {
    W.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : nw()
};
var Ct = -1,
    Nt = 0,
    uc = !1;

function ya(e, t) {
    uc ? (t.delete(e), e(0)) : (t.add(e), tw())
}

function tw() {
    Ct < 0 && (Ct = 0, W.frameLoop !== "demand" && Jl(rw))
}

function X4() {
    Ct = -1
}

function rw() {
    ~Ct && (Jl(rw), W.batchedUpdates(nw))
}

function nw() {
    const e = Ct;
    Ct = W.now();
    const t = ew(Ct);
    if (t && (aw(Tr.splice(0, t), r => r.handler()), Nt -= t), !Nt) {
        X4();
        return
    }
    zs.flush(), Hl.flush(e ? Math.min(64, Ct - e) : 16.667), Xl.flush(), Kl.flush(), Yl.flush()
}

function ba() {
    let e = new Set,
        t = e;
    return {
        add(r) {
            Nt += t == e && !e.has(r) ? 1 : 0, e.add(r)
        },
        delete(r) {
            return Nt -= t == e && e.has(r) ? 1 : 0, e.delete(r)
        },
        flush(r) {
            t.size && (e = new Set, Nt -= t.size, aw(t, n => n(r) && e.add(n)), Nt += e.size, t = e)
        }
    }
}

function aw(e, t) {
    e.forEach(r => {
        try {
            t(r)
        } catch (n) {
            W.catch(n)
        }
    })
}

function cc() {}
var Y4 = (e, t, r) => Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        configurable: !0
    }),
    P = {
        arr: Array.isArray,
        obj: e => !!e && e.constructor.name === "Object",
        fun: e => typeof e == "function",
        str: e => typeof e == "string",
        num: e => typeof e == "number",
        und: e => e === void 0
    };

function ct(e, t) {
    if (P.arr(e)) {
        if (!P.arr(t) || e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
        return !0
    }
    return e === t
}
var Q = (e, t) => e.forEach(t);

function gt(e, t, r) {
    if (P.arr(e)) {
        for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        return
    }
    for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
}
var je = e => P.und(e) ? [] : P.arr(e) ? e : [e];

function Cn(e, t) {
    if (e.size) {
        const r = Array.from(e);
        e.clear(), Q(r, t)
    }
}
var wn = (e, ...t) => Cn(e, r => r(...t)),
    Ql = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Zl, iw, Tt = null,
    sw = !1,
    ef = cc,
    J4 = e => {
        e.to && (iw = e.to), e.now && (W.now = e.now), e.colors !== void 0 && (Tt = e.colors), e.skipAnimation != null && (sw = e.skipAnimation), e.createStringInterpolator && (Zl = e.createStringInterpolator), e.requestAnimationFrame && W.use(e.requestAnimationFrame), e.batchedUpdates && (W.batchedUpdates = e.batchedUpdates), e.willAdvance && (ef = e.willAdvance), e.frameLoop && (W.frameLoop = e.frameLoop)
    },
    Nn = new Set,
    De = [],
    au = [],
    Yi = 0,
    qs = {
        get idle() {
            return !Nn.size && !De.length
        },
        start(e) {
            Yi > e.priority ? (Nn.add(e), W.onStart(Q4)) : (ow(e), W(lc))
        },
        advance: lc,
        sort(e) {
            if (Yi) W.onFrame(() => qs.sort(e));
            else {
                const t = De.indexOf(e);
                ~t && (De.splice(t, 1), uw(e))
            }
        },
        clear() {
            De = [], Nn.clear()
        }
    };

function Q4() {
    Nn.forEach(ow), Nn.clear(), W(lc)
}

function ow(e) {
    De.includes(e) || uw(e)
}

function uw(e) {
    De.splice(Z4(De, t => t.priority > e.priority), 0, e)
}

function lc(e) {
    const t = au;
    for (let r = 0; r < De.length; r++) {
        const n = De[r];
        Yi = n.priority, n.idle || (ef(n), n.advance(e), n.idle || t.push(n))
    }
    return Yi = 0, au = De, au.length = 0, De = t, De.length > 0
}

function Z4(e, t) {
    const r = e.findIndex(t);
    return r < 0 ? e.length : r
}
var e5 = (e, t, r) => Math.min(Math.max(r, e), t),
    l8 = {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199
    },
    qe = "[-+]?\\d*\\.?\\d+",
    Ji = qe + "%";

function Ws(...e) {
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var t5 = new RegExp("rgb" + Ws(qe, qe, qe)),
    r5 = new RegExp("rgba" + Ws(qe, qe, qe, qe)),
    n5 = new RegExp("hsl" + Ws(qe, Ji, Ji)),
    a5 = new RegExp("hsla" + Ws(qe, Ji, Ji, qe)),
    i5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    s5 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    o5 = /^#([0-9a-fA-F]{6})$/,
    u5 = /^#([0-9a-fA-F]{8})$/;

function c5(e) {
    let t;
    return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = o5.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Tt && Tt[e] !== void 0 ? Tt[e] : (t = t5.exec(e)) ? (yr(t[1]) << 24 | yr(t[2]) << 16 | yr(t[3]) << 8 | 255) >>> 0 : (t = r5.exec(e)) ? (yr(t[1]) << 24 | yr(t[2]) << 16 | yr(t[3]) << 8 | Xp(t[4])) >>> 0 : (t = i5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = u5.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = s5.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = n5.exec(e)) ? (Hp(Kp(t[1]), qa(t[2]), qa(t[3])) | 255) >>> 0 : (t = a5.exec(e)) ? (Hp(Kp(t[1]), qa(t[2]), qa(t[3])) | Xp(t[4])) >>> 0 : null
}

function iu(e, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function Hp(e, t, r) {
    const n = r < .5 ? r * (1 + t) : r + t - r * t,
        a = 2 * r - n,
        i = iu(a, n, e + 1 / 3),
        s = iu(a, n, e),
        o = iu(a, n, e - 1 / 3);
    return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(o * 255) << 8
}

function yr(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t
}

function Kp(e) {
    return (parseFloat(e) % 360 + 360) % 360 / 360
}

function Xp(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function qa(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Yp(e) {
    let t = c5(e);
    if (t === null) return e;
    t = t || 0;
    const r = (t & 4278190080) >>> 24,
        n = (t & 16711680) >>> 16,
        a = (t & 65280) >>> 8,
        i = (t & 255) / 255;
    return `rgba(${r}, ${n}, ${a}, ${i})`
}
var Kn = (e, t, r) => {
    if (P.fun(e)) return e;
    if (P.arr(e)) return Kn({
        range: e,
        output: t,
        extrapolate: r
    });
    if (P.str(e.output[0])) return Zl(e);
    const n = e,
        a = n.output,
        i = n.range || [0, 1],
        s = n.extrapolateLeft || n.extrapolate || "extend",
        o = n.extrapolateRight || n.extrapolate || "extend",
        u = n.easing || (c => c);
    return c => {
        const l = f5(c, i);
        return l5(c, i[l], i[l + 1], a[l], a[l + 1], u, s, o, n.map)
    }
};

function l5(e, t, r, n, a, i, s, o, u) {
    let c = u ? u(e) : e;
    if (c < t) {
        if (s === "identity") return c;
        s === "clamp" && (c = t)
    }
    if (c > r) {
        if (o === "identity") return c;
        o === "clamp" && (c = r)
    }
    return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c = c - t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : a === 1 / 0 ? c = c + n : c = c * (a - n) + n, c)
}

function f5(e, t) {
    for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
    return r - 1
}
var d5 = (e, t = "end") => r => {
        r = t === "end" ? Math.min(r, .999) : Math.max(r, .001);
        const n = r * e,
            a = t === "end" ? Math.floor(n) : Math.ceil(n);
        return e5(0, 1, a / e)
    },
    Qi = 1.70158,
    Wa = Qi * 1.525,
    Jp = Qi + 1,
    Qp = 2 * Math.PI / 3,
    Zp = 2 * Math.PI / 4.5,
    Ga = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
    h5 = {
        linear: e => e,
        easeInQuad: e => e * e,
        easeOutQuad: e => 1 - (1 - e) * (1 - e),
        easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
        easeInCubic: e => e * e * e,
        easeOutCubic: e => 1 - Math.pow(1 - e, 3),
        easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
        easeInQuart: e => e * e * e * e,
        easeOutQuart: e => 1 - Math.pow(1 - e, 4),
        easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
        easeInQuint: e => e * e * e * e * e,
        easeOutQuint: e => 1 - Math.pow(1 - e, 5),
        easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
        easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
        easeOutSine: e => Math.sin(e * Math.PI / 2),
        easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
        easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
        easeOutExpo: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
        easeInOutExpo: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
        easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
        easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
        easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
        easeInBack: e => Jp * e * e * e - Qi * e * e,
        easeOutBack: e => 1 + Jp * Math.pow(e - 1, 3) + Qi * Math.pow(e - 1, 2),
        easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((Wa + 1) * 2 * e - Wa) / 2 : (Math.pow(2 * e - 2, 2) * ((Wa + 1) * (e * 2 - 2) + Wa) + 2) / 2,
        easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Qp),
        easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * Qp) + 1,
        easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Zp)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Zp) / 2 + 1,
        easeInBounce: e => 1 - Ga(1 - e),
        easeOutBounce: Ga,
        easeInOutBounce: e => e < .5 ? (1 - Ga(1 - 2 * e)) / 2 : (1 + Ga(2 * e - 1)) / 2,
        steps: d5
    },
    Xn = Symbol.for("FluidValue.get"),
    jr = Symbol.for("FluidValue.observers"),
    Qe = e => !!(e && e[Xn]),
    Fe = e => e && e[Xn] ? e[Xn]() : e,
    em = e => e[jr] || null;

function p5(e, t) {
    e.eventObserved ? e.eventObserved(t) : e(t)
}

function Zi(e, t) {
    const r = e[jr];
    r && r.forEach(n => {
        p5(n, t)
    })
}
var m5 = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            g5(this, e)
        }
    },
    g5 = (e, t) => cw(e, Xn, t);

function wa(e, t) {
    if (e[Xn]) {
        let r = e[jr];
        r || cw(e, jr, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
    }
    return t
}

function es(e, t) {
    const r = e[jr];
    if (r && r.has(t)) {
        const n = r.size - 1;
        n ? r.delete(t) : e[jr] = null, e.observerRemoved && e.observerRemoved(n, t)
    }
}
var cw = (e, t, r) => Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        configurable: !0
    }),
    ci = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    v5 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    tm = new RegExp(`(${ci.source})(%|[a-z]+)`, "i"),
    y5 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    Gs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    lw = e => {
        const [t, r] = b5(e);
        if (!t || Ql()) return e;
        const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (n) return n.trim();
        if (r && r.startsWith("--")) {
            const a = window.getComputedStyle(document.documentElement).getPropertyValue(r);
            return a || e
        } else {
            if (r && Gs.test(r)) return lw(r);
            if (r) return r
        }
        return e
    },
    b5 = e => {
        const t = Gs.exec(e);
        if (!t) return [, ];
        const [, r, n] = t;
        return [r, n]
    },
    su, w5 = (e, t, r, n, a) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,
    E5 = e => {
        su || (su = Tt ? new RegExp(`(${Object.keys(Tt).join("|")})(?!\\w)`, "g") : /^\b$/);
        const t = e.output.map(i => Fe(i).replace(Gs, lw).replace(v5, Yp).replace(su, Yp)),
            r = t.map(i => i.match(ci).map(Number)),
            a = r[0].map((i, s) => r.map(o => {
                if (!(s in o)) throw Error('The arity of each "output" value must be equal');
                return o[s]
            })).map(i => Kn({
                ...e,
                output: i
            }));
        return i => {
            var u;
            const s = !tm.test(t[0]) && ((u = t.find(c => tm.test(c))) == null ? void 0 : u.replace(ci, ""));
            let o = 0;
            return t[0].replace(ci, () => `${a[o++](i)}${s||""}`).replace(y5, w5)
        }
    },
    tf = "react-spring: ",
    fw = e => {
        const t = e;
        let r = !1;
        if (typeof t != "function") throw new TypeError(`${tf}once requires a function parameter`);
        return (...n) => {
            r || (t(...n), r = !0)
        }
    },
    S5 = fw(console.warn);

function $5() {
    S5(`${tf}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
var A5 = fw(console.warn);

function O5() {
    A5(`${tf}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
}

function Hs(e) {
    return P.str(e) && (e[0] == "#" || /\d/.test(e) || !Ql() && Gs.test(e) || e in (Tt || {}))
}
var rf = Ql() ? T.useEffect : T.useLayoutEffect,
    R5 = () => {
        const e = T.useRef(!1);
        return rf(() => (e.current = !0, () => {
            e.current = !1
        }), []), e
    };

function dw() {
    const e = T.useState()[1],
        t = R5();
    return () => {
        t.current && e(Math.random())
    }
}

function _5(e, t) {
    const [r] = T.useState(() => ({
        inputs: t,
        result: e()
    })), n = T.useRef(), a = n.current;
    let i = a;
    return i ? t && i.inputs && C5(t, i.inputs) || (i = {
        inputs: t,
        result: e()
    }) : i = r, T.useEffect(() => {
        n.current = i, a == r && (r.inputs = r.result = void 0)
    }, [i]), i.result
}

function C5(e, t) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++)
        if (e[r] !== t[r]) return !1;
    return !0
}
var hw = e => T.useEffect(e, N5),
    N5 = [];

function rm(e) {
    const t = T.useRef();
    return T.useEffect(() => {
        t.current = e
    }), t.current
}
var Yn = Symbol.for("Animated:node"),
    x5 = e => !!e && e[Yn] === e,
    Je = e => e && e[Yn],
    nf = (e, t) => Y4(e, Yn, t),
    Ks = e => e && e[Yn] && e[Yn].getPayload(),
    pw = class {
        constructor() {
            nf(this, this)
        }
        getPayload() {
            return this.payload || []
        }
    },
    Ea = class extends pw {
        constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, P.num(this._value) && (this.lastPosition = this._value)
        }
        static create(e) {
            return new Ea(e)
        }
        getPayload() {
            return [this]
        }
        getValue() {
            return this._value
        }
        setValue(e, t) {
            return P.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0)
        }
        reset() {
            const {
                done: e
            } = this;
            this.done = !1, P.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
        }
    },
    Jn = class extends Ea {
        constructor(e) {
            super(0), this._string = null, this._toString = Kn({
                output: [e, e]
            })
        }
        static create(e) {
            return new Jn(e)
        }
        getValue() {
            const e = this._string;
            return e ?? (this._string = this._toString(this._value))
        }
        setValue(e) {
            if (P.str(e)) {
                if (e == this._string) return !1;
                this._string = e, this._value = 1
            } else if (super.setValue(e)) this._string = null;
            else return !1;
            return !0
        }
        reset(e) {
            e && (this._toString = Kn({
                output: [this.getValue(), e]
            })), this._value = 0, super.reset()
        }
    },
    ts = {
        dependencies: null
    },
    af = class extends pw {
        constructor(e) {
            super(), this.source = e, this.setValue(e)
        }
        getValue(e) {
            const t = {};
            return gt(this.source, (r, n) => {
                x5(r) ? t[n] = r.getValue(e) : Qe(r) ? t[n] = Fe(r) : e || (t[n] = r)
            }), t
        }
        setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
        }
        reset() {
            this.payload && Q(this.payload, e => e.reset())
        }
        _makePayload(e) {
            if (e) {
                const t = new Set;
                return gt(e, this._addToPayload, t), Array.from(t)
            }
        }
        _addToPayload(e) {
            ts.dependencies && Qe(e) && ts.dependencies.add(e);
            const t = Ks(e);
            t && Q(t, r => this.add(r))
        }
    },
    mw = class extends af {
        constructor(e) {
            super(e)
        }
        static create(e) {
            return new mw(e)
        }
        getValue() {
            return this.source.map(e => e.getValue())
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(T5)), !0)
        }
    };

function T5(e) {
    return (Hs(e) ? Jn : Ea).create(e)
}

function fc(e) {
    const t = Je(e);
    return t ? t.constructor : P.arr(e) ? mw : Hs(e) ? Jn : Ea
}
var nm = (e, t) => {
        const r = !P.fun(e) || e.prototype && e.prototype.isReactComponent;
        return T.forwardRef((n, a) => {
            const i = T.useRef(null),
                s = r && T.useCallback(p => {
                    i.current = k5(a, p)
                }, [a]),
                [o, u] = P5(n, t),
                c = dw(),
                l = () => {
                    const p = i.current;
                    if (r && !p) return;
                    (p ? t.applyAnimatedValues(p, o.getValue(!0)) : !1) === !1 && c()
                },
                f = new I5(l, u),
                d = T.useRef();
            rf(() => (d.current = f, Q(u, p => wa(p, f)), () => {
                d.current && (Q(d.current.deps, p => es(p, d.current)), W.cancel(d.current.update))
            })), T.useEffect(l, []), hw(() => () => {
                const p = d.current;
                Q(p.deps, v => es(v, p))
            });
            const h = t.getComponentProps(o.getValue());
            return T.createElement(e, {
                ...h,
                ref: s
            })
        })
    },
    I5 = class {
        constructor(e, t) {
            this.update = e, this.deps = t
        }
        eventObserved(e) {
            e.type == "change" && W.write(this.update)
        }
    };

function P5(e, t) {
    const r = new Set;
    return ts.dependencies = r, e.style && (e = {
        ...e,
        style: t.createAnimatedStyle(e.style)
    }), e = new af(e), ts.dependencies = null, [e, r]
}

function k5(e, t) {
    return e && (P.fun(e) ? e(t) : e.current = t), t
}
var am = Symbol.for("AnimatedComponent"),
    f8 = (e, {
        applyAnimatedValues: t = () => !1,
        createAnimatedStyle: r = a => new af(a),
        getComponentProps: n = a => a
    } = {}) => {
        const a = {
                applyAnimatedValues: t,
                createAnimatedStyle: r,
                getComponentProps: n
            },
            i = s => {
                const o = im(s) || "Anonymous";
                return P.str(s) ? s = i[s] || (i[s] = nm(s, a)) : s = s[am] || (s[am] = nm(s, a)), s.displayName = `Animated(${o})`, s
            };
        return gt(e, (s, o) => {
            P.arr(e) && (o = im(s)), i[o] = i(s)
        }), {
            animated: i
        }
    },
    im = e => P.str(e) ? e : e && P.str(e.displayName) ? e.displayName : P.fun(e) && e.name || null;

function qt(e, ...t) {
    return P.fun(e) ? e(...t) : e
}
var xn = (e, t) => e === !0 || !!(t && e && (P.fun(e) ? e(t) : je(e).includes(t))),
    gw = (e, t) => P.obj(e) ? t && e[t] : e,
    vw = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
    L5 = e => e,
    sf = (e, t = L5) => {
        let r = F5;
        e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
        const n = {};
        for (const a of r) {
            const i = t(e[a], a);
            P.und(i) || (n[a] = i)
        }
        return n
    },
    F5 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
    D5 = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1
    };

function j5(e) {
    const t = {};
    let r = 0;
    if (gt(e, (n, a) => {
            D5[a] || (t[a] = n, r++)
        }), r) return t
}

function yw(e) {
    const t = j5(e);
    if (t) {
        const r = {
            to: t
        };
        return gt(e, (n, a) => a in t || (r[a] = n)), r
    }
    return {
        ...e
    }
}

function Qn(e) {
    return e = Fe(e), P.arr(e) ? e.map(Qn) : Hs(e) ? rt.createStringInterpolator({
        range: [0, 1],
        output: [e, e]
    })(1) : e
}

function U5(e) {
    for (const t in e) return !0;
    return !1
}

function dc(e) {
    return P.fun(e) || P.arr(e) && P.obj(e[0])
}

function M5(e, t) {
    var r;
    (r = e.ref) == null || r.delete(e), t == null || t.delete(e)
}

function B5(e, t) {
    var r;
    t && e.ref !== t && ((r = e.ref) == null || r.delete(e), t.add(e), e.ref = t)
}
var V5 = {
        default: {
            tension: 170,
            friction: 26
        },
        gentle: {
            tension: 120,
            friction: 14
        },
        wobbly: {
            tension: 180,
            friction: 12
        },
        stiff: {
            tension: 210,
            friction: 20
        },
        slow: {
            tension: 280,
            friction: 60
        },
        molasses: {
            tension: 280,
            friction: 120
        }
    },
    hc = {
        ...V5.default,
        mass: 1,
        damping: 1,
        easing: h5.linear,
        clamp: !1
    },
    z5 = class {
        constructor() {
            this.velocity = 0, Object.assign(this, hc)
        }
    };

function q5(e, t, r) {
    r && (r = {
        ...r
    }, sm(r, t), t = {
        ...r,
        ...t
    }), sm(e, t), Object.assign(e, t);
    for (const s in hc) e[s] == null && (e[s] = hc[s]);
    let {
        frequency: n,
        damping: a
    } = e;
    const {
        mass: i
    } = e;
    return P.und(n) || (n < .01 && (n = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * a * i / n), e
}

function sm(e, t) {
    if (!P.und(t.decay)) e.duration = void 0;
    else {
        const r = !P.und(t.tension) || !P.und(t.friction);
        (r || !P.und(t.frequency) || !P.und(t.damping) || !P.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
    }
}
var om = [],
    W5 = class {
        constructor() {
            this.changed = !1, this.values = om, this.toValues = null, this.fromValues = om, this.config = new z5, this.immediate = !1
        }
    };

function bw(e, {
    key: t,
    props: r,
    defaultProps: n,
    state: a,
    actions: i
}) {
    return new Promise((s, o) => {
        let u, c, l = xn(r.cancel ?? (n == null ? void 0 : n.cancel), t);
        if (l) h();
        else {
            P.und(r.pause) || (a.paused = xn(r.pause, t));
            let p = n == null ? void 0 : n.pause;
            p !== !0 && (p = a.paused || xn(p, t)), u = qt(r.delay || 0, t), p ? (a.resumeQueue.add(d), i.pause()) : (i.resume(), d())
        }

        function f() {
            a.resumeQueue.add(d), a.timeouts.delete(c), c.cancel(), u = c.time - W.now()
        }

        function d() {
            u > 0 && !rt.skipAnimation ? (a.delayed = !0, c = W.setTimeout(h, u), a.pauseQueue.add(f), a.timeouts.add(c)) : h()
        }

        function h() {
            a.delayed && (a.delayed = !1), a.pauseQueue.delete(f), a.timeouts.delete(c), e <= (a.cancelId || 0) && (l = !0);
            try {
                i.start({
                    ...r,
                    callId: e,
                    cancel: l
                }, s)
            } catch (p) {
                o(p)
            }
        }
    })
}
var of = (e, t) => t.length == 1 ? t[0] : t.some(r => r.cancelled) ? Ir(e.get()) : t.every(r => r.noop) ? ww(e.get()) : Be(e.get(), t.every(r => r.finished)), ww = e => ({
    value: e,
    noop: !0,
    finished: !0,
    cancelled: !1
}), Be = (e, t, r = !1) => ({
    value: e,
    finished: t,
    cancelled: r
}), Ir = e => ({
    value: e,
    cancelled: !0,
    finished: !1
});

function Ew(e, t, r, n) {
    const {
        callId: a,
        parentId: i,
        onRest: s
    } = t, {
        asyncTo: o,
        promise: u
    } = r;
    return !i && e === o && !t.reset ? u : r.promise = (async () => {
        r.asyncId = a, r.asyncTo = e;
        const c = sf(t, (y, A) => A === "onRest" ? void 0 : y);
        let l, f;
        const d = new Promise((y, A) => (l = y, f = A)),
            h = y => {
                const A = a <= (r.cancelId || 0) && Ir(n) || a !== r.asyncId && Be(n, !1);
                if (A) throw y.result = A, f(y), y
            },
            p = (y, A) => {
                const m = new um,
                    R = new cm;
                return (async () => {
                    if (rt.skipAnimation) throw Zn(r), R.result = Be(n, !1), f(R), R;
                    h(m);
                    const N = P.obj(y) ? {
                        ...y
                    } : {
                        ...A,
                        to: y
                    };
                    N.parentId = a, gt(c, (j, D) => {
                        P.und(N[D]) && (N[D] = j)
                    });
                    const x = await n.start(N);
                    return h(m), r.paused && await new Promise(j => {
                        r.resumeQueue.add(j)
                    }), x
                })()
            };
        let v;
        if (rt.skipAnimation) return Zn(r), Be(n, !1);
        try {
            let y;
            P.arr(e) ? y = (async A => {
                for (const m of A) await p(m)
            })(e) : y = Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([y.then(l), d]), v = Be(n.get(), !0, !1)
        } catch (y) {
            if (y instanceof um) v = y.result;
            else if (y instanceof cm) v = y.result;
            else throw y
        } finally {
            a == r.asyncId && (r.asyncId = i, r.asyncTo = i ? o : void 0, r.promise = i ? u : void 0)
        }
        return P.fun(s) && W.batchedUpdates(() => {
            s(v, n, n.item)
        }), v
    })()
}

function Zn(e, t) {
    Cn(e.timeouts, r => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
var um = class extends Error {
        constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
        }
    },
    cm = class extends Error {
        constructor() {
            super("SkipAnimationSignal")
        }
    },
    pc = e => e instanceof uf,
    G5 = 1,
    uf = class extends m5 {
        constructor() {
            super(...arguments), this.id = G5++, this._priority = 0
        }
        get priority() {
            return this._priority
        }
        set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
            const e = Je(this);
            return e && e.getValue()
        }
        to(...e) {
            return rt.to(this, e)
        }
        interpolate(...e) {
            return $5(), rt.to(this, e)
        }
        toJSON() {
            return this.get()
        }
        observerAdded(e) {
            e == 1 && this._attach()
        }
        observerRemoved(e) {
            e == 0 && this._detach()
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
            Zi(this, {
                type: "change",
                parent: this,
                value: e,
                idle: t
            })
        }
        _onPriorityChange(e) {
            this.idle || qs.sort(this), Zi(this, {
                type: "priority",
                parent: this,
                priority: e
            })
        }
    },
    tr = Symbol.for("SpringPhase"),
    Sw = 1,
    mc = 2,
    gc = 4,
    ou = e => (e[tr] & Sw) > 0,
    $t = e => (e[tr] & mc) > 0,
    dn = e => (e[tr] & gc) > 0,
    lm = (e, t) => t ? e[tr] |= mc | Sw : e[tr] &= ~mc,
    fm = (e, t) => t ? e[tr] |= gc : e[tr] &= ~gc,
    H5 = class extends uf {
        constructor(e, t) {
            if (super(), this.animation = new W5, this.defaultProps = {}, this._state = {
                    paused: !1,
                    delayed: !1,
                    pauseQueue: new Set,
                    resumeQueue: new Set,
                    timeouts: new Set
                }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !P.und(e) || !P.und(t)) {
                const r = P.obj(e) ? {
                    ...e
                } : {
                    ...t,
                    from: e
                };
                P.und(r.default) && (r.default = !0), this.start(r)
            }
        }
        get idle() {
            return !($t(this) || this._state.asyncTo) || dn(this)
        }
        get goal() {
            return Fe(this.animation.to)
        }
        get velocity() {
            const e = Je(this);
            return e instanceof Ea ? e.lastVelocity || 0 : e.getPayload().map(t => t.lastVelocity || 0)
        }
        get hasAnimated() {
            return ou(this)
        }
        get isAnimating() {
            return $t(this)
        }
        get isPaused() {
            return dn(this)
        }
        get isDelayed() {
            return this._state.delayed
        }
        advance(e) {
            let t = !0,
                r = !1;
            const n = this.animation;
            let {
                toValues: a
            } = n;
            const {
                config: i
            } = n, s = Ks(n.to);
            !s && Qe(n.to) && (a = je(Fe(n.to))), n.values.forEach((c, l) => {
                if (c.done) return;
                const f = c.constructor == Jn ? 1 : s ? s[l].lastPosition : a[l];
                let d = n.immediate,
                    h = f;
                if (!d) {
                    if (h = c.lastPosition, i.tension <= 0) {
                        c.done = !0;
                        return
                    }
                    let p = c.elapsedTime += e;
                    const v = n.fromValues[l],
                        y = c.v0 != null ? c.v0 : c.v0 = P.arr(i.velocity) ? i.velocity[l] : i.velocity;
                    let A;
                    const m = i.precision || (v == f ? .005 : Math.min(1, Math.abs(f - v) * .001));
                    if (P.und(i.duration))
                        if (i.decay) {
                            const R = i.decay === !0 ? .998 : i.decay,
                                N = Math.exp(-(1 - R) * p);
                            h = v + y / (1 - R) * (1 - N), d = Math.abs(c.lastPosition - h) <= m, A = y * N
                        } else {
                            A = c.lastVelocity == null ? y : c.lastVelocity;
                            const R = i.restVelocity || m / 10,
                                N = i.clamp ? 0 : i.bounce,
                                x = !P.und(N),
                                j = v == f ? c.v0 > 0 : v < f;
                            let D, M = !1;
                            const k = 1,
                                G = Math.ceil(e / k);
                            for (let F = 0; F < G && (D = Math.abs(A) > R, !(!D && (d = Math.abs(f - h) <= m, d))); ++F) {
                                x && (M = h == f || h > f == j, M && (A = -A * N, h = f));
                                const _ = -i.tension * 1e-6 * (h - f),
                                    $ = -i.friction * .001 * A,
                                    g = (_ + $) / i.mass;
                                A = A + g * k, h = h + A * k
                            }
                        }
                    else {
                        let R = 1;
                        i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, p = c.elapsedTime += e)), R = (i.progress || 0) + p / this._memoizedDuration, R = R > 1 ? 1 : R < 0 ? 0 : R, c.durationProgress = R), h = v + i.easing(R) * (f - v), A = (h - c.lastPosition) / e, d = R == 1
                    }
                    c.lastVelocity = A, Number.isNaN(h) && (console.warn("Got NaN while animating:", this), d = !0)
                }
                s && !s[l].done && (d = !1), d ? c.done = !0 : t = !1, c.setValue(h, i.round) && (r = !0)
            });
            const o = Je(this),
                u = o.getValue();
            if (t) {
                const c = Fe(n.to);
                (u !== c || r) && !i.decay ? (o.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(u), this._stop()
            } else r && this._onChange(u)
        }
        set(e) {
            return W.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e)
            }), this
        }
        pause() {
            this._update({
                pause: !0
            })
        }
        resume() {
            this._update({
                pause: !1
            })
        }
        finish() {
            if ($t(this)) {
                const {
                    to: e,
                    config: t
                } = this.animation;
                W.batchedUpdates(() => {
                    this._onStart(), t.decay || this._set(e, !1), this._stop()
                })
            }
            return this
        }
        update(e) {
            return (this.queue || (this.queue = [])).push(e), this
        }
        start(e, t) {
            let r;
            return P.und(e) ? (r = this.queue || [], this.queue = []) : r = [P.obj(e) ? e : {
                ...t,
                to: e
            }], Promise.all(r.map(n => this._update(n))).then(n => of(this, n))
        }
        stop(e) {
            const {
                to: t
            } = this.animation;
            return this._focus(this.get()), Zn(this._state, e && this._lastCallId), W.batchedUpdates(() => this._stop(t, e)), this
        }
        reset() {
            this._update({
                reset: !0
            })
        }
        eventObserved(e) {
            e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1)
        }
        _prepareNode(e) {
            const t = this.key || "";
            let {
                to: r,
                from: n
            } = e;
            r = P.obj(r) ? r[t] : r, (r == null || dc(r)) && (r = void 0), n = P.obj(n) ? n[t] : n, n == null && (n = void 0);
            const a = {
                to: r,
                from: n
            };
            return ou(this) || (e.reverse && ([r, n] = [n, r]), n = Fe(n), P.und(n) ? Je(this) || this._set(r) : this._set(n)), a
        }
        _update({
            ...e
        }, t) {
            const {
                key: r,
                defaultProps: n
            } = this;
            e.default && Object.assign(n, sf(e, (s, o) => /^on/.test(o) ? gw(s, r) : s)), hm(this, e, "onProps"), pn(this, "onProps", e, this);
            const a = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return bw(++this._lastCallId, {
                key: r,
                props: e,
                defaultProps: n,
                state: i,
                actions: {
                    pause: () => {
                        dn(this) || (fm(this, !0), wn(i.pauseQueue), pn(this, "onPause", Be(this, hn(this, this.animation.to)), this))
                    },
                    resume: () => {
                        dn(this) && (fm(this, !1), $t(this) && this._resume(), wn(i.resumeQueue), pn(this, "onResume", Be(this, hn(this, this.animation.to)), this))
                    },
                    start: this._merge.bind(this, a)
                }
            }).then(s => {
                if (e.loop && s.finished && !(t && s.noop)) {
                    const o = $w(e);
                    if (o) return this._update(o, !0)
                }
                return s
            })
        }
        _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Ir(this));
            const n = !P.und(e.to),
                a = !P.und(e.from);
            if (n || a)
                if (t.callId > this._lastToId) this._lastToId = t.callId;
                else return r(Ir(this));
            const {
                key: i,
                defaultProps: s,
                animation: o
            } = this, {
                to: u,
                from: c
            } = o;
            let {
                to: l = u,
                from: f = c
            } = e;
            a && !n && (!t.default || P.und(l)) && (l = f), t.reverse && ([l, f] = [f, l]);
            const d = !ct(f, c);
            d && (o.from = f), f = Fe(f);
            const h = !ct(l, u);
            h && this._focus(l);
            const p = dc(t.to),
                {
                    config: v
                } = o,
                {
                    decay: y,
                    velocity: A
                } = v;
            (n || a) && (v.velocity = 0), t.config && !p && q5(v, qt(t.config, i), t.config !== s.config ? qt(s.config, i) : void 0);
            let m = Je(this);
            if (!m || P.und(l)) return r(Be(this, !0));
            const R = P.und(t.reset) ? a && !t.default : !P.und(f) && xn(t.reset, i),
                N = R ? f : this.get(),
                x = Qn(l),
                j = P.num(x) || P.arr(x) || Hs(x),
                D = !p && (!j || xn(s.immediate || t.immediate, i));
            if (h) {
                const F = fc(l);
                if (F !== m.constructor)
                    if (D) m = this._set(x);
                    else throw Error(`Cannot animate between ${m.constructor.name} and ${F.name}, as the "to" prop suggests`)
            }
            const M = m.constructor;
            let k = Qe(l),
                G = !1;
            if (!k) {
                const F = R || !ou(this) && d;
                (h || F) && (G = ct(Qn(N), x), k = !G), (!ct(o.immediate, D) && !D || !ct(v.decay, y) || !ct(v.velocity, A)) && (k = !0)
            }
            if (G && $t(this) && (o.changed && !R ? k = !0 : k || this._stop(u)), !p && ((k || Qe(u)) && (o.values = m.getPayload(), o.toValues = Qe(l) ? null : M == Jn ? [1] : je(x)), o.immediate != D && (o.immediate = D, !D && !R && this._set(u)), k)) {
                const {
                    onRest: F
                } = o;
                Q(X5, $ => hm(this, t, $));
                const _ = Be(this, hn(this, u));
                wn(this._pendingCalls, _), this._pendingCalls.add(r), o.changed && W.batchedUpdates(() => {
                    var $;
                    o.changed = !R, F == null || F(_, this), R ? qt(s.onRest, _) : ($ = o.onStart) == null || $.call(o, _, this)
                })
            }
            R && this._set(N), p ? r(Ew(t.to, t, this._state, this)) : k ? this._start() : $t(this) && !h ? this._pendingCalls.add(r) : r(ww(N))
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (em(this) && this._detach(), t.to = e, em(this) && this._attach())
        }
        _attach() {
            let e = 0;
            const {
                to: t
            } = this.animation;
            Qe(t) && (wa(t, this), pc(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
            const {
                to: e
            } = this.animation;
            Qe(e) && es(e, this)
        }
        _set(e, t = !0) {
            const r = Fe(e);
            if (!P.und(r)) {
                const n = Je(this);
                if (!n || !ct(r, n.getValue())) {
                    const a = fc(r);
                    !n || n.constructor != a ? nf(this, a.create(r)) : n.setValue(r), n && W.batchedUpdates(() => {
                        this._onChange(r, t)
                    })
                }
            }
            return Je(this)
        }
        _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, pn(this, "onStart", Be(this, hn(this, e.to)), this))
        }
        _onChange(e, t) {
            t || (this._onStart(), qt(this.animation.onChange, e, this)), qt(this.defaultProps.onChange, e, this), super._onChange(e, t)
        }
        _start() {
            const e = this.animation;
            Je(this).reset(Fe(e.to)), e.immediate || (e.fromValues = e.values.map(t => t.lastPosition)), $t(this) || (lm(this, !0), dn(this) || this._resume())
        }
        _resume() {
            rt.skipAnimation ? this.finish() : qs.start(this)
        }
        _stop(e, t) {
            if ($t(this)) {
                lm(this, !1);
                const r = this.animation;
                Q(r.values, a => {
                    a.done = !0
                }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Zi(this, {
                    type: "idle",
                    parent: this
                });
                const n = t ? Ir(this.get()) : Be(this.get(), hn(this, e ?? r.to));
                wn(this._pendingCalls, n), r.changed && (r.changed = !1, pn(this, "onRest", n, this))
            }
        }
    };

function hn(e, t) {
    const r = Qn(t),
        n = Qn(e.get());
    return ct(n, r)
}

function $w(e, t = e.loop, r = e.to) {
    const n = qt(t);
    if (n) {
        const a = n !== !0 && yw(n),
            i = (a || e).reverse,
            s = !a || a.reset;
        return ea({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || dc(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...a
        })
    }
}

function ea(e) {
    const {
        to: t,
        from: r
    } = e = yw(e), n = new Set;
    return P.obj(t) && dm(t, n), P.obj(r) && dm(r, n), e.keys = n.size ? Array.from(n) : null, e
}

function K5(e) {
    const t = ea(e);
    return P.und(t.default) && (t.default = sf(t)), t
}

function dm(e, t) {
    gt(e, (r, n) => r != null && t.add(n))
}
var X5 = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function hm(e, t, r) {
    e.animation[r] = t[r] !== vw(t, r) ? gw(t[r], e.key) : void 0
}

function pn(e, t, ...r) {
    var n, a, i, s;
    (a = (n = e.animation)[t]) == null || a.call(n, ...r), (s = (i = e.defaultProps)[t]) == null || s.call(i, ...r)
}
var Y5 = ["onStart", "onChange", "onRest"],
    J5 = 1,
    Q5 = class {
        constructor(e, t) {
            this.id = J5++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                paused: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
            }, this._events = {
                onStart: new Map,
                onChange: new Map,
                onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                default: !0,
                ...e
            })
        }
        get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
        }
        get item() {
            return this._item
        }
        set item(e) {
            this._item = e
        }
        get() {
            const e = {};
            return this.each((t, r) => e[r] = t.get()), e
        }
        set(e) {
            for (const t in e) {
                const r = e[t];
                P.und(r) || this.springs[t].set(r)
            }
        }
        update(e) {
            return e && this.queue.push(ea(e)), this
        }
        start(e) {
            let {
                queue: t
            } = this;
            return e ? t = je(e).map(ea) : this.queue = [], this._flush ? this._flush(this, t) : (Cw(this, t), vc(this, t))
        }
        stop(e, t) {
            if (e !== !!e && (t = e), t) {
                const r = this.springs;
                Q(je(t), n => r[n].stop(!!e))
            } else Zn(this._state, this._lastAsyncId), this.each(r => r.stop(!!e));
            return this
        }
        pause(e) {
            if (P.und(e)) this.start({
                pause: !0
            });
            else {
                const t = this.springs;
                Q(je(e), r => t[r].pause())
            }
            return this
        }
        resume(e) {
            if (P.und(e)) this.start({
                pause: !1
            });
            else {
                const t = this.springs;
                Q(je(e), r => t[r].resume())
            }
            return this
        }
        each(e) {
            gt(this.springs, e)
        }
        _onFrame() {
            const {
                onStart: e,
                onChange: t,
                onRest: r
            } = this._events, n = this._active.size > 0, a = this._changed.size > 0;
            (n && !this._started || a && !this._started) && (this._started = !0, Cn(e, ([o, u]) => {
                u.value = this.get(), o(u, this, this._item)
            }));
            const i = !n && this._started,
                s = a || i && r.size ? this.get() : null;
            a && t.size && Cn(t, ([o, u]) => {
                u.value = s, o(u, this, this._item)
            }), i && (this._started = !1, Cn(r, ([o, u]) => {
                u.value = s, o(u, this, this._item)
            }))
        }
        eventObserved(e) {
            if (e.type == "change") this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else if (e.type == "idle") this._active.delete(e.parent);
            else return;
            W.onFrame(this._onFrame)
        }
    };

function vc(e, t) {
    return Promise.all(t.map(r => Aw(e, r))).then(r => of(e, r))
}
async function Aw(e, t, r) {
    const {
        keys: n,
        to: a,
        from: i,
        loop: s,
        onRest: o,
        onResolve: u
    } = t, c = P.obj(t.default) && t.default;
    s && (t.loop = !1), a === !1 && (t.to = null), i === !1 && (t.from = null);
    const l = P.arr(a) || P.fun(a) ? a : void 0;
    l ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Q(Y5, v => {
        const y = t[v];
        if (P.fun(y)) {
            const A = e._events[v];
            t[v] = ({
                finished: m,
                cancelled: R
            }) => {
                const N = A.get(y);
                N ? (m || (N.finished = !1), R && (N.cancelled = !0)) : A.set(y, {
                    value: null,
                    finished: m || !1,
                    cancelled: R || !1
                })
            }, c && (c[v] = t[v])
        }
    });
    const f = e._state;
    t.pause === !f.paused ? (f.paused = t.pause, wn(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
    const d = (n || Object.keys(e.springs)).map(v => e.springs[v].start(t)),
        h = t.cancel === !0 || vw(t, "cancel") === !0;
    (l || h && f.asyncId) && d.push(bw(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
            pause: cc,
            resume: cc,
            start(v, y) {
                h ? (Zn(f, e._lastAsyncId), y(Ir(e))) : (v.onRest = o, y(Ew(l, v, f, e)))
            }
        }
    })), f.paused && await new Promise(v => {
        f.resumeQueue.add(v)
    });
    const p = of(e, await Promise.all(d));
    if (s && p.finished && !(r && p.noop)) {
        const v = $w(t, s, a);
        if (v) return Cw(e, [v]), Aw(e, v, !0)
    }
    return u && W.batchedUpdates(() => u(p, e, e.item)), p
}

function pm(e, t) {
    const r = {
        ...e.springs
    };
    return t && Q(je(t), n => {
        P.und(n.keys) && (n = ea(n)), P.obj(n.to) || (n = {
            ...n,
            to: void 0
        }), _w(r, n, a => Rw(a))
    }), Ow(e, r), r
}

function Ow(e, t) {
    gt(t, (r, n) => {
        e.springs[n] || (e.springs[n] = r, wa(r, e))
    })
}

function Rw(e, t) {
    const r = new H5;
    return r.key = e, t && wa(r, t), r
}

function _w(e, t, r) {
    t.keys && Q(t.keys, n => {
        (e[n] || (e[n] = r(n)))._prepareNode(t)
    })
}

function Cw(e, t) {
    Q(t, r => {
        _w(e.springs, r, n => Rw(n, e))
    })
}
var Xs = ({
        children: e,
        ...t
    }) => {
        const r = T.useContext(rs),
            n = t.pause || !!r.pause,
            a = t.immediate || !!r.immediate;
        t = _5(() => ({
            pause: n,
            immediate: a
        }), [n, a]);
        const {
            Provider: i
        } = rs;
        return T.createElement(i, {
            value: t
        }, e)
    },
    rs = Z5(Xs, {});
Xs.Provider = rs.Provider;
Xs.Consumer = rs.Consumer;

function Z5(e, t) {
    return Object.assign(e, T.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
}
var eB = () => {
    const e = [],
        t = function(n) {
            O5();
            const a = [];
            return Q(e, (i, s) => {
                if (P.und(n)) a.push(i.start());
                else {
                    const o = r(n, i, s);
                    o && a.push(i.start(o))
                }
            }), a
        };
    t.current = e, t.add = function(n) {
        e.includes(n) || e.push(n)
    }, t.delete = function(n) {
        const a = e.indexOf(n);
        ~a && e.splice(a, 1)
    }, t.pause = function() {
        return Q(e, n => n.pause(...arguments)), this
    }, t.resume = function() {
        return Q(e, n => n.resume(...arguments)), this
    }, t.set = function(n) {
        Q(e, (a, i) => {
            const s = P.fun(n) ? n(i, a) : n;
            s && a.set(s)
        })
    }, t.start = function(n) {
        const a = [];
        return Q(e, (i, s) => {
            if (P.und(n)) a.push(i.start());
            else {
                const o = this._getProps(n, i, s);
                o && a.push(i.start(o))
            }
        }), a
    }, t.stop = function() {
        return Q(e, n => n.stop(...arguments)), this
    }, t.update = function(n) {
        return Q(e, (a, i) => a.update(this._getProps(n, a, i))), this
    };
    const r = function(n, a, i) {
        return P.fun(n) ? n(i, a) : n
    };
    return t._getProps = r, t
};

function tB(e, t, r) {
    const n = P.fun(t) && t;
    n && !r && (r = []);
    const a = T.useMemo(() => n || arguments.length == 3 ? eB() : void 0, []),
        i = T.useRef(0),
        s = dw(),
        o = T.useMemo(() => ({
            ctrls: [],
            queue: [],
            flush(A, m) {
                const R = pm(A, m);
                return i.current > 0 && !o.queue.length && !Object.keys(R).some(x => !A.springs[x]) ? vc(A, m) : new Promise(x => {
                    Ow(A, R), o.queue.push(() => {
                        x(vc(A, m))
                    }), s()
                })
            }
        }), []),
        u = T.useRef([...o.ctrls]),
        c = [],
        l = rm(e) || 0;
    T.useMemo(() => {
        Q(u.current.slice(e, l), A => {
            M5(A, a), A.stop(!0)
        }), u.current.length = e, f(l, e)
    }, [e]), T.useMemo(() => {
        f(0, Math.min(l, e))
    }, r);

    function f(A, m) {
        for (let R = A; R < m; R++) {
            const N = u.current[R] || (u.current[R] = new Q5(null, o.flush)),
                x = n ? n(R, N) : t[R];
            x && (c[R] = K5(x))
        }
    }
    const d = u.current.map((A, m) => pm(A, c[m])),
        h = T.useContext(Xs),
        p = rm(h),
        v = h !== p && U5(h);
    rf(() => {
        i.current++, o.ctrls = u.current;
        const {
            queue: A
        } = o;
        A.length && (o.queue = [], Q(A, m => m())), Q(u.current, (m, R) => {
            a == null || a.add(m), v && m.start({
                default: h
            });
            const N = c[R];
            N && (B5(m, N.ref), m.ref ? m.queue.push(N) : m.start(N))
        })
    }), hw(() => () => {
        Q(o.ctrls, A => A.stop(!0))
    });
    const y = d.map(A => ({
        ...A
    }));
    return a ? [y, a] : y
}

function h8(e, t) {
    const r = P.fun(e),
        [
            [n], a
        ] = tB(1, r ? e : [e], r ? t || [] : t);
    return r || arguments.length == 2 ? [n, a] : n
}
var Nw = class extends uf {
    constructor(e, t) {
        super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Kn(...t);
        const r = this._get(),
            n = fc(r);
        nf(this, n.create(r))
    }
    advance(e) {
        const t = this._get(),
            r = this.get();
        ct(t, r) || (Je(this).setValue(t), this._onChange(t, this.idle)), !this.idle && mm(this._active) && uu(this)
    }
    _get() {
        const e = P.arr(this.source) ? this.source.map(Fe) : je(Fe(this.source));
        return this.calc(...e)
    }
    _start() {
        this.idle && !mm(this._active) && (this.idle = !1, Q(Ks(this), e => {
            e.done = !1
        }), rt.skipAnimation ? (W.batchedUpdates(() => this.advance()), uu(this)) : qs.start(this))
    }
    _attach() {
        let e = 1;
        Q(je(this.source), t => {
            Qe(t) && wa(t, this), pc(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
        }), this.priority = e, this._start()
    }
    _detach() {
        Q(je(this.source), e => {
            Qe(e) && es(e, this)
        }), this._active.clear(), uu(this)
    }
    eventObserved(e) {
        e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = je(this.source).reduce((t, r) => Math.max(t, (pc(r) ? r.priority : 0) + 1), 0))
    }
};

function rB(e) {
    return e.idle !== !1
}

function mm(e) {
    return !e.size || Array.from(e).every(rB)
}

function uu(e) {
    e.idle || (e.idle = !0, Q(Ks(e), t => {
        t.done = !0
    }), Zi(e, {
        type: "idle",
        parent: e
    }))
}
var p8 = (e, ...t) => new Nw(e, t);
rt.assign({
    createStringInterpolator: E5,
    to: (e, t) => new Nw(e, t)
});
const xw = new Set,
    Oe = new WeakMap,
    Ur = new WeakMap,
    rr = new WeakMap,
    yc = new WeakMap,
    nB = new WeakMap,
    Mr = new WeakMap,
    ns = new WeakMap,
    En = new WeakSet;
let Pt, cf = 0,
    lf = 0;
const dt = "__aa_tgt",
    ta = "__aa_del",
    as = "__aa_new",
    aB = e => {
        const t = cB(e);
        t && t.forEach(r => lB(r))
    },
    iB = e => {
        e.forEach(t => {
            t.target === Pt && oB(), Oe.has(t.target) && dr(t.target)
        })
    };

function sB(e) {
    const t = yc.get(e);
    t == null || t.disconnect();
    let r = Oe.get(e),
        n = 0;
    const a = 5;
    r || (r = Br(e), Oe.set(e, r));
    const {
        offsetWidth: i,
        offsetHeight: s
    } = Pt, u = [r.top - a, i - (r.left + a + r.width), s - (r.top + a + r.height), r.left - a].map(l => `${-1*Math.floor(l)}px`).join(" "), c = new IntersectionObserver(() => {
        ++n > 1 && dr(e)
    }, {
        root: Pt,
        threshold: 1,
        rootMargin: u
    });
    c.observe(e), yc.set(e, c)
}

function dr(e) {
    clearTimeout(ns.get(e));
    const t = Ys(e),
        r = ra(t) ? 500 : t.duration;
    ns.set(e, setTimeout(async () => {
        const n = rr.get(e);
        try {
            await (n == null ? void 0 : n.finished), Oe.set(e, Br(e)), sB(e)
        } catch {}
    }, r))
}

function oB() {
    clearTimeout(ns.get(Pt)), ns.set(Pt, setTimeout(() => {
        xw.forEach(e => kw(e, t => Tw(() => dr(t))))
    }, 100))
}

function uB(e) {
    setTimeout(() => {
        nB.set(e, setInterval(() => Tw(dr.bind(null, e)), 2e3))
    }, Math.round(2e3 * Math.random()))
}

function Tw(e) {
    typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e())
}
let bc, $r;
typeof window < "u" && (Pt = document.documentElement, bc = new MutationObserver(aB), $r = new ResizeObserver(iB), window.addEventListener("scroll", () => {
    lf = window.scrollY, cf = window.scrollX
}), $r.observe(Pt));

function cB(e) {
    return e.reduce((n, a) => [...n, ...Array.from(a.addedNodes), ...Array.from(a.removedNodes)], []).every(n => n.nodeName === "#comment") ? !1 : e.reduce((n, a) => {
        if (n === !1) return !1;
        if (a.target instanceof Element) {
            if (cu(a.target), !n.has(a.target)) {
                n.add(a.target);
                for (let i = 0; i < a.target.children.length; i++) {
                    const s = a.target.children.item(i);
                    if (s) {
                        if (ta in s) return !1;
                        cu(a.target, s), n.add(s)
                    }
                }
            }
            if (a.removedNodes.length)
                for (let i = 0; i < a.removedNodes.length; i++) {
                    const s = a.removedNodes[i];
                    if (ta in s) return !1;
                    s instanceof Element && (n.add(s), cu(a.target, s), Ur.set(s, [a.previousSibling, a.nextSibling]))
                }
        }
        return n
    }, new Set)
}

function cu(e, t) {
    !t && !(dt in e) ? Object.defineProperty(e, dt, {
        value: e
    }) : t && !(dt in t) && Object.defineProperty(t, dt, {
        value: e
    })
}

function lB(e) {
    var t;
    const r = e.isConnected,
        n = Oe.has(e);
    r && Ur.has(e) && Ur.delete(e), rr.has(e) && ((t = rr.get(e)) === null || t === void 0 || t.cancel()), as in e ? gm(e) : n && r ? dB(e) : n && !r ? hB(e) : gm(e)
}

function Ye(e) {
    return Number(e.replace(/[^0-9.\-]/g, ""))
}

function fB(e) {
    let t = e.parentElement;
    for (; t;) {
        if (t.scrollLeft || t.scrollTop) return {
            x: t.scrollLeft,
            y: t.scrollTop
        };
        t = t.parentElement
    }
    return {
        x: 0,
        y: 0
    }
}

function Br(e) {
    const t = e.getBoundingClientRect(),
        {
            x: r,
            y: n
        } = fB(e);
    return {
        top: t.top + n,
        left: t.left + r,
        width: t.width,
        height: t.height
    }
}

function Iw(e, t, r) {
    let n = t.width,
        a = t.height,
        i = r.width,
        s = r.height;
    const o = getComputedStyle(e);
    if (o.getPropertyValue("box-sizing") === "content-box") {
        const c = Ye(o.paddingTop) + Ye(o.paddingBottom) + Ye(o.borderTopWidth) + Ye(o.borderBottomWidth),
            l = Ye(o.paddingLeft) + Ye(o.paddingRight) + Ye(o.borderRightWidth) + Ye(o.borderLeftWidth);
        n -= l, i -= l, a -= c, s -= c
    }
    return [n, i, a, s].map(Math.round)
}

function Ys(e) {
    return dt in e && Mr.has(e[dt]) ? Mr.get(e[dt]) : {
        duration: 250,
        easing: "ease-in-out"
    }
}

function Pw(e) {
    if (dt in e) return e[dt]
}

function ff(e) {
    const t = Pw(e);
    return t ? En.has(t) : !1
}

function kw(e, ...t) {
    t.forEach(r => r(e, Mr.has(e)));
    for (let r = 0; r < e.children.length; r++) {
        const n = e.children.item(r);
        n && t.forEach(a => a(n, Mr.has(n)))
    }
}

function df(e) {
    return Array.isArray(e) ? e : [e]
}

function ra(e) {
    return typeof e == "function"
}

function dB(e) {
    const t = Oe.get(e),
        r = Br(e);
    if (!ff(e)) return Oe.set(e, r);
    let n;
    if (!t) return;
    const a = Ys(e);
    if (typeof a != "function") {
        const i = t.left - r.left,
            s = t.top - r.top,
            [o, u, c, l] = Iw(e, t, r),
            f = {
                transform: `translate(${i}px, ${s}px)`
            },
            d = {
                transform: "translate(0, 0)"
            };
        o !== u && (f.width = `${o}px`, d.width = `${u}px`), c !== l && (f.height = `${c}px`, d.height = `${l}px`), n = e.animate([f, d], {
            duration: a.duration,
            easing: a.easing
        })
    } else {
        const [i] = df(a(e, "remain", t, r));
        n = new Animation(i), n.play()
    }
    rr.set(e, n), Oe.set(e, r), n.addEventListener("finish", dr.bind(null, e))
}

function gm(e) {
    as in e && delete e[as];
    const t = Br(e);
    Oe.set(e, t);
    const r = Ys(e);
    if (!ff(e)) return;
    let n;
    if (typeof r != "function") n = e.animate([{
        transform: "scale(.98)",
        opacity: 0
    }, {
        transform: "scale(0.98)",
        opacity: 0,
        offset: .5
    }, {
        transform: "scale(1)",
        opacity: 1
    }], {
        duration: r.duration * 1.5,
        easing: "ease-in"
    });
    else {
        const [a] = df(r(e, "add", t));
        n = new Animation(a), n.play()
    }
    rr.set(e, n), n.addEventListener("finish", dr.bind(null, e))
}

function vm(e, t) {
    var r;
    e.remove(), Oe.delete(e), Ur.delete(e), rr.delete(e), (r = yc.get(e)) === null || r === void 0 || r.disconnect(), setTimeout(() => {
        if (ta in e && delete e[ta], Object.defineProperty(e, as, {
                value: !0,
                configurable: !0
            }), t && e instanceof HTMLElement)
            for (const n in t) e.style[n] = ""
    }, 0)
}

function hB(e) {
    var t;
    if (!Ur.has(e) || !Oe.has(e)) return;
    const [r, n] = Ur.get(e);
    Object.defineProperty(e, ta, {
        value: !0,
        configurable: !0
    });
    const a = window.scrollX,
        i = window.scrollY;
    if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(e, n) : r && r.parentNode ? r.parentNode.appendChild(e) : (t = Pw(e)) === null || t === void 0 || t.appendChild(e), !ff(e)) return vm(e);
    const [s, o, u, c] = mB(e), l = Ys(e), f = Oe.get(e);
    (a !== cf || i !== lf) && pB(e, a, i, l);
    let d, h = {
        position: "absolute",
        top: `${s}px`,
        left: `${o}px`,
        width: `${u}px`,
        height: `${c}px`,
        margin: "0",
        pointerEvents: "none",
        transformOrigin: "center",
        zIndex: "100"
    };
    if (!ra(l)) Object.assign(e.style, h), d = e.animate([{
        transform: "scale(1)",
        opacity: 1
    }, {
        transform: "scale(.98)",
        opacity: 0
    }], {
        duration: l.duration,
        easing: "ease-out"
    });
    else {
        const [p, v] = df(l(e, "remove", f));
        (v == null ? void 0 : v.styleReset) !== !1 && (h = (v == null ? void 0 : v.styleReset) || h, Object.assign(e.style, h)), d = new Animation(p), d.play()
    }
    rr.set(e, d), d.addEventListener("finish", vm.bind(null, e, h))
}

function pB(e, t, r, n) {
    const a = cf - t,
        i = lf - r,
        s = document.documentElement.style.scrollBehavior;
    if (getComputedStyle(Pt).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + a, window.scrollY + i), !e.parentElement) return;
    const u = e.parentElement;
    let c = u.clientHeight,
        l = u.clientWidth;
    const f = performance.now();

    function d() {
        requestAnimationFrame(() => {
            if (!ra(n)) {
                const h = c - u.clientHeight,
                    p = l - u.clientWidth;
                f + n.duration > performance.now() ? (window.scrollTo({
                    left: window.scrollX - p,
                    top: window.scrollY - h
                }), c = u.clientHeight, l = u.clientWidth, d()) : document.documentElement.style.scrollBehavior = s
            }
        })
    }
    d()
}

function mB(e) {
    const t = Oe.get(e),
        [r, , n] = Iw(e, t, Br(e));
    let a = e.parentElement;
    for (; a && (getComputedStyle(a).position === "static" || a instanceof HTMLBodyElement);) a = a.parentElement;
    a || (a = document.body);
    const i = getComputedStyle(a),
        s = Oe.get(a) || Br(a),
        o = Math.round(t.top - s.top) - Ye(i.borderTopWidth),
        u = Math.round(t.left - s.left) - Ye(i.borderLeftWidth);
    return [o, u, r, n]
}

function gB(e, t = {}) {
    return bc && $r && (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !ra(t) && !t.disrespectUserMotionPreference || (En.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, {
        position: "relative"
    }), kw(e, dr, uB, a => $r == null ? void 0 : $r.observe(a)), ra(t) ? Mr.set(e, t) : Mr.set(e, {
        duration: 250,
        easing: "ease-in-out",
        ...t
    }), bc.observe(e, {
        childList: !0
    }), xw.add(e))), Object.freeze({
        parent: e,
        enable: () => {
            En.add(e)
        },
        disable: () => {
            En.delete(e)
        },
        isEnabled: () => En.has(e)
    })
}

function m8(e) {
    const [t, r] = T.useState(), n = T.useMemo(() => e, []), a = T.useCallback(s => {
        s instanceof HTMLElement ? r(gB(s, n)) : r(void 0)
    }, [n]), i = T.useCallback(s => {
        t && (s ? t.enable() : t.disable())
    }, [t]);
    return [a, i]
}
export {
    EB as $, e8 as A, i8 as B, Jv as C, Un as D, ey as E, s8 as F, o8 as G, rt as H, E5 as I, l8 as J, f8 as K, af as L, gt as M, fr as N, P as O, Qv as P, m5 as Q, QB as R, Q as S, Ei as T, Fe as U, Qe as V, wa as W, es as X, Zi as Y, je as Z, Op as _, z as a, SB as a0, $B as a1, DB as a2, FB as a3, AB as a4, LB as a5, q as a6, PB as a7, IB as a8, OB as a9, nI as aa, we as ab, qB as ac, t8 as ad, q3 as ae, n8 as af, r8 as ag, a8 as ah, c8 as ai, u8 as aj, h8 as ak, h5 as al, TB as am, xB as an, qF as ao, BB as ap, YB as aq, KB as ar, m8 as as, k4 as at, ZB as au, y3 as av, JB as aw, p8 as ax, Yt as b, kB as c, LI as d, Kr as e, NB as f, Pm as g, jB as h, ml as i, wB as j, UB as k, zB as l, VB as m, WB as n, Nb as o, r3 as p, Bs as q, T as r, MB as s, a3 as t, XB as u, Vl as v, GB as w, HB as x, bB as y, Ip as z
};
//# sourceMappingURL=vendor-CtbUqpA0.js.map