import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const CardContainer = styled.div`
    width: 80%;
    height: 320px;
    border: solid gray 1px;
    margin-bottom: 40px;
    text-align: center;
    -webkit-box-shadow: 0px 0px 17px 8px rgba(184,178,184,1);
    -moz-box-shadow: 0px 0px 17px 8px rgba(184,178,184,1);
    box-shadow: 0px 0px 17px 8px rgba(184,178,184,1);
    cursor: pointer;
    @media ${device.sm}{
        width: 300px;
        margin: 0 20px 50px 20px;
    }

    @media ${device.lg}{
        width: 350px;
    }

    &:hover{
        background-color: #ffa500;
    }


    .title{
        padding-left: 15px;
        font-size: 18px;
        font-weight: bold;
        text-align: left;
        margin-top: 10px;
    }

    .description{
        padding-left: 15px;
        font-size: 14px;
        font-weight: bold;
        opacity: 0.7;
        margin-top: 10px;
        text-align: left;
    }

    img{
        width: 90%;
        height: 202px;
        margin-top: 15px;
        border-radius: 5px;
        padding-bottom: 15px;
    }

`