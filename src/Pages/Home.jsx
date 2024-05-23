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
      <div className=" ">
        <div className="p-36 flex h-full bg-gray-200 justify-between">
          <div className=" w-2/3">
            <h1 className="font-semibold text-2xl">Hello I'm</h1>
            <h5 className="font-semibold text-2xl">Muhammad Susilo</h5>
            <h1 className="text-3xl	">
              Software Developer || FrontEnd Developer
            </h1>
            <p className="my-2 text-base">
              Hello, welcome to personal website, <br />
              Scroll to view my portofolio
            </p>
            <div className="font-semibold my-8 flex group:">
              <div className="group mr-4">
                <Button css="group-hover:translate-y-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md">
                  Hire Me
                </Button>
              </div>
              <div className="group">
                <Button css="group-hover:translate-x-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md">
                  Download CV
                </Button>
              </div>
            </div>
            <SosialMedia />
          </div>
          <div className="w-1/3">
            <img
              src="https://placehold.co/400x400?font=roboto"
              alt="Muhammad Susilo"
              className="ml-10"
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
      </div>
    </>
  );
};

export default Home;
