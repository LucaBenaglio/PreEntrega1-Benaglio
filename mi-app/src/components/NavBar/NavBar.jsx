import "./NavBar.css"
import Logo from "../../assets/LogoReact.webp"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () =>{
    return(
        <nav className="navegacion">
            <img className="logo" src={Logo} alt="logo" />
            <ul className="list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Componentes</a></li>
                <li><a href="#">Perifericos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
