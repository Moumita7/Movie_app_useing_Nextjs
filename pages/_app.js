import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Nav/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
