"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdOpenInNew } from "react-icons/md";
import ProjectTile from "./utils/ProjectTile";
import { PROJECTS_LISTS, QUIET_NODE_GITHUB_LINK } from "../../utils/constants";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => {
    setShowMore(true);
    if (showMore) {
      window.open(QUIET_NODE_GITHUB_LINK, "_blank", "noreferrer");
    }
  };
  return (
    <section
      className="relative z-10 overflow-hidden scrollbar-hidden bg-gradient-to-t xmmd:bg-gradient-to-l from-[#EFD8C9] to-[#f8ad7b]
                "
    >
      {/* container */}
      <div
        className="flex flex-col items-center
                my-16
                "
      >
        {/* header */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-black text-[#9d5746]"
          >
            Education.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
            className="flex justify-center"
          >
            <hr className="bg-[#9d5746] border-none h-[0.2rem] w-20 sm:w-20 rounded-xl" />
          </motion.div>
        </div>

        {/* body - projects */}
        <div className="flex flex-col w-full mt-6 mx-auto px-8">
          {/* First 4 projects */}
          {PROJECTS_LISTS.slice(0, 5).map((project) => {
            return (
              <ProjectTile
                key={project.id}
                project={project}
                flipped={project.id % 2 !== 0}
              />
            );
          })}

          {showMore && (
            <>
              {/* rest projects */}
              {PROJECTS_LISTS.slice(5).map((project) => {
                return (
                  <ProjectTile
                    key={project.id}
                    project={project}
                    flipped={project.id % 2 !== 0}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
