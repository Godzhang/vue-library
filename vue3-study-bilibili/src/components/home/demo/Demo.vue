<template>
  <div class="demo-page">
    <div>demo-page</div>
    <Child1 :level="1" @trigger="onChild1Change">render function</Child1>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import Child1 from './Child1.vue';

export default defineComponent({
  components: {Child1,DSlot: defineAsyncComponent(() => import('./DSlot.vue'))},
  data() {
    return {
    }
  },
  setup() {},
  mounted() {
    console.log(this)
  },
  methods: {
    onChild1Change(value: string) {
      console.log(value)
    }
  }
});
</script>
<style lang="scss" scoped>
.demo-page {
  position: relative;
  width: 100%;
  height: 2000px;
}
</style>