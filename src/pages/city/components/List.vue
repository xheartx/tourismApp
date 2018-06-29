<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper active">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               @click="handleCityClick(item.name)"
               :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of cities"
           :ref="key"
           :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            @click="handleCityClick(innerItem.name)"
            v-for="innerItem of item"
            :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState([
      'city'
    ])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    ...mapMutations([
      'changeCity'
    ]),
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~styles/varibles.less';
.list{
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .border-topbottom, .border-bottom{
    &::before,&::after{
      border-color: #e1e2e3;
    }
  }
  .title{
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }
  .button-list{
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
    .button-wrapper{
      float: left;
      width: 33.33%;
      &.active{
        color: @bgColor;
        .button{
          border-color: @bgColor;
        }
      }
      .button{
        padding: .1rem;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .item-list{
    .item{
      line-height: .76rem;
      padding-left: .2rem;
    }
  }
}
</style>
