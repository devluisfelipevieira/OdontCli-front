"use client";
import axiosInstance from "@/helper/axios-instance";
import useDateConverter from "@/hooks/useDateConverter";
import { useEffect, useState } from "react";

export default function Home() {
  const [patientList, setPatientList] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("pacientes")
      .then((res) => {
        const patientsWithConvertedDates = res.data.map((patients) => ({
          ...patients,
          bornDate: useDateConverter(patients.bornDate),
        }));

        setPatientList(patientsWithConvertedDates);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Início</h1>
      <h1>Pacientes Cadastrados</h1>
      <ul>
        {patientList.map((patient) => (
          <>
            <li>
              ID:{patient.id} - {patient.name} - Data de Nascimento{" "}
              {patient.bornDate}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
