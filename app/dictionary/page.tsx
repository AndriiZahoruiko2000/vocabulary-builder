import FilterForm from "@/components/FilterForm/FilterForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <FilterForm />
    </div>
  );
};

export default Page;
