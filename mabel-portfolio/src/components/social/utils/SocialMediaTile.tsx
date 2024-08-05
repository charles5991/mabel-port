"use client";

import { motion } from "framer-motion";
import { ImMail } from "react-icons/im";
import { SiDiscord, SiTiktok } from "react-icons/si";
import { BsGithub, BsTwitter, BsReddit, BsLinkedin } from "react-icons/bs";

interface PageProps {
  social: {
    id: number;
    title: string;
    desc: string;
  };
}

const SocialMediaTile = ({ social }: PageProps) => {
  const { id, title, desc } = social;
  return (
    <motion.div
      className={`cursor-pointer flex items-center w-fit rounded-lg
                w-full gap-3 py-1
                sm:pl-6 sm:gap-6 sm:py-3
                xmmd:w-[90%]
                xl:w-3/4`}
    >
      {/* icons */}
      <div className="text-5xl">-</div>

      {/* title/desc */}
      <div className="flex flex-col">
        <div className="text-base sm:text-lg tracking-tight font-semibold text-gray-500">
          {desc}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialMediaTile;
