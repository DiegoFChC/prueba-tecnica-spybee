import { useProjectsStore } from '@/store'
import styles from './FloatingList.module.css'
import { Item } from '@/types'

export function FloatingList() {
  const sortBy = useProjectsStore(store => store.sortBy)

  return (
    <ul className={styles.FloatingList}>
      <li>
        <ul onClick={() => sortBy('alphabetical')}>
          Orden Alfabético
        </ul>
      </li>
      <li>
        <ul onClick={() => sortBy(Item.Incidents)}>
          Número de Incidencias
        </ul>
      </li>
      <li>
        <ul onClick={() => sortBy(Item.RFI)}>
          Número de RFI
        </ul>
      </li>
      <li>
        <ul onClick={() => sortBy(Item.Task)}>
          Número de Tareas
        </ul>
      </li>
    </ul>
  )
}
