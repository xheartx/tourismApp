<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
  data() {
    return {
      iconsList: [{
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
        desc: 'Q+精选'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '主题乐园'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
        desc: '漂流'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
        desc: '西湖'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        desc: '夏日玩水'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '宋城千古情'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '杭州必游'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
        desc: '千岛湖'
      }, {
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部玩乐'
      }],
      swiperOption: {
        // pagination: '.swiper-pagination',
        // loop: true
      }
    }
  },
  computed: {
    pages() {
      const iconsPage = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!iconsPage[page]) {
          iconsPage[page] = []
        }
        iconsPage[page].push(item)
      })
      return iconsPage
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
