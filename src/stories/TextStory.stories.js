import React from 'react'
import Text from '../4장/Text'


export default {
  title : 'Text',
  component : Text
}


const Template = args => <Text {...args} />

export const test = Template.bind({})
test.args = {
  children : '안녕하세요',
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