import FilterForm from "@/components/FilterForm/FilterForm";
import css from "./Page.module.css";
import WordsList from "@/components/WordsList/WordsList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <FilterForm />
      <WordsList />
    </div>
  );
};

export default Page;
