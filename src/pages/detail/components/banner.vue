<template>
<div>
  <div class="banner" @click="handlebannerClick">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_600x330_692af2a1.jpg" alt="">
    <div class="banner-info">
      <div class="banner-title">杭州海底世界</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe626;</span>
        39
      </div>
    </div>
  </div>
  <common-gallayr
    @close="handleGallaryClick"
    :imgs="imgs"
    v-show="showGallary">
  </common-gallayr>
</div>
</template>
<script>
import CommonGallayr from 'common/gallary/gallary'

export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      imgs: [
        '//img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_600x330_692af2a1.jpg',
        '//img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_600x330_8db91d9d.jpg'
      ]
    }
  },
  methods: {
    handlebannerClick() {
      this.showGallary = true
    },
    handleGallaryClick() {
      this.showGallary = false
    }
  },
  components: {
    CommonGallayr
  }
}
</script>
<style lang="less" scoped>
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8));
    .banner-title{
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    .banner-number{
      line-height: .4rem;
      height: .4rem;
      border-radius: .2rem;
      font-size: .24rem;
      background: rgba(0,0,0,0.6);
      padding: 0 .3rem;
      .banner-icon{
        font-style: .24rem;
        vertical-align: top;
      }
    }
  }
}
</style>
