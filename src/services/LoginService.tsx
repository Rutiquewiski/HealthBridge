import UserLoginData from "../interfaces/UserLoginData";
import axios from "axios";

export function requestLogin(userData: UserLoginData) {
  const headers = {
    "api-key": "YXBpIGtleSBoZWFsdGhicmlkZ2UgZ3VzdGF2byBydXRpcXVld2lza2k=",
    "Content-Type": "application/json",
  };

  axios
    .post("http://localhost:8080/api/key/login", userData, { headers: headers })
    .then((response) => {
      console.log(response);
    });
}
