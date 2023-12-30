import React, { type FC } from 'react'

interface DrinkProps extends React.SVGProps<SVGSVGElement> {

}

export const Drink: FC <DrinkProps> = (props) => {
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
      <path d="M29.756 3.655A1 1 0 0029 2H11a1 1 0 000 2h15.81l-2.908 3.356c-2.603-1.158-5.675-.864-7.993.838a5.974 5.974 0 01-7.055.034L5.19 4H7a1 1 0 000-2H3a.998.998 0 00-.756 1.654L15 18.374V28h-4a1 1 0 100 2h10a1 1 0 100-2h-4v-9.626L29.756 3.655zm-17.404 7.714c1.66 0 3.321-.521 4.74-1.563 1.57-1.154 3.605-1.446 5.425-.853L16 16.473l-4.481-5.17c.278.029.555.066.833.066z" />
    </svg>
  )
}
