import { ReactNode } from 'react'
import styles from './GenericTable.module.css'

type GenericTableType = {
  headers: string[]
  children: ReactNode
}

export function GenericTable({ children, headers }: GenericTableType) {
  return (
    <div className={styles.tableWrapper}>
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
