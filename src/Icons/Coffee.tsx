import React, { type FC } from 'react'

interface CoffeeProps extends React.SVGProps<SVGSVGElement> {

}

export const Coffee: FC <CoffeeProps> = (props) => {
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
      <path d="M25 13h-1v-3a1 1 0 00-1-1H4a1 1 0 000 2h18v12c0 2.757-2.243 5-5 5h-7c-2.757 0-5-2.243-5-5v-9a1 1 0 00-2 0v9c0 3.859 3.14 7 7 7h7c3.859 0 7-3.141 7-7v-1h1c2.206 0 4-1.794 4-4v-1c0-2.206-1.794-4-4-4zm2 5c0 1.103-.897 2-2 2h-1v-5h1c1.103 0 2 .897 2 2v1zM9 8a1 1 0 001-1V5a1 1 0 00-2 0v2a1 1 0 001 1zM13 8a1 1 0 001-1V3a1 1 0 00-2 0v4a1 1 0 001 1zM17 8a1 1 0 001-1V5a1 1 0 10-2 0v2a1 1 0 001 1z" />
    </svg>
  )
}
