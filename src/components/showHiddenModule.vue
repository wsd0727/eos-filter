<!--
 * 列表过滤中的排序组件
 * @author: wsd
 * @since: 2024-06-13
 * showHiddenModule.vue
-->
<template>
    <div class="showHiddenModule">
        <el-row gutter="20">
            <el-col :span="20">
                <div class="contrHeight">
                    <table style="width: 100%;">
                        <!-- <thead style="position: sticky;top: 0;z-index: 999;"> -->
                        <thead>
                            <tr>
                                <td>
                                    序号
                                    <span class="line"></span>
                                </td>
                                <td>
                                    字段
                                    <div class="line"></div>
                                </td>
                                <td>
                                    <div class="disflex">
                                        <el-checkbox v-model="allIS_SHOW" true-value="1" false-value="0"
                                            @change="changeallIS_SHOW" />
                                        <span class="ml-5">显示</span>
                                        <span class="line"></span>
                                    </div>
                                </td>
                                <td>
                                    宽度
                                    <div class="line"></div>

                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border: none;background-color: #ffffe3;">
                                <td style="padding: 0;"></td>
                                <td style="padding: 0;">
                                    <el-input v-model="searchValue" style="width: 100%;" placeholder="过滤条件"
                                        @input="searchInput"></el-input>
                                </td>
                                <td style="padding: 0;"></td>
                                <td style="padding: 0;"></td>
                            </tr>
                            <tr v-for="(item, index) in filedList" :key="item.BILLNO"
                                :class="item.BILLNO == chooseLeftVal.BILLNO ? 'active' : ''"
                                @click="clickLeftTable(item)">
                                <!-- <td style="width: 50px;">{{ index + 1 }}</td> -->
                                <td style="width: 50px;">{{ item.SORTCODE }}</td>
                                <td>{{ item.LABEL }}</td>
                                <td style="width: 70px;text-align: center;"><el-checkbox v-model="item.IS_SHOW"
                                        true-value="1" false-value="0" @change="val => changecheck(val, item)" /></td>
                                <td style="width: 60px;"><el-input v-model="item.WIDTH" type="number" size="small"
                                        style="width: 60px;" @input="val => changinput(val, item)"></el-input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </el-col>
            <el-col :span="4">
                <div><el-button type="primary" class="mb-20" size="small" @click="clickBtn(4)">上 移</el-button></div>
                <div><el-button type="primary" class="mb-20" size="small" @click="clickBtn(5)">下 移</el-button></div>
                <div class="mb-10">调至（行）</div>
                <div class="mb-20"><el-input type="number" v-model="numberLIne" size="small" @blur="clickBtn(1)"
                        style="width: 50px;"></el-input></div>
                <div><el-button type="primary" class="mb-20" size="small" @click="clickBtn(2)">默认值</el-button></div>
            </el-col>
        </el-row>
        <div class="tr ">
            <el-button @click="confirm" size="small">确定</el-button>
            <el-button @click="cancle" size="small">取消</el-button>
        </div>
    </div>
</template>

<script setup>
import { computed, inject, reactive, ref,watch, onMounted,defineProps,defineEmits,defineExpose} from 'vue';
const request = inject('request')
const { proxy } = getCurrentInstance();

const emit = defineEmits(["closeModal"]);


const props = defineProps({
    MenuID: {
        type: Object,
        default: {},
    },
    choosePlanObj: {
        type: Object,
        default: {},
    },
});

const allIS_SHOW = ref(false)
const changeallIS_SHOW = (e) => {
    filedList.value.forEach((item, index) => {
        filedList.value[index].IS_SHOW = e
    })
}
const changecheck = (val, row) => {
    let index = filedListClone.value.findIndex(item => item.BILLNO == row.BILLNO)
    console.log("🚀 ~ file: showHiddenModule.vue:107 ~ changecheck ~ index:", index)
    console.log("🚀 ~ file: showHiddenModule.vue:108 ~ changecheck ~ filedListClone.value[index]:", filedListClone.value[index])

    filedListClone.value[index].IS_SHOW = val

}
const changinput = (val, row) => {
    let index = filedListClone.value.findIndex(item => item.BILLNO == row.BILLNO)
    filedListClone.value[index].WIDTH = val

}
const confirm = () => {

    // let FIELDS = filedList.value
    let FIELDS = filedListClone.value
    // let FIELDS = Object.assign(filedListClone.value,filedList.value)

    FIELDS.forEach((item, index) => {
        FIELDS[index].SORTCODE = String(item.SORTCODE)
    })
    const protData = {
        PKBILLNO: props.choosePlanObj.BILLNO, // 方案主键
        VTYPE: props.choosePlanObj.VTYPE,
        DEALTYPE: '1', // 1-隐藏保存，2-排序保存
        FIELDS,
        ...props.MenuID,
    };
    // updateFields(protData).then((res) => {
    //     proxy.$modal.msgSuccess("保存成功");
    //     emit("closeModal")
    // });
    request({
        url: "sys/queryprogUserDtl/updateFields",
        method: "post",
        data: protData,
        encry: false
    }).then((res) => {
        proxy.$modal.msgSuccess("保存成功");
        emit("closeModal")
    })
}

const cancle = () => {
    emit("closeModal")
}


const chooseLeftVal = ref({})
const clickLeftTable = (item) => {
    chooseLeftVal.value = item
    numberLIne.value = null
}

const numberLIne = ref(null)

