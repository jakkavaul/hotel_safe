import { mount } from '@vue/test-utils'
import NumPad from '@/components/NumPad.vue'

test('attributes', () => {
  const wrapper = mount(NumPad)

  expect(wrapper.attributes()).toEqual({
    class:  'num-pad',
    id:     'num_pad',
  })
})
