<!--
 * 查询组件
 * @author: wsd
 * @since: 2024-04-28
 * filterForm.vue
-->
<template>
  <div class="filterForm">

    <div class="firstSelect ml10 mr10" v-if="isCondition">
      <vxe-select transfer popper-class="popperClass" v-model="formData.QRYPRE" placeholder="" style="width: 50px"
        :size="commonSize">
        <vxe-option label="(" value="("></vxe-option>
        <vxe-option label="((" value="(("></vxe-option>
        <vxe-option label="(((" value="((("></vxe-option>
      </vxe-select>
    </div>

    <div class="firstSelect mr10">
      <vxe-select transfer v-model="formData.FIELD" placeholder="请选择" style="width: 100px" :size="commonSize"
        @change="changeFilter" :disabled="computedIsDisabled(formData.FIELD)">
        <vxe-option v-for="item in filterSeceletArrs" :key="item.FIELD" :label="item.LABEL"
          :value="item.FIELD"></vxe-option>
      </vxe-select>
    </div>

    <div class="mr10">
      <vxe-select transfer :disabled="computedIsDisabled(formData.QUERYTYPE)" v-model="formData.QUERYTYPE"
        placeholder="请选择" style="width: 90px" :size="commonSize">
        <vxe-option v-for="item in showVcodeList()" :key="item.VALUE" :label="item.LABEL"
          :value="item.VALUE"></vxe-option>
      </vxe-select>
    </div>

    <div style="width: 160px">
      <template
        v-if="currentConfig.CONTROLS == 'ExDateRange' || currentConfig.QUERYTYPE == 'DateRange' || currentConfig.QUERYTYPE == 'Between' || currentConfig.QUERYTYPE == 'NotBetween'">
        <el-date-picker v-model="formData.DEFAULTVALArr" unlink-panels type="daterange" clearable
          value-format="YYYY-MM-DD" range-separator="至" style="width: 100%" placeholder="请选择"
          @change="(v) => DateChange(v)" @clear="DateChange(null)" />
      </template>
      <template v-else-if="showDateType == '0' || showDateType == '1'">
        <el-input v-model="formData.DEFAULTVAL" style="width: 100%" placeholder="请输入"
          :disabled="showDateType == '0' ? true : false" type="number" />
      </template>
      <!-- ExDate 日期选择 -->
      <template v-else-if="currentConfig.CONTROLS == 'ExDate'">
        <el-date-picker v-model="formData.DEFAULTVAL" clearable style="width: 100%" placeholder="请选择"
          value-format="YYYY-MM-DD" />
      </template>
      <template v-else-if="currentConfig.CONTROLS == 'ExDateTime'">
        <el-date-picker v-model="formData.DEFAULTVAL" clearable type="datetime" value-format="YYYY-MM-DD HH:mm:ss"
          style="width: 100%" />
      </template>
      <template v-else-if="currentConfig.CONTROLS == 'ExDateTimeRange'">
        <el-date-picker v-model="formData.DEFAULTVALArr" clearable unlink-panels type="datetimerange"
          range-separator="至" value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" @change="(v) => DateChange(v)"
          @clear="DateChange(null)" />
      </template>
      <template v-else-if="currentConfig.CONTROLS == 'ExSelect'">
        <vxe-select transfer placeholder="请选择" v-model="formData.DEFAULTVAL" clearable style="width: 100%"
          :size="commonSize">
          <vxe-option v-for="item in EnumArr" :key="item.VALUE" :label="item.LABEL" :value="item.VALUE"></vxe-option>
        </vxe-select>
      </template>
      <template v-else-if="currentConfig.CONTROLS == 'ExSelectModal'">
        <!-- <el-popover placement="bottom" :width="600" trigger="click" :visible="inputVisible" :popper-style="{
      padding: 0
    }">
          <template #reference>
            <el-input v-model="formData.DEFAULTVAL" style="width: 100%" placeholder="请输入"
              @input="val => ExSelectModalInput(val, currentConfig)" />
          </template>

<div class="disflex ExSelectModal-header">
  <div class="ExSelectModal-left">
    <div>代码</div>
    <el-input style="width: 100%" placeholder="过滤条件" />
  </div>
  <div class="ExSelectModal-right">
    <div>名称</div>
    <el-input style="width: 100%" placeholder="过滤条件" />
  </div>
</div>
<ul v-infinite-scroll="loadExSelectModalTable" class="infinite-list" style="overflow: auto;height: 200px;">
  <li class="disflex ExSelectModal-header" v-for="(item, index) in tableData" :key="index">
    <div class="ExSelectModal-left">
      <div>{{ item.BILLNO }}</div>
    </div>
    <div class="ExSelectModal-right">
      <div>{{ item.VNAME }}</div>
    </div>
  </li>
