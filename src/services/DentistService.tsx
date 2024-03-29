import Pageable from "../interfaces/Pageable";
import HTTP from "./HTTP";

export function getAllDentists() {
  return HTTP.get<Pageable>("/api/dentist");
}
