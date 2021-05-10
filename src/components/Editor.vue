<template>
  <div class="">
    <!--    In here you used 2 methods both led to the same functionality. V-model message and @input input function

They both take the input of text area so I can deal with it. V-model much easier.

How to move this with you.
-->
    <form style="margin: 1%" class="p-8" @submit.prevent="noSubmit" >
      <label class="block mb-2 text-sm font-semibold" for="message">
        {{ $t("contact.message") }}
      </label>
      <!-- First V-model, then you can use it in template by {{ message}}
        Or in methods by define it in Data , then method to handle it by (this. )-->
      <textarea
        style="border-style: double"
        v-model="message"
        rows="4"
        cols="80"
        id="message"
        class="w-full px-3 py-3 text-lg placeholder-gray-200 rounded shadow bg-surface focus:outline-none focus:shadow-outline"
        placeholder="✍️"
      />

      <button v-on:click="handleSubmit" class="p-2 mt-2 btn btn-primary rounded-full" type="submit">
        {{ $t("contact.send") }}
      </button>

      <p class="mt-2 font-semibold text-red-500 opacity-100 error-message">
        {{ $t(errorMessage) }}
      </p>
      <p class="mt-2 font-semibold text-green-500 opacity-100 success-message">
        {{ $t(successMessage) }}
      </p>
    </form>
    <br />
     <p class="font-semibold clr text-lg">{{ message }}</p>

<table v-for="q in questions">

     <td><tr class="border-dotted border-2 border-light-blue-200"
      >
       <nuxt-link   to="#"> {{ q.question }}</nuxt-link>
      </tr></td>
    </table>





  </div>


</template>

<script>
export default {
  computed: {
// Bring values from vuex to pass them above in template
//the logic of saving data is in index.js in store folder (vuex)
    questions() {
      return this.$store.state.list;
    }
    ,
    question() {
      return this.$store.state.question;
    }
  }
  ,
  name: "my-component",
  data() {
    return {
      message: "",
      errorMessage: "",
      successMessage: "",

    };
  },
  // ... with a link and send to twitter

  mounted() {
    if (localStorage.note) {
      this.note = localStorage.note;
    }
  },
  methods: {
    // inputFunction:function()  {
    //   // var x = e.target.value;
    //   // console.log("Hi , I worked. Find me in Editor.vue.This is my value:" + x);
    // },

    handleSubmit: function() {
      if (!!this.message) {
        this.$ga.event({
          eventCategory: "Contact",
          eventAction: "submit_form",
          eventLabel: "Form submission"
        });
        this.errorMessage = "";
        this.successMessage = "contact.success";
      } else {
        this.errorMessage = "contact.error-empty";
        this.successMessage = "";
      }


      // Also , save to vuex for persistence
      if (this.question.indexOf(this.message) === -1) {
        this.$store.commit("add", this.message);
      } else {
        this.successMessage ="";
        this.errorMessage = "Error. text is empty or already sent."
      }
    },

    // console.log("Your question saved: " + this.message);
    noSubmit: function() {
      console.log("ok");
    }},


}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
hr {width: 13rem}
h1,h2,h3,h4,h5,h6{ font-family: 'Itim', cursive;}

a:hover ,tr:hover {
  color: palevioletred;
  border-color: #DB7093;
}
/* .clr { color:#add9e8}  Nice color light blue for dark mode*/
.clr { color:#afeede}

</style>
