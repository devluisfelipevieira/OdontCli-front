"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

export default function PatientAppointmentForm(props) {
  return (
    <>
      <Container>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="patientId" id="patientId">
                Id do Paciente:
              </Form.Label>
              <Form.Control
                type="number"
                id="patientId"
                name="patientId"
                onChange={props.handleChange}
                value={props.dataForm.patientId}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Button
                className={styles.searchBtn}
                variant="secondary"
                type="submit"
              >
                Pesquisar
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Procedimento</th>
              <th>Profissional</th>
            </tr>
          </thead>
          <tbody>
            {props.appointmentList.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.procedureName}</td>
                <td>{appointment.professionalName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
