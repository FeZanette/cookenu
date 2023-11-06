import { useForm } from "../../hooks";
import { useEffect, useState } from "react";
import {
  Signup,
  validateEmail,
  validateName,
  validatePassword,
} from "../../constants";
import {
  FormContainer,
  CenteredPageContainer as SignupPageContainer,
  EmailInput,
  PasswordInput,
  NameInput,
} from "../../components";
import { Button } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
    name: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (form.email) {
        setIsEmailValid(validateEmail(form.email));
    }
}, [form.email]);

useEffect(() => {
    if (form.password) {
        setIsPasswordValid(validatePassword(form.password));
    }
}, [form.password]);

useEffect(() => {
    if (form.name) {
        setIsNameValid(validateName(form.name));
    }
}, [form.name]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name));
    if (isEmailValid === true && isPasswordValid === true) {
      clearInputs();
  }
  try {
      const { token } =
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        (await Signup({
          email: form.email,
          password: form.password,
          name: form.name,
        }));
      localStorage.setItem("cookenu.token", token);
      goToFeedPage(navigate);
    } catch (error) {
      // console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="logo do Cookenu" />

          <NameInput
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
          />
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
          <Button type="submit" variant="form-main">
            Cadastrar
          </Button>
        </form>
      </FormContainer>
    </SignupPageContainer>
  );
};
