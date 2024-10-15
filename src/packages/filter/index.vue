<!--
 * 高级查询组件
 * @author: wsd
 * @since: 2024-04-28
 * index.vue
-->
<template>
  <div class="advancedQuery" :style="{ paddingTop: AdcPaddingTop + 'px' }">
    <div class="disflex advancedQuery-alone advancedQuery-aloneTop " :style="{ marginBottom: AdcBottom + 'px' }">
      <div class="advancedQuery-title">我的方案</div>
      <div class="currentRadio" :class="chooseRadioVal == item.BILLNO ? 'active' : ''"
        v-for="(item, index) in myPlanList" :key="index" @click="clickRadio(item, 1)"> {{ item.VNAME }}
      </div>
    </div>
    <div class=" advancedQuery-alone ">
      <div class="advancedQuery-title">快捷过滤</div>
      <div class="oneLine">
        <FiltrationCom ref="filtrationComRef" :filterConfig="filterConfig" :filterArr="filterArr" class="oneLine-left"
          :style="{ height: FiltrationComHeight, maxWidth: binSize + 'px' }" @changeFilter="changeFilter"
          :chooseRadioObj @changeCurrentQueryList="changeCurrentQueryList" :settingArr="settingQueryList"
          @inputEnter="searchBtn" @openModal="openModal" />
        <div class="advancedQuery-rightBtn">
          <img @click="searchBtn" src="@/assets/images/icon/search.png" alt="">
          <vxe-pulldown ref="pulldownRef" popup-class-name="dropdown-table" transfer style="max-width: 400px;">
            <template #default>
              <img @click="clickSettingBtn" @mouseover="showHiImg = true" @mouseout="showHiImg = false" v-if="showHiImg"
                style="transform: translateY(4px);" class="ml-10" src="@/assets/images/icon/setting-ac.png" alt="">
              <img @click="clickSettingBtn" @mouseover="showHiImg = true" @mouseout="showHiImg = false" v-else
                style="transform: translateY(4px);" class="ml-10" src="@/assets/images/icon/setting.png" alt="">
            </template>
            <template #dropdown>
              <!-- 设置组件 -->
              <SettingFilter ref="settingFilterRef" :filterConfig="filterConfig" :filterArr="filterArr"
                @changeCondition="changeCondition" @resetCondition="resetCondition" @delFilterArr="delFilterArr"
                @changeFilter="changeFilter" @changeCurrentQueryList="settingChangeCurrentQueryList"
                @openModal="openSettingModal" />
              <el-divider />
              <div class="tr">
                <el-button @click="clostPopver" size="small">取消</el-button>
                <el-button type="primary" @click="clostPopver" size="small">确定</el-button>
              </div>
            </template>
          </vxe-pulldown>


          <div class="ml8 btnStyle" @click="clickSavePlan" v-if="showSaveBtn">保存</div>
          <div class="btnStyle ml8" @click="resetForm">重置</div>
          <template v-if="filterArr.length > 1">
            <el-icon color="#0055ff" :size="12" class="ml8 cp foldOUnfoldIcon" @click="foldOUnfold()">
              <Icon :icon="FiltrationComHeight == 'auto' ? 'codicon:fold-up' : 'codicon:fold-down'"></Icon>
            </el-icon>
          </template>
        </div>
      </div>
    </div>
    <!-- 过滤弹窗 -->
    <AllocationPlan :menuID="menuID" :showModal="showModal" :leftList="myPlanList" @updateLeftList="getPlanList"
      ref="allocationPlanRef" :showSaveBtn :filterConfig="filterConfig" @closeModal="closeShowModal" :queryConfig>
    </AllocationPlan>

  </div>
</template>

<script setup>
import { computed, inject, reactive, ref, watch, onMounted, defineProps, defineEmits, defineExpose,getCurrentInstance } from 'vue';
console.log("🍍💓 ~ file: index.vue:66 ~ getCurrentInstance:", getCurrentInstance)
const request = inject('request')

const resolution = inject('resolution')
const storeModules = inject('storeModules')


import FiltrationCom from "@/components/filtrationCom.vue";
import SettingFilter from "@/components/settingFilter.vue";
import AllocationPlan from "@/components/allocationPlan.vue";
const { proxy } = getCurrentInstance();


