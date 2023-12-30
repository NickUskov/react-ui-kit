import React, { type FC } from 'react'

interface DeleteProps extends React.SVGProps<SVGSVGElement> {

}

export const Delete: FC <DeleteProps> = (props) => {
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
      <path d="M16 30c-3.74 0-7.255-1.456-9.899-4.101A13.956 13.956 0 013.547 9.595a1 1 0 011.779.915 11.963 11.963 0 002.189 13.975A11.917 11.917 0 0016 28c3.205 0 6.219-1.248 8.485-3.515S28 19.205 28 16c0-3.206-1.248-6.219-3.515-8.485S19.206 4 16 4a11.921 11.921 0 00-8.485 3.515.999.999 0 11-1.414-1.414A13.907 13.907 0 0116 2c3.74 0 7.256 1.457 9.899 4.101A13.903 13.903 0 0130 16c0 3.739-1.456 7.255-4.101 9.899A13.902 13.902 0 0116 30z" />
      <path d="M21 17H11a1 1 0 010-2h10a1 1 0 110 2z" />
    </svg>
  )
}
