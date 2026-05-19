"use client";

import { useRouter } from "next/navigation";
import css from "./LoginForm.module.css";
import { login } from "@/services/auth";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const loginData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await login(loginData);
    console.log(response);
    router.push("/dictionary");
  };

  return (
    <div className={css["loginForm"]}>
      <form action={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
