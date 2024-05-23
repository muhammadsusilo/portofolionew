import Cart from "../Elements/cart";


const Project = () => {
  return (
    <div className="px-36 py-20 h-full bg-gray-300 flex flex-col items-center">
      <h1 className="text-3xl font-semibold flex justify-center mb-4">
        Project
      </h1>
      <div>
        <Cart>
          <Cart.Header src="https://placehold.co/330x200" alt="E-Learning" />
          <Cart.Content
            title="E-learning"
            description="E-learning is Website to scholl in online learning"
          />
          <Cart.Footer />
        </Cart>
      </div>
    </div>
  );
};

export default Project;
