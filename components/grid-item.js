import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" align="center">
		<LinkBox cursor="pointer">
		<Image src={ thumbnail } alt={ title } className="grid-item-thumbnail" placeholder="blur" loading="lazy"/>
		<LinkOverlay href={href} target="_blank">
			<Text mt={2}>{ title } </Text>
		</LinkOverlay>
		<Text fontSize={14}>{ children }</Text>
		</LinkBox>
	</Box>
)
	

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
	<Box w="100%" align="center" className='animate__animated animate__fadeInUp'>
		<NextLink href={`/works/${id}`} >
			<LinkBox cursor="pointer">
				<Box align="center" shadow='dark-lg' className="grid-item-thumbnail overflow">
					<Image src={ thumbnail } alt={ title }  placeholder="blur" className='grid-item-thumbnail card-img-top'/> 
				</Box>
				<LinkOverlay href={`/works/${id}`}>
					<Text mt={2} fontSize={20}>
						{ title }
					</Text>
				</LinkOverlay>
				<Text fontSize={14}> { children } </Text>
			</LinkBox>
		</NextLink>
	</Box>
)

export const  GridItemStyle = () => (
	<Global styles={`
		.grid-item-thumbnail{
			border-radius: 12px;
			background: #333333;
		} 
		
		.overflow {
			overflow: hidden !important;
		}
		
		.card-img-top {
			transform: scale(1) !important;
			transition: all 0.2s ease-in-out !important;
		}
		
		.card-img-top:hover {
			transform: scale(1.8) !important;
		}
	`}/>
) 