const AdcPaddingTop = computed(() => {
  return resolution.value.AdcPaddingTop

})
const AdcBottom = computed(() => {
  return resolution.value.AdcBottom
})

const showHiImg = ref(false)
const emit = defineEmits(["updateHeight", "handleCustomPlan"]);

const props = defineProps({
  queryConfig: {
    type: Array,
    default: [],
  },
  menuID: {
    type: Object,
    default: () => { },
  },
  showSaveBtn: {
    type: Boolean,
    default: true,
  },
  sonEosFilterObj: {
    type: Object,
    default: () => { },
  }
});
const currentOptions = ref({})
function openModal(options) {
  currentOptions.value = options
  emit("openModal", options)

}

const currentOptionsSetting = ref({})
function openSettingModal(options) {
  currentOptionsSetting.value = options
  emit("openSettingModal", options)
}

const showModal = ref(false);

// 计算查询组件按钮左侧的宽度
const binSize = computed(() => {
  const windowWidth = document.documentElement.clientWidth;
  // let val = (windowWidth - 40 - 61 - 156) / 367; // 计算每行显示的数量
  let val = (windowWidth - 40 - 61 - 156) / 386; // 计算每行显示的数量
  let newVal = Math.floor(val);
  return 386 * newVal;
});

const openShowModal = () => {
  showModal.value = true;
};
const closeShowModal = (obj) => {
  showModal.value = false;
  if (obj?.isQuerySearch) {  // 这个代表点击了列表过滤的条件内的确定
    emit("handleCustomPlan", {
      type: "1",
      PROGRAMID: obj.PROGRAMID,
      QUERYS: obj.QUERYS,
      DATA: obj.DATA
    });
  }
};
const querySaveList = ref([]);

const clickStatus = ref(1); // 1是点击外层查询  2 是点击设置的确定

const filterArr = ref([]);
const defaultFilterArr = ref([]);
// 我的方案
const chooseRadioVal = ref(null);
const chooseRadioObj = ref({});
const myPlanList = ref([]);
const settingFilterRef = ref(null);
const clickRadio = (item, type) => {
  chooseRadioVal.value = item?.BILLNO;
  chooseRadioObj.value = item;
  let query = {
    ...props.menuID,
    PKBILLNO: item?.BILLNO,
    VTYPE: "0",
  };
  // 查询方案里面的值
  // axiosGet("/sys/queryprogUserDtl/getSubList", query).then((res) => {
  //   filterArr.value = res.RESULT;

  //   querySaveList.value = JSON.parse(JSON.stringify(res.RESULT));
  //   settingQueryList.value = JSON.parse(JSON.stringify(res.RESULT));

  //   settingFilterRef.value &&
  //     settingFilterRef.value.updateCurrentQueryList(res.RESULT);
  // });

  request({
    url: "/sys/queryprogUserDtl/getSubList",
    method: "post",
    data: query,
    encry: false
  }).then((res) => {
    filterArr.value = res.RESULT;
    querySaveList.value = JSON.parse(JSON.stringify(res.RESULT));
    settingQueryList.value = JSON.parse(JSON.stringify(res.RESULT));
    settingFilterRef.value &&
      settingFilterRef.value.updateCurrentQueryList(res.RESULT);


  })


  if (type == 1) {
    emit('handleCustomPlan', {
      type: "1",
      PROGRAMID: chooseRadioVal.value,
    })
    // emit("handleCustomPlan", {
    //   type: "1",
    //   PROGRAMID: chooseRadioVal.value,
    // });
  }
};
// 查询按钮事件
function searchBtn() {
  let QUERYS = querySaveList.value.map((ele) => {
    return {
      FIELD: ele.FIELD,
      QUERYTYPE: ele.QUERYTYPE,
      DEFAULTVAL: ele.DEFAULTVAL,
      DEFAULTVAL2: ele.DEFAULTVAL2,
      SORTCODE: ele.SORTCODE,
      DEFAULTVALArr: ele.DEFAULTVALArr,
      QRYCONT: ele.QRYCONT,
      QRYPRE: ele.QRYPRE,
      QRYSUF: ele.QRYSUF,
    }
  });

  emit("handleCustomPlan", {
    type: "2",
    PROGRAMID: chooseRadioVal.value,
    QUERYS: QUERYS,
  });
}

// 快捷过滤
const filterConfig = ref({
  filterSeceletArr: [],
  filterSeceletArr1: [],
});

