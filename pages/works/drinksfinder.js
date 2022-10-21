import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Drinks Finder'>
            <Container>
                <Title>
                    Drinks Finder <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to the search for drinks, according to their type, also allows you to view the recipes of the drinks.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://buscador-bebidas-devpoint.vercel.app/'>
                            https://buscador-bebidas-devpoint.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS, Bootstrap</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/drinksfinder_eyecatch.png' alt='Drinks Finder'/> 
            </Container>
        </Layout>
    )
}

export default Work