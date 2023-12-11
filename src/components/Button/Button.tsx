import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { ButtonIcons } from "./Icons";
import "./styles.css";

export type ButtonProps = {
  color?: string;
  content: string;
  icon?: "add" | "remove" | "edit" | "copy" | "settings" | "like";
  type?: "main" | "secondary";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  color,
  content,
  icon,
  type,
  size,
  disabled,
  onClick,
}) => {
  const elemStyle = {
    "--base-color": color,
  } as React.CSSProperties;

  let btnClass = classNames(
    "my-button",
    type,
    size,
    disabled ? "disabled" : null
  );

  const btnIcon = () => {
    if (icon) {
      return ButtonIcons.find((bIcon) => bIcon.nameSvg === icon)?.svg(size);
    } else return <></>;
  };

  return (
    <button className={btnClass} onClick={onClick} style={elemStyle}>
      {btnIcon()}
      {content}
    </button>
  );
};
