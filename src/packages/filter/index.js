
import Filter from "./index.vue"

Filter.name = "eos-filter"

Filter.install = function (Vue) {
  Vue.component('eos-filter', Filter)
}
export default Filter