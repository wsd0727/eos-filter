import { defineComponent as vt, openBlock as m, createElementBlock as I, createElementVNode as n, getCurrentInstance as Ve, ref as d, computed as me, watch as ce, onMounted as Fe, resolveComponent as F, createVNode as a, withCtx as T, createCommentVNode as de, Fragment as ae, renderList as oe, createBlock as te, createSlots as Lt, withModifiers as He, unref as Ye, withKeys as Ge, normalizeStyle as Ne, withDirectives as je, vModelText as Et, inject as pe, createTextVNode as ee, normalizeClass as Ce, toDisplayString as ge, vShow as We } from "vue";
const pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACN0lEQVRIid3VT0gUYRjH8e/7zu5saX8WDFtllVLJil0Q0g5RCSJRh0DoIJTdWisIOlZQSGxB/+gWiB2ii/0XQi8JSSRCJBIsWxFhuTjZmkqSmu7uzDsdZInIHTdlO/g7zvsMn3mf9+Ed8fKddeDCg2RbfFL5yUF8XmkM3G1oFrUts8O5QtIxp0cMmWsEwLWm2C9zjaSz8iBXNkV5OoTq3dSUSyqLJWM/bN4aivZekzdDKitIVJ6esZ0KqsslVw7raBK6IxYfvig2rBNUl2ns3iq588LkZlcKaxHPcUc+r6A15KEnanHxUZKZxO+1NkzqAhpXj+j8TNjcemY6Qo5nFG7U+fxNca79TySdnqjFpY4kJ/e52VIklgatz4M92zRudDq35Wm/xeCozf4q5+POCAVKJJayicQWP+yBTxZVm5wHOONqvkcwl4K51KIOkzPg0pxrMkIf44p8j6Cs0Ln3AMFSSWzMcXgzQ7Exm6/fFY27nHu/uVCws0LS+95aGqRsCD9JcXSvi9rtC5etXQ3XmnSiw4ruyBIhmB/fe30mrSEP5w+5CZRIdBcUeQUHd2h0nVlFsFQjPuncNsjiZgCoD2qcbXDjL5DYto0QgkTK5n6fyetBxfUmnc4Bi5aHyeVB6fgLBBUbBeNTEBtXTM3OP68pl7Qd9/D4lcnljoXHNKtLNR1jwsaY+Pu7+gcVJ24nOFbnzvjuP+1oOVl5P77/B/m80sg1Yk6PGDLcqDfnEvN5pTH6/FTzL6ETzt+QtLb8AAAAAElFTkSuQmCC", At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACx0lEQVRIieWWX0hTURzHf/duzX8PWzJEMkofchKNNoiyfwouknZfSiJTCpRiICSGsvmkghJWCCo9qU/qhXEJsR58CSPnn6lgZpjTCbqJIqnEBHd37+52z6+HGPSQd0xYf+gL5+mc8/ucc/h9f79DjXvkW02c1Pt1n5yEJChbR2+1lWtsUNwibLo8shURIRljbElmiluETTDU8ZgsSGwY6nikk/Fcv9J/DnJ5CGN2CLzZIfAuD2ES2auOt+D9onzbv4f5D66rX43MRyua7mqeIAI1Mh+9f+mM5gM7Hq3Ny6K8FqPqzZFBo4vynfbhSKcpl55mnoueQBD1jy3HXgAA1T4sdc37xGumXHraOUVqAACUYIog/y7mm/Nod8dDTeXkCinNyaT8eVmUFwDgdX3qxe0AnrpqoN81DEhO/x7mK8VS9JEgYbqlVfBNrsg3EREOBNRy7oiNc0dsBwJqEREmluVSS6uwLkqYdiQfuTyEaeaknkAQ9SeOUxtBEbRlHeLHuTVSNLdGiso6xI9BEbQ5mdTGPo/6Jk7qVUyQw25ksof4odlotXebGBEROHfEZh8Ms7F5+2CY5dwRGyKCd5sYh2aj1SZ7iP97K0NnVUr5zKpcUtElun27aLCa1dyCnxQ6WIl1sBK74CeFVrOa8+1iQWW3ODWzKpd0VaXcO5SklAyihGmWVsE3sSyXxksGQcJ0pWRQBPWNRhrr+8POWMD1HWKIza3vkILYAer7w86+0UijEkjRR7lZ1KpzitQ0DEjOzxukMBBEvfNp6hUAoCq7xUldBvXt/Gl6ZsFPLlvNKk4pliLohlE1DPDDuM8qNI+aOannyya5AABQck71tq1cY2MnorVWs4qLV4ISanxjSzJjsod4kz3Ejy3JTCKNL25R/VnFZ+mRTy/TMhLZE9Of99G/C8rW0VuJdstE5PIQJltHb1G/6wP5HWOJ7WdRKhKDAAAAAElFTkSuQmCC", Dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADG0lEQVRIid2W3UtTYRzHf5umbWe2HTge59mL22IamdNalOl8aYFayzAQrQi6CCwp+z/qpsArvehKmAsjI40mNi23nBeiLiYuYW9nO50dl3Ny9uIU1kUIEmw1y6K+8Nw9z/fDD37fLw/HSzIXLVbHIBtLSOEAJEB4Ab1O0wNPjZOklwxdSqfTcBDH4w8ZnhonSS4bS0jLpPjrg5gGAEAhw8fZWELKPSjA9/r/QPm5XPaSjOGNZf4ZAECbXtulkOHjvw3k9oU6NjbZ8urjyv5Pbup6U13VfUinOatu6pqUwKYcTk+fSChwqcpKRvcNcvvoqzNzy4/FODo79Hx6OZlMYVrN0YcAwHk/53xCPV/XleLo7McVXy8AQDZYVtBGNFZeiqMfWppP3vAH11qPCPhekRBxAQB0XWk4w7IJuUyCTZinF4wbm2w5QElGr6zLoKlU9n9mIufIYLhFLik28/mFtNPl73G6/D0Iv/CzTIJN+INrrSEmcrb6uLI/m1dGkJdkDFNWx0AymcKKBDxfantHODw6Mx+k1xuD9Hrj8OjMfGp7R1gk4PsSWynMYnUMeknGkDPojWX+mZTALJ3t9XUiIeJadVPdYhy1tzTV3GxpqrkpxlH7qpvqRoXISufl+nopgVl2NzIn0O9WRlCbXtsdoML6kVe2DxvRWIVaRZhoJlI78W5xaOLd4hDNRGrVKsIUicaOjYzZbAEqrG/Ta7sy+WXcOoUMH5MR2FsqtK7bZOMKkRBxXeto0K66qW4AgOa6E/cKDuVHaTZSyyssCJ/Xae7k53HjOU8EALDk9DwQ46hdLik2+4NrrfH4lriyQj5YWSEfjMW3Sv3BtVa5pNhcgqNzDqenL5tX1hyJhMinjyu+XvP0gpFmIrXJZArrbK+vAwDOyJjNeriw4IsYR+00EzmnVhKmfYNUZeIXAN+Ce6Gh+vaU1THAhKOnAQBUcvFLvU7Ts7Ts6VMrCdMvVdBeGACAWkUM7y3VvDxu4lTV0Uc/8vgp0F4pZPj43VsXkVze7Orv5+jfBQkQXiBbGf6qvCRjECC8AOdPfSC/Aqx/lY5V+/Y+AAAAAElFTkSuQmCC", Ke = "", Ot = "";
function St(...e) {
  const L = ref({});
  return e.forEach((A, D) => {
    L.value[A] = [];
    const i = Ke().getDict(A);
    i && Object.keys(i).length != 0 ? L.value[A] = i : Ot(A).then((c) => {
      L.value[A] = c.RESULT, Ke().setDict(A, L.value[A]);
    });
  }), toRefs(L.value);
}
var Tt = typeof global == "object" && global && global.Object === Object && global, yt = typeof self == "object" && self && self.Object === Object && self, rt = Tt || yt || Function("return this")(), Be = rt.Symbol, st = Object.prototype, gt = st.hasOwnProperty, Ct = st.toString, Ie = Be ? Be.toStringTag : void 0;
function Vt(e) {
  var L = gt.call(e, Ie), A = e[Ie];
  try {
    e[Ie] = void 0;
    var D = !0;
  } catch {
  }
  var i = Ct.call(e);
  return D && (L ? e[Ie] = A : delete e[Ie]), i;
}
var bt = Object.prototype, Rt = bt.toString;
function ht(e) {
  return Rt.call(e);
}
var Ut = "[object Null]", It = "[object Undefined]", Xe = Be ? Be.toStringTag : void 0;
function Nt(e) {
  return e == null ? e === void 0 ? It : Ut : Xe && Xe in Object(e) ? Vt(e) : ht(e);
}
function Ft(e) {
  return e != null && typeof e == "object";
}
var kt = "[object Symbol]";
function Yt(e) {
  return typeof e == "symbol" || Ft(e) && Nt(e) == kt;
}
var Bt = /\s/;
function xt(e) {
  for (var L = e.length; L-- && Bt.test(e.charAt(L)); )
    ;
  return L;
}
var wt = /^\s+/;
function Pt(e) {
  return e && e.slice(0, xt(e) + 1).replace(wt, "");
}
function ze(e) {
  var L = typeof e;
  return e != null && (L == "object" || L == "function");
}
var Ze = NaN, Mt = /^[-+]0x[0-9a-f]+$/i, Qt = /^0b[01]+$/i, $t = /^0o[0-7]+$/i, jt = parseInt;
function et(e) {
  if (typeof e == "number")
    return e;
  if (Yt(e))
    return Ze;
  if (ze(e)) {
    var L = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ze(L) ? L + "" : L;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Pt(e);
  var A = Qt.test(e);
  return A || $t.test(e) ? jt(e.slice(2), A ? 2 : 8) : Mt.test(e) ? Ze : +e;
}
var Qe = function() {
  return rt.Date.now();
}, zt = "Expected a function", _t = Math.max, Jt = Math.min;
function qt(e, L, A) {
  var D, i, c, b, f, l, y = 0, R = !1, Q = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(zt);
  L = et(L) || 0, ze(A) && (R = !!A.leading, Q = "maxWait" in A, c = Q ? _t(et(A.maxWait) || 0, L) : c, w = "trailing" in A ? !!A.trailing : w);
  function j(U) {
    var C = D, r = i;
    return D = i = void 0, y = U, b = e.apply(r, C), b;
  }
  function $(U) {
    return y = U, f = setTimeout(M, L), R ? j(U) : b;
  }
  function _(U) {
    var C = U - l, r = U - y, B = L - C;
    return Q ? Jt(B, c - r) : B;
  }
  function g(U) {
    var C = U - l, r = U - y;
    return l === void 0 || C >= L || C < 0 || Q && r >= c;
  }
  function M() {
    var U = Qe();
    if (g(U))
      return p(U);
    f = setTimeout(M, _(U));
  }
  function p(U) {
    return f = void 0, w && D ? j(U) : (D = i = void 0, b);
  }
  function O() {
    f !== void 0 && clearTimeout(f), y = 0, D = l = i = f = void 0;
  }
  function J() {
    return f === void 0 ? b : p(Qe());
  }
  function P() {
    var U = Qe(), C = g(U);
    if (D = arguments, i = this, l = U, C) {
      if (f === void 0)
        return $(l);
      if (Q)
        return clearTimeout(f), f = setTimeout(M, L), j(l);
    }
    return f === void 0 && (f = setTimeout(M, L)), b;
  }
  return P.cancel = O, P.flush = J, P;
}
/*! Element Plus Icons Vue v2.3.1 */
var Ht = /* @__PURE__ */ vt({
  name: "Search",
  __name: "search",
  setup(e) {
    return (L, A) => (m(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Gt = Ht;
function _e(e) {
  if (!e && typeof e != "object")
    throw new Error("error arguments", "deepClone");
  const L = e.constructor === Array ? [] : {};
  return Object.keys(e).forEach((A) => {
    e[A] && typeof e[A] == "object" ? L[A] = _e(e[A]) : L[A] = e[A];
  }), L;
}
function Wt(e, L = "str", A = "date") {
  if (!e) return L == "str" ? "" : [];
  if (e == "0" || Number(e))
    return L != "str" ? L == "datetime" || L == "datetimearr" ? [
      `${he(Number(e), A)} ${$e(null, !1)}`,
      `${he(0, A)} ${$e(null)}`
    ] : [he(Number(e), A), he(0, A)] : he(Number(e), A);
  {
    let D = [e], i = [];
    if (L != "str") {
      let [c, b = "0"] = e.split("@");
      D = [c, b];
    }
    for (let c = 0; c < D.length; c++) {
      const [b, f = ""] = D[c].split("T");
      let l = "", y = $e(f, c == 1);
      b == "0" || Number(b) ? l = he(Number(b), A) : l = Kt(b);
      let R = L == "datetime" || L == "datetimearr" ? `${l} ${y}` : l;
      i.push(R);
    }
    return L != "str" ? i : i.join();
  }
}
function Kt(e) {
  let [L = "0y", A = "0m", D = "0d"] = e.split(","), i = [L, A, D], c = [];
  function b(f) {
    return f < 10 ? "0" + f : f;
  }
  for (let f = 0; f < i.length; f++) {
    const l = i[f];
    if (l == null) continue;
    let y;
    if (Number(l))
      y = l * 1 < 10 ? "0" + l : l;
    else {
      let R = l.slice(0, l.length - 1), Q = l.slice(-1);
      y = ut(Number(R), Q), y <= 0 && (y = b(12 + y), c[f - 1] = c[f - 1] - 1);
    }
    c[f] = y;
  }
  return c.join("-");
}
function $e(e, L = !0) {
  if (!e) return L ? "23:59:59" : "00:00:00";
  let [A, D, i] = e.split(":"), c = [A, D, i], b = "";
  for (let f = 0; f < c.length; f++) {
    const l = c[f];
    if (l != null)
      if (Number(l) || Number(l) == "0")
        b += (Number(l) < 10 ? "0" + Number(l) : Number(l)) + ":";
      else {
        let y = l.slice(0, l.length - 1), R = l.slice(-1);
        b += ut(Number(y), R) + ":";
      }
  }
  return b.slice(0, b.length - 1);
}
function ut(e, L) {
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
function he(e = 0, L = "date") {
  var A = parseInt(e), D = /* @__PURE__ */ new Date();
  D.setDate(D.getDate() + A);
  var i = D.getFullYear(), c = D.getMonth() + 1, b = D.getDate(), f = D.getHours(), l = D.getMinutes(), y = D.getSeconds();
  function R(Q) {
    return Q < 10 ? "0" + Q : Q;
  }
  return L == "year" ? String(i) : L == "month" ? String(R(c)) : L == "datetime" ? `${i}-${R(c)}-${R(b)} ${R(f)}:${R(
    l
  )}:${R(y)}` : i + "-" + R(c) + "-" + R(b);
}
const Te = (e, L) => {
  const A = e.__vccOpts || e;
  for (const [D, i] of L)
    A[D] = i;
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
}, tt = "CDate,LDate,TDate,LWork,CWork,LMonth,CMonth,TMonth,CDateQ,CDateH", lt = "CDateQNQ,CDateQNH,CDateHNQ,CDateHNH", ul = {
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
    const { proxy: A } = Ve(), D = L, i = e, c = d("mini"), b = me(() => i.filterConfig.filterSeceletArr), f = d([]), l = me(() => i.filterVal), y = d(null);
    d("1");
    const R = d([]);
    d(null), d([{}, {}, { label: "222" }]);
    const Q = (o) => {
      let t = o.value, v = b.value.filter((N) => N.FIELD == t);
      i.formData.LABEL = v[0].LABEL;
      try {
        f.value = v[0].VCODE ? JSON.parse(v[0].VCODE) : [];
      } catch {
      }
      D("changeFilter", v[0] || {});
    };
    ce(
      () => i.filterVal,
      (o) => {
        if (y.value = o.BILLNO, o.CONTROLS == "ExSelect" || o.CONTROLS == "ExSelectMultiple")
          if (o.OTHER && o.OTHER.indexOf("${") === 0 && o.OTHER.charAt(o.OTHER.length - 1) == "}") {
            let t = o.OTHER.substring(2, o.OTHER.length - 1);
            R.value = St(t);
          } else
            R.value = JSON.parse(o.OTHER);
      },
      { immediate: !0 }
    );
    const w = () => {
      D("inputEnter");
    }, j = d({}), $ = d(!1), _ = d(null);
    d(null);
    const g = d(), M = d({}), p = d({}), O = d([]), J = d(1), P = d(10), U = d({
      tableColumns: [],
      hasTableTools: !1,
      hasSeq: !1,
      toolsConfig: [],
      loading: !1,
      width: "500px",
      height: "auto"
    }), C = {
      // 下拉表格类 默认大小
      selectTableSize: ["360px", "280px"],
      // 下拉表格类 默认列表配置
      selectTableColumn: [
        { LABEL: "编码", FIELD: "BILLNO", WIDTH: 150, ISSHOW: "1" },
        { LABEL: "名称", FIELD: "VNAME", WIDTH: 200, ISSHOW: "1" }
      ]
    }, r = (o, t) => {
      if (!i.formData) return !1;
      let v = {};
      v[o] = t.join(","), Object.assign(i.formData.DEFAULTVAL, v);
    }, B = () => {
      J.value = 1, O.value = [], W(l.value, null);
    }, W = (o, t) => {
      var ne;
      const { FIELD: v, CONTROLS: N, OTHER: z, SLOT: H, REVERFIELD: K } = o;
      if (N != "ExSelect" && N != "ExSelectMultiple" ? De(z) : Ee.value = [], (N == "ExSelectModal" || N == "ExSelectTable" && t == null) && (delete p.value[v], i.formData.DEFAULTVAL = "", (ne = _ == null ? void 0 : _.value) == null || ne.hidePanel(), O.value = []), t != "" && t != null)
        switch (N) {
          case "ExSelectTable":
          case "ExSelectModal":
            p.value[v] = _e(t), K ? i.formData.DEFAULTVAL = t == null ? "" : Array.isArray(t) ? t.map((le) => le[K]).join(",") : t[K] : i.formData.DEFAULTVAL = t == null ? "" : Array.isArray(t) ? t.map((le) => le == null ? void 0 : le.VNAME).join(",") : t == null ? void 0 : t.VNAME, setTimeout(() => {
              var le;
              (le = _ == null ? void 0 : _.value) == null || le.hidePanel(), J.value = 1, O.value = [];
            }, 200);
            break;
        }
      else
        r(v, []);
    }, h = qt((o = !1) => {
      o || (J.value = 1), S(l.value, o);
    }, 300), u = (o) => {
      let { FIELD: t, OTHER: v, SLOTCFG: N } = o;
      if (N == "" || v == "") return console.error("Err:filterForm:useSelectTable配置错误");
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
        let [H, K, ne, le] = z, Oe = ne ? ne.split("*") : ["500px", "300px"];
        U.value.width = Oe[0], U.value.height = Oe[1], U.value.columns = le ? SET_CustemModalCOL(le) : C.selectTableColumn, M.value = {
          PK_MODULE: H,
          BILLNO: K,
          CUSTOMPLAN: []
        }, S(o, !1);
        return;
      } else
        S(o, !1);
    }, S = (o, t = !1) => {
      if (!A.$getData) return console.error("Err:@eosine/form:globalConfig 缺少getData全局方法");
      let { FIELD: v, OTHER: N, SLOTCFG: z } = o;
      if (g.value != v || !M.value.PK_MODULE) return u(o);
      let { url: H, data: K, importantData: ne } = De(N), { PK_MODULE: le, BILLNO: Oe, CUSTOMPLAN: Z } = M.value, ve = [];
      try {
        let Re = JSON.parse(z), { MODULEID: ct, PAGEID: ft, STYLE: mt } = Re;
        ve = [ct, ft, mt];
      } catch {
        ve = z.split(",");
      }
      if (ve.length < 2) return console.error("Error: 配置错误");
      let [s, Se, ke] = ve, Je = ke ? ke.split("*") : C.selectTableSize;
      U.value.width = Je[0], U.value.height = Je[1];
      const qe = i.formData.DEFAULTVAL;
      t ? J.value++ : J.value = 1;
      let dt = {
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
        url: H,
        method: "post",
        data: dt,
        headers: {
          repeatSubmit: !1
        }
      }).then((Re) => {
        t ? Re.RESULT.RECORDS.length > 0 && (O.value = O.value.concat(Re.RESULT.RECORDS)) : O.value = Re.RESULT.RECORDS;
      }).catch((Re) => {
        O.value = [];
      }).finally(() => {
        _.value.showPanel();
      });
    };
    function x(o) {
      return !!(i.ENABLESTATE == 1 && o);
    }
    const re = me(() => {
      if (tt.includes(i.formData.QUERYTYPE))
        return i.formData.DEFAULTVAL = "", "0";
      if (lt.includes(i.formData.QUERYTYPE))
        return "1";
    });
    ce(() => i.formData.QUERYTYPE, (o) => {
      tt.includes(i.formData.QUERYTYPE) ? (re.value = "0", i.formData.DEFAULTVAL = "") : lt.includes(i.formData.QUERYTYPE) && (re.value = "1");
    });
    const X = (o) => {
      let { LABEL: t, SLOTCFG: v, OTHER: N } = o, z = "70%", H = "60%";
      if (!v || v == "") return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let K = [];
      try {
        let Z = JSON.parse(v), { MODULE: ve, PAGEID: s, STYLE: Se = "70%*60%" } = Z;
        K = [ve, s, Se];
      } catch {
        K = v.split(",");
      }
      if (K.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let { data: ne, importantData: le } = De(N);
      if (K.length == 3) {
        let Z = K[2].split("*");
        if (Z.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
        z = Z[0], H = Z[1];
      }
      return z.includes("%") && (z = Le(z, window.innerWidth)), H.includes("%") && (H = Le(H, window.innerHeight)), {
        _config: _e(o),
        title: t,
        width: z,
        height: H,
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
      const v = parseFloat(o) / 100;
      return parseInt(v * t) + "px";
    }
    const fe = d({});
    function se() {
      let o = X(l.value);
      o.contnet = "table", o.currentIndex = i.currentIndex, D("openModal", o), fe.value = o;
    }
    const G = me((o) => (t) => {
      try {
        let { SLOTCFG: v } = t;
        return !v.includes('"selectStage":false');
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
      let { FIELD: v, OTHER: N } = t;
      if (N == "") return;
      let { url: z, data: H } = De(N);
      z != "" && ($.value = !0, A.request({
        url: z,
        method: "post",
        data: {
          KEYWORD: o,
          // MODULEID: MENUID,
          ...H
        },
        headers: {
          repeatSubmit: !1
        }
      }).then(({ RESULT: K }) => {
        j.value[v] = K;
      }).catch(() => {
        j.value[v] = [];
      }).finally(() => {
        $.value = !1;
      }));
    }, ue = (o, t) => {
      var le, Oe;
      const { FIELD: v, CONTROLS: N, OTHER: z, SLOT: H, REVERFIELD: K } = o;
      if (N != "ExSelect" && N != "ExSelectMultiple" ? De(z) : Ee.value = [], (N == "ExSelectModal" || N == "ExSelectTable" && t == null) && delete p.value[v], t != "" && t != null)
        switch (N) {
          case "ExSelectMultiple":
            var ne = [];
            for (let Z = 0; Z < t.length; Z++) {
              const ve = t[Z];
              let s = (le = R.value) == null ? void 0 : le.find((Se) => Se.VALUE == ve);
              ne.push(s);
            }
            Ae(v, t);
            break;
          case "ExSelectSearch":
            o.SLOTCFG && o.SLOTCFG.includes("CREATED") ? j.value[v].find((Z) => Z.VALUE == t) == null || j.value[v].find((Z) => Z.VALUE == t) : j.value[v].find((Z) => Z.VALUE == t);
            break;
          case "ExSelectGroup":
            be(j.value[v], (Z) => Z.VALUE == t);
            break;
        }
      else
        Ae(v, []);
      K && (N == "ExSelect" || N == "ExSelectMultiple") && (i.formData[K] = DictLabels((Oe = EnumData.value) == null ? void 0 : Oe[v], t) || ""), o.LINKAGE && (o.LINKAGE.includes("COPYTO") || cleanEvent(o), SET_ValueSYNC(o), numberBlur(o), DateCalc(o), SelectChangeAfter(o, t));
    };
    function be(o, t, v = { value: !1 }) {
      for (const N of o) {
        if (t(N))
          return v.value = !0, N;
        if (N.CHILDREN || N.children) {
          const z = be(N.CHILDREN || N.children, t, v);
          if (z) return z;
          v.value && (v.value = !1);
        }
      }
      return null;
    }
    const Ae = (o, t) => {
      i.formData.DEFAULTVAL = t.join(",");
    };
    d(null);
    const Ue = () => {
      try {
        return JSON.parse(l.value.VCODE);
      } catch {
        return [];
      }
    }, ye = () => {
      if (["ExSelectMultiple", "ExSelectMutiple", "ExCheckbox", "ExRegion", "ExArea", "ExDateRange", "ExDateTimeRange", "ExDate"].includes(l.value.CONTROLS) && i.formData.DEFAULTVAL && i.formData.DEFAULTVAL != "")
        switch (l.value.CONTROLS) {
          case "ExDateRange":
            i.formData.DEFAULTVAL = Wt(i.formData.DEFAULTVAL, "arr", i.formData.SLOTCFG).join(","), i.formData.DEFAULTVALArr = i.formData.DEFAULTVAL.split(",");
            break;
          default:
            console.log("defaultdefaultdefaultdefault"), i.formData.DEFAULTVALArr = i.formData.DEFAULTVAL.split(",");
            break;
        }
    };
    function ie(o) {
      l.value.CONTROLS == "ExDateRange" || l.value.CONTROLS == "ExDateTimeRange" || l.QUERYTYPE == "Between" || l.QUERYTYPE == "NotBetween" ? i.formData.DEFAULTVAL = o ? o.join(",") : "" : i.formData.DEFAULTVAL = o || "";
    }
    const Ee = d([]);
    function De(o) {
      if (!o)
        return Ee.value = [], { url: "", data: {}, importantData: {} };
      try {
        let t = Array.isArray(JSON.parse(o)) ? JSON.parse(o)[0] : JSON.parse(o);
        if (t.setvalue && JSON.stringify(t.setvalue) != "{}") {
          let v = [];
          for (const N in t.setvalue)
            v.push({ k: N, v: t.setvalue[N] });
          Ee.value = v;
        }
        return {
          url: t.url,
          data: t == null ? void 0 : t.params,
          importantData: t == null ? void 0 : t.importantData
        };
      } catch (t) {
        if (o.indexOf("/") == "0") {
          let v = o.split("?"), N = "", z = {}, H = {};
          if (v.length == 0)
            N = o, Ee.value = [];
          else if (v.length > 0) {
            if (N = v[0], v.length > 1) {
              let { obj: K, importantObj: ne } = k("a?" + v[1], "obj");
              z = K, H = ne;
            }
            v.length > 2 && (k("a?" + v[2], "obj"), z = { ...z, ...V() }, H = {
              ...H,
              ...V()
            }), Ee.value = v[3] ? k("a?" + v[3], "arr") : [];
          }
          return { url: N, data: z, importantData: H };
        } else
          console.error("配置解析错误!", t);
      }
    }
    function V(o) {
      return {};
    }
    function k(o, t) {
      let v = /([^&?=]+)=([^&?=]+)/g, N = {}, z = {}, H = [];
      return o.replace(v, function() {
        if (arguments[1].includes("!")) {
          let ne = arguments[1].substr(1);
          z[ne] = arguments[2];
        } else
          N[arguments[1]] = arguments[2];
        let K = {};
        K.k = arguments[1], K.v = arguments[2], H.push(K);
      }), t == "obj" ? { obj: N, importantObj: z } : H;
    }
    return Fe(() => {
      ye(), (l.value.CONTROLS == "ExSelectGroup" || l.value.CONTROLS == "ExSelectSearch") && q("", l.value);
    }), (o, t) => {
      const v = F("vxe-option"), N = F("vxe-select"), z = F("el-date-picker"), H = F("el-input"), K = F("el-tree-select"), ne = F("el-option"), le = F("el-select"), Oe = F("el-button"), Z = F("eos-table"), ve = F("vxe-pulldown");
      return m(), I("div", Xt, [
        e.isCondition ? (m(), I("div", Zt, [
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
              a(v, {
                label: "(",
                value: "("
              }),
              a(v, {
                label: "((",
                value: "(("
              }),
              a(v, {
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
              (m(!0), I(ae, null, oe(b.value, (s) => (m(), te(v, {
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
              (m(!0), I(ae, null, oe(Ue(), (s) => (m(), te(v, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["disabled", "modelValue", "size"])
        ]),
        n("div", ll, [
          l.value.QUERYTYPE == "Between" || l.value.QUERYTYPE == "NotBetween" ? (m(), I(ae, { key: 0 }, [
            l.value.CONTROLS == "ExDateTimeRange" ? (m(), te(z, {
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
            }, null, 8, ["modelValue"])) : (m(), te(z, {
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
          ], 64)) : l.value.CONTROLS == "ExDateRange" ? (m(), te(z, {
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
          }, null, 8, ["modelValue"])) : l.value.CONTROLS == "ExDateTimeRange" ? (m(), te(z, {
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
          }, null, 8, ["modelValue"])) : re.value == "0" || re.value == "1" ? (m(), te(H, {
            key: 3,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[15] || (t[15] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "请输入",
            disabled: re.value == "0",
            type: "number"
          }, null, 8, ["modelValue", "disabled"])) : l.value.CONTROLS == "ExDate" ? (m(), te(z, {
            key: 4,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[16] || (t[16] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            style: { width: "100%" },
            placeholder: "请选择",
            "value-format": "YYYY-MM-DD"
          }, null, 8, ["modelValue"])) : l.value.CONTROLS == "ExDateTime" ? (m(), te(z, {
            key: 5,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[17] || (t[17] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            type: "datetime",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            style: { width: "100%" }
          }, null, 8, ["modelValue"])) : l.value.CONTROLS == "ExSelect" ? (m(), te(N, {
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
              (m(!0), I(ae, null, oe(R.value, (s) => (m(), te(v, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size"])) : l.value.CONTROLS == "ExSelectGroup" ? (m(), te(K, {
            key: 7,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[19] || (t[19] = (s) => e.formData.DEFAULTVAL = s),
            "check-strictly": G.value(l.value),
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
          }, null, 8, ["modelValue", "check-strictly", "remote-method", "data"])) : l.value.CONTROLS == "ExSelectMultiple" ? (m(), te(le, {
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
              (m(!0), I(ae, null, oe(R.value, (s) => (m(), te(ne, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])) : l.value.CONTROLS == "ExSelectSearch" ? (m(), te(le, {
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
                (m(!0), I(ae, null, oe((s = j.value) == null ? void 0 : s[l.value.FIELD], (Se) => (m(), te(ne, {
                  key: Se.VALUE,
                  label: Se.LABEL,
                  value: Se.VALUE,
                  style: { "max-width": "300px" }
                }, null, 8, ["label", "value"]))), 128))
              ];
            }),
            _: 1
          }, 8, ["modelValue", "remote-method", "allow-create"])) : l.value.CONTROLS == "ExSelectModal" ? (m(), te(ve, {
            key: 10,
            ref_key: "DropdownRef",
            ref: _,
            "popup-class-name": "selectmodal",
            "destroy-on-close": "",
            transfer: !0
          }, Lt({
            default: T(() => [
              a(H, {
                modelValue: e.formData.DEFAULTVAL,
                "onUpdate:modelValue": t[31] || (t[31] = (s) => e.formData.DEFAULTVAL = s),
                type: "text",
                clearable: "",
                onClear: t[32] || (t[32] = (s) => B()),
                onKeydown: [
                  t[33] || (t[33] = He((s) => Ye(h)(!1), ["stop"])),
                  Ge(w, ["enter"])
                ]
              }, {
                append: T(() => [
                  a(Oe, {
                    icon: Ye(Gt),
                    onClick: t[30] || (t[30] = He((s) => se(), ["stop"]))
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
                  modelValue: O.value,
                  "onUpdate:modelValue": t[34] || (t[34] = (s) => O.value = s),
                  onDbClick: t[35] || (t[35] = (s) => W(l.value, s))
                }, null, 8, ["config", "modelValue"])
              ], 4)
            ]),
            _: 2
          }, [
            O.value.length > 0 ? {
              name: "footer",
              fn: T(() => [
                n("div", nl, [
                  n("span", {
                    class: "selectmodal-tools-item",
                    onClick: t[36] || (t[36] = (s) => Ye(h)(!0))
                  }, "更多")
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1536)) : (m(), te(H, {
            key: 11,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": t[37] || (t[37] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "输入关键字后回车查询",
            onKeyup: Ge(w, ["enter"])
          }, null, 8, ["modelValue"]))
        ]),
        e.isCondition ? (m(), I("div", al, [
          a(N, {
            transfer: "",
            modelValue: e.formData.QRYSUF,
            "onUpdate:modelValue": t[38] || (t[38] = (s) => e.formData.QRYSUF = s),
            placeholder: "",
            style: { width: "50px" },
            size: c.value
          }, {
            default: T(() => [
              a(v, {
                label: ")",
                value: ")"
              }),
              a(v, {
                label: "))",
                value: "))"
              }),
              a(v, {
                label: ")))",
                value: ")))"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0),
        e.isCondition ? (m(), I("div", ol, [
          a(N, {
            transfer: "",
            modelValue: e.formData.QRYCONT,
            "onUpdate:modelValue": t[39] || (t[39] = (s) => e.formData.QRYCONT = s),
            placeholder: "",
            style: { width: "80px" },
            size: c.value
          }, {
            default: T(() => [
              a(v, {
                label: "并且",
                value: "and"
              }),
              a(v, {
                label: "或者",
                value: "or"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : de("", !0),
        e.hideBtn ? (m(), I("div", rl, [
          je(n("input", {
            "onUpdate:modelValue": t[40] || (t[40] = (s) => e.formData.SORTCODE = s),
            style: { width: "60px" },
            class: "vxe-input type--text size--mini is--controls is--suffix"
          }, null, 512), [
            [Et, e.formData.SORTCODE]
          ])
        ])) : de("", !0),
        e.hideBtn ? (m(), I("div", sl, [
          a(N, {
            transfer: "",
            modelValue: e.formData.VTYPE,
            "onUpdate:modelValue": t[41] || (t[41] = (s) => e.formData.VTYPE = s),
            placeholder: "",
            style: { width: "100px" },
            size: c.value
          }, {
            default: T(() => [
              a(v, {
                label: "高级查询",
                value: "1"
              }),
              a(v, {
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
}, Me = /* @__PURE__ */ Te(ul, [["__scopeId", "data-v-1020d6ef"]]), il = { class: "" }, dl = {
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
    const D = A, i = e;
    d({});
    const c = d([]);
    Fe(() => {
    });
    function b(R) {
      D("openModal", R);
    }
    const f = () => {
      D("inputEnter");
    };
    function l(R) {
      c.value = R;
    }
    const y = (R, Q, w) => {
      D("changeFilter", R, Q, w);
    };
    return ce(() => i.filterArr, (R) => {
      c.value = R.map((Q) => Q.BILLNO ? Q : {
        FIELD: "",
        QUERYTYPE: "",
        DEFAULTVAL: "",
        DEFAULTVAL2: "",
        SORTCODE: "",
        DEFAULTVALArr: ""
      });
    }, { immediate: !0, deep: !0 }), ce(() => c.value, (R) => {
      D("changeCurrentQueryList", R);
    }, { immediate: !0, deep: !0 }), ce(() => i.settingArr, (R) => {
    }, { immediate: !0, deep: !0 }), L({
      updateCurrentQueryList: l
    }), (R, Q) => (m(), I("div", il, [
      (m(!0), I(ae, null, oe(e.filterArr, (w, j) => (m(), I("div", {
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
          onOpenModal: b,
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
    const D = A, i = e, c = d([]), b = me(() => i.filterConfig.filterSeceletArr), f = d(null), l = ($) => {
      let _ = b.value.filter((g) => g.BILLNO == $.value);
      D("changeCondition", _[0] || {});
    };
    function y($) {
      D("openModal", $);
    }
    const R = () => {
      f.value = null, D("resetCondition");
    }, Q = ($, _) => {
      D("delFilterArr", _);
    }, w = ($) => {
      c.value = $;
    }, j = ($, _, g) => {
      D("changeFilter", $, _, g);
    };
    return ce(() => i.filterArr, ($) => {
      $.forEach((_, g) => {
        c.value[g] || (c.value[g] = {}), c.value[g].FIELD = $[g].FIELD;
      });
    }, { immediate: !0 }), L({
      updateCurrentQueryList: w
    }), ($, _) => {
      const g = F("Icon"), M = F("el-icon"), p = F("vxe-option"), O = F("vxe-select"), J = F("el-button");
      return m(), I("div", fl, [
        (m(!0), I(ae, null, oe(e.filterArr, (P, U) => (m(), I("div", {
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
              "onUpdate:formData": (C) => c.value[U] = C,
              onChangeFilter: (C) => j(C, P, U),
              onOpenModal: y,
              currentIndex: U
            }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "currentIndex"]),
            n("div", null, [
              U != 0 ? (m(), te(M, {
                key: 0,
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (C) => Q(P, U)
              }, {
                default: T(() => [
                  a(g, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : (m(), te(M, {
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
          a(O, {
            modelValue: f.value,
            "onUpdate:modelValue": _[0] || (_[0] = (P) => f.value = P),
            transfer: "",
            style: { width: "100px" },
            placeholder: "请输入条件",
            size: "mini",
            onChange: l
          }, {
            default: T(() => [
              (m(!0), I(ae, null, oe(e.filterConfig.filterSeceletArr, (P) => (m(), te(p, {
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
            onClick: R
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
var nt;
(function(e) {
  e.pop = "pop", e.push = "push";
})(nt || (nt = {}));
var at;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(at || (at = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ot;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ot || (ot = {}));
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
    const D = pe("request"), { proxy: i } = Ve(), c = A, b = e, f = d([]), l = d([]);
    ce(
      () => b.filterArr,
      (h) => {
        l.value = h, f.value = h.map((u) => u.BILLNO ? u : {
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
    const y = d([]), R = d([]), Q = d([]), w = d({}), j = d(!0);
    ce(
      () => b.queryConfig,
      (h) => {
        let u = h.filter((S) => S.ISSHOW == 0);
        y.value = u.filter((S) => S.REVERFIELD == "SYS_ORG_CODE"), y.value.length && (R.value = JSON.parse(y.value[0].VCODE)), Q.value = u.filter((S) => S.REVERFIELD == "" && S.CONTROLS == "ExSelect"), Q.value = Q.value.map((S) => ({
          ...S,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function $(h) {
      w.value[y.value[0].REVERFIELD] = "";
    }
    function _(h) {
      j.value = !1;
    }
    me(() => ({
      ...b.filterArr[0],
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
    const g = d({}), M = (h, u) => {
      g.value = u;
    }, p = () => {
      l.value.push({}), f.value.push({});
    }, O = (h = null) => {
      (h || (g.value || g.value == 0) && typeof g.value == "number") && (l.value.splice(h || g.value, 1), f.value.splice(h || g.value, 1), g.value = null);
    }, J = () => {
      l.value = [], f.value = [];
    }, P = () => {
      (g.value || g.value == 0) && (l.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, U = () => {
      (g.value || g.value == 0) && (l.value.push(l.value[g.value]), f.value.push(f.value[g.value]));
    }, C = (h, u, S) => {
      l.value[S] = JSON.parse(JSON.stringify(h));
    }, r = () => {
      let h = [];
      h = f.value.map((S, x) => ({
        FIELD: S.FIELD,
        LABEL: S.LABEL,
        QUERYTYPE: S.QUERYTYPE,
        DEFAULTVAL: S.DEFAULTVAL,
        DEFAULTVAL2: S.DEFAULTVAL2,
        SORTCODE: S.SORTCODE,
        DEFAULTVALArr: S.DEFAULTVALArr,
        QRYCONT: S.QRYCONT,
        QRYPRE: S.QRYPRE,
        QRYSUF: S.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const u = {
        BILLNO: b.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: h,
        ...w.value,
        ...b.menuID
      };
      D({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: u,
        encry: !1
      }).then((S) => {
        i.$modal.msgSuccess("保存成功");
        let x = {
          isQuerySearch: !0,
          QUERYS: h,
          DATA: w.value,
          PROGRAMID: b.choosePlanObj.BILLNO
        };
        c("closeModal", x);
      });
    }, B = () => f.value.map((u, S) => ({
      FIELD: u.FIELD,
      LABEL: u.LABEL,
      QUERYTYPE: u.QUERYTYPE,
      DEFAULTVAL: u.DEFAULTVAL,
      DEFAULTVAL2: u.DEFAULTVAL2,
      SORTCODE: u.SORTCODE,
      DEFAULTVALArr: u.DEFAULTVALArr,
      QRYCONT: u.QRYCONT,
      QRYPRE: u.QRYPRE,
      QRYSUF: u.QRYSUF,
      VTYPE: b.hideBtn ? u.VTYPE || 1 : "1"
    })), W = () => {
      c("closeModal");
    };
    return L({ confirmData: B, allDel: J }), (h, u) => {
      const S = F("el-option"), x = F("el-select"), re = F("el-checkbox"), X = F("Icon"), Le = F("el-icon"), fe = F("eos-form"), se = F("el-button");
      return m(), I("div", Sl, [
        y.value.length ? (m(), I("div", Tl, [
          u[3] || (u[3] = n("div", { class: "mr10" }, "可选组织", -1)),
          n("div", null, [
            a(x, {
              modelValue: w.value[y.value[0].REVERFIELD],
              "onUpdate:modelValue": u[0] || (u[0] = (G) => w.value[y.value[0].REVERFIELD] = G),
              style: { width: "300px" },
              onChange: _
            }, {
              default: T(() => [
                (m(!0), I(ae, null, oe(R.value, (G) => (m(), te(S, {
                  key: G.VALUE,
                  label: G.LABEL,
                  value: G.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          a(re, {
            onChange: $,
            class: "ml20",
            modelValue: j.value,
            "onUpdate:modelValue": u[1] || (u[1] = (G) => j.value = G),
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
            onClick: O
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
          (m(!0), I(ae, null, oe(l.value, (G, Y) => (m(), I("div", {
            key: Y,
            class: Ce(["oneLIne", g.value == Y ? "active" : ""]),
            onClick: (E) => M(G, Y)
          }, [
            n("div", Cl, [
              a(Me, {
                filterConfig: e.filterConfig,
                filterVal: G,
                formData: f.value[Y],
                "onUpdate:formData": (E) => f.value[Y] = E,
                onChangeFilter: (E) => C(E, G, Y),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              a(Le, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => O(Y)
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
          "onUpdate:modelValue": u[2] || (u[2] = (G) => w.value = G),
          config: Q.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? de("", !0) : (m(), I("div", Vl, [
          a(se, {
            size: "small",
            onClick: r
          }, {
            default: T(() => u[4] || (u[4] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(se, {
            size: "small",
            onClick: W
          }, {
            default: T(() => u[5] || (u[5] = [
              ee("取消")
            ])),
            _: 1
          })
        ]))
      ]);
    };
  }
}, Rl = /* @__PURE__ */ Te(bl, [["__scopeId", "data-v-5f94987e"]]), hl = { class: "sortModule" }, Ul = { class: "contrHeight" }, Il = { style: { width: "220px" } }, Nl = ["onClick"], Fl = { style: { width: "100%" } }, kl = ["onClick"], Yl = { class: "tr" }, Bl = {
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
    const A = pe("request"), { proxy: D } = Ve(), i = L, c = e, b = d({}), f = d({}), l = d([]), y = (M) => {
      b.value = M;
    }, R = (M) => {
      f.value = M;
    }, Q = () => {
      let M = l.value.map((O) => ({
        FIELD: O.FIELD,
        SORTFLAG: O.SORTFLAG
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
      }).then((O) => {
        D.$modal.msgSuccess("保存成功"), i("closeModal");
      });
    }, w = () => {
      i("closeModal");
    }, j = (M) => {
      switch (M) {
        case 1:
          b.value.BILLNO && !l.value.find((B) => B.BILLNO == b.value.BILLNO) && l.value.push(b.value);
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
          let O = l.value.findIndex((B) => B.BILLNO === f.value.BILLNO) || null;
          if (O == -1 || O == 0 || !O) return;
          let J = JSON.parse(JSON.stringify(l.value[O])), P = JSON.parse(JSON.stringify(l.value[O - 1]));
          l.value.splice(O, 1, P), l.value.splice(O - 1, 1, J);
          break;
        case 5:
          let U = l.value.findIndex((B) => B.BILLNO === f.value.BILLNO);
          if (U == l.value.length - 1) return;
          let C = JSON.parse(JSON.stringify(l.value[U])), r = JSON.parse(JSON.stringify(l.value[U + 1]));
          l.value.splice(U, 1, r), l.value.splice(U + 1, 1, C);
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
        l.value = p.RESULT, l.value.forEach((O, J) => {
          let P = $.value.find((U) => U.FIELD == O.FIELD);
          l.value[J].LABEL = P.LABEL, l.value[J].BILLNO = P.BILLNO;
        });
      });
    };
    return ce(() => c.choosePlanObj.BILLNO, (M) => {
      _();
    }, { immediate: !0 }), Fe(() => {
    }), (M, p) => {
      const O = F("el-col"), J = F("el-button"), P = F("el-option"), U = F("el-select"), C = F("el-row");
      return m(), I("div", hl, [
        a(C, null, {
          default: T(() => [
            a(O, { span: 8 }, {
              default: T(() => [
                n("div", Ul, [
                  n("table", Il, [
                    p[5] || (p[5] = n("thead", null, [
                      n("tr", null, [
                        n("td", null, "字段")
                      ])
                    ], -1)),
                    n("tbody", null, [
                      (m(!0), I(ae, null, oe($.value, (r) => (m(), I("tr", {
                        key: r.BILLNO,
                        class: Ce(r.BILLNO == b.value.BILLNO ? "active" : ""),
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
            a(O, { span: 4 }, {
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
            a(O, { span: 12 }, {
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
                    (m(!0), I(ae, null, oe(l.value, (r, B) => (m(), I("tr", {
                      key: r.BILLNO,
                      class: Ce(r.BILLNO == f.value.BILLNO ? "active" : ""),
                      onClick: (W) => R(r)
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
}, xl = /* @__PURE__ */ Te(Bl, [["__scopeId", "data-v-69dccb16"]]), wl = { class: "showHiddenModule" }, Pl = { class: "contrHeight" }, Ml = { style: { width: "100%" } }, Ql = { class: "disflex" }, $l = { style: { border: "none", "background-color": "#ffffe3" } }, jl = { style: { padding: "0" } }, zl = ["onClick"], _l = { style: { width: "50px" } }, Jl = { style: { width: "70px", "text-align": "center" } }, ql = { style: { width: "60px" } }, Hl = { class: "mb-20" }, Gl = { class: "tr" }, Wl = {
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
    const A = pe("request"), { proxy: D } = Ve(), i = L, c = e, b = d(!1), f = (C) => {
      M.value.forEach((r, B) => {
        M.value[B].IS_SHOW = C;
      });
    }, l = (C, r) => {
      let B = p.value.findIndex((W) => W.BILLNO == r.BILLNO);
      p.value[B].IS_SHOW = C;
    }, y = (C, r) => {
      let B = p.value.findIndex((W) => W.BILLNO == r.BILLNO);
      p.value[B].WIDTH = C;
    }, R = () => {
      let C = p.value;
      C.forEach((B, W) => {
        C[W].SORTCODE = String(B.SORTCODE);
      });
      const r = {
        PKBILLNO: c.choosePlanObj.BILLNO,
        // 方案主键
        VTYPE: c.choosePlanObj.VTYPE,
        DEALTYPE: "1",
        // 1-隐藏保存，2-排序保存
        FIELDS: C,
        ...c.MenuID
      };
      A({
        url: "sys/queryprogUserDtl/updateFields",
        method: "post",
        data: r,
        encry: !1
      }).then((B) => {
        D.$modal.msgSuccess("保存成功"), i("closeModal");
      });
    }, Q = () => {
      i("closeModal");
    }, w = d({}), j = (C) => {
      w.value = C, $.value = null;
    }, $ = d(null), _ = (C) => {
      if (w.value.BILLNO)
        switch (C) {
          case 1:
            if ($.value >= M.value.length || !w.value.BILLNO) return;
            let r = M.value.findIndex((x) => x.BILLNO == w.value.BILLNO), B = JSON.parse(JSON.stringify(p.value[r].SORTCODE));
            p.value[r].SORTCODE = $.value, p.value[$.value - 1].SORTCODE = B, g();
            break;
          case 2:
            let W = O.value.filter((x) => x.BILLNO == w.value.BILLNO), h = M.value.findIndex((x) => x.BILLNO == w.value.BILLNO);
            M.value[h] = JSON.parse(JSON.stringify(W[0]));
            break;
          case 3:
            break;
          case 4:
            let u = p.value.findIndex((x) => x.BILLNO === w.value.BILLNO) || null;
            if (u == -1 || u == 0 || !u) return;
            p.value[u].SORTCODE = p.value[u].SORTCODE - 1, p.value[u - 1].SORTCODE = p.value[u - 1].SORTCODE + 1, g();
            break;
          case 5:
            let S = p.value.findIndex((x) => x.BILLNO === w.value.BILLNO);
            if (S == p.value.length - 1) return;
            p.value[S].SORTCODE = p.value[S].SORTCODE + 1, p.value[S + 1].SORTCODE = p.value[S + 1].SORTCODE - 1, g();
            break;
        }
    };
    function g() {
      p.value.sort((C, r) => C.SORTCODE - r.SORTCODE), U(P.value);
    }
    const M = d([]), p = d([]), O = d([]), J = () => {
      const C = {
        ...c.MenuID,
        PKBILLNO: c.choosePlanObj.BILLNO
      };
      A({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: C,
        encry: !1
      }).then((r) => {
        let B = r.RESULT;
        B.forEach((W, h) => {
          B[h].SORTCODE = h + 1;
        }), p.value = JSON.parse(JSON.stringify(B)), M.value = JSON.parse(JSON.stringify(B)), O.value = JSON.parse(JSON.stringify(B));
      });
    }, P = d(""), U = (C) => {
      if (C) {
        let r = p.value.filter((B) => B.LABEL.includes(C));
        M.value = JSON.parse(JSON.stringify(r)), O.value = JSON.parse(JSON.stringify(r));
      } else
        M.value = JSON.parse(JSON.stringify(p.value)), O.value = JSON.parse(JSON.stringify(p.value));
    };
    return ce(() => c.choosePlanObj.BILLNO, (C) => {
      J();
    }, { immediate: !0 }), Fe(() => {
    }), (C, r) => {
      const B = F("el-checkbox"), W = F("el-input"), h = F("el-col"), u = F("el-button"), S = F("el-row");
      return m(), I("div", wl, [
        a(S, { gutter: "20" }, {
          default: T(() => [
            a(h, { span: 20 }, {
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
                              modelValue: b.value,
                              "onUpdate:modelValue": r[0] || (r[0] = (x) => b.value = x),
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
                      (m(!0), I(ae, null, oe(M.value, (x, re) => (m(), I("tr", {
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
            a(h, { span: 4 }, {
              default: T(() => [
                n("div", null, [
                  a(u, {
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
                  a(u, {
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
                n("div", Hl, [
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
                  a(u, {
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
        n("div", Gl, [
          a(u, {
            onClick: R,
            size: "small"
          }, {
            default: T(() => r[19] || (r[19] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(u, {
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
    const A = e, D = L, i = d(A.tabsList[0].BILLNO), c = (b, f) => {
      i.value = b.BILLNO, D("change", { data: b, index: f });
    };
    return (b, f) => (m(), I("div", Xl, [
      (m(!0), I(ae, null, oe(e.tabsList, (l, y) => (m(), I("div", {
        class: Ce(["eos-tabs-item mr-4", { active: i.value === l.BILLNO }]),
        key: y,
        onClick: (R) => c(l, y)
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
    const D = pe("request"), i = A, { proxy: c } = Ve(), b = d([
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
    const f = d("1"), l = e, y = d("all"), R = (Y) => {
      y.value == "all" ? y.value = Y : y.value = "all";
    }, Q = d(!1), w = d({});
    function j(Y) {
    }
    function $(Y) {
    }
    function _(Y) {
    }
    const g = (Y) => {
      O.value = {}, i("closeModal", Y);
    }, M = () => {
    }, p = (Y) => {
      X.value = JSON.parse(JSON.stringify(O.value)), fe();
    }, O = d({}), J = d([]), P = (Y) => {
      O.value = Y;
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
    }, U = me(() => l.showModal), C = d(!1), r = d("条件"), B = (Y) => {
      r.value = Y.data.VNAME;
    }, W = () => {
      if (!O.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (O.value.VTYPE == "0") return c.$modal.msgError("系统方案不允许修改!");
      X.value = JSON.parse(JSON.stringify(O.value));
      let Y = [];
      Y = h.value.map((q, ue) => ({
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
        }), i("updateLeftList");
      });
    }, h = d([]), u = (Y = []) => {
      Y.length && (h.value = Y), C.value = !0;
    }, S = d(null), x = () => {
      S.value.validate((Y, E) => {
        Y && fe();
      });
    }, re = () => {
      C.value = !1;
    }, X = d({}), Le = d({
      VNAME: [
        { required: !0, message: "请输入方案名称", trigger: "blur" }
      ]
    }), fe = () => {
      let Y = [];
      Y = h.value.map((q, ue) => ({
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
        VTYPE: O.value.VTYPE,
        // QUERYS: addConditionList.value,  // 如果外面没有方案，那么保存时候会走新增方案，把外层方案传过来
        QUERYS: Y
      };
      X.value.BILLNO ? D({
        url: "sys/queryprogUser/update",
        method: "post",
        data: E,
        encry: !1
      }).then((q) => {
        C.value = !1, c.$message({
          message: q.MESSAGE,
          type: "success"
        }), i("updateLeftList");
      }) : D({
        url: "sys/queryprogUser/add",
        method: "post",
        data: E,
        // encry: true
        encry: !1
      }).then((q) => {
        C.value = !1, c.$message({
          message: q.MESSAGE,
          type: "success"
        }), i("updateLeftList");
      });
    }, se = () => {
      if (!O.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (O.value.VTYPE == "0") return c.$modal.msgError("系统方案不允许修改!");
      X.value = JSON.parse(JSON.stringify(O.value)), C.value = !0;
    }, G = () => {
      if (!O.value.BILLNO) return c.$modal.msgError("请选择方案!");
      if (O.value.VTYPE == "0") return c.$modal.msgError("默认方案不支持删除!");
      const Y = {
        data: [O.value.BILLNO],
        ...l.menuID
      };
      D({
        url: "sys/queryprogUser/deleteBatchIds",
        method: "post",
        data: Y,
        encry: !1
      }).then((E) => {
        i("updateLeftList");
      });
    };
    return L({
      showSaveAs: u
    }), (Y, E) => {
      const q = F("el-popconfirm"), ue = F("el-checkbox"), be = F("CaretLeft"), Ae = F("el-icon"), Ue = F("CaretRight"), ye = F("vxe-modal"), ie = F("el-input"), Ee = F("el-form-item"), De = F("el-form"), V = F("el-button"), k = F("el-radio"), o = F("el-radio-group");
      return m(), I("div", ln, [
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
                  e.showSaveBtn ? (m(), I("div", {
                    key: 0,
                    class: "ml10 btnStyle",
                    onClick: u
                  }, "另存")) : de("", !0),
                  n("div", {
                    class: "ml10 btnStyle",
                    onClick: se
                  }, "修改"),
                  a(q, {
                    title: "确定要删除吗?",
                    onConfirm: G
                  }, {
                    reference: T(() => E[14] || (E[14] = [
                      n("div", { class: "ml10 btnStyle" }, "删除", -1)
                    ])),
                    _: 1
                  })
                ]),
                n("div", on, [
                  (m(!0), I(ae, null, oe(e.leftList, (t, v) => (m(), I("div", {
                    key: v,
                    class: Ce(["chooseLeftClass", O.value.BILLNO == t.BILLNO ? "active" : ""]),
                    onClick: (N) => P(t)
                  }, ge(t.VNAME), 11, rn))), 128))
                ]),
                a(ue, {
                  modelValue: O.value.ISDEFAULT,
                  "onUpdate:modelValue": E[0] || (E[0] = (t) => O.value.ISDEFAULT = t),
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
                y.value == "all" || y.value == "left" ? (m(), I("div", {
                  key: 0,
                  class: "btn-icon left",
                  onClick: E[1] || (E[1] = (t) => R("right"))
                }, [
                  a(Ae, { size: 18 }, {
                    default: T(() => [
                      a(be)
                    ]),
                    _: 1
                  })
                ])) : de("", !0),
                y.value == "all" || y.value == "right" ? (m(), I("div", {
                  key: 1,
                  class: "btn-icon right",
                  onClick: E[2] || (E[2] = (t) => R("left"))
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
                    tabsList: b.value,
                    onChange: B
                  }, null, 8, ["tabsList"])
                ]),
                r.value == "条件" && O.value.BILLNO ? (m(), I("div", cn, [
                  a(Rl, {
                    filterConfig: e.filterConfig,
                    filterArr: J.value,
                    choosePlanObj: O.value,
                    onCloseModal: g,
                    menuID: e.menuID,
                    queryConfig: e.queryConfig
                  }, null, 8, ["filterConfig", "filterArr", "choosePlanObj", "menuID", "queryConfig"])
                ])) : r.value == "排序" && O.value.BILLNO ? (m(), I("div", fn, [
                  a(xl, {
                    MenuID: e.menuID,
                    choosePlanObj: O.value,
                    onCloseModal: g
                  }, null, 8, ["MenuID", "choosePlanObj"])
                ])) : r.value == "显示隐藏列" && O.value.BILLNO ? (m(), I("div", mn, [
                  a(Kl, {
                    MenuID: e.menuID,
                    choosePlanObj: O.value,
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
          modelValue: C.value,
          "onUpdate:modelValue": E[9] || (E[9] = (t) => C.value = t),
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
                  ref: S,
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
                    a(V, {
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
                    a(V, {
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
                  ref: S,
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
                    a(V, {
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
                    a(V, {
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
}, gn = /* @__PURE__ */ Te(yn, [["__scopeId", "data-v-2b6d0325"]]), Cn = ["onClick"], Vn = { class: "advancedQuery-alone" }, bn = { class: "oneLine" }, Rn = { class: "advancedQuery-rightBtn" }, hn = { style: { border: "1px solid #ccc" } }, Un = {
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
    const D = pe("request"), i = pe("resolution");
    pe("storeModules");
    const { proxy: c } = Ve(), b = me(() => i.value.AdcPaddingTop), f = me(() => i.value.AdcBottom), l = d(!1), y = A, R = e, Q = d({});
    function w(V) {
      Q.value = V, y("openModal", V);
    }
    const j = d({});
    function $(V) {
      j.value = V, y("openSettingModal", V);
    }
    const _ = d(!1), g = me(() => {
      let k = (document.documentElement.clientWidth - 40 - 61 - 156) / 386;
      return 386 * Math.floor(k);
    }), M = () => {
      _.value = !0;
    }, p = (V) => {
      _.value = !1, V != null && V.isQuerySearch && y("handleCustomPlan", {
        type: "1",
        PROGRAMID: V.PROGRAMID,
        QUERYS: V.QUERYS,
        DATA: V.DATA
      });
    }, O = d([]), J = d(1), P = d([]), U = d([]), C = d(null), r = d({}), B = d([]), W = d(null), h = (V, k, o = !1) => {
      C.value = V == null ? void 0 : V.BILLNO, r.value = V;
      let t = {
        ...R.menuID,
        PKBILLNO: V == null ? void 0 : V.BILLNO,
        VTYPE: "0"
      };
      D({
        url: "/sys/queryprogUserDtl/getSubList",
        method: "post",
        data: t,
        encry: !1
      }).then((v) => {
        P.value = v.RESULT, O.value = JSON.parse(JSON.stringify(v.RESULT)), fe.value = JSON.parse(JSON.stringify(v.RESULT)), W.value && W.value.updateCurrentQueryList(v.RESULT), S.value.filterSeceletArr.length == 0 && (S.value.filterSeceletArr = JSON.parse(JSON.stringify(P.value))), o ? k == 1 && y("handleCustomPlan", {
          type: "1",
          PROGRAMID: C.value
        }) : setTimeout(() => {
          u();
        }, 200);
      });
    };
    function u() {
      let V = O.value.map((k) => ({
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
        PROGRAMID: C.value,
        QUERYS: V
      });
    }
    const S = d({
      filterSeceletArr: [],
      filterSeceletArr1: []
    });
    ce(
      () => R.queryConfig,
      (V) => {
        V && V.length && (S.value.filterSeceletArr = R.queryConfig.filter(
          (k) => k.ISSHOW != 0
        ));
      },
      { immediate: !0 }
    ), ce(
      () => R.sonEosFilterObj,
      (V) => {
        if (!V || !V.DEFAULTVAL) return;
        let k = JSON.parse(JSON.stringify(O.value));
        k[Q.value.currentIndex].DEFAULTVAL = (V == null ? void 0 : V.DEFAULTVAL) || "", k[Q.value.currentIndex].DEFAULTVAL2 = (V == null ? void 0 : V.DEFAULTVAL2) || "", V.openModalType == "search" ? se.value && se.value.updateCurrentQueryList(k) : V.openModalType == "setting" && W.value && W.value.updateCurrentQueryList(k);
      },
      { immediate: !0 }
    ), d(null), d(!1);
    const x = () => {
      re.value.hidePanel();
    }, re = d(null), X = () => {
      re.value.showPanel();
    }, Le = (V) => {
      J.value = 1, O.value = JSON.parse(JSON.stringify(V));
    }, fe = d([]), se = d(null), G = (V) => {
      J.value = 2, fe.value = JSON.parse(JSON.stringify(V)), se.value && se.value.updateCurrentQueryList(V);
    }, Y = d(null), E = () => {
      B.value && r.value.VTYPE == 1 ? ue() : Y.value.showSaveAs(O.value);
    }, q = () => {
      h(r.value, 1, !0);
    }, ue = () => {
      let V = [];
      V = O.value.map((o, t) => ({
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
        BILLNO: C.value,
        // 方案主键
        // VTYPE:0,
        QUERYS: V,
        ...R.menuID
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
        data: R.menuID,
        encry: !1
      }).then((V) => {
        if (B.value = V.RESULT, P.value = [], O.value = [], fe.value = [], se.value && se.value.updateCurrentQueryList([]), B.value.length) {
          let k = B.value.filter((o) => o.ISDEFAULT == 1);
          C.value || (C.value = k.length ? k[0].BILLNO : B.value[0].BILLNO, h(k.length ? k[0] : B.value[0], 0));
        }
      });
    }, Ae = d(R.heightType == 1 ? "34px" : R.heightType == 2 ? "68px" : "34px"), Ue = () => {
      Ae.value = Ae.value == "auto" ? R.heightType == 1 ? "34px" : R.heightType == 2 ? "68px" : "34px" : "auto", y("updateHeight");
    }, ye = (V, k, o) => {
      P.value[o] = JSON.parse(JSON.stringify(V));
    }, ie = (V) => {
      P.value.push(V), P.value = JSON.parse(JSON.stringify(P.value));
    }, Ee = () => {
      P.value = JSON.parse(JSON.stringify(U.value)), re.value.hidePanel();
    }, De = (V) => {
      P.value.splice(V, 1), y("updateHeight", V);
    };
    return ce(
      () => R.menuID,
      (V) => {
        C.value = null, be();
      },
      { immediate: !0 }
    ), L({
      openShowModal: M,
      clostPopver: x
    }), Fe(() => {
    }), (V, k) => {
      const o = F("el-divider"), t = F("el-button"), v = F("vxe-pulldown"), N = F("Icon"), z = F("el-icon");
      return m(), I("div", {
        class: "advancedQuery",
        style: Ne({ paddingTop: b.value + "px" })
      }, [
        n("div", {
          class: "disflex advancedQuery-alone advancedQuery-aloneTop",
          style: Ne({ marginBottom: f.value + "px" })
        }, [
          k[5] || (k[5] = n("div", { class: "advancedQuery-title" }, "我的方案", -1)),
          (m(!0), I(ae, null, oe(B.value, (H, K) => (m(), I("div", {
            class: Ce(["currentRadio", C.value == H.BILLNO ? "active" : ""]),
            key: K,
            onClick: (ne) => h(H, 1)
          }, ge(H.VNAME), 11, Cn))), 128))
        ], 4),
        n("div", Vn, [
          k[8] || (k[8] = n("div", { class: "advancedQuery-title" }, "快捷过滤", -1)),
          n("div", bn, [
            a(cl, {
              ref_key: "filtrationComRef",
              ref: se,
              filterConfig: S.value,
              filterArr: P.value,
              class: "oneLine-left",
              style: Ne({ height: Ae.value, maxWidth: g.value + "px" }),
              onChangeFilter: ye,
              chooseRadioObj: r.value,
              onChangeCurrentQueryList: Le,
              settingArr: fe.value,
              onInputEnter: u,
              onOpenModal: w
            }, null, 8, ["filterConfig", "filterArr", "style", "chooseRadioObj", "settingArr"]),
            n("div", Rn, [
              n("img", {
                onClick: u,
                title: "搜索",
                src: pt,
                alt: ""
              }),
              a(v, {
                ref_key: "pulldownRef",
                ref: re,
                "popup-class-name": "dropdown-table",
                transfer: "",
                style: { "max-width": "400px" }
              }, {
                default: T(() => [
                  l.value ? (m(), I("img", {
                    key: 0,
                    onClick: X,
                    onMouseover: k[0] || (k[0] = (H) => l.value = !0),
                    onMouseout: k[1] || (k[1] = (H) => l.value = !1),
                    style: { transform: "translateY(4px)", "margin-left": "10px" },
                    class: "ml-10",
                    src: At,
                    alt: ""
                  }, null, 32)) : (m(), I("img", {
                    key: 1,
                    onClick: X,
                    onMouseover: k[2] || (k[2] = (H) => l.value = !0),
                    onMouseout: k[3] || (k[3] = (H) => l.value = !1),
                    style: { transform: "translateY(4px)", "margin-left": "10px" },
                    class: "ml-10",
                    src: Dt,
                    alt: ""
                  }, null, 32))
                ]),
                dropdown: T(() => [
                  n("div", hn, [
                    a(El, {
                      ref_key: "settingFilterRef",
                      ref: W,
                      filterConfig: S.value,
                      filterArr: P.value,
                      onChangeCondition: ie,
                      onResetCondition: Ee,
                      onDelFilterArr: De,
                      onChangeFilter: ye,
                      onChangeCurrentQueryList: G,
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
              e.showSaveBtn ? (m(), I("div", {
                key: 0,
                class: "ml8 btnStyle",
                onClick: E
              }, "保存")) : de("", !0),
              n("div", {
                class: "btnStyle ml8",
                onClick: q
              }, "重置"),
              P.value.length > 1 ? (m(), te(z, {
                key: 1,
                color: "#0055ff",
                size: 12,
                class: "ml8 cp foldOUnfoldIcon",
                onClick: k[4] || (k[4] = (H) => Ue())
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
          filterConfig: S.value,
          onCloseModal: p,
          queryConfig: e.queryConfig
        }, null, 8, ["menuID", "showModal", "leftList", "showSaveBtn", "filterConfig", "queryConfig"])
      ], 4);
    };
  }
}, xe = /* @__PURE__ */ Te(In, [["__scopeId", "data-v-b485a42e"]]);
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
    const D = pe("request"), { proxy: i } = Ve(), c = A, b = e, f = d([]), l = d([]);
    ce(
      () => b.filterArr,
      (h) => {
        l.value = h, f.value = h.map((u) => u.BILLNO ? u : {
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
    const y = d([]), R = d([]), Q = d([]), w = d({}), j = d(!0);
    ce(
      () => b.queryConfig,
      (h) => {
        let u = h.filter((S) => S.ISSHOW == 0);
        y.value = u.filter((S) => S.REVERFIELD == "SYS_ORG_CODE"), y.value.length && (R.value = JSON.parse(y.value[0].VCODE)), Q.value = u.filter((S) => S.REVERFIELD == "" && S.CONTROLS == "ExSelect"), Q.value = Q.value.map((S) => ({
          ...S,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function $(h) {
      w.value[y.value[0].REVERFIELD] = "";
    }
    function _(h) {
      j.value = !1;
    }
    me(() => ({
      ...b.filterArr[0],
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
    const g = d({}), M = (h, u) => {
      g.value = u;
    }, p = () => {
      l.value.push({}), f.value.push({});
    }, O = (h = null) => {
      (h || (g.value || g.value == 0) && typeof g.value == "number") && (l.value.splice(h || g.value, 1), f.value.splice(h || g.value, 1), g.value = null);
    }, J = () => {
      l.value = [], f.value = [];
    }, P = () => {
      (g.value || g.value == 0) && (l.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, U = () => {
      (g.value || g.value == 0) && (l.value.push(l.value[g.value]), f.value.push(f.value[g.value]));
    }, C = (h, u, S) => {
      l.value[S] = JSON.parse(JSON.stringify(h));
    }, r = () => {
      let h = [];
      h = f.value.map((S, x) => ({
        FIELD: S.FIELD,
        LABEL: S.LABEL,
        QUERYTYPE: S.QUERYTYPE,
        DEFAULTVAL: S.DEFAULTVAL,
        DEFAULTVAL2: S.DEFAULTVAL2,
        SORTCODE: S.SORTCODE,
        DEFAULTVALArr: S.DEFAULTVALArr,
        QRYCONT: S.QRYCONT,
        QRYPRE: S.QRYPRE,
        QRYSUF: S.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const u = {
        BILLNO: b.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: h,
        ...w.value,
        ...b.menuID
      };
      D({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: u,
        encry: !1
      }).then((S) => {
        i.$modal.msgSuccess("保存成功");
        let x = {
          isQuerySearch: !0,
          QUERYS: h,
          DATA: w.value,
          PROGRAMID: b.choosePlanObj.BILLNO
        };
        c("closeModal", x);
      });
    }, B = () => f.value.map((u, S) => ({
      FIELD: u.FIELD,
      LABEL: u.LABEL,
      QUERYTYPE: u.QUERYTYPE,
      DEFAULTVAL: u.DEFAULTVAL,
      DEFAULTVAL2: u.DEFAULTVAL2,
      SORTCODE: u.SORTCODE,
      DEFAULTVALArr: u.DEFAULTVALArr,
      QRYCONT: u.QRYCONT,
      QRYPRE: u.QRYPRE,
      QRYSUF: u.QRYSUF,
      VTYPE: b.hideBtn ? u.VTYPE || 1 : "1"
    })), W = () => {
      c("closeModal");
    };
    return L({ confirmData: B, allDel: J }), (h, u) => {
      const S = F("el-option"), x = F("el-select"), re = F("el-checkbox"), X = F("Icon"), Le = F("el-icon"), fe = F("eos-form"), se = F("el-button");
      return m(), I("div", Nn, [
        y.value.length ? (m(), I("div", Fn, [
          u[3] || (u[3] = n("div", { class: "mr10" }, "可选组织", -1)),
          n("div", null, [
            a(x, {
              modelValue: w.value[y.value[0].REVERFIELD],
              "onUpdate:modelValue": u[0] || (u[0] = (G) => w.value[y.value[0].REVERFIELD] = G),
              style: { width: "300px" },
              onChange: _
            }, {
              default: T(() => [
                (m(!0), I(ae, null, oe(R.value, (G) => (m(), te(S, {
                  key: G.VALUE,
                  label: G.LABEL,
                  value: G.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          a(re, {
            onChange: $,
            class: "ml20",
            modelValue: j.value,
            "onUpdate:modelValue": u[1] || (u[1] = (G) => j.value = G),
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
            onClick: O
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
          (m(!0), I(ae, null, oe(l.value, (G, Y) => (m(), I("div", {
            key: Y,
            class: Ce(["oneLIne", g.value == Y ? "active" : ""]),
            onClick: (E) => M(G, Y)
          }, [
            n("div", Bn, [
              a(Me, {
                filterConfig: e.filterConfig,
                filterVal: G,
                formData: f.value[Y],
                "onUpdate:formData": (E) => f.value[Y] = E,
                onChangeFilter: (E) => C(E, G, Y),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              a(Le, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => O(Y)
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
          "onUpdate:modelValue": u[2] || (u[2] = (G) => w.value = G),
          config: Q.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? de("", !0) : (m(), I("div", xn, [
          a(se, {
            size: "small",
            onClick: r
          }, {
            default: T(() => u[4] || (u[4] = [
              ee("确定")
            ])),
            _: 1
          }),
          a(se, {
            size: "small",
            onClick: W
          }, {
            default: T(() => u[5] || (u[5] = [
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
  it(e, L);
}, it = (e, L) => {
  const A = me(() => Ye(e));
  for (const D in e)
    L.config.globalProperties[`$${D}`] = A.value[D];
}, Pe = (e, L) => {
  Pe.installed || (Pe.installed = !0, Pn.map((A) => {
    e.component(A.name, A);
  }), L && it(L, e));
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
