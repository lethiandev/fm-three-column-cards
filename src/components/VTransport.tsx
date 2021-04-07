import { defineComponent, PropType } from 'vue'
import { Variants } from '@/utils/variant'
import VCard from './VCard'

export default defineComponent({
  name: 'VTransport',
  props: {
    variant: {
      type: String as PropType<Variants>,
      required: false,
    },
  },
  setup(props, { slots }) {
    return () => (
      <VCard class="card-transport" variant={props.variant}>
        <header>{slots.header?.()}</header>
        <div>{slots.default?.()}</div>
        <footer>{slots.footer?.()}</footer>
      </VCard>
    )
  },
})
