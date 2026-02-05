import type { ReactNode } from 'react'
import styles from './ButtonIcon.module.css'

type ButtonIconProps = {
  children: ReactNode
  handleClick: () => void
  disabled?: boolean
}

export function ButtonIcon({ children, handleClick, disabled = false }: ButtonIconProps) {
  return (
    <button onClick={handleClick} className={styles.ButtonIcon} disabled={disabled}>
      {children}
    </button>
  )
}
