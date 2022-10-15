import { useColorModeValue } from "@chakra-ui/react"

const Favicon = () => {
	const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return ( 
        <link id="favicon" rel="icon" href={footPrintImg} type="image/png" sizes="16x16"/>
    )
}

export default Favicon