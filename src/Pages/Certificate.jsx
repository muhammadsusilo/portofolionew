import Container from '../Fragments/Container';

const Certificate = () => {
  return (
    <Container>
      <Container.header>Education and Certificate</Container.header>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        officiis alias dolor. Eligendi quam alias nam et sint
      </p>
      <div className="flex justify-center pt-5">
        {/* nanti di sini di bikin caurosel */}
        <img
          src="https://placehold.co/300x200?font=roboto"
          alt="caurosel"
          className="rounded"
        />
      </div>
    </Container>
  );
};

export default Certificate;
