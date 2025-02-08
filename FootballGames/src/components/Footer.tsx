import { FC } from 'react';
const Footer: FC = () => {
  return (
    <footer className="bg-DavyGrey">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-white/80">
          <p className="text-sm">&copy; {new Date().getFullYear()} Football Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;