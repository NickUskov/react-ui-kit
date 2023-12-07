import React from "react";
import { FC } from "react";

export type ButtonProps = {
    content: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button>{props.content}</button>
    )
}