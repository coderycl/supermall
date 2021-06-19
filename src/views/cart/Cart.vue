<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <bottom-bar/>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'


  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      BottomBar
    },
    computed: {
      //将vuex中的getters映射到局部计算属性
      //两种用法
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>>
