import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { urlFor } from '../sanity'

const SkillFrame = styled.div`  
    img {
        border-radius: 100%;
        border: 1px solid gray;
        object-fit: cover;
        width: 6rem;
        height: 6rem; 
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 350ms;
    }
    @media (min-width: 1280px) {
        img { 
            width: 8rem;
            height: 8rem;
        } 
    }  
`




const Skill = ({ skill, directionLeft }) => {

    return (
        <SkillFrame>
            <div className='group relative flex cursor-pointer'> 
                <motion.img initial={{
                    x: directionLeft ? -150 : 150,
                    opacity: 0
                }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill?.image).url()} className='filter group-hover:grayscale  md:w-28 md:h-28'/>
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                    <div className='flex items-center justify-center h-full'> 
                        <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p> 
                    </div>  
                </div>
            </div>
        </SkillFrame>
    )
}

export default Skill