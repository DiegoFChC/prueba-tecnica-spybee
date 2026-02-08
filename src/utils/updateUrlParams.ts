export function updateUrlParam(param: string, value: string) {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href)
    url.searchParams.set(param, value.toString())

    window.history.replaceState(null, '', url.toString())
  }
}
