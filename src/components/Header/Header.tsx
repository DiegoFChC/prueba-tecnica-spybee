import Image from 'next/image'
import style from './Header.module.css'
import { UserIcon, DownIcon } from '../Icons/Icons'

export function Header () {
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
        <UserIcon width='2.8rem' height='2.8rem' fill='#FEC50F' color='#3D3D3D' />
        <div className={style.dataUser}>
          <p>Diego</p>
          <span>Administrador</span>
        </div>
        <DownIcon width='1.4rem' height='1.4rem' />
      </div>
    </header>
  )
}