import React from "react"

import { ContainerImage, Modal } from "./imagePopUp.styles"

const ImagenPopUp = ({ setIsOpen, image }) => {

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal>
      <ContainerImage>
        <button type="button" onClick={closeModal} className="close_black_modal">
          <div className="black_modal" />
        </button>
        <div className="image_modal">
          <button type="button" onClick={closeModal} className="close_modal">  X </button>
          <img src={image} alt="habitacion" />
        </div>
      </ContainerImage>
    </Modal>
  )
}

export default ImagenPopUp
