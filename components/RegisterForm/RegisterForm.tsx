"use client";
import Link from "next/link";
import css from "./RegisterForm.module.css";
import { register } from "@/services/auth";
import Image from "next/image";

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
    <div className={css["register-container"]}>
      <div className={css["register-box"]}>
        <div className={css["register-img"]}>
          <Image
            src={"/auth/illustration.jpg"}
            alt="family"
            width={498}
            height={435}
          />
        </div>
        <div className={css["register"]}>
          <h4 className={css["register-title"]}>Register</h4>
          <p className={css["register-text"]}>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
          </p>
          <form action={handleSubmit} className={css["register-form"]}>
            <div className={css["register-input-box"]}>
              <input
                type="text"
                name="name"
                className={css["register-input"]}
                placeholder="name"
              />
              <input
                type="email"
                name="email"
                className={css["register-input"]}
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                className={css["register-input"]}
                placeholder="password"
              />
            </div>
            <button type="submit" className={css["register-btn"]}>
              Register
            </button>
          </form>
          <Link href={"/auth/login"} className={css["register-link"]}>
            Login
          </Link>
        </div>
      </div>
      <Image
        className={css["register-vector"]}
        src={"/auth/Vector.png"}
        alt="illustration"
        width={564}
        height={466}
      />
    </div>
  );
};

export default RegisterForm;
