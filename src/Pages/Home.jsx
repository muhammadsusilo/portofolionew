import SosialMedia from '../Elements/sosialMedia';
import Navbar from '../Fragments/Navbar';
import About from './About';
import Certificate from './Certificate';
import Contact from './Contact';
import Project from './Project';
import Button from '../Elements/Button';

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="p-36 py-24 pt-36 flex h-full bg-gray-200 justify-between max-lg:p-16 max-lg:pt-28 max-sm:group target:scale-100 target:opacity-100 max-sm:flex max-sm:justify-center max-sm:flex-col max-w-sm:items-center max-sm:px-6 max-sm:py-9 max-sm:pt-24">
        <div className=" w-2/3 max-sm:order-2 max-sm:w-full ">
          <div className="animate__animated animate__backInLeft">
            <h1 className="font-semibold text-2xl max-md:text-xl max-sm:text-2xl">
              Hello I'm
            </h1>
            <h5 className="font-semibold text-2xl max-md:text-xl max-sm:text-2xl">
              Muhammad Susilo
            </h5>
          </div>

          <h1 className="text-3xl	max-lg:text-2xl animate__animated animate__fadeIn">
            Software Developer ||{' '}
            <span className="max-sm:wll">FrontEnd Developer</span>
          </h1>
          <p className="my-2 text-base animate__animated animate__backInRight">
            Hello, welcome to personal website, <br />
            Scroll to view my portofolio
          </p>
          <div className="font-semibold my-8 flex group: max-sm:flex max-sm:justify-center max-sm:my-6">
            <div className="group mr-4">
              <Button css="group-hover:translate-y-6 px-8 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md max-lg:p-2 max-sm:px-8 animate__animated animate__fadeIn">
                Hire Me
              </Button>
            </div>
            <div className="group">
              <Button css="group-hover:translate-x-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md max-lg:p-2 max-sm:px-3 animate__animated animate__fadeIn">
                Download CV
              </Button>
            </div>
          </div>
          <SosialMedia />
        </div>
        <div className="w-1/3 max-sm:order-1 max-sm:mb-6 max-sm:w-full animate__animated animate__backInDown ">
          <img
            src="img/muhammadsusiloo.svg"
            alt="Muhammad Susilo"
            className="ml-10  max-sm:m-auto max-sm:w-2/3"
          />
        </div>
      </div>
      <About />
      <Project />
      <Certificate />
      <Contact />
    </div>
  );
};

export default Home;
