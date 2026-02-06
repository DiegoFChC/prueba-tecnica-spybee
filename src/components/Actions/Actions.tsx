'use client'

import { useAppStore } from '@/store/app'
import { ActionButton } from '../ActionButton/ActionButton'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import { ButtonIconList } from '../ButtonIconList/ButtonIconList'
import {
  GgPinIcon,
  ListDownIcon,
  PlusIcon,
  SquaresIcon,
  TablerListIcon,
} from '../Icons/Icons'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './Actions.module.css'
import { FloatingList } from '../FloatingList/FloatingList'

export function Actions() {
  const openMap = useAppStore(store => store.openMap)
  const closeMap = useAppStore(store => store.closeMap)
  const showFilters = useAppStore(store => store.showFilters)
  const setShowFilters = useAppStore(store => store.setShowFilters)

  return (
    <div className={styles.Actions}>
      <ButtonIcon fill handleClick={setShowFilters}>
        <ListDownIcon />
        { showFilters && <FloatingList /> }
      </ButtonIcon>
      <ButtonIconList>
        <ButtonIcon fill handleClick={closeMap}>
          <TablerListIcon />
        </ButtonIcon>
        <ButtonIcon fill handleClick={() => console.log('in progress')}>
          <SquaresIcon />
        </ButtonIcon>
        <ButtonIcon fill handleClick={openMap}>
          <GgPinIcon />
        </ButtonIcon>
      </ButtonIconList>
      <SearchBar />
      <ActionButton handleClick={() => console.log('in progress')}>
        <PlusIcon  width={18} height={18} /> Crear proyecto
      </ActionButton>
    </div>
  )
}
