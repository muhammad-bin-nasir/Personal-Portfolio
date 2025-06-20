'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  SiPython,
  SiCplusplus,
  SiKotlin,
  SiNextdotjs,
  SiMysql,
  Si365Datascience,
} from 'react-icons/si';

export default function AboutPage() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/me.jpg"
            alt="Muhammad Bin Nasir"
            width={256}
            height={256}
            className="rounded-2xl object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I'm Muhammad Bin Nasir, a Computer Scientist with a 3.9 GPA and a mind wired for
            problem-solving. From building C++ quiz apps to AI-based note summarizers, I blend
            creativity with logic like a spellcaster in the realm of data and development.
          </p>

          <p className="italic text-gray-400 mb-6">
            “Turning code into magic, and bugs into features.”
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Skills:</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center text-yellow-300 text-2xl">
              <div className="flex flex-col items-center gap-1">
                <SiPython /> <span className="text-sm text-white">Python</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiCplusplus /> <span className="text-sm text-white">C++</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiKotlin /> <span className="text-sm text-white">Kotlin</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs /> <span className="text-sm text-white">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiMysql /> <span className="text-sm text-white">SQL</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Si365Datascience /> <span className="text-sm text-white">Data Science</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
