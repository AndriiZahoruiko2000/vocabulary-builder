"use client";
import Image from "next/image";
import css from "./AuthButtons.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useAuthStore } from "@/store/userStore";
import { logout } from "@/services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthButtons = () => {
  const isAuth = useAuthStore((s) => s.isAuth);
  const clearUser = useAuthStore((s) => s.clearIsAuth);
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();
    clearUser();
    router.push("/auth/login");
  };

  return (
    <div className={css["auth-buttons"]}>
      <div className={css["auth-profile-info"]}>
        <p className={css["auth-buttons-name"]}>Iryna</p>
        <div className={css["profile"]}>
          <Image
            src={"/auth/profile.svg"}
            alt="profile-img"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className={css["auth-logout"]}>
        {isAuth ? (
          <button className={css["logout-btn"]} onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <Link href={"/auth/login"} className={css["login-btn"]}>
            Log in
          </Link>
        )}
        <BsArrowRightShort width={20} height={20} />
      </div>
    </div>
  );
};

export default AuthButtons;