</ul>
<div class="disflex justify-sb ExSelectModal-footer">
  <div>
    <vxe-select transfer v-model="selectvalue2" placeholder="" style="width: 100px" class="mr10" :size="commonSize">
      <vxe-option label="左匹配" value="1"></vxe-option>
      <vxe-option label="右匹配" value="2"></vxe-option>
      <vxe-option label="全量模糊" value="3"></vxe-option>
    </vxe-select>
    <vxe-select transfer v-model="selectvalue2" placeholder="" style="width: 100px" :size="commonSize">
      <vxe-option label="全部" value="1"></vxe-option>
      <vxe-option label="编码" value="2"></vxe-option>
      <vxe-option label="名称" value="3"></vxe-option>
    </vxe-select>
  </div>
  <div>
    <vxe-select transfer v-model="selectvalue2" placeholder="" style="width: 60px" :size="commonSize">
      <vxe-option label="5" value="1"></vxe-option>
      <vxe-option label="10" value="2"></vxe-option>
      <vxe-option label="20" value="3"></vxe-option>
    </vxe-select>
    <el-button link>
      更多
    </el-button>
  </div>
</div>
</el-popover> -->

        <!-- <eos-select-modal v-model="formData.DEFAULTVAL" :config="currentConfig"  @openModal="openModal"></eos-select-modal> -->

        <vxe-pulldown ref="DropdownRef" popup-class-name="selectmodal" destroy-on-close :transfer="true">
          <template #default>
            <!-- <el-input v-model="formData.DEFAULTVAL" type="text" clearable @clear.stop="clearVal()"
              @blur="RST_SelectTableData(currentConfig)" @keydown.stop="debounceGetData" @keydown.enter="inputEnter"> -->
            <el-input v-model="formData.DEFAULTVAL" type="text" clearable @clear="clearVal()"
              @keydown.stop="debounceGetData(false)" @keydown.enter="inputEnter">
              <template #append>
                <el-button :icon="Search" @click.stop="openModal()" />
              </template>
            </el-input>
          </template>
          <template #dropdown>
            <div :style="`width:${SelectModalConfig.width ? SelectModalConfig.width : '100%'}`">
              <!-- <VTable :tableCFG="SelectModalConfig" :tableData="SelectModalList"
                @dbClick.self="row => CHANGE_SelectChange(Ci, row)" /> -->
              <eos-table :config="SelectModalConfig" v-model="SelectModalList"
                @dbClick="row => CHANGE_SelectChange(currentConfig, row)"></eos-table>
            </div>
          </template>
          <template #footer v-if="SelectModalList.length > 0">
            <div class="selectmodal-tools">
              <span class="selectmodal-tools-item" @click="debounceGetData(true)">更多</span>
            </div>
          </template>

        </vxe-pulldown>

      </template>
      <template v-else>
        <el-input v-model="formData.DEFAULTVAL" style="width: 100%" placeholder="输入关键字后回车查询"
          @keyup.enter="inputEnter" />
      </template>
    </div>

    <div class="firstSelect ml10 mr10" v-if="isCondition">
      <vxe-select transfer v-model="formData.QRYSUF" placeholder="" style="width: 50px" :size="commonSize">
        <vxe-option label=")" value=")"></vxe-option>
        <vxe-option label="))" value="))"></vxe-option>
        <vxe-option label=")))" value=")))"></vxe-option>
      </vxe-select>
    </div>

    <div class="firstSelect mr10" v-if="isCondition">
      <vxe-select transfer v-model="formData.QRYCONT" placeholder="" style="width: 80px" :size="commonSize">
        <vxe-option label="并且" value="and"></vxe-option>
        <vxe-option label="或者" value="or"></vxe-option>
      </vxe-select>
    </div>
    <div class="mr10" v-if="hideBtn">
      <!-- <el-input v-model="formData.SORTCODE" style="width: 60px" placeholder="排序" :disabled="false"/> -->
      <input v-model="formData.SORTCODE" style="width: 60px"
        class="vxe-input type--text size--mini is--controls is--suffix">
    </div>


    <div class="firstSelect mr10" v-if="hideBtn">
      <vxe-select transfer v-model="formData.VTYPE" placeholder="" style="width: 100px" :size="commonSize">
        <vxe-option label="高级查询" value="1"></vxe-option>
        <vxe-option label="快捷过滤" value="0"></vxe-option>
      </vxe-select>
    </div>


    <!-- <eos-modal ref="eosModalRef">
      <template #default>
        <TablePage ref="TablePageRef" :menuID="openModalOptions?.page" dbClickType="emit"
          :queryParamsBefore="openModalOptions?.params" @dbClick="TablePagedbClick" @closeModal="closeModal" />
      </template>
      <template #footer>
        <el-button type="info" size="default" @click="closeModal">取消</el-button>
        <el-button type="primary" size="default" @click="handleConfirm">确定</el-button>
      </template>
    </eos-modal> -->
  </div>
</template>

<script setup>
// import { watch } from "vue";
import { computed, inject, reactive, ref, watch, onMounted, defineProps, defineEmits, } from 'vue';
import { useDict } from '@/utils/dict.js'
import { debounce } from "lodash-es"
import { Search } from "@element-plus/icons-vue";
import { deepClone } from "@/utils";
// import { eosModal } from "@eosine/form"
// import TablePage from "@/views/table/components/SingleTable/index.vue";
// import TablePage from "@/components/SingleTable/index.vue";


