:: BASE_DOC ::

## FAQ

### `Popconfirm` 及基于 `Popup` 的相关浮层组件，嵌套使用可能出现位置偏移的情况，如何解决？

目前暂时可通过 `Fragment` 或者其他 `HTML` 元素来解决

```js
<Popconfirm content="Popconfirm Content">
  <>
    {children}
  </>
</Popconfirm>
```

## API
### Popconfirm Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
cancelBtn | TNode | '' | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：`string \| ButtonProps \| TNode`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts) | N
children | TNode | - | 触发元素，同 triggerElement。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
confirmBtn | TNode | '' | 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：`string \| ButtonProps \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | 确认框内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
destroyOnClose | Boolean | true | 是否在关闭浮层时销毁浮层 | N
icon | TElement | - | 确认框图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
popupProps | Object | - | 透传 Popup 组件属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts) | N
showArrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | default | 文字提示风格。可选项：default/warning/danger | N
triggerElement | TNode | - | 触发元素。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
visible | Boolean | - | 是否显示气泡确认框 | N
defaultVisible | Boolean | - | 是否显示气泡确认框。非受控属性 | N
onCancel | Function |  | TS 类型：`(options: { e: MouseEvent }) => void`<br/>点击取消按钮时触发 | N
onConfirm | Function |  | TS 类型：`(options: { e: MouseEvent }) => void`<br/>点击确认按钮时触发 | N
onVisibleChange | Function |  | TS 类型：`(visible: boolean, context?: PopconfirmVisibleChangeContext) => void`<br/>确认框显示或隐藏时触发。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts)。<br/>`interface PopconfirmVisibleChangeContext { trigger?: TriggerSource; e?: MouseEvent }`<br/><br/>`type TriggerSource = 'cancel' \| 'confirm' \| 'document' \| 'trigger-element-click'`<br/> | N
