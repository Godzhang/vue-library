<template>
  <div class="life-cycle">生命周期</div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  setup(props, context) {
    console.log('setup')

    onMounted(() => {
      console.log('setup onMounted')
    })

    return {
      
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  }
})
</script>
<style scoped>
</style>
