import Pageable from "../interfaces/Pageable";
import HTTP from "./HTTP";

export function getAllDentistAppointments() {
  return HTTP.get<Pageable>("/api/appointment/dentist");
}

export function getAllDoctorAppointments() {
  return HTTP.get<Pageable>("/api/appointment/doctor");
}
