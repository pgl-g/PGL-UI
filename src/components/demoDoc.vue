<template>
   <div>
    <h2>{{ title }}</h2>
    <p>{{ titleDetail }}</p>
    <br>
    <h3>何时使用</h3>
    <p>{{ useDetail }}</p>
    <br>
    <h3>注意</h3>
    <article>
      以下代码中的 组件/函数 需要统一从 pgl-ui 中导入
      <HighLightCode :code-string="codeString" code-type="javascript"/>
    </article>
    <br>
    <h3>代码演示</h3>
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HighLightCode from './higtLightCode.vue';

@Component({
  components: {
    HighLightCode
  }
})
export default class DemoDoc extends Vue {
@Prop() private title!: string;
@Prop() private titleDetail!: string;
@Prop() private useDetail!: string;

get codeString() {
  return 'import { XXX } from \'../../../../lib/index.ts\';\n// 需改为\nimport { XXX } from \'block-ui-1\';';
}
}
</script>
