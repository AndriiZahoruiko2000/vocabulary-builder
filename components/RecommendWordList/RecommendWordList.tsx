"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./RecommendWordList.module.css";
import { getWords } from "@/services/words";
import RecommendWordItem from "../RecommendWordItem/RecommendWordItem";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const RecommendWordList = () => {
  const [page, setPage] = useState(1);
  const recommendWordsQuery = useQuery({
    queryKey: ["getWords", page],
    queryFn: () => getWords({ page }),
  });

  const totalPages = recommendWordsQuery.data?.totalPages || 1;

  const recommendWords = recommendWordsQuery.data?.results || [];

  return (
    <div className={css["recommend-word-list"]}>
      <table className={css["recommend-table"]}>
        <thead className={css["recommend-head"]}>
          <tr className={css["recommend-row"]}>
            <th className={css["recommend-item"]}>Word</th>
            <th className={css["recommend-item"]}>Translation</th>
            <th className={css["recommend-item"]}>Category</th>
            <th className={css["recommend-item"]}></th>
          </tr>
        </thead>
        <tbody className={css["recommend-body"]}>
          {recommendWords.map((word, index) => {
            return <RecommendWordItem key={index} word={word} />;
          })}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default RecommendWordList;
