import React, { type MouseEventHandler, forwardRef } from 'react'

interface UrlProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Url = forwardRef<Ref, UrlProps>(function Url (props, ref) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path
        d="M17.3 13.35a1 1 0 01-.7-.29 1 1 0 010-1.41l2.12-2.12a2 2 0 000-2.83L17.3 5.28a2.06 2.06 0 00-2.83 0L12.35 7.4A1 1 0 0110.94 6l2.12-2.12a4.1 4.1 0 015.66 0l1.41 1.41a4 4 0 010 5.66L18 13.06a1 1 0 01-.7.29zM8.11 21.3a4 4 0 01-2.83-1.17l-1.41-1.41a4 4 0 010-5.66L6 10.94a1 1 0 011.4 1.41l-2.12 2.12a2 2 0 000 2.83l1.42 1.42a2.06 2.06 0 002.83 0l2.12-2.12a1 1 0 111.41 1.4l-2.12 2.12a4 4 0 01-2.83 1.18z"
        fill="#464646"
      />
      <path
        d="M8.82 16.18a1 1 0 01-.71-.29 1 1 0 010-1.42l6.37-6.36a1 1 0 011.41 0 1 1 0 010 1.42l-6.37 6.36a1 1 0 01-.7.29z"
        fill="#464646"
      />
    </svg>
  )
})

export default Url
