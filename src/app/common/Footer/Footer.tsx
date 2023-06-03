import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer>
      <div className=" bg-j-dark flex justify-center">
        <div className="container text-white py-5 px-2 sm:px-4 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-bold">Contatos</h3>
            <a
              className="text-sm flex my-2 items-center"
              href="tel:+5561999999999"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="fa-lg text-gray-100 mr-3"
              />
              (61) 99999-9999
            </a>
            <a
              className="text-sm flex my-2 items-center"
              href="mailto:contato@codesneakers.com.br"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fa-lg text-gray-100 mr-3"
              />
              contato@codesneakers.com.br
            </a>
            <a className="text-sm flex my-2 items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="fa-lg text-gray-100 mr-3"
              />
              Quadra X Bloco Y - Brasília/DF
            </a>
          </div>
          <div className="flex flex-col items-center sm:items-start mt-5 sm:mt-0">
            <h3 className="text-xl font-bold">Redes Sociais</h3>
            <a
              className="text-sm flex my-2 items-center"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="fa-2x text-gray-100 mr-3"
              />
              /codesneakers
            </a>
            <a
              className="text-sm flex mb-2 items-center"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fa-2x text-gray-100 mr-3"
              />
              /codesneakers
            </a>
            <a
              className="text-sm flex items-center"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="fa-2x text-gray-100 mr-3"
              />
              @CodeSneakers
            </a>
          </div>
          <div className="hidden lg:flex flex-col">
            <h3 className="text-xl font-bold">Code Sneakers</h3>
            <p className="text-sm">Loja virtual de tênis.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
