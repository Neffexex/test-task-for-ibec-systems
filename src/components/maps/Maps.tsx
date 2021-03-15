import React from 'react';
//@ts-ignore
import {YMaps, Map, Placemark} from 'react-yandex-maps';

type Props = {}

const Maps: React.FC<Props> = () => {
    const mapState = {
        center: [43.23575123073993, 76.95482142863314],
        zoom: 10,
        controls: ["zoomControl", "fullscreenControl"]
    };
    return (
        <YMaps>
            <Map
                state={mapState}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
                <Placemark
                    geometry={[43.26423796509348, 76.9300471072312]}
                    properties={{
                        balloonContent: "MegaPark Almaty",
                        hintContent: "MegaPark Almaty"
                    }}
                    options={{
                        preset: "islands#violetIcon"
                    }}
                    modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                />
                <Placemark
                    geometry={[43.23575123073993, 76.95482142863314]}
                    properties={{
                        hintContent: "Бц Нурлы-тау"
                    }}
                    options={{
                        preset: "islands#governmentCircleIcon"
                    }}
                    modules={['geoObject.addon.hint']}
                />
            </Map>
        </YMaps>
    );
};

export default Maps;
