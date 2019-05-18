(function(e) {
  function n(n) {
    for (
      var r, o, i = n[0], a = n[1], s = n[2], l = 0, f = [];
      l < i.length;
      l++
    )
      (o = i[l]), u[o] && f.push(u[o][0]), (u[o] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    d && d(n);
    while (f.length) f.shift()();
    return c.push.apply(c, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < c.length; n++) {
      for (var t = c[n], r = !0, o = 1; o < t.length; o++) {
        var i = t[o];
        0 !== u[i] && (r = !1);
      }
      r && (c.splice(n--, 1), (e = a((a.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    u = { app: 0 },
    c = [];
  function i(e) {
    return (
      a.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-1f58ecd3": "1524e82d",
        "chunk-2d0e2760": "937df958",
        "chunk-2d217c6c": "404b56e7",
        "chunk-2d230863": "e8d6b320",
        "chunk-54ad0423": "67f399e7"
      }[e] +
      ".js"
    );
  }
  function a(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
  }
  (a.e = function(e) {
    var n = [],
      t = { "chunk-1f58ecd3": 1, "chunk-54ad0423": 1 };
    o[e]
      ? n.push(o[e])
      : 0 !== o[e] &&
        t[e] &&
        n.push(
          (o[e] = new Promise(function(n, t) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-1f58ecd3": "4a22f4a5",
                    "chunk-2d0e2760": "31d6cfe0",
                    "chunk-2d217c6c": "31d6cfe0",
                    "chunk-2d230863": "31d6cfe0",
                    "chunk-54ad0423": "06d119f7"
                  }[e] +
                  ".css",
                u = a.p + r,
                c = document.getElementsByTagName("link"),
                i = 0;
              i < c.length;
              i++
            ) {
              var s = c[i],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === r || l === u)) return n();
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
              (s = f[i]), (l = s.getAttribute("data-href"));
              if (l === r || l === u) return n();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = n),
              (d.onerror = function(n) {
                var r = (n && n.target && n.target.src) || u,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = r),
                  delete o[e],
                  d.parentNode.removeChild(d),
                  t(c);
              }),
              (d.href = u);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d);
          }).then(function() {
            o[e] = 0;
          }))
        );
    var r = u[e];
    if (0 !== r)
      if (r) n.push(r[2]);
      else {
        var c = new Promise(function(n, t) {
          r = u[e] = [n, t];
        });
        n.push((r[2] = c));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          a.nc && l.setAttribute("nonce", a.nc),
          (l.src = i(e)),
          (s = function(n) {
            (l.onerror = l.onload = null), clearTimeout(f);
            var t = u[e];
            if (0 !== t) {
              if (t) {
                var r = n && ("load" === n.type ? "missing" : n.type),
                  o = n && n.target && n.target.src,
                  c = new Error(
                    "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"
                  );
                (c.type = r), (c.request = o), t[1](c);
              }
              u[e] = void 0;
            }
          });
        var f = setTimeout(function() {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(n);
  }),
    (a.m = e),
    (a.c = r),
    (a.d = function(e, n, t) {
      a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (a.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, n) {
      if ((1 & n && (e = a(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (a.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (a.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return a.d(n, "a", n), n;
    }),
    (a.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (a.p = ""),
    (a.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = n), (s = s.slice());
  for (var f = 0; f < s.length; f++) n(s[f]);
  var d = l;
  c.push([0, "chunk-vendors"]), t();
})({
  0: function(e, n, t) {
    e.exports = t("56d7");
  },
  "06b7": function(e, n, t) {},
  "56d7": function(e, n, t) {
    "use strict";
    t.r(n);
    t("cadf"), t("551c"), t("f751"), t("097d");
    var r = t("2b0e"),
      o = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "div",
          { attrs: { id: "app" } },
          [t("myheader"), t("router-view")],
          1
        );
      },
      u = [],
      c = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", [
          t("div", [
            t(
              "ol",
              { staticClass: "ui" },
              [
                e._m(0),
                e._l(e.lists, function(n, r) {
                  return t("li", { key: n.id }, [
                    t("a", { attrs: { href: "#/p/" + n.path } }, [
                      e._v(" " + e._s(r + 1) + "." + e._s(n.name))
                    ])
                  ]);
                })
              ],
              2
            )
          ])
        ]);
      },
      i = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("li", [
            t("a", { attrs: { href: "#/" } }, [e._v("回首页 ")])
          ]);
        }
      ],
      a = {
        mounted: function() {},
        data: function() {
          return { list: ["2", "3"] };
        },
        computed: {
          lists: function() {
            return this.$router.options.routes[1].children;
          }
        }
      },
      s = a,
      l = (t("b360"), t("2877")),
      f = Object(l["a"])(s, c, i, !1, null, "3915e404", null),
      d = f.exports,
      p = { components: { myheader: d } },
      h = p,
      m = (t("5c0b"), Object(l["a"])(h, o, u, !1, null, null, null)),
      v = m.exports,
      b = t("8c4f");
    r["a"].use(b["a"]);
    var g = new b["a"]({
        routes: [
          {
            path: "/",
            name: "menu",
            component: function() {
              return t.e("chunk-2d0e2760").then(t.bind(null, "7f94"));
            }
          },
          {
            path: "/p",
            name: "p",
            component: function() {
              return t.e("chunk-2d230863").then(t.bind(null, "ed3a"));
            },
            children: [
              {
                path: "love",
                name: "love",
                component: function() {
                  return t.e("chunk-1f58ecd3").then(t.bind(null, "687f"));
                }
              },
              {
                path: "About",
                name: "About",
                component: function() {
                  return t.e("chunk-2d217c6c").then(t.bind(null, "c7bd"));
                }
              },
              {
                path: "resume",
                name: "resume",
                component: function() {
                  return t.e("chunk-54ad0423").then(t.bind(null, "8be7"));
                }
              }
            ]
          }
        ]
      }),
      y = t("2f62");
    r["a"].use(y["a"]);
    var k = new y["a"].Store({ state: {}, mutations: {}, actions: {} }),
      w = t("9483");
    Object(w["a"])("".concat("", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    }),
      (r["a"].config.productionTip = !1),
      new r["a"]({
        router: g,
        store: k,
        render: function(e) {
          return e(v);
        }
      }).$mount("#app");
  },
  "5c0b": function(e, n, t) {
    "use strict";
    var r = t("5e27"),
      o = t.n(r);
    o.a;
  },
  "5e27": function(e, n, t) {},
  b360: function(e, n, t) {
    "use strict";
    var r = t("06b7"),
      o = t.n(r);
    o.a;
  }
});
