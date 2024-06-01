import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = (props) => {
  const { children, background, id } = props;
  return (
    <div
      id={`${id}`}
      className={`px-36 py-7 h-full ${background} max-lg:p-16 max-sm:px-6 max-sm:py-9`}
    >
      {children}
    </div>
  );
};

const header = (props) => {
  const { children } = props;
  return (
    <h1
      className="text-3xl mt-7 font-semibold flex justify-center mb-4 max-lg:text-2xl"
      
    >
      {children}
    </h1>
  );
};

Container.header = header;

export default Container;
