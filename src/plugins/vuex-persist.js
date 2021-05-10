import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      /* your options */
       key: 'QandA-vuex-OnMyLocal',
    }).plugin(store);
  });
};
