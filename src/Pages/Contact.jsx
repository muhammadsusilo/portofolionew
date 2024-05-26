import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Fragments/Footer';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Container from '../Fragments/Container';

const contactku = [
  { id: 1, name: 'Email' },
  { id: 2, name: 'Linkedin' },
  { id: 3, name: 'WhatsApp' },
  { id: 4, name: 'Bussiness Card' },
];
const Contact = () => {
  return (
    <Fragment>
      <Container background="bg-gray-200">
        <Container.header>Contact</Container.header>
        <div className="bg">
          <h2 className="my-1 font-semibold text-lg">Contact information</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="leading-normal">
            {contactku.map((contac) => {
              return (
                <li key={contac.id}>
                  <Link to="#">{[contac.link, contac.name]}</Link>
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
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Contact;
