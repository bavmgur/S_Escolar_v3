<template>
  <div class="menu container-fluid" id="menu" :class="{ 'open': isOpen }">
    <div class="row">
      <div class="col-md-auto menu__sidebar p-0">
        <div class="menu__sidebar-header d-flex justify-content-center align-items-center">
          <h1 class="menu__sidebar-logo">PORTAL ESCOLAR</h1>
        </div>
        <div class="menu__sidebar-image">

        </div>
        <div class="menu__sidebar-content">
          <p class="menu__sidebar-operation text-center">OPERACIONES</p>
          <div class="menu__sidebar-menu d-flex flex-column">
            <a href="#" class="menu__sidebar-link"><i class="fas fa-home"></i> <span>INICIO</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Presentacion</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Comunicados</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Noticias</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Contactate</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Normativa</span></a>
            <a href="#" class="menu__sidebar-link"><i class="far fa-circle"></i> <span>Manuales</span></a>
          </div>
        </div>
      </div>
      <div class="col menu__menu d-flex justify-content-between">
        <div class="menu__bars d-flex align-items-center" @click="showOrHideMenu">
          <i class="fa fa-bars"></i>
        </div>
        <div class="menu__users-options d-flex align-items-center">
          Usuario
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    showOrHideMenu: function() {
      this.isOpen = !this.isOpen
    }
  }
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

.menu {

  &.open &__sidebar {
    left: 0%;
  }

  &.open &__menu {
    padding-left: 24rem;
  }

  &__sidebar {
    background-color: $color-sidebar;
    position: fixed;
    height: 100vh;
    width: 24rem;
    z-index: 100;
    transition: all .3s ease;
    top: 0;
    left: -100%;
  }

  &__sidebar-header {
    box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.13);
    min-height: 5.6rem;
  
  }

  &__sidebar-logo {
    margin: 0;
    font-size: 1.6rem;
    color: $color-white;
  }

  &__sidebar-image {
    margin-bottom: 12rem;
  }

  &__sidebar-operation {
    color: $color-white;
    font-size: 1.1rem;
    background-color: $color-sidebar-2;
    padding: .5rem 0;
  }

  &__sidebar-content {
  }

  &__sidebar-menu {

  }

  &__sidebar-link {
    padding: 1.2rem 1rem;
    color: $color-white;
    font-size: 1.4rem;
    text-decoration: none !important;
    transition: all .3s;
    border-left: .3rem solid transparent;

    i {
      width: 1.5rem;
      margin-right: .5rem;
    }
  }

  &__sidebar-link:hover {
    background-color: $color-sidebar-3;
    color: $color-white;
    border-left: .3rem solid $color-primary-1;
  }

  &__menu {
    padding-left: 0;
    height: 5.6rem;
    box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.13);
    transition: all .3s ease;
    position: fixed;
    z-index: 99;
    background-color: $color-white;
  }

  &__bars {
    padding: 0 1.5rem;
    cursor: pointer;

    i {
      font-size: 1.8rem;
      color: $color-sidebar;
    }
  }

  &__users-options {
  }
}
</style>