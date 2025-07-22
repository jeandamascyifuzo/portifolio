import Image from "next/image";
import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="w-[650px] p-4 md:p-3 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-blue-500">
      <div className="flex gap-3">
        <Image
          src={experience.img}
          alt="hero image"
          className="h-12 md:h-10 bg-black rounded-lg mt-1 object-cover"
          width={50}
          height={300}
          style={{ objectFit: "cover" }}
        />

        <div className="flex flex-col ">
          <div className="text-lg md:text-sm font-semibold">
            {experience.role}
          </div>
          <div className="text-sm md:text-xs font-medium">
            {experience.company}
          </div>
          <div className="text-xs md:text-[10px] font-light text-gray-300">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="text-[15px] md:text-xs font-normal text-gray-300 mb-2">
        {experience?.desc && (
          <span className="overflow-hidden block max-w-full line-clamp-4 hover:line-clamp-none">
            {experience?.desc}
          </span>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className="flex gap-3 -mt-2">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2 text-xs">
                {experience?.skills?.map((skill, index) => (
                  <span key={index} className="font-normal text-gray-300">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <Image
            src={experience.doc}
            alt="hero image"
            className="hidden h-[70px] w-auto bg-black rounded-lg hover:cursor-pointer hover:opacity-80 hover:flex"
            width={100}
            height={300}
          />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
