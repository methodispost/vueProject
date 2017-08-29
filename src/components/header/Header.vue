<template>
  <div class="header">
    {{seller.name}}
    <img :src="seller.avatar" alt="">
    <br>
    {{msg}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    created() {
      //触发seller.js中的方法
      this.$store.dispatch('getSeller');
    },
//    data() {
//      return {
//        seller: this.$store.state.seller
//      }
//    }
    computed: {
      ...mapGetters([
        'seller'
      ]),
      msg() {
        return 'welcome to deppon'
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
