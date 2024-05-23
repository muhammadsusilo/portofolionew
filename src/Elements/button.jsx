

export default function Button(props) {
  const { children,css} = props;
  return (
    <div>
      <a href="#">
        <button
          className={`${css}`}
        >
          {children}
        </button>
      </a>
    </div>
  );
}