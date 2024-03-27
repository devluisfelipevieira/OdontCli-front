"use client";

import axiosInstance from "@/helper/axios-instance";
import { useEffect, useState } from "react";
import Schedule from "./Schedule";

export default function ScheduleContainer() {
  const [dataForm, setDataForm] = useState({
    initialDate: "",
    endDate: "",
    professionalId: "",
  });

  const [appointmentList, setAppointmentList] = useState([]);
  const [professionalList, setProfessionalList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  const getProfessionals = async () => {
    await axiosInstance.get("profissionais").then((res) => {
      setProfessionalList(res.data);
    });
  };

  useEffect(() => {
    getProfessionals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      initialDate: dataForm.initialDate,
      endDate: dataForm.endDate,
      professionalId: dataForm.professionalId,
    };
    axiosInstance
      .get("agendamentos", {
        params: params,
      })
      .then((res) => {
        console.log(dataForm.endDate);
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
    <Schedule
      professionalList={professionalList}
      dataForm={dataForm}
      appointmentList={appointmentList}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
