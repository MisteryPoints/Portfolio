import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Uptask'>
            <Container>
                <Title>
                    Uptask <Badge>2022</Badge>
                </Title>
                <P>
                    An application for monitoring and managing projects, collaborators and project tasks in real time.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://uptask-devpoint.vercel.app/'>
                            https://uptask-devpoint.vercel.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Mongo DB, Express, NodeJS, React, Tailwind CSS, Headless UI, Socket.io</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/uptask_eyecatch.png' alt='Uptask'/>
                {/* <WorkImage src='/images/works/inkdrop_02.png' alt='Inkdrop'/> */}
            </Container>
        </Layout>
    )
}

export default Work