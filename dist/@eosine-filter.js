import { defineComponent as it, openBlock as O, createElementBlock as U, createElementVNode as l, getCurrentInstance as Le, ref as m, computed as ce, watch as re, onMounted as be, resolveComponent as N, createVNode as r, withCtx as S, createCommentVNode as se, Fragment as ae, renderList as oe, createBlock as ne, createSlots as dt, withModifiers as _e, unref as he, withKeys as je, normalizeStyle as Ve, withDirectives as Pe, vModelText as ct, inject as fe, createTextVNode as Z, normalizeClass as pe, toDisplayString as Ae, vShow as $e } from "vue";
const ft = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACN0lEQVRIid3VT0gUYRjH8e/7zu5saX8WDFtllVLJil0Q0g5RCSJRh0DoIJTdWisIOlZQSGxB/+gWiB2ii/0XQi8JSSRCJBIsWxFhuTjZmkqSmu7uzDsdZInIHTdlO/g7zvsMn3mf9+Ed8fKddeDCg2RbfFL5yUF8XmkM3G1oFrUts8O5QtIxp0cMmWsEwLWm2C9zjaSz8iBXNkV5OoTq3dSUSyqLJWM/bN4aivZekzdDKitIVJ6esZ0KqsslVw7raBK6IxYfvig2rBNUl2ns3iq588LkZlcKaxHPcUc+r6A15KEnanHxUZKZxO+1NkzqAhpXj+j8TNjcemY6Qo5nFG7U+fxNca79TySdnqjFpY4kJ/e52VIklgatz4M92zRudDq35Wm/xeCozf4q5+POCAVKJJayicQWP+yBTxZVm5wHOONqvkcwl4K51KIOkzPg0pxrMkIf44p8j6Cs0Ln3AMFSSWzMcXgzQ7Exm6/fFY27nHu/uVCws0LS+95aGqRsCD9JcXSvi9rtC5etXQ3XmnSiw4ruyBIhmB/fe30mrSEP5w+5CZRIdBcUeQUHd2h0nVlFsFQjPuncNsjiZgCoD2qcbXDjL5DYto0QgkTK5n6fyetBxfUmnc4Bi5aHyeVB6fgLBBUbBeNTEBtXTM3OP68pl7Qd9/D4lcnljoXHNKtLNR1jwsaY+Pu7+gcVJ24nOFbnzvjuP+1oOVl5P77/B/m80sg1Yk6PGDLcqDfnEvN5pTH6/FTzL6ETzt+QtLb8AAAAAElFTkSuQmCC", vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACx0lEQVRIieWWX0hTURzHf/duzX8PWzJEMkofchKNNoiyfwouknZfSiJTCpRiICSGsvmkghJWCCo9qU/qhXEJsR58CSPnn6lgZpjTCbqJIqnEBHd37+52z6+HGPSQd0xYf+gL5+mc8/ucc/h9f79DjXvkW02c1Pt1n5yEJChbR2+1lWtsUNwibLo8shURIRljbElmiluETTDU8ZgsSGwY6nikk/Fcv9J/DnJ5CGN2CLzZIfAuD2ES2auOt+D9onzbv4f5D66rX43MRyua7mqeIAI1Mh+9f+mM5gM7Hq3Ny6K8FqPqzZFBo4vynfbhSKcpl55mnoueQBD1jy3HXgAA1T4sdc37xGumXHraOUVqAACUYIog/y7mm/Nod8dDTeXkCinNyaT8eVmUFwDgdX3qxe0AnrpqoN81DEhO/x7mK8VS9JEgYbqlVfBNrsg3EREOBNRy7oiNc0dsBwJqEREmluVSS6uwLkqYdiQfuTyEaeaknkAQ9SeOUxtBEbRlHeLHuTVSNLdGiso6xI9BEbQ5mdTGPo/6Jk7qVUyQw25ksof4odlotXebGBEROHfEZh8Ms7F5+2CY5dwRGyKCd5sYh2aj1SZ7iP97K0NnVUr5zKpcUtElun27aLCa1dyCnxQ6WIl1sBK74CeFVrOa8+1iQWW3ODWzKpd0VaXcO5SklAyihGmWVsE3sSyXxksGQcJ0pWRQBPWNRhrr+8POWMD1HWKIza3vkILYAer7w86+0UijEkjRR7lZ1KpzitQ0DEjOzxukMBBEvfNp6hUAoCq7xUldBvXt/Gl6ZsFPLlvNKk4pliLohlE1DPDDuM8qNI+aOannyya5AABQck71tq1cY2MnorVWs4qLV4ISanxjSzJjsod4kz3Ejy3JTCKNL25R/VnFZ+mRTy/TMhLZE9Of99G/C8rW0VuJdstE5PIQJltHb1G/6wP5HWOJ7WdRKhKDAAAAAElFTkSuQmCC", mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADG0lEQVRIid2W3UtTYRzHf5umbWe2HTge59mL22IamdNalOl8aYFayzAQrQi6CCwp+z/qpsArvehKmAsjI40mNi23nBeiLiYuYW9nO50dl3Ny9uIU1kUIEmw1y6K+8Nw9z/fDD37fLw/HSzIXLVbHIBtLSOEAJEB4Ab1O0wNPjZOklwxdSqfTcBDH4w8ZnhonSS4bS0jLpPjrg5gGAEAhw8fZWELKPSjA9/r/QPm5XPaSjOGNZf4ZAECbXtulkOHjvw3k9oU6NjbZ8urjyv5Pbup6U13VfUinOatu6pqUwKYcTk+fSChwqcpKRvcNcvvoqzNzy4/FODo79Hx6OZlMYVrN0YcAwHk/53xCPV/XleLo7McVXy8AQDZYVtBGNFZeiqMfWppP3vAH11qPCPhekRBxAQB0XWk4w7IJuUyCTZinF4wbm2w5QElGr6zLoKlU9n9mIufIYLhFLik28/mFtNPl73G6/D0Iv/CzTIJN+INrrSEmcrb6uLI/m1dGkJdkDFNWx0AymcKKBDxfantHODw6Mx+k1xuD9Hrj8OjMfGp7R1gk4PsSWynMYnUMeknGkDPojWX+mZTALJ3t9XUiIeJadVPdYhy1tzTV3GxpqrkpxlH7qpvqRoXISufl+nopgVl2NzIn0O9WRlCbXtsdoML6kVe2DxvRWIVaRZhoJlI78W5xaOLd4hDNRGrVKsIUicaOjYzZbAEqrG/Ta7sy+WXcOoUMH5MR2FsqtK7bZOMKkRBxXeto0K66qW4AgOa6E/cKDuVHaTZSyyssCJ/Xae7k53HjOU8EALDk9DwQ46hdLik2+4NrrfH4lriyQj5YWSEfjMW3Sv3BtVa5pNhcgqNzDqenL5tX1hyJhMinjyu+XvP0gpFmIrXJZArrbK+vAwDOyJjNeriw4IsYR+00EzmnVhKmfYNUZeIXAN+Ce6Gh+vaU1THAhKOnAQBUcvFLvU7Ts7Ts6VMrCdMvVdBeGACAWkUM7y3VvDxu4lTV0Uc/8vgp0F4pZPj43VsXkVze7Orv5+jfBQkQXiBbGf6qvCRjECC8AOdPfSC/Aqx/lY5V+/Y+AAAAAElFTkSuQmCC", ze = "", Lt = "";
function Et(...e) {
  const c = ref({});
  return e.forEach((v, n) => {
    c.value[v] = [];
    const o = ze().getDict(v);
    o && Object.keys(o).length != 0 ? c.value[v] = o : Lt(v).then((t) => {
      c.value[v] = t.RESULT, ze().setDict(v, c.value[v]);
    });
  }), toRefs(c.value);
}
var At = typeof global == "object" && global && global.Object === Object && global, pt = typeof self == "object" && self && self.Object === Object && self, lt = At || pt || Function("return this")(), Ue = lt.Symbol, nt = Object.prototype, Dt = nt.hasOwnProperty, Ot = nt.toString, Ce = Ue ? Ue.toStringTag : void 0;
function Tt(e) {
  var c = Dt.call(e, Ce), v = e[Ce];
  try {
    e[Ce] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ot.call(e);
  return n && (c ? e[Ce] = v : delete e[Ce]), o;
}
var St = Object.prototype, gt = St.toString;
function yt(e) {
  return gt.call(e);
}
var Ct = "[object Null]", Vt = "[object Undefined]", Je = Ue ? Ue.toStringTag : void 0;
function bt(e) {
  return e == null ? e === void 0 ? Vt : Ct : Je && Je in Object(e) ? Tt(e) : yt(e);
}
function Rt(e) {
  return e != null && typeof e == "object";
}
var ht = "[object Symbol]";
function It(e) {
  return typeof e == "symbol" || Rt(e) && bt(e) == ht;
}
var Ut = /\s/;
function Nt(e) {
  for (var c = e.length; c-- && Ut.test(e.charAt(c)); )
    ;
  return c;
}
var Ft = /^\s+/;
function kt(e) {
  return e && e.slice(0, Nt(e) + 1).replace(Ft, "");
}
function we(e) {
  var c = typeof e;
  return e != null && (c == "object" || c == "function");
}
var qe = NaN, Bt = /^[-+]0x[0-9a-f]+$/i, Yt = /^0b[01]+$/i, xt = /^0o[0-7]+$/i, Pt = parseInt;
function He(e) {
  if (typeof e == "number")
    return e;
  if (It(e))
    return qe;
  if (we(e)) {
    var c = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = we(c) ? c + "" : c;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = kt(e);
  var v = Yt.test(e);
  return v || xt.test(e) ? Pt(e.slice(2), v ? 2 : 8) : Bt.test(e) ? qe : +e;
}
var Ye = function() {
  return lt.Date.now();
}, wt = "Expected a function", Mt = Math.max, Qt = Math.min;
function _t(e, c, v) {
  var n, o, t, T, f, a, D = 0, k = !1, F = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(wt);
  c = He(c) || 0, we(v) && (k = !!v.leading, F = "maxWait" in v, t = F ? Mt(He(v.maxWait) || 0, c) : t, x = "trailing" in v ? !!v.trailing : x);
  function _(Y) {
    var V = n, u = o;
    return n = o = void 0, D = Y, T = e.apply(u, V), T;
  }
  function Q(Y) {
    return D = Y, f = setTimeout(B, c), k ? _(Y) : T;
  }
  function $(Y) {
    var V = Y - a, u = Y - D, h = c - V;
    return F ? Qt(h, t - u) : h;
  }
  function g(Y) {
    var V = Y - a, u = Y - D;
    return a === void 0 || V >= c || V < 0 || F && u >= t;
  }
  function B() {
    var Y = Ye();
    if (g(Y))
      return L(Y);
    f = setTimeout(B, $(Y));
  }
  function L(Y) {
    return f = void 0, x && n ? _(Y) : (n = o = void 0, T);
  }
  function y() {
    f !== void 0 && clearTimeout(f), D = 0, n = a = o = f = void 0;
  }
  function j() {
    return f === void 0 ? T : L(Ye());
  }
  function w() {
    var Y = Ye(), V = g(Y);
    if (n = arguments, o = this, a = Y, V) {
      if (f === void 0)
        return Q(a);
      if (F)
        return clearTimeout(f), f = setTimeout(B, c), _(a);
    }
    return f === void 0 && (f = setTimeout(B, c)), T;
  }
  return w.cancel = y, w.flush = j, w;
}
/*! Element Plus Icons Vue v2.3.1 */
var jt = /* @__PURE__ */ it({
  name: "Search",
  __name: "search",
  setup(e) {
    return (c, v) => (O(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), $t = jt;
const zt = "", Jt = "";
function Me(e) {
  if (!e && typeof e != "object")
    throw new Error("error arguments", "deepClone");
  const c = e.constructor === Array ? [] : {};
  return Object.keys(e).forEach((v) => {
    e[v] && typeof e[v] == "object" ? c[v] = Me(e[v]) : c[v] = e[v];
  }), c;
}
function qt(e, c = !1, v = {}) {
  if (!Array.isArray(e)) return {};
  let n = { EnumData: {}, _getDICT: {} };
  return e.forEach((o) => {
    let { FIELD: t, CONTROLS: T, REVERFIELD: f } = o;
    if (t = Ge(t), f = Ge(f), t != "") {
      switch (T) {
        case "ExNumber":
          n[t] = o.DEFAULTVAL ? o.DEFAULTVAL : null;
          break;
        case "ExRegion":
          n[t + "Arr"] = [], n[t] = "";
          break;
        case "ExDate":
          n[t] = Te(o.DEFAULTVAL, "str", o.SLOTCFG);
          break;
        case "ExDateRange":
          n[t] = Te(o.DEFAULTVAL, "arr", o.SLOTCFG).join(","), n.EnumData[t] = Te(o.DEFAULTVAL, "arr", o.SLOTCFG), n[t + "Arr"] = Te(o.DEFAULTVAL, "arr", o.SLOTCFG);
          break;
        case "ExDateTime":
          o.DEFAULTVAL ? o.DEFAULTVAL == "000" ? n[t] = Te("0", "str", "datetime") : n[t] = Te(o.DEFAULTVAL, "str") + " 23:59:59" : n[t] = "";
          break;
        case "ExDateTimeRange":
          let [a, D] = Te(o.DEFAULTVAL ? o.DEFAULTVAL : 0, "datetimearr");
          n.EnumData[t] = a ? [a, D] : [], n[t] = a ? `${a},${D}` : "", n[t + "Arr"] = a ? [a, D] : [];
          break;
        case "ExSelectSearch":
          n.EnumData[t] = [], n[t] = c ? "DATAVALUETOINDEX-1" : ge(o.DEFAULTVAL);
          break;
        case "ExSelectContainer":
          n.EnumData[t] = [], n.EnumData[t + "isShow"] = !1, n[t] = "";
          break;
        case "ExSelectGroup":
          n.EnumData[t] = [], n[t] = ge(o.DEFAULTVAL);
          break;
        case "ExRadioButton":
        case "ExSelect":
          if (!Object.hasOwn(n.EnumData, t) && !Object.hasOwn(n._getDICT, t)) {
            let { EnumData: k, _getDICT: F } = We(t, o.OTHER);
            Object.assign(n.EnumData, k), Object.assign(n._getDICT, F);
          }
          n[t] = c ? "DATAVALUETOINDEX-1" : ge(o.DEFAULTVAL);
          break;
        case "ExSelectMultiple":
          if (!Object.hasOwn(n.EnumData, t && !Object.hasOwn(n._getDICT, t))) {
            let { EnumData: k, _getDICT: F } = We(t, o.OTHER);
            Object.assign(n.EnumData, k), Object.assign(n._getDICT, F);
          }
          n[t] = ge(o.DEFAULTVAL), n[t + "Arr"] = o.DEFAULTVAL ? o.DEFAULTVAL.split(",") : [];
          break;
        case "ExSelectMutiple":
          n[t] = ge(o.DEFAULTVAL), n[t + "Arr"] = [];
          break;
        case "ExCheckbox":
          n[t + "Arr"] = [], n[t] = "", n.EnumData[t] = Ie(o.OTHER);
          break;
        case "ExRadio":
          n[t] = o.DEFAULTVAL || "", n.EnumData[t] = o.OTHER ? Ie(o.OTHER) : [];
          break;
        case "ExSwitch":
          n[t] = o.DEFAULTVAL == "1" ? "1" : "0";
          break;
        case "ExUpload":
        case "ExUploadFile":
          n[t] = "", n[t + "Arr"] = [];
          break;
        case "ExQueryType":
          n[t] = [];
          break;
        case "ExTabs":
          break;
        case "subTable":
          n[t] = [];
          break;
        default:
          o.VTYPE == "exNum" && (n.EnumData[t] = o.OTHER ? Ie(o.OTHER) : []), n[t] = ge(o.DEFAULTVAL);
          break;
      }
      o.DEFAULTVAL && o.DEFAULTVAL.includes("QDATA") && (n[t] = v && v[o.DEFAULTVAL.replace("QDATA.", "")] ? v[o.DEFAULTVAL.replace("QDATA.", "")] : ""), f && (n[f] = "");
    }
  }), n;
}
function Ge(e) {
  if (e) {
    if (typeof e == "string")
      return e.split(/[\t\r\f\n\s]*/g).join("");
    console.error(
      `${typeof e} is not the expected type, but the string type is expected`
    );
  }
}
function We(e, c) {
  let v = {}, n = {};
  if (c && c.indexOf("${") === 0 && c.charAt(c.length - 1) == "}") {
    let o = c.substring(2, c.length - 1);
    v[e] = zt(o)[o];
  } else
    n[e] = Ie(c);
  return { _getDICT: v, EnumData: n };
}
function Te(e, c = "str", v = "date") {
  if (!e) return c == "str" ? "" : [];
  if (e == "0" || Number(e))
    return c != "str" ? c == "datetime" || c == "datetimearr" ? [`${ye(Number(e), v)} ${xe(null, !1)}`, `${ye(0, v)} ${xe(null)}`] : [ye(Number(e), v), ye(0, v)] : ye(Number(e), v);
  {
    let n = [e], o = [];
    if (c != "str") {
      let [t, T = "0"] = e.split("@");
      n = [t, T];
    }
    for (let t = 0; t < n.length; t++) {
      const [T, f = ""] = n[t].split("T");
      let a = "", D = xe(f, t == 1);
      T == "0" || Number(T) ? a = ye(Number(T), v) : a = Ht(T);
      let k = c == "datetime" || c == "datetimearr" ? `${a} ${D}` : a;
      o.push(k);
    }
    return c != "str" ? o : o.join();
  }
}
function Ht(e) {
  let [c = "0y", v = "0m", n = "0d"] = e.split(","), o = [c, v, n], t = [];
  function T(f) {
    return f < 10 ? "0" + f : f;
  }
  for (let f = 0; f < o.length; f++) {
    const a = o[f];
    if (a == null) continue;
    let D;
    if (Number(a))
      D = a * 1 < 10 ? "0" + a : a;
    else {
      let k = a.slice(0, a.length - 1), F = a.slice(-1);
      D = at(Number(k), F), D <= 0 && (D = T(12 + D), t[f - 1] = t[f - 1] - 1);
    }
    t[f] = D;
  }
  return t.join("-");
}
function xe(e, c = !0) {
  if (!e) return c ? "23:59:59" : "00:00:00";
  let [v, n, o] = e.split(":"), t = [v, n, o], T = "";
  for (let f = 0; f < t.length; f++) {
    const a = t[f];
    if (a != null)
      if (Number(a) || Number(a) == "0")
        T += (Number(a) < 10 ? "0" + Number(a) : Number(a)) + ":";
      else {
        let D = a.slice(0, a.length - 1), k = a.slice(-1);
        T += at(Number(D), k) + ":";
      }
  }
  return T.slice(0, T.length - 1);
}
function at(e, c) {
  let v = /* @__PURE__ */ new Date(), n = "";
  switch (c) {
    case "y":
      n = v.getFullYear() + e;
      break;
    case "m":
      n = v.getMonth() + 1 + e;
      break;
    case "d":
      n = v.getDate() + e;
      break;
  }
  return n > 0 && n < 10 ? "0" + n : n;
}
function ge(e = "") {
  if (e == null || e == "" || e.includes("TREE")) return "";
  if (!e.includes("U$")) return e;
  let c = e.substring(2, e.length);
  const v = Jt().userInfo;
  return v ? v[c] : "";
}
function Ie(e) {
  return e ? Array.isArray(e) || (e = e.includes("[") ? JSON.parse(e) : [], Array.isArray(e)) ? e : [] : [];
}
function ye(e = 0, c = "date") {
  var v = parseInt(e), n = /* @__PURE__ */ new Date();
  n.setDate(n.getDate() + v);
  var o = n.getFullYear(), t = n.getMonth() + 1, T = n.getDate(), f = n.getHours(), a = n.getMinutes(), D = n.getSeconds();
  function k(F) {
    return F < 10 ? "0" + F : F;
  }
  return c == "year" ? String(o) : c == "month" ? String(k(t)) : c == "datetime" ? `${o}-${k(t)}-${k(T)} ${k(f)}:${k(
    a
  )}:${k(D)}` : o + "-" + k(t) + "-" + k(T);
}
const me = (e, c) => {
  const v = e.__vccOpts || e;
  for (const [n, o] of c)
    v[n] = o;
  return v;
}, Gt = { class: "filterForm" }, Wt = {
  key: 0,
  class: "firstSelect ml10 mr10"
}, Kt = { class: "firstSelect mr10" }, Xt = { class: "mr10" }, Zt = { style: { width: "160px" } }, el = { class: "selectmodal-tools" }, tl = {
  key: 1,
  class: "firstSelect ml10 mr10"
}, ll = {
  key: 2,
  class: "firstSelect mr10"
}, nl = {
  key: 3,
  class: "mr10"
}, al = {
  key: 4,
  class: "firstSelect mr10"
}, Ke = "CDate,LDate,TDate,LWork,CWork,LMonth,CMonth,TMonth,CDateQ,CDateH", Xe = "CDateQNQ,CDateQNH,CDateHNQ,CDateHNH", ol = {
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
    }
  },
  emits: ["update:formData", "changeFilter", "inputEnter"],
  setup(e, { emit: c }) {
    const { proxy: v } = Le(), n = c, o = e, t = m("mini"), T = ce(() => o.filterConfig.filterSeceletArr), f = m([]), a = ce(() => o.filterVal), D = m(null);
    m("1");
    const k = m([]);
    m(null), m([{}, {}, { label: "222" }]);
    const F = (C) => {
      let i = C.value, R = T.value.filter((z) => z.FIELD == i);
      o.formData.LABEL = R[0].LABEL;
      try {
        f.value = R[0].VCODE ? JSON.parse(R[0].VCODE) : [];
      } catch {
      }
      n("changeFilter", R[0] || {});
    };
    re(
      () => o.filterVal,
      (C) => {
        if (D.value = C.BILLNO, C.CONTROLS == "ExSelect")
          if (C.OTHER && C.OTHER.indexOf("${") === 0 && C.OTHER.charAt(C.OTHER.length - 1) == "}") {
            let i = C.OTHER.substring(2, C.OTHER.length - 1);
            k.value = Et(i);
          } else
            k.value = JSON.parse(C.OTHER);
      },
      { immediate: !0 }
    );
    const x = () => {
      n("inputEnter");
    };
    m({}), m(!1);
    const _ = m(null);
    m(null);
    const Q = m(), $ = m({}), g = m({}), B = m([]), L = m(1), y = m(10), j = m({
      tableColumns: [],
      hasTableTools: !1,
      hasSeq: !1,
      toolsConfig: [],
      loading: !1,
      width: "500px",
      height: "auto"
    }), w = {
      // 下拉表格类 默认大小
      selectTableSize: ["360px", "280px"],
      // 下拉表格类 默认列表配置
      selectTableColumn: [
        { LABEL: "编码", FIELD: "BILLNO", WIDTH: 150, ISSHOW: "1" },
        { LABEL: "名称", FIELD: "VNAME", WIDTH: 200, ISSHOW: "1" }
      ]
    }, Y = (C, i) => {
      if (!o.formData) return !1;
      let R = {};
      R[C] = i.join(","), Object.assign(o.formData.DEFAULTVAL, R);
    }, V = () => {
      L.value = 1, B.value = [], u(a.value, null);
    }, u = (C, i) => {
      var le;
      const { FIELD: R, CONTROLS: z, OTHER: G, SLOT: ee, REVERFIELD: X } = C;
      if (z != "ExSelect" && z != "ExSelectMultiple" ? I(G) : J.value = [], (z == "ExSelectModal" || z == "ExSelectTable" && i == null) && (delete g.value[R], o.formData.DEFAULTVAL = "", (le = _ == null ? void 0 : _.value) == null || le.hidePanel(), B.value = []), i != "" && i != null)
        switch (z) {
          case "ExSelectTable":
          case "ExSelectModal":
            g.value[R] = Me(i), X ? o.formData.DEFAULTVAL = i == null ? "" : Array.isArray(i) ? i.map((A) => A[X]).join(",") : i[X] : o.formData.DEFAULTVAL = i == null ? "" : Array.isArray(i) ? i.map((A) => A == null ? void 0 : A.VNAME).join(",") : i == null ? void 0 : i.VNAME, setTimeout(() => {
              var A;
              (A = _ == null ? void 0 : _.value) == null || A.hidePanel(), L.value = 1, B.value = [];
            }, 200);
            break;
        }
      else
        Y(R, []);
    }, h = _t((C = !1) => {
      C || (L.value = 1), b(a.value, C);
    }, 300), W = (C) => {
      let { FIELD: i, OTHER: R, SLOTCFG: z } = C;
      if (z == "" || R == "") return console.error("Err:filterForm:useSelectTable配置错误");
      if (Q.value != i) {
        Q.value = i;
        let G = [];
        try {
          let q = JSON.parse(z), { MODULEID: M, PAGEID: Ee, STYLE: De, COL: Se } = q;
          G = [M, Ee, De, Se];
        } catch {
          G = z.split(",");
        }
        if (G.length < 2) return console.error("Err:@eosine/form:useSelectTable配置错误");
        let [ee, X, le, A] = G, s = le ? le.split("*") : ["500px", "300px"];
        j.value.width = s[0], j.value.height = s[1], j.value.columns = A ? SET_CustemModalCOL(A) : w.selectTableColumn, $.value = {
          PK_MODULE: ee,
          BILLNO: X,
          CUSTOMPLAN: []
        }, b(C, !1);
        return;
      } else
        b(C, !1);
    }, b = (C, i = !1) => {
      if (!v.$getData) return console.error("Err:@eosine/form:globalConfig 缺少getData全局方法");
      let { FIELD: R, OTHER: z, SLOTCFG: G } = C;
      if (Q.value != R || !$.value.PK_MODULE) return W(C);
      let { url: ee, data: X, importantData: le } = I(z), { PK_MODULE: A, BILLNO: s, CUSTOMPLAN: q } = $.value, M = [];
      try {
        let Oe = JSON.parse(G), { MODULEID: st, PAGEID: rt, STYLE: ut } = Oe;
        M = [st, rt, ut];
      } catch {
        M = G.split(",");
      }
      if (M.length < 2) return console.error("Error: 配置错误");
      let [Ee, De, Se] = M, de = Se ? Se.split("*") : w.selectTableSize;
      j.value.width = de[0], j.value.height = de[1];
      const Re = o.formData.DEFAULTVAL;
      i ? L.value++ : L.value = 1;
      let Qe = {
        KEYWORD: Re,
        PAGENUM: L.value,
        PAGESIZE: y.value,
        SORTNAME: "",
        SORTORDER: "",
        MODULEID: A,
        PAGEID: s,
        PROGRAMID: q && q.length > 0 ? q[0].BILLNO : "",
        // 查询方案ID
        // QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: keyword, QUERYTYPE: "Like" }], // 查询方案-查询结构
        QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: Re, QUERYTYPE: "FUZZYRET" }],
        // 查询方案-查询结构
        ...X,
        ...le
      };
      v.$getData({
        url: ee,
        method: "post",
        data: Qe,
        headers: {
          repeatSubmit: !1
        }
      }).then((Oe) => {
        i ? Oe.RESULT.RECORDS.length > 0 && (B.value = B.value.concat(Oe.RESULT.RECORDS)) : B.value = Oe.RESULT.RECORDS;
      }).catch((Oe) => {
        B.value = [];
      }).finally(() => {
        _.value.showPanel();
      });
    };
    function d(C) {
      return !!(o.ENABLESTATE == 1 && C);
    }
    const p = ce(() => {
      if (Ke.includes(o.formData.QUERYTYPE))
        return o.formData.DEFAULTVAL = "", "0";
      if (Xe.includes(o.formData.QUERYTYPE))
        return "1";
    });
    re(() => o.formData.QUERYTYPE, (C) => {
      Ke.includes(o.formData.QUERYTYPE) ? (p.value = "0", o.formData.DEFAULTVAL = "") : Xe.includes(o.formData.QUERYTYPE) && (p.value = "1");
    });
    const P = (C) => {
      let { LABEL: i, SLOTCFG: R, OTHER: z } = C, G = "70%", ee = "60%";
      if (R == "") return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let X = [];
      try {
        let q = JSON.parse(R), { MODULE: M, PAGEID: Ee, STYLE: De = "70%*60%" } = q;
        X = [M, Ee, De];
      } catch {
        X = R.split(",");
      }
      if (X.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
      let { data: le, importantData: A } = I(z);
      if (X.length == 3) {
        let q = X[2].split("*");
        if (q.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
        G = q[0], ee = q[1];
      }
      return {
        _config: Me(C),
        title: i,
        width: G,
        height: ee,
        params: { ...le, ...A },
        page: {
          MODULEID: X[0],
          PAGEID: X[1]
        }
      };
    }, ie = m({});
    function K() {
      let C = P(a.value);
      C.contnet = "table", C.currentIndex = o.currentIndex, n("openModal", C), ie.value = C;
    }
    m(null);
    const ve = () => {
      try {
        return JSON.parse(a.value.VCODE);
      } catch {
        return [];
      }
    }, ue = () => {
      ["ExSelectMultiple", "ExSelectMutiple", "ExCheckbox", "ExRegion", "ExArea", "ExDateRange", "ExDateTimeRange", "ExDate"].includes(a.value.CONTROLS) && o.formData.DEFAULTVAL && o.formData.DEFAULTVAL != "" && (o.formData.DEFAULTVALArr = o.formData.DEFAULTVAL.split(","));
    };
    function te(C) {
      a.value.CONTROLS == "ExDateRange" || a.value.CONTROLS == "ExDateTimeRange" || a.QUERYTYPE == "Between" || a.QUERYTYPE == "NotBetween" ? o.formData.DEFAULTVAL = C ? C.join(",") : "" : o.formData.DEFAULTVAL = C || "";
    }
    const J = m([]);
    function I(C) {
      if (!C)
        return J.value = [], { url: "", data: {}, importantData: {} };
      try {
        let i = Array.isArray(JSON.parse(C)) ? JSON.parse(C)[0] : JSON.parse(C);
        if (i.setvalue && JSON.stringify(i.setvalue) != "{}") {
          let R = [];
          for (const z in i.setvalue)
            R.push({ k: z, v: i.setvalue[z] });
          J.value = R;
        }
        return {
          url: i.url,
          data: i == null ? void 0 : i.params,
          importantData: i == null ? void 0 : i.importantData
        };
      } catch (i) {
        if (C.indexOf("/") == "0") {
          let R = C.split("?"), z = "", G = {}, ee = {};
          if (R.length == 0)
            z = C, J.value = [];
          else if (R.length > 0) {
            if (z = R[0], R.length > 1) {
              let { obj: X, importantObj: le } = H("a?" + R[1], "obj");
              G = X, ee = le;
            }
            R.length > 2 && (H("a?" + R[2], "obj"), G = { ...G, ...E() }, ee = {
              ...ee,
              ...E()
            }), J.value = R[3] ? H("a?" + R[3], "arr") : [];
          }
          return { url: z, data: G, importantData: ee };
        } else
          console.error("配置解析错误!", i);
      }
    }
    function E(C) {
      return {};
    }
    function H(C, i) {
      let R = /([^&?=]+)=([^&?=]+)/g, z = {}, G = {}, ee = [];
      return C.replace(R, function() {
        if (arguments[1].includes("!")) {
          let le = arguments[1].substr(1);
          G[le] = arguments[2];
        } else
          z[arguments[1]] = arguments[2];
        let X = {};
        X.k = arguments[1], X.v = arguments[2], ee.push(X);
      }), i == "obj" ? { obj: z, importantObj: G } : ee;
    }
    return be(() => {
      ue();
    }), (C, i) => {
      const R = N("vxe-option"), z = N("vxe-select"), G = N("el-date-picker"), ee = N("el-input"), X = N("el-button"), le = N("eos-table"), A = N("vxe-pulldown");
      return O(), U("div", Gt, [
        e.isCondition ? (O(), U("div", Wt, [
          r(z, {
            transfer: "",
            "popper-class": "popperClass",
            modelValue: e.formData.QRYPRE,
            "onUpdate:modelValue": i[0] || (i[0] = (s) => e.formData.QRYPRE = s),
            placeholder: "",
            style: { width: "50px" },
            size: t.value
          }, {
            default: S(() => [
              r(R, {
                label: "(",
                value: "("
              }),
              r(R, {
                label: "((",
                value: "(("
              }),
              r(R, {
                label: "(((",
                value: "((("
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : se("", !0),
        l("div", Kt, [
          r(z, {
            transfer: "",
            modelValue: e.formData.FIELD,
            "onUpdate:modelValue": i[1] || (i[1] = (s) => e.formData.FIELD = s),
            placeholder: "请选择",
            style: { width: "100px" },
            size: t.value,
            onChange: F,
            disabled: d(e.formData.FIELD)
          }, {
            default: S(() => [
              (O(!0), U(ae, null, oe(T.value, (s) => (O(), ne(R, {
                key: s.FIELD,
                label: s.LABEL,
                value: s.FIELD
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "disabled"])
        ]),
        l("div", Xt, [
          r(z, {
            transfer: "",
            disabled: d(e.formData.QUERYTYPE),
            modelValue: e.formData.QUERYTYPE,
            "onUpdate:modelValue": i[2] || (i[2] = (s) => e.formData.QUERYTYPE = s),
            placeholder: "请选择",
            style: { width: "90px" },
            size: t.value
          }, {
            default: S(() => [
              (O(!0), U(ae, null, oe(ve(), (s) => (O(), ne(R, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["disabled", "modelValue", "size"])
        ]),
        l("div", Zt, [
          a.value.CONTROLS == "ExDateRange" || a.value.QUERYTYPE == "DateRange" || a.value.QUERYTYPE == "Between" || a.value.QUERYTYPE == "NotBetween" ? (O(), ne(G, {
            key: 0,
            modelValue: e.formData.DEFAULTVALArr,
            "onUpdate:modelValue": i[3] || (i[3] = (s) => e.formData.DEFAULTVALArr = s),
            "unlink-panels": "",
            type: "daterange",
            clearable: "",
            "value-format": "YYYY-MM-DD",
            "range-separator": "至",
            style: { width: "100%" },
            placeholder: "请选择",
            onChange: i[4] || (i[4] = (s) => te(s)),
            onClear: i[5] || (i[5] = (s) => te(null))
          }, null, 8, ["modelValue"])) : p.value == "0" || p.value == "1" ? (O(), ne(ee, {
            key: 1,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": i[6] || (i[6] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "请输入",
            disabled: p.value == "0",
            type: "number"
          }, null, 8, ["modelValue", "disabled"])) : a.value.CONTROLS == "ExDate" ? (O(), ne(G, {
            key: 2,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": i[7] || (i[7] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            style: { width: "100%" },
            placeholder: "请选择",
            "value-format": "YYYY-MM-DD"
          }, null, 8, ["modelValue"])) : a.value.CONTROLS == "ExDateTime" ? (O(), ne(G, {
            key: 3,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": i[8] || (i[8] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            type: "datetime",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            style: { width: "100%" }
          }, null, 8, ["modelValue"])) : a.value.CONTROLS == "ExDateTimeRange" ? (O(), ne(G, {
            key: 4,
            modelValue: e.formData.DEFAULTVALArr,
            "onUpdate:modelValue": i[9] || (i[9] = (s) => e.formData.DEFAULTVALArr = s),
            clearable: "",
            "unlink-panels": "",
            type: "datetimerange",
            "range-separator": "至",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            style: { width: "100%" },
            onChange: i[10] || (i[10] = (s) => te(s)),
            onClear: i[11] || (i[11] = (s) => te(null))
          }, null, 8, ["modelValue"])) : a.value.CONTROLS == "ExSelect" ? (O(), ne(z, {
            key: 5,
            transfer: "",
            placeholder: "请选择",
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": i[12] || (i[12] = (s) => e.formData.DEFAULTVAL = s),
            clearable: "",
            style: { width: "100%" },
            size: t.value
          }, {
            default: S(() => [
              (O(!0), U(ae, null, oe(k.value, (s) => (O(), ne(R, {
                key: s.VALUE,
                label: s.LABEL,
                value: s.VALUE
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size"])) : a.value.CONTROLS == "ExSelectModal" ? (O(), ne(A, {
            key: 6,
            ref_key: "DropdownRef",
            ref: _,
            "popup-class-name": "selectmodal",
            "destroy-on-close": "",
            transfer: !0
          }, dt({
            default: S(() => [
              r(ee, {
                modelValue: e.formData.DEFAULTVAL,
                "onUpdate:modelValue": i[14] || (i[14] = (s) => e.formData.DEFAULTVAL = s),
                type: "text",
                clearable: "",
                onClear: i[15] || (i[15] = (s) => V()),
                onKeydown: [
                  i[16] || (i[16] = _e((s) => he(h)(!1), ["stop"])),
                  je(x, ["enter"])
                ]
              }, {
                append: S(() => [
                  r(X, {
                    icon: he($t),
                    onClick: i[13] || (i[13] = _e((s) => K(), ["stop"]))
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            dropdown: S(() => [
              l("div", {
                style: Ve(`width:${j.value.width ? j.value.width : "100%"}`)
              }, [
                r(le, {
                  config: j.value,
                  modelValue: B.value,
                  "onUpdate:modelValue": i[17] || (i[17] = (s) => B.value = s),
                  onDbClick: i[18] || (i[18] = (s) => u(a.value, s))
                }, null, 8, ["config", "modelValue"])
              ], 4)
            ]),
            _: 2
          }, [
            B.value.length > 0 ? {
              name: "footer",
              fn: S(() => [
                l("div", el, [
                  l("span", {
                    class: "selectmodal-tools-item",
                    onClick: i[19] || (i[19] = (s) => he(h)(!0))
                  }, "更多")
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1536)) : (O(), ne(ee, {
            key: 7,
            modelValue: e.formData.DEFAULTVAL,
            "onUpdate:modelValue": i[20] || (i[20] = (s) => e.formData.DEFAULTVAL = s),
            style: { width: "100%" },
            placeholder: "输入关键字后回车查询",
            onKeyup: je(x, ["enter"])
          }, null, 8, ["modelValue"]))
        ]),
        e.isCondition ? (O(), U("div", tl, [
          r(z, {
            transfer: "",
            modelValue: e.formData.QRYSUF,
            "onUpdate:modelValue": i[21] || (i[21] = (s) => e.formData.QRYSUF = s),
            placeholder: "",
            style: { width: "50px" },
            size: t.value
          }, {
            default: S(() => [
              r(R, {
                label: ")",
                value: ")"
              }),
              r(R, {
                label: "))",
                value: "))"
              }),
              r(R, {
                label: ")))",
                value: ")))"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : se("", !0),
        e.isCondition ? (O(), U("div", ll, [
          r(z, {
            transfer: "",
            modelValue: e.formData.QRYCONT,
            "onUpdate:modelValue": i[22] || (i[22] = (s) => e.formData.QRYCONT = s),
            placeholder: "",
            style: { width: "80px" },
            size: t.value
          }, {
            default: S(() => [
              r(R, {
                label: "并且",
                value: "and"
              }),
              r(R, {
                label: "或者",
                value: "or"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : se("", !0),
        e.hideBtn ? (O(), U("div", nl, [
          Pe(l("input", {
            "onUpdate:modelValue": i[23] || (i[23] = (s) => e.formData.SORTCODE = s),
            style: { width: "60px" },
            class: "vxe-input type--text size--mini is--controls is--suffix"
          }, null, 512), [
            [ct, e.formData.SORTCODE]
          ])
        ])) : se("", !0),
        e.hideBtn ? (O(), U("div", al, [
          r(z, {
            transfer: "",
            modelValue: e.formData.VTYPE,
            "onUpdate:modelValue": i[24] || (i[24] = (s) => e.formData.VTYPE = s),
            placeholder: "",
            style: { width: "100px" },
            size: t.value
          }, {
            default: S(() => [
              r(R, {
                label: "高级查询",
                value: "1"
              }),
              r(R, {
                label: "快捷过滤",
                value: "0"
              })
            ]),
            _: 1
          }, 8, ["modelValue", "size"])
        ])) : se("", !0)
      ]);
    };
  }
}, Be = /* @__PURE__ */ me(ol, [["__scopeId", "data-v-3e5d30cb"]]), sl = { class: "" }, rl = {
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
  setup(e, { expose: c, emit: v }) {
    const n = v, o = e, t = m({}), T = m([]);
    be(() => {
      t.value = qt(o.filterConfig.filterSeceletArr);
    });
    function f(F) {
      n("openModal", F);
    }
    const a = () => {
      n("inputEnter");
    };
    function D(F) {
      T.value = F;
    }
    const k = (F, x, _) => {
      n("changeFilter", F, x, _);
    };
    return re(() => o.filterArr, (F) => {
      T.value = F.map((x) => x.BILLNO ? x : {
        FIELD: "",
        QUERYTYPE: "",
        DEFAULTVAL: "",
        DEFAULTVAL2: "",
        SORTCODE: "",
        DEFAULTVALArr: ""
      });
    }, { immediate: !0, deep: !0 }), re(() => T.value, (F) => {
      n("changeCurrentQueryList", F);
    }, { immediate: !0, deep: !0 }), re(() => o.settingArr, (F) => {
    }, { immediate: !0, deep: !0 }), c({
      updateCurrentQueryList: D
    }), (F, x) => (O(), U("div", sl, [
      (O(!0), U(ae, null, oe(e.filterArr, (_, Q) => (O(), U("div", {
        key: Q,
        class: "mb10 oneLine-left-alone"
      }, [
        r(Be, {
          filterConfig: e.filterConfig,
          filterVal: _,
          formData: T.value[Q],
          "onUpdate:formData": ($) => T.value[Q] = $,
          ENABLESTATE: e.chooseRadioObj.ENABLESTATE,
          onChangeFilter: ($) => k($, _, Q),
          onInputEnter: a,
          onOpenModal: f,
          currentIndex: Q
        }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "ENABLESTATE", "onChangeFilter", "currentIndex"])
      ]))), 128))
    ]));
  }
}, ul = /* @__PURE__ */ me(rl, [["__scopeId", "data-v-48f0fde7"]]), il = { class: "settingFilter" }, dl = { class: "disflex" }, cl = {
  class: "disflex",
  style: { "min-width": "430px" }
}, fl = {
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
  setup(e, { expose: c, emit: v }) {
    fe("request");
    const n = v, o = e, t = m([]), T = ce(() => o.filterConfig.filterSeceletArr), f = m(null), a = (Q) => {
      let $ = T.value.filter((g) => g.BILLNO == Q.value);
      n("changeCondition", $[0] || {});
    };
    function D(Q) {
      n("openModal", Q);
    }
    const k = () => {
      f.value = null, n("resetCondition");
    }, F = (Q, $) => {
      n("delFilterArr", $);
    }, x = (Q) => {
      t.value = Q;
    }, _ = (Q, $, g) => {
      n("changeFilter", Q, $, g);
    };
    return re(() => o.filterArr, (Q) => {
      Q.forEach(($, g) => {
        t.value[g] || (t.value[g] = {}), t.value[g].FIELD = Q[g].FIELD;
      });
    }, { immediate: !0 }), c({
      updateCurrentQueryList: x
    }), (Q, $) => {
      const g = N("Icon"), B = N("el-icon"), L = N("vxe-option"), y = N("vxe-select"), j = N("el-button");
      return O(), U("div", il, [
        (O(!0), U(ae, null, oe(e.filterArr, (w, Y) => (O(), U("div", {
          key: Y,
          class: "aloneFilter mb10"
        }, [
          l("div", dl, [
            r(Be, {
              filterConfig: e.filterConfig,
              filterVal: w,
              class: "mr10",
              formData: t.value[Y],
              "onUpdate:formData": (V) => t.value[Y] = V,
              onChangeFilter: (V) => _(V, w, Y),
              onOpenModal: D,
              currentIndex: Y
            }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "currentIndex"]),
            l("div", null, [
              Y != 0 ? (O(), ne(B, {
                key: 0,
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (V) => F(w, Y)
              }, {
                default: S(() => [
                  r(g, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : (O(), ne(B, {
                key: 1,
                color: "#fff",
                size: 20
              }, {
                default: S(() => [
                  r(g, { icon: "zondicons:minus-solid" })
                ]),
                _: 1
              }))
            ])
          ])
        ]))), 128)),
        l("div", cl, [
          r(y, {
            modelValue: f.value,
            "onUpdate:modelValue": $[0] || ($[0] = (w) => f.value = w),
            transfer: "",
            style: { width: "100px" },
            placeholder: "请输入条件",
            size: "mini",
            onChange: a
          }, {
            default: S(() => [
              (O(!0), U(ae, null, oe(e.filterConfig.filterSeceletArr, (w) => (O(), ne(L, {
                key: w.BILLNO,
                label: w.LABEL,
                value: w.BILLNO
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          r(j, {
            type: "primary",
            link: "",
            class: "ml5",
            onClick: k
          }, {
            default: S(() => $[1] || ($[1] = [
              Z(" 重置条件 ")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, vl = /* @__PURE__ */ me(fl, [["__scopeId", "data-v-b2435eed"]]);
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ze;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ze || (Ze = {}));
var et;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(et || (et = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var tt;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(tt || (tt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ml = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ll = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function El() {
  return fe(ml);
}
function Al(e) {
  return fe(Ll);
}
const pl = { class: "container" }, Dl = {
  key: 0,
  class: "disflex ml20"
}, Ol = { class: "content" }, Tl = ["onClick"], Sl = { class: "disflex" }, gl = {
  key: 1,
  class: "tr"
}, yl = {
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
  setup(e, { expose: c, emit: v }) {
    const n = fe("request"), { proxy: o } = Le(), t = v, T = e, f = m([]), a = m([]);
    re(
      () => T.filterArr,
      (b) => {
        a.value = b, f.value = b.map((d) => d.BILLNO ? d : {
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
    const D = m([]), k = m([]), F = m([]), x = m({}), _ = m(!0);
    re(
      () => T.queryConfig,
      (b) => {
        let d = b.filter((p) => p.ISSHOW == 0);
        D.value = d.filter((p) => p.REVERFIELD == "SYS_ORG_CODE"), D.value.length && (k.value = JSON.parse(D.value[0].VCODE)), F.value = d.filter((p) => p.REVERFIELD == "" && p.CONTROLS == "ExSelect"), F.value = F.value.map((p) => ({
          ...p,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function Q(b) {
      x.value[D.value[0].REVERFIELD] = "";
    }
    function $(b) {
      _.value = !1;
    }
    ce(() => ({
      ...T.filterArr[0],
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
    const g = m({}), B = (b, d) => {
      g.value = d;
    }, L = () => {
      a.value.push({}), f.value.push({});
    }, y = (b = null) => {
      (b || (g.value || g.value == 0) && typeof g.value == "number") && (a.value.splice(b || g.value, 1), f.value.splice(b || g.value, 1), g.value = null);
    }, j = () => {
      a.value = [], f.value = [];
    }, w = () => {
      (g.value || g.value == 0) && (a.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, Y = () => {
      (g.value || g.value == 0) && (a.value.push(a.value[g.value]), f.value.push(f.value[g.value]));
    }, V = (b, d, p) => {
      a.value[p] = JSON.parse(JSON.stringify(b));
    }, u = () => {
      let b = [];
      b = f.value.map((p, P) => ({
        FIELD: p.FIELD,
        LABEL: p.LABEL,
        QUERYTYPE: p.QUERYTYPE,
        DEFAULTVAL: p.DEFAULTVAL,
        DEFAULTVAL2: p.DEFAULTVAL2,
        SORTCODE: p.SORTCODE,
        DEFAULTVALArr: p.DEFAULTVALArr,
        QRYCONT: p.QRYCONT,
        QRYPRE: p.QRYPRE,
        QRYSUF: p.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const d = {
        BILLNO: T.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: b,
        ...x.value,
        ...T.menuID
      };
      n({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: d,
        encry: !1
      }).then((p) => {
        o.$modal.msgSuccess("保存成功");
        let P = {
          isQuerySearch: !0,
          QUERYS: b,
          DATA: x.value,
          PROGRAMID: T.choosePlanObj.BILLNO
        };
        t("closeModal", P);
      });
    }, h = () => f.value.map((d, p) => ({
      FIELD: d.FIELD,
      LABEL: d.LABEL,
      QUERYTYPE: d.QUERYTYPE,
      DEFAULTVAL: d.DEFAULTVAL,
      DEFAULTVAL2: d.DEFAULTVAL2,
      SORTCODE: d.SORTCODE,
      DEFAULTVALArr: d.DEFAULTVALArr,
      QRYCONT: d.QRYCONT,
      QRYPRE: d.QRYPRE,
      QRYSUF: d.QRYSUF,
      VTYPE: T.hideBtn ? d.VTYPE || 1 : "1"
    })), W = () => {
      t("closeModal");
    };
    return c({ confirmData: h, allDel: j }), (b, d) => {
      const p = N("el-option"), P = N("el-select"), ie = N("el-checkbox"), K = N("Icon"), ve = N("el-icon"), ue = N("eos-form"), te = N("el-button");
      return O(), U("div", pl, [
        D.value.length ? (O(), U("div", Dl, [
          d[3] || (d[3] = l("div", { class: "mr10" }, "可选组织", -1)),
          l("div", null, [
            r(P, {
              modelValue: x.value[D.value[0].REVERFIELD],
              "onUpdate:modelValue": d[0] || (d[0] = (J) => x.value[D.value[0].REVERFIELD] = J),
              style: { width: "300px" },
              onChange: $
            }, {
              default: S(() => [
                (O(!0), U(ae, null, oe(k.value, (J) => (O(), ne(p, {
                  key: J.VALUE,
                  label: J.LABEL,
                  value: J.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          r(ie, {
            onChange: Q,
            class: "ml20",
            modelValue: _.value,
            "onUpdate:modelValue": d[1] || (d[1] = (J) => _.value = J),
            label: "所有组织",
            size: "large"
          }, null, 8, ["modelValue"])
        ])) : se("", !0),
        l("div", { class: "disflex mt-10 mb-10" }, [
          l("div", {
            class: "mr10 btnStyle ml-10",
            onClick: L
          }, "新增行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: y
          }, "删除行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: j
          }, "全部删除"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: w
          }, "插入行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: Y
          }, "复制行")
        ]),
        l("div", Ol, [
          (O(!0), U(ae, null, oe(a.value, (J, I) => (O(), U("div", {
            key: I,
            class: pe(["oneLIne", g.value == I ? "active" : ""]),
            onClick: (E) => B(J, I)
          }, [
            l("div", Sl, [
              r(Be, {
                filterConfig: e.filterConfig,
                filterVal: J,
                formData: f.value[I],
                "onUpdate:formData": (E) => f.value[I] = E,
                onChangeFilter: (E) => V(E, J, I),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              r(ve, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => y(I)
              }, {
                default: S(() => [
                  r(K, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ], 10, Tl))), 128))
        ]),
        r(ue, {
          ref: "FormRef",
          modelValue: x.value,
          "onUpdate:modelValue": d[2] || (d[2] = (J) => x.value = J),
          config: F.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? se("", !0) : (O(), U("div", gl, [
          r(te, {
            size: "small",
            onClick: u
          }, {
            default: S(() => d[4] || (d[4] = [
              Z("确定")
            ])),
            _: 1
          }),
          r(te, {
            size: "small",
            onClick: W
          }, {
            default: S(() => d[5] || (d[5] = [
              Z("取消")
            ])),
            _: 1
          })
        ]))
      ]);
    };
  }
}, Cl = /* @__PURE__ */ me(yl, [["__scopeId", "data-v-5f94987e"]]), Vl = { class: "sortModule" }, bl = { class: "contrHeight" }, Rl = { style: { width: "220px" } }, hl = ["onClick"], Il = { style: { width: "100%" } }, Ul = ["onClick"], Nl = { class: "tr" }, Fl = {
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
  setup(e, { emit: c }) {
    const v = fe("request"), { proxy: n } = Le(), o = c, t = e, T = m({}), f = m({}), a = m([]), D = (B) => {
      T.value = B;
    }, k = (B) => {
      f.value = B;
    }, F = () => {
      let B = a.value.map((y) => ({
        FIELD: y.FIELD,
        SORTFLAG: y.SORTFLAG
      }));
      const L = {
        BILLNO: t.choosePlanObj.BILLNO,
        // 方案主键
        VTYPE: t.choosePlanObj.VTYPE,
        FIELDS: B,
        ...t.MenuID
      };
      v({
        url: "/sys/queryprogUser/updateSortFields",
        method: "post",
        data: L,
        encry: !1
      }).then((y) => {
        n.$modal.msgSuccess("保存成功"), o("closeModal");
      });
    }, x = () => {
      o("closeModal");
    }, _ = (B) => {
      switch (B) {
        case 1:
          T.value.BILLNO && !a.value.find((h) => h.BILLNO == T.value.BILLNO) && a.value.push(T.value);
          break;
        case 2:
          let L = a.value.findIndex((h) => h.BILLNO === f.value.BILLNO) || null;
          if (L == -1) return;
          a.value.splice(L, 1), f.value = {};
          break;
        case 3:
          a.value = [], f.value = {};
          break;
        case 4:
          let y = a.value.findIndex((h) => h.BILLNO === f.value.BILLNO) || null;
          if (y == -1 || y == 0 || !y) return;
          let j = JSON.parse(JSON.stringify(a.value[y])), w = JSON.parse(JSON.stringify(a.value[y - 1]));
          a.value.splice(y, 1, w), a.value.splice(y - 1, 1, j);
          break;
        case 5:
          let Y = a.value.findIndex((h) => h.BILLNO === f.value.BILLNO);
          if (Y == a.value.length - 1) return;
          let V = JSON.parse(JSON.stringify(a.value[Y])), u = JSON.parse(JSON.stringify(a.value[Y + 1]));
          a.value.splice(Y, 1, u), a.value.splice(Y + 1, 1, V);
          break;
      }
    }, Q = m([]), $ = () => {
      const B = {
        ...t.MenuID,
        PKBILLNO: t.choosePlanObj.BILLNO
      };
      v({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: B,
        encry: !1
      }).then((L) => {
        Q.value = L.RESULT, g();
      });
    }, g = () => {
      const B = {
        ...t.MenuID,
        PKBILLNO: t.choosePlanObj.BILLNO,
        BILLNO: t.choosePlanObj.BILLNO
      };
      v({
        url: "/sys/queryprogUser/getSortFieldList",
        method: "post",
        data: B,
        encry: !1
      }).then((L) => {
        a.value = L.RESULT, a.value.forEach((y, j) => {
          let w = Q.value.find((Y) => Y.FIELD == y.FIELD);
          a.value[j].LABEL = w.LABEL, a.value[j].BILLNO = w.BILLNO;
        });
      });
    };
    return re(() => t.choosePlanObj.BILLNO, (B) => {
      $();
    }, { immediate: !0 }), be(() => {
    }), (B, L) => {
      const y = N("el-col"), j = N("el-button"), w = N("el-option"), Y = N("el-select"), V = N("el-row");
      return O(), U("div", Vl, [
        r(V, null, {
          default: S(() => [
            r(y, { span: 8 }, {
              default: S(() => [
                l("div", bl, [
                  l("table", Rl, [
                    L[5] || (L[5] = l("thead", null, [
                      l("tr", null, [
                        l("td", null, "字段")
                      ])
                    ], -1)),
                    l("tbody", null, [
                      (O(!0), U(ae, null, oe(Q.value, (u) => (O(), U("tr", {
                        key: u.BILLNO,
                        class: pe(u.BILLNO == T.value.BILLNO ? "active" : ""),
                        onClick: (h) => D(u)
                      }, [
                        l("td", null, Ae(u.LABEL), 1)
                      ], 10, hl))), 128))
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            r(y, { span: 4 }, {
              default: S(() => [
                l("div", null, [
                  r(j, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: L[0] || (L[0] = (u) => _(1))
                  }, {
                    default: S(() => L[6] || (L[6] = [
                      Z("加入")
                    ])),
                    _: 1
                  })
                ]),
                l("div", null, [
                  r(j, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: L[1] || (L[1] = (u) => _(2))
                  }, {
                    default: S(() => L[7] || (L[7] = [
                      Z("删除")
                    ])),
                    _: 1
                  })
                ]),
                l("div", null, [
                  r(j, {
                    type: "primary",
                    class: "mb-30",
                    size: "small",
                    onClick: L[2] || (L[2] = (u) => _(3))
                  }, {
                    default: S(() => L[8] || (L[8] = [
                      Z("全删")
                    ])),
                    _: 1
                  })
                ]),
                l("div", null, [
                  r(j, {
                    type: "primary",
                    class: "mb-10",
                    size: "small",
                    onClick: L[3] || (L[3] = (u) => _(4))
                  }, {
                    default: S(() => L[9] || (L[9] = [
                      Z("上移")
                    ])),
                    _: 1
                  })
                ]),
                l("div", null, [
                  r(j, {
                    type: "primary",
                    size: "small",
                    onClick: L[4] || (L[4] = (u) => _(5))
                  }, {
                    default: S(() => L[10] || (L[10] = [
                      Z("下移")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            r(y, { span: 12 }, {
              default: S(() => [
                l("table", Il, [
                  L[11] || (L[11] = l("thead", null, [
                    l("tr", null, [
                      l("td", { style: { width: "50px" } }, "序号"),
                      l("td", null, "字段"),
                      l("td", { style: { width: "100px" } }, "排序方式")
                    ])
                  ], -1)),
                  l("tbody", null, [
                    (O(!0), U(ae, null, oe(a.value, (u, h) => (O(), U("tr", {
                      key: u.BILLNO,
                      class: pe(u.BILLNO == f.value.BILLNO ? "active" : ""),
                      onClick: (W) => k(u)
                    }, [
                      l("td", null, Ae(h + 1), 1),
                      l("td", null, Ae(u.LABEL), 1),
                      l("td", null, [
                        r(Y, {
                          modelValue: u.SORTFLAG,
                          "onUpdate:modelValue": (W) => u.SORTFLAG = W,
                          size: "small",
                          style: { width: "100%" }
                        }, {
                          default: S(() => [
                            r(w, {
                              label: "升序",
                              value: "AES"
                            }),
                            r(w, {
                              label: "降序",
                              value: "DESC"
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ], 10, Ul))), 128))
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        l("div", Nl, [
          r(j, {
            onClick: F,
            size: "small"
          }, {
            default: S(() => L[12] || (L[12] = [
              Z("确定")
            ])),
            _: 1
          }),
          r(j, {
            onClick: x,
            size: "small"
          }, {
            default: S(() => L[13] || (L[13] = [
              Z("取消")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, kl = /* @__PURE__ */ me(Fl, [["__scopeId", "data-v-69dccb16"]]), Bl = { class: "showHiddenModule" }, Yl = { class: "contrHeight" }, xl = { style: { width: "100%" } }, Pl = { class: "disflex" }, wl = { style: { border: "none", "background-color": "#ffffe3" } }, Ml = { style: { padding: "0" } }, Ql = ["onClick"], _l = { style: { width: "50px" } }, jl = { style: { width: "70px", "text-align": "center" } }, $l = { style: { width: "60px" } }, zl = { class: "mb-20" }, Jl = { class: "tr" }, ql = {
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
  setup(e, { emit: c }) {
    const v = fe("request"), { proxy: n } = Le(), o = c, t = e, T = m(!1), f = (V) => {
      B.value.forEach((u, h) => {
        B.value[h].IS_SHOW = V;
      });
    }, a = (V, u) => {
      let h = L.value.findIndex((W) => W.BILLNO == u.BILLNO);
      console.log("🚀 ~ file: showHiddenModule.vue:107 ~ changecheck ~ index:", h), console.log("🚀 ~ file: showHiddenModule.vue:108 ~ changecheck ~ filedListClone.value[index]:", L.value[h]), L.value[h].IS_SHOW = V;
    }, D = (V, u) => {
      let h = L.value.findIndex((W) => W.BILLNO == u.BILLNO);
      L.value[h].WIDTH = V;
    }, k = () => {
      let V = L.value;
      V.forEach((h, W) => {
        V[W].SORTCODE = String(h.SORTCODE);
      });
      const u = {
        PKBILLNO: t.choosePlanObj.BILLNO,
        // 方案主键
        VTYPE: t.choosePlanObj.VTYPE,
        DEALTYPE: "1",
        // 1-隐藏保存，2-排序保存
        FIELDS: V,
        ...t.MenuID
      };
      v({
        url: "sys/queryprogUserDtl/updateFields",
        method: "post",
        data: u,
        encry: !1
      }).then((h) => {
        n.$modal.msgSuccess("保存成功"), o("closeModal");
      });
    }, F = () => {
      o("closeModal");
    }, x = m({}), _ = (V) => {
      x.value = V, Q.value = null;
    }, Q = m(null), $ = (V) => {
      if (x.value.BILLNO)
        switch (V) {
          case 1:
            if (Q.value >= B.value.length || !x.value.BILLNO) return;
            let u = B.value.findIndex((P) => P.BILLNO == x.value.BILLNO), h = JSON.parse(JSON.stringify(L.value[u].SORTCODE));
            L.value[u].SORTCODE = Q.value, L.value[Q.value - 1].SORTCODE = h, g();
            break;
          case 2:
            let W = y.value.filter((P) => P.BILLNO == x.value.BILLNO), b = B.value.findIndex((P) => P.BILLNO == x.value.BILLNO);
            B.value[b] = JSON.parse(JSON.stringify(W[0]));
            break;
          case 3:
            break;
          case 4:
            let d = L.value.findIndex((P) => P.BILLNO === x.value.BILLNO) || null;
            if (d == -1 || d == 0 || !d) return;
            L.value[d].SORTCODE = L.value[d].SORTCODE - 1, L.value[d - 1].SORTCODE = L.value[d - 1].SORTCODE + 1, g();
            break;
          case 5:
            let p = L.value.findIndex((P) => P.BILLNO === x.value.BILLNO);
            if (p == L.value.length - 1) return;
            L.value[p].SORTCODE = L.value[p].SORTCODE + 1, L.value[p + 1].SORTCODE = L.value[p + 1].SORTCODE - 1, g();
            break;
        }
    };
    function g() {
      L.value.sort((V, u) => V.SORTCODE - u.SORTCODE), Y(w.value);
    }
    const B = m([]), L = m([]), y = m([]), j = () => {
      const V = {
        ...t.MenuID,
        PKBILLNO: t.choosePlanObj.BILLNO
      };
      v({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: V,
        encry: !1
      }).then((u) => {
        let h = u.RESULT;
        h.forEach((W, b) => {
          h[b].SORTCODE = b + 1;
        }), L.value = JSON.parse(JSON.stringify(h)), B.value = JSON.parse(JSON.stringify(h)), y.value = JSON.parse(JSON.stringify(h));
      });
    }, w = m(""), Y = (V) => {
      if (V) {
        let u = L.value.filter((h) => h.LABEL.includes(V));
        B.value = JSON.parse(JSON.stringify(u)), y.value = JSON.parse(JSON.stringify(u));
      } else
        B.value = JSON.parse(JSON.stringify(L.value)), y.value = JSON.parse(JSON.stringify(L.value));
    };
    return re(() => t.choosePlanObj.BILLNO, (V) => {
      j();
    }, { immediate: !0 }), be(() => {
    }), (V, u) => {
      const h = N("el-checkbox"), W = N("el-input"), b = N("el-col"), d = N("el-button"), p = N("el-row");
      return O(), U("div", Bl, [
        r(p, { gutter: "20" }, {
          default: S(() => [
            r(b, { span: 20 }, {
              default: S(() => [
                l("div", Yl, [
                  l("table", xl, [
                    l("thead", null, [
                      l("tr", null, [
                        u[9] || (u[9] = l("td", null, [
                          Z(" 序号 "),
                          l("span", { class: "line" })
                        ], -1)),
                        u[10] || (u[10] = l("td", null, [
                          Z(" 字段 "),
                          l("div", { class: "line" })
                        ], -1)),
                        l("td", null, [
                          l("div", Pl, [
                            r(h, {
                              modelValue: T.value,
                              "onUpdate:modelValue": u[0] || (u[0] = (P) => T.value = P),
                              "true-value": "1",
                              "false-value": "0",
                              onChange: f
                            }, null, 8, ["modelValue"]),
                            u[7] || (u[7] = l("span", { class: "ml-5" }, "显示", -1)),
                            u[8] || (u[8] = l("span", { class: "line" }, null, -1))
                          ])
                        ]),
                        u[11] || (u[11] = l("td", null, [
                          Z(" 宽度 "),
                          l("div", { class: "line" })
                        ], -1))
                      ])
                    ]),
                    l("tbody", null, [
                      l("tr", wl, [
                        u[12] || (u[12] = l("td", { style: { padding: "0" } }, null, -1)),
                        l("td", Ml, [
                          r(W, {
                            modelValue: w.value,
                            "onUpdate:modelValue": u[1] || (u[1] = (P) => w.value = P),
                            style: { width: "100%" },
                            placeholder: "过滤条件",
                            onInput: Y
                          }, null, 8, ["modelValue"])
                        ]),
                        u[13] || (u[13] = l("td", { style: { padding: "0" } }, null, -1)),
                        u[14] || (u[14] = l("td", { style: { padding: "0" } }, null, -1))
                      ]),
                      (O(!0), U(ae, null, oe(B.value, (P, ie) => (O(), U("tr", {
                        key: P.BILLNO,
                        class: pe(P.BILLNO == x.value.BILLNO ? "active" : ""),
                        onClick: (K) => _(P)
                      }, [
                        l("td", _l, Ae(P.SORTCODE), 1),
                        l("td", null, Ae(P.LABEL), 1),
                        l("td", jl, [
                          r(h, {
                            modelValue: P.IS_SHOW,
                            "onUpdate:modelValue": (K) => P.IS_SHOW = K,
                            "true-value": "1",
                            "false-value": "0",
                            onChange: (K) => a(K, P)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ]),
                        l("td", $l, [
                          r(W, {
                            modelValue: P.WIDTH,
                            "onUpdate:modelValue": (K) => P.WIDTH = K,
                            type: "number",
                            size: "small",
                            style: { width: "60px" },
                            onInput: (K) => D(K, P)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                        ])
                      ], 10, Ql))), 128))
                    ])
                  ])
                ])
              ]),
              _: 1
            }),
            r(b, { span: 4 }, {
              default: S(() => [
                l("div", null, [
                  r(d, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: u[2] || (u[2] = (P) => $(4))
                  }, {
                    default: S(() => u[15] || (u[15] = [
                      Z("上 移")
                    ])),
                    _: 1
                  })
                ]),
                l("div", null, [
                  r(d, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: u[3] || (u[3] = (P) => $(5))
                  }, {
                    default: S(() => u[16] || (u[16] = [
                      Z("下 移")
                    ])),
                    _: 1
                  })
                ]),
                u[18] || (u[18] = l("div", { class: "mb-10" }, "调至（行）", -1)),
                l("div", zl, [
                  r(W, {
                    type: "number",
                    modelValue: Q.value,
                    "onUpdate:modelValue": u[4] || (u[4] = (P) => Q.value = P),
                    size: "small",
                    onBlur: u[5] || (u[5] = (P) => $(1)),
                    style: { width: "50px" }
                  }, null, 8, ["modelValue"])
                ]),
                l("div", null, [
                  r(d, {
                    type: "primary",
                    class: "mb-20",
                    size: "small",
                    onClick: u[6] || (u[6] = (P) => $(2))
                  }, {
                    default: S(() => u[17] || (u[17] = [
                      Z("默认值")
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
        l("div", Jl, [
          r(d, {
            onClick: k,
            size: "small"
          }, {
            default: S(() => u[19] || (u[19] = [
              Z("确定")
            ])),
            _: 1
          }),
          r(d, {
            onClick: F,
            size: "small"
          }, {
            default: S(() => u[20] || (u[20] = [
              Z("取消")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
}, Hl = /* @__PURE__ */ me(ql, [["__scopeId", "data-v-9e2362fb"]]), Gl = { class: "eos-tabs flex" }, Wl = ["onClick"], Kl = {
  __name: "index",
  props: {
    // 父组件传过来的值
    tabsList: {
      type: Array,
      default: []
    }
  },
  emits: ["change"],
  setup(e, { emit: c }) {
    const v = e, n = c, o = m(v.tabsList[0].BILLNO), t = (T, f) => {
      o.value = T.BILLNO, n("change", { data: T, index: f });
    };
    return (T, f) => (O(), U("div", Gl, [
      (O(!0), U(ae, null, oe(e.tabsList, (a, D) => (O(), U("div", {
        class: pe(["eos-tabs-item mr-4", { active: o.value === a.BILLNO }]),
        key: D,
        onClick: (k) => t(a, D)
      }, Ae(a.VNAME || a.pageTitle), 11, Wl))), 128))
    ]));
  }
}, Xl = /* @__PURE__ */ me(Kl, [["__scopeId", "data-v-0a1c5dc2"]]), Zl = { class: "container" }, en = { class: "flex content" }, tn = { class: "content-left-btn flex" }, ln = { class: "content-left-main" }, nn = ["onClick"], an = { class: "splitbar-wrap" }, on = { class: "content-right" }, sn = { class: "flex" }, rn = { key: 0 }, un = { key: 1 }, dn = { key: 2 }, cn = { class: "saveAsAlone" }, fn = { class: "flex flex-items-center mt-10 grid-justify-between" }, vn = { class: "mb-8" }, mn = { class: "mb-40" }, Ln = { class: "saveAsAlone" }, En = { class: "flex flex-items-center mt-10 grid-justify-between" }, An = { class: "mb-8" }, pn = { class: "mb-40" }, Dn = { class: "disflex" }, On = {
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
  setup(e, { expose: c, emit: v }) {
    const n = fe("request"), o = v, { proxy: t } = Le(), T = m([
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
    El(), Al();
    const f = m("1"), a = e, D = m("all"), k = (I) => {
      D.value == "all" ? D.value = I : D.value = "all";
    }, F = m(!1), x = m({});
    function _(I) {
    }
    function Q(I) {
    }
    function $(I) {
    }
    const g = (I) => {
      y.value = {}, o("closeModal", I);
    }, B = () => {
    }, L = (I) => {
      K.value = JSON.parse(JSON.stringify(y.value)), ue();
    }, y = m({}), j = m([]), w = (I) => {
      y.value = I;
      const E = {
        PKBILLNO: I.BILLNO,
        ...a.menuID,
        VTYPE: "1"
      };
      n({
        url: "sys/queryprogUserDtl/getSubList",
        method: "post",
        data: E,
        encry: !1
      }).then((H) => {
        j.value = H.RESULT;
      });
    }, Y = ce(() => a.showModal), V = m(!1), u = m("条件"), h = (I) => {
      u.value = I.data.VNAME;
    }, W = () => {
      if (!y.value.BILLNO) return t.$modal.msgError("请选择方案!");
      if (y.value.VTYPE == "0") return t.$modal.msgError("默认方案不支持!");
      K.value = JSON.parse(JSON.stringify(y.value));
      let I = [];
      I = b.value.map((H, C) => ({
        FIELD: H.FIELD,
        QUERYTYPE: H.QUERYTYPE,
        DEFAULTVAL: H.DEFAULTVAL,
        DEFAULTVAL2: H.DEFAULTVAL2,
        SORTCODE: H.SORTCODE,
        DEFAULTVALArr: H.DEFAULTVALArr,
        QRYCONT: H.QRYCONT,
        QRYPRE: H.QRYPRE,
        QRYSUF: H.QRYSUF,
        SORTCODE: C,
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
        ...K.value,
        ...a.menuID,
        VTYPE: f.value,
        // QUERYS: addConditionList.value,  // 如果外面没有方案，那么保存时候会走新增方案，把外层方案传过来
        QUERYS: I
      };
      K.value.BILLNO && n({
        url: "sys/queryprogUser/update",
        method: "post",
        data: E,
        encry: !1
      }).then((H) => {
        t.$message({
          message: H.MESSAGE,
          type: "success"
        }), o("updateLeftList");
      });
    }, b = m([]), d = (I = []) => {
      I.length && (b.value = I), V.value = !0;
    }, p = m(null), P = () => {
      p.value.validate((I, E) => {
        I && ue();
      });
    }, ie = () => {
      V.value = !1;
    }, K = m({}), ve = m({
      VNAME: [
        { required: !0, message: "请输入方案名称", trigger: "blur" }
      ]
    }), ue = () => {
      let I = [];
      I = b.value.map((H, C) => ({
        FIELD: H.FIELD,
        QUERYTYPE: H.QUERYTYPE,
        DEFAULTVAL: H.DEFAULTVAL,
        DEFAULTVAL2: H.DEFAULTVAL2,
        SORTCODE: H.SORTCODE,
        DEFAULTVALArr: H.DEFAULTVALArr,
        QRYCONT: H.QRYCONT,
        QRYPRE: H.QRYPRE,
        QRYSUF: H.QRYSUF,
        SORTCODE: C,
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
        ...K.value,
        ...a.menuID,
        // VTYPE: VTYPE.value,
        VTYPE: y.value.VTYPE,
        // QUERYS: addConditionList.value,  // 如果外面没有方案，那么保存时候会走新增方案，把外层方案传过来
        QUERYS: I
      };
      K.value.BILLNO ? n({
        url: "sys/queryprogUser/update",
        method: "post",
        data: E,
        encry: !1
      }).then((H) => {
        V.value = !1, t.$message({
          message: H.MESSAGE,
          type: "success"
        }), o("updateLeftList");
      }) : n({
        url: "sys/queryprogUser/add",
        method: "post",
        data: E,
        encry: !0
      }).then((H) => {
        V.value = !1, t.$message({
          message: H.MESSAGE,
          type: "success"
        }), o("updateLeftList");
      });
    }, te = () => {
      if (!y.value.BILLNO) return t.$modal.msgError("请选择方案!");
      if (y.value.VTYPE == "0") return t.$modal.msgError("默认方案不支持修改!");
      K.value = JSON.parse(JSON.stringify(y.value)), V.value = !0;
    }, J = () => {
      if (!y.value.BILLNO) return t.$modal.msgError("请选择方案!");
      if (y.value.VTYPE == "0") return t.$modal.msgError("默认方案不支持删除!");
      const I = {
        data: [y.value.BILLNO],
        ...a.menuID
      };
      n({
        url: "sys/queryprogUser/deleteBatchIds",
        method: "post",
        data: I,
        encry: !1
      }).then((E) => {
        o("updateLeftList");
      });
    };
    return c({
      showSaveAs: d
    }), (I, E) => {
      const H = N("el-popconfirm"), C = N("el-checkbox"), i = N("CaretLeft"), R = N("el-icon"), z = N("CaretRight"), G = N("vxe-modal"), ee = N("el-input"), X = N("el-form-item"), le = N("el-form"), A = N("el-button"), s = N("el-radio"), q = N("el-radio-group");
      return O(), U("div", Zl, [
        r(G, {
          "destroy-on-close": "",
          modelValue: Y.value,
          "onUpdate:modelValue": E[3] || (E[3] = (M) => Y.value = M),
          id: "formModal",
          width: 1070,
          resize: "",
          storage: "",
          transfer: "",
          "show-zoom": "",
          onClose: g
        }, {
          title: S(() => E[13] || (E[13] = [
            l("span", { class: "modal-title" }, " 列表过滤 ", -1)
          ])),
          default: S(() => [
            l("div", en, [
              Pe(l("div", {
                class: "content-left",
                style: Ve({ width: D.value == "left" ? "98%" : "auto" })
              }, [
                l("div", tn, [
                  l("div", {
                    class: "ml10 btnStyle",
                    onClick: W
                  }, "保存"),
                  e.showSaveBtn ? (O(), U("div", {
                    key: 0,
                    class: "ml10 btnStyle",
                    onClick: d
                  }, "另存")) : se("", !0),
                  l("div", {
                    class: "ml10 btnStyle",
                    onClick: te
                  }, "修改"),
                  r(H, {
                    title: "确定要删除吗?",
                    onConfirm: J
                  }, {
                    reference: S(() => E[14] || (E[14] = [
                      l("div", { class: "ml10 btnStyle" }, "删除", -1)
                    ])),
                    _: 1
                  })
                ]),
                l("div", ln, [
                  (O(!0), U(ae, null, oe(e.leftList, (M, Ee) => (O(), U("div", {
                    key: Ee,
                    class: pe(["chooseLeftClass", y.value.BILLNO == M.BILLNO ? "active" : ""]),
                    onClick: (De) => w(M)
                  }, Ae(M.VNAME), 11, nn))), 128))
                ]),
                r(C, {
                  modelValue: y.value.ISDEFAULT,
                  "onUpdate:modelValue": E[0] || (E[0] = (M) => y.value.ISDEFAULT = M),
                  "true-value": "1",
                  class: "ml-10 mr-10",
                  label: "下次以此方案自动进入",
                  size: "large",
                  onChange: L
                }, null, 8, ["modelValue"])
              ], 4), [
                [$e, D.value == "all" || D.value == "left"]
              ]),
              l("div", an, [
                D.value == "all" || D.value == "left" ? (O(), U("div", {
                  key: 0,
                  class: "btn-icon left",
                  onClick: E[1] || (E[1] = (M) => k("right"))
                }, [
                  r(R, { size: 18 }, {
                    default: S(() => [
                      r(i)
                    ]),
                    _: 1
                  })
                ])) : se("", !0),
                D.value == "all" || D.value == "right" ? (O(), U("div", {
                  key: 1,
                  class: "btn-icon right",
                  onClick: E[2] || (E[2] = (M) => k("left"))
                }, [
                  r(R, { size: 18 }, {
                    default: S(() => [
                      r(z)
                    ]),
                    _: 1
                  })
                ])) : se("", !0)
              ]),
              Pe(l("div", on, [
                l("div", sn, [
                  r(Xl, {
                    tabsList: T.value,
                    onChange: h
                  }, null, 8, ["tabsList"])
                ]),
                u.value == "条件" && y.value.BILLNO ? (O(), U("div", rn, [
                  r(Cl, {
                    filterConfig: e.filterConfig,
                    filterArr: j.value,
                    choosePlanObj: y.value,
                    onCloseModal: g,
                    menuID: e.menuID,
                    queryConfig: e.queryConfig
                  }, null, 8, ["filterConfig", "filterArr", "choosePlanObj", "menuID", "queryConfig"])
                ])) : u.value == "排序" && y.value.BILLNO ? (O(), U("div", un, [
                  r(kl, {
                    MenuID: e.menuID,
                    choosePlanObj: y.value,
                    onCloseModal: g
                  }, null, 8, ["MenuID", "choosePlanObj"])
                ])) : u.value == "显示隐藏列" && y.value.BILLNO ? (O(), U("div", dn, [
                  r(Hl, {
                    MenuID: e.menuID,
                    choosePlanObj: y.value,
                    onCloseModal: g
                  }, null, 8, ["MenuID", "choosePlanObj"])
                ])) : se("", !0)
              ], 512), [
                [$e, D.value == "all" || D.value == "right"]
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        r(G, {
          "destroy-on-close": "",
          modelValue: V.value,
          "onUpdate:modelValue": E[9] || (E[9] = (M) => V.value = M),
          id: "formModal",
          resize: "",
          storage: "",
          transfer: "",
          "show-zoom": "",
          onClose: B
        }, {
          title: S(() => E[15] || (E[15] = [
            l("span", { class: "modal-title" }, " 过滤方案另存 ", -1)
          ])),
          default: S(() => [
            l("div", cn, [
              l("div", fn, [
                r(le, {
                  ref_key: "ruleFormRef",
                  ref: p,
                  style: { "max-width": "600px" },
                  model: K.value,
                  rules: ve.value,
                  "label-width": "auto",
                  class: "demo-ruleForm",
                  size: "small",
                  "status-icon": ""
                }, {
                  default: S(() => [
                    r(X, {
                      label: "方案名称",
                      prop: "VNAME"
                    }, {
                      default: S(() => [
                        r(ee, {
                          modelValue: K.value.VNAME,
                          "onUpdate:modelValue": E[4] || (E[4] = (M) => K.value.VNAME = M),
                          placeholder: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"]),
                l("div", null, [
                  l("div", vn, [
                    r(A, {
                      size: "small",
                      onClick: P
                    }, {
                      default: S(() => E[16] || (E[16] = [
                        Z("确定")
                      ])),
                      _: 1
                    })
                  ]),
                  l("div", null, [
                    r(A, {
                      size: "small",
                      onClick: ie
                    }, {
                      default: S(() => E[17] || (E[17] = [
                        Z("取消")
                      ])),
                      _: 1
                    })
                  ])
                ])
              ]),
              l("div", mn, [
                E[21] || (E[21] = l("div", { class: "flex mb-10" }, [
                  l("div", { class: "sharedSettings" }, "共享设置"),
                  l("div", { class: "rightBorder" })
                ], -1)),
                r(C, {
                  modelValue: I.checked1,
                  "onUpdate:modelValue": E[5] || (E[5] = (M) => I.checked1 = M),
                  label: "共享给他人",
                  size: "large"
                }, null, 8, ["modelValue"]),
                r(C, {
                  modelValue: f.value,
                  "onUpdate:modelValue": E[6] || (E[6] = (M) => f.value = M),
                  "true-value": "0",
                  "false-value": "1",
                  label: "系统预设",
                  size: "large"
                }, null, 8, ["modelValue"]),
                r(q, {
                  modelValue: I.radio2,
                  "onUpdate:modelValue": E[8] || (E[8] = (M) => I.radio2 = M),
                  class: "ml-4"
                }, {
                  default: S(() => [
                    r(s, { value: "1" }, {
                      default: S(() => E[18] || (E[18] = [
                        Z("共享所有用户")
                      ])),
                      _: 1
                    }),
                    r(s, { value: "2" }, {
                      default: S(() => [
                        E[19] || (E[19] = l("span", null, "共享指定用户", -1)),
                        E[20] || (E[20] = l("span", { class: "ml-30 mr-5" }, "用户", -1)),
                        r(ee, {
                          style: { width: "100px" },
                          modelValue: I.input1,
                          "onUpdate:modelValue": E[7] || (E[7] = (M) => I.input1 = M),
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
        r(G, {
          "destroy-on-close": "",
          modelValue: F.value,
          "onUpdate:modelValue": E[12] || (E[12] = (M) => F.value = M),
          id: "formModal",
          resize: "",
          storage: "",
          transfer: "",
          "show-zoom": "",
          onClose: $
        }, {
          title: S(() => E[22] || (E[22] = [
            l("span", { class: "modal-title" }, " 过滤方案复制 ", -1)
          ])),
          default: S(() => [
            l("div", Ln, [
              l("div", En, [
                r(le, {
                  ref_key: "ruleFormRef",
                  ref: p,
                  style: { "max-width": "600px" },
                  model: K.value,
                  rules: ve.value,
                  "label-width": "auto",
                  class: "demo-ruleForm",
                  size: "small",
                  "status-icon": ""
                }, {
                  default: S(() => [
                    r(X, {
                      label: "方案名称",
                      prop: "VNAME"
                    }, {
                      default: S(() => [
                        r(ee, {
                          modelValue: x.value.VNAME,
                          "onUpdate:modelValue": E[10] || (E[10] = (M) => x.value.VNAME = M),
                          placeholder: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "rules"]),
                l("div", null, [
                  l("div", An, [
                    r(A, {
                      size: "small",
                      onClick: _
                    }, {
                      default: S(() => E[23] || (E[23] = [
                        Z("确定")
                      ])),
                      _: 1
                    })
                  ]),
                  l("div", null, [
                    r(A, {
                      size: "small",
                      onClick: Q
                    }, {
                      default: S(() => E[24] || (E[24] = [
                        Z("取消")
                      ])),
                      _: 1
                    })
                  ])
                ])
              ]),
              l("div", pn, [
                E[26] || (E[26] = l("div", { class: "flex mb-10" }, [
                  l("div", { class: "sharedSettings" }, "设置"),
                  l("div", { class: "rightBorder" })
                ], -1)),
                l("div", Dn, [
                  E[25] || (E[25] = l("div", { class: "mr10" }, "指定用户", -1)),
                  r(ee, {
                    style: { width: "180px" },
                    modelValue: x.value.VNAME,
                    "onUpdate:modelValue": E[11] || (E[11] = (M) => x.value.VNAME = M),
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
}, Tn = /* @__PURE__ */ me(On, [["__scopeId", "data-v-170f9fbb"]]), Sn = ["onClick"], gn = { class: "advancedQuery-alone" }, yn = { class: "oneLine" }, Cn = { class: "advancedQuery-rightBtn" }, Vn = { class: "tr" }, bn = {
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
    }
  },
  emits: ["updateHeight", "handleCustomPlan"],
  setup(e, { expose: c, emit: v }) {
    console.log("🍍💓 ~ file: index.vue:66 ~ getCurrentInstance:", Le);
    const n = fe("request"), o = fe("resolution");
    fe("storeModules");
    const { proxy: t } = Le(), T = ce(() => o.value.AdcPaddingTop), f = ce(() => o.value.AdcBottom), a = m(!1), D = v, k = e, F = m({});
    function x(A) {
      F.value = A, D("openModal", A);
    }
    const _ = m({});
    function Q(A) {
      _.value = A, D("openSettingModal", A);
    }
    const $ = m(!1), g = ce(() => {
      let s = (document.documentElement.clientWidth - 40 - 61 - 156) / 386;
      return 386 * Math.floor(s);
    }), B = () => {
      $.value = !0;
    }, L = (A) => {
      $.value = !1, A != null && A.isQuerySearch && D("handleCustomPlan", {
        type: "1",
        PROGRAMID: A.PROGRAMID,
        QUERYS: A.QUERYS,
        DATA: A.DATA
      });
    }, y = m([]), j = m(1), w = m([]), Y = m([]), V = m(null), u = m({}), h = m([]), W = m(null), b = (A, s) => {
      V.value = A == null ? void 0 : A.BILLNO, u.value = A;
      let q = {
        ...k.menuID,
        PKBILLNO: A == null ? void 0 : A.BILLNO,
        VTYPE: "0"
      };
      n({
        url: "/sys/queryprogUserDtl/getSubList",
        method: "post",
        data: q,
        encry: !1
      }).then((M) => {
        w.value = M.RESULT, y.value = JSON.parse(JSON.stringify(M.RESULT)), ue.value = JSON.parse(JSON.stringify(M.RESULT)), W.value && W.value.updateCurrentQueryList(M.RESULT);
      }), s == 1 && D("handleCustomPlan", {
        type: "1",
        PROGRAMID: V.value
      });
    };
    function d() {
      let A = y.value.map((s) => ({
        FIELD: s.FIELD,
        QUERYTYPE: s.QUERYTYPE,
        DEFAULTVAL: s.DEFAULTVAL,
        DEFAULTVAL2: s.DEFAULTVAL2,
        SORTCODE: s.SORTCODE,
        DEFAULTVALArr: s.DEFAULTVALArr,
        QRYCONT: s.QRYCONT,
        QRYPRE: s.QRYPRE,
        QRYSUF: s.QRYSUF
      }));
      D("handleCustomPlan", {
        type: "2",
        PROGRAMID: V.value,
        QUERYS: A
      });
    }
    const p = m({
      filterSeceletArr: [],
      filterSeceletArr1: []
    });
    re(
      () => k.queryConfig,
      (A) => {
        p.value.filterSeceletArr = k.queryConfig.filter(
          (s) => s.ISSHOW != 0
        );
      },
      { immediate: !0 }
    ), re(
      () => k.sonEosFilterObj,
      (A) => {
        if (!A || !A.DEFAULTVAL) return;
        let s = JSON.parse(JSON.stringify(y.value));
        s[F.value.currentIndex].DEFAULTVAL = (A == null ? void 0 : A.DEFAULTVAL) || "", s[F.value.currentIndex].DEFAULTVAL2 = (A == null ? void 0 : A.DEFAULTVAL2) || "", A.openModalType == "search" ? te.value && te.value.updateCurrentQueryList(s) : A.openModalType == "setting" && W.value && W.value.updateCurrentQueryList(s);
      },
      { immediate: !0 }
    ), m(null), m(!1);
    const P = () => {
      ie.value.hidePanel();
    }, ie = m(null), K = () => {
      ie.value.showPanel();
    }, ve = (A) => {
      j.value = 1, y.value = JSON.parse(JSON.stringify(A));
    }, ue = m([]), te = m(null), J = (A) => {
      j.value = 2, ue.value = JSON.parse(JSON.stringify(A)), te.value && te.value.updateCurrentQueryList(A);
    }, I = m(null), E = () => {
      h.value && u.value.VTYPE == 1 ? C() : I.value.showSaveAs(y.value);
    }, H = () => {
      b(u.value, 1);
    }, C = () => {
      let A = [];
      A = y.value.map((q, M) => ({
        FIELD: q.FIELD,
        LABEL: q.LABEL,
        QUERYTYPE: q.QUERYTYPE,
        DEFAULTVAL: q.DEFAULTVAL,
        DEFAULTVAL2: q.DEFAULTVAL2,
        SORTCODE: q.SORTCODE,
        DEFAULTVALArr: q.DEFAULTVALArr,
        QRYCONT: q.QRYCONT,
        QRYPRE: q.QRYPRE,
        QRYSUF: q.QRYSUF,
        SORTCODE: M,
        VTYPE: "0"
      }));
      const s = {
        BILLNO: V.value,
        // 方案主键
        // VTYPE:0,
        QUERYS: A,
        ...k.menuID
      };
      n({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: s,
        encry: !1
      }).then((q) => {
        t.$modal.msgSuccess("保存成功");
      });
    }, i = () => {
      n({
        url: "sys/queryprogUser/getList",
        method: "post",
        data: k.menuID,
        encry: !1
      }).then((A) => {
        if (h.value = A.RESULT, w.value = [], y.value = [], ue.value = [], te.value && te.value.updateCurrentQueryList([]), h.value.length) {
          let s = h.value.filter((q) => q.ISDEFAULT == 1);
          V.value || (V.value = s.length ? s[0].BILLNO : h.value[0].BILLNO, b(s.length ? s[0] : h.value[0], 0));
        }
      });
    }, R = m("34px"), z = () => {
      R.value = R.value == "auto" ? "34px" : "auto", D("updateHeight");
    }, G = (A, s, q) => {
      w.value[q] = JSON.parse(JSON.stringify(A));
    }, ee = (A) => {
      w.value.push(A), w.value = JSON.parse(JSON.stringify(w.value));
    }, X = () => {
      w.value = JSON.parse(JSON.stringify(Y.value));
    }, le = (A) => {
      w.value.splice(A, 1), D("updateHeight", A);
    };
    return re(
      () => k.menuID,
      (A) => {
        V.value = null, i();
      },
      { immediate: !0 }
    ), c({
      openShowModal: B,
      clostPopver: P
    }), be(() => {
    }), (A, s) => {
      const q = N("el-divider"), M = N("el-button"), Ee = N("vxe-pulldown"), De = N("Icon"), Se = N("el-icon");
      return O(), U("div", {
        class: "advancedQuery",
        style: Ve({ paddingTop: T.value + "px" })
      }, [
        l("div", {
          class: "disflex advancedQuery-alone advancedQuery-aloneTop",
          style: Ve({ marginBottom: f.value + "px" })
        }, [
          s[5] || (s[5] = l("div", { class: "advancedQuery-title" }, "我的方案", -1)),
          (O(!0), U(ae, null, oe(h.value, (de, Re) => (O(), U("div", {
            class: pe(["currentRadio", V.value == de.BILLNO ? "active" : ""]),
            key: Re,
            onClick: (Qe) => b(de, 1)
          }, Ae(de.VNAME), 11, Sn))), 128))
        ], 4),
        l("div", gn, [
          s[8] || (s[8] = l("div", { class: "advancedQuery-title" }, "快捷过滤", -1)),
          l("div", yn, [
            r(ul, {
              ref_key: "filtrationComRef",
              ref: te,
              filterConfig: p.value,
              filterArr: w.value,
              class: "oneLine-left",
              style: Ve({ height: R.value, maxWidth: g.value + "px" }),
              onChangeFilter: G,
              chooseRadioObj: u.value,
              onChangeCurrentQueryList: ve,
              settingArr: ue.value,
              onInputEnter: d,
              onOpenModal: x
            }, null, 8, ["filterConfig", "filterArr", "style", "chooseRadioObj", "settingArr"]),
            l("div", Cn, [
              l("img", {
                onClick: d,
                src: ft,
                alt: ""
              }),
              r(Ee, {
                ref_key: "pulldownRef",
                ref: ie,
                "popup-class-name": "dropdown-table",
                transfer: "",
                style: { "max-width": "400px" }
              }, {
                default: S(() => [
                  a.value ? (O(), U("img", {
                    key: 0,
                    onClick: K,
                    onMouseover: s[0] || (s[0] = (de) => a.value = !0),
                    onMouseout: s[1] || (s[1] = (de) => a.value = !1),
                    style: { transform: "translateY(4px)" },
                    class: "ml-10",
                    src: vt,
                    alt: ""
                  }, null, 32)) : (O(), U("img", {
                    key: 1,
                    onClick: K,
                    onMouseover: s[2] || (s[2] = (de) => a.value = !0),
                    onMouseout: s[3] || (s[3] = (de) => a.value = !1),
                    style: { transform: "translateY(4px)" },
                    class: "ml-10",
                    src: mt,
                    alt: ""
                  }, null, 32))
                ]),
                dropdown: S(() => [
                  r(vl, {
                    ref_key: "settingFilterRef",
                    ref: W,
                    filterConfig: p.value,
                    filterArr: w.value,
                    onChangeCondition: ee,
                    onResetCondition: X,
                    onDelFilterArr: le,
                    onChangeFilter: G,
                    onChangeCurrentQueryList: J,
                    onOpenModal: Q
                  }, null, 8, ["filterConfig", "filterArr"]),
                  r(q),
                  l("div", Vn, [
                    r(M, {
                      onClick: P,
                      size: "small"
                    }, {
                      default: S(() => s[6] || (s[6] = [
                        Z("取消")
                      ])),
                      _: 1
                    }),
                    r(M, {
                      type: "primary",
                      onClick: P,
                      size: "small"
                    }, {
                      default: S(() => s[7] || (s[7] = [
                        Z("确定")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 512),
              e.showSaveBtn ? (O(), U("div", {
                key: 0,
                class: "ml8 btnStyle",
                onClick: E
              }, "保存")) : se("", !0),
              l("div", {
                class: "btnStyle ml8",
                onClick: H
              }, "重置"),
              w.value.length > 1 ? (O(), ne(Se, {
                key: 1,
                color: "#0055ff",
                size: 12,
                class: "ml8 cp foldOUnfoldIcon",
                onClick: s[4] || (s[4] = (de) => z())
              }, {
                default: S(() => [
                  r(De, {
                    icon: R.value == "auto" ? "codicon:fold-up" : "codicon:fold-down"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : se("", !0)
            ])
          ])
        ]),
        r(Tn, {
          menuID: e.menuID,
          showModal: $.value,
          leftList: h.value,
          onUpdateLeftList: i,
          ref_key: "allocationPlanRef",
          ref: I,
          showSaveBtn: e.showSaveBtn,
          filterConfig: p.value,
          onCloseModal: L,
          queryConfig: e.queryConfig
        }, null, 8, ["menuID", "showModal", "leftList", "showSaveBtn", "filterConfig", "queryConfig"])
      ], 4);
    };
  }
}, Ne = /* @__PURE__ */ me(bn, [["__scopeId", "data-v-141e0047"]]);
Ne.name = "eos-filter";
Ne.install = function(e) {
  e.component("eos-filter", Ne);
};
const Rn = { class: "container" }, hn = {
  key: 0,
  class: "disflex ml20"
}, In = { class: "content" }, Un = ["onClick"], Nn = { class: "disflex" }, Fn = {
  key: 1,
  class: "tr"
}, kn = {
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
  setup(e, { expose: c, emit: v }) {
    const n = fe("request"), { proxy: o } = Le(), t = v, T = e, f = m([]), a = m([]);
    re(
      () => T.filterArr,
      (b) => {
        a.value = b, f.value = b.map((d) => d.BILLNO ? d : {
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
    const D = m([]), k = m([]), F = m([]), x = m({}), _ = m(!0);
    re(
      () => T.queryConfig,
      (b) => {
        let d = b.filter((p) => p.ISSHOW == 0);
        D.value = d.filter((p) => p.REVERFIELD == "SYS_ORG_CODE"), D.value.length && (k.value = JSON.parse(D.value[0].VCODE)), F.value = d.filter((p) => p.REVERFIELD == "" && p.CONTROLS == "ExSelect"), F.value = F.value.map((p) => ({
          ...p,
          ISSHOW: 1
        }));
      },
      { immediate: !0 }
    );
    function Q(b) {
      x.value[D.value[0].REVERFIELD] = "";
    }
    function $(b) {
      _.value = !1;
    }
    ce(() => ({
      ...T.filterArr[0],
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
    const g = m({}), B = (b, d) => {
      g.value = d;
    }, L = () => {
      a.value.push({}), f.value.push({});
    }, y = (b = null) => {
      (b || (g.value || g.value == 0) && typeof g.value == "number") && (a.value.splice(b || g.value, 1), f.value.splice(b || g.value, 1), g.value = null);
    }, j = () => {
      a.value = [], f.value = [];
    }, w = () => {
      (g.value || g.value == 0) && (a.value.splice(g.value + 1, 0, {}), f.value.splice(g.value + 1, 0, {}));
    }, Y = () => {
      (g.value || g.value == 0) && (a.value.push(a.value[g.value]), f.value.push(f.value[g.value]));
    }, V = (b, d, p) => {
      a.value[p] = JSON.parse(JSON.stringify(b));
    }, u = () => {
      let b = [];
      b = f.value.map((p, P) => ({
        FIELD: p.FIELD,
        LABEL: p.LABEL,
        QUERYTYPE: p.QUERYTYPE,
        DEFAULTVAL: p.DEFAULTVAL,
        DEFAULTVAL2: p.DEFAULTVAL2,
        SORTCODE: p.SORTCODE,
        DEFAULTVALArr: p.DEFAULTVALArr,
        QRYCONT: p.QRYCONT,
        QRYPRE: p.QRYPRE,
        QRYSUF: p.QRYSUF,
        VTYPE: "1"
        // ENABLESTATE: ele.ENABLESTATE,
      }));
      const d = {
        BILLNO: T.choosePlanObj.BILLNO,
        // 方案主键
        // VTYPE:1,
        QUERYS: b,
        ...x.value,
        ...T.menuID
      };
      n({
        url: "sys/queryprogUserDtl/add",
        method: "post",
        data: d,
        encry: !1
      }).then((p) => {
        o.$modal.msgSuccess("保存成功");
        let P = {
          isQuerySearch: !0,
          QUERYS: b,
          DATA: x.value,
          PROGRAMID: T.choosePlanObj.BILLNO
        };
        t("closeModal", P);
      });
    }, h = () => f.value.map((d, p) => ({
      FIELD: d.FIELD,
      LABEL: d.LABEL,
      QUERYTYPE: d.QUERYTYPE,
      DEFAULTVAL: d.DEFAULTVAL,
      DEFAULTVAL2: d.DEFAULTVAL2,
      SORTCODE: d.SORTCODE,
      DEFAULTVALArr: d.DEFAULTVALArr,
      QRYCONT: d.QRYCONT,
      QRYPRE: d.QRYPRE,
      QRYSUF: d.QRYSUF,
      VTYPE: T.hideBtn ? d.VTYPE || 1 : "1"
    })), W = () => {
      t("closeModal");
    };
    return c({ confirmData: h, allDel: j }), (b, d) => {
      const p = N("el-option"), P = N("el-select"), ie = N("el-checkbox"), K = N("Icon"), ve = N("el-icon"), ue = N("eos-form"), te = N("el-button");
      return O(), U("div", Rn, [
        D.value.length ? (O(), U("div", hn, [
          d[3] || (d[3] = l("div", { class: "mr10" }, "可选组织", -1)),
          l("div", null, [
            r(P, {
              modelValue: x.value[D.value[0].REVERFIELD],
              "onUpdate:modelValue": d[0] || (d[0] = (J) => x.value[D.value[0].REVERFIELD] = J),
              style: { width: "300px" },
              onChange: $
            }, {
              default: S(() => [
                (O(!0), U(ae, null, oe(k.value, (J) => (O(), ne(p, {
                  key: J.VALUE,
                  label: J.LABEL,
                  value: J.VALUE
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          r(ie, {
            onChange: Q,
            class: "ml20",
            modelValue: _.value,
            "onUpdate:modelValue": d[1] || (d[1] = (J) => _.value = J),
            label: "所有组织",
            size: "large"
          }, null, 8, ["modelValue"])
        ])) : se("", !0),
        l("div", { class: "disflex mt-10 mb-10" }, [
          l("div", {
            class: "mr10 btnStyle ml-10",
            onClick: L
          }, "新增行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: y
          }, "删除行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: j
          }, "全部删除"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: w
          }, "插入行"),
          l("div", {
            class: "mr10 btnStyle",
            onClick: Y
          }, "复制行")
        ]),
        l("div", In, [
          (O(!0), U(ae, null, oe(a.value, (J, I) => (O(), U("div", {
            key: I,
            class: pe(["oneLIne", g.value == I ? "active" : ""]),
            onClick: (E) => B(J, I)
          }, [
            l("div", Nn, [
              r(Be, {
                filterConfig: e.filterConfig,
                filterVal: J,
                formData: f.value[I],
                "onUpdate:formData": (E) => f.value[I] = E,
                onChangeFilter: (E) => V(E, J, I),
                isCondition: !0,
                hideBtn: e.hideBtn,
                ENABLESTATE: e.choosePlanObj.ENABLESTATE
              }, null, 8, ["filterConfig", "filterVal", "formData", "onUpdate:formData", "onChangeFilter", "hideBtn", "ENABLESTATE"]),
              r(ve, {
                color: "#b9c9fb",
                size: 20,
                class: "delIcon cp",
                onClick: (E) => y(I)
              }, {
                default: S(() => [
                  r(K, { icon: "zondicons:minus-solid" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ])
          ], 10, Un))), 128))
        ]),
        r(ue, {
          ref: "FormRef",
          modelValue: x.value,
          "onUpdate:modelValue": d[2] || (d[2] = (J) => x.value = J),
          config: F.value
        }, null, 8, ["modelValue", "config"]),
        e.hideBtn ? se("", !0) : (O(), U("div", Fn, [
          r(te, {
            size: "small",
            onClick: u
          }, {
            default: S(() => d[4] || (d[4] = [
              Z("确定")
            ])),
            _: 1
          }),
          r(te, {
            size: "small",
            onClick: W
          }, {
            default: S(() => d[5] || (d[5] = [
              Z("取消")
            ])),
            _: 1
          })
        ]))
      ]);
    };
  }
}, Fe = /* @__PURE__ */ me(kn, [["__scopeId", "data-v-e4e6d593"]]);
Fe.name = "eos-conditionModule";
Fe.install = function(e) {
  e.component("eos-filter", Fe);
};
const Bn = [
  Ne,
  Fe
], Yn = (e) => {
  const { appContext: c } = Le();
  ot(e, c);
}, ot = (e, c) => {
  const v = ce(() => he(e));
  for (const n in e)
    c.config.globalProperties[`$${n}`] = v.value[n];
}, ke = (e, c) => {
  ke.installed || (ke.installed = !0, Bn.map((v) => {
    e.component(v.name, v);
  }), c && ot(c, e));
};
typeof window < "u" && window.Vue && ke(window.Vue);
const xn = () => ({
  install: ke,
  setGlobalConfig: Yn
}), wn = xn();
export {
  wn as default,
  Fe as eosConditionModule,
  Ne as eosFilter
};
