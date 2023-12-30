import React, { type FC } from 'react'

interface GalleryProps extends React.SVGProps<SVGSVGElement> {

}

export const Gallery: FC <GalleryProps> = (props) => {
  return (
    <svg
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M29 27H3a1 1 0 01-1-1V10a1 1 0 012 0v15h24V7H3a1 1 0 010-2h26a1 1 0 011 1v20a1 1 0 01-1 1z" />
      <circle cx={24} cy={11} r={2} />
      <path d="M6 23a.999.999 0 01-.707-1.707l8-8a.999.999 0 011.414 0l3 3a.999.999 0 11-1.414 1.414L14 15.414l-7.293 7.293A.997.997 0 016 23zM25 23a.997.997 0 01-.707-.293L21 19.414l-3.293 3.293a.999.999 0 11-1.414-1.414l4-4a.999.999 0 011.414 0l4 4A.999.999 0 0125 23z" />
    </svg>
  )
}
