import type { ReactNode } from 'react'
import styles from './InfoField.module.css'

type InfoFieldType = {
  children: ReactNode
  type: 'general' | 'plan' | 'status'
}


export function InfoField({ children, type }: InfoFieldType) {
  return (
    <span className={styles.InfoField}>{children}</span>
  )
}