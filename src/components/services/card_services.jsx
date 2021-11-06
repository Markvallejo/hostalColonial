import React, {useState}  from "react";
import ImagenPopUp from "./imagePopUp";

import { CardContainer } from "./card_services.style";

const Card = ({title, description, image}) =>{

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
        console.log('click')
    }

    return(
        <>
        <CardContainer onClick={handleClick}>
           <p className="title">{title}</p>
           <p className="description">{description}</p>
           <img src={image} alt="habitacion" />
        </CardContainer>
         {
             isOpen && <ImagenPopUp setIsOpen={setIsOpen} image={image} />
         }
        </>
    )
}

export default Card