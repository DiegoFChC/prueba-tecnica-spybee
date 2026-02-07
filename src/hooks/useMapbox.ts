import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { Project } from '@/types'

interface UseMapboxProps {
  container: React.RefObject<HTMLDivElement | null>
  allProjects: Project[]
  currentProject: Project
  onSelectProject: (id: string) => void
  showDetails: boolean
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
const ZOOM = 12
const SPEED = 1.2

export function useMapbox({
  container,
  allProjects,
  currentProject,
  onSelectProject,
  showDetails,
}: UseMapboxProps) {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<{ [key: string]: mapboxgl.Marker }>({})

  // Carga incial
  useEffect(() => {
    if (!container.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
    mapRef.current = new mapboxgl.Map({
      container: container.current,
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
      
      const marker = new mapboxgl.Marker({ color: '#F57601' })
        .setLngLat([project.position.lng, project.position.lat])
        .addTo(mapRef.current!)

      marker.getElement().addEventListener('click', () => {
        onSelectProject(project._id)
      })

      markersRef.current[project._id] = marker
    })
  }, [allProjects, onSelectProject])

  // Navegación
  useEffect(() => {
    if (!mapRef.current || !currentProject) return

    const { lat, lng } = currentProject.position
    mapRef.current.flyTo({
      center: [lng, lat],
      zoom: ZOOM,
      speed: SPEED,
      essential: true,
    })

    new mapboxgl.Popup({ offset: 40, closeButton: false })
      .setLngLat([lng, lat])
      .setText(currentProject.clientData.title)
      .addTo(mapRef.current)
  }, [currentProject?.position.lat, currentProject?.position.lng])

  // Resize
  useEffect(() => {
    mapRef.current?.resize()
  }, [showDetails])

  return mapRef
}
