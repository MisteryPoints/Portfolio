import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='News App'>
            <Container>
                <Title>
                    News App <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to the search for general news or by categories.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://news-app-devpoint.vercel.app/'>
                            https://news-app-devpoint.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS, Material UI, Emotion/Styled</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/newsapp_eyecatch.png' alt='News App'/> 
            </Container>
        </Layout>
    )
}

export default Work