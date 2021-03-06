<demo>
基本样式
</demo>
<template>
  <div>
    <Button theme="button"> 普通按钮 </Button>
    <Button theme="link"> 链接按钮 </Button>
    <Button theme="text"> 文本按钮 </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button  from '../../../lib/Button.vue';
@Component({
  components: {
    Button
  }
})
export default class ButtonDemoNormal extends Vue {}
</script>