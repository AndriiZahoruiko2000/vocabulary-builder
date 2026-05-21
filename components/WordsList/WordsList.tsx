"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./WordsList.module.css";
import { getWordsOwn } from "@/services/words";
import { useFilterWordsStore } from "@/store/filterWordsStore";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

import WordItem from "../WordItem/WordItem";

const WordsList = () => {
  const wordsParams = useFilterWordsStore((s) => s.wordsParams);
  const [page, setPage] = useState(1);

  const wordsQuery = useQuery({
    queryKey: ["getWordsOwn", wordsParams, page],
    queryFn: () => getWordsOwn({ ...wordsParams, page }),
  });

  const words = wordsQuery.data?.results || [];
  const totalPages = wordsQuery.data?.totalPages || 1;

  return (
    <div className={css["words-list"]}>
      <table className={css["table"]}>
        <thead className={css["table-head"]}>
          <tr className={css["table-row"]}>
            <th className={css["table-row-item"]}>Word</th>
            <th className={css["table-row-item"]}>Translation</th>
            <th className={css["table-row-item"]}>Category</th>
            <th className={css["table-row-item"]}>Progress</th>
            <th className={css["table-row-item"]}></th>
          </tr>
        </thead>
        <tbody className={css["table-body"]}>
          {words.map((word, index) => {
            return <WordItem word={word} key={index} />;
          })}
        </tbody>
      </table>

      <Pagination totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default WordsList;
