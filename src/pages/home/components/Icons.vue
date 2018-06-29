<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.text">
          <div class="icon-img">
            <img :src="item.iconUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const iconsPage = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!iconsPage[page]) {
          iconsPage[page] = []
        }
        iconsPage[page].push(item)
      })
      return iconsPage
    },
    showSwiper() {
      return this.list.length
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/varibles.less';
@import '~styles/mixins.less';

.icons /deep/ .swiper-container{
  height: 0;
  padding-bottom: 50%;
}
.icons{
  margin-top: .1rem;
  .icon{
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    overflow: hidden;
    position: relative;
    .icon-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: .1rem;
      &>img{
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .4rem;
      height: .4rem;
      text-align: center;
      color: @darkTextColor;
      .ellipsis;
    }
  }
}
</style>
