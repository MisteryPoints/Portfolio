import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Button, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio' 

const Page = () => {

	const [text] = useTypewriter({
		words : [
			"Hi, I'm Víctor Tejada",
			'I-really-love.jsx',
			'<Coding />',
			'<Music />',
			'<Philosophy />',
			'<Video Games />',
			'<Science />',
			'<Machine Learning />'
		],
		loop: true,
		delaySpeed: 1000,
	}) 

	return(
		<Layout>
			<Container> 
				<Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.100')} p={3} mb={6} align='center'>
					Hello, I&apos;m a Full-Stack Developer based in Dominican Republic!
				</Box>
				
				<Box display={{md:'flex'}}>
					<Box flexGrow={1}>
						<Heading as='h2' variant='page-title'>
							Víctor Tejada
						</Heading>
						<p> DevPoint (Developer / Designer / Engineer)</p>
					</Box>
					<Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
						<Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/victor.jpg' alt='Profile Image'/>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Work
					</Heading>
					<Paragraph>Víctor Tejada is a Freelance and a Full-Stack Developer based in Santo Domingo, with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his wife, family and/or friends making moments together. 
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon/>} colorScheme='messenger'>
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
						Worked at Rowe Laboratories as a System Engineer Intern
					</BioSection>
					<BioSection>
						<BioYear>2018</BioYear>
						Worked at Claro DOM as an Avery Prevention and Projects Analyst
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						Worked at Claro DOM as an Mobile Operations Analyst 
					</BioSection>
					<BioSection>
						<BioYear>2022 to present</BioYear>
						Works at Claro DOM as an Number Management Analyst 
					</BioSection>
					<BioSection>
						<BioYear>2020 to present</BioYear>
						Works as a Freelance
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ❤
					</Heading>
					<Paragraph> 
						{text} 
						<Cursor cursorColor='#88ccca'/> 
					</Paragraph>
				</Section>
				<Section delay={0.3}>
					<Heading as='h3' variant='section-title'>On the Web</Heading>
					<List>
						<ListItem>
							<Link href='https://github.com/MisteryPoints' target='_blank'>
								<Button variant='ghost' colorScheme='messenger' leftIcon={<Icon as={IoLogoGithub}/>}>@MisteryPoints</Button>
							</Link> 
						</ListItem>
						<ListItem>
							<Link href='https://www.facebook.com/victoorat.bonilla' target='_blank'>
								<Button variant='ghost' colorScheme='facebook' leftIcon={<Icon as={IoLogoFacebook}/>}>Víctor Tejada</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://wa.me/18097298392' target='_blank'>
								<Button variant='ghost' colorScheme='whatsapp' leftIcon={<Icon as={IoLogoWhatsapp}/>}>Víctor Tejada</Button>
							</Link>
						</ListItem> 
						<ListItem>
							<Link href='https://www.linkedin.com/in/devpoint/' target='_blank'>
								<Button variant='ghost' colorScheme='linkedin' leftIcon={<Icon as={IoLogoLinkedin}/>}>@devpoint</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href='https://www.instagram.com/victor_tejada98' target='_blank'>
								<Button variant='ghost' colorScheme='red' leftIcon={<Icon as={IoLogoInstagram}/>}>@victor_tejada98</Button>
							</Link> 
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	)
}

export default Page





