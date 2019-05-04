<template>
  <form action class="pt-4 auxiliar-assistance__form">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <div class="row align-items-center">
              <label class="col-2" for="">Fecha: </label>
              <div class="col">
                <div class="datepicker-trigger">
                  <input
                    class="text-center form-control"
                    type="text"
                    id="datepicker-trigger"
                    placeholder="Selecciona un rango de fecha"
                    :value="formatDates(dateOne, dateTwo)"
                  >
                  <AirbnbStyleDatepicker
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="dateOne"
                    :date-two="dateTwo"
                    @date-one-selected="val => { dateOne = val }"
                    @date-two-selected="val => { dateTwo = val }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <div class="row align-items-center">
              <label for class="col-4 font-weight-bold">Filtros</label>
              <select class="col-5 form-control w-50">
                <option value>Filtro 1</option>
                <option value>Filtro 2</option>
                <option value>Filtro 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col text-right">
          <button type="submit">Aplicar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'AuxiliarFormAsistance',
  data() {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary-1: #007bff;
$color-white: #fff;

.auxiliar-assistance__form {
  input {
    outline: none !important;
  }

  button {
    background-color: $color-primary-1;
    color: $color-white;
    padding: 0.3rem 2rem;
    border-radius: 0.3rem;
    border: none;
  }
}
</style>