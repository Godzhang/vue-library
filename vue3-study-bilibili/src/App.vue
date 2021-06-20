<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, readonly } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
