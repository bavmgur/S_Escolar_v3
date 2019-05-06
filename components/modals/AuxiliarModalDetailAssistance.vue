<template>
  <div class="auxiliar__modal-detail-asistance" :class="{ 'open': isOpenModalDetailAssistance }">
    <div class="modal__back" @click="hideModalDetailAssistance"></div>
    <div class="modal__content">
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col">
            <div class="modal__data p-3">
                <div>
                  <label for="">CODIGO DE ALUMNO: </label>
                  <span class="ml-1">15121029</span>
                </div>
                <div>
                  <label for="">GRADO Y SECCION: </label>
                  <span class="ml-1">5TO E</span>
                </div>
                <div>
                  <label for="">NUMEROS DE CELULAR: </label>
                  <span class="ml-1">983895147, 987543621</span>
                </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <div class="datepicker-trigger">
              <input
                class="text-center form-control"
                type="text"
                id="datepicker"
                placeholder="Selecciona un rango de fecha"
                :value="formatDates(dateInitial, dateFinal)"
              >
              <AirbnbStyleDatepicker
                :trigger-element-id="'datepicker'"
                :mode="'range'"
                :fullscreen-mobile="true"
                :date-one="dateInitial"
                :date-two="dateFinal"
                @date-one-selected="val => { dateInitial = val }"
                @date-two-selected="val => { dateFinal = val }"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <div class="row align-items-center">
                <label for="" class="col-4 font-weight-bold">FILTRAR POR:</label>
                <input type="checkbox" name="" id="" class="mr-1">
                <label for="" class="mr-3">ASISTENCIAS</label>
                <input type="checkbox" name="" id="" class="mr-1">
                <label for="" class="mr-3">FALTAS</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <h4 class="text-center mb-5">DETALLE DE ASISTENCIA</h4>
            <table class="mb-5  table table-hover auxiliar-assistance__table">
              <thead>
                <tr class="text-white">
                  <th>Fecha</th>
                  <th class="text-center">Hora</th>
                  <th class="text-center">Puntualidad</th>
                  <th class="text-center">Asistencias</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 4" :key="i">
                  <td>2019-05-06</td>
                  <td class="text-center">20:00</td>
                  <td class="text-center">5to</td>
                  <td class="text-center">B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row mt-5">
          <div class="text-center col">
            <button class="button" @click="hideModalDetailAssistance">CERRAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'AuxiliarModalDetailAssistance',
  props: {
    isOpenModalDetailAssistance: Boolean
  },
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
    hideModalDetailAssistance() {
      this.$emit('hideModal')
    }
  }
}
</script>

<style lang="scss" scoped>

$color-back: rgba(0, 0, 0, .5);
$color-white: #fff;
$color-primary-1: #007bff;

.auxiliar__modal-detail-asistance.open {

  .modal__back {
    opacity: 1;
    visibility: visible;
  }

  .modal__content {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    visibility: visible;
  }
}

label, span {
  font-size: 1.2rem;
}

.modal__back {
  position: fixed;
  background-color: $color-back;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all .5s;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
}

.modal__content {
  width: 70rem;
  background-color: $color-white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); //scale(.5);
  z-index: 101;
  box-shadow: 0 0 .3rem rgba(0, 0, 0, 0.4);
  border-radius: .3rem;
  transition: all .5s;
  opacity: 0;
  visibility: hidden;
}

.modal__data {
  border: .1rem solid #eee;
  margin: 0 auto;
}

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

.button {
  background-color: $color-primary-1;
  color: #fff;
  padding: .5rem 1.5rem;
  border-radius: .4rem;
  border: none;
  cursor: pointer;
}

</style>