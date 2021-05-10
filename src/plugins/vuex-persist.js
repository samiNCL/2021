import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
       key: 'QandA-vuex-On_Server_Final1',
    }).plugin(store);
  });
};
