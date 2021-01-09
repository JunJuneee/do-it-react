import React from 'react'
import Input from '../Input'

export default {
  title : 'Input',
  component : Input
}

const Template = args => <Input  {...args} />

export const setting = Template.bind({})
setting.args = {
  name : '이름',
}

export const label = Template.bind({})
label.args = {
  name : '이름',
  label : '이름'
}

export const value = Template.bind({})
value.args = {
  ...label.args,
  value : '두잇'
}

export const error = Template.bind({})
error.args = {
  ...value.args,
  errorMessage : '이름을 입력해 주세요'
}