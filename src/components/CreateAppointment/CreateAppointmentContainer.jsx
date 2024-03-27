"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/helper/axios-instance";
import CreateAppointment from "./CreateAppointment";
import useDateConverter from "@/hooks/useDateConverter";

export default function CreateAppointmentContainer() {
  const [dataForm, setDataForm] = useState({
    patientId: "",
    professionalId: "",
    procedureId: "",
    date: "",
    time: "",
  });

  const [professionalList, setProfessionalList] = useState([]);
  const [procedureList, setProcedureList] = useState([]);

  const getProfessionals = async () => {
    await axiosInstance.get("profissionais").then((res) => {
      setProfessionalList(res.data);
    });
  };

  const getProcedures = async () => {
    await axiosInstance.get("procedimentos").then((res) => {
      setProcedureList(res.data);
    });
  };

  useEffect(() => {
    getProfessionals();
    getProcedures();
  }, []);

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
      date: dataForm.date,
      time: dataForm.time,
    };

    try {
      const appointment = await axiosInstance.post("agendamentos", postData);
      console.log(appointment.data);
      alert(
        `${appointment.data.procedureName} para paciente ${
          appointment.data.patientName
        } com Dr. ${
          appointment.data.professionalName
        } para a data ${useDateConverter(
          appointment.data.date
        )} marcado com sucesso!`
      );
      setDataForm({
        patientId: "",
        professionalId: "",
        procedureId: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateAppointment
      dataForm={dataForm}
      professionalList={professionalList}
      procedureList={procedureList}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
