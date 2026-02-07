'use client'

import { useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './Map.module.css'
import { useProjectsStore } from '@/store'
import { useMapbox } from '@/hooks/useMapbox'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY
const ZOOM = 12
const SPEED = 1.2

export function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const currentProject = useProjectsStore((store) => store.currentProject)
  const map = useMapbox({ mapContainerRef })

  return (
    <div className={styles.mapContainer} ref={mapContainerRef}>
      <div className={styles.sidebar}>
        Longitude: {currentProject.position.lng.toFixed(4)} | Latitude:{' '}
        {currentProject.position.lat.toFixed(4)} | Zoom: {ZOOM.toFixed(2)}
      </div>
    </div>
  )
}
