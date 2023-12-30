import React, { forwardRef } from 'react'

export interface LegendElementProps {
  text?: React.ReactNode
  className?: string
}

const LegendElement = forwardRef<HTMLLegendElement, LegendElementProps>(function LegendElement (props, ref) {
  const { text, className, ...otherProps } = props
  return (<legend className={className} {...otherProps} ref={ref}>{text}</legend>
  )
})

export default LegendElement
