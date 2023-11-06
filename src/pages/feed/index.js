import { FeedContainerStyled, RecipeCardStyled } from "./styled";
import { useEffect, useState } from "react";
import { ListRecipes } from "../../constants";
import {
  goToRecipeDetailPage,
  goToAddRecipePage,
} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useProtectedPage } from "../../hooks";

export const FeedPage = () => {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();
  useProtectedPage(navigate);

  useEffect(() => {
    ListRecipes()
      .then((data) => {
        // console.log(data);
        setRecipes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id);
  };

  const onClickAddButton = () => {
    goToAddRecipePage(navigate);
  };

  return (
    <FeedContainerStyled>
      {recipes.slice(0,10).map((recipe, i) => (
        
        <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.id)}>

        {/* <RecipeCardStyled key={i} onClick={() => goToRecipeDetailPage (navigate, recipe.id)} > */}

          <img
            src={recipe.imageUrl}
            alt="imagem"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/seed/${i}/200/200`;
            }}
          />
          <Text>{recipe.title.toUpperCase()}</Text>
        </RecipeCardStyled>
      ))}
      <Button onClick={() => onClickAddButton()} variant="add-recipe">
        +
      </Button>
    </FeedContainerStyled>
  );
};
