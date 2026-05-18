"use client";

import { SelectorItem } from "@/types/categories";
import css from "./CustomSelector.module.css";
import { useState } from "react";

interface CustomSelectorProps {
  categories: SelectorItem[];
  name: string;
}

const CustomSelector = ({ categories, name }: CustomSelectorProps) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleShowClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={css["customSelector"]}>
      <input
        type="text"
        name={name}
        value={selectedValue}
        onChange={() => {}}
      />

      <div onClick={handleShowClick}>{selectedValue || "Categories"}</div>

      {isShow && (
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleSelect(category.value);
                }}
              >
                {category.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelector;
