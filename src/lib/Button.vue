<template>
  <button class="block-button" :class="classes" :disabled="disabled">
    <span class="block-loadingIndecator" v-if="loading"/>
    <slot/>
  </button>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
export default class Button extends Vue {
  @Prop({ default: 'button' }) readonly theme!: string;
  @Prop({ default: 'normal' }) readonly size!: string;
  @Prop({ default: 'normal' }) readonly level!: string;
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean;
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean;

  get classes() {
    return {
      [`block-theme-${this.theme}`]: this.theme,
      [`block-size-${this.size}`]: this.size,
      [`block-level-${this.level}`]: this.level
    }
  }
}
</script>

<style lang="less">
.block-button {
  box-sizing: border-box;
  height: 32px;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: #40a9ff;
    border-color: #40a9ff;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.block-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: #40a9ff;

    &:hover, &:focus {
      color: lighten(#40a9ff, 10%);
    }
  }

  &.block-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);
    }
  }
  &.block-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.block-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.block-theme-button {
    &.block-level-main {
      background: #40a9ff;
      color: white;
      border-color: #40a9ff;
      &:hover,
      &:focus {
        background: darken(#40a9ff, 10%);
        border-color: darken(#40a9ff, 10%);
      }
    }
    &.block-level-danger {
      background: red;
      border-color: red;
      color: white;
      &:hover,
      &:focus {
        background: darken(red, 10%);
        border-color: darken(red, 10%);
      }
    }
  }
  &.block-theme-link {
    &.block-level-danger {
      color: red;
      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }
  &.block-theme-text {
    &.block-level-main {
      color: #40a9ff;
      &:hover,
      &:focus {
        color: darken(#40a9ff, 10%);
      }
    }
    &.block-level-danger {
      color: red;
      &:hover,
      &:focus {
        color: darken(red, 10%);
      }
    }
  }
  &.block-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
      &:hover {
        border-color: grey;
      }
    }
  }
  &.block-theme-link, &.block-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: grey;
    }
  }
  > .block-loadingIndecator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #40a9ff #40a9ff #40a9ff transparent;
    border-style: solid;
    border-width: 2px;
    animation: block-spin 1s infinite linear;
  }
}
@keyframes block-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}

</style>