import {
    aq as F,
    p as L,
    j as e,
    q as T,
    r as m,
    c as O,
    aw as H
} from "./vendor-CtbUqpA0.js";
import {
    e as _,
    i as q,
    g as U,
    f as J,
    s as K,
    b as B,
    d as Q,
    c as Y,
    M as X,
    E,
    h as v,
    I as P,
    a as C,
    P as I,
    B as b,
    j as Z,
    L as W,
    k as G,
    u as ee,
    l as te,
    m as re,
    n as ae,
    o as D,
    p as ne,
    q as k,
    r as $,
    t as se,
    v as ie,
    w as ce,
    x as oe,
    y as de,
    z as le,
    A as ue,
    C as me,
    D as pe,
    F as fe,
    G as he,
    H as xe,
    J as ge,
    K as ye,
    O as M,
    Q as je
} from "./index-CXsI4q_W.js";
import {
    a as N,
    I as Se
} from "./Icons-XXm5y-G7.js";
import {
    b as R,
    a as V,
    l as we
} from "./react-dom-BnEYDcZu.js";
import {
    S as Ee
} from "./StatusCircle-B54taPQT.js";
import "./auth-72H9TcpW.js";
import "./caption-parsing-BGqd6Hpv.js";
import "./locales-BNmjpJ3z.js";
import "./hls-Di-l_7QN.js";
import "./language-db-C33ehKO5.js";

function be(r, t) {
    return !!G().DISALLOWED_IDS.map(n => n.split("-")).find(n => r === n[1] && t === n[0])
}

function Ne(r) {
    const {
        t
    } = R(), o = F(), n = L(), {
        error: d,
        value: f,
        loading: c
    } = V(async () => {
        var s;
        const h = await _(),
            l = (h == null ? void 0 : h.success) && q(h.version) && h.allowed;
        if (l && !h.hasPermission) throw new Error("extension-no-permission");
        const y = U();
        if (y && !l) try {
            await J(y)
        } catch {
            throw new Error("failed-api-metadata")
        } else K([...B().listSources(), ...B().listEmbeds()]);
        let x = null;
        try {
            if (!o.media) throw new Error("no media params");
            x = Q(o.media)
        } catch {}
        if (!x) return null;
        if (be(x.id, x.type)) throw new Error("dmca");
        let g = null;
        try {
            g = await Y(x.type, x.id, o.season)
        } catch (a) {
            if (a.status === 404) return null;
            throw a
        }
        if (!g) return null;
        let S = o.episode;
        if (g.meta.type === X.SERIES) {
            let a = g.meta.seasonData.episodes.find(i => i.id === o.episode);
            a || (a = g.meta.seasonData.episodes[0]), S = a.id, (o.season !== g.meta.seasonData.id || o.episode !== a.id) && n(`/media/${o.media}/${g.meta.seasonData.id}/${a.id}`, {
                replace: !0
            })
        }(s = r.onGetMeta) == null || s.call(r, g, S)
    }, []);
    return d && d.message === "extension-no-permission" ? e.jsx(E, {
        children: e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.WAND,
                children: t("player.metadata.extensionPermission.badge")
            }), e.jsx(C, {
                children: t("player.metadata.extensionPermission.title")
            }), e.jsx(I, {
                children: t("player.metadata.extensionPermission.text")
            }), e.jsx(b, {
                onClick: () => {
                    Z({
                        page: "PermissionGrant",
                        redirectUrl: window.location.href
                    })
                },
                theme: "purple",
                padding: "md:px-12 p-2.5",
                className: "mt-6",
                children: t("player.metadata.extensionPermission.button")
            })]
        })
    }) : d && d.message === "dmca" ? e.jsx(E, {
        children: e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.DRAGON,
                children: t("player.metadata.dmca.badge")
            }), e.jsx(C, {
                children: t("player.metadata.dmca.title")
            }), e.jsx(I, {
                children: t("player.metadata.dmca.text")
            }), e.jsx(b, {
                href: "/",
                theme: "purple",
                padding: "md:px-12 p-2.5",
                className: "mt-6",
                children: t("player.metadata.failed.homeButton")
            })]
        })
    }) : d && d.message === "failed-api-metadata" ? e.jsx(E, {
        children: e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.WAND,
                children: t("player.metadata.failed.badge")
            }), e.jsx(C, {
                children: t("player.metadata.api.text")
            }), e.jsx(I, {
                children: t("player.metadata.api.title")
            }), e.jsx(b, {
                href: "/",
                theme: "purple",
                padding: "md:px-12 p-2.5",
                className: "mt-6",
                children: t("player.metadata.failed.homeButton")
            })]
        })
    }) : d ? e.jsx(E, {
        children: e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.WAND,
                children: t("player.metadata.failed.badge")
            }), e.jsx(C, {
                children: t("player.metadata.failed.title")
            }), e.jsx(I, {
                children: t("player.metadata.failed.text")
            }), e.jsx(b, {
                href: "/",
                theme: "purple",
                padding: "md:px-12 p-2.5",
                className: "mt-6",
                children: t("player.metadata.failed.homeButton")
            })]
        })
    }) : !f && !c ? e.jsx(E, {
        children: e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.WAND,
                children: t("player.metadata.notFound.badge")
            }), e.jsx(C, {
                children: t("player.metadata.notFound.title")
            }), e.jsx(I, {
                children: t("player.metadata.notFound.text")
            }), e.jsx(b, {
                href: "/",
                theme: "purple",
                padding: "md:px-12 p-2.5",
                className: "mt-6",
                children: t("player.metadata.notFound.homeButton")
            })]
        })
    }) : e.jsx(E, {
        children: e.jsx("div", {
            className: "flex items-center justify-center",
            children: e.jsx(W, {})
        })
    })
}

