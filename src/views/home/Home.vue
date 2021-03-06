<template>
  <Header />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
