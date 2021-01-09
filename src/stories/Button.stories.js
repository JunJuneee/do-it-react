import React from 'react'
import Button from '../4장/Button'


export default {
  title : 'Button',
  component : Button
}


const Template = args => <Button {...args} />

export const test = Template.bind({})
test.args = {
  children : '전송하기',
}

export const large_test = Template.bind({})
large_test.args = {
  children : 'large_test',
  large : true
}

export const large_with_primary = Template.bind({})
large_with_primary.args = {
  children : 'large_test',
  large : true,
  primary : true
}