// import REG from "./reg.js";
// import useUserStore from "@/store/modules/user";

// import { useDict } from "./dict.js";

const REG=''
const useDict=''
const useUserStore=''

/**
 * 表格时间格式化
 */
export function formatDate(cellValue, type = "datetime") {
  if (cellValue == null || cellValue == "") return "";
  var date = new Date(cellValue);
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (type == "datetime") {
    return (
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  } else {
    return year + "-" + month + "-" + day;
  }
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time) {
  const timestamp = Date.parse(time) / 1000;
  function zeroize(num) {
    return (String(num).length == 1 ? "0" : "") + num;
  }
  var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
  var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
  var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象
  var Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate();
  var H = tmDate.getHours(),
    i = tmDate.getMinutes(),
    s = tmDate.getSeconds();
  if (timestampDiff < 60) {
    // 一分钟以内
    return "刚刚";
  } else if (timestampDiff < 3600) {
    // 一小时前之内
    return Math.floor(timestampDiff / 60) + "分钟前";
  } else if (
    curDate.getFullYear() == Y &&
    curDate.getMonth() + 1 == m &&
    curDate.getDate() == d
  ) {
    return "今天" + zeroize(H) + ":" + zeroize(i);
  } else {
    var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
    if (
      newDate.getFullYear() == Y &&
      newDate.getMonth() + 1 == m &&
      newDate.getDate() == d
    ) {
      return "昨天" + zeroize(H) + ":" + zeroize(i);
    } else if (curDate.getFullYear() == Y) {
      return m + "月" + d + "日 " + zeroize(H) + ":" + zeroize(i);
    } else {
      return Y + "年" + m + "月" + d + "日 " + zeroize(H) + ":" + zeroize(i);
    }
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length;
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i);
    if (code > 0x7f && code <= 0x7ff) s++;
    else if (code > 0x7ff && code <= 0xffff) s += 2;
    if (code >= 0xdc00 && code <= 0xdfff) i--;
  }
  return s;
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return "";
  return cleanArray(
    Object.keys(json).map((key) => {
      if (json[key] === undefined) return "";
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
  ).join("&");
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split("&");
  searchArr.forEach((v) => {
    const index = v.indexOf("=");
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });
  return obj;
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement("div");
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== "object") {
    target = {};
  }
  if (Array.isArray(source)) {
    return source.slice();
  }
  Object.keys(source).forEach((property) => {
    const sourceProperty = source[property];
    if (typeof sourceProperty === "object") {
      target[property] = objectMerge(target[property], sourceProperty);
    } else {
      target[property] = sourceProperty;
    }
  });
  return target;
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    classString += "" + className;
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length);
  }
  element.className = classString;
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === "start") {
    return new Date().getTime() - 3600 * 1000 * 24 * 90;
  } else {
    return new Date(new Date().toDateString());
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

export function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => map[val.toLowerCase()] : (val) => map[val];
}

export const exportDefault = "export default ";

export const beautifierConf = {
  html: {
    indent_size: "2",
    indent_char: " ",
    max_preserve_newlines: "-1",
    preserve_newlines: false,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: "separate",
    brace_style: "end-expand",
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: true,
    wrap_line_length: "110",
    indent_inner_html: true,
    comma_first: false,
    e4x: true,
    indent_empty_lines: true,
  },
  js: {
    indent_size: "2",
    indent_char: " ",
    max_preserve_newlines: "-1",
    preserve_newlines: false,
    keep_array_indentation: false,
    break_chained_methods: false,
    indent_scripts: "normal",
    brace_style: "end-expand",
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: true,
    end_with_newline: true,
    wrap_line_length: "110",
    indent_inner_html: true,
    comma_first: false,
    e4x: true,
    indent_empty_lines: true,
  },
};

