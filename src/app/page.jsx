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
        setPatientList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Início</h1>
      <h1>Todos os Pacientes</h1>
      <ul>
        {patientList.map((patient) => (
          <>
            <li>{patient.name}</li>
            <li>{useDateConverter(patient.bornDate)}</li>
          </>
        ))}
      </ul>
    </>
  );
}
