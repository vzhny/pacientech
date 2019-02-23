import React from 'react';
import clsx from 'clsx';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import DoctorWithPatient from '@/images/doctor-with-patient.svg';
import Clipboards from '@/images/clipboards.svg';
import DataDisplay from '@/images/data-display.svg';
import styles from './Landing.module.scss';

const Landing = () => (
  <Jumbotron className={styles.FullHeight}>
    <Container>
      <Row>
        <Col className="d-flex">
          <img alt="Doctor with Patient" className={styles.Image} src={DoctorWithPatient} />
        </Col>
        <Col className="d-flex">
          <p className={clsx('text-primary', styles.Blurb)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aspernatur minima modi
            quis repellat ullam quaerat nesciunt perspiciatis quos tenetur.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <p className={clsx('text-primary', styles.Blurb)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam quasi quos
            quibusdam ullam, nam harum voluptatum necessitatibus at deserunt.
          </p>
        </Col>
        <Col className="d-flex">
          <img alt="Clipboards" className={styles.Image} src={Clipboards} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <img alt="Data Display" className={styles.Image} src={DataDisplay} />
        </Col>
        <Col className="d-flex">
          <p className={clsx('text-primary', styles.Blurb)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odit deleniti tenetur
            in quidem unde voluptas porro ipsam quibusdam perferendis.
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Landing;
