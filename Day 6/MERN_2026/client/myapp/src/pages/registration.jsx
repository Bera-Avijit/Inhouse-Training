import "../css/register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Registration = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const showToast = (msg) => {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*]).{8,}$/;

    if (!phoneRegex.test(form.phone)) {
      showToast("Phone number must be exactly 10 digits");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      showToast("Password must be 8 characters & contain 1 special character");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showToast("Password and Confirm Password do not match");
      return;
    }

    // Backend API call for registration
    try {
      const payload = {
        username: form.username,
        email: form.email,
        phone: form.phone,
        password: form.password,
      };
      console.log("Registration payload : ", payload);

      const resposne = await axios.post(`${API_URL}/register`, payload);
      console.log("Registration response : ", resposne.data);

      // ✅ All validations passed
      showToast("Registration Successful!");

      setTimeout(() => {
        navigate("/login"); // home page
      }, 1500);
    } catch (error) {
      console.error("Registration error: ", error);
      showToast(error.response?.data?.message || "Registration failed. Please try again.");
      return;
    }
  };

  return (
    <>
      <div className="register-container">
        <form className="register-card" onSubmit={handleRegister}>
          <h2>Register Yourself</h2>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone: </label>
            <input
              type="number"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
          </div>

          <button className="register-btn">Register</button>
          <p>
            Already Login{" "}
            <a href="/login" style={{ color: "yellow" }}>
              Click here
            </a>
          </p>
        </form>
      </div>

      <div id="toast"></div>
    </>
  );
};
