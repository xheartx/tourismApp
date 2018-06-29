<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        title: '印象西湖',
        desc: '“最忆是杭州”- G20峰会特别版《印象西湖》'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
        title: '印象西湖',
        desc: '“最忆是杭州”- G20峰会特别版《印象西湖》'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_200x200_4a81bde9.jpg',
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
  display: flex;
  height: 1.9rem;
  overflow: hidden;
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
      .ellipsis;
    }
    .item-desc{
      line-height: .45rem;
      color: #ccc;
      .ellipsis;
    }
    .item-button{
      background: #ff9300;
      padding: 0 .16rem;
      border-radius: .06rem;
      margin-top: .2rem;
      line-height: .44rem;
      color: #fff;
      font-size: 0.2rem;
    }
  }
}
</style>