const { proxy } = getCurrentInstance();

const emit = defineEmits(["update:formData", "changeFilter", "inputEnter"]);

const props = defineProps({
  // 查询字段下拉框的选项
  filterConfig: {
    type: Object,
    default: {},
  },
  // 当前控件配置
  filterVal: {
    type: Object,
    default: {},
  },
  // 绑定的值
  formData: {
    type: Object,
    default: {},
  },
  // 是否是过滤弹框
  isCondition: {
    type: Boolean,
    default: false,
  },
  // 系统方案是否隐藏确认和取消按钮
  hideBtn: {
    type: Boolean,
    default: false,
  },
  ENABLESTATE: {
    type: [Number, String],
    default: 0,
  },
  currentIndex:{
    type: [Number, String],
    default: 0,
  },
});


// const commonSize = ref("small");
const commonSize = ref("mini");
const filterSeceletArrs = computed(() => props.filterConfig.filterSeceletArr);
const filterSeceletArrs1 = ref([]);
const currentConfig = computed(() => props.filterVal);

const selectvalue = ref(null);
const selectvalue2 = ref("1");
const EnumArr = ref([]);
const eosModalRef = ref(null)

const tableData = ref([{}, {}, { label: "222" }]);

// const changeFilter = (e) => {
const changeFilter = (val) => {
  let e = val.value
  let newArr = filterSeceletArrs.value.filter((ele) => ele.FIELD == e);
  props.formData.LABEL = newArr[0].LABEL
  try {
    filterSeceletArrs1.value = newArr[0].VCODE
      ? JSON.parse(newArr[0].VCODE)
      : [];
  } catch (error) { }
  emit("changeFilter", newArr[0] || {});
};

watch(
  () => props.filterVal,
  (value) => {
    selectvalue.value = value.BILLNO;
    if (value.CONTROLS == "ExSelect") {
      if (value.OTHER &&
        value.OTHER.indexOf("${") === 0 &&
        value.OTHER.charAt(value.OTHER.length - 1) == "}"
      ) {
        let dictname = value.OTHER.substring(2, value.OTHER.length - 1);
        EnumArr.value = useDict(dictname);

      } else {
        EnumArr.value = JSON.parse(value.OTHER);
      }
    }
  },
  { immediate: true }
);


const inputEnter = () => {
  emit('inputEnter')
}



/** 下拉查询类数据集 */
const SelectOptions = ref({})
/** 下拉加载状态 */
const SelectLoading = ref(false)
/** 下拉表格Ref */
const DropdownRef = ref(null)
const DropdownRefIndex = ref(null)
const SelectTableKey = ref()
const SelectTableConfig = ref({})
const SelectTableSetData = ref({})
const SelectModalList = ref([])
const selectTableDataPage = ref(1);
const selectTableDataSize = ref(10);
// const SelectModalConfig = ref({
//   title: "",
//   config: [],
//   width: "500px",
//   height: "300px"
// })
const SelectModalConfig = ref({
  tableColumns: [],
  hasTableTools: false,
  hasSeq: false,
  toolsConfig: [],
  loading: false,
  width: "500px",
  height: "auto",
});

const defaultConfig = {
  // 下拉表格类 默认大小
  selectTableSize: ["360px", "280px"],
  // 下拉表格类 默认列表配置
  selectTableColumn: [
    { LABEL: "编码", FIELD: "BILLNO", WIDTH: 150, ISSHOW: '1' },
    { LABEL: "名称", FIELD: "VNAME", WIDTH: 200, ISSHOW: '1' }
  ]
}
/* 多选组件 回写值 */
const SET_SelectMutipleValue = (id, val) => {
  if (!props.formData) return false
  let obj = {}
  obj[id] = val.join(",")
  // Object.assign(formData.value, obj)
  Object.assign(props.formData.DEFAULTVAL, obj)

}
/** 重置下拉表格等组件的值  */
// const RST_SelectTableData = config => {
//   try {
//     const { FIELD, OTHER } = config;
//     let otherArr = OTHER ? OTHER.split('?') : []
//     if (Object.hasOwn(SelectTableSetData.value, FIELD)) {
//       if (otherArr.length > 3 && otherArr[3].replace(/[^=]/g, "").length == 1) return;
//       ParseOtherConfig(OTHER);
//       CHANGE_SelectChange(config, SelectTableSetData.value[FIELD])
//     } else {
//       CHANGE_SelectChange(config, null)
//     }
//   } catch (err) {
//     console.error('Err:@eosine/form:RST_SelectTableData', err);
//   }
// }

const clearVal = () => {
  selectTableDataPage.value = 1
  SelectModalList.value = []
  CHANGE_SelectChange(currentConfig.value, null)
}

