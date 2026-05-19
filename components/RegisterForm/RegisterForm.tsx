"use client";
import Link from "next/link";
import css from "./RegisterForm.module.css";
import { register } from "@/services/auth";

const RegisterForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const registerData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await register(registerData);
  };

  return (
    <div className={css["registerForm"]}>
      <h4 className="register-title">Register</h4>
      <p className="register-text">
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
      <form action={handleSubmit} className={css["register-form"]}>
        <input type="text" name="name" className="register-input" />
        <input type="email" name="email" className="register-input" />
        <input type="password" name="password" className="register-input" />
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <Link href={"/"} className="register-link">
        Login
      </Link>
    </div>
  );
};

export default RegisterForm;
