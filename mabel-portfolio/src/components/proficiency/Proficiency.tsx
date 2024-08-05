"use client";

import { useState, useEffect } from "react";
import useScreenSizes from "@/hooks/useWindowSize";
import { useAnimation, motion } from "framer-motion";
import SkillProficientBar from "./utils/SkillProficientBar";
import { SmotionDiv, SmotionHeader } from "@/libs/framer-motion";
import {
  MORE_SKILLS_LISTS,
  MAIN_LEFT_SKILLS_LISTS,
  MAIN_RIGHT_SKILLS_LISTS,
} from "@/utils/constants";
import {
  VerticalCommonVariants,
  HorizontalCommonVariants,
} from "@/utils/framerVariants";

const Stats = () => {
  const shakingAnimation = useAnimation();
  const [isSmall, isMedium] = useScreenSizes();
  const [mounted, setMounted] = useState(false);
  const [moreSkillsList, setMoreSkillsList] = useState(MORE_SKILLS_LISTS);
  const [leftSkillsList, setLeftSkillsList] = useState(MAIN_LEFT_SKILLS_LISTS);
  const [rightSkillsList, setRightSkillsList] = useState(
    MAIN_RIGHT_SKILLS_LISTS
  );

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const newMoreSkillList = moreSkillsList.map((tech) => {
        return { ...tech, shouldShake: Math.random() < 0.5 };
      });
      const newLeftSkillList = leftSkillsList.map((tech) => {
        return { ...tech, shouldShake: Math.random() < 0.5 };
      });
      const newRightSkillList = rightSkillsList.map((tech) => {
        return { ...tech, shouldShake: Math.random() < 0.5 };
      });

      setMoreSkillsList(newMoreSkillList);
      setLeftSkillsList(newLeftSkillList);
      setRightSkillsList(newRightSkillList);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [leftSkillsList, moreSkillsList, rightSkillsList]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await shakingAnimation.start({
        rotate: isMedium
          ? [0, 90, -90, 60, -60, 30, -30, 0]
          : [0, 190, -190, 160, -160, 130, -130, 0],
        transition: { duration: 0.5, delay: 3 },
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [shakingAnimation, isMedium]);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section className="scrollbar-hidden flex justify-center items-center bg-[#EAFDF9]">
      {/* container */}
      <div
        className="relative z-20 flex flex-col overflow-hidden items-center border-2 border-[#e7edf7] bg-white gap-16 rounded-2xl
                  -top-20 px-3
                  xsm:px-6 xsm:-top-24
                  sm:px-6
                  md:-top-20 md:px-9
                  lg:-top-28 lg:px-16
                  2xl:px-20
                  "
      >
        {/* header */}
        <div className="mt-3 sm:mt-6 md:mt-9 lg:mt-12">
          <SmotionHeader
            elementType="h2"
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-2xl"
          >
            Education.
          </SmotionHeader>
        </div>

        {/* body - skill proficient bars */}
        <div className="flex flex-col gap-12 mb-6 sm:mb-9 md:mb-12 lg:mb-12">
          <div>
            <div>
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
          12312312
        </div>
      </div>
    </section>
  );
};

export default Stats;
