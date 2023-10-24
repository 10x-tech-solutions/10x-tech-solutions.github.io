import Head from "next/head";
import Construction from "../components/construction";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

const MarcosPicture = () => {
  return (
    <div className="flex-1 flex-basis-50">
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

const MarcosName = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[33px] md:-top-[0px]">
      <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-emerald-100 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-emerald-100 bg-emerald-500 bg-opacity-60 dark:bg-emerald-500 dark:bg-opacity-60" >
        <span className="relative -top-[2px]">Marcos Lemus</span>
      </h1>
    </div>
  )
}

const TannerName = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[33px] md:-top-[0px]">
      <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-emerald-100 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-emerald-100 bg-emerald-500 bg-opacity-60 dark:bg-emerald-500 dark:bg-opacity-60" >
        <span className="relative -top-[2px]">Tanner Ricks</span>
      </h1>
    </div>
  )
}

const MarcosDescription = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[13px] md:-top-[0px] px-2">
      <div className="text-center justify-center">
        nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi 
        proin sed libero enim sed faucibus turpis 
      </div>
    </div>
  )
}

const TannerDescription = () => {
  return (
    <div className="flex-1 flex-basis-50 relative md:static -top-[13px] md:-top-[0px]  px-2">
      <div className="text-center justify-center">
        nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi 
        proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque 
        egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit 
        libero volutpat sed cras ornare arcu 
      </div>
    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="flex flex-1 flex-basis-50 flex flex-row justify-center mb-5 md:mb-0">
      <a
        href="/contact"
        className="px-8 py-4 text-lg font-medium text-center text-white bg-emerald-600 rounded-md flex-0 whitespace-nowrap">
        Contact Us
      </a>
    </div>
  )
}

const Meet = () => {
  return (
    <>
      <Head>
        <title>Meet the Team</title>
        <meta
          name="description"
          content="Meet the Team Here at 10X Technology Solutions LLC"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Construction />
      {/* <Container className="pb-0">
        <div class="container">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Meet the Team
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
            </div>
            <div className="flex flex-row relative -top-[33px] sm:-top-[33px] md:-top-[33px] lg:-top-[38px] xl:-top-[45px]">
              <MarcosName />
              <TannerName />
            </div>
            <div className="flex flex-row relative -top-[13px] sm:-top-[13px] md:-top-[13px] lg:-top-[18px] xl:-top-[25px] mb-5">
              <MarcosDescription />
              <TannerDescription />
            </div>
            <div className="flex flex-row relative -top-[13px] sm:-top-[13px] md:-top-[13px] lg:-top-[18px] xl:-top-[25px]">
              <ContactUs />
              <ContactUs />
            </div>
        </div>
      </Container>
      <Container className="flex flex-wrap md:hidden pt-0">
        <div class="container bg-opacity-40 bg-gray-500 my-5 rounded-lg">
            <div className="flex flex-col">
              <MarcosPicture />
              <MarcosName />
              <MarcosDescription />
              <ContactUs />
            </div>
        </div>
        <div class="container bg-opacity-40 bg-gray-500 rounded-lg">
            <div className="flex flex-col">
              <TannerPicture />
              <TannerName />
              <TannerDescription />
              <ContactUs />
            </div>
        </div>
      </Container> */}
      <Footer />
    </>
  );
}

export default Meet;