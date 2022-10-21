import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='SAS Automation'>
            <Container>
                <Title>
                    SAS Automation <Badge>2021</Badge>
                </Title>
                <P>
                    A program that allows the automation of data for statistics and dashboard, with automatic mailing for analysis.
                </P>
                <List ml={4} my={4}> 
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Techs</Meta>
                        <span>SAS, Oracle DB, Bash Prompt</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/sas.png' alt='SAS Automation'/> 
            </Container>
        </Layout>
    )
}

export default Work