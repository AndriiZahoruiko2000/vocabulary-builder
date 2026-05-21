"use client";

import { SelectorItem } from "@/types/categories";
import css from "./CustomSelector.module.css";
import { useState } from "react";
import clsx from "clsx";

interface CustomSelectorProps {
  categories: SelectorItem[];
  name: string;
  isDarkMode?: boolean;
}

const CustomSelector = ({
  categories,
  name,
  isDarkMode,
}: CustomSelectorProps) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsShow(false);
  };

  const handleShowClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div
      className={clsx(
        css["custom-selector"],
        isDarkMode && css["is-dark-mode"],
      )}
    >
      <input
        type="text"
        name={name}
        value={selectedValue}
        onChange={() => {}}
        className={css["custom-input"]}
      />

      <div onClick={handleShowClick}>{selectedValue || "Categories"}</div>

      {isShow && (
        <ul className={css["category-list"]}>
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
