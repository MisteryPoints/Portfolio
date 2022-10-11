import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
	return(
		<Container> 
			<Box borderRadius="lg" bg='red' p={3} mb={6} align='center'>
				Hello, I&apos;m a Full-Stack Developer based in Dominican Republic!
			</Box>
			
			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Víctor Tejada
					</Heading>
					<p> DevPoint ( Developer / Designer / Engineer )</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page





