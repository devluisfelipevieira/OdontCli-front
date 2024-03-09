"use client";

import axiosInstance from "@/helper/axios-instance";
import { useEffect, useState } from "react";
import PatientSearcher from "./PatientSearcher";

export default function PatientSearcherContainer() {
  const [patientId, setPatientId] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [searchPatient, setSearchPatient] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setPatientId(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (patientId === undefined || patientId === null || patientId === NaN) {
      setErrorMessage("Informação enviada não é valida");
    } else {
      try {
        await axiosInstance.get(`pacientes/${patientId}`).then((res) => {
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
    }
  };

  useEffect(() => {
    console.log(searchPatient);
  }, [searchPatient]);

  return (
    <PatientSearcher
      errorMessage={errorMessage}
      searchPatient={searchPatient}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
