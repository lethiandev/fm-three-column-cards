import { FunctionalComponent } from 'vue'
import { variantClass, Variants } from '@/utils/variant'
import styles from '@/scss/cards.module.scss'

interface VCardAttributes {
  class?: string
  variant?: Variants
}

const VCard: FunctionalComponent<VCardAttributes> = (props, { slots }) => {
  const variantClassName = variantClass(styles, props.variant)

  return (
    <article class={[styles.card, variantClassName]}>
      {slots.default?.()}
    </article>
  )
}

export default VCard
