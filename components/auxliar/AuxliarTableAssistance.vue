<template>
  <table class="mb-5 table table-hover auxiliar-assistance__table">
    <thead>
      <tr class="text-white">
        <th>DNI</th>
        <th>Nombres y Apellidos</th>
        <th class="text-center">Grado y Seccion</th>
        <th class="text-center">Asistencias</th>
        <th class="text-center">Faltas</th>
        <th class="text-center">Total</th>
        <th class="text-center">Detalle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td class="text-center">5to B</td>
        <td></td>
            <!--<td class="text-center">[[ student.Assistance[1].Total ]] </td>
          <td class="text-center">[[ student.Assistance[0].Total + student.Assistance[1].Total ]]</td>
            !-->
        <td class="text-center">
          <a href="#" class="auxiliar-assistance__detail">Detalle</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'AuxiliarTableAssistance'
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