import { Actions, DataInitializer, Details } from '@/components'
import { Header, Container } from '@/components'
import { SectionTitle } from '@/components/SectionTittle/SectionTitle'
import styles from './page.module.css'
import { SearchParamsType } from '@/types'

type DashboardProps = {
  searchParams: Promise<SearchParamsType>
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const { page, limit } = await searchParams

  return (
    <main className={styles.Dashboard}>
      <DataInitializer params={{ page, limit }} />
      <Header />
      <article className={styles.mainPage}>
        <SectionTitle title='Mis proyectos'>
          <Actions />
        </SectionTitle>
        <div className={styles.mainContainer}>
          <Container />
          <Details />
        </div>
      </article>
    </main>
  )
}
