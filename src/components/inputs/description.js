import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";

export const DescriptionTextarea = ({ isValid, value, onChange }) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Descrição</FormLabel>
      <Textarea
        name="description"
        value={value}
        onChange={onChange}
        placeholder="Descrição da receita"
      />
      {!isValid ? (
        <FormErrorMessage as="p">
          {/* Título deve ter ao menos 4 caracteres. */}
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
