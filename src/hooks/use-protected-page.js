import { useEffect } from "react"
import { goToLoginPage } from "../routes/coordinator"


export const useProtectedPage = (navigate) => {
    useEffect(() => {
        const token = localStorage.getItem("cookenu.token")
        if(!token) {
          goToLoginPage(navigate)
        }
      }, [navigate])
}