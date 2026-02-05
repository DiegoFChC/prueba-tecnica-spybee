'use client'

import { useSearchParams } from 'next/navigation'

export function useQueryParams() {
  const params = useSearchParams()
  console.log(params)

  return null
}