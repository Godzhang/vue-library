<template>
<button @click="handle">click</button>
</template>
<script lang="ts">
import { defineComponent, h, withDirectives, resolveDirective } from "vue";
export default defineComponent({
  props: {
    level: Number
  },
  // data() {
  //   return {
  //   }
  // },
  // render() {
    //@ts-ignore
    // const pin = resolveDirective('pin')
    // return withDirectives(h(`div`), [pin, 200, 'top', {animate: true}])
  // },
  // setup() {},
  // mounted() {
  //   console.log(this.$slots)
  // },
  // emits: {
  //   trigger: (value:string) =>{
  //     if (value.includes('v-')) return true
  //     return false
  //   }
  // },
  methods: {
    handle() {
      this.$emit("trigger", 'haha')
    }
  },
  // emits: {}
});
</script>
<style lang="scss" scoped>
</style>