import { pageContainer, mutedText } from '../utils/styles';

function About() {
  return (
    <div className={`mt-8 pb-12 ${pageContainer.home}`}>
      <section className="mb-8">
        <h1 className="text-lg mb-4">About Me</h1>
        <p className="text-lg leading-relaxed">
          Get to know more about my journey, passion, and what drives me as a developer.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        <div>
          <h2 className="text-lg font-semibold mb-4">My Story</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a passionate full-stack developer with a love for creating innovative web solutions.
            My journey in web development started with curiosity and has evolved into a career
            focused on building user-friendly, performant applications.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy working with modern technologies and am always eager to learn new tools and
            frameworks. When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-semibold">50+</h3>
            <p className={mutedText}>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">3+</h3>
            <p className={mutedText}>Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">100+</h3>
            <p className={mutedText}>Happy Clients</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
