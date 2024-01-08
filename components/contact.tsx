"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min (100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nisargmewada@gmail.com">
          nisargmewada@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col " action={sendEmail}>
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 ghover:bg-gray-900 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1
          group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
