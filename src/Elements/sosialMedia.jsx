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

const sMedia = [
  {
    id: 1,
    name: 'Email',
    href: 'https://www.linkedin.com/in/muhammadsusilo/',
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
    href: 'https://www.linkedin.com/in/muhammadsusilo/',
    ikon: faWhatsapp,
  },
];
const SosialMedia = () => {
  return (
    <div className="w-fit mx-3 flex">
      {sMedia.map((media) => (
        <div className="text-center group">
          <a href={media.href}>
            <FontAwesomeIcon
              icon={media.ikon}
              className="bg-gray-300 rounded-full p-3 mx-2 size-6 group-hover:scale-150 transition-all duration-200"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SosialMedia;
