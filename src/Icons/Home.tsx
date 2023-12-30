import React, { type FC } from 'react'

interface HomeProps extends React.SVGProps<SVGSVGElement> {

}

export const Home: FC <HomeProps> = (props) => {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M29.707 15.793l-13-13a.999.999 0 00-1.414 0l-13 13a.999.999 0 101.414 1.414L16 4.914l8.014 8.014c-.001.025-.014.047-.014.072v15H8V18a1 1 0 10-2 0v11a1 1 0 001 1h18a1 1 0 001-1V14.914l2.293 2.293a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
    </svg>
  )
}
