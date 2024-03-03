import {
  $ as V,
  a0 as ce,
  a1 as H,
  a2 as hi,
  a3 as fi,
  r as d,
  a4 as O,
  a5 as gi,
  j as n,
  c as S,
  a6 as Ce,
  a7 as xi,
  a8 as pi,
  a9 as bi,
  aa as yi,
  ab as Bs,
  ac as vi,
  p as K,
  ad as ji,
  ae as wi,
  af as ki,
  ag as Ni,
  ah as Fs,
  q as Te,
  ai as J,
  aj as Si,
  ak as Ci,
  al as Ei,
  am as Kn,
  an as zn,
  ao as Ii,
  ap as Qn,
  aq as cn,
  ar as Li,
  as as un,
  at as Us,
  au as Ti,
  av as U,
  aw as Ri
} from "./vendor-CtbUqpA0.js";
import {
  _ as Pi,
  i as Ai,
  H as fe,
  u as dn,
  a as pt,
  t as Vt,
  r as _i,
  F as Oi,
  b as C,
  c as Mi,
  L as bt,
  d as ie,
  N as Ze,
  e as Di,
  f as $s,
  T as ue,
  g as Bi,
  h as Vs,
  j as Fi,
  k as Ui,
  l as $i,
  m as Vi,
  n as Hi,
  o as Wi,
  p as Gi,
  B as Ki,
  q as zi
} from "./react-dom-BnEYDcZu.js";
import {
  c as Qi,
  a as qi,
  d as Yi,
  f as Xi,
  i as Ji,
  n as Zi,
  p as ea,
  t as ta,
  v as na,
  z as sa,
  h as ra,
  s as ia,
  b as aa,
  m as oa,
  l as la,
  e as ca,
  g as ua,
  j as da,
  k as ma,
  o as ha,
  q as fa,
  r as ga,
  u as xa,
  w as pa,
  x as ba,
  y as ya,
  A as va,
  B as ja,
  C as wa,
  D as ka,
  E as Na,
  F as Sa,
  G as Ca,
  H as Ea,
  I as Ia,
  J as La,
  K as Ta,
  L as Ra,
  M as Pa,
  N as Aa,
  O as _a,
  P as Oa,
  Q as Ma
} from "./locales-BNmjpJ3z.js";
import {
  g as mn,
  I,
  a as j,
  U as Hs,
  F as Da,
  b as Ws,
  s as Ba,
  c as Me
} from "./Icons-XXm5y-G7.js";
import {
  f as Z
} from "./auth-72H9TcpW.js";
import {
  d as Fa,
  f as Ua,
  g as hn,
  h as Gs,
  l as $a,
  F as Va
} from "./caption-parsing-BGqd6Hpv.js";
import {
  H as me
} from "./hls-Di-l_7QN.js";
import "./language-db-C33ehKO5.js";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
      for (const a of i)
          if (a.type === "childList")
              for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
  }).observe(document, {
      childList: !0,
      subtree: !0
  });

  function s(i) {
      const a = {};
      return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
  }

  function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const a = s(i);
      fetch(i.href, a)
  }
})();
let A = function(e) {
      return e.MOVIE = "movie", e.SERIES = "series", e.ANIME = "anime", e
  }({}),
  et = 0;
const z = V(ce(H(e => ({
      bookmarks: {},
      updateQueue: [],
      removeBookmark(t) {
          e(s => {
              et += 1, s.updateQueue.push({
                  id: et.toString(),
                  action: "delete",
                  tmdbId: t
              }), delete s.bookmarks[t]
          })
      },
      addBookmark(t) {
          e(s => {
              et += 1, s.updateQueue.push({
                  id: et.toString(),
                  action: "add",
                  tmdbId: t.tmdbId,
                  type: t.type,
                  title: t.title,
                  year: t.releaseYear,
                  poster: t.poster
              }), s.bookmarks[t.tmdbId] = {
                  type: t.type,
                  title: t.title,
                  year: t.releaseYear,
                  poster: t.poster,
                  updatedAt: Date.now()
              }
          })
      },
      replaceBookmarks(t) {
          e(s => {
              s.bookmarks = t
          })
      },
      clear() {
          e(t => {
              t.bookmarks = {}
          })
      },
      clearUpdateQueue() {
          e(t => {
              t.updateQueue = []
          })
      },
      removeUpdateItem(t) {
          e(s => {
              s.updateQueue = [...s.updateQueue.filter(r => r.id !== t)]
          })
      }
  })), {
      name: "__MW::bookmarks"
  })),
  de = {},
  Ks = {};
async function Ha() {
  var e, t;
  for (const [s, r] of Object.values(Ks)) {
      const i = r.versions.sort((u, m) => u.version - m.version),
          a = s._raw(),
          o = a["--version"] && typeof a["--version"] == "number" ? a["--version"] : 0,
          l = i.filter(u => u.version >= o);
      let c = a;
      try {
          for (const u of l) u.migrate && (localStorage.setItem(`BACKUP-v${u.version}-${r.key}`, JSON.stringify(c)), c = await u.migrate(c))
      } catch (u) {
          console.error(`FAILED TO MIGRATE STORE ${r.key}`, u), c = ((t = (e = l[l.length - 1]).create) == null ? void 0 : t.call(e)) ?? {}
      }
      s.save(c)
  }
}

function Wa(e) {
  const t = e.key ?? "",
      s = e.versions.sort((l, c) => c.version - l.version)[0];

  function r(l) {
      return de[t] || (de[t] = []), de[t].push(l), {
          destroy() {
              de[t] = de[t].filter(c => c === l)
          }
      }
  }

  function i() {
      var c;
      const l = ((c = s.create) == null ? void 0 : c.call(s)) ?? {};
      return l["--version"] = s.version, l
  }

  function a() {
      const l = localStorage.getItem(t);
      if (!l) return i();
      try {
          return JSON.parse(l)
      } catch (c) {
          return console.error(`FAILED TO PARSE LOCALSTORAGE FOR KEY ${t}`, c), i()
      }
  }

  function o(l) {
      const c = {
          ...l
      };
      c["--version"] = s.version, localStorage.setItem(t, JSON.stringify(c)), de[t] || (de[t] = []), de[t].forEach(u => u(window.structuredClone(l)))
  }
  return {
      get() {
          const l = a();
          return delete l["--version"], l
      },
      _raw() {
          return a()
      },
      onChange: r,
      save: o
  }
}

function Ga(e) {
  var r;
  const t = e.versions.sort((i, a) => i.version - a.version);
  if (t.forEach((i, a, o) => {
          if (a !== 0 && i.version !== o[a - 1].version + 1) throw new Error("Version list of store is not incremental")
      }), t.forEach(i => {
          if (i.version < 0) throw new Error("Versions cannot be negative")
      }), ((r = t[0]) == null ? void 0 : r.version) !== 0) throw new Error("Version 0 doesn't exist in version list of store");
  if (!e.versions[e.versions.length - 1].create) throw new Error("Missing create function on latest version of store");
  if (!e.key) throw new Error("storage key not set in store");
  const s = [...t];
  s.pop(), s.forEach(i => {
      if (!i.migrate) throw new Error(`Migration missing on version ${i.version}`)
  })
}

function yt() {
  const e = {
      versions: [],
      key: null
  };
  return {
      setKey(t) {
          return e.key = t, this
      },
      addVersion(t) {
          return e.versions.push(t), this
      },
      build() {
          Ga(e);
          const t = Wa(e);
          return Ks[e.key ?? ""] = [t, e], t
      }
  }
}
const qn = "https://apis.justwatch.com",
  Ka = "https://images.justwatch.com";

function za(e) {
  if (e === A.MOVIE) return "movie";
  if (e === A.SERIES) return "show";
  throw new Error("unsupported type")
}

function Qa(e) {
  if (e === "movie") return A.MOVIE;
  if (e === "show") return A.SERIES;
  throw new Error("unsupported type")
}

function qa(e, t) {
  var i, a;
  const s = Qa(e.object_type);
  let r;
  return s === A.SERIES && (r = (i = e.seasons) == null ? void 0 : i.sort((o, l) => o.season_number - l.season_number).map(o => ({
      id: o.id.toString(),
      number: o.season_number,
      title: o.title
  }))), {
      title: e.title,
      id: e.id.toString(),
      year: (a = e.original_release_year) == null ? void 0 : a.toString(),
      poster: e.poster ? `${Ka}${e.poster.replace("{profile}","s166")}` : void 0,
      type: s,
      seasons: r,
      seasonData: t ? {
          id: t.id.toString(),
          number: t.season_number,
          title: t.title,
          episodes: t.episodes.sort((o, l) => o.episode_number - l.episode_number).map(o => ({
              id: o.id.toString(),
              number: o.episode_number,
              title: o.title
          }))
      } : void 0
  }
}
const Ya = "4.4.2",
  Xa = "https://discord.movie-web.app",
  Ja = "https://github.com/movie-web/movie-web",
  Za = "https://ko-fi.com/movieweb",
  eo = "G-44YVXRL61C",
  to = "https://backend.movie-web.app";
var ee = {
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
  PACKAGE_VERSION: "4.4.2"
};
const no = {
  TMDB_READ_API_KEY: ee.VITE_TMDB_READ_API_KEY,
  APP_VERSION: void 0,
  GITHUB_LINK: void 0,
  DONATION_LINK: void 0,
  DISCORD_LINK: void 0,
  ONBOARDING_CHROME_EXTENSION_INSTALL_LINK: ee.VITE_ONBOARDING_CHROME_EXTENSION_INSTALL_LINK,
  ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK: ee.VITE_ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK,
  ONBOARDING_PROXY_INSTALL_LINK: ee.VITE_ONBOARDING_PROXY_INSTALL_LINK,
  DMCA_EMAIL: ee.VITE_DMCA_EMAIL,
  CORS_PROXY_URL: ee.VITE_CORS_PROXY_URL,
  NORMAL_ROUTER: ee.VITE_NORMAL_ROUTER,
  BACKEND_URL: ee.VITE_BACKEND_URL,
  DISALLOWED_IDS: ee.VITE_DISALLOWED_IDS,
  TURNSTILE_KEY: ee.VITE_TURNSTILE_KEY,
  CDN_REPLACEMENTS: ee.VITE_CDN_REPLACEMENTS,
  HAS_ONBOARDING: ee.VITE_HAS_ONBOARDING
};

function so(e) {
  var s;
  let t = (s = window == null ? void 0 : window.__CONFIG__) == null ? void 0 : s[`VITE_${e}`];
  return t != null && t.length === 0 && (t = void 0), no[e] ?? t ?? void 0
}

function te(e, t) {
  var s;
  return ((s = so(e)) == null ? void 0 : s.toString()) ?? t ?? ""
}

function _() {
  const e = te("DMCA_EMAIL"),
      t = te("ONBOARDING_CHROME_EXTENSION_INSTALL_LINK"),
      s = te("ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK"),
      r = te("ONBOARDING_PROXY_INSTALL_LINK"),
      i = te("TURNSTILE_KEY");
  return {
      APP_VERSION: Ya,
      GITHUB_LINK: Ja,
      DONATION_LINK: Za,
      DISCORD_LINK: Xa,
      DMCA_EMAIL: e.length > 0 ? e : null,
      ONBOARDING_CHROME_EXTENSION_INSTALL_LINK: t.length > 0 ? t : null,
      ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK: s.length > 0 ? s : null,
      ONBOARDING_PROXY_INSTALL_LINK: r.length > 0 ? r : null,
      BACKEND_URL: te("BACKEND_URL", to),
      TMDB_READ_API_KEY: te("TMDB_READ_API_KEY"),
      PROXY_URLS: te("CORS_PROXY_URL").split(",").map(a => a.trim()),
      NORMAL_ROUTER: te("NORMAL_ROUTER", "false") === "true",
      HAS_ONBOARDING: te("HAS_ONBOARDING", "false") === "true",
      TURNSTILE_KEY: i.length > 0 ? i : null,
      DISALLOWED_IDS: te("DISALLOWED_IDS", "").split(",").map(a => a.trim()).filter(a => a.length > 0),
      CDN_REPLACEMENTS: te("CDN_REPLACEMENTS", "").split(",").map(a => a.split(":").map(o => o.trim()).filter(o => o.length > 0)).filter(a => a.length === 2)
  }
}
let q = function(e) {
  return e.MOVIE = "movie", e.TV = "tv", e
}({});
const ro = "^1.0.2";

function zs(e) {
  return hi.satisfies(e, ro)
}
const io = new Promise(e => {
  setTimeout(() => {
      e()
  }, 500)
});
let Ht = !1;
async function vt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
      s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
  return await io, new Promise(r => {
      s >= 0 && setTimeout(() => r(null), s), fi({
          name: e,
          body: t
      }).then(i => {
          Ht = !0, r(i)
      }).catch(() => {
          Ht = !1, r(null)
      })
  })
}
async function ao(e) {
  return vt("makeRequest", e)
}
async function oo(e) {
  return vt("prepareStream", e)
}
async function lo(e) {
  return vt("openPage", e)
}
async function Qs() {
  return await vt("hello", void 0, 500)
}

function he() {
  return Ht
}
async function zh() {
  const e = await Qs();
  return !(e != null && e.success) || !zs(e.version) ? !1 : e.allowed && e.hasPermission
}
const F = V(ce(H(e => ({
      account: null,
      backendUrl: null,
      proxySet: null,
      setAccount(t) {
          e(s => {
              s.account = t
          })
      },
      removeAccount() {
          e(t => {
              t.account = null
          })
      },
      setBackendUrl(t) {
          e(s => {
              s.backendUrl = t
          })
      },
      setProxySet(t) {
          e(s => {
              s.proxySet = t
          })
      },
      setAccountProfile(t) {
          e(s => {
              s.account && (s.account.profile = t)
          })
      },
      updateAccount(t) {
          e(s => {
              s.account && (s.account = {
                  ...s.account,
                  ...t
              })
          })
      },
      updateDeviceName(t) {
          e(s => {
              s.account && (s.account.deviceName = t)
          })
      }
  })), {
      name: "__MW::auth"
  })),
  co = "https://backend.movie-web.app/metrics/providers",
  uo = "https://backend.movie-web.app/metrics/captcha",
  mo = () => gi(32);

function ho() {
  return he() ? "extension" : F.getState().proxySet ? "custom-proxy" : "default"
}

function qs(e, t) {
  const s = e.toString(),
      r = (e.stack ?? "").split(`
`, t + 1);
  return r.pop(), `${s}

${r.join(`
`)}`
}
async function fo(e) {
  return O(co, {
      method: "POST",
      body: {
          items: e,
          tool: ho(),
          batchId: mo()
      }
  })
}
const go = {
  success: "success",
  notfound: "notfound",
  failure: "failed",
  pending: null,
  waiting: null
};

function Se(e, t, s, r, i) {
  var c, u;
  const a = (c = e.episode) == null ? void 0 : c.tmdbId,
      o = (u = e.season) == null ? void 0 : u.tmdbId;
  let l;
  return i instanceof Error && (l = i), {
      status: r,
      providerId: t,
      title: e.title,
      tmdbId: e.tmdbId,
      type: e.type,
      embedId: s ?? void 0,
      episodeId: a,
      seasonId: o,
      errorMessage: l == null ? void 0 : l.message,
      fullError: l ? qs(l, 5) : void 0
  }
}

function Yn(e, t, s) {
  const r = go[s.status];
  if (!r) return null;
  let i, a;
  e.type === "show" && (i = e.episode.tmdbId, a = e.season.tmdbId);
  let o;
  return s.error instanceof Error && (o = s.error), {
      status: r,
      providerId: t,
      title: e.title,
      tmdbId: e.tmdbId,
      type: e.type,
      embedId: s.embedId,
      episodeId: i,
      seasonId: a,
      errorMessage: s.reason ?? (o == null ? void 0 : o.message),
      fullError: o ? qs(o, 5) : void 0
  }
}

function Qh(e, t, s) {
  const r = [];
  return t.forEach(i => {
      const a = s[i.id];
      i.children.forEach(l => {
          const c = s[l];
          if (!c.embedId) return;
          const u = Yn(e, a.id, c);
          u && r.push(u)
      });
      const o = Yn(e, a.id, a);
      o && r.push(o)
  }), r
}

function Ys() {
  return {
      report: d.useCallback(t => {
          t.length !== 0 && fo(t).catch(() => {})
      }, [])
  }
}

function Xn(e) {
  O(uo, {
      method: "POST",
      body: {
          success: e
      }
  }).catch(() => {})
}
const ct = V(H((e, t) => ({
  isInWidget: !1,
  turnstiles: [],
  cbs: [],
  processToken(s, r) {
      const i = t().cbs,
          a = t().turnstiles.find(o => o.id === r);
      (a == null ? void 0 : a.id) === r && (i.forEach(o => o(s)), e(o => {
          o.cbs = []
      }))
  },
  getToken() {
      return new Promise((s, r) => {
          e(i => {
              i.cbs = [...i.cbs, a => {
                  a ? s(a) : r(new Error("Failed to get token"))
              }]
          })
      })
  },
  setTurnstile(s, r, i) {
      e(a => {
          a.turnstiles = a.turnstiles.filter(o => o.id !== s), r && a.turnstiles.push({
              controls: r,
              isInPopout: i,
              id: s
          })
      })
  }
})));

function Xs() {
  const e = ct.getState().turnstiles,
      t = e.find(s => s.isInPopout);
  return t || e[0]
}

function xo() {
  return !!Xs()
}
async function po() {
  const e = Xs();
  try {
      window.turnstile.execute(document.querySelector(`#${e.id}`), {});
      const t = await ct.getState().getToken();
      return Xn(!0), t
  } catch (t) {
      throw Xn(!1), t
  }
}

function Js(e) {
  const t = _().TURNSTILE_KEY,
      s = d.useRef(null),
      r = ct(a => a.setTurnstile),
      i = ct(a => a.processToken);
  return t ? n.jsx("div", {
      className: S({
          hidden: !e.isInPopout
      }),
      children: n.jsx(Pi, {
          sitekey: t,
          onLoad: (a, o) => {
              s.current = a, r(a, o, !!e.isInPopout)
          },
          onError: () => {
              const a = s.current;
              a && i(null, a)
          },
          onVerify: a => {
              var l;
              const o = s.current;
              o && (i(a, o), (l = e.onUpdateShow) == null || l.call(e, !1))
          },
          onBeforeInteractive: () => {
              var a;
              (a = e.onUpdateShow) == null || a.call(e, !0)
          },
          refreshExpired: "never",
          execution: "render"
      })
  }) : null
}
let ut = null,
  De = null;

function qh(e) {
  ut = e
}

function jt() {
  return ut ?? []
}

function fn(e) {
  De = e
}

function bo() {
  if (!De) return null;
  try {
      const e = xi(De);
      if (!e.exp) return `jwt|${De}`;
      if (Date.now() / 1e3 < e.exp) return `jwt|${De}`
  } catch {}
  return null
}
async function Yh(e) {
  if (ut) return;
  ut = (await ir(`${e}/metadata`)).flat()
}

function Jn(e) {
  let t = {};
  return e.type === "show" && (t = {
      episodeNumber: e.episode.number.toString(),
      episodeTmdbId: e.episode.tmdbId,
      seasonNumber: e.season.number.toString(),
      seasonTmdbId: e.season.tmdbId
  }), {
      type: e.type,
      releaseYear: e.releaseYear.toString(),
      imdbId: e.imdbId,
      tmdbId: e.tmdbId,
      title: e.title,
      ...t
  }
}

function tt(e, t) {
  Object.entries(t).forEach(s => {
      s[1] && e.searchParams.set(s[0], s[1])
  })
}

function Wt(e) {
  const t = s => new URL(`${e}${s}`);
  return {
      scrapeSource(s, r) {
          const i = t("/scrape/source");
          return tt(i, Jn(r)), tt(i, {
              id: s
          }), i.toString()
      },
      scrapeAll(s) {
          const r = t("/scrape");
          return tt(r, Jn(s)), r.toString()
      },
      scrapeEmbed(s, r) {
          const i = t("/scrape/embed");
          return tt(i, {
              id: s,
              url: r
          }), i.toString()
      }
  }
}
async function gn() {
  let e = bo();
  return !e && xo() && (e = `turnstile|${await po()}`), e
}

function Zn(e) {
  return e.length === 0 ? {} : JSON.parse(e)
}
async function Gt(e, t) {
  const s = await gn(),
      r = new URL(e);
  s && r.searchParams.set("token", s);
  const i = new EventSource(r.toString());
  let a, o;
  const l = new Promise((c, u) => {
      o = c, a = u
  });
  return t.forEach(c => {
      i.addEventListener(c, u => {
          i.close(), o(Zn(u.data))
      })
  }), i.addEventListener("token", c => {
      fn(Zn(c.data))
  }), i.addEventListener("error", c => {
      if (i.close(), c.data) {
          const u = JSON.parse(c.data);
          let m = new Error("scrape error");
          u.name === Ce.name && (m = new Ce("Notfound from server")), Object.assign(m, u), a(m);
          return
      }
      console.error("Failed to connect to SSE", c), a(c)
  }), i.addEventListener("message", c => {
      if (!c) {
          i.close();
          return
      }
      setTimeout(() => {
          a(new Error("SSE closed improperly"))
      }, 1e3)
  }), {
      promise: () => l,
      on(c, u) {
          i.addEventListener(c, m => u(JSON.parse(m.data)))
      }
  }
}
const yo = _().PROXY_URLS,
  vo = ["proxy", "api"];

function es(e) {
  try {
      return !!new URL(e)
  } catch {
      return !1
  }
}

function jo(e) {
  return vo.includes(e)
}

function wo(e) {
  const t = e.split(";").map(s => s.split("=", 2).filter(r => r.length !== 0)).filter(s => s.length === 2);
  return Object.fromEntries(t)
}

function Zs() {
  const e = F.getState().proxySet ?? yo,
      t = [];
  return e.forEach(s => {
      if (!s.startsWith("|") && es(s)) {
          t.push({
              url: s,
              type: "proxy"
          });
          return
      }
      const r = /^\|([^|]+)\|(.*)$/g.exec(s);
      if (!r || !r[2] || !es(r[2])) return;
      const a = wo(r[1]).type ?? "proxy";
      jo(a) && t.push({
          url: r[2],
          type: a
      })
  }), t
}

function er() {
  return Zs().filter(e => e.type === "proxy").map(e => e.url)
}

function ko() {
  return Zs().filter(e => e.type === "api").map(e => e.url)
}

function No(e) {
  return typeof e == "string" ? "string" : e instanceof FormData ? "FormData" : e instanceof URLSearchParams ? "URLSearchParams" : "object"
}

function So(e) {
  return e instanceof FormData || e instanceof URLSearchParams ? [...e] : e
}

function tr(e) {
  let t = -1;
  return () => {
      const s = e();
      (t === -1 || t >= s.length) && (t = Math.floor(Math.random() * s.length));
      const r = s[t];
      return t = (t + 1) % s.length, r
  }
}
const nr = tr(er),
  sr = tr(ko);
async function Co(e, t) {
  const s = await gn(),
      r = new Headers(t == null ? void 0 : t.headers);
  s && r.set("X-Token", s);
  const i = await fetch(e, t ? {
          ...t,
          headers: r
      } : void 0),
      a = i.headers.get("X-Token");
  return a && fn(a), i
}

function Eo() {
  return async (t, s) => pi(nr(), Co)(t, s)
}

function Io(e, t) {
  const s = e.map(r => r.toLowerCase());
  return new Headers(Object.entries(t).filter(r => s.includes(r[0].toLowerCase())))
}

function Lo() {
  return async (t, s) => {
      const r = await ao({
          url: t,
          ...s,
          body: So(s.body),
          bodyType: No(s.body)
      });
      if (!(r != null && r.success)) throw new Error(`extension error: ${r==null?void 0:r.error}`);
      const i = r.response;
      return {
          body: i.body,
          finalUrl: i.finalUrl,
          statusCode: i.statusCode,
          headers: Io(s.readHeaders, i.headers)
      }
  }
}
const rr = O.create({
  retry: 0
});

function ts(e, t) {
  let s = e;
  return Object.entries(t).forEach(r => {
      let [i, a] = r;
      s = s.replace(`{${i}}`, encodeURIComponent(a))
  }), s
}

function ir(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return rr(e, t)
}
async function xn(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = (s == null ? void 0 : s.baseURL) ?? "";
  r.length > 0 && r.endsWith("/") && t.startsWith("/") ? r += t.slice(1) : r.length > 0 && !r.endsWith("/") && !t.startsWith("/") ? r += `/${t}` : r += t;
  const i = new URL(r);
  Object.entries((s == null ? void 0 : s.params) ?? {}).forEach(l => {
      let [c, u] = l;
      i.searchParams.set(c, u)
  }), Object.entries((s == null ? void 0 : s.query) ?? {}).forEach(l => {
      let [c, u] = l;
      i.searchParams.set(c, u)
  });
  let a = s.headers ?? {};
  const o = await gn();
  return o && (a = {
      ...a,
      "X-Token": o
  }), rr(e, {
      ...s,
      baseURL: void 0,
      params: {
          destination: i.toString()
      },
      query: {},
      headers: a,
      onResponse(l) {
          var u;
          const c = l.response.headers.get("X-Token");
          c && fn(c), (u = s.onResponse) == null || u.call(s, l)
      }
  })
}

function Kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return xn(nr(), e, t)
}

function dt(e) {
  if (e === A.MOVIE) return q.MOVIE;
  if (e === A.SERIES) return q.TV;
  throw new Error("unsupported type")
}

function mt(e) {
  if (e === "movie") return A.MOVIE;
  if (e === "show") return A.SERIES;
  throw new Error("unsupported type")
}

function Ge(e) {
  if (e === q.MOVIE) return A.MOVIE;
  if (e === q.TV) return A.SERIES;
  throw new Error("unsupported type")
}

function To(e) {
  if (e === q.MOVIE) return "movie";
  if (e === q.TV) return "show";
  throw new Error("unsupported type")
}

function Ro(e, t) {
  var i, a;
  const s = Ge(e.object_type);
  let r;
  return s === A.SERIES && (r = (i = e.seasons) == null ? void 0 : i.sort((o, l) => o.season_number - l.season_number).map(o => ({
      title: o.title,
      id: o.id.toString(),
      number: o.season_number
  }))), {
      title: e.title,
      id: e.id.toString(),
      year: (a = e.original_release_year) == null ? void 0 : a.toString(),
      poster: e.poster,
      type: s,
      seasons: r,
      seasonData: t ? {
          id: t.id.toString(),
          number: t.season_number,
          title: t.title,
          episodes: t.episodes.sort((o, l) => o.episode_number - l.episode_number).map(o => ({
              id: o.id.toString(),
              number: o.episode_number,
              title: o.title,
              air_date: o.air_date
          }))
      } : void 0
  }
}

function Po(e) {
  const t = To(e.object_type);
  return {
      title: e.title,
      id: e.id.toString(),
      year: e.original_release_year ?? 0,
      poster: e.poster,
      type: t
  }
}

function Be(e, t, s) {
  return ["tmdb", dt(e), t, bi(s, {
      lower: !0,
      strict: !0
  })].join("-")
}

function Ao(e) {
  return Be(mt(e.type), e.id, e.title)
}

function Xh(e) {
  const [t, s, r] = e.split("-", 3);
  if (t !== "tmdb") return null;
  let i;
  try {
      i = Ge(s)
  } catch {
      return null
  }
  return {
      type: i,
      id: r
  }
}
const _o = "https://api.themoviedb.org/3",
  Oo = {
      accept: "application/json",
      Authorization: `Bearer ${_().TMDB_READ_API_KEY}`
  };
async function $e(e, t) {
  return await ir(encodeURI(e), {
      headers: Oo,
      baseURL: _o,
      params: {
          ...t
      }
  })
}
async function ar(e) {
  return (await $e("search/multi", {
      query: e,
      include_adult: !1,
      language: "en-US",
      page: 1
  })).results.filter(r => r.media_type === q.MOVIE || r.media_type === q.TV)
}
async function Mo(e) {
  const t = await ar(e);
  if (t.length === 0) return;
  const s = t[0],
      r = s.media_type === q.MOVIE ? s.title : s.name;
  return `/media/${Be(Ge(s.media_type),s.id.toString(),r)}`
}

function wt(e, t) {
  if (t === q.MOVIE) return $e(`/movie/${e}`, {
      append_to_response: "external_ids"
  });
  if (t === q.TV) return $e(`/tv/${e}`, {
      append_to_response: "external_ids"
  });
  throw new Error("Invalid media type")
}

function ht(e) {
  if (e) return `https://image.tmdb.org/t/p/w342/${e}`
}
async function or(e, t) {
  return (await $e(`/tv/${e}/season/${t}`)).episodes.map(r => ({
      id: r.id,
      episode_number: r.episode_number,
      title: r.name,
      air_date: r.air_date
  }))
}
async function lr(e) {
  const s = (await $e(`/find/${e}`, {
      external_source: "imdb_id"
  })).movie_results[0];
  if (s) return s.id.toString()
}

function Do(e, t) {
  if (Ge(t) === A.SERIES) {
      const i = e;
      return {
          title: i.name,
          poster: ht(i.poster_path),
          id: i.id,
          original_release_year: new Date(i.first_air_date).getFullYear(),
          object_type: t
      }
  }
  const r = e;
  return {
      title: r.title,
      poster: ht(r.poster_path),
      id: r.id,
      original_release_year: new Date(r.release_date).getFullYear(),
      object_type: t
  }
}

function Bo(e, t) {
  if (t === A.MOVIE) {
      const s = e;
      return {
          id: e.id,
          title: s.title,
          object_type: dt(t),
          poster: ht(s.poster_path) ?? void 0,
          original_release_year: new Date(s.release_date).getFullYear()
      }
  }
  if (t === A.SERIES) {
      const s = e;
      return {
          id: e.id,
          title: s.name,
          object_type: dt(t),
          seasons: s.seasons.map(r => ({
              id: r.id,
              season_number: r.season_number,
              title: r.name
          })),
          poster: ht(s.poster_path) ?? void 0,
          original_release_year: new Date(s.first_air_date).getFullYear()
      }
  }
  throw new Error("unsupported type")
}
async function zt(e, t, s) {
  const r = await wt(t, dt(e));
  if (!r) return null;
  const i = r.external_ids.imdb_id ?? void 0;
  let a;
  if (e === A.SERIES) {
      const c = r.seasons;
      let u = c.find(m => m.id.toString() === s);
      if (u || (u = c.find(m => m.season_number === 1)), u) {
          const m = await or(r.id.toString(), u.season_number);
          a = {
              id: u.id.toString(),
              season_number: u.season_number,
              title: u.name,
              episodes: m
          }
      }
  }
  const o = Bo(r, e);
  if (!o) return null;
  const l = Ro(o, a);
  return l ? {
      meta: l,
      imdbId: i,
      tmdbId: t
  } : null
}
async function cr(e, t, s) {
  var c, u, m, b, g;
  const r = za(e);
  let i;
  try {
      const h = ts("/content/titles/{type}/{id}/locale/en_US", {
          type: r,
          id: t
      });
      i = await Kt(h, {
          baseURL: qn
      })
  } catch (h) {
      if (h instanceof yi && (h.statusCode === 400 || h.statusCode === 404)) return null;
      throw h
  }
  let a = (c = i.external_ids.find(h => h.provider === "imdb_latest")) == null ? void 0 : c.external_id;
  a || (a = (u = i.external_ids.find(h => h.provider === "imdb")) == null ? void 0 : u.external_id);
  let o = (m = i.external_ids.find(h => h.provider === "tmdb_latest")) == null ? void 0 : m.external_id;
  o || (o = (b = i.external_ids.find(h => h.provider === "tmdb")) == null ? void 0 : b.external_id);
  let l;
  if (i.object_type === "show") {
      const h = s ?? ((g = i.seasons) == null ? void 0 : g[0].id.toString()) ?? "",
          f = ts("/content/titles/show_season/{id}/locale/en_US", {
              id: h
          });
      l = await Kt(f, {
          baseURL: qn
      })
  }
  return {
      meta: qa(i, l),
      imdbId: a,
      tmdbId: o
  }
}

function Qt(e) {
  return !!(e.startsWith("/media/JW") || e.startsWith("/media/tmdb-show"))
}

function Fo(e) {
  return !!e.startsWith("/media/tmdb-show")
}
async function Uo(e) {
  if (!Qt(e)) return;
  const t = e.split("/").slice(2),
      [, s, r] = t[0].split("-", 3),
      i = t.slice(1).map(u => `/${u}`).join("");
  if (Fo(e)) {
      const u = await wt(r, q.TV);
      return `/media/${Be(A.SERIES,u.id.toString(),u.name)}${i}`
  }
  const a = Ge(s),
      o = await cr(a, r);
  if (!o) return;
  const {
      tmdbId: l,
      imdbId: c
  } = o;
  if (!(!l && !c) && c && a === A.MOVIE) {
      const u = await lr(c);
      if (u) return `/media/${Be(a,u,o.meta.title)}`;
      if (l) return `/media/${Be(a,l,o.meta.title)}`
  }
}
class ur {
  constructor() {
      this.INTERVAL_MS = 2 * 60 * 1e3, this._interval = null, this._compare = null, this._storage = []
  }
  initialize() {
      if (this._interval) throw new Error("cache is already initialized");
      this._interval = setInterval(() => {
          const t = new Date;
          this._storage.filter(s => !(s.expiry < t))
      }, this.INTERVAL_MS)
  }
  destroy() {
      this._interval && clearInterval(this._interval), this.clear()
  }
  setCompare(t) {
      this._compare = t
  }
  has(t) {
      return !!this.get(t)
  }
  get(t) {
      if (!this._compare) throw new Error("Compare function not set");
      const s = this._storage.find(r => this._compare && this._compare(r.key, t));
      if (s) return s.value
  }
  set(t, s, r) {
      if (!this._compare) throw new Error("Compare function not set");
      const i = this._storage.find(o => this._compare && this._compare(o.key, t)),
          a = new Date(new Date().getTime() + r * 1e3);
      if (i) {
          i.key = t, i.value = s, i.expiry = a;
          return
      }
      this._storage.push({
          key: t,
          value: s,
          expiry: a
      })
  }
  remove(t) {
      if (!this._compare) throw new Error("Compare function not set");
      this._storage.filter(s => !(this._compare && this._compare(s.key, t)))
  }
  clear() {
      this._storage = []
  }
}
const Fe = new ur;
Fe.setCompare((e, t) => e.searchQuery.trim() === t.searchQuery.trim());
Fe.initialize();
async function dr(e) {
  if (Fe.has(e)) return Fe.get(e);
  const {
      searchQuery: t
  } = e, r = (await ar(t)).map(l => {
      const c = Do(l, l.media_type);
      return Po(c)
  }), i = r.filter(l => l.poster), a = r.filter(l => !l.poster), o = i.concat(a);
  return Fe.set(e, o, 3600), o
}

function ns(e) {
  return e.trim().toLowerCase().replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_")
}

function $o(e, t) {
  return ns(e) === ns(t)
}
async function mr(e, t) {
  const s = (a, o) => Math.abs(a - o) <= 1,
      r = {},
      i = await Promise.all(Object.values(e).map(async a => {
          const o = Number(a.year.toString().split("-")[0]),
              c = (await dr({
                  searchQuery: `${a.title} ${o}`
              })).find(u => s(Number(u.year), o) && $o(u.title, a.title));
          if (!c) {
              console.error(`No item found for migration: ${a.title}`);
              return
          }
          return {
              id: a.mediaId,
              data: c
          }
      }));
  for (const a of i.filter(Boolean)) {
      if (!a) continue;
      let o = [
          ["0", "0"]
      ];
      if (a.data.type === "show") {
          const l = await zt(A.SERIES, a.data.id);
          if (!l || !(l != null && l.meta.seasons)) return;
          o = [...new Set(t != null && t.items ? t.items.filter(m => m.mediaId === a.id).map(m => m.seasonId) : ["0"])].map(m => {
              var b, g;
              return {
                  num: m,
                  season: (g = (b = l.meta) == null ? void 0 : b.seasons) == null ? void 0 : g[Math.max(0, m - 1)]
              }
          }).map(m => {
              var b;
              return m ? [m.num, (b = m == null ? void 0 : m.season) == null ? void 0 : b.id] : []
          }).filter(m => m.length > 0)
      }
      r[a.id] || (r[a.id] = {}), await Promise.all(o.map(async l => {
          let [c, u] = l;
          c && (r[a.id][c] = await zt(mt(a.data.type), a.data.id, u === "0" || u === null ? void 0 : u))
      }))
  }
  return r
}
async function Vo(e) {
  const t = e;
  if (!t) return;
  const s = {};
  t.bookmarks.forEach(a => {
      s[a.mediaId] || (s[a.mediaId] = a)
  });
  const r = await mr(s);
  return r ? {
      bookmarks: Object.keys(r).map(a => r[a][0]).map(a => a == null ? void 0 : a.meta).filter(Boolean)
  } : void 0
}
async function Ho(e) {
  var o, l, c, u;
  const t = e;
  if (!t) return;
  const s = {};
  t.items.forEach(m => {
      s[m.mediaId] || (s[m.mediaId] = m)
  });
  const r = await mr(s, t);
  if (!r) return;
  const i = {
          ...t,
          items: []
      },
      a = Date.now();
  for (const m of t.items)
      if (m.mediaType === "movie") {
          if (!((o = r[m.mediaId][0]) != null && o.meta)) continue;
          const b = {
              item: {
                  meta: (l = r[m.mediaId][0]) == null ? void 0 : l.meta
              },
              progress: m.progress,
              percentage: m.percentage,
              watchedAt: Date.now()
          };
          t.items = t.items.filter(g => JSON.stringify(g) !== JSON.stringify(m)), i.items.push(b)
      } else if (m.mediaType === "series") {
      if (!((c = r[m.mediaId][m.seasonId]) != null && c.meta)) continue;
      const b = (u = r[m.mediaId][m.seasonId]) == null ? void 0 : u.meta;
      if (b.type !== "series") return;
      const g = {
          item: {
              meta: b,
              series: {
                  episode: Number(m.episodeId),
                  season: Number(m.seasonId),
                  seasonId: b.seasonData.id,
                  episodeId: b.seasonData.episodes[Number(m.episodeId) - 1].id
              }
          },
          progress: m.progress,
          percentage: m.percentage,
          watchedAt: a + Number(m.seasonId) * 1e3 + Number(m.episodeId)
      };
      if (i.items.find(h => {
              var f, y;
              return h.item.meta.id === g.item.meta.id && ((f = h.item.series) == null ? void 0 : f.episodeId) === ((y = g.item.series) == null ? void 0 : y.episodeId)
          })) continue;
      t.items = t.items.filter(h => JSON.stringify(h) !== JSON.stringify(m)), i.items.push(g)
  }
  return i
}

function Wo(e) {
  return e != null
}
async function hr(e, t) {
  const s = await cr(t, e);
  if (!s) return;
  const {
      tmdbId: r,
      imdbId: i
  } = s;
  if (!(!r && !i)) {
      if (i && t === A.MOVIE) {
          const a = await lr(i);
          if (a) return a
      }
      if (r) return r
  }
}
async function Go(e) {
  const t = e.bookmarks.map(async s => ({
      ...s,
      id: await hr(s.id, s.type).catch(() => {})
  }));
  return {
      bookmarks: (await Promise.all(t)).filter(s => s.id)
  }
}
async function Ko(e) {
  return {
      items: (await Promise.all(e.items.map(async s => {
          try {
              const r = await hr(s.item.meta.id, s.item.meta.type);
              if (!r) return null;
              const i = structuredClone(s);
              if (i.item.meta.id = r, i.item.series) {
                  const a = i.item.series,
                      l = (await wt(r, q.TV)).seasons.find(m => m.season_number === a.season);
                  if (!l) return null;
                  const u = (await or(r, l.season_number)).find(m => m.episode_number === a.episode);
                  if (!u) return null;
                  i.item.series.episodeId = u.id.toString(), i.item.series.seasonId = l.id.toString()
              }
              return i
          } catch {
              return null
          }
      }))).filter(Wo)
  }
}
const zo = {
  [A.ANIME]: null,
  [A.MOVIE]: "movie",
  [A.SERIES]: "show"
};
yt().setKey("mw-bookmarks").addVersion({
  version: 0,
  migrate(e) {
      return Vo(e)
  }
}).addVersion({
  version: 1,
  migrate(e) {
      return Go(e)
  }
}).addVersion({
  version: 2,
  migrate(e) {
      const t = {};
      for (const s of e.bookmarks) {
          const r = zo[s.type];
          r && (t[s.id] = {
              title: s.title,
              year: s.year ? Number(s.year) : void 0,
              poster: s.poster,
              type: r,
              updatedAt: Date.now()
          })
      }
      return z.getState().replaceBookmarks(t), {
          bookmarks: []
      }
  }
}).addVersion({
  version: 3,
  create() {
      return {
          bookmarks: []
      }
  }
}).build();
const Qo = {
      description: "movie-web is a web application that searches the internet for streams. The team aims for a mostly minimalistic approach to consuming content.",
      faqTitle: "Common questions",
      q1: {
          body: "movie-web does not host any content. When you click on something to watch, the internet is searched for the selected media (On the loading screen and in the 'video sources' tab you can see which source you're using). Media never gets uploaded by movie-web, everything is through this searching mechanism.",
          title: "Where does the content come from?"
      },
      q2: {
          body: "It's not possible to request a show or movie, movie-web does not manage any content. All content is viewed through sources on the internet.",
          title: "Where can I request a show or movie?"
      },
      q3: {
          body: "Our search results are powered by The Movie Database (TMDB) and display regardless of whether our sources actually have the content.",
          title: "The search results display the show or movie, why can't I play it?"
      },
      title: "About movie-web"
  },
  qo = {
      copied: "Copied",
      copy: "Copy"
  },
  Yo = {
      createAccount: "Don't have an account yet? <0>Create an account.</0>",
      deviceNameLabel: "Device name",
      deviceNamePlaceholder: "Personal phone",
      generate: {
          description: "Your passphrase acts as your username and password. Make sure to keep it safe as you will need to enter it to login to your account",
          next: "I have saved my passphrase",
          passphraseFrameLabel: "Passphrase",
          title: "Your passphrase"
      },
      hasAccount: "Already have an account? <0>Login here.</0>",
      login: {
          description: "Please enter your passphrase to login to your account",
          deviceLengthError: "Please enter a device name",
          passphraseLabel: "12-Word passphrase",
          passphrasePlaceholder: "Passphrase",
          submit: "Login",
          title: "Login to your account",
          validationError: "Incorrect or incomplete passphrase"
      },
      register: {
          information: {
              color1: "Profile color one",
              color2: "Profile color two",
              header: "Enter a name for your device and pick colours and a user icon of your choosing",
              icon: "User icon",
              next: "Next",
              title: "Account information"
          }
      },
      trust: {
          failed: {
              text: "Did you configure it correctly?",
              title: "Failed to reach server"
          },
          host: "You are connecting to <0>{{hostname}}</0> - please confirm you trust it before making an account",
          no: "Go back",
          title: "Do you trust this server?",
          yes: "I trust this server"
      },
      verify: {
          description: "Please enter your passphrase from earlier to confirm you have saved it and to create your account",
          invalidData: "Data is not valid",
          noMatch: "Passphrase doesn't match",
          passphraseLabel: "Your 12-word passphrase",
          recaptchaFailed: "ReCaptcha validation failed",
          register: "Create account",
          title: "Confirm your passphrase"
      }
  },
  Xo = {
      badge: "It broke",
      details: "Error details",
      reloadPage: "Reload the page",
      showError: "Show error details",
      title: "We encountered an error!"
  },
  Jo = {
      legal: {
          disclaimer: "Disclaimer",
          disclaimerText: "movie-web does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. movie-web is not responsible for any media files shown by the video providers."
      },
      links: {
          discord: "Discord",
          dmca: "DMCA",
          github: "GitHub"
      },
      tagline: "Watch your favourite shows and movies with this open source streaming app."
  },
  Zo = {
      name: "movie-web",
      pages: {
          about: "About",
          dmca: "DMCA",
          login: "Login",
          onboarding: "Setup",
          pagetitle: "{{title}} - movie-web",
          register: "Register",
          settings: "Settings"
      }
  },
  el = {
      bookmarks: {
          sectionTitle: "Bookmarks"
      },
      continueWatching: {
          sectionTitle: "Continue Watching"
      },
      mediaList: {
          stopEditing: "Stop editing"
      },
      search: {
          allResults: "That's all we have!",
          failed: "Failed to find media, try again!",
          loading: "Loading...",
          noResults: "We couldn't find anything!",
          placeholder: "What do you want to watch?",
          sectionTitle: "Search results"
      },
      titles: {
          day: {
              default: "What would you like to watch this afternoon?",
              extra: ["Feeling adventurous? Jurassic Park might be the perfect choice."]
          },
          morning: {
              default: "What would you like to watch this morning?",
              extra: ["I hear Before Sunrise is good"]
          },
          night: {
              default: "What would you like to watch tonight?",
              extra: ["Tired? I hear The Exorcist is good."]
          }
      }
  },
  tl = {
      episodeDisplay: "S{{season}} E{{episode}}",
      types: {
          movie: "Movie",
          show: "Show"
      }
  },
  nl = {
      banner: {
          offline: "Check your internet connection"
      },
      menu: {
          about: "About us",
          donation: "Donate",
          logout: "Log out",
          register: "Sync to cloud",
          settings: "Settings",
          support: "Support"
      }
  },
  sl = {
      badge: "Not found",
      goHome: "Back to home",
      message: "We looked everywhere: under the bins, in the closet, behind the proxy but ultimately couldn't find the page you are looking for.",
      title: "Couldn't find that page"
  },
  rl = {
      defaultConfirm: {
          cancel: "Cancel",
          confirm: "Use default setup",
          description: "The default setup does not have the best streams and can be unbearably slow.",
          title: "Are you sure?"
      },
      extension: {
          back: "Go back",
          explainer: "Using the browser extension, you can get the best streams we have to offer. With just a simple install.",
          explainerIos: "Unfortunately, the browser extension is not supported on iOS, Press <bold>Go back</bold> to choose another option.",
          extensionHelp: "If you've installed the extension but it's not detected, <bold>open the extension through your browsers extension menu</bold> and follow the steps on screen.",
          linkChrome: "Install Chrome extension",
          linkFirefox: "Install Firefox extension",
          notDetecting: "Installed on Chrome, but the site isn't detecting it? Try reloading the page!",
          notDetectingAction: "Reload page",
          status: {
              disallowed: "Extension is not enabled for this page",
              disallowedAction: "Enable extension",
              failed: "Failed to request status",
              loading: "Waiting for you to install the extension",
              outdated: "Extension version too old",
              success: "Extension is working as expected!"
          },
          submit: "Continue",
          title: "Let's start with an extension"
      },
      proxy: {
          back: "Go back",
          explainer: "With the proxy method, you can get great quality streams by making a self-service proxy.",
          input: {
              errorConnection: "Could not connect to proxy",
              errorInvalidUrl: "Not a valid URL",
              errorNotProxy: "Expected a proxy but got a website",
              label: "Proxy URL",
              placeholder: "https://"
          },
          link: "Learn how to make a proxy",
          submit: "Submit proxy",
          title: "Let's make a new proxy"
      },
      start: {
          explainer: "To get the best streams possible, you will need to choose which streaming method you want to use.",
          options: {
              default: {
                  text: "I don't want good quality streams,<0 /> <1>use the default setup</1>"
              },
              extension: {
                  action: "Install extension",
                  description: "Install browser extension and gain access to the best sources.",
                  quality: "Best quality",
                  title: "Browser extension"
              },
              proxy: {
                  action: "Setup proxy",
                  description: "Setup a proxy in just 5 minutes and gain access to great sources.",
                  quality: "Good quality",
                  title: "Custom proxy"
              }
          },
          title: "Let's get you setup with movie-web"
      }
  },
  il = {
      close: "Close"
  },
  al = {
      back: {
          default: "Back to home",
          short: "Back"
      },
      casting: {
          enabled: "Casting to device..."
      },
      menus: {
          downloads: {
              disclaimer: "Downloads are taken directly from the provider. movie-web does not have control over how the downloads are provided.",
              copyHlsPlaylist: "Copy HLS playlist link",
              downloadSubtitle: "Download current subtitle",
              downloadVideo: "Download video",
              hlsDisclaimer: "Downloads are taken directly from the provider. movie-web does not have control over how the downloads are provided.<br /><br />Please note that you are downloading an HLS playlist, <bold>it is not recommended to download if you are not familiar with advanced streaming formats</bold>. Try different sources for different formats.",
              onAndroid: {
                  1: "To download on Android, click the download button then, on the new page, <bold>tap and hold</bold> on the video, then select <bold>save</bold>.",
                  shortTitle: "Download / Android",
                  title: "Downloading on Android"
              },
              onIos: {
                  1: "To download on iOS, click the download button then, on the new page, click <bold><ios_share /></bold>, then <bold>Save to Files <ios_files /></bold>.",
                  shortTitle: "Download / iOS",
                  title: "Downloading on iOS"
              },
              onPc: {
                  1: "On PC, click the download button then, on the new page, right click the video and select <bold>Save video as</bold>",
                  shortTitle: "Download / PC",
                  title: "Downloading on PC"
              },
              title: "Download"
          },
          episodes: {
              button: "Episodes",
              emptyState: "There are no episodes in this season, check back later!",
              episodeBadge: "E{{episode}}",
              loadingError: "Error loading season",
              loadingList: "Loading...",
              loadingTitle: "Loading...",
              unairedEpisodes: "One or more episodes in this season have been disabled because they haven't been aired yet."
          },
          playback: {
              speedLabel: "Playback speed",
              title: "Playback settings"
          },
          quality: {
              automaticLabel: "Automatic quality",
              hint: "You can try <0>switching source</0> to get different quality options.",
              iosNoQuality: "Due to Apple-defined limitations, quality selection is not available on iOS for this source. You can try <0>switching to another source</0> to get different quality options.",
              title: "Quality"
          },
          settings: {
              downloadItem: "Download",
              enableSubtitles: "Enable Subtitles",
              experienceSection: "Viewing experience",
              playbackItem: "Playback settings",
              qualityItem: "Quality",
              sourceItem: "Video sources",
              subtitleItem: "Subtitle settings",
              videoSection: "Video settings"
          },
          sources: {
              failed: {
                  text: "There was an error while trying to find any videos, please try a different source.",
                  title: "Failed to scrape"
              },
              noEmbeds: {
                  text: "We were unable to find any embeds, please try a different source.",
                  title: "No embeds found"
              },
              noStream: {
                  text: "This source has no streams for this movie or show.",
                  title: "No stream"
              },
              title: "Sources",
              unknownOption: "Unknown"
          },
          subtitles: {
              customChoice: "Select subtitle from file",
              customizeLabel: "Customize",
              offChoice: "Off",
              settings: {
                  backlink: "Custom subtitles",
                  delay: "Subtitle delay",
                  fixCapitals: "Fix capitalization"
              },
              title: "Subtitles",
              unknownLanguage: "Unknown"
          }
      },
      metadata: {
          api: {
              text: "Could not load API metadata, please check your internet connection.",
              title: "Failed to load API metadata"
          },
          dmca: {
              badge: "Removed",
              text: "This media is no longer available due to a takedown notice or copyright claim.",
              title: "Media has been removed"
          },
          extensionPermission: {
              badge: "Permission Missing",
              button: "Use extension",
              text: "You have the browser extension, but we need your permission to get started using the extension.",
              title: "Configure the extension"
          },
          failed: {
              badge: "Failed",
              homeButton: "Go home",
              text: "Could not load the media's metadata from TMDB. Please check whether TMDB is down or blocked on your internet connection.",
              title: "Failed to load metadata"
          },
          notFound: {
              badge: "Not found",
              homeButton: "Back to home",
              text: "We couldn't find the media you requested. Either it's been removed or you tampered with the URL.",
              title: "Couldn't find that media."
          }
      },
      nextEpisode: {
          cancel: "Cancel",
          next: "Next episode"
      },
      playbackError: {
          badge: "Playback error",
          errors: {
              errorAborted: "The fetching of the media was aborted by the user's request.",
              errorDecode: "Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.",
              errorGenericMedia: "Unknown media error occurred.",
              errorNetwork: "Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.",
              errorNotSupported: "The media or media provider object is not supported."
          },
          homeButton: "Go home",
          text: "There was an error trying to play the media. Please try again.",
          title: "Failed to play video!"
      },
      scraping: {
          items: {
              failure: "Error occurred",
              notFound: "Doesn't have the video",
              pending: "Checking for videos..."
          },
          notFound: {
              badge: "Not found",
              detailsButton: "Show details",
              homeButton: "Go home",
              text: "We have searched through our providers and cannot find the media you are looking for! We do not host the media and have no control over what is available. Please click 'Show details' below for more details.",
              title: "We couldn't find that"
          }
      },
      time: {
          regular: "{{timeWatched}} / {{duration}}",
          remaining: "{{timeLeft}} left • Finish at {{timeFinished, datetime}}",
          shortRegular: "{{timeWatched}}",
          shortRemaining: "-{{timeLeft}}"
      },
      turnstile: {
          description: "Please verify that you are human by completing the Captcha on the right. This is to keep movie-web safe!",
          error: "Failed to verify your humanity. Please try again.",
          title: "We need to verify that you're human.",
          verifyingHumanity: "Verifying your humanity..."
      }
  },
  ol = {
      dmca: {
          text: "Welcome to movie-web's DMCA contact page! We respect intellectual property rights and want to address any copyright concerns swiftly. If you believe your copyrighted work has been improperly used on our platform, please send a detailed DMCA notice to the email below. Please include a description of the copyrighted material, your contact details, and a statement of good faith belief. We're committed to resolving these matters promptly and appreciate your cooperation in keeping movie-web a place that respects creativity and copyrights.",
          title: "DMCA"
      },
      loadingApp: "Loading application",
      loadingUser: "Loading your profile",
      loadingUserError: {
          logout: "Logout",
          reset: "Reset custom server",
          text: "Failed to load your profile",
          textWithReset: "Failed to load your profile from your custom server, want to reset back to the default server?"
      },
      migration: {
          failed: "Failed to migrate your data.",
          inProgress: "Please hold, we are migrating your data. This shouldn't take long."
      }
  },
  ll = {
      account: {
          accountDetails: {
              deviceNameLabel: "Device name",
              deviceNamePlaceholder: "Personal phone",
              editProfile: "Edit",
              logoutButton: "Log out"
          },
          actions: {
              delete: {
                  button: "Delete account",
                  confirmButton: "Delete account",
                  confirmDescription: "Are you sure you want to delete your account? All your data will be lost!",
                  confirmTitle: "Are you sure?",
                  text: "This action is irreversible. All data will be deleted and nothing can be recovered.",
                  title: "Delete account"
              },
              title: "Actions"
          },
          devices: {
              deviceNameLabel: "Device name",
              failed: "Failed to load sessions",
              removeDevice: "Remove",
              title: "Devices"
          },
          profile: {
              finish: "Finish editing",
              firstColor: "Profile color one",
              secondColor: "Profile color two",
              title: "Edit profile picture",
              userIcon: "User icon"
          },
          register: {
              cta: "Get started",
              text: "Share your watch progress between devices and keep them synced.",
              title: "Sync to the cloud"
          },
          title: "Account"
      },
      appearance: {
          activeTheme: "Active",
          themes: {
              blue: "Blue",
              default: "Default",
              gray: "Gray",
              red: "Red",
              teal: "Teal"
          },
          title: "Appearance"
      },
      connections: {
          server: {
              description: "If you would like to connect to a custom backend to store your data, enable this and provide the URL. <0>Instructions.</0>",
              label: "Custom server",
              urlLabel: "Custom server URL"
          },
          setup: {
              doSetup: "Do setup",
              errorStatus: {
                  description: "It seems that one or more items in this setup need your attention.",
                  title: "Something needs your attention"
              },
              itemError: "There is something wrong with this setting. Go through setup again to fix it.",
              items: {
                  default: "Default setup",
                  extension: "Extension",
                  proxy: "Custom proxy"
              },
              redoSetup: "Redo setup",
              successStatus: {
                  description: "All things are in place for you to start watching your favourite media.",
                  title: "Everything is set up!"
              },
              unsetStatus: {
                  description: "Please click the button to the right to start the setup process.",
                  title: "You haven't gone through setup"
              }
          },
          title: "Connections",
          workers: {
              addButton: "Add new worker",
              description: "To make the application function, all traffic is routed through proxies. Enable this if you want to bring your own workers. <0>Instructions.</0>",
              emptyState: "No workers yet, add one below",
              label: "Use custom proxy workers",
              urlLabel: "Worker URLs",
              urlPlaceholder: "https://"
          }
      },
      preferences: {
          language: "Application language",
          languageDescription: "Language applied to the entire application.",
          thumbnail: "Generate thumbnails",
          thumbnailDescription: "Most of the time, videos don't have thumbnails. You can enable this setting to generate them on the fly but they can make your video slower.",
          thumbnailLabel: "Generate thumbnails",
          title: "Preferences"
      },
      reset: "Reset",
      save: "Save",
      sidebar: {
          info: {
              appVersion: "App version",
              backendUrl: "Backend URL",
              backendVersion: "Backend version",
              hostname: "Hostname",
              insecure: "Insecure",
              notLoggedIn: "You are not logged in",
              secure: "Secure",
              title: "App information",
              unknownVersion: "Unknown",
              userId: "User ID"
          }
      },
      subtitles: {
          backgroundLabel: "Background opacity",
          colorLabel: "Color",
          previewQuote: "I must not fear. Fear is the mind-killer.",
          textSizeLabel: "Text size",
          title: "Subtitles"
      },
      unsaved: "You have unsaved changes"
  },
  cl = {
      about: Qo,
      actions: qo,
      auth: Yo,
      errors: Xo,
      footer: Jo,
      global: Zo,
      home: el,
      media: tl,
      navigation: nl,
      notFound: sl,
      onboarding: rl,
      overlays: il,
      player: al,
      screens: ol,
      settings: ll
  },
  fr = {
      en: cl,
      ca: Qi,
      cs: qi,
      de: Yi,
      fr: Xi,
      it: Ji,
      nl: Zi,
      pl: ea,
      tr: ta,
      vi: na,
      zh: sa,
      he: ra,
      sv: ia,
      pirate: aa,
      minion: oa,
      lv: la,
      th: ca,
      ne: ua,
      ar: da,
      es: ma,
      et: ha,
      tok: fa,
      hi: ga,
      "pt-BR": xa,
      "pt-PT": pa,
      uk: ba,
      bg: ya,
      bn: va,
      el: ja,
      fa: wa,
      gu: ka,
      id: Na,
      ja: Sa,
      ko: Ca,
      sl: Ea,
      ta: Ia,
      "zh-HANT": La,
      is: Ta,
      ru: Ra,
      gl: Pa,
      pa: Aa,
      ro: _a,
      fi: Oa,
      nv: Ma
  },
  ul = Object.keys(fr),
  dl = Object.fromEntries(Object.entries(fr).map(e => [e[0], {
      translation: e[1]
  }]));
Bs.use(Ai).init({
  fallbackLng: "en",
  resources: dl,
  interpolation: {
      escapeValue: !1
  }
});
const Jh = ul.map(e => {
      const t = mn(e);
      if (!t) throw new Error(`Language with code ${e} cannot be found in database`);
      return t
  }),
  Ke = V(ce(H(e => ({
      language: "en",
      setLanguage(t) {
          e(s => {
              s.language = t
          })
      }
  })), {
      name: "__MW::locale"
  }));

function gr(e) {
  const t = mn(e);
  t && Bs.changeLanguage(t.code)
}

function ml(e) {
  const t = mn(e);
  return t ? t.isRtl : !1
}

function hl() {
  const e = Ke(s => s.language);
  d.useEffect(() => {
      gr(e)
  }, [e]);
  const t = ml(e);
  return n.jsx(fe, {
      children: n.jsx("html", {
          dir: t ? "rtl" : "ltr"
      })
  })
}
const B = V(ce(H(e => ({
  enabled: !1,
  lastSync: {
      lastSelectedLanguage: null
  },
  lastSelectedLanguage: null,
  overrideCasing: !1,
  delay: 0,
  styling: {
      color: "#ffffff",
      backgroundOpacity: .5,
      size: 1
  },
  resetSubtitleSpecificSettings() {
      e(t => {
          t.delay = 0, t.overrideCasing = !1
      })
  },
  updateStyling(t) {
      e(s => {
          t.backgroundOpacity !== void 0 && (s.styling.backgroundOpacity = t.backgroundOpacity), t.color !== void 0 && (s.styling.color = t.color.toLowerCase()), t.size !== void 0 && (s.styling.size = Math.min(2, Math.max(.01, t.size)))
      })
  },
  setLanguage(t) {
      e(s => {
          s.enabled = !!t, t && (s.lastSelectedLanguage = t)
      })
  },
  setCustomSubs() {
      e(t => {
          t.enabled = !0, t.lastSelectedLanguage = null
      })
  },
  setOverrideCasing(t) {
      e(s => {
          s.overrideCasing = t
      })
  },
  setDelay(t) {
      e(s => {
          s.delay = Math.max(Math.min(500, t), -500)
      })
  },
  importSubtitleLanguage(t) {
      e(s => {
          s.lastSelectedLanguage = t, s.lastSync.lastSelectedLanguage = t
      })
  }
})), {
  name: "__MW::subtitles"
}));
yt().setKey("mw-settings").addVersion({
  version: 0,
  create() {
      return {
          language: "en",
          captionSettings: {
              delay: 0,
              style: {
                  color: "#ffffff",
                  fontSize: 25,
                  backgroundColor: "#00000096"
              }
          }
      }
  },
  migrate(e) {
      return {
          language: e.language,
          captionSettings: {
              language: "none",
              ...e.captionSettings
          }
      }
  }
}).addVersion({
  version: 1,
  migrate(e) {
      const t = Ke.getState(),
          s = B.getState(),
          r = e.captionSettings.style.backgroundColor;
      let i = .5;
      if (r.length === 9) {
          const a = r.slice(7);
          i = parseInt(a, 16) / 255
      }
      return t.setLanguage(e.language), s.updateStyling({
          backgroundOpacity: i,
          color: e.captionSettings.style.color,
          size: e.captionSettings.style.fontSize / 25
      }), s.importSubtitleLanguage(e.captionSettings.language === "none" ? null : e.captionSettings.language), {}
  }
}).addVersion({
  version: 2,
  create() {
      return {}
  }
}).build();
const pn = V(ce(H(e => ({
      volume: 1,
      setVolume(t) {
          e(s => {
              s.volume = t
          })
      }
  })), {
      name: "__MW::volume"
  })),
  xr = V(H(e => ({
      showVolume: !1,
      setShowVolume(t) {
          e(s => {
              s.showVolume = t
          })
      }
  })));
yt().setKey("mw-volume").addVersion({
  version: 0,
  create() {
      return {
          volume: 1
      }
  },
  migrate(e) {
      return pn.getState().setVolume(e.volume), {}
  }
}).addVersion({
  version: 1,
  create() {
      return {}
  }
}).build();
let nt = 0;
const G = V(ce(H(e => ({
  items: {},
  updateQueue: [],
  removeItem(t) {
      e(s => {
          nt += 1, s.updateQueue.push({
              id: nt.toString(),
              action: "delete",
              tmdbId: t
          }), delete s.items[t]
      })
  },
  replaceItems(t) {
      e(s => {
          s.items = t
      })
  },
  updateItem(t) {
      let {
          meta: s,
          progress: r
      } = t;
      e(i => {
          var o, l, c, u;
          nt += 1, i.updateQueue.push({
              tmdbId: s.tmdbId,
              title: s.title,
              year: s.releaseYear,
              poster: s.poster,
              type: s.type,
              progress: {
                  ...r
              },
              id: nt.toString(),
              episodeId: (o = s.episode) == null ? void 0 : o.tmdbId,
              seasonId: (l = s.season) == null ? void 0 : l.tmdbId,
              seasonNumber: (c = s.season) == null ? void 0 : c.number,
              episodeNumber: (u = s.episode) == null ? void 0 : u.number,
              action: "upsert"
          }), i.items[s.tmdbId] || (i.items[s.tmdbId] = {
              type: s.type,
              episodes: {},
              seasons: {},
              updatedAt: 0,
              title: s.title,
              year: s.releaseYear,
              poster: s.poster
          });
          const a = i.items[s.tmdbId];
          if (a.updatedAt = Date.now(), s.type === "movie") {
              a.progress || (a.progress = {
                  duration: 0,
                  watched: 0
              }), a.progress = {
                  ...r
              };
              return
          }!s.episode || !s.season || (a.seasons[s.season.tmdbId] || (a.seasons[s.season.tmdbId] = {
              id: s.season.tmdbId,
              number: s.season.number,
              title: s.season.title
          }), a.episodes[s.episode.tmdbId] || (a.episodes[s.episode.tmdbId] = {
              id: s.episode.tmdbId,
              number: s.episode.number,
              title: s.episode.title,
              seasonId: s.season.tmdbId,
              updatedAt: Date.now(),
              progress: {
                  duration: 0,
                  watched: 0
              }
          }), a.episodes[s.episode.tmdbId].progress = {
              ...r
          })
      })
  },
  clear() {
      e(t => {
          t.items = {}
      })
  },
  clearUpdateQueue() {
      e(t => {
          t.updateQueue = []
      })
  },
  removeUpdateItem(t) {
      e(s => {
          s.updateQueue = [...s.updateQueue.filter(r => r.id !== t)]
      })
  }
})), {
  name: "__MW::progress"
}));

function fl(e) {
  var s, r;
  const t = {};
  for (const i of e.items)
      if (i.item.meta.type === A.SERIES) {
          if (t[i.item.meta.id] || (t[i.item.meta.id] = {
                  type: "show",
                  episodes: {},
                  seasons: {},
                  title: i.item.meta.title,
                  updatedAt: i.watchedAt,
                  poster: i.item.meta.poster,
                  year: Number(i.item.meta.year)
              }), i.item.series && !t[i.item.meta.id].episodes[i.item.series.episodeId]) {
              const a = (s = i.item.meta.seasonData.episodes.find(o => {
                  var l;
                  return o.number === ((l = i.item.series) == null ? void 0 : l.episode)
              })) == null ? void 0 : s.title;
              t[i.item.meta.id].seasons[i.item.series.seasonId] = {
                  id: i.item.series.seasonId,
                  number: i.item.series.season,
                  title: ((r = i.item.meta.seasons.find(o => {
                      var l;
                      return o.number === ((l = i.item.series) == null ? void 0 : l.season)
                  })) == null ? void 0 : r.title) || "Unknown season"
              }, t[i.item.meta.id].episodes[i.item.series.episodeId] = {
                  title: a || "Unknown",
                  id: i.item.series.episodeId,
                  number: i.item.series.episode,
                  seasonId: i.item.series.seasonId,
                  updatedAt: i.watchedAt,
                  progress: {
                      duration: 100 / i.percentage * i.progress,
                      watched: i.progress
                  }
              }
          }
      } else t[i.item.meta.id] = {
          type: "movie",
          episodes: {},
          seasons: {},
          title: i.item.meta.title,
          updatedAt: i.watchedAt,
          year: Number(i.item.meta.year),
          poster: i.item.meta.poster,
          progress: {
              duration: 100 / i.percentage * i.progress,
              watched: i.progress
          }
      };
  return t
}
yt().setKey("video-progress").addVersion({
  version: 0,
  migrate() {
      return {
          items: []
      }
  }
}).addVersion({
  version: 1,
  async migrate(e) {
      return Ho(e)
  }
}).addVersion({
  version: 2,
  migrate(e) {
      return Ko(e)
  }
}).addVersion({
  version: 3,
  migrate(e) {
      return G.getState().replaceItems(fl(e)), {
          items: []
      }
  }
}).addVersion({
  version: 4,
  create() {
      return {
          items: []
      }
  }
}).build();
vi.initialize([{
  trackingId: eo
}]);

function kt(e) {
  return n.jsx("div", {
      className: ["spinner", e.className ?? ""].join(" ")
  })
}

function R(e) {
  var u;
  const t = K(),
      {
          onClick: s,
          href: r,
          loading: i
      } = e,
      a = d.useCallback(m => {
          i || (r && !s ? t(r) : s == null || s(m))
      }, [s, r, t, i]);
  let o = "bg-white hover:bg-gray-200 text-black";
  e.theme === "purple" && (o = "bg-buttons-purple hover:bg-buttons-purpleHover text-white"), e.theme === "secondary" && (o = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white"), e.theme === "danger" && (o = "bg-buttons-danger hover:bg-buttons-dangerHover text-white");
  let l = S("tabbable cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", e.padding ?? "px-4 py-3", e.className, o, e.disabled ? "!cursor-not-allowed bg-opacity-60 text-opacity-60" : null);
  e.disabled && (l = l.split(" ").filter(m => !m.startsWith("hover:") && !m.startsWith("active:")).join(" "));
  const c = n.jsxs(n.Fragment, {
      children: [e.icon && !e.loading ? n.jsx("span", {
          className: "mr-3 hidden md:inline-block",
          children: n.jsx(I, {
              icon: e.icon
          })
      }) : null, e.loading ? n.jsx("span", {
          className: "mr-3 inline-flex justify-center",
          children: n.jsx(kt, {
              className: "text-lg"
          })
      }) : null, e.children]
  });
  return e.href && (e.href.startsWith("https://") || (u = e.href) != null && u.startsWith("data:")) ? n.jsx("a", {
      className: l,
      href: e.href,
      target: "_blank",
      rel: "noreferrer",
      download: e.download,
      onClick: a,
      children: c
  }) : e.href ? n.jsx("a", {
      className: l,
      onClick: a,
      children: c
  }) : n.jsx("button", {
      type: "button",
      onClick: a,
      className: l,
      children: c
  })
}

function ss(e) {
  let t = "bg-white hover:bg-gray-200 text-black";
  e.theme === "purple" && (t = "bg-buttons-purple hover:bg-buttons-purpleHover text-white"), e.theme === "secondary" && (t = "bg-buttons-cancel hover:bg-buttons-cancelHover transition-colors duration-100 text-white");
  const s = S("cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-[transform,background-color] duration-100 active:scale-105 md:px-8", "px-4 py-3", e.className, t);
  return n.jsx("button", {
      type: "button",
      onClick: e.onClick,
      className: s,
      children: e.children
  })
}
const gl = function(t) {
      return n.jsx("div", {
          className: t.className,
          children: n.jsxs("div", {
              className: "flex flex-col items-center justify-center",
              children: [n.jsxs("div", {
                  className: "flex h-12 items-center justify-center",
                  children: [n.jsx("div", {
                      className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30]"
                  }), n.jsx("div", {
                      className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:150ms]"
                  }), n.jsx("div", {
                      className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:300ms]"
                  }), n.jsx("div", {
                      className: "mx-1 h-2 w-2 animate-loading-pin rounded-full bg-[#211D30] [animation-delay:450ms]"
                  })]
              }), t.text && t.text.length ? n.jsx("p", {
                  className: "mt-3 max-w-xs text-sm opacity-75",
                  children: t.text
              }) : null]
          })
      })
  },
  Re = gl;

function W(e) {
  return {
      authorization: `Bearer ${e}`
  }
}

function xl(e, t) {
  return {
      meta: {
          title: t.title,
          type: t.type,
          poster: t.poster,
          year: t.year ?? 0
      },
      tmdbId: e
  }
}
async function pl(e, t, s) {
  return O(`/users/${t.userId}/bookmarks/${s.tmdbId}`, {
      method: "POST",
      headers: W(t.token),
      baseURL: e,
      body: s
  })
}
async function bl(e, t, s) {
  return O(`/users/${t.userId}/bookmarks/${s}`, {
      method: "DELETE",
      headers: W(t.token),
      baseURL: e
  })
}
async function yl(e) {
  return ji(wi, e, "mnemonic", {
      c: 2048,
      dkLen: 32
  })
}

function vl(e) {
  return ki(e, Fs)
}
async function rs(e) {
  const t = await yl(e),
      {
          privateKey: s,
          publicKey: r
      } = Z.pki.ed25519.generateKeyPair({
          seed: t
      });
  return {
      privateKey: s,
      publicKey: r,
      seed: t
  }
}

function jl() {
  return Ni(Fs)
}
async function wl(e, t) {
  return Z.pki.ed25519.sign({
      encoding: "utf8",
      message: e,
      privateKey: t
  })
}

function qt(e) {
  return Z.util.encode64(String.fromCodePoint(...e))
}

function Yt(e) {
  return qt(e).replace(/\//g, "_").replace(/\+/g, "-").replace(/=+$/, "")
}
async function is(e, t) {
  const s = await wl(t, e.privateKey);
  return Yt(s)
}

function bn(e) {
  return Z.util.binary.base64.decode(e)
}

function Ot(e) {
  return Z.util.createBuffer(bn(e))
}

function as(e) {
  return Z.util.encode64(e.getBytes())
}
async function os(e, t) {
  if (t.byteLength !== 32) throw new Error("Secret must be at least 256-bit");
  const s = await new Promise((o, l) => {
          Z.random.getBytes(16, (c, u) => {
              c && l(c), o(u)
          })
      }),
      r = Z.cipher.createCipher("AES-GCM", Z.util.createBuffer(t));
  r.start({
      iv: s,
      tagLength: 128
  }), r.update(Z.util.createBuffer(e, "utf8")), r.finish();
  const i = r.output,
      a = r.mode.tag;
  return `${Z.util.encode64(s)}.${as(i)}.${as(a)}`
}

function pr(e, t) {
  if (t.byteLength !== 32) throw new Error("Secret must be 256-bit");
  const [s, r, i] = e.split("."), a = Z.cipher.createDecipher("AES-GCM", Z.util.createBuffer(t));
  if (a.start({
          iv: Ot(s),
          tag: Ot(i),
          tagLength: 128
      }), a.update(Ot(r)), !a.finish()) throw new Error("Error decrypting data");
  return a.output.toString()
}

function kl(e, t, s) {
  return O(`/users/${t.userId}/progress/import`, {
      method: "PUT",
      body: s,
      baseURL: e,
      headers: W(t.token)
  })
}

function Nl(e, t, s) {
  return O(`/users/${t.userId}/bookmarks`, {
      method: "PUT",
      body: s,
      baseURL: e,
      headers: W(t.token)
  })
}
async function Sl(e, t) {
  return O("/auth/login/start", {
      method: "POST",
      body: {
          publicKey: t
      },
      baseURL: e
  })
}
async function Cl(e, t) {
  return O("/auth/login/complete", {
      method: "POST",
      body: {
          namespace: "movie-web",
          ...t
      },
      baseURL: e
  })
}

function El(e) {
  var t, s;
  return {
      duration: ((t = e.progress) == null ? void 0 : t.duration) ?? 0,
      watched: ((s = e.progress) == null ? void 0 : s.watched) ?? 0,
      tmdbId: e.tmdbId,
      meta: {
          title: e.title ?? "",
          type: e.type ?? "",
          year: e.year ?? NaN,
          poster: e.poster
      },
      episodeId: e.episodeId,
      seasonId: e.seasonId,
      episodeNumber: e.episodeNumber,
      seasonNumber: e.seasonNumber
  }
}

function Il(e, t) {
  var s, r;
  return t.type === "show" ? Object.entries(t.episodes).flatMap(i => {
      var l, c;
      let [a, o] = i;
      return {
          duration: ((l = t.progress) == null ? void 0 : l.duration) ?? o.progress.duration,
          watched: ((c = t.progress) == null ? void 0 : c.watched) ?? o.progress.watched,
          tmdbId: e,
          meta: {
              title: t.title ?? "",
              type: t.type ?? "",
              year: t.year ?? NaN,
              poster: t.poster
          },
          episodeId: o.id,
          seasonId: o.seasonId,
          episodeNumber: o.number,
          seasonNumber: t.seasons[o.seasonId].number,
          updatedAt: new Date(o.updatedAt).toISOString()
      }
  }) : [{
      duration: ((s = t.progress) == null ? void 0 : s.duration) ?? 0,
      watched: ((r = t.progress) == null ? void 0 : r.watched) ?? 0,
      tmdbId: e,
      updatedAt: new Date(t.updatedAt).toISOString(),
      meta: {
          title: t.title ?? "",
          type: t.type ?? "",
          year: t.year ?? NaN,
          poster: t.poster
      }
  }]
}
async function Ll(e, t, s) {
  return O(`/users/${t.userId}/progress/${s.tmdbId}`, {
      method: "PUT",
      headers: W(t.token),
      baseURL: e,
      body: s
  })
}
async function Tl(e, t, s, r, i) {
  await O(`/users/${t.userId}/progress/${s}`, {
      method: "DELETE",
      headers: W(t.token),
      baseURL: e,
      body: {
          episodeId: r,
          seasonId: i
      }
  })
}
async function Rl(e, t) {
  return O("/auth/register/start", {
      method: "POST",
      body: {
          captchaToken: t
      },
      baseURL: e
  })
}
async function Pl(e, t) {
  return O("/auth/register/complete", {
      method: "POST",
      body: {
          namespace: "movie-web",
          ...t
      },
      baseURL: e
  })
}
async function Zh(e, t) {
  return O(`/users/${t.userId}/sessions`, {
      headers: W(t.token),
      baseURL: e
  })
}
async function ef(e, t, s) {
  return O(`/sessions/${t.sessionId}`, {
      method: "PATCH",
      headers: W(t.token),
      body: s,
      baseURL: e
  })
}
async function Al(e, t, s) {
  return O(`/sessions/${s}`, {
      method: "DELETE",
      headers: W(t),
      baseURL: e
  })
}

function yn(e, t, s) {
  return O(`/users/${t.userId}/settings`, {
      method: "PUT",
      body: s,
      baseURL: e,
      headers: W(t.token)
  })
}

function _l(e, t) {
  return O(`/users/${t.userId}/settings`, {
      method: "GET",
      baseURL: e,
      headers: W(t.token)
  })
}

function Ol(e) {
  const t = e.map(s => {
      const r = {
          ...s.meta,
          updatedAt: new Date(s.updatedAt).getTime()
      };
      return [s.tmdbId, r]
  });
  return Object.fromEntries(t)
}

function Ml(e) {
  const t = {};
  return e.forEach(s => {
      t[s.tmdbId] || (t[s.tmdbId] = {
          title: s.meta.title,
          poster: s.meta.poster,
          type: s.meta.type,
          updatedAt: new Date(s.updatedAt).getTime(),
          episodes: {},
          seasons: {},
          year: s.meta.year
      });
      const r = t[s.tmdbId];
      new Date(s.updatedAt).getTime() > r.updatedAt && (r.updatedAt = new Date(s.updatedAt).getTime()), r.type === "movie" && (r.progress = {
          duration: Number(s.duration),
          watched: Number(s.watched)
      }), r.type === "show" && s.season.id && s.episode.id && (r.seasons[s.season.id] = {
          id: s.season.id,
          number: s.season.number ?? 0,
          title: ""
      }, r.episodes[s.episode.id] = {
          id: s.episode.id,
          number: s.episode.number ?? 0,
          title: "",
          progress: {
              duration: Number(s.duration),
              watched: Number(s.watched)
          },
          seasonId: s.season.id,
          updatedAt: new Date(s.updatedAt).getTime()
      })
  }), t
}
async function ls(e, t) {
  return O("/users/@me", {
      headers: W(t),
      baseURL: e
  })
}
async function tf(e, t, s) {
  return O(`/users/${t.userId}`, {
      method: "PATCH",
      headers: W(t.token),
      body: s,
      baseURL: e
  })
}
async function nf(e, t) {
  return O(`/users/${t.userId}`, {
      headers: W(t.token),
      baseURL: e
  })
}
async function Dl(e, t) {
  return O(`/users/${t.userId}/bookmarks`, {
      headers: W(t.token),
      baseURL: e
  })
}
async function Bl(e, t) {
  return O(`/users/${t.userId}/progress`, {
      headers: W(t.token),
      baseURL: e
  })
}
const vn = V(ce(H(e => ({
  theme: null,
  setTheme(t) {
      e(s => {
          s.theme = t
      })
  }
})), {
  name: "__MW::theme"
}));

function Fl(e) {
  const t = vn(r => r.theme),
      s = t ? `theme-${t}` : void 0;
  return n.jsxs("div", {
      className: s,
      children: [e.applyGlobal ? n.jsx(fe, {
          children: n.jsx("body", {
              className: s
          })
      }) : null, e.children]
  })
}

function Ul() {
  const e = !!F(f => f.account),
      t = F(f => f.setAccount),
      s = F(f => f.removeAccount),
      r = F(f => f.setProxySet),
      i = z(f => f.clear),
      a = G(f => f.clear),
      o = vn(f => f.setTheme),
      l = Ke(f => f.setLanguage),
      c = B(f => f.importSubtitleLanguage),
      u = z(f => f.replaceBookmarks),
      m = G(f => f.replaceItems),
      b = d.useCallback(async (f, y, p, v) => {
          const w = {
              token: f.token,
              userId: y.id,
              sessionId: f.session.id,
              deviceName: p.device,
              profile: y.profile,
              seed: v
          };
          return t(w), w
      }, [t]),
      g = d.useCallback(async () => {
          s(), i(), a()
      }, [s, i, a]),
      h = d.useCallback(async (f, y, p, v, w) => {
          u(Ol(v)), m(Ml(p)), w.applicationLanguage && l(w.applicationLanguage), w.defaultSubtitleLanguage && c(w.defaultSubtitleLanguage), w.applicationTheme && o(w.applicationTheme), w.proxyUrls && r(w.proxyUrls)
      }, [u, m, l, c, o, r]);
  return {
      loggedIn: e,
      login: b,
      logout: g,
      syncData: h
  }
}

function ge() {
  return F(t => t.backendUrl) ?? _().BACKEND_URL
}

function Pe() {
  const e = F(g => g.account),
      t = F(g => {
          var h;
          return (h = g.account) == null ? void 0 : h.profile
      }),
      s = !!F(g => g.account),
      r = ge(),
      {
          logout: i,
          login: a,
          syncData: o
      } = Ul(),
      l = d.useCallback(async g => {
          const h = await rs(g.mnemonic),
              f = Yt(h.publicKey),
              {
                  challenge: y
              } = await Sl(r, f),
              p = await is(h, y),
              v = await Cl(r, {
                  challenge: {
                      code: y,
                      signature: p
                  },
                  publicKey: f,
                  device: await os(g.userData.device, h.seed)
              }),
              w = await ls(r, v.token),
              T = qt(h.seed);
          return a(v, w.user, w.session, T)
      }, [a, r]),
      c = d.useCallback(async () => {
          if (e) {
              try {
                  await Al(r, e.token, e.sessionId)
              } catch {}
              await i()
          }
      }, [i, r, e]),
      u = d.useCallback(async g => {
          const {
              challenge: h
          } = await Rl(r, g.recaptchaToken), f = await rs(g.mnemonic), y = await is(f, h), p = await Pl(r, {
              challenge: {
                  code: h,
                  signature: y
              },
              publicKey: Yt(f.publicKey),
              device: await os(g.userData.device, f.seed),
              profile: g.userData.profile
          });
          return a(p, p.user, p.session, qt(f.seed))
      }, [r, a]),
      m = d.useCallback(async (g, h, f) => {
          if (Object.keys(h).length === 0 && Object.keys(f).length === 0) return;
          const y = Object.entries(h).flatMap(v => {
                  let [w, T] = v;
                  return Il(w, T)
              }),
              p = Object.entries(f).map(v => {
                  let [w, T] = v;
                  return xl(w, T)
              });
          await Promise.all([kl(r, g, y), Nl(r, g, p)])
      }, [r]),
      b = d.useCallback(async g => {
          var v, w, T;
          let h;
          try {
              h = await ls(r, g.token)
          } catch (L) {
              const k = L;
              if (((v = k == null ? void 0 : k.response) == null ? void 0 : v.status) === 401 || ((w = k == null ? void 0 : k.response) == null ? void 0 : w.status) === 403 || ((T = k == null ? void 0 : k.response) == null ? void 0 : T.status) === 400) {
                  await c();
                  return
              }
              throw console.error(L), L
          }
          const [f, y, p] = await Promise.all([Dl(r, g), Bl(r, g), _l(r, g)]);
          o(h.user, h.session, y, f, p)
      }, [r, o, c]);
  return {
      loggedIn: s,
      profile: t,
      login: l,
      logout: c,
      register: u,
      restore: b,
      importData: m
  }
}
const $l = 12 * 60 * 60 * 1e3;

function Vl() {
  const {
      account: e
  } = F(), {
      restore: t
  } = Pe(), s = d.useRef(!1);
  return dn(() => {
      e && t(e)
  }, $l), pt(async () => {
      s.current || !e || await t(e).finally(() => {
          s.current = !0
      })
  }, [])
}

function jn(e) {
  return n.jsxs("div", {
      className: "bg-pill-background bg-opacity-50 px-4 py-2 rounded-full text-white flex justify-center items-center",
      children: [n.jsx(I, {
          icon: e.icon ?? j.WAND,
          className: "mr-3 text-xl text-type-link"
      }), e.children]
  })
}

function Ve(e) {
  return n.jsx("h2", {
      className: S("text-white text-3xl font-bold text-opacity-100 mt-6", e.className),
      children: e.children
  })
}
const Nt = "pb-4 border-b border-utils-divider border-opacity-50";

function St(e) {
  return n.jsx("h1", {
      className: ["text-3xl lg:text-5xl font-bold text-white mb-9", e.border ? Nt : null, e.className ?? ""].join(" "),
      children: e.children
  })
}

function re(e) {
  return n.jsx("h2", {
      className: ["text-xl lg:text-2xl font-bold text-white mt-20 mb-9", e.border ? Nt : null, e.className ?? ""].join(" "),
      children: e.children
  })
}

function Hl(e) {
  return n.jsx("h2", {
      className: ["text-lg lg:text-xl font-bold text-white mb-3", e.border ? Nt : null, e.className ?? ""].join(" "),
      children: e.children
  })
}

function Y(e) {
  return n.jsx("p", {
      className: ["text-type-text my-9 font-medium", e.border ? Nt : null, e.className ?? ""].join(" "),
      children: e.children
  })
}

function wn(e) {
  return n.jsx("div", {
      className: S("w-full p-6 text-center flex flex-col items-center", e.maxWidth ?? "max-w-[28rem]"),
      children: e.children
  })
}

function kn(e) {
  return n.jsx("div", {
      className: "w-full h-full flex justify-center items-center flex-col",
      children: e.children
  })
}

function Wl(e, t) {
  return e === "slide-down" ? {
      leave: `transition-[transform,opacity] ${t}`,
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "-translate-y-4 opacity-0",
      enter: `transition-[transform,opacity] ${t}`,
      enterFrom: "opacity-0 -translate-y-4",
      enterTo: "translate-y-0 opacity-100"
  } : e === "slide-up" ? {
      leave: `transition-[transform,opacity] ${t}`,
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "translate-y-4 opacity-0",
      enter: `transition-[transform,opacity] ${t}`,
      enterFrom: "opacity-0 translate-y-4",
      enterTo: "translate-y-0 opacity-100"
  } : e === "slide-full-left" ? {
      leave: `transition-[transform] ${t}`,
      leaveFrom: "translate-x-0",
      leaveTo: "-translate-x-full",
      enter: `transition-[transform] ${t}`,
      enterFrom: "-translate-x-full",
      enterTo: "translate-x-0"
  } : e === "slide-full-right" ? {
      leave: `transition-[transform] ${t}`,
      leaveFrom: "translate-x-0",
      leaveTo: "translate-x-full",
      enter: `transition-[transform] ${t}`,
      enterFrom: "translate-x-full",
      enterTo: "translate-x-0"
  } : e === "fade" ? {
      leave: `transition-[transform,opacity] ${t}`,
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      enter: `transition-[transform,opacity] ${t}`,
      enterFrom: "opacity-0",
      enterTo: "opacity-100"
  } : {}
}

function Q(e) {
  const t = e.durationClass ?? "duration-200",
      s = Wl(e.animation, t);
  return e.isChild ? n.jsx(Vt.Child, {
      as: d.Fragment,
      ...s,
      children: n.jsx("div", {
          className: e.className,
          style: e.style,
          children: e.children
      })
  }) : n.jsx(Vt, {
      show: e.show,
      as: d.Fragment,
      ...s,
      children: n.jsx("div", {
          className: e.className,
          style: e.style,
          children: e.children
      })
  })
}

function Gl() {
  const e = Te();
  return d.useMemo(() => Object.fromEntries(new URLSearchParams(e.search).entries()), [e.search])
}

function Ct(e) {
  const t = Gl(),
      s = Te(),
      r = K(),
      i = t[e] ?? null,
      a = d.useCallback(o => {
          const l = new URLSearchParams(s.search);
          o ? l.set(e, o) : l.delete(e), r({
              search: l.toString()
          })
      }, [e, s.search, r]);
  return [i, a]
}
const Ie = V(H(e => ({
  transition: null,
  routes: {},
  anchorPoint: null,
  setTransition(t) {
      e(s => {
          s.transition = t
      })
  },
  registerRoute(t) {
      e(s => {
          s.routes[t.id] = t
      })
  },
  setAnchorPoint(t) {
      e(s => {
          s.anchorPoint = t
      })
  }
})));

function je(e, t) {
  return [t ?? "", ...e.split("/")].filter(r => r.length > 0)
}

function we(e) {
  return `/${e.join("/")}`
}

function Kl(e) {
  const [t] = Ct("r"), s = Ie(a => a.setAnchorPoint), r = d.useMemo(() => !!t && t.startsWith(`/${e}`), [t, e]), i = d.useCallback(() => {
      if (!r) return;
      const a = document.getElementById(`__overlayRouter::${e}`);
      if (a) {
          const o = a.getBoundingClientRect();
          s({
              h: o.height,
              w: o.width,
              x: o.x,
              y: o.y
          })
      }
  }, [r, s, e]);
  d.useEffect(() => {
      i()
  }, [r, i]), d.useEffect(() => {
      function a() {
          i()
      }
      return window.addEventListener("resize", a), () => {
          window.removeEventListener("resize", a)
      }
  }, [i])
}

function Ae(e) {
  const [t, s] = Ct("r"), r = Ie(f => f.transition), i = Ie(f => f.setTransition), a = !!t && t.startsWith(`/${e}`);

  function o(f) {
      return we(je(f, e))
  }

  function l(f) {
      const y = t,
          p = we(je(f, e));
      i({
          from: y ?? "/",
          to: p
      }), s(p)
  }

  function c(f) {
      if (!r) return "none";
      const y = we(je(f, e));
      return y === r.to && r.from.startsWith(r.to) || y === r.from && r.to.startsWith(r.from) ? "yes" : "no"
  }

  function u(f) {
      return a && t === we(je(f, e))
  }

  function m() {
      return a
  }
  const b = d.useCallback(f => {
          t && !f && s(null), i(null)
      }, [s, t, i]),
      g = d.useCallback(function() {
          let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
          i(null), s(we(je(f, e)))
      }, [e, s, i]);
  return {
      activeRoute: a ? we(je(t.slice(`/${e}`.length))) : "/",
      showBackwardsTransition: c,
      isCurrentPage: u,
      isOverlayActive: m,
      navigate: l,
      close: b,
      open: g,
      makePath: o,
      currentRoute: t
  }
}

function $(e) {
  const t = Ae(e);
  return {
      id: e,
      route: t.activeRoute,
      isRouterActive: t.isOverlayActive(),
      open: t.open,
      close: t.close,
      navigate: t.navigate
  }
}
const zl = function() {
      const {
          t
      } = C(), [s, r] = d.useState(!1);
      return n.jsx("div", {
          className: S("absolute w-10/12 max-w-[800px] bg-background-main p-20 rounded-lg select-none z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform", s ? "" : "hidden"),
          children: n.jsxs("div", {
              className: "w-full grid lg:grid-cols-[1fr,auto] gap-12 items-center",
              children: [n.jsxs("div", {
                  className: "text-left",
                  children: [n.jsx("h2", {
                      className: "text-type-emphasis font-bold text-xl mb-6",
                      children: t("player.turnstile.title")
                  }), n.jsx("p", {
                      children: t("player.turnstile.description")
                  })]
              }), n.jsx(Js, {
                  isInPopout: !0,
                  onUpdateShow: i => r(i)
              })]
          })
      })
  },
  Ql = zl;

function ql(e) {
  const t = Ae("hello world :)"),
      s = d.useRef(t);
  return d.useEffect(() => {
      const r = s.current;
      return r.close(), () => {
          r.close()
      }
  }, []), n.jsxs("div", {
      className: "popout-location",
      children: [n.jsx(Ql, {}), e.children]
  })
}

function br(e) {
  const [t, s] = d.useState(null), r = d.useRef(null), i = e.close;
  return d.useEffect(() => {
      var o;
      const a = (o = r.current) == null ? void 0 : o.closest(".popout-location");
      s(a ?? document.body)
  }, []), n.jsx("div", {
      ref: r,
      children: t ? _i.createPortal(n.jsx(Q, {
          show: e.show,
          animation: "none",
          children: n.jsx(Oi, {
              children: n.jsxs("div", {
                  className: "popout-wrapper fixed overflow-hidden pointer-events-auto inset-0 z-[999] select-none",
                  children: [n.jsx(Q, {
                      animation: "fade",
                      isChild: !0,
                      children: n.jsx("div", {
                          onClick: i,
                          className: S({
                              "absolute inset-0": !0,
                              "bg-black opacity-90": e.darken
                          })
                      })
                  }), n.jsxs(Q, {
                      animation: "slide-up",
                      className: "absolute inset-0 pointer-events-none",
                      isChild: !0,
                      children: [n.jsx("div", {
                          tabIndex: 1,
                          className: "focus:ring-0 focus:outline-none opacity-0"
                      }), e.children]
                  })]
              })
          })
      }), t) : null
  })
}

function yr(e) {
  const t = Ae(e.id),
      s = t.close;
  Kl(e.id);
  const r = d.useCallback(() => {
      s()
  }, [s]);
  return n.jsx(br, {
      close: r,
      show: t.isOverlayActive(),
      darken: e.darken,
      children: e.children
  })
}

function Nn(e) {
  const [t, s] = Ct("m"), r = d.useCallback(() => s(e), [e, s]), i = d.useCallback(() => s(null), [s]);
  return {
      id: e,
      isShown: t === e,
      show: r,
      hide: i
  }
}

function Yl(e) {
  return n.jsx("div", {
      className: "w-full max-w-[30rem] m-4",
      children: n.jsx("div", {
          className: "w-full bg-modal-background rounded-xl p-8 pointer-events-auto",
          children: e.children
      })
  })
}

function vr(e) {
  const t = Nn(e.id);
  return n.jsxs(br, {
      darken: !0,
      close: t.hide,
      show: t.isShown,
      children: [n.jsx(fe, {
          children: n.jsx("html", {
              "data-no-scroll": !0
          })
      }), n.jsx("div", {
          className: "flex absolute inset-0 items-center justify-center flex-col",
          children: e.children
      })]
  })
}
const Xl = function(t) {
      const [s, r] = d.useState(!1), i = d.useRef(null), {
          t: a
      } = C();
      let o = null;
      typeof t.error == "string" ? o = t.error : t.error.key ? o = `${t.error.type}: ${a(t.error.key)}` : t.error.message && (o = `${t.error.type}: ${a(t.error.message)}`);

      function l() {
          !t.error || !navigator.clipboard || (navigator.clipboard.writeText(`\`\`\`${o}\`\`\``), r(!0), i.current && clearTimeout(i.current), i.current = setTimeout(() => r(!1), 2e3))
      }
      return n.jsxs("div", {
          className: "bg-errors-card w-full rounded-lg p-6 text-left",
          children: [n.jsxs("div", {
              className: "border-errors-border flex items-center justify-between border-b pb-2",
              children: [n.jsx("span", {
                  className: "font-medium text-white",
                  children: a("errors.details")
              }), n.jsxs("div", {
                  className: "flex items-center justify-center gap-3",
                  children: [n.jsx(R, {
                      theme: "secondary",
                      padding: "p-2 h-10 min-w-[40px] md:px-4",
                      onClick: () => l(),
                      children: s ? n.jsxs(n.Fragment, {
                          children: [n.jsx(I, {
                              icon: j.CHECKMARK,
                              className: "text-xs"
                          }), n.jsx("span", {
                              className: "hidden min-[400px]:inline-block ml-3",
                              children: a("actions.copied")
                          })]
                      }) : n.jsxs(n.Fragment, {
                          children: [n.jsx(I, {
                              icon: j.COPY,
                              className: "text-2xl"
                          }), n.jsx("span", {
                              className: "hidden min-[400px]:inline-block ml-3",
                              children: a("actions.copy")
                          })]
                      })
                  }), n.jsx(R, {
                      theme: "secondary",
                      padding: "p-2 md:px-2",
                      onClick: t.onClose,
                      children: n.jsx(I, {
                          icon: j.X,
                          className: "text-2xl"
                      })
                  })]
              })]
          }), n.jsx("div", {
              className: "pointer-events-auto mt-4 h-60 select-text overflow-y-auto whitespace-pre text-left",
              children: o
          })]
      })
  },
  jr = Xl;

function Jl(e) {
  return !e.show || !e.error ? null : n.jsx("div", {
      className: "fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 p-12",
      children: n.jsx("div", {
          className: "w-full max-w-2xl",
          children: n.jsx(jr, {
              error: e.error,
              onClose: e.onClose
          })
      })
  })
}

function Zl(e) {
  return e.error ? n.jsx(vr, {
      id: e.id,
      children: n.jsx("div", {
          className: "pointer-events-auto w-11/12 max-w-2xl",
          children: n.jsx(jr, {
              error: e.error,
              onClose: e.onClose
          })
      })
  }) : null
}

function ec(e) {
  const {
      t
  } = C(), [s, r] = d.useState(!1), i = 5, a = (e.errorInfo.componentStack || "").split(`
`).slice(0, i), o = `${e.error.toString()}
${a.join(`
`)}`;
  return n.jsx("div", {
      className: "relative flex min-h-screen flex-1 flex-col",
      children: n.jsx("div", {
          className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
          children: n.jsx(kn, {
              children: n.jsxs(wn, {
                  maxWidth: "max-w-2xl w-9/10",
                  children: [n.jsx(jn, {
                      icon: j.EYE_SLASH,
                      children: t("errors.badge")
                  }), n.jsx(Ve, {
                      children: t("errors.title")
                  }), n.jsx(Y, {
                      children: e.error.toString()
                  }), n.jsx(Jl, {
                      show: s,
                      onClose: () => r(!1),
                      error: o
                  }), n.jsxs("div", {
                      className: "flex gap-3",
                      children: [n.jsx(ss, {
                          theme: "secondary",
                          className: "mt-6 p-2.5 md:px-12",
                          onClick: () => window.location.reload(),
                          children: t("errors.reloadPage")
                      }), n.jsx(ss, {
                          theme: "purple",
                          className: "mt-6 p-2.5 md:px-12",
                          onClick: () => r(!0),
                          children: t("errors.showError")
                      })]
                  })]
              })
          })
      })
  })
}
class tc extends d.Component {
  constructor(t) {
      super(t), this.state = {
          error: void 0
      }
  }
  componentDidCatch(t, s) {
      console.error("Render error caught", t, s), this.setState(r => ({
          ...r,
          error: {
              error: t,
              errorInfo: s
          }
      }))
  }
  render() {
      return this.state.error ? n.jsx(ec, {
          error: this.state.error.error,
          errorInfo: this.state.error.errorInfo
      }) : this.props.children
  }
}

function be(e) {
  const {
      t
  } = C();
  return n.jsxs("div", {
      className: S("flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo", e.backgroundClass ?? "bg-pill-background bg-opacity-50", e.clickable ? "transition-[transform,background-color] hover:scale-105 hover:bg-pill-backgroundHover backdrop-blur-lg hover:text-type-logo active:scale-95" : ""),
      children: [n.jsx(I, {
          className: "text-xl",
          icon: j.MOVIE_WEB
      }), n.jsx("span", {
          className: ["font-semibold text-white", e.hideTextOnMobile ? "hidden sm:block" : ""].join(" "),
          children: t("global.name")
      })]
  })
}

function wr(e) {
  return n.jsx("div", {
      className: `mx-auto max-w-full px-8 ${e.ultraWide?"w-[1300px] sm:px-16":"w-[900px] sm:px-8"} ${e.classNames||""}`,
      children: e.children
  })
}

function Et(e) {
  return n.jsx("div", {
      className: `mx-auto w-[600px] max-w-full px-8 sm:px-0 ${e.classNames||""}`,
      children: e.children
  })
}

function Sn(e) {
  return n.jsx("div", {
      className: S("min-h-screen w-full flex justify-center p-8 py-24 items-center", e.classNames),
      children: n.jsx("div", {
          className: "w-[700px] max-w-full",
          children: e.children
      })
  })
}

function ye(e) {
  const {
      t
  } = C(), s = t(e.k), r = t("global.pages.pagetitle", {
      title: s
  });
  return n.jsx(fe, {
      children: n.jsx("title", {
          children: e.subpage ? r : s
      })
  })
}

function kr() {
  return !!_().DMCA_EMAIL
}

function nc() {
  const {
      t: e
  } = C();
  return n.jsxs(Qe, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.dmca"
      }), n.jsxs(Et, {
          children: [n.jsx(St, {
              children: e("screens.dmca.title")
          }), n.jsx(Y, {
              children: e("screens.dmca.text")
          }), n.jsxs(Y, {
              className: "flex space-x-3 items-center",
              children: [n.jsx(I, {
                  icon: j.MAIL
              }), n.jsx("span", {
                  children: _().DMCA_EMAIL ?? ""
              })]
          })]
      })]
  })
}

function Xt(e) {
  const t = K(),
      s = d.useCallback(() => {
          e.to && t(e.to)
      }, [t, e.to]);
  return n.jsxs("a", {
      href: e.href,
      target: e.href ? "_blank" : void 0,
      rel: "noreferrer",
      className: "tabbable rounded py-2 px-3 inline-flex cursor-pointer items-center space-x-3 transition-colors duration-200 hover:text-type-emphasis",
      onClick: e.to ? s : void 0,
      children: [n.jsx(I, {
          icon: e.icon,
          className: "text-2xl"
      }), n.jsx("span", {
          className: "font-medium",
          children: e.children
      })]
  })
}

function cs() {
  const {
      t: e
  } = C();
  return kr() ? n.jsx(Xt, {
      to: "/dmca",
      icon: j.DRAGON,
      children: e("footer.links.dmca")
  }) : null
}

function sc() {
  const {
      t: e
  } = C();
  return n.jsx("footer", {
      className: "mt-16 border-t border-type-divider py-16 md:py-8",
      children: n.jsxs(wr, {
          ultraWide: !0,
          classNames: "grid md:grid-cols-2 gap-16 md:gap-8",
          children: [n.jsxs("div", {
              children: [n.jsx("div", {
                  className: "inline-block",
                  children: n.jsx(be, {})
              }), n.jsx("p", {
                  className: "mt-4 lg:max-w-[400px]",
                  children: e("footer.tagline")
              })]
          }), n.jsxs("div", {
              className: "md:text-right",
              children: [n.jsx("h3", {
                  className: "font-semibold text-type-emphasis",
                  children: e("footer.legal.disclaimer")
              }), n.jsx("p", {
                  className: "mt-3",
                  children: e("footer.legal.disclaimerText")
              })]
          }), n.jsxs("div", {
              className: "flex flex-wrap gap-[0.5rem] -ml-3",
              children: [n.jsx(Xt, {
                  icon: j.GITHUB,
                  href: _().GITHUB_LINK,
                  children: e("footer.links.github")
              }), n.jsx(Xt, {
                  icon: j.DISCORD,
                  href: _().DISCORD_LINK,
                  children: e("footer.links.discord")
              }), n.jsx("div", {
                  className: "inline md:hidden",
                  children: n.jsx(cs, {})
              })]
          }), n.jsx("div", {
              className: "hidden items-center justify-end md:flex -mr-3",
              children: n.jsx(cs, {})
          })]
      })
  })
}

function Nr(e) {
  return n.jsxs("div", {
      className: ["flex min-h-screen flex-col", e.className || ""].join(" "),
      children: [n.jsx("div", {
          style: {
              flex: "1 0 auto"
          },
          children: e.children
      }), n.jsx(sc, {})]
  })
}

function Sr(e) {
  return n.jsxs("div", {
      className: "relative inline-block",
      children: [n.jsx("div", {
          className: S(e.sizeClass, "rounded-full overflow-hidden flex items-center justify-center text-white"),
          style: {
              background: `linear-gradient(to bottom right, ${e.profile.colorA}, ${e.profile.colorB})`
          },
          children: n.jsx(Hs, {
              className: e.iconClass,
              icon: e.profile.icon
          })
      }), e.bottom ? n.jsx("div", {
          className: "absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2",
          children: e.bottom
      }) : null]
  })
}

function Cr(e) {
  const t = F(),
      s = d.useMemo(() => t.account && t.account.seed ? bn(t.account.seed) : null, [t]);
  if (!t.account || t.account === null) return null;
  const r = s ? pr(t.account.deviceName, s) : "...";
  return n.jsxs(n.Fragment, {
      children: [n.jsx(Sr, {
          profile: t.account.profile,
          sizeClass: e.sizeClass ?? "w-[1.5rem] h-[1.5rem] ssm:w-[2rem] ssm:h-[2rem]",
          iconClass: e.iconClass,
          bottom: e.bottom
      }), e.withName && s ? n.jsx("span", {
          className: "hidden md:inline-block",
          children: r.length >= 20 ? `${r.slice(0,19)}…` : r
      }) : null]
  })
}

function rc(e) {
  return n.jsx("div", {
      className: "relative inline-block p-1 text-type-dimmed",
      children: n.jsx(I, {
          className: e.iconClass ?? "text-base ssm:text-xl",
          icon: j.MENU
      })
  })
}
const ic = function(t) {
      const s = t.clickable ? "cursor-pointer hover:scale-110 hover:bg-pill-backgroundHover hover:text-white active:scale-125" : "",
          r = t.transparent ? "bg-opacity-0 hover:bg-opacity-50" : "",
          i = t.active ? "bg-pill-backgroundHover text-white" : "",
          a = t.downsized ? "h-10 w-10" : "h-12 w-12";
      return n.jsx("div", {
          className: t.className || void 0,
          onClick: t.onClick,
          children: n.jsx("div", {
              className: `flex items-center justify-center rounded-full border-2 border-transparent backdrop-blur-lg bg-pill-background bg-opacity-50 transition-[background-color,color,transform,border-color] duration-75 ${r} ${s} ${i} ${a}`,
              children: n.jsx(I, {
                  icon: t.icon
              })
          })
      })
  },
  ft = ic;

function us() {
  return n.jsx("hr", {
      className: "border-0 w-full h-px bg-dropdown-border"
  })
}
const ac = function(t) {
      const s = K(),
          r = i => {
              i.startsWith("http") ? window.open(i, "_blank") : s(i)
          };
      return n.jsx("a", {
          tabIndex: 0,
          href: t.href,
          onClick: i => {
              var a;
              i.preventDefault(), t.href ? r(t.href) : (a = t.onClick) == null || a.call(t)
          },
          className: t.className,
          children: t.children
      })
  },
  Er = ac;

function ke(e) {
  return n.jsxs(Er, {
      onClick: e.onClick,
      href: e.href,
      className: S("tabbable cursor-pointer flex gap-3 items-center m-3 p-1 rounded font-medium transition-colors duration-100", e.highlight ? "text-dropdown-highlight hover:text-dropdown-highlightHover" : "text-dropdown-text hover:text-white", e.className),
      children: [e.icon ? n.jsx(I, {
          icon: e.icon,
          className: "text-xl"
      }) : null, e.children]
  })
}

function Mt(e) {
  return n.jsx(Er, {
      href: e.href,
      className: "tabbable w-11 h-11 rounded-full bg-dropdown-contentBackground text-dropdown-text hover:text-white transition-colors duration-100 flex justify-center items-center",
      children: n.jsx(I, {
          className: "text-2xl",
          icon: e.icon
      })
  })
}

function oc(e) {
  const {
      t
  } = C(), [s, r] = d.useState(!1), i = F(u => {
      var m;
      return (m = u.account) == null ? void 0 : m.deviceName
  }), a = F(u => {
      var m;
      return (m = u.account) == null ? void 0 : m.seed
  }), o = d.useMemo(() => a ? bn(a) : null, [a]), {
      logout: l
  } = Pe();
  d.useEffect(() => {
      function u(m) {
          m.target.closest(".is-dropdown") || r(!1)
      }
      return window.addEventListener("click", u), () => window.removeEventListener("click", u)
  }, []);
  const c = d.useCallback(() => {
      r(u => !u)
  }, []);
  return n.jsxs("div", {
      className: "relative is-dropdown",
      children: [n.jsxs("div", {
          className: "cursor-pointer tabbable rounded-full flex gap-2 text-white items-center py-2 px-3 bg-pill-background bg-opacity-50 hover:bg-pill-backgroundHover backdrop-blur-lg transition-[background,transform] duration-100 hover:scale-105",
          tabIndex: 0,
          onClick: c,
          onKeyUp: u => u.key === "Enter" && c(),
          children: [e.children, n.jsx(I, {
              className: S("text-xl transition-transform duration-100", s ? "rotate-180" : ""),
              icon: j.CHEVRON_DOWN
          })]
      }), n.jsx(Q, {
          animation: "slide-down",
          show: s,
          children: n.jsxs("div", {
              className: "rounded-lg absolute w-64 bg-dropdown-altBackground top-full mt-3 right-0",
              children: [i && o ? n.jsxs(ke, {
                  className: "text-white",
                  href: "/settings",
                  children: [n.jsx(Cr, {}), pr(i, o)]
              }) : n.jsx(ke, {
                  href: "/login",
                  icon: j.RISING_STAR,
                  highlight: !0,
                  children: t("navigation.menu.register")
              }), n.jsx(us, {}), n.jsx(ke, {
                  href: "/settings",
                  icon: j.SETTINGS,
                  children: t("navigation.menu.settings")
              }), n.jsx(ke, {
                  href: "/about",
                  icon: j.CIRCLE_QUESTION,
                  children: t("navigation.menu.about")
              }), n.jsx(ke, {
                  href: _().DONATION_LINK,
                  icon: j.DONATION,
                  children: t("navigation.menu.donation")
              }), i ? n.jsx(ke, {
                  className: "!text-type-danger opacity-75 hover:opacity-100",
                  icon: j.LOGOUT,
                  onClick: l,
                  children: t("navigation.menu.logout")
              }) : null, n.jsx(us, {}), n.jsxs("div", {
                  className: "my-4 flex justify-center items-center gap-4",
                  children: [n.jsx(Mt, {
                      href: _().DISCORD_LINK,
                      icon: j.DISCORD
                  }), n.jsx(Mt, {
                      href: _().GITHUB_LINK,
                      icon: j.GITHUB
                  }), n.jsx(Mt, {
                      href: _().DONATION_LINK,
                      icon: j.DONATION
                  })]
              })]
          })
      })]
  })
}
class lc {
  constructor(t) {
      this.x = 0, this.y = 0, this.radius = 0, this.direction = 0, this.speed = 0, this.lifetime = 0, this.ran = 0, this.image = null, this.size = 10;
      let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          horizontalMotion: !1,
          sizeRange: [10, 10]
      };
      s.imgSrc && (this.image = new Image, this.image.src = s.imgSrc), this.options = s, this.reset(t), this.initialize(t)
  }
  reset(t) {
      this.x = Math.round(Math.random() * t.width / 2 + t.width / 4), this.y = Math.random() * 100 + 5, this.radius = 1 + Math.floor(Math.random() * .5), this.direction = Math.random() * Math.PI / 2 + Math.PI / 4, this.speed = .02 + Math.random() * .08;
      const s = 60;
      this.lifetime = s * 3 + Math.random() * (s * 30), this.size = this.options.sizeRange ? Math.random() * (this.options.sizeRange[1] - this.options.sizeRange[0]) + this.options.sizeRange[0] : 10, this.options.horizontalMotion && (this.direction = Math.random() <= .5 ? 0 : Math.PI, this.lifetime = 30 * s), this.ran = 0
  }
  initialize(t) {
      this.ran = Math.random() * this.lifetime;
      const s = this.speed;
      this.speed = Math.random() * this.lifetime * s, this.update(t), this.speed = s
  }
  update(t) {
      this.ran += 1;
      const s = this.speed * Math.cos(this.direction),
          r = this.speed * Math.sin(this.direction);
      this.x += s, this.y += r, this.ran > this.lifetime && this.reset(t)
  }
  render(t) {
      const s = t.getContext("2d");
      if (!s) return;
      s.save(), s.beginPath();
      const r = this.ran / this.lifetime,
          i = (r - r * r) * 4;
      if (s.globalAlpha = Math.max(0, i * .8), this.image) {
          s.translate(this.x, this.y);
          const a = this.size,
              o = this.image.naturalWidth / this.image.naturalHeight * a;
          s.rotate(this.direction - Math.PI), s.drawImage(this.image, -a / 2, o, o, a)
      } else s.ellipse(this.x, this.y, this.radius, this.radius * 1.5, this.direction, 0, Math.PI * 2), s.fillStyle = "white", s.fill();
      s.restore()
  }
}

function cc() {
  const e = d.useRef(null);
  return d.useEffect(() => {
      var f, y;
      if (!e.current) return;
      const t = e.current,
          s = [];
      t.width = t.scrollWidth, t.height = t.scrollHeight;
      const r = 20;
      let i = r,
          a = [];
      const o = new Date,
          l = o.getMonth(),
          c = o.getDate();
      l === 11 && c >= 24 && c <= 26 && (a = [{
          image: "/lightbar-images/snowflake.svg",
          sizeRange: [4, 15]
      }, {
          image: "/lightbar-images/santa.png",
          sizeRange: [15, 30]
      }]), Math.floor(Math.random() * 600) === 69 && (a = [{
          image: "/lightbar-images/fishie.png",
          sizeRange: [10, 11]
      }], i = r / 2);
      for (let p = 0; p < r; p += 1) {
          const v = a && p <= i,
              w = Math.floor(Math.random() * a.length),
              T = (f = a[w]) == null ? void 0 : f.sizeRange,
              L = (y = a[w]) == null ? void 0 : y.image,
              k = new lc(t, {
                  imgSrc: v ? L : void 0,
                  horizontalMotion: L == null ? void 0 : L.includes("fishie"),
                  sizeRange: T
              });
          s.push(k)
      }
      let m = !0,
          b = null;

      function g() {
          if (t.getContext("2d")) {
              if (m) {
                  for (const v of s) v.update(t);
                  m = !1
              }
              t.width = t.scrollWidth, t.height = t.scrollHeight;
              for (const v of s) v.render(t);
              b = requestAnimationFrame(g)
          }
      }
      const h = setInterval(() => {
          m = !0
      }, 1e3 / 120);
      return g(), () => {
          b && cancelAnimationFrame(b), clearInterval(h)
      }
  }, []), n.jsx("canvas", {
      className: "particles",
      ref: e
  })
}
const uc = function(t) {
      return n.jsx("div", {
          className: "absolute inset-0 w-full h-[680px] overflow-hidden pointer-events-none -mt-64",
          children: n.jsx("div", {
              className: "max-w-screen w-full h-[680px] relative pt-64",
              children: n.jsx("div", {
                  className: t.className,
                  children: n.jsxs("div", {
                      className: "lightbar",
                      children: [n.jsx(cc, {}), n.jsx("div", {
                          className: "lightbar-visual"
                      })]
                  })
              })
          })
      })
  },
  dc = uc,
  le = V(H(e => ({
      banners: [],
      isOnline: !0,
      isTurnstile: !1,
      location: null,
      updateOnline(t) {
          e(s => {
              s.isOnline = t
          })
      },
      updateTurnstile(t) {
          e(s => {
              s.isTurnstile = t
          })
      },
      setLocation(t) {
          e(s => {
              s.location = t
          })
      },
      showBanner(t) {
          e(s => {
              s.banners.find(r => r.id === t) || s.banners.push({
                  id: t,
                  height: 0
              })
          })
      },
      hideBanner(t) {
          e(s => {
              s.banners = s.banners.filter(r => r.id !== t)
          })
      },
      updateHeight(t, s) {
          e(r => {
              const i = r.banners.find(a => a.id === t);
              i && (i.height = s)
          })
      }
  })));

function It(e) {
  const t = e ?? null,
      s = le(a => a.banners),
      r = le(a => a.location),
      i = s.reduce((a, o) => a + o.height, 0);
  return t !== r ? 0 : i
}

function mc(e) {
  const [t, {
      height: s
  }] = Mi(), r = le(o => o.updateHeight), i = le(o => o.showBanner), a = le(o => o.hideBanner);
  return d.useEffect(() => (i(e), () => {
      a(e)
  }), [i, a, e]), d.useEffect(() => {
      r(e, s)
  }, [s, e, r]), [t]
}
const hc = function(t) {
      const s = It(),
          {
              loggedIn: r
          } = Pe();
      return n.jsxs(n.Fragment, {
          children: [t.noLightbar ? null : n.jsx("div", {
              className: "absolute inset-x-0 top-0 flex h-[88px] items-center justify-center",
              style: {
                  top: `${s}px`
              },
              children: n.jsx("div", {
                  className: "absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0",
                  children: n.jsx(dc, {})
              })
          }), n.jsx("div", {
              className: "fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]",
              style: {
                  top: `${s}px`
              },
              children: n.jsxs("div", {
                  className: S("fixed left-0 right-0 h-20 flex items-center", t.doBackground ? "bg-background-main border-b border-utils-divider border-opacity-50" : null),
                  children: [t.doBackground ? n.jsx("div", {
                      className: "absolute w-full h-full inset-0 overflow-hidden",
                      children: n.jsx(ze, {
                          positionClass: "absolute"
                      })
                  }) : null, n.jsx("div", {
                      className: "opacity-0 absolute inset-0 block h-20 pointer-events-auto"
                  }), n.jsx("div", {
                      className: `${t.bg?"opacity-100":"opacity-0"} absolute inset-0 block h-24 bg-background-main transition-opacity duration-300`,
                      children: n.jsx("div", {
                          className: "absolute -bottom-24 h-24 w-full bg-gradient-to-b from-background-main to-transparent"
                      })
                  })]
              })
          }), n.jsx("div", {
              className: "fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]",
              style: {
                  top: `${s}px`
              },
              children: n.jsx("div", {
                  className: S("fixed left-0 right-0 flex items-center"),
                  children: n.jsxs("div", {
                      className: "px-7 py-5 relative z-[60] flex flex-1 items-center justify-between",
                      children: [n.jsxs("div", {
                          className: "flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto",
                          children: [n.jsx(bt, {
                              className: "block tabbable rounded-full text-xs ssm:text-base",
                              to: "/",
                              children: n.jsx(be, {
                                  clickable: !0
                              })
                          }), n.jsx("a", {
                              href: _().DISCORD_LINK,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "text-xl text-white tabbable rounded-full",
                              children: n.jsx(ft, {
                                  icon: j.DISCORD,
                                  clickable: !0,
                                  downsized: !0
                              })
                          }), n.jsx("a", {
                              href: _().GITHUB_LINK,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "text-xl text-white tabbable rounded-full",
                              children: n.jsx(ft, {
                                  icon: j.GITHUB,
                                  clickable: !0,
                                  downsized: !0
                              })
                          })]
                      }), n.jsx("div", {
                          className: "relative pointer-events-auto",
                          children: n.jsx(oc, {
                              children: r ? n.jsx(Cr, {
                                  withName: !0
                              }) : n.jsx(rc, {})
                          })
                      })]
                  })
              })
          })]
      })
  },
  Cn = hc;

function ze(e) {
  return n.jsxs(n.Fragment, {
      children: [n.jsx("div", {
          className: S(e.positionClass ?? "fixed", "top-0 -right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentA blur-[100px] pointer-events-none opacity-25")
      }), n.jsx("div", {
          className: S(e.positionClass ?? "fixed", "top-0 right-48 rotate-[32deg] w-[50rem] h-[15rem] rounded-[70rem] bg-background-accentB blur-[100px] pointer-events-none opacity-25")
      })]
  })
}

function Qe(e) {
  return n.jsxs("div", {
      className: "bg-background-main",
      style: {
          backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to) 800px)"
      },
      children: [n.jsx(ze, {}), n.jsxs(Nr, {
          children: [n.jsx(Cn, {
              doBackground: !0,
              noLightbar: !0
          }), n.jsx("div", {
              className: "mt-40 relative",
              children: e.children
          })]
      })]
  })
}

function fc() {
  const {
      t: e
  } = C();
  return n.jsxs("div", {
      className: "flex flex-col justify-center items-center h-screen text-center font-medium",
      children: [n.jsx(ze, {}), n.jsx("div", {
          className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
          children: n.jsx(be, {})
      }), n.jsx(Re, {}), n.jsx("p", {
          className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
          children: e("screens.migration.inProgress")
      })]
  })
}

function Ir(e) {
  return n.jsxs("div", {
      className: "flex flex-col justify-center items-center h-screen text-center font-medium",
      children: [n.jsx(ze, {}), n.jsx("div", {
          className: "right-[calc(2rem+env(safe-area-inset-right))] top-6 absolute",
          children: n.jsx(be, {})
      }), e.iconSlot ? e.iconSlot : null, n.jsx("div", {
          className: "max-w-[19rem] mt-3 mb-12 text-type-secondary",
          children: e.children
      })]
  })
}
const gc = "modulepreload",
  xc = function(e) {
      return "/" + e
  },
  ds = {},
  Lt = function(t, s, r) {
      let i = Promise.resolve();
      if (s && s.length > 0) {
          const a = document.getElementsByTagName("link");
          i = Promise.all(s.map(o => {
              if (o = xc(o), o in ds) return;
              ds[o] = !0;
              const l = o.endsWith(".css"),
                  c = l ? '[rel="stylesheet"]' : "";
              if (!!r)
                  for (let b = a.length - 1; b >= 0; b--) {
                      const g = a[b];
                      if (g.href === o && (!l || g.rel === "stylesheet")) return
                  } else if (document.querySelector(`link[href="${o}"]${c}`)) return;
              const m = document.createElement("link");
              if (m.rel = l ? "stylesheet" : gc, l || (m.as = "script", m.crossOrigin = ""), m.href = o, document.head.appendChild(m), l) return new Promise((b, g) => {
                  m.addEventListener("load", b), m.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${o}`)))
              })
          }))
      }
      return i.then(() => t()).catch(a => {
          const o = new Event("vite:preloadError", {
              cancelable: !0
          });
          if (o.payload = a, window.dispatchEvent(o), !o.defaultPrevented) throw a
      })
  };

function pc() {
  const e = le(s => s.updateOnline),
      t = d.useRef(!0);
  d.useEffect(() => {
      let s = 0,
          r = null;
      const i = setInterval(() => {
          if (s += 1, t.current && s < 10) return;
          s = 0, r && r.abort(), r = new AbortController;
          const a = r.signal;
          fetch("/ping.txt", {
              signal: a
          }).then(() => {
              e(!0), t.current = !0
          }).catch(o => {
              o.name !== "AbortError" && (e(!1), t.current = !1)
          })
      }, 5e3);
      return () => {
          clearInterval(i), r && r.abort()
      }
  }, [e])
}
const bc = function(t) {
      return n.jsx("ol", {
          children: t.items.map((s, r) => n.jsxs("li", {
              className: S("grid grid-cols-[auto,1fr] gap-6", r !== t.items.length - 1 ? "pb-12" : void 0),
              children: [n.jsxs("div", {
                  className: "relative z-0",
                  children: [n.jsx("div", {
                      className: "w-7 h-7 rounded-full bg-about-circle text-about-circleText font-medium flex justify-center items-center relative z-10",
                      children: r + 1
                  }), r !== t.items.length - 1 ? n.jsx("div", {
                      className: "h-[calc(100%+1.5rem)] w-px absolute top-6 left-1/2 transform -translate-x-1/2",
                      style: {
                          backgroundImage: "linear-gradient(to bottom, transparent 5px, #1F1F29 5px, #1F1F29 10px)",
                          backgroundSize: "10px 10px",
                          backgroundRepeat: "Repeat"
                      }
                  }) : null]
              }), n.jsx("div", {
                  children: s
              })]
          }))
      })
  },
  yc = bc;

function Dt(e) {
  return n.jsxs(n.Fragment, {
      children: [n.jsx("p", {
          className: "text-white mb-2 font-medium",
          children: e.title
      }), n.jsx("div", {
          className: "text-type-text",
          children: e.children
      })]
  })
}

function vc() {
  const {
      t: e
  } = C();
  return n.jsxs(Qe, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.about"
      }), n.jsxs(Et, {
          children: [n.jsx(St, {
              children: e("about.title")
          }), n.jsx(Y, {
              children: e("about.description")
          }), n.jsx(re, {
              children: e("about.faqTitle")
          }), n.jsx(yc, {
              items: [n.jsx(Dt, {
                  title: e("about.q1.title"),
                  children: e("about.q1.body")
              }), n.jsx(Dt, {
                  title: e("about.q2.title"),
                  children: e("about.q2.body")
              }), n.jsx(Dt, {
                  title: e("about.q3.title"),
                  children: e("about.q3.body")
              })]
          })]
      })]
  })
}

function Tt(e) {
  return n.jsx("hr", {
      className: S("w-full h-px border-0 bg-utils-divider bg-opacity-50", e.marginClass ?? "my-8")
  })
}

function Bt(e) {
  return n.jsxs(n.Fragment, {
      children: [n.jsxs("div", {
          className: "flex",
          children: [n.jsx("p", {
              className: "flex-1 font-bold text-white",
              children: e.name
          }), n.jsx("p", {
              children: e.children
          })]
      }), n.jsx(Tt, {
          marginClass: "my-3"
      })]
  })
}

function jc() {
  const e = _().NORMAL_ROUTER,
      t = _().APP_VERSION,
      s = _().BACKEND_URL;
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "mb-8 mt-12",
          children: "Configured values"
      }), n.jsx(Bt, {
          name: "Routing mode",
          children: e ? "Normal routing" : "Hash based routing"
      }), n.jsxs(Bt, {
          name: "Application version",
          children: ["v", t]
      }), n.jsx(Bt, {
          name: "Backend URL",
          children: s
      })]
  })
}

function En(e) {
  return n.jsx("div", {
      className: "bg-video-scraping-card rounded-xl p-8",
      children: e.children
  })
}

function wc() {
  const e = _().TMDB_READ_API_KEY,
      [t, s] = d.useState({
          hasTested: !1,
          success: !1,
          errorText: ""
      }),
      [r, i] = ie(async () => {
          if (s({
                  hasTested: !1,
                  success: !1,
                  errorText: ""
              }), e.length === 0) return s({
              hasTested: !0,
              success: !1,
              errorText: "TMDB api key is not set"
          });
          if (!(e.split(".").length > 2)) return s({
              hasTested: !0,
              success: !1,
              errorText: "TMDB api key is not a read only key"
          });
          try {
              await wt("556574", q.MOVIE)
          } catch {
              return s({
                  hasTested: !0,
                  success: !1,
                  errorText: "Failed to call tmdb, double check api key and your internet connection"
              })
          }
          return s({
              hasTested: !0,
              success: !0,
              errorText: ""
          })
      }, [e, s]);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "mb-8 mt-12",
          children: "TMDB tests"
      }), n.jsx(En, {
          children: n.jsxs("div", {
              className: "flex items-center",
              children: [n.jsx("div", {
                  className: "flex-1",
                  children: t.hasTested ? t.success ? n.jsxs("p", {
                      className: "flex items-center",
                      children: [n.jsx(I, {
                          icon: j.CIRCLE_CHECK,
                          className: "text-video-scraping-success mr-2"
                      }), "TMDB is working as expected"]
                  }) : n.jsxs(n.Fragment, {
                      children: [n.jsxs("p", {
                          className: "text-white font-bold w-full mb-3 flex items-center gap-1",
                          children: [n.jsx(I, {
                              icon: j.CIRCLE_EXCLAMATION,
                              className: "text-video-scraping-error mr-2"
                          }), "TMDB is not working"]
                      }), n.jsx("p", {
                          children: t.errorText
                      })]
                  }) : n.jsx("p", {
                      children: "Run the test to validate TMDB"
                  })
              }), n.jsxs(R, {
                  theme: "purple",
                  onClick: i,
                  children: [r.loading ? n.jsx(kt, {
                      className: "text-base mr-2"
                  }) : null, "Test TMDB"]
              })]
          })
      })]
  })
}

function st(e) {
  return n.jsxs("div", {
      className: "flex mb-2",
      children: [n.jsx(I, {
          icon: e.errored ? j.WARNING : e.success ? j.CIRCLE_CHECK : j.EYE_SLASH,
          className: S({
              "text-xl mr-2 mt-0.5": !0,
              "text-video-scraping-error": e.errored,
              "text-video-scraping-noresult": !e.errored && !e.success,
              "text-video-scraping-success": e.success
          })
      }), n.jsxs("div", {
          className: "flex-1",
          children: [n.jsx("p", {
              className: "text-white font-bold",
              children: e.name
          }), e.errorText ? n.jsx("p", {
              children: e.errorText
          }) : null]
      })]
  })
}

function kc() {
  const e = d.useMemo(() => er().map((a, o) => ({
          id: o.toString(),
          url: a
      })), []),
      [t, s] = d.useState([]),
      [r, i] = ie(async () => {
          function a(o, l) {
              s(c => [...c.filter(u => u.id !== o), l])
          }
          s([]);
          for (const o of e) try {
              if (o.url.endsWith("/")) {
                  a(o.id, {
                      id: o.id,
                      status: "error",
                      error: new Error("URL ends with slash")
                  });
                  continue
              }
              await xn(o.url, "https://postman-echo.com/get", {}), a(o.id, {
                  id: o.id,
                  status: "success"
              })
          } catch (l) {
              a(o.id, {
                  id: o.id,
                  status: "error",
                  error: l
              })
          }
      }, [e, s]);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "!mb-0 mt-12",
          children: "Worker tests"
      }), n.jsxs("p", {
          className: "mb-8 mt-2",
          children: [e.length, " worker(s) registered"]
      }), n.jsxs(En, {
          children: [e.map((a, o) => {
              var u;
              const l = t.find(m => m.id === a.id),
                  c = `Worker ${o+1}`;
              return l ? l.status === "error" ? n.jsx(st, {
                  name: c,
                  errored: !0,
                  errorText: (u = l.error) == null ? void 0 : u.toString()
              }, a.id) : l.status === "success" ? n.jsx(st, {
                  name: c,
                  success: !0
              }, a.id) : n.jsx(st, {
                  name: c
              }, a.id) : n.jsx(st, {
                  name: c
              }, a.id)
          }), n.jsx(Tt, {}), n.jsx("div", {
              className: "flex justify-end",
              children: n.jsx(R, {
                  theme: "purple",
                  loading: r.loading,
                  onClick: i,
                  children: "Test workers"
              })
          })]
      })]
  })
}
async function Lr(e) {
  return O("/meta", {
      baseURL: e
  })
}

function Nc() {
  var a, o, l, c;
  const e = _().BACKEND_URL,
      [t, s] = d.useState({
          hasTested: !1,
          success: !1,
          errorText: "",
          value: null
      }),
      [r, i] = ie(async () => {
          s({
              hasTested: !1,
              success: !1,
              errorText: "",
              value: null
          });
          try {
              const u = await Lr(e);
              return s({
                  hasTested: !0,
                  success: !0,
                  errorText: "Failed to call backend, double check the URL key and your internet connection",
                  value: u
              })
          } catch {
              return s({
                  hasTested: !0,
                  success: !1,
                  errorText: "Failed to call backend, double check the URL key and your internet connection",
                  value: null
              })
          }
      }, [s]);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "mb-8 mt-12",
          children: "Backend API test"
      }), n.jsxs(En, {
          children: [n.jsx("div", {
              children: n.jsx("div", {
                  className: "flex-1",
                  children: t.hasTested && t.success ? n.jsxs(n.Fragment, {
                      children: [n.jsxs("p", {
                          children: [n.jsx("span", {
                              className: "inline-block w-36 text-white font-medium",
                              children: "Version:"
                          }), (a = t.value) == null ? void 0 : a.version]
                      }), n.jsxs("p", {
                          children: [n.jsx("span", {
                              className: "inline-block w-36 text-white font-medium",
                              children: "Backend name:"
                          }), (o = t.value) == null ? void 0 : o.name]
                      }), n.jsxs("p", {
                          children: [n.jsx("span", {
                              className: "inline-block w-36 text-white font-medium",
                              children: "Description:"
                          }), ((l = t.value) == null ? void 0 : l.description) ?? "Not set"]
                      }), n.jsxs("p", {
                          children: [n.jsx("span", {
                              className: "inline-block w-36 text-white font-medium",
                              children: "Captcha enabled:"
                          }), (c = t.value) != null && c.hasCaptcha ? "Yes" : "No"]
                      }), n.jsx(Tt, {})]
                  }) : null
              })
          }), n.jsxs("div", {
              className: "w-full flex gap-6 justify-between items-center",
              children: [t.hasTested ? t.success ? n.jsxs("p", {
                  className: "flex items-center text-md",
                  children: [n.jsx(I, {
                      icon: j.CIRCLE_CHECK,
                      className: "text-video-scraping-success mr-2"
                  }), "Backend is working as expected"]
              }) : n.jsxs("div", {
                  children: [n.jsxs("p", {
                      className: "text-white font-bold w-full mb-3 flex items-center gap-1",
                      children: [n.jsx(I, {
                          icon: j.CIRCLE_EXCLAMATION,
                          className: "text-video-scraping-error mr-2"
                      }), "Backend is not working"]
                  }), n.jsx("p", {
                      children: t.errorText
                  })]
              }) : n.jsx("p", {
                  children: "Run the test to validate backend"
              }), n.jsx(R, {
                  theme: "purple",
                  loading: r.loading,
                  className: "whitespace-nowrap",
                  onClick: i,
                  children: "Test backend"
              })]
          })]
      })]
  })
}

function Sc() {
  return n.jsx(Qe, {
      children: n.jsxs(Et, {
          children: [n.jsx(St, {
              children: "Admin tools"
          }), n.jsx(Y, {
              children: "Useful tools to test out your current deployment"
          }), n.jsx(jc, {}), n.jsx(Nc, {}), n.jsx(kc, {}), n.jsx(wc, {})]
      })
  })
}

function Cc(e) {
  return n.jsx("div", {
      className: "relative my-4 max-w-[25rem]",
      children: n.jsx(Ze, {
          value: e.selectedItem,
          onChange: e.setSelectedItem,
          children: () => n.jsxs(n.Fragment, {
              children: [n.jsxs(Ze.Button, {
                  className: "relative w-full rounded-lg bg-dropdown-background hover:bg-dropdown-hoverBackground py-3 pl-3 pr-10 text-left text-white shadow-md focus:outline-none tabbable cursor-pointer",
                  children: [n.jsxs("span", {
                      className: "flex gap-4 items-center truncate",
                      children: [e.selectedItem.leftIcon ? e.selectedItem.leftIcon : null, e.selectedItem.name]
                  }), n.jsx("span", {
                      className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                      children: n.jsx(I, {
                          icon: j.UP_DOWN_ARROW,
                          className: "transform transition-transform text-xl text-dropdown-secondary"
                      })
                  })]
              }), n.jsx(Vt, {
                  as: d.Fragment,
                  leave: "transition ease-in duration-100",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: n.jsx(Ze.Options, {
                      className: "absolute left-0 right-0 top-10 z-[1] mt-4 max-h-60 overflow-auto rounded-md bg-dropdown-background py-1 text-white shadow-lg ring-1 ring-black ring-opacity-5 scrollbar-thin scrollbar-track-background-secondary scrollbar-thumb-type-secondary focus:outline-none sm:top-10",
                      children: e.options.map(t => n.jsxs(Ze.Option, {
                          className: s => {
                              let {
                                  active: r
                              } = s;
                              return `cursor-pointer flex gap-4 items-center relative select-none py-3 pl-4 pr-4 ${r?"bg-background-secondaryHover text-type-link":"text-white"}`
                          },
                          value: t,
                          children: [t.leftIcon ? t.leftIcon : null, t.name]
                      }, t.id))
                  })
              })]
          })
      })
  })
}
const Ec = e => ({
      casting: {
          instance: null,
          player: null,
          controller: null,
          setInstance(t) {
              e(s => {
                  s.casting.instance = t
              })
          },
          setPlayer(t) {
              e(s => {
                  s.casting.player = t
              })
          },
          setController(t) {
              e(s => {
                  s.casting.controller = t
              })
          },
          setIsCasting(t) {
              e(s => {
                  s.interface.isCasting = t
              })
          },
          clear() {
              e(t => {
                  t.casting.instance = null
              })
          }
      }
  }),
  Ic = {
      unknown: 0,
      360: 10,
      480: 20,
      720: 30,
      1080: 40,
      "4k": 25
  },
  xe = Object.entries(Ic).sort((e, t) => t[1] - e[1]).map(e => e[0]);

function Tr(e, t) {
  if (t.automaticQuality || t.lastChosenQuality === null || t.lastChosenQuality === "unknown") return xe.find(i => e.includes(i));
  const s = xe.indexOf(t.lastChosenQuality);
  let r;
  for (let i = s; i < xe.length; i += 1)
      if (e.includes(xe[i])) {
          r = xe[i];
          break
      } if (r) return r;
  for (let i = s; i >= 0; i -= 1)
      if (e.includes(xe[i])) {
          r = xe[i];
          break
      } return r
}

function Jt(e, t) {
  if (e.type === "hls") return {
      stream: e,
      quality: null
  };
  if (e.type === "file") {
      const s = Object.entries(e.qualities).filter(i => (i[1].url.length ?? 0) > 0).map(i => i[0]),
          r = Tr(s, t);
      if (r) {
          const i = e.qualities[r];
          if (i) return {
              stream: i,
              quality: r
          }
      }
  }
  throw new Error("couldn't select quality")
}
const Rr = {
      "4k": "4K",
      1080: "1080p",
      360: "360p",
      480: "480p",
      720: "720p",
      unknown: "unknown"
  },
  Lc = Object.keys(Rr);

function Pr(e) {
  return Rr[e]
}
const Ue = V(ce(H(e => ({
      quality: {
          automaticQuality: !0,
          lastChosenQuality: null
      },
      setLastChosenQuality(t) {
          e(s => {
              s.quality.lastChosenQuality = t
          })
      },
      setAutomaticQuality(t) {
          e(s => {
              s.quality.automaticQuality = t
          })
      }
  })), {
      name: "__MW::quality"
  })),
  P = {
      IDLE: "idle",
      SCRAPING: "scraping",
      PLAYING: "playing",
      SCRAPE_NOT_FOUND: "scrapeNotFound",
      PLAYBACK_ERROR: "playbackError"
  };

function Ar(e) {
  if (e.type === "show") {
      if (!e.episode || !e.season) throw new Error("missing show data");
      return {
          title: e.title,
          releaseYear: e.releaseYear,
          tmdbId: e.tmdbId,
          type: "show",
          imdbId: e.imdbId,
          episode: e.episode,
          season: e.season
      }
  }
  return {
      title: e.title,
      releaseYear: e.releaseYear,
      tmdbId: e.tmdbId,
      type: "movie",
      imdbId: e.imdbId
  }
}
const Tc = (e, t) => ({
      source: null,
      sourceId: null,
      qualities: [],
      captionList: [],
      currentQuality: null,
      status: P.IDLE,
      meta: null,
      caption: {
          selected: null,
          asTrack: !1
      },
      setSourceId(s) {
          e(r => {
              r.status = P.PLAYING, r.sourceId = s
          })
      },
      setStatus(s) {
          e(r => {
              r.status = s
          })
      },
      setMeta(s, r) {
          e(i => {
              i.meta = s, i.interface.hideNextEpisodeBtn = !1, r && (i.status = r)
          })
      },
      setCaption(s) {
          var i;
          (i = t().display) == null || i.setCaption(s), e(a => {
              a.caption.selected = s
          })
      },
      setSource(s, r, i) {
          let a = [];
          s.type === "file" && (a = Object.keys(s.qualities));
          const o = Ue.getState(),
              l = Jt(s, o.quality);
          e(u => {
              u.source = s, u.qualities = a, u.currentQuality = l.quality, u.captionList = r, u.interface.error = void 0, u.status = P.PLAYING
          }), t().redisplaySource(i)
      },
      redisplaySource(s) {
          var l;
          const r = t(),
              i = r.currentQuality;
          if (!r.source) return;
          const a = Ue.getState(),
              o = Jt(r.source, {
                  automaticQuality: a.quality.automaticQuality,
                  lastChosenQuality: i
              });
          e(c => {
              c.interface.error = void 0, c.status = P.PLAYING
          }), (l = r.display) == null || l.load({
              source: o.stream,
              startAt: s,
              automaticQuality: a.quality.automaticQuality,
              preferredQuality: a.quality.lastChosenQuality
          })
      },
      switchQuality(s) {
          var i, a;
          const r = t();
          if (r.source)
              if (r.source.type === "file") {
                  const o = r.source.qualities[s];
                  if (!o) return;
                  e(l => {
                      l.currentQuality = s, l.status = P.PLAYING, l.interface.error = void 0
                  }), (i = r.display) == null || i.load({
                      source: o,
                      startAt: r.progress.time,
                      automaticQuality: !1,
                      preferredQuality: s
                  })
              } else r.source.type === "hls" && ((a = r.display) == null || a.changeQuality(!1, s))
      },
      enableAutomaticQuality() {
          var r;
          (r = t().display) == null || r.changeQuality(!0, null)
      }
  }),
  Rc = (e, t) => ({
      display: null,
      setDisplay(s) {
          const r = t().display;
          if (r && r.destroy(), !s) {
              e(i => {
                  i.display = null
              });
              return
          }
          s.on("pause", () => e(i => {
              i.mediaPlaying.isPaused = !0, i.mediaPlaying.isPlaying = !1
          })), s.on("play", () => e(i => {
              i.mediaPlaying.hasPlayedOnce = !0, i.mediaPlaying.isPaused = !1, i.mediaPlaying.isPlaying = !0
          })), s.on("fullscreen", i => e(a => {
              a.interface.isFullscreen = i
          })), s.on("time", i => e(a => {
              a.progress.time = i
          })), s.on("volumechange", i => e(a => {
              a.mediaPlaying.volume = i
          })), s.on("duration", i => e(a => {
              a.progress.duration = i
          })), s.on("buffered", i => e(a => {
              a.progress.buffered = i
          })), s.on("loading", i => e(a => {
              a.mediaPlaying.isLoading = i
          })), s.on("qualities", i => {
              e(a => {
                  a.qualities = i
              })
          }), s.on("changedquality", i => {
              e(a => {
                  a.currentQuality = i
              })
          }), s.on("needstrack", i => {
              e(a => {
                  a.caption.asTrack = i
              })
          }), s.on("canairplay", i => {
              e(a => {
                  a.interface.canAirplay = i
              })
          }), s.on("playbackrate", i => {
              e(a => {
                  a.mediaPlaying.playbackRate = i
              })
          }), s.on("error", i => {
              e(a => {
                  a.status = P.PLAYBACK_ERROR, a.interface.error = i
              })
          }), e(i => {
              i.display = s
          })
      },
      reset() {
          var s;
          (s = t().display) == null || s.load({
              source: null,
              startAt: 0,
              automaticQuality: !1,
              preferredQuality: null
          }), e(r => {
              r.status = P.IDLE, r.meta = null, r.thumbnails.images = [], r.progress.time = 0, r.progress.duration = 0
          })
      }
  });
let Ne = function(e) {
      return e[e.REGULAR = 0] = "REGULAR", e[e.REMAINING = 1] = "REMAINING", e
  }({}),
  ne = function(e) {
      return e.NOT_HOVERING = "not_hovering", e.MOUSE_HOVER = "mouse_hover", e.MOBILE_TAPPED = "mobile_tapped", e
  }({});
const Pc = (e, t) => ({
      interface: {
          isCasting: !1,
          hasOpenOverlay: !1,
          isFullscreen: !1,
          isSeeking: !1,
          lastVolume: 0,
          leftControlHovering: !1,
          isHoveringControls: !1,
          hovering: ne.NOT_HOVERING,
          lastHoveringState: ne.NOT_HOVERING,
          volumeChangedWithKeybind: !1,
          volumeChangedWithKeybindDebounce: null,
          timeFormat: Ne.REGULAR,
          canAirplay: !1,
          hideNextEpisodeBtn: !1,
          shouldStartFromBeginning: !1
      },
      setShouldStartFromBeginning(s) {
          e(r => {
              r.interface.shouldStartFromBeginning = s
          })
      },
      setLastVolume(s) {
          e(r => {
              r.interface.lastVolume = s
          })
      },
      setHasOpenOverlay(s) {
          e(r => {
              r.interface.hasOpenOverlay = s
          })
      },
      setTimeFormat(s) {
          e(r => {
              r.interface.timeFormat = s
          })
      },
      updateInterfaceHovering(s) {
          e(r => {
              s !== ne.NOT_HOVERING && (r.interface.lastHoveringState = s), r.interface.hovering = s
          })
      },
      setSeeking(s) {
          const r = t().display;
          r == null || r.setSeeking(s), e(i => {
              i.interface.isSeeking = s
          })
      },
      setHoveringLeftControls(s) {
          e(r => {
              r.interface.leftControlHovering = s
          })
      },
      setHoveringAnyControls(s) {
          e(r => {
              r.interface.isHoveringControls = s
          })
      },
      hideNextEpisodeButton() {
          e(s => {
              s.interface.hideNextEpisodeBtn = !0
          })
      }
  }),
  Ac = e => ({
      mediaPlaying: {
          isPlaying: !1,
          isPaused: !0,
          isLoading: !1,
          isSeeking: !1,
          isDragSeeking: !1,
          hasPlayedOnce: !1,
          volume: 1,
          playbackRate: 1
      },
      play() {
          e(t => {
              t.mediaPlaying.isPlaying = !0, t.mediaPlaying.isPaused = !1
          })
      },
      pause() {
          e(t => {
              t.mediaPlaying.isPlaying = !1, t.mediaPlaying.isPaused = !1
          })
      }
  }),
  _c = e => ({
      progress: {
          time: 0,
          duration: 0,
          buffered: 0,
          draggingTime: 0
      },
      setDraggingTime(t) {
          e(s => {
              s.progress.draggingTime = t
          })
      }
  });

function Oc(e, t) {
  if (e.length === 0) return null;
  const s = e.findIndex(l => l.at > t);
  if (s === -1) return {
      index: e.length - 1,
      image: e[e.length - 1]
  };
  const r = e[s];
  if (s === 0) return {
      index: s,
      image: r
  };
  const i = e[s - 1],
      a = t - i.at,
      o = r.at - t;
  return a < o ? {
      index: s - 1,
      image: i
  } : {
      index: s,
      image: r
  }
}
const Mc = (e, t) => ({
      thumbnails: {
          images: [],
          resetImages() {
              e(s => {
                  s.thumbnails.images = []
              })
          },
          addImage(s) {
              const r = t(),
                  i = r.thumbnails.images.findIndex(o => o.at >= s.at);
              if (i === -1) {
                  e(o => {
                      o.thumbnails.images.push(s), o.thumbnails.images = [...o.thumbnails.images]
                  });
                  return
              }
              if (r.thumbnails.images[i].at === s.at) {
                  e(o => {
                      o.thumbnails.images[i] = s, o.thumbnails.images = [...o.thumbnails.images]
                  });
                  return
              }
              e(o => {
                  o.thumbnails.images.splice(i, 0, s), o.thumbnails.images = [...o.thumbnails.images]
              })
          }
      }
  }),
  x = V(H(function() {
      return {
          ...Pc(...arguments),
          ..._c(...arguments),
          ...Ac(...arguments),
          ...Tc(...arguments),
          ...Rc(...arguments),
          ...Ec(...arguments),
          ...Mc(...arguments)
      }
  })),
  Dc = Fa.sanitize;

function Bc(e, t, s, r) {
  const i = e / 1e3 + s,
      a = t / 1e3 + s;
  return Math.max(0, i) <= r && Math.max(0, a) >= r
}

function Fc(e, t, s) {
  return `${e}-${t}-${s}`
}

function _r(e) {
  const t = e.trim();
  if (t === "") throw new Error("Given text is empty");
  const s = hn(t, "vtt");
  if (Gs(s) === "") throw new Error("Invalid subtitle format");
  return s
}

function Or(e) {
  const t = e.trim();
  if (t === "") throw new Error("Given text is empty");
  const s = hn(t, "srt");
  if (Gs(s) === "") throw new Error("Invalid subtitle format");
  return s
}

function Uc(e, t) {
  const s = _r(e);
  return Ua(s).filter(r => r.type === "caption")
}

function $c(e) {
  return btoa(String.fromCodePoint(...new TextEncoder().encode(e)))
}

function Vc(e) {
  return `data:application/x-subrip;base64,${$c(Or(e))}`
}

function Hc(e) {
  return URL.createObjectURL(new Blob([_r(e)], {
      type: "text/vtt"
  }))
}

function Zt(e) {
  return e.map(t => ({
      id: t.id,
      language: t.language,
      url: t.url,
      needsProxy: t.hasCorsRestrictions
  }))
}
const Wc = $a().map(e => `.${e}`),
  en = new ur;
en.setCompare((e, t) => e === t);
const Gc = 24 * 60 * 60;
async function Kc(e) {
  const t = en.get(e.url);
  if (t) return t;
  let s;
  if (e.needsProxy ? s = await Kt(e.url, {
          responseType: "text"
      }) : s = await fetch(e.url).then(i => i.text()), !s) throw new Error("failed to get caption data");
  const r = Or(s);
  return en.set(e.url, r, Gc), r
}

function Rt() {
  const e = B(g => g.setLanguage),
      t = B(g => g.enabled),
      s = B(g => g.resetSubtitleSpecificSettings),
      r = x(g => g.setCaption),
      i = B(g => g.lastSelectedLanguage),
      a = x(g => g.captionList),
      o = d.useCallback(async g => {
          const h = a.find(y => y.id === g);
          if (!h) return;
          const f = await Kc(h);
          r({
              id: h.id,
              language: h.language,
              srtData: f,
              url: h.url
          }), s(), e(h.language)
      }, [e, a, r, s]),
      l = d.useCallback(async g => {
          const h = a.find(f => f.language === g);
          if (h) return o(h.id)
      }, [a, o]),
      c = d.useCallback(async () => {
          r(null), e(null)
      }, [r, e]),
      u = d.useCallback(async () => (await l(i ?? "en"), !0), [i, l]),
      m = d.useCallback(async () => {
          t ? c() : await u()
      }, [u, c, t]),
      b = d.useCallback(async () => {
          t && await u()
      }, [u, t]);
  return {
      selectLanguage: l,
      disable: c,
      selectLastUsedLanguage: u,
      toggleLastUsed: m,
      selectLastUsedLanguageIfEnabled: b,
      selectCaptionById: o
  }
}

function zc() {
  const e = x(r => r.display),
      t = pn(r => r.volume);
  return {
      init: d.useCallback(() => {
          e == null || e.setVolume(t)
      }, [e, t])
  }
}

function Qc() {
  const e = x(i => i.source),
      t = d.useMemo(() => e ? JSON.stringify(e) : null, [e]),
      {
          selectLastUsedLanguageIfEnabled: s
      } = Rt(),
      r = d.useRef(s);
  d.useEffect(() => {
      r.current = s
  }, [s]), d.useEffect(() => {
      t && r.current()
  }, [t])
}

function qc(e, t) {
  var i;
  const s = e[(t == null ? void 0 : t.tmdbId) ?? ""];
  if (!s || !t) return 0;
  if (t.type === "movie") return s.progress ? s.progress.watched : 0;
  const r = s.episodes[((i = t.episode) == null ? void 0 : i.tmdbId) ?? ""];
  return r ? r.progress.watched : 0
}

function Mr() {
  const e = x(g => g.setStatus),
      t = x(g => g.setMeta),
      s = x(g => g.setSource),
      r = x(g => g.setCaption),
      i = x(g => g.setSourceId),
      a = x(g => g.status),
      o = x(g => g.interface.shouldStartFromBeginning),
      l = x(g => g.setShouldStartFromBeginning),
      c = x(g => g.reset),
      u = x(g => g.meta),
      {
          init: m
      } = zc(),
      b = G();
  return {
      meta: u,
      reset: c,
      status: a,
      shouldStartFromBeginning: o,
      setShouldStartFromBeginning: l,
      setMeta(g, h) {
          t(g, h)
      },
      playMedia(g, h, f, y) {
          const p = y ?? qc(b.items, u);
          r(null), s(g, h, p), i(f), e(P.PLAYING), m()
      },
      setScrapeStatus() {
          e(P.SCRAPING)
      },
      setScrapeNotFound() {
          e(P.SCRAPE_NOT_FOUND)
      }
  }
}
const In = d.forwardRef((e, t) => {
  let {
      onChange: s,
      onUnFocus: r,
      value: i,
      label: a,
      name: o,
      autoComplete: l,
      className: c,
      placeholder: u,
      onFocus: m,
      passwordToggleable: b
  } = e, g = "text";
  const [h, f] = d.useState(!0);
  b && (g = h ? "password" : "text");
  const y = n.jsxs("div", {
      className: "relative",
      children: [n.jsx("input", {
          type: g,
          ref: t,
          className: S(c, b && "pr-12"),
          placeholder: u,
          onChange: p => s && s(p.target.value),
          value: i,
          name: o,
          autoComplete: l,
          onBlur: () => r && r(),
          onFocus: () => m == null ? void 0 : m(),
          onKeyDown: p => p.key === "Enter" ? p.target.blur() : null
      }), b ? n.jsx("button", {
          type: "button",
          className: "absolute top-1/2 -translate-y-1/2 right-1 text-xl p-3",
          onClick: () => f(!h),
          children: n.jsx(I, {
              icon: h ? j.EYE : j.EYE_SLASH
          })
      }) : null]
  });
  return a ? n.jsxs("label", {
      children: [n.jsx("span", {
          children: a
      }), y]
  }) : y
});

function Yc(e) {
  return n.jsx("p", {
      className: S("text-errors-type-secondary", e.marginClass ?? "mt-6"),
      children: e.children
  })
}

function Xc() {
  const {
      t: e
  } = C(), t = x(r => r.interface.error), s = Nn("error");
  return n.jsxs(kn, {
      children: [n.jsxs(wn, {
          children: [n.jsx(jn, {
              icon: j.WAND,
              children: e("player.playbackError.badge")
          }), n.jsx(Ve, {
              children: e("player.playbackError.title")
          }), n.jsx(Yc, {
              children: e("player.playbackError.text")
          }), n.jsxs("div", {
              className: "flex gap-3",
              children: [n.jsx(R, {
                  href: "/",
                  theme: "secondary",
                  padding: "md:px-12 p-2.5",
                  className: "mt-6",
                  children: e("player.playbackError.homeButton")
              }), n.jsx(R, {
                  onClick: () => s.show(),
                  theme: "purple",
                  padding: "md:px-12 p-2.5",
                  className: "mt-6",
                  children: e("errors.showError")
              })]
          })]
      }), n.jsx(Zl, {
          onClose: () => s.hide(),
          error: t,
          id: s.id
      })]
  })
}
const ae = d.forwardRef((e, t) => n.jsxs("button", {
  ref: t,
  type: "button",
  onClick: s => {
      var r;
      return (r = e.onClick) == null ? void 0 : r.call(e, s.currentTarget)
  },
  className: S(["tabbable p-2 rounded-full hover:bg-video-buttonBackground hover:bg-opacity-50 transition-transform duration-100 flex items-center gap-3", e.activeClass ?? "active:scale-110 active:bg-opacity-75 active:text-white", e.className ?? ""]),
  children: [e.icon && n.jsx(I, {
      className: e.iconSizeClass || "text-2xl",
      icon: e.icon
  }), e.children]
}));

function ms(e) {
  const t = x(i => i.display),
      {
          isPaused: s
      } = x(i => i.mediaPlaying),
      r = () => {
          s ? t == null || t.play() : t == null || t.pause()
      };
  return n.jsx(ae, {
      className: e.className,
      iconSizeClass: e.iconSizeClass,
      onClick: r,
      icon: s ? j.PLAY : j.PAUSE
  })
}

function hs() {
  const {
      isFullscreen: e
  } = x(s => s.interface), t = x(s => s.display);
  return n.jsx(ae, {
      onClick: () => t == null ? void 0 : t.toggleFullscreen(),
      icon: e ? j.COMPRESS : j.EXPAND
  })
}
const Dr = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let Ft = null;
async function gt() {
  if (Ft === null) {
      const e = new Promise(s => {
              setTimeout(() => s(!1), 1e3)
          }),
          t = new Promise(s => {
              const r = document.createElement("video"),
                  i = () => {
                      r.removeEventListener("volumechange", i), s(!0)
                  };
              r.addEventListener("volumechange", i), r.volume = .5
          });
      Ft = await Promise.race([t, e])
  }
  return Ft
}

function Pt() {
  return J.fullscreenEnabled
}

function Br() {
  return Pt() || Dr
}

function Fr() {
  return Pt() || Br()
}

function Ur() {
  return "pictureInPictureEnabled" in document
}

function $r() {
  return "webkitSupportsPresentationMode" in document.createElement("video")
}

function at(e) {
  return me.isSupported() ? !1 : !!e.canPlayType("application/vnd.apple.mpegurl")
}

function Jc() {
  const e = Si();
  return (e == null ? void 0 : e.type) !== "browser" ? "unknown" : e.name === "ios" || e.name === "ios-webview" ? "ios" : e.name === "chrome" || e.name === "chromium-webview" || e.name === "edge-chromium" || e.name === "opera" ? "chrome" : e.name === "firefox" ? "firefox" : "unknown"
}

function fs() {
  const e = x(t => t.display);
  return !Ur() && !$r() ? null : n.jsx(ae, {
      onClick: () => e == null ? void 0 : e.togglePictureInPicture(),
      icon: j.PICTURE_IN_PICTURE
  })
}

function Zc(e) {
  return `${e.toFixed(2)}%`
}

function gs(e) {
  return Number(Math.max(0, Math.min(e, 100)).toFixed(2))
}

function eu(e) {
  return e.type === "mousedown" || e.type === "mouseup" || e.type === "mousemove"
}
const Ut = e => eu(e) ? e.pageX : e.changedTouches[0].pageX;

function Ln(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  const [r, i] = d.useState(!1), [a, o] = d.useState(0);
  d.useEffect(() => {
      function c(m) {
          if (!r || !e.current) return;
          const b = e.current.getBoundingClientRect(),
              g = (Ut(m) - b.left) / e.current.offsetWidth;
          o(g * 100), s && t(g)
      }

      function u(m) {
          if (!r || (i(!1), document.body.removeAttribute("data-no-select"), !e.current)) return;
          const b = e.current.getBoundingClientRect(),
              g = (Ut(m) - b.left) / e.current.offsetWidth;
          t(g)
      }
      return document.addEventListener("mousemove", c), document.addEventListener("touchmove", c), document.addEventListener("mouseup", u), document.addEventListener("touchend", u), () => {
          document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", c), document.removeEventListener("mouseup", u), document.removeEventListener("touchend", u)
      }
  }, [r, e, t, s]);
  const l = d.useCallback(c => {
      if (i(!0), document.body.setAttribute("data-no-select", "true"), !e.current) return;
      const u = e.current.getBoundingClientRect(),
          m = (Ut(c) - u.left) / e.current.offsetWidth * 100;
      o(m)
  }, [o, e]);
  return {
      dragging: r,
      dragPercentage: a,
      dragMouseDown: l
  }
}

function ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Number.isNaN(e)) return t ? "0:00:00" : "0:00";
  let s = e;
  const r = Math.floor(s % 60);
  s /= 60;
  const i = Math.floor(s % 60);
  s /= 60;
  const a = Math.floor(s),
      o = r.toString().padStart(2, "0"),
      l = i.toString().padStart(2, "0");
  return t ? [a, l, o].join(":") : [l, o].join(":")
}

function tn(e) {
  return e > 60 * 60
}

function tu(e) {
  const t = x(o => o.thumbnails.images),
      s = d.useMemo(() => {
          var o;
          return (o = Oc(t, e.at)) == null ? void 0 : o.image
      }, [t, e.at]),
      [r, i] = d.useState({
          offscreenLeft: 0,
          offscreenRight: 0
      }),
      a = d.useRef(null);
  return d.useEffect(() => {
      if (!a.current) return;
      const o = a.current.getBoundingClientRect(),
          l = 32,
          c = Math.max(0, (o.left - l) * -1),
          u = Math.max(0, o.right + l - window.innerWidth);
      i({
          offscreenLeft: c,
          offscreenRight: u
      })
  }, [e.at]), !e.show || !s ? null : n.jsx("div", {
      className: "flex flex-col items-center -translate-x-1/2 pointer-events-none",
      children: n.jsx("div", {
          className: "w-screen flex justify-center",
          children: n.jsx("div", {
              ref: a,
              children: n.jsxs("div", {
                  style: {
                      transform: `translateX(${r.offscreenLeft>0?r.offscreenLeft:-r.offscreenRight}px)`
                  },
                  children: [n.jsx("img", {
                      src: s.data,
                      className: "h-24 border rounded-xl border-gray-800"
                  }), n.jsx("p", {
                      className: "text-center mt-1",
                      children: ot(Math.max(e.at, 0), tn(e.at))
                  })]
              })
          })
      })
  })
}

function nu(e) {
  const [t, s] = d.useState(-1), r = d.useCallback(a => {
      if (!e.current) return;
      const l = e.current.getBoundingClientRect(),
          c = (a.pageX - l.left) / e.current.offsetWidth;
      s(c * 100)
  }, [s, e]), i = d.useCallback(() => {
      s(-1)
  }, [s]);
  return {
      mousePos: t,
      mouseMove: r,
      mouseLeave: i
  }
}
const su = function() {
      const {
          duration: t,
          time: s,
          buffered: r
      } = x(p => p.progress), i = x(p => p.display), a = x(p => p.setDraggingTime), o = x(p => p.setSeeking), {
          isSeeking: l
      } = x(p => p.interface), c = d.useCallback(p => {
          i == null || i.setTime(p * t)
      }, [t, i]), u = d.useRef(null), {
          mouseMove: m,
          mouseLeave: b,
          mousePos: g
      } = nu(u), {
          dragging: h,
          dragPercentage: f,
          dragMouseDown: y
      } = Ln(u, c);
      return d.useEffect(() => {
          o(h)
      }, [o, h]), d.useEffect(() => {
          a(f / 100 * t)
      }, [a, t, f]), n.jsxs("div", {
          className: "w-full relative",
          dir: "ltr",
          children: [n.jsx("div", {
              className: "top-0 absolute inset-x-0",
              children: n.jsx("div", {
                  className: "absolute bottom-0",
                  style: {
                      left: `${g}%`
                  },
                  children: n.jsx(tu, {
                      at: Math.floor(g / 100 * t),
                      show: g > -1
                  })
              })
          }), n.jsx("div", {
              className: "w-full",
              ref: u,
              children: n.jsx("div", {
                  className: "group w-full h-8 flex items-center cursor-pointer",
                  onMouseDown: y,
                  onTouchStart: y,
                  onMouseLeave: b,
                  onMouseMove: m,
                  children: n.jsxs("div", {
                      className: ["relative w-full h-1 bg-progress-background bg-opacity-25 rounded-full transition-[height] duration-100 group-hover:h-1.5", h ? "!h-1.5" : ""].join(" "),
                      children: [n.jsx("div", {
                          className: "absolute top-0 left-0 h-full rounded-full bg-progress-preloaded bg-opacity-50 flex justify-end items-center",
                          style: {
                              width: `${r/t*100}%`
                          }
                      }), n.jsx("div", {
                          className: "absolute top-0 dir-neutral:left-0 h-full rounded-full bg-progress-filled flex justify-end items-center",
                          style: {
                              width: `${Math.max(0,Math.min(1,h?f/100:s/t))*100}%`
                          },
                          children: n.jsx("div", {
                              className: ["w-[1rem] min-w-[1rem] h-[1rem] rounded-full transform translate-x-1/2 scale-0 group-hover:scale-100 bg-white transition-[transform] duration-100", l ? "scale-100" : ""].join(" ")
                          })
                      })]
                  })
              })
          })]
      })
  },
  ru = su;

function xs(e) {
  const t = x(i => i.display),
      s = x(i => i.progress.time),
      r = d.useCallback(() => {
          t == null || t.setTime(s + 10)
      }, [t, s]);
  return n.jsx(ae, {
      iconSizeClass: e.iconSizeClass,
      onClick: r,
      icon: j.SKIP_FORWARD
  })
}

function ps(e) {
  const t = x(i => i.display),
      s = x(i => i.progress.time),
      r = d.useCallback(() => {
          t == null || t.setTime(s - 10)
      }, [t, s]);
  return n.jsx(ae, {
      iconSizeClass: e.iconSizeClass,
      onClick: r,
      icon: j.SKIP_BACKWARD
  })
}

function bs(e) {
  const t = x(v => v.interface.timeFormat),
      s = x(v => v.setTimeFormat),
      {
          duration: r,
          time: i,
          draggingTime: a
      } = x(v => v.progress),
      {
          isSeeking: o
      } = x(v => v.interface),
      {
          t: l
      } = C(),
      c = tn(r);

  function u() {
      s(t === Ne.REGULAR ? Ne.REMAINING : Ne.REGULAR)
  }
  const m = Math.min(Math.max(o ? a : i, 0), r),
      b = Math.abs(m - r),
      g = ot(b, tn(b)),
      h = ot(m, c),
      f = new Date(Date.now() + b * 1e3),
      y = ot(r, c);
  let p = t === Ne.REGULAR ? "regular" : "remaining";
  return e.short && (p = t === Ne.REGULAR ? "shortRegular" : "shortRemaining"), n.jsx(ae, {
      onClick: () => u(),
      children: n.jsx("span", {
          children: l(`player.time.${p}`, {
              timeFinished: f,
              timeWatched: h,
              timeLeft: g,
              duration: y,
              formatParams: {
                  timeFinished: {
                      hour: "numeric",
                      minute: "numeric"
                  }
              }
          })
      })
  })
}

function iu() {
  return x(t => t.mediaPlaying.isLoading) ? n.jsx(kt, {
      className: "text-4xl"
  }) : null
}

function au() {
  const e = x(o => o.display),
      t = x(o => o.mediaPlaying.isPlaying),
      s = x(o => o.mediaPlaying.isLoading),
      r = x(o => o.mediaPlaying.hasPlayedOnce),
      i = x(o => o.status),
      a = d.useCallback(() => {
          e == null || e.play()
      }, [e]);
  return r || t || s || i !== P.PLAYING ? null : n.jsx("div", {
      onClick: a,
      className: "group pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center bg-video-autoPlay-background hover:bg-video-autoPlay-hover rounded-full text-white transition-[background-color,transform] hover:scale-125 active:scale-100",
      children: n.jsx(I, {
          icon: j.PLAY,
          className: "text-2xl transition-transform group-hover:scale-125"
      })
  })
}

function Vr() {
  const e = x(o => o.mediaPlaying.volume),
      t = x(o => o.interface.lastVolume),
      s = x(o => o.setLastVolume),
      r = x(o => o.display),
      i = pn(o => o.setVolume),
      a = () => {
          let o = 0;
          e > 0 ? (o = 0, s(e)) : t > 0 ? o = t : o = 1, r == null || r.setVolume(o), i(o)
      };
  return {
      toggleMute() {
          a()
      },
      setVolume(o) {
          i(o), s(o), r == null || r.setVolume(o)
      }
  }
}
const ou = function(t) {
      const s = d.useRef(null),
          r = x(p => p.setHoveringLeftControls),
          i = x(p => p.interface.leftControlHovering),
          a = x(p => p.mediaPlaying.volume),
          {
              setVolume: o,
              toggleMute: l
          } = Vr(),
          c = d.useCallback(p => {
              o(p)
          }, [o]),
          {
              dragging: u,
              dragPercentage: m,
              dragMouseDown: b
          } = Ln(s, c, !0),
          g = d.useCallback(() => {
              l()
          }, [l]),
          h = d.useCallback(async () => {
              await gt() && r(!0)
          }, [r]);
      let f = gs(a * 100);
      u && (f = gs(m));
      const y = Zc(f);
      return n.jsx("div", {
          className: t.className,
          onMouseEnter: h,
          children: n.jsxs("div", {
              className: "pointer-events-auto flex cursor-pointer items-center py-0",
              children: [n.jsx("div", {
                  className: "px-4 text-2xl text-white",
                  onClick: g,
                  children: n.jsx(I, {
                      icon: f > 0 ? j.VOLUME : j.VOLUME_X
                  })
              }), n.jsx("div", {
                  className: `linear -ml-2 w-0 overflow-hidden transition-[width,opacity] duration-300 ${i||u?"!w-24 opacity-100":"w-4 opacity-0"}`,
                  children: n.jsx("div", {
                      ref: s,
                      className: "flex h-10 w-20 items-center px-2",
                      onMouseDown: b,
                      onTouchStart: b,
                      children: n.jsx("div", {
                          className: "relative h-1 flex-1 rounded-full bg-gray-500 bg-opacity-50",
                          children: n.jsx("div", {
                              className: "absolute inset-y-0 left-0 flex items-center justify-end rounded-full bg-video-audio-set",
                              style: {
                                  width: y
                              },
                              children: n.jsx("div", {
                                  className: "absolute h-3 w-3 translate-x-1/2 rounded-full bg-white"
                              })
                          })
                      })
                  })
              })]
          })
      })
  },
  lu = ou;

function cu() {
  const e = x(t => {
      var s;
      return (s = t.meta) == null ? void 0 : s.title
  });
  return n.jsx("p", {
      children: e
  })
}

function uu() {
  var s, r, i;
  const {
      t: e
  } = C(), t = x(a => a.meta);
  return (t == null ? void 0 : t.type) !== "show" ? null : n.jsxs("div", {
      className: "flex gap-3",
      children: [n.jsx("span", {
          className: "text-white font-medium",
          children: e("media.episodeDisplay", {
              season: (s = t == null ? void 0 : t.season) == null ? void 0 : s.number,
              episode: (r = t == null ? void 0 : t.episode) == null ? void 0 : r.number
          })
      }), n.jsx("span", {
          className: "text-type-secondary font-medium",
          children: (i = t == null ? void 0 : t.episode) == null ? void 0 : i.title
      })]
  })
}

function Hr(e) {
  return n.jsxs("div", {
      className: S("relative", e.className),
      children: [n.jsx("div", {
          id: `__overlayRouter::${e.id}`,
          className: "absolute inset-0 -z-10"
      }), e.children]
  })
}

function At(e) {
  const [t, s] = d.useState(!1), r = d.useRef(!1);
  return d.useEffect(() => {
      function i() {
          const a = e ? window.innerHeight < 600 : window.innerWidth < 1024;
          r.current !== a && (r.current = a, s(a))
      }
      return i(), window.addEventListener("resize", i), () => {
          window.removeEventListener("resize", i)
      }
  }, [e]), {
      isMobile: t
  }
}

function X(e) {
  const t = Ae(e.id),
      s = t.showBackwardsTransition(e.path),
      r = t.isCurrentPage(e.path),
      i = Ie(u => u.registerRoute),
      a = d.useMemo(() => t.makePath(e.path), [e.path, t]),
      {
          isMobile: o
      } = At();
  d.useEffect(() => {
      i({
          id: a,
          width: e.width,
          height: e.height
      })
  }, [e.height, e.width, a, i]);
  const l = o ? "100%" : `${e.width}px`;
  let c = "none";
  return (s === "yes" || s === "no") && (c = s === "yes" ? "slide-full-left" : "slide-full-right"), n.jsx(Q, {
      animation: c,
      className: "absolute inset-0",
      durationClass: "duration-[400ms]",
      show: r,
      children: n.jsx("div", {
          className: S(["grid grid-rows-1 max-h-full", e.className]),
          style: {
              height: e.height ? `${e.height}px` : void 0,
              width: e.width ? l : void 0
          },
          children: e.children
      })
  })
}

function du() {
  const e = Ie(u => u.anchorPoint),
      t = d.useRef(null),
      [s, r] = d.useState(0),
      [i, a] = d.useState(0),
      [o, l] = d.useState(null),
      c = d.useCallback((u, m) => {
          if (!u) return;
          const b = u.x + u.w / 2,
              g = window.innerHeight - (u.y + u.h);
          a(window.innerHeight - g - u.h - m.height - 30), r(Math.min(b - m.width / 2, window.innerWidth - m.width - 30))
      }, []);
  return d.useEffect(() => {
      !e || !o || c(e, o)
  }, [e, c, o]), d.useEffect(() => {
      if (!t.current) return;

      function u() {
          var g;
          const b = (g = t.current) == null ? void 0 : g.getBoundingClientRect();
          l(b ?? null)
      }
      u();
      const m = new ResizeObserver(u);
      return m.observe(t.current), () => {
          m.disconnect()
      }
  }, []), [t, s, i]
}

function mu(e) {
  const [t, s, r] = du();
  return n.jsx("div", {
      ref: t,
      style: {
          transform: `translateX(${s}px) translateY(${r}px)`
      },
      className: S(["[&>*]:pointer-events-auto z-10 flex dir-neutral:items-start rtl:justify-start ltr:justify-end dir-neutral:origin-top-left touch-none", e.className]),
      children: e.children
  })
}
const hu = function(t) {
      const s = Ae("hello world :)"),
          {
              t: r
          } = C();
      return n.jsxs("div", {
          className: S(["pointer-events-auto px-4 pb-6 z-10 ml-[env(safe-area-inset-left)] mr-[env(safe-area-inset-right)] bottom-0 origin-top-left inset-x-0 absolute overflow-hidden max-h-[calc(100vh-1.5rem)] grid grid-rows-[minmax(0,1fr),auto]", t.className]),
          children: [t.children, n.jsx("button", {
              className: "w-full text-video-context-type-main bg-video-context-background z-10 relative hover:bg-video-context-closeHover active:scale-95 rounded-2xl pointer-events-auto transition-all duration-100 flex justify-center items-center py-3 mt-3 font-bold border border-video-context-border hover:text-white",
              type: "button",
              onClick: () => s.close(),
              children: r("overlays.close")
          }), n.jsx("div", {
              className: "pointer-events-none absolute z-0 bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
          })]
      })
  },
  fu = hu,
  gu = 200,
  xu = "--colors-global-accentA";

function pu(e) {
  return n.jsx("div", {
      tabIndex: e.tabIndex,
      className: S(e.className, "relative"),
      onKeyUp: e.onKeyUp,
      children: e.children
  })
}

function bu(e) {
  return n.jsx("div", {
      className: S(e.className, "relative"),
      children: e.children
  })
}
const yu = function(t) {
      const s = d.useRef(null),
          r = t.flareSize ?? gu,
          i = t.cssColorVar ?? xu;
      return d.useEffect(() => {
          function a(o) {
              if (!s.current) return;
              const l = s.current.getBoundingClientRect(),
                  c = r / 2;
              s.current.style.setProperty("--bg-x", `${(o.clientX-l.left-c).toFixed(0)}px`), s.current.style.setProperty("--bg-y", `${(o.clientY-l.top-c).toFixed(0)}px`)
          }
          return document.addEventListener("mousemove", a), () => document.removeEventListener("mousemove", a)
      }, [r]), n.jsx("div", {
          ref: s,
          className: S("flare-light pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-[400ms]", t.className, {
              "!opacity-100": t.enabled ?? !1
          }),
          style: {
              backgroundImage: `radial-gradient(circle at center, rgba(var(${i}) / 1), rgba(var(${i}) / 0) 70%)`,
              backgroundPosition: "var(--bg-x) var(--bg-y)",
              backgroundRepeat: "no-repeat",
              backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
          },
          children: n.jsx("div", {
              className: S("absolute inset-[1px] overflow-hidden", t.className, t.backgroundClass),
              children: n.jsx("div", {
                  className: "absolute inset-0 opacity-10",
                  style: {
                      background: `radial-gradient(circle at center, rgba(var(${i}) / 1), rgba(var(${i}) / 0) 70%)`,
                      backgroundPosition: "var(--bg-x) var(--bg-y)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: `${r.toFixed(0)}px ${r.toFixed(0)}px`
                  }
              })
          })
      })
  },
  vu = yu,
  se = {
      Base: pu,
      Light: vu,
      Child: bu
  };

function ju(e) {
  const t = d.useRef(null),
      {
          isMobile: s
      } = At(),
      r = Ie(u => u.routes),
      i = Ae(e.id),
      a = d.useMemo(() => r[i.currentRoute ?? ""], [r, i]),
      [o, l] = Ci(() => ({
          from: {
              height: `${(a==null?void 0:a.height)??0}px`,
              width: s ? "100%" : `${(a==null?void 0:a.width)??0}px`
          },
          config: {
              easing: Ei.linear
          }
      }), []),
      c = d.useRef(null);
  return d.useEffect(() => {
      const u = {
              height: a == null ? void 0 : a.height,
              width: a == null ? void 0 : a.width,
              isMobile: s
          },
          m = JSON.stringify(u);
      if (m !== c.current) {
          const b = c.current ? JSON.parse(c.current) : null;
          c.current = m, u.isMobile ? (l.set({
              width: "100%"
          }), l.start({
              height: `${(a==null?void 0:a.height)??0}px`
          })) : (b == null ? void 0 : b.height) === void 0 && u.height !== void 0 ? l.set({
              height: `${(a==null?void 0:a.height)??0}px`,
              width: `${(a==null?void 0:a.width)??0}px`
          }) : l.start({
              height: `${(a==null?void 0:a.height)??0}px`,
              width: `${(a==null?void 0:a.width)??0}px`
          })
      }
  }, [a == null ? void 0 : a.height, a == null ? void 0 : a.width, s, l]), n.jsx(Di.div, {
      ref: t,
      style: o,
      className: "overflow-hidden relative z-10 max-h-full",
      children: n.jsxs(se.Base, {
          className: "group w-full bg-video-context-border h-full rounded-2xl transition-colors duration-100 text-video-context-type-main",
          children: [n.jsx(se.Light, {
              flareSize: 400,
              cssColorVar: "--colors-video-context-light",
              backgroundClass: "bg-video-context-background duration-100",
              className: "rounded-2xl opacity-100"
          }), n.jsx(se.Child, {
              className: "pointer-events-auto relative transition-transform duration-100 h-full",
              children: e.children
          })]
      })
  })
}

function Wr(e) {
  const {
      isMobile: t
  } = At(), s = n.jsx(ju, {
      id: e.id,
      children: e.children
  });
  return t ? n.jsx(fu, {
      children: s
  }) : n.jsx(mu, {
      children: s
  })
}

function ys(e) {
  try {
      return new URL(e).hostname
  } catch {
      return null
  }
}

function wu(e) {
  return e.type === "hls" ? [ys(e.playlist)].filter(t => !!t) : e.type === "file" ? Object.values(e.qualities).map(t => ys(t.url)).filter(t => !!t) : []
}

function ku(e) {
  const t = {};
  return Object.entries(e.headers ?? {}).forEach(s => {
      t[s[0]] = s[1]
  }), Object.entries(e.preferredHeaders ?? {}).forEach(s => {
      t[s[0]] = s[1]
  }), t
}
async function nn(e) {
  await oo({
      ruleId: 1,
      targetDomains: wu(e),
      requestHeaders: ku(e)
  })
}

function sn() {
  return he() ? Kn({
      fetcher: Lo(),
      target: zn.BROWSER_EXTENSION,
      consistentIpForRequests: !0
  }) : Kn({
      fetcher: Ii(fetch),
      proxiedFetcher: Eo(),
      target: zn.BROWSER
  })
}
const Nu = {
      "4k": "4k",
      1080: "1080",
      480: "480",
      360: "360",
      720: "720",
      unknown: "unknown"
  },
  Su = Object.keys(Nu),
  Cu = ["mp4"];

function Eu(e) {
  return Su.includes(e)
}

function rn(e) {
  if (e.stream.type === "hls") return {
      type: "hls",
      url: e.stream.playlist,
      preferredHeaders: e.stream.preferredHeaders
  };
  if (e.stream.type === "file") {
      const t = {};
      return Object.entries(e.stream.qualities).forEach(s => {
          if (!Eu(s[0])) {
              console.warn(`unrecognized quality: ${s[0]}`);
              return
          }
          if (!Cu.includes(s[1].type)) {
              console.warn(`unrecognized file type: ${s[1].type}`);
              return
          }
          t[s[0]] = {
              type: s[1].type,
              url: s[1].url
          }
      }), {
          type: "file",
          qualities: t,
          preferredHeaders: e.stream.preferredHeaders
      }
  }
  throw new Error("unrecognized type")
}

function Iu(e, t, s, r) {
  const i = x(h => h.setSource),
      a = x(h => h.setCaption),
      o = x(h => h.setSourceId),
      l = x(h => h.progress.time),
      c = x(h => h.meta),
      u = $(e),
      {
          report: m
      } = Ys(),
      [b, g] = ie(async () => {
          const h = sr();
          let f;
          if (c) {
              try {
                  if (h && !he()) {
                      const y = Wt(h);
                      f = await (await Gt(y.scrapeEmbed(r, s), ["completed", "noOutput"])).promise()
                  } else f = await sn().runEmbedScraper({
                      id: r,
                      url: s
                  })
              } catch (y) {
                  console.error(`Failed to scrape ${r}`, y);
                  const v = y instanceof Ce ? "notfound" : "failed";
                  throw m([Se(c, t, r, v, y)]), y
              }
              m([Se(c, t, null, "success", null)]), he() && await nn(f.stream[0]), o(t), a(null), i(rn({
                  stream: f.stream[0]
              }), Zt(f.stream[0].captions), l), u.close()
          }
      }, [r, t, c, u, m, a]);
  return {
      run: g,
      loading: b.loading,
      errored: !!b.error
  }
}

function Lu(e, t) {
  const s = x(b => b.meta),
      r = x(b => b.setSource),
      i = x(b => b.setCaption),
      a = x(b => b.setSourceId),
      o = x(b => b.progress.time),
      l = $(t),
      {
          report: c
      } = Ys(),
      [u, m] = ie(async () => {
          if (!e || !s) return null;
          const b = Ar(s),
              g = sr();
          let h;
          try {
              if (g && !he()) {
                  const f = Wt(g);
                  h = await (await Gt(f.scrapeSource(e, b), ["completed", "noOutput"])).promise()
              } else h = await sn().runSourceScraper({
                  id: e,
                  media: b
              })
          } catch (f) {
              console.error(`Failed to scrape ${e}`, f);
              const p = f instanceof Ce ? "notfound" : "failed";
              throw c([Se(s, e, null, p, f)]), f
          }
          if (c([Se(s, e, null, "success", null)]), h.stream) return he() && await nn(h.stream[0]), i(null), r(rn({
              stream: h.stream[0]
          }), Zt(h.stream[0].captions), o), a(e), l.close(), null;
          if (h.embeds.length === 1) {
              let f;
              if (!s) return;
              try {
                  if (g && !he()) {
                      const y = Wt(g);
                      f = await (await Gt(y.scrapeEmbed(h.embeds[0].embedId, h.embeds[0].url), ["completed", "noOutput"])).promise()
                  } else f = await sn().runEmbedScraper({
                      id: h.embeds[0].embedId,
                      url: h.embeds[0].url
                  })
              } catch (y) {
                  console.error(`Failed to scrape ${h.embeds[0].embedId}`, y);
                  const v = y instanceof Ce ? "notfound" : "failed";
                  throw c([Se(s, e, h.embeds[0].embedId, v, y)]), y
              }
              c([Se(s, e, h.embeds[0].embedId, "success", null)]), a(e), i(null), he() && await nn(f.stream[0]), r(rn({
                  stream: f.stream[0]
              }), Zt(f.stream[0].captions), o), l.close()
          }
          return h.embeds
      }, [e, s, l, i]);
  return {
      run: m,
      watching: (u.value ?? null) === null,
      loading: u.loading,
      items: u.value,
      notfound: u.error instanceof Ce,
      errored: !!u.error
  }
}

function Tu(e) {
  return n.jsx("div", {
      className: "h-full grid grid-rows-[1fr]",
      children: n.jsx("div", {
          className: "px-6 h-full flex flex-col justify-start overflow-y-auto overflow-x-hidden",
          children: e.children
      })
  })
}

function Ru(e) {
  return n.jsx("div", {
      className: "[&>*]:px-6 h-full grid grid-rows-[auto,1fr] [&>*:nth-child(2)]:overflow-y-auto [&>*:nth-child(2)]:overflow-x-hidden",
      children: e.children
  })
}
const Pu = Object.freeze(Object.defineProperty({
  __proto__: null,
  Card: Tu,
  CardWithScrollable: Ru
}, Symbol.toStringTag, {
  value: "Module"
}));

function Gr(e) {
  return n.jsx("div", {
      children: n.jsxs("h3", {
          className: "font-bold text-video-context-type-main pb-3 pt-5 border-b border-video-context-border flex justify-between items-center",
          children: [n.jsx("div", {
              className: "flex items-center space-x-3",
              children: e.children
          }), n.jsx("div", {
              children: e.rightSide
          })]
      })
  })
}

function Au(e) {
  return n.jsx("button", {
      type: "button",
      onClick: e.onClick,
      children: n.jsx(I, {
          className: "text-xl",
          icon: e.icon
      })
  })
}

function _u() {
  return n.jsx("hr", {
      className: "!my-4 border-0 w-full h-px bg-video-context-border"
  })
}

function Ou(e) {
  return n.jsx("p", {
      className: "text-sm mt-8 font-medium",
      children: e.children
  })
}

function Mu(e) {
  return n.jsx("a", {
      type: "button",
      className: "text-video-context-type-accent cursor-pointer",
      onClick: e.onClick,
      children: e.children
  })
}

function Du(e) {
  return n.jsx("p", {
      className: "font-medium",
      children: e.children
  })
}

function Bu(e) {
  return n.jsx("p", {
      className: e.marginClass ?? "my-3",
      children: e.children
  })
}

function Fu(e) {
  return n.jsx("span", {
      className: "text-white",
      children: e.children
  })
}

function Uu(e) {
  return n.jsx("div", {
      className: "w-full h-full flex justify-center items-center text-center",
      children: n.jsxs("div", {
          className: "flex items-center gap-4 flex-col",
          children: [e.noIcon ? null : n.jsx("div", {
              className: "w-16 h-10 border border-video-context-border rounded-lg flex justify-center items-center",
              children: n.jsx(I, {
                  className: "text-xl",
                  icon: j.EYE_SLASH
              })
          }), e.title ? n.jsx("h2", {
              className: "text-white text-lg font-bold",
              children: e.title
          }) : null, n.jsx("div", {
              children: e.children
          })]
      })
  })
}
const $u = Object.freeze(Object.defineProperty({
  __proto__: null,
  Anchor: Mu,
  Divider: _u,
  FieldTitle: Du,
  Highlight: Fu,
  IconButton: Au,
  Paragraph: Bu,
  SmallText: Ou,
  TextDisplay: Uu,
  Title: Gr
}, Symbol.toStringTag, {
  value: "Module"
}));

function Kr(e) {
  return n.jsxs("span", {
      className: "text-white flex items-center font-medium",
      children: [e.children, n.jsx(I, {
          className: "text-xl ml-1 -mr-1.5",
          icon: j.CHEVRON_RIGHT
      })]
  })
}

function Tn(e) {
  return n.jsx("span", {
      className: S(["font-medium text-left", e.textClass || "text-video-context-type-main"]),
      children: e.children
  })
}

function Vu(e) {
  return n.jsxs(Gr, {
      rightSide: e.rightSide,
      children: [n.jsx("button", {
          type: "button",
          className: "-ml-2 p-2 rounded tabbable hover:bg-video-context-light hover:bg-opacity-10",
          onClick: e.onClick,
          children: n.jsx(I, {
              className: "text-xl",
              icon: j.ARROW_LEFT
          })
      }), n.jsx("span", {
          className: "line-clamp-1 break-all",
          children: e.children
      })]
  })
}

function Rn(e) {
  const t = S("flex py-2 px-3 rounded-lg w-full -ml-3", {
          "cursor-default": !e.clickable,
          "hover:bg-video-context-hoverColor hover:bg-opacity-50 cursor-pointer tabbable": e.clickable,
          "bg-video-context-hoverColor bg-opacity-50": e.active
      }),
      s = {
          width: "calc(100% + 1.5rem)"
      },
      r = n.jsxs("div", {
          className: S("flex items-center flex-1", e.className),
          children: [n.jsx("div", {
              className: "flex-1 text-left",
              children: e.children
          }), n.jsx("div", {
              className: "flex",
              children: e.rightSide
          })]
      });
  return e.onClick ? n.jsx("button", {
      type: "button",
      className: t,
      style: s,
      onClick: e.onClick,
      "data-active-link": e.active ? !0 : void 0,
      children: r
  }) : n.jsx("div", {
      className: t,
      style: s,
      "data-active-link": e.active ? !0 : void 0,
      children: r
  })
}

function Hu(e) {
  const t = n.jsx(Kr, {
      children: e.rightText
  });
  return n.jsx(Rn, {
      onClick: e.onClick,
      active: e.active,
      clickable: !0,
      rightSide: t,
      children: n.jsx(Tn, {
          children: e.children
      })
  })
}

function qe(e) {
  let t;
  return e.selected && (t = n.jsx(I, {
      icon: j.CIRCLE_CHECK,
      className: "text-xl text-video-context-type-accent"
  })), e.error && (t = n.jsx("span", {
      className: "flex items-center text-video-context-error",
      children: n.jsx(I, {
          className: "ml-2",
          icon: j.WARNING
      })
  })), e.loading && (t = n.jsx(kt, {
      className: "text-lg"
  })), n.jsx(Rn, {
      onClick: e.onClick,
      clickable: !e.disabled,
      rightSide: t,
      children: n.jsx(Tn, {
          textClass: S({
              "text-white": e.selected,
              "text-video-context-type-main text-opacity-40": e.disabled
          }),
          children: e.children
      })
  })
}
const Wu = Object.freeze(Object.defineProperty({
  __proto__: null,
  BackLink: Vu,
  Chevron: Kr,
  ChevronLink: Hu,
  Link: Rn,
  LinkTitle: Tn,
  SelectableLink: qe
}, Symbol.toStringTag, {
  value: "Module"
}));

function Gu(e) {
  return n.jsx("h3", {
      className: S("uppercase font-bold text-video-context-type-secondary text-xs pt-8 pl-1 pb-2.5 border-b border-video-context-border", e.className),
      children: e.children
  })
}

function Ku(e) {
  return n.jsx("div", {
      className: S("pt-4 space-y-1", e.className),
      children: e.children
  })
}

function zu(e) {
  const t = d.useRef(null);
  return d.useEffect(() => {
      var o, l, c;
      const s = (o = t.current) == null ? void 0 : o.querySelector("[data-active-link]"),
          r = (l = t.current) == null ? void 0 : l.getBoundingClientRect(),
          i = s == null ? void 0 : s.getBoundingClientRect();
      if (!i || !r) return;
      const a = i.top - r.top;
      (c = t.current) == null || c.scrollTo(0, a - r.height / 2 + i.height / 2)
  }, [e.loaded]), n.jsx("div", {
      ref: t,
      className: S("pt-4 space-y-1", e.className),
      children: e.children
  })
}
const Qu = Object.freeze(Object.defineProperty({
      __proto__: null,
      ScrollToActiveSection: zu,
      Section: Ku,
      SectionTitle: Gu
  }, Symbol.toStringTag, {
      value: "Module"
  })),
  N = {
      ...Pu,
      ...Wu,
      ...Qu,
      ...$u
  };

function qu(e) {
  const {
      t
  } = C(), s = t("player.menus.sources.unknownOption"), r = d.useMemo(() => {
      if (!e.embedId) return s;
      const l = jt().find(c => c.id === e.embedId);
      return (l == null ? void 0 : l.name) ?? s
  }, [e.embedId, s]), {
      run: i,
      errored: a,
      loading: o
  } = Iu(e.routerId, e.sourceId, e.url, e.embedId);
  return n.jsx(qe, {
      loading: o,
      error: a,
      onClick: i,
      children: n.jsx("span", {
          className: "flex flex-col",
          children: n.jsx("span", {
              children: r
          })
      })
  })
}

function Yu(e) {
  let {
      sourceId: t,
      id: s
  } = e;
  const {
      t: r
  } = C(), i = $(s), {
      run: a,
      watching: o,
      notfound: l,
      loading: c,
      items: u,
      errored: m
  } = Lu(t, s), b = d.useMemo(() => {
      if (!t) return "...";
      const f = jt().find(y => y.id === t);
      return (f == null ? void 0 : f.name) ?? "..."
  }, [t]), g = d.useRef(null);
  d.useEffect(() => {
      g.current !== t && (g.current = t, t && a())
  }, [a, t]);
  let h = null;
  return c ? h = n.jsx(N.TextDisplay, {
      noIcon: !0,
      children: n.jsx(Re, {})
  }) : l ? h = n.jsx(N.TextDisplay, {
      title: r("player.menus.sources.noStream.title") ?? void 0,
      children: r("player.menus.sources.noStream.text")
  }) : (u == null ? void 0 : u.length) === 0 ? h = n.jsx(N.TextDisplay, {
      title: r("player.menus.sources.noEmbeds.title") ?? void 0,
      children: r("player.menus.sources.noEmbeds.text")
  }) : m ? h = n.jsx(N.TextDisplay, {
      title: r("player.menus.sources.failed.title") ?? void 0,
      children: r("player.menus.sources.failed.text")
  }) : o ? h = null : u && t && (h = u.map(f => n.jsx(qu, {
      embedId: f.embedId,
      url: f.url,
      routerId: s,
      sourceId: t
  }, `${f.embedId}-${f.url}`))), n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => i.navigate("/source"),
          children: b
      }), n.jsx(N.Section, {
          children: h
      })]
  })
}

function Xu(e) {
  let {
      id: t,
      onChoose: s
  } = e;
  const {
      t: r
  } = C(), i = $(t), a = x(c => {
      var u;
      return (u = c.meta) == null ? void 0 : u.type
  }), o = x(c => c.sourceId), l = d.useMemo(() => a ? jt().filter(c => c.type === "source").filter(c => {
      var u;
      return (u = c.mediaTypes) == null ? void 0 : u.includes(a)
  }) : [], [a]);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => i.navigate("/"),
          children: r("player.menus.sources.title")
      }), n.jsx(N.Section, {
          className: "pb-4",
          children: l.map(c => n.jsx(qe, {
              onClick: () => {
                  s == null || s(c.id), i.navigate("/source/embeds")
              },
              selected: c.id === o,
              children: c.name
          }, c.id))
      })]
  })
}
const Ju = function(t) {
      return n.jsx("button", {
          type: "button",
          onClick: t.onClick,
          className: S("w-11 h-6 p-1 rounded-full grid transition-colors duration-100 group/toggle tabbable", t.enabled ? "bg-buttons-toggle" : "bg-buttons-toggleDisabled"),
          children: n.jsx("div", {
              className: "relative w-full h-full",
              children: n.jsx("div", {
                  className: S("scale-90 group-hover/toggle:scale-100 h-full aspect-square rounded-full bg-white absolute transition-all duration-100", t.enabled ? "left-full transform -translate-x-full" : "left-0")
              })
          })
      })
  },
  Pn = Ju,
  Zu = function(t) {
      return n.jsx("button", {
          type: "button",
          className: S("tabbable p-1.5 bg-video-context-buttonFocus rounded transition-colors duration-100", t.active ? "bg-opacity-100" : "bg-opacity-0 cursor-pointer"),
          onClick: t.onClick,
          children: n.jsx("div", {
              className: "w-6 h-6 rounded-full flex justify-center items-center",
              style: {
                  backgroundColor: t.color
              },
              children: t.active ? n.jsx(I, {
                  className: "text-sm text-black",
                  icon: j.CHECKMARK
              }) : null
          })
      })
  },
  ed = Zu,
  td = function(t) {
      const s = d.useRef(null),
          r = d.useRef(null),
          i = (t.value - t.min) / (t.max - t.min),
          a = d.useCallback(p => {
              var T;
              const v = t.max - t.min,
                  w = Math.min(Math.max(p, 0), 1);
              (T = t.onChange) == null || T.call(t, t.min + v * w)
          }, [t]),
          {
              dragging: o,
              dragPercentage: l,
              dragMouseDown: c
          } = Ln(r, a, !0),
          [u, m] = d.useState(!1),
          [b, g] = d.useState("");
      d.useEffect(() => {
          function p(v) {
              var w;
              v.key === "Enter" && u && ((w = s.current) == null || w.blur())
          }
          return window.addEventListener("keydown", p), () => {
              window.removeEventListener("keydown", p)
          }
      }, [u]);
      const h = `tabbable py-1 bg-video-context-inputBg rounded text-white cursor-text ${t.controlButtons?"text-center px-4 w-24":"px-3 text-left w-20"}`,
          f = "tabbable hover:text-white transition-colors duration-100 w-full h-full flex justify-center items-center hover:bg-video-context-buttonOverInputHover rounded",
          y = t.textTransformer ?? (p => p);
      return n.jsxs("div", {
          children: [n.jsx(N.FieldTitle, {
              children: t.label
          }), n.jsxs("div", {
              className: "grid items-center grid-cols-[1fr,auto] gap-4",
              children: [n.jsx("div", {
                  ref: r,
                  children: n.jsx("div", {
                      className: "group/progress w-full h-8 flex items-center cursor-pointer",
                      onMouseDown: c,
                      onTouchStart: c,
                      children: n.jsx("div", {
                          dir: "ltr",
                          className: ["relative w-full h-1 bg-video-context-slider bg-opacity-25 rounded-full transition-[height] duration-100 group-hover/progress:h-1.5", o ? "!h-1.5" : ""].join(" "),
                          children: n.jsx("div", {
                              className: "absolute top-0 left-0 h-full rounded-full bg-video-context-sliderFilled flex justify-end items-center",
                              style: {
                                  width: `${Math.max(0,Math.min(1,o?l/100:i))*100}%`
                              },
                              children: n.jsx("div", {
                                  className: ["w-[1rem] min-w-[1rem] h-[1rem] border-[4px] border-video-context-sliderFilled rounded-full transform translate-x-1/2 bg-white transition-[transform] duration-100"].join(" ")
                              })
                          })
                      })
                  })
              }), n.jsx("div", {
                  children: u ? n.jsx("input", {
                      className: h,
                      value: b,
                      autoFocus: !0,
                      onFocus: p => {
                          p.target.select()
                      },
                      onBlur: p => {
                          var w;
                          m(!1);
                          const v = Number(p.target.value);
                          Number.isNaN(v) || (w = t.onChange) == null || w.call(t, (t.decimalsAllowed ?? 0) === 0 ? Math.round(v) : v)
                      },
                      ref: s,
                      onChange: p => g(p.target.value)
                  }) : n.jsxs("div", {
                      className: "relative",
                      onClick: p => {
                          p.target.closest(".actions") || (g(t.value.toFixed(t.decimalsAllowed ?? 0)), m(!0))
                      },
                      children: [n.jsx("button", {
                          className: S(h, t.controlButtons ? "relative" : void 0),
                          type: "button",
                          tabIndex: 0,
                          children: y(t.value.toFixed(t.decimalsAllowed ?? 0))
                      }), t.controlButtons ? n.jsxs(n.Fragment, {
                          children: [n.jsx("div", {
                              className: "actions w-6 h-full absolute left-0 top-0 grid grid-cols-1 items-center justify-center",
                              children: n.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                      var p;
                                      return (p = t.onChange) == null ? void 0 : p.call(t, t.value - 1 / 10 ** (t.decimalsAllowed ?? 0))
                                  },
                                  className: f,
                                  children: n.jsx(I, {
                                      icon: j.CHEVRON_LEFT
                                  })
                              })
                          }), n.jsx("div", {
                              className: "actions w-6 h-full absolute right-0 top-0 grid grid-cols-1 items-center justify-center",
                              children: n.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                      var p;
                                      return (p = t.onChange) == null ? void 0 : p.call(t, t.value + 1 / 10 ** (t.decimalsAllowed ?? 0))
                                  },
                                  className: f,
                                  children: n.jsx(I, {
                                      icon: j.CHEVRON_RIGHT
                                  })
                              })
                          })]
                      }) : null]
                  })
              })]
          })]
      })
  },
  $t = td,
  nd = ["#ffffff", "#b0b0b0", "#80b1fa", "#e2e535"];

function sd(e) {
  let {
      id: t
  } = e;
  const {
      t: s
  } = C(), r = $(t), i = B(m => m.styling), a = B(m => m.overrideCasing), o = B(m => m.delay), l = B(m => m.setOverrideCasing), c = B(m => m.setDelay), u = B(m => m.updateStyling);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => r.navigate("/captions"),
          children: s("player.menus.subtitles.settings.backlink")
      }), n.jsxs(N.Section, {
          className: "space-y-6",
          children: [n.jsx($t, {
              label: s("player.menus.subtitles.settings.delay"),
              max: 10,
              min: -10,
              onChange: m => c(m),
              value: o,
              textTransformer: m => `${m}s`,
              decimalsAllowed: 1,
              controlButtons: !0
          }), n.jsxs("div", {
              className: "flex justify-between items-center",
              children: [n.jsx(N.FieldTitle, {
                  children: s("player.menus.subtitles.settings.fixCapitals")
              }), n.jsx("div", {
                  className: "flex justify-center items-center",
                  children: n.jsx(Pn, {
                      enabled: a,
                      onClick: () => l(!a)
                  })
              })]
          }), n.jsx(N.Divider, {}), n.jsx($t, {
              label: s("settings.subtitles.backgroundLabel"),
              max: 100,
              min: 0,
              onChange: m => u({
                  backgroundOpacity: m / 100
              }),
              value: i.backgroundOpacity * 100,
              textTransformer: m => `${m}%`
          }), n.jsx($t, {
              label: s("settings.subtitles.textSizeLabel"),
              max: 200,
              min: 1,
              textTransformer: m => `${m}%`,
              onChange: m => u({
                  size: m / 100
              }),
              value: i.size * 100
          }), n.jsxs("div", {
              className: "flex justify-between items-center",
              children: [n.jsx(N.FieldTitle, {
                  children: s("settings.subtitles.colorLabel")
              }), n.jsx("div", {
                  className: "flex justify-center items-center",
                  children: nd.map(m => n.jsx(ed, {
                      onClick: () => u({
                          color: m
                      }),
                      color: m,
                      active: i.color === m
                  }, m))
              })]
          })]
      })]
  })
}

function rd(e) {
  return n.jsxs("div", {
      className: "w-full relative",
      children: [n.jsx(I, {
          className: "pointer-events-none absolute top-1/2 left-3 transform -translate-y-1/2 text-video-context-inputPlaceholder",
          icon: j.SEARCH
      }), n.jsx("input", {
          placeholder: "Search",
          className: "w-full py-2 px-3 pl-[calc(0.75rem+24px)] tabbable bg-video-context-inputBg rounded placeholder:text-video-context-inputPlaceholder",
          value: e.value,
          onInput: t => e.onInput(t.currentTarget.value)
      })]
  })
}

function an(e) {
  return n.jsx(qe, {
      selected: e.selected,
      loading: e.loading,
      error: e.error,
      onClick: e.onClick,
      children: n.jsxs("span", {
          "data-active-link": e.selected ? !0 : void 0,
          className: "flex items-center",
          children: [n.jsx("span", {
              "data-code": e.countryCode,
              className: "mr-3 inline-flex",
              children: n.jsx(Da, {
                  langCode: e.countryCode
              })
          }), n.jsx("span", {
              children: e.children
          })]
      })
  })
}

function id() {
  const {
      t: e
  } = C(), t = x(a => {
      var o;
      return (o = a.caption.selected) == null ? void 0 : o.language
  }), s = x(a => a.setCaption), r = B(a => a.setCustomSubs), i = d.useRef(null);
  return n.jsxs(an, {
      selected: t === "custom",
      onClick: () => {
          var a;
          return (a = i.current) == null ? void 0 : a.click()
      },
      children: [e("player.menus.subtitles.customChoice"), n.jsx("input", {
          className: "hidden",
          ref: i,
          accept: Wc.join(","),
          type: "file",
          onChange: a => {
              if (!a.target.files) return;
              const o = new FileReader;
              o.addEventListener("load", l => {
                  if (!l.target || typeof l.target.result != "string") return;
                  const c = hn(l.target.result, "srt");
                  s({
                      language: "custom",
                      srtData: c,
                      id: "custom-caption"
                  }), r()
              }), o.readAsText(a.target.files[0], "utf-8")
          }
      })]
  })
}

function ad(e, t) {
  const {
      t: s
  } = C(), r = s("player.menus.subtitles.unknownLanguage");
  return d.useMemo(() => {
      const i = e.map(l => ({
              ...l,
              languageName: Ws(l.language) ?? r
          })),
          a = Ba(i.map(l => l.language));
      let o = i.sort((l, c) => a.indexOf(l.language) - a.indexOf(c.language));
      return t.trim().length > 0 && (o = new Va(i, {
          includeScore: !0,
          keys: ["languageName"]
      }).search(t).map(c => c.item)), o
  }, [e, t, r])
}

function od(e) {
  let {
      id: t
  } = e;
  const {
      t: s
  } = C(), r = $(t), i = x(p => {
      var v;
      return (v = p.caption.selected) == null ? void 0 : v.id
  }), [a, o] = d.useState(null), {
      selectCaptionById: l,
      disable: c
  } = Rt(), u = x(p => p.captionList), [m, b] = d.useState(""), g = ad(u, m), [h, f] = ie(async p => (o(p), l(p)), [l, o]), y = g.map(p => n.jsx(an, {
      countryCode: p.language,
      selected: p.id === i,
      loading: p.id === a && h.loading,
      error: p.id === a && h.error ? h.error.toString() : void 0,
      onClick: () => f(p.id),
      children: p.languageName
  }, p.id));
  return n.jsxs(n.Fragment, {
      children: [n.jsxs("div", {
          children: [n.jsx(N.BackLink, {
              onClick: () => r.navigate("/"),
              rightSide: n.jsx("button", {
                  type: "button",
                  onClick: () => r.navigate("/captions/settings"),
                  className: "py-1 -my-1 px-3 -mx-3 rounded tabbable",
                  children: s("player.menus.subtitles.customizeLabel")
              }),
              children: s("player.menus.subtitles.title")
          }), n.jsx("div", {
              className: "mt-3",
              children: n.jsx(rd, {
                  value: m,
                  onInput: b
              })
          })]
      }), n.jsxs(N.ScrollToActiveSection, {
          className: "!pt-1 mt-2 pb-3",
          children: [n.jsx(an, {
              onClick: () => c(),
              selected: !i,
              children: s("player.menus.subtitles.offChoice")
          }), n.jsx(id, {}), y]
      })]
  })
}

function ld() {
  const e = x(r => r.source),
      t = x(r => r.currentQuality);
  return d.useMemo(() => {
      var r;
      return (e == null ? void 0 : e.type) === "file" && t ? ((r = e.qualities[t]) == null ? void 0 : r.url) ?? null : (e == null ? void 0 : e.type) === "hls" ? e.url : null
  }, [e, t])
}

function Le(e) {
  return n.jsx(ue, {
      i18nKey: e.k,
      components: {
          bold: n.jsx(N.Highlight, {}),
          br: n.jsx("br", {}),
          ios_share: n.jsx(I, {
              icon: j.IOS_SHARE,
              className: "inline-block text-xl -mb-1"
          }),
          ios_files: n.jsx(I, {
              icon: j.IOS_FILES,
              className: "inline-block text-xl -mb-1"
          })
      }
  })
}

function cd(e) {
  let {
      id: t
  } = e;
  const s = $(t),
      {
          t: r
      } = C(),
      i = ld(),
      [, a] = $s(),
      o = x(u => {
          var m;
          return (m = u.source) == null ? void 0 : m.type
      }),
      l = x(u => {
          var m;
          return (m = u.caption) == null ? void 0 : m.selected
      }),
      c = d.useCallback(() => {
          const u = l ? Vc(l == null ? void 0 : l.srtData) : null;
          u && window.open(u)
      }, [l]);
  return i ? n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => s.navigate("/"),
          children: r("player.menus.downloads.title")
      }), n.jsx(N.Section, {
          children: n.jsx("div", {
              children: o === "hls" ? n.jsxs(n.Fragment, {
                  children: [n.jsx(N.Paragraph, {
                      marginClass: "mb-6",
                      children: n.jsx(Le, {
                          k: "player.menus.downloads.hlsDisclaimer"
                      })
                  }), n.jsx(R, {
                      className: "w-full",
                      theme: "purple",
                      href: i,
                      onClick: u => {
                          u.preventDefault(), a(i)
                      },
                      children: r("player.menus.downloads.copyHlsPlaylist")
                  }), n.jsx(R, {
                      className: "w-full mt-2",
                      onClick: c,
                      disabled: !l,
                      theme: "secondary",
                      children: r("player.menus.downloads.downloadSubtitle")
                  })]
              }) : n.jsxs(n.Fragment, {
                  children: [n.jsx(N.ChevronLink, {
                      onClick: () => s.navigate("/download/pc"),
                      children: r("player.menus.downloads.onPc.title")
                  }), n.jsx(N.ChevronLink, {
                      onClick: () => s.navigate("/download/ios"),
                      children: r("player.menus.downloads.onIos.title")
                  }), n.jsx(N.ChevronLink, {
                      onClick: () => s.navigate("/download/android"),
                      children: r("player.menus.downloads.onAndroid.title")
                  }), n.jsx(N.Divider, {}), n.jsx(N.Paragraph, {
                      marginClass: "my-6",
                      children: n.jsx(Le, {
                          k: "player.menus.downloads.disclaimer"
                      })
                  }), n.jsx(R, {
                      className: "w-full",
                      href: i,
                      theme: "purple",
                      children: r("player.menus.downloads.downloadVideo")
                  }), n.jsx(R, {
                      className: "w-full mt-2",
                      onClick: c,
                      disabled: !l,
                      theme: "secondary",
                      download: "subtitles.srt",
                      children: r("player.menus.downloads.downloadSubtitle")
                  })]
              })
          })
      })]
  }) : null
}

function ud(e) {
  let {
      id: t
  } = e;
  const s = $(t),
      {
          t: r
      } = C();
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => s.navigate("/download"),
          children: r("player.menus.downloads.onAndroid.shortTitle")
      }), n.jsx(N.Section, {
          children: n.jsx(N.Paragraph, {
              children: n.jsx(Le, {
                  k: "player.menus.downloads.onAndroid.1"
              })
          })
      })]
  })
}

function dd(e) {
  let {
      id: t
  } = e;
  const s = $(t),
      {
          t: r
      } = C();
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => s.navigate("/download"),
          children: r("player.menus.downloads.onPc.shortTitle")
      }), n.jsx(N.Section, {
          children: n.jsx(N.Paragraph, {
              children: n.jsx(Le, {
                  k: "player.menus.downloads.onPc.1"
              })
          })
      })]
  })
}

function md(e) {
  let {
      id: t
  } = e;
  const s = $(t);
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => s.navigate("/download"),
          children: n.jsx(Le, {
              k: "player.menus.downloads.onIos.shortTitle"
          })
      }), n.jsx(N.Section, {
          children: n.jsx(N.Paragraph, {
              children: n.jsx(Le, {
                  k: "player.menus.downloads.onIos.1"
              })
          })
      })]
  })
}

function hd(e) {
  let {
      id: t
  } = e;
  return n.jsxs(n.Fragment, {
      children: [n.jsx(X, {
          id: t,
          path: "/download",
          width: 343,
          height: 490,
          children: n.jsx(N.CardWithScrollable, {
              children: n.jsx(cd, {
                  id: t
              })
          })
      }), n.jsx(X, {
          id: t,
          path: "/download/ios",
          width: 343,
          height: 440,
          children: n.jsx(N.CardWithScrollable, {
              children: n.jsx(md, {
                  id: t
              })
          })
      }), n.jsx(X, {
          id: t,
          path: "/download/android",
          width: 343,
          height: 440,
          children: n.jsx(N.CardWithScrollable, {
              children: n.jsx(ud, {
                  id: t
              })
          })
      }), n.jsx(X, {
          id: t,
          path: "/download/pc",
          width: 343,
          height: 440,
          children: n.jsx(N.CardWithScrollable, {
              children: n.jsx(dd, {
                  id: t
              })
          })
      })]
  })
}
const fd = function(t) {
      return n.jsx("div", {
          className: "flex items-center bg-video-context-buttons-list p-1 rounded-lg",
          children: t.options.map(s => n.jsxs("button", {
              type: "button",
              className: S("w-full px-2 py-1 rounded-md tabbable", t.selected === s ? "bg-video-context-buttons-active text-white" : null),
              onClick: () => t.onClick(s),
              children: [s, "x"]
          }, s))
      })
  },
  gd = fd;

function xd(e) {
  let {
      id: t
  } = e;
  const {
      t: s
  } = C(), r = $(t), i = x(c => c.mediaPlaying.playbackRate), a = x(c => c.display), o = d.useCallback(c => {
      a == null || a.setPlaybackRate(c)
  }, [a]), l = [.25, .5, 1, 1.5, 2];
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => r.navigate("/"),
          children: s("player.menus.playback.title")
      }), n.jsx(N.Section, {
          children: n.jsxs("div", {
              className: "space-y-4 mt-3",
              children: [n.jsx(N.FieldTitle, {
                  children: s("player.menus.playback.speedLabel")
              }), n.jsx(gd, {
                  options: l,
                  selected: i,
                  onClick: o
              })]
          })
      })]
  })
}
const pd = {
  unknown: !1,
  360: !0,
  480: !0,
  720: !0,
  1080: !0,
  "4k": !1
};

function bd() {
  const e = x(s => {
      var r;
      return (r = s.source) == null ? void 0 : r.type
  });
  return d.useMemo(() => {
      const s = document.createElement("video");
      return !(e !== "hls" || me.isSupported() || !at(s))
  }, [e])
}

function yd(e) {
  let {
      id: t
  } = e;
  const s = $(t),
      r = bd(),
      i = x(f => f.qualities),
      a = x(f => f.currentQuality),
      o = x(f => f.switchQuality),
      l = x(f => f.enableAutomaticQuality),
      c = Ue(f => f.setAutomaticQuality),
      u = Ue(f => f.setLastChosenQuality),
      m = Ue(f => f.quality.automaticQuality),
      b = d.useCallback(f => {
          u(f), c(!1), o(f), s.close()
      }, [s, o, u, c]),
      g = d.useCallback(() => {
          const f = !m;
          c(f), f && l()
      }, [c, m, l]),
      h = Lc.filter(f => !!(pd[f] || i.includes(f)));
  return n.jsxs(n.Fragment, {
      children: [n.jsx(N.BackLink, {
          onClick: () => s.navigate("/"),
          children: Qn("player.menus.quality.title")
      }), n.jsxs(N.Section, {
          className: "flex flex-col pb-4",
          children: [h.map(f => n.jsx(qe, {
              selected: f === a,
              onClick: i.includes(f) ? () => b(f) : void 0,
              disabled: !i.includes(f),
              children: Pr(f)
          }, f)), n.jsx(N.Divider, {}), n.jsx(N.Link, {
              rightSide: n.jsx(Pn, {
                  onClick: g,
                  enabled: m
              }),
              children: Qn("player.menus.quality.automaticLabel")
          }), n.jsx(N.SmallText, {
              children: n.jsx(ue, {
                  i18nKey: r ? "player.menus.quality.iosNoQuality" : "player.menus.quality.hint",
                  children: n.jsx(N.Anchor, {
                      onClick: () => s.navigate("/source"),
                      children: "text"
                  })
              })
          })]
      })]
  })
}

function vd(e) {
  let {
      id: t
  } = e;
  const {
      t: s
  } = C(), r = $(t), i = x(h => h.currentQuality), a = x(h => {
      var f;
      return (f = h.caption.selected) == null ? void 0 : f.language
  }), o = B(h => h.enabled), l = x(h => h.sourceId), c = d.useMemo(() => {
      if (!l) return "...";
      const h = jt().find(f => f.id === l);
      return (h == null ? void 0 : h.name) ?? "..."
  }, [l]), {
      toggleLastUsed: u
  } = Rt(), m = a ? Ws(a) ?? s("player.menus.subtitles.unknownLanguage") : void 0, b = x(h => h.source), g = (b == null ? void 0 : b.type) === "file" || (b == null ? void 0 : b.type) === "hls";
  return n.jsxs(N.Card, {
      children: [n.jsx(N.SectionTitle, {
          children: s("player.menus.settings.videoSection")
      }), n.jsxs(N.Section, {
          children: [n.jsx(N.ChevronLink, {
              onClick: () => r.navigate("/quality"),
              rightText: i ? Pr(i) : "",
              children: s("player.menus.settings.qualityItem")
          }), n.jsx(N.ChevronLink, {
              onClick: () => r.navigate("/source"),
              rightText: c,
              children: s("player.menus.settings.sourceItem")
          }), n.jsx(N.Link, {
              clickable: !0,
              onClick: () => r.navigate(g ? "/download" : "/download/unable"),
              rightSide: n.jsx(I, {
                  className: "text-xl",
                  icon: j.DOWNLOAD
              }),
              className: g ? "opacity-100" : "opacity-50",
              children: s("player.menus.settings.downloadItem")
          })]
      }), n.jsx(N.SectionTitle, {
          children: s("player.menus.settings.experienceSection")
      }), n.jsxs(N.Section, {
          children: [n.jsx(N.Link, {
              rightSide: n.jsx(Pn, {
                  enabled: o,
                  onClick: () => u().catch(() => {})
              }),
              children: s("player.menus.settings.enableSubtitles")
          }), n.jsx(N.ChevronLink, {
              onClick: () => r.navigate("/captions"),
              rightText: m ?? void 0,
              children: s("player.menus.settings.subtitleItem")
          }), n.jsx(N.ChevronLink, {
              onClick: () => r.navigate("/playback"),
              children: s("player.menus.settings.playbackItem")
          })]
      })]
  })
}

function jd(e) {
  let {
      id: t
  } = e;
  const [s, r] = d.useState(null), i = $(t);
  return d.useEffect(() => {
      i.isRouterActive || r(null), i.route === "/" && r(null)
  }, [i.isRouterActive, i.route]), n.jsx(yr, {
      id: t,
      children: n.jsxs(Wr, {
          id: t,
          children: [n.jsx(X, {
              id: t,
              path: "/",
              width: 343,
              height: 431,
              children: n.jsx(vd, {
                  id: t
              })
          }), n.jsx(X, {
              id: t,
              path: "/quality",
              width: 343,
              height: 400,
              children: n.jsx(N.Card, {
                  children: n.jsx(yd, {
                      id: t
                  })
              })
          }), n.jsx(X, {
              id: t,
              path: "/captions",
              width: 343,
              height: 431,
              children: n.jsx(N.CardWithScrollable, {
                  children: n.jsx(od, {
                      id: t
                  })
              })
          }), n.jsx(X, {
              id: t,
              path: "/captions/settings",
              width: 343,
              height: 450,
              children: n.jsx(N.Card, {
                  children: n.jsx(sd, {
                      id: t
                  })
              })
          }), n.jsx(X, {
              id: t,
              path: "/source",
              width: 343,
              height: 431,
              children: n.jsx(N.CardWithScrollable, {
                  children: n.jsx(Xu, {
                      id: t,
                      onChoose: r
                  })
              })
          }), n.jsx(X, {
              id: t,
              path: "/source/embeds",
              width: 343,
              height: 431,
              children: n.jsx(N.CardWithScrollable, {
                  children: n.jsx(Yu, {
                      id: t,
                      sourceId: s
                  })
              })
          }), n.jsx(X, {
              id: t,
              path: "/playback",
              width: 343,
              height: 215,
              children: n.jsx(N.Card, {
                  children: n.jsx(xd, {
                      id: t
                  })
              })
          }), n.jsx(hd, {
              id: t
          })]
      })
  })
}

function wd() {
  return n.jsx(jd, {
      id: "settings"
  })
}

function vs() {
  const e = $("settings"),
      t = x(s => s.setHasOpenOverlay);
  return d.useEffect(() => {
      t(e.isRouterActive)
  }, [t, e.isRouterActive]), n.jsx(Hr, {
      id: e.id,
      children: n.jsx(ae, {
          onClick: () => e.open(),
          icon: j.GEAR
      })
  })
}
const kd = function(t) {
      const s = t.radius ?? 40;
      return n.jsxs("svg", {
          className: `${t.className??""} -rotate-90`,
          viewBox: "0 0 100 100",
          children: [n.jsx("circle", {
              className: `fill-transparent stroke-type-text stroke-[15] opacity-25 ${t.backingRingClassname??""}`,
              r: s,
              cx: "50",
              cy: "50"
          }), n.jsx("circle", {
              className: "fill-transparent stroke-current stroke-[15] transition-[stroke-dashoffset] duration-150",
              r: s,
              cx: "50",
              cy: "50",
              style: {
                  strokeDasharray: `${2*Math.PI*s} ${2*Math.PI*s}`,
                  strokeDashoffset: `${2*Math.PI*s-t.percentage/100*(2*Math.PI*s)}`
              }
          })]
      })
  },
  Nd = kd;

function zr() {
  const {
      meta: e,
      setMeta: t
  } = Mr(), s = d.useMemo(() => e ? Ar(e) : null, [e]), r = d.useCallback(a => {
      t(a, P.SCRAPING)
  }, [t]), i = d.useCallback((a, o) => {
      let l;
      if (a.meta.type === A.SERIES) {
          const c = a.meta.seasonData.episodes.find(u => u.id === o);
          if (!c) return null;
          l = {
              type: "show",
              releaseYear: +(a.meta.year ?? 0),
              title: a.meta.title,
              poster: a.meta.poster,
              tmdbId: a.tmdbId ?? "",
              imdbId: a.imdbId,
              episodes: a.meta.seasonData.episodes.map(u => ({
                  number: u.number,
                  title: u.title,
                  tmdbId: u.id
              })),
              episode: {
                  number: c.number,
                  title: c.title,
                  tmdbId: c.id
              },
              season: {
                  number: a.meta.seasonData.number,
                  title: a.meta.seasonData.title,
                  tmdbId: a.meta.seasonData.id
              }
          }
      } else l = {
          type: "movie",
          releaseYear: +(a.meta.year ?? 0),
          title: a.meta.title,
          poster: a.meta.poster,
          tmdbId: a.tmdbId ?? "",
          imdbId: a.imdbId
      };
      return r(l), l
  }, [r]);
  return {
      playerMeta: e,
      setPlayerMeta: i,
      setDirectMeta: r,
      scrapeMedia: s
  }
}
const rt = {};

function it(e) {
  if (rt[e]) return rt[e];
  const t = new Date,
      s = new Date(e);
  return rt[e] = s < t, rt[e]
}

function xt(e) {
  return n.jsx("div", {
      className: "h-full w-full flex justify-center items-center p-8 text-center",
      children: e.children
  })
}

function Qr(e, t) {
  const [s, r] = d.useState(null);
  return [pt(async () => {
      const a = await zt(A.SERIES, e, t);
      return (a == null ? void 0 : a.meta.type) !== A.SERIES ? null : (r(a.meta.seasons), {
          season: a.meta.seasonData,
          fullData: a
      })
  }, [e, t]), s]
}

function Sd(e) {
  let {
      selectedSeason: t,
      setSeason: s
  } = e;
  const {
      t: r
  } = C(), i = x(c => c.meta), [a, o] = Qr((i == null ? void 0 : i.tmdbId) ?? "", t);
  let l = null;
  return o ? l = n.jsx(N.Section, {
      className: "pb-6",
      children: o == null ? void 0 : o.map(c => n.jsx(N.ChevronLink, {
          onClick: () => s(c.id),
          children: c.title
      }, c.id))
  }) : a.error ? l = n.jsx(xt, {
      children: r("player.menus.episodes.loadingError")
  }) : a.loading && (l = n.jsx(xt, {
      children: r("player.menus.episodes.loadingList")
  })), n.jsxs(N.CardWithScrollable, {
      children: [n.jsx(N.Title, {
          children: (i == null ? void 0 : i.title) ?? r("player.menus.episodes.loadingTitle")
      }), l]
  })
}

function Cd(e) {
  var h;
  let {
      id: t,
      selectedSeason: s,
      goBack: r,
      onChange: i
  } = e;
  const {
      t: a
  } = C(), o = $(t), {
      setPlayerMeta: l
  } = zr(), c = x(f => f.meta), [u] = Qr((c == null ? void 0 : c.tmdbId) ?? "", s), m = G(), b = d.useCallback(f => {
      if (u.value) {
          const y = l(u.value.fullData, f);
          y && (i == null || i(y))
      }
      o.close(!0)
  }, [l, u, o, i]);
  if (!(c != null && c.tmdbId)) return null;
  let g = null;
  if (u.error) g = n.jsx(xt, {
      children: a("player.menus.episodes.loadingError")
  });
  else if (u.loading) g = n.jsx(xt, {
      children: a("player.menus.episodes.loadingList")
  });
  else if (u.value) {
      const f = u.value.season.episodes.some(y => !it(y.air_date));
      g = n.jsxs(N.ScrollToActiveSection, {
          className: "pb-6",
          children: [u.value.season.episodes.length === 0 ? n.jsx(N.TextDisplay, {
              title: "No episodes found",
              children: a("player.menus.episodes.emptyState")
          }) : null, u.value.season.episodes.map(y => {
              var w, T, L, k, E, M;
              const p = (T = (w = m.items[c == null ? void 0 : c.tmdbId]) == null ? void 0 : w.episodes) == null ? void 0 : T[y.id];
              let v;
              if (p) {
                  const D = p.progress.watched / p.progress.duration * 100;
                  v = n.jsx(Nd, {
                      className: "h-[18px] w-[18px] text-white",
                      percentage: D > 90 ? 100 : D
                  })
              }
              return n.jsx(N.Link, {
                  onClick: () => b(y.id),
                  active: y.id === ((L = c == null ? void 0 : c.episode) == null ? void 0 : L.tmdbId),
                  clickable: it(y.air_date),
                  rightSide: v,
                  children: n.jsx(N.LinkTitle, {
                      children: n.jsxs("div", {
                          className: S("text-left flex items-center space-x-3 text-video-context-type-main", it(y.air_date) || y.id === ((k = c == null ? void 0 : c.episode) == null ? void 0 : k.tmdbId) ? "" : "text-opacity-25"),
                          children: [n.jsx("span", {
                              className: S("p-0.5 px-2 rounded inline bg-video-context-hoverColor", y.id === ((E = c == null ? void 0 : c.episode) == null ? void 0 : E.tmdbId) ? "text-white bg-opacity-100" : "bg-opacity-50", it(y.air_date) || y.id === ((M = c == null ? void 0 : c.episode) == null ? void 0 : M.tmdbId) ? "" : "!bg-opacity-25"),
                              children: a("player.menus.episodes.episodeBadge", {
                                  episode: y.number
                              })
                          }), n.jsx("span", {
                              className: "line-clamp-1 break-all",
                              children: y.title
                          })]
                      })
                  })
              }, y.id)
          }), f ? n.jsx("p", {
              children: a("player.menus.episodes.unairedEpisodes")
          }) : null]
      })
  }
  return n.jsxs(N.CardWithScrollable, {
      children: [n.jsx(N.BackLink, {
          onClick: r,
          children: ((h = u == null ? void 0 : u.value) == null ? void 0 : h.season.title) || a("player.menus.episodes.loadingTitle")
      }), g]
  })
}

function Ed(e) {
  let {
      id: t,
      onChange: s
  } = e;
  const r = $(t),
      i = x(u => u.meta),
      [a, o] = d.useState(""),
      l = d.useRef(!1);
  d.useEffect(() => {
      var u;
      l.current !== r.isRouterActive && (l.current = r.isRouterActive, o(((u = i == null ? void 0 : i.season) == null ? void 0 : u.tmdbId) ?? ""))
  }, [i, a, o, r.isRouterActive]);
  const c = d.useCallback(u => {
      o(u), r.navigate("/episodes")
  }, [r]);
  return n.jsx(yr, {
      id: t,
      children: n.jsxs(Wr, {
          id: t,
          children: [n.jsx(X, {
              id: t,
              path: "/",
              width: 343,
              height: 431,
              children: n.jsx(Sd, {
                  setSeason: c,
                  selectedSeason: a
              })
          }), n.jsx(X, {
              id: t,
              path: "/episodes",
              width: 343,
              height: 431,
              children: a.length > 0 ? n.jsx(Cd, {
                  selectedSeason: a,
                  id: t,
                  goBack: () => r.navigate("/"),
                  onChange: s
              }) : null
          })]
      })
  })
}

function Id(e) {
  return n.jsx(Ed, {
      onChange: e.onChange,
      id: "episodes"
  })
}

function js() {
  const {
      t: e
  } = C(), t = $("episodes"), s = x(i => i.setHasOpenOverlay), r = x(i => {
      var a;
      return (a = i.meta) == null ? void 0 : a.type
  });
  return d.useEffect(() => {
      s(t.isRouterActive)
  }, [s, t.isRouterActive]), r !== "show" ? null : n.jsx(Hr, {
      id: t.id,
      children: n.jsx(ae, {
          onClick: () => t.open("/episodes"),
          icon: j.EPISODES,
          children: e("player.menus.episodes.button")
      })
  })
}

function ws() {
  const e = x(s => s.interface.canAirplay),
      t = x(s => s.display);
  return e ? n.jsx(ae, {
      onClick: () => t == null ? void 0 : t.startAirplay(),
      icon: j.AIRPLAY
  }) : null
}

function Ld() {
  const e = xr(),
      t = x(s => s.mediaPlaying.volume);
  return n.jsx(Q, {
      animation: "slide-down",
      show: e.showVolume,
      className: "absolute inset-x-0 top-4 flex justify-center pointer-events-none",
      children: n.jsxs(se.Base, {
          className: "hover:flare-enabled pointer-events-auto bg-video-context-background pl-4 pr-6 py-3 group w-72 h-full rounded-lg transition-colors text-video-context-type-main",
          children: [n.jsx(se.Light, {
              enabled: !0,
              flareSize: 200,
              cssColorVar: "--colors-video-context-light",
              backgroundClass: "bg-video-context-background duration-100",
              className: "rounded-lg"
          }), n.jsxs(se.Child, {
              className: "grid grid-cols-[auto,1fr] gap-3 pointer-events-auto relative transition-transform",
              children: [n.jsx(I, {
                  className: "text-2xl",
                  icon: t > 0 ? j.VOLUME : j.VOLUME_X
              }), n.jsx("div", {
                  className: "w-full flex items-center",
                  children: n.jsx("div", {
                      className: "w-full h-1.5 rounded-full bg-video-context-slider bg-opacity-25",
                      children: n.jsx("div", {
                          className: "h-full bg-video-context-sliderFilled rounded-full transition-[width] duration-100",
                          style: {
                              width: `${t*100}%`
                          }
                      })
                  })
              })]
          })]
      })
  })
}

function Td(e, t) {
  const s = e / t;
  return t - e <= 30 ? "always" : s >= .9 ? "hover" : "none"
}

function ks(e) {
  return n.jsx("button", {
      className: S("font-bold rounded h-10 w-40 scale-95 hover:scale-100 transition-all duration-200", e.className),
      type: "button",
      onClick: e.onClick,
      children: e.children
  })
}

function Rd(e) {
  var v;
  const {
      t
  } = C(), s = x(w => w.progress.duration), r = x(w => w.interface.hideNextEpisodeBtn), i = x(w => w.meta), {
      setDirectMeta: a
  } = zr(), o = x(w => w.hideNextEpisodeButton), l = x(w => {
      var T;
      return (T = w.meta) == null ? void 0 : T.type
  }), c = x(w => w.progress.time), u = Td(c, s), m = x(w => w.status), b = x(w => w.setShouldStartFromBeginning);
  let g = !1;
  (u === "always" || u === "hover" && e.controlsShowing) && (g = !0), (r || m !== "playing" || s === 0) && (g = !1);
  const h = u === "hover" ? "slide-up" : "fade";
  let f = "bottom-[calc(6rem+env(safe-area-inset-bottom))]";
  u === "always" && (f = e.controlsShowing ? f : "bottom-[calc(3rem+env(safe-area-inset-bottom))]");
  const y = (v = i == null ? void 0 : i.episodes) == null ? void 0 : v.find(w => {
          var T;
          return w.number === (((T = i == null ? void 0 : i.episode) == null ? void 0 : T.number) ?? 0) + 1
      }),
      p = d.useCallback(() => {
          var T;
          if (!i || !y) return;
          const w = {
              ...i
          };
          w.episode = y, b(!0), a(w), (T = e.onChange) == null || T.call(e, w)
      }, [a, y, i, e, b]);
  return !(i != null && i.episode) || !y || l !== "show" ? null : n.jsx(Q, {
      animation: h,
      show: g,
      className: "absolute right-[calc(3rem+env(safe-area-inset-right))] bottom-0",
      children: n.jsxs("div", {
          className: S(["absolute bottom-0 right-0 transition-[bottom] duration-200 flex items-center space-x-3", f]),
          children: [n.jsx(ks, {
              className: "py-px box-content bg-buttons-secondary hover:bg-buttons-secondaryHover bg-opacity-90 text-buttons-secondaryText",
              onClick: o,
              children: t("player.nextEpisode.cancel")
          }), n.jsxs(ks, {
              onClick: () => p(),
              className: "bg-buttons-primary hover:bg-buttons-primaryHover text-buttons-primaryText flex justify-center items-center",
              children: [n.jsx(I, {
                  className: "text-xl mr-1",
                  icon: j.SKIP_EPISODE
              }), t("player.nextEpisode.next")]
          })]
      })
  })
}

function Ns(e) {
  const [t, s] = d.useState(!1), r = x(o => o.interface.isCasting), i = d.useRef(null), a = d.useCallback(o => {
      const l = (o.getAttribute("style") ?? "").includes("inline");
      s(!l)
  }, [s]);
  return d.useEffect(() => {
      var c;
      const o = (c = i.current) == null ? void 0 : c.querySelector("google-cast-launcher");
      if (!o) return;
      const l = new MutationObserver(() => {
          a(o)
      });
      return l.observe(o, {
          attributes: !0,
          attributeFilter: ["style"]
      }), a(o), () => {
          l.disconnect()
      }
  }, [a]), n.jsx(ae, {
      ref: i,
      className: [e.className ?? "", "google-cast-button", r ? "casting" : "", t ? "hidden" : ""].join(" "),
      icon: j.CASTING,
      onClick: o => {
          const l = o.querySelector("google-cast-launcher");
          l && l.click()
      }
  })
}

function Pd() {
  const {
      t: e
  } = C(), t = x(i => i.mediaPlaying.isLoading), s = x(i => i.display), r = (s == null ? void 0 : s.getType()) === "casting";
  return t || !r ? null : n.jsxs("div", {
      className: "flex flex-col items-center justify-center gap-4",
      children: [n.jsx("div", {
          className: "rounded-full bg-opacity-10 bg-video-buttonBackground p-3 brightness-100 grayscale",
          children: n.jsx(I, {
              icon: j.CASTING
          })
      }), n.jsx("p", {
          className: "text-center",
          children: e("player.casting.enabled")
      })]
  })
}

function Ad(e, t) {
  for (let s = 0; s < t.length; s += 1)
      if (t.start(t.length - 1 - s) < e) return t.end(t.length - 1 - s);
  return 0
}
const _d = {
  1: {
      name: "MEDIA_ERR_ABORTED",
      key: "player.playbackError.errors.errorAborted"
  },
  2: {
      name: "MEDIA_ERR_NETWORK",
      key: "player.playbackError.errors.errorNetwork"
  },
  3: {
      name: "MEDIA_ERR_DECODE",
      key: "player.playbackError.errors.errorDecode"
  },
  4: {
      name: "MEDIA_ERR_SRC_NOT_SUPPORTED",
      key: "player.playbackError.errors.errorNotSupported"
  }
};

function Od(e) {
  const t = _d[(e == null ? void 0 : e.code) ?? -1];
  return t || {
      name: "MEDIA_ERR_GENERIC",
      key: "player.playbackError.errors.errorGenericMedia"
  }
}

function Ee(e) {
  const t = new URL(e),
      s = _().CDN_REPLACEMENTS;
  for (const [r, i] of s)
      if (t.hostname.endsWith(r)) return t.hostname = i, t.port = "", t.protocol = "https://", t.toString();
  return e
}

function qr() {
  const e = {};
  return {
      on(t, s) {
          var r;
          e[t] || (e[t] = []), (r = e[t]) == null || r.push(s)
      },
      off(t, s) {
          var r;
          e[t] = ((r = e[t]) == null ? void 0 : r.filter(i => i !== s)) ?? []
      },
      emit(t, s) {
          (e[t] ?? []).forEach(r => r(s))
      }
  }
}
const Yr = {
  360: "360",
  1080: "1080",
  720: "720",
  480: "480"
};

function lt(e) {
  return Yr[e.height] ?? null
}

function Md(e) {
  const t = Object.entries(Yr).find(s => s[1] === e);
  return t ? +t[0] : null
}

function Dd(e) {
  return e.map(t => lt(t)).filter(t => !!t)
}

function Xr() {
  const {
      emit: e,
      on: t,
      off: s
  } = qr();
  let r = null,
      i = null,
      a = null,
      o = null,
      l = !1,
      c = !1,
      u = !1,
      m = 0,
      b = !1,
      g = null,
      h = 1;

  function f() {
      if (!i) return;
      const E = i.levels.map(M => lt(M)).filter(M => !!M);
      e("qualities", E)
  }

  function y() {
      if (a && at(a) || !i) return;
      if (b) i.currentLevel = -1, i.loadLevel = -1;
      else {
          const E = Dd(i.levels),
              M = Tr(E, {
                  lastChosenQuality: g,
                  automaticQuality: b
              });
          if (M) {
              const D = i.levels.findIndex(oe => oe.height === Md(M));
              D !== -1 && (i.currentLevel = D, i.loadLevel = D)
          }
      }
      const k = lt(i.levels[i.currentLevel]);
      e("changedquality", k)
  }

  function p(k, E) {
      if (E.type === "hls") {
          if (at(k)) {
              k.src = Ee(E.url), k.currentTime = m;
              return
          }
          if (!me.isSupported()) throw new Error("HLS not supported");
          i || (i = new me({
              maxBufferSize: 500 * 1e3 * 1e3,
              fragLoadPolicy: {
                  default: {
                      maxLoadTimeMs: 30 * 1e3,
                      maxTimeToFirstByteMs: 30 * 1e3,
                      errorRetry: {
                          maxNumRetry: 2,
                          retryDelayMs: 1e3,
                          maxRetryDelayMs: 8e3
                      },
                      timeoutRetry: {
                          maxNumRetry: 3,
                          maxRetryDelayMs: 0,
                          retryDelayMs: 0
                      }
                  }
              }
          }), i.on(me.Events.ERROR, (M, D) => {
              var oe;
              console.error("HLS error", D), D.fatal && (E == null ? void 0 : E.url) === ((oe = D.frag) == null ? void 0 : oe.baseurl) && e("error", {
                  message: D.error.message,
                  stackTrace: D.error.stack,
                  errorName: D.error.name,
                  type: "hls"
              })
          }), i.on(me.Events.MANIFEST_LOADED, () => {
              i && (f(), y())
          }), i.on(me.Events.LEVEL_SWITCHED, () => {
              if (!i) return;
              const M = lt(i.levels[i.currentLevel]);
              e("changedquality", M)
          })), i.attachMedia(k), i.loadSource(Ee(E.url)), k.currentTime = m;
          return
      }
      k.src = Ee(E.url), k.currentTime = m
  }

  function v() {
      !a || !r || (p(a, r), a.addEventListener("play", () => {
          e("play", void 0), e("loading", !1)
      }), a.addEventListener("error", () => {
          const k = (a == null ? void 0 : a.error) ?? null,
              E = Od(k);
          e("error", {
              errorName: E.name,
              key: E.key,
              type: "htmlvideo"
          })
      }), a.addEventListener("playing", () => e("play", void 0)), a.addEventListener("pause", () => e("pause", void 0)), a.addEventListener("canplay", () => e("loading", !1)), a.addEventListener("waiting", () => e("loading", !0)), a.addEventListener("volumechange", () => e("volumechange", a != null && a.muted ? 0 : (a == null ? void 0 : a.volume) ?? 0)), a.addEventListener("timeupdate", () => e("time", (a == null ? void 0 : a.currentTime) ?? 0)), a.addEventListener("loadedmetadata", () => {
          (r == null ? void 0 : r.type) === "hls" && a && at(a) && (e("qualities", ["unknown"]), e("changedquality", "unknown")), e("duration", (a == null ? void 0 : a.duration) ?? 0)
      }), a.addEventListener("progress", () => {
          a && e("buffered", Ad(a.currentTime, a.buffered))
      }), a.addEventListener("webkitendfullscreen", () => {
          l = !1, e("fullscreen", l), l || e("needstrack", !1)
      }), a.addEventListener("webkitplaybacktargetavailabilitychanged", k => {
          k.availability === "available" && e("canairplay", !0)
      }), a.addEventListener("ratechange", () => {
          a && e("playbackrate", a.playbackRate)
      }))
  }

  function w() {
      a && (a.removeAttribute("src"), a.load()), i && (i.destroy(), i = null)
  }

  function T() {
      w(), a && (a = null)
  }

  function L() {
      l = !!document.fullscreenElement || !!document.webkitFullscreenElement, e("fullscreen", l), l || e("needstrack", !1)
  }
  return J.addEventListener("fullscreenchange", L), {
      on: t,
      off: s,
      getType() {
          return "web"
      },
      destroy: () => {
          T(), J.removeEventListener("fullscreenchange", L)
      },
      load(k) {
          k.source || w(), b = k.automaticQuality, g = k.preferredQuality, r = k.source, e("loading", !0), m = k.startAt, v()
      },
      changeQuality(k, E) {
          (r == null ? void 0 : r.type) === "hls" && (b = k, g = E, y())
      },
      processVideoElement(k) {
          T(), a = k, v(), this.setVolume(h)
      },
      processContainerElement(k) {
          o = k
      },
      setMeta() {},
      setCaption() {},
      pause() {
          a == null || a.pause()
      },
      play() {
          a == null || a.play()
      },
      setSeeking(k) {
          if (k !== u) {
              if (u = k, !k) {
                  c || this.play();
                  return
              }
              c = (a == null ? void 0 : a.paused) ?? !0, this.pause()
          }
      },
      setTime(k) {
          if (!a) return;
          let E = Math.min(k, a.duration);
          E = Math.max(0, E), !Number.isNaN(E) && (e("time", E), a.currentTime = E)
      },
      async setVolume(k) {
          let E = Math.min(k, 1);
          if (E = Math.max(0, E), h = k, !a) return;
          a.muted = E === 0, await gt() ? a.volume = E : e("volumechange", E === 0 ? 0 : 1)
      },
      toggleFullscreen() {
          if (l) {
              if (l = !1, e("fullscreen", l), e("needstrack", !1), !J.fullscreenElement) return;
              J.exitFullscreen();
              return
          }
          if (l = !0, e("fullscreen", l), !(!Fr() || J.fullscreenElement)) {
              if (Pt()) {
                  o && J.requestFullscreen(o);
                  return
              }
              Br() && a && (e("needstrack", !0), a.webkitEnterFullscreen())
          }
      },
      togglePictureInPicture() {
          if (a) {
              if ($r()) {
                  const k = a;
                  k.webkitSetPresentationMode(k.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture")
              }
              Ur() && (a !== document.pictureInPictureElement ? a.requestPictureInPicture() : document.exitPictureInPicture())
          }
      },
      startAirplay() {
          const k = a;
          k && k.webkitShowPlaybackTargetPicker && k.webkitShowPlaybackTargetPicker()
      },
      setPlaybackRate(k) {
          a && (a.playbackRate = k)
      }
  }
}

function Bd(e) {
  const {
      emit: t,
      on: s,
      off: r
  } = qr();
  let i = !1,
      a = 1,
      o = null,
      l = null,
      c = null,
      u = !1,
      m = !1,
      b = !1,
      g = 0,
      h = {
          title: "",
          type: A.MOVIE
      };

  function f() {
      var k;
      const L = async E => {
          switch (E.field) {
              case "volumeLevel":
                  await gt() && t("volumechange", E.value);
                  break;
              case "currentTime":
                  t("time", E.value);
                  break;
              case "duration":
                  t("duration", E.value ?? 0);
                  break;
              case "mediaInfo":
                  E.value && t("duration", E.value.duration ?? 0);
                  break;
              case "playerState":
                  t("loading", E.value === "BUFFERING"), E.value === "PLAYING" ? t("play", void 0) : E.value === "PAUSED" && t("pause", void 0), i = E.value === "PAUSED";
                  break;
              case "isMuted":
                  t("volumechange", E.value ? 1 : 0);
                  break
          }
      };
      return (k = e.controller) == null || k.addEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, L), () => {
          var E;
          (E = e.controller) == null || E.removeEventListener(cast.framework.RemotePlayerEventType.ANY_CHANGE, L)
      }
  }

  function y() {
      var oe;
      if (!o) {
          (oe = e.controller) == null || oe.stop();
          return
      }
      let L = "video/mp4";
      o.type === "hls" && (L = "application/x-mpegurl");
      const k = new chrome.cast.media.GenericMediaMetadata;
      k.title = h.title;
      const E = new chrome.cast.media.MediaInfo("video", L);
      E.contentUrl = Ee(o.url), E.streamType = chrome.cast.media.StreamType.BUFFERED, E.metadata = k, E.customData = {
          playbackRate: a
      };
      const M = new chrome.cast.media.LoadRequest(E);
      if (M.autoplay = !0, M.currentTime = g, o.type === "hls") {
          const _e = chrome.cast.media,
              Oe = M.media;
          Oe.hlsSegmentFormat = _e.HlsSegmentFormat.FMP4, Oe.hlsVideoSegmentFormat = _e.HlsVideoSegmentFormat.FMP4
      }
      const D = e.instance.getCurrentSession();
      D == null || D.loadMedia(M)
  }

  function p() {
      !l || !o || y()
  }

  function v() {
      l && (l = null)
  }

  function w() {
      u = !!document.fullscreenElement || !!document.webkitFullscreenElement, t("fullscreen", u), u || t("needstrack", !1)
  }
  J.addEventListener("fullscreenchange", w);
  const T = f();
  return {
      on: s,
      off: r,
      getType() {
          return "casting"
      },
      destroy: () => {
          T(), v(), J.removeEventListener("fullscreenchange", w)
      },
      load(L) {
          o = L.source, t("loading", !0), g = L.startAt, p()
      },
      changeQuality() {},
      setCaption(L) {
          p()
      },
      processVideoElement(L) {
          v(), l = L, p()
      },
      processContainerElement(L) {
          c = L
      },
      setMeta(L) {
          h = L, p()
      },
      pause() {
          i || (e.controller.playOrPause(), i = !0)
      },
      play() {
          i && (e.controller.playOrPause(), i = !1)
      },
      setSeeking(L) {
          if (L !== b) {
              if (b = L, !L) {
                  m || this.play();
                  return
              }
              m = i ?? !0, this.pause()
          }
      },
      setTime(L) {
          if (!l) return;
          let k = Math.min(L, e.player.duration);
          k = Math.max(0, k), !Number.isNaN(k) && (t("time", k), e.player.currentTime = k, e.controller.seek())
      },
      async setVolume(L) {
          let k = Math.min(L, 1);
          k = Math.max(0, k), await gt() ? (e.player.volumeLevel = k, e.controller.setVolumeLevel(), t("volumechange", k)) : t("volumechange", k === 0 ? 0 : 1)
      },
      toggleFullscreen() {
          if (u) {
              if (u = !1, t("fullscreen", u), t("needstrack", !1), !J.fullscreenElement) return;
              J.exitFullscreen();
              return
          }
          u = !0, t("fullscreen", u), !(!Fr() || J.fullscreenElement) && Pt() && c && J.requestFullscreen(c)
      },
      togglePictureInPicture() {},
      startAirplay() {},
      setPlaybackRate(L) {
          a = L, p()
      }
  }
}
const Fd = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
  Jr = [];
let on = null;

function Ud(e) {
  on = e, Jr.forEach(t => t(e))
}

function $d(e) {
  if (on !== null) return e(on);
  Jr.push(e)
}

function Vd() {
  if (window.__onGCastApiAvailable = t => {
          Ud(t)
      }, !!!document.getElementById("chromecast-script")) {
      const t = document.createElement("script");
      t.setAttribute("src", Fd), t.setAttribute("id", "chromecast-script"), document.body.appendChild(t)
  }
}

function Hd() {
  const [e, t] = d.useState(null);
  return d.useEffect(() => {
      $d(s => t(s))
  }, []), e
}

function Wd() {
  const e = x(v => v.casting.setInstance),
      t = x(v => v.casting.setController),
      s = x(v => v.casting.setPlayer),
      r = x(v => v.casting.setIsCasting),
      i = x(v => v.interface.isCasting),
      a = x(v => {
          var w;
          return (w = v.caption) == null ? void 0 : w.selected
      }),
      o = x(v => v.setDisplay),
      l = x(v => v.redisplaySource),
      c = Hd(),
      u = x(v => v.display),
      m = x(v => v.casting.controller),
      b = x(v => v.casting.player),
      g = x(v => v.casting.instance),
      h = x(v => v.progress.time),
      f = x(v => {
          var w;
          return (w = v.meta) == null ? void 0 : w.title
      }),
      y = x(v => {
          var w;
          return (w = v.meta) == null ? void 0 : w.type
      }),
      p = d.useRef({
          controller: m,
          player: b,
          instance: g,
          time: h,
          metaTitle: f,
          metaType: y,
          caption: a
      });
  return d.useEffect(() => {
      p.current = {
          controller: m,
          player: b,
          instance: g,
          time: h,
          metaTitle: f,
          metaType: y,
          caption: a
      }
  }, [m, b, g, h, f, y, a]), d.useEffect(() => {
      if (i) {
          if (p.current.controller && p.current.instance && p.current.player) {
              const v = Bd({
                  controller: p.current.controller,
                  instance: p.current.instance,
                  player: p.current.player
              });
              v.setMeta({
                  title: p.current.metaTitle ?? "",
                  type: mt(p.current.metaType ?? "movie")
              }), v.setCaption(p.current.caption), o(v), l(p.current.time ?? 0)
          }
      } else {
          const v = Xr();
          o(v), l(p.current.time ?? 0)
      }
  }, [i, o, l]), d.useEffect(() => {
      u == null || u.setMeta({
          title: p.current.metaTitle ?? "",
          type: mt(p.current.metaType ?? "movie")
      })
  }, [f, y, u]), d.useEffect(() => {
      if (!c) return;
      const v = cast.framework.CastContext.getInstance();
      e(v), v.setOptions({
          receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
      });
      const w = new cast.framework.RemotePlayer;
      s(w);
      const T = new cast.framework.RemotePlayerController(w);
      t(T);

      function L(k) {
          k.field === "isConnected" && r(k.value)
      }
      return T.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, L), () => {
          T.removeEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, L)
      }
  }, [c, s, t, e, r]), null
}

function Gd() {
  var r, i;
  const {
      t: e
  } = C(), t = x(a => a.meta);
  if (!t) return null;
  if (t.type !== "show") return n.jsx(fe, {
      children: n.jsx("title", {
          children: t.title
      })
  });
  const s = e("media.episodeDisplay", {
      season: (r = t.season) == null ? void 0 : r.number,
      episode: (i = t.episode) == null ? void 0 : i.number
  });
  return n.jsx(fe, {
      children: n.jsxs("title", {
          children: [t.title, " - ", s]
      })
  })
}

function Kd() {
  const e = $(""),
      t = x(f => f.display),
      s = x(f => f.progress),
      {
          isSeeking: r
      } = x(f => f.interface),
      i = x(f => f.mediaPlaying),
      a = x(f => f.progress.time),
      {
          setVolume: o,
          toggleMute: l
      } = Vr(),
      {
          toggleLastUsed: c
      } = Rt(),
      u = xr(f => f.setShowVolume),
      [m, b] = d.useState(!1),
      g = d.useRef(),
      h = d.useRef({
          setShowVolume: u,
          setVolume: o,
          toggleMute: l,
          setIsRolling: b,
          toggleLastUsed: c,
          display: t,
          mediaPlaying: i,
          mediaProgress: s,
          isSeeking: r,
          isRolling: m,
          time: a,
          router: e
      });
  return d.useEffect(() => {
      h.current = {
          setShowVolume: u,
          setVolume: o,
          toggleMute: l,
          setIsRolling: b,
          toggleLastUsed: c,
          display: t,
          mediaPlaying: i,
          mediaProgress: s,
          isSeeking: r,
          isRolling: m,
          time: a,
          router: e
      }
  }, [u, o, l, b, c, t, i, s, r, m, a, e]), d.useEffect(() => {
      const f = y => {
          var v, w, T, L, k, E, M, D, oe, _e, Oe, $n, Vn, Hn, Wn;
          if (y.target && y.target.nodeName === "INPUT") return;
          const p = y.key;
          if (["ArrowUp", "ArrowDown", "m"].includes(p) && (h.current.setShowVolume(!0), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
                  h.current.setShowVolume(!1)
              }, 3e3)), p === "ArrowUp" && h.current.setVolume((((v = h.current.mediaPlaying) == null ? void 0 : v.volume) || 0) + .15), p === "ArrowDown" && h.current.setVolume((((w = h.current.mediaPlaying) == null ? void 0 : w.volume) || 0) - .15), p === "m" && h.current.toggleMute(), p === ">" || p === "<") {
              const ve = [.25, .5, 1, 1.5, 2];
              let _t = ve.indexOf((T = h.current.mediaPlaying) == null ? void 0 : T.playbackRate);
              _t === -1 && (_t = ve.indexOf(1));
              const mi = _t + (p === ">" ? 1 : -1),
                  Gn = ve[mi];
              Gn && ((L = h.current.display) == null || L.setPlaybackRate(Gn))
          }
          if (p === "ArrowRight" && ((k = h.current.display) == null || k.setTime(h.current.time + 5)), p === "ArrowLeft" && ((E = h.current.display) == null || E.setTime(h.current.time - 5)), p === "j" && ((M = h.current.display) == null || M.setTime(h.current.time - 10)), p === "l" && ((D = h.current.display) == null || D.setTime(h.current.time + 10)), p === "." && ((oe = h.current.mediaPlaying) != null && oe.isPaused) && ((_e = h.current.display) == null || _e.setTime(h.current.time + 1)), p === "," && ((Oe = h.current.mediaPlaying) != null && Oe.isPaused) && (($n = h.current.display) == null || $n.setTime(h.current.time - 1)), p === "f" && ((Vn = h.current.display) == null || Vn.toggleFullscreen()), p === " " && ((Hn = h.current.display) == null || Hn[h.current.mediaPlaying.isPaused ? "play" : "pause"]()), p === "Escape" && h.current.router.close(), p === "c" && h.current.toggleLastUsed().catch(() => {}), p === "r") {
              if (h.current.isRolling || y.ctrlKey || y.metaKey) return;
              h.current.setIsRolling(!0), (Wn = document.querySelector(".popout-location")) == null || Wn.classList.add("roll"), document.body.setAttribute("data-no-scroll", "true"), setTimeout(() => {
                  var ve;
                  (ve = document.querySelector(".popout-location")) == null || ve.classList.remove("roll"), document.body.removeAttribute("data-no-scroll"), h.current.setIsRolling(!1)
              }, 1e3)
          }
      };
      return window.addEventListener("keydown", f), () => {
          window.removeEventListener("keydown", f)
      }
  }, []), null
}

function zd() {
  const e = x(r => r.meta),
      t = x(r => r.progress),
      s = x(r => r.mediaPlaying);
  return d.useEffect(() => (window.meta || (window.meta = {}), e && (window.meta.player = {
      meta: {
          title: e.title,
          type: e.type,
          tmdbId: e.tmdbId,
          year: e.releaseYear,
          poster: e.poster
      },
      controls: {
          isPlaying: s.isPlaying,
          isLoading: s.isLoading
      },
      season: e.season ? {
          number: e.season.number,
          tmdbId: e.season.tmdbId,
          title: e.season.title
      } : void 0,
      episode: e.episode ? {
          number: e.episode.number,
          tmdbId: e.episode.tmdbId,
          title: e.episode.title
      } : void 0,
      progress: {
          time: t.time,
          duration: t.duration
      }
  }), () => {
      window.meta && delete window.meta.player
  }), [e, t, s]), null
}

function Qd() {
  const e = x(l => l.meta),
      t = x(l => l.progress),
      s = G(l => l.updateItem),
      r = x(l => l.status),
      i = x(l => l.mediaPlaying.hasPlayedOnce),
      a = d.useRef(null),
      o = d.useRef({
          updateItem: s,
          meta: e,
          progress: t,
          status: r,
          hasPlayedOnce: i
      });
  return d.useEffect(() => {
      o.current.updateItem = s, o.current.meta = e, o.current.progress = t, o.current.status = r, o.current.hasPlayedOnce = i
  }, [s, t, e, r, i]), dn(() => {
      var u, m;
      const l = o.current;
      if (!l.progress || !l.meta || !l.updateItem || l.status !== P.PLAYING || !i) return;
      let c = !1;
      a.current ? (((u = a.current) == null ? void 0 : u.duration) !== t.duration || ((m = a.current) == null ? void 0 : m.watched) !== t.time) && (c = !0) : c = !0, a.current = {
          duration: t.duration,
          watched: t.time
      }, c && l.updateItem({
          meta: l.meta,
          progress: a.current
      })
  }, 3e3), null
}
const qd = V(ce(H(e => ({
  enableThumbnails: !1,
  setEnableThumbnails(t) {
      e(s => {
          s.enableThumbnails = t
      })
  }
})), {
  name: "__MW::preferences"
}));

function Yd(e) {
  const t = [0, 1];
  let s = .5,
      r = 0;
  for (let i = 0; i < e; i += 1) {
      const a = 1 / s - 1;
      for (let o = 0; o < a - r; o += 1) {
          const l = o * s * 2;
          t.push(l + s)
      }
      r = a, s /= 2
  }
  return t
}
class Xd {
  constructor(t) {
      this.videoEl = null, this.canvasEl = null, this.hls = null, this.cb = t.addImage, this.interrupted = !1
  }
  start(t) {
      if (Dr) return !1;
      const s = document.createElement("video");
      s.setAttribute("muted", "true");
      const r = document.createElement("canvas");
      if (this.hls = new me, t.type === "mp4") s.src = Ee(t.url), s.crossOrigin = "anonymous";
      else if (t.type === "hls") this.hls.attachMedia(s), this.hls.loadSource(Ee(t.url));
      else throw new Error("Invalid loadable source type");
      this.videoEl = s, this.canvasEl = r, this.begin().catch(i => console.error(i))
  }
  destroy() {
      var t, s;
      this.interrupted = !0, this.videoEl = null, this.canvasEl = null, (t = this.hls) == null || t.detachMedia(), (s = this.hls) == null || s.destroy(), this.hls = null
  }
  async initVideo() {
      !this.videoEl || !this.canvasEl || (await new Promise((t, s) => {
          var r, i;
          (r = this.videoEl) == null || r.addEventListener("loadedmetadata", t), (i = this.videoEl) == null || i.addEventListener("error", s)
      }), !(!this.videoEl || !this.canvasEl) && (this.canvasEl.height = this.videoEl.videoHeight, this.canvasEl.width = this.videoEl.videoWidth))
  }
  async takeSnapshot(t) {
      if (!this.videoEl || !this.canvasEl || (this.videoEl.currentTime = t, await new Promise(i => {
              var o;
              const a = () => {
                  var l;
                  (l = this.videoEl) == null || l.removeEventListener("seeked", a), i(null)
              };
              (o = this.videoEl) == null || o.addEventListener("seeked", a)
          }), !this.videoEl || !this.canvasEl)) return;
      const s = this.canvasEl.getContext("2d");
      if (!s) return;
      s.drawImage(this.videoEl, 0, 0, this.canvasEl.width, this.canvasEl.height);
      const r = this.canvasEl.toDataURL();
      this.interrupted || r === "data:," || !r || this.cb({
          at: t,
          data: r
      })
  }
  async begin() {
      const t = this.videoEl;
      if (!t) return;
      await this.initVideo();
      const s = Yd(6);
      for (let r = 0; r < s.length; r += 1) {
          if (this.interrupted) return;
          await this.takeSnapshot(t.duration * s[r])
      }
  }
}

function Jd() {
  var b, g;
  const e = x(h => h.thumbnails.addImage),
      t = x(h => h.status),
      s = x(h => h.thumbnails.resetImages),
      r = x(h => h.meta),
      i = x(h => h.source),
      a = qd(h => h.enableThumbnails),
      o = d.useRef(null),
      l = JSON.stringify(i),
      c = d.useCallback(() => {
          let h = null;
          if (i && (h = Jt(i, {
                  automaticQuality: !1,
                  lastChosenQuality: "360"
              })), o.current || t !== P.PLAYING || !h) return;
          s();
          const f = new Xd({
              addImage: e
          });
          o.current = f, f.start(h.stream)
      }, [i, e, s, t]),
      u = d.useRef(c);
  d.useEffect(() => {
      u.current = c
  }, [c, t]), d.useEffect(() => {
      a && u.current()
  }, [l, a]), d.useEffect(() => () => {
      o.current && (o.current.destroy(), o.current = null)
  }, []);
  const m = JSON.stringify({
      id: r == null ? void 0 : r.tmdbId,
      ep: (b = r == null ? void 0 : r.episode) == null ? void 0 : b.tmdbId,
      se: (g = r == null ? void 0 : r.season) == null ? void 0 : g.tmdbId
  });
  return d.useEffect(() => {
      o.current && (o.current.destroy(), o.current = null), a && u.current()
  }, [m, l, t, a]), null
}

function Zd() {
  const e = x(r => r.display),
      t = x(r => r.setDisplay),
      s = d.useRef(e);
  d.useEffect(() => {
      s.current = e
  }, [e]), d.useEffect(() => {
      if (!s.current) {
          const r = Xr();
          s.current = r, t(r)
      }
      return () => {
          s.current && (s.current = null, t(null))
      }
  }, [t])
}

function Zr() {
  return x(t => t.status) === P.PLAYING
}

function em(e, t) {
  const s = d.useRef(null),
      r = d.useMemo(() => {
          s.current && URL.revokeObjectURL(s.current);
          const i = e();
          return s.current = i, i
      }, t);
  return d.useEffect(() => () => {
      s.current && URL.revokeObjectURL(s.current)
  }, []), r
}
const tm = function() {
      const t = d.useRef(null),
          s = d.useRef(null),
          r = x(u => u.display),
          i = x(u => {
              var m;
              return (m = u.caption.selected) == null ? void 0 : m.srtData
          }),
          a = x(u => u.caption.asTrack),
          o = x(u => {
              var m;
              return (m = u.caption.selected) == null ? void 0 : m.language
          }),
          l = em(() => i ? Hc(i) : null, [i]);
      d.useEffect(() => {
          r && t.current && r.processVideoElement(t.current)
      }, [r, t]), d.useEffect(() => {
          s.current && (s.current.track.mode = "showing")
      }, [s]);
      let c = null;
      return a && l && o && (c = n.jsx("track", {
          label: "movie-web",
          kind: "subtitles",
          srcLang: o,
          src: l,
          default: !0
      })), n.jsx("video", {
          className: "absolute inset-0 w-full h-screen bg-black",
          autoPlay: !0,
          playsInline: !0,
          ref: t,
          children: c
      })
  },
  nm = tm;

function sm() {
  const e = Zr();
  return Zd(), Qc(), e ? n.jsx(nm, {}) : null
}

function rm(e) {
  const t = Zr(),
      s = x(b => b.display),
      r = x(b => b.mediaPlaying.isPaused),
      i = x(b => b.updateInterfaceHovering),
      a = x(b => b.interface.hovering),
      [o, l, c] = Bi(() => {
          i(ne.NOT_HOVERING)
      }, 3e3);
  Vs(() => {
      l()
  });
  const u = d.useCallback(() => {
          s == null || s.toggleFullscreen()
      }, [s]),
      m = d.useCallback(b => {
          if (b.pointerType === "mouse") {
              if (b.button !== 0) return;
              r ? s == null || s.play() : s == null || s.pause();
              return
          }
          a !== ne.MOBILE_TAPPED ? (i(ne.MOBILE_TAPPED), c()) : (i(ne.NOT_HOVERING), l())
      }, [s, r, a, i, c, l]);
  return t ? n.jsx("div", {
      className: S("absolute inset-0", {
          "absolute inset-0": !0,
          "cursor-none": !e.showingControls
      }),
      onDoubleClick: u,
      onPointerUp: m
  }) : null
}

function im(e) {
  const t = d.useRef(null),
      s = x(i => i.updateInterfaceHovering),
      r = x(i => i.interface.hovering);
  d.useEffect(() => {
      if (!e.current) return;
      const i = e.current;

      function a(l) {
          l.pointerType === "mouse" && (s(ne.MOUSE_HOVER), t.current && clearTimeout(t.current), t.current = setTimeout(() => {
              s(ne.NOT_HOVERING), t.current = null
          }, 3e3))
      }

      function o(l) {
          l.pointerType === "mouse" && (s(ne.NOT_HOVERING), t.current && clearTimeout(t.current))
      }
      return i.addEventListener("pointermove", a), i.addEventListener("pointerleave", o), () => {
          i.removeEventListener("pointermove", a), i.removeEventListener("pointerleave", o)
      }
  }, [e, r, s])
}

function am(e) {
  const t = d.useRef(null),
      s = x(r => r.display);
  return im(t), d.useEffect(() => {
      s && t.current && s.processContainerElement(t.current)
  }, [s, t]), n.jsx("div", {
      ref: t,
      children: n.jsx(ql, {
          children: n.jsx("div", {
              className: "h-screen select-none",
              children: e.children
          })
      })
  })
}

function om(e) {
  const t = d.useRef(e.onLoad);
  return d.useEffect(() => {
      var s;
      (s = t.current) == null || s.call(t)
  }, []), n.jsx("div", {
      className: "relative",
      children: n.jsxs(am, {
          children: [n.jsx(zd, {}), n.jsx(Jd, {}), n.jsx(Wd, {}), n.jsx(sm, {}), n.jsx(Qd, {}), n.jsx(Kd, {}), n.jsxs("div", {
              className: "relative h-screen overflow-hidden",
              children: [n.jsx(rm, {
                  showingControls: e.showingControls
              }), n.jsx(Gd, {}), e.children]
          })]
      })
  })
}
const lm = function(t) {
      const [s] = mc(t.id), r = {
          error: "bg-[#C93957] text-white"
      }, i = {
          error: j.CIRCLE_EXCLAMATION
      };
      return n.jsx("div", {
          ref: s,
          children: n.jsx("div", {
              className: [r[t.type], "flex items-center justify-center p-1"].join(" "),
              children: n.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [n.jsx(I, {
                      icon: i[t.type]
                  }), n.jsx("div", {
                      children: t.children
                  })]
              })
          })
      })
  },
  cm = lm;

function ei(e) {
  const {
      t
  } = C(), s = le(o => o.isOnline), r = le(o => o.setLocation), i = le(o => o.location), a = e.location ?? null;
  return d.useEffect(() => {
      if (a) return r(a), () => {
          r(null)
      }
  }, [r, a]), i !== a ? null : n.jsx("div", {
      children: s ? null : n.jsx(cm, {
          id: "offline",
          type: "error",
          children: t("navigation.banner.offline")
      })
  })
}

function um(e) {
  const t = It("player"),
      s = x(r => r.setHoveringAnyControls);
  return d.useEffect(() => () => {
      s(!1)
  }, [s]), n.jsxs("div", {
      className: "w-full text-white",
      children: [n.jsx(Q, {
          animation: "fade",
          show: e.show,
          style: {
              top: `${t}px`
          },
          className: "pointer-events-none flex justify-end pb-32 bg-gradient-to-b from-black to-transparent [margin-bottom:env(safe-area-inset-bottom)] transition-opacity duration-200 absolute top-0 w-full"
      }), n.jsx("div", {
          className: "relative z-10",
          children: n.jsx(ei, {
              location: "player"
          })
      }), n.jsx("div", {
          onMouseOver: () => s(!0),
          onMouseOut: () => s(!1),
          className: "pointer-events-auto pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pt-6 absolute top-0 w-full",
          style: {
              top: `${t}px`
          },
          children: n.jsx(Q, {
              animation: "slide-down",
              show: e.show,
              className: "text-white",
              children: e.children
          })
      })]
  })
}

function Ss(e) {
  return n.jsx("div", {
      className: "absolute inset-0 flex items-center justify-center pointer-events-none [&>*]:pointer-events-auto",
      children: e.children
  })
}

function dm(e) {
  const t = x(s => s.setHoveringAnyControls);
  return d.useEffect(() => () => {
      t(!1)
  }, [t]), n.jsxs("div", {
      className: "w-full text-white",
      children: [n.jsx(Q, {
          animation: "fade",
          show: e.show,
          className: "pointer-events-none flex justify-end pt-32 bg-gradient-to-t from-black to-transparent transition-opacity duration-200 absolute bottom-0 w-full"
      }), n.jsx("div", {
          onMouseOver: () => t(!0),
          onMouseOut: () => t(!1),
          className: "pointer-events-auto z-10 pl-[calc(2rem+env(safe-area-inset-left))] pr-[calc(2rem+env(safe-area-inset-right))] pb-3 mb-[env(safe-area-inset-bottom)] absolute bottom-0 w-full",
          children: n.jsx(Q, {
              animation: "slide-up",
              show: e.show,
              children: e.children
          })
      })]
  })
}

function mm(e) {
  return n.jsx(Q, {
      animation: "fade",
      show: e.show,
      className: "absolute inset-0 w-full h-full bg-black bg-opacity-20 pointer-events-none"
  })
}
const hm = function(t) {
      const {
          t: s
      } = C(), r = K();
      return n.jsx("div", {
          className: "flex items-center",
          children: n.jsxs("button", {
              type: "button",
              onClick: () => r(t.url),
              className: "py-1 -my-1 px-2 -mx-2 tabbable rounded-lg flex items-center cursor-pointer text-type-secondary hover:text-white transition-colors duration-200 font-medium",
              children: [n.jsx(I, {
                  className: "mr-2",
                  icon: j.ARROW_LEFT
              }), n.jsx("span", {
                  className: "md:hidden",
                  children: s("player.back.short")
              }), n.jsx("span", {
                  className: "hidden md:block",
                  children: s("player.back.default")
              })]
          })
      })
  },
  fm = hm;

function gm(e) {
  const t = x(r => r.setHoveringLeftControls),
      s = d.useCallback(() => {
          t(!1)
      }, [t]);
  return d.useEffect(() => () => {
      t(!1)
  }, [t]), n.jsx("div", {
      className: S(["flex space-x-3 items-center", e.className]),
      onMouseLeave: s,
      children: e.children
  })
}

function xm(e) {
  return n.jsx(Q, {
      animation: "fade",
      show: e.show,
      className: "pointer-events-none",
      children: n.jsx("div", {
          className: S(["absolute inset-0 flex space-x-6 items-center justify-center pointer-events-none [&>*]:pointer-events-auto", e.className]),
          children: e.children
      })
  })
}
const pm = {
  i: "I"
};

function bm(e) {
  let {
      text: t,
      styling: s,
      overrideCasing: r
  } = e;
  const i = d.useMemo(() => {
      let a = t;
      r && t && (a = t.slice(0, 1) + t.slice(1).toLowerCase());
      const o = (a || "").split(" ").map(c => pm[c] ?? c).join(" ").replaceAll(/ i'/g, " I'").replaceAll(/\r?\n/g, "<br />");
      return Dc(o, {
          ALLOWED_TAGS: ["c", "b", "i", "u", "span", "ruby", "rt", "br"],
          ADD_TAGS: ["v", "lang"],
          ALLOWED_ATTR: ["title", "lang"]
      })
  }, [t, r]);
  return n.jsx("p", {
      className: "pointer-events-none mb-1 select-none rounded px-4 py-1 text-center leading-normal [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]",
      style: {
          color: s.color,
          fontSize: `${(1.5*s.size).toFixed(2)}em`,
          backgroundColor: `rgba(0,0,0,${s.backgroundOpacity.toFixed(2)})`
      },
      children: n.jsx("span", {
          dangerouslySetInnerHTML: {
              __html: i
          },
          dir: "ltr"
      })
  })
}

function ym() {
  const e = x(c => c.progress.time),
      t = x(c => {
          var u;
          return (u = c.caption.selected) == null ? void 0 : u.srtData
      }),
      s = x(c => {
          var u;
          return (u = c.caption.selected) == null ? void 0 : u.language
      }),
      r = B(c => c.styling),
      i = B(c => c.overrideCasing),
      a = B(c => c.delay),
      o = d.useMemo(() => t ? Uc(t) : [], [t, s]),
      l = d.useMemo(() => o.filter(c => {
          let {
              start: u,
              end: m
          } = c;
          return Bc(u, m, a, e)
      }), [o, e, a]);
  return n.jsx("div", {
      children: l.map((c, u) => {
          let {
              start: m,
              end: b,
              content: g
          } = c;
          return n.jsx(bm, {
              text: g,
              styling: r,
              overrideCasing: i
          }, Fc(u, m, b))
      })
  })
}

function vm(e) {
  const t = x(a => a.caption.selected),
      s = x(a => a.caption.asTrack),
      r = x(a => a.display),
      i = (r == null ? void 0 : r.getType()) === "casting";
  return s || !t || i ? null : n.jsx(Q, {
      className: "absolute inset-0 pointer-events-none",
      animation: "slide-up",
      show: !0,
      children: n.jsx("div", {
          className: S(["text-white absolute flex w-full flex-col items-center transition-[bottom]", e.controlsShown ? "bottom-24" : "bottom-12"]),
          children: n.jsx(ym, {})
      })
  })
}

function jm() {
  const e = z(o => o.addBookmark),
      t = z(o => o.removeBookmark),
      s = z(o => o.bookmarks),
      r = x(o => o.meta),
      i = !!s[(r == null ? void 0 : r.tmdbId) ?? ""],
      a = d.useCallback(() => {
          r && (i ? t(r.tmdbId) : e(r))
      }, [i, r, e, t]);
  return n.jsx(ae, {
      onClick: () => a(),
      icon: i ? j.BOOKMARK : j.BOOKMARK_OUTLINE,
      iconSizeClass: "text-base",
      className: "p-3"
  })
}

function wm() {
  const e = x(m => m.interface.hovering),
      t = x(m => m.interface.lastHoveringState),
      s = x(m => m.mediaPlaying.isPaused),
      r = x(m => m.interface.hasOpenOverlay),
      i = x(m => m.interface.isHoveringControls),
      a = t === ne.MOBILE_TAPPED,
      l = e !== ne.NOT_HOVERING || i && !a || r,
      u = a ? l : l || s;
  return {
      showTouchTargets: a && u,
      showTargets: u
  }
}

function km(e) {
  const {
      showTargets: t,
      showTouchTargets: s
  } = wm(), r = x(o => o.status), {
      isMobile: i
  } = At(), a = x(o => o.mediaPlaying.isLoading);
  return n.jsxs(om, {
      onLoad: e.onLoad,
      showingControls: t,
      children: [e.children, n.jsx(mm, {
          show: t && r === P.PLAYING
      }), n.jsx(Id, {
          onChange: e.onMetaChange
      }), n.jsx(wd, {}), n.jsx(vm, {
          controlsShown: t
      }), r === P.PLAYING ? n.jsxs(n.Fragment, {
          children: [n.jsxs(Ss, {
              children: [n.jsx(iu, {}), n.jsx(au, {})]
          }), n.jsx(Ss, {
              children: n.jsx(Pd, {})
          })]
      }) : null, n.jsxs(xm, {
          className: "text-white",
          show: s && r === P.PLAYING,
          children: [n.jsx(ps, {
              iconSizeClass: "text-3xl"
          }), n.jsx(ms, {
              iconSizeClass: "text-5xl",
              className: a ? "opacity-0" : "opacity-100"
          }), n.jsx(xs, {
              iconSizeClass: "text-3xl"
          })]
      }), n.jsx(um, {
          show: t,
          children: n.jsxs("div", {
              className: "grid grid-cols-[1fr,auto] xl:grid-cols-3 items-center",
              children: [n.jsxs("div", {
                  className: "flex space-x-3 items-center",
                  children: [n.jsx(fm, {
                      url: e.backUrl
                  }), n.jsx("span", {
                      className: "text mx-3 text-type-secondary",
                      children: "/"
                  }), n.jsx(cu, {}), n.jsx(jm, {})]
              }), n.jsx("div", {
                  className: "text-center hidden xl:flex justify-center items-center",
                  children: n.jsx(uu, {})
              }), n.jsx("div", {
                  className: "hidden sm:flex items-center justify-end",
                  children: n.jsx(be, {})
              }), n.jsx("div", {
                  className: "flex sm:hidden items-center justify-end",
                  children: r === P.PLAYING ? n.jsxs(n.Fragment, {
                      children: [n.jsx(ws, {}), n.jsx(Ns, {})]
                  }) : null
              })]
          })
      }), n.jsxs(dm, {
          show: t,
          children: [n.jsx("div", {
              className: "flex items-center space-x-3",
              children: r === P.PLAYING ? n.jsxs(n.Fragment, {
                  children: [i ? n.jsx(bs, {
                      short: !0
                  }) : null, n.jsx(ru, {})]
              }) : null
          }), n.jsxs("div", {
              className: "hidden lg:flex justify-between",
              dir: "ltr",
              children: [n.jsx(gm, {
                  children: r === P.PLAYING ? n.jsxs(n.Fragment, {
                      children: [n.jsx(ms, {}), n.jsx(ps, {}), n.jsx(xs, {}), n.jsx(lu, {}), n.jsx(bs, {})]
                  }) : null
              }), n.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [n.jsx(js, {}), r === P.PLAYING ? n.jsxs(n.Fragment, {
                      children: [n.jsx(fs, {}), n.jsx(ws, {}), n.jsx(Ns, {})]
                  }) : null, r === P.PLAYBACK_ERROR || r === P.PLAYING ? n.jsx(vs, {}) : null, n.jsx(hs, {})]
              })]
          }), n.jsxs("div", {
              className: "grid grid-cols-[2.5rem,1fr,2.5rem] gap-3 lg:hidden",
              children: [n.jsx("div", {}), n.jsxs("div", {
                  className: "flex justify-center space-x-3",
                  children: [r === P.PLAYING ? n.jsx(fs, {}) : null, n.jsx(js, {}), r === P.PLAYING ? n.jsx(vs, {}) : null]
              }), n.jsx("div", {
                  children: n.jsx(hs, {})
              })]
          })]
      }), n.jsx(Ld, {}), n.jsx(Rd, {
          controlsShowing: t,
          onChange: e.onMetaChange
      })]
  })
}
const Nm = {
      releaseYear: 2010,
      title: "Sintel",
      tmdbId: "",
      type: "movie"
  },
  Cs = {
      hls: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  Es = {
      hls: "HLS",
      mp4: "MP4"
  };

function Sm() {
  const {
      status: e,
      playMedia: t,
      setMeta: s
  } = Mr(), [r, i] = d.useState("mp4"), [a, o] = d.useState(""), l = d.useCallback((c, u) => {
      let m;
      if (u === "hls") m = {
          type: "hls",
          url: c
      };
      else if (u === "mp4") m = {
          type: "file",
          qualities: {
              unknown: {
                  type: "mp4",
                  url: c
              }
          }
      };
      else throw new Error("Invalid type");
      s(Nm), t(m, [], null)
  }, [t, s]);
  return n.jsxs(km, {
      backUrl: "/",
      children: [e === P.IDLE ? n.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: n.jsx("div", {
              className: "w-full max-w-4xl rounded-xl bg-video-scraping-card p-10 m-4",
              children: n.jsxs("div", {
                  className: "flex gap-16 flex-col lg:flex-row",
                  children: [n.jsxs("div", {
                      className: "flex-1",
                      children: [n.jsx(Ve, {
                          children: "Custom stream"
                      }), n.jsxs("div", {
                          className: "grid grid-cols-[1fr,auto] gap-2 items-center",
                          children: [n.jsx(In, {
                              className: "bg-video-context-flagBg rounded-md p-2 text-white w-full",
                              value: a,
                              onChange: o,
                              placeholder: "https://..."
                          }), n.jsx(Cc, {
                              options: Object.entries(Es).map(c => ({
                                  id: c[0],
                                  name: c[1]
                              })),
                              selectedItem: {
                                  id: r,
                                  name: Es[r]
                              },
                              setSelectedItem: c => i(c.id)
                          })]
                      }), n.jsx(R, {
                          onClick: () => l(a, r),
                          children: "Start stream"
                      })]
                  }), n.jsxs("div", {
                      className: "flex-1",
                      children: [n.jsx(Ve, {
                          children: "Preset tests"
                      }), n.jsxs("div", {
                          className: "grid grid-cols-[1fr,1fr] gap-2",
                          children: [n.jsx(R, {
                              onClick: () => l(Cs.hls, "hls"),
                              children: "HLS test"
                          }), n.jsx(R, {
                              onClick: () => l(Cs.mp4, "mp4"),
                              children: "MP4 test"
                          })]
                      })]
                  })]
              })
          })
      }) : null, e === P.PLAYBACK_ERROR ? n.jsx(Xc, {}) : null]
  })
}

function Cm() {
  const {
      t: e
  } = C();
  return n.jsxs("div", {
      className: "relative flex flex-1 flex-col",
      children: [n.jsx(fe, {
          children: n.jsx("title", {
              children: e("notFound.badge")
          })
      }), n.jsx(Cn, {}), n.jsx("div", {
          className: "flex h-full flex-1 flex-col items-center justify-center p-5 text-center",
          children: n.jsx(kn, {
              children: n.jsxs(wn, {
                  children: [n.jsx(jn, {
                      icon: j.EYE_SLASH,
                      children: e("notFound.badge")
                  }), n.jsx(Ve, {
                      children: e("notFound.title")
                  }), n.jsx(Y, {
                      children: e("notFound.message")
                  }), n.jsx(R, {
                      href: "/",
                      theme: "purple",
                      padding: "md:px-12 p-2.5",
                      className: "mt-6",
                      children: e("notFound.goHome")
                  })]
              })
          })
      })]
  })
}

function Em() {
  return n.jsx(Cm, {})
}

function Im(e, t) {
  const [s, r] = d.useState(e);
  return d.useEffect(() => {
      const i = setTimeout(() => {
          r(e)
      }, t);
      return () => {
          clearTimeout(i)
      }
  }, [e, t]), s
}

function Is(e) {
  return e ? decodeURIComponent(e) : ""
}

function Lm() {
  const e = K(),
      t = cn(),
      [s, r] = d.useState(Is(t.query));
  d.useEffect(() => {
      r(Is(t.query))
  }, [t.query]);
  const i = function(o) {
      let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (r(o), !!l) {
          if (o.length === 0) {
              e("/", {
                  replace: !0
              });
              return
          }
          e(Li("/browse/:query", {
              query: o
          }), {
              replace: !0
          })
      }
  };
  return [s, i, o => {
      i(o ?? s, !0)
  }]
}

function Tm(e) {
  return n.jsxs(Nr, {
      children: [n.jsx(Cn, {
          bg: e.showBg
      }), e.children]
  })
}

function ti(e) {
  const {
      t
  } = C(), [s] = un(), r = d.useCallback(() => {
      var i;
      (i = e.onEdit) == null || i.call(e, !e.editing)
  }, [e]);
  return n.jsx("button", {
      type: "button",
      onClick: r,
      className: "flex h-12 items-center overflow-hidden rounded-full bg-background-secondary px-4 py-2 text-white transition-[background-color,transform] hover:bg-background-secondaryHover active:scale-105",
      children: n.jsx("span", {
          ref: s,
          children: e.editing ? n.jsx("span", {
              className: "mx-4 whitespace-nowrap",
              children: t("home.mediaList.stopEditing")
          }) : n.jsx(I, {
              icon: j.EDIT
          })
      })
  })
}

function An(e) {
  return n.jsx("div", {
      className: e.className,
      children: n.jsxs("div", {
          className: "mb-5 flex items-center",
          children: [n.jsxs("p", {
              className: "flex flex-1 items-center font-bold uppercase text-type-text",
              children: [e.icon ? n.jsx("span", {
                  className: "mr-2 text-xl",
                  children: n.jsx(I, {
                      icon: e.icon
                  })
              }) : null, e.title]
          }), e.children]
      })
  })
}
const _n = d.forwardRef((e, t) => n.jsx("div", {
      className: "grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4",
      ref: t,
      children: e.children
  })),
  Ls = {
      duration: 0,
      watched: 0
  };

function Rm(e, t) {
  return e - t < 60 * 2
}

function ni(e, t) {
  return t < 20
}

function Pm(e, t) {
  return !(ni(e, t) || Rm(e, t))
}

function si(e) {
  var r, i;
  if (e.type !== "show") return {
      show: Pm(((r = e.progress) == null ? void 0 : r.duration) ?? 0, ((i = e.progress) == null ? void 0 : i.watched) ?? 0),
      progress: e.progress ?? Ls
  };
  const t = Object.values(e.episodes).sort((a, o) => o.updatedAt - a.updatedAt).filter(a => !ni(a.progress.duration, a.progress.watched))[0],
      s = e.seasons[t == null ? void 0 : t.seasonId];
  return !t || !s ? {
      show: !1,
      progress: Ls
  } : {
      season: s,
      episode: t,
      show: !0,
      progress: t.progress
  }
}

function Am(e) {
  return n.jsx("p", {
      className: `font-semibold text-type-secondary ${e.className||""}`,
      children: e.content.map((t, s) => n.jsxs("span", {
          children: [s !== 0 ? n.jsx("span", {
              className: "mx-[0.6em] text-[1em]",
              children: "●"
          }) : null, t]
      }, t))
  })
}

function _m(e) {
  let {
      media: t,
      linkable: s,
      series: r,
      percentage: i,
      closable: a,
      onClose: o
  } = e;
  const {
      t: l
  } = C(), c = `${Math.round(i??0).toFixed(0)}%`, u = s && !a, m = [l(`media.types.${t.type}`)];
  return t.year && m.push(t.year.toFixed()), n.jsxs(se.Base, {
      className: `group -m-3 mb-2 rounded-xl bg-background-main transition-colors duration-100 focus:relative focus:z-10 ${u?"hover:bg-mediaCard-hoverBackground tabbable":""}`,
      tabIndex: u ? 0 : -1,
      onKeyUp: b => b.key === "Enter" && b.currentTarget.click(),
      children: [n.jsx(se.Light, {
          flareSize: 300,
          cssColorVar: "--colors-mediaCard-hoverAccent",
          backgroundClass: "bg-mediaCard-hoverBackground duration-100",
          className: S({
              "rounded-xl bg-background-main group-hover:opacity-100": u
          })
      }), n.jsxs(se.Child, {
          className: `pointer-events-auto relative mb-2 p-3 transition-transform duration-100 ${u?"group-hover:scale-95":""}`,
          children: [n.jsxs("div", {
              className: S("relative mb-4 pb-[150%] w-full overflow-hidden rounded-xl bg-mediaCard-hoverBackground bg-cover bg-center transition-[border-radius] duration-100", {
                  "group-hover:rounded-lg": !a
              }),
              style: {
                  backgroundImage: t.poster ? `url(${t.poster})` : void 0
              },
              children: [r ? n.jsx("div", {
                  className: ["absolute right-2 top-2 rounded-md bg-mediaCard-badge px-2 py-1 transition-colors"].join(" "),
                  children: n.jsx("p", {
                      className: ["text-center text-xs font-bold text-mediaCard-badgeText transition-colors", a ? "" : "group-hover:text-white"].join(" "),
                      children: l("media.episodeDisplay", {
                          season: r.season || 1,
                          episode: r.episode
                      })
                  })
              }) : null, i !== void 0 ? n.jsxs(n.Fragment, {
                  children: [n.jsx("div", {
                      className: `absolute inset-x-0 -bottom-px pb-1 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${u?"group-hover:from-mediaCard-hoverShadow":""}`
                  }), n.jsx("div", {
                      className: `absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-mediaCard-shadow to-transparent transition-colors ${u?"group-hover:from-mediaCard-hoverShadow":""}`
                  }), n.jsx("div", {
                      className: "absolute inset-x-0 bottom-0 p-3",
                      children: n.jsx("div", {
                          className: "relative h-1 overflow-hidden rounded-full bg-mediaCard-barColor",
                          children: n.jsx("div", {
                              className: "absolute inset-y-0 left-0 rounded-full bg-mediaCard-barFillColor",
                              style: {
                                  width: c
                              }
                          })
                      })
                  })]
              }) : null, n.jsx("div", {
                  className: `absolute inset-0 flex items-center justify-center bg-mediaCard-badge bg-opacity-80 transition-opacity duration-200 ${a?"opacity-100":"pointer-events-none opacity-0"}`,
                  children: n.jsx(ft, {
                      clickable: !0,
                      className: "text-2xl text-mediaCard-badgeText",
                      onClick: () => a && (o == null ? void 0 : o()),
                      icon: j.X
                  })
              })]
          }), n.jsx("h1", {
              className: "mb-1 line-clamp-3 max-h-[4.5rem] text-ellipsis break-words font-bold text-white",
              children: n.jsx("span", {
                  children: t.title
              })
          }), n.jsx(Am, {
              className: "text-xs",
              content: m
          })]
      })]
  })
}

function Om(e) {
  const t = n.jsx(_m, {
          ...e
      }),
      s = e.linkable && !e.closable;
  let r = s ? `/media/${encodeURIComponent(Ao(e.media))}` : "#";
  return s && e.series && (e.series.season === 0 && !e.series.episodeId ? r += `/${encodeURIComponent(e.series.seasonId)}` : r += `/${encodeURIComponent(e.series.seasonId)}/${encodeURIComponent(e.series.episodeId)}`), e.linkable ? n.jsx(bt, {
      to: r,
      tabIndex: -1,
      className: S("tabbable", e.closable ? "hover:cursor-default" : ""),
      children: t
  }) : n.jsx("span", {
      children: t
  })
}

function Mm(e) {
  var t, s, r, i;
  if (!(!e || !e.episode || !e.season)) return {
      episode: (t = e.episode) == null ? void 0 : t.number,
      season: (s = e.season) == null ? void 0 : s.number,
      episodeId: (r = e.episode) == null ? void 0 : r.id,
      seasonId: (i = e.season) == null ? void 0 : i.id
  }
}

function On(e) {
  const t = G(a => a.items),
      s = d.useMemo(() => t[e.media.id], [t, e.media]),
      r = d.useMemo(() => s ? si(s) : null, [s]),
      i = r != null && r.show ? r.progress.watched / r.progress.duration * 100 : void 0;
  return n.jsx(Om, {
      media: e.media,
      series: Mm(r),
      linkable: !0,
      percentage: i,
      onClose: e.onClose,
      closable: e.closable
  })
}

function Dm() {
  const {
      t: e
  } = C(), t = G(c => c.items), s = z(c => c.bookmarks), r = z(c => c.removeBookmark), [i, a] = d.useState(!1), [o] = un(), l = d.useMemo(() => {
      let c = [];
      return Object.entries(s).forEach(u => {
          c.push({
              id: u[0],
              ...u[1]
          })
      }), c = c.sort((u, m) => {
          const b = s[u.id],
              g = s[m.id],
              h = t[u.id],
              f = t[m.id],
              y = Math.max(b.updatedAt, (h == null ? void 0 : h.updatedAt) ?? 0);
          return Math.max(g.updatedAt, (f == null ? void 0 : f.updatedAt) ?? 0) - y
      }), c
  }, [s, t]);
  return l.length === 0 ? null : n.jsxs("div", {
      children: [n.jsx(An, {
          title: e("home.bookmarks.sectionTitle") || "Bookmarks",
          icon: j.BOOKMARK,
          children: n.jsx(ti, {
              editing: i,
              onEdit: a
          })
      }), n.jsx(_n, {
          ref: o,
          children: l.map(c => n.jsx(On, {
              media: c,
              closable: i,
              onClose: () => r(c.id)
          }, c.id))
      })]
  })
}
const Bm = d.forwardRef((e, t) => {
  const [s, r] = d.useState(!1);

  function i(a) {
      e.onChange(a, !1)
  }
  return n.jsxs(se.Base, {
      className: S({
          "hover:flare-enabled group flex flex-col rounded-[28px] transition-colors sm:flex-row sm:items-center relative": !0,
          "bg-search-background": !s,
          "bg-search-focused": s
      }),
      children: [n.jsx(se.Light, {
          flareSize: 400,
          enabled: s,
          className: "rounded-[28px]",
          backgroundClass: S({
              "transition-colors": !0,
              "bg-search-background": !s,
              "bg-search-focused": s
          })
      }), n.jsxs(se.Child, {
          className: "flex flex-1 flex-col",
          children: [n.jsx("div", {
              className: "pointer-events-none absolute bottom-0 left-5 top-0 flex max-h-14 items-center text-search-icon",
              children: n.jsx(I, {
                  icon: j.SEARCH
              })
          }), n.jsx(In, {
              ref: t,
              onUnFocus: () => {
                  r(!1), e.onUnFocus()
              },
              onFocus: () => r(!0),
              onChange: a => i(a),
              value: e.value,
              className: "w-full flex-1 bg-transparent px-4 py-4 pl-12 text-search-text placeholder-search-placeholder focus:outline-none sm:py-4 sm:pr-2",
              placeholder: e.placeholder
          }), e.value.length > 0 && n.jsx("div", {
              onClick: () => {
                  var a;
                  e.onUnFocus(""), t && typeof t != "function" && ((a = t.current) == null || a.focus())
              },
              className: "cursor-pointer hover:text-white  absolute bottom-0 right-2 top-0 flex justify-center my-auto h-10 w-10 items-center hover:bg-search-hoverBackground active:scale-110 text-search-icon rounded-full transition-[transform,background-color] duration-200",
              children: n.jsx(I, {
                  icon: j.X,
                  className: "transition-colors duration-200"
              })
          })]
      })]
  })
});

function Fm(e) {
  d.useEffect(() => {
      const t = s => {
          var r;
          if (s.key === "/") {
              if (document.activeElement && document.activeElement.tagName.toLowerCase() === "input") return;
              s.preventDefault(), (r = e.current) == null || r.focus()
          }
      };
      return window.addEventListener("keydown", t), () => {
          window.removeEventListener("keydown", t)
      }
  }, [e])
}

function Um(e) {
  return n.jsx("h1", {
      className: `text-2xl font-bold text-white sm:text-3xl md:text-4xl ${e.className??""}`,
      children: e.children
  })
}
const $m = () => Math.floor(Math.random() * 10) === 0;

function Vm() {
  const {
      t: e
  } = C(), t = d.useMemo(() => $m(), []), s = d.useMemo(() => Math.random(), []);
  return {
      t: d.useCallback(i => {
          const a = e(`${i}.default`) ?? "";
          if (!t) return a;
          const o = e(`${i}.extra`, {
              returnObjects: !0,
              defaultValue: a
          });
          return Array.isArray(o) ? o.length === 0 ? a : o[Math.floor(s * o.length)] : typeof o == "string" ? o : a
      }, [e, s, t])
  }
}

function Hm(e) {
  const t = e.getHours();
  return t < 5 ? "night" : t < 12 ? "morning" : t < 19 ? "day" : "night"
}

function Wm(e) {
  let {
      setIsSticky: t,
      searchParams: s
  } = e;
  const {
      t: r
  } = Vm(), {
      t: i
  } = C(), [a, o, l] = s, [, c] = d.useState(!1), u = It(), m = d.useCallback(w => {
      c(w), t(w)
  }, [c, t]), {
      width: b
  } = Fi(), g = 16, [h, f] = d.useState(g);
  d.useEffect(() => {
      b > 1200 ? f(g) : f(g + 60)
  }, [b]);
  const y = Hm(new Date),
      p = r(`home.titles.${y}`),
      v = d.useRef(null);
  return Fm(v), n.jsx(Et, {
      children: n.jsxs("div", {
          className: "mt-44 space-y-16 text-center",
          children: [n.jsx("div", {
              className: "relative z-10 mb-16",
              children: n.jsx(Um, {
                  className: "mx-auto max-w-md",
                  children: p
              })
          }), n.jsx("div", {
              className: "relative h-20 z-30",
              children: n.jsx(Ui, {
                  topOffset: h * -1 + u,
                  stickyStyle: {
                      paddingTop: `${h+u}px`
                  },
                  onFixedToggle: m,
                  children: n.jsx(Bm, {
                      ref: v,
                      onChange: o,
                      value: a,
                      onUnFocus: l,
                      placeholder: i("home.search.placeholder") ?? ""
                  })
              })
          })]
      })
  })
}

function Gm() {
  const {
      t: e
  } = C(), t = z(c => c.bookmarks), s = G(c => c.items), r = G(c => c.removeItem), [i, a] = d.useState(!1), [o] = un(), l = d.useMemo(() => {
      let c = [];
      return Object.entries(s).filter(u => si(u[1]).show).sort((u, m) => m[1].updatedAt - u[1].updatedAt).forEach(u => {
          c.push({
              id: u[0],
              ...u[1]
          })
      }), c = c.filter(u => !!!t[u.id]), c
  }, [s, t]);
  return l.length === 0 ? null : n.jsxs("div", {
      children: [n.jsx(An, {
          title: e("home.continueWatching.sectionTitle"),
          icon: j.CLOCK,
          children: n.jsx(ti, {
              editing: i,
              onEdit: a
          })
      }), n.jsx(_n, {
          ref: o,
          children: l.map(c => n.jsx(On, {
              media: c,
              closable: i,
              onClose: () => r(c.id)
          }, c.id))
      })]
  })
}

function ri() {
  const {
      t: e
  } = C();
  return n.jsx(Re, {
      className: "mb-24 mt-40",
      text: e("home.search.loading") ?? void 0
  })
}

function Ts(e) {
  const {
      t
  } = C(), s = e.failed ? j.WARNING : j.EYE_SLASH;
  return n.jsxs("div", {
      className: "mb-24 mt-40  flex flex-col items-center justify-center space-y-3 text-center",
      children: [n.jsx(ft, {
          icon: s,
          className: `text-xl ${e.failed?"text-red-400":"text-type-logo"}`
      }), e.failed ? null : n.jsx("div", {
          children: (e.results ?? 0) > 0 ? n.jsx("p", {
              children: t("home.search.allResults")
          }) : n.jsx("p", {
              children: t("home.search.noResults")
          })
      }), e.failed ? n.jsx("div", {
          children: n.jsx("p", {
              children: t("home.search.failed")
          })
      }) : null]
  })
}

function Km(e) {
  let {
      searchQuery: t
  } = e;
  const {
      t: s
  } = C(), [r, i] = d.useState([]), [a, o] = ie(l => dr(l));
  return d.useEffect(() => {
      async function l(c) {
          const u = await o(c);
          u && i(u)
      }
      t !== "" && l({
          searchQuery: t
      })
  }, [t, o]), a.loading ? n.jsx(ri, {}) : a.error ? n.jsx(Ts, {
      failed: !0
  }) : r ? n.jsxs("div", {
      children: [r.length > 0 ? n.jsxs("div", {
          children: [n.jsx(An, {
              title: s("home.search.sectionTitle"),
              icon: j.SEARCH
          }), n.jsx(_n, {
              children: r.map(l => n.jsx(On, {
                  media: l
              }, l.id.toString()))
          })]
      }) : null, n.jsx(Ts, {
          results: r.length
      })]
  }) : null
}

function zm(e) {
  const [t, s] = d.useState(!1), [r, i] = d.useState(!1), a = Im(e, 500);
  return d.useEffect(() => {
      s(e !== ""), i(e !== "")
  }, [e]), d.useEffect(() => {
      i(!1)
  }, [a]), {
      loading: r,
      searching: t
  }
}

function Rs() {
  const {
      t: e
  } = C(), [t, s] = d.useState(!1), r = Lm(), [i] = r, a = zm(i);
  return n.jsxs(Tm, {
      showBg: t,
      children: [n.jsxs("div", {
          className: "mb-16 sm:mb-24",
          children: [n.jsx(fe, {
              children: n.jsx("title", {
                  children: e("global.name")
              })
          }), n.jsx(Wm, {
              searchParams: r,
              setIsSticky: s
          })]
      }), n.jsx(wr, {
          children: a.loading ? n.jsx(ri, {}) : a.searching ? n.jsx(Km, {
              searchQuery: i
          }) : n.jsxs(n.Fragment, {
              children: [n.jsx(Dm, {}), n.jsx(Gm, {})]
          })
      })]
  })
}

function Ye(e) {
  return n.jsxs("div", {
      className: "flex flex-col items-center",
      children: [e.top ? n.jsx("div", {
          className: "inline-block transform translate-y-1/2",
          children: e.top
      }) : null, n.jsx("div", {
          className: "w-full rounded-xl bg-largeCard-background bg-opacity-50 max-w-[600px] mx-auto p-[3rem]",
          children: e.children
      })]
  })
}

function Xe(e) {
  return n.jsx("div", {
      className: "flex flex-col items-center text-center mb-8",
      children: n.jsxs("div", {
          className: "flex flex-col items-center text-center max-w-[318px]",
          children: [e.icon ? n.jsx("div", {
              className: "text-2xl mb-4 text-largeCard-icon",
              children: e.icon
          }) : null, n.jsx("h2", {
              className: "text-xl text-white font-bold",
              children: e.title
          }), e.children ? n.jsx("div", {
              className: "text-type-text mt-4",
              children: e.children
          }) : null]
      })
  })
}

function Je(e) {
  return n.jsx("div", {
      className: "mt-12",
      children: n.jsx("div", {
          className: S("mx-auto", {
              "flex flex-row-reverse justify-between items-center": e.splitAlign,
              "flex max-w-xs flex-col-reverse gap-3": !e.splitAlign
          }),
          children: e.children
      })
  })
}

function ii(e) {
  const t = !!e.url,
      s = !!e.to,
      r = n.jsx("span", {
          className: "group mt-1 cursor-pointer font-bold text-type-link hover:text-type-linkHover active:scale-95",
          children: e.children
      });
  return t ? n.jsx("a", {
      href: e.url,
      children: r
  }) : s ? n.jsx(bt, {
      to: e.to ?? "",
      children: r
  }) : n.jsx("span", {
      onClick: () => e.onClick && e.onClick(),
      children: r
  })
}

function He(e) {
  return n.jsxs("div", {
      className: S("space-y-3", e.className),
      children: [e.label ? n.jsx("p", {
          className: "font-bold text-white",
          children: e.label
      }) : null, n.jsx(In, {
          name: e.name,
          value: e.value,
          autoComplete: e.autoComplete,
          onChange: e.onChange,
          placeholder: e.placeholder,
          passwordToggleable: e.passwordToggleable,
          className: "w-full flex-1 bg-authentication-inputBg px-4 py-3 text-search-text focus:outline-none rounded-lg placeholder:text-gray-700"
      })]
  })
}

function Qm(e) {
  const [t, s] = d.useState(""), [r, i] = d.useState(""), {
      login: a,
      restore: o,
      importData: l
  } = Pe(), c = G(h => h.items), u = z(h => h.bookmarks), {
      t: m
  } = C(), [b, g] = ie(async (h, f) => {
      var v;
      if (!vl(h)) throw new Error(m("auth.login.validationError") ?? void 0);
      const y = f.trim();
      if (y.length === 0) throw new Error(m("auth.login.deviceLengthError") ?? void 0);
      let p;
      try {
          p = await a({
              mnemonic: h,
              userData: {
                  device: y
              }
          })
      } catch (w) {
          throw w.status === 401 ? new Error(m("auth.login.validationError") ?? void 0) : w
      }
      await l(p, c, u), await o(p), (v = e.onLogin) == null || v.call(e)
  }, [e, a, o, m]);
  return n.jsxs(Ye, {
      top: n.jsx(be, {
          backgroundClass: "bg-[#161527]"
      }),
      children: [n.jsx(Xe, {
          title: m("auth.login.title"),
          children: m("auth.login.description")
      }), n.jsxs("div", {
          className: "space-y-4",
          children: [n.jsx(He, {
              label: m("auth.login.passphraseLabel") ?? void 0,
              value: t,
              autoComplete: "username",
              name: "username",
              onChange: s,
              placeholder: m("auth.login.passphrasePlaceholder") ?? void 0,
              passwordToggleable: !0
          }), n.jsx(He, {
              label: m("auth.deviceNameLabel") ?? void 0,
              value: r,
              onChange: i,
              placeholder: m("auth.deviceNamePlaceholder") ?? void 0
          }), b.error && !b.loading ? n.jsx("p", {
              className: "text-authentication-errorText",
              children: b.error.message
          }) : null]
      }), n.jsx(Je, {
          children: n.jsx(R, {
              theme: "purple",
              loading: b.loading,
              onClick: () => g(t, r),
              children: m("auth.login.submit")
          })
      }), n.jsx("p", {
          className: "text-center mt-6",
          children: n.jsx(ue, {
              i18nKey: "auth.createAccount",
              children: n.jsx(ii, {
                  to: "/register",
                  children: "."
              })
          })
      })]
  })
}

function qm() {
  const e = K();
  return n.jsxs(Qe, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.login"
      }), n.jsx(Qm, {
          onLogin: () => {
              e("/")
          }
      })]
  })
}
const Ym = function(t) {
      const s = t.current / t.steps * 100;
      return n.jsxs("div", {
          className: t.className,
          children: [n.jsxs("p", {
              className: "mb-2",
              children: [t.current, "/", t.steps]
          }), n.jsx("div", {
              className: "max-w-full h-1 w-32 bg-onboarding-bar rounded-full overflow-hidden",
              children: n.jsx("div", {
                  className: "h-full bg-onboarding-barFilled transition-[width] rounded-full",
                  style: {
                      width: `${s.toFixed(0)}%`
                  }
              })
          })]
      })
  },
  Mn = Ym;

function Dn(e) {
  return n.jsxs("div", {
      className: "bg-background-main min-h-screen",
      style: {
          backgroundImage: "linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to) 800px)"
      },
      children: [n.jsx(ze, {}), n.jsx("div", {
          className: "fixed px-7 py-5 left-0 top-0",
          children: n.jsx(bt, {
              className: "block tabbable rounded-full text-xs ssm:text-base",
              to: "/",
              children: n.jsx(be, {
                  clickable: !0
              })
          })
      }), n.jsx("div", {
          className: "min-h-screen",
          children: e.children
      })]
  })
}
const Xm = V(ce(H(e => ({
  completed: !1,
  setCompleted(t) {
      e(s => {
          s.completed = t
      })
  }
})), {
  name: "__MW::onboarding"
}));

function Bn() {
  const [e] = Ct("redirect"), t = K(), s = Xm(a => a.setCompleted), r = d.useCallback(() => {
      t(e ?? "/")
  }, [t, e]);
  return {
      completeAndRedirect: d.useCallback(() => {
          s(!0), r()
      }, [r, s])
  }
}

function Fn() {
  const e = K(),
      t = Te();
  return d.useCallback(r => {
      e({
          pathname: r,
          search: t.search
      })
  }, [e, t])
}

function We(e) {
  return n.jsx("div", {
      className: S({
          "bg-onboarding-card duration-300 border border-onboarding-border rounded-lg p-7": !0,
          "hover:bg-onboarding-cardHover transition-colors cursor-pointer": !!e.onClick
      }, e.className),
      onClick: e.onClick,
      children: e.children
  })
}

function Ps(e) {
  return n.jsxs("div", {
      className: "grid grid-rows-[1fr,auto] h-full",
      children: [n.jsxs("div", {
          children: [n.jsx(I, {
              icon: j.RISING_STAR,
              className: S("text-4xl mb-8 block", e.colorClass)
          }), n.jsx(Hl, {
              className: S("!mt-0 !mb-0 !text-xs uppercase", e.colorClass),
              children: e.subtitle
          }), n.jsx(re, {
              className: "!mb-0 !mt-1 !text-base",
              children: e.title
          }), n.jsx(Y, {
              className: "max-w-[320px] !my-4",
              children: e.description
          })]
      }), n.jsx("div", {
          children: e.children
      })]
  })
}

function pe(e) {
  const t = K();
  return n.jsxs("a", {
      onClick: () => {
          e.to && t(e.to)
      },
      href: e.href,
      target: e.target,
      className: S("text-onboarding-link cursor-pointer inline-flex gap-2 items-center group hover:opacity-75 transition-opacity", e.className),
      rel: "noreferrer",
      children: [e.children, n.jsx(I, {
          icon: j.ARROW_RIGHT,
          className: "group-hover:translate-x-0.5 transition-transform text-xl group-active:translate-x-0"
      })]
  })
}

function As(e) {
  return n.jsx("div", {
      className: S("w-full grid justify-center", e.className),
      children: n.jsx("div", {
          className: "w-px h-10 bg-onboarding-divider"
      })
  })
}

function Jm() {
  const e = Fn(),
      t = Nn("skip"),
      {
          completeAndRedirect: s
      } = Bn(),
      {
          t: r
      } = C();
  return n.jsxs(Dn, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.onboarding"
      }), n.jsx(vr, {
          id: t.id,
          children: n.jsxs(Yl, {
              children: [n.jsx(St, {
                  className: "!mt-0 !mb-4 !text-2xl",
                  children: r("onboarding.defaultConfirm.title")
              }), n.jsx(Y, {
                  className: "!mt-1 !mb-12",
                  children: r("onboarding.defaultConfirm.description")
              }), n.jsxs("div", {
                  className: "flex flex-col-reverse gap-3 md:flex-row md:justify-between",
                  children: [n.jsx(R, {
                      theme: "secondary",
                      onClick: t.hide,
                      children: r("onboarding.defaultConfirm.cancel")
                  }), n.jsx(R, {
                      theme: "purple",
                      onClick: () => s(),
                      children: r("onboarding.defaultConfirm.confirm")
                  })]
              })]
          })
      }), n.jsxs(Sn, {
          children: [n.jsx(Mn, {
              steps: 2,
              current: 1,
              className: "mb-12"
          }), n.jsx(re, {
              className: "!mt-0 !text-3xl max-w-[435px]",
              children: r("onboarding.start.title")
          }), n.jsx(Y, {
              className: "max-w-[320px]",
              children: r("onboarding.start.explainer")
          }), n.jsxs("div", {
              className: "w-full flex flex-col md:flex-row gap-3",
              children: [n.jsx(We, {
                  onClick: () => e("/onboarding/extension"),
                  children: n.jsx(Ps, {
                      colorClass: "!text-onboarding-best",
                      title: r("onboarding.start.options.extension.title"),
                      subtitle: r("onboarding.start.options.extension.quality"),
                      description: r("onboarding.start.options.extension.description"),
                      children: n.jsx(pe, {
                          children: r("onboarding.start.options.extension.action")
                      })
                  })
              }), n.jsxs("div", {
                  className: "hidden md:grid grid-rows-[1fr,auto,1fr] justify-center gap-4",
                  children: [n.jsx(As, {
                      className: "items-end"
                  }), n.jsx("span", {
                      className: "text-xs uppercase font-bold",
                      children: "or"
                  }), n.jsx(As, {})]
              }), n.jsx(We, {
                  onClick: () => e("/onboarding/proxy"),
                  children: n.jsx(Ps, {
                      colorClass: "!text-onboarding-good",
                      title: r("onboarding.start.options.proxy.title"),
                      subtitle: r("onboarding.start.options.proxy.quality"),
                      description: r("onboarding.start.options.proxy.description"),
                      children: n.jsx(pe, {
                          children: r("onboarding.start.options.proxy.action")
                      })
                  })
              })]
          }), n.jsx("p", {
              className: "text-center hidden md:block mt-12",
              children: n.jsxs(ue, {
                  i18nKey: "onboarding.start.options.default.text",
                  children: [n.jsx("br", {}), n.jsx("a", {
                      onClick: t.show,
                      type: "button",
                      className: "text-onboarding-link hover:opacity-75 cursor-pointer"
                  })]
              })
          }), n.jsx("div", {
              className: " max-w-[300px] mx-auto md:hidden mt-12 ",
              children: n.jsx(R, {
                  className: "!text-type-text !bg-opacity-50",
                  theme: "secondary",
                  onClick: t.show,
                  children: n.jsx("span", {
                      children: n.jsxs(ue, {
                          i18nKey: "onboarding.start.options.default.text",
                          children: [n.jsx("span", {}), n.jsx("span", {})]
                      })
                  })
              })
          })]
      })]
  })
}
async function Zm() {
  const e = await Qs();
  return e ? e.success ? e.allowed ? e.hasPermission ? zs(e.version) ? "success" : "outdated" : "noperms" : "disallowed" : "failed" : "unknown"
}

function eh() {
  const {
      t: e
  } = C(), t = d.useCallback(() => {
      window.location.reload()
  }, []);
  return n.jsx(We, {
      className: "mt-4",
      children: n.jsxs("div", {
          className: "flex items-center space-x-7",
          children: [n.jsx("p", {
              className: "flex-1",
              children: e("onboarding.extension.notDetecting")
          }), n.jsx(R, {
              theme: "secondary",
              onClick: t,
              children: e("onboarding.extension.notDetectingAction")
          })]
      })
  })
}

function Un(e) {
  const {
      t
  } = C(), [s, r] = d.useState(e.status);
  d.useEffect(() => {
      e.loading || r(e.status)
  }, [e.status, e.loading]);
  let i = null;
  return (e.loading || e.status === "unknown") && (i = n.jsxs(n.Fragment, {
      children: [n.jsx(Re, {}), n.jsx("p", {
          children: t("onboarding.extension.status.loading")
      })]
  })), e.status === "disallowed" || e.status === "noperms" ? i = n.jsxs(n.Fragment, {
      children: [n.jsx("p", {
          children: t("onboarding.extension.status.disallowed")
      }), n.jsx(R, {
          onClick: () => {
              lo({
                  page: "PermissionGrant",
                  redirectUrl: window.location.href
              })
          },
          theme: "purple",
          padding: "md:px-12 p-2.5",
          className: "mt-6",
          children: t("onboarding.extension.status.disallowedAction")
      })]
  }) : e.status === "failed" ? i = n.jsx("p", {
      children: t("onboarding.extension.status.failed")
  }) : e.status === "outdated" ? i = n.jsx("p", {
      children: t("onboarding.extension.status.outdated")
  }) : e.status === "success" && (i = n.jsxs("p", {
      className: "flex items-center",
      children: [n.jsx(I, {
          icon: j.CHECKMARK,
          className: "text-type-success mr-4"
      }), t("onboarding.extension.status.success")]
  })), n.jsxs(n.Fragment, {
      children: [n.jsx(We, {
          children: n.jsx("div", {
              className: "flex py-6 flex-col space-y-2 items-center justify-center",
              children: i
          })
      }), s === "unknown" ? n.jsx(eh, {}) : null, e.showHelp ? n.jsx(We, {
          className: "mt-4",
          children: n.jsxs("div", {
              className: "flex items-center space-x-7",
              children: [n.jsx(I, {
                  icon: j.WARNING,
                  className: "text-type-danger text-2xl"
              }), n.jsx("p", {
                  className: "flex-1",
                  children: n.jsx(ue, {
                      i18nKey: "onboarding.extension.extensionHelp",
                      components: {
                          bold: n.jsx("span", {
                              className: "text-white"
                          })
                      }
                  })
              })]
          })
      }) : null]
  })
}

function th(e) {
  const {
      t
  } = C(), s = _().ONBOARDING_CHROME_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "!mt-0 !text-3xl max-w-[435px]",
          children: t("onboarding.extension.title")
      }), n.jsx(Y, {
          className: "max-w-[320px] mb-4",
          children: t("onboarding.extension.explainer")
      }), s ? n.jsx(pe, {
          href: s,
          target: "_blank",
          className: "mb-12",
          children: t("onboarding.extension.linkChrome")
      }) : null, n.jsx(Un, {
          status: e.status,
          loading: e.loading
      })]
  })
}

function nh(e) {
  const {
      t
  } = C(), s = _().ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "!mt-0 !text-3xl max-w-[435px]",
          children: t("onboarding.extension.title")
      }), n.jsx(Y, {
          className: "max-w-[320px] mb-4",
          children: t("onboarding.extension.explainer")
      }), s ? n.jsx(pe, {
          href: s,
          target: "_blank",
          className: "mb-12",
          children: t("onboarding.extension.linkFirefox")
      }) : null, n.jsx(Un, {
          status: e.status,
          loading: e.loading,
          showHelp: !0
      })]
  })
}

function sh(e) {
  const {
      t
  } = C();
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "!mt-0 !text-3xl max-w-[435px]",
          children: t("onboarding.extension.title")
      }), n.jsx(Y, {
          className: "max-w-[320px] mb-4",
          children: n.jsx(ue, {
              i18nKey: "onboarding.extension.explainerIos",
              components: {
                  bold: n.jsx("span", {
                      className: "text-white font-bold"
                  })
              }
          })
      })]
  })
}

function rh(e) {
  const {
      t
  } = C(), s = _().ONBOARDING_CHROME_EXTENSION_INSTALL_LINK, r = _().ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK;
  return n.jsxs(n.Fragment, {
      children: [n.jsx(re, {
          className: "!mt-0 !text-3xl max-w-[435px]",
          children: t("onboarding.extension.title")
      }), n.jsx(Y, {
          className: "max-w-[320px] mb-4",
          children: t("onboarding.extension.explainer")
      }), n.jsx("div", {
          className: "mb-4",
          children: s ? n.jsx(pe, {
              href: s,
              target: "_blank",
              children: t("onboarding.extension.linkChrome")
          }) : null
      }), n.jsx("div", {
          className: "mb-12",
          children: r ? n.jsx(pe, {
              href: r,
              target: "_blank",
              children: t("onboarding.extension.linkFirefox")
          }) : null
      }), n.jsx(Un, {
          status: e.status,
          loading: e.loading,
          showHelp: !0
      })]
  })
}

function ih() {
  const {
      t: e
  } = C(), t = Fn(), {
      completeAndRedirect: s
  } = Bn(), r = d.useMemo(() => Jc(), []), [{
      loading: i,
      value: a
  }, o] = ie(async function() {
      let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      const m = await Zm();
      return m === "success" && u && s(), m
  }, [s]);
  dn(o, 1e3);
  const c = {
      chrome: th,
      firefox: nh,
      ios: sh,
      unknown: rh
  } [r];
  return n.jsxs(Dn, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.onboarding"
      }), n.jsxs(Sn, {
          children: [n.jsx(Mn, {
              steps: 2,
              current: 2,
              className: "mb-12"
          }), n.jsx(c, {
              loading: i,
              status: a ?? "unknown"
          }), n.jsxs("div", {
              className: "flex justify-between items-center mt-8",
              children: [n.jsx(R, {
                  onClick: () => t("/onboarding"),
                  theme: "secondary",
                  children: e("onboarding.extension.back")
              }), a === "success" ? n.jsx(R, {
                  onClick: () => o(!0),
                  theme: "purple",
                  children: e("onboarding.extension.submit")
              }) : null]
          })]
      })]
  })
}

function ah(e) {
  return n.jsxs("p", {
      className: S("inline-flex items-center text-type-danger", e.className),
      children: [n.jsx(I, {
          icon: j.WARNING,
          className: "text-xl mr-4"
      }), e.children]
  })
}
const _s = "https://postman-echo.com/get";

function oh() {
  const {
      t: e
  } = C(), t = Fn(), {
      completeAndRedirect: s
  } = Bn(), [r, i] = d.useState(""), a = F(g => g.setProxySet), o = _().ONBOARDING_PROXY_INSTALL_LINK, l = ge(), c = F(g => g.account), [{
      loading: u,
      error: m
  }, b] = ie(async () => {
      if (!r.startsWith("http")) throw new Error("onboarding.proxy.input.errorInvalidUrl");
      try {
          if ((await xn(r, _s, {})).url !== _s) throw new Error("onboarding.proxy.input.errorNotProxy");
          a([r]), c && await yn(l, c, {
              proxyUrls: [r]
          }), s()
      } catch {
          throw new Error("onboarding.proxy.input.errorConnection")
      }
  }, [r, s, a]);
  return n.jsxs(Dn, {
      children: [n.jsx(ye, {
          subpage: !0,
          k: "global.pages.onboarding"
      }), n.jsxs(Sn, {
          children: [n.jsx(Mn, {
              steps: 2,
              current: 2,
              className: "mb-12"
          }), n.jsx(re, {
              className: "!mt-0 !text-3xl max-w-[435px]",
              children: e("onboarding.proxy.title")
          }), n.jsx(Y, {
              className: "max-w-[320px] !mb-5",
              children: e("onboarding.proxy.explainer")
          }), o ? n.jsx(pe, {
              href: o,
              target: "_blank",
              className: "mb-12",
              children: e("onboarding.proxy.link")
          }) : null, n.jsxs("div", {
              className: "w-[400px] max-w-full  mt-14 mb-28",
              children: [n.jsx(He, {
                  label: e("onboarding.proxy.input.label"),
                  value: r,
                  onChange: i,
                  placeholder: e("onboarding.proxy.input.placeholder"),
                  className: "mb-4"
              }), m ? n.jsx(ah, {
                  children: e(m.message)
              }) : null]
          }), n.jsx(Tt, {}), n.jsxs("div", {
              className: "flex justify-between",
              children: [n.jsx(R, {
                  theme: "secondary",
                  onClick: () => t("/onboarding"),
                  children: e("onboarding.proxy.back")
              }), n.jsx(R, {
                  theme: "purple",
                  loading: u,
                  onClick: b,
                  children: e("onboarding.proxy.submit")
              })]
          })]
      })]
  })
}
const ai = ["#0A54FF", "#CF2E68", "#F9DD7F", "#7652DD", "#2ECFA8"],
  Os = ai[0],
  lh = function(t) {
      return n.jsxs("div", {
          className: "space-y-3",
          children: [t.label ? n.jsx("p", {
              className: "font-bold text-white",
              children: t.label
          }) : null, n.jsx("div", {
              className: "flex gap-3",
              children: ai.map(s => n.jsx("button", {
                  type: "button",
                  tabIndex: 0,
                  className: S("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "border-white" : "border-transparent"),
                  onClick: () => t.onInput(s),
                  style: {
                      backgroundColor: s
                  },
                  children: t.value === s ? n.jsx(I, {
                      icon: j.CHECKMARK
                  }) : null
              }, s))
          })]
      })
  },
  Ms = lh,
  oi = [Me.USER_GROUP, Me.COUCH, Me.MOBILE, Me.TICKET, Me.HANDCUFFS],
  ch = oi[0],
  uh = function(t) {
      return n.jsxs("div", {
          className: "space-y-3",
          children: [t.label ? n.jsx("p", {
              className: "font-bold text-white",
              children: t.label
          }) : null, n.jsx("div", {
              className: "flex gap-3",
              children: oi.map(s => n.jsx("button", {
                  type: "button",
                  tabIndex: 0,
                  className: S("w-full h-10 rounded flex justify-center items-center text-white pointer border-2 border-opacity-10 cursor-pointer", t.value === s ? "bg-buttons-purple border-white" : "bg-authentication-inputBg border-transparent"),
                  onClick: () => t.onInput(s),
                  children: n.jsx(Hs, {
                      className: "text-xl",
                      icon: s
                  })
              }, s))
          })]
      })
  },
  dh = uh;

function mh(e) {
  const [t, s] = d.useState(""), [r, i] = d.useState(Os), [a, o] = d.useState(Os), [l, c] = d.useState(ch), {
      t: u
  } = C(), [m, b] = d.useState(!1), g = d.useCallback(() => {
      var f;
      b(!1);
      const h = t.trim();
      if (h.length === 0) {
          b(!0);
          return
      }(f = e.onNext) == null || f.call(e, {
          device: h,
          profile: {
              colorA: r,
              colorB: a,
              icon: l
          }
      })
  }, [t, e, r, a, l]);
  return n.jsxs(Ye, {
      children: [n.jsx(Xe, {
          icon: n.jsx(Sr, {
              profile: {
                  colorA: r,
                  colorB: a,
                  icon: l
              },
              iconClass: "text-3xl",
              sizeClass: "w-16 h-16"
          }),
          title: u("auth.register.information.title") ?? void 0,
          children: u("auth.register.information.header")
      }), n.jsxs("div", {
          className: "space-y-6",
          children: [n.jsx(He, {
              label: u("auth.deviceNameLabel") ?? void 0,
              value: t,
              onChange: s,
              placeholder: u("auth.deviceNamePlaceholder") ?? void 0
          }), n.jsx(Ms, {
              label: u("auth.register.information.color1"),
              value: r,
              onInput: i
          }), n.jsx(Ms, {
              label: u("auth.register.information.color2"),
              value: a,
              onInput: o
          }), n.jsx(dh, {
              label: u("auth.register.information.icon"),
              value: l,
              onInput: c
          }), m ? n.jsx("p", {
              className: "text-authentication-errorText",
              children: u("auth.login.deviceLengthError")
          }) : null]
      }), n.jsx(Je, {
          children: n.jsx(R, {
              theme: "purple",
              onClick: () => g(),
              children: u("auth.register.information.next")
          })
      })]
  })
}
const hh = function(t) {
      const {
          t: s
      } = C(), r = t.mnemonic.split(" "), [, i] = $s(), [a, o] = d.useState(!1), l = $i(), c = d.useRef();

      function u() {
          i(t.mnemonic), o(!0), c.current && clearTimeout(c.current), c.current = setTimeout(() => l() && o(!1), 500)
      }
      return n.jsxs("div", {
          className: "rounded-lg border border-authentication-border/50 ",
          children: [n.jsxs("div", {
              className: "px-4 py-2 flex justify-between border-b border-authentication-border/50",
              children: [n.jsx("p", {
                  className: "font-bold text-sm text-white",
                  children: s("auth.generate.passphraseFrameLabel")
              }), n.jsxs("button", {
                  type: "button",
                  className: "text-authentication-copyText hover:text-authentication-copyTextHover transition-colors flex gap-2 items-center cursor-pointer",
                  onClick: () => u(),
                  children: [n.jsx(I, {
                      icon: a ? j.CHECKMARK : j.COPY,
                      className: a ? "text-xs" : ""
                  }), n.jsx("span", {
                      className: "text-sm",
                      children: s("actions.copy")
                  })]
              })]
          }), n.jsx("div", {
              className: "px-4 py-4 grid grid-cols-3 text-sm sm:text-base sm:grid-cols-4 gap-2",
              children: r.map((m, b) => n.jsx("div", {
                  className: "rounded-md py-2 bg-authentication-wordBackground text-white font-medium text-center",
                  children: m
              }, b))
          })]
      })
  },
  fh = hh;

function gh(e) {
  const t = d.useMemo(() => jl(), []),
      {
          t: s
      } = C();
  return n.jsxs(Ye, {
      children: [n.jsx(Xe, {
          title: s("auth.generate.title"),
          icon: n.jsx(I, {
              icon: j.USER
          }),
          children: s("auth.generate.description")
      }), n.jsx(fh, {
          mnemonic: t
      }), n.jsx(Je, {
          children: n.jsx(R, {
              theme: "purple",
              onClick: () => {
                  var r;
                  return (r = e.onNext) == null ? void 0 : r.call(e, t)
              },
              children: s("auth.generate.next")
          })
      })]
  })
}

function xh(e) {
  const t = K(),
      s = ge(),
      r = d.useMemo(() => new URL(s).hostname, [s]),
      i = pt(() => Lr(s), [s]),
      {
          t: a
      } = C();
  let o = n.jsxs(n.Fragment, {
      children: [n.jsx("h3", {
          className: "text-white font-bold text-lg",
          children: a("auth.trust.failed.title")
      }), n.jsx("p", {
          children: a("auth.trust.failed.text")
      })]
  });
  return i.loading && (o = n.jsx(Re, {})), i.value && (o = n.jsxs(n.Fragment, {
      children: [n.jsx("h3", {
          className: "text-white font-bold text-lg",
          children: i.value.name
      }), i.value.description ? n.jsx("p", {
          className: "text-center",
          children: i.value.description
      }) : null]
  })), n.jsxs(Ye, {
      children: [n.jsx(Xe, {
          title: a("auth.trust.title"),
          icon: n.jsx(I, {
              icon: j.CIRCLE_EXCLAMATION
          }),
          children: n.jsx(ue, {
              i18nKey: "auth.trust.host",
              values: {
                  hostname: r
              },
              children: n.jsx("span", {
                  className: "text-white"
              })
          })
      }), n.jsx("div", {
          className: "border border-authentication-border rounded-xl px-4 py-8 flex flex-col items-center space-y-2 my-8",
          children: o
      }), n.jsxs(Je, {
          children: [n.jsx(R, {
              theme: "secondary",
              onClick: () => t("/"),
              children: a("auth.trust.no")
          }), n.jsx(R, {
              theme: "purple",
              onClick: () => {
                  var l;
                  return i.value && ((l = e.onNext) == null ? void 0 : l.call(e, i.value))
              },
              children: a("auth.trust.yes")
          })]
      }), n.jsx("p", {
          className: "text-center mt-6",
          children: n.jsx(ue, {
              i18nKey: "auth.hasAccount",
              children: n.jsx(ii, {
                  to: "/login",
                  children: "."
              })
          })
      })]
  })
}

function ph(e) {
  const [t, s] = d.useState(""), {
      register: r,
      restore: i,
      importData: a
  } = Pe(), o = G(p => p.items), l = z(p => p.bookmarks), c = Ke(p => p.language), u = B(p => p.lastSelectedLanguage), m = vn(p => p.theme), b = ge(), {
      t: g
  } = C(), {
      executeRecaptcha: h
  } = Vi(), [f, y] = ie(async p => {
      var T;
      if (!e.mnemonic || !e.userData) throw new Error(g("auth.verify.invalidData") ?? void 0);
      let v;
      if (e.hasCaptcha && (v = h ? await h() : void 0, !v)) throw new Error(g("auth.verify.recaptchaFailed") ?? void 0);
      if (p !== e.mnemonic) throw new Error(g("auth.verify.noMatch") ?? void 0);
      const w = await r({
          mnemonic: p,
          userData: e.userData,
          recaptchaToken: v
      });
      await a(w, o, l), await yn(b, w, {
          applicationLanguage: c,
          defaultSubtitleLanguage: u ?? void 0,
          applicationTheme: m ?? void 0,
          proxyUrls: void 0
      }), await i(w), (T = e.onNext) == null || T.call(e)
  }, [e, r, i]);
  return n.jsx(Ye, {
      children: n.jsxs("form", {
          children: [n.jsx(Xe, {
              icon: n.jsx(I, {
                  icon: j.CIRCLE_CHECK
              }),
              title: g("auth.verify.title"),
              children: g("auth.verify.description")
          }), n.jsx(He, {
              label: g("auth.verify.passphraseLabel") ?? void 0,
              autoComplete: "username",
              name: "username",
              value: t,
              onChange: s,
              passwordToggleable: !0
          }), f.error ? n.jsx("p", {
              className: "mt-3 text-authentication-errorText",
              children: f.error.message
          }) : null, n.jsx(Je, {
              children: n.jsx(R, {
                  theme: "purple",
                  loading: f.loading,
                  onClick: () => y(t),
                  children: g("auth.verify.register")
              })
          })]
      })
  })
}

function bh(e) {
  return e.siteKey ? n.jsx(Hi, {
      reCaptchaKey: e.siteKey,
      children: e.children
  }) : e.children
}

function yh() {
  const e = K(),
      [t, s] = d.useState(0),
      [r, i] = d.useState(null),
      [a, o] = d.useState(null),
      [l, c] = d.useState(null);
  return n.jsx(bh, {
      siteKey: l,
      children: n.jsxs(Qe, {
          children: [n.jsx(ye, {
              subpage: !0,
              k: "global.pages.register"
          }), t === 0 ? n.jsx(xh, {
              onNext: u => {
                  c(u.hasCaptcha && u.captchaClientKey ? u.captchaClientKey : null), s(1)
              }
          }) : null, t === 1 ? n.jsx(gh, {
              onNext: u => {
                  i(u), s(2)
              }
          }) : null, t === 2 ? n.jsx(mh, {
              onNext: u => {
                  o(u), s(3)
              }
          }) : null, t === 3 ? n.jsx(ph, {
              hasCaptcha: !!l,
              mnemonic: r,
              userData: a,
              onNext: () => {
                  e("/")
              }
          }) : null]
      })
  })
}

function vh(e) {
  const t = It(),
      s = le(r => r.location);
  return n.jsxs("div", {
      children: [n.jsx("div", {
          className: "fixed inset-x-0 z-[1000]",
          children: n.jsx(ei, {})
      }), n.jsx("div", {
          style: {
              paddingTop: s === null ? `${t}px` : "0px"
          },
          className: "flex min-h-screen flex-col",
          children: e.children
      })]
  })
}
const li = V(H(e => ({
  routes: [],
  registerRoute(t) {
      e(s => {
          s.routes.push(t)
      })
  }
})));

function jh() {
  const e = Te(),
      t = li(s => s.registerRoute);
  d.useEffect(() => {
      t({
          path: e.pathname
      })
  }, [e.pathname, t]), Vs(() => {
      t({
          path: e.pathname
      })
  })
}

function sf() {
  const e = li(r => r.routes),
      t = Te();
  return d.useMemo(() => {
      const r = [...e];
      r.reverse();
      const i = r.find(a => !a.path.startsWith("/media") && t.pathname !== a.path && !a.path.startsWith("/s/") && !a.path.startsWith("/onboarding"));
      return (i == null ? void 0 : i.path) ?? "/"
  }, [e, t])
}
const wh = d.lazy(() => Lt(() => import("./DeveloperPage-B16OoFsL.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
d.lazy(() => Lt(() => import("./TestView-CzqvQ4Zs.js"), __vite__mapDeps([10, 1, 2, 3, 4, 8, 5, 6, 7, 9])));
const ln = Us(() => Lt(() => import("./PlayerView-BTuYWLfO.js"), __vite__mapDeps([11, 1, 2, 3, 5, 6, 7, 4, 12, 8, 9]))),
  ci = Us(() => Lt(() => import("./Settings-BwDDmIRd.js"), __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 9, 12, 8])));
ln.preload();
ci.preload();

function Ds(e) {
  let {
      children: t
  } = e;
  const s = Te(),
      r = K();
  return d.useEffect(() => {
      const i = s.pathname;
      Qt(i) && Uo(s.pathname).then(a => {
          r(a ?? "/", {
              replace: !0
          })
      })
  }, [s.pathname, r]), Qt(s.pathname) ? null : t
}

function kh() {
  const {
      query: e
  } = cn(), t = K();
  return d.useEffect(() => {
      e ? Mo(e).then(s => {
          t(s ?? "/", {
              replace: !0
          })
      }) : t("/", {
          replace: !0
      })
  }, [e, t]), null
}

function Nh() {
  const {
      query: e
  } = cn(), t = K();
  return d.useEffect(() => {
      e ? t(`/browse/${e}`, {
          replace: !0
      }) : t("/", {
          replace: !0
      })
  }, [e, t]), null
}

function Sh() {
  return jh(), pc(), n.jsxs(vh, {
      children: [n.jsx(hl, {}), n.jsxs(Ti, {
          children: [n.jsx(U, {
              path: "/s/:query",
              element: n.jsx(kh, {})
          }), n.jsx(U, {
              path: "/search/:type",
              element: n.jsx(Ri, {
                  to: "/browse"
              })
          }), n.jsx(U, {
              path: "/search/:type/:query?",
              element: n.jsx(Nh, {})
          }), n.jsx(U, {
              path: "/media/:media",
              element: n.jsx(Ds, {
                  children: n.jsx(d.Suspense, {
                      fallback: null,
                      children: n.jsx(ln, {})
                  })
              })
          }), n.jsx(U, {
              path: "/media/:media/:season/:episode",
              element: n.jsx(Ds, {
                  children: n.jsx(d.Suspense, {
                      fallback: null,
                      children: n.jsx(ln, {})
                  })
              })
          }), n.jsx(U, {
              path: "/browse/:query?",
              element: n.jsx(Rs, {})
          }), n.jsx(U, {
              path: "/",
              element: n.jsx(Rs, {})
          }), n.jsx(U, {
              path: "/register",
              element: n.jsx(yh, {})
          }), n.jsx(U, {
              path: "/login",
              element: n.jsx(qm, {})
          }), n.jsx(U, {
              path: "/about",
              element: n.jsx(vc, {})
          }), n.jsx(U, {
              path: "/onboarding",
              element: n.jsx(Jm, {})
          }), n.jsx(U, {
              path: "/onboarding/extension",
              element: n.jsx(ih, {})
          }), n.jsx(U, {
              path: "/onboarding/proxy",
              element: n.jsx(oh, {})
          }), kr() ? n.jsx(U, {
              path: "/dmca",
              element: n.jsx(nc, {})
          }) : null, n.jsx(U, {
              path: "/settings",
              element: n.jsx(d.Suspense, {
                  fallback: null,
                  children: n.jsx(ci, {})
              })
          }), n.jsx(U, {
              path: "/admin",
              element: n.jsx(Sc, {})
          }), n.jsx(U, {
              path: "/dev",
              element: n.jsx(wh, {})
          }), n.jsx(U, {
              path: "/dev/video",
              element: n.jsx(Sm, {})
          }), null, n.jsx(U, {
              path: "*",
              element: n.jsx(Em, {})
          })]
      })]
  })
}
const Ch = 5 * 1e3;
async function Eh(e, t, s, r) {
  for (const i of e)
      if (t(i.id), !!r) try {
          if (i.action === "delete") {
              await bl(s, r, i.tmdbId);
              continue
          }
          if (i.action === "add") {
              await pl(s, r, {
                  meta: {
                      poster: i.poster,
                      title: i.title ?? "",
                      type: i.type ?? "",
                      year: i.year ?? NaN
                  },
                  tmdbId: i.tmdbId
              });
              continue
          }
      } catch (a) {
          console.error(`Failed to sync bookmark: ${i.tmdbId} - ${i.action}`, a)
      }
}

function Ih() {
  const e = z(r => r.clearUpdateQueue),
      t = z(r => r.removeUpdateItem),
      s = ge();
  return d.useEffect(() => {
      e()
  }, [e]), d.useEffect(() => {
      const r = setInterval(() => {
          (async () => {
              const i = z.getState(),
                  a = F.getState();
              await Eh(i.updateQueue, t, s, a.account)
          })()
      }, Ch);
      return () => {
          clearInterval(r)
      }
  }, [t, s]), null
}
const Lh = 5 * 1e3;
async function Th(e, t, s, r) {
  for (const i of e)
      if (t(i.id), !!r) try {
          if (i.action === "delete") {
              await Tl(s, r, i.tmdbId, i.seasonId, i.episodeId);
              continue
          }
          if (i.action === "upsert") {
              await Ll(s, r, El(i));
              continue
          }
      } catch (a) {
          console.error(`Failed to sync progress: ${i.tmdbId} - ${i.action}`, a)
      }
}

function Rh() {
  const e = G(r => r.clearUpdateQueue),
      t = G(r => r.removeUpdateItem),
      s = ge();
  return d.useEffect(() => {
      e()
  }, [e]), d.useEffect(() => {
      const r = setInterval(() => {
          (async () => {
              const i = G.getState(),
                  a = F.getState();
              await Th(i.updateQueue, t, s, a.account)
          })()
      }, Lh);
      return () => {
          clearInterval(r)
      }
  }, [t, s]), null
}
const Ph = 5 * 1e3;

function Ah() {
  const e = B(s => s.importSubtitleLanguage),
      t = ge();
  return d.useEffect(() => {
      const s = setInterval(() => {
          (async () => {
              const r = B.getState(),
                  i = F.getState();
              r.lastSync.lastSelectedLanguage !== r.lastSelectedLanguage && i.account && r.lastSelectedLanguage && (await yn(t, i.account, {
                  defaultSubtitleLanguage: r.lastSelectedLanguage
              }), e(r.lastSelectedLanguage))
          })()
      }, Ph);
      return () => {
          clearInterval(s)
      }
  }, [e, t]), null
}
Vd();

function ui(e) {
  const t = {
          user: "screens.loadingUser",
          lazy: "screens.loadingApp"
      },
      {
          t: s
      } = C();
  return n.jsx(Ir, {
      iconSlot: n.jsx(Re, {}),
      children: s(t[e.type] ?? "unknown.translation")
  })
}

function di(e) {
  const {
      t
  } = C(), {
      logout: s
  } = Pe(), r = F(o => o.setBackendUrl), i = d.useCallback(() => {
      r(null), location.reload()
  }, [r]), a = d.useCallback(() => {
      s().then(() => {
          location.reload()
      })
  }, [s]);
  return n.jsxs(Ir, {
      iconSlot: n.jsx(I, {
          className: "text-type-danger text-2xl",
          icon: j.WARNING
      }),
      children: [e.children, e.showResetButton ? n.jsx("div", {
          className: "mt-6",
          children: n.jsx(R, {
              theme: "secondary",
              onClick: i,
              children: t("screens.loadingUserError.reset")
          })
      }) : null, e.showLogoutButton ? n.jsx("div", {
          className: "mt-6",
          children: n.jsx(R, {
              theme: "secondary",
              onClick: a,
              children: t("screens.loadingUserError.logout")
          })
      }) : null]
  })
}

function _h() {
  const e = Vl(),
      t = _().BACKEND_URL,
      s = ge(),
      {
          t: r
      } = C(),
      i = t !== s;
  return e.loading ? n.jsx(ui, {
      type: "user"
  }) : e.error ? n.jsx(di, {
      showResetButton: i,
      showLogoutButton: !i,
      children: r(i ? "screens.loadingUserError.textWithReset" : "screens.loadingUserError.text")
  }) : n.jsx(Sh, {})
}

function Oh() {
  const e = pt(async () => {
          gr(Ke.getState().language), await Ha()
      }, []),
      {
          t
      } = C();
  return e.loading ? n.jsx(fc, {}) : e.error ? n.jsx(di, {
      children: t("screens.migration.failed")
  }) : n.jsx(_h, {})
}

function Mh(e) {
  return _().NORMAL_ROUTER ? n.jsx(Ki, {
      children: e.children
  }) : n.jsx(zi, {
      children: e.children
  })
}
const Dh = document.getElementById("root"),
  Bh = Wi(Dh);
Bh.render(n.jsx(d.StrictMode, {
  children: n.jsxs(tc, {
      children: [n.jsx(Js, {}), n.jsx(Gi, {
          children: n.jsx(d.Suspense, {
              fallback: n.jsx(ui, {
                  type: "lazy"
              }),
              children: n.jsxs(Fl, {
                  applyGlobal: !0,
                  children: [n.jsx(Rh, {}), n.jsx(Ih, {}), n.jsx(Ah, {}), n.jsx(Mh, {
                      children: n.jsx(Oh, {})
                  })]
              })
          })
      })]
  })
}));
export {
  Ms as $, Xm as A, R as B, Ct as C, Mr as D, kn as E, zr as F, sf as G, rn as H, jn as I, Zt as J, km as K, Re as L, A as M, Cn as N, P as O, Yc as P, Xc as Q, ge as R, Ul as S, Et as T, nf as U, re as V, Hl as W, vr as X, Yl as Y, Y as Z, Sr as _, Ve as a, dh as a0, Pe as a1, He as a2, St as a3, $t as a4, N as a5, nd as a6, ed as a7, bm as a8, xn as a9, ii as aa, Pn as ab, Tt as ac, pr as ad, bn as ae, Al as af, At as ag, Lr as ah, Jh as ai, Cc as aj, Zh as ak, vn as al, Ke as am, B as an, qd as ao, yn as ap, os as aq, ef as ar, tf as as, Qe as at, ye as au, wr as av, sn as b, zt as c, Xh as d, Qs as e, Yh as f, sr as g, wn as h, zs as i, lo as j, _ as k, ko as l, Zl as m, Q as n, he as o, Gt as p, nn as q, jt as r, qh as s, Wt as t, Nn as u, ze as v, Ys as w, Qh as x, zh as y, F as z
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
      __vite__mapDeps.viteFileDeps = ["assets/DeveloperPage-B16OoFsL.js", "assets/vendor-CtbUqpA0.js", "assets/auth-72H9TcpW.js", "assets/caption-parsing-BGqd6Hpv.js", "assets/react-dom-BnEYDcZu.js", "assets/Icons-XXm5y-G7.js", "assets/language-db-C33ehKO5.js", "assets/Icons-7LetCtYR.css", "assets/locales-BNmjpJ3z.js", "assets/hls-Di-l_7QN.js", "assets/TestView-CzqvQ4Zs.js", "assets/PlayerView-BTuYWLfO.js", "assets/StatusCircle-B54taPQT.js", "assets/Settings-BwDDmIRd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-CXsI4q_W.js.map