import SosialMedia from "../Elements/sosialMedia";
import Navbar from "../Fragments/Navbar";

const Home = () => {
    return (
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <div className="m-24 mx-36 flex justify-between">
          <div className=" mr-10">
            <h1 className="font-semibold text-2xl">Hello I</h1>
            <h5 className="font-semibold text-2xl">Muhammad Susilo</h5>
            <h1 className="text-3xl	">
              Software Developer || FrontEnd Developer
            </h1>
            <p className="my-2 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio ullam obcaecati deserunt culpa voluptate eius modi non
              omnis sunt recusandae
            </p>
            <div className="font-semibold my-8 flex group:">
              <div className="hover:translate-y-6 transition duration-150 ease-in">
                <a href="#" className="bg-orange-400 p-3 px-4 mr-3 rounded-md ">
                  <button>Hire Me</button>
                </a>
              </div>
              <div className="hover:translate-x-6 transition duration-150 ease-in">
                <a href="#" className="bg-orange-400 p-3 px-4 rounded-md">
                  <button>Download CV</button>
                </a>
              </div>
            </div>
            <SosialMedia/>
          </div>
          <div>
            <img
              src="https://placehold.co/500x500?font=roboto"
              alt="Muhammad Susilo"
              className="ml-10"
            />
          </div>
        </div>
      </div>
    );
}


export default Home;