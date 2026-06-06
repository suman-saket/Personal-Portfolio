import { underlineLinkClass, appShell, divider, mutedText, pageContainer } from '../utils/styles';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${divider} ${appShell}`}>
      <div className={`${pageContainer.home} flex flex-wrap justify-between items-center gap-4`}>
        <p className={`text-sm ${mutedText}`}>&copy; {currentYear} Portfolio. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saket-suman-2740801b1"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={underlineLinkClass}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
