import Quote from "./utils/Quote";
import { SOCIAL_FOOTER } from "@/utils/constants";
import { SmotionDiv } from "@/libs/framer-motion";
import SocialMediaTile from "./utils/SocialMediaTile";
import { HorizontalCommonVariants } from "@/utils/framerVariants";

const SocialMedia = () => {
  const horizontalVariants = HorizontalCommonVariants(90);
  return (
    // wrapper
    <div
      className="overflow-hidden h-fit
    "
    >
      {/* Quote */}
      <Quote />
      {/* Social */}
      <SmotionDiv
        initial="hidden"
        whileInView="shown"
        viewport={{
          amount: "some",
          margin: "100% 0% -9% 0%",
        }}
        variants={horizontalVariants}
        className="flex flex-col gap-6 mt-16 mb-12
                px-3
                xxsm:px-6
                sm:px-9
                xmmd:px-24 
                2xl:px-[14rem]"
      >
        {/* greetings */}
        <div>
          <SmotionDiv
            variants={horizontalVariants}
            className="text-4xl font-bold"
          >
            Key Areas of Expertise
          </SmotionDiv>
        </div>

        {/* social medias */}
        <SmotionDiv
          variants={horizontalVariants}
          className="flex flex-col gap-3"
        >
          {SOCIAL_FOOTER.map((social) => {
            return (
              <SmotionDiv
                key={social.id}
                variants={horizontalVariants}
                whileHover={{ y: -3 }}
              >
                <SocialMediaTile social={social} />
              </SmotionDiv>
            );
          })}
        </SmotionDiv>
      </SmotionDiv>
    </div>
  );
};

export default SocialMedia;
