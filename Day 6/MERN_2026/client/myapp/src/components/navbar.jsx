import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
