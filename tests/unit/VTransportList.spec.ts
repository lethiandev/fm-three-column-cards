import { mount } from '@vue/test-utils'
import VTransport, { Transport } from '@/components/VTransport'
import VTransportList from '@/components/VTransportList'

const testItems: Transport[] = [
  {
    icon: '/assets/test-icon-1.png',
    iconAlt: 'Test icon #1',
    title: 'Test transport #1',
    description: 'Test #1',
  },
  {
    icon: '/assets/test-icon-2.png',
    iconAlt: 'Test icon #2',
    title: 'Test transport #2',
    description: 'Test #2',
  },
  {
    icon: '/assets/test-icon-3.png',
    iconAlt: 'Test icon #3',
    title: 'Test transport #3',
    description: 'Test #3',
  },
]

function factorTransportListWrapper(items: Transport[]) {
  return mount(VTransportList, {
    props: { items },
  })
}

describe('VTransportList.tsx', () => {
  it('should render empty list', () => {
    const wrapper = factorTransportListWrapper([])
    const transports = wrapper.findAllComponents(VTransport)

    expect(transports).toHaveLength(0)
  })

  it('should render transport cards', () => {
    const wrapper = factorTransportListWrapper(testItems)
    const transports = wrapper.findAllComponents(VTransport)

    expect(transports).toHaveLength(3)

    for (const i in transports) {
      const transportHtml = transports[i].html()
      expect(transportHtml).toContain(testItems[i].icon)
      expect(transportHtml).toContain(testItems[i].title)
      expect(transportHtml).toContain(testItems[i].description)
    }
  })
})
