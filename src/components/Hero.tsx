import { Star } from "lucide-react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="elevation.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl pt-80"> {/* 👈 Added extra padding here */}
          {/* Headline */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
             A caring space for 
            </span>{" "}
            every student’s  <br />
            journey
          </h1> */}

          {/* Badge */}
                <br />
                <br />
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-8 mt-10 sm:mt-20 md:mt-28 lg:mt-0">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">
              Student Lifestyle Housing
            </span>
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
   className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent animate-text"





  >
    A caring space for <br />

every student’s journey
  </motion.span>
</h1>
        </div>
      </div>
    </div>
  );
}
