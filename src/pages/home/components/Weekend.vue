<template>
  <div>
    <div class="title">周末去哪</div>
    <ul class="wrapper">
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>
@import '~styles/mixins.less';
.title{
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
.item{
  &:last-child{
    &::before{
      display: none;
    }
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
  }
  .item-img{
    width: 100%;
  }
  .item-info{
    padding: 0.1rem 0.1rem 0.2rem;
    min-width: 0;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
      .ellipsis;
    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
      .ellipsis;
    }
  }
}
</style>
