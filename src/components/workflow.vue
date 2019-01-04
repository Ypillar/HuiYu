<template>
  <div class="page center" ref="refpage">
    <!-- <div class="wleft inline-block relative">
        <div class="point main-bg-color absolute" style="width:6px;height:6px;top:5px;"></div>
        <div class="point main-bg-color absolute" style="width:12px;height:12px;right:5px;bottom:35px;"></div>
    </div> -->
    
    <div class="wmiddle relative inline-block" ref="refmiddle">
        <div class="absolute inline-block line" v-bind:style="{ width : lineMaxWidth + 'px'}"></div> 
        <div class="absolute inline-block line" v-bind:style="{ width : gLineWidth + 'px'}" style="border-top:2px solid #05AFAF;"></div>
        <div class="flow" v-bind:style="{ marginRight: (index!==group.length-1?margin:0) + 'px' }"   v-for="(item,index) in group" :key="item.id">
            <!-- <div class="inline-block line main-boder-color" v-if="index===list.length-1"></div> -->
            <div class="center inline-block">
                <div class="dot" v-bind:class="{'main-bg-color':!!item.select}"> {{item.id}}</div>
                <div class="title" v-bind:class="{'main-color':!!item.select}">
                    {{item.name}}
                    <!-- {{( scount * (margin +48) ) + 'px'}} -->
                </div> 
            </div>
        </div>
        
    </div>
    <!-- <div class="wright inline-block relative">
         <div class="point main-bg-color absolute" style="width:6px;height:6px;top:5px;right:0px;"></div>
        <div class="point main-bg-color absolute" style="width:12px;height:12px;left:5px;bottom:35px;"></div>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'Workflow',
  // back为false时不显示返回按钮
  props: ['group','select'],
  data () {
    return {
        tleft:'tleft',
        tright:'tright',
        margin:0,
        list:[],
        scount:0,
        lineMaxWidth:0,
        gLineWidth:0
    }
  },
  methods: {
    
  },
  mounted(){
      let p=0;
      for(let i=0;i<this.group.length;i++){
          this.group[i].select=true;
          if(this.group[i].id==this.select){
              break;
          }
          p++;
      }
    //   if(p===1)p=0;// 第一步
      this.scount = p;
    //   this.width=(100/this.group.length-1);
    // console.log(111,,this.comm.getClientWidth())
      this.$refs.refmiddle.style.width=this.$refs.refpage.offsetWidth-70+"px";
      let reduce=48*this.group.length;
    //   for(let a=0;a<this.$refs.refmiddle.children.length;a++){
    //       if((this.$refs.refmiddle.children[a].className+"").indexOf("flow")!==-1){
    //           reduce += this.$refs.refmiddle.children[a].scrollWidth;
    //         //   console.log(this.$refs.refmiddle.children[a].scrollWidth )
    //       }
    //       this.list.push(this.$refs.refmiddle.children[a].scrollWidth);
    //   }
      
      let margin=this.$refs.refmiddle.offsetWidth - reduce;
      margin = parseFloat((margin/(this.group.length-1)).toFixed(4))-5;
      this.margin=margin;
    //   console.log(this.$refs.refmiddle.offsetWidth,reduce,margin)

      this.lineMaxWidth = (this.group.length-1) * (margin +48);
      this.gLineWidth = ( this.scount * (margin +48) )+((margin+48)/2);// 计算进度线条长度
      if(this.gLineWidth>this.lineMaxWidth)this.gLineWidth = this.lineMaxWidth;
    //   console.log(this.lineMaxWidth,this.gLineWidth)
    //   this.group.map(i=>i.margin=margin);
    //   console.log(this.group)
  },
  components:{
  }
}
</script>

<style scoped>
.page{width: 100%;height:60px;}
.wleft{
    width: 30px;
    height:100%;
}
.wright{
    width: 30px;
    height:100%;
}
.point{
    border-radius: 10px;
}
.wmiddle{width: 90%;vertical-align: top;text-align: center;z-index: 77;}
.flow{display: inline-block;text-align: center;width: 48px;}
.dot{
    width: 22px;height: 22px;
    line-height: 22px;
    display: inline-block;
    border-radius: 30px;
    margin:0 5px;
    background-color: #D8D8D8;
    color:white;
}
.title{
    margin-top: 5px;
    height:17px;
    font-size:12px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    /* color:rgba(44,173,136,1); */
    line-height:17px;

}
.line{
    border-top:2px solid #D8D8D8;
    height: 1px;
    position: absolute;
    top:11px;
    margin:0 20px;
    z-index: -1;
}
</style>
