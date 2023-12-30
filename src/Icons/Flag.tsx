import React, { type FC } from 'react'

interface FlagProps extends React.SVGProps<SVGSVGElement> {

}

export const Flag: FC <FlagProps> = (props) => {
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
      <path d="M23.317 10l5.441-6.349a.997.997 0 00.149-1.069A.997.997 0 0028 2H4a1 1 0 000 2h21.826l-4.585 5.349a1 1 0 000 1.302L25.826 16H7V7a1 1 0 00-2 0v21H4a1 1 0 100 2h4a1 1 0 100-2H7V18h21a1 1 0 00.759-1.651L23.317 10z" />
    </svg>
  )
}
