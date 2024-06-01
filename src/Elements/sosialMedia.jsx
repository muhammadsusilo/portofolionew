import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faSquareWhatsapp,
  faWhatsapp,
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const sMedia = [
  {
    id: 1,
    name: 'Email',
    href: '#',
    ikon: faEnvelope,
  },
  {
    id: 2,
    name: 'Github',
    href: 'https://github.com/muhammadsusilo',
    ikon: faGithub,
  },
  {
    id: 3,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/muhammadsusilo/',
    ikon: faLinkedin,
  },
  {
    id: 4,
    name: 'WhatsApp',
    href: '#',
    ikon: faWhatsapp,
  },
];
const SosialMedia = () => {
  return (
    <div className="w-fit mx-3 my-3 flex animate__animated animate__backInUp animate__slow max-sm:justify-center max-sm:items-center max-sm:w-auto">
      {sMedia.map((media) => (
        <div className="text-center group" key={media.id}>
          <Link to={media.href}>
            <FontAwesomeIcon
              icon={media.ikon}
              className="bg-gray-300 rounded-full p-3 mx-2 size-6 group-hover:scale-150 transition-all duration-200 active:bg-violet-500 active:text-white"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SosialMedia;
