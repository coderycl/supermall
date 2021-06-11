<template>
    <tar-bar>
      <tar-bar-item path="/home">
        <!-- 动态传入属性点击颜色 activeColor="blue" -->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tar-bar>
</template>

<script>
  import TarBar from "components/common/tarbar/TarBar";
  import TarBarItem from "components/common/tarbar/TarBarItem"

  export default {
    name: 'MainTabBar',
    components: {
      TarBar,
      TarBarItem
    }
  }
</script>

<style>

</style>