// 首字母大小
export function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// 下划转驼峰
export function camelCase(str) {
  return str.replace(/_[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
}

export function isNumberStr(str) {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str);
}

// 获取assets静态资源
export function getAssetsFile(url) {
  return new URL(`../assets/images/${url}`, import.meta.url).href;
}

// 获取表单的初始化值
/**
 *
 * @param { Array } data
 * @param { Boolean } hasTS  同上选项
 * @param { Object } QueryData  查询参数的数据
 * @returns
 */
// TODO 重构传参
export function getFormValue(data, hasTS = false, QueryData = {}) {
  if (!Array.isArray(data)) return {};
  /**
   * EnumData 枚举字典
   * _getDICT 需要请求获取的字典 （主要本地配置）
   */
  // let a = { EnumData: {}, _getDICT: {} };
  let a = { EnumData: {}, _getDICT: {} };

  data.forEach((item) => {
    let { FIELD, CONTROLS, REVERFIELD } = item;
    FIELD = trimAll(FIELD);
    REVERFIELD = trimAll(REVERFIELD)
    if (FIELD == "") return;
    switch (CONTROLS) {
      case "ExNumber":
        a[FIELD] = item.DEFAULTVAL ? item.DEFAULTVAL : null
        break;
      case "ExRegion":
        a[FIELD + "Arr"] = [];
        a[FIELD] = "";
        break;
      case "ExDate":
        a[FIELD] = initDate(item.DEFAULTVAL, "str", item.SLOTCFG);
        break;
      case "ExDateRange":
        a[FIELD] = initDate(item.DEFAULTVAL, "arr", item.SLOTCFG).join(",");
        a.EnumData[FIELD] = initDate(item.DEFAULTVAL, "arr", item.SLOTCFG);
        a[FIELD + "Arr"] = initDate(item.DEFAULTVAL, "arr", item.SLOTCFG);
        break;
      case "ExDateTime":
        if (item.DEFAULTVAL) {
          if (item.DEFAULTVAL == "000") {
            a[FIELD] = initDate("0", "str", "datetime");
          } else {
            a[FIELD] = initDate(item.DEFAULTVAL, "str") + " 23:59:59";
          }
        } else {
          a[FIELD] = "";
        }
        break;
      case "ExDateTimeRange":
        let [sD, eD] = initDate(item.DEFAULTVAL ? item.DEFAULTVAL : 0, "datetimearr");
        a.EnumData[FIELD] = sD ? [sD, eD] : [];
        a[FIELD] = sD ? `${sD},${eD}` : "";
        a[FIELD + "Arr"] = sD ? [sD, eD] : [];
        break;
      case "ExSelectSearch":
        a.EnumData[FIELD] = [];
        a[FIELD] = hasTS
          ? "DATAVALUETOINDEX-1"
          : setUserinfoData(item.DEFAULTVAL);
        break;
      case "ExSelectContainer":
        a.EnumData[FIELD] = [];
        a.EnumData[FIELD + "isShow"] = false;
        a[FIELD] = "";
        break;
      case "ExSelectGroup":
        a.EnumData[FIELD] = [];
        a[FIELD] = setUserinfoData(item.DEFAULTVAL);
        break;
      case "ExRadioButton":
      case "ExSelect":
        if (!Object.hasOwn(a.EnumData, FIELD) && !Object.hasOwn(a._getDICT, FIELD)) {
          let { EnumData, _getDICT } = getDictData(FIELD, item.OTHER)
          Object.assign(a.EnumData, EnumData)
          Object.assign(a._getDICT, _getDICT)
        }
        a[FIELD] = hasTS ? "DATAVALUETOINDEX-1" : setUserinfoData(item.DEFAULTVAL);
        break;
      case "ExSelectMultiple":
        if (!Object.hasOwn(a.EnumData, FIELD && !Object.hasOwn(a._getDICT, FIELD))) {
          let { EnumData, _getDICT } = getDictData(FIELD, item.OTHER)
          Object.assign(a.EnumData, EnumData)
          Object.assign(a._getDICT, _getDICT)
        }
        // if (
        //   item.OTHER &&
        //   item.OTHER.indexOf("${") === 0 &&
        //   item.OTHER.charAt(item.OTHER.length - 1) == "}"
        // ) {
        //   let dictname = item.OTHER.substring(2, item.OTHER.length - 1);
        //   a._getDICT[FIELD] = useDict(dictname)[dictname];
        // } else {
        //   a.EnumData[FIELD] = stringToArray(item.OTHER);
        // }
        a[FIELD] = setUserinfoData(item.DEFAULTVAL);
        a[FIELD + "Arr"] = item.DEFAULTVAL ? item.DEFAULTVAL.split(",") : [];
        break;
      case "ExSelectMutiple":
        a[FIELD] = setUserinfoData(item.DEFAULTVAL);
        a[FIELD + "Arr"] = []; // 签收信息 角色司机 1 默认
        break;
      case "ExCheckbox":
        a[FIELD + "Arr"] = [];
        a[FIELD] = "";
        a.EnumData[FIELD] = stringToArray(item.OTHER);
        break;
      case "ExRadio":
        a[FIELD] = item.DEFAULTVAL || "";
        a.EnumData[FIELD] = item.OTHER ? stringToArray(item.OTHER) : [];
        break;
      case "ExSwitch":
        a[FIELD] = item.DEFAULTVAL == '1' ? '1' : "0"
        break;
      case "ExUpload":
      case "ExUploadFile":
        a[FIELD] = "";
        a[FIELD + "Arr"] = [];
        break;
      case "ExQueryType":
        a[FIELD] = [];
        break;
      case "ExTabs":
        break;
      case "subTable":
        a[FIELD] = [];
        break;
      default:
        if (item.VTYPE == "exNum")
          a.EnumData[FIELD] = item.OTHER ? stringToArray(item.OTHER) : [];
        a[FIELD] = setUserinfoData(item.DEFAULTVAL);
        break;
    }
    // 是否存在赋值默认值是通过查询条件进行赋值
    if (item.DEFAULTVAL && item.DEFAULTVAL.includes('QDATA')) {
      a[FIELD] = QueryData && QueryData[item.DEFAULTVAL.replace('QDATA.', '')] ? QueryData[item.DEFAULTVAL.replace('QDATA.', '')] : ''
    }
    if (REVERFIELD) a[REVERFIELD] = ""
  });
  return a;
}

export function trimAll(ele) {
  if (!ele) return;
  if (typeof ele === "string") {
    return ele.split(/[\t\r\f\n\s]*/g).join("");
  } else {
    console.error(
      `${typeof ele} is not the expected type, but the string type is expected`
    );
  }
}

// 解析字典
function getDictData(FIELD, OTHER) {
  let _getDICT = {}, EnumData = {};
  if (OTHER && OTHER.indexOf("${") === 0 && OTHER.charAt(OTHER.length - 1) == "}") {
    let dictname = OTHER.substring(2, OTHER.length - 1);
    _getDICT[FIELD] = useDict(dictname)[dictname];
  } else {
    EnumData[FIELD] = stringToArray(OTHER);
  }
  return { _getDICT, EnumData }
}

function initDate(str, type = "str", dateType = "date") {
  if (!str) return type == "str" ? "" : [];
  if (str == "0" || Number(str)) {
    return type != "str" ? type == 'datetime' || type == 'datetimearr' ? [`${GetDateAfter(Number(str), dateType)} ${mapDateTime(null, false)}`, `${GetDateAfter(0, dateType)} ${mapDateTime(null)}`] : [GetDateAfter(Number(str), dateType), GetDateAfter(0, dateType)] : GetDateAfter(Number(str), dateType);
  } else {
    let valArr = [str],
      dateArr = [];
    if (type != "str") {
      let [Sd, Ed = "0"] = str.split("@");
      valArr = [Sd, Ed];
    }
    for (let i = 0; i < valArr.length; i++) {
      const [dateStr, timeStr = ""] = valArr[i].split("T");
      let date = "", time = mapDateTime(timeStr, i == 1);
      if (dateStr == "0" || Number(dateStr)) {
        date = GetDateAfter(Number(dateStr), dateType)
      } else {
        date = mapCalcDate(dateStr)
      }
      let datetime = type == 'datetime' || type == 'datetimearr' ? `${date} ${time}` : date
      dateArr.push(datetime)
    }
    return type != "str" ? dateArr : dateArr.join();
  }
}

/**
 * mapCalcDate 计算日期
 * @param {String} str 配置串
 * @returns 日期
 */
function mapCalcDate(str) {
  let [y = "0y", m = "0m", d = "0d"] = str.split(","),
    valArr = [y, m, d],
    date = "";
  let StrArr = []

  function checkT(s) {
    return s < 10 ? "0" + s : s;
  }

  for (let i = 0; i < valArr.length; i++) {
    const el = valArr[i];
    if (el == undefined) continue;
    let strnum
    if (Number(el)) {
      strnum = (el * 1 < 10 ? "0" + el : el)
    } else {
      let num = el.slice(0, el.length - 1),
        type = el.slice(-1);
      strnum = calcDate(Number(num), type)
      if (strnum <= 0) {
        strnum = checkT(12 + strnum)
        StrArr[i - 1] = StrArr[i - 1] - 1
      }
    }
    StrArr[i] = strnum
  }
  return StrArr.join("-")
}

/**
 * mapDateTime 计算时间
 * @param {String} str 配置串
 * @param {Boolean} isEND 是否结束是节点
 * @returns {String} 时间
 */
function mapDateTime(str, isEND = true) {
  if (!str) return isEND ? "23:59:59" : '00:00:00';
  let [h, m, s] = str.split(":"),
    valArr = [h, m, s],
    time = "";
  for (let i = 0; i < valArr.length; i++) {
    const el = valArr[i];
    if (el == undefined) continue;
    if (Number(el) || Number(el) == '0') {
      time += (Number(el) < 10 ? "0" + Number(el) : Number(el)) + ":";
    } else {
      let num = el.slice(0, el.length - 1),
        type = el.slice(-1);
      time += calcDate(Number(num), type) + ":";
    }
  }
  return time.slice(0, time.length - 1);
}

function calcDate(num, type) {
  let date = new Date(),
    val = "";
  switch (type) {
    case "y":
      val = date.getFullYear() + num;
      break;
    case "m":
      val = date.getMonth() + 1 + num;
      break;
    case "d":
      val = date.getDate() + num;
      break;
  }
  return val > 0 && val < 10 ? "0" + val : val;
}

// 赋值用户信息
function setUserinfoData(val = "") {
  if (val == null || val == "" || val.includes("TREE")) return "";
  if (!val.includes("U$")) return val;
  let Id = val.substring(2, val.length);
  // const Ids = ["ORGNAME", "PK_ORG", "GROUPNAME", "PK_GROUP", "DEPTNAME", "PK_DEPT", "USERNAME", "BILLNO"]
  // if (!Ids.includes(Id)) return ""
  const UserInfo = useUserStore().userInfo;
  if (!UserInfo) return "";
  return UserInfo[Id];
}

// 表单验证规则
export function getFormRule(data, hasTrigger = true) {
  if (!Array.isArray(data)) return {};
  let a = {},
    controlsStr = "&ExSelect,ExSelectSearch,ExDateTime,ExCheckbox,ExCarNum,ExSelectModal";
  data.forEach((item) => {
    let { FIELD } = item;
    FIELD = trimAll(FIELD);
    if (FIELD == "") return;
    // if (item.ISREQUIRE * 1 == 1) {
    // if (item.ISREQUIRE != "1") return;
    let trigger = "blur";
    if (item.CONTROLS == 'ExCarNum') {
      trigger = "blur";
    } else if (controlsStr.includes(item.CONTROLS)) {
      trigger = "change";
    } else if (item.CONTROLS == 'ExUpload' || item.CONTROLS == 'ExUploadFile') {
      trigger = "change";
    }
    // if (item.ISREQUIRE == "1") {
    let rulesObj = {
      required: item.ISREQUIRE * 1 == 1 ? true : false,
      message: `[${item.LABEL}]是必填项，不可为空！`,
      trigger: trigger
    };
    // if (hasTrigger) rulesObj.trigger = trigger;
    a[FIELD] = [rulesObj];
    // }
    let Regs = {}, customMsg = '';
    if (
      item.RULES &&
      item.RULES != "" &&
      item.RULES != " " &&
      item.RULES != "ApiRules"
    ) {
      if (item.RULESREG && item.RULES == "Reg") {
        if (item.RULESREG.includes('msg') && item.RULESREG.includes('reg')) {
          try {
            let regJson = JSON.parse(item.RULESREG)
            Regs = eval(regJson.reg);
            customMsg = regJson.msg
          } catch (error) {
            console.error('自定义正则配置错误', error);
          }
        } else {
          Regs = new RegExp(item.RULESREG);
        }
      } else {
        Regs = REG[item.RULES];
      }
      let myReg = {
        pattern: Regs,
        message: customMsg ? customMsg : item.LABEL + "格式不正确",
      };
      if (item.RULES == "Password" || item.RULES == "PWD")
        myReg.message = "请输入8-16位数字、字母、英文字符组合!";
      if (hasTrigger) myReg.trigger = trigger;
      a[FIELD].push(myReg);
    }
    // }
  });
  return a;
}

// 字符串类型的数组转正式数组
function stringToArray(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  data = data.includes("[") ? JSON.parse(data) : [];
  if (Array.isArray(data)) return data;
  return [];
}

// 获取多少天后的日期
export function GetDateAfter(AddDayCount = 0, dateType = "date") {
  var AddDayCount2 = parseInt(AddDayCount);
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount2); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var mon = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  var h = dd.getHours();
  var min = dd.getMinutes();
  var ss = dd.getSeconds();

  function checkT(s) {
    return s < 10 ? "0" + s : s;
  }
  if (dateType == "year") return String(y);
  if (dateType == "month") return String(checkT(mon));
  if (dateType == "datetime")
    return `${y}-${checkT(mon)}-${checkT(d)} ${checkT(h)}:${checkT(
      min
    )}:${checkT(ss)}`;
  return String(y + "-" + checkT(mon) + "-" + checkT(d));
}
// 获取多少天后的日期
function GetDateTimeAfter(AddDayCount = 0) {
  var AddDayCount2 = parseInt(AddDayCount);
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount2); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  var h = dd.getHours();
  var f = dd.getMinutes();
  var x = dd.getSeconds();

  function checkT(s) {
    return s < 10 ? "0" + s : s;
  }
  return `${y}-${checkT(m)}-${checkT(d)} ${checkT(h)}:${checkT(f)}:${checkT(
    x
  )}`;
}

