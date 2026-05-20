"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./WordsList.module.css";
import { getWordsOwn } from "@/services/words";
import { useFilterWordsStore } from "@/store/filterWordsStore";

const WordsList = () => {
  const wordsParams = useFilterWordsStore((s) => s.wordsParams);

  const wordsQuery = useQuery({
    queryKey: ["getWordsOwn", wordsParams],
    queryFn: () => getWordsOwn(wordsParams),
  });

  const words = wordsQuery.data?.results || [];

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
            return (
              <tr key={index} className={css["table-row"]}>
                <td className={css["table-row-item"]}>{word.en}</td>
                <td className={css["table-row-item"]}>{word.ua}</td>
                <td className={css["table-row-item"]}>{word.category}</td>
                <td className={css["table-row-item"]}>{word.progress}</td>
                <td className={css["table-row-item"]}>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul></ul>
    </div>
  );
};

export default WordsList;
