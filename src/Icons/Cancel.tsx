import React, { type FC } from 'react'

interface CancelProps extends React.SVGProps<SVGSVGElement> {

}

export const Cancel: FC <CancelProps> = (props) => {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M28 6h-6.382l-1.724-3.447A.998.998 0 0019 2h-6c-.379 0-.725.214-.895.553L10.382 6H4a1 1 0 000 2h20v20H8V11a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 001-1V8h2a1 1 0 100-2zM13.618 4h4.764l1 2h-6.764l1-2z" />
      <path d="M14 24V14a1 1 0 00-2 0v10a1 1 0 102 0zM20 24V14a1 1 0 10-2 0v10a1 1 0 102 0z" />
    </svg>
  )
}
