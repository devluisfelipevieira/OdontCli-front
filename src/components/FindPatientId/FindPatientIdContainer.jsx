"use client";
import axiosInstance from "@/helper/axios-instance";
import { useState } from "react";
import FindPatientId from "./FindPatientId";
import useDateConverter from "@/hooks/useDateConverter";

export default function FindPatientIdContainer() {
  const [selectMethod, setSelectMethod] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [searchPatients, setSearchPatients] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectMethod === "name") {
      const params = {
        name: searchContent.toUpperCase(),
      };
      try {
        await axiosInstance
          .get("pacientes-por-nome", {
            params: params,
          })
          .then((res) => {
            setSearchPatients(res.data);
            console.log(searchPatients);
            setErrorMessage(null);
          });
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setSearchPatients(null);
          setErrorMessage(error.response.data.error);
        } else {
          console.log(`Algo deu errado \n ${error}`);
        }
      }
    } else if (selectMethod === "cpf") {
      const params = {
        cpf: searchContent,
      };
      try {
        await axiosInstance
          .get("pacientes-por-cpf", {
            params: params,
          })
          .then((res) => {
            setSearchPatients(res.data);
            console.log(searchPatients);
            setErrorMessage(null);
          });
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setSearchPatients(null);
          setErrorMessage(error.response.data.error);
        } else {
          console.log(`Algo deu errado \n ${error}`);
        }
      }
    }
  };

  const handleChangeMethod = (e) => {
    const { value } = e.target;
    setSelectMethod(value);
  };

  const hundleChangeName = (e) => {
    const { value } = e.target;
    setSearchContent(value);
  };

  return (
    <FindPatientId
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      handleChangeMethod={handleChangeMethod}
      hundleChangeName={hundleChangeName}
      searchPatients={searchPatients}
    />
  );
}
