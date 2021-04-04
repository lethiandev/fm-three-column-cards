import { defineComponent } from 'vue'
import VButton from './components/VButton'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <header>
          <img src="/assets/logo.png" />
        </header>
        <main>
          <h1>Hello, from App.tsx!</h1>
          <VButton>Hello, world!</VButton>
        </main>
      </>
    )
  },
})
