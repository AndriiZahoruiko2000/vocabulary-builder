import FilterForm from "@/components/FilterForm/FilterForm";
import css from "./Page.module.css";
import WordController from "@/components/WordController/WordController";
import RecommendWordList from "@/components/RecommendWordList/RecommendWordList";

const Page = () => {
  return (
    <div className={css["recommend"]}>
      <div className="container">
        <div className={css["filter-container"]}>
          <FilterForm />
          <WordController />
        </div>
        <RecommendWordList />
      </div>
    </div>
  );
};

export default Page;
