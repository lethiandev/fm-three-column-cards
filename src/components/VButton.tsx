import { FunctionalComponent } from 'vue'
import styles from '@/scss/buttons.module.scss'

interface VButtonAttributes {
  variant?: 'first' | 'second' | 'third'
}

const VButton: FunctionalComponent<VButtonAttributes> = (props, { slots }) => {
  const variantName = `variant-${props.variant}`
  const variantClass = styles[variantName] || ''

  return (
    <button class={`${styles.button} ${variantClass}`}>
      {slots.default?.()}
    </button>
  )
}

export default VButton
