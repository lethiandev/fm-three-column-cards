import { defineComponent } from 'vue'
import VButton from '@/components/VButton'
import VCard from '@/components/VCard'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <main>
        <VCard variant="first">
          <h1>Home page</h1>
          <VButton>Hello, world!</VButton>
        </VCard>
      </main>
    )
  },
})
