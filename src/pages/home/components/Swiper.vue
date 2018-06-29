<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for='item of list' :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
  background: #fff;
}
.wrapper{
  width: 100%;
  height: 0;
  padding-bottom: 26%;
  overflow: hidden;
  background: #ccc;
  .swiper-img{
    width: 100%;
  }
}
</style>
