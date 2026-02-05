import { SVGProps } from 'react'

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        // fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      >
        <path d='M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8' />
        <path d='M14.5 9.25a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-7.454 9.455c.756-5.527 9.152-5.527 9.908 0' />
      </g>
    </svg>
  )
}

export function DownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
        d='M36 18L24 30L12 18'
      />
    </svg>
  )
}

export function Next(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <path fill='currentColor' d='M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z' />
    </svg>
  )
}

export function Back(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <path fill='currentColor' d='m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z' />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <circle cx='12' cy='12' r='9' />
        <path d='M11 8v5h5' />
      </g>
    </svg>
  )
}

export function RefreshIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <g fill='currentColor'>
        <path d='M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95Z' />
        <path d='M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664l-3 2Z' />
        <path d='M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11l2 3Zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95Z' />
        <path d='M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664l3-2Z' />
        <path d='M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11l-2-3Z' />
      </g>
    </svg>
  )
}
