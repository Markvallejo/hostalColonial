import React from "react";

import { HeaderContainer } from "./header.style";

import logo from "../../../static/assets/images/Logo.png"

const Header = () => {
    return(
        <HeaderContainer>
            <img src={logo} alt="logo_hotel" />
            <h1>Hostal Colonial</h1>
        </HeaderContainer>
    )
}

export default Header