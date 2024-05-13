// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const sMedia = [
//   {
//     id: 1,
//     name: 'Linkedin',
//     href: '#',
//     icon: <FontAwesomeIcon icon="fa-brands fa-linkedin" />,
//   },
//   {
//     id: 2,
//     name: 'Github',
//     href: '#',
//     icon: <FontAwesomeIcon icon="fa-brands fa-github" />,
//   },
//   {
//     id: 3,
//     name: 'Instagram',
//     href: '#',
//     icon: <FontAwesomeIcon icon="fa-brands fa-instagram" />,
//   },
//   {
//     id: 4,
//     name: 'Telegram',
//     href: '#',
//     icon: <FontAwesomeIcon icon="fa-brands fa-telegram" />,
//   },
// ];

// const SosialMedia = () => {
//   return (
//     <div>
//       {/* {sMedia.map((social, index) => (
//         <div key={index} className="bg-blue-500">
//           {social.icon}
//           <span>{social.name}</span>
//           <FontAwesomeIcon icon="fa-brands fa-telegram" />
//         </div>
//       ))} */}
//       <p>
//         {/* <FontAwesomeIcon icon="check-square" /> */}
//       </p>
//     </div>
//   );
// };

// export default SosialMedia;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareWhatsapp, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const sMedia = [
  {
    id: 1,
    name: 'Email',
    href: '#',
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    id: 2,
    name: 'Github',
    href: '#',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: 3,
    name: 'Linkedin',
    href: '#',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    id: 4,
    name: 'Linkedin',
    href: '#',
    icon: <FontAwesomeIcon icon={faSquareWhatsapp} />,
  },
];
const SosialMedia = () => {
  return (
    <div className="w-fit">
      {/* contact */}
      <div className="text-center bg-gray-300  rounded-full group">
        <div className="relative overflow-hidden p-3">
          <FontAwesomeIcon
            icon={faSquareWhatsapp}
            className=" size-8 group-hover:scale-150 transition-all duration-200"
          />
          {/* <div className="absolute">
            <span>WhatsApp</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SosialMedia;
