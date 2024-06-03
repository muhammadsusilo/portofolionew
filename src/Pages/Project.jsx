import Cart from '../Elements/cart';
import Container from '../Fragments/Container';

const Project = () => {
  return (
    <Container id="project" background="bg-gray-200">
      <Container.header>Project</Container.header>
      <div className="flex justify-center" data-aos="zoom-in">
        <Cart>
          <Cart.Header src="https://placehold.co/300x180" alt="E-Learning" />
          <Cart.Content
            title="E-learning"
            description="E-learning is Website to scholl in online learning"
          />
          <Cart.Footer />
        </Cart>
      </div>
    </Container>
  );
};

export default Project;
