import { motion } from "framer-motion";
import { useState } from "react";

import InfoCard, {
  FeaturesCard,
  NewsletterCard,
  Testimonial,
  Timer,
} from "./_props";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import WelcomeVideo from "../assets/Waymo.webm";
import altImage1 from "../assets/videoAlt1.webp";
import altImage2 from "../assets/VideoAlt2.webp";
import CarImage from "../assets/car1.png";

export default function Landing() {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => setVideoError((error) => !error);

  const rightCardVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };
  const leftCardVariants = {
    offscreen: {
      x: -100,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <article className="flex flex-col py-4">
      {/* text */}
      <motion.section
        className="flex flex-col md:flex-row lg:px-36  md:px-8 px-4 md:justify-between gap-8 pb-2"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={leftCardVariants}>
          <h1 className="text-4xl max-w-lg leading-[-1] font-Roboto font-bold text-gray-900">
            The World’s Most Experienced Driver™
          </h1>
        </motion.div>
        <motion.div className="max-w-md" variants={rightCardVariants}>
          <h2 className="text-lg text-gray-900 tracking-widest leading-[-1]">
            Making it safe and easy for people and things to get around —
            without the need for anyone in the driver’s seat.
          </h2>
          <Button
            variant="text"
            className=" !text-blue-900"
            startIcon={<SendIcon />}
          >
            Take a fully autonomous ride
          </Button>
        </motion.div>
      </motion.section>
      {/* Video */}
      <section className="">
        {/* desktop view */}
        <div className="hidden w-screen md:flex md:items-center lg:h-[30rem] md:h-[22rem] md:overflow-hidden bg-gray-500">
          {videoError ? (
            <img
              src={altImage1}
              alt="fallbackImage"
              className="w-full h-auto"
            />
          ) : (
            <video
              className="w-full lg:h-[48rem] md:h-[30rem]"
              autoPlay
              loop
              muted
              onError={handleVideoError}
            >
              <source src={WelcomeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {/* mobile view */}
        <div className="md:hidden">
          <img src={altImage2} alt="mobile-image" />
        </div>
      </section>
      <section className="mt-8">
        <div className="uppercase lg:px-36 md:px-8 px-4">
          <p className=" text-2xl font-semibold tracking-widest font-Roboto text-gray-800">
            Driverless <span className="text-black">xi</span>
          </p>
        </div>
        {/* image / text */}
        <div className="flex ">
          <InfoCard image={CarImage} />
        </div>
        <div className="lg:px-28 md:px-8 px-4 h-1 w-full mt-2 ">
          <hr className=" border-blue-gray-600" />
        </div>
        {/* Features */}
        <div className="flex lg:px-24 md:px-8 px-4 py-12 mb-4">
          <FeaturesCard />
        </div>
      </section>

      {/* Timer */}
      <Timer />
      {/* Testimonial */}
      <section className="">
        <Testimonial />
      </section>
      {/* Newsletter */}
      <section className="lg:px-24 md:px-8 px-4 newsletter text-white">
        <div className="bg-[#23233c]">
          <NewsletterCard />
        </div>
      </section>
    </article>
  );
}
