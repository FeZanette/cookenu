export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToSignupPage = (navigate) => {
    navigate("/signup")
}
export const goToFeedPage = (navigate) => {
    navigate("/feed")
}
export const goToRecipeDetailPage = (navigate, id) => {
    navigate(`/recipe/${id}`)
}
export const goToAddRecipePage = (navigate) => {
    navigate("/add-recipe")
}