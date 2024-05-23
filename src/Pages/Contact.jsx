import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Fragments/Footer';
import { Link } from 'react-router-dom';

const contactku = [
  { id: 1, name: 'Email' },
  { id: 2, name: 'Linkedin'},
  { id: 3, name: 'WhatsApp'},
  { id: 4, name: 'Bussiness Card' },
];
const Contact = () => {
  return (
    <>
      <div className="px-36 py-20 h-full bg-gray-300">
        <h1 className="text-3xl font-semibold flex justify-center mb-4">
          Contact
        </h1>
        <div className="bg">
          <h2 className="my-1 font-semibold text-lg">Contact information</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="leading-normal">
            {contactku.map((contac) => {
              // <li key={list.id}>
              //   <Link to={list.href} className="flex items-center mb-2">
              //     <FontAwesomeIcon icon={list.ikon} className="mr-3 text-xl" />
              //     {list.name}
              //   </Link>
              // </li>
             return (
               <li key={contac.id}>
                 <Link to="#">{contac.name}</Link>
               </li>
             );
            })}
          </ul>
          <Link to="#" className="w-fit">
            <button className="my-5 p-2 px-16 bg-orange-400 rounded-lg hover:bg-orange-500">
              Download CV
            </button>
          </Link>
        </div>
        <div>{/* nanti disini form untuk masuk ke email */}</div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
