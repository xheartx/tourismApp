<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          @click="handleCityClick(item.name)"
          v-for="item of list"
          :key="item.id">
          {{item.name}}
        </li>
        <li v-show="hasNoData" class="search-item null-data">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            const hasSpell = value.spell.indexOf(this.keyword) > -1
            const hasName = value.name.indexOf(this.keyword) > -1
            if (hasSpell || hasName) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
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
.search{
  padding: 0 .1rem;
  height: .72rem;
  background: @bgColor;
  .search-input{
    width: 100%;
    height: .62rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}
.search-content{
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  background: #eee;
  .search-item{
    line-height: .62rem;
    color: #666;
    background: #fff;
    padding: 0.1rem 0.2rem;
  }
  .null-data{
    text-align: center;
  }
}
</style>
