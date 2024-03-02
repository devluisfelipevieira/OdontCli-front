"use client";

import axiosInstance from "@/helper/axios-instance";
import { useEffect, useState } from "react";
import PutPatientFormContainer from "@/components/PatientForm/PutPatientFormContainer";

export default function PatientSearcher() {
  const [patientName, setPatientName] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [searchPatient, setSearchPatient] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setPatientName(value);
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
          <PutPatientFormContainer patient={patient} />
        ))}
      {/*dessa forma verificamos se " errorMessage e searchPatient existe antes de tentar
        renderizar, evitando assim um erro de elemento undefined"*/}
    </>
  );
}
