/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { ArrowLongRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import * as LottiePlayer from "@lottiefiles/lottie-player";
import iconQuote from "../assets/icon-quote.png";
import { useEffect, Fragment, useState } from "react";
import useLocalStorage from "../Authentication/use-local-storage";

export default function InfoCard({ image }) {
  const cardVariant = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col md:justify-between items-center md:flex-row-reverse w-full bg-inherit "
      shadow={false}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="lg:w-2/4 md:w-2/5 shrink-0 m-0 rounded-l-none relative isolate"
      >
        <motion.div variants={cardVariant} className="">
          <img src={image} alt="image" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute -z-10 left-0 top-0">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/packages/lf20_w6y7r1ap.json"
          ></lottie-player>
        </div>
      </CardHeader>
      <CardBody className="w-full flex flex-col justify-center lg:pl-32">
        <div className="text-clip-container">
          <Typography
            variant="h2"
            className="mb-4  bg-gradient-to-r text-clip from-blue-800 via-blue-300 to-light-green-200"
          >
            Meet Driverless XI
          </Typography>
        </div>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          The world’s first autonomous ride-hailing service
        </Typography>
        <Typography className="lg:max-w-xl font-normal mb-8">
          Like so many organizations these days, Driverless is a company in
          transition. It was until recently a traditional boxed autonomous
          company selling turbos. Yet its own business model disruption is only
          part of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex text-lg items-center gap-2">
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            Be one of the first
          </Button>
        </a>
      </CardBody>
    </motion.div>
  );
}

export const FeaturesCard = () => {
  const cardVariant = (duration) => {
    return {
      offscreen: {
        y: 300,
      },
      onscreen: {
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: duration,
        },
      },
    };
  };
  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="h-fit grid md:grid-cols-3 gap-2 py-8 pb-12"
    >
      <motion.section variants={cardVariant(0.8)}>
        <Card className="mt-6 !w-full h-full !bg-inherit shadow-2xl">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Available 24/7
            </Typography>
            <Typography>
              Day or night, we&apos;ll get you where you need to go.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>
      <motion.section variants={cardVariant(1)}>
        <Card className="mt-6 w-full !bg-inherit shadow-2xl h-full">
          <CardBody>
            <BuildingOffice2Icon className="text-green-500 w-12 h-12 mb-4" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Operating in multiple cities
            </Typography>
            <Typography>
              Ride in San Francisco or Phoenix. Los Angeles coming soon.
            </Typography>
          </CardBody>
        </Card>
      </motion.section>
      <motion.section variants={cardVariant(1.5)} className="">
        <Card className="mt-6 w-full !bg-inherit shadow-2xl h-full">
          <CardBody>
            <ShieldCheckIcon className="text-blue-gray-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              An experience second to none
            </Typography>
            <Typography>Convenient. Consistent. Safe.</Typography>
          </CardBody>
        </Card>
      </motion.section>
    </motion.article>
  );
};

export const Testimonial = () => {
  return (
    <div className="flex flex-col bg-[#2196f3]  py-16 gap-10">
      <div>
        <Typography
          variant="h2"
          className="mb-4 font-light text-white lg:px-24 md:px-8 px-4"
        >
          Why they ride with Driverless
        </Typography>
        <HorizontalRule color={"border-white"} />
      </div>
      <div className="lg:px-36 md:px-12 gap-6 px-4 flex flex-col">
        <img src={iconQuote} alt="''" className="w-fit" />
        <p className="text-white lg:text-5xl md:text-3xl text-2xl font-medium tracking-wider lg:tracking-widest font-Roboto">
          The fact that Driverless provides convenience, prioritizes safety, and
          is committed to sustainability makes it by far my favorite mode of
          transportation.
        </p>
        <p className="text-white text-xl font-semibold font-serif">
          <span className=" text-gray-300">Zerebel, </span>
          San Francisco
        </p>
        <AvatarDiv />
      </div>
    </div>
  );
};

export const phpServer = "https://d373-41-155-6-35.ngrok-free.app";

const HorizontalRule = ({ color }) => {
  return (
    <div className={`"md:px-8 px-4 h-1 w-full mt-2 "`}>
      <hr className={` ${color ? color : "border-blue-gray-600"}`} />
    </div>
  );
};

function AvatarDiv() {
  return (
    <div className="flex items-center -space-x-2">
      <Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 2"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 3"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 4"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 5"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
      />
    </div>
  );
}

export function NewsletterCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [message, setMessage] = useState(false);
  return (
    <>
      <Card className="w-full !flex md:!flex-row !justify-center !items-center bg-inherit text-white md:py-4 lg:py-6">
        <CardBody className="flex flex-col md:gap-4 lg:gap-10 md:flex-row">
          <div className="rounded-full bg-black w-fit p-3 self-center md:self-start relative">
            <EnvelopeIcon className="w-12 h-12" />
            <span className="h-2 w-2 bg-white rounded-full absolute top-4 right-3 animate-ping"></span>
          </div>
          <Typography className="text-lg md:text-xl text-center md:text-start lg:text-2xl lg:max-w-3xl font-semibold">
            Subscribe for updates to get the latest on Driverless, our
            technology, and where we’re headed next.
          </Typography>
        </CardBody>
        <CardFooter className="self-center">
          <Button
            className="lg:py-4 lg:px-10 capitalize text-lg"
            onClick={handleOpen}
          >
            Subscribe
          </Button>
        </CardFooter>
      </Card>
      {/* Popup */}
      <Fragment>
        <Dialog open={open} handler={handleOpen}>
          <form
            className="!w-full sm:w-96"
            onSubmit={(e) => {
              e.preventDefault();
              setMessage("Request sent successfully");
            }}
          >
            <DialogHeader>Get Updates soon</DialogHeader>
            <DialogBody divider>
              <Input
                size="lg"
                label="Email"
                required
                name="email"
                type="email"
                onChange={() => setMessage(false)}
                className="!mt-0"
              />
              <div className="text-green-600 text-center w-full">
                {message && message}
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Close</span>
              </Button>
              <Button variant="gradient" color="green" type="submit">
                <span>Subscribe</span>
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
      </Fragment>
    </>
  );
}

export function Timer() {
  const [remainingTime, setRemainingTime] = useLocalStorage(null);

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 2);

    const updateRemainingTime = () => {
      const now = new Date();
      const timeDifference = countdownDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      } else {
        setRemainingTime(null);
      }
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="lg:px-24 mb-2 gap-4 md:px-8 px-4 flex flex-col items-center shadow-2xl py-4">
      <Typography className="tracking-widest uppercase text-4xl font-bold text-indigo-700">
        fest starting
      </Typography>
      <div className="flex gap-2 md:gap-12 text-6xl">
        <div>
          <p className="text-lg text-gray-600">Days</p>
          <p>{remainingTime ? remainingTime.days : "00"}</p>
        </div>
        <div className="self-end">:</div>
        <div>
          <p className="text-lg text-gray-600">Hours</p>
          <p>{remainingTime ? remainingTime.hours : "00"}</p>
        </div>
        <div className="self-end">:</div>
        <div>
          <p className="text-lg text-gray-600">Minutes</p>
          <p>{remainingTime ? remainingTime.minutes : "00"}</p>
        </div>
        <div className="self-end">:</div>
        <div>
          <p className="text-lg text-gray-600">Seconds</p>
          <p>{remainingTime ? remainingTime.seconds : "00"}</p>
        </div>
      </div>
    </section>
  );
}
