import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Weather Report APP'>
            <Container>
                <Title>
                    Weather Report APP <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to reporting the climate of the desired city or neighborhood.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://weather-report-misterypoint.vercel.app/'>
                            https://weather-report-misterypoint.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/weatherreport_eyecatch.png' alt='Weather Report APP'/> 
            </Container>
        </Layout>
    )
}

export default Work