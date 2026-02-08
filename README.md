# 🚀 Prueba técnica FrontEnd (Spybee)
Este proyecto es una solución a una prueba técnica para desarrollador FrontEnd.

[Demo](https://prueba-tecnica-spybee-neon.vercel.app/)

## 🛠️ Tecnologías utilizadas
* **Framework**: Next.js
* **Estado Global**: Zustand (con persistencia)
* **Estilos**: CSS Modules
* **Mapas**: Mapbox-GL
* **Autenticación**: Mock Auth con Middleware, Actions y Cookies

**NOTA IMPORTANTE**: La autenticación es realizada bajo un **mock**. A continuación puede encontrar el usuario y contraseña válidos:

```bash
email: marco@gmail.com
password: admin123
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Instalación y Uso
1. Clona el repositorio.
2. Instala las dependencias:

```bash
npm install
```

1. Configura tu Token de Mapbox en el archivo .env:

```bash
NEXT_PUBLIC_MAPBOX_KEY=tu_token_aqui
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📂 Estructura del Proyecto

```bash
/
├── 📁 app/                # Rutas
│
├── 📁 components/         # Componentes
│
├── 📁 hooks/              # Custom Hooks
│
├── 📁 lib/                # Actions
│
├── 📁 mocks/              # Mock data de proyectos
│
├── 📁 services/           # Lógica de obtención y manipulación de datos
│   ├── 📄 projects.ts    # 
│   └── 📄 projects.ts     # Simulación de servicios para obtener proyectos
│
├── 📁 store/              # Estado global con Zustand
│   ├── 📄 app.ts          # Datos de la app
│   ├── 📄 projects.ts     # Datos de los proyectos
│   └── 📄 useUserStore.ts # Datos del perfil de usuario
│
├── 📁 types/              # Definiciones de TypeScript e Interfaces
│
├── 📁 utils/              # Funciones auxiliares y constantes
│
└── 📄 proxy.ts             # Guardian de rutas (Antes middleware
```

## Checklist de lo realizado en este proyecto

* Listado de proyectos
  [x] Nombre
  [x] Plan
  [x] Estado
  [x] Equipo
  [x] Items por vender (incidentes, RFI, tareas)
  [x] Paginación (10)
* Búsqueda
  [x] Búsqueda en base a título
* Filtros
  [x] Orden alfabético
  [x] Cantidad de incidencias
  [x] Cantidad de RFI
  [x] Cantidad de tareas
* Mapbox-GL
  [x] Mostrar mapa con marcadores de las ubicaciones de los proyectos.
  [x] Mostrar según coordenadas
  [x] Navegar a ubicación al dar click sobre proyecto
* Autorización
  [x] Login
  [x] Verificación de token
  [x] Logout