function ve(r) {
    const {
        t
    } = R(), o = ee("error"), n = T(), d = m.useMemo(() => {
        const f = r.data;
        let c = "";
        const h = te();
        return c += `URL - ${n.pathname}
`, c += `API - ${h.length>0}

`, Object.values(f.sources).forEach(l => {
            var y;
            c += `${l.id}: ${l.status}
`, l.reason && (c += `${l.reason}
`), (y = l.error) != null && y.message ? c += `${l.error.name??"unknown"}: ${l.error.message}
` : l.error && (c += `${l.error.toString()}
`)
        }), c
    }, [r, n]);
    return e.jsxs(E, {
        children: [e.jsxs(v, {
            children: [e.jsx(P, {
                icon: N.WAND,
                children: t("player.scraping.notFound.badge")
            }), e.jsx(C, {
                children: t("player.scraping.notFound.title")
            }), e.jsx(I, {
                children: t("player.scraping.notFound.text")
            }), e.jsxs("div", {
                className: "flex gap-3",
                children: [e.jsx(b, {
                    href: "/",
                    theme: "secondary",
                    padding: "md:px-12 p-2.5",
                    className: "mt-6",
                    children: t("player.scraping.notFound.homeButton")
                }), e.jsx(b, {
                    onClick: () => o.show(),
                    theme: "purple",
                    padding: "md:px-12 p-2.5",
                    className: "mt-6",
                    children: t("player.scraping.notFound.detailsButton")
                })]
            })]
        }), d ? e.jsx(re, {
            id: o.id,
            onClose: () => o.hide(),
            error: d
        }) : null]
    })
}
const Pe = {
        notfound: "player.scraping.items.notFound",
        failure: "player.scraping.items.failure",
        pending: "player.scraping.items.pending"
    },
    Ce = {
        failure: "error",
        notfound: "noresult",
        pending: "loading",
        success: "success",
        waiting: "waiting"
    };

function z(r) {
    const {
        t
    } = R(), o = Pe[r.status], n = Ce[r.status];
    return e.jsxs("div", {
        className: "grid gap-4 grid-cols-[auto,1fr]",
        "data-source-id": r.id,
        children: [e.jsx(Ee, {
            type: n,
            percentage: r.percentage ?? 0
        }), e.jsxs("div", {
            children: [e.jsx("p", {
                className: n === "loading" ? "text-white" : "text-type-secondary",
                children: r.name
            }), e.jsx(ae, {
                animation: "fade",
                show: !!o,
                children: e.jsx("p", {
                    className: "text-[15px] mt-1",
                    children: o ? t(o) : ""
                })
            }), r.children]
        })]
    })
}

function Ie(r) {
    return e.jsx("div", {
        "data-source-id": r.id,
        className: "w-80 mb-6",
        children: e.jsx("div", {
            className: O({
                "!bg-opacity-100 py-6": r.hasChildren,
                "w-80 rounded-md px-6 bg-video-scraping-card bg-opacity-0": !0
            }),
            children: e.jsx(z, {
                ...r
            })
        })
    })
}

