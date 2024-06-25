const Container = (props) => {
  const { children, background, id } = props;
  return (
    <div
      id={`${id}`}
      className={`px-36 py-2 h-full ${background} max-lg:p-16 max-sm:px-6 max-sm:py-9 `}
    >
      {children}
    </div>
  );
};

const header = (props) => {
  const { children } = props;
  return (
    <h1 className="text-3xl mt-14 font-semibold flex justify-center mb-4 hover:underline hover:decoration-solid hover:decoration-lime-500 max-lg:text-2xl max-xl:pt-3">
      {children}
    </h1>
  );
};

Container.header = header;

export default Container;
