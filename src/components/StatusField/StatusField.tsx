import type { ReactNode } from 'react'
import styles from './StatusField.module.css'
import { Plan, ProjectStatus } from '@/types'
import { defineStatusType } from '@/utils'

type InfoFieldType = {
  children?: ReactNode
  type: 'general' | Plan | ProjectStatus
}

export function StatusField({ children, type }: InfoFieldType) {
  const { bg, color, text } = defineStatusType(type)
  return (
    <span className={styles.InfoField} style={{ background: bg, color }}>
      {text ? text : children}
    </span>
  )
}
