<template>
<div>
  <div class="banner" @click="handlebannerClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe626;</span>
        {{bannerImgs.length}}
      </div>
    </div>
  </div>
  <common-gallayr
    @close="handleGallaryClick"
    :imgs="bannerImgs"
    v-show="showGallary">
  </common-gallayr>
</div>
</template>
<script>
import CommonGallayr from 'common/gallary/gallary'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false
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
