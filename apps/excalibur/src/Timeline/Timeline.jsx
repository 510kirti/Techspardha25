import "./Timeline.css";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Card = ({ initial, date, name, detail }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    const focus = ref.current;
    const carddiv = focus.querySelector(".timeline-card");
    if (isInView) {
      mainControls.start("visible");
      carddiv.classList.add("shadow-custom", "before:shadow-[0_0_5px_#db40f3]");
    } else {
      carddiv.classList.remove(
        "shadow-custom",
        "before:shadow-[0_0_5px_#db40f3]"
      );
    }
  }, [isInView]);

  return (
    <div
      className="timeline-extra-card relative w-full m p-6 odd:rounded-bl-[3rem] even:rounded-br-[3rem] odd:border-b-[10px] odd:border-l-[10px] even:border-b-[10px] even:border-r-[10px] border-[#D946EF] odd:pl-12 even:pr-12  last:border-b-0 last:rounded-none
       before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:border-[8px] before:border-white before:bg-[#9110a4] odd:before:right-[calc(100%-3.5px)] even:before:left-[calc(100%-3.5px)] before:absolute before:top-1/2 before:-translate-y-1/2 before:z-10
       before:shadow-[0_0_20px_4px_#9110a4]"
      ref={ref}
    >
<motion.div
  className="timeline-card w-full max-w-[28rem] h-[12.75rem] p-10 flex flex-col flex-shrink-0 justify-evenly bg-[rgba(0,0,0,0.776)] rounded-[10px] odd:items-start odd:text-left even:items-end even:text-right overflow-y-auto"
  variants={{
    hidden: { x: initial },
    visible: { x: 0 },
  }}
  initial="hidden"
  animate={mainControls}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <div className="flex flex-col w-full">
    <span className="text-pink-300 font-quicksand text-xl font-extrabold leading-7">
      {date}
    </span>
    <span className="text-white font-kode text-lg font-semibold leading-7">
      {name}
    </span>
    <div className="relative max-h-[6rem]">
      <p className="text-white font-quicksand text-base font-normal leading-6">
        {detail}
      </p>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default function Timeline() {
  return (
    <section className="max-w-[760px] w-[98%] backdrop-blur-[20px] shadow-[0_0_0_rgba(0,0,0,0.893)] text-[#d5d5d5] text-2xl rounded-[20px] p-5  text-center">
      <h2 className="m-12 font-starlord tracking-[2px] font-normal">Schedule</h2>
      <div className="my-0 mx-auto max-w-[31rem]">
        <Card
          key={1}
          initial={2000}
          date={"22th Feb 10:00 AM"}
          name={"Registration Starts"}
          detail={
            "Register using the register button by submitting your details."
          }
        />
        <Card
          key={2}
          initial={-2000}
          date={"29th Feb 10:00 AM"}
          name={"Registration Ends"}
          detail={"We will be starting the ideation round right after."}
        />
        <Card
          key={3}
          initial={2000}
          date={"29th Feb 10:00 AM"}
          name={"PPT Submission"}
          detail={
            "Submit your ideas in form of a ppt, including solution approach and techstacks, at unstop."
          }
        />
        <Card
          key={4}
          initial={-2000}
          date={"1st March 12:00 NOON"}
          name={"Ideation Results"}
          detail={
            "Selected teams can start their coding. Mentors will be assigned to selected teams."
          }
        />
        <Card
          key={5}
          initial={2000}
          date={"07th March 10:00 AM"}
          name={"Mentor's Evaluation"}
          detail={"This will be the first progress check of the team's mentor."}
        />
        <Card
          key={6}
          initial={-2000}
          date={"07th March 10:00 AM"}
          name={"Mentor's Evaluation Results"}
          detail={
            "Selected teams head for the finale. Teams need to be present on campus for finale."
          }
        />
        <Card
          key={7}
          initial={2000}
          date={"15th March 10:00 AM"}
          name={"Excalibur Finale"}
          detail={"Submit and present your project before our judges."}
        />
      </div>
    </section>
  );
}
