import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Auto Insurance'>
            <Container>
                <Title>
                Auto Insurance <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to the quotation of automobile insurance.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://autoinsurancequote.vercel.app/'>
                            https://autoinsurancequote.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, TailwindCSS, NodeJS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/autoinsurance_eyecatch.png' alt='Auto Insurance'/> 
            </Container>
        </Layout>
    )
}

export default Work