import { defineComponent, PropType } from 'vue'
import { Variants } from '@/utils/variant'
import styles from '@/scss/cards.module.scss'
import VCard from './VCard'
import VButton from './VButton'

export interface Transport {
  icon: string
  title: string
  description: string
}

export default defineComponent({
  name: 'VTransport',
  props: {
    transport: {
      type: Object as PropType<Transport>,
      required: true,
    },
    variant: {
      type: String as PropType<Variants>,
      required: false,
    },
  },
  setup(props) {
    const className = styles['card-transport']

    return () => (
      <VCard class={className} variant={props.variant}>
        <header>
          <img src={props.transport.icon} />
          <h1>{props.transport.title}</h1>
        </header>
        <p>{props.transport.description}</p>
        <footer>
          <VButton variant={props.variant}>Learn more</VButton>
        </footer>
      </VCard>
    )
  },
})