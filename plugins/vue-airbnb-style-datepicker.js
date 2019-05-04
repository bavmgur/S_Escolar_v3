import Vue from 'vue'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

const datepickerOptions = {
  dateLabelFormat: 'dddd, MMMM D, YYYY',
  days: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
  daysShort: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  colors: {
    selected: '#175597',
    inRange: '#007bff',
    selectedText: '#fff',
    text: '#565a5c',
    inRangeBorder: '#f1f1f1',
    disabled: '#fff',
  },
  texts: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
  },
}

Vue.use(AirbnbStyleDatepicker, datepickerOptions)