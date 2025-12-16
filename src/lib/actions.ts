'use server';
import { Employee } from "@/models/model";
import axios from "axios";


export async function addEmployee(employee: Employee) {

  try {
    await axios.post('https://688c18f3cd9d22dda5cc11d5.mockapi.io/employess', employee);
    return { success: true, message: 'Employee added successfully' }
  } catch (err) {
    return { success: false, message: 'Failed to add employee' }
  }


}






