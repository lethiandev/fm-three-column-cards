import { FunctionalComponent } from 'vue'
import styles from '@/scss/buttons.module.scss'

const VButton: FunctionalComponent = (props, { slots }) => {
  return <button class={styles.button}>{slots.default?.()}</button>
}

export default VButton
