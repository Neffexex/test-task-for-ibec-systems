import React from 'react';
import Title from "../Title";

type Props = {
    index: number
}
const ServiceInfo: React.FC<Props> = ({index}) => {
    const titles = [
        'IT-консалтинг и стратегия',
        'Проектирование и дизайн',
        'Разработка и поддержка',
        'Продвижение'
    ]
    return (
        <div className="services__info">
            <Title title={titles[index]}/>
            <p className="services__info--description">
                Lorem ipsum dolor amet echo park fixie pabst, mustache banjo brunch selfies salvia keytar trust fund
                williamsburg next level umami jianbing. Hell of green juice humblebrag you probably haven't heard of
                them, ennui venmo tote bag. Before they sold out messenger bag glossier, neutra sustainable succulents
                seitan taxidermy. Sartorial slow-carb hammock pickled fashion axe. Sartorial offal tattooed tote bag,
                live-edge literally echo park. Franzen pok pok hammock tofu four dollar toast.
            </p>
            <p className="services__info--description">
                Lorem ipsum dolor amet echo park fixie pabst, mustache banjo brunch selfies salvia keytar trust fund
                williamsburg next level umami jianbing. Hell of green juice humblebrag you probably haven't heard of
                them, ennui venmo tote bag. Before they sold out messenger bag glossier, neutra sustainable succulents
                seitan taxidermy. Sartorial slow-carb hammock pickled fashion axe. Sartorial offal tattooed tote bag,
                live-edge literally echo park. Franzen pok pok hammock tofu four dollar toast.
            </p>
            <p className="services__info--description">
                Lorem ipsum dolor amet echo park fixie pabst, mustache banjo brunch selfies salvia keytar trust fund
                williamsburg next level umami jianbing. Hell of green juice humblebrag you probably haven't heard of
                them, ennui venmo tote bag. Before they sold out messenger bag glossier, neutra sustainable succulents
                seitan taxidermy. Sartorial slow-carb hammock pickled fashion axe. Sartorial offal tattooed tote bag,
                live-edge literally echo park. Franzen pok pok hammock tofu four dollar toast.
            </p>
        </div>
    );
};

export default ServiceInfo;
