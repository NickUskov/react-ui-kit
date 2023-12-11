import React, { type FC } from 'react'

import './styles.css'

export interface ButtonProps {
  content: React.ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className="my-button">{props.content}</button>
  )
}
