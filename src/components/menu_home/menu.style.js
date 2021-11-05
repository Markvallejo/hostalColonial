import styled from "styled-components"
import { device } from "../../theme/mediaQueries"


export const MenuContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffa500;

    @media ${device.sm}{
        height: 80px;
    }
    @media ${device.lg}{
        height: 100px;
    }


    a{
        text-decoration: none;
        color: white;
        font-weight: ${props => props.theme.vars.fontSemiBold};
        
        @media ${device.sm}{
            font-size: 18px;
        }
        @media ${device.lg}{
            font-size: 22px;
            }
    }   

`