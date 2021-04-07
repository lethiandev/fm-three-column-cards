import { mount } from '@vue/test-utils'
import HomePage from '@/pages/HomePage'
import VButton from '@/components/VButton'

describe('HomePage.tsx', () => {
  it('should display three buttons', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.findAllComponents(VButton)).toHaveLength(3)
  })
})
