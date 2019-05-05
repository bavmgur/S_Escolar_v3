<template>
  <div action class="pt-4 auxiliar-assistance__form">
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
                    :value="formatDates(dateInitial, dateFinal)"
                  >
                  <AirbnbStyleDatepicker
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'range'"
                    :fullscreen-mobile="true"
                    :date-one="dateInitial"
                    :date-two="dateFinal"
                    @date-one-selected="val => { dateInitial = val }"
                    @date-two-selected="val => { dateFinal = val }"
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
          <button @click.prevent="sendFiltersListAssistance" type="button">Aplicar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'AuxiliarFormAsistance',
  data() {
    return {
      dateFormat: 'D MMM',
      dateInitial: '',
      dateFinal: ''
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
    },
    sendFiltersListAssistance() {
      const { dateInitial, dateFinal } = this
      if (!dateInitial && !dateFinal) {
        this.$snotify.error('NECISTA APLICAR FILTROS PARA CONTINUAR', {
          showProgressBar: false,
          closeOnClick: false,
        })
      } else {
        this.$store.dispatch('auxiliar/getListStudents', { dateInitial, dateFinal, snotify: this.$snotify })
      }
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