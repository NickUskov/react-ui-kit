import React, { type FC } from 'react'

interface CloudProps extends React.SVGProps<SVGSVGElement> {

}

export const Cloud: FC <CloudProps> = (props) => {
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
      <path d="M23 25H11c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.037 9 9a1 1 0 11-2 0c0-3.859-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7h12c2.757 0 5-2.243 5-5s-2.243-5-5-5a1 1 0 110-2c3.859 0 7 3.14 7 7 0 3.859-3.141 7-7 7z" />
    </svg>
  )
}
