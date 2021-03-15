import React from 'react';
import Title from "../Title";
import KeysItem from "./Keys-item";
import keysOne from "../../../assets/keys1.png";
import keysTwo from "../../../assets/keys2.png";
import keysThree from "../../../assets/keys3.png";
import {Col, Row} from "react-bootstrap";
import Button from "../../button/Button";
function Keys(): JSX.Element {
    return (
        <section className="section keys">
                <Title title="Актуальные кейсы" />
                <Row>
                    <Col sm>
                        <KeysItem image={keysOne} title="amanat24.kz" description="Дизайн веб-сайта с красивыми иллюстрациями" />
                    </Col>
                    <Col sm>
                        <KeysItem image={keysTwo} title="oborotka app" description="iOS и Android приложение" />
                    </Col>
                    <Col sm>
                        <KeysItem image={keysThree} title="tengrinews.kz" description="Редизайн топового новостного сайта страны" />
                    </Col>
                </Row>
                <Button title="Смотреть все проекты" color="gray"/>
        </section>
    );
};

export default  Keys;
