<template>
  <div class="top-nav">
    <div class="logo">PGL UI</div>
  </div>
</template>

<style lang="less" scoped>
.top-nav {
  background: #698ff5;
  height: 60px;
  line-height: 60px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  padding: 16px;
  .logo {
    max-width: 6em;
    margin-right: auto;
    color: white;
    font-weight: 500;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
