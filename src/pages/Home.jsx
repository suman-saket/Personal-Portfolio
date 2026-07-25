import { meta, skillGroups } from '../data/home';
import {
  divider,
  homeLeadClass,
  metaLabelClass,
  mutedText,
  pageContainer,
  sectionHeadingClass,
  underlineLinkClass,
} from '../utils/styles';

function Home() {
  return (
    <div className={`mt-8 pb-16 ${pageContainer.home}`}>
      <section className="space-y-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className={`min-w-0 flex-1 space-y-4 ${homeLeadClass}`}>
            {/* <p>
              Hi, myself, <span className="font-semibold">Saket Suman</span>
            </p> */}
            <p>
              An Engineer who started a bit late but now confident enough to learn and handle things on  fly.
            </p>
            {/* <p>
              Majority of the time either I am learning from documentation or building some cool stuffs :)
            </p> */}
          </div>

          <div className="space-y-2 md:shrink-0 md:text-right">
            {meta.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-wrap items-baseline gap-x-2 md:justify-end"
              >
                <span className={metaLabelClass}>{label}:</span>
                <span className="text-base">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className={divider} />

        <div>
          <h2 className={sectionHeadingClass}>Things I can work</h2>
          <ul className="mt-5 list-none space-y-5 p-0 m-0">
            {skillGroups.map(({ category, skills }) => (
              <li key={category} className="border-l-2 border-ink/15 pl-4 dark:border-ink/25">
                <p className="font-semibold text-base">{category}</p>
                <p className={`mt-1 text-base leading-relaxed ${mutedText}`}>{skills}</p>
              </li>
            ))}
          </ul>
        </div>

        <hr className={divider} />

        <div>
          <p className={`${homeLeadClass} mb-4`}>Here are my socials, if you are searching :)</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://x.com/Saa_Suuu"
              target="_blank"
              rel="noopener noreferrer"
              className={underlineLinkClass}
            >
              Twitter
            </a>
            <a
              href="https://github.com/suman-saket"
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
        </div>
      </section>
    </div>
  );
}

export default Home;
