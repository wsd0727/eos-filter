<!--
 * 列表过滤种的条件组件
 * @author: wsd
 * @since: 2024-05-30
 * conditionModule.vue
-->
<template>
  <div class="container">
    <div class="disflex ml20" v-if="shouTop.length">
      <div class="mr10">可选组织</div>
      <div>
        <el-select v-model="formData[shouTop[0].REVERFIELD]" style="width: 300px" @change="changeShowTop">
          <el-option v-for="item in shouTopOptions" :key="item.VALUE" :label="item.LABEL" :value="item.VALUE">
          </el-option>
        </el-select>
      </div>
      <el-checkbox @change="changeShowTopCheckbox" class="ml20" v-model="allOrganization" label="所有组织" size="large" />
    </div>
    <div class="disflex mt-10 mb-10">
      <div class="mr10 btnStyle ml-10" @click="addLine">新增行</div>
      <div class="mr10 btnStyle" @click="delLine">删除行</div>
      <div class="mr10 btnStyle" @click="allDel">全部删除</div>
      <div class="mr10 btnStyle" @click="initLine">插入行</div>
      <div class="mr10 btnStyle" @click="copyLine">复制行</div>
    </div>
    <div class="content">
      <div v-for="(item, index) in newFilterArr" :key="index" class="oneLIne"
        :class="chooseOneLIneIndex == index ? 'active' : ''" @click="chooseOneLIne(item, index)">
        <div class="disflex">
          <FilterForm :filterConfig="filterConfig" :filterVal="item" v-model:formData="currentQueryList[index]"
            @changeFilter="(val) => changeFilter(val, item, index)" :isCondition="true" :hideBtn
            :ENABLESTATE="choosePlanObj.ENABLESTATE">
          </FilterForm>
          <el-icon color="#b9c9fb" :size="20" class="delIcon cp" @click="delLine(index)">
            <Icon icon="zondicons:minus-solid"></Icon>
          </el-icon>
          <!-- <el-button type="primary" link class="ml10" size="small" @click="clickDisabled(item, index)">{{
            item.ENABLESTATE ? '取消禁用' : '禁用' }}</el-button> -->
        </div>
      </div>
    </div>
    <!-- <eos-form ref="FormRef" v-model="formData" :tabsId :config="shouBottom" :labelWidth="labelWidth"
            :ctrlWidth="ctrlWidth" @openModal="openModal" @click="ClickEvent">
        </eos-form> -->
    <!-- <div style="width: 100%;"> -->

    <eos-form ref="FormRef" v-model="formData" :config="shouBottom"> </eos-form>
    <!-- </div> -->

    <div class="tr" v-if="!hideBtn">
      <el-button size="small" @click="confirm">确定</el-button>
      <el-button size="small" @click="cancle">取消</el-button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, reactive, ref, watch, onMounted, defineProps, defineEmits, defineExpose ,getCurrentInstance} from 'vue';
const request = inject('request')
import FilterForm from './filterForm.vue';
// import { savePlan } from '@/utils/advancedQuery';

const { proxy } = getCurrentInstance();

const emit = defineEmits(['closeModal']);
// const MenuID = inject("menuID");

const props = defineProps({
  filterConfig: {
    type: Object,
    default: {},
  },
  filterArr: {
    type: Array,
    default: [],
  },
  choosePlanObj: {
    type: Object,
    default: {},
  },
  menuID: {
    type: Object,
    default: () => { },
  },
  hideBtn: {
    type: Boolean,
    default: false,
  },
  queryConfig: {
    type: Array,
    default: [],
  },
});

const currentQueryList = ref([]);
const newFilterArr = ref([]);

watch(
  () => props.filterArr,
  (value) => {
    // console.log('执行了监听 filterarr', props.filterConfig )
    newFilterArr.value = value;
    currentQueryList.value = value.map((ele) => {
      if (ele.BILLNO) {
        return ele;
      } else {
        return {
          FIELD: '',
          QUERYTYPE: '',
          DEFAULTVAL: '',
          DEFAULTVAL2: '',
          SORTCODE: '',
          DEFAULTVALArr: '',
          QRYCONT: '',
          QRYPRE: '',
          QRYSUF: '',
        };
      }
    });
  },
  { immediate: true }
);

const shouTop = ref([]);
const shouTopOptions = ref([]);
const shouBottom = ref([]);
const formData = ref({});
const allOrganization = ref(true);

watch(
  () => props.queryConfig,
  (value) => {
    let newArr = value.filter((ele) => ele.ISSHOW == 0);
    shouTop.value = newArr.filter((ele) => ele.REVERFIELD == 'SYS_ORG_CODE');
    if (shouTop.value.length) {
      shouTopOptions.value = JSON.parse(shouTop.value[0].VCODE);
    }
    shouBottom.value = newArr.filter((ele) => ele.REVERFIELD == '' && ele.CONTROLS == 'ExSelect');
    shouBottom.value = shouBottom.value.map((ele) => {
      return {
        ...ele,
        ISSHOW: 1,
      };
    });
  },
  { immediate: true }
);

