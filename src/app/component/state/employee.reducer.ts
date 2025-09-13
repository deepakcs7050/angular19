import { createReducer } from "@ngrx/store";
import { Employee } from "./employee.store";


export const intitalState :ReadonlyArray<Employee> = [
    { id: 1, name: "Deepak", age: 26, salary: 50000 },
    { id: 2, name: "John", age: 30, salary: 60000 },
    { id: 3, name: "Alice", age: 28, salary: 55000 },
    { id: 4, name: "Bob", age: 32, salary: 70000 },
  
]
export const employeeReducer = createReducer(
    intitalState
)