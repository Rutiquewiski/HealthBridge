import AddressDTO from "./AdressDTO";
import MedicalSpecialtyDTO from "./MedicalSpecialtyDTO";

export default interface DoctorRegistrationDTO {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: AddressDTO;
    specialties: MedicalSpecialtyDTO[];
}