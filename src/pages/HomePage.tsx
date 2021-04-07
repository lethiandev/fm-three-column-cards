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
        description:
          'Choose a sedan for its affordability and excellent fuel economy. ' +
          'Ideal for cruising in the city or on your next road trip.',
      },
      {
        icon: iconSuvs,
        title: 'SUVs',
        description:
          'Take an SUV for its spacious interior, power, and versatility. ' +
          'Perfect for your next family vacation and off-road adventures.',
      },
      {
        icon: iconLuxury,
        title: 'Luxury',
        description:
          'Cruise in the best car brands without the bloated prices. ' +
          'Enjoy the enhanced comfort of a luxury rental and arrive in style.',
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
