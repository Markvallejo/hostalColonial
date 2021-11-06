import React from "react";

import { FooterContainer } from "./footer.style";

import facebook from "../../../static/assets/images/facebook.png"
import twitter from "../../../static/assets/images/twitter.png"
import instagram from "../../../static/assets/images/instagram.png"


const Footer = () => {
    return(
        <FooterContainer >
          <a name="footer" />
          <p className="visitanos_text">Visitanos en Nuestras Redes Sociales</p>
          <div className="social_media--container">
            <a href="https://es-la.facebook.com/pg/reservacionescolonial/services/" target="_blank">
                <img src={facebook} alt="facebook" />
            </a>
            <a href="https://es-la.facebook.com/pg/reservacionescolonial/services/" target="_blank">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="https://es-la.facebook.com/pg/reservacionescolonial/services/" target="_blank">
                <img src={instagram} alt="instagram" />
            </a>
          </div>
        </FooterContainer>
    )
}

export default Footer