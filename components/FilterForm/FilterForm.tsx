"use client";
import { getWords } from "@/services/words";
import css from "./FilterForm.module.css";
import CustomSelector from "../custom-components/CustomSelector/CustomSelector";
import { categories } from "@/helpers/constants";

const FilterForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const wordsData = {
      category: formData.get("category") as string,
    };

    const response = await getWords(wordsData);
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
