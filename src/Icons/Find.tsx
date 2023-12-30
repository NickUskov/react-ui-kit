import React, { type FC } from 'react'

interface FindProps extends React.SVGProps<SVGSVGElement> {

}

export const Find: FC <FindProps> = (props) => {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 2C6.935 2 2 6.935 2 13s4.935 11 11 11 11-4.935 11-11S19.065 2 13 2zm0 20c-4.962 0-9-4.037-9-9 0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 4.963-4.037 9-9 9zM29.707 28.293l-6.001-6a.999.999 0 10-1.414 1.414l6.001 6a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
    </svg>
  )
}
