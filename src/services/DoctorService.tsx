import Pageable from "../interfaces/Pageable";
import HTTP from "./HTTP";

export function getAllDoctors() {
  return HTTP.get<Pageable>("/api/doctor");
}
