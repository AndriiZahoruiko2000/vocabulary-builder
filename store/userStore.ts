import { User } from '@/types/user';
import { create } from "zustand";



type UserStore = {
    user: User | null;
    isAuth: boolean;
    setUser: (user:User)=>void;
    clearIsAuth: ()=>void;
}

export const useAuthStore = create<UserStore>()((set)=>({
    isAuth: false,
    user: null,
    setUser: (user: User)=>{set(()=>({user, isAuth:true}))},
    clearIsAuth: ()=>{set(()=>({user: null, isAuth:false}))}
}))