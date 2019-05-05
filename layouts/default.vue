<template>
  <div class="portal">
    <vue-snotify></vue-snotify>
    <Menu /> 
    <div class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col" style="padding:20px">
            <nuxt/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Menu from '../components/layout/Menu'
import Footer from '../components/layout/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Menu,
    Footer
  },
}
</script>

<style scoped>
.main {
  padding-left: 0;
  padding-top: 5.6rem;
  transition: all .3s ease;
}

.menu.open + .main {
  padding-left: 24rem;
}
</style>