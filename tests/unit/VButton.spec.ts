import { mount } from '@vue/test-utils'
import VButton from '@/components/VButton'

describe('VButton.tsx', () => {
  it('should render as button', () => {
    const wrapper = mount(VButton)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.element.tagName).toEqual('BUTTON')
  })

  it('should render content', () => {
    const textNode = 'button-test-content'
    const wrapper = mount(VButton, {
      slots: { default: textNode },
    })

    expect(wrapper.text()).toEqual(textNode)
  })
})
