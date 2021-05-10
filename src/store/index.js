export const state = () => ({
  id: "6",
  question: "",
  
  all: [
    {
      id: "1",
      question: "What is yarn?",
      detail: "It is a good tool!"
    },
    {
      id: "2",
      question: "What is Nuxt?",
      detail: "It is a cool framework!"
    },
    {
      id: "3",
      question: "What is Vite?",
      detail: "It can be a good tool!"
    },
    {
      id: "4",
      question: "What is Bash?",
      detail: "Is it programming language? What the differences between zsh and sh"
    },
    {
      id: "5",
      question: "How to fix dynamic routing in Nuxt.js?",
      detail: "It it a tricky"
    },
    {
      id: "6",
      question: "How to link localstorage in blabla?",
      detail: "Any help"
    }
    
  ]

});

export const mutations = {
  add: function(state, q) {
    //each post, increase the id. push the question, save them to the array
    state.id++;
    //push the question
    state.question = q;
    //save them to object
    const obj = { id: state.id, question: state.question, detail: "it is empty" };
    //later pass detail with the questions.
    //save this obj  to the all questions (object)
    state.all.push(obj); //Thanks God !
    //in your app deal with this list to render
  }
};
