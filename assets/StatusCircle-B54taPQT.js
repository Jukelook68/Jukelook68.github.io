import {
    ak as c,
    j as t,
    c as l,
    ax as d
} from "./vendor-CtbUqpA0.js";
import {
    e as x
} from "./react-dom-BnEYDcZu.js";
import {
    I as a,
    a as n
} from "./Icons-XXm5y-G7.js";
import {
    n as s
} from "./index-CXsI4q_W.js";

function r(e) {
    return e.type === "loading"
}

function h(e) {
    const [i] = c(() => ({
        percentage: r(e) ? e.percentage : 0
    }), [e]);
    return t.jsxs("div", {
        className: l({
            "p-0.5 border-current border-[3px] rounded-full h-6 w-6 relative transition-colors": !0,
            "text-video-scraping-loading": e.type === "loading",
            "text-video-scraping-noresult text-opacity-50": e.type === "waiting",
            "text-video-scraping-error bg-video-scraping-error": e.type === "error",
            "text-green-500 bg-green-500": e.type === "success",
            "text-video-scraping-noresult bg-video-scraping-noresult": e.type === "noresult"
        }, e.className),
        children: [t.jsx(s, {
            animation: "fade",
            show: r(e),
            children: t.jsx("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg",
                className: "rounded-full -rotate-90",
                children: t.jsx(x.circle, {
                    strokeWidth: "32",
                    strokeDasharray: d(i.percentage, o => `${o} 100`),
                    r: "25%",
                    cx: "50%",
                    cy: "50%",
                    fill: "transparent",
                    stroke: "currentColor",
                    className: "transition-[strokeDasharray]"
                })
            })
        }), t.jsx(s, {
            animation: "fade",
            show: e.type === "error",
            children: t.jsx(a, {
                className: "absolute inset-0 flex items-center justify-center text-background-main",
                icon: n.X
            })
        }), t.jsx(s, {
            animation: "fade",
            show: e.type === "success",
            children: t.jsx(a, {
                className: "absolute inset-0 flex items-center text-sm justify-center text-background-main",
                icon: n.CHECKMARK
            })
        }), t.jsx(s, {
            animation: "fade",
            show: e.type === "noresult",
            children: t.jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: t.jsx("div", {
                    className: "h-[3px] flex-1 mx-1 rounded-full bg-background-main"
                })
            })
        })]
    })
}
export {
    h as S
};
//# sourceMappingURL=StatusCircle-B54taPQT.js.map