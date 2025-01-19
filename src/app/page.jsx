"use client";
import axiosInstance from "@/helper/axios-instance";
import { useEffect, useState } from "react";

export default function Home() {
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("pacientes")
      .then((res) => {
        setPatientList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Pacientes Cadastrados</h1>
      <ul>
        {patientList.map((patient) => (
          <>
            <li>
              {patient.name} | ID: {patient.id} | Data de Nascimento:{" "}
              {patient.bornDate} | CPF: {patient.cpf}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
