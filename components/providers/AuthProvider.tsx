"use client";

import { getMe } from "@/services/auth";
import { useAuthStore } from "@/store/userStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((s) => s.setUser);
  const clearIsAuth = useAuthStore((s) => s.clearIsAuth);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getMe();
      if (user) {
        setUser(user);
      } else {
        clearIsAuth();
      }
    };
    fetchUser();
  }, [setUser, clearIsAuth]);

  return children;
};

export default AuthProvider;
