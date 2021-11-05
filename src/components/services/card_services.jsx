import React  from "react";

import { CardContainer } from "./card_services.style";

const Card = ({title, description, image}) =>{
    return(
        <CardContainer>
           <p className="title">{title}</p>
           <p className="description">{description}</p>
           <img src={image} alt="habitacion" />
        </CardContainer>
    )
}

export default Card