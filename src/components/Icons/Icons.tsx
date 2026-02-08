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

export function TablerListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01'
      />
    </svg>
  )
}

export function SquaresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
      />
    </svg>
  )
}

export function GgPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor' fillRule='evenodd' clipRule='evenodd'>
        <path d='M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0' />
        <path d='M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243' />
      </g>
    </svg>
  )
}

export function ListDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72 1.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0'
      />
    </svg>
  )
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 12h14m-7-7v14'
      />
    </svg>
  )
}

export function StatisticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 26 26'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12.906-.031a1 1 0 0 0-.125.031A1 1 0 0 0 12 1v1H3a3 3 0 0 0-3 3v13c0 1.656 1.344 3 3 3h9v.375l-5.438 2.719a1.006 1.006 0 0 0 .875 1.812L12 23.625V24a1 1 0 1 0 2 0v-.375l4.563 2.281a1.006 1.006 0 0 0 .875-1.812L14 21.375V21h9c1.656 0 3-1.344 3-3V5a3 3 0 0 0-3-3h-9V1a1 1 0 0 0-1.094-1.031M2 5h22v13H2zm18.875 1a1 1 0 0 0-.594.281L17 9.563L14.719 7.28a1 1 0 0 0-1.594.219l-2.969 5.188l-1.219-3.063a1 1 0 0 0-1.656-.344l-3 3a1.016 1.016 0 1 0 1.439 1.44l1.906-1.906l1.438 3.562a1 1 0 0 0 1.812.125l3.344-5.844l2.062 2.063a1 1 0 0 0 1.438 0l4-4A1 1 0 0 0 20.875 6'
      />
    </svg>
  )
}

export function RewindTimeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <g fill='currentColor' fillRule='evenodd' clipRule='evenodd'>
        <path d='M5.955 5.805a5.94 5.94 0 0 0-1.736 4.87a1 1 0 0 1-1.99.21a7.94 7.94 0 0 1 2.322-6.504c3.136-3.092 8.19-3.04 11.289.102s3.081 8.198-.054 11.29a7.92 7.92 0 0 1-5.44 2.286a8 8 0 0 1-2.283-.29a1 1 0 1 1 .533-1.927a6 6 0 0 0 1.714.217a5.92 5.92 0 0 0 4.071-1.71c2.343-2.31 2.365-6.099.035-8.461s-6.118-2.393-8.46-.083' />
        <path d='M3.967 11.695a1 1 0 0 1-1.412.082l-1.72-1.53a1 1 0 0 1 1.33-1.494l1.72 1.53a1 1 0 0 1 .082 1.412' />
        <path d='M2.42 11.6a1 1 0 0 0 1.4.2l2-1.5a1 1 0 0 0-1.2-1.6l-2 1.5a1 1 0 0 0-.2 1.4M10 6a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1' />
        <path d='M14 10.5a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1' />
      </g>
    </svg>
  )
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 15 15'
      {...props}
    >
      <path
        fill='currentColor'
        d='M10.5 1a.5.5 0 0 1 .5.5V2h1.5A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2H4v-.5a.5.5 0 0 1 1 0V2h5v-.5a.5.5 0 0 1 .5-.5M2 12.5l.01.1c.04.196.194.35.39.39l.1.01h10l.1-.01a.5.5 0 0 0 .39-.39l.01-.1V6H2zM3.5 11a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-6-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-4-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M2.4 3.01a.5.5 0 0 0-.4.49V5h11V3.5a.5.5 0 0 0-.4-.49L12.5 3H11v.5a.5.5 0 0 1-1 0V3H5v.5a.5.5 0 0 1-1 0V3H2.5z'
      />
    </svg>
  )
}

export function LogoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M20.968 18.448a2.577 2.577 0 0 1-2.73 2.5c-2.153.012-4.306 0-6.459 0a.5.5 0 0 1 0-1c2.2 0 4.4.032 6.6 0c1.107-.016 1.589-.848 1.589-1.838V5.647A1.55 1.55 0 0 0 19 4.175a3 3 0 0 0-1.061-.095h-6.16a.5.5 0 0 1 0-1c2.224 0 4.465-.085 6.687 0a2.567 2.567 0 0 1 2.5 2.67Z'
      />
      <path
        fill='currentColor'
        d='M3.176 11.663a.46.46 0 0 0-.138.311q.002.021-.006.043c-.008.022 0 .027.006.041a.46.46 0 0 0 .138.312l3.669 3.669a.5.5 0 0 0 .707-.707l-2.815-2.816h10.742a.5.5 0 0 0 0-1H4.737L7.552 8.7a.5.5 0 0 0-.707-.707Z'
      />
    </svg>
  )
}
