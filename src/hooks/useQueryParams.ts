'use client'

import { SearchParamsType } from '@/types'
import { useSearchParams, redirect } from 'next/navigation'

export function useQueryParams(): SearchParamsType {
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || '1'
  const limit = searchParams.get('limit') || '10'
  const reload = !searchParams.get('page') || !searchParams.get('limit')
  
  if (reload) {
    redirect(`/dashboard?page=${page}&limit=${limit}`)
  }

  return {
    page,
    limit,
  }
}
