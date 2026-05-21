import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  setPage: (value: number) => void;
}

const Pagination = ({ totalPages, setPage }: PaginationProps) => {
  return (
    <div className={css["pagination"]}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => {
          console.log(event.selected);

          setPage(event.selected + 1);
        }}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
