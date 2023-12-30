import React, { type FC } from 'react'

interface LocationProps extends React.SVGProps<SVGSVGElement> {

}

export const Location: FC <LocationProps> = (props) => {
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
      <path d="M16 27a.999.999 0 01-.648-.238c-.242-.206-5.942-5.1-8.32-10.438a.999.999 0 111.827-.813c1.739 3.905 5.577 7.699 7.124 9.13C18.713 21.991 24 16.069 24 12.23 24 7.692 20.411 4 16 4s-8 3.692-8 8.23a1 1 0 01-2 0C6 6.589 10.486 2 16 2s10 4.589 10 10.23c0 5.912-8.944 14.159-9.325 14.508A1 1 0 0116 27z" />
      <path d="M16 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM29 30H3a1 1 0 01-.868-1.496l4-7a1 1 0 111.736.992L4.723 28h22.553l-3.145-5.504a1 1 0 011.736-.992l4 7A1 1 0 0129 30z" />
    </svg>
  )
}
