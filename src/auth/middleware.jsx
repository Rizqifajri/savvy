import { currentUserAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const AuthMiddleware = ({ children }) => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  }, [currentUser])
  
  return <>
  {children}
  </>
}

