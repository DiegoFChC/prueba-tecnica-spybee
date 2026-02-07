'use client'

import { Actions, DataInitializer, Details } from '@/components'
import { Header, Contianer } from '@/components'
import { SectionTitle } from '@/components/SectionTittle/SectionTitle'
import styles from './page.module.css'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useProjects } from '@/hooks/useProjects'

export default function Dashboard() {
  const { page, limit } = useQueryParams()
  const { loading, error } = useProjects({ page, limit })

  if (error) return <p>Ha ocurrido un error al cargar los datos</p>

  return (
    <main className={styles.Dashboard}>
      <DataInitializer params={{ page, limit }} />
      <Header />
      <article className={styles.mainPage}>
        {!loading && (
          <>
            <SectionTitle title='Mis proyectos'>
              <Actions />
            </SectionTitle>
            <div className={styles.mainContainer}>
              <Contianer />
              <Details />
            </div>
          </>
        )}
      </article>
    </main>
  )
}
