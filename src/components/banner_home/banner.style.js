import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const StyledBannerContainer = styled.div`
    width: 100%;
    text-align: center;
    height: auto;
    /* border: solid red 1px; */
    position: relative;

    .banner__home{
        width: 100%;
        position: relative;

        img{
            width: 100%;
            height: 300px;

            @media ${device.sm}{
                height: 400px;
            }
            @media ${device.md}{
                height: 500px;
            }
            @media ${device.lg}{
                height: 600px;
            }
        }

        .storitelling_banner{
            font-size: 24px;
            font-family: ${props => props.theme.vars.heaters};
            text-transform: uppercase;
            padding: 0 20px;
            font-weight: ${props => props.theme.vars.fontExtraBold};
            position: absolute;
            top: 40%;
            color: #f7f7f7;

            @media ${device.sm}{
               width: 400px;
               top: 60%;
               font-size: 26px;
               text-align: left;
            }
            @media ${device.md}{
               width: 500px;
               font-size: 30px;
            }
            @media ${device.md}{
               width: 600px;
               font-size: 36px;
            }

        }



    }

`