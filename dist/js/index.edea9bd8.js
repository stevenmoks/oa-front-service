(function(e) {
    function t(t) {
        for (var r, a, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++) a = c[l], Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), o[a] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        p && p(t);
        while (d.length) d.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (i.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            index: 0
        },
        o = {
            index: 0
        },
        i = [];

    function c(e) {
        return s.p + "js/" + ({
            user: "user",
            fail: "fail"
        }[e] || e) + "." + {
            "chunk-1f43a9f2": "cf07db2f",
            "chunk-3001451b": "382909d6",
            user: "62d35740",
            "chunk-fbbde3a8": "c51b4d22",
            fail: "fc2cac82"
        }[e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function(e) {
        var t = [],
            n = {
                "chunk-1f43a9f2": 1,
                "chunk-3001451b": 1,
                user: 1,
                "chunk-fbbde3a8": 1,
                fail: 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
            for (var r = "css/" + ({
                    user: "user",
                    fail: "fail"
                }[e] || e) + "." + {
                    "chunk-1f43a9f2": "56cec8f7",
                    "chunk-3001451b": "3e64b5d7",
                    user: "1b8b6667",
                    "chunk-fbbde3a8": "c055273a",
                    fail: "36ecac48"
                }[e] + ".css", o = s.p + r, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
                var u = i[c],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === r || l === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
                u = d[c], l = u.getAttribute("data-href");
                if (l === r || l === o) return t()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function(t) {
                var r = t && t.target && t.target.src || o,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = r, delete a[e], p.parentNode.removeChild(p), n(i)
            }, p.href = o;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        })).then((function() {
            a[e] = 0
        })));
        var r = o[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var i = new Promise((function(t, n) {
                    r = o[e] = [t, n]
                }));
                t.push(r[2] = i);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = c(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null, clearTimeout(p);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", d.name = "ChunkLoadError", d.type = r, d.request = a, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var p = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var p = l;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "034f": function(e, t, n) {
        "use strict";
        var r = n("64a9"),
            a = n.n(r);
        a.a
    },
    "0431": function(e, t, n) {},
    "044e": function(e, t, n) {
        "use strict";
        var r = n("d533"),
            a = n.n(r);
        a.a
    },
    "0607": function(e, t, n) {
        "use strict";
        var r = n("4490"),
            a = n.n(r);
        a.a
    },
    "0f63": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("global-layout", {
                    on: {
                        dynamicRouterShow: e.dynamicRouterShow,
                        closeTabPage: e.closeTabPage
                    }
                }, [n("contextmenu", {
                    attrs: {
                        itemList: e.menuItemList,
                        visible: e.menuVisible
                    },
                    on: {
                        "update:visible": function(t) {
                            e.menuVisible = t
                        },
                        select: e.onMenuSelect
                    }
                }), e.multipage ? n("a-tabs", {
                    staticClass: "tab-layout-tabs",
                    staticStyle: {
                        height: "52px"
                    },
                    attrs: {
                        "active-key": e.activePage,
                        "hide-add": !0,
                        type: "editable-card"
                    },
                    on: {
                        change: e.changePage,
                        edit: e.editPage
                    },
                    nativeOn: {
                        contextmenu: function(t) {
                            return function(t) {
                                return e.onContextmenu(t)
                            }(t)
                        }
                    }
                }, e._l(e.pageList, (function(t) {
                    return n("a-tab-pane", {
                        key: t.fullPath,
                        attrs: {
                            id: t.fullPath
                        }
                    }, [n("span", {
                        attrs: {
                            slot: "tab",
                            pagekey: t.fullPath
                        },
                        slot: "tab"
                    }, [e._v(e._s(t.meta.title))])])
                })), 1) : e._e(), n("div", {
                    staticStyle: {
                        margin: "12px 12px 0"
                    }
                }, [n("transition", {
                    attrs: {
                        name: "page-toggle"
                    }
                }, [e.multipage ? n("keep-alive", [n("router-view")], 1) : n("router-view")], 1)], 1)], 1)
            },
            a = [],
            o = n("75fc"),
            i = (n("7514"), n("8415")),
            c = n("91ad"),
            s = n("ac0d"),
            u = n("ca00"),
            l = n("17fb"),
            d = n.n(l),
            p = "/dashboard/analysis",
            f = "/dashboard/workplace",
            m = "/account/center",
            _ = {
                "0b511f234f3847baa50106a14fff6215": "审批处理",
                b0ceb7cfb2b0487a96e03f50c413d762: "请假申请",
                "933e21cf445440abb8cfdae366082a62": "外出申请",
                "9ed5bc42eb934bbe8dac16ed1a3b103f": "加班申请",
                b0fee76c2ee84baeb9494b196b779e3e: "考勤异常",
                "3da23c7955d84465a759d0f1830a0d00": "档案及证照借阅",
                cfd4ee2d60fa48f585c157d524b0a108: "用印申请(非合同)",
                dd78c4c8a59e4ee3bd93ec011a3f6b4c: "用印申请(合同)",
                e412b58db17b4cbf8cb9833c118c2d3b: "印章借用",
                "62f7122c73c244119e5d4ec8aa170a3d": "出差申请",
                "3972c2cb5a824aaab8ef0aad3ea56e7f": "行政公告",
                c9c7e537dbb54691b4f0eff23854fdbb: "红头文件",
                ebe9412bb4f34b5c8ea3fb7c0908d315: "新闻资讯",
                "6650f6e79479489192fe469d1e3f98f3": "奖罚通报",
                "6bfb3ee6257a4066b1d26f195da83fe0": "车辆补贴"
            },
            h = {
                name: "TabLayout",
                components: {
                    GlobalLayout: i["default"],
                    Contextmenu: c["default"]
                },
                mixins: [s["a"], s["b"]],
                data: function() {
                    return {
                        pageList: [],
                        linkList: [],
                        activePage: "",
                        menuVisible: !1,
                        menuItemList: [{
                            key: "1",
                            icon: "arrow-left",
                            text: "关闭左侧"
                        }, {
                            key: "2",
                            icon: "arrow-right",
                            text: "关闭右侧"
                        }, {
                            key: "3",
                            icon: "close",
                            text: "关闭其它"
                        }]
                    }
                },
                computed: {
                    multipage: function() {
                        return !this.isMobile() && this.$store.state.app.multipage
                    }
                },
                created: function() {
                    var e = d.a.find(this.pageList, (function(e) {
                        return e.path == p
                    }));
                    null != e && "undefined" != typeof e || (this.pageList.push({
                        name: "dashboard-analysis",
                        path: p,
                        fullPath: p,
                        meta: {
                            icon: "dashboard",
                            title: "首页"
                        }
                    }), this.linkList.push(p)), e = d.a.find(this.pageList, (function(e) {
                        return e.path == m
                    })), null != e && "undefined" != typeof e || (this.pageList.push({
                        name: "account-center",
                        path: m,
                        fullPath: m,
                        meta: {
                            icon: "account",
                            title: "个人中心"
                        }
                    }), this.linkList.push(m)), e = d.a.find(this.pageList, (function(e) {
                        return e.path == f
                    })), null != e && "undefined" != typeof e || (this.pageList.push({
                        name: "dashboard-workplace",
                        path: f,
                        fullPath: f,
                        meta: {
                            icon: "dashboard",
                            title: "工作台"
                        }
                    }), this.linkList.push(f)), this.$route.fullPath != p && this.$route.fullPath != f && this.$route.fullPath != m && (this.pageList.push(this.$route), this.linkList.push(this.$route.fullPath)), this.activePage = this.$route.fullPath, this.$root.$tabs = this, this.$root.$tabs.closeTab = this.$options.methods.closeTabPage
                },
                watch: {
                    $route: function(e) {
                        if ("undefined" != typeof _[e.params.code] && "" != _[e.params.code] && null != _[e.params.code] && (e.meta.title = _[e.params.code]), this.activePage = e.fullPath, this.multipage) {
                            if (this.linkList.indexOf(e.fullPath) < 0) this.linkList.push(e.fullPath), this.pageList.push(Object.assign({}, e));
                            else if (this.linkList.indexOf(e.fullPath) >= 0) {
                                var t = this.linkList.indexOf(e.fullPath),
                                    n = this.pageList[t];
                                this.pageList.splice(t, 1, Object.assign({}, e, {
                                    meta: n.meta
                                }))
                            }
                        } else this.linkList = [e.fullPath], this.pageList = [Object.assign({}, e)]
                    },
                    activePage: function(e) {
                        var t = this.linkList.lastIndexOf(e),
                            n = this.pageList[t],
                            r = Object.assign({}, n);
                        try {
                            "" != Object(u["b"])(_[r.params.code]) && this.dynamicRouterShow(e, _[r.params.code])
                        } catch (a) {
                            console.log(a)
                        }
                        try {
                            this.$router.push(r.fullPath)
                        } catch (a) {
                            console.log(a)
                        }
                    },
                    multipage: function(e) {
                        e || (this.linkList = [this.$route.fullPath], this.pageList = [this.$route])
                    },
                    $root: function() {}
                },
                methods: {
                    changePage: function(e) {
                        this.activePage = e
                    },
                    editPage: function(e, t) {
                        this[t](e)
                    },
                    remove: function(e) {
                        if (e != p)
                            if (e != f)
                                if (e != m)
                                    if (1 !== this.pageList.length) {
                                        this.pageList = this.pageList.filter((function(t) {
                                            return t.fullPath !== e
                                        }));
                                        var t = this.linkList.indexOf(e);
                                        this.linkList = this.linkList.filter((function(t) {
                                            return t !== e
                                        })), t = t >= this.linkList.length ? this.linkList.length - 1 : t, this.activePage = this.linkList[t]
                                    } else this.$message.warning("这是最后一页，不能再关闭了啦");
                        else this.$message.warning("个人中心不能关闭!");
                        else this.$message.warning("工作台不能关闭!");
                        else this.$message.warning("首页不能关闭!")
                    },
                    onContextmenu: function(e) {
                        var t = this.getPageKey(e.target);
                        null !== t && (e.preventDefault(), this.menuVisible = !0)
                    },
                    getPageKey: function(e, t) {
                        if (t = t || 0, t > 2) return null;
                        var n = e.getAttribute("pagekey");
                        return n = n || (e.previousElementSibling ? e.previousElementSibling.getAttribute("pagekey") : null), n || (e.firstElementChild ? this.getPageKey(e.firstElementChild, ++t) : null)
                    },
                    onMenuSelect: function(e, t) {
                        var n = this.getPageKey(t);
                        switch (e) {
                            case "1":
                                this.closeLeft(n);
                                break;
                            case "2":
                                this.closeRight(n);
                                break;
                            case "3":
                                this.closeOthers(n);
                                break;
                            default:
                                break
                        }
                    },
                    closeOthers: function(e) {
                        var t = this.linkList.indexOf(e);
                        if (e == p) this.linkList = this.linkList.slice(t, t + 1), this.pageList = this.pageList.slice(t, t + 1), this.activePage = this.linkList[0];
                        else {
                            var n = this.pageList.slice(0, 1)[0];
                            this.linkList = this.linkList.slice(t, t + 1), this.pageList = this.pageList.slice(t, t + 1), this.linkList.unshift(p), this.pageList.unshift(n), this.activePage = this.linkList[1]
                        }
                    },
                    closeLeft: function(e) {
                        if (e != p) {
                            var t = Object(o["a"])(this.pageList),
                                n = t.slice(0, 1)[0],
                                r = this.linkList.indexOf(e);
                            this.linkList = this.linkList.slice(r), this.pageList = this.pageList.slice(r), this.linkList.unshift(p), this.pageList.unshift(n), this.linkList.indexOf(this.activePage) < 0 && (this.activePage = this.linkList[0])
                        }
                    },
                    closeRight: function(e) {
                        var t = this.linkList.indexOf(e);
                        this.linkList = this.linkList.slice(0, t + 1), this.pageList = this.pageList.slice(0, t + 1), this.linkList.indexOf(this.activePage < 0) && (this.activePage = this.linkList[this.linkList.length - 1])
                    },
                    dynamicRouterShow: function(e, t) {
                        var n = this.linkList.indexOf(e);
                        if (n >= 0) {
                            var r = this.pageList[n],
                                a = Object.assign({}, r.meta, {
                                    title: t
                                });
                            this.pageList.splice(n, 1, Object.assign({}, r, {
                                meta: a
                            }))
                        }
                    },
                    closeTabPage: function(e) {
                        if (e != p)
                            if (e != f)
                                if (e != m)
                                    if (1 !== this.$root.$tabs.pageList.length) {
                                        this.$root.$tabs.pageList = this.$root.$tabs.pageList.filter((function(t) {
                                            return t.fullPath !== e
                                        }));
                                        var t = this.$root.$tabs.linkList.indexOf(e);
                                        this.$root.$tabs.linkList = this.$root.$tabs.linkList.filter((function(t) {
                                            return t !== e
                                        })), t = t >= this.$root.$tabs.linkList.length ? this.$root.$tabs.linkList.length - 1 : t, this.$root.$tabs.activePage = this.$root.$tabs.linkList[t]
                                    } else this.$message.warning("这是最后一页，不能再关闭了啦");
                        else this.$message.warning("个人中心不能关闭!");
                        else this.$message.warning("工作台不能关闭!");
                        else this.$message.warning("首页不能关闭!")
                    }
                }
            },
            b = h,
            g = (n("df57"), n("2877")),
            y = Object(g["a"])(b, r, a, !1, null, null, null);
        t["default"] = y.exports
    },
    "0fea": function(e, t, n) {
        "use strict";
        n.d(t, "n", (function() {
            return _
        })), n.d(t, "k", (function() {
            return b
        })), n.d(t, "t", (function() {
            return y
        })), n.d(t, "g", (function() {
            return w
        })), n.d(t, "b", (function() {
            return k
        })), n.d(t, "i", (function() {
            return E
        })), n.d(t, "j", (function() {
            return L
        })), n.d(t, "h", (function() {
            return C
        })), n.d(t, "Z", (function() {
            return T
        })), n.d(t, "f", (function() {
            return M
        })), n.d(t, "Y", (function() {
            return P
        })), n.d(t, "v", (function() {
            return B
        })), n.d(t, "l", (function() {
            return q
        })), n.d(t, "s", (function() {
            return $
        })), n.d(t, "m", (function() {
            return W
        })), n.d(t, "V", (function() {
            return H
        })), n.d(t, "U", (function() {
            return Y
        })), n.d(t, "y", (function() {
            return J
        })), n.d(t, "X", (function() {
            return Q
        })), n.d(t, "cb", (function() {
            return ee
        })), n.d(t, "W", (function() {
            return ne
        })), n.d(t, "w", (function() {
            return ie
        })), n.d(t, "R", (function() {
            return se
        })), n.d(t, "S", (function() {
            return le
        })), n.d(t, "db", (function() {
            return pe
        })), n.d(t, "O", (function() {
            return me
        })), n.d(t, "L", (function() {
            return he
        })), n.d(t, "P", (function() {
            return ge
        })), n.d(t, "eb", (function() {
            return ve
        })), n.d(t, "z", (function() {
            return ke
        })), n.d(t, "lb", (function() {
            return Ee
        })), n.d(t, "mb", (function() {
            return Le
        })), n.d(t, "Q", (function() {
            return Ce
        })), n.d(t, "J", (function() {
            return Te
        })), n.d(t, "K", (function() {
            return Me
        })), n.d(t, "M", (function() {
            return Ie
        })), n.d(t, "N", (function() {
            return Ne
        })), n.d(t, "H", (function() {
            return Fe
        })), n.d(t, "I", (function() {
            return Ge
        })), n.d(t, "e", (function() {
            return Ke
        })), n.d(t, "c", (function() {
            return Ve
        })), n.d(t, "d", (function() {
            return ze
        })), n.d(t, "p", (function() {
            return Xe
        })), n.d(t, "o", (function() {
            return Ze
        })), n.d(t, "q", (function() {
            return tt
        })), n.d(t, "r", (function() {
            return rt
        })), n.d(t, "F", (function() {
            return ot
        })), n.d(t, "u", (function() {
            return ct
        })), n.d(t, "A", (function() {
            return ut
        })), n.d(t, "D", (function() {
            return dt
        })), n.d(t, "E", (function() {
            return ft
        })), n.d(t, "fb", (function() {
            return _t
        })), n.d(t, "G", (function() {
            return wt
        })), n.d(t, "T", (function() {
            return kt
        })), n.d(t, "B", (function() {
            return Nt
        })), n.d(t, "ob", (function() {
            return Gt
        })), n.d(t, "a", (function() {
            return cn
        })), n.d(t, "ab", (function() {
            return fn
        })), n.d(t, "bb", (function() {
            return _n
        })), n.d(t, "gb", (function() {
            return bn
        })), n.d(t, "jb", (function() {
            return yn
        })), n.d(t, "ib", (function() {
            return wn
        })), n.d(t, "hb", (function() {
            return kn
        })), n.d(t, "kb", (function() {
            return En
        })), n.d(t, "C", (function() {
            return Ln
        })), n.d(t, "x", (function() {
            return Cn
        })), n.d(t, "nb", (function() {
            return Tn
        }));
        n("ac4d"), n("8a81"), n("ac6a"), n("7f7f"), n("96cf"), n("a481"), n("f559"), n("7514"), n("28a5"), n("6762"), n("2fdb"), n("6b54");
        var r = n("3b8d"),
            a = n("b775"),
            o = n("cebe"),
            i = n.n(o),
            c = n("db82"),
            s = n.n(c),
            u = n("17fb"),
            l = n("5d2d"),
            d = n("ca00"),
            p = n("1157"),
            f = n("f36f");
        i.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var m = {
            domain: window._CONFIG["domain"],
            restapi: window._CONFIG["restAPI"],
            token: "".concat(window._CONFIG["domain"], "/jeecg-boot/sys/common/token"),
            user: "".concat(window._CONFIG["domain"], "/jeecg-boot/api/user"),
            role: "".concat(window._CONFIG["domain"], "/jeecg-boot/api/role"),
            service: "".concat(window._CONFIG["domain"], "/jeecg-boot/api/service"),
            permission: "".concat(window._CONFIG["domain"], "/jeecg-boot/api/permission"),
            permissionNoPager: "".concat(window._CONFIG["domain"], "/jeecg-boot/api/permission/no-pager"),
            PROCESS_NODE_DICT_ID: "095a5c3fed5b29706cdfc6d9cb32cd4c"
        };

        function _(e, t) {
            return h.apply(this, arguments)
        }

        function h() {
            return h = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: t,
                                method: "post",
                                data: n
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), h.apply(this, arguments)
        }

        function b(e, t, n) {
            return g.apply(this, arguments)
        }

        function g() {
            return g = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: t,
                                method: r,
                                data: n
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), g.apply(this, arguments)
        }

        function y(e, t) {
            return v.apply(this, arguments)
        }

        function v() {
            return v = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: t,
                                method: "put",
                                data: n
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), v.apply(this, arguments)
        }

        function w(e, t) {
            return O.apply(this, arguments)
        }

        function O() {
            return O = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: t,
                                method: "get",
                                params: n
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), O.apply(this, arguments)
        }

        function k(e, t) {
            return x.apply(this, arguments)
        }

        function x() {
            return x = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: t,
                                method: "delete",
                                params: n
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), x.apply(this, arguments)
        }

        function E(e) {
            return R.apply(this, arguments)
        }

        function R() {
            return R = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: m.role,
                                method: "get",
                                params: t
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), R.apply(this, arguments)
        }

        function L(e) {
            return S.apply(this, arguments)
        }

        function S() {
            return S = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: m.service,
                                method: "get",
                                params: t
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), S.apply(this, arguments)
        }

        function C(e) {
            return j.apply(this, arguments)
        }

        function j() {
            return j = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", Object(a["b"])({
                                url: m.permissionNoPager,
                                method: "get",
                                params: t
                            }));
                        case 4:
                            e.prev = 4, e.t0 = e["catch"](0), console.log(e.t0);
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 4]
                ])
            }))), j.apply(this, arguments)
        }

        function T() {
            return D.apply(this, arguments)
        }

        function D() {
            return D = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = l["c"]("pro__Access-Token"), n = "".concat(m.token, "/").concat(t.value), e.next = 5, s.a.get(n);
                        case 5:
                            return r = e.sent, e.abrupt("return", r);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](0), console.log(" error : " + e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 9]
                ])
            }))), D.apply(this, arguments)
        }

        function M(e, t) {
            return A.apply(this, arguments)
        }

        function A() {
            return A = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return console.log(" download url :" + t), e.prev = 1, e.abrupt("return", Object(a["b"])({
                                url: t,
                                params: n,
                                method: "get",
                                responseType: "blob"
                            }));
                        case 5:
                            e.prev = 5, e.t0 = e["catch"](1), console.log(e.t0);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 5]
                ])
            }))), A.apply(this, arguments)
        }

        function I() {
            var e = null;
            try {
                return e = document.location.toString(), e = e.substring(e.lastIndexOf("/") + 1, e.length), console.log("tableID : " + e), e
            } catch (t) {
                console.log(t)
            }
        }

        function P(e) {
            return N.apply(this, arguments)
        }

        function N() {
            return N = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = I(), r = "".concat(m.restapi, "/api/onl_cgform_head/").concat(n), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a.body), "undefined" != typeof a && a.body instanceof Array && a.body.length > 0 && "undefined" != typeof t && t(a.body[0]), e.abrupt("return", a.body[0]);
                        case 11:
                            e.prev = 11, e.t0 = e["catch"](2), console.error(e.t0);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 11]
                ])
            }))), N.apply(this, arguments)
        }

        function B(e, t) {
            return U.apply(this, arguments)
        }

        function U() {
            return U = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_log?_where=(table_name,eq,").concat(t, ")~and(business_data_id,eq,").concat(n, ")"), a = !1, e.prev = 3, e.next = 6, s.a.get(r).set("accept", "json");
                        case 6:
                            return o = e.sent, a = o.body.length > 1, e.abrupt("return", a);
                        case 11:
                            e.prev = 11, e.t0 = e["catch"](3), console.error(e.t0);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 11]
                ])
            }))), U.apply(this, arguments)
        }

        function q(e, t) {
            return F.apply(this, arguments)
        }

        function F() {
            return F = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/").concat(t), "undefined" != typeof n && null != n && n instanceof Array && (r += "/bulk"), e.prev = 3, e.next = 6, s.a.post(r).send(n).set("accept", "json");
                        case 6:
                            return a = e.sent, e.abrupt("return", a.body[0]);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](3), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 10]
                ])
            }))), F.apply(this, arguments)
        }

        function $(e, t) {
            return G.apply(this, arguments)
        }

        function G() {
            return G = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/").concat(t), "undefined" != typeof n && null != n && n instanceof Array && (r += "/bulk"), e.prev = 3, e.next = 6, s.a.post(r).send(n).set("accept", "json");
                        case 6:
                            return a = e.sent, e.abrupt("return", a.body[0]);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](3), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 10]
                ])
            }))), G.apply(this, arguments)
        }

        function W(e, t, n) {
            return K.apply(this, arguments)
        }

        function K() {
            return K = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = t.toLowerCase(), a = "".concat(m.restapi, "/api/").concat(t, "/").concat(n), "undefined" != typeof r && null != r && "" != r) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 5:
                            return e.prev = 5, e.next = 8, s.a.patch(a).send(r).set("accept", "json");
                        case 8:
                            return o = e.sent, e.abrupt("return", o.body);
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](5), console.error(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [5, 12]
                ])
            }))), K.apply(this, arguments)
        }

        function H(e, t) {
            return V.apply(this, arguments)
        }

        function V() {
            return V = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = t.toLowerCase(), r = "".concat(m.restapi, "/api/").concat(t, "/").concat(n), e.prev = 2, a = l["c"]("sys_user_cache@".concat(t, "&id").concat(n)), "undefined" == typeof a || null == a || "" == a) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", a);
                        case 6:
                            return e.next = 8, s.a.get(r).set("accept", "json");
                        case 8:
                            return o = e.sent, null != o.body && o.body.length > 0 && l["d"]("sys_user_cache@".concat(t, "&id").concat(n), o.body[0], 2), e.abrupt("return", o.body[0]);
                        case 13:
                            e.prev = 13, e.t0 = e["catch"](2), console.error(e.t0);
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 13]
                ])
            }))), V.apply(this, arguments)
        }

        function Y(e) {
            return z.apply(this, arguments)
        }

        function z() {
            return z = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = t.toLowerCase(), n = "".concat(m.restapi, "/api/").concat(t), r = null, e.prev = 3, r = l["c"]("system_table_data_info_all"), "undefined" != typeof r && null != r && "" != r) {
                                e.next = 12;
                                break
                            }
                            return e.next = 8, s.a.get(n).set("accept", "json");
                        case 8:
                            a = e.sent, r = a.body, u["each"](r, (function(e) {
                                var t = d["d"](e["create_time"], "yyyy-MM-dd hh:mm:ss");
                                e["create_time"] = t
                            })), l["d"]("system_table_data_info_all", r, 5);
                        case 12:
                            e.next = 17;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](3), console.error(e.t0);
                        case 17:
                            return e.abrupt("return", r);
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 14]
                ])
            }))), z.apply(this, arguments)
        }

        function J() {
            return X.apply(this, arguments)
        }

        function X() {
            return X = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = "".concat(m.restapi, "/api/bs_dynamic?_sort=-create_time"), n = null, e.prev = 2, n = l["c"]("system_dynamic_info_all"), "undefined" != typeof n && null != n && "" != n) {
                                e.next = 11;
                                break
                            }
                            return e.next = 7, s.a.get(t).set("accept", "json");
                        case 7:
                            r = e.sent, n = r.body, u["each"](n, (function(e) {
                                var t = d["d"](e["create_time"], "yyyy-MM-dd hh:mm:ss");
                                e["create_time"] = t
                            })), l["d"]("system_dynamic_info_all", n, 7200);
                        case 11:
                            e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e["catch"](2), console.error(e.t0);
                        case 16:
                            return e.abrupt("return", n);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 13]
                ])
            }))), X.apply(this, arguments)
        }

        function Q(e, t, n) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return Z = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), a = "".concat(m.restapi, "/api/").concat(t, "?_where=(").concat(n, ",eq,").concat(r, ")"), e.prev = 2, e.next = 5, s.a.get(a).set("accept", "json");
                        case 5:
                            return o = e.sent, e.abrupt("return", o.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), Z.apply(this, arguments)
        }

        function ee(e) {
            return te.apply(this, arguments)
        }

        function te() {
            return te = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = "".concat(m.restapi, "/api/v_user?_where=(username,eq,").concat(t, ")"), r = null, e.prev = 2, r = l["c"]("system_v_user_info@username$".concat(t)), "undefined" != typeof r && null != r && "" != r) {
                                e.next = 10;
                                break
                            }
                            return e.next = 7, s.a.get(n).set("accept", "json");
                        case 7:
                            a = e.sent, r = a.body, l["d"]("system_v_user_info@username$".concat(t), r, 86400);
                        case 10:
                            e.next = 15;
                            break;
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](2), console.error(e.t0);
                        case 15:
                            return e.abrupt("return", r);
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 12]
                ])
            }))), te.apply(this, arguments)
        }

        function ne(e) {
            return re.apply(this, arguments)
        }

        function re() {
            return re = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), n = "".concat(m.restapi, "/api/").concat(t), e.prev = 2, e.next = 5, s.a.get(n).set("accept", "json");
                        case 5:
                            return r = e.sent, e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), re.apply(this, arguments)
        }

        function ae(e, t, n) {
            return oe.apply(this, arguments)
        }

        function oe() {
            return oe = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), a = "".concat(m.restapi, "/api/").concat(t, "?_where=(name,eq,").concat(n, ")~and(field,eq,").concat(r, ")"), e.prev = 2, e.next = 5, s.a.get(a).set("accept", "json");
                        case 5:
                            return o = e.sent, e.abrupt("return", o.body[0]);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), oe.apply(this, arguments)
        }

        function ie(e, t) {
            return ce.apply(this, arguments)
        }

        function ce() {
            return ce = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_rights?_where=(business,like,~").concat(t, "~)"), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a.body), "undefined" != typeof a && a.body instanceof Array && a.body.length > 0 && "undefined" != typeof n && n(a.body), e.abrupt("return", JSON.parse(JSON.stringify(a.body)));
                        case 11:
                            e.prev = 11, e.t0 = e["catch"](2), console.error(e.t0);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 11]
                ])
            }))), ce.apply(this, arguments)
        }

        function se(e, t) {
            return ue.apply(this, arguments)
        }

        function ue() {
            return ue = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "".concat(m.restapi, "/api/bs_approve_node?_where=(name,eq,").concat(t, ")"), e.prev = 1, e.next = 4, s.a.get(r).set("accept", "json");
                        case 4:
                            return a = e.sent, console.log(a.body), "undefined" != typeof a && a.body instanceof Array && a.body.length > 0 && "undefined" != typeof n && n(a.body[0]["item_text"]), e.abrupt("return", a.body);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), ue.apply(this, arguments)
        }

        function le(e, t) {
            return de.apply(this, arguments)
        }

        function de() {
            return de = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "".concat(m.restapi, "/api/sys_dict_item?_where=(dict_id,eq,").concat(m.PROCESS_NODE_DICT_ID, ")~and(item_value,eq,").concat(t, ")"), e.prev = 1, e.next = 4, s.a.get(r).set("accept", "json");
                        case 4:
                            return a = e.sent, console.log(a), "undefined" != typeof a && a.body instanceof Array && a.body.length > 0 && "undefined" != typeof n && n(a.body[0]["item_text"]), e.abrupt("return", a.body);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), de.apply(this, arguments)
        }

        function pe(e) {
            return fe.apply(this, arguments)
        }

        function fe() {
            return fe = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o, i, c, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t.pageNo = t.pageNo - 1, n = "" == d["b"](t.name) ? "" : "_where=(username,like,~".concat(t.name, "~)~or(realname,like,~").concat(t.name, "~)&"), r = "asc" == t.order ? "" : "-", a = "".concat(m.restapi, "/api/v_user?").concat(n, "_p=").concat(t.pageNo, "&_size=").concat(t.pageSize, "&_sort=").concat(r).concat(t.column), o = "".concat(m.restapi, "/api/v_user/count?").concat(n), i = {}, e.prev = 6, e.next = 9, s.a.get(a).set("accept", "json");
                        case 9:
                            return c = e.sent, e.next = 12, s.a.get(o).set("accept", "json");
                        case 12:
                            return u = e.sent, console.log(c), i.records = c.body, i.total = u.body[0].no_of_rows <= t.pageSize ? c.body.length : u.body[0].no_of_rows, e.abrupt("return", i);
                        case 19:
                            e.prev = 19, e.t0 = e["catch"](6), console.error(e.t0);
                        case 22:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 19]
                ])
            }))), fe.apply(this, arguments)
        }

        function me(e, t, n) {
            return _e.apply(this, arguments)
        }

        function _e() {
            return _e = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o, i, c, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r.pageNo = r.pageNo - 1, a = "".concat(m.restapi, "/api/pr_log?_where=(employee,like,~").concat(t, "~)~or(employee,like,~").concat(n, "~)&_p=").concat(r.pageNo, "&_size=").concat(r.pageSize), o = "".concat(m.restapi, "/api/pr_log/count?_where=(employee,like,~").concat(t, "~)~or(employee,like,~").concat(n, "~)"), i = {}, e.prev = 4, e.next = 7, s.a.get(a).set("accept", "json");
                        case 7:
                            return c = e.sent, e.next = 10, s.a.get(o).set("accept", "json");
                        case 10:
                            return u = e.sent, console.log(c), i.records = c.body, i.total = u.body[0].no_of_rows <= 30 ? c.body.length : u.body[0].no_of_rows, e.abrupt("return", i);
                        case 17:
                            e.prev = 17, e.t0 = e["catch"](4), console.error(e.t0);
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 17]
                ])
            }))), _e.apply(this, arguments)
        }

        function he(e, t, n) {
            return be.apply(this, arguments)
        }

        function be() {
            return be = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o, i, c, l;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r.pageNo = r.pageNo - 1, a = "".concat(m.restapi, "/api/pr_log_history?_where=(approve_user,like,~").concat(t, "~)~or(approve_user,like,~").concat(n, "~)~or(proponents,like,~").concat(t, "~)~or(proponents,like,~").concat(n, "~)&_p=").concat(r.pageNo, "&_size=").concat(r.pageSize, "&_sort=-operate_time"), o = "".concat(m.restapi, "/api/pr_log_history/count?_where=(approve_user,like,~").concat(t, "~)~or(approve_user,like,~").concat(n, "~)~or(proponents,like,~").concat(t, "~)~or(proponents,like,~").concat(n, "~)"), i = {}, e.prev = 4, e.next = 7, s.a.get(a).set("accept", "json");
                        case 7:
                            return c = e.sent, e.next = 10, s.a.get(o).set("accept", "json");
                        case 10:
                            return l = e.sent, console.log(c), i.records = c.body, u["each"](i.records, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd hh:mm:ss");
                                t = t.replace("T", " "), e["operate_time"] = t
                            })), i.total = l.body[0].no_of_rows <= 30 ? c.body.length : l.body[0].no_of_rows, e.abrupt("return", i);
                        case 18:
                            e.prev = 18, e.t0 = e["catch"](4), console.error(e.t0);
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 18]
                ])
            }))), be.apply(this, arguments)
        }

        function ge(e, t) {
            return ye.apply(this, arguments)
        }

        function ye() {
            return ye = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "".concat(m.restapi, "/api/v_handling_events?_where=(username,like,~").concat(t, "~)~or(username,like,~").concat(n, "~)&_p=0&_size=30&_sort=-create_time"), a = {}, e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return o = e.sent, console.log(o), a = o.body, a = u["filter"](a, (function(e) {
                                var r = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    a = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = r, e["create_time"] = a, e["username"] = d["b"](e["username"]).split(",");
                                var o = (u["contains"](e["username"], t) || u["contains"](e["username"], n)) && !e.user.includes(t);
                                return o
                            })), e.abrupt("return", a);
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](2), console.error(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 12]
                ])
            }))), ye.apply(this, arguments)
        }

        function ve() {
            return we.apply(this, arguments)
        }

        function we() {
            return we = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = 0, r = [], e.prev = 2, a = l["c"]("cache_all_user_name"), "undefined" != typeof a && null != a && 0 != a.length) {
                                e.next = 21;
                                break
                            }
                        case 5:
                            if (!(t < 1e4)) {
                                e.next = 18;
                                break
                            }
                            return n = "".concat(m.restapi, "/api/v_uname?_p=").concat(t++, "&_size=50"), e.next = 9, s.a.get(n).set("accept", "json");
                        case 9:
                            if (o = e.sent, r = r.concat(o.body), !(o.body.length < 50)) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("break", 18);
                        case 15:
                            return e.abrupt("continue", 5);
                        case 16:
                            e.next = 5;
                            break;
                        case 18:
                            l["d"]("cache_all_user_name", r, 86400), e.next = 22;
                            break;
                        case 21:
                            r = a;
                        case 22:
                            return e.abrupt("return", r);
                        case 25:
                            e.prev = 25, e.t0 = e["catch"](2), console.error(e.t0);
                        case 28:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 25]
                ])
            }))), we.apply(this, arguments)
        }

        function Oe() {
            var e = [];
            try {
                var t = l["c"]("cache_all_user_name");
                e = "undefined" == typeof t || null == t || 0 == t.length ? [] : t
            } catch (n) {
                console.error(n)
            }
            return e
        }

        function ke(e) {
            return xe.apply(this, arguments)
        }

        function xe() {
            return xe = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/v_handling_events?_where=(id,eq,").concat(t, ")"), r = {}, e.prev = 2, e.next = 5, s.a.get(n).set("accept", "json");
                        case 5:
                            a = e.sent, "undefined" != typeof a.body && null != a.body && a.body.length > 0 && (r = a.body[0]), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.log("打印错误日志：" + e.t0);
                        case 12:
                            return e.abrupt("return", r);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), xe.apply(this, arguments)
        }

        function Ee(e) {
            return Re.apply(this, arguments)
        }

        function Re() {
            return Re = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o, i;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/v_workflow_node?_where=(id,eq,").concat(t, ")"), r = {}, e.prev = 2, e.next = 5, s.a.get(n).set("accept", "json");
                        case 5:
                            a = e.sent, "undefined" != typeof a.body && null != a.body && a.body.length > 0 && (r = a.body[0], null != r.notify && "" != r.notify || (o = l["c"]("workflows_notify_node_by_data_id@".concat(t)), r.notify = o.employee + "," + o.appruser, console.log("知会人员：" + r.notify)), i = l["c"]("workflows_audit_node_by_data_id@".concat(t)), r.operate = i.employee), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.log("打印错误日志：" + e.t0);
                        case 12:
                            return e.abrupt("return", r);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), Re.apply(this, arguments)
        }

        function Le(e, t) {
            return Se.apply(this, arguments)
        }

        function Se() {
            return Se = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "".concat(m.restapi, "/api/v_workflow_type_node?_where=(tname,eq,").concat(t, ")~and(cname,eq,").concat(n, ")"), a = {}, e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            o = e.sent, "undefined" != typeof o.body && null != o.body && o.body.length > 0 && (a = o.body[0]), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), console.log("打印错误日志：" + e.t0);
                        case 12:
                            return e.abrupt("return", a);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), Se.apply(this, arguments)
        }

        function Ce(e, t) {
            return je.apply(this, arguments)
        }

        function je() {
            return je = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o, i, c, l;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "", "" != d["b"](n.type) && (r += "~and(type,eq,".concat(n.type, ")")), "" != d["b"](n.name) && (r += "~and(tname,eq,".concat(n.name, ")")), "" != d["b"](n.topic) && (r += "~and(topic,like,~".concat(n.topic, "~)")), "" != d["b"](n.time) && (a = "", o = "", 0 == n.time.length ? (a = new Date, o = new Date) : 1 == n.time.length ? (a = n.time[0].format("YYYY-MM-DD"), o = n.time[1].format("YYYY-MM-DD")) : n.time.length >= 2 && (a = n.time[0].format("YYYY-MM-DD"), o = n.time[1].format("YYYY-MM-DD")), a = d["d"](a, "yyyy-MM-dd") + " 00:00:00", o = d["d"](o, "yyyy-MM-dd") + " 23:59:59", r += "~and(create_time,bw,".concat(a, ",").concat(o, ")")), i = "".concat(m.restapi, "/api/v_handling_events?_where=(username,like,~").concat(t, "~)").concat(r, "&_p=0&_size=99&_sort=-create_time"), c = {}, e.prev = 7, e.next = 10, s.a.get(i).set("accept", "json");
                        case 10:
                            return l = e.sent, console.log(l), c = l.body, c = u["filter"](c, (function(e) {
                                var n = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    r = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = n, e["create_time"] = r, e["username"] = d["b"](e["username"]).split(",");
                                var a = u["contains"](e["username"], t);
                                return a
                            })), e.abrupt("return", c);
                        case 17:
                            e.prev = 17, e.t0 = e["catch"](7), console.error(e.t0);
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [7, 17]
                ])
            }))), je.apply(this, arguments)
        }

        function Te(e, t) {
            return De.apply(this, arguments)
        }

        function De() {
            return De = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "".concat(m.restapi, "/api/v_handled_events_unq?_where=(username,like,~").concat(t, "~)~or(username,like,~").concat(n, "~)&_p=0&_size=30&_sort=-create_time"), a = {}, e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return o = e.sent, console.log(o), a = o.body, a = u["filter"](a, (function(e) {
                                var r = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    a = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = r, e["create_time"] = a, e["username"] = d["b"](e["username"]).split(",");
                                var o = u["contains"](e["username"], t) || u["contains"](e["username"], n);
                                return o
                            })), e.abrupt("return", a);
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](2), console.error(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 12]
                ])
            }))), De.apply(this, arguments)
        }

        function Me(e, t) {
            return Ae.apply(this, arguments)
        }

        function Ae() {
            return Ae = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o, i, c, l;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = "", "" != d["b"](n.type) && (r += "~and(type,eq,".concat(n.type, ")")), "" != d["b"](n.name) && (r += "~and(tname,eq,".concat(n.name, ")")), "" != d["b"](n.topic) && (r += "~and(topic,like,~".concat(n.topic, "~)")), "" != d["b"](n.time) && (a = "", o = "", 0 == n.time.length ? (a = new Date, o = new Date) : 1 == n.time.length ? (a = n.time[0].format("YYYY-MM-DD"), o = n.time[1].format("YYYY-MM-DD")) : n.time.length >= 2 && (a = n.time[0].format("YYYY-MM-DD"), o = n.time[1].format("YYYY-MM-DD")), a = d["d"](a, "yyyy-MM-dd") + " 00:00:00", o = d["d"](o, "yyyy-MM-dd") + " 23:59:59", r += "~and(create_time,bw,".concat(a, ",").concat(o, ")")), i = "".concat(m.restapi, "/api/v_handled_events?_where=(username,like,~").concat(t, "~)").concat(r, "&_p=0&_size=99&_sort=-create_time"), c = {}, e.prev = 7, e.next = 10, s.a.get(i).set("accept", "json");
                        case 10:
                            return l = e.sent, console.log(l), c = l.body, c = u["filter"](c, (function(e) {
                                var n = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    r = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = n, e["create_time"] = r, e["username"] = d["b"](e["username"]).split(",");
                                var a = u["contains"](e["username"], t);
                                return a
                            })), e.abrupt("return", c);
                        case 17:
                            e.prev = 17, e.t0 = e["catch"](7), console.error(e.t0);
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [7, 17]
                ])
            }))), Ae.apply(this, arguments)
        }

        function Ie(e, t, n) {
            return Pe.apply(this, arguments)
        }

        function Pe() {
            return Pe = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o, i, c, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r.pageNo = r.pageNo - 1, a = "".concat(m.restapi, "/api/pr_log_informed?_where=((employee,like,~").concat(t, "~)~or(employee,like,~").concat(n, "~))&_p=").concat(r.pageNo, "&_size=").concat(r.pageSize, "&_sort=-operate_time"), o = "".concat(m.restapi, "/api/pr_log_informed/count?_where=((employee,like,~").concat(t, "~)~or(employee,like,~").concat(n, "~))"), i = {}, e.prev = 4, e.next = 7, s.a.get(a).set("accept", "json");
                        case 7:
                            return c = e.sent, e.next = 10, s.a.get(o).set("accept", "json");
                        case 10:
                            return u = e.sent, console.log("query url : " + a), console.log(c), i.records = c.body, i.total = u.body[0].no_of_rows <= 30 ? c.body.length : u.body[0].no_of_rows, e.abrupt("return", i);
                        case 18:
                            e.prev = 18, e.t0 = e["catch"](4), console.error(e.t0);
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 18]
                ])
            }))), Pe.apply(this, arguments)
        }

        function Ne(e, t) {
            return Be.apply(this, arguments)
        }

        function Be() {
            return Be = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_log_informed?_where=(table_name,eq,").concat(t, ")~and(id,eq,").concat(n, ")"), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body[0]);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), Be.apply(this, arguments)
        }

        function Ue(e, t) {
            return qe.apply(this, arguments)
        }

        function qe() {
            return qe = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_log_informed?_where=(table_name,eq,").concat(t, ")~and(business_data_id,eq,").concat(n, ")&_sort=operate_time"), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), qe.apply(this, arguments)
        }

        function Fe(e, t) {
            return $e.apply(this, arguments)
        }

        function $e() {
            return $e = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_log?_where=(table_name,eq,").concat(t, ")~and(business_data_id,eq,").concat(n, ")&_sort=operate_time"), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), $e.apply(this, arguments)
        }

        function Ge(e, t) {
            return We.apply(this, arguments)
        }

        function We() {
            return We = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = t.toLowerCase(), r = "".concat(m.restapi, "/api/pr_log?_where=(table_name,eq,").concat(t, ")~and(id,eq,").concat(n, ")"), e.prev = 2, e.next = 5, s.a.get(r).set("accept", "json");
                        case 5:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body[0]);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), We.apply(this, arguments)
        }

        function Ke(e, t) {
            return He.apply(this, arguments)
        }

        function He() {
            return He = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            t = t.toLowerCase(), r = "", a = "", n instanceof Array || (n = [n]);
                            try {
                                u["each"](n, (function(e) {
                                    a = a + "," + e["id"]
                                })), a = 0 == a.indexOf(",") ? a.substring(1) : a
                            } catch (i) {
                                console.error(i)
                            }
                            try {
                                r = "".concat(m.restapi, "/api/").concat(t, "/bulk?_ids=").concat(a)
                            } catch (i) {
                                console.error(i)
                            }
                            return e.prev = 6, e.next = 9, s.a.delete(r).set("accept", "json");
                        case 9:
                            return o = e.sent, console.log(o), e.abrupt("return", o.body);
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](6), console.error(e.t0);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 14]
                ])
            }))), He.apply(this, arguments)
        }

        function Ve(e, t) {
            return Ye.apply(this, arguments)
        }

        function Ye() {
            return Ye = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            t = t.toLowerCase(), r = "", a = "", n instanceof Array || (n = [n]);
                            try {
                                u["each"](n, (function(e) {
                                    a = a + "," + e["id"]
                                })), a = 0 == a.indexOf(",") ? a.substring(1) : a
                            } catch (i) {
                                console.error(i)
                            }
                            try {
                                r = "".concat(m.restapi, "/api/pr_log/bulk?_ids=").concat(a)
                            } catch (i) {
                                console.error(i)
                            }
                            return e.prev = 6, e.next = 9, s.a.delete(r).set("accept", "json");
                        case 9:
                            return o = e.sent, console.log(o), e.abrupt("return", o.body);
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](6), console.error(e.t0);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 14]
                ])
            }))), Ye.apply(this, arguments)
        }

        function ze(e, t) {
            return Je.apply(this, arguments)
        }

        function Je() {
            return Je = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            t = t.toLowerCase(), r = "", a = "", n instanceof Array || (n = [n]);
                            try {
                                u["each"](n, (function(e) {
                                    r = r + "," + e["id"]
                                })), r = 0 == r.indexOf(",") ? r.substring(1) : r
                            } catch (i) {
                                console.error(i)
                            }
                            try {
                                a = "".concat(m.restapi, "/api/pr_log_informed/bulk?_ids=").concat(r)
                            } catch (i) {
                                console.error(i)
                            }
                            return e.prev = 6, e.next = 9, s.a.delete(a).set("accept", "json");
                        case 9:
                            return o = e.sent, console.log(o), e.abrupt("return", o.body);
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](6), console.error(e.t0);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 14]
                ])
            }))), Je.apply(this, arguments)
        }

        function Xe(e) {
            return Qe.apply(this, arguments)
        }

        function Qe() {
            return Qe = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/pr_log"), e.prev = 1, e.next = 4, s.a.post(n).send(t).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), Qe.apply(this, arguments)
        }

        function Ze(e) {
            return et.apply(this, arguments)
        }

        function et() {
            return et = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/bs_free_process"), e.prev = 1, e.next = 4, s.a.post(n).send(t).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), et.apply(this, arguments)
        }

        function tt(e) {
            return nt.apply(this, arguments)
        }

        function nt() {
            return nt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            n = null, r = t instanceof Array && t.length > 1 ? "/bulk" : "";
                            try {
                                t instanceof Array && 1 == t.length && (r = "", t = t[0])
                            } catch (o) {
                                console.log(o)
                            }
                            try {
                                n = "".concat(m.restapi, "/api/pr_log_history").concat(r)
                            } catch (o) {
                                console.log(o)
                            }
                            return e.prev = 4, e.next = 7, s.a.post(n).send(t).set("accept", "json");
                        case 7:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body);
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](4), console.error(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 12]
                ])
            }))), nt.apply(this, arguments)
        }

        function rt(e) {
            return at.apply(this, arguments)
        }

        function at() {
            return at = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            n = null, r = t instanceof Array && t.length > 1 ? "/bulk" : "";
                            try {
                                t instanceof Array && 1 == t.length && (r = "", t = t[0])
                            } catch (o) {
                                console.error(o)
                            }
                            try {
                                n = "".concat(m.restapi, "/api/pr_log_informed").concat(r)
                            } catch (o) {
                                console.error(o)
                            }
                            return e.prev = 4, e.next = 7, s.a.post(n).send(t).set("accept", "json");
                        case 7:
                            return a = e.sent, console.log(a), e.abrupt("return", a.body);
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](4), console.error(e.t0);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 12]
                ])
            }))), at.apply(this, arguments)
        }

        function ot(e) {
            return it.apply(this, arguments)
        }

        function it() {
            return it = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/pr_log_history?_where=(business_data_id,eq,").concat(t, ")&_sort=operate_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(n).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), it.apply(this, arguments)
        }

        function ct() {
            return st.apply(this, arguments)
        }

        function st() {
            return st = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/bs_announce?_where=(bpm_status,in,4,5)&_sort=-create_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(t).set("accept", "json");
                        case 4:
                            return n = e.sent, r = n.body, u["each"](r, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    n = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = t, e["create_time"] = n, e["username"] = d["b"](e["username"]).split(",")
                            })), e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), st.apply(this, arguments)
        }

        function ut() {
            return lt.apply(this, arguments)
        }

        function lt() {
            return lt = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/bs_redhead?_where=(bpm_status,in,4,5)&_sort=-create_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(t).set("accept", "json");
                        case 4:
                            return n = e.sent, r = n.body, u["each"](r, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    n = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = t, e["create_time"] = n, e["username"] = d["b"](e["username"]).split(",")
                            })), e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), lt.apply(this, arguments)
        }

        function dt() {
            return pt.apply(this, arguments)
        }

        function pt() {
            return pt = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/bs_news?_where=(bpm_status,in,4,5)&_sort=-create_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(t).set("accept", "json");
                        case 4:
                            return n = e.sent, r = n.body, u["each"](r, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    n = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = t, e["create_time"] = n, e["username"] = d["b"](e["username"]).split(",")
                            })), e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), pt.apply(this, arguments)
        }

        function ft() {
            return mt.apply(this, arguments)
        }

        function mt() {
            return mt = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/bs_notice?_where=(bpm_status,in,4,5)&_sort=-create_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(t).set("accept", "json");
                        case 4:
                            return n = e.sent, r = n.body, u["each"](r, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    n = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = t, e["create_time"] = n, e["username"] = d["b"](e["username"]).split(",")
                            })), e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), mt.apply(this, arguments)
        }

        function _t() {
            return ht.apply(this, arguments)
        }

        function ht() {
            return ht = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/bs_market_info?_where=(bpm_status,in,4,5)&_sort=-create_time&_p=0&_size=99"), e.prev = 1, e.next = 4, s.a.get(t).set("accept", "json");
                        case 4:
                            return n = e.sent, r = n.body, u["each"](r, (function(e) {
                                var t = d["d"](e["operate_time"], "yyyy-MM-dd"),
                                    n = d["d"](e["create_time"], "yyyy-MM-dd");
                                e["operate_time"] = t, e["create_time"] = n, e["username"] = d["b"](e["username"]).split(",")
                            })), e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), ht.apply(this, arguments)
        }

        function bt(e) {
            return gt.apply(this, arguments)
        }

        function gt() {
            return gt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/pr_log?_where=(business_data_id,eq,").concat(t, ")&_sort=operate_time"), e.prev = 1, e.next = 4, s.a.get(n).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), gt.apply(this, arguments)
        }

        function yt(e) {
            return vt.apply(this, arguments)
        }

        function vt() {
            return vt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/pr_log_informed?_where=(business_data_id,eq,").concat(t, ")&_sort=operate_time"), e.prev = 1, e.next = 4, s.a.get(n).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), vt.apply(this, arguments)
        }

        function wt(e) {
            return Ot.apply(this, arguments)
        }

        function Ot() {
            return Ot = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o, i, c;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = d["d"](new Date, "yyyy-MM-dd"), r = "".concat(m.restapi, "/api/pr_log_informed/count?_where=(business_data_id,eq,").concat(t, ")"), a = "".concat(m.restapi, "/api/pr_log_informed/count?_where=(business_data_id,eq,").concat(t, ")~and(operate_time,like,~").concat(n, "~)"), o = {}, i = 0, c = 0, e.prev = 6, e.prev = 7, e.next = 10, s.a.get(r).set("accept", "json");
                        case 10:
                            i = e.sent, e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e["catch"](7), console.log("query total loginfo error :" + e.t0);
                        case 16:
                            return e.prev = 16, e.next = 19, s.a.get(a).set("accept", "json");
                        case 19:
                            c = e.sent, e.next = 25;
                            break;
                        case 22:
                            e.prev = 22, e.t1 = e["catch"](16), console.log("query today loginfo error :" + e.t1);
                        case 25:
                            return o.total = i.body[0].no_of_rows, o.today = c.body[0].no_of_rows, console.log(o), e.abrupt("return", o);
                        case 31:
                            e.prev = 31, e.t2 = e["catch"](6), console.error("获取某业务记录对应的审批日志信息", e.t2);
                        case 34:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 31],
                    [7, 13],
                    [16, 22]
                ])
            }))), Ot.apply(this, arguments)
        }

        function kt(e) {
            var t = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
                n = "";
            try {
                for (var r = t.split(","), a = 0; a < e; a++) {
                    var o = Math.ceil(35 * Math.random());
                    n += r[o]
                }
            } catch (i) {
                console.log("获取n位随机数异常：" + i)
            }
            return n
        }

        function xt(e) {
            var t = {
                affairs_leave: "事假",
                sick_leave: "病假",
                marital_leave: "婚假",
                funeral_leave: "丧假",
                maternity_leave: "产假",
                paternity_leave: "陪产假",
                annual_leave: "年假",
                wr_injury_leave: "工伤假",
                other_leave: "其他"
            };
            return t[e]
        }

        function Et(e) {
            var t = {
                1: "待提交",
                2: "审核中",
                3: "审批中",
                4: "已完成",
                5: "已完成",
                10: "已作废",
                99: "已作废"
            };
            return t[e]
        }

        function Rt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "请假流程申请单",
                BS_EGRESS: "外出流程申请单",
                BS_OVERTIME: "加班流程申请单",
                BS_ATTENDANCE: "考勤异常流程申请单",
                BS_RECORD_BORROW: "档案及证照借阅申请单",
                BS_SEAL_NORMAL: "用印申请流程申请单",
                BS_SEAL_CONTRACT: "用印申请流程申请单",
                BS_SEAL_DECLARE: "印章借用申请单",
                BS_TRAVEL: "出差申请单",
                BS_MARKET_INFO: "市场观察表",
                BS_NOTICE: "奖罚通报表",
                BS_NEWS: "新闻资讯表",
                BS_ANNOUNCE: "行政公告表",
                BS_REDHEAD: "红头文件表",
                BS_ISSUE: "问题反馈表",
                BS_TRAFFIC_ALLOWANCE: "车辆补贴申请表",
                BS_TRANSACTION: "流程事务处理表"
            };
            return t[e]
        }

        function Lt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "请假",
                BS_EGRESS: "外出",
                BS_OVERTIME: "加班",
                BS_ATTENDANCE: "考勤",
                BS_RECORD_BORROW: "借阅",
                BS_SEAL_NORMAL: "用印",
                BS_SEAL_CONTRACT: "用印",
                BS_SEAL_DECLARE: "印章",
                BS_TRAVEL: "出差"
            };
            return t[e]
        }

        function St(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "--",
                BS_EGRESS: "普通",
                BS_OVERTIME: "普通",
                BS_ATTENDANCE: "普通",
                BS_RECORD_BORROW: "普通",
                BS_SEAL_NORMAL: "非合同",
                BS_SEAL_CONTRACT: "合同",
                BS_SEAL_DECLARE: "印章",
                BS_TRAVEL: "出差"
            };
            return t[e]
        }

        function Ct(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: !1,
                BS_EGRESS: !1,
                BS_OVERTIME: !1,
                BS_ATTENDANCE: !0,
                BS_RECORD_BORROW: !1,
                BS_SEAL_NORMAL: !1,
                BS_SEAL_CONTRACT: !1,
                BS_SEAL_DECLARE: !1,
                BS_TRAVEL: !1
            };
            return t[e]
        }

        function jt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "开始",
                BS_EGRESS: "开始",
                BS_OVERTIME: "开始",
                BS_ATTENDANCE: "开始",
                BS_RECORD_BORROW: "借阅",
                BS_SEAL_NORMAL: "开始",
                BS_SEAL_CONTRACT: "开始",
                BS_SEAL_DECLARE: "开始",
                BS_TRAVEL: "开始"
            };
            return t[e]
        }

        function Tt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "结束",
                BS_EGRESS: "结束",
                BS_OVERTIME: "结束",
                BS_ATTENDANCE: "结束",
                BS_RECORD_BORROW: "归还",
                BS_SEAL_NORMAL: "结束",
                BS_SEAL_CONTRACT: "结束",
                BS_SEAL_DECLARE: "结束",
                BS_TRAVEL: "结束"
            };
            return t[e]
        }

        function Dt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: "文件名称",
                BS_EGRESS: "文件名称",
                BS_OVERTIME: "文件名称",
                BS_ATTENDANCE: "文件名称",
                BS_RECORD_BORROW: "档案资料",
                BS_SEAL_NORMAL: "文件名称",
                BS_SEAL_CONTRACT: "文件名称",
                BS_SEAL_DECLARE: "文件名称",
                BS_TRAVEL: "文件名称"
            };
            return t[e]
        }

        function Mt(e) {
            e = e.toUpperCase();
            var t = {
                BS_LEAVE: [],
                BS_EGRESS: [],
                BS_OVERTIME: [],
                BS_ATTENDANCE: [{
                    title: "序号",
                    dataIndex: "no",
                    width: "10%",
                    align: "center"
                }, {
                    title: "异常时间",
                    dataIndex: "adate",
                    width: "35%",
                    align: "center"
                }, {
                    title: "异常类型",
                    dataIndex: "type",
                    width: "20%",
                    align: "center"
                }, {
                    title: "异常说明",
                    dataIndex: "content",
                    width: "35%",
                    align: "left"
                }],
                BS_RECORD_BORROW: [],
                BS_SEAL_NORMAL: [],
                BS_SEAL_CONTRACT: [],
                BS_SEAL_DECLARE: [],
                BS_TRAVEL: []
            };
            return t[e]
        }

        function At(e, t, n) {
            return It.apply(this, arguments)
        }

        function It() {
            return It = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (t = t.toUpperCase(), a = {
                                    BS_LEAVE: [],
                                    BS_EGRESS: [],
                                    BS_OVERTIME: [],
                                    BS_ATTENDANCE: [],
                                    BS_RECORD_BORROW: [],
                                    BS_SEAL_NORMAL: [],
                                    BS_SEAL_CONTRACT: [],
                                    BS_SEAL_DECLARE: [],
                                    BS_TRAVEL: []
                                }, "BS_ATTENDANCE" != t) {
                                e.next = 21;
                                break
                            }
                            return e.prev = 3, o = [], e.prev = 5, e.next = 8, Q(t + "_DETAILS", n, r);
                        case 8:
                            o = e.sent, e.next = 14;
                            break;
                        case 11:
                            e.prev = 11, e.t0 = e["catch"](5), console.log("查询考勤异常子表单数据异常：" + e.t0);
                        case 14:
                            try {
                                o.forEach((function(e, t) {
                                    e.no = t + 1
                                }))
                            } catch (i) {
                                console.log("考勤异常子表单，设置序号异常：" + i)
                            }
                            a["BS_ATTENDANCE"] = o, e.next = 21;
                            break;
                        case 18:
                            e.prev = 18, e.t1 = e["catch"](3), console.log("查询考勤异常表的子表信息异常：" + e.t1);
                        case 21:
                            return e.abrupt("return", a[t]);
                        case 22:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 18],
                    [5, 11]
                ])
            }))), It.apply(this, arguments)
        }

        function Pt(e) {
            var t = Oe(),
                n = "";
            try {
                if ("undefined" == typeof t || null == t || 0 == t.length) return n;
                if (e.includes(",")) {
                    var r = e.split(",");
                    u["each"](r, (function(e) {
                        var r = u["find"](t, (function(t) {
                            return t.username == e
                        }));
                        n = n + "," + r.realname
                    })), n.startsWith(",") && (n = n.substring(1))
                } else n = u["find"](t, (function(t) {
                    return t.username == e
                })), "undefined" != typeof n.realname && "" != n.realname && (n = n.realname)
            } catch (a) {
                console.log(a)
            }
            return n
        }

        function Nt(e) {
            return Bt.apply(this, arguments)
        }

        function Bt() {
            return Bt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/bs_free_process?_where=(main_key,eq,").concat(t, ")&_sort=-create_time"), r = [], e.prev = 2, e.next = 5, s.a.get(n).set("accept", "json");
                        case 5:
                            a = e.sent, console.log(a), r = "undefined" == typeof a.body || null == a.body || "" == a.body ? [] : 1 == a.body.length ? [] : a.body.splice(1), e.next = 13;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                            return e.abrupt("return", r);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), Bt.apply(this, arguments)
        }

        function Ut(e) {
            return qt.apply(this, arguments)
        }

        function qt() {
            return qt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            n = null;
                            try {
                                n = l["c"]("workflows_by_data_id@".concat(t))
                            } catch (i) {
                                console.log("query store info of workflows error :" + i)
                            }
                            if (null != n && "" != n && "undefined" != typeof n && 0 != n.length) {
                                e.next = 40;
                                break
                            }
                            return n = [], r = {}, e.prev = 5, e.next = 8, ot(t);
                        case 8:
                            r = e.sent, u["each"](r, (function(e, t) {
                                var a = t < r.length - 1 ? r[t + 1] : {
                                        action: ""
                                    },
                                    o = t == r.length - 1,
                                    i = d["d"](new Date(e.operate_time), "yyyy-MM-dd hh:mm:ss"),
                                    c = "节点：".concat(d["b"](e.process_station), " , 处理人： ").concat(d["b"](Pt(e.approve_user)), " , 审批：").concat(d["b"](e.action), " , 审批意见：").concat(d["b"](e.action_opinion), "  时间：").concat(d["b"](i), " "),
                                    s = "同意" == e.action ? "green" : "驳回" == e.action || "撤销" == e.action ? "red" : "知会" == e.action ? "yellow" : "发起" == e.action ? "#00DD77" : "blue";
                                s = "同意" == e.action && "知会" == a.action ? "blue" : s, s = o && "同意" == e.action ? "blue" : s, s = o && "知会" == e.action ? "orange" : s;
                                var u = "同意" == e.action && "知会" == a.action || o && "同意" == e.action ? "over" : "发起" == e.action ? "start" : "同意" == e.action ? "agree" : "驳回" == e.action || "撤销" == e.action ? "cancel" : "知会" == e.action ? "message" : "over",
                                    l = {
                                        id: e.id,
                                        color: s,
                                        content: c,
                                        status: u
                                    };
                                n.push(l)
                            })), e.next = 15;
                            break;
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](5), console.log("获取已处理的审批日志信息异常 :" + e.t0);
                        case 15:
                            return e.prev = 15, a = {}, e.next = 19, bt(t);
                        case 19:
                            r = e.sent, u["each"](r, (function(e, t) {
                                var r = {
                                    id: e.id,
                                    employee: e.employee,
                                    color: "pink",
                                    content: "节点：".concat(d["b"](e.process_station), " , 待处理人： ").concat(d["b"](Pt(e.employee)), " , 审批：待处理 , 时间：-- "),
                                    status: "wait",
                                    index: t
                                };
                                n.push(r), a = r
                            })), l["d"]("workflows_audit_node_by_data_id@".concat(t), JSON.stringify(a), 60), e.next = 27;
                            break;
                        case 24:
                            e.prev = 24, e.t1 = e["catch"](15), console.log("获取正在审批的审批日志信息失败 :" + e.t1);
                        case 27:
                            return e.prev = 27, o = {}, e.next = 31, yt(t);
                        case 31:
                            r = e.sent, u["each"](r, (function(e, t) {
                                var r = d["d"](new Date(e.operate_time), "yyyy-MM-dd hh:mm:ss"),
                                    a = d["b"](e.approve_user),
                                    i = {
                                        id: e.id,
                                        employee: e.employee,
                                        appruser: a,
                                        color: "orange",
                                        content: "节点：".concat(d["b"](e.process_station), " , 待处理人： ").concat(d["b"](Pt(e.employee)), " ,  已处理人： ").concat(d["b"](Pt(a)), " , 审批：知会 , 时间：").concat(d["b"](r), " "),
                                        status: "sound",
                                        index: t
                                    };
                                n.push(i), o = i
                            })), l["d"]("workflows_notify_node_by_data_id@".concat(t), JSON.stringify(o), 60), e.next = 39;
                            break;
                        case 36:
                            e.prev = 36, e.t2 = e["catch"](27), console.log("获取正在审批的知会日志信息异常：" + e.t2);
                        case 39:
                            try {
                                l["d"]("workflows_by_data_id@".concat(t), JSON.stringify(n), 10)
                            } catch (i) {
                                console.log("save workflows data error :" + i)
                            }
                        case 40:
                            return e.abrupt("return", n);
                        case 41:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [5, 12],
                    [15, 24],
                    [27, 36]
                ])
            }))), qt.apply(this, arguments)
        }

        function Ft(e) {
            return $t.apply(this, arguments)
        }

        function $t() {
            return $t = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(m.restapi, "/api/sys_depart?_where=(org_code,eq,").concat(t, ")"), e.prev = 1, e.next = 4, s.a.get(n).set("accept", "json");
                        case 4:
                            return r = e.sent, console.log(r), e.abrupt("return", r.body[0]);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), $t.apply(this, arguments)
        }

        function Gt(e) {
            return Wt.apply(this, arguments)
        }

        function Wt() {
            return Wt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o, i, c, s, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = window.location.href.split(window.location.host)[1], r = "", a = d["g"]("table_name"), o = d["g"]("id"), i = d["g"]("user"), n.includes("/workflow/view") || n.includes("/basewflow/view")) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 7:
                            try {
                                t.formName = Rt(a), t.username = i
                            } catch (l) {
                                console.log("query base info error :" + l)
                            }
                            return e.prev = 8, e.next = 11, H(a, o);
                        case 11:
                            t.curRow = e.sent, e.next = 17;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](8), console.log("query cur row info error :" + e.t0);
                        case 17:
                            if ("undefined" != typeof t.curRow && null != t.curRow) {
                                e.next = 31;
                                break
                            }
                            return e.prev = 18, c = "此表单数据已经被删除，无法查看此数据！", e.next = 22, Kt(a, o);
                        case 22:
                            s = e.sent, t.$confirm_({
                                title: "提示",
                                content: c,
                                onOk: function() {
                                    t.$root.$tabs.closeTab(n)
                                }
                            }), console.log("此表单数据已经被删除，无法查看此数据，result :" + s), e.next = 30;
                            break;
                        case 27:
                            e.prev = 27, e.t1 = e["catch"](18), console.log("message confirm error :" + e.t1);
                        case 30:
                            return e.abrupt("return", !1);
                        case 31:
                            return e.prev = 31, e.next = 34, H("sys_depart", t.curRow.department || t.curRow.depart_name || t.curRow.sys_org_code);
                        case 34:
                            r = e.sent, e.next = 40;
                            break;
                        case 37:
                            e.prev = 37, e.t2 = e["catch"](31), console.log("query department error :" + e.t2);
                        case 40:
                            if (e.prev = 40, e.t3 = r, e.t3) {
                                e.next = 46;
                                break
                            }
                            return e.next = 45, Ft(t.curRow.sys_org_code);
                        case 45:
                            e.t3 = e.sent;
                        case 46:
                            r = e.t3, e.next = 52;
                            break;
                        case 49:
                            e.prev = 49, e.t4 = e["catch"](40), console.log("query department error :" + e.t4);
                        case 52:
                            return e.prev = 52, e.next = 55, Ut(t.curRow.id);
                        case 55:
                            t.workflows = e.sent, e.next = 61;
                            break;
                        case 58:
                            e.prev = 58, e.t5 = e["catch"](52), console.log("watch form leave error :" + e.t5);
                        case 61:
                            try {
                                t.curRow.leave_type_name = xt(t.curRow.leave_off_type) || St(a), t.curRow.bpm_status_name = Et(t.curRow.bpm_status)
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            try {
                                t.curRow.starttime = d["d"](t.curRow.starttime, "yyyy-MM-dd hh:mm:ss"), "--" == t.curRow.starttime && (t.curRow.starttime = d["d"](t.curRow.create_time, "yyyy-MM-dd hh:mm:ss"))
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            try {
                                t.curRow.endtime = d["d"](t.curRow.endtime, "yyyy-MM-dd hh:mm:ss"), t.curRow.create_time = d["d"](t.curRow.create_time, "yyyy-MM-dd hh:mm:ss")
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            try {
                                t.curRow.formTypeName = Lt(a)
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            try {
                                t.curRow.main_table_status = Ct(a), t.curRow.sub_columns = Mt(a)
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            return e.prev = 66, e.next = 69, At(a, "foreign_key_id", o);
                        case 69:
                            t.curRow.sub_data = e.sent, e.next = 75;
                            break;
                        case 72:
                            e.prev = 72, e.t6 = e["catch"](66), console.log("watch form leave error :" + e.t6);
                        case 75:
                            try {
                                t.curRow.startTimeName = jt(a) || "开始", t.curRow.endTimeName = Tt(a) || "结束", t.curRow.fileNameTitle = Dt(a) || "文件名称"
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            try {
                                t.curRow.fieldName = {}
                            } catch (l) {
                                console.log("watch form leave error :" + l)
                            }
                            return e.prev = 77, e.next = 80, dn(a, o);
                        case 80:
                            t.wflowstatus = e.sent, e.next = 86;
                            break;
                        case 83:
                            e.prev = 83, e.t7 = e["catch"](77), console.log("query workflow status error :" + e.t7);
                        case 86:
                            return e.prev = 86, e.next = 89, ae("v_table_field", a, "file_name");
                        case 89:
                            u = e.sent, "undefined" != typeof u && (t.curRow.fieldName["file_name"] = u["txt"]), e.next = 96;
                            break;
                        case 93:
                            e.prev = 93, e.t8 = e["catch"](86), console.log("setup fieldName info error :" + e.t8);
                        case 96:
                            try {
                                t.depart = r, t.curRow.depart_name = r.depart_name
                            } catch (l) {
                                console.log("setup department error : " + l)
                            }
                            return e.abrupt("return", t);
                        case 98:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [8, 14],
                    [18, 27],
                    [31, 37],
                    [40, 49],
                    [52, 58],
                    [66, 72],
                    [77, 83],
                    [86, 93]
                ])
            }))), Wt.apply(this, arguments)
        }

        function Kt(e, t) {
            return Ht.apply(this, arguments)
        }

        function Ht() {
            return Ht = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = null, e.prev = 1, e.next = 4, Fe(t, n);
                        case 4:
                            return a = e.sent, e.next = 7, Ue(t, n);
                        case 7:
                            if (o = e.sent, "" == d["b"](a)) {
                                e.next = 12;
                                break
                            }
                            return e.next = 11, Vt(t, a);
                        case 11:
                            r = e.sent;
                        case 12:
                            if ("" == d["b"](o)) {
                                e.next = 16;
                                break
                            }
                            return e.next = 15, Vt(t, o);
                        case 15:
                            r = e.sent;
                        case 16:
                            e.next = 21;
                            break;
                        case 18:
                            e.prev = 18, e.t0 = e["catch"](1), console.log(e.t0);
                        case 21:
                            return e.abrupt("return", r);
                        case 22:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 18]
                ])
            }))), Ht.apply(this, arguments)
        }

        function Vt(e, t) {
            return Yt.apply(this, arguments)
        }

        function Yt() {
            return Yt = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o, i, c, s, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = null, e.prev = 1, e.next = 4, Ve(t, n);
                        case 4:
                            return r = e.sent, e.next = 7, ze(t, n);
                        case 7:
                            r = e.sent, e.next = 13;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.log(e.t0);
                        case 13:
                            if (e.prev = 13, !(n instanceof Array && n.length > 0)) {
                                e.next = 46;
                                break
                            }
                            a = !0, o = !1, i = void 0, e.prev = 18, c = n[Symbol.iterator]();
                        case 20:
                            if (a = (s = c.next()).done) {
                                e.next = 30;
                                break
                            }
                            return u = s.value, u["operate_time"] = d["d"](u["operate_time"], "yyyy-MM-dd hh:mm:ss"), u["create_time"] = d["d"](u["create_time"], "yyyy-MM-dd hh:mm:ss"), e.next = 26, tt(u);
                        case 26:
                            r = e.sent;
                        case 27:
                            a = !0, e.next = 20;
                            break;
                        case 30:
                            e.next = 36;
                            break;
                        case 32:
                            e.prev = 32, e.t1 = e["catch"](18), o = !0, i = e.t1;
                        case 36:
                            e.prev = 36, e.prev = 37, a || null == c.return || c.return();
                        case 39:
                            if (e.prev = 39, !o) {
                                e.next = 42;
                                break
                            }
                            throw i;
                        case 42:
                            return e.finish(39);
                        case 43:
                            return e.finish(36);
                        case 44:
                            e.next = 51;
                            break;
                        case 46:
                            return n["operate_time"] = d["d"](n["operate_time"], "yyyy-MM-dd hh:mm:ss"), n["create_time"] = d["d"](n["create_time"], "yyyy-MM-dd hh:mm:ss"), e.next = 50, tt(n);
                        case 50:
                            r = e.sent;
                        case 51:
                            e.next = 56;
                            break;
                        case 53:
                            e.prev = 53, e.t2 = e["catch"](13), console.log(e.t2);
                        case 56:
                            return e.abrupt("return", r);
                        case 57:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10],
                    [13, 53],
                    [18, 32, 36, 44],
                    [37, , 39, 43]
                ])
            }))), Yt.apply(this, arguments)
        }

        function zt(e) {
            return Jt.apply(this, arguments)
        }

        function Jt() {
            return Jt = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, a, o, i, c, s, l, p;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = "", e.prev = 1, r = d["b"](t).toLowerCase(), r.includes("doc") || r.includes("ppt") || r.includes("xls") || r.includes("pdf")) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 5:
                            return a = [], t.indexOf(",") > 0 ? a = t.split(",") : a.push(t), n = u["find"](a, (function(e) {
                                return e = d["b"](e).toLowerCase(), e.includes("doc") || e.includes("ppt") || e.includes("xls") || e.includes("pdf")
                            })), o = window._CONFIG["viewURL"], n = window._CONFIG["downloadURL"] + "/" + n, i = "".concat(n), c = n.replace("files/", "files/convert/"), c = c.substring(0, c.lastIndexOf(".")), s = d["b"](n).substring(n.lastIndexOf("."), n.length).toLowerCase(), n = d["b"](s).includes("xls") ? c + ".html" : n, n = d["b"](s).includes("doc") || d["b"](s).includes("ppt") || d["b"](s).includes("pdf") ? c + ".pdf" : n, l = decodeURIComponent(n), console.log("checkURL :" + l), c = encodeURIComponent(c), n = d["b"](s).includes("doc") || d["b"](s).includes("ppt") || d["b"](s).includes("pdf") ? o + c + ".pdf" : n, e.next = 22, fn(l);
                        case 22:
                            p = e.sent, p || (n = window._CONFIG["previewURL"] + i, console.log("地址不存在：" + n)), console.log("preview url :" + n), e.next = 30;
                            break;
                        case 27:
                            e.prev = 27, e.t0 = e["catch"](1), console.log("query file view url error :" + e.t0);
                        case 30:
                            return e.abrupt("return", n);
                        case 31:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 27]
                ])
            }))), Jt.apply(this, arguments)
        }

        function Xt(e) {
            var t = "",
                n = "";
            try {
                n = d["b"](e).toLowerCase()
            } catch (r) {
                n = "".concat(e)
            }
            try {
                t = n.includes("jpg") || n.includes("jpeg") || n.includes("bmp") || n.includes("gif") || n.includes("webp") || n.includes("svg") || n.includes("png") ? "@image@" : "", t = n.includes("doc") || n.includes("xls") || n.includes("ppt") || n.includes("pdf") ? "".concat(t, "@office@") : t
            } catch (r) {
                console.log("query file type error :" + r)
            }
            return console.log("url type :" + t), t
        }

        function Qt(e) {
            var t = [],
                n = [];
            try {
                if ("" == d["b"](e)) return [];
                d["b"](e).indexOf(",") > 0 ? t = e.split(",") : t.push(e)
            } catch (r) {
                console.log("query image url error :" + r)
            }
            try {
                t = u["filter"](t, (function(e) {
                    var t = d["b"](e).toLowerCase(),
                        r = t.includes("jpg") || t.includes("jpeg") || t.includes("bmp") || t.includes("gif") || t.includes("webp") || a.includes("svg") || t.includes("png"),
                        a = d["b"](t).substring(t.lastIndexOf("."), t.length).toLowerCase(),
                        o = e.replace("files/", "files/images/").replace(a, "_S240x160" + a);
                    e = window._CONFIG["downloadURL"] + "/" + e.replace("files/", "files/origin/"), o = window._CONFIG["downloadURL"] + "/" + o, t = o, o = window._CONFIG["thumborURL"] + encodeURIComponent(o);
                    var i = new Image;
                    return i.src = t, i.onload = function() {
                        r && n.push({
                            src: e,
                            msrc: o,
                            title: "图片预览",
                            w: 900,
                            h: 900 * i.height / i.width
                        })
                    }, r
                }))
            } catch (r) {
                console.log("query image url error :" + r)
            }
            return n
        }

        function Zt(e) {
            return en.apply(this, arguments)
        }

        function en() {
            return en = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = [], r = [], e.prev = 2, "" != d["b"](t)) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", []);
                        case 5:
                            d["b"](t).indexOf(",") > 0 ? n = t.split(",") : n.push(t), e.next = 11;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e["catch"](2), console.log("query office url error :" + e.t0);
                        case 11:
                            try {
                                n = u["filter"](n, (function(e) {
                                    var t = d["b"](e).toLowerCase(),
                                        n = window._CONFIG["downloadURL"] + "/",
                                        a = window._CONFIG["viewURL"],
                                        o = t.includes("jpg") || t.includes("jpeg") || t.includes("bmp") || t.includes("gif") || t.includes("webp") || t.includes("svg") || t.includes("png"),
                                        i = t;
                                    try {
                                        i = i.replace("files/", "")
                                    } catch (l) {
                                        console.log("设置文档名称异常：" + l)
                                    }
                                    n += e;
                                    var c = n.replace("files/", "files/convert/");
                                    c = c.substring(0, c.lastIndexOf("."));
                                    var s = d["b"](n).substring(n.lastIndexOf("."), n.length).toLowerCase();
                                    e = d["b"](s).includes("xls") ? c + ".html" : n, d["b"](s).includes("svg"), e = n, e = d["b"](s).includes("doc") || d["b"](s).includes("ppt") || d["b"](s).includes("pdf") ? c + ".pdf" : n;
                                    var u = "".concat(e);
                                    return c = encodeURIComponent(c), e = d["b"](s).includes("doc") || d["b"](s).includes("ppt") || d["b"](s).includes("pdf") ? a + c + ".pdf" : e, o || r.push({
                                        title: "文档",
                                        src: e,
                                        file: u,
                                        msrc: n,
                                        name: i
                                    }), o
                                }))
                            } catch (a) {
                                console.log("query office url error :" + a)
                            }
                            return e.abrupt("return", r);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 8]
                ])
            }))), en.apply(this, arguments)
        }

        function tn() {
            try {
                nn((function() {
                    rn()
                }), 100, 300, 500, 800, 1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3)
            } catch (e) {
                console.log("change image css error :" + e)
            }
            try {
                setTimeout((function() {
                    p(".fa-file-image-o", p("#fileviewFrame")).remove()
                }), 3e3)
            } catch (e) {
                console.log("hidden image icon of fileview framework")
            }
        }

        function nn(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var a = function() {
                    var t = i[o];
                    setTimeout((function() {
                        e(), console.log("执行callback函数 ，times:" + t)
                    }), t)
                }, o = 0, i = n; o < i.length; o++) a()
        }

        function rn() {
            p('figure[itemscope="itemscope"]').css("float", "left"), p('figure[itemscope="itemscope"]').css("margin-right", "10px"), p('figure[itemscope="itemscope"]').css("margin-bottom", "10px"), p(".pswp__caption__center").css("text-align", "center"), p(".pswp__img").css("height", "")
        }

        function an(e) {
            return on.apply(this, arguments)
        }

        function on() {
            return on = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = d["g"]("type"), e.prev = 1, "workflow" != n && "notify" != n) {
                                e.next = 13;
                                break
                            }
                            return e.next = 5, Ge(d["g"]("table_name"), d["g"]("processLogID"));
                        case 5:
                            if (r = e.sent, "" != d["b"](r)) {
                                e.next = 10;
                                break
                            }
                            return e.next = 9, Ne(d["g"]("table_name"), d["g"]("processLogID"));
                        case 9:
                            r = e.sent;
                        case 10:
                            t = "" == d["b"](r) ? "view" : t, e.next = 14;
                            break;
                        case 13:
                            "workflowing" == n && console.log("TODO 暂时不做");
                        case 14:
                            e.next = 19;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e["catch"](1), console.log("获取当前节点是否有知会或者审批节点信息异常:" + e.t0);
                        case 19:
                            return e.abrupt("return", t);
                        case 20:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 16]
                ])
            }))), on.apply(this, arguments)
        }

        function cn(e, t) {
            return sn.apply(this, arguments)
        }

        function sn() {
            return sn = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            try {
                                n.curRow = t.curRow
                            } catch (r) {
                                console.log("set curRow error :" + r)
                            }
                            try {
                                n.depart = t.depart
                            } catch (r) {
                                console.log("set depart error :" + r)
                            }
                            try {
                                n.workflows = t.workflows
                            } catch (r) {
                                console.log("set curRow workflows error :" + r)
                            }
                            try {
                                n.columns = t.curRow.sub_columns
                            } catch (r) {
                                console.log("set curRow sub_columns error :" + r)
                            }
                            try {
                                n.data = t.curRow.sub_data
                            } catch (r) {
                                console.log("set curRow sub_data error :" + r)
                            }
                            try {
                                n.pageType = d["g"]("type")
                            } catch (r) {
                                console.log("set curRow pageType error :" + r)
                            }
                            try {
                                n.curRow.fileStatus = "" == d["b"](n.curRow.files) ? 1 : 0
                            } catch (r) {
                                console.log("set curRow fileStatus error :" + r)
                            }
                            try {
                                n.curRow.fileType = Xt(n.curRow.files)
                            } catch (r) {
                                console.log("set curRow fileType error :" + r)
                            }
                            return e.prev = 8, e.next = 11, zt(n.curRow.files);
                        case 11:
                            n.curRow.fileURL = e.sent, e.next = 17;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e["catch"](8), console.log("set curRow fileURL error :" + e.t0);
                        case 17:
                            return e.prev = 17, e.next = 20, Zt(n.curRow.files);
                        case 20:
                            n.curRow.officeList = e.sent, e.next = 26;
                            break;
                        case 23:
                            e.prev = 23, e.t1 = e["catch"](17), console.log("set curRow OfficeURL error :" + e.t1);
                        case 26:
                            try {
                                n.slides = Qt(n.curRow.files)
                            } catch (r) {
                                console.log("set curRow slides error :" + r)
                            }
                            try {
                                n.tableName = d["g"]("table_name")
                            } catch (r) {
                                console.log("set curRow tableName error :" + r)
                            }
                            return e.prev = 28, e.next = 31, an(n.pageType);
                        case 31:
                            n.pageType = e.sent, e.next = 37;
                            break;
                        case 34:
                            e.prev = 34, e.t2 = e["catch"](28), console.log("set curRow pageType error :" + e.t2);
                        case 37:
                            return e.prev = 37, e.next = 40, un(n.tableName);
                        case 40:
                            n.tableInfo = e.sent, e.next = 46;
                            break;
                        case 43:
                            e.prev = 43, e.t3 = e["catch"](37), console.log("set tableInfo error :" + e.t3);
                        case 46:
                            try {
                                tn()
                            } catch (r) {
                                console.log("change image css error :" + r)
                            }
                            return e.abrupt("return", n);
                        case 48:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [8, 14],
                    [17, 23],
                    [28, 34],
                    [37, 43]
                ])
            }))), sn.apply(this, arguments)
        }

        function un(e) {
            return ln.apply(this, arguments)
        }

        function ln() {
            return ln = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Q("v_table_info", "id", t);
                        case 3:
                            if (n = e.sent, "" != d["b"](n) && n.length > 0) try {
                                n = d["b"](n[0]["value"])
                            } catch (r) {
                                console.log("tabale info :" + n)
                            }
                            if ("" != d["b"](n)) try {
                                n = JSON.parse(n)
                            } catch (r) {
                                console.log("tabale info :" + n)
                            }
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e["catch"](0), console.log("query table field info json error :" + e.t0);
                        case 11:
                            return e.abrupt("return", n);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 8]
                ])
            }))), ln.apply(this, arguments)
        }

        function dn(e, t) {
            return pn.apply(this, arguments)
        }

        function pn() {
            return pn = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, a, o, i, c, s, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return r = null, a = JSON.parse('{"start":{"status":"wait","name":"发起","color":""},"audit":{"status":"wait","name":"审核","color":""},"approve":{"status":"wait","name":"审批","color":""},"message":{"status":"wait","name":"知会","color":""}}'), o = JSON.parse('{"start":{"status":"finish","name":"发起","color":"skyblue"},"audit":{"status":"wait","name":"审核","color":""},"approve":{"status":"wait","name":"审批","color":""},"message":{"status":"wait","name":"知会","color":""}}'), i = JSON.parse('{"start":{"status":"finish","name":"发起","color":"skyblue"},"audit":{"status":"finish","name":"审核","color":""},"approve":{"status":"wait","name":"审批","color":""},"message":{"status":"wait","name":"知会","color":""}}'), c = JSON.parse('{"start":{"status":"finish","name":"发起","color":"skyblue"},"audit":{"status":"finish","name":"审核","color":""},"approve":{"status":"finish","name":"审批","color":""},"message":{"status":"wait","name":"知会","color":""}}'), s = JSON.parse('{"start":{"status":"finish","name":"发起","color":"skyblue"},"audit":{"status":"finish","name":"审核","color":""},"approve":{"status":"finish","name":"审批","color":""},"message":{"status":"finish","name":"知会","color":"pink"}}'), e.next = 8, H(t, n);
                        case 8:
                            return u = e.sent, r = "" != d["b"](u) && 1 == u.bpm_status ? a : "" != d["b"](u) && 2 == u.bpm_status ? o : "" != d["b"](u) && 3 == u.bpm_status ? i : "" != d["b"](u) && 4 == u.bpm_status ? c : "" != d["b"](u) && 5 == u.bpm_status ? s : a, console.log("tableName: ".concat(t, " \n\r id: ").concat(n)), e.abrupt("return", r);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), pn.apply(this, arguments)
        }

        function fn(e) {
            return mn.apply(this, arguments)
        }

        function mn() {
            return mn = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(window._CONFIG["validURL"]).concat(t), e.prev = 1, e.next = 4, s.a.get(n);
                        case 4:
                            return r = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(r)), e.abrupt("return", r.body.success);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), mn.apply(this, arguments)
        }

        function _n() {
            return hn.apply(this, arguments)
        }

        function hn() {
            return hn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/v_user/count"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), e.abrupt("return", n.body[0]["no_of_rows"]);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), hn.apply(this, arguments)
        }

        function bn() {
            return gn.apply(this, arguments)
        }

        function gn() {
            return gn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/v_workflow_total/count"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), e.abrupt("return", n.body[0]["no_of_rows"]);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](1), console.error(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 9]
                ])
            }))), gn.apply(this, arguments)
        }

        function yn() {
            return vn.apply(this, arguments)
        }

        function vn() {
            return vn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/v_workflow_monthly"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), r = n.body[0]["total"], e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), vn.apply(this, arguments)
        }

        function wn() {
            return On.apply(this, arguments)
        }

        function On() {
            return On = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = d["d"](new Date, "yyyy-MM-dd"), n = "".concat(m.restapi, "/api/v_workflow_total?_where=(ctime,eq,").concat(t, ")"), e.prev = 2, e.next = 5, s.a.get(n);
                        case 5:
                            return r = e.sent, console.log(" url :" + n + " result :" + JSON.stringify(r)), e.abrupt("return", r.body.length);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](2), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 10]
                ])
            }))), On.apply(this, arguments)
        }

        function kn() {
            return xn.apply(this, arguments)
        }

        function xn() {
            return xn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/v_workflow_daily"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), r = parseInt((n.body[0]["total"] - n.body[1]["total"]) / n.body[1]["total"] * 1e4) / 100, e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), xn.apply(this, arguments)
        }

        function En() {
            return Rn.apply(this, arguments)
        }

        function Rn() {
            return Rn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/v_workflow_monthly"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), r = parseInt((n.body[0]["total"] - n.body[1]["total"]) / n.body[1]["total"] * 1e4) / 100, e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), Rn.apply(this, arguments)
        }

        function Ln() {
            return Sn.apply(this, arguments)
        }

        function Sn() {
            return Sn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r, a;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = d["d"](new Date, "yyyy-MM"), n = "".concat(m.restapi, "/api/v_user_monthly?_where=(month,eq,").concat(t, ")"), e.prev = 2, e.next = 5, s.a.get(n);
                        case 5:
                            return r = e.sent, console.log(" url :" + n + " result :" + JSON.stringify(r)), a = r.body[0]["total"], e.abrupt("return", a);
                        case 11:
                            e.prev = 11, e.t0 = e["catch"](2), console.error(e.t0);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 11]
                ])
            }))), Sn.apply(this, arguments)
        }

        function Cn() {
            return jn.apply(this, arguments)
        }

        function jn() {
            return jn = Object(r["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(m.restapi, "/api/onl_cgform_head/count"), e.prev = 1, e.next = 4, s.a.get(t);
                        case 4:
                            return n = e.sent, console.log(" url :" + t + " result :" + JSON.stringify(n)), r = n.body[0]["no_of_rows"], e.abrupt("return", r);
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](1), console.error(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 10]
                ])
            }))), jn.apply(this, arguments)
        }

        function Tn(e) {
            return Dn.apply(this, arguments)
        }

        function Dn() {
            return Dn = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, f["e"](t);
                        case 2:
                            return n = e.sent, console.log("result :" + n), e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Dn.apply(this, arguments)
        }
    },
    "165a": function(e, t, n) {},
    "190f": function(e, t, n) {},
    "1a41": function(e, t, n) {},
    "1ab6": function(e, t, n) {
        "use strict";
        var r = n("a808"),
            a = n.n(r);
        a.a
    },
    "1c2b": function(e, t, n) {
        "use strict";
        var r = n("2bbe"),
            a = n.n(r);
        a.a
    },
    2191: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "setting-drawer"
                }, [n("a-drawer", {
                    style: {},
                    attrs: {
                        width: "300",
                        placement: "right",
                        closable: !1,
                        visible: e.visible
                    },
                    on: {
                        close: e.onClose
                    }
                }, [n("div", {
                    staticClass: "setting-drawer-index-content"
                }, [n("div", {
                    style: {
                        marginBottom: "24px"
                    }
                }, [n("h3", {
                    staticClass: "setting-drawer-index-title"
                }, [e._v("整体风格设置")]), n("div", {
                    staticClass: "setting-drawer-index-blockChecbox"
                }, [n("a-tooltip", [n("template", {
                    slot: "title"
                }, [e._v("\n                暗色菜单风格\n              ")]), n("div", {
                    staticClass: "setting-drawer-index-item",
                    on: {
                        click: function(t) {
                            return e.handleMenuTheme("dark")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",
                        alt: "dark"
                    }
                }), "dark" === e.navTheme ? n("div", {
                    staticClass: "setting-drawer-index-selectIcon"
                }, [n("a-icon", {
                    attrs: {
                        type: "check"
                    }
                })], 1) : e._e()])], 2), n("a-tooltip", [n("template", {
                    slot: "title"
                }, [e._v("\n                亮色菜单风格\n              ")]), n("div", {
                    staticClass: "setting-drawer-index-item",
                    on: {
                        click: function(t) {
                            return e.handleMenuTheme("light")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",
                        alt: "light"
                    }
                }), "dark" !== e.navTheme ? n("div", {
                    staticClass: "setting-drawer-index-selectIcon"
                }, [n("a-icon", {
                    attrs: {
                        type: "check"
                    }
                })], 1) : e._e()])], 2)], 1)]), n("div", {
                    style: {
                        marginBottom: "24px"
                    }
                }, [n("h3", {
                    staticClass: "setting-drawer-index-title"
                }, [e._v("主题色")]), n("div", {
                    staticStyle: {
                        height: "20px"
                    }
                }, e._l(e.colorList, (function(t, r) {
                    return n("a-tooltip", {
                        key: r,
                        staticClass: "setting-drawer-theme-color-colorBlock"
                    }, [n("template", {
                        slot: "title"
                    }, [e._v("\n                " + e._s(t.key) + "\n              ")]), n("a-tag", {
                        attrs: {
                            color: t.color
                        },
                        on: {
                            click: function(n) {
                                return e.changeColor(t.color)
                            }
                        }
                    }, [t.color === e.primaryColor ? n("a-icon", {
                        attrs: {
                            type: "check"
                        }
                    }) : e._e()], 1)], 2)
                })), 1)]), n("a-divider"), n("div", {
                    style: {
                        marginBottom: "24px"
                    }
                }, [n("h3", {
                    staticClass: "setting-drawer-index-title"
                }, [e._v("导航模式")]), n("div", {
                    staticClass: "setting-drawer-index-blockChecbox"
                }, [n("a-tooltip", [n("template", {
                    slot: "title"
                }, [e._v("\n                侧边栏导航\n              ")]), n("div", {
                    staticClass: "setting-drawer-index-item",
                    on: {
                        click: function(t) {
                            return e.handleLayout("sidemenu")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",
                        alt: "sidemenu"
                    }
                }), "sidemenu" === e.layoutMode ? n("div", {
                    staticClass: "setting-drawer-index-selectIcon"
                }, [n("a-icon", {
                    attrs: {
                        type: "check"
                    }
                })], 1) : e._e()])], 2), n("a-tooltip", [n("template", {
                    slot: "title"
                }, [e._v("\n                顶部栏导航\n              ")]), n("div", {
                    staticClass: "setting-drawer-index-item",
                    on: {
                        click: function(t) {
                            return e.handleLayout("topmenu")
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: "https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",
                        alt: "topmenu"
                    }
                }), "sidemenu" !== e.layoutMode ? n("div", {
                    staticClass: "setting-drawer-index-selectIcon"
                }, [n("a-icon", {
                    attrs: {
                        type: "check"
                    }
                })], 1) : e._e()])], 2)], 1), n("div", {
                    style: {
                        marginTop: "24px"
                    }
                }, [n("a-list", {
                    attrs: {
                        split: !1
                    }
                }, [n("a-list-item", [n("a-tooltip", {
                    attrs: {
                        slot: "actions"
                    },
                    slot: "actions"
                }, [n("template", {
                    slot: "title"
                }, [e._v("\n                    该设定仅 [顶部栏导航] 时有效\n                  ")]), n("a-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "small",
                        defaultValue: e.contentWidth
                    },
                    on: {
                        change: e.handleContentWidthChange
                    }
                }, [n("a-select-option", {
                    attrs: {
                        value: "Fixed"
                    }
                }, [e._v("固定")]), "sidemenu" !== e.layoutMode ? n("a-select-option", {
                    attrs: {
                        value: "Fluid"
                    }
                }, [e._v("流式")]) : e._e()], 1)], 2), n("a-list-item-meta", [n("div", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("内容区域宽度")])])], 1), n("a-list-item", [n("a-switch", {
                    attrs: {
                        slot: "actions",
                        size: "small",
                        defaultChecked: e.fixedHeader
                    },
                    on: {
                        change: e.handleFixedHeader
                    },
                    slot: "actions"
                }), n("a-list-item-meta", [n("div", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("固定 Header")])])], 1), n("a-list-item", [n("a-switch", {
                    attrs: {
                        slot: "actions",
                        size: "small",
                        disabled: !e.fixedHeader,
                        defaultChecked: e.autoHideHeader
                    },
                    on: {
                        change: e.handleFixedHeaderHidden
                    },
                    slot: "actions"
                }), n("a-list-item-meta", [n("div", {
                    style: {
                        textDecoration: e.fixedHeader ? "unset" : "line-through"
                    },
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("下滑时隐藏 Header")])])], 1), n("a-list-item", [n("a-switch", {
                    attrs: {
                        slot: "actions",
                        size: "small",
                        disabled: "topmenu" === e.layoutMode,
                        checked: e.dataFixSiderbar
                    },
                    on: {
                        change: e.handleFixSiderbar
                    },
                    slot: "actions"
                }), n("a-list-item-meta", [n("div", {
                    style: {
                        textDecoration: "topmenu" === e.layoutMode ? "line-through" : "unset"
                    },
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("固定侧边菜单")])])], 1)], 1)], 1)]), n("a-divider"), n("div", {
                    style: {
                        marginBottom: "24px"
                    }
                }, [n("h3", {
                    staticClass: "setting-drawer-index-title"
                }, [e._v("其他设置")]), n("div", [n("a-list", {
                    attrs: {
                        split: !1
                    }
                }, [n("a-list-item", [n("a-switch", {
                    attrs: {
                        slot: "actions",
                        size: "small",
                        defaultChecked: e.colorWeak
                    },
                    on: {
                        change: e.onColorWeak
                    },
                    slot: "actions"
                }), n("a-list-item-meta", [n("div", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("色弱模式")])])], 1), n("a-list-item", [n("a-switch", {
                    attrs: {
                        slot: "actions",
                        size: "small",
                        defaultChecked: e.multipage
                    },
                    on: {
                        change: e.onMultipageWeak
                    },
                    slot: "actions"
                }), n("a-list-item-meta", [n("div", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [e._v("多页签模式")])])], 1)], 1)], 1)]), n("a-divider"), n("div", {
                    style: {
                        marginBottom: "24px"
                    }
                }, [n("a-alert", {
                    attrs: {
                        type: "warning"
                    }
                }, [n("span", {
                    attrs: {
                        slot: "message"
                    },
                    slot: "message"
                }, [e._v("\n              配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件\n              "), n("a", {
                    attrs: {
                        href: "https://github.com/sendya/ant-design-pro-vue/blob/master/src/defaultSettings.js",
                        target: "_blank"
                    }
                }, [e._v("src/defaultSettings.js")])])])], 1)], 1), e.visible ? n("div", {
                    staticClass: "setting-drawer-index-handle",
                    on: {
                        click: e.toggle
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "close"
                    }
                })], 1) : e._e()])], 1)
            },
            a = [],
            o = n("c16f"),
            i = n("5d9b"),
            c = n("4fe7"),
            s = n("5976"),
            u = n("ac0d"),
            l = n("ca00"),
            d = {
                components: {
                    DetailList: o["default"],
                    SettingItem: i["default"]
                },
                mixins: [u["a"], u["b"]],
                data: function() {
                    return {
                        visible: !0,
                        colorList: s["a"],
                        dataFixSiderbar: !1
                    }
                },
                watch: {},
                mounted: function() {
                    var e = this;
                    setTimeout((function() {
                        e.visible = !1
                    }), 16), this.primaryColor !== c["a"].primaryColor && Object(s["c"])(this.primaryColor), this.colorWeak !== c["a"].colorWeak && Object(s["b"])(this.colorWeak), this.multipage !== c["a"].multipage && this.$store.dispatch("ToggleMultipage", this.multipage)
                },
                methods: {
                    showDrawer: function() {
                        this.visible = !0
                    },
                    onClose: function() {
                        this.visible = !1
                    },
                    toggle: function() {
                        this.visible = !this.visible
                    },
                    onColorWeak: function(e) {
                        this.$store.dispatch("ToggleWeak", e), Object(s["b"])(e)
                    },
                    onMultipageWeak: function(e) {
                        this.$store.dispatch("ToggleMultipage", e)
                    },
                    handleMenuTheme: function(e) {
                        this.$store.dispatch("ToggleTheme", e)
                    },
                    handleLayout: function(e) {
                        this.$store.dispatch("ToggleLayoutMode", e), this.handleFixSiderbar(!1), Object(l["m"])()
                    },
                    handleContentWidthChange: function(e) {
                        this.$store.dispatch("ToggleContentWidth", e)
                    },
                    changeColor: function(e) {
                        this.primaryColor !== e && (this.$store.dispatch("ToggleColor", e), Object(s["c"])(e))
                    },
                    handleFixedHeader: function(e) {
                        this.$store.dispatch("ToggleFixedHeader", e)
                    },
                    handleFixedHeaderHidden: function(e) {
                        this.$store.dispatch("ToggleFixedHeaderHidden", e)
                    },
                    handleFixSiderbar: function(e) {
                        "topmenu" === this.layoutMode && (e = !1), this.dataFixSiderbar = e, this.$store.dispatch("ToggleFixSiderbar", e)
                    }
                }
            },
            p = d,
            f = (n("8559"), n("2877")),
            m = Object(f["a"])(p, r, a, !1, null, "4ce1208b", null);
        t["default"] = m.exports
    },
    "29b7": function(e, t, n) {
        "use strict";
        var r = n("190f"),
            a = n.n(r);
        a.a
    },
    "2bbe": function(e, t, n) {},
    "2bd9": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-modal", {
                    staticClass: "announcementCustomModal",
                    attrs: {
                        width: e.modelStyle.width,
                        visible: e.visible,
                        bodyStyle: e.bodyStyle,
                        destroyOnClose: "",
                        footer: null
                    },
                    on: {
                        cancel: e.handleCancel
                    }
                }, [n("template", {
                    slot: "title"
                }, [n("a-button", {
                    staticClass: "custom-btn",
                    attrs: {
                        icon: "fullscreen"
                    },
                    on: {
                        click: e.handleClickToggleFullScreen
                    }
                })], 1), n("a-card", {
                    staticClass: "daily-article",
                    attrs: {
                        loading: e.loading
                    }
                }, [n("a-card-meta", {
                    attrs: {
                        title: e.record.titile,
                        description: "发布人：" + e.record.sender + " 发布时间： " + e.record.sendTime
                    }
                }), n("a-divider"), n("span", {
                    staticClass: "article-content",
                    domProps: {
                        innerHTML: e._s(e.record.msgContent)
                    }
                })], 1)], 2)
            },
            a = [],
            o = {
                name: "SysAnnouncementModal",
                components: {},
                data: function() {
                    return {
                        title: "通知消息",
                        record: {},
                        labelCol: {
                            xs: {
                                span: 24
                            },
                            sm: {
                                span: 5
                            }
                        },
                        wrapperCol: {
                            xs: {
                                span: 24
                            },
                            sm: {
                                span: 16
                            }
                        },
                        visible: !1,
                        loading: !1,
                        bodyStyle: {
                            padding: "0",
                            height: .8 * window.innerHeight + "px",
                            "overflow-y": "auto"
                        },
                        modelStyle: {
                            width: "60%",
                            style: {
                                top: "20px"
                            },
                            fullScreen: !1
                        }
                    }
                },
                created: function() {},
                methods: {
                    detail: function(e) {
                        this.visible = !0, this.record = e
                    },
                    handleCancel: function() {
                        this.visible = !1
                    },
                    handleClickToggleFullScreen: function() {
                        var e = !this.modelStyle.fullScreen;
                        e ? (this.modelStyle.width = "100%", this.modelStyle.style.top = "20px") : (this.modelStyle.width = "60%", this.modelStyle.style.top = "50px"), this.modelStyle.fullScreen = e
                    }
                }
            },
            i = o,
            c = (n("0607"), n("b45a"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, "351468dc", null);
        t["default"] = s.exports
    },
    "32dc": function(e, t, n) {
        "use strict";
        var r = n("0431"),
            a = n.n(r);
        a.a
    },
    "345a": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("page-layout", {
                    attrs: {
                        desc: e.description,
                        title: e.getTitle,
                        "link-list": e.linkList,
                        search: e.search,
                        tabs: e.tabs
                    }
                }, [n("div", {
                    staticClass: "extra-img",
                    attrs: {
                        slot: "extra"
                    },
                    slot: "extra"
                }, [n("img", {
                    attrs: {
                        src: e.extraImage
                    }
                })]), n("route-view", {
                    ref: "content"
                })], 1)
            },
            a = [],
            o = (n("386d"), n("b445")),
            i = n("501f"),
            c = {
                name: "PageContent",
                components: {
                    RouteView: i["default"],
                    PageLayout: o["default"]
                },
                data: function() {
                    return {
                        title: "",
                        description: "",
                        linkList: [],
                        extraImage: "",
                        search: !1,
                        tabs: {}
                    }
                },
                mounted: function() {
                    this.getPageHeaderInfo()
                },
                updated: function() {
                    this.getPageHeaderInfo()
                },
                computed: {
                    getTitle: function() {
                        return this.$route.meta.title
                    }
                },
                methods: {
                    getPageHeaderInfo: function() {
                        this.title = this.$route.meta.title;
                        var e = this.$refs.content && this.$refs.content.$children[0];
                        e && (this.description = e.description, this.linkList = e.linkList, this.extraImage = e.extraImage, this.search = 1 == e.search, this.tabs = e.tabs)
                    }
                }
            },
            s = c,
            u = (n("c1da"), n("2877")),
            l = Object(u["a"])(s, r, a, !1, null, "c35c446c", null);
        t["default"] = l.exports
    },
    "365c": function(e, t, n) {
        "use strict";
        var r = {
            Login: "".concat(window._CONFIG["domainURL"], "/sys/login"),
            Logout: "".concat(window._CONFIG["domainURL"], "/sys/logout"),
            ForgePassword: "".concat(window._CONFIG["domainURL"], "/auth/forge-password"),
            Register: "".concat(window._CONFIG["domainURL"], "/auth/register"),
            SendSms: "".concat(window._CONFIG["domainURL"], "/account/sms"),
            UserInfo: "".concat(window._CONFIG["domainURL"], "/user/info")
        };
        t["a"] = r
    },
    "3bbb": function(e, t, n) {},
    "3dfd": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-locale-provider", {
                    attrs: {
                        locale: e.locale
                    }
                }, [n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view")], 1)])
            },
            a = [],
            o = n("677e"),
            i = n.n(o),
            c = n("8e95"),
            s = n.n(c),
            u = function(e) {
                var t = {
                        match: function() {
                            e && e(0)
                        },
                        unmatch: function() {
                            e && e(-1)
                        }
                    },
                    n = {
                        match: function() {
                            e && e(1)
                        }
                    };
                s.a.register("screen and (max-width: 1087.99px)", t), s.a.register("screen and (max-width: 767.99px)", n)
            },
            l = u,
            d = (n("0fea"), {
                data: function() {
                    return {
                        locale: i.a
                    }
                },
                created: function() {
                    var e = this;
                    l((function(t) {
                        0 === t ? (e.$store.commit("TOGGLE_DEVICE", "mobile"), e.$store.dispatch("setSidebar", !1)) : 1 === t ? (e.$store.commit("TOGGLE_DEVICE", "mobile"), e.$store.dispatch("setSidebar", !1)) : (e.$store.commit("TOGGLE_DEVICE", "desktop"), e.$store.dispatch("setSidebar", !0))
                    }))
                }
            }),
            p = d,
            f = (n("034f"), n("2877")),
            m = Object(f["a"])(p, r, a, !1, null, null, null);
        t["default"] = m.exports
    },
    4360: function(e, t, n) {
        "use strict";
        var r = n("8bbf"),
            a = n.n(r),
            o = n("9fb0"),
            i = {
                state: {
                    sidebar: {
                        opened: !0,
                        withoutAnimation: !1
                    },
                    device: "desktop",
                    theme: "",
                    layout: "",
                    contentWidth: "",
                    fixedHeader: !1,
                    fixSiderbar: !1,
                    autoHideHeader: !1,
                    color: null,
                    weak: !1,
                    multipage: !0
                },
                mutations: {
                    SET_SIDEBAR_TYPE: function(e, t) {
                        e.sidebar.opened = t, a.a.ls.set(o["l"], t)
                    },
                    CLOSE_SIDEBAR: function(e, t) {
                        a.a.ls.set(o["l"], !0), e.sidebar.opened = !1, e.sidebar.withoutAnimation = t
                    },
                    TOGGLE_DEVICE: function(e, t) {
                        e.device = t
                    },
                    TOGGLE_THEME: function(e, t) {
                        a.a.ls.set(o["j"], t), e.theme = t
                    },
                    TOGGLE_LAYOUT_MODE: function(e, t) {
                        a.a.ls.set(o["h"], t), e.layout = t
                    },
                    TOGGLE_FIXED_HEADER: function(e, t) {
                        a.a.ls.set(o["e"], t), e.fixedHeader = t
                    },
                    TOGGLE_FIXED_SIDERBAR: function(e, t) {
                        a.a.ls.set(o["g"], t), e.fixSiderbar = t
                    },
                    TOGGLE_FIXED_HEADER_HIDDEN: function(e, t) {
                        a.a.ls.set(o["f"], t), e.autoHideHeader = t
                    },
                    TOGGLE_CONTENT_WIDTH: function(e, t) {
                        a.a.ls.set(o["d"], t), e.contentWidth = t
                    },
                    TOGGLE_COLOR: function(e, t) {
                        a.a.ls.set(o["b"], t), e.color = t
                    },
                    TOGGLE_WEAK: function(e, t) {
                        a.a.ls.set(o["c"], t), e.weak = t
                    },
                    SET_MULTI_PAGE: function(e, t) {
                        a.a.ls.set(o["i"], t), e.multipage = t
                    }
                },
                actions: {
                    setSidebar: function(e, t) {
                        var n = e.commit;
                        n("SET_SIDEBAR_TYPE", t)
                    },
                    CloseSidebar: function(e, t) {
                        var n = e.commit,
                            r = t.withoutAnimation;
                        n("CLOSE_SIDEBAR", r)
                    },
                    ToggleDevice: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_DEVICE", t)
                    },
                    ToggleTheme: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_THEME", t)
                    },
                    ToggleLayoutMode: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_LAYOUT_MODE", t)
                    },
                    ToggleFixedHeader: function(e, t) {
                        var n = e.commit;
                        t || n("TOGGLE_FIXED_HEADER_HIDDEN", !1), n("TOGGLE_FIXED_HEADER", t)
                    },
                    ToggleFixSiderbar: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_FIXED_SIDERBAR", t)
                    },
                    ToggleFixedHeaderHidden: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_FIXED_HEADER_HIDDEN", t)
                    },
                    ToggleContentWidth: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_CONTENT_WIDTH", t)
                    },
                    ToggleColor: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_COLOR", t)
                    },
                    ToggleWeak: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_WEAK", t)
                    },
                    ToggleMultipage: function(e, t) {
                        var n = e.commit;
                        n("SET_MULTI_PAGE", t)
                    }
                }
            },
            c = i,
            s = n("7ded"),
            u = n("ca00"),
            l = n("4ec3"),
            d = n("0fea"),
            p = {
                state: {
                    token: "",
                    username: "",
                    realname: "",
                    welcome: "",
                    avatar: "",
                    permissionList: [],
                    info: {}
                },
                mutations: {
                    SET_TOKEN: function(e, t) {
                        e.token = t
                    },
                    SET_NAME: function(e, t) {
                        var n = t.username,
                            r = t.realname,
                            a = t.welcome;
                        e.username = n, e.realname = r, e.welcome = a
                    },
                    SET_AVATAR: function(e, t) {
                        e.avatar = t
                    },
                    SET_PERMISSIONLIST: function(e, t) {
                        e.permissionList = t
                    },
                    SET_INFO: function(e, t) {
                        e.info = t
                    }
                },
                actions: {
                    ValidateLogin: function(e, t) {
                        var n = e.commit;
                        return new Promise((function(e, r) {
                            Object(d["g"])("/cas/client/validateLogin", t).then((function(t) {
                                if (console.log("----cas 登录--------", t), t.success) {
                                    var r = t.result,
                                        i = r.userInfo;
                                    a.a.ls.set(o["a"], r.token, 6048e5), a.a.ls.set(o["p"], i.username, 6048e5), a.a.ls.set(o["o"], i, 6048e5), n("SET_TOKEN", r.token), n("SET_INFO", i), n("SET_NAME", {
                                        username: i.username,
                                        realname: i.realname,
                                        welcome: Object(u["n"])()
                                    }), n("SET_AVATAR", i.avatar), e(t)
                                } else e(t)
                            })).catch((function(e) {
                                r(e)
                            }))
                        }))
                    },
                    Login: function(e, t) {
                        var n = e.commit;
                        return new Promise((function(e, r) {
                            Object(s["a"])(t).then((function(t) {
                                if ("200" == t.code) {
                                    var i = t.result,
                                        c = i.userInfo;
                                    a.a.ls.set(o["a"], i.token, 6048e5), a.a.ls.set(o["p"], c.username, 6048e5), a.a.ls.set(o["o"], c, 6048e5), n("SET_TOKEN", i.token), n("SET_INFO", c), n("SET_NAME", {
                                        username: c.username,
                                        realname: c.realname,
                                        welcome: Object(u["n"])()
                                    }), n("SET_AVATAR", c.avatar), e(t)
                                } else r(t)
                            })).catch((function(e) {
                                r(e)
                            }))
                        }))
                    },
                    PhoneLogin: function(e, t) {
                        var n = e.commit;
                        return new Promise((function(e, r) {
                            Object(s["c"])(t).then((function(t) {
                                if ("200" == t.code) {
                                    var i = t.result,
                                        c = i.userInfo;
                                    a.a.ls.set(o["a"], i.token, 6048e5), a.a.ls.set(o["p"], c.username, 6048e5), a.a.ls.set(o["o"], c, 6048e5), n("SET_TOKEN", i.token), n("SET_INFO", c), n("SET_NAME", {
                                        username: c.username,
                                        realname: c.realname,
                                        welcome: Object(u["n"])()
                                    }), n("SET_AVATAR", c.avatar), e(t)
                                } else r(t)
                            })).catch((function(e) {
                                r(e)
                            }))
                        }))
                    },
                    GetPermissionList: function(e) {
                        var t = e.commit;
                        return new Promise((function(e, n) {
                            var r = a.a.ls.get(o["a"]),
                                i = {
                                    token: r
                                };
                            Object(l["A"])(i).then((function(r) {
                                var a = r.result.menu,
                                    i = r.result.auth,
                                    c = r.result.allAuth;
                                sessionStorage.setItem(o["n"], JSON.stringify(i)), sessionStorage.setItem(o["m"], JSON.stringify(c)), a && a.length > 0 ? t("SET_PERMISSIONLIST", a) : n("getPermissionList: permissions must be a non-null array !"), e(r)
                            })).catch((function(e) {
                                n(e)
                            }))
                        }))
                    },
                    Logout: function(e) {
                        var t = e.commit,
                            n = e.state;
                        return new Promise((function(e) {
                            var r = n.token;
                            t("SET_TOKEN", ""), t("SET_PERMISSIONLIST", []), a.a.ls.remove(o["a"]), Object(s["b"])(r).then((function() {
                                e()
                            })).catch((function() {
                                e()
                            }))
                        }))
                    }
                }
            },
            f = p,
            m = n("d73b");

        function _(e, t) {
            if (t.meta && t.meta.permission) {
                for (var n = -1, r = 0, a = e.length; r < a; r++)
                    if (n = t.meta.permission.indexOf(e[r]), n >= 0) return !0;
                return !1
            }
            return !0
        }

        function h(e, t) {
            var n = e.filter((function(e) {
                return !!_(t.permissionList, e) && (e.children && e.children.length && (e.children = h(e.children, t)), !0)
            }));
            return n
        }
        var b = {
                state: {
                    routers: m["b"],
                    addRouters: []
                },
                mutations: {
                    SET_ROUTERS: function(e, t) {
                        e.addRouters = t, e.routers = m["b"].concat(t), console.log("-----mutations---SET_ROUTERS----", t)
                    }
                },
                actions: {
                    GenerateRoutes: function(e, t) {
                        var n = e.commit;
                        return new Promise((function(e) {
                            var r, a = t.roles;
                            console.log("-----mutations---data----", t), r = h(m["a"], a), console.log("-----mutations---accessedRouters----", r), n("SET_ROUTERS", r), e()
                        }))
                    },
                    UpdateAppRouter: function(e, t) {
                        var n = e.commit;
                        return new Promise((function(e) {
                            var r = t.constRoutes;
                            n("SET_ROUTERS", r), e()
                        }))
                    }
                }
            },
            g = b,
            y = {
                device: function(e) {
                    return e.app.device
                },
                theme: function(e) {
                    return e.app.theme
                },
                color: function(e) {
                    return e.app.color
                },
                token: function(e) {
                    return e.user.token
                },
                avatar: function(e) {
                    return e.user.avatar = a.a.ls.get(o["o"]).avatar, e.user.avatar
                },
                username: function(e) {
                    return e.user.username
                },
                nickname: function(e) {
                    return e.user.realname = a.a.ls.get(o["o"]).realname, e.user.realname
                },
                welcome: function(e) {
                    return e.user.welcome
                },
                permissionList: function(e) {
                    return e.user.permissionList
                },
                userInfo: function(e) {
                    return e.user.info = a.a.ls.get(o["o"]), e.user.info
                },
                addRouters: function(e) {
                    return e.permission.addRouters
                }
            },
            v = y;
        t["a"] = new Vuex.Store({
            modules: {
                app: c,
                user: f,
                permission: g
            },
            state: {},
            mutations: {},
            actions: {},
            getters: v
        })
    },
    "442b": function(e, t, n) {},
    4490: function(e, t, n) {},
    4575: function(e, t, n) {},
    "4ec3": function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return D
        })), n.d(t, "d", (function() {
            return a
        })), n.d(t, "p", (function() {
            return o
        })), n.d(t, "e", (function() {
            return c
        })), n.d(t, "q", (function() {
            return s
        })), n.d(t, "F", (function() {
            return u
        })), n.d(t, "v", (function() {
            return l
        })), n.d(t, "H", (function() {
            return i
        })), n.d(t, "r", (function() {
            return d
        })), n.d(t, "h", (function() {
            return p
        })), n.d(t, "g", (function() {
            return f
        })), n.d(t, "t", (function() {
            return h
        })), n.d(t, "c", (function() {
            return m
        })), n.d(t, "o", (function() {
            return _
        })), n.d(t, "C", (function() {
            return b
        })), n.d(t, "B", (function() {
            return y
        })), n.d(t, "I", (function() {
            return v
        })), n.d(t, "A", (function() {
            return w
        })), n.d(t, "u", (function() {
            return O
        })), n.d(t, "z", (function() {
            return k
        })), n.d(t, "x", (function() {
            return x
        })), n.d(t, "y", (function() {
            return E
        })), n.d(t, "J", (function() {
            return R
        })), n.d(t, "i", (function() {
            return L
        })), n.d(t, "a", (function() {
            return S
        })), n.d(t, "m", (function() {
            return C
        })), n.d(t, "b", (function() {
            return j
        })), n.d(t, "n", (function() {
            return T
        })), n.d(t, "j", (function() {
            return M
        })), n.d(t, "k", (function() {
            return A
        })), n.d(t, "s", (function() {
            return I
        })), n.d(t, "w", (function() {
            return P
        })), n.d(t, "E", (function() {
            return N
        })), n.d(t, "G", (function() {
            return B
        })), n.d(t, "l", (function() {
            return U
        })), n.d(t, "D", (function() {
            return g
        }));
        var r = n("0fea"),
            a = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/role/add"), e)
            },
            o = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/role/edit"), e)
            },
            i = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/role/queryall"), e)
            },
            c = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/user/add"), e)
            },
            s = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/user/edit"), e)
            },
            u = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/user/queryUserRole"), e)
            },
            l = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/user/list"), e)
            },
            d = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/user/frozenBatch"), e)
            },
            p = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/user/checkOnlyUser"), e)
            },
            f = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/user/changPassword"), e)
            },
            m = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/permission/add"), e)
            },
            _ = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/permission/edit"), e)
            },
            h = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/list"), e)
            },
            b = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/queryTreeList"), e)
            },
            g = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/role/queryTreeList"), e)
            },
            y = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/queryRolePermission"), e)
            },
            v = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/permission/saveRolePermission"), e)
            },
            w = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/getUserPermissionByToken"), e)
            },
            O = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/getPermRuleListByPermId"), e)
            },
            k = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/permission/queryPermissionRule"), e)
            },
            x = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/sysDepart/queryTreeList"), e)
            },
            E = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/sysDepart/queryIdTree"), e)
            },
            R = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/sysDepart/searchBy"), e)
            },
            L = function(e) {
                return Object(r["b"])("".concat(window._CONFIG["domainURL"], "/sys/sysDepart/delete"), e)
            },
            S = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/dict/add"), e)
            },
            C = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/dict/edit"), e)
            },
            j = function(e) {
                return Object(r["n"])("".concat(window._CONFIG["domainURL"], "/sys/dictItem/add"), e)
            },
            T = function(e) {
                return Object(r["t"])("".concat(window._CONFIG["domainURL"], "/sys/dictItem/edit"), e)
            },
            D = function(e, t) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/dict/getDictItems/").concat(e), t)
            },
            M = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/annountCement/doReleaseData"), e)
            },
            A = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/annountCement/doReovkeData"), e)
            },
            I = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/loginfo"), e)
            },
            P = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/visitInfo"), e)
            },
            N = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/user/queryUserByDepId"), e)
            },
            B = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/user/queryUserRoleMap"), e)
            },
            U = function(e) {
                return Object(r["g"])("".concat(window._CONFIG["domainURL"], "/sys/duplicate/check"), e)
            }
    },
    "4fe7": function(e, t, n) {
        "use strict";
        t["a"] = {
            primaryColor: "#1890FF",
            navTheme: "dark",
            layout: "topmenu",
            contentWidth: "Fixed",
            fixedHeader: !1,
            fixSiderbar: !1,
            autoHideHeader: !1,
            colorWeak: !1,
            multipage: !1,
            storageOptions: {
                namespace: "pro__",
                name: "ls",
                storage: "local"
            }
        }
    },
    "501f": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "main"
                }, [n("keep-alive", [e.keepAlive ? n("router-view") : e._e()], 1), e.keepAlive ? e._e() : n("router-view")], 1)
            },
            a = [],
            o = {
                name: "RouteView",
                computed: {
                    keepAlive: function() {
                        return this.$route.meta.keepAlive
                    }
                }
            },
            i = o,
            c = n("2877"),
            s = Object(c["a"])(i, r, a, !1, null, null, null);
        t["default"] = s.exports
    },
    "52f3": function(e, t, n) {},
    "541a": function(e, t, n) {},
    "55f19": function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var r = n("3dfd"),
            a = n("c16e"),
            o = n.n(a),
            i = n("8bbf"),
            c = n.n(i),
            s = n("6389"),
            u = n.n(s),
            l = n("d73b");
        c.a.use(u.a);
        var d = new u.a({
                mode: "history",
                base: "/",
                scrollBehavior: function() {
                    return {
                        y: 0
                    }
                },
                routes: l["b"]
            }),
            p = n("4360"),
            f = n("b775"),
            m = n("f23d"),
            _ = n("3654"),
            h = (n("3aed"), n("8e6e"), n("456d"), n("6762"), n("2fdb"), n("bd86")),
            b = (n("7f7f"), n("ac6a"), n("323e")),
            g = n.n(b),
            y = (n("a5d8"), n("9fb0")),
            v = n("ca00");

        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function(t) {
                    Object(h["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        g.a.configure({
            showSpinner: !1
        });
        var k = ["/user/login", "/user/register", "/user/register-result", "/user/alteration", "/basewflow/home", "/basewflow/view", "/workflow/view", "/online/cgform", "/online/cgformList", "/exception/403", "/dashboard/monitor"],
            x = {
                redirect: null,
                path: "/dashboard/analysis",
                component: "dashboard/Analysis",
                route: "1",
                meta: {
                    keepAlive: !1,
                    icon: "home",
                    title: "首页"
                },
                name: "dashboard-analysis",
                id: "9502685863ab87f0ad1134142788a385"
            },
            E = {
                redirect: null,
                path: "/online",
                component: "layouts/RouteView",
                hidden: !0,
                route: "1",
                children: [{
                    path: "/online/cgform",
                    component: "modules/online/cgform/OnlCgformHeadList",
                    route: "1",
                    hidden: !0,
                    meta: {
                        keepAlive: !1,
                        title: "表单开发"
                    },
                    name: "online-cgform",
                    id: "8d4683aacaa997ab86b966b464360338"
                }, {
                    path: "/online/cgformList/:code",
                    component: "modules/online/cgform/auto/OnlCgformAutoList",
                    route: "1",
                    hidden: !0,
                    meta: {
                        keepAlive: !1,
                        title: "在线表单"
                    },
                    name: "online-cgformList-@code",
                    id: "54097c6a3cf50fad0793a34beff1efdf"
                }],
                meta: {
                    keepAlive: !1,
                    icon: "cloud",
                    title: "开发管理"
                },
                name: "online",
                id: "e41b69c57a941a3bbcce45032fe57605"
            },
            R = {
                redirect: null,
                path: "/account",
                component: "layouts/RouteView",
                route: "1",
                children: [{
                    path: "/",
                    component: "",
                    route: "1",
                    meta: {
                        keepAlive: !1,
                        title: "我的收藏"
                    },
                    name: "",
                    id: "1f5f9447dc66b864c8f71a0ce7753cef"
                }, {
                    path: "/account/center",
                    component: "account/center/Index",
                    route: "1",
                    meta: {
                        keepAlive: !1,
                        title: "个人中心"
                    },
                    name: "account-center",
                    id: "d86f58e7ab516d3bc6bfb1fe10585f97"
                }, {
                    path: "/account/settings/base",
                    component: "account/settings/Index",
                    route: "1",
                    children: [{
                        path: "/account/settings/base",
                        component: "account/settings/BaseSetting",
                        route: "1",
                        hidden: !0,
                        meta: {
                            keepAlive: !1,
                            title: "基本设置"
                        },
                        name: "account-settings-base",
                        id: "1367a93f2c410b169faa7abcbad2f77c"
                    }, {
                        path: "/account/settings/binding",
                        component: "account/settings/Binding",
                        route: "1",
                        meta: {
                            keepAlive: !1,
                            title: "账户绑定"
                        },
                        name: "account-settings-binding",
                        id: "4f66409ef3bbd69c1d80469d6e2a885e"
                    }, {
                        path: "/account/settings/custom",
                        component: "account/settings/Custom",
                        route: "1",
                        meta: {
                            keepAlive: !1,
                            title: "个性化设置"
                        },
                        name: "account-settings-custom",
                        id: "882a73768cfd7f78f3a37584f7299656"
                    }, {
                        path: "/account/settings/security",
                        component: "account/settings/Security",
                        route: "1",
                        meta: {
                            keepAlive: !1,
                            title: "安全设置"
                        },
                        name: "account-settings-security",
                        id: "ec8d607d0156e198b11853760319c646"
                    }, {
                        path: "/account/settings/notification",
                        component: "account/settings/Notification",
                        route: "1",
                        meta: {
                            keepAlive: !1,
                            title: "新消息通知"
                        },
                        name: "account-settings-notification",
                        id: "fedfbf4420536cacc0218557d263dfea"
                    }],
                    meta: {
                        keepAlive: !1,
                        title: "个人设置"
                    },
                    name: "account-settings-base",
                    id: "6e73eb3c26099c191bf03852ee1310a1",
                    alwaysShow: !0
                }, {
                    path: "/dashboard/workplace",
                    component: "dashboard/Workplace",
                    route: "1",
                    meta: {
                        keepAlive: !1,
                        title: "工作台"
                    },
                    name: "dashboard-workplace",
                    id: "8fb8172747a78756c11916216b8b8066"
                }],
                meta: {
                    keepAlive: !1,
                    icon: "user",
                    title: "个人管理"
                },
                name: "account",
                id: "717f6bee46f44a3897eca9abd6e2ec44"
            },
            L = {
                redirect: null,
                path: "/approval",
                component: "layouts/RouteView",
                route: "1",
                children: [{
                    path: "/online/cgformList/0b511f234f3847baa50106a14fff6215",
                    component: "modules/online/cgform/auto/OnlCgformApprList",
                    route: "0",
                    meta: {
                        keepAlive: !1,
                        title: "审批处理"
                    },
                    name: "online-cgformList-0b511f234f3847baa50106a14fff6215",
                    id: "7101b2508c7c325efd027779a78b0cca"
                }, {
                    path: "/online/cgformList/d11901bc44f24a66b25b37a7a04c611e",
                    component: "modules/online/cgform/auto/OnlCgformApprList",
                    route: "0",
                    meta: {
                        keepAlive: !1,
                        title: "知会确认"
                    },
                    name: "online-cgformList-d11901bc44f24a66b25b37a7a04c611e",
                    id: "81998caf9684374fe3355053d0985b43"
                }, {
                    path: "/online/cgformList/dae6cc0e7a7f4b7e9dc0fc36757fdc96",
                    component: "modules/online/cgform/auto/OnlCgformAutoList",
                    route: "0",
                    meta: {
                        keepAlive: !1,
                        title: "历史日志"
                    },
                    name: "online-cgformList-dae6cc0e7a7f4b7e9dc0fc36757fdc96",
                    id: "6172e3805981c4741bcc7979606fd2a1"
                }, {
                    path: "/workflow/view",
                    component: "jeecg/Workflow",
                    route: "1",
                    hidden: !0,
                    meta: {
                        keepAlive: !1,
                        title: "流程详情"
                    },
                    name: "workflow-view",
                    id: "423b32588d8a1a41a041ca41828c3335"
                }],
                meta: {
                    keepAlive: !1,
                    icon: "thunderbolt",
                    title: "审批管理"
                },
                name: "approval",
                id: "f5cebd5e62765834f9c1e2fb9db02b9e"
            },
            S = {
                redirect: null,
                path: "/administration",
                component: "layouts/RouteView",
                route: "1",
                children: [{
                    path: "/administration/attendance",
                    component: "layouts/RouteView",
                    route: "1",
                    children: [{
                        path: "/online/cgformList/b0ceb7cfb2b0487a96e03f50c413d762",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "请假"
                        },
                        name: "online-cgformList-b0ceb7cfb2b0487a96e03f50c413d762",
                        id: "b221d9a06d3f721a7b3db28d401dfd10"
                    }, {
                        path: "/online/cgformList/933e21cf445440abb8cfdae366082a62",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "外出"
                        },
                        name: "online-cgformList-933e21cf445440abb8cfdae366082a62",
                        id: "0c1397dcd8e1f0a2e7ad562bf6a96ab4"
                    }, {
                        path: "/online/cgformList/9ed5bc42eb934bbe8dac16ed1a3b103f",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "加班"
                        },
                        name: "online-cgformList-9ed5bc42eb934bbe8dac16ed1a3b103f",
                        id: "83a8283bed3cc696d13ad5d905508331"
                    }, {
                        path: "/online/cgformList/b0fee76c2ee84baeb9494b196b779e3e",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "考勤异常"
                        },
                        name: "online-cgformList-b0fee76c2ee84baeb9494b196b779e3e",
                        id: "e805373f43bd0ce4308248283770e0c8"
                    }],
                    meta: {
                        keepAlive: !1,
                        title: "考勤管理"
                    },
                    name: "administration-attendance",
                    id: "4fc7ede3cc0c510b0658f5afa074b651"
                }, {
                    path: "/administration/file",
                    component: "layouts/RouteView",
                    route: "1",
                    children: [{
                        path: "/online/cgformList/3da23c7955d84465a759d0f1830a0d00",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "档案及证照借阅"
                        },
                        name: "online-cgformList-3da23c7955d84465a759d0f1830a0d00",
                        id: "c7c17a470bfd9b63cda614ad7d816cef"
                    }],
                    meta: {
                        keepAlive: !1,
                        title: "档案管理"
                    },
                    name: "administration-file",
                    id: "fc6d2c71ca64e30d55c10a58e7834dd7"
                }, {
                    path: "/administration/seal",
                    component: "layouts/RouteView",
                    route: "1",
                    children: [{
                        path: "/online/cgformList/cfd4ee2d60fa48f585c157d524b0a108",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "用印申请(非合同)"
                        },
                        name: "online-cgformList-cfd4ee2d60fa48f585c157d524b0a108",
                        id: "21b0140b1af6f81205db5de9a79b1673"
                    }, {
                        path: "/online/cgformList/dd78c4c8a59e4ee3bd93ec011a3f6b4c",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "用印申请(合同)"
                        },
                        name: "online-cgformList-dd78c4c8a59e4ee3bd93ec011a3f6b4c",
                        id: "9c7d89e7cf4079ab199d176857d855ab"
                    }, {
                        path: "/online/cgformList/e412b58db17b4cbf8cb9833c118c2d3b",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "印章借用申请"
                        },
                        name: "online-cgformList-e412b58db17b4cbf8cb9833c118c2d3b",
                        id: "af1c707f9101f1777d6a407434250695"
                    }],
                    meta: {
                        keepAlive: !1,
                        title: "印章管理"
                    },
                    name: "administration-seal",
                    id: "d40412e448b5b75be73e9e15985676f6"
                }, {
                    path: "/administration/travel",
                    component: "layouts/RouteView",
                    route: "1",
                    children: [{
                        path: "/online/cgformList/62f7122c73c244119e5d4ec8aa170a3d",
                        component: "modules/online/cgform/auto/OnlCgformAutoList",
                        route: "0",
                        meta: {
                            keepAlive: !1,
                            title: "出差申请"
                        },
                        name: "online-cgformList-62f7122c73c244119e5d4ec8aa170a3d",
                        id: "ea400444e39136516edd01104540dae8"
                    }],
                    meta: {
                        keepAlive: !1,
                        title: "差旅管理"
                    },
                    name: "administration-travel",
                    id: "58f36d0c9938862083278bdee5448cad"
                }],
                meta: {
                    keepAlive: !1,
                    icon: "team",
                    title: "行政管理"
                },
                name: "administration",
                id: "29bf8e546cdaacc7c21f8f4367bd1c52"
            },
            C = {
                redirect: null,
                path: "/isystem",
                component: "layouts/RouteView",
                route: "1",
                children: [{
                    path: "/isps/userAnnouncement",
                    component: "system/UserAnnouncementList",
                    route: "1",
                    meta: {
                        keepAlive: !1,
                        title: "我的消息"
                    },
                    name: "isps-userAnnouncement",
                    id: "53a9230444d33de28aa11cc108fb1dba"
                }, {
                    path: "/isystem/annountCement",
                    component: "system/SysAnnouncementList",
                    route: "1",
                    meta: {
                        keepAlive: !1,
                        title: "系统通告"
                    },
                    name: "isystem-annountCement",
                    id: "e08cb190ef230d5d4f03824198773950"
                }],
                meta: {
                    keepAlive: !1,
                    icon: "setting",
                    title: "系统管理"
                },
                name: "isystem",
                id: "d7d6e2e4e2934f2c9385a623fd98c6f3"
            },
            j = '{"path":"/workflow/view","component":"jeecg/Workflow","route":"1","hidden":true,"meta":{"keepAlive":false,"title":"流程详情"},"name":"workflow-view","id":"423b32588d8a1a41a041ca41828c3335"}';
        d.beforeEach((function(e, t, n) {
            g.a.start(), c.a.ls.get(y["a"]) ? "/user/login" === e.path ? (n({
                path: "/dashboard/workplace"
            }), g.a.done()) : 0 === p["a"].getters.permissionList.length ? p["a"].dispatch("GetPermissionList").then((function(r) {
                var a = !1,
                    o = !1,
                    i = !1,
                    c = !1,
                    s = !1,
                    u = !1;
                r.result.menu.forEach((function(e) {
                    "/online" == e.path && "online" == e.name && (a = !0), "/account" == e.path && "account" == e.name && (o = !0), "/approval" == e.path && "approval" == e.name && (i = !0, e.children.push(JSON.parse(j))), "/isystem" == e.path && "isystem" == e.name && (c = !0), "/dashboard/analysis" == e.path && (s = !0), "/administration" == e.path && (u = !0)
                })), s || r.result.menu.push(x), o || r.result.menu.push(R), i || r.result.menu.push(L), u || r.result.menu.push(S), c || r.result.menu.push(C), a || r.result.menu.push(E);
                var l = r.result.menu;
                if (console.log(r.result.menu), null !== l && "" !== l && void 0 !== l) {
                    var f = [];
                    f = Object(v["e"])(l), p["a"].dispatch("UpdateAppRouter", {
                        constRoutes: f
                    }).then((function() {
                        d.addRoutes(p["a"].getters.addRouters);
                        var r = decodeURIComponent(t.query.redirect || e.path);
                        e.path === r ? n(O({}, e, {
                            replace: !0
                        })) : n({
                            path: r
                        })
                    }))
                }
            })).catch((function() {
                p["a"].dispatch("Logout").then((function() {
                    n({
                        path: "/user/login",
                        query: {
                            redirect: e.fullPath
                        }
                    })
                }))
            })) : n() : -1 !== k.indexOf(e.path) || e.path.includes("/online/cgformList/") ? n() : (n({
                path: "/user/login",
                query: {
                    redirect: e.fullPath
                }
            }), g.a.done())
        })), d.afterEach((function() {
            g.a.done()
        }));
        n("6b54"), n("a481");
        var T = n("5a0c");
        c.a.filter("NumberFormat", (function(e) {
            if (!e) return "0";
            var t = e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
            return t
        })), c.a.filter("dayjs", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return T(e).format(t)
        })), c.a.filter("moment", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return T(e).format(t)
        })), c.a.filter("ellipsis", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
            return e ? (console.log("vlength: " + t), e.length > t ? e.slice(0, t) + "..." : e) : ""
        }));
        var D = n("c79a"),
            M = n.n(D),
            A = n("1321"),
            I = n.n(A),
            P = n("d1d4"),
            N = n.n(P),
            B = (n("394c"), n("57a56"), n("e1fc"), n("f825")),
            U = n.n(B),
            q = (n("f8ce"), n("5c96")),
            F = n.n(q),
            $ = (n("0fae"), n("4d38")),
            G = n.n($),
            W = n("4328"),
            K = n.n(W),
            H = n("4fe7"),
            V = n("7b16"),
            Y = {
                install: function(e) {
                    e.component("JDictSelectTag", V["default"])
                }
            },
            z = Y,
            J = (n("ac4d"), n("8a81"), {
                install: function(e, t) {
                    console.log(t), e.directive("has", {
                        inserted: function(e, t, n) {
                            console.log("页面权限控制----"), X(e, t, n) || Q(e, t, n)
                        }
                    })
                }
            });

        function X(e, t, n) {
            console.log("页面权限--NODE--");
            var r = [];
            try {
                var a = n.context.$props.formData;
                if (a) {
                    var o = a.permissionList,
                        i = !0,
                        c = !1,
                        s = void 0;
                    try {
                        for (var u, l = o[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                            var d = u.value;
                            "2" != d.type && r.push(d)
                        }
                    } catch (O) {
                        c = !0, s = O
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (c) throw s
                        }
                    }
                }
            } catch (k) {}
            if (null === r || "" === r || void 0 === r || r.length <= 0) return !1;
            for (var p = [], f = 0, m = r; f < m.length; f++) {
                var _ = m[f];
                "2" != _.type && p.push(_.action)
            }
            if (!p.includes(t.value)) return !1;
            var h = !0,
                b = !1,
                g = void 0;
            try {
                for (var y, v = r[Symbol.iterator](); !(h = (y = v.next()).done); h = !0) {
                    var w = y.value;
                    if (t.value === w.action) return !0
                }
            } catch (O) {
                b = !0, g = O
            } finally {
                try {
                    h || null == v.return || v.return()
                } finally {
                    if (b) throw g
                }
            }
            return !1
        }

        function Q(e, t, n) {
            console.log("页面权限--Global--");
            var r = [],
                a = [],
                o = JSON.parse(sessionStorage.getItem(y["n"]) || "[]"),
                i = !0,
                c = !1,
                s = void 0;
            try {
                for (var u, l = o[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                    var d = u.value;
                    "2" != d.type && r.push(d)
                }
            } catch (T) {
                c = !0, s = T
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (c) throw s
                }
            }
            var p = JSON.parse(sessionStorage.getItem(y["m"]) || "[]"),
                f = !0,
                m = !1,
                _ = void 0;
            try {
                for (var h, b = p[Symbol.iterator](); !(f = (h = b.next()).done); f = !0) {
                    var g = h.value;
                    "2" != g.type && a.push(g)
                }
            } catch (T) {
                m = !0, _ = T
            } finally {
                try {
                    f || null == b.return || b.return()
                } finally {
                    if (m) throw _
                }
            }
            var v = !1;
            if (null != a && "" != a && void 0 != a && a.length > 0) {
                var w = !0,
                    O = !1,
                    k = void 0;
                try {
                    for (var x, E = a[Symbol.iterator](); !(w = (x = E.next()).done); w = !0) {
                        var R = x.value;
                        if (t.value === R.action && "0" == R.status) {
                            v = !0;
                            break
                        }
                    }
                } catch (T) {
                    O = !0, k = T
                } finally {
                    try {
                        w || null == E.return || E.return()
                    } finally {
                        if (O) throw k
                    }
                }
            }
            if (!v)
                if (null === r || "" === r || void 0 === r || r.length <= 0) e.parentNode.removeChild(e);
                else {
                    for (var L = [], S = 0, C = r; S < C.length; S++) {
                        var j = C[S];
                        "2" != j.type && L.push(j.action)
                    }
                    L.includes(t.value) || e.parentNode.removeChild(e)
                }
        }
        var Z = J,
            ee = function(e) {
                e.prototype.$bus = new c.a
            },
            te = {
                install: ee
            },
            ne = n("c681"),
            re = function(e) {
                e.component("JFormContainer", ne["default"])
            },
            ae = {
                install: re
            },
            oe = n("888e"),
            ie = n.n(oe);
        try {
            Vue.use(G.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.prototype.$axios = axios, Vue.prototype.$qs = K.a
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.config.productionTip = !1
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(o.a, H["a"].storageOptions)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(m["a"])
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(f["a"], d)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(_["a"])
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(Z)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(z)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(M.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(I.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.component("apexchart", I.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(N.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(te)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(ae)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(U.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(ie.a, {
                mainClass: "pswp--minimal--dark",
                barsSize: {
                    top: 0,
                    bottom: 0
                },
                captionEl: !0,
                fullscreenEl: !0,
                shareEl: !1,
                bgOpacity: .99,
                tapToClose: !0,
                tapToToggleControls: !1
            })
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.prototype.$confirm_ = Vue.prototype.$confirm, Vue.prototype.$message_ = Vue.prototype.$message
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(F.a)
        } catch (ce) {
            console.log(ce)
        }
        try {
            Vue.use(F2)
        } catch (ce) {
            console.log(ce)
        }
        new Vue({
            router: d,
            store: p["a"],
            mounted: function() {
                p["a"].commit("SET_SIDEBAR_TYPE", Vue.ls.get(y["l"], !0)), p["a"].commit("TOGGLE_THEME", Vue.ls.get(y["j"], H["a"].navTheme)), p["a"].commit("TOGGLE_LAYOUT_MODE", Vue.ls.get(y["h"], H["a"].layout)), p["a"].commit("TOGGLE_FIXED_HEADER", Vue.ls.get(y["e"], H["a"].fixedHeader)), p["a"].commit("TOGGLE_FIXED_SIDERBAR", Vue.ls.get(y["g"], H["a"].fixSiderbar)), p["a"].commit("TOGGLE_CONTENT_WIDTH", Vue.ls.get(y["d"], H["a"].contentWidth)), p["a"].commit("TOGGLE_FIXED_HEADER_HIDDEN", Vue.ls.get(y["f"], H["a"].autoHideHeader)), p["a"].commit("TOGGLE_WEAK", Vue.ls.get(y["c"], H["a"].colorWeak)), p["a"].commit("TOGGLE_COLOR", Vue.ls.get(y["b"], H["a"].primaryColor)), p["a"].commit("SET_TOKEN", Vue.ls.get(y["a"])), p["a"].commit("SET_MULTI_PAGE", Vue.ls.get(y["i"], !0))
            },
            render: function(e) {
                return e(r["default"])
            }
        }).$mount("#app")
    },
    5880: function(e, t) {
        e.exports = Vuex
    },
    5976: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return i
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return c
        }));
        var r, a = n("f64c"),
            o = [{
                key: "薄暮",
                color: "#F5222D"
            }, {
                key: "火山",
                color: "#FA541C"
            }, {
                key: "日暮",
                color: "#FAAD14"
            }, {
                key: "明青",
                color: "#13C2C2"
            }, {
                key: "极光绿",
                color: "#52C41A"
            }, {
                key: "拂晓蓝（默认）",
                color: "#1890FF"
            }, {
                key: "极客蓝",
                color: "#2F54EB"
            }, {
                key: "酱紫",
                color: "#722ED1"
            }],
            i = function(e) {
                if (e) {
                    var t = a["a"].loading("正在编译主题！", 0);
                    if (r) c();
                    else {
                        var n = document.createElement("link"),
                            o = document.createElement("script"),
                            i = document.createElement("script");
                        n.setAttribute("rel", "stylesheet/less"), n.setAttribute("href", "/color.less"), o.innerHTML = "\n      window.less = {\n        async: true,\n        env: 'production',\n        javascriptEnabled: true\n      };\n    ", i.src = "https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js", i.async = !0, i.onload = function() {
                            c(), i.onload = null
                        }, document.body.appendChild(n), document.body.appendChild(o), document.body.appendChild(i), r = !0
                    }
                }

                function c() {
                    window.less && setTimeout((function() {
                        window.less.modifyVars({
                            "@primary-color": e
                        }).then((function() {
                            t()
                        })).catch((function() {
                            a["a"].error("Failed to update theme"), t()
                        }))
                    }), 200)
                }
            },
            c = function(e) {
                e ? document.body.classList.add("colorWeak") : document.body.classList.remove("colorWeak")
            }
    },
    "5c06": function(e, t, n) {},
    "5d2d": function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "d", (function() {
                return r
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return i
            }));
            var r = function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (e.window && t) {
                        "string" !== typeof n && (n = JSON.stringify(n));
                        var a = e.window.localStorage;
                        if (a.setItem(t, n), r && !isNaN(parseInt(r))) {
                            var o = parseInt((new Date).getTime() / 1e3);
                            a.setItem("".concat(t, "_expire"), o + r)
                        }
                    }
                },
                a = function(t) {
                    if (e.window && t) {
                        var n = window.localStorage.getItem(t),
                            r = window.localStorage.getItem("".concat(t, "_expire"));
                        if (r) {
                            var a = parseInt((new Date).getTime() / 1e3);
                            if (a > r) return
                        }
                        try {
                            return JSON.parse(n)
                        } catch (o) {
                            return n
                        }
                    }
                },
                o = function(t) {
                    e.window && t && (window.localStorage.removeItem(t), window.localStorage.removeItem("".concat(t, "_expire")))
                },
                i = function() {
                    e.window && name && window.localStorage.clear()
                }
        }).call(this, n("c8ba"))
    },
    "5d9b": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "setting-drawer-index-item"
                }, [n("h3", {
                    staticClass: "setting-drawer-index-title"
                }, [e._v(e._s(e.title))]), e._t("default"), e.divider ? n("a-divider") : e._e()], 2)
            },
            a = [],
            o = {
                name: "SettingItem",
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    divider: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            i = o,
            c = (n("32dc"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, "a6010090", null);
        t["default"] = s.exports
    },
    "5f32": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("global-layout", [n("transition", {
                    attrs: {
                        name: "page-transition"
                    }
                }, [e.keepAlive ? n("keep-alive", [n("router-view")], 1) : n("router-view")], 1)], 1)
            },
            a = [],
            o = n("8415"),
            i = {
                name: "BasicLayout",
                components: {
                    GlobalLayout: o["default"]
                },
                data: function() {
                    return {}
                },
                computed: {
                    keepAlive: function() {
                        return this.$route.meta.keepAlive
                    }
                },
                methods: {}
            },
            c = i,
            s = (n("a55d"), n("2877")),
            u = Object(s["a"])(c, r, a, !1, null, null, null);
        t["default"] = u.exports
    },
    "603b": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "page-header"
                }, [n("div", {
                    staticClass: "page-header-index-wide"
                }, [n("a-breadcrumb", {
                    staticClass: "breadcrumb"
                }, e._l(e.breadList, (function(t, r) {
                    return n("a-breadcrumb-item", {
                        key: r
                    }, [t.name != e.name ? n("router-link", {
                        attrs: {
                            to: {
                                path: t.path
                            }
                        }
                    }, [e._v("\n          " + e._s(t.meta.title) + "\n        ")]) : n("span", [e._v(e._s(t.meta.title))])], 1)
                })), 1), n("div", {
                    staticClass: "detail"
                }, [e.$route.meta.hiddenHeaderContent ? e._e() : n("div", {
                    staticClass: "main"
                }, [n("div", {
                    staticClass: "row"
                }, [e.logo ? n("img", {
                    staticClass: "logo",
                    attrs: {
                        src: e.logo
                    }
                }) : e._e(), e.title ? n("h1", {
                    staticClass: "title"
                }, [e._v(e._s(e.title))]) : e._e(), n("div", {
                    staticClass: "action"
                }, [e._t("action")], 2)]), n("div", {
                    staticClass: "row"
                }, [e.avatar ? n("div", {
                    staticClass: "avatar"
                }, [n("a-avatar", {
                    attrs: {
                        src: e.avatar
                    }
                })], 1) : e._e(), this.$slots.content ? n("div", {
                    staticClass: "headerContent"
                }, [e._t("content")], 2) : e._e(), this.$slots.extra ? n("div", {
                    staticClass: "extra"
                }, [e._t("extra")], 2) : e._e()]), n("div", [e._t("pageMenu")], 2)])])], 1)])
            },
            a = [],
            o = (n("ac6a"), n("7f7f"), n("e97b")),
            i = {
                name: "PageHeader",
                components: {
                    "s-breadcrumb": o["default"]
                },
                props: {
                    title: {
                        type: String,
                        default: "",
                        required: !1
                    },
                    breadcrumb: {
                        type: Array,
                        default: null,
                        required: !1
                    },
                    logo: {
                        type: String,
                        default: "",
                        required: !1
                    },
                    avatar: {
                        type: String,
                        default: "",
                        required: !1
                    }
                },
                data: function() {
                    return {
                        name: "",
                        breadList: []
                    }
                },
                created: function() {
                    this.getBreadcrumb()
                },
                methods: {
                    getBreadcrumb: function() {
                        var e = this;
                        this.breadList = [], this.name = this.$route.name, this.$route.matched.forEach((function(t) {
                            e.breadList.push(t)
                        }))
                    }
                },
                watch: {
                    $route: function() {
                        this.getBreadcrumb()
                    }
                }
            },
            c = i,
            s = (n("044e"), n("2877")),
            u = Object(s["a"])(c, r, a, !1, null, "596c5759", null);
        t["default"] = u.exports
    },
    "61f7": function(e, t, n) {
        "use strict";

        function r(e) {
            return /^http[s]?:\/\/.*/.test(e)
        }
        n.d(t, "a", (function() {
            return r
        }))
    },
    "630d": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.headerBarFixed ? e._e() : n("a-layout-header", {
                    class: [e.fixedHeader && "ant-header-fixedHeader", e.sidebarOpened ? "ant-header-side-opened" : "ant-header-side-closed"],
                    style: {
                        padding: "0"
                    }
                }, ["sidemenu" === e.mode ? n("div", {
                    staticClass: "header",
                    class: e.theme
                }, ["mobile" === e.device ? n("a-icon", {
                    staticClass: "trigger",
                    attrs: {
                        type: e.collapsed ? "menu-fold" : "menu-unfold"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.toggle(t)
                        }
                    }
                }) : n("a-icon", {
                    staticClass: "trigger",
                    attrs: {
                        type: e.collapsed ? "menu-unfold" : "menu-fold"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.toggle(t)
                        }
                    }
                }), "desktop" === e.device ? n("span", [e._v("欢迎进入OA办公系统")]) : n("span"), n("user-menu", {
                    attrs: {
                        theme: e.theme
                    }
                })], 1) : n("div", {
                    class: ["top-nav-header-index", e.theme]
                }, [n("div", {
                    staticClass: "header-index-wide"
                }, [n("div", {
                    staticClass: "header-index-left",
                    style: e.topMenuStyle.headerIndexLeft
                }, [n("logo", {
                    staticClass: "top-nav-header",
                    style: e.topMenuStyle.topNavHeader,
                    attrs: {
                        "show-title": "mobile" !== e.device
                    }
                }), "mobile" !== e.device ? n("div", {
                    style: e.topMenuStyle.topSmenuStyle
                }, [n("s-menu", {
                    attrs: {
                        mode: "horizontal",
                        menu: e.menus,
                        theme: e.theme
                    }
                })], 1) : n("a-icon", {
                    staticClass: "trigger",
                    attrs: {
                        type: e.collapsed ? "menu-fold" : "menu-unfold"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.toggle(t)
                        }
                    }
                })], 1), n("user-menu", {
                    staticClass: "header-index-right",
                    style: e.topMenuStyle.headerIndexRight,
                    attrs: {
                        theme: e.theme
                    }
                })], 1)])])
            },
            a = [],
            o = n("8d4d"),
            i = n("955f"),
            c = n("a250"),
            s = n("ac0d"),
            u = {
                name: "GlobalHeader",
                components: {
                    UserMenu: o["default"],
                    SMenu: i["a"],
                    Logo: c["default"]
                },
                mixins: [s["a"]],
                props: {
                    mode: {
                        type: String,
                        default: "sidemenu"
                    },
                    menus: {
                        type: Array,
                        required: !0
                    },
                    theme: {
                        type: String,
                        required: !1,
                        default: "dark"
                    },
                    collapsed: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    device: {
                        type: String,
                        required: !1,
                        default: "desktop"
                    }
                },
                data: function() {
                    return {
                        headerBarFixed: !1,
                        topMenuStyle: {
                            headerIndexLeft: {},
                            topNavHeader: {},
                            headerIndexRight: {},
                            topSmenuStyle: {}
                        }
                    }
                },
                watch: {
                    device: function() {
                        "topmenu" === this.mode && this.buildTopMenuStyle()
                    },
                    mode: function(e) {
                        "topmenu" === e && this.buildTopMenuStyle()
                    }
                },
                mounted: function() {
                    window.addEventListener("scroll", this.handleScroll), "topmenu" === this.mode && this.buildTopMenuStyle()
                },
                methods: {
                    handleScroll: function() {
                        if (this.autoHideHeader) {
                            var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                            this.headerBarFixed = e > 100
                        } else this.headerBarFixed = !1
                    },
                    toggle: function() {
                        this.$emit("toggle")
                    },
                    buildTopMenuStyle: function() {
                        if ("topmenu" === this.mode)
                            if ("mobile" === this.device) this.topMenuStyle.topNavHeader = {}, this.topMenuStyle.topSmenuStyle = {}, this.topMenuStyle.headerIndexRight = {}, this.topMenuStyle.headerIndexLeft = {};
                            else {
                                var e = "360px";
                                this.topMenuStyle.topNavHeader = {
                                    "min-width": "165px"
                                }, this.topMenuStyle.topSmenuStyle = {
                                    width: "calc(100% - 165px)"
                                }, this.topMenuStyle.headerIndexRight = {
                                    "min-width": e
                                }, this.topMenuStyle.headerIndexLeft = {
                                    width: "calc(100% - ".concat(e, ")")
                                }
                            }
                    }
                }
            },
            l = u,
            d = (n("ee78"), n("2877")),
            p = Object(d["a"])(l, r, a, !1, null, "753eec63", null);
        t["default"] = p.exports
    },
    6389: function(e, t) {
        e.exports = VueRouter
    },
    "64a9": function(e, t, n) {},
    "6e5c": function(e, t, n) {
        "use strict";
        var r = n("d354"),
            a = n.n(r);
        a.a
    },
    "757d": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481"),
            core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),
            _api_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0fea"),
            _ShowAnnouncement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2bd9"),
            _store___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4360");
        __webpack_exports__["a"] = {
            name: "HeaderNotice",
            components: {
                ShowAnnouncement: _ShowAnnouncement__WEBPACK_IMPORTED_MODULE_2__["default"]
            },
            data: function() {
                return {
                    loadding: !1,
                    url: {
                        listCementByUser: "".concat(window._CONFIG["domain"], "/sys/annountCement/listByUser"),
                        editCementSend: "".concat(window._CONFIG["domain"], "/sys/sysAnnouncementSend/editByAnntIdAndUserId"),
                        queryById: "".concat(window._CONFIG["domain"], "/sys/annountCement/queryById")
                    },
                    hovered: !1,
                    announcement1: [],
                    announcement2: [],
                    msg1Count: "0",
                    msg2Count: "0",
                    msg3Count: "0",
                    msg1Title: "通知(0)",
                    msg2Title: "",
                    msg3Title: "",
                    stopTimer: !1
                }
            },
            computed: {
                msgTotal: function() {
                    return parseInt(this.msg1Count) + parseInt(this.msg2Count) + +parseInt(this.msg3Count)
                }
            },
            mounted: function() {
                this.loadData(), this.initWebSocket()
            },
            destroyed: function() {
                this.websocketclose()
            },
            methods: {
                timerFun: function() {
                    var e = this;
                    this.stopTimer = !1;
                    var t = setInterval((function() {
                        1 != e.stopTimer ? e.loadData() : clearInterval(t)
                    }), 6e3)
                },
                loadData: function() {
                    var e = this;
                    try {
                        Object(_api_manage__WEBPACK_IMPORTED_MODULE_1__["g"])(this.url.listCementByUser).then((function(t) {
                            t.success && (e.announcement1 = t.result.anntMsgList, e.msg1Count = t.result.anntMsgTotal, e.msg1Title = "通知(" + t.result.anntMsgTotal + ")", e.announcement2 = t.result.sysMsgList, e.msg2Count = t.result.sysMsgTotal, e.msg2Title = "消息(" + t.result.sysMsgTotal + ")", e.announcement3 = t.result.sysMsgList, e.msg3Count = t.result.sysMsgTotal, e.msg3Title = "审批(" + t.result.sysMsgTotal + ")")
                        })).catch((function(t) {
                            console.log("系统消息通知异常", t), e.stopTimer = !0, console.log("清理timer")
                        }))
                    } catch (t) {
                        this.stopTimer = !0, console.log("通知异常", t)
                    }
                },
                fetchNotice: function() {
                    var e = this;
                    this.loadding ? this.loadding = !1 : (this.loadding = !0, setTimeout((function() {
                        e.loadding = !1
                    }), 200))
                },
                showAnnouncement: function(e) {
                    var t = this;
                    Object(_api_manage__WEBPACK_IMPORTED_MODULE_1__["t"])(this.url.editCementSend, {
                        anntId: e.id
                    }).then((function(e) {
                        e.success && t.loadData()
                    })), this.hovered = !1, this.$refs.ShowAnnouncement.detail(e)
                },
                toMyAnnouncement: function() {
                    this.$router.push({
                        path: "/isps/userAnnouncement",
                        name: "isps-userAnnouncement"
                    })
                },
                toMyApprove: function() {
                    this.$router.push({
                        path: "/online/cgformList/0b511f234f3847baa50106a14fff6215",
                        meta: {
                            title: "审批处理"
                        }
                    })
                },
                modalFormOk: function() {},
                handleHoverChange: function(e) {
                    this.hovered = e
                },
                initWebSocket: function() {
                    var e = _store___WEBPACK_IMPORTED_MODULE_3__["a"].getters.userInfo.id,
                        t = window._CONFIG["domainURL"].replace("https://", "wss://").replace("http://", "ws://") + "/websocket/" + e;
                    try {
                        this.websock = new WebSocket(t), this.websock.onopen = this.websocketonopen, this.websock.onerror = this.websocketonerror, this.websock.onmessage = this.websocketonmessage, this.websock.onclose = this.websocketclose
                    } catch (n) {
                        console.log("init websock error:" + n)
                    }
                },
                websocketonopen: function() {
                    console.log("WebSocket连接成功")
                },
                websocketonerror: function(e) {
                    console.log("WebSocket连接发生错误")
                },
                websocketonmessage: function websocketonmessage(e) {
                    console.log("-----接收消息-------", e.data);
                    var data = eval("(" + e.data + ")");
                    this.loadData(), this.openNotification(data)
                },
                websocketclose: function(e) {
                    console.log("connection closed (" + JSON.stringify(e) + ")")
                },
                openNotification: function(e) {
                    var t = this,
                        n = e.msgTxt,
                        r = "open".concat(Date.now());
                    this.$notification.open({
                        message: "消息提醒",
                        placement: "bottomRight",
                        description: n,
                        key: r,
                        btn: function(n) {
                            return n("a-button", {
                                props: {
                                    type: "primary",
                                    size: "small"
                                },
                                on: {
                                    click: function() {
                                        return t.showDetail(r, e)
                                    }
                                }
                            }, "查看详情")
                        }
                    })
                },
                showDetail: function(e, t) {
                    var n = this;
                    this.$notification.close(e);
                    var r = t.msgId;
                    Object(_api_manage__WEBPACK_IMPORTED_MODULE_1__["g"])(this.url.queryById, {
                        id: r
                    }).then((function(e) {
                        if (e.success) {
                            var t = e.result;
                            n.showAnnouncement(t)
                        }
                    }))
                }
            }
        }
    },
    "763a": function(e, t, n) {},
    "7b16": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return "radio" == e.tagType ? n("a-radio-group", {
                    attrs: {
                        value: e.value,
                        disabled: e.disabled
                    },
                    on: {
                        change: e.handleInput
                    }
                }, e._l(e.dictOptions, (function(t, r) {
                    return n("a-radio", {
                        key: r,
                        attrs: {
                            value: t.value
                        }
                    }, [e._v(e._s(t.text))])
                })), 1) : "select" == e.tagType ? n("a-select", {
                    attrs: {
                        placeholder: e.placeholder,
                        disabled: e.disabled,
                        value: e.value
                    },
                    on: {
                        change: e.handleInput
                    }
                }, [n("a-select-option", {
                    attrs: {
                        value: ""
                    }
                }, [e._v("请选择")]), e._l(e.dictOptions, (function(t, r) {
                    return n("a-select-option", {
                        key: r,
                        attrs: {
                            value: t.value
                        }
                    }, [n("span", {
                        staticStyle: {
                            display: "inline-block",
                            width: "100%"
                        },
                        attrs: {
                            title: t.text || t.label
                        }
                    }, [e._v("\n      " + e._s(t.text || t.label) + "\n    ")])])
                }))], 2) : e._e()
            },
            a = [],
            o = n("4ec3"),
            i = {
                name: "JDictSelectTag",
                props: {
                    dictCode: String,
                    placeholder: String,
                    triggerChange: Boolean,
                    disabled: Boolean,
                    value: String,
                    type: String
                },
                data: function() {
                    return {
                        dictOptions: [],
                        tagType: ""
                    }
                },
                created: function() {
                    console.log(this.dictCode), this.type && "list" !== this.type ? this.tagType = this.type : this.tagType = "select", this.initDictData()
                },
                methods: {
                    initDictData: function() {
                        var e = this;
                        Object(o["f"])(this.dictCode, null).then((function(t) {
                            t.success && (e.dictOptions = t.result)
                        }))
                    },
                    handleInput: function(e) {
                        var t;
                        t = "radio" == this.tagType ? e.target.value : e, console.log(t), this.triggerChange ? this.$emit("change", t) : this.$emit("input", t)
                    },
                    setCurrentDictOptions: function(e) {
                        this.dictOptions = e
                    },
                    getCurrentDictOptions: function() {
                        return this.dictOptions
                    }
                }
            },
            c = i,
            s = n("2877"),
            u = Object(s["a"])(c, r, a, !1, null, "e2de86ac", null);
        t["default"] = u.exports
    },
    "7ded": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        }));
        n("365c");
        var r = n("b775");

        function a(e) {
            try {
                return Object(r["b"])({
                    url: "".concat(window._CONFIG["domainURL"], "/sys/login"),
                    method: "post",
                    data: e
                })
            } catch (t) {
                console.log(t)
            }
        }

        function o(e) {
            try {
                return Object(r["b"])({
                    url: "".concat(window._CONFIG["domainURL"], "/sys/phoneLogin"),
                    method: "post",
                    data: e
                })
            } catch (t) {
                console.log(t)
            }
        }

        function i(e) {
            try {
                return Object(r["b"])({
                    url: "".concat(window._CONFIG["domainURL"], "/sys/logout"),
                    method: "post",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "X-Access-Token": e
                    }
                })
            } catch (t) {
                console.log(t)
            }
        }
    },
    "7efd": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: ["user-layout-wrapper", e.device],
                    attrs: {
                        id: "userLayout"
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [e._m(0), n("route-view"), e._m(1)], 1)])
            },
            a = [function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", {
                    staticClass: "top"
                }, [r("div", {
                    staticClass: "header"
                }, [r("a", {
                    attrs: {
                        href: "/"
                    }
                }, [r("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("9b19"),
                        alt: "logo"
                    }
                }), r("span", {
                    staticClass: "title"
                }, [e._v("综合管理信息系统")])])]), r("div", {
                    staticClass: "desc"
                }, [e._v("综合管理信息系统")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "footer"
                }, [n("div", {
                    staticClass: "links"
                }, [n("a", {
                    attrs: {
                        href: "#",
                        target: "_self"
                    }
                }, [e._v("帮助")]), n("a", {
                    attrs: {
                        href: "#",
                        target: "_self"
                    }
                }, [e._v("隐私")]), n("a", {
                    attrs: {
                        href: "#",
                        target: "_self"
                    }
                }, [e._v("条款")])]), n("div", {
                    staticClass: "copyright"
                }, [e._v("\n        copyright © 2019 - 2020\n      ")])])
            }],
            o = n("501f"),
            i = n("ac0d"),
            c = {
                name: "UserLayout",
                components: {
                    RouteView: o["default"]
                },
                mixins: [i["b"]],
                data: function() {
                    return {}
                },
                mounted: function() {
                    document.body.classList.add("userLayout")
                },
                beforeDestroy: function() {
                    document.body.classList.remove("userLayout")
                }
            },
            s = c,
            u = (n("6e5c"), n("2877")),
            l = Object(u["a"])(s, r, a, !1, null, "769e8c68", null);
        t["default"] = l.exports
    },
    8415: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = this,
                    n = t.$createElement,
                    r = t._self._c || n;
                return r("a-layout", {
                    staticClass: "layout",
                    class: [t.device]
                }, ["sidemenu" === t.layoutMode ? ["mobile" === t.device ? r("a-drawer", {
                    attrs: {
                        wrapClassName: "drawer-sider " + t.navTheme,
                        placement: "left",
                        closable: !1,
                        visible: t.collapsed,
                        width: "200px"
                    },
                    on: {
                        close: function() {
                            return e.collapsed = !1
                        }
                    }
                }, [r("side-menu", {
                    attrs: {
                        mode: "inline",
                        menus: t.menus,
                        theme: t.navTheme,
                        collapsed: !1,
                        collapsible: !0
                    },
                    on: {
                        menuSelect: t.menuSelect
                    }
                })], 1) : r("side-menu", {
                    attrs: {
                        mode: "inline",
                        menus: t.menus,
                        theme: t.navTheme,
                        collapsed: t.collapsed,
                        collapsible: !0
                    },
                    on: {
                        menuSelect: t.myMenuSelect
                    }
                })] : ["mobile" === t.device ? r("a-drawer", {
                    attrs: {
                        wrapClassName: "drawer-sider " + t.navTheme,
                        placement: "left",
                        closable: !1,
                        visible: t.collapsed,
                        width: "200px"
                    },
                    on: {
                        close: function() {
                            return e.collapsed = !1
                        }
                    }
                }, [r("side-menu", {
                    attrs: {
                        mode: "inline",
                        menus: t.menus,
                        theme: t.navTheme,
                        collapsed: !1,
                        collapsible: !0
                    },
                    on: {
                        menuSelect: t.menuSelect
                    }
                })], 1) : t._e()], r("a-layout", {
                    class: [t.layoutMode, "content-width-" + t.contentWidth],
                    style: {
                        paddingLeft: t.fixSiderbar && t.isDesktop() ? (t.sidebarOpened ? 200 : 80) + "px" : "0"
                    }
                }, [r("global-header", {
                    attrs: {
                        mode: t.layoutMode,
                        menus: t.menus,
                        theme: t.navTheme,
                        collapsed: t.collapsed,
                        device: t.device
                    },
                    on: {
                        toggle: t.toggle
                    }
                }), r("a-layout-content", {
                    style: {
                        height: "100%",
                        paddingTop: t.fixedHeader ? "59px" : "0"
                    }
                }, [t._t("default")], 2), r("a-layout-footer", {
                    staticStyle: {
                        padding: "0px"
                    }
                }, [r("global-footer")], 1)], 1), r("setting-drawer")], 2)
            },
            a = [],
            o = (n("8e6e"), n("456d"), n("ac4d"), n("8a81"), n("ac6a"), n("bd86")),
            i = n("e5f9"),
            c = n("630d"),
            s = n("911c"),
            u = n("2191"),
            l = n("ca00"),
            d = n("5880"),
            p = n("ac0d");

        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    Object(o["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var _ = {
                name: "GlobalLayout",
                components: {
                    SideMenu: i["default"],
                    GlobalHeader: c["default"],
                    GlobalFooter: s["default"],
                    SettingDrawer: u["default"]
                },
                mixins: [p["a"], p["b"]],
                data: function() {
                    return {
                        collapsed: !1,
                        activeMenu: {},
                        menus: []
                    }
                },
                computed: m({}, Object(d["mapState"])({
                    mainRouters: function(e) {
                        return e.permission.addRouters
                    },
                    permissionMenuList: function(e) {
                        return e.user.permissionList
                    }
                })),
                watch: {
                    sidebarOpened: function(e) {
                        this.collapsed = !e
                    }
                },
                created: function() {
                    this.menus = this.permissionMenuList, console.log("----加载菜单逻辑----"), console.log(this.mainRouters), console.log(this.permissionMenuList), console.log("----navTheme------" + this.navTheme)
                },
                methods: m({}, Object(d["mapActions"])(["setSidebar"]), {
                    toggle: function() {
                        this.collapsed = !this.collapsed, this.setSidebar(!this.collapsed), Object(l["m"])()
                    },
                    menuSelect: function() {
                        this.isDesktop() || (this.collapsed = !1)
                    },
                    myMenuSelect: function(e) {
                        this.findMenuBykey(this.menus, e.key), this.$emit("dynamicRouterShow", e.key, this.activeMenu.meta.title)
                    },
                    findMenuBykey: function(e, t) {
                        var n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                                var c = o.value;
                                c.path == t ? this.activeMenu = m({}, c) : c.children && c.children.length > 0 && this.findMenuBykey(c.children, t)
                            }
                        } catch (s) {
                            r = !0, a = s
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                    }
                })
            },
            h = _,
            b = (n("c944"), n("2877")),
            g = Object(b["a"])(h, r, a, !1, null, null, null);
        t["default"] = g.exports
    },
    8559: function(e, t, n) {
        "use strict";
        var r = n("165a"),
            a = n.n(r);
        a.a
    },
    "8bb1": function(e, t, n) {},
    "8bbf": function(e, t) {
        e.exports = Vue
    },
    "8d4d": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "user-wrapper",
                    class: e.theme
                }, [n("header-notice", {
                    staticClass: "action"
                }), n("a-dropdown", [n("span", {
                    staticClass: "action action-full ant-dropdown-link user-dropdown-menu"
                }, [e.isDesktop() ? n("span", [e._v("用户管理")]) : e._e()]), n("a-menu", {
                    staticClass: "user-dropdown-menu-wrapper",
                    attrs: {
                        slot: "overlay"
                    },
                    slot: "overlay"
                }, [n("a-menu-item", {
                    key: "0"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "account-center"
                        }
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "user"
                    }
                }), n("span", [e._v("个人中心")])], 1)], 1), n("a-menu-item", {
                    key: "1"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "account-settings-base"
                        }
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "setting"
                    }
                }), n("span", [e._v("账户设置")])], 1)], 1), n("a-menu-item", {
                    key: "3",
                    on: {
                        click: e.systemSetting
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "tool"
                    }
                }), n("span", [e._v("系统设置")])], 1), n("a-menu-item", {
                    key: "4",
                    on: {
                        click: e.updatePassword
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "setting"
                    }
                }), n("span", [e._v("密码修改")])], 1), n("a-menu-item", {
                    key: "5",
                    on: {
                        click: e.updateCurrentDepart
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "cluster"
                    }
                }), n("span", [e._v("切换部门")])], 1), n("a-menu-divider"), n("a-menu-item", {
                    key: "3"
                }, [n("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e.handleLogout
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "logout"
                    }
                }), n("span", [e._v("退出登录")])], 1)])], 1)], 1), n("span", {
                    staticClass: "action"
                }, [n("a", {
                    staticClass: "logout_title",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e.handleLogout
                    }
                }, [n("a-icon", {
                    attrs: {
                        type: "logout"
                    }
                }), e.isDesktop() ? n("span", [e._v(" 退出")]) : e._e()], 1)]), n("user-password", {
                    ref: "userPassword"
                }), n("depart-select", {
                    ref: "departSelect",
                    attrs: {
                        closable: !0,
                        title: "部门切换"
                    }
                }), n("setting-drawer", {
                    ref: "settingDrawer",
                    attrs: {
                        closable: !0,
                        title: "系统设置"
                    }
                })], 1)
            },
            a = [],
            o = (n("8e6e"), n("ac6a"), n("456d"), n("96cf"), n("3b8d")),
            i = n("bd86"),
            c = n("a4b0"),
            s = n("ce42"),
            u = n("2191"),
            l = n("e2c7"),
            d = n("5880"),
            p = n("ac0d");

        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    Object(i["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var _ = {
                name: "UserMenu",
                mixins: [p["b"]],
                components: {
                    HeaderNotice: c["default"],
                    UserPassword: s["default"],
                    DepartSelect: l["default"],
                    SettingDrawer: u["default"]
                },
                props: {
                    theme: {
                        type: String,
                        required: !1,
                        default: "dark"
                    }
                },
                methods: m({}, Object(d["mapActions"])(["Logout"]), {}, Object(d["mapGetters"])(["nickname", "avatar", "userInfo"]), {
                    getAvatar: function() {
                        return console.log("url = " + window._CONFIG["imgDomainURL"] + "/" + this.avatar()), window._CONFIG["imgDomainURL"] + "/" + this.avatar()
                    },
                    handleLogout: function() {
                        var e = this;
                        this.$confirm_({
                            title: "确认操作",
                            content: "真的要注销登录吗 ?",
                            onOk: function() {
                                var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                e.Logout({}).then((function() {
                                                    e.$message_.info("注销登陆成功！"), setTimeout((function() {
                                                        window.location.href = "/"
                                                    }), 300)
                                                })).catch((function(t) {
                                                    e.$message_.err("注销登陆异常！"), console.log(t)
                                                }));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));

                                function n() {
                                    return t.apply(this, arguments)
                                }
                                return n
                            }()
                        })
                    },
                    updatePassword: function() {
                        var e = this.userInfo().username;
                        this.$refs.userPassword.show(e)
                    },
                    updateCurrentDepart: function() {
                        this.$refs.departSelect.show()
                    },
                    systemSetting: function() {
                        this.$refs.settingDrawer.showDrawer()
                    }
                })
            },
            h = _,
            b = (n("1ab6"), n("2877")),
            g = Object(b["a"])(h, r, a, !1, null, "2d78bfcc", null);
        t["default"] = g.exports
    },
    "911c": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "footer"
                }, [n("div", {
                    staticClass: "links"
                }), n("div", {
                    staticClass: "copyright"
                }, [e._v("\n    copyright\n    "), n("a-icon", {
                    attrs: {
                        type: "copyright"
                    }
                }), e._v("2019 - 2020\n  ")], 1)])
            },
            a = [],
            o = {
                name: "LayoutFooter"
            },
            i = o,
            c = (n("97ed"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, "29c40421", null);
        t["default"] = s.exports
    },
    "91ad": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.visible,
                        expression: "visible"
                    }],
                    staticClass: "contextmenu",
                    style: e.style,
                    attrs: {
                        selectedKeys: e.selectedKeys
                    },
                    on: {
                        click: e.handleClick
                    }
                }, e._l(e.itemList, (function(t) {
                    return n("a-menu-item", {
                        key: t.key
                    }, [t.icon ? n("a-icon", {
                        attrs: {
                            role: "menuitemicon",
                            type: t.icon
                        }
                    }) : e._e(), e._v(e._s(t.text) + "\n  ")], 1)
                })), 1)
            },
            a = [],
            o = {
                name: "Contextmenu",
                props: {
                    visible: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    itemList: {
                        type: Array,
                        required: !0,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        left: 0,
                        top: 0,
                        target: null,
                        selectedKeys: []
                    }
                },
                computed: {
                    style: function() {
                        return {
                            left: this.left + "px",
                            top: this.top + "px"
                        }
                    }
                },
                created: function() {
                    var e = this;
                    window.addEventListener("mousedown", (function(t) {
                        return e.closeMenu(t)
                    })), window.addEventListener("contextmenu", (function(t) {
                        return e.setPosition(t)
                    }))
                },
                methods: {
                    closeMenu: function(e) {
                        ["menuitemicon", "menuitem"].indexOf(e.target.getAttribute("role")) < 0 && this.$emit("update:visible", !1)
                    },
                    setPosition: function(e) {
                        this.left = e.clientX, this.top = e.clientY, this.target = e.target
                    },
                    handleClick: function(e) {
                        var t = e.key;
                        this.$emit("select", t, this.target), this.$emit("update:visible", !1)
                    }
                }
            },
            i = o,
            c = (n("a73d"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, "32e5b466", null);
        t["default"] = s.exports
    },
    "955f": function(e, t, n) {
        "use strict";
        n("8e6e"), n("456d");
        var r = n("7618"),
            a = n("2638"),
            o = n.n(a),
            i = n("bd86"),
            c = (n("7f7f"), n("6762"), n("2fdb"), n("7514"), n("ac6a"), n("55f1")),
            s = n("0c63");

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    Object(i["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var d = c["a"].Item,
            p = c["a"].SubMenu;
        t["a"] = {
            name: "SMenu",
            props: {
                menu: {
                    type: Array,
                    required: !0
                },
                theme: {
                    type: String,
                    required: !1,
                    default: "dark"
                },
                mode: {
                    type: String,
                    required: !1,
                    default: "inline"
                },
                collapsed: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            data: function() {
                return {
                    openKeys: [],
                    selectedKeys: [],
                    cachedOpenKeys: []
                }
            },
            computed: {
                rootSubmenuKeys: function(e) {
                    var t = [];
                    return e.menu.forEach((function(e) {
                        return t.push(e.path)
                    })), t
                }
            },
            mounted: function() {
                this.updateMenu()
            },
            watch: {
                collapsed: function(e) {
                    e ? (this.cachedOpenKeys = this.openKeys.concat(), this.openKeys = []) : this.openKeys = this.cachedOpenKeys
                },
                $route: function() {
                    this.updateMenu()
                }
            },
            methods: {
                onOpenChange: function(e) {
                    var t = this;
                    if ("horizontal" !== this.mode) {
                        var n = e.find((function(e) {
                            return !t.openKeys.includes(e)
                        }));
                        this.rootSubmenuKeys.includes(n) ? this.openKeys = n ? [n] : [] : this.openKeys = e
                    } else this.openKeys = e
                },
                updateMenu: function() {
                    var e = this.$route.matched.concat(),
                        t = this.$route.meta.hidden;
                    e.length >= 3 && t ? (e.pop(), this.selectedKeys = [e[e.length - 1].path]) : this.selectedKeys = [e.pop().path];
                    var n = [];
                    "inline" === this.mode && e.forEach((function(e) {
                        n.push(e.path)
                    })), (!this.selectedKeys || this.selectedKeys[0].indexOf(":") < 0) && (this.collapsed ? this.cachedOpenKeys = n : this.openKeys = n)
                },
                renderItem: function(e) {
                    return e.hidden ? null : e.children && !e.alwaysShow ? this.renderSubMenu(e) : this.renderMenuItem(e)
                },
                renderMenuItem: function(e) {
                    var t = this.$createElement,
                        n = e.meta.target || null,
                        r = n ? "a" : "router-link",
                        a = {
                            to: {
                                name: e.name
                            }
                        };
                    e.route && "0" === e.route && (a = {
                        to: {
                            path: e.path
                        }
                    });
                    var i = {
                        href: e.path,
                        target: e.meta.target
                    };
                    return e.children && e.alwaysShow && e.children.forEach((function(e) {
                        e.meta = Object.assign(e.meta, {
                            hidden: !0
                        })
                    })), t(d, o()([{}, {
                        key: e.path
                    }]), [t(r, {
                        props: l({}, a),
                        attrs: l({}, i)
                    }, [this.renderIcon(e.meta.icon), t("span", [e.meta.title])])])
                },
                renderSubMenu: function(e) {
                    var t = this,
                        n = this.$createElement,
                        r = [];
                    return e.alwaysShow || e.children.forEach((function(e) {
                        return r.push(t.renderItem(e))
                    })), n(p, o()([{}, {
                        key: e.path
                    }]), [n("span", {
                        slot: "title"
                    }, [this.renderIcon(e.meta.icon), n("span", [e.meta.title])]), r])
                },
                renderIcon: function(e) {
                    var t = this.$createElement;
                    if ("none" === e || void 0 === e) return null;
                    var n = {};
                    return "object" === Object(r["a"])(e) ? n.component = e : n.type = e, t(s["a"], {
                        props: l({}, n)
                    })
                }
            },
            render: function() {
                var e = this,
                    t = arguments[0],
                    n = this.mode,
                    r = this.theme,
                    a = this.menu,
                    o = {
                        mode: n,
                        theme: r,
                        openKeys: this.openKeys
                    },
                    i = {
                        select: function(t) {
                            e.selectedKeys = t.selectedKeys, e.$emit("select", t)
                        },
                        openChange: this.onOpenChange
                    },
                    s = a.map((function(t) {
                        return t.hidden ? null : e.renderItem(t)
                    }));
                return t(c["a"], {
                    props: l({}, o),
                    on: l({}, i),
                    model: {
                        value: e.selectedKeys,
                        callback: function(t) {
                            e.selectedKeys = t
                        }
                    }
                }, [s])
            }
        }
    },
    "97ed": function(e, t, n) {
        "use strict";
        var r = n("e7af"),
            a = n.n(r);
        a.a
    },
    9824: function(e, t, n) {
        "use strict";
        var r = n("8bb1"),
            a = n.n(r);
        a.a
    },
    "9af1": function(e, t, n) {
        "use strict";
        var r = n("9f94"),
            a = n.n(r);
        a.a
    },
    "9b19": function(e, t, n) {
        e.exports = n.p + "assets/logo.d6db7fad.svg"
    },
    "9f94": function(e, t, n) {},
    "9fb0": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "l", (function() {
            return a
        })), n.d(t, "j", (function() {
            return o
        })), n.d(t, "h", (function() {
            return i
        })), n.d(t, "b", (function() {
            return c
        })), n.d(t, "c", (function() {
            return s
        })), n.d(t, "e", (function() {
            return u
        })), n.d(t, "g", (function() {
            return l
        })), n.d(t, "f", (function() {
            return d
        })), n.d(t, "d", (function() {
            return p
        })), n.d(t, "i", (function() {
            return f
        })), n.d(t, "p", (function() {
            return m
        })), n.d(t, "o", (function() {
            return _
        })), n.d(t, "n", (function() {
            return h
        })), n.d(t, "m", (function() {
            return b
        })), n.d(t, "k", (function() {
            return g
        }));
        var r = "Access-Token",
            a = "SIDEBAR_TYPE",
            o = "DEFAULT_THEME",
            i = "DEFAULT_LAYOUT_MODE",
            c = "DEFAULT_COLOR",
            s = "DEFAULT_COLOR_WEAK",
            u = "DEFAULT_FIXED_HEADER",
            l = "DEFAULT_FIXED_SIDEMENU",
            d = "DEFAULT_FIXED_HEADER_HIDDEN",
            p = "DEFAULT_CONTENT_WIDTH_TYPE",
            f = "DEFAULT_MULTI_PAGE",
            m = "Login_Username",
            _ = "Login_Userinfo",
            h = "LOGIN_USER_BUTTON_AUTH",
            b = "SYS_BUTTON_AUTH",
            g = "ENCRYPTED_STRING"
    },
    a250: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "logo"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "dashboard"
                        }
                    }
                }, [e.showTitle ? n("h1", [e._v(e._s(e.title))]) : e._e()])], 1)
            },
            a = [],
            o = n("ac0d"),
            i = {
                name: "Logo",
                mixins: [o["a"]],
                props: {
                    title: {
                        type: String,
                        default: "OA System",
                        required: !1
                    },
                    showTitle: {
                        type: Boolean,
                        default: !0,
                        required: !1
                    }
                }
            },
            c = i,
            s = (n("29b7"), n("2877")),
            u = Object(s["a"])(c, r, a, !1, null, "cfd9f600", null);
        t["default"] = u.exports
    },
    a4b0: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-popover", {
                    attrs: {
                        trigger: "click",
                        placement: "bottomRight",
                        autoAdjustOverflow: !0,
                        arrowPointAtCenter: !0,
                        overlayClassName: "header-notice-wrapper",
                        overlayStyle: {
                            width: "240px",
                            top: "50px"
                        }
                    },
                    on: {
                        visibleChange: e.handleHoverChange
                    }
                }, [n("template", {
                    slot: "content"
                }, [n("a-spin", {
                    attrs: {
                        spinning: e.loadding
                    }
                }, [n("a-tabs", [n("a-tab-pane", {
                    key: "3",
                    attrs: {
                        tab: e.msg3Title
                    }
                }, [n("a-list", [e._l(e.announcement3, (function(t, r) {
                    return n("a-list-item", {
                        key: r
                    }, [n("div", {
                        staticStyle: {
                            "margin-left": "5%",
                            width: "80%"
                        }
                    }, [n("p", [n("a", {
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("标题：" + e._s(t.titile))])]), n("p", {
                        staticStyle: {
                            color: "rgba(0,0,0,.45)",
                            "margin-bottom": "0px"
                        }
                    }, [e._v(e._s(t.createTime) + " 发布")])]), n("div", {
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, ["L" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "blue"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("一般消息")]) : e._e(), "M" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "orange"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("重要消息")]) : e._e(), "H" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "red"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("紧急消息")]) : e._e()], 1)])
                })), n("div", {
                    staticStyle: {
                        "margin-top": "5px",
                        "text-align": "center"
                    }
                }, [n("a-button", {
                    attrs: {
                        type: "dashed",
                        block: ""
                    },
                    on: {
                        click: function(t) {
                            return e.toMyApprove()
                        }
                    }
                }, [e._v("查看更多")])], 1)], 2)], 1), n("a-tab-pane", {
                    key: "2",
                    attrs: {
                        tab: e.msg2Title
                    }
                }, [n("a-list", [e._l(e.announcement2, (function(t, r) {
                    return n("a-list-item", {
                        key: r
                    }, [n("div", {
                        staticStyle: {
                            "margin-left": "5%",
                            width: "80%"
                        }
                    }, [n("p", [n("a", {
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("标题：" + e._s(t.titile))])]), n("p", {
                        staticStyle: {
                            color: "rgba(0,0,0,.45)",
                            "margin-bottom": "0px"
                        }
                    }, [e._v(e._s(t.createTime) + " 发布")])]), n("div", {
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, ["L" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "blue"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("一般消息")]) : e._e(), "M" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "orange"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("重要消息")]) : e._e(), "H" === t.priority ? n("a-tag", {
                        attrs: {
                            color: "red"
                        },
                        on: {
                            click: function(n) {
                                return e.showAnnouncement(t)
                            }
                        }
                    }, [e._v("紧急消息")]) : e._e()], 1)])
                })), n("div", {
                    staticStyle: {
                        "margin-top": "5px",
                        "text-align": "center"
                    }
                }, [n("a-button", {
                    attrs: {
                        type: "dashed",
                        block: ""
                    },
                    on: {
                        click: function(t) {
                            return e.toMyAnnouncement()
                        }
                    }
                }, [e._v("查看更多")])], 1)], 2)], 1)], 1)], 1)], 1), n("span", {
                    staticClass: "header-notice",
                    on: {
                        click: e.fetchNotice
                    }
                }, [n("a-badge", {
                    attrs: {
                        count: e.msgTotal
                    }
                }, [n("a-icon", {
                    staticStyle: {
                        "font-size": "16px",
                        padding: "4px"
                    },
                    attrs: {
                        type: "bell"
                    }
                })], 1)], 1), n("show-announcement", {
                    ref: "ShowAnnouncement",
                    on: {
                        ok: e.modalFormOk
                    }
                })], 2)
            },
            a = [],
            o = n("757d"),
            i = o["a"],
            c = (n("ab24"), n("b077"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, "6b1521d6", null);
        t["default"] = s.exports
    },
    a55d: function(e, t, n) {
        "use strict";
        var r = n("ae60"),
            a = n.n(r);
        a.a
    },
    a73d: function(e, t, n) {
        "use strict";
        var r = n("55f19"),
            a = n.n(r);
        a.a
    },
    a808: function(e, t, n) {},
    ab24: function(e, t, n) {
        "use strict";
        var r = n("d775"),
            a = n.n(r);
        a.a
    },
    ac0d: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), n.d(t, "b", (function() {
            return s
        }));
        n("8e6e"), n("ac6a"), n("456d");
        var r = n("bd86"),
            a = n("5880");

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    Object(r["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var c = {
                computed: i({}, Object(a["mapState"])({
                    layoutMode: function(e) {
                        return e.app.layout
                    },
                    navTheme: function(e) {
                        return e.app.theme
                    },
                    primaryColor: function(e) {
                        return e.app.color
                    },
                    colorWeak: function(e) {
                        return e.app.weak
                    },
                    multipage: function(e) {
                        return e.app.multipage
                    },
                    fixedHeader: function(e) {
                        return e.app.fixedHeader
                    },
                    fixSiderbar: function(e) {
                        return e.app.fixSiderbar
                    },
                    contentWidth: function(e) {
                        return e.app.contentWidth
                    },
                    autoHideHeader: function(e) {
                        return e.app.autoHideHeader
                    },
                    sidebarOpened: function(e) {
                        return e.app.sidebar.opened
                    }
                }))
            },
            s = {
                computed: i({}, Object(a["mapState"])({
                    device: function(e) {
                        return e.app.device
                    }
                })),
                methods: {
                    isMobile: function() {
                        return "mobile" === this.device
                    },
                    isDesktop: function() {
                        return "desktop" === this.device
                    }
                }
            }
    },
    ae60: function(e, t, n) {},
    b077: function(e, t, n) {
        "use strict";
        var r = n("52f3"),
            a = n.n(r);
        a.a
    },
    b445: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    style: e.$route.meta.pageHeader ? null : "margin: -10px -24px 0;"
                }, [e.$route.meta.pageHeader ? e._e() : n("page-header", {
                    attrs: {
                        title: e.title,
                        logo: e.logo,
                        avatar: e.avatar
                    }
                }, [e._t("action", null, {
                    slot: "action"
                }), e._t("headerContent", null, {
                    slot: "content"
                }), !this.$slots.headerContent && e.desc ? n("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [n("p", {
                    staticStyle: {
                        "font-size": "14px",
                        color: "rgba(0,0,0,.65)"
                    }
                }, [e._v(e._s(e.desc))]), n("div", {
                    staticClass: "link"
                }, [e._l(e.linkList, (function(t, r) {
                    return [n("a", {
                        key: r,
                        attrs: {
                            href: t.href
                        }
                    }, [n("a-icon", {
                        attrs: {
                            type: t.icon
                        }
                    }), n("span", [e._v(e._s(t.title))])], 1)]
                }))], 2)]) : e._e(), e._t("extra", null, {
                    slot: "extra"
                }), n("div", {
                    attrs: {
                        slot: "pageMenu"
                    },
                    slot: "pageMenu"
                }, [e.search ? n("div", {
                    staticClass: "page-menu-search"
                }, [n("a-input-search", {
                    staticStyle: {
                        width: "80%",
                        "max-width": "522px"
                    },
                    attrs: {
                        placeholder: "请输入...",
                        size: "large",
                        enterButton: "搜索"
                    }
                })], 1) : e._e(), e.tabs && e.tabs.items ? n("div", {
                    staticClass: "page-menu-tabs"
                }, [n("a-tabs", {
                    attrs: {
                        tabBarStyle: {
                            margin: 0
                        },
                        activeKey: e.tabs.active()
                    },
                    on: {
                        change: e.tabs.callback
                    }
                }, e._l(e.tabs.items, (function(e) {
                    return n("a-tab-pane", {
                        key: e.key,
                        attrs: {
                            tab: e.title
                        }
                    })
                })), 1)], 1) : e._e()])], 2), n("div", {
                    staticClass: "content"
                }, [n("div", {
                    class: ["page-header-index-wide"]
                }, [e._t("default")], 2)])], 1)
            },
            a = [],
            o = n("603b"),
            i = {
                name: "LayoutContent",
                components: {
                    PageHeader: o["default"]
                },
                props: {
                    desc: {
                        type: String,
                        default: null
                    },
                    logo: {
                        type: String,
                        default: null
                    },
                    title: {
                        type: String,
                        default: null
                    },
                    avatar: {
                        type: String,
                        default: null
                    },
                    linkList: {
                        type: Array,
                        default: null
                    },
                    extraImage: {
                        type: String,
                        default: null
                    },
                    search: {
                        type: Boolean,
                        default: !1
                    },
                    tabs: {
                        type: Object,
                        default: function() {}
                    }
                },
                methods: {}
            },
            c = i,
            s = (n("9824"), n("2877")),
            u = Object(s["a"])(c, r, a, !1, null, "5538852e", null);
        t["default"] = u.exports
    },
    b45a: function(e, t, n) {
        "use strict";
        var r = n("541a"),
            a = n.n(r);
        a.a
    },
    b775: function(e, t, n) {
        "use strict";
        n("8e6e"), n("ac6a"), n("456d");
        var r = n("bd86"),
            a = n("8bbf"),
            o = n.n(a),
            i = n("cebe"),
            c = n.n(i),
            s = n("4360"),
            u = {
                vm: {},
                install: function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var t = arguments.length > 2 ? arguments[2] : void 0;
                    this.installed || (this.installed = !0, t ? (e.axios = t, Object.defineProperties(e.prototype, {
                        axios: {
                            get: function() {
                                return t
                            }
                        },
                        $http: {
                            get: function() {
                                return t
                            }
                        }
                    })) : console.error("You have to install axios"))
                }
            },
            l = n("56cd"),
            d = n("ed3b"),
            p = n("9fb0");

        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    Object(r["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        n.d(t, "a", (function() {
            return b
        })), n.d(t, "b", (function() {
            return _
        })), c.a.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        var _ = c.a.create({
                baseURL: "".concat(window._CONFIG["domain"], "/jeecg-boot"),
                timeout: 6e3
            }),
            h = function(e) {
                if (e.response) {
                    var t = e.response.data,
                        n = o.a.ls.get(p["a"]);
                    switch (console.log("------异常响应------", n), console.log("------异常响应------", e.response.status), e.response.status) {
                        case 403:
                            l["a"].error({
                                message: "系统提示",
                                description: "拒绝访问",
                                duration: 4
                            });
                            break;
                        case 500:
                            n && "Token失效，请重新登录" == t.message && d["a"].error({
                                title: "登录已过期",
                                content: "很抱歉，登录已过期，请重新登录",
                                okText: "重新登录",
                                mask: !1,
                                onOk: function() {
                                    s["a"].dispatch("Logout").then((function() {
                                        o.a.ls.remove(p["a"]), window.location.reload()
                                    }))
                                }
                            });
                            break;
                        case 404:
                            l["a"].error({
                                message: "系统提示",
                                description: "很抱歉，资源未找到!",
                                duration: 4
                            });
                            break;
                        case 504:
                            l["a"].error({
                                message: "系统提示",
                                description: "网络超时"
                            });
                            break;
                        case 401:
                            l["a"].error({
                                message: "系统提示",
                                description: "未授权，请重新登录",
                                duration: 4
                            }), n && s["a"].dispatch("Logout").then((function() {
                                setTimeout((function() {
                                    window.location.reload()
                                }), 1500)
                            }));
                            break;
                        default:
                            l["a"].error({
                                message: "系统提示",
                                description: t.message,
                                duration: 4
                            });
                            break
                    }
                }
                return Promise.reject(e)
            };
        _.interceptors.request.use((function(e) {
            var t = o.a.ls.get(p["a"]);
            return t && (e.headers["X-Access-Token"] = t), "get" == e.method && e.url.indexOf("sys/dict/getDictItems") < 0 && (e.params = m({
                _t: Date.parse(new Date) / 1e3
            }, e.params)), e
        }), (function(e) {
            return Promise.reject(e)
        })), _.interceptors.response.use((function(e) {
            return e.data
        }), h);
        var b = {
            vm: {},
            install: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.use(u, t, _)
            }
        }
    },
    bdb7: function(e, t, n) {
        "use strict";
        var r = n("763a"),
            a = n.n(r);
        a.a
    },
    c052: function(e, t, n) {
        "use strict";
        var r = n("5c06"),
            a = n.n(r);
        a.a
    },
    c16f: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: ["detail-list", e.size, "vertical" === e.layout ? "vertical" : "horizontal"]
                }, [e.title ? n("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.title))]) : e._e(), n("a-row", [e._t("default")], 2)], 1)
            },
            a = [],
            o = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
            i = (n("c5f6"), n("da05"));

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function(t) {
                    Object(o["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var u = {
                name: "DetailListItem",
                props: {
                    term: {
                        type: String,
                        default: "",
                        required: !1
                    }
                },
                inject: {
                    col: {
                        type: Number
                    }
                },
                render: function() {
                    var e = arguments[0];
                    return e(i["b"], {
                        props: s({}, l[this.col])
                    }, [e("div", {
                        class: "term"
                    }, [this.$props.term]), e("div", {
                        class: "content"
                    }, [this.$slots.default])])
                }
            },
            l = {
                1: {
                    xs: 24
                },
                2: {
                    xs: 24,
                    sm: 12
                },
                3: {
                    xs: 24,
                    sm: 12,
                    md: 8
                },
                4: {
                    xs: 24,
                    sm: 12,
                    md: 6
                }
            },
            d = {
                name: "DetailList",
                Item: u,
                components: {
                    Col: i["b"]
                },
                props: {
                    title: {
                        type: String,
                        default: "",
                        required: !1
                    },
                    col: {
                        type: Number,
                        required: !1,
                        default: 3
                    },
                    size: {
                        type: String,
                        required: !1,
                        default: "large"
                    },
                    layout: {
                        type: String,
                        required: !1,
                        default: "horizontal"
                    }
                },
                provide: function() {
                    return {
                        col: this.col > 4 ? 4 : this.col
                    }
                }
            },
            p = d,
            f = (n("ea2d"), n("2877")),
            m = Object(f["a"])(p, r, a, !1, null, null, null);
        t["default"] = m.exports
    },
    c1da: function(e, t, n) {
        "use strict";
        var r = n("1a41"),
            a = n.n(r);
        a.a
    },
    c681: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.disabled ? n("div", {
                    staticClass: "jeecg-form-container-disabled"
                }, [n("fieldset", {
                    attrs: {
                        disabled: ""
                    }
                }, [e._t("default")], 2)]) : n("div", [e._t("default")], 2)
            },
            a = [],
            o = {
                name: "JFormContainer",
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    }
                },
                mounted: function() {
                    console.log("我是表单禁用专用组件,但是我并不支持表单中iframe的内容禁用")
                }
            },
            i = o,
            c = (n("1c2b"), n("2877")),
            s = Object(c["a"])(i, r, a, !1, null, null, null);
        t["default"] = s.exports
    },
    c944: function(e, t, n) {
        "use strict";
        var r = n("4575"),
            a = n.n(r);
        a.a
    },
    ca00: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "l", (function() {
            return timeFix
        })), __webpack_require__.d(__webpack_exports__, "n", (function() {
            return welcome
        })), __webpack_require__.d(__webpack_exports__, "m", (function() {
            return triggerWindowResizeEvent
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return filterObj
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return formatDate
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return deNull
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return generateIndexRouter
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return cloneObject
        })), __webpack_require__.d(__webpack_exports__, "h", (function() {
            return randomNumber
        })), __webpack_require__.d(__webpack_exports__, "i", (function() {
            return randomString
        })), __webpack_require__.d(__webpack_exports__, "j", (function() {
            return randomUUID
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return queryUrlString
        }));
        var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b54"),
            core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("386d"),
            core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4917"),
            core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),
            core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c5f6"),
            core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_3__),
            core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7f7f"),
            core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__),
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ac4d"),
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_5__),
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8a81"),
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_6__),
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ac6a"),
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__),
            _Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("75fc"),
            core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3b2b"),
            core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9__),
            core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("a481"),
            core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__),
            core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("6762"),
            core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_11__),
            core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2fdb"),
            core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_12__),
            _Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("7618"),
            _utils_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("61f7"),
            TokenKey = "Access-Token";

        function timeFix() {
            var e = new Date,
                t = e.getHours();
            return t < 9 ? "早上好" : t <= 11 ? "上午好" : t <= 13 ? "中午好" : t < 20 ? "下午好" : "晚上好"
        }

        function welcome() {
            var e = ["文档如果需要预览，最好用docx、pptx、xlsx格式，而不要使用老版本的doc、ppt、xls格式哟🤗！", "上传的附件中，文档名称不能含有空格哦(≖‿≖)✧。不然的话，可能导致无法下载附件哟😄！", "上传的图片中，图片名称不要包含空格哦，我的小机器眼可看不清哟，要是预览不了可不要怪本宝宝☹️", "可以在首页，Tab栏中，查看我的待办，我的已办哟(≖‿≖)✧😄！", "我的待办，处理完毕后，请记得点击首页页面Tab栏右侧的刷新按钮哟🤗！", "审批同意后，可以在我的已办中查看处理过的记录哦💪！", "在工作台的Tab栏页面中，右侧可有快捷菜单哦👌！", "如果小主的页面和别的同学不一样，可能是小主没有清空缓存哦，按F12,弹出调试窗口，在Network栏中选择Disable Cache，然后刷新页面，即可清空缓存哦🤗", "上传附件，上传图片，请不要上传超过30M的文档哦⏰！", "上传图片前，先记得压缩后在上传哦🤗！", "待办任务处理好了不👌？", "处理完毕的任务，可以在我的已办中查看哦😁！", "工作台右侧有快捷导航哦😊！", "休息一会儿吧😴！", "准备吃什么呢🍚?", "加油💪！", "要不要喝杯茶，休息一下😝？", "来杯咖啡不☕️？", "眼睛是心灵的窗户，别忘了做做眼保健操🤗！", "身体是革命的本钱，记得多做运动🏃！", "我猜你可能累了😢！", "来泡杯枸杞茶吧🍵！", "来杯浓咖啡☕️，醒醒脑⏰！", "中午点外卖不🤩？", "来首Music不🎵？", "老板来了，赶紧工作💪！", "『 我们奋力前行，逆水行舟，被不断向后推，直至回到往昔岁月💪 』—《了不起的盖茨比》 ", "『 前尘种种，似烟似幻，惟有此人教我深感不负大好春光🗡。』—《魔道祖师》 ", "『 观察的实质是：“不赞美，不责难，甚至也不惋惜，但求了解认识而已😺。”』—《柴静》", "『 走得再远，看得再细，终究会有这样那样的错过，不可能真正将风景看遍🌅。』—《剑来》", "『 每想你一次，天上飘落一粒沙，从此形成了撒哈拉！😝』—《撒哈拉的故事》 ", "『 我们一路奋战，不是为了改变世界，而是为了不让世界改变我们。💪』—《熔炉》", "『 春复一春，枝头黄莺飞。秋复一秋，城头大雁归。🔪』—《雪中悍刀行》 ", "『 如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？🤗』—《摆渡人》 ", "『 心向花开，何不朝夕。』—《百年浅吟》", "『 单程孤舟，出云入霞，如歌如吟。』 — 《门孔》 ", "『 毁灭你，与你有何相干?』 — 《三体》", "『 有些意外是意料之中，有些意外是意料之外，而你，就是我意料之外的意外。』 — 《撒野》 ", "『 成王败寇，失败才是丑恶的。』 — 《惊悚乐园》", "『 胆小鬼连幸福都害怕，碰到棉花都会受伤 』 — 《人间失格》 ", "『 你知道吗，有些人，会以各种你情愿或者不情愿的方式，留在你的记忆里，比如我。』 — 《撒野》", "『 很多人宁可否认事实，也不愿面对真相。』 — 《冰与火之歌》", "『 你们认为没有路，是因为没有学会不择手段。』 — 《三体》", "『 当我忘了你的时候，我就忘了我自己。』 — 《呼啸山庄》", "『 言念君子温其如玉』 — 《剑来》", "『 一草一千秋，一花一世界。』 — 《目送》", "『 “马孔多在下雨”』 — 《百年孤独》", "『 你欺他眼盲，骗得他好苦！』 — 《魔道祖师》", "『 他只有两只手，所以只能用心抓住一个人。』 — 《黑天》", "『 西方人并不比东方人聪明，但是他们却找对了路。』 — 《三体》 ", "『 悲剧将人生的有价值的东西毁灭给人看，喜剧将那无价值的撕破给人看。』 — 《语丝》 ", "『 今日，吾爱，我们融为一体。』 — 《SCP基金会》 ", "『 用我一生，换你十年天真无邪。』 — 《盗墓笔记》 ", "『 弱肉强食的世界，强者没有理由道歉，弱者也没有资格埋怨。』 — 《惊悚乐园》 ", "『 没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。』 — 《撒野》 ", "『 乌鸦为什么像写字台？』 — 《爱丽丝梦游仙境》 ", "『 我恨自己。我爱自己。』 — 《SCP基金会》 ", "『 正义不会因为无人歌颂而变成非议。』 — 《阿亚罗克年代记》 ", "『 在永恒与虚无之间，为你沉默。』 — 《请以你的名字呼唤我》 ", "『 生而为人，我很抱歉』 — 《人间失格》 ", "『 活着本身就很美妙，如果连这道理都不懂，怎么去探索更深的东西呢？』 — 《三体》 ", "『 我一直以为人是慢慢变老的，其实不是，人是一瞬间变老的。』 — 《舞！舞！舞！》 ", "『 我有一个梦，也许有一天，灿烂的阳光能照进黑暗森林。』 — 《三体》 ", "『 即使被关在果壳之中，我仍自以为是无限宇宙之王。』 — 《哈姆雷特》", "『 “太阳快落下去了，你们的孩子居然不害怕？”“当然不害怕，她知道明天太阳还会升起来的。”』 — 《三体II》 ", "『 你永远是我唯爱旅行中名为秘密的起点站。』 — 《绘心》 ", "『 你应该是上天赐予我的满心欢喜。』 — 《荒生虚闻录》 ", "『 要是有些事我没说，你别以为是忘了，我什么也没忘，但是有些事只适合收藏。』 — 《我与地坛》 ", "『 君看双眼色，不语似无忧』 — 《俳句 罗生门》 ", "『 爱恋中的每个瞬间都有可能是一生。』 — 《文学》 ", "『 生来一人，去时孤身，便是江澄其人』 — 《魔道祖师》 ", "『 你最可爱,我说时来不及思索,但思索过后,还是这样说』 — 《普希金》 ", "『 有一种东西不能遵循从众原则，那就是人的良心。』 — 《杀死一只知更鸟》 ", "『 我要赢一壶酒，拿来娶你。』 — 《撒野》 ", "『 明月清风晓星尘，傲雪凌霜宋子琛』 — 《魔道祖师》 ", "『 我把人生看成是无常的，把人的无可奈何、与生俱来的轻薄看成是虚无的。』 — 《心》 ", "『 读书人皆是负心人，最负痴心人。』 — 《雪中悍刀行》 ", "『 叹飘渺，莫过春樱转瞬逝；怜世间,万千繁华始归尘。』 — 《绯弹的亚里亚》 ", "『 凡事都有一个与一望而知不同的真相』 — 《约翰·勒卡雷》 ", "『 世间本无公平可言，除非公平掌握在自己手中。』 — 《冰与火之歌》 ", "『 给时光以生命，给岁月以文明。』 — 《三体:黑暗森林》 ", "『 我触摸不到的除了喜马拉雅山顶的雪，还有你。』 — 《同学录》 ", "『 蓝曦臣，我这一生害人无数，杀父杀兄杀妻杀子杀师杀友，天下的坏事我什么没做过！......可我独独没有想过要害你』 — 《魔道祖师》 ", "『 自己觉得不好的事情，就干脆不要有第一次，一次也不要做，一小步也不能走出去，要不然回头来看，吃亏吃苦的还是自己。』 — 《剑来》", "『 真正的强者不在于什么无敌，而在于活着，输得再惨都别死了，而是每次都能够站起来，再次愤然出拳出剑！』—《剑来》 ", "『 没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。』—《撒野》 ", "『 亭边总有花影，与我消遣一段旖旎的小时光。』 — 《最美是花影不扫》", "『 为你的生命找到一个长期的、深层的、不能被满足的乐趣，让这个永恒乐趣带领你穿透生命的无常。』 — 《拆掉思维里的墙》 ", "『 仿佛这一瞬间，火光也照亮了他同驹子共同度过的岁月。这当中也充满一种说不出的苦痛和悲哀。 』 — 《雪国》 ", "『 负霜华，行世路。一同星尘，除魔歼邪』 — 《魔道祖师》 ", "『 人生若只如初见，何事秋风悲画扇。』— 纳兰性德《木兰词·拟古决绝词柬友》", "『 我变了。因为我不变，就活不下去。』 — 《幸会，吃人鬼》", "『 愿来世，你晓天，晓地，晓星尘。』 — 《魔道祖师》", "『 想带你去看电影，明天你就不是我女朋友了。』 — 《撒哈拉的故事》 ", "『 当一切都消失的时候，你会明白生命究竟有何价值。』 — 《冰与火之歌》 ", "『 我站在路口，哈出的气可以把那些六角形的雪融化。』 — 《嗨，STORM GLASS》 ", "『 影响大众想象力的，并不是事实本身，而是它扩散和传播的方式。』 — 《乌合之众》 ", "『 给岁月以文明，而不是给文明以岁月。』 — 《三体》 ", "『 亭边总有花影，与我消遣一段旖旎的小时光。』 — 《最美是花影不扫》 ", "『 他并不是有多寂寞，有多孤单，需要在这里随便找个什么人开始一段感情，只是因为对方是顾飞。』 — 《撒野》 ", "『 你不是不擅长学习，只是没有找到自己想要学习的东西而已。』 — 《梦幻花》 ", "『 是非在己，毁誉由人，得失不论。』 — 《魔道祖师》 ", "『 全是理智的心，恰如一柄全是锋刃的刀。它叫使用它的人手上流血。』 — 《飞鸟集》", "『 樱花落在赤裸的土壤上再也不会绽放，教室的窗外响起了蝉鸣，夏天到了。』 — 《野蛮生长》 ", "『 我一直以为人是慢慢变老的，其实不是，人是一瞬间变老的。』 — 《舞！舞！舞！》 ", "『 在童话中，一个人做他想做的事；在现实中，一个人做他能做的事。』 — 《埃莱娜·费兰特》 ", "『 所谓癌症，治疗的过程就是痛苦。』 — 《我，处于地狱之中》 ", "『 遇事不决，可问春风。』 — 《剑来》 ", "『 对友谊来说，笑声确实是个不错的开端，同时也是最好的结局。』 — 《道林·格雷的画像》 ", "『 你永远也看不到我最寂寞时候的样子，因为只有你不在我身边的时候，我才最寂寞。』 — 《爱与痛的边缘》 ", "『 地狱太冷，我来殉你。』 — 《二哈和他的白猫师尊》 ", "『 我们历经沧桑，这样错过了一生最好的时光。』 — 《黑暗萌主》 ", "『 我放着好好的阳关大道不走，走这阴沟里的独木桥干什么。真这么好走早就有人走了。』 — 《魔道祖师》 ", "『 生命中曾经有过的所有灿烂，终究都需要用寂寞来偿还。』 — 《百年孤独》 ", "『 人生不可以有后悔，只可以有遗憾，遗憾是感叹错过，后悔是否定自己曾经做的选择』 — 《一切都是最好的安排》 ", "『 “太阳快落下去了，你们的孩子居然不害怕？”“当然不害怕，她知道明天太阳还会升起来的。”』 — 《三体II》 ", "『 命运如同一团乱麻，我们抽丝剥茧百般追寻，最终终于解开了这个线团，却发现所有人手里都拿错了线头…』 — 《希灵帝国》 ", "『 维罗纳的夏天找不到这样一朵好花。』 — 《罗密欧与朱丽叶》 ", "『 生来一人，去时孤身，便是江澄其人』 — 《魔道祖师》 ", "『 快乐固然兴奋，痛苦又何尝不美丽。』 — 《谈生命》 ", "『 我以为看到了你，便拥有了整个世界。却没想到你的梦里，早已有了我。』 — 《我欲封天》 ", "『 我一边注视沉默的空间里闪闪浮动的光粒子，一边力图确定心的坐标。』 — 《挪威的森林》 ", "『 放弃不难，但坚持一定很酷。』 — 《解忧杂货店》 ", "『 人都会长大的，长大了之后，就会捡起一些新东西，丢掉一些旧东西，就这么丢丢捡捡，哗啦一下子，就老喽。』 — 《剑来》 ", "『 如果一朵花很美，那么有时我会不由自主地想到：“要活下去！”』 — 《川端康成》 ", "『 这是在是我所知物理学中最富诗意的东西：你的一切都是星辰。』 — 《劳伦斯·M·克劳斯》 ", "『 曾经沧海难为水，除却巫山不是云。』— 元稹《离思五首·其四》", "『 玲珑骰子安红豆，入骨相思知不知。』— 温庭筠《南歌子词二首·杨柳枝词》", "『 只愿君心似我心，定不负相思意。』— 李之仪《卜算子·我住长江头》", "『 愿得一心人，白头不相离。』— 卓文君《白头吟》", "『 去年今日此门中，人面桃花相映红。』— 崔护《题都城南庄》", "『 雨打梨花深闭门，忘了青春，误了青春。』— 唐寅《一剪梅·雨打梨花深闭门》", "『 人面不知何处去，桃花依旧笑春风。』— 崔护《题都城南庄》", "『 疏影横斜水清浅，暗香浮动月黄昏。』— 林逋《山园小梅·其一》", "『 宁可枝头抱香死，何曾吹落北风中。』— 郑思肖《画菊》", "『 桃之夭夭，灼灼其华。』— 佚名《桃夭》", "『 寂寞空庭春欲晚，梨花满地不开门。』— 刘方平《春怨》", "『 人间四月芳菲尽，山寺桃花始盛开。』— 白居易《大林寺桃花》", "『 不经一番寒彻骨，怎得梅花扑鼻香。』— 黄蘖禅师《上堂开示颂》", "『 竹外桃花三两枝，春江水暖鸭先知。』— 苏轼《惠崇春江晚景 / 惠崇春江晓景》", "『 春宵一刻值千金，花有清香月有阴。』— 苏轼《春宵·春宵一刻值千金》", "『 今人不见古时月，今月曾经照古人。』— 李白《把酒问月·故人贾淳令予问之》", "『 海上生明月，天涯共此时。』— 张九龄《望月怀远》", "『 月上柳梢头，人约黄昏后。』— 欧阳修《生查子·元夕》", "『 二十四桥明月夜，玉人何处教吹箫？』— 杜牧《寄扬州韩绰判官》", "『 露从今夜白，月是故乡明。』— 杜甫《月夜忆舍弟》", "『 沧海月明珠有泪，蓝田日暖玉生烟。』— 李商隐《锦瑟》", "『 春江潮水连海平，海上明月共潮生。』— 张若虚《春江花月夜》", "『 明月几时有？把酒问青天。』— 苏轼《水调歌头·丙辰中秋》", "『 云中谁寄锦书来，雁字回时，月满西楼。』— 李清照《一剪梅·红藕香残玉簟秋》", "『 世间无限丹青手，一片伤心画不成。』— 高蟾《金陵晚望》", "『 黄沙百战穿金甲，不破楼兰终不还。』— 王昌龄《从军行七首·其四》", "『 男儿何不带吴钩，收取关山五十州。』— 李贺《南园十三首·其五》", "『 落红不是无情物，化作春泥更护花。』— 龚自珍《己亥杂诗·其五》", "『 风萧萧兮易水寒，壮士一去兮不复还。』— 佚名《荆轲歌 / 渡易水歌》", "『 呜呼！楚虽三户能亡秦，岂有堂堂中国空无人。』— 陆游《金错刀行》", "『 苟利国家生死以，岂因祸福避趋之。』— 林则徐《赴戍登程口占示家人·其二》", "『 夜阑卧听风吹雨，铁马冰河入梦来。』— 陆游《十一月四日风雨大作》", "『 商女不知亡国恨，隔江犹唱后庭花。』— 杜牧《泊秦淮》", "『 人生自古谁无死？留取丹心照汗青。』— 文天祥《过零丁洋》", "『 休对故人思故国，且将新火试新茶。诗酒趁年华。』— 苏轼《望江南·超然台作》", "『 黄沙百战穿金甲，不破楼兰终不还。— 王昌龄《从军行七首·其四》", "『 宁可枝头抱香死，何曾吹落北风中。』— 郑思肖《画菊》", "『 我见青山多妩媚，料青山见我应如是。』— 辛弃疾《贺新郎·甚矣吾衰矣》", "『 男儿何不带吴钩，收取关山五十州。』— 李贺《南园十三首·其五》", "『 纸上得来终觉浅，绝知此事要躬行。』— 陆游《冬夜读书示子聿》", "『 时人不识凌云木，直待凌云始道高。』— 杜荀鹤《小松》", "『 读书不觉已春深，一寸光阴一寸金。』— 王贞白《白鹿洞二首·其一》", "『 沉舟侧畔千帆过，病树前头万木春。』— 刘禹锡《酬乐天扬州初逢席上见赠", "『 大鹏一日同风起，扶摇直上九万里。』— 李白《上李邕》", "『 粗缯大布裹生涯，腹有诗书气自华。』— 苏轼《和董传留别》", "『 长风破浪会有时，直挂云帆济沧海。』— 李白《行路难·其一》", "『 愿得此身长报国，何须生入玉门关。』— 戴叔伦《塞上曲二首·其二》", "『 呜呼！楚虽三户能亡秦，岂有堂堂中国空无人！』— 陆游《金错刀行》", "『 位卑未敢忘忧国，事定犹须待阖棺。』— 陆游《病起书怀》", "『 咬定青山不放松，立根原在破岩中。』— 郑燮《竹石》", "『 出师未捷身先死，长使英雄泪满襟。』— 杜甫《蜀相》", "『 天生我材必有用，千金散尽还复来。』— 李白《将进酒》", "『 黑发不知勤学早，白首方悔读书迟。』— 颜真卿《劝学诗》", "『 我也不登天子船，我也不上长安眠。』— 唐寅《把酒对月歌》", "『 人生自古谁无死？留取丹心照汗青。』— 文天祥《过零丁洋》", "『 三更灯火五更鸡，正是男儿读书时。』— 颜真卿《劝学诗》", "『 古人学问无遗力，少壮工夫老始成。』— 陆游《冬夜读书示子聿》", "『 身既死兮神以灵，魂魄毅兮为鬼雄。』— 屈原《国殇》", "『 一蓑烟雨任平生。』— 苏轼《定风波·莫听穿林打叶声》", "『 生当作人杰，死亦为鬼雄。』— 李清照《夏日绝句》", "『 不畏浮云遮望眼，自缘身在最高层。』— 王安石《登飞来峰》", "『 千淘万漉虽辛苦，吹尽狂沙始到金。』— 刘禹锡《浪淘沙九首》", "『 功名万里外，心事一杯中。』— 高适《送李侍御赴安西》", "『 路漫漫其修远兮，吾将上下而求索。』— 屈原《离骚》", "『 雄关漫道真如铁，而今迈步从头越。』— 毛泽东《忆秦娥·娄山关》", "『 江东子弟多才俊，卷土重来未可知。』— 杜牧《题乌江亭》", "『 九万里风鹏正举。』风休住，蓬舟吹取三山去。』— 李清照《渔家傲·天接云涛连晓雾》", "『 少壮不努力，老大徒伤悲！— 佚名《长歌行", "『 读书破万卷，下笔如有神。』— 杜甫《奉赠韦左丞丈二十二韵", "『 千磨万击还坚劲，任尔东西南北风。』— 郑燮《竹石》", "『 花门楼前见秋草，岂能贫贱相看老。』— 岑参《凉州馆中与诸判官夜集》", "『 富贵必从勤苦得，男儿须读五车书。』— 杜甫《柏学士茅屋》", "『 一月不读书，耳目失精爽。』— 萧抡谓《读书有所见作》", "『 千锤万凿出深山，烈火焚烧若等闲。』— 于谦《石灰吟》", "『 问汝平生功业，黄州惠州儋州。』— 苏轼《自题金山画像》", "『 捐躯赴国难，视死忽如归！』— 曹植《白马篇》", "『 僵卧孤村不自哀，尚思为国戍轮台。』— 陆游《十一月四日风雨大作》", "『 纵被无情弃，不能羞。』— 韦庄《思帝乡·春日游》", "『 非学无以广才，非志无以成学。』— 诸葛亮《诫子书》", "『 穷且益坚，不坠青云之志。』— 王勃《滕王阁序》", "『 安能摧眉折腰事权贵，使我不得开心颜！— 李白《梦游天姥吟留别》", "『 老骥伏枥，志在千里。』— 曹操《龟虽寿》", "『 看似寻常最奇崛，成如容易却艰辛。』— 王安石《题张司业诗》", "『 壮心未与年俱老，死去犹能作鬼雄。』— 陆游《书愤五首·其二》", "『 休言女子非英物，夜夜龙泉壁上鸣。』— 秋瑾《鹧鸪天·祖国沉沦感不禁》", "『 高山仰止，景行行止。』— 佚名《车舝》", "『 清谈可以饱，梦想接无由。』— 韩愈《洞庭湖阻风赠张十一署·时自阳山徙掾江陵》", "『 少年心事当拿云，谁念幽寒坐呜呃。』— 李贺《致酒行》", "『 丹青不知老将至，富贵于我如浮云。』— 杜甫《丹青引赠曹将军霸》", "『 横眉冷对千夫指，俯首甘为孺子牛。』— 鲁迅《自嘲》", "『 刑天舞干戚，猛志固常在。』— 陶渊明《读山海经·其十》", "『 夫君子之行，静以修身，俭以养德。』— 诸葛亮《诫子书》", "『 男儿西北有神州，莫滴水西桥畔泪。』— 刘克庄《玉楼春·戏林推》", "『 一日不读书，胸臆无佳想。』— 萧抡谓《读书有所见作》", "『 莫嫌举世无知己，未有庸人不忌才。』— 查慎行《三闾祠", "『 少年辛苦终身事，莫向光阴惰寸功。』— 杜荀鹤《题弟侄书堂》", "『 昨日邻家乞新火，晓窗分与读书灯。』— 王禹偁《清明》", "『 莫道谗言如浪深，莫言迁客似沙沉。』— 刘禹锡《浪淘沙九首》", "『 卧龙跃马终黄土，人事音书漫寂寥。』— 杜甫《阁夜》", "『 大鹏飞兮振八裔，中天摧兮力不济。』— 李白《临路歌》", "『 粉骨碎身全不怕，要留清白在人间。』— 于谦《石灰吟》", "『 不要人夸好颜色，只留清气满乾坤。』— 王冕《墨梅》", "『 未收天子河湟地，不拟回头望故乡。』— 令狐楚《少年行四首·其三》", "『 壮志饥餐胡虏肉，笑谈渴饮匈奴血。』— 岳飞《满江红·写怀》", "『 三军可夺帅也，匹夫不可夺志也。』— 佚名《论语十二章》", "『 归志宁无五亩园，读书本意在元元。』— 陆游《读书》", "『 浊酒不销忧国泪，救时应仗出群才。』— 秋瑾《黄海舟中日人索句并见日俄战争地图》", "『 烈士暮年，壮心不已。』— 曹操《龟虽寿》", "『 万里不惜死，一朝得成功。』— 高适《塞下曲》", "『 读书不作儒生酸，跃马西入金城关。』— 谢逸《送董元达》", "『 蜀道之难，难于上青天！』— 李白《蜀道难》", "『 三杯吐然诺，五岳倒为轻。』— 李白《侠客行》", "『 军歌应唱大刀环，誓灭胡奴出玉关。』— 徐锡麟《出塞》", "『 寄语天涯客，轻寒底用愁。』— 于谦《除夜太原寒甚》", "『 世上无难事，只要肯登攀。』— 毛泽东《水调歌头·重上井冈山》", "『 俱往矣，数风流人物，还看今朝。』— 毛泽东《沁园春·雪》", "『 只有精忠能报国，更无乐土可为家。』— 董必武《元旦口占用柳亚子怀人韵》", "『 激气已能驱粉黛，举杯便可吞吴越。』— 史达祖《满江红·中秋夜潮》", "『 金鞍玉勒寻芳客，未信我庐别有春。』— 于谦《观书》", "『 梧桐真不甘衰谢，数叶迎风尚有声。』— 张耒《夜坐·庭户无人秋月明》", "『 忧劳可以兴国，逸豫可以亡身。』— 欧阳修《伶官传序》", "『 此身行作稽山土，犹吊遗踪一泫然。』— 陆游《沈园二首》", "『 出不入兮往不反，平原忽兮路超远。』— 屈原《国殇》", "『 鞠躬尽瘁，死而后已。』— 诸葛亮《后出师表》", "『 灯前目力虽非昔，犹课蝇头二万言。』— 陆游《读书》", "『 高岸为谷，深谷为陵。』— 佚名《十月之交》", "『 知君惯度祁连城，岂能愁见轮台月。』— 岑参《送李副使赴碛西官军》", "『 受任于败军之际，奉命于危难之间。』— 诸葛亮《前出师表》", "『 嗟险阻，叹飘零。』关山万里作雄行。』— 刘克庄《玉楼春·戏林推》", "『 诚既勇兮又以武，终刚强兮不可凌。』— 屈原《国殇》", "『 寻河愁地尽，过碛觉天低。』— 岑参《碛西头送李判官入京》", "『 有德必有勇，正直的人绝不胆怯。』— 莎士比亚", "『 即使慢，驰而不息，纵会落后，纵会失败，但一定可以达到他所向的目标。』— 鲁迅", "『 勇敢寓于灵魂之中，而不单凭一个强壮的躯体。』— 卡赞扎基", "『 没有伟大的意志力，就不可能有雄才大略。』— 巴尔扎克", "『 与人相处要牢记“默”字；与家相处要牢记“忍”字；与世相处要牢记“宽”字。』", "『 在胆小怕事和优柔寡断的人眼中，一切事情都是不可能办到的。』— 司各特", "『 放下过去的烦恼，不耽忧未来，不执著现在，你的内心就会平静。』", "『 勇气通往天堂，怯懦通往地狱。』— 塞内加", "『 不作什么决定的意志不是现实的意志；无性格的人从来不作出决定。』— 黑格尔", "『 成功的第一个条件就是要有决心；而决心要不得迅速，干脆， 果断， 又必须具有成功的信心。』— 大仲马", "『 任何人都是自己行为的镜子！看他人的优点，自我鞭策；看他人的缺点， 反省自己。』", "『 痛苦有个限度，恐惧则绵绵无际。』— 浦利尼斯二世", "『 大雪压青松，青松挺且直，要知松高洁，待到雪化时。』— 陈毅", "『 有坚强的意志，才有伟大的生活。』— 英国", "『 锲而舍之，朽木不折；锲而不舍，金石可镂。』— 荀况", "『 没有不冒风险就能克服的风险。』— 皮布里吕斯让·诺安", "『 咬住青山不放松，立根原在破岩中；千磨万击还坚劲，任尔东西南北风。』— 郑板桥", "『 谁有历经千辛万苦的意志，谁就能达到任何目的。』— 米南德", "『 英雄就是对任何事都有全力以赴，自始至终，心无旁骛的人。』— 波德莱尔", "『 恐惧与勇敢近在咫尺，而且互相共存— 向敌阵突进的人，最晓得个中实情。』— 棱罗", "『 如果没有勇气远离海岸线，长时间在海上孤寂地漂流，那么你绝不可发现新大陆。』— 纪德", "『 困难只能吓倒懦夫懒汉，而胜利永远属于敢于攀登科学高峰的人。』— 茅以升", "『 临着一切不平常的急难，只有勇敢和坚强才能拯救。』— 沙甫慈伯", "『 顽强的毅力可以征服世界上任何一座高峰。』— 狄更斯", "『 天堂和地狱，都是由心和行为所造作的。我们不要怕地狱，要怕的是心的偏向。』", "『 冒险是历史富有生命力的元素，无论是对个人还是社会。』— 威谦·博利多", "『 当一个人一心一意做好事情的时候，他最终是必然会成功的。』— 卢梭", "『 大胆产生勇气，多疑却产生恐惧。』— 康拉德", "『 心是最大的骗子。别人骗你一时，它却骗你一辈子。』", "『 美不是出现在自己的镜子里，而是出现在别人的眼睛里。』", "『 经验告诉我们，停留在不愉快情绪的时间越长，会大量降低我们解决问题的整体能力。』", "『 谁中途动摇信心，谁就是意志薄弱者；谁下定决心后，缺少灵活性，谁就是傻瓜。』— 诺尔斯", "『 意志引人入坦途，悲伤陷人于迷津。』— 埃·斯宾塞", "『 说谎的人必须有很好的记忆力。』", "『 意志命运往往背道而驰，决心到最后会全部推倒。』— 莎士比亚", "『 卑怯的人，即使有万丈的愤火，除弱草以外，又能烧掉什么呢？』— 鲁迅", "『 并非有钱就是快乐，问心无愧心最安。』", "『 不懂得害怕的人不能算勇敢，因为勇敢指的是面对一切风云变幻坚强不屈的能力。』— 里欧·罗斯顿", "『 勇敢里面有天才， 力量和魔法。』— 歌德", "『 混乱生起的地方，也是宁静生起的地方。透过智慧，哪里有混乱，哪里就有宁静。』", "『 意志是每一个人的精神力量，是要创造或是破坏某种东西的自由的憧憬，是能从无中创造奇迹的创造力。』— 莱蒙托夫", "『 胜利属于最坚忍的人。』— 拿破仑", "『 原谅别人才能释放自己。』", "『 就是有九十九个困难，只要有一个坚强的意志就不困难。』— 杨根思", "『 到了热血沸腾，理智允许的时候还不敢挺身向前的人，就是懦夫；达到了预想的目的后还在冒进的人，就是小人。』— 海涅", "『 万事皆由人的意志创造。』— 普劳图斯", "『 一旦有了意志，脚步也会轻松起来。』— 欧洲", "『 勇敢的人以生命冒险，不以良心冒险。』— 希拉", "『 庸庸碌碌，心安理得地过下去是不道德的。而自动从战斗中退缩的人则是一个懦夫。』— 罗曼·罗兰", "『 憎恨是心的疯狂。』", "『 在全人类中，凡是坚强，正直，勇敢，仁慈的人，都有是英雄！』— 贝多芬", "『 一切痛苦能够毁灭人，然而受苦的人也能把痛苦消灭！』— 拜伦", "『 没有意志的人，一切感到困难，没有头脑的人，一切都感到简单。』— 朝鲜", "『 耐心和持久胜过激烈和狂热。』— 拉·封丹（法国寓言诗人）", "『 阴暗处长不出大树，人类也是一样，(www.lz13.cn)心胸必须如阳光般光明灿烂。』", "『 你想有所作为吗？那么坚定地走下去吧！后爱退只会使你意志衰退。』— 罗·赫里克", "『 “拿出胆量来”那一吼声是一切成功之母。』— 雨果", "『 哪里有意志存在，哪里就会有出路。』— 德国", "『 如果他是一棵软弱的芦草，就让他枯萎吧；如果他是一个勇敢的人，就让他自己打出一条路出来吧。』— 司汤达", "『 青山遮不住，毕竟东流去。』— 辛弃疾", "『 奋斗只是一种行动的昭示，而实际的行动却应该有详细的计划，清楚的段落，坚定的意志和力量。』— 戴尔·卡耐基", "『 意志坚强的人能把世界放在手中像泥块一样任意揉捏。』— 歌德", "『 鸟儿美在羽毛，人们美在勤劳。』", "『 培养意志是我们生存的目标。』— 爱献生", "『 侮辱那些无法要你道歉的人，本身就是怯懦的表现。』— 米克沙特·卡尔曼", "『 每一天都是做人的开始，每一个时刻都是自己的警惕。』", "『 意志就是力量。』— 拉丁美洲", "『 表现勇敢则勇气来；往后退缩则恐惧来。』— 康拉德", "『 恨是一支箭，最后会射向自己。』", "『 我认为克服恐惧最好的办法理应是：面对内心所恐惧的事情，勇往直前地去做，直到成功为止。』— 罗斯福", "『 勇敢是与深思和决断为伍的。』— 俞吾金", "『 愤怒是吹熄心灵明灯的狂风。』", "『 小小的好事，做出来就变成大大的好处。』", "『 人往往不是没有力量去做事，而是不肯去做。』", "『 勇敢征服一切：它甚至能给血肉之躯增添力量。』— 奥维德", "『 没有人与你做对，只是角度不同。』", "『 生气往往会蒙蔽我们的判断力。』", "『 聪明人的嘴藏在心里，愚蠢人的心摆在嘴里。』", "『 要记住！情况越严重，越困难，就越需要坚定，积极，果敢，而消极无为就越有害。』— 列夫·托尔斯泰", "『 艰苦能磨练人的意志。』— 托·布朗", "『 没有力量的意志就如同假装士兵的孩子。』— 坎宁", "『 生活中有两个悲剧，一个是你的欲望得不到满足，另一个是你的欲望得到了满足。』", "『 有了坚定的意志，就等于给双脚添了一双翅膀。』— 乔·贝利", "『 我总在抱怨自己没鞋子穿，直到有一天，我遇到了一个没有脚的人。』", "『 既然他有勇气去死，他应该有力量去干斗争。拒不接受苦难不是力量的表现，而是懦弱的表现。』— 巴尔扎克", "『 当别人有生气的情绪时，我们不妨把它当成是一种求救的讯息— 其实他们内心欠缺的是更多自尊及肯定。』", "『 天下绝无不热烈勇敢地追求成功，而能取得成功的人。』— 拿破仑", "『 “路”必须去走方能到达，“事”必须去做才能完成，而“苦”则必须去受才可消除。』", "『 不要觉得自己很不幸，世界上比我们更苦的人还很多。』", "『 怯懦是你最大的敌人，勇敢则是你最好的朋友。』— 莱昂纳德·弗兰克转", "『 意志的力量大于手的力量。』— 索福克勒斯", "『 先相信你自己，然后别人才会相信你。』", "『 人不论做错几次，只要不失再来一次的勇气，必然大有可为。』", "『 最高贵的复仇是宽恕对方。』", "『 勇猛， 大胆和坚定的决心能够抵得上武器的精良。』— 达·芬奇", "『 勇气是人类最重要的一种特质，倘若有了勇气，人类其他的特质自然也就具备了。』— 丘吉尔", "『 有多少力量，就做多少事；切莫等待，等待常会落空。』", "『 谁恐惧，谁就要受折磨，并且已经受着他的恐惧的折磨。』— 蒙田", "『 我这个人走得很慢，但是我从不后退。』— 亚伯拉罕·林肯", "『 使意志获得自由的唯一途径，就是让意志摆脱任性。』— 朱·查·黑尔", "『 生气的时候，开口前先数到十，如果非常愤怒，先数到一百。』", "『 幸运所需要的美德是节制，而逆境所需要的美德是坚忍。』— 费·培根", "『 勇敢是一种基于自尊的意识而发展成的能力。』- 拿破仑", "『 获得朋友的唯一之道，是自己主动去做别人的朋友。』"],
                t = Math.floor(Math.random() * e.length);
            return t = t < e.length ? t : e.length - 1, e[t]
        }

        function triggerWindowResizeEvent() {
            var e = document.createEvent("HTMLEvents");
            e.initEvent("resize", !0, !0), e.eventType = "message", window.dispatchEvent(e)
        }

        function filterObj(e) {
            if ("object" == Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__["a"])(e)) {
                for (var t in e) !e.hasOwnProperty(t) || null != e[t] && void 0 != e[t] && "" !== e[t] || delete e[t];
                return e
            }
        }

        function formatDate(e, t) {
            "string" == typeof e && e.includes("T") && (e = new Date(e));
            var n = /^\d+(\.\d+)?$/;
            if (n.test(e) || e instanceof Date) {
                var r = e instanceof Date ? e : new Date(e),
                    a = {
                        "M+": r.getMonth() + 1,
                        "d+": r.getDate(),
                        "h+": r.getHours(),
                        "m+": r.getMinutes(),
                        "s+": r.getSeconds(),
                        "q+": Math.floor((r.getMonth() + 3) / 3),
                        S: r.getMilliseconds()
                    };
                for (var o in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length))), a) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? a[o] : ("00" + a[o]).substr(("" + a[o]).length)));
                try {
                    t = t.replace("T", " ")
                } catch (i) {
                    console.log("formate date error : " + i)
                }
                return t
            }
            try {
                "undefined" != typeof e && null != e || (e = "--"), e = e.trim(), t = e.substr(0, t.length), t = t.replace("T", " ")
            } catch (i) {
                console.log("formate date error : " + i)
            }
            return t
        }

        function deNull(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return "undefined" == typeof e || null == e || "" == e ? t : e
        }

        function generateIndexRouter(e) {
            var t = [{
                path: "/",
                name: "dashboard",
                component: function(e) {
                    return Promise.resolve().then(function() {
                        var t = [__webpack_require__("0f63")];
                        e.apply(null, t)
                    }.bind(this)).catch(__webpack_require__.oe)
                },
                meta: {
                    title: "首页"
                },
                redirect: "/dashboard/analysis",
                children: Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(generateChildRouters(e))
            }, {
                path: "/",
                name: "dashboard",
                component: function(e) {
                    return Promise.resolve().then(function() {
                        var t = [__webpack_require__("0f63")];
                        e.apply(null, t)
                    }.bind(this)).catch(__webpack_require__.oe)
                },
                meta: {
                    title: "工作台"
                },
                redirect: "/dashboard/workplace",
                children: Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(generateChildRouters(e))
            }, {
                path: "*",
                redirect: "/404",
                hidden: !0
            }];
            return t
        }

        function generateChildRouters(data) {
            var routers = [],
                _iteratorNormalCompletion = !0,
                _didIteratorError = !1,
                _iteratorError = void 0;
            try {
                for (var _loop = function _loop() {
                        item = _step.value;
                        var _component = "";
                        _component = item.component.indexOf("layouts") >= 0 ? "components/" + item.component : "views/" + item.component;
                        var URL = (item.meta.url || "").replace(/{{([^}}]+)?}}/g, (function(s1, s2) {
                            return eval(s2)
                        }));
                        Object(_utils_validate__WEBPACK_IMPORTED_MODULE_14__["a"])(URL) && (item.meta.url = URL);
                        var menu = {
                            path: item.path,
                            name: item.name,
                            redirect: item.redirect,
                            component: function(e) {
                                return Promise.all([__webpack_require__.e("chunk-3001451b"), __webpack_require__.e("user"), __webpack_require__.e("chunk-1f43a9f2"), __webpack_require__.e("chunk-fbbde3a8")]).then(function() {
                                    var t = [__webpack_require__("692e")("./" + _component + ".vue")];
                                    e.apply(null, t)
                                }.bind(this)).catch(__webpack_require__.oe)
                            },
                            hidden: item.hidden,
                            meta: {
                                title: item.meta.title,
                                icon: item.meta.icon,
                                url: item.meta.url,
                                permissionList: item.meta.permissionList,
                                keepAlive: item.meta.keepAlive
                            }
                        };
                        item.alwaysShow && (menu.alwaysShow = !0, menu.redirect = menu.path), item.children && item.children.length > 0 && (menu.children = Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(generateChildRouters(item.children))), item.route && "0" === item.route || routers.push(menu)
                    }, _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                    var item;
                    _loop()
                }
            } catch (err) {
                _didIteratorError = !0, _iteratorError = err
            } finally {
                try {
                    _iteratorNormalCompletion || null == _iterator.return || _iterator.return()
                } finally {
                    if (_didIteratorError) throw _iteratorError
                }
            }
            return routers
        }

        function cloneObject(e) {
            return JSON.parse(JSON.stringify(e))
        }

        function clone(e) {
            return JSON.parse(JSON.stringify(e))
        }

        function randomNumber() {
            var e = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            };
            if (1 === arguments.length) {
                var t = Array.prototype.slice.call(arguments),
                    n = t[0],
                    r = Object(_Users_yunwisdom_Workspace_oa_front_service_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(Array(n).keys()).map((function(t) {
                        return e(t > 0 ? 0 : 1, 9)
                    }));
                return parseInt(r.join(""))
            }
            if (arguments.length >= 2) {
                var a = Array.prototype.slice.call(arguments),
                    o = a[0],
                    i = a[1];
                return e(o, i)
            }
            return Number.NaN
        }

        function randomString(e, t) {
            e || (e = 1), t || (t = "0123456789qwertyuioplkjhgfdsazxcvbnm");
            for (var n = "", r = 0; r < e; r++) {
                var a = randomNumber(0, t.length - 1);
                n += t[a]
            }
            return n
        }

        function randomUUID() {
            var e = "0123456789abcdef";
            return randomString(32, e)
        }

        function underLine2CamelCase(e) {
            return e.replace(/_([a-z])/g, (function(e, t) {
                return t.toUpperCase()
            }))
        }

        function showDealBtn(e) {
            return "1" != e && "3" != e && "4" != e
        }

        function cssExpand(e, t) {
            var n = document.createElement("style");
            if (n.type = "text/css", n.innerHTML = '@charset "UTF-8"; '.concat(e), t) {
                var r = document.getElementById(t);
                null != r && (r.outerHTML = ""), n.id = t
            }
            document.head.appendChild(n)
        }

        function existChinese(e) {
            var t = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            return t.test(e)
        }

        function queryUrlString(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : null
        }

        function queryDateDiff(e, t) {
            if (Object.prototype.toString.call(e).includes("String")) try {
                e = parseDate(formatDate(e, "yyyy-MM-dd hh:mm:ss")), t = parseDate(formatDate(t, "yyyy-MM-dd hh:mm:ss"))
            } catch (f) {
                e = parseDate(e), t = parseDate(t)
            }
            for (var n = e, r = t, a = (r - n) / 864e5, o = a % 7, i = Math.floor(a / 7), c = 2 * i, s = n.getDay(), u = o; u >= 1; u--) u == o ? s += 0 : u != o && (s += 1), 7 == s && (s = 0), 0 != s && 6 != s || (c += 1);
            var l = parseFloat(a),
                d = parseInt(a);
            a = parseInt(a - c);
            var p = l - d;
            return p = 24 * p > 4 ? 1 : p > 0 ? .5 : 0, a + p
        }

        function parseDate(e) {
            var t = Date.parse(e);
            return isNaN(t) ? new Date : new Date(Date.parse(e.replace(/-/g, "/")))
        }

        function parseJSON(e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                console.log("err", t)
            }
            return []
        }
    },
    cc03: function(e, t, n) {},
    ce42: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-modal", {
                    attrs: {
                        title: e.title,
                        width: e.modalWidth,
                        visible: e.visible,
                        confirmLoading: e.confirmLoading,
                        cancelText: "关闭"
                    },
                    on: {
                        ok: e.handleOk,
                        cancel: e.handleCancel
                    }
                }, [n("a-spin", {
                    attrs: {
                        spinning: e.confirmLoading
                    }
                }, [n("a-form", {
                    attrs: {
                        form: e.form
                    }
                }, [n("a-form-item", {
                    attrs: {
                        labelCol: e.labelCol,
                        wrapperCol: e.wrapperCol,
                        label: "旧密码"
                    }
                }, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["oldpassword", e.validatorRules.oldpassword],
                        expression: "[ 'oldpassword', validatorRules.oldpassword]"
                    }],
                    attrs: {
                        type: "password",
                        placeholder: "请输入旧密码"
                    }
                })], 1), n("a-form-item", {
                    attrs: {
                        labelCol: e.labelCol,
                        wrapperCol: e.wrapperCol,
                        label: "新密码"
                    }
                }, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["password", e.validatorRules.password],
                        expression: "[ 'password', validatorRules.password]"
                    }],
                    attrs: {
                        type: "password",
                        placeholder: "请输入新密码"
                    }
                })], 1), n("a-form-item", {
                    attrs: {
                        labelCol: e.labelCol,
                        wrapperCol: e.wrapperCol,
                        label: "确认新密码"
                    }
                }, [n("a-input", {
                    directives: [{
                        name: "decorator",
                        rawName: "v-decorator",
                        value: ["confirmpassword", e.validatorRules.confirmpassword],
                        expression: "[ 'confirmpassword', validatorRules.confirmpassword]"
                    }],
                    attrs: {
                        type: "password",
                        placeholder: "请确认新密码"
                    },
                    on: {
                        blur: e.handleConfirmBlur
                    }
                })], 1)], 1)], 1)], 1)
            },
            a = [],
            o = n("0fea"),
            i = {
                name: "UserPassword",
                data: function() {
                    return {
                        title: "修改密码",
                        modalWidth: 800,
                        visible: !1,
                        confirmLoading: !1,
                        validatorRules: {
                            oldpassword: {
                                rules: [{
                                    required: !0,
                                    message: "请输入旧密码!"
                                }]
                            },
                            password: {
                                rules: [{
                                    required: !0,
                                    message: "请输入新密码!"
                                }, {
                                    validator: this.validateToNextPassword
                                }]
                            },
                            confirmpassword: {
                                rules: [{
                                    required: !0,
                                    message: "请确认新密码!"
                                }, {
                                    validator: this.compareToFirstPassword
                                }]
                            }
                        },
                        confirmDirty: !1,
                        labelCol: {
                            xs: {
                                span: 24
                            },
                            sm: {
                                span: 5
                            }
                        },
                        wrapperCol: {
                            xs: {
                                span: 24
                            },
                            sm: {
                                span: 16
                            }
                        },
                        form: this.$form.createForm(this),
                        url: "sys/user/updatePassword",
                        username: ""
                    }
                },
                methods: {
                    show: function(e) {
                        e ? (this.username = e, this.form.resetFields(), this.visible = !0) : this.$message.warning("当前系统无登陆用户!")
                    },
                    handleCancel: function() {
                        this.close()
                    },
                    close: function() {
                        this.$emit("close"), this.visible = !1, this.disableSubmit = !1, this.selectedRole = []
                    },
                    handleOk: function() {
                        var e = this,
                            t = this;
                        this.form.validateFields((function(n, r) {
                            if (!n) {
                                t.confirmLoading = !0;
                                var a = Object.assign({
                                    username: e.username
                                }, r);
                                console.log("修改密码提交数据", a), Object(o["t"])(e.url, a).then((function(e) {
                                    e.success ? (console.log(e), t.$message.success(e.message), t.close()) : t.$message.warning(e.message)
                                })).finally((function() {
                                    t.confirmLoading = !1
                                }))
                            }
                        }))
                    },
                    validateToNextPassword: function(e, t, n) {
                        var r = this.form;
                        t && this.confirmDirty && r.validateFields(["confirm"], {
                            force: !0
                        }), n()
                    },
                    compareToFirstPassword: function(e, t, n) {
                        var r = this.form;
                        t && t !== r.getFieldValue("password") ? n("两次输入的密码不一样！") : n()
                    },
                    handleConfirmBlur: function(e) {
                        var t = e.target.value;
                        this.confirmDirty = this.confirmDirty || !!t
                    }
                }
            },
            c = i,
            s = n("2877"),
            u = Object(s["a"])(c, r, a, !1, null, "14a0c8f6", null);
        t["default"] = u.exports
    },
    cebe: function(e, t) {
        e.exports = axios
    },
    d354: function(e, t, n) {},
    d533: function(e, t, n) {},
    d73b: function(e, t, n) {
        "use strict";
        var r = n("7efd"),
            a = n("e017"),
            o = (n("5f32"), n("501f"), n("345a"), n("0f63"));
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return c
        }));
        var i = [{
                path: "/",
                name: "dashboard",
                component: o["default"],
                meta: {
                    title: "首页"
                },
                redirect: "/dashboard/workplace",
                children: []
            }, {
                path: "*",
                redirect: "/404",
                hidden: !0
            }],
            c = [{
                path: "/user",
                component: r["default"],
                redirect: "/user/login",
                hidden: !0,
                children: [{
                    path: "login",
                    name: "login",
                    component: function() {
                        return Promise.all([n.e("chunk-3001451b"), n.e("user")]).then(n.bind(null, "ac2a"))
                    }
                }, {
                    path: "register",
                    name: "register",
                    component: function() {
                        return Promise.all([n.e("chunk-3001451b"), n.e("user")]).then(n.bind(null, "1348"))
                    }
                }, {
                    path: "register-result",
                    name: "registerResult",
                    component: function() {
                        return Promise.all([n.e("chunk-3001451b"), n.e("user")]).then(n.bind(null, "1037"))
                    }
                }, {
                    path: "alteration",
                    name: "alteration",
                    component: function() {
                        return Promise.all([n.e("chunk-3001451b"), n.e("user")]).then(n.bind(null, "ffc3"))
                    }
                }, {
                    path: "workflow",
                    name: "workflow",
                    component: function() {
                        return Promise.all([n.e("chunk-3001451b"), n.e("user")]).then(n.bind(null, "4be9"))
                    }
                }]
            }, {
                path: "/basewflow",
                component: a["default"],
                redirect: "/basewflow/home",
                children: [{
                    path: "home",
                    name: "TestHome",
                    component: function() {
                        return n.e("chunk-1f43a9f2").then(n.bind(null, "bb51"))
                    }
                }, {
                    path: "view",
                    name: "view",
                    component: function() {
                        return n.e("chunk-3001451b").then(n.bind(null, "4be9"))
                    }
                }]
            }, {
                path: "/404",
                component: function() {
                    return n.e("fail").then(n.bind(null, "cc89"))
                }
            }]
    },
    d775: function(e, t, n) {},
    df57: function(e, t, n) {
        "use strict";
        var r = n("3bbb"),
            a = n.n(r);
        a.a
    },
    e017: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("router-view")], 1)
            },
            a = [],
            o = {
                name: "BlankLayout"
            },
            i = o,
            c = n("2877"),
            s = Object(c["a"])(i, r, a, !1, null, "9f5db0b4", null);
        t["default"] = s.exports
    },
    e2c7: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-modal", {
                    attrs: {
                        title: e.currTitle,
                        width: 450,
                        visible: e.visible,
                        closable: !1,
                        maskClosable: e.closable
                    }
                }, [n("template", {
                    slot: "footer"
                }, [e.closable ? n("a-button", {
                    on: {
                        click: e.close
                    }
                }, [e._v("关闭")]) : e._e(), n("a-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.departOk
                    }
                }, [e._v("确认")])], 1), n("a-form", [n("a-form-item", {
                    staticStyle: {
                        "margin-bottom": "10px"
                    },
                    attrs: {
                        labelCol: {
                            span: 4
                        },
                        wrapperCol: {
                            span: 20
                        },
                        "validate-status": e.validate_status
                    }
                }, [n("a-tooltip", {
                    attrs: {
                        placement: "topLeft"
                    }
                }, [n("template", {
                    slot: "title"
                }, [n("span", [e._v("您隶属于多部门，请选择当前所在部门")])]), n("a-avatar", {
                    staticStyle: {
                        backgroundColor: "#87d068"
                    },
                    attrs: {
                        icon: "gold"
                    }
                })], 2), n("a-select", {
                    class: {
                        "valid-error": "error" == e.validate_status
                    },
                    staticStyle: {
                        "margin-left": "10px",
                        width: "80%"
                    },
                    attrs: {
                        placeholder: "请选择登录部门"
                    },
                    model: {
                        value: e.departSelected,
                        callback: function(t) {
                            e.departSelected = t
                        },
                        expression: "departSelected"
                    }
                }, [n("a-icon", {
                    attrs: {
                        slot: "suffixIcon",
                        type: "gold"
                    },
                    slot: "suffixIcon"
                }), e._l(e.departList, (function(t) {
                    return n("a-select-option", {
                        key: t.id,
                        attrs: {
                            value: t.orgCode
                        }
                    }, [e._v("\n          " + e._s(t.departName) + "\n        ")])
                }))], 2)], 1)], 1)], 2)
            },
            a = [],
            o = (n("ac4d"), n("8a81"), n("ac6a"), n("0fea")),
            i = n("8bbf"),
            c = n.n(i),
            s = n("4360"),
            u = n("9fb0"),
            l = {
                name: "DepartSelect",
                props: {
                    title: {
                        type: String,
                        default: "部门选择",
                        required: !1
                    },
                    closable: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    username: {
                        type: String,
                        default: "",
                        required: !1
                    }
                },
                watch: {
                    username: function(e) {
                        e && this.loadDepartList()
                    }
                },
                data: function() {
                    return {
                        currTitle: this.title,
                        visible: !1,
                        departList: [],
                        departSelected: "",
                        validate_status: "",
                        currDepartName: ""
                    }
                },
                created: function() {},
                methods: {
                    loadDepartList: function() {
                        var e = this;
                        return new Promise((function(t) {
                            var n = "".concat(window._CONFIG["domain"], "/sys/user/getCurrentUserDeparts");
                            e.currDepartName = "", Object(o["g"])(n).then((function(n) {
                                if (n.success) {
                                    var r = n.result.list,
                                        a = n.result.orgCode;
                                    if (r && r.length > 0) {
                                        var o = !0,
                                            i = !1,
                                            c = void 0;
                                        try {
                                            for (var s, u = r[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
                                                var l = s.value;
                                                if (l.orgCode == a) {
                                                    e.currDepartName = l.departName;
                                                    break
                                                }
                                            }
                                        } catch (d) {
                                            i = !0, c = d
                                        } finally {
                                            try {
                                                o || null == u.return || u.return()
                                            } finally {
                                                if (i) throw c
                                            }
                                        }
                                    }
                                    e.departSelected = a, e.departList = r, e.currDepartName && (e.currTitle = "部门切换（当前部门 : " + e.currDepartName + "）")
                                }
                                t()
                            }))
                        }))
                    },
                    close: function() {
                        this.departClear()
                    },
                    departOk: function() {
                        var e = this;
                        if (!this.departSelected) return this.validate_status = "error", !1;
                        var t = {
                            orgCode: this.departSelected,
                            username: this.username
                        };
                        Object(o["t"])("".concat(window._CONFIG["domain"], "/sys/selectDepart"), t).then((function(t) {
                            if (t.success) {
                                var n = t.result.userInfo;
                                c.a.ls.set(u["o"], n, 6048e5), s["a"].commit("SET_INFO", n), e.departClear()
                            }
                        }))
                    },
                    show: function() {
                        var e = this;
                        this.loadDepartList().then((function() {
                            e.visible = !0, (!e.departList || e.departList.length <= 0) && (e.$message.warning("您尚未设置部门信息!"), e.departClear())
                        }))
                    },
                    departClear: function() {
                        this.departList = [], this.departSelected = "", this.visible = !1, this.validate_status = "", this.currDepartName = ""
                    }
                }
            },
            d = l,
            p = (n("c052"), n("2877")),
            f = Object(p["a"])(d, r, a, !1, null, "40155048", null);
        t["default"] = f.exports
    },
    e5f9: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-layout-sider", {
                    class: ["sider", e.isDesktop() ? null : "shadow", e.theme, e.fixSiderbar ? "ant-fixed-sidemenu" : null],
                    attrs: {
                        width: "200px",
                        collapsible: e.collapsible,
                        trigger: null
                    },
                    model: {
                        value: e.collapsed,
                        callback: function(t) {
                            e.collapsed = t
                        },
                        expression: "collapsed"
                    }
                }, [n("logo"), n("s-menu", {
                    style: e.smenuStyle,
                    attrs: {
                        collapsed: e.collapsed,
                        menu: e.menus,
                        theme: e.theme,
                        mode: e.mode
                    },
                    on: {
                        select: e.onSelect
                    }
                })], 1)
            },
            a = [],
            o = n("1fca"),
            i = n("a250"),
            c = n("955f"),
            s = n("ac0d"),
            u = {
                name: "SideMenu",
                components: {
                    ALayoutSider: o["a"],
                    Logo: i["default"],
                    SMenu: c["a"]
                },
                mixins: [s["a"], s["b"]],
                props: {
                    mode: {
                        type: String,
                        required: !1,
                        default: "inline"
                    },
                    theme: {
                        type: String,
                        required: !1,
                        default: "dark"
                    },
                    collapsible: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    collapsed: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    menus: {
                        type: Array,
                        required: !0
                    }
                },
                computed: {
                    smenuStyle: function() {
                        var e = {
                            padding: "0"
                        };
                        return this.fixSiderbar && (e["height"] = "calc(100% - 59px)", e["overflow"] = "auto", e["overflow-x"] = "hidden"), e
                    }
                },
                methods: {
                    onSelect: function(e) {
                        this.$emit("menuSelect", e)
                    }
                }
            },
            l = u,
            d = (n("bdb7"), n("9af1"), n("2877")),
            p = Object(d["a"])(l, r, a, !1, null, "5bd2994e", null);
        t["default"] = p.exports
    },
    e7af: function(e, t, n) {},
    e97b: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a-breadcrumb", {
                    staticClass: "breadcrumb"
                }, e._l(e.breadList, (function(t, r) {
                    return n("a-breadcrumb-item", {
                        key: r
                    }, [t.name != e.name ? n("router-link", {
                        attrs: {
                            to: {
                                path: t.path
                            }
                        }
                    }, [e._v("\n      " + e._s(t.meta.title) + "\n    ")]) : n("span", [e._v(e._s(t.meta.title))])], 1)
                })), 1)
            },
            a = [],
            o = (n("ac6a"), n("7f7f"), {
                data: function() {
                    return {
                        name: "",
                        breadList: []
                    }
                },
                created: function() {
                    this.getBreadcrumb()
                },
                methods: {
                    getBreadcrumb: function() {
                        var e = this;
                        console.log("this.$route.matched", this.$route.matched), this.breadList = [], this.breadList.push({
                            name: "dashboard",
                            path: "/dashboard/",
                            meta: {
                                title: "首页"
                            }
                        }), this.name = this.$route.name, this.$route.matched.forEach((function(t) {
                            e.breadList.push(t)
                        }))
                    }
                },
                watch: {
                    $route: function() {
                        this.getBreadcrumb()
                    }
                }
            }),
            i = o,
            c = n("2877"),
            s = Object(c["a"])(i, r, a, !1, null, "242b0e6b", null);
        t["default"] = s.exports
    },
    ea2d: function(e, t, n) {
        "use strict";
        var r = n("442b"),
            a = n.n(r);
        a.a
    },
    ee78: function(e, t, n) {
        "use strict";
        var r = n("cc03"),
            a = n.n(r);
        a.a
    },
    f36f: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "a", (function() {
            return v
        })), n.d(t, "e", (function() {
            return w
        }));
        n("7514"), n("7f7f"), n("96cf"), n("6762"), n("2fdb");
        var r = n("3b8d"),
            a = n("0fea"),
            o = n("ca00"),
            i = n("5d2d"),
            c = n("17fb");

        function s(e, t, n, r, a, o) {
            return u.apply(this, arguments)
        }

        function u() {
            return u = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r, o, i, c) {
                var s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return s = null, e.prev = 1, e.next = 4, a["s"]("BS_TRANSACTION", r);
                        case 4:
                            s = e.sent, e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e["catch"](1), console.log("流程事务处理框架处理异常", e.t0);
                        case 10:
                            if (e.prev = 10, null == o) {
                                e.next = 15;
                                break
                            }
                            return e.next = 14, a["p"](o);
                        case 14:
                            s = e.sent;
                        case 15:
                            e.next = 20;
                            break;
                        case 17:
                            e.prev = 17, e.t1 = e["catch"](10), console.log("审批处理下一节点的审批信息", e.t1);
                        case 20:
                            if (e.prev = 20, null == t || null == n || null == i || null == c) {
                                e.next = 34;
                                break
                            }
                            return e.next = 24, a["q"](i);
                        case 24:
                            return s = e.sent, e.next = 27, a["c"](t, i);
                        case 27:
                            return s = e.sent, e.next = 30, a["m"](t, n["business_data_id"], c);
                        case 30:
                            return s = e.sent, e.next = 33, a["nb"](n["business_data_id"]);
                        case 33:
                            s = e.sent;
                        case 34:
                            e.next = 39;
                            break;
                        case 36:
                            e.prev = 36, e.t2 = e["catch"](20), console.log("审批处理当前节点的审批信息", e.t2);
                        case 39:
                            if (e.prev = 39, "1" != c.bpm_status) {
                                e.next = 45;
                                break
                            }
                            return e.next = 43, m(t, n);
                        case 43:
                            e.next = 53;
                            break;
                        case 45:
                            if ("4" != c.bpm_status) {
                                e.next = 50;
                                break
                            }
                            return e.next = 48, h(t, n);
                        case 48:
                            e.next = 53;
                            break;
                        case 50:
                            if ("5" != c.bpm_status) {
                                e.next = 53;
                                break
                            }
                            return e.next = 53, g(t, n);
                        case 53:
                            e.next = 58;
                            break;
                        case 55:
                            e.prev = 55, e.t3 = e["catch"](39), console.log(e.t3);
                        case 58:
                            return e.abrupt("return", s);
                        case 59:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 7],
                    [10, 17],
                    [20, 36],
                    [39, 55]
                ])
            }))), u.apply(this, arguments)
        }

        function l(e, t, n, r, a, o) {
            return d.apply(this, arguments)
        }

        function d() {
            return d = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r, c, s, u) {
                var l, d, p, f, m, _, h, b;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return l = null, d = {
                                bpm_status: u
                            }, p = {}, e.prev = 3, f = (new Date).getTime(), m = o["d"](f, "yyyyMMddhhmmssS"), console.log("动态编号 :" + m), m += Math.floor(1e11 * Math.random()) % 1e6, _ = i["c"]("cur_user"), e.next = 11, a["X"]("v_table_name", "id", t);
                        case 11:
                            h = e.sent;
                            try {
                                h = h[0]["name"]
                            } catch (g) {
                                console.log(g)
                            }
                            b = "<div><span>" + _["realname"] + '</span> 发起了 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.id, "&user=").concat(_.username, '&type=notify">') + h + '</a> 的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.id, "&user=").concat(_.username, '&type=notify">流程申请</a> ') + "</div>", p = {
                                id: m,
                                create_by: _["username"],
                                title: b,
                                content: b,
                                main_key: n.id,
                                main_table: t
                            }, e.next = 20;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e["catch"](3), console.log(e.t0);
                        case 20:
                            return e.prev = 20, e.next = 23, a["o"](r);
                        case 23:
                            return l = e.sent, e.next = 26, a["q"](c);
                        case 26:
                            return l = e.sent, e.next = 29, a["p"](s);
                        case 29:
                            return l = e.sent, e.next = 32, a["m"](t, n["id"], d);
                        case 32:
                            return l = e.sent, e.next = 35, a["s"]("bs_dynamic", p);
                        case 35:
                            l = e.sent, e.next = 41;
                            break;
                        case 38:
                            e.prev = 38, e.t1 = e["catch"](20), console.log("处理自由流程发起提交审批操作异常：" + e.t1);
                        case 41:
                            return e.abrupt("return", l);
                        case 42:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 17],
                    [20, 38]
                ])
            }))), d.apply(this, arguments)
        }

        function p(e, t, n) {
            return f.apply(this, arguments)
        }

        function f() {
            return f = Object(r["a"])(regeneratorRuntime.mark((function e(t, n, r) {
                var c, s, u, l, d, p, f;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return s = {}, e.prev = 1, u = (new Date).getTime(), l = o["d"](u, "yyyyMMddhhmmssS"), console.log("动态编号 :" + l), l += Math.floor(1e11 * Math.random()) % 1e6, d = i["c"]("cur_user"), e.next = 9, a["X"]("v_table_name", "id", t);
                        case 9:
                            p = e.sent;
                            try {
                                p = p[0]["name"]
                            } catch (m) {
                                console.log(m)
                            }
                            f = "<div><span>" + d["realname"] + '</span> 撤销了 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.id, "&user=").concat(d.username, '&type=notify">') + p + '</a> 的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.id, "&user=").concat(d.username, '&type=notify">流程申请</a> ') + "</div>", s = {
                                id: l,
                                create_by: d["username"],
                                title: f,
                                content: f,
                                main_key: n.id,
                                main_table: t
                            }, e.next = 18;
                            break;
                        case 15:
                            e.prev = 15, e.t0 = e["catch"](1), console.log(e.t0);
                        case 18:
                            return e.prev = 18, e.next = 21, a["q"](r);
                        case 21:
                            return c = e.sent, e.next = 24, a["c"](t, r);
                        case 24:
                            return c = e.sent, e.next = 27, a["m"](t, n["id"], {
                                bpm_status: "1"
                            });
                        case 27:
                            return c = e.sent, e.next = 30, a["s"]("bs_dynamic", s);
                        case 30:
                            c = e.sent, e.next = 36;
                            break;
                        case 33:
                            e.prev = 33, e.t1 = e["catch"](18), console.log(e.t1);
                        case 36:
                            return e.abrupt("return", c);
                        case 37:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 15],
                    [18, 33]
                ])
            }))), f.apply(this, arguments)
        }

        function m(e, t) {
            return _.apply(this, arguments)
        }

        function _() {
            return _ = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, s, u, l, d, p, f, m, _;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return s = {}, e.prev = 1, u = (new Date).getTime(), l = o["d"](u, "yyyyMMddhhmmssS"), console.log("动态编号 :" + l), l += Math.floor(1e11 * Math.random()) % 1e6, d = i["c"]("cur_user"), e.next = 9, a["eb"]();
                        case 9:
                            return p = e.sent, e.next = 12, a["X"]("v_table_name", "id", t);
                        case 12:
                            f = e.sent;
                            try {
                                f = f[0]["name"]
                            } catch (h) {
                                console.log(h)
                            }
                            return m = n.proponents, m = c["find"](p, (function(e) {
                                return n.proponents == e.username
                            })), _ = "<div><span>" + d["realname"] + "</span> 驳回了 <span>" + m.realname + '</span> 发起的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(d.username, '&type=notify">') + f + '</a> 的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(d.username, '&type=notify">流程申请</a> ') + "</div>", s = {
                                id: l,
                                create_by: d["username"],
                                title: _,
                                content: _,
                                main_key: n.main_value,
                                main_table: t
                            }, e.next = 20, a["s"]("bs_dynamic", s);
                        case 20:
                            r = e.sent, e.next = 26;
                            break;
                        case 23:
                            e.prev = 23, e.t0 = e["catch"](1), console.log(e.t0);
                        case 26:
                            return e.abrupt("return", r);
                        case 27:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 23]
                ])
            }))), _.apply(this, arguments)
        }

        function h(e, t) {
            return b.apply(this, arguments)
        }

        function b() {
            return b = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, s, u, l, d, p, f, m, _;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return s = {}, e.prev = 1, u = (new Date).getTime(), l = o["d"](u, "yyyyMMddhhmmssS"), console.log("动态编号 :" + l), l += Math.floor(1e11 * Math.random()) % 1e6, d = i["c"]("cur_user"), e.next = 9, a["eb"]();
                        case 9:
                            return p = e.sent, e.next = 12, a["X"]("v_table_name", "id", t);
                        case 12:
                            f = e.sent;
                            try {
                                f = f[0]["name"]
                            } catch (h) {
                                console.log(h)
                            }
                            return m = n.proponents, m = c["find"](p, (function(e) {
                                return n.proponents == e.username
                            })), _ = "<div><span>" + d["realname"] + "</span> 同意了 <span>" + m.realname + '</span> 发起的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(d.username, '&type=notify">') + f + '</a> 的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(d.username, '&type=notify">流程申请</a> ') + "</div>", s = {
                                id: l,
                                create_by: d["username"],
                                title: _,
                                content: _,
                                main_key: n.main_value,
                                main_table: t
                            }, e.next = 20, a["s"]("bs_dynamic", s);
                        case 20:
                            r = e.sent, e.next = 26;
                            break;
                        case 23:
                            e.prev = 23, e.t0 = e["catch"](1), console.log(e.t0);
                        case 26:
                            return e.abrupt("return", r);
                        case 27:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 23]
                ])
            }))), b.apply(this, arguments)
        }

        function g(e, t) {
            return y.apply(this, arguments)
        }

        function y() {
            return y = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                var r, s, u, l, d, p, f, m, _, h;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return s = {}, e.prev = 1, u = (new Date).getTime(), l = o["d"](u, "yyyyMMddhhmmssS"), console.log("动态编号 :" + l), d = (Math.floor(1e22 * Math.random()) + "").substring(0, 6), console.log("随机编号 :" + d), l += d, p = i["c"]("cur_user"), e.next = 11, a["eb"]();
                        case 11:
                            return f = e.sent, e.next = 14, a["X"]("v_table_name", "id", t);
                        case 14:
                            m = e.sent;
                            try {
                                m = m[0]["name"]
                            } catch (b) {
                                console.log(b)
                            }
                            return _ = n.proponents, _ = c["find"](f, (function(e) {
                                return n.proponents == e.username
                            })), h = "<div><span>" + _.realname + '</span> 发起的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(p.username, '&type=notify">') + m + '</a> 的 <a href="/workflow/view?table_name='.concat(t, "&id=").concat(n.main_value, "&user=").concat(p.username, '&type=notify" >流程申请</a> 流程走完且知会通知完毕') + "</div>", s = {
                                id: l,
                                create_by: p["username"],
                                title: h,
                                content: h,
                                main_key: n.main_value,
                                main_table: t
                            }, e.next = 22, a["s"]("bs_dynamic", s);
                        case 22:
                            r = e.sent, e.next = 28;
                            break;
                        case 25:
                            e.prev = 25, e.t0 = e["catch"](1), console.log(e.t0);
                        case 28:
                            return e.abrupt("return", r);
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 25]
                ])
            }))), y.apply(this, arguments)
        }

        function v(e, t, n, r, a) {
            try {
                if ("" == o["b"](n) && "workflowing" == r) return a({
                    title: "温馨提示",
                    content: "请选择审批用户!"
                }), !1;
                if (o["b"](n).includes(",") && "workflowing" == r) return a({
                    title: "温馨提示",
                    content: "审批用户只能选择一个!"
                }), !1;
                if ("" == o["b"](t) && "notifying" == r) return a({
                    title: "温馨提示",
                    content: "请选择知会用户!"
                }), !1;
                if (("," + e + ",").includes("," + n + ",") && "workflowing" == r) return a({
                    title: "温馨提示",
                    content: "审批流程中，审批人员[".concat(n, "]不能出现在审核人员中!")
                }), !1
            } catch (i) {
                console.log("check submit info error : " + i)
            }
            return !0
        }

        function w(e) {
            return O.apply(this, arguments)
        }

        function O() {
            return O = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, o;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, a["B"](t);
                        case 3:
                            return r = e.sent, e.next = 6, a["l"]("bs_free_process_h", r);
                        case 6:
                            return o = e.sent, e.next = 9, a["e"]("bs_free_process", r);
                        case 9:
                            n = e.sent, console.log("result :" + n + " wcode :" + o), e.next = 16;
                            break;
                        case 13:
                            e.prev = 13, e.t0 = e["catch"](0), console.log("transfer free workflow node into history " + e.t0);
                        case 16:
                            return e.abrupt("return", n);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 13]
                ])
            }))), O.apply(this, arguments)
        }
    }
});