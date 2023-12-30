import React from 'react'
import type { IconType } from './types'
// import View from './View'
import Email from './Emai'
import Call from './Call'
import Clock from './Clock'
import Url from './Url'
import Text from './Text'
import Number from './Number'
import Color from './Color'
import File from './File'
import Password from './Password'

export interface IconProps {
  type: IconType
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = (props) => {
  switch (props.type) {
    case 'password': return <Password {...props}/>
    case 'email': return <Email {...props}/>
    case 'text': return <Text {...props}/>
    case 'number': return <Number {...props}/>
    case 'tel': return <Call {...props}/>
    case 'url': return <Url {...props}/>
    case 'datetime': return <Clock {...props}/>
    case 'color': return <Color {...props}/>
    case 'file': return <File {...props}/>
    default: return null
  }
}
