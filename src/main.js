import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//  加载全局样式文件，
import './styles/index.less'

//  导入vant的组件库和样式文件
import Vant from 'vant'
import 'vant/lib/index.css'

//  导入lib-flexible 包
import 'amfe-flexible'

//  注册全局组件，
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
