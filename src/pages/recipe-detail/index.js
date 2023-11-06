import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetRecipe } from "../../constants";
import { PageContainer } from "./style";
import { useProtectedPage } from "../../hooks";

export const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  const navigate = useNavigate()
  useProtectedPage(navigate)

  useEffect(() => {
    GetRecipe(id)
      .then((recipe) => {
        setRecipe(recipe);
        console.log(recipe);
      })
      .catch((e) => alert(e.response.data.message));
  }, [id]);

  return !recipe ? (
    <h1>Não há receitas com esse id</h1>
  ) : (
    <PageContainer>
      <img src={recipe.imageUrl} alt="imagem da receita" />
      <h1>{recipe.title.toUpperCase()}</h1>
      <p>{recipe.description}</p>
    </PageContainer>
  );
};