/** ExSelect 类 Change */
const CHANGE_SelectChange = (config, val) => {
  const { FIELD, CONTROLS, OTHER, SLOT, REVERFIELD } = config;

  if (CONTROLS != 'ExSelect' && CONTROLS != 'ExSelectMultiple') {
    ParseOtherConfig(OTHER)
  } else {
    SelectValueTo.value = []
  }
  /** 表格弹窗 清空历史选择数据 */
  if (CONTROLS == 'ExSelectModal' || CONTROLS == 'ExSelectTable' && val == null) {
    delete SelectTableSetData.value[FIELD]
    props.formData.DEFAULTVAL = ''
    DropdownRef?.value?.hidePanel()
    SelectModalList.value = []

  }
  let data = Array.isArray(val) ? [] : null;
  if (val != "" && val != null) {
    switch (CONTROLS) {
      case "ExSelectTable":
      case "ExSelectModal":
        data = val;
        SelectTableSetData.value[FIELD] = deepClone(val)
        // formData.value[FIELD] = val == null ? '' : Array.isArray(val) ? val.map(el => el?.BILLNO).join(",") : val?.BILLNO
        if (REVERFIELD) {
          props.formData.DEFAULTVAL = val == null ? '' : Array.isArray(val) ? val.map(el => el[REVERFIELD]).join(",") : val[REVERFIELD]
        } else {
          props.formData.DEFAULTVAL = val == null ? '' : Array.isArray(val) ? val.map(el => el?.VNAME).join(",") : val?.VNAME
        }
        // props.formData.DEFAULTVAL2 = val == null ? '' : Array.isArray(val) ? val.map(el => el?.VNAME).join(",") : val?.VNAME

        // props.formData.DEFAULTVAL = val == null ? '' : Array.isArray(val) ? val.map(el => el?.VNAME).join(",") : val?.VNAME
        // props.formData[REVERFIELD] = val == null ? '' : Array.isArray(val) ? val.map(el => el?.BILLNO).join(",") : val?.BILLNO

        setTimeout(() => {
          DropdownRef?.value?.hidePanel()
          selectTableDataPage.value = 1
          SelectModalList.value = []
        }, 200);
        break;
      // case "ExModalTable":
      //   data = val;
      //   formData.value[FIELD] = val == null ? '' : val?.BILLNO
      //   break;
    }
  } else {
    SET_SelectMutipleValue(FIELD, []);
  }

  // SET_SelectValue(data);
  // if (config.LINKAGE) {
  //   config.LINKAGE.includes("CLEAN") && AUTO_CleanEvent(config);
  //   CALC_Number(config)
  //   CALC_DateCalc(config);
  //   Change_SelectChangeAfter(config, val)
  //   config.LINKAGE.includes("SYNC") && SET_ValueSYNC(config)
  // }
  // SET_InitSelectData(currentConfig.value)
  // proxy.$formRef && proxy.$formRef.value.clearValidate([FIELD]);
  // proxy.$emit("select", {
  //   id: FIELD,
  //   query: SLOT == 1 ? true : false,
  //   config,
  //   value: val,
  //   data,
  //   valueTo: SelectValueTo.value,
  // });
}
/* 首次加载 下拉类的数据 */
const SET_InitSelectData = (config) => {
  if (!config) return false;
  const getShowFormConfig = GET_ShowFormConfig.value(config)
  if (getShowFormConfig.length == 0) return false;
  const indexArr = getShowFormConfig.reduce((acc, el) => {
    if (el.CONTROLS == "ExSelectModal" || el.CONTROLS == "ExSelectTable") {
      acc.push(el.FIELD);
    } else if (el.CONTROLS == 'ExRegion' || (AutoSearchCTRL.includes(el.CONTROLS) && el.DEFAULTVAL == 'auto')) {
      GET_SearchData("", el);
    } else if (el.CONTROLS == 'ExSelectMutiple') {
      if (!formData || !formData.value[el.FIELD] || formData.value[el.FIELD] == '' || !el.REVERFIELD || formData.value[el.REVERFIELD] == '') {
        SelectOptions.value[el.FIELD] = [];
        return acc;
      };
      let valueArr = formData.value[el.FIELD].split(","),
        nameArr = formData.value[el.REVERFIELD].split(","),
        dataArr = [];
      if (valueArr.length != nameArr.length) return false;
      for (let i = 0; i < valueArr.length; i++) {
        const value = valueArr[i],
          label = nameArr[i];
        dataArr.push({ LABEL: label, VALUE: value })
      }
      SelectOptions.value[el.FIELD] = dataArr;
    } else if (el.CONTROLS == 'ExCheckbox') {
      formData.value[el.FIELD + 'Arr'] = formData.value[el.FIELD] ? formData.value[el.FIELD].split(',') : [];
    } else {
      if (el.REVERFIELD) SelectOptions.value[el.FIELD] = el.REVERFIELD && formData.value[el.REVERFIELD] ? [{ LABEL: formData.value[el.REVERFIELD], VALUE: formData.value[el.FIELD] }] : [];
      if (el.LINKAGE && el.LINKAGE.includes("LOADDATA") && formData.value[el.FIELD]) Change_SelectChangeAfter(el, formData.value[el.FIELD])
    }
    return acc;
  }, []);
  DropdownRefIndex.value = Array.from(new Set([...indexArr]));
};
const debounceGetData = debounce((margeData = false) => {
  // GET_SelectTableData(props.config)
  if (!margeData) selectTableDataPage.value = 1
  GET_SelectTableData(currentConfig.value, margeData)
}, 300)
/** 获取下拉表格配置 */
const GET_SelectTableConfig = config => {
  // if (!proxy.$getConfig) return console.error("Err:@eosine/form:globalConfig 缺少getConfig全局方法")
  let { FIELD, OTHER, SLOTCFG } = config;
  if (SLOTCFG == "" || OTHER == "") return console.error("Err:filterForm:useSelectTable配置错误");
  if (SelectTableKey.value != FIELD) {
    SelectTableKey.value = FIELD;
    let ids = []
    try {
      let JsonSLOTCFG = JSON.parse(SLOTCFG);
      let { MODULEID, PAGEID, STYLE, COL } = JsonSLOTCFG
      ids = [MODULEID, PAGEID, STYLE, COL]
    } catch (error) {
      ids = SLOTCFG.split(",");
    }
    if (ids.length < 2) return console.error("Err:@eosine/form:useSelectTable配置错误");
    let [MODULEID, PAGEID, downCss, COL] = ids;
    let downCssArr = downCss ? downCss.split("*") : ["500px", "300px"];
    SelectModalConfig.value.width = downCssArr[0];
    SelectModalConfig.value.height = downCssArr[1];




    SelectModalConfig.value.columns = COL ? SET_CustemModalCOL(COL) : defaultConfig.selectTableColumn
    SelectTableConfig.value = {
      PK_MODULE: MODULEID,
      BILLNO: PAGEID,
      CUSTOMPLAN: []
    }
    GET_SelectTableData(config, false);


    return

    proxy.$getConfig({ MODULEID, PAGEID }).then(({ RESULT }) => {
      SelectTableConfig.value = RESULT;
      SelectModalConfig.value.columns = RESULT.COLUMNS.filter(el => el.ISSHOW == "1");
      SelectModalConfig.value.tableColumns = RESULT.COLUMNS.filter(el => el.ISSHOW == "1");
      GET_SelectTableData(config, false);
    }).catch((err) => {
      SelectTableKey.value = "";
    });




  } else {
    GET_SelectTableData(config, false);
  }
}

