import { defineComponent, PropType } from 'vue'
import { Variants } from '@/utils/variant'
import styles from '@/scss/layout.module.scss'
import VTransport, { Transport } from './VTransport'

export default defineComponent({
  name: 'VTransportList',
  props: {
    items: {
      type: Array as PropType<Transport[]>,
      required: true,
    },
    variants: {
      type: Array as PropType<Variants[]>,
      default: ['first', 'second', 'third'],
    },
  },
  setup(props) {
    const variant = (index: number) =>
      props.variants[index % props.variants.length]

    // Build list of transport nodes
    const children = props.items.map((item, index) => (
      <VTransport transport={item} variant={variant(index)} />
    ))

    return () => <div class={styles.columns}>{children}</div>
  },
})
