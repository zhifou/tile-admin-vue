import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antdComponents from './antd.config';

Vue.config.productionTip = false

Vue.use(antdComponents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
