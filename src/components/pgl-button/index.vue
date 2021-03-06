<template>
    <demoDoc 
      title="Button 按钮"
      title-detail="按钮用于开始一个即时操作。"
      use-detail="标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"
    >
      <demo :component="ButtonDemoNormal" />
    </demoDoc>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import demoDoc from '../../components/demoDoc.vue';
import demo from '../../components/demo.vue';
import ButtonDemoNormal from './components/ButtonDemoNormal.vue';

@Component({
  components: {
    demoDoc,
    demo,
    ButtonDemoNormal
  }
})
export default class Button extends Vue {

  get ButtonDemoNormal() {
    return ButtonDemoNormal
  }
}
</script>
