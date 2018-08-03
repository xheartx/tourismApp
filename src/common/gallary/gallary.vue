<template>
  <div class="contatiner" @click="handleGallaryClick">
    <div class="wrapper">
       <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for='item of imgs' :key="item">
            <img class="swiper-img" :src="item" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.contatiner /deep/ .swiper-container{
  overflow: inherit;
}
.contatiner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 99;
  overflow: hidden;
  .wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img{
      width: 100%;
    }
    .swiper-pagination{
      color: #f0f0f0;
      bottom: -1rem;
    }
  }
}
</style>
