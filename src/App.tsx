import { defineComponent } from 'vue'

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
        </main>
      </>
    )
  },
})
