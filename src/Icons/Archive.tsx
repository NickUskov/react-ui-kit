import React, { type FC } from 'react'

interface ArchiveProps extends React.SVGProps<SVGSVGElement> {

}

export const Archive: FC <ArchiveProps> = (props) => {
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
      <path d="M29 3H3a1 1 0 00-1 1v4a1 1 0 001 1h22v18H7V12a1 1 0 00-2 0v16a1 1 0 001 1h20a1 1 0 001-1V9h2a1 1 0 001-1V4a1 1 0 00-1-1zm-1 4H4V5h24v2z" />
      <path d="M22 17a1 1 0 001-1v-4a1 1 0 00-1-1H10a1 1 0 00-1 1v4a1 1 0 001 1h12zm-11-4h10v2H11v-2z" />
    </svg>
  )
}
