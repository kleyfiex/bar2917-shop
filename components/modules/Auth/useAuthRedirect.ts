import { useAuth } from "@/components/hocs/useAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    const { user } = useAuth()

    const { replace } = useRouter()

    useEffect(() => {
        if(user) {
            replace('/')
        }
    }, [user])
}