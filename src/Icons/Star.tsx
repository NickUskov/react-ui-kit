import React, { type FC } from 'react'

interface StarProps extends React.SVGProps<SVGSVGElement> {

}

export const Star: FC <StarProps> = (props) => {
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
      <path d="M24.034 30a.988.988 0 01-.483-.125L16 25.701l-7.55 4.174a1 1 0 01-1.471-1.037l1.452-8.904-3.169-3.204a1 1 0 111.422-1.406l3.527 3.566a.999.999 0 01.276.864l-1.203 7.375 6.232-3.445c.301-.166.667-.166.968 0l6.232 3.445-1.203-7.375a1 1 0 01.271-.859l5.141-5.269-7.059-1.078a1.003 1.003 0 01-.754-.564L16 5.354l-3.112 6.63a1.003 1.003 0 01-.754.564L3.151 13.92a1 1 0 11-.302-1.978l8.455-1.291 3.791-8.076a.998.998 0 011.81 0l3.791 8.076 8.455 1.291a1.002 1.002 0 01.565 1.687l-6.147 6.3 1.453 8.909A1.003 1.003 0 0124.034 30z" />
    </svg>
  )
}
