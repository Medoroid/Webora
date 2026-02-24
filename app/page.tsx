import Navbar from "@/components/_navbar/page";
import About from "@/components/about/page";
import ContactSection from "@/components/contact/page";
import Footer from "@/components/footerr/page";
import Landing from "@/components/landing/page";
import PartnersSection from "@/components/partnares/page";
import PortfolioSection from "@/components/portfolio/page";
import Services from "@/components/services/page";
import Testimonials from "@/components/testimonials/page";
import Image from "next/image";

export default function Home() {
  return (<>
  <Navbar/>
  <Landing/>
  <About/>
  <Services/>
  <PortfolioSection/>
  <PartnersSection/>
  <Testimonials/>
  <ContactSection/>
  <Footer/>
  </>
  );
}
