<template>
  <at-tab-bar
    fixed
    :tab-list="tabList2"
    :current="current4"
    @click="handleClick(4, $event)"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { AtTabBar } from "taro-ui-vue3";
import { Page, Panel, ExampleItem } from "@/components/index";

import "./index.scss";

export default defineComponent({
  name: "TabbarDemo",

  components: {
    AtTabBar,
    Page,
    Panel,
    ExampleItem,
  },

  setup() {
    const state = reactive({
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
    });

    const tabList2 = ref([
      { title: "预定", iconType: "add-circle"},
      { title: "记录", iconType: "clock" },
      { title: "我的", iconType: "user"},
    ]);

    function handleClick(num, value) {
      state[`current${num}`] = value;
    }

    return {
      ...toRefs(state),
      tabList2,
      handleClick,
    };
  },
});
</script>
