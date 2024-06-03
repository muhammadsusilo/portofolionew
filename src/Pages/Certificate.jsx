import Container from '../Fragments/Container';

const Certificate = () => {
  return (
    <Container id="certificate">
      <Container.header>Education and Certificate</Container.header>
      <p className="text-center" data-aos="zoom-out">
        These is a education and certificate learning outcomes outside nonformal
        education
      </p>
      <div className="flex justify-center pt-5">
        {/* nanti di sini di bikin caurosel */}
        <img
          src="https://placehold.co/300x200?font=roboto"
          alt="carousel"
          className="rounded"
          data-aos="zoom-in-up"
        />
      </div>
    </Container>
  );
};

export default Certificate;
