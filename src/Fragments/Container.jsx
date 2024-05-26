const Container = (props) => {
  const { children, background } = props;
  return (
    <div className={`px-36 py-20 h-full ${background} max-lg:p-16 `}>
      {children}
    </div>
  );
};

const header = (props) => {
  const { children } = props;
  return (
    <h1 className="text-3xl font-semibold flex justify-center mb-4 max-lg:text-2xl">
      {children}
    </h1>
  );
};

Container.header = header;

export default Container;
