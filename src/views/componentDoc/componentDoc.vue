<template>
  <div class="layout">
    <Header class="nav" />
    <div class="content">
      <aside>
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/componentDoc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/componentDoc">安装</router-link>
          </li>
          <li>
            <router-link to="/componentDoc">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/componentDoc">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/componentDoc/pglButton">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/componentDoc">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/componentDoc">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;

   > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    // padding-top: 60px;
    padding-left: 156px;
   
  }
}
.content {
  display: flex;
  position: relative;
  > aside {
    position: fixed;
    flex-shrink: 0;
    z-index: 1;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  .router-link-active{
    color:#698ff5;
  }

  width: 150px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 70px 16px 16px;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  > h2 {
    margin-bottom: 4px;
    font-weight: 600;
    color: #101010;
  }

  > ol {
    > li {
      padding: 4px 0;
      color: rgb(48, 68, 85);
    }
  }
}
main {
  overflow: auto;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../home/components/header.vue";

@Component({
  components: {
    Header,
  },
})
export default class ComponentDoc extends Vue {}
</script>
