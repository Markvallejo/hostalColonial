import React from "react";
import { Link } from "gatsby"

import { MenuContainer } from "./menu.style";

const Menu = () => {
    return(
        <MenuContainer>
            <Link to="/"> <p>Inicio</p> </Link>
            <Link to="/"> <p>Reservar</p> </Link>
            <Link to="/"><p>Contacto</p> </Link>
            <Link to="/"> <p>Nosotros</p> </Link>
        </MenuContainer>
    )
}

export default Menu