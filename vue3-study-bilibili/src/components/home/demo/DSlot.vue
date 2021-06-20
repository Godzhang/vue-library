<template>
  <div class="child2">
    <div>child2</div>
    <header>
    <slot name="header" title="header"></slot>
    </header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
</style>