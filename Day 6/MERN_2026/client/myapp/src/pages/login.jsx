import "../css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

//   const showToast = (msg) => {
//     const toast = document.getElementById("toast");
//     toast.innerText = msg;
//     toast.classList.add("show");

//     setTimeout(() => {
//       toast.classList.remove("show");
//     }, 3000);
//   };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login payload : ", {
      email: form.email,
      password: form.password,
    });
    toast.success("Login Successful!");
    setForm({
      email: "",
      password: "",
    });

    // const phoneRegex = /^[0-9]{10}$/;
    // const passwordRegex = /^(?=.*[!@#$%^&*]).{8,}$/;

    // if (!phoneRegex.test(form.phone)) {
    //   showToast("Phone number must be exactly 10 digits");
    //   return;
    // }

    // if (!passwordRegex.test(form.password)) {
    //   showToast("Password must be 8 characters & contain 1 special character");
    //   return;
    // }

    // if (form.password !== form.confirmPassword) {
    //   showToast("Password and Confirm Password do not match");
    //   return;
    // }

    // ✅ All validations passed
    // showToast("Registration Successful!");

    setTimeout(() => {
      navigate("/"); // home page
    }, 1500);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <div className="login-container">
        <form className="login-card" onSubmit={handleLogin}>
          <h2>Login Yourself</h2>

          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              required
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="form-group">
            <label> <FaLock className="input-icon"/> Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              required
              onChange={handleChange}
              value={form.password}
            />
          </div>

          <button className="login-btn">Login</button>
          <p>
            Already Register{" "}
            <a href="/register" style={{ color: "yellow" }}>
              Click here
            </a>
          </p>
        </form>
      </div>

      <div id="toast"></div>
    </>
  );
};
