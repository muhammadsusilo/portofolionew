import Cart from '../Elements/cart';
import Container from '../Fragments/Container';

const Project = () => {
  return (
    <div>
      <Container
        id="project"
        background="pb-14 bg-p-project bg-center bg-no-repeat bg-cover bg-fixed"
      >
        <Container.header>Project</Container.header>
        <div className="flex gap-6 justify-center" data-aos="zoom-in">
          <Cart>
            <Cart.Header src="https://placehold.co/300x180" alt="E-Learning" />
            <Cart.Content
              title="E-learning"
              description="E-learning is Website to scholl in online learning"
            />
            <Cart.Footer />
          </Cart>

          <Cart>
            <Cart.Header src="https://placehold.co/300x180" alt="E-Learning" />
            <Cart.Content
              title="E-learning"
              description="E-learning is Website to scholl in online learning"
            />
            <Cart.Footer />
          </Cart>

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
    </div>
  );
};

export default Project;
