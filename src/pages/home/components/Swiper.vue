<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for='item of swiperList' :key="item.id">
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
  data () {
    return {
      swiperList: [{
        id: '1',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
      },
      {
        id: '2',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      },
      {
        id: '3',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
      },
      {
        id: '4',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/8b/2680212fadf30002.jpg_750x200_f85409ac.jpg'
      },
      {
        id: '5',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
      }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
