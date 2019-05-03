<template>
  <div class="home">
    <div class="container-fluid p-0">
    <div class="row">
        <div v-for="option in options" :key="option.id" class="col-lg-3 col-md-4  col-sm-6 col-12 mb-5">
          <div class="option card">
            <div class="option__img">
              <img :src="option.imgUrl" class="w-100" alt="">
            </div>
            <a href="#" class="option__link">
              <span>{{ option.description }}</span> 
              <span>Ir al sitio <i class="fas fa-location-arrow ml-2"></i></span> 
            </a>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      options: [
        { id: 1, imgUrl: 'https://www.abcdelbebe.com/files/article_main/uploads/2018/02/16/5a8753feea35d.jpeg',  description: 'Padres', url: '' },
        { id: 2, imgUrl: 'http://www.minedu.gob.pe/minedu/img/politicas/politica-docencia.jpg',  description: 'Docentes', url: '' },
        { id: 3, imgUrl: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/f4b5341c1bbcf62c3dc9daa330f48d43_XL.jpg',  description: 'Pagos', url: '' },
        { id: 4, imgUrl: 'https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/41/75/86523968.jpg',  description: 'Catalogo', url: '' },
        { id: 5, imgUrl: 'https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2018/12/Calendario.jpg',  description: 'Calendario', url: '' },
        { id: 6, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH8mFOvxYsbFqKFO9OiWf8Vq3zLgOgil4nEubjpXUJyl37AkJ',  description: 'Reportes', url: '' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding:  5rem 2.8rem 2.8rem;
}

.option {
  height: 15.7rem;

  &__img {
    height: 70%;

    img {
      height: 100%;
    }
  }

  &__link {
    display: flex;
    height: 30%;
    font-size: 1.4rem;
    text-transform: uppercase;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    text-decoration: none !important;
    font-weight: 700;

    span:last-child {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 1.2rem;
      height: 3rem;
    }
  }
}
</style>
