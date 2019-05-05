export const state = () => ({
  listStudents: [],
  isLoading: false
})


export const mutations = {
  SET_LIST_STUDENTS(state, students) {
    state.listStudents = students
  },
  CHANGE_STATE_LOADING(state) {
    state.isLoading = !state.isLoading
  }
}

export const actions = {
  async getListStudents({ commit }, payload) {
    commit('SET_LIST_STUDENTS', [])
    commit('CHANGE_STATE_LOADING')
    const response = await this.$axios.get(`api/student?fecha_inicio=${payload.dateInitial}&fecha_final=${payload.dateFinal}`)
    commit('SET_LIST_STUDENTS', response.data)
    payload.snotify.success('FILTROS APLICADOS CORRECTAMENTE', {
      showProgressBar: false,
      closeOnClick: false,
    })
    commit('CHANGE_STATE_LOADING')
  }
}