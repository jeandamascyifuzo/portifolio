import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-5 pb-12 pt-32 sm:px-8 md:gap-32">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}
