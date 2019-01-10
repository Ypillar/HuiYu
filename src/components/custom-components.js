/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 所有自定义组件在这里注册
 */
import Vue from 'vue';


import titleBar from './titleBar';//标题栏
Vue.component(titleBar.name,titleBar);
import resultPage from './resultPage';//结果显示
Vue.component(resultPage.name,resultPage);
import cButton from './cButton';//椭圆按钮
Vue.component(cButton.name,cButton);

import messager from './messager';//消息中心
Vue.component(messager.name,messager);

import workflow from './workflow';//工作流
Vue.component(workflow.name,workflow);

import bottomBtn from './bottomBtn';// 贴底部客服+按钮
Vue.component(bottomBtn.name,bottomBtn);

import modal from './modal';// 弹窗
Vue.component(modal.name,modal);
import tabbar from './tabbar';// tabbar首页和我的
Vue.component(tabbar.name,tabbar);

import clipBoard from './clipBoard';// 剪切板
Vue.component(clipBoard.name,clipBoard);
export default {
    //titleBar,resultPage,cButton
  }