import PS from "./client/PS";
import { SmotionDiv, SmotionHeader } from "@/libs/framer-motion";

const About = () => {
  return (
    <section
      className="overflow-hidden scrollbar-hidden bg-primary
                h-[300px]
                md:h-[350px]
                lg:h-[400px]"
    >
      {/* container */}
      <div
        className="flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto"
      >
        {/* header */}
        <div>
          <SmotionHeader
            elementType="h2"
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            About.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: "some", margin: "100% 0% -9% 0%" }}
            className="flex justify-center -mt-0.5"
          >
            <hr className="bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl" />
          </SmotionDiv>
        </div>

        {/* body */}
        <SmotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
          className="font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9"
        >
          {/* first sentence */}
          <SmotionDiv>
            <p>
              An experienced professional
              <br className="hidden xxsm:block xsm:hidden" /> with a solid
              <br className="hidden xsm:block sm:hidden" /> background in
              devising IT solutions <br className="hidden lg:block" />
              for improved business efficiency and client-facing services.{" "}
            </p>
          </SmotionDiv>

          {/* @medium-device: second sentence */}
          <SmotionDiv className="hidden sm:block">
            <p>
              A great communicator
              <span className="sm:hidden md:inline">who </span>
              <span className="hidden lg:inline"> takes great pride</span>{" "}
              <span className="sm:hidden md:inline">excellence,</span>
              in finding the right solution for difficult problems.{" "}
            </p>
          </SmotionDiv>

          {/* third sentence */}
          <div className="mt-6 flex justify-center">
            <PS />
          </div>
        </SmotionDiv>
      </div>
    </section>
  );
};

export default About;
