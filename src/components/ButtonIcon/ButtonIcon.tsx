import type { ReactNode } from 'react'
import styles from './ButtonIcon.module.css'

type ButtonIconProps = {
  children: ReactNode
  handleClick: () => void
  disabled?: boolean
  fill?: boolean
}

export function ButtonIcon({ children, handleClick, disabled = false, fill = false }: ButtonIconProps) {
  return (
    <button onClick={handleClick} className={`${styles.ButtonIcon} ${fill && styles.fill}`} disabled={disabled}>
      {children}
    </button>
  )
}
