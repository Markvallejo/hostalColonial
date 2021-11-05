import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const CardContainer = styled.div`
    width: 80%;
    height: 300px;
    border: solid gray 2px;
    margin-bottom: 20px;
    text-align: center;
    border-radius: 5px;

    @media ${device.sm}{
        width: 300px;
        margin: 0 20px 20px 20px;
    }

    @media ${device.lg}{
        width: 350px;
    }

    &:hover{
        background-color: #6f6f8c;
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
    }

`