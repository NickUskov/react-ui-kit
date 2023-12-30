import React, { type FC } from 'react'

interface CloseProps extends React.SVGProps<SVGSVGElement> {

}

export const Close: FC <CloseProps> = (props) => {
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
      <path d="M11.312 12.766a.99.99 0 00.704.292.996.996 0 00.704-1.701L4.755 3.384a.995.995 0 10-1.408 1.409l7.965 7.973zM17.407 16.048L28.652 4.793a.996.996 0 000-1.409c-.389-.389-1.019-.561-1.408-.171L15.296 15H15v.345L3.2 27.303c-.389.389-.315 1.02.073 1.409.194.195.486.292.741.292s.528-.097.722-.292L15.99 17.458l11.249 11.255a.996.996 0 001.411 0 .996.996 0 00.001-1.409L17.407 16.048z" />
    </svg>
  )
}
