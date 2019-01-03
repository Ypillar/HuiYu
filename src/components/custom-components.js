import Vue from 'vue';


import titleBar from './titleBar';//标题栏
Vue.component(titleBar.name,titleBar);
import resultPage from './resultPage';//结果显示
Vue.component(resultPage.name,resultPage);
import cButton from './cButton';//椭圆按钮
Vue.component(cButton.name,cButton);

import messager from './messager';//
Vue.component(messager.name,messager);

import workflow from './workflow';//
Vue.component(workflow.name,workflow);
export default {
    //titleBar,resultPage,cButton
  }