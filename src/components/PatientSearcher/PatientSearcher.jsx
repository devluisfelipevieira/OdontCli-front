"use client";
import PutPatientFormContainer from "@/components/PatientForm/PutPatientFormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.scss"
import { Container } from "react-bootstrap";

export default function PatientSearcher(props) {
  return (
    <>
      <Container fluid>
        <h1 className={styles.putPatientTitle}>Atualizar Cadastro do Paciente</h1>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Form.Label className={styles.idLabel}>ID do Paciente:</Form.Label>
            <Col>
              <Form.Control
                type="number"
                name="patientId"
                id="patientId"
                onChange={props.handleChange}
              />
            </Col>
            <Col>
              <Button variant="secondary" type="submit">
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Form>
        {props.errorMessage && <p>{props.errorMessage}</p>}
        {props.searchPatient && (
          <PutPatientFormContainer patient={props.searchPatient} />
        )}
        {/*dessa forma verificamos se " errorMessage e searchPatient existe antes de tentar
          renderizar, evitando assim um erro de elemento undefined"*/}
      </Container>
    </>
  );
}
