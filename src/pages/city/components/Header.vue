<template>
  <div class="header">
    <div class="header-back">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="less" scoped>
  @import '~styles/varibles.less';

  .header{
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    background: @bgColor;
    color: #fff;
    font-size: .32rem;
    .header-back{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: .35rem;
        color: #fff;
      }
    }
  }
</style>
