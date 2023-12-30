import React, { type FC } from 'react'

interface AwardsProps extends React.SVGProps<SVGSVGElement> {

}

export const Awards: FC <AwardsProps> = (props) => {
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
      <path d="M16 30c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z" />
      <path d="M18 16h-4a1 1 0 01-.8-.4l-3-4a1 1 0 01-.2-.6V7a1 1 0 012 0v3.667L14.5 14h3l2.5-3.333V4h-9a1 1 0 010-2h10a1 1 0 011 1v8a1 1 0 01-.2.6l-3 4a1 1 0 01-.8.4z" />
    </svg>
  )
}
