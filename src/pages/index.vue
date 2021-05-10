<template>
  <div class="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
    <div style="padding: 1%" class="flex flex-col items-center justify-center">
      <h1 style="padding: 10px" class="mt-4 text-xl font-semibold sm:text-3xl">Q&A Collaboration Tool Demo</h1>
      <p>Fronted-End mockup implementation for a new collaboration tool for programming learners.</p>

      <div style="margin: 2%; border: dotted lightslategrey">
        <Logo class="" />
      </div>

      <div style="margin-top: 2%">
        <ul class="">
          <li>Student Name:</li>
          <li><strong>Sami Saeed Alghamdi</strong></li>
          <li style="margin-top: 4%">Supervisor:</li>
          <li><strong>Dr Ahmed Kharrufa</strong></li>
        </ul>
        <p style="margin-top: 10%; border-top: solid">s.s.a.alghamdi2 [at] ncl.ac.uk</p>
      </div>
<!--      -->


<!-- All saved questions looped and linked to test folder page for dynamic pages
 Now make this work for questions folder by change the link and adapt it to that page.-->
      <p>Go to test page from link bellow, also go to <nuxt-link to="/qvuex">Qvuex pafe</nuxt-link></p>
      <br />
      <ul v-for="q in questions">
        <li>
          <nuxt-link   :to="`/questions/${q.id}`"> {{ q.question }}</nuxt-link>

        </li>
      </ul>




      <!--      -->
    </div>

    <div class="flex flex-col mt-10 text-sm text-white sm:flex-row"></div>
  </div>
</template>

<script>
export default {
data(){
  return {
    id:1
  }
},
  name: "Home"
  ,methods:{


  },
  computed: {
// Bring values from vuex to pass them above in template
//the logic of saving data is in index.js in store folder (vuex)
    questions() {
      //this will send list of all questions (id, question, details)
      return this.$store.state.all;

    }
    ,
    // Do not use this . it is only send last entered question
    // question() {
    //   return this.$store.state.question;
    // }
  }
};
</script>

<style scoped></style>
