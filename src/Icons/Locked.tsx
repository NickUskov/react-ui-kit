import React, { type MouseEventHandler, forwardRef } from 'react'

interface LockedProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Locked = forwardRef<Ref, LockedProps>(function Locked (props, ref) {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <g
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M649 137.999L675 137.999 675 155.999 661 155.999" />
        <path d="M653 155.999L649 155.999 649 141.999" />
        <path d="M661 156L653 162 653 156" />
      </g>
      <path d="M27 14h-3v-2.667c0-4.411-3.589-8-8-8s-8 3.589-8 8V14H5a1 1 0 000 2h21v12H6v-9a1 1 0 10-2 0v10a1 1 0 001 1h22a1 1 0 001-1V15a1 1 0 00-1-1zm-17-2.667c0-3.309 2.691-6 6-6s6 2.691 6 6V14H10v-2.667z" />
      <path d="M20 22c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z" />
    </svg>
  )
})

export default Locked
