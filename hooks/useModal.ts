'use client';

import { useState } from "react";


export const useModal = (defaultValue: boolean = false)=>{
    const [isOpen, setIsOpen] = useState(defaultValue);

    const openModal = ()=>{
        setIsOpen(true)
    };
    const closeModal = ()=>{
        setIsOpen(false)
    };
    const toggleModal = ()=>{
        setIsOpen(!isOpen)
    };

    return [isOpen, openModal, closeModal, toggleModal, setIsOpen]
}