// /** 设置自定义下拉表格列数据  */
// function SET_CustemModalCOL(config) {
//   const newCol = config.split("@");
//   let arr = [], baseCol = cloneDeep(defaultConfig.selectTableColumn);
//   baseCol.map((el, index) => {
//     el.FIELD = newCol[index] || el.FIELD
//     arr.push(el)
//   })
//   return arr
// }

/** 获取下拉表格数据 */
const GET_SelectTableData = (config, margeData = false) => {
  if (!proxy.$getData) return console.error("Err:@eosine/form:globalConfig 缺少getData全局方法")
  let { FIELD, OTHER, SLOTCFG } = config;
  if (SelectTableKey.value != FIELD || !SelectTableConfig.value.PK_MODULE) return GET_SelectTableConfig(config);
  let { url, data: queryParams, importantData } = ParseOtherConfig(OTHER);
  let { PK_MODULE, BILLNO, CUSTOMPLAN } = SelectTableConfig.value;
  let ids = []

  try {
    let JsonSLOTCFG = JSON.parse(SLOTCFG);
    let { MODULEID, PAGEID, STYLE } = JsonSLOTCFG
    ids = [MODULEID, PAGEID, STYLE]
  } catch (error) {
    ids = SLOTCFG.split(",");
  }
  if (ids.length < 2) return console.error("Error: 配置错误");
  let [MODULEID, PAGEID, downCss] = ids;
  // let downCssArr = downCss ? downCss.split("*") : ["500px", "300px"];
  let downCssArr = downCss ? downCss.split("*") : defaultConfig.selectTableSize;
  SelectModalConfig.value.width = downCssArr[0];
  SelectModalConfig.value.height = downCssArr[1];
  // const keyword = !formData.value[FIELD] ? '' : formData.value[FIELD];
  const keyword = props.formData.DEFAULTVAL
  // const keyword = props.formData.DEFAULTVAL2


  if (margeData) {
    // if (SelectModalList.value.length > 0 && SelectModalList.value.length >= selectTableDataTotal.value) {
    //   const isShow = newDropdownRef?.isPanelVisible()
    //   if (!isShow) newDropdownRef.showPanel()
    // } else {
    selectTableDataPage.value++
    // }
  } else {
    selectTableDataPage.value = 1
  }

  let data = {
    KEYWORD: keyword,
    PAGENUM: selectTableDataPage.value,
    PAGESIZE: selectTableDataSize.value,
    SORTNAME: "",
    SORTORDER: "",
    MODULEID: PK_MODULE,
    PAGEID: BILLNO,
    PROGRAMID: CUSTOMPLAN && CUSTOMPLAN.length > 0 ? CUSTOMPLAN[0].BILLNO : "", // 查询方案ID
    // QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: keyword, QUERYTYPE: "Like" }], // 查询方案-查询结构
    QUERYS: [{ FIELD: "KEYWORD", DEFAULTVAL: keyword, QUERYTYPE: "FUZZYRET" }], // 查询方案-查询结构
    ...queryParams,
    ...importantData
  };
  proxy.$getData({
    url,
    method: "post",
    data,
    headers: {
      repeatSubmit: false,
    },
  }).then((res) => {
    // SelectModalList.value = res.RESULT.RECORDS;
    // SelectModalConfig.height = res.RESULT.RECORDS.length >= 10 || res.RESULT.RECORDS.length == 0 ? parseInt(downCssArr[1]) : res.RESULT.RECORDS.length * 26 + 30;


    if (margeData) {
      if (res.RESULT.RECORDS.length > 0) SelectModalList.value = SelectModalList.value.concat(res.RESULT.RECORDS)
    } else {
      SelectModalList.value = res.RESULT.RECORDS;
    }
    // selectTableDataTotal.value = res.RESULT.TOTAL

  }).catch(err => {
    SelectModalList.value = []
    // SelectModalConfig.height = parseInt(downCssArr[1]);
  }).finally(() => {
    DropdownRef.value.showPanel()
  });
}

