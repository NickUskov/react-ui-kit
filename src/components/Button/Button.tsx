import React, { FC } from "react";
import classNames from "classnames";
import { ButtonIcons } from "./Icons";
import "./styles.css";

export type ButtonProps = {
  backgroundColor?: string;
  content: React.ReactNode;
  icon?: "add" | "remove" | "edit" | "copy" | "settings" | "like";
  type?: "main" | "secondary";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  backgroundColor,
  content,
  icon,
  type,
  size,
  disabled,
  onClick,
}) => {
  const btnClass = classNames(
    "my-button",
    backgroundColor ? `color-${backgroundColor.replace("#", "")}` : "",
    type,
    size,
    { disabled }
  );

  const btnIcon = () => {
    if (icon) {
      return ButtonIcons.find((bIcon) => bIcon.nameSvg === icon)?.svg(size);
    } else return <></>;
  };


  console.log("123")

  return (
    <button
      className={btnClass}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {btnIcon()}
      {content}
    </button>
  );
};
