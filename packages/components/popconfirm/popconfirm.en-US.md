:: BASE_DOC ::

## FAQ

### How to solve the problem that `Popconfirm` and related floating components based on `Popup` may be offset when nested?

Currently, this can be solved by `Fragment` or other `HTML` elements

```js
<Popconfirm content="Popconfirm Content">
  <>
    {children}
  </>
</Popconfirm>
```

## API

### Popconfirm Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
cancelBtn | TNode | '' | Typescript：`string \| ButtonProps \| TNode`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts) | N
children | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
confirmBtn | TNode | '' | Typescript：`string \| ButtonProps \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
destroyOnClose | Boolean | true | \- | N
icon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
placement | String | top | options：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts) | N
showArrow | Boolean | true | \- | N
theme | String | default | options：default/warning/danger | N
triggerElement | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
visible | Boolean | - | \- | N
defaultVisible | Boolean | - | uncontrolled property | N
onCancel | Function |  | Typescript：`(options: { e: MouseEvent }) => void`<br/> | N
onConfirm | Function |  | Typescript：`(options: { e: MouseEvent }) => void`<br/> | N
onVisibleChange | Function |  | Typescript：`(visible: boolean, context?: PopconfirmVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/popconfirm/type.ts)。<br/>`interface PopconfirmVisibleChangeContext { trigger?: TriggerSource; e?: MouseEvent }`<br/><br/>`type TriggerSource = 'cancel' \| 'confirm' \| 'document' \| 'trigger-element-click'`<br/> | N
