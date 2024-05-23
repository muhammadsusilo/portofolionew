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
      <h1>Muhammad Susilo</h1>
      <ul className="flex gap-4 mb-2 ">
       {listFooter.map((list) =>{
         <li key={list.id}>
           <a href={list.link}>{list.name}</a>
         </li>;
       })}
      </ul>
      <SosialMedia />
      <div>
        <p>Copyright &copy; 2021 Muhammad Susilo. All rights reserved.</p>
        <p>in created to React JS and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Footer;
