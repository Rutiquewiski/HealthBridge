import AddressDTO from "./AdressDTO";
import DentalSpecialtyDTO from "./DentalSpecialtyDTO";

export default interface DentistRegistrationDTO {
    name: string;
    email: string;
    phone: string;
    document: string;
    address: AddressDTO;
    specialties: DentalSpecialtyDTO[];
}