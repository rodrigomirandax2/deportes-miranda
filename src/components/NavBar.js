import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue
} from '@chakra-ui/react';

import { ImCart, ImUser, ImSwitch, ImCogs, ImWhatsapp} from "react-icons/im";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import '../styles/NavBar.css'
const Links = ['Mujer', 'Hombre', 'Niños', 'Deportes', 'Promociones'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function NavBar() {

  return (
    <>
      <Box className='navbar'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Deportes Miranda</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
               <ImCart className='button-market'/>
              <MenuButton className='button'
                as={Button}>
                <ImUser/>
              </MenuButton>
              <MenuList>
                <MenuItem>
                    <ImCogs className='button-item'/>
                    <span>Configuración</span>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <ImWhatsapp className='button-item'/>
                    <span>Centro de Ayuda</span>
                </MenuItem>
                <MenuItem>
                    <ImSwitch className='button-item'/>
                    <span>Cerrar Sesión</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}