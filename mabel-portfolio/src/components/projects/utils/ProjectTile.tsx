"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useScreenSizes from "@/hooks/useWindowSize";
import { VerticalCommonVariants } from "@/utils/framerVariants";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import Image from "next/image";

interface PapgeProps {
  project: Project;
  flipped?: boolean;
}

const ProjectTile = ({ project, flipped }: PapgeProps) => {
  const [, , isMdMedium] = useScreenSizes();
  const verticalMoreSkills = VerticalCommonVariants(60);
  const [hovering, setHovering] = useState({
    live: false,
    demo: false,
    github: false,
  });
  const {
    id,
    title,
    stacks,
    description,
    liveLink,
    demoLink,
    repoLink,
    thumbnail,
    cssWrapper,
    cssDesc,
    cssBtn,
    cssUnderline,
  } = project;

  return (
    <div>
      <div>
        {/* left wrapper*/}
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{
            amount: "some",
            margin: "100% 0% -9% 0%",
          }}
          variants={verticalMoreSkills}
          className={`flex flex-col gap-4 my-16
                    px-3
                    xxsm:px-6
                    sm:px-9
                    xmmd:w-1/2 xmmd:px-0 xmmd:mt-0`}
        >
          {/* description */}
          <motion.p
            variants={verticalMoreSkills}
            className={`text-lg leading-6 tracking-tight xmmd:leading-tight xmmd:tracking-tight font-semibold ${cssDesc}`}
          >
            {" "}
            {description}{" "}
          </motion.p>

          {/* tech stacks & buttons*/}
          <div className="flex gap-4 flex-col sm:flex-row xmmd:flex-col">
            {/* tech stacks */}
            <motion.div
              variants={verticalMoreSkills}
              className="flex flex-col gap-3 
                        sm:w-7/12 
                        xmmd:w-fit"
            >
              {stacks.BC.length > 0 && (
                <motion.div
                  variants={verticalMoreSkills}
                  key={"blockchain"}
                  className="flex gap-1 items-center"
                >
                  <p className="font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24">
                    Major:{" "}
                  </p>
                  <p className="font-semibold text-base xsm:w-24 xsm:text-lg sm:w-24">
                    Multimedia
                  </p>
                </motion.div>
              )}

              {/* back-end */}
              {stacks.BE.length > 0 && (
                <motion.div
                  variants={verticalMoreSkills}
                  key={"backend"}
                  className="flex gap-1 items-center"
                >
                  <p className="font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24">
                    University
                  </p>
                  <p className="font-semibold text-base xsm:w-24 xsm:text-lg sm:w-24">
                    Staffordshire University, UK
                  </p>
                </motion.div>
              )}

              {/* front-end */}
              {[
                stacks.FE.length > 0 && (
                  <motion.div
                    variants={verticalMoreSkills}
                    key={"frontend"}
                    className="flex gap-1 items-center"
                  >
                    <p className="font-bold text-base w-[5.5rem] xsm:w-24 xsm:text-lg sm:w-24">
                      Graduated:{" "}
                    </p>
                    <p className="font-semibold text-base xsm:w-24 xsm:text-lg sm:w-24">
                      2005
                    </p>
                  </motion.div>
                ),
              ]}

              {/* front-end */}
              {[
                stacks.Mobile.length > 0 && (
                  <motion.div
                    variants={verticalMoreSkills}
                    key={"front-end"}
                    className="flex gap-1 items-center"
                  >
                    <p className="text-lg font-bold w-16">Mobile: </p>
                    <div className="flex gap-1">
                      {stacks.Mobile.map((tech, key) => {
                        return (
                          <motion.a
                            href={tech.techLink}
                            key={key}
                            target="_blank"
                            title={tech.technology}
                            variants={verticalMoreSkills}
                            className="flex items-center cursor-pointer"
                          >
                            <motion.img
                              whileHover={{
                                x: [0, -80, 90, -80, 70, -60, 0],
                                y: [0, -80, 70, -60, 0],
                                transition: { duration: 0.5 },
                              }}
                              src={`assets/tech_logos/${tech.technology.toLowerCase()}.svg`}
                              alt={`${tech}-logo`}
                              width={43}
                              className={`hover:scale-125 scale transition duration-300 select-none`}
                            />
                          </motion.a>
                        );
                      })}
                    </div>
                  </motion.div>
                ),
              ]}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectTile;
