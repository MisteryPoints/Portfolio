import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='CRM'>
            <Container>
                <Title>
                    CRM <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated to the control and administration of clients in a json-server DB.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://devpoint-crm.netlify.app/'>
                            https://devpoint-crm.netlify.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS, JSON-Server, TailwindCSS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/crm_eyecatch.png' alt='CRM'/> 
            </Container>
        </Layout>
    )
}

export default Work