// const ExSelectModalBlur = () => {
//   DropdownRef.value.showPanel()
// }




function computedIsDisabled(val) {
  if (props.ENABLESTATE == 1 && val) {
    return true
  } else {
    return false
  }
}

const showDisabledStr = 'CDate,LDate,TDate,LWork,CWork,LMonth,CMonth,TMonth,CDateQ,CDateH'
const showNumberStr = 'CDateQNQ,CDateQNH,CDateHNQ,CDateHNH'


const showDateType = computed(() => {
  if (showDisabledStr.includes(props.formData.QUERYTYPE)) {
    props.formData.DEFAULTVAL = ''
    return '0'
  } else if (showNumberStr.includes(props.formData.QUERYTYPE)) {
    return '1'
  }

});

watch(() => props.formData.QUERYTYPE, value => {
  if (showDisabledStr.includes(props.formData.QUERYTYPE)) {
    showDateType.value = '0'
    props.formData.DEFAULTVAL = ''
  } else if (showNumberStr.includes(props.formData.QUERYTYPE)) {
    showDateType.value = '1'
  }


})

/** 更具配置转换 modal Option  */
const GET_ModalOption = config => {
  let { LABEL, SLOTCFG, OTHER } = config;
  let width = "70%", height = "60%"
  if (SLOTCFG == "") return console.error("Err:@eosine/form:ModalConfig:配置错误");
  let ids = []
  try {
    let JsonSLOTCFG = JSON.parse(SLOTCFG);
    let { MODULE, PAGEID, STYLE = "70%*60%" } = JsonSLOTCFG
    ids = [MODULE, PAGEID, STYLE]
  } catch (error) {
    ids = SLOTCFG.split(",");
  }
  if (ids.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
  let { data, importantData } = ParseOtherConfig(OTHER);
  if (ids.length == 3) {
    let wh = ids[2].split('*');
    if (wh.length < 2) return console.error("Err:@eosine/form:ModalConfig:配置错误");
    width = wh[0];
    height = wh[1];
  }
  let options = {
    _config: deepClone(config),
    title: LABEL,
    width: width,
    height: height,
    params: { ...data, ...importantData },
    page: {
      MODULEID: ids[0],
      PAGEID: ids[1]
    }
  }
  return options
}

const openModalOptions = ref({})
function openModal() {
  let options = GET_ModalOption(currentConfig.value)
  options.contnet = "table"
  options.currentIndex = props.currentIndex

  // eosModalRef.value.open(options)



  emit("openModal", options)


  openModalOptions.value = options
  // emit("openModal", options)
  // const modalConfig = {
  //   title: options.title,
  //   config: null,
  //   type: 'vtable',
  //   menuID: options.page,
  //   currentData: [],
  // }


  // eosModalRef.value.openModal(options)

}

const closeModal = () => {
  eosModalRef.value.close()
}

/** 表格页面 双击 */
const TablePagedbClick = (row) => {

  // props.formData.DEFAULTVAL = row.BILLNO
  // props.formData.DEFAULTVAL2 = row.VNAME

  const { REVERFIELD } = currentConfig.value.
    props.formData.DEFAULTVAL = REVERFIELD ? row[REVERFIELD] : row.VNAME

  // if (Object.hasOwn(openModalOptions.value, '$formRef')) {
  //   openModalOptions.value.$formRef.update(openModalOptions.value._config, row);
  // } else if (Object.hasOwn(openModalOptions.value, 'rowIndex')) {
  //   proxy.$.refs[openModalOptions.value._subId + "Ref"].update(openModalOptions.value._config, row, openModalOptions.value.rowIndex);
  // } else {
  // FormRef.value.update(openModalOptions.value._config, row);
  // }
  closeModal();
};
const TablePageRef = ref(null)
const handleConfirm = () => {
  const CheckRows = TablePageRef.value.getCheckRows();
  if (!CheckRows.length) return proxy.$modal.msgWarning("请选择数据");
  // if (Object.hasOwn(modalConfig.value, '$formRef')) {
  //   modalConfig.value.$formRef.update(modalConfig.value._config, CheckRows);
  // } else if (Object.hasOwn(modalConfig.value, 'rowIndex')) {
  //   proxy.$.refs[modalConfig.value._subId + "Ref"].update(modalConfig.value._config, CheckRows, modalConfig.value.rowIndex);
  // } else {
  //   FormRef.value.update(modalConfig.value._config, CheckRows);
  // }

  props.formData.DEFAULTVAL = CheckRows[0].BILLNO
  props.formData.DEFAULTVAL2 = CheckRows[0].VNAME

  closeModal();
};



const showVcodeList = () => {
  try {
    return JSON.parse(currentConfig.value.VCODE)
  } catch (error) {
    return []
  }

}

const setDataArrs = () => {
  const validControls = ["ExSelectMultiple", "ExSelectMutiple", "ExCheckbox", "ExRegion", "ExArea", "ExDateRange", "ExDateTimeRange", "ExDate"];
  if (validControls.includes(currentConfig.value.CONTROLS) && props.formData.DEFAULTVAL && props.formData.DEFAULTVAL != '') {
    props.formData.DEFAULTVALArr = props.formData.DEFAULTVAL.split(",");
  }
};

// 时间确认事件
function DateChange(val) {
  if (
    currentConfig.value.CONTROLS == "ExDateRange" ||
    currentConfig.value.CONTROLS == "ExDateTimeRange" ||
    currentConfig.QUERYTYPE == 'Between' || currentConfig.QUERYTYPE == 'NotBetween'
  ) {
    props.formData.DEFAULTVAL = !val ? "" : val.join(",");
  } else {
    props.formData.DEFAULTVAL = !val ? "" : val;
  }
}

// const modalConfig = ref({});
// const inputVisible = ref(false);
// const ExSelectModalInput = (e, config) => {
//   if (e) {
//     tableData.value = [];

//     let { LABEL, SLOTCFG, OTHER } = config;
//     if (SLOTCFG == "") return console.error("Error: 配置错误");
//     let ids = SLOTCFG.split(",");
//     if (ids.length < 2) return console.error("Error: 配置错误");
//     let { url, data, importantData } = ParseOtherConfig(OTHER);


//     let MODULEID = ids[0];
//     let PAGEID = ids[1];
//     let portData = {
//       ...data,
//       MODULEID,
//       PAGEID,
//     };

//     modalConfig.value = {
//       // PAGEID,
//       // MODULEID,
//       portData,
//       url,
//     };

//     queryData(url, portData);

//     inputVisible.value = true;
//   }
// };
// const PAGENUM = ref(0);
// const loadExSelectModalTable = () => {
//   let portData = {
//     ...modalConfig.value.portData,
//     PAGENUM: PAGENUM.value++,
//   };
//   queryData(modalConfig.value.url, portData);
// };

// const queryData = (url, portData) => {
//   getTableData(url, portData)
//     .then((res) => {
//       const { RECORDS, SIZE, TOTAL, CURRENT, PAGES } = res.RESULT;
//       if (tableData.value.length == 0) {
//         tableData.value = RECORDS;
//       } else {
//         tableData.value.push(...RECORDS);
//       }
//     })
//     .finally(() => { });
// };

const SelectValueTo = ref([]);

// 解析 Other 配置
function ParseOtherConfig(config) {
  if (!config) {
    SelectValueTo.value = [];
    return { url: "", data: {}, importantData: {} };
  }
  try {
    // let newConfig = JSON.parse(config)[0];
    let newConfig = Array.isArray(JSON.parse(config)) ? JSON.parse(config)[0] : JSON.parse(config)
    if (newConfig.setvalue && JSON.stringify(newConfig.setvalue) != "{}") {
      let arr = [];
      for (const key in newConfig.setvalue) {
        arr.push({ k: key, v: newConfig.setvalue[key] });
      }
      SelectValueTo.value = arr;
    }
    return {
      url: newConfig.url,
      data: newConfig?.params,
      importantData: newConfig?.importantData,
    };
  } catch (error) {
    if (config.indexOf("/") == "0") {
      let paramsArr = config.split("?"),
        url = "",
        setQueryParam = {},
        queryJson = {},
        setImportantParam = {},
        importantData = {};

      if (paramsArr.length == 0) {
        url = config;
        SelectValueTo.value = [];
      } else if (paramsArr.length > 0) {
        url = paramsArr[0];
        if (paramsArr.length > 1) {
          let { obj, importantObj } = GetUrlParams("a?" + paramsArr[1], "obj");
          queryJson = obj;
          importantData = importantObj;
        }
        if (paramsArr.length > 2) {
          let { obj, importantObj } = GetUrlParams("a?" + paramsArr[2], "obj");
          setQueryParam = obj;
          setImportantParam = importantObj;
          queryJson = { ...queryJson, ...ConvertData(setQueryParam) };
          importantData = {
            ...importantData,
            ...ConvertData(setImportantParam),
          };
        }
        SelectValueTo.value = paramsArr[3] ? GetUrlParams("a?" + paramsArr[3], "arr") : [];
      }
      return { url, data: queryJson, importantData };
    } else {
      console.error("配置解析错误!", error);
    }
  }
}
/** 转换数据 */
function ConvertData(obj) {
  let data = {};
  // for (let ii in obj) {
  //     let valueKey = obj[ii]
  //     if (valueKey.includes("M$")) {
  //         valueKey = calcHasMSKey(valueKey)
  //         data[ii] = props.mainFormData[valueKey] || "";
  //     } else if (valueKey.includes("S$")) {
  //         valueKey = calcHasMSKey(valueKey)
  //         data[ii] = props.formData[valueKey] || "";
  //     } else {
  //         data[ii] = props.formData[valueKey] || "";
  //     }
  // }
  return data;
}

// 获取url 后面的参数
function GetUrlParams(url, backType) {
  let reg = /([^&?=]+)=([^&?=]+)/g,
    obj = {},
    importantObj = {},
    arr = [];
  url.replace(reg, function () {
    if (arguments[1].includes("!")) {
      let key = arguments[1].substr(1); //删除第一个字符
      importantObj[key] = arguments[2];
    } else {
      obj[arguments[1]] = arguments[2];
    }
    let objs = {};
    objs.k = arguments[1];
    objs.v = arguments[2];
    arr.push(objs);
  });
  return backType == "obj" ? { obj, importantObj } : arr;
}

onMounted(() => {
  setDataArrs()
  // inData()
});
</script>

<style scoped lang="scss">
.filterForm {
  display: flex;
  // z-index: 9999;
}

:deep(.vxe-input .vxe-input--inner[disabled], .vxe-input.is--disabled) {
  background-color: #f5f5f6 !important;
}

.ExSelectModal {
  &-header {
    padding: 6px;
  }

  &-header:first-child {
    background-color: #eff3f7;
    padding: 10px 15px;
  }

  &-left {
    width: 34%;
  }

  &-right {
    width: 66%;
  }

  &-footer {
    background-color: #f5f5f5;
  }
}

.ExSelectModalPopver {}

:deep(.el-select) {
  height: 26px !important;
  line-height: 26px !important;
}

:deep(.el-input) {
  height: 26px !important;
  line-height: 26px !important;
}

:deep(.el-input__wrapper) {
  box-shadow: none;
  border: 1px solid #949eb5;
}

:deep(.el-popover) {
  padding: 0 !important;
}

:deep(.el-popper.is-light) {
  padding: 0 !important;
}

:deep(.el-select__wrapper) {
  height: 26px !important;
  line-height: 26px !important;
  min-height: auto;
  box-shadow: 0 0 0 1px #949eb5 inset;
  border-radius: 2px !important;
  font-size: 12px;
  color: #12151A;
}

:deep(.el-select__placeholder) {
  color: #12151A !important;
}

:deep(.el-select__placeholder.is-transparent) {
  color: #535B6A !important;
}

.popperClass {
  background-color: #333
}




.el-select-dropdown__item {
  background-color: #f3f3f4;

  &.is-hovering {
    color: #333 !important;
    background-color: #cbdbfb !important;
  }

  &.is-selected {
    color: #fff !important;
    background-color: #5691ca !important;
  }
}

.el-tree {
  --el-fill-color-light: var(--el-color-primary-light-9) !important;
  --el-tree-node-content-height: 28px !important;
  ---el-tree-node-hover-bg-color: var(--el-color-primary-light-9) !important;
}

.select-options {
  &.el-poper {
    top: -10px !important;
  }

  .el-popper__arrow {
    display: none !important;
    opacity: 1;
  }
}

// .vxe-select{
//   border-color: #949eb5;

// }
:deep(.vxe-input) {
  border-color: #949eb5 !important;
  height: 26px !important;
  border-radius: 2px !important;
  // color: #12151A !important;
}

:deep(.vxe-input--inner) {
  color: #12151A !important;

  &::placeholder {
    color: #535B6A !important;
  }

}

:deep(.vxe-select--panel) {
  z-index: 999999 !important;
  // z-index: 9999 !important;
}


:deep(.el-date-editor .el-range__icon) {
  display: none !important;
}

:deep(.el-range-editor.el-input__wrapper) {
  // padding: 0 4px !important;
  padding: 0 !important;
}

:deep(.el-date-editor .el-range-separator) {
  padding: 0 !important;

}
</style>
