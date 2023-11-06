import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  FeedPage,
  AddRecipePage,
  RecipeDetailPage,
} from "../pages";
import { Header } from "../components";
import { useState } from "react";

export const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