watch(
  () => props.queryConfig,
  (value) => {
    filterConfig.value.filterSeceletArr = props.queryConfig.filter(
      (el) => el.ISSHOW != 0
    );
  },
  { immediate: true }
);

watch(
  () => props.sonEosFilterObj,
  (value) => {
    if (!value || !value.DEFAULTVAL) return

    let newArr = JSON.parse(JSON.stringify(querySaveList.value))
    newArr[currentOptions.value.currentIndex].DEFAULTVAL = value?.DEFAULTVAL || ''
    newArr[currentOptions.value.currentIndex].DEFAULTVAL2 = value?.DEFAULTVAL2 || ''

    if (value.openModalType == 'search') {
      filtrationComRef.value && filtrationComRef.value.updateCurrentQueryList(newArr);

    } else if (value.openModalType == 'setting') {
      settingFilterRef.value && settingFilterRef.value.updateCurrentQueryList(newArr);
    }

  },
  { immediate: true }
);
const popoverRef = ref(null);
const visible = ref(false);
const clostPopver = () => {
  // visible.value = false;
  pulldownRef.value.hidePanel()

};
const pulldownRef = ref(null)
const clickSettingBtn = () => {
  pulldownRef.value.showPanel()
}


const changeCurrentQueryList = (val) => {
  clickStatus.value = 1;
  querySaveList.value = JSON.parse(JSON.stringify(val));
};
const settingQueryList = ref([]);
const filtrationComRef = ref(null);
const settingChangeCurrentQueryList = (val) => {
  clickStatus.value = 2;
  settingQueryList.value = JSON.parse(JSON.stringify(val));
  filtrationComRef.value && filtrationComRef.value.updateCurrentQueryList(val);
};

const allocationPlanRef = ref(null);
const clickSavePlan = () => {
  if (myPlanList.value && chooseRadioObj.value.VTYPE == 1) {
    callAddition();
  } else {
    allocationPlanRef.value.showSaveAs(querySaveList.value);
  }
};
const resetForm = () => {
  clickRadio(chooseRadioObj.value, 1)
}
// 调用保存方案
const callAddition = () => {
  let QUERYS = [];
  QUERYS = querySaveList.value.map((ele, index) => {
    return {
      FIELD: ele.FIELD,
      LABEL: ele.LABEL,
      QUERYTYPE: ele.QUERYTYPE,
      DEFAULTVAL: ele.DEFAULTVAL,
      DEFAULTVAL2: ele.DEFAULTVAL2,
      SORTCODE: ele.SORTCODE,
      DEFAULTVALArr: ele.DEFAULTVALArr,
      QRYCONT: ele.QRYCONT,
      QRYPRE: ele.QRYPRE,
      QRYSUF: ele.QRYSUF,
      SORTCODE: index,
      VTYPE: "0",
    };
  });

  const protData = {
    BILLNO: chooseRadioVal.value, // 方案主键
    // VTYPE:0,
    QUERYS,
    ...props.menuID,
  };

  // savePlan(protData).then((res) => {
  //   proxy.$modal.msgSuccess("保存成功");
  // });
  request({
    url: "sys/queryprogUserDtl/add",
    method: "post",
    data: protData,
    encry: false
  }).then((res) => {
    proxy.$modal.msgSuccess("保存成功");

  })
};

const getPlanList = () => {
  // getList(props.menuID).then((res) => {
  //   myPlanList.value = res.RESULT;

  //   filterArr.value = [];
  //   querySaveList.value = []
  //   settingQueryList.value = []
  //   filtrationComRef.value && filtrationComRef.value.updateCurrentQueryList([])

  //   if (myPlanList.value.length) {
  //     let newArr = myPlanList.value.filter((ele) => ele.ISDEFAULT == 1);

  //     if (!chooseRadioVal.value) {
  //       chooseRadioVal.value = newArr.length
  //         ? newArr[0].BILLNO
  //         : myPlanList.value[0].BILLNO;

  //       clickRadio(newArr.length ? newArr[0] : myPlanList.value[0], 0);
  //     }
  //   }
  // });
  request({
    url: "sys/queryprogUser/getList",
    method: "post",
    data: props.menuID,
    encry: false
  }).then((res) => {
    myPlanList.value = res.RESULT;
    filterArr.value = [];
    querySaveList.value = []
    settingQueryList.value = []
    filtrationComRef.value && filtrationComRef.value.updateCurrentQueryList([])
    if (myPlanList.value.length) {
      let newArr = myPlanList.value.filter((ele) => ele.ISDEFAULT == 1);
      if (!chooseRadioVal.value) {
        chooseRadioVal.value = newArr.length
          ? newArr[0].BILLNO
          : myPlanList.value[0].BILLNO;

        clickRadio(newArr.length ? newArr[0] : myPlanList.value[0], 0);
      }
    }
  })
};

