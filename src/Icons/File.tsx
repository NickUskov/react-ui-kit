import React, { type MouseEventHandler, forwardRef } from 'react'

interface FileProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const File = forwardRef<Ref, FileProps>(function File (props, ref) {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
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
      <path d="M27.922 10.615a1.001 1.001 0 00-.216-.323l-7.998-7.998A1.001 1.001 0 0019 2H5a1 1 0 000 2h13v7a1 1 0 001 1h7v16H6V7a1 1 0 00-2 0v22a1 1 0 001 1h22a1 1 0 001-1V11a.992.992 0 00-.078-.385zM20 5.414L24.586 10H20V5.414z" />
    </svg>
  )
})

export default File
