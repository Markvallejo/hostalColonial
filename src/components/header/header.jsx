import React from "react";
import { Link } from "gatsby"

import { HeaderContainer } from "./header.style";

import logo from "../../../static/assets/images/Logo.png"

const Header = () => {
    return(
        <HeaderContainer>
           <Link to="/"> <img src={logo} alt="logo_hotel" /> </Link>
            <h1>Hostal Colonial</h1>
        </HeaderContainer>
    )
}

export default Header