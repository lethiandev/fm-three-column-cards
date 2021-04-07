import { mount } from '@vue/test-utils'
import VTransport from '@/components/VTransport'

describe('VTransport.tsx', () => {
  it('should render as article', () => {
    const wrapper = mount(VTransport)
    expect(wrapper.element.tagName).toEqual('ARTICLE')
  })

  it('should render slots', () => {
    const slots = {
      header: 'Header test content!',
      default: 'Default test content!',
      footer: 'Footer default content!',
    }
    const wrapper = mount(VTransport, {
      slots,
    })

    expect(wrapper.find('header').text()).toEqual(slots.header)
    expect(wrapper.find('div').text()).toEqual(slots.default)
    expect(wrapper.find('footer').text()).toEqual(slots.footer)
  })
})
