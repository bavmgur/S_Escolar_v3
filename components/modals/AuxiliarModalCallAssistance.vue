<template>
  <div class="modal__auxiliar-call-assistance" :class="{ 'open': isOpenModalCallAssistance }">
    <div class="modal__back" @click="hideModalCallAssistance">
    </div>
    <div class="modal__content py-5 px-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <input type="text" placeholder="INGRESE CODIGO DEL ESTUDIANTE..." class="mr-2">
            <button><i class="fas fa-search"></i></button>
          </div>
        </div>
        <div class="col-12 p-4  mt-5 modal__data">
          <div class="moda__group">
            <label for="">CODIGO: </label>
            <span class="ml-1">15121029</span>
          </div>
          <div class="moda__group">
            <label for="">ESTUDIANTE: </label>
            <span class="ml-1">BECKER VEGA MACEDA</span>
          </div>
          <div class="moda__group">
            <label for="">GRADO Y SECCION: </label>
            <span class="ml-1">5TO SECUNDARIA</span>
          </div>
        </div>
        <div class="modal__btn mt-4 text-center">
            <button>LISTO</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAuxiliarCallAssistance',
  props: {
    isOpenModalCallAssistance: Boolean
  },
  methods: {
    hideModalCallAssistance() {
      this.$emit('hideModal')
    }
  }
}
</script>

<style lang="scss" scoped>
$color-back: rgba(0, 0, 0, .5);
$color-white: #fff;
$color-primary-1: #007bff;

.modal__auxiliar-call-assistance.open {

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
  width: 40rem;
  background-color: $color-white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(.5);
  z-index: 101;
  box-shadow: 0 0 .3rem rgba(0, 0, 0, 0.4);
  border-radius: .3rem;
  transition: all .5s;
  opacity: 0;
  visibility: hidden;
}


.modal__data {
  border: .1rem solid #eee;
}

.modal__group {

}

.modal__btn {

}

input {
  outline: none;
  width: 30.2rem;
  padding: .5rem;
  border-radius: .4rem;
  border: .1rem solid #eee;
  font-size: 1.2rem;
}

label, span {
  font-size: 1.2rem;
}

button {
  background-color: $color-primary-1;
  color: #fff;
  padding: .5rem 1.5rem;
  border-radius: .4rem;
  border: none;
  cursor: pointer;
}
</style>