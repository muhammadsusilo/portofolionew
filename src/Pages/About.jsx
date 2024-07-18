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
    <Container id="about">
      <div className="overflow-hidden max-sm:overflow-x-hidden max-sm:px-4">
        <Container.header>About</Container.header>
        <div className="flex justify-between pb-14 max-sm:flex-col max-sm:justify-center">
          {/* <div className="max-sm:order-2" data-aos="fade-in">
            <img src="img/skills.svg" alt="About" className='max-sm:w-3/4 max-w-full' />
          </div> */}
          <div className="pl-10 max-sm:pl-0">
            <p className="my-1" data-aos="fade-right">
              Hi, I am Muhammad Susilo, you can call me Silo. I am ambitious to
              pursue a career as a Software Developer and currently an
              undergraduate at Terbuka University majoring in Information
              Systems.
              {/* tambahkan tujuan career */}
            </p>
            <p data-aos="fade-left">
              <span className="font-semibold">Skills</span> <br />
              Skills that Silo possesses:
            </p>
            <ul
              className="mt-3 list-disc pl-6 text-sm max-sm:pl-4"
              data-aos="fade-left"
            >
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
