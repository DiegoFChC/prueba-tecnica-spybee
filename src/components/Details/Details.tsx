'use client'

import { useAppStore } from '@/store/app'
import styles from './Details.module.css'
import { Back, Next, StatisticsIcon } from '@/components'

export function Details() {
  const showDetails = useAppStore((store) => store.showDetails)
  const setShowDetails = useAppStore((store) => store.setShowDetails)

  if (!showDetails)
    return (
      <span className={styles.noDetails}>
        <div>
          <StatisticsIcon width={20} height={20} />
          <button className={styles.open} onClick={() => setShowDetails(true)}>
            <Back width={15} height={15} />
          </button>
        </div>
      </span>
    )

  return (
    <>
      <div className={styles.background} onClick={() => setShowDetails(false)} />
      <section className={styles.Details}>
        <button className={styles.close} onClick={() => setShowDetails(false)}>
          <Next width={15} height={15} />
        </button>
        Detalles
      </section>
    </>
  )
}
