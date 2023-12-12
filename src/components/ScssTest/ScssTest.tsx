import React, { type FC } from 'react'
import style from './style.module.scss'

export const ScssTest: FC = () => {
  return (
    <div className={style.test}>
      <p className={style.pText}>scss test</p>
    </div>
  )
}
