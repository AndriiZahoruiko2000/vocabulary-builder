"use client";

import css from "./FilterForm.module.css";
import CustomSelector from "../custom-components/CustomSelector/CustomSelector";
import { categories } from "@/helpers/constants";
import { useFilterWordsStore } from "@/store/filterWordsStore";

const FilterForm = () => {
  const setWordsParams = useFilterWordsStore((s) => s.setWordsParams);

  const handleSubmit = async (formData: FormData) => {
    const wordsData = {
      category: formData.get("category") as string,
    };

    setWordsParams(wordsData);
  };
  return (
    <div className={css["filterForm"]}>
      <form action={handleSubmit}>
        <CustomSelector categories={categories} name={"category"} />
      </form>
    </div>
  );
};

export default FilterForm;
