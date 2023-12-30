import React, { type MouseEventHandler, forwardRef } from 'react'

interface CallProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Call = forwardRef<Ref, CallProps>(function Call (props, ref) {
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
      <path d="M14.626 18.4a.997.997 0 01-.707-.293l-4.171-4.17a1 1 0 010-1.414l2.434-2.433c.76-.76.76-1.997 0-2.757l-2.78-2.78c-.737-.736-2.021-.737-2.758 0a1.05 1.05 0 01-.145.12c-.115.08-2.906 2.076-2.448 6.198a1 1 0 11-1.987.221C1.51 6.114 4.713 3.505 5.291 3.078c1.497-1.436 4.051-1.412 5.524.06l2.78 2.78a3.953 3.953 0 010 5.585L11.87 13.23l3.463 3.463a.999.999 0 01-.707 1.707zM9.76 23.266a.997.997 0 01-.707-.293c-2.457-2.457-4.296-4.855-5.467-7.128a1 1 0 111.778-.916c1.076 2.089 2.792 4.32 5.103 6.63a.999.999 0 01-.707 1.707z" />
      <path d="M21.992 29.982c-3.937 0-8.299-2.369-12.984-7.055a.999.999 0 111.414-1.414c4.539 4.54 8.778 6.762 12.284 6.436 3.09-.292 4.588-2.445 4.603-2.468a.925.925 0 01.12-.145c.368-.367.571-.858.571-1.378s-.203-1.01-.571-1.378l-2.78-2.781a1.938 1.938 0 00-1.38-.57 1.93 1.93 0 00-1.377.57l-2.435 2.433a.999.999 0 01-1.414 0l-4.169-4.169a.999.999 0 111.414-1.414l3.462 3.462 1.727-1.726a3.919 3.919 0 012.792-1.157c1.056 0 2.048.411 2.794 1.156l2.78 2.782A3.92 3.92 0 0130 23.958a3.92 3.92 0 01-1.097 2.731c-.364.492-2.327 2.903-6.009 3.251a9.298 9.298 0 01-.902.042z" />
    </svg>
  )
})

export default Call
