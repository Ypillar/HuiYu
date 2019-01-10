<!--
 * @Author: JuYangjia
 * @Date: 2019-01-10 14:54:15
 * @Description: 调用js复制指定文本，copy为要复制的内容
 -->
<template>
  <div class="page center inline-block _clipboard_btn_" :data-clipboard-text="copy" v-if="support">
    <slot></slot>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'ClipBoard',
  // back为false时不显示返回按钮
  props: ['copy'],
  data () {
    return {
        support:false
      // appName:this.cfg.appName,
    }
  },
  methods: {
//    copy(){
//        console.log(1111)
//    }
  },
  mounted(){
    let that =this;
    let clipboard  = new Clipboard('._clipboard_btn_');
    clipboard.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        // e.clearSelection();
        that.comm.msg("复制成功");
    });

    clipboard.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
        that.comm.msg("复制失败");
    });
    this.support = Clipboard.isSupported();
  },
  components:{
  }
}
</script>

<style scoped>
.page .icon{
  height:30px;
    position: relative;
}
.page .icon>i{
    font-size: 20px;
}
.point{
    position: absolute;
    z-index: 2;
    width: 8px;
    height:8px;
    background-color: red;
    border-radius: 20px;
    right: 0;
    top:10px;
}
 
</style>
