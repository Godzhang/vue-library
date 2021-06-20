<template>
  <div class="demo-page">
    <div>demo-page</div>
    <!-- <Child1 class="child1" v-model.capitalize="bookTitle" @change="onChange"></Child1>
    <div>{{bookTitle}}</div> -->
    <Child2>
      <template #header="slopProps">
      <div>{{slopProps.title}}</div>
      </template>
      <template #default><div>main</div></template>
      <template #footer><div>footer</div></template>
    </Child2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

export default defineComponent({
  components: {Child1,Child2},
  data() {
    return {
      pageName: 'demo',
      bookTitle: 'sitongna'
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