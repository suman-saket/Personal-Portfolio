import { meta, skillGroups } from '../data/home';
import {
  homeLeadClass,
  metaLabelClass,
  mutedText,
  pageContainer,
  sectionHeadingClass,
  subtleBorder,
  underlineLinkClass,
} from '../utils/styles';

const socials = [
  { href: 'https://x.com/Saa_Suuu', label: 'Twitter' },
  { href: 'https://github.com/suman-saket', label: 'Github' },
  { href: 'https://www.linkedin.com/in/saket-suman-2740801b1', label: 'LinkedIn' },
];

function Home() {
  return (
    <div className={`mt-8 pb-10 ${pageContainer.homeBoard}`}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <p className={homeLeadClass}>
          I am a software engineer passionate about BackEnd and applied AI and databases. Currently, I am a Software Engineer at Bighaat, working at the Core BackEnd Team building scalable BackEnd Services that powers million of customer requests across our App and Web Users.

I have 4.5+ years Professional Software Engineering Engineering Experience wokring in fast-moving, lean engineering team where i took ownership to of problems/feature from design to production.
          </p>

          <dl className="mt-8 space-y-2">
            {meta.map(({ label, value }) => (
              <div key={label} className="flex flex-wrap items-baseline gap-x-2">
                <dt className={metaLabelClass}>{label}:</dt>
                <dd className="text-base">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-5">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={underlineLinkClass}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className={`lg:border-l lg:pl-16 ${subtleBorder}`}>
          <h2 className={sectionHeadingClass}>Things I can work</h2>
          <ul className="mt-5 list-none space-y-4 p-0 m-0">
            {skillGroups.map(({ category, skills }) => (
              <li key={category}>
                <p className="font-semibold text-base">{category}</p>
                <p className={`mt-1 text-base leading-relaxed ${mutedText}`}>{skills}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
