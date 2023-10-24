import Head from "next/head";
import Construction from "../components/construction";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

const MarcosPicture = () => {
  return (
    <div className="flex-1 flex-basis-50 md:first:mr-5 md:last:ml-5">
      <img className="w-full md:h-full rounded-t-md md:rounded-t-none" src="/img/marcos.jpg" alt="Marcos Lemus" />
    </div>
  );
}

const TannerPicture = () => {
  return (
    <div className="flex-1 flex-basis-50">
      <img className="h-full md:h-full rounded-t-md md:rounded-t-none" src="/img/tanner.png" alt="Tanner Ricks" />
    </div>
  )
}

const Name = ({name}) => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[33px] md:-top-[0px] md:first:mr-5 md:last:ml-5">
      <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-emerald-100 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-emerald-100 bg-emerald-500 bg-opacity-60 dark:bg-emerald-500 dark:bg-opacity-60" >
        <span className="relative -top-[2px]">{name}</span>
      </h1>
    </div>
  )
}

const TeamDescription = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[13px] md:-top-[0px] px-2 md:mr-5">
      <div className="text-center justify-center">
        We are comprised of a team of experienced senior to principal level software engineers who 
        are passionate about creating powerful and user-friendly software solutions that are customized 
        to fit your unique set of requirements.
      </div>
    </div>
  )
}

const ServiceDescription = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[13px] md:-top-[0px] px-2">
      <div className="text-center justify-center">
        We offer a range of software development services primarily targeting web development and 
        microservice architectures. We are experienced in a number of technologies, and frameworks, 
        and are highly dedicated to acquiring all skills required to perform at the highest levels 
        on your contract.
      </div>
    </div>
  )
}

const ProcessDescription = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[13px] md:-top-[0px] px-2 ml-5">
      <div className="text-center justify-center">
          When situations allow, we follow an agile software development process that emphasizes 
          collaboration, flexibility, and rapid prototyping to ensure that our clients are satisfied 
          with the final product. If your contract requires a different process, we have experience 
          in a multitude of others and always apply our customer principal's to our work.
      </div>
    </div>
  )
}

const MeetUs = () => {
  return (
    <div className="flex flex-1 flex-basis-50 flex flex-row justify-center mb-5 md:mb-0 md:mr-5">
      <a
        href="/meet"
        className="px-8 py-4 text-lg font-medium text-center text-white bg-emerald-600 rounded-md flex-0 whitespace-nowrap">
        Meet the Team
      </a>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="flex flex-1 flex-basis-50 flex flex-row justify-center mb-5 md:mb-0 md:last:ml-5">
      <a
        href="/contact"
        className="px-8 py-4 text-lg font-medium text-center text-white bg-emerald-600 rounded-md flex-0 whitespace-nowrap">
        Contact Us
      </a>
    </div>
  )
}

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="All About 10X Technology Solutions LLC"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Construction />
      {/* <Container className="pb-0">
        <div class="container">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            About Us
          </h1>
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight dark:text-white">
            Note: Under Construction
          </h2>
        </div>
      </Container>
      <Container className="hidden md:flex md:flex-wrap pt-0">
        <div class="container p-8 px-0 ">
            <div className="flex flex-row">
              <MarcosPicture />
              <TannerPicture />
              <MarcosPicture />
            </div>
            <div className="flex flex-row relative -top-[33px] sm:-top-[33px] md:-top-[33px] lg:-top-[38px] xl:-top-[45px]">
              <Name name="Our Team"/>
              <Name name="Our Services"/>
              <Name name="Our Process"/>
            </div>
            <div className="flex flex-row relative -top-[13px] sm:-top-[13px] md:-top-[13px] lg:-top-[18px] xl:-top-[25px] mb-5">
              <TeamDescription />
              <ServiceDescription />
              <ProcessDescription />
            </div>
            <div className="flex flex-row relative -top-[13px] sm:-top-[13px] md:-top-[13px] lg:-top-[18px] xl:-top-[25px]">
              <MeetUs />
              <ContactUs />
              <ContactUs />
            </div>
        </div>
      </Container>
      <Container className="flex flex-wrap md:hidden pt-0">
        <div class="container bg-opacity-40 bg-gray-500 my-5 rounded-lg">
            <div className="flex flex-col">
              <MarcosPicture />
              <Name name="Our Team"/>
              <TeamDescription />
              <MeetUs />
            </div>
        </div>
        <div class="container bg-opacity-40 bg-gray-500 mb-5 rounded-lg">
            <div className="flex flex-col">
              <TannerPicture />
              <Name name="Our Services"/>
              <ServiceDescription />
              <ContactUs />
            </div>
        </div>
        <div class="container bg-opacity-40 bg-gray-500 rounded-lg">
            <div className="flex flex-col">
              <MarcosPicture />
              <Name name="Our Process"/>
              <ProcessDescription />
              <ContactUs />
            </div>
        </div>
      </Container> */}
      <Footer />
    </>
  );
}

export default About;