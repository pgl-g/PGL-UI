<template>
  <div class="demo-box">
    <h4>{{component.__sourceCodeTitle}}</h4>
    <div class="intro">
      <div class="demo-component">
        <component :is="component"/>
      </div>
    </div>
    <div>
      <pglButton level="main" size="normal" @click="toggle">{{buttonText}}</pglButton>
    </div>
    <higtLightCode v-if="codeVisible" :codeString="component.__sourceCode" codeType="html"></higtLightCode>
  </div>
</template>
<style lang="less" scoped>
.demo-box{
  display: grid;
  border:1px solid rgba(0,0,0,0.25);
  margin-top: 20px;
  >h4{
    padding: 4px;
    font-weight: bold;
  }

  >.intro{
    border-top: 1px solid rgba(0,0,0,0.25);
    overflow: auto;
    padding: 4px;
    display: flex;
    flex-direction: column;
    >.demo{
      padding:  8px;
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import pglButton from '../lib/Button.vue';
import higtLightCode from './higtLightCode.vue';

@Component({
  components: {
    pglButton,
    higtLightCode
  }
})
export default class Demo extends Vue {
  @Prop({ required: true }) private component!: Object;

  private codeVisible: boolean = false;

  get buttonText() {
    return this.codeVisible ? '隐藏代码' : '显示代码'
  }

  public toggle() {
    this.codeVisible = !this.codeVisible;
  }
}
</script>
