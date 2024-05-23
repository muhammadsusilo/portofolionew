import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faEdge } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
  return (
    <div className="px-36 py-20 h-full bg-gray-300 flex flex-col items-center">
      <h1 className="text-3xl font-semibold flex justify-center mb-4">
        Project
      </h1>
      <div className="bg-white max-w-xs w-full rounded-lg ">
        <div className="">
          <img
            src="https://placehold.co/330x200"
            // src="img/muhammadsusilo.png"
            alt="project"
            className="rounded-lg"
          />
        </div>
        <div className="p-1 text-sm">
          <h1 className=" py-1 text-base font-semibold">E-learning</h1>
          <p>E-learning is Website to scholl in online learning</p>
          <p className="py-1 flex gap-2">
            tech :
            <span className="p-1 bg-gray-200 rounded-xl hover:bg-gray-400 duration-100">
              React JS
            </span>
            <span className="p-1 bg-gray-200 rounded-xl hover:bg-gray-400 duration-100">
              Tailwind CSS
            </span>
          </p>
          <div className="py-2 flex justify-end gap-x-2">
            <a
              href="#"
              className="p-1 bg-gray-200 text-xs rounded-xl hover:bg-gray-400 duration-100"
            >
              <button>
                <FontAwesomeIcon icon={faEdge} className="px-1" />
                Show Project
              </button>
            </a>
            <a
              href="#"
              className="p-1 bg-gray-200 text-xs rounded-xl hover:bg-gray-400 duration-100"
            >
              <button>
                <FontAwesomeIcon icon={faGithub} className="px-1" />
                Show Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
