"use client";

import axiosInstance from "@/helper/axios-instance";
import { useState } from "react";
import PatientForm from "./PatientForm";

export default function PostPatientFormContainer() {
  const [dataForm, setDataForm] = useState({
    name: "",
    bornDate: "",
    gender: "",
    cpf: "",
    city: "",
    email: "",
    phone: "",
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
    const postData = {
      name: dataForm.name,
      bornDate: dataForm.bornDate,
      gender: dataForm.gender,
      cpf: dataForm.cpf,
      city: dataForm.city,
      email: dataForm.email,
      phone: dataForm.phone,
    };
    try {
      await axiosInstance.post("pacientes", postData);
      console.log(postData);
      alert(`Paciente ${dataForm.name} cadastrado com sucesso`);
      setDataForm({
        name: "",
        bornDate: "",
        gender: "",
        cpf: "",
        city: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  return (
    <PatientForm
      dataForm={dataForm}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      button={"Cadastrar"}
    />
  );
}
