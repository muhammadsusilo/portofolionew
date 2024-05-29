import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faEdge } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { children } = props;
  return (
    <div className="bg-white flex flex-col w-full max-w-72  rounded-lg shadow-lg shadow-gray-600 max-lg:">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { src, alt } = props;
  return (
    <div>
      <div>
        <Link to="#">
          <img src={src} alt={alt} className="rounded-lg" />
        </Link>
      </div>
    </div>
  );
};
const Content = (props) => {
  const { title, description, tech } = props;
  return (
    <div>
      <div className="p-1 px-2 text-sm">
        <h1 className=" py-1 text-base font-semibold">{title}</h1>
        <p>{description}</p>
        <p className="py-1 flex gap-2">
          tech :{/* catatan ini nanti di jadikan looping */}
          <span className="p-1 bg-gray-200 rounded-xl hover:bg-gray-400 duration-100">
            React JS
          </span>
          <span className="p-1 bg-gray-200 rounded-xl hover:bg-gray-400 duration-100">
            Tailwind CSS
          </span>
        </p>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="p-2 flex justify-end gap-x-2">
        <Button css="p-1 bg-gray-200 text-xs rounded-xl hover:bg-gray-400 duration-100">
          <FontAwesomeIcon icon={faEdge} className="px-1" />
          Show Project
        </Button>
        <Button css="p-1 bg-gray-200 text-xs rounded-xl hover:bg-gray-400 duration-100">
          <FontAwesomeIcon icon={faGithub} className="px-1" />
          Show Code
        </Button>
      </div>
    </div>
  );
};

Cart.Header = Header;
Cart.Content = Content;
Cart.Footer = Footer;

export default Cart;
