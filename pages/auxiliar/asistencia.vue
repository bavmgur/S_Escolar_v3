<template>
  <div class="auxiliar-assistance mb-3">
    <div class="auxiliar-assistance__header">
      <div class="auxiliar-assistance__test">
        <AuxiliarFormAsistance />
      </div>
    </div>
    <div class="auxiliar-assistance__search">
     <AuxiliarSearchAssistance />
    </div>
    <div class="auxiliar-assistance__assistance pt-4">
      <h4 class="text-center mb-5 text-uppercase">Lista de Alumnos</h4>
      <div class="text-center">
        <div v-if="listStudents.listStudents === 0" class="spinner-border text-primary" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
        <AuxiliarTableAssistance v-else :listStudents="listStudents" />
      </div>
    </div>
  </div>
</template>

<script>
import AuxiliarFormAsistance from '../../components/auxliar/AuxliarFormAsistance'
import AuxiliarSearchAssistance from '../../components/auxliar/AuxliarSearchAssistance'
import AuxiliarTableAssistance from '../../components/auxliar/AuxliarTableAssistance'

export default {
  name: 'AuxliarAssistancePage',
  components: {
    AuxiliarFormAsistance,
    AuxiliarSearchAssistance,
    AuxiliarTableAssistance
  },
  computed: {
    listStudents() {
      return this.$store.state.auxiliar.listStudents
    }
  },
  async fetch({ store, $axios }) {
    const response = await $axios.get('api/student')
    store.commit('auxiliar/SET_LIST_STUDENTS', response.data)
  }
}
</script>

<style lang="scss" scoped>
$color-white: #fff;
$color-back-1: #f6f7fb;
$color-back-2: #eee;
$color-black-1: #000;

.auxiliar-assistance {
  background-color: $color-white;

  &__header {
    height: 9.5rem;
    padding: 1rem 1rem 0 1rem;
  }

  &__test {
    border-bottom: 0.1rem solid $color-back-2;
    background-color: $color-white;
    height: 100%;
  }

  &__body {
  }

  &__search {
    padding: 2rem 1rem;
    border-bottom: 0.1rem solid $color-back-2;
  }
}
</style>