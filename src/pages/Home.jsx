import { pageContainer, divider, underlineLinkClass } from '../utils/styles';

function Home() {
  return (
    <div className={`mt-8 ${pageContainer.home}`}>
      <section>
        <h1 className="text-lg">
          Hi, myself <span className="font-semibold">Saket Suman</span>
        </h1>
        <h1 className="mt-4 text-lg">
          An Engineer who loves to learn new stuffs about Web Development, Full Stack, and Core Backend stuffs.
        </h1>
        <h1 className="mt-4 text-lg">
          Majority of the time either I am learning from documentation or building some cool stuffs :)
        </h1>
        <h1 className="mt-4 text-lg">Here are my socials, if you are searching :)</h1>

        <hr className={`my-5 ${divider}`} />

        <div className="flex flex-wrap gap-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/saket-suman-2740801b1"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
