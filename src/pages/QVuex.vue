// This file contain demo of using Vuex for managing state and help in persisting storage on (localstorage or web storage - client side)
<template>
  <div class="pt-24">
     <input style="color:black"
      v-model="my_data" placeholder="What is your question?">
    <button class="btn-primary" @click="addNewQuestion">Save</button>
    <br />
    <p style="color:palevioletred">Last id is:</p>
    {{ id }}
    <br />
    <p style="color:palevioletred">Last question is:</p>
    {{ question }}
    <br />

    <p style="color:palevioletred">All questions are</p>
    {{ questions }}
    <br/>
    <p style="color:palevioletred">Loop the questions</p>
    <ul>
      <li v-for="q in questions">
        {{ q }}
      </li>
    </ul>
    <hr/>
 <a class="twitter-timeline" href="https://twitter.com/S4MiSA1?ref_src=twsrc%5Etfw">Community Tweets</a>

	 <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  </div>
</template>

<script>

export default {
  computed: {
// Bring values from vuex to pass them above in template
    id(){ return this.$store.state.id;},
    question() {
      return this.$store.state.question;
    },
    questions() {
      return this.$store.state.list;
    },


  },
  data: function() {
    return {
      my_data: ""
    };
  },
  methods: {
    addNewQuestion: function() {
      this.$store.commit("add", this.my_data);
      console.log("Your question saved: " + this.my_data);
      console.log("Your question saved: " + this.questions);
      this.my_data="";

    }
  }
};


</script>

