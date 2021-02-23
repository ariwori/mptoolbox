<template>
  <page header-title="地图院约车订餐">
    <view v-if="ydpage0">
      <at-noticebar v-bind="barItem.attrs">
        <text>{{ barItem.text }}</text>
      </at-noticebar>
      <view class="panel__title" style="margin-top: 5px"
        >当前时间：{{ currentDate }}</view
      >
      <view class="panel__title" style="color: red; margin-top: -15px"
        >预定时间：{{ yudingDate }}</view
      >
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
          <at-button type="primary" @click="handleButtonClick">提交</at-button>
        </view>
      </panel>
    </view>
    <view v-if="ydpage1"> </view>
    <view v-if="ydpage2">
      <at-noticebar v-bind="barItem1.attrs">
        <text>{{ barItem1.text }}</text>
      </at-noticebar>
      <view class="panel__title" style="margin-top: 5px"
        >已绑定：{{ currentBindUser }}</view
      >
      <view v-if="!isbind">
      <at-input
        clear
        required
        name="username"
        :border="false"
        title="输入姓名"
        type="text"
        placeholder="必须填写内容"
        v-model:value="username"
      />
      <panel>
        <view class="btn-item">
          <at-button type="primary" @click="handleBindUser">绑定</at-button>
        </view>
      </panel>
      </view>
      <view v-if="isadmin">
        <panel title="管理员面板">
          <example-item>
            <at-grid
              mode="rect"
              :has-border="false"
              :data="data"
              @click="handleClick2"
            ></at-grid>
          </example-item>
        </panel>
      </view>
    </view>
  </page>
  <at-tab-bar
    fixed
    :tab-list="tabList"
    :current="currentTab"
    @click="handleClick($event)"
  />
</template>

<script lang="ts">
import Taro from "@tarojs/taro";
import { defineComponent, reactive, ref, toRefs } from "vue";
import {
  AtTabBar,
  AtNoticebar,
  AtTag,
  AtButton,
  AtInput,
  AtGrid,
} from "taro-ui-vue3";
import { Page, Panel, ExampleItem } from "@/components/index";

import "./index.scss";

type ListItem = {
  name: string;
  active: boolean;
};

type UserInfo = {
  id: string;
  wxid: string;
  name: string;
  depart: string;
  isadmin: number;
};

