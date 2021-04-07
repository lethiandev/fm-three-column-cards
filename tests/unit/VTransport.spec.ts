import { mount } from '@vue/test-utils'
import VTransport, { Transport } from '@/components/VTransport'
import VButton from '@/components/VButton'

const transport: Transport = {
  icon: '/assets/my-test-icon.png',
  title: 'Test transport title',
  description: 'Test transport description',
}

function factorTransportWrapper() {
  return mount(VTransport, {
    props: { transport },
  })
}

describe('VTransport.tsx', () => {
  it('should render as article', () => {
    const wrapper = factorTransportWrapper()
    expect(wrapper.element.tagName).toEqual('ARTICLE')
  })

  it('should render provided content', () => {
    const wrapper = factorTransportWrapper()

    expect(wrapper.find('img').attributes('src')).toEqual(transport.icon)
    expect(wrapper.find('header').text()).toEqual(transport.title)
    expect(wrapper.find('p').text()).toEqual(transport.description)
    expect(wrapper.find('footer').text()).toEqual('Learn More')
  })

  it('should render button', () => {
    const wrapper = factorTransportWrapper()
    expect(wrapper.findComponent(VButton).exists()).toBeTruthy()
  })
})
