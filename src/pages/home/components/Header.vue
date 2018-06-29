<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span> 输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{city}} <span class="iconfont icon-jiantou2 arrow-icon"></span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState([
      'city'
    ])
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/varibles.less';

  .header{
    display: flex;
    line-height: @headerHeight;
    background: @bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .35rem;
      }
    }
    .header-input{
      flex: 1;
      height: 0.64rem;
      line-height: 0.64rem;
      margin: 0.12rem 0  0.12rem 0.2rem;
      background: #fff;
      border-radius: 0.1rem;
      color: #ccc;
      padding: 0 0.2rem;
    }
    .header-right{
      min-width: 1.24rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
      .arrow-icon{
        font-size: 0.24rem;
      }
    }
  }
</style>
