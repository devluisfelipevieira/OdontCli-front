"use client";

import axiosInstance from "@/helper/axios-instance";
import PatientAppointmentForm from "./PatientAppointmentForm"
import { useState } from "react";

export default function PatientAppointmentFormContainer() {
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
    
    return(
        <PatientAppointmentForm 
            dataForm={dataForm}
            appointmentList={appointmentList}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}