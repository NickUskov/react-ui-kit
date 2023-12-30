import React, { type FC } from 'react'

interface UploadProps extends React.SVGProps<SVGSVGElement> {

}

export const Upload: FC <UploadProps> = (props) => {
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
      <path d="M16.707 6.293A1 1 0 0015 7v22a1 1 0 002 0V9.414l7.293 7.293a.999.999 0 101.414-1.414l-9-9zM12 10a.997.997 0 00-.707.293l-5 5a.999.999 0 101.414 1.413l5-5A.999.999 0 0012 10z" />
      <path d="M3 11a1 1 0 001-1V4h24v6a1 1 0 102 0V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1z" />
    </svg>
  )
}
