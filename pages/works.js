import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbModetokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbTheFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'


const Works = () => {
	return(
		<Layout> 
			<Container>
				<Heading as="h3" fontSize={20} mb={4}>
					Works
				</Heading>
				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<WorkGridItem id='inkdrop' title='Inkdrop' thumbnail={thumbInkdrop}>
							A markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='walknote' title='Walknote' thumbnail={thumbWalknote}>
							Music recommendation app fot IOS
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='the-four-painters' title='The Four Painters' thumbnail={thumbTheFourPainters}>
							A video work generated with deep learning, imitating famous four painters like Van Gogh
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='menkiki' title='Menkiki' thumbnail={thumbMenkiki}>
							An app that suggest ramen(noodle) shops based on a given photo of the ramen you want to eat
						</WorkGridItem>
					</Section>
				</SimpleGrid>

				<Section>
					<Divider my={6}/>
					<Heading as='h3' fontSize={20} mb={4}>
						Collaborations
					</Heading>
				</Section>
				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<WorkGridItem id='margelo' title='Margelo' thumbnail={thumbMargelo}>
							A VR Creative tools for fashion brands
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='modetokyo' title='mode.tokyo' thumbnail={thumbModetokyo}>
							The mode magazine for understanding to personally enjoy Japan
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='styly' title='Styly' thumbnail={thumbStyly}>
							A VR Creative tools for fashion brands
						</WorkGridItem>
					</Section>
				</SimpleGrid>

				<Section>
					<Divider my={6}/>
					<Heading as='h3' fontSize={20} mb={4}>
						Old works
					</Heading>
				</Section>
				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<WorkGridItem id='pichu2' title='Pichu*Pichu' thumbnail={thumbPichu2}>
							Twitter client app for iPhone Safari
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='freedbtagger' title='freeDBTagger' thumbnail={thumbFreeDBTagger}>
							Automatic audio file tagging tool using FreeDB for WIndows
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='amembo' title='Amembo' thumbnail={thumbAmembo}>
							P2P private file sharing tool with MSN Messenger integration for Windows
						</WorkGridItem>
					</Section>
				</SimpleGrid>
			</Container> 
			</Layout>
	)
}

export default Works