// 枚举数据的处理，标签颜色处理
export function dict2name(OTHER, value) {
  let arr = stringToArray(OTHER);
  let a = {
    name: "",
    color: "",
  };
  if (Array.isArray(value)) {
    value.forEach((item) => {
      arr.forEach((items) => {
        if (items.VALUE == item) {
          a.name = a.name + "," + items.LABEL;
        }
      });
    });
    a.name = a.name.replace(",", "");
  } else {
    arr.forEach((item) => {
      if (item.VALUE == value) {
        a.name = item.LABEL;
        a.color = item.COLOR;
        return;
      }
    });
  }
  return a;
}

// 拼接数据的后缀   携带@符号标识是变量  否则是常量
export function setSuffix(data, cf, hasValue = true) {
  // if (data[cf.FIELD] != '0' && !data[cf.FIELD]) return ""
  if (data[cf.FIELD] != "0" && !data[cf.FIELD] && hasValue) return "";
  let value = data[cf.FIELD] == "0" || data[cf.FIELD] ? data[cf.FIELD] : "";
  if (cf.SUFFIX.indexOf("|") < 0) {
    if (cf.SUFFIX.indexOf("@") < 0)
      return hasValue ? value + [cf.SUFFIX] : cf.SUFFIX;
    let suffixID = cf.SUFFIX.replace("@", "");
    return hasValue ? value + (data[suffixID] || "") : data[suffixID] || "";
  }
  let arr = cf.SUFFIX.split("|"),
    unit = "";
  arr.forEach((item, index) => {
    if (item.indexOf("@") < 0) {
      unit = unit + (index == 0 ? "" : "/") + item;
    } else {
      unit =
        unit + (index == 0 ? "" : "/") + (data[item.replace("@", "")] || "");
    }
  });
  return hasValue ? value + unit : unit;
}

