import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const SkillFrame = styled.div`
    
`


const Skill = ({ directionLeft }) => {

    return (
        <div>
            <motion.img initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }}
            src='/images/skills/css.png'/>
        </div>
    )
}

export default Skill