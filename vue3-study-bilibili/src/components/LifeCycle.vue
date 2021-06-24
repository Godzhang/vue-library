<template>
  <div class="life-cycle">生命周期</div>
  <div>{{ obj.name }}</div>
  <button @click="onChange">change</button>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  onUpdated,
  onBeforeMount,
} from "vue";

export default defineComponent({
  setup(props, context) {
    console.log("setup");

    const obj = reactive({ name: "zhangqi" });
    const onChange = () => (obj.name = "sitongna");

    onBeforeMount(() => {
      console.log("setup onBeforeMount");
    });
    onMounted(() => {
      console.log("setup onMounted");
    });
    onUpdated(() => {
      console.log("setup onUpdated");
    });

    return {
      obj,
      onChange,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  renderTracked({key, target, type}) {
    console.log('---------------')
    console.log('tracked')
    console.log(key, target, type)
    console.log('---------------')
  },
  renderTriggered({key, target, type}) {
    console.log('---------------')
    console.log('triggered')
    console.log(key, target, type)
    console.log('---------------')
  },
  methods: {
    // onChange() {
    //   this.obj.name = "sitongna";
    // },
  },
});
</script>
<style scoped>
</style>
