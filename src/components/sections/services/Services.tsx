import React, {useState} from 'react';
import Title from "../Title";
import ServicesItem from "./Services-item";
import {Col, Row} from "react-bootstrap";
import ServiceInfo from "./Service-info";

function Services(): JSX.Element {
    const [activeElement, setActiveElement] = useState(0);
    const handleClick = (idx: number) => () => setActiveElement(idx)
    return (
        <section className="section services">
            <div className="services__wrap">
                <div className="services__title">
                    <Title title="Услуги"/>
                </div>
                <div className="services__description">
                    Наша работа – это креативные и продающие идеи, в обрамлении стильного дизайна, оживляющего эмоции,
                    будь
                    то мобильное приложение, сайт или публикация в социальной сети.
                </div>
            </div>
            <Row>
                <Col sm>
                    <div className="services__item" onClick={handleClick(0)}>
                        <ServicesItem activeElement={activeElement === 0} title='IT-консалтинг и стратегия'
                                      description={
                                          <ul>
                                              <li>Интернет-бизнес консалтинг</li>
                                              <li>Разработка стратегии присутствия и продвижения</li>
                                          </ul>
                                      }
                        />
                    </div>
                </Col>
                <Col sm>
                    <div className="services__item" onClick={handleClick(1)}>
                        <ServicesItem activeElement={activeElement === 1} title='Проектирование и дизайн'
                                      description={
                                          <ul>
                                              <li>Разработка ТЗ и прототипов</li>
                                              <li>Веб-дизайн, UX/UI интерфейсы</li>
                                              <li>Брендинг</li>
                                          </ul>
                                      }
                        />
                    </div>
                </Col>
                <Col sm>
                    <div className="services__item" onClick={handleClick(2)}>
                        <ServicesItem activeElement={activeElement === 2} title='Разработка и поддержка'
                                      description={
                                          <ul>
                                              <li>Корпоративные и промо-сайты</li>
                                              <li>Электронная коммерция и стартапы</li>
                                              <li>Мобильные приложения</li>
                                              <li>Системы по автоматизации процессов</li>
                                              <li>Техническая поддержка</li>
                                          </ul>
                                      }
                        />
                    </div>
                </Col>
                <Col sm>
                    <div className="services__item" onClick={handleClick(3)}>
                        <ServicesItem activeElement={activeElement === 3} title='Продвижение'
                                      description={
                                          <ul>
                                              <li>Продвижение в социальных сетях (SMM)</li>
                                              <li>Медийное размещение (контекстно-таргетированная реклама)</li>
                                              <li>Специальные проекты</li>
                                          </ul>
                                      }
                        />
                    </div>
                </Col>
            </Row>
           <div className="services__wrap">
               <ServiceInfo index={activeElement} />
           </div>
        </section>
    )
}

export default Services;
