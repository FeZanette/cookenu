import { useForm, useProtectedPage } from "../../hooks";
import { useEffect, useState } from "react";
import { AddRecipe, validateTitle, validateUrl } from "../../constants";
import {
  FormContainer,
  CenteredPageContainer,
  ImageInput,
  TitleInput,
  DescriptionTextarea,
} from "../../components";
import { Button } from "@chakra-ui/react";
import { PageTitleStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";

export const AddRecipePage = () => {
  const [form, onChangeInputs, clearInputs] = useForm({
    title: "",
    description: "",
    imageUrl: "",
  });

  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isUrlValid, setIsUrlValid] = useState(true);

  const navigate = useNavigate();
  useProtectedPage(navigate);

  // CÓDIGO DO VÍDEO
  // useEffect(() => {
  //   setIsTitleValid(validateName(form.title, 4));
  //   setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.imageUrl));
  // }, [form]);

  useEffect(() => {
    if (form.title) {
      setIsTitleValid(validateTitle(form.title));
    }
  }, [form.title]);

  useEffect(() => {
    if (form.image) {
      setIsUrlValid(validateUrl(form.image));
    }
  }, [form.image]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUrlValid && isTitleValid) {
        await AddRecipe({
          title: form.title,
          description: form.description,
          imageUrl: form.imageUrl,
        });
      }
      alert("Receita cadastrada com sucesso!");
      clearInputs()
      goToFeedPage(navigate)
    } catch (error) {
      // console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <CenteredPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <PageTitleStyled>Adicionar nova receita</PageTitleStyled>

          <TitleInput
            value={form.title}
            onChange={onChangeInputs}
            isValid={isTitleValid}
          />
          <DescriptionTextarea
            value={form.description}
            onChange={onChangeInputs}
            isValid={true}
          />
          <ImageInput
            value={form.imageUrl}
            onChange={onChangeInputs}
            isValid={isUrlValid}
          />

          <Button type="submit" variant="form-main">
            Cadastrar
          </Button>
        </form>
      </FormContainer>
    </CenteredPageContainer>
  );
};
