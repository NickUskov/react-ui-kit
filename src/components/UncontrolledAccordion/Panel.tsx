import React, { useState, type FC } from 'react'
import accordionStyles from './UncontrolledAccordion.module.scss'
import { ArrowLeft } from '../../Icons/ArrowLeft'

export interface PanelProps {
  title: string
  description?: string
  disabled: boolean
  children: JSX.Element
}

export const Panel: FC<PanelProps> = ({ title, description, disabled, children }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClickPanel = () => {
    if (!disabled) {
      setIsActive(!isActive)
    }
  }

  return (
    <div className={disabled ? accordionStyles.PanelDisabled : isActive ? accordionStyles.PanelOpen : accordionStyles.PanelClose} >
      <div className={accordionStyles.btnHeader} onClick={handleClickPanel}>
        <div className={accordionStyles.btnHeaderText}><div className={accordionStyles.title}>{title}</div>
          <aside className={accordionStyles.description}>{description}</aside></div>
        <ArrowLeft className={isActive ? accordionStyles.arrowUp : accordionStyles.arrowDown}/>
      </div>
      <div className={isActive ? accordionStyles.contentVisible : accordionStyles.contentInvisible}>{children}</div>
    </div>
  )
}
