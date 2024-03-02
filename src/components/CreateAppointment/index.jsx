"use client";

import { useState } from "react";
import axiosInstance from "@/helper/axios-instance";

export default function CreateAppointment() {
  const [dataForm, setDataForm] = useState({
    patientId: "",
    professionalId: "",
    procedureId: "",
    dateHour: "",
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
      patientId: dataForm.patientId,
      professionalId: dataForm.professionalId,
      procedureId: dataForm.procedureId,
      dateHour: dataForm.dateHour,
    };

    try {
      const appointment = await axiosInstance.post("agendamentos", postData);
      console.log(appointment);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientId">Id do paciente:</label>
        <input
          type="number"
          name="patientId"
          id="patientId"
          onChange={handleChange}
          value={dataForm.patientId}
        />
        {/* <input type="text" value={dataForm.patientName} disabled/> */}
        <label htmlFor="professionalId">Profissional: </label>
        <select
          required
          name="professionalId"
          id="professionalId"
          onChange={handleChange}
          value={dataForm.professionalId}
        >
          <option value="">Selecione</option>
          <option value="2">Catarina Biancut</option>
        </select>
        <label htmlFor="procedureId">Procedimento</label>
        <select
          name="procedureId"
          id="procedureId"
          onChange={handleChange}
          value={dataForm.procedureId}
        >
          <option value="">Selecione</option>
          <option value="2">Limpeza</option>
        </select>
        <label htmlFor="dateHour">Data e hora: </label>
        <input
          name="dateHour"
          id="dateHour"
          type="datetime-local"
          onChange={handleChange}
          value={dataForm.dateHour}
        ></input>
        <button type="submit">Gravar</button>
      </form>
    </>
  );
}
