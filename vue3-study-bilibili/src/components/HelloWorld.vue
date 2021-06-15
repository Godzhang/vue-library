<template>
  <div>{{state.count}}</div>
  <div>{{state.double}}</div>
  <button @click="() => state.count++">add</button>
  <div>{{name}}</div>
</template>
<script lang="ts">
import {defineComponent, reactive, computed, ref, watch} from 'vue'

export default defineComponent({
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    // console.log(props, context)
    type DState = {
      count: number;
      double:number
    }
    const state: DState = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })
    
    const name = ref('zhangqi')

    return {
      state,
      name
    }
  }
})
</script>
<!--
<script setup lang="ts">
import { onMounted, reactive, ref, computed } from "vue";

type DState = {
  count: number;
  double:number
}
const state: DState = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})

</script>
-->
<style scoped>
a {
  color: #42b983;
}
</style>
