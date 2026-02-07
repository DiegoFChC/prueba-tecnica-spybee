import { ReactNode } from 'react'
import styles from './IconTitle.module.css'

type IconTitleType = {
  children: ReactNode
  title: string
  level?: 'h2' | 'h3'
}

export function IconTitle({ children, title, level = 'h2' }: IconTitleType) {
  return (
    <div className={styles.IconTitle}>
      {children}
      {level === 'h2' ? <h2>{title}</h2> : <h3>{title}</h3>}
    </div>
  )
}
