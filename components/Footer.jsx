import Link from 'next/link';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700" style={{ marginTop: '41.6rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-lg font-medium mb-4 md:mb-0">
            &copy; {currentYear} John Doe
          </div>
          <nav className="flex space-x-4">
            <Link
              href="#"
              className="text-white hover:text-green-200 transition duration-150 ease-in-out"
            >
              <FaXTwitter size={'2rem'} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-green-200 transition duration-150 ease-in-out"
            >
              <FaFacebook size={'2rem'} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-green-200 transition duration-150 ease-in-out"
            >
              <FaInstagram size={'2rem'} />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
