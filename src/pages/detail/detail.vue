<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="less" scoped>
</style>
