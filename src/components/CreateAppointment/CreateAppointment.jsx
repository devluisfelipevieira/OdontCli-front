"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

export default function CreateAppointment(props) {
  return (
    <>
      <Container fluid>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Col>
              <Form.Label htmlFor="patientId">Id do paciente:</Form.Label>
              <Form.Control
                type="number"
                name="patientId"
                id="patientId"
                onChange={props.handleChange}
                value={props.dataForm.patientId}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="professionalId">Profissional:</Form.Label>
              <Form.Select
                required
                name="professionalId"
                id="professionalId"
                onChange={props.handleChange}
                value={props.dataForm.professionalId}
              >
                <option value="">Selecione</option>
                {props.professionalList &&
                  props.professionalList.map((professional) => (
                    <option value={professional.id}>{professional.name}</option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label htmlFor="procedureId">Procedimento</Form.Label>
              <Form.Select
                name="procedureId"
                id="procedureId"
                onChange={props.handleChange}
                value={props.dataForm.procedureId}
              >
                <option value="">Selecione</option>
                {props.procedureList &&
                  props.procedureList.map((procedure) => (
                    <option value={procedure.id}>{procedure.name}</option>
                  ))}
              </Form.Select>
            </Col>
            <Col>
              <Form.Label htmlFor="date">Data: </Form.Label>
              <Form.Control
                name="date"
                id="date"
                type="date"
                onChange={props.handleChange}
                value={props.dataForm.date}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label htmlFor="time">Horário: </Form.Label>
              <Form.Control
                name="time"
                id="time"
                type="time"
                onChange={props.handleChange}
                value={props.dataForm.time}
                placeholder="00:00"
              ></Form.Control>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            Gravar
          </Button>
        </Form>
      </Container>
    </>
  );
}
