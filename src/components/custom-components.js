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

import bottomBtn from './bottomBtn';//
Vue.component(bottomBtn.name,bottomBtn);

import modal from './modal';//
Vue.component(modal.name,modal);
import tabbar from './tabbar';// tabbar首页和我的
Vue.component(tabbar.name,tabbar);
export default {
    //titleBar,resultPage,cButton
  }