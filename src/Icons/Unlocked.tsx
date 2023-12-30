import React, { type MouseEventHandler, forwardRef } from 'react'

interface UnlockedProps extends React.SVGProps<SVGSVGElement> {
  type?: string
  className?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}

export type Ref = SVGSVGElement

const Unlocked = forwardRef<Ref, UnlockedProps>(function Unlocked (props, ref) {
  return (
    <svg
      height="1710.258px"
      viewBox="0 0 1262 1710.258"
      width="1262px"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M1196.495 713.258H1090V459.592C1090 206.307 884.397.242 631.198.242c-253.198 0-458.994 206.2-458.994 459.649 0 36.494 29.678 66.071 66.168 66.071 36.491 0 66.119-29.577 66.119-66.071 0-180.588 146.418-327.508 326.753-327.508C811.58 132.384 958 279.168 958 459.592v253.666H66.686C30.195 713.258 0 742.241 0 778.731v766.42c0 91.079 74.712 165.106 165.792 165.106h931.597c91.08 0 164.611-74.027 164.611-165.106v-766.42c0-36.49-29.015-65.473-65.505-65.473zM1130 1545.151c0 18.218-14.395 33.106-32.611 33.106H165.792c-18.216 0-33.792-14.889-33.792-33.106V845.258h998v699.893z" />
      <path d="M631 1409.707c36.491 0 66-29.58 66-66.071v-237.854c0-36.49-29.51-66.07-66-66.07-36.49 0-66 29.58-66 66.07v237.854c0 36.491 29.509 66.071 66 66.071z" />
    </svg>
  )
})

export default Unlocked
