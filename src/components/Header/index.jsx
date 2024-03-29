"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Link class={styles.mainNavLink} href={"/"}>
          OdontCli
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="collapsible-nav-dropdown">
              <Link class={styles.navLink} href={"/cadastro-paciente"}>
                Cadastrar Paciente
              </Link>
              <Link class={styles.navLink} href={"/pesquisar-id"}>
                Buscar ID de Paciente
              </Link>
              <Link class={styles.navLink} href={"/atualizar-cadastro"}>
                Atualizar Cadastro do Paciente
              </Link>
              {/* <NavDropdown.Divider />
              <Link href={"/cadastro-profissional"}>
                Cadastrar Profissional
              </Link>
              <Link href={"/profissional"}>Visualizar Profissional</Link>
              <Link href={"/cadastro-procedimento"}>
                Cadastrar Procedimento
              </Link>
              <Link href={"/procedimento"}>Visualizar Procedimento</Link>
              <Link href={"/cadastro-usuario"}>Cadastrar usuário</Link>
              <Link href={"/deletar-usuario"}>Excluir usuário</Link> */}
              {/* será implementado quando houver sistema de login*/}
            </NavDropdown>
            <NavDropdown title="Agendamentos" id="collapsible-nav-dropdown">
              <Link class={styles.navLink} href="/agendamento">
                Agenda
              </Link>
              <Link class={styles.navLink} href="/criar-agendamento">
                Novo agendamento
              </Link>
              <Link class={styles.navLink} href="/agendamento-paciente">
                Verificar agendamento
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
