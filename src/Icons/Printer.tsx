import React, { type FC } from 'react'

interface PrinterProps extends React.SVGProps<SVGSVGElement> {

}

export const Printer: FC <PrinterProps> = (props) => {
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
      <path d="M29 13h-6V3a1 1 0 00-1-1H10a1 1 0 00-1 1v10H3a1 1 0 000 2h6v2a1 1 0 001 1h12a1 1 0 001-1v-2h5v10h-5v-1a1 1 0 00-1-1H10a1 1 0 00-1 1v1H4v-7a1 1 0 10-2 0v8a1 1 0 001 1h6v2a1 1 0 001 1h12a1 1 0 001-1v-2h6a1 1 0 001-1V14a1 1 0 00-1-1zm-8 3H11V4h10v12zm0 12H11v-3h10v3z" />
    </svg>
  )
}