function changeShowTopCheckbox(val) {
  formData.value[shouTop.value[0].REVERFIELD] = '';
}
function changeShowTop(val) {
  allOrganization.value = false;
}

const addObj = computed(() => {
  return {
    ...props.filterArr[0],
    FIELD: '',
    QUERYTYPE: '',
    DEFAULTVAL: '',
    DEFAULTVAL2: '',
    SORTCODE: '',
    DEFAULTVALArr: '',
    QRYCONT: '',
    QRYPRE: '',
    QRYSUF: '',
  };
});

const chooseOneLIneIndex = ref({});
const chooseOneLIne = (item, index) => {
  chooseOneLIneIndex.value = index;
};
const addLine = () => {
  newFilterArr.value.push({});
  currentQueryList.value.push({});
};

const clickDisabled = (item, index) => {
  // 0-正常 1-禁用
  // newFilterArr.value[chooseOneLIneIndex.value].ENABLESTATE = newFilterArr.value[chooseOneLIneIndex.value].ENABLESTATE ? 0 : 1
  newFilterArr.value[index].ENABLESTATE = newFilterArr.value[index].ENABLESTATE ? 0 : 1;
};

const delLine = (index = null) => {
  if (
    index ||
    ((chooseOneLIneIndex.value || chooseOneLIneIndex.value == 0) && typeof chooseOneLIneIndex.value == 'number')
  ) {
    newFilterArr.value.splice(index ? index : chooseOneLIneIndex.value, 1);
    currentQueryList.value.splice(index ? index : chooseOneLIneIndex.value, 1);
    chooseOneLIneIndex.value = null;
  }
};

const allDel = () => {
  newFilterArr.value = [];
  currentQueryList.value = [];
};
const initLine = () => {
  if (chooseOneLIneIndex.value || chooseOneLIneIndex.value == 0) {
    newFilterArr.value.splice(chooseOneLIneIndex.value + 1, 0, {});
    currentQueryList.value.splice(chooseOneLIneIndex.value + 1, 0, {});
  }
};
const copyLine = () => {
  if (chooseOneLIneIndex.value || chooseOneLIneIndex.value == 0) {
    newFilterArr.value.push(newFilterArr.value[chooseOneLIneIndex.value]);
    currentQueryList.value.push(currentQueryList.value[chooseOneLIneIndex.value]);
  }
};

const changeFilter = (val, item, index) => {
  newFilterArr.value[index] = JSON.parse(JSON.stringify(val));
};

const confirm = () => {
  let QUERYS = [];
  QUERYS = currentQueryList.value.map((ele, index) => {
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
      VTYPE: '1',
      // ENABLESTATE: ele.ENABLESTATE,
    };
  });
  const protData = {
    BILLNO: props.choosePlanObj.BILLNO, // 方案主键
    // VTYPE:1,
    QUERYS,
    ...formData.value,
    ...props.menuID,
  };
  // savePlan(protData).then((res) => {
  //   proxy.$modal.msgSuccess('保存成功');
  //   let data = {
  //     isQuerySearch: true,
  //     QUERYS,
  //     DATA: formData.value,
  //     PROGRAMID: props.choosePlanObj.BILLNO,
  //   };
  //   emit('closeModal', data);
  // });

  request({
    url: "sys/queryprogUserDtl/add",
    method: "post",
    data: protData,
    encry: false
  }).then((res) => {
    proxy.$modal.msgSuccess('保存成功');
    let data = {
      isQuerySearch: true,
      QUERYS,
      DATA: formData.value,
      PROGRAMID: props.choosePlanObj.BILLNO,
    };
    emit('closeModal', data);
  })





};

const confirmData = () => {
  let QUERYS = currentQueryList.value.map((ele, index) => {
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
      VTYPE: props.hideBtn ? ele.VTYPE || 1 : '1',
    };
  });
  return QUERYS;
};

const cancle = () => {
  emit('closeModal');
};

defineExpose({ confirmData, allDel });
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';

.btnStyle {
  color: var(--el-color-primary) !important;
  cursor: pointer;
  font-size: 14px;
}

.content {
  height: 230px;
  overflow-y: auto;
  // width: 780px;
  width: 100%;
  border: 1px solid #e9e9e9;
  margin-bottom: 10px;
}

.oneLIne {
  width: 100%;
  padding: 6px 0;
  transform: translateX(-8px);

  &.active {
    background-color: #e2e9fd;
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
}

:deep(.el-select__placeholder) {
  color: #12151a !important;
}

:deep(.el-select__placeholder.is-transparent) {
  color: #535b6a !important;
}
</style>
