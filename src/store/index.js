// @ts-ignore
export const state = () => ({
  id: 0,
  question: '',
  detail:'',

  list: []
})

export const mutations = {
  add: function(state, q) {
    //each post, increase the id. push the question, save them to the array
    state.id++;
    //push the question
    state.question=q;
    //save them to object
    let obj={id: state.id,question:state.question,detail:""}
    //later pass detail with the questions.

    //save this obj  to the all questions (object)
    state.list.push(obj);
    //in your app deal with this list to render
  }
}
