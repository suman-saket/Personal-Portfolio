import ProjectCard from '../components/ProjectCard';
import { pageContainer } from '../utils/styles';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard that displays current weather and forecasts for multiple cities.',
      technologies: ['React', 'API Integration', 'CSS3'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      title: 'Social Media App',
      description:
        'A social media platform with posts, comments, likes, and user profiles.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
  ];

  return (
    <div className={`mt-8 pb-12 ${pageContainer.home}`}>
      <h1 className="text-lg mb-6">Projects</h1>
      <section className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
