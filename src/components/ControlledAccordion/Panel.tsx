import React, { type FC } from 'react'
import accordionStyles from './accordion.module.scss'
import { ArrowLeft } from '../../Icons/ArrowLeft'

export interface PanelProps {
  title: string
  description?: string
  children: JSX.Element
  isActive: boolean
  isDisabled: boolean
  onShow: () => void
}

export const Panel: FC<PanelProps> = ({ title, description, children, isActive, isDisabled, onShow }) => {
  const handleClick = (): void => {
    if (!isDisabled) {
      onShow()
    }
  }
  return (
    <div className={accordionStyles.Panel} >
      <div className={isDisabled ? accordionStyles.btnDemoDisabled : isActive ? accordionStyles.btnDemoContentOpen : accordionStyles.btnDemoContent} onClick={handleClick}>
        <div className={accordionStyles.title}>{title}</div>
        <div className={accordionStyles.description}>{description}</div>
        <ArrowLeft className={isActive ? accordionStyles.arrowUp : accordionStyles.arrowDown}/>
      </div>
      <div className={isDisabled ? accordionStyles.contentDisabled : isActive ? accordionStyles.contentOpen : accordionStyles.content}>{children}</div>
    </div>
  )
}
