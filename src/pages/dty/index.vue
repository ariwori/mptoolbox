<template>
  <page header-title="地图院约车订餐">
    <at-noticebar v-bind="barItem.attrs">
      <text>{{ barItem.text }}</text>
    </at-noticebar>
    <view class="panel__title" style="margin-top:5px;">{{ currentDate }}</view>
    <view class="panel__title" style="color: red; margin-top:-15px;">{{ yudingDate }}</view>
    <panel title="定制公交" class="panel__content">
      <example-item>
      <view
          v-for="(item, index) in tagList1"
          :key="`at-tag-${index}`"
          class="subitem"
        >
          <at-tag
            type="primary"
            :name="item.name"
            :active="item.active"
            @click="onClick"
          >
            <text>{{ item.name }}</text>
          </at-tag>
        </view>
        </example-item>
    </panel>
    <panel title="食堂订餐" class="panel__content">
      <example-item>
      <view
          v-for="(item, index) in tagList2"
          :key="`at-tag-${index}`"
          class="subitem"
        >
          <at-tag
            type="primary"
            :name="item.name"
            :active="item.active"
            @click="onClick1"
          >
            <text>{{ item.name }}</text>
          </at-tag>
        </view>
        </example-item>
    </panel>
    <panel>
    <view class="btn-item">
        <at-button
          type="primary"
          @click="handleButtonClick"
        >提交</at-button>
      </view>
    </panel>
    <at-tab-bar
      fixed
      :tab-list="tabList"
      :current="current4"
      @click="handleClick(4, $event)"
    />
  </page>
</template>

<script lang="ts">
import Taro from "@tarojs/taro"
import { defineComponent, reactive, ref, toRefs } from "vue";
import { AtTabBar, AtNoticebar, AtTag, AtButton } from "taro-ui-vue3";
import { Page, Panel, ExampleItem } from "@/components/index";

import "./index.scss";

type ListItem = {
  name: string
  active: boolean
}

interface TagPageState {
  tagList1: ListItem[],
  tagList2: ListItem[]
}

export default defineComponent({
  name: "TabbarDemo",

  components: {
    ExampleItem,
    AtTag,
    AtTabBar,
    AtNoticebar,
    Page,
    Panel,
    AtButton
  },

  setup() {
    const state = reactive<TagPageState>({
      tagList1: [
        { name: '去程', active: false },
        { name: '返程', active: false }
      ],
      tagList2: [
        { name: '中餐', active: false }
      ]});

    const barItem = {
        attrs: {},
        text: "约车为预约定制公交，分为去程和返程；\n订餐为中餐，预约后在小程序预约记录内调出凭证取餐；\n请注意预约时间，只可在当天下午四点前预约后一天的。"
    }
    const currentDate = "当前时间：";

    const yudingDate = "预定时间：";

    const tabList = ref([
      { title: "预定", iconType: "add-circle" },
      { title: "记录", iconType: "clock" },
      { title: "我的", iconType: "user" },
    ]);

    function onClick(data: ListItem): void {
      const { tagList1 } = state
      const findIndex = tagList1.findIndex(item => item.name === data.name)
      const active = !tagList1[findIndex].active
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

      tagList1[findIndex].active = active
      state.tagList1 = tagList1

      Taro.showModal({ content, showCancel: false })

    }

    function onClick1(data: ListItem): void {
      const { tagList2 } = state
      const findIndex = tagList2.findIndex(item => item.name === data.name)
      const active = !tagList2[findIndex].active
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

      tagList2[findIndex].active = active
      state.tagList2 = tagList2

      Taro.showModal({ content, showCancel: false })

    }

    function handleButtonClick() {
      const content = [...arguments].find(item => typeof item === 'string')
      Taro.showModal({
        content: content || '您点击了按钮！',
        showCancel: false
      })
    }

    function handleClick(num, value) {
      state[`current${num}`] = value;
    }

    return {
      ...toRefs(state),
      tabList,
      barItem,
      handleClick,
      currentDate,
      yudingDate,
      handleButtonClick,
      onClick,
      onClick1
    };
  },
});
</script>
