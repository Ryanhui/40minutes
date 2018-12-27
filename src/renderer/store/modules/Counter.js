const state = {
  main: 2400,
  initTime: 2400
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  RESET (state) {
    state.main = state.initTime
  },
  SETTIME (state, initTime) {
    state.initTime = Number(initTime) * 60
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('DECREMENT_MAIN_COUNTER')
  },
  increment (context) {
    context.commit('DECREMENT_MAIN_COUNTER')
  },
  reset (state) {
    state.commit('RESET')
  },
  setTime (state, value) {
    state.commit('SETTIME', value.initTime)
  }
}

export default {
  state,
  mutations,
  actions
}
