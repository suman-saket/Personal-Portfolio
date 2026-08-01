import { mutedText, pageContainer } from '../utils/styles';

function Header() {
  return (
    <header className={`py-10 text-center ${pageContainer.home}`}>
      <h1 className="font-serif text-4xl mb-3">Welcome to My Portfolio</h1>
      <p className={`text-lg ${mutedText}`}>Full Stack Developer & Creative Problem Solver</p>
    </header>
  );
}

export default Header;
