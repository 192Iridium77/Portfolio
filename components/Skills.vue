<template>
  <div class="p-8">
    <h2 class="text-accent text-center pb-8">Skills</h2>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="flex justify-center">
          <img src="~/static/dockerLogo.png" class="h-20 w-24" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="~/static/nuxtLogo.svg" class="h-20 w-20" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex justify-center">
          <img src="~/static/mongoLogo.png" class="h-18 w-24" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// Docker, JS, Node Express,

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        breakpoints: {
          // when window width is >= 320px
          768: {
            //md
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 480px
          1024: {
            //lg
            slidesPerView: 4,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1280: {
            //xl
            slidesPerView: 5,
            spaceBetween: 40
          }
        },
        pagination: {
          el: ".swiper-pagination"
        }
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  }
};
</script>

<style scoped>
.beaumonts-card {
  width: 100px;
  height: 100px;
}

.carousel-image {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sam-image {
  background-position: center;
  background-repeat: no-repeat;
}

.scrim {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  width: 100%;
}

.swiper-pagination {
  position: unset;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.swiper-pagination .swiper-pagination-bullet {
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
</style>
