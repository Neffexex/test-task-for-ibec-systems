import React from "react";
import Title from "../Title";
import {Col, Row} from "react-bootstrap";
import Button from "../../button/Button";

function Contacts(): JSX.Element {
    return (
        <section className="section contacts">
          <Title title="Контакты" />
          <Row>
              <Col sm>
                <ul className="contacts__address">
                    <li>Макатаева 117А (БЦ Лотос) Офис 523, 524 Алматы, Казахстан</li>
                    <li><a href="mailto:info@ibecsystems.com">info@ibecsystems.com</a></li>
                </ul>
              </Col>
              <Col sm>
                  <ul className="contacts__phone" >
                      <li>
                          <div>Алматы</div>
                          <span> +7 727 279 56 12</span>
                          <span>+7 701 666 6420</span>
                      </li>
                      <li>
                          <div>Астана</div>
                          <span>+7 701 749 0928</span>
                      </li>
                      <li>
                          <div>Бишкек</div>
                          <span>+996 555 708 899</span>
                      </li>
                  </ul>
              </Col>
              <Col sm>
                  <ul className="contacts__social">
                     <li><a href="#">instagram</a></li>
                     <li><a href="#">facebook</a></li>
                     <li><a href="#">telegram</a></li>
                     <li><a href="#">twitter</a></li>
                     <li><a href="#">linkedin</a></li>
                     <li><a href="#">dribble</a></li>
                     <li><a href="#">behance</a></li>
                  </ul>
              </Col>
              <Col sm>
                  <div className="contacts__feedback">
                      <Button title="Оставить заявку" color="accent" />
                      <Button title="Скачать профиль" color="light-accent" />
                  </div>
              </Col>
          </Row>
            <hr/>
        </section>
    )
}


export default Contacts;
