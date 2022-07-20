import { mount } from '@vue/test-utils'
import SafeButton from '@/components/SafeButton.vue'

test('props', () => {
  const wrapper = mount(SafeButton, {
    props: {
      value: 'val',
      display: 'disp',
      fontSize: '18px'
    }
  })

  expect(wrapper.props()).toEqual({
    value: 'val',
    display: 'disp',
    fontSize: '18px'
  })
})

test('attributes', () => {
  const wrapper = mount(SafeButton)

  expect(wrapper.attributes()).toEqual({
    class: 'safe-button'
  })

})

test('button text', () => {
  const wrapper = mount(SafeButton, {
    props: {
      value: 'val',
      display: 'disp',
      fontSize: '18px'
    }
  })

  expect(wrapper.html()).toContain('<p>disp</p>');

})
