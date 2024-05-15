

const Project =() => {
  return (
    <div className="px-36 pt-20  h-screen flex flex-col items-center">
      <h1 className="mb-5 text-2xl">Project</h1>
      {/* <div className="w-full max-w-xs bg-gray-400 rounded-lg"> */}
      <div className="bg-gray-400 max-w-xs w-full rounded-lg">
        <div className="">
          <img src="https://placehold.co/330x200" alt="project" />
        </div>
        <div className="">
          <h1>nama project</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            repellat.
          </p>
        </div>
        <div>
          <a href="#">
            <button>Show Project</button>
          </a>
          <a href="#">
            <button>Show Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;