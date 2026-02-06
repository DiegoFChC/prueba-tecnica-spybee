import { ReactNode } from 'react'
import styles from './ButtonIconList.module.css'

type ButtonIconListProps = {
  children: ReactNode
}

export function ButtonIconList({ children }: ButtonIconListProps) {
  return <ul className={styles.ButtonIconList}>{children}</ul>
}
