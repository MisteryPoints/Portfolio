import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Fresh Coffe Quiosco'>
            <Container>
                <Title>
                    Fresh Coffe Quiosco <Badge>2022</Badge>
                </Title>
                <P>
                    A food ordering APP, for a kiosk coffee, this allows confirmation and attach the user for orders.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website Vercel</Meta>
                        <Link href='https://cafequiosco-devpoint.vercel.app/'>
                            https://cafequiosco-devpoint.vercel.app <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website Railway</Meta> 
                        <Link href='https://food-quiosco-devpoint.up.railway.app/'>
                            https://food-quiosco-devpoint.up.railway.app <ExternalLinkIcon mx='2px'/>
                        </Link>
                    </ListItem> 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, MySQL, Prisma</span>
                    </ListItem> 
                </List>
                <WorkImage src='/images/works/cafe-quiosco_eyecatch.png' alt='Fresh Coffe Quiosco'/> 
            </Container>
        </Layout>
    )
}

export default Work