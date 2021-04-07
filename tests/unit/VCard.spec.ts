import { mount } from '@vue/test-utils'
import VCard from '@/components/VCard'

describe('VCard.tsx', () => {
  it('should render as section', () => {
    const wrapper = mount(VCard)
    expect(wrapper.element.tagName).toEqual('SECTION')
  })

  it('should render content', () => {
    const textNode = 'card-test-content'
    const wrapper = mount(VCard, {
      slots: { default: textNode },
    })

    expect(wrapper.text()).toEqual(textNode)
  })

  it('should have color variants', async () => {
    const wrapper = mount(VCard)

    await wrapper.setProps({ variant: 'first' })
    expect(wrapper.classes()).toContain('variant-first')

    await wrapper.setProps({ variant: 'second' })
    expect(wrapper.classes()).toContain('variant-second')

    await wrapper.setProps({ variant: 'third' })
    expect(wrapper.classes()).toContain('variant-third')
  })
})
