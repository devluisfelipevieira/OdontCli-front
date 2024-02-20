"use client";

import axiosInstance from "@/helper/axios-instance";
import useDateConverter from "@/hooks/useDateConverter";
import { useEffect, useState } from "react";

export default function PatientSearcher() {
  const [patientName, setpatientName] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [searchPatient, setSearchPatient] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setpatientName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      name: patientName.toUpperCase(),
    };
    try {
      await axiosInstance
        .get("pesquisar-paciente", {
          params: params,
        })
        .then((res) => {
          console.log(res.data);
          setSearchPatient(res.data);
          setErrorMessage(null);
        });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setSearchPatient(null);
        setErrorMessage(error.response.data.error);
      } else {
        console.log(`Algo deu errado \n ${error}`);
      }
    }
  };

  useEffect(() => {
    console.log(searchPatient);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Nome do Paciente:</label>
        <input
          type="text"
          name="patientName"
          id="patientName"
          onChange={handleChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {searchPatient &&
        searchPatient.map((patient) => (
          <div key={patient.id}>
            <h4>{patient.name}</h4>
            <span>Id: {patient.id}</span>
            <span>
              Data de Nascimento: {useDateConverter(patient.bornDate)}
            </span>
            <button>Cadastro</button>
          </div>
        ))}
      {/*dessa forma verificamos se " errorMessage e searchPatient existe antes de tentar
        renderizar, evitando assim um erro de elemento undefined"*/}
    </>
  );
}
