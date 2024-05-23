const skills = [
  'HTML5 & CSS3',
  'SASS',
  'Tailwind CSS',
  'JavaScript',
  'React JS',
];

const About = () => {
  return (
    <div className="px-36 py-20 h-full">
      <h1 className="text-3xl font-semibold flex justify-center mb-4">About</h1>
      <div className=" flex justify-between">
        <div>
          <img src="https://placehold.co/500x500?font=roboto" alt="About" />
        </div>
        <div className="pl-10">
          <p className="my-1">
            Hi I, Muhammad Susilo call me silo is ambiton to career Software
            Developer. And undergraduate in Terbuka University with major system
            Information.
          </p>
          <p>
            <span className="font-semibold"> Skills</span> <br />
            Skills silo yang dimiliki:
          </p>
          <ul className="mt-3 list-disc pl-6 text-sm">
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
