<template>
  <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <div class="detail" v-show="detailShow">
      详情页
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  import 'animate.css/animate.css'

  export default {
    computed: {
      ...mapGetters([
        'detailShow'
      ])
    }
  }
</script>

<style lang="less" scoped>
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(7, 17, 27, 0.8);
    z-index: 666;
    overflow: auto;
  }
</style>
