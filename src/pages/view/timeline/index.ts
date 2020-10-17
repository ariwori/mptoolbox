
import { h, defineComponent } from 'vue'
import { AtTimeline } from "taro-ui-vue3"
import { Page, Panel, ExampleItem } from '@/components/demo-page'
import './index.scss'

export default defineComponent({
  name: "TimelineDemo",

  setup() {

    return () => (
      h(Page, { class: 'page', headerTitle: 'Timeline 时间轴' }, {
        default: () => [

          /* 基础用法*/
          h(Panel, { title: '基础用法', class: 'panel__content' }, {
            default: () => [
              h(ExampleItem, null, {
                default: () => [
                  h(AtTimeline, {
                    items: [
                      { title: '刷牙洗脸' },
                      { title: '吃早餐' },
                      { title: '上班' },
                      { title: '睡觉' }
                    ]
                  })
                ]
              })
            ]
          }),

          /* 自定义颜色*/
          h(Panel, { title: '自定义颜色', class: 'panel__content' }, {
            default: () => [
              h(ExampleItem, null, {
                default: () => [
                  h(AtTimeline, {
                    items: [
                      { title: '刷牙洗脸' },
                      { title: '吃早餐', color: 'green' },
                      { title: '上班', color: 'red' },
                      { title: '睡觉', color: 'yellow' }
                    ]
                  })
                ]
              })
            ]
          }),

          /* 自定义图标*/
          h(Panel, { title: '自定义图标', class: 'panel__content' }, {
            default: () => [
              h(ExampleItem, null, {
                default: () => [
                  h(AtTimeline, {
                    items: [
                      { title: '刷牙洗脸', icon: 'check-circle' },
                      { title: '吃早餐', icon: 'clock' },
                      { title: '上班', icon: 'clock' },
                      { title: '睡觉', icon: 'clock' }
                    ]
                  })
                ]
              })
            ]
          }),

          /* 幽灵节点*/
          h(Panel, { title: '幽灵节点', class: 'panel__content' }, {
            default: () => [
              h(ExampleItem, null, {
                default: () => [
                  h(AtTimeline, {
                    pending: true,
                    items: [
                      { title: '刷牙洗脸' },
                      { title: '吃早餐' },
                      { title: '上班' },
                      { title: '睡觉' }
                    ]
                  })
                ]
              })
            ]
          }),

          /* 丰富内容*/
          h(Panel, { title: '丰富内容', class: 'panel__content' }, {
            default: () => [
              h(ExampleItem, null, {
                default: () => [
                  h(AtTimeline, {
                    pending: true,
                    items: [
                      {
                        title: '刷牙洗脸',
                        content: ['大概8:00'],
                        icon: 'check-circle'
                      },
                      {
                        title: '吃早餐',
                        content: ['牛奶+面包', '餐后记得吃药'],
                        icon: 'clock'
                      },
                      {
                        title: '上班',
                        content: ['查看邮件', '写PPT', '发送PPT给领导'],
                        icon: 'clock'
                      },
                      { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    )
  }
})
