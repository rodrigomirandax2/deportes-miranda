import React from 'react'
import { ImInfo} from "react-icons/im";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  import { Button, Text, useDisclosure } from '@chakra-ui/react'


function ItemListContainer() {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
      return (
        <>
          <Button
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
          >
            <ImInfo/> Click me !
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent>
              <ModalHeader>Información Importante</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>La página que quieres visitar se encuentra en desarrollo para ser la mejor del mundo mundial.</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Cerrar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default ItemListContainer