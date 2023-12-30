import React, { type MouseEventHandler, forwardRef, useState } from 'react'
import View from './View'
import Locked from './Locked'

interface PasswordProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Password = forwardRef<Ref, PasswordProps>(function Password (props, ref) {
  const [visiblePassword, setVisiblePassword] = useState(false)
  return (
    <div onClick={ () => { setVisiblePassword(!visiblePassword) } }>
      {visiblePassword
        ? (<View/>)
        : (
          <Locked/>
        )}
    </div>
  )
})

export default Password
