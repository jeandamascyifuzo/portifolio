"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./card/ExperienceCard";
import { experiences } from "@/assets/data/constants";

const AchievementsSection = () => {
  return (
    <section id="projects">
      <div
        id="experience"
        className="flex flex-col items-center justify-center relative pt-10"
      >
        <div className="relative flex flex-col items-center justify-between w-full max-w-6xl pt-20 gap-3">
          <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            Experience
          </h2>
          <p className="text-base lg:text-lg">
            My work experience as a software engineer and working on different
            companies and projects.
          </p>
          <div className="w-full max-w-4xl mt-2 flex flex-col items-center justify-center gap-3">
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector className="bg-purple-600" />
                    )}
                  </TimelineSeparator>
                  <TimelineContent className="py-3 px-2">
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
