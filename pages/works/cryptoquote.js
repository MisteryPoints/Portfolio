import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Insta~Quote Crypto'>
            <Container>
                <Title>
                    Insta~Quote Crypto <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to the quotation of different cryptocurrencies in different markets and currencies.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://cryptoquote.vercel.app/'>
                            https://cryptoquote.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS, Emotion/Styled</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/inkdrop_01.png' alt='Insta~Quote Crypto'/> 
            </Container>
        </Layout>
    )
}

export default Work