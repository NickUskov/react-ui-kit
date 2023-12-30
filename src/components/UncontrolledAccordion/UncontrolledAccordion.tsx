import React, { type FC } from 'react'
import accordionStyles from './UncontrolledAccordion.module.scss'
import { Panel } from './Panel'

export interface UncontrolledAccordionProps {
  width?: string
  height?: string
  color?: string
  border?: boolean
  backgroundColor?: string
  contentColor?: string
  titleColor?: string
  backgroundTitleColor?: string
  backgroundTextColor?: string
  btnTitleColor?: string
  btnDescriptionColor?: string
  scrollable?: boolean
  maxHeightContent?: string
  disabled?: number
  noselected?: boolean
}

export const UncontrolledAccordion: FC<UncontrolledAccordionProps> = ({
  width,
  height,
  color,
  border,
  backgroundColor = '#83af6b',
  contentColor,
  titleColor,
  backgroundTitleColor,
  backgroundTextColor,
  btnTitleColor,
  btnDescriptionColor,
  scrollable = true,
  maxHeightContent,
  disabled = 2,
  noselected
}) => {
  /* eslint-disable */
  const elemStyle = {
    "--base-color": color,
    "--title-color": titleColor,
    "--background-color": backgroundColor,
    "--content-color": contentColor,
    "--background-title-color": backgroundTitleColor,
    "--background-text-color": backgroundTextColor,
    "--btn-description-color" : btnDescriptionColor,
    "--btn-title-color": btnTitleColor,
    "--accordion-width": width,
    "--accordion-height": height, 
    "-webkit-user-select": noselected? "none" : "text", /* Safari */
    "-moz-user-select": noselected? "none" : "text", /* Firefox */
    "-ms-user-select": noselected? "none" : "text", /* IE10+/Edge */
    "user-select": noselected? "none" : "text", /* Standard */
    "border": border? "1px solid var(--base-color)" : "none"
  } as React.CSSProperties
  /* eslint-disable */ 

  return (
    <div className={accordionStyles.accordion} style={elemStyle}>
      <h2 className={accordionStyles.title}>Неконтролируемый компонент</h2>
      <Panel 
        title='Первый компонент'
        description='описание первого компонента'
        disabled={disabled === 0}
        children={(
          <>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui? Reprehenderit a minus quod. Corrupti sunt alias soluta ea molestias laudantium beatae vero nostrum odio doloribus, facere tempore labore tempora.</div>
          </>
        )}
      />
      <Panel 
        title='Второй компонент'
        disabled={disabled === 1}
        children={(
          <>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui? Reprehenderit a minus quod. Corrupti sunt alias soluta ea molestias laudantium beatae vero nostrum odio doloribus, facere tempore labore tempora.</div>
          </>
        )}
      />
       <Panel 
        title='Третий компонент'
        description='описание третьего компонента'
        disabled={disabled === 2}
        children={(
          <>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui? Reprehenderit a minus quod. Corrupti sunt alias soluta ea molestias laudantium beatae vero nostrum odio doloribus, facere tempore labore tempora.</div>
          </>
        )}
      />
    </div>
  )
}
