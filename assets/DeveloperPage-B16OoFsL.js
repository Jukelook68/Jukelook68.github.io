import {
    j as t
} from "./vendor-CtbUqpA0.js";
import {
    N as c,
    T as x,
    a as m
} from "./index-CXsI4q_W.js";
import {
    L as d
} from "./react-dom-BnEYDcZu.js";
import {
    I as r,
    a as s
} from "./Icons-XXm5y-G7.js";
import "./auth-72H9TcpW.js";
import "./caption-parsing-BGqd6Hpv.js";
import "./locales-BNmjpJ3z.js";
import "./hls-Di-l_7QN.js";
import "./language-db-C33ehKO5.js";

function o(e) {
    const i = e.direction || "right",
        l = !!e.url,
        a = !!e.to,
        n = t.jsxs("span", {
            className: "group mt-1 inline-flex cursor-pointer items-center space-x-1 pr-1 font-bold text-type-link hover:text-type-linkHover active:scale-95",
            children: [i === "left" ? t.jsx("span", {
                className: "text-xl transition-transform group-hover:-translate-x-1",
                children: t.jsx(r, {
                    icon: s.ARROW_LEFT
                })
            }) : null, t.jsx("span", {
                className: "flex-1",
                children: e.linkText
            }), i === "right" ? t.jsx("span", {
                className: "text-xl transition-transform group-hover:translate-x-1",
                children: t.jsx(r, {
                    icon: s.ARROW_RIGHT
                })
            }) : null]
        });
    return l ? t.jsx("a", {
        href: e.url,
        children: n
    }) : a ? t.jsx(d, {
        to: e.to,
        children: n
    }) : t.jsx("span", {
        onClick: () => e.onClick && e.onClick(),
        children: n
    })
}

function N() {
    return t.jsxs("div", {
        className: "py-48",
        children: [t.jsx(c, {}), t.jsxs(x, {
            classNames: "flex flex-col space-y-4",
            children: [t.jsx(m, {
                children: "Developer tools"
            }), t.jsx(o, {
                to: "/dev/video",
                direction: "right",
                linkText: "Video tester"
            }), t.jsx(o, {
                to: "/dev/test",
                direction: "right",
                linkText: "Test page"
            })]
        })]
    })
}
export {
    N as
    default
};
//# sourceMappingURL=DeveloperPage-B16OoFsL.js.map