function Ae() {
    const [r, t] = m.useState({}), [o, n] = m.useState([]), [d, f] = m.useState(), c = m.useRef(null), h = m.useCallback(s => {
        t(s.sourceIds.map(a => {
            const i = $().find(p => p.id === a);
            if (!i) throw new Error("invalid source id");
            return {
                name: i.name,
                id: i.id,
                status: "waiting",
                percentage: 0
            }
        }).reduce((a, i) => (a[i.id] = i, a), {})), n(s.sourceIds.map(a => ({
            id: a,
            children: []
        })))
    }, []), l = m.useCallback(s => {
        const a = c.current;
        t(i => (i[s] && (i[s].status = "pending"), a && i[a] && i[a].status === "pending" && (i[a].status = "success"), {
            ...i
        })), f(s), c.current = s
    }, []), y = m.useCallback(s => {
        t(a => (a[s.id] && (a[s.id].status = s.status, a[s.id].reason = s.reason, a[s.id].error = s.error, a[s.id].percentage = s.percentage), {
            ...a
        }))
    }, []), x = m.useCallback(s => {
        t(a => (s.embeds.forEach(i => {
            const u = $().find(j => j.id === i.embedScraperId);
            if (!u) throw new Error("invalid source id");
            const p = {
                embedId: i.embedScraperId,
                name: u.name,
                id: i.id,
                status: "waiting",
                percentage: 0
            };
            a[i.id] = p
        }), {
            ...a
        })), n(a => {
            const i = a.find(u => u.id === s.sourceId);
            if (!i) throw new Error("invalid source id");
            return i.children = s.embeds.map(u => u.id), [...a]
        })
    }, []), g = m.useCallback(() => {
        c.current = null
    }, []), S = m.useCallback(s => (s && c.current && t(a => c.current ? (a[c.current] && (a[c.current].status = "success"), {
        ...a
    }) : a), s), []);
    return {
        initEvent: h,
        startEvent: l,
        updateEvent: y,
        discoverEmbedsEvent: x,
        startScrape: g,
        getResult: S,
        sources: r,
        sourceOrder: o,
        currentSource: d
    }
}

function Me() {
    const {
        sources: r,
        sourceOrder: t,
        currentSource: o,
        updateEvent: n,
        discoverEmbedsEvent: d,
        initEvent: f,
        getResult: c,
        startEvent: h,
        startScrape: l
    } = Ae();
    return {
        startScraping: m.useCallback(async x => {
            const g = U();
            if (g && !D()) {
                l();
                const a = se(g),
                    i = await ne(a.scrapeAll(x), ["completed", "noOutput"]);
                i.on("init", f), i.on("start", h), i.on("update", n), i.on("discoverEmbeds", d);
                const u = await i.promise();
                return u && D() && await k(u.stream), c(u === "" ? null : u)
            }
            l();
            const s = await B().runAll({
                media: x,
                events: {
                    init: f,
                    start: h,
                    update: n,
                    discoverEmbeds: d
                }
            });
            return s && D() && await k(s.stream), c(s)
        }, [f, h, n, d, c, l]),
        sourceOrder: t,
        sources: r,
        currentSource: o
    }
}

function Re(r, t, o, n) {
    const [d, f] = m.useState(!1), c = m.useCallback(() => {
        if (!r.current || !t.current) return;
        const l = [...t.current.querySelectorAll("div[data-source-id]")],
            y = l.findIndex(A => A.getAttribute("data-source-id") === n),
            x = l[y];
        if (!x) return;
        const g = r.current.getBoundingClientRect().width,
            S = t.current.getBoundingClientRect().width,
            s = r.current.getBoundingClientRect().height,
            a = t.current.getBoundingClientRect().top,
            i = x.getBoundingClientRect().top,
            u = x.getBoundingClientRect().height,
            p = i - a,
            j = g / 2 - S / 2,
            w = s / 2 - p - u / 2;
        t.current.style.transform = `translateY(${w}px) translateX(${j}px)`, setTimeout(() => {
            f(!0)
        }, 150)
    }, [n, r, t, f]), h = m.useRef(c);
    return m.useEffect(() => {
        c(), h.current = c
    }, [c, o]), m.useEffect(() => {
        function l() {
            h.current()
        }
        return window.addEventListener("resize", l), () => {
            window.removeEventListener("resize", l)
        }
    }, []), d
}

function De(r) {
    return e.jsxs("div", {
        className: "flex flex-col justify-center items-center h-screen text-center font-medium",
        children: [e.jsx(ie, {}), e.jsx(Se, {
            className: "text-type-danger text-2xl",
            icon: N.WARNING
        }), e.jsx("div", {
            className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
            children: r.children
        })]
    })
}

