import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string
}
const KeysItem: React.FC<Props> = ({ image, title, description }) => {
    return (
        <div className="keys__item">
            <div className="keys__image">
                <img src={image} alt={title}/>
            </div>
            <div className="keys__item-info">
                <div>{title}</div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default KeysItem;
