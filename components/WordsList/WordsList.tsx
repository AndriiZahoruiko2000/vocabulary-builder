"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./WordsList.module.css";
import { getWords } from "@/services/words";

const WordsList = () => {
  const wordsQuery = useQuery({
    queryKey: ["getWords"],
    queryFn: () => getWords({}),
  });

  const words = wordsQuery.data?.results || [];

  return (
    <div className={css["wordsList"]}>
      <ul>
        {words.map((word, index) => {
          return <li key={index}>{word.en}</li>;
        })}
      </ul>
    </div>
  );
};

export default WordsList;
