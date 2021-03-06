<template>
  <div class="Main">
    <Header />
    <div class="main-banner">
      <header>
        <div class="nameLogo">
          <img
            class="img-logo"
            src="../../../../src/assets/images/pet_logo.png"
            alt=""
          />
          <span>PGL UI</span>
        </div>

        <div class="slogan">
          <span class="slogan-title"> 基于Vue2.x的UI组件库 </span>
          <span class="slogan-btn">
            <router-link to="/componentDoc/intro">开始使用</router-link>
            <a href="https://github.com/guxiaobiao/PGL-UI">Github</a>
          </span>
        </div>
      </header>
    </div>

    <main class="main-footer">
      <div>
        <img
          class="img-logo"
          src="../../../../src/assets/images/pet_logo.png"
          alt=""
        />
        <article>
          <h3>基于 Vue3.0</h3>
          <p>骄傲的使用了Vue 3.0</p>
        </article>
      </div>
      <div>
        <img
          class="img-logo"
          src="../../../../src/assets/images/pet_logo.png"
          alt=""
        />
        <article>
          <h3>基于 Vue3.0</h3>
          <p>骄傲的使用了Vue 3.0</p>
        </article>
      </div>
      <div>
        <img
          class="img-logo"
          src="../../../../src/assets/images/pet_logo.png"
          alt=""
        />
        <article>
          <h3>基于 Vue3.0</h3>
          <p>骄傲的使用了Vue 3.0</p>
        </article>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
.main-banner {
  padding: 80px;
  background: rgb(129, 71, 181);
  color: #fff;
  header {
    margin: auto;
    min-width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    .nameLogo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .img-logo {
        width: 240px;
        height: 240px;
      }
      > span {
        font-size: 34px;
      }
    }

    .slogan {
      display: flex;
      flex-direction: column;
      align-items: center;
      .slogan-title {
        font-size: 32px;
      }
      .slogan-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        a {
          margin-right: 20px;
          color: #101010;
          padding: 10px 15px;
          background: #fff;
          border-radius: 15%;
        }
      }
    }
  }
}
.main-footer {
  display: grid;
  overflow: hidden;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  > div {
    display: grid;
    justify-items: center;
    padding-top: 10px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./header.vue";

@Component({
  components: {
    Header,
  },
})
export default class HomeMain extends Vue {}
</script>
