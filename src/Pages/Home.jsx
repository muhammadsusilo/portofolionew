import SosialMedia from '../Elements/sosialMedia';
import Navbar from '../Fragments/Navbar';
import About from './About';
import Certificate from './Certificate';
import Contact from './Contact';
import Project from './Project';
import Button from '../Elements/Button';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="p-36 py-24 pt-36 flex h-full bg-gray-200 justify-between max-lg:p-16 max-lg:pt-28 max-sm:flex max-sm:justify-center max-sm:flex-col max-w-sm:items-center max-sm:px-4 max-sm:py-9 max-sm:pt-24">
        <div className=" w-2/3 max-sm:order-2 max-sm:w-full ">
          <h1 className="font-semibold text-2xl max-md:text-xl">Hello I'm</h1>
          <h5 className="font-semibold text-2xl max-md:text-xl">
            Muhammad Susilo
          </h5>
          <h1 className="text-3xl	max-lg:text-2xl">
            Software Developer || FrontEnd Developer
          </h1>
          <p className="my-2 text-base">
            Hello, welcome to personal website, <br />
            Scroll to view my portofolio
          </p>
          <div className="font-semibold my-8 flex group: max-sm:flex max-sm:justify-center">
            <div className="group mr-4" >
              <Button css="group-hover:translate-y-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md max-lg:p-2">
                Hire Me
              </Button>
            </div>
            <div className="group">
              <Button css="group-hover:translate-x-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md max-lg:p-2">
                Download CV
              </Button>
            </div>
          </div>
          <SosialMedia />
        </div>
        <div className="w-1/3 max-sm:order-1 max-sm:mb-6 max-sm:w-full">
          <img
            src="img/muhammadsusiloo.svg"
            alt="Muhammad Susilo"
            className="ml-10 max-sm:m-0 max-sm:m-0"
          />
          {/* <img
                src="img/muhammadsusilo.png"
                alt="Muhammad Susilo"
                className="ml-10"
              /> */}
        </div>
      </div>
      <About />
      <Project />
      <Certificate />
      <Contact />
    </>
  );
};

export default Home;
