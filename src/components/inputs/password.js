import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useState } from "react";

export const PasswordInput = ({ isValid, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="md">
        <Input
          name="password"
          value={value}
          onChange={onChange}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Senha com no mínimo 6 caracteres"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            icon={showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            h="1.75rem"
            size="sm"
            onClick={onClickShowPassword}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage as="p">
          A senha deve conter ao menos 6 caracteres
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
