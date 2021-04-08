import { mount } from '@vue/test-utils'
import VButton from '@/components/VButton'

describe('VButton.tsx', () => {
  it('should render as hyperlink', () => {
    const wrapper = mount(VButton)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.element.tagName).toEqual('A')
  })

  it('should render content', () => {
    const textNode = 'button-test-content'
    const wrapper = mount(VButton, {
      slots: { default: textNode },
    })

    expect(wrapper.text()).toEqual(textNode)
  })

  it('should have color variants', async () => {
    const wrapper = mount(VButton)

    await wrapper.setProps({ variant: 'first' })
    expect(wrapper.classes()).toContain('variant-first')

    await wrapper.setProps({ variant: 'second' })
    expect(wrapper.classes()).toContain('variant-second')

    await wrapper.setProps({ variant: 'third' })
    expect(wrapper.classes()).toContain('variant-third')
  })
})
