'use client'

import { useAppStore } from '@/store/app'
import styles from './Details.module.css'
import {
  Back,
  Next,
  StatisticsIcon,
  RewindTimeIcon,
  CalendarIcon,
  ItemCard,
  GenericTable,
  InfoFiled,
  ClockIcon,
} from '@/components'
import { IconTitle } from '../IconTitle/IconTitle'
import { Item } from '@/types'
import { useProjectsStore } from '@/store'
import { countCoincidencesState, formatDateTime } from '@/utils'

export function Details() {
  const currentProject = useProjectsStore((store) => store.currentProject)
  const showDetails = useAppStore((store) => store.showDetails)
  const setShowDetails = useAppStore((store) => store.setShowDetails)

  const incidentsCount = countCoincidencesState(
    currentProject.incidents,
    Item.Incidents,
  )
  const RFICount = countCoincidencesState(currentProject.incidents, Item.RFI)
  const tasksCount = countCoincidencesState(currentProject.incidents, Item.Task)

  if (!showDetails)
    return (
      <span className={styles.noDetails}>
        <div>
          <StatisticsIcon width={20} height={20} />
          <button className={styles.open} onClick={() => setShowDetails(true)}>
            <Back width={15} height={15} />
          </button>
        </div>
      </span>
    )

  return (
    <>
      <div
        className={styles.background}
        onClick={() => setShowDetails(false)}
      />
      <section className={styles.Details}>
        <button className={styles.close} onClick={() => setShowDetails(false)}>
          <Next width={15} height={15} />
        </button>
        <IconTitle title='Resumen'>
          <StatisticsIcon />
        </IconTitle>
        <div className={styles.cards}>
          <ItemCard
            title='Incidencias'
            count={incidentsCount.total}
            subTotal={incidentsCount.noClose}
          />
          <ItemCard
            title='RFI'
            count={RFICount.total}
            subTotal={RFICount.noClose}
          />
          <ItemCard
            title='Tareas'
            count={tasksCount.total}
            subTotal={tasksCount.noClose}
          />
        </div>
        <IconTitle title='Próximos a vencer' level='h3'>
          <RewindTimeIcon />
        </IconTitle>
        <GenericTable headers={['Proyecto', 'Item', 'Fecha límite']}>
          {currentProject.incidents.length === 0 && (
            <tr>
              <td>No hay datos</td>
            </tr>
          )}
          {currentProject.incidents.map((incidence) => {
            const { _id, item, description, limitDate, owner, status } =
              incidence
            if (status === 'close') return
            const { date, time } = formatDateTime(limitDate)
            return (
              <tr key={_id}>
                <td>
                  <InfoFiled title={owner}>{description}</InfoFiled>
                </td>
                <td>{item}</td>
                <td>
                  <InfoFiled subtitle={date}>
                    <ClockIcon /> {time}
                  </InfoFiled>
                </td>
              </tr>
            )
          })}
        </GenericTable>
        {/* <IconTitle title='Próximos eventos'>
          <CalendarIcon />
        </IconTitle> */}
      </section>
    </>
  )
}
