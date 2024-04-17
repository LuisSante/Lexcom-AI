import "../../css/lexcomai.css"
import React from "react";
import { ChildrenProps } from "../../interface/lexcomai";

export const Grid: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div style={{alignItems: 'center' }}>
            Analizando...
            <LoadingBox>{children}</LoadingBox>
        </div>
    );
}

const LoadingBox: React.FC<ChildrenProps> = ({ children }) => {
    return React.Children.map(children, child => {
        console.log(child)
        return <div className="loading-box">{child}</div>;
    });
}