'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { SearchIcon } from '../Icons/Icons'
import styles from './SearchBar.module.css'
import { useProjectsStore } from '@/store'

export function SearchBar() {
  const [search, setSearch] = useState('')
  const updateFilteredProjects = useProjectsStore(
    (store) => store.updateFilteredProjects,
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataForm = new FormData(e.currentTarget)
    const text = dataForm.get('search') as string
    updateFilteredProjects(text)
  }

  useEffect(() => {
    if (search === '') updateFilteredProjects(search)
    const searchData = setTimeout(() => {
      updateFilteredProjects(search);
    }, 1000)

    return () => {
      clearTimeout(searchData);
    }
  }, [search, updateFilteredProjects])

  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='Buscar'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>
        <SearchIcon width={18} height={18} color='#777777' />
      </button>
    </form>
  )
}
