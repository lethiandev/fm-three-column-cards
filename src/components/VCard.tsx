import { FunctionalComponent } from 'vue'
import { variantClass, Variants } from '@/utils/variant'
import styles from '@/scss/cards.module.scss'

interface VCardAttributes {
  variant?: Variants
}

const VCard: FunctionalComponent<VCardAttributes> = (props, { slots }) => {
  const variantClassName = variantClass(styles, props.variant)

  return (
    <section class={[styles.button, variantClassName]}>
      {slots.default?.()}
    </section>
  )
}

export default VCard
