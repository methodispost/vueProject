<template>
  <div class="header">
    {{seller.name}}
    <img :src="seller.avatar" alt="" @click="showDetail">
    <br>
    {{msg}}
    <Detail></Detail>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Detail from '../detail/Detail.vue'

  export default {
    created() {
      //触发seller.js中的方法
      this.$store.dispatch('getSeller');
    },
    computed: {
      //自定义计算属性需用对象展开运算符（es6）新语法
      ...mapGetters([
        'seller'
      ]),
      msg() {
        return 'welcome to deppon'
      }
    },
    components: {
      Detail
    },
    methods: {
      showDetail() {
        this.$store.dispatch('showDetail');
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    height: 134px;
    background-color: rgba(7, 17, 27, 0.1);
    font-size: 14px;
    img {
      width: 64px;
      height: 64px;
      border-radius: 2px;
    }
  }
</style>
