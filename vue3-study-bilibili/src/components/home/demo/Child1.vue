<template>
  <!-- <header>header</header>
  <main v-bind="$attrs">main</main>
  <footer>footer</footer> -->
  <div class="demo-child1">
    <div @click="onClickTitle">demo-child1</div>
    <!-- <div>{{modelValue}}</div> -->
    <input type="text" :value="modelValue" @input="emitValue" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: {
      default:() => ({})
    }
  },
  data() {
    return {
      list: [{
        name: 'zhangqi',
        show: true
      },{
        name: 'xifen',
        show: false
      }],
      sel: {num: 1}
    }
  },
  setup() {},
  mounted() {
    console.log(this.modelModifiers)
  },
  methods: {
    emitValue(e) {
      let value = e.target.value;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue',value)
    },
    onClickTitle() {
      // this.$emit('change', '10')
      this.$emit('update:modelValue', 'sss')
    },
    one() {
      console.log('one')
    },
    two() {
      console.log('two')
    },
    onSelectChange() {
      console.log(this.sel)
    }
  },
  emits: {
    change: (num) => {
      if(typeof num === 'number'){
        return true
      } else {
        return false
      }
    }
  }
});
</script>
<style lang="scss" scoped>
</style>