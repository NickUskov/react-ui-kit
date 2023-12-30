import React, { type FC } from 'react'

interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {

}

export const ArrowLeft: FC <ArrowLeftProps> = (props) => {
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
      <path d="M29.018 17H2.982a.984.984 0 01-.908-.617 1.013 1.013 0 01.213-1.09l11.789-12c.384-.391 1.005-.391 1.389 0s.384 1.023 0 1.414L5.354 15h23.663c.544 0 .983.448.983 1s-.439 1-.982 1zM14.772 29a.974.974 0 01-.695-.293l-7.86-8c-.384-.391-.384-1.023 0-1.414s1.005-.391 1.389 0l7.86 8a1.012 1.012 0 010 1.414.97.97 0 01-.694.293z" />
    </svg>
  )
}
