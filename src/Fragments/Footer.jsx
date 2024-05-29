import * as React from 'react';
import { Link } from "react-router-dom";
import SosialMedia from '../Elements/sosialMedia';

const listFooter = [
  {id: 1,link: '#', name: 'Home'},
  {id: 2,link: '#', name: 'About'},
  {id: 3,link: '#', name: 'Project'},
  {id: 4,link: '#', name: 'Certificate'},
  {id: 5,link: '#', name: 'Contact'},
];

const Footer = () => {
  return (
    <div className="py-10 bg-gray-100 flex justify-center flex-col items-center text-center leading-loose">
      <h1 className="mb-5 text-2xl hover:underline decoration-wavy decoration-orange-500 active:decoration-violet-500">
        <span>Muhammad</span> <span>Susilo</span>
      </h1>
      <ul className="flex gap-4 mb-2 ">
        {listFooter.map((list) => {
          <li key={list.id}>
            <Link to={list.link}>{list.name}</Link>
          </li>;
        })}
      </ul>
      <SosialMedia />
      <div className="text-sm mt-2">
        <p>Copyright &copy; 2024 Muhammad Susilo. All rights reserved.</p>
        <p>in created to React JS and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Footer;
