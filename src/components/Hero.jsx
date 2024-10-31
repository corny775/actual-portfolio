import { HERO_CONTENT_1, HERO_CONTENT_2 } from "../constants";
import profilePic from "../assets/ConradProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="fle flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 2 }}
                        className="pb-16 text-6xl  tracking-tight lg:mt-16 lg:text-8xl">
                        Conrad Alves
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-blue-300 via-green-500 to-orange-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Creative Designer & Game Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT_1}
                        {HERO_CONTENT_2}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center ">
                    <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="rounded-2xl" 
                    src={profilePic} 
                    alt="Conrad Alves" />
                </div>
            </div>
        </div>
    </div>
};

export default Hero;