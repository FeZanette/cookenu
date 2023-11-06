import { useForm } from "../../hooks";
import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../../constants";
import {
  FormContainer,
  CenteredPageContainer,
  EmailInput,
  PasswordInput,
} from "../../components";
import { Button } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { goToSignupPage, goToFeedPage } from "../../routes/coordinator";
import { Login } from "../../constants";

export const LoginPage = ({ setIsLoggedIn }) => {
  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);
  // const [userNotFoundMessage, setUserNotFoundMessage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (form.email) {
      setIsEmailValid(validateEmail(form.email));
    }
    setUserNotFound(false);
  }, [form.email]);

  useEffect(() => {
    if (form.password) {
      setIsPasswordValid(validatePassword(form.password));
    }
    setUserNotFound(false);
  }, [form.password]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    if (isEmailValid === true && isPasswordValid === true) {
      clearInputs();
    }
    try {
      const { token } =
        isEmailValid &&
        isPasswordValid &&
        (await Login({
          email: form.email,
          password: form.password,
        }));
      localStorage.setItem("cookenu.token", token);
      // setIsLoggedIn(true);
      goToFeedPage(navigate);
    } catch (e) {
      console.log(e.response.data.message);
      // const message = e.response.data.message;
      // if (
      //   message === "Password incorreto" ||
      //   message === "Email não cadastrado"
      // ) {
      //   setUserNotFoundMessage(
      //     "Usuário não encontrado. Verifique se a senha e o e-mail estão corretos"
      //   );
      //   setUserNotFound(true);
      // }
    }
  };

  return (
    <CenteredPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="logo do Cookenu" />
          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />
         
          <Button
            onClick={() => goToFeedPage(navigate)}
            type="submit"
            variant="form-main"
          >
            Enviar
          </Button>
          <Button
            onClick={() => goToSignupPage(navigate)}
            type="button"
            variant="for-secondary"
          >
            Não possui conta? Cadastre-se
          </Button>
        </form>
      </FormContainer>
    </CenteredPageContainer>
  );
};