// 提取配置中的 isShow == true
export function getShowCFG(data) {
  if (!Array.isArray(data)) return [];
  data = data.filter((item) => {
    return item.ISSHOW > 0;
  });
  return data;
}

// 提取表格行背景色的条件
export function getRowBgEval(data) {
  if (!Array.isArray(data)) return "";
  data = data.filter((item) => {
    return item.SLOT == "rowBg";
  });
  if (data.length) return data[0].SLOTCFG;
  return "";
}

export function getMyRouter(Arr, id) {
  if (!Array.isArray(Arr)) return "";
  let newPath = '';
  Arr.map((item) => {
    if (item.path.includes(id)) {
      newPath = item.path
    }
  });
  return newPath
}


// 获取url 后面的参数
export function getUrlParams(url) {
  let reg = /([^&?=]+)=([^&?=]+)/g,
    obj = {};
  url.replace(reg, function () {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
}

// 转换文件大小
export function bytesToSize(bytes) {
  if (bytes === 0) return "0 B";
  var k = 1024, // or 1024
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
}

// eval 函数取代
export const evilFn = (row, fn) => {
  const Data = JSON.parse(JSON.stringify(row)) || Object.create(null);
  fn = fn.replace(/DATA/g, "Data")
  let Fn = new Function("Data", `return ${fn}`);
  const proxy = new Proxy(Data, {
    has(target, key) {
      return true;
    },
  });
  return Fn(proxy);
};

// 校验数据类型  typeOf('树哥')
export const typeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// 手机号脱敏
export const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};

// 大小写转换   str 待转换的字符串   type 1-全大写 2-全小写 3-首字母大写
export const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};

