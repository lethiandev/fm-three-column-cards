import { FunctionalComponent } from 'vue'
import styles from '@/scss/cards.module.scss'

interface VCardAttributes {
  variant?: 'first' | 'second' | 'third'
}

const VCard: FunctionalComponent<VCardAttributes> = (props, { slots }) => {
  const variantName = `variant-${props.variant}`
  const variantClass = styles[variantName] || ''

  return (
    <section class={`${styles.card} ${variantClass}`}>
      {slots.default?.()}
    </section>
  )
}

export default VCard
