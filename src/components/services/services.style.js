import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const ServiceContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 30px;

    @media ${device.sm}{
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

`

export const ContainerReserva = styled.div`
        text-align: center;
        font-size: 18px;
        padding: 0 20px;
        font-weight: ${props => props.theme.vars.fontBold};
        color: #0b0b4c;
        margin-top: 150px;
        margin-bottom: 30px;

        @media ${device.sm}{
            margin-bottom: 50px;
            margin-top: 200px;
        }

        @media ${device.md}{
          width: 600px;
          margin: 0px auto;
         padding-top: 200px;
        }

        @media ${device.lg}{
         padding-top: 280px;
        }

        .description_reserva{
            padding-bottom: 30px;
            width: 90%;
            margin: 0 auto;

            @media ${device.md}{
                font-size: 20px;
                width: 80%;
            }
        }

        .container_phone{
            width: 90%;
            height: 60px;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background-color: #ffa500;

            @media ${device.sm}{
                font-size: 20px;
                width: 50%;
                margin-bottom: 30px;
            }

            
            @media ${device.md}{
             margin-bottom: 60px;
            }

            a{
                text-decoration: none;
                color: #0b0b4c;
            }

            img{
                width: 30px;
            }
    }
`