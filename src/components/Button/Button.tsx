import React, { FC } from "react";
import classNames from "classnames";
import { ButtonIcons } from "./Icons";
import "./buttonStyles.css";

export type ButtonProps = {
  color?: string;
  content: string;
  icon?: "none" | "add" | "remove" | "edit" | "copy" | "settings" | "like";
  type?: "main" | "secondary" | "onlyText";
  size?: "large" | "medium" | "small";
  radius?: number;
  glow?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

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
  onClick,
}) => {
  const elemStyle = {
    "--base-color": color,
    "--radius": `${radius}px`,
  } as React.CSSProperties;

  let btnClass = classNames(
    "my-button",
    type,
    size,
    disabled ? "disabled" : null,
    glow ? "glow" : null,
    shadow ? "shadow" : null
  );

  const btnIcon = () => {
    if (icon) {
      return ButtonIcons.find((bIcon) => bIcon.nameSvg === icon)?.svg(size);
    } else return <></>;
  };

  return (
    <button className={btnClass} onClick={onClick} style={elemStyle}>
      {btnIcon()}
      <p className="text">{content}</p>
    </button>
  );
};
