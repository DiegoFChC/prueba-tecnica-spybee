'use client'

import { SearchParamsType } from '@/types'
import { useSearchParams } from 'next/navigation'

export function useQueryParams(): SearchParamsType {
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || '1'
  const limit = searchParams.get('limit') || '10'

  return {
    page,
    limit,
  }
}
