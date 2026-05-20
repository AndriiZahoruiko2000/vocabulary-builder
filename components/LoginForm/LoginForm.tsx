"use client";

import { useRouter } from "next/navigation";
import css from "./LoginForm.module.css";
import { login } from "@/services/auth";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/store/userStore";

const LoginForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const loginData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await login(loginData);
    setUser(response);

    console.log(response);
    router.push("/dictionary");
  };

  return (
    <div className={css["login-container"]}>
      <div className={css["login-box"]}>
        <div className={css["login-img"]}>
          <Image
            src={"/auth/illustration.jpg"}
            alt="family"
            width={498}
            height={435}
          />
        </div>
        <div className={css["login"]}>
          <h4 className={css["login-title"]}>Login</h4>
          <p className={css["login-description"]}>
            Please enter your login details to continue using our service:
          </p>
          <form action={handleSubmit} className={css["login-form"]}>
            <div className={css["login-form-wrapper"]}>
              <input
                type="email"
                name="email"
                className={css["login-form-input"]}
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                className={css["login-form-input"]}
                placeholder="password"
              />
            </div>
            <button type="submit" className={css["login-form-btn"]}>
              login
            </button>
          </form>
          <Link href={"/auth/register"} className={css["login-link"]}>
            Register
          </Link>
        </div>
      </div>
      <Image
        className={css["vector"]}
        src={"/auth/Vector.png"}
        alt="illustration"
        width={564}
        height={466}
      />
    </div>
  );
};

export default LoginForm;
