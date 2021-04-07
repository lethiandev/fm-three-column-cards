import VButton from '@/components/VButton'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <main>
        <h1>Home page</h1>
        <VButton>Hello, world!</VButton>
      </main>
    )
  },
})
