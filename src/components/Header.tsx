import { FC } from 'react';
import { Link } from 'react-router-dom';
import ballLogo from '../../public/ballLogo.png'
const Header: FC = () => {
  return (
    <header className="bg-#fff shadow-[0_1px_6px_0_rgba(0,0,0,0.07)]">
      <div className="container mx-auto px-4 h-40 flex items-center justify-between">
        <Link to="/" className='flex items-center justify-between '>
          <img className='w-[80px] h-[80px]' src={ballLogo}></img>
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