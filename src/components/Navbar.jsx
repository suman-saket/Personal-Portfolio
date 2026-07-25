import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { appShell, divider, navLinkClass, pageContainer } from '../utils/styles';

function Navbar() {
  const location = useLocation();
  const isBlogPost =
    location.pathname.startsWith('/blogs/') && location.pathname !== '/blogs';
  const isBlogSection = location.pathname.startsWith('/blogs');

  const containerClass = isBlogPost
    ? pageContainer.medium
    : isBlogSection
      ? pageContainer.wide
      : pageContainer.home;

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    //{ to: '/projects', label: 'Projects' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact', label: 'Contact' },
    // { to: '/about', label: 'About' },
  ];

  return (
    <nav className={`pt-6 ${appShell}`}>
      <div className={`${containerClass} flex flex-wrap items-center justify-between gap-x-6 gap-y-3`}>
        <Link to="/" className="font-serif text-4xl text-ink shrink-0">
          Saket Suman
        </Link>
        <ul className="flex flex-wrap items-center gap-5 list-none p-0 m-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={navLinkClass(isActive(to))}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
      <hr className={`mt-3 ${divider} ${containerClass}`} />
    </nav>
  );
}

export default Navbar;