const clickBtn = (flag) => {
    if (!chooseLeftVal.value.BILLNO) return
    switch (flag) {
        case 1:
            if (numberLIne.value >= filedList.value.length || !chooseLeftVal.value.BILLNO) return
            let index3 = filedList.value.findIndex(item => item.BILLNO == chooseLeftVal.value.BILLNO)
            // let currentData3 = JSON.parse(JSON.stringify(filedList.value[index3]))
            // let exchangeData3 = JSON.parse(JSON.stringify(filedList.value[numberLIne.value - 1]))
            // filedList.value.splice(index3, 1, exchangeData3)
            // filedList.value.splice(numberLIne.value - 1, 1, currentData3)

            let newSORTCODE1 = JSON.parse(JSON.stringify(filedListClone.value[index3].SORTCODE))
            // let newSORTCODE2 = JSON.parse(JSON.stringify(filedListClone.value[numberLIne.value].SORTCODE))

            filedListClone.value[index3].SORTCODE = numberLIne.value
            filedListClone.value[numberLIne.value - 1].SORTCODE = newSORTCODE1
            sortData()



            break
        case 2:
            let newArr = initFiledList.value.filter(ele => ele.BILLNO == chooseLeftVal.value.BILLNO)
            let newIndex = filedList.value.findIndex(item => item.BILLNO == chooseLeftVal.value.BILLNO)
            filedList.value[newIndex] = JSON.parse(JSON.stringify(newArr[0]))

            break
        case 3:

            break
        case 4:
            let index1 = filedListClone.value.findIndex(item => item.BILLNO === chooseLeftVal.value.BILLNO) || null
            if (index1 == -1 || index1 == 0 || !index1) return
            // let currentData = JSON.parse(JSON.stringify(filedList.value[index1]))
            // let exchangeData = JSON.parse(JSON.stringify(filedList.value[index1 - 1]))
            filedListClone.value[index1].SORTCODE = filedListClone.value[index1].SORTCODE - 1
            filedListClone.value[index1 - 1].SORTCODE = filedListClone.value[index1 - 1].SORTCODE + 1

            sortData()
            // filedList.value.splice(index1, 1, exchangeData)
            // filedList.value.splice(index1 - 1, 1, currentData)
            break
        case 5:
            let index2 = filedListClone.value.findIndex(item => item.BILLNO === chooseLeftVal.value.BILLNO)
            if (index2 == filedListClone.value.length - 1) return
            // let currentData2 = JSON.parse(JSON.stringify(filedList.value[index2]))
            // let exchangeData2 = JSON.parse(JSON.stringify(filedList.value[index2 + 1]))
            // filedList.value.splice(index2, 1, exchangeData2)
            // filedList.value.splice(index2 + 1, 1, currentData2)

            filedListClone.value[index2].SORTCODE = filedListClone.value[index2].SORTCODE + 1
            filedListClone.value[index2 + 1].SORTCODE = filedListClone.value[index2 + 1].SORTCODE - 1
            sortData()


            break

    }
}

function sortData() {
    filedListClone.value.sort((a, b) => a.SORTCODE - b.SORTCODE);
    searchInput(searchValue.value)
}


const filedList = ref([])
const filedListClone = ref([])
const initFiledList = ref([])
const getgetFieldList = () => {
    const protData = {
        ...props.MenuID,
        PKBILLNO: props.choosePlanObj.BILLNO,

    }
    // getFieldList(protData).then((res) => {
    //     let data = res.RESULT
    //     data.forEach((item, index) => {
    //         data[index].SORTCODE = index + 1
    //     })

    //     filedListClone.value = JSON.parse(JSON.stringify(data))
    //     filedList.value = JSON.parse(JSON.stringify(data))
    //     initFiledList.value = JSON.parse(JSON.stringify(data))
    // });

    request({
        url: "sys/queryprogUserDtl/getFieldList",
        method: "post",
        data: protData,
        encry: false
    }).then((res) => {
        let data = res.RESULT
        data.forEach((item, index) => {
            data[index].SORTCODE = index + 1
        })

        filedListClone.value = JSON.parse(JSON.stringify(data))
        filedList.value = JSON.parse(JSON.stringify(data))
        initFiledList.value = JSON.parse(JSON.stringify(data))
    })



}

const searchValue = ref('')
const searchInput = (val) => {
    if (val) {
        let newArr = filedListClone.value.filter(ele => ele.LABEL.includes(val))
        filedList.value = JSON.parse(JSON.stringify(newArr))
        initFiledList.value = JSON.parse(JSON.stringify(newArr))
    } else {
        filedList.value = JSON.parse(JSON.stringify(filedListClone.value))
        initFiledList.value = JSON.parse(JSON.stringify(filedListClone.value))
    }
}



watch(() => props.choosePlanObj.BILLNO, value => {
    getgetFieldList();
}, { immediate: true })

onMounted(() => {
    // getgetFieldList();

});






</script>

<style scoped lang="scss">
.showHiddenModule {
    padding: 10px 6px;
    width: 100%;

    .contrHeight {
        height: 400px;
        overflow-y: auto;
    }

    table {
        border-collapse: collapse;
        border: 1px solid #dedee0;
    }

    thead {
        background-color: #eff2f7;
        color: #333;
        // width: 100px;
        height: 40px;
        text-align: center;

        td {
            position: relative;
            padding: 0 10px;
        }
    }

    tbody {
        color: #313338;

        tr {
            border-bottom: 1px solid #ddd;

            td {
                // padding: 1px;
            }

            &.active {
                background-color: #e3eafd;

            }
        }



    }


}

.line {
    width: 10px;
    height: 16px;
    border-right: 1px solid #bbb;
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
