<template>
   <pre :class="`language-${codeType}`" v-html="code"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

@Component
export default class HighLightCode extends Vue {
  @Prop() private codeString!: string;
  @Prop() private codeType!: any;

  public code!:any;

  created() {
    let Prism = (window as any).Prism;
    let codeString = this.codeString;
    let hash = {
      html: Prism.languages.html,
      javascript: Prism.languages.javascript,
    }
    this.code = Prism.highlight(codeString, hash[this.codeType], `${this.codeType}`);
  }
}
</script>
