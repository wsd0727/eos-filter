
import { computed, unref, getCurrentInstance } from 'vue'
import eosFilter from "./filter"
const components = [
    eosFilter,
]

// 用于按需导入
const setGlobalConfig = (option) => {
  const { appContext } = getCurrentInstance()
  Set_Provide(option, appContext)
}

export { eosFilter}

const Set_Provide = (option, app) => {
  const context = computed(() => {
    const cfg = unref(option)
    return cfg
  })
  for (const key in option) {
    app.config.globalProperties[`$${key}`] = context.value[key]
  }
}

// 定义 install 方法
const install = (app, option) => {
  if (install.installed) return;
  install.installed = true
  components.map(component => {
    app.component(component.name, component)
  })
  if (option) Set_Provide(option, app)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const installer = () => {
  return {
    install,
    setGlobalConfig,
  }
}

export default installer()