"use client";
import { FC, useState } from "react";
import { CV_JSON } from "./types";

type CVProps = {
  schema: CV_JSON;
};

const CV: FC<CVProps> = ({ schema }) => {
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);

  const toggleJobDetails = (index: number) => {
    setExpandedJobs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <section className="hero-section px-6 sm:px-10 lg:px-20 page">
          <div className="container mx-auto max-w-5xl">
            <div data-aos="fade-up">
              <h1 className="text-5xl font-bold mb-4">{`${schema.name} ${schema.familyName}`}</h1>
              <p className="text-2xl mb-6">{schema.jobTitle.join(" | ")}</p>
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${schema.email}`} className="contact-button">
                  <i className="fa fa-envelope mr-2"></i>
                  {schema.email}
                </a>
                <a
                  href={schema.contact_information.linkedin}
                  className="contact-button"
                >
                  <i className="fab fa-linkedin mr-2"></i>LinkedIn
                </a>
                <a
                  href={`tel:${schema.contact_information.phone}`}
                  className="contact-button"
                >
                  <i className="fa fa-phone mr-2"></i>
                  {schema.contact_information.phone}
                </a>
                <a
                  href={schema.contact_information.github}
                  className="contact-button"
                >
                  {schema.contact_information.github}
                </a>
                <button
                  className="contact-button print:opacity-0"
                  onClick={() => {
                    if (window !== undefined) {
                      window.print();
                    }
                  }}
                >
                  Save as pdf
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto max-w-5xl px-6 sm:px-10 lg:px-20 py-12">
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="prose max-w-none">
                {Array.isArray(schema.professionalSummary)
                  ? schema.professionalSummary.map((item, index) => {
                      if (typeof item === "string") {
                        return (
                          <p key={index} className="text-lg mb-6">
                            {item}
                          </p>
                        );
                      }
                      if (typeof item === "object") {
                        if (item?.list) {
                          return (
                            <div className="mb-6" key={index}>
                              <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                              </h3>

                              <ul className="list-disc pl-6 space-y-2">
                                {item.list.map((strength, index) => (
                                  <li key={index} className="text-gray-700">
                                    {strength}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                      }
                    })
                  : null}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-8">
              {schema.hasOccupation.map((job, index) => (
                <div
                  key={index}
                  className="experience-item"
                  data-aos="fade-up"
                  onClick={() => toggleJobDetails(index)}
                >
                  <div className="flex justify-between items-start mb-2 cursor-pointer">
                    <h3 className="text-xl font-semibold">{job.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">
                        {job.startDate} - {job.endDate}
                      </span>
                      <span className="text-gray-600">
                        {expandedJobs.includes(index) ? "▼" : "▶"}
                      </span>
                    </div>
                  </div>
                  <p className="text-primary font-medium">
                    {Array.isArray(job.description)
                      ? job.description.join(" | ")
                      : job.description}
                  </p>
                  <p className="text-gray-600 mb-4">{job.location.name}</p>

                  {expandedJobs.includes(index) && (
                    <div className="mt-4 space-y-6">
                      {job.skills && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">
                            Skills & Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(job.skills) ? (
                              job.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))
                            ) : (
                              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                {job.skills}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {job.projectHighlights && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">
                            Project Highlights:
                          </h4>
                          <ul className="list-disc list-inside space-y-2">
                            {job.projectHighlights.map((highlight, i) => (
                              <li key={i} className="text-gray-700">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.systemFeatures && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">
                            System Features:
                          </h4>
                          <ul className="list-disc list-inside space-y-2">
                            {job.systemFeatures.map((feature, i) => (
                              <li key={i} className="text-gray-700">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schema.knowsAbout.map((category, index) => (
                <div
                  key={index}
                  className="skill-card page"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.description.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {schema.knowsLanguage.map((lang, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-semibold">{lang.name}</h3>
                  <p className="text-gray-600">{lang.proficiencyLevel}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {schema.alumniOf.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{edu.name}</h3>
                  <p className="text-gray-600">
                    {edu.address.addressLocality}, {edu.address.addressCountry}
                  </p>
                  <p className="text-gray-500">{edu.address.streetAddress}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="break-after-page"></div>
          <section className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Looking for</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-2">
                {schema.seeks.map((position, index) => (
                  <li key={index} className="text-lg">
                    • {position}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div className="divFooter">{schema.contact_information.website}</div>
    </>
  );
};

export default CV;
