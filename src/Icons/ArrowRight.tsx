import React, { type FC } from 'react'

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {

}

export const ArrowRight: FC <ArrowRightProps> = (props) => {
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
      <path d="M2.982 17h26.035a.984.984 0 00.908-.617 1.013 1.013 0 00-.213-1.09l-11.789-12c-.384-.391-1.005-.391-1.389 0s-.384 1.023 0 1.414L26.646 15H2.982C2.439 15 2 15.448 2 16s.439 1 .982 1zM17.228 29a.974.974 0 00.695-.293l7.86-8c.384-.391.384-1.023 0-1.414s-1.005-.391-1.389 0l-7.86 8a1.012 1.012 0 000 1.414.97.97 0 00.694.293z" />
    </svg>
  )
}
