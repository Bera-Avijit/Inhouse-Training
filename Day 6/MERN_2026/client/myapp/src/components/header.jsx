import "../css/header.css";
import hitlogo from "../assets/hit-logo.png";

export const Header = () => {
  return (
    <>
      <div className="main-header-div">
        <img src={hitlogo} alt="hit logo" className="header-logo" />
        <h1 className="header-title">Haldia Institute of Technology</h1>
      </div>
    </>
  );
};
