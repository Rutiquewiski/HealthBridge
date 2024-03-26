import LoginResponseDTO from "../interfaces/LoginResponseDTO";
import UserLoginData from "../interfaces/UserLoginData";
import HTTP from "./HTTP";

export function requestLogin(userData: UserLoginData) {
  const headers = {
    "api-key": "YXBpIGtleSBoZWFsdGhicmlkZ2UgZ3VzdGF2byBydXRpcXVld2lza2k=",
    "Content-Type": "application/json",
  };

  return HTTP.post<LoginResponseDTO>("/api/key/login", userData, {
    headers: headers,
  }).then((response) => {
    localStorage.setItem("token", response.data.token);
    return response;
  });
}

export function requestLogout() {
  localStorage.removeItem("token");
  window.location.reload();
}
