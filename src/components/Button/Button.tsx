// Disable @typescript-eslint
import React, { type FC } from 'react'
import cnBind from 'classnames/bind'
import { ButtonIcons } from './Icons'
import btnStyles from './button.module.scss'

const cx = cnBind.bind(btnStyles)

export interface ButtonProps {
  color?: string
  content: string
  icon?: 'none' | 'add' | 'remove' | 'edit' | 'copy' | 'settings' | 'like'
  type?: 'main' | 'secondary' | 'onlyText'
  size?: 'large' | 'medium' | 'small'
  radius?: number
  glow?: boolean
  shadow?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  color,
  content,
  icon,
  type,
  size,
  radius,
  glow,
  shadow,
  disabled,
  onClick
}) => {
  /* eslint-disable */
  const elemStyle = {
    "--base-color": color,
    "--radius": `${radius}px`,
  } as React.CSSProperties;
  /* eslint-disable */

  const btnClasses = cx(
    'btn', {
      main: type === "main",
      secondary: type === "secondary",
      onlyText: type === "onlyText",
      large: size === "large",
      medium: size === "medium",
      small: size === "small",
      disabled: disabled,
      glow,
      shadow,
  });
 
  const btnIcon = () => {
    if (icon) {
      return ButtonIcons.find((bIcon) => bIcon.nameSvg === icon)?.svg(size);
    } else return <></>;
  };

  return (
  <button className={btnClasses} onClick={onClick} style={elemStyle}>
    {btnIcon()}
    <p className={btnStyles.text}>{content}</p>
  </button>    
  );
};
