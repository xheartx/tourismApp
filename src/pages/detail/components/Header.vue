<template>
  <div>
    <router-link
      tag="div"
      to="/"
      v-show="showAbs"
      class="header-abs">
        <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/varibles.less';
.header-abs{
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height:.8rem;
  line-height: .8rem;
  border-radius: .4rem;
  background: rgba(0,0,0,.8);
  text-align: center;
  .header-abs-back{
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  background: @bgColor;
  color: #fff;
  font-size: .32rem;
  .header-fixed-back{
    width: .64rem;
    float: left;
    color: #fff;
  }
}
</style>
