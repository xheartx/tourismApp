<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span> 输入城市/景点/游玩主题</div>
    <div class="header-right">城市 <span class="iconfont icon-jiantou2 arrow-icon"></span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
  @import '~styles/varibles.less';

  .header{
    display: flex;
    line-height: .86rem;
    background: @bgColor;
    color: #fff;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .4rem;
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
      width: 1.24rem;
      float: right;
      text-align: center;
      .arrow-icon{
        font-size: 0.24rem;
      }
    }
  }
</style>
