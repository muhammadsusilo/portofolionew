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
    href: '#',
    ikon: faEnvelope,
  },
  {
    id: 2,
    name: 'Github',
    href: '#',
    ikon: faGithub,
  },
  {
    id: 3,
    name: 'Linkedin',
    href: '#',
    ikon: faLinkedin,
  },
  {
    id: 4,
    name: 'Linkedin',
    href: '#',
    ikon: faWhatsapp,
  },
];
const SosialMedia = () => {
  return (
    <div className="w-fit mx-3 flex ">
      {sMedia.map((media) => (
        <div className="text-center group">
          <FontAwesomeIcon
            icon={media.ikon}
            className="bg-gray-300 rounded-full p-3 mx-2 size-6 group-hover:scale-150 transition-all duration-200"
          />
        </div>
      ))}
    </div>
  );
};

export default SosialMedia;
