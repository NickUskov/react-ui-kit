import React, { type MouseEventHandler, forwardRef } from 'react'

interface NumberProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Number = forwardRef<Ref, NumberProps>(function Number (props, ref) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M4.75 4h4a2.75 2.75 0 012.75 2.75v10.5A2.75 2.75 0 018.75 20h-4A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4zM6 9v6a.75.75 0 001.5 0V9A.75.75 0 006 9zm9.25-5h4A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20h-4a2.75 2.75 0 01-2.75-2.75V6.75A2.75 2.75 0 0115.25 4zm2.25 5.75v1.5h-1.25a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h2a.75.75 0 000-1.5H17v-1.5h1.25A.75.75 0 0019 12V9a.75.75 0 00-.75-.75h-2a.75.75 0 000 1.5h1.25z"
        fill="#212121"
      />
    </svg>
  )
})

export default Number
