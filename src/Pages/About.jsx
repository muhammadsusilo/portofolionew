const About = () => {
  return (
    <div>
      <div className="px-36 py-20 h-screen flex justify-between">
        <div className="">
          <img src="https://placehold.co/500x500?font=roboto" alt="About" />
        </div>
        <div className="pl-10">
          <h1 className="text-2xl font-semibold">About</h1>
          <p className="my-1">
            Muhammad Susilo call me silo is ambiton to career Software
            Developer. And undergraduate Terbuka University with major system
            Information.
          </p>
          <p>
            <span className="font-semibold mb-1 text-xl"> Skills</span> <br />
            Skills silo yang dimiliki:
            <ul className="">
              <li>HTML5 & CSS3</li>
              <li>SASS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
              {/* <li>PHP</li> */}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
