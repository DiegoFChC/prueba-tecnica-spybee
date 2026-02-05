import styles from './Pagination.module.css'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { Next, Back } from '../Icons/Icons'
import { useProjectsStore } from '@/store'

export function Pagination() {
  const page = useProjectsStore(store => store.page)
  const limit = useProjectsStore(store => store.limit)
  const totalData = useProjectsStore(store => store.totalData)
  const nextPage = useProjectsStore(store => store.nextPage)
  const prevPage = useProjectsStore(store => store.prevPage)
  const changeLimit = useProjectsStore(store => store.changeLimit)

  return (
    <div className={styles.Pagination}>
      <div className={styles.pages}>
        <span>Página {page} de {Math.floor(totalData / limit)}</span>

        <ButtonIcon
          disabled={page - 1 < 1}
          handleClick={prevPage}
        >
          <Back />
        </ButtonIcon>

        <ButtonIcon
          disabled={page + 1 > Math.floor(totalData / limit)}
          handleClick={nextPage}
        >
          <Next />
        </ButtonIcon>
      </div>

      <div>
        Resultados por página:
        <select
          value={limit}
          onChange={(e) => changeLimit(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  )
}