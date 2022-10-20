import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='GuitarLA'>
            <Container>
                <Title>
                    GuitarLA <Badge>2022</Badge>
                </Title>
                <P>
                An application dedicated to the sale of guitars, guitar lessons, blogs and others. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://guitarla-next-devpoint.vercel.app/'>
                            https://guitarla-next-devpoint.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.Js, Strapi 3, MongoDB, Node JS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/guitarla_eyecatch.png' alt='GuitarLA'/> 
            </Container>
        </Layout>
    )
}

export default Work