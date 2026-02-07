import {
  IncidentStatus,
  type Incident,
  type Item,
  type Plan,
  type ProjectStatus,
} from '@/types'

export function formatDate(date: Date) {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(date: Date) {
  if (typeof date === 'string') {
    date = new Date(date)
  }

  const dateString = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const timeString = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return {
    date: dateString,
    time: timeString
  }
}

export function countCoincidences(list: Incident[], value: Item) {
  return list.filter((incident) => incident.item === value).length
}

export function countCoincidencesState(list: Incident[], value: Item) {
  const total = countCoincidences(list, value)
  const noClose = list.filter(
    (incident) =>
      incident.item === value && incident.status === IncidentStatus.Active,
  ).length

  return {
    total,
    noClose,
  }
}

export type Style = {
  bg: `#${string}`
  color: `#${string}`
  text?: string
}

const styleList: Record<Plan | ProjectStatus | 'general', Style> = {
  general: {
    bg: '#e7e7e7',
    color: '#383838',
  },
  big: {
    bg: '#7E7E7E',
    color: '#FFFFFF',
    text: 'Grande',
  },
  small: {
    bg: '#C35E00',
    color: '#FFFFFF',
    text: 'Pequeño',
  },
  active: {
    bg: '#07c50038',
    color: '#003809',
    text: 'Activo',
  },
  inactive: {
    bg: '#ff00004f',
    color: '#520000',
    text: 'Inactivo',
  },
  pending_payment: {
    bg: '#ffd90071',
    color: '#534700',
    text: 'Pendiente de pago',
  },
  suspended: {
    bg: '#00aeff38',
    color: '#001644',
    text: 'Suspendido',
  },
}

export function defineStatusType(
  type: Plan | ProjectStatus | 'general',
): Style {
  return styleList[type]
}
