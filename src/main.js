import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'normalize.css/normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import router from './router';
import '@/styles/icon.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI, { size: 'small' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
