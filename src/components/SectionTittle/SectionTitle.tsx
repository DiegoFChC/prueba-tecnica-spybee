import { InfoField } from '../InfoField/InfoField'
import styles from './SectionTitle.module.css'

type SectionTittleType = {
  title: string
  info?: string
}

export function SectionTitle({ title, info }: SectionTittleType) {
  return (
    <div className={styles.SectionTitle}>
      <h1>{title}</h1>
      <InfoField type='general'>{info}</InfoField>
    </div>
  )
}
