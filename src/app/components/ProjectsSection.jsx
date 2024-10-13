"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Travel to Germany",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.akagera-rhein-academy.com/",
  },
  {
    id: 2,
    title: "Beegulf",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    previewUrl: "https://beegulf.rw/",
  },
  {
    id: 3,
    title: "Bongalo",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.bongalo.com/",
  },
  {
    id: 4,
    title: "Code Renders",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.coderenders.com/",
  },
  {
    id: 5,
    title: "My Portifolio",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      {/* <div className="bg-[#061325] min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full bg-[#1b3a5b] rounded-lg shadow-lg p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold text-green-400 mb-4">
              Daniel Nziranziza
            </h1>
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">
              a talented software developer
            </h2>
            <p className="text-gray-300 mb-6">
              I build and design web and mobile apps. For the past 4 years, I
              have been working as a web developer for several companies across
              the globe. I am currently working as a full-time freelancer
              through Upwork, for a client called Crowdsolytics, building an app
              for Operator.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-medium text-green-400 border border-green-400 px-5 py-3 rounded-lg hover:bg-green-400 hover:text-white transition duration-300"
            >
              Lets chat
            </a>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-10">
            <div className="bg-[#13354e] p-6 rounded-lg shadow-lg">
              <h3 className="text-green-300 text-sm uppercase mb-2">
                Highlighted Project
              </h3>
              <h4 className="text-3xl font-bold text-white mb-4">
                My Portfolio
              </h4>
              <p className="text-gray-300 mb-6">
                My portfolio website is one of the most interesting projects I
                ever worked on. Unlike other projects which are managed and
                designed by other people, I design, manage, and develop this
                website all by myself. I am currently learning different things
                as I work on it, and I would love your feedback.
              </p>
              <div className="flex flex-wrap gap-2 text-gray-400">
                <span>Figma</span>
                <span>GatsbyJS</span>
                <span>SCSS</span>
                <span>TailwindCSS</span>
                <span>Contentful</span>
                <span>GitHub Pages</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectsSection;
