import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: '5, Março, 2022' },
      { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: '6, Março, 2022' },
      { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: '7, Março, 2022' },
      { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: '8, Março, 2022' },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
