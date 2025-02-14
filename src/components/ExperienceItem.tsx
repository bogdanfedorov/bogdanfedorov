interface JobProps {
  company?: string;
  period?: string;
  position?: string;
  location?: string;
  description?: string;
  technologies?: string[];
  logo?: string;
  [key: string]: any; 
}

type ExperienceItemProps = {
    job: JobProps
}   

const ExperienceItem = ({ job }: ExperienceItemProps) => (
    <div className="experience-item mb-8" data-aos="fade-up">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{job.company}</h3>
        <span className="text-gray-600">{job.period}</span>
      </div>
      <p className="text-primary font-medium">{job.position}</p>
      <p className="text-gray-600 mb-2">{job.location}</p>
      <p className="mb-4">{job.description}</p>
      {job.technologies && (
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );

export default ExperienceItem;