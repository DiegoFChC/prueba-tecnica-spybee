'use client'

import { FormEvent } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { loginAction } from '@/lib/actions'
import { useState } from 'react'
import { useUserStore } from '@/store'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [error, setError] = useState<string | null>(null)
  const setUser = useUserStore((store) => store.setUser)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const response = await loginAction(formData)

    if (response?.error) {
      setError(response.error)
    } else if (response?.user) {
      setUser(response.user)
      
      router.push('/dashboard?page=1&limit=10')
      router.refresh()
    }
  }

  return (
    <section className={styles.Login}>
      <form onSubmit={handleSubmit}>
        <Image
          src={'/logo_b.webp'}
          alt='Logo de Spybee'
          width={80}
          height={40}
        />
        <h1>Inicio de Sesión</h1>
        <div className={styles.inputForm}>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='correo@correo.com'
            required
          />
        </div>
        <div className={styles.inputForm}>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' name='password' id='password' required />
        </div>

        {error && <span className={styles.errorMessage}>{error}</span>}

        <button type='submit'>Ingresar</button>
      </form>
    </section>
  )
}
