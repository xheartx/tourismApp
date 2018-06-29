<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        title: '印象西湖',
        desc: '“最忆是杭州”- G20峰会特别版《印象西湖》'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        title: '印象西湖',
        desc: '“最忆是杭州”- G20峰会特别版《印象西湖》'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
        title: '印象西湖',
        desc: '“最忆是杭州”- G20峰会特别版《印象西湖》'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
@import '~styles/mixins.less';
.title{
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
  margin-top: .2rem;
}
.item{
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
  }
  .item-img{
    width: 100%;
  }
  .item-info{
    padding: 0.1rem 0;
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
