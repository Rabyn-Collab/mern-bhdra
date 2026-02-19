'use server';

import { Employee } from "@/models/employee";
import axios from "axios";





export async function addEmployee(employee: Employee) {

  try {
    await axios.post('https://6985b6ac6964f10bf2543623.mockapi.io/employees', employee);

    return {
      success: true,
      message: 'Employee added successfully'
    }
  } catch (err: any) {

    return {
      success: false,
      message: err.message
    }

  }






}