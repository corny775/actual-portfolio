import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from "../constants";

import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="bg-gradient-to-r from-blue-300 via-green-500 to-orange-500 bg-clip-text text-4xl tracking-tight text-transparent"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-12 font-light tracking-tighter">
                            {ABOUT_TEXT_1}
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-0 font-light tracking-tighter">
                            {ABOUT_TEXT_2}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;