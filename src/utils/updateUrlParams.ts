import type { SearchParamsType } from '@/types'

type UpdateUrlParamstype = {
  params: SearchParamsType
  reload: boolean
}

const defaults: SearchParamsType = {
  page: '1',
  limit: '10',
  q: ''
}

export function updateUrlParams(searchParams: SearchParamsType): UpdateUrlParamstype {
  const params = {...defaults, ...searchParams }

  const reload = !searchParams.page || !searchParams.limit

  return {
    params,
    reload
  }
}
