/* eslint-disable react/prop-types */
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AuthProvider from "../Authentication/AuthContext";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUS() {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(1);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Card color="white" className="shadow-2xl py-6 px-6 " shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Contact Us
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to contact us.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            handleOpen();
          }}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              required
              name="fullName"
              onChange={() => setMessage(false)}
              type="text"
            />
            <Input
              size="lg"
              label="Email"
              required
              name="email"
              type="email"
              onChange={() => setMessage(false)}
            />
            <Textarea
              label="Message"
              required
              name="message"
              onChange={() => setMessage(false)}
            ></Textarea>
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Contact
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            All settled?{" "}
            <Button
              href="#"
              className="font-medium text-blue-500 transition-colors px-0 py-0 text-sm hover:text-blue-700"
              variant="text"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          </Typography>
          <div className="text-green-600 text-center w-full">
            {message && message}
          </div>
        </form>
      </Card>

      {/* Popup */}
      <Fragment>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Your answer might be here</DialogHeader>
          <DialogBody divider>
            <AccordionDiv open={openAccordion} setOpen={setOpenAccordion} />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                setMessage("Request sent successfully");
                handleOpen();
              }}
            >
              <span>Proceed anyway</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </>
  );
}

function AccordionDiv({ open, setOpen }) {
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        className="border border-blue-gray-100 px-4 rounded-lg mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What is Driverless Xi?
        </AccordionHeader>
        <AccordionBody className="text-sm font-normal pt-0">
          Driverless One is our public, fully autonomous ride-hailing service.
          Riders can use the Driverless One app to hail one of our autonomously
          driven vehicles (with no human driver in the front seat!) 24 hours a
          day, 7 days a week.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="border border-blue-gray-100 px-4 rounded-lg mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Where does Driverless Xi operate?
        </AccordionHeader>
        <AccordionBody className="text-sm font-normal pt-0">
          Our Driverless One ride-hailing service operates in Metro Phoenix, San
          Francisco, and is ramping up in Los Angeles County. We look forward to
          expanding further. Our Metro Phoenix territory currently includes
          parts of Downtown Phoenix, Scottsdale, Tempe, Mesa, and Chandler.
          Riders in San Francisco can ride throughout the city, and we look
          forward to sharing our Los Angeles territory!
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="border border-blue-gray-100 px-4 rounded-lg"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How do I get a ride?
        </AccordionHeader>
        <AccordionBody className="text-sm font-normal pt-0">
          In Metro Phoenix, anyone can take a fully autonomous ride today. Just
          download the Driverless Xi app and ride right away. In San Francisco,
          riders can download the Driverless Xi app to join our waitlist as our
          service ramps up in the City by the Bay. If you’re in Los Angeles,
          join our waitlist here and we’ll reach out when it’s your time to
          ride.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="border border-blue-gray-100 px-4 rounded-lg"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Who are Driverless Xi Trusted Testers?
        </AccordionHeader>
        <AccordionBody className="text-sm font-normal pt-0">
          Trusted Testers participate in research for Driverless Xi. These
          riders share their experiences directly with our team to help shape
          the future of autonomous driving technology. Let us know if you’d like
          to become a Trusted Tester by downloading the app and expressing
          interest in the Account tab.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className="border border-blue-gray-100 px-4 rounded-lg"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Can I provide feedback on how the cars drive on the road?
        </AccordionHeader>
        <AccordionBody className="text-sm font-normal pt-0">
          Your feedback is important to us. If you&apos;ve seen us on the road
          and would like to provide feedback on how we drive, please contact us
          and tell us about your experience. If you are a Waymo One rider and
          would like to provide feedback on your service experience, please
          reach out to our Rider Support team via the app.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default function Contact() {
  return (
    <AuthProvider>
      <div className="flex flex-col w-full min-h-screen h-full justify-center items-center bg-blue-gray-50">
        <ContactUS />
      </div>
    </AuthProvider>
  );
}
