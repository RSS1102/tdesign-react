:: BASE_DOC ::


### 最多选中的数量

{{ max }}

## API
### Checkbox Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
checkAll | Boolean | false | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用 | N
checked | Boolean | false | 是否选中 | N
defaultChecked | Boolean | false | 是否选中。非受控属性 | N
children | TNode | - | 多选框内容，同 label。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
disabled | Boolean | undefined | 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。Checkbox.disabled 优先级高于 CheckboxGroup.disabled | N
indeterminate | Boolean | false | 是否为半选 | N
label | TNode | - | 主文案。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
name | String | - | HTML 元素原生属性 | N
readonly | Boolean | false | 只读状态 | N
title | String | - | HTML 原生属性 | N
value | String / Number / Boolean | - | 多选框的值。TS 类型：`string \| number \| boolean` | N
onChange | Function |  | TS 类型：`(checked: boolean, context: { e: ChangeEvent }) => void`<br/>值变化时触发 | N
onClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>点击时触发，一般用于外层阻止冒泡场景 | N

### CheckboxGroup Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
disabled | Boolean | - | 是否禁用组件，默认为 false。CheckboxGroup.disabled 优先级低于 Checkbox.disabled | N
max | Number | undefined | 支持最多选中的数量 | N
name | String | - | 统一设置内部复选框 HTML 属性 | N
options | Array | - | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string \| TNode; value?: string \| number; disabled?: boolean; name?: string; checkAll?: true }`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/checkbox/type.ts) | N
value | Array | [] | 选中值。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/checkbox/type.ts) | N
defaultValue | Array | [] | 选中值。非受控属性。TS 类型：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/checkbox/type.ts) | N
onChange | Function |  | TS 类型：`(value: T, context: CheckboxGroupChangeContext) => void`<br/>值变化时触发，`context.current` 表示当前变化的数据值，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中；`context.option` 表示当前变化的数据项。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: ChangeEvent; current: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/> | N
