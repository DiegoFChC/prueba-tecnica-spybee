import styles from './ItemCard.module.css'
import { ProgressCircle } from '../ProgressCircle/ProgressCircle'

type ItemCardType = {
  title: 'Incidencias' | 'RFI' | 'Tareas'
  count: number
  subTotal: number
}

export function ItemCard({ title, count, subTotal }: ItemCardType) {
  return (
    <div className={styles.ItemCard}>
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{count}</p>
        <span>Total Abiertas</span>
      </div>
      <ProgressCircle total={count} subTotal={subTotal} />
    </div>
  )
}
