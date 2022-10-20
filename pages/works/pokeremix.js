import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='PokeRemix'>
            <Container>
                <Title>
                    PokeRemix <Badge>2022</Badge>
                </Title>
                <P>
                A web page made for consulting Pokemons like a Pokedex, using new techs.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://pokeremix.vercel.app/'>
                            https://pokeremix.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Remix Run, Tailwind CSS, SSR</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/pokeremix_eyecatch.png' alt='PokeRemix'/> 
            </Container>
        </Layout>
    )
}

export default Work