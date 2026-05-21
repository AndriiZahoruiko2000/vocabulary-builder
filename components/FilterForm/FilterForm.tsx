"use client";

import css from "./FilterForm.module.css";
import CustomSelector from "../custom-components/CustomSelector/CustomSelector";
import { categories } from "@/helpers/constants";
import { useFilterWordsStore } from "@/store/filterWordsStore";
import FindWord from "../FindWord/FindWord";

const FilterForm = () => {
  const setWordsParams = useFilterWordsStore((s) => s.setWordsParams);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const wordsData = {
      category: formData.get("category") as string,
      keyword: formData.get("word") as string,
    };

    setWordsParams(wordsData);
  };
  return (
    <div className={css["filterForm"]}>
      <form onChange={handleSubmit} className={css["filter-form"]}>
        <FindWord />
        <CustomSelector categories={categories} name={"category"} />
      </form>
    </div>
  );
};

export default FilterForm;
