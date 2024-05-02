"use client";

import axiosInstance from "@/helper/axios-instance";
import dayjs from "dayjs";
import { useState } from "react";
import PatientForm from "./PatientForm";

export default function PutPatientFormContainer(props) {
  const formatDate = (dateString) => {
    const date = dayjs(dateString).format("YYYY-MM-DD");
    return date;
  };
  const [dataForm, setDataForm] = useState({
    id: props.patient.id,
    name: props.patient.name,
    bornDate: formatDate(props.patient.bornDate),
    gender: props.patient.gender,
    cpf: props.patient.cpf,
    address: props.patient.address,
    email: props.patient.email,
    phone: props.patient.phone,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const putData = {
      name: dataForm.name,
      bornDate: dataForm.bornDate,
      gender: dataForm.gender,
      cpf: dataForm.cpf,
      address: dataForm.address,
      email: dataForm.email,
      phone: dataForm.phone,
    };
    try {
      await axiosInstance.put(`pacientes/${dataForm.id}`, putData);
      alert("Cadastro atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <PatientForm
      dataForm={dataForm}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      button={"Atualizar"}
    />
  );
}
