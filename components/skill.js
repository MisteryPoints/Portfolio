import { motion } from 'framer-motion'


const Skill = ({ directionLeft }) => {

    return (
        <div>
            <motion.img initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }}
            src='/'/>
        </div>
    )
}

export default Skill