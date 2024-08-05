"use client";

import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Quote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100% 0% -9% 0%" });
  return (
    <div
      className="flex justify-center flex-col text-teal-500
                xssm:text-xl xssm:font-semibold
                sm:text-2xl
                md:text-xl md:font-semibold
                xmd:text-2xl xmd:mt-6"
    >
      <div ref={ref} className="w-fit my-6 self-center">
        {isInView && (
          <>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="hidden xl:block before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
            before:text-2xl after:text-2xl
            sm:before:text-3xl sm:after:text-3xl self-center"
            >
              Consistently improving just 1% each day may seem small, but it is
              the most effective path to lasting progress.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block xl:hidden before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
                    before:text-2xl after:text-2xl self-center"
            >
              Small steps, big gains - the magic of persistent 1% daily
              improvement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden xssm:block md:hidden before:content-[open-quote] after:content-[close-quote] justify-center typewriter 
                    before:text-2xl after:text-2xl self-center"
            >
              1% daily improvement is the key to lasting progress.
            </motion.p>
          </>
        )}

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="xssm:hidden before:content-[open-quote] after:content-[close-quote] justify-center px-2 text-center text-xl font-semibold
            before:text-2xl after:text-2xl
            sm:before:text-3xl sm:after:text-3xl"
        >
          Consistently improving just 1% each day may seem small, but it is the
          most effective path to lasting progress.
        </motion.p>
      </div>
      <div className="self-center">
        <a href="/mabel_resume_Jun24.pdf" download="Resume.pdf">
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Quote;
