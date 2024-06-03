import * as React from 'react';
import { Link } from 'react-router-dom';
import SosialMedia from '../Elements/sosialMedia';

const listFooter = [
  { id: 1, link: '#home', name: 'Home' },
  { id: 2, link: '#about', name: 'About' },
  { id: 3, link: '#project', name: 'Project' },
  { id: 4, link: '#certificate', name: 'Certificate' },
  { id: 5, link: '#contact', name: 'Contact' },
];

const Footer = () => {
  const handleScroll = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-gray-100 flex justify-center flex-col items-center text-center leading-loose">
      <h1 className="mb-5 text-2xl hover:underline decoration-wavy decoration-orange-500 active:decoration-violet-500">
        <span>Muhammad</span> <span>Susilo</span>
      </h1>
      <div className="mb-2">
        <SosialMedia />
      </div>
      <ul className="flex gap-1 my-2 ">
        {listFooter.map((list) => (
          <li
            key={list.id}
            className="px-3 transition-all rounded-md hover:border hover:border-violet-700 max-sm:px-1 max-sm:hover:text-violet-600"
          >
            <Link to={list.link} onClick=
              {(e) => {
                e.preventDefault();
                handleScroll(list.link);
              }}>
             
              {list.name}
            </Link>{' '}
          </li>
        ))}
      </ul>
      <div className="text-sm my-4">
        <p>Copyright &copy; 2024 Muhammad Susilo. All rights reserved.</p>
        <p>in created to React JS and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Footer;
