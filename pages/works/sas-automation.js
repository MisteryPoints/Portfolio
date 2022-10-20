import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Inkdrop'>
            <Container>
                <Title>
                    Inkdrop <Badge>2016</Badge>
                </Title>
                <P>
                    A Markdown note-talking app with 100+ plugins, cross-platform and encrypted data sync support. The life-time revenue is more than $300k.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://ww.inkdrop.app/'>
                            https://www.inkdrop.app/ <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Electron, React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <Link href='/'>
                            How I've Attracted The First 500 Paid Users For My SaaS app $5/month <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/inkdrop_01.png' alt='Inkdrop'/>
                <WorkImage src='/images/works/inkdrop_02.png' alt='Inkdrop'/>
            </Container>
        </Layout>
    )
}

export default Work