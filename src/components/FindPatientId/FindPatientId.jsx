"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

import useDateConverter from "@/hooks/useDateConverter";

export default function FindPatientId(props) {
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <Row>
          <Form.Group controlId="searchMethod">
            <Form.Label>Escolha como pesquisar:</Form.Label>
            <Form.Label htmlFor="cpf">CPF</Form.Label>
            <Form.Check
              inline
              type="radio"
              name="searchMethod"
              id="cpf"
              value="cpf"
              onChange={props.handleChangeMethod}
            />
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Check
              inline
              type="radio"
              name="searchMethod"
              id="name"
              value="name"
              onChange={props.handleChangeMethod}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Control
              type="text"
              name="searchContent"
              id="searchContent"
              onChange={props.hundleChangeName}
            />
          </Col>
          <Col>
            <Button variant="secondary" type="submit">
              Pesquisar
            </Button>
          </Col>
        </Row>
      </Form>
      <Container>
        {props.errorMessage && props.errorMessage}
        {props.searchPatients &&
          props.searchPatients.map((patient) => (
            <>
              <div className={styles.patientContent} key={patient.id}>
                <span className={styles.patientInfo}>ID:{patient.id}</span>
                <span className={styles.patientInfo}>Nome: {patient.name}</span>
                <span className={styles.patientInfo}>
                  Data de Nascimento:{useDateConverter(patient.bornDate)}
                </span>
                <span className={styles.patientInfo}>CPF: {patient.cpf}</span>
              </div>
            </>
          ))}
      </Container>
    </>
  );
}
