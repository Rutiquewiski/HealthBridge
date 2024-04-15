export default interface AddressDTO {
    street_address: string;
    neighborhood?: string;
    postal_code: string;
    number: string;
    complement?: string; 
    city: string;
    state: string;
}