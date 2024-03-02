"use client";

import useDateConverter from "@/hooks/useDateConverter";
import axiosInstance from "@/helper/axios-instance";
import { useEffect, useState } from "react";
import usePayedMessage from "@/hooks/usePayedMessage";

export default function Schedule() {
  const [dataForm, setDataForm] = useState({
    initialDate: "",
    endDate: "",
    professionalId: "",
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
      initialDate: dataForm.initialDate,
      endDate: dataForm.endDate + "T24:00",
      professionalId: dataForm.professionalId,
    };

    axiosInstance
      .get("agendamentos", {
        params: params,
      })
      .then((res) => {
        setAppointmentList(res.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(appointmentList);
  }, [appointmentList]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="initialDate">Data Inicial:</label>
        <input
          required
          type="date"
          id="initialDate"
          name="initialDate"
          onChange={handleChange}
          value={dataForm.initialDate}
        />
        <label htmlFor="endDate">Data Final:</label>
        <input
          required
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleChange}
          value={dataForm.endDate}
        />
        <label htmlFor="professionalId">Profissional:</label>
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
        <button type="submit">Pesquisar</button>
      </form>
      <div>
        {appointmentList.map((appointment) => (
          <>
            <div key={appointment.id}>
              <h3>Paciente: {appointment.patientName}</h3>
              <p>Data: {useDateConverter(appointment.dateHour)}</p>
              <p>Procedimento: {appointment.procedureName}</p>
              <p>Preço: R${appointment.value}</p>
              <p>Pagamento: {usePayedMessage(appointment.payed)}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
