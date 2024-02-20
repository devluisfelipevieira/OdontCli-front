"use client";

import axiosInstance from "@/helper/axios-instance";
import useDateConverter from "@/hooks/useDateConverter";
import { useState } from "react";

export default function PatientAppointmentForm() {
  const [dataForm, setDataForm] = useState({
    patientId: "",
  });
  const [appointmentList, setAppointmentList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      patientId: dataForm.patientId,
    };

    axiosInstance
      .get("agendamentos-do-paciente", {
        params: params,
      })
      .then((res) => {
        setAppointmentList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="patientId" id="patientId">
          Id do Paciente:
        </label>
        <input
          type="number"
          id="patientId"
          name="patientId"
          onChange={handleChange}
          value={dataForm.patientId}
        />
        {/* <label htmlFor="name" id="name">
        Nome do Paciente:
      </label>
      <input type="text" /> */}
        <button type="submit">Pesquisar</button>
      </form>
      <div>
        {appointmentList.map((appointment) => (
          <div key={appointment.id}>
            <p>{useDateConverter(appointment.dateHour)}</p>
            <p>{appointment.procedureName}</p>
            <p>{appointment.professionalName}</p>
          </div>
        ))}
      </div>
    </>
  );
}
