import { defineComponent as Lt, openBlock as v, createElementBlock as I, createElementVNode as n, getCurrentInstance as Ve, ref as d, computed as me, watch as ce, onMounted as Fe, resolveComponent as F, createVNode as a, withCtx as T, createCommentVNode as de, Fragment as ae, renderList as oe, createBlock as te, createSlots as Et, withModifiers as Ge, unref as Ye, withKeys as He, normalizeStyle as Ne, withDirectives as je, vModelText as pt, inject as pe, createTextVNode as ee, normalizeClass as Ce, toDisplayString as ge, vShow as We } from "vue";
const At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACN0lEQVRIid3VT0gUYRjH8e/7zu5saX8WDFtllVLJil0Q0g5RCSJRh0DoIJTdWisIOlZQSGxB/+gWiB2ii/0XQi8JSSRCJBIsWxFhuTjZmkqSmu7uzDsdZInIHTdlO/g7zvsMn3mf9+Ed8fKddeDCg2RbfFL5yUF8XmkM3G1oFrUts8O5QtIxp0cMmWsEwLWm2C9zjaSz8iBXNkV5OoTq3dSUSyqLJWM/bN4aivZekzdDKitIVJ6esZ0KqsslVw7raBK6IxYfvig2rBNUl2ns3iq588LkZlcKaxHPcUc+r6A15KEnanHxUZKZxO+1NkzqAhpXj+j8TNjcemY6Qo5nFG7U+fxNca79TySdnqjFpY4kJ/e52VIklgatz4M92zRudDq35Wm/xeCozf4q5+POCAVKJJayicQWP+yBTxZVm5wHOONqvkcwl4K51KIOkzPg0pxrMkIf44p8j6Cs0Ln3AMFSSWzMcXgzQ7Exm6/fFY27nHu/uVCws0LS+95aGqRsCD9JcXSvi9rtC5etXQ3XmnSiw4ruyBIhmB/fe30mrSEP5w+5CZRIdBcUeQUHd2h0nVlFsFQjPuncNsjiZgCoD2qcbXDjL5DYto0QgkTK5n6fyetBxfUmnc4Bi5aHyeVB6fgLBBUbBeNTEBtXTM3OP68pl7Qd9/D4lcnljoXHNKtLNR1jwsaY+Pu7+gcVJ24nOFbnzvjuP+1oOVl5P77/B/m80sg1Yk6PGDLcqDfnEvN5pTH6/FTzL6ETzt+QtLb8AAAAAElFTkSuQmCC", Dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACx0lEQVRIieWWX0hTURzHf/duzX8PWzJEMkofchKNNoiyfwouknZfSiJTCpRiICSGsvmkghJWCCo9qU/qhXEJsR58CSPnn6lgZpjTCbqJIqnEBHd37+52z6+HGPSQd0xYf+gL5+mc8/ucc/h9f79DjXvkW02c1Pt1n5yEJChbR2+1lWtsUNwibLo8shURIRljbElmiluETTDU8ZgsSGwY6nikk/Fcv9J/DnJ5CGN2CLzZIfAuD2ES2auOt+D9onzbv4f5D66rX43MRyua7mqeIAI1Mh+9f+mM5gM7Hq3Ny6K8FqPqzZFBo4vynfbhSKcpl55mnoueQBD1jy3HXgAA1T4sdc37xGumXHraOUVqAACUYIog/y7mm/Nod8dDTeXkCinNyaT8eVmUFwDgdX3qxe0AnrpqoN81DEhO/x7mK8VS9JEgYbqlVfBNrsg3EREOBNRy7oiNc0dsBwJqEREmluVSS6uwLkqYdiQfuTyEaeaknkAQ9SeOUxtBEbRlHeLHuTVSNLdGiso6xI9BEbQ5mdTGPo/6Jk7qVUyQw25ksof4odlotXebGBEROHfEZh8Ms7F5+2CY5dwRGyKCd5sYh2aj1SZ7iP97K0NnVUr5zKpcUtElun27aLCa1dyCnxQ6WIl1sBK74CeFVrOa8+1iQWW3ODWzKpd0VaXcO5SklAyihGmWVsE3sSyXxksGQcJ0pWRQBPWNRhrr+8POWMD1HWKIza3vkILYAer7w86+0UijEkjRR7lZ1KpzitQ0DEjOzxukMBBEvfNp6hUAoCq7xUldBvXt/Gl6ZsFPLlvNKk4pliLohlE1DPDDuM8qNI+aOannyya5AABQck71tq1cY2MnorVWs4qLV4ISanxjSzJjsod4kz3Ejy3JTCKNL25R/VnFZ+mRTy/TMhLZE9Of99G/C8rW0VuJdstE5PIQJltHb1G/6wP5HWOJ7WdRKhKDAAAAAElFTkSuQmCC", Ot = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADG0lEQVRIid2W3UtTYRzHf5umbWe2HTge59mL22IamdNalOl8aYFayzAQrQi6CCwp+z/qpsArvehKmAsjI40mNi23nBeiLiYuYW9nO50dl3Ny9uIU1kUIEmw1y6K+8Nw9z/fDD37fLw/HSzIXLVbHIBtLSOEAJEB4Ab1O0wNPjZOklwxdSqfTcBDH4w8ZnhonSS4bS0jLpPjrg5gGAEAhw8fZWELKPSjA9/r/QPm5XPaSjOGNZf4ZAECbXtulkOHjvw3k9oU6NjbZ8urjyv5Pbup6U13VfUinOatu6pqUwKYcTk+fSChwqcpKRvcNcvvoqzNzy4/FODo79Hx6OZlMYVrN0YcAwHk/53xCPV/XleLo7McVXy8AQDZYVtBGNFZeiqMfWppP3vAH11qPCPhekRBxAQB0XWk4w7IJuUyCTZinF4wbm2w5QElGr6zLoKlU9n9mIufIYLhFLik28/mFtNPl73G6/D0Iv/CzTIJN+INrrSEmcrb6uLI/m1dGkJdkDFNWx0AymcKKBDxfantHODw6Mx+k1xuD9Hrj8OjMfGp7R1gk4PsSWynMYnUMeknGkDPojWX+mZTALJ3t9XUiIeJadVPdYhy1tzTV3GxpqrkpxlH7qpvqRoXISufl+nopgVl2NzIn0O9WRlCbXtsdoML6kVe2DxvRWIVaRZhoJlI78W5xaOLd4hDNRGrVKsIUicaOjYzZbAEqrG/Ta7sy+WXcOoUMH5MR2FsqtK7bZOMKkRBxXeto0K66qW4AgOa6E/cKDuVHaTZSyyssCJ/Xae7k53HjOU8EALDk9DwQ46hdLik2+4NrrfH4lriyQj5YWSEfjMW3Sv3BtVa5pNhcgqNzDqenL5tX1hyJhMinjyu+XvP0gpFmIrXJZArrbK+vAwDOyJjNeriw4IsYR+00EzmnVhKmfYNUZeIXAN+Ce6Gh+vaU1THAhKOnAQBUcvFLvU7Ts7Ts6VMrCdMvVdBeGACAWkUM7y3VvDxu4lTV0Uc/8vgp0F4pZPj43VsXkVze7Orv5+jfBQkQXiBbGf6qvCRjECC8AOdPfSC/Aqx/lY5V+/Y+AAAAAElFTkSuQmCC", Ke = "", St = "";
function Tt(...e) {
  const L = ref({});
  return e.forEach((A, D) => {
    L.value[A] = [];
    const u = Ke().getDict(A);
    u && Object.keys(u).length != 0 ? L.value[A] = u : St(A).then((c) => {
      L.value[A] = c.RESULT, Ke().setDict(A, L.value[A]);
    });
  }), toRefs(L.value);
}
var yt = typeof global == "object" && global && global.Object === Object && global, gt = typeof self == "object" && self && self.Object === Object && self, st = yt || gt || Function("return this")(), Be = st.Symbol, ut = Object.prototype, Ct = ut.hasOwnProperty, Vt = ut.toString, Ie = Be ? Be.toStringTag : void 0;
function bt(e) {
  var L = Ct.call(e, Ie), A = e[Ie];
  try {
    e[Ie] = void 0;
    var D = !0;
  } catch {
  }
  var u = Vt.call(e);
  return D && (L ? e[Ie] = A : delete e[Ie]), u;
}
var ht = Object.prototype, Rt = ht.toString;
function Ut(e) {
  return Rt.call(e);
}
var It = "[object Null]", Nt = "[object Undefined]", Xe = Be ? Be.toStringTag : void 0;
function Ft(e) {
  return e == null ? e === void 0 ? Nt : It : Xe && Xe in Object(e) ? bt(e) : Ut(e);
}
function kt(e) {
  return e != null && typeof e == "object";
}
var Yt = "[object Symbol]";
function Bt(e) {
  return typeof e == "symbol" || kt(e) && Ft(e) == Yt;
}
var xt = /\s/;
function wt(e) {
  for (var L = e.length; L-- && xt.test(e.charAt(L)); )
    ;
  return L;
}
var Pt = /^\s+/;
function Mt(e) {
  return e && e.slice(0, wt(e) + 1).replace(Pt, "");
}
function ze(e) {
  var L = typeof e;
  return e != null && (L == "object" || L == "function");
}
var Ze = NaN, Qt = /^[-+]0x[0-9a-f]+$/i, $t = /^0b[01]+$/i, jt = /^0o[0-7]+$/i, zt = parseInt;
function et(e) {
  if (typeof e == "number")
    return e;
  if (Bt(e))
    return Ze;
  if (ze(e)) {
    var L = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ze(L) ? L + "" : L;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Mt(e);
  var A = $t.test(e);
  return A || jt.test(e) ? zt(e.slice(2), A ? 2 : 8) : Qt.test(e) ? Ze : +e;
}
var Qe = function() {
  return st.Date.now();
}, _t = "Expected a function", Jt = Math.max, qt = Math.min;
function Gt(e, L, A) {
  var D, u, c, h, f, l, y = 0, b = !1, Q = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(_t);
  L = et(L) || 0, ze(A) && (b = !!A.leading, Q = "maxWait" in A, c = Q ? Jt(et(A.maxWait) || 0, L) : c, w = "trailing" in A ? !!A.trailing : w);
  function j(U) {
    var V = D, r = u;
    return D = u = void 0, y = U, h = e.apply(r, V), h;
  }
  function $(U) {
    return y = U, f = setTimeout(M, L), b ? j(U) : h;
  }
  function _(U) {
    var V = U - l, r = U - y, B = L - V;
    return Q ? qt(B, c - r) : B;
  }
  function g(U) {
    var V = U - l, r = U - y;
    return l === void 0 || V >= L || V < 0 || Q && r >= c;
  }
  function M() {
    var U = Qe();
    if (g(U))
      return p(U);
    f = setTimeout(M, _(U));
  }
  function p(U) {
    return f = void 0, w && D ? j(U) : (D = u = void 0, h);
  }
  function S() {
    f !== void 0 && clearTimeout(f), y = 0, D = l = u = f = void 0;
  }
  function J() {
    return f === void 0 ? h : p(Qe());
  }
  function P() {
    var U = Qe(), V = g(U);
    if (D = arguments, u = this, l = U, V) {
      if (f === void 0)
        return $(l);
      if (Q)
        return clearTimeout(f), f = setTimeout(M, L), j(l);
    }
    return f === void 0 && (f = setTimeout(M, L)), h;
  }
  return P.cancel = S, P.flush = J, P;
}
/*! Element Plus Icons Vue v2.3.1 */
var Ht = /* @__PURE__ */ Lt({
  name: "Search",
  __name: "search",
  setup(e) {
    return (L, A) => (v(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Wt = Ht;
function _e(e) {
  if (!e && typeof e != "object")
    throw new Error("error arguments", "deepClone");
  const L = e.constructor === Array ? [] : {};
  return Object.keys(e).forEach((A) => {
    e[A] && typeof e[A] == "object" ? L[A] = _e(e[A]) : L[A] = e[A];
  }), L;
}
function tt(e, L = "str", A = "date") {
  if (!e) return L == "str" ? "" : [];
  if (e == "0" || Number(e))
    return L != "str" ? L == "datetime" || L == "datetimearr" ? [
      `${Re(Number(e), A)} ${$e(null, !1)}`,
      `${Re(0, A)} ${$e(null)}`
    ] : [Re(Number(e), A), Re(0, A)] : Re(Number(e), A);
  {
    let D = [e], u = [];
    if (L != "str") {
      let [c, h = "0"] = e.split("@");
      D = [c, h];
    }
    for (let c = 0; c < D.length; c++) {
      const [h, f = ""] = D[c].split("T");
      let l = "", y = $e(f, c == 1);
      h == "0" || Number(h) ? l = Re(Number(h), A) : l = Kt(h);
      let b = L == "datetime" || L == "datetimearr" ? `${l} ${y}` : l;
      u.push(b);
    }
    return L != "str" ? u : u.join();
  }
}
function Kt(e) {
  let [L = "0y", A = "0m", D = "0d"] = e.split(","), u = [L, A, D], c = [];
  function h(f) {
    return f < 10 ? "0" + f : f;
  }
  for (let f = 0; f < u.length; f++) {
    const l = u[f];
    if (l == null) continue;
    let y;
    if (Number(l))
      y = l * 1 < 10 ? "0" + l : l;
    else {
      let b = l.slice(0, l.length - 1), Q = l.slice(-1);
      y = it(Number(b), Q), y <= 0 && (y = h(12 + y), c[f - 1] = c[f - 1] - 1);
    }
    c[f] = y;
  }
  return c.join("-");
}
function $e(e, L = !0) {
  if (!e) return L ? "23:59:59" : "00:00:00";
  let [A, D, u] = e.split(":"), c = [A, D, u], h = "";
  for (let f = 0; f < c.length; f++) {
    const l = c[f];
    if (l != null)
      if (Number(l) || Number(l) == "0")
        h += (Number(l) < 10 ? "0" + Number(l) : Number(l)) + ":";
      else {
        let y = l.slice(0, l.length - 1), b = l.slice(-1);
        h += it(Number(y), b) + ":";
      }
  }
  return h.slice(0, h.length - 1);
}
function it(e, L) {
  let A = /* @__PURE__ */ new Date(), D = "";
  switch (L) {
    case "y":
      D = A.getFullYear() + e;
      break;
    case "m":
      D = A.getMonth() + 1 + e;
      break;
    case "d":
      D = A.getDate() + e;
      break;
  }
  return D > 0 && D < 10 ? "0" + D : D;
}
function Re(e = 0, L = "date") {
  var A = parseInt(e), D = /* @__PURE__ */ new Date();
  D.setDate(D.getDate() + A);
  var u = D.getFullYear(), c = D.getMonth() + 1, h = D.getDate(), f = D.getHours(), l = D.getMinutes(), y = D.getSeconds();
  function b(Q) {
    return Q < 10 ? "0" + Q : Q;
  }
  return L == "year" ? String(u) : L == "month" ? String(b(c)) : L == "datetime" ? `${u}-${b(c)}-${b(h)} ${b(f)}:${b(
    l
  )}:${b(y)}` : u + "-" + b(c) + "-" + b(h);
}
const Te = (e, L) => {
  const A = e.__vccOpts || e;
  for (const [D, u] of L)
    A[D] = u;
  return A;
}, Xt = { class: "filterForm" }, Zt = {
  key: 0,
  class: "firstSelect ml10 mr10"
}, el = { class: "firstSelect mr10" }, tl = { class: "mr10" }, ll = { style: { width: "160px" } }, nl = { class: "selectmodal-tools" }, al = {
  key: 1,
  class: "firstSelect ml10 mr10"
}, ol = {
  key: 2,
  class: "firstSelect mr10"
}, rl = {
  key: 3,
  class: "mr10"
}, sl = {
  key: 4,
  class: "firstSelect mr10"
}, lt = "CDate,LDate,TDate,LWork,CWork,LMonth,CMonth,TMonth,CDateQ,CDateH", nt = "CDateQNQ,CDateQNH,CDateHNQ,CDateHNH", ul = {
  __name: "filterForm",
  props: {
    // 查询字段下拉框的选项
    filterConfig: {
      type: Object,
      default: {}
    },
    // 当前控件配置
    filterVal: {
      type: Object,
      default: {}
    },
    // 绑定的值
    formData: {
      type: Object,
      default: {}
    },
    // 是否是过滤弹框
    isCondition: {
      type: Boolean,
      default: !1
    },
    // 系统方案是否隐藏确认和取消按钮
    hideBtn: {
      type: Boolean,
      default: !1
    },
    ENABLESTATE: {
      type: [Number, String],
      default: 0
    },
    currentIndex: {
      type: [Number, String],
      default: 0
    },
    isTransfer: {
      // 下拉是否需要穿透功能
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:formData", "changeFilter", "inputEnter"],
  setup(e, { emit: L }) {
    const { proxy: A } = Ve(), D = L, u = e, c = d("mini"), h = me(() => u.filterConfig.filterSeceletArr), f = d([]), l = me(() => u.filterVal), y = d(null);
    d("1");
    const b = d([]);
    d(null), d([{}, {}, { label: "222" }]);
    const Q = (o) => {
      let t = o.value, m = h.value.filter((N) => N.FIELD == t);
      u.formData.LABEL = m[0].LABEL;
      try {
        f.value = m[0].VCODE ? JSON.parse(m[0].VCODE) : [];
      } catch {
      }
      D("changeFilter", m[0] || {});
    };
    ce(
      () => u.filterVal,
      (o) => {
        if (y.value = o.BILLNO, o.CONTROLS == "ExSelect" || o.CONTROLS == "ExSelectMultiple")
          if (o.OTHER && o.OTHER.indexOf("${") === 0 && o.OTHER.charAt(o.OTHER.length - 1) == "}") {
            let t = o.OTHER.substring(2, o.OTHER.length - 1);
            b.value = Tt(t);
          } else
            b.value = JSON.parse(o.OTHER);
      },
      { immediate: !0 }
    );
    const w = () => {
      D("inputEnter");
    }, j = d({}), $ = d(!1), _ = d(null);
    d(null);
    const g = d(), M = d({}), p = d({}), S = d([]), J = d(1), P = d(10), U = d({
      tableColumns: [],
      hasTableTools: !1,
      hasSeq: !1,
      toolsConfig: [],
      loading: !1,
      width: "500px",
      height: "auto"
    }), V = {
      // 下拉表格类 默认大小
      selectTableSize: ["360px", "280px"],
      // 下拉表格类 默认列表配置
      selectTableColumn: [
        { LABEL: "编码", FIELD: "BILLNO", WIDTH: 150, ISSHOW: "1" },
        { LABEL: "名称", FIELD: "VNAME", WIDTH: 200, ISSHOW: "1" }
      ]
    }, r = (o, t) => {
      if (!u.formData) return !1;
      let m = {};
      m[o] = t.join(","), Object.assign(u.formData.DEFAULTVAL, m);
    }, B = () => {
      J.value = 1, S.value = [], W(l.value, null);
    }, W = (o, t) => {
      var ne;
      const { FIELD: m, CONTROLS: N, OTHER: z, SLOT: G, REVERFIELD: K } = o;
      if (N != "ExSelect" && N != "ExSelectMultiple" ? De(z) : Ee.value = [], (N == "ExSelectModal" || N == "ExSelectTable" && t == null) && (delete p.value[m], u.formData.DEFAULTVAL = "", (ne = _ == null ? void 0 : _.value) == null || ne.hidePanel(), S.value = []), t != "" && t != null)
        switch (N) {
          case "ExSelectTable":
          case "ExSelectModal":
            p.value[m] = _e(t), K ? u.formData.DEFAULTVAL = t == null ? "" : Array.isArray(t) ? t.map((le) => le[K]).join(",") : t[K] : u.formData.DEFAULTVAL = t == null ? "" : Array.isArray(t) ? t.map((le) => le == null ? void 0 : le.VNAME).join(",") : t == null ? void 0 : t.VNAME, setTimeout(() => {
              var le;
              (le = _ == null ? void 0 : _.value) == null || le.hidePanel(), J.value = 1, S.value = [];
            }, 200);
            break;
        }
      else
        r(m, []);
    }, R = Gt((o = !1) => {
      o || (J.value = 1), O(l.value, o);
    }, 300), i = (o) => {
      let { FIELD: t, OTHER: m, SLOTCFG: N } = o;
      if (N == "" || m == "") return console.error("Err:filterForm:useSelectTable配置错误");
      if (g.value != t) {
        g.value = t;
        let z = [];
        try {
          let Z = JSON.parse(N), { MODULEID: ve, PAGEID: s, STYLE: Se, COL: ke } = Z;
          z = [ve, s, Se, ke];
        } catch {
          z = N.split(",");
        }
        if (z.length < 2) return console.error("Err:@eosine/form:useSelectTable配置错误");
        let [G, K, ne, le] = z, Oe = ne ? ne.split("*") : ["500px", "300px"];
        U.value.width = Oe[0], U.value.height = Oe[1], U.value.columns = le ? SET_CustemModalCOL(le) : V.selectTableColumn, M.value = {
          PK_MODULE: G,
          BILLNO: K,
          CUSTOMPLAN: []
        }, O(o, !1);
        return;
      } else
        O(o, !1);
    }, O = (o, t = !1) => {
      if (!A.$getData) return console.error("Err:@eosine/form:globalConfig 缺少getData全局方法");
      let { FIELD: m, OTHER: N, SLOTCFG: z } = o;
      if (g.value != m || !M.value.PK_MODULE) return i(o);
      let { url: G, data: K, importantData: ne } = De(N), { PK_MODULE: le, BILLNO: Oe, CUSTOMPLAN: Z } = M.value, ve = [];
      try {
        let he = JSON.parse(z), { MODULEID: ft, PAGEID: mt, STYLE: vt } = he;
        ve = [ft, mt, vt];
      } catch {
        ve = z.split(",");
      }
      if (ve.length < 2) return console.error("Error: 配置错误");
      let [s, Se, ke] = ve, Je = ke ? ke.split("*") : V.selectTableSize;
      U.value.width = Je[0], U.value.height = Je[1];
      const qe = u.formData.DEFAULTVAL;
      t ? J.value++ : J.value = 1;
      let ct = {
        KEYWORD: qe,
        PAGENUM: J.value,
        PAGESIZE: P.value,
        SORTNAME: "",
        SORTORDER: "",
        MODULEID: le,
        PAGEID: Oe,
        PROGRAMID: Z && Z.length > 0 ? Z[0].BILLNO : "",
        // 查询方案ID
        // QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: keyword, QUERYTYPE: "Like" }], // 查询方案-查询结构
        QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: qe, QUERYTYPE: "FUZZYRET" }],
        // 查询方案-查询结构
        ...K,
        ...ne
      };
      A.$getData({
        url: G,
        method: "post",
        data: ct,
        headers: {
          repeatSubmit: !1
        }
      }).then((he) => {
        t ? he.RESULT.RECORDS.length > 0 && (S.value = S.value.concat(he.RESULT.RECORDS)) : S.value = he.RESULT.RECORDS;
      }).catch((he) => {
        S.value = [];
      }).finally(() => {
        _.value.showPanel();
      });
    };
    function x(o) {
      return !!(u.ENABLESTATE == 1 && o);
    }
    const re = me(() => {
      if (lt.includes(u.formData.QUERYTYPE))
        return u.formData.DEFAULTVAL = "", "0";
      if (nt.includes(u.formData.QUERYTYPE))
        return "1";
    });
    ce(() => u.formData.QUERYTYPE, (o) => {
      lt.includes(u.formData.QUERYTYPE) ? (re.value = "0", u.formData.DEFAULTVAL = "") : nt.includes(u.formData.QUERYTYPE) && (re.value = "1");
    });
    const X = (o) => {
      let { LABEL: t, SLOTCFG: m, OTHER: N } = o, z = "70%", G = "60%";
      if (!m || m == "") return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let K = [];
      try {
        let Z = JSON.parse(m), { MODULE: ve, PAGEID: s, STYLE: Se = "70%*60%" } = Z;
        K = [ve, s, Se];
      } catch {
        K = m.split(",");
      }
      if (K.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let { data: ne, importantData: le } = De(N);
      if (K.length == 3) {
        let Z = K[2].split("*");
        if (Z.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
        z = Z[0], G = Z[1];
      }
      return z.includes("%") && (z = Le(z, window.innerWidth)), G.includes("%") && (G = Le(G, window.innerHeight)), {
        _config: _e(o),
        title: t,
        width: z,
        height: G,
        params: { ...ne, ...le },
        page: {
          MODULEID: K[0],
          PAGEID: K[1]
        }
      };
    };
    function Le(o, t) {
      if (typeof o != "string" || !o.endsWith("%"))
        return o;
      const m = parseFloat(o) / 100;
      return parseInt(m * t) + "px";
    }
    const fe = d({});
    function se() {
      let o = X(l.value);
      o.contnet = "table", o.currentIndex = u.currentIndex, D("openModal", o), fe.value = o;
    }
    const H = me((o) => (t) => {
      try {
        let { SLOTCFG: m } = t;
        return !m.includes('"selectStage":false');
      } catch {
        return !0;
      }
    }), Y = me((o) => (t) => {
      try {
        return t ? t.includes("CREATED") : !1;
      } catch {
        return !1;
      }
    }), E = (o) => {
      q("", o);
    }, q = (o = void 0, t) => {
      if (o == null) return;
      let { FIELD: m, OTHER: N } = t;
      if (N == "") return;
      let { url: z, data: G } = De(N);
      z != "" && ($.value = !0, A.request({
        url: z,
        method: "post",
        data: {
          KEYWORD: o,
          // MODULEID: MENUID,
          ...G
        },
        headers: {
          repeatSubmit: !1
        }
      }).then(({ RESULT: K }) => {
        j.value[m] = K;
      }).catch(() => {
        j.value[m] = [];
      }).finally(() => {
        $.value = !1;
      }));
    }, ue = (o, t) => {
      var le, Oe;
      const { FIELD: m, CONTROLS: N, OTHER: z, SLOT: G, REVERFIELD: K } = o;
      if (N != "ExSelect" && N != "ExSelectMultiple" ? De(z) : Ee.value = [], (N == "ExSelectModal" || N == "ExSelectTable" && t == null) && delete p.value[m], t != "" && t != null)
        switch (N) {
          case "ExSelectMultiple":
            var ne = [];
            for (let Z = 0; Z < t.length; Z++) {
              const ve = t[Z];
              let s = (le = b.value) == null ? void 0 : le.find((Se) => Se.VALUE == ve);
              ne.push(s);
            }
            Ae(m, t);
            break;
          case "ExSelectSearch":
            o.SLOTCFG && o.SLOTCFG.includes("CREATED") ? j.value[m].find((Z) => Z.VALUE == t) == null || j.value[m].find((Z) => Z.VALUE == t) : j.value[m].find((Z) => Z.VALUE == t);
            break;
          case "ExSelectGroup":
            be(j.value[m], (Z) => Z.VALUE == t);
            break;
        }
      else
        Ae(m, []);
      K && (N == "ExSelect" || N == "ExSelectMultiple") && (u.formData[K] = DictLabels((Oe = EnumData.value) == null ? void 0 : Oe[m], t) || ""), o.LINKAGE && (o.LINKAGE.includes("COPYTO") || cleanEvent(o), SET_ValueSYNC(o), numberBlur(o), DateCalc(o), SelectChangeAfter(o, t));
    };
    function be(o, t, m = { value: !1 }) {
      for (const N of o) {
        if (t(N))
          return m.value = !0, N;
        if (N.CHILDREN || N.children) {
          const z = be(N.CHILDREN || N.children, t, m);
          if (z) return z;
          m.value && (m.value = !1);
        }
      }
      return null;
    }
    const Ae = (o, t) => {
      u.formData.DEFAULTVAL = t.join(",");
    };
    d(null);
    const Ue = () => {
      try {
        return JSON.parse(l.value.VCODE);
      } catch {
        return [];
      }
    }, ye = () => {
      if (["ExSelectMultiple", "ExSelectMutiple", "ExCheckbox", "ExRegion", "ExArea", "ExDateRange", "ExDateTimeRange", "ExDate"].includes(l.value.CONTROLS) && u.formData.DEFAULTVAL && u.formData.DEFAULTVAL != "")
        switch (l.value.CONTROLS) {
          case "ExDateRange":
            if (u.formData.DEFAULTVAL.includes(",")) {
              let t = u.formData.DEFAULTVAL.split(",");
              /^((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(t[0]) || (u.formData.DEFAULTVAL = tt(u.formData.DEFAULTVAL, "arr", u.formData.SLOTCFG).join(",")), u.formData.DEFAULTVALArr = u.formData.DEFAULTVAL.split(",");
            } else
              u.formData.DEFAULTVAL = tt(u.formData.DEFAULTVAL, "arr", u.formData.SLOTCFG).join(","), u.formData.DEFAULTVALArr = u.formData.DEFAULTVAL.split(",");
            break;
          default:
            console.log("defaultdefaultdefaultdefault"), u.formData.DEFAULTVALArr = u.formData.DEFAULTVAL.split(",");
            break;
        }
    };
    function ie(o) {
      l.value.CONTROLS == "ExDateRange" || l.value.CONTROLS == "ExDateTimeRange" || l.QUERYTYPE == "Between" || l.QUERYTYPE == "NotBetween" ? u.formData.DEFAULTVAL = o ? o.join(",") : "" : u.formData.DEFAULTVAL = o || "";
    }
    const Ee = d([]);
    function De(o) {
      if (!o)
        return Ee.value = [], { url: "", data: {}, importantData: {} };
      try {
        let t = Array.isArray(JSON.parse(o)) ? JSON.parse(o)[0] : JSON.parse(o);
        if (t.setvalue && JSON.stringify(t.setvalue) != "{}") {
          let m = [];
          for (const N in t.setvalue)
            m.push({ k: N, v: t.setvalue[N] });
          Ee.value = m;
        }
        return {
          url: t.url,
          data: t == null ? void 0 : t.params,
          importantData: t == null ? void 0 : t.importantData
        };
      } catch (t) {
        if (o.indexOf("/") == "0") {
          let m = o.split("?"), N = "", z = {}, G = {};
          if (m.length == 0)
            N = o, Ee.value = [];
          else if (m.length > 0) {
            if (N = m[0], m.length > 1) {
              let { obj: K, importantObj: ne } = k("a?" + m[1], "obj");
              z = K, G = ne;
            }
            m.length > 2 && (k("a?" + m[2], "obj"), z = { ...z, ...C() }, G = {
              ...G,
              ...C()
            }), Ee.value = m[3] ? k("a?" + m[3], "arr") : [];
          }
          return { url: N, data: z, importantData: G };
        } else
          console.error("配置解析错误!", t);
      }
    }
    function C(o) {
      return {};
    }
    function k(o, t) {
      let m = /([^&?=]+)=([^&?=]+)/g, N = {}, z = {}, G = [];
      return o.replace(m, function() {
        if (arguments[1].includes("!")) {
          let ne = arguments[1].substr(1);
          z[ne] = arguments[2];
        } else
          N[arguments[1]] = arguments[2];
        let K = {};
        K.k = arguments[1], K.v = arguments[2], G.push(K);
      }), t == "obj" ? { obj: N, importantObj: z } : G;
    }
    return Fe(() => {
      ye(), (l.value.CONTROLS == "ExSelectGroup" || l.value.CONTROLS == "ExSelectSearch") && q("", l.value);
    }), (o, t) => {
      const m = F("vxe-option"), N = F("vxe-select"), z = F("el-date-picker"), G = F("el-input"), K = F("el-tree-select"), ne = F("el-option"), le = F("el-select"), Oe = F("el-button"), Z = F("eos-table"), ve = F("vxe-pulldown");
      return v(), I("div", Xt, [
        e.isCondition ? (v(), I("div", Zt, [
          a(N, {
            transfer: "",
            "popper-class": "popperClass",
            modelValue: e.formData.QRYPRE,
            "onUpdate:modelValue": t[0] || (t[0] = (s) => e.formData.QRYPRE = s),
            placeholder: "",
            style: { width: "50px" },
            size: c.value
          }, {
            default: T(() => [
              a(m, {
                label: "(",
                value: "("
              }),
              a(m, {
                label: "((",
                value: "(("
              }),
              a(m, {
                label: "(((",
                value: "((("
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0),
        n("div", el, [
          a(N, {
            transfer: e.isTransfer,
            modelValue: e.formData.FIELD,
            "onUpdate:modelValue": t[1] || (t[1] = (s) => e.formData.FIELD = s),
            placeholder: "请选择",
            style: { width: "100px" },
            size: c.value,
            onChange: Q,
            disabled: x(e.formData.FIELD)
          }, {
            default: T(() => [
              (v(!0), I(ae, null, oe(h.value, (s) => (v(), te(m, {
                key: s.FIELD,
                label: s.LABEL,
                value: s.FIELD
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["transfer", "modelValue", "size", "disabled"])
        ]),
        n("div", tl, [
          a(N, {
            transfer: "",
            disabled: x(e.formData.QUERYTYPE),
            modelValue: e.formData.QUERYTYPE,
            "onUpdate:modelValue": t[2] || (t[2] = (s) => e.formData.QUERYTYPE = s),
            placeholder: "请选择",
            style: { width: "90px" },
            size: c.value
          }, {
            default: T(() => [
              (v(!0), I(ae, null, oe(Ue(), (s) => (v(), te(m, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["disabled", "modelValue", "size"])
        ]),
        n("div", ll, [
          l.value.QUERYTYPE == "Between" || l.value.QUERYTYPE == "NotBetween" ? (v(), I(ae, { key: 0 }, [
            l.value.CONTROLS == "ExDateTimeRange" ? (v(), te(z, {
              key: 0,
              modelValue: e.formData.DEFAULTVALArr,
              "onUpdate:modelValue": t[3] || (t[3] = (s) => e.formData.DEFAULTVALArr = s),
              clearable: "",
              "unlink-panels": "",
              type: "datetimerange",
              "range-separator": "至",
              "value-format": "YYYY-MM-DD HH:mm:ss",
              style: { width: "100%" },
              onChange: t[4] || (t[4] = (s) => ie(s)),
              onClear: t[5] || (t[5] = (s) => ie(null))
            }, null, 8, ["modelValue"])) : (v(), te(z, {
              key: 1,
              modelValue: e.formData.DEFAULTVALArr,
              "onUpdate:modelValue": t[6] || (t[6] = (s) => e.formData.DEFAULTVALArr = s),
              "unlink-panels": "",
              type: "daterange",
              clearable: "",
              "value-format": "YYYY-MM-DD",
              "range-separator": "至",
              style: { width: "100%" },
              placeholder: "请选择",
              onChange: t[7] || (t[7] = (s) => ie(s)),
              onClear: t[8] || (t[8] = (s) => ie(null))
            }, null, 8, ["modelValue"]))
          ], 64)) : l.value.CONTROLS == "ExDateRange" ? (v(), te(z, {
            key: 1,
            modelValue: e.formData.DEFAULTVALArr,
            "onUpdate:modelValue": t[9] || (t[9] = (s) => e.formData.DEFAULTVALArr = s),
            "unlink-panels": "",
            type: "daterange",
            clearable: "",
            "value-format": "YYYY-MM-DD",
            "range-separator": "至",
            style: { width: "100%" },
            placeholder: "请选择",
            onChange: t[10] || (t[10] = (s) => ie(s)),
            onClear: t[11] || (t[11] = (s) => ie(null))
          }, null, 8, ["modelValue"])) : l.value.CONTROLS == "ExDateTimeRange" ? (v(), te(z, {
            key: 2,
            modelValue: e.formData.DEFAULTVALArr,
            "onUpdate:modelValue": t[12] || (t[12] = (s) => e.formData.DEFAULTVALArr = s),
            clearable: "",
            "unlink-panels": "",
            type: "datetimerange",
            "range-separator": "至",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            style: { width: "100%" },
            onChange: t[13] || (t[13] = (s) => ie(s)),
            onClear: t[14] || (t[14] = (s) => ie(null))
          }, null, 8, ["modelValue"])) : re.value == "0" || re.value == "1" ? (v(), te(G, {
            key: 3,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[15] || (t[15] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "请输入",
            disabled: re.value == "0",
            type: "number"
          }, null, 8, ["modelValue", "disabled"])) : l.value.CONTROLS == "ExDate" ? (v(), te(z, {
            key: 4,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[16] || (t[16] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            style: { width: "100%" },
            placeholder: "请选择",
            type: l.value.SLOTCFG || "date",
            "value-format": l.value.SLOTCFG == "year" ? "YYYY" : l.value.SLOTCFG == "month" ? "YYYY-MM" : "YYYY-MM-DD"
          }, null, 8, ["modelValue", "type", "value-format"])) : l.value.CONTROLS == "ExDateTime" ? (v(), te(z, {
            key: 5,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[17] || (t[17] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            type: "datetime",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            style: { width: "100%" }
          }, null, 8, ["modelValue"])) : l.value.CONTROLS == "ExSelect" ? (v(), te(N, {
            key: 6,
            transfer: "",
            placeholder: "请选择",
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[18] || (t[18] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            style: { width: "100%" },
            size: c.value
          }, {
            default: T(() => [
              (v(!0), I(ae, null, oe(b.value, (s) => (v(), te(m, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size"])) : l.value.CONTROLS == "ExSelectGroup" ? (v(), te(K, {
            key: 7,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[19] || (t[19] = (s) => e.formData.DEFAULTVAL = s),
            "check-strictly": H.value(l.value),
            clearable: "",
            filterable: "",
            "remote-show-suffix": "",
            remote: "",
            "default-expand-all": "",
            "remote-method": (s) => q(s, l.value),
            data: j.value[l.value.FIELD],
            onFocus: t[20] || (t[20] = (s) => E(l.value)),
            onChange: t[21] || (t[21] = (s) => ue(l.value, s)),
            onClear: t[22] || (t[22] = (s) => ue(l.value, null)),
            style: { width: "100%" },
            "render-after-expand": !1,
            placeholder: " ",
            props: { label: "LABEL", children: "CHILDREN" },
            "value-key": "VALUE",
            highlightCurrent: ""
          }, null, 8, ["modelValue", "check-strictly", "remote-method", "data"])) : l.value.CONTROLS == "ExSelectMultiple" ? (v(), te(le, {
            key: 8,
            modelValue: e.formData.DEFAULTVAL2,
            "onUpdate:modelValue": t[23] || (t[23] = (s) => e.formData.DEFAULTVAL2 = s),
            clearable: "",
            multiple: "",
            "collapse-tags": "",
            "collapse-tags-tooltip": "",
            "popper-class": "pop-bg-w",
            style: { width: "100%" },
            teleported: !0,
            onChange: t[24] || (t[24] = (s) => ue(l.value, s)),
            onClear: t[25] || (t[25] = (s) => ue(l.value, null)),
            placeholder: " "
          }, {
            default: T(() => [
              (v(!0), I(ae, null, oe(b.value, (s) => (v(), te(ne, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])) : l.value.CONTROLS == "ExSelectSearch" ? (v(), te(le, {
            key: 9,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[26] || (t[26] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            filterable: "",
            remote: "",
            "remote-show-suffix": "",
            "remote-method": (s) => q(s, l.value),
            "allow-create": Y.value(l.value.SLOTCFG),
            placeholder: " ",
            style: { width: "100%" },
            onFocus: t[27] || (t[27] = (s) => E(l.value)),
            onChange: t[28] || (t[28] = (s) => ue(l.value, s)),
            onClear: t[29] || (t[29] = (s) => ue(l.value, null))
          }, {
            default: T(() => {
              var s;
              return [
                (v(!0), I(ae, null, oe((s = j.value) == null ? void 0 : s[l.value.FIELD], (Se) => (v(), te(ne, {
                  key: Se.VALUE,
                  label: Se.LABEL,
                  value: Se.VALUE,
                  style: { "max-width": "300px" }
                }, null, 8, ["label", "value"]))), 128))
              ];
            }),
            _: 1
          }, 8, ["modelValue", "remote-method", "allow-create"])) : l.value.CONTROLS == "ExSelectModal" ? (v(), te(ve, {
            key: 10,
            ref_key: "DropdownRef",
            ref: _,
            "popup-class-name": "selectmodal",
            "destroy-on-close": "",
            transfer: !0
          }, Et({
            default: T(() => [
              a(G, {
                modelValue: e.formData.DEFAULTVAL,
                "onUpdate:modelValue": t[31] || (t[31] = (s) => e.formData.DEFAULTVAL = s),
                type: "text",
                clearable: "",
                onClear: t[32] || (t[32] = (s) => B()),
                onKeydown: [
                  t[33] || (t[33] = Ge((s) => Ye(R)(!1), ["stop"])),
                  He(w, ["enter"])
                ]
              }, {
                append: T(() => [
                  a(Oe, {
                    icon: Ye(Wt),
                    onClick: t[30] || (t[30] = Ge((s) => se(), ["stop"]))
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            dropdown: T(() => [
              n("div", {
                style: Ne(`width:${U.value.width ? U.value.width : "100%"}`)
              }, [
                a(Z, {
                  config: U.value,
                  modelValue: S.value,
                  "onUpdate:modelValue": t[34] || (t[34] = (s) => S.value = s),
                  onDbClick: t[35] || (t[35] = (s) => W(l.value, s))
                }, null, 8, ["config", "modelValue"])
              ], 4)
            ]),
            _: 2
          }, [
            S.value.length > 0 ? {
              name: "footer",
              fn: T(() => [
                n("div", nl, [
                  n("span", {
                    class: "selectmodal-tools-item",
                    onClick: t[36] || (t[36] = (s) => Ye(R)(!0))
                  }, "更多")
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1536)) : (v(), te(G, {
            key: 11,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[37] || (t[37] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "输入关键字后回车查询",
            onKeyup: He(w, ["enter"])
          }, null, 8, ["modelValue"]))
        ]),
        e.isCondition ? (v(), I("div", al, [
          a(N, {
            transfer: "",
            modelValue: e.formData.QRYSUF,
            "onUpdate:modelValue": t[38] || (t[38] = (s) => e.formData.QRYSUF = s),
            placeholder: "",
            style: { width: "50px" },
            size: c.value
          }, {
            default: T(() => [
              a(m, {
                label: ")",
                value: ")"
              }),
              a(m, {
                label: "))",
                value: "))"
              }),
              a(m, {
                label: ")))",
                value: ")))"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0),
        e.isCondition ? (v(), I("div", ol, [
          a(N, {
            transfer: "",
            modelValue: e.formData.QRYCONT,
            "onUpdate:modelValue": t[39] || (t[39] = (s) => e.formData.QRYCONT = s),
            placeholder: "",
            style: { width: "80px" },
            size: c.value
          }, {
            default: T(() => [
              a(m, {
                label: "并且",
                value: "and"
              }),
              a(m, {
                label: "或者",
                value: "or"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0),
        e.hideBtn ? (v(), I("div", rl, [
          je(n("input", {
            "onUpdate:modelValue": t[40] || (t[40] = (s) => e.formData.SORTCODE = s),
            style: { width: "60px" },
            class: "vxe-input type--text size--mini is--controls is--suffix"
          }, null, 512), [
            [pt, e.formData.SORTCODE]
          ])
        ])) : de("", !0),
        e.hideBtn ? (v(), I("div", sl, [
          a(N, {
            transfer: "",
            modelValue: e.formData.VTYPE,
            "onUpdate:modelValue": t[41] || (t[41] = (s) => e.formData.VTYPE = s),
            placeholder: "",
            style: { width: "100px" },
            size: c.value
          }, {
            default: T(() => [
              a(m, {
                label: "高级查询",
                value: "1"
              }),
              a(m, {
                label: "快捷过滤",
                value: "0"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0)
      ]);
    };
  }
}, Me = /* @__PURE__ */ Te(ul, [["__scopeId", "data-v-db683a03"]]), il = { class: "" }, dl = {
  __name: "filtrationCom",
  props: {
    filterConfig: {
      type: Object,
      default: {}
    },
    filterArr: {
      type: Array,
      default: []
    },
    settingArr: {
      type: Array,
      default: []
    },
    chooseRadioObj: {
      type: Object,
      default: {}
    }
  },
  emits: ["changeFilter", "changeCurrentQueryList", "inputEnter"],
  setup(e, { expose: L, emit: A }) {
    const D = A, u = e;
    d({});
    const c = d([]);
    Fe(() => {
    });
    function h(b) {
      D("openModal", b);
    }
    const f = () => {
      D("inputEnter");
    };
    function l(b) {
      c.value = b;
    }
    const y = (b, Q, w) => {
      D("changeFilter", b, Q, w);
    };
    return ce(() => u.filterArr, (b) => {
      c.value = b.map((Q) => Q.BILLNO ? Q : {
        FIELD: "",
        QUERYTYPE: "",
        DEFAULTVAL: "",
        DEFAULTVAL2: "",
        SORTCODE: "",
        DEFAULTVALArr: ""
      });
    }, { immediate: !0, deep: !0 }), ce(() => c.value, (b) => {
      D("changeCurrentQueryList", b);
    }, { immediate: !0, deep: !0 }), ce(() => u.settingArr, (b) => {
    }, { immediate: !0, deep: !0 }), L({
      updateCurrentQueryList: l
    }), (b, Q) => (v(), I("div", il, [
      (v(!0), I(ae, null, oe(e.filterArr, (w, j) => (v(), I("div", {
        key: j,
        class: "mb10 oneLine-left-alone"
      }, [
        a(Me, {
          filterConfig: e.filterConfig,
          filterVal: w,
          formData: c.value[j],
          "onUpdate:formData": ($) => c.value[j] = $,
          ENABLESTATE: e.chooseRadioObj.ENABLESTATE,
          onChangeFilter: ($) => y($, w, j),
          onInputEnter: f,
          onOpenModal: h,
          currentIndex: j
        }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "ENABLESTATE", "onChangeFilter", "currentIndex"])
      ]))), 128))
    ]));
  }
}, cl = /* @__PURE__ */ Te(dl, [["__scopeId", "data-v-0c15443b"]]), fl = { class: "settingFilter" }, ml = { class: "disflex" }, vl = {
  class: "disflex",
  style: { "min-width": "430px" }
}, Ll = {
  __name: "settingFilter",
  props: {
    filterConfig: {
      type: Object,
      default: {}
    },
    filterArr: {
      type: Array,
      default: []
    }
  },
  emits: "changeCondition",
  setup(e, { expose: L, emit: A }) {
    pe("request");
    const D = A, u = e, c = d([]), h = me(() => u.filterConfig.filterSeceletArr), f = d(null), l = ($) => {
      let _ = h.value.filter((g) => g.BILLNO == $.value);
      D("changeCondition", _[0] || {});
    };
    function y($) {
      D("openModal", $);
    }
    const b = () => {
      f.value = null, D("resetCondition");
    }, Q = ($, _) => {
      D("delFilterArr", _);
    }, w = ($) => {
      c.value = $;
    }, j = ($, _, g) => {
      D("changeFilter", $, _, g);
    };
    return ce(() => u.filterArr, ($) => {
      $.forEach((_, g) => {
        c.value[g] || (c.value[g] = {}), c.value[g].FIELD = $[g].FIELD;
      });
    }, { immediate: !0 }), L({
      updateCurrentQueryList: w
    }), ($, _) => {
      const g = F("Icon"), M = F("el-icon"), p = F("vxe-option"), S = F("vxe-select"), J = F("el-button");
      return v(), I("div", fl, [
        (v(!0), I(ae, null, oe(e.filterArr, (P, U) => (v(), I("div", {
          key: U,
          class: "aloneFilter mb10"
        }, [
          n("div", ml, [
            a(Me, {
              filterConfig: e.filterConfig,
              filterVal: P,
              class: "mr10",
              isTransfer: !1,
              formData: c.value[U],
              "onUpdate:formData": (V) => c.value[U] = V,
              onChangeFilter: (V) => j(V, P, U),
              onOpenModal: y,
              currentIndex: U
            }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "currentIndex"]),
            n("div", null, [
              U != 0 ? (v(), te(M, {
                key: 0,
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (V) => Q(P, U)
              }, {
                default: T(() => [
                  a(g, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : (v(), te(M, {
                key: 1,
                color: "#fff",
                size: 20
              }, {
                default: T(() => [
                  a(g, { icon: "zondicons:minus-solid" })
                ]),
                _: 1
              }))
            ])
          ])
        ]))), 128)),
        n("div", vl, [
          a(S, {
            modelValue: f.value,
            "onUpdate:modelValue": _[0] || (_[0] = (P) => f.value = P),
            transfer: "",
            style: { width: "100px" },
            placeholder: "请输入条件",
            size: "mini",
            onChange: l
          }, {
            default: T(() => [
              (v(!0), I(ae, null, oe(e.filterConfig.filterSeceletArr, (P) => (v(), te(p, {
                key: P.BILLNO,
                label: P.LABEL,
                value: P.BILLNO
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          a(J, {
            type: "primary",
            link: "",
            class: "ml5",
            onClick: b
          }, {
            default: T(() => _[1] || (_[1] = [
              ee(" 重置条件 ")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, El = /* @__PURE__ */ Te(Ll, [["__scopeId", "data-v-8e36678e"]]);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var at;
(function(e) {
  e.pop = "pop", e.push = "push";
})(at || (at = {}));
var ot;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ot || (ot = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var rt;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(rt || (rt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const pl = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Al = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Dl() {
  return pe(pl);
}
function Ol(e) {
  return pe(Al);
}
const Sl = { class: "container" }, Tl = {
  key: 0,
  class: "disflex ml20"
}, yl = { class: "content" }, gl = ["onClick"], Cl = { class: "disflex" }, Vl = {
  key: 1,
  class: "tr"
}, bl = {
  __name: "conditionModule",
  props: {
    filterConfig: {
      type: Object,
      default: {}
    },
    filterArr: {
      type: Array,
      default: []
    },
    choosePlanObj: {
      type: Object,
      default: {}
    },
    menuID: {
      type: Object,
      default: () => {
      }
    },
    hideBtn: {
      type: Boolean,
      default: !1
    },
    queryConfig: {
      type: Array,
      default: []
    }
  },
  emits: ["closeModal"],
  setup(e, { expose: L, emit: A }) {
    const D = pe("request"), { proxy: u } = Ve(), c = A, h = e, f = d([]), l = d([]);
    ce(
      () => h.filterArr,
      (R) => {
        l.value = R, f.value = R.map((i) => i.BILLNO ? i : {
          FIELD: "",
          QUERYTYPE: "",
          DEFAULTVAL: "",
          DEFAULTVAL2: "",
          SORTCODE: "",
          DEFAULTVALArr: "",
          QRYCONT: "",
          QRYPRE: "",
          QRYSUF: ""
        });
      },
      { immediate: !0 }
    );
    const y = d([]), b = d([]), Q = d([]), w = d({}), j = d(!0);
    ce(
      () => h.queryConfig,
      (R) => {
        let i = R.filter((O) => O.ISSHOW == 0);
        y.value = i.filter((O) => O.REVERFIELD == "SYS_ORG_CODE"), y.value.length && (b.value = JSON.parse(y.value[0].VCODE)), Q.value = i.filter((O) => O.REVERFIELD == "" && O.CONTROLS == "ExSelect"), Q.value = Q.value.map((O) => ({
          ...O,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function $(R) {
      w.value[y.value[0].REVERFIELD] = "";
    }
    function _(R) {
      j.value = !1;
    }
    me(() => ({
      ...h.filterArr[0],
      FIELD: "",
      QUERYTYPE: "",
      DEFAULTVAL: "",
      DEFAULTVAL2: "",
      SORTCODE: "",
      DEFAULTVALArr: "",
      QRYCONT: "",
      QRYPRE: "",
      QRYSUF: ""
    }));
    const g = d({}), M = (R, i) => {
      g.value = i;
    }, p = () => {
      l.value.push({}), f.value.push({});
    }, S = (R = null) => {
      (R || (g.value || g.value == 0) && typeof g.value == "number") && (l.value.splice(R || g.value, 1), f.value.splice(R || g.value, 1), g.value = null);
    }, J = () => {
      l.value = [], f.value = [];
    }, P = () => {
      (g.value || g.value == 0) && (l.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, U = () => {
      (g.value || g.value == 0) && (l.value.push(l.value[g.value]), f.value.push(f.value[g.value]));
    }, V = (R, i, O) => {
      l.value[O] = JSON.parse(JSON.stringify(R));
    }, r = () => {
      let R = [];
      R = f.value.map((O, x) => ({
        FIELD: O.FIELD,
        LABEL: O.LABEL,
        QUERYTYPE: O.QUERYTYPE,
        DEFAULTVAL: O.DEFAULTVAL,
        DEFAULTVAL2: O.DEFAULTVAL2,
        SORTCODE: O.SORTCODE,
        DEFAULTVALArr: O.DEFAULTVALArr,
        QRYCONT: O.QRYCONT,
        QRYPRE: O.QRYPRE,
        QRYSUF: O.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const i = {
        BILLNO: h.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: R,
        ...w.value,
        ...h.menuID
      };
      D({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: i,
        encry: !1
      }).then((O) => {
        u.$modal.msgSuccess("保存成功");
        let x = {
          isQuerySearch: !0,
          QUERYS: R,
          DATA: w.value,
          PROGRAMID: h.choosePlanObj.BILLNO
        };
        c("closeModal", x);
      });
    }, B = () => f.value.map((i, O) => ({
      FIELD: i.FIELD,
      LABEL: i.LABEL,
      QUERYTYPE: i.QUERYTYPE,
      DEFAULTVAL: i.DEFAULTVAL,
      DEFAULTVAL2: i.DEFAULTVAL2,
      SORTCODE: i.SORTCODE,
      DEFAULTVALArr: i.DEFAULTVALArr,
      QRYCONT: i.QRYCONT,
      QRYPRE: i.QRYPRE,
      QRYSUF: i.QRYSUF,
      VTYPE: h.hideBtn ? i.VTYPE || 1 : "1"
    })), W = () => {
      c("closeModal");
    };
    return L({ confirmData: B, allDel: J }), (R, i) => {
      const O = F("el-option"), x = F("el-select"), re = F("el-checkbox"), X = F("Icon"), Le = F("el-icon"), fe = F("eos-form"), se = F("el-button");
      return v(), I("div", Sl, [
        y.value.length ? (v(), I("div", Tl, [
          i[3] || (i[3] = n("div", { class: "mr10" }, "可选组织", -1)),
          n("div", null, [
            a(x, {
              modelValue: w.value[y.value[0].REVERFIELD],
              "onUpdate:modelValue": i[0] || (i[0] = (H) => w.value[y.value[0].REVERFIELD] = H),
              style: { width: "300px" },
              onChange: _
            }, {
              default: T(() => [
                (v(!0), I(ae, null, oe(b.value, (H) => (v(), te(O, {
                  key: H.VALUE,
                  label: H.LABEL,
                  value: H.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          a(re, {
            onChange: $,
            class: "ml20",
            modelValue: j.value,
            "onUpdate:modelValue": i[1] || (i[1] = (H) => j.value = H),
            label: "所有组织",
            size: "large"
          }, null, 8, ["modelValue"])
        ])) : de("", !0),
        n("div", { class: "disflex mt-10 mb-10" }, [
          n("div", {
            class: "mr10 btnStyle ml-10",
            onClick: p
          }, "新增行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: S
          }, "删除行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: J
          }, "全部删除"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: P
          }, "插入行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: U
          }, "复制行")
        ]),
        n("div", yl, [
          (v(!0), I(ae, null, oe(l.value, (H, Y) => (v(), I("div", {
            key: Y,
            class: Ce(["oneLIne", g.value == Y ? "active" : ""]),
            onClick: (E) => M(H, Y)
          }, [
            n("div", Cl, [
              a(Me, {
                filterConfig: e.filterConfig,
                filterVal: H,
                formData: f.value[Y],
                "onUpdate:formData": (E) => f.value[Y] = E,
                onChangeFilter: (E) => V(E, H, Y),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              a(Le, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => S(Y)
              }, {
                default: T(() => [
                  a(X, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ], 10, gl))), 128))
        ]),
        a(fe, {
          ref: "FormRef",
          modelValue: w.value,
          "onUpdate:modelValue": i[2] || (i[2] = (H) => w.value = H),
          config: Q.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? de("", !0) : (v(), I("div", Vl, [
          a(se, {
            size: "small",
            onClick: r
          }, {
            default: T(() => i[4] || (i[4] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(se, {
            size: "small",
            onClick: W
          }, {
            default: T(() => i[5] || (i[5] = [
              ee("取消")
            ])),
            _: 1
          })
        ]))
      ]);
    };
  }
}, hl = /* @__PURE__ */ Te(bl, [["__scopeId", "data-v-5f94987e"]]), Rl = { class: "sortModule" }, Ul = { class: "contrHeight" }, Il = { style: { width: "220px" } }, Nl = ["onClick"], Fl = { style: { width: "100%" } }, kl = ["onClick"], Yl = { class: "tr" }, Bl = {
  __name: "sortModule",
  props: {
    MenuID: {
      type: Object,
      default: {}
    },
    choosePlanObj: {
      type: Object,
      default: {}
    }
  },
  emits: ["closeModal"],
  setup(e, { emit: L }) {
    const A = pe("request"), { proxy: D } = Ve(), u = L, c = e, h = d({}), f = d({}), l = d([]), y = (M) => {
      h.value = M;
    }, b = (M) => {
      f.value = M;
    }, Q = () => {
      let M = l.value.map((S) => ({
        FIELD: S.FIELD,
        SORTFLAG: S.SORTFLAG
      }));
      const p = {
        BILLNO: c.choosePlanObj.BILLNO,
        // 方案主键
        VTYPE: c.choosePlanObj.VTYPE,
        FIELDS: M,
        ...c.MenuID
      };
      A({
        url: "/sys/queryprogUser/updateSortFields",
        method: "post",
        data: p,
        encry: !1
      }).then((S) => {
        D.$modal.msgSuccess("保存成功"), u("closeModal");
      });
    }, w = () => {
      u("closeModal");
    }, j = (M) => {
      switch (M) {
        case 1:
          h.value.BILLNO && !l.value.find((B) => B.BILLNO == h.value.BILLNO) && l.value.push(h.value);
          break;
        case 2:
          let p = l.value.findIndex((B) => B.BILLNO === f.value.BILLNO) || null;
          if (p == -1) return;
          l.value.splice(p, 1), f.value = {};
          break;
        case 3:
          l.value = [], f.value = {};
          break;
        case 4:
          let S = l.value.findIndex((B) => B.BILLNO === f.value.BILLNO) || null;
          if (S == -1 || S == 0 || !S) return;
          let J = JSON.parse(JSON.stringify(l.value[S])), P = JSON.parse(JSON.stringify(l.value[S - 1]));
          l.value.splice(S, 1, P), l.value.splice(S - 1, 1, J);
          break;
        case 5:
          let U = l.value.findIndex((B) => B.BILLNO === f.value.BILLNO);
          if (U == l.value.length - 1) return;
          let V = JSON.parse(JSON.stringify(l.value[U])), r = JSON.parse(JSON.stringify(l.value[U + 1]));
          l.value.splice(U, 1, r), l.value.splice(U + 1, 1, V);
          break;
      }
    }, $ = d([]), _ = () => {
      const M = {
        ...c.MenuID,
        PKBILLNO: c.choosePlanObj.BILLNO
      };
      A({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: M,
        encry: !1
      }).then((p) => {
        $.value = p.RESULT, g();
      });
    }, g = () => {
      const M = {
        ...c.MenuID,
        PKBILLNO: c.choosePlanObj.BILLNO,
        BILLNO: c.choosePlanObj.BILLNO
      };
      A({
        url: "/sys/queryprogUser/getSortFieldList",
        method: "post",
        data: M,
        encry: !1
      }).then((p) => {
        l.value = p.RESULT, l.value.forEach((S, J) => {
          let P = $.value.find((U) => U.FIELD == S.FIELD);
          l.value[J].LABEL = P.LABEL, l.value[J].BILLNO = P.BILLNO;
        });
      });
    };
    return ce(() => c.choosePlanObj.BILLNO, (M) => {
      _();
    }, { immediate: !0 }), Fe(() => {
    }), (M, p) => {
      const S = F("el-col"), J = F("el-button"), P = F("el-option"), U = F("el-select"), V = F("el-row");
      return v(), I("div", Rl, [
        a(V, null, {
          default: T(() => [
            a(S, { span: 8 }, {
              default: T(() => [
                n("div", Ul, [
                  n("table", Il, [
                    p[5] || (p[5] = n("thead", null, [
                      n("tr", null, [
                        n("td", null, "字段")
                      ])
                    ], -1)),
                    n("tbody", null, [
                      (v(!0), I(ae, null, oe($.value, (r) => (v(), I("tr", {
                        key: r.BILLNO,
                        class: Ce(r.BILLNO == h.value.BILLNO ? "active" : ""),
                        onClick: (B) => y(r)
                      }, [
                        n("td", null, ge(r.LABEL), 1)
                      ], 10, Nl))), 128))
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            a(S, { span: 4 }, {
              default: T(() => [
                n("div", null, [
                  a(J, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: p[0] || (p[0] = (r) => j(1))
                  }, {
                    default: T(() => p[6] || (p[6] = [
                      ee("加入")
                    ])),
                    _: 1
                  })
                ]),
                n("div", null, [
                  a(J, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: p[1] || (p[1] = (r) => j(2))
                  }, {
                    default: T(() => p[7] || (p[7] = [
                      ee("删除")
                    ])),
                    _: 1
                  })
                ]),
                n("div", null, [
                  a(J, {
                    type: "primary",
                    class: "mb-30",
                    size: "small",
                    onClick: p[2] || (p[2] = (r) => j(3))
                  }, {
                    default: T(() => p[8] || (p[8] = [
                      ee("全删")
                    ])),
                    _: 1
                  })
                ]),
                n("div", null, [
                  a(J, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: p[3] || (p[3] = (r) => j(4))
                  }, {
                    default: T(() => p[9] || (p[9] = [
                      ee("上移")
                    ])),
                    _: 1
                  })
                ]),
                n("div", null, [
                  a(J, {
                    type: "primary",
                    size: "small",
                    onClick: p[4] || (p[4] = (r) => j(5))
                  }, {
                    default: T(() => p[10] || (p[10] = [
                      ee("下移")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            a(S, { span: 12 }, {
              default: T(() => [
                n("table", Fl, [
                  p[11] || (p[11] = n("thead", null, [
                    n("tr", null, [
                      n("td", { style: { width: "50px" } }, "序号"),
                      n("td", null, "字段"),
                      n("td", { style: { width: "100px" } }, "排序方式")
                    ])
                  ], -1)),
                  n("tbody", null, [
                    (v(!0), I(ae, null, oe(l.value, (r, B) => (v(), I("tr", {
                      key: r.BILLNO,
                      class: Ce(r.BILLNO == f.value.BILLNO ? "active" : ""),
                      onClick: (W) => b(r)
                    }, [
                      n("td", null, ge(B + 1), 1),
                      n("td", null, ge(r.LABEL), 1),
                      n("td", null, [
                        a(U, {
                          modelValue: r.SORTFLAG,
                          "onUpdate:modelValue": (W) => r.SORTFLAG = W,
                          size: "small",
                          style: { width: "100%" }
                        }, {
                          default: T(() => [
                            a(P, {
                              label: "升序",
                              value: "AES"
                            }),
                            a(P, {
                              label: "降序",
                              value: "DESC"
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ], 10, kl))), 128))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        n("div", Yl, [
          a(J, {
            onClick: Q,
            size: "small"
          }, {
            default: T(() => p[12] || (p[12] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(J, {
            onClick: w,
            size: "small"
          }, {
            default: T(() => p[13] || (p[13] = [
              ee("取消")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, xl = /* @__PURE__ */ Te(Bl, [["__scopeId", "data-v-69dccb16"]]), wl = { class: "showHiddenModule" }, Pl = { class: "contrHeight" }, Ml = { style: { width: "100%" } }, Ql = { class: "disflex" }, $l = { style: { border: "none", "background-color": "#ffffe3" } }, jl = { style: { padding: "0" } }, zl = ["onClick"], _l = { style: { width: "50px" } }, Jl = { style: { width: "70px", "text-align": "center" } }, ql = { style: { width: "60px" } }, Gl = { class: "mb-20" }, Hl = { class: "tr" }, Wl = {
  __name: "showHiddenModule",
  props: {
    MenuID: {
      type: Object,
      default: {}
    },
    choosePlanObj: {
      type: Object,
      default: {}
    }
  },
  emits: ["closeModal"],
  setup(e, { emit: L }) {
    const A = pe("request"), { proxy: D } = Ve(), u = L, c = e, h = d(!1), f = (V) => {
      M.value.forEach((r, B) => {
        M.value[B].IS_SHOW = V;
      });
    }, l = (V, r) => {
      let B = p.value.findIndex((W) => W.BILLNO == r.BILLNO);
      p.value[B].IS_SHOW = V;
    }, y = (V, r) => {
      let B = p.value.findIndex((W) => W.BILLNO == r.BILLNO);
      p.value[B].WIDTH = V;
    }, b = () => {
      let V = p.value;
      V.forEach((B, W) => {
        V[W].SORTCODE = String(B.SORTCODE);
      });
      const r = {
        PKBILLNO: c.choosePlanObj.BILLNO,
        // 方案主键
        VTYPE: c.choosePlanObj.VTYPE,
        DEALTYPE: "1",
        // 1-隐藏保存，2-排序保存
        FIELDS: V,
        ...c.MenuID
      };
      A({
        url: "sys/queryprogUserDtl/updateFields",
        method: "post",
        data: r,
        encry: !1
      }).then((B) => {
        D.$modal.msgSuccess("保存成功"), u("closeModal");
      });
    }, Q = () => {
      u("closeModal");
    }, w = d({}), j = (V) => {
      w.value = V, $.value = null;
    }, $ = d(null), _ = (V) => {
      if (w.value.BILLNO)
        switch (V) {
          case 1:
            if ($.value >= M.value.length || !w.value.BILLNO) return;
            let r = M.value.findIndex((x) => x.BILLNO == w.value.BILLNO), B = JSON.parse(JSON.stringify(p.value[r].SORTCODE));
            p.value[r].SORTCODE = $.value, p.value[$.value - 1].SORTCODE = B, g();
            break;
          case 2:
            let W = S.value.filter((x) => x.BILLNO == w.value.BILLNO), R = M.value.findIndex((x) => x.BILLNO == w.value.BILLNO);
            M.value[R] = JSON.parse(JSON.stringify(W[0]));
            break;
          case 3:
            break;
          case 4:
            let i = p.value.findIndex((x) => x.BILLNO === w.value.BILLNO) || null;
            if (i == -1 || i == 0 || !i) return;
            p.value[i].SORTCODE = p.value[i].SORTCODE - 1, p.value[i - 1].SORTCODE = p.value[i - 1].SORTCODE + 1, g();
            break;
          case 5:
            let O = p.value.findIndex((x) => x.BILLNO === w.value.BILLNO);
            if (O == p.value.length - 1) return;
            p.value[O].SORTCODE = p.value[O].SORTCODE + 1, p.value[O + 1].SORTCODE = p.value[O + 1].SORTCODE - 1, g();
            break;
        }
    };
    function g() {
      p.value.sort((V, r) => V.SORTCODE - r.SORTCODE), U(P.value);
    }
    const M = d([]), p = d([]), S = d([]), J = () => {
      const V = {
        ...c.MenuID,
        PKBILLNO: c.choosePlanObj.BILLNO
      };
      A({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: V,
        encry: !1
      }).then((r) => {
        let B = r.RESULT;
        B.forEach((W, R) => {
          B[R].SORTCODE = R + 1;
        }), p.value = JSON.parse(JSON.stringify(B)), M.value = JSON.parse(JSON.stringify(B)), S.value = JSON.parse(JSON.stringify(B));
      });
    }, P = d(""), U = (V) => {
      if (V) {
        let r = p.value.filter((B) => B.LABEL.includes(V));
        M.value = JSON.parse(JSON.stringify(r)), S.value = JSON.parse(JSON.stringify(r));
      } else
        M.value = JSON.parse(JSON.stringify(p.value)), S.value = JSON.parse(JSON.stringify(p.value));
    };
    return ce(() => c.choosePlanObj.BILLNO, (V) => {
      J();
    }, { immediate: !0 }), Fe(() => {
    }), (V, r) => {
      const B = F("el-checkbox"), W = F("el-input"), R = F("el-col"), i = F("el-button"), O = F("el-row");
      return v(), I("div", wl, [
        a(O, { gutter: "20" }, {
          default: T(() => [
            a(R, { span: 20 }, {
              default: T(() => [
                n("div", Pl, [
                  n("table", Ml, [
                    n("thead", null, [
                      n("tr", null, [
                        r[9] || (r[9] = n("td", null, [
                          ee(" 序号 "),
                          n("span", { class: "line" })
                        ], -1)),
                        r[10] || (r[10] = n("td", null, [
                          ee(" 字段 "),
                          n("div", { class: "line" })
                        ], -1)),
                        n("td", null, [
                          n("div", Ql, [
                            a(B, {
                              modelValue: h.value,
                              "onUpdate:modelValue": r[0] || (r[0] = (x) => h.value = x),
                              "true-value": "1",
                              "false-value": "0",
                              onChange: f
                            }, null, 8, ["modelValue"]),
                            r[7] || (r[7] = n("span", { class: "ml-5" }, "显示", -1)),
                            r[8] || (r[8] = n("span", { class: "line" }, null, -1))
                          ])
                        ]),
                        r[11] || (r[11] = n("td", null, [
                          ee(" 宽度 "),
                          n("div", { class: "line" })
                        ], -1))
                      ])
                    ]),
                    n("tbody", null, [
                      n("tr", $l, [
                        r[12] || (r[12] = n("td", { style: { padding: "0" } }, null, -1)),
                        n("td", jl, [
                          a(W, {
                            modelValue: P.value,
                            "onUpdate:modelValue": r[1] || (r[1] = (x) => P.value = x),
                            style: { width: "100%" },
                            placeholder: "过滤条件",
                            onInput: U
                          }, null, 8, ["modelValue"])
                        ]),
                        r[13] || (r[13] = n("td", { style: { padding: "0" } }, null, -1)),
                        r[14] || (r[14] = n("td", { style: { padding: "0" } }, null, -1))
                      ]),
                      (v(!0), I(ae, null, oe(M.value, (x, re) => (v(), I("tr", {
                        key: x.BILLNO,
                        class: Ce(x.BILLNO == w.value.BILLNO ? "active" : ""),
                        onClick: (X) => j(x)
                      }, [
                        n("td", _l, ge(x.SORTCODE), 1),
                        n("td", null, ge(x.LABEL), 1),
                        n("td", Jl, [
                          a(B, {
                            modelValue: x.IS_SHOW,
                            "onUpdate:modelValue": (X) => x.IS_SHOW = X,
                            "true-value": "1",
                            "false-value": "0",
                            onChange: (X) => l(X, x)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ]),
                        n("td", ql, [
                          a(W, {
                            modelValue: x.WIDTH,
                            "onUpdate:modelValue": (X) => x.WIDTH = X,
                            type: "number",
                            size: "small",
                            style: { width: "60px" },
                            onInput: (X) => y(X, x)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                        ])
                      ], 10, zl))), 128))
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            a(R, { span: 4 }, {
              default: T(() => [
                n("div", null, [
                  a(i, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: r[2] || (r[2] = (x) => _(4))
                  }, {
                    default: T(() => r[15] || (r[15] = [
                      ee("上 移")
                    ])),
                    _: 1
                  })
                ]),
                n("div", null, [
                  a(i, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: r[3] || (r[3] = (x) => _(5))
                  }, {
                    default: T(() => r[16] || (r[16] = [
                      ee("下 移")
                    ])),
                    _: 1
                  })
                ]),
                r[18] || (r[18] = n("div", { class: "mb-10" }, "调至（行）", -1)),
                n("div", Gl, [
                  a(W, {
                    type: "number",
                    modelValue: $.value,
                    "onUpdate:modelValue": r[4] || (r[4] = (x) => $.value = x),
                    size: "small",
                    onBlur: r[5] || (r[5] = (x) => _(1)),
                    style: { width: "50px" }
                  }, null, 8, ["modelValue"])
                ]),
                n("div", null, [
                  a(i, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: r[6] || (r[6] = (x) => _(2))
                  }, {
                    default: T(() => r[17] || (r[17] = [
                      ee("默认值")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        n("div", Hl, [
          a(i, {
            onClick: b,
            size: "small"
          }, {
            default: T(() => r[19] || (r[19] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(i, {
            onClick: Q,
            size: "small"
          }, {
            default: T(() => r[20] || (r[20] = [
              ee("取消")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, Kl = /* @__PURE__ */ Te(Wl, [["__scopeId", "data-v-63dd4c1d"]]), Xl = { class: "eos-tabs flex" }, Zl = ["onClick"], en = {
  __name: "index",
  props: {
    // 父组件传过来的值
    tabsList: {
      type: Array,
      default: []
    }
  },
  emits: ["change"],
  setup(e, { emit: L }) {
    const A = e, D = L, u = d(A.tabsList[0].BILLNO), c = (h, f) => {
      u.value = h.BILLNO, D("change", { data: h, index: f });
    };
    return (h, f) => (v(), I("div", Xl, [
      (v(!0), I(ae, null, oe(e.tabsList, (l, y) => (v(), I("div", {
        class: Ce(["eos-tabs-item mr-4", { active: u.value === l.BILLNO }]),
        key: y,
        onClick: (b) => c(l, y)
      }, ge(l.VNAME || l.pageTitle), 11, Zl))), 128))
    ]));
  }
}, tn = /* @__PURE__ */ Te(en, [["__scopeId", "data-v-0a1c5dc2"]]), ln = { class: "container" }, nn = { class: "flex content" }, an = { class: "content-left-btn flex" }, on = { class: "content-left-main" }, rn = ["onClick"], sn = { class: "splitbar-wrap" }, un = { class: "content-right" }, dn = { class: "flex" }, cn = { key: 0 }, fn = { key: 1 }, mn = { key: 2 }, vn = { class: "saveAsAlone" }, Ln = { class: "flex flex-items-center mt-10 grid-justify-between" }, En = { class: "mb-8" }, pn = { class: "mb-40" }, An = { class: "saveAsAlone" }, Dn = { class: "flex flex-items-center mt-10 grid-justify-between" }, On = { class: "mb-8" }, Sn = { class: "mb-40" }, Tn = { class: "disflex" }, yn = {
  __name: "allocationPlan",
  props: {
    showModal: {
      type: Boolean,
      default: !1
    },
    leftList: {
      type: Array,
      default: []
    },
    filterConfig: {
      type: Object,
      default: {}
    },
    menuID: {
      type: Object,
      default: () => {
      }
    },
    showSaveBtn: {
      type: Boolean,
      default: !0
    },
    queryConfig: {
      type: Array,
      default: []
    }
  },
  emits: ["update:formData", "updateLeftList"],
  setup(e, { expose: L, emit: A }) {
    const D = pe("request"), u = A, { proxy: c } = Ve(), h = d([
      {
        BILLNO: 0,
        VNAME: "条件"
      },
      // {
      //     BILLNO: 1,
      //     VNAME: '高级',
      // },
      {
        BILLNO: 2,
        VNAME: "排序"
      },
      {
        BILLNO: 3,
        VNAME: "显示隐藏列"
      }
      // '条件', '高级', '排序', '显示隐藏列'
    ]);
    Dl(), Ol();
    const f = d("1"), l = e, y = d("all"), b = (Y) => {
      y.value == "all" ? y.value = Y : y.value = "all";
    }, Q = d(!1), w = d({});
    function j(Y) {
    }
    function $(Y) {
    }
    function _(Y) {
    }
    const g = (Y) => {
      S.value = {}, u("closeModal", Y);
    }, M = () => {
    }, p = (Y) => {
      X.value = JSON.parse(JSON.stringify(S.value)), fe();
    }, S = d({}), J = d([]), P = (Y) => {
      S.value = Y;
      const E = {
        PKBILLNO: Y.BILLNO,
        ...l.menuID,
        VTYPE: "1"
      };
      D({
        url: "sys/queryprogUserDtl/getSubList",
        method: "post",
        data: E,
        encry: !1
      }).then((q) => {
        J.value = q.RESULT;
      });
    }, U = me(() => l.showModal), V = d(!1), r = d("条件"), B = (Y) => {
      r.value = Y.data.VNAME;
    }, W = () => {
      if (!S.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (S.value.VTYPE == "0") return c.$modal.msgError("系统方案不允许修改!");
      X.value = JSON.parse(JSON.stringify(S.value));
      let Y = [];
      Y = R.value.map((q, ue) => ({
        FIELD: q.FIELD,
        QUERYTYPE: q.QUERYTYPE,
        DEFAULTVAL: q.DEFAULTVAL,
        DEFAULTVAL2: q.DEFAULTVAL2,
        SORTCODE: q.SORTCODE,
        DEFAULTVALArr: q.DEFAULTVALArr,
        QRYCONT: q.QRYCONT,
        QRYPRE: q.QRYPRE,
        QRYSUF: q.QRYSUF,
        SORTCODE: ue,
        // VTYPE: '0',
        VTYPE: f.value
      }));
      const E = {
        // VNAME: saveAsForm.value.VNAME,
        // VTYPE: 1,
        // SORTCODE: null,
        // SORTINFO: null,
        // GROUPINFO: null,
        // ISDEFAULT: 1,
        ...X.value,
        ...l.menuID,
        VTYPE: f.value,
        // QUERYS: addConditionList.value,  // 如果外面没有方案，那么保存时候会走新增方案，把外层方案传过来
        QUERYS: Y
      };
      X.value.BILLNO && D({
        url: "sys/queryprogUser/update",
        method: "post",
        data: E,
        encry: !1
      }).then((q) => {
        c.$message({
          message: q.MESSAGE,
          type: "success"
        }), u("updateLeftList");
      });
    }, R = d([]), i = (Y = []) => {
      Y.length && (R.value = Y), V.value = !0;
    }, O = d(null), x = () => {
      O.value.validate((Y, E) => {
        Y && fe();
      });
    }, re = () => {
      V.value = !1;
    }, X = d({}), Le = d({
      VNAME: [
        { required: !0, message: "请输入方案名称", trigger: "blur" }
      ]
    }), fe = () => {
      let Y = [];
      Y = R.value.map((q, ue) => ({
        FIELD: q.FIELD,
        QUERYTYPE: q.QUERYTYPE,
        DEFAULTVAL: q.DEFAULTVAL,
        DEFAULTVAL2: q.DEFAULTVAL2,
        SORTCODE: q.SORTCODE,
        DEFAULTVALArr: q.DEFAULTVALArr,
        QRYCONT: q.QRYCONT,
        QRYPRE: q.QRYPRE,
        QRYSUF: q.QRYSUF,
        SORTCODE: ue,
        // VTYPE: '0',
        VTYPE: f.value
      }));
      const E = {
        // VNAME: saveAsForm.value.VNAME,
        // VTYPE: 1,
        // SORTCODE: null,
        // SORTINFO: null,
        // GROUPINFO: null,
        // ISDEFAULT: 1,
        ...X.value,
        ...l.menuID,
        // VTYPE: VTYPE.value,
        VTYPE: S.value.VTYPE,
        // QUERYS: addConditionList.value,  // 如果外面没有方案，那么保存时候会走新增方案，把外层方案传过来
        QUERYS: Y
      };
      X.value.BILLNO ? D({
        url: "sys/queryprogUser/update",
        method: "post",
        data: E,
        encry: !1
      }).then((q) => {
        V.value = !1, c.$message({
          message: q.MESSAGE,
          type: "success"
        }), u("updateLeftList");
      }) : D({
        url: "sys/queryprogUser/add",
        method: "post",
        data: E,
        // encry: true
        encry: !1
      }).then((q) => {
        V.value = !1, c.$message({
          message: q.MESSAGE,
          type: "success"
        }), u("updateLeftList");
      });
    }, se = () => {
      if (!S.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (S.value.VTYPE == "0") return c.$modal.msgError("系统方案不允许修改!");
      X.value = JSON.parse(JSON.stringify(S.value)), V.value = !0;
    }, H = () => {
      if (!S.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (S.value.VTYPE == "0") return c.$modal.msgError("默认方案不支持删除!");
      const Y = {
        data: [S.value.BILLNO],
        ...l.menuID
      };
      D({
        url: "sys/queryprogUser/deleteBatchIds",
        method: "post",
        data: Y,
        encry: !1
      }).then((E) => {
        u("updateLeftList");
      });
    };
    return L({
      showSaveAs: i
    }), (Y, E) => {
      const q = F("el-popconfirm"), ue = F("el-checkbox"), be = F("CaretLeft"), Ae = F("el-icon"), Ue = F("CaretRight"), ye = F("vxe-modal"), ie = F("el-input"), Ee = F("el-form-item"), De = F("el-form"), C = F("el-button"), k = F("el-radio"), o = F("el-radio-group");
      return v(), I("div", ln, [
        a(ye, {
          "destroy-on-close": "",
          modelValue: U.value,
          "onUpdate:modelValue": E[3] || (E[3] = (t) => U.value = t),
          id: "formModal",
          width: 1070,
          height: 600,
          "min-width": "1070px",
          "min-height": "600px",
          resize: "",
          transfer: "",
          "show-zoom": "",
          onClose: g
        }, {
          title: T(() => E[13] || (E[13] = [
            n("span", { class: "modal-title" }, " 列表过滤 ", -1)
          ])),
          default: T(() => [
            n("div", nn, [
              je(n("div", {
                class: "content-left",
                style: Ne({ width: y.value == "left" ? "98%" : "auto" })
              }, [
                n("div", an, [
                  n("div", {
                    class: "ml10 btnStyle",
                    onClick: W
                  }, "保存"),
                  e.showSaveBtn ? (v(), I("div", {
                    key: 0,
                    class: "ml10 btnStyle",
                    onClick: i
                  }, "另存")) : de("", !0),
                  n("div", {
                    class: "ml10 btnStyle",
                    onClick: se
                  }, "修改"),
                  a(q, {
                    title: "确定要删除吗?",
                    onConfirm: H
                  }, {
                    reference: T(() => E[14] || (E[14] = [
                      n("div", { class: "ml10 btnStyle" }, "删除", -1)
                    ])),
                    _: 1
                  })
                ]),
                n("div", on, [
                  (v(!0), I(ae, null, oe(e.leftList, (t, m) => (v(), I("div", {
                    key: m,
                    class: Ce(["chooseLeftClass", S.value.BILLNO == t.BILLNO ? "active" : ""]),
                    onClick: (N) => P(t)
                  }, ge(t.VNAME), 11, rn))), 128))
                ]),
                a(ue, {
                  modelValue: S.value.ISDEFAULT,
                  "onUpdate:modelValue": E[0] || (E[0] = (t) => S.value.ISDEFAULT = t),
                  "true-value": "1",
                  class: "ml-10 mr-10",
                  label: "下次以此方案自动进入",
                  size: "large",
                  onChange: p
                }, null, 8, ["modelValue"])
              ], 4), [
                [We, y.value == "all" || y.value == "left"]
              ]),
              n("div", sn, [
                y.value == "all" || y.value == "left" ? (v(), I("div", {
                  key: 0,
                  class: "btn-icon left",
                  onClick: E[1] || (E[1] = (t) => b("right"))
                }, [
                  a(Ae, { size: 18 }, {
                    default: T(() => [
                      a(be)
                    ]),
                    _: 1
                  })
                ])) : de("", !0),
                y.value == "all" || y.value == "right" ? (v(), I("div", {
                  key: 1,
                  class: "btn-icon right",
                  onClick: E[2] || (E[2] = (t) => b("left"))
                }, [
                  a(Ae, { size: 18 }, {
                    default: T(() => [
                      a(Ue)
                    ]),
                    _: 1
                  })
                ])) : de("", !0)
              ]),
              je(n("div", un, [
                n("div", dn, [
                  a(tn, {
                    tabsList: h.value,
                    onChange: B
                  }, null, 8, ["tabsList"])
                ]),
                r.value == "条件" && S.value.BILLNO ? (v(), I("div", cn, [
                  a(hl, {
                    filterConfig: e.filterConfig,
                    filterArr: J.value,
                    choosePlanObj: S.value,
                    onCloseModal: g,
                    menuID: e.menuID,
                    queryConfig: e.queryConfig
                  }, null, 8, ["filterConfig", "filterArr", "choosePlanObj", "menuID", "queryConfig"])
                ])) : r.value == "排序" && S.value.BILLNO ? (v(), I("div", fn, [
                  a(xl, {
                    MenuID: e.menuID,
                    choosePlanObj: S.value,
                    onCloseModal: g
                  }, null, 8, ["MenuID", "choosePlanObj"])
                ])) : r.value == "显示隐藏列" && S.value.BILLNO ? (v(), I("div", mn, [
                  a(Kl, {
                    MenuID: e.menuID,
                    choosePlanObj: S.value,
                    onCloseModal: g
                  }, null, 8, ["MenuID", "choosePlanObj"])
                ])) : de("", !0)
              ], 512), [
                [We, y.value == "all" || y.value == "right"]
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        a(ye, {
          "destroy-on-close": "",
          modelValue: V.value,
          "onUpdate:modelValue": E[9] || (E[9] = (t) => V.value = t),
          id: "formModal",
          resize: "",
          storage: "",
          transfer: "",
          "show-zoom": "",
          onClose: M
        }, {
          title: T(() => E[15] || (E[15] = [
            n("span", { class: "modal-title" }, " 过滤方案另存 ", -1)
          ])),
          default: T(() => [
            n("div", vn, [
              n("div", Ln, [
                a(De, {
                  ref_key: "ruleFormRef",
                  ref: O,
                  style: { "max-width": "600px" },
                  model: X.value,
                  rules: Le.value,
                  "label-width": "auto",
                  class: "demo-ruleForm",
                  size: "small",
                  "status-icon": ""
                }, {
                  default: T(() => [
                    a(Ee, {
                      label: "方案名称",
                      prop: "VNAME"
                    }, {
                      default: T(() => [
                        a(ie, {
                          modelValue: X.value.VNAME,
                          "onUpdate:modelValue": E[4] || (E[4] = (t) => X.value.VNAME = t),
                          placeholder: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"]),
                n("div", null, [
                  n("div", En, [
                    a(C, {
                      size: "small",
                      onClick: x
                    }, {
                      default: T(() => E[16] || (E[16] = [
                        ee("确定")
                      ])),
                      _: 1
                    })
                  ]),
                  n("div", null, [
                    a(C, {
                      size: "small",
                      onClick: re
                    }, {
                      default: T(() => E[17] || (E[17] = [
                        ee("取消")
                      ])),
                      _: 1
                    })
                  ])
                ])
              ]),
              n("div", pn, [
                E[21] || (E[21] = n("div", { class: "flex mb-10" }, [
                  n("div", { class: "sharedSettings" }, "共享设置"),
                  n("div", { class: "rightBorder" })
                ], -1)),
                a(ue, {
                  modelValue: Y.checked1,
                  "onUpdate:modelValue": E[5] || (E[5] = (t) => Y.checked1 = t),
                  label: "共享给他人",
                  size: "large"
                }, null, 8, ["modelValue"]),
                a(ue, {
                  modelValue: f.value,
                  "onUpdate:modelValue": E[6] || (E[6] = (t) => f.value = t),
                  "true-value": "0",
                  "false-value": "1",
                  label: "系统预设",
                  size: "large"
                }, null, 8, ["modelValue"]),
                a(o, {
                  modelValue: Y.radio2,
                  "onUpdate:modelValue": E[8] || (E[8] = (t) => Y.radio2 = t),
                  class: "ml-4"
                }, {
                  default: T(() => [
                    a(k, { value: "1" }, {
                      default: T(() => E[18] || (E[18] = [
                        ee("共享所有用户")
                      ])),
                      _: 1
                    }),
                    a(k, { value: "2" }, {
                      default: T(() => [
                        E[19] || (E[19] = n("span", null, "共享指定用户", -1)),
                        E[20] || (E[20] = n("span", { class: "ml-30 mr-5" }, "用户", -1)),
                        a(ie, {
                          style: { width: "100px" },
                          modelValue: Y.input1,
                          "onUpdate:modelValue": E[7] || (E[7] = (t) => Y.input1 = t),
                          placeholder: "",
                          size: "small"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        a(ye, {
          "destroy-on-close": "",
          modelValue: Q.value,
          "onUpdate:modelValue": E[12] || (E[12] = (t) => Q.value = t),
          id: "formModal",
          resize: "",
          storage: "",
          transfer: "",
          "show-zoom": "",
          onClose: _
        }, {
          title: T(() => E[22] || (E[22] = [
            n("span", { class: "modal-title" }, " 过滤方案复制 ", -1)
          ])),
          default: T(() => [
            n("div", An, [
              n("div", Dn, [
                a(De, {
                  ref_key: "ruleFormRef",
                  ref: O,
                  style: { "max-width": "600px" },
                  model: X.value,
                  rules: Le.value,
                  "label-width": "auto",
                  class: "demo-ruleForm",
                  size: "small",
                  "status-icon": ""
                }, {
                  default: T(() => [
                    a(Ee, {
                      label: "方案名称",
                      prop: "VNAME"
                    }, {
                      default: T(() => [
                        a(ie, {
                          modelValue: w.value.VNAME,
                          "onUpdate:modelValue": E[10] || (E[10] = (t) => w.value.VNAME = t),
                          placeholder: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"]),
                n("div", null, [
                  n("div", On, [
                    a(C, {
                      size: "small",
                      onClick: j
                    }, {
                      default: T(() => E[23] || (E[23] = [
                        ee("确定")
                      ])),
                      _: 1
                    })
                  ]),
                  n("div", null, [
                    a(C, {
                      size: "small",
                      onClick: $
                    }, {
                      default: T(() => E[24] || (E[24] = [
                        ee("取消")
                      ])),
                      _: 1
                    })
                  ])
                ])
              ]),
              n("div", Sn, [
                E[26] || (E[26] = n("div", { class: "flex mb-10" }, [
                  n("div", { class: "sharedSettings" }, "设置"),
                  n("div", { class: "rightBorder" })
                ], -1)),
                n("div", Tn, [
                  E[25] || (E[25] = n("div", { class: "mr10" }, "指定用户", -1)),
                  a(ie, {
                    style: { width: "180px" },
                    modelValue: w.value.VNAME,
                    "onUpdate:modelValue": E[11] || (E[11] = (t) => w.value.VNAME = t),
                    placeholder: ""
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}, gn = /* @__PURE__ */ Te(yn, [["__scopeId", "data-v-2b6d0325"]]), Cn = ["onClick"], Vn = { class: "advancedQuery-alone" }, bn = { class: "oneLine" }, hn = { class: "advancedQuery-rightBtn" }, Rn = { style: { border: "1px solid #ccc" } }, Un = {
  class: "tr",
  style: { padding: "0 10px 10px 0" }
}, In = {
  __name: "index",
  props: {
    queryConfig: {
      type: Array,
      default: []
    },
    menuID: {
      type: Object,
      default: () => {
      }
    },
    showSaveBtn: {
      type: Boolean,
      default: !0
    },
    sonEosFilterObj: {
      type: Object,
      default: () => {
      }
    },
    heightType: {
      type: Number,
      default: 1
    }
  },
  emits: ["updateHeight", "handleCustomPlan", "reloadTableData", "openModal"],
  setup(e, { expose: L, emit: A }) {
    const D = pe("request"), u = pe("resolution");
    pe("storeModules");
    const { proxy: c } = Ve(), h = me(() => u.value.AdcPaddingTop), f = me(() => u.value.AdcBottom), l = d(!1), y = A, b = e, Q = d({});
    function w(C) {
      Q.value = C, y("openModal", C);
    }
    const j = d({});
    function $(C) {
      j.value = C, y("openSettingModal", C);
    }
    const _ = d(!1), g = me(() => {
      let k = (document.documentElement.clientWidth - 40 - 61 - 156) / 386;
      return 386 * Math.floor(k);
    }), M = () => {
      _.value = !0;
    }, p = (C) => {
      _.value = !1, C != null && C.isQuerySearch && y("handleCustomPlan", {
        type: "1",
        PROGRAMID: C.PROGRAMID,
        QUERYS: C.QUERYS,
        DATA: C.DATA
      });
    }, S = d([]), J = d(1), P = d([]), U = d([]), V = d(null), r = d({}), B = d([]), W = d(null), R = (C, k, o = !1) => {
      O.value.filterSeceletArr = [], V.value = C == null ? void 0 : C.BILLNO, r.value = C;
      let t = {
        ...b.menuID,
        PKBILLNO: C == null ? void 0 : C.BILLNO,
        VTYPE: "0"
      };
      D({
        url: "/sys/queryprogUserDtl/getSubList",
        method: "post",
        data: t,
        encry: !1
      }).then((m) => {
        P.value = m.RESULT, S.value = JSON.parse(JSON.stringify(m.RESULT)), fe.value = JSON.parse(JSON.stringify(m.RESULT)), W.value && W.value.updateCurrentQueryList(m.RESULT), O.value.filterSeceletArr.length == 0 && (O.value.filterSeceletArr = JSON.parse(JSON.stringify(P.value)));
      }), k == 1 && y("handleCustomPlan", {
        type: "1",
        PROGRAMID: V.value
      });
    };
    function i() {
      let C = S.value.map((k) => ({
        FIELD: k.FIELD,
        QUERYTYPE: k.QUERYTYPE,
        DEFAULTVAL: k.DEFAULTVAL,
        DEFAULTVAL2: k.DEFAULTVAL2,
        SORTCODE: k.SORTCODE,
        DEFAULTVALArr: k.DEFAULTVALArr,
        QRYCONT: k.QRYCONT,
        QRYPRE: k.QRYPRE,
        QRYSUF: k.QRYSUF
      }));
      y("handleCustomPlan", {
        type: "2",
        PROGRAMID: V.value,
        QUERYS: C
      });
    }
    const O = d({
      filterSeceletArr: [],
      filterSeceletArr1: []
    });
    d(null), d(!1);
    const x = () => {
      re.value.hidePanel();
    }, re = d(null), X = () => {
      re.value.showPanel();
    }, Le = (C) => {
      J.value = 1, S.value = JSON.parse(JSON.stringify(C));
    }, fe = d([]), se = d(null), H = (C) => {
      J.value = 2, fe.value = JSON.parse(JSON.stringify(C)), se.value && se.value.updateCurrentQueryList(C);
    }, Y = d(null), E = () => {
      B.value && r.value.VTYPE == 1 ? ue() : Y.value.showSaveAs(S.value);
    }, q = () => {
      const C = {
        ...b.menuID,
        PROGRAMID: V.value
      };
      D({
        url: "/sys/component/clearQryCache",
        method: "post",
        data: C,
        encry: !1
      }).then((k) => {
        R(r.value, 1, !0);
      });
    }, ue = () => {
      let C = [];
      C = S.value.map((o, t) => ({
        FIELD: o.FIELD,
        LABEL: o.LABEL,
        QUERYTYPE: o.QUERYTYPE,
        DEFAULTVAL: o.DEFAULTVAL,
        DEFAULTVAL2: o.DEFAULTVAL2,
        SORTCODE: o.SORTCODE,
        DEFAULTVALArr: o.DEFAULTVALArr,
        QRYCONT: o.QRYCONT,
        QRYPRE: o.QRYPRE,
        QRYSUF: o.QRYSUF,
        SORTCODE: t,
        VTYPE: "0"
      }));
      const k = {
        BILLNO: V.value,
        // 方案主键
        // VTYPE:0,
        QUERYS: C,
        ...b.menuID
      };
      D({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: k,
        encry: !1
      }).then((o) => {
        c.$modal.msgSuccess("保存成功");
      });
    }, be = () => {
      D({
        url: "sys/queryprogUser/getList",
        method: "post",
        data: b.menuID,
        encry: !1
      }).then((C) => {
        if (B.value = C.RESULT, P.value = [], S.value = [], fe.value = [], se.value && se.value.updateCurrentQueryList([]), B.value.length) {
          let k = B.value.filter((o) => o.ISDEFAULT == 1);
          V.value || (V.value = k.length ? k[0].BILLNO : B.value[0].BILLNO, R(k.length ? k[0] : B.value[0], 0));
        }
      });
    }, Ae = d(b.heightType == 1 ? "34px" : b.heightType == 2 ? "68px" : "34px"), Ue = () => {
      Ae.value = Ae.value == "auto" ? b.heightType == 1 ? "34px" : b.heightType == 2 ? "68px" : "34px" : "auto", y("updateHeight");
    }, ye = (C, k, o) => {
      P.value[o] = JSON.parse(JSON.stringify(C));
    }, ie = (C) => {
      P.value.push(C), P.value = JSON.parse(JSON.stringify(P.value));
    }, Ee = () => {
      P.value = JSON.parse(JSON.stringify(U.value)), re.value.hidePanel();
    }, De = (C) => {
      P.value.splice(C, 1), y("updateHeight", C);
    };
    return ce(
      () => b.menuID.PAGEID,
      (C) => {
        V.value = null, O.value.filterSeceletArr = [], be();
      },
      { immediate: !0 }
    ), ce(
      () => b.queryConfig,
      (C) => {
        C && C.length && (O.value.filterSeceletArr = b.queryConfig.filter(
          (k) => k.ISSHOW != 0
        ));
      },
      { immediate: !0 }
    ), ce(
      () => b.sonEosFilterObj,
      (C) => {
        if (!C || !C.DEFAULTVAL) return;
        let k = JSON.parse(JSON.stringify(S.value));
        k[Q.value.currentIndex].DEFAULTVAL = (C == null ? void 0 : C.DEFAULTVAL) || "", k[Q.value.currentIndex].DEFAULTVAL2 = (C == null ? void 0 : C.DEFAULTVAL2) || "", C.openModalType == "search" ? se.value && se.value.updateCurrentQueryList(k) : C.openModalType == "setting" && W.value && W.value.updateCurrentQueryList(k);
      },
      { immediate: !0 }
    ), L({
      openShowModal: M,
      clostPopver: x
    }), Fe(() => {
    }), (C, k) => {
      const o = F("el-divider"), t = F("el-button"), m = F("vxe-pulldown"), N = F("Icon"), z = F("el-icon");
      return v(), I("div", {
        class: "advancedQuery",
        style: Ne({ paddingTop: h.value + "px" })
      }, [
        n("div", {
          class: "disflex advancedQuery-alone advancedQuery-aloneTop",
          style: Ne({ marginBottom: f.value + "px" })
        }, [
          k[5] || (k[5] = n("div", { class: "advancedQuery-title" }, "我的方案", -1)),
          (v(!0), I(ae, null, oe(B.value, (G, K) => (v(), I("div", {
            class: Ce(["currentRadio", V.value == G.BILLNO ? "active" : ""]),
            key: K,
            onClick: (ne) => R(G, 1)
          }, ge(G.VNAME), 11, Cn))), 128))
        ], 4),
        n("div", Vn, [
          k[8] || (k[8] = n("div", { class: "advancedQuery-title" }, "快捷过滤", -1)),
          n("div", bn, [
            a(cl, {
              ref_key: "filtrationComRef",
              ref: se,
              filterConfig: O.value,
              filterArr: P.value,
              class: "oneLine-left",
              style: Ne({ height: Ae.value, maxWidth: g.value + "px" }),
              onChangeFilter: ye,
              chooseRadioObj: r.value,
              onChangeCurrentQueryList: Le,
              settingArr: fe.value,
              onInputEnter: i,
              onOpenModal: w
            }, null, 8, ["filterConfig", "filterArr", "style", "chooseRadioObj", "settingArr"]),
            n("div", hn, [
              n("img", {
                onClick: i,
                title: "搜索",
                src: At,
                alt: ""
              }),
              a(m, {
                ref_key: "pulldownRef",
                ref: re,
                "popup-class-name": "dropdown-table",
                transfer: "",
                style: { "max-width": "400px" }
              }, {
                default: T(() => [
                  l.value ? (v(), I("img", {
                    key: 0,
                    onClick: X,
                    onMouseover: k[0] || (k[0] = (G) => l.value = !0),
                    onMouseout: k[1] || (k[1] = (G) => l.value = !1),
                    style: { transform: "translateY(4px)", "margin-left": "10px" },
                    class: "ml-10",
                    src: Dt,
                    alt: ""
                  }, null, 32)) : (v(), I("img", {
                    key: 1,
                    onClick: X,
                    onMouseover: k[2] || (k[2] = (G) => l.value = !0),
                    onMouseout: k[3] || (k[3] = (G) => l.value = !1),
                    style: { transform: "translateY(4px)", "margin-left": "10px" },
                    class: "ml-10",
                    src: Ot,
                    alt: ""
                  }, null, 32))
                ]),
                dropdown: T(() => [
                  n("div", Rn, [
                    a(El, {
                      ref_key: "settingFilterRef",
                      ref: W,
                      filterConfig: O.value,
                      filterArr: P.value,
                      onChangeCondition: ie,
                      onResetCondition: Ee,
                      onDelFilterArr: De,
                      onChangeFilter: ye,
                      onChangeCurrentQueryList: H,
                      onOpenModal: $
                    }, null, 8, ["filterConfig", "filterArr"]),
                    a(o),
                    n("div", Un, [
                      a(t, {
                        onClick: x,
                        size: "small"
                      }, {
                        default: T(() => k[6] || (k[6] = [
                          ee("取消")
                        ])),
                        _: 1
                      }),
                      a(t, {
                        type: "primary",
                        onClick: x,
                        size: "small"
                      }, {
                        default: T(() => k[7] || (k[7] = [
                          ee("确定")
                        ])),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 512),
              e.showSaveBtn ? (v(), I("div", {
                key: 0,
                class: "ml8 btnStyle",
                onClick: E
              }, "保存")) : de("", !0),
              n("div", {
                class: "btnStyle ml8",
                onClick: q
              }, "重置"),
              P.value.length > 1 ? (v(), te(z, {
                key: 1,
                color: "#0055ff",
                size: 12,
                class: "ml8 cp foldOUnfoldIcon",
                onClick: k[4] || (k[4] = (G) => Ue())
              }, {
                default: T(() => [
                  a(N, {
                    icon: Ae.value == "auto" ? "codicon:fold-up" : "codicon:fold-down"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : de("", !0)
            ])
          ])
        ]),
        a(gn, {
          menuID: e.menuID,
          showModal: _.value,
          leftList: B.value,
          onUpdateLeftList: be,
          ref_key: "allocationPlanRef",
          ref: Y,
          showSaveBtn: e.showSaveBtn,
          filterConfig: O.value,
          onCloseModal: p,
          queryConfig: e.queryConfig
        }, null, 8, ["menuID", "showModal", "leftList", "showSaveBtn", "filterConfig", "queryConfig"])
      ], 4);
    };
  }
}, xe = /* @__PURE__ */ Te(In, [["__scopeId", "data-v-2ef1643b"]]);
xe.name = "eos-filter";
xe.install = function(e) {
  e.component("eos-filter", xe);
};
const Nn = { class: "container" }, Fn = {
  key: 0,
  class: "disflex ml20"
}, kn = { class: "content" }, Yn = ["onClick"], Bn = { class: "disflex" }, xn = {
  key: 1,
  class: "tr"
}, wn = {
  __name: "index",
  props: {
    filterConfig: {
      type: Object,
      default: {}
    },
    filterArr: {
      type: Array,
      default: []
    },
    choosePlanObj: {
      type: Object,
      default: {}
    },
    menuID: {
      type: Object,
      default: () => {
      }
    },
    hideBtn: {
      type: Boolean,
      default: !1
    },
    queryConfig: {
      type: Array,
      default: []
    }
  },
  emits: ["closeModal"],
  setup(e, { expose: L, emit: A }) {
    const D = pe("request"), { proxy: u } = Ve(), c = A, h = e, f = d([]), l = d([]);
    ce(
      () => h.filterArr,
      (R) => {
        l.value = R, f.value = R.map((i) => i.BILLNO ? i : {
          FIELD: "",
          QUERYTYPE: "",
          DEFAULTVAL: "",
          DEFAULTVAL2: "",
          SORTCODE: "",
          DEFAULTVALArr: "",
          QRYCONT: "",
          QRYPRE: "",
          QRYSUF: ""
        });
      },
      { immediate: !0 }
    );
    const y = d([]), b = d([]), Q = d([]), w = d({}), j = d(!0);
    ce(
      () => h.queryConfig,
      (R) => {
        let i = R.filter((O) => O.ISSHOW == 0);
        y.value = i.filter((O) => O.REVERFIELD == "SYS_ORG_CODE"), y.value.length && (b.value = JSON.parse(y.value[0].VCODE)), Q.value = i.filter((O) => O.REVERFIELD == "" && O.CONTROLS == "ExSelect"), Q.value = Q.value.map((O) => ({
          ...O,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function $(R) {
      w.value[y.value[0].REVERFIELD] = "";
    }
    function _(R) {
      j.value = !1;
    }
    me(() => ({
      ...h.filterArr[0],
      FIELD: "",
      QUERYTYPE: "",
      DEFAULTVAL: "",
      DEFAULTVAL2: "",
      SORTCODE: "",
      DEFAULTVALArr: "",
      QRYCONT: "",
      QRYPRE: "",
      QRYSUF: ""
    }));
    const g = d({}), M = (R, i) => {
      g.value = i;
    }, p = () => {
      l.value.push({}), f.value.push({});
    }, S = (R = null) => {
      (R || (g.value || g.value == 0) && typeof g.value == "number") && (l.value.splice(R || g.value, 1), f.value.splice(R || g.value, 1), g.value = null);
    }, J = () => {
      l.value = [], f.value = [];
    }, P = () => {
      (g.value || g.value == 0) && (l.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, U = () => {
      (g.value || g.value == 0) && (l.value.push(l.value[g.value]), f.value.push(f.value[g.value]));
    }, V = (R, i, O) => {
      l.value[O] = JSON.parse(JSON.stringify(R));
    }, r = () => {
      let R = [];
      R = f.value.map((O, x) => ({
        FIELD: O.FIELD,
        LABEL: O.LABEL,
        QUERYTYPE: O.QUERYTYPE,
        DEFAULTVAL: O.DEFAULTVAL,
        DEFAULTVAL2: O.DEFAULTVAL2,
        SORTCODE: O.SORTCODE,
        DEFAULTVALArr: O.DEFAULTVALArr,
        QRYCONT: O.QRYCONT,
        QRYPRE: O.QRYPRE,
        QRYSUF: O.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const i = {
        BILLNO: h.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: R,
        ...w.value,
        ...h.menuID
      };
      D({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: i,
        encry: !1
      }).then((O) => {
        u.$modal.msgSuccess("保存成功");
        let x = {
          isQuerySearch: !0,
          QUERYS: R,
          DATA: w.value,
          PROGRAMID: h.choosePlanObj.BILLNO
        };
        c("closeModal", x);
      });
    }, B = () => f.value.map((i, O) => ({
      FIELD: i.FIELD,
      LABEL: i.LABEL,
      QUERYTYPE: i.QUERYTYPE,
      DEFAULTVAL: i.DEFAULTVAL,
      DEFAULTVAL2: i.DEFAULTVAL2,
      SORTCODE: i.SORTCODE,
      DEFAULTVALArr: i.DEFAULTVALArr,
      QRYCONT: i.QRYCONT,
      QRYPRE: i.QRYPRE,
      QRYSUF: i.QRYSUF,
      VTYPE: h.hideBtn ? i.VTYPE || 1 : "1"
    })), W = () => {
      c("closeModal");
    };
    return L({ confirmData: B, allDel: J }), (R, i) => {
      const O = F("el-option"), x = F("el-select"), re = F("el-checkbox"), X = F("Icon"), Le = F("el-icon"), fe = F("eos-form"), se = F("el-button");
      return v(), I("div", Nn, [
        y.value.length ? (v(), I("div", Fn, [
          i[3] || (i[3] = n("div", { class: "mr10" }, "可选组织", -1)),
          n("div", null, [
            a(x, {
              modelValue: w.value[y.value[0].REVERFIELD],
              "onUpdate:modelValue": i[0] || (i[0] = (H) => w.value[y.value[0].REVERFIELD] = H),
              style: { width: "300px" },
              onChange: _
            }, {
              default: T(() => [
                (v(!0), I(ae, null, oe(b.value, (H) => (v(), te(O, {
                  key: H.VALUE,
                  label: H.LABEL,
                  value: H.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          a(re, {
            onChange: $,
            class: "ml20",
            modelValue: j.value,
            "onUpdate:modelValue": i[1] || (i[1] = (H) => j.value = H),
            label: "所有组织",
            size: "large"
          }, null, 8, ["modelValue"])
        ])) : de("", !0),
        n("div", { class: "disflex mt-10 mb-10" }, [
          n("div", {
            class: "mr10 btnStyle ml-10",
            onClick: p
          }, "新增行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: S
          }, "删除行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: J
          }, "全部删除"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: P
          }, "插入行"),
          n("div", {
            class: "mr10 btnStyle",
            onClick: U
          }, "复制行")
        ]),
        n("div", kn, [
          (v(!0), I(ae, null, oe(l.value, (H, Y) => (v(), I("div", {
            key: Y,
            class: Ce(["oneLIne", g.value == Y ? "active" : ""]),
            onClick: (E) => M(H, Y)
          }, [
            n("div", Bn, [
              a(Me, {
                filterConfig: e.filterConfig,
                filterVal: H,
                formData: f.value[Y],
                "onUpdate:formData": (E) => f.value[Y] = E,
                onChangeFilter: (E) => V(E, H, Y),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              a(Le, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => S(Y)
              }, {
                default: T(() => [
                  a(X, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ], 10, Yn))), 128))
        ]),
        a(fe, {
          ref: "FormRef",
          modelValue: w.value,
          "onUpdate:modelValue": i[2] || (i[2] = (H) => w.value = H),
          config: Q.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? de("", !0) : (v(), I("div", xn, [
          a(se, {
            size: "small",
            onClick: r
          }, {
            default: T(() => i[4] || (i[4] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(se, {
            size: "small",
            onClick: W
          }, {
            default: T(() => i[5] || (i[5] = [
              ee("取消")
            ])),
            _: 1
          })
        ]))
      ]);
    };
  }
}, we = /* @__PURE__ */ Te(wn, [["__scopeId", "data-v-e4e6d593"]]);
we.name = "eos-conditionModule";
we.install = function(e) {
  e.component("eos-filter", we);
};
const Pn = [
  xe,
  we
], Mn = (e) => {
  const { appContext: L } = Ve();
  dt(e, L);
}, dt = (e, L) => {
  const A = me(() => Ye(e));
  for (const D in e)
    L.config.globalProperties[`$${D}`] = A.value[D];
}, Pe = (e, L) => {
  Pe.installed || (Pe.installed = !0, Pn.map((A) => {
    e.component(A.name, A);
  }), L && dt(L, e));
};
typeof window < "u" && window.Vue && Pe(window.Vue);
const Qn = () => ({
  install: Pe,
  setGlobalConfig: Mn
}), jn = Qn();
export {
  jn as default,
  we as eosConditionModule,
  xe as eosFilter
};
