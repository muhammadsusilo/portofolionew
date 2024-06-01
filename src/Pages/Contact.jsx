import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Fragments/Footer';
import Container from '../Fragments/Container';
import { icon } from '@fortawesome/fontawesome-svg-core';

const contactku = [
  {
    id: 1,
    name: 'Email',
    ikon: <FontAwesomeIcon icon={faEnvelope} />,
    link: '#',
  },
  {
    id: 2,
    name: 'Linkedin',
    ikon: <FontAwesomeIcon icon={faLinkedin} />,
    link: '#',
  },
  {
    id: 3,
    name: 'WhatsApp',
    ikon: <FontAwesomeIcon icon={faWhatsapp} />,
    link: '#',
  },
  {
    id: 4,
    name: 'Bussiness Card',
    ikon: <FontAwesomeIcon icon={faIdCard} />,
    link: '#',
  },
];
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Container id="contact" background="bg-gray-200">
        <Container.header>Contact</Container.header>
        <div className="bg" data-aos="fade-down">
          <h2 className="my-1 font-semibold text-lg">Contact information</h2>
          <p>
            Here is my Contact, if want to collaborate, interested connecting
            and discussion potential opportunities.
          </p>
          <ul className="leading-normal">
            {contactku.map((contac) => {
              return (
                <li key={contac.id}>
                  <Link
                    to={contac.link}
                    className=" bg-sky-500 flex max-w-fit px-3 m-1 rounded-md transition-all hover:underline hover:translate-x-7 transition duration-100 decoration-double decoration-gray-100 active:bg-violet-600"
                  >
                    <span className="mr-2 text-xl">{contac.ikon}</span>
                    <span>{contac.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="#" className="w-fit ">
            <button className="my-5 p-2 px-16 bg-orange-400 rounded-lg hover:bg-orange-500 max-sm:w-full">
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
