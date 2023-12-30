import React, { type FC } from 'react'

interface CopyProps extends React.SVGProps<SVGSVGElement> {

}

export const Copy: FC <CopyProps> = (props) => {
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
      <path d="M25 30H3a1 1 0 01-1-1V11a1 1 0 012 0v17h20V8H3a1 1 0 010-2h22a1 1 0 011 1v22a1 1 0 01-1 1z" />
      <path d="M29 22a1 1 0 01-1-1V4H11a1 1 0 010-2h18a1 1 0 011 1v18a1 1 0 01-1 1z" />
    </svg>
  )
}
