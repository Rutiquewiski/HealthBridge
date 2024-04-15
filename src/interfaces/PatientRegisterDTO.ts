import AddressDTO from "./AdressDTO";

export default interface PatientRegistrationDTO {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: AddressDTO;
    medicalHistory?: string;
}