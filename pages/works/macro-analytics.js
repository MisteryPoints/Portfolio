import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Excell Macro`s'>
            <Container>
                <Title>
                    Excell Macro`s <Badge>2019</Badge>
                </Title>
                <P>
                    A macro program to manipulate data in excel to facilitate analysis for big data.
                </P>
                <List ml={4} my={4}>  
                    <ListItem>
                        <Meta>Techs</Meta>
                        <span>Excell, Visual Basic for Applications</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/macros.png' alt='Excell Macro`s'/> 
            </Container>
        </Layout>
    )
}

export default Work