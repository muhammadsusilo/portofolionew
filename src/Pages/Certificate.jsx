import Container from '../Fragments/Container';

const Certificate = () => {
  return (
    <Container id="certificate">
      <Container.header>Education and Certificate</Container.header>
      <p className="text-center" data-aos="zoom-out">
        These is a education and certificate learning outcomes outside nonformal
        education
      </p>
      <div className="flex justify-center pt-5 pb-14">
        <div className="carousel gap-2">
          <div className="carousel-item rounded-box">
            <img
              src="img/certificate_udemy.jpg"
              alt="Certificate"
              className="w-80 h-56"
            />
          </div>
          <div className="carousel-item rounded-box">
            <img
              src="img/certificate_meta.jpg"
              alt="Certificate"
              className="w-80 h-56"
            />
          </div>
          <div className="carousel-item rounded-box">
            <img
              src="img/certificate_dicoding.jpg"
              alt="Certificate"
              className="w-80 h-56"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Certificate;
