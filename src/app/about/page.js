"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import About from "../../sections/About/About";
import TopAbout from "../../sections/TopAbout/TopAbout";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <TopAbout />
        <About />
      </main>
      <Footer />
    </>
  );
}