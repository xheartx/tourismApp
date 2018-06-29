<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item{
    text-align: center;
    height: .4rem;
    color: @bgColor;
  }
}
</style>
