"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function PatientForm(props) {
  return (
    <>
      <Container>
        <Form onSubmit={props.handleSubmit}>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Nome Completo:</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={props.dataForm.name}
                onChange={props.handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="cpf">
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                type="text"
                id="cpf"
                name="cpf"
                value={props.dataForm.cpf}
                onChange={props.handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="bornDate">
              <Form.Label>Data de Nascimento:</Form.Label>
              <Form.Control
                type="date"
                id="bornDate"
                name="bornDate"
                value={props.dataForm.bornDate}
                onChange={props.handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="gender">
              <Form.Label>Gênero:</Form.Label>
              <Form.Select
                onChange={props.handleChange}
                required
                name="gender"
                id="gender"
                value={props.dataForm.gender}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="address">
              <Form.Label>Cidade:</Form.Label>
              <Form.Control
                type="text"
                id="address"
                name="address"
                value={props.dataForm.address}
                onChange={props.handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                id="email"
                name="email"
                value={props.dataForm.email}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="phone">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                type="text"
                id="phone"
                name="phone"
                value={props.dataForm.phone}
                onChange={props.handleChange}
              />
            </Form.Group>
          </Row>
          <Button variant="info" type="submit">
            {props.button}
          </Button>
        </Form>
      </Container>
    </>
  );
}
