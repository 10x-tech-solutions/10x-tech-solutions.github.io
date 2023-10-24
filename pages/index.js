import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>10X Technology Solutions</title>
        <meta
          name="description"
          content="10X Technology Solutions for All of Your Software Needs"
        />
      </Head>

      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;