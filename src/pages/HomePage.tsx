import { defineComponent } from 'vue'
import VButton from '@/components/VButton'
import VCard from '@/components/VCard'
import styles from '@/scss/layout.module.scss'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <main class={styles.main}>
        <div class={styles.container}>
          <div class={styles.columns}>
            <VCard variant="first">
              <h1>Home page</h1>
              <VButton variant="first">Hello, world!</VButton>
            </VCard>
            <VCard variant="second">
              <h1>Home page</h1>
              <VButton variant="second">Hello, world!</VButton>
            </VCard>
            <VCard variant="third">
              <h1>Home page</h1>
              <VButton variant="third">Hello, world!</VButton>
            </VCard>
          </div>
        </div>
      </main>
    )
  },
})
