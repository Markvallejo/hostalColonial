import styled from "styled-components"
import { device } from "../../theme/mediaQueries"


export const MenuContainer = styled.div`
    position: fixed;
    top: 60px;
    z-index: 100;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffa500;

    @media ${device.sm}{
        height: 80px;
        top: 80px;
    }
    @media ${device.lg}{
        height: 100px;
    }


    a{
        text-decoration: none;
        color: white;
        font-weight: ${props => props.theme.vars.fontSemiBold};
        font-size: 13px;
        
        @media ${device.sm}{
            font-size: 18px;
        }
        @media ${device.lg}{
            font-size: 22px;
            }
    } 
    
    a:hover{
        opacity: 0.5;
        transform: scale(1.2);
    }

`