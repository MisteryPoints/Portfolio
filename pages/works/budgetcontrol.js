import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Budget Control'>
            <Container>
                <Title>
                    Budget Control <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    An application dedicated to the control of expenses and their categories.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://budgetcontrol-devpoint.netlify.app/'>
                            https://budgetcontrol-devpoint.netlify.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/budgetcontrol_eyecatch.png' alt='Budget Control'/> 
            </Container>
        </Layout>
    )
}

export default Work