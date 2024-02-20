"use client";

import axiosInstance from "@/helper/axios-instance";
import { useState } from "react";

export default function PatientForm(props) {
  const [dataForm, setDataForm] = useState({
    name: "",
    bornDate: "",
    gender: "",
    cpf: "",
    address: "",
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
      address: dataForm.address,
      email: dataForm.email,
      phone: dataForm.phone,
    };
    try {
      await axiosInstance.post("pacientes", postData);
      setDataForm({
        name: "",
        bornDate: "",
        gender: "",
        cpf: "",
        address: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome Completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataForm.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="bornDate">Data de Nascimento:</label>
        <input
          type="date"
          id="bornDate"
          name="bornDate"
          value={dataForm.bornDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="gender">Gênero:</label>
        <select
          onChange={handleChange}
          required
          name="gender"
          id="gender"
          value={dataForm.gender}
        >
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={dataForm.cpf}
          onChange={handleChange}
          required
        />
        <label htmlFor="address">Cidade:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={dataForm.address}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={dataForm.phone}
          onChange={handleChange}
        />
        <button type="submit">{props.button}</button>
      </form>
    </>
  );
}
