"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTheme } from './Contexts/ThemeContext';
import { RESUME_DATA } from './data/resume-data';
import ExperienceSection from './components/ExperienceSection';

export default function Portfolio() {
  // Animation for main content
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate loading to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 700); // fade out duration
    }, 1400);

    // Add scroll event listener for setting active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation for main content

  return (
    <>
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] dark:from-[#232526] dark:to-[#414345] z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Animated SVG Morphing Blob */}
            <motion.svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <motion.path
                d="M90 20C120 20 160 40 160 90C160 140 120 160 90 160C60 160 20 140 20 90C20 40 60 20 90 20Z"
                fill="url(#paint0_radial)"
                initial={{
                  d: "M90 20C120 20 160 40 160 90C160 140 120 160 90 160C60 160 20 140 20 90C20 40 60 20 90 20Z"
                }}
                animate={{
                  d: [
                    "M90 20C120 20 160 40 160 90C160 140 120 160 90 160C60 160 20 140 20 90C20 40 60 20 90 20Z",
                    "M90 30C130 10 170 60 150 100C130 140 70 170 40 120C10 70 50 30 90 30Z",
                    "M90 20C120 20 160 40 160 90C160 140 120 160 90 160C60 160 20 140 20 90C20 40 60 20 90 20Z"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(90 90) rotate(90) scale(90)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff6a00" />
                  <stop offset="0.5" stopColor="#ee0979" />
                  <stop offset="1" stopColor="#43cea2" />
                </radialGradient>
              </defs>
            </motion.svg>
            {/* Animated Logo with Glow */}
            <motion.img
              src="./vedulogo.png"
              alt="Logo"
              className="w-24 h-24 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 animate-pulse"
              initial={{ scale: 0.7, filter: "blur(8px) brightness(0.7)" }}
              animate={{ scale: [0.7, 1.1, 1], filter: ["blur(8px) brightness(0.7)", "blur(0px) brightness(1)", "blur(2px) brightness(1.2)", "blur(0px) brightness(1)"] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            {/* Animated Gradient Text */}
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#43cea2] drop-shadow-lg animate-gradient-x"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              Welcome to <span className="tracking-widest">Portfolio</span>
            </motion.h1>
            {/* Animated Dots */}
            <motion.div className="flex gap-2 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ee0979] shadow-lg"
                  initial={{ scale: 0.7, opacity: 0.5 }}
                  animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, repeatType: "loop" }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.7, delay: showLoader ? 0 : 0.1, ease: 'easeInOut' }}
      >
        {/* Main content below */}
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-x-hidden">
          <NavigationBar activeSection={activeSection} />
          <motion.main 
            className="flex-grow"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.section id="home" variants={fadeInUp}>
              <HeroSection data={RESUME_DATA as any} />
            </motion.section>
            <motion.section id="about" variants={fadeInUp}>
              <AboutSection data={RESUME_DATA} />
            </motion.section>
            <motion.section id="skills" variants={fadeInUp}>
              <SkillsSection skills={[...RESUME_DATA.skills]} />
            </motion.section>
            <motion.section id="experience" variants={fadeInUp}>
              <ExperienceSection experience={RESUME_DATA.experience} />
            </motion.section>
            <motion.section id="projects" variants={fadeInUp}>
              <ProjectsSection 
                projects={RESUME_DATA.projects.map(project => ({
                  ...project,
                  techStack: [...project.techStack]
                }))}
              />
            </motion.section>
            <motion.section id="education" variants={fadeInUp}>
              <EducationSection education={[...RESUME_DATA.education]} />
            </motion.section>
            <motion.section id="contact" variants={fadeInUp}>
              <ContactSection 
                contact={{
                  ...RESUME_DATA.contact,
                  social: [...RESUME_DATA.contact.social]
                }} 
                location={RESUME_DATA.location}
              />
            </motion.section>
          </motion.main>
          <Footer socialLinks={[...RESUME_DATA.contact.social]} />
        </div>
      </motion.div>
    </>
  );
}
