/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Connect from "./Connect";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a
        href="/"
        className="font-extrabold text-[24px] leading-[30.24px] text-white"
      >
        METASQUARE
      </a>
      <a
        href=""
        className="font-extrabold text-[24px] leading-[30.24px] text-white"
      >
        <Link href="https://dads-organization.gitbook.io/untitled/">
          <button>Events</button>
        </Link>
      </a>
       <a
        href=""
        className="font-extrabold text-[24px] leading-[30.24px] text-white"
      >
        <Link href="/events">
          <button>Docs</button>
        </Link>
      </a>

      <Connect />
    </div>
  </motion.nav>
);
export default Navbar;
