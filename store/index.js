export const state = () => ({
  users: [],
  counts: 1,
  page: 1,
  gender: null
})

export const mutations = {
  SET_COUNTS: (state, value) => {
    state.counts = value
  },
  SET_GENDER: (state, value) => {
    state.gender = value
  },
  SET_PAGE: (state, value) => {
    state.page = value
  },
  SET_USERS: (state, data) => {
    state.users = data
  },
  APPEND_USERS: (state, data) => {
    state.users = [...state.users, ...data]
  }
}

export const actions = {
  async getUsers ({ state, commit }, { direction = null, isAppend = false }) {
    direction === 'next' && commit('SET_PAGE', state.page + 1)
    direction === 'prev' && commit('SET_PAGE', state.page - 1)
    await this.$axios(`https://randomuser.me/api/?results=${state.counts}&page=${state.page}&inc=name,email,dob,picture&gender=${state.gender || ''}`)
      .then((response) => {
        isAppend ? commit('APPEND_USERS', response.data.results) : commit('SET_USERS', response.data.results)
      })
      .catch(error => console.error(error))
  },
  async updateUsersCounts ({ commit, dispatch }, counts) {
    commit('SET_COUNTS', counts)
    await dispatch('getUsers', {})
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getUsers', {}).catch(error => console.error(error))
  }
}
