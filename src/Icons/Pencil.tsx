import React, { type FC } from 'react'

interface PencilProps extends React.SVGProps<SVGSVGElement> {

}

export const Pencil: FC <PencilProps> = (props) => {
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
      <path d="M28.172 3.828a6.197 6.197 0 00-3.533-1.767 6.2 6.2 0 00-5.294 1.767 1 1 0 000 1.415c.021.021.048.028.07.046.018.021.025.048.046.069l2.884 2.884L7.449 23.138l-2.293-2.293L17.793 8.208a.999.999 0 10-1.414-1.414L3.037 20.136l-.003.002-.742.742a1.005 1.005 0 00-.292.707V29a1 1 0 001 1h7.414c.265 0 .52-.105.707-.293l17.051-17.051a6.251 6.251 0 000-8.828zm-3.814.214c.914.13 1.744.545 2.399 1.2 1.409 1.41 1.606 3.567.614 5.199l-2.906-2.907-2.916-2.916a4.218 4.218 0 012.809-.576zM4 28v-5.482l2.74 2.74.001.002.002.001L9.482 28H4zm4.863-3.448L23.758 9.656l2.293 2.293-14.896 14.896-2.292-2.293z" />
    </svg>
  )
}
