import Vue from 'vue'
//
import App from '@/App'

//@是目录src的绝对路径别名
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
