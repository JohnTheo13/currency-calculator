import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Select from '@/components/Select.vue'
// Minimum test example

describe('Select.vue', () => {
  const props = {
    options: [0, 1, 2, 3],
    name: 'select',
    title: 'title',
    selecter: 0
  }
  const wrapper = shallowMount(Select, {
    propsData: props
  })
  it('renders label title ', () => {
    expect(wrapper.find('label').html()).to.contain(props.title)
    expect(wrapper.find('select').findAll('option')).to.have.length(props.options.length)
  })
  it('renders options passed', () => {
    expect(wrapper.find('label').html()).to.contain(props.title)
    expect(wrapper.find('select').findAll('option')).to.have.length(props.options.length)
  })
})
