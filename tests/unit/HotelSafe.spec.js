import { mount } from '@vue/test-utils'
import HotelSafe from '@/components/HotelSafe.vue'

test('attributes', () => {
  const wrapper = mount(HotelSafe)

  expect(wrapper.attributes()).toEqual({
    class: 'hotel-safe'
  })

})
