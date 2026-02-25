import mongoose, { models } from "mongoose";



const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Employee = models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;