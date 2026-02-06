import { ReactNode } from 'react'
import styles from './ActionButton.module.css'

type ActionButtonType = {
  children: ReactNode
  handleClick: () => void
}

export function ActionButton({ children, handleClick }: ActionButtonType) {
  return (
    <button className={styles.ActionButton} onClick={handleClick}>
      {children}
    </button>
  )
}
