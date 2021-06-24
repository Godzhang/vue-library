<template>
  <div class="home-page">
    <div class="sidebar">
      <div class="list">
        <router-link class="item" v-for="item in routerConfig" :key="item.routerName" :to="`${item.routerName}`">{{item.name}}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, readonly } from "vue";
import {routerConfig} from "@/common/routerConfig";
import "@/common/utils"

export default defineComponent({
  data() {
    return {
      routerConfig
    }
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  width: 100%;
  height: 100%;
}
.sidebar {
  flex-shrink: 0;
  width: 200px;
  height: 100%;
  padding: 10px;
  border-right: 1px solid #ddd;
  @include verticalOverflow;
}
.item {
    display: block;
    line-height: 24px;
    color: #333;
    &.router-link-active {
      color: orange;
    }
  }
.content {
  flex-grow: 1;
  height: 100%;
  padding: 10px;
  @include verticalOverflow;


}
</style>
