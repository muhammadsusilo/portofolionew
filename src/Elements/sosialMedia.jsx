import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sMedia = [
  {
    id: 1,
    name: 'Linkedin',
    href: '#',
    icon: <FontAwesomeIcon icon="fa-brands fa-linkedin" />,
  },
  {
    id: 2,
    name: 'Github',
    href: '#',
    icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
  },
  {
    id: 3,
    name: 'Instagram',
    href: '#',
    icon: <FontAwesomeIcon icon="fa-brands fa-instagram" />,
  },
  {
    id: 4,
    name: 'Telegram',
    href: '#',
    icon: <FontAwesomeIcon icon="fa-brands fa-telegram" />,
  },
];

const SosialMedia = () => {
  return (
    <div>
      {/* {sMedia.map((social, index) => (
        <div key={index} className="bg-blue-500">
          {social.icon}
          <span>{social.name}</span>
          <FontAwesomeIcon icon="fa-brands fa-telegram" />
        </div>
      ))} */}
      <p>
        {/* <FontAwesomeIcon icon="check-square" /> */}
      </p>
    </div>
  );
};

export default SosialMedia;
