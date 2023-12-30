import React, { useState, type FC } from 'react'
import accordionStyles from './accordion.module.scss'
import { Panel } from './Panel'
import { PanelData } from './Panels'

export interface ControlledAccordionProps {
  width?: string
  height?: string
  color?: string
  border?: boolean
  backgroundColor?: string
  titleColor?: string
  backgroundTitleColor?: string
  backgroundTextColor?: string
  btnTitleColor?: string
  btnDescriptionColor?: string
  scrollable?: boolean
  maxHeightContent?: string
  disabledComponent?: number
  noselected?: boolean
}

export const ControlledAccordion: FC<ControlledAccordionProps> = ({
  width,
  height,
  color,
  border,
  backgroundColor,
  titleColor,
  backgroundTitleColor,
  backgroundTextColor,
  btnTitleColor,
  btnDescriptionColor,
  scrollable = true,
  maxHeightContent,
  disabledComponent,
  noselected
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  /* eslint-disable */
  const elemStyle = {
    "--base-color": color,
    "--title-color": titleColor,
    "--background-color": backgroundColor,
    "--background-title-color": backgroundTitleColor,
    "--background-text-color": backgroundTextColor,
    "--btn-description-color" : btnDescriptionColor,
    "--btn-title-color": btnTitleColor,
    "--accordion-width": width,
    "--accordion-height": height, 
    "--scrollable": scrollable? "overlay" : "hidden",
    "--max-height-content": maxHeightContent,
    "-webkit-user-select": noselected? "none" : "text", /* Safari */
    "-moz-user-select": noselected? "none" : "text", /* Firefox */
    "-ms-user-select": noselected? "none" : "text", /* IE10+/Edge */
    "user-select": noselected? "none" : "text", /* Standard */
    "border": border? "1px solid var(--base-color)" : "none"
  } as React.CSSProperties
  /* eslint-disable */ 

  const handleShow = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index)
    } else {
      setActiveIndex(null)
    }
  }

  return (
    <div className={accordionStyles.accordion} style={elemStyle}>
      <h2 className={accordionStyles.title}>Контролируемый компонент</h2>
      {PanelData.map((data, index) => (
       <Panel
          key={index}
          title={data.title}
          description={data.description}
          isActive={activeIndex === index} 
          isDisabled={disabledComponent === index} 
          onShow={() => {handleShow(index)}}
        >
          {data.children}
        </Panel> 
      ))}
    </div>
  )
}
