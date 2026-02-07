import { ReactNode } from 'react'
import styles from './InfoFiled.module.css'

type InfoFieldType = {
  children?: ReactNode
  image?: string | null
  title?: string | number
  subtitle?: string | number
}

export function InfoFiled({
  children,
  image = null,
  title = '',
  subtitle = '',
}: InfoFieldType) {
  return (
    <div className={styles.InfoField}>
      {image === 'xxx' && <span className={styles.imgLoad}></span>}
      {image && image !== 'xxx' && (
        <img
          className={styles.imgField}
          src={image}
          alt='Image for this info field'
        />
      )}
      <div className={styles.content}>
        <>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </>
        <span>{children}</span>
      </div>
    </div>
  )
}
