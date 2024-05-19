import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Fragments/Footer';

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
            {/* untuk ke depan yang tulisan di a seperti email, linkedin, whatsapp, kartu nama bisa langsung  di tulis nama email, dll */}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-xl" />
                Email
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-xl" />
                Linkedin
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-3 text-xl" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faIdCard} className="mr-3 text-xl" />
                Bussiness Card
              </a>
            </li>
          </ul>
          <a href="#" className="w-fit">
            <button className="my-5 p-2 px-16 bg-orange-400 rounded-lg hover:bg-orange-500">
              {' '}
              Download CV
            </button>
          </a>
        </div>
        <div>{/* nanti disini form untuk masuk ke email */}</div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
