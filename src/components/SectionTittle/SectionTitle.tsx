import { StatusField } from '../StatusField/StatusField'
import styles from './SectionTitle.module.css'

type SectionTittleType = {
  title: string
  info?: string
}

export function SectionTitle({ title, info }: SectionTittleType) {
  return (
    <div className={styles.SectionTitle}>
      <h1>{title}</h1>
      <StatusField type='general'>{info}</StatusField>
    </div>
  )
}
