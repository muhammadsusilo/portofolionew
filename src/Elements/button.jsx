import * as React from "react-router-dom";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { children,css} = props;
  return (
    <div>
      <Link to="#">
        <button
          className={`${css}`}
        >
          {children}
        </button>
      </Link>
    </div>
  );
}