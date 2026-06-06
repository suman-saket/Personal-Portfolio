import { underlineLinkClass, mutedText, subtleBorder } from '../utils/styles';

function ProjectCard({ title, description, technologies, link, github }) {
  return (
    <div className={`pb-6 border-b ${subtleBorder} last:border-b-0 last:pb-0`}>
      <h3 className="font-mono text-lg mb-3">{title}</h3>
      <p className="text-lg mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech, index) => (
          <span key={index} className={`text-sm font-mono ${mutedText}`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