interface TagPageState {
  tagList1: ListItem[];
  tagList2: ListItem[];
  currentTab: number;
  ydpage0: boolean;
  ydpage1: boolean;
  ydpage2: boolean;
  currentBindUser: string;
  currentDate: string;
  yudingDate: string;
  username: string;
  isadmin: boolean;
  userinfo: UserInfo;
  isbind: boolean;
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
    AtButton,
    AtInput,
    AtGrid,
  },

  setup() {
    const data = ref([
      {
        value: "预定统计",
        iconInfo: {
          size: 30,
          color: "red",
          value: "bookmark",
        },
      },
    ]);

    function handleClick2(value, index) {
      Taro.showModal({
        title: "提示",
        content: `Value: ${JSON.stringify(value)}, Index: ${index}`,
        showCancel: false,
      });
    }

    const state = reactive<TagPageState>({
      tagList1: [
        { name: "去程", active: false },
        { name: "返程", active: false },
      ],
      tagList2: [{ name: "中餐", active: false }],
      currentTab: 0,
      ydpage0: true,
      ydpage1: false,
      ydpage2: false,
      currentBindUser: "未绑定",
      currentDate: "",
      yudingDate: "",
      username: "",
      isadmin: false,
      userinfo: {
        id: "",
        wxid: "",
        name: "",
        depart: "",
        isadmin: 0,
      },
      isbind: false
    });

    const barItem = {
      attrs: {},
      text:
        "约车为预约定制公交，分为去程和返程；\n订餐为中餐，预约后在小程序预约记录内调出凭证取餐；\n请注意预约时间，只可在当天下午四点前预约后一天的。",
    };
    const barItem1 = {
      attrs: {},
      text: "需要先绑定人员才可预定！",
    };

    const tabList = ref([
      { title: "预定", iconType: "add-circle" },
      { title: "记录", iconType: "clock" },
      { title: "我的", iconType: "user" },
    ]);

    function onClick(data: ListItem): void {
      const { tagList1 } = state;
      const findIndex = tagList1.findIndex((item) => item.name === data.name);
      const active = !tagList1[findIndex].active;
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`;

      tagList1[findIndex].active = active;
      state.tagList1 = tagList1;

      Taro.showModal({ content, showCancel: false });
    }

    function onClick1(data: ListItem): void {
      const { tagList2 } = state;
      const findIndex = tagList2.findIndex((item) => item.name === data.name);
      const active = !tagList2[findIndex].active;
      const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`;

      tagList2[findIndex].active = active;
      state.tagList2 = tagList2;

      Taro.showModal({ content, showCancel: false });
    }

    function handleButtonClick() {
      checkUserInfo();
      checkUserBind();
    }

    function handleBindUser() {
      if (state[`currentBindUser`] == "未绑定") {
        var userinfo = state[`userinfo`];
        if (userinfo.wxid == "") {
          checkUserInfo();
        }
        var uname = state[`username`];
        if (uname != "" && uname != null) {
          userinfo.name = uname
          Taro.request({
            url: "https://wx.wqlin.com/wx/user/bind",
            method: "POST",
            data: userinfo,
            success: (res) => {
              let mylogininfo = res.data.data;
              if (mylogininfo != null) {
                var c = ""
                if(mylogininfo.wxid != "" && mylogininfo.wxid != null){
                  c = "绑定成功！"
                  state[`userinfo`] = mylogininfo
                  updateBindView(mylogininfo)
                }else{
                  c = "绑定的姓名不是本院职工，请检查输入是否正确！"
                }
                Taro.showModal({
                  content: c,
                  showCancel: false,
                });
              } else {
                Taro.showModal({
                  content: "程序错误，请联系管理员",
                  showCancel: false,
                });
                return;
              }
            },
          });
        } else {
          Taro.showModal({
            content: "请先输入你的姓名！",
            showCancel: false,
          });
        }
      } else {
        Taro.showModal({
          content: "你已绑定，如需改绑请联系管理员",
          showCancel: false,
        });
      }
    }

    function handleClick(value) {
      changeToTab(value);
    }

    function changeToTab(value) {
      for (var i = 0; i < 3; i++) {
        state[`ydpage${i}`] = false;
      }
      state[`currentTab`] = value;
      state[`ydpage${value}`] = true;
      if (value == 2){
        checkUserInfo()
        var userinfo = state[`userinfo`]
        updateBindView(userinfo)
        if (userinfo.isadmin == 1) {
          state[`isadmin`] = true
        }
      }
    }

    function checkUserBind() {
      var userinfo = state[`userinfo`];
      if (userinfo.wxid != "") {
        if (userinfo.name == "" || userinfo.name == null) {
          changeToTab(2);
          Taro.showModal({
            content: "未绑定职工，请先绑定",
            showCancel: false,
          });
          return;
        } else {
          updateBindView(userinfo)
        }
      }
    }

    function updateBindView(userinfo) {
      state[`currentBindUser`] = userinfo.depart + " " + userinfo.name;
    }

    function checkUserInfo() {
      var userinfo = state[`userinfo`];
      if (userinfo.wxid == "") {
        Taro.login({
          success: (res) => {
            // 发送 res.code 到后台换取 openId, sessionKey
            if (res.code) {
              //发起网络请求
              Taro.request({
                url: "https://wx.wqlin.com/wx/user/wxf570b76b06ed9871/login",
                data: {
                  code: res.code,
                },
                success: (res) => {
                  let mylogininfo = res.data.data;
                  if (mylogininfo != null) {
                    state[`userinfo`] = mylogininfo;
                    checkUserBind()
                  } else {
                    Taro.showModal({
                      content: "程序错误，请联系管理员",
                      showCancel: false,
                    });
                    return;
                  }
                },
              });
            } else {
              Taro.showModal({
                content: "登陆失败，请重试！",
                showCancel: false,
              });
            }
          },
        });
      }
    }

    return {
      ...toRefs(state),
      tabList,
      barItem,
      barItem1,
      handleClick,
      handleButtonClick,
      handleBindUser,
      onClick,
      onClick1,
      data,
      handleClick2,
      checkUserInfo,
      changeToTab,
    };
  },
});
</script>
