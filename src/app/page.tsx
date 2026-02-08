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
  const [loading, setLoading] = useState(false)
  const setUser = useUserStore((store) => store.setUser)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await loginAction(formData)

      if (response?.error) {
        setError(response.error)
        setLoading(false)
      } else if (response?.user) {
        setUser(response.user)

        router.push('/dashboard?page=1&limit=10')
        router.refresh()
      }
    } catch {
      setError("Ocurrió un error inesperado")
      setLoading(false)
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

        <button type='submit' disabled={loading}>
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </section>
  )
}
