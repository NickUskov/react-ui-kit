import React, { forwardRef } from 'react'

interface EmailProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
}

export type Ref = SVGSVGElement

const Email = forwardRef<Ref, EmailProps>(function Email (props, ref) {
  return (
    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" ref={ref}
      {...props}>
      <path d="M48 0a48 48 0 000 96 6 6 0 000-12 36 36 0 1136-36v18a6 6 0 01-12 0V48a24 24 0 10-24 24 23.736 23.736 0 0012.255-3.478A17.959 17.959 0 0096 66V48A48.047 48.047 0 0048 0zm0 60a12 12 0 1112-12 12.008 12.008 0 01-12 12z" />
    </svg>
  )
})

export default Email

// import React, { useRef, type FC } from 'react'

// interface EmailProps extends React.SVGProps<SVGSVGElement> {

// }

// export const Email: FC <EmailProps> = (props) => {
//   const ref = useRef
//   return (
//     <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
//       <path d="M48 0a48 48 0 000 96 6 6 0 000-12 36 36 0 1136-36v18a6 6 0 01-12 0V48a24 24 0 10-24 24 23.736 23.736 0 0012.255-3.478A17.959 17.959 0 0096 66V48A48.047 48.047 0 0048 0zm0 60a12 12 0 1112-12 12.008 12.008 0 01-12 12z" />
//     </svg>
//   )
// }
