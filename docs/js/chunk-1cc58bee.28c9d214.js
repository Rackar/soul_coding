(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1cc58bee"],
  {
    "0550": function(t, e, r) {
      "use strict";
      r.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("h2", [t._v("商品列表")]),
              t._l(t.lists, function(t) {
                return r("product", { key: t.id, attrs: { product: t } });
              })
            ],
            2
          );
        },
        l = [],
        c = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "product" }, [
            r("div", [
              r("img", {
                attrs: {
                  src: t.product.imgurl,
                  alt: "",
                  srcset: "",
                  width: "200px;"
                }
              })
            ]),
            r("div", { staticClass: "price" }, [t._v(t._s(t.product.price))]),
            r("div", { staticClass: "label" }, [t._v(t._s(t.product.label))]),
            r("div", { staticClass: "title" }, [t._v(t._s(t.product.name))])
          ]);
        },
        a = [],
        n = {
          props: {
            product: {
              type: Object,
              default: function() {
                return { name: "", price: "", label: "", imgurl: "" };
              }
            },
            name: { type: String, default: "" },
            price: { type: String, default: "" },
            label: { type: String, default: "" },
            imgurl: { type: String, default: "" }
          }
        },
        u = n,
        p = (r("ef1d"), r("2877")),
        s = Object(p["a"])(u, c, a, !1, null, "03931134", null),
        o = s.exports,
        d = {
          data: function() {
            return {
              lists: [
                {
                  name: "小米9",
                  price: "899",
                  label: "5万人购买",
                  imgurl: "./img/pro.webp"
                },
                {
                  name: "小米19",
                  price: "1899",
                  label: "15万人购买",
                  imgurl: "./img/pro.webp"
                },
                {
                  name: "小米139",
                  price: "2899",
                  label: "15万人购买",
                  imgurl: "./img/pro.webp"
                },
                {
                  name: "小米119",
                  price: "6899",
                  label: "15万人购买",
                  imgurl: "./img/pro.webp"
                }
              ]
            };
          },
          components: { product: o }
        },
        m = d,
        f = Object(p["a"])(m, i, l, !1, null, "da4feffa", null);
      e["default"] = f.exports;
    },
    c552: function(t, e, r) {},
    ef1d: function(t, e, r) {
      "use strict";
      var i = r("c552"),
        l = r.n(i);
      l.a;
    }
  }
]);
