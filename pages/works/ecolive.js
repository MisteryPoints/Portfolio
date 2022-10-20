import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='EcoLive'>
            <Container>
                <Title>
                    EcoLive <Badge>2021</Badge>
                </Title>
                <P>
                    A web page of a travel agency in Dominican Republic.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://ecolive-devpoint.netlify.app/'>
                            https://ecolive-devpoint.netlify.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next JS, Tailwind CSS, Migrated from WordPress</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/ecolive_eyecatch.png' alt='EcoLive'/> 
            </Container>
        </Layout>
    )
}

export default Work