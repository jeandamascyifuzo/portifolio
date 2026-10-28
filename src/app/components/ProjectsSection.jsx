"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import SectionHeading from "./SectionHeading";
import FeaturedProject from "./FeaturedProject";
import { projects } from "@/data/portfolio";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    tag === "All" ? projects : projects.filter((p) => p.category === tag);

  return (
    <section id="projects">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Shipped to production"
        subtitle="Digital banking systems I build at ADFinance, plus websites I've designed and launched."
        center
      />
      <FeaturedProject />
      {/* Filters only help once there is more than one category. */}
      {categories.length > 2 && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <ProjectTag
              key={category}
              name={category}
              onClick={setTag}
              isSelected={tag === category}
            />
          ))}
        </div>
      )}
      <ul ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.title}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.08 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
