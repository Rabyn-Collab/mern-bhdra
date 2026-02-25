'use server';

import { revalidatePath } from "next/cache";
import { connectDb } from "./db";
import Employee from "@/models/Employee";
import { EmployeeInterface } from "@/models/employeeInterface";



export async function getEmployee(id: string) {
  await connectDb();
  try {
    const employee = await Employee.findById(id);

    return {
      success: true,
      data: employee
    }
  } catch (err: any) {

    return {
      success: false,
      message: err.message
    }

  }

}


export async function getEmployees() {
  await connectDb();
  try {
    const employees = await Employee.find({});

    return {
      success: true,
      data: employees
    }
  } catch (err: any) {

    return {
      success: false,
      message: err.message
    }

  }

}


export async function addEmployee(employee: EmployeeInterface) {
  await connectDb();
  try {
    await Employee.create(employee);
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




export async function updateEmployee(employee: EmployeeInterface) {
  await connectDb();
  try {
    const isExit = await Employee.findById(employee.id);

    if (!isExit) return {
      success: false,
      message: 'Employee not found'
    }
    await Employee.findByIdAndUpdate(employee.id, employee);
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
  await connectDb();
  try {

    await Employee.findByIdAndDelete(id);
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