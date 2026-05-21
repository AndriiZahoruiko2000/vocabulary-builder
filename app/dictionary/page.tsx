import FilterForm from "@/components/FilterForm/FilterForm";
import css from "./Page.module.css";
import WordsList from "@/components/WordsList/WordsList";
import WordController from "@/components/WordController/WordController";

const Page = () => {
  return (
    <div className={css["dictionary"]}>
      <div className="container">
        <div className={css["filter-container"]}>
          <FilterForm />
          <WordController />
        </div>
        <WordsList />
      </div>
    </div>
  );
};

export default Page;
