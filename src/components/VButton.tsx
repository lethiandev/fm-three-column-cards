import { FunctionalComponent } from 'vue'
import { variantClass, Variants } from '@/utils/variant'
import styles from '@/scss/buttons.module.scss'

interface VButtonAttributes {
  variant?: Variants
}

const VButton: FunctionalComponent<VButtonAttributes> = (props, { slots }) => {
  const variantClassName = variantClass(styles, props.variant)

  return (
    <button class={[styles.button, variantClassName]}>
      {slots.default?.()}
    </button>
  )
}

export default VButton
