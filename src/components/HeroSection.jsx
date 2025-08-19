import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-40 scroll-mt-24" id="home" >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        StrumLab transforms your Passion into  
        <span className="bg-gradient-to-r  from-emerald-400 to-blue-400 text-transparent bg-clip-text">
          {" "}
          Skill
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Empower your musical journey and transform your guitar playing with our intuitive tools. Start today and make your musical dreams a reality!
      </p>
      <div className="flex justify-center my-10">
        <motion.a 
          href="#"
          whileHover={{scale:1.2}}
          whileTap={{scale:0.9}}
          className="bg-gradient-to-r  from-emerald-500 to-blue-700 py-3 mt-18 px-4 mx-3 rounded-md " 
        >
          Register Now
        </motion.a>
            </div>
    </div>
  );
};

export default HeroSection;
