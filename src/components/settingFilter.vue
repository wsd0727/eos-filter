<!--
 * 设置组件
 * @author: wsd
 * @since: 2024-04-28
 * settingFilter.vue
-->
<template>
    <div class="settingFilter">

        <div v-for="(item, index) in filterArr" :key="index" class="aloneFilter mb10">
            <div class="disflex ">
                <FilterForm :filterConfig="filterConfig" :filterVal="item" class="mr10"
                    v-model:formData="currentQueryList[index]" @changeFilter="val => changeFilter(val, item, index)"
                    @openModal="openModal" :currentIndex="index" />
                <div>
                    <el-icon v-if="index != 0" color="#b9c9fb" :size="20" class="delIcon cp"
                        @click="delFilterArr(item, index)">
                        <Icon icon="zondicons:minus-solid"></Icon>
                    </el-icon>
                    <el-icon v-else color="#fff" :size="20">
                        <Icon icon="zondicons:minus-solid"></Icon>
                    </el-icon>
                </div>
            </div>
        </div>
        <div class="disflex" style="min-width: 430px;">
            <!-- <el-row :gutter="20">
            <el-col :span="6"> -->
            <vxe-select v-model="conditionValue" transfer style="width: 100px" placeholder="请输入条件" size="mini"
                @change="changeCondition">
                <vxe-option v-for="item in filterConfig.filterSeceletArr" :key="item.BILLNO" :label="item.LABEL"
                    :value="item.BILLNO"></vxe-option>
            </vxe-select>
            <!-- </el-col> -->
            <!-- <el-col :span="6"> -->
            <el-button type="primary" link class="ml5" @click="resetCondition">
                重置条件
            </el-button>

            <!-- </el-col> -->
            <!-- <el-col :span="12">
            </el-col> -->
            <!-- </el-row> -->
        </div>



    </div>
</template>

<script setup>
import { computed, inject, reactive, ref, watch, onMounted, defineProps, defineEmits, defineExpose } from 'vue';
const request = inject('request')
import FilterForm from "./filterForm.vue"
const emit = defineEmits('changeCondition', 'resetCondition', 'delFilterArr', 'changeCurrentQueryList', 'changeFilter')


const props = defineProps({
    filterConfig: {
        type: Object,
        default: {},
    },
    filterArr: {
        type: Array,
        default: [],
    },
});


const currentQueryList = ref([])

const filterSeceletArr = computed(() => props.filterConfig.filterSeceletArr)
const conditionValue = ref(null)
const changeCondition = (e) => {
    // let newArr = filterSeceletArr.value.filter(ele => ele.BILLNO == e)
    let newArr = filterSeceletArr.value.filter(ele => ele.BILLNO == e.value)
    emit('changeCondition', newArr[0] || {})
}
function openModal(options){
    emit("openModal", options)

}

const resetCondition = () => {
    conditionValue.value = null
    emit("resetCondition")
}
const delFilterArr = (item, index) => {
    // currentQueryList.value.splice(index, 1);

    emit("delFilterArr", index)
}

const updateCurrentQueryList = (val) => {
    currentQueryList.value = val
}

const changeFilter = (val, item, index) => {
    emit("changeFilter", val, item, index)
}

// const newfilterArrs = ref([])
watch(() => props.filterArr, nArr => {

    nArr.forEach((item, index) => {
        if (currentQueryList.value[index]) {
            currentQueryList.value[index].FIELD = nArr[index].FIELD
        } else {
            currentQueryList.value[index] = {}
            currentQueryList.value[index].FIELD = nArr[index].FIELD
        }
    })


    // currentQueryList.value = value.map(ele => {
    //     if (ele.BILLNO) {
    //         // return ele
    //         return {
    //             FIELD: ele.FIELD,
    //             QUERYTYPE: '',
    //             DEFAULTVAL: '',
    //             DEFAULTVAL2: '',
    //             SORTCODE: '',
    //             DEFAULTVALArr: ''
    //         }
    //     } else {
    //         return {
    //             FIELD: '',
    //             QUERYTYPE: '',
    //             DEFAULTVAL: '',
    //             DEFAULTVAL2: '',
    //             SORTCODE: '',
    //             DEFAULTVALArr: ''
    //         }
    //     }
    // })

}, { immediate: true })

// watch(() => currentQueryList.value, value => {
//     emit('changeCurrentQueryList', value)
//     console.log(999,   value);
// }, { immediate: true, deep: true })





defineExpose({
    updateCurrentQueryList,
});

</script>

<style scoped lang="scss">
.settingFilter {
    padding: 10px;
    max-height: 450px;
    overflow-y: auto;
    z-index: 9999;

    .aloneFilter {
        // margin-bottom: 10px;
    }

    .delIcon {}

    .delIcon:hover {
        color: #ef878b;
    }

}

:deep(.vxe-input) {
    border-color: #949eb5 !important;
    // color: #12151A !important;
}

:deep(.vxe-input--inner) {
    color: #12151A !important;

    &::placeholder {
        color: #535B6A !important;
    }

}
</style>
