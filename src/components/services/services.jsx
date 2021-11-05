import React  from "react";
import Card from "./card_services";

import { ServiceContainer, ContainerReserva } from "./services.style";

import sencilla from "../../../static/assets/images/sencilla.jpg"
import doble from "../../../static/assets/images/doble.jpg"
import triple from "../../../static/assets/images/triple.jpg"
import cuadruple from "../../../static/assets/images/cuadruple.jpg"
import matrimonial from "../../../static/assets/images/matrimonial.jpg"
import phone from  "../../../static/assets/images/logo_whatsapp.svg"

const Services = () =>{

    const data = [
        {
            id: 1,
            image: sencilla,
            title: "Habitación Individual",
            description:"Con Aire Acondicionado o Abanico, incluye el Desayuno.",
        },
        {
            id: 2,
            image: doble,
            title: "Habitación Doble",
            description:"Con Aire Acondicionado o Abanico, incluye 2 Desayunos.",
        },
        {
            id: 3,
            image: triple,
            title: "Habitación Triple",
            description:"Con Aire Acondicionado o Abanico, incluye 3 Desayunos.",
        },
        {
            id: 4,
            image: cuadruple,
            title: "Habitación Cuadruple",
            description:"Con Abanico, incluye 4 Desayunos.",
        },
        {
            id: 5,
            image: matrimonial,
            title: "Habitación Matrimonial",
            description:"Con Aire Acondicionado o Abanico, incluye 2 Desayunos.",
        },
    
    ]
    return(
        <>
         <ContainerReserva>
                <p className="description_reserva"> Para reservar cualquiera de nuestros servicios, puedes llamar al numero: </p>
                <div className="container_phone">
                    <img src={phone} alt="icon" />
                    <p className="phone_number" > <a href={`tel:+505 2722 2040`}  target="_blank"> +505 2722 2040 </a></p>
                </div>
            </ContainerReserva>
        <ServiceContainer>
           
            {
                data.map((item, index) => {
                   return <Card key={index} title={item.title} description={item.description} image={item.image} />
                })
            }
           
        </ServiceContainer>
        </>
    )
}

export default Services