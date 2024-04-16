import Pageable from "../interfaces/Pageable";
import PatientRegistrationDTO from "../interfaces/PatientRegistrationDTO";
import HTTP from "./HTTP";

export function getAllPatients() {
  return HTTP.get<Pageable>("/api/patient");
}

export function registerPatient(newPatient: PatientRegistrationDTO) {
  return HTTP.post("/api/patient", newPatient);
}
