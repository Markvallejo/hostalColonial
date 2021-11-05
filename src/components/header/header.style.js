import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const HeaderContainer = styled.div`
   width: 100%;
   height: 60px;
   background-color: black;
  // background: linear-gradient(to bottom, #07abf3, #8fdefe);
  /* border: solid blue 1px; */
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media ${device.sm}{
        height: 80px;
    }

    @media ${device.lg}{
        height: 100px;
    }
  
   img{
       width: 80px;
       padding-left: 10px;
      
       @media ${device.sm}{
            width: 100px;
            padding-left: 20px;
       }
       @media ${device.lg}{
            width: 120px;
        }
   }

   h1{
       color: white;
       font-size: 14px;
       padding-right: 10px;

       @media ${device.sm}{
           font-size: 16px;
           padding-right: 20px;
        }
        @media ${device.lg}{
            font-size: 18px;
        }
   }

`