import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../contents/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer bg-transparent-200 py-4">
      <div className="social-icons flex justify-center">
        <div className="icon-container flex gap-4">
          <a href="https://twitter.com/USAPhn" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 hover:text-blue-700" />
          </a>
          <a href="https://www.facebook.com/USAPhn" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-700" />
          </a>
          <a href="https://www.instagram.com/usaphn" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-700" />
          </a>
          <a href="https://www.youtube.com/@USAPhn" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-500 hover:text-red-700" />
          </a>
        </div>
      </div>
      <p className="text-center text-black-600 text-sm mt-2">Todos los Derechos Reservados USAP</p>
    </footer>
  );
};


