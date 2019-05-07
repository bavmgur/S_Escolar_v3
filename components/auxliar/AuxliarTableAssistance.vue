<template>
  <div class="pb-5">
  <table class="mb-5 table table-hover auxiliar-assistance__table">
    <thead>
      <tr class="text-white">
        <th>DNI</th>
        <th>Nombres y Apellidos</th>
        <th class="text-center">Nivel</th>
        <th class="text-center">Grado y Seccion</th>
        <!--<th class="text-center">Asistencias</th>-->
        <th class="text-center">Faltas</th>
        <th class="text-center">Total</th>
        <th class="text-center">Detalle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in listStudents" :key="student.id">
        <td>{{ student.dni }}</td>
        <td>{{ student.name + ' ' + student.last_name }} </td>
        <td class="text-center">{{ student.Classroom.degree.toUpperCase() }}</td>
        <td class="text-center">{{ student.Classroom.number + ' ' + student.Classroom.section }}</td>
        <td class="text-center">{{ student.Assistance[0].Total }} </td>
        <!--td class="text-center">{{ student.Assistance[1].Total }}</td>-->
          <td class="text-center">[[ student.Assistance[0].Total + student.Assistance[1].Total ]]</td>
        <td class="text-center">
          <a @click.prevent="showModalDetailAssistance(student.id)" href="#" class="auxiliar-assistance__detail">Detalle</a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-center" v-if="listStudents.length === 0 &&  !isLoading">
    <p>No se encontraron Alumnos</p>
  </div>
  <div v-if="isLoading" class="spinner-border text-primary" role="status">
    <span class="sr-only text-center">Loading...</span>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'AuxiliarTableAssistance',
    props: {
      listStudents: Array
    },
    computed: {
      isLoading() {
        return this.$store.state.auxiliar.isLoading
      }
    },
    methods: {
      showModalDetailAssistance(codeStudent) {
        this.$store.dispatch('auxiliar/getListDetailStudentById', { codeStudent })
        this.$emit('showModalDetailAssistance')
      }
    }
  }
</script>

<style lang="scss" scoped>
$color-primary-1: #007bff;
$color-secondary-1: #14dcb1;
$color-secondary-2: #17cfa7;
$color-white: #fff;

.auxiliar-assistance__table {
  border: 0.2rem solid $color-primary-1;

  thead {
    background-color: $color-primary-1;
  }

  th,
  td {
    font-size: 1.2rem;
  }

  tbody tr {
    border-bottom: 0.2rem solid $color-primary-1 !important;
  }
}

.auxiliar-assistance__detail {
  background-color: $color-secondary-1;
  display: inline-block;
  padding: 0.3rem 2rem;
  border-radius: 0.3rem;
  color: $color-white;
}

.auxiliar-assistance__detail:hover {
  color: $color-white;
  background-color: $color-secondary-2;
  text-decoration: none;
}
</style>