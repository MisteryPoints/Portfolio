import { Container, Heading, SimpleGrid } from '@chakra-ui/react' 
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Skill from '../components/skill'
import { GridItem } from '../components/grid-item' 

const Posts = () => (
    <Layout title='Skills'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                My Skills
            </Heading>
            <Section delay={0.1}> 
            {/* className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' */}
            <Heading as='h3' variant='section-title'>
                Work
            </Heading> 
            <Skill/> 
            </Section>
        </Container>
    </Layout>
)

export default Posts