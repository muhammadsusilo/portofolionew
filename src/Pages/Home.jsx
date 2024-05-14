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
              {/* <div className="hover:translate-y-6 transition duration-150 ease-in">
                <a href="#" className="bg-orange-400  rounded-md ">
                  <button>Hire Me</button>
                </a>
              </div> */}
              <div className="group mr-4 ">
                <a href="">
                  <button className="group-hover:translate-y-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md">
                    Hire Me
                  </button>
                </a>
              </div>
              <div className="group ">
                <a href="">
                  <button className="group-hover:translate-x-6 bg-orange-400 hover:bg-orange-600 transition duration-200 ease-in  p-3 rounded-md">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            <SosialMedia />

            <div>
              <a
                href="#"
                class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
              >
                <div class="flex items-center space-x-3">
                  <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
                    New project
                  </h3>
                </div>
                <p class="text-slate-500 group-hover:text-white text-sm">
                  Create a new project from a variety of starting templates.
                </p>
              </a>
            </div>
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