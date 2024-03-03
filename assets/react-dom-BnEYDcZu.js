var np = Object.defineProperty;
var rp = (e, t, n) => t in e ? np(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var ot = (e, t, n) => (rp(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
    c as Ce,
    g as lp
} from "./auth-72H9TcpW.js";
import {
    r as v,
    g as M,
    h as op,
    k as Ms,
    s as ip,
    m as up,
    _ as sp,
    n as ap,
    N as cp,
    o as fp,
    u as dp,
    p as pp,
    q as mp,
    t as hp,
    v as zs,
    w as vp,
    R as vc,
    x as gp,
    y as xi,
    z as As,
    A as yp,
    B as wp,
    F as Sp,
    G as Ep,
    H as kp,
    I as xp,
    J as Cp,
    K as Tp,
    L as Op,
    M as Pp,
    O as Tr,
    Q as Rp,
    S as Qn,
    U as js,
    V as Us,
    W as Np,
    X as Lp,
    Y as _p,
    Z as Fp
} from "./vendor-CtbUqpA0.js";
var vo = {},
    $p = Ce && Ce.__createBinding || (Object.create ? function(e, t, n, r) {
        r === void 0 && (r = n);
        var l = Object.getOwnPropertyDescriptor(t, n);
        (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) && (l = {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        }), Object.defineProperty(e, r, l)
    } : function(e, t, n, r) {
        r === void 0 && (r = n), e[r] = t[n]
    }),
    Ip = Ce && Ce.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    Dp = Ce && Ce.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (e != null)
            for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && $p(t, e, n);
        return Ip(t, e), t
    };
Object.defineProperty(vo, "__esModule", {
    value: !0
});
vo.useTurnstile = void 0;
const Qt = Dp(v),
    fr = typeof globalThis < "u" ? globalThis : window;
let Ot = typeof fr.turnstile < "u" ? "ready" : "unloaded",
    gc, Ci;
const yc = new Promise((e, t) => {
    Ci = {
        resolve: e,
        reject: t
    }, Ot === "ready" && e(void 0)
});
{
    const e = "cf__reactTurnstileOnLoad",
        t = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    gc = () => {
        if (Ot === "unloaded") {
            Ot = "loading", fr[e] = () => {
                Ci.resolve(), Ot = "ready", delete fr[e]
            };
            const n = `${t}?onload=${e}&render=explicit`,
                r = document.createElement("script");
            r.src = n, r.async = !0, r.addEventListener("error", () => {
                Ci.reject("Failed to load Turnstile."), delete fr[e]
            }), document.head.appendChild(r)
        }
        return yc
    }
}

function Mp({
    id: e,
    className: t,
    style: n,
    sitekey: r,
    action: l,
    cData: o,
    theme: i,
    language: u,
    tabIndex: s,
    responseField: a,
    responseFieldName: d,
    size: m,
    fixedSize: h,
    retry: y,
    retryInterval: g,
    refreshExpired: S,
    appearance: k,
    execution: f,
    userRef: c,
    onVerify: p,
    onLoad: w,
    onError: x,
    onExpire: E,
    onTimeout: O,
    onAfterInteractive: T,
    onBeforeInteractive: _,
    onUnsupported: R
}) {
    const W = (0, Qt.useRef)(null),
        L = (0, Qt.useState)({
            onVerify: p,
            onLoad: w,
            onError: x,
            onExpire: E,
            onTimeout: O,
            onAfterInteractive: T,
            onBeforeInteractive: _,
            onUnsupported: R
        })[0],
        oe = c ?? W;
    return (0, Qt.useEffect)(() => {
        if (!oe.current) return;
        let Ze = !1,
            U = "";
        return (async () => {
            var Bt, Te;
            if (Ot !== "ready") try {
                await gc()
            } catch (I) {
                (Bt = L.onError) === null || Bt === void 0 || Bt.call(L, I);
                return
            }
            if (Ze || !oe.current) return;
            let Oe;
            const Wn = {
                sitekey: r,
                action: l,
                cData: o,
                theme: i,
                language: u,
                tabindex: s,
                "response-field": a,
                "response-field-name": d,
                size: m,
                retry: y,
                "retry-interval": g,
                "refresh-expired": S,
                appearance: k,
                execution: f,
                callback: I => {
                    var Z;
                    return (Z = L.onVerify) === null || Z === void 0 ? void 0 : Z.call(L, I, Oe)
                },
                "error-callback": I => {
                    var Z;
                    return (Z = L.onError) === null || Z === void 0 ? void 0 : Z.call(L, I, Oe)
                },
                "expired-callback": I => {
                    var Z;
                    return (Z = L.onExpire) === null || Z === void 0 ? void 0 : Z.call(L, I, Oe)
                },
                "timeout-callback": () => {
                    var I;
                    return (I = L.onTimeout) === null || I === void 0 ? void 0 : I.call(L, Oe)
                },
                "after-interactive-callback": () => {
                    var I;
                    return (I = L.onAfterInteractive) === null || I === void 0 ? void 0 : I.call(L, Oe)
                },
                "before-interactive-callback": () => {
                    var I;
                    return (I = L.onBeforeInteractive) === null || I === void 0 ? void 0 : I.call(L, Oe)
                },
                "unsupported-callback": () => {
                    var I;
                    return (I = L.onUnsupported) === null || I === void 0 ? void 0 : I.call(L, Oe)
                }
            };
            U = window.turnstile.render(oe.current, Wn), Oe = zp(U), (Te = L.onLoad) === null || Te === void 0 || Te.call(L, U, Oe)
        })(), () => {
            Ze = !0, U && window.turnstile.remove(U)
        }
    }, [r, l, o, i, u, s, a, d, m, y, g, S, k, f]), (0, Qt.useEffect)(() => {
        L.onVerify = p, L.onLoad = w, L.onError = x, L.onExpire = E, L.onTimeout = O, L.onAfterInteractive = T, L.onBeforeInteractive = _, L.onUnsupported = R
    }, [p, w, x, E, O, T, _, R]), Qt.default.createElement("div", {
        ref: oe,
        id: e,
        className: t,
        style: h ? {
            ...n ?? {},
            width: m === "compact" ? "130px" : "300px",
            height: m === "compact" ? "120px" : "65px"
        } : n
    })
}
var qy = vo.default = Mp;

function zp(e) {
    return {
        execute: t => window.turnstile.execute(e, t),
        reset: () => window.turnstile.reset(e),
        getResponse: () => window.turnstile.getResponse(e),
        isExpired: () => window.turnstile.isExpired(e)
    }
}

function Ap() {
    const [e, t] = (0, Qt.useState)(Ot);
    return (0, Qt.useEffect)(() => {
        Ot !== "ready" && yc.then(() => t(Ot))
    }, []), fr.turnstile
}
vo.useTurnstile = Ap;
var wc = (e => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(wc || {}),
    Ao = {
        link: {
            rel: ["amphtml", "canonical", "alternate"]
        },
        script: {
            type: ["application/ld+json"]
        },
        meta: {
            charset: "",
            name: ["generator", "robots", "description"],
            property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
        }
    },
    Hs = Object.values(wc),
    _u = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    jp = Object.entries(_u).reduce((e, [t, n]) => (e[n] = t, e), {}),
    Ke = "data-rh",
    Cn = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate",
        PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
    },
    Tn = (e, t) => {
        for (let n = e.length - 1; n >= 0; n -= 1) {
            const r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
        }
        return null
    },
    Up = e => {
        let t = Tn(e, "title");
        const n = Tn(e, Cn.TITLE_TEMPLATE);
        if (Array.isArray(t) && (t = t.join("")), n && t) return n.replace(/%s/g, () => t);
        const r = Tn(e, Cn.DEFAULT_TITLE);
        return t || r || void 0
    },
    Hp = e => Tn(e, Cn.ON_CHANGE_CLIENT_STATE) || (() => {}),
    jo = (e, t) => t.filter(n => typeof n[e] < "u").map(n => n[e]).reduce((n, r) => ({
        ...n,
        ...r
    }), {}),
    bp = (e, t) => t.filter(n => typeof n.base < "u").map(n => n.base).reverse().reduce((n, r) => {
        if (!n.length) {
            const l = Object.keys(r);
            for (let o = 0; o < l.length; o += 1) {
                const u = l[o].toLowerCase();
                if (e.indexOf(u) !== -1 && r[u]) return n.concat(r)
            }
        }
        return n
    }, []),
    Bp = e => console && typeof console.warn == "function" && console.warn(e),
    Kn = (e, t, n) => {
        const r = {};
        return n.filter(l => Array.isArray(l[e]) ? !0 : (typeof l[e] < "u" && Bp(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`), !1)).map(l => l[e]).reverse().reduce((l, o) => {
            const i = {};
            o.filter(s => {
                let a;
                const d = Object.keys(s);
                for (let h = 0; h < d.length; h += 1) {
                    const y = d[h],
                        g = y.toLowerCase();
                    t.indexOf(g) !== -1 && !(a === "rel" && s[a].toLowerCase() === "canonical") && !(g === "rel" && s[g].toLowerCase() === "stylesheet") && (a = g), t.indexOf(y) !== -1 && (y === "innerHTML" || y === "cssText" || y === "itemprop") && (a = y)
                }
                if (!a || !s[a]) return !1;
                const m = s[a].toLowerCase();
                return r[a] || (r[a] = {}), i[a] || (i[a] = {}), r[a][m] ? !1 : (i[a][m] = !0, !0)
            }).reverse().forEach(s => l.push(s));
            const u = Object.keys(i);
            for (let s = 0; s < u.length; s += 1) {
                const a = u[s],
                    d = {
                        ...r[a],
                        ...i[a]
                    };
                r[a] = d
            }
            return l
        }, []).reverse()
    },
    Vp = (e, t) => {
        if (Array.isArray(e) && e.length) {
            for (let n = 0; n < e.length; n += 1)
                if (e[n][t]) return !0
        }
        return !1
    },
    Wp = e => ({
        baseTag: bp(["href"], e),
        bodyAttributes: jo("bodyAttributes", e),
        defer: Tn(e, Cn.DEFER),
        encode: Tn(e, Cn.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: jo("htmlAttributes", e),
        linkTags: Kn("link", ["rel", "href"], e),
        metaTags: Kn("meta", ["name", "charset", "http-equiv", "property", "itemprop"], e),
        noscriptTags: Kn("noscript", ["innerHTML"], e),
        onChangeClientState: Hp(e),
        scriptTags: Kn("script", ["src", "innerHTML"], e),
        styleTags: Kn("style", ["cssText"], e),
        title: Up(e),
        titleAttributes: jo("titleAttributes", e),
        prioritizeSeoTags: Vp(e, Cn.PRIORITIZE_SEO_TAGS)
    }),
    Sc = e => Array.isArray(e) ? e.join("") : e,
    Qp = (e, t) => {
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r += 1)
            if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
        return !1
    },
    Uo = (e, t) => Array.isArray(e) ? e.reduce((n, r) => (Qp(r, t) ? n.priority.push(r) : n.default.push(r), n), {
        priority: [],
        default: []
    }) : {
        default: e,
        priority: []
    },
    bs = (e, t) => ({
        ...e,
        [t]: void 0
    }),
    Kp = ["noscript", "script", "style"],
    Ti = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"),
    Ec = e => Object.keys(e).reduce((t, n) => {
        const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
        return t ? `${t} ${r}` : r
    }, ""),
    Gp = (e, t, n, r) => {
        const l = Ec(n),
            o = Sc(t);
        return l ? `<${e} ${Ke}="true" ${l}>${Ti(o,r)}</${e}>` : `<${e} ${Ke}="true">${Ti(o,r)}</${e}>`
    },
    Yp = (e, t, n = !0) => t.reduce((r, l) => {
        const o = l,
            i = Object.keys(o).filter(a => !(a === "innerHTML" || a === "cssText")).reduce((a, d) => {
                const m = typeof o[d] > "u" ? d : `${d}="${Ti(o[d],n)}"`;
                return a ? `${a} ${m}` : m
            }, ""),
            u = o.innerHTML || o.cssText || "",
            s = Kp.indexOf(e) === -1;
        return `${r}<${e} ${Ke}="true" ${i}${s?"/>":`>${u}</${e}>`}`
    }, ""),
    kc = (e, t = {}) => Object.keys(e).reduce((n, r) => {
        const l = _u[r];
        return n[l || r] = e[r], n
    }, t),
    Xp = (e, t, n) => {
        const r = {
                key: t,
                [Ke]: !0
            },
            l = kc(n, r);
        return [M.createElement("title", l, t)]
    },
    vl = (e, t) => t.map((n, r) => {
        const l = {
            key: r,
            [Ke]: !0
        };
        return Object.keys(n).forEach(o => {
            const u = _u[o] || o;
            if (u === "innerHTML" || u === "cssText") {
                const s = n.innerHTML || n.cssText;
                l.dangerouslySetInnerHTML = {
                    __html: s
                }
            } else l[u] = n[o]
        }), M.createElement(e, l)
    }),
    Me = (e, t, n = !0) => {
        switch (e) {
            case "title":
                return {
                    toComponent: () => Xp(e, t.title, t.titleAttributes), toString: () => Gp(e, t.title, t.titleAttributes, n)
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: () => kc(t), toString: () => Ec(t)
                };
            default:
                return {
                    toComponent: () => vl(e, t), toString: () => Yp(e, t, n)
                }
        }
    },
    Zp = ({
        metaTags: e,
        linkTags: t,
        scriptTags: n,
        encode: r
    }) => {
        const l = Uo(e, Ao.meta),
            o = Uo(t, Ao.link),
            i = Uo(n, Ao.script);
        return {
            priorityMethods: {
                toComponent: () => [...vl("meta", l.priority), ...vl("link", o.priority), ...vl("script", i.priority)],
                toString: () => `${Me("meta",l.priority,r)} ${Me("link",o.priority,r)} ${Me("script",i.priority,r)}`
            },
            metaTags: l.default,
            linkTags: o.default,
            scriptTags: i.default
        }
    },
    Jp = e => {
        const {
            baseTag: t,
            bodyAttributes: n,
            encode: r = !0,
            htmlAttributes: l,
            noscriptTags: o,
            styleTags: i,
            title: u = "",
            titleAttributes: s,
            prioritizeSeoTags: a
        } = e;
        let {
            linkTags: d,
            metaTags: m,
            scriptTags: h
        } = e, y = {
            toComponent: () => {},
            toString: () => ""
        };
        return a && ({
            priorityMethods: y,
            linkTags: d,
            metaTags: m,
            scriptTags: h
        } = Zp(e)), {
            priority: y,
            base: Me("base", t, r),
            bodyAttributes: Me("bodyAttributes", n, r),
            htmlAttributes: Me("htmlAttributes", l, r),
            link: Me("link", d, r),
            meta: Me("meta", m, r),
            noscript: Me("noscript", o, r),
            script: Me("script", h, r),
            style: Me("style", i, r),
            title: Me("title", {
                title: u,
                titleAttributes: s
            }, r)
        }
    },
    Oi = Jp,
    Xr = [],
    xc = !!(typeof window < "u" && window.document && window.document.createElement),
    Pi = class {
        constructor(e, t) {
            ot(this, "instances", []);
            ot(this, "canUseDOM", xc);
            ot(this, "context");
            ot(this, "value", {
                setHelmet: e => {
                    this.context.helmet = e
                },
                helmetInstances: {
                    get: () => this.canUseDOM ? Xr : this.instances,
                    add: e => {
                        (this.canUseDOM ? Xr : this.instances).push(e)
                    },
                    remove: e => {
                        const t = (this.canUseDOM ? Xr : this.instances).indexOf(e);
                        (this.canUseDOM ? Xr : this.instances).splice(t, 1)
                    }
                }
            });
            this.context = e, this.canUseDOM = t || !1, t || (e.helmet = Oi({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            }))
        }
    },
    qp = {},
    Cc = M.createContext(qp),
    Fn, em = (Fn = class extends v.Component {
        constructor(n) {
            super(n);
            ot(this, "helmetData");
            this.helmetData = new Pi(this.props.context || {}, Fn.canUseDOM)
        }
        render() {
            return M.createElement(Cc.Provider, {
                value: this.helmetData.value
            }, this.props.children)
        }
    }, ot(Fn, "canUseDOM", xc), Fn),
    an = (e, t) => {
        const n = document.head || document.querySelector("head"),
            r = n.querySelectorAll(`${e}[${Ke}]`),
            l = [].slice.call(r),
            o = [];
        let i;
        return t && t.length && t.forEach(u => {
            const s = document.createElement(e);
            for (const a in u)
                if (Object.prototype.hasOwnProperty.call(u, a))
                    if (a === "innerHTML") s.innerHTML = u.innerHTML;
                    else if (a === "cssText") s.styleSheet ? s.styleSheet.cssText = u.cssText : s.appendChild(document.createTextNode(u.cssText));
            else {
                const d = a,
                    m = typeof u[d] > "u" ? "" : u[d];
                s.setAttribute(a, m)
            }
            s.setAttribute(Ke, "true"), l.some((a, d) => (i = d, s.isEqualNode(a))) ? l.splice(i, 1) : o.push(s)
        }), l.forEach(u => {
            var s;
            return (s = u.parentNode) == null ? void 0 : s.removeChild(u)
        }), o.forEach(u => n.appendChild(u)), {
            oldTags: l,
            newTags: o
        }
    },
    Ri = (e, t) => {
        const n = document.getElementsByTagName(e)[0];
        if (!n) return;
        const r = n.getAttribute(Ke),
            l = r ? r.split(",") : [],
            o = [...l],
            i = Object.keys(t);
        for (const u of i) {
            const s = t[u] || "";
            n.getAttribute(u) !== s && n.setAttribute(u, s), l.indexOf(u) === -1 && l.push(u);
            const a = o.indexOf(u);
            a !== -1 && o.splice(a, 1)
        }
        for (let u = o.length - 1; u >= 0; u -= 1) n.removeAttribute(o[u]);
        l.length === o.length ? n.removeAttribute(Ke) : n.getAttribute(Ke) !== i.join(",") && n.setAttribute(Ke, i.join(","))
    },
    tm = (e, t) => {
        typeof e < "u" && document.title !== e && (document.title = Sc(e)), Ri("title", t)
    },
    Bs = (e, t) => {
        const {
            baseTag: n,
            bodyAttributes: r,
            htmlAttributes: l,
            linkTags: o,
            metaTags: i,
            noscriptTags: u,
            onChangeClientState: s,
            scriptTags: a,
            styleTags: d,
            title: m,
            titleAttributes: h
        } = e;
        Ri("body", r), Ri("html", l), tm(m, h);
        const y = {
                baseTag: an("base", n),
                linkTags: an("link", o),
                metaTags: an("meta", i),
                noscriptTags: an("noscript", u),
                scriptTags: an("script", a),
                styleTags: an("style", d)
            },
            g = {},
            S = {};
        Object.keys(y).forEach(k => {
            const {
                newTags: f,
                oldTags: c
            } = y[k];
            f.length && (g[k] = f), c.length && (S[k] = y[k].oldTags)
        }), t && t(), s(e, g, S)
    },
    Gn = null,
    nm = e => {
        Gn && cancelAnimationFrame(Gn), e.defer ? Gn = requestAnimationFrame(() => {
            Bs(e, () => {
                Gn = null
            })
        }) : (Bs(e), Gn = null)
    },
    rm = nm,
    Vs = class extends v.Component {
        constructor() {
            super(...arguments);
            ot(this, "rendered", !1)
        }
        shouldComponentUpdate(t) {
            return !ip(t, this.props)
        }
        componentDidUpdate() {
            this.emitChange()
        }
        componentWillUnmount() {
            const {
                helmetInstances: t
            } = this.props.context;
            t.remove(this), this.emitChange()
        }
        emitChange() {
            const {
                helmetInstances: t,
                setHelmet: n
            } = this.props.context;
            let r = null;
            const l = Wp(t.get().map(o => {
                const i = {
                    ...o.props
                };
                return delete i.context, i
            }));
            em.canUseDOM ? rm(l) : Oi && (r = Oi(l)), n(r)
        }
        init() {
            if (this.rendered) return;
            this.rendered = !0;
            const {
                helmetInstances: t
            } = this.props.context;
            t.add(this), this.emitChange()
        }
        render() {
            return this.init(), null
        }
    },
    ki, e0 = (ki = class extends v.Component {
        shouldComponentUpdate(e) {
            return !op(bs(this.props, "helmetData"), bs(e, "helmetData"))
        }
        mapNestedChildrenToProps(e, t) {
            if (!t) return null;
            switch (e.type) {
                case "script":
                case "noscript":
                    return {
                        innerHTML: t
                    };
                case "style":
                    return {
                        cssText: t
                    };
                default:
                    throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
            }
        }
        flattenArrayTypeChildren(e, t, n, r) {
            return {
                ...t,
                [e.type]: [...t[e.type] || [], {
                    ...n,
                    ...this.mapNestedChildrenToProps(e, r)
                }]
            }
        }
        mapObjectTypeChildren(e, t, n, r) {
            switch (e.type) {
                case "title":
                    return {
                        ...t, [e.type]: r, titleAttributes: {
                            ...n
                        }
                    };
                case "body":
                    return {
                        ...t, bodyAttributes: {
                            ...n
                        }
                    };
                case "html":
                    return {
                        ...t, htmlAttributes: {
                            ...n
                        }
                    };
                default:
                    return {
                        ...t, [e.type]: {
                            ...n
                        }
                    }
            }
        }
        mapArrayTypeChildrenToProps(e, t) {
            let n = {
                ...t
            };
            return Object.keys(e).forEach(r => {
                n = {
                    ...n,
                    [r]: e[r]
                }
            }), n
        }
        warnOnInvalidChildren(e, t) {
            return Ms(Hs.some(n => e.type === n), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Hs.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`), Ms(!t || typeof t == "string" || Array.isArray(t) && !t.some(n => typeof n != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`), !0
        }
        mapChildrenToProps(e, t) {
            let n = {};
            return M.Children.forEach(e, r => {
                if (!r || !r.props) return;
                const {
                    children: l,
                    ...o
                } = r.props, i = Object.keys(o).reduce((s, a) => (s[jp[a] || a] = o[a], s), {});
                let {
                    type: u
                } = r;
                switch (typeof u == "symbol" ? u = u.toString() : this.warnOnInvalidChildren(r, l), u) {
                    case "Symbol(react.fragment)":
                        t = this.mapChildrenToProps(l, t);
                        break;
                    case "link":
                    case "meta":
                    case "noscript":
                    case "script":
                    case "style":
                        n = this.flattenArrayTypeChildren(r, n, i, l);
                        break;
                    default:
                        t = this.mapObjectTypeChildren(r, t, i, l);
                        break
                }
            }), this.mapArrayTypeChildrenToProps(n, t)
        }
        render() {
            const {
                children: e,
                ...t
            } = this.props;
            let n = {
                    ...t
                },
                {
                    helmetData: r
                } = t;
            if (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof Pi)) {
                const l = r;
                r = new Pi(l.context, !0), delete n.helmetData
            }
            return r ? M.createElement(Vs, {
                ...n,
                context: r.value
            }) : M.createElement(Cc.Consumer, null, l => M.createElement(Vs, {
                ...n,
                context: l
            }))
        }
    }, ot(ki, "defaultProps", {
        defer: !0,
        encodeSpecialCharacters: !0,
        prioritizeSeoTags: !1
    }), ki);

function gl() {
    if (console && console.warn) {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t)
    }
}
const Ws = {};

function Al() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == "string" && Ws[t[0]] || (typeof t[0] == "string" && (Ws[t[0]] = new Date), gl(...t))
}
const Tc = (e, t) => () => {
    if (e.isInitialized) t();
    else {
        const n = () => {
            setTimeout(() => {
                e.off("initialized", n)
            }, 0), t()
        };
        e.on("initialized", n)
    }
};

function Qs(e, t, n) {
    e.loadNamespaces(t, Tc(e, n))
}

function Ks(e, t, n, r) {
    typeof n == "string" && (n = [n]), n.forEach(l => {
        e.options.ns.indexOf(l) < 0 && e.options.ns.push(l)
    }), e.loadLanguages(t, Tc(e, r))
}

function lm(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
        l = t.options ? t.options.fallbackLng : !1,
        o = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const i = (u, s) => {
        const a = t.services.backendConnector.state[`${u}|${s}`];
        return a === -1 || a === 2
    };
    return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || i(r, e) && (!l || i(o, e)))
}

function om(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length ? (Al("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
        lng: n.lng,
        precheck: (l, o) => {
            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && l.services.backendConnector.backend && l.isLanguageChangingTo && !o(l.isLanguageChangingTo, e)) return !1
        }
    }) : lm(e, t, n)
}
const im = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    um = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    sm = e => um[e],
    am = e => e.replace(im, sm);
let Ni = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: am
};

function cm() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ni = {
        ...Ni,
        ...e
    }
}

function Oc() {
    return Ni
}
let Pc;

function fm(e) {
    Pc = e
}

function Fu() {
    return Pc
}

function Ho(e, t) {
    if (!e) return !1;
    const n = e.props ? e.props.children : e.children;
    return t ? n.length > 0 : !!n
}

function bo(e) {
    if (!e) return [];
    const t = e.props ? e.props.children : e.children;
    return e.props && e.props.i18nIsDynamicList ? fn(t) : t
}

function dm(e) {
    return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every(t => v.isValidElement(t))
}

function fn(e) {
    return Array.isArray(e) ? e : [e]
}

function pm(e, t) {
    const n = {
        ...t
    };
    return n.props = Object.assign(e.props, t.props), n
}

function Rc(e, t) {
    if (!e) return "";
    let n = "";
    const r = fn(e),
        l = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
    return r.forEach((o, i) => {
        if (typeof o == "string") n += `${o}`;
        else if (v.isValidElement(o)) {
            const u = Object.keys(o.props).length,
                s = l.indexOf(o.type) > -1,
                a = o.props.children;
            if (!a && s && u === 0) n += `<${o.type}/>`;
            else if (!a && (!s || u !== 0)) n += `<${i}></${i}>`;
            else if (o.props.i18nIsDynamicList) n += `<${i}></${i}>`;
            else if (s && u === 1 && typeof a == "string") n += `<${o.type}>${a}</${o.type}>`;
            else {
                const d = Rc(a, t);
                n += `<${i}>${d}</${i}>`
            }
        } else if (o === null) gl("Trans: the passed in value is invalid - seems you passed in a null child.");
        else if (typeof o == "object") {
            const {
                format: u,
                ...s
            } = o, a = Object.keys(s);
            if (a.length === 1) {
                const d = u ? `${a[0]}, ${u}` : a[0];
                n += `{{${d}}}`
            } else gl("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o)
        } else gl("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o)
    }), n
}

function mm(e, t, n, r, l, o) {
    if (t === "") return [];
    const i = r.transKeepBasicHtmlNodesFor || [],
        u = t && new RegExp(i.map(k => `<${k}`).join("|")).test(t);
    if (!e && !u && !o) return [t];
    const s = {};

    function a(k) {
        fn(k).forEach(c => {
            typeof c != "string" && (Ho(c) ? a(bo(c)) : typeof c == "object" && !v.isValidElement(c) && Object.assign(s, c))
        })
    }
    a(e);
    const d = up.parse(`<0>${t}</0>`),
        m = {
            ...s,
            ...l
        };

    function h(k, f, c) {
        const p = bo(k),
            w = g(p, f.children, c);
        return dm(p) && w.length === 0 || k.props && k.props.i18nIsDynamicList ? p : w
    }

    function y(k, f, c, p, w) {
        k.dummy ? (k.children = f, c.push(v.cloneElement(k, {
            key: p
        }, w ? void 0 : f))) : c.push(...v.Children.map([k], x => {
            const E = {
                ...x.props
            };
            return delete E.i18nIsDynamicList, M.createElement(x.type, sp({}, E, {
                key: p,
                ref: x.ref
            }, w ? {} : {
                children: f
            }))
        }))
    }

    function g(k, f, c) {
        const p = fn(k);
        return fn(f).reduce((x, E, O) => {
            const T = E.children && E.children[0] && E.children[0].content && n.services.interpolator.interpolate(E.children[0].content, m, n.language);
            if (E.type === "tag") {
                let _ = p[parseInt(E.name, 10)];
                c.length === 1 && !_ && (_ = c[0][E.name]), _ || (_ = {});
                const R = Object.keys(E.attrs).length !== 0 ? pm({
                        props: E.attrs
                    }, _) : _,
                    W = v.isValidElement(R),
                    L = W && Ho(E, !0) && !E.voidElement,
                    oe = u && typeof R == "object" && R.dummy && !W,
                    Ze = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, E.name);
                if (typeof R == "string") {
                    const U = n.services.interpolator.interpolate(R, m, n.language);
                    x.push(U)
                } else if (Ho(R) || L) {
                    const U = h(R, E, c);
                    y(R, U, x, O)
                } else if (oe) {
                    const U = g(p, E.children, c);
                    y(R, U, x, O)
                } else if (Number.isNaN(parseFloat(E.name)))
                    if (Ze) {
                        const U = h(R, E, c);
                        y(R, U, x, O, E.voidElement)
                    } else if (r.transSupportBasicHtmlNodes && i.indexOf(E.name) > -1)
                    if (E.voidElement) x.push(v.createElement(E.name, {
                        key: `${E.name}-${O}`
                    }));
                    else {
                        const U = g(p, E.children, c);
                        x.push(v.createElement(E.name, {
                            key: `${E.name}-${O}`
                        }, U))
                    }
                else if (E.voidElement) x.push(`<${E.name} />`);
                else {
                    const U = g(p, E.children, c);
                    x.push(`<${E.name}>${U}</${E.name}>`)
                } else if (typeof R == "object" && !W) {
                    const U = E.children[0] ? T : null;
                    U && x.push(U)
                } else y(R, T, x, O, E.children.length !== 1 || !T)
            } else if (E.type === "text") {
                const _ = r.transWrapTextNodes,
                    R = o ? r.unescape(n.services.interpolator.interpolate(E.content, m, n.language)) : n.services.interpolator.interpolate(E.content, m, n.language);
                _ ? x.push(v.createElement(_, {
                    key: `${E.name}-${O}`
                }, R)) : x.push(R)
            }
            return x
        }, [])
    }
    const S = g([{
        dummy: !0,
        children: e || []
    }], d, fn(e || []));
    return bo(S[0])
}

function hm(e) {
    let {
        children: t,
        count: n,
        parent: r,
        i18nKey: l,
        context: o,
        tOptions: i = {},
        values: u,
        defaults: s,
        components: a,
        ns: d,
        i18n: m,
        t: h,
        shouldUnescape: y,
        ...g
    } = e;
    const S = m || Fu();
    if (!S) return Al("You will need to pass in an i18next instance by using i18nextReactModule"), t;
    const k = h || S.t.bind(S) || (L => L);
    o && (i.context = o);
    const f = {
        ...Oc(),
        ...S.options && S.options.react
    };
    let c = d || k.ns || S.options && S.options.defaultNS;
    c = typeof c == "string" ? [c] : c || ["translation"];
    const p = Rc(t, f),
        w = s || p || f.transEmptyNodeValue || l,
        {
            hashTransKey: x
        } = f,
        E = l || (x ? x(p || w) : p || w);
    S.options && S.options.interpolation && S.options.interpolation.defaultVariables && (u = u && Object.keys(u).length > 0 ? {
        ...u,
        ...S.options.interpolation.defaultVariables
    } : {
        ...S.options.interpolation.defaultVariables
    });
    const O = u ? i.interpolation : {
            interpolation: {
                ...i.interpolation,
                prefix: "#$?",
                suffix: "?$#"
            }
        },
        T = {
            ...i,
            count: n,
            ...u,
            ...O,
            defaultValue: w,
            ns: c
        },
        _ = E ? k(E, T) : w;
    a && Object.keys(a).forEach(L => {
        const oe = a[L];
        if (typeof oe.type == "function" || !oe.props || !oe.props.children || _.indexOf(`${L}/>`) < 0 && _.indexOf(`${L} />`) < 0) return;

        function Ze() {
            return M.createElement(M.Fragment, null, oe)
        }
        a[L] = M.createElement(Ze, null)
    });
    const R = mm(a || t, _, S, f, T, y),
        W = r !== void 0 ? r : f.defaultTransParent;
    return W ? v.createElement(W, g, R) : R
}
const t0 = {
        type: "3rdParty",
        init(e) {
            cm(e.options.react), fm(e)
        }
    },
    Nc = v.createContext();
class vm {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(t) {
        t.forEach(n => {
            this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
        })
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}

function n0(e) {
    let {
        children: t,
        count: n,
        parent: r,
        i18nKey: l,
        context: o,
        tOptions: i = {},
        values: u,
        defaults: s,
        components: a,
        ns: d,
        i18n: m,
        t: h,
        shouldUnescape: y,
        ...g
    } = e;
    const {
        i18n: S,
        defaultNS: k
    } = v.useContext(Nc) || {}, f = m || S || Fu(), c = h || f && f.t.bind(f);
    return hm({
        children: t,
        count: n,
        parent: r,
        i18nKey: l,
        context: o,
        tOptions: i,
        values: u,
        defaults: s,
        components: a,
        ns: d || c && c.ns || k || f && f.options && f.options.defaultNS,
        i18n: f,
        t: h,
        shouldUnescape: y,
        ...g
    })
}
const gm = (e, t) => {
    const n = v.useRef();
    return v.useEffect(() => {
        n.current = t ? n.current : e
    }, [e, t]), n.current
};

function r0(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {
        i18n: n
    } = t, {
        i18n: r,
        defaultNS: l
    } = v.useContext(Nc) || {}, o = n || r || Fu();
    if (o && !o.reportNamespaces && (o.reportNamespaces = new vm), !o) {
        Al("You will need to pass in an i18next instance by using initReactI18next");
        const p = (x, E) => typeof E == "string" ? E : E && typeof E == "object" && typeof E.defaultValue == "string" ? E.defaultValue : Array.isArray(x) ? x[x.length - 1] : x,
            w = [p, {}, !1];
        return w.t = p, w.i18n = {}, w.ready = !1, w
    }
    o.options.react && o.options.react.wait !== void 0 && Al("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const i = {
            ...Oc(),
            ...o.options.react,
            ...t
        },
        {
            useSuspense: u,
            keyPrefix: s
        } = i;
    let a = e || l || o.options && o.options.defaultNS;
    a = typeof a == "string" ? [a] : a || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(a);
    const d = (o.isInitialized || o.initializedStoreOnce) && a.every(p => om(p, o, i));

    function m() {
        return o.getFixedT(t.lng || null, i.nsMode === "fallback" ? a : a[0], s)
    }
    const [h, y] = v.useState(m);
    let g = a.join();
    t.lng && (g = `${t.lng}${g}`);
    const S = gm(g),
        k = v.useRef(!0);
    v.useEffect(() => {
        const {
            bindI18n: p,
            bindI18nStore: w
        } = i;
        k.current = !0, !d && !u && (t.lng ? Ks(o, t.lng, a, () => {
            k.current && y(m)
        }) : Qs(o, a, () => {
            k.current && y(m)
        })), d && S && S !== g && k.current && y(m);

        function x() {
            k.current && y(m)
        }
        return p && o && o.on(p, x), w && o && o.store.on(w, x), () => {
            k.current = !1, p && o && p.split(" ").forEach(E => o.off(E, x)), w && o && w.split(" ").forEach(E => o.store.off(E, x))
        }
    }, [o, g]);
    const f = v.useRef(!0);
    v.useEffect(() => {
        k.current && !f.current && y(m), f.current = !1
    }, [o, s]);
    const c = [h, o, d];
    if (c.t = h, c.i18n = o, c.ready = d, d || !d && !u) return c;
    throw new Promise(p => {
        t.lng ? Ks(o, t.lng, a, () => p()) : Qs(o, a, () => p())
    })
}
var Lc = {
        exports: {}
    },
    Ie = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c = v,
    Fe = ap;

function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Fc = new Set,
    Or = {};

function ln(e, t) {
    $n(e, t), $n(e + "Capture", t)
}

function $n(e, t) {
    for (Or[e] = t, e = 0; e < t.length; e++) Fc.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Li = Object.prototype.hasOwnProperty,
    ym = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gs = {},
    Ys = {};

function wm(e) {
    return Li.call(Ys, e) ? !0 : Li.call(Gs, e) ? !1 : ym.test(e) ? Ys[e] = !0 : (Gs[e] = !0, !1)
}

function Sm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Em(e, t, n, r) {
    if (t === null || typeof t > "u" || Sm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ge(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ae[e] = new ge(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ae[t] = new ge(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ae[e] = new ge(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ae[e] = new ge(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ae[e] = new ge(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ae[e] = new ge(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var $u = /[\-:]([a-z])/g;

function Iu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace($u, Iu);
    ae[t] = new ge(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($u, Iu);
    ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($u, Iu);
    ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ae.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Du(e, t, n, r) {
    var l = ae.hasOwnProperty(t) ? ae[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Em(t, n, l, r) && (n = null), r || l === null ? wm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ht = _c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Zr = Symbol.for("react.element"),
    dn = Symbol.for("react.portal"),
    pn = Symbol.for("react.fragment"),
    Mu = Symbol.for("react.strict_mode"),
    _i = Symbol.for("react.profiler"),
    $c = Symbol.for("react.provider"),
    Ic = Symbol.for("react.context"),
    zu = Symbol.for("react.forward_ref"),
    Fi = Symbol.for("react.suspense"),
    $i = Symbol.for("react.suspense_list"),
    Au = Symbol.for("react.memo"),
    wt = Symbol.for("react.lazy"),
    Dc = Symbol.for("react.offscreen"),
    Xs = Symbol.iterator;

function Yn(e) {
    return e === null || typeof e != "object" ? null : (e = Xs && e[Xs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
    Bo;

function ir(e) {
    if (Bo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Bo = t && t[1] || ""
    }
    return `
` + Bo + e
}
var Vo = !1;

function Wo(e, t) {
    if (!e || Vo) return "";
    Vo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== o[u]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            } while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        Vo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ir(e) : ""
}

function km(e) {
    switch (e.tag) {
        case 5:
            return ir(e.type);
        case 16:
            return ir("Lazy");
        case 13:
            return ir("Suspense");
        case 19:
            return ir("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Wo(e.type, !1), e;
        case 11:
            return e = Wo(e.type.render, !1), e;
        case 1:
            return e = Wo(e.type, !0), e;
        default:
            return ""
    }
}

function Ii(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case pn:
            return "Fragment";
        case dn:
            return "Portal";
        case _i:
            return "Profiler";
        case Mu:
            return "StrictMode";
        case Fi:
            return "Suspense";
        case $i:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ic:
            return (e.displayName || "Context") + ".Consumer";
        case $c:
            return (e._context.displayName || "Context") + ".Provider";
        case zu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Au:
            return t = e.displayName || null, t !== null ? t : Ii(e.type) || "Memo";
        case wt:
            t = e._payload, e = e._init;
            try {
                return Ii(e(t))
            } catch {}
    }
    return null
}

function xm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ii(t);
        case 8:
            return t === Mu ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Mt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Mc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Cm(e) {
    var t = Mc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Jr(e) {
    e._valueTracker || (e._valueTracker = Cm(e))
}

function zc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function jl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Di(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Zs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Mt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Ac(e, t) {
    t = t.checked, t != null && Du(e, "checked", t, !1)
}

function Mi(e, t) {
    Ac(e, t);
    var n = Mt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && zi(e, t.type, Mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Js(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function zi(e, t, n) {
    (t !== "number" || jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ur = Array.isArray;

function On(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Mt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Ai(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function qs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(C(92));
            if (ur(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Mt(n)
    }
}

function jc(e, t) {
    var n = Mt(t.value),
        r = Mt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ea(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Uc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ji(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var qr, Hc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (qr = qr || document.createElement("div"), qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = qr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Pr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var dr = {
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
    },
    Tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
    Tm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e]
    })
});

function bc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px"
}

function Bc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = bc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Om = G({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ui(e, t) {
    if (t) {
        if (Om[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(C(62))
    }
}

function Hi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
            return !0
    }
}
var bi = null;

function ju(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Bi = null,
    Pn = null,
    Rn = null;

function ta(e) {
    if (e = Wr(e)) {
        if (typeof Bi != "function") throw Error(C(280));
        var t = e.stateNode;
        t && (t = Eo(t), Bi(e.stateNode, e.type, t))
    }
}

function Vc(e) {
    Pn ? Rn ? Rn.push(e) : Rn = [e] : Pn = e
}

function Wc() {
    if (Pn) {
        var e = Pn,
            t = Rn;
        if (Rn = Pn = null, ta(e), t)
            for (e = 0; e < t.length; e++) ta(t[e])
    }
}

function Qc(e, t) {
    return e(t)
}

function Kc() {}
var Qo = !1;

function Gc(e, t, n) {
    if (Qo) return e(t, n);
    Qo = !0;
    try {
        return Qc(e, t, n)
    } finally {
        Qo = !1, (Pn !== null || Rn !== null) && (Kc(), Wc())
    }
}

function Rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Eo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n
}
var Vi = !1;
if (ft) try {
    var Xn = {};
    Object.defineProperty(Xn, "passive", {
        get: function() {
            Vi = !0
        }
    }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn)
} catch {
    Vi = !1
}

function Pm(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (d) {
        this.onError(d)
    }
}
var pr = !1,
    Ul = null,
    Hl = !1,
    Wi = null,
    Rm = {
        onError: function(e) {
            pr = !0, Ul = e
        }
    };

function Nm(e, t, n, r, l, o, i, u, s) {
    pr = !1, Ul = null, Pm.apply(Rm, arguments)
}

function Lm(e, t, n, r, l, o, i, u, s) {
    if (Nm.apply(this, arguments), pr) {
        if (pr) {
            var a = Ul;
            pr = !1, Ul = null
        } else throw Error(C(198));
        Hl || (Hl = !0, Wi = a)
    }
}

function on(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Yc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function na(e) {
    if (on(e) !== e) throw Error(C(188))
}

function _m(e) {
    var t = e.alternate;
    if (!t) {
        if (t = on(e), t === null) throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return na(l), e;
                if (o === r) return na(l), t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(C(189))
            }
        }
        if (n.alternate !== r) throw Error(C(190))
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t
}

function Xc(e) {
    return e = _m(e), e !== null ? Zc(e) : null
}

function Zc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Zc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Jc = Fe.unstable_scheduleCallback,
    ra = Fe.unstable_cancelCallback,
    Fm = Fe.unstable_shouldYield,
    $m = Fe.unstable_requestPaint,
    X = Fe.unstable_now,
    Im = Fe.unstable_getCurrentPriorityLevel,
    Uu = Fe.unstable_ImmediatePriority,
    qc = Fe.unstable_UserBlockingPriority,
    bl = Fe.unstable_NormalPriority,
    Dm = Fe.unstable_LowPriority,
    ef = Fe.unstable_IdlePriority,
    go = null,
    nt = null;

function Mm(e) {
    if (nt && typeof nt.onCommitFiberRoot == "function") try {
        nt.onCommitFiberRoot(go, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : jm,
    zm = Math.log,
    Am = Math.LN2;

function jm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zm(e) / Am | 0) | 0
}
var el = 64,
    tl = 4194304;

function sr(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Bl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = sr(u) : (o &= i, o !== 0 && (r = sr(o)))
    } else i = n & ~l, i !== 0 ? r = sr(i) : o !== 0 && (r = sr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ge(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Um(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
            return -1
    }
}

function Hm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Ge(o),
            u = 1 << i,
            s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = Um(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function Qi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function tf() {
    var e = el;
    return el <<= 1, !(el & 4194240) && (el = 64), e
}

function Ko(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Br(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ge(t), e[t] = n
}

function bm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Ge(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function Hu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ge(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var z = 0;

function nf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var rf, bu, lf, of, uf, Ki = !1,
    nl = [],
    Pt = null,
    Rt = null,
    Nt = null,
    Nr = new Map,
    Lr = new Map,
    Et = [],
    Bm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function la(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Pt = null;
            break;
        case "dragenter":
        case "dragleave":
            Rt = null;
            break;
        case "mouseover":
        case "mouseout":
            Nt = null;
            break;
        case "pointerover":
        case "pointerout":
            Nr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Lr.delete(t.pointerId)
    }
}

function Zn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = Wr(t), t !== null && bu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Vm(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Pt = Zn(Pt, e, t, n, r, l), !0;
        case "dragenter":
            return Rt = Zn(Rt, e, t, n, r, l), !0;
        case "mouseover":
            return Nt = Zn(Nt, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Nr.set(o, Zn(Nr.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Lr.set(o, Zn(Lr.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function sf(e) {
    var t = Kt(e.target);
    if (t !== null) {
        var n = on(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Yc(n), t !== null) {
                    e.blockedOn = t, uf(e.priority, function() {
                        lf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function yl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            bi = r, n.target.dispatchEvent(r), bi = null
        } else return t = Wr(n), t !== null && bu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function oa(e, t, n) {
    yl(e) && n.delete(t)
}

function Wm() {
    Ki = !1, Pt !== null && yl(Pt) && (Pt = null), Rt !== null && yl(Rt) && (Rt = null), Nt !== null && yl(Nt) && (Nt = null), Nr.forEach(oa), Lr.forEach(oa)
}

function Jn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ki || (Ki = !0, Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Wm)))
}

function _r(e) {
    function t(l) {
        return Jn(l, e)
    }
    if (0 < nl.length) {
        Jn(nl[0], e);
        for (var n = 1; n < nl.length; n++) {
            var r = nl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Pt !== null && Jn(Pt, e), Rt !== null && Jn(Rt, e), Nt !== null && Jn(Nt, e), Nr.forEach(t), Lr.forEach(t), n = 0; n < Et.length; n++) r = Et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Et.length && (n = Et[0], n.blockedOn === null);) sf(n), n.blockedOn === null && Et.shift()
}
var Nn = ht.ReactCurrentBatchConfig,
    Vl = !0;

function Qm(e, t, n, r) {
    var l = z,
        o = Nn.transition;
    Nn.transition = null;
    try {
        z = 1, Bu(e, t, n, r)
    } finally {
        z = l, Nn.transition = o
    }
}

function Km(e, t, n, r) {
    var l = z,
        o = Nn.transition;
    Nn.transition = null;
    try {
        z = 4, Bu(e, t, n, r)
    } finally {
        z = l, Nn.transition = o
    }
}

function Bu(e, t, n, r) {
    if (Vl) {
        var l = Gi(e, t, n, r);
        if (l === null) ri(e, t, r, Wl, n), la(e, r);
        else if (Vm(l, e, t, n, r)) r.stopPropagation();
        else if (la(e, r), t & 4 && -1 < Bm.indexOf(e)) {
            for (; l !== null;) {
                var o = Wr(l);
                if (o !== null && rf(o), o = Gi(e, t, n, r), o === null && ri(e, t, r, Wl, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else ri(e, t, r, null, n)
    }
}
var Wl = null;

function Gi(e, t, n, r) {
    if (Wl = null, e = ju(r), e = Kt(e), e !== null)
        if (t = on(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Yc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Wl = e, null
}

function af(e) {
    switch (e) {
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
            switch (Im()) {
                case Uu:
                    return 1;
                case qc:
                    return 4;
                case bl:
                case Dm:
                    return 16;
                case ef:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var xt = null,
    Vu = null,
    wl = null;

function cf() {
    if (wl) return wl;
    var e, t = Vu,
        n = t.length,
        r, l = "value" in xt ? xt.value : xt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return wl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Sl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function rl() {
    return !0
}

function ia() {
    return !1
}

function De(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? rl : ia, this.isPropagationStopped = ia, this
    }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = rl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = rl)
        },
        persist: function() {},
        isPersistent: rl
    }), t
}
var Bn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Wu = De(Bn),
    Vr = G({}, Bn, {
        view: 0,
        detail: 0
    }),
    Gm = De(Vr),
    Go, Yo, qn, yo = G({}, Vr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Qu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (Go = e.screenX - qn.screenX, Yo = e.screenY - qn.screenY) : Yo = Go = 0, qn = e), Go)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Yo
        }
    }),
    ua = De(yo),
    Ym = G({}, yo, {
        dataTransfer: 0
    }),
    Xm = De(Ym),
    Zm = G({}, Vr, {
        relatedTarget: 0
    }),
    Xo = De(Zm),
    Jm = G({}, Bn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    qm = De(Jm),
    eh = G({}, Bn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    th = De(eh),
    nh = G({}, Bn, {
        data: 0
    }),
    sa = De(nh),
    rh = {
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
    },
    lh = {
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
    },
    oh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ih(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = oh[e]) ? !!t[e] : !1
}

function Qu() {
    return ih
}
var uh = G({}, Vr, {
        key: function(e) {
            if (e.key) {
                var t = rh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Qu,
        charCode: function(e) {
            return e.type === "keypress" ? Sl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    sh = De(uh),
    ah = G({}, yo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    aa = De(ah),
    ch = G({}, Vr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Qu
    }),
    fh = De(ch),
    dh = G({}, Bn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ph = De(dh),
    mh = G({}, yo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    hh = De(mh),
    vh = [9, 13, 27, 32],
    Ku = ft && "CompositionEvent" in window,
    mr = null;
ft && "documentMode" in document && (mr = document.documentMode);
var gh = ft && "TextEvent" in window && !mr,
    ff = ft && (!Ku || mr && 8 < mr && 11 >= mr),
    ca = " ",
    fa = !1;

function df(e, t) {
    switch (e) {
        case "keyup":
            return vh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function pf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var mn = !1;

function yh(e, t) {
    switch (e) {
        case "compositionend":
            return pf(t);
        case "keypress":
            return t.which !== 32 ? null : (fa = !0, ca);
        case "textInput":
            return e = t.data, e === ca && fa ? null : e;
        default:
            return null
    }
}

function wh(e, t) {
    if (mn) return e === "compositionend" || !Ku && df(e, t) ? (e = cf(), wl = Vu = xt = null, mn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return ff && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Sh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sh[e.type] : t === "textarea"
}

function mf(e, t, n, r) {
    Vc(r), t = Ql(t, "onChange"), 0 < t.length && (n = new Wu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var hr = null,
    Fr = null;

function Eh(e) {
    Tf(e, 0)
}

function wo(e) {
    var t = gn(e);
    if (zc(t)) return e
}

function kh(e, t) {
    if (e === "change") return t
}
var hf = !1;
if (ft) {
    var Zo;
    if (ft) {
        var Jo = "oninput" in document;
        if (!Jo) {
            var pa = document.createElement("div");
            pa.setAttribute("oninput", "return;"), Jo = typeof pa.oninput == "function"
        }
        Zo = Jo
    } else Zo = !1;
    hf = Zo && (!document.documentMode || 9 < document.documentMode)
}

function ma() {
    hr && (hr.detachEvent("onpropertychange", vf), Fr = hr = null)
}

function vf(e) {
    if (e.propertyName === "value" && wo(Fr)) {
        var t = [];
        mf(t, Fr, e, ju(e)), Gc(Eh, t)
    }
}

function xh(e, t, n) {
    e === "focusin" ? (ma(), hr = t, Fr = n, hr.attachEvent("onpropertychange", vf)) : e === "focusout" && ma()
}

function Ch(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wo(Fr)
}

function Th(e, t) {
    if (e === "click") return wo(t)
}

function Oh(e, t) {
    if (e === "input" || e === "change") return wo(t)
}

function Ph(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Xe = typeof Object.is == "function" ? Object.is : Ph;

function $r(e, t) {
    if (Xe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Li.call(t, l) || !Xe(e[l], t[l])) return !1
    }
    return !0
}

function ha(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function va(e, t) {
    var n = ha(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ha(n)
    }
}

function gf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function yf() {
    for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = jl(e.document)
    }
    return t
}

function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Rh(e) {
    var t = yf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && gf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Gu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = va(n, o);
                var i = va(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Nh = ft && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    Yi = null,
    vr = null,
    Xi = !1;

function ga(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xi || hn == null || hn !== jl(r) || (r = hn, "selectionStart" in r && Gu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), vr && $r(vr, r) || (vr = r, r = Ql(Yi, "onSelect"), 0 < r.length && (t = new Wu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = hn)))
}

function ll(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var vn = {
        animationend: ll("Animation", "AnimationEnd"),
        animationiteration: ll("Animation", "AnimationIteration"),
        animationstart: ll("Animation", "AnimationStart"),
        transitionend: ll("Transition", "TransitionEnd")
    },
    qo = {},
    wf = {};
ft && (wf = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);

function So(e) {
    if (qo[e]) return qo[e];
    if (!vn[e]) return e;
    var t = vn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in wf) return qo[e] = t[n];
    return e
}
var Sf = So("animationend"),
    Ef = So("animationiteration"),
    kf = So("animationstart"),
    xf = So("transitionend"),
    Cf = new Map,
    ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function jt(e, t) {
    Cf.set(e, t), ln(t, [e])
}
for (var ei = 0; ei < ya.length; ei++) {
    var ti = ya[ei],
        Lh = ti.toLowerCase(),
        _h = ti[0].toUpperCase() + ti.slice(1);
    jt(Lh, "on" + _h)
}
jt(Sf, "onAnimationEnd");
jt(Ef, "onAnimationIteration");
jt(kf, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(xf, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));

function wa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Lm(r, t, void 0, e), e.currentTarget = null
}

function Tf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        s = u.instance,
                        a = u.currentTarget;
                    if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                    wa(l, u, a), o = s
                } else
                    for (i = 0; i < r.length; i++) {
                        if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                        wa(l, u, a), o = s
                    }
        }
    }
    if (Hl) throw e = Wi, Hl = !1, Wi = null, e
}

function H(e, t) {
    var n = t[tu];
    n === void 0 && (n = t[tu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Of(t, e, 2, !1), n.add(r))
}

function ni(e, t, n) {
    var r = 0;
    t && (r |= 4), Of(n, e, r, t)
}
var ol = "_reactListening" + Math.random().toString(36).slice(2);

function Ir(e) {
    if (!e[ol]) {
        e[ol] = !0, Fc.forEach(function(n) {
            n !== "selectionchange" && (Fh.has(n) || ni(n, !1, e), ni(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ol] || (t[ol] = !0, ni("selectionchange", !1, t))
    }
}

function Of(e, t, n, r) {
    switch (af(t)) {
        case 1:
            var l = Qm;
            break;
        case 4:
            l = Km;
            break;
        default:
            l = Bu
    }
    n = l.bind(null, t, n, e), l = void 0, !Vi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function ri(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var s = i.tag;
                    if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    i = i.return
                }
            for (; u !== null;) {
                if (i = Kt(u), i === null) return;
                if (s = i.tag, s === 5 || s === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Gc(function() {
        var a = o,
            d = ju(n),
            m = [];
        e: {
            var h = Cf.get(e);
            if (h !== void 0) {
                var y = Wu,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Sl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = sh;
                        break;
                    case "focusin":
                        g = "focus", y = Xo;
                        break;
                    case "focusout":
                        g = "blur", y = Xo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Xo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = ua;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Xm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = fh;
                        break;
                    case Sf:
                    case Ef:
                    case kf:
                        y = qm;
                        break;
                    case xf:
                        y = ph;
                        break;
                    case "scroll":
                        y = Gm;
                        break;
                    case "wheel":
                        y = hh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = th;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = aa
                }
                var S = (t & 4) !== 0,
                    k = !S && e === "scroll",
                    f = S ? h !== null ? h + "Capture" : null : h;
                S = [];
                for (var c = a, p; c !== null;) {
                    p = c;
                    var w = p.stateNode;
                    if (p.tag === 5 && w !== null && (p = w, f !== null && (w = Rr(c, f), w != null && S.push(Dr(c, w, p)))), k) break;
                    c = c.return
                }
                0 < S.length && (h = new y(h, g, null, n, d), m.push({
                    event: h,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== bi && (g = n.relatedTarget || n.fromElement) && (Kt(g) || g[dt])) break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? Kt(g) : null, g !== null && (k = on(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
                    if (S = ua, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (S = aa, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), k = y == null ? h : gn(y), p = g == null ? h : gn(g), h = new S(w, c + "leave", y, n, d), h.target = k, h.relatedTarget = p, w = null, Kt(d) === a && (S = new S(f, c + "enter", g, n, d), S.target = p, S.relatedTarget = k, w = S), k = w, y && g) t: {
                        for (S = y, f = g, c = 0, p = S; p; p = cn(p)) c++;
                        for (p = 0, w = f; w; w = cn(w)) p++;
                        for (; 0 < c - p;) S = cn(S),
                        c--;
                        for (; 0 < p - c;) f = cn(f),
                        p--;
                        for (; c--;) {
                            if (S === f || f !== null && S === f.alternate) break t;
                            S = cn(S), f = cn(f)
                        }
                        S = null
                    }
                    else S = null;
                    y !== null && Sa(m, h, y, S, !1), g !== null && k !== null && Sa(m, k, g, S, !0)
                }
            }
            e: {
                if (h = a ? gn(a) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var x = kh;
                else if (da(h))
                    if (hf) x = Oh;
                    else {
                        x = Ch;
                        var E = xh
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = Th);
                if (x && (x = x(e, a))) {
                    mf(m, x, n, d);
                    break e
                }
                E && E(e, h, a),
                e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && zi(h, "number", h.value)
            }
            switch (E = a ? gn(a) : window, e) {
                case "focusin":
                    (da(E) || E.contentEditable === "true") && (hn = E, Yi = a, vr = null);
                    break;
                case "focusout":
                    vr = Yi = hn = null;
                    break;
                case "mousedown":
                    Xi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xi = !1, ga(m, n, d);
                    break;
                case "selectionchange":
                    if (Nh) break;
                case "keydown":
                case "keyup":
                    ga(m, n, d)
            }
            var O;
            if (Ku) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else mn ? df(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (ff && n.locale !== "ko" && (mn || T !== "onCompositionStart" ? T === "onCompositionEnd" && mn && (O = cf()) : (xt = d, Vu = "value" in xt ? xt.value : xt.textContent, mn = !0)), E = Ql(a, T), 0 < E.length && (T = new sa(T, e, null, n, d), m.push({
                event: T,
                listeners: E
            }), O ? T.data = O : (O = pf(n), O !== null && (T.data = O)))),
            (O = gh ? yh(e, n) : wh(e, n)) && (a = Ql(a, "onBeforeInput"), 0 < a.length && (d = new sa("onBeforeInput", "beforeinput", null, n, d), m.push({
                event: d,
                listeners: a
            }), d.data = O))
        }
        Tf(m, t)
    })
}

function Dr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ql(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = Rr(e, n), o != null && r.unshift(Dr(e, o, l)), o = Rr(e, t), o != null && r.push(Dr(e, o, l))), e = e.return
    }
    return r
}

function cn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Sa(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            s = u.alternate,
            a = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 && a !== null && (u = a, l ? (s = Rr(n, o), s != null && i.unshift(Dr(n, s, u))) : l || (s = Rr(n, o), s != null && i.push(Dr(n, s, u)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var $h = /\r\n?/g,
    Ih = /\u0000|\uFFFD/g;

function Ea(e) {
    return (typeof e == "string" ? e : "" + e).replace($h, `
`).replace(Ih, "")
}

function il(e, t, n) {
    if (t = Ea(t), Ea(e) !== t && n) throw Error(C(425))
}

function Kl() {}
var Zi = null,
    Ji = null;

function qi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var eu = typeof setTimeout == "function" ? setTimeout : void 0,
    Dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ka = typeof Promise == "function" ? Promise : void 0,
    Mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ka < "u" ? function(e) {
        return ka.resolve(null).then(e).catch(zh)
    } : eu;

function zh(e) {
    setTimeout(function() {
        throw e
    })
}

function li(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), _r(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    _r(t)
}

function Lt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function xa(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Vn = Math.random().toString(36).slice(2),
    tt = "__reactFiber$" + Vn,
    Mr = "__reactProps$" + Vn,
    dt = "__reactContainer$" + Vn,
    tu = "__reactEvents$" + Vn,
    Ah = "__reactListeners$" + Vn,
    jh = "__reactHandles$" + Vn;

function Kt(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[dt] || n[tt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = xa(e); e !== null;) {
                    if (n = e[tt]) return n;
                    e = xa(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Wr(e) {
    return e = e[tt] || e[dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33))
}

function Eo(e) {
    return e[Mr] || null
}
var nu = [],
    yn = -1;

function Ut(e) {
    return {
        current: e
    }
}

function b(e) {
    0 > yn || (e.current = nu[yn], nu[yn] = null, yn--)
}

function j(e, t) {
    yn++, nu[yn] = e.current, e.current = t
}
var zt = {},
    pe = Ut(zt),
    Ee = Ut(!1),
    qt = zt;

function In(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function ke(e) {
    return e = e.childContextTypes, e != null
}

function Gl() {
    b(Ee), b(pe)
}

function Ca(e, t, n) {
    if (pe.current !== zt) throw Error(C(168));
    j(pe, t), j(Ee, n)
}

function Pf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(C(108, xm(e) || "Unknown", l));
    return G({}, n, r)
}

function Yl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zt, qt = pe.current, j(pe, e), j(Ee, Ee.current), !0
}

function Ta(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? (e = Pf(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, b(Ee), b(pe), j(pe, e)) : b(Ee), j(Ee, n)
}
var ut = null,
    ko = !1,
    oi = !1;

function Rf(e) {
    ut === null ? ut = [e] : ut.push(e)
}

function Uh(e) {
    ko = !0, Rf(e)
}

function Ht() {
    if (!oi && ut !== null) {
        oi = !0;
        var e = 0,
            t = z;
        try {
            var n = ut;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ut = null, ko = !1
        } catch (l) {
            throw ut !== null && (ut = ut.slice(e + 1)), Jc(Uu, Ht), l
        } finally {
            z = t, oi = !1
        }
    }
    return null
}
var wn = [],
    Sn = 0,
    Xl = null,
    Zl = 0,
    ze = [],
    Ae = 0,
    en = null,
    st = 1,
    at = "";

function Vt(e, t) {
    wn[Sn++] = Zl, wn[Sn++] = Xl, Xl = e, Zl = t
}

function Nf(e, t, n) {
    ze[Ae++] = st, ze[Ae++] = at, ze[Ae++] = en, en = e;
    var r = st;
    e = at;
    var l = 32 - Ge(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Ge(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, st = 1 << 32 - Ge(t) + l | n << l | r, at = o + e
    } else st = 1 << o | n << l | r, at = e
}

function Yu(e) {
    e.return !== null && (Vt(e, 1), Nf(e, 1, 0))
}

function Xu(e) {
    for (; e === Xl;) Xl = wn[--Sn], wn[Sn] = null, Zl = wn[--Sn], wn[Sn] = null;
    for (; e === en;) en = ze[--Ae], ze[Ae] = null, at = ze[--Ae], ze[Ae] = null, st = ze[--Ae], ze[Ae] = null
}
var _e = null,
    Le = null,
    V = !1,
    Qe = null;

function Lf(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Oa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, Le = Lt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _e = e, Le = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = en !== null ? {
                id: st,
                overflow: at
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _e = e, Le = null, !0) : !1;
        default:
            return !1
    }
}

function ru(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function lu(e) {
    if (V) {
        var t = Le;
        if (t) {
            var n = t;
            if (!Oa(e, t)) {
                if (ru(e)) throw Error(C(418));
                t = Lt(n.nextSibling);
                var r = _e;
                t && Oa(e, t) ? Lf(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, _e = e)
            }
        } else {
            if (ru(e)) throw Error(C(418));
            e.flags = e.flags & -4097 | 2, V = !1, _e = e
        }
    }
}

function Pa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    _e = e
}

function ul(e) {
    if (e !== _e) return !1;
    if (!V) return Pa(e), V = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps)), t && (t = Le)) {
        if (ru(e)) throw _f(), Error(C(418));
        for (; t;) Lf(e, t), t = Lt(t.nextSibling)
    }
    if (Pa(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Lt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else Le = _e ? Lt(e.stateNode.nextSibling) : null;
    return !0
}

function _f() {
    for (var e = Le; e;) e = Lt(e.nextSibling)
}

function Dn() {
    Le = _e = null, V = !1
}

function Zu(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}
var Hh = ht.ReactCurrentBatchConfig;

function Ve(e, t) {
    if (e && e.defaultProps) {
        t = G({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Jl = Ut(null),
    ql = null,
    En = null,
    Ju = null;

function qu() {
    Ju = En = ql = null
}

function es(e) {
    var t = Jl.current;
    b(Jl), e._currentValue = t
}

function ou(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ln(e, t) {
    ql = e, Ju = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), e.firstContext = null)
}

function He(e) {
    var t = e._currentValue;
    if (Ju !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, En === null) {
            if (ql === null) throw Error(C(308));
            En = e, ql.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else En = En.next = e;
    return t
}
var Gt = null;

function ts(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}

function Ff(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ts(t)) : (n.next = l.next, l.next = n), t.interleaved = n, pt(e, r)
}

function pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var St = !1;

function ns(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function $f(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function _t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, pt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, ts(r)) : (t.next = l.next, l.next = t), r.interleaved = t, pt(e, n)
}

function El(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Hu(e, n)
    }
}

function Ra(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function eo(e, t, n, r) {
    var l = e.updateQueue;
    St = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            a = s.next;
        s.next = null, i === null ? o = a : i.next = a, i = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, u = d.lastBaseUpdate, u !== i && (u === null ? d.firstBaseUpdate = a : u.next = a, d.lastBaseUpdate = s))
    }
    if (o !== null) {
        var m = l.baseState;
        i = 0, d = a = s = null, u = o;
        do {
            var h = u.lane,
                y = u.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var g = e,
                        S = u;
                    switch (h = t, y = n, S.tag) {
                        case 1:
                            if (g = S.payload, typeof g == "function") {
                                m = g.call(y, m, h);
                                break e
                            }
                            m = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = S.payload, h = typeof g == "function" ? g.call(y, m, h) : g, h == null) break e;
                            m = G({}, m, h);
                            break e;
                        case 2:
                            St = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u))
            } else y = {
                eventTime: y,
                lane: h,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, d === null ? (a = d = y, s = m) : d = d.next = y, i |= h;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null
            }
        } while (!0);
        if (d === null && (s = m), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        nn |= i, e.lanes = i, e.memoizedState = m
    }
}

function Na(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(C(191, l));
                l.call(r)
            }
        }
}
var If = new _c.Component().refs;

function iu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var xo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? on(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            l = $t(e),
            o = ct(r, l);
        o.payload = t, n != null && (o.callback = n), t = _t(e, o, l), t !== null && (Ye(t, e, l, r), El(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ve(),
            l = $t(e),
            o = ct(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = _t(e, o, l), t !== null && (Ye(t, e, l, r), El(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ve(),
            r = $t(e),
            l = ct(n, r);
        l.tag = 2, t != null && (l.callback = t), t = _t(e, l, r), t !== null && (Ye(t, e, r, n), El(t, e, r))
    }
};

function La(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(l, o) : !0
}

function Df(e, t, n) {
    var r = !1,
        l = zt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = He(o) : (l = ke(t) ? qt : pe.current, r = t.contextTypes, o = (r = r != null) ? In(e, l) : zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function _a(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xo.enqueueReplaceState(t, t.state, null)
}

function uu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = If, ns(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = He(o) : (o = ke(t) ? qt : pe.current, l.context = In(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (iu(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && xo.enqueueReplaceState(l, l.state, null), eo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function er(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(C(309));
                var r = n.stateNode
            }
            if (!r) throw Error(C(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                u === If && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, e))
    }
    return e
}

function sl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Fa(e) {
    var t = e._init;
    return t(e._payload)
}

function Mf(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = It(f, c), f.index = 0, f.sibling = null, f
    }

    function o(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function u(f, c, p, w) {
        return c === null || c.tag !== 6 ? (c = di(p, f.mode, w), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function s(f, c, p, w) {
        var x = p.type;
        return x === pn ? d(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && Fa(x) === c.type) ? (w = l(c, p.props), w.ref = er(f, c, p), w.return = f, w) : (w = Pl(p.type, p.key, p.props, null, f.mode, w), w.ref = er(f, c, p), w.return = f, w)
    }

    function a(f, c, p, w) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = pi(p, f.mode, w), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function d(f, c, p, w, x) {
        return c === null || c.tag !== 7 ? (c = Zt(p, f.mode, w, x), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function m(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = di("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Zr:
                    return p = Pl(c.type, c.key, c.props, null, f.mode, p), p.ref = er(f, null, c), p.return = f, p;
                case dn:
                    return c = pi(c, f.mode, p), c.return = f, c;
                case wt:
                    var w = c._init;
                    return m(f, w(c._payload), p)
            }
            if (ur(c) || Yn(c)) return c = Zt(c, f.mode, p, null), c.return = f, c;
            sl(f, c)
        }
        return null
    }

    function h(f, c, p, w) {
        var x = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return x !== null ? null : u(f, c, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Zr:
                    return p.key === x ? s(f, c, p, w) : null;
                case dn:
                    return p.key === x ? a(f, c, p, w) : null;
                case wt:
                    return x = p._init, h(f, c, x(p._payload), w)
            }
            if (ur(p) || Yn(p)) return x !== null ? null : d(f, c, p, w, null);
            sl(f, p)
        }
        return null
    }

    function y(f, c, p, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(p) || null, u(c, f, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Zr:
                    return f = f.get(w.key === null ? p : w.key) || null, s(c, f, w, x);
                case dn:
                    return f = f.get(w.key === null ? p : w.key) || null, a(c, f, w, x);
                case wt:
                    var E = w._init;
                    return y(f, c, p, E(w._payload), x)
            }
            if (ur(w) || Yn(w)) return f = f.get(p) || null, d(c, f, w, x, null);
            sl(c, w)
        }
        return null
    }

    function g(f, c, p, w) {
        for (var x = null, E = null, O = c, T = c = 0, _ = null; O !== null && T < p.length; T++) {
            O.index > T ? (_ = O, O = null) : _ = O.sibling;
            var R = h(f, O, p[T], w);
            if (R === null) {
                O === null && (O = _);
                break
            }
            e && O && R.alternate === null && t(f, O), c = o(R, c, T), E === null ? x = R : E.sibling = R, E = R, O = _
        }
        if (T === p.length) return n(f, O), V && Vt(f, T), x;
        if (O === null) {
            for (; T < p.length; T++) O = m(f, p[T], w), O !== null && (c = o(O, c, T), E === null ? x = O : E.sibling = O, E = O);
            return V && Vt(f, T), x
        }
        for (O = r(f, O); T < p.length; T++) _ = y(O, f, T, p[T], w), _ !== null && (e && _.alternate !== null && O.delete(_.key === null ? T : _.key), c = o(_, c, T), E === null ? x = _ : E.sibling = _, E = _);
        return e && O.forEach(function(W) {
            return t(f, W)
        }), V && Vt(f, T), x
    }

    function S(f, c, p, w) {
        var x = Yn(p);
        if (typeof x != "function") throw Error(C(150));
        if (p = x.call(p), p == null) throw Error(C(151));
        for (var E = x = null, O = c, T = c = 0, _ = null, R = p.next(); O !== null && !R.done; T++, R = p.next()) {
            O.index > T ? (_ = O, O = null) : _ = O.sibling;
            var W = h(f, O, R.value, w);
            if (W === null) {
                O === null && (O = _);
                break
            }
            e && O && W.alternate === null && t(f, O), c = o(W, c, T), E === null ? x = W : E.sibling = W, E = W, O = _
        }
        if (R.done) return n(f, O), V && Vt(f, T), x;
        if (O === null) {
            for (; !R.done; T++, R = p.next()) R = m(f, R.value, w), R !== null && (c = o(R, c, T), E === null ? x = R : E.sibling = R, E = R);
            return V && Vt(f, T), x
        }
        for (O = r(f, O); !R.done; T++, R = p.next()) R = y(O, f, T, R.value, w), R !== null && (e && R.alternate !== null && O.delete(R.key === null ? T : R.key), c = o(R, c, T), E === null ? x = R : E.sibling = R, E = R);
        return e && O.forEach(function(L) {
            return t(f, L)
        }), V && Vt(f, T), x
    }

    function k(f, c, p, w) {
        if (typeof p == "object" && p !== null && p.type === pn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Zr:
                    e: {
                        for (var x = p.key, E = c; E !== null;) {
                            if (E.key === x) {
                                if (x = p.type, x === pn) {
                                    if (E.tag === 7) {
                                        n(f, E.sibling), c = l(E, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (E.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && Fa(x) === E.type) {
                                    n(f, E.sibling), c = l(E, p.props), c.ref = er(f, E, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, E);
                                break
                            } else t(f, E);
                            E = E.sibling
                        }
                        p.type === pn ? (c = Zt(p.props.children, f.mode, w, p.key), c.return = f, f = c) : (w = Pl(p.type, p.key, p.props, null, f.mode, w), w.ref = er(f, c, p), w.return = f, f = w)
                    }
                    return i(f);
                case dn:
                    e: {
                        for (E = p.key; c !== null;) {
                            if (c.key === E)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = pi(p, f.mode, w),
                        c.return = f,
                        f = c
                    }
                    return i(f);
                case wt:
                    return E = p._init, k(f, c, E(p._payload), w)
            }
            if (ur(p)) return g(f, c, p, w);
            if (Yn(p)) return S(f, c, p, w);
            sl(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = di(p, f.mode, w), c.return = f, f = c), i(f)) : n(f, c)
    }
    return k
}
var Mn = Mf(!0),
    zf = Mf(!1),
    Qr = {},
    rt = Ut(Qr),
    zr = Ut(Qr),
    Ar = Ut(Qr);

function Yt(e) {
    if (e === Qr) throw Error(C(174));
    return e
}

function rs(e, t) {
    switch (j(Ar, t), j(zr, e), j(rt, Qr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ji(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ji(t, e)
    }
    b(rt), j(rt, t)
}

function zn() {
    b(rt), b(zr), b(Ar)
}

function Af(e) {
    Yt(Ar.current);
    var t = Yt(rt.current),
        n = ji(t, e.type);
    t !== n && (j(zr, e), j(rt, n))
}

function ls(e) {
    zr.current === e && (b(rt), b(zr))
}
var Q = Ut(0);

function to(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ii = [];

function os() {
    for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
    ii.length = 0
}
var kl = ht.ReactCurrentDispatcher,
    ui = ht.ReactCurrentBatchConfig,
    tn = 0,
    K = null,
    q = null,
    ne = null,
    no = !1,
    gr = !1,
    jr = 0,
    bh = 0;

function ce() {
    throw Error(C(321))
}

function is(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xe(e[n], t[n])) return !1;
    return !0
}

function us(e, t, n, r, l, o) {
    if (tn = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, kl.current = e === null || e.memoizedState === null ? Qh : Kh, e = n(r, l), gr) {
        o = 0;
        do {
            if (gr = !1, jr = 0, 25 <= o) throw Error(C(301));
            o += 1, ne = q = null, t.updateQueue = null, kl.current = Gh, e = n(r, l)
        } while (gr)
    }
    if (kl.current = ro, t = q !== null && q.next !== null, tn = 0, ne = q = K = null, no = !1, t) throw Error(C(300));
    return e
}

function ss() {
    var e = jr !== 0;
    return jr = 0, e
}

function et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ne === null ? K.memoizedState = ne = e : ne = ne.next = e, ne
}

function be() {
    if (q === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = q.next;
    var t = ne === null ? K.memoizedState : ne.next;
    if (t !== null) ne = t, q = e;
    else {
        if (e === null) throw Error(C(310));
        q = e, e = {
            memoizedState: q.memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        }, ne === null ? K.memoizedState = ne = e : ne = ne.next = e
    }
    return ne
}

function Ur(e, t) {
    return typeof t == "function" ? t(e) : t
}

function si(e) {
    var t = be(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = q,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null,
            s = null,
            a = o;
        do {
            var d = a.lane;
            if ((tn & d) === d) s !== null && (s = s.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var m = {
                    lane: d,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                s === null ? (u = s = m, i = r) : s = s.next = m, K.lanes |= d, nn |= d
            }
            a = a.next
        } while (a !== null && a !== o);
        s === null ? i = r : s.next = u, Xe(r, t.memoizedState) || (we = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, K.lanes |= o, nn |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function ai(e) {
    var t = be(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Xe(o, t.memoizedState) || (we = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function jf() {}

function Uf(e, t) {
    var n = K,
        r = be(),
        l = t(),
        o = !Xe(r.memoizedState, l);
    if (o && (r.memoizedState = l, we = !0), r = r.queue, as(Bf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
        if (n.flags |= 2048, Hr(9, bf.bind(null, n, r, l, t), void 0, null), re === null) throw Error(C(349));
        tn & 30 || Hf(n, t, l)
    }
    return l
}

function Hf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function bf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Vf(t) && Wf(e)
}

function Bf(e, t, n) {
    return n(function() {
        Vf(t) && Wf(e)
    })
}

function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Xe(e, n)
    } catch {
        return !0
    }
}

function Wf(e) {
    var t = pt(e, 1);
    t !== null && Ye(t, e, 1, -1)
}

function $a(e) {
    var t = et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Wh.bind(null, K, e), [t.memoizedState, e]
}

function Hr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Qf() {
    return be().memoizedState
}

function xl(e, t, n, r) {
    var l = et();
    K.flags |= e, l.memoizedState = Hr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Co(e, t, n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (q !== null) {
        var i = q.memoizedState;
        if (o = i.destroy, r !== null && is(r, i.deps)) {
            l.memoizedState = Hr(t, n, o, r);
            return
        }
    }
    K.flags |= e, l.memoizedState = Hr(1 | t, n, o, r)
}

function Ia(e, t) {
    return xl(8390656, 8, e, t)
}

function as(e, t) {
    return Co(2048, 8, e, t)
}

function Kf(e, t) {
    return Co(4, 2, e, t)
}

function Gf(e, t) {
    return Co(4, 4, e, t)
}

function Yf(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Xf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Co(4, 4, Yf.bind(null, t, e), n)
}

function cs() {}

function Zf(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && is(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Jf(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && is(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function qf(e, t, n) {
    return tn & 21 ? (Xe(n, t) || (n = tf(), K.lanes |= n, nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = n)
}

function Bh(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ui.transition;
    ui.transition = {};
    try {
        e(!1), t()
    } finally {
        z = n, ui.transition = r
    }
}

function ed() {
    return be().memoizedState
}

function Vh(e, t, n) {
    var r = $t(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, td(e)) nd(t, n);
    else if (n = Ff(e, t, n, r), n !== null) {
        var l = ve();
        Ye(n, e, r, l), rd(n, t, r)
    }
}

function Wh(e, t, n) {
    var r = $t(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (td(e)) nd(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Xe(u, i)) {
                var s = t.interleaved;
                s === null ? (l.next = l, ts(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Ff(e, t, l, r), n !== null && (l = ve(), Ye(n, e, r, l), rd(n, t, r))
    }
}

function td(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function nd(e, t) {
    gr = no = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function rd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Hu(e, n)
    }
}
var ro = {
        readContext: He,
        useCallback: ce,
        useContext: ce,
        useEffect: ce,
        useImperativeHandle: ce,
        useInsertionEffect: ce,
        useLayoutEffect: ce,
        useMemo: ce,
        useReducer: ce,
        useRef: ce,
        useState: ce,
        useDebugValue: ce,
        useDeferredValue: ce,
        useTransition: ce,
        useMutableSource: ce,
        useSyncExternalStore: ce,
        useId: ce,
        unstable_isNewReconciler: !1
    },
    Qh = {
        readContext: He,
        useCallback: function(e, t) {
            return et().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: He,
        useEffect: Ia,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, xl(4194308, 4, Yf.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return xl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return xl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = et();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = et();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Vh.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = et();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: $a,
        useDebugValue: cs,
        useDeferredValue: function(e) {
            return et().memoizedState = e
        },
        useTransition: function() {
            var e = $a(!1),
                t = e[0];
            return e = Bh.bind(null, e[1]), et().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = K,
                l = et();
            if (V) {
                if (n === void 0) throw Error(C(407));
                n = n()
            } else {
                if (n = t(), re === null) throw Error(C(349));
                tn & 30 || Hf(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Ia(Bf.bind(null, r, o, e), [e]), r.flags |= 2048, Hr(9, bf.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = et(),
                t = re.identifierPrefix;
            if (V) {
                var n = at,
                    r = st;
                n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = jr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = bh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Kh = {
        readContext: He,
        useCallback: Zf,
        useContext: He,
        useEffect: as,
        useImperativeHandle: Xf,
        useInsertionEffect: Kf,
        useLayoutEffect: Gf,
        useMemo: Jf,
        useReducer: si,
        useRef: Qf,
        useState: function() {
            return si(Ur)
        },
        useDebugValue: cs,
        useDeferredValue: function(e) {
            var t = be();
            return qf(t, q.memoizedState, e)
        },
        useTransition: function() {
            var e = si(Ur)[0],
                t = be().memoizedState;
            return [e, t]
        },
        useMutableSource: jf,
        useSyncExternalStore: Uf,
        useId: ed,
        unstable_isNewReconciler: !1
    },
    Gh = {
        readContext: He,
        useCallback: Zf,
        useContext: He,
        useEffect: as,
        useImperativeHandle: Xf,
        useInsertionEffect: Kf,
        useLayoutEffect: Gf,
        useMemo: Jf,
        useReducer: ai,
        useRef: Qf,
        useState: function() {
            return ai(Ur)
        },
        useDebugValue: cs,
        useDeferredValue: function(e) {
            var t = be();
            return q === null ? t.memoizedState = e : qf(t, q.memoizedState, e)
        },
        useTransition: function() {
            var e = ai(Ur)[0],
                t = be().memoizedState;
            return [e, t]
        },
        useMutableSource: jf,
        useSyncExternalStore: Uf,
        useId: ed,
        unstable_isNewReconciler: !1
    };

function An(e, t) {
    try {
        var n = "",
            r = t;
        do n += km(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function ci(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function su(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Yh = typeof WeakMap == "function" ? WeakMap : Map;

function ld(e, t, n) {
    n = ct(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        oo || (oo = !0, yu = r), su(e, t)
    }, n
}

function od(e, t, n) {
    n = ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            su(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        su(e, t), typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Da(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Yh;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = av.bind(null, e, t, n), t.then(e, e))
}

function Ma(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function za(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, _t(n, t, 1))), n.lanes |= 1), e)
}
var Xh = ht.ReactCurrentOwner,
    we = !1;

function he(e, t, n, r) {
    t.child = e === null ? zf(t, null, n, r) : Mn(t, e.child, n, r)
}

function Aa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Ln(t, l), r = us(e, t, n, r, o, l), n = ss(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mt(e, t, l)) : (V && n && Yu(t), t.flags |= 1, he(e, t, r, l), t.child)
}

function ja(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ys(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, id(e, t, o, r, l)) : (e = Pl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : $r, n(i, r) && e.ref === t.ref) return mt(e, t, l)
    }
    return t.flags |= 1, e = It(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function id(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if ($r(o, r) && e.ref === t.ref)
            if (we = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (we = !0);
            else return t.lanes = e.lanes, mt(e, t, l)
    }
    return au(e, t, n, r, l)
}

function ud(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, j(xn, Re), Re |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, j(xn, Re), Re |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, j(xn, Re), Re |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, j(xn, Re), Re |= r;
    return he(e, t, l, n), t.child
}

function sd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function au(e, t, n, r, l) {
    var o = ke(n) ? qt : pe.current;
    return o = In(t, o), Ln(t, l), n = us(e, t, n, r, o, l), r = ss(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, mt(e, t, l)) : (V && r && Yu(t), t.flags |= 1, he(e, t, n, l), t.child)
}

function Ua(e, t, n, r, l) {
    if (ke(n)) {
        var o = !0;
        Yl(t)
    } else o = !1;
    if (Ln(t, l), t.stateNode === null) Cl(e, t), Df(t, n, r), uu(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var s = i.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = He(a) : (a = ke(n) ? qt : pe.current, a = In(t, a));
        var d = n.getDerivedStateFromProps,
            m = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && _a(t, i, r, a), St = !1;
        var h = t.memoizedState;
        i.state = h, eo(t, r, i, l), s = t.memoizedState, u !== r || h !== s || Ee.current || St ? (typeof d == "function" && (iu(t, n, d, r), s = t.memoizedState), (u = St || La(t, n, u, r, h, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, $f(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ve(t.type, u), i.props = a, m = t.pendingProps, h = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = ke(n) ? qt : pe.current, s = In(t, s));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || h !== s) && _a(t, i, r, s), St = !1, h = t.memoizedState, i.state = h, eo(t, r, i, l);
        var g = t.memoizedState;
        u !== m || h !== g || Ee.current || St ? (typeof y == "function" && (iu(t, n, y, r), g = t.memoizedState), (a = St || La(t, n, a, r, h, g, s) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return cu(e, t, n, r, o, l)
}

function cu(e, t, n, r, l, o) {
    sd(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Ta(t, n, !1), mt(e, t, o);
    r = t.stateNode, Xh.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Mn(t, e.child, null, o), t.child = Mn(t, null, u, o)) : he(e, t, u, o), t.memoizedState = r.state, l && Ta(t, n, !0), t.child
}

function ad(e) {
    var t = e.stateNode;
    t.pendingContext ? Ca(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ca(e, t.context, !1), rs(e, t.containerInfo)
}

function Ha(e, t, n, r, l) {
    return Dn(), Zu(l), t.flags |= 256, he(e, t, n, r), t.child
}
var fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function du(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function cd(e, t, n) {
    var r = t.pendingProps,
        l = Q.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(Q, l & 1), e === null) return lu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Po(i, r, 0, null), e = Zt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = du(n), t.memoizedState = fu, e) : fs(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Zh(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = It(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = It(u, o) : (o = Zt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? du(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = fu, r
    }
    return o = e.child, e = o.sibling, r = It(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function fs(e, t) {
    return t = Po({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function al(e, t, n, r) {
    return r !== null && Zu(r), Mn(t, e.child, null, n), e = fs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zh(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ci(Error(C(422))), al(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Po({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = Zt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Mn(t, e.child, null, i), t.child.memoizedState = du(i), t.memoizedState = fu, o);
    if (!(t.mode & 1)) return al(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(C(419)), r = ci(o, r, void 0), al(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, we || u) {
        if (r = re, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, pt(e, l), Ye(r, e, l, -1))
        }
        return gs(), r = ci(Error(C(421))), al(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cv.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Le = Lt(l.nextSibling), _e = t, V = !0, Qe = null, e !== null && (ze[Ae++] = st, ze[Ae++] = at, ze[Ae++] = en, st = e.id, at = e.overflow, en = t), t = fs(t, r.children), t.flags |= 4096, t)
}

function ba(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ou(e.return, t, n)
}

function fi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function fd(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (he(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ba(e, n, t);
            else if (e.tag === 19) ba(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (j(Q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && to(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), fi(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && to(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            fi(t, !0, n, null, o);
            break;
        case "together":
            fi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Cl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jh(e, t, n) {
    switch (t.tag) {
        case 3:
            ad(t), Dn();
            break;
        case 5:
            Af(t);
            break;
        case 1:
            ke(t.type) && Yl(t);
            break;
        case 4:
            rs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            j(Jl, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (j(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? cd(e, t, n) : (j(Q, Q.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
            j(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return fd(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, ud(e, t, n)
    }
    return mt(e, t, n)
}
var dd, pu, pd, md;
dd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
pu = function() {};
pd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Yt(rt.current);
        var o = null;
        switch (n) {
            case "input":
                l = Di(e, l), r = Di(e, r), o = [];
                break;
            case "select":
                l = G({}, l, {
                    value: void 0
                }), r = G({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = Ai(e, l), r = Ai(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kl)
        }
        Ui(n, r);
        var i;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === "style") {
                    var u = l[a];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Or.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
                if (a === "style")
                    if (u) {
                        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                    } else n || (o || (o = []), o.push(a, n)), n = s;
            else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Or.hasOwnProperty(a) ? (s != null && a === "onScroll" && H("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s))
        }
        n && (o = o || []).push("style", n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
md = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function tr(e, t) {
    if (!V) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function qh(e, t, n) {
    var r = t.pendingProps;
    switch (Xu(t), t.tag) {
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
            return fe(t), null;
        case 1:
            return ke(t.type) && Gl(), fe(t), null;
        case 3:
            return r = t.stateNode, zn(), b(Ee), b(pe), os(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (Eu(Qe), Qe = null))), pu(e, t), fe(t), null;
        case 5:
            ls(t);
            var l = Yt(Ar.current);
            if (n = t.type, e !== null && t.stateNode != null) pd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(C(166));
                    return fe(t), null
                }
                if (e = Yt(rt.current), ul(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[tt] = t, r[Mr] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < ar.length; l++) H(ar[l], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Zs(r, o), H("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, H("invalid", r);
                            break;
                        case "textarea":
                            qs(r, o), H("invalid", r)
                    }
                    Ui(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && il(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && il(r.textContent, u, e), l = ["children", "" + u]) : Or.hasOwnProperty(i) && u != null && i === "onScroll" && H("scroll", r)
                        } switch (n) {
                        case "input":
                            Jr(r), Js(r, o, !0);
                            break;
                        case "textarea":
                            Jr(r), ea(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Kl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[tt] = t, e[Mr] = r, dd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Hi(n, r), n) {
                            case "dialog":
                                H("cancel", e), H("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < ar.length; l++) H(ar[l], e);
                                l = r;
                                break;
                            case "source":
                                H("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), l = r;
                                break;
                            case "details":
                                H("toggle", e), l = r;
                                break;
                            case "input":
                                Zs(e, r), l = Di(e, r), H("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = G({}, r, {
                                    value: void 0
                                }), H("invalid", e);
                                break;
                            case "textarea":
                                qs(e, r), l = Ai(e, r), H("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        Ui(n, l),
                        u = l;
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === "style" ? Bc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Hc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Pr(e, s) : typeof s == "number" && Pr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Or.hasOwnProperty(o) ? s != null && o === "onScroll" && H("scroll", e) : s != null && Du(e, o, s, i))
                            } switch (n) {
                            case "input":
                                Jr(e), Js(e, r, !1);
                                break;
                            case "textarea":
                                Jr(e), ea(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? On(e, !!r.multiple, o, !1) : r.defaultValue != null && On(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Kl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return fe(t), null;
        case 6:
            if (e && t.stateNode != null) md(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                if (n = Yt(Ar.current), Yt(rt.current), ul(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[tt] = t, (o = r.nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
                        case 3:
                            il(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && il(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[tt] = t, t.stateNode = r
            }
            return fe(t), null;
        case 13:
            if (b(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (V && Le !== null && t.mode & 1 && !(t.flags & 128)) _f(), Dn(), t.flags |= 98560, o = !1;
                else if (o = ul(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(C(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
                        o[tt] = t
                    } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    fe(t), o = !1
                } else Qe !== null && (Eu(Qe), Qe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? ee === 0 && (ee = 3) : gs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
        case 4:
            return zn(), pu(e, t), e === null && Ir(t.stateNode.containerInfo), fe(t), null;
        case 10:
            return es(t.type._context), fe(t), null;
        case 17:
            return ke(t.type) && Gl(), fe(t), null;
        case 19:
            if (b(Q), o = t.memoizedState, o === null) return fe(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) tr(o, !1);
                else {
                    if (ee !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = to(e), i !== null) {
                                for (t.flags |= 128, tr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return j(Q, Q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && X() > jn && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = to(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return fe(t), null
                    } else 2 * X() - o.renderingStartTime > jn && n !== 1073741824 && (t.flags |= 128, r = !0, tr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, n = Q.current, j(Q, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
        case 22:
        case 23:
            return vs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}

function ev(e, t) {
    switch (Xu(t), t.tag) {
        case 1:
            return ke(t.type) && Gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return zn(), b(Ee), b(pe), os(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ls(t), null;
        case 13:
            if (b(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(C(340));
                Dn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return b(Q), null;
        case 4:
            return zn(), null;
        case 10:
            return es(t.type._context), null;
        case 22:
        case 23:
            return vs(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var cl = !1,
    de = !1,
    tv = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;

function kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function mu(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Ba = !1;

function nv(e, t) {
    if (Zi = Vl, e = yf(), Gu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    u = -1,
                    s = -1,
                    a = 0,
                    d = 0,
                    m = e,
                    h = null;
                t: for (;;) {
                    for (var y; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (y = m.firstChild) !== null;) h = m, m = y;
                    for (;;) {
                        if (m === e) break t;
                        if (h === n && ++a === l && (u = i), h === o && ++d === r && (s = i), (y = m.nextSibling) !== null) break;
                        m = h, h = m.parentNode
                    }
                    m = y
                }
                n = u === -1 || s === -1 ? null : {
                    start: u,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ji = {
            focusedElem: e,
            selectionRange: n
        }, Vl = !1, P = t; P !== null;)
        if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
        else
            for (; P !== null;) {
                t = P;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var S = g.memoizedProps,
                                    k = g.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ve(t.type, S), k);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                    }
                } catch (w) {
                    Y(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, P = e;
                    break
                }
                P = t.return
            }
    return g = Ba, Ba = !1, g
}

function yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && mu(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function To(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function hu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function hd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[tt], delete t[Mr], delete t[tu], delete t[Ah], delete t[jh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function vd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Va(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || vd(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function vu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (vu(e, t, n), e = e.sibling; e !== null;) vu(e, t, n), e = e.sibling
}

function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (gu(e, t, n), e = e.sibling; e !== null;) gu(e, t, n), e = e.sibling
}
var ie = null,
    We = !1;

function gt(e, t, n) {
    for (n = n.child; n !== null;) gd(e, t, n), n = n.sibling
}

function gd(e, t, n) {
    if (nt && typeof nt.onCommitFiberUnmount == "function") try {
        nt.onCommitFiberUnmount(go, n)
    } catch {}
    switch (n.tag) {
        case 5:
            de || kn(n, t);
        case 6:
            var r = ie,
                l = We;
            ie = null, gt(e, t, n), ie = r, We = l, ie !== null && (We ? (e = ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ie.removeChild(n.stateNode));
            break;
        case 18:
            ie !== null && (We ? (e = ie, n = n.stateNode, e.nodeType === 8 ? li(e.parentNode, n) : e.nodeType === 1 && li(e, n), _r(e)) : li(ie, n.stateNode));
            break;
        case 4:
            r = ie, l = We, ie = n.stateNode.containerInfo, We = !0, gt(e, t, n), ie = r, We = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && mu(n, t, i), l = l.next
                } while (l !== r)
            }
            gt(e, t, n);
            break;
        case 1:
            if (!de && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                Y(n, t, u)
            }
            gt(e, t, n);
            break;
        case 21:
            gt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, gt(e, t, n), de = r) : gt(e, t, n);
            break;
        default:
            gt(e, t, n)
    }
}

function Wa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new tv), t.forEach(function(r) {
            var l = fv.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Be(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            ie = u.stateNode, We = !1;
                            break e;
                        case 3:
                            ie = u.stateNode.containerInfo, We = !0;
                            break e;
                        case 4:
                            ie = u.stateNode.containerInfo, We = !0;
                            break e
                    }
                    u = u.return
                }
                if (ie === null) throw Error(C(160));
                gd(o, i, l), ie = null, We = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (a) {
                Y(l, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) yd(t, e), t = t.sibling
}

function yd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Be(t, e), qe(e), r & 4) {
                try {
                    yr(3, e, e.return), To(3, e)
                } catch (S) {
                    Y(e, e.return, S)
                }
                try {
                    yr(5, e, e.return)
                } catch (S) {
                    Y(e, e.return, S)
                }
            }
            break;
        case 1:
            Be(t, e), qe(e), r & 512 && n !== null && kn(n, n.return);
            break;
        case 5:
            if (Be(t, e), qe(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Pr(l, "")
                } catch (S) {
                    Y(e, e.return, S)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && Ac(l, o), Hi(u, i);
                    var a = Hi(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var d = s[i],
                            m = s[i + 1];
                        d === "style" ? Bc(l, m) : d === "dangerouslySetInnerHTML" ? Hc(l, m) : d === "children" ? Pr(l, m) : Du(l, d, m, a)
                    }
                    switch (u) {
                        case "input":
                            Mi(l, o);
                            break;
                        case "textarea":
                            jc(l, o);
                            break;
                        case "select":
                            var h = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? On(l, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? On(l, !!o.multiple, o.defaultValue, !0) : On(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Mr] = o
                } catch (S) {
                    Y(e, e.return, S)
                }
            }
            break;
        case 6:
            if (Be(t, e), qe(e), r & 4) {
                if (e.stateNode === null) throw Error(C(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (S) {
                    Y(e, e.return, S)
                }
            }
            break;
        case 3:
            if (Be(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                _r(t.containerInfo)
            } catch (S) {
                Y(e, e.return, S)
            }
            break;
        case 4:
            Be(t, e), qe(e);
            break;
        case 13:
            Be(t, e), qe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ms = X())), r & 4 && Wa(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (a = de) || d, Be(t, e), de = a) : Be(t, e), qe(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1)
                    for (P = e, d = e.child; d !== null;) {
                        for (m = P = d; P !== null;) {
                            switch (h = P, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    yr(4, h, h.return);
                                    break;
                                case 1:
                                    kn(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (S) {
                                            Y(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    kn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Ka(m);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, P = y) : Ka(m)
                        }
                        d = d.sibling
                    }
                e: for (d = null, m = e;;) {
                    if (m.tag === 5) {
                        if (d === null) {
                            d = m;
                            try {
                                l = m.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = bc("display", i))
                            } catch (S) {
                                Y(e, e.return, S)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (d === null) try {
                            m.stateNode.nodeValue = a ? "" : m.memoizedProps
                        } catch (S) {
                            Y(e, e.return, S)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        d === m && (d = null), m = m.return
                    }
                    d === m && (d = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            Be(t, e), qe(e), r & 4 && Wa(e);
            break;
        case 21:
            break;
        default:
            Be(t, e), qe(e)
    }
}

function qe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (vd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Pr(l, ""), r.flags &= -33);
                    var o = Va(e);
                    gu(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Va(e);
                    vu(e, u, i);
                    break;
                default:
                    throw Error(C(161))
            }
        }
        catch (s) {
            Y(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function rv(e, t, n) {
    P = e, wd(e)
}

function wd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null;) {
        var l = P,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || cl;
            if (!i) {
                var u = l.alternate,
                    s = u !== null && u.memoizedState !== null || de;
                u = cl;
                var a = de;
                if (cl = i, (de = s) && !a)
                    for (P = l; P !== null;) i = P, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ga(l) : s !== null ? (s.return = i, P = s) : Ga(l);
                for (; o !== null;) P = o, wd(o), o = o.sibling;
                P = l, cl = u, de = a
            }
            Qa(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, P = o) : Qa(e)
    }
}

function Qa(e) {
    for (; P !== null;) {
        var t = P;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        de || To(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !de)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Ve(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && Na(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Na(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
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
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var d = a.memoizedState;
                                if (d !== null) {
                                    var m = d.dehydrated;
                                    m !== null && _r(m)
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
                        throw Error(C(163))
                }
                de || t.flags & 512 && hu(t)
            } catch (h) {
                Y(t, t.return, h)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Ka(e) {
    for (; P !== null;) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Ga(e) {
    for (; P !== null;) {
        var t = P;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        To(4, t)
                    } catch (s) {
                        Y(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            Y(t, l, s)
                        }
                    }
                    var o = t.return;
                    try {
                        hu(t)
                    } catch (s) {
                        Y(t, o, s)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        hu(t)
                    } catch (s) {
                        Y(t, i, s)
                    }
            }
        } catch (s) {
            Y(t, t.return, s)
        }
        if (t === e) {
            P = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, P = u;
            break
        }
        P = t.return
    }
}
var lv = Math.ceil,
    lo = ht.ReactCurrentDispatcher,
    ds = ht.ReactCurrentOwner,
    Ue = ht.ReactCurrentBatchConfig,
    F = 0,
    re = null,
    J = null,
    se = 0,
    Re = 0,
    xn = Ut(0),
    ee = 0,
    br = null,
    nn = 0,
    Oo = 0,
    ps = 0,
    wr = null,
    ye = null,
    ms = 0,
    jn = 1 / 0,
    it = null,
    oo = !1,
    yu = null,
    Ft = null,
    fl = !1,
    Ct = null,
    io = 0,
    Sr = 0,
    wu = null,
    Tl = -1,
    Ol = 0;

function ve() {
    return F & 6 ? X() : Tl !== -1 ? Tl : Tl = X()
}

function $t(e) {
    return e.mode & 1 ? F & 2 && se !== 0 ? se & -se : Hh.transition !== null ? (Ol === 0 && (Ol = tf()), Ol) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : af(e.type)), e) : 1
}

function Ye(e, t, n, r) {
    if (50 < Sr) throw Sr = 0, wu = null, Error(C(185));
    Br(e, n, r), (!(F & 2) || e !== re) && (e === re && (!(F & 2) && (Oo |= n), ee === 4 && kt(e, se)), xe(e, r), n === 1 && F === 0 && !(t.mode & 1) && (jn = X() + 500, ko && Ht()))
}

function xe(e, t) {
    var n = e.callbackNode;
    Hm(e, t);
    var r = Bl(e, e === re ? se : 0);
    if (r === 0) n !== null && ra(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ra(n), t === 1) e.tag === 0 ? Uh(Ya.bind(null, e)) : Rf(Ya.bind(null, e)), Mh(function() {
            !(F & 6) && Ht()
        }), n = null;
        else {
            switch (nf(r)) {
                case 1:
                    n = Uu;
                    break;
                case 4:
                    n = qc;
                    break;
                case 16:
                    n = bl;
                    break;
                case 536870912:
                    n = ef;
                    break;
                default:
                    n = bl
            }
            n = Pd(n, Sd.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Sd(e, t) {
    if (Tl = -1, Ol = 0, F & 6) throw Error(C(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n) return null;
    var r = Bl(e, e === re ? se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
    else {
        t = r;
        var l = F;
        F |= 2;
        var o = kd();
        (re !== e || se !== t) && (it = null, jn = X() + 500, Xt(e, t));
        do try {
            uv();
            break
        } catch (u) {
            Ed(e, u)
        }
        while (!0);
        qu(), lo.current = o, F = l, J !== null ? t = 0 : (re = null, se = 0, t = ee)
    }
    if (t !== 0) {
        if (t === 2 && (l = Qi(e), l !== 0 && (r = l, t = Su(e, l))), t === 1) throw n = br, Xt(e, 0), kt(e, r), xe(e, X()), n;
        if (t === 6) kt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !ov(l) && (t = uo(e, r), t === 2 && (o = Qi(e), o !== 0 && (r = o, t = Su(e, o))), t === 1)) throw n = br, Xt(e, 0), kt(e, r), xe(e, X()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    Wt(e, ye, it);
                    break;
                case 3:
                    if (kt(e, r), (r & 130023424) === r && (t = ms + 500 - X(), 10 < t)) {
                        if (Bl(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ve(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = eu(Wt.bind(null, e, ye, it), t);
                        break
                    }
                    Wt(e, ye, it);
                    break;
                case 4:
                    if (kt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Ge(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lv(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = eu(Wt.bind(null, e, ye, it), r);
                        break
                    }
                    Wt(e, ye, it);
                    break;
                case 5:
                    Wt(e, ye, it);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return xe(e, X()), e.callbackNode === n ? Sd.bind(null, e) : null
}

function Su(e, t) {
    var n = wr;
    return e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256), e = uo(e, t), e !== 2 && (t = ye, ye = n, t !== null && Eu(t)), e
}

function Eu(e) {
    ye === null ? ye = e : ye.push.apply(ye, e)
}

function ov(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Xe(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function kt(e, t) {
    for (t &= ~ps, t &= ~Oo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ge(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ya(e) {
    if (F & 6) throw Error(C(327));
    _n();
    var t = Bl(e, 0);
    if (!(t & 1)) return xe(e, X()), null;
    var n = uo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qi(e);
        r !== 0 && (t = r, n = Su(e, r))
    }
    if (n === 1) throw n = br, Xt(e, 0), kt(e, t), xe(e, X()), n;
    if (n === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, ye, it), xe(e, X()), null
}

function hs(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n, F === 0 && (jn = X() + 500, ko && Ht())
    }
}

function rn(e) {
    Ct !== null && Ct.tag === 0 && !(F & 6) && _n();
    var t = F;
    F |= 1;
    var n = Ue.transition,
        r = z;
    try {
        if (Ue.transition = null, z = 1, e) return e()
    } finally {
        z = r, Ue.transition = n, F = t, !(F & 6) && Ht()
    }
}

function vs() {
    Re = xn.current, b(xn)
}

function Xt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Dh(n)), J !== null)
        for (n = J.return; n !== null;) {
            var r = n;
            switch (Xu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Gl();
                    break;
                case 3:
                    zn(), b(Ee), b(pe), os();
                    break;
                case 5:
                    ls(r);
                    break;
                case 4:
                    zn();
                    break;
                case 13:
                    b(Q);
                    break;
                case 19:
                    b(Q);
                    break;
                case 10:
                    es(r.type._context);
                    break;
                case 22:
                case 23:
                    vs()
            }
            n = n.return
        }
    if (re = e, J = e = It(e.current, null), se = Re = t, ee = 0, br = null, ps = Oo = nn = 0, ye = wr = null, Gt !== null) {
        for (t = 0; t < Gt.length; t++)
            if (n = Gt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            } Gt = null
    }
    return e
}

function Ed(e, t) {
    do {
        var n = J;
        try {
            if (qu(), kl.current = ro, no) {
                for (var r = K.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                no = !1
            }
            if (tn = 0, ne = q = K = null, gr = !1, jr = 0, ds.current = null, n === null || n.return === null) {
                ee = 1, br = t, J = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    s = t;
                if (t = se, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var a = s,
                        d = u,
                        m = d.tag;
                    if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = Ma(i);
                    if (y !== null) {
                        y.flags &= -257, za(y, i, u, o, t), y.mode & 1 && Da(o, a, t), t = y, s = a;
                        var g = t.updateQueue;
                        if (g === null) {
                            var S = new Set;
                            S.add(s), t.updateQueue = S
                        } else g.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Da(o, a, t), gs();
                            break e
                        }
                        s = Error(C(426))
                    }
                } else if (V && u.mode & 1) {
                    var k = Ma(i);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256), za(k, i, u, o, t), Zu(An(s, u));
                        break e
                    }
                }
                o = s = An(s, u),
                ee !== 4 && (ee = 2),
                wr === null ? wr = [o] : wr.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = ld(o, s, t);
                            Ra(o, f);
                            break e;
                        case 1:
                            u = s;
                            var c = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ft === null || !Ft.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = od(o, u, t);
                                Ra(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Cd(n)
        } catch (x) {
            t = x, J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (!0)
}

function kd() {
    var e = lo.current;
    return lo.current = ro, e === null ? ro : e
}

function gs() {
    (ee === 0 || ee === 3 || ee === 2) && (ee = 4), re === null || !(nn & 268435455) && !(Oo & 268435455) || kt(re, se)
}

function uo(e, t) {
    var n = F;
    F |= 2;
    var r = kd();
    (re !== e || se !== t) && (it = null, Xt(e, t));
    do try {
        iv();
        break
    } catch (l) {
        Ed(e, l)
    }
    while (!0);
    if (qu(), F = n, lo.current = r, J !== null) throw Error(C(261));
    return re = null, se = 0, ee
}

function iv() {
    for (; J !== null;) xd(J)
}

function uv() {
    for (; J !== null && !Fm();) xd(J)
}

function xd(e) {
    var t = Od(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps, t === null ? Cd(e) : J = t, ds.current = null
}

function Cd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ev(n, t), n !== null) {
                n.flags &= 32767, J = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ee = 6, J = null;
                return
            }
        } else if (n = qh(n, t, Re), n !== null) {
            J = n;
            return
        }
        if (t = t.sibling, t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    ee === 0 && (ee = 5)
}

function Wt(e, t, n) {
    var r = z,
        l = Ue.transition;
    try {
        Ue.transition = null, z = 1, sv(e, t, n, r)
    } finally {
        Ue.transition = l, z = r
    }
    return null
}

function sv(e, t, n, r) {
    do _n(); while (Ct !== null);
    if (F & 6) throw Error(C(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (bm(e, o), e === re && (J = re = null, se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || fl || (fl = !0, Pd(bl, function() {
            return _n(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ue.transition, Ue.transition = null;
        var i = z;
        z = 1;
        var u = F;
        F |= 4, ds.current = null, nv(e, n), yd(n, e), Rh(Ji), Vl = !!Zi, Ji = Zi = null, e.current = n, rv(n), $m(), F = u, z = i, Ue.transition = o
    } else e.current = n;
    if (fl && (fl = !1, Ct = e, io = l), o = e.pendingLanes, o === 0 && (Ft = null), Mm(n.stateNode), xe(e, X()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (oo) throw oo = !1, e = yu, yu = null, e;
    return io & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === wu ? Sr++ : (Sr = 0, wu = e) : Sr = 0, Ht(), null
}

function _n() {
    if (Ct !== null) {
        var e = nf(io),
            t = Ue.transition,
            n = z;
        try {
            if (Ue.transition = null, z = 16 > e ? 16 : e, Ct === null) var r = !1;
            else {
                if (e = Ct, Ct = null, io = 0, F & 6) throw Error(C(331));
                var l = F;
                for (F |= 4, P = e.current; P !== null;) {
                    var o = P,
                        i = o.child;
                    if (P.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (P = a; P !== null;) {
                                    var d = P;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            yr(8, d, o)
                                    }
                                    var m = d.child;
                                    if (m !== null) m.return = d, P = m;
                                    else
                                        for (; P !== null;) {
                                            d = P;
                                            var h = d.sibling,
                                                y = d.return;
                                            if (hd(d), d === a) {
                                                P = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, P = h;
                                                break
                                            }
                                            P = y
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var S = g.child;
                                if (S !== null) {
                                    g.child = null;
                                    do {
                                        var k = S.sibling;
                                        S.sibling = null, S = k
                                    } while (S !== null)
                                }
                            }
                            P = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, P = i;
                    else e: for (; P !== null;) {
                        if (o = P, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                yr(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, P = f;
                            break e
                        }
                        P = o.return
                    }
                }
                var c = e.current;
                for (P = c; P !== null;) {
                    i = P;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, P = p;
                    else e: for (i = c; P !== null;) {
                        if (u = P, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    To(9, u)
                            }
                        } catch (x) {
                            Y(u, u.return, x)
                        }
                        if (u === i) {
                            P = null;
                            break e
                        }
                        var w = u.sibling;
                        if (w !== null) {
                            w.return = u.return, P = w;
                            break e
                        }
                        P = u.return
                    }
                }
                if (F = l, Ht(), nt && typeof nt.onPostCommitFiberRoot == "function") try {
                    nt.onPostCommitFiberRoot(go, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            z = n, Ue.transition = t
        }
    }
    return !1
}

function Xa(e, t, n) {
    t = An(n, t), t = ld(e, t, 1), e = _t(e, t, 1), t = ve(), e !== null && (Br(e, 1, t), xe(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) Xa(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Xa(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = An(n, e), e = od(t, e, 1), t = _t(t, e, 1), e = ve(), t !== null && (Br(t, 1, e), xe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function av(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, re === e && (se & n) === n && (ee === 4 || ee === 3 && (se & 130023424) === se && 500 > X() - ms ? Xt(e, 0) : ps |= n), xe(e, t)
}

function Td(e, t) {
    t === 0 && (e.mode & 1 ? (t = tl, tl <<= 1, !(tl & 130023424) && (tl = 4194304)) : t = 1);
    var n = ve();
    e = pt(e, t), e !== null && (Br(e, t, n), xe(e, n))
}

function cv(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Td(e, n)
}

function fv(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(C(314))
    }
    r !== null && r.delete(t), Td(e, n)
}
var Od;
Od = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) we = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return we = !1, Jh(e, t, n);
            we = !!(e.flags & 131072)
        }
    else we = !1, V && t.flags & 1048576 && Nf(t, Zl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Cl(e, t), e = t.pendingProps;
            var l = In(t, pe.current);
            Ln(t, n), l = us(null, t, r, e, l, n);
            var o = ss();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, Yl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ns(t), l.updater = xo, t.stateNode = l, l._reactInternals = t, uu(t, r, e, n), t = cu(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Yu(t), he(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pv(r), e = Ve(r, e), l) {
                    case 0:
                        t = au(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ua(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Aa(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ja(null, t, r, Ve(r.type, e), n);
                        break e
                }
                throw Error(C(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), au(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Ua(e, t, r, l, n);
        case 3:
            e: {
                if (ad(t), e === null) throw Error(C(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                $f(e, t),
                eo(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = An(Error(C(423)), t), t = Ha(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = An(Error(C(424)), t), t = Ha(e, t, r, n, l);
                    break e
                } else
                    for (Le = Lt(t.stateNode.containerInfo.firstChild), _e = t, V = !0, Qe = null, n = zf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Dn(), r === l) {
                        t = mt(e, t, n);
                        break e
                    }
                    he(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Af(t), e === null && lu(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, qi(r, l) ? i = null : o !== null && qi(r, o) && (t.flags |= 32), sd(e, t), he(e, t, i, n), t.child;
        case 6:
            return e === null && lu(t), null;
        case 13:
            return cd(e, t, n);
        case 4:
            return rs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Mn(t, null, r, n) : he(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Aa(e, t, r, l, n);
        case 7:
            return he(e, t, t.pendingProps, n), t.child;
        case 8:
            return he(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return he(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, j(Jl, r._currentValue), r._currentValue = i, o !== null)
                    if (Xe(o.value, i)) {
                        if (o.children === l.children && !Ee.current) {
                            t = mt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var s = u.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            s = ct(-1, n & -n), s.tag = 2;
                                            var a = o.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var d = a.pending;
                                                d === null ? s.next = s : (s.next = d.next, d.next = s), a.pending = s
                                            }
                                        }
                                        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), ou(o.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(C(341));
                                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ou(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                he(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Ln(t, n), l = He(l), r = r(l), t.flags |= 1, he(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Ve(r, t.pendingProps), l = Ve(r.type, l), ja(e, t, r, l, n);
        case 15:
            return id(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ve(r, l), Cl(e, t), t.tag = 1, ke(r) ? (e = !0, Yl(t)) : e = !1, Ln(t, n), Df(t, r, l), uu(t, r, l, n), cu(null, t, r, !0, e, n);
        case 19:
            return fd(e, t, n);
        case 22:
            return ud(e, t, n)
    }
    throw Error(C(156, t.tag))
};

function Pd(e, t) {
    return Jc(e, t)
}

function dv(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new dv(e, t, n, r)
}

function ys(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function pv(e) {
    if (typeof e == "function") return ys(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === zu) return 11;
        if (e === Au) return 14
    }
    return 2
}

function It(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Pl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") ys(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case pn:
            return Zt(n.children, l, o, t);
        case Mu:
            i = 8, l |= 8;
            break;
        case _i:
            return e = je(12, n, t, l | 2), e.elementType = _i, e.lanes = o, e;
        case Fi:
            return e = je(13, n, t, l), e.elementType = Fi, e.lanes = o, e;
        case $i:
            return e = je(19, n, t, l), e.elementType = $i, e.lanes = o, e;
        case Dc:
            return Po(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case $c:
                    i = 10;
                    break e;
                case Ic:
                    i = 9;
                    break e;
                case zu:
                    i = 11;
                    break e;
                case Au:
                    i = 14;
                    break e;
                case wt:
                    i = 16, r = null;
                    break e
            }
            throw Error(C(130, e == null ? e : typeof e, ""))
    }
    return t = je(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function Zt(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function Po(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function di(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function pi(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function mv(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ko(0), this.expirationTimes = Ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ko(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function ws(e, t, n, r, l, o, i, u, s) {
    return e = new mv(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ns(o), e
}

function hv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: dn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Rd(e) {
    if (!e) return zt;
    e = e._reactInternals;
    e: {
        if (on(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ke(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ke(n)) return Pf(e, n, t)
    }
    return t
}

function Nd(e, t, n, r, l, o, i, u, s) {
    return e = ws(n, r, !0, e, l, o, i, u, s), e.context = Rd(null), n = e.current, r = ve(), l = $t(n), o = ct(r, l), o.callback = t ?? null, _t(n, o, l), e.current.lanes = l, Br(e, l, r), xe(e, r), e
}

function Ro(e, t, n, r) {
    var l = t.current,
        o = ve(),
        i = $t(l);
    return n = Rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = _t(l, t, i), e !== null && (Ye(e, l, i, o), El(e, l, i)), i
}

function so(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Za(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ss(e, t) {
    Za(e, t), (e = e.alternate) && Za(e, t)
}

function vv() {
    return null
}
var Ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Es(e) {
    this._internalRoot = e
}
No.prototype.render = Es.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Ro(e, t, null, null)
};
No.prototype.unmount = Es.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rn(function() {
            Ro(null, e, null, null)
        }), t[dt] = null
    }
};

function No(e) {
    this._internalRoot = e
}
No.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = of();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
        Et.splice(n, 0, e), n === 0 && sf(e)
    }
};

function ks(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ja() {}

function gv(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var a = so(i);
                o.call(a)
            }
        }
        var i = Nd(t, r, e, 0, null, !1, !1, "", Ja);
        return e._reactRootContainer = i, e[dt] = i.current, Ir(e.nodeType === 8 ? e.parentNode : e), rn(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var a = so(s);
            u.call(a)
        }
    }
    var s = ws(e, 0, !1, null, null, !1, !1, "", Ja);
    return e._reactRootContainer = s, e[dt] = s.current, Ir(e.nodeType === 8 ? e.parentNode : e), rn(function() {
        Ro(t, s, n, r)
    }), s
}

function _o(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = so(i);
                u.call(s)
            }
        }
        Ro(t, i, e, l)
    } else i = gv(n, t, e, l, r);
    return so(i)
}
rf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = sr(t.pendingLanes);
                n !== 0 && (Hu(t, n | 1), xe(t, X()), !(F & 6) && (jn = X() + 500, Ht()))
            }
            break;
        case 13:
            rn(function() {
                var r = pt(e, 1);
                if (r !== null) {
                    var l = ve();
                    Ye(r, e, 1, l)
                }
            }), Ss(e, 1)
    }
};
bu = function(e) {
    if (e.tag === 13) {
        var t = pt(e, 134217728);
        if (t !== null) {
            var n = ve();
            Ye(t, e, 134217728, n)
        }
        Ss(e, 134217728)
    }
};
lf = function(e) {
    if (e.tag === 13) {
        var t = $t(e),
            n = pt(e, t);
        if (n !== null) {
            var r = ve();
            Ye(n, e, t, r)
        }
        Ss(e, t)
    }
};
of = function() {
    return z
};
uf = function(e, t) {
    var n = z;
    try {
        return z = e, t()
    } finally {
        z = n
    }
};
Bi = function(e, t, n) {
    switch (t) {
        case "input":
            if (Mi(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Eo(r);
                        if (!l) throw Error(C(90));
                        zc(r), Mi(r, l)
                    }
                }
            }
            break;
        case "textarea":
            jc(e, n);
            break;
        case "select":
            t = n.value, t != null && On(e, !!n.multiple, t, !1)
    }
};
Qc = hs;
Kc = rn;
var yv = {
        usingClientEntryPoint: !1,
        Events: [Wr, gn, Eo, Vc, Wc, hs]
    },
    nr = {
        findFiberByHostInstance: Kt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    wv = {
        bundleType: nr.bundleType,
        version: nr.version,
        rendererPackageName: nr.rendererPackageName,
        rendererConfig: nr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Xc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: nr.findFiberByHostInstance || vv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dl.isDisabled && dl.supportsFiber) try {
        go = dl.inject(wv), nt = dl
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
Ie.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ks(t)) throw Error(C(200));
    return hv(e, t, null, n)
};
Ie.createRoot = function(e, t) {
    if (!ks(e)) throw Error(C(299));
    var n = !1,
        r = "",
        l = Ld;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ws(e, 1, !1, null, null, n, !1, r, l), e[dt] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new Es(t)
};
Ie.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
    return e = Xc(t), e = e === null ? null : e.stateNode, e
};
Ie.flushSync = function(e) {
    return rn(e)
};
Ie.hydrate = function(e, t, n) {
    if (!Lo(t)) throw Error(C(200));
    return _o(null, e, t, !0, n)
};
Ie.hydrateRoot = function(e, t, n) {
    if (!ks(e)) throw Error(C(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = Ld;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Nd(t, null, e, 1, n ?? null, l, !1, o, i), e[dt] = t.current, Ir(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new No(t)
};
Ie.render = function(e, t, n) {
    if (!Lo(t)) throw Error(C(200));
    return _o(null, e, t, !1, n)
};
Ie.unmountComponentAtNode = function(e) {
    if (!Lo(e)) throw Error(C(40));
    return e._reactRootContainer ? (rn(function() {
        _o(null, null, e, !1, function() {
            e._reactRootContainer = null, e[dt] = null
        })
    }), !0) : !1
};
Ie.unstable_batchedUpdates = hs;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Lo(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return _o(e, t, n, !1, r)
};
Ie.version = "18.2.0-next-9e3b772b8-20220608";

function _d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d)
    } catch (e) {
        console.error(e)
    }
}
_d(), Lc.exports = Ie;
var Fd = Lc.exports,
    Sv, qa = Fd;
Sv = qa.createRoot, qa.hydrateRoot;
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ku() {
    return ku = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ku.apply(this, arguments)
}

function Ev(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, o;
    for (o = 0; o < r.length; o++) l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function kv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function xv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !kv(e)
}
const Cv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Tv = "startTransition",
    ao = xi[Tv];

function l0(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: l
    } = e, o = v.useRef();
    o.current == null && (o.current = vp({
        window: l,
        v5Compat: !0
    }));
    let i = o.current,
        [u, s] = v.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: a
        } = r || {},
        d = v.useCallback(m => {
            a && ao ? ao(() => s(m)) : s(m)
        }, [s, a]);
    return v.useLayoutEffect(() => i.listen(d), [i, d]), v.createElement(vc, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: i,
        future: r
    })
}

function o0(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: l
    } = e, o = v.useRef();
    o.current == null && (o.current = gp({
        window: l,
        v5Compat: !0
    }));
    let i = o.current,
        [u, s] = v.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: a
        } = r || {},
        d = v.useCallback(m => {
            a && ao ? ao(() => s(m)) : s(m)
        }, [s, a]);
    return v.useLayoutEffect(() => i.listen(d), [i, d]), v.createElement(vc, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: i,
        future: r
    })
}
const Ov = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Pv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    i0 = v.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: o,
            replace: i,
            state: u,
            target: s,
            to: a,
            preventScrollReset: d,
            unstable_viewTransition: m
        } = t, h = Ev(t, Cv), {
            basename: y
        } = v.useContext(cp), g, S = !1;
        if (typeof a == "string" && Pv.test(a) && (g = a, Ov)) try {
            let p = new URL(window.location.href),
                w = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a),
                x = fp(w.pathname, y);
            w.origin === p.origin && x != null ? a = x + w.search + w.hash : S = !0
        } catch {}
        let k = dp(a, {
                relative: l
            }),
            f = Rv(a, {
                replace: i,
                state: u,
                target: s,
                preventScrollReset: d,
                relative: l,
                unstable_viewTransition: m
            });

        function c(p) {
            r && r(p), p.defaultPrevented || f(p)
        }
        return v.createElement("a", ku({}, h, {
            href: g || k,
            onClick: S || o ? r : c,
            ref: n,
            target: s
        }))
    });
var ec;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(ec || (ec = {}));
var tc;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(tc || (tc = {}));

function Rv(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: u
    } = t === void 0 ? {} : t, s = pp(), a = mp(), d = hp(e, {
        relative: i
    });
    return v.useCallback(m => {
        if (xv(m, n)) {
            m.preventDefault();
            let h = r !== void 0 ? r : zs(a) === zs(d);
            s(e, {
                replace: h,
                state: l,
                preventScrollReset: o,
                relative: i,
                unstable_viewTransition: u
            })
        }
    }, [a, s, d, r, l, n, e, o, i, u])
}

function $d() {
    var e = v.useRef(!1),
        t = v.useCallback(function() {
            return e.current
        }, []);
    return v.useEffect(function() {
        return e.current = !0,
            function() {
                e.current = !1
            }
    }, []), t
}

function Nv(e, t, n) {
    t === void 0 && (t = []), n === void 0 && (n = {
        loading: !1
    });
    var r = v.useRef(0),
        l = $d(),
        o = v.useState(n),
        i = o[0],
        u = o[1],
        s = v.useCallback(function() {
            for (var a = [], d = 0; d < arguments.length; d++) a[d] = arguments[d];
            var m = ++r.current;
            return i.loading || u(function(h) {
                return As(As({}, h), {
                    loading: !0
                })
            }), e.apply(void 0, a).then(function(h) {
                return l() && m === r.current && u({
                    value: h,
                    loading: !1
                }), h
            }, function(h) {
                return l() && m === r.current && u({
                    error: h,
                    loading: !1
                }), h
            })
        }, t);
    return [i, s]
}

function u0(e, t) {
    t === void 0 && (t = []);
    var n = Nv(e, t, {
            loading: !0
        }),
        r = n[0],
        l = n[1];
    return v.useEffect(function() {
        l()
    }, [l]), r
}
var Lv = function(e) {
        e === void 0 && (e = {});
        var t = v.useState(e),
            n = t[0],
            r = t[1],
            l = v.useCallback(function(o) {
                r(function(i) {
                    return Object.assign({}, i, o instanceof Function ? o(i) : o)
                })
            }, []);
        return [n, l]
    },
    _v = function() {};

function Fv(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    e && e.addEventListener && e.addEventListener.apply(e, t)
}

function $v(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    e && e.removeEventListener && e.removeEventListener.apply(e, t)
}
var Er = typeof window < "u",
    s0 = function() {
        var e = $d(),
            t = Lv({
                value: void 0,
                error: void 0,
                noUserInteraction: !0
            }),
            n = t[0],
            r = t[1],
            l = v.useCallback(function(o) {
                if (e()) {
                    var i, u;
                    try {
                        if (typeof o != "string" && typeof o != "number") {
                            var s = new Error("Cannot copy typeof " + typeof o + " to clipboard, must be a string");
                            r({
                                value: o,
                                error: s,
                                noUserInteraction: !0
                            });
                            return
                        } else if (o === "") {
                            var s = new Error("Cannot copy empty string to clipboard.");
                            r({
                                value: o,
                                error: s,
                                noUserInteraction: !0
                            });
                            return
                        }
                        u = o.toString(), i = yp(u), r({
                            value: u,
                            error: void 0,
                            noUserInteraction: i
                        })
                    } catch (a) {
                        r({
                            value: u,
                            error: a,
                            noUserInteraction: i
                        })
                    }
                }
            }, []);
        return [n, l]
    },
    Iv = Er ? v.useLayoutEffect : v.useEffect;

function a0(e, t) {
    t === void 0 && (t = 0);
    var n = v.useRef(!1),
        r = v.useRef(),
        l = v.useRef(e),
        o = v.useCallback(function() {
            return n.current
        }, []),
        i = v.useCallback(function() {
            n.current = !1, r.current && clearTimeout(r.current), r.current = setTimeout(function() {
                n.current = !0, l.current()
            }, t)
        }, [t]),
        u = v.useCallback(function() {
            n.current = null, r.current && clearTimeout(r.current)
        }, []);
    return v.useEffect(function() {
        l.current = e
    }, [e]), v.useEffect(function() {
        return i(), u
    }, [t]), [o, u, i]
}
var Dv = function(e) {
        v.useEffect(e, [])
    },
    c0 = function(e, t) {
        var n = v.useRef(function() {});
        v.useEffect(function() {
            n.current = e
        }), v.useEffect(function() {
            if (t !== null) {
                var r = setInterval(function() {
                    return n.current()
                }, t || 0);
                return function() {
                    return clearInterval(r)
                }
            }
        }, [t])
    },
    Mv = function(e) {
        var t = v.useRef(e);
        t.current = e, Dv(function() {
            return function() {
                return t.current()
            }
        })
    },
    zv = function(e) {
        var t = v.useRef(0),
            n = v.useState(e),
            r = n[0],
            l = n[1],
            o = v.useCallback(function(i) {
                cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function() {
                    l(i)
                })
            }, []);
        return Mv(function() {
            cancelAnimationFrame(t.current)
        }), [r, o]
    },
    f0 = function(e, t) {
        e === void 0 && (e = 1 / 0), t === void 0 && (t = 1 / 0);
        var n = zv({
                width: Er ? window.innerWidth : e,
                height: Er ? window.innerHeight : t
            }),
            r = n[0],
            l = n[1];
        return v.useEffect(function() {
            if (Er) {
                var o = function() {
                    l({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                };
                return Fv(window, "resize", o),
                    function() {
                        $v(window, "resize", o)
                    }
            }
        }, []), r
    },
    Id = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };

function Av() {
    var e = v.useState(null),
        t = e[0],
        n = e[1],
        r = v.useState(Id),
        l = r[0],
        o = r[1],
        i = v.useMemo(function() {
            return new window.ResizeObserver(function(u) {
                if (u[0]) {
                    var s = u[0].contentRect,
                        a = s.x,
                        d = s.y,
                        m = s.width,
                        h = s.height,
                        y = s.top,
                        g = s.left,
                        S = s.bottom,
                        k = s.right;
                    o({
                        x: a,
                        y: d,
                        width: m,
                        height: h,
                        top: y,
                        left: g,
                        bottom: S,
                        right: k
                    })
                }
            })
        }, []);
    return Iv(function() {
        if (t) return i.observe(t),
            function() {
                i.disconnect()
            }
    }, [t]), [n, l]
}
const d0 = Er && typeof window.ResizeObserver < "u" ? Av : function() {
    return [_v, Id]
};

function Un(e) {
    "@babel/helpers - typeof";
    return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Un(e)
}

function jv(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function nc(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Dd(r.key), r)
    }
}

function Uv(e, t, n) {
    return t && nc(e.prototype, t), n && nc(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Hv(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && xu(e, t)
}

function xu(e, t) {
    return xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, l) {
        return r.__proto__ = l, r
    }, xu(e, t)
}

function bv(e) {
    var t = Vv();
    return function() {
        var r = co(e),
            l;
        if (t) {
            var o = co(this).constructor;
            l = Reflect.construct(r, arguments, o)
        } else l = r.apply(this, arguments);
        return Bv(this, l)
    }
}

function Bv(e, t) {
    if (t && (Un(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return cr(e)
}

function cr(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Vv() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function co(e) {
    return co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, co(e)
}

function Wv(e, t, n) {
    return t = Dd(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Dd(e) {
    var t = Qv(e, "string");
    return Un(t) === "symbol" ? t : String(t)
}

function Qv(e, t) {
    if (Un(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Un(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var pl = v,
    N = wp,
    Kv = Sp,
    Gv = Kv.createFocusTrap,
    Yv = Ep,
    Xv = Yv.isFocusable,
    xs = function(e) {
        Hv(n, e);
        var t = bv(n);

        function n(r) {
            var l;
            jv(this, n), l = t.call(this, r), Wv(cr(l), "getNodeForOption", function(u) {
                var s, a = (s = this.internalOptions[u]) !== null && s !== void 0 ? s : this.originalOptions[u];
                if (typeof a == "function") {
                    for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++) m[h - 1] = arguments[h];
                    a = a.apply(void 0, m)
                }
                if (a === !0 && (a = void 0), !a) {
                    if (a === void 0 || a === !1) return a;
                    throw new Error("`".concat(u, "` was specified but was not a node, or did not return a node"))
                }
                var y = a;
                if (typeof a == "string") {
                    var g;
                    if (y = (g = this.getDocument()) === null || g === void 0 ? void 0 : g.querySelector(a), !y) throw new Error("`".concat(u, "` as selector refers to no known node"))
                }
                return y
            }), l.handleDeactivate = l.handleDeactivate.bind(cr(l)), l.handlePostDeactivate = l.handlePostDeactivate.bind(cr(l)), l.handleClickOutsideDeactivates = l.handleClickOutsideDeactivates.bind(cr(l)), l.internalOptions = {
                returnFocusOnDeactivate: !1,
                checkCanReturnFocus: null,
                onDeactivate: l.handleDeactivate,
                onPostDeactivate: l.handlePostDeactivate,
                clickOutsideDeactivates: l.handleClickOutsideDeactivates
            }, l.originalOptions = {
                returnFocusOnDeactivate: !0,
                onDeactivate: null,
                onPostDeactivate: null,
                checkCanReturnFocus: null,
                clickOutsideDeactivates: !1
            };
            var o = r.focusTrapOptions;
            for (var i in o)
                if (Object.prototype.hasOwnProperty.call(o, i)) {
                    if (i === "returnFocusOnDeactivate" || i === "onDeactivate" || i === "onPostDeactivate" || i === "checkCanReturnFocus" || i === "clickOutsideDeactivates") {
                        l.originalOptions[i] = o[i];
                        continue
                    }
                    l.internalOptions[i] = o[i]
                } return l.outsideClick = null, l.focusTrapElements = r.containerElements || [], l.updatePreviousElement(), l
        }
        return Uv(n, [{
            key: "getDocument",
            value: function() {
                return this.props.focusTrapOptions.document || (typeof document < "u" ? document : void 0)
            }
        }, {
            key: "getReturnFocusNode",
            value: function() {
                var l = this.getNodeForOption("setReturnFocus", this.previouslyFocusedElement);
                return l || (l === !1 ? !1 : this.previouslyFocusedElement)
            }
        }, {
            key: "updatePreviousElement",
            value: function() {
                var l = this.getDocument();
                l && (this.previouslyFocusedElement = l.activeElement)
            }
        }, {
            key: "deactivateTrap",
            value: function() {
                !this.focusTrap || !this.focusTrap.active || this.focusTrap.deactivate({
                    returnFocus: !1,
                    checkCanReturnFocus: null,
                    onDeactivate: this.originalOptions.onDeactivate
                })
            }
        }, {
            key: "handleClickOutsideDeactivates",
            value: function(l) {
                var o = typeof this.originalOptions.clickOutsideDeactivates == "function" ? this.originalOptions.clickOutsideDeactivates.call(null, l) : this.originalOptions.clickOutsideDeactivates;
                return o && (this.outsideClick = {
                    target: l.target,
                    allowDeactivation: o
                }), o
            }
        }, {
            key: "handleDeactivate",
            value: function() {
                this.originalOptions.onDeactivate && this.originalOptions.onDeactivate.call(null), this.deactivateTrap()
            }
        }, {
            key: "handlePostDeactivate",
            value: function() {
                var l = this,
                    o = function() {
                        var u = l.getReturnFocusNode(),
                            s = !!(l.originalOptions.returnFocusOnDeactivate && u !== null && u !== void 0 && u.focus && (!l.outsideClick || l.outsideClick.allowDeactivation && !Xv(l.outsideClick.target, l.internalOptions.tabbableOptions))),
                            a = l.internalOptions.preventScroll,
                            d = a === void 0 ? !1 : a;
                        s && u.focus({
                            preventScroll: d
                        }), l.originalOptions.onPostDeactivate && l.originalOptions.onPostDeactivate.call(null), l.outsideClick = null
                    };
                this.originalOptions.checkCanReturnFocus ? this.originalOptions.checkCanReturnFocus.call(null, this.getReturnFocusNode()).then(o, o) : o()
            }
        }, {
            key: "setupFocusTrap",
            value: function() {
                if (this.focusTrap) this.props.active && !this.focusTrap.active && (this.focusTrap.activate(), this.props.paused && this.focusTrap.pause());
                else {
                    var l = this.focusTrapElements.some(Boolean);
                    l && (this.focusTrap = this.props._createFocusTrap(this.focusTrapElements, this.internalOptions), this.props.active && this.focusTrap.activate(), this.props.paused && this.focusTrap.pause())
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.active && this.setupFocusTrap()
            }
        }, {
            key: "componentDidUpdate",
            value: function(l) {
                if (this.focusTrap) {
                    l.containerElements !== this.props.containerElements && this.focusTrap.updateContainerElements(this.props.containerElements);
                    var o = !l.active && this.props.active,
                        i = l.active && !this.props.active,
                        u = !l.paused && this.props.paused,
                        s = l.paused && !this.props.paused;
                    if (o && (this.updatePreviousElement(), this.focusTrap.activate()), i) {
                        this.deactivateTrap();
                        return
                    }
                    u && this.focusTrap.pause(), s && this.focusTrap.unpause()
                } else l.containerElements !== this.props.containerElements && (this.focusTrapElements = this.props.containerElements), this.props.active && (this.updatePreviousElement(), this.setupFocusTrap())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.deactivateTrap()
            }
        }, {
            key: "render",
            value: function() {
                var l = this,
                    o = this.props.children ? pl.Children.only(this.props.children) : void 0;
                if (o) {
                    if (o.type && o.type === pl.Fragment) throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");
                    var i = function(a) {
                            var d = l.props.containerElements;
                            o && (typeof o.ref == "function" ? o.ref(a) : o.ref && (o.ref.current = a)), l.focusTrapElements = d || [a]
                        },
                        u = pl.cloneElement(o, {
                            ref: i
                        });
                    return u
                }
                return null
            }
        }]), n
    }(pl.Component),
    rr = typeof Element > "u" ? Function : Element;
xs.propTypes = {
    active: N.bool,
    paused: N.bool,
    focusTrapOptions: N.shape({
        document: N.object,
        onActivate: N.func,
        onPostActivate: N.func,
        checkCanFocusTrap: N.func,
        onPause: N.func,
        onPostPause: N.func,
        onUnpause: N.func,
        onPostUnpause: N.func,
        onDeactivate: N.func,
        onPostDeactivate: N.func,
        checkCanReturnFocus: N.func,
        initialFocus: N.oneOfType([N.instanceOf(rr), N.string, N.bool, N.func]),
        fallbackFocus: N.oneOfType([N.instanceOf(rr), N.string, N.func]),
        escapeDeactivates: N.oneOfType([N.bool, N.func]),
        clickOutsideDeactivates: N.oneOfType([N.bool, N.func]),
        returnFocusOnDeactivate: N.bool,
        setReturnFocus: N.oneOfType([N.instanceOf(rr), N.string, N.bool, N.func]),
        allowOutsideClick: N.oneOfType([N.bool, N.func]),
        preventScroll: N.bool,
        tabbableOptions: N.shape({
            displayCheck: N.oneOf(["full", "legacy-full", "non-zero-area", "none"]),
            getShadowRoot: N.oneOfType([N.bool, N.func])
        }),
        trapStack: N.array,
        isKeyForward: N.func,
        isKeyBackward: N.func
    }),
    containerElements: N.arrayOf(N.instanceOf(rr)),
    children: N.oneOfType([N.element, N.instanceOf(rr)])
};
xs.defaultProps = {
    active: !0,
    paused: !1,
    focusTrapOptions: {},
    _createFocusTrap: Gv
};
var Zv = xs;
const p0 = lp(Zv);
var Jv = Object.defineProperty,
    qv = (e, t, n) => t in e ? Jv(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    mi = (e, t, n) => (qv(e, typeof t != "symbol" ? t + "" : t, n), n);
let eg = class {
        constructor() {
            mi(this, "current", this.detect()), mi(this, "handoffState", "pending"), mi(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    Jt = new eg,
    $e = (e, t) => {
        Jt.isServer ? v.useEffect(e, t) : v.useLayoutEffect(e, t)
    };

function lt(e) {
    let t = v.useRef(e);
    return $e(() => {
        t.current = e
    }, [e]), t
}

function Md(e, t) {
    let [n, r] = v.useState(e), l = lt(e);
    return $e(() => r(l.current), [l, r, ...t]), n
}

function tg(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function At() {
    let e = [],
        t = {
            addEventListener(n, r, l, o) {
                return n.addEventListener(r, l, o), t.add(() => n.removeEventListener(r, l, o))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return tg(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let o = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: o
                    })
                })
            },
            group(n) {
                let r = At();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Hn() {
    let [e] = v.useState(At);
    return v.useEffect(() => () => e.dispose(), [e]), e
}
let $ = function(e) {
    let t = lt(e);
    return M.useCallback((...n) => t.current(...n), [t])
};

function ng() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in xi ? (t => t.useSyncExternalStore)(xi)(() => () => {}, () => !1, () => !e) : !1
}

function Cs() {
    let e = ng(),
        [t, n] = v.useState(Jt.isHandoffComplete);
    return t && Jt.isHandoffComplete === !1 && n(!1), v.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), v.useEffect(() => Jt.handoff(), []), e ? !1 : t
}
var rc;
let Fo = (rc = M.useId) != null ? rc : function() {
    let e = Cs(),
        [t, n] = M.useState(e ? () => Jt.nextId() : null);
    return $e(() => {
        t === null && n(Jt.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function ue(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ue), r
}

function zd(e) {
    return Jt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let lc = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var rg = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(rg || {}),
    lg = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lg || {}),
    og = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(og || {}),
    Ts = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ts || {});

function Ad(e, t = 0) {
    var n;
    return e === ((n = zd(e)) == null ? void 0 : n.body) ? !1 : ue(t, {
        0() {
            return e.matches(lc)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(lc)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var ig = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ig || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function ug(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            o = t(r);
        if (l === null || o === null) return 0;
        let i = l.compareDocumentPosition(o);
        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function ml(e, t, n) {
    let r = lt(t);
    v.useEffect(() => {
        function l(o) {
            r.current(o)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function sg(e, t, n) {
    let r = lt(t);
    v.useEffect(() => {
        function l(o) {
            r.current(o)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function ag(e, t, n = !0) {
    let r = v.useRef(!1);
    v.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(i, u) {
        if (!r.current || i.defaultPrevented) return;
        let s = u(i);
        if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
        let a = function d(m) {
            return typeof m == "function" ? d(m()) : Array.isArray(m) || m instanceof Set ? m : [m]
        }(e);
        for (let d of a) {
            if (d === null) continue;
            let m = d instanceof HTMLElement ? d : d.current;
            if (m != null && m.contains(s) || i.composed && i.composedPath().includes(m)) return
        }
        return !Ad(s, Ts.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s)
    }
    let o = v.useRef(null);
    ml("pointerdown", i => {
        var u, s;
        r.current && (o.current = ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null ? void 0 : s[0]) || i.target)
    }, !0), ml("mousedown", i => {
        var u, s;
        r.current && (o.current = ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null ? void 0 : s[0]) || i.target)
    }, !0), ml("click", i => {
        o.current && (l(i, () => o.current), o.current = null)
    }, !0), ml("touchend", i => l(i, () => i.target instanceof HTMLElement ? i.target : null), !0), sg("blur", i => l(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function oc(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function cg(e, t) {
    let [n, r] = v.useState(() => oc(e));
    return $e(() => {
        r(oc(e))
    }, [e.type, e.as]), $e(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let fg = Symbol();

function un(...e) {
    let t = v.useRef(e);
    v.useEffect(() => {
        t.current = e
    }, [e]);
    let n = $(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[fg])) ? void 0 : n
}

function dg(e) {
    throw new Error("Unexpected object: " + e)
}
var Se = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Se || {});

function pg(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0) return null;
    let r = t.resolveActiveIndex(),
        l = r ?? -1,
        o = (() => {
            switch (e.focus) {
                case 0:
                    return n.findIndex(i => !t.resolveDisabled(i));
                case 1: {
                    let i = n.slice().reverse().findIndex((u, s, a) => l !== -1 && a.length - s - 1 >= l ? !1 : !t.resolveDisabled(u));
                    return i === -1 ? i : n.length - 1 - i
                }
                case 2:
                    return n.findIndex((i, u) => u <= l ? !1 : !t.resolveDisabled(i));
                case 3: {
                    let i = n.slice().reverse().findIndex(u => !t.resolveDisabled(u));
                    return i === -1 ? i : n.length - 1 - i
                }
                case 4:
                    return n.findIndex(i => t.resolveId(i) === e.id);
                case 5:
                    return null;
                default:
                    dg(e)
            }
        })();
    return o === -1 ? r : o
}

function fo(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var po = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(po || {}),
    Tt = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Tt || {});

function bt({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: o = !0,
    name: i
}) {
    let u = jd(t, e);
    if (o) return hl(u, n, r, i);
    let s = l ?? 0;
    if (s & 2) {
        let {
            static: a = !1,
            ...d
        } = u;
        if (a) return hl(d, n, r, i)
    }
    if (s & 1) {
        let {
            unmount: a = !0,
            ...d
        } = u;
        return ue(a ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return hl({
                    ...d,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, i)
            }
        })
    }
    return hl(u, n, r, i)
}

function hl(e, t = {}, n, r) {
    let {
        as: l = n,
        children: o,
        refName: i = "ref",
        ...u
    } = hi(e, ["unmount", "static"]), s = e.ref !== void 0 ? {
        [i]: e.ref
    } : {}, a = typeof o == "function" ? o(t) : o;
    "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
    let d = {};
    if (t) {
        let m = !1,
            h = [];
        for (let [y, g] of Object.entries(t)) typeof g == "boolean" && (m = !0), g === !0 && h.push(y);
        m && (d["data-headlessui-state"] = h.join(" "))
    }
    if (l === v.Fragment && Object.keys(Cu(u)).length > 0) {
        if (!v.isValidElement(a) || Array.isArray(a) && a.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(g => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(g => `  - ${g}`).join(`
`)].join(`
`));
        let m = a.props,
            h = typeof(m == null ? void 0 : m.className) == "function" ? (...g) => fo(m == null ? void 0 : m.className(...g), u.className) : fo(m == null ? void 0 : m.className, u.className),
            y = h ? {
                className: h
            } : {};
        return v.cloneElement(a, Object.assign({}, jd(a.props, Cu(hi(u, ["ref"]))), d, s, mg(a.ref, s.ref), y))
    }
    return v.createElement(l, Object.assign({}, hi(u, ["ref"]), l !== v.Fragment && s, l !== v.Fragment && d), a)
}

function mg(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
        }
    }
}

function jd(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...o) {
            let i = n[r];
            for (let u of i) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                u(l, ...o)
            }
        }
    });
    return t
}

function vt(e) {
    var t;
    return Object.assign(v.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function Cu(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function hi(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}

function hg(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && vg(n) ? !1 : r
}

function vg(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}

function Ud(e = {}, t = null, n = []) {
    for (let [r, l] of Object.entries(e)) bd(n, Hd(t, r), l);
    return n
}

function Hd(e, t) {
    return e ? e + "[" + t + "]" : t
}

function bd(e, t, n) {
    if (Array.isArray(n))
        for (let [r, l] of n.entries()) bd(e, Hd(t, r.toString()), l);
    else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Ud(n, t, e)
}
let gg = "div";
var Bd = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Bd || {});

function yg(e, t) {
    let {
        features: n = 1,
        ...r
    } = e, l = {
        ref: t,
        "aria-hidden": (n & 2) === 2 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(n & 4) === 4 && (n & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return bt({
        ourProps: l,
        theirProps: r,
        slot: {},
        defaultTag: gg,
        name: "Hidden"
    })
}
let wg = vt(yg),
    Os = v.createContext(null);
Os.displayName = "OpenClosedContext";
var Ne = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ne || {});

function Ps() {
    return v.useContext(Os)
}

function Vd({
    value: e,
    children: t
}) {
    return M.createElement(Os.Provider, {
        value: e
    }, t)
}
var te = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(te || {});

function Sg(e, t, n) {
    let [r, l] = v.useState(n), o = e !== void 0, i = v.useRef(o), u = v.useRef(!1), s = v.useRef(!1);
    return o && !i.current && !u.current ? (u.current = !0, i.current = o, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !o && i.current && !s.current && (s.current = !0, i.current = o, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [o ? e : r, $(a => (o || l(a), t == null ? void 0 : t(a)))]
}

function ic(e) {
    return [e.screenX, e.screenY]
}

function Eg() {
    let e = v.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let n = ic(t);
            return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
        },
        update(t) {
            e.current = ic(t)
        }
    }
}

function Rs() {
    let e = v.useRef(!1);
    return $e(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}
let uc = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function sc(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : "",
        l = e.cloneNode(!0);
    if (!(l instanceof HTMLElement)) return r;
    let o = !1;
    for (let u of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) u.remove(), o = !0;
    let i = o ? (n = l.innerText) != null ? n : "" : r;
    return uc.test(i) && (i = i.replace(uc, "")), i
}

function kg(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string") return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let r = n.split(" ").map(l => {
            let o = document.getElementById(l);
            if (o) {
                let i = o.getAttribute("aria-label");
                return typeof i == "string" ? i.trim() : sc(o).trim()
            }
            return null
        }).filter(Boolean);
        if (r.length > 0) return r.join(", ")
    }
    return sc(e).trim()
}

function xg(e) {
    let t = v.useRef(""),
        n = v.useRef("");
    return $(() => {
        let r = e.current;
        if (!r) return "";
        let l = r.innerText;
        if (t.current === l) return n.current;
        let o = kg(r).trim().toLowerCase();
        return t.current = l, n.current = o, o
    })
}
var Cg = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Cg || {}),
    Tg = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Tg || {}),
    Og = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Og || {}),
    Pg = (e => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e[e.RegisterLabel = 7] = "RegisterLabel", e))(Pg || {});

function vi(e, t = n => n) {
    let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
        r = ug(t(e.options.slice()), o => o.dataRef.current.domRef.current),
        l = n ? r.indexOf(n) : null;
    return l === -1 && (l = null), {
        options: r,
        activeOptionIndex: l
    }
}
let Rg = {
        1(e) {
            return e.dataRef.current.disabled || e.listboxState === 1 ? e : {
                ...e,
                activeOptionIndex: null,
                listboxState: 1
            }
        },
        0(e) {
            if (e.dataRef.current.disabled || e.listboxState === 0) return e;
            let t = e.activeOptionIndex,
                {
                    isSelected: n
                } = e.dataRef.current,
                r = e.options.findIndex(l => n(l.dataRef.current.value));
            return r !== -1 && (t = r), {
                ...e,
                listboxState: 0,
                activeOptionIndex: t
            }
        },
        2(e, t) {
            var n;
            if (e.dataRef.current.disabled || e.listboxState === 1) return e;
            let r = vi(e),
                l = pg(t, {
                    resolveItems: () => r.options,
                    resolveActiveIndex: () => r.activeOptionIndex,
                    resolveId: o => o.id,
                    resolveDisabled: o => o.dataRef.current.disabled
                });
            return {
                ...e,
                ...r,
                searchQuery: "",
                activeOptionIndex: l,
                activationTrigger: (n = t.trigger) != null ? n : 1
            }
        },
        3: (e, t) => {
            if (e.dataRef.current.disabled || e.listboxState === 1) return e;
            let n = e.searchQuery !== "" ? 0 : 1,
                r = e.searchQuery + t.value.toLowerCase(),
                l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find(i => {
                    var u;
                    return !i.dataRef.current.disabled && ((u = i.dataRef.current.textValue) == null ? void 0 : u.startsWith(r))
                }),
                o = l ? e.options.indexOf(l) : -1;
            return o === -1 || o === e.activeOptionIndex ? {
                ...e,
                searchQuery: r
            } : {
                ...e,
                searchQuery: r,
                activeOptionIndex: o,
                activationTrigger: 1
            }
        },
        4(e) {
            return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
                ...e,
                searchQuery: ""
            }
        },
        5: (e, t) => {
            let n = {
                    id: t.id,
                    dataRef: t.dataRef
                },
                r = vi(e, l => [...l, n]);
            return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), {
                ...e,
                ...r
            }
        },
        6: (e, t) => {
            let n = vi(e, r => {
                let l = r.findIndex(o => o.id === t.id);
                return l !== -1 && r.splice(l, 1), r
            });
            return {
                ...e,
                ...n,
                activationTrigger: 1
            }
        },
        7: (e, t) => ({
            ...e,
            labelId: t.id
        })
    },
    Ns = v.createContext(null);
Ns.displayName = "ListboxActionsContext";

function Kr(e) {
    let t = v.useContext(Ns);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Kr), n
    }
    return t
}
let Ls = v.createContext(null);
Ls.displayName = "ListboxDataContext";

function Gr(e) {
    let t = v.useContext(Ls);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Gr), n
    }
    return t
}

function Ng(e, t) {
    return ue(t.type, Rg, e, t)
}
let Lg = v.Fragment;

function _g(e, t) {
    let {
        value: n,
        defaultValue: r,
        form: l,
        name: o,
        onChange: i,
        by: u = (D, B) => D === B,
        disabled: s = !1,
        horizontal: a = !1,
        multiple: d = !1,
        ...m
    } = e;
    const h = a ? "horizontal" : "vertical";
    let y = un(t),
        [g = d ? [] : void 0, S] = Sg(n, i, r),
        [k, f] = v.useReducer(Ng, {
            dataRef: v.createRef(),
            listboxState: 1,
            options: [],
            searchQuery: "",
            labelId: null,
            activeOptionIndex: null,
            activationTrigger: 1
        }),
        c = v.useRef({
            static: !1,
            hold: !1
        }),
        p = v.useRef(null),
        w = v.useRef(null),
        x = v.useRef(null),
        E = $(typeof u == "string" ? (D, B) => {
            let me = u;
            return (D == null ? void 0 : D[me]) === (B == null ? void 0 : B[me])
        } : u),
        O = v.useCallback(D => ue(T.mode, {
            1: () => g.some(B => E(B, D)),
            0: () => E(g, D)
        }), [g]),
        T = v.useMemo(() => ({
            ...k,
            value: g,
            disabled: s,
            mode: d ? 1 : 0,
            orientation: h,
            compare: E,
            isSelected: O,
            optionsPropsRef: c,
            labelRef: p,
            buttonRef: w,
            optionsRef: x
        }), [g, s, d, k]);
    $e(() => {
        k.dataRef.current = T
    }, [T]), ag([T.buttonRef, T.optionsRef], (D, B) => {
        var me;
        f({
            type: 1
        }), Ad(B, Ts.Loose) || (D.preventDefault(), (me = T.buttonRef.current) == null || me.focus())
    }, T.listboxState === 0);
    let _ = v.useMemo(() => ({
            open: T.listboxState === 0,
            disabled: s,
            value: g
        }), [T, s, g]),
        R = $(D => {
            let B = T.options.find(me => me.id === D);
            B && Te(B.dataRef.current.value)
        }),
        W = $(() => {
            if (T.activeOptionIndex !== null) {
                let {
                    dataRef: D,
                    id: B
                } = T.options[T.activeOptionIndex];
                Te(D.current.value), f({
                    type: 2,
                    focus: Se.Specific,
                    id: B
                })
            }
        }),
        L = $(() => f({
            type: 0
        })),
        oe = $(() => f({
            type: 1
        })),
        Ze = $((D, B, me) => D === Se.Specific ? f({
            type: 2,
            focus: Se.Specific,
            id: B,
            trigger: me
        }) : f({
            type: 2,
            focus: D,
            trigger: me
        })),
        U = $((D, B) => (f({
            type: 5,
            id: D,
            dataRef: B
        }), () => f({
            type: 6,
            id: D
        }))),
        Bt = $(D => (f({
            type: 7,
            id: D
        }), () => f({
            type: 7,
            id: null
        }))),
        Te = $(D => ue(T.mode, {
            0() {
                return S == null ? void 0 : S(D)
            },
            1() {
                let B = T.value.slice(),
                    me = B.findIndex(Yr => E(Yr, D));
                return me === -1 ? B.push(D) : B.splice(me, 1), S == null ? void 0 : S(B)
            }
        })),
        Oe = $(D => f({
            type: 3,
            value: D
        })),
        Wn = $(() => f({
            type: 4
        })),
        I = v.useMemo(() => ({
            onChange: Te,
            registerOption: U,
            registerLabel: Bt,
            goToOption: Ze,
            closeListbox: oe,
            openListbox: L,
            selectActiveOption: W,
            selectOption: R,
            search: Oe,
            clearSearch: Wn
        }), []),
        Z = {
            ref: y
        },
        sn = v.useRef(null),
        Je = Hn();
    return v.useEffect(() => {
        sn.current && r !== void 0 && Je.addEventListener(sn.current, "reset", () => {
            S == null || S(r)
        })
    }, [sn, S]), M.createElement(Ns.Provider, {
        value: I
    }, M.createElement(Ls.Provider, {
        value: T
    }, M.createElement(Vd, {
        value: ue(T.listboxState, {
            0: Ne.Open,
            1: Ne.Closed
        })
    }, o != null && g != null && Ud({
        [o]: g
    }).map(([D, B], me) => M.createElement(wg, {
        features: Bd.Hidden,
        ref: me === 0 ? Yr => {
            var Ds;
            sn.current = (Ds = Yr == null ? void 0 : Yr.closest("form")) != null ? Ds : null
        } : void 0,
        ...Cu({
            key: D,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: l,
            name: D,
            value: B
        })
    })), bt({
        ourProps: Z,
        theirProps: m,
        slot: _,
        defaultTag: Lg,
        name: "Listbox"
    }))))
}
let Fg = "button";

function $g(e, t) {
    var n;
    let r = Fo(),
        {
            id: l = `headlessui-listbox-button-${r}`,
            ...o
        } = e,
        i = Gr("Listbox.Button"),
        u = Kr("Listbox.Button"),
        s = un(i.buttonRef, t),
        a = Hn(),
        d = $(k => {
            switch (k.key) {
                case te.Space:
                case te.Enter:
                case te.ArrowDown:
                    k.preventDefault(), u.openListbox(), a.nextFrame(() => {
                        i.value || u.goToOption(Se.First)
                    });
                    break;
                case te.ArrowUp:
                    k.preventDefault(), u.openListbox(), a.nextFrame(() => {
                        i.value || u.goToOption(Se.Last)
                    });
                    break
            }
        }),
        m = $(k => {
            switch (k.key) {
                case te.Space:
                    k.preventDefault();
                    break
            }
        }),
        h = $(k => {
            if (hg(k.currentTarget)) return k.preventDefault();
            i.listboxState === 0 ? (u.closeListbox(), a.nextFrame(() => {
                var f;
                return (f = i.buttonRef.current) == null ? void 0 : f.focus({
                    preventScroll: !0
                })
            })) : (k.preventDefault(), u.openListbox())
        }),
        y = Md(() => {
            if (i.labelId) return [i.labelId, l].join(" ")
        }, [i.labelId, l]),
        g = v.useMemo(() => ({
            open: i.listboxState === 0,
            disabled: i.disabled,
            value: i.value
        }), [i]),
        S = {
            ref: s,
            id: l,
            type: cg(e, i.buttonRef),
            "aria-haspopup": "listbox",
            "aria-controls": (n = i.optionsRef.current) == null ? void 0 : n.id,
            "aria-expanded": i.listboxState === 0,
            "aria-labelledby": y,
            disabled: i.disabled,
            onKeyDown: d,
            onKeyUp: m,
            onClick: h
        };
    return bt({
        ourProps: S,
        theirProps: o,
        slot: g,
        defaultTag: Fg,
        name: "Listbox.Button"
    })
}
let Ig = "label";

function Dg(e, t) {
    let n = Fo(),
        {
            id: r = `headlessui-listbox-label-${n}`,
            ...l
        } = e,
        o = Gr("Listbox.Label"),
        i = Kr("Listbox.Label"),
        u = un(o.labelRef, t);
    $e(() => i.registerLabel(r), [r]);
    let s = $(() => {
            var d;
            return (d = o.buttonRef.current) == null ? void 0 : d.focus({
                preventScroll: !0
            })
        }),
        a = v.useMemo(() => ({
            open: o.listboxState === 0,
            disabled: o.disabled
        }), [o]);
    return bt({
        ourProps: {
            ref: u,
            id: r,
            onClick: s
        },
        theirProps: l,
        slot: a,
        defaultTag: Ig,
        name: "Listbox.Label"
    })
}
let Mg = "ul",
    zg = po.RenderStrategy | po.Static;

function Ag(e, t) {
    var n;
    let r = Fo(),
        {
            id: l = `headlessui-listbox-options-${r}`,
            ...o
        } = e,
        i = Gr("Listbox.Options"),
        u = Kr("Listbox.Options"),
        s = un(i.optionsRef, t),
        a = Hn(),
        d = Hn(),
        m = Ps(),
        h = m !== null ? (m & Ne.Open) === Ne.Open : i.listboxState === 0;
    v.useEffect(() => {
        var f;
        let c = i.optionsRef.current;
        c && i.listboxState === 0 && c !== ((f = zd(c)) == null ? void 0 : f.activeElement) && c.focus({
            preventScroll: !0
        })
    }, [i.listboxState, i.optionsRef]);
    let y = $(f => {
            switch (d.dispose(), f.key) {
                case te.Space:
                    if (i.searchQuery !== "") return f.preventDefault(), f.stopPropagation(), u.search(f.key);
                case te.Enter:
                    if (f.preventDefault(), f.stopPropagation(), i.activeOptionIndex !== null) {
                        let {
                            dataRef: c
                        } = i.options[i.activeOptionIndex];
                        u.onChange(c.current.value)
                    }
                    i.mode === 0 && (u.closeListbox(), At().nextFrame(() => {
                        var c;
                        return (c = i.buttonRef.current) == null ? void 0 : c.focus({
                            preventScroll: !0
                        })
                    }));
                    break;
                case ue(i.orientation, {
                    vertical: te.ArrowDown,
                    horizontal: te.ArrowRight
                }):
                    return f.preventDefault(), f.stopPropagation(), u.goToOption(Se.Next);
                case ue(i.orientation, {
                    vertical: te.ArrowUp,
                    horizontal: te.ArrowLeft
                }):
                    return f.preventDefault(), f.stopPropagation(), u.goToOption(Se.Previous);
                case te.Home:
                case te.PageUp:
                    return f.preventDefault(), f.stopPropagation(), u.goToOption(Se.First);
                case te.End:
                case te.PageDown:
                    return f.preventDefault(), f.stopPropagation(), u.goToOption(Se.Last);
                case te.Escape:
                    return f.preventDefault(), f.stopPropagation(), u.closeListbox(), a.nextFrame(() => {
                        var c;
                        return (c = i.buttonRef.current) == null ? void 0 : c.focus({
                            preventScroll: !0
                        })
                    });
                case te.Tab:
                    f.preventDefault(), f.stopPropagation();
                    break;
                default:
                    f.key.length === 1 && (u.search(f.key), d.setTimeout(() => u.clearSearch(), 350));
                    break
            }
        }),
        g = Md(() => {
            var f, c, p;
            return (p = (f = i.labelRef.current) == null ? void 0 : f.id) != null ? p : (c = i.buttonRef.current) == null ? void 0 : c.id
        }, [i.labelRef.current, i.buttonRef.current]),
        S = v.useMemo(() => ({
            open: i.listboxState === 0
        }), [i]),
        k = {
            "aria-activedescendant": i.activeOptionIndex === null || (n = i.options[i.activeOptionIndex]) == null ? void 0 : n.id,
            "aria-multiselectable": i.mode === 1 ? !0 : void 0,
            "aria-labelledby": g,
            "aria-orientation": i.orientation,
            id: l,
            onKeyDown: y,
            role: "listbox",
            tabIndex: 0,
            ref: s
        };
    return bt({
        ourProps: k,
        theirProps: o,
        slot: S,
        defaultTag: Mg,
        features: zg,
        visible: h,
        name: "Listbox.Options"
    })
}
let jg = "li";

function Ug(e, t) {
    let n = Fo(),
        {
            id: r = `headlessui-listbox-option-${n}`,
            disabled: l = !1,
            value: o,
            ...i
        } = e,
        u = Gr("Listbox.Option"),
        s = Kr("Listbox.Option"),
        a = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1,
        d = u.isSelected(o),
        m = v.useRef(null),
        h = xg(m),
        y = lt({
            disabled: l,
            value: o,
            domRef: m,
            get textValue() {
                return h()
            }
        }),
        g = un(t, m);
    $e(() => {
        if (u.listboxState !== 0 || !a || u.activationTrigger === 0) return;
        let E = At();
        return E.requestAnimationFrame(() => {
            var O, T;
            (T = (O = m.current) == null ? void 0 : O.scrollIntoView) == null || T.call(O, {
                block: "nearest"
            })
        }), E.dispose
    }, [m, a, u.listboxState, u.activationTrigger, u.activeOptionIndex]), $e(() => s.registerOption(r, y), [y, r]);
    let S = $(E => {
            if (l) return E.preventDefault();
            s.onChange(o), u.mode === 0 && (s.closeListbox(), At().nextFrame(() => {
                var O;
                return (O = u.buttonRef.current) == null ? void 0 : O.focus({
                    preventScroll: !0
                })
            }))
        }),
        k = $(() => {
            if (l) return s.goToOption(Se.Nothing);
            s.goToOption(Se.Specific, r)
        }),
        f = Eg(),
        c = $(E => f.update(E)),
        p = $(E => {
            f.wasMoved(E) && (l || a || s.goToOption(Se.Specific, r, 0))
        }),
        w = $(E => {
            f.wasMoved(E) && (l || a && s.goToOption(Se.Nothing))
        }),
        x = v.useMemo(() => ({
            active: a,
            selected: d,
            disabled: l
        }), [a, d, l]);
    return bt({
        ourProps: {
            id: r,
            ref: g,
            role: "option",
            tabIndex: l === !0 ? void 0 : -1,
            "aria-disabled": l === !0 ? !0 : void 0,
            "aria-selected": d,
            disabled: void 0,
            onClick: S,
            onFocus: k,
            onPointerEnter: c,
            onMouseEnter: c,
            onPointerMove: p,
            onMouseMove: p,
            onPointerLeave: w,
            onMouseLeave: w
        },
        theirProps: i,
        slot: x,
        defaultTag: jg,
        name: "Listbox.Option"
    })
}
let Hg = vt(_g),
    bg = vt($g),
    Bg = vt(Dg),
    Vg = vt(Ag),
    Wg = vt(Ug),
    h0 = Object.assign(Hg, {
        Button: bg,
        Label: Bg,
        Options: Vg,
        Option: Wg
    });

function Qg(e = 0) {
    let [t, n] = v.useState(e), r = Rs(), l = v.useCallback(s => {
        r.current && n(a => a | s)
    }, [t, r]), o = v.useCallback(s => !!(t & s), [t]), i = v.useCallback(s => {
        r.current && n(a => a & ~s)
    }, [n, r]), u = v.useCallback(s => {
        r.current && n(a => a ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: o,
        removeFlag: i,
        toggleFlag: u
    }
}

function Kg(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function gi(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function yi(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function Gg(e, t) {
    let n = At();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [o, i] = [r, l].map(s => {
        let [a = 0] = s.split(",").filter(Boolean).map(d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, m) => m - d);
        return a
    }), u = o + i;
    if (u !== 0) {
        n.group(a => {
            a.setTimeout(() => {
                t(), a.dispose()
            }, u), a.addEventListener(e, "transitionrun", d => {
                d.target === d.currentTarget && a.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", a => {
            a.target === a.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function Yg(e, t, n, r) {
    let l = n ? "enter" : "leave",
        o = At(),
        i = r !== void 0 ? Kg(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let u = ue(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = ue(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        a = ue(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return yi(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), gi(e, ...t.base, ...u, ...a), o.nextFrame(() => {
        yi(e, ...t.base, ...u, ...a), gi(e, ...t.base, ...u, ...s), Gg(e, () => (yi(e, ...t.base, ...u), gi(e, ...t.base, ...t.entered), i()))
    }), o.dispose
}

function Xg({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: l,
    onStop: o
}) {
    let i = Rs(),
        u = Hn(),
        s = lt(n);
    $e(() => {
        e && (s.current = "enter")
    }, [e]), $e(() => {
        let a = At();
        u.add(a.dispose);
        let d = t.current;
        if (d && s.current !== "idle" && i.current) return a.dispose(), l.current(s.current), a.add(Yg(d, r.current, s.current === "enter", () => {
            a.dispose(), o.current(s.current)
        })), a.dispose
    }, [n])
}

function yt(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let $o = v.createContext(null);
$o.displayName = "TransitionContext";
var Zg = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(Zg || {});

function Jg() {
    let e = v.useContext($o);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function qg() {
    let e = v.useContext(Io);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let Io = v.createContext(null);
Io.displayName = "NestingContext";

function Do(e) {
    return "children" in e ? Do(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Wd(e, t) {
    let n = lt(e),
        r = v.useRef([]),
        l = Rs(),
        o = Hn(),
        i = $((y, g = Tt.Hidden) => {
            let S = r.current.findIndex(({
                el: k
            }) => k === y);
            S !== -1 && (ue(g, {
                [Tt.Unmount]() {
                    r.current.splice(S, 1)
                },
                [Tt.Hidden]() {
                    r.current[S].state = "hidden"
                }
            }), o.microTask(() => {
                var k;
                !Do(r) && l.current && ((k = n.current) == null || k.call(n))
            }))
        }),
        u = $(y => {
            let g = r.current.find(({
                el: S
            }) => S === y);
            return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({
                el: y,
                state: "visible"
            }), () => i(y, Tt.Unmount)
        }),
        s = v.useRef([]),
        a = v.useRef(Promise.resolve()),
        d = v.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        m = $((y, g, S) => {
            s.current.splice(0), t && (t.chains.current[g] = t.chains.current[g].filter(([k]) => k !== y)), t == null || t.chains.current[g].push([y, new Promise(k => {
                s.current.push(k)
            })]), t == null || t.chains.current[g].push([y, new Promise(k => {
                Promise.all(d.current[g].map(([f, c]) => c)).then(() => k())
            })]), g === "enter" ? a.current = a.current.then(() => t == null ? void 0 : t.wait.current).then(() => S(g)) : S(g)
        }),
        h = $((y, g, S) => {
            Promise.all(d.current[g].splice(0).map(([k, f]) => f)).then(() => {
                var k;
                (k = s.current.shift()) == null || k()
            }).then(() => S(g))
        });
    return v.useMemo(() => ({
        children: r,
        register: u,
        unregister: i,
        onStart: m,
        onStop: h,
        wait: a,
        chains: d
    }), [u, i, r, m, h, d, a])
}

function ey() {}
let ty = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function ac(e) {
    var t;
    let n = {};
    for (let r of ty) n[r] = (t = e[r]) != null ? t : ey;
    return n
}

function ny(e) {
    let t = v.useRef(ac(e));
    return v.useEffect(() => {
        t.current = ac(e)
    }, [e]), t
}
let ry = "div",
    Qd = po.RenderStrategy;

function ly(e, t) {
    var n, r;
    let {
        beforeEnter: l,
        afterEnter: o,
        beforeLeave: i,
        afterLeave: u,
        enter: s,
        enterFrom: a,
        enterTo: d,
        entered: m,
        leave: h,
        leaveFrom: y,
        leaveTo: g,
        ...S
    } = e, k = v.useRef(null), f = un(k, t), c = (n = S.unmount) == null || n ? Tt.Unmount : Tt.Hidden, {
        show: p,
        appear: w,
        initial: x
    } = Jg(), [E, O] = v.useState(p ? "visible" : "hidden"), T = qg(), {
        register: _,
        unregister: R
    } = T;
    v.useEffect(() => _(k), [_, k]), v.useEffect(() => {
        if (c === Tt.Hidden && k.current) {
            if (p && E !== "visible") {
                O("visible");
                return
            }
            return ue(E, {
                hidden: () => R(k),
                visible: () => _(k)
            })
        }
    }, [E, k, _, R, p, c]);
    let W = lt({
            base: yt(S.className),
            enter: yt(s),
            enterFrom: yt(a),
            enterTo: yt(d),
            entered: yt(m),
            leave: yt(h),
            leaveFrom: yt(y),
            leaveTo: yt(g)
        }),
        L = ny({
            beforeEnter: l,
            afterEnter: o,
            beforeLeave: i,
            afterLeave: u
        }),
        oe = Cs();
    v.useEffect(() => {
        if (oe && E === "visible" && k.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [k, E, oe]);
    let Ze = x && !w,
        U = w && p && x,
        Bt = !oe || Ze ? "idle" : p ? "enter" : "leave",
        Te = Qg(0),
        Oe = $(Je => ue(Je, {
            enter: () => {
                Te.addFlag(Ne.Opening), L.current.beforeEnter()
            },
            leave: () => {
                Te.addFlag(Ne.Closing), L.current.beforeLeave()
            },
            idle: () => {}
        })),
        Wn = $(Je => ue(Je, {
            enter: () => {
                Te.removeFlag(Ne.Opening), L.current.afterEnter()
            },
            leave: () => {
                Te.removeFlag(Ne.Closing), L.current.afterLeave()
            },
            idle: () => {}
        })),
        I = Wd(() => {
            O("hidden"), R(k)
        }, T);
    Xg({
        immediate: U,
        container: k,
        classes: W,
        direction: Bt,
        onStart: lt(Je => {
            I.onStart(k, Je, Oe)
        }),
        onStop: lt(Je => {
            I.onStop(k, Je, Wn), Je === "leave" && !Do(I) && (O("hidden"), R(k))
        })
    });
    let Z = S,
        sn = {
            ref: f
        };
    return U ? Z = {
        ...Z,
        className: fo(S.className, ...W.current.enter, ...W.current.enterFrom)
    } : (Z.className = fo(S.className, (r = k.current) == null ? void 0 : r.className), Z.className === "" && delete Z.className), M.createElement(Io.Provider, {
        value: I
    }, M.createElement(Vd, {
        value: ue(E, {
            visible: Ne.Open,
            hidden: Ne.Closed
        }) | Te.flags
    }, bt({
        ourProps: sn,
        theirProps: Z,
        defaultTag: ry,
        features: Qd,
        visible: E === "visible",
        name: "Transition.Child"
    })))
}

function oy(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: l = !0,
        ...o
    } = e, i = v.useRef(null), u = un(i, t);
    Cs();
    let s = Ps();
    if (n === void 0 && s !== null && (n = (s & Ne.Open) === Ne.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [a, d] = v.useState(n ? "visible" : "hidden"), m = Wd(() => {
        d("hidden")
    }), [h, y] = v.useState(!0), g = v.useRef([n]);
    $e(() => {
        h !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n), y(!1))
    }, [g, n]);
    let S = v.useMemo(() => ({
        show: n,
        appear: r,
        initial: h
    }), [n, r, h]);
    v.useEffect(() => {
        if (n) d("visible");
        else if (!Do(m)) d("hidden");
        else {
            let p = i.current;
            if (!p) return;
            let w = p.getBoundingClientRect();
            w.x === 0 && w.y === 0 && w.width === 0 && w.height === 0 && d("hidden")
        }
    }, [n, m]);
    let k = {
            unmount: l
        },
        f = $(() => {
            var p;
            h && y(!1), (p = e.beforeEnter) == null || p.call(e)
        }),
        c = $(() => {
            var p;
            h && y(!1), (p = e.beforeLeave) == null || p.call(e)
        });
    return M.createElement(Io.Provider, {
        value: m
    }, M.createElement($o.Provider, {
        value: S
    }, bt({
        ourProps: {
            ...k,
            as: v.Fragment,
            children: M.createElement(Kd, {
                ref: u,
                ...k,
                ...o,
                beforeEnter: f,
                beforeLeave: c
            })
        },
        theirProps: {},
        defaultTag: v.Fragment,
        features: Qd,
        visible: a === "visible",
        name: "Transition"
    })))
}

function iy(e, t) {
    let n = v.useContext($o) !== null,
        r = Ps() !== null;
    return M.createElement(M.Fragment, null, !n && r ? M.createElement(Tu, {
        ref: t,
        ...e
    }) : M.createElement(Kd, {
        ref: t,
        ...e
    }))
}
let Tu = vt(oy),
    Kd = vt(ly),
    uy = vt(iy),
    v0 = Object.assign(Tu, {
        Child: uy,
        Root: Tu
    });
var Gd = /^--/;

function sy(e, t) {
    return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Gd.test(e) && !(kr.hasOwnProperty(e) && kr[e]) ? t + "px" : ("" + t).trim()
}
var cc = {};

function ay(e, t) {
    if (!e.nodeType || !e.setAttribute) return !1;
    const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
        {
            style: r,
            children: l,
            scrollTop: o,
            scrollLeft: i,
            viewBox: u,
            ...s
        } = t,
        a = Object.values(s),
        d = Object.keys(s).map(m => n || e.hasAttribute(m) ? m : cc[m] || (cc[m] = m.replace(/([A-Z])/g, h => "-" + h.toLowerCase())));
    l !== void 0 && (e.textContent = l);
    for (const m in r)
        if (r.hasOwnProperty(m)) {
            const h = sy(m, r[m]);
            Gd.test(m) ? e.style.setProperty(m, h) : e.style[m] = h
        } d.forEach((m, h) => {
        e.setAttribute(m, a[h])
    }), o !== void 0 && (e.scrollTop = o), i !== void 0 && (e.scrollLeft = i), u !== void 0 && e.setAttribute("viewBox", u)
}
var kr = {
        animationIterationCount: !0,
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
    },
    cy = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
    fy = ["Webkit", "Ms", "Moz", "O"];
kr = Object.keys(kr).reduce((e, t) => (fy.forEach(n => e[cy(n, t)] = e[t]), e), kr);
var dy = /^(matrix|translate|scale|rotate|skew)/,
    py = /^(translate)/,
    my = /^(rotate|skew)/,
    wi = (e, t) => Tr.num(e) && e !== 0 ? e + t : e,
    Rl = (e, t) => Tr.arr(e) ? e.every(n => Rl(n, t)) : Tr.num(e) ? e === t : parseFloat(e) === t,
    hy = class extends Op {
        constructor({
            x: e,
            y: t,
            z: n,
            ...r
        }) {
            const l = [],
                o = [];
            (e || t || n) && (l.push([e || 0, t || 0, n || 0]), o.push(i => [`translate3d(${i.map(u=>wi(u,"px")).join(",")})`, Rl(i, 0)])), Pp(r, (i, u) => {
                if (u === "transform") l.push([i || ""]), o.push(s => [s, s === ""]);
                else if (dy.test(u)) {
                    if (delete r[u], Tr.und(i)) return;
                    const s = py.test(u) ? "px" : my.test(u) ? "deg" : "";
                    l.push(Fp(i)), o.push(u === "rotate3d" ? ([a, d, m, h]) => [`rotate3d(${a},${d},${m},${wi(h,s)})`, Rl(h, 0)] : a => [`${u}(${a.map(d=>wi(d,s)).join(",")})`, Rl(a, u.startsWith("scale") ? 1 : 0)])
                }
            }), l.length && (r.transform = new vy(l, o)), super(r)
        }
    },
    vy = class extends Rp {
        constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
        }
        get() {
            return this._value || (this._value = this._get())
        }
        _get() {
            let e = "",
                t = !0;
            return Qn(this.inputs, (n, r) => {
                const l = js(n[0]),
                    [o, i] = this.transforms[r](Tr.arr(l) ? l : n.map(js));
                e += " " + o, t = t && i
            }), t ? "none" : e
        }
        observerAdded(e) {
            e == 1 && Qn(this.inputs, t => Qn(t, n => Us(n) && Np(n, this)))
        }
        observerRemoved(e) {
            e == 0 && Qn(this.inputs, t => Qn(t, n => Us(n) && Lp(n, this)))
        }
        eventObserved(e) {
            e.type == "change" && (this._value = null), _p(this, e)
        }
    },
    gy = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
kp.assign({
    batchedUpdates: Fd.unstable_batchedUpdates,
    createStringInterpolator: xp,
    colors: Cp
});
var yy = Tp(gy, {
        applyAnimatedValues: ay,
        createAnimatedStyle: e => new hy(e),
        getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
        }) => n
    }),
    g0 = yy.animated,
    Mo = {},
    zo = {},
    bn = {};
Object.defineProperty(bn, "__esModule", {
    value: !0
});
bn.unlisten = bn.listen = void 0;
const xr = [],
    mo = [];

function wy(e) {
    return {
        el: e,
        callbacks: {},
        realCallbacks: {},
        realListenersCnt: 0
    }
}

function Sy(e, t, n) {
    if (e.callbacks[t]) {
        e.callbacks[t].indexOf(n) === -1 && e.callbacks[t].push(n);
        return
    }
    e.callbacks[t] = [n], e.realCallbacks[t] = r => {
        for (let l = 0, o = e.callbacks[t].length; l < o; l += 1) e.callbacks[t][l](r)
    }, e.el.addEventListener(t, e.realCallbacks[t]), e.realListenersCnt += 1
}

function Ey(e, t, n) {
    if (!e.callbacks[t]) return;
    const r = e.callbacks[t].indexOf(n);
    r !== -1 && (e.callbacks[t].splice(r, 1), !(e.callbacks[t].length > 0) && (e.el.removeEventListener(t, e.realCallbacks[t]), delete e.callbacks[t], delete e.realCallbacks[t], e.realListenersCnt -= 1))
}

function ky(e, t, n) {
    let r = xr.indexOf(e);
    r === -1 && (r = xr.length, xr.push(e), mo.push(wy(e)));
    const l = mo[r];
    Sy(l, t, n)
}

function xy(e, t, n) {
    const r = xr.indexOf(e);
    if (r === -1) return;
    const l = mo[r];
    Ey(l, t, n), !(l.realListenersCnt > 0) && (xr.splice(r, 1), mo.splice(r, 1))
}

function Cy(e, t, n) {
    for (let r = 0, l = t.length; r < l; r += 1) ky(e, t[r], n)
}
bn.listen = Cy;

function Ty(e, t, n) {
    for (let r = 0, l = t.length; r < l; r += 1) xy(e, t[r], n)
}
bn.unlisten = Ty;
var _s = {};
Object.defineProperty(_s, "__esModule", {
    value: !0
});
const Cr = {};
typeof document < "u" && (Cr.body = document.body, Cr.window = window, Cr.document = document);
const fc = (() => {
    if (typeof document < "u" && document.body) {
        const e = document.body;
        return typeof e.matches == "function" ? "matches" : typeof e.webkitMatchesSelector == "function" ? "webkitMatchesSelector" : typeof e.mozMatchesSelector == "function" ? "mozMatchesSelector" : typeof e.msMatchesSelector == "function" ? "msMatchesSelector" : typeof e.oMatchesSelector == "function" ? "oMatchesSelector" : null
    }
    return null
})();

function Oy(e, t) {
    if (!e) return null;
    if (Cr.hasOwnProperty(e)) return Cr[e];
    if (e[0] === "#") return document.getElementById(e.slice(1));
    if (fc === null) return null;
    let n = t;
    for (; n = n.parentElement;)
        if (n[fc](e)) return n || null;
    return null
}
_s.default = Oy;
var Fs = {};
Object.defineProperty(Fs, "__esModule", {
    value: !0
});

function Py(e) {
    do {
        const t = window.getComputedStyle(e);
        if (t.transform !== "none" || t.webkitTransform !== "none") return e;
        e = e.parentElement || e.parentNode
    } while (e !== null && e.nodeType === 1);
    return null
}
Fs.default = Py;
var Dt = {};
Object.defineProperty(Dt, "__esModule", {
    value: !0
});
Dt.isIntersecting = Dt.getRect = Dt.infiniteRect = void 0;
Dt.infiniteRect = {
    top: -1 / 0,
    bottom: 1 / 0,
    height: 1 / 0,
    left: -1 / 0,
    right: 1 / 0,
    width: 1 / 0
};

function Ry(e) {
    return e && "getBoundingClientRect" in e && typeof e.getBoundingClientRect == "function" ? e.getBoundingClientRect() : e === window || e === document ? {
        top: 0,
        left: 0,
        bottom: window.innerHeight,
        height: window.innerHeight,
        width: window.innerWidth,
        right: window.innerWidth
    } : {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
    }
}
Dt.getRect = Ry;

function Ny(e, t, n, r) {
    const l = e.top + n,
        o = e.bottom + r;
    return l >= t.top && l <= t.bottom || o >= t.top && o <= t.bottom || o >= t.bottom && l <= t.top
}
Dt.isIntersecting = Ny;
var Yd = Ce && Ce.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(zo, "__esModule", {
    value: !0
});
const Ly = v,
    lr = bn,
    dc = Yd(_s),
    _y = Yd(Fs),
    or = Dt,
    Fy = (e, t) => {
        const {
            bottomOffset: n,
            hideOnBoundaryHit: r
        } = t, {
            top: l,
            height: o,
            width: i,
            boundaryBottom: u
        } = e;
        return r || l + o + n < u ? {
            top: `${l}px`,
            width: `${i}px`,
            position: "fixed"
        } : !r && u > 0 ? {
            top: `${u-o-n}px`,
            width: `${i}px`,
            position: "fixed"
        } : {
            width: `${i}px`,
            bottom: `${n}px`,
            position: "absolute"
        }
    },
    $y = (e, t) => {
        const {
            bottomOffset: n,
            hideOnBoundaryHit: r
        } = t, {
            bottom: l,
            height: o,
            width: i,
            boundaryTop: u
        } = e;
        return r || l - o - n > u ? {
            width: `${i}px`,
            top: `${l-o}px`,
            position: "fixed"
        } : {
            width: `${i}px`,
            top: `${n}px`,
            position: "absolute"
        }
    },
    Iy = (e, t, n) => (e === "top" ? Fy : $y)(n, t),
    Dy = (e, t) => {
        const n = e.wrapperStyles,
            r = t.wrapperStyles;
        if (e.isFixed !== t.isFixed || e.height !== t.height || !n && r || n && !r) return !1;
        if (!r) return !0;
        for (const l in n)
            if (n.hasOwnProperty(l) && n[l] !== r[l]) return !1;
        return !0
    };
let Xd = class extends Ly.Component {
    constructor() {
        super(...arguments), this.holderEl = null, this.wrapperEl = null, this.el = null, this.scrollEl = null, this.boundaryEl = null, this.disabled = !1, this.checkPositionIntervalId = null, this.lastMinHeight = null, this.state = {
            isFixed: !1,
            wrapperStyles: void 0,
            holderStyles: void 0,
            height: 0
        }, this.holderRef = t => {
            t !== this.holderEl && (this.holderEl = t)
        }, this.wrapperRef = t => {
            t !== this.wrapperEl && (this.wrapperEl = t, this.updateScrollEl(), this.updateBoundaryEl())
        }, this.checkPosition = () => {
            const {
                holderEl: t,
                wrapperEl: n,
                boundaryEl: r,
                scrollEl: l,
                disabled: o
            } = this;
            if (!l || !t || !n) {
                console.error("Missing required elements:", {
                    scrollEl: l,
                    holderEl: t,
                    wrapperEl: n
                });
                return
            }
            const {
                mode: i,
                onFixedToggle: u,
                offsetTransforms: s,
                isIOSFixEnabled: a,
                dontUpdateHolderHeightWhenSticky: d
            } = this.props;
            if (o) {
                this.state.isFixed && this.setState({
                    isFixed: !1,
                    wrapperStyles: {}
                });
                return
            }
            if (!t.getBoundingClientRect || !n.getBoundingClientRect) return;
            const m = t.getBoundingClientRect(),
                h = n.getBoundingClientRect(),
                y = r ? (0, or.getRect)(r) : or.infiniteRect,
                g = (0, or.getRect)(l),
                S = this.isFixed(m, h, y, g);
            let k = null;
            if (s && S && l instanceof HTMLElement) {
                const w = (0, _y.default)(l);
                w && (k = (0, or.getRect)(w))
            }
            const f = this.state.isFixed && d && this.lastMinHeight ? this.lastMinHeight : h.height;
            this.lastMinHeight = f;
            const c = a ? {
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)"
                } : void 0,
                p = {
                    isFixed: S,
                    height: h.height,
                    holderStyles: {
                        minHeight: `${f}px`
                    },
                    wrapperStyles: S ? Object.assign(Object.assign({}, c), Iy(i, this.props, {
                        boundaryTop: i === "bottom" ? y.top : 0,
                        boundaryBottom: i === "top" ? y.bottom : 0,
                        top: i === "top" ? g.top - (k ? k.top : 0) : 0,
                        bottom: i === "bottom" ? g.bottom - (k ? k.bottom : 0) : 0,
                        width: m.width,
                        height: h.height
                    })) : c
                };
            S !== this.state.isFixed && u && typeof u == "function" && u(S), Dy(this.state, p) || this.setState(p)
        }
    }
    isFixed(t, n, r, l) {
        const {
            hideOnBoundaryHit: o,
            bottomOffset: i,
            topOffset: u,
            mode: s
        } = this.props;
        if (this.disabled || o && r && !(0, or.isIntersecting)(r, l, u, i)) return !1;
        const a = o ? n.height + i : 0;
        return s === "top" ? t.top + u < l.top && l.top + a <= r.bottom : t.bottom - u > l.bottom && l.bottom - a >= r.top
    }
    updateScrollEl() {
        if (!this.wrapperEl) return;
        this.scrollEl && ((0, lr.unlisten)(this.scrollEl, ["scroll"], this.checkPosition), this.scrollEl = null);
        const {
            scrollElement: t
        } = this.props;
        typeof t == "string" ? this.scrollEl = (0, dc.default)(t, this.wrapperEl) : this.scrollEl = t, this.scrollEl ? (0, lr.listen)(this.scrollEl, ["scroll"], this.checkPosition) : console.error("Cannot find scrollElement " + (typeof t == "string" ? t : "unknown"))
    }
    updateBoundaryEl() {
        if (!this.wrapperEl) return;
        const {
            boundaryElement: t
        } = this.props;
        this.boundaryEl = (0, dc.default)(t, this.wrapperEl), (this.boundaryEl === window || this.boundaryEl === document) && (this.boundaryEl = null)
    }
    initialize() {
        const {
            positionRecheckInterval: t,
            disabled: n
        } = this.props;
        this.disabled = n, (0, lr.listen)(window, ["scroll", "resize", "pageshow", "load"], this.checkPosition), this.checkPosition(), t && (this.checkPositionIntervalId = setInterval(this.checkPosition, t))
    }
    componentDidUpdate({
        scrollElement: t,
        boundaryElement: n,
        disabled: r
    }) {
        (t !== this.props.scrollElement || this.scrollEl === null) && this.updateScrollEl(), (n !== this.props.boundaryElement || this.boundaryEl === null) && this.updateBoundaryEl(), r !== this.props.disabled && (this.disabled = this.props.disabled, this.checkPosition())
    }
    componentDidMount() {
        this.initialize(), this.wrapperEl === null && console.error("Wrapper element is missing, please make sure that you have assigned refs correctly")
    }
    componentWillUnmount() {
        this.scrollEl && (0, lr.unlisten)(this.scrollEl, ["scroll"], this.checkPosition), (0, lr.unlisten)(window, ["scroll", "resize", "pageshow", "load"], this.checkPosition), this.boundaryEl = null, this.scrollEl = null, this.checkPositionIntervalId && clearInterval(this.checkPositionIntervalId)
    }
    render() {
        const {
            holderRef: t,
            wrapperRef: n
        } = this, {
            isFixed: r,
            wrapperStyles: l,
            holderStyles: o
        } = this.state;
        return this.props.children({
            holderRef: t,
            wrapperRef: n,
            isFixed: r,
            wrapperStyles: l,
            holderStyles: o
        })
    }
};
Xd.defaultProps = {
    mode: "top",
    topOffset: 0,
    bottomOffset: 0,
    isIOSFixEnabled: !0,
    offsetTransforms: !0,
    disabled: !1,
    onFixedToggle: null,
    boundaryElement: null,
    hideOnBoundaryHit: !0,
    scrollElement: "window",
    dontUpdateHolderHeightWhenSticky: !1
};
zo.default = Xd;
var $s = {},
    My = Ce && Ce.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) t.indexOf(r[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[l]) && (n[r[l]] = e[r[l]]);
        return n
    },
    Zd = Ce && Ce.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty($s, "__esModule", {
    value: !0
});
const Si = Zd(v),
    Jd = Zd(zo);

function qd(e) {
    const {
        mode: t,
        onFixedToggle: n,
        hideOnBoundaryHit: r,
        offsetTransforms: l,
        disabled: o,
        boundaryElement: i,
        scrollElement: u,
        bottomOffset: s,
        topOffset: a,
        positionRecheckInterval: d,
        children: m,
        isIOSFixEnabled: h,
        dontUpdateHolderHeightWhenSticky: y,
        wrapperClassName: g,
        stickyClassName: S,
        stickyStyle: k
    } = e, f = My(e, ["mode", "onFixedToggle", "hideOnBoundaryHit", "offsetTransforms", "disabled", "boundaryElement", "scrollElement", "bottomOffset", "topOffset", "positionRecheckInterval", "children", "isIOSFixEnabled", "dontUpdateHolderHeightWhenSticky", "wrapperClassName", "stickyClassName", "stickyStyle"]);
    return Si.default.createElement(Jd.default, {
        mode: t,
        onFixedToggle: n,
        hideOnBoundaryHit: r,
        offsetTransforms: l,
        disabled: o,
        boundaryElement: i,
        scrollElement: u,
        bottomOffset: s,
        topOffset: a,
        positionRecheckInterval: d,
        isIOSFixEnabled: h,
        dontUpdateHolderHeightWhenSticky: y
    }, ({
        isFixed: c,
        wrapperStyles: p,
        wrapperRef: w,
        holderStyles: x,
        holderRef: E
    }) => Si.default.createElement("div", Object.assign({}, f, {
        ref: E,
        style: x
    }), Si.default.createElement("div", Object.assign({}, f, {
        className: `${g} ${c?S:""}`,
        style: c ? Object.assign(Object.assign({}, p), k) : p,
        ref: w
    }), m)))
}
qd.defaultProps = Object.assign(Object.assign({}, Jd.default.defaultProps), {
    stickyClassName: "sticky",
    wrapperClassName: "",
    stickyStyle: {}
});
$s.default = qd;
var ep = Ce && Ce.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Mo, "__esModule", {
    value: !0
});
Mo.RenderPropSticky = void 0;
const zy = ep(zo);
Mo.RenderPropSticky = zy.default;
const Ay = ep($s);
var w0 = Mo.default = Ay.default,
    jy = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ou = function() {
        return Ou = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var l in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            return e
        }, Ou.apply(this, arguments)
    },
    Pu, Uy = function(e) {
        var t;
        e ? function(n) {
            if (n)
                for (; n.lastChild;) n.lastChild.remove()
        }(typeof e == "string" ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode)
    },
    Hy = function(e, t) {
        Uy(t), window.___grecaptcha_cfg = void 0;
        var n = document.querySelector("#" + e);
        n && n.remove(),
            function() {
                var r = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
                r && r.remove()
            }()
    },
    by = function(e) {
        var t = e.render,
            n = e.onLoadCallbackName,
            r = e.language,
            l = e.onLoad,
            o = e.useRecaptchaNet,
            i = e.useEnterprise,
            u = e.scriptProps,
            s = u === void 0 ? {} : u,
            a = s.nonce,
            d = a === void 0 ? "" : a,
            m = s.defer,
            h = m !== void 0 && m,
            y = s.async,
            g = y !== void 0 && y,
            S = s.id,
            k = S === void 0 ? "" : S,
            f = s.appendTo,
            c = k || "google-recaptcha-v3";
        if (function(x) {
                return !!document.querySelector("#" + x)
            }(c)) l();
        else {
            var p = function(x) {
                    return "https://www." + (x.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (x.useEnterprise ? "enterprise.js" : "api.js")
                }({
                    useEnterprise: i,
                    useRecaptchaNet: o
                }),
                w = document.createElement("script");
            w.id = c, w.src = p + "?render=" + t + (t === "explicit" ? "&onload=" + n : "") + (r ? "&hl=" + r : ""), d && (w.nonce = d), w.defer = !!h, w.async = !!g, w.onload = l, (f === "body" ? document.body : document.getElementsByTagName("head")[0]).appendChild(w)
        }
    },
    Ei = function(e) {
        typeof process < "u" && jy && !1 || console.warn(e)
    };
(function(e) {
    e.SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available"
})(Pu || (Pu = {}));
var Is = v.createContext({
    executeRecaptcha: function() {
        throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")
    }
});
Is.Consumer;

function S0(e) {
    var t = e.reCaptchaKey,
        n = e.useEnterprise,
        r = n !== void 0 && n,
        l = e.useRecaptchaNet,
        o = l !== void 0 && l,
        i = e.scriptProps,
        u = e.language,
        s = e.container,
        a = e.children,
        d = v.useState(null),
        m = d[0],
        h = d[1],
        y = v.useRef(t),
        g = JSON.stringify(i),
        S = JSON.stringify(s == null ? void 0 : s.parameters);
    v.useEffect(function() {
        if (t) {
            var c = (i == null ? void 0 : i.id) || "google-recaptcha-v3",
                p = (i == null ? void 0 : i.onLoadCallbackName) || "onRecaptchaLoadCallback";
            return window[p] = function() {
                    var w = r ? window.grecaptcha.enterprise : window.grecaptcha,
                        x = Ou({
                            badge: "inline",
                            size: "invisible",
                            sitekey: t
                        }, (s == null ? void 0 : s.parameters) || {});
                    y.current = w.render(s == null ? void 0 : s.element, x)
                }, by({
                    render: s != null && s.element ? "explicit" : t,
                    onLoadCallbackName: p,
                    useEnterprise: r,
                    useRecaptchaNet: o,
                    scriptProps: i,
                    language: u,
                    onLoad: function() {
                        if (window && window.grecaptcha) {
                            var w = r ? window.grecaptcha.enterprise : window.grecaptcha;
                            w.ready(function() {
                                h(w)
                            })
                        } else Ei("<GoogleRecaptchaProvider /> " + Pu.SCRIPT_NOT_AVAILABLE)
                    },
                    onError: function() {
                        Ei("Error loading google recaptcha script")
                    }
                }),
                function() {
                    Hy(c, s == null ? void 0 : s.element)
                }
        }
        Ei("<GoogleReCaptchaProvider /> recaptcha key not provided")
    }, [r, o, g, S, u, t, s == null ? void 0 : s.element]);
    var k = v.useCallback(function(c) {
            if (!m || !m.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
            return m.execute(y.current, {
                action: c
            })
        }, [m, y]),
        f = v.useMemo(function() {
            return {
                executeRecaptcha: m ? k : void 0,
                container: s == null ? void 0 : s.element
            }
        }, [k, m, s == null ? void 0 : s.element]);
    return M.createElement(Is.Provider, {
        value: f
    }, a)
}
var E0 = function() {
    return v.useContext(Is)
};

function tp(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
}
var le = typeof Symbol == "function" && Symbol.for,
    Ru = le ? Symbol.for("react.element") : 60103,
    Nu = le ? Symbol.for("react.portal") : 60106,
    Nl = le ? Symbol.for("react.fragment") : 60107,
    Ll = le ? Symbol.for("react.strict_mode") : 60108,
    _l = le ? Symbol.for("react.profiler") : 60114,
    Fl = le ? Symbol.for("react.provider") : 60109,
    $l = le ? Symbol.for("react.context") : 60110,
    Lu = le ? Symbol.for("react.async_mode") : 60111,
    ho = le ? Symbol.for("react.concurrent_mode") : 60111,
    Il = le ? Symbol.for("react.forward_ref") : 60112,
    Dl = le ? Symbol.for("react.suspense") : 60113,
    By = le ? Symbol.for("react.suspense_list") : 60120,
    Ml = le ? Symbol.for("react.memo") : 60115,
    zl = le ? Symbol.for("react.lazy") : 60116,
    Vy = le ? Symbol.for("react.block") : 60121,
    Wy = le ? Symbol.for("react.fundamental") : 60117,
    Qy = le ? Symbol.for("react.responder") : 60118,
    Ky = le ? Symbol.for("react.scope") : 60119;

function Pe(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Ru:
                switch (e = e.type) {
                    case Lu:
                    case ho:
                    case Nl:
                    case _l:
                    case Ll:
                    case Dl:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case $l:
                            case Il:
                            case zl:
                            case Ml:
                            case Fl:
                                return e;
                            default:
                                return t
                        }
                }
            case Nu:
                return t
        }
    }
}

function pc(e) {
    return Pe(e) === ho
}
var Gy = {
        AsyncMode: Lu,
        ConcurrentMode: ho,
        ContextConsumer: $l,
        ContextProvider: Fl,
        Element: Ru,
        ForwardRef: Il,
        Fragment: Nl,
        Lazy: zl,
        Memo: Ml,
        Portal: Nu,
        Profiler: _l,
        StrictMode: Ll,
        Suspense: Dl,
        isAsyncMode: function(e) {
            return pc(e) || Pe(e) === Lu
        },
        isConcurrentMode: pc,
        isContextConsumer: function(e) {
            return Pe(e) === $l
        },
        isContextProvider: function(e) {
            return Pe(e) === Fl
        },
        isElement: function(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Ru
        },
        isForwardRef: function(e) {
            return Pe(e) === Il
        },
        isFragment: function(e) {
            return Pe(e) === Nl
        },
        isLazy: function(e) {
            return Pe(e) === zl
        },
        isMemo: function(e) {
            return Pe(e) === Ml
        },
        isPortal: function(e) {
            return Pe(e) === Nu
        },
        isProfiler: function(e) {
            return Pe(e) === _l
        },
        isStrictMode: function(e) {
            return Pe(e) === Ll
        },
        isSuspense: function(e) {
            return Pe(e) === Dl
        },
        isValidElementType: function(e) {
            return typeof e == "string" || typeof e == "function" || e === Nl || e === ho || e === _l || e === Ll || e === Dl || e === By || typeof e == "object" && e !== null && (e.$$typeof === zl || e.$$typeof === Ml || e.$$typeof === Fl || e.$$typeof === $l || e.$$typeof === Il || e.$$typeof === Wy || e.$$typeof === Qy || e.$$typeof === Ky || e.$$typeof === Vy)
        },
        typeOf: Pe
    },
    A = tp(function(e, t) {}),
    mc = (A.AsyncMode, A.ConcurrentMode, A.ContextConsumer, A.ContextProvider, A.Element, A.ForwardRef, A.Fragment, A.Lazy, A.Memo, A.Portal, A.Profiler, A.StrictMode, A.Suspense, A.isAsyncMode, A.isConcurrentMode, A.isContextConsumer, A.isContextProvider, A.isElement, A.isForwardRef, A.isFragment, A.isLazy, A.isMemo, A.isPortal, A.isProfiler, A.isStrictMode, A.isSuspense, A.isValidElementType, A.typeOf, tp(function(e) {
        e.exports = Gy
    })),
    Yy = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    hc = {};
hc[mc.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, hc[mc.Memo] = Yy;
export {
    l0 as B, p0 as F, e0 as H, i0 as L, h0 as N, n0 as T, qy as _, u0 as a, r0 as b, d0 as c, Nv as d, g0 as e, s0 as f, a0 as g, Dv as h, t0 as i, f0 as j, w0 as k, $d as l, E0 as m, S0 as n, Sv as o, em as p, o0 as q, Fd as r, v0 as t, c0 as u
};
//# sourceMappingURL=react-dom-BnEYDcZu.js.map