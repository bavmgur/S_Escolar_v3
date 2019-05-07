export const state = () => ({
  listStudents: [],
  DetailAssitanceByStudent: null,
  isLoading: false,
  isLoadingDetailByStudent: false
})

export const mutations = {
  SET_LIST_STUDENTS(state, students) {
    state.listStudents = students
  },
  SET_DETAIL_STUDENT_BY_ID(state, detail) {
    state.DetailAssitanceByStudent = detail
  },
  CHANGE_STATE_LOADING(state) {
    state.isLoading = !state.isLoading
  },
  CHANGE_STATE_LOADING_DETAIL(state) {
    state.isLoadingDetailByStudent = !state.isLoadingDetailByStudent
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
  },
  async getListDetailStudentById({ commit }, payload) {
    commit('CHANGE_STATE_LOADING_DETAIL')
    const { codeStudent } = payload
    const response = await this.$axios.get(`api/assistance?cod_alumno=${codeStudent}`)
    console.log(response.data)
    commit('SET_DETAIL_STUDENT_BY_ID', response.data)
    commit('CHANGE_STATE_LOADING_DETAIL')
  }
}