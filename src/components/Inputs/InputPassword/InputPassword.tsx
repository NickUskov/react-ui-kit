import React, { type FC, useState, type ChangeEvent } from 'react'
import inpStyles from './input.module.scss'
import InputElement from './InputElement'
import LegendElement from './LegendElement'
import cnBind from 'classnames/bind'
import Unlocked from '../../../Icons/Unlocked'
import Locked from '../../../Icons/Locked'

const cx = cnBind.bind(inpStyles)

export interface InputPassProps {
  value?: string
  placeholder?: string
  fontSize?: string
  color?: string
  backgroundColor?: string
  borderColor?: string
  glowColor?: string
  borderType?: 'all' | 'bottom' | 'top' | 'vertically' | 'right' | 'left' | 'none'
  borderWidth?: string
  radius?: string
  width?: string
  textAlign?: 'left' | 'right' | 'center'
  glow?: boolean
  boxShadow?: boolean
  boxShadowColor?: string
  onChange?: (value: string) => void
}

export interface ClassesInputPassElement {
  fieldsetGlow?: boolean
  legendUp?: boolean
  legendGlow?: boolean
  fieldsetAvtive?: boolean
  borderAll?: boolean
  borderBottom?: boolean
  borderTop?: boolean
  borderLeft?: boolean
  borderRight?: boolean
  boxShadow?: boolean
}

export const InputPassword: FC<InputPassProps> = ({
  value,
  placeholder = 'enter password',
  fontSize = '18px',
  color = 'black',
  backgroundColor = 'white',
  borderColor = 'blue',
  borderWidth = '1px',
  borderType = 'all',
  radius = '10px',
  width = '200px',
  textAlign = 'left',
  glow = false,
  glowColor = 'blue',
  boxShadow = false,
  boxShadowColor = 'black',
  onChange
}) => {
  const [innerValue, setInnerValue] = useState<string>(value ?? '')

  const [classesElement, setClassesElement] = useState<ClassesInputPassElement>({
    legendUp: false,
    fieldsetAvtive: false,
    legendGlow: glow,
    fieldsetGlow: glow
  })

  const [visiblePass, setVisiblePass] = useState<boolean>(false)

  /* eslint-disable */
  const fieldsetStyle = {
    "--text-color": color,
    "--background-color": backgroundColor,
    "--font-size": fontSize,
    "--border-color": borderColor,
    "--border-width": borderWidth,
    "--radius": radius,
    "--input-text-color": color,
    "--input-width": width,
    "--text-align": textAlign,
    "--glow-color": glowColor,
    "--box-shadow-color": boxShadowColor
  } as React.CSSProperties 
  /* eslint-disable */

  const inpClasses = cx(
    'inputEl', {...classesElement}, 
    {borderAll: borderType === 'all',
    borderBottom: borderType === 'bottom',
    borderTop: borderType === 'top',
    borderLeft: borderType === 'vertically' || borderType === 'left',
    borderRight: borderType === 'vertically' || borderType === 'right',
    borderNone: borderType === 'none',
    boxShadow: boxShadow });

  const superGlow = () => {
    if (glow){
      setClassesElement(
      {...classesElement, 
        fieldsetGlow: true,
    })
      setTimeout(() => {
        setClassesElement(
          {...classesElement, 
          fieldsetGlow: false,
      })
    },100)
    }   
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value)
    superGlow()
  }

  const handleClickOut = () => {
    setClassesElement(
      {...classesElement, 
        legendUp: innerValue? true :false,
        fieldsetAvtive: false
    })
  }

  const handleClickFieldset = () => {
    setClassesElement(
      {...classesElement, 
        legendUp: true,
        fieldsetAvtive: true
    })
  }


  const handleClickIcon = () => {
    setVisiblePass(!visiblePass)
  }

  return (
    <fieldset className={inpClasses} style={fieldsetStyle} onClick={handleClickFieldset} onBlur={handleClickOut}>
      <LegendElement text={placeholder}/> 
      <InputElement onChange={handleChangeInput} value={innerValue} type={visiblePass? "text" : "password"}/>
      <div onClick={() => setVisiblePass(!visiblePass)}>
         {visiblePass? <Unlocked /> : <Locked/>}
      </div>
     
    </fieldset>
  )
}


