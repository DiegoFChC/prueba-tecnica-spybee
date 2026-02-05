import { DataInitializer } from '@/components'
import { Header, Contianer } from '@/components'
import { SectionTitle } from '@/components/SectionTittle/SectionTitle'
import { getProjects } from '@/services'
import styles from './page.module.css'

export default async function Dashboard() {
  const { projects, total } = await getProjects()

  return (
    <main className={styles.Dashboard}>
      <DataInitializer data={projects} />
      <Header />
      <article className={styles.mainPage}>
        <SectionTitle
          title='Mis proyectos'
          info={`${total} Proyectos`}
        />
        <div className={styles.mainContainer}>
          <Contianer />
          {/* <span>Details</span> */}
        </div>
      </article>
    </main>
  )
}
