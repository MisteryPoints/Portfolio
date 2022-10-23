import { Container, Heading, SimpleGrid } from '@chakra-ui/react' 
import styled from '@emotion/styled'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Skill from '../components/skill'
import { fetchSkills } from '../libs/fetchSkills'

const GridSkill = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`

const Skills = ({ skills }) => (
    <Layout title='Skills'>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                My Skills
            </Heading>
            <Section delay={0.1}>  
                <GridSkill>  
                    {skills?.map( skill => <Skill key={skill._id} skill={skill}/>)}
                </GridSkill>
            </Section>
        </Container>
    </Layout>
) 

export const getStaticProps = async () => {
    const skills = await fetchSkills()

    return {
        props: {
            skills,
        }, 
    }
}

export default Skills