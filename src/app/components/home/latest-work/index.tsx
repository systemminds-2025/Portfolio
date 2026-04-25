"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";

const LatestWork = () => {
  const workItems = [
    {
      title: "Backend Development",
      image: "/images/work/work-img-1.jpg",
      description:
        "I build scalable backend systems using Java, Spring Boot, Spring Security, JPA, and Hibernate with clean service-layer architecture.",
      points: [
        "REST API development",
        "Authentication and authorization",
        "Database integration",
        "Production-ready backend structure"
      ]
    },
    {
      title: "Frontend Development",
      image: "/images/work/work-img-2.jpg",
      description:
        "I create responsive user interfaces using React, Tailwind CSS, Bootstrap, HTML5, and CSS3 with a focus on clean UX and maintainable components.",
      points: [
        "Responsive web pages",
        "Reusable UI components",
        "API integration",
        "Clean layouts and interactions"
      ]
    },
    {
      title: "Cloud, Tools and Delivery",
      image: "/images/work/work-img-3.jpg",
      description:
        "I handle deployments and development workflows using GCP Cloud Run, DigitalOcean, Hostinger, Git, GitHub, Postman, Swagger, SonarQube, and Jira.",
      points: [
        "Deployment support",
        "API testing and documentation",
        "Code quality workflows",
        "Project delivery collaboration"
      ]
    },
    {
      title: "AI and Integrations",
      image: "/images/work/work-img-4.jpg",
      description:
        "I integrate modern AI services such as Generative AI, Deepgram, and AssemblyAI into real applications for speech and automation use cases.",
      points: [
        "Speech-to-text integrations",
        "Text-to-speech workflows",
        "LLM-powered features",
        "External API orchestration"
      ]
    }
  ];

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>What I do</h2>
              <p className="text-xl text-orange-500">( 05 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workItems.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={getImgPath(value.image)}
                        alt={value.title}
                        width={720}
                        height={420}
                        className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-4 p-6 md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <h5>{value.title}</h5>
                        <span className="text-primary text-xl font-semibold">0{index + 1}</span>
                      </div>
                      <p className="text-secondary text-sm md:text-base leading-relaxed">
                        {value.description}
                      </p>
                      <ul className="space-y-2 text-sm md:text-base text-black">
                        {value.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-black/10">
                        <p className="text-xs md:text-sm text-secondary">
                          Focused on building practical, reliable, and user-ready software solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
