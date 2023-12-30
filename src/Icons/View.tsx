import React, { type MouseEventHandler, forwardRef } from 'react'

interface ViewProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const View = forwardRef<Ref, ViewProps>(function View (props, ref) {
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
      <path d="M16 25c-4.265 0-8.301-1.807-11.367-5.088a1 1 0 011.462-1.365C8.778 21.419 12.295 23 16 23c4.763 0 9.149-2.605 11.84-7-2.69-4.395-7.077-7-11.84-7-4.938 0-9.472 2.801-12.13 7.493a1 1 0 11-1.74-.986C5.147 10.18 10.333 7 16 7c5.668 0 10.853 3.18 13.87 8.507a1 1 0 010 .985C26.853 21.819 21.668 25 16 25z" />
      <path d="M16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
    </svg>
  )
})

export default View
