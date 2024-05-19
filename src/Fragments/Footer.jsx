import SosialMedia from '../Elements/sosialMedia';

const Footer = () => {
  return (
    <div className="py-10 bg-gray-100 flex justify-center flex-col items-center text-center leading-loose">
      <h1>Muhammad Susilo</h1>
      <ul className="flex gap-4 mb-2 ">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Certificate</li>
        <li>Contact</li>
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
