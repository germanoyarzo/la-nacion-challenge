
import { Button, ChakraProvider, Input, Stack, InputRightElement, InputGroup,InputLeftElement, Text, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import {HamburgerIcon, SearchIcon} from '@chakra-ui/icons'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Stack borderBottomColor="gray.300" borderBottomWidth={1} paddingY={2}>
        <Container maxWidth="container.xl">
          <Stack align-items="center" direction="row" justifyContent="space-between">
            <Stack direction="row" flex={1}spacing={12}>
              <Button leftIcon= {<HamburgerIcon  width={6} height={6}/>} variant="link">Menu</Button>
              <InputGroup>
                <InputRightElement pointerEvents="none">
                  <SearchIcon color='gray.300' />
                </InputRightElement>  
                <Input type='tel' placeholder='Search' />
              </InputGroup>
            </Stack>
            <Text 
              color="linkedin.500" 
              flex={1}
              fontWeight="bold" 
              textAlign="center"
              fontSize="4xl" 
              fontFamily="sans"
              lineHeight="normal"
              textTransform="uppercase"
            >La Nacion</Text>
            <Stack direction="row" flex={1} textAlign="right" justifyContent="flex-end">Seccion derecha
              <Button colorScheme="linkedin">Suscribite</Button>
              <Button >Ingresar</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Component {...pageProps} />
      <footer>...</footer>
    </ChakraProvider>
  )
}

export default App;
