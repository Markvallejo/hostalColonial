import React from "react";
import { Link } from "gatsby"

import { MenuContainer } from "./menu.style";

const Menu = () => {
    return(
        <MenuContainer>
            <Link to="/"> <p>Inicio</p> </Link>
            <a href="#contacto"><p>Reservar</p> </a>
            <a href="#contacto"><p>Contacto</p> </a>
            <a href="#footer"> <p>Nosotros</p> </a>
        </MenuContainer>
    )
}

export default Menu