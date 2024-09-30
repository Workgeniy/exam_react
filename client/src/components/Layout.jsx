import { useAuth } from '../hooks/useAuth.js'
import { useNavigate} from "react-router-dom";
import {TOKEN} from "../app.constans.js";
import Cookies from "js-cookie";



const Layout = ({ children }) => {
    //useCheckToken()

    const navigate = useNavigate();
    const { isAuth, setIsAuth} = useAuth()
    const logoutHandler = () => {
        Cookies.remove(TOKEN)
        setIsAuth(false)
        navigate('/')
    }

    return(
        <div>
            <button style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'grey',
                borderRadius: '10px',
                fontSize: '18px'
            }} onClick={logoutHandler}>Выйти из аккаунта</button>
            { children }
        </div>
    )
}

export default Layout