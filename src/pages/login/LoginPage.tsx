import {
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import "./LoginPage.css";
import { useState } from "react";
import { requestLogin } from "../../services/LoginService";
import LoginResponseDTO from "../../interfaces/LoginResponseDTO";
import { AxiosResponse } from "axios";

function LoginPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsernameValue(event.target.value);

  const [passwordValue, setPasswordValue] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(event.target.value);

  const [show, setShow] = useState(false);
  const handleShowPasswordClick = () => setShow(!show);

  function login() {
    requestLogin({ username: usernameValue, password: passwordValue })
      .then((response: AxiosResponse<LoginResponseDTO>) => {
        if (response.status == 200) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Container
        w="80%"
        h="50%"
        borderStyle="solid"
        borderRadius="8px"
        bgGradient="linear(to-l, blue.100, blue.400)"
        justifyContent="center"
        centerContent
      >
        <Text fontSize="3rem" m="15px" marginBottom="25px">
          HealthBridge
        </Text>
        <Input
          variant="filled"
          placeholder="Username"
          m="5px"
          w="65%"
          value={usernameValue}
          onChange={handleUsernameChange}
        />
        <InputGroup m="5px" w="65%">
          <Input
            variant="filled"
            placeholder="Password"
            type={show ? "text" : "password"}
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.5rem"
              size="sm"
              onClick={handleShowPasswordClick}
              backgroundColor="blue.100"
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="buttons-div">
          <Button
            m="1rem"
            marginTop="0.3rem"
            colorScheme="blue"
            onClick={login}
          >
            Login
          </Button>
          <Button m="1rem" marginTop="0.3rem" colorScheme="blue">
            Can't log in?
          </Button>
        </div>
      </Container>
    </>
  );
}

export default LoginPage;
