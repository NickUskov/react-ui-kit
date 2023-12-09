import React, { FC } from "react";

import "./styles.css"

export type ButtonProps = {
    content: React.ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    
    return (
        <button className="my-button">{props.content}</button>
    )
}