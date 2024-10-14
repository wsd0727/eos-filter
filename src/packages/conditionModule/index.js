
import ConditionModule from "./index.vue"

ConditionModule.name = "eos-conditionModule"

ConditionModule.install = function (Vue) {
  Vue.component('eos-filter', ConditionModule)
}
export default ConditionModule