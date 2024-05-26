
import Container from '../Fragments/Container';
const skills = [
  'HTML5 & CSS3',
  'SASS',
  'Tailwind CSS',
  'JavaScript',
  'React JS',
];

const About = () => {
  return (
    <Container>
      <Container.header>About</Container.header>
      <div className=" flex justify-between">
        <div>
          <img src="img/skills.svg" alt="About" />
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
    </Container>
  );
};

export default About;
