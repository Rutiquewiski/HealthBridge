import Pageable from "../interfaces/Pageable";
import HTTP from "./HTTP";

export function getAllPatients() {
  return HTTP.get<Pageable>("/api/patient");
}
