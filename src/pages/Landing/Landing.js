import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import DoctorWithPatient from '@/images/doctor-with-patient.svg';
import Clipboards from '@/images/clipboards.svg';
import DataDisplay from '@/images/data-display.svg';
import { fullHeight, image, blurb } from './Landing.module.scss';

const Landing = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [innerWidth]);

  return (
    <Jumbotron className={fullHeight}>
      <Container>
        <Row>
          <Col className="d-flex" md="6">
            <img alt="Doctor with Patient" className={image} src={DoctorWithPatient} />
          </Col>
          <Col className="d-flex" md="6">
            <p className={clsx('text-primary', blurb)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur minima modi
              quis repellat ullam quaerat nesciunt perspiciatis quos tenetur.
            </p>
          </Col>
        </Row>
        {innerWidth < 768 ? (
          <Row>
            <Col className="d-flex" md="6">
              <img alt="Clipboards" className={image} src={Clipboards} />
            </Col>
            <Col className="d-flex" md="6">
              <p className={clsx('text-primary', blurb)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam quasi quos
                quibusdam ullam, nam harum voluptatum necessitatibus at deserunt.
              </p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className="d-flex" md="6">
              <p className={clsx('text-primary', blurb)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam quasi quos
                quibusdam ullam, nam harum voluptatum necessitatibus at deserunt.
              </p>
            </Col>
            <Col className="d-flex" md="6">
              <img alt="Clipboards" className={image} src={Clipboards} />
            </Col>
          </Row>
        )}
        <Row>
          <Col className="d-flex" md="6">
            <img alt="Data Display" className={image} src={DataDisplay} />
          </Col>
          <Col className="d-flex" md="6">
            <p className={clsx('text-primary', blurb)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odit deleniti
              tenetur in quidem unde voluptas porro ipsam quibusdam perferendis.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Landing;
