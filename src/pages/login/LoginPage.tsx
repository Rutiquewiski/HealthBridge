import { Button, Container, Input, Text } from "@chakra-ui/react";
import "./LoginPage.css";
import { useState } from "react";
import { requestLogin } from "../../services/LoginService";

function LoginPage() {
  const [usernameValue, setUsernameValue] = useState("");
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsernameValue(event.target.value);

  const [passwordValue, setPasswordValue] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(event.target.value);

  function login() {
    requestLogin({ username: usernameValue, password: passwordValue });
  }

  return (
    <>
      <div className="screen">
        <Container
          w="80%"
          h="50%"
          borderStyle="solid"
          borderRadius="8px"
          bgGradient="linear(to-l, blue.100, blue.400)"
          justifyContent="center"
          centerContent
        >
          <Text fontSize="3rem" m="15px">
            HealthBridge
          </Text>
          <Input
            variant="filled"
            placeholder="Username"
            m="5px"
            w="75%"
            value={usernameValue}
            onChange={handleUsernameChange}
          />
          <Input
            variant="filled"
            placeholder="Password"
            m="5px"
            w="75%"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <div className="buttons-div">
            <Button m="1rem" colorScheme="blue" onClick={login}>
              Login
            </Button>
            <Button m="1rem" colorScheme="blue">
              Can't log in?
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
