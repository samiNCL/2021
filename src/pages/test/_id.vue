<template>
  <div class="pt-24">
    <h1>Hello, I got this :</h1>{{this.$route.params.id}}



    <table v-for="q in questions">

      <td><tr class="border-dotted border-2 border-light-blue-200"
      >
        <nuxt-link   :to="`/questions/${q.id}`"> {{ q.question }}</nuxt-link>

      </tr></td>
    </table>




  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$route.params.id
    }

  },

  computed: {
// Bring values from vuex to pass them above in template
//the logic of saving data is in index.js in store folder (vuex)

    questions() {
      //this will send list of all questions (id, question, details)
      // return this.$store.state.questions.all;
      return this.$store.state.all;
    }
  },
  // mounted: function(){
  //   //fill the data by what in the computed
  //   this.fillList=this.questions;
  //   },


  //
  //  beforeCreate(){
  //  //  first thing in the program lifecycle
  //    console.log("****************"+
  //      "Hello, Sami. I am beforeCreated" +
  //      "****************")
  //  },
  // created(){
  //   //  Second thing in the program lifecycle
  //   console.log("****************"+
  //     "Hello, Sami. I am created" +
  //     "****************")
  // },
  // beforeMount(){
  //   //  Second thing in the program lifecycle
  //   console.log("****************"+
  //     "Hello, Sami. I am beforeMount" +
  //     "****************")
  // },
  // mounted(){
  //   //  Second thing in the program lifecycle
  //   console.log("****************"+
  //     "Hello, Sami. I am mounted" +
  //     "****************")
  // },
  // beforeDestroy(){
  //   //  Second thing in the program lifecycle
  //   console.log("****************"+
  //     "Hello, Sami. I am beforeDestroy" +
  //     "****************")
  // },destroyed(){
  //   //  Second thing in the program lifecycle
  //   console.log("****************"+
  //     "Hello, Sami. I am destroyed" +
  //     "****************")
  // }



}
;
</script>


<style scoped>

</style>
