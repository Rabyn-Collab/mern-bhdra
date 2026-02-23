'use server';

import { Employee } from "@/models/employee";
import axios from "axios";
import { revalidatePath } from "next/cache";



export async function addEmployee(employee: Employee) {

  try {
    await axios.post('https://6985b6ac6964f10bf2543623.mockapi.io/employees', employee);

    revalidatePath('/');

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



export async function updateEmployee(employee: Employee) {

  try {
    await axios.put(`https://6985b6ac6964f10bf2543623.mockapi.io/employees/${employee.id}`, employee);

    revalidatePath('/');

    return {
      success: true,
      message: 'Employee updated successfully'
    }
  } catch (err: any) {

    return {
      success: false,
      message: err.message
    }

  }



}




export async function removemployee(id: string) {

  try {
    await axios.delete(`https://6985b6ac6964f10bf2543623.mockapi.io/employees/${id}`);
    revalidatePath('/');
    return {
      success: true,
      message: 'Employee removed successfully'
    }
  } catch (err: any) {

    return {
      success: false,
      message: err.message
    }

  }



}