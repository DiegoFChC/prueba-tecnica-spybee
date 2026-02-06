'use client'

import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'
import { useProjectsStore } from '@/store'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
const ZOOM = 12
const SPEED = 1.2

export function Map() {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markerRef = useRef<mapboxgl.Marker | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  const currentProject = useProjectsStore((store) => store.currentProject)

  useEffect(() => {
    if (!mapContainerRef.current) return

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [currentProject.position.lng, currentProject.position.lat],
      zoom: ZOOM,
    })

    markerRef.current = new mapboxgl.Marker({ color: '#F57601' }) // Puedes personalizar el color
      .setLngLat([
        currentProject?.position.lng || 0,
        currentProject?.position.lat || 0,
      ])
      .addTo(mapRef.current)

    return () => {
      mapRef.current?.remove()
    }
  }, [])

  useEffect(() => {
    if (mapRef.current && markerRef.current && currentProject.position) {
      const { lat, lng } = currentProject.position

      markerRef.current.setLngLat([lng, lat])

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
    }
  }, [currentProject.position.lat, currentProject.position.lng])

  return (
    <div className={styles.mapContainer} ref={mapContainerRef}>
      <div className={styles.sidebar}>
        Longitude: {currentProject.position.lng.toFixed(4)} | Latitude:{' '}
        {currentProject.position.lat.toFixed(4)} | Zoom: {ZOOM.toFixed(2)}
      </div>
    </div>
  )
}
