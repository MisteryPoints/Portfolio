import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='DevPoint Messenger'>
            <Container>
                <Title>
                    DevPoint Messenger <Badge>2022</Badge>
                </Title>
                <P>
                    A whatsapp clone made using the most modern Tech`s.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://devpoint-messenger.vercel.app/'>
                            https://devpoint-messenger.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.JS, React, Styled Components, Firebase</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/devpoint-messenger_eyecatch.png' alt='DevPoint Messenger'/> 
                <WorkImage src='/images/works/devpoint-messenger_eyecatch1.png' alt='DevPoint Messenger'/> 
            </Container>
        </Layout>
    )
}

export default Work