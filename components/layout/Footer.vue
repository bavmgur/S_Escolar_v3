<template>
<footer class="footer">
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h3 class="footer__title">Atencion al usuario</h3>
      </div>
    </div>
    <div class="row">
      <div class="footer__col pt-4 col text-center">
        <i class="fas fa-calendar-week"></i>
        <h2 class="footer__subtitle mt-2">Horario</h2>
        <p class="footer__paragraph">Lunes - Viernes</p>
        <p class="footer__paragraph">7am - 4pm</p>
      </div>
      <div class="footer__col pt-4 col text-center">
        <i class="fas fa-mobile-alt"></i>
        <h2 class="footer__subtitle mt-2">Contacto</h2>
        <p class="footer__paragraph">(+51) 983 151 131</p>
      </div>
      <div class="footer__col pt-4 col text-center">
        <i class="far fa-envelope"></i>
        <h2 class="footer__subtitle mt-2">E-mail</h2>
        <p class="footer__paragraph">registro.escolar@escolar.edu.pe</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
        <p class="footer__end">Copyright © 2019-2019 Portal Escolar. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
$color-sidebar: #404E67;
$color-sidebar-2: #3b485e;
$color-sidebar-3: #37455a;
$color-white: #fff;
$color-back-1: #f6f7fb;
$color-back-2: #eee;
$color-primary-1: #007bff;
$color-secondary-1: #14dcb1;
$color-secondary-2: #17cfa7;
$color-black-1: #000;

.footer {
  background-color: $color-white;

  &__title {
    text-transform: uppercase;
    padding: 2rem 0;
    border-bottom: .1rem solid #f5f5f5;
    font-size: 1.4rem;
  }

  &__col {
    i {
      font-size: 3rem;
      color: $color-primary-1;
    }
  }

  &__subtitle {
    text-transform: uppercase;
  }

  &__paragraph {
    color: $color-primary-1;
    font-size: 1.4rem;
    margin-bottom: 0;
  }

  &__end {
    font-size: 1.4rem;
  }
}
</style>