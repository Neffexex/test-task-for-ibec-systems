import React from 'react';

type Props = {
    title: string;
    activeElement: boolean
    description: JSX.Element
}
const ServicesItem: React.FC<Props> = (props) => {
    const { title, activeElement, description } = props;
    return (
        <div className={activeElement ? "services__active": "services__not-active"}>
            <h3>{title}</h3>
            {description}
        </div>
    );
};

export default ServicesItem
