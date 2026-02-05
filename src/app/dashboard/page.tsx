import { DataInitializer } from '@/components'
import { Header } from '@/components/Header/Header'
import { SectionTitle } from '@/components/SectionTittle/SectionTitle'
import { getProjects } from '@/services'
import type { SearchParamsType } from '@/types/navigation'
import { updateUrlParams } from '@/utils/updateUrlParams'
import { redirect } from 'next/navigation'

type SearchParamsPromiseType = {
  searchParams: Promise<SearchParamsType>
}

export default async function Dashboard({
  searchParams,
}: SearchParamsPromiseType) {
  const pageParams = await searchParams
  const { params, reload } = updateUrlParams(pageParams)

  if (reload)
    redirect(
      `/dashboard?page=${params.page}&limit=${params.limit}&q=${params.q}`,
    )

  const { projects, total } = await getProjects(params)

  return (
    <main>
      <DataInitializer data={projects} />
      <Header />
      <article>
        <SectionTitle
          title='Mis proyectos'
          info={`${total} Proyectos`}
        />
      </article>
    </main>
  )
}
