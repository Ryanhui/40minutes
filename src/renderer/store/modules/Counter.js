const state = {
  time: 2400,
  initTime: 2400
}

const mutations = {
  DECREMENT_TIME_COUNTER (state) {
    state.time--
  },
  RESET (state) {
    state.time = state.initTime
  },
  SET_TIME (state, initTime) {
    state.initTime = Number(initTime) * 60
  }
}

const actions = {
  startCount (context) {
    context.commit('DECREMENT_TIME_COUNTER')
  },
  reset (state) {
    state.commit('RESET')
  },
  setTime (state, value) {
    state.commit('SET_TIME', value.initTime)
  }
}

export default {
  state,
  mutations,
  actions
}
