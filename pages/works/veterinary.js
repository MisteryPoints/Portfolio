import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Veterinary Appointments'>
            <Container>
                <Title>
                    Veterinary Appointments <Badge>2022</Badge>
                </Title>
                <P>
                    An application dedicated for the control and administration of appointments for a veterinarian.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://vetcitasreact-devpoint.netlify.app/'>
                            https://vetcitasreact-devpoint.netlify.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Vite, React, NodeJS, TailwindCSS</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/veterinary_eyecatch.png' alt='Veterinary Appointments'/> 
            </Container>
        </Layout>
    )
}

export default Work