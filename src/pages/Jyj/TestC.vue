<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <slot name="aa"></slot>
    完成
    <slot name="bb"></slot>
  </div>
</template>

<script>

export default {
  name:"test-c",
  data () {
    return {
      count: 0
    }
  },
//   methods: {
//     handleClick: function() {
//       this.$toast('Hello world!');
//     }
//   },
//   mounted(){
//     Vue.http.get("http://localhost:8080").then(function(res){
//         // console.log(res)
//     }).catch(function(){

//     });
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
