import { HeaderStyled } from "./styled";
import { Button } from "@chakra-ui/react";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const buttonAction = () => {
    // console.log("isLoggedIn:", isLoggedIn);
    if (isLoggedIn) {
      localStorage.removeItem("cookenu.token");
      setIsLoggedIn(false);
    }
    // console.log("Navigating to login page");
    goToLoginPage(navigate);
  };

  const [buttonText, setButtonText] = useState(isLoggedIn ? "Logout" : "Login");

  useEffect(() => {
    const token = localStorage.getItem("cookenu.token")
    if (!token) {
      setButtonText("Login")
    } else {
      setButtonText("Logout")
    }
  }, [isLoggedIn])

  return (
    <HeaderStyled>
      <Button onClick={() => goToFeedPage(navigate)} variant="header">
        Cookenu
      </Button>
      <Button onClick={buttonAction} variant="header">
        {buttonText}
      </Button>
    </HeaderStyled>
  );
};
