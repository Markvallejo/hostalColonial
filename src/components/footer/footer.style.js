import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const FooterContainer = styled.div`
   width: 100%;
   height: auto;
   background-color: black;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   @media ${device.sm}{
     //   height: 130px;
    }
  
    .visitanos_text{
        font-size: 14px;
        color: #f7f7f7;
        position: relative;
        margin-top: 20px;
        height: 30%;

        @media ${device.sm}{
            font-size: 16px;
       }
       @media ${device.lg}{
            font-size: 18px;
       }
    }

    .social_media--container{
        display: flex;
        width: 80%;
        justify-content: space-evenly;
        align-items: center;
        height: 70%;
        margin-top: 20px;
        margin-bottom: 30px;
    
        @media ${device.sm}{
            justify-content: space-evenly;
       }
       @media ${device.md}{
            width: 60%;
            margin-top: 20px;
       }

       @media ${device.lg}{
            width: 40%;
          
       }

     img{
       width: 40px;
       margin-top: 20px;
      
       @media ${device.sm}{
            width: 60px;  
       }
    
   }
 }

   

`