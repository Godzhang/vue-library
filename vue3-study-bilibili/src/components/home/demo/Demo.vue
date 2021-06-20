<template>
  <div class="demo-page">
    <div>demo-page</div>
    <!-- <Child1 class="child1" v-model.capitalize="bookTitle" @change="onChange"></Child1>
    <div>{{bookTitle}}</div> -->
    <DSlot>
      <template #header="slopProps">
      <div>{{slopProps.title}}</div>
      </template>
      <template #default><div>main</div></template>
      <template #footer><div>footer</div></template>
    </DSlot>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import Child1 from './Child1.vue';

export default defineComponent({
  components: {Child1,DSlot: defineAsyncComponent(() => import('./DSlot.vue'))},
  data() {
    return {
      pageName: 'demo',
      bookTitle: 'sitongna'
    }
  },
  provide() {
    return {
      len: this.pageName.length
    }
  },
  setup() {},
  mounted() {
    // console.log(this)
  },
  methods: {
    onChange() {
      console.log('child1 change')
    }
  }
});
</script>
<style lang="scss" scoped>
</style>