import DentalSpecialtyDTO from "../interfaces/DentalSpecialtyDTO";
import DentistRegistrationDTO from "../interfaces/DentistRegistrationDTO";
import DoctorRegistrationDTO from "../interfaces/DoctorRegistrationDTO";
import MedicalSpecialtyDTO from "../interfaces/MedicalSpecialtyDTO";
import Pageable from "../interfaces/Pageable";
import HTTP from "./HTTP";

export function getAllDentists() {
  return HTTP.get<Pageable>("/api/dentist");
}

export function getAllDoctors() {
  return HTTP.get<Pageable>("/api/doctor");
}

export function getDentalSpecialties() {
  return HTTP.get<Pageable>("/api/dental-specialties");
}

export function getMedicalSpecialties() {
  return HTTP.get<Pageable>("/api/medical-specialties");
}

export function registerDentist(newDentist: DentistRegistrationDTO) {
  return HTTP.post("/api/dentist", newDentist);
}

export function registerDoctor(newDoctor: DoctorRegistrationDTO) {
  return HTTP.post("/api/doctor", newDoctor);
}

export function registerDentalSpecialty(newSpecialty: DentalSpecialtyDTO) {
  return HTTP.post("/api/dental-specialties", newSpecialty);
}

export function registerMedicalSpecialty(newSpecialty: MedicalSpecialtyDTO) {
  return HTTP.post("/api/medical-specialties", newSpecialty);
}
