'use client'

import Image from 'next/image'
import style from './Header.module.css'
import { UserIcon, DownIcon, LogoutIcon } from '../Icons/Icons'
import { useUserStore } from '@/store'
import { logoutAction } from '@/lib/actions'

export function Header() {
  const user = useUserStore((store) => store.user)
  const logout = useUserStore((store) => store.logout)

  const handleLogout = async () => {
    logout()
    await logoutAction()
  }

  return (
    <header className={style.Header}>
      <Image
        src='/logo.webp'
        alt='Logo Spybee'
        width={80}
        height={35}
        loading='eager'
      />
      <div className={style.profile}>
        <UserIcon
          width='2.8rem'
          height='2.8rem'
          fill='#FEC50F'
          color='#3D3D3D'
        />
        <div className={style.dataUser}>
          <p>{user?.name}</p>
          <span>{user?.role}</span>
        </div>
        <DownIcon width='1.4rem' height='1.4rem' />
        <LogoutIcon
          width='1.4rem'
          height='1.4rem'
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </header>
  )
}
