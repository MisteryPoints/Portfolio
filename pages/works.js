import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbEcoLive from '../public/images/works/ecolive_eyecatch.png'
import thumbUptask from '../public/images/works/uptask_eyecatch.png'
import thumbPokeRemix from '../public/images/works/pokeremix_eyecatch.png'
import thumbGuitarLA from '../public/images/works/guitarla_eyecatch.png'
import thumbCafeQuiosco from '../public/images/works/cafe-quiosco_eyecatch.png'
import thumbAutoInsurance from '../public/images/works/autoinsurance_eyecatch.png'
import thumbWeatherReport from '../public/images/works/weatherreport_eyecatch.png'
import thumbNewsAPP from '../public/images/works/newsapp_eyecatch.png'
import thumbDrinks from '../public/images/works/drinksfinder_eyecatch.png'
import thumbCryptoQuote from '../public/images/works/cryptoquote_eyecatch.png'
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
						<WorkGridItem id='uptask' title='UpTask' thumbnail={thumbUptask}>
							An application for monitoring and managing projects, collaborators and project tasks.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='pokeremix' title='PokeRemix' thumbnail={thumbPokeRemix}>
							An app that suggest ramen(noodle) shops based on a given photo of the ramen you want to eat
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='ecolive' title='EcoLive' thumbnail={thumbEcoLive}>
							A web page of a travel agency in Dominican Republic.
						</WorkGridItem>
					</Section>
				</SimpleGrid>

				<Section>
					<Divider my={6}/>
					<Heading as='h3' fontSize={20} mb={4}>
						Course Projects
					</Heading>
				</Section>
				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<WorkGridItem id='cafequiosco' title='Fresh Coffe Quiosco' thumbnail={thumbCafeQuiosco}>
							A food ordering APP, for a kiosk coffee, this allows confirmation and attach the user for orders.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='guitarla' title='Guitar LA' thumbnail={thumbGuitarLA}>
							An application dedicated to the sale of guitars, guitar lessons, blogs and others. 
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='autoinsurance' title='Auto Insurance' thumbnail={thumbAutoInsurance}>
							An application dedicated to the quotation of automobile insurance
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='drinksfinder' title='Drinks Finder' thumbnail={thumbDrinks}>
							An application dedicated to the search for drinks, according to their type, also allows you to view the recipes of the drinks.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='weatherreport' title='Weather Report APP' thumbnail={thumbWeatherReport}>
							An application dedicated to reporting the climate of the desired city or neighborhood. 
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='newsapp' title='News App' thumbnail={thumbNewsAPP}>
							An application dedicated to the search for general news or by categories.
						</WorkGridItem>
					</Section>
					<Section>
						<WorkGridItem id='cryptoquote' title='Insta~Quote Crypto' thumbnail={thumbCryptoQuote}>
							An application dedicated to the quotation of different cryptocurrencies in different markets and currencies.
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

