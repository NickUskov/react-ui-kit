import React, { type ChangeEventHandler, forwardRef, type KeyboardEventHandler, type FocusEventHandler } from 'react'

export interface InputElementProps {
  value: string
  type?: string
  label?: React.ReactNode
  placeholder?: string
  className?: string
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

const InputElement = forwardRef<HTMLInputElement, InputElementProps>(function InputElement (props, ref) {
  return (
    <input {...props} ref={ref}/>
  )
})

export default InputElement
