<template>
  <div class="pt-24">
    <h1>This question can be found here:</h1>{{this.$route.params}}


  </div>
</template>

<script>
export default {
   name: "_id.vue",

   beforeCreate(){
   //  first thing in the program lifecycle
     console.log("****************"+
       "Hello, Sami. I am beforeCreated" +
       "****************")
   },
  created(){
    //  Second thing in the program lifecycle
    console.log("****************"+
      "Hello, Sami. I am created" +
      "****************")
  },
  beforeMount(){
    //  Second thing in the program lifecycle
    console.log("****************"+
      "Hello, Sami. I am beforeMount" +
      "****************")
  },
  mounted(){
    //  Second thing in the program lifecycle
    console.log("****************"+
      "Hello, Sami. I am mounted" +
      "****************")
  },
  beforeDestroy(){
    //  Second thing in the program lifecycle
    console.log("****************"+
      "Hello, Sami. I am beforeDestroy" +
      "****************")
  },destroyed(){
    //  Second thing in the program lifecycle
    console.log("****************"+
      "Hello, Sami. I am destroyed" +
      "****************")
  }



}
;
</script>

<style scoped>

</style>
