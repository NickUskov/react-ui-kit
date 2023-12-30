import React, { type FC } from 'react'

interface DownloadProps extends React.SVGProps<SVGSVGElement> {

}

export const Download: FC <DownloadProps> = (props) => {
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
      <path d="M15.293 25.707A1 1 0 0017 25V3a1 1 0 00-2 0v19.586l-7.293-7.293a.999.999 0 10-1.414 1.414l9 9zM20 22a.997.997 0 00.707-.293l5-5a.999.999 0 10-1.414-1.413l-5 5A.999.999 0 0020 22z" />
      <path d="M29 21a1 1 0 00-1 1v6H4v-6a1 1 0 10-2 0v7a1 1 0 001 1h26a1 1 0 001-1v-7a1 1 0 00-1-1z" />
    </svg>
  )
}
