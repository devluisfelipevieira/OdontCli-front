"use client";
import PutPatientFormContainer from "@/components/PatientForm/PutPatientFormContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function PatientSearcher(props) {
  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group as={Col} controlId="patientId">
          <Form.Label>ID do Paciente:</Form.Label>
          <Form.Control
            type="number"
            name="patientId"
            id="patientId"
            onChange={props.handleChange}
          />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Pesquisar
        </Button>
      </Form>
      {props.errorMessage && <p>{props.errorMessage}</p>}
      {props.searchPatient && (
        <PutPatientFormContainer patient={props.searchPatient} />
      )}
      {/*dessa forma verificamos se " errorMessage e searchPatient existe antes de tentar
        renderizar, evitando assim um erro de elemento undefined"*/}
    </>
  );
}
