<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  }
}
</script>

<style>

  .nav-bar {
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 1px rbga(100,100,100,.1);
    text-align: center;
  }

  .left {
    width: 60px;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 60px;
  }


</style>
