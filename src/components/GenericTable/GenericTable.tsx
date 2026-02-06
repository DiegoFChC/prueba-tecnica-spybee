import { ReactNode } from 'react'
import styles from './GenericTable.module.css'
import { useAppStore } from '@/store/app'

type GenericTableType = {
  headers: string[]
  children: ReactNode
  size?: 'small' | 'big'
}

export function GenericTable({ children, headers, size = 'big' }: GenericTableType) {
  const showMap = useAppStore(store => store.showMap)

  return (
    <div className={`${styles.tableWrapper} ${size === 'big' && showMap && styles.tableWrapperMap}`}>
      <table className={styles.GenericTable}>
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <td key={`${header}-${index}`}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
