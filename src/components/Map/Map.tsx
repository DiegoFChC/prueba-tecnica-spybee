'use client'

import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'
import { useProjectsStore } from '@/store'
import { useAppStore } from '@/store/app'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
const ZOOM = 12
const SPEED = 1.2

export function Map() {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({})

  const currentProject = useProjectsStore((store) => store.currentProject)
  const allProjects = useProjectsStore((store) => store.allProjects)
  const selectProject = useProjectsStore((store) => store.selectProject)
  const showDetails = useAppStore((store) => store.showDetails)

  // Carga incial
  useEffect(() => {
    if (!mapContainerRef.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: currentProject ? [currentProject.position.lng, currentProject.position.lat] : [0, 0],
      zoom: ZOOM,
    })

    return () => {
      mapRef.current?.remove()
    }
  }, [])

  // Dibujado de marcadores
  useEffect(() => {
    if (!mapRef.current || !allProjects) return

    Object.values(markersRef.current).forEach(marker => marker.remove())
    markersRef.current = {}

    allProjects.forEach((project) => {
      const el = document.createElement('div')
      el.className = styles.customMarker
      
      const marker = new mapboxgl.Marker({ color: '#F57601' })
        .setLngLat([project.position.lng, project.position.lat])
        .addTo(mapRef.current!)

      marker.getElement().addEventListener('click', () => {
        selectProject(project._id)
      })

      markersRef.current[project._id] = marker
    })
  }, [allProjects])

  // Navegación
  useEffect(() => {
    if (!mapRef.current || !currentProject) return

      const { lat, lng } = currentProject.position

      mapRef.current.flyTo({
        center: [lng, lat],
        essential: true,
        zoom: ZOOM,
        speed: SPEED,
      })

      const popup = new mapboxgl.Popup({
        offset: 40,
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat([lng, lat])
        .setText(currentProject.clientData.title)
        .addTo(mapRef.current)

      mapRef.current.resize()
  }, [currentProject.position.lat, currentProject.position.lng])

  // Cambia el tamaño si se muestra o no los detalles
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.resize()
    }
  }, [showDetails])

  return (
    <div className={styles.mapContainer} ref={mapContainerRef}>
      <div className={styles.sidebar}>
        Longitude: {currentProject.position.lng.toFixed(4)} | Latitude:{' '}
        {currentProject.position.lat.toFixed(4)} | Zoom: {ZOOM.toFixed(2)}
      </div>
    </div>
  )
}
