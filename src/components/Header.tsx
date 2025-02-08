import { FC } from 'react';
import { Link } from 'react-router-dom';
const Header: FC = () => {
  return (
    <header className="bg-gradient-to-b from-LavenderMist to-white border-b border-gray-200 ">
      <div className="container mx-auto px-4 h-48 flex items-center justify-between ">
        <Link to="/" className="group">
          <h1 className="text-4xl md:text-6xl text-DavyGrey font-kavoon
                      transition-all duration-300 ease-in-out
                      group-hover:text-blue-400">
            FOOTBALL GAMES
          </h1>
        </Link>
      </div>
    </header>
  );
};
export default Header;