// uuid
export const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf("/") + 1);
};

//
export function loadJs(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}

// 数字千分号格式化
export function toThousands(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function evalFun(DATA, OTHER) {
  return eval(OTHER)
}

export function percentageToNumber(percentage = '50%') {
  const percentageWithoutSign = percentage.replace('%', '');
  let number = percentageWithoutSign * 1;
  number = number > 99 ? 100 : number;
  let newNum = (100 - number) + "%";
  return newNum;
}

// 获取详情按钮接口
export const getQueryUrl = (data, t) => {
  if (Array.isArray(data)) {
    let a = [];
    if (t == "tree") {
      a = data.filter((i) => {
        return i.ACTION == "QRY" && i.VTYPE == 20;
      });
    } else {
      a = data.filter((i) => {
        return i.ACTION == "DTL" && i.VTYPE != 20;
      });
    }
    return a.length ? a[0].ACTIONADDRESS : "";
  }
}

//  重置表格顶部的操作按钮
export function resetTopButton(data) {
  let newData = data.filter(item => item.VTYPE != 20 && item.ISSHOW == 1);
  let copyNewData = JSON.parse(JSON.stringify(newData));
  let rmoveAudit = data.filter(item => item.ACTION == 'REMOVEAUDIT');
  let unAudit = data.filter(item => item.ACTION == 'UNAUDIT');
  let copyButton = data.filter(item => item.ACTION == 'COPY');
  let arr = [], bsBtn = [];
  copyNewData.forEach(item => {
    let copyItem = JSON.parse(JSON.stringify(item));
    switch (item.ACTION) {
      case 'ADD':
        let newAddArr = [item, ...copyButton]
        copyButton.length ? copyItem.CHILDREN = newAddArr : null
        arr.push(copyItem)
        break;
      case 'EDIT':
        arr.push(item)
        break;
      case 'DELETE':
        arr.push(item)
        break;
      case 'SAVEAUDIT':
        let newAddArr2 = [item, ...rmoveAudit]
        copyItem.CHILDREN = newAddArr2
        arr.push(copyItem)
        break;
      case 'AUDIT':
        let newAddArr3 = [item, ...unAudit]
        copyItem.CHILDREN = newAddArr3
        arr.push(copyItem)
        break;
      case 'REMOVEAUDIT':
      case 'UNAUDIT':
      case 'COPY':
        break;
      default:
        bsBtn.push(item)
        break;
    }
  })
  arr.length ? (arr[arr.length - 1].divider = true) : null
  return [...arr, ...bsBtn];
}