// 折叠和展示
const FiltrationComHeight = ref("34px");
const foldOUnfold = () => {
  FiltrationComHeight.value = FiltrationComHeight.value == 'auto' ? "34px" : "auto"
  emit("updateHeight");
};

const changeFilter = (val, item, index) => {
  filterArr.value[index] = JSON.parse(JSON.stringify(val));
};

const changeCondition = (e) => {
  filterArr.value.push(e);
  filterArr.value = JSON.parse(JSON.stringify(filterArr.value)); // 重新更新下数据 不然视图有问题
};
const resetCondition = () => {
  filterArr.value = JSON.parse(JSON.stringify(defaultFilterArr.value));
};
// 删除
const delFilterArr = (index) => {
  filterArr.value.splice(index, 1);
  emit("updateHeight", index);
};

watch(
  () => props.menuID,
  (value) => {
    chooseRadioVal.value = null
    getPlanList()
  },
  { immediate: true }
);

defineExpose({
  openShowModal,
  clostPopver,
});

onMounted(() => {
  // getPlanList();
});
</script>

<style scoped lang="scss">
.advancedQuery {
  // padding-top: 26px;
  font-size: 12px;
  overflow: hidden;

  .currentRadio {
    border: 1px solid #a1bacb;
    margin-right: 10px;
    padding: 4px 6px;
    color: #5c7390;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      color: var(--el-color-primary) !important;
      border-color: var(--el-color-primary) !important;
    }
  }



  &-alone {
    display: flex;

    :deep(.el-button) {
      height: 26px !important;
      line-height: 26px;
    }
  }

  &-title {
    color: #515967;
    font-weight: bold;
    margin-right: 13px;
    flex-shrink: 0;
    line-height: 26px;
  }

  &-rightBtn {
    line-height: 26px;
    display: flex;
    align-items: center;
    height: 25px;

    img {
      cursor: pointer;
    }

    :deep(.el-button) {
      padding: 0 4px !important;

      .el-icon {
        font-size: 16px !important;

      }
    }
  }

  .btnStyle {
    color: var(--el-color-primary) !important;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    margin-left: 8px;
  }

  .oneLine {
    display: flex;

    &-left {
      max-width: 1040px;
      // overflow: hidden;  // 加上的话，vxe 的下拉框的下拉会被遮挡  先注释
    }

    &-right {
      flex-shrink: 0;
      flex-grow: 1;
    }
  }

  .foldOUnfoldIcon {
    margin: 6px 0 0 10px;
    color: var(--el-color-primary) !important;
    transform: translateY(-2px);
  }
}

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
  border-radius: 2px;
  height: 26px;
}

:deep(.el-input__inner) {
  color: #12151a;
  font-size: 12px;
}

:deep(.el-input__inner::placeholder) {
  color: #767476;
  font-size: 12px;
}

:deep(.el-input__suffix) {
  color: #acafb4;
}

:deep(.firstSelect) {
  .el-input__wrapper {
    padding: 1px 1px 1px 6px;
  }

  .el-input__suffix-inner {
    background-color: #f7f7f7;
    border-left: 1px solid #d1d4da;
  }

  .el-input__suffix-inner:hover {
    background-color: #c1c7d3;

    .el-select__icon {
      color: #757689;
    }
  }

  .el-input__suffix-inner> :first-child {
    margin: 5px;
  }
}

:deep(.el-select__wrapper) {
  height: 26px !important;
  line-height: 26px !important;
  min-height: auto;
  box-shadow: 0 0 0 1px #949eb5 inset;
  border-radius: 2px !important;

  font-size: 12px;
  color: #12151A !important;

}

:deep(.el-select__placeholder) {
  color: #12151A !important;
}

:deep(.el-select__placeholder.is-transparent) {
  color: #535B6A !important;
}
</style>
