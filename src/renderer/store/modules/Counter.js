const state = {
  time: 2400,
  initTime: 2400,
  title: 'oh man',
  body: 'yes it is',
  language: 'chinese'
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
  },
  SET_BODY (state, body) {
    state.body = body
  },
  SET_TITLE (state, title) {
    state.title = title
  },
  SET_LANGAUAGE (state, language) {
    state.language = language
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
  },
  setBody (state, value) {
    state.commit('SET_BODY', value.body)
  },
  setTitle (state, value) {
    state.commit('SET_TITLE', value.title)
  },
  setLangauage (state, value) {
    state.commit('SET_LANGAUAGE', value)
  }
}

export default {
  state,
  mutations,
  actions
}