function Oe(r) {
    const {
        report: t
    } = ce(), {
        startScraping: o,
        sourceOrder: n,
        sources: d,
        currentSource: f
    } = Me(), c = we(), {
        t: h
    } = R(), l = m.useRef(null), y = m.useRef(null), [x, g] = m.useState(!1), S = Re(l, y, n, f), s = m.useRef({
        sourceOrder: n,
        sources: d
    });
    m.useEffect(() => {
        s.current = {
            sourceOrder: n,
            sources: d
        }
    }, [n, d]);
    const a = m.useRef(!1);
    m.useEffect(() => {
        a.current || (a.current = !0, (async () => {
            var p, j;
            const u = await o(r.media);
            c() && ((p = r.onResult) == null || p.call(r, s.current.sources, s.current.sourceOrder), t(oe(r.media, s.current.sourceOrder, s.current.sources)), (j = r.onGetStream) == null || j.call(r, u))
        })().catch(() => g(!0)))
    }, [o, r, t, c]);
    let i = n.findIndex(u => u.id === f || u.children.includes(f ?? ""));
    return i === -1 && (i = n.length - 1), x ? e.jsx(De, {
        children: h("player.turnstile.error")
    }) : e.jsxs("div", {
        className: "h-full w-full relative dir-neutral:origin-top-left flex",
        ref: l,
        children: [!n || n.length === 0 ? e.jsxs("div", {
            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center z-0",
            children: [e.jsx(W, {
                className: "mb-8"
            }), e.jsx("p", {
                children: h("player.turnstile.verifyingHumanity")
            })]
        }) : null, e.jsx("div", {
            className: O({
                "absolute transition-[transform,opacity] opacity-0 dir-neutral:left-0": !0,
                "!opacity-100": S
            }),
            ref: y,
            children: n.map(u => {
                const p = d[u.id],
                    j = Math.abs(n.findIndex(w => w.id === u.id) - i);
                return e.jsx("div", {
                    className: "transition-opacity duration-100",
                    style: {
                        opacity: Math.max(0, 1 - j * .3)
                    },
                    children: e.jsx(Ie, {
                        id: u.id,
                        name: p.name,
                        status: p.status,
                        hasChildren: u.children.length > 0,
                        percentage: p.percentage,
                        children: e.jsx("div", {
                            className: O({
                                "space-y-6 mt-8": u.children.length > 0
                            }),
                            children: u.children.map(w => {
                                const A = d[w];
                                return e.jsx(z, {
                                    id: w,
                                    name: A.name,
                                    status: A.status,
                                    percentage: A.percentage
                                }, w)
                            })
                        })
                    })
                }, u.id)
            })
        })]
    })
}
async function Be() {
    return !(!G().HAS_ONBOARDING || await de() || le.getState().proxySet || ue.getState().completed)
}

function ke(r) {
    const t = r ?? "";
    if (!!!t.match(/^\d+(:\d+)*$/)) return null;
    const n = t.split(":").map(Number).reverse(),
        d = n[2] ?? 0,
        f = Math.min(n[1] ?? 0, 59),
        c = Math.min(n[0] ?? 0, f > 0 ? 59 : 1 / 0);
    return d * 60 * 60 + f * 60 + c
}

function $e() {
    const r = L(),
        t = F(),
        [o, n] = m.useState(null),
        [d] = me("t"),
        {
            status: f,
            playMedia: c,
            reset: h,
            setScrapeNotFound: l,
            shouldStartFromBeginning: y,
            setShouldStartFromBeginning: x
        } = pe(),
        {
            setPlayerMeta: g,
            scrapeMedia: S
        } = fe(),
        s = he(),
        a = JSON.stringify({
            media: t.media,
            season: t.season,
            episode: t.episode
        });
    m.useEffect(() => {
        h()
    }, [a, h]);
    const i = m.useCallback(p => {
            var j, w;
            (p == null ? void 0 : p.type) === "show" ? r(`/media/${t.media}/${(j=p.season)==null?void 0:j.tmdbId}/${(w=p.episode)==null?void 0:w.tmdbId}`): r(`/media/${t.media}`)
        }, [r, t]),
        u = m.useCallback(p => {
            if (!p) return;
            let j;
            d && (j = ke(d) ?? void 0), c(xe(p), ge(p.stream.captions), p.sourceId, y ? 0 : j), x(!1)
        }, [c, d, y, x]);
    return e.jsxs(ye, {
        backUrl: s,
        onMetaChange: i,
        children: [f === M.IDLE ? e.jsx(Ne, {
            onGetMeta: g
        }) : null, f === M.SCRAPING && S ? e.jsx(Oe, {
            media: S,
            onResult: (p, j) => {
                n({
                    sourceOrder: j,
                    sources: p
                }), l()
            },
            onGetStream: u
        }) : null, f === M.SCRAPE_NOT_FOUND && o ? e.jsx(ve, {
            data: o
        }) : null, f === M.PLAYBACK_ERROR ? e.jsx(je, {}) : null]
    })
}

function qe() {
    const r = T(),
        {
            loading: t,
            error: o,
            value: n
        } = V(() => Be());
    if (o) throw new Error("Failed to detect onboarding");
    return t ? null : n ? e.jsx(H, {
        replace: !0,
        to: {
            pathname: "/onboarding",
            search: `redirect=${encodeURIComponent(r.pathname)}`
        }
    }) : e.jsx($e, {})
}
export {
    qe as PlayerView, $e as RealPlayerView, qe as
    default
};
//# sourceMappingURL=PlayerView-BTuYWLfO.js.map