<template>
  <Main />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/main.vue';

@Component({
  components: {
    Main,
  },
})
export default class Home extends Vue {}
</script>
