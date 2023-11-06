import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "laranja.500",
        },
        "form-main": {
          width: "100%",
          bg: "laranja.500",
          color: "white",
          _hover: {
            bg: "white",
            color: "laranja.500",
            border: "3px solid #FE7E02",
          },
        },
        "form-secondary": {
          width: "100%",
          bg: "white",
          color: "laranja.500",
          _hover: {
            fontWeight: "normal",
            color: "black",
            textDecoration: "underline",
            border: "1px solid grey",
          },
        },
        "add-recipe": {
          borderRadius: "50%",
          border: "1px solid black",
          fontSize: "1.5rem",
          width: "50px",
          height: "50px",
          padding: "5px",
          bg: "laranja.500",
          position: "fixed",
          bottom: "15px",
          right: "15px",
          transition: "0.5s",
          _hover: {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  colors: {
    laranja: {
      500: "#FE7E02",
    },
  },
});
