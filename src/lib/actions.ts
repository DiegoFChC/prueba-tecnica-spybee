'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (email === 'marco@gmail.com' && password === 'admin123') {
    const cookieStore = await cookies()

    cookieStore.set('token', 'fake-jwt-token', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60, // 1 hora
    })

    return {
      user: {
        name: 'Marco',
        role: 'Administrador',
        email
      }
    }
  }

  return { error: 'Credenciales inválidas' }
}

export async function logoutAction() {
  const cookieStore = await cookies()

  cookieStore.delete('token')

  redirect('/')
}