import React, { type FC, useState, type ChangeEvent } from 'react'
import inpStyles from './input.module.scss'
import InputElement from './InputElement'
import LegendElement from './LegendElement'
import cnBind from 'classnames/bind'
import { Icon } from '../../../Icons'

export interface FormData {
  firstName: string
}

const cx = cnBind.bind(inpStyles)

export interface InputProps {
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
  withIcon?: boolean
  type?: 'password' | 'text' | 'email' | 'number' | 'tel' | 'url' | 'datetime' | 'color' | 'file'
  onChange?: (value: string) => void
}

export interface ClassesInputElement {
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

export const Input: FC<InputProps> = ({
  value,
  type = 'text',
  placeholder = `enter ${type}`,
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
  withIcon = false,
  onChange
}) => {
  const [innerValue, setInnerValue] = useState<string>(value ?? '')

  const [classesElement, setClassesElement] = useState<ClassesInputElement>({
    legendUp: false,
    fieldsetAvtive: false,
    legendGlow: glow,
    fieldsetGlow: glow
  })

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
    "--box-shadow-color": boxShadowColor,
    "--icon-color": type === 'color'? innerValue : null
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
    boxShadow: boxShadow,
    withIcon: withIcon === true,
    file: type === 'file',
    color: type === 'color',});

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

  return (
    <> <fieldset className={inpClasses} style={fieldsetStyle} onClick={handleClickFieldset} onBlur={handleClickOut}>
      <LegendElement text={placeholder}/>  
      <InputElement onChange={handleChangeInput} type={type} value={innerValue}/>
      {withIcon? <Icon type={type}/> : null}
    </fieldset> 
    </> 
  )
} 
