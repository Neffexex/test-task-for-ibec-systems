import React from 'react';
type Props = {
    color: string;
    title: string
}
const Button: React.FC<Props> = ({ color, title }) => {
    return <button className={color}>{title}</button>
};

export default Button;
