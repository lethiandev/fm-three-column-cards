import { defineComponent } from 'vue'
import { Transport } from '@/components/VTransport'
import VTransportList from '@/components/VTransportList'
import styles from '@/scss/layout.module.scss'

import iconSedans from '@/assets/icon-sedans.svg'
import iconSuvs from '@/assets/icon-suvs.svg'
import iconLuxury from '@/assets/icon-luxury.svg'

export default defineComponent({
  name: 'Home',
  setup() {
    const transports: Transport[] = [
      {
        icon: iconSedans,
        title: 'Sedans',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        icon: iconSuvs,
        title: 'SUVs',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        icon: iconLuxury,
        title: 'Luxury',
        description: 'Lorem ipsum dolor sit amet',
      },
    ]

    return () => (
      <main class={styles.main}>
        <div class={styles.container}>
          <VTransportList items={transports} />
        </div>
      </main>
    )
  },
})
