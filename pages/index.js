import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
	return(
		<Container> 
			<Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.100')} p={3} mb={6} align='center'>
				Hello, I&apos;m a Full-Stack Developer based in Dominican Republic!
			</Box>
			
			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Víctor Tejada
					</Heading>
					<p> DevPoint ( Developer / Designer / Engineer )</p>
				</Box>
				<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
					<Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/victor.jpg' alt='Profile Image'/>
				</Box>
			</Box>
			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					Work
				</Heading>
				<Paragraph>Víctor Tejada is a Freelance and a Full-Stack Developer based in Santo Domingo, with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his wife, family and/or friends making moments together. {' '} {/*
					<NextLink href="/works/inkdrop">
						<Link>
							Inkdrop			
						</Link>
					</NextLink>
				.*/}
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
							My Portfolio
						</Button>
					</NextLink>
				</Box>
			</Section> 
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1998</BioYear>
					Born in Santo Domingo (🏝🏖🌊⛱), Dominican Republic.
				</BioSection>
				<BioSection>
					<BioYear>2016</BioYear>
					Completed the Technician in Digital Electronics and Micro Computing at Loyola Polytechnic Institute (IPL)
				</BioSection>
				<BioSection>
					<BioYear>2017</BioYear>
					Worked at Rowe Laboratories as a System Engineer
				</BioSection>
				<BioSection>
					<BioYear>2018 to present</BioYear>
					Worked at Claro DOM as an Analyst (Operations Analyst)
				</BioSection>
				<BioSection>
					<BioYear>2020 to present</BioYear>
					Works as a Freelance
				</BioSection>
			</Section>
			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Music,  {' '} 
					<Link href="https://illust.odoruinu.net">
						Drawing
					</Link>
					, Video Games, Science, Philosophy, Machine Learning and {' '}
					<Link href="https://500px.com/p/craftzdog">Photography</Link>
					. 
				</Paragraph>
			</Section>
		</Container>
	)
}

export default Page





