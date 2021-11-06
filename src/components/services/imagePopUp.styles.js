import styled from "styled-components"
import { device } from "../../theme/mediaQueries"

export const ContainerImage = styled.div`
  align-items: center;
  display: flex;
  font-size: 0;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;

  .black_modal {
    background-color: rgba(10, 10, 10, 0.93);
    height: 100%;
    width: 100%;
  }
  .image_modal {
    position: relative;
    margin: 0 30px;
    max-width: 520px;
    width: 90%;
    display: flex;
    flex-direction: column;


    img{
      width: 100%;
      position: relative;
      margin: 0 auto;
    }

    @media ${device.sm} {
      margin: 0;
      max-width: 650px;
    }

  }
  .close_black_modal {
    border: none;
    background-color: transparent;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .close_modal {
    border: none;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    position: absolute;
    top: 0px;
    right: 0px;
    font-family: ${props => props.theme.vars.avenirNext};
    font-weight: ${props => props.theme.vars.fontExtraBold};
    font-size: 20px;
    margin: auto;
    z-index: 1000;

    @media ${device.sm} {
      font-size: 26px;
    }
    @media ${device.md} {
      top: 0px;
      right: 5px;
      font-size: 28px;
    }
    @media ${device.xl} {
      top: 15px;
      right: 13px;
    }

  }

`

export const Modal = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  pointer-events: auto;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
`
