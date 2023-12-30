import React, { type FC } from 'react'

interface LikeProps extends React.SVGProps<SVGSVGElement> {

}

export const Like: FC <LikeProps> = (props) => {
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
      <path d="M16 30c-.215 0-.43-.069-.61-.207C14.844 29.372 2 19.396 2 11c0-4.411 3.589-8 8-8s8 3.589 8 8a1 1 0 11-2 0c0-3.309-2.691-6-6-6s-6 2.691-6 6c0 6.467 9.477 14.653 12 16.719C18.522 25.653 28 17.46 28 11a6.006 6.006 0 00-8.559-5.43 1 1 0 11-.853-1.809A7.946 7.946 0 0122 3c4.411 0 8 3.589 8 8 0 8.396-12.844 18.372-13.39 18.793-.18.138-.395.207-.61.207z" />
    </svg>
  )
}
