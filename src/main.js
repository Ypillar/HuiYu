// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/init.css'
import './assets/css/share.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import './assets/css/my-mint.scss';//全局修改mint-UI样式
import vantUi from './vant-components';
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import comm from './share/common'
import cache from './share/cache';
import forward from './share/forward'
// import validate from './share/validate'


Vue.use(VueResource);
// Vue.use(MintUI);
// Vue.use(validate);

/**
 * 导入自定义公用组件
 */
import customComponents from './components/custom-components';

// import Vue from 'vue'
// import { Header,Field } from 'mint-ui';
// Vue.component(Field.name, Field);
// Vue.component(Header.name, Header);

Vue.prototype.cfg = cfg;
Vue.prototype.cache = cache;
Vue.prototype.comm = comm;
Vue.prototype.forward=forward;
Vue.config.productionTip = false

Vue.http.options.xhr = { withCredentials: true };
Vue.http.interceptors.push((request, next)  =>{  
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值  
  let TOKEN=comm.getToken();  
  comm.debug("TOKEN:",TOKEN)
  if(TOKEN){  
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行  
    request.headers.set('token',TOKEN);  
  }  
  next((response) => {  
    comm.debug("服务端返回:",response.body);
    return response;  
  });  
});  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
