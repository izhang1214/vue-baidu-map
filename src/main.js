import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueBaiduMap from 'vue-baidu-map';

Vue.use(VueBaiduMap, {
  ak: 'ez6QWq0bqyUa86P3arF3Q6MftVttpBvG'
})
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
