import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../libs/theme' 
import Favicon from '../components/favicon'

export default class Document extends NextDocument { 
    render () {
        return(
            <Html land='en'>
                <Head>
                    <Favicon/>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}