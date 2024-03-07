"use client";
import axiosInstance from "@/helper/axios-instance";
import useDateConverter from "@/hooks/useDateConverter";
import { useState } from "react";

export default function SearchId() {
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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchMethod">Escolha como pesquisar:</label>
        <label htmlFor="cpf">CPF</label>
        <input
          type="radio"
          name="searchMethod"
          id="cpf"
          value="cpf"
          onChange={handleChangeMethod}
        />
        <label htmlFor="name">Nome</label>
        <input
          type="radio"
          name="searchMethod"
          id="name"
          value="name"
          onChange={handleChangeMethod}
        />
        <input
          type="text"
          name="searchContent"
          id="searchContent"
          onChange={hundleChangeName}
        />
        <button type="submit">Pesquisar</button>
      </form>
      <div>
        {errorMessage && errorMessage}
        {searchPatients &&
          searchPatients.map((patient) => (
            <>
              <div key={patient.id}>
                <span>ID:{patient.id}</span>
                <span>Nome: {patient.name}</span>
                <span>
                  Data de Nascimento:{useDateConverter(patient.bornDate)}
                </span>
                <span>CPF: {patient.cpf}</span>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
