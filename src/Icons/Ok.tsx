import React, { type FC } from 'react'

interface OkProps extends React.SVGProps<SVGSVGElement> {

}

export const Ok: FC <OkProps> = (props) => {
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
      <path d="M9 21a.997.997 0 01-.707-.293l-5-5a.999.999 0 111.414-1.414l5 5A.999.999 0 019 21zM13 25a.999.999 0 01-.707-1.707l16-16a.999.999 0 111.414 1.414l-16 16A.997.997 0 0113 25z" />
    </svg>
  )
}
