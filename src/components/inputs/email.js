import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const EmailInput = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Email</FormLabel>
      <Input
        name="email"
        //   type="email"
        value={value}
        onChange={onChange}
        placeholder="email"
      />
      {!isValid ? (
        <FormErrorMessage as="p">E-mail inválido.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
