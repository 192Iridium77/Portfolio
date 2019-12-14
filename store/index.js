import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      active: false
    }),
    mutations: {
      menuClosed(state) {
        state.active = false
        console.log('STATE', state.active)
      },
      openedMenu(state) {
        state.active = true
      }
    },
  })
}

export default createStore