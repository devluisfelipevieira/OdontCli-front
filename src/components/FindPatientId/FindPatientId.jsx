"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import useDateConverter from "@/hooks/useDateConverter";

export default function FindPatientId(props) {
  return (
    <>
      <Container fluid>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group controlId="searchMethod">
            <Form.Label htmlFor="cpf" className={styles.mainContent}>
              Escolha como pesquisar:
            </Form.Label>
            <Row>
              <Form.Group controlId="cpf">
                <Form.Check
                  inline
                  type="radio"
                  name="searchMethod"
                  id="cpf"
                  value="cpf"
                  onChange={props.handleChangeMethod}
                />
                <Form.Label className={styles.mainContent}>CPF</Form.Label>
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Check
                  inline
                  type="radio"
                  name="searchMethod"
                  id="name"
                  value="name"
                  onChange={props.handleChangeMethod}
                />
                <Form.Label htmlFor="name" className={styles.mainContent}>
                  Nome
                </Form.Label>
              </Form.Group>
            </Row>
          </Form.Group>

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
      </Container>
      <Container fluid>
        {props.errorMessage && props.errorMessage}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {props.searchPatients &&
              props.searchPatients.map((patient) => (
                <tr className={styles.patientContent} key={patient.id}>
                  <td className={styles.patientInfo}>{patient.id}</td>
                  <td className={styles.patientInfo}>{patient.name}</td>
                  <td className={styles.patientInfo}>
                    {useDateConverter(patient.bornDate)}
                  </td>
                  <td className={styles.patientInfo}>{patient.cpf}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
