"use client";

import useDateConverter from "@/hooks/useDateConverter";
import usePayedMessage from "@/hooks/usePayedMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

export default function Schedule(props) {
  return (
    <>
      <Container fluid>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Form.Group controlId="initialDate" as={Col}>
              <Form.Label htmlFor="initialDate">Data Inicial:</Form.Label>
              <Form.Control
                required
                type="date"
                id="initialDate"
                name="initialDate"
                onChange={props.handleChange}
                value={props.dataForm.initialDate}
              />
            </Form.Group>
            <Form.Group controlId="endDate" as={Col}>
              <Form.Label htmlFor="endDate">Data Final:</Form.Label>
              <Form.Control
                required
                type="date"
                id="endDate"
                name="endDate"
                onChange={props.handleChange}
                value={props.dataForm.endDate}
              />
            </Form.Group>
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
              <Button
                className={styles.searchBtn}
                variant="secondary"
                type="submit"
              >
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        {props.appointmentList.map((appointment) => (
          <>
            <div key={appointment.id}>
              <h3>Paciente: {appointment.patientName}</h3>
              <p>Data: {useDateConverter(appointment.date)}</p>
              <p>Horario: {appointment.time}</p>
              <p>Procedimento: {appointment.procedureName}</p>
              <p>Preço: R${appointment.value}</p>
              <p>Pagamento: {usePayedMessage(appointment.payed)}</p>
            </div>
          </>
        ))}
      </Container>
    </>
  );
}
