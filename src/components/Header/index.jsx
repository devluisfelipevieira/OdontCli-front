"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Link href={"/"}>OdontCli</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="collapsible-nav-dropdown">
              <Link href={"cadastro-paciente"}>Cadastrar Paciente</Link>
              <Link href={"pesquisar-paciente"}>Pesquisar Paciente</Link>
              <NavDropdown.Divider />
              <Link href={"cadastro-profissional"}>Cadastrar Profissional</Link>
              <Link href={"profissional"}>Visualizar Profissional</Link>
              <Link href={"cadastro-procedimento"}>Cadastrar Procedimento</Link>
              <Link href={"procedimento"}>Visualizar Procedimento</Link>
              <Link href={"cadastro-usuario"}>Cadastrar usuário</Link>
              <Link href={"deletar-usuario"}>Excluir usuário</Link>
            </NavDropdown>
            <Link href={"/recepcao"}>Recepção</Link>
            <NavDropdown title="Agendamentos" id="collapsible-nav-dropdown">
              <Link href="agendamento">Agenda</Link>
              <Link href="agendamento-paciente">Verificar agendamento</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
