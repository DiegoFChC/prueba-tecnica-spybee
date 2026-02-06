'use client'

import { useProjectsStore } from '@/store'
import styles from './Container.module.css'
import { Pagination } from '../Pagination/Pagination'
import { GenericTable } from '../GenericTable/GenericTable'
import { InfoFiled } from '../InfoFiled/InfoFiled'
import { Item } from '@/types'
import { ClockIcon, RefreshIcon } from '../Icons/Icons'
import { formatDate, countCoincidences } from '@/utils'
import { StatusField } from '../StatusField/StatusField'
import { Map } from '../Map/Map'
import { useAppStore } from '@/store/app'

const MAIN_TABLE_HEADERS = [
  'Proyecto',
  'Plan',
  'Estado',
  'Equipo',
  'Items por vender',
]

export function Contianer() {
  const projects = useProjectsStore((store) => store.projectsToShow)
  const currentProject = useProjectsStore((store) => store.currentProject)
  const selectProject = useProjectsStore((store) => store.selectProject)
  const showMap = useAppStore(store => store.showMap)

  return (
    <section className={styles.Container}>
      <div className={styles.dataTable}>
        { showMap && <Map /> }
        <GenericTable headers={MAIN_TABLE_HEADERS}>
          {projects.map((project) => {
            const {
              _id,
              title,
              lastVisit,
              lastUpdated,
              img,
              projectPlanData: { plan },
              status,
              users,
              incidents,
            } = project
            return (
              <tr
                key={_id}
                onClick={() => selectProject(_id)}
              >
                <td className={_id === currentProject?._id ? styles.projectSelected : ''}>
                  <InfoFiled title={title} image={img}>
                    <ClockIcon /> {formatDate(lastVisit)}
                    <RefreshIcon /> {formatDate(lastUpdated)}
                  </InfoFiled>
                </td>
                <td><StatusField type={plan} /></td>
                <td><StatusField type={status} /></td>
                <td>Users: {users.length}</td>
                <td className={styles.flexContent}>
                  <InfoFiled
                    title={countCoincidences(incidents, Item.Incidents)}
                  >
                    Incidencias
                  </InfoFiled>
                  <InfoFiled title={countCoincidences(incidents, Item.RFI)}>
                    RFI
                  </InfoFiled>
                  <InfoFiled title={countCoincidences(incidents, Item.Task)}>
                    Tareas
                  </InfoFiled>
                </td>
              </tr>
            )
          })}
        </GenericTable>
        <Pagination />
      </div>
    </section>
  )
}
