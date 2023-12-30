import React, { type FC } from 'react'

interface HumanProps extends React.SVGProps<SVGSVGElement> {

}

export const Human: FC <HumanProps> = (props) => {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M21.947 16.332A7.958 7.958 0 0024 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.943 7.943 0 004.233-1.224A11.978 11.978 0 0127.959 28H4.042a12.006 12.006 0 014.078-8.051 1 1 0 10-1.314-1.508A14 14 0 002 29a1 1 0 001 1h26a1 1 0 001-1c0-5.486-3.18-10.385-8.053-12.668zM10 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
    </svg>
  )
}
